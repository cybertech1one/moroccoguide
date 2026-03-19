import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ArrowRight,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Shield,
  AlertTriangle,
  Globe,
  Wallet,
  BookOpen,
  Lightbulb,
  Banknote,
  Compass,
  Users,
  Zap,
  Info,
  Timer,
  CreditCard,
  ShieldCheck,
  CircleAlert,
  HelpCircle,
  Plane,
  Train,
  Trophy,
  Ticket,
  Building,
  Heart,
  Calendar,
} from 'lucide-react';

/* =====================================================================
   CONSTANTS
   ===================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco World Cup 2030 Guide | Host Cities, Stadiums, Travel Tips & Fan Info',
  description:
    'Complete Morocco World Cup 2030 travel guide. Moroccan host cities (Casablanca, Rabat, Marrakech, Tangier, Agadir, Fes), stadium info, transport, accommodation, visa rules, fan zones, budget planning, and safety tips for FIFA 2030.',
  keywords: [
    'Morocco World Cup 2030',
    'FIFA 2030 Morocco',
    'World Cup Morocco travel guide',
    '2030 World Cup host cities Morocco',
    'Morocco World Cup stadiums',
    'Casablanca World Cup stadium',
    'Rabat World Cup 2030',
    'Marrakech World Cup',
    'Tangier World Cup stadium',
    'Morocco fan zone 2030',
    'World Cup Morocco visa',
    'Morocco 2030 accommodation',
    'FIFA World Cup Morocco tickets',
    'Morocco football culture',
    'World Cup transport Morocco',
    'Morocco 2030 travel tips',
    'World Cup budget Morocco',
    'Morocco Spain Portugal 2030',
  ],
  openGraph: {
    title: 'Morocco World Cup 2030 Guide | Host Cities, Stadiums & Travel Tips',
    description:
      'Plan your FIFA 2030 trip to Morocco. Host cities, stadiums, transport links, accommodation, visa info, fan zones, safety tips, and budget planning for football fans.',
    url: `${BASE_URL}/morocco-world-cup-2030`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of a Moroccan city with modern stadium architecture and Atlas Mountains backdrop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco World Cup 2030 Guide | FIFA 2030 Travel & Fan Info',
    description:
      'Host cities, stadiums, transport, visa info, accommodation, and budget tips for fans traveling to Morocco for the 2030 FIFA World Cup.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-world-cup-2030` },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-world-cup-2030`,
  name: 'Morocco World Cup 2030 Guide | Host Cities, Stadiums, Travel Tips & Fan Info',
  description:
    'Comprehensive travel guide for the 2030 FIFA World Cup in Morocco covering host cities, stadiums, transport, accommodation, visa requirements, fan zones, Moroccan football culture, safety, and budget planning.',
  url: `${BASE_URL}/morocco-world-cup-2030`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-world-cup-2030`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco World Cup 2030', item: `${BASE_URL}/morocco-world-cup-2030` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which cities in Morocco will host 2030 World Cup matches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco will host matches in six cities: Casablanca, Rabat, Marrakech, Tangier, Agadir, and Fes. Casablanca will feature the new Grand Stade Hassan II, which is expected to host the final. Each host city is undergoing major stadium and infrastructure upgrades to meet FIFA standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa to visit Morocco for the 2030 World Cup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citizens of over 65 countries including the USA, UK, EU nations, Canada, Australia, and Japan can enter Morocco visa-free for up to 90 days. For the World Cup, Morocco is expected to introduce a special Fan ID system that may provide visa-free or simplified entry for ticket holders from countries that normally require a visa. Check the latest requirements closer to the tournament.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get between World Cup host cities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is investing heavily in transport for 2030. The Al Boraq high-speed train connects Tangier to Casablanca in 2 hours 10 minutes with stops in Rabat. ONCF conventional trains link most host cities. CTM and Supratours buses cover all routes. Domestic flights connect Casablanca to all host cities in under an hour. The motorway network is excellent for self-driving between cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Grand Stade Hassan II in Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Grand Stade Hassan II is a new mega-stadium being built in Casablanca with a planned capacity of approximately 115,000 seats, making it the largest football stadium in the world. Designed by international architects, it will feature a retractable roof, state-of-the-art facilities, and is expected to host the 2030 World Cup final. Construction is a centerpiece of Morocco\'s World Cup preparations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I budget for attending the World Cup in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget traveler can expect to spend from 800 to 1,200 MAD per day covering basic accommodation, food, and local transport. Mid-range travelers should budget from 1,500 to 2,500 MAD per day. Match tickets are sold through FIFA and prices vary by round and category. Morocco is generally more affordable than European World Cup destinations, with excellent street food from 30 MAD and riads from 400 MAD per night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for football fans during the World Cup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is considered one of the safest countries in Africa for tourists. The country has extensive experience hosting major international events and will deploy significant security for the World Cup. Moroccan people are famously welcoming to visitors. Standard travel precautions apply: watch for pickpockets in crowded areas, use official taxis, and stay aware of your surroundings. Emergency number for police is 19.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does the 2030 World Cup take place in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 2030 FIFA World Cup is scheduled for June and July 2030. The tournament is co-hosted by Morocco, Spain, and Portugal, with matches spread across all three countries. Morocco will host a significant portion of group stage matches and knockout rounds. The opening ceremony and opening match are planned for the Grand Stade Hassan II in Casablanca, while the final is also expected in Casablanca.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the weather like in Morocco during the World Cup in June-July?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'June and July are hot in Morocco. Coastal cities like Casablanca, Rabat, Tangier, and Agadir enjoy milder temperatures of 22-28 degrees Celsius with ocean breezes. Inland cities like Marrakech and Fes can reach 35-42 degrees Celsius. Stadiums will have cooling measures and evening matches will be more comfortable. Pack sunscreen, hats, and light clothing. Stay hydrated and plan sightseeing for mornings and evenings.',
      },
    },
  ],
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  {
    label: 'Host Cities',
    value: '6 Moroccan Cities',
    detail: 'Casablanca, Rabat, Marrakech, Tangier, Agadir, Fes',
    icon: MapPin,
  },
  {
    label: 'Flagship Stadium',
    value: '115,000 Seats',
    detail: 'Grand Stade Hassan II in Casablanca',
    icon: Trophy,
  },
  {
    label: 'Tournament Dates',
    value: 'June-July 2030',
    detail: 'Co-hosted with Spain and Portugal',
    icon: Calendar,
  },
  {
    label: 'Daily Budget',
    value: 'From 800 MAD',
    detail: 'Budget traveler; mid-range from 1,500 MAD/day',
    icon: Wallet,
  },
] as const;

/* =====================================================================
   DATA: HOST CITIES & STADIUMS
   ===================================================================== */

const hostCities = [
  {
    city: 'Casablanca',
    stadium: 'Grand Stade Hassan II',
    capacity: '~115,000',
    status: 'New build (under construction)',
    highlights: 'World Cup final venue, retractable roof, largest stadium in the world, located in the Anfa district',
    gettingThere: 'Mohammed V International Airport (CMN), Al Boraq high-speed train, extensive motorway connections',
    accommodation: 'Huge hotel capacity from budget hostels (from 150 MAD) to luxury 5-star hotels; new hotels under construction for 2030',
  },
  {
    city: 'Rabat',
    stadium: 'Stade Moulay Abdallah (renovated)',
    capacity: '~68,000',
    status: 'Existing, major renovation underway',
    highlights: 'Capital city venue, close to Hassan Tower and Kasbah of the Udayas, modern tram network',
    gettingThere: 'Rabat-Sale Airport (RBA), Al Boraq train from Tangier/Casablanca, 90 km from Casablanca by motorway',
    accommodation: 'Government quarter hotels, boutique riads in the medina from 400 MAD, beachfront options in Sale',
  },
  {
    city: 'Marrakech',
    stadium: 'Grand Stade de Marrakech (expanded)',
    capacity: '~65,000',
    status: 'Existing, expansion planned',
    highlights: 'Gateway to the Atlas Mountains, Jemaa el-Fnaa square, vibrant medina, world-famous souks and nightlife',
    gettingThere: 'Marrakech Menara Airport (RAK), ONCF train, 2.5 hours from Casablanca by motorway',
    accommodation: 'Thousands of riads from 300 MAD/night, hotels in Gueliz new town, luxury resorts in the Palmeraie',
  },
  {
    city: 'Tangier',
    stadium: 'Grand Stade de Tangier (expanded)',
    capacity: '~75,000',
    status: 'Existing, expansion planned',
    highlights: 'Gateway from Europe, Strait of Gibraltar views, new Tangier City waterfront, vibrant international atmosphere',
    gettingThere: 'Tangier Ibn Battouta Airport (TNG), Al Boraq high-speed train, ferries from Spain (Tarifa/Algeciras)',
    accommodation: 'Beach hotels in Malabata from 350 MAD, medina guesthouses, new waterfront hotels opening for 2030',
  },
  {
    city: 'Agadir',
    stadium: 'Grand Stade d\'Agadir (expanded)',
    capacity: '~50,000',
    status: 'Existing, upgrade planned',
    highlights: 'Beach resort city, year-round sunshine, surfing at Taghazout, gateway to the Souss Valley and Anti-Atlas',
    gettingThere: 'Agadir Al Massira Airport (AGA), CTM/Supratours buses, 3 hours from Marrakech by motorway',
    accommodation: 'All-inclusive beach resorts, budget apartments from 250 MAD, seafront hotels along the corniche',
  },
  {
    city: 'Fes',
    stadium: 'Stade de Fes (new/renovated)',
    capacity: '~50,000',
    status: 'New build or major renovation planned',
    highlights: 'UNESCO World Heritage medina, oldest university in the world, tanneries, incredible food scene',
    gettingThere: 'Fes-Saiss Airport (FEZ), ONCF train from Casablanca/Rabat, 3 hours from Casablanca by motorway',
    accommodation: 'Palatial riads in the medina from 350 MAD, modern hotels in Ville Nouvelle, boutique stays near Bab Boujloud',
  },
] as const;

/* =====================================================================
   DATA: TRANSPORT CONNECTIONS
   ===================================================================== */

const transportLinks = [
  { route: 'Tangier to Casablanca', mode: 'Al Boraq (high-speed train)', duration: '2h 10min', cost: 'From 149 MAD' },
  { route: 'Casablanca to Rabat', mode: 'Al Boraq / ONCF train', duration: '45min - 1h', cost: 'From 50 MAD' },
  { route: 'Casablanca to Marrakech', mode: 'ONCF train', duration: '2h 30min', cost: 'From 100 MAD' },
  { route: 'Casablanca to Fes', mode: 'ONCF train', duration: '3h 30min', cost: 'From 120 MAD' },
  { route: 'Casablanca to Agadir', mode: 'CTM bus / domestic flight', duration: '4h bus / 1h flight', cost: 'From 180 MAD bus' },
  { route: 'Marrakech to Agadir', mode: 'Supratours bus / car', duration: '3h', cost: 'From 120 MAD' },
  { route: 'Tangier to Rabat', mode: 'Al Boraq (high-speed train)', duration: '1h 30min', cost: 'From 120 MAD' },
  { route: 'Tarifa (Spain) to Tangier', mode: 'FRS/Inter Shipping ferry', duration: '35min - 1h', cost: 'From 350 MAD' },
] as const;

/* =====================================================================
   DATA: FAN ESSENTIALS
   ===================================================================== */

const fanEssentials = [
  {
    tip: 'Book accommodation early',
    detail: 'World Cup demand will push prices up significantly. Book hotels and riads at least 6-12 months in advance. Consider staying in cities near host venues and commuting by train. Apartment rentals on platforms like Airbnb offer value for groups.',
    icon: Building,
  },
  {
    tip: 'Get your tickets through FIFA',
    detail: 'Match tickets are sold exclusively through FIFA.com. Sales typically open in phases starting 12-18 months before the tournament. Register for a FIFA account early. Beware of unofficial resellers and scam websites offering World Cup tickets.',
    icon: Ticket,
  },
  {
    tip: 'Carry Moroccan dirhams (MAD)',
    detail: 'The Moroccan dirham is the local currency. ATMs are widely available in all host cities. Credit cards are accepted at hotels and restaurants but cash is essential for taxis, street food, and souks. Exchange offices (bureaux de change) are at airports and city centers.',
    icon: Banknote,
  },
  {
    tip: 'Buy a local SIM card',
    detail: 'Maroc Telecom, Inwi, and Orange Morocco offer tourist SIM cards from 30 MAD with data packages. Available at airports and phone shops. Mobile data is essential for navigation, match updates, and translation apps. Free WiFi is common in hotels and cafes.',
    icon: Zap,
  },
  {
    tip: 'Learn basic French and Arabic phrases',
    detail: 'French is widely spoken in Morocco alongside Arabic and Amazigh. English is common in tourist areas but less so elsewhere. Learning "Shukran" (thank you), "Salam" (hello), and basic French phrases will enhance your experience and earn local respect.',
    icon: BookOpen,
  },
  {
    tip: 'Respect local customs',
    detail: 'Morocco is a Muslim-majority country. Dress modestly when visiting mosques and traditional neighborhoods. During Ramadan, avoid eating or drinking in public during daylight hours. Alcohol is available in licensed hotels, bars, and restaurants but not in public spaces.',
    icon: Heart,
  },
] as const;

/* =====================================================================
   DATA: INFRASTRUCTURE UPGRADES
   ===================================================================== */

const infrastructureUpgrades = [
  'Grand Stade Hassan II in Casablanca: 115,000-seat mega-stadium with retractable roof, the centerpiece of Morocco 2030',
  'Al Boraq high-speed rail extension: potential new routes connecting more cities at 320 km/h',
  'Airport expansions at Casablanca Mohammed V, Marrakech Menara, and Tangier Ibn Battouta for increased capacity',
  'New motorway sections and ring roads around host cities to manage match-day traffic',
  'Casablanca and Rabat tram network expansions with direct lines to stadium areas',
  'Over 30,000 new hotel rooms planned across all six host cities by 2030',
  'Fan zone infrastructure in city centers with giant screens, food courts, and entertainment stages',
  'Enhanced digital infrastructure: 5G coverage in all host cities and stadiums, free public WiFi zones',
] as const;

/* =====================================================================
   DATA: MOROCCAN FOOTBALL CULTURE
   ===================================================================== */

const footballCulture = [
  {
    title: 'Atlas Lions Legacy',
    text: 'Morocco made history at the 2022 Qatar World Cup by becoming the first African and Arab nation to reach the semi-finals. The Atlas Lions electrified the football world and united an entire continent behind them. The 2030 tournament on home soil carries enormous national pride.',
    icon: Trophy,
  },
  {
    title: 'Passionate Fan Culture',
    text: 'Moroccan football fans are among the most passionate in the world. Tifo displays, drums, chanting, and elaborate choreography define the matchday atmosphere. Visiting fans can expect an electric, welcoming, and incredibly loud stadium experience.',
    icon: Users,
  },
  {
    title: 'Club Football Powerhouses',
    text: 'Wydad Casablanca and Raja Casablanca are the two biggest clubs, with fierce derbies that fill stadiums. Other major clubs include AS FAR (Rabat), FUS Rabat, and Moghreb Tetouan. Attending a Botola Pro league match before the World Cup is a great way to experience local football culture.',
    icon: Star,
  },
  {
    title: 'Street Football Everywhere',
    text: 'Football is woven into daily Moroccan life. You will see kids playing in medina alleyways, on beaches, and in parks. Informal street games and five-a-side pitches are everywhere. This grassroots passion is what produced talents like Achraf Hakimi, Hakim Ziyech, and Youssef En-Nesyri.',
    icon: Heart,
  },
] as const;

/* =====================================================================
   DATA: SAFETY TIPS FOR FANS
   ===================================================================== */

const safetyTips = [
  'Morocco is one of the safest countries in North Africa for tourists with a strong police and gendarmerie presence',
  'Use official taxis (petit taxi within cities, grand taxi between cities) and agree on the fare before departure',
  'Watch for pickpockets in crowded areas such as train stations, souks, and around stadiums on match days',
  'Stay hydrated in the summer heat; carry water, wear sunscreen, and seek shade during the hottest hours (12-4 PM)',
  'Avoid unlicensed money changers; use banks, ATMs, or official exchange offices for currency conversion',
  'Keep copies of your passport, tickets, and insurance documents in a separate location from the originals',
  'Emergency numbers: Police 19, Gendarmerie (rural) 177, Ambulance 15, Fire 15, Tourist Police 0800-001-015',
  'Download offline maps and translation apps before arriving as mobile data may be slow in very crowded areas',
] as const;

/* =====================================================================
   DATA: RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    href: '/worldcup-2030',
    title: 'World Cup 2030 Overview',
    description: 'Full overview of the 2030 FIFA World Cup across Morocco, Spain, and Portugal with match schedules and venues.',
    icon: Trophy,
  },
  {
    href: '/football',
    title: 'Moroccan Football Guide',
    description: 'Explore Moroccan club football, the Botola Pro league, stadiums, and how to attend a local match.',
    icon: Star,
  },
  {
    href: '/transport',
    title: 'Morocco Transport Guide',
    description: 'Complete guide to trains, buses, taxis, domestic flights, and getting around Morocco efficiently.',
    icon: Globe,
  },
  {
    href: '/morocco-trip-cost',
    title: 'Morocco Trip Cost Guide',
    description: 'Budget planning for Morocco: accommodation, food, transport, activities, and money-saving tips.',
    icon: Wallet,
  },
  {
    href: '/accommodations',
    title: 'Morocco Accommodation Guide',
    description: 'Hotels, riads, hostels, and rentals across Morocco with booking tips and price ranges.',
    icon: Building,
  },
] as const;

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoWorldCup2030Page() {
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
            <span className="text-white">Morocco World Cup 2030</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Trophy className="w-4 h-4" />
            FIFA World Cup 2030
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco World Cup 2030
            <br className="hidden md:block" /> Complete Fan Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to plan your trip to Morocco for the 2030 FIFA World Cup &mdash; host cities,
            stadiums, transport, accommodation, visa info, fan zones, and budget tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The World Cup Comes to Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In 2030, the FIFA World Cup will be co-hosted by Morocco, Spain, and Portugal in a historic
                tri-continental tournament &mdash; the first World Cup to span Africa and Europe. For Morocco,
                this is the culmination of decades of ambition and five previous bids, and the nation is pouring
                unprecedented investment into stadiums, transport, and hospitality infrastructure.
              </p>
              <p>
                Six Moroccan cities will host matches: Casablanca, Rabat, Marrakech, Tangier, Agadir, and Fes.
                The crown jewel is the Grand Stade Hassan II in Casablanca, set to become the largest football
                stadium on Earth with approximately 115,000 seats and a retractable roof. Morocco demonstrated
                its footballing passion to the world during the 2022 Qatar World Cup, where the Atlas Lions
                became the first African team to reach the semi-finals.
              </p>
              <p>
                For fans, Morocco offers an unbeatable combination: world-class football, ancient medinas,
                stunning landscapes, incredible cuisine, and warm hospitality &mdash; all at prices significantly
                lower than typical European World Cup destinations. This guide covers every practical detail
                you need to plan your 2030 World Cup adventure in Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Facts -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Trophy className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco 2030 at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about Morocco&apos;s role in the 2030 FIFA World Cup.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact) => {
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

      {/* -- Host Cities & Stadiums -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Host Cities &amp; Stadiums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six cities across Morocco will welcome the world in 2030. Here is what each venue offers.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {hostCities.map((hc) => (
              <div key={hc.city} className="card-moroccan p-6">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {hc.city}
                </h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Stadium:</strong> {hc.stadium} ({hc.capacity})</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Status:</strong> {hc.status}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Highlights:</strong> {hc.highlights}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Plane className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Getting there:</strong> {hc.gettingThere}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Stay:</strong> {hc.accommodation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Stadium capacities and details are based on current plans and may be updated as construction progresses.
          </p>
        </div>
      </section>

      {/* -- Transport Between Cities -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Between Host Cities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s transport network makes it easy to follow matches across multiple cities.
          </p>

          <div className="card-moroccan p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-primary)]">
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Route</th>
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Mode</th>
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Duration</th>
                    <th className="text-left py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {transportLinks.map((tl) => (
                    <tr key={tl.route} className="border-b border-[var(--border-primary)] last:border-0">
                      <td className="py-3 pr-4 text-[var(--text-secondary)]">{tl.route}</td>
                      <td className="py-3 pr-4 text-[var(--text-secondary)]">{tl.mode}</td>
                      <td className="py-3 pr-4 text-[var(--text-secondary)]">{tl.duration}</td>
                      <td className="py-3 font-semibold text-[var(--color-accent)]">{tl.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4">
              Transport prices may change seasonally and are approximate for 2026. World Cup special services may be added closer to the tournament.
            </p>
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Al Boraq High-Speed Train</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Morocco&apos;s Al Boraq is Africa&apos;s first and only high-speed railway, running at up to
                  320 km/h between Tangier and Casablanca with stops in Kenitra and Rabat. For World Cup fans
                  attending matches in both Tangier and Casablanca, this is the fastest and most comfortable
                  way to travel. Book tickets online at oncf.ma or at station counters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Fan Essentials -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ticket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fan Essentials &amp; Travel Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for football fans planning their World Cup trip to Morocco.
          </p>

          <div className="space-y-4">
            {fanEssentials.map((fe) => {
              const FeIcon = fe.icon;
              return (
                <div key={fe.tip} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <FeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {fe.tip}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{fe.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Visa Information -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa Information for Fans
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you need to know about entry requirements for Morocco in 2030.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Visa-Free Countries
              </h3>
              <ul className="space-y-3">
                {[
                  'USA, Canada, UK, and EU citizens: visa-free for up to 90 days',
                  'Australia, New Zealand, Japan, South Korea: visa-free entry',
                  'Most South American nations: visa-free for 90 days',
                  'Many African nations including Senegal, Gabon, and Tunisia: visa-free',
                  'Gulf states (UAE, Qatar, Saudi Arabia, Bahrain, Kuwait, Oman): visa-free',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Fan ID &amp; Special Entry
              </h3>
              <ul className="space-y-3">
                {[
                  'A FIFA Fan ID system is expected, similar to Russia 2018 and Qatar 2022',
                  'Fan ID may allow visa-free entry for ticket holders from restricted countries',
                  'Register on the official FIFA platform once ticket sales open',
                  'Your passport must be valid for at least 6 months beyond your travel dates',
                  'Confirm the latest visa rules with the Moroccan embassy before booking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Important Visa Note</p>
                <p className="text-[var(--text-secondary)]">
                  Visa policies can change. The information above reflects current Moroccan entry rules as of
                  2026. Morocco may introduce special World Cup visa arrangements closer to 2030. Always verify
                  with official sources before traveling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Infrastructure Upgrades -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Infrastructure &amp; Upgrades for 2030
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is investing billions of dirhams in world-class infrastructure ahead of the tournament.
          </p>

          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {infrastructureUpgrades.map((upgrade) => (
                <li key={upgrade} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{upgrade}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* -- Moroccan Football Culture -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Trophy className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Football Culture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understand the passion, history, and electric atmosphere of Moroccan football.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {footballCulture.map((fc) => {
              const FcIcon = fc.icon;
              return (
                <div key={fc.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FcIcon className="w-4.5 h-4.5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {fc.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{fc.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Budget Planning -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Planning for Fans
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers excellent value compared to European World Cup destinations.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 text-center">
                Budget Fan
              </h3>
              <p className="text-2xl font-bold text-[var(--color-accent)] text-center font-[family-name:var(--font-display)] mb-4">
                From 800 MAD/day
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {[
                  'Hostel or shared room from 150 MAD',
                  'Street food and local restaurants from 30 MAD per meal',
                  'Local transport (bus, tram) from 6 MAD',
                  'Fan zone viewing (free entry expected)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6 border-[var(--color-accent)] border-2">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 text-center">
                Mid-Range Fan
              </h3>
              <p className="text-2xl font-bold text-[var(--color-accent)] text-center font-[family-name:var(--font-display)] mb-4">
                From 1,500 MAD/day
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {[
                  'Riad or 3-star hotel from 400 MAD',
                  'Restaurant meals from 80 MAD',
                  'Taxis and trains between cities',
                  'Match tickets (group stage from ~600 MAD)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 text-center">
                Luxury Fan
              </h3>
              <p className="text-2xl font-bold text-[var(--color-accent)] text-center font-[family-name:var(--font-display)] mb-4">
                From 3,500 MAD/day
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {[
                  '5-star hotel or luxury riad from 1,500 MAD',
                  'Fine dining from 300 MAD per meal',
                  'Private transfers and VIP experiences',
                  'Premium match tickets and hospitality packages',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)] text-center mt-6">
            Prices are estimates based on 2026 rates. World Cup demand will increase accommodation costs.
            Seasonal pricing may apply and prices can change.
          </p>
        </div>
      </section>

      {/* -- Safety for Fans -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Tips for Fans
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a safe and welcoming destination. Keep these tips in mind for a smooth experience.
          </p>

          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {safetyTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <CircleAlert className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Weather Warning</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  The World Cup takes place in June-July when Morocco can be very hot, especially in inland
                  cities like Marrakech and Fes (35-42 degrees Celsius). Coastal cities (Casablanca, Tangier, Agadir) are
                  cooler at 22-28 degrees Celsius. Stay hydrated, wear sunscreen and a hat, and plan outdoor
                  sightseeing for early mornings and evenings. Stadiums will have cooling measures in place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about attending the 2030 World Cup in Morocco.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related World Cup Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco World Cup adventure with these detailed guides.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[var(--color-accent)] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center max-w-3xl">
          <Trophy className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready for the Greatest Show on Earth?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco 2030 will be more than a World Cup &mdash; it will be a celebration of African football,
            Moroccan hospitality, and the beautiful game on a historic stage. Start planning your trip now
            and experience the magic of the Atlas Lions on home soil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/worldcup-2030"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Trophy className="w-5 h-5" />
              World Cup 2030 Overview
            </Link>
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              Transport Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

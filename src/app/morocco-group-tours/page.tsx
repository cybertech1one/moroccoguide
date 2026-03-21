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
  AlertTriangle,
  Globe,
  Wallet,
  BookOpen,
  Compass,
  Users,
  CalendarDays,
  Heart,
  Shield,
  Mountain,
  Camera,
  Gem,
  Bus,
  Building,
  Award,
  DollarSign,
  Info,
  Lightbulb,
  Route,
  Crown,
  Tent,
  HandCoins,
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-group-tours`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Group Tours 2026 | Small Group, Private & Adventure Tours Compared',
  description:
    'Complete guide to Morocco group tours in 2026. Compare small group (4-12), medium (12-20), and large (20+) tours. Top operators like Intrepid and G Adventures, popular routes, pricing from 8,000 MAD, itinerary breakdowns, solo traveler tips, and what is included.',
  keywords: [
    'Morocco group tours',
    'small group tours Morocco',
    'Morocco tour operators',
    'Intrepid Morocco tour',
    'G Adventures Morocco',
    'Morocco adventure tour group',
    'private group tour Morocco',
    'luxury group tour Morocco',
    'Morocco guided tour',
    'Morocco desert group tour',
    'Morocco imperial cities tour',
    'best group tours Morocco 2026',
    'Morocco tour price comparison',
    'solo traveler group tour Morocco',
    'Morocco cultural group tour',
    'Morocco tour itinerary',
  ],
  openGraph: {
    title: 'Morocco Group Tours 2026 | Small Group, Private & Adventure Tours Compared',
    description:
      'Compare every type of Morocco group tour: small group, large bus, private, adventure, cultural, and luxury. Pricing, top operators, popular routes, and tips for solo travelers joining groups.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'A small group of travelers exploring the ancient medina streets of Morocco with a local guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Group Tours 2026 | Small Group, Private & Adventure Compared',
    description:
      'Compare small group, private, adventure, cultural, and luxury group tours across Morocco. Top operators, pricing from 8,000 MAD, itineraries, and solo traveler tips.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the ideal group size for a Morocco tour?',
    a: 'Most experienced travelers recommend groups of 8-12 people. This size is small enough to fit in a single minibus, enter riads and medinas without splitting up, and maintain a personal feel with the guide. Groups under 8 cost more per person, while groups over 15 start losing flexibility at restaurants and historic sites.',
  },
  {
    q: 'Can I join a group tour as a solo traveler?',
    a: 'Yes, and this is one of the most popular ways solo travelers explore Morocco. Operators like Intrepid, G Adventures, and local companies run scheduled departures that solo travelers can book into. You will typically share a room with another solo traveler of the same gender, or you can pay a single supplement (from 2,000 MAD to 5,000 MAD depending on the trip length) for a private room.',
  },
  {
    q: 'How far in advance should I book a group tour?',
    a: 'For peak season (March-May and September-November), book 3-4 months ahead. Popular departures with Intrepid and G Adventures sell out 6-8 weeks before departure. For shoulder season (June-August, December-February), 4-6 weeks is usually enough. Last-minute spots occasionally open due to cancellations, but do not count on this for specific dates.',
  },
  {
    q: 'Are tips included in group tour prices?',
    a: 'Almost never. Tipping is expected and separate from the tour cost. Budget from 50-100 MAD per day for your main guide, from 30-50 MAD per day for drivers, and from 20-30 MAD for local site guides. Some operators collect tips into a communal envelope at the end of the trip. Your tour leader will brief you on local tipping norms early in the trip.',
  },
  {
    q: 'What meals are typically included in a Morocco group tour?',
    a: 'Most tours include daily breakfast and roughly half of the dinners, especially in remote areas like the Sahara where there are no restaurant options. Lunches are almost always at your own expense, giving you freedom to explore local eateries. Budget from 60-120 MAD per lunch and from 100-200 MAD for non-included dinners. Luxury tours often include all meals.',
  },
  {
    q: 'Is a Morocco group tour suitable for older travelers or those with mobility issues?',
    a: 'Standard cultural tours covering imperial cities work well for most fitness levels, though medinas have uneven cobblestones and stairs. Adventure tours involving Atlas Mountain treks or desert camping require moderate fitness. Luxury tours tend to be the most accessible, with premium vehicles and hotels with elevators. Operators like Intrepid list a physical rating (1-5) for each trip so you can choose accordingly.',
  },
  {
    q: 'What happens if I do not get along with my group?',
    a: 'On most tours, you have ample free time built into the itinerary. You are not required to eat every meal together or participate in every optional activity. Good tour leaders manage group dynamics, and most travelers find the social aspect is a highlight. If a serious issue arises, contact the operator directly since reputable companies have 24/7 support lines.',
  },
  {
    q: 'Can I customize a group tour itinerary or is it fixed?',
    a: 'Scheduled group departures follow a fixed itinerary. If you want to change the route, add extra days, or skip certain stops, book a private group tour instead. Private tours for groups of 4+ are surprisingly affordable since the cost per person drops significantly. Many local operators design custom itineraries within 48 hours of your inquiry.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Group Tours 2026 | Small Group, Private & Adventure Tours Compared',
  description:
    'Complete guide to Morocco group tours covering group sizes, top operators, popular routes, pricing, itinerary comparisons, and tips for solo travelers joining group tours.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Group Tours', item: PAGE_URL },
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
   DATA: GROUP TOUR TYPES
   ================================================================ */

const tourTypes = [
  {
    name: 'Small Group Tours (4-12)',
    icon: Users,
    price: 'From 12,000 MAD per person (8-10 days)',
    pros: [
      'Personal attention from guide',
      'Fits in one minibus — no waiting for stragglers',
      'Access to small riads and intimate restaurants',
      'Flexible pace at monuments and souks',
      'Easier to form lasting friendships',
    ],
    cons: [
      'Higher per-person cost than large groups',
      'May cancel if minimum numbers not met',
      'Less departure date flexibility',
    ],
    bestFor: 'First-time Morocco visitors, photographers, solo travelers wanting connection',
  },
  {
    name: 'Medium Group Tours (12-20)',
    icon: Bus,
    price: 'From 8,000 MAD per person (8-10 days)',
    pros: [
      'Good balance of cost and group feel',
      'Enough people to keep things social',
      'More departure dates available',
      'Lower cancellation risk',
    ],
    cons: [
      'Requires a larger vehicle (not all medina roads accessible)',
      'Restaurant seating can be slow',
      'Less one-on-one time with the guide',
      'Subgroups tend to form',
    ],
    bestFor: 'Budget-conscious travelers comfortable in a social setting',
  },
  {
    name: 'Large Group Tours (20+)',
    icon: Globe,
    price: 'From 6,000 MAD per person (8-10 days)',
    pros: [
      'Lowest per-person cost',
      'Almost never cancelled',
      'Frequent departure dates',
      'Full-size coach with air conditioning',
    ],
    cons: [
      'Feels rushed at key sites',
      'Long waits at restaurants and restrooms',
      'Less authentic local interaction',
      'Fixed schedule with minimal flexibility',
      'Coach cannot enter medinas — longer walks',
    ],
    bestFor: 'Travelers on tight budgets, those who prefer structured itineraries',
  },
  {
    name: 'Private Group Tours',
    icon: Crown,
    price: 'From 18,000 MAD per person (8-10 days, group of 4+)',
    pros: [
      'Fully customizable itinerary',
      'Choose your own travel dates',
      'Private vehicle and dedicated guide',
      'Stop anywhere, stay as long as you want',
      'Perfect for families and friend groups',
    ],
    cons: [
      'Highest cost per person (drops with larger groups)',
      'You handle more planning upfront',
      'No built-in social element with new travelers',
    ],
    bestFor: 'Families, friend groups, celebrations, honeymoons, multi-generational trips',
  },
];

/* ================================================================
   DATA: TOP OPERATORS
   ================================================================ */

const operators = [
  {
    name: 'Intrepid Travel',
    type: 'International — Small Group',
    groupSize: '10-12 max',
    priceRange: 'From 12,000-20,000 MAD (8-15 days)',
    strengths: [
      'Strong responsible travel credentials',
      'Local guides in every city',
      'Good mix of guided and free time',
      'Physical difficulty ratings on each trip',
    ],
    note: 'Best for travelers who want structure with authentic local experiences. Their "Basix" trips use hostels and budget riads for lower prices.',
  },
  {
    name: 'G Adventures',
    type: 'International — Small Group',
    groupSize: '12-16 max',
    priceRange: 'From 10,000-18,000 MAD (8-15 days)',
    strengths: [
      'Multiple comfort tiers (National Geographic, Classic, Active)',
      'Strong solo traveler community',
      'Chief Experience Officer (CEO) on every trip',
      'Planeterra community projects included',
    ],
    note: 'Best for solo travelers and those who want a social backpacker-style trip with safety net. Their "18-to-Thirtysomethings" line caters to younger travelers.',
  },
  {
    name: 'Local Moroccan Operators',
    type: 'Local — All Sizes',
    groupSize: '2-20 (varies)',
    priceRange: 'From 8,000-25,000 MAD (custom)',
    strengths: [
      'Highly customizable itineraries',
      'Direct relationships with local businesses',
      'Lower overhead means better value',
      'Deeper cultural access and insider knowledge',
    ],
    note: 'Best for travelers who want a tailored experience. Research thoroughly: check Google reviews, ask for references, and confirm all inclusions in writing before paying a deposit.',
  },
  {
    name: 'Luxury Operators (Abercrombie & Kent, Cox & Kings)',
    type: 'International — Premium',
    groupSize: '8-16 max',
    priceRange: 'From 30,000-60,000 MAD (8-12 days)',
    strengths: [
      'Five-star riads and hotels throughout',
      'Private access to sites and experiences',
      'Expert historians and cultural guides',
      'All meals, transfers, and gratuities included',
    ],
    note: 'Best for travelers who want top-tier comfort with zero logistics. These trips include everything down to airport lounge access and private museum tours.',
  },
];

/* ================================================================
   DATA: POPULAR ROUTES
   ================================================================ */

const popularRoutes = [
  {
    name: 'Imperial Cities Circuit',
    duration: '7-8 days',
    icon: Building,
    cities: 'Casablanca, Rabat, Meknes, Fes, Marrakech',
    highlights: [
      'Hassan II Mosque interior tour',
      'Fes medina with a local guide',
      'Volubilis Roman ruins',
      'Jemaa el-Fnaa at sunset',
    ],
    price: 'From 8,000 MAD per person (medium group)',
    suitability: 'Culture lovers, history buffs, first-time visitors',
  },
  {
    name: 'Desert & Coast Explorer',
    duration: '10-12 days',
    icon: Tent,
    cities: 'Marrakech, Ait Benhaddou, Merzouga, Todra Gorge, Essaouira',
    highlights: [
      'Camel trek and overnight in Sahara camp',
      'Sunrise over Erg Chebbi dunes',
      'Todra Gorge canyon walk',
      'Essaouira Atlantic fishing port',
    ],
    price: 'From 10,000 MAD per person (small group)',
    suitability: 'Adventure seekers, photographers, those wanting diverse landscapes',
  },
  {
    name: 'Grand Morocco Tour',
    duration: '14-16 days',
    icon: Route,
    cities: 'Casablanca, Chefchaouen, Fes, Merzouga, Ouarzazate, Marrakech, Essaouira',
    highlights: [
      'Blue streets of Chefchaouen',
      'Full Sahara desert experience',
      'Atlas Mountain pass drive',
      'Multiple UNESCO heritage sites',
    ],
    price: 'From 15,000 MAD per person (small group)',
    suitability: 'Travelers with 2+ weeks, those wanting the complete Morocco experience',
  },
  {
    name: 'Atlas & Valleys Trek',
    duration: '5-7 days',
    icon: Mountain,
    cities: 'Marrakech, Imlil, Toubkal area, Ourika Valley',
    highlights: [
      'High Atlas mountain villages',
      'Berber homestay experience',
      'Toubkal National Park',
      'Valley waterfall hikes',
    ],
    price: 'From 6,000 MAD per person (small group)',
    suitability: 'Active travelers, trekkers, nature lovers',
  },
];

/* ================================================================
   DATA: WHAT IS INCLUDED
   ================================================================ */

const inclusionItems = [
  { item: 'Accommodation', budget: 'Hostels & basic riads', mid: '3-star hotels & mid-range riads', luxury: '5-star hotels & palace riads', icon: Building },
  { item: 'Transport', budget: 'Shared minibus', mid: 'Private minibus with A/C', luxury: 'Private 4x4 or luxury van', icon: Bus },
  { item: 'Guide', budget: 'Group leader (not always a licensed guide)', mid: 'Licensed English-speaking guide', luxury: 'Expert historian or cultural specialist', icon: BookOpen },
  { item: 'Meals', budget: 'Breakfast only', mid: 'Breakfast + 50% of dinners', luxury: 'All meals included', icon: HandCoins },
  { item: 'Activities', budget: 'Walking tours, 1-2 included excursions', mid: 'Most major activities included', luxury: 'All activities + private access', icon: Camera },
  { item: 'Desert Camp', budget: 'Basic bivouac (shared tent)', mid: 'Comfortable camp (private tent, bathroom)', luxury: 'Luxury glamping (king bed, en-suite, lounge)', icon: Tent },
];

/* ================================================================
   DATA: TIPPING GUIDE
   ================================================================ */

const tippingGuide = [
  { role: 'Tour Leader / Main Guide', amount: 'From 50-100 MAD per day', note: 'Higher end for exceptional service on small groups' },
  { role: 'Driver', amount: 'From 30-50 MAD per day', note: 'Drivers work long hours on desert routes especially' },
  { role: 'Local City Guide', amount: 'From 20-50 MAD per visit', note: 'Medina and monument guides hired for specific cities' },
  { role: 'Desert Camel Handler', amount: 'From 20-30 MAD per trek', note: 'The person leading your camel, not the tour guide' },
  { role: 'Hotel / Riad Staff', amount: 'From 10-20 MAD per stay', note: 'Left at checkout for the porter or housekeeper' },
  { role: 'Restaurant Waiter', amount: '10-15% of bill', note: 'Not always expected but appreciated at tourist restaurants' },
];

/* ================================================================
   DATA: SOLO TRAVELER TIPS
   ================================================================ */

const soloTips = [
  {
    title: 'Room Sharing Works Well',
    icon: Users,
    text: 'Most operators match solo travelers with a same-gender roommate. Rooms in Moroccan riads are spacious, and most travelers report positive experiences. If you are a light sleeper, consider paying the single supplement.',
  },
  {
    title: 'Choose Small Groups',
    icon: Heart,
    text: 'Groups of 8-12 bond faster than groups of 20+. On small group tours, it is common for the entire group to eat together every evening. On larger tours, you might end up in a clique or eating alone.',
  },
  {
    title: 'Check the Age Mix',
    icon: CalendarDays,
    text: 'Some operators attract a specific age range. G Adventures "18-to-Thirtysomethings" skews young. Intrepid "Comfort" trips attract 40-60 year olds. Ask the operator about the typical demographic before booking.',
  },
  {
    title: 'Arrive a Day Early',
    icon: Clock,
    text: 'Fly in the day before the tour starts. This gives you a buffer for flight delays and lets you adjust to the time zone. Most tour hotels allow early check-in if you book the extra night directly.',
  },
  {
    title: 'Bring a Power Bank and Adapter',
    icon: Lightbulb,
    text: 'Long bus days between cities (Fes to Merzouga is 8+ hours) are prime time for bonding. Having a charged phone for sharing photos and contacts helps you stay connected with new friends.',
  },
  {
    title: 'Stay Connected After',
    icon: Globe,
    text: 'Every good group tour creates a WhatsApp or Signal group. Share your photos, stay in touch, and many solo travelers end up planning future trips together with people they met on a Morocco tour.',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoGroupToursPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[var(--text-primary)] font-medium">Morocco Group Tours</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <img
          src="/images/hero-morocco.webp"
          alt="Travelers exploring a sun-lit Moroccan street with colorful walls and traditional architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold mb-6 leading-tight">
            Morocco Group Tours Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Everything you need to choose the right group tour: small vs. large groups, top international and local
            operators, popular routes, pricing breakdowns, and practical advice for solo travelers joining a group.
          </p>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Take a Group Tour in Morocco?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Morocco rewards travelers who have a knowledgeable guide. The medinas are labyrinths, the desert requires
            real logistics, and local connections open doors that independent travelers simply cannot access.
          </p>

          <div className="card-moroccan p-6 space-y-4">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A good group tour handles the complicated parts — navigating the maze-like Fes medina, coordinating
              desert camel treks, negotiating with riads, and managing the long drives between cities — so you can
              focus on the experience itself. Group tours also provide a built-in social circle, which matters in a
              country where sharing a tagine with others is more rewarding than eating alone.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The Morocco group tour market has matured significantly. Today you can find everything from bare-bones
              backpacker circuits for from 6,000 MAD to all-inclusive luxury journeys exceeding from 50,000 MAD. The
              key is matching the right tour style to your budget, fitness level, and social preferences. This guide
              breaks down every option so you can book with confidence.
            </p>
          </div>

          <div className="card-moroccan p-5 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                All prices listed are starting prices in Moroccan Dirhams (MAD) and reflect 2026 rates.
                Seasonal pricing can change during peak months (March-May, September-November). Tour
                operators frequently adjust rates, so confirm final pricing directly before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Group Tour Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Group Tour Types Compared
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each group size creates a fundamentally different travel experience. Here is an honest look at
            the trade-offs for each format.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tourTypes.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TourIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tour.name}
                      </h3>
                      <p className="text-sm text-[var(--color-accent)] font-semibold">{tour.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Advantages</p>
                      <ul className="space-y-1.5">
                        {tour.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Trade-offs</p>
                      <ul className="space-y-1.5">
                        {tour.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <Star className="w-3.5 h-3.5 inline text-[var(--color-gold)] mr-1" />
                      <span className="font-medium">Best for:</span> {tour.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Operators ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Tour Operators for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These operators consistently receive high reviews from travelers and have established ground operations
            in Morocco. Each serves a different niche.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {operators.map((op) => (
              <div key={op.name} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {op.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">{op.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[var(--color-accent)] font-semibold">{op.priceRange}</p>
                    <p className="text-xs text-[var(--text-muted)]">Max group: {op.groupSize}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {op.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[var(--border)]">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <Lightbulb className="w-4 h-4 inline text-[var(--color-accent)] mr-1" />
                    {op.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Popular Group Tour Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four itineraries account for the vast majority of group tours sold in Morocco. Here is what each one
            covers and who it suits best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RouteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {route.duration}
                        </span>
                        <span className="text-[var(--color-accent)] font-semibold">{route.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-sm text-[var(--text-secondary)]">{route.cities}</p>
                  </div>

                  <ul className="space-y-1.5 mb-3">
                    {route.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Star className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border)]">
                    <Compass className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    {route.suitability}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What Is Included Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What&apos;s Included: Budget vs. Mid-Range vs. Luxury
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            Tour prices vary enormously because what is included differs at every level. Here is a direct comparison.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Seasonal pricing can change, especially for desert camps and premium riads during peak months.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Budget Tour</div>
                <div className="p-3 px-4">Mid-Range Tour</div>
                <div className="p-3 px-4">Luxury Tour</div>
              </div>
              {inclusionItems.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.item}
                    className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                      <ItemIcon className="w-4 h-4 text-[var(--color-accent)] shrink-0 hidden sm:block" />
                      {item.item}
                    </div>
                    <div className="p-3 px-4 text-[var(--text-muted)]">{item.budget}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{item.mid}</div>
                    <div className="p-3 px-4 text-[var(--color-accent)] font-medium">{item.luxury}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tipping Expectations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tipping on Group Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tips are not included in tour prices and are a significant part of income for guides and drivers.
            Budget an additional from 100-200 MAD per day total for all tipping.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Who</div>
              <div className="p-3 px-4">Amount</div>
              <div className="p-3 px-4">Notes</div>
            </div>
            {tippingGuide.map((tip, i) => (
              <div
                key={tip.role}
                className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{tip.role}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{tip.amount}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{tip.note}</div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                Carry small denominations of MAD for tipping. Breaking a 200 MAD note for a 20 MAD tip is
                awkward and time-consuming. Exchange money at the airport or withdraw from ATMs in major cities
                before heading to remote areas where ATMs are scarce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Age & Fitness Considerations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Age &amp; Fitness Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco group tours span from gentle cultural circuits to demanding treks. Choosing the right
            physical level matters more than age alone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Easy — Imperial Cities & Cultural',
                icon: Building,
                fitness: 'Low to moderate',
                detail: 'Walking 3-5 km per day on cobblestones. Main challenge is uneven medina surfaces and occasional stairs. Suitable for most fitness levels. Air-conditioned vehicle between cities.',
              },
              {
                title: 'Moderate — Desert & Coast',
                icon: Compass,
                fitness: 'Moderate',
                detail: 'Long driving days (4-8 hours) between destinations. Short desert walks on soft sand. Camel riding for 1-2 hours. Basic camp conditions for 1-2 nights. Heat can be intense from May to September.',
              },
              {
                title: 'Challenging — Atlas Trekking',
                icon: Mountain,
                fitness: 'High',
                detail: 'Hiking 5-8 hours daily at altitude (2,000-4,000m). Rocky trails, steep ascents, and variable weather. Requires regular exercise before the trip. Mules carry heavy bags but you carry a daypack.',
              },
              {
                title: 'Comfortable — Luxury Tours',
                icon: Gem,
                fitness: 'Low',
                detail: 'Minimal walking required. Private vehicles drop you at entrances. Hotels have elevators and accessible rooms. Guides adjust pace to the group. Best option for travelers with mobility concerns.',
              },
            ].map((level) => {
              const LevelIcon = level.icon;
              return (
                <div key={level.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <LevelIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {level.title}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] font-semibold">Fitness: {level.fitness}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{level.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Solo Travelers Joining Groups ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Solo Travelers: Joining a Group Tour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Group tours are one of the best ways to explore Morocco alone without feeling isolated.
            Around 40-60% of travelers on small group tours are solo bookers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soloTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Smart Booking Strategies
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to get the best deal and avoid common pitfalls when booking a Morocco group tour.
          </p>

          <div className="space-y-4">
            {[
              {
                tip: 'Book Direct for Local Operators',
                icon: Globe,
                detail: 'Booking through a third-party site like TripAdvisor or Viator adds a 15-25% commission. Contact local operators directly through their website or WhatsApp. You get a lower price and can negotiate inclusions.',
              },
              {
                tip: 'Watch for Early Bird and Last-Minute Deals',
                icon: CalendarDays,
                detail: 'International operators like Intrepid and G Adventures offer 10-15% early bird discounts when you book 4+ months ahead. Last-minute deals (2-3 weeks out) can save 20%, but you lose control over dates.',
              },
              {
                tip: 'Read the Fine Print on Inclusions',
                icon: BookOpen,
                detail: 'A cheap tour with few inclusions can end up costing more than a pricier all-inclusive. Calculate the true cost: add non-included meals (from 100-200 MAD/day), optional activities (from 200-500 MAD each), tips (from 100-200 MAD/day), and single supplements.',
              },
              {
                tip: 'Verify Travel Insurance Requirements',
                icon: Shield,
                detail: 'Most reputable operators require travel insurance. Some include basic coverage in the price; others do not. Check that your policy covers adventure activities like camel trekking and mountain hiking if your tour includes them.',
              },
              {
                tip: 'Ask About the Cancellation Policy',
                icon: AlertTriangle,
                detail: 'Standard policies charge 10% for cancellations 60+ days out, 50% at 30 days, and 100% under 14 days. Some operators offer free cancellation up to 30 days before departure. Always book with a credit card for added protection.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.tip}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about booking and joining group tours in Morocco.
          </p>

          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
            {[
              {
                title: 'Morocco Desert Tours',
                description: 'Sahara camel treks, desert camps, dune experiences, and multi-day desert itineraries from Marrakech and Fes.',
                href: '/morocco-desert-tours',
                icon: Tent,
              },
              {
                title: 'Morocco Solo Travel',
                description: 'Safety tips, itinerary ideas, budget advice, and social strategies for exploring Morocco on your own.',
                href: '/morocco-solo-travel',
                icon: Compass,
              },
              {
                title: 'Morocco Budget Calculator',
                description: 'Daily cost breakdowns, money-saving strategies, and realistic budgets for every travel style.',
                href: '/morocco-budget-calculator',
                icon: Wallet,
              },
              {
                title: 'First Time in Morocco',
                description: 'Essential preparation tips, cultural basics, packing advice, and a day-by-day starter itinerary.',
                href: '/morocco-first-time',
                icon: BookOpen,
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-6">
            Ready to Join a Morocco Group Tour?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            From intimate small group journeys through the Sahara to grand cultural circuits of the
            imperial cities, there is a Morocco group tour that fits your style and budget. Start by
            comparing operators, checking departure dates, and booking early for the best rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-desert-tours"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Tent className="w-5 h-5" />
              Explore Desert Tours
            </Link>
            <Link
              href="/morocco-first-time"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              First-Time Visitor Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

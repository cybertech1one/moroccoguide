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
  Luggage,
  Lightbulb,
  Banknote,
  Compass,
  Users,
  Zap,
  CalendarDays,
  Utensils,
  HelpCircle,
  Heart,
  Bus,
  Building,
  Handshake,
  Percent,
  ListChecks,
  Mountain,
  Camera,
} from 'lucide-react';

/* =====================================================================
   CONSTANTS
   ===================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Group Travel 2026 | Group Tours, Activities & Planning Guide',
  description:
    'Complete guide to Morocco group travel in 2026. Group tour types, DIY vs guided trips, group discounts, best activities, transport for groups, group-friendly riads, split-cost tips, group dining, and planning timeline for traveling Morocco with friends.',
  keywords: [
    'Morocco group travel',
    'Morocco group tour',
    'group trip Morocco',
    'Morocco with friends',
    'Morocco group activities',
    'Morocco group discount',
    'Morocco group itinerary',
    'Morocco group accommodation',
    'Morocco group transport',
    'Morocco group dining',
    'Morocco group adventure',
    'Morocco friend trip',
    'Morocco group holiday',
    'Morocco group planning',
    'Morocco group budget',
    'Morocco group travel 2026',
  ],
  openGraph: {
    title: 'Morocco Group Travel 2026 | Group Tours, Activities & Planning Guide',
    description:
      'Everything you need to plan the perfect group trip to Morocco. Tour types, discounts, activities, riads, transport, dining, and step-by-step planning for groups of all sizes.',
    url: `${BASE_URL}/morocco-group-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'A group of travelers exploring the vibrant streets and markets of Morocco together',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Group Travel 2026 | Tours, Activities & Planning',
    description:
      'Group tours, DIY vs guided trips, group discounts, best activities, transport, accommodation, and planning tips for traveling Morocco with friends.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-group-travel` },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-group-travel`,
  name: 'Morocco Group Travel 2026 | Group Tours, Activities & Planning Guide',
  description:
    'Comprehensive guide to planning group travel in Morocco covering tour types, DIY vs guided options, group discounts, best group activities, transport logistics, group-friendly accommodations, split-cost strategies, dining recommendations, and step-by-step planning timelines.',
  url: `${BASE_URL}/morocco-group-travel`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-group-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Group Travel', item: `${BASE_URL}/morocco-group-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the ideal group size for traveling in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal group size for Morocco is 4 to 8 people. This range lets you split costs on private transport and riads while staying flexible enough to navigate medinas and small restaurants. Groups of 10 or more benefit from deeper discounts but require more advance planning and may need to split for certain activities like cooking classes or hammam visits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it cheaper to travel Morocco in a group or solo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group travel in Morocco is significantly cheaper per person. A private riad room that costs 800 MAD for two people drops to around 200 MAD each when four share a family suite. Private minibus hire for a group of 6 works out cheaper than individual bus or taxi fares. Groups of 4 or more can save 30-50% on accommodation, transport, and guided activities compared to solo travelers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should we book a guided group tour or plan a DIY trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose a guided tour if your group wants zero planning stress, local expertise, and a fixed itinerary. Choose DIY if your group prefers flexibility, spontaneity, and tighter budget control. A hybrid approach works well too: plan your own route but hire local guides for specific excursions like the Sahara desert, Atlas Mountains, or medina tours. DIY trips save 20-40% but require more coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best group activities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top group activities include Sahara desert camping with camel rides (from 500 MAD per person), group cooking classes in Marrakech or Fes (from 300 MAD per person), Atlas Mountains day hikes (from 250 MAD per person), quad biking in Agafay Desert (from 400 MAD per person), surf lessons in Taghazout (from 350 MAD per person), and private hammam sessions (from 200 MAD per person). Most activities offer group discounts for 6 or more people.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we handle money and split costs in a group trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a shared expense app like Splitwise or Tricount to track spending throughout the trip. Designate one person as the group treasurer to handle cash payments. Withdraw MAD from ATMs in larger amounts to reduce fees. Pre-pay shared costs like accommodation and transport before arrival. Keep a group cash kitty of around 500-1,000 MAD for shared meals, tips, and small purchases. Settle the balance at the end of each day or at the trip end.',
      },
    },
    {
      '@type': 'Question',
      name: 'What transport options work best for groups in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For groups of 4-8, hire a private minivan with driver (from 1,200 MAD per day). This is the most flexible and comfortable option. For groups of 8-15, a private minibus costs from 2,000 MAD per day. Trains work well for inter-city travel between Marrakech, Casablanca, Rabat, and Fes with first class offering group-friendly seating. Grand taxis fit up to 6 passengers and cost from 50 MAD for short routes. Avoid trying to keep a large group together on public buses.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for a group trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best times are spring (March to May) and autumn (September to November) when temperatures are comfortable, crowds are moderate, and group accommodation is easier to book. Summer (June to August) is very hot inland but great for coastal group trips. Winter (December to February) offers the lowest prices and smallest crowds but cooler evenings. Avoid Ramadan if your group wants a vibrant nightlife and dining scene, though it offers a unique cultural experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should we plan a group trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start planning 4 to 6 months in advance for groups of 6 or more. Book accommodation and desert tours 3 to 4 months ahead, especially for peak season (October to April). Flights are cheapest 2 to 3 months before departure. Finalize your itinerary at least 6 weeks out and share it with the group. Last-minute group trips are possible in low season but riads and popular activities may be fully booked during peak periods.',
      },
    },
  ],
};

/* =====================================================================
   DATA: GROUP TRAVEL QUICK FACTS
   ===================================================================== */

const quickFacts = [
  {
    label: 'Ideal Group Size',
    value: '4-8 People',
    detail: 'Best balance of cost savings and flexibility',
    icon: Users,
  },
  {
    label: 'Group Savings',
    value: '30-50% Off',
    detail: 'Per-person costs vs solo travel',
    icon: Percent,
  },
  {
    label: 'Private Minivan',
    value: 'From 1,200 MAD/day',
    detail: 'With driver, fits up to 8 people',
    icon: Bus,
  },
  {
    label: 'Best Seasons',
    value: 'Spring & Autumn',
    detail: 'March-May and September-November',
    icon: CalendarDays,
  },
];

/* =====================================================================
   DATA: GROUP TOUR TYPES
   ===================================================================== */

const tourTypes = [
  {
    name: 'Guided Group Tour (Organized)',
    icon: Globe,
    features: [
      'Pre-planned itinerary with expert local guides',
      'All logistics handled: transport, hotels, meals',
      'Join existing groups of 10-20 travelers',
      'Fixed departure dates throughout the year',
      'Best for first-time Morocco visitors',
    ],
    price: 'From 8,000 MAD per person (7-10 days)',
    best: 'Stress-free travel with local expertise included',
  },
  {
    name: 'Private Group Tour (Custom)',
    icon: Star,
    features: [
      'Tailored itinerary for your specific group',
      'Private transport, guide, and accommodations',
      'Flexible pace and activity choices',
      'Ideal for friend groups, families, and celebrations',
      'Dates chosen entirely by your group',
    ],
    price: 'From 5,000 MAD per person (7 days, group of 6+)',
    best: 'Groups wanting customization with professional support',
  },
  {
    name: 'DIY Group Trip (Self-Planned)',
    icon: Compass,
    features: [
      'Complete freedom over route, budget, and schedule',
      'Book accommodations and transport independently',
      'Hire local guides only when needed',
      'Maximum budget control and flexibility',
      'Best savings for experienced travelers',
    ],
    price: 'From 3,000 MAD per person (7 days, group of 6+)',
    best: 'Budget-conscious groups who enjoy planning',
  },
  {
    name: 'Hybrid Group Trip',
    icon: Handshake,
    features: [
      'Self-planned route with guided excursions',
      'Book your own flights and riads',
      'Hire guides for desert, mountains, and medinas',
      'Combines DIY savings with expert local knowledge',
      'Most popular approach for repeat visitors',
    ],
    price: 'From 4,000 MAD per person (7 days, group of 6+)',
    best: 'Flexibility plus expert guidance where it matters most',
  },
];

/* =====================================================================
   DATA: BEST GROUP ACTIVITIES
   ===================================================================== */

const groupActivities = [
  {
    activity: 'Sahara Desert Camping',
    location: 'Merzouga / Erg Chebbi',
    groupSize: '4-20 people',
    price: 'From 500 MAD per person',
    description: 'Camel trek into the dunes, Berber camp dinner under the stars, sandboarding, and sunrise watching. The ultimate group bonding experience.',
    icon: Star,
  },
  {
    activity: 'Group Cooking Class',
    location: 'Marrakech / Fes',
    groupSize: '4-12 people',
    price: 'From 300 MAD per person',
    description: 'Learn to prepare tagine, couscous, and pastilla together. Includes market visit, hands-on cooking, and a shared meal with your creations.',
    icon: Utensils,
  },
  {
    activity: 'Atlas Mountains Day Hike',
    location: 'Imlil / Ourika Valley',
    groupSize: '4-15 people',
    price: 'From 250 MAD per person',
    description: 'Guided trek through Berber villages with panoramic mountain views. Lunch at a local home included. Difficulty levels from easy to challenging.',
    icon: Mountain,
  },
  {
    activity: 'Quad Biking & Desert Adventures',
    location: 'Agafay Desert / Palmeraie',
    groupSize: '4-20 people',
    price: 'From 400 MAD per person',
    description: 'Adrenaline-fueled quad biking through rocky desert terrain. Often combined with camel rides and a traditional Berber tea ceremony.',
    icon: Zap,
  },
  {
    activity: 'Surf Lessons',
    location: 'Taghazout / Essaouira',
    groupSize: '4-10 people',
    price: 'From 350 MAD per person',
    description: 'Group surf sessions on Morocco&apos;s Atlantic coast. Equipment, wetsuit, and instructor included. All skill levels welcome.',
    icon: Globe,
  },
  {
    activity: 'Private Hammam & Spa',
    location: 'Marrakech / Fes / Essaouira',
    groupSize: '4-8 people',
    price: 'From 200 MAD per person',
    description: 'Traditional Moroccan bath experience with black soap scrub, ghassoul clay mask, and massage. Book a private session for your group.',
    icon: Heart,
  },
  {
    activity: 'Medina Photography Tour',
    location: 'Marrakech / Fes / Chefchaouen',
    groupSize: '4-10 people',
    price: 'From 350 MAD per person',
    description: 'Guided walk through the most photogenic alleys, riads, and markets with a local photographer. Perfect for capturing group memories.',
    icon: Camera,
  },
  {
    activity: 'Hot Air Balloon Ride',
    location: 'Marrakech',
    groupSize: '4-16 people (per basket)',
    price: 'From 1,500 MAD per person',
    description: 'Sunrise flight over the Atlas foothills and Moroccan countryside. Includes traditional breakfast after landing. Book early in peak season.',
    icon: Compass,
  },
];

/* =====================================================================
   DATA: GROUP-FRIENDLY ACCOMMODATION
   ===================================================================== */

const groupAccommodation = [
  {
    type: 'Riad (Whole House Rental)',
    capacity: '6-14 guests',
    price: 'From 2,500 MAD per night (entire riad)',
    perPerson: 'From 180 MAD per person per night (group of 14)',
    description: 'Rent an entire traditional riad in the medina. Private courtyard, rooftop terrace, and often a plunge pool. Breakfast usually included. The best group accommodation option in Morocco.',
    icon: Building,
  },
  {
    type: 'Desert Camp (Luxury)',
    capacity: '4-20 guests',
    price: 'From 800 MAD per person per night',
    perPerson: 'Includes dinner, breakfast, and camel trek',
    description: 'Glamping in the Sahara with en-suite tents, campfire dinner, live music, and stargazing. Luxury camps offer hot showers and comfortable beds.',
    icon: Star,
  },
  {
    type: 'Group Hostel / Guesthouse',
    capacity: '4-30 guests',
    price: 'From 120 MAD per person per night',
    perPerson: 'Dorm beds from 80 MAD, private rooms from 250 MAD',
    description: 'Social hostels with communal areas perfect for groups. Many offer private group rooms, rooftop terraces, and organized activities.',
    icon: Users,
  },
  {
    type: 'Villa with Pool',
    capacity: '8-20 guests',
    price: 'From 4,000 MAD per night (entire villa)',
    perPerson: 'From 200 MAD per person per night (group of 20)',
    description: 'Private villas outside the medina with swimming pools, gardens, and BBQ areas. Popular in Marrakech Palmeraie, Essaouira coast, and Agadir area.',
    icon: Globe,
  },
];

/* =====================================================================
   DATA: TRANSPORT FOR GROUPS
   ===================================================================== */

const groupTransport = [
  {
    mode: 'Private Minivan with Driver',
    capacity: 'Up to 8 passengers',
    price: 'From 1,200 MAD per day',
    perPerson: 'From 150 MAD per person per day (group of 8)',
    pros: 'Door-to-door service, flexible stops, luggage space, air-conditioned, driver handles navigation',
    icon: Bus,
  },
  {
    mode: 'Private Minibus with Driver',
    capacity: '9-17 passengers',
    price: 'From 2,000 MAD per day',
    perPerson: 'From 120 MAD per person per day (group of 17)',
    pros: 'Best value for larger groups, comfortable seating, dedicated driver, ideal for multi-city itineraries',
    icon: Bus,
  },
  {
    mode: 'First Class Train (ONCF)',
    capacity: 'Any group size',
    price: 'From 100 MAD per person per trip',
    perPerson: 'Group of 10+ can request adjacent seating',
    pros: 'Fast inter-city travel (Marrakech-Casablanca-Fes-Tangier), comfortable, scenic, no traffic',
    icon: Zap,
  },
  {
    mode: 'Grand Taxi',
    capacity: 'Up to 6 passengers',
    price: 'From 50 MAD per taxi (short routes)',
    perPerson: 'Negotiate fare before departure',
    pros: 'Cheap for short inter-city hops, no booking needed, available everywhere, fits one small group perfectly',
    icon: MapPin,
  },
];

/* =====================================================================
   DATA: SPLIT-COST TIPS
   ===================================================================== */

const splitCostTips = [
  {
    tip: 'Use a shared expense app',
    detail: 'Splitwise or Tricount tracks every payment in real time. Log meals, taxis, and activities as they happen so nobody loses track. Settle up at the end of each day or at trip end.',
    icon: Wallet,
  },
  {
    tip: 'Designate a group treasurer',
    detail: 'One person handles the group cash kitty for shared expenses like tips, snacks, and small purchases. Refill the kitty with equal contributions when it runs low (500-1,000 MAD at a time).',
    icon: Users,
  },
  {
    tip: 'Pre-pay big-ticket items',
    detail: 'Collect money for accommodation, transport hire, and major activities before the trip. This avoids awkward conversations in Morocco and ensures everything is booked and confirmed.',
    icon: CheckCircle,
  },
  {
    tip: 'Withdraw cash in bulk',
    detail: 'ATM fees add up fast. Have one or two people withdraw larger amounts (2,000-5,000 MAD) and distribute cash to the group. Bank ATMs in cities offer the best rates with lower fees.',
    icon: Banknote,
  },
  {
    tip: 'Separate personal vs group spending',
    detail: 'Agree upfront what counts as shared (accommodation, transport, group meals) versus personal (souvenirs, solo excursions, premium upgrades). Clear rules prevent disputes.',
    icon: ListChecks,
  },
  {
    tip: 'Negotiate group discounts',
    detail: 'Always ask for a group rate when booking activities, accommodation, and transport. Most Moroccan businesses offer 10-20% discounts for groups of 6 or more. Haggling is expected.',
    icon: Percent,
  },
];

/* =====================================================================
   DATA: GROUP DINING TIPS
   ===================================================================== */

const groupDiningTips = [
  'Book restaurants in advance for groups of 8 or more, especially in Marrakech and Fes medinas where space is limited',
  'Order family-style tagines and couscous platters to share rather than individual dishes for better value and a more Moroccan experience',
  'Street food stalls in Jemaa el-Fna and Fes medina are perfect for groups to graze together for from 30 MAD per person',
  'Riad dinners can be arranged privately for your group from 150 MAD per person including a multi-course Moroccan feast',
  'Rooftop restaurants near Jemaa el-Fna fit large groups and offer sunset views, but prices are 30-50% higher than side-street options',
  'Tipping is customary: leave 10-15% at sit-down restaurants and round up at casual spots. A group tip jar simplifies this',
  'For dietary requirements, Moroccan cuisine is naturally rich in vegetarian and vegan options. Inform restaurants ahead for large groups with mixed dietary needs',
  'Budget roughly 150-300 MAD per person per day for three meals plus snacks, depending on whether you eat street food or restaurant meals',
];

/* =====================================================================
   DATA: PLANNING TIMELINE
   ===================================================================== */

const planningTimeline = [
  {
    phase: '6 Months Before',
    tasks: [
      'Set your travel dates and confirm group members',
      'Agree on a budget range per person (budget, mid-range, or luxury)',
      'Research destinations and create a rough itinerary',
      'Start a group chat and shared planning document',
    ],
    icon: CalendarDays,
  },
  {
    phase: '4 Months Before',
    tasks: [
      'Book flights (cheapest 2-3 months before departure)',
      'Reserve accommodation (whole riads and villas book up early)',
      'Book Sahara desert tours and any high-demand activities',
      'Collect deposits or full payment for shared bookings',
    ],
    icon: BookOpen,
  },
  {
    phase: '2 Months Before',
    tasks: [
      'Finalize the detailed day-by-day itinerary',
      'Book private transport (minivan or minibus with driver)',
      'Reserve group cooking classes and adventure activities',
      'Ensure all passports are valid for 6+ months beyond travel dates',
    ],
    icon: ListChecks,
  },
  {
    phase: '2 Weeks Before',
    tasks: [
      'Share the final itinerary, accommodation addresses, and emergency contacts with everyone',
      'Download offline maps (Google Maps or Maps.me) for Morocco',
      'Set up Splitwise or your chosen expense-tracking app',
      'Agree on group ground rules: wake-up times, free time, budget for group meals',
    ],
    icon: CheckCircle,
  },
];

/* =====================================================================
   DATA: RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    href: '/tours',
    title: 'Morocco Tours Guide',
    description: 'Explore organized tours across Morocco including desert trips, city tours, and multi-day adventures.',
    icon: Globe,
  },
  {
    href: '/morocco-trip-cost',
    title: 'Morocco Trip Cost Guide',
    description: 'Detailed breakdown of daily costs for accommodation, food, transport, and activities in Morocco.',
    icon: Wallet,
  },
  {
    href: '/transport',
    title: 'Morocco Transport Guide',
    description: 'Complete overview of trains, buses, taxis, rental cars, and domestic flights across Morocco.',
    icon: Bus,
  },
  {
    href: '/morocco-budget-guide',
    title: 'Morocco Budget Guide',
    description: 'How to travel Morocco on any budget with money-saving tips, cheap eats, and free activities.',
    icon: Banknote,
  },
  {
    href: '/itineraries',
    title: 'Morocco Itineraries',
    description: 'Ready-made itineraries for 5, 7, 10, and 14-day trips across Morocco suited to every travel style.',
    icon: Compass,
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoGroupTravelPage() {
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
            <span className="text-white">Morocco Group Travel</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Users className="w-4 h-4" />
            Group Travel Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Group Travel
            <br className="hidden md:block" /> Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to plan an unforgettable group trip to Morocco &mdash;
            tour types, group discounts, activities, transport, accommodation, dining, and
            a step-by-step planning timeline for groups of all sizes.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Perfect for Group Travel
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the best destinations in the world for a group trip. Whether
                you&apos;re traveling with lifelong friends, a family reunion, a work team, or a
                group of adventure seekers, Morocco delivers shared experiences that bond people
                together: sleeping under Sahara stars, getting lost in ancient medinas, bargaining
                in souks, and feasting on tagines around a communal table.
              </p>
              <p>
                The country&apos;s tourism infrastructure is built for groups. Riads can be rented
                whole for the price of a few hotel rooms. Private drivers and minivans are
                affordable when costs are split. Restaurants serve family-style platters that taste
                better when shared. And group discounts on activities &mdash; from desert camps to
                cooking classes &mdash; mean you spend less per person while experiencing more.
              </p>
              <p>
                This guide walks you through every aspect of planning a <strong>Morocco group
                tour</strong>, from choosing between DIY and guided options to splitting costs
                fairly, booking group-friendly accommodation, and creating an itinerary that keeps
                everyone happy. Whether your group has 4 people or 20, this is your complete
                playbook for a <strong>group trip to Morocco</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Group Travel at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about organizing a group trip to Morocco and what to expect.
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

      {/* ── Group Tour Types: DIY vs Guided ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Group Tour Types: DIY vs Guided
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Choose the right approach for your group&apos;s travel style, budget, and experience level.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {tourTypes.map((tt) => {
              const TtIcon = tt.icon;
              return (
                <div key={tt.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tt.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {tt.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-sm text-[var(--color-accent)] font-semibold mb-1">{tt.price}</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--text-primary)]">Best for:</strong> {tt.best}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Prices are estimates for 2026 and may vary seasonally. Per-person costs decrease as group size increases.
          </p>
        </div>
      </section>

      {/* ── Best Group Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Best Group Activities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Shared experiences that make a group trip to Morocco unforgettable.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {groupActivities.map((ga) => {
              const GaIcon = ga.icon;
              return (
                <div key={ga.activity} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GaIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {ga.activity}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{ga.description}</p>
                  <div className="space-y-1 text-sm text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span><strong>Location:</strong> {ga.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span><strong>Group Size:</strong> {ga.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span><strong>Price:</strong> {ga.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-8 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Pro Tip: Group Discounts</p>
                <p className="text-[var(--text-secondary)]">
                  Always ask for a group rate. Most activity providers in Morocco offer 10-20% off
                  for groups of 6 or more. Negotiate politely but firmly &mdash; it is expected and
                  respected in Moroccan business culture. Booking directly (not through aggregators)
                  often yields the best group prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transport for Groups ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Options for Groups
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to move your group around Morocco comfortably and affordably.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {groupTransport.map((gt) => {
              const GtIcon = gt.icon;
              return (
                <div key={gt.mode} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {gt.mode}
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span><strong>Capacity:</strong> {gt.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span><strong>Price:</strong> {gt.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span><strong>Per Person:</strong> {gt.perPerson}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--color-accent)] font-medium">{gt.pros}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Transport prices may vary seasonally. Always confirm rates before booking, especially during peak periods.
          </p>
        </div>
      </section>

      {/* ── Group-Friendly Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Group-Friendly Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where to stay when traveling Morocco with a group &mdash; from whole riad rentals to luxury desert camps.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {groupAccommodation.map((ga) => {
              const GaIcon = ga.icon;
              return (
                <div key={ga.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GaIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {ga.type}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">Capacity: {ga.capacity}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{ga.description}</p>
                  <div className="pt-3 border-t border-[var(--border-primary)] space-y-1">
                    <p className="text-sm text-[var(--color-accent)] font-semibold">{ga.price}</p>
                    <p className="text-xs text-[var(--text-muted)]">{ga.perPerson}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Split-Cost Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Split Costs Fairly
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies to manage group finances and avoid money-related friction on your trip.
          </p>

          <div className="space-y-4">
            {splitCostTips.map((sc) => {
              const ScIcon = sc.icon;
              return (
                <div key={sc.tip} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <ScIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {sc.tip}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{sc.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Group Dining ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Group Dining in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan cuisine is made for sharing. Here&apos;s how to eat well as a group without overspending.
          </p>

          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {groupDiningTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Alcohol in Morocco</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Morocco is a Muslim-majority country and alcohol is not available everywhere.
                  Licensed restaurants and bars in tourist areas serve alcohol, but medina restaurants
                  often do not. If your group enjoys evening drinks, choose accommodation near the
                  Ville Nouvelle (new town) areas of Marrakech, Casablanca, or Essaouira where bars
                  and licensed restaurants are more common.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Planning Timeline ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Group Trip Planning Timeline
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A step-by-step schedule to organize your Morocco group trip without last-minute stress.
          </p>

          <div className="space-y-6">
            {planningTimeline.map((phase) => {
              const PhaseIcon = phase.icon;
              return (
                <div key={phase.phase} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PhaseIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {phase.phase}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
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
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about group travel in Morocco.
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Planning Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco group trip with these detailed guides.
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center max-w-3xl">
          <Users className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Plan Your Group Trip?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco rewards groups with unforgettable shared experiences, lower per-person costs,
            and memories that last a lifetime. From Sahara stargazing to medina exploration,
            everything is better with your crew. Start planning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Explore Morocco Tours
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <Compass className="w-5 h-5" />
              Browse Itineraries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

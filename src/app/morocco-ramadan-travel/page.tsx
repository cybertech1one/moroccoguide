import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Moon,
  Sun,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Heart,
  CheckCircle,
  AlertTriangle,
  UtensilsCrossed,
  Calendar,
  Compass,
  Star,
  ShieldCheck,
  Globe,
  Coffee,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Visiting Morocco During Ramadan 2026 | Complete Travel Guide & Tips',
  description:
    'Complete guide to visiting Morocco during Ramadan. What stays open, iftar experiences, etiquette for non-Muslims, city-by-city impact, Ramadan dates 2026-2030, pros of traveling during Ramadan, and practical tips for a respectful visit.',
  keywords: [
    'visiting Morocco during Ramadan',
    'Morocco Ramadan travel guide',
    'Ramadan in Morocco',
    'travel Morocco Ramadan',
    'Morocco Ramadan 2026',
    'Ramadan travel tips Morocco',
    'iftar Morocco',
    'Morocco Ramadan what is open',
    'Ramadan etiquette Morocco',
    'Ramadan dates Morocco',
    'Morocco during Ramadan tourism',
    'non-Muslim Ramadan Morocco',
    'Morocco Ramadan food',
    'Ramadan experience Morocco',
    'should I visit Morocco Ramadan',
    'Morocco Ramadan hotels',
    'Ramadan nightlife Morocco',
    'ftour Morocco',
  ],
  openGraph: {
    title: 'Visiting Morocco During Ramadan 2026 | Complete Travel Guide & Tips',
    description:
      'Should you visit Morocco during Ramadan? Everything you need to know: what stays open, iftar meals, etiquette, city-by-city impact, Ramadan dates, and why it can be the best time to visit.',
    url: `${BASE_URL}/morocco-ramadan-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan mosque at sunset during Ramadan representing the complete Morocco Ramadan travel guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco During Ramadan 2026 | Travel Guide',
    description:
      'What stays open, iftar experiences, etiquette tips, city-by-city impact, and why Ramadan can be the best time to visit Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-ramadan-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-ramadan-travel`,
  name: 'Visiting Morocco During Ramadan 2026 | Complete Travel Guide & Tips',
  description:
    'Complete guide to traveling in Morocco during the holy month of Ramadan, covering what stays open, iftar experiences, non-Muslim etiquette, city-by-city impact, upcoming Ramadan dates, special events, and practical travel tips.',
  url: `${BASE_URL}/morocco-ramadan-travel`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-ramadan-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Ramadan Travel Guide', item: `${BASE_URL}/morocco-ramadan-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I visit Morocco during Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, visiting Morocco during Ramadan can be a deeply rewarding experience. While some restaurants close during the day and business hours are reduced, you gain access to unique cultural experiences like communal iftar meals, vibrant night markets, and a deeply spiritual atmosphere. Hotels, major tourist sites, and tour operators continue to serve visitors throughout Ramadan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can non-Muslims eat during the day in Ramadan in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-Muslims are not required to fast during Ramadan in Morocco. Tourist-oriented restaurants in hotels, riads, and major tourist areas typically remain open during the day. However, it is considered respectful to avoid eating, drinking, or smoking in public spaces in front of those who are fasting. Eat in your accommodation, inside a restaurant, or away from busy public areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is iftar in Morocco during Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Iftar (the meal that breaks the fast) takes place at sunset, which varies by date and location. In March, sunset in Morocco is typically around 6:30-7:00 PM. The exact time shifts by a minute or two each day and is announced by the call to prayer from mosques. Hotels and restaurants set specific iftar times based on the official sunset schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are tourist attractions open during Ramadan in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most major tourist attractions in Morocco remain open during Ramadan, though many operate on reduced hours. Palaces, museums, gardens, and historic sites typically open later (around 10 AM) and close earlier (around 4 PM). The medinas are open, and souks remain active, particularly in the evenings after iftar when they become especially vibrant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do hotels serve food during the day in Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, hotels and riads in Morocco continue to serve breakfast, lunch, and dinner to guests throughout Ramadan. International hotel chains and tourist-oriented riads maintain their normal meal service. Many also offer special iftar dinner experiences featuring traditional Ramadan dishes like harira soup, dates, chebakia pastries, and fresh juices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is alcohol available during Ramadan in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alcohol availability is significantly reduced during Ramadan. Licensed hotel bars and restaurants catering to international guests may still serve alcohol, but many bars and clubs close for the month. Supermarkets and liquor stores typically stop selling alcohol during Ramadan. If alcohol is important to your trip, check with your hotel in advance about their Ramadan policies.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is Ramadan in 2026 and 2027?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ramadan dates are based on the Islamic lunar calendar and shift approximately 10-11 days earlier each year. In 2026, Ramadan is expected from approximately February 18 to March 19. In 2027, it is expected from approximately February 8 to March 9. Exact dates depend on the sighting of the crescent moon and are confirmed just before Ramadan begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear during Ramadan in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During Ramadan, it is especially important to dress modestly in Morocco. For both men and women, cover shoulders and knees. Women may want to carry a light scarf for visiting religious areas. Avoid revealing or tight-fitting clothing, particularly near mosques and in conservative neighborhoods. This respectful dress code applies year-round in Morocco but is particularly appreciated during the holy month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it cheaper to visit Morocco during Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Ramadan often brings lower prices for accommodation and flights to Morocco, as it falls outside peak tourist season for many travelers. Hotels and riads may offer discounts of 20-40% compared to peak season rates. Fewer crowds at major attractions also mean a more relaxed sightseeing experience. However, some services may be limited, so the savings come with trade-offs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still take tours and excursions during Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, tour operators and guides continue to offer excursions during Ramadan, including desert tours, city walking tours, day trips, and multi-day itineraries. Some tours may start slightly later in the morning or finish earlier. Guides who are fasting may prefer not to enter restaurants during lunch. Booking with reputable operators ensures your itinerary accounts for Ramadan schedules.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: RAMADAN DATES
   ═══════════════════════════════════════════════════════════════ */

const ramadanDates = [
  { year: '2026', start: 'Feb 18', end: 'Mar 19', note: 'Current year' },
  { year: '2027', start: 'Feb 8', end: 'Mar 9', note: '' },
  { year: '2028', start: 'Jan 28', end: 'Feb 26', note: '' },
  { year: '2029', start: 'Jan 16', end: 'Feb 14', note: '' },
  { year: '2030', start: 'Jan 6', end: 'Feb 4', note: '' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT STAYS OPEN
   ═══════════════════════════════════════════════════════════════ */

const openDuringRamadan = [
  { category: 'Hotels & Riads', status: 'Fully open', detail: 'Hotels serve all meals to guests. Many offer special iftar dinner experiences with traditional dishes. Room service remains available throughout the day.', icon: Star },
  { category: 'Tourist Attractions', status: 'Reduced hours', detail: 'Museums, palaces, and gardens typically open 10 AM-4 PM. The Jardin Majorelle, Bahia Palace, and Hassan II Mosque continue to welcome visitors on adjusted schedules.', icon: MapPin },
  { category: 'Medinas & Souks', status: 'Open, quieter daytime', detail: 'Medina shops may open later and close in the afternoon, but come alive after iftar. Evening shopping in the souks is especially atmospheric during Ramadan.', icon: Globe },
  { category: 'Restaurants', status: 'Mixed availability', detail: 'Tourist restaurants in hotels and riads stay open. Many local restaurants close during the day but open for iftar and remain busy late into the night.', icon: UtensilsCrossed },
  { category: 'Transport', status: 'Fully operational', detail: 'Trains, buses, taxis, and domestic flights run normally. Some drivers may be slightly slower to respond during pre-iftar hours. Airport services are unaffected.', icon: Compass },
  { category: 'Tour Operators', status: 'Operating normally', detail: 'Desert tours, city walks, cooking classes, and excursions run throughout Ramadan. Schedules may shift slightly. Guides who fast appreciate understanding from guests.', icon: Users },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PROS OF VISITING
   ═══════════════════════════════════════════════════════════════ */

const prosOfVisiting = [
  { title: 'Unique Cultural Immersion', detail: 'Experience Morocco at its most spiritual and communal. Ramadan reveals a side of Moroccan culture that most tourists never see, from the call to prayer echoing through medinas at sunset to families sharing iftar in public squares.', icon: Heart },
  { title: 'Incredible Iftar Meals', detail: 'Iftar is a feast. Hotels and restaurants prepare elaborate spreads featuring harira soup, dates, chebakia honey pastries, briouats, msemen flatbreads, and fresh juices. Many riads host communal iftar dinners that are highlight experiences.', icon: UtensilsCrossed },
  { title: 'Lower Prices & Fewer Crowds', detail: 'Hotel rates drop 20-40% during Ramadan. Flights are cheaper. Major attractions have fewer visitors, meaning shorter queues and more space to explore places like the Bahia Palace or Jardin Majorelle.', icon: Star },
  { title: 'Vibrant Night Markets', detail: 'After iftar, Moroccan cities come alive. Night markets overflow with food stalls, street performers, and families socializing. Jemaa el-Fnaa in Marrakech is particularly electric during Ramadan evenings.', icon: Moon },
  { title: 'Moroccan Hospitality at Its Peak', detail: 'Moroccans are famously hospitable, and Ramadan amplifies this generosity. You may be invited to share an iftar meal with a local family, offered dates and milk at sunset, or experience warmth from shopkeepers and guides.', icon: Users },
  { title: 'Photography Opportunities', detail: 'The golden hour light during iftar preparation, the bustling night scenes, the quiet medina mornings, and the festive Eid celebrations create unique photographic moments unavailable at other times of year.', icon: Sun },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ETIQUETTE FOR NON-MUSLIMS
   ═══════════════════════════════════════════════════════════════ */

const etiquetteTips = [
  { rule: 'Avoid Eating in Public', detail: 'Do not eat, drink, or smoke in public during daylight hours. Eat inside your hotel, riad, or a restaurant that is serving non-fasting guests. This is the single most important sign of respect during Ramadan.', icon: UtensilsCrossed },
  { rule: 'Dress More Modestly', detail: 'Cover shoulders and knees at all times. Women should consider carrying a scarf. Avoid revealing or tight clothing, especially near mosques and in residential neighborhoods where respect is particularly valued.', icon: ShieldCheck },
  { rule: 'Be Patient with Schedules', detail: 'Service may be slower during afternoon hours as staff are fasting. Shops may open later and close earlier. Plan your day around Ramadan rhythms rather than fighting against them.', icon: Clock },
  { rule: 'Accept Invitations Graciously', detail: 'If invited to share iftar with a Moroccan family or group, accept graciously. This is a generous gesture. Bring a small gift like pastries or fruit. Eat with your right hand and compliment the food.', icon: Heart },
  { rule: 'Reduce Music Volume', detail: 'Avoid playing loud music from speakers or car stereos, especially near mosques and during prayer times. Use headphones for personal entertainment. Ramadan is a contemplative period and noise should be minimized.', icon: Moon },
  { rule: 'Show Interest, Not Just Tolerance', detail: 'Ask respectful questions about Ramadan traditions. Moroccans appreciate genuine curiosity about their faith and culture. Learning a few Arabic phrases like "Ramadan Mubarak" (blessed Ramadan) is warmly received.', icon: Sparkles },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CITY-BY-CITY IMPACT
   ═══════════════════════════════════════════════════════════════ */

const cityImpact = [
  { city: 'Marrakech', impact: 'Moderate', detail: 'As Morocco\'s most tourist-heavy city, Marrakech adapts well to Ramadan visitors. Most riad restaurants stay open during the day. Jemaa el-Fnaa is quieter during daylight but explodes with energy after iftar. The souks have reduced daytime hours but evening shopping is magical. Many hotels offer special Ramadan-themed dinner events.' },
  { city: 'Fes', impact: 'Noticeable', detail: 'Fes is more traditional and conservative, so the Ramadan impact is stronger. The ancient medina feels deeply spiritual during the holy month. Fewer daytime dining options outside hotels, but the evening iftar atmosphere in the old city is unforgettable. The tanneries and artisan workshops operate on reduced schedules.' },
  { city: 'Chefchaouen', impact: 'Noticeable', detail: 'The Blue City becomes very quiet during Ramadan daytime hours. Most local restaurants close until iftar. Tourist restaurants in the main square may still operate. The peaceful atmosphere can be a positive for photographers and those seeking solitude. Evening strolls through the blue streets are especially atmospheric.' },
  { city: 'Casablanca', impact: 'Mild', detail: 'As Morocco\'s business capital, Casablanca functions relatively normally during Ramadan. International restaurants in hotel districts stay open. The Hassan II Mosque tours continue on a modified schedule. Nightlife is subdued but the city\'s commercial rhythm continues, particularly in business districts.' },
  { city: 'Essaouira', impact: 'Moderate', detail: 'The coastal town sees reduced restaurant availability during the day, but the beach, ramparts, and medina are open for exploration. Fish restaurants near the port may close until evening. The relaxed vibe of Essaouira pairs beautifully with Ramadan\'s contemplative mood. Sunset over the Atlantic is a natural iftar backdrop.' },
  { city: 'Tangier', impact: 'Moderate', detail: 'Tangier\'s cosmopolitan character means more daytime options than smaller cities. The Kasbah and Medina museums keep adjusted hours. The cafe culture shifts to evening and night. The new Tangier waterfront area maintains activity, and international restaurants in the Ville Nouvelle stay open.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SPECIAL RAMADAN EVENTS
   ═══════════════════════════════════════════════════════════════ */

const specialEvents = [
  { event: 'Laylat al-Qadr (Night of Power)', detail: 'The holiest night of Ramadan, believed to fall on one of the last odd nights (21st, 23rd, 25th, 27th, or 29th). Mosques are packed with worshippers, streets have a special energy, and the spiritual atmosphere is palpable. Many Moroccans spend the entire night in prayer.', icon: Star },
  { event: 'Eid al-Fitr Celebrations', detail: 'The three-day festival marking the end of Ramadan is one of Morocco\'s most joyous celebrations. Streets fill with families in new clothes, special pastries are exchanged between neighbors, and a festive atmosphere takes over every city. Note: many businesses close for Eid.', icon: Sparkles },
  { event: 'Public Iftar Gatherings', detail: 'Many Moroccan cities set up communal iftar tables in public squares and near mosques, where anyone, including tourists, can sit and break the fast. These are powerful community experiences that showcase Moroccan generosity at its finest.', icon: Users },
  { event: 'Ramadan Night Markets', detail: 'After iftar, special night markets appear selling Ramadan sweets, fresh juices, traditional pastries like chebakia and sellou, and seasonal treats. The atmosphere is festive and family-oriented, continuing well past midnight.', icon: Moon },
  { event: 'Spiritual Music & Recitations', detail: 'Throughout Ramadan, mosques host extended Quran recitations (Tarawih prayers) after the evening prayer. While non-Muslims cannot enter most mosques, the sound of recitation drifting through the medina at night creates an extraordinary ambient atmosphere.', icon: BookOpen },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/ramadan',
    title: 'Ramadan Quick Overview',
    description: 'Quick-reference guide to Ramadan basics, key dates, and cultural context for travelers in Morocco.',
    icon: Moon,
  },
  {
    href: '/etiquette',
    title: 'Morocco Etiquette Guide',
    description: 'Complete guide to cultural customs, dress codes, greetings, and social norms across Morocco.',
    icon: Heart,
  },
  {
    href: '/morocco-food-guide',
    title: 'Morocco Food Guide',
    description: 'Explore Moroccan cuisine from tagine and couscous to street food, pastries, and regional specialties.',
    icon: UtensilsCrossed,
  },
  {
    href: '/culture',
    title: 'Moroccan Culture & Traditions',
    description: 'Deep dive into Moroccan cultural heritage, festivals, music, art, and daily life traditions.',
    icon: Globe,
  },
  {
    href: '/best-time-visit-morocco',
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month weather, festival calendar, and seasonal tips to plan the perfect Morocco trip.',
    icon: Calendar,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRamadanTravelPage() {
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
            <span className="text-white">Morocco Ramadan Travel Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Moon className="w-4 h-4" />
            Ramadan Travel &amp; Cultural Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Visiting Morocco
            <br className="hidden md:block" /> During Ramadan
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know about traveling in Morocco during the holy month &mdash; what stays
            open, iftar experiences, etiquette for non-Muslims, and why Ramadan can be the most
            rewarding time to visit.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: What is Ramadan ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is Ramadan &amp; How Does It Affect Travel?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Ramadan is the ninth month of the Islamic lunar calendar, observed by Muslims worldwide
                as a month of fasting, prayer, reflection, and community. In Morocco, where over 99%
                of the population is Muslim, Ramadan transforms the rhythm of daily life. From dawn to
                sunset, Moroccans abstain from food, drink, and smoking, dedicating extra time to prayer
                and charitable acts.
              </p>
              <p>
                For travelers, Ramadan means an adjusted daily schedule across the country. Mornings
                start later, afternoons wind down earlier, and the real energy begins at sunset when
                the call to prayer signals iftar &mdash; the communal meal that breaks the fast. Streets
                that were quiet an hour before suddenly overflow with families, food vendors, and a palpable
                sense of celebration.
              </p>
              <p>
                Many tourists avoid Morocco during Ramadan, but experienced travelers know that the holy
                month offers unique cultural experiences, lower prices, fewer crowds, and a level of
                hospitality that is exceptional even by Moroccan standards. With the right preparation
                and respectful behavior, a Ramadan visit can be the highlight of your travel life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Summary Cards ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ramadan Travel at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about visiting Morocco during Ramadan that every traveler should know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Fasting Hours', value: '14-15 hrs', detail: 'Dawn to sunset daily; varies by date', icon: Sun },
              { label: 'Iftar Time', value: 'Sunset', detail: 'Around 6:30-7:30 PM depending on month', icon: Moon },
              { label: 'Hotel Meals', value: 'All Day', detail: 'Hotels & riads serve guests normally', icon: Coffee },
              { label: 'Price Drop', value: '20-40%', detail: 'Lower hotel rates and fewer crowds', icon: Star },
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

      {/* ── Ramadan Dates ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ramadan Dates 2026&ndash;2030
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ramadan follows the Islamic lunar calendar and shifts approximately 10&ndash;11 days earlier each year.
            Exact dates depend on the sighting of the crescent moon.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            These are estimated dates. Actual start and end dates are confirmed by religious authorities
            based on moon sighting and may vary by 1&ndash;2 days.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {ramadanDates.map((rd) => (
                <div key={rd.year} className={`flex items-center gap-4 p-4 rounded-lg ${rd.note ? 'bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20' : 'bg-[var(--surface-muted)]'}`}>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      Ramadan {rd.year}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {rd.start} &ndash; {rd.end} (approximately)
                    </p>
                  </div>
                  {rd.note && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {rd.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What Stays Open ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Stays Open During Ramadan
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco remains open for tourism during Ramadan. Here is a realistic breakdown of what
            to expect across key categories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openDuringRamadan.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.category} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.category}
                      </h3>
                      <span className={`text-xs font-semibold ${item.status === 'Fully open' || item.status === 'Fully operational' || item.status === 'Operating normally' ? 'text-green-700' : item.status === 'Reduced hours' || item.status === 'Open, quieter daytime' ? 'text-amber-700' : 'text-amber-600'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Iftar Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Iftar Experience
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Iftar is the highlight of every Ramadan day &mdash; and one of the most memorable
            culinary and cultural experiences you can have in Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              What to Expect at a Traditional Moroccan Iftar
            </h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p>
                A traditional Moroccan iftar follows a specific sequence that has remained largely
                unchanged for centuries. The fast is broken with dates and milk, following the
                practice of the Prophet Muhammad. This is immediately followed by the evening
                prayer, after which the main meal begins.
              </p>
              <div className="space-y-2 mt-4">
                {[
                  'Dates & milk or water to break the fast at the sound of the adhan (call to prayer)',
                  'Harira: a rich tomato-based soup with lentils, chickpeas, and lamb, the quintessential Ramadan dish',
                  'Chebakia: sesame cookies deep-fried and soaked in honey, a Ramadan-specific sweet',
                  'Briouats: crispy pastry triangles filled with meat, cheese, or almonds',
                  'Msemen or rghaif: layered flatbreads served with honey and butter',
                  'Sellou (sfouf): a sweet powder made from toasted flour, almonds, and sesame, unique to Ramadan',
                  'Fresh fruit juices: avocado, orange, banana-date, and almond milk smoothies',
                  'Mint tea: the meal concludes with Morocco\'s signature sweet mint tea',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Star className="w-4 h-4 inline text-[var(--color-gold)] mr-1" />
                Hotel &amp; Riad Iftars
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Many Moroccan hotels and riads offer special iftar dinner experiences ranging from
                from 150 MAD to 500 MAD per person. These are elaborate, multi-course meals often
                served on rooftop terraces or in ornate dining rooms. Booking in advance is
                recommended as these experiences are popular with both locals and tourists. Seasonal
                pricing can change depending on the property and year.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Users className="w-4 h-4 inline text-[var(--color-gold)] mr-1" />
                Public &amp; Community Iftars
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Across Morocco, mosques and community organizations set up free communal iftar
                tables in public squares. Anyone is welcome to sit and eat, including tourists.
                These tables are funded by donations and represent a core Ramadan value: sharing.
                Sitting at a communal iftar table is one of the most genuine cultural experiences
                available during Ramadan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Etiquette for Non-Muslims ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ramadan Etiquette for Non-Muslim Visitors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Showing respect during Ramadan is straightforward. Follow these guidelines and you will
            be warmly welcomed everywhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {etiquetteTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.rule} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {tip.rule}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Useful Arabic Phrases for Ramadan
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  &ldquo;Ramadan Mubarak&rdquo; (blessed Ramadan) is the most common greeting.
                  &ldquo;Ramadan Kareem&rdquo; (generous Ramadan) is also widely used.
                  After someone finishes eating iftar, you can say &ldquo;Bssa7a&rdquo;
                  (to your health). These simple phrases show respect and are always appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pros of Visiting During Ramadan ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Visit Morocco During Ramadan
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Far from being a drawback, Ramadan offers unique advantages that make it one of the
            most special times to experience Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prosOfVisiting.map((pro) => {
              const ProIcon = pro.icon;
              return (
                <div key={pro.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ProIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {pro.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{pro.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── City-by-City Impact ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            City-by-City Ramadan Impact
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ramadan affects different Moroccan cities to different degrees. Here is what to expect
            in the most popular destinations.
          </p>

          <div className="space-y-6">
            {cityImpact.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {city.city}
                    </h3>
                    <span className={`text-xs font-semibold ${city.impact === 'Mild' ? 'text-green-700' : city.impact === 'Moderate' ? 'text-amber-700' : 'text-orange-700'}`}>
                      Impact: {city.impact}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{city.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Special Ramadan Events ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Special Ramadan Events &amp; Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These unique events only happen during Ramadan and are some of the most powerful
            cultural experiences available in Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {specialEvents.map((evt) => {
                const EvtIcon = evt.icon;
                return (
                  <div key={evt.event} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <EvtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {evt.event}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{evt.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Eid al-Fitr Planning Note
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  If your trip overlaps with Eid al-Fitr (the celebration marking the end of Ramadan),
                  be aware that many shops, restaurants, and services close for 2&ndash;3 days. Transport
                  can be extremely busy as Moroccans travel to visit family. Book accommodation and
                  transport well in advance if visiting during Eid. The festive atmosphere, however,
                  is absolutely worth experiencing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sample Ramadan Day Schedule ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Sample Day in Morocco During Ramadan
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Here is what a typical tourist day looks like during Ramadan, so you can plan your
            itinerary around the rhythm of the holy month.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-5">
              {[
                { time: '8:00 AM', activity: 'Breakfast at Your Riad', detail: 'Hotels and riads serve breakfast as normal. Enjoy a relaxed Moroccan breakfast of msemen, amlou, fresh orange juice, and mint tea in the quiet morning atmosphere.' },
                { time: '9:30 AM', activity: 'Morning Sightseeing', detail: 'Visit palaces, museums, and gardens during the cooler morning hours. Attractions are open and less crowded than usual. This is the best time for photography with soft light and empty courtyards.' },
                { time: '12:30 PM', activity: 'Lunch at Your Accommodation', detail: 'Return to your hotel or riad for lunch. Tourist-facing restaurants are open but options are more limited. Some travelers pack snacks for the day to stay flexible.' },
                { time: '2:00 PM', activity: 'Afternoon Rest or Indoor Activities', detail: 'The streets quieten as the heat builds and fasting takes its toll. Retreat to your riad, visit a hammam, browse a bookshop, or enjoy rooftop relaxation. Many Moroccans rest during these hours.' },
                { time: '4:00 PM', activity: 'Late Afternoon Exploration', detail: 'Take a gentle walk through the medina as streets begin to stir with pre-iftar preparations. Watch food vendors set up their stalls. The energy of anticipation is palpable.' },
                { time: '6:00 PM', activity: 'Prepare for Iftar', detail: 'Head to your chosen iftar venue, whether that is a rooftop riad dinner, a hotel restaurant, or a communal table in a public square. Arrive 30 minutes before sunset to settle in.' },
                { time: '6:45 PM', activity: 'Iftar (Sunset)', detail: 'The call to prayer signals the breaking of the fast. The entire city pauses, then comes alive as millions eat together. Enjoy the elaborate multi-course meal and soak in the atmosphere.' },
                { time: '8:30 PM', activity: 'Evening Exploration', detail: 'After iftar, the city transforms. Night markets bustle, souks reopen, families fill the streets, and the energy is electric. This is the best time to explore the medina, shop, and people-watch.' },
                { time: '10:00 PM', activity: 'Night Activities', detail: 'Enjoy late-night street food, browse night market stalls, visit a rooftop cafe, or simply wander the illuminated medina. Ramadan nights in Morocco are vibrant and safe, with families out well past midnight.' },
              ].map((slot) => (
                <div key={slot.time} className="flex items-start gap-4">
                  <div className="w-20 shrink-0 text-right">
                    <span className="text-sm font-bold text-[var(--color-accent)] font-[family-name:var(--font-heading)]">
                      {slot.time}
                    </span>
                  </div>
                  <div className="w-px bg-[var(--color-accent)]/30 shrink-0 self-stretch" />
                  <div className="flex-1 pb-2">
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {slot.activity}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{slot.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Ramadan Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to make your Ramadan visit to Morocco smooth and enjoyable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Plan Your Meals',
                detail: 'Stock up on snacks and water from hotel shops or supermarkets. Know which restaurants near your accommodation serve lunch during Ramadan. Your hotel or riad is always a reliable option for daytime meals.',
                icon: UtensilsCrossed,
              },
              {
                title: 'Adjust Your Schedule',
                detail: 'Embrace the Ramadan rhythm. Do sightseeing in the morning when the air is cool and streets are quiet. Rest in the afternoon. Join the evening energy after iftar for souks, night markets, and social life.',
                icon: Clock,
              },
              {
                title: 'Book Iftar Experiences Early',
                detail: 'Special iftar dinners at popular riads and restaurants sell out, especially on weekends. Book at least a few days in advance for the best rooftop iftar experiences in Marrakech and Fes.',
                icon: Calendar,
              },
              {
                title: 'Carry Water Discretely',
                detail: 'Keep a water bottle in your bag for hydration but drink it inside doorways, your hotel, or away from public view. Staying hydrated is important, especially if visiting during warmer months, but be discrete about it.',
                icon: Heart,
              },
              {
                title: 'Be Flexible with Services',
                detail: 'Some services may have limited availability. Pharmacies, banks, and post offices often have reduced hours. Government offices close earlier. Check hours in advance and plan accordingly.',
                icon: Info,
              },
              {
                title: 'Respect the Pre-Iftar Rush',
                detail: 'In the hour before iftar, streets become hectic as everyone rushes home. Avoid driving during this period. Be in your accommodation or a restaurant by 30 minutes before sunset to avoid the rush.',
                icon: AlertTriangle,
              },
            ].map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Ramadan Packing Essentials
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Pack these items specifically for a Ramadan trip to Morocco:
                </p>
                <div className="space-y-2">
                  {[
                    'Modest clothing that covers shoulders and knees (lightweight, breathable fabrics for warm weather)',
                    'A light scarf for women when visiting religious neighborhoods or traditional areas',
                    'Refillable water bottle to stay hydrated (drink discretely indoors or away from public view)',
                    'Snack bars and dried fruit for daytime energy when restaurant options are limited',
                    'A small gift to bring if invited to a local iftar (pastries, fruit, or sweets are ideal)',
                    'Comfortable walking shoes for evening exploration when the medina comes alive after sunset',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
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
            Answers to the most common questions about visiting Morocco during Ramadan.
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
          <Moon className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Experience Morocco During Ramadan
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Ramadan reveals a side of Morocco most tourists never see. With the right preparation
            and a respectful attitude, your visit during the holy month will be one of the most
            meaningful travel experiences of your life. Embrace the rhythm, join an iftar, and
            discover the soul of Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/etiquette"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Morocco Etiquette Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Morocco Food Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Ramadan dates are based on the Islamic lunar calendar and are confirmed annually by
            religious authorities. Business hours and service availability during Ramadan can vary.
            Information on this page is current as of March 2026.
          </p>
        </div>
      </section>
    </>
  );
}
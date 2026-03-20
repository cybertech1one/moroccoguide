import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
  Info,
  ArrowRight,
  Snowflake,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Calendar,
  Car,
  Luggage,
  Award,
  Compass,
  TrendingUp,
  Building,
  Sunrise,
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
  title: 'Morocco Ski Resorts Guide 2026 | Oukaimeden, Michlifen & Atlas Mountains Skiing',
  description:
    'Complete guide to skiing in Morocco. Oukaimeden (Africa\'s highest ski resort at 3,268m), Michlifen, Ifrane & Atlas Mountains skiing. Lift passes from 100 MAD, equipment rental, ski season December-March, accommodation, and combining skiing with Marrakech.',
  keywords: [
    'morocco ski resort',
    'ski resort morocco',
    'skiing in morocco',
    'Oukaimeden ski',
    'Michlifen ski',
    'Atlas Mountains skiing',
    'ski resorts morocco',
    'morocco ski season',
    'Oukaimeden ski resort',
    'Ifrane Morocco skiing',
    'snowboarding Morocco',
    'Morocco winter sports',
    'Africa ski resort',
    'ski Morocco prices',
    'Oukaimeden lift pass',
    'Morocco snow season',
    'Atlas Mountains snow',
    'ski school Morocco',
    'Morocco ski equipment rental',
    'Marrakech day trip skiing',
  ],
  openGraph: {
    title: 'Morocco Ski Resorts Guide 2026 | Oukaimeden, Michlifen & Atlas Mountains Skiing',
    description:
      'Ski in Africa! Complete guide to Morocco\'s ski resorts including Oukaimeden at 3,268m, Michlifen, and Ifrane. Lift passes from 100 MAD, season info, equipment rental, and more.',
    url: `${BASE_URL}/morocco-ski-resorts`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'Snow-covered Atlas Mountains in Morocco with ski slopes and clear blue sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Ski Resorts Guide 2026 | Skiing in the Atlas Mountains',
    description:
      'Yes, you can ski in Morocco! Oukaimeden at 3,268m is Africa\'s highest ski resort. Complete guide with lift passes from 100 MAD, equipment rental, and season info.',
    images: [`${BASE_URL}/images/hero-atlas-mountains.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-ski-resorts` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-ski-resorts`,
  name: 'Morocco Ski Resorts Guide 2026 | Oukaimeden, Michlifen & Atlas Mountains Skiing',
  description:
    'Complete guide to skiing in Morocco. Oukaimeden, Michlifen, Ifrane, and Atlas Mountains skiing with lift passes, equipment rental, ski season details, and accommodation.',
  url: `${BASE_URL}/morocco-ski-resorts`,
  image: `${BASE_URL}/images/hero-atlas-mountains.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-ski-resorts`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Ski Resorts Guide', item: `${BASE_URL}/morocco-ski-resorts` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you really ski in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Morocco has several ski resorts in the Atlas Mountains. Oukaimeden, located at 3,268m in the High Atlas just 75km from Marrakech, is Africa\'s highest ski resort. Michlifen in the Middle Atlas near Ifrane also offers skiing. The season runs from December to March.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the ski season in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Morocco ski season typically runs from mid-December to late March, with the best snow conditions in January and February. Snow depth and conditions vary by year, so checking current conditions before traveling is recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to ski at Oukaimeden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oukaimeden is very affordable. Lift passes start from 100 MAD per day, equipment rental from 200 MAD per day, and ski instructor sessions from 300 MAD per hour. Total cost for a day of skiing with rental gear starts from around 400-500 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I combine skiing with a Marrakech trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! Oukaimeden is only 75km (about 1.5-2 hours drive) from Marrakech, making it perfect for a day trip. You can ski in the morning and be back in Marrakech for dinner. Many tour operators offer day trips from Marrakech to Oukaimeden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Oukaimeden suitable for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Oukaimeden has several beginner-friendly slopes and a ski school with instructors who can teach in multiple languages. The nursery slopes near the base are gentle and perfect for first-timers. Equipment rental is available on-site.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best ski resort in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oukaimeden is Morocco\'s premier ski resort, offering the most developed infrastructure with 7 ski lifts, multiple runs for all levels, equipment rental, and ski schools. Michlifen near Ifrane is the second option, offering a more intimate experience with fewer crowds.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SKI RESORTS
   ═══════════════════════════════════════════════════════════════ */

const skiResorts = [
  {
    name: 'Oukaimeden',
    subtitle: 'Africa\'s Highest Ski Resort',
    icon: Mountain,
    altitude: '2,600m - 3,268m',
    location: 'High Atlas, 75km from Marrakech',
    season: 'Mid-December to late March',
    lifts: '7 lifts (including 1 chairlift, 5 drag lifts, 1 button lift)',
    runs: '10+ runs across beginner, intermediate, and advanced levels',
    snowmaking: 'Natural snow only',
    liftPass: 'From 100 MAD per day',
    rental: 'From 200 MAD per day (skis, boots, poles)',
    skiSchool: 'From 300 MAD per hour with certified instructor',
    description:
      'Oukaimeden is the jewel of Moroccan skiing and holds the distinction of being the highest ski resort in all of Africa. Perched at 3,268m in the High Atlas Mountains, it offers a surreal experience: skiing with views of the Sahara on clear days, surrounded by Berber villages and ancient rock carvings. The resort has been welcoming skiers since the French Protectorate era in the 1930s and has developed steadily, though it retains a charming, uncommercialised atmosphere that European mega-resorts lost decades ago.',
    highlights: [
      'Highest ski resort in Africa at 3,268m',
      'Only 75km from Marrakech (1.5-2 hour drive)',
      'Ancient Berber rock carvings near the slopes',
      'Beginner to advanced runs available',
      'Affordable lift passes and equipment rental',
      'Ski school with multilingual instructors',
    ],
  },
  {
    name: 'Michlifen',
    subtitle: 'Middle Atlas Skiing & Luxury',
    icon: Snowflake,
    altitude: '1,800m - 2,036m',
    location: 'Middle Atlas, 17km from Ifrane',
    season: 'January to mid-March',
    lifts: '3 lifts (drag lifts)',
    runs: '5 runs, primarily beginner and intermediate',
    snowmaking: 'Natural snow only',
    liftPass: 'From 80 MAD per day',
    rental: 'From 150 MAD per day',
    skiSchool: 'From 250 MAD per hour',
    description:
      'Michlifen sits in the cedar forests of the Middle Atlas near the charming town of Ifrane, often called the "Switzerland of Morocco." While smaller than Oukaimeden, Michlifen offers a more intimate skiing experience amidst stunning natural scenery. The surrounding forests are home to the endangered Barbary macaque, and the area transforms into a winter wonderland when snow falls. The nearby Michlifen Ifrane Suites & Spa resort has elevated this area into a luxury winter destination.',
    highlights: [
      'Set among ancient cedar forests',
      'Near Ifrane, the "Switzerland of Morocco"',
      'Barbary macaque monkeys in surrounding forests',
      'Luxury resort accommodation nearby',
      'Smaller crowds than Oukaimeden',
      'Excellent for beginners and families',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SKI SEASON MONTH BY MONTH
   ═══════════════════════════════════════════════════════════════ */

const seasonMonths = [
  {
    month: 'December',
    conditions: 'Early Season',
    icon: Snowflake,
    snowDepth: '20-50cm at summit',
    description: 'Season begins mid-December, though coverage can be patchy. Early snowfalls lay the foundation, but runs may be limited. Best for experienced skiers who can navigate variable conditions.',
    crowdLevel: 'Low',
    recommendation: 'Wait for confirmation of good snow before traveling',
  },
  {
    month: 'January',
    conditions: 'Peak Season',
    icon: Snowflake,
    snowDepth: '50-100cm at summit',
    description: 'January brings the best snow conditions. Cold temperatures keep the snow powdery, all runs and lifts are usually operational. This is the most reliable month for skiing in Morocco.',
    crowdLevel: 'Moderate to High',
    recommendation: 'Best month for skiing. Book accommodation in advance.',
  },
  {
    month: 'February',
    conditions: 'Peak Season',
    icon: Snowflake,
    snowDepth: '40-90cm at summit',
    description: 'Prime skiing conditions continue. Snow depth remains strong, though some thawing may occur on warmer days at lower elevations. Late February can offer excellent spring-like skiing conditions.',
    crowdLevel: 'Moderate to High',
    recommendation: 'Excellent conditions. Weekdays are less crowded than weekends.',
  },
  {
    month: 'March',
    conditions: 'Late Season',
    icon: Sunrise,
    snowDepth: '20-60cm at summit',
    description: 'The final month of the season. Summit snow can still be good, but lower slopes may become slushy by midday. Morning skiing is best. Season usually ends by late March.',
    crowdLevel: 'Low to Moderate',
    recommendation: 'Best for morning skiing. Check conditions before traveling.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EQUIPMENT & PRICING
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Day lift pass (Oukaimeden)', price: 'From 100 MAD', note: 'Full day access to all lifts' },
  { item: 'Half-day lift pass', price: 'From 60 MAD', note: 'Morning or afternoon session' },
  { item: 'Ski equipment rental (full set)', price: 'From 200 MAD/day', note: 'Skis, boots, and poles included' },
  { item: 'Snowboard rental', price: 'From 250 MAD/day', note: 'Board and boots included' },
  { item: 'Ski instructor (private)', price: 'From 300 MAD/hour', note: 'One-on-one instruction in multiple languages' },
  { item: 'Ski instructor (group)', price: 'From 150 MAD/person', note: 'Group lesson for 2-6 people, 1 hour' },
  { item: 'Sledge/toboggan rental', price: 'From 50 MAD/hour', note: 'Available at base area' },
  { item: 'Day trip from Marrakech (organized)', price: 'From 500 MAD/person', note: 'Includes transport and sometimes equipment' },
  { item: 'Taxi from Marrakech (round trip)', price: 'From 600 MAD', note: 'Private grand taxi, negotiate in advance' },
  { item: 'Accommodation near Oukaimeden', price: 'From 300 MAD/night', note: 'Basic guesthouse; luxury from 1,500 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING THERE
   ═══════════════════════════════════════════════════════════════ */

const gettingThere = [
  {
    resort: 'Oukaimeden',
    icon: Mountain,
    routes: [
      { from: 'Marrakech', distance: '75km', time: '1.5-2 hours', method: 'Grand taxi, private transfer, or organized day trip. Road is paved but winding through the Ourika Valley with mountain passes.' },
    ],
    tips: 'Snow chains may be required in heavy snow. The road from the Ourika Valley up to Oukaimeden is steep and winding. If driving, ensure your vehicle is suitable for mountain roads.',
  },
  {
    resort: 'Michlifen',
    icon: Snowflake,
    routes: [
      { from: 'Ifrane', distance: '17km', time: '20 minutes', method: 'Taxi or private car. Road is generally clear but check conditions in heavy snow.' },
      { from: 'Fes', distance: '80km', time: '1.5 hours', method: 'Drive via N8 highway to Ifrane, then local road to Michlifen.' },
    ],
    tips: 'The road from Ifrane to Michlifen passes through beautiful cedar forests. In heavy snow, the road may be temporarily closed. Check local conditions.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  {
    category: 'Essential Ski Gear',
    icon: Snowflake,
    items: [
      'Waterproof ski jacket (or rent on-site)',
      'Ski pants/salopettes',
      'Thermal base layers (top and bottom)',
      'Ski gloves (waterproof)',
      'Ski goggles or quality sunglasses',
      'Warm hat or beanie',
      'Neck gaiter or balaclava',
    ],
  },
  {
    category: 'Footwear & Accessories',
    icon: Compass,
    items: [
      'Warm waterproof boots (for walking in snow)',
      'Thick wool or ski socks (2-3 pairs)',
      'Hand and toe warmers (optional)',
      'Sunscreen SPF 50+ (essential at altitude)',
      'Lip balm with SPF protection',
    ],
  },
  {
    category: 'Off-Slope Essentials',
    icon: Luggage,
    items: [
      'Warm casual clothes for evenings',
      'Fleece or down jacket for layering',
      'Reusable water bottle',
      'Snacks and energy bars',
      'Camera (the scenery is stunning)',
      'Cash in MAD (ATMs may not be available at resorts)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const accommodation = [
  {
    area: 'At Oukaimeden',
    icon: Mountain,
    options: [
      { name: 'Chez Juju (Le Refuge)', type: 'Mountain Lodge', price: 'From 400 MAD/night', description: 'The most famous accommodation at Oukaimeden. A historic mountain lodge with restaurant, bar, and incredible views. Book well in advance during ski season.' },
      { name: 'CAF Refuge', type: 'Mountain Refuge', price: 'From 150 MAD/night', description: 'The Club Alpin Francais refuge offers basic but functional dormitory-style accommodation. Perfect for budget skiers and mountaineers.' },
      { name: 'Local Guesthouses', type: 'Budget', price: 'From 300 MAD/night', description: 'Several small guesthouses in and around the resort area offer simple rooms with heating and home-cooked Berber meals.' },
    ],
  },
  {
    area: 'Near Michlifen / Ifrane',
    icon: Building,
    options: [
      { name: 'Michlifen Ifrane Suites & Spa', type: 'Luxury Resort', price: 'From 2,500 MAD/night', description: 'The premier luxury option. A five-star resort with spa, heated pool, multiple restaurants, and direct access to Michlifen slopes. Morocco\'s answer to an Alpine luxury ski hotel.' },
      { name: 'Hotel Perce Neige', type: 'Mid-Range', price: 'From 600 MAD/night', description: 'A comfortable hotel in Ifrane town center with a warm atmosphere and good restaurant. Popular with Moroccan families during winter.' },
      { name: 'Hotel Chamonix', type: 'Budget-Mid', price: 'From 400 MAD/night', description: 'Named after the famous French ski town, this cozy hotel offers clean rooms and is within walking distance of Ifrane\'s cafes and restaurants.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: APRES-SKI
   ═══════════════════════════════════════════════════════════════ */

const apresSkiExperiences = [
  {
    title: 'Mountain Cafe Experience at Oukaimeden',
    icon: Sunrise,
    description: 'After a day on the slopes, warm up in one of the small cafes at the base of Oukaimeden. Order a pot of Moroccan mint tea, a bowl of harira soup, or a tagine cooked over charcoal. The atmosphere is wonderfully relaxed and authentically Berber.',
    price: 'Meals from 50 MAD, tea from 10 MAD',
  },
  {
    title: 'Marrakech by Night',
    icon: Compass,
    description: 'If you ski at Oukaimeden as a day trip from Marrakech, you get the ultimate contrast: return to the vibrant chaos of Jemaa el-Fna square for street food, music, and entertainment. A tagine in the medina after a day of skiing is unforgettable.',
    price: 'Street food from 30 MAD, restaurant from 100 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSkiResortsPage() {
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
            backgroundImage: 'url(/images/hero-atlas-mountains.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Ski Resorts Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Snowflake className="w-4 h-4" />
            Winter Sports &amp; Adventure
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Ski Resorts Guide:
            <br className="hidden md:block" /> Skiing in the Atlas Mountains
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Africa&apos;s highest ski resort at 3,268m to the cedar forests of the Middle Atlas.
            Lift passes from 100 MAD. Ski season December through March.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Yes, You Can Ski in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                When people think of Morocco, they picture sun-baked medinas, sweeping Sahara dunes, and
                turquoise coastlines. Skiing rarely enters the conversation. Yet Morocco is home to some of
                Africa&apos;s only ski resorts, perched high in the Atlas Mountains where winter brings
                reliable snowfall and freezing temperatures.
              </p>
              <p>
                Oukaimeden, at 3,268 metres, is the highest ski resort on the African continent. Just 75
                kilometres from Marrakech, it offers the surreal possibility of skiing in the morning and
                sipping mint tea in a medina courtyard by evening. Further north, the Middle Atlas town of
                Ifrane, dubbed the &quot;Switzerland of Morocco,&quot; provides access to Michlifen ski area
                amid ancient cedar forests populated by Barbary macaques.
              </p>
              <p>
                The infrastructure is modest, the snow unpredictable, and the lifts old-school. But that
                is precisely the charm. You will ski alongside Moroccan families, warm up in Berber mountain
                cafes, and experience a side of Morocco most tourists never see. With lift passes from just
                100 MAD, it is one of the most affordable skiing destinations on Earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ski Resorts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Ski Resorts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A detailed look at Morocco&apos;s skiing destinations, from Africa&apos;s highest slopes to Middle Atlas hideaways.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies and conditions vary year to year.
          </p>

          <div className="space-y-10">
            {skiResorts.map((resort) => {
              const ResortIcon = resort.icon;
              return (
                <div key={resort.name} className="card-moroccan overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <ResortIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {resort.name}
                        </h3>
                        <p className="text-sm font-[family-name:var(--font-heading)] text-[var(--color-gold)] font-semibold">
                          {resort.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">{resort.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Altitude</span>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{resort.altitude}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</span>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{resort.location}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><Calendar className="w-3 h-3" /> Season</span>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{resort.season}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><DollarSign className="w-3 h-3" /> Lift Pass</span>
                        <p className="text-sm font-semibold text-[var(--color-accent)]">{resort.liftPass}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-xs text-[var(--text-muted)]">
                      <span className="flex items-start gap-1.5"><Snowflake className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" /><strong>Lifts:</strong> {resort.lifts}</span>
                      <span className="flex items-start gap-1.5"><Compass className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" /><strong>Runs:</strong> {resort.runs}</span>
                      <span className="flex items-start gap-1.5"><DollarSign className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" /><strong>Rental:</strong> {resort.rental}</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {resort.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ski Season Month by Month ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ski Season: Month by Month
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Morocco ski season runs from mid-December to late March. Here is what to expect each month.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seasonMonths.map((month) => {
              const MonthIcon = month.icon;
              return (
                <div key={month.month} className="card-moroccan p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <MonthIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{month.month}</h3>
                        <span className="text-xs text-[var(--color-gold)] font-semibold">{month.conditions}</span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-[var(--text-muted)]">
                      Snow: <span className="font-semibold text-[var(--text-primary)]">{month.snowDepth}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{month.description}</p>
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span><Users className="w-3 h-3 inline mr-1" />Crowds: {month.crowdLevel}</span>
                    <span className="text-[var(--color-gold)]"><Info className="w-3 h-3 inline mr-1" />{month.recommendation}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Skiing Prices &amp; Equipment Rental
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco offers some of the most affordable skiing in the world. Here is a complete breakdown of costs.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing may apply during peak weekends and holidays.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item / Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to Morocco&apos;s Ski Resorts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transport options and practical advice for reaching Morocco&apos;s mountain ski destinations.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {gettingThere.map((destination) => {
              const DestIcon = destination.icon;
              return (
                <div key={destination.resort} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Getting to {destination.resort}</h3>
                  </div>
                  <div className="space-y-3 mb-4">
                    {destination.routes.map((route, i) => (
                      <div key={i} className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <span className="text-sm font-semibold text-[var(--text-primary)]">From {route.from}</span>
                        <span className="text-xs text-[var(--text-muted)] ml-3">{route.distance} | {route.time}</span>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">{route.method}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-amber-800">{destination.tips}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay Near the Ski Resorts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From mountain lodges at the slopes to luxury resorts in the Middle Atlas.
          </p>

          <div className="space-y-8">
            {accommodation.map((area) => {
              const AreaIcon = area.icon;
              return (
                <div key={area.area} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AreaIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{area.area}</h3>
                  </div>
                  <div className="space-y-3">
                    {area.options.map((option, i) => (
                      <div key={i} className="bg-[var(--surface-muted)] p-4 rounded-lg flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{option.name} <span className="font-normal text-xs text-[var(--text-muted)]">({option.type})</span></h4>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{option.description}</p>
                        </div>
                        <span className="text-xs text-[var(--color-accent)] font-semibold shrink-0">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Snowboarding Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Snowboarding in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Snowboarding is growing in popularity at Moroccan resorts, especially among younger riders.
          </p>

          <div className="card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Oukaimeden for Snowboarders
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3">
              Oukaimeden welcomes snowboarders on all its slopes. The terrain offers natural features including
              gullies, small cliffs, and open powder fields when fresh snow falls. While there is no terrain park,
              the natural landscape provides plenty of features for creative riders. Snowboard rental is available
              at the base from 250 MAD per day, and several instructors can teach snowboarding basics. For experienced
              riders, the Atlas Mountains around Oukaimeden offer backcountry terrain that is virtually unexplored after
              significant snowfall.
            </p>
            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-4">
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                Rental from 250 MAD/day
              </span>
              <span className="flex items-center gap-1">
                <Compass className="w-3 h-3 text-[var(--color-accent)]" />
                All slopes open to boarders
              </span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-800">
                <strong>Safety Warning:</strong> There is no avalanche control or mountain rescue at Moroccan ski resorts.
                Backcountry skiing and snowboarding should only be attempted with experienced local guides and proper safety
                equipment including beacon, probe, and shovel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Apres-Ski ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Apres-Ski: After the Slopes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Think tagines, mint tea, and Berber hospitality instead of fondue and gluhwein.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apresSkiExperiences.map((experience) => {
              const ExpIcon = experience.icon;
              return (
                <div key={experience.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ExpIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{experience.description}</p>
                  <span className="text-xs text-[var(--color-accent)] font-semibold">{experience.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Combining Skiing with Marrakech ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Combining Skiing with a Marrakech Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Oukaimeden is just 75km from Marrakech, making it one of the most unique day trips in all of Africa.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Sample Itinerary: Marrakech + Oukaimeden Day Trip
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-16 text-right shrink-0">
                  <span className="text-sm font-semibold text-[var(--color-accent)]">07:00</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Depart Marrakech</p>
                  <p className="text-xs text-[var(--text-secondary)]">Head south through the Ourika Valley. The drive takes 1.5-2 hours depending on road conditions. Pick up breakfast pastries for the journey.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 text-right shrink-0">
                  <span className="text-sm font-semibold text-[var(--color-accent)]">09:00</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Arrive at Oukaimeden</p>
                  <p className="text-xs text-[var(--text-secondary)]">Rent equipment at the base area (from 200 MAD) and purchase your lift pass (from 100 MAD). The ski school offers morning lessons for beginners.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 text-right shrink-0">
                  <span className="text-sm font-semibold text-[var(--color-accent)]">09:30</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Hit the Slopes &amp; Lunch</p>
                  <p className="text-xs text-[var(--text-secondary)]">Enjoy 4-5 hours of skiing with breathtaking Atlas views. Take the chairlift to the summit for the best runs. Lunch at legendary Chez Juju with a hearty tagine and mint tea.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 text-right shrink-0">
                  <span className="text-sm font-semibold text-[var(--color-accent)]">14:00</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Afternoon &amp; Return</p>
                  <p className="text-xs text-[var(--text-secondary)]">More runs or explore the ancient Berber rock carvings (2,000+ years old). Head back through the Ourika Valley around 16:00, arriving in Marrakech by 18:00.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 text-right shrink-0">
                  <span className="text-sm font-semibold text-[var(--color-accent)]">19:00</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Evening in the Medina</p>
                  <p className="text-xs text-[var(--text-secondary)]">Dinner at a rooftop restaurant. From skiing at 3,268m to dining in a sun-drenched courtyard. This is what makes Morocco extraordinary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Skiing in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Temperatures at Oukaimeden can drop below -10 degrees Celsius. Come prepared for serious winter conditions at altitude.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packingList.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Skiing in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Phone className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Check Conditions Before Going
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s ski resorts rely entirely on natural snow. Conditions can change rapidly. Check
                social media groups and contact local operators before making the trip. There are no official
                snow reports like European resorts publish. Ask your hotel or tour operator for the latest information.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Bring Cash
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                There are no ATMs at Oukaimeden or Michlifen. Bring enough Moroccan dirhams in cash for
                lift passes, equipment rental, meals, and tips. Card payment is not available at most mountain
                facilities. Withdraw cash in Marrakech or Ifrane before heading to the slopes.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccan ski resorts do not have the same safety infrastructure as European resorts. There are no
                ski patrol teams, limited medical facilities, and no avalanche control. Ski within your ability level.
                Altitude sickness can affect some people above 3,000m. Acclimatise slowly and stay hydrated.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Altitude &amp; Sun Protection
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                At 3,268m, the UV radiation at Oukaimeden is intense, especially reflected off snow. Wear SPF 50+
                sunscreen, quality ski goggles or sunglasses, and lip balm with UV protection. The combination of
                altitude, dry air, and strong Moroccan sun can cause severe sunburn in just an hour.
              </p>
            </div>

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
                Can you really ski in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco has several ski resorts in the Atlas Mountains. Oukaimeden in the High Atlas is
                Africa&apos;s highest ski resort at 3,268m, with 7 lifts and runs for all ability levels. Michlifen
                in the Middle Atlas near Ifrane also offers skiing. The season runs from mid-December to late March.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time to ski in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                January and February offer the most reliable snow conditions with the deepest snow pack and coldest
                temperatures. December and March are hit-or-miss depending on the year. Check conditions before traveling.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a day of skiing cost at Oukaimeden?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Lift passes start from 100 MAD per day, equipment rental from 200 MAD per day, and lunch from 50 MAD.
                A complete day including transport from Marrakech, equipment, lift pass, and food can be done from
                around 700-1,000 MAD total. Seasonal pricing may apply during peak periods.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Oukaimeden suitable for beginners?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Oukaimeden has nursery slopes near the base that are gentle and perfect for first-timers. The
                ski school has instructors who speak French, Arabic, and sometimes English. The beginner area is
                well-separated from the more challenging upper slopes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I combine skiing with a Marrakech trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. Oukaimeden is only 75km from Marrakech, about 1.5-2 hours through the Ourika Valley.
                Ski in the morning and dine in the medina by evening. Tour operators offer day trips from 500 MAD per person.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to the High Atlas, Middle Atlas, and Anti-Atlas ranges with trekking, villages, and adventure.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best day trips from Marrakech including Oukaimeden, Ourika Valley, Essaouira, and Ouzoud Waterfalls.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-adventure-sports" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Adventure Sports Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From skiing and surfing to paragliding and rock climbing. Morocco&apos;s complete adventure sports guide.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Luggage className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                What to pack for Morocco by season and activity, including winter mountain gear and Atlas Mountains essentials.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

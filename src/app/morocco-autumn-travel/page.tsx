import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Sun,
  Cloud,
  Clock,
  Info,
  ArrowRight,
  Thermometer,
  DollarSign,
  CheckCircle,
  Calendar,
  Users,
  Camera,
  Mountain,
  Leaf,
  Wind,
  Compass,
  Sunrise,
  Luggage,
  MessageCircleQuestion,
  Waves,
  TreeDeciduous,
  Grape,
  CircleDot,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-autumn-travel`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Autumn Travel Guide 2026 | September October November Weather & Tips',
  description:
    'Plan your autumn trip to Morocco with this month-by-month guide for September, October, and November 2026. Date harvest in Erfoud, olive harvest season, Atlas Mountain colors, ideal Sahara weather, shoulder season hotel deals, surf season, autumn festivals, photography tips, and packing advice.',
  keywords: [
    'Morocco autumn travel',
    'Morocco September weather',
    'Morocco October travel',
    'Morocco November weather',
    'Morocco fall travel guide',
    'date harvest Erfoud Morocco',
    'olive harvest Morocco',
    'Atlas Mountains autumn',
    'Morocco shoulder season',
    'Sahara desert autumn weather',
    'Morocco autumn festivals',
    'Date Festival Erfoud 2026',
    'Morocco surf season autumn',
    'Morocco autumn photography',
    'Morocco packing list autumn',
    'Morocco fall colors',
    'Morocco autumn deals',
    'best time visit Morocco autumn',
  ],
  openGraph: {
    title: 'Morocco Autumn Travel Guide 2026 | September October November Weather & Tips',
    description:
      'Month-by-month autumn guide to Morocco covering weather, date and olive harvests, Atlas fall colors, ideal desert temperatures, shoulder season savings, festivals, surf season, and what to pack for September through November.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Atlas Mountains in autumn with golden light and terraced valleys in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Autumn Travel Guide 2026 | Sep-Oct-Nov Weather & Tips',
    description:
      'Date harvest, Atlas fall colors, ideal Sahara weather, shoulder season deals, surf season, and month-by-month packing advice for autumn in Morocco.',
    images: [`${BASE_URL}/images/hero-atlas.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the weather like in Morocco during autumn?',
    a: 'September averages 28-35 C in Marrakech and the south, dropping to 22-28 C by November. Coastal cities like Essaouira stay mild at 20-25 C throughout autumn. The Atlas Mountains cool to 10-18 C by late October. Rain is rare in September and early October but increases along the northern coast in November. The Sahara shifts from extreme summer heat to comfortable 25-32 C daytime temperatures, making October and November the best months for desert excursions.',
  },
  {
    q: 'Is autumn a good time to visit the Sahara Desert?',
    a: 'Autumn is one of the two best seasons for the Sahara, alongside spring. Summer temperatures above 45 C make the desert dangerous, but by October daytime highs settle around 28-32 C with cool nights around 15 C. November brings even milder conditions. This makes camel treks, overnight bivouacs, and multi-day desert tours comfortable and safe. Book desert camps early because October and November fill up quickly.',
  },
  {
    q: 'What is the Date Festival in Erfoud?',
    a: 'The Erfoud Date Festival (Moussem des Dattes) takes place annually in October after the date harvest. It is a three-day celebration featuring date tastings, Berber music and dance, camel races, folklore performances, and a parade. The festival draws visitors from across the Draa-Tafilalet region. Erfoud sits near the Sahara and makes a natural stop on a desert circuit from Marrakech or Fes.',
  },
  {
    q: 'Are there shoulder season deals in autumn Morocco?',
    a: 'Yes. September and November are shoulder season months when riad and hotel prices drop 20-40% compared to peak season (October through December holidays, and March through April). October is increasingly popular and no longer deeply discounted, but rates remain lower than Christmas or Easter. Booking directly with riads often secures better shoulder season rates than third-party platforms.',
  },
  {
    q: 'When does surf season start in Morocco?',
    a: 'Morocco surf season begins in September as Atlantic swells pick up after the calm summer months. By October, consistent overhead waves arrive at spots like Taghazout, Imsouane, and Anchor Point. November brings larger swells suitable for intermediate and advanced surfers. Water temperatures range from 20-22 C in September to 18-19 C by November, making a 3/2mm wetsuit sufficient for most of autumn.',
  },
  {
    q: 'What should I pack for an autumn trip to Morocco?',
    a: 'Pack layers. Lightweight breathable clothing for warm September days, a medium-weight jacket for October evenings, and a warmer layer for November nights and Atlas Mountain treks. A scarf is useful for desert sand, mosque visits, and cool evenings. Comfortable walking shoes are essential for medinas. Bring sunscreen and sunglasses year-round. If visiting the coast for surfing, pack a 3/2mm wetsuit or plan to rent locally.',
  },
  {
    q: 'Can I see autumn foliage in Morocco?',
    a: 'The Atlas Mountains display autumn color from mid-October through November. Walnut, poplar, and cherry trees in valleys like Ourika, Ait Bougmez, and Dades turn gold and amber. The contrast with red rock formations and evergreen cedar forests creates striking landscapes. It is not comparable to New England leaf-peeping, but the Atlas autumn palette combined with Berber villages and terraced fields is genuinely photogenic.',
  },
  {
    q: 'Is Ramadan during autumn 2026 in Morocco?',
    a: 'In 2026, Ramadan is expected to fall approximately from late January to late February, so it does not overlap with the autumn travel season. This means restaurants, cafes, and attractions operate on normal schedules throughout September, October, and November. Always confirm exact dates closer to your trip as the Islamic calendar is lunar and dates shift each year.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Autumn Travel Guide 2026',
  description:
    'Comprehensive guide to visiting Morocco in autumn covering September, October, and November weather, harvest seasons, festivals, desert conditions, shoulder season deals, surfing, photography, and packing advice.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-atlas.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Autumn Travel Guide', item: PAGE_URL },
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
   DATA: MONTH-BY-MONTH OVERVIEW
   ================================================================ */

const monthlyOverview = [
  {
    month: 'September',
    icon: Sun,
    tempRange: '22-35 C',
    rainfall: 'Minimal (5-15 mm)',
    crowd: 'Low to Moderate',
    highlights: [
      'Summer heat fading in the north while still warm in the south',
      'Coastal swimming season continues with 22 C water',
      'Date palms heavy with ripening fruit in the Draa Valley',
      'Surf swells begin arriving on the Atlantic coast',
      'Lowest hotel prices of the autumn season',
    ],
    bestFor: 'Beach holidays, early surf season, budget travelers seeking low-season rates.',
  },
  {
    month: 'October',
    icon: Leaf,
    tempRange: '18-30 C',
    rainfall: 'Low (15-30 mm)',
    crowd: 'Moderate',
    highlights: [
      'Erfoud Date Festival with music, camel races, and date tastings',
      'Ideal Sahara temperatures for camel treks and desert camping',
      'Olive harvest underway across the Rif and Middle Atlas',
      'Atlas Mountain foliage begins turning gold',
      'Photography golden hour extends as days shorten',
    ],
    bestFor: 'Desert excursions, cultural festivals, harvest tourism, photography trips.',
  },
  {
    month: 'November',
    icon: Cloud,
    tempRange: '14-25 C',
    rainfall: 'Moderate (30-50 mm north)',
    crowd: 'Low',
    highlights: [
      'Peak autumn color in the Atlas valleys',
      'Consistent Atlantic surf swells at Taghazout and Imsouane',
      'Olive pressing season at traditional stone mills',
      'Cool desert nights under clear Saharan skies',
      'Shoulder season prices return after October bookings',
    ],
    bestFor: 'Atlas trekking, surf trips, olive oil tourism, stargazing in the desert.',
  },
];

/* ================================================================
   DATA: AUTUMN HARVEST EXPERIENCES
   ================================================================ */

const harvestExperiences = [
  {
    title: 'Date Harvest — Draa-Tafilalet',
    icon: TreeDeciduous,
    season: 'September to October',
    region: 'Erfoud, Zagora, Draa Valley',
    image: '/images/photo-moroccan-dates.webp',
    description:
      'Morocco produces over 100,000 tonnes of dates annually, with the Mejhoul variety prized worldwide. The harvest peaks in October when workers climb tall palms to cut heavy clusters by hand. Visit palm groves near Erfoud and Zagora to witness the process, taste fresh dates straight from the tree, and buy directly from farmers at prices starting from 30 MAD per kilogram.',
    tip: 'Time your visit for the Erfoud Date Festival in mid-October to combine harvest tourism with live music and camel racing.',
  },
  {
    title: 'Olive Harvest — Rif & Middle Atlas',
    icon: Grape,
    season: 'October to December',
    region: 'Meknes, Chefchaouen, Beni Mellal',
    image: '/images/photo-moroccan-olives.webp',
    description:
      'Morocco is Africa\'s largest olive producer. Autumn brings the olive harvest across the northern hills and Middle Atlas foothills. Families gather under ancient trees, spreading nets and beating branches with long sticks. Traditional stone mills (maasra) press the olives into fresh green oil with a peppery, grassy flavor. Some rural guesthouses invite visitors to participate in the harvest.',
    tip: 'Visit a traditional maasra near Meknes or Beni Mellal to watch cold-pressing and taste new-season oil. A liter of fresh olive oil starts from 50 MAD.',
  },
  {
    title: 'Argan Harvest — Souss Valley',
    icon: CircleDot,
    season: 'August to October',
    region: 'Essaouira, Agadir, Taroudant',
    description:
      'The argan harvest overlaps with early autumn. Women\'s cooperatives crack argan nuts by hand and cold-press them into cosmetic and culinary oils. Visiting a cooperative near Essaouira or in the Souss Valley takes about an hour and includes demonstrations, tastings, and the chance to buy authentic argan oil starting from 80 MAD for cosmetic grade.',
    tip: 'Buy from certified cooperatives to ensure fair-trade sourcing and authentic product quality.',
  },
];

/* ================================================================
   DATA: AUTUMN ACTIVITIES
   ================================================================ */

const autumnActivities = [
  {
    title: 'Sahara Desert Camps',
    icon: Sunrise,
    description: 'October and November offer the best desert weather of the year. Daytime temperatures drop from summer extremes to a comfortable 28-32 C, and nights cool to 12-18 C under clear skies. Book a luxury bivouac in Merzouga or Zagora for sunset camel rides, traditional Berber dinners, and dawn photography over the dunes.',
    price: 'From 800 MAD per night (shared camp)',
    location: 'Merzouga, Zagora, M\'Hamid',
  },
  {
    title: 'Atlas Mountain Trekking',
    icon: Mountain,
    description: 'Autumn is the second-best trekking season after spring. September stays warm at altitude, October brings golden foliage in the valleys, and November offers crisp air with occasional early snow on the highest peaks. The Toubkal Circuit, Ait Bougmez Valley, and Mgoun Traverse are all in excellent condition.',
    price: 'From 500 MAD per day (guided trek)',
    location: 'High Atlas, Toubkal, Ait Bougmez',
  },
  {
    title: 'Atlantic Coast Surfing',
    icon: Waves,
    description: 'September marks the start of Morocco\'s legendary surf season. Consistent swells build through October and November, with waves ranging from mellow longboard breaks at Imsouane to powerful point breaks at Anchor Point and Killer Point near Taghazout. Water temperatures start at 21 C in September and cool to 18 C by late November.',
    price: 'From 300 MAD per surf lesson',
    location: 'Taghazout, Imsouane, Sidi Kaouki',
  },
  {
    title: 'Autumn Photography Tours',
    icon: Camera,
    description: 'Shorter days mean extended golden hour light that photographers prize. The combination of harvest activity, autumn foliage against red rock, desert dawn colors, and reduced haze creates strong conditions across every region. The medinas of Fes and Marrakech are less crowded, allowing cleaner street photography compositions.',
    price: 'From 1,200 MAD per day (guided photo tour)',
    location: 'Atlas valleys, Sahara, Imperial Cities',
  },
  {
    title: 'Cultural Festivals',
    icon: Calendar,
    description: 'Autumn hosts several regional festivals. The Erfoud Date Festival in October is the biggest, featuring date tastings, folklore, and camel races. The Imilchil Marriage Festival (depending on the year) celebrates Berber wedding traditions in the High Atlas. Smaller olive and saffron festivals run in various towns from October through November.',
    price: 'Free entry to most festivals',
    location: 'Erfoud, Imilchil, Taliouine',
  },
  {
    title: 'Desert Stargazing',
    icon: Star,
    description: 'Autumn nights in the Sahara deliver some of the clearest skies in the Northern Hemisphere. The Milky Way is visible to the naked eye from locations like Merzouga and M\'Hamid where light pollution is nearly zero. October and November offer long, cool nights ideal for extended observation. Some desert camps provide telescopes and guided astronomy sessions.',
    price: 'From 200 MAD for stargazing add-on',
    location: 'Merzouga, M\'Hamid, Zagora',
  },
];

/* ================================================================
   DATA: PACKING LIST
   ================================================================ */

const packingList = [
  { category: 'Clothing — Warm Days', items: ['Lightweight breathable shirts and tops', 'Linen or cotton trousers', 'Light sundress or shorts (for coastal areas)', 'Comfortable walking sandals'], icon: Sun },
  { category: 'Clothing — Cool Evenings', items: ['Medium-weight fleece or sweater', 'Light waterproof jacket (especially November)', 'Long trousers for evening dining', 'Closed-toe walking shoes for medinas'], icon: Wind },
  { category: 'Atlas & Desert Layers', items: ['Warm insulating layer for mountain mornings', 'Windproof shell for desert camps', 'Wool or thermal base layer for November treks', 'Sturdy hiking boots for Atlas trails'], icon: Mountain },
  { category: 'Accessories', items: ['Scarf or shawl (sand protection, mosque visits, warmth)', 'Sunglasses and SPF 30+ sunscreen', 'Reusable water bottle', 'Headlamp or small flashlight for desert camps'], icon: Compass },
];

/* ================================================================
   DATA: SHOULDER SEASON SAVINGS
   ================================================================ */

const savingsTips = [
  { title: 'Riad & Hotel Rates', detail: 'September and November rates drop 20-40% below peak season (Christmas, Easter). A riad that charges from 1,200 MAD per night in December may drop to from 700 MAD in September. October is increasingly popular but still cheaper than peak months.', icon: DollarSign },
  { title: 'Domestic Flights', detail: 'Royal Air Maroc and Air Arabia Morocco offer lower fares on internal routes in September and November. A Casablanca-to-Ouarzazate flight that costs from 900 MAD in peak season can drop to from 500 MAD. Book 3-4 weeks ahead for the best rates.', icon: Compass },
  { title: 'Guided Tours & Day Trips', detail: 'Tour operators reduce group tour prices in shoulder months to fill seats. A Sahara desert tour from Marrakech that runs from 2,500 MAD in peak season often drops to from 1,800 MAD in September or November. Private tours are more negotiable too.', icon: Users },
  { title: 'Fewer Crowds', detail: 'Shorter queues at major sites like Bahia Palace, Ben Youssef Madrasa, and Jardin Majorelle. Medina souks are less congested, making shopping and photography more enjoyable. Restaurants have open tables without reservations.', icon: CheckCircle },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoAutumnTravelPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-atlas.webp"
          alt="Atlas Mountains bathed in warm autumn light with golden valleys and terraced hillsides in Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white max-w-4xl leading-tight mb-4">
            Morocco Autumn Travel Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
            September through November: harvest festivals, ideal desert weather, Atlas fall colors, surf swells, and shoulder season savings
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Autumn Travel Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Autumn Is One of the Best Seasons for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Between the intense summer heat and the winter rains, autumn delivers three months of near-perfect travel conditions across every region.
          </p>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-4">
            <p>
              Morocco in autumn rewards travelers with a rare combination: warm days without the punishing summer heat, harvest seasons that bring rural communities to life, and a Sahara Desert that becomes accessible again after months of dangerous temperatures. From the date palms of Erfoud to the olive groves of the Rif, from the first Atlantic swells rolling into Taghazout to the golden light falling across Atlas valleys, September through November covers more ground than any other quarter.
            </p>
            <p>
              Shoulder season pricing in September and November means riads and guided tours cost 20-40% less than peak months, while October sits in a sweet spot of perfect weather and growing (but still manageable) visitor numbers. The Erfoud Date Festival, the olive harvest, and the start of Morocco&apos;s world-class surf season give autumn travelers experiences that simply do not exist at other times of year.
            </p>
            <p>
              This guide breaks down each autumn month with specific weather data, regional highlights, practical packing advice, and the harvest experiences and festivals that define the season.
            </p>
          </div>
        </div>
      </section>

      {/* ── Month-by-Month Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Month-by-Month Autumn Weather
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Temperatures, rainfall, crowd levels, and top highlights for each month of the Moroccan autumn.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {monthlyOverview.map((m) => {
              const MonthIcon = m.icon;
              return (
                <div key={m.month} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-5 flex items-center gap-3">
                    <MonthIcon className="w-7 h-7 text-white" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">{m.month}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <Thermometer className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <p className="text-xs text-[var(--text-muted)]">Temp</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{m.tempRange}</p>
                      </div>
                      <div>
                        <Cloud className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <p className="text-xs text-[var(--text-muted)]">Rain</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{m.rainfall}</p>
                      </div>
                      <div>
                        <Users className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <p className="text-xs text-[var(--text-muted)]">Crowds</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{m.crowd}</p>
                      </div>
                    </div>
                    <div className="border-t border-[var(--border)] pt-4">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Highlights</h4>
                      <ul className="space-y-2">
                        {m.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-[var(--border)] pt-4">
                      <p className="text-xs text-[var(--text-muted)]">
                        <Star className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                        <span className="font-medium">Best for:</span> {m.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regional Temperature Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Autumn Temperatures by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            Average daytime high temperatures across six key regions help you plan layering and timing.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-10">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures are approximate averages in Celsius. Actual conditions vary by elevation and proximity to coast.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Region</div>
              <div className="p-3 px-4 text-center">Sep</div>
              <div className="p-3 px-4 text-center">Oct</div>
              <div className="p-3 px-4 text-center">Nov</div>
            </div>
            {[
              { region: 'Marrakech & Interior', sep: '33', oct: '28', nov: '22' },
              { region: 'Fes & Meknes', sep: '32', oct: '26', nov: '19' },
              { region: 'Atlantic Coast (Essaouira)', sep: '25', oct: '23', nov: '20' },
              { region: 'Sahara Desert (Merzouga)', sep: '38', oct: '30', nov: '24' },
              { region: 'High Atlas (2,000m+)', sep: '22', oct: '16', nov: '10' },
              { region: 'Northern Coast (Tangier)', sep: '28', oct: '23', nov: '18' },
            ].map((row, i) => (
              <div key={row.region} className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}>
                <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                  {row.region}
                </div>
                <div className="p-3 px-4 text-center text-[var(--text-secondary)]">{row.sep} C</div>
                <div className="p-3 px-4 text-center text-[var(--text-secondary)]">{row.oct} C</div>
                <div className="p-3 px-4 text-center text-[var(--text-secondary)]">{row.nov} C</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Harvest Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreeDeciduous className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Autumn Harvest Seasons
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s agricultural calendar peaks in autumn. Three harvests define the season and offer hands-on experiences for visitors.
          </p>

          <div className="space-y-8">
            {harvestExperiences.map((harvest) => {
              const HarvestIcon = harvest.icon;
              return (
                <div key={harvest.title} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {harvest.image && (
                      <div className="relative h-64 md:h-auto">
                        <img
                          src={harvest.image}
                          alt={`${harvest.title} in Morocco during autumn season`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className={`p-6 ${harvest.image ? 'md:col-span-2' : 'md:col-span-3'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                          <HarvestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{harvest.title}</h3>
                          <p className="text-xs text-[var(--text-muted)]">
                            <Clock className="w-3 h-3 inline mr-1" />{harvest.season} &middot; <MapPin className="w-3 h-3 inline mr-1" />{harvest.region}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{harvest.description}</p>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <p className="text-xs text-[var(--text-primary)] font-medium">
                          <Info className="w-3.5 h-3.5 inline mr-1 text-[var(--color-gold)]" />
                          {harvest.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Autumn Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Autumn Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six experiences that are at their best during the September-November window.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {autumnActivities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.title} className="card-moroccan p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-4">
                    <ActivityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{activity.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{activity.description}</p>
                  <div className="flex items-center justify-between text-xs border-t border-[var(--border)] pt-3">
                    <span className="text-[var(--color-accent)] font-semibold">{activity.price}</span>
                    <span className="text-[var(--text-muted)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {activity.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirhams. Seasonal pricing can change based on demand and provider.
          </p>
        </div>
      </section>

      {/* ── Erfoud Date Festival Spotlight ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Erfoud Date Festival (Moussem des Dattes)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Morocco&apos;s biggest autumn festival celebrates the date harvest with three days of music, racing, and feasting.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Festival Highlights</h3>
                <ul className="space-y-3">
                  {[
                    'Date variety tastings featuring Mejhoul, Bouffegous, and Jihel cultivars',
                    'Traditional Berber Ahidous music and Gnawa performances',
                    'Camel races across the desert flatlands outside Erfoud',
                    'Folklore parade with regional costumes from the Draa-Tafilalet',
                    'Artisan market with local pottery, fossils, and woven goods',
                    'Date cooking demonstrations and recipe competitions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Practical Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">When</p>
                      <p className="text-xs text-[var(--text-secondary)]">Mid-October annually (exact dates announced 4-6 weeks before). Typically runs Thursday through Saturday.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">Where</p>
                      <p className="text-xs text-[var(--text-secondary)]">Erfoud, Draa-Tafilalet region. About 10 hours by road from Marrakech or 7 hours from Fes. Combine with a Merzouga desert trip.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">Cost</p>
                      <p className="text-xs text-[var(--text-secondary)]">Festival entry is free. Accommodation in Erfoud starts from 300 MAD per night but book early as the town fills up. Desert camp add-ons from 800 MAD.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">Tip</p>
                      <p className="text-xs text-[var(--text-secondary)]">Build the festival into a wider Sahara circuit: Marrakech &rarr; Ouarzazate &rarr; Erfoud &rarr; Merzouga &rarr; Todra Gorge &rarr; return.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Golden Light ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Autumn Photography in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Why photographers consider October and November the best months for shooting Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Extended Golden Hour', text: 'As days shorten, the low-angle golden light lasts longer during sunrise and sunset. In October, Marrakech gets roughly 40 minutes of golden hour compared to 25 minutes in July. This soft, warm light transforms medina walls, mountain ridges, and desert dunes.', icon: Sunrise },
              { title: 'Reduced Haze', text: 'Summer heat haze clears by October, giving sharper visibility across desert panoramas and mountain ranges. The Atlas peaks become crisply defined against blue skies, and Sahara dune ridgelines gain contrast that summer conditions obscure.', icon: Sun },
              { title: 'Autumn Color Palette', text: 'The Atlas valleys add gold, amber, and rust to Morocco\'s usual palette of terracotta, blue, and green. Walnut and poplar trees in Ourika and Ait Bougmez create foreground interest against red rock walls. The date palms in the south stay green, providing contrast.', icon: Leaf },
              { title: 'Fewer Tourists in Frame', text: 'September and November mean thinner crowds at popular spots. The tanneries of Fes, the Jemaa el-Fna, and Chefchaouen\'s blue alleys are easier to photograph without waiting for gaps in foot traffic. Early mornings are nearly empty.', icon: Users },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Shoulder Season Savings ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shoulder Season Savings
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            September and November deliver strong value. Here is where autumn travelers save the most.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {savingsTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <TipIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Seasonal pricing can change. Prices listed are indicative starting points. Book directly with accommodations for the best shoulder season rates.
          </p>
        </div>
      </section>

      {/* ── Atlas Autumn Colors ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Autumn Colors in the Atlas Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            The Atlas valleys transform from mid-October through November as deciduous trees turn gold against red rock.
          </p>

          <div className="space-y-6">
            {[
              {
                valley: 'Ourika Valley',
                distance: '45 min from Marrakech',
                foliage: 'Walnut and cherry trees along the river turn amber and gold by late October.',
                trek: 'Easy day trip. Follow the valley road to Setti Fatma waterfalls. No guide required for the main trail.',
                icon: MapPin,
              },
              {
                valley: 'Ait Bougmez (Happy Valley)',
                distance: '4 hours from Marrakech',
                foliage: 'Poplar-lined fields surrounded by 3,000m+ peaks. The most photogenic autumn valley in the Atlas.',
                trek: 'Multi-day trekking base. The Mgoun Traverse starts here. Guesthouses from 250 MAD per night with meals.',
                icon: Mountain,
              },
              {
                valley: 'Dades Valley & Gorge',
                distance: '5 hours from Marrakech',
                foliage: 'Fig and almond trees color the gorge floor while red rock towers above. Peak color in early November.',
                trek: 'Drive the famous switchback road. Hike into the gorge for half-day explorations from riverside kasbahs.',
                icon: Compass,
              },
              {
                valley: 'Imlil & Toubkal Region',
                distance: '2 hours from Marrakech',
                foliage: 'Walnut groves around Berber villages turn golden. First snow may dust Toubkal summit by late November.',
                trek: 'Toubkal summit trek (2 days) or village walks. Licensed guide required above the tree line.',
                icon: Star,
              },
            ].map((v) => {
              const VIcon = v.icon;
              return (
                <div key={v.valley} className="card-moroccan p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <VIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{v.valley}</h3>
                        <span className="text-xs text-[var(--text-muted)]">{v.distance}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-2"><span className="font-medium text-[var(--text-primary)]">Foliage:</span> {v.foliage}</p>
                      <p className="text-sm text-[var(--text-secondary)]"><span className="font-medium text-[var(--text-primary)]">Access:</span> {v.trek}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Surf Season ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Autumn Surf Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Atlantic swells return in September and build through November, launching one of the world&apos;s best surf seasons.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="relative h-56 rounded-xl overflow-hidden mb-6">
              <img
                src="/images/hero-surf-taghazout.webp"
                alt="Surfer riding a wave at Taghazout on Morocco Atlantic coast during autumn swell season"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Taghazout — Morocco&apos;s surf capital</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">September</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  First consistent swells arrive. Waves are smaller and suited to beginners and intermediates. Water temperature around 21 C. Beach breaks at Tamraght and Sidi Kaouki are mellow and uncrowded.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">October</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Swell size increases with overhead sets at point breaks. Anchor Point and Killer Point near Taghazout start working. Surf camps open for the season. Water temperature drops to 20 C. Wetsuit recommended (3/2mm).
                </p>
              </div>
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">November</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Powerful swells arrive regularly. Advanced surfers target the big days at Boilers and La Source. Imsouane&apos;s famous long right-hander starts delivering rides over 300 meters. Water temperature around 18-19 C.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-[var(--surface-muted)] rounded-lg p-4">
              <p className="text-xs text-[var(--text-primary)]">
                <Info className="w-3.5 h-3.5 inline mr-1 text-[var(--color-gold)]" />
                <span className="font-medium">Surf camp pricing:</span> Week-long packages including accommodation, breakfast, and daily surf guiding start from 3,500 MAD in Taghazout. Individual surf lessons from 300 MAD. Board rental from 150 MAD per day. Seasonal pricing can change during peak November demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Autumn in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Layering is the key strategy. Days can start cool, peak warm, and drop cold after sunset, especially in October and November.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packingList.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.category} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{cat.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
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

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Autumn Scenes Across Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-atlas-mountain-village.webp"
                alt="Berber village nestled in the Atlas Mountains with autumn colored trees and terraced fields"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlas Mountain Village in Autumn</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-desert.webp"
                alt="Sahara Desert dunes under clear autumn sky with warm golden light at sunset"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara at Autumn Golden Hour</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-surfing-taghazout-wave.webp"
                alt="Atlantic coast wave breaking at Taghazout Morocco during the autumn surf season"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Autumn Surf at Taghazout</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to common questions about visiting Morocco in autumn.
          </p>

          <div className="space-y-6">
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Best Time to Visit Morocco',
                description: 'Year-round weather breakdown, regional climate data, and month-by-month travel recommendations.',
                href: '/best-time-visit-morocco',
                icon: Calendar,
              },
              {
                title: 'Morocco Desert Tours',
                description: 'Sahara itineraries, camp reviews, camel trek logistics, and desert driving routes from every gateway city.',
                href: '/morocco-desert-tours',
                icon: Sunrise,
              },
              {
                title: 'Morocco Surf Guide',
                description: 'Surf spots from Taghazout to Dakhla, swell seasons, camp reviews, and beginner-to-advanced wave guides.',
                href: '/morocco-surf-guide',
                icon: Waves,
              },
              {
                title: 'Morocco Packing List',
                description: 'Season-by-season packing guide with specific lists for the medina, desert, mountains, and coast.',
                href: '/morocco-packing-list',
                icon: Luggage,
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

      {/* ── More Seasonal & Activity Guides ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Seasonal &amp; Activity Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-budget-guide', title: 'Budget Travel Guide', desc: 'How to see Morocco on a tight budget with tips on cheap riads, street food, and free attractions.' },
              { href: '/atlas-mountains', title: 'Atlas Mountains Guide', desc: 'Trekking routes, Berber villages, and mountain lodge accommodation across the High Atlas.' },
              { href: '/morocco-desert-camping', title: 'Desert Camping Guide', desc: 'Luxury bivouacs, wild camping, star maps, and what to bring for a night under Saharan skies.' },
              { href: '/morocco-backpacking-guide', title: 'Backpacking Morocco', desc: 'Hostel routes, budget transport, backpacker itineraries, and safety tips for solo travelers.' },
              { href: '/best-time', title: 'Weather & Seasons Overview', desc: 'Climate charts, regional breakdowns, and the best month for every type of Moroccan experience.' },
              { href: '/morocco-packing-list', title: 'Complete Packing List', desc: 'What to pack for every season, region, and activity in Morocco with specific gear recommendations.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Plan Your Autumn Morocco Trip
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            From date harvests and desert camps to Atlas trekking and Atlantic surf, autumn delivers Morocco at its most rewarding. Start planning your September, October, or November trip today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Compare All Seasons <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

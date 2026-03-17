import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Landmark,
  Star,
  Clock,
  MapPin,
  Camera,
  ArrowRight,
  Compass,
  Sun,
  BookOpen,
  CircleDollarSign,
  CalendarDays,
  Mountain,
  Map,
  Bus,
  Info,
  Lightbulb,
  Droplets,
  Leaf,
  Footprints,
  ThermometerSun,
  Navigation,
  Shield,
  Heart,
  Eye,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Paradise Valley Guide 2025 | Natural Swimming Pools Near Agadir, Morocco',
  description:
    'Complete guide to Paradise Valley, Morocco. Discover natural swimming pools, rock jumping, palm-lined oasis trails, and how to visit from Agadir or Taghazout. Best time to visit, entry info, and practical tips.',
  keywords: [
    'Paradise Valley Morocco',
    'Paradise Valley Agadir',
    'natural swimming pools Morocco',
    'Paradise Valley day trip',
    'Taghazout excursion',
    'rock jumping Morocco',
    'palm oasis Morocco',
    'Agadir day trips',
    'Tamraght valley',
    'Morocco waterfalls',
    'Paradise Valley hiking',
    'Morocco natural pools',
    'Imouzzer Ida Outanane',
    'Agadir nature trips',
    'Morocco adventure travel',
  ],
  openGraph: {
    title: 'Paradise Valley Guide - Natural Swimming Pools Near Agadir',
    description:
      'Everything you need to know about visiting Paradise Valley: natural turquoise pools, rock jumping, palm-lined gorge hikes, and practical travel tips for this hidden oasis near Agadir.',
    url: 'https://citytoursmorocco.com/paradise-valley',
    type: 'website',
    images: [
      {
        url: '/images/hero-paradise-valley.webp',
        width: 1200,
        height: 630,
        alt: 'Crystal-clear turquoise natural swimming pool surrounded by palm trees and red rocks in Paradise Valley, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paradise Valley Guide 2025 | Natural Pools Near Agadir',
    description:
      'Complete guide to Paradise Valley: natural swimming pools, rock jumping, palm-lined gorge trails, and how to get there from Agadir or Taghazout.',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/paradise-valley',
  },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': 'https://citytoursmorocco.com/paradise-valley',
  name: 'Paradise Valley Guide - Natural Swimming Pools Near Agadir, Morocco',
  description:
    'Comprehensive travel guide to Paradise Valley near Agadir, Morocco covering natural swimming pools, hiking trails, rock jumping, palm oasis, practical information, and day trip logistics.',
  url: 'https://citytoursmorocco.com/paradise-valley',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'TouristAttraction',
    name: 'Paradise Valley',
    description: 'A stunning palm-lined gorge with natural turquoise swimming pools near Agadir, Morocco.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Souss-Massa',
      addressCountry: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://citytoursmorocco.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Day Trips',
        item: 'https://citytoursmorocco.com/day-trips',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Paradise Valley',
        item: 'https://citytoursmorocco.com/paradise-valley',
      },
    ],
  },
};

/* ================================================================
   HIGHLIGHTS DATA
   ================================================================ */

const highlights = [
  {
    title: 'Natural Swimming Pools',
    icon: Droplets,
    description:
      'Paradise Valley is famous for its series of natural rock pools filled with crystal-clear, turquoise water. Fed by the Tamraght River as it winds through the narrow gorge, these pools range from shallow wading spots perfect for children to deep plunge pools surrounded by smooth boulders. The water temperature is refreshingly cool even in the height of summer, providing a welcome escape from the coastal heat of Agadir. Each pool has its own character, and part of the fun is scrambling along the riverbed to discover your favorite.',
  },
  {
    title: 'Rock Jumping',
    icon: Mountain,
    description:
      'For the adventurous, several of the deeper pools in Paradise Valley offer natural rock jumping platforms at various heights. Local guides know exactly which pools are deep enough for safe jumping and can show you the best spots, ranging from gentle 2-meter drops suitable for beginners to more thrilling 8-10 meter ledges for experienced jumpers. Always check the depth before jumping, as water levels change seasonally. The best rock jumping pools are found in the middle section of the gorge, roughly 20 minutes walk from the main entrance.',
  },
  {
    title: 'Palm-Lined Gorge Trail',
    icon: Leaf,
    description:
      'The walk through Paradise Valley follows a winding path along the riverbed through a dramatic gorge lined with towering date palms, oleanders, wild figs, and carob trees. The contrast between the arid, rocky hillsides above and the lush green oasis below is striking and quintessentially Moroccan. The trail is roughly 2 km in total, passing through the shade of palm groves, over smooth river boulders, and alongside cascading mini-waterfalls. It is an easy to moderate walk, though some sections require boulder-hopping and basic scrambling.',
  },
  {
    title: 'Birdwatching and Wildlife',
    icon: Eye,
    description:
      'The oasis environment of Paradise Valley supports a surprising diversity of birdlife. Keep your eyes open for Barbary partridge, blue rock thrush, Bonelli eagles soaring above the gorge walls, and the brilliant flash of bee-eaters darting between the palms. The pools are home to small freshwater fish and, in the damper sections of the gorge, you may spot frogs and the occasional Moorish gecko sunning on the warm rocks. The best wildlife viewing is in the early morning before the day-trippers arrive.',
  },
  {
    title: 'Local Berber Hospitality',
    icon: Heart,
    description:
      'Small Berber families live along the valley and have set up simple cafe shelters along the trail, offering fresh mint tea, Moroccan crepes (msemen), and tagine lunches cooked over charcoal. These shaded rest stops are wonderful places to refuel and interact with locals who have lived in the valley for generations. The tagine cooked with valley-sourced vegetables and served with fresh bread is simple but delicious, and prices are very reasonable (from 40 MAD for a full meal). Tipping the local guides and patronizing these family cafes directly supports the valley community.',
  },
];

/* ================================================================
   PRACTICAL INFO DATA
   ================================================================ */

const practicalInfo = [
  {
    label: 'Entry Fee',
    value: 'Free (tip local guides ~50 MAD)',
    icon: CircleDollarSign,
  },
  {
    label: 'Best Time',
    value: 'April - October',
    icon: CalendarDays,
  },
  {
    label: 'Time Needed',
    value: '3-5 hours (half day)',
    icon: Clock,
  },
  {
    label: 'Distance from Agadir',
    value: '~25 km (40 min drive)',
    icon: Navigation,
  },
];

/* ================================================================
   GETTING THERE DATA
   ================================================================ */

const gettingThere = [
  {
    from: 'Agadir',
    method: 'Private Taxi / Rental Car',
    duration: '40 minutes',
    price: 'from 200 MAD round trip (taxi)',
    description:
      'The most convenient option. Drive north on the N1 toward Taghazout, then turn inland at the signed turnoff near Aourir. The road follows the Tamraght River valley through small Berber villages and increasingly dramatic scenery. The final section is a narrow but paved mountain road with hairpin bends. Agree on a round-trip price with your taxi driver before departing, including 2-3 hours of waiting time.',
    tip: 'If renting a car, the road is suitable for standard vehicles. Park at the designated parking area near the valley entrance (10 MAD parking fee). Avoid the unofficial "guides" at the parking lot who may overcharge; the trail is easy to follow independently.',
  },
  {
    from: 'Taghazout',
    method: 'Private Taxi / Shared Transfer',
    duration: '25 minutes',
    price: 'from 150 MAD round trip (taxi)',
    description:
      'Taghazout is the closest tourist hub to Paradise Valley, and most surf hostels and guesthouses can arrange transfers. The drive follows the same inland route from Aourir. Many Taghazout-based tour operators offer group day trips that include Paradise Valley combined with an argan oil cooperative visit and lunch, typically for just 250 MAD per person all-inclusive.',
    tip: 'Ask at your surf hostel about shared transport. Groups of 4-6 can split a private taxi for as little as from 30 MAD per person. The morning departure (9:00-10:00 AM) avoids the midday heat and afternoon crowds.',
  },
  {
    from: 'Organized Tours',
    method: 'Day Trip from Agadir',
    duration: 'Full day (8-10 hours)',
    price: 'from 300 MAD per person',
    description:
      'Numerous tour operators in Agadir offer full-day excursions that combine Paradise Valley with other attractions: typically an argan oil cooperative, the village of Imouzzer Ida Outanane (famous for its honey festival), and lunch at a Berber restaurant. These tours handle all transport and logistics and usually include a guide who explains the local flora and Berber culture. Pickup and drop-off at your hotel is standard.',
    tip: 'Book through your hotel or a reputable operator rather than street touts. Groups are typically 6-15 people. For a more personal experience, hire a private guide for the day (from 500 MAD for the vehicle plus guide).',
  },
];

/* ================================================================
   TIPS DATA
   ================================================================ */

const tips = [
  'Bring water shoes or sandals with grip. The riverbed rocks are smooth and slippery when wet. Flip-flops are not recommended.',
  'Pack a towel and swimwear. There are no changing facilities, so wear your swimsuit under your clothes or change behind boulders.',
  'Bring sun protection. While the gorge provides shade, exposed sections can be intensely hot between 11:00 AM and 3:00 PM.',
  'Carry cash in small denominations for the local cafes, guides, and parking. There are no ATMs in the valley.',
  'Start early (before 10:00 AM) to have the pools to yourself. The valley gets crowded on weekends and in July-August.',
  'Do not leave valuables unattended while swimming. Theft is rare but keep essentials in a waterproof bag.',
  'Water levels vary dramatically by season. After winter rains, some pools may be too deep and fast-flowing for safe swimming. In late summer, some pools may be very shallow.',
  'Respect the environment. Carry out all trash and avoid using soap or shampoo in the natural pools.',
  'The trail is not suitable for wheelchairs or strollers. Moderate fitness is required for the boulder-hopping sections.',
  'Photography is excellent throughout the day, but the best light on the pools is between 10:00 AM and 2:00 PM when sunlight penetrates the gorge.',
];

/* ================================================================
   RELATED PAGES
   ================================================================ */

const relatedPages = [
  {
    title: 'Agadir City Guide',
    description: 'Beach resort gateway to Paradise Valley, the Souss plain, and southern Morocco.',
    href: '/agadir',
  },
  {
    title: 'Morocco Beaches',
    description: 'The best Atlantic and Mediterranean beaches across the country.',
    href: '/beaches',
  },
  {
    title: 'Trekking in Morocco',
    description: 'Hiking trails from the Rif to the Anti-Atlas and everywhere between.',
    href: '/trekking',
  },
  {
    title: 'Day Trips from Major Cities',
    description: 'The best day excursions from Agadir, Marrakech, Fes, and more.',
    href: '/day-trips',
  },
];

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function ParadiseValleyGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          SECTION 1: HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-paradise-valley.webp"
            alt="Crystal-clear turquoise natural swimming pool nestled between red canyon walls and lush palm trees in Paradise Valley, Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/day-trips"
              className="hover:text-white transition-colors"
            >
              Day Trips
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Paradise Valley</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Natural Swimming Pools &amp; Oasis Trails
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Paradise Valley: Morocco&apos;s Hidden Oasis
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A breathtaking palm-lined gorge carved into the foothills of the
              western High Atlas, where crystal-clear turquoise pools invite you
              to swim, jump, and linger in one of Morocco&apos;s most beautiful
              natural settings &mdash; just 40 minutes from Agadir.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          SECTION 2: INTRODUCTION
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              A Secret Gorge in the Western Atlas
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Once known only to local Berber villagers and adventurous surfers from
              nearby Taghazout, Paradise Valley has become one of southern Morocco&apos;s
              most rewarding half-day excursions.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Paradise Valley (known locally as Vallee du Paradis) is a spectacular
              river gorge carved by the Tamraght River through the arid foothills of
              the western High Atlas Mountains, roughly 25 km inland from Agadir. The
              valley sits within the commune of Imouzzer Ida Outanane, a region famous
              for its honey production, argan forests, and dramatic mountain scenery.
              What makes Paradise Valley extraordinary is the contrast: surrounded by
              dry, stony hillsides typical of southern Morocco, the valley floor is a
              lush ribbon of green &mdash; towering date palms, wild fig trees, oleander
              bushes, and carob trees shade a series of natural pools where the river
              has carved basins into the smooth bedrock.
            </p>
            <p>
              The pools themselves are the main attraction. Ranging from shallow,
              sun-warmed paddling spots to deep plunge pools of startling turquoise
              clarity, they offer natural swimming experiences that rival any
              manufactured infinity pool. The water is clean, cold, and refreshingly
              clear, fed by mountain springs and winter rainfall. Between the pools,
              the river tumbles over small cascades and slides across polished rock
              slabs, creating natural water slides that thrill visitors of all ages.
              Several of the deeper pools have natural rock platforms at various heights,
              making Paradise Valley a popular destination for cliff jumping enthusiasts.
            </p>
            <p>
              The valley was &ldquo;discovered&rdquo; by the international surf and
              backpacker community in the early 2000s, when surfers based in Taghazout
              and Tamraght began exploring the surrounding countryside on flat days. Word
              spread through travel blogs and social media, and today Paradise Valley
              receives a steady stream of visitors, particularly between April and October.
              Despite its growing popularity, the valley retains a genuine sense of
              tranquility, especially in the early morning before the day-trip crowds
              arrive. Local Berber families still farm the terraced plots along the
              valley floor, and their hospitality &mdash; mint tea served in the shade
              of a palm tree &mdash; remains one of the experience&apos;s highlights.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-light)]">
              {[
                { label: 'Elevation', value: '~350 m' },
                { label: 'Trail Length', value: '~2 km' },
                { label: 'Water Temp', value: '16-22 C' },
                { label: 'Season', value: 'Apr-Oct' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-[var(--surface-muted)]"
                >
                  <p className="text-2xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-display)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: PRACTICAL INFO CARDS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Info className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essential Information
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to plan your visit to Paradise Valley.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {practicalInfo.map((item) => (
              <div
                key={item.label}
                className="card-moroccan p-6 text-center"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-[var(--color-primary)]" />
                <p className="text-sm text-[var(--text-secondary)] mb-1">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: HIGHLIGHTS / THINGS TO DO
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Things to Do in Paradise Valley
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From swimming in turquoise pools to rock jumping and Berber-style
              lunches, Paradise Valley offers a full day of natural adventures.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item) => (
              <article key={item.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-[var(--color-primary)]/10">
                    <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: GETTING THERE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bus className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              How to Get There
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Paradise Valley is easily accessible as a day trip from Agadir, Taghazout,
              or Tamraght. Here are your transport options.
            </p>
          </div>

          <div className="space-y-6">
            {gettingThere.map((route) => (
              <article key={route.from} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      From {route.from}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1">
                        <Bus className="w-4 h-4 text-[var(--color-primary)]" />
                        {route.method}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                        {route.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <CircleDollarSign className="w-4 h-4 text-[var(--color-primary)]" />
                        {route.price}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {route.description}
                </p>
                <div className="flex items-start gap-2 text-sm">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Tip:</strong>{' '}
                    {route.tip}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: BEST TIME TO VISIT
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ThermometerSun className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time to Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Peak Season (Jun-Sep)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The best swimming conditions. Water levels are moderate, the sun is strong,
                and the cool pools offer welcome relief from 35-40 C coastal temperatures.
                Expect crowds on weekends and throughout July-August. Arrive before 10:00 AM
                for a peaceful experience.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Shoulder (Apr-May, Oct)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Ideal conditions overall. The valley is lush and green from spring rains,
                pools are full but not dangerous, temperatures are comfortable (25-30 C), and
                visitor numbers are manageable. May is especially beautiful when wildflowers
                bloom along the gorge walls.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Off Season (Nov-Mar)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Not recommended for swimming. Winter rains can make the river fast and
                dangerous, the trail may be slippery, and water temperatures drop to 12-16 C.
                However, the valley is dramatic after rainfall with cascading waterfalls, and
                you will likely have it entirely to yourself. Hiking without swimming is still
                worthwhile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: PHOTO GALLERY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 mx-auto mb-4 text-[var(--color-accent)]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
              Paradise Valley in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Turquoise pools, towering palms, and sun-drenched canyon walls &mdash;
              the visual beauty of Paradise Valley is reason enough to make the journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: '/images/hero-paradise-valley.webp', alt: 'Panoramic view of Paradise Valley gorge with palm trees and natural rock pools in southern Morocco' },
              { src: '/images/hero-paradise-valley-pool.webp', alt: 'Turquoise natural swimming pool surrounded by smooth boulders in Paradise Valley' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: TIPS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Tips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Make the most of your Paradise Valley visit with these essential tips.
            </p>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              {tips.map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Discover more of Morocco&apos;s natural wonders and coastal destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover Paradise Valley?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Swim in turquoise pools, leap from sun-warmed boulders, and share mint
            tea with Berber families in one of Morocco&apos;s most beautiful natural
            settings &mdash; all just 40 minutes from the coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agadir"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Compass className="w-4 h-4" /> Explore Agadir
            </Link>
            <Link
              href="/day-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> More Day Trips
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

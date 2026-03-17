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
  Navigation,
  Shield,
  Fish,
  Waves,
  Tent,
  Footprints,
  Leaf,
  ThermometerSun,
  Eye,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Bin El Ouidane Lake Guide 2025 | Atlas Mountain Lake, Morocco',
  description:
    'Complete guide to Bin El Ouidane Lake, Morocco. Discover the turquoise Atlas foothills lake, freshwater fishing, kayaking, boat trips, hiking trails, and how to get there from Marrakech or Beni Mellal. A peaceful alternative to coastal tourism.',
  keywords: [
    'Bin El Ouidane Morocco',
    'Bin El Ouidane Lake',
    'Morocco lake',
    'Atlas Mountains lake',
    'Morocco fishing',
    'freshwater fishing Morocco',
    'kayaking Morocco',
    'Beni Mellal day trips',
    'Morocco nature escape',
    'Bin El Ouidane dam',
    'Azilal Morocco',
    'Morocco off the beaten path',
    'Atlas foothills',
    'Morocco outdoor activities',
    'peaceful Morocco destinations',
  ],
  openGraph: {
    title: 'Bin El Ouidane Lake Guide - Atlas Mountain Lake, Morocco',
    description:
      'Everything you need to know about Bin El Ouidane Lake: turquoise waters in the Atlas foothills, freshwater fishing, kayaking, boat trips, hiking, and practical travel tips for this peaceful gem.',
    url: 'https://citytoursmorocco.com/bin-el-ouidane',
    type: 'website',
    images: [
      {
        url: '/images/hero-bin-el-ouidane.webp',
        width: 1200,
        height: 630,
        alt: 'Stunning turquoise waters of Bin El Ouidane Lake surrounded by the green hills of the Atlas Mountains foothills',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bin El Ouidane Lake Guide 2025 | Atlas Mountain Escape',
    description:
      'Complete guide to Bin El Ouidane Lake: turquoise Atlas waters, fishing, kayaking, hiking, and a peaceful escape from Morocco tourist crowds.',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/bin-el-ouidane',
  },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': 'https://citytoursmorocco.com/bin-el-ouidane',
  name: 'Bin El Ouidane Lake Guide - Atlas Mountain Lake, Morocco',
  description:
    'Comprehensive travel guide to Bin El Ouidane Lake in the Atlas foothills of Morocco, covering fishing, kayaking, hiking, accommodation, and practical information.',
  url: 'https://citytoursmorocco.com/bin-el-ouidane',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'TouristAttraction',
    name: 'Bin El Ouidane Lake',
    description: 'A stunning turquoise reservoir in the Atlas foothills, the largest freshwater lake in Morocco and the best fishing destination in the country.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Beni Mellal-Khenifra',
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
        name: 'Atlas Mountains',
        item: 'https://citytoursmorocco.com/atlas-mountains',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bin El Ouidane',
        item: 'https://citytoursmorocco.com/bin-el-ouidane',
      },
    ],
  },
};

/* ================================================================
   HIGHLIGHTS DATA
   ================================================================ */

const highlights = [
  {
    title: 'The Lake Itself',
    icon: Waves,
    description:
      'Bin El Ouidane Lake is a vast reservoir created by one of Africa\'s largest dams, completed in 1953 on the El Abid River in the foothills of the Middle Atlas. What makes this artificial lake extraordinary is its color: an intense, almost unreal turquoise that shifts through shades of teal, emerald, and sapphire depending on the time of day, season, and water depth. Surrounded by rolling green hills dotted with olive and almond trees, the lake covers roughly 3,740 hectares at full capacity and stretches through multiple valleys and inlets that create a complex, fjord-like shoreline. The setting feels more like a Swiss alpine lake than anything you would expect in North Africa, and the near-total absence of development along most of the shoreline enhances the sense of pristine natural beauty.',
  },
  {
    title: 'Freshwater Fishing',
    icon: Fish,
    description:
      'Bin El Ouidane is widely regarded as the best freshwater fishing destination in Morocco and one of the finest in all of North Africa. The lake is stocked with black bass (largemouth bass), pike, and several species of carp and barbel. The black bass fishing, in particular, attracts anglers from across Europe, with fish commonly reaching 3-5 kg and specimens over 7 kg recorded. Fishing from the shore is possible but a boat significantly improves your chances. Local fishermen can be hired with their wooden boats for approximately from 200 MAD per half day. A fishing license is technically required (available from the provincial fisheries office in Azilal for approximately 50 MAD) but enforcement is inconsistent. The best fishing months are March through June and September through November.',
  },
  {
    title: 'Kayaking and Boat Trips',
    icon: Droplets,
    description:
      'The calm, sheltered waters of Bin El Ouidane make it an excellent destination for kayaking and small boat exploration. Several guesthouses along the lake shore offer kayak rentals (typically from 100 MAD per hour) and can arrange guided paddling excursions along the shoreline, exploring hidden inlets, cliff-backed coves, and quiet bays inaccessible by road. Motorboat tours of the full lake are also available, typically lasting 1-2 hours and covering the dam, the main basin, and the dramatic cliff-lined sections of the upper lake. The water is calm enough for confident swimmers, though temperatures can be cool (18-22 C) even in summer due to the depth and mountain spring sources.',
  },
  {
    title: 'Hiking in the Atlas Foothills',
    icon: Footprints,
    description:
      'The hills surrounding Bin El Ouidane offer rewarding hiking through a landscape of olive groves, almond orchards, and traditional Berber villages that feel far removed from the tourist circuits. Well-trodden mule tracks connect the villages scattered across the hillsides, and any guesthouse can point you toward half-day or full-day walking routes. The most popular hike follows the ridge above the southern shore of the lake, offering panoramic views of the turquoise water framed by the snow-capped Atlas peaks in the distance. In spring (March-April), the surrounding hills are carpeted in wildflowers, and the almond trees blossom white and pink in spectacular profusion.',
  },
  {
    title: 'Birdwatching and Wildlife',
    icon: Eye,
    description:
      'The lake and its surroundings support a rich diversity of birdlife, making Bin El Ouidane a worthwhile stop for birdwatchers. The lake itself attracts herons, egrets, cormorants, and kingfishers along its shores, while the skies above host Bonelli\'s eagle, booted eagle, and the occasional Egyptian vulture. The surrounding scrubland and orchards provide habitat for Barbary partridge, woodchat shrike, bee-eaters, and hoopoe. During spring and autumn migration periods, the lake serves as a stopover for various species of waterfowl and waders. Early morning on the quieter inlets is the best time and location for observation.',
  },
  {
    title: 'Peaceful Escape from Tourism',
    icon: Leaf,
    description:
      'Perhaps the greatest appeal of Bin El Ouidane is what it lacks: crowds, touts, souvenir shops, and the relentless sensory overload that defines much of the Moroccan tourist experience. This is a place where you can sit on a lakeshore terrace for an entire afternoon, watching the play of light on turquoise water, reading a book, and hearing nothing but birdsong and the distant sound of a fisherman\'s oar. The handful of guesthouses and small hotels along the lake are family-run, affordable, and genuinely welcoming. For travelers seeking the Morocco that exists between the guidebook highlights, Bin El Ouidane delivers a rare tranquility.',
  },
];

/* ================================================================
   PRACTICAL INFO DATA
   ================================================================ */

const practicalInfo = [
  {
    label: 'Lake Area',
    value: '3,740 hectares',
    icon: Waves,
  },
  {
    label: 'Elevation',
    value: '~830 m',
    icon: Mountain,
  },
  {
    label: 'From Marrakech',
    value: '~200 km (3 hrs)',
    icon: Navigation,
  },
  {
    label: 'Best Season',
    value: 'Mar-Jun, Sep-Nov',
    icon: CalendarDays,
  },
];

/* ================================================================
   GETTING THERE DATA
   ================================================================ */

const gettingThere = [
  {
    from: 'Marrakech',
    method: 'Rental Car or Private Transfer',
    duration: '3 hours',
    price: 'from 700 MAD (private transfer one way)',
    description:
      'The most common approach. Drive northeast from Marrakech on the N8 toward Beni Mellal, then turn south on the R304 toward Azilal. From Azilal, the lake is 25 km further on a scenic mountain road. The drive is straightforward on well-maintained roads, passing through the Tadla plain and climbing into the increasingly green Atlas foothills. The scenery improves dramatically in the final 30 km as the road winds through olive-covered hills.',
    tip: 'Combine with a stop at the Ouzoud Waterfalls (roughly 90 minutes from the lake), Morocco\'s tallest cascades, for an excellent 2-day itinerary from Marrakech.',
  },
  {
    from: 'Beni Mellal',
    method: 'Grand Taxi or Rental Car',
    duration: '1.5 hours',
    price: 'from 30 MAD (shared grand taxi to Azilal)',
    description:
      'Beni Mellal is the nearest major city (80 km) and has regular grand taxi connections to Azilal. From Azilal, another shared taxi or private hire continues to Bin El Ouidane village. Beni Mellal has an airport (seasonal flights), a train station (connections to Casablanca and Marrakech), and all urban amenities. The drive follows the R304 through increasingly beautiful mountain foothills.',
    tip: 'Stock up on supplies in Beni Mellal or Azilal. The village of Bin El Ouidane has only basic shops. Azilal has a good weekly souk (Thursday) where you can buy provisions.',
  },
  {
    from: 'Casablanca',
    method: 'Train to Beni Mellal + Taxi',
    duration: '5-6 hours total',
    price: 'from 100 MAD (train) + 50 MAD (taxi)',
    description:
      'Take the ONCF train from Casablanca to Beni Mellal (approximately 4 hours, with one change at Khouribga or direct on some services), then continue by grand taxi to Azilal and Bin El Ouidane. This is the most affordable option for those without a rental car. Alternatively, CTM buses connect Casablanca to Beni Mellal.',
    tip: 'The train journey crosses the fertile Chaouia and Tadla plains, which is pleasant but not spectacular scenery. Consider breaking the journey in Beni Mellal for lunch before continuing to the lake.',
  },
];

/* ================================================================
   TIPS DATA
   ================================================================ */

const tips = [
  'Bring your own fishing gear if you are a serious angler. Local rental options are limited and quality is variable.',
  'Swimwear is fine at the lake but dress modestly in the surrounding villages, which are conservative Berber communities.',
  'The lake water temperature ranges from 15 C in winter to 24 C in summer. It is refreshing but not warm. Wetsuits are recommended for extended water activities.',
  'There is limited mobile phone coverage around the lake. Enjoy the digital detox, but inform someone of your plans if hiking alone.',
  'Accommodation should be booked in advance during Moroccan holiday periods (Eid, summer). At other times, walk-in availability is usually fine.',
  'The dam area may have security restrictions on photography. Ask permission if unsure.',
  'Water levels fluctuate seasonally. In late summer (August-September), the lake may be noticeably lower, affecting the scenery and boat access.',
  'Bring sunscreen and a hat. The lake reflects UV light intensely, and there is limited shade along the shoreline.',
  'The closest ATMs are in Azilal (25 km). Carry enough cash for your stay, as the village operates on cash only.',
  'Combine Bin El Ouidane with a visit to Ouzoud Waterfalls for a 2-3 day Atlas foothills itinerary. The waterfall is roughly 90 minutes from the lake.',
];

/* ================================================================
   RELATED PAGES
   ================================================================ */

const relatedPages = [
  {
    title: 'Atlas Mountains Guide',
    description: 'Comprehensive guide to the High, Middle, and Anti-Atlas ranges.',
    href: '/atlas-mountains',
  },
  {
    title: 'Fishing in Morocco',
    description: 'The best freshwater and saltwater fishing across the country.',
    href: '/fishing',
  },
  {
    title: 'Day Trips',
    description: 'The best excursions from Marrakech, Fes, and other major cities.',
    href: '/day-trips',
  },
  {
    title: 'Camping in Morocco',
    description: 'Campsites, wild camping, and outdoor sleeping across the country.',
    href: '/camping',
  },
];

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function BinElOuidaneGuidePage() {
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
            src="/images/hero-bin-el-ouidane.webp"
            alt="Stunning turquoise waters of Bin El Ouidane Lake stretching between green Atlas Mountain foothills under a clear sky"
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
              href="/atlas-mountains"
              className="hover:text-white transition-colors"
            >
              Atlas Mountains
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Bin El Ouidane</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Turquoise Lake in the Atlas Foothills
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bin El Ouidane: Morocco&apos;s Hidden Lake
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A breathtaking turquoise lake cradled in the green foothills of the
              Middle Atlas &mdash; where world-class fishing, serene kayaking,
              and genuine tranquility offer the perfect antidote to Morocco&apos;s
              frenetic cities.
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
              Morocco&apos;s Best-Kept Natural Secret
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Unknown to most international visitors, Bin El Ouidane is a revelation:
              a vast turquoise lake that belongs on any nature lover&apos;s itinerary.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Bin El Ouidane (sometimes written Bine el Ouidane) is a massive reservoir
              lake located in the foothills of the Middle Atlas Mountains, roughly 200 km
              northeast of Marrakech in the Beni Mellal-Khenifra region. Created by the
              construction of one of Africa&apos;s largest concrete arch dams on the El
              Abid River in the early 1950s, the lake has matured over seven decades into
              a stunning natural feature that many visitors compare favorably to the famous
              lakes of Switzerland or the Italian Dolomites.
            </p>
            <p>
              The lake&apos;s most striking characteristic is its color. Depending on
              the season, the angle of the sun, and the depth of the water, Bin El
              Ouidane shimmers through an astonishing palette of turquoise, teal,
              emerald, and deep sapphire blue. The color is produced by the combination
              of dissolved limestone minerals from the surrounding hills and the
              extreme clarity of the mountain spring water that feeds the lake. At
              full capacity, the lake covers approximately 3,740 hectares and
              reaches depths of over 130 meters, with a complex shoreline of inlets,
              peninsulas, and cliff-backed coves that rewards extended exploration by
              boat or kayak.
            </p>
            <p>
              Despite its extraordinary beauty, Bin El Ouidane remains almost unknown
              to international tourists. It receives a steady flow of Moroccan
              visitors, particularly from Beni Mellal and Casablanca, who come for
              weekend fishing and picnics, but the lake is virtually absent from
              English-language guidebooks and travel blogs. For travelers seeking an
              experience of Morocco that has nothing to do with medinas, souks, or
              desert camps &mdash; a place of genuine natural serenity where the
              loudest sound is birdsong and a gentle lapping of water &mdash; Bin El
              Ouidane is a destination of quiet magnificence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-light)]">
              {[
                { label: 'Lake Area', value: '3,740 ha' },
                { label: 'Max Depth', value: '130+ m' },
                { label: 'Elevation', value: '830 m' },
                { label: 'Dam Built', value: '1953' },
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
          SECTION 4: THINGS TO DO
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Things to Do at Bin El Ouidane
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From world-class fishing to peaceful lakeside walks, Bin El Ouidane
              rewards travelers who appreciate nature at a slower pace.
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
              Bin El Ouidane is most easily reached by rental car, though public
              transport connections exist via Beni Mellal and Azilal.
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
                <Leaf className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Spring (Mar-May)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The best overall season. The lake is full from winter rains, the hills
                are green and covered in wildflowers, almond trees blossom in the valleys,
                and temperatures are perfect for outdoor activities (18-28 C). Fishing is
                excellent as bass become active. Very few tourists.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Summer (Jun-Aug)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Hot days (30-38 C) but cooler than the lowlands thanks to the 830 m
                elevation. The lake is a popular weekend escape for Moroccan families.
                Water temperatures peak at 22-24 C, making swimming most comfortable.
                Water levels may be lower in late summer.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Autumn-Winter (Sep-Feb)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Autumn (September-November) offers excellent fishing and comfortable
                temperatures. Winter is cold (5-15 C daytime) and rainy, but the dramatic
                cloud formations over the lake create extraordinary photographic conditions.
                Very few visitors. Bring warm clothing.
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
              Bin El Ouidane in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Turquoise waters, green foothills, and the quiet grandeur of one of
              Morocco&apos;s most beautiful natural landscapes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] group">
              <img
                src="/images/hero-bin-el-ouidane.webp"
                alt="Panoramic view of Bin El Ouidane Lake with its vivid turquoise waters and rolling green Atlas foothills"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
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
              Discover more of Morocco&apos;s mountains, lakes, and outdoor adventures.
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
            Ready to Discover Bin El Ouidane?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Trade the medina crowds for turquoise stillness, cast a line into
            some of Africa&apos;s best fishing waters, and experience the Morocco
            that most travelers never find.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-4 h-4" /> Atlas Mountains Guide
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

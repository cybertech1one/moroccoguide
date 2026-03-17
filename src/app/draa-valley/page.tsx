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
  Navigation,
  Shield,
  Eye,
  Footprints,
  Leaf,
  Building,
  Palette,
  ThermometerSun,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Draa Valley Guide 2025 | Palm Groves, Kasbahs & Desert Gateway, Morocco',
  description:
    'Complete guide to the Draa Valley, Morocco. Explore the longest river valley, ancient kasbahs, palm oases, Tamegroute pottery village, Zagora, and camel treks into the Sahara. Route from Ouarzazate to the desert.',
  keywords: [
    'Draa Valley Morocco',
    'Ouarzazate to Zagora',
    'Morocco palm groves',
    'Draa Valley kasbahs',
    'Zagora Morocco',
    'Tamegroute pottery',
    '52 days to Timbuktu',
    'Morocco desert gateway',
    'camel trekking Morocco',
    'Sahara from Zagora',
    'Draa River Morocco',
    'Morocco oasis road trip',
    'Agdz Morocco',
    'Berber kasbahs',
    'Morocco road trip south',
  ],
  openGraph: {
    title: 'Draa Valley Guide - Palm Groves, Kasbahs & Desert Gateway',
    description:
      'Everything you need to know about the Draa Valley: Morocco longest river oasis, ancient kasbahs, Tamegroute pottery, Zagora desert gateway, camel treks, and practical travel information.',
    url: 'https://citytoursmorocco.com/draa-valley',
    type: 'website',
    images: [
      {
        url: '/images/hero-draa-valley.webp',
        width: 1200,
        height: 630,
        alt: 'Lush palm groves lining the Draa River with ancient kasbahs and arid mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draa Valley Guide 2025 | Kasbahs, Oases & Sahara Gateway',
    description:
      'Complete guide to the Draa Valley: palm-lined river road from Ouarzazate to Zagora, ancient kasbahs, Tamegroute pottery, and camel treks into the Sahara.',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/draa-valley',
  },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': 'https://citytoursmorocco.com/draa-valley',
  name: 'Draa Valley Guide - Palm Groves, Kasbahs & Desert Gateway, Morocco',
  description:
    'Comprehensive travel guide to the Draa Valley covering the road from Ouarzazate to Zagora, palm oases, ancient kasbahs, Tamegroute pottery, camel trekking, and practical information.',
  url: 'https://citytoursmorocco.com/draa-valley',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'TouristAttraction',
    name: 'Draa Valley',
    description: 'Morocco longest river valley, a ribbon of palm oases and ancient kasbahs between the Atlas Mountains and the Sahara Desert.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Draa-Tafilalet',
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
        name: 'Road Trips',
        item: 'https://citytoursmorocco.com/road-trips',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Draa Valley',
        item: 'https://citytoursmorocco.com/draa-valley',
      },
    ],
  },
};

/* ================================================================
   HIGHLIGHTS DATA
   ================================================================ */

const highlights = [
  {
    title: 'Tizi n\'Tinififft Pass',
    icon: Mountain,
    image: '/images/hero-draa-valley.webp',
    description:
      'The journey from Ouarzazate to the Draa Valley begins with a dramatic climb over the Tizi n\'Tinififft pass at 1,660 meters. As you crest the pass, the view that unfolds is one of Morocco\'s most breathtaking panoramas: the entire Draa Valley spreads out below, a river of emerald-green palm groves cutting through a vast landscape of ochre desert and dark volcanic hills. This first glimpse has reduced many travelers to awed silence. Stop at the viewpoint just past the summit for photographs and to appreciate the sheer scale of the valley below.',
    tip: 'Depart Ouarzazate early in the morning. The light on the valley from the pass viewpoint is most spectacular before 10:00 AM.',
  },
  {
    title: 'Agdz and the Palmeries',
    icon: Leaf,
    image: '/images/hero-draa-valley.webp',
    description:
      'The first major town in the Draa Valley, Agdz (pronounced ag-duz) is a pleasant, unhurried place surrounded by one of the densest palm groves in Morocco. The town is dominated by the crumbling Kasbah of Agdz and the dramatic backdrop of Jebel Kissane, a flat-topped mountain that towers above the valley. The weekly souk (Thursday) is an authentic Berber market experience with minimal tourist traffic. Walking or cycling through the surrounding palm grove reveals ancient irrigation channels (seguias), small-scale date farming, and daily life unchanged for centuries.',
    tip: 'Stay overnight in Agdz at one of the excellent kasbah guesthouses rather than rushing through. The sunset from a rooftop terrace overlooking the palm grove and Jebel Kissane is magnificent.',
  },
  {
    title: 'Ancient Kasbahs Along the Route',
    icon: Building,
    image: '/images/hero-kasbahs.webp',
    description:
      'The Draa Valley is sometimes called the "Valley of a Thousand Kasbahs," and the description is barely an exaggeration. Between Agdz and Zagora, the road passes dozens of fortified mudbrick kasbahs and ksour (fortified villages), some dating back centuries. The most impressive include Tamnougalt, an enormous ksar with a labyrinthine interior and a restored section open to visitors; Timidarte, a crumbling fortress perched above the river; and Tansikht, where the Draa River is dammed to create the reservoir that sustains the downstream oases. Each kasbah tells a story of the semi-feudal Berber and Arab families who controlled trade along this ancient trans-Saharan route.',
    tip: 'Visit Tamnougalt (20 MAD entry) for the best-preserved interior. A local guide can explain the function of each room and share stories of the families who lived here. Photography is excellent in the morning light.',
  },
  {
    title: 'Tamegroute Pottery Village',
    icon: Palette,
    image: '/images/hero-kasbahs.webp',
    description:
      'Located 20 km south of Zagora, the village of Tamegroute is famous throughout Morocco for two things: its distinctive green-glazed pottery and its ancient Koranic library. The Zaouia Nassiriya, a 17th-century religious brotherhood, houses a remarkable collection of illuminated manuscripts, Korans, and scientific texts dating back centuries, displayed in a small but fascinating library open to visitors. The pottery cooperative, just down the road, produces the distinctive green ceramics that have been a Tamegroute specialty for generations. Watching the potters work at their kilns and browsing the finished pieces is a highlight of any Draa Valley visit.',
    tip: 'Buy pottery directly from the cooperative for the best prices and to support local artisans. The small green tajine pots (from 40 MAD) make excellent souvenirs. The library visit is free but a donation of from 20 MAD is appreciated.',
  },
  {
    title: 'Zagora: Gateway to the Sahara',
    icon: Compass,
    image: '/images/hero-draa-valley.webp',
    description:
      'The town of Zagora, 170 km from Ouarzazate, is the de facto capital of the Draa Valley and the traditional gateway to the Sahara. Its most famous landmark is the iconic road sign reading "Tombouctou 52 jours" (Timbuktu 52 days) &mdash; a reminder that this was once the starting point for the epic trans-Saharan camel caravans that transported gold, salt, and spices between West Africa and the Mediterranean. Today, Zagora is the departure point for camel treks into the desert dunes of Erg Chigaga (via M\'hamid) or shorter overnight excursions to nearby desert camps.',
    tip: 'The famous Timbuktu sign is at the edge of town on the road south. Zagora has ATMs, petrol stations, pharmacies, and a good selection of restaurants and hotels. Wednesday and Sunday are souk days.',
  },
  {
    title: 'Camel Treks into the Sahara',
    icon: Sun,
    image: '/images/hero-draa-valley.webp',
    description:
      'The Draa Valley is one of the two main gateways to Morocco\'s Sahara desert (the other being Merzouga in the east). From Zagora, you can arrange camel treks ranging from short overnight excursions to the nearby dunes of Tinfou (the closest option, 30 minutes by road) to multi-day expeditions to the vast Erg Chigaga dune sea, considered the most authentic and uncrowded Saharan experience in Morocco. The journey to Erg Chigaga typically takes 2-3 days by camel from M\'hamid (90 km south of Zagora) and includes nights under the stars in traditional nomad-style desert camps.',
    tip: 'For the most authentic experience, book a multi-day camel trek to Erg Chigaga rather than the shorter Tinfou option. Expect to pay from 800 MAD per person per day for a quality desert experience including guide, camel, meals, and camp. Book through your hotel or a reputable agency in Zagora.',
  },
];

/* ================================================================
   PRACTICAL INFO DATA
   ================================================================ */

const practicalInfo = [
  {
    label: 'Distance',
    value: '170 km (Ouarzazate-Zagora)',
    icon: Navigation,
  },
  {
    label: 'Drive Time',
    value: '3-4 hours (with stops)',
    icon: Clock,
  },
  {
    label: 'Best Time',
    value: 'Oct-Apr (cool season)',
    icon: CalendarDays,
  },
  {
    label: 'Region',
    value: 'Draa-Tafilalet',
    icon: MapPin,
  },
];

/* ================================================================
   TIPS DATA
   ================================================================ */

const tips = [
  'The Ouarzazate-Zagora road (N9) is well-paved and suitable for any vehicle. Allow at least 5-6 hours for the journey with sightseeing stops.',
  'Fuel up in Ouarzazate or Agdz. Petrol stations are sparse in between, though Zagora has several.',
  'Summer (June-August) temperatures regularly exceed 45 C in the Draa Valley. Travel in the cool season (October-April) for comfort. If visiting in summer, travel very early morning or late afternoon.',
  'Carry at least 3 liters of water per person for the drive. The valley is extremely arid and dehydration is a real risk.',
  'Dates are the valley\'s primary crop and are at their best in autumn (October-November) during the date harvest season. Fresh dates bought from roadside vendors are incomparably superior to anything available abroad.',
  'Photography is exceptional throughout the drive, but the palm groves are most beautiful in the soft morning or late afternoon light. The kasbahs photograph best when side-lit.',
  'Accommodation ranges from simple guesthouses in the palm groves (from 200 MAD) to restored luxury kasbahs (from 800 MAD). Agdz and Zagora have the most options.',
  'Grand taxis and buses connect Ouarzazate to Zagora daily if you do not have a rental car. The journey takes 3-4 hours.',
  'The Draa Valley is home to predominantly Berber and Arab communities. Dress modestly, especially when visiting the Tamegroute zaouia (religious site).',
  'Consider spending 2-3 days in the valley rather than rushing through in one day. Agdz, Zagora, and M\'hamid each deserve at least one night.',
];

/* ================================================================
   RELATED PAGES
   ================================================================ */

const relatedPages = [
  {
    title: 'Ouarzazate Guide',
    description: 'The starting point for the Draa Valley road trip, with kasbahs and film studios.',
    href: '/ouarzazate',
  },
  {
    title: 'Desert Adventures',
    description: 'Camel treks, desert camps, and Sahara experiences across Morocco.',
    href: '/desert-adventures',
  },
  {
    title: 'Morocco Kasbahs',
    description: 'The most impressive fortified mudbrick architecture in the country.',
    href: '/kasbahs',
  },
  {
    title: 'Morocco Road Trips',
    description: 'Scenic driving routes through gorges, valleys, and desert landscapes.',
    href: '/road-trips',
  },
];

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function DraaValleyGuidePage() {
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
            src="/images/hero-draa-valley.webp"
            alt="Lush date palm groves of the Draa Valley stretching between arid mountains and ancient kasbahs in southern Morocco"
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
              href="/road-trips"
              className="hover:text-white transition-colors"
            >
              Road Trips
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Draa Valley</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Palm Groves, Kasbahs &amp; Sahara Gateway
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Draa Valley: Morocco&apos;s River of Palms
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Follow Morocco&apos;s longest river through a 200-kilometer ribbon of
              emerald palm groves, past crumbling kasbahs and ancient oasis villages,
              from the Atlas Mountains to the edge of the Sahara Desert.
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
              Morocco&apos;s Longest River Valley
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              For centuries the lifeline of southern Morocco, the Draa Valley remains
              one of the country&apos;s most enchanting and least-hurried regions.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The Draa Valley (Vallee du Draa) is the most extensive oasis system in
              Morocco, following the Draa River from its source at the confluence of
              the Dades and Ouarzazate rivers near the town of Ouarzazate, southeast
              through the pre-Saharan landscape for over 200 kilometers before the
              river eventually loses itself in the sands near the Algerian border.
              Along its course, the Draa feeds the largest continuous palm grove in
              Morocco &mdash; an estimated 1.8 million date palms &mdash; creating a
              startling stripe of intense green through an otherwise parched and lunar
              landscape of dark volcanic rock and pale desert.
            </p>
            <p>
              The valley has been inhabited for millennia. Its oases provided crucial
              water and shade for the trans-Saharan trade caravans that connected
              sub-Saharan Africa with the Mediterranean world, transporting gold,
              salt, slaves, spices, and textiles. The wealth generated by this trade
              built the extraordinary kasbahs and ksour that still line the valley
              &mdash; mudbrick fortresses of astonishing size and complexity that
              housed powerful Berber and Arab families who controlled the trade routes.
              Many of these structures, built from the same earth they stand upon, are
              slowly crumbling back into the landscape, giving the valley a poignant
              atmosphere of faded grandeur.
            </p>
            <p>
              Today, the Draa Valley is one of southern Morocco&apos;s most rewarding
              road trip experiences. The drive from Ouarzazate to Zagora follows the
              N9 highway through constantly changing scenery: over the dramatic Tizi
              n&apos;Tinififft pass, down through the dense palm groves of Agdz and
              Tansikht, past ruined kasbahs and living villages, to the Saharan edge
              town of Zagora with its famous &ldquo;52 days to Timbuktu&rdquo; sign.
              Unlike the more touristic Sahara route to Merzouga, the Draa Valley
              retains a genuine sense of discovery, with far fewer visitors and a
              pace of life that has barely changed in centuries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-light)]">
              {[
                { label: 'Valley Length', value: '200+ km' },
                { label: 'Date Palms', value: '1.8M+' },
                { label: 'Drive Time', value: '3-4 hrs' },
                { label: 'Highest Point', value: '1,660 m' },
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
          SECTION 4: HIGHLIGHTS / THINGS TO DO
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Highlights Along the Route
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From mountain passes to ancient libraries, the Draa Valley unfolds
              like a living museum of Moroccan history and natural beauty.
            </p>
          </div>

          <div className="space-y-8">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="card-moroccan overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <img
                      src={item.image}
                      alt={`${item.title} in the Draa Valley, Morocco`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[var(--color-primary)]/10">
                        <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-start gap-2 text-sm">
                      <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">
                        <strong className="text-[var(--text-primary)]">Tip:</strong>{' '}
                        {item.tip}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: PHOTO GALLERY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 mx-auto mb-4 text-[var(--color-accent)]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
              The Draa Valley in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Palm groves stretching to the horizon, mudbrick kasbahs glowing at
              sunset, and the endless road south toward the Sahara.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: '/images/hero-draa-valley.webp', alt: 'Aerial view of the Draa Valley with its vast palm groves and the Draa River winding through arid mountains' },
              { src: '/images/hero-kasbahs.webp', alt: 'Ancient mudbrick kasbah towers rising above the date palm canopy in the Draa Valley' },
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
                  Ideal (Oct-Nov, Mar-Apr)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Perfect temperatures (20-30 C), clear skies, and manageable visitor
                numbers. October-November coincides with the date harvest, when the
                palm groves are at their most productive and colorful. Spring brings
                wildflowers to the mountain pass sections.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <ThermometerSun className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Winter (Dec-Feb)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Pleasantly warm days (15-25 C) but cold nights that can drop below
                5 C. Excellent for driving and sightseeing but less comfortable for
                desert camping. The Tizi n&apos;Tinififft pass may occasionally have
                snow. Very few tourists.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Summer (Jun-Sep)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Extremely hot (40-50 C in Zagora). Not recommended unless you are
                very heat-tolerant. If visiting, travel at dawn and dusk only, and
                ensure your vehicle&apos;s air conditioning works. The valley is nearly
                deserted of tourists, which has its own appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: TIPS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
          SECTION 8: RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Discover more of southern Morocco&apos;s kasbahs, deserts, and ancient trade routes.
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
            Ready to Drive the Draa Valley?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Follow the ancient caravan route through a million palm trees, past
            crumbling kasbahs and living oases, to where the road ends and the
            Sahara begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ouarzazate"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Compass className="w-4 h-4" /> Explore Ouarzazate
            </Link>
            <Link
              href="/desert-adventures"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Desert Adventures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

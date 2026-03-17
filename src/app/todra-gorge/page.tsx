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
  Footprints,
  Navigation,
  Shield,
  Eye,
  Bed,
  Sunrise,
  ThermometerSun,
  Tent,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Todra Gorge Guide 2025 | Rock Climbing & Canyon Hiking in Morocco',
  description:
    'Complete guide to Todra Gorge, Morocco. Explore the dramatic 300-meter canyon walls, world-class rock climbing, hiking trails, photography spots, canyon hotels, and how to get there from Tinghir or Ouarzazate.',
  keywords: [
    'Todra Gorge Morocco',
    'Todra Gorge rock climbing',
    'Todra Gorge hiking',
    'canyon Morocco',
    'Tinghir gorge',
    'Morocco climbing destinations',
    'Todra Gorge photography',
    'Dades Gorge',
    'Morocco adventure travel',
    'Ouarzazate day trips',
    'Todra Gorge hotels',
    'Morocco canyon walls',
    'Todra Gorge camping',
    'Morocco trekking',
    'High Atlas gorges',
  ],
  openGraph: {
    title: 'Todra Gorge Guide - Rock Climbing & Canyon Hiking in Morocco',
    description:
      'Everything you need to know about Todra Gorge: 300-meter canyon walls, rock climbing routes, hiking trails, photography tips, canyon hotels, and practical travel information.',
    url: 'https://citytoursmorocco.com/todra-gorge',
    type: 'website',
    images: [
      {
        url: '/images/hero-todra-gorge-canyon.webp',
        width: 1200,
        height: 630,
        alt: 'Towering orange canyon walls of Todra Gorge with a narrow riverbed running between them in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Todra Gorge Guide 2025 | Canyon Climbing & Hiking',
    description:
      'Complete guide to Todra Gorge: dramatic 300m canyon walls, world-class climbing, hiking trails, canyon hotels, and how to get there from Tinghir or Ouarzazate.',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/todra-gorge',
  },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': 'https://citytoursmorocco.com/todra-gorge',
  name: 'Todra Gorge Guide - Rock Climbing & Canyon Hiking in Morocco',
  description:
    'Comprehensive travel guide to Todra Gorge near Tinghir, Morocco covering rock climbing, canyon hiking, photography, accommodation, and practical information.',
  url: 'https://citytoursmorocco.com/todra-gorge',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'TouristAttraction',
    name: 'Todra Gorge',
    description: 'A dramatic 300-meter deep canyon in the eastern High Atlas mountains of Morocco.',
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
        name: 'Trekking',
        item: 'https://citytoursmorocco.com/trekking',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Todra Gorge',
        item: 'https://citytoursmorocco.com/todra-gorge',
      },
    ],
  },
};

/* ================================================================
   HIGHLIGHTS DATA
   ================================================================ */

const highlights = [
  {
    title: 'The Canyon Walk',
    icon: Footprints,
    image: '/images/hero-todra-gorge-canyon.webp',
    description:
      'The most accessible experience at Todra Gorge is the walk through the narrowest section of the canyon, where sheer walls of rose-pink and orange limestone soar 300 meters above a riverbed barely 10 meters wide. The paved road runs through this narrowest section, making it accessible to visitors of all fitness levels. The walk from the canyon entrance to the narrowest point takes roughly 20 minutes, and the sheer scale of the walls creates a cathedral-like atmosphere that photographs simply cannot convey. The late-morning light penetrating the canyon creates extraordinary color effects on the rock faces.',
    fee: 'Free',
    tip: 'Walk beyond the narrowest section where most tourists stop. The canyon opens slightly after the first 500 meters, and a dirt trail continues along the river for several more kilometers through beautiful, peaceful scenery with far fewer visitors.',
  },
  {
    title: 'Rock Climbing',
    icon: Mountain,
    image: '/images/photo-todra-gorge.webp',
    description:
      'Todra Gorge is Morocco&apos;s premier rock climbing destination and increasingly recognized on the international climbing circuit. The canyon offers over 150 established routes across a wide range of difficulties, from beginner-friendly 5a sport climbs to challenging 8b+ multi-pitch routes on the main canyon walls. The rock is excellent quality limestone with generally good friction. The most popular climbing areas are Pilier du Couchant (Sunset Pillar), Petite Gorge, and the main canyon face. Routes range from single-pitch bolted sport climbs to multi-pitch trad routes requiring full rack protection.',
    fee: 'Free (guided climbing: from 400 MAD per day)',
    tip: 'The best climbing season is October to April when temperatures are cool. Several guesthouses near the gorge cater specifically to climbers and can arrange guides and gear rental. Bring your own equipment if possible, as rental gear quality varies. The guidebook "Morocco Rock" by Oxford Alpine Club is the most comprehensive route reference.',
  },
  {
    title: 'Hiking Beyond the Gorge',
    icon: Compass,
    image: '/images/hero-todra-gorge-canyon.webp',
    description:
      'Beyond the famous narrow section, Todra Gorge extends into the High Atlas as a spectacular hiking valley. A well-trodden trail follows the Todra River upstream through progressively wilder scenery: past Berber villages clinging to the canyon walls, across irrigated terraces of almond and walnut trees, through boulder fields and narrow secondary canyons, and eventually into the high mountain pastures where semi-nomadic shepherds graze their flocks in summer. Day hikes of 3-6 hours can reach the village of Tamtatouchte, while multi-day treks cross the Atlas to the Dades Valley or connect to longer routes toward Imilchil.',
    fee: 'Free (guided treks: from 300 MAD per day)',
    tip: 'Hire a local guide for any hike beyond the main gorge. The trails are not always marked, and local knowledge of water sources, terrain, and hospitable villages is invaluable. Guides can be arranged through canyon hotels or the Bureau des Guides in Tinghir.',
  },
  {
    title: 'Photography Opportunities',
    icon: Camera,
    image: '/images/photo-todra-gorge.webp',
    description:
      'Todra Gorge is one of Morocco&apos;s most photogenic landscapes. The dramatic scale of the canyon walls, the interplay of light and shadow as the sun moves across the narrow gap, and the warm colors of the limestone create extraordinary compositions at every turn. The best light conditions are mid-morning (10:00-11:30 AM) when sunlight penetrates the narrowest section and illuminates the canyon floor while the walls glow orange and pink. Late afternoon produces dramatic side-lighting on the eastern canyon wall. Sunrise shots from the ridge above the gorge are spectacular for those willing to make the pre-dawn hike.',
    fee: 'Free',
    tip: 'Bring a wide-angle lens to capture the scale of the canyon walls. A tripod is useful for the deeper, darker sections. For the most dramatic shots, include a small human figure for scale against the massive walls. The reflections in the shallow river pools add a beautiful mirror effect on calm mornings.',
  },
  {
    title: 'Nearby Dades Gorge',
    icon: Eye,
    image: '/images/hero-dades-gorge.webp',
    description:
      'Often combined with Todra on a road trip itinerary, the Dades Gorge lies roughly 50 km to the west and offers a complementary but distinct landscape experience. Where Todra is famous for its sheer, narrow canyon walls, Dades is characterized by its serpentine road winding through a broader valley of bizarre rock formations, including the famous "monkey fingers" &mdash; towering pillars of eroded conglomerate that resemble giant grasping hands. The road through Dades Gorge, with its legendary hairpin bends, is one of Morocco&apos;s most scenic drives. The two gorges make an excellent 2-3 day road trip loop from Ouarzazate.',
    fee: 'Free',
    tip: 'Drive the Dades Gorge road in the morning for the best light on the rock formations. The famous hairpin section is roughly 25 km from the valley floor. Several excellent kasbahs along the valley offer accommodation and traditional meals. Budget 2-3 hours for the drive and stops.',
  },
];

/* ================================================================
   ACCOMMODATION DATA
   ================================================================ */

const accommodations = [
  {
    name: 'Hotel Yasmina',
    category: 'Canyon Hotel',
    price: 'from 300 MAD per night',
    description:
      'Located directly at the entrance to the narrowest section of the gorge, Hotel Yasmina offers the most dramatic location of any accommodation in the area. Rooms facing the canyon wake to sunlight creeping down the 300-meter walls. The terrace restaurant overlooking the river is the perfect base for canyon exploration. Rooms are simple but clean, with hot showers and heating for winter nights.',
    bestFor: 'Canyon atmosphere, climbers, photographers',
  },
  {
    name: 'Auberge Le Festival',
    category: 'Climber-Friendly Guesthouse',
    price: 'from 200 MAD per night',
    description:
      'A popular base for the international climbing community, Auberge Le Festival offers comfortable rooms, a communal lounge for route planning, secure gear storage, and a knowledgeable owner who can connect climbers with local guides and partners. The home-cooked tagines served on the rooftop terrace are legendary among regular visitors.',
    bestFor: 'Climbers, trekkers, budget travelers',
  },
  {
    name: 'Dar Ayour',
    category: 'Traditional Guesthouse',
    price: 'from 400 MAD per night',
    description:
      'A beautifully restored Berber house in a village just below the gorge entrance, Dar Ayour offers more refined accommodation than the canyon hotels. Rooms feature traditional carved plaster walls, local textiles, and mountain views from the terrace. The family-cooked breakfasts are generous, and the setting is peaceful.',
    bestFor: 'Couples, culture seekers, those wanting comfort',
  },
];

/* ================================================================
   GETTING THERE DATA
   ================================================================ */

const gettingThere = [
  {
    from: 'Tinghir',
    method: 'Grand Taxi or Private Car',
    duration: '15 minutes',
    price: 'from 10 MAD per person (shared taxi)',
    description:
      'Tinghir is the nearest town (15 km) and the practical base for visiting Todra Gorge. Grand taxis run frequently between the Tinghir taxi stand and the gorge entrance. Alternatively, the 15 km road from Tinghir passes through a beautiful palm-filled oasis valley with ancient kasbahs that is worth exploring at a slower pace.',
    tip: 'Tinghir has ATMs, pharmacies, and a weekly souk (Monday). Stock up on supplies before heading to the gorge, where facilities are limited.',
  },
  {
    from: 'Ouarzazate',
    method: 'Bus, Grand Taxi, or Rental Car',
    duration: '3-4 hours',
    price: 'from 60 MAD (bus); from 80 MAD (shared taxi)',
    description:
      'The drive from Ouarzazate follows the N10 highway east through the dramatic Dades Valley, passing through Boumalne Dades and Tinghir. This is one of Morocco&apos;s most scenic road routes, crossing the arid pre-Saharan landscape with the snow-capped High Atlas visible to the north. CTM and Supratours buses connect Ouarzazate to Tinghir daily.',
    tip: 'Combine the journey with stops at Dades Gorge and the Valley of Roses (near Kelaat M&apos;Gouna) for a spectacular 2-3 day road trip. The Dades Gorge detour adds roughly 2 hours.',
  },
  {
    from: 'Marrakech',
    method: 'Bus or Rental Car via Ouarzazate',
    duration: '8-10 hours',
    price: 'from 120 MAD (bus)',
    description:
      'The journey from Marrakech crosses the High Atlas via the Tizi n&apos;Tichka pass (2,260 m) to Ouarzazate, then continues east along the N10 to Tinghir. This is a full day of travel but one of Morocco&apos;s most spectacular drives, passing from lush northern Morocco through dramatic mountain switchbacks into the arid pre-Saharan south. Overnight in Ouarzazate or Dades breaks the journey comfortably.',
    tip: 'Supratours runs direct buses from Marrakech to Tinghir (departing early morning). For drivers, the Tichka pass is a well-maintained but winding road; allow 4-5 hours for the Marrakech-Ouarzazate section alone.',
  },
];

/* ================================================================
   TIPS DATA
   ================================================================ */

const tips = [
  'Visit the narrowest section of the gorge early morning or late afternoon when the light is most dramatic and the crowds thinnest.',
  'The canyon floor can be very hot in summer (June-August) as the walls trap heat. Carry at least 2 liters of water per person.',
  'Rock climbing season runs October to April. Summer rock temperatures can exceed 45 C, making climbing uncomfortable and potentially dangerous.',
  'Sturdy footwear is essential for any hiking beyond the paved road. The riverbed is rocky and uneven.',
  'The river occasionally floods after heavy rain, making the canyon floor impassable. Check locally before visiting in November-March.',
  'Canyon hotels fill up in spring and autumn climbing season. Book in advance during October-November and March-April.',
  'Carry cash. There are no ATMs at the gorge, and credit cards are not widely accepted. The nearest ATMs are in Tinghir.',
  'A half-day is sufficient to walk the gorge and take photographs. Climbers and hikers should budget 2-3 days minimum.',
  'Respect local customs. The surrounding villages are conservative Berber communities. Dress modestly and ask permission before photographing people.',
  'The gorge is at approximately 1,400 meters elevation. Nights can be surprisingly cold even in summer. Bring a warm layer.',
];

/* ================================================================
   RELATED PAGES
   ================================================================ */

const relatedPages = [
  {
    title: 'Ouarzazate Guide',
    description: 'Gateway city to the gorges, kasbahs, and the Sahara desert.',
    href: '/ouarzazate',
  },
  {
    title: 'Rock Climbing Morocco',
    description: 'Complete guide to climbing destinations across the country.',
    href: '/climbing',
  },
  {
    title: 'Trekking in Morocco',
    description: 'Hiking trails from the Atlas to the desert and beyond.',
    href: '/trekking',
  },
  {
    title: 'Morocco Road Trips',
    description: 'The best driving routes through mountains, gorges, and desert.',
    href: '/road-trips',
  },
];

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function TodraGorgeGuidePage() {
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
            src="/images/hero-todra-gorge-canyon.webp"
            alt="Towering orange-pink limestone canyon walls of Todra Gorge rising 300 meters above a narrow riverbed in Morocco"
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
              href="/trekking"
              className="hover:text-white transition-colors"
            >
              Trekking
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Todra Gorge</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Canyon Climbing &amp; High Atlas Adventure
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Todra Gorge: Morocco&apos;s Grand Canyon
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A cathedral of rock where 300-meter limestone walls close to within
              arm&apos;s reach, creating one of North Africa&apos;s most dramatic
              canyons and a world-class destination for climbers, hikers, and
              photographers.
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
              A Monumental Canyon in the Eastern High Atlas
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Carved over millennia by the Todra River, this slot canyon is one of
              Morocco&apos;s most awe-inspiring natural formations.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Todra Gorge (Gorges du Todra) is a massive canyon carved through the
              eastern High Atlas Mountains by the Todra River, located approximately
              15 km north of the town of Tinghir in Morocco&apos;s Draa-Tafilalet
              region. At its narrowest point, the gorge compresses to just 10 meters
              wide while the sheer limestone walls soar to heights of 300 meters on
              either side &mdash; creating a corridor of rock so dramatic that it has
              become one of Morocco&apos;s most iconic natural landmarks and an
              essential stop on the southern Morocco road trip circuit.
            </p>
            <p>
              The geology of Todra Gorge tells a story spanning hundreds of millions
              of years. The canyon walls are composed of Jurassic-age limestone,
              originally deposited as sediment on an ancient seabed. The subsequent
              uplift of the Atlas Mountains and the patient erosive work of the Todra
              River carved this extraordinary passage through the rock. The result is
              a canyon of staggering vertical scale, with walls so tall and so close
              together that direct sunlight reaches the canyon floor for only a few
              hours each day, creating constantly shifting patterns of light and
              shadow that transform the appearance of the rock from deep orange at
              dawn to rose-pink at midday to glowing amber at sunset.
            </p>
            <p>
              Beyond its geological spectacle, Todra Gorge has become one of North
              Africa&apos;s most important rock climbing destinations. The high-quality
              limestone, long routes, and favorable winter climate attract an
              international climbing community that has established over 150 routes
              of all difficulties. The gorge also serves as the starting point for
              multi-day trekking routes into the remote High Atlas, passing through
              Berber villages accessible only on foot or by mule. For the casual
              visitor, a walk through the canyon floor is an unforgettable experience
              that requires no special equipment or fitness &mdash; just a willingness
              to be humbled by the scale of the natural world.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-light)]">
              {[
                { label: 'Canyon Height', value: '~300 m' },
                { label: 'Narrowest Width', value: '~10 m' },
                { label: 'Climbing Routes', value: '150+' },
                { label: 'Elevation', value: '1,400 m' },
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
          SECTION 3: HIGHLIGHTS / THINGS TO DO
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Things to Do at Todra Gorge
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From casual canyon walks to world-class climbing routes, Todra Gorge
              offers experiences for adventurers of every level.
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
                      alt={`${item.title} at Todra Gorge, Morocco`}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-sm">
                        <CircleDollarSign className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Cost:</strong>{' '}
                          {item.fee}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Tip:</strong>{' '}
                          {item.tip}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: ACCOMMODATION
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Canyon hotels at the gorge entrance offer unbeatable atmosphere, while
              Tinghir provides more options and amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accommodations.map((place) => (
              <article key={place.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {place.name}
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-1">
                  {place.category}
                </p>
                <p className="text-sm font-bold text-[var(--color-primary)] mb-3">
                  {place.price}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {place.description}
                </p>
                <div className="flex items-center gap-2 text-sm pt-3 border-t border-[var(--border-light)]">
                  <Star className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <span className="text-[var(--text-secondary)]">Best for: {place.bestFor}</span>
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
              Todra Gorge is accessible from Tinghir, Ouarzazate, or as part of a
              longer southern Morocco road trip.
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
          SECTION 6: PHOTO GALLERY
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 mx-auto mb-4 text-[var(--color-accent)]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
              Todra Gorge in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Three hundred meters of sheer limestone, rose-gold in the morning light
              and amber at sunset &mdash; the canyon is endlessly photogenic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: '/images/hero-todra-gorge-canyon.webp', alt: 'The narrowest section of Todra Gorge with towering orange limestone walls and a shallow river below' },
              { src: '/images/photo-todra-gorge.webp', alt: 'Close-up view of the rock face textures and climbing routes on the Todra Gorge canyon walls' },
              { src: '/images/hero-dades-gorge.webp', alt: 'The serpentine road winding through the nearby Dades Gorge with dramatic rock formations' },
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
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essential advice for making the most of your Todra Gorge adventure.
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
              Discover more of Morocco&apos;s canyon country and mountain adventures.
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
            Ready to Explore Todra Gorge?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Stand between walls of rock that reach for the sky, scale world-class
            limestone routes, and trek into the heart of the High Atlas through
            one of Morocco&apos;s most spectacular natural corridors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ouarzazate"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Compass className="w-4 h-4" /> Explore Ouarzazate
            </Link>
            <Link
              href="/road-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Morocco Road Trips
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

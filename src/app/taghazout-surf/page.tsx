import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Waves,
  Star,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Thermometer,
  TrendingUp,
  Shield,
  Users,
  Sun,
  Compass,
  BookOpen,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Taghazout Surf Guide | Hash Point, Anchor Point & Morocco\'s Best Waves',
  description:
    'Definitive guide to surfing in Taghazout, Morocco. Hash Point, Anchor Point, Panoramas, Killer Point, and nearby Imsouane. Surf camps from 3,000 MAD/week. Board rental 200 MAD/day. Best September-April.',
  keywords: [
    'Taghazout surfing',
    'surfing Morocco',
    'Anchor Point surf',
    'Hash Point Morocco',
    'Killer Point surf',
    'Taghazout surf camp',
    'Morocco surf guide',
    'Imsouane surfing',
    'Panoramas surf Morocco',
    'best surf spots Morocco',
    'Taghazout waves',
    'Morocco surf season',
  ],
  openGraph: {
    title: 'Taghazout Surf Guide - Morocco\'s Best Waves',
    description:
      'The definitive guide to Taghazout and Morocco\'s southwest surf coast. Hash Point, Anchor Point, Killer Point, and Imsouane. Surf camps, board rental, seasons, and local knowledge.',
    url: 'https://citytoursmorocco.com/taghazout-surf',
    images: [
      {
        url: '/images/hero-surfing-taghazout.webp',
        width: 1200,
        height: 630,
        alt: 'Surfer riding a perfect right-hand point break wave at Taghazout Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/taghazout-surf' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Taghazout Surf Guide',
  description:
    'Complete surfing guide to Taghazout and Morocco\'s southwest coast, covering the best breaks including Hash Point, Anchor Point, Panoramas, and Killer Point, plus nearby Imsouane.',
  url: 'https://citytoursmorocco.com/taghazout-surf',
  image: '/images/hero-surfing-taghazout.webp',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Souss-Massa',
    addressCountry: 'MA',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'MAD',
    lowPrice: 200,
    highPrice: 5000,
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

const surfSpots = [
  {
    name: 'Anchor Point',
    type: 'Right-hand point break',
    level: 'Intermediate to Advanced',
    waveSize: '1-3m (occasionally 4m+)',
    bottom: 'Rock and reef',
    description:
      'Anchor Point is the jewel of Moroccan surfing and one of the finest right-hand point breaks in the world. When a solid northwest swell hits the reef at the right angle, the wave peels for up to 300 meters along the rocky point, offering long, hollow, and powerful rides that have appeared in surf films for decades. The wave breaks over a shallow reef, producing fast, barrelling sections in the middle of the ride and a more workable shoulder toward the end. The paddle out can be challenging, especially at high tide, and the line-up is often crowded with international surfers during peak season. Anchor Point needs a solid swell (4 feet minimum) to start working and is at its best with a northeast wind. At its peak, this is a genuinely world-class wave that stands comparison with anything in Europe or the Canary Islands.',
    highlights: ['World-class right-hand point break', 'Rides up to 300 meters long', 'Hollow and powerful barrel sections', 'Featured in international surf films', 'Handles large swells up to 4m+'],
    bestTide: 'Mid to high tide',
    bestWind: 'Northeast (offshore)',
    bestSwell: 'NW swell 4ft+',
  },
  {
    name: 'Hash Point (Pointe des Ancres)',
    type: 'Right-hand point break',
    level: 'Beginner to Intermediate',
    waveSize: '0.5-2m',
    bottom: 'Sand and rock',
    description:
      'Hash Point is the most popular surf spot in Taghazout and the first break that most visitors surf. Located right in front of the village, the wave breaks over a mixed sand and rock bottom, producing a forgiving right-hander that is perfect for improving surfers. The wave is more mellow than Anchor Point -- slower, less hollow, and with a gentler takeoff that gives beginners time to pop up and find their feet. On small days, it is an ideal learning wave; on bigger days, the inside section can produce surprisingly fun, punchy rides. The spot is a social hub of the Taghazout surf scene, with surfers gathering on the rocks to watch sets roll in, share stories, and drink mint tea from the cafes above. It is also the main teaching spot for the village\'s numerous surf schools, so expect crowds during peak season. Early mornings and the last hour of daylight offer the emptiest line-ups.',
    highlights: ['Most accessible break in Taghazout', 'Forgiving wave ideal for improving surfers', 'Right in front of the village', 'Social hub of Taghazout surf scene', 'Surf schools and cafes above the break'],
    bestTide: 'All tides (best mid)',
    bestWind: 'Northeast/calm',
    bestSwell: 'NW swell 2-5ft',
  },
  {
    name: 'Panoramas (Panorama Point)',
    type: 'Right-hand point break',
    level: 'Intermediate',
    waveSize: '0.5-2.5m',
    bottom: 'Rock',
    description:
      'Named for the spectacular panoramic views from the cliffs above, this point break sits between Hash Point and Anchor Point and offers an excellent intermediate wave. The takeoff is steeper than Hash Point but less critical than Anchor, making it a natural progression spot for surfers building their skills. The wave walls up nicely on mid-size swells, offering open face turns and the occasional cover-up on the inside section. The paddle out over the rocks requires care at low tide. Panoramas picks up slightly less swell than Anchor Point but offers a less crowded and more relaxed atmosphere. On days when Anchor Point is too big or too crowded, Panoramas often provides the sweet spot of manageable power and open space.',
    highlights: ['Natural progression from Hash Point', 'Less crowded than Anchor Point', 'Walling faces for open turns', 'Spectacular cliff-top viewpoint', 'Works on moderate swells when Anchor is big'],
    bestTide: 'Mid tide',
    bestWind: 'Northeast (offshore)',
    bestSwell: 'NW swell 3-6ft',
  },
  {
    name: 'Killer Point',
    type: 'Right-hand reef break',
    level: 'Advanced',
    waveSize: '1.5-4m+',
    bottom: 'Sharp reef',
    description:
      'Killer Point is Taghazout\'s heaviest wave and should be approached with serious respect. The name comes not from the wave itself but from the orca whales that were once sighted in the bay, though the wave\'s power does justice to the intimidating moniker. Breaking over a shallow, sharp reef, Killer Point produces fast, hollow, and powerful barrels that are among the most intense in Morocco. The take-off is critical -- a steep, fast drop into a pitching lip that tests even experienced surfers. The wave handles the biggest swells that hit the coast and often works when other spots are maxed out. Access is via a steep scramble down the cliffs, and the paddle out through the impact zone requires timing and commitment. This is emphatically not a spot for beginners or intermediate surfers.',
    highlights: ['Taghazout\'s heaviest and most powerful wave', 'Fast hollow barrels over shallow reef', 'Handles the biggest swells on the coast', 'Cliff access adds to the adventure', 'For experienced surfers only'],
    bestTide: 'Mid to high tide',
    bestWind: 'Northeast (offshore)',
    bestSwell: 'NW swell 6ft+',
  },
  {
    name: 'Imsouane (Nearby)',
    type: 'Right-hand point break (The Bay)',
    level: 'Beginner to Intermediate',
    waveSize: '0.5-2m',
    bottom: 'Sand',
    description:
      'Imsouane sits about 80 kilometers north of Taghazout and offers what many consider the longest wave in Morocco -- and possibly in all of Africa. "The Bay" is a gentle, incredibly long right-hander that peels for up to 800 meters along the sandy bay on the right swell. The wave is slow, mellow, and perfect for longboarding, making it a pilgrimage destination for longboard enthusiasts and beginners who want to experience the pure joy of gliding along an endless wave. The village itself retains a laid-back, fishing-village charm that Taghazout has largely outgrown, with simple accommodation, fresh seafood restaurants, and a community of surfers and fishermen living side by side. Beyond The Bay, "The Cathedral" offers a steeper, more powerful wave at the other end of the bay for intermediate and advanced surfers. A day trip or overnight stay in Imsouane is highly recommended for any surfer visiting the region.',
    highlights: ['Longest wave in Morocco (up to 800m rides)', 'Perfect mellow longboard wave', 'Charming fishing village atmosphere', 'Fresh seafood restaurants on the harbor', 'The Cathedral break for intermediate surfers'],
    bestTide: 'Low to mid tide',
    bestWind: 'Northeast/calm',
    bestSwell: 'NW swell 3-6ft',
  },
];

const surfCamps = [
  { type: 'Budget Surf Camp', price: 'from 3,000 MAD/week', includes: 'Shared dorm, breakfast, 5 surf lessons, board rental, transport to breaks. Basic but social atmosphere.' },
  { type: 'Mid-Range Surf House', price: 'from 4,500 MAD/week', includes: 'Private/shared room, breakfast + dinner, 5 surf lessons or guiding, board rental, yoga sessions, airport transfer.' },
  { type: 'Premium Surf Retreat', price: 'from 7,000 MAD/week', includes: 'Private room with ensuite, all meals, daily surf coaching, video analysis, yoga, massage, excursions, premium board selection.' },
  { type: 'Board Rental Only', price: '200 MAD/day', includes: 'Shortboard, longboard, or funboard. Wetsuit rental additional from 50 MAD/day. Weekly rates available.' },
];

const practicalInfo = [
  { label: 'Surf Camp', value: 'from 3,000 MAD/week', detail: 'Budget to premium. Includes lessons, board, accommodation.' },
  { label: 'Board Rental', value: '200 MAD/day', detail: 'Shortboard, longboard, or funboard. Wetsuit from 50 MAD/day extra.' },
  { label: 'Surf Lesson', value: 'from 350 MAD', detail: 'Group lesson 2 hours with certified instructor. Private from 700 MAD.' },
  { label: 'Best Season', value: 'September-April', detail: 'Consistent NW swells. Summer is flat and onshore.' },
  { label: 'Water Temperature', value: '17-22C', detail: 'Full wetsuit (3/2mm) needed October-May. Spring suit in summer.' },
  { label: 'Getting There', value: 'Agadir airport (20 min)', detail: 'Budget flights from Europe. Taxi or camp transfer to Taghazout.' },
];

const seasons = [
  { season: 'September - November', rating: 5, temp: '20-28C', description: 'The start of the prime season. Atlantic swells return with increasing consistency as the North Atlantic storm track activates. September can still have flat spells, but October and November deliver reliable surf at all spots. Water is still warm from summer. Crowds are building but not yet at peak. This is many regulars\' favorite window.' },
  { season: 'December - February', rating: 5, temp: '15-22C', description: 'Peak surf season. Large, consistent northwest swells deliver the best waves of the year. Anchor Point and Killer Point fire regularly, and even small-wave spots like Hash Point are rarely flat. The downside: this is peak tourist season, and the lineup at popular spots can be very crowded. Early mornings are essential for uncrowded waves. Water temperatures drop to 17-18C; a 4/3mm wetsuit is recommended.' },
  { season: 'March - April', rating: 4, temp: '18-25C', description: 'The swells begin to ease but still deliver regularly through March. April can be inconsistent but produces memorable sessions when swells arrive. Crowds thin significantly after European school holidays end. Water temperatures begin to warm. This is a sweet spot for those who want good surf without the winter crowds.' },
  { season: 'May - August', rating: 2, temp: '22-30C', description: 'The off-season. Swells become rare and small, and the prevailing wind shifts onshore (southwest). Occasionally a summer swell produces fun waves at protected spots, but most days are flat or choppy. This is the time for surf camps to offer discounted rates and for beginners to practice in small, forgiving conditions. The Bay at Imsouane may still work on small swells.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function TaghazoutSurfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-surfing-taghazout.webp"
            alt="Surfer riding a perfect right-hand wave at Taghazout Morocco with golden light"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/activities" className="hover:text-white transition-colors">Activities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Taghazout Surf</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Waves className="w-4 h-4 text-[var(--color-accent)]" />
              Surf Guide
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Taghazout Surf Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Morocco&apos;s premier surf destination. World-class point breaks, consistent
              Atlantic swells, affordable surf camps, and a laid-back village vibe that has drawn
              wave riders from around the world for decades.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">3,000+</p>
                <p className="text-sm text-white/70">MAD/week camp</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">200</p>
                <p className="text-sm text-white/70">MAD/day board</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Sep-Apr</p>
                <p className="text-sm text-white/70">Surf season</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  Africa&apos;s Surf Capital
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Taghazout is a small fishing village perched on rocky cliffs above the Atlantic,
                    20 kilometers north of Agadir on Morocco&apos;s southwest coast. Over the past
                    two decades, it has evolved from a hippie backpacker stop into one of the world&apos;s
                    most popular surf destinations -- and for good reason. The 15-kilometer stretch of
                    coastline around Taghazout contains more quality surf breaks per kilometer than
                    almost anywhere else in the Atlantic, with waves to suit every level from first-time
                    beginners to professional competitors.
                  </p>
                  <p>
                    The magic of Taghazout lies in its geography. The coastline faces northwest,
                    directly in the path of the Atlantic storm systems that generate consistent swells
                    from September through April. A series of rocky points, reefs, and bays along the
                    coast shape these swells into perfectly formed right-hand point breaks -- the type
                    of wave that surfers dream about. When a solid swell arrives, each point along the
                    coast breaks in sequence, giving surfers a choice of waves based on their skill
                    level and crowd tolerance.
                  </p>
                  <p>
                    Beyond the waves, Taghazout offers affordable living, consistent sunshine (over
                    300 days per year), a growing community of international surfers and digital nomads,
                    excellent Moroccan food, and the kind of relaxed, salt-crusted atmosphere that makes
                    surfers extend their stays from weeks to months. The nearby village of Imsouane,
                    80 kilometers north, offers the longest wave in Africa for those willing to make
                    the day trip.
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-5">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  {practicalInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">{info.label}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{info.value} -- {info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-4 italic">Prices may vary by season and operator. All prices are approximate.</p>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a href="#spots" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    View Surf Breaks
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Photo Gallery -- */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img
                src="/images/hero-surfing-taghazout.webp"
                alt="Surfer riding a wave at Taghazout point break"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img
                src="/images/hero-surfing-taghazout-wave.webp"
                alt="Perfect wave breaking at Taghazout coastline"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img
                src="/images/photo-imsouane-surf.webp"
                alt="Longboarder riding the famous long wave at Imsouane bay"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- Surf Spots -- */}
      <section id="spots" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              The Breaks
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Taghazout Surf Spots
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Five world-class waves within easy reach, from mellow beginner breaks to powerful barrels.
            </p>
          </div>
          <div className="space-y-8">
            {surfSpots.map((spot, index) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          spot.level.includes('Beginner') ? 'bg-[var(--color-green)]/10 text-[var(--color-green)]' :
                          spot.level === 'Intermediate' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]' :
                          spot.level === 'Intermediate to Advanced' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]' :
                          'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                        }`}>
                          <TrendingUp className="w-3 h-3 inline mr-1" />{spot.level}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)]">
                        {spot.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] mt-1">{spot.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{spot.waveSize}</p>
                      <p className="text-xs text-[var(--text-muted)]">Wave height</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Waves className="w-3 h-3" /> {spot.bottom} bottom
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Clock className="w-3 h-3" /> Tide: {spot.bestTide}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Compass className="w-3 h-3" /> Wind: {spot.bestWind}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <TrendingUp className="w-3 h-3" /> Swell: {spot.bestSwell}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {spot.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {spot.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-medium">
                        <CheckCircle className="w-3 h-3" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Surf Camps & Pricing -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Stay
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Surf Camps and Pricing
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Taghazout has dozens of surf camps and houses. Here is what to expect at each price point.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surfCamps.map((camp, index) => (
              <div key={camp.type} className={`card-moroccan p-6 ${index === 1 ? 'ring-2 ring-[var(--color-accent)]' : ''}`}>
                {index === 1 && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs font-semibold mb-3">
                    <Star className="w-3 h-3" /> Best Value
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-1">
                  {camp.type}
                </h3>
                <p className="text-2xl font-bold text-[var(--color-secondary)] mb-3">{camp.price}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{camp.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Best Seasons -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Surf Season Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlantic swells run September through April. Summer is the off-season.
          </p>
          <div className="space-y-4">
            {seasons.map((s) => (
              <div key={s.season} className="card-moroccan p-5 flex flex-col sm:flex-row gap-4">
                <div className="sm:w-52 shrink-0">
                  <h3 className="font-bold text-[var(--text-primary)]">{s.season}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < s.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1">
                    <Thermometer className="w-3 h-3" /> {s.temp}
                  </p>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Safety & Etiquette -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Surf Safety and Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect the locals, respect the lineup, respect the ocean.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-secondary)]" />
                Know Your Level
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Be honest about your ability. Surfing Anchor Point or Killer Point without the skills to handle the wave puts you and others at risk. Start at Hash Point and progress as your ability grows.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-secondary)]" />
                Respect Locals
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Taghazout\'s local surfers have been riding these waves their entire lives. They have priority in the lineup. Be respectful, patient, and do not paddle-battle for waves. A smile and greeting go far.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[var(--color-secondary)]" />
                Lineup Rules
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The surfer closest to the breaking part of the wave has priority. Do not drop in (take off in front of someone already riding). Do not snake (paddle around someone to gain position). Wait your turn.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-[var(--color-secondary)]" />
                Ocean Awareness
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Rip currents, rocks, and urchins are present at most Taghazout breaks. Wear booties for reef protection. Study the break from the cliffs before paddling out. Know how to handle a rip current.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Board Damage Deposits</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Most surf camps and rental shops require a deposit (typically from 500 MAD) against board damage.
                  Dings on rocky Moroccan reef breaks are common. Carrying basic repair supplies (solarez or sun-cure resin)
                  can save you money and keep you in the water. Ask your camp about their ding repair policy before renting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Related Activities -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Adventures
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Fishing in Morocco', href: '/fishing', desc: 'Cast from the same Atlantic waters or charter a deep-sea boat.' },
              { title: 'Kayaking in Morocco', href: '/kayaking', desc: 'Paddle the Essaouira coast, Dakhla lagoon, and Atlas lakes.' },
              { title: 'Paragliding in Morocco', href: '/paragliding', desc: 'Soar above the coastline and Atlas Mountains on tandem flights.' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-moroccan p-6 group hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">{link.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                  Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/activities" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
              View All Activities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

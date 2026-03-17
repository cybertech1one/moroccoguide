import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Fish,
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
  Anchor,
  FileText,
  Waves,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Fishing in Morocco | Deep-Sea, Lake & River Angling Guide',
  description:
    'Complete guide to fishing in Morocco. Dakhla deep-sea fishing, Bin El Ouidane freshwater, Essaouira coast, and Imouzzer rivers. Licenses required for freshwater. Charter boats from 1,500 MAD.',
  keywords: [
    'fishing Morocco',
    'Dakhla deep sea fishing',
    'Bin El Ouidane fishing',
    'Essaouira fishing',
    'Morocco fishing license',
    'freshwater fishing Morocco',
    'sea fishing Morocco',
    'Morocco fishing charter',
    'Imouzzer river fishing',
    'sport fishing Morocco',
  ],
  openGraph: {
    title: 'Fishing in Morocco - Deep-Sea, Lake & River Angling',
    description:
      'From Dakhla deep-sea charters to Atlas mountain streams and lake fishing at Bin El Ouidane. Charter boats from 1,500 MAD. Complete guide with licenses and seasons.',
    url: 'https://citytoursmorocco.com/fishing',
    images: [
      {
        url: '/images/hero-fishing-morocco.webp',
        width: 1200,
        height: 630,
        alt: 'Fishing boat on the waters off the coast of Morocco at sunset',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/fishing' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Fishing in Morocco',
  description:
    'Fishing experiences across Morocco from Dakhla deep-sea charters to freshwater lake fishing at Bin El Ouidane and river angling in the Atlas Mountains.',
  url: 'https://citytoursmorocco.com/fishing',
  image: '/images/hero-fishing-morocco.webp',
  address: { '@type': 'PostalAddress', addressCountry: 'MA' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'MAD', lowPrice: 500, highPrice: 5000 },
};

/* =====================================================================
   DATA
   ===================================================================== */

const fishingSpots = [
  {
    name: 'Dakhla (Deep-Sea Fishing)',
    region: 'Dakhla-Oued Ed-Dahab',
    type: 'Deep-Sea & Lagoon',
    targetSpecies: 'Corvina, meagre, grouper, barracuda, tuna, wahoo',
    difficulty: 'All levels (charter boats)',
    description:
      'Dakhla is Morocco\'s undisputed capital of sport fishing and one of the finest fishing destinations in all of West Africa. The unique geography -- a 40-kilometer peninsula creating a vast, sheltered lagoon alongside the open Atlantic -- means anglers have access to two completely different fishing environments within minutes. The lagoon supports enormous populations of corvina (meagre) that can reach 50kg, while the open ocean offers deep-sea fishing for yellowfin tuna, wahoo, amberjack, and swordfish. Charter boats range from traditional fishing boats with local captains to fully equipped sport fishing vessels with modern electronics, fighting chairs, and professional crew. A typical day on the water includes trolling along the reef edges, jigging over wrecks, and casting in the lagoon shallows where the water is so clear you can sight-fish for individual corvina. The fishing infrastructure in Dakhla has developed rapidly, with several professional charter operations now offering packages that include accommodation, transfers, and full-day fishing trips.',
    highlights: ['World-class corvina (meagre) fishing', 'Both lagoon and open-ocean fishing', 'Professional charter boats available', 'Sight-fishing in crystal-clear lagoon', 'Year-round fishing destination'],
    price: 'Charter: from 2,500 MAD/day',
    bestMonths: 'Year-round (peak: October-March)',
  },
  {
    name: 'Bin El Ouidane (Freshwater Lake)',
    region: 'Beni Mellal-Khenifra',
    type: 'Freshwater Lake',
    targetSpecies: 'Black bass, pike, carp, barbel',
    difficulty: 'Beginner to Intermediate',
    description:
      'Morocco\'s most scenic freshwater fishing destination, Bin El Ouidane is a vast reservoir nestled in the Middle Atlas foothills. The lake is renowned for its population of largemouth black bass (introduced in the 1960s and thriving), which provide excellent sport on light tackle. Pike were also introduced and have reached impressive sizes in the nutrient-rich waters. Carp fishing is productive from the banks, with some specimens exceeding 15kg. The setting is extraordinary -- turquoise water surrounded by arid, rust-red hills that change color throughout the day. Fishing is possible from the shore, from boats (available for rent at the dam), or by kayak for a more adventurous approach. A freshwater fishing license from the Eaux et Forets is required (obtainable in Beni Mellal or online). The lake is quietest and fishing most productive in early morning and late afternoon. Several guesthouses on the shore cater specifically to anglers and can arrange boats and guides.',
    highlights: ['Excellent largemouth bass fishing', 'Scenic turquoise lake setting', 'Shore, boat, and kayak fishing', 'Carp and pike opportunities', 'Angler-friendly guesthouses'],
    price: 'Boat rental: from 500 MAD/day + license',
    bestMonths: 'March-June, September-November',
  },
  {
    name: 'Essaouira Coast (Sea Fishing)',
    region: 'Marrakech-Safi',
    type: 'Coastal & Shore',
    targetSpecies: 'Sea bream, sea bass, mackerel, squid, conger eel',
    difficulty: 'Beginner to Intermediate',
    description:
      'Essaouira has been a fishing port for over two thousand years, and the waters off this wind-swept coast remain abundantly productive. Fishing here ranges from simple shore casting off the rocks below the medina walls to half-day and full-day boat trips targeting larger species further offshore. The most accessible experience is joining a local fishing trip from the port -- small boats with experienced captains who know every reef and sandbar along the coast. The catch varies by season: summer brings mackerel and bonito in thick shoals, autumn is prime for sea bream and bass, and winter offers conger eel and larger offshore species. For a more immersive experience, some operators run overnight fishing trips that anchor near the Ile de Mogador, combining fishing with dawn views of the island bird sanctuary. Shore fishing is free along the coastline, though a license is technically required for using certain methods. The Essaouira fish market, where boats unload their daily catch, is a spectacle in itself.',
    highlights: ['Historic fishing port atmosphere', 'Shore and boat fishing options', 'Join local fishing trips from port', 'Year-round productive waters', 'Fresh catch cooked at port restaurants'],
    price: 'Boat trip: from 800 MAD/person',
    bestMonths: 'Year-round (best: September-April)',
  },
  {
    name: 'Imouzzer & Atlas Rivers',
    region: 'Various Atlas regions',
    type: 'River (Fly Fishing)',
    targetSpecies: 'Brown trout, barbel, trout (stocked)',
    difficulty: 'Intermediate to Advanced',
    description:
      'The rivers and streams of the Middle and High Atlas offer fly fishing in settings that recall the mountain streams of southern Europe. Brown trout were introduced to Moroccan rivers during the French protectorate era and have established self-sustaining populations in the cooler, higher-altitude streams. The fishing is technically demanding -- the streams are often small, clear, and overgrown, requiring precise casting and stealthy approach. The Imouzzer Kandar area south of Fes, the Oum Er Rbia river system near Khenifra, and several streams in the Azrou cedar forests are the most productive trout waters. Barbel fishing is available in lower-altitude rivers and provides excellent sport on light tackle. A freshwater fishing license is mandatory, and catch-and-release is encouraged (and required in some waters). Access to the best fishing often requires hiking in, adding an adventure dimension. A local guide who knows the water is invaluable -- both for finding fish and for navigating the sometimes complex access permissions through village territories.',
    highlights: ['Fly fishing in mountain stream settings', 'Self-sustaining brown trout populations', 'Technically rewarding for experienced anglers', 'Beautiful Atlas cedar forest surroundings', 'Combine with hiking and nature'],
    price: 'Guide: from 500 MAD/day + license',
    bestMonths: 'March-May, September-November',
  },
];

const licenseInfo = [
  { label: 'Freshwater License', value: 'Required', detail: 'Available from Eaux et Forets offices in major cities or online. Annual or seasonal options. Cost: from 100 MAD.' },
  { label: 'Saltwater License', value: 'Not required for recreational', detail: 'Charter boats handle all permits. Shore fishing is generally unrestricted.' },
  { label: 'Catch Limits', value: 'Vary by species and water', detail: 'Check local regulations. Catch-and-release is encouraged on all freshwater.' },
  { label: 'Restricted Areas', value: 'Some exist', detail: 'National park waters, spawning areas, and reservoir zones may be restricted seasonally.' },
];

const practicalInfo = [
  { label: 'Deep-Sea Charter', value: 'from 2,500 MAD/day', detail: 'Full-day trip. Equipment, bait, captain, and crew included.' },
  { label: 'Coastal Boat Trip', value: 'from 800 MAD/person', detail: 'Half-day or full-day. Basic tackle provided.' },
  { label: 'Lake/River Guide', value: 'from 500 MAD/day', detail: 'Local guide with knowledge of waters. Bring your own tackle or rent.' },
  { label: 'Best Season', value: 'Year-round varies', detail: 'Dakhla year-round; freshwater spring/autumn; coast autumn/winter.' },
  { label: 'Bring Your Tackle', value: 'Recommended', detail: 'Quality tackle is limited in Morocco. Fly fishers should bring their own rods.' },
];

const seasons = [
  { season: 'March - May', rating: 5, temp: '15-28C', description: 'Outstanding across the board. Freshwater fishing is at its peak as trout are active in warming streams. Lake bass and pike fishing is excellent. Sea fishing picks up with spring migrations. The ideal time for a multi-fishing-style trip.' },
  { season: 'June - August', rating: 3, temp: '25-40C', description: 'Freshwater streams can run low and warm. Lake fishing best at dawn and dusk. Sea fishing remains productive, especially for pelagic species. Dakhla is hot but fishable year-round. High-altitude streams above 2,000m remain cool.' },
  { season: 'September - November', rating: 5, temp: '18-32C', description: 'Prime season for most types of fishing. Sea fishing peaks with autumn migrations. Lake bass are active. River trout feed aggressively before winter. Dakhla corvina season is building toward its peak.' },
  { season: 'December - February', rating: 4, temp: '8-22C', description: 'Dakhla is at its absolute best for corvina and ocean species. Coastal fishing remains productive. Freshwater can be challenging in cold weather but barbel are active. Lake fishing slows but produces larger individual fish.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function FishingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-fishing-morocco.webp"
            alt="Fishing boat on the Moroccan coast with Atlantic waves and sunset sky"
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
            <span className="text-white font-medium">Fishing</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Fish className="w-4 h-4 text-[var(--color-accent)]" />
              Water Activity
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fishing in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From world-class deep-sea fishing off Dakhla to fly casting in Atlas mountain
              streams and bass fishing on turquoise inland lakes. Morocco&apos;s waters hold
              extraordinary fishing for every style and skill level.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 500</p>
                <p className="text-sm text-white/70">MAD per session</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Sea & Fresh</p>
                <p className="text-sm text-white/70">Water types</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Year-round</p>
                <p className="text-sm text-white/70">Somewhere always</p>
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
                  Morocco&apos;s Untapped Fishing Waters
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco is not widely recognized as a fishing destination, and that is precisely
                    what makes it so compelling. While the country&apos;s medinas, desert, and mountains
                    draw millions of visitors annually, its 3,500 kilometers of Atlantic and
                    Mediterranean coastline, extensive network of mountain rivers, and dozens of
                    freshwater lakes remain largely undiscovered by the international angling community.
                    The result is abundant, un-pressured fishing in settings of extraordinary beauty.
                  </p>
                  <p>
                    The diversity is remarkable. Within a single week-long trip, you could land a
                    50-kilogram corvina from a Dakhla charter boat, fly fish for brown trout in an
                    Atlas cedar-forest stream, cast for bass in a turquoise mountain lake, and reel
                    in sea bream from the rocks below Essaouira&apos;s ancient medina walls. Each
                    body of water has its own character, its own species, and its own particular
                    appeal.
                  </p>
                  <p>
                    Dakhla has emerged as the star of Moroccan fishing, with its world-class corvina
                    fishing drawing dedicated anglers from Europe and beyond. But the freshwater
                    fishing is equally compelling for those willing to explore -- largemouth bass in
                    Bin El Ouidane, brown trout in Atlas streams, and barbel in lower-altitude rivers
                    offer genuinely excellent sport in magnificent settings.
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
                    View Fishing Spots
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Fishing Spots -- */}
      <section id="spots" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Cast
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Top Fishing Destinations
            </h2>
          </div>
          <div className="space-y-8">
            {fishingSpots.map((spot, index) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs font-semibold">
                          <Waves className="w-3 h-3 inline mr-1" />{spot.type}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)]">
                        {spot.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {spot.region}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{spot.price}</p>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 justify-end mt-1">
                        <Calendar className="w-3 h-3" /> {spot.bestMonths}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Fish className="w-3 h-3" /> {spot.targetSpecies}
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

      {/* -- License Info -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Licenses and Regulations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Freshwater fishing in Morocco requires a license. Saltwater is generally unrestricted for recreational anglers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {licenseInfo.map((info) => (
              <div key={info.label} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[var(--color-secondary)]" />
                  {info.label}
                </h3>
                <p className="text-sm font-semibold text-[var(--color-secondary)] mb-1">{info.value}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Best Seasons -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Best Seasons
          </h2>
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

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Seasickness</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  The Atlantic swells off Morocco can be substantial, especially in winter. If you are prone to
                  seasickness, take medication before boarding (not after symptoms start). Choose a larger charter
                  boat for a more stable ride, and avoid going below deck during rough conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Related Activities -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Adventures
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Kayaking in Morocco', href: '/kayaking', desc: 'Paddle the same lakes and coasts, seeing them from a different angle.' },
              { title: 'Taghazout Surf Guide', href: '/taghazout-surf', desc: 'Catch Atlantic waves at Morocco\'s premier surf destination.' },
              { title: 'Sandboarding the Sahara', href: '/sandboarding', desc: 'Ride the dunes near Merzouga and Erg Chebbi.' },
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

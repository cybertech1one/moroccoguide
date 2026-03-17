import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Cable,
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
  Mountain,
  TreeDeciduous,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Zip-Lining in Morocco | Atlas Mountain Adventures Near Marrakech',
  description:
    'Complete guide to zip-lining in Morocco. Atlas Mountains zip lines at Terres d\'Amanar near Marrakech and Ouzoud Falls area. Prices from 300 MAD. Family-friendly options available year-round.',
  keywords: [
    'zip-lining Morocco',
    'zip line Marrakech',
    'Terres d\'Amanar zip line',
    'Atlas Mountains zip-lining',
    'Ouzoud Falls adventure',
    'Morocco family adventure',
    'Morocco adventure park',
    'zip-lining near Marrakech',
    'Morocco outdoor activities',
    'Atlas adventure park',
  ],
  openGraph: {
    title: 'Zip-Lining in Morocco - Atlas Mountain Adventures',
    description:
      'Soar through Atlas Mountain valleys on zip lines near Marrakech. From 300 MAD at Terres d\'Amanar and Ouzoud. Family-friendly, year-round adventure.',
    url: 'https://citytoursmorocco.com/zip-lining',
    images: [
      {
        url: '/images/hero-zip-line.webp',
        width: 1200,
        height: 630,
        alt: 'Person zip-lining through an Atlas Mountain valley in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/zip-lining' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Zip-Lining in Morocco',
  description:
    'Zip-line adventures in the Atlas Mountains near Marrakech, including Terres d\'Amanar adventure park and Ouzoud Falls area.',
  url: 'https://citytoursmorocco.com/zip-lining',
  image: '/images/hero-zip-line.webp',
  address: { '@type': 'PostalAddress', addressRegion: 'Marrakech-Safi', addressCountry: 'MA' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'MAD', lowPrice: 300, highPrice: 700 },
};

/* =====================================================================
   DATA
   ===================================================================== */

const venues = [
  {
    name: 'Terres d\'Amanar',
    region: 'Tahanaoute, 30km from Marrakech',
    type: 'Adventure Park',
    ageRange: 'From 5 years',
    description:
      'Terres d\'Amanar is Morocco\'s premier outdoor adventure park, set in a stunning 87-hectare estate of olive and almond groves at the foot of the Atlas Mountains, just 30 minutes from Marrakech. The park offers a full circuit of zip lines that traverse a dramatic gorge, with the longest line spanning over 300 meters and dropping 50 meters above a river valley. The sensation of launching off a cliff edge and soaring silently above the gorge floor -- with the Atlas peaks rising in the background and the sound of the river far below -- is genuinely breathtaking. Beyond zip-lining, the park offers a complete adventure experience: aerial acrobatic circuits through the trees (similar to Go Ape or Treetop Adventure), rock climbing, hiking trails, archery, and horseback riding. The facility is professionally managed with European safety standards, dual-line systems, and trained instructors at every platform. There are children\'s circuits for younger adventurers (ages 5+) and more challenging lines for adults and teenagers. The on-site restaurant serves excellent Moroccan cuisine in a beautiful terrace setting overlooking the gorge.',
    highlights: ['Longest zip line over 300m spanning a gorge', 'European safety standards with dual-line systems', 'Children\'s circuits from age 5', 'Full adventure park with climbing and aerial courses', 'On-site restaurant with Atlas views', 'Easy day trip from Marrakech (30 min)'],
    price: 'from 300 MAD (varies by circuit)',
    bestMonths: 'Year-round',
  },
  {
    name: 'Ouzoud Adventure Park',
    region: 'Near Ouzoud Falls, 2.5 hours from Marrakech',
    type: 'Via Ferrata & Zip Lines',
    ageRange: 'From 10 years',
    description:
      'Located near Morocco\'s most spectacular waterfall, the adventure park at Ouzoud combines zip lines with via ferrata (iron-rung climbing) routes along the cliff faces above the falls. The zip lines here cross the gorge at a point where you can see the 110-meter cascade of Ouzoud Falls thundering into the pool below -- a setting that is hard to beat anywhere in the world. The via ferrata routes follow the canyon walls, with rungs, cables, and suspension bridges leading through increasingly exposed positions with vertigo-inducing views of the falls and the river far below. The combination of zip-lining and via ferrata makes this a more immersive adventure than a standalone zip experience. The area is also home to a colony of Barbary macaque monkeys who watch proceedings from the fig trees with apparent amusement. Most visitors combine the adventure activities with a hike to the base of the falls and lunch at one of the riverside restaurants.',
    highlights: ['Zip lines with direct views of 110m Ouzoud Falls', 'Via ferrata climbing on canyon walls', 'Suspension bridges over the gorge', 'Barbary macaque monkey encounters', 'Combine with waterfall hike and lunch', 'More challenging and adventurous feel'],
    price: 'from 400 MAD (zip + via ferrata)',
    bestMonths: 'March-November',
  },
  {
    name: 'Atlas Experiences (Imlil Area)',
    region: 'Imlil Valley, 1.5 hours from Marrakech',
    type: 'Mountain Zip Lines',
    ageRange: 'From 8 years',
    description:
      'Several operators in the Imlil valley have established zip line courses that take advantage of the dramatic topography between Berber villages. These are typically shorter courses than Terres d\'Amanar -- two to four lines rather than a full circuit -- but the setting more than compensates. You zip between rocky outcrops above terraced fields, walnut orchards, and the rushing Imlil river, with Jebel Toubkal visible in the distance. These operators often combine zip-lining with other Atlas experiences: a guided village walk, a traditional lunch in a Berber home, or a short hike to a scenic viewpoint. The combination makes for a satisfying day trip from Marrakech that balances adrenaline with cultural immersion. Standards vary between operators, so book through established agencies or your hotel concierge and verify that modern safety equipment (full harnesses, dual carabiners) is used.',
    highlights: ['Mountain setting with Toubkal views', 'Combined with Berber village visits', 'Traditional lunch included in most packages', 'Smaller, more intimate operations', 'Cultural immersion alongside adventure'],
    price: 'from 300 MAD (usually with village tour)',
    bestMonths: 'March-November',
  },
];

const practicalInfo = [
  { label: 'Price Range', value: 'from 300 MAD', detail: 'Depends on venue and number of activities' },
  { label: 'Duration', value: '2-4 hours', detail: 'Full park visit can be a half or full day' },
  { label: 'Minimum Age', value: '5-10 years', detail: 'Varies by venue. Under-18s need parental consent.' },
  { label: 'Weight Limit', value: '25-120 kg', detail: 'Varies by specific zip line. Always confirm when booking.' },
  { label: 'Experience Needed', value: 'None', detail: 'Full training and equipment provided at all venues' },
  { label: 'Best Season', value: 'Year-round', detail: 'Some venues close in heavy rain. Summer mornings best.' },
];

const seasons = [
  { season: 'March - May', rating: 5, temp: '15-28C', description: 'Perfect temperatures for outdoor adventure. The Atlas foothills are green and blooming, waterfalls run high, and the light is beautiful. Peak season for Ouzoud Falls adventure park as the cascades are at their most impressive.' },
  { season: 'June - August', rating: 4, temp: '25-38C', description: 'Hot but manageable at altitude. Morning sessions recommended. Terres d\'Amanar\'s tree shade keeps temperatures comfortable. Ouzoud Falls flow reduces but remains impressive. Long daylight hours give flexibility.' },
  { season: 'September - November', rating: 5, temp: '18-30C', description: 'Outstanding conditions. Comfortable temperatures, clear skies, and fewer crowds. The autumn light in the Atlas valleys is exceptional. Ouzoud Falls may be lower in flow but still beautiful.' },
  { season: 'December - February', rating: 3, temp: '8-18C', description: 'Cool but generally dry. Terres d\'Amanar operates year-round. Some smaller operators in Imlil may reduce schedules. The cooler air makes physical activity comfortable but bring warm layers.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function ZipLiningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-zip-line.webp"
            alt="Person zip-lining over an Atlas Mountain gorge with valley views in Morocco"
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
            <span className="text-white font-medium">Zip-Lining</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Cable className="w-4 h-4 text-[var(--color-accent)]" />
              Adventure Activity
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Zip-Lining in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Soar across Atlas Mountain gorges, above cascading waterfalls, and through
              ancient olive groves on zip lines just 30 minutes from Marrakech. Family-friendly
              adventure for ages 5 and up.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 300</p>
                <p className="text-sm text-white/70">MAD per person</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">2-4 hrs</p>
                <p className="text-sm text-white/70">Duration</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Age 5+</p>
                <p className="text-sm text-white/70">Family friendly</p>
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
                  High-Flying Atlas Adventures
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    The Atlas Mountains provide a spectacular natural stage for zip-lining.
                    Deep gorges, rocky valleys, cascading rivers, and dramatic elevation changes
                    create ideal terrain for cables that stretch hundreds of meters above the
                    landscape. What sets Moroccan zip-lining apart from indoor or flat-terrain
                    alternatives is the raw beauty of the setting -- you are not just riding a
                    cable, you are flying above a living landscape of Berber villages, terraced
                    farms, and ancient olive groves with North Africa&apos;s highest peak as
                    your backdrop.
                  </p>
                  <p>
                    Morocco&apos;s zip-lining infrastructure has developed significantly since
                    the opening of Terres d&apos;Amanar in the early 2010s. Today, several
                    well-equipped venues operate in the Atlas foothills, all within day-trip
                    distance of Marrakech. Safety standards at the established parks are on par
                    with European facilities, using dual-line systems, full harnesses, and
                    trained staff at every launch and landing platform.
                  </p>
                  <p>
                    For families, zip-lining is one of the best adventure activities in Morocco.
                    Children as young as five can participate in junior circuits, while teenagers
                    and adults tackle longer, higher lines. The combination of manageable fear
                    (you are attached to a secure cable at all times), spectacular scenery, and
                    the pure exhilaration of speed makes it a highlight of many family trips.
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
                  <a href="#venues" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    View Venues
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Venues -- */}
      <section id="venues" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Fly
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Top Zip-Lining Venues
            </h2>
          </div>
          <div className="space-y-8">
            {venues.map((venue, index) => (
              <div key={venue.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[var(--color-green)]/10 text-[var(--color-green)] text-xs font-semibold">
                          <Users className="w-3 h-3 inline mr-1" />Ages {venue.ageRange}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {venue.region}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{venue.price}</p>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 justify-end mt-1">
                        <TreeDeciduous className="w-3 h-3" /> {venue.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Calendar className="w-3 h-3" /> {venue.bestMonths}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {venue.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {venue.highlights.map((h) => (
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

      {/* -- Best Seasons -- */}
      <section className="py-16 md:py-20">
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
        </div>
      </section>

      {/* -- Safety & Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Safety and Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-secondary)]" />
                Check Equipment
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Look for full body harnesses (not just waist belts), dual carabiner systems, and helmets. At established parks these are standard, but verify at smaller operators.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Mountain className="w-4 h-4 text-[var(--color-secondary)]" />
                Dress Appropriately
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Wear closed-toe shoes with grip (no sandals), comfortable clothing you can move in, and tie back long hair. Avoid loose scarves or dangling jewelry that could catch on equipment.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-secondary)]" />
                Family Planning
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Book in advance for school holidays when parks get busy. Children under 12 should be on junior circuits. Ask about family packages that combine activities for better value.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[var(--color-secondary)]" />
                Fear Management
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Heights anxiety is normal. Start with shorter, lower lines and work up. Focus on the scenery rather than looking straight down. The first step off the platform is the hardest part.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Booking Advice</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Book directly through the parks or through your hotel/riad rather than through street touts.
                  Direct bookings ensure you get the correct pricing, can verify safety credentials, and have
                  recourse if anything goes wrong. Terres d&apos;Amanar accepts online bookings through their website.
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
              { title: 'Paragliding in Morocco', href: '/paragliding', desc: 'Take flight above Atlas peaks on a tandem paragliding adventure.' },
              { title: 'Mountain Biking Trails', href: '/mountain-biking', desc: 'Ride Atlas trails from valley routes to multi-day expeditions.' },
              { title: 'Quad Biking Adventures', href: '/quad-biking', desc: 'Desert, palm grove, and beach quad tours across Morocco.' },
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

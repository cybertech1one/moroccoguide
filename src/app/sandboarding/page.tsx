import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Sunset,
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
  Sun,
  Camera,
  Compass,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Sandboarding in Morocco | Sahara Dune Adventures in Merzouga & Erg Chebbi',
  description:
    'Complete guide to sandboarding in Morocco. Ride the dunes of Merzouga, Erg Chebbi, and Erg Chigaga. Standalone sessions from 200 MAD or included in desert tours. Best at sunrise and sunset.',
  keywords: [
    'sandboarding Morocco',
    'Merzouga sandboarding',
    'Erg Chebbi dunes',
    'Sahara sandboarding',
    'Morocco desert adventures',
    'sand surfing Morocco',
    'Erg Chigaga sandboarding',
    'desert activities Morocco',
    'Morocco adventure sports',
    'dune boarding Sahara',
  ],
  openGraph: {
    title: 'Sandboarding in Morocco - Ride the Sahara Dunes',
    description:
      'Sandboard down the towering dunes of Merzouga and Erg Chebbi. Standalone from 200 MAD or included in desert camp tours. Best at golden hour.',
    url: 'https://citytoursmorocco.com/sandboarding',
    images: [
      {
        url: '/images/hero-sandboarding.webp',
        width: 1200,
        height: 630,
        alt: 'Person sandboarding down a large Sahara dune in Morocco at sunset',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/sandboarding' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Sandboarding in Morocco',
  description:
    'Sandboarding experiences on the Sahara dunes of Merzouga and Erg Chebbi, available as standalone sessions or part of desert camp tours.',
  url: 'https://citytoursmorocco.com/sandboarding',
  image: '/images/hero-sandboarding.webp',
  address: { '@type': 'PostalAddress', addressRegion: 'Draa-Tafilalet', addressCountry: 'MA' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'MAD', lowPrice: 200, highPrice: 500 },
};

/* =====================================================================
   DATA
   ===================================================================== */

const duneFields = [
  {
    name: 'Erg Chebbi (Merzouga)',
    region: 'Draa-Tafilalet',
    duneHeight: 'Up to 150 meters',
    difficulty: 'Beginner to Intermediate',
    description:
      'Erg Chebbi is Morocco\'s most famous sand sea and the premier sandboarding destination in the country. The dunes rise abruptly from the flat, rocky hamada on the outskirts of Merzouga, creating a dramatic wall of golden-orange sand that stretches roughly 22 kilometers from north to south and 5 kilometers east to west. The tallest dunes reach an astonishing 150 meters, offering long, thrilling descents for confident boarders. For beginners, there are countless smaller dunes in the 20-50 meter range that provide a gentler introduction. The sand here is fine-grained and soft, making falls relatively forgiving. Most desert camps and hotels in Merzouga include sandboarding in their activity offerings, or you can arrange a standalone session through village guides. The golden hour light at Erg Chebbi -- both sunrise and sunset -- transforms the dunes into an otherworldly landscape of light and shadow that makes for extraordinary photographs.',
    highlights: ['Morocco\'s tallest dunes (up to 150m)', 'Fine soft sand ideal for boarding', 'Included in most desert camp stays', 'Spectacular sunrise and sunset sessions', 'Accessible from Merzouga village'],
    price: 'from 200 MAD standalone',
    bestTime: 'Sunrise and sunset',
  },
  {
    name: 'Erg Chigaga',
    region: 'Draa-Tafilalet',
    duneHeight: 'Up to 300 meters',
    difficulty: 'Intermediate to Advanced',
    description:
      'Far more remote and significantly larger than Erg Chebbi, Erg Chigaga is Morocco\'s greatest sand sea -- a vast wilderness of dunes covering over 100 square kilometers deep in the Sahara, accessible only by 4x4 from M\'hamid El Ghizlane. The remoteness is the point: there are no hotels here, no roads, no sounds except the wind. You reach the dunes after a two-hour 4x4 journey across the stony desert, and when you arrive the silence and scale are overwhelming. The dunes here reach 300 meters, dwarfing Erg Chebbi, and the sandboarding potential is extraordinary for experienced boarders willing to climb steep faces for epic descents. The sand is coarser than at Erg Chebbi, which means faster speeds but harder impacts. Sandboarding here is typically part of multi-day desert expeditions from M\'hamid, with nights spent at remote luxury or bivouac camps.',
    highlights: ['Morocco\'s largest dune field', 'Dunes up to 300 meters high', 'Total desert isolation and silence', 'Multi-day expedition atmosphere', 'Coarser sand for faster descents'],
    price: 'Included in desert tours (from 2,000 MAD)',
    bestTime: 'Early morning before heat builds',
  },
  {
    name: 'Tinfou Dunes (Near Zagora)',
    region: 'Draa-Tafilalet',
    duneHeight: '30-50 meters',
    difficulty: 'Beginner',
    description:
      'For travelers who want a taste of sandboarding without the commitment of reaching Merzouga or Erg Chigaga, the small dune field at Tinfou near Zagora offers an easy and accessible option. These isolated dunes sit right beside the main road between Zagora and M\'hamid, making them a convenient stop on any Draa Valley itinerary. The dunes are modest -- topping out around 50 meters -- but they are perfect for first-timers and families with children. The sand is firm and the slopes are gentle, reducing the intimidation factor while still providing genuine sliding thrills. Several roadside operators rent boards and offer basic instruction. The dunes look particularly beautiful in late afternoon when the low sun casts long shadows across the rippled sand.',
    highlights: ['Roadside access, no 4x4 needed', 'Perfect for beginners and families', 'Gentle slopes and firm sand', 'Convenient Draa Valley stop', 'Budget-friendly option'],
    price: 'from 100 MAD',
    bestTime: 'Late afternoon',
  },
];

const practicalInfo = [
  { label: 'Standalone Price', value: 'from 200 MAD', detail: 'Board rental + guide. Often free at desert camps.' },
  { label: 'Difficulty', value: 'Beginner-friendly', detail: 'No experience needed. Basic balance is sufficient.' },
  { label: 'Best Time of Day', value: 'Sunrise or sunset', detail: 'Cooler temperatures and magical golden light.' },
  { label: 'Best Season', value: 'October-April', detail: 'Avoid summer heat. Desert can exceed 50C midday.' },
  { label: 'Duration', value: '1-2 hours', detail: 'Includes climbing time. Most people do 5-10 runs.' },
  { label: 'What to Wear', value: 'Long sleeves, closed shoes', detail: 'Sand burns and abrasion are real. No sandals.' },
];

const whatToBring = [
  { item: 'Closed-toe shoes or boots', note: 'Sand temperature can exceed 60C in afternoon sun. Sneakers or hiking boots are essential.' },
  { item: 'Sunscreen SPF 50+', note: 'Desert sun is intense and sand reflection doubles the exposure. Reapply frequently.' },
  { item: 'Scarf or buff for face', note: 'Sand gets everywhere, especially during windy sessions. A light scarf protects your face and neck.' },
  { item: 'Sunglasses with strap', note: 'Essential for visibility. Prescription wearers should use sports straps to prevent loss.' },
  { item: 'Water (minimum 2 liters)', note: 'You will sweat more than you realize climbing dunes. Dehydration in the desert is dangerous.' },
  { item: 'Camera with lens protection', note: 'Fine sand can damage camera equipment. Use a protective bag between shots.' },
];

const seasons = [
  { season: 'October - November', rating: 5, temp: '15-30C', description: 'The ideal window. Comfortable temperatures for climbing dunes, clear skies, and the sand has cooled from summer. The light is extraordinary for photography. Book desert camps in advance as this is peak season.' },
  { season: 'December - February', rating: 4, temp: '5-22C', description: 'Pleasantly cool days but desert nights can drop near freezing. Layer up for sunrise sessions. The dunes may have moisture from rare winter rain, which firms the sand and increases speed. Fewer tourists mean emptier dunes.' },
  { season: 'March - April', rating: 5, temp: '15-32C', description: 'Excellent conditions return with warming days. Occasional sandstorms (chergui) can cancel sessions but also create dramatic skyscapes. The desert wildflowers may bloom after spring rains.' },
  { season: 'May - September', rating: 2, temp: '30-50C+', description: 'Dangerously hot. Sand surface temperatures can exceed 60C, making climbing and falling painful. Only very early morning sessions (before 8 AM) are safe. Most operators reduce or pause sandboarding in peak summer.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function SandboardingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-sandboarding.webp"
            alt="Sandboarder riding down a golden Sahara dune at sunset in Merzouga Morocco"
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
            <span className="text-white font-medium">Sandboarding</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Sunset className="w-4 h-4 text-[var(--color-accent)]" />
              Desert Adventure
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sandboarding the Sahara
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Ride the towering dunes of Merzouga and Erg Chebbi on a board -- surfing golden
              sand at sunrise and sunset in one of the world&apos;s most dramatic desert landscapes.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 200</p>
                <p className="text-sm text-white/70">MAD standalone</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">1-2 hrs</p>
                <p className="text-sm text-white/70">Session time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Oct-Apr</p>
                <p className="text-sm text-white/70">Best season</p>
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
                  Surfing Sand, Not Waves
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Sandboarding takes the basic principle of snowboarding and transplants it to
                    the Sahara Desert. You strap your feet to a board (or simply sit on one), point
                    yourself downhill, and slide down dunes that can reach 150 meters or more in
                    height. The sensation is unlike anything else -- faster than you expect, quieter
                    than snow, with fine golden sand spraying in your wake and nothing but empty
                    desert stretching to the horizon in every direction.
                  </p>
                  <p>
                    Morocco is one of the world&apos;s best destinations for sandboarding thanks to
                    its accessible, towering dune fields. Erg Chebbi near Merzouga is the most popular
                    site, with dunes rising dramatically from the desert floor just minutes from
                    comfortable hotels and desert camps. For a more remote and raw experience, the
                    massive dunes of Erg Chigaga offer solitude and scale that rival anywhere on Earth.
                  </p>
                  <p>
                    The activity requires no prior experience. Most sessions begin with a few runs on
                    smaller dunes to get a feel for the board, then progress to steeper faces as your
                    confidence grows. The biggest challenge is not the boarding itself but the climb
                    back up -- trudging up a steep sand dune in desert heat is a genuine workout. This
                    is why sunrise and sunset sessions are strongly recommended, when temperatures are
                    manageable and the light turns the sand into liquid gold.
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
                  <a href="#dunes" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    View Dune Sites
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Dune Fields -- */}
      <section id="dunes" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Ride
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Top Sandboarding Destinations
            </h2>
          </div>
          <div className="space-y-8">
            {duneFields.map((dune, index) => (
              <div key={dune.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                          Site {index + 1}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          dune.difficulty === 'Beginner' ? 'bg-[var(--color-green)]/10 text-[var(--color-green)]' :
                          dune.difficulty === 'Beginner to Intermediate' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]' :
                          'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                        }`}>
                          <TrendingUp className="w-3 h-3 inline mr-1" />{dune.difficulty}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)]">
                        {dune.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {dune.region}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{dune.price}</p>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 justify-end mt-1">
                        <Compass className="w-3 h-3" /> {dune.duneHeight}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Clock className="w-3 h-3" /> Best: {dune.bestTime}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {dune.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dune.highlights.map((h) => (
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
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Best Seasons for Sandboarding
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The desert dictates the calendar. Summer is dangerously hot; autumn through spring is superb.
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

      {/* -- What to Bring -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            What to Bring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatToBring.map((item) => (
              <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[var(--text-primary)]">{item.item}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Photography Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Photography Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara dunes are one of Morocco&apos;s most photogenic settings. Maximize your shots.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-[var(--color-secondary)]" />
                Golden Hour Is Everything
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The first and last 45 minutes of sunlight create extraordinary shadows and textures on the dune ridgelines. Midday sun flattens the landscape and washes out colors.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4 text-[var(--color-secondary)]" />
                Protect Your Gear
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Fine Sahara sand will find its way into every opening. Keep your camera in a sealed bag between shots and avoid changing lenses in the field. A UV filter protects your front element.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[var(--color-secondary)]" />
                Use the Ridgelines
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The sharp crests of sand dunes make powerful compositional elements. Shoot along ridgelines for dramatic leading lines, or silhouette boarders against the sky from below.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-secondary)]" />
                Action Shots
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Use burst mode or continuous shooting for boarders in motion. A shutter speed of at least 1/1000s freezes sand spray. Position yourself at the base of the dune for dramatic angles.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Heat Safety</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Desert heat can be lethal. Never sandboard alone, always carry water, and stop immediately if you
                  feel dizzy, nauseous, or stop sweating. Sunrise sessions (starting before 7 AM) are strongly
                  recommended over midday. If the sand is too hot to touch with your hand, it is too hot to board on safely.
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
              Related Desert Adventures
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Quad Biking Adventures', href: '/quad-biking', desc: 'Tear through the desert on quad bikes and buggies in Merzouga and beyond.' },
              { title: 'Kayaking in Morocco', href: '/kayaking', desc: 'From mountain lakes to Saharan coast lagoons and Atlantic waves.' },
              { title: 'Paragliding over Morocco', href: '/paragliding', desc: 'Soar above Atlas peaks and desert landscapes on tandem flights.' },
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

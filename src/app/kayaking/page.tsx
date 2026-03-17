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
  Droplets,
  Sun,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Kayaking in Morocco | Lakes, Rivers & Coastal Adventures',
  description:
    'Complete guide to kayaking in Morocco. Paddle Bin El Ouidane lake, Ouzoud rivers, Dakhla lagoon, and Essaouira coast. Prices from 300 MAD per session. Year-round activity for all skill levels.',
  keywords: [
    'kayaking Morocco',
    'Bin El Ouidane kayaking',
    'Dakhla lagoon kayak',
    'Essaouira kayaking',
    'Morocco water sports',
    'Ouzoud kayaking',
    'canoeing Morocco',
    'sea kayaking Morocco',
    'lake kayaking Morocco',
    'Morocco adventure sports',
  ],
  openGraph: {
    title: 'Kayaking in Morocco - Lakes, Rivers & Coastal Paddling',
    description:
      'Kayak through Morocco from mountain lakes to Atlantic coastline. Bin El Ouidane, Dakhla lagoon, Essaouira, and more from 300 MAD per session.',
    url: 'https://citytoursmorocco.com/kayaking',
    images: [
      {
        url: '/images/hero-kayaking.webp',
        width: 1200,
        height: 630,
        alt: 'Kayaker paddling across a scenic Moroccan lake surrounded by mountains',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/kayaking' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Kayaking in Morocco',
  description:
    'Kayaking experiences across Morocco, from the alpine lake of Bin El Ouidane to the Atlantic coast of Essaouira and the turquoise lagoon of Dakhla.',
  url: 'https://citytoursmorocco.com/kayaking',
  image: '/images/hero-kayaking.webp',
  address: { '@type': 'PostalAddress', addressCountry: 'MA' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'MAD', lowPrice: 300, highPrice: 600 },
};

/* =====================================================================
   DATA
   ===================================================================== */

const spots = [
  {
    name: 'Bin El Ouidane Lake',
    region: 'Beni Mellal-Khenifra',
    type: 'Freshwater Lake',
    difficulty: 'Easy',
    description:
      'Morocco\'s most scenic inland body of water, Bin El Ouidane is a vast reservoir cradled by the foothills of the Middle Atlas. The lake\'s deep turquoise waters stretch for kilometers between arid, rust-colored hills, creating a striking contrast that feels almost surreal. Kayaking here is a supremely peaceful experience -- the lake is rarely crowded, the water is calm, and the silence is broken only by birdsong and the dip of your paddle. Early morning sessions are magical, with mist rising off the water and the Atlas peaks catching the first light. Several guesthouses along the shore rent kayaks and canoes, and guided half-day tours are available from the town of Bin El Ouidane. The lake is also an excellent spot for swimming from your kayak in summer, when water temperatures become wonderfully warm.',
    highlights: ['Stunning turquoise lake surrounded by Atlas foothills', 'Calm flat water ideal for beginners', 'Excellent swimming and fishing spots', 'Quiet and uncrowded compared to tourist areas', 'Half-day guided tours available'],
    price: 'from 300 MAD per session',
    bestMonths: 'April-October',
  },
  {
    name: 'Dakhla Lagoon',
    region: 'Dakhla-Oued Ed-Dahab',
    type: 'Saltwater Lagoon',
    difficulty: 'Easy to Moderate',
    description:
      'The Dakhla peninsula creates a massive, shallow lagoon that stretches roughly 40 kilometers along the Saharan coast. The lagoon\'s protected waters are strikingly clear, revealing sandy bottoms, seagrass meadows, and an abundance of marine life. Sea kayaking here is an extraordinary experience -- you paddle through water so clear it appears bottomless, with flamingos wading in the shallows and rays gliding beneath your hull. The lagoon is sheltered from the Atlantic swell, so conditions are consistently calm. Guided kayak tours explore the lagoon\'s mangrove-like channels, isolated sandbanks where you can stop for a swim, and the outer edges where dolphins sometimes appear. Sunset kayak sessions are particularly magical, with the Sahara glowing pink and gold to the east while the lagoon mirrors the sky.',
    highlights: ['Crystal-clear shallow waters with marine life', 'Flamingo and dolphin sightings', 'Saharan sunset backdrop', 'Sheltered from Atlantic waves', 'Combine with kitesurfing or fishing'],
    price: 'from 400 MAD per session',
    bestMonths: 'Year-round (best October-May)',
  },
  {
    name: 'Ouzoud Area Rivers',
    region: 'Beni Mellal-Khenifra',
    type: 'River Kayaking',
    difficulty: 'Moderate',
    description:
      'The rivers feeding the famous Ouzoud Falls offer Morocco\'s most accessible whitewater kayaking experience. The Oued El Abid river, which feeds the falls, has sections ranging from gentle Class I-II rapids for beginners to more challenging Class III stretches for experienced paddlers. The scenery is exceptional -- red canyon walls, olive groves clinging to the banks, and Barbary macaque monkeys watching from the trees. Most kayaking here is organized as part of multi-activity day trips from Marrakech that combine kayaking with a visit to the falls. The river is at its best in spring when snowmelt swells the flow, though summer levels remain kayakable in most sections. Local outfitters provide all equipment including helmets and life jackets.',
    highlights: ['Class I-III rapids depending on season', 'Red canyon and olive grove scenery', 'Barbary macaque monkey sightings', 'Combine with Ouzoud Falls visit', 'Spring snowmelt creates exciting rapids'],
    price: 'from 350 MAD per session',
    bestMonths: 'March-June',
  },
  {
    name: 'Essaouira Coast',
    region: 'Marrakech-Safi',
    type: 'Sea Kayaking',
    difficulty: 'Moderate',
    description:
      'Sea kayaking along the Essaouira coast offers a unique perspective on this historic port city and its wild Atlantic surroundings. Launching from the beach near the medina, you paddle past the fortified ramparts of the old city, around the Ile de Mogador (a protected island sanctuary for Eleonora\'s falcons), and along the dramatic coastline of rocky headlands and hidden coves. The Atlantic here is rougher than the Dakhla lagoon, so a basic level of fitness and comfort in open water is recommended. Morning sessions tend to have calmer conditions before the famous Essaouira trade winds build in the afternoon. The wind-sculpted argan trees along the coastline and the purple-hued Ile de Mogador create a moody, atmospheric seascape that is utterly different from the bright lagoons further south.',
    highlights: ['Paddle past Essaouira medina ramparts', 'Ile de Mogador bird sanctuary views', 'Atlantic coastline and hidden coves', 'Morning calm before trade winds', 'Historic and atmospheric seascape'],
    price: 'from 400 MAD per session',
    bestMonths: 'May-September',
  },
];

const practicalInfo = [
  { label: 'Price Range', value: 'from 300 MAD', detail: 'Per person per session (2-3 hours typically)' },
  { label: 'Equipment', value: 'Included', detail: 'Kayak, paddle, life jacket, and dry bag provided' },
  { label: 'Experience Required', value: 'None for lakes', detail: 'River and sea kayaking benefit from basic skills' },
  { label: 'Best Season', value: 'Year-round', detail: 'Spring/autumn best overall; Dakhla year-round' },
  { label: 'Session Duration', value: '2-4 hours', detail: 'Half-day tours most common; full-day available' },
  { label: 'Age Requirement', value: '8+ years', detail: 'Children must be in tandem kayak with adult' },
];

const seasons = [
  { season: 'March - May', rating: 5, temp: '18-28C', description: 'Ideal conditions across all locations. Rivers run high with spring snowmelt creating exciting rapids. Lakes are calm and warming. Coastal conditions are relatively settled before summer trade winds build.' },
  { season: 'June - August', rating: 4, temp: '25-38C', description: 'Lake and lagoon kayaking are excellent. River levels drop but remain paddleable. Essaouira coast gets windy afternoons. Morning sessions recommended everywhere. Lake swimming from your kayak is glorious.' },
  { season: 'September - November', rating: 5, temp: '20-32C', description: 'Outstanding conditions return. Water temperatures are at their warmest. Winds moderate, visibility is superb, and tourist crowds thin. The best overall season for Dakhla lagoon.' },
  { season: 'December - February', rating: 3, temp: '10-22C', description: 'Lake and river kayaking can be chilly. Dakhla remains excellent with mild temperatures. Essaouira coast is rough. Inland waters are quiet and atmospheric for those who dress warmly.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function KayakingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-kayaking.webp"
            alt="Kayaker paddling across a scenic Moroccan lake with mountain backdrop"
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
            <span className="text-white font-medium">Kayaking</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Waves className="w-4 h-4 text-[var(--color-accent)]" />
              Water Adventure
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Kayaking in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Paddle turquoise mountain lakes, navigate river rapids near Ouzoud Falls,
              explore the Dakhla lagoon with flamingos, and sea kayak past Essaouira&apos;s
              ancient ramparts.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 300</p>
                <p className="text-sm text-white/70">MAD per session</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">2-4 hrs</p>
                <p className="text-sm text-white/70">Session length</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Year-round</p>
                <p className="text-sm text-white/70">Available</p>
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
                  Morocco&apos;s Hidden Waterways
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco is not the first country that comes to mind when you think of kayaking,
                    and that is precisely what makes it special. While the crowds flock to the medinas
                    and desert camps, the country&apos;s lakes, rivers, and lagoons remain gloriously
                    underexplored by water. From the vast turquoise reservoir of Bin El Ouidane in the
                    Atlas foothills to the crystal-clear lagoon of Dakhla on the Saharan coast, Morocco
                    offers kayaking experiences that combine world-class scenery with an almost total
                    absence of crowds.
                  </p>
                  <p>
                    The variety is remarkable. In a single trip, you can paddle a glassy mountain lake
                    at dawn, navigate gentle whitewater through red canyons in the afternoon, and the
                    following day find yourself sea kayaking past the fortified walls of a medieval port
                    city with falcons wheeling overhead. Each body of water has its own character, its
                    own ecosystem, and its own particular kind of beauty.
                  </p>
                  <p>
                    Equipment standards have improved significantly in recent years, with several
                    outfitters now offering quality sit-on-top and touring kayaks alongside traditional
                    canoes. Most operators provide all equipment including life jackets, and guided
                    tours include safety briefings and basic paddling instruction for beginners.
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
                    Explore Locations
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Kayaking Spots -- */}
      <section id="spots" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Paddle
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Top Kayaking Destinations
            </h2>
          </div>
          <div className="space-y-8">
            {spots.map((spot, index) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          spot.difficulty === 'Easy' ? 'bg-[var(--color-green)]/10 text-[var(--color-green)]' :
                          spot.difficulty === 'Moderate' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]' :
                          'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                        }`}>
                          <TrendingUp className="w-3 h-3 inline mr-1" />{spot.difficulty}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)]">
                        {spot.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {spot.region} -- {spot.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{spot.price}</p>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 justify-end">
                        <Calendar className="w-3 h-3" /> {spot.bestMonths}
                      </p>
                    </div>
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

      {/* -- Best Seasons -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Best Seasons for Kayaking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Year-round paddling is possible, with spring and autumn providing the widest range of options.
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

      {/* -- Safety Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Safety and Preparation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-secondary)]" />
                Always Wear a Life Jacket
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Regardless of your swimming ability. Reputable operators provide these automatically, but verify condition and fit before launching.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-[var(--color-secondary)]" />
                Sun and Water Protection
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Water reflection doubles UV exposure. Apply waterproof SPF 50+ sunscreen, wear a hat with chin strap, and bring polarized sunglasses.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-[var(--color-secondary)]" />
                Stay Hydrated
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Bring at least 1.5 liters of water in a waterproof container. Dehydration on the water is easy to underestimate, especially in warm months.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-secondary)]" />
                Guided First Time
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                For river and sea kayaking, book a guided tour for your first session. Local guides know the currents, tides, and weather patterns intimately.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">River Levels</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  River kayaking conditions change dramatically with rainfall and snowmelt. Always check current water levels
                  with your operator before heading out, especially in spring. Flash floods can occur in narrow gorges after
                  heavy rain in the Atlas Mountains.
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
              { title: 'Fishing in Morocco', href: '/fishing', desc: 'Deep-sea charters and freshwater angling across Morocco.' },
              { title: 'Taghazout Surf Guide', href: '/taghazout-surf', desc: 'Ride world-class waves on Morocco\'s premier surf coast.' },
              { title: 'Sandboarding the Sahara', href: '/sandboarding', desc: 'Surf the dunes of Merzouga and Erg Chebbi at sunrise.' },
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

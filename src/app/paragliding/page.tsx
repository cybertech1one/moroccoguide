import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wind,
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
  Eye,
  Sunrise,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Paragliding in Morocco | Tandem Flights over Atlas Mountains & Coast',
  description:
    'Complete guide to paragliding in Morocco. Tandem flights from 800 MAD at Aguergour near Marrakech, Dakhla lagoon, and Ait Baha. Best season March-November with stunning Atlas and coastal views.',
  keywords: [
    'paragliding Morocco',
    'tandem paragliding Marrakech',
    'Aguergour paragliding',
    'Dakhla paragliding',
    'Ait Baha paragliding',
    'Morocco adventure sports',
    'Atlas Mountains paragliding',
    'paragliding North Africa',
    'Morocco tandem flights',
    'paragliding Agadir Morocco',
  ],
  openGraph: {
    title: 'Paragliding in Morocco - Soar Over Atlas Mountains & Coast',
    description:
      'Tandem paragliding flights from 800 MAD over the Atlas Mountains, Saharan landscapes, and Atlantic coastline. Top launch sites, pricing, and seasonal advice.',
    url: 'https://citytoursmorocco.com/paragliding',
    images: [
      {
        url: '/images/hero-paragliding.webp',
        width: 1200,
        height: 630,
        alt: 'Paraglider soaring above the Atlas Mountains in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/paragliding' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Paragliding in Morocco',
  description:
    'Tandem paragliding experiences across Morocco, from Atlas Mountain thermals near Marrakech to coastal soaring above Dakhla and Ait Baha.',
  url: 'https://citytoursmorocco.com/paragliding',
  image: '/images/hero-paragliding.webp',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'MAD',
    lowPrice: 800,
    highPrice: 1500,
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

const launchSites = [
  {
    name: 'Aguergour (Near Marrakech)',
    region: 'Al Haouz Province',
    altitude: '1,200m launch altitude',
    flightTime: '20-40 minutes',
    description:
      'The most accessible paragliding site from Marrakech, situated roughly 45 minutes south of the city in the foothills of the High Atlas. Aguergour offers consistent thermal conditions from spring through autumn, with launch sites on ridgelines overlooking the Haouz Plain. On a clear day, the panorama stretches from the snow-capped peaks of Toubkal to the medina of Marrakech shimmering in the distance. The site is ideal for tandem flights -- the gentle thermals allow extended soaring without turbulence, and the landing zone is a broad, flat field with easy vehicle access. Several certified operators run daily tandem flights with hotel pickup from Marrakech included in the price.',
    highlights: ['Views of Jebel Toubkal and High Atlas range', 'Gentle thermals ideal for beginners', 'Easy access from Marrakech (45 min)', 'Flat, safe landing zone', 'Hotel pickup/dropoff included'],
    price: 'from 800 MAD',
    bestMonths: 'March-November',
  },
  {
    name: 'Dakhla',
    region: 'Dakhla-Oued Ed-Dahab',
    altitude: '150-300m coastal cliffs',
    flightTime: '15-30 minutes',
    description:
      'Dakhla is already famous among kitesurfers, but its consistent Atlantic trade winds also create outstanding conditions for coastal paragliding. Launch sites along the peninsula cliffs offer ridge soaring above turquoise lagoon waters, with the Sahara stretching endlessly to the east. The wind patterns here are remarkably reliable from October through May, with smooth laminar flow off the ocean cliffs. Flights pass over the lagoon where you can spot flamingos, rays, and even dolphins in the shallow waters below. The combination of desert, ocean, and lagoon scenery makes Dakhla one of the most visually striking paragliding locations in Africa.',
    highlights: ['Lagoon and Sahara desert views', 'Consistent Atlantic trade winds', 'Wildlife spotting from the air', 'Unique desert-meets-ocean landscape', 'Year-round flying potential'],
    price: 'from 1,000 MAD',
    bestMonths: 'October-May',
  },
  {
    name: 'Ait Baha (Souss Region)',
    region: 'Souss-Massa',
    altitude: '900m launch altitude',
    flightTime: '25-45 minutes',
    description:
      'Tucked into the Anti-Atlas foothills between Agadir and Taroudant, Ait Baha is a favorite among experienced paragliders for its strong thermals and long flight times. The launch site overlooks the argan tree forests of the Souss Valley, with the Anti-Atlas peaks rising to the south and the distant shimmer of the Atlantic to the west. Thermals build reliably from mid-morning, allowing skilled pilots to gain significant altitude and cover long cross-country distances. For tandem passengers, the strong thermals mean longer flights and more dramatic views. The area is less commercialized than Aguergour, offering a more authentic and uncrowded experience.',
    highlights: ['Strong thermals for long flights', 'Argan forest and Anti-Atlas views', 'Less crowded than Marrakech sites', 'Proximity to Agadir (1 hour)', 'Experienced pilot community'],
    price: 'from 900 MAD',
    bestMonths: 'March-October',
  },
  {
    name: 'Asni & Ouirgane Valley',
    region: 'High Atlas',
    altitude: '1,400m launch altitude',
    flightTime: '20-35 minutes',
    description:
      'The Asni-Ouirgane corridor on the road from Marrakech to the Tizi n-Test pass offers several launch sites with spectacular Atlas Mountain scenery. The valley funnels warm air from the plains into reliable afternoon thermals that carry pilots high above terraced Berber villages, almond orchards, and the deep green valley floor. This area is particularly beautiful in spring when the almond trees bloom and the mountains are still capped with snow. Less established commercially than Aguergour, flights here are typically arranged through specialist operators in Marrakech or Imlil.',
    highlights: ['Deep Atlas valley scenery', 'Berber village aerial views', 'Spectacular spring blossoms', 'Combine with Atlas hiking', 'Quieter and more remote'],
    price: 'from 900 MAD',
    bestMonths: 'April-October',
  },
];

const practicalInfo = [
  { label: 'Tandem Flight Price', value: 'from 800 MAD', detail: 'Includes all equipment, certified pilot, and usually video/photos' },
  { label: 'Flight Duration', value: '15-45 minutes', detail: 'Depends on thermal conditions, site, and weather' },
  { label: 'Best Season', value: 'March-November', detail: 'Year-round in Dakhla; summer thermals strongest inland' },
  { label: 'Minimum Age', value: '12 years (tandem)', detail: 'Children must be accompanied by guardian consent' },
  { label: 'Weight Limit', value: '30-110 kg', detail: 'Varies by operator; always confirm when booking' },
  { label: 'No Experience Needed', value: 'Tandem flights', detail: 'The pilot handles everything; you enjoy the view' },
];

const whatToBring = [
  { item: 'Sturdy closed-toe shoes', note: 'Running shoes or hiking boots. You need to run a few steps for takeoff.' },
  { item: 'Warm layer', note: 'Temperatures drop significantly at altitude. A fleece or light jacket is essential even in summer.' },
  { item: 'Sunglasses with strap', note: 'Wind and sun exposure are intense. Ensure they are secured to your head.' },
  { item: 'Sunscreen SPF 50+', note: 'Apply before the flight. UV exposure is much stronger at altitude.' },
  { item: 'Camera or phone with strap', note: 'Many operators provide GoPro footage, but a secured phone captures personal angles.' },
  { item: 'Light snack and water', note: 'You may wait for optimal wind conditions. Hydration helps with any motion sensitivity.' },
];

const seasons = [
  { season: 'March - May', rating: 5, temp: '15-28C', description: 'Ideal conditions. Thermals build reliably in the warming spring air, winds are moderate, and visibility is excellent. The Atlas peaks still carry snow, making for dramatic aerial photography. This is peak season for all sites.' },
  { season: 'June - August', rating: 4, temp: '25-40C', description: 'Powerful thermals develop early in the day, but extreme heat at lower altitudes means flights are best scheduled for early morning. Afternoon turbulence can ground flights. Dakhla remains comfortable with ocean breeze.' },
  { season: 'September - November', rating: 5, temp: '18-30C', description: 'Excellent flying conditions return as temperatures moderate. Clear autumn air provides outstanding visibility. October is considered by many pilots to be the single best month for Moroccan paragliding.' },
  { season: 'December - February', rating: 3, temp: '8-20C', description: 'Inland sites can be too cold or windy. Dakhla comes into its own with consistent winter trade winds and mild temperatures. Short days reduce the thermal window at mountain sites.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function ParaglidingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-paragliding.webp"
            alt="Paraglider soaring above the Atlas Mountains in Morocco with panoramic views"
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
            <span className="text-white font-medium">Paragliding</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Wind className="w-4 h-4 text-[var(--color-accent)]" />
              Adventure Activity
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Paragliding in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Soar above the Atlas Mountains, glide over Saharan dunes, and trace the Atlantic
              coastline from the air. Morocco&apos;s diverse terrain and reliable thermals make it
              one of North Africa&apos;s premier paragliding destinations.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 800</p>
                <p className="text-sm text-white/70">MAD per flight</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">15-45 min</p>
                <p className="text-sm text-white/70">Flight time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Mar-Nov</p>
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
                  Why Morocco Is a Paragliding Paradise
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco sits at a geographic crossroads that creates exceptional flying conditions.
                    The collision of hot Saharan air with cooler Atlantic maritime breezes generates
                    powerful, predictable thermals along the Atlas Mountain range. Add over 300 days
                    of sunshine per year and a landscape that shifts from snow-capped peaks to desert
                    dunes to turquoise coastline, and you have a paragliding destination with few equals.
                  </p>
                  <p>
                    For tandem passengers with no prior experience, Morocco offers an accessible
                    introduction to free flight. You simply show up, receive a brief safety briefing,
                    and run a few steps off a hillside with your pilot before the wing catches the air
                    and lifts you into a silent world of panoramic views. The pilot handles all the
                    flying; your job is to relax and absorb the extraordinary scenery unfolding below.
                  </p>
                  <p>
                    The country&apos;s paragliding community has grown steadily over the past decade,
                    with certified operators now running tandem flights at multiple sites. The most
                    popular launch site near Marrakech, Aguergour, offers convenient access and
                    spectacular Atlas views, while remote sites like Dakhla and Ait Baha appeal to
                    those seeking solitude and more dramatic landscapes.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
                  <a href="#launch-sites" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    View Launch Sites
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Launch Sites -- */}
      <section id="launch-sites" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Fly
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Top Paragliding Launch Sites
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the Atlas foothills to the Saharan coast, Morocco offers diverse flying terrain for every level of thrill.
            </p>
          </div>
          <div className="space-y-8">
            {launchSites.map((site, index) => (
              <div key={site.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                        Site {index + 1}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)] mt-2">
                        {site.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {site.region}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{site.price}</p>
                      <p className="text-xs text-[var(--text-muted)]">per tandem flight</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Mountain className="w-3 h-3" /> {site.altitude}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Clock className="w-3 h-3" /> {site.flightTime}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Calendar className="w-3 h-3" /> {site.bestMonths}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {site.highlights.map((h) => (
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
            Best Seasons for Paragliding
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s varied geography means you can fly somewhere year-round, but conditions peak in spring and autumn.
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

      {/* -- Safety -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Safety Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Paragliding is an adventure sport. Choose certified operators and fly with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-secondary)]" />
                Choose Certified Pilots
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Ensure your operator holds a valid FRMPL (Federation Royale Marocaine de Parapente et de Vol Libre) certification or equivalent international license. Ask to see credentials before flying.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-[var(--color-secondary)]" />
                Weather Windows
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Flights depend entirely on wind and thermal conditions. Reputable operators will cancel or postpone flights if conditions are unsafe. A cancellation due to weather is a sign of a responsible operator, not a bad one.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-secondary)]" />
                Health Requirements
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Paragliding is not recommended for those with serious heart conditions, severe vertigo, recent surgeries, or during pregnancy. If you have any medical concerns, consult your doctor before booking.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Sunrise className="w-4 h-4 text-[var(--color-secondary)]" />
                Best Flying Times
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morning flights (9-11 AM) typically offer smoother air and calmer conditions. Midday flights (11 AM-2 PM) provide stronger thermals and longer flight times but more turbulence. Late afternoon offers the most dramatic light for photography.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Insurance</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Most travel insurance policies do not cover paragliding by default. Check your policy before flying
                  and consider purchasing an adventure sports rider if needed. Reputable operators carry their own
                  third-party liability insurance, but your personal medical coverage is your responsibility.
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
            <p className="text-[var(--text-secondary)]">
              Pair your flight with more Moroccan adventures on land and water.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Zip-Lining in the Atlas', href: '/zip-lining', desc: 'Fly through Atlas Mountain valleys on zip lines near Marrakech.' },
              { title: 'Quad Biking Adventures', href: '/quad-biking', desc: 'Desert and palm grove quad rides from Marrakech, Merzouga, and Agadir.' },
              { title: 'Mountain Biking Trails', href: '/mountain-biking', desc: 'Ride Atlas trails from gentle valley routes to multi-day expeditions.' },
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

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Gauge,
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
  Zap,
  Timer,
  Compass,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Quad Biking & Buggy Tours in Morocco | Desert, Mountains & Beach',
  description:
    'Complete guide to quad biking and buggy adventures in Morocco. Marrakech palm grove, Merzouga desert, and Agadir beach runs. Prices from 400 MAD for 1-3 hour experiences. Helmets provided.',
  keywords: [
    'quad biking Morocco',
    'buggy tour Marrakech',
    'desert quad Merzouga',
    'ATV Morocco',
    'quad biking Agadir',
    'Marrakech palm grove quad',
    'Morocco adventure activities',
    'buggy desert tour',
    'quad bike rental Morocco',
    'off-road Morocco',
  ],
  openGraph: {
    title: 'Quad Biking & Buggy Tours in Morocco',
    description:
      'Quad biking through palm groves, across Sahara dunes, and along Atlantic beaches. From 400 MAD for thrilling 1-3 hour experiences across Morocco.',
    url: 'https://citytoursmorocco.com/quad-biking',
    images: [
      {
        url: '/images/hero-quad-biking.webp',
        width: 1200,
        height: 630,
        alt: 'Quad bikes racing across desert terrain in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/quad-biking' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Quad Biking & Buggy Tours in Morocco',
  description:
    'Quad biking and buggy tour experiences across Morocco including Marrakech palm grove, Merzouga desert, and Agadir beach adventures.',
  url: 'https://citytoursmorocco.com/quad-biking',
  image: '/images/hero-quad-biking.webp',
  address: { '@type': 'PostalAddress', addressCountry: 'MA' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'MAD', lowPrice: 400, highPrice: 1200 },
};

/* =====================================================================
   DATA
   ===================================================================== */

const locations = [
  {
    name: 'Marrakech Palm Grove (Palmeraie)',
    region: 'Marrakech-Safi',
    terrain: 'Palm groves, dirt trails, Berber villages',
    difficulty: 'Easy to Moderate',
    duration: '2 hours',
    description:
      'The Palmeraie on the outskirts of Marrakech is Morocco\'s most popular quad biking destination, and for good reason. The vast palm grove -- originally planted in the 11th century and now spanning over 13,000 hectares -- provides a network of dusty trails, dry riverbeds, and village paths that are perfect for quad exploration. Tours wind through the palms, past olive groves, through small Berber hamlets where children wave and donkeys watch with indifference, and across open terrain with views of the Atlas Mountains. The experience is accessible for complete beginners -- the terrain is mostly flat with gentle hills, and operators provide thorough safety briefings and automatic quads for first-timers. More experienced riders can opt for manual quads and faster routes with technical sections. Most tours include a mint tea stop at a Berber family home midway through the ride. Hotel pickup from central Marrakech is standard.',
    highlights: ['Most accessible quad experience in Morocco', 'Historic palm grove and Berber villages', 'Atlas Mountain views', 'Mint tea stop with local family', 'Hotel pickup/dropoff from Marrakech'],
    price: 'from 400 MAD',
    vehicles: 'Automatic and manual quads (150cc-400cc)',
  },
  {
    name: 'Merzouga Desert',
    region: 'Draa-Tafilalet',
    terrain: 'Sahara dunes, rocky hamada, dry lakes',
    difficulty: 'Moderate to Challenging',
    duration: '1-3 hours',
    description:
      'Quad biking across the Sahara around Merzouga is a visceral, adrenaline-charged experience that puts you face-to-face with the raw desert landscape. Tours depart from the edge of Erg Chebbi and roar across the stony hamada (flat desert), through dry lake beds, past nomadic settlements, and along the fringes of the great dune field itself. The terrain here is more demanding than the Marrakech palm grove -- you will encounter soft sand patches, rocky sections, and occasional steep gradients that require confidence and decent upper body strength. Sunset tours are the most popular, timed so you finish your ride at a high point overlooking Erg Chebbi as the sun drops below the horizon. Some operators also offer buggy tours using side-by-side vehicles that accommodate two passengers, a great option for those who want the thrill without handling a quad alone.',
    highlights: ['Sahara desert landscape at its most dramatic', 'Sunset rides overlooking Erg Chebbi dunes', 'Nomadic settlement visits', 'Buggy option for non-riders', 'Combine with camel trek and overnight camp'],
    price: 'from 600 MAD',
    vehicles: 'Quads (250cc-450cc) and side-by-side buggies',
  },
  {
    name: 'Agadir Beach & Coastal Runs',
    region: 'Souss-Massa',
    terrain: 'Beach, coastal dunes, argan forest trails',
    difficulty: 'Easy to Moderate',
    duration: '2-3 hours',
    description:
      'Agadir offers a unique coastal quad biking experience that combines long stretches of hard-packed beach with inland trails through argan forests and sand dune terrain. Tours typically head south from the city along the beach toward the fishing village of Tifnit or north toward Taghazout, riding at the water\'s edge where the sand is firm and fast. At low tide, the beach becomes an enormous natural highway that stretches for kilometers. The inland sections wind through the unique argan forest ecosystem -- home to the famous tree-climbing goats -- and across coastal sand dunes with ocean views. The mix of terrain keeps the ride varied and engaging. Agadir operators tend to offer newer equipment and higher safety standards than some inland locations, making this a good choice for families and first-timers.',
    highlights: ['Beach riding at the Atlantic edge', 'Argan forest trails with goat sightings', 'Coastal dune terrain', 'Higher equipment standards', 'Family-friendly options available'],
    price: 'from 500 MAD',
    vehicles: 'Automatic quads (150cc-300cc) and buggies',
  },
  {
    name: 'Ouarzazate & Ait Ben Haddou',
    region: 'Draa-Tafilalet',
    terrain: 'Rocky desert, dry riverbeds, kasbah trails',
    difficulty: 'Moderate',
    duration: '2-4 hours',
    description:
      'The dramatic landscape around Ouarzazate -- known as the gateway to the Sahara and the backdrop for countless Hollywood films -- offers quad biking through some of Morocco\'s most cinematic terrain. Tours explore the red-rock desert south of the city, following dry riverbeds (oueds), climbing rocky plateaus, and passing ancient kasbahs and crumbling ruins. Some routes include a ride to viewpoints overlooking the UNESCO-listed Ait Ben Haddou, the famous fortified village used as a filming location for Gladiator, Game of Thrones, and Lawrence of Arabia. The terrain is rockier and more technical than Marrakech or Agadir, with genuine off-road challenges that experienced riders will appreciate. The stark beauty of the landscape -- all reds, oranges, and ochres under an immense sky -- makes this one of the most visually rewarding quad routes in Morocco.',
    highlights: ['Hollywood filming location landscape', 'Views of UNESCO Ait Ben Haddou', 'Technical rocky terrain', 'Ancient kasbahs along the route', 'Cinematic red-rock desert scenery'],
    price: 'from 500 MAD',
    vehicles: 'Manual quads (250cc-450cc) recommended',
  },
];

const practicalInfo = [
  { label: 'Price Range', value: 'from 400 MAD', detail: 'Depends on location, duration, and vehicle type' },
  { label: 'Duration', value: '1-3 hours', detail: 'Half-day and full-day options at some locations' },
  { label: 'License Required', value: 'No', detail: 'Operators provide training. Minimum age 16-18 for solo riders.' },
  { label: 'Equipment Provided', value: 'Helmet, goggles, gloves', detail: 'Included in all reputable operators' },
  { label: 'Best Season', value: 'Year-round', detail: 'Spring/autumn best; summer mornings only in desert' },
  { label: 'Clothing', value: 'Long pants, closed shoes', detail: 'Expect dust. Bring a bandana for face protection.' },
];

const seasons = [
  { season: 'March - May', rating: 5, temp: '20-32C', description: 'Perfect conditions across all locations. Comfortable temperatures, minimal dust storms, and long daylight hours. The palm grove is lush and green, and the desert is not yet punishingly hot. Book sunset tours for the best light.' },
  { season: 'June - August', rating: 3, temp: '30-45C', description: 'Desert locations (Merzouga, Ouarzazate) become extremely hot. Morning-only tours are the norm. Agadir coast stays comfortable thanks to Atlantic breeze. Marrakech palm grove is hot but manageable at dawn.' },
  { season: 'September - November', rating: 5, temp: '22-35C', description: 'Excellent conditions return. The desert cools, visibility is sharp, and tourist crowds thin after October. This is arguably the best overall season for quad biking, with reliable weather and beautiful light.' },
  { season: 'December - February', rating: 4, temp: '10-22C', description: 'Comfortable daytime temperatures everywhere. Desert mornings can be chilly. The cooler weather means you can ride midday without overheating. Occasional rain in Marrakech may muddy palm grove trails.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function QuadBikingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-quad-biking.webp"
            alt="Quad bikes racing across desert terrain with dust clouds in Morocco"
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
            <span className="text-white font-medium">Quad Biking</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Gauge className="w-4 h-4 text-[var(--color-accent)]" />
              Adventure Activity
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quad Biking &amp; Buggy Tours
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Tear through Marrakech&apos;s palm grove, race across Sahara desert flats,
              and cruise along Atlantic beaches on powerful quads and buggies across Morocco.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 400</p>
                <p className="text-sm text-white/70">MAD per person</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">1-3 hrs</p>
                <p className="text-sm text-white/70">Duration</p>
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
                  Morocco&apos;s Off-Road Playground
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco&apos;s landscape reads like a wish list for off-road enthusiasts: vast
                    palm groves, sweeping desert flats, rocky mountain trails, Atlantic beaches,
                    and ancient kasbah corridors. Quad biking and buggy tours tap into all of this,
                    offering a high-energy way to explore terrain that is inaccessible by regular
                    vehicle and too vast to cover on foot.
                  </p>
                  <p>
                    The Marrakech Palmeraie is the entry point for most visitors -- a two-hour
                    romp through dusty palm-lined trails that delivers genuine thrills without
                    requiring any prior experience. For those who crave more intensity, the desert
                    routes around Merzouga offer raw Saharan terrain where you can push powerful
                    quads across open hamada flats with nothing but sky and sand in every direction.
                    And for something entirely different, Agadir&apos;s coastal runs combine hard-packed
                    beach riding with argan forest trails, adding ocean views to the adrenaline.
                  </p>
                  <p>
                    Safety standards have improved considerably across Morocco. Reputable operators
                    now provide modern equipment, thorough safety briefings, helmets and protective
                    gear, and experienced guides who ride alongside the group. Automatic quads make
                    the experience accessible to anyone, while manual transmission machines satisfy
                    riders seeking more control and challenge.
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
                  <a href="#locations" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    View Locations
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img
                src="/images/hero-quad-biking.webp"
                alt="Quad biking through Moroccan desert terrain"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img
                src="/images/hero-buggy-desert.webp"
                alt="Buggy tour racing across Sahara desert sand and rock"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- Locations -- */}
      <section id="locations" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Ride
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Top Quad Biking Destinations
            </h2>
          </div>
          <div className="space-y-8">
            {locations.map((loc, index) => (
              <div key={loc.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          loc.difficulty === 'Easy to Moderate' ? 'bg-[var(--color-green)]/10 text-[var(--color-green)]' :
                          loc.difficulty === 'Moderate' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]' :
                          'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                        }`}>
                          <TrendingUp className="w-3 h-3 inline mr-1" />{loc.difficulty}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)]">
                        {loc.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {loc.region}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{loc.price}</p>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 justify-end mt-1">
                        <Timer className="w-3 h-3" /> {loc.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Zap className="w-3 h-3" /> {loc.vehicles}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Compass className="w-3 h-3" /> {loc.terrain}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {loc.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {loc.highlights.map((h) => (
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
            Best Seasons for Quad Biking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Year-round riding is possible, but temperatures and dust conditions vary significantly by season.
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

      {/* -- Safety -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Safety Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-secondary)]" />
                Choose Reputable Operators
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Look for operators with well-maintained equipment, insurance, proper safety gear, and English-speaking guides. Read recent reviews and avoid the cheapest options.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-secondary)]" />
                Follow the Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Always stay with the group and follow your guide. Desert terrain can be disorienting, and wandering off-route risks getting lost or encountering soft sand that can trap vehicles.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-[var(--color-secondary)]" />
                Respect Speed Limits
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Quads are powerful machines on unpredictable terrain. Rollovers happen when riders corner too fast or hit unexpected obstacles. Ride within your ability, especially on first rides.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--color-secondary)]" />
                Dust Protection
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Dust is unavoidable. Goggles are essential (provided by operators), but also bring a bandana or buff for your nose and mouth. Contact lens wearers should consider glasses instead.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Insurance Notice</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Quad biking is classified as a high-risk activity by most travel insurance providers. Check your
                  policy carefully before riding -- many standard policies exclude motorized adventure sports. Operators
                  may offer basic accident coverage, but it rarely compares to comprehensive travel insurance.
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
              { title: 'Sandboarding the Sahara', href: '/sandboarding', desc: 'Ride the dunes on a board at sunrise and sunset in Merzouga.' },
              { title: 'Mountain Biking Trails', href: '/mountain-biking', desc: 'Pedal-powered adventure through Atlas valleys and beyond.' },
              { title: 'Paragliding in Morocco', href: '/paragliding', desc: 'Soar above it all with tandem flights from Atlas and coast.' },
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

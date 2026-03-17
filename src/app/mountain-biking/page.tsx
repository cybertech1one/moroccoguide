import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Bike,
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
  Mountain,
  Route,
  Wrench,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Mountain Biking in Morocco | Atlas Trails, Dades Valley & Multi-Day Tours',
  description:
    'Complete guide to mountain biking in Morocco. Atlas Mountain trails, Jbel Saghro, Dades Valley, and Marrakech to Ouarzazate routes. Multi-day tours from 2,500 MAD. Bike rental from 300 MAD/day.',
  keywords: [
    'mountain biking Morocco',
    'Atlas Mountains MTB',
    'Morocco cycling',
    'Jbel Saghro mountain biking',
    'Dades Valley cycling',
    'Marrakech to Ouarzazate bike',
    'Morocco bike rental',
    'MTB Morocco tours',
    'Atlas trails mountain bike',
    'Morocco adventure cycling',
  ],
  openGraph: {
    title: 'Mountain Biking in Morocco - Atlas Trails & Beyond',
    description:
      'Ride world-class mountain bike trails through the Atlas Mountains, Jbel Saghro, and Dades Valley. Multi-day tours from 2,500 MAD. Bike rental from 300 MAD/day.',
    url: 'https://citytoursmorocco.com/mountain-biking',
    images: [
      {
        url: '/images/hero-mountain-biking.webp',
        width: 1200,
        height: 630,
        alt: 'Mountain biker riding a trail through the Atlas Mountains in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/mountain-biking' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Mountain Biking in Morocco',
  description:
    'Mountain biking across Morocco from High Atlas trails to desert routes through Jbel Saghro, Dades Valley, and the road from Marrakech to Ouarzazate.',
  url: 'https://citytoursmorocco.com/mountain-biking',
  image: '/images/hero-mountain-biking.webp',
  address: { '@type': 'PostalAddress', addressCountry: 'MA' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'MAD', lowPrice: 300, highPrice: 5000 },
};

/* =====================================================================
   DATA
   ===================================================================== */

const trails = [
  {
    name: 'High Atlas: Imlil to Ait Bougmez',
    region: 'High Atlas',
    distance: '120 km (multi-day)',
    elevation: '3,000m+ total climbing',
    difficulty: 'Challenging',
    duration: '4-6 days',
    description:
      'The classic multi-day Atlas crossing is one of the great mountain bike journeys in North Africa. Starting from the village of Imlil at the foot of Jebel Toubkal, the route climbs through Berber villages and walnut orchards to the Tizi n\'Ait Imi pass (2,900m), then descends into the remote and beautiful Ait Bougmez valley -- known as the "Happy Valley" for its extraordinary fertility and the warmth of its inhabitants. The riding alternates between challenging singletrack, rocky mule paths, and smoother piste (dirt road) sections. Each day involves significant climbing followed by exhilarating descents through dramatically different terrain. Accommodation is in village guesthouses and Berber homes, where you are welcomed with mint tea and generous tagine dinners. The cultural dimension of this ride -- passing through communities where the bicycle is still a curiosity -- adds a human richness that pure trail-riding cannot match. A local guide with mechanical knowledge is essential, both for navigation and for arranging logistics.',
    highlights: ['Classic trans-Atlas crossing route', 'Tizi n\'Ait Imi pass at 2,900m', 'Ait Bougmez "Happy Valley" finish', 'Village guesthouse accommodation', 'Singletrack and mule-path riding'],
    price: 'Multi-day tour: from 2,500 MAD',
  },
  {
    name: 'Jbel Saghro Circuit',
    region: 'Anti-Atlas / Pre-Saharan',
    distance: '80-100 km',
    elevation: '2,000m+ total climbing',
    difficulty: 'Moderate to Challenging',
    duration: '3-5 days',
    description:
      'Jbel Saghro is the hidden gem of Moroccan mountain biking. This volcanic massif between the High Atlas and the Sahara offers spectacular riding through a landscape of bizarre rock formations, deep gorges, and vast, empty plateaus that resemble the surface of Mars. The trails here are less frequented than the popular Atlas routes, meaning you ride through genuine wilderness where encounters with nomadic shepherds and their flocks are more common than with other cyclists. The terrain is predominantly rocky piste and singletrack, with technical descents through boulder-strewn gorges and long, grinding climbs across exposed plateaus. Bivouac camping under star-filled skies is part of the experience, though guesthouse accommodation is available in some villages. The combination of geological drama, desert light, and total solitude makes Jbel Saghro one of the most memorable biking experiences in all of Morocco.',
    highlights: ['Volcanic landscape unlike anywhere else in Morocco', 'True wilderness riding with minimal traffic', 'Nomadic encounters and bivouac camping', 'Dramatic rock formations and gorges', 'Pre-Saharan light and desert atmospherics'],
    price: 'Multi-day tour: from 2,000 MAD',
  },
  {
    name: 'Dades Valley & Todra Gorge',
    region: 'Draa-Tafilalet',
    distance: '50-80 km',
    elevation: '1,500m total climbing',
    difficulty: 'Moderate',
    duration: '2-3 days',
    description:
      'The Dades Valley offers one of Morocco\'s most scenic and accessible multi-day rides. The route follows the valley from the town of Boumalne Dades through the famous Dades Gorge, past the "Monkey Fingers" rock formations, and along to the equally dramatic Todra Gorge. The riding is predominantly on piste (unsealed road) with some tarmac sections, making it suitable for strong intermediate riders. The gorges are the highlight -- narrow canyons with walls rising hundreds of meters on either side, through which a river runs and the road squeezes along the valley floor. Between the gorges, the route passes through a patchwork of kasbahs, palm oases, and Berber villages connected by red-earth trails. Accommodation is in valley guesthouses and kasbahs with good food and comfortable beds. This route is achievable as a self-guided ride for experienced navigators, though a local guide adds immeasurably to the experience.',
    highlights: ['Spectacular Dades and Todra gorges', 'Kasbah and palm oasis scenery', 'Achievable for strong intermediate riders', 'Guesthouse and kasbah accommodation', '"Monkey Fingers" rock formations'],
    price: 'Multi-day tour: from 1,800 MAD',
  },
  {
    name: 'Marrakech Palmeraie & Foothills',
    region: 'Marrakech-Safi',
    distance: '25-50 km',
    elevation: '200-500m climbing',
    difficulty: 'Easy to Moderate',
    duration: 'Half day or full day',
    description:
      'For riders based in Marrakech who want a mountain biking taste without committing to a multi-day expedition, the Palmeraie and Atlas foothills offer excellent day-ride options. The most popular route heads through the palm grove, crosses dry riverbeds, passes through small villages, and climbs gently into the foothills where views of the Atlas range open up spectacularly. Longer versions continue to the Lalla Takerkoust lake (a reservoir with turquoise water) or to the valley of Ourika. The terrain is mostly flat to gently rolling, on a mix of dirt tracks, farm roads, and sandy paths. It is perfect for intermediate riders, families with older children, and anyone wanting to see the Marrakech hinterland from the saddle. Several operators in Marrakech offer guided rides with quality rental bikes, hotel pickup, and support vehicles.',
    highlights: ['Easy access from Marrakech hotels', 'Palm grove and foothill trails', 'Optional extension to Lalla Takerkoust lake', 'Suitable for families and intermediate riders', 'Half-day and full-day options'],
    price: 'Day ride: from 500 MAD (guided, bike included)',
  },
];

const practicalInfo = [
  { label: 'Bike Rental', value: 'from 300 MAD/day', detail: 'Quality hardtail MTB. Full-suspension from 500 MAD/day.' },
  { label: 'Multi-Day Tours', value: 'from 2,000 MAD', detail: 'Includes guide, accommodation, meals, and support vehicle.' },
  { label: 'Day Rides', value: 'from 500 MAD', detail: 'Includes guide, bike rental, helmet, and hotel pickup.' },
  { label: 'Best Season', value: 'March-May, Sep-Nov', detail: 'Avoid summer heat; winter cold at altitude.' },
  { label: 'Fitness Level', value: 'Moderate to high', detail: 'Day rides accessible; multi-day requires strong fitness.' },
  { label: 'Bring Your Own Bike', value: 'Possible', detail: 'Flights to Marrakech accept bike boxes. Ship ahead for tours.' },
];

const seasons = [
  { season: 'March - May', rating: 5, temp: '12-28C', description: 'The best season for Atlas and desert riding. Temperatures are ideal, wildflowers bloom, rivers run, and the mountain scenery is at its most dramatic with snow on the peaks above and green valleys below. Book tours well in advance.' },
  { season: 'June - August', rating: 2, temp: '25-45C', description: 'Too hot for most routes. Only high-altitude Atlas trails above 2,500m are comfortable. Desert routes (Jbel Saghro, Dades) are dangerously hot. Consider dawn-to-noon rides only at lower elevations.' },
  { season: 'September - November', rating: 5, temp: '15-30C', description: 'Outstanding conditions return. Clear, dry weather with comfortable temperatures. The desert routes come into their own as heat abates. Autumn is peak season for Jbel Saghro and Dades Valley.' },
  { season: 'December - February', rating: 3, temp: '2-18C', description: 'Atlas passes may be snow-blocked above 2,500m. Valley routes and lower trails remain rideable but chilly. Short days limit riding time. The Marrakech foothills and southern desert routes are best in winter.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MountainBikingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-mountain-biking.webp"
            alt="Mountain biker riding a trail through the Atlas Mountains of Morocco"
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
            <span className="text-white font-medium">Mountain Biking</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Bike className="w-4 h-4 text-[var(--color-accent)]" />
              Adventure Activity
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mountain Biking in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Ride world-class trails through the Atlas Mountains, volcanic desert massifs,
              and dramatic gorges. From half-day Marrakech rides to epic multi-day trans-Atlas
              crossings.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 300</p>
                <p className="text-sm text-white/70">MAD bike rental/day</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Half to multi-day</p>
                <p className="text-sm text-white/70">Duration options</p>
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
                  Two Wheels, Infinite Terrain
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco is an emerging giant in the mountain biking world. The country offers
                    an extraordinary range of terrain -- from the high alpine passes of the Atlas
                    to the volcanic desert landscapes of Jbel Saghro, from the narrow gorges of
                    the Dades and Todra valleys to the gentle palm grove trails around Marrakech.
                    What ties it all together is consistently rideable weather, an extensive network
                    of unpaved trails and mule paths, and a landscape of jaw-dropping beauty that
                    rewards every pedal stroke.
                  </p>
                  <p>
                    The riding culture is still young, which means trails are uncrowded, locals are
                    delighted to see cyclists, and the infrastructure -- guides, bike shops, supported
                    tours -- has reached a quality that makes Morocco a practical destination for
                    serious riders. Several Marrakech-based operators now offer fully supported
                    multi-day tours with quality rental bikes, experienced local guides, support
                    vehicles carrying luggage and spare parts, and carefully curated routes that
                    maximize singletrack and scenic reward.
                  </p>
                  <p>
                    Whether you are looking for a half-day spin through the Marrakech hinterland
                    or a week-long expedition crossing the Atlas from north to south, Morocco
                    delivers mountain biking that stands alongside the best in Europe and beyond --
                    at a fraction of the cost and with a cultural richness that no Alpine trail can match.
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
                  <a href="#trails" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    View Trails
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Trails -- */}
      <section id="trails" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Ride
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Top Mountain Biking Routes
            </h2>
          </div>
          <div className="space-y-8">
            {trails.map((trail, index) => (
              <div key={trail.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                          Route {index + 1}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          trail.difficulty === 'Easy to Moderate' ? 'bg-[var(--color-green)]/10 text-[var(--color-green)]' :
                          trail.difficulty === 'Moderate' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]' :
                          trail.difficulty === 'Moderate to Challenging' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]' :
                          'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                        }`}>
                          <TrendingUp className="w-3 h-3 inline mr-1" />{trail.difficulty}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)]">
                        {trail.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {trail.region}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{trail.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Route className="w-3 h-3" /> {trail.distance}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Mountain className="w-3 h-3" /> {trail.elevation}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Clock className="w-3 h-3" /> {trail.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {trail.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {trail.highlights.map((h) => (
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
            Best Seasons for Riding
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

      {/* -- Gear & Preparation -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Gear and Preparation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[var(--color-secondary)]" />
                Bike Choice
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A hardtail MTB with 29-inch wheels handles most Moroccan terrain. Full-suspension is recommended for multi-day Atlas and Saghro routes. Ensure tyres are tubeless with sealant; thorns are common.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-secondary)]" />
                Essential Spares
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Carry spare tubes, tyre levers, a multi-tool, chain links, and a pump. Bike shops are rare outside Marrakech. Tour operators carry comprehensive spare parts in support vehicles.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Mountain className="w-4 h-4 text-[var(--color-secondary)]" />
                Fitness Preparation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Multi-day tours involve 4-8 hours of riding per day with significant climbing. Start preparing 6-8 weeks before with regular rides including hill work. Altitude effects begin above 2,500m.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Route className="w-4 h-4 text-[var(--color-secondary)]" />
                Navigation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Download offline maps (Maps.me or Komoot) before your trip. Phone signal is unreliable in mountain areas. A GPS device is recommended for self-guided rides. Guided tours handle all navigation.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Road Safety</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  On sections that share tarmac roads, be extremely cautious of Moroccan driving standards. Overtaking
                  on blind corners is common, road shoulders are narrow, and vehicles rarely anticipate cyclists.
                  Wear high-visibility clothing on road sections and use front and rear lights at all times.
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
              { title: 'Quad Biking Adventures', href: '/quad-biking', desc: 'Motorized off-road thrills in the desert, palm grove, and beach.' },
              { title: 'Zip-Lining in the Atlas', href: '/zip-lining', desc: 'Soar across mountain gorges on cables near Marrakech.' },
              { title: 'Paragliding in Morocco', href: '/paragliding', desc: 'See the Atlas from above on tandem paragliding flights.' },
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

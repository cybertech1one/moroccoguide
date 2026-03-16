import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Tent,
  Star,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Sun,
  Moon,
  Sunrise,
  Thermometer,
  Users,
  ArrowRight,
  Sparkles,
  Mountain,
  Camera,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Sahara Desert Glamping | Luxury Camping Under the Stars in Morocco',
  description:
    'Experience luxury desert glamping in Morocco\'s Sahara at Erg Chebbi and Erg Chigaga. Complete guide to luxury desert camps, what to expect, pricing ($150-500/night), best seasons, packing lists, and booking tips for an unforgettable night under the stars.',
  keywords: [
    'Sahara glamping Morocco',
    'luxury desert camp Morocco',
    'Erg Chebbi glamping',
    'Erg Chigaga luxury camp',
    'Morocco desert camping',
    'Sahara desert experience',
    'luxury bivouac Morocco',
    'Merzouga desert camp',
    'Morocco glamping',
    'desert stargazing Morocco',
    'camel trek Sahara',
    'Sahara sunset Morocco',
    'luxury tent Sahara',
    'Morocco desert tour',
  ],
  openGraph: {
    title: 'Sahara Desert Glamping - Luxury Camping in Morocco',
    description:
      'Sleep under a billion stars in a luxury desert camp. Complete guide to Sahara glamping at Erg Chebbi and Erg Chigaga with pricing, tips, and booking advice.',
    url: 'https://cityguide.ma/experiences/sahara-glamping',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Luxury desert camp with tents in the Sahara dunes at sunset',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/experiences/sahara-glamping' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Sahara Desert Glamping Experience',
  description:
    'Luxury desert camping under the stars in Morocco\'s Sahara Desert at Erg Chebbi and Erg Chigaga, featuring premium tented accommodation, camel treks, traditional Berber music, and stargazing.',
  url: 'https://cityguide.ma/experiences/sahara-glamping',
  image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1200&h=630&fit=crop',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Draa-Tafilalet',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.0986,
    longitude: -3.9919,
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: 150,
    highPrice: 500,
    offerCount: 4,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.9,
    reviewCount: 2840,
    bestRating: 5,
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

const campTiers = [
  {
    tier: 'Standard Desert Camp',
    price: '$30-80/night',
    description:
      'Basic Berber-style bivouac with shared tents, foam mattresses, and communal facilities. Authentic and affordable, these camps deliver the core Sahara experience without luxury frills. Expect simple blankets, a shared bucket shower, and meals around a communal campfire. Perfect for budget travelers and backpackers who want the genuine desert experience.',
    features: ['Shared tents (4-8 beds)', 'Foam mattresses & blankets', 'Communal dining tent', 'Campfire with Berber music', 'Shared bathroom facilities', 'Basic camel trek included'],
    bestFor: 'Budget travelers, backpackers, groups',
  },
  {
    tier: 'Mid-Range Luxury Camp',
    price: '$150-250/night',
    description:
      'Comfortable private tents with proper beds, en-suite bathrooms, and curated dining experiences. These camps strike the perfect balance between authenticity and comfort. Expect real mattresses, hot water showers, atmospheric lighting, and multi-course dinners served under the stars. Most camps in this range are located in the Erg Chebbi dune field near Merzouga.',
    features: ['Private tents with real beds', 'En-suite bathrooms with hot water', 'Multi-course Moroccan dinner', 'Sunrise & sunset camel treks', 'Berber music & campfire', 'Sandboarding included'],
    bestFor: 'Couples, families, comfort seekers',
  },
  {
    tier: 'Premium Glamping',
    price: '$250-500/night',
    description:
      'Five-star desert lodges with plush king beds, luxury linens, private terraces, and gourmet dining. These exclusive camps offer a level of refinement that rivals any boutique hotel, set against the dramatic backdrop of towering sand dunes. Expect air conditioning or heating, rainfall showers, curated wine lists, private stargazing sessions, and personalized itineraries.',
    features: ['King beds with luxury linens', 'Private terrace with dune views', 'Air conditioning/heating', 'Gourmet multi-course dining', 'Private stargazing with telescope', 'Spa treatments available'],
    bestFor: 'Honeymooners, luxury travelers, special occasions',
  },
  {
    tier: 'Ultra-Luxury Private Camp',
    price: '$500+/night',
    description:
      'Bespoke, completely private camps set up exclusively for your party in a remote dune location. Every detail is customized, from the menu to the entertainment to the location of your camp. Butler service, vintage champagne on the dunes, private musicians, and helicopter transfers are all possible. This is the Sahara at its most exclusive and theatrical.',
    features: ['Fully private camp setup', 'Butler & concierge service', 'Custom gourmet menu', 'Helicopter or private 4x4 transfer', 'Exclusive dune location', 'Customized activities & entertainment'],
    bestFor: 'VIP travelers, proposals, milestone celebrations',
  },
];

const locations = [
  {
    name: 'Erg Chebbi (Merzouga)',
    description:
      'The most famous and accessible dune field in Morocco, Erg Chebbi rises up to 150 meters above the surrounding hamada (rocky desert) and stretches roughly 28 kilometers from north to south. The dunes glow a vivid orange at sunrise and sunset, creating the quintessential Saharan panorama that defines Morocco\'s desert identity. The gateway town of Merzouga is approximately 9 hours by road from Marrakech or 6 hours from Fes, making it an ideal destination for multi-day tours. Most luxury camps are concentrated along the western edge of the dune field, offering easy access to the tallest dunes while remaining reachable by camel or 4x4 from the town. Erg Chebbi is also the epicenter of Saharan tourism infrastructure in Morocco, meaning you will find the widest range of camp options from budget to ultra-luxury.',
    access: '9 hours from Marrakech, 6 hours from Fes by road. Also reachable by flight to Errachidia airport (1.5 hours from Merzouga).',
    bestFor: 'First-time visitors, those wanting variety of camp options, accessible luxury',
    highlights: ['Tallest dunes in Morocco (up to 150m)', 'Widest range of camps', 'Sunrise camel treks', 'Gnaoua music festivals', 'Nearby Khamlia village'],
  },
  {
    name: 'Erg Chigaga (M\'hamid)',
    description:
      'For travelers seeking a wilder, more remote desert experience, Erg Chigaga is Morocco\'s other great sand sea. Located about 60 kilometers from the frontier town of M\'hamid el Ghizlane, it can only be reached by 4x4 across flat stony desert, which gives the journey itself an expedition feel. The dune field is even larger than Erg Chebbi, stretching roughly 40 kilometers, and the sense of isolation is dramatically more intense. Far fewer tourists make it here, so you are more likely to have entire sections of dunes to yourself. The camps at Erg Chigaga tend to be more exclusive and intimate, often accommodating fewer than 20 guests. The surrounding landscape includes ancient lake beds, fossilized seabeds, and the dry Draa River valley, making the approach as memorable as the destination.',
    access: '1.5-2 hours by 4x4 from M\'hamid el Ghizlane. M\'hamid is approximately 9 hours from Marrakech.',
    bestFor: 'Experienced travelers, those seeking solitude and remoteness, luxury seekers',
    highlights: ['Largest dune field in Morocco', 'Extreme remoteness & solitude', 'Fewer tourists', 'Ancient fossil sites', 'Dramatic 4x4 approach'],
  },
];

const itinerary = [
  {
    time: 'Day 1 - Afternoon',
    title: 'Arrival & Camel Trek',
    description: 'Arrive at the meeting point in Merzouga or M\'hamid, where you transfer to camel or 4x4 for the journey into the dunes. The camel trek typically takes 1-1.5 hours, during which you cross the stone desert before the golden dunes appear on the horizon. As the sun begins to descend, the dunes transform from gold to deep amber to burnt sienna.',
    icon: Sun,
  },
  {
    time: 'Day 1 - Sunset',
    title: 'Dune Sunset & Camp Welcome',
    description: 'Climb a high dune near camp for the sunset panorama. Watch the endless sea of sand shift through every warm color as the sun drops below the horizon. Return to camp for a welcome glass of mint tea and settle into your tent as the camp is illuminated by lanterns and candles.',
    icon: Sunrise,
  },
  {
    time: 'Day 1 - Evening',
    title: 'Dinner & Berber Music',
    description: 'A multi-course Moroccan dinner is served under the stars, typically starting with salads and harira soup, followed by a tagine or mechoui (slow-roasted lamb), and finishing with fruit and pastries. After dinner, Berber musicians gather around the campfire, playing traditional drums and singing songs that have echoed across the Sahara for centuries.',
    icon: Moon,
  },
  {
    time: 'Day 1 - Night',
    title: 'Stargazing',
    description: 'With zero light pollution, the Sahara sky is one of the clearest on Earth. The Milky Way stretches from horizon to horizon in vivid detail. Premium camps provide telescopes and stargazing guides who identify constellations, planets, and deep-sky objects. Many guests describe the desert night sky as the most unforgettable part of the entire experience.',
    icon: Star,
  },
  {
    time: 'Day 2 - Dawn',
    title: 'Sunrise Over the Dunes',
    description: 'Wake before dawn for a short climb up the nearest high dune. Watch the Sahara come alive as the first rays of sunlight create dramatic shadows between the dune ridges and paint the sand in shades of pink, gold, and copper. This is the moment that defines a Sahara trip -- silence, beauty, and the profound solitude of the desert at dawn.',
    icon: Sunrise,
  },
  {
    time: 'Day 2 - Morning',
    title: 'Breakfast & Return',
    description: 'Return to camp for a traditional Moroccan breakfast of msemen flatbread, Berber crepes, honey, jam, fresh fruit, and mint tea or coffee. Pack your belongings and begin the return journey by camel or 4x4. Most guests depart by mid-morning, though extended stays and multi-night options are available.',
    icon: Sun,
  },
];

const whatToBring = [
  { item: 'Warm layers for night', note: 'Desert temperatures can drop below 5C (41F) in winter, even 0C in December/January' },
  { item: 'Sunscreen & sunglasses', note: 'UV exposure is intense in the open desert, even in cooler months' },
  { item: 'Headscarf or shemagh', note: 'Protection from sun, wind, and sand. Your camp may provide traditional turbans' },
  { item: 'Comfortable closed shoes', note: 'For walking on rocky terrain. Sandals are fine at camp but not for hikes' },
  { item: 'Camera with extra batteries', note: 'Cold desert nights drain batteries fast. A phone power bank is essential' },
  { item: 'Small flashlight or headlamp', note: 'Useful for navigating camp at night. Red light mode preserves night vision for stargazing' },
  { item: 'Toiletries & medications', note: 'Basic camps may have limited supplies. Bring any prescription medications you need' },
  { item: 'Cash in Moroccan dirhams', note: 'For tips to camp staff and camel handlers. 50-100 MAD per person is customary' },
];

const bestSeasons = [
  {
    season: 'October - November',
    rating: 5,
    temp: '15-28C (59-82F)',
    description: 'The ideal window. Days are warm but not scorching, nights are cool but not freezing, and the autumn light creates extraordinary photographic conditions. The busy tourist season has not yet reached its peak, so prices are reasonable and camps are not overcrowded.',
  },
  {
    season: 'March - April',
    rating: 5,
    temp: '18-30C (64-86F)',
    description: 'Spring brings mild temperatures and occasionally dramatic skies as the last winter weather systems pass through. Wildflowers may appear in the surrounding oases. Another excellent shoulder-season window with moderate crowds.',
  },
  {
    season: 'December - February',
    rating: 4,
    temp: '5-20C (41-68F)',
    description: 'Crystalline night skies make this the best season for stargazing, and the low-angle winter light is spectacular for photography. However, nights can be genuinely cold, dropping below freezing in December and January. Luxury camps with heating are strongly recommended.',
  },
  {
    season: 'May - September',
    rating: 2,
    temp: '30-45C+ (86-113F+)',
    description: 'Summer heat is extreme, often exceeding 45C (113F). Most reputable camps close or operate at reduced capacity. While some budget camps remain open, the experience is physically demanding and potentially dangerous. Not recommended for most travelers.',
  },
];

const relatedExperiences = [
  {
    title: 'Moroccan Cooking Class',
    slug: '/experiences/moroccan-cooking-class',
    image: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=400&q=80',
    duration: '4-5 hours',
    price: 'From $30',
  },
  {
    title: 'Traditional Hammam Ritual',
    slug: '/experiences/hammam-ritual',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
    duration: '1.5-2 hours',
    price: 'From $10',
  },
  {
    title: 'Atlas Mountains Day Hike',
    slug: '/experiences/atlas-day-hike',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80',
    duration: 'Full day',
    price: 'From $40',
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function SaharaGlampingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1800&q=80"
            alt="Luxury desert glamping tents beneath the starry Sahara sky"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/experiences" className="hover:text-white transition-colors">
              Experiences
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Sahara Glamping</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Tent className="w-4 h-4 text-[var(--color-accent)]" />
              Nature & Luxury
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sahara Desert Glamping
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Sleep beneath a billion stars in a luxury tented camp among the towering
              golden dunes of the Sahara. An experience that transforms every traveler
              who surrenders to the silence and vastness of the desert.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  $150-500
                </p>
                <p className="text-sm text-white/70">Per Night</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  1-3
                </p>
                <p className="text-sm text-white/70">Nights</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  4.9
                </p>
                <p className="text-sm text-white/70">Rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  Why the Sahara Changes Everything
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    There is a moment, somewhere between the last traces of civilization and the first
                    towering dunes, when the Sahara begins to work on you. The noise of daily life
                    fades, replaced by a silence so complete it becomes a sound of its own. The horizon
                    stretches without interruption in every direction. The sky above is larger and deeper
                    than anything you have experienced. This is the moment that draws over a million
                    travelers to Morocco&apos;s desert each year.
                  </p>
                  <p>
                    Sahara glamping has evolved dramatically over the past decade from basic Berber bivouacs
                    to some of the most sophisticated tented accommodations on the planet. Today, you can
                    sleep in a king-sized bed with Egyptian cotton sheets, shower under hot water in a
                    marble-tiled bathroom, dine on a five-course meal prepared by a private chef, and
                    stargaze through a professional telescope -- all while surrounded by an ocean of
                    golden sand dunes that have remained unchanged for millennia.
                  </p>
                  <p>
                    The two primary destinations for this experience are Erg Chebbi near Merzouga and
                    Erg Chigaga near M&apos;hamid. Each offers a distinct personality. Erg Chebbi is more
                    accessible, with towering dunes that glow vivid orange at sunrise. Erg Chigaga is
                    wilder and more remote, requiring a proper 4x4 expedition to reach, but rewarding
                    visitors with a sense of genuine isolation that is increasingly rare in the modern
                    world.
                  </p>
                  <p>
                    Whether you choose a mid-range camp with comfortable private tents or an ultra-luxury
                    property with butler service and heated plunge pools, the fundamental magic remains
                    the same: the Sahara strips everything back to essentials. Fire, stars, silence,
                    sand, and the profound realization of how vast and beautiful the natural world truly
                    is. It is, without exaggeration, one of the most transformative travel experiences
                    available anywhere on Earth.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Info Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-5">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Price Range</p>
                      <p className="text-sm text-[var(--text-secondary)]">$150-500/night (luxury). Budget from $30/night.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Duration</p>
                      <p className="text-sm text-[var(--text-secondary)]">1-3 nights recommended. Most popular: 1 night.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Best Time</p>
                      <p className="text-sm text-[var(--text-secondary)]">October-November, March-April. Avoid June-August.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Locations</p>
                      <p className="text-sm text-[var(--text-secondary)]">Erg Chebbi (Merzouga) or Erg Chigaga (M&apos;hamid)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Difficulty</p>
                      <p className="text-sm text-[var(--text-secondary)]">Easy. Suitable for all ages and fitness levels.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Group Size</p>
                      <p className="text-sm text-[var(--text-secondary)]">Couples to groups of 20+. Private camps available.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a
                    href="#camp-tiers"
                    className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors"
                  >
                    View Camp Options
                  </a>
                  <p className="text-xs text-[var(--text-muted)] text-center mt-3">
                    Book directly with camps for the best rates
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Typical Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Your Desert Journey
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              A Night in the Sahara
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Here is what a typical one-night glamping experience looks like, from afternoon arrival to morning departure.
            </p>
          </div>
          <div className="space-y-0">
            {itinerary.map((step, index) => (
              <div key={step.title} className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  {index < itinerary.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border)] my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wider mb-1">
                    {step.time}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Where to Go: Two Iconic Dune Fields
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s two great sand seas each offer a distinct personality and level of remoteness.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div key={loc.name} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-3">
                  {loc.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {loc.description}
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <p className="text-sm text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">Access:</span> {loc.access}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <p className="text-sm text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">Best for:</span> {loc.bestFor}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {loc.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Camp Tiers & Pricing ── */}
      <section id="camp-tiers" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Camp Tiers & Pricing
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From authentic budget bivouacs to ultra-luxury private camps, there is a Sahara experience for every budget and style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campTiers.map((camp, index) => (
              <div key={camp.tier} className={`card-moroccan p-6 flex flex-col ${index === 2 ? 'ring-2 ring-[var(--color-accent)]' : ''}`}>
                {index === 2 && (
                  <div className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs font-semibold mb-3">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-1">
                  {camp.tier}
                </h3>
                <p className="text-2xl font-bold text-[var(--color-secondary)] mb-3">
                  {camp.price}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {camp.description}
                </p>
                <div className="space-y-2 mb-4">
                  {camp.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <p className="mt-auto text-xs text-[var(--text-muted)] pt-4 border-t border-[var(--border)]">
                  <span className="font-semibold">Best for:</span> {camp.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time to Go ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Best Time for Sahara Glamping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The desert has extreme seasonal variations. Choosing the right month dramatically impacts your comfort and enjoyment.
          </p>
          <div className="space-y-4">
            {bestSeasons.map((s) => (
              <div key={s.season} className="card-moroccan p-5 flex flex-col sm:flex-row gap-4">
                <div className="sm:w-48 shrink-0">
                  <h3 className="font-bold text-[var(--text-primary)]">{s.season}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < s.rating
                            ? 'text-[var(--color-accent)] fill-[var(--color-accent)]'
                            : 'text-[var(--border)]'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1">
                    <Thermometer className="w-3 h-3" />
                    {s.temp}
                  </p>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Bring ── */}
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

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Important Note</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Most luxury camps provide towels, toiletries, and warm blankets. Budget camps typically do not.
                  Confirm what is included when you book. All camps are off-grid, so charge your devices fully before
                  departure. Premium camps may have solar-powered charging stations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to help you choose the right camp and get the best experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Book Direct When Possible</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Many camps offer better rates and complimentary upgrades when you book directly through their
                website or WhatsApp rather than through an OTA. You also get more flexibility to customize
                your itinerary and add special requests like birthday celebrations or private dining.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Consider a Multi-Day Package</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                While one night delivers the core experience, two nights allows you to truly unwind and
                explore. You can take a longer camel trek to remote dunes, try sandboarding, visit a
                nearby oasis or nomad camp, and experience the desert at different times of day.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Book Transport Together</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Most camps offer package deals that include transport from Marrakech or Fes, often via scenic
                stops at Ait Benhaddou, the Dades Gorges, and the Todra Gorge. These multi-day routes
                (typically 2-3 days each way) transform the journey into an adventure of its own.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Read Recent Reviews</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Camp quality can change significantly between seasons. Check reviews from the past 3-6 months
                on Google Maps, TripAdvisor, and Booking.com. Pay particular attention to comments about
                food quality, bathroom cleanliness, and the authenticity of the Berber music experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Experiences
            </h2>
            <p className="text-[var(--text-secondary)]">
              Combine your desert adventure with these other unforgettable Moroccan experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedExperiences.map((exp) => (
              <Link
                key={exp.slug}
                href={exp.slug}
                className="card-moroccan group overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{exp.duration}</span>
                    <span className="font-semibold text-[var(--color-secondary)]">{exp.price}</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                    Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
            >
              View All Experiences
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

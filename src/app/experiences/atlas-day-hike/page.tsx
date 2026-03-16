import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  Star,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle,
  Users,
  ArrowRight,
  AlertTriangle,
  Thermometer,
  TrendingUp,
  Compass,
  Footprints,
  Sun,
  ShieldCheck,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Atlas Mountains Day Hike from Marrakech | Imlil, Toubkal Base & Ourika Valley',
  description:
    'Complete guide to day hiking in Morocco\'s Atlas Mountains from Marrakech. Routes through Imlil, Toubkal base camp, and Ourika Valley. Difficulty levels, guide requirements, pricing ($40-120/person), best seasons, and packing lists.',
  keywords: [
    'Atlas Mountains day hike',
    'hiking from Marrakech',
    'Imlil hike Morocco',
    'Toubkal base camp',
    'Ourika Valley hike',
    'Morocco trekking day trip',
    'Atlas Mountains guide',
    'Berber village hike',
    'Morocco hiking guide',
    'High Atlas trekking',
    'Morocco mountain hiking',
    'Imlil to Armed hike',
    'Ourika waterfalls',
    'Atlas Mountains best season',
  ],
  openGraph: {
    title: 'Atlas Mountains Day Hike from Marrakech - CityGuide',
    description:
      'Trek through Berber villages, walnut groves, and dramatic valleys in the High Atlas. Routes from Marrakech with guides, pricing, and seasonal advice.',
    url: 'https://citytoursmorocco.com/experiences/atlas-day-hike',
    images: [
      {
        url: '/images/hero-trekking.webp',
        width: 1200,
        height: 630,
        alt: 'Trekking path through the Atlas Mountains with Berber villages below',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/experiences/atlas-day-hike' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Atlas Mountains Day Hike from Marrakech',
  description:
    'Day hiking excursions from Marrakech into the High Atlas Mountains, featuring routes through Imlil, Toubkal base camp, and the Ourika Valley with Berber village visits.',
  url: 'https://citytoursmorocco.com/experiences/atlas-day-hike',
  image: '/images/hero-trekking.webp',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Marrakech-Safi',
    addressCountry: 'MA',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: 40,
    highPrice: 120,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.8,
    reviewCount: 1950,
    bestRating: 5,
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

const routes = [
  {
    name: 'Imlil Valley & Berber Villages',
    difficulty: 'Easy to Moderate',
    distance: '8-12 km',
    elevation: '400-600m gain',
    duration: '4-6 hours hiking',
    description:
      'The most popular and accessible day hike from Marrakech, and for good reason. The gateway village of Imlil sits at 1,740 meters in a lush valley surrounded by walnut and cherry trees, with the snow-capped peak of Jebel Toubkal visible in the distance. From Imlil, well-worn trails lead through a network of traditional Berber villages -- Armed (Aroumd), Tachedirt, and Tinerhourhine -- where life has changed little in centuries. Stone and mud-brick houses cling to the hillsides, terraced fields cascade down the valleys, and irrigation channels bring snowmelt to orchards and gardens. Your guide introduces you to local families, explains Berber agricultural traditions, and stops for mint tea at a village home. The hiking is straightforward with moderate inclines, suitable for anyone with basic fitness. The drive from Marrakech takes approximately 1.5 hours, following the Tizi n\'Test road through increasingly dramatic mountain scenery.',
    highlights: ['Traditional Berber village visits', 'Mint tea with local families', 'Walnut and cherry orchards', 'Views of Jebel Toubkal', 'Traditional lunch in village home'],
    bestFor: 'Families, first-time hikers, cultural immersion',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Toubkal Base Camp (Refuge)',
    difficulty: 'Challenging',
    distance: '14-16 km',
    elevation: '1,200m gain',
    duration: '7-9 hours hiking',
    description:
      'For experienced and fit hikers seeking a serious mountain challenge within a single day, the trek from Imlil to the Toubkal refuge (3,207m) and back is one of the most rewarding day hikes in North Africa. The trail begins gently through the village of Armed, then steepens dramatically as it follows the Mizane Valley upward through increasingly barren, rocky terrain. Above the treeline, the landscape transforms into a stark alpine environment of scree slopes, snowfields (in winter and spring), and exposed ridgelines. The Toubkal refuge, operated by the Club Alpin Francais, sits in a dramatic cirque below the summit of North Africa\'s highest peak (4,167m). The views from the refuge are extraordinary -- a panorama of jagged peaks, deep valleys, and, on clear days, the distant shimmer of the Sahara. This is a demanding full-day hike requiring good fitness, proper footwear, and an early start (departure from Imlil by 7:00 AM recommended). The trail is well-marked but rocky and exposed in sections.',
    highlights: ['North Africa\'s highest mountain views', 'Alpine terrain above treeline', 'Historic mountain refuge', 'Dramatic Mizane Valley', 'Serious mountain achievement'],
    bestFor: 'Experienced hikers, fitness enthusiasts, mountain lovers',
    image: '/images/hero-trekking.webp',
  },
  {
    name: 'Ourika Valley & Waterfalls',
    difficulty: 'Easy',
    distance: '4-6 km',
    elevation: '200-300m gain',
    duration: '2-3 hours hiking',
    description:
      'The Ourika Valley is the closest mountain escape from Marrakech (just 45 minutes by car) and offers the gentlest introduction to the Atlas Mountains. The valley follows the Ourika River through a narrow gorge lined with small villages, craft shops, and riverside restaurants. The main hiking destination is the Setti Fatma waterfalls, a series of seven cascading falls that tumble down the mountainside above the village. Most visitors hike to the first two waterfalls (a moderate 30-45 minute climb on rocky paths) and enjoy lunch at one of the riverside restaurants below. Adventurous hikers can continue to the upper falls, though the path becomes more challenging and sometimes requires scrambling. The Ourika Valley is particularly beautiful in spring when the almond and cherry trees bloom, and the river runs high with snowmelt. It is also home to several organic gardens and a saffron cooperative that welcome visitors.',
    highlights: ['Setti Fatma waterfalls', 'Riverside lunch with mountain views', 'Organic garden visits', 'Saffron cooperative', 'Easy access from Marrakech'],
    bestFor: 'Families with children, casual walkers, half-day trips',
    image: '/images/hero-desert.webp',
  },
];

const pricingOptions = [
  {
    type: 'Group Day Trip',
    price: '$40-60/person',
    includes: ['Round-trip transport from Marrakech', 'Licensed mountain guide', 'Guided village walk', 'Traditional Berber lunch', 'Mint tea at local home'],
    groupSize: '6-12 people',
    description: 'The most affordable option. Join a small group for a well-organized day in the mountains with an English-speaking guide, comfortable minibus transport, and a traditional lunch.',
  },
  {
    type: 'Private Guided Hike',
    price: '$80-120/person',
    includes: ['Private 4x4 or minibus transport', 'Private licensed mountain guide', 'Customized route and pace', 'Traditional lunch with family', 'Mint tea ceremonies', 'Hotel pickup/dropoff'],
    groupSize: '1-6 people',
    description: 'A private guide and vehicle mean you can customize the route, take detours to hidden villages, linger at viewpoints, and hike at your own pace. Ideal for photographers, families, and anyone wanting a more intimate experience.',
  },
  {
    type: 'Premium Adventure Package',
    price: '$100-180/person',
    includes: ['Private luxury 4x4 transport', 'Expert mountain guide', 'Gourmet picnic lunch', 'Mule support for gear', 'Professional photography', 'Evening hammam (optional add-on)'],
    groupSize: '2-8 people',
    description: 'The ultimate Atlas experience. Premium transport, an expert guide with deep local knowledge, gourmet picnic lunch with wine on a scenic terrace, and optional add-ons like a hammam visit on return to Marrakech.',
  },
];

const bestSeasons = [
  {
    season: 'March - May (Spring)',
    rating: 5,
    temp: '10-22C at altitude',
    description: 'The best overall season. Wildflowers carpet the valleys, almond and cherry trees blossom, rivers run full with snowmelt, and temperatures are ideal for hiking. The higher routes may still have snow patches, adding drama to the scenery. Spring is peak season, so book guides in advance.',
  },
  {
    season: 'September - November (Autumn)',
    rating: 5,
    temp: '8-20C at altitude',
    description: 'Clear, crisp days with outstanding visibility. The harvest season brings walnut and apple picking in Imlil, and the autumn light is spectacular for photography. Crowds thin after October. A superb time for hiking with warm days and cool, comfortable evenings.',
  },
  {
    season: 'June - August (Summer)',
    rating: 3,
    temp: '15-30C at altitude',
    description: 'Hot at lower altitudes but pleasant above 2,000 meters. An early start (departure by 7:00 AM) is essential to avoid the midday heat on the approach. The Toubkal route is at its most accessible with no snow. Bring extra water and sun protection. The valleys are dry but still beautiful.',
  },
  {
    season: 'December - February (Winter)',
    rating: 3,
    temp: '0-12C at altitude',
    description: 'Snow covers the peaks and upper valleys, creating a dramatically different landscape. Lower routes like Imlil village walks are still accessible, but paths above 2,500 meters may require crampons and ice axes. Short days mean less hiking time. The snow-capped mountains are stunning from the lower valleys.',
  },
];

const whatToBring = [
  { item: 'Sturdy hiking boots or shoes', note: 'Trails are rocky and uneven. Ankle support is important, especially on the Toubkal route. Trail runners are acceptable for the Ourika Valley.' },
  { item: 'Layers of clothing', note: 'Mountain weather changes rapidly. A base layer, fleece, and windproof jacket cover most conditions. Even in summer, it can be cool at altitude.' },
  { item: 'Sun protection', note: 'Sunscreen (SPF 50+), sunglasses, and a hat are essential. UV exposure increases significantly at altitude.' },
  { item: 'Water (2-3 liters)', note: 'There are limited water sources on the trails. Carry more than you think you need, especially in summer. Water purification tablets are useful for refilling from streams.' },
  { item: 'Snacks and energy food', note: 'Nuts, dried fruit, energy bars. Lunch is usually provided by your guide, but trail snacks keep your energy up between meals.' },
  { item: 'Small backpack (20-30L)', note: 'Big enough for water, layers, snacks, and camera. A rain cover is useful in spring.' },
  { item: 'Camera', note: 'The mountain scenery is spectacular. A phone is fine, but the light and landscapes reward a dedicated camera.' },
  { item: 'Cash (MAD)', note: 'For tips (50-100 MAD for guides, 30-50 MAD for mule handlers), drinks at village shops, and any handicraft purchases.' },
  { item: 'Trekking poles (optional)', note: 'Helpful on steep descents, especially the Toubkal route. Many guides can arrange rental poles.' },
];

const safetyTips = [
  { title: 'Hire a Licensed Guide', detail: 'A licensed mountain guide is legally required above a certain altitude and strongly recommended for all routes. Guides know the trails, weather patterns, and can communicate with local villagers. They also carry first aid kits and emergency communication devices. Verify your guide\'s license number before departing.' },
  { title: 'Start Early', detail: 'Aim to begin hiking by 8:00-9:00 AM (7:00 AM for Toubkal). This maximizes daylight hours, avoids afternoon heat in summer, and reduces the risk of afternoon storms in spring. Mountain weather deteriorates predictably after midday.' },
  { title: 'Respect Altitude', detail: 'The Toubkal route reaches over 3,200 meters. Altitude sickness is possible above 2,500 meters, especially if you arrived in Marrakech from sea level recently. Ascend slowly, stay hydrated, and descend immediately if you experience persistent headache, nausea, or dizziness.' },
  { title: 'Check Weather Conditions', detail: 'Ask your guide about weather forecasts the evening before. Flash floods can occur in narrow valleys after heavy rain (especially spring and autumn). Snow and ice make high routes dangerous in winter without proper equipment.' },
  { title: 'Inform Someone of Your Plans', detail: 'Tell your hotel or riad your hiking plans, including expected return time and route. Most organized tours handle this automatically, but independent hikers should always leave word.' },
  { title: 'Carry Emergency Supplies', detail: 'A basic first aid kit, emergency whistle, headlamp, and fully charged phone are essential for any mountain hike. Your guide should carry these, but having your own backup is wise.' },
];

const typicalItinerary = [
  { time: '7:00-8:00 AM', title: 'Hotel Pickup in Marrakech', description: 'Your driver collects you from your hotel or riad. The drive to Imlil takes approximately 1.5 hours, climbing from the Haouz Plain through foothills dotted with Berber villages and olive groves. The scenery becomes increasingly dramatic as you gain altitude.', icon: Compass },
  { time: '9:30 AM', title: 'Arrive in Imlil & Meet Your Guide', description: 'Arrive at the trailhead village of Imlil (1,740m). Meet your licensed mountain guide, adjust your gear, and begin the hike. The first section follows a well-trodden mule path through walnut groves, with the sound of rushing water from the irrigation channels.', icon: Footprints },
  { time: '10:00 AM - 12:30 PM', title: 'Hiking Through Berber Villages', description: 'The trail winds upward through the villages of Armed, Tachedirt, or other hamlets depending on your chosen route. Your guide introduces you to the Berber way of life, pointing out traditional architecture, agricultural terraces, and medicinal plants. Stop for mint tea at a village home.', icon: Mountain },
  { time: '12:30 - 1:30 PM', title: 'Traditional Berber Lunch', description: 'A traditional Berber lunch is served in a village home or at a scenic viewpoint -- typically a vegetable tagine, fresh bread, seasonal salad, and mint tea. Eating in a Berber home is one of the highlights, surrounded by handwoven carpets and traditional Amazigh hospitality.', icon: Sun },
  { time: '1:30 - 3:30 PM', title: 'Return Hike & Exploration', description: 'The return route often follows a different path, revealing new views and villages. Your guide may take you to a viewpoint overlooking the entire valley or to a small waterfall hidden in the gorge. The afternoon light on the mountains is spectacular for photography.', icon: TrendingUp },
  { time: '4:00 PM', title: 'Depart Imlil', description: 'Return to the vehicle in Imlil for the drive back to Marrakech. Some tours include a stop at a cooperative (argan oil, saffron) or a scenic viewpoint along the way. Arrive back at your hotel by approximately 5:30-6:00 PM.', icon: Compass },
];

const relatedExperiences = [
  {
    title: 'Sahara Desert Glamping',
    slug: '/experiences/sahara-glamping',
    image: '/images/hero-sahara-sunrise.webp',
    duration: '1-3 nights',
    price: 'From $150',
  },
  {
    title: 'Moroccan Cooking Class',
    slug: '/experiences/moroccan-cooking-class',
    image: '/images/photo-cooking-class.webp',
    duration: '4-5 hours',
    price: 'From $30',
  },
  {
    title: 'Traditional Hammam Ritual',
    slug: '/experiences/hammam-ritual',
    image: '/images/hero-hammam-interior.webp',
    duration: '1.5-2 hours',
    price: 'From $10',
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function AtlasDayHikePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-trekking.webp"
            alt="Hiking trail through the Atlas Mountains with Berber villages and snow-capped peaks"
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
            <Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Atlas Day Hike</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Mountain className="w-4 h-4 text-[var(--color-accent)]" />
              Adventure Experience
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Atlas Mountains Day Hike
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Escape the heat of Marrakech and trek through the dramatic High Atlas --
              Berber villages, terraced valleys, walnut groves, and the towering peak
              of North Africa just 90 minutes from the medina.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">$40-120</p>
                <p className="text-sm text-white/70">Per Person</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Full Day</p>
                <p className="text-sm text-white/70">Duration</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">4.8</p>
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
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  The Mountains That Define Morocco
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    The High Atlas Mountains are the spine of Morocco, a dramatic wall of rock and snow
                    that separates the fertile plains of the north from the vast Sahara to the south.
                    Rising to 4,167 meters at the summit of Jebel Toubkal -- the highest peak in North
                    Africa -- these mountains have shaped Moroccan culture, history, and identity for
                    millennia. The Amazigh (Berber) people have inhabited these valleys since long before
                    the Arabs arrived, and their way of life remains remarkably intact in the remote
                    villages that dot the mountainsides.
                  </p>
                  <p>
                    A day hike in the Atlas Mountains is one of the most rewarding experiences Morocco
                    offers. Within 90 minutes of leaving the chaotic energy of Marrakech&apos;s medina,
                    you are walking through silent valleys where the only sounds are birdsong, the rush
                    of mountain streams, and the distant bells of grazing goats. The contrast is
                    extraordinary and deeply refreshing.
                  </p>
                  <p>
                    Three main routes from Marrakech offer distinctly different experiences. The Imlil
                    valley is the most popular, offering moderate hiking through picture-perfect Berber
                    villages with views of Toubkal. The Toubkal base camp route is a serious mountain
                    challenge for fit hikers. And the Ourika Valley provides an easy, family-friendly
                    escape with waterfalls and riverside restaurants just 45 minutes from the city.
                  </p>
                  <p>
                    What makes Atlas hiking special is not just the scenery -- though it is magnificent
                    -- but the human dimension. Your guide, invariably a local Berber who grew up in
                    these mountains, opens doors to village homes and family kitchens that no independent
                    traveler could access. You drink mint tea with elderly villagers, watch women weave
                    carpets on traditional looms, and share a tagine lunch in a house that has been in
                    the same family for generations. It is hiking as cultural immersion, and it is
                    unforgettable.
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
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Price</p>
                      <p className="text-sm text-[var(--text-secondary)]">Group: $40-60. Private: $80-120. Per person.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Duration</p>
                      <p className="text-sm text-[var(--text-secondary)]">Full day (7:00 AM - 6:00 PM). Half-day for Ourika.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Difficulty</p>
                      <p className="text-sm text-[var(--text-secondary)]">Easy (Ourika) to Challenging (Toubkal base).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Best Time</p>
                      <p className="text-sm text-[var(--text-secondary)]">March-May, September-November. Year-round for lower routes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Starting Point</p>
                      <p className="text-sm text-[var(--text-secondary)]">Marrakech (90 min drive to Imlil, 45 min to Ourika).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Guide</p>
                      <p className="text-sm text-[var(--text-secondary)]">Licensed mountain guide required/recommended.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a href="#routes" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    Explore Routes
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Routes ── */}
      <section id="routes" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Choose Your Adventure
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Three Routes, Three Experiences
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From easy valley strolls to serious mountain challenges, there is an Atlas hike for every fitness level and interest.
            </p>
          </div>
          <div className="space-y-8">
            {routes.map((route, index) => (
              <div key={route.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <img
                      src={route.image}
                      alt={route.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-[var(--color-primary)] text-sm font-bold">
                        Route {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-6 lg:p-8">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)] mb-3">
                      {route.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        route.difficulty === 'Easy' ? 'bg-[var(--color-green)]/10 text-[var(--color-green)]' :
                        route.difficulty === 'Easy to Moderate' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]' :
                        'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                      }`}>
                        <TrendingUp className="w-3 h-3" />
                        {route.difficulty}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                        <Footprints className="w-3 h-3" />
                        {route.distance}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                        <Mountain className="w-3 h-3" />
                        {route.elevation}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                        <Clock className="w-3 h-3" />
                        {route.duration}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {route.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {route.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-medium">
                          <CheckCircle className="w-3 h-3" />
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold">Best for:</span> {route.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typical Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              What to Expect
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Typical Day Hike Itinerary
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Based on the Imlil Valley route, the most popular option. Times are approximate.
            </p>
          </div>
          <div className="space-y-0">
            {typicalItinerary.map((step, index) => (
              <div key={step.title} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  {index < typicalItinerary.length - 1 && (
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

      {/* ── Pricing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Pricing & Packages
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three options to suit every budget and group size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingOptions.map((tier, index) => (
              <div key={tier.type} className={`card-moroccan p-6 flex flex-col ${index === 1 ? 'ring-2 ring-[var(--color-accent)]' : ''}`}>
                {index === 1 && (
                  <div className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs font-semibold mb-3">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-1">
                  {tier.type}
                </h3>
                <p className="text-2xl font-bold text-[var(--color-secondary)] mb-1">{tier.price}</p>
                <p className="text-xs text-[var(--text-muted)] mb-3 flex items-center gap-1">
                  <Users className="w-3 h-3" /> {tier.groupSize}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{tier.description}</p>
                <div className="space-y-2 mt-auto pt-4 border-t border-[var(--border)]">
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Seasons ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Best Seasons for Atlas Hiking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlas Mountains are hikeable year-round, but conditions vary dramatically by season.
          </p>
          <div className="space-y-4">
            {bestSeasons.map((s) => (
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
        </div>
      </section>

      {/* ── Safety & Guide Info ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Safety & Guide Requirements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The mountains demand respect. Follow these guidelines for a safe and enjoyable experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-secondary)]" />
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Guide Licensing</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Morocco requires licensed mountain guides for trekking above certain altitudes. Even on lower routes,
                  a licensed guide dramatically enhances your experience -- they know the trails intimately, can
                  introduce you to village families, and handle all logistics. Verify your guide&apos;s license (carte
                  professionnelle) before setting out. Expect to pay 400-600 MAD/day for a licensed guide. Tipping
                  50-100 MAD for excellent service is customary.
                </p>
              </div>
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
              Pair your mountain adventure with these complementary Moroccan experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedExperiences.map((exp) => (
              <Link key={exp.slug} href={exp.slug} className="card-moroccan group overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">{exp.title}</h3>
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
            <Link href="/experiences" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
              View All Experiences <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

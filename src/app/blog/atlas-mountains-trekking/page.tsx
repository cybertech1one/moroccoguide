import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Link2,
  User,
  Mountain,
  Thermometer,
  MapPin,
  AlertTriangle,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Atlas Mountains Trekking: The Complete Guide | CityGuide Blog',
  description:
    'Everything you need to know about trekking in Morocco\'s Atlas Mountains, from day hikes to the Jebel Toubkal summit. Includes best seasons, gear lists, guide hiring tips, route options, and practical advice for all fitness levels.',
  keywords: [
    'Atlas Mountains trekking',
    'Jebel Toubkal',
    'Morocco hiking',
    'High Atlas trek',
    'Imlil Morocco',
    'Berber villages trekking',
    'Morocco adventure travel',
    'Toubkal summit guide',
    'Atlas Mountains weather',
  ],
  openGraph: {
    title: 'Atlas Mountains Trekking: The Complete Guide',
    description:
      'From day hikes to Toubkal summit. Everything you need for trekking in Morocco\'s High Atlas Mountains.',
    url: 'https://citytoursmorocco.com/blog/atlas-mountains-trekking',
    type: 'article',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the High Atlas Mountains in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/blog/atlas-mountains-trekking' },
};

/* ================================================================
   TABLE OF CONTENTS
   ================================================================ */

const tableOfContents = [
  { id: 'introduction', label: 'Why the Atlas Mountains' },
  { id: 'when-to-go', label: 'When to Go' },
  { id: 'routes', label: 'Best Trekking Routes' },
  { id: 'toubkal', label: 'Climbing Jebel Toubkal' },
  { id: 'guides-porters', label: 'Guides and Porters' },
  { id: 'gear', label: 'Essential Gear List' },
  { id: 'fitness', label: 'Fitness and Preparation' },
  { id: 'berber-villages', label: 'Berber Villages Along the Way' },
  { id: 'accommodation', label: 'Where to Stay' },
  { id: 'safety', label: 'Safety and Health' },
  { id: 'responsible', label: 'Responsible Trekking' },
];

/* ================================================================
   RELATED ARTICLES
   ================================================================ */

const relatedArticles = [
  {
    slug: 'moroccan-tea-culture',
    title: 'Moroccan Tea Culture: The Art of Mint Tea',
    excerpt: 'The ritual of Moroccan mint tea is a cornerstone of daily life and hospitality.',
    image: '/images/photo-mint-tea-pouring.webp',
    category: 'Culture',
    readTime: '15 min read',
  },
  {
    slug: 'medina-shopping-guide',
    title: 'How to Shop in Moroccan Medinas Like a Local',
    excerpt: 'Master the art of haggling and discover hidden artisan workshops.',
    image: '/images/hero-souk-lamps.webp',
    category: 'Practical',
    readTime: '16 min read',
  },
  {
    slug: 'sahara-desert-experiences',
    title: 'The Best Sahara Desert Experiences Beyond Camel Rides',
    excerpt: 'Discover sandboarding, stargazing camps, and luxury bivouacs in the dunes.',
    image: '/images/hero-sahara-sunrise.webp',
    category: 'Adventure',
    readTime: '10 min read',
  },
];

/* ================================================================
   JSON-LD
   ================================================================ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Atlas Mountains Trekking: The Complete Guide',
    description:
      'Everything you need for trekking in Morocco\'s High Atlas Mountains, from Toubkal summit to gentle valley walks.',
    image: '/images/hero-desert.webp',
    datePublished: '2026-03-08',
    dateModified: '2026-03-08',
    author: { '@type': 'Person', name: 'Driss Tazi' },
    publisher: { '@type': 'Organization', name: 'CityGuide', url: 'https://citytoursmorocco.com' },
    url: 'https://citytoursmorocco.com/blog/atlas-mountains-trekking',
    articleSection: 'Adventure',
    keywords: 'Atlas Mountains, trekking, Jebel Toubkal, Morocco hiking',
    wordCount: 2500,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function AtlasMountainsTrekkingPage() {
  return (
    <>
      <JsonLd />

      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-desert.webp"
            alt="Panoramic view of the High Atlas Mountains with snow-capped peaks and green valleys"
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
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Atlas Mountains Trekking</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
              <Mountain className="w-3 h-3" />
              Adventure
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]">
              Atlas Mountains Trekking: The Complete Guide
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
              From gentle valley walks through terraced Berber villages to the 4,167-meter summit of Jebel Toubkal, the High Atlas offers world-class trekking just two hours from Marrakech.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/hero-morocco.webp"
                  alt="Driss Tazi"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                />
                <div>
                  <p className="font-semibold text-sm">Driss Tazi</p>
                  <p className="text-xs text-white/60">Adventure &amp; Outdoor Writer</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  March 8, 2026
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  18 min read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ---- Article Body ---- */}
      <section className="section-gradient">
        <div className="container-morocco py-12 md:py-20">
          <div className="flex flex-col xl:flex-row gap-12">

            {/* Sidebar */}
            <aside className="w-full xl:w-72 shrink-0 xl:order-last">
              <div className="xl:sticky xl:top-28 space-y-8">
                {/* Quick Stats */}
                <div className="card-featured p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Mountain className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Highest Peak</span>
                        <p className="text-[var(--text-secondary)]">Jebel Toubkal, 4,167m</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Thermometer className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Best Season</span>
                        <p className="text-[var(--text-secondary)]">April-June, Sept-Nov</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Starting Point</span>
                        <p className="text-[var(--text-secondary)]">Imlil (1,740m), 67km from Marrakech</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Difficulty</span>
                        <p className="text-[var(--text-secondary)]">Easy to Challenging (route dependent)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ToC */}
                <div className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-[var(--text-secondary)] hover:text-[var(--color-secondary)] transition-colors py-1 border-l-2 border-transparent hover:border-[var(--color-secondary)] pl-3"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Social Share */}
                <div className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">
                    Share This Article
                  </h3>
                  <div className="flex gap-3">
                    <span className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer">
                      <Facebook className="w-4 h-4" />
                    </span>
                    <span className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer">
                      <Twitter className="w-4 h-4" />
                    </span>
                    <span className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer">
                      <Link2 className="w-4 h-4" />
                    </span>
                    <span className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer">
                      <Share2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0 prose-moroccan">
              <div className="max-w-none space-y-8 text-[var(--text-secondary)] text-base leading-[1.85]">

                <p className="text-lg text-[var(--text-primary)] font-medium leading-relaxed">
                  The Atlas Mountains form the spine of Morocco, stretching over 2,500 kilometers from the Atlantic coast near Agadir northeast through Morocco, Algeria, and Tunisia. For trekkers, the High Atlas is the crown jewel: a dramatic landscape of snow-capped peaks, deep gorges, terraced valleys, and Berber villages that have changed little in centuries. Whether you are a casual hiker looking for a gentle day walk or a seasoned mountaineer aiming for the summit of Jebel Toubkal, North Africa&apos;s highest peak, this guide covers everything you need to know.
                </p>

                {/* Introduction */}
                <section id="introduction">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Why the Atlas Mountains
                  </h2>
                  <p>
                    The Atlas Mountains offer a trekking experience unlike anywhere else in the world. Within two hours of leaving the bustling medina of Marrakech, you are walking through walnut groves and cherry orchards, past stone-built villages where mules are still the primary mode of transport, and up into alpine meadows where the only sounds are the wind and the distant bells of goat herds.
                  </p>
                  <p>
                    What makes Atlas trekking special is not just the scenery, which is spectacular, but the cultural dimension. The mountains are home to the Amazigh (Berber) people, whose hospitality is legendary. Trekking in the Atlas invariably means being invited into village homes for tea, sharing meals with families whose ancestors have farmed these terraces for generations, and experiencing a way of life that persists alongside modernity rather than being consumed by it.
                  </p>
                  <p>
                    The infrastructure for trekking is well-established. A network of mountain refuges, guesthouses (<em>gites d&apos;etape</em>), and experienced local guides makes the Atlas accessible to trekkers of all abilities. You do not need to be an alpinist to enjoy the High Atlas, though serious mountaineers will find plenty to challenge them.
                  </p>
                </section>

                {/* When to Go */}
                <section id="when-to-go">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    When to Go
                  </h2>
                  <p>
                    The trekking season in the High Atlas depends on your route and ambitions. The mountains are accessible year-round, but conditions vary dramatically by season.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Spring (April - May)</h4>
                      <p className="text-sm">
                        The ideal season. Wildflowers blanket the lower valleys, almond and cherry trees are in bloom, rivers are full from snowmelt, and temperatures are comfortable (15-25 degrees Celsius at lower elevations). Snow remains on peaks above 3,000m, making them accessible only with crampons and ice axes. The Toubkal summit is typically reachable from late April onward.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Summer (June - August)</h4>
                      <p className="text-sm">
                        Hot in the lower valleys (30-40 degrees Celsius), but pleasant at altitude. The Toubkal summit is snow-free and most accessible. This is the busiest period on the main routes. Start early in the morning to avoid afternoon heat. Evenings at altitude are cool and clear, perfect for stargazing.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Autumn (September - November)</h4>
                      <p className="text-sm">
                        Many experienced trekkers consider this the best time. The summer heat has broken, autumn colors transform the walnut groves, and the trails are quieter. October is particularly beautiful. The first snow usually arrives on the highest peaks in late November.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Winter (December - March)</h4>
                      <p className="text-sm">
                        The High Atlas becomes a winter mountaineering destination. Passes above 2,500m are frequently snow-covered, and the Toubkal summit requires full winter equipment, including crampons, ice axes, and ropes. Lower valley walks remain pleasant, with crisp mornings and clear skies. Accommodation options are reduced.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Routes */}
                <section id="routes">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Best Trekking Routes
                  </h2>

                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--text-primary)] mt-6 mb-2">
                    1. Imlil Valley Day Walk (Easy, 3-5 hours)
                  </h3>
                  <p>
                    Perfect for those with limited time or fitness. From the trailhead village of Imlil (1,740m), follow the well-marked path to the village of Armed (1,900m), then continue to the Sidi Chamharouch shrine (2,310m), a holy site beside a mountain stream. The walk passes through walnut orchards and Berber villages with stunning views of the Toubkal massif. Return the same way or arrange a mule for the descent.
                  </p>

                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--text-primary)] mt-6 mb-2">
                    2. Toubkal Circuit (Moderate-Challenging, 3-4 days)
                  </h3>
                  <p>
                    A circular route that includes the Toubkal summit and passes through the most dramatic scenery in the High Atlas. Starting from Imlil, trek to the Toubkal Refuge (3,207m) on day one, summit Toubkal (4,167m) early on day two, then descend to Lac d&apos;Ifni (2,295m), a stunning turquoise lake set in a rocky amphitheater. Day three takes you over the Tizi n&apos;Ouanoums pass (3,664m) and back to Imlil via the Azzaden Valley. This route requires reasonable fitness and a good guide.
                  </p>

                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--text-primary)] mt-6 mb-2">
                    3. Mgoun Traverse (Challenging, 5-7 days)
                  </h3>
                  <p>
                    For experienced trekkers seeking solitude, the Mgoun massif in the central High Atlas offers Morocco&apos;s most spectacular multi-day trek. Starting from Ait Bougmez, the &quot;Happy Valley,&quot; the route crosses high passes above 3,500m, follows the dramatic Mgoun gorge, and ends in the Dades Valley. This is a remote area with limited infrastructure, requiring full camping equipment and an experienced guide. The reward is a landscape of breathtaking beauty largely untouched by mass tourism.
                  </p>

                  <div className="relative my-8 rounded-xl overflow-hidden">
                    <img
                      src="/images/hero-trekking.webp"
                      alt="Trekkers walking along a mountain trail with dramatic High Atlas peaks in the background"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <p className="text-xs text-[var(--text-muted)] mt-2 italic">
                      The trails of the High Atlas offer dramatic scenery at every turn, from terraced valleys to exposed ridgelines above 3,000 meters.
                    </p>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--text-primary)] mt-6 mb-2">
                    4. Azzaden Valley Trek (Moderate, 2-3 days)
                  </h3>
                  <p>
                    A quieter alternative to the busy Toubkal trail, the Azzaden Valley trek follows the Azzaden River through one of the most pristine valleys in the High Atlas. The route passes through a string of small Berber villages, each with its own character and charm, and offers excellent views of Toubkal and Ouanoukrim without the crowds. Gites d&apos;etape along the route provide comfortable overnight accommodation.
                  </p>
                </section>

                {/* Toubkal */}
                <section id="toubkal">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Climbing Jebel Toubkal
                  </h2>
                  <p>
                    Jebel Toubkal (4,167m) is North Africa&apos;s highest peak, and summiting it is the goal of most trekkers visiting the High Atlas. Despite its impressive altitude, Toubkal is technically straightforward in summer, requiring no climbing skills or specialist equipment beyond good hiking boots and warm layers.
                  </p>
                  <p>
                    The standard route takes two days from Imlil. Day one is a five to six hour trek to the Toubkal Refuge (Les Mouflons, 3,207m), where you spend the night acclimatizing. Day two begins before dawn, with a three to four hour ascent to the summit via a loose scree path that is physically demanding but never dangerous. The summit itself is a broad, rocky plateau with views that extend on clear days to the Sahara Desert in the south, the Atlantic coast to the west, and the Middle Atlas to the north.
                  </p>
                  <p>
                    The descent back to the refuge takes two to three hours, and most trekkers continue all the way back to Imlil the same day, making it a total of eight to ten hours on day two. Some trekkers attempt Toubkal as a single very long day from Imlil (12-15 hours), but this is not recommended due to the risk of altitude sickness without acclimatization.
                  </p>

                  <div className="card-featured p-6 my-6">
                    <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                      Altitude Warning
                    </h4>
                    <p className="text-sm">
                      At 4,167m, altitude sickness is a real concern. Symptoms include headache, nausea, dizziness, and fatigue. The single night at the refuge is not always sufficient for full acclimatization. Drink plenty of water, ascend slowly, and do not hesitate to turn back if you experience severe symptoms. There is no shame in the mountain winning; it will always be there for another attempt.
                    </p>
                  </div>
                </section>

                {/* Guides and Porters */}
                <section id="guides-porters">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Guides and Porters
                  </h2>
                  <p>
                    While it is technically legal to trek independently in the Atlas Mountains, hiring a local guide is strongly recommended for safety, navigation, and cultural enrichment. Since 2019, Morocco requires licensed guides for treks in the Toubkal National Park area.
                  </p>
                  <p>
                    Licensed mountain guides hold a diploma from the Centre de Formation aux Metiers de Montagne (CFAMM) in Tabant, Ait Bougmez. They speak multiple languages, know the terrain intimately, and serve as cultural interpreters, introducing you to families and traditions you would never encounter on your own. Expect to pay 400-600 MAD (40-60 USD) per day for a guide.
                  </p>
                  <p>
                    Mules and muleteers are available to carry heavy packs on most routes. A mule can carry up to 60kg and costs around 200-300 MAD per day, including the muleteer. This is particularly valuable on multi-day treks, allowing you to walk with a light daypack while your camping and cooking gear travels ahead to each night&apos;s campsite.
                  </p>
                  <p>
                    Book guides through reputable agencies in Marrakech or directly through the Bureau des Guides in Imlil. Avoid the unofficial guides who approach tourists at the Imlil trailhead; while many are knowledgeable locals, they lack the formal training and insurance that licensed guides carry.
                  </p>
                </section>

                {/* Gear */}
                <section id="gear">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Essential Gear List
                  </h2>
                  <p>
                    What you need depends on the season and the difficulty of your trek, but these items are essential for any Atlas Mountains expedition:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-3">Clothing</h4>
                      <ul className="text-sm space-y-1.5">
                        <li>Sturdy hiking boots (broken in before the trip)</li>
                        <li>Moisture-wicking base layers</li>
                        <li>Insulating mid-layer (fleece or down jacket)</li>
                        <li>Waterproof shell jacket</li>
                        <li>Trekking trousers (zip-off legs are practical)</li>
                        <li>Warm hat and sun hat</li>
                        <li>Gloves (essential above 3,000m, even in summer)</li>
                        <li>Sunglasses with UV protection</li>
                      </ul>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-3">Equipment</h4>
                      <ul className="text-sm space-y-1.5">
                        <li>30-40L daypack with rain cover</li>
                        <li>Trekking poles (highly recommended for descents)</li>
                        <li>Headlamp with spare batteries</li>
                        <li>Water bottles (2L minimum) or hydration bladder</li>
                        <li>Water purification tablets or filter</li>
                        <li>Sunscreen SPF 50+ and lip balm</li>
                        <li>First aid kit with blister plasters</li>
                        <li>Sleeping bag (for refuge stays in cooler months)</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    For winter trekking above 3,000m, add crampons, an ice axe, gaiters, and a four-season sleeping bag. These can be rented in Imlil if you do not wish to bring your own.
                  </p>
                </section>

                {/* Fitness */}
                <section id="fitness">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Fitness and Preparation
                  </h2>
                  <p>
                    The level of fitness required varies enormously by route. The Imlil Valley day walk is suitable for anyone who can walk for four to five hours on uneven terrain. The Toubkal summit requires a good level of cardiovascular fitness, as the final ascent involves gaining over 900 meters of elevation on loose scree. The Mgoun Traverse demands sustained fitness over multiple days with heavy loads.
                  </p>
                  <p>
                    If you are planning a Toubkal summit, begin preparing at least six to eight weeks in advance. Focus on cardiovascular exercise (running, cycling, swimming), stair climbing, and long walks with a loaded pack. If possible, do some hill walking to condition your knees for the long descents that are often the most challenging aspect of Atlas trekking.
                  </p>
                  <p>
                    Perhaps more important than raw fitness is acclimatization. If you are flying directly from sea level to Marrakech (450m) and then ascending to the Toubkal Refuge (3,207m) within 48 hours, your body has had very little time to adjust. Consider spending a day or two in Imlil before attempting the summit, or choose an itinerary that allows gradual altitude gain.
                  </p>
                </section>

                {/* Berber Villages */}
                <section id="berber-villages">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Berber Villages Along the Way
                  </h2>
                  <p>
                    One of the greatest pleasures of Atlas trekking is passing through the traditional Amazigh (Berber) villages that dot the valleys. These communities have lived in harmony with the mountain environment for centuries, and their stone and mud-brick houses blend seamlessly into the landscape.
                  </p>
                  <p>
                    Imlil itself has grown from a tiny hamlet to a bustling trailhead village, but a short walk in any direction takes you to villages where the pace of life remains unchanged. Armed, Tachdirt, and Tinerhourhine are all within easy walking distance and offer glimpses of traditional mountain life: women washing clothes in the river, children herding goats on the hillside, and men tending terraced plots of barley and potatoes.
                  </p>
                  <p>
                    When passing through villages, respect local customs. Ask before photographing people, dress modestly, and accept tea if offered. If you stay in a village gite, your accommodation fee directly supports the community. Some villages have established women&apos;s cooperatives that produce argan oil, saffron, or woven goods, and purchasing from these cooperatives is one of the most direct ways to contribute to local livelihoods.
                  </p>
                </section>

                {/* Accommodation */}
                <section id="accommodation">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Where to Stay
                  </h2>
                  <p>
                    Accommodation in the Atlas ranges from basic mountain refuges to comfortable village guesthouses:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>
                      <strong>CAF Refuges:</strong> The Club Alpin Francais operates two refuges on the Toubkal route: the Toubkal Refuge (Les Mouflons, 3,207m) and the Neltner Refuge nearby. These provide mattresses, blankets, basic meals, and a communal atmosphere. Book in advance during peak season. 150-200 MAD per night.
                    </li>
                    <li>
                      <strong>Gites d&apos;Etape:</strong> Family-run guesthouses in Berber villages offer basic but comfortable rooms, home-cooked meals, and genuine Berber hospitality. Sleeping is usually on mattresses on the floor in a communal room. 150-300 MAD per night including dinner and breakfast.
                    </li>
                    <li>
                      <strong>Kasbah du Toubkal:</strong> For those seeking comfort, this award-winning lodge in Imlil is converted from a former kasbah and offers stunning views, excellent food, and a hammam. A percentage of profits supports local community projects. From 1,200 MAD per night.
                    </li>
                    <li>
                      <strong>Camping:</strong> Wild camping is permitted in most areas above the tree line. Organized campsites exist along popular routes. Your guide and mule team will typically set up camp and prepare meals.
                    </li>
                  </ul>
                </section>

                {/* Safety */}
                <section id="safety">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Safety and Health
                  </h2>
                  <p>
                    The Atlas Mountains are generally safe for trekkers, but the mountain environment demands respect. Weather can change rapidly at altitude, with summer thunderstorms arriving without warning and temperatures dropping dramatically after sunset, even in July.
                  </p>
                  <p>
                    The most common health issues are dehydration, sunburn, blisters, and mild altitude sickness. All are preventable with proper preparation. Drink at least three liters of water per day while trekking, apply sunscreen regularly (UV intensity increases significantly at altitude), break in your boots before the trip, and ascend gradually.
                  </p>
                  <p>
                    There is no mountain rescue helicopter service in the Atlas comparable to the Alps. In case of emergency, your guide will arrange evacuation by mule to the nearest road, where an ambulance can be called. Ensure your travel insurance covers trekking at altitude (most standard policies exclude activities above 3,000m) and carry a basic first aid kit with altitude medication if you plan to go above 3,500m.
                  </p>
                </section>

                {/* Responsible Trekking */}
                <section id="responsible">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Responsible Trekking
                  </h2>
                  <p>
                    As trekking tourism grows in the Atlas, so does its environmental and social impact. Practice responsible trekking by following these principles:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>
                      <strong>Leave no trace:</strong> Carry out all waste, including food scraps and biodegradable items. The &quot;leave no trace&quot; ethic is not yet universal in Morocco, so lead by example.
                    </li>
                    <li>
                      <strong>Hire local:</strong> Use local guides, stay in village gites, and buy supplies from local shops. Tourism income is vital to these mountain communities.
                    </li>
                    <li>
                      <strong>Respect water sources:</strong> Do not use soap or detergent near rivers or streams. Use biodegradable products and dispose of waste water at least 50 meters from water sources.
                    </li>
                    <li>
                      <strong>Support fair wages:</strong> Ensure your guides and muleteers are paid fairly. Reputable agencies are transparent about how fees are distributed. Tip generously; mountain guiding is physically demanding and often seasonal work.
                    </li>
                    <li>
                      <strong>Cultural sensitivity:</strong> Dress modestly in villages, ask before photographing people, and remember that Berber villages are homes, not tourist attractions.
                    </li>
                  </ul>
                  <p>
                    The Atlas Mountains are a treasure that belongs to the communities who have stewarded them for centuries. Trekking with respect and responsibility ensures they will continue to welcome visitors for generations to come.
                  </p>
                </section>

                {/* Author Bio */}
                <div className="card-featured p-6 md:p-8 mt-12">
                  <div className="flex items-start gap-4">
                    <img
                      src="/images/hero-morocco.webp"
                      alt="Driss Tazi"
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[var(--color-accent-200)]"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">About the Author</span>
                      </div>
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg">
                        Driss Tazi
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                        Driss is an adventure writer and certified mountain guide who has summited Toubkal over 120 times. Born in the Ourika Valley, he spent his childhood scrambling on Atlas trails and has since guided expeditions across Morocco, the Pyrenees, and the Alps. He writes about outdoor adventure, responsible tourism, and the enduring resilience of mountain communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---- Related Articles ---- */}
      <section className="section-warm">
        <div className="container-morocco py-14 md:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card-moroccan group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="tag tag-accent text-xs">{article.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--color-secondary)] transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <span className="text-xs text-[var(--text-muted)] inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="btn-ghost inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

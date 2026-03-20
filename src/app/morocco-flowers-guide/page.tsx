import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Flower2,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  Sun,
  Camera,
  Calendar,
  CheckCircle,
  ShoppingBag,
  Mountain,
  Droplets,
  Leaf,
  Globe,
  Award,
  BookOpen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Flowers of Morocco Guide 2026 | Rose Valley, Wildflowers, Gardens & Bloom Seasons',
  description:
    'Complete guide to the flowers of Morocco. Explore Rose Valley (Kelaat M\'Gouna), the Rose Festival, Jardin Majorelle, wildflower seasons, Moroccan gardens, rose water products, saffron from Taliouine, and the best bloom photography spots across Morocco.',
  keywords: [
    'flowers of morocco',
    'morocco national flower',
    'Rose Valley Morocco',
    'Morocco rose festival',
    'wildflowers morocco',
    'Morocco gardens',
    'spring in morocco flowers',
    'Jardin Majorelle flowers',
    'Kelaat M\'Gouna roses',
    'Dades Valley roses',
    'Morocco bougainvillea',
    'orange blossom Morocco',
    'jasmine Morocco',
    'rose water Morocco',
    'saffron Taliouine Morocco',
    'argan flower Morocco',
    'Morocco bloom season',
    'Andalusian Gardens Rabat',
    'Menara Gardens Marrakech',
    'Morocco flower photography',
    'Morocco rose products',
    'prickly pear cactus flower Morocco',
  ],
  openGraph: {
    title: 'Flowers of Morocco Guide 2026 | Rose Valley, Wildflowers, Gardens & Bloom Seasons',
    description:
      'Discover Morocco\'s stunning floral heritage. From the Damask roses of the Dades Valley to wildflower-carpeted Atlas meadows, Jardin Majorelle, and the vibrant Rose Festival. Complete bloom calendar and photography guide.',
    url: `${BASE_URL}/morocco-flowers-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Vibrant flowers blooming in a traditional Moroccan garden with zellige tilework and fountain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowers of Morocco Guide 2026 | Rose Valley, Gardens & Bloom Seasons',
    description:
      'From the Rose Festival in Kelaat M\'Gouna to Jardin Majorelle and Atlas wildflower meadows. Complete guide to Morocco\'s flowers, gardens, and bloom seasons.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-flowers-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-flowers-guide`,
  name: 'Flowers of Morocco Guide 2026 | Rose Valley, Wildflowers, Gardens & Bloom Seasons',
  description:
    'Complete guide to the flowers of Morocco including Rose Valley, the Rose Festival, Jardin Majorelle, wildflower seasons, Moroccan gardens, rose products, saffron from Taliouine, and bloom photography spots.',
  url: `${BASE_URL}/morocco-flowers-guide`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
  author: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-flowers-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Flowers of Morocco Guide', item: `${BASE_URL}/morocco-flowers-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Morocco\'s national flower?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco does not have an officially designated national flower. However, the Damask rose (Rosa damascena), cultivated in the Dades Valley and Kelaat M\'Gouna region, is widely considered the symbolic flower of Morocco, celebrated annually at the Rose Festival in May.' } },
    { '@type': 'Question', name: 'When is the best time to see flowers in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March to May) is the peak wildflower season. The Rose Valley peaks mid-April to mid-May. Bougainvillea blooms April through October. For saffron crocuses in Taliouine, visit late October to November.' } },
    { '@type': 'Question', name: 'When is the Rose Festival in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The Festival of Roses (Moussem des Roses) takes place in Kelaat M\'Gouna during the second or third weekend of May, featuring parades, music, dancing, a Rose Queen competition, and fresh rose products.' } },
    { '@type': 'Question', name: 'Where can I buy authentic Moroccan rose water?', acceptedAnswer: { '@type': 'Answer', text: 'The most authentic rose water comes from cooperatives in the Kelaat M\'Gouna and Dades Valley region. In cities, buy from herbalists (attarine) in Marrakech, Fes, or Meknes. Prices start from 30 MAD.' } },
    { '@type': 'Question', name: 'Can I visit Jardin Majorelle year-round?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Jardin Majorelle is open year-round. Entry costs from 100 MAD for the garden. Spring (March-May) offers the most blooms. Visit early morning to avoid crowds.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ICONIC FLOWERS OF MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const iconicFlowers = [
  {
    name: 'Damask Rose (Rosa damascena)',
    icon: Flower2,
    region: 'Dades Valley / Kelaat M\'Gouna',
    season: 'April - May',
    description:
      'The queen of Moroccan flowers. Cultivated across 4,000+ hectares in the Dades Valley, these intensely fragrant pink roses are harvested each spring for rose water, rose oil, and cosmetic products. A single kilogram of rose oil requires around 4,000 kg of petals.',
    uses: ['Rose water (ma ward)', 'Rose oil (essential oil)', 'Rose-flavored pastries', 'Cosmetics and soaps'],
  },
  {
    name: 'Bougainvillea',
    icon: Sparkles,
    region: 'Nationwide, especially coastal cities',
    season: 'April - October',
    description:
      'The cascading magenta, purple, and orange blooms of bougainvillea define Morocco\'s visual identity. Draping over riad walls, kasbah ramparts, and medina alleyways, bougainvillea thrives in Morocco\'s warm climate and is one of the most photographed flowers in the country.',
    uses: ['Ornamental gardens', 'Wall and facade decoration', 'Photography subject', 'Riad courtyards'],
  },
  {
    name: 'Jasmine (Yasmine)',
    icon: Star,
    region: 'Northern Morocco, Meknes, Fes',
    season: 'June - September',
    description:
      'Jasmine holds deep cultural significance in Morocco. Its intoxicating fragrance fills evening air in gardens across the north. Moroccan jasmine is used in perfumery, traditional medicine, and is offered as a symbol of hospitality. Street vendors sell jasmine garlands in cities like Meknes and Fes.',
    uses: ['Perfumery', 'Jasmine tea', 'Traditional medicine', 'Hospitality symbol'],
  },
  {
    name: 'Orange Blossom (Zhar)',
    icon: Sun,
    region: 'Fes, Meknes, Souss-Massa',
    season: 'March - April',
    description:
      'The delicate white blossoms of the bitter orange tree produce one of Morocco\'s most beloved scents. Orange blossom water (ma zhar) is essential in Moroccan cooking, used in pastries, salads, and drinks. The spring blossoming transforms citrus groves into fragrant white canopies.',
    uses: ['Orange blossom water', 'Moroccan pastries', 'Facial toner', 'Traditional perfume'],
  },
  {
    name: 'Argan Flower',
    icon: Leaf,
    region: 'Souss-Massa, southwestern Morocco',
    season: 'March - April',
    description:
      'The small, inconspicuous yellow-green flowers of the argan tree (Argania spinosa) precede the fruit from which precious argan oil is extracted. The argan tree is endemic to Morocco and is a UNESCO-protected species. The flowers attract bees that produce distinctive argan honey.',
    uses: ['Argan oil production', 'Argan honey', 'Ecological importance', 'UNESCO Biosphere Reserve'],
  },
  {
    name: 'Prickly Pear Cactus Flower',
    icon: Mountain,
    region: 'Throughout Morocco, especially south',
    season: 'May - June',
    description:
      'The striking yellow and orange flowers of the prickly pear cactus (Opuntia ficus-indica) bloom across Morocco\'s drier landscapes. Introduced centuries ago, the cactus is now integral to Moroccan agriculture. The flowers give way to the sweet hinda fruit beloved as a summer snack, and the seeds produce valuable prickly pear seed oil.',
    uses: ['Prickly pear seed oil', 'Hinda fruit', 'Natural fencing', 'Anti-aging cosmetics'],
  },
  {
    name: 'Saffron Crocus (Crocus sativus)',
    icon: Award,
    region: 'Taliouine, Anti-Atlas',
    season: 'October - November',
    description:
      'The delicate purple crocus flowers of Taliouine produce the world\'s most expensive spice. Each flower yields only three red stigmas, hand-picked at dawn. Morocco is the fourth-largest saffron producer globally, and Taliouine saffron is prized for its exceptional color and flavor.',
    uses: ['Culinary saffron spice', 'Traditional medicine', 'Natural dye', 'Saffron tea'],
  },
  {
    name: 'Wild Iris (Iris tingitana)',
    icon: Flower2,
    region: 'Tangier region, Rif Mountains',
    season: 'February - April',
    description:
      'Named after Tangier (Tingis in Latin), this wild iris carpets Rif Mountain hillsides with vivid blue-purple blooms in early spring. One of Morocco\'s most important endemic wildflowers.',
    uses: ['Ornamental horticulture', 'Botanical study', 'Wildflower photography', 'Endemic conservation'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST GARDENS TO VISIT
   ═══════════════════════════════════════════════════════════════ */

const bestGardens = [
  {
    name: 'Jardin Majorelle',
    city: 'Marrakech',
    icon: Sparkles,
    price: 'From 100 MAD (garden), from 30 MAD (museum)',
    description:
      'Created by French painter Jacques Majorelle in 1923 and restored by Yves Saint Laurent. Over 300 plant species from five continents set against iconic cobalt blue buildings. Bougainvillea, bamboo, water lilies, and palms create a botanical paradise.',
    highlights: ['300+ plant species', 'Iconic cobalt blue walls', 'Berber Museum', 'YSL Memorial'],
  },
  {
    name: 'Andalusian Gardens',
    city: 'Rabat',
    icon: Flower2,
    price: 'Free entry',
    description:
      'Within the Kasbah of the Udayas, these Andalusian-style gardens feature orange and lemon trees, jasmine hedges, bougainvillea, and aromatic herbs overlooking the Bou Regreg River and Atlantic.',
    highlights: ['Free admission', 'Kasbah of the Udayas setting', 'River and ocean views', 'Orange and jasmine trees'],
  },
  {
    name: 'Menara Gardens',
    city: 'Marrakech',
    icon: Globe,
    price: 'Free entry (garden), from 10 MAD (pavilion)',
    description:
      'Dating to the 12th-century Almohad dynasty. A vast olive grove surrounds a reflecting pool with Atlas Mountain backdrop. The green-roofed pavilion is one of Marrakech\'s most photographed landmarks. Spring wildflowers dot the groves.',
    highlights: ['12th-century history', 'Atlas Mountain backdrop', 'Iconic pavilion', 'Olive groves'],
  },
  {
    name: 'Le Jardin Secret',
    city: 'Marrakech',
    icon: Leaf,
    price: 'From 80 MAD',
    description:
      'A restored 400-year-old riad garden divided into an exotic garden with tropical plants and an Islamic garden with geometric patterns, water channels, and aromatic plants native to Morocco.',
    highlights: ['400-year-old restoration', 'Two distinct gardens', 'Islamic garden design', 'Tower with medina views'],
  },
  {
    name: 'Jnan Sbil Gardens',
    city: 'Fes',
    icon: Droplets,
    price: 'Free entry',
    description:
      'The oldest public garden in Fes, dating to the 18th century. Towering bamboo, centuries-old fig trees, rose gardens, and a central lake create a peaceful escape from the medina. Over 3,000 plant species.',
    highlights: ['3,000+ plant species', 'Free admission', 'Bamboo groves', '18th-century heritage'],
  },
  {
    name: 'Cyber Park Moulay Abdeslam',
    city: 'Marrakech',
    icon: Sun,
    price: 'Free entry',
    description:
      'An 8-hectare public garden combining historical Moroccan garden design with modern green spaces. Olive and citrus trees date to the 18th century. Spring brings vibrant rose beds and bougainvillea displays.',
    highlights: ['8-hectare green space', 'Free admission', 'Central location', 'Historical olive trees'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BLOOM CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const bloomCalendar = [
  { month: 'January', blooms: 'Almond blossoms begin in warmer valleys. Citrus trees retain fruit. Winter wildflowers in the Souss region.', icon: Leaf, rating: 2 },
  { month: 'February', blooms: 'Almond trees in full bloom (Tafraoute region is stunning). Wild irises appear in northern Morocco. Early poppies in lowlands.', icon: Flower2, rating: 3 },
  { month: 'March', blooms: 'Orange blossoms explode in Fes and Meknes. Wildflowers carpet the Atlas foothills. Argan trees flower. Spring in full swing.', icon: Sun, rating: 4 },
  { month: 'April', blooms: 'Peak wildflower season. Damask roses begin blooming in the Dades Valley. Bougainvillea starts. Poppies, daisies, and orchids across the north.', icon: Flower2, rating: 5 },
  { month: 'May', blooms: 'Rose harvest and Rose Festival in Kelaat M\'Gouna. Prickly pear cactus flowers. Lavender in the Middle Atlas. Peak garden season.', icon: Sparkles, rating: 5 },
  { month: 'June', blooms: 'Jasmine begins flowering in northern Morocco. Oleander along rivers. Lavender continues. Bougainvillea at its most vivid.', icon: Star, rating: 4 },
  { month: 'July', blooms: 'Heat reduces lowland blooms. High Atlas meadows still flowering. Jasmine and oleander continue. Bougainvillea peaks.', icon: Sun, rating: 3 },
  { month: 'August', blooms: 'Summer heat limits most blooms. Bougainvillea and oleander persist. High-altitude wildflowers in the Atlas. Prickly pear fruit ripens.', icon: Mountain, rating: 2 },
  { month: 'September', blooms: 'Early autumn blooms begin. Bougainvillea continues. Late roses in some gardens. Landscape begins greening after summer heat.', icon: Leaf, rating: 2 },
  { month: 'October', blooms: 'Saffron crocuses begin blooming in Taliouine. Autumn wildflowers in the Rif. Gardens replanted for winter display.', icon: Award, rating: 3 },
  { month: 'November', blooms: 'Saffron harvest peaks in Taliouine. Late bougainvillea in coastal cities. Citrus trees begin fruiting. Autumn color in the Atlas.', icon: Award, rating: 3 },
  { month: 'December', blooms: 'Citrus groves heavy with fruit. Early almond buds in the south. Poinsettias in gardens. Winter-flowering succulents in the arid south.', icon: Leaf, rating: 2 },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROSE VALLEY PRODUCTS
   ═══════════════════════════════════════════════════════════════ */

const roseProducts = [
  { product: 'Rose Water (Ma Ward)', price: 'From 30 MAD', note: 'Culinary and cosmetic use. Buy from cooperatives for best quality.' },
  { product: 'Rose Essential Oil', price: 'From 300 MAD (10ml)', note: 'Highly concentrated. Requires ~4,000 kg of petals per kg of oil.' },
  { product: 'Rose Soap', price: 'From 15 MAD', note: 'Handmade with rose petals. Popular souvenir.' },
  { product: 'Rose Body Cream', price: 'From 50 MAD', note: 'Moisturizer infused with rose oil. Many cooperatives produce their own.' },
  { product: 'Dried Rose Buds', price: 'From 20 MAD (100g)', note: 'Used for tea, potpourri, and cooking. Available at every souk.' },
  { product: 'Rose Facial Toner', price: 'From 40 MAD', note: 'Pure rose water used as a natural toner. Gentle for all skin types.' },
  { product: 'Saffron (from Taliouine)', price: 'From 30 MAD per gram', note: 'One of the world\'s finest. Buy directly from cooperatives for authenticity.' },
  { product: 'Argan Oil (cosmetic grade)', price: 'From 80 MAD (100ml)', note: 'Cold-pressed from argan tree fruit. Buy from women\'s cooperatives.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY SPOTS
   ═══════════════════════════════════════════════════════════════ */

const photoSpots = [
  {
    location: 'Rose Valley Road (R704)',
    region: 'Dades Valley',
    bestTime: 'Mid-April to mid-May',
    tip: 'Drive the road between Kelaat M\'Gouna and Boumalne Dades during rose season. Fields of pink roses line both sides with kasbah backdrops.',
  },
  {
    location: 'Jardin Majorelle',
    region: 'Marrakech',
    bestTime: 'Early morning, any season',
    tip: 'Arrive at opening (8 AM) to photograph the cobalt blue buildings with bougainvillea and water lilies without crowds.',
  },
  {
    location: 'Tafraoute Almond Blossoms',
    region: 'Anti-Atlas',
    bestTime: 'Late January to February',
    tip: 'The pink and white almond blossoms against the red granite rocks of the Ameln Valley create extraordinary contrast.',
  },
  {
    location: 'Andalusian Gardens Overlook',
    region: 'Rabat',
    bestTime: 'March to May, golden hour',
    tip: 'Photograph the gardens with the Bou Regreg River and Sale in the background. Orange blossoms add fragrance to your shoot.',
  },
  {
    location: 'Taliouine Saffron Fields',
    region: 'Anti-Atlas',
    bestTime: 'Late October to November',
    tip: 'The purple crocus fields at dawn are extraordinary. The harvest happens in the early morning hours only.',
  },
  {
    location: 'Chefchaouen Blue Streets with Flowers',
    region: 'Rif Mountains',
    bestTime: 'April to June',
    tip: 'The blue-washed walls adorned with potted geraniums, bougainvillea, and morning glories create iconic imagery.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFlowersGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Flowers of Morocco Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flower2 className="w-4 h-4" />
            Nature &amp; Gardens
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Flowers of Morocco:
            <br className="hidden md:block" /> Rose Valley, Gardens &amp; Bloom Seasons
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the Damask roses of the Dades Valley to wildflower-covered Atlas meadows
            and the saffron crocuses of Taliouine. Your complete guide to Morocco&apos;s floral heritage.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Land Where Flowers Shape Culture, Cuisine &amp; Commerce
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a country where flowers are far more than decoration. They are woven into
                the fabric of daily life: rose water scents the pastries, orange blossom perfumes the
                evening air, saffron threads color the tagines, and argan oil nourishes the skin.
                From the snow-capped High Atlas to the sun-baked Saharan fringe, Morocco&apos;s diverse
                geography nurtures an astonishing variety of blooms.
              </p>
              <p>
                The Dades Valley, known worldwide as the Rose Valley, produces thousands of tonnes of
                Damask rose petals each spring, fueling a multi-million-dollar industry in rose water,
                essential oils, and cosmetics. In the Anti-Atlas village of Taliouine, delicate purple
                crocuses yield some of the world&apos;s finest saffron. And across the country, gardens
                from the medieval to the modernist showcase centuries of horticultural artistry.
              </p>
              <p>
                Whether you come for the Rose Festival in May, the almond blossoms of February, or
                simply to wander through a jasmine-scented riad courtyard, Morocco&apos;s flowers will
                leave an indelible impression. This guide covers every bloom, garden, and season you
                need to plan your floral journey through the kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Iconic Flowers of Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flower2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Iconic Flowers of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These eight flowers and flowering plants define Morocco&apos;s botanical identity, from fragrant garden cultivars to wild mountain blooms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iconicFlowers.map((flower) => {
              const FlowerIcon = flower.icon;
              return (
                <div key={flower.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FlowerIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {flower.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {flower.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {flower.season}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{flower.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {flower.uses.map((use, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {use}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Rose Valley & Rose Festival ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rose Valley &amp; the Rose Festival
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Dades Valley between Kelaat M&apos;Gouna and Boumalne Dades is Morocco&apos;s Rose Valley, where the annual harvest and festival draw visitors from around the world.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Rose Valley (Vallee des Roses)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Stretching along the Dades River east of Ouarzazate, the Rose Valley encompasses over 4,000 hectares
                of Damask rose cultivation. The roses were brought from Damascus by pilgrims returning from Mecca
                centuries ago. Today, the region produces 3,000 to 4,000 tonnes of petals annually, supporting
                thousands of families. The harvest (mid-April to mid-May) begins before dawn, when petals are at
                their most fragrant. They are then steam-distilled in local cooperatives to produce rose water and
                essential oil. Several cooperatives welcome visitors along the road between Kelaat M&apos;Gouna and
                Boumalne Dades.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  150 km east of Ouarzazate on the N10
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[var(--color-accent)]" />
                  Mid-April to mid-May for blooms
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Festival of Roses (Moussem des Roses)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Held annually in Kelaat M&apos;Gouna during the second or third weekend of May, the Festival of Roses
                is one of Morocco&apos;s most vibrant celebrations. The three-day festival marks the end of the rose
                harvest with parades, Amazigh music and dance, a Rose Queen pageant, and stalls overflowing with
                fresh rose products. Visitors can sample rose-flavored foods, purchase rose water from producers,
                and witness the communal spirit of this agricultural community. Book accommodation well in advance
                or plan a day trip from Ouarzazate.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[var(--color-accent)]" />
                  Second or third weekend of May
                </span>
                <span className="flex items-center gap-1">
                  <Info className="w-3 h-3 text-[var(--color-accent)]" />
                  Free entry; book accommodation early
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Taliouine: Morocco&apos;s Saffron Capital
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In the Anti-Atlas foothills, Taliouine is the heart of Moroccan saffron production. Each autumn,
                hillsides bloom with pale purple Crocus sativus flowers. The harvest is done by hand at dawn:
                three crimson stigmas per flower are extracted and dried. It takes roughly 150,000 flowers to
                produce one kilogram of saffron, the world&apos;s most expensive spice by weight.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                Visit Taliouine&apos;s Saffron Museum and cooperatives to purchase authenticated saffron from
                producers. Prices start from 30 MAD per gram. Seasonal pricing applies during peak harvest
                in late October to early November.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Gardens to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Gardens to Visit in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From world-famous Jardin Majorelle to peaceful public parks, Morocco&apos;s gardens showcase centuries of horticultural artistry.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing may apply during peak tourist months (October-April).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestGardens.map((garden) => {
              const GardenIcon = garden.icon;
              return (
                <div key={garden.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GardenIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {garden.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {garden.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {garden.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{garden.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {garden.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Monthly Bloom Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Bloom Calendar: Month by Month
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Plan your trip around Morocco&apos;s flowering seasons. April and May offer the most spectacular displays, but every month has something blooming.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bloomCalendar.map((item) => {
              const MonthIcon = item.icon;
              return (
                <div key={item.month} className="card-moroccan p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MonthIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.month}
                      </h3>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Flower2
                          key={star}
                          className={`w-3 h-3 ${star <= item.rating ? 'text-[var(--color-gold)]' : 'text-gray-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.blooms}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Rose Products & Flower Markets ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rose Products, Saffron &amp; Flower Markets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s flowers are not just for admiring. They fuel a thriving industry of natural products you can take home.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Prices at tourist markets may be higher. Buy from cooperatives for the best value and authenticity.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Product</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {roseProducts.map((item, i) => (
                <div
                  key={item.product}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.product}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              Where to Find Flower Markets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Marrakech Flower Souk
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Near the spice souk in the northern medina. Fresh cut flowers, dried rose buds, and aromatic herbs. Best visited in the morning.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Fes Attarine Quarter
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  The herbalist quarter of the Fes medina sells dried flowers, orange blossom water, rose water, and aromatic plants from generational herbalists.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Casablanca Habous Market
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  The new medina has a dedicated flower market with fresh blooms, aromatic plants, and garden supplies at fixed prices.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Rose Valley Cooperatives
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Women&apos;s cooperatives between Kelaat M&apos;Gouna and Boumalne Dades offer source-price rose products and free distillation tours with purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wildflower Seasons ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wildflower Seasons Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the cultivated gardens, Morocco&apos;s wild landscapes burst with color during spring and autumn.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Atlas Mountain Meadows (March - June)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The High Atlas and Middle Atlas transform into wildflower meadows from March through June. Red poppies, wild lavender, thyme, rosemary, and dozens of orchid species carpet the hillsides. The Ourika Valley (45 minutes from Marrakech) and the Toubkal National Park pass through some of the richest wildflower zones in North Africa.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  High Atlas, Middle Atlas, Ourika Valley
                </span>
                <span className="flex items-center gap-1">
                  <Flower2 className="w-3 h-3 text-[var(--color-gold)]" />
                  Poppies, lavender, orchids, thyme
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Rif Mountains &amp; Northern Morocco (February - May)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Northern Morocco receives the most rainfall and supports lush vegetation. The Rif Mountains around Chefchaouen bloom with wild irises (including the endemic Iris tingitana), cistus, and Mediterranean wildflowers. The Talassemtane National Park is a botanical hotspot with ancient fir forests and diverse ground-cover blooms.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Rif Mountains, Chefchaouen, Tangier
                </span>
                <span className="flex items-center gap-1">
                  <Flower2 className="w-3 h-3 text-[var(--color-gold)]" />
                  Wild irises, cistus, maritime flowers
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Anti-Atlas &amp; Desert Fringe (January - March)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The arid south produces surprisingly beautiful blooms after winter rains. Almond blossoms transform the Ameln Valley near Tafraoute into a pink and white wonderland in late January and February. Succulents and desert wildflowers bloom across the Draa Valley and Sahara edges, including euphorbia and desert marigolds.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Tafraoute, Draa Valley, Anti-Atlas
                </span>
                <span className="flex items-center gap-1">
                  <Flower2 className="w-3 h-3 text-[var(--color-gold)]" />
                  Almond blossoms, euphorbia, succulents
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Spots ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Flower Photography Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers extraordinary opportunities for flower and botanical photography. Here are the top locations and when to visit them.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {photoSpots.map((spot, index) => (
                  <div key={spot.location} className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                      <Camera className="w-5 h-5 text-white" />
                    </div>

                    <div className="card-moroccan p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {spot.location}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                          <Calendar className="w-3 h-3" />
                          {spot.bestTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] mb-2">
                        <MapPin className="w-3 h-3" />
                        {spot.region}
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{spot.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Flower Enthusiasts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Season for Flowers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Spring (March-May) is the undisputed peak. April and May offer the greatest diversity, with
                rose harvest, wildflowers, bougainvillea, and garden blooms all overlapping. For saffron,
                visit in late October to November. For almond blossoms, come in late January to February.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always ask permission before photographing people working in rose fields or gardens. In private
                gardens and riads, photography may be restricted. Early morning and late afternoon offer the
                best light. Respect garden rules about tripods and drones.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShoppingBag className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Buying Flower Products
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Buy from cooperatives and reputable herbalists (attarine) for the best quality and price.
                Tourist-area shops often sell diluted rose water. True rose water has a subtle, natural scent
                and is not overly sweet. Argan oil should be cold-pressed and certified organic.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Mountain className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Wildflower Hiking
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For the best wildflower hiking, head to the Ourika Valley, Toubkal National Park, or the Rif
                Mountains around Chefchaouen. Hire a local guide who knows the best blooming areas. Bring a
                wildflower identification guide or download the PlantNet app for real-time plant identification.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Garden Visiting Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Visit gardens early in the morning for cooler temperatures, better light, and fewer crowds.
                Jardin Majorelle opens at 8 AM and the first hour is the quietest. Many gardens offer guided
                tours that provide botanical context you would miss on your own.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Flowers in Moroccan Culture
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Flowers are deeply embedded in Moroccan daily life. Rose water is sprinkled on guests as a
                welcome, orange blossom water flavors pastries and tea, jasmine garlands are gifted at
                celebrations, and saffron is a prized cooking ingredient. Understanding these traditions
                enriches every garden visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is Morocco&apos;s national flower?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco does not have an officially designated national flower. However, the Damask rose (Rosa
                damascena), cultivated extensively in the Dades Valley and Kelaat M&apos;Gouna region, is widely
                considered the symbolic flower of Morocco. The rose appears throughout Moroccan culture, cuisine,
                cosmetics, and is celebrated annually at the Rose Festival in May.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time to see flowers in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March to May) is the peak wildflower season. The Rose Valley peaks mid-April to mid-May.
                Bougainvillea blooms April through October. Orange blossoms appear in March-April. For saffron
                crocuses in Taliouine, visit in late October to November. For almond blossoms, come in late January to February.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the Rose Festival in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The annual Festival of Roses (Moussem des Roses) takes place in Kelaat M&apos;Gouna in the
                Dades Valley, typically during the second or third weekend of May, coinciding with the peak of
                the rose harvest. The festival features parades, music, dancing, a Rose Queen competition, and
                the opportunity to buy fresh rose products directly from producers.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where can I buy authentic Moroccan rose water?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most authentic rose water comes from cooperatives in the Kelaat M&apos;Gouna and Dades Valley
                region. In cities, buy from reputable herbalists (attarine) in Marrakech, Fes, or Meknes medinas.
                Prices start from 30 MAD per bottle. Avoid diluted tourist-market versions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit Jardin Majorelle year-round?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Jardin Majorelle is open year-round. Entry costs from 100 MAD for the garden and from 30 MAD
                additional for the Berber Museum. Spring (March-May) offers the most blooms. Visit early morning
                to avoid crowds, especially during peak season from October to April. Seasonal pricing may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-photography-locations" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Photography Locations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most photogenic spots across Morocco, from medinas to mountains and desert dunes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Understand Moroccan traditions, customs, festivals, and the cultural fabric of the kingdom.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/ouarzazate-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Ouarzazate Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Gateway to the Rose Valley, kasbahs, and the stunning landscapes of southern Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the Ourika Valley, Atlas Mountains, and garden excursions from Morocco&apos;s red city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

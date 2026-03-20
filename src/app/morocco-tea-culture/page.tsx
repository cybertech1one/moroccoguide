import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Users,
  BookOpen,
  Crown,
  Coffee,
  Leaf,
  GlassWater,
  Store,
  ShoppingBag,
  Flame,
  Globe,
  CircleDot,
  HandHeart,
  MessageCircle,
  ThermometerSun,
  ListChecks,
  UtensilsCrossed,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Mint Tea Guide 2026 | Atay Culture, Ceremony & Best Tea Houses',
  description:
    'Complete guide to Moroccan mint tea (atay). Learn the tea ceremony, three-glass tradition, preparation steps, etiquette, regional variations like saffron and shiba tea, plus the best rooftop tea houses in Marrakech, Fes, and Chefchaouen.',
  keywords: [
    'moroccan mint tea',
    'atay morocco',
    'moroccan tea ceremony',
    'mint tea culture morocco',
    'how to make moroccan tea',
    'moroccan tea etiquette',
    'three glasses tea morocco',
    'gunpowder tea morocco',
    'berrad moroccan teapot',
    'moroccan tea glasses',
    'best tea houses morocco',
    'saffron tea morocco',
    'shiba wormwood tea',
    'louiza verbena tea morocco',
    'moroccan tea recipe',
    'moroccan tea set',
    'moroccan tea history',
    'moroccan hospitality tea',
  ],
  openGraph: {
    title: 'Moroccan Mint Tea Guide 2026 | Atay Culture, Ceremony & Best Tea Houses',
    description:
      'Master Moroccan mint tea culture. From the three-glass tradition to the best rooftop tea houses. Complete guide to atay: history, ceremony, etiquette, variations, and where to drink.',
    url: `${BASE_URL}/morocco-tea-culture`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tea.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan mint tea being poured from a silver berrad into ornate tea glasses on a brass tray',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Mint Tea Guide 2026 | Culture, Ceremony & Tea Houses',
    description:
      'Everything about Moroccan mint tea. The three-glass tradition, ceremony steps, regional variations, and the best tea houses across Morocco.',
    images: [`${BASE_URL}/images/hero-tea.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-tea-culture` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-tea-culture`,
  name: 'Moroccan Mint Tea Guide 2026 | Atay Culture, Ceremony & Best Tea Houses',
  description:
    'Complete guide to Moroccan mint tea culture, ceremony etiquette, preparation methods, regional variations, and the best tea houses across Morocco.',
  url: `${BASE_URL}/morocco-tea-culture`,
  image: `${BASE_URL}/images/hero-tea.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-tea-culture`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Tea Culture', item: `${BASE_URL}/morocco-tea-culture` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Moroccan mint tea called?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan mint tea is called "atay" (also spelled "attay" or "atai") in Darija, the Moroccan Arabic dialect. The full name is "atay b\'naanaa" meaning tea with mint. In the Amazigh (Berber) language, it is called "atay."',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do Moroccans pour tea from a height?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pouring from a height of 30-50 cm serves two purposes. It aerates the tea, creating a light foam on top that Moroccans call "the crown" (rezza). It also cools the tea slightly so guests can drink it sooner. The skill of pouring without spilling is a mark of a good host.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the three glasses of tea tradition mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Moroccan proverb says: "The first glass is gentle as life, the second is strong as love, the third is bitter as death." Each successive glass grows stronger as the tea steeps longer. Accepting all three glasses signals respect for the host. Leaving after just one can be considered rude.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it rude to refuse tea in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Refusing tea outright can be considered impolite, since offering tea is a deep expression of hospitality. If you genuinely cannot drink it, accept the glass and hold it without drinking — that is generally understood. In shops and medinas, accepting tea does not obligate you to buy anything, despite what some vendors may imply.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of tea is used in Moroccan mint tea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccans use Chinese gunpowder green tea, specifically the grade known as "special gunpowder" or "3505." The tightly rolled pellets unfurl during brewing. The most prized brand is "Sultan" (green box), followed by "Menara." Loose leaf is always used — never tea bags.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much sugar is in Moroccan tea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional Moroccan tea is very sweet — typically 4 to 6 large sugar cones or the equivalent of 8-12 teaspoons per pot. In southern Morocco, tea tends to be sweeter still. You can request "atay bla sukkar" (tea without sugar) or "shwiya dial sukkar" (a little sugar), though some traditionalists may find this unusual.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy an authentic Moroccan tea set?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best places are the metalworkers\' souks (souk haddadine) in Fes and Marrakech. A basic berrad (teapot) starts from 80 MAD. A full set with tray and 6 glasses starts from 250 MAD. For high-quality hand-engraved sets, expect from 500 MAD to 3,000 MAD. Always negotiate — start at 40% of the asking price.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA VARIATIONS
   ═══════════════════════════════════════════════════════════════ */

const teaVariations = [
  {
    name: 'Atay b\'naanaa (Classic Mint Tea)',
    icon: Leaf,
    region: 'All Morocco',
    description:
      'The standard. Chinese gunpowder green tea with fresh spearmint (naanaa) and sugar. Served everywhere from royal palaces to roadside stalls. The mint should be fresh and abundant — at least one large handful per pot.',
    season: 'Year-round',
  },
  {
    name: 'Atay b\'shiba (Wormwood Tea)',
    icon: Sparkles,
    region: 'Southern Morocco, Sahara',
    description:
      'Made with artemisia (wormwood) instead of or alongside mint. Intensely bitter and aromatic. Saharan nomads and Tuareg communities favor shiba for its digestive properties. Common in Zagora, Merzouga, and across the Draa Valley.',
    season: 'Year-round, especially winter',
  },
  {
    name: 'Atay b\'louiza (Lemon Verbena Tea)',
    icon: GlassWater,
    region: 'Northern Morocco, Rif',
    description:
      'Lemon verbena (louiza) gives the tea a citrusy, floral taste. Popular in Chefchaouen, Tetouan, and the Rif mountains. Often served without green tea as a standalone herbal infusion. Moroccans drink it before bed for its calming effects.',
    season: 'Spring & Summer',
  },
  {
    name: 'Atay b\'zaafaran (Saffron Tea)',
    icon: Crown,
    region: 'Taliouine, Anti-Atlas',
    description:
      'Saffron from Taliouine — the world\'s second-largest saffron producer — steeped with green tea and mint. The liquid turns golden. Expensive to make authentically, but Taliouine cafes serve it from 15 MAD per glass. A specialty of the Souss-Massa region.',
    season: 'Autumn harvest, served year-round',
  },
  {
    name: 'Atay b\'zaatar (Thyme Tea)',
    icon: Flame,
    region: 'Middle Atlas, Rural areas',
    description:
      'Wild thyme from the Atlas mountains brewed alone or blended into mint tea. Berber communities in Ifrane, Azrou, and the Ziz Valley drink thyme tea as a cold remedy. The thyme grows wild above 1,500 meters.',
    season: 'Winter & cold months',
  },
  {
    name: 'Atay b\'fliyou (Pennyroyal Tea)',
    icon: CircleDot,
    region: 'Fes, Meknes, Middle Atlas',
    description:
      'Pennyroyal mint (fliyou) has a stronger, almost peppery flavor compared to spearmint. Common in Fes households and in the surrounding countryside. Many Fassis consider fliyou superior to regular mint for tea.',
    season: 'Year-round',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TEA EXPERIENCES BY CITY
   ═══════════════════════════════════════════════════════════════ */

const teaExperiences = [
  {
    city: 'Marrakech',
    icon: Star,
    spots: [
      {
        name: 'Nomad Restaurant Rooftop',
        location: 'Derb Aarjane, Medina',
        price: 'from 35 MAD per glass',
        note: 'Panoramic terrace overlooking the spice souk. Their tea includes fresh orange blossom water.',
      },
      {
        name: 'Le Jardin Secret Tea Pavilion',
        location: 'Mouassine Quarter',
        price: 'from 40 MAD per pot',
        note: 'Drink tea surrounded by a restored 16th-century Islamic garden. The garden entry is from 80 MAD.',
      },
      {
        name: 'Cafe des Epices',
        location: 'Place Rahba Kedima',
        price: 'from 20 MAD per glass',
        note: 'Three-story terrace above the spice square. A Marrakech institution since 2005. Arrive before 11 AM to grab a top-floor seat.',
      },
    ],
  },
  {
    city: 'Fes',
    icon: BookOpen,
    spots: [
      {
        name: 'Cafe Clock',
        location: 'Derb el Magana, Fes el-Bali',
        price: 'from 25 MAD per glass',
        note: 'Cultural cafe with live Gnawa music on Sundays. Try their camel burger paired with classic atay.',
      },
      {
        name: 'Riad Fes Rooftop',
        location: 'Derb Ben Slimane, Zerbatna',
        price: 'from 50 MAD per pot',
        note: 'A five-star riad with a rooftop that looks directly onto the Qarawiyyin Mosque. Tea service includes cornes de gazelle pastries.',
      },
      {
        name: 'Palais de Fes Dar Tazi',
        location: 'Near Bab Bou Jeloud',
        price: 'from 30 MAD per pot',
        note: 'Enormous palace terrace with views of the medina. Less touristy than rooftop cafes near the tanneries.',
      },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: MapPin,
    spots: [
      {
        name: 'Cafe Hafa (Chefchaouen)',
        location: 'Near Ras El Maa waterfall',
        price: 'from 12 MAD per glass',
        note: 'A simple terrace cafe where locals drink louiza (verbena) tea while watching the river. No frills, just peace.',
      },
      {
        name: 'Hotel Casa Hassan Terrace',
        location: 'Rue Targhi, Medina',
        price: 'from 20 MAD per glass',
        note: 'Blue-washed terrace overlooking the medina rooftops. The tea here comes with homemade almond cookies.',
      },
    ],
  },
  {
    city: 'Essaouira',
    icon: Globe,
    spots: [
      {
        name: 'Taros Cafe',
        location: 'Place Moulay Hassan',
        price: 'from 25 MAD per glass',
        note: 'Rooftop bar and cafe overlooking the port. Live Gnawa music most evenings. Their mint tea uses fresh-cut mint from the garden.',
      },
      {
        name: 'Ocean Vagabond',
        location: 'Beach Promenade',
        price: 'from 20 MAD per glass',
        note: 'Beachfront cafe where surfers drink post-session tea. Ocean views and a relaxed vibe.',
      },
    ],
  },
  {
    city: 'Tangier',
    icon: Coffee,
    spots: [
      {
        name: 'Cafe Hafa',
        location: 'Avenue Hafa, Marshan',
        price: 'from 15 MAD per glass',
        note: 'Clinging to the cliff above the Strait of Gibraltar. Rolling Stones, Paul Bowles, and Jack Kerouac all drank tea here. Open since 1921.',
      },
      {
        name: 'Gran Cafe de Paris',
        location: 'Place de France',
        price: 'from 20 MAD per glass',
        note: 'Art deco interior from the international zone era. Order tea with msemen and watch the Petit Socco bustle.',
      },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA & FOOD PAIRINGS
   ═══════════════════════════════════════════════════════════════ */

const teaPairings = [
  {
    food: 'Msemen',
    description: 'Square layered flatbread, crispy outside, chewy inside. Drizzle with honey or stuff with kefta. The buttery richness cuts through the tea\'s sweetness.',
    price: 'from 3 MAD per piece',
  },
  {
    food: 'Baghrir',
    description: 'Thousand-hole semolina pancakes soaked in butter and honey. The spongy texture absorbs the honey perfectly. A breakfast staple across Morocco.',
    price: 'from 3 MAD per piece',
  },
  {
    food: 'Chebakia',
    description: 'Flower-shaped fried pastry coated in honey and sesame seeds. Traditionally made for Ramadan. Intensely sweet — the tea balances it.',
    price: 'from 5 MAD per piece',
  },
  {
    food: 'Cornes de Gazelle (Kaab el Ghzal)',
    description: 'Crescent-shaped almond paste pastries dusted with powdered sugar. Fes is the capital of this pastry. Delicate, fragrant with orange blossom water.',
    price: 'from 8 MAD per piece',
  },
  {
    food: 'Sellou (Sfouf)',
    description: 'A dense mixture of roasted flour, almonds, sesame, butter, and honey. High-energy, served during Ramadan and after childbirth. Crumbly and nutty alongside tea.',
    price: 'from 40 MAD per 250g',
  },
  {
    food: 'Briwat',
    description: 'Triangular filo pastry stuffed with almond paste or ground meat. The sweet version pairs best with unsweetened or lightly sweetened tea.',
    price: 'from 5 MAD per piece',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA SET SHOPPING GUIDE
   ═══════════════════════════════════════════════════════════════ */

const teaSetItems = [
  {
    item: 'Berrad (Teapot)',
    material: 'Stainless steel or silver-plated',
    priceRange: 'from 80 MAD (basic) to 2,000 MAD (hand-engraved silver)',
    tip: 'Look for a tight-fitting lid and a long curved spout. The best berrad have a welded (not glued) handle.',
  },
  {
    item: 'Tea Glasses (Kseysat)',
    material: 'Painted glass with gold or colored designs',
    priceRange: 'from 10 MAD each to 50 MAD for hand-painted',
    tip: 'Buy a set of 6 or 12. Check that the painted designs are under a glaze — cheap glasses lose their paint after a few washes.',
  },
  {
    item: 'Tea Tray (Siniya)',
    material: 'Brass, copper, or silver',
    priceRange: 'from 100 MAD (brass) to 1,500 MAD (engraved silver)',
    tip: 'Round trays are traditional. Look for hand-hammered geometric patterns. Heavier trays are generally better quality.',
  },
  {
    item: 'Sugar Cone (Qalib Sukkar)',
    material: 'Compressed white sugar',
    priceRange: 'from 15 MAD per cone',
    tip: 'Moroccans break pieces off the cone with a special hammer. Sugar cones are sold at every grocery store (hanout).',
  },
  {
    item: 'Complete Tea Set',
    material: 'Berrad + 6 glasses + tray',
    priceRange: 'from 250 MAD (basic) to 3,000 MAD (artisan)',
    tip: 'The metalworkers\' souk in Fes (Seffarine Square) and Marrakech (near Place Jemaa el-Fna) have the best selection. Always negotiate.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTeaCulturePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#2D1810] via-[#4A2C1A] to-[#1a0f08]">
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-morocco text-center py-20 md:py-28">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-1.5 text-white/70 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Moroccan Tea Culture</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Moroccan Mint Tea
            <span className="block text-[var(--color-gold)] mt-2">Culture, Ceremony &amp; Where to Drink</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-heading)]">
            Tea is Morocco&apos;s national drink, its social glue, and its most universal act of welcome.
            This guide covers everything: history, preparation, the three-glass tradition, regional
            variations, the best tea houses by city, and how to brew authentic atay at home.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-white/80">
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" /> 12 min read
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" /> 5 cities covered
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <Star className="w-4 h-4" /> 6 tea variations
            </span>
          </div>
        </div>
      </section>

      {/* ── Introduction: Significance of Moroccan Tea ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-10">
            <Coffee className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            The Significance of Moroccan Mint Tea
          </h2>

          <div className="prose-custom space-y-5 text-[var(--text-secondary)]">
            <p className="text-base leading-relaxed">
              Moroccans call it <strong>&quot;atay&quot;</strong> (also written &quot;attay&quot;). It is far more than a beverage.
              Atay is the first thing a host offers a guest. It accompanies every business negotiation, family gathering, and
              afternoon break. Refusing a glass signals distrust. Accepting it — even from a stranger — opens a door to conversation,
              commerce, and friendship.
            </p>
            <p className="text-base leading-relaxed">
              Morocco imports more Chinese green tea than any other country on the African continent. In 2024, Morocco purchased
              over 77,000 tonnes of tea, almost all of it Chinese gunpowder green. Per capita, Moroccans drink more tea than the
              British. The country has no native tea plants; every gram is imported. Yet tea has become so central to Moroccan
              identity that many visitors assume it originated here.
            </p>
            <p className="text-base leading-relaxed">
              Walk through any medina at 4 PM and you will see it everywhere: men sitting on low stools outside cafes, shopkeepers
              pouring from dented steel teapots, families gathered on terraces. The ritual crosses every class boundary. A
              construction worker and a bank director drink the same tea, prepared the same way, from the same style of small
              painted glass.
            </p>
          </div>

          <div className="card-moroccan p-6 mt-8 bg-[var(--surface-muted)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              Quick Facts About Moroccan Tea
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Morocco is the world&apos;s largest importer of Chinese green tea
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Average Moroccan household spends 5-8% of food budget on tea and sugar
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Mint tea is the unofficial national drink — no law declares it, everyone knows it
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Tea preparation is traditionally a male task in Moroccan households
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                The word &quot;atay&quot; derives from the Mandarin Chinese word &quot;cha&quot; via trade routes
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                A standard pot serves 3-4 people with 3 rounds each
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── History of Tea in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-10">
            <BookOpen className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            History of Tea in Morocco
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                18th Century: Tea Arrives
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Tea reached Morocco through British merchants in the mid-1700s. Britain, looking for new markets for its surplus
                Chinese tea stocks, traded gunpowder green tea through the ports of Mogador (modern Essaouira) and Tangier.
                The Alaouite sultan Moulay Ismail (reigned 1672-1727) reportedly received tea as a diplomatic gift, though it
                did not become widespread until decades later. By the 1750s, the Moroccan elite in Fes and Meknes had adopted
                the drink.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                19th Century: Tea Goes Mainstream
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                During the Crimean War (1853-1856), British tea merchants lost their Baltic trade routes and redirected massive
                quantities of tea to Morocco and other North African markets. Prices dropped. Tea spread from royal courts to
                merchants, then to rural villages. Moroccans began adding fresh mint and large amounts of sugar — innovations that
                made the drink distinctly their own. By 1900, tea had replaced other beverages in most of the country.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                20th Century to Present
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Under the French Protectorate (1912-1956), tea consumption continued to grow despite colonial attempts to tax it
                heavily. After independence, tea became intertwined with Moroccan national identity. Today, Morocco is the
                single largest destination for Chinese gunpowder green tea exports. The country imports tea duty-free, keeping
                prices low. A box of quality gunpowder tea costs from 15 MAD (about $1.50) at any neighborhood hanout (corner store).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How Moroccan Tea Is Made ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flame className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            How Moroccan Tea Is Made
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            The preparation method has remained essentially unchanged for 200 years. Every step matters.
          </p>

          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Rinse the Tea',
                detail:
                  'Add 1-2 tablespoons of Chinese gunpowder green tea to the berrad (teapot). Pour a small amount of boiling water over the leaves. Swirl for 10 seconds, then discard this first water. This removes dust and bitterness. Moroccans call this step "washing the tea."',
              },
              {
                step: 2,
                title: 'First Brew',
                detail:
                  'Fill the berrad with boiling water. Place on low heat (traditionally a kanoun charcoal brazier, now usually a gas flame) for 3-5 minutes. The tea should simmer gently — never a rolling boil.',
              },
              {
                step: 3,
                title: 'Add Mint and Sugar',
                detail:
                  'Pack a large handful of fresh spearmint (naanaa) into the pot. Add sugar — traditionally 4-6 large chunks broken from a sugar cone (qalib). Push the mint below the surface with a long spoon. Return to heat for 2-3 minutes.',
              },
              {
                step: 4,
                title: 'The Taste Test',
                detail:
                  'Pour a glass, taste it, and pour it back into the pot. Repeat. This step, called "turning" the tea, mixes the sugar and aerates the liquid. The host adjusts sugar and mint at this stage. This back-and-forth may happen 3-4 times.',
              },
              {
                step: 5,
                title: 'The High Pour',
                detail:
                  'Hold the berrad high — 30 to 50 centimeters above the glass — and pour in a steady stream. The height creates a layer of foam (rezza, "the crown") on top. A perfect pour fills the glass without spilling a drop. This is the signature move.',
              },
              {
                step: 6,
                title: 'Serve and Repeat',
                detail:
                  'Serve the first round. The pot stays on low heat. For the second and third rounds, add more boiling water, fresh mint if needed, and additional sugar. Each round grows stronger as the tea leaves continue to steep.',
              },
            ].map((s) => (
              <div key={s.step} className="card-moroccan p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tea Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            Tea Etiquette in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            The rules are unwritten but deeply felt. Getting them right earns respect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                The Three-Glass Tradition
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                A famous Moroccan proverb defines the three rounds:
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[var(--color-gold)] shrink-0">1st glass:</span>
                  &quot;Gentle as life&quot; — light, fresh, fragrant
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[var(--color-gold)] shrink-0">2nd glass:</span>
                  &quot;Strong as love&quot; — deeper, more concentrated
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[var(--color-gold)] shrink-0">3rd glass:</span>
                  &quot;Bitter as death&quot; — intense, heavily steeped
                </li>
              </ul>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-3">
                Drinking all three signals that you value the host&apos;s company. Leaving after one glass can suggest impatience.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[var(--color-accent)]" />
                Accepting and Refusing
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Always accept the first glass. Hold it in your right hand. If you cannot drink more, place your hand over your glass
                or leave it untouched — the host will understand. Outright verbal refusal is considered rude in most contexts.
                In carpet shops and medina stores, vendors offer tea to build rapport. Accepting does not obligate you to buy
                anything, despite what they may suggest.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[var(--color-accent)]" />
                Who Prepares the Tea
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                In traditional households, the male head of the family prepares and pours the tea — it is considered an
                honor and a demonstration of hospitality. Women typically prepare food, but the tea ceremony belongs to
                the host, male or female, who sits closest to the tray. Guests never pour their own tea.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-[var(--color-accent)]" />
                Drinking Technique
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Hold the glass at the rim between thumb and forefinger — it is too hot to wrap your hand around. Sip
                slowly. Slurping is acceptable and even common; it aerates the tea and cools it. Set the glass on the
                tray between sips, not on the floor or furniture. When finished, turn the glass upside down on the tray.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tea Variations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            Regional Tea Variations
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Mint tea dominates, but Morocco has a rich tradition of herbal infusions that vary by region and season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teaVariations.map((tea) => (
              <div key={tea.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <tea.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {tea.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{tea.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1 bg-[var(--surface-muted)] px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3 text-[var(--color-gold)]" /> {tea.region}
                  </span>
                  <span className="flex items-center gap-1 bg-[var(--surface-muted)] px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3 text-[var(--color-gold)]" /> {tea.season}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Tea Experiences by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            Best Tea Experiences by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Rooftop terraces, historic cafes, and hidden riad ceremonies. These are the places Moroccans and travelers go for the best glass of atay.
          </p>

          <div className="space-y-8">
            {teaExperiences.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
                  <city.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  {city.city}
                </h3>
                <div className="space-y-4">
                  {city.spots.map((spot) => (
                    <div key={spot.name} className="border-l-3 border-[var(--color-gold)] pl-4">
                      <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spot.name}
                      </h4>
                      <p className="text-xs text-[var(--color-accent)] mb-1">{spot.location} &middot; {spot.price}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{spot.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tea & Food Pairings ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            Tea &amp; Food Pairings
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Moroccan tea is almost never drunk alone. These are the traditional accompaniments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teaPairings.map((pair) => (
              <div key={pair.food} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {pair.food}
                  </h3>
                  <span className="text-xs text-[var(--color-gold)] font-medium">{pair.price}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{pair.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buying Moroccan Tea Sets ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            Buying a Moroccan Tea Set
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            A tea set makes one of the best souvenirs from Morocco. Here is what to look for and what to pay.
          </p>

          <div className="space-y-4">
            {teaSetItems.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    <Store className="w-4 h-4 inline mr-1.5 text-[var(--color-accent)]" />
                    {item.item}
                  </h3>
                  <span className="text-xs text-[var(--color-gold)] font-medium mt-1 md:mt-0">{item.priceRange}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  <span className="font-medium">Material:</span> {item.material}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-medium">Tip:</span> {item.tip}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-6 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-[var(--color-accent)]" />
              Bargaining Tips
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Start at 40% of the asking price and work up from there. Vendors in tourist areas inflate by 200-300%.
              The best deals are in the metalworkers&apos; souks (souk haddadine) rather than shops near major tourist
              sites. Seffarine Square in Fes has the highest quality. Check that teapot lids sit tightly, that spouts
              do not drip, and that glass paint is properly sealed under a glaze. Seasonal pricing can change — prices
              rise during peak tourist season (March-May, September-November).
            </p>
          </div>
        </div>
      </section>

      {/* ── How to Make Moroccan Tea at Home ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ListChecks className="w-8 h-8 inline mr-2 text-[var(--color-accent)]" />
            How to Make Moroccan Tea at Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            You do not need a berrad. Any small stainless steel teapot will work. Here is the method.
          </p>

          <div className="card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Ingredients (serves 4)
            </h3>
            <ul className="text-sm text-[var(--text-secondary)] space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                2 tablespoons Chinese gunpowder green tea (look for &quot;special gunpowder&quot; or &quot;3505&quot; grade)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                1 large bunch fresh spearmint (about 30 grams — do not use peppermint)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                6-8 tablespoons white sugar (adjust to taste; traditional is very sweet)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                1 liter boiling water
              </li>
            </ul>

            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Method
            </h3>
            <ol className="text-sm text-[var(--text-secondary)] space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <span>Rinse the tea: add gunpowder green tea to your pot, pour 100 ml boiling water, swirl for 10 seconds, discard the water. Keep the leaves.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span>Add 1 liter of boiling water to the rinsed leaves. Place on medium-low heat and let it simmer (not boil) for 4 minutes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span>Stuff the mint into the pot. Add the sugar. Push the mint below the waterline with a spoon. Return to heat for 2-3 minutes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <span>Pour a glass, taste, pour it back into the pot. Repeat 2-3 times. Adjust sugar if needed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
                <span>Pour from as high as you comfortably can into small glasses. The foam on top means you did it right.</span>
              </li>
            </ol>

            <div className="mt-6 p-4 bg-[var(--surface-muted)] rounded-lg">
              <p className="text-sm text-[var(--text-secondary)]">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                <strong>Pro tip:</strong> For the closest authentic taste, find Chinese gunpowder green tea at an Asian grocery
                store or online. Moroccan brands like Sultan or Menara are available on Amazon. Do not substitute with Japanese
                or Indian green teas — the flavor profile is completely different.
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
                What is Moroccan mint tea called?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                It is called &quot;atay&quot; (also spelled &quot;attay&quot; or &quot;atai&quot;) in Darija, the Moroccan Arabic
                dialect. The full name is &quot;atay b&apos;naanaa,&quot; meaning tea with mint. In Amazigh (Berber) languages,
                the word is also &quot;atay.&quot; Moroccans rarely call it &quot;Moroccan mint tea&quot; — that is a tourist term.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Why do Moroccans pour tea from a height?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The high pour does two things. It aerates the tea, creating a delicate foam on top that Moroccans call
                &quot;rezza&quot; (the crown). It also cools the liquid slightly, since the glasses have no handles and the tea is
                scalding hot. A smooth, foam-topped pour without spilling a drop is a point of pride for the host.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What does the three glasses of tea tradition mean in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A Moroccan proverb defines the three rounds: &quot;The first glass is gentle as life, the second is strong as love,
                the third is bitter as death.&quot; Each glass grows more concentrated as the leaves continue to steep. The tradition
                is about spending time together — rushing through tea is considered disrespectful.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it rude to refuse tea in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A flat refusal can come across as cold, since offering tea is a genuine gesture of hospitality. The polite
                approach is to accept the glass, take a small sip, and then set it down. If you truly cannot drink it (for health
                or dietary reasons), explain briefly and most Moroccans will understand. In shops, tea is often a sales tactic,
                but accepting it never obligates you to purchase anything.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What type of tea is used in Moroccan mint tea?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Chinese gunpowder green tea — specifically the &quot;3505&quot; or &quot;special gunpowder&quot; grade. The tea leaves
                are rolled into small pellets that unfurl when brewed. The most popular brands in Morocco are Sultan (green box)
                and Menara. Loose leaf only — Moroccans never use tea bags for atay.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much sugar is in traditional Moroccan tea?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A standard pot contains 4-6 large chunks of sugar cone, roughly equivalent to 8-12 teaspoons. Southern
                Morocco uses even more. You can request &quot;atay bla sukkar&quot; (without sugar) or &quot;shwiya dial sukkar&quot;
                (a little sugar). Many modern Moroccan cafes now offer reduced-sugar options as health awareness grows.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where can I buy an authentic Moroccan tea set?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Head to the metalworkers&apos; souk (souk haddadine) in Fes or Marrakech. Seffarine Square in Fes is the
                historic center of metalwork. A basic set (berrad, 6 glasses, tray) starts from 250 MAD. Artisan hand-engraved
                sets run from 500 MAD to 3,000 MAD. Always negotiate — start at 40% of the asking price and expect to settle
                around 60%. Seasonal pricing can change during peak tourist months.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/cuisine" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <UtensilsCrossed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Cuisine Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From tagine to couscous, pastilla to harira. The complete guide to Moroccan food, street eats, and dining etiquette.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Street Food &amp; Food Tours
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Best street food stalls, food markets, and guided food tours across Marrakech, Fes, Casablanca, and Essaouira.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/etiquette" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Etiquette Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Social customs, tipping norms, dress codes, and cultural do&apos;s and don&apos;ts for visitors to Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#2D1810] via-[#4A2C1A] to-[#1a0f08] text-white">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-6">
            Ready to Experience Moroccan Tea Culture?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            From a roadside glass in the Atlas Mountains to a silver-service ceremony in a Marrakech riad,
            tea is the thread that ties every Moroccan experience together. Plan your trip and taste it for yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-white px-8 py-3.5 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Explore Cities <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Best Time to Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

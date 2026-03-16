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
  Tag,
  User,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Moroccan Tea Culture: The Art of Mint Tea | CityGuide Blog',
  description:
    'Discover the deep history, preparation rituals, regional variations, and social codes behind Moroccan mint tea. A comprehensive guide to understanding atay nana, from Berber origins to modern tea ceremonies.',
  keywords: [
    'Moroccan mint tea',
    'atay nana',
    'Moroccan tea ceremony',
    'Berber whiskey',
    'Morocco tea culture',
    'how to make Moroccan tea',
    'Morocco hospitality traditions',
    'gunpowder green tea',
  ],
  openGraph: {
    title: 'Moroccan Tea Culture: The Art of Mint Tea',
    description:
      'A deep dive into the history, rituals, and social significance of Moroccan mint tea. Learn why every glass tells a story.',
    url: 'https://citytoursmorocco.com/blog/moroccan-tea-culture',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan mint tea being poured into ornate glasses',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/blog/moroccan-tea-culture' },
};

/* ================================================================
   TABLE OF CONTENTS DATA
   ================================================================ */

const tableOfContents = [
  { id: 'origins', label: 'Origins and History' },
  { id: 'ingredients', label: 'The Essential Ingredients' },
  { id: 'preparation', label: 'The Art of Preparation' },
  { id: 'pouring', label: 'Why Pour from a Height' },
  { id: 'social-codes', label: 'Social Codes and Etiquette' },
  { id: 'regional-variations', label: 'Regional Variations' },
  { id: 'health-benefits', label: 'Health Benefits' },
  { id: 'modern-evolution', label: 'Modern Evolution' },
  { id: 'experience-it', label: 'Where to Experience It' },
];

/* ================================================================
   RELATED ARTICLES
   ================================================================ */

const relatedArticles = [
  {
    slug: 'atlas-mountains-trekking',
    title: 'Atlas Mountains Trekking: The Complete Guide',
    excerpt: 'Everything you need for an unforgettable trek through the High Atlas.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80',
    category: 'Adventure',
    readTime: '18 min read',
  },
  {
    slug: 'medina-shopping-guide',
    title: 'How to Shop in Moroccan Medinas Like a Local',
    excerpt: 'Master the art of haggling and discover hidden artisan workshops.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    category: 'Practical',
    readTime: '16 min read',
  },
  {
    slug: 'complete-guide-to-moroccan-street-food',
    title: 'A Complete Guide to Moroccan Street Food',
    excerpt: 'From sizzling msemen at dawn to steaming bowls of harira at dusk.',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80',
    category: 'Food',
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
    headline: 'Moroccan Tea Culture: The Art of Mint Tea',
    description:
      'A deep dive into the history, rituals, and social significance of Moroccan mint tea.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1200&q=80',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: {
      '@type': 'Person',
      name: 'Amina El-Ouafi',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: 'https://citytoursmorocco.com',
    },
    url: 'https://citytoursmorocco.com/blog/moroccan-tea-culture',
    articleSection: 'Culture',
    keywords: 'Moroccan mint tea, tea ceremony, Morocco culture, atay nana',
    wordCount: 2200,
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

export default function MoroccanTeaCulturePage() {
  return (
    <>
      <JsonLd />

      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1600&q=80"
            alt="Traditional Moroccan mint tea being poured into ornate gold-rimmed glasses"
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
            <span className="text-white font-medium">Moroccan Tea Culture</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4">
              Culture
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]">
              Moroccan Tea Culture: The Art of Mint Tea
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
              More than a beverage, Moroccan mint tea is a ritual of hospitality, friendship, and centuries-old tradition poured from silver teapots into ornate glasses across every corner of the kingdom.
            </p>

            {/* Author + Meta */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150"
                  alt="Amina El-Ouafi"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                />
                <div>
                  <p className="font-semibold text-sm">Amina El-Ouafi</p>
                  <p className="text-xs text-white/60">Cultural Writer &amp; Food Expert</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  March 12, 2026
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  15 min read
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

            {/* Sidebar - Table of Contents */}
            <aside className="w-full xl:w-72 shrink-0 xl:order-last">
              <div className="xl:sticky xl:top-28 space-y-8">
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

                {/* Tags */}
                <div className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Mint Tea', 'Culture', 'Traditions', 'Hospitality', 'Berber', 'Ceremony'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article Content */}
            <article className="flex-1 min-w-0 prose-moroccan">
              <div className="max-w-none space-y-8 text-[var(--text-secondary)] text-base leading-[1.85]">

                <p className="text-lg text-[var(--text-primary)] font-medium leading-relaxed">
                  In Morocco, tea is never just tea. It is the first gesture of welcome when you enter a home, the pause that punctuates a business negotiation, and the quiet ceremony that brings families together at the end of each day. Known locally as <em>atay nana</em> (mint tea) or sometimes affectionately called &quot;Berber whiskey,&quot; this sweet, aromatic drink has been woven into the social fabric of Moroccan life for centuries.
                </p>

                {/* Origins */}
                <section id="origins">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Origins and History
                  </h2>
                  <p>
                    Tea arrived in Morocco through a circuitous route. While China has cultivated tea for thousands of years, it only reached Moroccan shores in the 18th century, brought by British merchants who found in the Moroccan port cities willing trading partners. Queen Anne of England had established tea-trading outposts along the North African coast, and when diplomatic gifts of Chinese gunpowder green tea were presented to the Moroccan sultan Moulay Ismail, the royal court became enamored.
                  </p>
                  <p>
                    By the mid-19th century, the Crimean War disrupted British tea trade routes to the Baltic, and surplus stocks were diverted to the Moroccan market. The Moroccans, already familiar with herbal infusions from their Amazigh (Berber) heritage, embraced green tea with remarkable enthusiasm. They combined it with their indigenous love of fresh mint and generous amounts of sugar to create something entirely new: a drink that was neither Chinese nor British, but unmistakably Moroccan.
                  </p>
                  <p>
                    The spread of tea from the royal palaces of Fes and Meknes to the Berber villages of the Atlas Mountains took less than a generation. By the late 1800s, tea had become the national drink, displacing earlier herbal infusions made with wormwood, absinthe, and pennyroyal. Today, Morocco is one of the world&apos;s largest importers of Chinese green tea, consuming approximately 75,000 tonnes annually.
                  </p>
                </section>

                {/* Ingredients */}
                <section id="ingredients">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    The Essential Ingredients
                  </h2>
                  <p>
                    Authentic Moroccan mint tea requires just three ingredients, but the quality of each one matters enormously.
                  </p>

                  <div className="card-moroccan p-6 my-6 space-y-4">
                    <div>
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Chinese Gunpowder Green Tea</h4>
                      <p className="mt-1">
                        The foundation is <em>chunmee</em> or, more traditionally, gunpowder green tea, named for its tightly rolled pellets that resemble gunpowder granules. The most prized variety in Morocco is &quot;Special Gunpowder&quot; (sometimes labeled &quot;3505&quot; after its Chinese export code). The pellets should be small, tightly rolled, and dark green, unfurling slowly when hot water is added. Moroccans judge tea quality by how long the pellets take to open: the slower, the better.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Fresh Spearmint (Mentha spicata)</h4>
                      <p className="mt-1">
                        The mint used in Moroccan tea is not peppermint but spearmint, specifically the <em>nana</em> variety, which has a softer, sweeter flavor without the sharp menthol bite. The best mint is grown in the Meknes region, where the mineral-rich soil produces exceptionally aromatic leaves. In any Moroccan market, you will see enormous bunches of fresh mint piled high at herb vendors&apos; stalls, their fragrance cutting through the smoke and spice of the medina.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Sugar</h4>
                      <p className="mt-1">
                        Moroccan tea is sweet by tradition, with a standard serving using roughly two tablespoons of sugar per glass. The sugar is not merely a sweetener; it plays a crucial role in the tea&apos;s chemistry, binding with tannins in the green tea to reduce bitterness and creating the syrupy mouthfeel that is characteristic of a properly made glass. Traditional Moroccan sugar comes in tall, hard, cone-shaped blocks called <em>qleb sokar</em> that must be chipped apart with a small hammer, though today most families use standard granulated sugar.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Preparation */}
                <section id="preparation">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    The Art of Preparation
                  </h2>
                  <p>
                    Making Moroccan tea is a deliberate, meditative process that cannot be rushed. It is typically the responsibility of the head of the household, whether male or female, and performing it well is considered a mark of refinement and hospitality.
                  </p>
                  <p>
                    The process begins by rinsing the tea. One or two tablespoons of gunpowder green tea are placed in a metal teapot (traditionally brass or silver-plated), and a small amount of boiling water is added. The pot is swirled gently, then this first water is discarded. This critical step, known as &quot;washing the tea,&quot; removes the initial bitterness and dust from the leaves without extracting the deeper flavors.
                  </p>
                  <p>
                    Fresh boiling water is then poured over the rinsed leaves and allowed to steep for two to three minutes. Next comes the sugar, added directly to the pot in generous quantities. A large handful of fresh mint is stuffed into the pot, leaves and stems together, pushed down firmly until the pot is nearly full.
                  </p>
                  <p>
                    The pot is returned to the heat source, traditionally a small charcoal brazier called a <em>majmar</em> but today more commonly a gas burner, and brought just to the verge of boiling. The tea maker then pours a glass, examines the color and froth, and pours it back into the pot. This process, repeated three or four times, is called <em>tnaqqel</em> and serves to thoroughly mix the sugar, tea, and mint while bringing the brew to its optimal strength and temperature.
                  </p>
                </section>

                {/* Pouring */}
                <section id="pouring">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Why Pour from a Height
                  </h2>
                  <p>
                    Perhaps the most visually striking aspect of Moroccan tea culture is the pour. The tea is served from a height of at least 30 centimeters (about a foot) above the small, ornately decorated glasses. This is not showmanship; it serves several practical purposes.
                  </p>
                  <p>
                    First, the high pour aerates the tea, creating a layer of delicate foam or froth on the surface that Moroccans call <em>razzat</em>. This froth is considered essential; a glass without it suggests the tea was poorly made. Second, the exposure to air during the pour cools the tea slightly, making it drinkable sooner. Third, the stream of tea mixes oxygen into the liquid, enhancing the release of aromatic compounds from the mint and subtly changing the flavor profile.
                  </p>
                  <p>
                    Skilled tea pourers can fill multiple glasses in a single, unbroken stream, moving the pot across a tray of glasses without spilling a drop. In some regions, the height of the pour is a matter of pride, with the best practitioners pouring from arm&apos;s length or higher. Watch for this performance in the tea houses of Marrakech and Fes, where the pour itself becomes a form of entertainment and artistry.
                  </p>

                  <div className="relative my-8 rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1585155770913-5f0a78a5a367?w=900&q=80"
                      alt="Close-up of ornate Moroccan tea glasses with golden rims filled with mint tea"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <p className="text-xs text-[var(--text-muted)] mt-2 italic">
                      Traditional Moroccan tea glasses are often richly decorated with gold or colored enamel designs, each set a small work of art.
                    </p>
                  </div>
                </section>

                {/* Social Codes */}
                <section id="social-codes">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Social Codes and Etiquette
                  </h2>
                  <p>
                    Understanding the social rules surrounding Moroccan tea will deepen your experience immeasurably and demonstrate respect for your hosts. These are not written rules but unspoken codes passed down through generations.
                  </p>
                  <p>
                    <strong>Never refuse tea.</strong> To decline an offered glass of tea is considered a serious social slight in Morocco. Even if you are not thirsty, accept the glass, take a few sips, and express gratitude. If you truly cannot drink, hold the glass warmly and explain with genuine apology. Most Moroccans will understand, but the initial offer should always be acknowledged with warmth.
                  </p>
                  <p>
                    <strong>Three glasses is the standard.</strong> There is a famous Moroccan saying: &quot;The first glass is as gentle as life, the second is as strong as love, the third is as bitter as death.&quot; Tradition dictates that you should drink three glasses. Leaving after one or two may be interpreted as dissatisfaction with the hospitality. Each round is slightly different in taste, as the tea steeps longer and the mint slowly releases more of its oils.
                  </p>
                  <p>
                    <strong>Use your right hand.</strong> Always receive and hold your tea glass with your right hand or both hands. The left hand is considered unclean in Moroccan culture, and using it alone to accept tea would be a subtle breach of etiquette.
                  </p>
                  <p>
                    <strong>The host drinks last.</strong> The person preparing and pouring the tea always serves others first and pours their own glass last. When you are invited into a home, notice that your host will not drink until all guests have been served.
                  </p>
                  <p>
                    <strong>Slurping is acceptable.</strong> Unlike in some Western cultures where slurping is frowned upon, in Morocco it is perfectly acceptable and even expected to sip your tea audibly. The sound indicates enjoyment and appreciation.
                  </p>
                </section>

                {/* Regional Variations */}
                <section id="regional-variations">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Regional Variations
                  </h2>
                  <p>
                    While the basic formula of green tea, mint, and sugar remains consistent across Morocco, each region adds its own twist, reflecting local terroir and tradition.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">The North (Tangier, Tetouan)</h4>
                      <p className="text-sm">
                        In the northern Rif region, tea is often infused with fresh orange blossom water (<em>mazhar</em>), adding a floral sweetness that reflects the Andalusian influence on the region. Some families add pine nuts floating on top.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">The Sahara and South</h4>
                      <p className="text-sm">
                        Saharan tea traditions draw on both Moroccan and Mauritanian customs. Tea here is brewed exceptionally strong, in smaller quantities, and served in three distinct rounds with decreasing sweetness. Saffron or wild herbs from the desert are sometimes added.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">The Atlas Mountains</h4>
                      <p className="text-sm">
                        In the High Atlas, Berber families infuse their tea with wild thyme (<em>zaatar</em>), rosemary, or wormwood (<em>sheeba</em>), especially in winter. These alpine herbs add an earthy warmth to the tea perfectly suited to cold mountain evenings.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Marrakech and the Plains</h4>
                      <p className="text-sm">
                        The classic Marrakech style is the international standard: strong gunpowder tea, abundant fresh spearmint, and generous sugar. In summer, lemon verbena (<em>louiza</em>) is sometimes substituted for or added alongside the mint, giving the tea a bright, citrusy lift.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Health Benefits */}
                <section id="health-benefits">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Health Benefits
                  </h2>
                  <p>
                    Beyond its cultural significance, Moroccan mint tea offers genuine health benefits that have been recognized by traditional healers for centuries and are now supported by modern research.
                  </p>
                  <p>
                    Green tea is rich in catechins and polyphenols, powerful antioxidants that protect cells from oxidative damage. Studies have shown that regular green tea consumption can support cardiovascular health, improve metabolic function, and reduce inflammation. The catechin EGCG (epigallocatechin gallate) in particular has been extensively studied for its anti-inflammatory properties.
                  </p>
                  <p>
                    Spearmint, the mint variety used in Moroccan tea, has its own therapeutic properties. It has been traditionally used to aid digestion, relieve nausea, and soothe stomach discomfort. Modern research has confirmed its antimicrobial properties and its potential to reduce hormonal imbalances. In Morocco, a glass of mint tea after a heavy meal is not just tradition; it is practical medicine.
                  </p>
                  <p>
                    The high sugar content is the one caveat. Traditional Moroccan tea is very sweet, and drinking multiple glasses daily adds significant sugar intake. Health-conscious Moroccans are increasingly requesting less sugar (<em>b shwiya d&apos;sokar</em>), and some cafes now offer sugar-free versions, though purists insist the balance is not the same.
                  </p>
                </section>

                {/* Modern Evolution */}
                <section id="modern-evolution">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Modern Evolution
                  </h2>
                  <p>
                    Like all living traditions, Moroccan tea culture continues to evolve. In the cities, a new generation of cafes is experimenting with the form while respecting the spirit of the tradition. You can now find Moroccan-style tea infused with saffron, rose petals, cinnamon, or even lavender from the farms outside Marrakech.
                  </p>
                  <p>
                    Coffee culture has made significant inroads, particularly among younger urban Moroccans. Espresso bars and specialty coffee shops have proliferated in Casablanca, Rabat, and the Gueliz district of Marrakech. Yet even the most dedicated coffee drinker in Morocco would not dream of receiving guests without offering tea first. The social ritual transcends the beverage itself.
                  </p>
                  <p>
                    The traditional silver-plated teapot and ornate glasses remain ubiquitous, but there is a growing market for artisan-designed modern tea sets that blend traditional motifs with contemporary aesthetics. Moroccan designers are creating beautiful ceramic and glass tea sets that honor the tradition while appealing to modern sensibilities.
                  </p>
                  <p>
                    International interest in Moroccan tea has surged alongside the growth of Moroccan tourism. Many riads and cooking schools now offer tea ceremony workshops where visitors can learn the proper preparation technique, practice the high pour, and understand the cultural context. These experiences rank among the most popular activities in Marrakech and Fes, connecting visitors to a tradition that is at once simple and profoundly meaningful.
                  </p>
                </section>

                {/* Where to Experience */}
                <section id="experience-it">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Where to Experience Moroccan Tea Culture
                  </h2>
                  <p>
                    The best place to experience Moroccan tea is in a private home, as an invited guest. But for travelers, there are many accessible options:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>
                      <strong>Cafe des Epices, Marrakech:</strong> Perched above the spice souk with rooftop views of the medina. The mint tea here is made with fresh herbs from the market below.
                    </li>
                    <li>
                      <strong>Cafe Clock, Fes:</strong> A cultural institution that hosts storytelling nights and calligraphy workshops alongside excellent traditional tea service.
                    </li>
                    <li>
                      <strong>Riad el-Fenn, Marrakech:</strong> For a luxury interpretation of the tea ceremony, this renowned riad offers an afternoon tea service that blends Moroccan tradition with contemporary elegance.
                    </li>
                    <li>
                      <strong>Grand Socco, Tangier:</strong> The cafes surrounding the Grand Socco have been serving tea since the international era. Sit where Paul Bowles once sat and watch the theater of the square unfold.
                    </li>
                    <li>
                      <strong>Any roadside cafe:</strong> Some of the best tea in Morocco comes from the most unassuming places. A small roadside cafe in the Atlas Mountains, a stall in a rural market, or a simple neighborhood cafe in any Moroccan town will serve you tea that is made with care and offered with genuine warmth.
                    </li>
                  </ul>
                  <p>
                    Wherever you drink it, remember that the glass in your hand represents something far greater than its ingredients. It is an invitation to slow down, to connect, and to participate in a tradition that has sustained Moroccan social life for over two centuries. Accept it with both hands and an open heart.
                  </p>
                </section>

                {/* Author Bio */}
                <div className="card-featured p-6 md:p-8 mt-12">
                  <div className="flex items-start gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150"
                      alt="Amina El-Ouafi"
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[var(--color-accent-200)]"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">About the Author</span>
                      </div>
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg">
                        Amina El-Ouafi
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                        Amina is a cultural writer and food expert based in Fes. A former hotel manager turned tourism advocate, she has spent two decades documenting Morocco&apos;s culinary traditions and connecting travelers with authentic local experiences. She speaks Arabic, French, and Amazigh, and her grandmother&apos;s tea recipe remains the gold standard in her family.
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

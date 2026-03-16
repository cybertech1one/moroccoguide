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
  ShoppingBag,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'How to Shop in Moroccan Medinas Like a Local | CityGuide Blog',
  description:
    'Master the art of haggling in Moroccan souks. Learn what to buy, where to find authentic crafts, fair price ranges, and how to navigate the medina marketplace with confidence. A complete guide to shopping in Marrakech, Fes, and beyond.',
  keywords: [
    'Moroccan medina shopping',
    'haggling Morocco',
    'Moroccan souks guide',
    'Marrakech souk shopping',
    'Fes medina shopping',
    'Moroccan crafts buying guide',
    'Morocco leather goods',
    'Moroccan ceramics',
    'Berber carpets guide',
    'Morocco fair prices',
  ],
  openGraph: {
    title: 'How to Shop in Moroccan Medinas Like a Local',
    description:
      'Master haggling, know what to buy, and discover hidden artisan workshops in Morocco\'s legendary souks.',
    url: 'https://citytoursmorocco.com/blog/medina-shopping-guide',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan souk with spices, textiles, and traditional crafts',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/blog/medina-shopping-guide' },
};

/* ================================================================
   TABLE OF CONTENTS
   ================================================================ */

const tableOfContents = [
  { id: 'understanding-souks', label: 'Understanding the Souk System' },
  { id: 'art-of-haggling', label: 'The Art of Haggling' },
  { id: 'what-to-buy', label: 'What to Buy (and What to Skip)' },
  { id: 'leather', label: 'Leather Goods' },
  { id: 'ceramics', label: 'Ceramics and Pottery' },
  { id: 'carpets', label: 'Berber Carpets and Textiles' },
  { id: 'metalwork', label: 'Metalwork and Lanterns' },
  { id: 'spices', label: 'Spices, Argan Oil, and Cosmetics' },
  { id: 'city-guide', label: 'Shopping by City' },
  { id: 'scams', label: 'Common Scams to Avoid' },
  { id: 'shipping', label: 'Getting Your Purchases Home' },
];

/* ================================================================
   RELATED ARTICLES
   ================================================================ */

const relatedArticles = [
  {
    slug: 'moroccan-tea-culture',
    title: 'Moroccan Tea Culture: The Art of Mint Tea',
    excerpt: 'The ritual of Moroccan mint tea is a cornerstone of daily life and hospitality.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
    category: 'Culture',
    readTime: '15 min read',
  },
  {
    slug: 'atlas-mountains-trekking',
    title: 'Atlas Mountains Trekking: The Complete Guide',
    excerpt: 'Everything you need for an unforgettable trek through the High Atlas.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80',
    category: 'Adventure',
    readTime: '18 min read',
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
    headline: 'How to Shop in Moroccan Medinas Like a Local',
    description:
      'A comprehensive guide to shopping in Moroccan souks, covering haggling, crafts, fair prices, and artisan workshops.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80',
    datePublished: '2026-03-04',
    dateModified: '2026-03-04',
    author: { '@type': 'Person', name: 'Youssef Amrani' },
    publisher: { '@type': 'Organization', name: 'CityGuide', url: 'https://citytoursmorocco.com' },
    url: 'https://citytoursmorocco.com/blog/medina-shopping-guide',
    articleSection: 'Practical',
    keywords: 'Moroccan souks, haggling, medina shopping, Moroccan crafts',
    wordCount: 2400,
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

export default function MedinaShoppingGuidePage() {
  return (
    <>
      <JsonLd />

      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1600&q=80"
            alt="Vibrant Moroccan souk with colorful spices, textiles, and handcrafted goods"
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
            <span className="text-white font-medium">Medina Shopping Guide</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/30 text-[var(--color-primary-100)] text-xs font-bold uppercase tracking-widest mb-4">
              <ShoppingBag className="w-3 h-3" />
              Practical
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]">
              How to Shop in Moroccan Medinas Like a Local
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
              The Moroccan souk is a marketplace, a social institution, and a living museum of craft traditions stretching back a thousand years. Learn to navigate it with confidence, respect, and a keen eye for quality.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
                  alt="Youssef Amrani"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                />
                <div>
                  <p className="font-semibold text-sm">Youssef Amrani</p>
                  <p className="text-xs text-white/60">Travel Journalist &amp; Culture Writer</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  March 4, 2026
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  16 min read
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

                {/* Price Guide Quick Reference */}
                <div className="card-featured p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">
                    Quick Price Guide (MAD)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Leather bag (quality)</span>
                      <span className="font-semibold text-[var(--text-primary)]">300-800</span>
                    </div>
                    <div className="flex justify-between border-t border-[var(--border-light)] pt-2">
                      <span className="text-[var(--text-secondary)]">Berber carpet (small)</span>
                      <span className="font-semibold text-[var(--text-primary)]">500-2,000</span>
                    </div>
                    <div className="flex justify-between border-t border-[var(--border-light)] pt-2">
                      <span className="text-[var(--text-secondary)]">Ceramic bowl</span>
                      <span className="font-semibold text-[var(--text-primary)]">30-150</span>
                    </div>
                    <div className="flex justify-between border-t border-[var(--border-light)] pt-2">
                      <span className="text-[var(--text-secondary)]">Brass lantern</span>
                      <span className="font-semibold text-[var(--text-primary)]">200-1,500</span>
                    </div>
                    <div className="flex justify-between border-t border-[var(--border-light)] pt-2">
                      <span className="text-[var(--text-secondary)]">Argan oil (1L, cosmetic)</span>
                      <span className="font-semibold text-[var(--text-primary)]">200-400</span>
                    </div>
                    <div className="flex justify-between border-t border-[var(--border-light)] pt-2">
                      <span className="text-[var(--text-secondary)]">Babouche slippers</span>
                      <span className="font-semibold text-[var(--text-primary)]">80-250</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-4 italic">
                    Prices are approximate fair ranges for good quality items. Tourist areas will be higher.
                  </p>
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
                  Shopping in a Moroccan medina can be one of the most exhilarating and overwhelming experiences of your trip. The narrow alleys are a sensory overload of color, sound, and smell, lined with stalls selling everything from hand-stitched leather to pyramids of saffron and cumin. Without preparation, it is easy to feel lost, pressured, or uncertain about value. This guide will give you the knowledge and confidence to navigate the souks like someone who has been doing it their whole life.
                </p>

                {/* Understanding the Souk System */}
                <section id="understanding-souks">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Understanding the Souk System
                  </h2>
                  <p>
                    Moroccan medinas are not random bazaars; they are carefully organized commercial ecosystems with roots stretching back to the medieval period. Most historic medinas follow a consistent layout that, once understood, makes navigation far easier.
                  </p>
                  <p>
                    At the center of every medina sits the grand mosque, and around it cluster the most prestigious trades: bookbinders, silk merchants, and perfumers. These trades were historically considered &quot;clean&quot; and appropriate for proximity to the sacred space. As you move outward from the mosque, the trades become progressively more industrial: woodworkers, then metalworkers, then leather tanners, and finally, at the very edges of the medina, the noisiest and most pungent trades like blacksmithing and dyeing.
                  </p>
                  <p>
                    Each trade occupies its own souk, or quarter, named after the goods sold there. The <em>souk el-attarin</em> sells spices and perfumes. The <em>souk es-sebbat</em> sells babouche slippers. The <em>souk en-nejjarin</em> sells woodwork. Learning these names and their approximate locations in the medina you are visiting gives you a mental map that makes the labyrinth far less intimidating.
                  </p>
                  <p>
                    Many souks also have a <em>kissaria</em>, a covered market at the commercial heart of the medina that sells the most valuable goods: jewelry, fine textiles, and imported wares. The kissaria in Fes and Marrakech are architectural marvels in their own right, with vaulted ceilings and heavy wooden doors that are locked each evening.
                  </p>
                </section>

                {/* Art of Haggling */}
                <section id="art-of-haggling">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    The Art of Haggling
                  </h2>
                  <p>
                    Haggling is not a battle; it is a social exchange. In Moroccan culture, the negotiation process is as valued as the transaction itself. The shopkeeper is not trying to cheat you, and you are not trying to cheat the shopkeeper. You are both participating in a ritual of commerce that has been refined over centuries. Approach it with humor, patience, and respect, and it becomes one of the most enjoyable aspects of your trip.
                  </p>

                  <div className="card-featured p-6 my-6">
                    <h4 className="font-bold text-[var(--text-primary)] mb-3">The Golden Rules of Haggling</h4>
                    <ol className="text-sm space-y-3 list-decimal pl-5">
                      <li>
                        <strong>Never ask the price unless you are genuinely interested.</strong> Asking signals intent. If a shopkeeper quotes a price and you walk away without negotiating, it is considered rude but understandable. If you negotiate and then walk away from a mutually agreed price, that is a serious breach of etiquette.
                      </li>
                      <li>
                        <strong>Start at roughly one-third of the asking price.</strong> This is not a fixed rule, but it is a reasonable starting point for most items in tourist-heavy areas. In less touristy medinas, starting at half the asking price may be more appropriate. The final price typically settles at 40-60% of the initial ask.
                      </li>
                      <li>
                        <strong>Take your time.</strong> The best negotiations happen slowly, over tea. A shopkeeper who offers you tea is investing time in the interaction. Accept it, chat, and let the conversation flow naturally toward price. Rushing signals that you are uncomfortable, which weakens your position.
                      </li>
                      <li>
                        <strong>The walk-away is your strongest tool.</strong> If the price is not right, thank the shopkeeper warmly and begin to leave. If there is room to come down, they will call you back. If they do not call you back, the price may have been fair, or you can return later. No negotiation is ever truly final until money changes hands.
                      </li>
                      <li>
                        <strong>Buy in bulk for better prices.</strong> If you like a shopkeeper&apos;s wares, buying multiple items gives you significant leverage. &quot;I would like all three, what is your best price for everything?&quot; often yields a better deal than negotiating item by item.
                      </li>
                      <li>
                        <strong>Know the value before you negotiate.</strong> Spend your first day browsing without buying. Visit several shops selling similar items to understand the range of quality and price. This gives you a realistic benchmark for negotiations.
                      </li>
                    </ol>
                  </div>
                  <p>
                    One important note: not everything is negotiable. Food markets, pharmacies, and government-run cooperatives have fixed prices. Some upscale boutiques in the medina also operate on a fixed-price model, clearly marked with price tags. In these establishments, attempting to haggle is inappropriate.
                  </p>
                </section>

                {/* What to Buy */}
                <section id="what-to-buy">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    What to Buy (and What to Skip)
                  </h2>
                  <p>
                    Morocco produces an extraordinary range of handcrafted goods, but not everything sold in the souks is Moroccan-made. Mass-produced items from China and India have infiltrated many markets, particularly in the most tourist-heavy areas. Knowing what genuine Moroccan craftsmanship looks like will help you invest your money in items with real cultural value and artisan provenance.
                  </p>
                  <p>
                    <strong>Worth buying:</strong> Hand-stitched leather goods from Fes, hand-painted ceramics from Safi, hand-knotted Berber carpets, beaten brass and copperwork, traditional babouche slippers, pure argan oil, ras el hanout spice blends, handwoven textiles, and zellige tile-inspired items made by genuine artisans.
                  </p>
                  <p>
                    <strong>Approach with caution:</strong> Mass-produced &quot;Moroccan&quot; lanterns (many are imported), pre-packaged saffron (often adulterated with safflower or turmeric), &quot;antique&quot; Berber jewelry (much of it is newly made to look old), and fossils (genuine Moroccan fossils exist, but fakes are widespread).
                  </p>
                </section>

                <div className="relative my-8 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531501410720-c8d437636169?w=900&q=80"
                    alt="Stacks of colorful handwoven Berber carpets in a Moroccan medina shop"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <p className="text-xs text-[var(--text-muted)] mt-2 italic">
                    Berber carpets are among Morocco&apos;s finest exports. Each region produces distinctive patterns, colors, and weaving techniques.
                  </p>
                </div>

                {/* Leather */}
                <section id="leather">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Leather Goods
                  </h2>
                  <p>
                    Morocco has been producing leather since the 7th century, and the tanneries of Fes are among the oldest continuously operating industrial sites in the world. Moroccan leather, known historically as &quot;Morocco leather&quot; in Europe, was prized for its softness and durability and was the material of choice for bookbinding across the medieval world.
                  </p>
                  <p>
                    Today, the best leather goods are still found in Fes, where goatskin is tanned using traditional methods involving pigeon droppings (for softening), quicklime, and natural dyes. The Chouara and Sidi Moussa tanneries in Fes offer visitor terraces where you can watch the entire process. The leather is then made into bags, jackets, belts, wallets, and the iconic babouche slippers by skilled artisans in workshops throughout the medina.
                  </p>
                  <p>
                    <strong>Quality indicators:</strong> Genuine Moroccan leather should be supple, not stiff. It should smell of leather, not chemicals. The stitching should be even and tight. Dyed leather should not transfer color to your fingers when rubbed firmly. For bags, check that hardware (zippers, clasps) is solid, and seams are reinforced at stress points.
                  </p>
                  <p>
                    <strong>Fair prices:</strong> A quality leather shoulder bag runs 300-800 MAD. A pair of babouche slippers costs 80-200 MAD depending on embellishment. Leather jackets range from 1,000-3,000 MAD for good quality. If a price seems too low, the leather may be synthetic or poor quality.
                  </p>
                </section>

                {/* Ceramics */}
                <section id="ceramics">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Ceramics and Pottery
                  </h2>
                  <p>
                    Moroccan ceramics are among the most beautiful in the Islamic world, and each region produces distinctive styles that reflect centuries of artistic tradition. The two main centers of production are Fes and Safi.
                  </p>
                  <p>
                    <strong>Fes ceramics</strong> are characterized by the distinctive blue-and-white palette derived from cobalt oxide. The finest pieces feature intricate geometric and floral patterns painted freehand by master artisans called <em>maalems</em>. The Fassi style includes the famous zellige tilework that adorns palaces and mosques, as well as household items like plates, bowls, and tagine pots.
                  </p>
                  <p>
                    <strong>Safi ceramics</strong> use a broader color palette, including yellows, greens, and multicolored designs. Safi is Morocco&apos;s largest pottery-producing center, and you can visit workshops where potters throw, glaze, and fire their wares in wood-burning kilns. The pottery quarter of Safi is a fascinating place to watch the entire production process from raw clay to finished product.
                  </p>
                  <p>
                    <strong>Quality indicators:</strong> Handmade ceramics will have slight irregularities that machine-made pieces lack. Check the bottom of any piece: handmade pottery often shows unglazed areas where it rested in the kiln, and the clay body should be a warm terracotta color. Hand-painted designs will have subtle variations in line width and spacing. The glaze should be smooth and free of cracks (crazing).
                  </p>
                  <p>
                    <strong>Fair prices:</strong> A small hand-painted bowl costs 30-80 MAD. A large serving plate runs 100-300 MAD. A decorated tagine pot (functional) costs 80-250 MAD. Museum-quality pieces from master artisans can run into the thousands.
                  </p>
                </section>

                {/* Carpets */}
                <section id="carpets">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Berber Carpets and Textiles
                  </h2>
                  <p>
                    Berber carpets are perhaps Morocco&apos;s most iconic export, and buying one in the souk is an experience unto itself. The carpet shop ritual involves sitting on cushions, drinking tea, and watching as the merchant unfurls carpet after carpet before you, explaining the origin, symbolism, and technique of each one.
                  </p>
                  <p>
                    There are two main categories of Moroccan carpet. <strong>Knotted pile carpets</strong>, known as <em>rabati</em> (from Rabat) or <em>mediouna</em>, are the thicker, more formal type, influenced by Turkish and Persian traditions. They are woven on vertical looms and feature elaborate geometric patterns in deep reds, blues, and greens. <strong>Flat-weave carpets</strong>, called <em>kilim</em> or <em>hanbel</em>, are lighter and more graphic, with bold stripes and abstract Berber symbols. They are woven by women in the Atlas Mountains and the Rif region.
                  </p>
                  <p>
                    The most famous Berber carpet styles include the <strong>Beni Ourain</strong> (cream-colored wool with black diamond patterns from the Middle Atlas), the <strong>Azilal</strong> (colorful, abstract designs on a light background from the central High Atlas), the <strong>Boucherouite</strong> (made from recycled fabric scraps, a tradition born from necessity), and the <strong>Taznakht</strong> (rich burgundy and orange patterns from the Anti-Atlas).
                  </p>
                  <p>
                    <strong>Quality indicators:</strong> Flip the carpet over and examine the back. In a hand-knotted carpet, the pattern should be clearly visible on both sides. The higher the knot count per square centimeter, the finer the carpet. Natural dyes produce softer, more nuanced colors than synthetic dyes, which tend to be brighter and more uniform. Pull gently on the fringe: on a genuine hand-knotted carpet, the fringe is an extension of the warp threads, not sewn on.
                  </p>
                  <p>
                    <strong>Fair prices:</strong> A small Beni Ourain rug (1.5x1m) runs 500-2,000 MAD. A large room-size carpet (3x2m) ranges from 3,000-15,000 MAD depending on quality and age. Boucherouite rugs are generally less expensive, from 300-1,500 MAD. Antique pieces command significant premiums.
                  </p>
                </section>

                {/* Metalwork */}
                <section id="metalwork">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Metalwork and Lanterns
                  </h2>
                  <p>
                    Morocco&apos;s metalworking tradition produces stunning lanterns, trays, teapots, and decorative objects in brass, copper, and silver. The most skilled metalworkers are found in Marrakech and Fes, where workshops in the <em>souk en-nahas</em> (copper souk) echo with the ring of hammers on metal all day long.
                  </p>
                  <p>
                    The pierced metal lanterns that cast intricate shadow patterns on walls and ceilings are among the most popular purchases. Handmade versions are crafted from a single sheet of metal, punched and hammered into shape, then finished with glass panels or left open. Mass-produced versions are welded together from pre-cut parts and lack the refinement of handmade pieces.
                  </p>
                  <p>
                    <strong>Quality indicators:</strong> A handmade lantern will show subtle irregularities in the pierced patterns and a slight warmth where the metal has been worked by hand. The edges will be smooth, not sharp. Genuine brass has a warm, golden glow; nickel-plated steel, which is often sold as brass, has a cooler, more silvery tone. A magnet test can help: brass is not magnetic, steel is.
                  </p>
                </section>

                {/* Spices */}
                <section id="spices">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Spices, Argan Oil, and Cosmetics
                  </h2>
                  <p>
                    The spice souks of Morocco are a feast for the senses, with pyramids of golden turmeric, crimson paprika, earthy cumin, and the precious saffron threads for which Morocco is one of the world&apos;s top producers. The key spice blend to look for is <em>ras el hanout</em>, literally &quot;head of the shop,&quot; a complex mixture of 20 to 40 spices that varies from vendor to vendor. Each spice merchant has their own proprietary recipe, passed down through generations, and tasting different versions is a highlight of any souk visit.
                  </p>
                  <p>
                    <strong>Saffron:</strong> Morocco produces excellent saffron, primarily in the Taliouine region of the Anti-Atlas. Genuine saffron is extraordinarily expensive (30-50 MAD per gram) because each crocus flower produces only three stigmas, and harvesting is done entirely by hand. Be cautious: much of the &quot;saffron&quot; sold in tourist areas is actually safflower, which looks similar but lacks saffron&apos;s distinctive flavor. Genuine saffron threads are deep red with slightly lighter orange tips, never uniformly colored, and they should release a deep golden-yellow color when steeped in warm water.
                  </p>
                  <p>
                    <strong>Argan oil:</strong> Morocco is the only country in the world where the argan tree grows, making Moroccan argan oil unique and authentic. There are two types: culinary (darker, with a nutty flavor from roasted kernels) and cosmetic (lighter, cold-pressed from raw kernels). Pure cosmetic argan oil should be virtually odorless with a very light, slightly nutty scent. If it smells strongly or is very cheap, it may be diluted or mixed with other oils. Buy from women&apos;s cooperatives when possible, as these ensure fair prices for the women who do the labor-intensive work of cracking argan nuts.
                  </p>
                  <p>
                    <strong>Black soap and rhassoul:</strong> Other cosmetic products worth buying include <em>savon noir</em> (Moroccan black soap), made from olive oil and used in hammam scrubs, and <em>ghassoul</em> (rhassoul clay), a mineral-rich clay from the Atlas Mountains used as a natural shampoo and skin treatment for centuries.
                  </p>
                </section>

                {/* City Guide */}
                <section id="city-guide">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Shopping by City
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Marrakech</h4>
                      <p className="text-sm">
                        The largest and most tourist-oriented souk in Morocco. Prices are higher, but so is the sheer variety and the spectacle. Best for: lanterns, metalwork, leather bags, colorful textiles, and the overall souk experience. The souks radiate north from Jemaa el-Fnaa into a maze of specialized markets. Visit the Ensemble Artisanal (government-run cooperative) first to understand quality and fixed prices before negotiating in the souk.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Fes</h4>
                      <p className="text-sm">
                        The most authentic medina experience and the best city for artisan crafts. Best for: leather (visit the tanneries), ceramics (Fes blue-and-white), woodwork (cedar and thuya), and textiles. The Fes medina is less geared toward tourists than Marrakech, meaning prices are often lower and quality higher. Navigate to the specific souk for the craft you want.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Essaouira</h4>
                      <p className="text-sm">
                        A relaxed, artistic atmosphere with an excellent selection of contemporary crafts. Best for: thuya wood boxes and bowls, silver jewelry, art, and argan oil. The medina is compact and easy to navigate, and shopkeepers are generally less aggressive than in Marrakech. Many artists have studios in the medina that double as galleries.
                      </p>
                    </div>
                    <div className="card-moroccan p-5">
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">Chefchaouen</h4>
                      <p className="text-sm">
                        A smaller medina with a focus on Rif region crafts. Best for: woven blankets, goat cheese, handmade soap, and the distinctively patterned Rif textiles. The blue-painted streets make shopping here exceptionally photogenic. Prices are lower than Marrakech for similar items.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Scams */}
                <section id="scams">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Common Scams to Avoid
                  </h2>
                  <p>
                    The vast majority of Moroccan shopkeepers are honest traders, but a few common practices in tourist areas are worth knowing about:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>
                      <strong>The &quot;my friend&apos;s shop&quot; guide:</strong> Someone offers to show you around the medina and leads you to specific shops where they receive a commission. The commission (up to 30-40%) is added to your price. If you want a guide, hire an official one or navigate independently.
                    </li>
                    <li>
                      <strong>The bait and switch:</strong> A shopkeeper shows you a beautiful, high-quality item, you agree on a price, and the item wrapped for you is a lower-quality version. Always watch your purchase being wrapped and check the item carefully before handing over money.
                    </li>
                    <li>
                      <strong>Fake saffron:</strong> As mentioned, safflower is often sold as saffron at saffron prices. Buy from reputable spice merchants or cooperatives, and learn to identify the real thing by its color, aroma, and water test.
                    </li>
                    <li>
                      <strong>The &quot;closing down&quot; sale:</strong> A shop claims to be closing and offers drastic discounts. The shop never actually closes. Evaluate items and prices on their own merit, regardless of urgency claims.
                    </li>
                    <li>
                      <strong>Currency confusion:</strong> Some shopkeepers quote prices in dirhams but then claim they meant euros when you hand over payment. Always confirm the currency explicitly before agreeing to a price.
                    </li>
                  </ul>
                  <p>
                    The best defense against all of these is preparation: know what you want to buy, understand fair price ranges, and do not feel pressured into any transaction. Walking away is always an option, and a legitimate shopkeeper will respect that.
                  </p>
                </section>

                {/* Shipping */}
                <section id="shipping">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pt-4">
                    Getting Your Purchases Home
                  </h2>
                  <p>
                    For small items like spices, oils, and small ceramics, pack them in your checked luggage wrapped in clothing for protection. Argan oil should be placed in a sealed plastic bag to prevent leaks. Spices should be in sealed containers and declared at customs if required by your home country.
                  </p>
                  <p>
                    For larger items like carpets and lanterns, most reputable shops offer international shipping. Get a written receipt with the shop&apos;s details, a description of the item, and the agreed shipping cost. Some shops use DHL or FedEx, while others use the Moroccan postal service, which is reliable but slower. Expect to pay 300-800 MAD for shipping a medium-sized carpet to Europe, and 500-1,500 MAD to North America.
                  </p>
                  <p>
                    Alternatively, the main post office (<em>La Poste</em>) in any Moroccan city can ship packages internationally. Bring your own packaging or buy boxes from nearby shops. Amana, the Moroccan express delivery service, is also an option for larger items. Always keep receipts for customs declaration in your home country.
                  </p>
                  <p>
                    One final piece of advice: the best souvenir from a Moroccan medina is not always the most expensive. A simple handmade ceramic bowl, a bag of ras el hanout from a spice merchant you chatted with over tea, or a pair of babouche slippers that remind you of the rhythm of the medina can bring you more joy than any grand carpet. Shop with your senses, trust your instincts, and enjoy the dance of the negotiation. That is the true Moroccan way.
                  </p>
                </section>

                {/* Author Bio */}
                <div className="card-featured p-6 md:p-8 mt-12">
                  <div className="flex items-start gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
                      alt="Youssef Amrani"
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[var(--color-accent-200)]"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">About the Author</span>
                      </div>
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg">
                        Youssef Amrani
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                        Youssef is a travel journalist born in Fes and educated in Paris with 15 years of experience covering North Africa and the Mediterranean. His family has traded in the Fes medina for four generations, giving him an insider&apos;s perspective on Moroccan commerce and craft traditions. He writes about culture, architecture, and the art of getting wonderfully lost in ancient cities.
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

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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Coffee,
  Leaf,
  Gift,
  GlassWater,
  HandHeart,
  Flame,
  Globe,
  MessageCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Mint Tea Guide 2026 | Culture, Ceremony, Recipes & Where to Enjoy',
  description:
    'Complete guide to Moroccan mint tea (atay). Learn about the tea ceremony, high pour technique, traditional recipe with gunpowder green tea and fresh mint, tea etiquette, best tea houses in Morocco, and buying tea sets as souvenirs.',
  keywords: [
    'Moroccan mint tea', 'Morocco tea ceremony', 'how to make Moroccan tea', 'atay Morocco',
    'Moroccan tea culture', 'Morocco mint tea recipe', 'Moroccan tea pouring',
    'gunpowder green tea Morocco', 'Morocco tea etiquette', 'Moroccan tea houses',
    'best tea Morocco', 'Morocco tea tradition', 'Moroccan hospitality tea',
    'berber whiskey Morocco', 'Morocco tea set souvenir', 'atay nana Morocco',
    'Moroccan tea glasses', 'Morocco tea ceremony guide',
  ],
  openGraph: {
    title: 'Moroccan Mint Tea Guide 2026 | Culture, Ceremony, Recipes & Where to Enjoy',
    description:
      'Discover the art of Moroccan mint tea. From the iconic high pour ceremony to the perfect recipe, tea etiquette, best tea houses, and buying authentic tea sets. Your complete guide to atay in Morocco.',
    url: `${BASE_URL}/morocco-mint-tea-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-mint-tea.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan mint tea being poured from a silver teapot into ornate glasses with fresh mint leaves',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Mint Tea Guide 2026 | Culture, Ceremony & Recipes',
    description:
      'The complete guide to Moroccan mint tea. Learn the ceremony, perfect the recipe, understand the etiquette, and discover the best tea houses across Morocco.',
    images: [`${BASE_URL}/images/hero-mint-tea.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-mint-tea-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-mint-tea-guide`,
  name: 'Moroccan Mint Tea Guide 2026 | Culture, Ceremony, Recipes & Where to Enjoy',
  description:
    'Complete guide to Moroccan mint tea (atay). Learn about the tea ceremony, pouring technique, traditional recipe, etiquette, best tea houses, and buying tea sets as souvenirs.',
  url: `${BASE_URL}/morocco-mint-tea-guide`,
  image: `${BASE_URL}/images/hero-mint-tea.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-mint-tea-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Mint Tea Guide', item: `${BASE_URL}/morocco-mint-tea-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What tea is used in Moroccan mint tea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan mint tea uses Chinese gunpowder green tea (the zhuan cha variety), combined with fresh spearmint leaves (nana) and sugar. The gunpowder tea gets its name from the tightly rolled pellets that unfurl when steeped in hot water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do Moroccans pour tea from high up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The high pour serves both a practical and ceremonial purpose. Pouring from a height aerates the tea, creating a light froth on top and cooling it slightly. It also blends the flavors more thoroughly. The skill of pouring without spilling is a point of pride for the host.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it rude to refuse tea in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is considered impolite to refuse tea in Morocco. Tea is the cornerstone of Moroccan hospitality, and offering tea is a gesture of welcome. It is customary to accept at least one glass. If you truly cannot drink more, politely decline after your first glass by placing your hand over the glass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many glasses of tea should you drink in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tradition calls for three glasses. There is a famous Moroccan proverb: "The first glass is gentle as life, the second is strong as love, the third is bitter as death." Each subsequent pour from the same pot intensifies the flavor. Accepting three glasses shows full respect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy an authentic Moroccan tea set as a souvenir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Moroccan tea sets make excellent souvenirs. A basic set with a teapot and six glasses starts from 150 MAD in the souks. Handcrafted silver-plated sets from Fes or Marrakech range from 500 MAD to 3,000 MAD. Always bargain and check for quality markings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to enjoy mint tea in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccans drink mint tea throughout the day — after meals, during business meetings, with guests, and in the afternoon. The most ceremonial tea service is typically after lunch or dinner. In the late afternoon, visiting a rooftop tea house to watch the sunset with a glass of atay is a quintessential Moroccan experience.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA INGREDIENTS
   ═══════════════════════════════════════════════════════════════ */

const teaIngredients = [
  {
    name: 'Gunpowder Green Tea',
    arabic: 'Atay (الشاي)',
    icon: Leaf,
    description: 'Chinese gunpowder green tea is the foundation. Tightly rolled pellets unfurl when steeped, releasing a robust, slightly smoky flavor. Imported from China since the 18th century.',
    price: 'From 30 MAD per 250g',
    tip: 'Look for tightly rolled, dark green pellets. Avoid dusty or broken leaves, which indicate stale tea.',
  },
  {
    name: 'Fresh Spearmint',
    arabic: 'Nana (النعناع)',
    icon: Leaf,
    description: 'Fresh spearmint (Mentha spicata), not peppermint, provides the signature fresh flavor. Bought daily from markets. In winter, dried mint or pennyroyal (fliou) may substitute.',
    price: 'From 2 MAD per bunch',
    tip: 'Choose bunches with bright green leaves and no wilting. The fresher the mint, the better the tea.',
  },
  {
    name: 'Sugar',
    arabic: 'Sukkar (السكر)',
    icon: Gem,
    description: 'Moroccan tea is traditionally very sweet. Sugar balances the bitterness of gunpowder tea and the intensity of the mint. Some families use sugar cones (qalb sukkar) for special occasions.',
    price: 'From 8 MAD per kilo',
    tip: 'White granulated sugar is standard. Sugar cones are sold in souks during Ramadan and celebrations.',
  },
  {
    name: 'Boiling Water',
    arabic: 'L-ma Skhoun (الماء السخون)',
    icon: Flame,
    description: 'Vigorously boiling water is essential. Traditional preparation uses a charcoal brazier (majmar), adding a subtle smoky undertone. Lukewarm water will not extract full flavor.',
    price: 'Free',
    tip: 'Bring water to a full rolling boil. The temperature matters greatly for proper extraction.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RECIPE STEPS
   ═══════════════════════════════════════════════════════════════ */

const recipeSteps = [
  {
    step: 1,
    title: 'Rinse the Tea',
    icon: GlassWater,
    duration: '2 minutes',
    description: 'Add 1 tablespoon of gunpowder green tea to the teapot. Pour a small amount of boiling water, swirl, and discard. This removes bitterness and dust — a crucial step many outsiders skip.',
    tip: 'Do not skip this step. The first rinse removes harsh tannins and produces a smoother, sweeter tea.',
  },
  {
    step: 2,
    title: 'First Steep',
    icon: Clock,
    duration: '3 minutes',
    description: 'Fill the teapot with boiling water and steep for 3 minutes. Pour a small amount into a glass to check the color — it should be deep amber. Pour the tasting glass back into the pot.',
    tip: 'The back-and-forth pouring (called "marriage") helps blend the flavors evenly throughout the pot.',
  },
  {
    step: 3,
    title: 'Add Mint and Sugar',
    icon: Leaf,
    duration: '1 minute',
    description: 'Add a generous handful of fresh spearmint and 4-6 sugar cubes (or 3 tablespoons). Press the mint gently into the pot. The heat will release the essential oils from the leaves.',
    tip: 'Use more sugar than you think. The sweetness is a defining characteristic of authentic Moroccan tea.',
  },
  {
    step: 4,
    title: 'Steep Again',
    icon: Clock,
    duration: '3-5 minutes',
    description: 'Let the tea steep with mint and sugar for 3-5 minutes. Stir once to dissolve all sugar. The tea should now have a golden-green color and strong mint aroma.',
    tip: 'Taste test at this stage. Add more sugar or mint to preference. Every family has their own balance.',
  },
  {
    step: 5,
    title: 'The High Pour',
    icon: Sparkles,
    duration: '2 minutes',
    description: 'Pour a glass from the pot, then back into the pot. Repeat 3-4 times ("marriage"). Finally, pour from 30 cm above the glass in a steady stream. The high pour aerates the tea and creates a light froth.',
    tip: 'Practice the high pour over a tray. Start low and gradually raise the pot to build your skill.',
  },
  {
    step: 6,
    title: 'Serve with Pride',
    icon: Heart,
    duration: 'Ongoing',
    description: 'Serve in ornate glasses filled two-thirds full. The same pot is poured three times, each with a different character. The host always pours, serving the eldest or most honored guest first.',
    tip: 'Hold the glass by the rim — the bottom is too hot. Sip slowly and enjoy the company.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL TEA VARIATIONS
   ═══════════════════════════════════════════════════════════════ */

const regionalVariations = [
  {
    region: 'Marrakech & Central Morocco',
    icon: Crown,
    description: 'The classic version: strong gunpowder green tea with abundant spearmint and generous sugar. The baseline all other variations are measured against.',
    special: 'Orange blossom water added for special occasions',
  },
  {
    region: 'Fes & Northern Morocco',
    icon: Building,
    description: 'More refined and slightly less sweet. Wormwood (chiba) is sometimes added for a subtle bitter complexity that balances the sweetness.',
    special: 'Wormwood (chiba) for a distinctive bitter-herbal note',
  },
  {
    region: 'Sahara & Southern Morocco',
    icon: Flame,
    description: 'Prepared over charcoal braziers with great ceremony. Stronger, sweeter, served in three ritual rounds. Nomadic people consider tea an art that cannot be rushed.',
    special: 'Three rounds: gentle as life, strong as love, bitter as death',
  },
  {
    region: 'Atlas Mountains & Berber Country',
    icon: Globe,
    description: 'Infused with wild mountainside herbs — thyme (zaatar), pennyroyal (fliou), sage (salmiya), or verbena (louiza). In winter these herbs replace scarce fresh mint.',
    special: 'Wild mountain herbs: thyme, pennyroyal, sage, or verbena',
  },
  {
    region: 'Northern Morocco & Coast',
    icon: Leaf,
    description: 'Northern tea may include saffron threads for celebrations. Coastal cities infuse with lemongrass or absinthe herb (shiba) for unique local character.',
    special: 'Saffron, lemongrass, or absinthe herb variations',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA ETIQUETTE RULES
   ═══════════════════════════════════════════════════════════════ */

const teaEtiquette = [
  {
    rule: 'Always Accept the First Glass',
    icon: HandHeart,
    description: 'Refusing tea is considered rude. Tea symbolizes hospitality and welcome. Always accept at least one glass, even if you only take a few sips.',
  },
  {
    rule: 'The Host Always Pours',
    icon: Users,
    description: 'It is the host\'s honor to pour. Never pour your own tea or reach for the pot. Pouring for yourself implies the host is not attentive enough.',
  },
  {
    rule: 'Hold the Glass by the Rim',
    icon: Coffee,
    description: 'Moroccan tea glasses have no handles. Hold by the top rim between thumb and forefinger. The bottom is too hot to touch comfortably.',
  },
  {
    rule: 'Three Glasses is Tradition',
    icon: Award,
    description: 'The proverb says three glasses are customary. After three, politely decline by placing your hand over the glass. Leaving before three seems rushed.',
  },
  {
    rule: 'Sip, Do Not Gulp',
    icon: Clock,
    description: 'Mint tea is savored slowly. Sipping shows respect for the preparation. Tea time is social time — rushing defeats the purpose.',
  },
  {
    rule: 'Compliment the Tea',
    icon: MessageCircle,
    description: 'Say "bneen" (delicious) or "zween" (beautiful). The host takes pride in their tea, and a genuine compliment strengthens the bond of hospitality.',
  },
  {
    rule: 'Right Hand for Receiving',
    icon: ShieldCheck,
    description: 'Always receive and hold your tea glass with your right hand. The left hand is traditionally considered unclean in Moroccan culture.',
  },
  {
    rule: 'Tea Before Business',
    icon: BookOpen,
    description: 'In shops and meetings, tea is offered before any transaction. This is genuine hospitality, not a sales tactic. Never rush the tea to get to business.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TEA HOUSES
   ═══════════════════════════════════════════════════════════════ */

const teaHouses = [
  {
    name: 'Cafe Clock',
    city: 'Marrakech & Fes',
    type: 'Cultural Cafe',
    icon: Star,
    price: 'From 25 MAD per pot',
    description: 'A beloved cultural institution with multi-level terraces, live music, and storytelling nights. The Fes rooftop overlooking the medina is magical at sunset.',
    highlights: ['Rooftop medina views', 'Cultural events', 'Storytelling nights', 'Two locations'],
  },
  {
    name: 'Le Jardin',
    city: 'Marrakech',
    type: 'Garden Cafe',
    icon: Leaf,
    price: 'From 30 MAD per pot',
    description: 'A hidden garden cafe in the medina. Sipping tea surrounded by banana trees and bougainvillea feels a world away from the bustling souks just outside.',
    highlights: ['Secret garden setting', 'Tranquil atmosphere', 'Medina location', 'Excellent pastries'],
  },
  {
    name: 'Cafe Maure (Kasbah des Oudaias)',
    city: 'Rabat',
    type: 'Historic Tea Garden',
    icon: Crown,
    price: 'From 20 MAD per pot',
    description: 'Perched in the ancient Kasbah des Oudaias, overlooking the Bou Regreg river and the Atlantic. Whitewashed walls, jasmine vines, and centuries of history make this unmatched.',
    highlights: ['River and ocean views', 'Historic kasbah setting', 'Jasmine garden', 'Most atmospheric in Morocco'],
  },
  {
    name: 'Nomad',
    city: 'Marrakech',
    type: 'Modern Rooftop Cafe',
    icon: Sparkles,
    price: 'From 35 MAD per pot',
    description: 'A contemporary rooftop restaurant with panoramic views of medina rooftops and the Atlas Mountains. Modern take on Moroccan cuisine with beautifully presented mint tea.',
    highlights: ['Panoramic rooftop views', 'Modern Moroccan cuisine', 'Atlas Mountain views', 'Design-forward space'],
  },
  {
    name: 'Cafe Hafa',
    city: 'Tangier',
    type: 'Legendary Cliff Cafe',
    icon: Award,
    price: 'From 15 MAD per pot',
    description: 'On the cliffs overlooking the Strait of Gibraltar since 1921. The Rolling Stones, Paul Bowles, and William Burroughs all drank tea here. Terraced seating cascades down the clifftop.',
    highlights: ['Clifftop views of Gibraltar', 'Since 1921', 'Literary heritage', 'Terraced seating'],
  },
  {
    name: 'Riad Yima',
    city: 'Marrakech',
    type: 'Art Cafe',
    icon: Gem,
    price: 'From 25 MAD per pot',
    description:
      'The colorful creation of Moroccan pop artist Hassan Hajjaj. Every surface is covered in bright pop art, recycled materials, and bold design. Tea served in vibrant glasses amidst a feast for the eyes.',
    highlights: ['Pop art gallery', 'Photo-worthy setting', 'Artist-owned', 'Unique atmosphere'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA SET BUYING GUIDE
   ═══════════════════════════════════════════════════════════════ */

const teaSetGuide = [
  { item: 'Basic teapot (stainless steel)', price: 'From 50 MAD', where: 'Any souk or hardware store' },
  { item: 'Decorative teapot (silver-plated)', price: 'From 200 MAD', where: 'Medina silver shops, Fes or Marrakech' },
  { item: 'Handcrafted artisan teapot', price: 'From 500 MAD', where: 'Artisan cooperatives, Fes metalwork quarter' },
  { item: 'Set of 6 tea glasses (hand-painted)', price: 'From 80 MAD', where: 'Medina glass shops, gift stores' },
  { item: 'Silver tea tray (round, engraved)', price: 'From 150 MAD', where: 'Metalwork souks in Fes or Marrakech' },
  { item: 'Complete set (pot + 6 glasses + tray)', price: 'From 250 MAD', where: 'Souk bundle deals, tourist areas' },
  { item: 'Premium set (handcrafted, silver-plated)', price: 'From 1,000 MAD', where: 'High-end artisan shops, Ensemble Artisanal' },
  { item: 'Gunpowder green tea (250g bag)', price: 'From 30 MAD', where: 'Spice shops, herbalists, souks' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMintTeaGuidePage() {
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
            backgroundImage: 'url(/images/hero-mint-tea.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Moroccan Mint Tea Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Coffee className="w-4 h-4" />
            Culture &amp; Traditions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Mint Tea Guide:
            <br className="hidden md:block" /> Culture, Ceremony &amp; Recipes
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            More than a drink, Moroccan mint tea is a ritual of hospitality, an art form, and the
            heartbeat of daily life. Your complete guide to atay nana.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Atay: The Soul of Moroccan Hospitality
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In Morocco, mint tea is not simply a beverage — it is the national drink, a social
                ritual, and the most fundamental expression of hospitality. Known as &quot;atay nana&quot;
                and sometimes called &quot;Berber whiskey,&quot; this sweet, fragrant drink is served at
                every gathering, meal, and moment of welcome.
              </p>
              <p>
                The tradition dates to the 18th century when British merchants introduced Chinese
                gunpowder green tea. Moroccans made it their own with fresh spearmint and generous sugar,
                creating a drink inseparable from Moroccan identity. Today, Morocco is one of the
                world&apos;s largest importers of Chinese green tea.
              </p>
              <p>
                Whether in a Berber home in the Atlas, a Marrakech carpet shop, or on a Fes rooftop at
                sunset, the offer of mint tea follows you everywhere. Learning its preparation, etiquette,
                and significance will transform your understanding of Moroccan culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── History & Significance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            History &amp; Significance of Mint Tea
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How a Chinese export became the defining drink of an entire nation.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Arrival of Tea in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Tea arrived in Morocco in the mid-18th century through British trade. When the Crimean War disrupted
                trade routes, merchants diverted surplus Chinese gunpowder green tea to Tangier and Essaouira. By the
                19th century, tea had spread from the elite salons of Fes to every village and nomadic camp.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Tea as Social Glue
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Tea bridges strangers and bonds families. It is served to welcome guests, seal business deals, and
                celebrate festivals. Refusing tea is akin to rejecting the host&apos;s friendship. The preparation
                is a choreographed act of generosity communicating respect, patience, and warmth.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                A Daily Ritual, Not Just a Drink
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The average household prepares tea several times daily. The careful measuring, washing of leaves,
                and precise pouring is a meditative practice that forces a pause. In a culture valuing human
                connection above efficiency, tea creates the space for that connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ingredients ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Four Essential Ingredients
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan mint tea requires only four ingredients, but the quality of each one matters immensely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teaIngredients.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.name}
                      </h3>
                      <span className="text-sm text-[var(--color-gold)]">{item.arabic}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {item.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Recipe ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Make Moroccan Mint Tea
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The traditional recipe, step by step. Master this and you will impress any Moroccan host.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {recipeSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{step.description}</p>
                        <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                          <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <p className="text-xs text-[var(--text-muted)]">
                            <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {step.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Pouring Ceremony ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Art of the High Pour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most theatrical and iconic element of Moroccan tea culture.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-base">
                The host raises the teapot 30 centimeters or more above the glass and pours a thin, steady
                stream without spilling. This is not mere showmanship — the high pour serves practical purposes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GlassWater className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">Aeration</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The falling stream introduces air, creating a light froth and releasing more of the mint&apos;s aromatic compounds.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">Cooling</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Tea cools slightly during the fall, making it comfortable to drink from handleless glasses.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-[var(--color-gold)]" />
                    <span className="text-sm font-semibold text-[var(--color-gold)]">Flavor Blending</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The force mixes tea, mint, and sugar more thoroughly than stirring. The &quot;marriage&quot; pouring ensures uniform taste.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-4 h-4 text-[var(--color-gold)]" />
                    <span className="text-sm font-semibold text-[var(--color-gold)]">Skill &amp; Pride</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    A controlled pour without splashing demonstrates the host&apos;s care and attention — qualities valued highly in Morocco.
                  </p>
                </div>
              </div>
              <p className="text-base">
                The &quot;marriage&quot; technique — pouring tea from pot to glass and back three to four
                times — blends flavors fully and tells the host when the tea has reached the right color.
                Only after this ritual does the host pour for guests using the high pour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regional Variations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Tea Variations Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            While the base recipe is consistent, each region adds its own signature twist to mint tea.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalVariations.map((variation) => {
              const VarIcon = variation.icon;
              return (
                <div key={variation.region} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <VarIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {variation.region}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{variation.description}</p>
                  <div className="flex items-start gap-1.5 text-xs text-[var(--color-gold)]">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" />
                    {variation.special}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tea Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea Etiquette in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding these unspoken rules will earn you respect and deeper connections with your Moroccan hosts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teaEtiquette.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Tea Houses ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Tea Houses &amp; Cafes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Where to enjoy the finest mint tea experiences, from historic clifftop cafes to hidden garden retreats.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season and location.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teaHouses.map((house) => {
              const HouseIcon = house.icon;
              return (
                <div key={house.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HouseIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {house.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {house.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Coffee className="w-3.5 h-3.5" />
                          {house.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {house.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{house.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {house.highlights.map((highlight, i) => (
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

      {/* ── Buying Tea Sets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gift className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying a Moroccan Tea Set as a Souvenir
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A Moroccan tea set is one of the most meaningful and practical souvenirs you can bring home. All prices are starting prices — bargaining is expected in souks.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Where to Buy</div>
              </div>
              {teaSetGuide.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.where}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Shopping Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[var(--text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span>Check the lid fits snugly and the spout pours cleanly without dripping.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span>For silver-plated sets, look for a poincon (hallmark) stamp as quality indicator.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span>Buy glasses in sets of 6 or 12. They are fragile — ask for careful wrapping.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span>Best artisan metalwork is from Fes. Marrakech has more variety but higher prices.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tea & Hospitality Culture ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea &amp; the Culture of Hospitality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding why tea matters so deeply in Morocco will enrich every interaction during your visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tea in the Home
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                You will be offered tea within minutes of arrival. The head of the household prepares it
                personally — this is an honor, not a chore. Tea is accompanied by cookies, nuts, or pastries.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tea in the Souk
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Shopkeepers offer tea before any negotiation. This is genuine hospitality, not a sales technique.
                Accepting tea does not obligate you to buy. Some of the best tea experiences happen in carpet shops.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tea in the Desert
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Nomadic communities elevate tea to sacred art. In the desert, offering tea represents real
                generosity. The three-glass ritual carries deep symbolic meaning about life, love, and mortality.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tea at Celebrations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                No celebration is complete without tea. Weddings, births, and religious holidays feature elaborate
                tea services. During Ramadan, tea is served at iftar alongside dates and traditional sweets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What tea is used in Moroccan mint tea?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccan mint tea uses Chinese gunpowder green tea combined with fresh spearmint leaves (nana) and
                sugar. The tightly rolled pellets unfurl when steeped, releasing a robust flavor. This variety has been
                imported from China since the 18th century.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Why do Moroccans pour tea from high up?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The high pour aerates the tea, creating a light froth and cooling it slightly. It blends the flavors
                more thoroughly. The skill of pouring without spilling is a point of pride demonstrating the
                host&apos;s care and attention to their guests.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it rude to refuse tea in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, refusing tea is considered impolite. Tea is the cornerstone of hospitality. Always accept at
                least one glass. To politely decline more, place your hand over the glass or say &quot;shukran,
                bezzaf&quot; (thank you, enough).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How many glasses of tea should you drink in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Tradition calls for three glasses. The famous proverb says: &quot;The first glass is gentle as life,
                the second is strong as love, the third is bitter as death.&quot; Each pour intensifies the flavor.
                Three glasses shows full respect for your host.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I buy an authentic Moroccan tea set as a souvenir?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. A basic set with teapot and six glasses starts from 150 MAD. Handcrafted silver-plated
                sets range from 500 MAD to 3,000 MAD. Always bargain and check for quality markings. The best
                metalwork comes from the artisan quarter of Fes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to enjoy mint tea in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccans drink tea throughout the day — after meals, during meetings, and in the afternoon. The most
                ceremonial service is after lunch or dinner. Visiting a rooftop tea house at sunset is a quintessential
                Moroccan experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-food-etiquette" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Food Etiquette Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential dining etiquette, table manners, and food customs every visitor should know.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-cooking-experience" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Experiences
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Join a Moroccan cooking class and learn to prepare tagines, couscous, and pastilla.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into Moroccan traditions, customs, festivals, and the fabric of daily life.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-markets-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Markets &amp; Souks Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate Morocco&apos;s legendary souks and markets like a local with bargaining tips.
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

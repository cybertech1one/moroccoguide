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
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Mountain,
  Music,
  Paintbrush,
  Globe,
  Landmark,
  HandHeart,
  Calendar,
  Utensils,
  Languages,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Berber Culture in Morocco 2026 | Amazigh Heritage, Traditions & Village Experiences',
  description:
    'Complete guide to Berber (Amazigh) culture in Morocco. Discover ancient traditions, Tifinagh script, Amazigh New Year, carpet weaving, kasbahs, Berber music, traditional food, village visits in Imlil and Ait Bougmez, festivals, and ethical community-based tourism.',
  keywords: [
    'berber culture',
    'amazigh',
    'berber heritage',
    'Berber villages Morocco',
    'Amazigh culture Morocco',
    'berber traditions',
    'Tifinagh script',
    'Amazigh New Year Yennayer',
    'berber carpet weaving',
    'moroccan kasbahs',
    'berber music ahwash',
    'berber food tagine',
    'Imlil village Morocco',
    'Ait Bougmez valley',
    'berber museums Morocco',
    'community based tourism Morocco',
    'berber architecture ksour',
    'berber silverwork jewelry',
    'Amazigh festivals Morocco',
    'ethical tourism Morocco berber',
    'berber pottery Morocco',
    'agadir granary Morocco',
  ],
  openGraph: {
    title: 'Berber Culture in Morocco 2026 | Amazigh Heritage, Traditions & Village Experiences',
    description:
      'Discover the rich Amazigh (Berber) heritage of Morocco. From ancient Tifinagh script and carpet weaving to mountain villages and community-based tourism experiences.',
    url: `${BASE_URL}/morocco-berber-culture`,
    images: [
      {
        url: `${BASE_URL}/images/hero-berber-culture.webp`,
        width: 1200,
        height: 630,
        alt: 'Berber village nestled in the Atlas Mountains of Morocco with traditional mud-brick architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berber Culture in Morocco 2026 | Amazigh Heritage & Traditions',
    description:
      'Complete guide to Amazigh (Berber) heritage in Morocco. Ancient traditions, mountain villages, traditional crafts, music, food, and ethical tourism experiences.',
    images: [`${BASE_URL}/images/hero-berber-culture.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-berber-culture` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-berber-culture`,
  name: 'Berber Culture in Morocco 2026 | Amazigh Heritage, Traditions & Village Experiences',
  description:
    'Complete guide to Berber (Amazigh) culture in Morocco. Discover ancient traditions, Tifinagh script, carpet weaving, kasbahs, music, village visits, festivals, and ethical community-based tourism.',
  url: `${BASE_URL}/morocco-berber-culture`,
  image: `${BASE_URL}/images/hero-berber-culture.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-berber-culture`,
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
      { '@type': 'ListItem', position: 2, name: 'Berber Culture in Morocco', item: `${BASE_URL}/morocco-berber-culture` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Berber and Amazigh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Berber and Amazigh refer to the same indigenous people of North Africa. "Amazigh" (plural: Imazighen) is the term they use for themselves, meaning "free people." "Berber" comes from the Greek/Roman word "barbaros" and is considered less accurate by many Amazigh people. Both terms are widely used in Morocco, though Amazigh is increasingly preferred in official and cultural contexts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Berber villages independently or do I need a guide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can visit some villages independently, especially well-known ones like Imlil, which has guesthouses, restaurants, and well-marked trails. However, for more remote villages in the Ait Bougmez Valley or Todra Gorge, a local guide is strongly recommended. Guides provide cultural context, help with language barriers, and ensure your visit benefits the community. Expect to pay from 300 MAD per day for a local guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What language do Berber people speak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amazigh people speak Tamazight, which has three main regional variants in Morocco: Tashelhit (south and High Atlas), Tamazight (Middle Atlas), and Tarifit (Rif Mountains). Tamazight became an official language of Morocco alongside Arabic in 2011. Most Amazigh Moroccans also speak Darija (Moroccan Arabic), and many in tourist areas speak French and some English.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Berber villages in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (April-May) and autumn (September-October) are ideal for visiting mountain villages. The weather is pleasant for hiking, wildflowers bloom in spring, and the harvest season in autumn brings cultural celebrations. Summer can be very hot in lower valleys, while winter brings snow to the High Atlas, making some villages difficult to reach. January is special for Yennayer (Amazigh New Year) celebrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I buy authentic Berber carpets without getting scammed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buy directly from weaving cooperatives in villages like Ait Bougmez or Tazenakht for fair prices and guaranteed authenticity. Look for hand-knotted construction, natural wool, and slight irregularities that indicate handmade work. Cooperatives typically charge from 800 MAD for small rugs and from 3,000 MAD for larger carpets. Avoid middlemen in tourist areas who may charge three to five times the fair price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it appropriate to take photos of Berber people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always ask permission before photographing people, especially women and elders. Many Berber communities are welcoming but value their privacy. Some may decline, and you should respect that. Avoid photographing people as curiosities. If someone agrees, showing them the photo on your screen is a nice gesture. In some tourist areas, people may expect a small tip (from 5-10 MAD) for photos.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL CRAFTS
   ═══════════════════════════════════════════════════════════════ */

const traditionalCrafts = [
  {
    name: 'Carpet Weaving',
    icon: Paintbrush,
    description:
      'Berber carpets are among the most sought-after textiles in the world. Each region has distinctive patterns: Beni Ourain carpets from the Middle Atlas feature geometric black-on-white designs, while Azilal carpets burst with color. Women weave on upright looms, encoding family stories and protective symbols into every knot. A single carpet can take weeks to months to complete.',
    where: 'Tazenakht, Ait Bougmez, Azrou, Chefchaouen cooperatives',
    price: 'From 800 MAD for small rugs, from 3,000 MAD for large carpets',
  },
  {
    name: 'Pottery & Ceramics',
    icon: Gem,
    description:
      'Amazigh pottery predates the Arab arrival by millennia. Rif Mountain women create unglazed terracotta vessels decorated with geometric motifs using natural pigments. Each symbol carries meaning: triangles represent femininity, diamonds signify the eye for protection, and zigzag lines symbolize water and life. Tamegroute, near Zagora, is famous for its distinctive green-glazed pottery.',
    where: 'Rif Mountains, Tamegroute, Ourika Valley cooperatives',
    price: 'From 50 MAD for small pieces, from 200 MAD for decorative bowls',
  },
  {
    name: 'Silverwork & Jewelry',
    icon: Crown,
    description:
      'Amazigh silversmiths craft fibulas (tizerzai) that hold garments together, elaborate headdresses for brides, and talismanic pendants inscribed with Tifinagh characters. Unlike Arab-Moroccan goldwork, Berber jewelry favors silver, often set with amber, coral, or amazonite. The fibula cross of the south, the "Southern Cross" or Croix du Sud, is an iconic Berber design now recognized worldwide.',
    where: 'Tiznit (silver capital), Essaouira, High Atlas villages',
    price: 'From 150 MAD for simple pendants, from 1,000 MAD for bridal pieces',
  },
  {
    name: 'Leather & Woodwork',
    icon: HandHeart,
    description:
      'Amazigh artisans produce intricately carved cedarwood items, from utensils to furniture, using techniques unchanged for centuries. Thuya wood from Essaouira is shaped into decorative boxes and chess sets. Leather goods, including bags, belts, and shoes, are tanned using traditional methods with natural dyes from pomegranate, saffron, and indigo.',
    where: 'Essaouira (thuya), Azrou (cedar), Fes medina tanneries',
    price: 'From 100 MAD for small carved items, from 300 MAD for leather bags',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BERBER ARCHITECTURE
   ═══════════════════════════════════════════════════════════════ */

const architectureTypes = [
  {
    name: 'Kasbahs (Fortified Residences)',
    icon: Landmark,
    description:
      'Kasbahs are fortified homes of prominent Amazigh families, built from pise (rammed earth) and featuring ornate geometric decorations on towers and facades. Ait Benhaddou, a UNESCO World Heritage Site near Ouarzazate, is the most famous example. Kasbahs served as both residences and defensive structures, with thick walls, corner towers, and narrow interior passages.',
    examples: 'Ait Benhaddou, Kasbah Telouet, Kasbah Taourirt (Ouarzazate)',
  },
  {
    name: 'Ksour (Fortified Villages)',
    icon: Building,
    description:
      'A ksar (plural: ksour) is a fortified village of connected homes surrounded by a defensive wall, reflecting the Amazigh communal ethos. The Draa and Dades valleys contain the finest examples. Built from local earth, stone, and palm wood, they stay cool in summer and warm in winter.',
    examples: 'Ksar of Ait Benhaddou, Tamnougalt, Tinejdad, Nkob',
  },
  {
    name: 'Agadirs (Communal Granaries)',
    icon: Mountain,
    description:
      'Fortified communal granaries perched on hilltops, where communities stored grain, oil, documents, and treasure. Each family had chambers secured with unique wooden locks. These structures reflect deep communal trust and sophisticated resource management, many dating back 500 years or more.',
    examples: 'Agadir Id Aissa (Amtoudi), Agadir Ikounka, Agadir Inoumar',
  },
  {
    name: 'Tighremts (Tower Houses)',
    icon: Star,
    description:
      'Tall tower-like family homes rising three to four stories in the Dades and Todra valleys. Ground floors house livestock, middle floors are living quarters, and open-sky top floors serve as terraces for drying food and socializing. Mud-brick walls feature intricate geometric reliefs.',
    examples: 'Dades Valley, Todra Gorge area, Skoura oasis',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MUSIC & DANCE
   ═══════════════════════════════════════════════════════════════ */

const musicDance = [
  {
    name: 'Ahwash',
    region: 'High Atlas & Souss',
    icon: Music,
    description:
      'A collective performance where men and women form facing lines or a circle, clapping, chanting, and dancing in unison. Drums (bendir and tallunt) build gradually over hours, reaching ecstatic intensity. Inscribed on UNESCO\'s Intangible Cultural Heritage list.',
  },
  {
    name: 'Ahidous',
    region: 'Middle Atlas',
    icon: Music,
    description:
      'Men and women stand shoulder to shoulder, swaying and singing in call-and-response while drummers set an accelerating rhythm. Poetry covers themes of love, nature, honor, and community. Performances can last through the entire night.',
  },
  {
    name: 'Guedra',
    region: 'Saharan South',
    icon: Music,
    description:
      'A hypnotic trance dance from near Guelmim. A single woman kneels at the center while musicians play a clay pot drum. She moves only her hands, fingers, and upper body in increasingly ecstatic patterns, sometimes entering trance. Considered a blessing ritual.',
  },
  {
    name: 'Taskiwin',
    region: 'Western High Atlas',
    icon: Music,
    description:
      'A martial dance from Tata and Taroudant provinces. Men hold decorated horn-shaped powder flasks, mimicking warriors preparing for battle with controlled, rhythmic movements. Inscribed on UNESCO\'s Intangible Cultural Heritage list in 2017.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BERBER FOOD
   ═══════════════════════════════════════════════════════════════ */

const berberFood = [
  {
    name: 'Tagine',
    icon: Utensils,
    description:
      'The conical clay tagine is quintessentially Berber. Slow-cooked over charcoal, Berber tagines differ from city versions: simpler, heartier, and deeply flavored. Village tagines use seasonal produce, preserved lemons, olives, and whatever meat is available. Chicken with preserved lemons, lamb with prunes and almonds, and vegetable tagine with argan oil are classics.',
    price: 'From 40 MAD in villages, from 80 MAD in tourist restaurants',
  },
  {
    name: 'Couscous',
    icon: Utensils,
    description:
      'Friday couscous is sacred across Morocco, but its origins are Amazigh. Hand-rolled from semolina flour, steamed three times in a couscoussier, and topped with a stew of seven vegetables, chickpeas, and meat. In Berber homes, it is eaten communally from a single large dish. The ritual of preparation is as important as the meal itself.',
    price: 'From 35 MAD in local restaurants, from 80 MAD in tourist spots',
  },
  {
    name: 'Amlou (Berber Nutella)',
    icon: Utensils,
    description:
      'A delicious spread made from argan oil, roasted almonds, and honey, ground together in a stone mortar. Often called "Berber Nutella," amlou is served at breakfast with bread. It originates from the Souss region where argan trees grow. The quality depends on using pure argan oil, not the diluted versions sold in tourist areas.',
    price: 'From 60 MAD for a jar at cooperatives',
  },
  {
    name: 'Berber Bread & Mint Tea',
    icon: Utensils,
    description:
      'Tafernout is a thick flatbread baked in clay ovens or over embers, the foundation of every village meal. Equally essential is mint tea, affectionately called "Berber Whiskey." Gunpowder green tea, fresh spearmint, and generous sugar are poured from a height to create froth. The tea ritual involves three glasses: "the first is gentle like life, the second is strong like love, the third is bitter like death." Refusing tea in a Berber home is considered impolite.',
    price: 'Bread from 3 MAD; tea from 10 MAD in cafes, free in homes',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VILLAGE EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const villageExperiences = [
  {
    name: 'Imlil & Aremd',
    region: 'High Atlas',
    icon: Mountain,
    image: '/images/hero-atlas-village.webp',
    description:
      'The gateway to Jebel Toubkal, North Africa\'s highest peak. Imlil is a Berber village at 1,740m altitude, just 90 minutes from Marrakech. Stay in a traditional guesthouse, hike to the walnut-shaded village of Aremd, and experience mountain hospitality. Mule treks, guided walks to Azzaden Valley, and overnight stays in Berber homes are all possible.',
    highlights: ['90 minutes from Marrakech', 'Gateway to Toubkal', 'Traditional guesthouses', 'Guided mule treks'],
    guide: 'From 300 MAD per day for a local guide',
  },
  {
    name: 'Ait Bougmez Valley',
    region: 'Central High Atlas',
    icon: Mountain,
    image: '/images/art-atlas-mountain-village.webp',
    description:
      'Known as the "Happy Valley," Ait Bougmez is one of Morocco\'s most beautiful and culturally rich valleys. Terraced fields, walnut orchards, ancient granaries, and mud-brick villages dot the landscape. Less visited than Imlil, it offers a more immersive experience. Community-run guesthouses, women\'s cooperatives, and seasonal festivals make this a highlight of any Morocco trip.',
    highlights: ['Less touristy than Imlil', 'Ancient communal granaries', 'Women\'s weaving cooperatives', 'Seasonal harvest festivals'],
    guide: 'From 350 MAD per day for a local guide',
  },
  {
    name: 'Todra & Dades Gorges',
    region: 'Eastern High Atlas',
    icon: Landmark,
    image: '/images/hero-kasbahs.webp',
    description:
      'Dramatic canyon landscapes carved by rivers over millennia, with Berber villages clinging to the valley walls. Todra Gorge narrows to just 10 meters wide with 300-meter-high walls. The Dades Valley is lined with kasbahs and almond orchards. Villages here maintain strong Amazigh traditions, and homestays offer genuine cultural exchange.',
    highlights: ['Dramatic 300m canyon walls', 'Kasbah-lined valleys', 'Rock climbing at Todra', 'Traditional homestays'],
    guide: 'From 300 MAD per day for a local guide',
  },
  {
    name: 'Tafraout & Anti-Atlas',
    region: 'Anti-Atlas',
    icon: Globe,
    image: '/images/art-berber-portrait.webp',
    description:
      'The heartland of Tashelhit-speaking Amazigh culture. Tafraout sits surrounded by rose-granite boulders, known for almond blossoms in February and some of Morocco\'s finest Amazigh architecture. Off the main tourist trail, it offers a quieter, more authentic encounter with Berber life.',
    highlights: ['February almond blossom festival', 'Painted granite boulders', 'Authentic Tashelhit culture', 'Off-the-beaten-path'],
    guide: 'From 250 MAD per day for a local guide',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MUSEUMS & CULTURAL SITES
   ═══════════════════════════════════════════════════════════════ */

const museumsAndSites = [
  {
    name: 'Musee Amazigh (Agadir)',
    type: 'Museum',
    description: 'Dedicated to Amazigh heritage with traditional clothing, jewelry, carpets, tools, and musical instruments. Well-curated displays explain Berber cultural diversity across regions.',
    price: 'From 20 MAD entry',
  },
  {
    name: 'Musee Berbere (Marrakech)',
    type: 'Museum',
    description: 'Within the Jardin Majorelle, housing over 600 artifacts spanning Berber culture from the Rif to the Sahara. Textiles, jewelry, weapons, and ceramics beautifully displayed.',
    price: 'From 30 MAD entry (separate from garden)',
  },
  {
    name: 'Tiskiwin Museum (Marrakech)',
    type: 'Museum',
    description: 'Founded by anthropologist Bert Flint, tracing the trans-Saharan caravan route through 50 years of collected artifacts. Each room represents a region from Marrakech to Timbuktu.',
    price: 'From 25 MAD entry',
  },
  {
    name: 'Ait Benhaddou (UNESCO)',
    type: 'Heritage Site',
    description: 'The most photographed ksar in Morocco. This UNESCO-listed fortified village served as backdrop for Gladiator, Game of Thrones, and Lawrence of Arabia.',
    price: 'Free entry (guides from 100 MAD)',
  },
  {
    name: 'Kasbah Telouet',
    type: 'Historic Kasbah',
    description: 'The crumbling palace of the Glaoui lords. Stunning zellige tilework and painted cedarwood ceilings inside, while the exterior slowly returns to the earth from which it was built.',
    price: 'From 30 MAD entry',
  },
  {
    name: 'Tifinagh Rock Carvings (Tata)',
    type: 'Archaeological Site',
    description: 'Ancient rock engravings with Tifinagh script and hunting scenes dating back thousands of years, providing evidence of deep Amazigh roots in North Africa.',
    price: 'Free (local guide from 100 MAD recommended)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const festivals = [
  {
    name: 'Yennayer (Amazigh New Year)',
    month: 'January 13',
    description: 'Celebrating the start of the agrarian calendar. Families gather for communal meals with couscous, dried fruits, and nuts. Since 2018, January 13 is an official public holiday in Morocco.',
  },
  {
    name: 'Imilchil Marriage Festival',
    month: 'September',
    description: 'A legendary Middle Atlas gathering where Ait Hadiddou Berbers traditionally arranged marriages. Young men and women chose partners freely. Today a cultural festival and market drawing visitors from across the region.',
  },
  {
    name: 'Timitar Festival (Agadir)',
    month: 'July',
    description: 'One of Morocco\'s largest music festivals celebrating Amazigh music alongside international acts. Free outdoor concerts attract hundreds of thousands over four days.',
  },
  {
    name: 'Almond Blossom Festival (Tafraout)',
    month: 'February',
    description: 'When almond trees blanket the Anti-Atlas in pink and white blossoms, Tafraout celebrates with traditional music, dance, feasting, and fresh almond products from local cooperatives.',
  },
  {
    name: 'Boujloud / Bilmawen (Various)',
    month: 'After Eid al-Adha',
    description: 'A pre-Islamic Amazigh tradition where men dress in animal skins and masks, dancing through villages to ward off evil spirits. This carnivalesque celebration has survived for millennia.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBerberCulturePage() {
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
            backgroundImage: 'url(/images/hero-berber-culture.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Berber Culture in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Globe className="w-4 h-4" />
            Culture &amp; Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Berber Culture in Morocco:
            <br className="hidden md:block" /> Amazigh Heritage &amp; Traditions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Discover the living heritage of the Amazigh, North Africa&apos;s indigenous people.
            From Tifinagh script and mountain villages to carpet weaving and communal festivals.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: Who Are the Amazigh? ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Who Are the Amazigh? Morocco&apos;s Indigenous People
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Amazigh, commonly known as Berbers, are the indigenous people of North Africa.
                Their presence predates the Arab conquest of the 7th century by thousands of years.
                Archaeological evidence, including rock carvings in the Sahara and Atlas Mountains,
                traces Amazigh civilization back over 9,000 years, making them one of the oldest
                continuously inhabited cultures on Earth. The word &quot;Amazigh&quot; means &quot;free
                people&quot; in their own language, Tamazight, while &quot;Berber&quot; derives from the
                Greek and Roman &quot;barbaros.&quot;
              </p>
              <p>
                Today, an estimated 40-50% of Morocco&apos;s population identifies as Amazigh, and their
                cultural influence permeates every aspect of Moroccan life: architecture, cuisine, music,
                agriculture, and hospitality. In 2011, Tamazight was recognized as an official language
                alongside Arabic in the Moroccan constitution, and the Tifinagh script is now taught in
                schools and displayed on public buildings across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tifinagh Script & Language ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Languages className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tifinagh Script &amp; the Tamazight Language
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of Africa&apos;s oldest writing systems, Tifinagh has been in continuous use for over 2,000 years.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Tifinagh Alphabet
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Tifinagh is a consonantal alphabet rooted in ancient Libyan script. Each character
                uses simple geometric shapes: circles, lines, and dots. The Tuareg preserved Tifinagh
                through centuries when other Amazigh groups adopted Arabic script. In 2003, Morocco
                adopted standardized Neo-Tifinagh for official use. Look for it on road signs, public
                buildings, and banknotes throughout the country.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Three Regional Languages
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Tamazight has three main variants in Morocco, each tied to a geographic region.
                Despite differences, speakers share deep cultural kinship and common origins.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Tashelhit</strong> -- Souss, High Atlas, Anti-Atlas (approx. 8M speakers)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Tamazight</strong> -- Middle Atlas, eastern High Atlas (approx. 5M speakers)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Tarifit</strong> -- Rif Mountains, northern Morocco (approx. 4M speakers)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional Crafts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Paintbrush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Amazigh Crafts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Centuries-old artisanal traditions that carry meaning, identity, and beauty in every piece.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices at cooperatives. Seasonal pricing and tourist-area markups may apply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traditionalCrafts.map((craft) => {
              const CraftIcon = craft.icon;
              return (
                <div key={craft.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CraftIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {craft.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{craft.description}</p>
                  <div className="space-y-2 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{craft.where}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{craft.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Berber Architecture ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Architecture: Built from the Earth
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Kasbahs, ksour, agadirs, and tighremts: Morocco&apos;s most iconic structures are Amazigh creations.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {architectureTypes.map((arch) => {
              const ArchIcon = arch.icon;
              return (
                <div key={arch.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ArchIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {arch.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{arch.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                        <span><strong>Notable examples:</strong> {arch.examples}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Music & Dance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Music &amp; Dance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Communal performances that have bound communities together for millennia, from Atlas peaks to Saharan oases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {musicDance.map((art) => {
              const ArtIcon = art.icon;
              return (
                <div key={art.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ArtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {art.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{art.region}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{art.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Berber Food ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Cuisine: Food of the Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Simple, hearty, and deeply flavorful, Berber food is the soul of Moroccan cuisine.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices vary by location and season. Village restaurants offer the most authentic flavors at the lowest prices.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {berberFood.map((food) => {
              const FoodIcon = food.icon;
              return (
                <div key={food.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {food.name}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                          {food.price}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{food.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Village Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Village Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Step into living Amazigh communities where traditions have been maintained for centuries.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {villageExperiences.map((village) => {
              const VillageIcon = village.icon;
              return (
                <div key={village.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={village.image}
                      alt={`${village.name} Berber village in the ${village.region} region of Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <VillageIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {village.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-0.5 text-xs font-medium rounded bg-white/20 backdrop-blur-sm text-white">
                      {village.region}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{village.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {village.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-semibold">
                      <DollarSign className="w-3 h-3" />
                      {village.guide}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Museums & Cultural Sites ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Museums &amp; Cultural Sites
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Learn about Amazigh history through curated collections and preserved heritage sites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {museumsAndSites.map((site) => (
              <div key={site.name} className="card-moroccan p-5">
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {site.type}
                </div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {site.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{site.description}</p>
                <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold">
                  <DollarSign className="w-3 h-3" />
                  {site.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Festivals & Celebrations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Festivals &amp; Celebrations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the Amazigh New Year to marriage moussems, these celebrations reveal the living spirit of Berber culture.
          </p>

          <div className="space-y-6">
            {festivals.map((festival) => (
              <div key={festival.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {festival.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                    <Clock className="w-3 h-3" />
                    {festival.month}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{festival.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ethical Tourism & Community-Based Tourism ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical &amp; Community-Based Tourism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to visit Berber communities respectfully and ensure your tourism benefits the people who call these places home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: 'Hire Local Guides', text: 'Always hire guides from the local community rather than city-based agencies. Local guides provide deeper cultural insight, and your payment goes directly to village economies. Expect to pay from 300 MAD per day.' },
              { icon: ShieldCheck, title: 'Respect Cultural Boundaries', text: 'Ask before entering homes, mosques (non-Muslims cannot enter), or photographing people. Dress modestly in rural areas. Remove shoes when entering homes. Accept hospitality gracefully.' },
              { icon: Award, title: 'Buy from Cooperatives', text: 'Women\'s cooperatives for carpets, argan oil, and pottery ensure fair wages. Cooperatives in Ait Bougmez, Tazenakht, and Ourika Valley offer authentic crafts at fair prices.' },
              { icon: Heart, title: 'Stay in Community Guesthouses', text: 'Community-run gites keep revenue in the village. Simple, comfortable accommodation with home-cooked meals from 200 MAD per night including dinner and breakfast.' },
              { icon: Sparkles, title: 'Learn a Few Words & Leave No Trace', text: 'Basic Tamazight phrases earn goodwill: "Azul" (hello), "tanmirt" (thank you). Carry out all trash, use reusable bottles, and respect shared water sources (seguias).' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Amazigh Heritage in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/art-berber-carpet-weaving.webp', alt: 'Berber woman weaving a traditional carpet on an upright loom in a Moroccan village', label: 'Traditional Carpet Weaving' },
              { src: '/images/hero-kasbahs.webp', alt: 'Ancient kasbah fortress with mud-brick towers in the Draa Valley of Morocco', label: 'Kasbah Architecture' },
              { src: '/images/art-atlas-mountain-village.webp', alt: 'Berber village with terraced fields in the High Atlas Mountains of Morocco', label: 'Atlas Mountain Village' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
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
                What is the difference between Berber and Amazigh?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Both terms refer to the same indigenous people of North Africa. &quot;Amazigh&quot; (plural: Imazighen),
                meaning &quot;free people,&quot; is the self-designation. &quot;Berber&quot; derives from the Greek/Roman
                &quot;barbaros.&quot; Both are widely used in Morocco, though Amazigh is increasingly preferred in
                official and cultural contexts.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit Berber villages independently or do I need a guide?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Well-known villages like Imlil are accessible independently, with guesthouses and marked trails.
                For remote areas like Ait Bougmez or Todra, a local guide (from 300 MAD per day) is recommended
                for cultural context, language help, and ensuring your visit benefits the community.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What language do Berber people speak?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Amazigh people speak Tamazight, with three main variants: Tashelhit (south/High Atlas),
                Tamazight (Middle Atlas), and Tarifit (Rif Mountains). Since 2011, Tamazight is an official
                language alongside Arabic. Most Amazigh also speak Darija, and many speak French and English.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time to visit Berber villages?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (April-May) and autumn (September-October) are ideal. Pleasant hiking weather,
                wildflowers in spring, and harvest celebrations in autumn. Winter brings snow to the High Atlas,
                limiting access. January is special for Yennayer (Amazigh New Year) celebrations.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How can I buy authentic Berber carpets?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Buy directly from weaving cooperatives in Ait Bougmez or Tazenakht for fair prices. Look for
                hand-knotted construction, natural wool, and slight irregularities. Cooperatives charge from 800 MAD
                for small rugs and from 3,000 MAD for larger pieces. Avoid tourist-area middlemen who charge
                three to five times the fair price.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it appropriate to photograph Berber people?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Always ask permission first, especially with women and elders. Most communities are welcoming
                but value privacy. Respect anyone who declines. Showing the photo on your screen is appreciated.
                In tourist areas, a small tip (from 5-10 MAD) may be expected for photos.
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
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A broader look at Moroccan culture, customs, etiquette, and social norms for travelers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hiking, trekking, and mountain experiences across the High, Middle, and Anti-Atlas ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-carpet-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Paintbrush className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Carpet Buying Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about buying authentic Moroccan carpets and avoiding scams.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-wedding-traditions" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wedding Traditions
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the elaborate multi-day wedding celebrations of Moroccan and Berber culture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Amazigh Culture?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Atlas Mountain villages to Saharan oases, the Amazigh heritage of Morocco is waiting
            to be discovered. Plan your cultural journey through one of the world&apos;s oldest living civilizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Explore the Atlas Mountains
            </Link>
            <Link
              href="/morocco-culture-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Read the Culture Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  Heart,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  MessageCircleQuestion,
  HandCoins,
  Flame,
  GlassWater,
  Coffee,
  Gift,
  Leaf,
  CircleDot,
  ThumbsUp,
  Globe,
  Store,
  Sparkles,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-mint-tea`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Mint Tea (Atay) Guide 2026 | Preparation, Ritual & Best Tea Houses',
  description:
    'Complete guide to Moroccan mint tea (atay). Traditional preparation with Chinese gunpowder green tea and fresh spearmint, the 3-glass pouring ritual, tea etiquette, best salons de the in Marrakech, Fes & Casablanca, regional variations, tea accessories, and where to buy Moroccan tea supplies.',
  keywords: [
    'Moroccan mint tea',
    'atay Morocco',
    'Morocco tea ceremony',
    'Moroccan tea preparation',
    'whiskey berber tea',
    'gunpowder green tea Morocco',
    'Morocco tea etiquette',
    'three glasses tea Morocco',
    'best tea houses Morocco',
    'salon de the Marrakech',
    'Morocco tea pouring ritual',
    'Moroccan tea set silver',
    'buy Moroccan tea',
    'mint tea recipe Morocco',
    'Morocco tea culture',
    'atay nana Morocco 2026',
    'Moroccan hospitality tea',
    'tea houses Fes Morocco',
  ],
  openGraph: {
    title: 'Morocco Mint Tea (Atay) Guide 2026 | Preparation, Ritual & Best Tea Houses',
    description:
      'Everything about Moroccan mint tea: traditional preparation with gunpowder green tea and spearmint, the pouring ritual, 3-glass etiquette, best tea houses by city, buying tea supplies, and the role of tea in Moroccan hospitality.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/photo-mint-tea-pouring.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan mint tea being poured from a silver teapot into an ornate glass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Mint Tea (Atay) Guide 2026 | Complete Tea Culture Guide',
    description:
      'Traditional preparation, pouring ritual, 3-glass etiquette, best salons de the in Marrakech/Fes/Casablanca, tea accessories, and the role of mint tea in Moroccan hospitality.',
    images: [`${BASE_URL}/images/photo-mint-tea-pouring.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What type of tea is used in Moroccan mint tea?',
    a: 'Moroccan mint tea is made with Chinese gunpowder green tea (called "atay sini" in Darija). The tea leaves are rolled into small pellets that unfurl during brewing. The most popular brand is Chunmee or Pearl Gunpowder. Loose-leaf quality varies, and Moroccans are particular about their preferred brand.',
  },
  {
    q: 'Why is Moroccan mint tea poured from a height?',
    a: 'Pouring from a height of 30-50 cm aerates the tea, creating a light foam on the surface and mixing the flavors evenly. The foam signals proper preparation. Pouring also cools the tea slightly, making it drinkable faster. The technique requires practice; skilled pourers never spill a drop.',
  },
  {
    q: 'Is it rude to refuse tea in Morocco?',
    a: 'Refusing tea can be seen as a mild social slight, since offering tea is a central act of Moroccan hospitality. You should accept at least one glass. If you cannot drink more, a polite "shukran, baraka" (thank you, enough) is the graceful way to decline additional glasses. Turning down tea from a shopkeeper does not carry the same weight as declining from a host in their home.',
  },
  {
    q: 'How many glasses of tea should you drink in Morocco?',
    a: 'Tradition says three glasses. A Moroccan proverb states: "The first glass is gentle as life, the second is strong as love, the third is bitter as death." In practice, your host may refill your glass multiple times. Drink at least one, ideally two or three. Leaving before the first glass is empty is considered impolite.',
  },
  {
    q: 'How much sugar is in Moroccan mint tea?',
    a: 'Traditional Moroccan mint tea is very sweet. A standard teapot for 4-6 glasses uses 4-8 large sugar cones or the equivalent in sugar cubes (roughly 50-100 grams). In tourist areas, many cafes and riads now offer "moins de sucre" (less sugar) or unsweetened versions on request. The sugar is integral to the flavor balance, not an afterthought.',
  },
  {
    q: 'What is the best time to drink mint tea in Morocco?',
    a: 'Moroccans drink mint tea all day. It is served after every meal, during business meetings, when guests arrive, while shopping in the souk, and during afternoon breaks. Peak tea-drinking hours are mid-morning (10-11 AM) and late afternoon (4-6 PM). Tea after dinner can extend past midnight during social gatherings.',
  },
  {
    q: 'Can I buy Moroccan tea supplies to take home?',
    a: 'Yes. Chinese gunpowder green tea is sold in every souk and grocery store (from 20 MAD per 250g). Dried spearmint bundles are available at spice stalls (from 10 MAD). Silver-plated tea sets with glasses start from 200 MAD in medina shops. Pack tea leaves and mint in sealed bags for freshness. Brass or silver teapots can be shipped if too heavy for luggage.',
  },
  {
    q: 'What is Berber whiskey?',
    a: '"Berber whiskey" is a humorous nickname for Moroccan mint tea, used because Morocco is a Muslim-majority country where alcohol consumption is uncommon in traditional settings. The joke is that mint tea is the national drink the way whiskey might be elsewhere. You will hear this term in tourist areas and from guides, but it is not a formal name.',
  },
  {
    q: 'Are there Moroccan teas besides mint tea?',
    a: 'Yes. Louiza (lemon verbena) tea is popular in cooler months. Sheeba (wormwood/absinthe herb) tea is common in northern Morocco. Saffron tea appears in Taliouine, where saffron is grown. Thyme tea is a Berber mountain remedy. In summer, some cafes serve chilled or iced mint tea. Herbal infusions without green tea are called "tisanes."',
  },
  {
    q: 'How much does tea cost in Morocco?',
    a: 'A glass of mint tea at a local cafe costs from 5-10 MAD. A full teapot at a tourist cafe runs from 20-40 MAD. At upscale salons de the and hotel restaurants, expect from 40-80 MAD per teapot. Street vendors sell glasses for from 3-5 MAD. Tea served in a riad or during a private ceremony is typically included in the accommodation or experience cost. Seasonal pricing can change.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Mint Tea (Atay) Guide 2026',
  description:
    'Complete guide to Moroccan mint tea covering preparation, the pouring ritual, tea etiquette, best tea houses in Marrakech, Fes, and Casablanca, regional variations, tea accessories, and the role of tea in Moroccan hospitality.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/photo-mint-tea-pouring.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Mint Tea Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: PREPARATION STEPS
   ================================================================ */

const preparationSteps = [
  {
    step: 1,
    title: 'Rinse the Tea Leaves',
    icon: GlassWater,
    description:
      'Place 1-2 tablespoons of Chinese gunpowder green tea into a metal teapot. Add a small amount of boiling water, swirl for 10 seconds, then discard the water. This "washing" removes dust and bitterness from the rolled leaves without stripping flavor. The rinse water is always thrown away.',
  },
  {
    step: 2,
    title: 'First Steep — The "Spirit" of the Tea',
    icon: Flame,
    description:
      'Pour boiling water over the rinsed leaves and let them steep for 1-2 minutes. Pour a small glass of this first brew (called "ruh al-atay" or the spirit of the tea) and set it aside. This concentrated glass holds the deepest flavor and will be returned to the pot later.',
  },
  {
    step: 3,
    title: 'Add Fresh Mint and Sugar',
    icon: Leaf,
    description:
      'Stuff a generous handful of fresh spearmint (nana) into the pot. Traditional recipes use at least half as much mint as there is liquid. Add sugar — large sugar cones, sugar loaf chunks, or cubes. A standard pot for 4-6 glasses takes 4-6 large lumps. Press the mint down gently with a long spoon.',
  },
  {
    step: 4,
    title: 'Second Steep and Return the Spirit',
    icon: Flame,
    description:
      'Add more boiling water to fill the pot. Pour the reserved "spirit" glass back into the pot. Place the teapot on low heat or a charcoal burner (majmar) for 2-3 minutes. The gentle simmering melds the green tea, mint, and sugar into a single unified flavor.',
  },
  {
    step: 5,
    title: 'Test and Pour',
    icon: GlassWater,
    description:
      'Pour a test glass and taste for sweetness and strength. If needed, add more sugar or mint. When satisfied, pour the tea from a height of 30-50 cm into small decorated glasses. The stream should be steady and thin. The foam that forms on the surface signals a well-made pot.',
  },
  {
    step: 6,
    title: 'Serve and Repeat',
    icon: Coffee,
    description:
      'Serve glasses on a metal tray. A single set of tea leaves produces three rounds. For the second and third pots, add fresh mint and sugar but reuse the original tea leaves. Each successive round has a different character: the first is mild, the second is strong, the third is more herbal and bitter.',
  },
];

/* ================================================================
   DATA: TEA ETIQUETTE RULES
   ================================================================ */

const etiquetteRules = [
  {
    title: 'Accept the First Glass',
    icon: ThumbsUp,
    text: 'Refusing tea from a host — especially in a home — is considered impolite. Accept at least one glass, even if you only take a few sips. This acknowledges the gesture of hospitality.',
  },
  {
    title: 'Three Glasses Is the Custom',
    icon: GlassWater,
    text: 'The Moroccan proverb says the first glass is gentle as life, the second is strong as love, and the third is bitter as death. Staying for all three rounds shows respect and appreciation for your host\'s time.',
  },
  {
    title: 'The Host Always Pours',
    icon: Crown,
    text: 'Tea preparation and pouring is the host\'s duty, typically the head of the household or the eldest present. Pouring your own glass or someone else\'s is a breach of protocol. Wait to be served.',
  },
  {
    title: 'Hold the Glass at the Rim',
    icon: Coffee,
    text: 'Moroccan tea glasses have no handles. Hold the glass at the very top rim between your thumb and forefinger. The lower part is too hot to touch. Avoid wrapping your hand around the glass.',
  },
  {
    title: 'Sip, Do Not Gulp',
    icon: Clock,
    text: 'Tea is served hot and is meant to be sipped slowly. The pace of tea drinking mirrors conversation. Rushing through your glass implies you want to leave. Savoring shows contentment.',
  },
  {
    title: 'Declining More Tea Gracefully',
    icon: ShieldCheck,
    text: 'After two or three glasses, place your palm over the glass or turn it upside down on the tray. Say "shukran, baraka" (thank you, that is enough). Your host will understand. Do not leave while a full glass sits in front of you.',
  },
];

/* ================================================================
   DATA: REGIONAL VARIATIONS
   ================================================================ */

const regionalVariations = [
  {
    region: 'Marrakech & the South',
    icon: Flame,
    description: 'Tea is extremely sweet in the south. Sugar quantities can double compared to northern recipes. The tea is often served with almond-stuffed pastries (kaab el ghazal). Saffron from nearby Taliouine sometimes makes an appearance in special blends.',
  },
  {
    region: 'Fes & the Imperial Cities',
    icon: Building,
    description: 'Fassi tea tends to be moderately sweet with an emphasis on presentation. Silver tea services are a point of family pride. Orange blossom water (ma zhar) may be added to the pot for special occasions. The serving ceremony is more formal.',
  },
  {
    region: 'Northern Morocco (Tangier, Chefchaouen)',
    icon: Leaf,
    description: 'In the Rif region, sheeba (a wormwood herb similar to absinthe) replaces or supplements mint, producing a more bitter and aromatic brew. This "Riffian tea" is an acquired taste but prized by locals. Chefchaouen cafes typically offer both styles.',
  },
  {
    region: 'Atlas Mountains & Berber Villages',
    icon: Globe,
    description: 'Berber mountain tea often includes wild thyme, sage, or pennyroyal from high-altitude pastures. In winter, fresh mint is scarce, so dried mint or herb blends are common. Tea is brewed over wood fire or charcoal, giving it a subtle smoky flavor.',
  },
  {
    region: 'Saharan & Desert Regions',
    icon: Star,
    description: 'Desert tea ritual is slower and more ceremonial. In Merzouga and the oases, tea is prepared over hot coals with prolonged boiling. The brew is extremely concentrated and sweet. Nomadic families carry tea-making supplies as essential travel provisions.',
  },
  {
    region: 'Essaouira & the Coast',
    icon: GlassWater,
    description: 'Coastal cities offer a relaxed tea culture influenced by Atlantic breezes. Louiza (lemon verbena) tea is popular alongside mint. In summer, some modern cafes serve chilled or iced mint tea variations. Essaouira adds its surf-town ambiance to the ritual.',
  },
];

/* ================================================================
   DATA: BEST TEA HOUSES BY CITY
   ================================================================ */

const bestTeaHouses = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/art-moroccan-mint-tea.webp',
    intro: 'The red city has tea houses ranging from panoramic rooftop terraces above the medina to intimate riad courtyards. Jemaa el-Fnaa is ringed with tea stalls where you can watch the square unfold over a steaming glass.',
    picks: [
      { name: 'Cafe des Epices', type: 'Rooftop Terrace', price: 'From 20 MAD', note: 'Rahba Kedima spice square views, fresh mint tea, laid-back atmosphere' },
      { name: 'Le Jardin', type: 'Garden Cafe', price: 'From 30 MAD', note: 'Hidden garden in the medina, lush greenery, organic mint from on-site garden' },
      { name: 'Nomad', type: 'Modern Rooftop', price: 'From 35 MAD', note: 'Contemporary take on tea service, Atlas Mountain views on clear days' },
      { name: 'Maison de la Photographie Terrace', type: 'Museum Cafe', price: 'From 25 MAD', note: 'Stunning medina panorama, quiet retreat, tea with pastries' },
      { name: 'La Mamounia Tea Lounge', type: 'Palace Hotel', price: 'From 80 MAD', note: 'Legendary hotel, elaborate silver service, garden setting, premium pastries' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/art-moroccan-tea-ceremony.webp',
    intro: 'Fes has the most traditional tea culture in Morocco. Family-run salons de the in the medina serve tea the same way they have for generations. Rooftop terraces overlook the tanneries and minarets.',
    picks: [
      { name: 'Cafe Clock', type: 'Cultural Cafe', price: 'From 25 MAD', note: 'Art events, storytelling nights, traditional tea with camel burger' },
      { name: 'Riad Rcif Terrace', type: 'Riad Rooftop', price: 'From 20 MAD', note: 'Medina rooftop, quiet mornings, generous mint tea service' },
      { name: 'The Ruined Garden', type: 'Garden Cafe', price: 'From 30 MAD', note: 'Restored ruin turned garden restaurant, peaceful tea afternoons' },
      { name: 'Palais de Fes Salon', type: 'Traditional Salon', price: 'From 40 MAD', note: 'Formal Fassi tea ceremony, silver tea set, elaborate pastry selection' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Crown,
    image: '/images/photo-moroccan-tea-set.webp',
    intro: 'Casablanca blends Moroccan tea tradition with cosmopolitan cafe culture. Art deco salons de the sit alongside modern specialty cafes. The Habous quarter has old-school tea rooms popular with locals.',
    picks: [
      { name: 'Patisserie Bennis Habous', type: 'Historic Patisserie', price: 'From 15 MAD', note: 'Legendary 1930s shop, mint tea with Moroccan pastries, local institution' },
      { name: 'Cafe Rick\'s', type: 'Themed Bar/Cafe', price: 'From 50 MAD', note: 'Casablanca film tribute, mint tea on the terrace, iconic atmosphere' },
      { name: 'Sqala Cafe', type: 'Garden Cafe', price: 'From 25 MAD', note: 'Inside old Portuguese fortification, shaded garden, traditional tea service' },
      { name: 'Villa Zevaco', type: 'Modern Salon', price: 'From 40 MAD', note: 'Mid-century architecture, curated tea menu, art gallery vibe' },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: MapPin,
    image: '/images/photo-moroccan-mint-tea.webp',
    intro: 'The blue city is dotted with small cafes where elderly men play cards over pots of tea. Sheeba herb tea is the local specialty here. Many terraces offer views of the blue-washed medina walls and Rif Mountains.',
    picks: [
      { name: 'Place Outa el-Hammam Cafes', type: 'Town Square', price: 'From 10 MAD', note: 'Main square, multiple terraces, people-watching, sheeba or mint tea' },
      { name: 'Cafe Aladdin', type: 'Rooftop', price: 'From 15 MAD', note: 'Panoramic blue medina views, sunset tea, budget-friendly' },
      { name: 'Bab Ssour Terrace', type: 'Hillside Cafe', price: 'From 15 MAD', note: 'Elevated position, Rif Mountain backdrop, quiet mornings' },
    ],
  },
];

/* ================================================================
   DATA: TEA ACCESSORIES & SHOPPING
   ================================================================ */

const teaAccessories = [
  {
    item: 'Silver-Plated Teapot (Berrad)',
    icon: Coffee,
    price: 'From 150 MAD',
    description: 'The iconic Moroccan teapot with a long curved spout designed for high pouring. Available in nickel-silver, brass, or genuine silver. Sizes range from 2-glass personal pots to 12-glass family pots. Higher quality has thicker walls and a tighter lid.',
    buyAt: 'Coppersmith souks in Marrakech and Fes, or the Habous quarter in Casablanca',
  },
  {
    item: 'Painted Tea Glasses',
    icon: GlassWater,
    price: 'From 5 MAD per glass',
    description: 'Small, handleless glasses decorated with gold, silver, or multicolored enamel patterns. Traditional sets include 6 or 12 matching glasses. Designs range from geometric to floral. The gold filigree patterns are the most classic Moroccan style.',
    buyAt: 'Glassware shops in every medina, souks, and homeware stores',
  },
  {
    item: 'Silver or Brass Tea Tray (Siniya)',
    icon: CircleDot,
    price: 'From 100 MAD',
    description: 'Round or rectangular trays with etched geometric or arabesque patterns. The tray completes the tea service and is carried to wherever guests are seated. Genuine hammered brass trays from Fes are collector-grade pieces.',
    buyAt: 'Metalwork souks, antique dealers, and craft cooperatives',
  },
  {
    item: 'Sugar Cone (Pain de Sucre)',
    icon: Sparkles,
    price: 'From 10 MAD per cone',
    description: 'The traditional Moroccan sugar comes in large hard white cones weighing about 2 kg, wrapped in blue or purple paper. The cone is broken into chunks with a special hammer. Sugar cones are sold in every grocery store and are a staple of Moroccan kitchens.',
    buyAt: 'Grocery stores (hanout), supermarkets, and spice shops',
  },
  {
    item: 'Charcoal Burner (Majmar)',
    icon: Flame,
    price: 'From 50 MAD',
    description: 'A clay or metal brazier used to keep the teapot warm during long tea sessions. Charcoal is placed inside and the teapot sits on top. The majmar maintains a gentle heat that keeps the tea at serving temperature without over-boiling.',
    buyAt: 'Pottery souks, hardware stores, and craft markets',
  },
  {
    item: 'Chinese Gunpowder Green Tea',
    icon: Leaf,
    price: 'From 20 MAD per 250g',
    description: 'The base ingredient. Sold loose by weight in spice shops and pre-packaged in grocery stores. Popular brands include Chunmee (the green tin) and Sultan. The tightly rolled pellets should be uniform in size with a dark green color. Avoid dusty or broken leaves.',
    buyAt: 'Spice shops, souks, grocery stores, and supermarkets',
  },
];

/* ================================================================
   DATA: TEA CEREMONY EXPERIENCES
   ================================================================ */

const teaExperiences = [
  {
    title: 'Riad Tea Ceremony',
    icon: Heart,
    price: 'From 100 MAD per person',
    duration: '45-60 minutes',
    description: 'Many riads offer guided tea ceremonies where a host demonstrates the full preparation, explains the cultural significance, and lets you practice the high pour yourself. Often paired with Moroccan pastries.',
    bestIn: 'Marrakech, Fes',
  },
  {
    title: 'Souk Tea & Shopping Tour',
    icon: Store,
    price: 'From 200 MAD per person',
    duration: '2-3 hours',
    description: 'A guided walk through the medina that includes shopping for tea supplies — selecting tea leaves, choosing mint, picking out glasses and a teapot — followed by a tea preparation session at a local home or riad.',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    title: 'Berber Village Tea Experience',
    icon: Globe,
    price: 'From 150 MAD per person',
    duration: '1-2 hours (part of day trip)',
    description: 'During Atlas Mountain excursions, many operators include a stop at a Berber village where a local family prepares tea over a wood fire. The mountain herbs used in Berber tea differ from city recipes. A deeply personal and unhurried experience.',
    bestIn: 'Imlil, Ourika Valley, High Atlas',
  },
  {
    title: 'Cooking Class with Tea Lesson',
    icon: Flame,
    price: 'From 350 MAD per person',
    duration: '3-5 hours',
    description: 'Many Moroccan cooking classes end with a mint tea preparation lesson. After cooking tagine or couscous, you learn the full tea-making process and enjoy your meal with freshly brewed tea. A complete Moroccan culinary immersion.',
    bestIn: 'Marrakech, Fes, Essaouira, Casablanca',
  },
];

/* ================================================================
   DATA: PRICE GUIDE
   ================================================================ */

const priceGuide = [
  { item: 'Glass of mint tea (local cafe)', price: 'From 5 MAD', note: 'Neighborhood cafes, the everyday price' },
  { item: 'Glass of mint tea (street vendor)', price: 'From 3 MAD', note: 'Stalls and mobile vendors' },
  { item: 'Teapot at a tourist cafe', price: 'From 20 MAD', note: 'Serves 3-4 glasses, tourist medina areas' },
  { item: 'Teapot at upscale salon de the', price: 'From 40 MAD', note: 'Premium setting, served with pastries' },
  { item: 'Teapot at luxury hotel', price: 'From 80 MAD', note: 'Palace hotels, silver service' },
  { item: 'Tea ceremony experience', price: 'From 100 MAD', note: 'Guided preparation at a riad' },
  { item: 'Souk tea & shopping tour', price: 'From 200 MAD', note: 'Includes guide and supplies' },
  { item: 'Cooking class with tea lesson', price: 'From 350 MAD', note: 'Full culinary experience' },
  { item: 'Gunpowder green tea (250g)', price: 'From 20 MAD', note: 'Loose leaf at spice shops' },
  { item: 'Silver-plated teapot', price: 'From 150 MAD', note: 'Basic to mid-range quality' },
  { item: 'Set of 6 painted tea glasses', price: 'From 30 MAD', note: 'Standard decorated glasses' },
  { item: 'Complete tea set (pot + tray + glasses)', price: 'From 300 MAD', note: 'Tourist souvenir packages' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoMintTeaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/photo-mint-tea-pouring.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Mint Tea Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Coffee className="w-4 h-4" />
            Culture &amp; Hospitality
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Mint Tea
            <br className="hidden md:block" /> (Atay) Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The complete guide to Morocco&apos;s national drink. From the ritual of gunpowder
            green tea with fresh spearmint to the art of the high pour -- tradition in every glass.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: Cultural Significance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            More Than a Drink: Mint Tea and Moroccan Identity
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Mint tea — called <strong>atay b&apos;nana</strong> in Moroccan Darija — is the
              undisputed national beverage of Morocco. It is served at every meal, offered to
              every guest, poured at every negotiation, and shared at every gathering from
              Tangier to the Sahara. To understand Moroccan tea is to understand Moroccan
              social life itself.
            </p>
            <p>
              The drink arrived in Morocco in the 18th century when British merchants
              introduced Chinese green tea through the port of Mogador (modern Essaouira).
              Moroccans blended the tea with the fresh spearmint that grew abundantly across
              the country and added generous amounts of sugar. Within decades, this combination
              became the centerpiece of Moroccan hospitality — a ritual that has remained
              essentially unchanged for over 200 years.
            </p>
            <p>
              Today, Morocco is the world&apos;s largest importer of Chinese green tea. An
              estimated 70,000 tonnes arrive annually, almost all of it the tightly rolled
              gunpowder variety. The average Moroccan drinks between 1 and 2 liters of mint
              tea per day. Refusing a glass from a host is one of the few genuine social
              missteps a visitor can make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Leaf, label: 'Key Ingredient', value: 'Chinese gunpowder green tea + fresh spearmint (nana)' },
              { icon: Clock, label: 'Daily Consumption', value: '1-2 liters per person, all day from breakfast to midnight' },
              { icon: Users, label: 'Social Role', value: 'Served at every gathering, meal, business deal & guest welcome' },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="card-moroccan p-5 text-center">
                  <StatIcon className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Three Ingredients ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Three Pillars of Moroccan Tea
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every glass of atay rests on three ingredients, each with its own history and purpose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Chinese Gunpowder Green Tea',
                icon: Leaf,
                details: 'Rolled into small dense pellets that resemble gunpowder grains, this tea unfurls slowly during brewing, releasing a bold, slightly smoky flavor. Morocco uses almost exclusively the "special gunpowder" grade from Zhejiang province. The tighter the roll, the fresher the leaf. Moroccans call the tea "atay sini" (Chinese tea) and are brand-loyal — the green tin of Chunmee is recognized nationwide.',
              },
              {
                name: 'Fresh Spearmint (Nana)',
                icon: Sparkles,
                details: 'Moroccan mint tea uses spearmint (mentha spicata), not peppermint. Fresh bunches are sold at every market for from 2-5 MAD. The mint must be fresh — dried mint produces an inferior tea. Leaves are stuffed generously into the pot, sometimes equaling the volume of the liquid. In winter, when fresh mint is scarce, dried mint or other herbs substitute.',
              },
              {
                name: 'White Sugar (Sukkar)',
                icon: Sparkles,
                details: 'Sugar is not optional in traditional Moroccan tea — it is structural. The large white sugar cone (pain de sucre) is broken into chunks and dissolved directly in the pot, not added to individual glasses. A standard pot holds 50-100 grams of sugar. The sweetness balances the astringency of the green tea and the sharpness of the mint, creating the characteristic rounded flavor.',
              },
            ].map((ingredient) => {
              const IngIcon = ingredient.icon;
              return (
                <div key={ingredient.name} className="card-moroccan p-6">
                  <IngIcon className="w-8 h-8 text-[var(--color-gold)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{ingredient.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Preparation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flame className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How Moroccan Mint Tea Is Made
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The traditional six-step method that has defined Moroccan tea for over two centuries.
          </p>

          <div className="space-y-6">
            {preparationSteps.map((s) => {
              const StepIcon = s.icon;
              return (
                <div key={s.step} className="card-moroccan p-6 flex gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg">
                      {s.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <StepIcon className="w-4 h-4 text-[var(--color-gold)]" />
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Pouring Ritual ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GlassWater className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Art of the High Pour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Why Moroccan tea is poured from a height, and what the foam means.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                The most visually striking element of Moroccan tea service is the pour. The
                host lifts the teapot high above the glass — often 30 to 50 centimeters — and
                directs a thin, steady stream into the small glass below. This is not showmanship
                for tourists. The technique serves three practical purposes.
              </p>
              <p>
                <strong>Aeration:</strong> The long fall through air introduces oxygen into the
                tea, which develops a light foam on the surface. This foam (called &quot;the
                crown&quot;) is a mark of quality. A glass without foam suggests rushed or
                careless preparation.
              </p>
              <p>
                <strong>Mixing:</strong> The force of the pour blends the sugar, mint, and tea
                evenly throughout the glass, so that every sip has the same balanced flavor.
                Stirring with a spoon is not part of the tradition.
              </p>
              <p>
                <strong>Cooling:</strong> Passage through the air lowers the temperature slightly,
                making the tea drinkable sooner. In a culture where tea is served very hot, this
                matters.
              </p>
              <p>
                Moroccan men often practice the high pour from childhood. Spilling is rare among
                experienced pourers. When tea is poured back and forth between the pot and a glass
                several times before serving (a process called &quot;turning&quot; the tea), it
                further improves the mixture.
              </p>
            </div>
            <div className="relative h-80 md:h-auto rounded-xl overflow-hidden">
              <img
                src="/images/photo-tea-pour-traditional.webp"
                alt="Moroccan man performing the traditional high pour of mint tea from a silver teapot into a decorated glass"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">The traditional high pour</p>
            </div>
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
            Six rules that every guest should know before sitting down to tea.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regional Variations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Tea Variations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The same pot of tea tastes different across Morocco. Here is how each region makes it its own.
          </p>

          <div className="space-y-6">
            {regionalVariations.map((region) => {
              const RegIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <RegIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    {region.region}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{region.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Tea Houses by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Tea Houses &amp; Salons de Th&eacute;
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where to drink the finest mint tea in Morocco, from local medina cafes to palace hotel lounges.
          </p>

          <div className="space-y-12">
            {bestTeaHouses.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative h-60 md:h-auto rounded-xl overflow-hidden">
                      <img
                        src={city.image}
                        alt={`Moroccan tea service in ${city.city}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <p className="absolute bottom-4 left-4 text-white font-bold text-lg flex items-center gap-2">
                        <CityIcon className="w-5 h-5" /> {city.city}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{city.intro}</p>
                      <div className="space-y-3">
                        {city.picks.map((pick) => (
                          <div key={pick.name} className="card-moroccan p-4 flex items-start gap-3">
                            <Star className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                                {pick.name}
                                <span className="ml-2 text-xs font-normal text-[var(--color-accent)]">{pick.type}</span>
                              </h4>
                              <p className="text-xs text-[var(--text-secondary)] mt-1">
                                <span className="font-semibold text-[var(--color-accent)]">{pick.price}</span> — {pick.note}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tea with Meals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea with Meals and Daily Life
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Mint tea is not reserved for special occasions. It threads through every part of the Moroccan day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Breakfast', text: 'Moroccans start the day with mint tea alongside msemen (flatbread), beghrir (semolina pancakes), olive oil, honey, and amlou (almond-argan spread). The first pot of the day is often the strongest.' },
              { title: 'After Lunch', text: 'The main meal of the day ends with tea rather than dessert. After tagine or couscous, a pot of mint tea aids digestion and signals the start of the afternoon rest. It is impolite to leave the table before tea is finished.' },
              { title: 'Afternoon Tea', text: 'Between 4 and 6 PM, many Moroccans take a second tea break with pastries like chebakia, ghriba, or briouats. This is a social hour — friends and family gather in living rooms, on terraces, or at neighborhood cafes.' },
              { title: 'After Dinner', text: 'Evening tea can extend well past midnight during family gatherings, holidays, or Ramadan nights. After iftar during Ramadan, multiple pots of tea accompany dates, harira soup, and pastries. The communal tea drinking is a core part of the evening.' },
              { title: 'Business & Shopping', text: 'In the souk, accepting a shopkeeper\'s tea is part of the negotiation process. It slows the pace, builds rapport, and turns a transaction into a conversation. The tea is genuine hospitality, not a sales tactic — but it does make you more likely to buy.' },
              { title: 'Guest Welcome', text: 'When you enter a Moroccan home, tea is prepared before any other conversation. It may take 15-20 minutes. This wait is intentional. The time spent preparing tea shows the host values the visit enough to make a fresh pot from scratch.' },
            ].map((meal) => (
              <div key={meal.title} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {meal.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{meal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tea Ceremony Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea Ceremony Experiences for Visitors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Go beyond drinking tea — learn to prepare and pour it yourself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teaExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ExpIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
                      <DollarSign className="w-3.5 h-3.5" /> {exp.price}
                    </span>
                    <span className="flex items-center gap-1 text-[var(--text-muted)]">
                      <Clock className="w-3.5 h-3.5" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[var(--text-muted)]">
                      <MapPin className="w-3.5 h-3.5" /> {exp.bestIn}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tea Accessories & Shopping ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gift className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea Accessories &amp; What to Buy
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bring the ritual home. Here is what to look for in the souks and how much to pay.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teaAccessories.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.item} className="card-moroccan p-5">
                  <AccIcon className="w-7 h-7 text-[var(--color-gold)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {acc.item}
                  </h3>
                  <p className="text-xs text-[var(--color-accent)] font-semibold mb-2">{acc.price}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{acc.description}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {acc.buyAt}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mint Tea Price Guide 2026
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect to pay for tea, experiences, and supplies. Seasonal pricing can change.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-semibold">
              <div className="p-3 px-4">Item</div>
              <div className="p-3 px-4">Price</div>
              <div className="p-3 px-4">Notes</div>
            </div>
            {priceGuide.map((item, i) => (
              <div
                key={item.item}
                className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tea and Hospitality ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Role of Tea in Moroccan Hospitality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tea is not a beverage in Morocco. It is a language.
          </p>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              In Moroccan culture, offering tea is an act of welcome that transcends social
              class. A family in a remote Atlas village with limited resources will still
              prepare tea for an unexpected visitor, using their best glasses and their
              finest mint. The gesture communicates: you are honored here, you are safe
              here, take your time.
            </p>
            <p>
              The preparation itself is a gift of labor. The host washes the leaves, selects
              the freshest mint, breaks sugar from the cone, boils the water, tests the
              flavor, and performs the high pour — all while guests observe. This public
              preparation is deliberate. It shows that nothing is hidden, that the tea is
              made with care, and that the host is personally invested in the quality of
              what they serve.
            </p>
            <p>
              Business dealings in Morocco often begin with 20-30 minutes of tea and
              conversation before any commercial topic is raised. Pushing to talk business
              before the tea is poured signals impatience and is read as disrespect for the
              relationship. Experienced visitors and expatriates learn quickly that the most
              productive meetings start with the slowest tea.
            </p>
            <p>
              During mourning, tea is the first thing neighbors bring to a bereaved family.
              During celebrations — weddings, births, Eid — tea flows continuously. During
              Ramadan, the breaking of the fast at iftar always includes mint tea alongside
              dates, harira, and chebakia. Tea marks every passage, every gathering, every
              door that opens.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            The Art of Moroccan Tea
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-tea-ceremony.webp"
                alt="Traditional Moroccan tea ceremony with silver teapot, painted glasses, and brass tray"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Tea Ceremony</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-moroccan-mint-tea.webp"
                alt="Freshly poured Moroccan mint tea with foam in a decorated glass on a silver tray"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Mint Tea with Foam</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-moroccan-tea-set.webp"
                alt="Ornate Moroccan tea set with silver teapot, gold-rimmed glasses, and hammered brass tray"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Moroccan Tea Set</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about Moroccan mint tea.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Moroccan Food Guide',
                description: 'Complete guide to Moroccan cuisine: tagines, couscous, pastilla, street food, and dining etiquette.',
                href: '/morocco-food-guide',
                icon: Flame,
              },
              {
                title: 'Morocco Tea Culture',
                description: 'Extended exploration of Morocco\'s tea traditions, regional customs, and the social fabric of tea.',
                href: '/morocco-tea-culture',
                icon: Coffee,
              },
              {
                title: 'Cooking Classes',
                description: 'Where to learn Moroccan cooking with hands-on tagine, pastry, and tea preparation workshops.',
                href: '/cooking-classes',
                icon: BookOpen,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress code, tipping customs, greetings, and social norms for respectful travel in Morocco.',
                href: '/etiquette',
                icon: ShieldCheck,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── More Food & Culture Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Food &amp; Culture Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-street-food-guide', title: 'Street Food Guide', desc: 'A tour of Morocco\'s best street food: where to find it, what to order, and how much to pay.' },
              { href: '/morocco-food-tours', title: 'Food Tours', desc: 'Guided food tours in Marrakech, Fes, Casablanca, and beyond with local experts.' },
              { href: '/morocco-cooking-classes-guide', title: 'Cooking Classes Guide', desc: 'Detailed comparison of cooking classes across Morocco with prices and what you will cook.' },
              { href: '/morocco-souk-guide', title: 'Souk Shopping Guide', desc: 'How to navigate Moroccan markets, bargain effectively, and buy spices, tea, and crafts.' },
              { href: '/cuisine', title: 'Moroccan Cuisine Overview', desc: 'The essential introduction to Morocco\'s food traditions, regional dishes, and dining culture.' },
              { href: '/culture', title: 'Moroccan Culture Guide', desc: 'Deeper look at Moroccan traditions, family life, festivals, and the cultural fabric of daily life.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

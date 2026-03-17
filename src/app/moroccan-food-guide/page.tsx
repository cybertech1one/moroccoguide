import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  UtensilsCrossed,
  Flame,
  Leaf,
  Coffee,
  Star,
  MapPin,
  CookingPot,
  GlassWater,
  Heart,
  Clock,
  Coins,
  Sparkles,
  Camera,
  BookOpen,
  ShoppingBasket,
  Globe,
  Wheat,
  ChefHat,
  Soup,
  Croissant,
  ArrowRight,
  ShieldCheck,
  Sun,
  Moon,
  Info,
  AlertTriangle,
  ThumbsUp,
  Users,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/moroccan-food-guide`;

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Complete Moroccan Food Guide 2025-2026 | 30+ Dishes, Prices & Where to Eat | CityGuide',
  description:
    'The ultimate guide to Moroccan food. Discover 30+ dishes from tagine and couscous to street food like msemen and sfenj. Prices in MAD, where to find the best versions, breakfast spreads, desserts, drinks, and food safety tips. Your complete Moroccan food encyclopedia.',
  keywords: [
    'Moroccan food guide',
    'what to eat in Morocco',
    'Moroccan cuisine',
    'tagine Morocco',
    'couscous Morocco',
    'Moroccan street food',
    'harira soup',
    'pastilla Morocco',
    'msemen flatbread',
    'sfenj donuts',
    'Moroccan breakfast',
    'mint tea Morocco',
    'Moroccan desserts',
    'chebakia',
    'Moroccan food prices',
    'where to eat Morocco',
    'rfissa Morocco',
    'tanjia Marrakech',
    'mechoui',
    'Moroccan bread',
    'baghrir pancakes',
    'Moroccan orange juice',
    'food safety Morocco',
    'best restaurants Morocco',
    'Moroccan spices',
    'ras el hanout',
  ],
  openGraph: {
    title: 'Complete Moroccan Food Guide - CityGuide',
    description:
      'Discover 30+ Moroccan dishes with prices in MAD, where to find the best versions, street food, breakfast, desserts, drinks, and food safety tips.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-food.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful spread of traditional Moroccan dishes including tagine, couscous, and mint tea',
      },
    ],
  },
  alternates: { canonical: PAGE_URL },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': PAGE_URL,
      name: 'Complete Moroccan Food Guide',
      description:
        'The ultimate guide to Moroccan food with 30+ dishes, prices in MAD, street food, breakfast, desserts, and drinks.',
      url: PAGE_URL,
      isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
      about: { '@type': 'Country', name: 'Morocco' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Moroccan Food Guide', item: PAGE_URL },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Moroccan Dishes',
      numberOfItems: 30,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Tagine' },
        { '@type': 'ListItem', position: 2, name: 'Couscous' },
        { '@type': 'ListItem', position: 3, name: 'Pastilla' },
        { '@type': 'ListItem', position: 4, name: 'Harira' },
        { '@type': 'ListItem', position: 5, name: 'Tanjia' },
      ],
    },
  ],
};

/* ===================================================================
   DATA: MAIN DISHES
   =================================================================== */

const mainDishes = [
  {
    name: 'Tagine',
    arabic: 'Tajine',
    icon: CookingPot,
    image: '/images/photo-tagine-closeup.webp',
    price: 'from 35 MAD (street) / from 80 MAD (restaurant)',
    description:
      'The undisputed icon of Moroccan cuisine. Named after the conical clay pot it is cooked in, tagine is a slow-cooked stew where the cone-shaped lid traps steam, returning moisture to create impossibly tender meat and deeply concentrated flavors. Every region, every family has their signature version.',
    varieties: [
      'Chicken with Preserved Lemon & Olives -- the classic',
      'Lamb with Prunes & Almonds -- sweet and savory masterpiece',
      'Kefta (meatball) with Eggs -- comfort food at its finest',
      'Fish Tagine (Hout) -- coastal specialty from Essaouira and Tangier',
      'Vegetable Tagine -- seasonal vegetables with saffron and olive oil',
    ],
    bestIn: 'Marrakech (Jemaa el-Fnaa food stalls), Fes (Cafe Clock), Essaouira (fish tagine)',
  },
  {
    name: 'Couscous',
    arabic: 'Kseksu',
    icon: Wheat,
    image: '/images/photo-couscous-traditional.webp',
    price: 'from 40 MAD (street) / from 80 MAD (restaurant)',
    description:
      'The national dish, UNESCO-recognized Intangible Cultural Heritage since 2020. Hand-rolled semolina granules are steamed three times over aromatic broth in a couscoussier, producing impossibly light, fluffy grains. Every Moroccan family eats couscous on Friday after noon prayer -- it is a weekly ritual as sacred as the day itself.',
    varieties: [
      'Friday Couscous -- lamb or chicken with seven vegetables and chickpeas',
      'Royal Couscous -- multiple meats, raisins, and caramelized onions for celebrations',
      'Tfaya Couscous -- Fassi specialty with sweet caramelized onions and raisins',
      'Seven Vegetables (Seba Khodra) -- the most traditional version',
    ],
    bestIn: 'Fes (home-cooked), Casablanca (La Sqala), Rabat (Dar Zaki)',
  },
  {
    name: 'Pastilla (Bastilla)',
    arabic: 'Bastilla',
    icon: Star,
    image: '/images/photo-pastilla-fes.webp',
    price: 'from 60 MAD (restaurant)',
    description:
      'The crown jewel of Moroccan celebratory cuisine. Layers of paper-thin warqa pastry encase shredded pigeon or chicken, saffron-scrambled eggs, and toasted almonds, then dusted with powdered sugar and cinnamon. The sweet-savory contrast is uniquely Moroccan. Originated in Fes from Andalusian-Moorish court cuisine and takes an entire day to prepare properly.',
    varieties: [
      'Traditional Pigeon Pastilla -- the original, richest version',
      'Chicken Pastilla -- more widely available, slightly lighter',
      'Seafood Pastilla -- shrimp and fish version from coastal cities',
    ],
    bestIn: 'Fes (Dar Roumana, Riad Fes), Casablanca (Rick\'s Cafe)',
  },
  {
    name: 'Harira Soup',
    arabic: 'Harira',
    icon: Soup,
    image: '/images/photo-harira-soup.webp',
    price: 'from 5 MAD (street) / from 20 MAD (restaurant)',
    description:
      'Morocco\'s most beloved soup and the traditional dish that breaks the fast during Ramadan at sunset. A hearty, velvety blend of lentils, chickpeas, diced lamb or beef, crushed tomatoes, vermicelli, and fresh herbs. The signature texture comes from tedouira, a flour-water slurry that thickens the broth. Seasoned with ginger, turmeric, cinnamon, pepper, and saffron. During Ramadan, always served alongside dates and chebakia pastries.',
    varieties: [
      'Classic Ramadan Harira -- with meat, lentils, and chickpeas',
      'Vegetarian Harira -- lentil and chickpea version, equally delicious',
    ],
    bestIn: 'Everywhere during Ramadan; year-round at Jemaa el-Fnaa food stalls (Marrakech)',
  },
  {
    name: 'Tanjia Marrakchia',
    arabic: 'Tanjia',
    icon: Flame,
    image: '/images/photo-moroccan-feast.webp',
    price: 'from 80 MAD per person',
    description:
      'A dish so uniquely Marrakchi that it bears the city\'s name. Beef or lamb shanks are placed in a clay urn with preserved lemons, saffron, cumin, smen (aged butter), and garlic. The sealed urn is delivered to the hammam furnace keeper (fernatchi) who buries it in wood-ash embers for 8-12 hours. The result is impossibly tender, falling-apart meat with deep, complex flavors. Traditionally a bachelor\'s dish -- men prepare it for weekend gatherings.',
    varieties: [
      'Classic Beef Tanjia -- the original with saffron and preserved lemon',
      'Lamb Tanjia -- a richer variation preferred by some',
    ],
    bestIn: 'Marrakech only (Chez Lamine, Mechoui Alley in the medina)',
  },
  {
    name: 'Rfissa',
    arabic: 'Rfissa',
    icon: Heart,
    image: '/images/photo-food-flatlay.webp',
    price: 'from 60 MAD (restaurant)',
    description:
      'A ceremonial dish of shredded msemen flatbread layered with lentils and tender chicken, drenched in broth infused with fenugreek, ras el hanout, saffron, and pepper. Traditionally prepared for women after childbirth to restore strength, as fenugreek promotes lactation. Also served at celebrations and religious holidays. A true labor of love that takes hours to prepare.',
    varieties: [],
    bestIn: 'Home-cooked is best; available at traditional restaurants in Fes and Marrakech',
  },
  {
    name: 'Mechoui',
    arabic: 'Mechoui',
    icon: Flame,
    image: '/images/photo-food-flatlay.webp',
    price: 'from 50 MAD per portion / from 2,000 MAD whole lamb',
    description:
      'Whole lamb slow-roasted 5-6 hours in an underground clay pit until fall-off-the-bone tender with a crispy golden exterior. Seasoned simply with salt, cumin, and melted butter basted repeatedly. The centerpiece of weddings, Eid al-Adha, and celebrations. In Marrakech, Mechoui Alley in the medina has stalls selling it by the portion.',
    varieties: [],
    bestIn: 'Marrakech (Mechoui Alley in the medina), available at celebrations nationwide',
  },
];

/* ===================================================================
   DATA: STREET FOOD
   =================================================================== */

const streetFood = [
  {
    name: 'Msemen',
    arabic: 'Msemen',
    image: '/images/photo-msemen-flatbread.webp',
    price: 'from 1 MAD per piece',
    description:
      'Square, flaky, pan-fried flatbread made from layers of dough stretched paper-thin, folded repeatedly, then cooked on a griddle until golden and crispy. Eaten at breakfast with honey and soft cheese, or stuffed with spiced meat and vegetables as a street snack. Watch the women in market stalls stretch the dough with mesmerizing skill.',
  },
  {
    name: 'Sfenj',
    arabic: 'Sfenj',
    image: '/images/photo-sfenj-donuts.webp',
    price: 'from 1 MAD each',
    description:
      'Moroccan doughnuts -- rings of yeasted dough deep-fried to golden perfection. Crispy outside, pillowy inside. Eaten plain, dusted with sugar, or dipped in honey. The best sfenj vendors have queues wrapping around the block in the morning. Best consumed within minutes of frying.',
  },
  {
    name: 'Brochettes',
    arabic: 'Brochettes',
    image: '/images/photo-brochettes-grill.webp',
    price: 'from 10 MAD per skewer',
    description:
      'Meat skewers grilled over charcoal at countless street stalls. Lamb, beef, chicken, or kefta (spiced ground meat) marinated in cumin, paprika, and salt. Served with khobz bread, harissa, and cumin-salt dip. The smoky aroma wafting through any Moroccan medina at lunchtime is almost certainly brochettes.',
  },
  {
    name: 'Bocadillo',
    arabic: 'Bocadillo',
    image: '/images/hero-street-food-grill.webp',
    price: 'from 15 MAD',
    description:
      'A Moroccan sandwich evolution from Spanish influence. A crusty baguette filled with grilled kefta, merguez sausage, fried eggs, chips, and a generous drizzle of harissa and mayonnaise. The ultimate late-night street food. Bocadillo carts appear after dark in every Moroccan city.',
  },
  {
    name: 'Snail Soup (Babbouche)',
    arabic: 'Babbouche',
    image: '/images/hero-street-food-grill.webp',
    price: 'from 5 MAD per bowl',
    description:
      'A beloved Moroccan street food that surprises visitors. Small snails simmered in a fragrant herbal broth of thyme, licorice root, caraway, anise, and pepper. Served in a bowl with the broth for sipping and a toothpick for extracting the snails. Considered therapeutic by Moroccans -- good for digestion and colds. Most common in Marrakech and Fes.',
  },
  {
    name: 'Moroccan Sandwich (Khobz Mahshi)',
    arabic: 'Khobz Mahshi',
    image: '/images/photo-moroccan-bread.webp',
    price: 'from 10 MAD',
    description:
      'Round Moroccan bread sliced open and stuffed with tuna, olives, harissa, boiled eggs, and fresh vegetables. A staple lunch for Moroccan workers and students. Available at every neighborhood hanout (corner shop) and market stall.',
  },
];

/* ===================================================================
   DATA: BREAKFAST
   =================================================================== */

const breakfastItems = [
  {
    name: 'Full Moroccan Breakfast',
    arabic: 'Ftour',
    image: '/images/photo-moroccan-breakfast.webp',
    price: 'from 30 MAD (riad/cafe)',
    description:
      'A Moroccan breakfast is a feast of small dishes: msemen, baghrir, and rghaif flatbreads alongside crusty khobz bread, served with honey, amlou (argan-almond butter), olive oil, labneh cheese, olives, and fresh orange juice. Riads typically serve this as part of the stay. Accompanied by mint tea or nous-nous coffee.',
  },
  {
    name: 'Baghrir (Thousand-Hole Pancakes)',
    arabic: 'Baghrir',
    image: '/images/photo-moroccan-breakfast.webp',
    price: 'from 1 MAD per piece',
    description:
      'Spongy semolina pancakes riddled with hundreds of tiny holes on the surface that soak up butter and honey like a sponge. The batter is a pourable mix of semolina, flour, and yeast, cooked on one side only. The holes form naturally as the batter ferments and bubbles rise. A breakfast staple drizzled with melted butter and honey.',
  },
  {
    name: 'Rghaif',
    arabic: 'Rghaif',
    image: '/images/photo-moroccan-breakfast.webp',
    price: 'from 2 MAD per piece',
    description:
      'Thin, layered flatbread similar to msemen but folded into rectangular shape. Can be plain or stuffed with kefta, onions, and spices (rghaif mahshi). When plain, eaten with honey and butter at breakfast. The stuffed version makes a satisfying street snack any time of day.',
  },
];

/* ===================================================================
   DATA: DESSERTS
   =================================================================== */

const desserts = [
  {
    name: 'Chebakia',
    arabic: 'Chebakia',
    image: '/images/photo-moroccan-sweets.webp',
    price: 'from 1 MAD per piece / from 60 MAD per kg',
    description:
      'An intricate flower-shaped cookie made from strips of dough twisted into a rosette, deep-fried, then dipped in warm honey and sprinkled with sesame seeds. The essential Ramadan accompaniment to harira soup. Making chebakia is a communal family activity -- women gather days before Ramadan to prepare hundreds in advance.',
  },
  {
    name: 'Kaab el Ghazal (Gazelle Horns)',
    arabic: 'Kaab el Ghazal',
    image: '/images/photo-moroccan-sweets.webp',
    price: 'from 2 MAD per piece / from 80 MAD per kg',
    description:
      'Crescent-shaped pastries filled with almond paste scented with orange blossom water, wrapped in paper-thin dough and baked until barely golden. The most elegant Moroccan pastry -- delicate, not overly sweet, with the haunting fragrance of orange blossom. A staple at weddings and celebrations. The best come from Fes.',
  },
  {
    name: 'Sellou (Sfouf/Zamita)',
    arabic: 'Sellou',
    image: '/images/photo-moroccan-sweets.webp',
    price: 'from 40 MAD per kg',
    description:
      'A unique no-bake confection made from toasted flour, ground almonds, sesame seeds, butter, honey, and warming spices like cinnamon and anise. Rich and energy-dense, it is traditionally prepared for Ramadan as a quick energy source when breaking the fast. Also given to new mothers for strength. The texture is somewhere between cookie crumble and halvah.',
  },
  {
    name: 'Briouats',
    arabic: 'Briouats',
    image: '/images/photo-moroccan-sweets.webp',
    price: 'from 2 MAD per piece',
    description:
      'Triangular or cigar-shaped pastries made from warqa or filo pastry. The sweet version is filled with almond paste, fried, and dipped in honey. The savory version contains spiced kefta, goat cheese, or vermicelli. Served at celebrations and during Ramadan.',
  },
];

/* ===================================================================
   DATA: DRINKS
   =================================================================== */

const drinks = [
  {
    name: 'Moroccan Mint Tea (Atay)',
    arabic: 'Atay',
    image: '/images/card-mint-tea.webp',
    price: 'from 5 MAD per glass',
    description:
      'The national drink, symbol of hospitality, and a daily ritual. Chinese gunpowder green tea brewed with generous handfuls of fresh spearmint and large amounts of sugar. Poured from height to create a frothy top. Refusing mint tea is considered rude. It is served three times: the first glass is gentle like life, the second is strong like love, the third is bitter like death.',
    where: 'Everywhere. Every cafe, riad, shop, and home in Morocco.',
  },
  {
    name: 'Fresh Orange Juice',
    arabic: 'Assir Limoun',
    image: '/images/photo-orange-juice-stall.webp',
    price: 'from 4 MAD per glass',
    description:
      'Morocco is a citrus paradise, and freshly squeezed orange juice is available at stalls throughout the country for almost nothing. The most famous spot is Jemaa el-Fnaa square in Marrakech, where dozens of vendors compete for your business. The juice is sweet, cold, and vibrant -- no sugar needed. Morocco exports millions of tons of oranges but reserves the best for domestic consumption.',
    where: 'Jemaa el-Fnaa (Marrakech), everywhere year-round. Best October-April.',
  },
  {
    name: 'Avocado Smoothie',
    arabic: 'Jus d\'Avocat',
    image: '/images/photo-orange-juice-stall.webp',
    price: 'from 15 MAD',
    description:
      'A surprisingly common and beloved Moroccan drink. Ripe avocado blended with milk, sugar, and sometimes almonds or orange juice. Rich, creamy, and filling -- practically a meal. Available at juice stalls in every city. Moroccans eat avocado as a sweet ingredient, which surprises many visitors.',
    where: 'Juice stalls in every major city. Best in Agadir where avocados are locally grown.',
  },
  {
    name: 'Nous-Nous Coffee',
    arabic: 'Nous-Nous',
    image: '/images/card-mint-tea.webp',
    price: 'from 8 MAD',
    description:
      'Morocco\'s signature coffee drink. "Nous-nous" means "half-half" in Darija -- half espresso, half steamed milk. Similar to a Spanish cortado. A beloved mid-morning ritual at any Moroccan cafe, where men gather to discuss news and politics over nous-nous. Ask for "qahwa kehla" for a straight black espresso.',
    where: 'Every cafe in Morocco. Best enjoyed at a sidewalk cafe watching street life.',
  },
  {
    name: 'Almond Milk (Raibi)',
    arabic: 'Raibi',
    image: '/images/photo-orange-juice-stall.webp',
    price: 'from 10 MAD',
    description:
      'Fresh almond milk blended with sugar and orange blossom water. A traditional refreshment especially popular during summer and Ramadan. Some versions are thicker, almost like a milkshake. The almond flavor combined with the floral orange blossom is distinctly Moroccan.',
    where: 'Juice stalls and traditional cafes, especially in Fes and Marrakech.',
  },
];

/* ===================================================================
   DATA: SPICES & STAPLES
   =================================================================== */

const spices = [
  { name: 'Ras el Hanout', description: 'The "head of the shop" -- a complex blend of 20-35 spices. Every spice merchant has their secret recipe. Contains cardamom, mace, nutmeg, cinnamon, dried roses, and more.' },
  { name: 'Saffron', description: 'Moroccan saffron from Taliouine is among the world\'s finest. Used in tagines, couscous, and tea. Buy directly from cooperatives for best quality.' },
  { name: 'Cumin', description: 'The most ubiquitous Moroccan spice. Present on every table alongside salt. Used in virtually every savory dish. Moroccan cumin has a distinctive warm, earthy flavor.' },
  { name: 'Preserved Lemons', description: 'Lemons salt-cured for 30+ days until the rind is soft and intensely flavored. Essential for tagines. A uniquely Moroccan ingredient that defines the cuisine.' },
  { name: 'Harissa', description: 'A fiery chili paste made from dried red peppers, garlic, olive oil, and spices. Used as a condiment alongside many dishes. Moroccan harissa is milder than Tunisian versions.' },
  { name: 'Smen (Aged Butter)', description: 'Salted butter aged in clay pots for months or even years, developing an intense, funky, cheese-like flavor. Essential for couscous and tanjia. An acquired taste that rewards the adventurous.' },
  { name: 'Amlou', description: 'A Moroccan nut butter made from argan oil, roasted almonds, and honey. Often called "Moroccan Nutella." A Berber specialty from the Souss region served at breakfast with bread.' },
];

/* ===================================================================
   DATA: FOOD SAFETY TIPS
   =================================================================== */

const safetyTips = [
  { title: 'Street food is generally safe', detail: 'Choose stalls with high turnover -- busy stalls mean fresh food. If locals are eating there, it is a good sign. The grill stalls at Jemaa el-Fnaa have been serving millions safely for decades.' },
  { title: 'Drink bottled water', detail: 'Tap water is treated in major cities but may cause stomach upset for visitors. Stick to bottled water (Sidi Ali or Ain Saiss brands). Ice in tourist restaurants is usually made from purified water.' },
  { title: 'Wash fruits and vegetables', detail: 'Peel fruit yourself or ensure it has been washed with purified water. Cooked food is always safe. Salads in reputable restaurants are washed properly.' },
  { title: 'Start slowly', detail: 'Rich Moroccan food combined with new spices can overwhelm some stomachs. Start with lighter dishes and work up to the richer tagines and mechoui. Bring antacids just in case.' },
  { title: 'Eat with your right hand', detail: 'When eating communal dishes (tagine, couscous), eat with your right hand only. Use bread as your utensil. Eat from the section of the dish directly in front of you.' },
  { title: 'Allergies and restrictions', detail: 'Morocco is naturally accommodating for many diets. Vegetarian options abound. Nuts are in many dishes (especially almonds) -- alert your host. All meat is halal. Pork and alcohol are available only in tourist establishments.' },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccanFoodGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Moroccan Food Guide</li>
        </ol>
      </nav>

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-food.webp"
            alt="Colorful spread of traditional Moroccan dishes including tagine, couscous, bread, and mint tea"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Food &amp; Cuisine
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Complete Moroccan Food Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From tagine slow-cooked over charcoal to freshly squeezed orange juice for 4 MAD, Moroccan cuisine is one of
              the world&apos;s great food traditions. This is your complete guide to every dish, every street snack, every drink --
              with real prices and where to find the best versions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ============================================================
          QUICK FACTS BAR
          ============================================================ */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: UtensilsCrossed, label: 'Dishes Covered', value: '30+' },
            { icon: Coins, label: 'Street Food From', value: '1 MAD' },
            { icon: Star, label: 'UNESCO Heritage', value: 'Couscous 2020' },
            { icon: Globe, label: 'Influences', value: 'Berber, Arab, French' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION: MAIN DISHES
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">The Essentials</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Iconic Main Dishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are the cornerstone dishes of Moroccan cuisine -- the dishes that define the country&apos;s culinary identity
            and that every visitor should experience at least once.
          </p>
        </div>

        <div className="space-y-8">
          {mainDishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden`}
            >
              <div className="md:w-2/5 relative">
                <img
                  src={dish.image}
                  alt={`Traditional Moroccan ${dish.name} dish`}
                  loading="lazy"
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {dish.arabic}
                </div>
              </div>
              <div className="md:w-3/5 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <dish.icon className="w-6 h-6 text-[#A0522D]" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900">
                    {dish.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Coins className="w-4 h-4 text-[#C4960C]" />
                  <span className="text-sm font-medium text-[#C4960C]">{dish.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{dish.description}</p>
                {dish.varieties.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Popular Varieties:</h4>
                    <ul className="space-y-1">
                      {dish.varieties.map((v) => (
                        <li key={v} className="flex items-start gap-2 text-sm text-gray-600">
                          <Star className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex items-start gap-2 bg-[#FAF8F5] rounded-lg p-3">
                  <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700"><span className="font-semibold">Best in:</span> {dish.bestIn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION: STREET FOOD
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Eat Like a Local</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Street Food
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Morocco&apos;s street food scene is legendary. For just a few dirhams you can eat extraordinarily well --
              from freshly fried sfenj at dawn to sizzling brochettes at midnight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streetFood.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={`Moroccan ${item.name} street food`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#C4960C] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#A0522D] font-medium mb-3">{item.arabic}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hero image banner */}
          <div className="mt-12 relative rounded-2xl overflow-hidden">
            <img
              src="/images/hero-street-food-grill.webp"
              alt="Moroccan street food vendor grilling brochettes at a bustling market stall"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
              <div className="p-8 max-w-lg">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-2">
                  The Jemaa el-Fnaa Experience
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Every evening, Marrakech&apos;s central square transforms into the world&apos;s largest open-air restaurant.
                  Over 100 food stalls serve everything from grilled meats and fresh seafood to snail soup and sheep heads.
                  Navigate by nose -- follow the smoke and the crowds. Stall #1 and #14 are local favorites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: BREAKFAST
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Morning Ritual</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Moroccan Breakfast
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Moroccan breakfast is an event -- a spread of breads, pastries, dips, and the ever-present mint tea.
            Most riads include a generous breakfast, but the real experience is at a neighborhood cafe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {breakfastItems.map((item) => (
            <div key={item.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={`Moroccan breakfast item: ${item.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {item.arabic}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">{item.name}</h3>
                  <span className="text-sm font-medium text-[#C4960C]">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full breakfast spread */}
        <div className="mt-8 bg-[#FAF8F5] rounded-2xl p-6 md:p-8">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-4">
            What to Expect at a Riad Breakfast
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { item: 'Msemen, baghrir, and rghaif flatbreads', note: 'Freshly made each morning' },
              { item: 'Khobz (round bread) with olive oil and amlou', note: 'Argan oil-almond butter spread' },
              { item: 'Moroccan crepes with honey', note: 'Light and delicate' },
              { item: 'Fresh orange juice', note: 'Squeezed to order' },
              { item: 'Mint tea or nous-nous coffee', note: 'Your choice' },
              { item: 'Olives, soft cheese (jben), and jam', note: 'Homemade preserves' },
              { item: 'Hard-boiled eggs with cumin', note: 'A Moroccan staple' },
              { item: 'Seasonal fruit platter', note: 'Oranges, figs, pomegranate' },
            ].map((row) => (
              <div key={row.item} className="flex items-start gap-3">
                <Star className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{row.item}</p>
                  <p className="text-xs text-gray-500">{row.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: DESSERTS
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Sweet Traditions</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Moroccan Desserts &amp; Sweets
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moroccan sweets are works of art -- intricate pastries perfumed with orange blossom water, drenched in honey,
              and studded with almonds. Most are prepared for celebrations and religious holidays.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {desserts.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-5">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={`Moroccan sweet: ${item.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-xs text-[#A0522D] font-medium mb-1">{item.arabic}</p>
                  <p className="text-sm font-medium text-[#C4960C] mb-2">{item.price}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: DRINKS
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Sip &amp; Savor</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Moroccan Drinks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Morocco is a Muslim-majority country, so alcohol is not the social lubricant -- tea is. The drink culture
            revolves around mint tea, fresh juices, and coffee, all consumed in generous quantities throughout the day.
          </p>
        </div>

        <div className="space-y-6">
          {drinks.map((drink, i) => (
            <div
              key={drink.name}
              className={`flex flex-col ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-5 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden`}
            >
              <div className="sm:w-1/3 relative">
                <img
                  src={drink.image}
                  alt={`Moroccan drink: ${drink.name}`}
                  loading="lazy"
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>
              <div className="sm:w-2/3 p-5 md:p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-1">{drink.name}</h3>
                <p className="text-xs text-[#A0522D] font-medium mb-1">{drink.arabic}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Coins className="w-4 h-4 text-[#C4960C]" />
                  <span className="text-sm font-medium text-[#C4960C]">{drink.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{drink.description}</p>
                <div className="flex items-start gap-2 bg-[#FAF8F5] rounded-lg p-3">
                  <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700"><span className="font-semibold">Where:</span> {drink.where}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION: SPICES & STAPLES
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Flavor Foundations</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Spices &amp; Staples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The magic of Moroccan cooking lies in its spice blends. These are the ingredients that give the cuisine
              its distinctive character.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img
              src="/images/hero-spices.webp"
              alt="Colorful mounds of Moroccan spices at a spice market including cumin, saffron, turmeric, and paprika"
              loading="lazy"
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spices.map((spice) => (
              <div key={spice.name} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">{spice.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{spice.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-4">
              Where to Buy Spices
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { city: 'Marrakech', place: 'Rahba Kedima (spice square) in the medina', tip: 'Compare prices at multiple stalls before buying' },
                { city: 'Fes', place: 'Souk Attarine near the Qarawiyyin Mosque', tip: 'Oldest and most authentic spice souk' },
                { city: 'Essaouira', place: 'Spice shops near Place Moulay Hassan', tip: 'Less pressure, fair prices' },
              ].map((loc) => (
                <div key={loc.city} className="bg-[#FAF8F5] rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">{loc.city}</h4>
                  <p className="text-sm text-gray-600 mb-1">{loc.place}</p>
                  <p className="text-xs text-[#A0522D]">{loc.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: FOOD GALLERY
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-4">
            A Visual Feast
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { src: '/images/photo-tagine-closeup.webp', alt: 'Traditional Moroccan tagine with chicken, preserved lemons, and olives' },
            { src: '/images/photo-couscous-traditional.webp', alt: 'Hand-rolled Moroccan couscous served with vegetables and meat' },
            { src: '/images/photo-pastilla-fes.webp', alt: 'Golden pastilla dusted with powdered sugar and cinnamon from Fes' },
            { src: '/images/photo-harira-soup.webp', alt: 'Bowl of hearty Moroccan harira soup' },
            { src: '/images/photo-msemen-flatbread.webp', alt: 'Freshly cooked Moroccan msemen flatbread with flaky layers' },
            { src: '/images/photo-sfenj-donuts.webp', alt: 'Golden Moroccan sfenj donuts freshly fried' },
            { src: '/images/photo-brochettes-grill.webp', alt: 'Moroccan brochettes grilling over charcoal' },
            { src: '/images/photo-moroccan-breakfast.webp', alt: 'Traditional Moroccan breakfast spread at a riad' },
            { src: '/images/photo-orange-juice-stall.webp', alt: 'Fresh orange juice stall in Jemaa el-Fnaa Marrakech' },
            { src: '/images/photo-food-flatlay.webp', alt: 'Aerial view of Moroccan feast with multiple dishes' },
            { src: '/images/photo-spice-souk-display.webp', alt: 'Colorful spice display at a Moroccan souk' },
            { src: '/images/card-tagine.webp', alt: 'Beautifully presented Moroccan tagine dish' },
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION: FOOD SAFETY
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Stay Healthy</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Food Safety Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyTips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#A0522D]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900">{tip.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: DINING ETIQUETTE
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Cultural Knowledge</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Moroccan Dining Etiquette
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Eat with your right hand',
              detail: 'The left hand is considered unclean in Moroccan culture. When eating communal dishes like tagine or couscous, use your right hand only. Use bread as your utensil to scoop food. Eat from the section of the dish directly in front of you -- never reach across.',
              icon: Info,
            },
            {
              title: 'Bismillah before eating',
              detail: 'Your host will say "Bismillah" (in the name of God) before the meal begins. You do not need to repeat it, but waiting for this signal before eating shows respect. At the end of the meal, say "Hamdullah" (praise God) to express satisfaction.',
              icon: BookOpen,
            },
            {
              title: 'Accept hospitality graciously',
              detail: 'Moroccans are extraordinarily generous hosts. Refusing food can be seen as an insult. Accept at least a small portion, and compliment the cooking. If invited to a home, bring pastries or sugar as a gift -- not wine unless you know the family drinks.',
              icon: Heart,
            },
            {
              title: 'Communal dining is normal',
              detail: 'Most traditional Moroccan meals are served in a large communal dish. Tagine is placed in the center and everyone eats from it using bread. This is not a hygiene concern -- it is a fundamental social ritual that bonds families and friends.',
              icon: Users,
            },
            {
              title: 'Shoes off at the door',
              detail: 'When invited to a Moroccan home, remove your shoes at the entrance. You will usually be seated on cushions around a low circular table. The host may bring a basin for hand-washing before the meal (ewer and basin called tasa).',
              icon: ThumbsUp,
            },
            {
              title: 'Tipping at restaurants',
              detail: 'Tipping is customary in Morocco. At restaurants, leave 10-15% of the bill or round up generously. At street food stalls, rounding up is appreciated but not expected. For exceptional meals, 15-20% is a generous gesture.',
              icon: Coins,
            },
          ].map((rule) => (
            <div key={rule.title} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5">
              <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                <rule.icon className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">{rule.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{rule.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION: WHERE TO EAT
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Restaurant Picks</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where to Eat by City
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: 'Marrakech',
                spots: [
                  { name: 'Jemaa el-Fnaa food stalls', type: 'Street food', price: 'from 20 MAD' },
                  { name: 'Cafe Clock', type: 'Fusion/Traditional', price: 'from 80 MAD' },
                  { name: 'Mechoui Alley', type: 'Roasted lamb', price: 'from 50 MAD' },
                  { name: 'Al Fassia', type: 'Fine dining', price: 'from 200 MAD' },
                ],
              },
              {
                city: 'Fes',
                spots: [
                  { name: 'Cafe Clock Fes', type: 'Traditional/Creative', price: 'from 70 MAD' },
                  { name: 'Dar Roumana', type: 'Fine dining', price: 'from 350 MAD' },
                  { name: 'Thami\'s stall (Talaa Kebira)', type: 'Street food', price: 'from 15 MAD' },
                  { name: 'Ruined Garden', type: 'Modern Moroccan', price: 'from 120 MAD' },
                ],
              },
              {
                city: 'Casablanca',
                spots: [
                  { name: 'La Sqala', type: 'Traditional', price: 'from 80 MAD' },
                  { name: 'Central Market restaurants', type: 'Seafood', price: 'from 60 MAD' },
                  { name: 'Rick\'s Cafe', type: 'Fine dining', price: 'from 200 MAD' },
                  { name: 'Brasserie La Tour', type: 'French-Moroccan', price: 'from 150 MAD' },
                ],
              },
              {
                city: 'Essaouira',
                spots: [
                  { name: 'Port fish stalls', type: 'Fresh seafood', price: 'from 40 MAD' },
                  { name: 'Triskala Cafe', type: 'Cafe/Light meals', price: 'from 40 MAD' },
                  { name: 'Loft Essaouira', type: 'Rooftop dining', price: 'from 100 MAD' },
                  { name: 'La Table by Madada', type: 'Fine Moroccan', price: 'from 200 MAD' },
                ],
              },
              {
                city: 'Rabat',
                spots: [
                  { name: 'Dar Zaki', type: 'Traditional home-style', price: 'from 80 MAD' },
                  { name: 'Le Dhow', type: 'River boat dining', price: 'from 150 MAD' },
                  { name: 'Cosmopolitan', type: 'Modern Moroccan', price: 'from 120 MAD' },
                  { name: 'Market stalls in Medina', type: 'Street food', price: 'from 15 MAD' },
                ],
              },
              {
                city: 'Tangier',
                spots: [
                  { name: 'El Morocco Club', type: 'Fine Moroccan', price: 'from 200 MAD' },
                  { name: 'Cafe Hafa', type: 'Tea/Light meals', price: 'from 20 MAD' },
                  { name: 'Saveur de Poisson', type: 'Fish set menu', price: '120 MAD fixed' },
                  { name: 'Grand Socco food stalls', type: 'Street food', price: 'from 15 MAD' },
                ],
              },
            ].map((city) => (
              <div key={city.city} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#A0522D]" />
                  {city.city}
                </h3>
                <div className="space-y-3">
                  {city.spots.map((spot) => (
                    <div key={spot.name} className="flex items-start justify-between gap-2 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{spot.name}</p>
                        <p className="text-xs text-gray-500">{spot.type}</p>
                      </div>
                      <span className="text-xs font-medium text-[#C4960C] whitespace-nowrap">{spot.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Taste Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Take a cooking class to bring these flavors home, explore our complete cuisine encyclopedia,
            or find the best restaurants across the kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cooking-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <ChefHat className="w-4 h-4" /> Cooking Classes
            </Link>
            <Link
              href="/cuisine"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Full Cuisine Encyclopedia
            </Link>
            <Link
              href="/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Find Restaurants
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          EXPLORE MORE
          ============================================================ */}
      <ExploreMore
        currentCategory="culture"
        currentHref="/moroccan-food-guide"
        title="Continue Exploring Morocco"
      />
    </>
  );
}

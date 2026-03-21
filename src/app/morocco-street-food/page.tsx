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
  Utensils,
  Flame,
  Compass,
  Building,
  Award,
  BookOpen,
  Crown,
  Leaf,
  Store,
  Coffee,
  Globe,
  ThumbsUp,
  Soup,
  CookingPot,
  Citrus,
  GlassWater,
  Cookie,
  Sandwich,
  Eye,
  CircleDot,
  HandPlatter,
  Droplets,
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-street-food`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Street Food Guide 2026 | 30+ Must-Try Dishes & Where to Find Them',
  description:
    'The definitive Morocco street food guide. 30+ must-try dishes from msemen and sfenj to babbouche snail soup and merguez sandwiches. Prices from 3 MAD, city-by-city breakdown, food safety tips, and Jemaa el-Fnaa stall recommendations.',
  keywords: [
    'morocco street food',
    'moroccan street food guide',
    'best street food morocco',
    'jemaa el fnaa food',
    'marrakech street food',
    'fes street food',
    'moroccan snacks',
    'msemen morocco',
    'sfenj moroccan donuts',
    'babbouche snail soup',
    'merguez sandwich morocco',
    'harira soup morocco',
    'morocco food stalls',
    'moroccan street food prices',
    'street food safety morocco',
    'vegetarian street food morocco',
    'casablanca street food',
    'essaouira fish grill',
    'moroccan orange juice',
    'avocado smoothie morocco',
    'chebakia morocco',
    'morocco street food tour',
    'morocco food guide 2026',
    'cheap eats morocco',
  ],
  openGraph: {
    title: 'Morocco Street Food Guide 2026 | 30+ Must-Try Dishes & Where to Find Them',
    description:
      'Eat your way through Morocco. 30+ street food dishes with real prices, specific stall locations, city-by-city guide, and food safety tips from years of eating at Moroccan food stalls.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-street-food-grill.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan street food vendor grilling meat skewers over charcoal at a bustling food stall',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Street Food Guide 2026 | 30+ Must-Try Dishes',
    description:
      'The complete guide to eating on the streets of Morocco. 30+ dishes, real prices in MAD, safety tips, and the best food stalls in every major city.',
    images: [`${BASE_URL}/images/hero-street-food-grill.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide
   ================================================================ */

const faqItems = [
  {
    q: 'Is street food safe to eat in Morocco?',
    a: 'Moroccan street food is generally safe when you follow basic rules. Eat at stalls with high customer turnover, choose food cooked fresh in front of you, avoid raw salads at street carts, and stick to bottled water. Most travelers eat street food daily without issues. Locals eat at the same stalls, which is the best indicator of safety.',
  },
  {
    q: 'How much does street food cost in Morocco?',
    a: 'Morocco has some of the cheapest street food in North Africa. Fresh orange juice costs from 5 MAD, sfenj donuts from 1 MAD each, harira soup from 5 MAD, a merguez sandwich from 15 MAD, and a full grilled meat plate with bread and salad from 30 MAD. You can eat three full meals of street food for under 80 MAD per day.',
  },
  {
    q: 'What is the best street food in Jemaa el-Fnaa?',
    a: 'The famous Jemaa el-Fnaa night market in Marrakech serves grilled meats (kefta, merguez, lamb chops), sheep head (tete), snail soup (babbouche), harira, fried fish, and khobz bread sandwiches. Stalls 1, 14, and 31 are consistently recommended. Arrive around 7 PM for the freshest food and skip stalls where touts aggressively pull you in.',
  },
  {
    q: 'Can vegetarians find street food in Morocco?',
    a: 'Yes. Vegetarian street food options include msemen and baghrir flatbreads with honey, maakouda potato fritters, bissara fava bean soup, zaalouk eggplant dip with bread, harira without meat, boiled corn, roasted nuts, fresh fruit juices, and avocado smoothies. Many stalls also sell vegetable-stuffed briwat pastries.',
  },
  {
    q: 'What time do street food stalls open in Morocco?',
    a: 'Street food operates on a schedule. Breakfast stalls selling msemen, sfenj, and harira open from 6 AM. Midday stalls serving sandwiches, kefta, and bocadillos operate from 11 AM to 3 PM. Evening food markets like Jemaa el-Fnaa start setting up around 5 PM and peak from 7 PM to 11 PM. Some stalls near bus stations and souks stay open late.',
  },
  {
    q: 'Should I tip at street food stalls in Morocco?',
    a: 'Tipping at street food stalls is not expected but appreciated. Rounding up to the nearest 5 MAD is common. If you sit at a stall with a table and receive attentive service, leaving 5-10 MAD is generous. For orange juice vendors and quick snack purchases, no tip is necessary.',
  },
  {
    q: 'What is the best city for street food in Morocco?',
    a: 'Marrakech leads for sheer variety and spectacle, especially the Jemaa el-Fnaa night market. Fes has the most refined street food with unique specialties like camel meat and pigeon pastilla. Essaouira dominates for seafood grills at the port. Meknes offers the best value with lower prices than tourist cities. Casablanca has the most diverse international-influenced street food.',
  },
  {
    q: 'How do I order street food if I do not speak Arabic or French?',
    a: 'Pointing works at most stalls. Vendors display their food openly, so gesture at what you want and hold up fingers for quantity. Learn a few words: "wahd" (one), "jouj" (two), "beshhal" (how much), "safi" (enough). Most vendors in tourist areas speak basic English. Watching what locals order and saying "bhal hadak" (like that one) also works well.',
  },
];

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Street Food Guide 2026 | 30+ Must-Try Dishes & Where to Find Them',
  description:
    'Comprehensive Morocco street food guide covering 30+ must-try dishes, prices in MAD, city-by-city food stall locations, food safety tips, vegetarian options, and guided street food tour recommendations.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-street-food-grill.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Street Food Guide', item: PAGE_URL },
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
   DATA: STREET FOOD SNACKS
   ================================================================ */

const snackFoods = [
  {
    name: 'Msemen',
    icon: HandPlatter,
    price: 'From 2 MAD per piece',
    description: 'Square-shaped layered flatbread, pan-fried until golden and flaky. Eaten plain with honey and butter, or stuffed with kefta, cheese, or herbs. The best msemen are made fresh on a griddle, with dough stretched paper-thin and folded into layers.',
    where: 'Every medina corner, especially near bread ovens. Best before 10 AM.',
  },
  {
    name: 'Baghrir',
    icon: CircleDot,
    price: 'From 2 MAD per piece',
    description: 'Spongy semolina pancakes covered in hundreds of tiny holes that absorb melted butter and honey. Called "thousand-hole crepes" by locals. Served hot off the griddle, dripping with a butter-honey mixture.',
    where: 'Breakfast carts and medina stalls. Also served at riad breakfasts.',
  },
  {
    name: 'Sfenj',
    icon: Cookie,
    price: 'From 1 MAD each',
    description: 'Moroccan donuts. Rings of unsweetened dough deep-fried until puffy and golden. The vendor shapes dough by hand and drops it into boiling oil. Crisp outside, airy inside. Moroccans dip sfenj into morning coffee or mint tea.',
    where: 'Street corners and market entrances. Follow the smell of hot oil at 7 AM.',
  },
  {
    name: 'Briwat',
    icon: Sparkles,
    price: 'From 3 MAD each',
    description: 'Triangular pastries made from warqa (paper-thin dough) wrapped around a filling and deep-fried. Savory versions contain chicken, kefta, or cheese. Sweet versions are filled with almond paste and soaked in honey. The pastry shatters on first bite.',
    where: 'Medina bakeries, souks, and food stalls. Common during Ramadan.',
  },
  {
    name: 'Maakouda',
    icon: CookingPot,
    price: 'From 3 MAD per piece',
    description: 'Deep-fried potato cakes. Mashed potatoes seasoned with cumin, turmeric, garlic, and herbs, fried until a dark golden crust forms. Served plain, inside khobz bread, or in a bocadillo sandwich. Cheap, filling, and everywhere.',
    where: 'Sandwich stalls, market food courts, and bus station vendors.',
  },
  {
    name: 'Khobz',
    icon: Store,
    price: 'From 1.50 MAD per loaf',
    description: 'Round flatbread baked in communal wood-fired ovens. Moroccans eat khobz with every meal. Torn into pieces and used to scoop tagine sauce, dip into olive oil, or wrap around grilled meat. Each neighborhood has its own bakery (ferrane).',
    where: 'Neighborhood bakeries (look for the wood smoke). Best fresh around noon.',
  },
  {
    name: 'Batbout',
    icon: HandPlatter,
    price: 'From 2 MAD per piece',
    description: 'Small, round pocket bread cooked on a griddle. Puffier and softer than khobz, with a pocket perfect for stuffing with kefta, eggs, or cheese. Popular in northern Morocco.',
    where: 'Northern Morocco and medina sandwich stalls.',
  },
] as const;

/* ================================================================
   DATA: STREET FOOD MAINS
   ================================================================ */

const mainFoods = [
  {
    name: 'Merguez Sandwiches',
    icon: Flame,
    price: 'From 15 MAD',
    description: 'Spicy lamb or beef sausages, deep red from harissa and paprika, grilled over charcoal and stuffed into khobz with tomatoes, onions, and hot sauce. The casings snap as you bite through. Vendors set up at dusk near busy intersections.',
    where: 'Evening food stalls across all cities. Casablanca\'s Derb Ghallef is famous for merguez.',
  },
  {
    name: 'Kefta',
    icon: Flame,
    price: 'From 20 MAD per serving',
    description: 'Seasoned minced lamb or beef shaped onto skewers and charcoal-grilled. Mixed with grated onion, parsley, cumin, paprika, and cinnamon. Served with bread, raw onion, and tomato salad, or in a sandwich.',
    where: 'Jemaa el-Fnaa stalls, souk food courts, and every evening food market.',
  },
  {
    name: 'Shawarma',
    icon: Sandwich,
    price: 'From 20 MAD',
    description: 'Rotisserie chicken or beef shaved off a vertical spit, loaded into bread with garlic sauce, pickled vegetables, and fries. Morocco adopted shawarma from the Middle East and added local spice blends and harissa. The best stalls maintain a constant queue and slice meat to order.',
    where: 'New city (ville nouvelle) areas, near cinemas and commercial streets.',
  },
  {
    name: 'Bocadillos',
    icon: Sandwich,
    price: 'From 15 MAD',
    description: 'Crusty baguette sandwiches stuffed with tuna, sardines, kefta, maakouda, fried eggs, olives, harissa, and mayonnaise. A legacy of Spanish and French influence. Point at ingredients behind the glass counter and they assemble your combination.',
    where: 'Everywhere. Particularly near schools, bus stations, and market entrances.',
  },
  {
    name: 'Babbouche (Snail Soup)',
    icon: Soup,
    price: 'From 5 MAD per bowl',
    description: 'Small land snails simmered in a spiced broth of thyme, licorice root, caraway, and anise. Locals believe the broth cures colds. Pick out snails with a toothpick and drink the peppery broth. An acquired taste, but unmissably Moroccan.',
    where: 'Jemaa el-Fnaa (Marrakech), Rcif Square (Fes), and most evening markets.',
  },
  {
    name: 'Harira',
    icon: Soup,
    price: 'From 5 MAD per bowl',
    description: 'Morocco\'s national soup. Thick, tomato-based broth loaded with lentils, chickpeas, vermicelli, and coriander. Harira stands appear at dusk. During Ramadan, the entire country breaks the fast with this soup.',
    where: 'Every city at dusk. Best near mosques and at Ramadan food markets.',
  },
  {
    name: 'Brochettes (Meat Skewers)',
    icon: Flame,
    price: 'From 5 MAD per skewer',
    description: 'Chunks of lamb, beef, chicken, or liver on metal skewers, charcoal-grilled. Served with bread, cumin salt, and hot sauce. Lamb heart and liver skewers cost less than regular meat.',
    where: 'Night food stalls, souk grills, and roadside vendors.',
  },
  {
    name: 'Fried Fish',
    icon: Award,
    price: 'From 25 MAD per plate',
    description: 'Sardines, whiting, or shrimp in chermoula paste, dredged in flour, deep-fried to order. Served with bread and lemon.',
    where: 'Essaouira port, Casablanca old medina, Agadir Souk El Had.',
  },
  {
    name: 'Sheep Head (Tete)',
    icon: Utensils,
    price: 'From 15 MAD per portion',
    description: 'Whole sheep heads slow-steamed until butter-soft. Point at cheek (the best), tongue, brain, or eye. Cumin and salt, served with bread.',
    where: 'Jemaa el-Fnaa and tete vendors in Fes and Meknes medinas.',
  },
  {
    name: 'Bissara',
    icon: Soup,
    price: 'From 5 MAD per bowl',
    description: 'Fava bean soup blended into a thick puree, drizzled with olive oil, cumin, and paprika. Breakfast fuel. Creamy, earthy, gone by 11 AM.',
    where: 'Breakfast stalls and working-class neighborhoods.',
  },
] as const;

/* ================================================================
   DATA: SWEETS & PASTRIES
   ================================================================ */

const sweetFoods = [
  {
    name: 'Chebakia',
    icon: Sparkles,
    price: 'From 3 MAD per piece',
    description: 'Flower-shaped pastry flavored with anise, sesame, and orange blossom water, deep-fried and dipped in hot honey. The classic Ramadan sweet. Intensely sticky and fragrant.',
    where: 'Bakeries and medina sweet shops. Production ramps up during Ramadan.',
  },
  {
    name: 'Sellou (Sfouf)',
    icon: Cookie,
    price: 'From 10 MAD per portion',
    description: 'Dense, crumbly mixture of toasted flour, ground almonds, sesame seeds, butter, honey, and cinnamon. Not baked, just pressed together. Texture somewhere between cookie dough and halva. Sold by weight at spice shops.',
    where: 'Spice shops, medina bakeries, and Ramadan sweet stalls.',
  },
  {
    name: 'Ghriba',
    icon: Cookie,
    price: 'From 2 MAD each',
    description: 'Cracked-top Moroccan cookies in coconut, almond, and sesame varieties. Crisp outside with visible cracks, soft and chewy inside. Coconut ghriba with mint tea is a perfect afternoon snack.',
    where: 'Bakeries, pastry shops, and supermarkets. Year-round.',
  },
  {
    name: 'Cornes de Gazelle',
    icon: Crown,
    price: 'From 5 MAD each',
    description: 'Crescent-shaped pastries filled with almond paste scented with orange blossom water, baked until just golden. The most refined Moroccan pastry. Bakery-fresh versions far surpass tourist-shop ones.',
    where: 'Quality patisseries. In Fes, medina bakeries near Rcif produce the best.',
  },
  {
    name: 'Fresh Orange Juice',
    icon: Citrus,
    price: 'From 5 MAD per glass',
    description: 'Vendors stack pyramids of oranges and press them to order using hand-crank juicers. A tall glass of cold juice for from 5 MAD is one of Morocco\'s greatest bargains. Jemaa el-Fnaa alone has 30+ juice stalls.',
    where: 'Every city square. Negotiate before ordering at tourist-area stalls.',
  },
  {
    name: 'Briouats with Almonds',
    icon: Sparkles,
    price: 'From 4 MAD each',
    description: 'Sweet briwat pastries: warqa dough wrapped around ground almonds, sugar, cinnamon, and orange blossom water, fried and dipped in honey. Shatteringly crisp.',
    where: 'Medina bakeries and Ramadan food stalls.',
  },
] as const;

/* ================================================================
   DATA: DRINKS
   ================================================================ */

const drinks = [
  {
    name: 'Avocado Smoothie',
    icon: GlassWater,
    price: 'From 15 MAD',
    description: 'Thick, creamy smoothie of ripe avocado blended with milk, sugar, and sometimes almonds or dates. A meal in a glass. Morocco grows avocados domestically, keeping prices low.',
    where: 'Juice bars in every city. Marrakech and Agadir have the most vendors.',
  },
  {
    name: 'Pomegranate Juice',
    icon: GlassWater,
    price: 'From 10 MAD',
    description: 'Ruby-red juice pressed from fresh pomegranates, available October through February. Tangy, slightly sweet. Some vendors mix it with orange juice for a blend.',
    where: 'Seasonal at juice stalls in autumn and winter. Best in Meknes and Fes.',
  },
  {
    name: 'Mint Tea',
    icon: Coffee,
    price: 'From 5 MAD per glass',
    description: 'Green gunpowder tea steeped with fresh spearmint and sugar cubes, poured from height to create froth. Central to social life. Refusing tea is considered impolite. Served scalding hot even in summer.',
    where: 'Everywhere. Cafes, street stalls, shops. Free from merchants during bargaining.',
  },
  {
    name: 'Almond Milk (Jus d\'Amande)',
    icon: GlassWater,
    price: 'From 10 MAD',
    description: 'Fresh almond milk blended from raw almonds, sugar, and water with a dash of orange blossom. Thick, rich, and intensely nutty. A Fes medina specialty.',
    where: 'Fes medina, Marrakech juice stalls, and larger city markets.',
  },
  {
    name: 'Sugarcane Juice',
    icon: GlassWater,
    price: 'From 5 MAD',
    description: 'Stalks of sugarcane fed through a hand-cranked press, producing a pale green, intensely sweet juice served cold with lime. More common in southern Morocco.',
    where: 'Seasonal carts in Agadir, Taroudant, and southern cities.',
  },
] as const;

/* ================================================================
   DATA: CITY FOOD GUIDES
   ================================================================ */

const cityGuides = [
  {
    city: 'Marrakech',
    icon: Star,
    highlight: 'Jemaa el-Fnaa Night Market',
    description: 'The undisputed capital of Moroccan street food. Jemaa el-Fnaa transforms nightly into Africa\'s largest open-air food market with 100+ stalls. Beyond the square, Rue Bani Marine has bocadillos, Mechoui Alley has slow-roasted lamb, and the souk food courts serve cheap tagines.',
    topDishes: ['Snail soup at Jemaa stalls', 'Mechoui at Mechoui Alley', 'Tanjia (unique to Marrakech)', 'Orange juice at the square', 'Kefta sandwiches on Rue Bani Marine'],
    priceLevel: 'Moderate -- tourist markup on Jemaa stalls. Walk 5 minutes into the medina for lower prices.',
  },
  {
    city: 'Fes',
    icon: Crown,
    highlight: 'Rcif Square & Talaa Kebira',
    description: 'The culinary capital of Morocco. Rcif Square has the densest concentration of food vendors. Walking up Talaa Kebira, you pass pastry shops, olive vendors, spice stalls, and brochette grills. Less touristy than Marrakech, lower prices.',
    topDishes: ['Camel meat (unique to Fes)', 'Almond milk from medina carts', 'Cornes de gazelle from Rcif bakeries', 'Pigeon pastilla by the slice', 'Briwat from hole-in-the-wall shops'],
    priceLevel: 'Low -- Fes medina food is a bargain. A full lunch from 20 MAD.',
  },
  {
    city: 'Casablanca',
    icon: Building,
    highlight: 'Central Market & Derb Ghallef',
    description: 'Morocco\'s biggest city has the most cosmopolitan street food scene. The Central Market near the port grills seafood on the spot. Derb Ghallef flea market is flanked by merguez stalls feeding thousands of shoppers. Ain Diab corniche has beachfront snack bars with bocadillos and grilled corn.',
    topDishes: ['Grilled seafood at the Central Market', 'Merguez at Derb Ghallef', 'Bocadillos near the Habous Quarter', 'Shawarma in the ville nouvelle', 'Fresh sardines at port-side stalls'],
    priceLevel: 'Moderate -- prices vary by neighborhood. Habous and old medina are cheapest.',
  },
  {
    city: 'Essaouira',
    icon: Droplets,
    highlight: 'Port Fish Grills',
    description: 'Essaouira\'s identity is built on fish. The port has open-air grill stalls where you choose your catch from ice displays: sardines, prawns, squid, sea bream, lobster. Grilled over charcoal with bread, salad, and chermoula. Prices are posted. Best-value seafood in Morocco.',
    topDishes: ['Grilled sardines at the port', 'Mixed seafood platter', 'Squid and prawn skewers', 'Fish chermoula sandwich', 'Sardine briwat (local specialty)'],
    priceLevel: 'Low to moderate -- port grill meals from 40 MAD.',
  },
  {
    city: 'Meknes',
    icon: MapPin,
    highlight: 'Place el-Hedim & Medina Souks',
    description: 'The most underrated street food city. Fewer tourists means lower prices and more authentic stalls. Place el-Hedim has harira vendors, snail soup, and juice carts. The olive market near Bab Mansour offers Morocco\'s best cured olives.',
    topDishes: ['Olive tasting at the olive souk', 'Harira from Place el-Hedim', 'Maakouda sandwiches in the medina', 'Local wine from the Meknes region', 'Brochettes near Bou Inania medersa'],
    priceLevel: 'Low -- cheapest of the imperial cities. Street food meals from 15 MAD.',
  },
] as const;

/* ================================================================
   DATA: PRICE GUIDE
   ================================================================ */

const priceGuide = [
  { item: 'Sfenj (1 donut)', price: 'From 1 MAD', category: 'Snack' },
  { item: 'Khobz (1 loaf)', price: 'From 1.50 MAD', category: 'Bread' },
  { item: 'Msemen / Baghrir', price: 'From 2 MAD', category: 'Snack' },
  { item: 'Ghriba cookie', price: 'From 2 MAD', category: 'Sweet' },
  { item: 'Briwat / Maakouda', price: 'From 3 MAD', category: 'Snack' },
  { item: 'Chebakia (1 piece)', price: 'From 3 MAD', category: 'Sweet' },
  { item: 'Harira / Babbouche / Bissara', price: 'From 5 MAD', category: 'Soup' },
  { item: 'Fresh orange juice', price: 'From 5 MAD', category: 'Drink' },
  { item: 'Mint tea', price: 'From 5 MAD', category: 'Drink' },
  { item: 'Brochette (1 skewer)', price: 'From 5 MAD', category: 'Main' },
  { item: 'Pomegranate juice / Almond milk', price: 'From 10 MAD', category: 'Drink' },
  { item: 'Bocadillo / Merguez sandwich', price: 'From 15 MAD', category: 'Main' },
  { item: 'Avocado smoothie', price: 'From 15 MAD', category: 'Drink' },
  { item: 'Kefta plate / Shawarma', price: 'From 20 MAD', category: 'Main' },
  { item: 'Fried fish plate', price: 'From 25 MAD', category: 'Main' },
  { item: 'Grilled fish (Essaouira)', price: 'From 40 MAD', category: 'Main' },
] as const;

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoStreetFoodPage() {
  return (
    <>
      {/* -- JSON-LD -- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* -- Hero -- */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <img
          src="/images/hero-street-food-grill.webp"
          alt="Moroccan street food vendor grilling meat skewers and merguez sausages over charcoal flames at a busy food stall"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center text-white py-24">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" /> Home
                </Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li className="text-white font-medium">Morocco Street Food Guide</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold mb-4 drop-shadow-lg">
            Morocco Street Food Guide
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-[family-name:var(--font-heading)]">
            30+ must-try dishes, real prices in MAD, city-by-city stall recommendations, and food safety tips
          </p>
        </div>
      </section>

      {/* -- Intro: Street Food Culture -- */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Store className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Morocco&apos;s Street Food Culture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  Eating on the street is not a fallback option in Morocco. It is how most people eat. From factory
                  workers grabbing sfenj at dawn to families sharing harira at dusk, street food is daily routine.
                  Generational vendors pass down recipes and prime stall locations like family heirlooms.
                </p>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  Moroccan street food reflects centuries of trade routes. Arab, Berber, Andalusian, French, and
                  sub-Saharan influences collide at a single food cart. A bocadillo is a relic of Spanish occupation.
                  Sfenj traces back to Andalusian pastry traditions. Babbouche snail soup is distinctly Berber.
                </p>
              </div>
              <img
                src="/images/photo-street-food-marrakech.webp"
                alt="Crowded street food stalls in a Moroccan medina with vendors grilling meats and serving customers"
                className="w-full h-64 object-cover rounded-lg zellige-border"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card-moroccan p-5">
                <Users className="w-6 h-6 text-[var(--color-accent)] mb-2" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Communal Eating
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Moroccans eat from shared plates. At street stalls, strangers sit shoulder to shoulder at the same counter.
                  Point at what others are having and you will rarely go wrong.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <Clock className="w-6 h-6 text-[var(--color-accent)] mb-2" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Time-Based Stalls
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Breakfast stalls (sfenj, msemen, bissara) operate 6-10 AM. Midday stalls run 11 AM-3 PM. Night food
                  markets fire up at 5 PM and peak around 8 PM. Know the schedule.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <ShieldCheck className="w-6 h-6 text-[var(--color-accent)] mb-2" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Hygiene at Stalls
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Most food stalls are clean. Look for high customer turnover, food cooked to order, and a vendor
                  who handles money separately from food. If locals are eating there, it is safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Snacks Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <HandPlatter className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Street Food Snacks &amp; Breads
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
              Items you grab between meals, pair with mint tea, or stuff inside a sandwich. Most cost less than 5 MAD.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {snackFoods.map((food) => (
                <div key={food.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <food.icon className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {food.name}
                        </h3>
                        <span className="text-xs font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 rounded-full">
                          {food.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{food.description}</p>
                  <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    <span className="font-medium">{food.where}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Main Dishes Section -- */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Flame className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Street Food Mains &amp; Soups
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
              Grilled meats, hearty soups, and overstuffed sandwiches. Expect charcoal smoke and long queues at the good spots.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainFoods.map((food) => (
                <div key={food.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <food.icon className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {food.name}
                        </h3>
                        <span className="text-xs font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 rounded-full">
                          {food.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{food.description}</p>
                  <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    <span className="font-medium">{food.where}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Sweets Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Sweets &amp; Pastries
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
              Drenched in honey, perfumed with orange blossom water, studded with almonds and sesame. A few dirhams each.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sweetFoods.map((food) => (
                <div key={food.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <food.icon className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {food.name}
                        </h3>
                        <span className="text-xs font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 rounded-full">
                          {food.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{food.description}</p>
                  <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    <span className="font-medium">{food.where}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Drinks Section -- */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <GlassWater className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Street Drinks &amp; Juices
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
              Morocco runs on mint tea and fresh juice. Ask for prices before ordering. Bottled water is everywhere.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drinks.map((drink) => (
                <div key={drink.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <drink.icon className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {drink.name}
                        </h3>
                        <span className="text-xs font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 rounded-full">
                          {drink.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{drink.description}</p>
                  <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    <span className="font-medium">{drink.where}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Best Street Food by City -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Compass className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Best Street Food by City
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
              Each Moroccan city has its own street food personality. Here is where to eat in each.
            </p>

            <div className="space-y-8">
              {cityGuides.map((city) => (
                <div key={city.city} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <city.icon className="w-7 h-7 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                      <p className="text-sm text-[var(--color-gold)] font-medium">{city.highlight}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{city.description}</p>
                  <div className="mb-3">
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      Top Dishes to Try:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {city.topDishes.map((dish) => (
                        <li key={dish} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          {dish}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mt-3 pt-3 border-t border-[var(--border-primary)]">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    <span>{city.priceLevel}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Price Guide -- */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Street Food Price Guide
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl">
              All prices in MAD. Tourist areas charge 20-50% more than local neighborhoods. Seasonal pricing can change.
            </p>

            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-accent)]/10">
                      <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Item</th>
                      <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Price</th>
                      <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceGuide.map((row, i) => (
                      <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                        <td className="py-2.5 px-4 text-[var(--text-primary)]">{row.item}</td>
                        <td className="py-2.5 px-4 text-[var(--color-accent)] font-medium">{row.price}</td>
                        <td className="py-2.5 px-4 text-[var(--text-secondary)]">{row.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card-moroccan p-5 mt-6 bg-[var(--color-gold)]/5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Daily Budget:</span> Eating
                  street food exclusively, budget from 60-100 MAD per day. Breakfast msemen + coffee (from 10 MAD),
                  midday bocadillo + juice (from 25 MAD), evening grilled meat dinner (from 40 MAD) totals ~75 MAD
                  (under 8 USD). Seasonal pricing can change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Food Safety Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Food Safety Tips
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
              Stomach problems are not inevitable. Most food-related illness comes from water and raw produce, not cooked street food.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-moroccan p-6">
                <Eye className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  What to Look For
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />High customer turnover means fresh food and fast rotation</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />Food cooked in front of you on a hot grill or fresh oil</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />Vendor handles money and food with separate hands</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />Locals eating at the stall (the best safety indicator)</li>
                </ul>
              </div>
              <div className="card-moroccan p-6">
                <AlertTriangle className="w-6 h-6 text-amber-600 mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  What to Avoid
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />Pre-cooked food sitting at room temperature for hours</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />Raw salads from street carts (restaurants are fine)</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />Tap water and ice at street stalls (drink bottled water)</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />Stalls where an aggressive tout drags you in</li>
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <Droplets className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Water &amp; Drinks
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Bottled water only (Sidi Ali, Ain Saiss, from 5 MAD/1.5L). Fresh juice is safe (fruit is peeled).
                  Mint tea is safe (boiled water). Avoid ice at budget stalls.
                </p>
              </div>
              <div className="card-moroccan p-6">
                <Heart className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Stomach Preparation
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Start with cooked foods your first two days. By day three, branch into adventurous stalls. Pack
                  Imodium and rehydration salts. Probiotics a week before travel can help. Most issues resolve in 24 hours.
                </p>
              </div>

              <div className="card-moroccan p-6 md:col-span-2">
                <Clock className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Best Time to Eat Street Food
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Peak hours produce the safest food because turnover is highest. Eat breakfast 7-9 AM when msemen
                  griddles are hot. Hit midday stalls around 12:30-1:30 PM. For evening food markets, arrive 7-9 PM.
                  After 11 PM, most stalls wind down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Street Food Tours -- */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Guided Street Food Tours
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
              Local guides know which vendors are best, translate menus, explain ingredients, and steer you
              toward dishes you would never find alone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card-moroccan p-6">
                <Star className="w-6 h-6 text-[var(--color-gold)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Marrakech Food Tours
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  Evening tours through Jemaa el-Fnaa and the medina souks, sampling 10-15 dishes over 3-4 hours.
                  Operators include Marrakech Food Tours and Taste of Marrakech. Also bookable through GetYourGuide.
                </p>
                <p className="text-xs text-[var(--color-accent)] font-medium">From 350 MAD per person</p>
              </div>
              <div className="card-moroccan p-6">
                <Star className="w-6 h-6 text-[var(--color-gold)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Fes Medina Food Walks
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  Hidden gems deep in the medina: camel meat, communal-oven bread, pastilla by the slice, and
                  almond milk from a cart operating for 40 years. Morning and evening departures.
                </p>
                <p className="text-xs text-[var(--color-accent)] font-medium">From 300 MAD per person</p>
              </div>
              <div className="card-moroccan p-6">
                <Star className="w-6 h-6 text-[var(--color-gold)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Essaouira Seafood &amp; Market Tour
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  Starts at the fish auction, moves through the spice market, finishes with grilled seafood at the
                  port stalls. Smaller groups and a relaxed pace compared to Marrakech tours.
                </p>
                <p className="text-xs text-[var(--color-accent)] font-medium">From 250 MAD per person</p>
              </div>
              <div className="card-moroccan p-6">
                <Star className="w-6 h-6 text-[var(--color-gold)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Casablanca Street Food Tour
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  Covers the Central Market seafood stalls, Habous Quarter bakeries, and local neighborhoods.
                  Diverse immigrant communities add Senegalese, Lebanese, and French-influenced food.
                </p>
                <p className="text-xs text-[var(--color-accent)] font-medium">From 300 MAD per person</p>
              </div>
            </div>

            <div className="card-moroccan p-5 bg-[var(--color-gold)]/5">
              <div className="flex items-start gap-3">
                <ThumbsUp className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Booking Tip:</span> Book
                  food tours for your first or second day. The guide teaches you how to navigate stalls, order dishes,
                  and spot the best vendors. That knowledge pays off for the rest of your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Vegetarian & Vegan Street Food -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Vegetarian &amp; Vegan Street Food
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
              Street food has more plant-based options than sit-down restaurants. Many of the cheapest stalls serve naturally vegetarian food.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card-moroccan p-6">
                <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Vegetarian Options
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />Msemen and baghrir with honey and butter</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />Maakouda potato fritters</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />Cheese and egg bocadillos</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />Harira without meat (&quot;bla lhem&quot;)</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />Zaalouk (smoky eggplant dip) with bread</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />Boiled corn from street carts (from 5 MAD)</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />Cheese briwat pastries</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />All sweets, pastries, juices, and smoothies</li>
                </ul>
              </div>
              <div className="card-moroccan p-6">
                <Leaf className="w-6 h-6 text-green-700 mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Vegan Options
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-700 mt-0.5 shrink-0" />Bissara fava bean soup (naturally vegan)</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-700 mt-0.5 shrink-0" />Boiled chickpeas with cumin</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-700 mt-0.5 shrink-0" />Fresh fruit juices and sugarcane juice</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-700 mt-0.5 shrink-0" />Roasted nuts and dried fruits from souk vendors</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-700 mt-0.5 shrink-0" />Olives and olive oil with bread</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-700 mt-0.5 shrink-0" />Avocado smoothies with water (&quot;bla hlib&quot;)</li>
                  <li className="flex items-start gap-2"><Leaf className="w-3.5 h-3.5 text-green-700 mt-0.5 shrink-0" />Khobz bread (flour, water, yeast, salt)</li>
                </ul>
              </div>
            </div>

            <div className="card-moroccan p-5 bg-green-50">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Useful Phrases:</span> &quot;Bla
                  lhem&quot; = without meat. &quot;Bla hlib&quot; = without milk. &quot;Bla jben&quot; = without cheese.
                  &quot;Ana nabati&quot; = I am vegetarian. French also works: &quot;sans viande&quot;, &quot;sans lait&quot;.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <MessageCircleQuestion className="w-8 h-8 text-[var(--color-accent)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-10">Answers to common questions about eating street food in Morocco.</p>

            <div className="space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.q} className="card-moroccan p-6">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Moroccan Cuisine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-restaurants" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Restaurant Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top restaurants in Marrakech, Fes, Casablanca, and beyond. From rooftop dining to hidden medina gems.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-cooking-classes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <CookingPot className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Classes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Learn to make tagine, couscous, and pastilla. Half-day and full-day classes with local chefs.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spice-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spice Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Ras el hanout, cumin, saffron, and more. What to buy, how to use them, and where to find the best.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Full Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                50+ Moroccan dishes, dining etiquette, regional specialties, and restaurant price breakdowns.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Eat Your Way Through Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            From sfenj at dawn to grilled meats at midnight, Moroccan street food runs all day.
            Start planning your culinary adventure across the country&apos;s food stalls and night markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morocco-food-guide" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-[var(--color-accent)]/90 transition-colors">
              <Utensils className="w-4 h-4" /> Full Food Guide
            </Link>
            <Link href="/food-tours" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-[var(--color-accent)]/5 transition-colors">
              <Compass className="w-4 h-4" /> Browse Food Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

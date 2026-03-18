import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Leaf,
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
  UtensilsCrossed,
  Globe,
  BookOpen,
  MessageCircle,
  ShoppingBasket,
  Building,
  Coffee,
  Sun,
  Snowflake,
  ThermometerSun,
  CloudRain,
  HelpCircle,
  ChefHat,
  Circle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Vegan Food Morocco 2026 | Complete Plant-Based Travel Guide',
  description:
    'The ultimate guide to vegan and vegetarian food in Morocco. Discover naturally vegan Moroccan dishes, vegan-friendly restaurants in Marrakech, Fes, Essaouira, Casablanca, and Chefchaouen, useful Darija phrases for ordering, cooking classes, and seasonal produce. From 15 MAD street food to fine dining.',
  keywords: [
    'vegan food Morocco',
    'vegan travel Morocco',
    'vegetarian Morocco',
    'vegan Marrakech',
    'vegan Essaouira',
    'vegan Chefchaouen',
    'vegan restaurants Morocco',
    'plant-based Morocco',
    'Moroccan vegan dishes',
    'zaalouk',
    'bessara Morocco',
    'vegan tagine Morocco',
    'vegan cooking class Morocco',
    'vegan street food Morocco',
    'Morocco vegan guide 2026',
    'halal vegan Morocco',
    'vegan riads Morocco',
    'Moroccan vegetable tagine',
    'harira vegan',
    'msemmen vegan',
  ],
  openGraph: {
    title: 'Vegan Food Morocco 2026 | Complete Plant-Based Travel Guide',
    description:
      'Discover the best vegan and vegetarian food in Morocco. From naturally plant-based Moroccan classics like zaalouk and bessara to vegan-friendly restaurants, cooking classes, and market shopping tips.',
    url: `${BASE_URL}/morocco-vegan-food`,
    images: [
      {
        url: `${BASE_URL}/images/hero-vegan-food.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan vegan dishes including zaalouk, vegetable tagine, and fresh salads on a traditional table setting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegan Food Morocco 2026 | Complete Plant-Based Guide',
    description:
      'From 15 MAD bessara bowls to gourmet vegetable tagines. The complete guide to eating vegan in Morocco with restaurant picks, Darija phrases, and cooking classes.',
    images: [`${BASE_URL}/images/hero-vegan-food.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-vegan-food` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-vegan-food`,
  name: 'Vegan Food Morocco 2026 | Complete Plant-Based Travel Guide',
  description:
    'The ultimate guide to vegan and vegetarian food in Morocco. Naturally vegan Moroccan dishes, vegan-friendly restaurants, cooking classes, and seasonal produce guide.',
  url: `${BASE_URL}/morocco-vegan-food`,
  image: `${BASE_URL}/images/hero-vegan-food.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-vegan-food`,
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
      { '@type': 'ListItem', position: 2, name: 'Vegan Food Morocco', item: `${BASE_URL}/morocco-vegan-food` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco a good destination for vegan travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Moroccan cuisine is rich in naturally vegan dishes including zaalouk, bessara, harira (often meat-free), vegetable tagines, and cooked salads. Markets overflow with fresh produce year-round. Major cities like Marrakech and Essaouira have dedicated vegan restaurants.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Moroccan dishes are naturally vegan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Moroccan staples are naturally vegan: zaalouk (smoky eggplant and tomato dip), bessara (fava bean soup), harira (can be made without meat), msemmen (flatbread), baghrir (semolina pancakes), taktouka (pepper and tomato salad), loubia (white bean stew), and seasonal vegetable tagines.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I order vegan food in Moroccan Arabic (Darija)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key phrases: "Bla l7em" (without meat), "Bla djaj" (without chicken), "Bla 7lib" (without milk), "Bla jban" (without cheese), "Ghir khodra" (only vegetables), "Ana ma kan akelch l7em" (I do not eat meat). Showing a translated card can also help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan city is best for vegan food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech has the most vegan-friendly restaurants and health-conscious cafes. Essaouira is a close second with its bohemian food scene. Chefchaouen offers excellent simple vegetable dishes. Fes has traditional vegan dishes in its medina restaurants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there vegan cooking classes in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several cooking schools in Marrakech, Fes, and Essaouira offer vegan-specific classes. Prices start from 350 MAD per person. Classes typically include a market visit to buy fresh produce, followed by hands-on preparation of traditional vegan Moroccan dishes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Moroccan bread vegan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Moroccan bread (khobz) is vegan, made with flour, water, yeast, salt, and sometimes semolina. Msemmen and meloui are usually made with oil rather than butter, but always confirm. Baghrir (spongy pancakes) is naturally vegan. Rghaif may contain butter in some versions.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: NATURALLY VEGAN MOROCCAN DISHES
   ═══════════════════════════════════════════════════════════════ */

const veganDishes = [
  {
    name: 'Zaalouk',
    category: 'Cooked Salad / Dip',
    icon: Leaf,
    price: 'From 15 MAD',
    description:
      'Morocco\'s most beloved cooked salad. Smoky roasted eggplant mashed with tomatoes, garlic, cumin, paprika, and olive oil. Served warm or at room temperature as a side dish or with bread. Found in virtually every restaurant in the country.',
    tip: 'Ask for extra olive oil drizzled on top. It is always vegan unless a restaurant adds something unusual.',
  },
  {
    name: 'Bessara',
    category: 'Soup',
    icon: Coffee,
    price: 'From 10 MAD',
    description:
      'A thick, earthy soup made from dried split fava beans, blended smooth and served with a generous pour of olive oil, cumin, and paprika. A staple Moroccan breakfast, especially in winter. Incredibly filling, high in protein, and always vegan.',
    tip: 'Look for street stalls serving bessara in the morning. It is eaten with fresh khobz (bread) for dipping.',
  },
  {
    name: 'Harira (Vegetarian Version)',
    category: 'Soup',
    icon: UtensilsCrossed,
    price: 'From 15 MAD',
    description:
      'Morocco\'s iconic tomato-based soup with lentils, chickpeas, fresh herbs, and a silky texture from hand-beaten flour. Traditionally made with lamb, but many restaurants offer a meat-free version. During Ramadan, it is everywhere. Ask for "harira bla l7em" (harira without meat).',
    tip: 'Some versions include a small amount of butter or egg for thickening. Always ask if the vegetarian version is fully vegan.',
  },
  {
    name: 'Lentil Soup (Adess)',
    category: 'Soup',
    icon: Heart,
    price: 'From 12 MAD',
    description:
      'Simple, warming, and universally vegan. Red or brown lentils cooked with tomatoes, onion, cumin, turmeric, and sometimes a squeeze of lemon. Available at nearly every Moroccan eatery and street stall. A deeply nourishing meal in a bowl.',
    tip: 'Pair it with fresh bread and a side of olives for a complete, affordable vegan meal.',
  },
  {
    name: 'Vegetable Tagine',
    category: 'Main Course',
    icon: Sparkles,
    price: 'From 50 MAD',
    description:
      'A slow-cooked stew of seasonal vegetables in a conical clay pot. Common combinations include potato, carrot, zucchini, turnip, and olives with preserved lemon. Some versions feature prunes or apricots for sweetness. The sauce is flavored with saffron, ginger, and ras el hanout.',
    tip: 'Specify "tagine dial khodra bla l7em, bla zibda" (vegetable tagine without meat, without butter) to ensure it is fully vegan.',
  },
  {
    name: 'Msemmen',
    category: 'Bread',
    icon: Sun,
    price: 'From 5 MAD',
    description:
      'A flaky, square-shaped Moroccan flatbread, folded in layers and cooked on a griddle. Traditionally made with flour, semolina, oil, salt, and water. Many versions are naturally vegan, though some cooks use butter between the layers. Served at breakfast or as a snack.',
    tip: 'Street vendors almost always use oil. In restaurants, confirm by asking "wach fih zibda?" (does it contain butter?).',
  },
  {
    name: 'Baghrir',
    category: 'Bread / Pancake',
    icon: Circle,
    price: 'From 5 MAD',
    description:
      'Moroccan spongy semolina pancakes, covered in tiny holes that absorb toppings beautifully. The batter is simply semolina flour, regular flour, yeast, and water. Naturally vegan. Traditionally served with a butter-honey mixture, but you can request olive oil and amlou (argan butter) instead.',
    tip: 'At street stalls, ask to skip the butter topping. Eat them with jam or argan oil for a fully vegan breakfast.',
  },
  {
    name: 'Taktouka',
    category: 'Cooked Salad',
    icon: Leaf,
    price: 'From 15 MAD',
    description:
      'A smoky, spiced salad of roasted green peppers and tomatoes, seasoned with garlic, cumin, and paprika, finished with olive oil. Often served alongside zaalouk as part of the traditional salad spread at the start of a Moroccan meal. Always vegan.',
    tip: 'Request the full salad spread ("salades Marocaines") and you will get several naturally vegan dishes at once.',
  },
  {
    name: 'Loubia',
    category: 'Stew',
    icon: Heart,
    price: 'From 15 MAD',
    description:
      'A hearty white bean stew cooked in a rich tomato sauce with cumin, paprika, and olive oil. A Moroccan comfort food staple, high in protein and fiber. Found at street stalls and casual restaurants across the country.',
    tip: 'Loubia is almost always vegan. Some versions in the north may include a small amount of preserved meat; just ask.',
  },
  {
    name: 'Cooked Carrot Salad',
    category: 'Cooked Salad',
    icon: Sparkles,
    price: 'From 10 MAD',
    description:
      'Tender carrots cooked until soft, then dressed with a chermoula of garlic, cumin, paprika, vinegar, fresh cilantro, and olive oil. A ubiquitous side dish in Moroccan restaurants, always served at room temperature and always vegan.',
    tip: 'Part of the salad course served before the main dish. Ask for extra bread to enjoy with the olive oil dressing.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DARIJA PHRASES FOR VEGAN ORDERING
   ═══════════════════════════════════════════════════════════════ */

const darijaPhrases = [
  { darija: 'Bla l7em', english: 'Without meat', context: 'The most essential phrase. Use it every time you order.' },
  { darija: 'Bla djaj', english: 'Without chicken', context: 'Chicken is separate from "meat" in Darija. Specify both.' },
  { darija: 'Bla 7lib', english: 'Without milk', context: 'Useful for drinks and dishes that might contain dairy.' },
  { darija: 'Bla zibda', english: 'Without butter', context: 'Butter is common in tagines and couscous. Always mention it.' },
  { darija: 'Bla jban', english: 'Without cheese', context: 'Less common in traditional dishes but useful in modern cafes.' },
  { darija: 'Bla bid', english: 'Without eggs', context: 'Important for pastries and some soups like harira.' },
  { darija: 'Ghir khodra', english: 'Only vegetables', context: 'A clear, simple request that works in any restaurant.' },
  { darija: 'Ana ma kan akelch l7em', english: 'I do not eat meat', context: 'A full sentence explaining your diet. Very useful.' },
  { darija: 'Wach fih l7em?', english: 'Does it contain meat?', context: 'Ask before ordering any dish you are unsure about.' },
  { darija: 'Wach fih zibda?', english: 'Does it contain butter?', context: 'Critical for bread, couscous, and tagines.' },
  { darija: 'Wach fih 7lib?', english: 'Does it contain milk?', context: 'For coffee, smoothies, and pastries.' },
  { darija: 'Nebghi tagine dial khodra', english: 'I want a vegetable tagine', context: 'Direct and clear order for the safest vegan main course.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VEGAN-FRIENDLY RESTAURANTS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const veganRestaurantsByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech-medina.webp',
    description:
      'Morocco\'s vegan capital. Marrakech has the most plant-based options of any Moroccan city, from dedicated vegan cafes in the new town to traditional restaurants in the medina that excel at vegetable dishes. The city\'s international tourism scene has driven a surge in health-conscious dining.',
    restaurants: [
      { name: 'Nomad', type: 'Modern Moroccan', price: 'From 80 MAD', note: 'Rooftop terrace, excellent vegetable dishes, medina location' },
      { name: 'Le Jardin', type: 'Garden Restaurant', price: 'From 70 MAD', note: 'Hidden garden in medina, strong vegan menu, beautiful setting' },
      { name: 'KAOWA', type: 'Vegan Cafe', price: 'From 50 MAD', note: 'Fully vegan menu, smoothie bowls, vegan pastries, Gueliz area' },
      { name: 'Cafe Clock', type: 'Cultural Cafe', price: 'From 45 MAD', note: 'Vegan options clearly marked, cooking workshops, cultural events' },
      { name: 'Earth Cafe', type: 'Vegan Restaurant', price: 'From 55 MAD', note: 'Dedicated vegan restaurant near Jemaa el-Fna, large menu' },
      { name: 'Amal Center', type: 'Social Enterprise', price: 'From 60 MAD', note: 'Women\'s training restaurant, daily vegetable tagine, set menu' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/hero-fes-medina.webp',
    description:
      'Fes is Morocco\'s culinary capital, and while the city is known for its meat-heavy dishes, the traditional salad courses and vegetable preparations here are exceptional. The medina restaurants serve some of the best zaalouk and bessara in the country. Dedicated vegan spots are fewer but growing.',
    restaurants: [
      { name: 'Cafe Clock Fes', type: 'Cultural Cafe', price: 'From 45 MAD', note: 'Vegan options on menu, cooking classes available, medina location' },
      { name: 'The Ruined Garden', type: 'Garden Restaurant', price: 'From 75 MAD', note: 'Open-air ruin garden, seasonal vegetables, advance booking needed' },
      { name: 'Riad Laaroussa Restaurant', type: 'Fine Dining', price: 'From 200 MAD', note: 'Will prepare fully vegan tasting menu with advance notice' },
      { name: 'Chez Rachid', type: 'Traditional', price: 'From 40 MAD', note: 'Excellent vegetable tagines and lentil dishes, authentic local spot' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Globe,
    image: '/images/hero-essaouira-ramparts.webp',
    description:
      'Essaouira\'s bohemian, laid-back atmosphere has attracted a community of health-conscious travelers and expats. The result is a disproportionate number of vegetarian and vegan-friendly restaurants for a city its size. Fresh produce comes directly from the surrounding Argan forest region.',
    restaurants: [
      { name: 'Vaga', type: 'Vegetarian/Vegan', price: 'From 55 MAD', note: 'Dedicated vegetarian restaurant, many vegan options, medina' },
      { name: 'Salut Maroc! Rooftop', type: 'Rooftop Restaurant', price: 'From 70 MAD', note: 'Ocean views, creative plant-based dishes, sunset dining' },
      { name: 'Triskala Cafe', type: 'World Kitchen', price: 'From 50 MAD', note: 'International menu with strong vegan selection, relaxed vibe' },
      { name: 'Miyame', type: 'Health Cafe', price: 'From 45 MAD', note: 'Smoothie bowls, vegan wraps, fresh juices, organic ingredients' },
      { name: 'Gusto Italia', type: 'Italian/Moroccan', price: 'From 60 MAD', note: 'Vegan pasta and pizza options alongside Moroccan dishes' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    description:
      'Casablanca\'s modern, cosmopolitan dining scene includes several fully plant-based restaurants and many conventional restaurants with strong vegan options. The city\'s international influence means you will find vegan sushi, vegan burgers, and plant-based fine dining alongside traditional Moroccan vegetable dishes.',
    restaurants: [
      { name: 'Veggie', type: 'Vegan Restaurant', price: 'From 65 MAD', note: 'Fully vegan menu, modern decor, Maarif district, great desserts' },
      { name: 'Le Botaniste', type: 'Health Cafe', price: 'From 55 MAD', note: 'Plant-based bowls, cold-pressed juices, organic ingredients' },
      { name: 'Blend Gourmet Burger', type: 'Burger Restaurant', price: 'From 70 MAD', note: 'Offers plant-based burger options alongside regular menu' },
      { name: 'NKoa', type: 'African Fusion', price: 'From 80 MAD', note: 'Pan-African menu with creative vegan dishes, stylish setting' },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: MapPin,
    image: '/images/hero-chefchaouen.webp',
    description:
      'The Blue City is surprisingly vegan-friendly. The Rif Mountain cuisine emphasizes fresh vegetables, herbs, and olive oil. Local restaurants serve excellent lentil soups, vegetable tagines, and fresh salads at very affordable prices. The slower pace of life means meals are prepared with care.',
    restaurants: [
      { name: 'Aladdin Restaurant', type: 'Traditional', price: 'From 40 MAD', note: 'Vegetable tagines and soups, rooftop views of the blue medina' },
      { name: 'Cafe Clock Chefchaouen', type: 'Cultural Cafe', price: 'From 40 MAD', note: 'Vegan-marked menu, cooking workshops, great atmosphere' },
      { name: 'Bab Ssour', type: 'Traditional Moroccan', price: 'From 35 MAD', note: 'Home-style vegetable dishes, very affordable, family-run' },
      { name: 'Sofia Restaurant', type: 'Traditional', price: 'From 45 MAD', note: 'Excellent lentil dishes, fresh salads, mountain herb teas' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VEGAN COOKING CLASSES
   ═══════════════════════════════════════════════════════════════ */

const cookingClasses = [
  {
    name: 'Souk Cuisine',
    city: 'Marrakech',
    price: 'From 450 MAD',
    duration: '4-5 hours',
    description:
      'Market-to-table experience starting with a guided souk tour to buy fresh produce. Offers a dedicated vegan class where you learn to make zaalouk, vegetable tagine, Moroccan salads, and harira without meat. Small groups of 6-10 people.',
    highlights: ['Souk shopping tour', 'Hands-on cooking', 'Vegan-specific class available', 'Recipe booklet included'],
  },
  {
    name: 'Amal Center',
    city: 'Marrakech',
    price: 'From 350 MAD',
    duration: '3-4 hours',
    description:
      'A social enterprise training disadvantaged women in culinary arts. Their cooking workshops teach traditional Moroccan recipes and can accommodate fully vegan requests. The experience supports a meaningful cause.',
    highlights: ['Social enterprise', 'Supports women\'s training', 'Vegan adaptable', 'Intimate groups'],
  },
  {
    name: 'Palais Amani',
    city: 'Fes',
    price: 'From 500 MAD',
    duration: '4 hours',
    description:
      'Cooking class in a beautifully restored palace in the Fes medina. The chef accommodates vegan requests and teaches traditional Fassi vegetable preparations, including pigeon-free pastilla alternatives and artisan bread-making.',
    highlights: ['Palace setting', 'Expert chef instruction', 'Market visit included', 'Certificate provided'],
  },
  {
    name: 'L\'Atelier de Madada',
    city: 'Essaouira',
    price: 'From 400 MAD',
    duration: '3-4 hours',
    description:
      'Located in the Essaouira medina, this cooking school specializes in coastal Moroccan cuisine. Vegan classes focus on vegetable tagines, argan oil preparations, chermoula, and seasonal salads using the freshest local produce.',
    highlights: ['Coastal Moroccan speciality', 'Fresh market ingredients', 'Small group sizes', 'Argan oil dishes'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VEGAN STREET FOOD OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const streetFoodOptions = [
  { item: 'Bessara', price: 'From 10 MAD', where: 'Morning street stalls everywhere', note: 'Fava bean soup with olive oil. The quintessential vegan street breakfast.' },
  { item: 'Msemmen with honey or jam', price: 'From 5 MAD', where: 'Street griddle vendors', note: 'Ask for oil-based version. Skip butter. Pair with jam for a vegan option.' },
  { item: 'Baghrir', price: 'From 5 MAD', where: 'Street vendors, especially mornings', note: 'Naturally vegan pancakes. Ask for argan oil topping instead of butter-honey.' },
  { item: 'Olives and pickled vegetables', price: 'From 10 MAD', where: 'Olive stalls in every souk', note: 'Dozens of varieties. Always vegan. Great with bread.' },
  { item: 'Fresh orange juice', price: 'From 5 MAD', where: 'Juice stalls on every corner', note: 'Freshly squeezed. The 5 MAD glass is Morocco\'s best bargain.' },
  { item: 'Roasted corn', price: 'From 10 MAD', where: 'Street cart vendors, seasonal', note: 'Charcoal-grilled corn on the cob. Simple and delicious. Summer only.' },
  { item: 'Dried fruits and nuts', price: 'From 20 MAD', where: 'Souk vendors and nut shops', note: 'Dates, figs, almonds, walnuts. Perfect high-energy vegan snacking.' },
  { item: 'Avocado smoothie', price: 'From 15 MAD', where: 'Juice bars in medinas', note: 'Often made with milk. Ask for "bla 7lib" (without milk) or with water/juice.' },
  { item: 'Sfenj (Moroccan doughnuts)', price: 'From 3 MAD', where: 'Early morning stalls', note: 'Fried dough rings, usually vegan (flour, water, yeast, salt). Eat fresh.' },
  { item: 'Loubia sandwich', price: 'From 15 MAD', where: 'Street food stalls', note: 'White bean stew stuffed in bread. A filling, cheap, protein-rich vegan meal.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL PRODUCE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalProduce = [
  {
    season: 'Spring (March - May)',
    icon: Leaf,
    produce: ['Artichokes', 'Fava beans (ful)', 'Green peas', 'Fresh herbs (cilantro, parsley, mint)', 'Strawberries', 'Oranges (late season)', 'New potatoes', 'Asparagus'],
    dishes: 'Spring is the season for artichoke tagine, fresh fava bean salads, and herb-packed dishes. Markets are at their most colorful.',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    produce: ['Tomatoes', 'Peppers', 'Eggplant', 'Zucchini', 'Watermelon', 'Melon', 'Figs', 'Grapes', 'Peaches', 'Corn'],
    dishes: 'Peak season for zaalouk and taktouka. Grilled vegetables, fresh salads, and abundant fruit. Markets overflow with produce at the lowest prices.',
  },
  {
    season: 'Autumn (September - November)',
    icon: ThermometerSun,
    produce: ['Pumpkin', 'Sweet potato', 'Olives (harvest season)', 'Pomegranates', 'Quince', 'Persimmons', 'Late figs', 'Grapes', 'Dates'],
    dishes: 'Pumpkin tagine season begins. Fresh olive oil appears in markets. Pomegranate salads and quince desserts. Rich, warming vegetable stews.',
  },
  {
    season: 'Winter (December - February)',
    icon: CloudRain,
    produce: ['Oranges', 'Clementines', 'Lemons', 'Turnips', 'Carrots', 'Beets', 'Cauliflower', 'Cabbage', 'Celery', 'Fennel'],
    dishes: 'Soup season: bessara, harira, and lentil soup are everywhere. Root vegetable tagines. Citrus at its peak. Preserved lemon dishes shine.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VEGAN-FRIENDLY RIADS
   ═══════════════════════════════════════════════════════════════ */

const veganRiads = [
  { name: 'Riad Jnane Mogador', city: 'Marrakech', price: 'From 500 MAD/night', note: 'Fully vegan breakfast available on request. Organic garden. Will prepare vegan dinner with advance notice.' },
  { name: 'Riad 72', city: 'Marrakech', price: 'From 1,200 MAD/night', note: 'Luxury riad with excellent kitchen. Chef accommodates vegan guests with multi-course plant-based meals.' },
  { name: 'Dar Namir', city: 'Fes', price: 'From 400 MAD/night', note: 'Eco-conscious riad. Vegan breakfast standard. Uses locally sourced organic produce.' },
  { name: 'Villa Maroc', city: 'Essaouira', price: 'From 600 MAD/night', note: 'Historic riad with a kitchen that excels at Moroccan salads and vegetable tagines. Vegan-friendly on request.' },
  { name: 'Lina Ryad & Spa', city: 'Chefchaouen', price: 'From 450 MAD/night', note: 'Mountain riad with fresh local produce. Vegan breakfast and dinner options available.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CHALLENGES AND SOLUTIONS
   ═══════════════════════════════════════════════════════════════ */

const challenges = [
  {
    challenge: 'Hidden butter in couscous and tagines',
    solution: 'Always ask "bla zibda" (without butter). Traditional couscous is finished with a large knob of butter. Request olive oil instead. Most cooks will happily accommodate.',
    severity: 'common',
  },
  {
    challenge: 'Meat stock in soups',
    solution: 'Harira and some soups may use meat-based broth even when no visible meat is present. Ask specifically if the base is vegetable or meat. Bessara and lentil soup are almost always safe.',
    severity: 'common',
  },
  {
    challenge: 'Honey on pastries and pancakes',
    solution: 'Moroccan breakfast items are often drizzled with honey. Ask for jam (confiture) or argan oil as alternatives. Most restaurants will have these available.',
    severity: 'moderate',
  },
  {
    challenge: 'Milk in coffee and smoothies',
    solution: 'Moroccan coffee ("noss-noss") is half milk by default. Order "qahwa kahla" (black coffee) or bring your own plant milk. Smoothie bars rarely stock plant milk; ask for juice-based blends.',
    severity: 'moderate',
  },
  {
    challenge: 'Language barrier in rural areas',
    solution: 'Outside major cities, the concept of veganism may not be well understood. Using the phrases "ghir khodra" (only vegetables) and "bla l7em, bla djaj, bla 7lib" works better than trying to explain veganism. Carry a translated dietary card.',
    severity: 'moderate',
  },
  {
    challenge: 'Limited options during Ramadan',
    solution: 'During Ramadan, many restaurants close during the day. Iftar meals are often meat-heavy. However, harira and dates are always available, and many families prepare extra vegetable dishes. Stock up on snacks from markets.',
    severity: 'seasonal',
  },
  {
    challenge: 'Social dining pressure',
    solution: 'Moroccans are incredibly hospitable. If invited to a home, politely explain your diet in advance. Most hosts will prepare special vegetable dishes for you. Bringing a vegan dish to share is always appreciated.',
    severity: 'cultural',
  },
  {
    challenge: 'Cross-contamination in shared kitchens',
    solution: 'Small restaurants may cook vegan dishes in the same pans as meat. If strict avoidance is important, choose dedicated vegan restaurants or cook in your riad kitchen. Larger restaurants can usually accommodate.',
    severity: 'moderate',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Bessara (street stall)', price: 'From 10 MAD', note: 'Cheapest hot meal in Morocco' },
  { item: 'Lentil soup (street stall)', price: 'From 12 MAD', note: 'With bread included' },
  { item: 'Zaalouk portion (restaurant)', price: 'From 15 MAD', note: 'Part of salad course, often included' },
  { item: 'Vegetable tagine (local restaurant)', price: 'From 50 MAD', note: 'The vegan staple main course' },
  { item: 'Vegetable tagine (tourist restaurant)', price: 'From 80 MAD', note: 'Higher quality, better service' },
  { item: 'Vegetable couscous (Friday)', price: 'From 60 MAD', note: 'Available everywhere on Fridays' },
  { item: 'Vegan meal (dedicated vegan cafe)', price: 'From 55 MAD', note: 'Bowl, salad, or wrap' },
  { item: 'Fine dining vegan tasting menu', price: 'From 300 MAD', note: 'Multi-course at upscale restaurants' },
  { item: 'Vegan cooking class', price: 'From 350 MAD', note: 'Includes market visit and full meal' },
  { item: 'Fresh juice', price: 'From 5 MAD', note: 'Orange juice at street stalls' },
  { item: 'Daily market produce budget', price: 'From 30 MAD', note: 'Enough fresh fruit and veg for a day' },
  { item: 'Vegan riad breakfast', price: 'From 50 MAD', note: 'When included in room rate or ordered separately' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GROCERY SHOPPING TIPS
   ═══════════════════════════════════════════════════════════════ */

const groceryTips = [
  {
    title: 'Visit the Souk Early',
    description: 'Fresh produce markets open at dawn and the best selection is before 10 AM. Prices are lowest at local neighborhood souks, not the tourist-facing ones. Bring your own bags.',
    icon: Clock,
  },
  {
    title: 'Know Your Markets',
    description: 'Every Moroccan city has a central vegetable market (souk dial khodra) separate from the tourist souk. Ask your riad host for directions. Prices are typically 50% lower than tourist areas.',
    icon: MapPin,
  },
  {
    title: 'Stock Up on Legumes',
    description: 'Dried lentils, chickpeas, and fava beans are sold by the kilo at very low prices (from 15 MAD/kg). These are the backbone of vegan protein in Morocco. Canned versions are also widely available.',
    icon: ShoppingBasket,
  },
  {
    title: 'Fresh Bread Daily',
    description: 'Neighborhood bakeries (ferran) bake fresh khobz every morning. It costs from 1.50 MAD per loaf and is almost always vegan. Some bakeries also make msemmen and baghrir to order.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Argan Oil and Olive Oil',
    description: 'Buy olive oil from cooperative shops for the best quality and price (from 40 MAD/liter). Culinary argan oil is found in the Essaouira and Agadir regions (from 80 MAD for a small bottle). Both are vegan kitchen essentials.',
    icon: Star,
  },
  {
    title: 'Supermarkets for Specialty Items',
    description: 'Marjane, Acima, and Carrefour carry plant milk, tofu, and some specialty vegan products. Selection is growing but limited compared to European supermarkets. Stock up when you find items.',
    icon: Building,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoVeganFoodPage() {
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
            backgroundImage: 'url(/images/hero-vegan-food.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Vegan Food Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Leaf className="w-4 h-4" />
            Plant-Based Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Vegan Food in Morocco:
            <br className="hidden md:block" /> Your Complete Plant-Based Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 10 MAD bessara bowls at dawn street stalls to gourmet vegetable tagines
            in palace gardens. Morocco is far more vegan-friendly than you might expect.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: A Hidden Gem for Plant-Based Travelers
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco might not be the first destination that comes to mind for vegan travelers,
                but it should be. Moroccan cuisine has deep roots in vegetable-based cooking. Long
                before veganism became a global movement, Moroccan kitchens were producing some of
                the world&apos;s most flavorful plant-based dishes: smoky zaalouk, protein-rich bessara,
                aromatic vegetable tagines slow-cooked with saffron and preserved lemons.
              </p>
              <p>
                The traditional Moroccan meal begins with a spread of cooked salads, almost all of
                which are naturally vegan. Markets overflow with fresh, seasonal produce at prices
                that make European vegans weep with joy. A kilo of tomatoes for 5 MAD, a bag of fresh
                mint for 2 MAD, a liter of golden olive oil for 40 MAD. The raw ingredients of a
                fantastic plant-based diet are everywhere.
              </p>
              <p>
                The challenge for vegan visitors is not a lack of options, but knowing how to navigate
                a food culture where butter, dairy, and meat are woven into many traditional preparations.
                This guide gives you everything you need: the dishes to seek out, the phrases to use,
                the restaurants to visit, and the pitfalls to avoid. With a little preparation, eating
                vegan in Morocco is not just possible, it is genuinely wonderful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Naturally Vegan Moroccan Dishes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Naturally Vegan Moroccan Dishes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            These traditional Moroccan dishes are plant-based by nature. No special requests needed, just order and enjoy.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are approximate starting prices at local restaurants. Tourist-area restaurants may charge more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {veganDishes.map((dish) => {
              const DishIcon = dish.icon;
              return (
                <div key={dish.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DishIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {dish.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span>{dish.category}</span>
                        <span className="text-[var(--color-accent)] font-semibold">{dish.price}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{dish.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {dish.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Darija Phrases for Ordering Vegan ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Order Vegan in Darija
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Moroccan Arabic (Darija) phrases that will make ordering plant-based food dramatically easier. Practice these before your trip.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Numbers in Darija transliteration represent Arabic sounds: 7 = strong H, 3 = ain. Do not worry about perfect pronunciation, Moroccans will understand your effort.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Darija</div>
                <div className="p-3 px-4">English</div>
                <div className="p-3 px-4">When to Use</div>
              </div>
              {darijaPhrases.map((phrase, i) => (
                <div
                  key={phrase.darija}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-semibold text-[var(--color-accent)]">{phrase.darija}</div>
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{phrase.english}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{phrase.context}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[var(--color-gold)]/10 rounded-lg">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Pro Tip: Carry a Dietary Card</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Write your dietary requirements in Arabic on a card or save them on your phone. A message like
                    &quot;I do not eat meat, chicken, fish, dairy, eggs, or honey&quot; translated into Arabic script will be
                    understood everywhere and avoids any confusion. Ask your riad host to help write one for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vegan-Friendly Restaurants by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vegan-Friendly Restaurants by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From dedicated vegan cafes to traditional restaurants with excellent plant-based options. Where to eat in every major Moroccan destination.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {veganRestaurantsByCity.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={city.image}
                      alt={`Vegan-friendly dining scene in ${city.city}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <CityIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {city.city}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                    <div className="space-y-3">
                      {city.restaurants.map((restaurant, i) => (
                        <div key={i} className="flex items-start justify-between text-sm gap-2">
                          <div className="flex items-start gap-2 min-w-0 flex-1">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-[var(--text-primary)]">{restaurant.name}</span>
                              <span className="text-[var(--text-muted)]"> &middot; {restaurant.type}</span>
                              <p className="text-xs text-[var(--text-muted)] mt-0.5">{restaurant.note}</p>
                            </div>
                          </div>
                          <span className="text-xs text-[var(--color-accent)] font-semibold shrink-0">{restaurant.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vegan Street Food ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vegan Street Food Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best plant-based street food you can grab on the go. These are the snacks and quick meals that fuel vegan travelers across Morocco.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Where</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {streetFoodOptions.map((food, i) => (
                <div
                  key={food.item}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{food.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{food.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{food.where}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{food.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cooking Classes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ChefHat className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vegan Cooking Classes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Learn to recreate authentic Moroccan vegan dishes at home. These cooking schools offer dedicated or adaptable plant-based classes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookingClasses.map((cls) => (
              <div key={cls.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {cls.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {cls.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {cls.duration}
                      </span>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {cls.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{cls.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {cls.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grocery Shopping & Markets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBasket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Grocery Shopping for Vegans
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s markets are a vegan paradise. Fresh produce at unbelievable prices, artisan oils, dried legumes, and spices. Here is how to shop smart.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groceryTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Produce Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Produce Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What is fresh and at its best in Moroccan markets throughout the year. Eating seasonally means the best flavors and the lowest prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seasonalProduce.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {season.produce.map((item, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{season.dishes}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vegan-Friendly Riads ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vegan-Friendly Riads &amp; Hotels
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where to stay when you want your accommodation to support your plant-based diet. These riads go beyond basic accommodation to offer genuinely vegan-friendly hospitality.
          </p>

          <div className="space-y-4">
            {veganRiads.map((riad) => (
              <div key={riad.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {riad.name}
                    </h3>
                    <span className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                      <MapPin className="w-3.5 h-3.5" />
                      {riad.city}
                    </span>
                  </div>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {riad.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{riad.note}</p>
              </div>
            ))}
            <div className="p-4 bg-[var(--color-gold)]/10 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Tip for any riad:</span> Even riads not listed
                  here will often accommodate vegan requests if you inform them at booking. Moroccan hospitality means hosts
                  genuinely want to feed you well. Send a message before arrival explaining your dietary needs and most will
                  happily prepare a vegan breakfast and dinner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vegan Food Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for vegan food across Morocco. Plant-based eating is generally the most affordable way to eat in the country.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Tourist areas and upscale restaurants charge more. Prices in Marrakech and Casablanca are typically 20-30% higher than smaller cities.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
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
        </div>
      </section>

      {/* ── Challenges and Solutions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Challenges &amp; How to Handle Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eating vegan in Morocco is very doable, but these are the real-world challenges you may encounter and exactly how to navigate them.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {challenges.map((item) => (
              <div key={item.challenge} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    item.severity === 'common' ? 'bg-red-50' :
                    item.severity === 'seasonal' ? 'bg-blue-50' :
                    item.severity === 'cultural' ? 'bg-purple-50' :
                    'bg-amber-50'
                  }`}>
                    <AlertTriangle className={`w-5 h-5 ${
                      item.severity === 'common' ? 'text-red-500' :
                      item.severity === 'seasonal' ? 'text-blue-500' :
                      item.severity === 'cultural' ? 'text-purple-500' :
                      'text-amber-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.challenge}
                      </h3>
                      <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
                        item.severity === 'common' ? 'bg-red-50 text-red-600' :
                        item.severity === 'seasonal' ? 'bg-blue-50 text-blue-600' :
                        item.severity === 'cultural' ? 'bg-purple-50 text-purple-600' :
                        'bg-amber-50 text-amber-600'
                      }`}>
                        {item.severity}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-sm text-[var(--text-secondary)]">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Vegan Morocco: Flavors &amp; Markets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-moroccan-food.webp"
                alt="Colorful spread of Moroccan cooked salads including zaalouk, taktouka, and carrot salad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Cooked Salad Spread</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-souk-spices.webp"
                alt="Vibrant spice stalls in a Moroccan souk with colorful pyramids of cumin, paprika, and turmeric"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Spice Market</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-tagine.webp"
                alt="Traditional Moroccan vegetable tagine cooking in a clay pot with steam rising"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Vegetable Tagine</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Vegan Travelers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShoppingBasket className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Bring Your Own Plant Milk
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Plant milk is available in some supermarkets (Marjane, Carrefour) but rarely in cafes or restaurants.
                If you need it daily for coffee, buy a carton and carry it. Oat and soy milk are the most commonly
                stocked options. Almond milk is occasionally available.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Use HappyCow App
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The HappyCow app is essential for finding vegan and vegetarian restaurants in Morocco. Listings are
                user-reviewed and regularly updated. Download offline maps before your trip in case of patchy
                internet in medinas.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Eat Where Locals Eat
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The cheapest and often the most naturally vegan food is at local street stalls and small family-run
                restaurants. Bessara stalls, soup vendors, and bread bakeries serve entirely plant-based food by
                default. Tourist restaurants are more expensive and sometimes less authentic.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Friday Is Couscous Day
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                On Fridays, every Moroccan restaurant serves couscous. Vegetable couscous (couscous bel khodra)
                is widely available but is almost always finished with butter. Ask clearly for a butter-free
                version or enjoy it at a dedicated vegan restaurant.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Pack Emergency Snacks
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For long bus rides, remote areas, or late-night arrivals, carry dried fruit, nuts, and energy
                bars. Morocco&apos;s dates are exceptional and a perfect travel snack. Buy a bag of Medjool
                dates from any market (from 40 MAD/kg).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Be Gracious and Flexible
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccans are extraordinarily hospitable. If a dish arrives with a small amount of dairy you did
                not expect, handle it gracefully. Thank your host, eat what you can, and be more specific next
                time. A positive attitude goes much further than rigid demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco a good destination for vegan travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, and it is better than most people expect. Moroccan cuisine has a wealth of naturally vegan
                dishes. The traditional salad course is almost entirely plant-based, markets overflow with fresh
                produce at very low prices, and major cities like Marrakech and Essaouira now have dedicated
                vegan restaurants. The key is knowing what to order and how to communicate your dietary needs.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What Moroccan dishes are naturally vegan?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Many of the most beloved Moroccan dishes are naturally vegan: zaalouk (smoky eggplant and
                tomato dip), bessara (fava bean soup), taktouka (pepper and tomato salad), loubia (white
                bean stew), cooked carrot salad, lentil soup, vegetable tagine, msemmen (flatbread, oil-based
                versions), baghrir (semolina pancakes), and sfenj (doughnuts). The traditional Moroccan
                salad spread served at the start of meals is a vegan treasure trove.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I order vegan food in Moroccan Arabic (Darija)?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most useful phrases are: &quot;Bla l7em&quot; (without meat), &quot;Bla djaj&quot; (without
                chicken), &quot;Bla zibda&quot; (without butter), &quot;Bla 7lib&quot; (without milk),
                &quot;Ghir khodra&quot; (only vegetables). For a full explanation, say &quot;Ana ma kan akelch
                l7em&quot; (I do not eat meat). Carry a written Arabic card with your dietary restrictions for
                situations where verbal communication is difficult.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which Moroccan city is best for vegan food?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech leads with the most vegan-dedicated restaurants and health-conscious cafes.
                Essaouira is a close second thanks to its bohemian food scene and international community.
                Chefchaouen offers simple, affordable, and naturally plant-heavy Rif Mountain cuisine.
                Fes excels at traditional vegetable dishes within its historic medina restaurants.
                Casablanca has the most modern, internationally-influenced vegan dining scene.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there vegan cooking classes in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Cooking schools in Marrakech, Fes, and Essaouira offer vegan-specific or vegan-adaptable
                classes. Prices start from 350 MAD per person and typically include a guided market visit to
                buy fresh ingredients, followed by hands-on cooking of 3-4 traditional Moroccan vegan dishes.
                Classes run 3-5 hours and you eat everything you cook.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Moroccan bread vegan?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most Moroccan bread (khobz) is naturally vegan, made with flour, water, yeast, salt, and
                sometimes semolina. Neighborhood bakeries bake it fresh every morning for from 1.50 MAD per
                loaf. Msemmen and meloui are usually made with oil, though some cooks use butter between
                layers, so always ask. Baghrir (spongy semolina pancakes) is reliably vegan. Sfenj
                (doughnuts) are vegan too, made from simple fried dough.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I eat vegan on a budget in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. Vegan eating in Morocco can be remarkably cheap. A bessara breakfast costs from
                10 MAD, a lentil soup lunch from 12 MAD, and a vegetable tagine dinner from 50 MAD. Add
                fresh bread (from 1.50 MAD), olives (from 10 MAD), and fresh orange juice (from 5 MAD),
                and you can eat extremely well for under 100 MAD per day. Market produce is even cheaper
                if you cook in your accommodation.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to eat street food as a vegan in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, with normal precautions. Vegan street food (bessara, bread, olives, fresh juice, sfenj)
                is generally safe because it is cooked fresh and served hot. The same food hygiene rules apply
                as for any traveler: eat where locals eat, choose busy stalls with high turnover, and ensure
                food is served hot. Avoid pre-cut fruit that has been sitting out. Peel your own fruit from
                the market for the safest snacking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/food" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <UtensilsCrossed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to Moroccan cuisine, from tagines and couscous to pastilla and street food.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cooking-classes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ChefHat className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Classes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Learn to cook authentic Moroccan dishes with hands-on cooking classes across the country.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Morocco&apos;s most popular city with our comprehensive guide to Marrakech.
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

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
  Leaf,
  Store,
  Globe,
  ThumbsUp,
  BookOpen,
  Award,
  Crown,
  ChefHat,
  Package,
  CookingPot,
  MessageCircleQuestion,
  CircleDot,
  HandPlatter,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS & BASE URL
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-tagine-guide`;

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Tagine Guide 2026 | 12 Classic Varieties, Best Restaurants & Cooking Classes',
  description:
    'The complete guide to Moroccan tagine. 12 classic tagine varieties from chicken with preserved lemon to kefta with egg, best tagine restaurants in Marrakech, Fes & Essaouira, cooking class recommendations, buying a tagine pot, vegetarian options, and regional specialties.',
  keywords: [
    'Morocco tagine guide',
    'Moroccan tagine varieties',
    'best tagine Morocco',
    'chicken tagine preserved lemon',
    'lamb tagine prunes',
    'kefta tagine egg',
    'fish tagine chermoula',
    'vegetarian tagine Morocco',
    'tagine cooking class Morocco',
    'buy tagine pot Morocco',
    'tagine recipe Morocco',
    'tagine restaurants Marrakech',
    'tagine restaurants Fes',
    'Moroccan tagine history',
    'tagine cooking vessel',
    'lamb tagine apricot almond',
    'tanjia Marrakech',
    'tagine vs couscous',
    'tagine pot types',
    'Morocco food guide tagine',
    'Moroccan slow cooking',
    'best tagine Marrakech 2026',
    'tagine etiquette Morocco',
    'tagine spices ras el hanout',
  ],
  openGraph: {
    title: 'Morocco Tagine Guide 2026 | 12 Classic Varieties, Best Restaurants & Cooking Classes',
    description:
      'Everything about Moroccan tagine: 12 classic varieties, regional specialties, where to eat the best tagine in every city, cooking class recommendations, buying a tagine pot, and eating etiquette.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/photo-tagine-chicken.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan chicken tagine with preserved lemons and olives served in a clay tagine pot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Tagine Guide 2026 | Complete Guide to Morocco\'s Signature Dish',
    description:
      '12 tagine varieties, best restaurants by city, cooking classes, buying a tagine pot, vegetarian options, regional specialties, and dining etiquette.',
    images: [`${BASE_URL}/images/photo-tagine-chicken.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD: TravelGuide + FAQPage
   ═══════════════════════════════════════════════════════════════ */

const faqItems = [
  {
    q: 'What is the difference between the tagine dish and the tagine pot?',
    a: 'The word "tagine" refers to both the cone-shaped clay cooking vessel and the slow-cooked stew prepared inside it. The pot has a flat circular base and a tall conical lid that traps steam, circulating moisture back into the food. Over time, the name transferred to any dish cooked this way, even when prepared in a regular pot.',
  },
  {
    q: 'What is the most popular tagine in Morocco?',
    a: 'Chicken tagine with preserved lemons and green olives (djaj m\'qalli) is the most widely eaten tagine across Morocco. You will find it on virtually every restaurant menu, from street stalls at from 35 MAD to upscale restaurants at from 120 MAD. It is considered the essential Moroccan tagine that every visitor should try first.',
  },
  {
    q: 'Can I bring a tagine pot home in my luggage?',
    a: 'Yes. Wrap it in clothing and place it in the center of your checked bag. Many shops in Marrakech and Fes sell unglazed cooking tagines designed for actual use. Decorative glazed tagines are lighter and less fragile. Expect to pay from 80 MAD for a plain cooking tagine and from 150 MAD for a decorated serving tagine. Some vendors will pack it in a box with straw padding for an extra from 20 MAD.',
  },
  {
    q: 'Is tagine safe for vegetarians and vegans?',
    a: 'Absolutely. Vegetable tagines are a traditional part of Moroccan cooking, not an afterthought. Common versions include seven-vegetable tagine, artichoke and pea tagine, and pumpkin with caramelized onion tagine. Vegan travelers should confirm that no butter (smen) is used. Most restaurants will happily prepare a butter-free vegetable tagine on request.',
  },
  {
    q: 'How long does a tagine take to cook?',
    a: 'A proper tagine cooks low and slow for 1.5 to 3 hours depending on the protein. Chicken tagines take about 1.5 hours, lamb tagines closer to 2.5-3 hours. Vegetable tagines cook faster, around 45-60 minutes. The low heat and trapped steam are what create the concentrated, tender result. In tourist restaurants, tagines are often pre-cooked and kept warm, which is standard practice.',
  },
  {
    q: 'What spices are used in Moroccan tagine?',
    a: 'The core spice blend varies by tagine type but commonly includes cumin, turmeric, ginger, paprika, cinnamon, saffron, and black pepper. Ras el hanout, a complex blend of 12-30 spices, is used in many lamb and vegetable tagines. Preserved lemons and fresh cilantro and parsley add brightness. Each family has its own proportions, which is why the same dish tastes different everywhere.',
  },
  {
    q: 'Should I eat tagine with bread or utensils?',
    a: 'Traditionally, tagine is eaten with Moroccan bread (khobz), which acts as your utensil. Tear off a piece with your right hand and use it to scoop meat, sauce, and vegetables. Forks and spoons are always available in restaurants, especially those serving tourists. Using bread is not required, but it is how most Moroccans eat tagine and it does taste better that way.',
  },
  {
    q: 'Where can I take a tagine cooking class in Morocco?',
    a: 'Marrakech has the most options, including La Maison Arabe (from 600 MAD), Amal Center (from 300 MAD, supports women\'s employment), and Souk Cuisine (from 450 MAD with market tour). Fes offers classes at Palais Amani and Cafe Clock. Essaouira has smaller workshops focused on fish tagine. Most classes last 3-4 hours including a guided souk visit to buy ingredients. Seasonal pricing can change.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Tagine Guide 2026',
  description:
    'Complete guide to Moroccan tagine covering the history of the dish, 12 classic varieties, regional specialties, best restaurants by city, cooking classes, buying a tagine pot, and dining etiquette.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/photo-tagine-chicken.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Tagine Guide', item: PAGE_URL },
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

/* ═══════════════════════════════════════════════════════════════
   DATA: CLASSIC TAGINE VARIETIES
   ═══════════════════════════════════════════════════════════════ */

const tagineVarieties = [
  {
    name: 'Chicken with Preserved Lemon & Olives',
    arabicName: 'Djaj M\'qalli',
    icon: Star,
    region: 'All Morocco',
    description:
      'The most iconic Moroccan tagine. Chicken pieces braised with saffron, turmeric, and ginger, then topped with salty preserved lemons and cracked green olives. The sauce is golden, tangy, and deeply savory. Found on every menu in the country.',
    price: 'From 40 MAD (street) to 150 MAD (restaurant)',
    mustTry: true,
  },
  {
    name: 'Lamb with Prunes & Almonds',
    arabicName: 'Lham Blbarkouk',
    icon: Crown,
    region: 'Fes, Meknes',
    description:
      'Sweet meets savory in this Fassi classic. Slow-cooked lamb shoulder falls apart into a cinnamon-scented sauce studded with soft prunes and toasted almonds. A dusting of powdered sugar and sesame seeds on top marks the festive version served at weddings and holidays.',
    price: 'From 60 MAD to 180 MAD',
    mustTry: true,
  },
  {
    name: 'Kefta with Egg & Tomato',
    arabicName: 'Kefta Mkawra',
    icon: Flame,
    region: 'All Morocco',
    description:
      'Seasoned ground beef or lamb meatballs (kefta) simmered in a spiced tomato sauce with cumin and paprika. Eggs are cracked directly into the bubbling sauce and poached until just set. Eaten with bread for breakfast, lunch, or dinner. A staple that Moroccans never tire of.',
    price: 'From 30 MAD to 100 MAD',
    mustTry: true,
  },
  {
    name: 'Fish Chermoula',
    arabicName: 'Hout Chermoula',
    icon: Globe,
    region: 'Essaouira, Agadir, Tangier',
    description:
      'Coastal tagine featuring white fish (sea bass, sole, or monkfish) marinated in chermoula -- a paste of cilantro, parsley, garlic, cumin, paprika, and lemon juice. Arranged over a bed of potatoes, tomatoes, and bell peppers. The fish steams gently under the conical lid.',
    price: 'From 50 MAD to 200 MAD',
    mustTry: false,
  },
  {
    name: 'Seven-Vegetable Tagine',
    arabicName: 'Tagine Khodra',
    icon: Leaf,
    region: 'All Morocco',
    description:
      'A generous mix of seasonal vegetables -- typically carrots, zucchini, turnips, potatoes, tomatoes, onions, and pumpkin -- slow-cooked with ras el hanout, saffron, and olive oil. The number seven is considered lucky in Moroccan culture. Each vegetable retains its shape while absorbing the spiced broth.',
    price: 'From 30 MAD to 90 MAD',
    mustTry: false,
  },
  {
    name: 'Lamb with Apricots & Almonds',
    arabicName: 'Lham Bel Mishmish',
    icon: Sparkles,
    region: 'Marrakech, High Atlas',
    description:
      'Tender lamb braised with dried apricots, honey, cinnamon, and toasted almonds. The sauce reduces to a thick, amber glaze. This is a Marrakchi specialty that balances the richness of lamb with the bright acidity of fruit. Popular at riad restaurants.',
    price: 'From 65 MAD to 200 MAD',
    mustTry: false,
  },
  {
    name: 'Beef with Peas & Artichokes',
    arabicName: 'Lham Bel Jelbana wal Qoq',
    icon: CircleDot,
    region: 'Fes, Meknes, Rabat',
    description:
      'A springtime favorite. Chunks of beef slow-cooked with fresh artichoke hearts, green peas, and preserved lemon. The sauce is lighter than most tagines -- bright green from parsley and cilantro, with a lemony edge. Best during artichoke season (March-May).',
    price: 'From 55 MAD to 160 MAD',
    mustTry: false,
  },
  {
    name: 'Chicken with Caramelized Onion & Raisins',
    arabicName: 'Djaj Tfaya',
    icon: Heart,
    region: 'Fes, Rabat',
    description:
      'Chicken simmered with saffron and ginger, then crowned with a mountain of caramelized onions cooked down with raisins, honey, and cinnamon until they become jammy and dark. The onion mixture (tfaya) is prepared separately and spooned on top just before serving.',
    price: 'From 45 MAD to 140 MAD',
    mustTry: false,
  },
  {
    name: 'Lamb with Quince',
    arabicName: 'Lham Bel Sfarjel',
    icon: Award,
    region: 'Fes, Middle Atlas',
    description:
      'An autumn specialty when quince is in season (October-December). Lamb pieces cooked with quince wedges, honey, cinnamon, and saffron. The quince softens into a perfumed, slightly granular texture that pairs remarkably well with the rich lamb jus.',
    price: 'From 70 MAD to 190 MAD',
    mustTry: false,
  },
  {
    name: 'Pumpkin & Chickpea Tagine',
    arabicName: 'Tagine Garaa wal Hommos',
    icon: Leaf,
    region: 'All Morocco',
    description:
      'A hearty vegetarian tagine of roasted pumpkin, chickpeas, caramelized onions, and warming spices. The pumpkin breaks down into the sauce, creating a naturally thick, sweet base. Often garnished with toasted sesame seeds and a drizzle of argan oil.',
    price: 'From 30 MAD to 80 MAD',
    mustTry: false,
  },
  {
    name: 'Sardine Balls in Tomato Sauce',
    arabicName: 'Kefta Sardine',
    icon: Globe,
    region: 'Essaouira, Safi, Agadir',
    description:
      'Fresh sardines are deboned, mixed with spices and herbs, formed into balls, and braised in a spiced tomato and pepper sauce. A coastal working-class tagine that has become a signature dish in Essaouira. The sardine flavor is mild and blends into the rich sauce.',
    price: 'From 35 MAD to 100 MAD',
    mustTry: false,
  },
  {
    name: 'Lamb Brain & Liver Tagine',
    arabicName: 'Mokh wal Kibda',
    icon: Flame,
    region: 'Fes, Meknes',
    description:
      'An acquired taste and a true Fassi delicacy. Lamb brain and liver cooked in a cumin-heavy tomato sauce with preserved lemon. Ordered at old-school restaurants in the Fes medina. Not for every palate, but respected by Moroccans as a traditional dish with deep roots.',
    price: 'From 40 MAD to 120 MAD',
    mustTry: false,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TAGINE RESTAURANTS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const tagineRestaurants = [
  {
    city: 'Marrakech',
    icon: MapPin,
    spots: [
      { name: 'Cafe Clock Marrakech', style: 'Casual Creative', price: 'From 70 MAD', note: 'Known for camel tagine and cultural programming' },
      { name: 'Al Fassia', style: 'Upscale Traditional', price: 'From 120 MAD', note: 'Run entirely by women; lamb with prunes is exceptional' },
      { name: 'Nomad', style: 'Modern Moroccan', price: 'From 100 MAD', note: 'Rooftop terrace; updated tagine recipes with local ingredients' },
      { name: 'Chez Lamine Hadj Mustapha', style: 'Hole-in-the-Wall', price: 'From 40 MAD', note: 'Tanjia specialist in the medina; slow-cooked in the hammam furnace' },
      { name: 'Dar Zellij', style: 'Fine Dining', price: 'From 150 MAD', note: 'Palace setting; seasonal tagines with refined presentation' },
    ],
  },
  {
    city: 'Fes',
    icon: MapPin,
    spots: [
      { name: 'Cafe Clock Fes', style: 'Casual Cultural', price: 'From 65 MAD', note: 'Camel burger and traditional tagines in a restored building' },
      { name: 'The Ruined Garden', style: 'Garden Dining', price: 'From 90 MAD', note: 'Tagines served in a literal ruined garden; seasonal menu changes weekly' },
      { name: 'Dar Roumana', style: 'Fine Dining', price: 'From 200 MAD', note: 'Chef-driven tagines with French technique and Fassi flavors' },
      { name: 'Restaurant Bouayad', style: 'Local Favorite', price: 'From 35 MAD', note: 'Packed with Fassi families; enormous portions of kefta tagine' },
    ],
  },
  {
    city: 'Essaouira',
    icon: MapPin,
    spots: [
      { name: 'Restaurant Taros', style: 'Upscale Casual', price: 'From 90 MAD', note: 'Rooftop views of the port; excellent fish tagine chermoula' },
      { name: 'Triskala Cafe', style: 'Bohemian Cafe', price: 'From 65 MAD', note: 'Cozy interiors; standout vegetable tagine with argan oil drizzle' },
      { name: 'Chez Sam', style: 'Seafood Specialist', price: 'From 80 MAD', note: 'In the fishing port; tagine of the catch changes daily' },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: MapPin,
    spots: [
      { name: 'Bab Ssour', style: 'Traditional', price: 'From 50 MAD', note: 'Mountain lamb tagine with herbs from the Rif valleys' },
      { name: 'Lala Mesouda', style: 'Home-Style', price: 'From 45 MAD', note: 'Tiny restaurant with just a few tables; grandmother-style cooking' },
    ],
  },
  {
    city: 'Casablanca',
    icon: MapPin,
    spots: [
      { name: 'La Sqala', style: 'Garden Restaurant', price: 'From 80 MAD', note: 'Inside a historic bastion; refined traditional tagines and fresh juices' },
      { name: 'Rick\'s Cafe', style: 'Upscale', price: 'From 140 MAD', note: 'Film-inspired decor; solid lamb tagine with prunes and almonds' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COOKING CLASSES
   ═══════════════════════════════════════════════════════════════ */

const cookingClasses = [
  {
    name: 'La Maison Arabe',
    city: 'Marrakech',
    price: 'From 600 MAD',
    duration: '4 hours',
    includes: 'Market tour, hands-on cooking (tagine + 2 dishes), recipe booklet, meal',
    highlight: 'The original Marrakech cooking school, established in a historic riad. Professional kitchen with individual workstations.',
  },
  {
    name: 'Amal Women\'s Training Center',
    city: 'Marrakech',
    price: 'From 300 MAD',
    duration: '3 hours',
    includes: 'Cooking class, meal, certificate. No market tour.',
    highlight: 'Non-profit supporting disadvantaged women. Your fee funds job training. The tagine recipes come from the staff\'s own families.',
  },
  {
    name: 'Souk Cuisine',
    city: 'Marrakech',
    price: 'From 450 MAD',
    duration: '4 hours',
    includes: 'Guided souk tour, ingredient shopping, hands-on cooking, meal on the rooftop terrace',
    highlight: 'Starts with a deep dive into the Marrakech souk to buy ingredients. Small groups of 6-10.',
  },
  {
    name: 'Palais Amani',
    city: 'Fes',
    price: 'From 500 MAD',
    duration: '3.5 hours',
    includes: 'Cooking class with a Fassi chef, meal, rooftop terrace dining',
    highlight: 'Focuses on Fassi specialties like lamb with prunes and the tfaya tradition. Beautiful riad setting inside the medina.',
  },
  {
    name: 'Cafe Clock Cookery School',
    city: 'Fes',
    price: 'From 350 MAD',
    duration: '3 hours',
    includes: 'Hands-on cooking, meal, drinks',
    highlight: 'Learn to make traditional tagines alongside local and international recipes. Relaxed atmosphere.',
  },
  {
    name: 'L\'Atelier de Madada',
    city: 'Essaouira',
    price: 'From 500 MAD',
    duration: '3 hours',
    includes: 'Fish market visit, tagine cooking, full meal with wine',
    highlight: 'Focuses on fish and seafood tagines using the morning\'s catch from the Essaouira port.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TAGINE POT BUYING GUIDE
   ═══════════════════════════════════════════════════════════════ */

const taginePotTypes = [
  {
    type: 'Unglazed Cooking Tagine',
    icon: CookingPot,
    price: 'From 80 MAD',
    material: 'Raw terracotta clay',
    use: 'Actual stovetop or charcoal cooking',
    description:
      'The real deal. Porous clay absorbs flavors over time, building a natural seasoning. Must be cured before first use by soaking in water overnight. Used on low heat only -- direct high flame can crack it. This is what Moroccan families cook with daily.',
    bestBuy: 'Pottery souks in Safi, Fes, or Marrakech',
  },
  {
    type: 'Glazed Cooking Tagine',
    icon: CookingPot,
    price: 'From 120 MAD',
    material: 'Glazed terracotta',
    use: 'Cooking and serving',
    description:
      'A glazed interior makes cleaning easier and prevents staining. Holds up well for acidic dishes with tomatoes or preserved lemons. Less porous than unglazed, so it does not develop the same seasoning over time. A good compromise between function and convenience.',
    bestBuy: 'Artisan cooperatives in Safi (Morocco\'s pottery capital)',
  },
  {
    type: 'Decorative Serving Tagine',
    icon: HandPlatter,
    price: 'From 150 MAD',
    material: 'Painted and glazed ceramic',
    use: 'Table presentation and serving only',
    description:
      'Beautifully hand-painted with geometric or floral Moroccan motifs. Not safe for cooking -- the paints and glazes may not be food-safe at high temperatures. Perfect for serving a tagine you cooked in a regular pot. The most popular souvenir tagine.',
    bestBuy: 'Souks in Marrakech, Fes, Essaouira',
  },
  {
    type: 'Cast Iron Tagine',
    icon: Flame,
    price: 'From 400 MAD',
    material: 'Enameled cast iron with ceramic lid',
    use: 'Heavy-duty cooking at home',
    description:
      'Modern hybrid: a cast iron base for even heat distribution and a traditional ceramic cone lid for steam circulation. Works on any stovetop including induction. Heavier and more expensive, but nearly indestructible. Brands like Le Creuset and Emile Henry sell versions internationally.',
    bestBuy: 'Kitchen shops in Gueliz (Marrakech nouvelle ville) or bring home from a European brand',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TAGINE ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteTips = [
  { title: 'Eat from Your Side', icon: Users, text: 'A tagine is a communal dish. Eat from the section directly in front of you, working inward toward the center. Do not reach across to the other side. The host or server will place choice pieces of meat near each guest.' },
  { title: 'Use Your Right Hand', icon: ThumbsUp, text: 'Tear bread with your right hand and use it to scoop food. The left hand is traditionally considered unclean. If using utensils, this rule does not apply -- pick up your fork with whichever hand is comfortable.' },
  { title: 'Bread Is Your Spoon', icon: Utensils, text: 'Moroccan bread (khobz) is the traditional utensil for tagine. Tear off a small piece and fold it to scoop up meat, vegetables, and sauce. Fresh bread is served warm and restocked throughout the meal.' },
  { title: 'Pace Yourself', icon: Clock, text: 'Tagine is typically one course in a larger meal that may include salads, bread, a main dish, and fruit or pastries. Do not fill up on the tagine alone. Moroccan meals are a slow, social affair.' },
  { title: 'Accept Seconds Graciously', icon: Heart, text: 'If your host places extra meat on your section of the plate, it is a sign of generosity and respect. Accept it. Refusing food repeatedly can be seen as impolite, though a gentle "shukran, baraka" (thank you, enough) is understood.' },
  { title: 'Compliment the Cook', icon: Star, text: 'Saying "bsaha" (to your health) or "lla yatik saha" (God give you health) after a meal is the traditional Moroccan compliment to the cook. It carries more weight than a generic "delicious" and will always bring a smile.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Street stall chicken tagine', price: 'From 35 MAD', note: 'Basic but honest; plastic tables on the sidewalk' },
  { item: 'Local restaurant tagine (meat)', price: 'From 50 MAD', note: 'Neighborhood spot with cloth napkins' },
  { item: 'Local restaurant tagine (vegetable)', price: 'From 30 MAD', note: 'Often the cheapest main dish on the menu' },
  { item: 'Tourist restaurant tagine', price: 'From 80 MAD', note: 'Medina restaurants near main squares' },
  { item: 'Upscale riad tagine', price: 'From 120 MAD', note: 'Set menu with salads, tagine, dessert, tea' },
  { item: 'Fine dining tagine', price: 'From 180 MAD', note: 'Chef-prepared, premium ingredients, refined setting' },
  { item: 'Cooking class (learn to make tagine)', price: 'From 300 MAD', note: 'Includes meal and instruction; seasonal pricing can change' },
  { item: 'Tagine pot (cooking, unglazed)', price: 'From 80 MAD', note: 'Souk or pottery cooperative' },
  { item: 'Tagine pot (decorative)', price: 'From 150 MAD', note: 'Painted ceramic, serving only' },
  { item: 'Ras el hanout spice blend (100g)', price: 'From 20 MAD', note: 'Herbalist or spice souk; quality varies widely' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTagineGuidePage() {
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
          style={{ backgroundImage: 'url(/images/photo-tagine-chicken.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Tagine Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <CookingPot className="w-4 h-4" />
            Moroccan Cuisine &amp; Food Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            The Complete Guide
            <br className="hidden md:block" /> to Moroccan Tagine
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco&apos;s defining dish: 12 classic varieties, the best restaurants in every city,
            cooking classes, buying the perfect tagine pot, and the etiquette of eating from a shared plate.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: What Is a Tagine ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            What Is a Tagine? The Dish and the Vessel
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              A tagine is two things at once. It is a conical clay pot -- a flat round base topped with
              a tall, chimney-shaped lid -- and it is the slow-cooked stew that emerges from it after
              hours of gentle heat. The name comes from the Berber word for &quot;shallow earthen pot,&quot;
              and the design has not changed in over a thousand years because it does not need to.
            </p>
            <p>
              The cone works like a self-basting engine. Steam rises from the simmering food, hits
              the cool walls of the lid, condenses, and drips back down into the dish. Meat falls off
              the bone. Vegetables absorb every layer of spice. The sauce thickens without evaporating.
              No oven required -- just a charcoal brazier (majmar) or a low gas flame, patience, and
              a recipe passed down through generations.
            </p>
            <p>
              Tagine is the daily food of Morocco. Families cook it for lunch, the main meal of the day.
              Restaurants serve it as their signature offering. Street vendors set rows of tagine pots
              on charcoal grills outside their stalls, each lid hiding a different combination of meat,
              vegetables, and fruit. Ordering a tagine in Morocco is not choosing a single dish; it is
              choosing from a galaxy of regional variations, each one tied to a city, a season, or a
              family tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="card-moroccan p-6">
              <CookingPot className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                The Cooking Vessel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Made from unglazed terracotta clay, the tagine pot conducts heat slowly and evenly.
                The conical lid traps and recirculates moisture, eliminating the need for added water
                or stock in most recipes. Traditional pots are seasoned over months of use, building
                a patina that adds depth to every subsequent meal. A good cooking tagine costs from 80 MAD.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                The Stew
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Any slow-cooked Moroccan stew served in the pot qualifies as a tagine dish, though
                the word now extends to versions cooked in regular pots and pressure cookers. Chicken,
                lamb, beef, fish, and vegetables all have dedicated tagine recipes. Spicing varies by
                region but cumin, ginger, turmeric, saffron, and cinnamon form the backbone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── History & Origins ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            A Thousand Years of Slow Cooking
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The tagine pot likely originated with the Berber (Amazigh) peoples of North Africa,
              who needed a portable, fuel-efficient cooking method for semi-nomadic life in the
              Atlas Mountains and Saharan edges. Clay was abundant. Water was not. The conical lid
              solved the water problem by recycling every drop of moisture back into the food.
            </p>
            <p>
              Arab traders arriving from the 7th century onward brought saffron, cinnamon, and
              dried fruits that transformed the tagine from simple stew to the aromatic, layered
              dish we know today. The sweet-savory combinations -- lamb with prunes, chicken with
              preserved lemons -- are direct descendants of medieval Arabic court cooking documented
              in 13th-century Andalusian and Moroccan manuscripts.
            </p>
            <p>
              By the time the Marinid dynasty ruled Fes in the 14th century, tagine had become
              high cuisine. Palace cooks competed to create more elaborate versions, layering
              flavors with rose water, orange blossom, and saffron threads worth more than gold.
              Those recipes trickled down to middle-class families and eventually became the everyday
              lunch that Morocco still eats today.
            </p>
          </div>
        </div>
      </section>

      {/* ── 12 Classic Tagine Varieties ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              12 Classic Tagine Varieties You Must Know
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              From the universally beloved chicken with preserved lemon to the adventurous lamb brain
              tagine of Fes, each variety tells a story about its region, its season, and the family
              that perfected it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tagineVarieties.map((tagine) => {
              const TagIcon = tagine.icon;
              return (
                <div key={tagine.name} className="card-moroccan p-6 relative">
                  {tagine.mustTry && (
                    <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wide">
                      Must Try
                    </span>
                  )}
                  <TagIcon className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {tagine.name}
                  </h3>
                  <p className="text-xs text-[var(--color-accent)] font-medium mb-1 italic">{tagine.arabicName}</p>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-3">
                    <MapPin className="w-3 h-3" />
                    {tagine.region}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {tagine.description}
                  </p>
                  <p className="text-xs font-[family-name:var(--font-heading)] font-semibold text-[var(--color-gold)]">
                    <DollarSign className="w-3 h-3 inline -mt-0.5" /> {tagine.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regional Specialties ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Regional Tagine Traditions
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
            <p>
              Morocco is not a single cuisine -- it is a country of micro-cuisines shaped by geography,
              climate, and the produce available within a day&apos;s travel. The tagine you eat in coastal
              Essaouira bears little resemblance to the one served in mountainous Chefchaouen or
              imperial Fes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                region: 'Fes & Meknes (Imperial Cities)',
                icon: Crown,
                text: 'The refined, sweet-savory tagines. Lamb with prunes and almonds, chicken tfaya with caramelized onions, and lamb with quince all trace their lineage to medieval court cooking. Fassi tagines use more sugar, honey, and cinnamon than anywhere else in Morocco. The flavors are complex and layered.',
              },
              {
                region: 'Marrakech & the South',
                icon: Flame,
                text: 'Bolder, spicier, and more direct. Tanjia -- Marrakech\'s bachelor dish of slow-cooked meat sealed in an urn and left in the hammam furnace -- is the city\'s proudest contribution. Tagines here lean toward lamb with apricots, kefta with egg, and generous use of ras el hanout. The heat of the south shows up on the plate.',
              },
              {
                region: 'Essaouira & the Atlantic Coast',
                icon: Globe,
                text: 'Fish and seafood dominate. Tagines of monkfish, sea bass, shrimp, and sardine balls replace the lamb and chicken of the interior. Chermoula (a cilantro-garlic-lemon marinade) is the defining flavor. Argan oil drizzled on a finished fish tagine is an Essaouira signature.',
              },
              {
                region: 'Chefchaouen & the Rif Mountains',
                icon: Leaf,
                text: 'Simpler, herb-forward tagines that reflect mountain cooking. Goat meat is more common here than elsewhere. Fresh herbs from the Rif valleys -- thyme, oregano, wild mint -- give these tagines a green, aromatic quality that sets them apart from the spice-heavy dishes of the south.',
              },
              {
                region: 'High Atlas & Berber Villages',
                icon: Star,
                text: 'Hearty, warming tagines built for cold mountain nights. Lamb or goat with root vegetables, potatoes, and turnips. Spicing is minimal -- cumin, salt, pepper, saffron. The ingredients speak for themselves. Often cooked over wood fires that add a subtle smokiness.',
              },
            ].map((region) => {
              const RegIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <RegIcon className="w-7 h-7 text-[var(--color-accent)] mt-1 shrink-0" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {region.region}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{region.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vegetarian & Vegan Tagines ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Vegetarian &amp; Vegan Tagines
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              Vegetable tagines are a genuine part of Moroccan cooking, not a concession to foreign
              tourists. Moroccan families regularly cook meatless tagines, especially during the
              expensive days before payday or during religious periods of fasting. The spice blends
              and slow-cooking method make vegetables the star rather than a side act.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Seven-Vegetable Tagine', desc: 'The classic mix of carrots, zucchini, turnips, potatoes, tomatoes, onions, and pumpkin with ras el hanout and saffron. Served everywhere.' },
              { name: 'Pumpkin & Chickpea Tagine', desc: 'Roasted pumpkin with chickpeas, caramelized onions, cinnamon, and a drizzle of argan oil. Naturally sweet and filling.' },
              { name: 'Artichoke & Green Pea Tagine', desc: 'A spring specialty with fresh artichoke hearts, peas, preserved lemon, and loads of cilantro. Light and bright.' },
              { name: 'Potato, Olive & Preserved Lemon Tagine', desc: 'The humblest tagine and one of the tastiest. Potatoes slow-cooked with olives, preserved lemon, and turmeric until soft and golden.' },
              { name: 'Cauliflower & Potato with Charmoula', desc: 'Cauliflower florets and potato chunks in a spiced cilantro-garlic chermoula sauce. Popular in home cooking.' },
              { name: 'Eggplant & Tomato Tagine', desc: 'Smoky roasted eggplant with tomato, garlic, cumin, and paprika. Sometimes called zaalouk tagine after the popular Moroccan eggplant salad.' },
            ].map((veg) => (
              <div key={veg.name} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {veg.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{veg.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-6 bg-amber-50/50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Vegan Note
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Most Moroccan vegetable tagines are cooked with butter (smen, a fermented clarified
                  butter) or regular butter. Ask for &quot;bla zebda&quot; (without butter) and request
                  olive oil or argan oil instead. Honey is used in some sweet tagines -- confirm with
                  the server if this matters to you. Bread served alongside is always vegan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Tagine Restaurants by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Tagine Restaurants by City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              From hole-in-the-wall joints serving kefta tagine for from 35 MAD to palace restaurants
              with tablecloths and tasting menus. Seasonal pricing can change during peak tourist months.
            </p>
          </div>

          <div className="space-y-10">
            {tagineRestaurants.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city}>
                  <div className="flex items-center gap-3 mb-4">
                    <CityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {city.city}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {city.spots.map((spot) => (
                      <div key={spot.name} className="card-moroccan p-5">
                        <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                          {spot.name}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-2">
                          <span className="px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                            {spot.style}
                          </span>
                          <span className="font-semibold text-[var(--color-gold)]">{spot.price}</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{spot.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cooking Classes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Learn to Cook Tagine: Best Cooking Classes
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Hands-on workshops where you shop for ingredients in the souk, learn the spice
              ratios from a Moroccan chef, and eat what you made. Prices listed are per person
              and seasonal pricing can change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cookingClasses.map((cls) => (
              <div key={cls.name} className="card-moroccan p-6">
                <ChefHat className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {cls.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {cls.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {cls.duration}
                  </span>
                  <span className="font-semibold text-[var(--color-gold)]">{cls.price}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                  {cls.highlight}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  <span className="font-semibold">Includes:</span> {cls.includes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buying a Tagine Pot ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Buying a Tagine Pot in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Four types of tagine pots, what each one is for, and what to pay. The pottery souks of
              Safi, Fes, and Marrakech have the widest selection. Always negotiate -- asking prices
              in tourist areas start at 2-3 times the fair price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taginePotTypes.map((pot) => {
              const PotIcon = pot.icon;
              return (
                <div key={pot.type} className="card-moroccan p-6">
                  <PotIcon className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {pot.type}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-3">
                    <span className="font-semibold text-[var(--color-gold)]">{pot.price}</span>
                    <span>{pot.material}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                    {pot.description}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    <Store className="w-3 h-3 inline -mt-0.5 mr-1" />
                    <span className="font-semibold">Where to buy:</span> {pot.bestBuy}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Package className="w-7 h-7 text-[var(--color-accent)] mt-1 shrink-0" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Shipping a Tagine Home
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  If you buy a tagine in the souk and want it shipped, most pottery shops offer
                  international shipping for from 200-400 MAD depending on weight and destination.
                  They pack it with straw and cardboard. Alternatively, wrap it yourself in clothing
                  and towels inside your checked luggage. Place it dead center surrounded by soft
                  items. Unglazed pots are sturdier than they look -- the thick clay handles bumps
                  well. Decorative glazed tagines are more fragile. If flying budget airlines with
                  strict weight limits, consider buying a lightweight decorative tagine (under 1 kg)
                  rather than a heavy cooking tagine (2-3 kg).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Season a New Tagine ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            How to Season a New Tagine Pot
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            A new unglazed tagine must be cured before its first use to prevent cracking and to
            develop the clay&apos;s natural non-stick properties. This process takes about 24 hours
            but requires only 20 minutes of active work.
          </p>

          <div className="space-y-4">
            {[
              { step: 1, title: 'Soak Overnight', text: 'Submerge the entire tagine (base and lid) in cold water for 12-24 hours. The porous clay absorbs water, which prevents it from cracking when exposed to heat.' },
              { step: 2, title: 'Rub with Olive Oil', text: 'Remove from water, dry thoroughly, and rub the interior of both the base and lid with olive oil. Use a generous amount -- the clay will absorb much of it.' },
              { step: 3, title: 'Slow Oven Cure', text: 'Place the oiled tagine in a cold oven. Set to 150C (300F) and let it heat gradually for 2 hours. Never put a tagine in a pre-heated oven -- thermal shock cracks clay.' },
              { step: 4, title: 'Cool Completely', text: 'Turn off the oven and leave the tagine inside until fully cool. Do not remove it while hot. The slow cooling bonds the oil into the clay.' },
              { step: 5, title: 'First Cook', text: 'For the first meal, cook something with plenty of liquid and fat -- a vegetable tagine with olive oil is ideal. The pot will continue to season with each use, improving over months and years.' },
            ].map((s) => (
              <div key={s.step} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold text-sm shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eating Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tagine Etiquette: How Moroccans Eat
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              A tagine is a communal dish shared from the center of the table. These customs are
              not rigid rules for tourists, but knowing them shows respect and will earn genuine
              appreciation from your hosts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etiquetteTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <TipIcon className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Tagine Price Guide 2026
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            What to expect to pay for tagine across Morocco, from sidewalk stalls to fine dining.
            Seasonal pricing can change during peak tourist months (October-April). Prices at
            tourist-facing restaurants in Jemaa el-Fna and Fes medina tend to run 20-30% higher.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-accent)]/20">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Item
                  </th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--color-gold)]">
                    Price
                  </th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceGuide.map((row) => (
                  <tr key={row.item} className="border-b border-[var(--surface-muted)]">
                    <td className="py-3 px-4 text-[var(--text-primary)] font-medium">{row.item}</td>
                    <td className="py-3 px-4 text-[var(--color-gold)] font-semibold whitespace-nowrap">{row.price}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Tagine vs Tanjia vs Couscous ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Tagine vs. Tanjia vs. Couscous: Know the Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <CookingPot className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Tagine
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Slow-cooked in a conical clay pot over low charcoal or gas flame. Meat, vegetables,
                and sauce cook together. The daily lunch dish served across all of Morocco. Available
                everywhere, all year, in dozens of varieties.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <Flame className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Tanjia
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A Marrakech-only specialty. Meat (usually beef or lamb) is placed in an amphora-shaped
                clay urn with spices, sealed with parchment, and slow-cooked for 6-8 hours in the
                ashes of a public hammam furnace. The result is fall-apart tender meat with no added
                liquid. A bachelor&apos;s dish traditionally prepared by men.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <HandPlatter className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Couscous
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Hand-rolled semolina steamed in a couscoussier over a simmering broth of meat and
                vegetables. Served on Fridays after mosque (the traditional family meal) and at
                celebrations. The couscous is mounded on a platter with the stew ladled on top.
                A very different texture and cooking method from tagine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spices & Key Ingredients ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Essential Tagine Spices &amp; Ingredients
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            The flavor of a Moroccan tagine comes from a layered combination of dried spices, fresh
            herbs, and preserved ingredients. Buy from a reputable herbalist (attar) in the souk
            rather than pre-packaged tourist blends, which are often stale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Ras el Hanout', desc: 'A complex blend of 12-30 spices including cardamom, nutmeg, cinnamon, cloves, and dried rosebuds. Every vendor has a proprietary mix. From 20 MAD per 100g.' },
              { name: 'Preserved Lemons', desc: 'Lemons salt-cured for 30+ days until the rind becomes soft and intensely flavored. Used in chicken and fish tagines. From 5 MAD each at the souk.' },
              { name: 'Saffron', desc: 'Grown in the Taliouine region. Real saffron costs from 30 MAD per gram but a few threads transform a tagine. Beware dyed safflower sold as saffron.' },
              { name: 'Cumin', desc: 'The most-used spice in Moroccan cooking. Added to nearly every tagine. Buy whole seeds and grind fresh. From 10 MAD per 100g.' },
              { name: 'Ginger & Turmeric', desc: 'Often used together. Ginger adds warmth; turmeric adds color and an earthy note. Both are used in ground form.' },
              { name: 'Smen (Aged Butter)', desc: 'Fermented, salted butter aged for months or years. Adds a pungent, cheese-like depth. A small amount goes a long way.' },
              { name: 'Olives', desc: 'Green cracked olives for chicken tagines; purple and red olives in others. Moroccan olives are smaller and more intense than European varieties.' },
              { name: 'Fresh Herbs', desc: 'Flat-leaf parsley and cilantro are added in generous handfuls, not pinches. They form a green base flavor in most tagines.' },
            ].map((spice) => (
              <div key={spice.name} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {spice.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{spice.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insider Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Insider Tips for Eating Tagine in Morocco
          </h2>

          <div className="space-y-4">
            {[
              { icon: Info, title: 'Order Early', text: 'The best tagines are cooked for the lunch rush (12:30-14:00). By evening, many spots have sold out. Arrive by noon for the freshest options.' },
              { icon: ShieldCheck, title: 'Look Where Locals Eat', text: 'Tourist restaurants on Jemaa el-Fna often serve tagines that sat for hours. Walk two streets away and follow the Moroccans to places with higher turnover and better food.' },
              { icon: DollarSign, title: 'Negotiate at Street Stalls', text: 'Some stalls quote tourists double the local price. Ask "bshhal?" (how much?) before sitting down. If it sounds high, walk to the next stall.' },
              { icon: Sparkles, title: 'Ask for the Day\'s Special', text: 'Many restaurants prepare a daily special based on market availability. Ask "ash kayn lyoum?" (what do you have today?). The special is often fresher than the menu regulars.' },
              { icon: BookOpen, title: 'Try a Home-Cooked Tagine', text: 'The best tagine you eat in Morocco will be in someone\'s home. If invited for a meal, accept without hesitation. Home-cooked tagine is on another level.' },
              { icon: AlertTriangle, title: 'Beware the Tourist Trap', text: 'Any restaurant with a hawker outside aggressively pulling tourists in is best avoided. The quieter places with no need to hustle are almost always better.' },
            ].map((tip) => {
              const TIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-start gap-4">
                    <TIcon className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <MessageCircleQuestion className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions About Moroccan Tagine
            </h2>
          </div>
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Moroccan Food Guide',
                description: 'The full guide to 50+ Moroccan dishes beyond tagine -- street food, desserts, beverages, and regional specialties.',
                href: '/morocco-food-guide',
                icon: Utensils,
              },
              {
                title: 'Cooking Classes in Morocco',
                description: 'Hands-on workshops across Marrakech, Fes, Essaouira, and Chefchaouen with market tours and spice education.',
                href: '/morocco-cooking-classes',
                icon: ChefHat,
              },
              {
                title: 'Morocco Couscous Guide',
                description: 'Morocco\'s other iconic dish: Friday couscous traditions, regional variations, and the best places to eat it.',
                href: '/morocco-couscous-guide',
                icon: HandPlatter,
              },
              {
                title: 'Best Restaurants in Morocco',
                description: 'City-by-city restaurant recommendations from local favorites to fine dining across Marrakech, Fes, and beyond.',
                href: '/morocco-restaurants',
                icon: Store,
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Taste Morocco&apos;s Soul, One Tagine at a Time
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            From a 35 MAD kefta tagine at a roadside stall to a lamb-and-prune masterpiece at a
            Fassi palace restaurant, tagine is the dish that defines Morocco. Plan your culinary
            journey with our expert guides and local recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--color-accent)] text-white font-[family-name:var(--font-heading)] font-bold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Explore the Food Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-cooking-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              Book a Cooking Class <ChefHat className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

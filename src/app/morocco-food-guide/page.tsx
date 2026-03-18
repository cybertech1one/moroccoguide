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
  Wheat,
  Wine,
  HandPlatter,
  Soup,
  CookingPot,
  Sun,
  Snowflake,
  TreeDeciduous,
  Flower2,
  Mountain,
  Ship,
  Citrus,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Food Guide 2026 | What to Eat in Morocco — 50+ Must-Try Dishes',
  description:
    'The ultimate Moroccan food guide. Discover 50+ must-try dishes from tagine, couscous, and pastilla to street food, mint tea, and regional specialties. Prices, dining etiquette, vegetarian options, and the best food cities in Morocco.',
  keywords: [
    'Moroccan food guide',
    'what to eat in Morocco',
    'Moroccan cuisine',
    'best food in Morocco',
    'Moroccan dishes',
    'tagine Morocco',
    'couscous Morocco',
    'Moroccan street food',
    'mint tea Morocco',
    'pastilla Morocco',
    'harira soup',
    'tanjia Marrakech',
    'mechoui Morocco',
    'rfissa Morocco',
    'Moroccan food prices',
    'vegetarian food Morocco',
    'vegan food Morocco',
    'Moroccan dining etiquette',
    'food allergies Morocco',
    'best food cities Morocco',
    'Moroccan breakfast',
    'Moroccan desserts',
    'Morocco food guide 2026',
    'Moroccan spices',
    'ras el hanout',
  ],
  openGraph: {
    title: 'Moroccan Food Guide 2026 | What to Eat in Morocco — 50+ Must-Try Dishes',
    description:
      'Everything you need to know about eating in Morocco. 50+ must-try dishes, street food, dining etiquette, regional specialties, vegetarian options, and restaurant price guide.',
    url: `${BASE_URL}/morocco-food-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-food-tours.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful spread of Moroccan dishes including tagine, couscous, pastilla, and fresh salads on a traditional table',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Food Guide 2026 | 50+ Must-Try Dishes',
    description:
      'The complete guide to eating in Morocco. From tagine and couscous to street food and mint tea. Prices, tips, and the best food cities.',
    images: [`${BASE_URL}/images/hero-food-tours.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-food-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-food-guide`,
  name: 'Moroccan Food Guide 2026 | What to Eat in Morocco — 50+ Must-Try Dishes',
  description:
    'The ultimate Moroccan food guide covering 50+ must-try dishes, street food, beverages, dining etiquette, regional specialties, vegetarian and vegan options, food allergies tips, and restaurant price guide.',
  url: `${BASE_URL}/morocco-food-guide`,
  image: `${BASE_URL}/images/hero-food-tours.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-food-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Food Guide', item: `${BASE_URL}/morocco-food-guide` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — FAQPage
   ═══════════════════════════════════════════════════════════════ */

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the most famous Moroccan dish?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tagine is Morocco\'s most iconic dish. Slow-cooked in a conical clay pot, it comes in dozens of varieties including lamb with prunes and almonds, chicken with preserved lemons and olives, and vegetable tagines. Couscous, served on Fridays as a family tradition, is equally central to Moroccan cuisine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Moroccan street food safe to eat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Moroccan street food is generally safe. Follow these rules: eat at stalls with high customer turnover, choose food that is cooked fresh in front of you, avoid pre-cooked food that has been sitting out, and drink bottled water. Most travelers have no issues. Start with cooked foods if you have a sensitive stomach.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does food cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers excellent value for food. Street food meals start from 15-30 MAD. A local restaurant tagine or couscous costs from 40-70 MAD. Mid-range restaurant meals run from 100-200 MAD. Fine dining starts from 300 MAD. Fresh orange juice is from 5 MAD and mint tea from 5 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can vegetarians and vegans eat well in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vegetarians have good options including vegetable tagines, couscous with seven vegetables, zaalouk, briouats with cheese, and salads. Vegans need more planning since butter and honey are common, but bessara, vegetable dishes cooked in olive oil, and fresh produce are widely available. Say "bla lhem" (without meat) when ordering.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I eat for breakfast in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A traditional Moroccan breakfast includes msemen or baghrir flatbreads with honey and butter, fresh bread (khobz) with olive oil, cheese, and jam, bissara (fava bean soup), hard-boiled eggs, Moroccan mint tea, and fresh-squeezed orange juice. Most riads serve a generous Moroccan breakfast spread.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Moroccan dining etiquette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key etiquette rules: eat with your right hand only, use bread (khobz) as your utensil to scoop food, eat from the section of the communal dish closest to you, accept mint tea when offered, wash hands before and after the meal, and say "bismillah" before eating. Remove shoes if dining on floor cushions in a traditional home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan city has the best food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes is widely considered the culinary capital of Morocco with the most refined cuisine. Marrakech has the best street food scene, especially at Jemaa el-Fnaa. Essaouira excels in seafood, Meknes is underrated with great local food at lower prices, and Casablanca has the most cosmopolitan dining scene.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle food allergies in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carry a dietary card translated into Arabic and French listing your allergies. Common allergens in Moroccan food include wheat (in bread, couscous, pastry), nuts (especially almonds and peanuts in many dishes), dairy (butter, fresh cheese), and eggs (in pastilla, briouats). Learn the Arabic phrase "andi hassasiya men..." (I have an allergy to...) followed by the ingredient.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MUST-TRY MAIN DISHES
   ═══════════════════════════════════════════════════════════════ */

const mainDishes = [
  {
    name: 'Tagine',
    icon: Flame,
    category: 'Signature Dish',
    description:
      'The undisputed king of Moroccan cuisine. A tagine is both the conical clay cooking vessel and the slow-cooked stew prepared inside it. The conical lid traps steam, creating incredibly tender meat and aromatic sauces without added water. Tagines are cooked over low charcoal heat for hours, allowing spices to meld into deep, complex flavors.',
    varieties: [
      'Lamb with prunes and almonds (the classic)',
      'Chicken with preserved lemons and olives',
      'Kefta (meatball) tagine with eggs',
      'Fish tagine with chermoula',
      'Vegetable tagine with seasonal produce',
    ],
    whereToBest: 'Marrakech and Fes medinas for the most traditional versions. Ask for "tagine beldi" (traditional/homestyle).',
    priceRange: 'From 40 MAD at street stalls, from 80 MAD at local restaurants, from 150 MAD at tourist restaurants',
    insiderTip: 'The best tagines take 2-3 hours to cook. If your meal arrives in 15 minutes, it was pre-made. Look for restaurants where tagines are ordered in advance or cooked to order on charcoal brasiers visible from the street.',
  },
  {
    name: 'Couscous',
    icon: Utensils,
    category: 'National Dish',
    description:
      'Hand-rolled semolina granules steamed multiple times over a broth of vegetables and meat until light and fluffy, with each grain perfectly separate. Couscous is Morocco\'s national dish and a deeply social food. Friday is couscous day, when families gather after mosque for the weekly tradition. The dish is always served from a large communal platter.',
    varieties: [
      'Royal couscous with seven vegetables',
      'Couscous with lamb and caramelized onions',
      'Couscous tfaya with chicken, raisins, and onion jam',
      'Seafood couscous (coastal cities)',
      'Sweet couscous seffa with cinnamon and almonds',
    ],
    whereToBest: 'Any local restaurant on Friday. The best couscous is homemade, so riad lunches and cooking classes are ideal. Never order couscous at tourist restaurants on non-Friday days.',
    priceRange: 'From 35 MAD at local restaurants, from 80 MAD at tourist restaurants, from 150 MAD at fine dining',
    insiderTip: 'Authentic Moroccan couscous is steamed three times in a couscoussier, not boiled. If the grains are clumped together, it was not prepared properly. The best couscous should be light as air.',
  },
  {
    name: 'Pastilla (B\'stilla)',
    icon: Crown,
    category: 'Fassi Masterpiece',
    description:
      'A breathtaking sweet-and-savory pie that represents the pinnacle of Fassi cuisine. Layers of impossibly thin warqa pastry enclose a filling of shredded pigeon or chicken, scrambled eggs with herbs, and toasted almonds, all dusted with cinnamon and powdered sugar. The contrast of crispy pastry, savory meat, and sweet spice is extraordinary and unlike anything in other cuisines.',
    varieties: [
      'Traditional pigeon pastilla (the original)',
      'Chicken pastilla (most common)',
      'Seafood pastilla (coastal specialty)',
      'Pastilla au lait (sweet milk pastilla dessert)',
      'Mini pastilla briouats (appetizer version)',
    ],
    whereToBest: 'Fes is the birthplace and still the best place. Order at traditional restaurants or buy from specialized medina pastilla shops. In Essaouira, try the seafood version.',
    priceRange: 'From 25 MAD for a slice, from 80 MAD for a whole pastilla, from 150 MAD at fine dining restaurants',
    insiderTip: 'Real pastilla uses warqa pastry, not phyllo dough. Warqa is hand-made by dabbing dough onto a hot surface, one impossibly thin sheet at a time. Watch the process at bakeries in the Fes medina.',
  },
  {
    name: 'Harira',
    icon: Soup,
    category: 'Essential Soup',
    description:
      'Morocco\'s most beloved soup: a hearty, tomato-based broth thick with lentils, chickpeas, vermicelli noodles, celery, fresh herbs, and sometimes lamb. Harira is the soup that traditionally breaks the fast during Ramadan, but it is served year-round at street stalls and restaurants across the country. It is deeply nourishing, comforting, and deeply tied to Moroccan identity.',
    varieties: [
      'Classic harira with lamb and lentils',
      'Vegetarian harira (without meat)',
      'Fassi harira (richer, with more herbs)',
      'Berber harira (spicier, rustic style)',
    ],
    whereToBest: 'Street stalls across all cities, especially during Ramadan. The best harira is at humble roadside stalls where a bowl costs from 5 MAD. During Ramadan, free harira is distributed at mosques.',
    priceRange: 'From 5 MAD at street stalls, from 20 MAD at local restaurants, from 40 MAD at tourist restaurants',
    insiderTip: 'The best harira is served during Ramadan at sunset. Even if you are not fasting, experiencing the iftar (breaking of the fast) atmosphere is unforgettable. Harira is traditionally served with dates, hard-boiled eggs, and chebakia pastries.',
  },
  {
    name: 'Tanjia',
    icon: CookingPot,
    category: 'Marrakech Exclusive',
    description:
      'Not to be confused with tagine, tanjia is Marrakech\'s signature dish and its preparation is unique in world cuisine. Lamb or beef is seasoned with preserved lemons, saffron, cumin, garlic, and smen (aged butter), sealed in a clay urn with parchment, and delivered to the furnace keeper at the local hammam (public bath). The urn sits in the hot ashes for 6-8 hours, producing meat so tender it falls apart at the touch of a fork.',
    varieties: [
      'Classic lamb tanjia with preserved lemons',
      'Beef tanjia with saffron',
      'Chicken tanjia (lighter version)',
    ],
    whereToBest: 'Exclusively Marrakech. Order from traditional restaurants in the medina that still prepare it in hammam furnaces. Some riads can arrange tanjia for their guests.',
    priceRange: 'From 80 MAD per person (always shared between 2-4 people)',
    insiderTip: 'Tanjia is traditionally a bachelor\'s dish, prepared by men without kitchens who would season the urn and leave it at the hammam furnace while they worked. Ask your server if the tanjia was cooked in a hammam furnace or in the restaurant kitchen. The hammam version is always superior.',
  },
  {
    name: 'Mechoui',
    icon: Flame,
    category: 'Celebration Feast',
    description:
      'Whole lamb slow-roasted in an underground clay pit for hours, basted with butter and cumin until the outside is crackling and golden and the meat inside is so tender it slides off the bone. Mechoui is traditionally a celebration dish served at weddings, festivals, and family gatherings, but in Marrakech it is available daily from specialized stalls.',
    varieties: [
      'Whole lamb mechoui (for large groups)',
      'Shoulder or leg mechoui (smaller portions)',
      'Mechoui sandwich with cumin salt',
    ],
    whereToBest: 'Mechoui Alley in the Marrakech medina, near Jemaa el-Fnaa. Point at the lamb hanging in the window and they carve your portion on the spot. Also excellent at celebrations in the countryside.',
    priceRange: 'From 60 MAD for a generous portion with bread, from 120 MAD at restaurants',
    insiderTip: 'At Mechoui Alley, the shoulder meat is the most tender and flavorful. Point to the shoulder specifically. The meat is served with nothing more than cumin and salt, which is all it needs.',
  },
  {
    name: 'Rfissa',
    icon: Utensils,
    category: 'Celebration Dish',
    description:
      'A deeply aromatic celebration dish of shredded msemen flatbread soaked in a rich lentil and chicken broth, heavily flavored with fenugreek. Rfissa is traditionally prepared for new mothers in the days after birth, believed to aid recovery and boost milk production. The warming fenugreek and the combination of textures make it one of Morocco\'s most comforting dishes.',
    varieties: [
      'Classic rfissa with chicken and lentils',
      'Rfissa with pigeon (festive version)',
      'Rfissa without meat (simplified)',
    ],
    whereToBest: 'Fes is the home of rfissa. Many traditional restaurants serve it, but the best experience is homemade during cooking classes or family meals. Some Marrakech restaurants also excel.',
    priceRange: 'From 45 MAD at local restaurants, from 90 MAD at tourist restaurants',
    insiderTip: 'Rfissa requires fenugreek (helba), which gives it a distinctive sweet and earthy aroma. If you do not smell fenugreek, it is not authentic rfissa. The dish is best eaten by hand, using the soaked bread as your utensil.',
  },
  {
    name: 'Lamb or Chicken Brochettes',
    icon: Flame,
    category: 'Street Food Staple',
    description:
      'Morocco\'s most popular street food: cubes of marinated lamb, chicken, or kefta (minced meat) grilled over charcoal on metal skewers. The marinade typically includes cumin, paprika, onion, and olive oil. Brochettes are served with bread, harissa, and a simple salad of tomatoes and onions. The smell of charcoal-grilled meat wafting through the medina is one of Morocco\'s signature sensory experiences.',
    varieties: [
      'Lamb brochettes with cumin',
      'Chicken brochettes with paprika',
      'Kefta (minced lamb) brochettes',
      'Mixed grill platter',
      'Liver brochettes (adventurous)',
    ],
    whereToBest: 'Jemaa el-Fnaa in Marrakech, any medina street grill, or roadside stops along highways. The best brochettes are at stalls with high turnover and glowing charcoal.',
    priceRange: 'From 15 MAD per skewer at street stalls, from 50 MAD for a mixed plate at restaurants',
    insiderTip: 'Moroccan brochettes are always cooked over real charcoal, not gas. The charcoal imparts a smoky flavor that defines the dish. If a stall is using gas, find another one.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: STREET FOOD
   ═══════════════════════════════════════════════════════════════ */

const streetFoods = [
  {
    name: 'Msemen',
    description: 'Square, layered flatbread, pan-fried until golden and crispy. Served with honey and butter for breakfast, or stuffed with meat and vegetables for lunch. Found at street griddles everywhere, often made by women on the sidewalk.',
    price: 'From 2 MAD each',
    bestIn: 'Everywhere, especially morning street stalls',
  },
  {
    name: 'Baghrir',
    description: 'Round, spongy pancakes with a thousand tiny holes on the surface that soak up melted butter and honey. Made from semolina batter and cooked on one side only. A beloved breakfast and teatime treat across all of Morocco.',
    price: 'From 2 MAD each',
    bestIn: 'Everywhere, especially morning markets',
  },
  {
    name: 'Maakouda',
    description: 'Golden fried potato fritters, crispy on the outside and fluffy inside, often tucked into a bread sandwich with harissa and olives. A cheap and satisfying snack found at every food stall in the country.',
    price: 'From 3 MAD each',
    bestIn: 'Casablanca, Marrakech medina',
  },
  {
    name: 'Bocadillos',
    description: 'Moroccan sandwiches stuffed with combinations of kefta, fried egg, cheese, tuna, olives, and harissa in a crusty baguette. The Moroccan answer to fast food, infinitely customizable, and available on every street corner.',
    price: 'From 15 MAD',
    bestIn: 'Casablanca, Tangier',
  },
  {
    name: 'Babouche (Snails)',
    description: 'Small snails simmered in a fragrant broth of thyme, licorice root, anise, and pepper. Served in a bowl with the broth and a toothpick for extracting the snails. The broth is considered medicinal and is often drunk first. An acquired taste that is quintessentially Moroccan.',
    price: 'From 10 MAD per bowl',
    bestIn: 'Jemaa el-Fnaa, Marrakech; Fes medina',
  },
  {
    name: 'Sardines (Grilled)',
    description: 'Morocco is the world\'s largest exporter of sardines, and nowhere are they fresher than at the coastal ports. Grilled whole over charcoal with nothing more than salt, cumin, and a squeeze of lemon. Simple, cheap, and magnificent.',
    price: 'From 15 MAD per plate',
    bestIn: 'Essaouira port, Agadir, Casablanca Central Market',
  },
  {
    name: 'Sfinj',
    description: 'Moroccan doughnuts: rings of yeasted dough deep-fried until puffy and golden. They can be plain, dusted with sugar, or split open and filled with honey or cheese. Best eaten hot from the fryer at morning street stalls.',
    price: 'From 1 MAD each',
    bestIn: 'Tangier, Tetouan, Fes (morning stalls)',
  },
  {
    name: 'Bissara',
    description: 'A thick, velvety fava bean soup drizzled with olive oil and cumin. Served steaming hot in small bowls with crusty bread for dunking. Morocco\'s best cheap and filling breakfast, beloved by workers and students across the northern half of the country.',
    price: 'From 5 MAD per bowl',
    bestIn: 'Chefchaouen, Fes, Meknes, northern cities',
  },
  {
    name: 'Briouats',
    description: 'Crispy triangular or cigar-shaped pastries filled with savory or sweet fillings. Savory versions contain spiced minced meat, cheese, or seafood. Sweet versions are filled with almond paste and dipped in honey. A versatile snack found at bakeries and street vendors.',
    price: 'From 3 MAD each',
    bestIn: 'Fes, Marrakech, everywhere during Ramadan',
  },
  {
    name: 'Khobz (Moroccan Bread)',
    description: 'Round, flat loaves of crusty bread baked in communal wood-fired ovens. Khobz is the utensil of Moroccan dining: torn into pieces and used to scoop tagines, dip into sauces, and mop up every last drop. Families send their dough to the neighborhood oven daily.',
    price: 'From 1.5 MAD per loaf',
    bestIn: 'Every neighborhood bakery (ferran) across Morocco',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEVERAGES
   ═══════════════════════════════════════════════════════════════ */

const beverages = [
  {
    name: 'Moroccan Mint Tea (Atay)',
    icon: Coffee,
    description:
      'Far more than a drink, Moroccan mint tea is the national symbol of hospitality and friendship. Gunpowder green tea, fresh spearmint, and generous sugar are brewed in a silver teapot and poured from a dramatic height to create a frothy top. Three glasses are customary: the first is gentle as life, the second strong as love, the third bitter as death.',
    whereTo: 'Everywhere. Accept every offer of tea you receive. The ritual matters more than the location.',
    price: 'From 5 MAD at street cafes, from 15 MAD at tourist cafes',
    funFact: 'Refusing an offer of tea is considered impolite. Moroccans drink an average of 3-5 glasses per day.',
  },
  {
    name: 'Fresh Orange Juice',
    icon: Citrus,
    description:
      'Morocco grows some of the world\'s best oranges, and fresh-squeezed juice is available on every street corner for astonishingly low prices. The juice is squeezed to order from seasonal oranges that are sweeter and more flavorful than anything you will find at home. Marrakech\'s Jemaa el-Fnaa has dozens of competing juice carts.',
    whereTo: 'Jemaa el-Fnaa in Marrakech has the most famous (and cheapest) juice vendors. Available everywhere.',
    price: 'From 5 MAD at street carts, from 15 MAD at restaurants',
    funFact: 'At Jemaa el-Fnaa, juice vendors compete aggressively for customers. Walk past and compare prices, but the standard is from 5 MAD for a full glass.',
  },
  {
    name: 'Avocado Smoothie (Jus d\'Avocat)',
    icon: Leaf,
    description:
      'A thick, creamy smoothie made from ripe avocados, milk, sugar, and sometimes almonds or dates. This is not a health drink by Western standards; it is rich, sweet, and indulgent. A Moroccan specialty that surprises first-time visitors with its dessert-like quality. Perfect as a mid-afternoon pick-me-up.',
    whereTo: 'Juice bars in Casablanca, Marrakech, and most cities. Look for "jus" signs.',
    price: 'From 15 MAD at juice bars, from 30 MAD at restaurants',
    funFact: 'Moroccans treat avocado as a fruit, not a vegetable. Avocado smoothies are a sweet treat, often served with a raw egg blended in for extra richness.',
  },
  {
    name: 'Almond Milk (Lait d\'Amande)',
    icon: Coffee,
    description:
      'Fresh almond milk blended with sugar and orange blossom water, served ice-cold. This is a traditional Moroccan drink found at specialized almond milk vendors in the medinas, particularly in Fes and Marrakech. Creamy, fragrant, and refreshing.',
    whereTo: 'Specialized vendors in Fes and Marrakech medinas. Also served at traditional restaurants.',
    price: 'From 10 MAD per glass',
    funFact: 'Almond milk has been a Moroccan tradition for centuries, long before it became a global health trend.',
  },
  {
    name: 'Moroccan Coffee (Nous-Nous)',
    icon: Coffee,
    description:
      'Literally meaning "half-half," nous-nous is Morocco\'s answer to a cafe latte: half espresso, half steamed milk, served in a small glass. Moroccans drink it at cafes throughout the day. Stronger black coffee (kahwa) is also available, often spiced with a touch of cardamom or cinnamon.',
    whereTo: 'Any cafe across Morocco. The best nous-nous is at traditional neighborhood cafes, not tourist spots.',
    price: 'From 8 MAD at local cafes, from 20 MAD at tourist cafes',
    funFact: 'Moroccan cafe culture is predominantly male. Women tend to socialize at home or in patisseries. Tourist areas are the exception.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DINING ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Eat with your right hand',
    icon: ThumbsUp,
    description:
      'The left hand is considered unclean in Moroccan culture. Always eat, pass dishes, and accept tea with your right hand. If you are left-handed, most Moroccans will understand if you explain, but making the effort to use your right hand is deeply appreciated.',
  },
  {
    rule: 'Use bread as your utensil',
    icon: Wheat,
    description:
      'Moroccan bread (khobz) serves as both accompaniment and utensil. Tear off a piece and use it to scoop tagine, pinch couscous, or mop up sauces. Forks and spoons are available at restaurants, but eating with bread is the traditional and most enjoyable method.',
  },
  {
    rule: 'Eat from your section of the communal dish',
    icon: Users,
    description:
      'Tagines and couscous are served in a single communal dish. Eat from the section directly in front of you, working inward. Do not reach across to the other side. Your host may place choice pieces of meat in front of you as an honor.',
  },
  {
    rule: 'Say "Bismillah" before eating',
    icon: BookOpen,
    description:
      'It is customary to say "Bismillah" (in the name of God) before beginning a meal. When finished, say "Alhamdulillah" (praise be to God). Even non-Muslims who make this gesture earn sincere appreciation from their Moroccan hosts.',
  },
  {
    rule: 'Accept mint tea graciously',
    icon: Coffee,
    description:
      'When offered mint tea, always accept. It is the highest form of Moroccan hospitality. Three glasses is customary. You may decline a fourth by placing your hand over the glass. Complimenting the tea is always welcome.',
  },
  {
    rule: 'Wash hands before and after',
    icon: ShieldCheck,
    description:
      'A pitcher of water and basin will be passed around before and after meals in traditional settings. Washing hands is both practical (you are eating with them) and culturally expected. In restaurants, a sink or hand-washing station is usually available.',
  },
  {
    rule: 'Remove shoes for floor dining',
    icon: Home,
    description:
      'If invited to eat in a traditional Moroccan home or at a low table with cushions, remove your shoes before stepping onto the dining area. Follow your host\'s lead. Sit cross-legged or with legs tucked to the side.',
  },
  {
    rule: 'Compliment the food generously',
    icon: Heart,
    description:
      'Moroccans take enormous pride in their cooking. Complimenting the food enthusiastically is not just polite, it is expected. Use "had shi zwin" (this is beautiful/delicious) or simply "zwin bezzaf" (very beautiful). Your host will beam.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD BY REGION
   ═══════════════════════════════════════════════════════════════ */

const foodByRegion = [
  {
    region: 'Marrakech & the South',
    icon: Sun,
    description: 'Bold, spice-forward cuisine influenced by Saharan and sub-Saharan trade routes. Marrakech is the street food capital of Morocco.',
    specialties: ['Tanjia (slow-cooked in hammam ashes)', 'Mechoui (pit-roasted lamb)', 'Tangia brochettes', 'Jemaa el-Fnaa night food stalls', 'Saffron from Taliouine'],
    notableIngredients: 'Saffron, cumin, preserved lemons, smen (aged butter), argan oil',
  },
  {
    region: 'Fes & Meknes (Imperial Cities)',
    icon: Crown,
    description: 'The refined culinary capital. Fassi cuisine has been perfected over 1,200 years with Andalusian influence, producing Morocco\'s most complex and elegant dishes.',
    specialties: ['Pastilla (sweet-savory pie)', 'Rfissa (fenugreek chicken)', 'Fassi-style tagines', 'Sellou (toasted flour confection)', 'Khlii (preserved meat)'],
    notableIngredients: 'Fenugreek, gum arabic, orange blossom water, fresh herbs, aged vinegar',
  },
  {
    region: 'Atlantic Coast (Essaouira, Agadir, Casablanca)',
    icon: Ship,
    description: 'Seafood dominates the coastal kitchen. The freshest fish in North Africa, grilled simply over charcoal or prepared in elaborate tagines and pastillas.',
    specialties: ['Grilled sardines and sea bream', 'Seafood pastilla', 'Fish tagine with chermoula', 'Calamari a la plancha', 'Sea urchin (seasonal)'],
    notableIngredients: 'Chermoula marinade, fresh fish, shrimp, argan oil, cumin',
  },
  {
    region: 'Rif Mountains (Chefchaouen, Tetouan)',
    icon: Mountain,
    description: 'Riffian cuisine is distinct and influenced by Andalusian and Berber mountain traditions. Simpler, heartier fare using mountain herbs and local goat cheese.',
    specialties: ['Bissara (fava bean soup)', 'Riffian couscous', 'Fresh goat cheese with olive oil', 'Baghrir with mountain honey', 'Mountain herb tea'],
    notableIngredients: 'Fava beans, goat cheese, wild thyme, mountain honey, olive oil',
  },
  {
    region: 'Tangier & the North',
    icon: Globe,
    description: 'A crossroads of African and European culinary traditions. Spanish, French, and Moroccan influences create a uniquely cosmopolitan food scene.',
    specialties: ['Spanish-Moroccan tapas', 'Sfinj (Moroccan doughnuts)', 'Fresh anchovy fritters', 'Briouats with cheese', 'Tangier-style mint tea'],
    notableIngredients: 'Anchovies, olives, Spanish-style olive oil, fresh herbs, tangerines',
  },
  {
    region: 'Atlas Mountains & Berber Highlands',
    icon: Mountain,
    description: 'Rustic Berber cuisine shaped by mountain living. Hearty, warming dishes built around what the land provides. The home of Morocco\'s most prized ingredients.',
    specialties: ['Berber tagine with root vegetables', 'Trid (shredded flatbread in broth)', 'Berber omelet (with tomatoes, peppers)', 'Amlou (argan, almond, honey dip)', 'Mountain tajine with walnuts'],
    notableIngredients: 'Argan oil, walnuts, root vegetables, dried meats, wild herbs',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: VEGETARIAN & VEGAN OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const vegetarianOptions = [
  {
    name: 'Vegetable Tagine',
    description: 'Seasonal vegetables slow-cooked in the classic tagine style with spices, olive oil, and sometimes preserved lemons. Available at virtually every restaurant.',
    veganFriendly: true,
    price: 'From 35 MAD',
  },
  {
    name: 'Couscous with Seven Vegetables',
    description: 'The classic Friday couscous made with carrots, turnips, zucchini, pumpkin, cabbage, onions, and tomatoes. The broth is traditionally vegetable-based for this version.',
    veganFriendly: true,
    price: 'From 35 MAD',
  },
  {
    name: 'Zaalouk',
    description: 'Smoky cooked eggplant and tomato salad with garlic, olive oil, and cumin. Served as a starter or side dish. One of Morocco\'s best-known salads and naturally vegan.',
    veganFriendly: true,
    price: 'From 15 MAD',
  },
  {
    name: 'Taktouka',
    description: 'Cooked salad of roasted peppers and tomatoes with garlic and olive oil. Similar to zaalouk but with peppers instead of eggplant. Served warm or at room temperature.',
    veganFriendly: true,
    price: 'From 15 MAD',
  },
  {
    name: 'Bissara',
    description: 'Thick fava bean soup with olive oil and cumin. A northern Moroccan staple that is naturally vegan, deeply satisfying, and incredibly cheap.',
    veganFriendly: true,
    price: 'From 5 MAD',
  },
  {
    name: 'Briouats with Cheese',
    description: 'Crispy pastry triangles filled with fresh cheese and herbs. Vegetarian but not vegan due to cheese and pastry. A delicious starter or snack.',
    veganFriendly: false,
    price: 'From 3 MAD each',
  },
  {
    name: 'Harira (Vegetarian Version)',
    description: 'Many stalls offer harira without meat, relying on lentils and chickpeas for protein. Just as hearty and nourishing as the meat version. Ask for "harira bla lhem."',
    veganFriendly: true,
    price: 'From 5 MAD',
  },
  {
    name: 'Moroccan Salad Plate',
    description: 'A spread of 4-8 small salads including zaalouk, taktouka, beet salad, carrot salad with orange blossom, and raw vegetables. Usually served free before main courses at restaurants.',
    veganFriendly: true,
    price: 'Often included free, or from 20 MAD separately',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD ALLERGIES GUIDE
   ═══════════════════════════════════════════════════════════════ */

const allergyInfo = [
  {
    allergen: 'Nuts (Almonds, Peanuts, Walnuts)',
    icon: AlertTriangle,
    risk: 'High',
    description: 'Almonds are extremely common in Moroccan cuisine, appearing in tagines, pastilla, desserts, amlou dip, and as garnishes. Peanuts appear in some street food. Walnuts are used in salads and Berber dishes.',
    commonDishes: 'Pastilla, tagine with almonds, sellou, chebakia, amlou, ghriba cookies, almond milk',
    arabicPhrase: '"Andi hassasiya men louz" (I have an allergy to almonds)',
  },
  {
    allergen: 'Gluten (Wheat)',
    icon: Wheat,
    risk: 'Very High',
    description: 'Wheat is central to Moroccan cuisine. Bread (khobz) accompanies every meal, couscous is semolina, pastilla and briouats use wheat pastry, and harira contains vermicelli. Avoiding gluten requires constant vigilance.',
    commonDishes: 'Khobz, couscous, pastilla, briouats, harira, msemen, baghrir, chebakia, rfissa',
    arabicPhrase: '"Andi hassasiya men l-qamh" (I have an allergy to wheat)',
  },
  {
    allergen: 'Dairy (Milk, Butter)',
    icon: AlertTriangle,
    risk: 'Moderate',
    description: 'Butter (including aged smen) is used in cooking, especially in couscous and baking. Fresh cheese appears in some dishes. Milk is in coffee (nous-nous) and smoothies. However, many tagines and salads use only olive oil.',
    commonDishes: 'Smen-based dishes, pastries, nous-nous, avocado smoothie, baghrir with butter, couscous',
    arabicPhrase: '"Andi hassasiya men l-hlib" (I have an allergy to milk/dairy)',
  },
  {
    allergen: 'Eggs',
    icon: AlertTriangle,
    risk: 'Moderate',
    description: 'Eggs appear in pastilla filling, kefta tagine, briouats, and many pastries. Some smoothies include raw egg. However, most tagines, couscous, grilled meats, and salads are egg-free.',
    commonDishes: 'Pastilla, kefta tagine with eggs, briouats, Berber omelet, some pastries, smoothies',
    arabicPhrase: '"Andi hassasiya men l-beid" (I have an allergy to eggs)',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST FOOD CITIES
   ═══════════════════════════════════════════════════════════════ */

const bestFoodCities = [
  {
    city: 'Fes',
    icon: Crown,
    title: 'The Culinary Capital',
    description:
      'Fes is universally considered Morocco\'s gastronomic heart. Fassi cuisine has been refined over 1,200 years with strong Andalusian influence, producing the country\'s most elegant and complex dishes. The medina\'s food souks are the most extensive in Morocco, with entire streets dedicated to single ingredients.',
    mustTry: ['Pastilla', 'Rfissa', 'Fassi tagine', 'Sellou', 'Fresh bread from wood-fired ovens'],
    diningScene: 'Traditional palace restaurants, medina food stalls, family cooking classes',
  },
  {
    city: 'Marrakech',
    icon: Flame,
    title: 'The Street Food Capital',
    description:
      'Marrakech has the most exciting street food scene in Africa. Jemaa el-Fnaa transforms nightly into the world\'s largest open-air restaurant with over 100 food stalls. The medina\'s narrow alleys hide extraordinary hole-in-the-wall restaurants and specialty stalls that have served the same dishes for generations.',
    mustTry: ['Tanjia', 'Mechoui', 'Jemaa el-Fnaa night food', 'Snails', 'Fresh orange juice'],
    diningScene: 'Jemaa el-Fnaa stalls, medina restaurants, rooftop dining, luxury riads',
  },
  {
    city: 'Essaouira',
    icon: Compass,
    title: 'The Seafood Capital',
    description:
      'Essaouira\'s fishing port is one of Morocco\'s great food spectacles. The daily catch is grilled on the spot at the open-air port restaurants. The town\'s relaxed coastal atmosphere extends to its dining scene, which is less hectic than Marrakech or Fes but equally rewarding.',
    mustTry: ['Port-grilled fish', 'Seafood pastilla', 'Sardines with chermoula', 'Argan oil amlou', 'Sea urchin'],
    diningScene: 'Port fish grills, medina restaurants, ocean-view cafes, argan cooperatives',
  },
  {
    city: 'Casablanca',
    icon: Building,
    title: 'The Cosmopolitan Scene',
    description:
      'Morocco\'s largest city has its most cosmopolitan food scene. From the seafood stalls at the Central Market to innovative fusion restaurants in the Corniche, Casablanca offers the widest range of dining experiences. The city also has Morocco\'s best patisseries, reflecting strong French culinary influence.',
    mustTry: ['Central Market seafood', 'Patisserie Bennis pastries', 'Bocadillos', 'Avocado smoothie', 'Babouche'],
    diningScene: 'Central Market, Art Deco district, Corniche, Habous Quarter, international restaurants',
  },
  {
    city: 'Meknes',
    icon: Award,
    title: 'The Hidden Gem',
    description:
      'Often overlooked by tourists, Meknes has one of Morocco\'s most underrated food scenes. The medina food stalls are patronized almost exclusively by locals, which means better quality, lower prices, and more authentic experiences. Meknes is also the center of Morocco\'s olive and wine production.',
    mustTry: ['Khlii (preserved meat)', 'Meknes olive varieties', 'Kaab el-ghazal', 'Local wine', 'Stuffed msemen'],
    diningScene: 'Medina food stalls, olive souks, local restaurants, nearby Volubilis day trips',
  },
  {
    city: 'Chefchaouen',
    icon: Mountain,
    title: 'The Mountain Kitchen',
    description:
      'The blue-washed mountain town has a distinct Riffian cuisine influenced by Berber and Andalusian traditions. The food is simpler and heartier than in the imperial cities, with an emphasis on local goat cheese, mountain herbs, and hearty soups. The relaxed pace extends to the dining experience.',
    mustTry: ['Bissara', 'Riffian couscous', 'Fresh goat cheese', 'Baghrir with mountain honey', 'Herb tea'],
    diningScene: 'Place Outa el-Hammam cafes, medina restaurants, family-run guesthouses',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RESTAURANT PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { category: 'Street Food Snack', examples: 'Msemen, sfinj, maakouda, baghrir', price: 'From 2-10 MAD', dailyBudget: 'From 50 MAD/day' },
  { category: 'Street Food Meal', examples: 'Brochettes, bocadillos, grilled sardines, harira', price: 'From 15-40 MAD', dailyBudget: 'From 80 MAD/day' },
  { category: 'Local Restaurant', examples: 'Tagine, couscous, kefta plate with bread and tea', price: 'From 40-80 MAD', dailyBudget: 'From 120 MAD/day' },
  { category: 'Mid-Range Restaurant', examples: 'Starter, main course, dessert, and drink', price: 'From 100-200 MAD', dailyBudget: 'From 300 MAD/day' },
  { category: 'Fine Dining / Riad', examples: 'Multi-course tasting menu with wine', price: 'From 300-600 MAD', dailyBudget: 'From 700 MAD/day' },
  { category: 'Fresh Orange Juice', examples: 'Street carts and juice vendors', price: 'From 5 MAD', dailyBudget: 'From 15 MAD/day' },
  { category: 'Mint Tea', examples: 'Cafes and restaurants', price: 'From 5-25 MAD', dailyBudget: 'From 15 MAD/day' },
  { category: 'Bottled Water (1.5L)', examples: 'Shops and vendors', price: 'From 5 MAD', dailyBudget: 'From 10 MAD/day' },
  { category: 'Cooking Class', examples: 'Half-day with market visit and lunch', price: 'From 400 MAD', dailyBudget: 'One-time experience' },
  { category: 'Food Tour (Guided)', examples: 'Group walking tour with 8-12 tastings', price: 'From 350 MAD', dailyBudget: 'One-time experience' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MOROCCAN DESSERTS & SWEETS
   ═══════════════════════════════════════════════════════════════ */

const desserts = [
  {
    name: 'Chebakia',
    description: 'Flower-shaped pastry made from strips of dough woven into a rosette, deep-fried, dipped in honey syrup, and sprinkled with sesame seeds. The defining sweet of Ramadan, but available year-round at bakeries.',
    price: 'From 3 MAD each',
  },
  {
    name: 'Kaab el-Ghazal (Gazelle Horns)',
    description: 'Elegant crescent-shaped pastries filled with almond paste scented with orange blossom water and dusted with powdered sugar. The finest Moroccan pastry, requiring great skill to shape properly.',
    price: 'From 5 MAD each',
  },
  {
    name: 'Ghriba',
    description: 'Moroccan cookies that come in many varieties: almond, sesame, coconut, and semolina. They are crumbly, sandy-textured, and melt in your mouth. Best bought at local bakeries, not tourist shops.',
    price: 'From 2 MAD each',
  },
  {
    name: 'Sellou (Sfouf)',
    description: 'A rich, dense confection of toasted flour, ground almonds, sesame seeds, butter, and honey. Traditionally served during Ramadan for its energy-boosting properties. An acquired taste with an extraordinary depth of flavor.',
    price: 'From 30 MAD per portion',
  },
  {
    name: 'Pastilla au Lait',
    description: 'A sweet dessert version of the famous pastilla, with layers of crispy warqa pastry and a creamy milk and almond custard, dusted with cinnamon. Found at pastry shops and served at special occasions.',
    price: 'From 20 MAD per slice',
  },
  {
    name: 'M\'hanncha (Snake Cake)',
    description: 'A coiled pastry resembling a snake, filled with almond paste flavored with orange blossom and cinnamon. Baked until golden and drizzled with honey. A showpiece dessert served at celebrations.',
    price: 'From 15 MAD per slice',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MOROCCAN SPICES
   ═══════════════════════════════════════════════════════════════ */

const moroccanSpices = [
  {
    name: 'Ras el Hanout',
    description: 'Literally "head of the shop," this is the spice merchant\'s signature blend of 12-30 spices including cardamom, clove, cinnamon, cumin, coriander, turmeric, black pepper, and sometimes dried rose petals. Every merchant has their own secret recipe.',
    use: 'Tagines, couscous, grilled meats, rice dishes',
    buyingTip: 'Buy from reputable spice shops in the medina. Ask to smell before buying. Good ras el hanout should be complex and aromatic, not dusty.',
  },
  {
    name: 'Cumin (Kamoun)',
    description: 'The most used single spice in Moroccan cooking. Earthy, warm, and slightly nutty. You will find cumin on every table in Morocco, often alongside salt, as a condiment for grilled meats, soups, and salads.',
    use: 'Grilled meats, tagines, harira, salads, as a table condiment',
    buyingTip: 'Whole cumin seeds retain flavor longer than ground. Buy whole seeds and grind at home for the best flavor.',
  },
  {
    name: 'Saffron (Za\'faran)',
    description: 'Morocco produces world-class saffron in the Taliouine region. Moroccan saffron has a deep red color and intense aroma. It is used sparingly in tagines, pastilla, and special-occasion dishes.',
    use: 'Tagines, pastilla, rice dishes, special sauces, tanjia',
    buyingTip: 'Real saffron costs from 30-60 MAD per gram. If it is cheap, it is fake (usually safflower or turmeric). Buy in Taliouine or from trusted medina shops.',
  },
  {
    name: 'Preserved Lemons (L\'hamd Marakad)',
    description: 'Not a spice but an essential Moroccan condiment. Lemons preserved in salt and their own juice for weeks until the rind becomes soft and intensely flavored. The rind is used, not the flesh, adding a unique salty-citrus depth.',
    use: 'Chicken tagine, fish dishes, salads, tanjia',
    buyingTip: 'Available at every spice shop. Look for lemons that are soft and uniform in color. Or buy fresh lemons and salt and make your own in 30 days.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the most famous Moroccan dish?',
    answer:
      'Tagine is Morocco\'s most iconic dish. Slow-cooked in a conical clay pot, it comes in dozens of varieties including lamb with prunes and almonds, chicken with preserved lemons and olives, and vegetable tagines. Couscous, served on Fridays as a family tradition, is equally central to Moroccan cuisine. Together, they represent the soul of Moroccan cooking.',
  },
  {
    question: 'Is Moroccan street food safe to eat?',
    answer:
      'Yes, Moroccan street food is generally safe if you follow basic precautions. Eat at stalls with high turnover where food is cooked fresh in front of you. Avoid pre-cooked food that has been sitting out, and drink bottled water only. Most travelers experience no issues. If you have a very sensitive stomach, start with cooked foods and avoid raw salads at street stalls for the first day or two.',
  },
  {
    question: 'How much does food cost in Morocco?',
    answer:
      'Morocco offers excellent value for food. Street food snacks cost from 2-10 MAD. A full street food meal (brochettes with bread and salad) costs from 20-40 MAD. A local restaurant tagine or couscous with bread and tea costs from 40-80 MAD. Mid-range restaurants charge from 100-200 MAD per meal. Fine dining starts from 300 MAD. Fresh orange juice is from 5 MAD and mint tea from 5 MAD.',
  },
  {
    question: 'Can vegetarians and vegans eat well in Morocco?',
    answer:
      'Vegetarians have good options including vegetable tagines, couscous with seven vegetables, zaalouk (eggplant salad), briouats with cheese, and abundant salads. Vegans need more planning since butter (smen) and honey are common, but bessara, vegetable dishes cooked in olive oil, and fresh produce are widely available. Say "bla lhem" (without meat) when ordering. Some riads in Marrakech now offer dedicated vegan menus.',
  },
  {
    question: 'What should I eat for breakfast in Morocco?',
    answer:
      'A traditional Moroccan breakfast includes msemen or baghrir flatbreads with honey and butter, fresh bread (khobz) with olive oil, cheese, and jam, bissara (fava bean soup) in the north, hard-boiled eggs, Moroccan mint tea, and fresh-squeezed orange juice. Most riads and hotels serve a generous Moroccan breakfast spread that is one of the highlights of any trip.',
  },
  {
    question: 'What is Moroccan dining etiquette?',
    answer:
      'Key etiquette rules: eat with your right hand only, use bread (khobz) as your utensil to scoop food, eat from the section of the communal dish closest to you, accept mint tea when offered (refusing is impolite), wash hands before and after meals, say "Bismillah" before eating, and remove shoes if dining on floor cushions. Complimenting the food generously is always appreciated.',
  },
  {
    question: 'Which Moroccan city has the best food?',
    answer:
      'Fes is widely considered Morocco\'s culinary capital, with the most refined cuisine refined over 1,200 years. Marrakech has the best street food scene, especially the nightly spectacle at Jemaa el-Fnaa. Essaouira is the seafood capital, Meknes is the underrated gem with great food at lower prices, and Casablanca has the most cosmopolitan and diverse dining scene.',
  },
  {
    question: 'How do I handle food allergies in Morocco?',
    answer:
      'Carry a dietary card translated into Arabic and French listing your allergies. Common allergens in Moroccan food include wheat (bread, couscous, pastry), nuts (almonds are extremely common), dairy (butter/smen), and eggs (pastilla, briouats). Learn "andi hassasiya men..." (I have an allergy to...) followed by the ingredient. Alert your server before ordering and ask about ingredients in each dish.',
  },
  {
    question: 'What is the best time of year to visit Morocco for food?',
    answer:
      'Spring (March-May) and autumn (September-November) offer the best combination of pleasant weather and seasonal produce. During Ramadan, daytime food options are limited but the evening iftar experience is extraordinary. Summer fruit is exceptional but temperatures in inland cities make midday dining uncomfortable. Winter is excellent for hearty soups and stews.',
  },
  {
    question: 'Should I tip at restaurants in Morocco?',
    answer:
      'Tipping is customary but not as high as in some Western countries. At local restaurants, rounding up the bill or leaving 5-10 MAD is appreciated. At mid-range and fine dining restaurants, 10% of the bill is standard. At street food stalls, tipping is not expected but small change is welcome. Tour guides and cooking class instructors appreciate from 50-100 MAD tips.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL FOOD CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const seasonalFood = [
  {
    season: 'Spring (March - May)',
    icon: Flower2,
    highlights: ['Fresh fava beans in season (for bissara and salads)', 'Artichoke tagines at their best', 'Fresh herbs at peak (cilantro, parsley, mint)', 'Orange blossom harvesting season', 'Early-season melons and berries'],
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    highlights: ['Peak fruit season: figs, peaches, watermelon, grapes', 'Fresh sardine season on the coast', 'Cold soups and salads feature prominently', 'Prickly pear cactus fruit (available from street vendors)', 'Refreshing avocado and almond smoothies'],
  },
  {
    season: 'Autumn (September - November)',
    icon: TreeDeciduous,
    highlights: ['Date harvest season (especially from Zagora and Erfoud)', 'Pomegranate season (used in salads and juices)', 'Olive harvest begins in October', 'New-season argan oil available', 'Quince tagines appear on menus'],
  },
  {
    season: 'Winter (December - February)',
    icon: Snowflake,
    highlights: ['Peak citrus season: oranges, clementines, tangerines', 'Hearty tagines and harira soups at their best', 'Fresh olive oil from November harvest', 'Preserved food season (making khlii, preserved lemons)', 'Ramadan specialties if it falls in winter months'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFoodGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-food-tours.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Moroccan Food Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Utensils className="w-4 h-4" />
            Complete Food Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            What to Eat in Morocco:
            <br className="hidden md:block" /> The Ultimate Food Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From iconic tagines and couscous to hidden street food gems and regional specialties.
            Everything you need to know about eating your way through Morocco in 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Moroccan Food Will Change the Way You Think About Cuisine
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan cuisine is one of the most diverse, sophisticated, and deeply rewarding
                food traditions on earth. Shaped by over a thousand years of Berber, Arab,
                Andalusian, Ottoman, and French influences, it produces flavors that are entirely
                unique: the sweet-and-savory interplay of cinnamon and cumin, the brightness of
                preserved lemons against rich slow-cooked meats, the warmth of saffron threading
                through every dish.
              </p>
              <p>
                What makes Moroccan food exceptional is not just the individual dishes but the
                entire culture surrounding them. Meals are communal, eaten from shared platters.
                Bread is an utensil. Tea is a ceremony. Every recipe carries centuries of family
                tradition, and every city has its own culinary identity that locals defend with
                passion.
              </p>
              <p>
                This guide covers everything you need to know about eating in Morocco: the iconic
                dishes you must try, the street food that will surprise you, the beverages that
                define daily life, the etiquette that will earn you respect, the regional
                specialties worth traveling for, and practical tips for vegetarians, vegans, and
                travelers with food allergies. Whether you are planning your first trip or your
                fifth, this is your complete companion to the Moroccan table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Must-Try Main Dishes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Must-Try Moroccan Dishes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            These are the signature dishes that define Moroccan cuisine. Do not leave the country without trying every one.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and vary by city, restaurant type, and season.
          </p>

          <div className="space-y-8">
            {mainDishes.map((dish, index) => {
              const DishIcon = dish.icon;
              return (
                <div key={dish.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {dish.name}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {dish.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mt-1">
                        <DishIcon className="w-3 h-3" />
                        <span>{dish.priceRange}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{dish.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Popular Varieties</h4>
                      <div className="space-y-1.5">
                        {dish.varieties.map((variety, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {variety}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Where to eat it:</span> {dish.whereToBest}
                        </p>
                      </div>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Insider tip:</span> {dish.insiderTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Street Food ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Store className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Street Food
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The real soul of Moroccan food lives on the streets. These are the snacks, sandwiches, and quick bites that fuel daily life from Tangier to the Sahara.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streetFoods.map((food) => (
              <div key={food.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {food.name}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {food.price}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{food.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  <span><span className="font-semibold">Best in:</span> {food.bestIn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beverages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Beverages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the ritual of mint tea to the freshest orange juice you have ever tasted, Moroccan drinks are an experience in themselves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {beverages.map((drink) => {
              const DrinkIcon = drink.icon;
              return (
                <div key={drink.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DrinkIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {drink.name}
                      </h3>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">{drink.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{drink.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span><span className="font-semibold text-[var(--text-primary)]">Where:</span> {drink.whereTo}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span><span className="font-semibold text-[var(--text-primary)]">Fun fact:</span> {drink.funFact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Desserts & Sweets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Desserts &amp; Sweets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan pastries and sweets are works of art. Honey, almonds, orange blossom water, and sesame are the defining flavors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <div key={dessert.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {dessert.name}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                    {dessert.price}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{dessert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Moroccan Spices ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Moroccan Spices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Spices are the foundation of Moroccan cooking. These are the ones you need to know and the ones worth bringing home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {moroccanSpices.map((spice) => (
              <div key={spice.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {spice.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{spice.description}</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                    <Utensils className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span><span className="font-semibold text-[var(--text-primary)]">Used in:</span> {spice.use}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                    <Info className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span><span className="font-semibold text-[var(--text-primary)]">Buying tip:</span> {spice.buyingTip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dining Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Dining Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding these customs will transform your dining experience and earn the respect and warmth of your Moroccan hosts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteRules.map((rule) => {
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

      {/* ── Food by Region ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Food by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every region of Morocco has its own culinary identity. Here is what to expect across the country&apos;s diverse food landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodByRegion.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {region.region}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{region.description}</p>
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Regional Specialties</h4>
                    <div className="space-y-1.5">
                      {region.specialties.map((specialty, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Key ingredients:</span> {region.notableIngredients}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vegetarian & Vegan Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vegetarian &amp; Vegan Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            While Moroccan cuisine is traditionally meat-centric, vegetarians and vegans can eat well with the right knowledge.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Say &quot;bla lhem&quot; (without meat) or &quot;bla lhem, bla hlib, bla beid&quot; (no meat, no dairy, no eggs) when ordering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {vegetarianOptions.map((option) => (
              <div key={option.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {option.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {option.price}
                    </span>
                    {option.veganFriendly && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-100 text-green-700">
                        Vegan
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food Allergies ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food Allergies in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential information for travelers with food allergies. Preparation and communication are key to eating safely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {allergyInfo.map((allergy) => {
              const AllergyIcon = allergy.icon;
              return (
                <div key={allergy.allergen} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AllergyIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {allergy.allergen}
                      </h3>
                      <span className={`text-xs font-semibold ${allergy.risk === 'Very High' ? 'text-red-600' : allergy.risk === 'High' ? 'text-orange-600' : 'text-yellow-600'}`}>
                        Risk: {allergy.risk}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{allergy.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <Utensils className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span><span className="font-semibold text-[var(--text-primary)]">Found in:</span> {allergy.commonDishes}</span>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-white rounded-lg border border-[var(--border-primary)]">
                      <BookOpen className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Say:</span> {allergy.arabicPhrase}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                General Allergy Tips for Morocco
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Carry a dietary card translated into Arabic and French',
                  'Download a translation app with offline Arabic support',
                  'Alert your riad or hotel in advance about allergies',
                  'Stick to simple, single-ingredient dishes when unsure',
                  'Tagines and grilled meats are generally the safest options',
                  'Carry antihistamines and any prescribed EpiPens',
                  'Ask about ingredients before ordering, every time',
                  'When in doubt, choose fruit, grilled meat, and rice',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Food Cities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Food Cities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has its own culinary personality. Here is where to go for the best food experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestFoodCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                      <span className="text-xs font-medium text-[var(--color-gold)]">{city.title}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Must Try</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {city.mustTry.map((dish, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)]">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-primary)]">
                    <Store className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span><span className="font-semibold text-[var(--text-primary)]">Dining scene:</span> {city.diningScene}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Restaurant Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Restaurant &amp; Food Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for food across Morocco, from street snacks to fine dining.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Tourist areas and peak season (October-April) may be 15-30% higher.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Examples</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Daily Budget</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.category}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.examples}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.dailyBudget}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Food Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Food Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What is in season and what to eat during each time of year. Timing your trip to coincide with seasonal ingredients can elevate your food experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalFood.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {season.highlights.map((highlight, i) => (
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

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Moroccan Food
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Moroccan Food
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/cuisine" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Cuisine Deep Dive
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the history, techniques, and cultural significance behind Morocco&apos;s legendary culinary traditions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/street-food" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Store className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Street Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A deep dive into Morocco&apos;s vibrant street food scene with city-by-city recommendations and vendor tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cooking-classes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Classes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Learn to make tagine, couscous, and pastilla in hands-on classes with local chefs across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-tours" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Food Tours
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Guided and self-guided food tours across Morocco&apos;s greatest food cities with prices and booking tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-vegan-food" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Leaf className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Vegan Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to eating plant-based in Morocco with restaurant picks, phrases, and safe dish recommendations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-halal-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Halal Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything Muslim travelers need to know about halal food, prayer facilities, and cultural tips in Morocco.
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
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Taste Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the sizzling stalls of Jemaa el-Fnaa to the refined kitchens of Fes, Morocco&apos;s
            food scene is waiting. Start planning your culinary journey with our complete city guides,
            food tour recommendations, and cooking class bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-food-tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-[var(--color-accent)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Utensils className="w-5 h-5" />
              Browse Food Tours
            </Link>
            <Link
              href="/cooking-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Flame className="w-5 h-5" />
              Book a Cooking Class
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-6">
            Food tours from 350 MAD per person. Cooking classes from 400 MAD with market visit.
          </p>
        </div>
      </section>
    </>
  );
}

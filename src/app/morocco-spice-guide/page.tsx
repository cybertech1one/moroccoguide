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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Award,
  BookOpen,
  ShoppingBag,
  Package,
  Sparkles,
  Leaf,
  Users,
  Eye,
  ThermometerSun,
  Utensils,
  Plane,
  HelpCircle,
  Globe,
  Building,
  FlaskConical,
  Search,
  Flame,
  Scale,
  Flower2,
  Droplets,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Spice Guide 2026 | Ras El Hanout, Saffron, Buying Tips & Prices',
  description:
    'The complete guide to Moroccan spices. Learn about ras el hanout, saffron from Taliouine, cumin, fenugreek, dried rosebuds, orange blossom water, and 15+ essential spices. Where to buy in souks, how to spot quality, price guide from 5 MAD, spice tours, customs tips, and authentic recipes.',
  keywords: [
    'Morocco spices',
    'Moroccan spice guide',
    'buying spices Morocco',
    'ras el hanout guide',
    'Moroccan saffron Taliouine',
    'Morocco cumin',
    'spice souks Morocco',
    'Marrakech spice market',
    'Fes spice souk',
    'Moroccan spice blends',
    'Morocco paprika',
    'Moroccan turmeric',
    'Morocco cinnamon',
    'Moroccan ginger',
    'fenugreek Morocco',
    'orange blossom water Morocco',
    'dried rosebuds Morocco',
    'spice tour Morocco',
    'taking spices home Morocco',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-spice-guide`,
  },
  openGraph: {
    title: 'Morocco Spice Guide 2026 | Ras El Hanout, Saffron & Prices',
    description:
      'Everything you need to know about buying authentic spices in Morocco. Essential spices, quality tests, fair prices, best souks, and how to bring spices home.',
    url: `${BASE_URL}/morocco-spice-guide`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/photo-morocco-spices.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful pyramids of Moroccan spices displayed at a traditional souk market stall',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Spice Guide | Ras El Hanout, Saffron & Buying Tips',
    description:
      'Complete guide to Moroccan spices: ras el hanout, saffron, cumin, fenugreek, rosebuds, and more. Best souks, quality tips, and price guide from 5 MAD.',
    images: [`${BASE_URL}/images/photo-morocco-spices.webp`],
  },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-spice-guide`,
  name: 'Morocco Spice Guide 2026 | Ras El Hanout, Saffron & Buying Tips',
  description:
    'The complete guide to buying authentic spices in Morocco. Essential spices, blends, quality tests, prices, best souks, spice tours, and customs tips.',
  url: `${BASE_URL}/morocco-spice-guide`,
  image: `${BASE_URL}/images/photo-morocco-spices.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-spice-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Spice Guide', item: `${BASE_URL}/morocco-spice-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is ras el hanout and what spices are in it?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ras el hanout means "head of the shop" in Arabic, a premium blend of 12-30 spices including cumin, coriander, turmeric, paprika, cinnamon, ginger, cardamom, cloves, nutmeg, and rose petals. Each merchant has their own secret recipe.' },
    },
    {
      '@type': 'Question',
      name: 'How much do spices cost in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Common spices cost from 5-15 MAD per 100g at souks. Ras el hanout from 20-60 MAD per 100g. Saffron from 15-40 MAD per gram. Tourist souks charge 2-3 times more.' },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if Moroccan saffron is real?',
      acceptedAnswer: { '@type': 'Answer', text: 'Real saffron threads are crimson with orange tips, release color slowly in warm water over 10-15 minutes, and stay intact. Fake saffron releases color instantly and dissolves. Always buy from Taliouine-sourced vendors when possible.' },
    },
    {
      '@type': 'Question',
      name: 'Where are the best spice souks in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Top markets: Rahba Kedima in Marrakech (widest selection), Souk El Attarine in Fes (best authenticity), Meknes medina (lowest prices), and Essaouira spice alley (relaxed atmosphere).' },
    },
    {
      '@type': 'Question',
      name: 'Can I bring Moroccan spices on a plane?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, dried spices are allowed in carry-on and checked luggage. Pack in sealed bags. Declare at customs in Australia, New Zealand, and the USA. Whole spices clear customs more easily than powders.' },
    },
    {
      '@type': 'Question',
      name: 'Should I buy whole or ground spices in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Whole spices last 2-3 years versus 6-12 months for ground and are harder to adulterate. The exception is ras el hanout, traditionally sold pre-blended.' },
    },
    {
      '@type': 'Question',
      name: 'What spices do I need to cook Moroccan food at home?',
      acceptedAnswer: { '@type': 'Answer', text: 'The essential eight: cumin, paprika, turmeric, ground ginger, cinnamon, black pepper, coriander, and saffron threads. Adding ras el hanout gives a convenient shortcut blend.' },
    },
    {
      '@type': 'Question',
      name: 'How long do Moroccan spices stay fresh?',
      acceptedAnswer: { '@type': 'Answer', text: 'Whole spices last 2-3 years in airtight containers. Ground spices 6-12 months. Saffron threads 2-3 years if kept dry and dark. Store in glass jars, never above the stove.' },
    },
    {
      '@type': 'Question',
      name: 'Are Moroccan spice tours worth it?',
      acceptedAnswer: { '@type': 'Answer', text: 'Excellent for first-time visitors. From 150-300 MAD per person including market navigation, spice identification, tasting, and buying tips. Many include a cooking class.' },
    },
  ],
};

/* ===================================================================
   DATA: ESSENTIAL SPICES
   =================================================================== */

const essentialSpices = [
  { name: 'Ras El Hanout', arabic: 'راس الحانوت', icon: Award, flavor: 'Complex, warm, aromatic, slightly sweet', uses: 'Tagines, couscous, meat rubs, rice dishes, roasted vegetables', description: 'The king of Moroccan spice blends. Every spice merchant creates their own secret recipe with 12 to 30 spices. The name means "head of the shop," indicating the very best a merchant offers. Common ingredients include cumin, coriander, turmeric, paprika, cinnamon, ginger, cardamom, cloves, nutmeg, allspice, dried rosebuds, and sometimes lavender or ash berries. No two blends are identical.', tip: 'Ask to smell before buying. Quality ras el hanout should have a complex, layered aroma with no single spice overpowering the others.', price: 'From 20 MAD per 100g' },
  { name: 'Saffron (Zaafrane)', arabic: 'زعفران', icon: Sparkles, flavor: 'Honey-like, floral, slightly metallic, earthy', uses: 'Tagines, rice, tea, pastries, rfissa, seffa medfouna', description: 'Moroccan saffron from Taliouine in the Anti-Atlas is among the finest in the world. Each crocus flower yields only three stigma threads, and it takes over 150,000 flowers to produce one kilogram. The harvest runs October through November, when families gather at dawn to pick the purple flowers. Taliouine saffron carries a protected geographical indication and its crocin content rivals Iranian varieties.', tip: 'Always buy threads, never powder. Test by placing a thread in warm water; genuine saffron releases color slowly over 10 minutes and the thread stays intact. If the color bleeds instantly, it is dyed safflower or corn silk.', price: 'From 15 MAD per gram' },
  { name: 'Cumin (Kamoun)', arabic: 'كمون', icon: Leaf, flavor: 'Warm, earthy, nutty, slightly bitter', uses: 'Tagines, kefta, soups, harira, mechoui, salads, bread', description: 'The backbone of Moroccan cooking and the most widely used spice in the country. Cumin is present in virtually every savory Moroccan dish. Moroccan cumin is typically more aromatic than supermarket cumin due to the North African terroir and traditional sun-drying methods.', tip: 'Buy whole seeds and toast them lightly in a dry pan before grinding for the most intense flavor. Pre-ground cumin loses aroma rapidly.', price: 'From 5 MAD per 100g' },
  { name: 'Paprika (Felfla Hlouwa)', arabic: 'فلفلة حلوة', icon: Flame, flavor: 'Sweet, mild, slightly smoky, earthy', uses: 'Tagines, chermoula, grilled meats, fish, egg dishes, dips', description: 'Ranges from sweet to mildly hot, providing the deep red color of many Moroccan dishes. Essential in chermoula, the marinade for fish and seafood. Moroccan varieties tend to be slightly smokier than Hungarian paprika.', tip: 'Look for vibrant deep red color. Faded or brownish paprika has lost its flavor. Store away from light.', price: 'From 8 MAD per 100g' },
  { name: 'Turmeric (Kharqoum)', arabic: 'خرقوم', icon: FlaskConical, flavor: 'Warm, slightly bitter, earthy, peppery', uses: 'Tagines, rice, soups, preserved lemons, vegetable dishes', description: 'Valued for its warm flavor and golden-yellow color, turmeric is a Moroccan kitchen staple. Often paired with ginger and black pepper to enhance curcumin absorption. It features in chicken tagines and vegetable stews.', tip: 'A little goes a long way. Too much creates bitterness. Start with a quarter teaspoon per serving.', price: 'From 5 MAD per 100g' },
  { name: 'Cinnamon (Qarfa)', arabic: 'قرفة', icon: BookOpen, flavor: 'Sweet, warm, woody, delicately spicy', uses: 'Pastilla, tagines, pastries, tea, couscous with cinnamon sugar', description: 'Cinnamon bridges sweet and savory in Moroccan cuisine. It defines pastilla (the famous pie dusted with sugar and cinnamon) and appears in both meat tagines and pastries. Morocco uses primarily Cassia cinnamon for its robust warmth.', tip: 'Buy sticks rather than ground. They last longer and one stick flavors an entire tagine.', price: 'From 10 MAD per 100g' },
  { name: 'Ginger (Skinjbir)', arabic: 'سكنجبير', icon: Heart, flavor: 'Warm, pungent, slightly sweet, zesty', uses: 'Tagines, soups, tea, cookies, spice blends, marinades', description: 'Both fresh and dried ginger are indispensable in Moroccan cooking. Ground ginger warms tagines and soups, while fresh ginger is grated into tea and marinades. Ginger tea with mint and honey is a popular digestive drink across the country.', tip: 'Dried and fresh ginger are not interchangeable. Buy both: ground for tagines, fresh root for tea.', price: 'From 8 MAD per 100g' },
  { name: 'Black Pepper (Ibzar)', arabic: 'إبزار', icon: Eye, flavor: 'Sharp, hot, pungent, slightly fruity', uses: 'Universal seasoning, tagines, soups, grilled meats, kefta', description: 'A fundamental component of almost every Moroccan spice blend. Markets sell Tellicherry and Malabar peppercorns. Freshly ground is always preferred over pre-ground for superior aroma and pungency.', tip: 'Buy whole peppercorns and use a pepper mill. Pre-ground pepper loses its volatile oils within weeks.', price: 'From 10 MAD per 100g' },
  { name: 'Fenugreek (Helba)', arabic: 'حلبة', icon: Leaf, flavor: 'Maple-like, nutty, slightly bitter, earthy', uses: 'Spice blends, bread, ras el hanout, traditional medicine, rfissa', description: 'Small golden-brown seeds with a distinctive maple-like aroma. Fenugreek is a key ingredient in some ras el hanout recipes and appears in rfissa, the traditional postpartum dish served to new mothers. Lightly toasting the seeds before grinding mellows the bitterness and releases a deep, caramel-like sweetness.', tip: 'Use sparingly. Even half a teaspoon too much can make a dish taste bitter. Toast seeds gently until fragrant before grinding.', price: 'From 5 MAD per 100g' },
  { name: 'Dried Rosebuds (Ward)', arabic: 'ورد', icon: Flower2, flavor: 'Floral, perfumed, delicate, slightly sweet', uses: 'Ras el hanout, teas, desserts, bath rituals, room fragrance', description: 'Morocco grows Rosa damascena in the Dades Valley (the "Valley of Roses") and the Kelaat M\'Gouna region. Harvested in April and May, the petals and buds are dried for use in ras el hanout, herbal teas, and beauty products. The annual Rose Festival in Kelaat M\'Gouna celebrates this tradition.', tip: 'Buy whole rosebuds rather than loose petals. They retain fragrance longer. Steep 3-4 buds in hot water for a calming evening tea.', price: 'From 15 MAD per 50g' },
  { name: 'Orange Blossom Water (Zhaar)', arabic: 'ماء الزهر', icon: Droplets, flavor: 'Fragrant, citrusy-floral, perfumed, refreshing', uses: 'Pastries, salads, drinks, fruit salads, msemen, smoothies', description: 'Distilled from the blossoms of bitter orange trees (Citrus aurantium), orange blossom water is a cornerstone of Moroccan pastry and drink-making. It perfumes cookies like kaab el ghazal (gazelle horns), is drizzled over fruit salads and couscous with cinnamon sugar, and is mixed into fresh orange juice at street stalls.', tip: 'Buy glass bottles from reputable shops. Plastic degrades the flavor. A few drops go far; too much makes food taste soapy.', price: 'From 10 MAD per 250ml bottle' },
] as const;

/* ===================================================================
   DATA: SPICE BLENDS
   =================================================================== */

const spiceBlends = [
  {
    name: 'Ras El Hanout',
    ingredients: 'Cumin, coriander, turmeric, paprika, cinnamon, ginger, black pepper, cardamom, cloves, nutmeg, allspice, rose petals, and more',
    bestFor: 'Tagines, couscous, meat rubs, roasted vegetables',
    icon: Award,
  },
  {
    name: 'Chermoula Spice Mix',
    ingredients: 'Paprika, cumin, coriander, garlic, parsley, cilantro, lemon, cayenne',
    bestFor: 'Fish and seafood marinade, grilled meats, vegetable dishes',
    icon: Utensils,
  },
  {
    name: 'Harira Spice Mix',
    ingredients: 'Ginger, turmeric, cinnamon, black pepper, cumin, coriander, nutmeg',
    bestFor: 'Harira soup (traditional Ramadan soup), lentil dishes',
    icon: Flame,
  },
  {
    name: 'Baharat',
    ingredients: 'Black pepper, coriander, cinnamon, cloves, cumin, cardamom, nutmeg, paprika',
    bestFor: 'Grilled meats, rice dishes, stews, meatballs',
    icon: Star,
  },
  {
    name: 'La Kama',
    ingredients: 'Ginger, turmeric, black pepper, cinnamon, nutmeg',
    bestFor: 'Chicken tagines, soups, refined dishes where subtlety is preferred',
    icon: Sparkles,
  },
] as const;

/* ===================================================================
   DATA: BEST SPICE SOUKS
   =================================================================== */

const bestSpiceSouks = [
  {
    city: 'Marrakech',
    souk: 'Rahba Kedima & Mellah Spice Souk',
    icon: Star,
    description:
      'The most famous spice market in Morocco. Rahba Kedima (the old grain square) is packed with spice vendors selling towering pyramids of colorful ground spices. The nearby Mellah market offers better prices with less tourist pressure. Expect intense haggling and a sensory overload of aromas.',
    tip: 'Walk past the first row of stalls (highest prices). The best deals are deeper inside the market away from the main tourist route.',
    priceLevel: 'High (tourist premium)',
  },
  {
    city: 'Fes',
    souk: 'Souk El Attarine',
    icon: Award,
    description:
      'Named after the Arabic word for perfumers and spice sellers, the Attarine souk in the Fes medina sits near the Qarawiyyin Mosque. This is where locals shop, so quality is high and prices are more reasonable than Marrakech. Many families have sold spices here for generations.',
    tip: 'Visit in the morning when merchants are more relaxed and willing to explain their products. Afternoon crowds make browsing harder.',
    priceLevel: 'Moderate',
  },
  {
    city: 'Meknes',
    souk: 'Medina Spice Market',
    icon: Globe,
    description:
      'Often overlooked by tourists, Meknes offers some of the best spice prices in Morocco. The old medina market caters primarily to locals, which means authentic products at fair prices without the aggressive sales tactics found in more tourist-heavy cities.',
    tip: 'Combine a spice shopping trip with a visit to the grandiose Bab Mansour gate and the nearby food market for a complete Meknes experience.',
    priceLevel: 'Low (best value)',
  },
  {
    city: 'Essaouira',
    souk: 'Medina Spice Alley',
    icon: MapPin,
    description:
      'The laid-back Atlantic port town has a compact medina with a dedicated spice alley. Vendors here tend to be less aggressive and more willing to educate visitors. Essaouira is also famous for its seafood, so look for chermoula spice blends specifically designed for fish.',
    tip: 'Look for spice shops near the fishing port that sell fresh chermoula blends made daily.',
    priceLevel: 'Moderate',
  },
  {
    city: 'Chefchaouen',
    souk: 'Blue City Market',
    icon: Sparkles,
    description:
      'The blue city in the Rif mountains has a charming market where Riffian spice blends differ from southern Morocco. Find unique mountain herb blends and dried wild thyme, oregano, and lavender alongside standard Moroccan spices.',
    tip: 'Ask for Riffian spice blends with wild mountain herbs not commonly found elsewhere.',
    priceLevel: 'Low to moderate',
  },
] as const;

/* ===================================================================
   DATA: QUALITY TIPS
   =================================================================== */

const qualityTips = [
  {
    test: 'Smell Test',
    icon: Leaf,
    good: 'Strong, distinct aroma that is immediately recognizable. Fresh spices smell potent even at arm length.',
    bad: 'Weak, musty, or no aroma at all. Old spices may smell dusty or stale.',
  },
  {
    test: 'Color Test',
    icon: Eye,
    good: 'Vibrant, rich colors. Paprika should be deep red, turmeric bright golden, cumin warm brown.',
    bad: 'Faded, dull, or washed-out colors. Brownish paprika or pale turmeric has lost potency.',
  },
  {
    test: 'Texture Test',
    icon: FlaskConical,
    good: 'Ground spices should feel fine and slightly oily. Whole spices should be firm and unbroken.',
    bad: 'Gritty, sandy texture may indicate fillers like flour or sawdust. Clumps suggest moisture damage.',
  },
  {
    test: 'Taste Test',
    icon: Flame,
    good: 'A tiny pinch should deliver immediate, clear flavor. Cumin tastes earthy; paprika is mildly sweet.',
    bad: 'Bland, tasteless, or an unusual off-flavor. If you taste nothing, the spice has expired or been diluted.',
  },
  {
    test: 'Source Test',
    icon: ShieldCheck,
    good: 'Established spice shops in the medina, labeled bags with weights, merchants who encourage tasting.',
    bad: 'Plastic bags with no labels, vendors who refuse to let you smell or taste, pre-packaged tourist bundles.',
  },
  {
    test: 'Saffron Thread Test',
    icon: Search,
    good: 'Deep crimson threads with orange tips, releases color slowly in warm water over 10 minutes, threads stay intact.',
    bad: 'Uniform color, releases color instantly (dye), dissolves in water. Often dyed safflower or corn silk.',
  },
] as const;

/* ===================================================================
   DATA: PRICE GUIDE
   =================================================================== */

const spicePriceGuide = [
  { spice: 'Cumin (whole, 100g)', souk: 'From 5 MAD', touristShop: 'From 15-30 MAD', supermarket: 'From 10 MAD' },
  { spice: 'Paprika (ground, 100g)', souk: 'From 8 MAD', touristShop: 'From 20-40 MAD', supermarket: 'From 12 MAD' },
  { spice: 'Turmeric (ground, 100g)', souk: 'From 5 MAD', touristShop: 'From 15-30 MAD', supermarket: 'From 10 MAD' },
  { spice: 'Cinnamon sticks (100g)', souk: 'From 10 MAD', touristShop: 'From 25-50 MAD', supermarket: 'From 15 MAD' },
  { spice: 'Ginger (ground, 100g)', souk: 'From 8 MAD', touristShop: 'From 20-40 MAD', supermarket: 'From 12 MAD' },
  { spice: 'Black pepper (whole, 100g)', souk: 'From 10 MAD', touristShop: 'From 25-50 MAD', supermarket: 'From 15 MAD' },
  { spice: 'Ras el hanout (100g)', souk: 'From 20 MAD', touristShop: 'From 50-100 MAD', supermarket: 'From 30 MAD' },
  { spice: 'Saffron threads (1g)', souk: 'From 15 MAD', touristShop: 'From 30-60 MAD', supermarket: 'From 25 MAD' },
  { spice: 'Fenugreek seeds (100g)', souk: 'From 5 MAD', touristShop: 'From 10-20 MAD', supermarket: 'From 8 MAD' },
  { spice: 'Dried rosebuds (50g)', souk: 'From 15 MAD', touristShop: 'From 30-60 MAD', supermarket: 'From 20 MAD' },
  { spice: 'Orange blossom water (250ml)', souk: 'From 10 MAD', touristShop: 'From 25-40 MAD', supermarket: 'From 15 MAD' },
] as const;

/* ===================================================================
   DATA: COOKING USES
   =================================================================== */

const cookingUses = [
  {
    dish: 'Chicken Tagine with Preserved Lemons',
    spices: 'Cumin, ginger, turmeric, saffron, black pepper',
    icon: Utensils,
    description: 'The most iconic Moroccan dish. Slow-cooked chicken with preserved lemons and olives, seasoned with a warm blend of spices that penetrate the meat during long, gentle cooking.',
  },
  {
    dish: 'Harira Soup',
    spices: 'Ginger, turmeric, cinnamon, cumin, black pepper, coriander',
    icon: Flame,
    description: 'The traditional Ramadan soup made with lentils, chickpeas, and tomatoes. The spice blend creates a warming, restorative broth that Moroccans break their fast with every evening.',
  },
  {
    dish: 'Pastilla (B\'stilla)',
    spices: 'Cinnamon, ginger, saffron, black pepper, orange blossom water',
    icon: Star,
    description: 'An elaborate savory-sweet pie of shredded pigeon or chicken layered with spiced almonds in crispy warqa pastry, dusted with cinnamon and powdered sugar. Orange blossom water adds a floral signature note.',
  },
  {
    dish: 'Lamb Mechoui',
    spices: 'Cumin, paprika, coriander, garlic, salt',
    icon: Award,
    description: 'Whole roasted lamb rubbed with a cumin-paprika spice paste and slow-roasted until the meat falls off the bone. Served communally at celebrations and weddings.',
  },
  {
    dish: 'Chermoula Grilled Fish',
    spices: 'Paprika, cumin, coriander, garlic, cilantro, lemon',
    icon: Leaf,
    description: 'Fresh fish marinated in the bold chermoula paste, then grilled over charcoal. A coastal specialty from Essaouira and Casablanca that showcases the depth of Moroccan spice work.',
  },
] as const;

/* ===================================================================
   DATA: HEALTH BENEFITS
   =================================================================== */

const healthBenefits = [
  {
    spice: 'Turmeric (Curcumin)',
    icon: Heart,
    benefit: 'Powerful anti-inflammatory and antioxidant properties. Studies show curcumin may help reduce joint pain, improve brain function, and lower risk of chronic diseases.',
  },
  {
    spice: 'Cinnamon',
    icon: CheckCircle,
    benefit: 'May help regulate blood sugar levels and improve insulin sensitivity. Contains cinnamaldehyde which has anti-bacterial and anti-fungal properties.',
  },
  {
    spice: 'Ginger',
    icon: ThermometerSun,
    benefit: 'Effective against nausea, aids digestion, and has anti-inflammatory effects. Moroccan ginger tea is a traditional remedy for upset stomachs and colds.',
  },
  {
    spice: 'Cumin',
    icon: Sparkles,
    benefit: 'Rich in iron and may aid digestion by stimulating enzyme production. Traditional Moroccan medicine uses cumin tea to relieve bloating and gas.',
  },
  {
    spice: 'Saffron',
    icon: Award,
    benefit: 'Contains crocin and safranal, antioxidants linked to improved mood and memory. Research suggests it may help reduce symptoms of mild depression.',
  },
  {
    spice: 'Black Pepper (Piperine)',
    icon: ShieldCheck,
    benefit: 'Enhances absorption of other beneficial compounds, especially curcumin from turmeric, by up to 2,000%. Also aids digestion and has antioxidant properties.',
  },
  {
    spice: 'Fenugreek',
    icon: Leaf,
    benefit: 'Traditionally used in Morocco to aid lactation in new mothers. Modern studies suggest it may help regulate blood sugar and cholesterol levels.',
  },
] as const;

/* ===================================================================
   DATA: TRANSPORT TIPS
   =================================================================== */

const transportTips = [
  { tip: 'Dried spices are allowed in both carry-on and checked bags on most airlines worldwide', icon: Plane },
  { tip: 'Double-seal spices in zip-lock bags to prevent strong aromas from permeating your luggage', icon: Package },
  { tip: 'Buy whole spices when possible; customs officials are less suspicious of whole seeds than powders', icon: ShieldCheck },
  { tip: 'Declare spices at customs in Australia, New Zealand, and the USA to avoid fines or confiscation', icon: Globe },
  { tip: 'Vacuum-sealed bags from established spice shops make transport easier and preserve freshness longer', icon: CheckCircle },
  { tip: 'Keep purchase receipts from reputable shops in case customs officers ask about origin', icon: DollarSign },
  { tip: 'Orange blossom water and liquids under 100ml can go in carry-on; buy larger bottles for checked bags', icon: Droplets },
] as const;

/* ===================================================================
   DATA: FAQ
   =================================================================== */

const faqs = [
  {
    question: 'What is ras el hanout and what spices are in it?',
    answer:
      'Ras el hanout means "head of the shop" in Arabic and refers to a premium spice blend containing the best spices a merchant has. A typical blend includes 12-30 spices such as cumin, coriander, turmeric, paprika, cinnamon, ginger, black pepper, cardamom, cloves, nutmeg, allspice, fenugreek, and dried rose petals. Each merchant has their own secret recipe, making every blend unique.',
  },
  {
    question: 'How much do spices cost in Morocco?',
    answer:
      'Common spices like cumin, paprika, and turmeric cost from 5-15 MAD per 100g at local souks. Ras el hanout costs from 20-60 MAD per 100g depending on quality. Saffron is the most expensive at from 15-40 MAD per gram. Orange blossom water runs from 10 MAD per bottle. Prices at tourist-heavy souks can be 2-3 times higher, so bargaining is essential. Seasonal pricing applies.',
  },
  {
    question: 'How can I tell if Moroccan saffron is real?',
    answer:
      'Real saffron threads from Taliouine are deep crimson with lighter orange tips. Place a thread in warm water: genuine saffron releases color slowly over 10-15 minutes and stays intact. It has a honey-like, slightly metallic aroma. Fake saffron (dyed safflower or corn silk) releases color instantly, has uniform color, and dissolves in water. Buy from Taliouine-sourced vendors or cooperative shops.',
  },
  {
    question: 'Where are the best spice souks in Morocco?',
    answer:
      'The top markets are Rahba Kedima in Marrakech (widest selection), Souk El Attarine in Fes (best authenticity and fair prices), the Meknes medina market (lowest prices, fewest tourists), and Essaouira medina spice alley (relaxed atmosphere). For best value, skip tourist-facing stalls and walk deeper into the market.',
  },
  {
    question: 'Can I bring Moroccan spices on a plane?',
    answer:
      'Yes, dried spices are permitted in both carry-on and checked luggage on virtually all airlines. Pack them in sealed bags to prevent aroma leakage. Orange blossom water bottles over 100ml must go in checked luggage. Declare spices at customs in Australia, New Zealand, and the USA. Whole spices pass through customs more easily than ground powders.',
  },
  {
    question: 'Should I buy whole or ground spices in Morocco?',
    answer:
      'Whole spices are strongly recommended. They last 2-3 years versus 6-12 months for ground, are harder to adulterate, and grinding fresh yields superior flavor. The exception is ras el hanout, traditionally sold pre-blended. For saffron, always buy threads, never powder.',
  },
  {
    question: 'What spices do I need to cook Moroccan food at home?',
    answer:
      'The essential kit includes eight staples: cumin, paprika, turmeric, ground ginger, cinnamon, black pepper, coriander, and saffron threads. With these you can cook tagines, couscous, harira, and kefta. Adding ras el hanout gives a convenient shortcut blend. Pick up orange blossom water and dried rosebuds for Moroccan pastries.',
  },
  {
    question: 'How long do Moroccan spices stay fresh?',
    answer:
      'Whole spices last 2-3 years in airtight containers away from heat and light. Ground spices are best within 6-12 months. Ras el hanout blends peak within 6 months. Saffron threads last 2-3 years if kept dry and dark. Orange blossom water keeps for 1-2 years sealed. Store everything in glass jars, never above the stove.',
  },
  {
    question: 'Are Moroccan spice tours worth the cost?',
    answer:
      'Spice tours are excellent value for first-time visitors. A guided tour from 150-300 MAD per person includes souk navigation, spice identification, tasting sessions, and buying help. Many tours combine spice shopping with a cooking class. Book through your riad or a reputable local agency.',
  },
] as const;

/* ===================================================================
   DATA: BARGAINING TIPS
   =================================================================== */

const bargainingTips = [
  { tip: 'Start by asking the price without showing too much interest. The first price quoted is always inflated.', icon: DollarSign },
  { tip: 'Counter-offer at roughly 40-50% of the asking price and work toward a middle ground.', icon: Scale },
  { tip: 'Buy multiple spices from one vendor to negotiate a bulk discount. Merchants reward loyalty.', icon: ShoppingBag },
  { tip: 'Walk away if the price feels too high. The vendor will often call you back with a better offer.', icon: ArrowRight },
  { tip: 'Ask locals or your riad host what fair souk prices are before you go shopping.', icon: Users },
  { tip: 'Morning visits yield better bargains. Merchants believe the first sale of the day brings good luck.', icon: Clock },
] as const;

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoSpiceGuidePage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/photo-morocco-spices.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Spice Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flame className="w-4 h-4" />
            Spices &amp; Flavors
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Spice Guide:
            <br className="hidden md:block" /> From Souk to Kitchen
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From ras el hanout to Taliouine saffron and dried rosebuds. Everything you need
            to know about buying authentic spices in Morocco with real prices, quality tests,
            and expert tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Spice Lover&apos;s Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of Africa, Europe, and the Arab world, and its
                spice markets reflect centuries of trade along ancient caravan routes. From the
                towering pyramids of ground cumin and paprika in Marrakech&apos;s Rahba Kedima
                to the fragrant saffron fields of Taliouine in the Anti-Atlas mountains,
                Morocco is one of the world&apos;s great spice destinations. The country&apos;s
                cuisine depends on a complex layering of flavors built from dozens of spices,
                herbs, and aromatic blends that have been perfected over centuries.
              </p>
              <p>
                Walking through a Moroccan spice souk is a sensory experience unlike any other.
                Merchants display their wares in meticulously shaped cones of ground spices,
                while burlap sacks overflow with whole seeds, bark, dried rosebuds, and fenugreek.
                The air is thick with the warm scent of cumin, the sweetness of cinnamon, and
                the earthy depth of turmeric. Bottles of orange blossom water catch the light
                on high shelves. Knowing what to buy, how to judge quality, and what to pay
                ensures you bring home the authentic flavors of Morocco rather than overpriced
                tourist packages.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices at local souks. Seasonal pricing applies
                during peak tourist months (October-April) when prices may run higher due to
                increased demand. Always bargain at souks; fixed prices apply only at supermarkets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Essential Spices -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Moroccan Spices &amp; Aromatics
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These eleven spices and aromatics form the foundation of Moroccan cooking and
            souk culture. Master these and you can recreate most classic Moroccan dishes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {essentialSpices.map((spice) => {
              const SpiceIcon = spice.icon;
              return (
                <div key={spice.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpiceIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spice.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{spice.arabic}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{spice.description}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-14 shrink-0">Flavor:</span>
                      <span className="text-[var(--text-secondary)]">{spice.flavor}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-14 shrink-0">Uses:</span>
                      <span className="text-[var(--text-secondary)]">{spice.uses}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{spice.price}</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {spice.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Spice Blends -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FlaskConical className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Spice Blends to Take Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond individual spices, Morocco is famous for its artfully crafted blends,
            each designed for specific dishes and cooking traditions.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {spiceBlends.map((blend, index) => {
                  const BlendIcon = blend.icon;
                  return (
                    <div key={blend.name} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <BlendIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {blend.name}
                          </h3>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 text-sm">
                            <span className="font-semibold text-[var(--text-primary)] w-24 shrink-0">Ingredients:</span>
                            <span className="text-[var(--text-secondary)]">{blend.ingredients}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <span className="font-semibold text-[var(--text-primary)] w-24 shrink-0">Best for:</span>
                            <span className="text-[var(--text-secondary)]">{blend.bestFor}</span>
                          </div>
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

      {/* -- Best Spice Souks -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Spice Souks in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you buy matters as much as what you buy. These markets offer the best
            selection, quality, and prices across the country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bestSpiceSouks.map((market) => {
              const MarketIcon = market.icon;
              return (
                <div key={market.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MarketIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {market.city}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{market.souk}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{market.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10 mb-3">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {market.tip}
                    </p>
                  </div>
                  <span className="inline-block text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                    Price level: {market.priceLevel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Bargaining Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Buy &amp; Bargain for Spices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bargaining is expected at every souk in Morocco. These strategies help you
            get fair prices without offending the merchant.
          </p>

          <div className="card-moroccan p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {bargainingTips.map((item) => {
                const TipIcon = item.icon;
                return (
                  <div key={item.tip} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <TipIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -- How to Spot Quality Spices -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Spot Quality Spices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Adulterated and stale spices are common in tourist areas. Use these six tests
            to verify you are getting fresh, authentic products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {qualityTips.map((item) => {
              const TestIcon = item.icon;
              return (
                <div key={item.test} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.test}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-green-700">Good:</span> {item.good}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-red-600">Bad:</span> {item.bad}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Price Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spice Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fair prices vary by where you buy. Local souks offer the best value for those
            who know how to bargain.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-accent)]/10">
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Spice</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Local Souk</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Tourist Shop</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Supermarket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {spicePriceGuide.map((row, i) => (
                      <tr key={row.spice} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                        <td className="p-4 text-[var(--text-primary)] font-medium">{row.spice}</td>
                        <td className="p-4 text-[var(--color-accent)] font-semibold">{row.souk}</td>
                        <td className="p-4 text-[var(--text-muted)]">{row.touristShop}</td>
                        <td className="p-4 text-[var(--text-secondary)]">{row.supermarket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              Prices are starting prices and may vary seasonally. Souk prices require bargaining;
              supermarket prices are fixed. Tourist shop prices represent the range before negotiation.
            </p>
          </div>
        </div>
      </section>

      {/* -- Spices in Moroccan Cooking -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spices in Moroccan Cooking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding which spices go into which dishes helps you buy exactly what you
            need to recreate authentic Moroccan flavors at home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cookingUses.map((use) => {
              const UseIcon = use.icon;
              return (
                <div key={use.dish} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <UseIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {use.dish}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{use.description}</p>
                  <p className="text-xs text-[var(--color-gold)] font-medium">
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Key spices: {use.spices}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Spice Tours -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spice Tours &amp; Experiences
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Guided Souk Spice Tours
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                The best way for first-time visitors to explore the spice markets. A knowledgeable
                local guide leads you through the labyrinthine souk, identifying spices, explaining
                their uses in Moroccan cooking, and helping you buy quality products at fair prices.
                Most tours last 2-3 hours and include tasting sessions with Moroccan tea.
              </p>
              <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 150 MAD per person</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Spice Shopping + Cooking Class
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                The ultimate immersive experience combines a morning market trip to buy fresh
                spices with an afternoon cooking class where you use your purchases to prepare a
                traditional Moroccan meal. Available in Marrakech, Fes, and Essaouira, these
                full-day experiences teach you how to select, prepare, and cook with Moroccan
                spices under expert guidance.
              </p>
              <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 300 MAD per person (half-day)</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Taliouine Saffron Tour
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Visit the saffron capital of Morocco in the Anti-Atlas mountains. During harvest
                season (October-November), you can watch the delicate saffron crocus flowers
                being picked at dawn and the threads being carefully separated by hand. The
                Taliouine Saffron Museum offers year-round exhibits on the history and cultivation
                of this precious spice. Buy directly from farmers at the lowest prices in the country.
              </p>
              <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 500 MAD per person (full-day from Taroudant)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Health Benefits -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health &amp; Medicinal Uses
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan spices have been used in traditional herbal medicine (al-tibb al-nabawi)
            for centuries. Modern research confirms many of these traditional applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {healthBenefits.map((item) => {
              const BenefitIcon = item.icon;
              return (
                <div key={item.spice} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BenefitIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.spice}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Taking Spices Home -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packaging for Flights &amp; Customs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these tips to safely transport your Moroccan spice purchases through
            airport security and international customs without issues.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transportTips.map((item) => {
                  const TipIcon = item.icon;
                  return (
                    <div key={item.tip} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <TipIcon className="w-4 h-4 text-[var(--color-accent)]" />
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card-moroccan p-5 mt-6">
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-1">Important: Country-Specific Rules</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Australia and New Zealand have the strictest biosecurity rules. All food
                    items including spices must be declared on your arrival card. Failure to
                    declare can result in fines from AUD 2,664. The USA requires agricultural
                    declaration but dried spices generally pass inspection without issue. EU
                    countries have minimal restrictions on dried spices for personal use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/cuisine" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Cuisine Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the rich flavors of Moroccan cooking from tagines and couscous to pastilla and street food.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-souk-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Souk Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate Morocco&apos;s famous markets with confidence. Etiquette, bargaining tips, and maps.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-buy-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Buy in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The 11 best souvenirs from Morocco with real prices, quality tips, and where to shop by city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Street food, restaurant dining, food safety, and must-try dishes across every Moroccan city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-cooking-classes-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Classes in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Learn to cook authentic Moroccan dishes with expert chefs in Marrakech, Fes, and beyond.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/argan-oil" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Argan Oil Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Buying authentic argan oil in Morocco for cooking and beauty. Quality tests, fair prices, and cooperatives.
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

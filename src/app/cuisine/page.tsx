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
  HandPlatter,
  CookingPot,
  GlassWater,
  Heart,
  Clock,
  Coins,
  Sparkles,
  Camera,
  BookOpen,
  CalendarDays,
  ShoppingBasket,
  Globe,
  Wheat,
  ChefHat,
  Soup,
  Croissant,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Cuisine Encyclopedia | The Definitive Guide to Food in Morocco',
  description:
    'The most comprehensive guide to Moroccan cuisine on the internet. Explore iconic dishes like tagine, couscous, pastilla, and harira. Discover street food, Moroccan breads, sweets, spices, mint tea, regional specialties, cooking techniques, vegetarian options, restaurant recommendations, and a complete glossary of Moroccan food terms.',
  keywords: [
    'Moroccan cuisine',
    'Moroccan food encyclopedia',
    'tagine',
    'couscous',
    'pastilla',
    'harira',
    'tanjia',
    'rfissa',
    'mechoui',
    'mrouzia',
    'Moroccan street food',
    'msemen',
    'baghrir',
    'harcha',
    'sfenj',
    'Moroccan bread',
    'khobz',
    'Moroccan spices',
    'ras el hanout',
    'saffron Morocco',
    'preserved lemons',
    'Moroccan mint tea',
    'chebakia',
    'ghriba',
    'kaab ghzal',
    'sellou',
    'zaalouk',
    'taktouka',
    'briouats',
    'Moroccan cooking techniques',
    'Moroccan regional food',
    'vegetarian Moroccan food',
    'Moroccan food glossary',
    'where to eat Morocco',
    'Moroccan cooking classes',
    'babbouche snail soup',
    'brochettes Morocco',
    'bocadillo Morocco',
    'Moroccan desserts',
    'Moroccan salads',
    'food safety Morocco',
  ],
  openGraph: {
    title: 'Moroccan Cuisine Encyclopedia - CityGuide',
    description:
      'The definitive guide to Moroccan cuisine. Iconic dishes, street food, breads, sweets, spices, mint tea ceremony, regional specialties, cooking techniques, and a complete food glossary.',
    url: 'https://citytoursmorocco.com/cuisine',
    images: [
      {
        url: 'https://citytoursmorocco.com/images/photo-food-flatlay.webp',
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan cuisine flatlay with tagine, couscous, mint tea, and spices',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/cuisine' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://citytoursmorocco.com/cuisine',
      name: 'Moroccan Cuisine Encyclopedia',
      description:
        'The most comprehensive guide to Moroccan cuisine. Iconic dishes, street food, breads, sweets, spices, regional specialties, cooking techniques, and a complete glossary.',
      url: 'https://citytoursmorocco.com/cuisine',
      isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
      about: { '@type': 'Country', name: 'Morocco' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
          { '@type': 'ListItem', position: 2, name: 'Cuisine Encyclopedia', item: 'https://citytoursmorocco.com/cuisine' },
        ],
      },
    },
    {
      '@type': 'Recipe',
      name: 'Moroccan Tagine',
      description: 'A slow-cooked stew prepared in a conical clay pot, featuring tender meat or vegetables with aromatic spices.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Main Course',
      recipeIngredient: ['Lamb or chicken', 'Onions', 'Preserved lemons', 'Olives', 'Ras el hanout', 'Saffron', 'Ginger', 'Olive oil'],
      keywords: 'tagine, Moroccan stew, slow-cooked, traditional',
    },
    {
      '@type': 'Recipe',
      name: 'Moroccan Couscous',
      description: 'Hand-rolled semolina granules steamed to fluffy perfection, served with a rich vegetable and meat broth.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Main Course',
      recipeIngredient: ['Couscous semolina', 'Lamb or chicken', 'Chickpeas', 'Carrots', 'Turnips', 'Zucchini', 'Butter'],
      keywords: 'couscous, Moroccan, Friday dish, semolina',
    },
    {
      '@type': 'Recipe',
      name: 'Pastilla (Bastilla)',
      description: 'An exquisite sweet-and-savory pie wrapped in crispy warqa pastry, dusted with cinnamon and powdered sugar.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Main Course',
      recipeIngredient: ['Pigeon or chicken', 'Warqa pastry', 'Almonds', 'Eggs', 'Cinnamon', 'Powdered sugar', 'Saffron'],
      keywords: 'pastilla, bastilla, Moroccan pie, Fes specialty',
    },
    {
      '@type': 'Recipe',
      name: 'Harira Soup',
      description: 'A hearty tomato-based soup with lentils, chickpeas, and meat, traditionally served during Ramadan.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Soup',
      recipeIngredient: ['Tomatoes', 'Lentils', 'Chickpeas', 'Lamb or beef', 'Cilantro', 'Parsley', 'Ginger', 'Vermicelli'],
      keywords: 'harira, Moroccan soup, Ramadan, lentil soup',
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   ICONIC DISHES DATA
   ═══════════════════════════════════════════════════════════════ */

const iconicDishes = [
  {
    name: 'Tagine',
    arabicName: '\u0637\u0627\u062c\u064a\u0646',
    icon: CookingPot,
    image: '/images/photo-tagine-closeup.webp',
    description:
      'The tagine is both the name of the conical clay cooking vessel and the slow-cooked stew prepared inside it. The cone-shaped lid traps steam, which condenses and drips back into the dish, basting the food continuously and creating impossibly tender, richly flavored results. This ancient Berber invention is the single most iconic element of Moroccan cuisine, found in every home, restaurant, and roadside eatery from Tangier to the Sahara.',
    varieties: [
      { name: 'Chicken with Preserved Lemon & Olives', detail: 'The quintessential Moroccan tagine. Chicken braised with saffron, ginger, and turmeric, finished with salt-cured preserved lemon wedges and cracked green olives. The interplay of briny olives and tart preserved lemon against saffron warmth is uniquely Moroccan.' },
      { name: 'Lamb with Prunes & Almonds', detail: 'A sumptuous sweet-and-savory masterpiece. Lamb shoulder slow-braised with caramelized onions, honey, cinnamon, and plump prunes until fork-tender, crowned with toasted almonds and sesame seeds. Reflects deep Andalusian influence on Moroccan cuisine.' },
      { name: 'Kefta Tagine with Eggs', detail: 'Seasoned ground beef or lamb meatballs simmered in spiced tomato-onion sauce, with eggs cracked directly into the bubbling sauce and gently poached. Served straight from the pot with crusty khobz bread.' },
      { name: 'Fish Tagine (Tagine Hout)', detail: 'A coastal specialty with firm white fish on a bed of potatoes, tomatoes, and peppers, marinated in chermoula. Beloved in Essaouira, Tangier, and all Atlantic coastal towns.' },
      { name: 'Vegetable Tagine (Tagine Khodra)', detail: 'Seasonal vegetables slow-cooked with saffron, ginger, olive oil, preserved lemons, and olives. A deeply satisfying plant-based dish proving Moroccan cuisine excels at vegetarian cooking.' },
    ],
  },
  {
    name: 'Couscous',
    arabicName: '\u0643\u0633\u0643\u0633',
    icon: Wheat,
    image: '/images/hero-food.webp',
    description:
      'The undisputed national dish of Morocco and a UNESCO-recognized Intangible Cultural Heritage element (inscribed 2020). Hand-rolled semolina granules steamed three times in a couscoussier over fragrant broth produce grains that are impossibly light and fluffy. The tradition of hand-rolling couscous is a communal cultural ritual requiring generational skill.',
    varieties: [
      { name: 'Friday Couscous', detail: 'Every Friday after noon prayer, families gather for couscous with lamb or chicken, seven vegetables, chickpeas, and saffron broth. Refusing a Friday couscous invitation is a serious social faux pas.' },
      { name: 'Royal Couscous', detail: 'The most elaborate version with multiple meats -- lamb, chicken, and merguez -- plus vegetables, chickpeas, raisins, and caramelized onions. Served at weddings and celebrations.' },
      { name: 'Seven Vegetables (Seba Khodra)', detail: 'Carrots, turnips, zucchini, cabbage, tomatoes, onions, and chickpeas. Seven holds special meaning in Moroccan-Islamic culture, representing abundance and blessings.' },
      { name: 'Sweet Couscous with Tfaya', detail: 'A Fassi specialty: fine grains steamed, buttered, and dusted with cinnamon and sugar, topped with onions caramelized to deep mahogany with honey and raisins.' },
    ],
  },
  {
    name: 'Pastilla (Bastilla)',
    arabicName: '\u0628\u0633\u0637\u064a\u0644\u0629',
    icon: Star,
    image: '/images/hero-food.webp',
    description:
      'The crown jewel of Moroccan celebratory cuisine. Multiple layers of paper-thin warqa pastry encase shredded pigeon (or chicken), eggs scrambled with saffron, and toasted almonds sweetened with cinnamon. Baked golden, then dusted with powdered sugar and cinnamon patterns. Originated in Fes from Andalusian-Moorish court cuisine. A properly made pastilla takes an entire day to prepare.',
    varieties: [
      { name: 'Traditional Pigeon Pastilla', detail: 'The original version with squab, which has a richer flavor than chicken. Found primarily in Fes at traditional restaurants and for special occasions.' },
      { name: 'Chicken Pastilla', detail: 'The most widely available version today. Slightly lighter flavor but still magnificent with the same layered pastry and cinnamon-sugar dusting.' },
      { name: 'Seafood Pastilla', detail: 'A coastal innovation with shrimp, white fish, and vermicelli noodles in crispy warqa. Popular in Essaouira and Casablanca as an elegant appetizer.' },
    ],
  },
  {
    name: 'Harira',
    arabicName: '\u062d\u0631\u064a\u0631\u0629',
    icon: Soup,
    image: '/images/hero-food.webp',
    description:
      'Morocco&apos;s most beloved soup and the traditional dish served at sunset during Ramadan to break the fast. Lentils, chickpeas, diced lamb or beef, crushed tomatoes, vermicelli, and fresh herbs simmered until the flavors meld transcendently. The signature velvety texture comes from tedouira, a flour-and-water slurry. Seasoned with ginger, turmeric, cinnamon, pepper, and saffron. Always accompanied by dates, eggs, and chebakia during Ramadan.',
    varieties: [],
  },
  {
    name: 'Tanjia Marrakchia',
    arabicName: '\u0637\u0646\u062c\u064a\u0629 \u0645\u0631\u0627\u0643\u0634\u064a\u0629',
    icon: Flame,
    image: '/images/hero-food.webp',
    description:
      'A slow-cooked dish so identified with Marrakech it bears the city&apos;s name. Beef or lamb shanks placed in an amphora-shaped clay urn with preserved lemons, saffron, cumin, smen, and garlic. The sealed urn is delivered to the hammam furnace keeper (fernatchi) who buries it in wood-ash embers overnight. Eight to twelve hours of gentle heat produces impossibly tender meat. Traditionally made by men for weekend gatherings.',
    varieties: [],
  },
  {
    name: 'Rfissa',
    arabicName: '\u0631\u0641\u064a\u0633\u0629',
    icon: Heart,
    image: '/images/hero-food.webp',
    description:
      'A ceremonial dish of shredded msemen flatbread layered with lentils and tender chicken, drenched in broth infused with fenugreek, ras el hanout, saffron, and pepper. Traditionally prepared for women after childbirth, as fenugreek promotes lactation and restores strength. Also served at celebrations and religious holidays. A true labor of love.',
    varieties: [],
  },
  {
    name: 'Mechoui',
    arabicName: '\u0645\u0634\u0648\u064a',
    icon: Flame,
    image: '/images/hero-food.webp',
    description:
      'Whole lamb slow-roasted five to six hours in an underground clay pit or on a spit until fall-off-the-bone tender with a crispy golden exterior. Seasoned simply with salt, cumin, and melted butter basted repeatedly. The centerpiece of feasts, weddings, and Eid al-Adha. Served by pulling tender meat directly with your hands, accompanied by cumin and coarse salt.',
    varieties: [],
  },
  {
    name: 'Mrouzia',
    arabicName: '\u0645\u0631\u0648\u0632\u064a\u0629',
    icon: Sparkles,
    image: '/images/hero-food.webp',
    description:
      'An ancient Marrakchi tagine from the medieval Berber-Andalusian tradition, associated with Eid al-Adha. Lamb cooked with an extraordinarily generous amount of ras el hanout, honey, raisins, toasted almonds, and smen. One of the sweetest, most richly spiced tagines, with honey and raisins creating a dense, jam-like glaze. Connects modern Moroccans to centuries of culinary heritage.',
    varieties: [],
  },
];

/* ═══════════════════════════════════════════════════════════════
   STREET FOOD DATA
   ═══════════════════════════════════════════════════════════════ */

const streetFoodItems = [
  {
    name: 'Msemen',
    arabicName: '\u0645\u0633\u0645\u0646',
    description: 'Square, multi-layered flatbread folded and pan-fried to flaky, buttery perfection. Stretched paper-thin by hand, brushed with oil and butter, then folded and cooked on a griddle until golden. Enjoyed at breakfast with honey and butter, as a street snack stuffed with spiced beef or vegetables, or alongside tagines.',
    price: '3-5 MAD',
    where: 'Every medina and neighborhood bakery',
  },
  {
    name: 'Baghrir',
    arabicName: '\u0628\u063a\u0631\u064a\u0631',
    description: 'Known as "thousand-hole pancakes," these spongy semolina crepes are a marvel of Moroccan baking. A thin batter poured onto a hot skillet forms hundreds of tiny bubbles creating a distinctive honeycomb surface. The porous texture perfectly absorbs the traditional topping of melted butter and honey. Beloved during Ramadan.',
    price: '5-10 MAD (3 pieces)',
    where: 'Street vendors, bakeries, Ramadan food stalls',
  },
  {
    name: 'Harcha',
    arabicName: '\u062d\u0631\u0634\u0629',
    description: 'A dense, golden semolina griddle bread with a pleasantly gritty texture and crispy exterior. Made from coarse semolina, butter, and milk, cooked on a flat griddle until golden brown on both sides. Split open and stuffed with soft cheese (jben), butter and honey, or jam. A staple Moroccan breakfast and afternoon tea accompaniment.',
    price: '3-5 MAD',
    where: 'Bakeries, cafes, street vendors nationwide',
  },
  {
    name: 'Snail Soup (Babbouche)',
    arabicName: '\u0627\u0644\u0628\u0628\u0648\u0634',
    description: 'Small garden snails simmered in a fragrant, peppery broth infused with a dozen herbs and spices: thyme, licorice root, mint, caraway, anise, and black pepper. The broth is believed to have medicinal properties for digestion and immunity. Sold from steaming cauldrons at street stalls -- extract each snail with a toothpick, then drink the aromatic broth.',
    price: '5-10 MAD',
    where: 'Jemaa el-Fnaa (Marrakech), medina squares nationwide',
  },
  {
    name: 'Sfenj',
    arabicName: '\u0633\u0641\u0646\u062c',
    description: 'Moroccan doughnuts made from simple yeast dough shaped into rings by hand and deep-fried until golden and puffed. Light, airy, and slightly chewy with a delicate crust. Best eaten piping hot, dusted with sugar or dipped in warm honey. A classic morning ritual paired with mint tea or coffee. The best sfenj stalls attract long queues at dawn.',
    price: '1-2 MAD each',
    where: 'Every neighborhood has a sfenj vendor, busiest at dawn',
  },
  {
    name: 'Brochettes',
    arabicName: '\u0628\u0631\u0648\u0634\u064a\u062a',
    description: 'Skewered cubes of lamb, beef, chicken, or kefta (spiced ground meat) grilled over blazing charcoal until smoky and charred. Seasoned with cumin, paprika, salt, and pepper, served in crusty bread with sliced onion, tomato, and harissa. The smoke and sizzle of brochette vendors is one of the defining sensory experiences of Moroccan medinas.',
    price: '15-25 MAD',
    where: 'Jemaa el-Fnaa, medina food stalls, roadside grills',
  },
  {
    name: 'Grilled Sardines',
    arabicName: '\u0633\u0631\u062f\u064a\u0646 \u0645\u0634\u0648\u064a',
    description: 'Morocco is the world&apos;s largest exporter of sardines. Whole sardines marinated in chermoula, threaded onto a metal grill rack, and charred over blazing coals. Served with bread, olives, and sliced tomatoes. The port stalls of Essaouira, Casablanca, and Tangier serve them fresh from the morning catch.',
    price: '15-25 MAD (6-8 sardines)',
    where: 'Essaouira port, Casablanca market, Tangier fish stalls',
  },
  {
    name: 'Bocadillo',
    arabicName: '\u0628\u0648\u0643\u0627\u062f\u064a\u0644\u0648',
    description: 'The Moroccan sandwich: a crusty baguette split and stuffed with an array of fillings -- grilled kefta, merguez sausage, fried fish, maakouda (potato fritters), tuna, or egg -- along with harissa, sliced vegetables, olives, and sometimes french fries. A legacy of the French Protectorate adapted into something entirely Moroccan. The ultimate cheap, filling street meal.',
    price: '15-25 MAD',
    where: 'Sandwich stalls in every medina and ville nouvelle',
  },
  {
    name: 'Maakouda',
    arabicName: '\u0645\u0639\u0642\u0648\u062f\u0629',
    description: 'Golden, crispy potato fritters seasoned with garlic, cumin, parsley, turmeric, and chili, deep-fried until perfectly crunchy. The king of Moroccan sandwich fillings, tucked into crusty khobz with harissa, olives, and sometimes a fried egg. Every medina has vendors frying these to order.',
    price: '10-15 MAD (sandwich)',
    where: 'Medina food stalls, sandwich vendors',
  },
  {
    name: 'Merguez',
    arabicName: '\u0645\u0631\u0642\u0627\u0632',
    description: 'Fiery, thin lamb sausages colored vivid red with harissa and paprika, seasoned with cumin, coriander, and garlic, grilled over charcoal until charred and smoky. Served in a crusty baguette with harissa sauce, diced tomato, and hot chili peppers, or alongside grilled brochettes.',
    price: '15-20 MAD',
    where: 'Grill stalls throughout medinas and souks',
  },
  {
    name: 'Grilled Corn (Dra)',
    arabicName: '\u062f\u0631\u0629',
    description: 'Ears of corn roasted over charcoal until slightly charred and smoky, sprinkled with salt. A simple, satisfying snack sold from handcarts throughout Morocco, particularly popular in the cooler months and at outdoor markets.',
    price: '5-10 MAD',
    where: 'Street handcarts, market squares, roadsides',
  },
  {
    name: 'Sheep Head (Ras)',
    arabicName: '\u0631\u0623\u0633 \u0627\u0644\u062e\u0631\u0648\u0641',
    description: 'Whole sheep heads slow-steamed for hours until the meat is meltingly tender, then chopped and served with cumin and salt. The most prized parts are the cheeks, tongue, and brain. Not for the faint of heart, but deeply loved by locals. An adventurous street food experience.',
    price: '20-30 MAD',
    where: 'Jemaa el-Fnaa, Fes Rcif square, medina food stalls',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MOROCCAN BREADS DATA
   ═══════════════════════════════════════════════════════════════ */

const moroccanBreads = [
  {
    name: 'Khobz',
    arabicName: '\u062e\u0628\u0632',
    description: 'The round, dense, crusty bread that is the foundation of every Moroccan meal. Made from a mixture of white and whole wheat flour, shaped into round loaves, and baked in communal wood-fired ovens (ferran) found in every neighborhood. Each family marks their dough with a distinctive stamp before sending it to the ferran. Khobz serves as both utensil and accompaniment -- torn into pieces and used to scoop tagines, dip into salads, and mop up sauces. Bread is sacred in Moroccan culture: never waste it, never place it upside down, and if you see bread on the ground, pick it up and place it aside respectfully.',
  },
  {
    name: 'Msemen (Rghaif)',
    arabicName: '\u0645\u0633\u0645\u0646',
    description: 'Square, multi-layered flatbread that achieves its flaky, buttery texture through a process of stretching the dough paper-thin, brushing with oil and softened butter, then folding into a square and pan-frying on a flat griddle. The result is layers upon layers of crispy, golden pastry. Msemen is eaten at breakfast drizzled with honey and butter, stuffed with savory fillings, or torn alongside tagines. In some regions it is called rghaif.',
  },
  {
    name: 'Baghrir',
    arabicName: '\u0628\u063a\u0631\u064a\u0631',
    description: 'Spongy semolina pancakes with a honeycomb surface of hundreds of tiny holes -- the "thousand-hole crepes." A thin batter of semolina, flour, yeast, and warm water is poured onto a hot skillet and cooked on one side only. As it heats, bubbles form and burst, creating the distinctive porous texture that absorbs melted butter and honey like a sponge. Essential during Ramadan and a beloved breakfast year-round.',
  },
  {
    name: 'Harcha',
    arabicName: '\u062d\u0631\u0634\u0629',
    description: 'A semolina griddle bread with a pleasantly gritty, cornbread-like texture. Made from coarse semolina, butter or oil, and milk or water, shaped into thick rounds and cooked on a flat griddle. Golden and crispy on the outside, soft and slightly crumbly inside. Split open and filled with cheese, butter and honey, or Laughing Cow cheese (a surprisingly popular Moroccan staple). Available at every bakery and cafe.',
  },
  {
    name: 'Batbout',
    arabicName: '\u0628\u0637\u0628\u0648\u0637',
    description: 'Small, round, pillowy flatbreads cooked on a griddle or tagine lid. Similar to pita bread, batbout puffs up during cooking creating a pocket that can be stuffed with kefta, vegetables, or cheese. Particularly popular in the Fes and Meknes regions. Softer and lighter than khobz, making it ideal for sandwiches.',
  },
  {
    name: 'Khobz Dar (Home Bread)',
    arabicName: '\u062e\u0628\u0632 \u062f\u0627\u0631',
    description: 'Homemade bread enriched with semolina, anise seeds, and sesame, giving it a more complex flavor and tender crumb than standard khobz. Many families bake this at home for special occasions or weekend meals. Often decorated with seeds on top and scored in a distinctive cross pattern before baking.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SALADS & STARTERS DATA
   ═══════════════════════════════════════════════════════════════ */

const saladsStarters = [
  {
    name: 'Zaalouk',
    arabicName: '\u0632\u0639\u0644\u0648\u0643',
    description: 'A silky, smoky cooked salad of fire-roasted eggplant and ripe tomatoes mashed together with garlic, olive oil, cumin, paprika, and a touch of chili. Served warm or at room temperature as a dip with crusty khobz. The eggplant is charred over an open flame for distinctive smokiness. Present on every Moroccan dining table as part of the traditional salad spread.',
    vegetarian: true,
  },
  {
    name: 'Taktouka',
    arabicName: '\u062a\u0643\u062a\u0648\u0643\u0629',
    description: 'A vibrant cooked salad of roasted green peppers and tomatoes, slow-cooked down with garlic, paprika, and cumin, finished with olive oil and lemon juice. The peppers are blistered over a flame, peeled, then combined with tomatoes for a long, gentle simmer that concentrates the flavors into something rich and complex. Served alongside zaalouk.',
    vegetarian: true,
  },
  {
    name: 'Briouats',
    arabicName: '\u0628\u0631\u064a\u0648\u0627\u062a',
    description: 'Crispy triangular or cylindrical pastries made from warqa pastry sheets, folded around savory or sweet fillings and deep-fried until shatteringly crisp. Savory versions: spiced lamb, herbed cheese, shrimp with vermicelli, or chicken with olives. Sweet versions: almond paste with orange blossom water, dipped in warm honey. A fixture at weddings, Ramadan iftars, and celebrations.',
    vegetarian: false,
  },
  {
    name: 'Moroccan Carrot Salad',
    arabicName: '\u0633\u0644\u0637\u0629 \u062e\u064a\u0632\u0648',
    description: 'Cooked carrots sliced into rounds and dressed with cumin, paprika, garlic, olive oil, lemon juice, and fresh cilantro. Sometimes sweetened with a touch of honey and spiced with harissa for heat. A bright, colorful addition to the Moroccan salad spread that showcases the cuisine&apos;s ability to transform humble vegetables into something extraordinary.',
    vegetarian: true,
  },
  {
    name: 'Beetroot Salad',
    arabicName: '\u0633\u0644\u0637\u0629 \u0628\u0627\u0631\u0628\u0627',
    description: 'Cooked beetroot cubed and dressed with cumin, orange blossom water, cinnamon, and olive oil. The combination of earthy beet with the floral note of orange blossom water is uniquely Moroccan and surprisingly sophisticated. Adds vibrant color to the salad spread.',
    vegetarian: true,
  },
  {
    name: 'Tomato & Onion Salad (Chlada)',
    arabicName: '\u0634\u0644\u0627\u0636\u0629',
    description: 'The simplest and most ubiquitous Moroccan salad: diced ripe tomatoes and thinly sliced onions dressed with olive oil, lemon juice, cumin, and fresh parsley or cilantro. Sometimes roasted green peppers are added. Fresh, bright, and present at virtually every meal. The quality depends entirely on the ripeness of Morocco&apos;s excellent tomatoes.',
    vegetarian: true,
  },
  {
    name: 'Kemia (Mixed Starters)',
    arabicName: '\u0643\u0645\u064a\u0629',
    description: 'The Moroccan equivalent of mezze or tapas: an array of 5-10 small dishes served at the beginning of a meal. Typically includes zaalouk, taktouka, carrot salad, beetroot salad, marinated olives, fresh bread, and seasonal preparations. Kemia showcases the breadth and sophistication of Moroccan vegetable cookery and sets the stage for the main course.',
    vegetarian: true,
  },
];

/* ═══════════════════════════════════════════════════════════════
   SWEETS & DESSERTS DATA
   ═══════════════════════════════════════════════════════════════ */

const sweetsAndDesserts = [
  {
    name: 'Chebakia',
    arabicName: '\u0634\u0628\u0627\u0643\u064a\u0629',
    description: 'Intricately shaped flower-like pastries that are Morocco&apos;s most iconic sweet. The sesame-studded dough is flavored with anise, cinnamon, saffron, and orange blossom water, hand-shaped into a distinctive rosette pattern, deep-fried until golden, then plunged into warm honey and finished with sesame seeds. The indispensable sweet of Ramadan, always served alongside harira. Skilled women can produce hundreds in a single day, and families guard their shaping techniques across generations.',
  },
  {
    name: 'Ghriba',
    arabicName: '\u063a\u0631\u064a\u0628\u0629',
    description: 'Crackle-topped Moroccan cookies that come in numerous varieties. The most popular are ghriba dial louz (almond), ghriba dial smida (semolina with coconut), and ghriba dial coco (coconut macaroon-style). All share a characteristic cracked surface with a soft, chewy interior. Made from simple ingredients -- ground almonds or semolina, sugar, eggs, and butter -- yet achieving extraordinary texture. Found in every Moroccan patisserie and home.',
  },
  {
    name: 'Kaab el Ghazal (Gazelle Horns)',
    arabicName: '\u0643\u0639\u0628 \u0627\u0644\u063a\u0632\u0627\u0644',
    description: 'Perhaps the most elegant of all Moroccan pastries. Crescent-shaped cookies with a thin, smooth pastry shell encasing a filling of ground almonds, sugar, and orange blossom water, scented with mastic and cinnamon. The dough must be rolled paper-thin yet hold together perfectly. A mark of a skilled pastry cook and a fixture at every celebration. The finest come from Fes and Meknes.',
  },
  {
    name: 'Sellou (Sfouf)',
    arabicName: '\u0633\u0644\u0648',
    description: 'A rich, no-bake confection of toasted flour, ground almonds, toasted sesame seeds, melted butter, honey, cinnamon, anise, and mastic. Mixed into a dense, crumbly mass and shaped into mounds or pressed into molds. A high-energy Ramadan staple, also prepared for Eid and for new mothers. The depth of toasting the flour -- a process requiring constant stirring over heat for up to an hour -- determines the richness of flavor.',
  },
  {
    name: 'Briwat bil Louz (Almond Briwat)',
    arabicName: '\u0628\u0631\u064a\u0648\u0627\u062a \u0628\u0627\u0644\u0644\u0648\u0632',
    description: 'Triangular warqa pastry parcels filled with a fragrant almond paste perfumed with orange blossom water and cinnamon, deep-fried until crispy, then dipped in warm honey. The combination of shattering crisp pastry, aromatic almond filling, and honey glaze is irresistible. A quintessential accompaniment to mint tea and a star of Ramadan celebrations.',
  },
  {
    name: 'Makrout',
    arabicName: '\u0645\u0642\u0631\u0648\u0637',
    description: 'Diamond-shaped semolina cookies filled with a date paste scented with orange blossom water and cinnamon, deep-fried and dipped in honey. The contrast between the slightly crunchy semolina exterior and the soft, sweet date filling is deeply satisfying. Popular across the Maghreb but particularly beloved in Morocco during Ramadan and tea time.',
  },
  {
    name: 'Halwa Shebakia',
    arabicName: '\u062d\u0644\u0648\u0629 \u0627\u0644\u0634\u0628\u0627\u0643\u064a\u0629',
    description: 'Assorted Moroccan halwa (sweets) sold by weight in patisseries and souks. Includes varieties made from sesame, peanuts, almonds, and dates pressed into bars and slices. Often elaborately displayed in pyramids of color at market stalls. A popular gift and Ramadan provision.',
  },
  {
    name: 'Pastilla au Lait',
    arabicName: '\u0628\u0633\u0637\u064a\u0644\u0629 \u0628\u0627\u0644\u062d\u0644\u064a\u0628',
    description: 'A dessert version of pastilla: layers of crispy warqa pastry alternating with a delicate milk custard flavored with orange blossom water and cinnamon, topped with toasted almonds and a dusting of powdered sugar and cinnamon. Light, elegant, and fragrant -- a modern classic found in upscale restaurants.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DRINKS DATA
   ═══════════════════════════════════════════════════════════════ */

const moroccanDrinks = [
  {
    name: 'Atay -- Moroccan Mint Tea',
    arabicName: '\u0623\u062a\u0627\u064a',
    icon: Coffee,
    description: 'Morocco&apos;s national drink and the cornerstone of social life. A sweet infusion of Chinese gunpowder green tea, generous bunches of fresh spearmint (nana), and ample sugar, brewed in a silver-plated teapot and poured from a height into ornate glasses to create a light foam. The tea ceremony is a ritual of hospitality offered to every guest. Refusing is considered impolite. Moroccans say the first glass is as gentle as life, the second as strong as love, the third as bitter as death. In summer, wormwood (shiba) or lemon verbena (louiza) may replace mint. The art of tea preparation is taken seriously: the correct ratio of tea to mint to sugar, the number of times the tea is poured back and forth (to mix), and the height of the pour all matter enormously.',
    ceremony: 'The host prepares the tea personally as a sign of respect. The pot is rinsed with a small amount of boiling water and tea, which is discarded (to remove bitterness). Fresh mint, sugar, and more boiling water are added. The tea is poured into a glass and returned to the pot several times to mix. Finally, it is poured from a height of 12 inches or more into each glass, creating the characteristic foam. Three glasses are customary.',
  },
  {
    name: 'Fresh Orange Juice',
    arabicName: '\u0639\u0635\u064a\u0631 \u0627\u0644\u0628\u0631\u062a\u0642\u0627\u0644',
    icon: GlassWater,
    description: 'Freshly squeezed orange juice is ubiquitous across Morocco, sold from vibrant juice stalls and handcarts in every city. Moroccan oranges are renowned for their sweetness, particularly from the Berkane and Souss-Massa regions. A glass costs just 5-10 MAD. The juice stalls lining Jemaa el-Fnaa in Marrakech are one of the city&apos;s most photographed scenes, with pyramids of oranges stacked high and juice pressed to order.',
    ceremony: '',
  },
  {
    name: 'Avocado Smoothie (Jus d&apos;Avocat)',
    arabicName: '\u0639\u0635\u064a\u0631 \u0627\u0644\u0623\u0641\u0648\u0643\u0627\u062f\u0648',
    icon: GlassWater,
    description: 'A thick, creamy blend of ripe avocado, milk, sugar, and sometimes almonds, dates, or argan oil. This unexpectedly popular Moroccan staple is a filling snack or breakfast drink, especially in the south around Agadir and Taroudant where avocados grow abundantly. Juice bars layer it with banana, strawberry, or almond milk in colorful striped "cocktail" glasses.',
    ceremony: '',
  },
  {
    name: 'Nous-Nous (Half-Half Coffee)',
    arabicName: '\u0646\u0648\u0635 \u0646\u0648\u0635',
    icon: Coffee,
    description: 'Morocco&apos;s signature coffee: half espresso, half steamed milk, served in a small glass. The name literally means "half-half" in Darija. Ordered at every Moroccan cafe, nous-nous is the coffee of choice for Moroccans who gather at outdoor cafe terraces to socialize, watch football, or simply watch the world go by. Stronger than a latte, gentler than a straight espresso.',
    ceremony: '',
  },
  {
    name: 'Lben (Buttermilk)',
    arabicName: '\u0644\u0628\u0646',
    description: 'Fermented buttermilk, tangy and refreshing, traditionally served alongside couscous and used in some bread recipes. Available at grocery shops and from some street vendors in plastic bottles. An acquired taste for visitors but deeply refreshing once appreciated, especially in hot weather.',
    icon: GlassWater,
    ceremony: '',
  },
  {
    name: 'Raib (Fermented Milk)',
    arabicName: '\u0631\u0627\u064a\u0628',
    description: 'A thick, creamy fermented milk similar to drinkable yogurt, sold in shops and served at some traditional restaurants. Mildly tangy and naturally probiotic, raib is consumed as a cooling drink alongside spicy dishes or as a light snack.',
    icon: GlassWater,
    ceremony: '',
  },
  {
    name: 'Herbal Infusions',
    arabicName: '\u0627\u0644\u0623\u0639\u0634\u0627\u0628',
    description: 'Beyond mint tea, Moroccans brew a pharmacy of herbal infusions: wormwood (shiba) for digestion, thyme (zaatar) for colds, lemon verbena (louiza) for relaxation, pennyroyal (fliou) for stomach ailments, and sage for general wellness. These are widely available in cafes and herbal shops (attarine) throughout the souks.',
    icon: Leaf,
    ceremony: '',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SPICES GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const spicesGuide = [
  {
    name: 'Ras el Hanout',
    arabicName: '\u0631\u0623\u0633 \u0627\u0644\u062d\u0627\u0646\u0648\u062a',
    description: 'Meaning "head of the shop" -- the finest blend a spice merchant offers. Each merchant&apos;s recipe is a closely guarded secret, combining 12 to 30 or more spices: cumin, coriander, turmeric, cinnamon, black pepper, cardamom, cloves, nutmeg, ginger, paprika, allspice, anise, fennel, mace, galangal, dried rosebuds, lavender, and sometimes exotic additions like grains of paradise or cubeb pepper. No two blends are identical.',
    uses: 'Tagines, couscous, rice, marinades, mrouzia, rfissa',
    buyingTip: 'Buy from a reputable spice merchant. A good ras el hanout should be aromatic and complex, never dusty or one-dimensional. Expect to pay 50-100 MAD per 100g for quality blends.',
  },
  {
    name: 'Cumin (Kamoun)',
    arabicName: '\u0643\u0645\u0648\u0646',
    description: 'The most ubiquitous spice in Moroccan cooking. Earthy, warm, and slightly bitter, cumin adds depth to virtually every savory dish. Always present on Moroccan dining tables alongside salt -- a habit so ingrained that a Moroccan table without cumin feels incomplete. Used both ground and whole.',
    uses: 'Grilled meats, soups, salads, kefta, mechoui, tagines, everything',
    buyingTip: 'Buy whole cumin seeds and grind at home for the freshest flavor. Moroccan cumin tends to be lighter in color and more delicate than Indian cumin.',
  },
  {
    name: 'Saffron (Zaafrane)',
    arabicName: '\u0632\u0639\u0641\u0631\u0627\u0646',
    description: 'Moroccan saffron from the Taliouine region in the Anti-Atlas Mountains is among the world&apos;s finest. These precious red threads impart a golden color, floral aroma, and subtle bittersweet flavor. Harvested by hand from crocus flowers each November during a brief two-week window, making it the world&apos;s most expensive spice by weight.',
    uses: 'Tagines, rice, pastilla, tea, desserts, rfissa',
    buyingTip: 'Real saffron costs 15-30 MAD per gram. If it is cheap, it is likely safflower or artificial coloring. Real threads are deep red with slight orange tips and produce a golden-yellow color when steeped.',
  },
  {
    name: 'Preserved Lemons (Hamid Msayer)',
    arabicName: '\u062d\u0627\u0645\u0636 \u0645\u0635\u064a\u0631',
    description: 'Not a spice but an essential flavor element unique to Moroccan cuisine. Lemons packed in salt and their own juice for a month or more until the rind softens and develops an intensely concentrated, salty-sour-citrus flavor unlike anything else. The rind is used (not the flesh), finely diced or sliced into tagines, salads, and marinades. No other ingredient defines Moroccan cooking so distinctly.',
    uses: 'Tagines (especially chicken), salads, chermoula, grilled fish',
    buyingTip: 'Look for lemons that are soft, slightly translucent, and intensely fragrant. Avoid any with off-smells. Easy to make at home with just lemons and salt.',
  },
  {
    name: 'Cinnamon (Qarfa)',
    arabicName: '\u0642\u0631\u0641\u0629',
    description: 'Used in both savory and sweet dishes, cinnamon is a defining flavor of Moroccan cooking that bridges the sweet-savory divide. Both Ceylon (true) cinnamon and cassia are used. Essential in pastilla, lamb tagines with prunes, many desserts, and mint tea. Moroccan cuisine uses cinnamon more generously in savory dishes than almost any other world cuisine.',
    uses: 'Pastilla, tagines, desserts, mint tea, smoothies, couscous',
    buyingTip: 'Moroccan spice merchants typically sell cassia cinnamon (thicker bark, stronger flavor). True Ceylon cinnamon (thinner, more delicate) is also available at higher prices.',
  },
  {
    name: 'Ginger (Skinjbir)',
    arabicName: '\u0632\u0646\u062c\u0628\u064a\u0644',
    description: 'Both fresh and ground ginger are essential in Moroccan kitchens, adding brightness and gentle heat. Ground ginger appears in almost every tagine and soup recipe. Fresh ginger is grated into marinades and herbal teas. Dried ginger is a core component of ras el hanout.',
    uses: 'Harira, tagines, marinades, herbal teas, ras el hanout',
    buyingTip: 'Ground ginger should be pale yellow and pungent. Fresh ginger should be firm with smooth skin. Both are inexpensive in Moroccan markets.',
  },
  {
    name: 'Turmeric (Kharkoum)',
    arabicName: '\u0643\u0631\u0643\u0645',
    description: 'Prized for its vibrant golden color and mild, slightly bitter flavor. Used across Moroccan cooking to add warmth, visual appeal, and subtle earthiness to dishes. Often paired with saffron to amplify the golden hue of tagine sauces.',
    uses: 'Soups, tagines, marinades, rice dishes, chicken preparations',
    buyingTip: 'Buy in small quantities as ground turmeric loses its potency relatively quickly. Should be bright orange-yellow and aromatic.',
  },
  {
    name: 'Paprika (Felfla Hamra)',
    arabicName: '\u0641\u0644\u0641\u0644 \u0623\u062d\u0645\u0631',
    description: 'Both sweet and smoked varieties are integral to Moroccan cuisine, lending deep red hue and gentle warmth to cooked salads, sauces, and grilled dishes. Moroccan paprika tends toward the mild-sweet end of the spectrum, providing color and subtle sweetness rather than heat.',
    uses: 'Zaalouk, taktouka, chermoula, grilled meats, kefta, marinades',
    buyingTip: 'Look for vibrant, deeply colored paprika. The aroma should be sweet and warm, not musty. Store away from light.',
  },
  {
    name: 'Black Pepper (Ibzar)',
    arabicName: '\u0625\u0628\u0632\u0627\u0631',
    description: 'Freshly ground black pepper is foundational in Moroccan cooking, contributing sharp heat and aromatic pungency. Used more generously than in many cuisines, particularly in marinades, grilled meats, and soups. White pepper is also used in some delicate preparations.',
    uses: 'Marinades, grilled meats, soups, ras el hanout, tagines',
    buyingTip: 'Always buy whole peppercorns and grind fresh. Pre-ground pepper loses its aroma quickly.',
  },
  {
    name: 'Harissa',
    arabicName: '\u0647\u0631\u064a\u0633\u0629',
    description: 'A fiery chili paste of roasted red peppers, garlic, caraway, coriander, and olive oil. While originating from Tunisia, harissa is widely used in Morocco as a condiment, particularly in sandwiches and alongside grilled meats. Moroccan harissa tends to be slightly milder than Tunisian versions.',
    uses: 'Sandwiches, grilled meats, tagines, dipping sauce, soups',
    buyingTip: 'Available in tubes, cans, and jars at every Moroccan grocery. For the best quality, buy from a spice merchant who makes it in-house.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   REGIONAL SPECIALTIES DATA
   ═══════════════════════════════════════════════════════════════ */

const regionalSpecialties = [
  {
    city: 'Marrakech',
    image: '/images/hero-desert.webp',
    description: 'The street food capital of Morocco. Jemaa el-Fnaa transforms nightly into the world&apos;s largest open-air food court. Tanjia is the city&apos;s signature dish, cooked in hammam ashes. Mechoui specialists slow-roast whole lambs. The Mellah and Rahba Kedima spice markets are essential stops.',
    dishes: ['Tanjia Marrakchia', 'Mechoui', 'Mrouzia', 'Snail Soup', 'Jemaa el-Fnaa Street Food', 'Tangia bil Khodra'],
  },
  {
    city: 'Fes',
    image: '/images/hero-coastal.webp',
    description: 'The spiritual capital of Moroccan gastronomy and home to the most refined, complex dishes. Centuries-old palace cuisine traditions survive here, guarded by legendary dadas. Pastilla originated here and remains at its finest. The spice and olive souks of Fes el-Bali are among Morocco&apos;s best.',
    dishes: ['Pastilla', 'Rfissa', 'Sellou', 'Kaab el Ghazal', 'Palace Cuisine', 'Couscous Tfaya'],
  },
  {
    city: 'Casablanca',
    image: '/images/hero-coastal.webp',
    description: 'Morocco&apos;s cosmopolitan capital blends traditional flavors with French bistro culture and modern fusion. Exceptional Atlantic seafood, from grilled sardines at the Central Market to sophisticated fish restaurants along the Corniche. The Habous Quarter is famous for its patisseries.',
    dishes: ['Fresh Seafood', 'French-Moroccan Fusion', 'Grilled Sardines', 'Habous Pastries', 'Modern Bistros'],
  },
  {
    city: 'Essaouira',
    image: '/images/hero-souk-lamps.webp',
    description: 'Morocco&apos;s seafood capital with an ocean-to-table dining experience. The fishing port sells the freshest catch daily, grilled to order at open-air stalls. Also the center of argan oil production, adding a distinctive nutty finish to salads and couscous.',
    dishes: ['Grilled Fish & Seafood', 'Sardine Tagine', 'Fish Chermoula', 'Argan Oil Cuisine', 'Amlou'],
  },
  {
    city: 'Tangier',
    image: '/images/hero-coastal.webp',
    description: 'At the crossroads of Africa and Europe, Tangier&apos;s cuisine reflects its international history with Spanish, Portuguese, and French influences. Excellent seafood, bocadillo culture, and the unique karantika (chickpea flour cake inherited from Spain).',
    dishes: ['Karantika', 'Fried Fish', 'Bocadillo Sandwiches', 'Seafood Tagine', 'Spanish-Moroccan Fusion'],
  },
  {
    city: 'Chefchaouen',
    image: '/images/hero-coastal.webp',
    description: 'The Blue City&apos;s cuisine reflects its Rif mountain setting with hearty, rustic dishes. Bissara (fava bean soup) is the signature, and fresh local goat cheese is exceptional. Riverside restaurants serve trout tagine.',
    dishes: ['Bissara', 'Fresh Goat Cheese', 'Rif Mountain Tagines', 'Local Honey', 'Trout Tagine'],
  },
  {
    city: 'Meknes',
    image: '/images/hero-marrakech.webp',
    description: 'Surrounded by Morocco&apos;s most fertile land. The heart of olive oil production and the only significant wine region. Known for khliaa (preserved meat), excellent olives, and regional bread varieties.',
    dishes: ['Olive Oil Dishes', 'Moroccan Wine', 'Khliaa', 'Fresh Produce', 'Regional Breads'],
  },
  {
    city: 'Agadir & Souss',
    image: '/images/hero-souk-lamps.webp',
    description: 'The Souss-Massa region produces Morocco&apos;s finest argan oil, saffron (from Taliouine), almonds, and citrus. The cuisine is distinctly Amazigh, featuring tafarnout (Berber flatbread), amlou (argan-almond-honey dip), and saffron tagines.',
    dishes: ['Argan Oil & Amlou', 'Taliouine Saffron', 'Amazigh Cuisine', 'Fresh Seafood', 'Tafarnout Bread'],
  },
  {
    city: 'Ouarzazate & Draa Valley',
    image: '/images/hero-desert.webp',
    description: 'The gateway to the Sahara offers distinctive southern Berber cuisine. Madfouna ("Berber pizza") is a stuffed bread from the Draa Valley. Dates from Zagora are among the finest in Morocco. Desert cuisine features preserved meats and warming spices.',
    dishes: ['Madfouna', 'Zagora Dates', 'Desert Tagines', 'Berber Bread', 'Preserved Meats'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   COOKING TECHNIQUES DATA
   ═══════════════════════════════════════════════════════════════ */

const cookingTechniques = [
  {
    name: 'Tagine Slow-Cooking',
    description: 'The conical tagine lid creates a self-basting cycle: steam rises, condenses on the cool cone, and drips back onto the food. This produces incredibly tender results with concentrated flavors, using minimal water or added fat. The clay pot also imparts a subtle earthy flavor. Traditional tagines are cooked over charcoal (majmar) for the most even, gentle heat.',
  },
  {
    name: 'Couscous Steaming (Tafwira)',
    description: 'Couscous is steamed three times in a couscoussier over the simmering broth that will accompany it. Between each steaming, the grains are broken up by hand, drizzled with water and oil, and raked to prevent clumping. This triple-steaming process is what produces the light, separate grains that distinguish hand-made couscous from the instant variety.',
  },
  {
    name: 'Charmoula Marinating',
    description: 'Charmoula is Morocco&apos;s master marinade: a vibrant paste of fresh cilantro, parsley, garlic, cumin, paprika, lemon juice, and olive oil. Fish, chicken, and vegetables are marinated in charmoula for hours before cooking. The combination of fresh herbs, acid, and spice both flavors and tenderizes the ingredients.',
  },
  {
    name: 'Preserving Lemons (Tkhliil)',
    description: 'Whole lemons are packed in coarse salt and their own juice in glass jars and left to cure for at least 30 days. The salt draws out moisture and preserves the lemons while transforming their flavor from fresh citrus to an intensely concentrated, complex salty-sour taste that is indispensable in Moroccan cooking.',
  },
  {
    name: 'Making Warqa Pastry',
    description: 'The paper-thin pastry used for pastilla and briouats is made by rapidly dabbing a ball of sticky dough against a hot, inverted pan, leaving behind a gossamer-thin layer that cooks in seconds. This requires extraordinary skill and years of practice. A single pastilla can require 20+ layers of warqa.',
  },
  {
    name: 'Smen Fermentation',
    description: 'Smen is Morocco&apos;s aged, fermented butter -- similar to Indian ghee but with a stronger, more pungent character. Butter is kneaded with salt, oregano or thyme, and sometimes a wash of warm water, then packed into clay pots and aged for weeks, months, or even years. Aged smen has a powerful, cheese-like flavor that adds enormous depth to tagines and rfissa.',
  },
  {
    name: 'Communal Bread Baking (Ferran)',
    description: 'Every Moroccan neighborhood has a ferran -- a communal wood-fired bread oven. Families prepare their dough at home, mark it with a distinctive stamp, and send it to the ferran for baking. The fernatchi (baker) manages dozens of loaves simultaneously. This ancient system persists today, connecting neighbors through daily bread.',
  },
  {
    name: 'Flame-Roasting Vegetables',
    description: 'Eggplant, peppers, and tomatoes are charred directly over an open flame -- either on a gas burner or over charcoal -- until the skins blacken and blister. The smoky, charred flesh is then peeled and mashed into the cooked salads (zaalouk, taktouka) that begin every Moroccan meal. This technique imparts a depth of flavor impossible to achieve otherwise.',
  },
  {
    name: 'Hand-Rolling Couscous',
    description: 'The art of hand-rolling couscous from scratch is a communal activity, typically performed by women. Coarse and fine semolina are sprinkled with salted water, then rolled between the palms in a circular motion until tiny, uniform granules form. The process is meditative and social, often accompanied by conversation and tea.',
  },
  {
    name: 'Tanjia Ash-Cooking',
    description: 'Unique to Marrakech, the tanjia vessel is sealed with parchment paper and string, then buried in the smoldering wood-ash embers of a hammam furnace for 8-12 hours. The extremely gentle, consistent heat produces results that no modern oven can replicate -- meat that literally dissolves on the tongue.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHERE TO EAT DATA
   ═══════════════════════════════════════════════════════════════ */

const whereToEat = [
  {
    type: 'Riad Restaurants',
    icon: Star,
    description: 'Many riads (traditional courtyard guesthouses) offer some of the finest dining in Morocco. Meals are prepared by skilled dadas using time-honored recipes, served in stunning architectural settings. Riad dining is often by reservation, with multi-course menus showcasing the best of Moroccan palace cuisine. Notable: Riad Yima (Marrakech), Dar Roumana (Fes), Riad Laaroussa (Fes).',
  },
  {
    type: 'Palace Restaurants',
    icon: Sparkles,
    description: 'Converted palaces and grand houses that offer elaborate diffa (feast) experiences with multiple courses, live music, and spectacular decor. These are the ultimate Moroccan fine dining experiences. Notable: Dar Yacout (Marrakech), Palais Amani (Fes), Al Fassia (Marrakech -- women-run and exceptional).',
  },
  {
    type: 'Street Food Stalls',
    icon: HandPlatter,
    description: 'The heart and soul of Moroccan eating. From the spectacle of Jemaa el-Fnaa to the grills of any medina, street food is where Moroccans eat daily. The golden rule: eat where locals eat, choose stalls with high turnover, and watch your food being cooked fresh. Budget: 10-30 MAD per meal.',
  },
  {
    type: 'Local Restaurants (Snacks)',
    icon: UtensilsCrossed,
    description: 'Small, no-frills eateries known locally as "snacks" serve honest, affordable Moroccan food to a local clientele. Expect tagines, grilled meats, sandwiches, and soups. The food is often excellent, the atmosphere authentic, and the prices low (30-60 MAD for a full meal). Ask locals for their favorite.',
  },
  {
    type: 'Cooking Classes',
    icon: ChefHat,
    description: 'One of the best ways to experience Moroccan cuisine is to learn to cook it. Classes typically include a guided market tour to buy ingredients, followed by hands-on preparation and a communal meal. Available in every major city. Notable: La Maison Arabe (Marrakech), Cafe Clock (Fes), Souk Cuisine (Marrakech).',
  },
  {
    type: 'Modern Fusion Restaurants',
    icon: Globe,
    description: 'A new generation of Moroccan chefs is reimagining traditional cuisine with modern techniques and international influences. Casablanca and Marrakech lead this movement with restaurants that bridge tradition and innovation. Notable: Nomad (Marrakech), Le Jardin (Marrakech), La Sqala (Casablanca).',
  },
];

/* ═══════════════════════════════════════════════════════════════
   VEGETARIAN & VEGAN DATA
   ═══════════════════════════════════════════════════════════════ */

const vegetarianOptions = [
  { name: 'Tagine Khodra', description: 'Seasonal vegetables slow-cooked with saffron, ginger, olive oil, preserved lemons, and olives. Available everywhere.' },
  { name: 'Zaalouk', description: 'Smoky cooked eggplant and tomato salad. Entirely plant-based and found at every restaurant.' },
  { name: 'Taktouka', description: 'Roasted pepper and tomato cooked salad. Vegan and gluten-free.' },
  { name: 'Bissara', description: 'Thick fava bean soup from northern Morocco. Naturally vegan and filling. Just 3-5 MAD.' },
  { name: 'Couscous bil Khodra', description: 'Request couscous "without meat" -- the vegetable broth version is a traditional Friday option.' },
  { name: 'Baghrir with Honey', description: 'Thousand-hole pancakes with butter and honey. A vegetarian breakfast staple.' },
  { name: 'Msemen with Herbs', description: 'Layered flatbread stuffed with herbed fresh cheese. Popular vegetarian street food.' },
  { name: 'Moroccan Salad Spread', description: 'Order "des salades" for 5-8 small vegetable dishes to start your meal.' },
  { name: 'Lentil Soup (Adess)', description: 'Simple lentil soup seasoned with cumin and tomato. Available at most eateries.' },
  { name: 'Amlou', description: 'Rich dip of ground almonds, argan oil, and honey. Vegan if made without butter.' },
  { name: 'Harcha with Cheese', description: 'Semolina griddle bread with soft cheese, jam, or honey.' },
  { name: 'Briouats bil Jben', description: 'Crispy pastry triangles filled with herbed goat cheese.' },
];

const vegetarianTips = [
  'Learn "bla lham" (without meat) and "ana nabati" (I am vegetarian) in Darija.',
  'Moroccan soups often contain meat stock. Ask "wash fiha lham?" (does it contain meat?).',
  'The traditional salad spread at the start of meals is almost always vegetarian or vegan.',
  'Tagines can always be made vegetarian. Ask for "tagine dial khodra" (vegetable tagine).',
  'Riads and cooking classes are the best places to request fully vegetarian meals.',
  'Eggs feature widely in dishes like shakshuka-style tagines and omelettes.',
  'Vegans: Moroccan cooking uses butter and smen liberally. Request olive oil ("zit zaytoun") instead.',
  'Marrakech and Essaouira have the most tourist-adapted menus with labeled vegetarian options.',
];

/* ═══════════════════════════════════════════════════════════════
   FOOD SAFETY DATA
   ═══════════════════════════════════════════════════════════════ */

const foodSafetyTips = [
  { title: 'Follow the Locals', detail: 'Eat where Moroccans eat. High turnover means fresh food and safe preparation. If a stall has a queue of locals, it is a good sign.' },
  { title: 'Watch It Being Cooked', detail: 'Choose stalls and restaurants that prepare food in front of you. Avoid pre-cooked food sitting at room temperature, especially meat and fish dishes.' },
  { title: 'Drink Bottled Water', detail: 'Stick to sealed bottled water (Sidi Ali and Ain Saiss are popular brands). Avoid ice from unknown sources. Hot tea and coffee are always safe.' },
  { title: 'Peel Your Own Fruit', detail: 'Eat only fruits you can peel yourself (oranges, bananas, tangerines) or that have been thoroughly washed. Avoid pre-cut fruit from street vendors.' },
  { title: 'Ease In Gradually', detail: 'If you have a sensitive stomach, start with cooked dishes and work up to raw salads and street food over a few days. Let your digestive system adapt to the new flavors and bacteria.' },
  { title: 'Carry Hand Sanitizer', detail: 'Wet wipes and hand sanitizer are essential for street food eating where handwashing facilities may be limited. Use before and after every meal.' },
  { title: 'Cooked Is Safest', detail: 'Fried, grilled, and stewed foods are the safest options at street stalls. Avoid raw salads at street vendors (fine at restaurants). Freshly fried sfenj and msemen are always safe.' },
  { title: 'Dairy Caution', detail: 'Be cautious with fresh dairy products (milk, jben cheese) from unrefrigerated sources. Pasteurized dairy from shops is fine. Fermented dairy (lben, raib) is generally safe due to its acidity.' },
];

/* ═══════════════════════════════════════════════════════════════
   GLOSSARY DATA
   ═══════════════════════════════════════════════════════════════ */

const glossary = [
  { term: 'Tagine (Tajine)', arabic: '\u0637\u0627\u062c\u064a\u0646', definition: 'Both the conical clay cooking pot and the slow-cooked stew prepared in it.' },
  { term: 'Khobz', arabic: '\u062e\u0628\u0632', definition: 'Round, dense Moroccan bread baked in communal wood-fired ovens. Served with every meal.' },
  { term: 'Smen', arabic: '\u0633\u0645\u0646', definition: 'Aged, fermented butter with strong, pungent flavor. Prized in traditional cooking.' },
  { term: 'Chermoula', arabic: '\u0634\u0631\u0645\u0648\u0644\u0629', definition: 'A vibrant marinade of cilantro, parsley, garlic, cumin, paprika, lemon, and olive oil.' },
  { term: 'Ras el Hanout', arabic: '\u0631\u0623\u0633 \u0627\u0644\u062d\u0627\u0646\u0648\u062a', definition: '"Head of the shop." A complex spice blend of 12-30 spices.' },
  { term: 'Warqa (Ouarka)', arabic: '\u0648\u0631\u0642\u0629', definition: 'Paper-thin pastry sheets for pastilla and briouats. Made by dabbing dough on a hot griddle.' },
  { term: 'Dada', arabic: '\u062f\u0627\u062f\u0629', definition: 'A traditional Moroccan home cook, usually a woman with decades of experience.' },
  { term: 'Diffa', arabic: '\u062f\u064a\u0641\u0629', definition: 'An elaborate Moroccan feast of many courses, served at celebrations.' },
  { term: 'Lben', arabic: '\u0644\u0628\u0646', definition: 'Fermented buttermilk, traditionally served with couscous.' },
  { term: 'Harissa', arabic: '\u0647\u0631\u064a\u0633\u0629', definition: 'Hot chili paste of roasted peppers, garlic, and spices.' },
  { term: 'Amlou', arabic: '\u0623\u0645\u0644\u0648', definition: 'Amazigh dip of ground almonds, argan oil, and honey.' },
  { term: 'Fernatchi', arabic: '\u0641\u0631\u0646\u0627\u062a\u0634\u064a', definition: 'The hammam furnace keeper who also cooks tanjia pots in the ashes.' },
  { term: 'Msemen', arabic: '\u0645\u0633\u0645\u0646', definition: 'Square, layered, pan-fried flatbread. Also spelled rghaif in some regions.' },
  { term: 'Baghrir', arabic: '\u0628\u063a\u0631\u064a\u0631', definition: 'Semolina pancakes with a honeycomb of tiny holes. "Thousand-hole crepes."' },
  { term: 'Atay', arabic: '\u0623\u062a\u0627\u064a', definition: 'Moroccan mint tea. Gunpowder green tea with spearmint and sugar.' },
  { term: 'Maqla', arabic: '\u0645\u0642\u0644\u0629', definition: 'A flat, round griddle for cooking msemen, baghrir, and flatbreads.' },
  { term: 'Couscoussier', arabic: '\u0643\u0633\u0643\u0627\u0633', definition: 'A two-part steaming pot for couscous: broth below, steamer basket above.' },
  { term: 'Gueddid', arabic: '\u0642\u062f\u064a\u062f', definition: 'Sun-dried, salted strips of meat prepared after Eid al-Adha.' },
  { term: 'Khliaa', arabic: '\u062e\u0644\u064a\u0639', definition: 'Preserved meat cooked and stored in its own fat with spices.' },
  { term: 'Tfaya', arabic: '\u062a\u0641\u0627\u064a\u0629', definition: 'Sweet caramelized onions and raisins topping, served over couscous.' },
  { term: 'Mahlaba', arabic: '\u0645\u062d\u0644\u0628\u0629', definition: 'Moroccan milk bar serving rice pudding, juices, smoothies, and milkshakes.' },
  { term: 'Ferran', arabic: '\u0641\u0631\u0627\u0646', definition: 'Communal wood-fired bread oven found in every neighborhood.' },
  { term: 'Nous-Nous', arabic: '\u0646\u0648\u0635 \u0646\u0648\u0635', definition: 'Half espresso, half steamed milk. Morocco&apos;s signature coffee.' },
  { term: 'Jben', arabic: '\u062c\u0628\u0646', definition: 'Fresh white cheese, often from goat milk. Soft and mild.' },
  { term: 'Kemia', arabic: '\u0643\u0645\u064a\u0629', definition: 'Array of small starter dishes served at the beginning of a meal.' },
  { term: 'Majmar', arabic: '\u0645\u062c\u0645\u0631', definition: 'Traditional charcoal brazier used for cooking tagines.' },
  { term: 'Trid', arabic: '\u062a\u0631\u064a\u062f', definition: 'Paper-thin torn bread sheets layered with chicken and lentil broth.' },
  { term: 'Madfouna', arabic: '\u0645\u062f\u0641\u0648\u0646\u0629', definition: '"Berber pizza" -- stuffed bread from the Draa Valley region.' },
  { term: 'Helba', arabic: '\u062d\u0644\u0628\u0629', definition: 'Fenugreek. Used in rfissa, believed to aid lactation.' },
  { term: 'Nana', arabic: '\u0646\u0639\u0646\u0627\u0639', definition: 'Fresh spearmint, the essential herb in Moroccan mint tea.' },
  { term: 'Batbout', arabic: '\u0628\u0637\u0628\u0648\u0637', definition: 'Small, round, pillowy flatbreads that puff up to form a pocket for stuffing.' },
  { term: 'Bissara', arabic: '\u0628\u064a\u0635\u0627\u0631\u0629', definition: 'Thick fava bean soup, a breakfast staple of northern Morocco.' },
  { term: 'Loubia', arabic: '\u0644\u0648\u0628\u064a\u0627', definition: 'White bean stew cooked in a tomato-based sauce with cumin and paprika.' },
  { term: 'Tandir', arabic: '\u062a\u0646\u062f\u064a\u0631', definition: 'Underground clay pit oven used for roasting whole lamb (mechoui).' },
  { term: 'Shiba', arabic: '\u0634\u064a\u0628\u0629', definition: 'Wormwood herb, used as a substitute for mint in tea during summer months.' },
  { term: 'Louiza', arabic: '\u0644\u0648\u064a\u0632\u0629', definition: 'Lemon verbena. A popular herbal tea infusion believed to aid relaxation.' },
  { term: 'Rghaif', arabic: '\u0631\u063a\u0627\u064a\u0641', definition: 'Regional name for msemen in some areas. Same layered, pan-fried flatbread.' },
  { term: 'Zaatar', arabic: '\u0632\u0639\u062a\u0631', definition: 'Thyme, used in herbal teas and as a seasoning. Also refers to an herb blend.' },
  { term: 'Fliou', arabic: '\u0641\u0644\u064a\u0648', definition: 'Pennyroyal mint, brewed as a herbal tea for stomach ailments.' },
];

/* ═══════════════════════════════════════════════════════════════
   RELATED PAGES DATA
   ═══════════════════════════════════════════════════════════════ */

const relatedPages = [
  { title: 'Moroccan Food Guide', href: '/food', description: 'Explore our interactive guide to 30+ must-try Moroccan dishes.' },
  { title: 'Cooking Classes', href: '/cooking-classes', description: 'Learn to cook Moroccan cuisine with expert chefs across the country.' },
  { title: 'Restaurants', href: '/restaurants', description: 'Find the best restaurants from street food stalls to fine dining.' },
  { title: 'Spices of Morocco', href: '/spices', description: 'Deep dive into the aromatic world of Moroccan spices and herbs.' },
  { title: 'Moroccan Tea Culture', href: '/tea-culture', description: 'The art, ritual, and social significance of Moroccan mint tea.' },
  { title: 'Markets & Souks', href: '/markets', description: 'Navigate the vibrant markets where Moroccans shop for food.' },
  { title: 'Moroccan Culture', href: '/culture', description: 'Understand the cultural context behind Moroccan dining traditions.' },
  { title: 'Ramadan in Morocco', href: '/ramadan', description: 'Experience the food traditions of the holy month of Ramadan.' },
];


/* ═══════════════════════════════════════════════════════════════
   DINING ETIQUETTE DATA
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    title: 'Eat with Your Right Hand',
    description:
      'In traditional Moroccan dining, food is eaten with the right hand, using bread as a utensil to scoop tagines and salads. The left hand is considered unclean. If eating from a communal dish, eat only from the section directly in front of you. Spoons are provided for soups and harira.',
  },
  {
    title: 'The Bismillah',
    description:
      'Meals traditionally begin with "Bismillah" (in the name of God) and end with "Alhamdulillah" (praise be to God). As a guest, you do not need to say this yourself, but recognizing the phrase shows cultural awareness. Wait for the host to invite you to begin eating before you start.',
  },
  {
    title: 'Bread Is Sacred',
    description:
      'Bread (khobz) holds a sacred place in Moroccan culture. Never waste it, place it upside down, or throw it away. If you see bread on the ground, it is customary to pick it up and place it aside respectfully. Bread serves as both utensil and accompaniment to every meal in Morocco.',
  },
  {
    title: 'The Tea Ceremony',
    description:
      'Accepting mint tea is a sign of friendship and respect. It is traditionally poured from a height to aerate it and create a light foam. Refusing tea can be considered impolite. Three glasses are customary: the first is as gentle as life, the second as strong as love, the third as bitter as death.',
  },
  {
    title: 'Communal Dining',
    description:
      'Many Moroccan meals are served on large communal platters. Eat from the portion closest to you and do not reach across to the other side. The host may place choice pieces of meat in front of you as a sign of honor and generosity -- accept graciously and with thanks.',
  },
  {
    title: 'Ramadan Considerations',
    description:
      'During the holy month of Ramadan, most Moroccans fast from dawn to sunset. As a visitor, avoid eating, drinking, or smoking in public during daylight hours out of respect. Tourist restaurants remain open behind curtains. The iftar (fast-breaking) meal at sunset is a wonderful cultural experience.',
  },
  {
    title: 'Shoes and Seating',
    description:
      'When invited to a Moroccan home, remove your shoes at the door. Seating is often on cushions around a low table. The most honored seat is farthest from the door. Accept the seat offered to you. It is polite to compliment the food generously and sincerely.',
  },
  {
    title: 'Tipping Customs',
    description:
      'At restaurants, a tip of 10-15% is customary if service is not included. At street food stalls, tipping is not expected but rounding up is appreciated. At upscale restaurants, check if service is included ("service compris") before adding an additional tip on top.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FOOD PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  {
    title: 'The Golden Hour at Jemaa el-Fnaa',
    description:
      'Arrive at Jemaa el-Fnaa around 5:30-6:00 PM as the food stalls are setting up. Billowing charcoal smoke, warm lantern light, and the last rays of sunset create the most atmospheric food photography conditions in the world. Position yourself on a rooftop cafe terrace for the best vantage point.',
  },
  {
    title: 'Shoot the Tagine Reveal',
    description:
      'Ask your server to pause before lifting the tagine lid. Capture the moment the conical lid is removed and steam billows out -- this is the most photogenic moment in Moroccan dining. Shoot from a low angle to catch the steam against natural light from a nearby window.',
  },
  {
    title: 'Spice Market Colors',
    description:
      'The conical mounds of powdered spices in the souks (cumin, paprika, turmeric, saffron) are irresistibly photogenic. Shoot from directly above for a flat-lay of color, or at eye level for dramatic cones receding into narrow souk lanes. Always ask permission before photographing merchants and their wares.',
  },
  {
    title: 'Tea Pouring Action Shots',
    description:
      'The high-pour mint tea technique is uniquely photogenic. Use a fast shutter speed (1/500 or faster) to freeze the stream of golden tea, or a slower speed to capture the flowing motion. Side-angle shots with backlight through the tea stream produce the most striking images.',
  },
  {
    title: 'Overhead Flat-Lays of Moroccan Spreads',
    description:
      'Moroccan meals are inherently photogenic because of the communal serving style. A table spread with tagine, bread, salads, olives, and tea shot from directly overhead makes a stunning flat-lay. Position dishes in a natural cluster, not a rigid grid, for the most authentic feel.',
  },
  {
    title: 'Natural Light in Riads',
    description:
      'Moroccan riads have spectacular natural light flooding through their open courtyards. When dining in a riad, request a table near the courtyard for the best natural light. Avoid using flash in restaurants, which flattens the warm, textured look of Moroccan food.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FOOD MARKETS DATA
   ═══════════════════════════════════════════════════════════════ */

const foodMarkets = [
  {
    name: 'Jemaa el-Fnaa Food Stalls',
    city: 'Marrakech',
    description: 'The world\u0027s largest open-air food court. Every evening, over 100 food stalls set up in the main square, each with its own specialty -- from grilled meats and snail soup to fried fish, harira, and fresh juices.',
    bestFor: 'Street food experience, grilled meats, snail soup, atmosphere',
    tip: 'Go to stalls where locals eat. Stall numbers 1, 14, and 31 are consistently popular with Marrakchis.',
  },
  {
    name: 'Rahba Kedima (Spice Square)',
    city: 'Marrakech',
    description: 'The historic spice square in the heart of the medina, where apothecaries and spice merchants have traded for centuries. Find ras el hanout, saffron, dried herbs, argan oil, and traditional remedies.',
    bestFor: 'Spices, dried herbs, argan oil, ras el hanout',
    tip: 'Buy saffron only from reputable merchants. Real saffron costs 15-30 MAD per gram.',
  },
  {
    name: 'Souk el-Attarine',
    city: 'Fes',
    description: 'The legendary perfume and spice souk of Fes, one of the oldest in Morocco. Narrow lanes lined with sacks of colorful spices, dried flowers, medicinal herbs, and essential oils.',
    bestFor: 'Premium spices, rose water, orange blossom water, essential oils',
    tip: 'The attarine can blend custom ras el hanout to your taste preferences. Ask for a tasting.',
  },
  {
    name: 'Essaouira Fish Port',
    city: 'Essaouira',
    description: 'Every morning, fishermen bring their catch to the port auction. Buy fish directly and have it grilled at one of the open-air stalls along the port wall.',
    bestFor: 'Fresh seafood, grilled fish, port atmosphere',
    tip: 'Arrive before 10 AM for the best selection. A full grilled fish plate costs 40-70 MAD.',
  },
  {
    name: 'Central Market (Marche Central)',
    city: 'Casablanca',
    description: 'A beautiful Art Deco covered market with fresh fish, meat, fruits, vegetables, olives, spices, and flowers. Small restaurants inside serve the freshest seafood in the city.',
    bestFor: 'Fresh produce, seafood restaurants, artisanal products',
    tip: 'The seafood restaurants inside the market offer better value than most restaurants in the city.',
  },
  {
    name: 'Grand Socco & Mendoubia Market',
    city: 'Tangier',
    description: 'Riffian women in traditional striped fouta cloths sell fresh produce, herbs, and homemade cheese. Surrounding streets are packed with bakeries, juice stalls, and bocadillo vendors.',
    bestFor: 'Fresh produce, local cheese, bocadillo sandwiches',
    tip: 'The Riffian women selling produce grow it themselves in nearby mountain villages.',
  },
];


/* ═══════════════════════════════════════════════════════════════
   FOODIE ITINERARY DATA
   ═══════════════════════════════════════════════════════════════ */

const foodieItinerary = [
  {
    day: 'Days 1-3',
    city: 'Marrakech',
    highlights: [
      'Take a cooking class with a guided market tour at La Maison Arabe or Souk Cuisine',
      'Spend an evening exploring the Jemaa el-Fnaa food stalls for grilled meats, snail soup, and sheep head',
      'Visit the Mellah spice market and Rahba Kedima for spices, argan oil, and preserved lemons',
      'Eat tanjia at a local restaurant (try Chez Lamine near Jemaa el-Fnaa for the authentic experience)',
      'Have a traditional breakfast of msemen, baghrir, and sfenj with mint tea at a neighborhood cafe',
      'Splurge on a refined Moroccan dinner at Al Fassia (women-run) or Le Jardin (modern setting)',
    ],
  },
  {
    day: 'Days 4-6',
    city: 'Fes',
    highlights: [
      'Take a Fassi palace cooking class at Palais Amani or Cafe Clock',
      'Explore Souk el-Attarine for premium spices and commission a custom ras el hanout blend',
      'Eat traditional pastilla at Dar Roumana or Restaurant Fes el Bali in the medina',
      'Try rfissa and mrouzia at a local family restaurant recommended by your riad host',
      'Sample the finest kaab el ghazal and sellou pastries at the legendary Patisserie Bennis',
      'Enjoy a rooftop dinner overlooking the medina with harira, Fassi salads, and lamb tagine',
    ],
  },
  {
    day: 'Day 7',
    city: 'Meknes',
    highlights: [
      'Visit the olive souk and taste some of Morocco&apos;s best olive oil',
      'Lunch on khliaa (preserved meat) dishes at a local restaurant',
      'Optional: wine tasting at Chateau Roslane or Les Celliers de Meknes',
      'Try the local pastries at the Habous-style shops near Place el-Hedim',
    ],
  },
  {
    day: 'Days 8-9',
    city: 'Chefchaouen',
    highlights: [
      'Start mornings with a 5 MAD bowl of bissara from a street vendor',
      'Buy fresh goat cheese (jben) from Riffian women in the medina',
      'Eat trout tagine at one of the riverside restaurants near Ras el-Maa waterfall',
      'Take a cooking class at Lina Ryad focusing on Rif mountain cuisine',
    ],
  },
  {
    day: 'Days 10-12',
    city: 'Essaouira',
    highlights: [
      'Buy fresh fish at the port and have it grilled to order at the port stalls',
      'Take a seafood cooking class at L&apos;Atelier de Madada',
      'Try amlou (argan-almond-honey dip) and culinary argan oil at a local cooperative',
      'Eat fish tagine with chermoula at a medina restaurant',
      'Sample the freshest ocean-to-table dining at a Corniche seafood restaurant',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function CuisinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/photo-food-flatlay.webp"
            alt="Traditional Moroccan cuisine flatlay with tagine, couscous, mint tea, and spices"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Cuisine Encyclopedia</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              The Definitive Culinary Encyclopedia
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Cuisine Encyclopedia
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the slow-simmered tagines of Marrakech to the delicate pastilla of Fes, from fiery
              snail soup at Jemaa el-Fnaa to the sacred Friday couscous ritual. The most comprehensive
              guide to one of the world&apos;s great culinary traditions.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ════════════════════════════════════════════════════════
          INTRODUCTION
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Moroccan cuisine is widely regarded as one of the most diverse, flavorful, and
              sophisticated in the world -- a vibrant testament to centuries of cultural exchange at the
              crossroads of Africa, Europe, and the Middle East. Rooted in ancient Amazigh (Berber)
              traditions and enriched by Arab, Andalusian, Ottoman, and French influences, Moroccan
              cooking transforms humble ingredients into extraordinary dishes through patient technique,
              bold spice work, and a deep reverence for communal dining.
            </p>
            <p>
              The cuisine is defined by its masterful balance of sweet and savory -- lamb braised with
              prunes and honey, chicken paired with preserved lemons and olives, flaky pastry dusted
              with cinnamon and sugar over savory fillings. This interplay, inherited from the medieval
              Andalusian-Moorish culinary tradition, distinguishes Moroccan cooking from all other North
              African and Middle Eastern cuisines. The spice palette is among the most complex in the
              world, anchored by ras el hanout (a blend of up to 30 spices), saffron from Taliouine,
              cumin, ginger, cinnamon, and paprika.
            </p>
            <p>
              In 2020, the tradition of couscous preparation was inscribed on UNESCO&apos;s Intangible
              Cultural Heritage list, recognizing the cultural significance of this communal practice.
              Moroccan cuisine as a whole is increasingly recognized by international culinary authorities
              as one of the great food traditions of the world, alongside French, Chinese, Indian, and
              Japanese cooking.
            </p>
            <p>
              Eating in Morocco is far more than sustenance -- it is an act of hospitality, community,
              and celebration. Meals are shared from communal platters, mint tea is poured with ceremony
              and grace, and the simple act of breaking bread together forms the foundation of Moroccan
              social life. Whether you are savoring a 10-dirham street food sandwich or a twelve-course
              diffa (feast) in a palatial riad, Moroccan food will leave an indelible impression on your
              palate and your heart.
            </p>
            <p>
              This encyclopedia covers iconic dishes, street food, Moroccan breads, salads and starters,
              sweets and desserts, the mint tea ceremony, spices, regional specialties across nine cities,
              cooking techniques, where to eat, vegetarian and vegan options, food safety, and a
              comprehensive glossary of Moroccan food terms.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          ICONIC DISHES
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Iconic Moroccan Dishes
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The eight legendary dishes that define Moroccan cuisine -- each with a rich history,
              cultural significance, and flavors that have captivated palates for centuries.
            </p>
          </div>

          <div className="space-y-10">
            {iconicDishes.map((dish, index) => {
              const Icon = dish.icon;
              return (
                <div
                  key={dish.name}
                  className={`card-moroccan overflow-hidden flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="relative w-full md:w-2/5 h-72 md:h-auto shrink-0">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 text-white text-sm font-semibold">
                      <Icon className="w-4 h-4" />
                      {dish.arabicName}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                      {dish.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                      {dish.description}
                    </p>
                    {dish.varieties.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                          Notable Varieties
                        </p>
                        {dish.varieties.map((v) => (
                          <div key={v.name} className="pl-4 border-l-2 border-[var(--color-accent)]/30">
                            <p className="text-sm font-bold text-[var(--text-primary)]">{v.name}</p>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STREET FOOD GUIDE
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HandPlatter className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Street Food Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s street food scene is legendary -- affordable, delicious, and an essential
              part of daily life. Here are the essential street eats to seek out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streetFoodItems.map((item) => (
              <div key={item.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)] font-medium">{item.arabicName}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Coins className="w-3 h-3" />
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--color-primary)]">
                      <MapPin className="w-3 h-3 inline mr-1" />Where:
                    </span>{' '}
                    {item.where}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MOROCCAN BREADS
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Croissant className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Breads
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Bread is sacred in Moroccan culture. It serves as utensil, accompaniment, and symbol of
              sustenance and blessing. These are the essential breads you will encounter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {moroccanBreads.map((bread, index) => (
              <div key={bread.name} className="card-moroccan p-6 md:p-8 flex gap-4 md:gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {bread.name}
                    </h3>
                    <span className="text-xs text-[var(--color-accent)] font-medium">{bread.arabicName}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                    {bread.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SALADS & STARTERS
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-green-500/10 mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Salads &amp; Starters
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Every Moroccan meal begins with a generous spread of cooked salads and starters (kemia)
              that showcase the cuisine&apos;s extraordinary vegetable cookery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saladsStarters.map((item) => (
              <div key={item.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.name}
                  </h3>
                  {item.vegetarian && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500/10 text-green-600">
                      <Leaf className="w-3 h-3" /> Veg
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">{item.arabicName}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SWEETS & DESSERTS
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Sweets &amp; Desserts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan pastries and confections are works of art -- fragrant with orange blossom water,
              honey, almonds, and sesame. Many are tied to specific celebrations and seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sweetsAndDesserts.map((sweet) => (
              <div key={sweet.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {sweet.name}
                  </h3>
                  <span className="text-xs text-[var(--color-accent)] font-medium">{sweet.arabicName}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{sweet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          DRINKS
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Coffee className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Drinks
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the sacred mint tea ceremony to freshly squeezed orange juice and creamy avocado
              smoothies, Moroccan beverages are an essential part of the culinary experience.
            </p>
          </div>

          <div className="space-y-6">
            {moroccanDrinks.map((drink, index) => {
              const Icon = drink.icon;
              return (
                <div
                  key={drink.name}
                  className={`card-moroccan p-6 md:p-8 ${
                    index === 0 ? 'border-l-4 border-l-[var(--color-accent)]' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                          {drink.name}
                        </h3>
                        <span className="text-xs text-[var(--color-accent)] font-medium">{drink.arabicName}</span>
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-3">{drink.description}</p>
                      {drink.ceremony && (
                        <div className="mt-3 p-4 rounded-lg bg-[var(--surface-muted)]">
                          <p className="text-sm font-semibold text-[var(--color-primary)] mb-1">The Ceremony</p>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{drink.ceremony}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SPICES GUIDE
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essential Moroccan Spices
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The soul of Moroccan cooking lies in its spices. These ten essential flavors define
              the cuisine and are worth bringing home from the souks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {spicesGuide.map((spice) => (
              <div key={spice.name} className="card-moroccan p-5">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {spice.name}
                </h3>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">{spice.arabicName}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {spice.description}
                </p>
                <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Uses:</span>{' '}
                    {spice.uses}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--color-accent)]">Buying tip:</span>{' '}
                    {spice.buyingTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          REGIONAL SPECIALTIES
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Regional Specialties by City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each Moroccan city has its own culinary identity shaped by geography, history, and local
              traditions. Here are nine food destinations and what to eat in each.
            </p>
          </div>

          <div className="space-y-8">
            {regionalSpecialties.map((region, index) => (
              <div
                key={region.city}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={region.image}
                    alt={`Food scene in ${region.city}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {region.city}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {region.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {region.dishes.map((dish) => (
                      <span
                        key={dish}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      >
                        <Star className="w-3 h-3" />
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          COOKING TECHNIQUES
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ChefHat className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Cooking Techniques
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The methods that make Moroccan food distinctive -- from ancient clay-pot cooking
              to the art of hand-rolling couscous and making paper-thin warqa pastry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cookingTechniques.map((tech, index) => (
              <div key={tech.name} className="card-moroccan p-6 flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full gradient-moroccan text-white font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WHERE TO EAT
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Eat in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From palace restaurants to street food stalls and cooking classes, here is where to
              find the best food experiences across the kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whereToEat.map((place) => {
              const Icon = place.icon;
              return (
                <div key={place.type} className="card-moroccan p-6">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                    {place.type}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{place.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          VEGETARIAN & VEGAN
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-green-500/10 mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Vegetarian &amp; Vegan Options
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              While Moroccan cuisine centers on meat, there are more plant-based options than you
              might expect. With the right knowledge and a few key phrases, vegetarians and vegans
              can eat very well in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Wheat className="w-5 h-5 text-green-600" />
                12 Plant-Based Dishes to Try
              </h3>
              <div className="space-y-4">
                {vegetarianOptions.map((dish) => (
                  <div key={dish.name} className="card-moroccan p-4">
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-1">{dish.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dish.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-600" />
                Essential Tips for Vegetarians
              </h3>
              <div className="card-moroccan p-6">
                <ul className="space-y-4">
                  {vegetarianTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)]">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-600 font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 card-moroccan p-6 border-l-4 border-l-green-500">
                <h4 className="font-bold text-[var(--text-primary)] mb-2">Key Darija Phrases</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li><strong className="text-[var(--text-primary)]">Bla lham</strong> -- Without meat</li>
                  <li><strong className="text-[var(--text-primary)]">Ana nabati / nabatiya</strong> -- I am vegetarian (m/f)</li>
                  <li><strong className="text-[var(--text-primary)]">Wash fiha lham?</strong> -- Does it contain meat?</li>
                  <li><strong className="text-[var(--text-primary)]">Ghir khodra</strong> -- Only vegetables</li>
                  <li><strong className="text-[var(--text-primary)]">Zit zaytoun</strong> -- Olive oil (request instead of butter)</li>
                  <li><strong className="text-[var(--text-primary)]">Bla zebda</strong> -- Without butter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FOOD SAFETY
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <ShieldCheck className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food Safety Tips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical advice for eating safely and confidently across Morocco, from street food
              stalls to restaurants. Most visitors experience no issues at all.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {foodSafetyTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-5 flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold text-xs shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          GLOSSARY
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Glossary of Moroccan Food Terms
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A comprehensive reference guide to Moroccan culinary vocabulary. Understanding these
              terms will help you navigate menus, markets, and cooking classes with confidence.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossary.map((item) => (
              <div key={item.term} className="card-moroccan p-4 flex gap-4">
                <div className="shrink-0">
                  <p className="text-sm font-bold text-[var(--text-primary)]">{item.term}</p>
                  <p className="text-xs text-[var(--color-accent)] font-medium">{item.arabic}</p>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed border-l border-[var(--border-light)] pl-4">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          RELATED PAGES
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive deeper into Moroccan food culture with these related guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-5 group hover:border-[var(--color-primary)]/30 transition-colors"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-primary)] transition-colors flex items-center gap-2">
                  {page.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      {/* ════════════════════════════════════════════════════════
          DINING ETIQUETTE
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Dining Etiquette
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding Moroccan dining customs will enrich your culinary experience and show
              respect for deeply held traditions of hospitality and communal eating.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {etiquetteRules.map((rule, index) => (
              <div key={rule.title} className="card-moroccan p-6 md:p-8 flex gap-4 md:gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                    {rule.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FOOD PHOTOGRAPHY TIPS
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food Photography Tips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan food is among the most photogenic in the world. Expert tips for capturing
              the colors, textures, and atmosphere of the cuisine on camera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <Camera className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* ════════════════════════════════════════════════════════
          FOODIE ITINERARY
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarDays className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Foodie&apos;s Morocco Itinerary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A 12-day food-focused itinerary hitting the culinary highlights of five cities. From
              cooking classes and market tours to street food crawls and fine dining.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {foodieItinerary.map((stop) => (
              <div key={stop.day} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-auto px-4 h-10 rounded-full gradient-moroccan">
                    <span className="text-white font-bold text-sm whitespace-nowrap">{stop.day}</span>
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {stop.city}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {stop.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)]">
                      <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ════════════════════════════════════════════════════════
          FOOD MARKETS & SOUKS
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBasket className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food Markets &amp; Souks
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The best food markets, spice souks, and fresh produce markets across Morocco where
              chefs and home cooks source the ingredients that define the cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {foodMarkets.map((market) => (
              <div key={market.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {market.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{market.city}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {market.description}
                </p>
                <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--color-primary)]">Best for:</span>{' '}
                    {market.bestFor}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--color-accent)]">Tip:</span>{' '}
                    {market.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ════════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Taste Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore cooking classes to bring these flavors home, browse restaurant recommendations,
            or plan a food-focused itinerary across the kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cooking-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <ChefHat className="w-4 h-4" /> Cooking Classes
            </Link>
            <Link
              href="/food"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <UtensilsCrossed className="w-4 h-4" /> Interactive Food Guide
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
    </>
  );
}

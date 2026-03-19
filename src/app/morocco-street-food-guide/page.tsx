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
  Award,
  Leaf,
  Store,
  Coffee,
  ThumbsUp,
  Soup,
  CookingPot,
  Crown,
  BookOpen,
  Globe,
  Eye,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Street Food Guide 2026 | Best Street Food, Prices & Safety Tips',
  description:
    'The ultimate Morocco street food guide. Discover 15+ must-try street foods from msemen, sfenj, and harira to snail soup, mechoui, and brochettes. Prices, safety tips, best cities, vegetarian options, and food tour recommendations.',
  keywords: [
    'Morocco street food',
    'best street food Morocco',
    'Moroccan street food guide',
    'what to eat in Morocco streets',
    'Jemaa el-Fnaa food stalls',
    'Marrakech street food',
    'Fes street food',
    'Morocco street food prices',
    'Morocco street food safety',
    'Moroccan street food vegetarian',
    'msemen Morocco',
    'sfenj Moroccan donuts',
    'harira soup Morocco',
    'snail soup Marrakech',
    'mechoui Morocco',
    'brochettes Morocco',
    'maakouda Morocco',
    'Morocco food tour',
    'cheap food Morocco',
    'street food guide 2026',
  ],
  openGraph: {
    title: 'Morocco Street Food Guide 2026 | Best Street Food, Prices & Safety Tips',
    description:
      'Everything you need to know about Moroccan street food. 15+ must-try items, safety tips, best cities, vegetarian options, and price guide for eating on the streets of Morocco.',
    url: `${BASE_URL}/morocco-street-food-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-street-food-grill.webp`,
        width: 1200,
        height: 630,
        alt: 'Sizzling Moroccan street food grilling over charcoal at a bustling food stall in the Marrakech medina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Street Food Guide 2026 | 15+ Must-Try Street Foods',
    description:
      'The complete guide to street food in Morocco. From msemen and sfenj to snail soup and mechoui. Prices, safety tips, and the best street food cities.',
    images: [`${BASE_URL}/images/hero-street-food-grill.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-street-food-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-street-food-guide`,
  name: 'Morocco Street Food Guide 2026 | Best Street Food, Prices & Safety Tips',
  description:
    'The ultimate guide to Moroccan street food covering 15+ must-try items, food safety tips, best street food cities, Jemaa el-Fnaa food stalls, vegetarian options, prices, and food tour recommendations.',
  url: `${BASE_URL}/morocco-street-food-guide`,
  image: `${BASE_URL}/images/hero-street-food-grill.webp`,
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
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-street-food-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Street Food Guide', item: `${BASE_URL}/morocco-street-food-guide` },
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
      name: 'Is street food safe to eat in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Moroccan street food is generally safe if you follow basic rules: eat at stalls with high customer turnover, choose food cooked fresh in front of you, avoid pre-cooked food sitting out, drink bottled water, and start with cooked foods if you have a sensitive stomach. Most travelers have no issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does street food cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan street food is incredibly affordable. Snacks like msemen and sfenj cost from 1-3 MAD each. A full street food meal with brochettes, bread, and salad costs from 20-40 MAD. Fresh orange juice is from 5 MAD. You can eat well all day on the streets for from 60-100 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best city in Morocco for street food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is widely considered the best city for street food, especially Jemaa el-Fnaa which transforms nightly into the world\'s largest open-air restaurant with over 100 food stalls. Fes, Casablanca, and Meknes also have outstanding street food scenes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I try first at Jemaa el-Fnaa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with fresh orange juice from the carts lining the square (from 5 MAD). Then try the snail soup (babouche), which is a uniquely Moroccan experience. Follow with brochettes from a busy grill stall, and finish with a bowl of harira soup. Avoid the stalls with aggressive touts and choose those with the most local customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there vegetarian street food options in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many Moroccan street foods are naturally vegetarian: msemen and baghrir flatbreads with honey, maakouda (potato fritters), bissara (fava bean soup), zaalouk (eggplant salad), harira (vegetarian version available), fresh fruit juices, and briouats with cheese. Say "bla lhem" (without meat) when ordering.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do street food stalls open in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street food operates on different schedules. Breakfast stalls (msemen, sfenj, bissara) open from 6-7 AM. Lunch stalls (brochettes, bocadillos) peak from 12-2 PM. The famous Jemaa el-Fnaa night market sets up around 5 PM and runs until midnight. Harira stalls are busiest at sunset, especially during Ramadan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I tip street food vendors in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping at street food stalls is not expected but small change is always appreciated. If a vendor is particularly friendly or generous with portions, leaving 2-5 MAD is a kind gesture. At sit-down street food establishments with table service, rounding up the bill or leaving 5-10 MAD is customary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I avoid eating from street stalls in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid raw salads at street stalls (they may be washed in tap water), pre-cooked food that has been sitting out for hours, dairy products left unrefrigerated, and stalls with no visible customers. Stick to freshly cooked hot food, peelable fruits, and bottled water. Avoid ice in drinks unless at a reputable establishment.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MUST-TRY STREET FOODS
   ═══════════════════════════════════════════════════════════════ */

const streetFoods = [
  {
    name: 'Msemen',
    icon: Utensils,
    category: 'Breakfast Staple',
    description:
      'Square, flaky layered flatbread that is Morocco\'s answer to a croissant. Made from a simple dough of flour, semolina, butter, and oil, msemen is stretched paper-thin by hand, folded into layers, and pan-fried on a flat griddle until golden and crispy outside with soft, buttery layers inside. Served with honey and butter for breakfast, or stuffed with spiced minced meat and vegetables for a hearty lunch.',
    whereToBest: 'Every morning street stall across Morocco. Look for women making them on sidewalk griddles. The freshest msemen is made to order in front of you.',
    priceRange: 'From 2 MAD plain, from 5 MAD stuffed with meat and vegetables',
    insiderTip: 'The best msemen is from women cooking on portable griddles in the early morning. If the layers separate easily when you pull it apart, it was made by an expert. Ask for "msemen m\'amer" (stuffed msemen) for the filled version.',
    bestCities: ['Everywhere', 'Fes', 'Meknes', 'Marrakech'],
  },
  {
    name: 'Sfenj (Moroccan Doughnuts)',
    icon: CookingPot,
    category: 'Breakfast Treat',
    description:
      'Puffy rings of yeasted dough deep-fried until golden brown and airy. Sfenj are Morocco\'s beloved doughnuts, eaten plain, dusted with sugar, or split open and filled with honey, jam, or soft cheese. The dough is stretched and shaped by hand with remarkable speed by vendors who have perfected the technique over decades. Best eaten hot from the fryer when they are at their lightest and crispiest.',
    whereToBest: 'Northern cities have the best sfenj tradition. Tangier, Tetouan, and Fes morning stalls. Look for stalls with a queue of locals at dawn.',
    priceRange: 'From 1 MAD each, from 10 MAD for a bag of 10',
    insiderTip: 'Sfenj vendors start frying at 5-6 AM and often sell out by 9 AM. The earlier you arrive, the fresher they are. Watch the vendor shape the dough with wet hands and drop it into the oil in one fluid motion. It is mesmerizing.',
    bestCities: ['Tangier', 'Tetouan', 'Fes', 'Chefchaouen'],
  },
  {
    name: 'Harira',
    icon: Soup,
    category: 'Essential Soup',
    description:
      'Morocco\'s most beloved soup and the dish that breaks the fast during Ramadan. A hearty, tomato-based broth thick with lentils, chickpeas, vermicelli noodles, fresh herbs, and sometimes lamb. Harira is deeply nourishing and comforting, with a complex flavor built from tomatoes, onions, celery, cilantro, parsley, ginger, and a touch of cinnamon. It is served year-round at street stalls but reaches its peak during Ramadan evenings.',
    whereToBest: 'Street stalls across all cities, especially during Ramadan at sunset. The best harira is at humble roadside stalls where locals queue at dusk.',
    priceRange: 'From 5 MAD per bowl at street stalls, from 20 MAD at restaurants',
    insiderTip: 'During Ramadan, the iftar (fast-breaking) atmosphere is unforgettable. Even if you are not fasting, visiting a harira stall at sunset lets you experience this deeply communal moment. Harira is traditionally served with dates, hard-boiled eggs, and chebakia honey pastries.',
    bestCities: ['Fes', 'Marrakech', 'Meknes', 'Casablanca'],
  },
  {
    name: 'Babouche (Snail Soup)',
    icon: Soup,
    category: 'Adventurous Delicacy',
    description:
      'Small garden snails simmered in a fragrant broth of thyme, licorice root, anise, gum arabic, caraway, and black pepper. Served in a bowl with the aromatic broth and a toothpick for extracting the tender snails from their shells. The broth is considered medicinal by Moroccans, believed to aid digestion and warm the body. An acquired taste that is quintessentially Moroccan and an absolute must-try for adventurous eaters.',
    whereToBest: 'Jemaa el-Fnaa in Marrakech has the most famous snail vendors. Fes medina stalls are equally excellent with less tourist markup.',
    priceRange: 'From 10 MAD per bowl, from 5 MAD for broth only',
    insiderTip: 'Drink the broth first. Many Moroccans visit snail vendors specifically for the warming, spiced broth rather than the snails themselves. The broth is considered a natural remedy for colds and stomach ailments. Look for vendors with large steaming pots surrounded by local men.',
    bestCities: ['Marrakech', 'Fes', 'Meknes'],
  },
  {
    name: 'Mechoui',
    icon: Flame,
    category: 'Celebration Feast',
    description:
      'Whole lamb slow-roasted in an underground clay pit for hours, basted with butter and cumin until the exterior is crackling golden and the meat inside is so impossibly tender it slides off the bone with a gentle touch. Mechoui is traditionally a celebration dish for weddings and festivals, but in Marrakech it is available daily from specialized stalls where whole lambs hang in the windows.',
    whereToBest: 'Mechoui Alley in the Marrakech medina near Jemaa el-Fnaa. Point at the lamb and they carve your portion on the spot. Also excellent at festival celebrations.',
    priceRange: 'From 60 MAD for a generous portion with bread and cumin salt, from 120 MAD at restaurants',
    insiderTip: 'At Mechoui Alley, ask for shoulder meat specifically. The shoulder is the most tender and flavorful cut. The meat is served with nothing more than cumin and salt, which is all it needs. Order a portion with bread and sit at the communal tables to eat.',
    bestCities: ['Marrakech', 'Fes', 'Meknes'],
  },
  {
    name: 'Brochettes (Grilled Skewers)',
    icon: Flame,
    category: 'Street Food King',
    description:
      'Morocco\'s most ubiquitous and beloved street food: cubes of marinated lamb, chicken, or kefta (spiced minced meat) threaded onto metal skewers and grilled over glowing charcoal. The marinade typically includes cumin, paprika, onion, salt, and olive oil. Brochettes are served with crusty bread, raw onion slices, a simple tomato-and-onion salad, and harissa hot sauce. The smell of charcoal-grilled meat wafting through the medina is one of Morocco\'s defining sensory experiences.',
    whereToBest: 'Jemaa el-Fnaa in Marrakech, any medina grill stall, and roadside stops along highways. The best brochettes are at stalls with high turnover and real charcoal.',
    priceRange: 'From 15 MAD per skewer, from 40 MAD for a mixed plate with bread, salad, and tea',
    insiderTip: 'Moroccan brochettes are always cooked over real charcoal, never gas. If you see gas, walk on. The liver brochettes (kebda) are the adventurous choice and a local favorite. For a full meal, order a mixed plate with lamb, chicken, and kefta skewers.',
    bestCities: ['Marrakech', 'Fes', 'Casablanca', 'Tangier'],
  },
  {
    name: 'Maakouda (Potato Fritters)',
    icon: CookingPot,
    category: 'Cheap & Satisfying',
    description:
      'Golden deep-fried potato patties that are crispy on the outside and fluffy inside, seasoned with cumin, parsley, and garlic. Maakouda is most often tucked into a crusty bread roll with harissa hot sauce, olives, and pickled vegetables to create one of Morocco\'s most satisfying cheap sandwiches. It is the working person\'s snack, filling and available everywhere for almost nothing.',
    whereToBest: 'Casablanca and Marrakech medina stalls. Look for vendors with a vat of bubbling oil and a stack of golden fritters.',
    priceRange: 'From 3 MAD each, from 10 MAD in a sandwich with all the fixings',
    insiderTip: 'Order your maakouda sandwich with "ketchup, harissa, w zitoune" (ketchup, hot sauce, and olives) for the classic combination. Some vendors add a fried egg inside the sandwich for an extra 2 MAD, which makes it even more satisfying.',
    bestCities: ['Casablanca', 'Marrakech', 'Rabat', 'Tangier'],
  },
  {
    name: 'Baghrir (Thousand-Hole Pancakes)',
    icon: Utensils,
    category: 'Breakfast Classic',
    description:
      'Round, spongy semolina pancakes with a distinctive surface covered in hundreds of tiny holes that soak up melted butter and honey like a delicious sponge. Baghrir is cooked on one side only, producing a lacy, porous top and a smooth golden bottom. Made from a fermented batter of semolina, flour, yeast, and baking powder, these pancakes are a beloved breakfast and teatime treat across all of Morocco.',
    whereToBest: 'Morning street stalls and markets across the country. Every neighborhood has at least one woman known for making perfect baghrir.',
    priceRange: 'From 2 MAD each, from 15 MAD for a stack of 10 with butter and honey',
    insiderTip: 'The holes should be uniform and cover the entire surface. If they are uneven, the batter was not fermented long enough. The best way to eat baghrir is to drizzle hot melted butter and honey over the top and let it seep into every hole before taking your first bite.',
    bestCities: ['Everywhere', 'Fes', 'Marrakech', 'Chefchaouen'],
  },
  {
    name: 'Bocadillos (Moroccan Sandwiches)',
    icon: Store,
    category: 'Fast Food',
    description:
      'Morocco\'s answer to fast food: crusty baguette sandwiches stuffed with infinitely customizable combinations of kefta (spiced ground meat), fried eggs, tuna, cheese, olives, harissa, tomatoes, and onions. Bocadillos draw on Morocco\'s French colonial heritage but have evolved into something entirely their own. They are available on virtually every street corner and are the go-to quick lunch for students and workers.',
    whereToBest: 'Casablanca and Tangier have the best bocadillo culture. Look for stalls near universities, markets, and bus stations.',
    priceRange: 'From 15 MAD for basic, from 25 MAD for fully loaded with multiple fillings',
    insiderTip: 'Order a "complet" (complete) bocadillo to get every filling the vendor offers. Point at what you want and say "zid" (add more) until your sandwich is perfect. The best bocadillo stalls have a row of ingredient bowls for you to customize on the spot.',
    bestCities: ['Casablanca', 'Tangier', 'Rabat', 'Marrakech'],
  },
  {
    name: 'Bissara (Fava Bean Soup)',
    icon: Soup,
    category: 'Worker\'s Breakfast',
    description:
      'A thick, velvety fava bean soup drizzled generously with olive oil and dusted with cumin and paprika. Served steaming hot in small earthenware bowls with crusty bread for dunking. Bissara is Morocco\'s ultimate cheap, filling breakfast, beloved by workers, students, and early risers across the northern half of the country. It is naturally vegan, deeply satisfying, and costs next to nothing.',
    whereToBest: 'Northern cities excel at bissara. Chefchaouen, Fes, and Meknes have the best versions. Look for morning stalls with bubbling pots and a queue of men in djellabas.',
    priceRange: 'From 5 MAD per bowl with bread',
    insiderTip: 'Ask for extra olive oil (zitoune) and cumin (kamoun) on top. The quality of the olive oil makes a significant difference. The best bissara stalls use freshly pressed local olive oil poured generously over the top.',
    bestCities: ['Chefchaouen', 'Fes', 'Meknes', 'Tetouan'],
  },
  {
    name: 'Grilled Sardines',
    icon: Flame,
    category: 'Coastal Specialty',
    description:
      'Morocco is the world\'s largest exporter of sardines, and nowhere on earth are they fresher than at the coastal ports. Whole sardines are grilled over charcoal with nothing more than salt, cumin, and a squeeze of lemon. The simplicity is the point: fresh sardines need no embellishment. At Essaouira\'s port, you choose your fish from the morning catch and it is grilled on the spot.',
    whereToBest: 'Essaouira port grill stalls are legendary. Agadir, Casablanca Central Market, and Tangier port also excel. Always choose coastal cities for sardines.',
    priceRange: 'From 15 MAD per plate of 4-6 sardines with bread and salad, from 30 MAD at restaurants',
    insiderTip: 'At Essaouira port, walk past the first row of stalls (they target tourists with higher prices) and head deeper into the fish market where locals eat. A plate of mixed grilled fish with bread, salad, and a soft drink costs from 40 MAD for a feast.',
    bestCities: ['Essaouira', 'Agadir', 'Casablanca', 'Tangier'],
  },
  {
    name: 'Briouats (Stuffed Pastries)',
    icon: CookingPot,
    category: 'Versatile Snack',
    description:
      'Crispy triangular or cigar-shaped pastries made from thin warqa pastry wrapped around savory or sweet fillings. Savory versions contain spiced minced meat, fresh cheese and herbs, or seafood. Sweet versions are filled with almond paste and soaked in honey. Briouats are Morocco\'s most versatile snack, available at bakeries, street vendors, and in every home during Ramadan.',
    whereToBest: 'Fes and Marrakech bakeries. During Ramadan, briouats appear at every stall in the country. The cheese-filled version is a northern specialty.',
    priceRange: 'From 3 MAD each, from 20 MAD for a mixed plate of 6-8 pieces',
    insiderTip: 'During Ramadan, every bakery and street vendor displays enormous trays of freshly made briouats in the hours before iftar. This is the best time to buy them, when they are at their freshest and most abundant. Ask for "briouats b\'louz" (with almonds) for the sweet version.',
    bestCities: ['Fes', 'Marrakech', 'Meknes', 'Tetouan'],
  },
  {
    name: 'Khobz (Moroccan Bread)',
    icon: Utensils,
    category: 'Daily Essential',
    description:
      'Round, flat loaves of crusty wheat bread baked in communal wood-fired neighborhood ovens (ferrans). Khobz is the single most important element of Moroccan dining: it is both food and utensil, torn into pieces and used to scoop tagines, pinch couscous, and mop up every last drop of sauce. Families prepare their dough at home and carry it to the neighborhood ferran, where it is stamped with a family mark and baked alongside dozens of other loaves.',
    whereToBest: 'Every neighborhood bakery (ferran) across Morocco. The bread is best within an hour of coming out of the oven. Follow the smell of baking bread.',
    priceRange: 'From 1.5 MAD per loaf',
    insiderTip: 'Visit a neighborhood ferran around 10 AM when the morning batch comes out of the oven. You can buy a loaf straight from the baker. Look for the traditional round loaves with flour-dusted tops, not the baguettes. Tear and share with olive oil and fresh tomato for the simplest Moroccan meal.',
    bestCities: ['Everywhere'],
  },
  {
    name: 'Tangia (Marrakech Urn)',
    icon: CookingPot,
    category: 'Marrakech Exclusive',
    description:
      'A clay urn filled with chunks of lamb or beef, seasoned with preserved lemons, saffron, cumin, garlic, and smen (aged butter), sealed with parchment, and slow-cooked for 6-8 hours in the ashes of a public hammam (bathhouse) furnace. Tangia is uniquely Marrakchi and cannot be authentically replicated elsewhere. The meat emerges so tender it falls apart with a breath.',
    whereToBest: 'Exclusively in Marrakech. Order from medina restaurants that still use hammam furnaces. Some stalls in the souk serve individual portions.',
    priceRange: 'From 80 MAD per person (always shared between 2-4 people)',
    insiderTip: 'Ask if the tangia was cooked in a hammam furnace or the restaurant kitchen. The hammam version is always superior. Tangia is traditionally a bachelor\'s dish prepared by men without kitchens. Order it in advance at lunch and collect it for dinner.',
    bestCities: ['Marrakech'],
  },
  {
    name: 'Fresh Orange Juice',
    icon: Coffee,
    category: 'Essential Drink',
    description:
      'Morocco grows some of the world\'s sweetest oranges, and fresh-squeezed juice is available on every street corner at astonishingly low prices. The juice is squeezed to order from seasonal oranges that are sweeter and more flavorful than anything you will find at home. Jemaa el-Fnaa in Marrakech alone has dozens of competing juice carts, each squeezing hundreds of glasses per day.',
    whereToBest: 'Jemaa el-Fnaa in Marrakech has the most famous juice vendors. Available everywhere across the country at street carts.',
    priceRange: 'From 5 MAD at street carts, from 15 MAD at restaurants',
    insiderTip: 'At Jemaa el-Fnaa, juice vendors compete aggressively. Walk past and check prices before sitting down. The standard is from 5 MAD for a full glass. Watch that they squeeze it fresh and do not add water. Some vendors also offer mixed juice with pomegranate, carrot, and avocado.',
    bestCities: ['Marrakech', 'Fes', 'Meknes', 'Casablanca'],
  },
  {
    name: 'Kefta Sandwich',
    icon: Flame,
    category: 'Quick Meal',
    description:
      'Spiced ground lamb or beef formed into small patties or sausage shapes, grilled over charcoal, and served in a crusty bread roll with tomatoes, onions, harissa, and sometimes a fried egg. The kefta is seasoned with cumin, paprika, parsley, onion, and salt, giving it an intensely savory flavor. This is one of the cheapest and most satisfying full meals you can find on Moroccan streets.',
    whereToBest: 'Medina grill stalls in any major city. The best kefta sandwiches come from stalls that grill the meat fresh to order over real charcoal.',
    priceRange: 'From 15 MAD for a sandwich, from 35 MAD for a plate with salad and fries',
    insiderTip: 'Order your kefta sandwich "b\'l\'beid" (with egg) for the ultimate version. The fried egg adds richness that complements the spiced meat perfectly. Add harissa for heat and a squeeze of lemon for brightness.',
    bestCities: ['Marrakech', 'Casablanca', 'Fes', 'Rabat'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST STREET FOOD CITIES
   ═══════════════════════════════════════════════════════════════ */

const streetFoodCities = [
  {
    city: 'Marrakech',
    icon: Flame,
    title: 'The Street Food Capital',
    description:
      'Marrakech is the undisputed street food capital of Morocco and arguably all of Africa. Jemaa el-Fnaa transforms nightly into the world\'s largest open-air restaurant with over 100 numbered food stalls. Beyond the square, the medina\'s narrow alleys hide extraordinary specialist stalls that have served the same dishes for generations.',
    mustTry: ['Jemaa el-Fnaa night stalls', 'Mechoui Alley lamb', 'Snail soup', 'Fresh orange juice', 'Tangia'],
    bestAreas: 'Jemaa el-Fnaa, Mechoui Alley, Rue Bani Marine, medina souks',
  },
  {
    city: 'Fes',
    icon: Crown,
    title: 'The Gourmet Street Scene',
    description:
      'Fes has the most refined street food in Morocco. The ancient medina\'s food souks are the most extensive in the country, with entire streets dedicated to single ingredients or preparations. The street food here is more subtle and complex than in Marrakech, reflecting the city\'s 1,200-year culinary heritage.',
    mustTry: ['Fassi-style harira', 'Fresh bread from wood ovens', 'Briouats', 'Sellou confection', 'Snail soup'],
    bestAreas: 'Talaa Kebira, Talaa Seghira, Rcif Square, near Bou Inania Madrasa',
  },
  {
    city: 'Casablanca',
    icon: Globe,
    title: 'The Cosmopolitan Bites',
    description:
      'Morocco\'s largest city has the most diverse street food scene. French-influenced bocadillos sit alongside traditional Moroccan stalls. The Central Market is a street food destination in itself, and the working-class neighborhoods like Derb Sultan serve the most authentic and cheapest street food.',
    mustTry: ['Central Market fish', 'Bocadillos', 'Maakouda sandwiches', 'Avocado smoothie', 'Patisserie pastries'],
    bestAreas: 'Central Market, Derb Sultan, Habous Quarter, near Hassan II Mosque',
  },
  {
    city: 'Meknes',
    icon: Award,
    title: 'The Hidden Gem',
    description:
      'Meknes is the most underrated street food city in Morocco. The medina food stalls are patronized almost exclusively by locals, which means better quality, lower prices, and more authentic experiences. The olive and preserved food stalls here are the best in the country.',
    mustTry: ['Khlii (preserved meat)', 'Olive varieties', 'Stuffed msemen', 'Kaab el-ghazal', 'Cheap harira'],
    bestAreas: 'Place el-Hedim, medina food stalls, near Bab Mansour',
  },
  {
    city: 'Essaouira',
    icon: Compass,
    title: 'The Seafood Paradise',
    description:
      'Essaouira\'s fishing port is one of the great street food spectacles on earth. The daily catch is grilled on the spot at open-air stalls right at the port. Choose your fish, have it grilled over charcoal, and eat it overlooking the Atlantic. Simple, fresh, and magnificent.',
    mustTry: ['Port-grilled sardines', 'Mixed fish plate', 'Seafood brochettes', 'Calamari', 'Argan oil amlou'],
    bestAreas: 'Fishing port grills, Place Moulay Hassan, medina food stalls',
  },
  {
    city: 'Chefchaouen',
    icon: Heart,
    title: 'The Mountain Kitchen',
    description:
      'The blue city has a distinct Riffian street food tradition. The food is heartier and simpler, reflecting mountain living. Bissara is king here, and the fresh goat cheese drizzled with olive oil is a specialty you will not find elsewhere. The relaxed atmosphere means street food is enjoyed slowly.',
    mustTry: ['Bissara', 'Goat cheese with olive oil', 'Baghrir with mountain honey', 'Riffian herb tea', 'Stuffed msemen'],
    bestAreas: 'Place Outa el-Hammam, Ras el-Ma area, medina alleys',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: JEMAA EL-FNAA STALL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const jemaaGuide = [
  {
    item: 'Grilled Meats (Stalls 1-100+)',
    description: 'Brochettes of lamb, chicken, kefta, liver, sausage, and mixed grill plates served with bread, salad, and harissa. The most popular stalls draw enormous crowds.',
    price: 'From 30 MAD per plate',
    tip: 'Stalls with the most Moroccan customers serve the best food. Avoid stalls where touts grab your arm.',
  },
  {
    item: 'Snail Soup (Babouche)',
    description: 'Steaming pots of snails in fragrant herbal broth. The vendors ladle out bowls and hand you a toothpick. Drink the broth for its medicinal warmth.',
    price: 'From 10 MAD per bowl',
    tip: 'The snail vendors in the center of the square are the most established. The broth alone is worth the visit.',
  },
  {
    item: 'Harira & Soup Stalls',
    description: 'Thick harira soup served with dates and bread. Some stalls also serve tchicha (barley soup) and lentil soup. The best are busiest at dusk.',
    price: 'From 5 MAD per bowl',
    tip: 'Visit at sunset when the soups are freshest and the atmosphere is most magical.',
  },
  {
    item: 'Fresh Juice Carts',
    description: 'Dozens of orange juice carts line the edges of the square, each squeezing hundreds of glasses per evening. Some also offer mixed juices and smoothies.',
    price: 'From 5 MAD per glass',
    tip: 'Check that they squeeze the juice fresh. The carts on the edges of the square tend to offer better prices than those in the center.',
  },
  {
    item: 'Sheep Head (Tête de Mouton)',
    description: 'For the truly adventurous: steamed sheep heads served with cumin and salt. The cheeks and tongue are considered delicacies. Not for the faint of heart but an authentic experience.',
    price: 'From 20 MAD per portion',
    tip: 'The cheek meat is the mildest and most tender. Ask the vendor to prepare a plate of the best cuts for you.',
  },
  {
    item: 'Fried Fish & Seafood',
    description: 'Battered and fried fish, shrimp, and calamari served with bread and harissa. A taste of the coast in the heart of landlocked Marrakech.',
    price: 'From 25 MAD per plate',
    tip: 'Choose stalls where the fish is fried fresh to order, not pre-fried and sitting under heat lamps.',
  },
  {
    item: 'Dried Fruits & Nuts',
    description: 'Vendors sell bags of roasted almonds, mixed nuts, dried figs, dates, and dried apricots. Perfect snacking food for walking around the square.',
    price: 'From 10 MAD per bag',
    tip: 'Taste before buying and negotiate the price. The dates from Zagora and Erfoud are the best quality.',
  },
  {
    item: 'Egg Sandwiches & Bocadillos',
    description: 'Quick sandwiches stuffed with fried eggs, tuna, cheese, and olives. The budget traveler\'s best friend at Jemaa el-Fnaa.',
    price: 'From 15 MAD per sandwich',
    tip: 'These stalls operate later into the night when the grill stalls have closed, perfect for a midnight snack.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    rule: 'Choose busy stalls with high turnover',
    icon: Users,
    description: 'The golden rule of street food worldwide applies doubly in Morocco. Stalls with long lines of local customers are safe because the food is prepared fresh and never sits out. If a stall has no customers, there is usually a reason.',
  },
  {
    rule: 'Watch food being cooked fresh',
    icon: Eye,
    description: 'The safest street food is cooked in front of you. Grilled brochettes, freshly fried sfenj, and harira ladled from a simmering pot are all safe choices. Avoid pre-cooked food that has been sitting under heat lamps or on a counter for hours.',
  },
  {
    rule: 'Drink bottled water only',
    icon: ShieldCheck,
    description: 'Tap water in Morocco is generally treated but can cause stomach issues for visitors not accustomed to the local bacterial flora. Always drink bottled water (Sidi Ali and Sidi Harazem are popular brands). Avoid ice in drinks at street stalls.',
  },
  {
    rule: 'Avoid raw salads at street stalls',
    icon: AlertTriangle,
    description: 'Raw vegetables at street stalls may be washed in tap water. Stick to cooked foods for the first few days. At restaurants, raw salads are generally safe since they use filtered water. Peelable fruits (oranges, bananas) are always safe.',
  },
  {
    rule: 'Start slow with sensitive stomachs',
    icon: Heart,
    description: 'If you have a sensitive stomach, ease into street food gradually. Start with cooked items like harira, bread, and grilled meats. After a day or two, your system will adjust and you can explore more adventurous options like snail soup and raw salads.',
  },
  {
    rule: 'Check oil freshness at fried food stalls',
    icon: Sparkles,
    description: 'Good fried food (sfenj, maakouda, briouats) should come from clean, light-colored oil. If the oil is very dark or smells rancid, choose a different stall. The best sfenj vendors change their oil regularly throughout the morning.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: VEGETARIAN STREET FOOD
   ═══════════════════════════════════════════════════════════════ */

const vegetarianStreetFoods = [
  { name: 'Msemen with Honey & Butter', veganFriendly: false, price: 'From 2 MAD', description: 'Flaky flatbread with honey and butter. Vegan version available with olive oil and honey.' },
  { name: 'Baghrir with Honey', veganFriendly: true, price: 'From 2 MAD', description: 'Spongy pancakes with hundreds of holes, served with honey. Naturally vegan when eaten without butter.' },
  { name: 'Maakouda', veganFriendly: true, price: 'From 3 MAD', description: 'Fried potato fritters with cumin and herbs. Naturally vegan. Delicious in a bread sandwich with harissa.' },
  { name: 'Bissara', veganFriendly: true, price: 'From 5 MAD', description: 'Thick fava bean soup with olive oil and cumin. Naturally vegan, cheap, and deeply satisfying.' },
  { name: 'Harira (Vegetarian)', veganFriendly: true, price: 'From 5 MAD', description: 'Ask for "harira bla lhem" (without meat). Lentils and chickpeas provide the protein. Just as hearty.' },
  { name: 'Briouats with Cheese', veganFriendly: false, price: 'From 3 MAD', description: 'Crispy pastry triangles filled with fresh cheese and herbs. Vegetarian but not vegan.' },
  { name: 'Fresh Orange Juice', veganFriendly: true, price: 'From 5 MAD', description: 'Squeezed to order from Moroccan oranges. The best cheap refreshment in the country.' },
  { name: 'Zaalouk', veganFriendly: true, price: 'From 10 MAD', description: 'Smoky eggplant and tomato salad with garlic and olive oil. Naturally vegan. Served with bread.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: STREET FOOD PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { category: 'Breakfast Snacks', examples: 'Msemen, sfenj, baghrir', price: 'From 1-3 MAD each', dailyBudget: 'From 10 MAD' },
  { category: 'Soups', examples: 'Harira, bissara, snail soup', price: 'From 5-15 MAD', dailyBudget: 'From 15 MAD' },
  { category: 'Sandwiches', examples: 'Bocadillos, kefta, maakouda', price: 'From 10-25 MAD', dailyBudget: 'From 30 MAD' },
  { category: 'Grilled Meats', examples: 'Brochettes, kefta plates, mechoui', price: 'From 15-60 MAD', dailyBudget: 'From 40 MAD' },
  { category: 'Seafood', examples: 'Grilled sardines, mixed fish plate', price: 'From 15-50 MAD', dailyBudget: 'From 40 MAD' },
  { category: 'Drinks', examples: 'Orange juice, mint tea, smoothies', price: 'From 5-20 MAD', dailyBudget: 'From 15 MAD' },
  { category: 'Pastries & Sweets', examples: 'Briouats, chebakia, ghriba', price: 'From 2-5 MAD each', dailyBudget: 'From 10 MAD' },
  { category: 'Full Day Street Food', examples: 'Breakfast, lunch, snacks, dinner, drinks', price: 'All day', dailyBudget: 'From 80-120 MAD' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD TOUR RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const foodTours = [
  {
    city: 'Marrakech',
    type: 'Evening Street Food Tour',
    description: 'Guided walk through Jemaa el-Fnaa and the medina with 8-12 tastings including snails, brochettes, harira, pastries, and mint tea. Most tours run 3-4 hours starting at sunset.',
    price: 'From 350 MAD per person',
    bestFor: 'First-time visitors who want a curated introduction to Marrakech street food with a knowledgeable local guide.',
  },
  {
    city: 'Fes',
    type: 'Medina Food Walk',
    description: 'Deep dive into the Fes medina food souks with a local food expert. Visit bakeries, spice shops, olive vendors, and hidden stalls. Includes 10+ tastings.',
    price: 'From 400 MAD per person',
    bestFor: 'Food enthusiasts who want to explore the most complex and refined street food scene in Morocco.',
  },
  {
    city: 'Casablanca',
    type: 'Central Market & Street Food',
    description: 'Tour starting at the famous Central Market, through Habous Quarter bakeries, and into working-class neighborhoods for authentic bocadillos and maakouda.',
    price: 'From 350 MAD per person',
    bestFor: 'Travelers who want to experience the cosmopolitan side of Moroccan street food beyond the imperial cities.',
  },
  {
    city: 'Essaouira',
    type: 'Port & Medina Food Tour',
    description: 'Start at the fishing port for grilled seafood, then explore the medina for argan oil, spices, and traditional street food. Includes 6-8 tastings.',
    price: 'From 300 MAD per person',
    bestFor: 'Seafood lovers who want to combine the freshest fish with medina street food exploration.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is street food safe to eat in Morocco?',
    answer:
      'Yes, Moroccan street food is generally safe if you follow basic rules. Eat at stalls with high customer turnover, choose food cooked fresh in front of you, avoid pre-cooked food that has been sitting out, drink only bottled water, and start with cooked foods if you have a sensitive stomach. Most travelers experience no issues at all.',
  },
  {
    question: 'How much does street food cost in Morocco?',
    answer:
      'Moroccan street food is remarkably affordable. Breakfast snacks like msemen and sfenj cost from 1-3 MAD each. A full street food meal with brochettes, bread, salad, and a drink costs from 30-50 MAD. Fresh orange juice is from 5 MAD. You can eat well on the streets all day for from 80-120 MAD total.',
  },
  {
    question: 'What is the best city in Morocco for street food?',
    answer:
      'Marrakech is widely considered the best for street food, especially Jemaa el-Fnaa which transforms nightly into the world\'s largest open-air restaurant. Fes has the most refined street food, Casablanca the most diverse, Essaouira the best seafood, and Meknes the best value with the fewest tourists.',
  },
  {
    question: 'What should I try first at Jemaa el-Fnaa?',
    answer:
      'Start with fresh orange juice from the carts (from 5 MAD), then try snail soup for a uniquely Moroccan experience. Follow with brochettes from a busy grill stall and finish with a bowl of harira. Choose stalls with the most local customers and avoid those with aggressive touts.',
  },
  {
    question: 'Are there vegetarian street food options in Morocco?',
    answer:
      'Yes, many Moroccan street foods are naturally vegetarian or vegan. Msemen and baghrir flatbreads with honey, maakouda (potato fritters), bissara (fava bean soup), zaalouk (eggplant salad), vegetarian harira, fresh fruit juices, and briouats with cheese are all widely available. Say "bla lhem" (without meat) when ordering.',
  },
  {
    question: 'What time do street food stalls open in Morocco?',
    answer:
      'Different stalls operate on different schedules. Breakfast stalls (msemen, sfenj, bissara) open from 6-7 AM. Lunch stalls (brochettes, bocadillos) peak from 12-2 PM. Jemaa el-Fnaa night market sets up around 5 PM and runs until midnight. Harira stalls are busiest at sunset, especially during Ramadan.',
  },
  {
    question: 'Should I tip street food vendors in Morocco?',
    answer:
      'Tipping at street food stalls is not expected but small change (2-5 MAD) is always appreciated for friendly service or generous portions. At sit-down street food establishments with table service, rounding up the bill or leaving 5-10 MAD is customary.',
  },
  {
    question: 'What should I avoid eating from street stalls in Morocco?',
    answer:
      'Avoid raw salads at street stalls (they may be washed in tap water), pre-cooked food sitting out for hours, unrefrigerated dairy products, and stalls with no visible customers. Stick to freshly cooked hot food, peelable fruits, and bottled water. Avoid ice in drinks unless at a reputable establishment.',
  },
  {
    question: 'Is it safe to eat at Jemaa el-Fnaa food stalls?',
    answer:
      'Yes. Despite its chaotic appearance, Jemaa el-Fnaa food stalls are regularly inspected and generally safe. Choose stalls with the most local customers (not just tourists), eat food cooked to order, and drink bottled water. The numbered stalls are established vendors who have been operating for years or decades.',
  },
  {
    question: 'Can I join a street food tour in Morocco?',
    answer:
      'Absolutely. Guided street food tours are available in Marrakech, Fes, Casablanca, and Essaouira, starting from 300-400 MAD per person. Tours typically last 3-4 hours, include 8-12 tastings, and are led by local food experts who take you to their favorite hidden stalls and explain the stories behind each dish.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoStreetFoodGuidePage() {
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
            backgroundImage: 'url(/images/hero-street-food-grill.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Street Food Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Store className="w-4 h-4" />
            Complete Street Food Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Street Food Guide:
            <br className="hidden md:block" /> What to Eat on the Streets
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From sizzling brochettes and crispy sfenj to steaming harira and snail soup.
            The complete guide to eating your way through Morocco&apos;s vibrant street food scene in 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Moroccan Street Food Is Among the Best on Earth
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s street food scene is legendary for good reason. From the nightly spectacle
                of Jemaa el-Fnaa in Marrakech, where over 100 food stalls transform the square into the
                world&apos;s largest open-air restaurant, to the quiet morning griddles where women fold
                msemen with hands that have perfected the technique over a lifetime, street food is the
                beating heart of Moroccan culinary culture.
              </p>
              <p>
                What sets Moroccan street food apart is the extraordinary quality at astonishingly low
                prices. A full meal of charcoal-grilled brochettes with fresh bread and salad costs less
                than a cup of coffee in most Western cities. The flavors are bold and complex, built on
                centuries of spice trade and culinary tradition. Every stall, cart, and sidewalk griddle
                tells a story of generations of food knowledge passed down through families.
              </p>
              <p>
                This guide covers everything you need to navigate Morocco&apos;s street food scene with
                confidence: the 15+ essential items you must try, the best cities and neighborhoods for
                street food, a complete guide to the legendary Jemaa el-Fnaa food stalls, safety tips
                for eating on the streets, vegetarian options, prices, and recommendations for guided
                food tours that unlock hidden gems most tourists never find.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Must-Try Street Foods ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Store className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            16 Must-Try Moroccan Street Foods
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            These are the essential street foods that define Moroccan food culture. Do not leave without trying as many as possible.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary by city, location, and season.
          </p>

          <div className="space-y-8">
            {streetFoods.map((food, index) => {
              const FoodIcon = food.icon;
              return (
                <div key={food.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {food.name}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {food.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mt-1">
                        <FoodIcon className="w-3 h-3" />
                        <span>{food.priceRange}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{food.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Best Cities</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {food.bestCities.map((city, i) => (
                          <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)]">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Where to eat it:</span> {food.whereToBest}
                        </p>
                      </div>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Insider tip:</span> {food.insiderTip}
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

      {/* ── Best Street Food Cities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Street Food in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has its own street food personality. Here is where to go for the best experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streetFoodCities.map((city) => {
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
                    <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span><span className="font-semibold text-[var(--text-primary)]">Best areas:</span> {city.bestAreas}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Jemaa el-Fnaa Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Jemaa el-Fnaa Food Stall Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Marrakech&apos;s legendary square is a UNESCO-recognized masterpiece of oral tradition. Here is your guide to navigating its nightly food spectacle.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Clock className="w-3.5 h-3.5 inline mr-1" />
            Food stalls set up around 5 PM and operate until midnight. Arrive at sunset for the best atmosphere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {jemaaGuide.map((stall) => (
              <div key={stall.item} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {stall.item}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {stall.price}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{stall.description}</p>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><span className="font-semibold text-[var(--text-primary)]">Tip:</span> {stall.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Street Food Safety Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these simple rules and you will eat safely and deliciously throughout your trip. Most travelers have no issues at all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.rule} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pt-2">
                      {tip.rule}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vegetarian Street Food ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vegetarian &amp; Vegan Street Food
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco has more vegetarian street food options than many travelers expect. Here are the best plant-friendly choices.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Say &quot;bla lhem&quot; (without meat) when ordering. For vegan, also say &quot;bla zebda&quot; (without butter).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {vegetarianStreetFoods.map((food) => (
              <div key={food.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {food.name}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {food.price}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{food.description}</p>
                <div className="flex items-center gap-1.5">
                  {food.veganFriendly ? (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium">Vegan-friendly</span>
                  ) : (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">Vegetarian</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Street Food Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Street Food Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco street food is incredibly good value. Here is what to expect to pay.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices. Tourist areas and peak season may be 10-20% higher. Seasonal pricing can change.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Examples</div>
                <div className="p-3 px-4">Price Range</div>
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

      {/* ── Food Tour Recommendations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Street Food Tour Recommendations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A guided food tour is the best way to discover hidden stalls and local favorites. These are our top recommendations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {foodTours.map((tour) => (
              <div key={tour.city} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {tour.city}: {tour.type}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                    {tour.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{tour.description}</p>
                <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                  <ThumbsUp className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span><span className="font-semibold text-[var(--text-primary)]">Best for:</span> {tour.bestFor}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Tour prices are starting prices and may vary by season and group size. Book in advance during peak season (October-April).
          </p>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Morocco Street Food
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Moroccan Food
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/street-food" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Store className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Street Food by City
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                City-by-city street food recommendations with vendor tips, maps, and local secrets for every major destination.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cuisine" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
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
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Complete Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The ultimate guide to eating in Morocco covering 50+ dishes, dining etiquette, regional specialties, and prices.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-tours" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
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
            <Link href="/morocco-vegan-food" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
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
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Eat Your Way Through Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the sizzling grills of Jemaa el-Fnaa to the morning sfenj stalls of Fes, Morocco&apos;s
            street food scene is an unforgettable adventure. Start planning your culinary journey with our
            guided food tours and city-by-city recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-food-tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-[var(--color-accent)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Store className="w-5 h-5" />
              Browse Food Tours
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Full Food Guide
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-6">
            Street food tours from 300 MAD per person. Prices may vary by season.
          </p>
        </div>
      </section>
    </>
  );
}

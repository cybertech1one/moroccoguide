import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Home,
  Utensils,
  Info,
  Compass,
  Globe,
  Shield,
  Sun,
  Calendar,
  Heart,
  Coffee,
  ShoppingBag,
  Flame,
  Soup,
  Wheat,
  Apple,
  UtensilsCrossed,
  AlertTriangle,
  ThumbsUp,
  DollarSign,
  BookOpen,
  Eye,
  Navigation,
  LeafyGreen,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* =================================================================
   CONSTANTS
   ================================================================= */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/street-food`;

/* =================================================================
   SEO METADATA
   ================================================================= */

export const metadata: Metadata = {
  title: 'Moroccan Street Food Guide 2025 | 15+ Must-Try Foods, Prices & Safety Tips',
  description:
    'The ultimate guide to Moroccan street food. Discover 15+ iconic dishes from msemen and harira to sfenj and brochettes. City-by-city eating guide for Marrakech, Fes, Casablanca, Essaouira, and Tangier. Prices in MAD, food safety tips, vegetarian options, and ordering etiquette.',
  keywords: [
    'Moroccan street food',
    'street food Morocco',
    'Moroccan street food guide',
    'msemen Morocco',
    'baghrir pancakes',
    'harira soup',
    'tangia Marrakech',
    'maakouda fritters',
    'brochettes Morocco',
    'sfenj donuts',
    'babbouche snail soup',
    'bocadillo Morocco',
    'Moroccan orange juice',
    'khobz bread',
    'sardines Morocco',
    'kefta sandwich Morocco',
    'chebakia cookies',
    'avocado smoothie Morocco',
    'Marrakech Jemaa el-Fna food',
    'Fes street food',
    'Casablanca street food',
    'Essaouira street food',
    'Tangier street food',
    'Morocco food safety',
    'vegetarian street food Morocco',
    'Morocco food prices',
    'eating etiquette Morocco',
    'Darija food phrases',
    'Morocco food guide',
    'cheap eats Morocco',
  ],
  openGraph: {
    title: 'Moroccan Street Food Guide - 15+ Must-Try Foods with Prices',
    description:
      'The definitive guide to eating street food in Morocco. Must-try dishes, city-by-city recommendations, prices in MAD, safety tips, vegetarian options, and ordering etiquette.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-street-food-grill.webp`,
        width: 1200,
        height: 630,
        alt: 'Sizzling Moroccan street food grilling over charcoal with aromatic spices and smoke',
      },
    ],
    type: 'article',
    siteName: 'CityGuide Morocco',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Street Food Guide - 15+ Must-Try Foods with Prices',
    description:
      'Discover the best street food across Morocco. From 1 MAD sfenj to sizzling brochettes and fresh orange juice. City-by-city guide with safety tips.',
    images: [`${BASE_URL}/images/hero-street-food-grill.webp`],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

/* =================================================================
   JSON-LD STRUCTURED DATA
   ================================================================= */

const faqItems = [
  {
    question: 'Is Moroccan street food safe to eat?',
    answer:
      'Yes, Moroccan street food is generally safe when you follow basic precautions. Choose stalls with high turnover and food cooked fresh in front of you. Avoid pre-made items sitting in the sun, drink bottled or boiled water, and skip unpeeled raw fruits and salads from street vendors. Locals eat this food daily, so busy stalls are a good indicator of safety.',
  },
  {
    question: 'How much does street food cost in Morocco?',
    answer:
      'Moroccan street food is extremely affordable. A full meal from street stalls can cost 20-40 MAD (2-4 USD). Individual items range from 1-2 MAD for sfenj donuts to 40-60 MAD for tangia. Fresh orange juice is 5-10 MAD, sandwiches are 15-25 MAD, and harira soup is 5-10 MAD. You can eat well all day for under 100 MAD.',
  },
  {
    question: 'What is the most popular street food in Marrakech?',
    answer:
      'Jemaa el-Fna square in Marrakech is the world capital of street food. The most popular items include brochettes (grilled meat skewers), harira soup, snail soup (babbouche), sheep head, fresh orange juice, msemen flatbread, and bocadillos. The night food stalls open around 5-6 PM and are a must-visit experience.',
  },
  {
    question: 'Can vegetarians eat well from Moroccan street food?',
    answer:
      'Absolutely. Many Moroccan street foods are naturally vegetarian: msemen and baghrir (flatbreads), maakouda (potato fritters), zaalouk (eggplant dip), harcha (semolina bread), fresh orange juice, avocado smoothies, roasted corn, boiled chickpeas with cumin, and various nut-based snacks. Vegetable-stuffed bocadillos are also widely available.',
  },
  {
    question: 'What time do Moroccan street food stalls open?',
    answer:
      'Moroccan street food is available at different times. Breakfast stalls (msemen, baghrir, coffee) open from 6-7 AM. Lunch stalls operate from 12 PM to 3 PM. The most vibrant street food scene is in the evening, from 5-6 PM until midnight or later, especially in Jemaa el-Fna, Marrakech. During Ramadan, stalls open at sunset (iftar) and stay open very late.',
  },
  {
    question: 'Should I tip street food vendors in Morocco?',
    answer:
      'Tipping is not expected at street food stalls, but rounding up the bill or leaving 1-2 MAD is a kind gesture. If you sit at a small table and are served, leaving 5-10% is appropriate. At sit-down restaurants, 10-15% is customary. Never leave coins on the ground as this is considered disrespectful.',
  },
  {
    question: 'How do I order street food if I do not speak Arabic or French?',
    answer:
      'Pointing and gesturing works perfectly at most stalls. Many vendors in tourist areas speak basic English. Learning a few Darija phrases helps enormously: "wahd mn hadshi" (one of this), "bzzaf" (a lot), "shwiya" (a little), "bsaha" (bon appetit/to your health). Showing numbers on your fingers for quantity is universally understood.',
  },
  {
    question: 'What should I avoid eating on the streets in Morocco?',
    answer:
      'Avoid raw salads and unpeeled fruits from street vendors, mayonnaise-based items in hot weather, tap water and ice from unknown sources, dairy products left unrefrigerated, and meat that has been sitting out rather than cooked fresh. Stick to piping hot freshly prepared food, peelable fruits, and bottled water. If a stall looks quiet with few local customers, move on to a busier one.',
  },
  {
    question: 'What is babbouche (snail soup) and should I try it?',
    answer:
      'Babbouche is a beloved Moroccan street snack of small snails simmered in a fragrant herbal broth with thyme, licorice root, mint, and other spices. The broth is considered medicinal, good for digestion and warming in cold weather. You pick the snails out with a toothpick and sip the broth. It costs 5-10 MAD per bowl and is an authentic Moroccan experience. The taste is mild and earthy, and the broth is delicious.',
  },
  {
    question: 'Is Moroccan street food halal?',
    answer:
      'Yes, virtually all street food in Morocco is halal. Morocco is a Muslim-majority country and halal practices are the default. Meat is slaughtered according to Islamic guidelines, and pork products are not sold at street stalls. Alcohol is not available from street food vendors. This makes Morocco an excellent destination for halal-conscious travelers.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': PAGE_URL,
      headline: 'Moroccan Street Food Guide: 15+ Must-Try Foods, Prices & Safety Tips',
      description:
        'The ultimate guide to Moroccan street food covering 15+ iconic dishes, city-by-city recommendations, prices in MAD, food safety tips, vegetarian options, and ordering etiquette.',
      url: PAGE_URL,
      datePublished: '2025-01-15',
      dateModified: '2025-03-10',
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
      image: `${BASE_URL}/images/hero-street-food-grill.webp`,
      mainEntityOfPage: PAGE_URL,
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
          { '@type': 'ListItem', position: 2, name: 'Cuisine', item: `${BASE_URL}/cuisine` },
          { '@type': 'ListItem', position: 3, name: 'Street Food Guide', item: PAGE_URL },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

/* =================================================================
   STREET FOOD DATA
   ================================================================= */

type StreetFood = {
  name: string;
  arabicName: string;
  description: string;
  longDescription: string;
  priceRange: string;
  priceNote: string;
  whereToFind: string;
  tip: string;
  icon: React.ElementType;
  category: 'bread' | 'soup' | 'meat' | 'sweet' | 'drink' | 'snack';
  vegetarian: boolean;
  bestTime: string;
};

const streetFoods: StreetFood[] = [
  {
    name: 'Msemen',
    arabicName: '\u0645\u0633\u0645\u0646',
    description: 'Layered square flatbread, crispy outside and soft within',
    longDescription:
      'Msemen is the quintessential Moroccan breakfast street food: a square-shaped, layered flatbread made from a simple dough of flour, semolina, butter, and oil. The dough is stretched paper-thin on an oiled surface, folded into layers, and cooked on a flat griddle until golden and flaky. The result is a bread that shatters with a satisfying crunch on the outside while remaining soft, chewy, and slightly buttery inside. Every morning across Morocco, you will see women sitting beside small charcoal stoves, patting and stretching msemen dough with practiced, mesmerizing speed. Eaten plain with honey and butter for breakfast, or stuffed with kefta, vegetables, or cheese for a savory snack, msemen is pure comfort food and one of the most affordable bites in the country.',
    priceRange: '2-5 MAD',
    priceNote: 'Plain is cheapest; stuffed versions cost more',
    whereToFind: 'Every medina corner, morning markets, and roadside stalls across Morocco',
    tip: 'Ask for one fresh off the griddle. The best msemen are the ones you watch being made right in front of you, still glistening with oil.',
    icon: Wheat,
    category: 'bread',
    vegetarian: true,
    bestTime: 'Breakfast (6-10 AM)',
  },
  {
    name: 'Baghrir',
    arabicName: '\u0628\u063a\u0631\u064a\u0631',
    description: 'Thousand-hole spongy pancakes that soak up honey',
    longDescription:
      'Known as "the thousand-hole pancake," baghrir is a uniquely Moroccan creation that looks like no other pancake in the world. Made from a batter of fine semolina, flour, yeast, and baking powder, the magic happens when the batter hits the hot griddle: as it cooks from one side only, hundreds of tiny bubbles form and burst on the surface, creating a sponge-like texture riddled with tiny craters. These holes serve a delicious purpose -- they act as tiny reservoirs that absorb the traditional topping of melted butter mixed with honey. The first bite releases a flood of warm, sweet butterscotch-like flavor. Baghrir is cooked on one side only, never flipped, and the contrast between the smooth, golden bottom and the porous, crater-covered top is part of its charm. A breakfast staple during Ramadan and year-round.',
    priceRange: '2-3 MAD',
    priceNote: 'Per pancake; usually sold in stacks of 3-5',
    whereToFind: 'Breakfast stalls, medina bakeries, and Ramadan night markets',
    tip: 'Drizzle with a mixture of melted butter and honey for the authentic experience. The holes should be uniform and the pancake spongy, not flat.',
    icon: Coffee,
    category: 'bread',
    vegetarian: true,
    bestTime: 'Breakfast or Ramadan ftour (sunset)',
  },
  {
    name: 'Harira',
    arabicName: '\u062d\u0631\u064a\u0631\u0629',
    description: 'Rich tomato-based soup with lentils, chickpeas, and warming spices',
    longDescription:
      'Harira is the soul of Morocco in a bowl. This thick, hearty soup is the national comfort food, traditionally served to break the Ramadan fast but beloved year-round as a street food staple. The base is a rich tomato broth, thickened with a fermented flour-water mixture called tadouira that gives it a silky, slightly tangy body. Into this go green lentils, chickpeas, diced lamb or beef (though vegetarian versions are common), celery, onions, and a generous handful of fresh cilantro and parsley. The spice profile is complex but never overwhelming: ginger, turmeric, cinnamon, saffron, and pepper work in harmony. Just before serving, a squeeze of lemon brightens everything. Street vendors serve harira in small bowls alongside dates and chebakia honey cookies. During Ramadan, entire streets transform into open-air harira kitchens, with enormous cauldrons simmering throughout the afternoon. The first sip at sunset, breaking a day-long fast, is one of the most communal and sacred food moments in Moroccan culture.',
    priceRange: '5-10 MAD',
    priceNote: 'Per bowl; often served with bread and dates',
    whereToFind: 'Everywhere during Ramadan; year-round in medina soup stalls and small restaurants',
    tip: 'During Ramadan, find a spot near a mosque around sunset. The atmosphere of an entire neighborhood breaking fast together with harira is unforgettable.',
    icon: Soup,
    category: 'soup',
    vegetarian: false,
    bestTime: 'Evening, especially during Ramadan',
  },
  {
    name: 'Tangia',
    arabicName: '\u0637\u0627\u0646\u062c\u064a\u0629',
    description: 'Marrakech-exclusive slow-cooked meat in an earthenware urn',
    longDescription:
      'Tangia is the ultimate bachelor food of Marrakech -- literally. This dish was invented by the unmarried craftsmen of the Marrakech souks who needed a meal that would cook itself while they worked. The preparation is brilliantly simple: chunks of lamb or beef are placed in a tall, amphora-shaped earthenware urn along with preserved lemons, garlic, cumin, saffron, ras el hanout, and a generous pour of olive oil. The urn is sealed with parchment paper and string, then taken to the local hammam (public bathhouse) and buried in the hot ashes of the furnace that heats the bathwater. It slow-cooks for 6-8 hours until the meat is so tender it dissolves at the touch. The result is intensely concentrated, falling-apart meat in a rich, golden broth. Tangia is unique to Marrakech -- you will not find it in Fes or Casablanca. It is traditionally a communal dish, prepared by groups of men for celebrations, and remains a living symbol of Marrakchi working-class food culture.',
    priceRange: '40-60 MAD',
    priceNote: 'Per serving; often shared among 2-3 people',
    whereToFind: 'Marrakech medina only -- stalls near Jemaa el-Fna and Rahba Kedima spice square',
    tip: 'This is a Marrakech-only experience. Order ahead or arrive early as the best stalls sell out. The urn itself is part of the presentation.',
    icon: Flame,
    category: 'meat',
    vegetarian: false,
    bestTime: 'Lunch (12-3 PM)',
  },
  {
    name: 'Maakouda',
    arabicName: '\u0645\u0639\u0642\u0648\u062f\u0629',
    description: 'Golden-fried potato fritters, crispy outside and creamy inside',
    longDescription:
      'Maakouda are the Moroccan answer to hash browns, but infinitely more flavorful. These golden discs of deep-fried potato are seasoned with cumin, parsley, garlic, and sometimes a touch of turmeric for color. The technique is what makes them special: boiled potatoes are mashed smooth, shaped into thick patties, dipped in a light batter, and fried in bubbling oil until they develop a shatteringly crisp golden crust while remaining creamy and fluffy inside. Maakouda are rarely eaten alone -- they are most commonly stuffed into a sandwich (bocadillo) with harissa hot sauce, tomato, and olives, creating what might be the most satisfying 5 MAD meal on earth. You will find them at virtually every street food stall and sandwich shop in Morocco, and they are a staple filling for the working-class lunch bocadillo. The best maakouda are fried to order in fresh oil and served piping hot, so the crust crackles when you bite into it.',
    priceRange: '3-5 MAD',
    priceNote: 'Per piece; 2-3 make a filling snack',
    whereToFind: 'Sandwich stalls, medina food carts, and bocadillo shops everywhere',
    tip: 'Get them inside a bocadillo with harissa and olives for the full Moroccan working-class lunch experience. Absolute best value meal in Morocco.',
    icon: Apple,
    category: 'snack',
    vegetarian: true,
    bestTime: 'Lunch (11 AM - 3 PM)',
  },
  {
    name: 'Brochettes',
    arabicName: '\u0628\u0631\u0648\u0634\u064a\u062a',
    description: 'Charcoal-grilled meat skewers seasoned with cumin and paprika',
    longDescription:
      'The intoxicating smoke of charcoal-grilled brochettes wafting through a Moroccan medina is one of travel\'s most irresistible aromas. These skewers of marinated meat -- lamb, beef, chicken, or kefta (seasoned ground meat) -- are threaded onto metal skewers and grilled over white-hot charcoal. The marinade is deceptively simple: cumin, paprika, salt, pepper, and a brush of oil. The magic is in the searing heat of the charcoal, which chars the exterior while keeping the inside juicy and smoky. Brochettes are served on a plate with bread, raw onion slices, salt, and cumin for dipping, alongside a simple tomato-and-onion salad. The best brochette stalls display their raw meat proudly, letting you choose your cut, and you watch as it is threaded, seasoned, and grilled before your eyes. At Jemaa el-Fna in Marrakech, competitive brochette vendors form an entire row, each one calling out to passersby with theatrical enthusiasm. Lamb liver and heart brochettes (boulfaf) are a particular delicacy, often wrapped in caul fat.',
    priceRange: '15-30 MAD',
    priceNote: 'Per skewer; lamb is priciest, kefta most affordable',
    whereToFind: 'Jemaa el-Fna, all medina grill stalls, and roadside restaurants',
    tip: 'Choose a stall where the charcoal is glowing white, not flaming. Ask for cumin and salt on the side to season to your taste. Lamb fat brochettes are the most flavorful.',
    icon: Flame,
    category: 'meat',
    vegetarian: false,
    bestTime: 'Evening (6-11 PM)',
  },
  {
    name: 'Sfenj',
    arabicName: '\u0633\u0641\u0646\u062c',
    description: 'Airy Moroccan donuts, golden-fried and sugar-dusted',
    longDescription:
      'Sfenj are the irresistible Moroccan donut -- and at 1-2 MAD each, they may be the cheapest moment of pure happiness in the country. These ring-shaped, yeasted dough fritters are made from a very wet, sticky dough that is shaped by hand with impressive dexterity: the sfenj maker grabs a handful of dough, stretches it into a ring around his fingers, and drops it into a vat of hot oil where it puffs up into a golden, airy ring with a slightly chewy crust. Unlike Western donuts, sfenj have no sugar in the dough itself -- they are sometimes dusted with granulated sugar after frying, but many Moroccans prefer them plain, still glistening with oil, their natural yeasty sweetness enough. The outside is crispy and golden, the inside is soft, airy, and stretchy, with large irregular air pockets. Sfenj are best eaten within minutes of frying, often paired with a glass of mint tea or strong cafe noir for the quintessential Moroccan breakfast. You will spot sfenj makers by their massive round frying pans of oil and the crowd of locals waiting impatiently for the next batch.',
    priceRange: '1-2 MAD',
    priceNote: 'Per piece; buy 5-10 for a family breakfast',
    whereToFind: 'Morning stalls near mosques, bakeries, and medina intersections',
    tip: 'Find a stall with a queue of locals -- the best sfenj makers always have a line. Eat them immediately; they lose their magic after 15 minutes.',
    icon: Coffee,
    category: 'sweet',
    vegetarian: true,
    bestTime: 'Breakfast (6-10 AM)',
  },
  {
    name: 'Babbouche (Snail Soup)',
    arabicName: '\u0628\u0627\u0628\u0648\u0634',
    description: 'Snails simmered in a fragrant herbal broth with medicinal spices',
    longDescription:
      'Nothing says "authentic Morocco" quite like standing at a steaming babbouche cart, toothpick in hand, picking tiny snails from their shells while sipping the aromatic broth. Babbouche is a beloved Moroccan street snack of small garden snails (not the French escargot variety, but smaller, more tender Moroccan species) slowly simmered in a complex broth infused with over a dozen herbs and spices: thyme, licorice root, gum arabic, anise, mint, caraway, black pepper, and other closely guarded secret ingredients that vary by vendor. The broth is considered deeply medicinal -- locals swear it aids digestion, warms the body in winter, and cures everything from the common cold to stomach ailments. The snails themselves are mild and earthy in flavor, but it is really the broth that people come for. Vendors serve it in small bowls with a toothpick for extracting the snails and a spoon for the precious broth. Each vendor has their own proprietary spice blend, and regular customers are fiercely loyal to their preferred babbouche stall.',
    priceRange: '5-10 MAD',
    priceNote: 'Per bowl; the broth is the star',
    whereToFind: 'Jemaa el-Fna (Marrakech), Rcif area (Fes), central medina squares in most cities',
    tip: 'The broth is the real treasure -- drink every drop. Locals consider it a health tonic. If the snails intimidate you, just order the broth alone.',
    icon: Soup,
    category: 'soup',
    vegetarian: false,
    bestTime: 'Evening (5-11 PM)',
  },
  {
    name: 'Bocadillos',
    arabicName: '\u0628\u0648\u0643\u0627\u062f\u064a\u0648',
    description: 'Stuffed baguette sandwiches with endless filling combinations',
    longDescription:
      'The bocadillo (from the Spanish word for sandwich) is the everyday lunch of working Morocco. A crusty half-baguette is split open and loaded with an extraordinary variety of fillings. The classic combination includes maakouda (potato fritters), hard-boiled egg, tuna, olives, harissa, and a drizzle of olive oil -- all in one sandwich. Other popular fillings include grilled kefta, merguez sausage, fried fish, omelette, liver, brain, or simply vegetables with cheese. The beauty of the Moroccan bocadillo is the customization: you point at the fillings you want from an array of bowls and containers displayed at the stall, and the vendor assembles your creation. Harissa hot sauce and cumin are standard additions. A loaded bocadillo for 15-25 MAD is one of the most satisfying and filling budget meals in Morocco. Bocadillo stalls are particularly busy during the lunch rush (12-2 PM), when workers, students, and shoppers queue for their daily fix.',
    priceRange: '15-25 MAD',
    priceNote: 'Depends on fillings; kefta and merguez cost more',
    whereToFind: 'Every medina, near schools, markets, and bus stations',
    tip: 'Say "komplet" for the works. Add harissa for heat and ask for extra olive oil. The best bocadillo stalls are the ones packed with workers at lunchtime.',
    icon: UtensilsCrossed,
    category: 'snack',
    vegetarian: false,
    bestTime: 'Lunch (11 AM - 3 PM)',
  },
  {
    name: 'Fresh Orange Juice',
    arabicName: '\u0639\u0635\u064a\u0631 \u0627\u0644\u0628\u0631\u062a\u0642\u0627\u0644',
    description: 'Freshly squeezed from sweet Moroccan oranges, served ice-cold',
    longDescription:
      'Morocco is one of the world\'s great citrus producers, and the fresh-squeezed orange juice available at virtually every street corner is a revelation. Forget anything you have ever had from a carton -- Moroccan street orange juice is made from sweet, sun-ripened oranges pressed to order in front of you, with nothing added. The juice is thick, vibrant, and intensely sweet with a brightness that comes from fruit picked at peak ripeness. At Jemaa el-Fna in Marrakech, entire rows of orange juice stalls compete for customers, their counters piled high with pyramids of oranges, vendors squeezing on manual or electric presses. The juice is served in glasses or poured into plastic cups with ice. At 5-10 MAD per glass (roughly 0.50-1 USD), it is one of the best deals in Morocco and the perfect antidote to the heat, dust, and sensory overload of the medina. Some vendors also offer mixed juices -- orange with carrot, pomegranate, or grapefruit. The orange juice at Jemaa el-Fna is a rite of passage for every Morocco visitor.',
    priceRange: '5-10 MAD',
    priceNote: 'Jemaa el-Fna stalls may charge more; 4 MAD in local neighborhoods',
    whereToFind: 'Jemaa el-Fna, all medinas, roadside stands, and juice bars nationwide',
    tip: 'Watch them squeeze it fresh -- avoid pre-squeezed juice sitting in jugs. At Jemaa el-Fna, stalls on the outer edge are often cheaper than those in the center.',
    icon: Apple,
    category: 'drink',
    vegetarian: true,
    bestTime: 'Anytime, especially afternoon',
  },
  {
    name: 'Khobz',
    arabicName: '\u062e\u0628\u0632',
    description: 'Round communal bread baked in neighborhood wood-fired ovens',
    longDescription:
      'Khobz is not just bread in Morocco -- it is a utensil, a plate, a social ritual, and the foundation of every meal. This round, flatish loaf with a golden crust and soft, dense crumb is the most consumed food in the country. Every neighborhood has a communal wood-fired oven (ferran) where families bring their homemade dough to be baked for a few dirhams. The baker marks each family\'s loaves to identify them, slides them into the blazing oven on a long wooden paddle, and returns them golden and fragrant. On the street, you will see children and adults carrying wooden trays of bread on their heads to and from the ferran -- one of the most iconic sights of Moroccan daily life. Khobz is torn by hand (never cut with a knife at a traditional Moroccan table) and used to scoop tagine sauce, pinch pieces of meat, and mop every last drop from the plate. Wasting bread is considered sinful -- leftover bread is dried and used in other dishes or given to animals. At street stalls, fresh khobz is always available as an accompaniment to any meal.',
    priceRange: '1-2 MAD',
    priceNote: 'Per loaf; one loaf feeds 2-3 people',
    whereToFind: 'Neighborhood fernans (bakeries), medina bread stalls, and every food vendor',
    tip: 'Follow the scent of baking bread to find the nearest ferran. Buying a warm loaf straight from the oven and eating it with olive oil and honey is one of life\'s simple pleasures.',
    icon: Wheat,
    category: 'bread',
    vegetarian: true,
    bestTime: 'Morning and late afternoon baking times',
  },
  {
    name: 'Grilled Sardines',
    arabicName: '\u0633\u0631\u062f\u064a\u0646 \u0645\u0634\u0648\u064a',
    description: 'Whole sardines charcoal-grilled with chermoula marinade',
    longDescription:
      'Morocco is the world\'s largest exporter of sardines, and nowhere is this abundance more delicious than at the street-side grill stalls of Essaouira, Casablanca, and Tangier. Whole fresh sardines are marinated in chermoula -- a vibrant green paste of cilantro, parsley, garlic, cumin, paprika, lemon juice, and olive oil -- then grilled over charcoal until the skin blisters and chars while the flesh stays moist and oily. They are served on a plate or in a sandwich, head and all, with a wedge of lemon, sliced onion, and crusty bread. The flavor is intensely marine, smoky, and herbaceous. At the fish market in Essaouira, you choose your sardines from the fishmongers (still glistening from the morning catch), hand them to the grill next door, and within minutes you are eating the freshest possible grilled fish at a rickety seaside table. In Casablanca, the old medina and port area have legendary sardine grill stalls. Eating charcoal-grilled sardines by the ocean, watching fishing boats rock in the harbor, is a quintessential Moroccan coast experience.',
    priceRange: '10-20 MAD',
    priceNote: 'For a generous plate; cheaper at fish markets than tourist areas',
    whereToFind: 'Essaouira fish market, Casablanca port, Tangier fish market, all coastal cities',
    tip: 'In Essaouira, buy sardines at the fish market stalls and have the adjacent grill cook them for 10-15 MAD. Freshest fish you will ever eat.',
    icon: Flame,
    category: 'meat',
    vegetarian: false,
    bestTime: 'Lunch (11 AM - 3 PM)',
  },
  {
    name: 'Kefta Sandwiches',
    arabicName: '\u0643\u0641\u062a\u0629',
    description: 'Spiced ground meat grilled and stuffed in bread with toppings',
    longDescription:
      'Kefta is Moroccan ground meat elevated to an art form. Beef or lamb is mixed with grated onion, fresh parsley, cilantro, cumin, paprika, and a touch of cinnamon, then shaped into logs around a skewer or pressed into flat patties and grilled over charcoal. The spice blend gives kefta a distinctive warmth and depth that distinguishes it from any Western hamburger. As a street food, kefta is most commonly served in a crusty bread roll (bocadillo) with sliced tomato, raw onion, and a generous smear of harissa hot sauce. Some stalls also offer kefta in a tagine -- grilled patties simmered in a spiced tomato sauce with a cracked egg on top, served bubbling in a small clay dish with bread for dipping. The charcoal grill gives kefta a smoky char on the outside while keeping the center juicy and aromatic. Kefta stalls are identifiable by the distinctive scent of grilling spiced meat and the cloud of charcoal smoke hovering above them.',
    priceRange: '15-25 MAD',
    priceNote: 'Sandwich; kefta tagine with egg costs 25-40 MAD',
    whereToFind: 'Grill stalls in medinas, bocadillo shops, and night food markets',
    tip: 'Order kefta tagine with egg if you want the full experience. Tear bread and scoop the spiced meat and runny egg together. Outstanding.',
    icon: Flame,
    category: 'meat',
    vegetarian: false,
    bestTime: 'Lunch and evening',
  },
  {
    name: 'Chebakia',
    arabicName: '\u0634\u0628\u0627\u0643\u064a\u0629',
    description: 'Flower-shaped sesame cookies drenched in honey',
    longDescription:
      'Chebakia is the most labor-intensive and visually stunning sweet in the Moroccan pastry repertoire. Strips of dough flavored with orange blossom water, anise, sesame, vinegar, and saffron are hand-folded into intricate rose or flower shapes (a skill that takes years to master), deep-fried until golden, immediately dipped in hot honey syrup until they absorb maximum sweetness, then coated in toasted sesame seeds. The result is a cookie that is simultaneously crispy, chewy, sticky, fragrant, and deeply sweet. Chebakia is traditionally associated with Ramadan, where it is served alongside harira soup at iftar (the sunset meal breaking the fast). The combination of savory, warming harira with sweet, honey-drenched chebakia is one of Ramadan\'s most iconic flavor pairings. Making chebakia is a communal activity -- extended families gather (usually the women) in the days before Ramadan to fold hundreds of these intricate pastries. On the street, chebakia is sold by weight at pastry stalls and is available year-round, though production peaks during Ramadan.',
    priceRange: '5-10 MAD',
    priceNote: 'For 2-3 pieces; sold by weight at pastry stalls',
    whereToFind: 'Pastry shops, medina sweet stalls, and Ramadan markets everywhere',
    tip: 'Pair with harira soup for the authentic Ramadan experience. During Ramadan, fresh chebakia is made daily -- it is noticeably better than the pre-made version.',
    icon: Heart,
    category: 'sweet',
    vegetarian: true,
    bestTime: 'Afternoon tea and Ramadan iftar',
  },
  {
    name: 'Avocado Smoothie',
    arabicName: '\u0639\u0635\u064a\u0631 \u0627\u0644\u0627\u0641\u0648\u0643\u0627\u062f\u0648',
    description: 'Thick, creamy avocado shake blended with milk and nuts',
    longDescription:
      'The Moroccan avocado smoothie is nothing like the savory avocado preparations of Western cuisine -- in Morocco, avocado is treated purely as a fruit, and the smoothie is a dessert-level indulgence. Ripe avocados are blended with cold milk, sugar (or honey), and sometimes a handful of almonds or walnuts to create an impossibly thick, creamy, pale-green shake. Some juice bars add a drizzle of argan oil or a sprinkle of cinnamon. The texture is like drinking velvet. These smoothies are served in tall glasses at juice bars (every medina has dozens) and are particularly refreshing in the heat of Moroccan summers. Morocco\'s avocados, grown primarily in the Gharb and Souss regions, are exceptionally rich and buttery. Many juice bars display their creations in the window -- towering glasses of avocado, banana, strawberry, almond, and date smoothies, each one a different shade of deliciousness. The avocado smoothie is the most popular and arguably the most uniquely Moroccan of the bunch.',
    priceRange: '10-15 MAD',
    priceNote: 'Mixed fruit smoothies cost slightly more',
    whereToFind: 'Juice bars in every medina, tourist areas, and modern cafes',
    tip: 'Ask for it with almonds and a drizzle of argan oil for the premium version. Pair with msemen for a heavenly Moroccan breakfast combo.',
    icon: LeafyGreen,
    category: 'drink',
    vegetarian: true,
    bestTime: 'Afternoon (2-6 PM)',
  },
];

/* =================================================================
   CITY GUIDE DATA
   ================================================================= */

type CityFoodGuide = {
  city: string;
  nickname: string;
  description: string;
  signature: string;
  mustVisit: string[];
  bestArea: string;
  specialties: string[];
};

const cityGuides: CityFoodGuide[] = [
  {
    city: 'Marrakech',
    nickname: 'The World Capital of Street Food',
    description:
      'Jemaa el-Fna square transforms every evening into the largest open-air restaurant on earth. Over 100 food stalls light up at sunset, filling the square with smoke, sizzle, and the theatrical calls of competing vendors. This is street food as pure spectacle. UNESCO recognized the cultural space of Jemaa el-Fna as a Masterpiece of Intangible Heritage partly because of this food tradition. Beyond the square, the surrounding medina alleys hide generations-old harira stalls, sfenj fryers, and the city\'s legendary tangia pots.',
    signature: 'Tangia (the dish unique to Marrakech)',
    mustVisit: [
      'Jemaa el-Fna night food stalls (stalls 1, 14, and 32 are local favorites)',
      'Cafe Clock for camel burger and cultural events',
      'Rahba Kedima spice square for snail soup',
      'Mellah (Jewish quarter) for unique pastries',
      'Bab Doukkala area for working-class bocadillos',
    ],
    bestArea: 'Jemaa el-Fna and surrounding derbs',
    specialties: ['Tangia', 'Sheep head (tête)', 'Snail soup', 'Number 1 brochette stalls'],
  },
  {
    city: 'Fes',
    nickname: 'The Culinary Capital',
    description:
      'Fes is where Moroccan haute cuisine was born, and its street food reflects centuries of refined gastronomy filtered down to the everyday level. The world\'s oldest functioning medina hides legendary food artisans: bakers producing paper-thin warqa pastry, pastry chefs crafting the finest chebakia, and soup masters whose harira recipes have been passed down for generations. The Rcif area and Talaa Kebira are the main food arteries, lined with stalls selling everything from fresh-fried sfenj to elaborate briouats.',
    signature: 'Pastilla (sweet-savory pie) served as street portions',
    mustVisit: [
      'Rcif square for the best sfenj and harira in Morocco',
      'Talaa Kebira street for continuous food stalls',
      'Ain Azliten area for traditional bakeries',
      'Bab Boujloud gate for bocadillo and juice stalls',
      'Moulay Idriss shrine area for blessed sweets',
    ],
    bestArea: 'Rcif square and Talaa Kebira',
    specialties: ['Pastilla street portions', 'Rfissa', 'Fassi chebakia', 'Shebakia with almond paste'],
  },
  {
    city: 'Casablanca',
    nickname: 'The Modern Food Melting Pot',
    description:
      'Casablanca\'s street food scene reflects its identity as Morocco\'s cosmopolitan economic capital. Here, traditional Moroccan snacks mingle with French-influenced patisserie, Senegalese grills, and modern fusion food trucks. The old medina retains classic stalls, while the Derb Sultan and Hay Mohammadi neighborhoods offer the most authentic working-class food. Casablanca is also the sardine capital of Morocco -- the port area has legendary fish grill stalls.',
    signature: 'Grilled sardines at the port fish market',
    mustVisit: [
      'Central Market (Marche Central) for seafood and French pastries',
      'Old medina for traditional street food stalls',
      'Port area fish grills for fresh sardines',
      'Derb Sultan for the best bocadillos',
      'Habous quarter for traditional Moroccan pastries',
    ],
    bestArea: 'Old medina and Central Market area',
    specialties: ['Port sardines', 'French-Moroccan pastries', 'Seafood bocadillos', 'Modern food trucks'],
  },
  {
    city: 'Essaouira',
    nickname: 'Seafood Street Food Paradise',
    description:
      'Essaouira\'s street food identity is inseparable from the Atlantic Ocean. The fishing port is the epicenter: fishing boats unload the morning catch, fishmongers sell it steps away, and open-air grills cook it immediately. You choose your fish (sardines, shrimp, calamari, sea bream, lobster) from ice-filled displays, negotiate the price, and it is grilled with chermoula right in front of you. The combination of ocean breeze, the sound of gulls, and just-caught fish sizzling on charcoal makes this one of Morocco\'s most memorable food experiences.',
    signature: 'Fish and seafood grilled at the port',
    mustVisit: [
      'Fish port grills (the row of outdoor restaurants by the harbor)',
      'Moulay Hassan square for orange juice and bocadillos',
      'Skala ramparts area for sunset snacks',
      'Mellah area for local pastries',
      'Beach vendors for roasted corn and peanuts',
    ],
    bestArea: 'Fishing port and Moulay Hassan square',
    specialties: ['Fresh grilled fish', 'Seafood bocadillos', 'Argan oil everything', 'Fresh calamari'],
  },
  {
    city: 'Tangier',
    nickname: 'Gateway City Where Cuisines Collide',
    description:
      'Tangier\'s street food bears the unmistakable imprint of its position as the gateway between Africa and Europe. Spanish tapas influences mingle with Riffian Berber cuisine and classic Moroccan fare. The Petit Socco and Grand Socco squares are the traditional food hubs, while the Corniche waterfront adds a modern food scene. Tangier\'s proximity to Spain means the bocadillo culture here is the strongest in Morocco, and the city has its own style of montaditos (small sandwiches).',
    signature: 'Bisara (dried fava bean soup) and Spanish-influenced montaditos',
    mustVisit: [
      'Grand Socco for juice stalls and bocadillos',
      'Petit Socco for cafe culture and snacks',
      'Tangier fish market for grilled seafood',
      'Marchane neighborhood for local specialties',
      'Corniche waterfront for modern street food',
    ],
    bestArea: 'Grand Socco and medina streets',
    specialties: ['Bisara (fava bean soup)', 'Spanish-influenced montaditos', 'Fish market grills', 'Riffian bread'],
  },
  {
    city: 'Meknes',
    nickname: 'The Hidden Gem of Moroccan Food',
    description:
      'Meknes is often overlooked by tourists, which means its street food scene is the most authentically local in Morocco -- virtually zero tourist inflation and stalls catering entirely to Moroccan tastes. The Hedim square (Meknes\'s version of Jemaa el-Fna, but far less touristic) has excellent evening food stalls. The city is famous for its olives (Meknes is the olive capital of Morocco), and every meal comes with an extraordinary olive assortment. Meknes also produces some of Morocco\'s best wine, though you won\'t find that on the street.',
    signature: 'Khlia (preserved dried meat) and world-class olives',
    mustVisit: [
      'Place el-Hedim for evening food stalls',
      'Bab Mansour gate area for brochettes',
      'Olive souk for the best olive selection in Morocco',
      'Old medina for affordable local favorites',
      'Near Moulay Ismail mausoleum for pastry shops',
    ],
    bestArea: 'Place el-Hedim and surrounding medina',
    specialties: ['Khlia (preserved meat)', 'Meknes olives', 'Beef brochettes', 'Affordable prices'],
  },
];

/* =================================================================
   VEGETARIAN OPTIONS DATA
   ================================================================= */

const vegetarianOptions = [
  { name: 'Msemen', description: 'Plain or with honey and butter -- naturally vegan without butter', icon: Wheat },
  { name: 'Baghrir', description: 'Thousand-hole pancakes with honey -- egg-free and dairy-free', icon: Coffee },
  { name: 'Maakouda', description: 'Fried potato cakes -- vegan when not served in a meat-based sandwich', icon: Apple },
  { name: 'Harcha', description: 'Semolina flatbread, buttery and golden, perfect with jam or cheese', icon: Wheat },
  { name: 'Zaalouk', description: 'Smoky eggplant and tomato dip with cumin and olive oil -- fully vegan', icon: LeafyGreen },
  { name: 'Fresh Orange Juice', description: 'Nothing but oranges, squeezed to order -- naturally vegan', icon: Apple },
  { name: 'Avocado Smoothie', description: 'Can be made with almond milk for a vegan version on request', icon: LeafyGreen },
  { name: 'Roasted Corn', description: 'Whole corn cobs roasted on charcoal, a popular autumn street snack', icon: Flame },
  { name: 'Boiled Chickpeas', description: 'Served hot with cumin and salt in a paper cone -- hearty and vegan', icon: Soup },
  { name: 'Chebakia', description: 'Honey-drenched sesame cookies -- contains no dairy, naturally vegetarian', icon: Heart },
  { name: 'Briwat with Cheese', description: 'Crispy filo triangles filled with goat cheese and herbs', icon: UtensilsCrossed },
  { name: 'Fried Aubergine', description: 'Battered and fried eggplant slices, often in bocadillos', icon: LeafyGreen },
];

/* =================================================================
   DARIJA/FRENCH PHRASES DATA
   ================================================================= */

const foodPhrases = [
  { darija: 'Ana ma kanakul-sh l-hem', french: 'Je ne mange pas de viande', english: 'I don\'t eat meat' },
  { darija: 'Ana nabati / nabtiya', french: 'Je suis vegetarien(ne)', english: 'I am vegetarian' },
  { darija: 'Bla hem', french: 'Sans viande', english: 'Without meat' },
  { darija: 'Bla halib', french: 'Sans lait', english: 'Without milk/dairy' },
  { darija: 'Wash fih l-hemm?', french: 'Est-ce qu\'il y a de la viande?', english: 'Does it contain meat?' },
  { darija: 'Wash fih jawz?', french: 'Est-ce qu\'il y a des noix?', english: 'Does it contain nuts?' },
  { darija: 'Ana andi hassasiya mn...', french: 'Je suis allergique a...', english: 'I am allergic to...' },
  { darija: 'Bla gluten', french: 'Sans gluten', english: 'Without gluten' },
  { darija: 'Wahd mn hadshi', french: 'Un de ceci', english: 'One of this' },
  { darija: 'Jouj mn hadshi', french: 'Deux de ceci', english: 'Two of this' },
  { darija: 'Bshhal hada?', french: 'Combien ca coute?', english: 'How much is this?' },
  { darija: 'Bzzaf!', french: 'Trop cher!', english: 'Too expensive!' },
  { darija: 'Zidni shwiya', french: 'Ajoutez un peu plus', english: 'Add a little more' },
  { darija: 'Bsaha!', french: 'Bon appetit!', english: 'To your health! / Enjoy!' },
  { darija: 'Skhoun bzzaf', french: 'Tres chaud', english: 'Very hot (spicy)' },
  { darija: 'Bla harr', french: 'Pas piquant', english: 'Not spicy' },
];

/* =================================================================
   PRICE GUIDE DATA
   ================================================================= */

const priceGuide = [
  { item: 'Sfenj (donut)', low: '1', high: '2', notes: 'Per piece' },
  { item: 'Khobz (bread)', low: '1', high: '2', notes: 'Per loaf' },
  { item: 'Msemen', low: '2', high: '5', notes: 'Plain to stuffed' },
  { item: 'Baghrir', low: '2', high: '3', notes: 'Per pancake' },
  { item: 'Maakouda', low: '3', high: '5', notes: 'Per piece' },
  { item: 'Harira soup', low: '5', high: '10', notes: 'Per bowl' },
  { item: 'Snail soup', low: '5', high: '10', notes: 'Per bowl' },
  { item: 'Orange juice', low: '5', high: '10', notes: 'Fresh squeezed' },
  { item: 'Chebakia', low: '5', high: '10', notes: '2-3 pieces' },
  { item: 'Avocado smoothie', low: '10', high: '15', notes: 'Large glass' },
  { item: 'Sardines (grilled)', low: '10', high: '20', notes: 'Full plate' },
  { item: 'Brochettes', low: '15', high: '30', notes: 'Per skewer' },
  { item: 'Bocadillo', low: '15', high: '25', notes: 'Loaded sandwich' },
  { item: 'Kefta sandwich', low: '15', high: '25', notes: 'With toppings' },
  { item: 'Tangia', low: '40', high: '60', notes: 'Per serving, shared' },
];

/* =================================================================
   PAGE COMPONENT
   ================================================================= */

export default function StreetFoodPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end">
        <img
          src="/images/hero-street-food-grill.webp"
          alt="Moroccan street food vendor grilling brochettes over charcoal with smoke and spices at a bustling medina stall"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-morocco relative z-10 pb-12 pt-32">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/80">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 text-white/50" />
              </li>
              <li className="flex items-center gap-1.5">
                <Link href="/cuisine" className="hover:text-white transition-colors">
                  Cuisine
                </Link>
                <ChevronRight className="h-3 w-3 text-white/50" />
              </li>
              <li className="text-white font-medium">Street Food Guide</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-white mb-4">
            <Flame className="h-4 w-4 text-[#C4960C]" />
            Complete Street Food Guide
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-display)] max-w-3xl leading-tight">
            Moroccan Street Food: The Ultimate Guide
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
            From 1 MAD sfenj donuts to sizzling brochettes at Jemaa el-Fna. Every dish,
            every price, every city -- your complete guide to eating on the streets of Morocco.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <UtensilsCrossed className="h-4 w-4 text-[#C4960C]" />
              15+ Must-Try Foods
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#C4960C]" />
              6 City Guides
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 text-[#C4960C]" />
              Prices in MAD
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-[#C4960C]" />
              Safety Tips Included
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INTRODUCTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-[#A0522D]/10">
                <Utensils className="h-5 w-5 text-[#A0522D]" />
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Why Moroccan Street Food Is Extraordinary
              </h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-4 text-[#1A1814]/80 font-[family-name:var(--font-heading)]">
              <p>
                Morocco is not just a country with great street food -- it is a country where street food <em>is</em> the food.
                Unlike many destinations where street vendors offer a simplified or lesser version of restaurant cuisine, in Morocco
                the relationship is inverted: the street stall is the original, the authentic, the benchmark. Restaurants aspire to
                recreate what the grandmother at the corner stall has been perfecting for forty years.
              </p>
              <p>
                The tradition runs deep. For centuries, the medina (old walled city) was the center of Moroccan life, and its narrow
                streets functioned as both marketplace and communal kitchen. Craftsmen, merchants, and laborers relied on street vendors
                for their daily meals. The communal bread oven (ferran), the neighborhood soup kitchen, the itinerant sfenj maker --
                these were not novelties but essential infrastructure, as vital as the mosques and fountains.
              </p>
              <p>
                Today, Moroccan street food maintains this living tradition while evolving with the times. A single walk through the
                medina of Marrakech, Fes, or any Moroccan city is a culinary education: the sizzle of brochettes on charcoal, the
                rhythmic slap of msemen dough being stretched, the bubbling cauldrons of harira, the theatrical squeeze of orange juice,
                the sweet scent of honey-drenched chebakia. Every sense is engaged, every corner reveals something new, and the prices
                remain astonishingly low -- a complete street food meal rarely exceeds 30-50 MAD (3-5 USD).
              </p>
              <p>
                This guide covers everything you need to know: the 15 essential street foods you must try, city-by-city
                recommendations, food safety advice, vegetarian options, prices in MAD, ordering etiquette, and key phrases in
                Darija (Moroccan Arabic) and French to help you navigate the stalls like a local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HISTORY & CULTURAL SIGNIFICANCE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C4960C]/10 px-4 py-1.5 text-sm font-semibold text-[#C4960C] mb-4">
                <BookOpen className="h-4 w-4" />
                History & Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                A Thousand Years of Street Food
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-[#1A1814]/75 font-[family-name:var(--font-heading)]">
                <p>
                  Morocco's street food tradition is not a modern phenomenon -- it stretches back over a millennium
                  to the founding of the great imperial cities. When Fes was established in the 9th century as a
                  center of Islamic scholarship, the narrow streets of its medina naturally evolved into an open-air
                  kitchen. Craftsmen in the tanning pits, weavers in the workshops, and scholars in the madrasas all
                  depended on street vendors for sustenance. The ferran (communal bread oven), the soup seller, and
                  the itinerant sweets vendor became pillars of urban Moroccan life.
                </p>
                <p>
                  The Andalusian refugees who arrived in Morocco after the fall of Granada in 1492 brought with them
                  refined culinary techniques that elevated Moroccan cuisine. Pastilla, with its delicate warqa pastry
                  and dusting of cinnamon sugar, is a direct descendant of Andalusian gastronomy. These sophisticated
                  dishes eventually filtered from royal kitchens to the streets, where they were democratized and
                  adapted for everyday consumption.
                </p>
                <p>
                  French colonial rule (1912-1956) introduced another layer: the baguette became the bocadillo, the
                  cafe became the cafe noir with msemen breakfast, and French patisserie merged with Moroccan
                  pastry traditions. Today's Moroccan street food is a living tapestry of Berber, Arab, Andalusian,
                  French, and sub-Saharan African influences -- each layer adding depth and complexity.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#EDE8E0]">
                  <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#C4960C]" />
                    Key Historical Influences
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      { era: 'Berber Origins', detail: 'Khobz, couscous, tagine, dried meats, and herbal broths from the indigenous Amazigh people' },
                      { era: 'Arab Arrival (7th c.)', detail: 'Spice trade routes brought cumin, saffron, cinnamon, and the tradition of communal eating' },
                      { era: 'Andalusian Exodus (15th c.)', detail: 'Pastilla, refined pastries, the sweet-savory flavor profile that defines Moroccan cuisine' },
                      { era: 'Ottoman Influence', detail: 'Brochette culture, grilling techniques, and coffee-house traditions spread across North Africa' },
                      { era: 'French Protectorate (1912-56)', detail: 'Baguettes, cafe culture, patisserie, and the bocadillo sandwich tradition' },
                      { era: 'Modern Era', detail: 'Food trucks, fusion cuisine, and global tourism elevating traditional street food to culinary stardom' },
                    ].map((item) => (
                      <li key={item.era} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                        <span>
                          <strong className="text-[#1A1814]">{item.era}:</strong>{' '}
                          <span className="text-[#1A1814]/65">{item.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#C4960C]/5 border border-[#C4960C]/15 p-5">
                  <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#C4960C]" />
                    UNESCO Recognition
                  </h3>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    Jemaa el-Fna in Marrakech was proclaimed a UNESCO Masterpiece of the Oral and Intangible Heritage
                    of Humanity in 2001, with its evening food market specifically cited as a key element of its
                    cultural significance. Moroccan couscous was inscribed on the UNESCO Intangible Cultural Heritage
                    list in 2020, shared with Algeria, Mauritania, and Tunisia. These recognitions underscore what
                    every visitor already senses: Moroccan food culture is world heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MUST-TRY STREET FOODS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
              <Star className="h-4 w-4" />
              The Essential List
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
              15 Must-Try Moroccan Street Foods
            </h2>
            <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              From humble 1 MAD sfenj donuts to the legendary slow-cooked tangia of Marrakech.
              These are the foods that define Morocco's street food culture.
            </p>
          </div>

          {/* Street food image showcase */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/photo-harira-soup.webp"
                alt="Bowl of traditional Moroccan harira soup with lentils, chickpeas, cilantro, and a wedge of lemon"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-semibold text-sm">Harira Soup</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/photo-msemen-flatbread.webp"
                alt="Golden layered msemen flatbread being cooked on a traditional flat griddle"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-semibold text-sm">Msemen Flatbread</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] col-span-2 md:col-span-1">
              <img
                src="/images/photo-brochettes-grill.webp"
                alt="Moroccan brochettes grilling over hot charcoal with cumin and paprika seasoning"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-semibold text-sm">Charcoal Brochettes</span>
              </div>
            </div>
          </div>

          {/* Street food cards */}
          <div className="space-y-6">
            {streetFoods.map((food, index) => {
              const Icon = food.icon;
              return (
                <article
                  key={food.name}
                  id={food.name.toLowerCase().replace(/[\s()]/g, '-')}
                  className="card-moroccan rounded-2xl p-6 md:p-8 bg-[#FAF8F5] border border-[#EDE8E0]"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Number & Icon */}
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2 shrink-0">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D] text-white text-lg font-bold font-[family-name:var(--font-display)]">
                        {index + 1}
                      </span>
                      <Icon className="h-5 w-5 text-[#A0522D]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                          {food.name}
                        </h3>
                        <span className="text-sm text-[#1A1814]/50 font-[family-name:var(--font-heading)]">
                          {food.arabicName}
                        </span>
                        {food.vegetarian && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2.5 py-0.5 text-xs font-semibold">
                            <LeafyGreen className="h-3 w-3" />
                            Vegetarian
                          </span>
                        )}
                      </div>

                      <p className="text-sm font-semibold text-[#A0522D] mb-3">
                        {food.description}
                      </p>

                      <p className="text-[#1A1814]/75 leading-relaxed font-[family-name:var(--font-heading)] mb-4">
                        {food.longDescription}
                      </p>

                      {/* Info grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 bg-white rounded-xl p-3 border border-[#EDE8E0]">
                          <DollarSign className="h-4 w-4 text-[#C4960C] mt-0.5 shrink-0" />
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/40">Price</span>
                            <p className="text-sm font-semibold text-[#1A1814]">{food.priceRange}</p>
                            <p className="text-xs text-[#1A1814]/50">{food.priceNote}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 bg-white rounded-xl p-3 border border-[#EDE8E0]">
                          <MapPin className="h-4 w-4 text-[#C4960C] mt-0.5 shrink-0" />
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/40">Where to Find</span>
                            <p className="text-sm text-[#1A1814]/75">{food.whereToFind}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 bg-white rounded-xl p-3 border border-[#EDE8E0]">
                          <Clock className="h-4 w-4 text-[#C4960C] mt-0.5 shrink-0" />
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/40">Best Time</span>
                            <p className="text-sm text-[#1A1814]/75">{food.bestTime}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 bg-white rounded-xl p-3 border border-[#EDE8E0]">
                          <ThumbsUp className="h-4 w-4 text-[#C4960C] mt-0.5 shrink-0" />
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/40">Local Tip</span>
                            <p className="text-sm text-[#1A1814]/75">{food.tip}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MORE FOOD IMAGES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src="/images/photo-sfenj-donuts.webp"
                alt="Golden sfenj Moroccan donuts being fried in hot oil at a morning street stall"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-lg font-[family-name:var(--font-display)]">Sfenj: 1-2 MAD of Pure Happiness</h3>
                <p className="text-white/80 text-sm mt-1">The cheapest and most beloved breakfast on the streets of Morocco</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src="/images/photo-couscous-traditional.webp"
                alt="Traditional Moroccan couscous served in a decorative tagine dish with vegetables and meat"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-lg font-[family-name:var(--font-display)]">Friday Couscous: A Sacred Tradition</h3>
                <p className="text-white/80 text-sm mt-1">Every Friday, Morocco sits down together for the national dish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CITY-BY-CITY GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
              <Compass className="h-4 w-4" />
              City-by-City Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
              Where to Eat Street Food in Morocco
            </h2>
            <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Every Moroccan city has its own street food personality. Here is where to find
              the best bites in six of Morocco's top destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cityGuides.map((city) => (
              <article
                key={city.city}
                className="card-moroccan rounded-2xl p-6 md:p-8 bg-[#FAF8F5] border border-[#EDE8E0]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A0522D]/10">
                    <MapPin className="h-5 w-5 text-[#A0522D]" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                      {city.city}
                    </h3>
                    <p className="text-sm text-[#C4960C] font-semibold">{city.nickname}</p>
                  </div>
                </div>

                <p className="text-[#1A1814]/75 leading-relaxed font-[family-name:var(--font-heading)] mb-4">
                  {city.description}
                </p>

                <div className="mb-4 bg-white rounded-xl p-4 border border-[#EDE8E0]">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-[#C4960C]" />
                    <span className="text-sm font-bold text-[#1A1814]">Signature Dish</span>
                  </div>
                  <p className="text-sm text-[#1A1814]/70">{city.signature}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-[#1A1814] mb-2 flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-[#A0522D]" />
                    Must-Visit Spots
                  </h4>
                  <ul className="space-y-1.5">
                    {city.mustVisit.map((spot) => (
                      <li key={spot} className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                        <ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                        <span>{spot}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {city.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center rounded-full bg-[#A0522D]/8 px-3 py-1 text-xs font-semibold text-[#A0522D]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOD SAFETY TIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
                <Shield className="h-4 w-4" />
                Stay Safe
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Food Safety Tips for Morocco
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                Moroccan street food is generally safe, but following these guidelines will help
                you enjoy every bite without any stomach troubles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* DO column */}
              <div className="rounded-2xl bg-white p-6 border border-[#EDE8E0]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                    <ThumbsUp className="h-5 w-5 text-green-600" />
                  </span>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                    Safe Practices
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Choose stalls with high customer turnover -- busy stalls mean fresh food and happy locals',
                    'Watch your food being cooked fresh in front of you -- this is both safer and tastier',
                    'Drink bottled water only -- widely available for 3-5 MAD',
                    'Eat fruits you can peel yourself: oranges, bananas, mandarins',
                    'Start with cooked, hot food items during your first days to let your stomach adjust',
                    'Use hand sanitizer before eating if no washing facilities are available',
                    'Eat where locals eat -- the best food safety indicator is a crowd of Moroccans',
                    'If trying snail soup for the first time, note that the broth is boiled for hours and very safe',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1A1814]/75">
                      <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DON'T column */}
              <div className="rounded-2xl bg-white p-6 border border-[#EDE8E0]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </span>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                    Things to Avoid
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Raw salads from street vendors -- restaurant salads are usually fine, but street-side ones are riskier',
                    'Tap water and ice from unknown sources -- always ask "eau minerale?" for bottled water',
                    'Mayonnaise-based items in hot weather -- the heat can turn them quickly',
                    'Pre-made food that has been sitting in the sun -- freshly prepared is always better',
                    'Unrefrigerated dairy products, especially in summer months',
                    'Meat that looks like it has been sitting out rather than freshly grilled',
                    'Empty stalls with no local customers -- the absence of locals is a warning sign',
                    'Overloading your stomach on the first day -- ease into the street food scene gradually',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1A1814]/75">
                      <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stomach prep callout */}
            <div className="mt-8 rounded-2xl bg-[#A0522D]/5 border border-[#A0522D]/15 p-6">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-[#A0522D] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2">
                    Stomach Preparation Strategy
                  </h4>
                  <p className="text-sm text-[#1A1814]/75 leading-relaxed font-[family-name:var(--font-heading)]">
                    If you have a sensitive stomach, consider taking a probiotic supplement for a week before your
                    trip. During your first 1-2 days in Morocco, stick to cooked, hot foods (harira, brochettes,
                    msemen) and bottled water. By day 3, your digestive system will have adjusted and you can
                    venture into more adventurous territory. Many travelers report no issues at all -- Moroccan
                    food is generally well-cooked and spiced, which helps with food safety. Carry Imodium and
                    oral rehydration salts as a precaution, available at any Moroccan pharmacy for a few MAD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          VEGETARIAN & VEGAN OPTIONS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 mb-4">
              <LeafyGreen className="h-4 w-4" />
              Plant-Based Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
              Vegetarian & Vegan Street Food
            </h2>
            <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Morocco has a surprising wealth of plant-based street food. Many traditional snacks
              are naturally vegetarian or easily adapted. Here are your best options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vegetarianOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.name}
                  className="flex items-start gap-3 rounded-2xl bg-[#FAF8F5] p-5 border border-[#EDE8E0]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 shrink-0">
                    <Icon className="h-4 w-4 text-green-600" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">{option.name}</h3>
                    <p className="text-sm text-[#1A1814]/60 mt-0.5">{option.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-green-50 border border-green-200 p-6">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2">
                  Tips for Vegetarian Travelers
                </h4>
                <p className="text-sm text-[#1A1814]/75 leading-relaxed font-[family-name:var(--font-heading)]">
                  While Morocco is not traditionally a vegetarian country, the street food scene is surprisingly
                  accommodating. The key phrases to learn are "bla hem" (without meat) and "ana nabati" (I am
                  vegetarian). Note that harira soup traditionally contains meat stock even if meat pieces are not
                  visible, and some dishes may be cooked in animal fat. For strict vegans, stick to fresh juices,
                  fruits, breads (msemen, baghrir), maakouda, and clearly plant-based items. Moroccan vendors
                  are generally helpful and understanding when you explain dietary needs, especially in tourist areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRICE GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
                <DollarSign className="h-4 w-4" />
                Prices in MAD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Moroccan Street Food Price Guide
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                Street food in Morocco is extraordinarily affordable. Here is what to expect to pay.
                Prices are in Moroccan Dirhams (MAD). 10 MAD is roughly 1 USD / 0.90 EUR.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#EDE8E0] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#A0522D] text-white">
                      <th className="text-left py-3 px-4 text-sm font-bold font-[family-name:var(--font-heading)]">Item</th>
                      <th className="text-center py-3 px-4 text-sm font-bold font-[family-name:var(--font-heading)]">Low (MAD)</th>
                      <th className="text-center py-3 px-4 text-sm font-bold font-[family-name:var(--font-heading)]">High (MAD)</th>
                      <th className="text-left py-3 px-4 text-sm font-bold font-[family-name:var(--font-heading)]">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceGuide.map((item, i) => (
                      <tr
                        key={item.item}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}
                      >
                        <td className="py-3 px-4 text-sm font-semibold text-[#1A1814]">{item.item}</td>
                        <td className="py-3 px-4 text-sm text-center text-[#1A1814]/70">{item.low} MAD</td>
                        <td className="py-3 px-4 text-sm text-center text-[#1A1814]/70">{item.high} MAD</td>
                        <td className="py-3 px-4 text-sm text-[#1A1814]/60">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white p-5 border border-[#EDE8E0] text-center">
                <DollarSign className="h-6 w-6 text-[#C4960C] mx-auto mb-2" />
                <h4 className="font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">Budget Day</h4>
                <p className="text-2xl font-bold text-[#A0522D] font-[family-name:var(--font-display)] mt-1">60-80 MAD</p>
                <p className="text-xs text-[#1A1814]/50 mt-1">~6-8 USD / 3 meals from stalls</p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-[#EDE8E0] text-center">
                <DollarSign className="h-6 w-6 text-[#C4960C] mx-auto mb-2" />
                <h4 className="font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">Moderate Day</h4>
                <p className="text-2xl font-bold text-[#A0522D] font-[family-name:var(--font-display)] mt-1">100-150 MAD</p>
                <p className="text-xs text-[#1A1814]/50 mt-1">~10-15 USD / mix of stalls & cafes</p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-[#EDE8E0] text-center">
                <DollarSign className="h-6 w-6 text-[#C4960C] mx-auto mb-2" />
                <h4 className="font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">Splurge Day</h4>
                <p className="text-2xl font-bold text-[#A0522D] font-[family-name:var(--font-display)] mt-1">200-300 MAD</p>
                <p className="text-xs text-[#1A1814]/50 mt-1">~20-30 USD / everything + restaurants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BEST TIMES TO EAT
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
                <Clock className="h-4 w-4" />
                Timing Your Meals
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Best Times to Eat Street Food
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                Moroccan street food follows a daily rhythm. Knowing when to eat what will
                help you experience the best of each meal.
              </p>
            </div>

            <div className="space-y-6">
              {/* Early Morning */}
              <div className="flex flex-col md:flex-row gap-6 items-start rounded-2xl bg-[#FAF8F5] p-6 border border-[#EDE8E0]">
                <div className="flex items-center gap-3 md:min-w-[200px]">
                  <Sun className="h-6 w-6 text-[#C4960C]" />
                  <div>
                    <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)]">Early Morning</h3>
                    <span className="text-sm text-[#A0522D] font-semibold">6:00 - 9:00 AM</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#1A1814]/75 font-[family-name:var(--font-heading)] leading-relaxed">
                    The quietest but most rewarding time for street food. This is when the sfenj makers fire up their oil, the
                    msemen women set up their griddles, and fresh khobz emerges from neighborhood ovens. The best sfenj
                    and baghrir are available only in the early morning -- by 10 AM, many breakfast stalls have sold out.
                    Pair with fresh-squeezed orange juice and a glass of cafe noir (strong black coffee) or mint tea.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Sfenj', 'Msemen', 'Baghrir', 'Khobz', 'Coffee', 'Orange juice'].map((item) => (
                      <span key={item} className="text-xs bg-white rounded-full px-3 py-1 text-[#1A1814]/60 border border-[#EDE8E0]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mid-Morning */}
              <div className="flex flex-col md:flex-row gap-6 items-start rounded-2xl bg-[#FAF8F5] p-6 border border-[#EDE8E0]">
                <div className="flex items-center gap-3 md:min-w-[200px]">
                  <Coffee className="h-6 w-6 text-[#C4960C]" />
                  <div>
                    <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)]">Mid-Morning</h3>
                    <span className="text-sm text-[#A0522D] font-semibold">9:00 - 11:30 AM</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#1A1814]/75 font-[family-name:var(--font-heading)] leading-relaxed">
                    The medina is waking up and the first wave of snack vendors appears. This is a great time for a
                    late breakfast or brunch at a juice bar -- try an avocado smoothie or a mixed fruit juice. Pastry
                    shops display their morning production of croissants (a French colonial legacy), briouat pastries,
                    and petit fours. Lighter snacks like roasted nuts and dried fruits are available from carts.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Avocado smoothie', 'Juice bars', 'Pastries', 'Nuts & dried fruit'].map((item) => (
                      <span key={item} className="text-xs bg-white rounded-full px-3 py-1 text-[#1A1814]/60 border border-[#EDE8E0]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lunch */}
              <div className="flex flex-col md:flex-row gap-6 items-start rounded-2xl bg-[#FAF8F5] p-6 border border-[#EDE8E0]">
                <div className="flex items-center gap-3 md:min-w-[200px]">
                  <Utensils className="h-6 w-6 text-[#C4960C]" />
                  <div>
                    <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)]">Lunch Rush</h3>
                    <span className="text-sm text-[#A0522D] font-semibold">12:00 - 3:00 PM</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#1A1814]/75 font-[family-name:var(--font-heading)] leading-relaxed">
                    Peak bocadillo time. This is when working Moroccans queue at sandwich stalls for their daily bocadillo,
                    loaded with maakouda, kefta, or grilled merguez. Tangia in Marrakech is also served at lunch,
                    having slow-cooked since the morning. Grilled sardines at coastal cities are at their best during
                    lunchtime when the morning catch is freshest. Some stalls serve mini tagines and harira soup.
                    The lunch rush is intense but fast -- stalls serve at incredible speed.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Bocadillos', 'Maakouda', 'Tangia', 'Grilled sardines', 'Kefta', 'Harira'].map((item) => (
                      <span key={item} className="text-xs bg-white rounded-full px-3 py-1 text-[#1A1814]/60 border border-[#EDE8E0]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Afternoon */}
              <div className="flex flex-col md:flex-row gap-6 items-start rounded-2xl bg-[#FAF8F5] p-6 border border-[#EDE8E0]">
                <div className="flex items-center gap-3 md:min-w-[200px]">
                  <ShoppingBag className="h-6 w-6 text-[#C4960C]" />
                  <div>
                    <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)]">Afternoon</h3>
                    <span className="text-sm text-[#A0522D] font-semibold">3:00 - 5:30 PM</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#1A1814]/75 font-[family-name:var(--font-heading)] leading-relaxed">
                    The quiet lull between lunch and the evening spectacle. This is the time for sweet snacks,
                    mint tea breaks, and light bites. Chebakia, ghriba cookies, and kaab ghzal pastries are
                    perfect with a glass of mint tea at a cafe terrace. Juice bars and smoothie vendors see a
                    second rush as the afternoon heat drives people to seek refreshment. A great time to explore
                    the pastry shops and bakeries without the crowds.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Mint tea', 'Chebakia', 'Pastries', 'Juice & smoothies', 'Roasted corn'].map((item) => (
                      <span key={item} className="text-xs bg-white rounded-full px-3 py-1 text-[#1A1814]/60 border border-[#EDE8E0]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Evening */}
              <div className="flex flex-col md:flex-row gap-6 items-start rounded-2xl bg-[#FAF8F5] p-6 border border-[#EDE8E0]">
                <div className="flex items-center gap-3 md:min-w-[200px]">
                  <Flame className="h-6 w-6 text-[#C4960C]" />
                  <div>
                    <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)]">Evening Peak</h3>
                    <span className="text-sm text-[#A0522D] font-semibold">5:30 PM - Midnight</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#1A1814]/75 font-[family-name:var(--font-heading)] leading-relaxed">
                    This is the main event. As the sun sets, Morocco's street food scene erupts into full
                    spectacle. At Jemaa el-Fna, over 100 stalls light up simultaneously. Charcoal grills
                    send plumes of aromatic smoke into the air. Brochette vendors compete with theatrical
                    calls. Harira and snail soup cauldrons bubble. The evening is when you will find the
                    widest variety and the most atmospheric experience. Arrive between 6-7 PM for the
                    best selection, or after 9 PM for a more relaxed pace. Many stalls stay open until midnight.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Brochettes', 'Snail soup', 'Harira', 'Full grill stalls', 'Sheep head', 'Everything'].map((item) => (
                      <span key={item} className="text-xs bg-white rounded-full px-3 py-1 text-[#1A1814]/60 border border-[#EDE8E0]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ramadan Special */}
              <div className="flex flex-col md:flex-row gap-6 items-start rounded-2xl bg-[#C4960C]/5 p-6 border border-[#C4960C]/20">
                <div className="flex items-center gap-3 md:min-w-[200px]">
                  <Calendar className="h-6 w-6 text-[#C4960C]" />
                  <div>
                    <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)]">Ramadan</h3>
                    <span className="text-sm text-[#C4960C] font-semibold">Sunset - 2:00 AM</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#1A1814]/75 font-[family-name:var(--font-heading)] leading-relaxed">
                    During Ramadan, the street food schedule inverts. Nothing is available during daylight hours,
                    but at sunset (iftar), the entire country erupts into a food celebration. Special Ramadan
                    street foods appear: fresh chebakia, sellou energy bars, dates, milk, and massive quantities
                    of harira. After iftar, the evening street food scene continues late into the night, often
                    until 2-3 AM. It is one of the most extraordinary food experiences in the world. Check our{' '}
                    <Link href="/ramadan" className="text-[#A0522D] underline hover:text-[#C4960C] transition-colors">
                      Ramadan guide
                    </Link>{' '}
                    for full details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ORDERING TIPS & ETIQUETTE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
                <BookOpen className="h-4 w-4" />
                Etiquette Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Ordering Tips & Eating Etiquette
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                Knowing the unwritten rules of Moroccan street food culture will enrich your
                experience and earn you respect from vendors and locals alike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Eat with Your Right Hand',
                  description:
                    'In Moroccan culture, the left hand is considered unclean. When eating with your hands (tearing bread, scooping tagine), always use your right hand. This applies at street stalls, restaurants, and especially when sharing a communal dish. Left-handed travelers should make an effort -- it is one of the most important cultural norms.',
                  icon: Eye,
                },
                {
                  title: 'Saying Bismillah',
                  description:
                    'Moroccans say "Bismillah" (in the name of God) before eating and "Alhamdulillah" (praise God) after finishing. While not expected of tourists, saying "Bismillah" before eating or "Bsaha" (to your health/enjoy) when someone finishes shows cultural awareness and is always warmly received.',
                  icon: Heart,
                },
                {
                  title: 'Handling Bread',
                  description:
                    'Never waste bread or throw it on the ground -- bread is sacred in Moroccan culture. Tear bread by hand, never cut it with a knife. If you see bread on the ground, a Moroccan will pick it up and place it somewhere elevated. Leftover bread is dried and repurposed, never discarded in the trash.',
                  icon: Wheat,
                },
                {
                  title: 'Tipping at Street Stalls',
                  description:
                    'Tipping is not expected at basic street stalls. For a 10 MAD harira, you do not need to tip. However, rounding up is kind (paying 10 MAD for an 8 MAD item). If you sit at a stall with table service, leaving 2-5 MAD is appropriate. At Jemaa el-Fna sit-down stalls, 5-10% is reasonable.',
                  icon: DollarSign,
                },
                {
                  title: 'Asking for Prices First',
                  description:
                    'Always confirm the price before ordering, especially at tourist-area stalls. Ask "Bshhal?" (how much?) and agree before eating. Most street food has standard, well-known prices that locals all know. If a price seems much higher than our guide suggests, it may be tourist inflation -- politely move to the next stall.',
                  icon: Info,
                },
                {
                  title: 'Pointing and Gesturing',
                  description:
                    'At most stalls, pointing at what you want and showing the quantity on your fingers is perfectly acceptable and widely practiced. Many vendors in tourist areas speak basic English or French. Do not be shy -- vendors are accustomed to non-Arabic speakers and will happily work with gestures.',
                  icon: Navigation,
                },
                {
                  title: 'Sharing Food Culture',
                  description:
                    'Moroccans are among the most generous people on earth when it comes to food. If someone at a neighboring table offers you food, it is sincere and refusing multiple times can be impolite. Accept graciously, even if just a small taste. You may find yourself invited to join a family meal -- one of the best travel experiences in Morocco.',
                  icon: Globe,
                },
                {
                  title: 'Photographing Food Stalls',
                  description:
                    'Most vendors do not mind photos of their food, but always ask first ("Mumkin sura?" -- can I take a photo?). Buying something before or after taking photos is good etiquette. At Jemaa el-Fna, some entertainers and vendors may expect a small tip (2-5 MAD) for being photographed.',
                  icon: Eye,
                },
              ].map((tip) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={tip.title}
                    className="rounded-2xl bg-white p-6 border border-[#EDE8E0]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#A0522D]/10">
                        <Icon className="h-4 w-4 text-[#A0522D]" />
                      </span>
                      <h3 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                        {tip.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed font-[family-name:var(--font-heading)]">
                      {tip.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DARIJA & FRENCH PHRASES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
                <Globe className="h-4 w-4" />
                Language Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Essential Food Phrases in Darija & French
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                These phrases will help you navigate dietary restrictions, order food, and
                connect with vendors. Moroccan Arabic (Darija) and French are both widely understood.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAF8F5] border border-[#EDE8E0] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#A0522D] text-white">
                      <th className="text-left py-3 px-4 text-sm font-bold font-[family-name:var(--font-heading)]">English</th>
                      <th className="text-left py-3 px-4 text-sm font-bold font-[family-name:var(--font-heading)]">Darija (Moroccan Arabic)</th>
                      <th className="text-left py-3 px-4 text-sm font-bold font-[family-name:var(--font-heading)]">French</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodPhrases.map((phrase, i) => (
                      <tr
                        key={phrase.english}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}
                      >
                        <td className="py-3 px-4 text-sm text-[#1A1814]/80">{phrase.english}</td>
                        <td className="py-3 px-4 text-sm font-semibold text-[#A0522D]">{phrase.darija}</td>
                        <td className="py-3 px-4 text-sm text-[#1A1814]/60 italic">{phrase.french}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#A0522D]/5 border border-[#A0522D]/15 p-6">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-[#A0522D] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2">
                    Pronunciation Tips
                  </h4>
                  <p className="text-sm text-[#1A1814]/75 leading-relaxed font-[family-name:var(--font-heading)]">
                    Darija pronunciation is phonetic for the most part. "Sh" sounds like "sh" in "ship," "kh" is a
                    guttural sound like clearing your throat (similar to the "ch" in Scottish "loch"), and doubled
                    consonants are held slightly longer. Do not worry about perfect pronunciation -- Moroccans will
                    appreciate any attempt at their language, and even a slightly mangled "Bsaha!" will earn you
                    a warm smile. When in doubt, try French -- it is widely spoken as a second language and most
                    food vendors in tourist areas understand basic French phrases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SELF-GUIDED FOOD TOUR ITINERARY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
                <Compass className="h-4 w-4" />
                Self-Guided Tour
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                The Perfect Street Food Day in Marrakech
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                Follow this self-guided itinerary for the ultimate street food experience
                in Morocco's culinary capital. Total estimated cost: 80-120 MAD.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-[#EDE8E0] hidden md:block" />

              <div className="space-y-8">
                {[
                  {
                    time: '7:00 AM',
                    title: 'Sfenj & Coffee at Bab Doukkala',
                    description:
                      'Start your day like a Marrakchi. Head to the Bab Doukkala neighborhood where the city\'s best sfenj makers have been frying since dawn. Order 3-4 sfenj (3-4 MAD total) and a glass of cafe noir or noss-noss (half coffee, half milk). Sit on a plastic stool and watch the city wake up. The sfenj here are lighter and airier than the tourist-area versions.',
                    cost: '8-12 MAD',
                    icon: Coffee,
                  },
                  {
                    time: '9:00 AM',
                    title: 'Msemen & Orange Juice at Riad Zitoun',
                    description:
                      'Walk through the medina to the Riad Zitoun el-Kedim area, where several msemen stalls cluster near the entrance to the souks. Order a stuffed msemen (with cheese or kefta) and wash it down with a glass of freshly squeezed orange juice from one of the juice carts. The combination of flaky, buttery bread and cold, sweet juice is perfection.',
                    cost: '10-15 MAD',
                    icon: Wheat,
                  },
                  {
                    time: '11:30 AM',
                    title: 'Maakouda Bocadillo near Rahba Kedima',
                    description:
                      'By late morning, hunger returns. Navigate to the area around Rahba Kedima (the spice square) where bocadillo stalls do brisk trade with souk workers. Order a bocadillo komplet with maakouda, egg, olives, and harissa. This is the authentic working-class lunch of Marrakech, and the stalls here cater to locals, not tourists -- prices and quality reflect this.',
                    cost: '15-20 MAD',
                    icon: UtensilsCrossed,
                  },
                  {
                    time: '2:00 PM',
                    title: 'Snail Soup at a Medina Cart',
                    description:
                      'After the midday heat subsides, seek out a babbouche cart in the northern medina. The snail vendors set up near busy intersections and mosque areas. A bowl of snail soup is the perfect mid-afternoon pick-me-up -- the herbal broth is warming and the snails are fun to eat with the provided toothpick. Sip the broth slowly.',
                    cost: '5-10 MAD',
                    icon: Soup,
                  },
                  {
                    time: '4:00 PM',
                    title: 'Avocado Smoothie & Chebakia Break',
                    description:
                      'Find a juice bar (there are dozens along the main medina arteries) and order a thick avocado smoothie with almonds. Pick up a few pieces of chebakia from a nearby pastry stall. Sit in the shade and recharge before the evening spectacle. This sweet pairing is the perfect energy boost.',
                    cost: '15-20 MAD',
                    icon: LeafyGreen,
                  },
                  {
                    time: '6:30 PM',
                    title: 'Jemaa el-Fna: Brochettes & Harira',
                    description:
                      'The grand finale. As the sun sets, Jemaa el-Fna explodes into life. Grab a seat at one of the numbered stalls (locals recommend stalls 1, 14, and 32 for quality and fair prices). Order a bowl of harira soup to start, then brochettes of lamb and kefta with bread, cumin, and a fresh tomato salad. Watch the square transform into the greatest food show on earth as you eat.',
                    cost: '30-45 MAD',
                    icon: Flame,
                  },
                ].map((stop, i) => {
                  const StopIcon = stop.icon;
                  return (
                    <div key={i} className="flex gap-6 relative">
                      <div className="shrink-0 z-10">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A0522D] text-white shadow-md">
                          <StopIcon className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="flex-1 rounded-2xl bg-white p-6 border border-[#EDE8E0]">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-[#C4960C] font-[family-name:var(--font-heading)]">
                            {stop.time}
                          </span>
                          <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                            {stop.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[#1A1814]/70 leading-relaxed font-[family-name:var(--font-heading)] mb-3">
                          {stop.description}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A0522D] bg-[#A0522D]/8 rounded-full px-3 py-1">
                          <DollarSign className="h-3 w-3" />
                          {stop.cost}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-1.5 text-sm font-semibold text-[#A0522D] mb-4">
                <Info className="h-4 w-4" />
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                Everything travelers ask about eating street food in Morocco, answered
                with practical, experience-based advice.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl bg-white border border-[#EDE8E0] overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-[#FAF8F5] transition-colors list-none">
                    <h3 className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)] pr-4">
                      {faq.question}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-[#A0522D] shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed font-[family-name:var(--font-heading)]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#A0522D]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
            Ready to Eat Your Way Through Morocco?
          </h2>
          <p className="text-lg text-white/80 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-8">
            From the sizzling grills of Jemaa el-Fna to the fish stalls of Essaouira,
            Moroccan street food is an adventure for every sense. Start planning your
            culinary journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cuisine"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#A0522D] hover:bg-[#FAF8F5] transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              Full Cuisine Guide
            </Link>
            <Link
              href="/cooking-classes"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/25 transition-colors"
            >
              <UtensilsCrossed className="h-4 w-4" />
              Cooking Classes
            </Link>
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/25 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Marrakech Guide
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/25 transition-colors"
            >
              <Compass className="h-4 w-4" />
              First Time Visitor Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EXPLORE MORE
          ══════════════════════════════════════════════════════════ */}
      <ExploreMore currentCategory="food" currentHref="/street-food" />
    </>
  );
}

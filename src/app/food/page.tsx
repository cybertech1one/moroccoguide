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
  AlertTriangle,
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
} from 'lucide-react';
import FoodClient from './FoodClient';
import type { Dish } from './FoodClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Food & Cuisine Guide | Traditional Dishes, Street Food, Spices & Regional Specialties',
  description:
    'The definitive guide to Moroccan cuisine. Discover must-try dishes like tagine, couscous, pastilla, harira, tanjia, rfissa, and mechoui. Explore street food, regional specialties, spice markets, vegetarian options, food photography tips, and a complete glossary of Moroccan food terms.',
  keywords: [
    'Moroccan food',
    'Moroccan cuisine',
    'tagine',
    'couscous',
    'Moroccan dishes',
    'Moroccan street food',
    'Moroccan spices',
    'ras el hanout',
    'Moroccan mint tea',
    'pastilla',
    'harira',
    'tanjia',
    'rfissa',
    'mechoui',
    'Moroccan cooking',
    'food in Morocco',
    'what to eat in Morocco',
    'Moroccan restaurants',
    'Moroccan dining etiquette',
    'babbouche snail soup',
    'Moroccan street food prices',
    'vegetarian Moroccan food',
    'Moroccan food glossary',
    'Moroccan food markets',
    'Moroccan food photography',
    'chebakia',
    'sellou',
    'briouat',
    'msemmen',
    'baghrir',
    'merguez',
    'maakouda',
    'Moroccan food itinerary',
  ],
  openGraph: {
    title: 'Moroccan Food & Cuisine Guide - CityGuide',
    description:
      'Your complete guide to Moroccan cuisine. Traditional dishes, street food, spices, regional specialties, vegetarian guide, food markets, and dining etiquette.',
    url: 'https://citytoursmorocco.com/food',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan tagine with vegetables and spices',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/food' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FoodEstablishment',
      '@id': 'https://citytoursmorocco.com/food#guide',
      name: 'Moroccan Food & Cuisine Guide',
      description:
        'The definitive guide to Moroccan cuisine covering traditional dishes, street food, spices, regional specialties, vegetarian options, food markets, and dining etiquette.',
      url: 'https://citytoursmorocco.com/food',
      servesCuisine: 'Moroccan',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'MA',
      },
    },
    {
      '@type': 'Recipe',
      name: 'Moroccan Tagine',
      description:
        'A slow-cooked stew prepared in a conical clay pot, featuring tender meat or vegetables with aromatic spices, preserved lemons, and olives.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Main Course',
      recipeIngredient: [
        'Lamb or chicken',
        'Onions',
        'Preserved lemons',
        'Olives',
        'Ras el hanout',
        'Saffron',
        'Ginger',
        'Olive oil',
        'Fresh cilantro',
        'Fresh parsley',
      ],
      keywords: 'tagine, Moroccan stew, slow-cooked, traditional',
    },
    {
      '@type': 'Recipe',
      name: 'Moroccan Couscous',
      description:
        'Hand-rolled semolina granules steamed to fluffy perfection and served with a rich vegetable and meat broth, traditionally enjoyed on Fridays.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Main Course',
      recipeIngredient: [
        'Couscous semolina',
        'Lamb or chicken',
        'Chickpeas',
        'Carrots',
        'Turnips',
        'Zucchini',
        'Onions',
        'Tomato paste',
        'Ras el hanout',
        'Butter',
      ],
      keywords: 'couscous, Moroccan, Friday dish, semolina, traditional',
    },
    {
      '@type': 'Recipe',
      name: 'Pastilla (Bastilla)',
      description:
        'An exquisite sweet-and-savory pie of shredded pigeon or chicken wrapped in crispy warqa pastry layers, dusted with cinnamon and powdered sugar.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Main Course',
      recipeIngredient: [
        'Pigeon or chicken',
        'Warqa pastry',
        'Almonds',
        'Eggs',
        'Onions',
        'Cinnamon',
        'Powdered sugar',
        'Saffron',
        'Parsley',
        'Butter',
      ],
      keywords: 'pastilla, bastilla, Moroccan pie, Fes specialty',
    },
    {
      '@type': 'Recipe',
      name: 'Harira Soup',
      description:
        'A hearty tomato-based soup with lentils, chickpeas, and meat, traditionally served during Ramadan to break the fast.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Soup',
      recipeIngredient: [
        'Tomatoes',
        'Lentils',
        'Chickpeas',
        'Lamb or beef',
        'Onions',
        'Celery',
        'Cilantro',
        'Parsley',
        'Ginger',
        'Flour',
        'Vermicelli',
      ],
      keywords: 'harira, Moroccan soup, Ramadan, lentil soup',
    },
    {
      '@type': 'Recipe',
      name: 'Tanjia Marrakchia',
      description:
        'A slow-cooked meat dish unique to Marrakech, prepared in an amphora-shaped clay urn and cooked overnight in hammam ashes.',
      recipeCuisine: 'Moroccan',
      recipeCategory: 'Main Course',
      recipeIngredient: [
        'Beef or lamb shanks',
        'Preserved lemons',
        'Saffron',
        'Cumin',
        'Smen (aged butter)',
        'Garlic',
        'Olive oil',
      ],
      keywords: 'tanjia, Marrakech, slow-cooked, bachelor dish',
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DISHES DATA (30 dishes)
   ═══════════════════════════════════════════════════════════════ */

const dishes: Dish[] = [
  /* ── TAGINE VARIETIES ── */
  {
    name: 'Tagine Djaj bil Hamid wal Zitoun',
    arabicName: 'طاجين دجاج بالحامض والزيتون',
    description:
      'The most iconic of all Moroccan tagines: chicken slow-cooked with saffron, ginger, and turmeric, finished with cracked green olives and wedges of salt-cured preserved lemon. The interplay of briny olives and tart preserved lemon against the gentle warmth of saffron-infused chicken is the quintessential flavor of Morocco. Every riad, restaurant, and family kitchen has its own version.',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80',
    category: 'Main Course',
    region: 'Nationwide',
    spiceLevel: 'Medium',
    vegetarian: false,
  },
  {
    name: 'Tagine Lham bil Barkouk',
    arabicName: 'طاجين لحم بالبرقوق',
    description:
      'A lavish tagine of lamb shoulder slow-braised with caramelized onions, honey, cinnamon, and plump prunes, crowned with a shower of toasted almonds and sesame seeds. This sweet-and-savory masterpiece exemplifies the Andalusian influence on Moroccan cooking. The lamb becomes fork-tender after hours of gentle simmering, and the prunes dissolve into the sauce, creating an intoxicating sweetness balanced by the warmth of cinnamon and ras el hanout.',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=600&q=80',
    category: 'Main Course',
    region: 'Fes',
    spiceLevel: 'Mild',
    vegetarian: false,
  },
  {
    name: 'Tagine Kefta bil Beid',
    arabicName: 'طاجين كفتة بالبيض',
    description:
      'Seasoned ground beef or lamb meatballs simmered in a spiced tomato-onion sauce until rich and concentrated, then eggs are cracked directly into the bubbling sauce and gently poached. Served straight from the tagine pot with crusty khobz bread for dipping, this is Moroccan comfort food at its finest. The kefta is typically seasoned with cumin, paprika, parsley, and a pinch of cinnamon.',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80',
    category: 'Main Course',
    region: 'Nationwide',
    spiceLevel: 'Medium',
    vegetarian: false,
  },
  {
    name: 'Tagine Hout (Fish Tagine)',
    arabicName: 'طاجين حوت',
    description:
      'A coastal specialty featuring firm white fish (often sea bass, monkfish, or John Dory) nestled on a bed of sliced potatoes, tomatoes, bell peppers, and olives, marinated in chermoula (a vibrant paste of cilantro, parsley, garlic, cumin, paprika, and lemon juice). The tagine is baked until the fish is flaky and infused with the chermoula. Particularly beloved in Essaouira, Tangier, and all Atlantic coastal towns.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    category: 'Main Course',
    region: 'Essaouira',
    spiceLevel: 'Medium',
    vegetarian: false,
  },
  {
    name: 'Tagine Khodra (Vegetable Tagine)',
    arabicName: 'طاجين خضرة',
    description:
      'A vibrant garden of seasonal vegetables -- carrots, zucchini, turnips, potatoes, artichoke hearts, and tomatoes -- slow-cooked with a generous amount of olive oil, saffron, ginger, and a bouquet of fresh herbs. Topped with preserved lemons and olives, this entirely plant-based tagine proves that Moroccan cuisine offers deeply satisfying vegetarian dishes. The key is the slow-cooking process that caramelizes the vegetables into silky perfection.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    category: 'Main Course',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: true,
  },

  /* ── OTHER MAIN COURSES ── */
  {
    name: 'Couscous',
    arabicName: 'كسكس',
    description:
      'The undisputed national dish of Morocco, hand-rolled semolina granules are steamed three times over a fragrant broth of lamb or chicken, seven vegetables (carrots, turnips, zucchini, cabbage, tomatoes, onions, and chickpeas), and a complex spice blend. Traditionally served on Fridays after Dhuhr prayers as a communal family meal eaten from a shared platter. Each region has its own variation: with tfaya (caramelized onions and raisins) in Fes, with dried meat (gueddid) in rural areas, or with buttermilk (lben) in the south.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    category: 'Main Course',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: false,
  },
  {
    name: 'Pastilla (Bastilla)',
    arabicName: 'بسطيلة',
    description:
      'The crown jewel of Moroccan celebratory cuisine. This exquisite pie from Fes layers crispy, paper-thin warqa pastry with shredded pigeon (or chicken in modern versions), a fragrant filling of eggs scrambled with saffron and onions, and toasted almonds sweetened with cinnamon and sugar. The finished pie is dusted with powdered sugar and traced with cinnamon in decorative patterns. The combination of flaky pastry, savory-sweet filling, and aromatic spices makes pastilla one of the world&apos;s great dishes. Seafood pastilla with shrimp and vermicelli is a popular coastal variation.',
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=600&q=80',
    category: 'Main Course',
    region: 'Fes',
    spiceLevel: 'Mild',
    vegetarian: false,
  },
  {
    name: 'Harira',
    arabicName: 'حريرة',
    description:
      'Morocco&apos;s most beloved soup and the traditional dish served at sunset during Ramadan to break the fast (iftar). A hearty, nourishing bowl brimming with lentils, chickpeas, diced lamb or beef, crushed tomatoes, vermicelli noodles, and a bouquet of fresh cilantro and parsley. The signature velvety texture comes from tedouira, a flour-and-water slurry stirred in at the end. Seasoned with ginger, turmeric, cinnamon, pepper, and saffron. Harira is always accompanied by dates, hard-boiled eggs, and chebakia pastries during Ramadan.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    category: 'Main Course',
    region: 'Nationwide',
    spiceLevel: 'Medium',
    vegetarian: false,
  },
  {
    name: 'Tanjia Marrakchia',
    arabicName: 'طنجية مراكشية',
    description:
      'A slow-cooked meat dish unique to Marrakech, so emblematic of the city that it bears its name. Beef or lamb shanks are placed in an amphora-shaped clay urn (the tanjia) with preserved lemons, saffron threads, cumin, smen (aged fermented butter), garlic, and olive oil. The sealed urn is then delivered to the local hammam (bathhouse), where the furnace keeper (fernatchi) buries it in the wood-ash embers to cook overnight. The result is impossibly tender meat that falls off the bone. Traditionally a dish made by men, particularly bachelors and groups of friends for weekend gatherings.',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=600&q=80',
    category: 'Main Course',
    region: 'Marrakech',
    spiceLevel: 'Medium',
    vegetarian: false,
  },
  {
    name: 'Rfissa',
    arabicName: 'رفيسة',
    description:
      'A deeply comforting ceremonial dish of shredded msemen flatbread layered with lentils and tender chicken, all drenched in a rich, aromatic broth infused with fenugreek (helba), ras el hanout, saffron, and pepper. Rfissa holds deep cultural significance: it is traditionally prepared for women who have just given birth, as fenugreek is believed to promote lactation and restore strength. It is also served at celebrations, religious holidays, and important family gatherings.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880049?w=600&q=80',
    category: 'Main Course',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: false,
  },
  {
    name: 'Mechoui',
    arabicName: 'مشوي',
    description:
      'Whole lamb slow-roasted for five to six hours in an underground clay pit oven (tandir) or on a spit over charcoal until the meat is fall-off-the-bone tender with a crispy, golden-brown exterior. Seasoned simply with salt, cumin, and melted butter basted repeatedly during cooking. Mechoui is the centerpiece of Moroccan feasts (diffa), weddings, and the Eid al-Adha celebration. Served by pulling tender meat directly from the carcass with your hands, accompanied only by ground cumin and coarse salt for dipping.',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80',
    category: 'Main Course',
    region: 'Marrakech',
    spiceLevel: 'Mild',
    vegetarian: false,
  },
  {
    name: 'Mrouzia',
    arabicName: 'مروزية',
    description:
      'An ancient Marrakchi tagine of lamb cooked with ras el hanout, honey, raisins, toasted almonds, and a generous amount of smen (aged butter). The dish has its roots in the medieval Berber-Andalusian culinary tradition and is specifically associated with the Eid al-Adha festival. Mrouzia is one of the sweetest tagines, with the honey and raisins creating a rich, almost jam-like glaze on the lamb. The use of ras el hanout is particularly generous here, often calling for the most complex blend a spice merchant offers.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&q=80',
    category: 'Main Course',
    region: 'Marrakech',
    spiceLevel: 'Mild',
    vegetarian: false,
  },
  {
    name: 'Bissara',
    arabicName: 'بيصارة',
    description:
      'A thick, nourishing soup-stew of dried split fava beans (ful) simmered until they dissolve into a creamy puree, seasoned with garlic, cumin, paprika, and finished with a generous drizzle of olive oil. Bissara is northern Morocco&apos;s answer to comfort food, especially popular in Chefchaouen, Tangier, Tetouan, and the Rif mountain region. Served for breakfast or as a warming street food snack for just 3-5 MAD a bowl, it is wholesome, entirely vegan, and deeply satisfying.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    category: 'Main Course',
    region: 'Chefchaouen',
    spiceLevel: 'Mild',
    vegetarian: true,
  },

  /* ── SIDES & SALADS ── */
  {
    name: 'Zaalouk',
    arabicName: 'زعلوك',
    description:
      'A silky, smoky cooked salad of fire-roasted eggplant and ripe tomatoes mashed together with garlic, olive oil, cumin, paprika, and a touch of chili. Served warm or at room temperature as a dip with crusty khobz bread, zaalouk appears on every Moroccan dining table as part of the traditional salad spread. The eggplant is charred over an open flame or baked until collapsed, giving the dish its distinctive smokiness.',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80',
    category: 'Side',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
  {
    name: 'Taktouka',
    arabicName: 'تكتوكة',
    description:
      'A vibrant cooked salad of roasted green peppers and tomatoes, slow-cooked down with garlic, paprika, and cumin, then finished with a generous drizzle of olive oil and a squeeze of lemon. Often served alongside zaalouk as part of the traditional Moroccan salad spread (khlii) that begins every meal. The peppers are first blistered over a flame, peeled, and then combined with tomatoes for a long, gentle simmer.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    category: 'Side',
    region: 'Nationwide',
    spiceLevel: 'Medium',
    vegetarian: true,
  },

  /* ── STREET FOOD ── */
  {
    name: 'Msemen',
    arabicName: 'مسمن',
    description:
      'Square-shaped, multi-layered flatbread that is folded and pan-fried to achieve a flaky, buttery, slightly chewy texture. The dough of flour, semolina, salt, and water is stretched paper-thin by hand, brushed with oil and softened butter, then folded into a square and cooked on a flat griddle (maqla) until golden and crispy. Msemen is enjoyed at breakfast drizzled with honey and melted butter, as a street snack stuffed with spiced ground beef, kefta, or vegetables, or torn alongside tagines to soak up sauce. Women prepare it fresh in the souks all morning.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    category: 'Street Food',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
  {
    name: 'Baghrir',
    arabicName: 'بغرير',
    description:
      'Known as "thousand-hole pancakes" (crepes aux mille trous), these spongy semolina-based crepes are a marvel of Moroccan baking. A thin batter of fine semolina, flour, yeast, baking powder, and warm water is poured onto a hot skillet and cooked on one side only. As the batter heats, hundreds of tiny bubbles form and burst, creating the distinctive honeycomb surface. This porous texture perfectly absorbs the traditional topping: a warm mixture of melted butter and honey (known as raib). A beloved breakfast and tea-time treat, particularly during Ramadan.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    category: 'Street Food',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
  {
    name: 'Babbouche (Snail Soup)',
    arabicName: 'الببوش',
    description:
      'One of Morocco&apos;s most distinctive street foods: small garden snails simmered in a fragrant, peppery broth infused with a dozen herbs and spices including thyme, licorice root, mint, caraway, anise, and black pepper. The broth is believed to have medicinal properties, particularly for digestion and immunity. Sold from steaming cauldrons at street stalls, particularly at Jemaa el-Fnaa in Marrakech, vendors ladle snails and broth into small bowls, and you extract each snail with a toothpick. A small bowl costs just 5-10 MAD.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    category: 'Street Food',
    region: 'Marrakech',
    spiceLevel: 'Spicy',
    vegetarian: false,
  },
  {
    name: 'Grilled Sardines',
    arabicName: 'سردين مشوي',
    description:
      'Morocco is the world&apos;s largest exporter of sardines, and nowhere are they better than grilled fresh at the port. Whole sardines are gutted, marinated briefly in chermoula (a zesty mix of cilantro, garlic, cumin, paprika, and lemon), threaded onto a metal grill rack, and charred over blazing hot coals. Served with just bread, olives, and sliced tomatoes. The best places to eat them are the fishing port stalls of Essaouira, Casablanca&apos;s port market, and the fish stalls of Tangier. Six to eight grilled sardines cost 15-25 MAD.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    category: 'Street Food',
    region: 'Essaouira',
    spiceLevel: 'Medium',
    vegetarian: false,
  },
  {
    name: 'Merguez',
    arabicName: 'مرقاز',
    description:
      'Fiery, thin lamb sausages colored vivid red with harissa and paprika, seasoned with cumin, coriander, fennel seeds, and garlic, then grilled over charcoal until charred and smoky. Merguez is a staple of Moroccan street food stalls, typically served in a crusty baguette (bocadillo) with harissa sauce, diced tomato, and hot chili peppers, or alongside grilled brochettes of lamb and beef. The sausages are made fresh daily by butchers throughout the medinas.',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80',
    category: 'Street Food',
    region: 'Nationwide',
    spiceLevel: 'Spicy',
    vegetarian: false,
  },
  {
    name: 'Maakouda',
    arabicName: 'معقودة',
    description:
      'Golden, crispy potato fritters seasoned with garlic, cumin, parsley, turmeric, and a touch of chili, deep-fried in bubbling oil until perfectly crunchy outside and fluffy within. Maakouda is the king of Moroccan sandwich fillings, tucked into crusty khobz with harissa sauce, olives, and sometimes a fried egg for a meal that costs under 15 MAD. Every medina has vendors frying these to order, and the irresistible aroma draws customers from streets away.',
    image: 'https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?w=600&q=80',
    category: 'Street Food',
    region: 'Nationwide',
    spiceLevel: 'Medium',
    vegetarian: true,
  },
  {
    name: 'Sfenj',
    arabicName: 'سفنج',
    description:
      'Moroccan doughnuts made from a simple yeast dough of flour, salt, water, and a pinch of sugar, shaped into rings by hand with an expert flick of the wrist, and deep-fried in oil until golden and puffed. Light, airy, and slightly chewy with a delicate crust, sfenj are best eaten piping hot from the vendor, dusted with sugar or dipped in warm honey. A classic morning ritual paired with mint tea or coffee, each sfenj costs just 1-2 MAD. The best sfenj stalls attract long queues at dawn.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
    category: 'Street Food',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
  {
    name: 'Briouat',
    arabicName: 'بريوات',
    description:
      'Crispy triangular or cylindrical pastries made from warqa (paper-thin pastry sheets), folded around savory or sweet fillings and deep-fried or baked until shatteringly crisp. Savory briouats are filled with spiced minced lamb and onions, herbed fresh cheese, shrimp with vermicelli, or chicken with olives. Sweet versions contain almond paste scented with orange blossom water and are dipped in warm honey after frying. A fixture at festive gatherings, weddings, and Ramadan iftars.',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64571?w=600&q=80',
    category: 'Street Food',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: false,
  },
  {
    name: "Sheep Head (Ra's)",
    arabicName: 'راس الخروف',
    description:
      'One of Morocco&apos;s most adventurous street foods: a whole sheep&apos;s head, slow-steamed for hours until the meat is meltingly tender, then chopped and served with cumin and salt on a plate or in a sandwich. Vendors display rows of steamed heads at their stalls in the medinas and souks. The most prized parts are the cheeks, tongue, and brain. Most popular in Marrakech&apos;s Jemaa el-Fnaa and Fes&apos;s Rcif square. A plate costs 20-30 MAD. Not for the faint of heart, but deeply loved by locals.',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80',
    category: 'Street Food',
    region: 'Marrakech',
    spiceLevel: 'Mild',
    vegetarian: false,
  },

  /* ── DESSERTS ── */
  {
    name: 'Chebakia',
    arabicName: 'شباكية',
    description:
      'Intricately shaped flower-like pastries that are one of Morocco&apos;s most iconic sweets. The sesame-studded dough is flavored with anise, cinnamon, saffron, and orange blossom water, hand-shaped into a distinctive rosette pattern, deep-fried until golden, then plunged into warm honey and finished with a shower of sesame seeds. Chebakia is the indispensable sweet of Ramadan, always served alongside harira soup to break the fast. Each family guards their shaping technique, and skilled women can produce hundreds in a single day.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    category: 'Dessert',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
  {
    name: 'Sellou (Sfouf)',
    arabicName: 'سلو / سفوف',
    description:
      'A rich, no-bake confection made from toasted flour, ground almonds, toasted sesame seeds, melted butter, honey, and a warm blend of cinnamon, anise, and mastic. The ingredients are mixed into a dense, crumbly mass and shaped into mounds, balls, or pressed into molds. Sellou is a high-energy treat traditionally prepared in large batches during Ramadan, for Eid celebrations, and for new mothers (believed to aid recovery and milk production). The depth of toasting the flour determines the richness of flavor.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&q=80',
    category: 'Dessert',
    region: 'Fes',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
  {
    name: "Kaab el Ghazal (Gazelle Horns)",
    arabicName: 'كعب الغزال',
    description:
      'Perhaps the most elegant of all Moroccan pastries. Crescent-shaped cookies with a thin, smooth pastry shell encasing a filling of ground almonds, sugar, and orange blossom water. The dough must be rolled paper-thin yet hold together perfectly around the fragrant almond paste. Kaab el ghazal are a fixture at every Moroccan celebration, served with mint tea, and are considered a mark of a skilled pastry cook. The best come from Fes and Meknes.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    category: 'Dessert',
    region: 'Fes',
    spiceLevel: 'Mild',
    vegetarian: true,
  },

  /* ── DRINKS ── */
  {
    name: 'Atay (Mint Tea)',
    arabicName: 'أتاي',
    description:
      'Morocco&apos;s national drink and the cornerstone of social life. A sweet infusion of Chinese gunpowder green tea, generous bunches of fresh spearmint (nana), and ample sugar, brewed in a silver-plated teapot and poured from a height into ornate glasses to create a light foam. The tea ceremony is a ritual of hospitality offered to every guest. Refusing tea is considered impolite. Moroccans say the first glass is as gentle as life, the second as strong as love, and the third as bitter as death. In summer, fresh wormwood (shiba) or lemon verbena (louiza) may replace mint.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
    category: 'Drink',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
  {
    name: 'Fresh Orange Juice',
    arabicName: 'عصير البرتقال',
    description:
      'Freshly squeezed orange juice is ubiquitous across Morocco, sold from vibrant juice stalls and handcarts in every city. Moroccan oranges are renowned for their sweetness, particularly the navel oranges from the Berkane and Souss-Massa regions. A glass of fresh juice costs just 5-10 MAD (less than one dollar). The legendary orange juice stalls lining Jemaa el-Fnaa in Marrakech are one of the city&apos;s most photographed scenes.',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80',
    category: 'Drink',
    region: 'Nationwide',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
  {
    name: 'Avocado Smoothie',
    arabicName: 'عصير الأفوكادو',
    description:
      'A thick, creamy blend of ripe avocado, milk, sugar, and sometimes almonds, dates, or a drizzle of argan oil, served in tall glasses at juice bars across Morocco. This unexpectedly popular Moroccan staple is a filling snack or breakfast drink, especially in the south around Agadir and Taroudant where avocados grow abundantly. Some juice bars layer it with banana, strawberry, or almond milk in striped "cocktail" glasses.',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=80',
    category: 'Drink',
    region: 'Agadir',
    spiceLevel: 'Mild',
    vegetarian: true,
  },
];

/* ═══════════════════════════════════════════════════════════════
   FOOD REGIONS DATA (expanded)
   ═══════════════════════════════════════════════════════════════ */

const foodRegions = [
  {
    city: 'Marrakech',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80',
    description:
      'Known as the street food capital of Morocco, Marrakech offers an unparalleled open-air dining experience at Jemaa el-Fnaa square, where hundreds of food stalls come alive each evening. From slow-cooked tanjia (the city&apos;s signature dish, cooked overnight in hammam ashes) to snail soup, steamed sheep heads, merguez sandwiches, and skewered brochettes, the Red City is a food lover&apos;s paradise. The Mellah spice market and the Rahba Kedima are essential stops for food explorers.',
    specialties: ['Tanjia Marrakchia', 'Mechoui', 'Mrouzia', 'Snail Soup (Babbouche)', 'Jemaa el-Fnaa Street Food'],
  },
  {
    city: 'Fes',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80',
    description:
      'The spiritual capital of Moroccan gastronomy and home to the most refined, complex dishes in the kingdom. Centuries-old palace cuisine traditions survive here, with recipes guarded by dadas (traditional home cooks) and passed down through generations. Pastilla originated in Fes and remains at its finest here. The city is also renowned for its sellou, kaab el ghazal pastries, and the elaborate diffa (feast) tradition. The spice and olive souks of the Fes el-Bali medina are among Morocco&apos;s best.',
    specialties: ['Pastilla', 'Rfissa', 'Sellou', 'Kaab el Ghazal', 'Palace Cuisine', 'Tagine Lham bil Barkouk'],
  },
  {
    city: 'Casablanca',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    description:
      'Morocco&apos;s cosmopolitan economic capital blends traditional Moroccan flavors with French bistro culture, Spanish tapas influences, and modern international fusion. The Atlantic coast location means exceptional seafood, from grilled sardines at the Central Market to sophisticated fish restaurants along the Corniche. The Habous Quarter is famous for its traditional pastry shops (patisseries) selling cornes de gazelle and msemen. Casablanca&apos;s restaurant scene ranges from hole-in-the-wall rotisseries to Michelin-level fine dining.',
    specialties: ['Fresh Seafood', 'French-Moroccan Fusion', 'Grilled Sardines', 'Habous Pastries', 'Modern Bistros'],
  },
  {
    city: 'Essaouira',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    description:
      'This charming Atlantic port town is Morocco&apos;s seafood capital, renowned for its ocean-to-table dining experience. The fishing port (Port de Peche) sells the freshest catch daily, grilled to order at open-air stalls -- you choose your fish, negotiate the price, and it is charcoal-grilled in minutes. Essaouira is also the center of Morocco&apos;s argan oil production, and culinary argan oil adds a distinctive nutty finish to salads, couscous, and amlou (an argan-almond-honey dip). Fish tagine with chermoula is the local specialty.',
    specialties: ['Grilled Fish & Seafood', 'Sardine Tagine', 'Fish Chermoula', 'Argan Oil Cuisine', 'Amlou'],
  },
  {
    city: 'Meknes',
    image: 'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=600&q=80',
    description:
      'Surrounded by Morocco&apos;s most fertile agricultural land, Meknes is the heart of the country&apos;s olive oil production and its only significant wine region. The local cuisine emphasizes fresh produce, artisanal olive oil, and rich, earthy flavors that reflect the bounty of the Saiss plain. Meknes is particularly known for its khliaa (dried preserved meat cured in spiced fat), its excellent olives, and its regional bread varieties. The Chateau Roslane and Les Celliers de Meknes wineries produce Morocco&apos;s best wines.',
    specialties: ['Olive Oil Dishes', 'Moroccan Wine', 'Khliaa (Preserved Meat)', 'Fresh Produce', 'Regional Breads'],
  },
  {
    city: 'Tangier',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    description:
      'Sitting at the crossroads of Africa and Europe, Tangier&apos;s cuisine reflects its international history with Spanish, Portuguese, and French influences layered over a Moroccan base. The city excels at seafood, particularly fried fish (hout meqli), grilled sardines, and prawn tagine. The Grand Socco and Petit Socco squares are the heart of the food scene. Tangier&apos;s bocadillo (stuffed baguette sandwich) culture is among Morocco&apos;s best, and the karantika (chickpea flour cake, inherited from the Spanish) is a unique local specialty.',
    specialties: ['Karantika', 'Fried Fish', 'Bocadillo Sandwiches', 'Seafood Tagine', 'Spanish-Moroccan Fusion'],
  },
  {
    city: 'Chefchaouen',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80',
    description:
      'The Blue City&apos;s cuisine reflects its Rif mountain setting with hearty, rustic dishes designed for the cooler highland climate. Bissara (thick fava bean soup) is the signature dish, served for breakfast from street vendors for just 3-5 MAD. The town is also known for fresh local goat cheese (jben), made from milk of goats that graze on the surrounding hillsides, and for fried pastries. The Ras el-Maa waterfall area has riverside restaurants serving trout tagine. Chefchaouen&apos;s local honey and cannabis-infused cuisine (mahjoun) are distinctive local traditions.',
    specialties: ['Bissara', 'Fresh Goat Cheese (Jben)', 'Rif Mountain Tagines', 'Local Honey', 'Trout Dishes'],
  },
  {
    city: 'Agadir & Souss Region',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    description:
      'The Souss-Massa region around Agadir is the breadbasket of Morocco, producing the country&apos;s finest argan oil, saffron (from nearby Taliouine), almonds, and citrus fruits. The cuisine is distinctly Amazigh (Berber), featuring tafarnout (Berber flatbread baked in hot sand), amlou (a delicious dip of argan oil, almonds, and honey), and tagines with local almonds and saffron. The fish market in Agadir offers some of the freshest and cheapest seafood in the country.',
    specialties: ['Argan Oil & Amlou', 'Taliouine Saffron Dishes', 'Amazigh Cuisine', 'Fresh Seafood', 'Tafarnout Bread'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SPICE GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const spices = [
  {
    name: 'Ras el Hanout',
    arabicName: 'رأس الحانوت',
    description:
      'Meaning "head of the shop," this is the crown jewel of Moroccan spice blends. Each spice merchant has a secret recipe, combining up to 30 or more spices into a complex, aromatic mix.',
    uses: 'Tagines, couscous, rice dishes, marinades',
  },
  {
    name: 'Cumin',
    arabicName: 'كمون',
    description:
      'The most ubiquitous spice in Moroccan cooking, cumin adds an earthy, warm depth to virtually every savory dish. It is always present on Moroccan dining tables alongside salt.',
    uses: 'Grilled meats, soups, salads, kefta, mechoui',
  },
  {
    name: 'Saffron',
    arabicName: 'زعفران',
    description:
      'Moroccan saffron from the Taliouine region is among the world&apos;s finest. These precious red threads impart a golden color, floral aroma, and subtle bittersweet flavor to dishes.',
    uses: 'Tagines, rice, pastilla, tea, desserts',
  },
  {
    name: 'Turmeric',
    arabicName: 'كركم',
    description:
      'Prized for its vibrant golden color as much as its mild, slightly bitter flavor, turmeric is used across Moroccan cooking to add warmth and visual appeal to dishes.',
    uses: 'Soups, tagines, marinades, rice dishes',
  },
  {
    name: 'Paprika',
    arabicName: 'فلفل أحمر',
    description:
      'Both sweet and smoked varieties are integral to Moroccan cuisine, lending a deep red hue and gentle warmth to cooked salads, sauces, and grilled dishes.',
    uses: 'Zaalouk, taktouka, chermoula, grilled meats',
  },
  {
    name: 'Cinnamon',
    arabicName: 'قرفة',
    description:
      'Used in both savory and sweet dishes, cinnamon is a defining flavor of Moroccan cooking. It bridges the sweet-savory divide that makes the cuisine so distinctive.',
    uses: 'Pastilla, tagines, desserts, mint tea, smoothies',
  },
  {
    name: 'Ginger',
    arabicName: 'زنجبيل',
    description:
      'Both fresh and ground ginger are essential in Moroccan kitchens, adding brightness and gentle heat to soups, tagines, and beverages.',
    uses: 'Harira, tagines, marinades, herbal teas',
  },
  {
    name: 'Coriander',
    arabicName: 'قزبر',
    description:
      'Both the seeds and fresh leaves (cilantro) are used extensively. Ground coriander adds citrusy warmth to spice blends, while fresh cilantro garnishes nearly every dish.',
    uses: 'Chermoula, tagines, soups, salads, garnishes',
  },
  {
    name: 'Black Pepper',
    arabicName: 'إبزار',
    description:
      'Freshly ground black pepper is a foundational spice in Moroccan cooking, contributing sharp heat and aromatic pungency to marinades, braises, and grilled meats.',
    uses: 'Marinades, grilled meats, soups, ras el hanout blends',
  },
  {
    name: 'Harissa',
    arabicName: 'هريسة',
    description:
      'A fiery chili paste made from roasted red peppers, garlic, caraway, coriander, and olive oil. While originating from Tunisia, harissa is widely used in Morocco to add bold heat to dishes.',
    uses: 'Sandwiches, grilled meats, tagines, dipping sauce',
  },
];

/* ═══════════════════════════════════════════════════════════════
   STREET FOOD DATA (expanded)
   ═══════════════════════════════════════════════════════════════ */

const streetFoods = [
  { name: 'Sfenj (Doughnuts)', price: '1-2 MAD each' },
  { name: 'Maakouda Sandwich', price: '10-15 MAD' },
  { name: 'Grilled Corn', price: '5-10 MAD' },
  { name: 'Snail Soup (Babbouche)', price: '5-10 MAD' },
  { name: 'Msemen with Honey', price: '3-5 MAD' },
  { name: 'Fresh Orange Juice', price: '5-10 MAD' },
  { name: 'Brochettes (Kebabs)', price: '15-25 MAD' },
  { name: 'Bocadillo Sandwich', price: '15-25 MAD' },
  { name: 'Grilled Sardines (6-8)', price: '15-25 MAD' },
  { name: 'Merguez Sandwich', price: '15-20 MAD' },
  { name: 'Sheep Head Plate', price: '20-30 MAD' },
  { name: 'Bissara Bowl', price: '3-5 MAD' },
  { name: 'Baghrir (3 pieces)', price: '5-10 MAD' },
  { name: 'Briouat (3 pieces)', price: '10-15 MAD' },
  { name: 'Avocado Smoothie', price: '15-25 MAD' },
  { name: 'Mixed Juice Cocktail', price: '15-30 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DINING ETIQUETTE DATA
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    title: 'Eat with Your Right Hand',
    description:
      'In traditional Moroccan dining, food is eaten with the right hand, using bread as a utensil to scoop tagines and salads. The left hand is considered unclean. If eating from a communal dish, eat only from the section directly in front of you.',
  },
  {
    title: 'The Tea Ceremony',
    description:
      'Accepting mint tea is a sign of friendship and respect. Tea is traditionally poured from a height to aerate it and create a light foam. Refusing tea can be considered impolite. You will typically be offered three glasses: the first is as gentle as life, the second as strong as love, the third as bitter as death.',
  },
  {
    title: 'Bread Etiquette',
    description:
      'Bread (khobz) is sacred in Moroccan culture. Never waste it, place it upside down, or throw it away. If you see bread on the ground, it is customary to pick it up and place it aside. Bread serves as both utensil and accompaniment to every meal.',
  },
  {
    title: 'Ramadan Considerations',
    description:
      'During the holy month of Ramadan, most Moroccans fast from dawn to sunset. As a visitor, avoid eating, drinking, or smoking in public during daylight hours out of respect. Tourist restaurants remain open behind curtains. The iftar (fast-breaking) meal at sunset is a wonderful cultural experience.',
  },
  {
    title: 'Tipping Customs',
    description:
      'At restaurants, a tip of 10-15% is customary if service is not included in the bill. At street food stalls, tipping is not expected but rounding up is appreciated. At upscale restaurants, check if service is included ("service compris") before adding an additional tip.',
  },
  {
    title: 'The Bismillah',
    description:
      'Meals traditionally begin with "Bismillah" (in the name of God) and end with "Alhamdulillah" (praise be to God). As a guest, you do not need to say this yourself, but recognizing the phrase shows cultural awareness. Wait for the host to invite you to begin eating.',
  },
  {
    title: 'Communal Dining',
    description:
      'Many Moroccan meals are served on large communal platters. Eat from the portion closest to you and do not reach across to the other side. The host may place choice pieces of meat in front of you as a sign of honor and generosity.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FOOD MARKETS DATA
   ═══════════════════════════════════════════════════════════════ */

const foodMarkets = [
  {
    name: 'Jemaa el-Fnaa Food Stalls',
    city: 'Marrakech',
    description:
      'The world&apos;s largest open-air food court. Every evening, over 100 food stalls set up in the main square, each with its own specialty -- from grilled meats and snail soup to fried fish, harira, and fresh juices. The spectacle of smoke, flames, and shouting vendors is unforgettable.',
    bestFor: 'Street food experience, grilled meats, snail soup, atmosphere',
    tip: 'Go to stalls where locals eat. Stall numbers 1, 14, and 31 are consistently popular with Marrakchis.',
  },
  {
    name: 'Rahba Kedima (Spice Square)',
    city: 'Marrakech',
    description:
      'The historic spice square in the heart of the medina, where apothecaries and spice merchants have traded for centuries. Find ras el hanout, saffron, dried herbs, argan oil, black soap, and traditional remedies. Bargaining is expected.',
    bestFor: 'Spices, dried herbs, argan oil, ras el hanout',
    tip: 'Buy saffron only from reputable merchants. Real saffron costs 15-30 MAD per gram. If it is cheap, it is likely safflower.',
  },
  {
    name: 'Mellah Spice Market',
    city: 'Marrakech',
    description:
      'Located in the old Jewish quarter, this market is where many cooking class instructors bring their students to buy ingredients. Less touristic than Rahba Kedima, with better prices and a more authentic shopping experience.',
    bestFor: 'Cooking class supplies, olives, preserved lemons, spices',
    tip: 'Visit with a local guide or cooking class instructor for the best prices and most authentic experience.',
  },
  {
    name: 'Souk el-Attarine',
    city: 'Fes',
    description:
      'Fes&apos;s legendary perfume and spice souk, one of the oldest in Morocco. The narrow lanes are lined with sacks of colorful spices, dried flowers, medicinal herbs, and bottles of essential oils. The quality of spices here is considered the best in Morocco.',
    bestFor: 'Premium spices, rose water, orange blossom water, essential oils',
    tip: 'The attarine (perfumers) can blend custom ras el hanout to your taste preferences. Ask for a tasting.',
  },
  {
    name: 'Essaouira Fish Port',
    city: 'Essaouira',
    description:
      'Every morning, fishermen bring their catch to the port auction. Afterward, you can buy fish directly and have it grilled at one of the open-air stalls along the port wall. Choose from sardines, sea bream, prawns, lobster, calamari, and whatever else the boats brought in.',
    bestFor: 'Fresh seafood, grilled fish, port atmosphere',
    tip: 'Arrive before 10 AM for the best selection. Negotiate the price before they start grilling. A full grilled fish plate should cost 40-70 MAD.',
  },
  {
    name: 'Central Market (Marche Central)',
    city: 'Casablanca',
    description:
      'A beautiful Art Deco-era covered market in the heart of Casablanca, offering fresh fish, meat, fruits, vegetables, olives, spices, and flowers. Several small restaurants inside serve the freshest seafood in the city, prepared to order.',
    bestFor: 'Fresh produce, seafood restaurants, artisanal products',
    tip: 'The seafood restaurants inside the market offer better value than most restaurants in the city. Try the fried calamari.',
  },
  {
    name: 'Grand Socco & Mendoubia Market',
    city: 'Tangier',
    description:
      'Tangier&apos;s main market square, where Riffian women in traditional striped fouta cloths sell fresh produce, herbs, and homemade cheese. The surrounding streets are packed with bakeries, juice stalls, and bocadillo sandwich vendors.',
    bestFor: 'Fresh produce, local cheese, bocadillo sandwiches, people-watching',
    tip: 'The Riffian women selling produce grow it themselves in nearby mountain villages. Their herbs and vegetables are organic by default.',
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
      'Take a cooking class with market tour at La Maison Arabe or Souk Cuisine',
      'Spend an evening at the Jemaa el-Fnaa food stalls for grilled meats, snail soup, and sheep head',
      'Explore the Mellah spice market and Rahba Kedima for spices and argan oil',
      'Eat tanjia at a local restaurant (try Chez Lamine near Jemaa el-Fnaa)',
      'Have breakfast of msemen, baghrir, and sfenj with mint tea at a neighborhood cafe',
      'Splurge on a refined Moroccan dinner at Al Fassia or Le Jardin',
    ],
  },
  {
    day: 'Days 4-6',
    city: 'Fes',
    highlights: [
      'Take a Fassi palace cooking class at Palais Amani or Cafe Clock',
      'Explore Souk el-Attarine for premium spices and buy custom ras el hanout',
      'Eat traditional pastilla at Dar Roumana or Restaurant Fes el Bali',
      'Try rfissa and mrouzia at a local family restaurant in the medina',
      'Sample the finest kaab el ghazal and sellou pastries at Patisserie Bennis',
      'Enjoy a rooftop dinner overlooking the medina with harira and Fassi salads',
    ],
  },
  {
    day: 'Day 7',
    city: 'Meknes',
    highlights: [
      'Visit the olive souk and taste Morocco&apos;s best olive oil',
      'Lunch on khliaa (preserved meat) dishes at a local restaurant',
      'Optional: Wine tasting at Chateau Roslane or Les Celliers de Meknes',
      'Try the local pastries at the Habous-style shops near Place el-Hedim',
    ],
  },
  {
    day: 'Days 8-9',
    city: 'Chefchaouen',
    highlights: [
      'Start mornings with a 5 MAD bowl of bissara from a street vendor',
      'Buy fresh goat cheese (jben) from Riffian women in the medina',
      'Eat trout tagine at one of the riverside restaurants near Ras el-Maa',
      'Take a cooking class at Lina Ryad focusing on Rif mountain cuisine',
    ],
  },
  {
    day: 'Days 10-12',
    city: 'Essaouira',
    highlights: [
      'Buy fresh fish at the port and have it grilled to order at the stalls',
      'Take a seafood cooking class at L&apos;Atelier de Madada',
      'Try amlou (argan-almond-honey dip) and culinary argan oil at a local cooperative',
      'Eat fish tagine with chermoula at a medina restaurant',
      'Sample ocean-to-table dining at a Corniche seafood restaurant',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   VEGETARIAN GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const vegetarianDishes = [
  {
    name: 'Tagine Khodra (Vegetable Tagine)',
    description: 'Seasonal vegetables slow-cooked with saffron, ginger, olive oil, preserved lemons, and olives. Available everywhere.',
  },
  {
    name: 'Zaalouk',
    description: 'Smoky cooked eggplant and tomato salad. Entirely plant-based and found at every restaurant.',
  },
  {
    name: 'Taktouka',
    description: 'Roasted pepper and tomato cooked salad. Vegan and gluten-free.',
  },
  {
    name: 'Bissara',
    description: 'Thick fava bean soup from northern Morocco. Naturally vegan and filling. Just 3-5 MAD.',
  },
  {
    name: 'Couscous with Seven Vegetables',
    description: 'Ask for "couscous bil khodra" (without meat). The vegetable broth version is traditional.',
  },
  {
    name: 'Baghrir with Honey',
    description: 'Thousand-hole pancakes drizzled with butter and honey. Vegetarian breakfast staple.',
  },
  {
    name: 'Msemen with Cheese & Herbs',
    description: 'Layered flatbread stuffed with herbed fresh cheese. Popular vegetarian street food.',
  },
  {
    name: 'Moroccan Salad Spread',
    description: 'Order "des salades" to get 5-8 small dishes of cooked and raw vegetable preparations.',
  },
  {
    name: 'Lentil Soup (Adess)',
    description: 'Simple, comforting lentil soup seasoned with cumin and tomato. Available at most eateries.',
  },
  {
    name: 'Amlou',
    description: 'A rich dip of ground almonds, argan oil, and honey. Vegan if made without butter. Spread on bread.',
  },
  {
    name: 'Harcha',
    description: 'Semolina griddle bread, golden and crispy outside, soft inside. Eaten with cheese, jam, or honey.',
  },
  {
    name: 'Briouats with Cheese',
    description: 'Crispy pastry triangles filled with herbed goat cheese. Ask for "briouats bil jben."',
  },
];

const vegetarianTips = [
  'Learn the phrase "bla lham" (without meat) and "ana nabati" (I am vegetarian) in Darija.',
  'Moroccan soups (harira, bissara) often contain meat stock. Ask "wash fiha lham?" (does it contain meat?).',
  'The traditional Moroccan salad spread (khlii) at the start of meals is almost always vegetarian or vegan.',
  'Tagines can always be made vegetarian. Ask for "tagine dial khodra" (vegetable tagine).',
  'Riads and cooking classes are often the best places to request fully vegetarian or vegan meals prepared specially.',
  'Eggs are widely available and feature in dishes like tagine kefta bil beid (minus the kefta) and shakshuka.',
  'Vegans should note that Moroccan cooking uses butter and smen (aged butter) liberally. Request olive oil ("zit zaytoun") instead.',
  'The best cities for vegetarian options are Marrakech and Essaouira, which have the most tourist-adapted menus.',
];

/* ═══════════════════════════════════════════════════════════════
   FOOD PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  {
    title: 'The Golden Hour at Jemaa el-Fnaa',
    description:
      'Arrive at Jemaa el-Fnaa around 5:30-6:00 PM as the food stalls are setting up. The combination of billowing charcoal smoke, warm lantern light, and the last rays of sunset creates the most atmospheric food photography conditions in the world.',
  },
  {
    title: 'Shoot the Tagine Reveal',
    description:
      'Ask your server to pause before lifting the tagine lid. Capture the moment the conical lid is removed and steam billows out -- this is the most photogenic moment in Moroccan dining. Shoot from a low angle to catch the steam against natural light.',
  },
  {
    title: 'Spice Market Colors',
    description:
      'The conical mounds of powdered spices in the souks (cumin, paprika, turmeric, saffron) are irresistibly photogenic. Shoot from directly above for a flat-lay of color, or at eye level for dramatic cones receding into the narrow souk lanes. Always ask permission before photographing merchants.',
  },
  {
    title: 'Tea Pouring Action Shots',
    description:
      'The high-pour mint tea technique is uniquely photogenic. Use a fast shutter speed (1/500 or faster) to freeze the stream of tea, or a slower speed to capture the flowing motion. Side-angle shots with backlight through the tea stream produce the most striking images.',
  },
  {
    title: 'Overhead Flat-Lays of Moroccan Spreads',
    description:
      'Moroccan meals are inherently photogenic because of the communal serving style. A table spread with tagine, bread, salads, olives, and tea from directly overhead makes a stunning flat-lay. Position dishes in a natural cluster, not a rigid grid.',
  },
  {
    title: 'Natural Light is Everything',
    description:
      'Moroccan riads have spectacular natural light from their open courtyards. When dining in a riad, request a table near the courtyard for the best natural light. Avoid using flash in restaurants, which flattens the warm, textured look of Moroccan food.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   GLOSSARY DATA
   ═══════════════════════════════════════════════════════════════ */

const glossary = [
  { term: 'Tagine (Tajine)', arabic: 'طاجين', definition: 'Both the conical clay cooking pot and the slow-cooked stew prepared in it. The lid traps steam, basting the food and creating tender, flavorful dishes.' },
  { term: 'Khobz', arabic: 'خبز', definition: 'Round, dense Moroccan bread baked in communal wood-fired ovens (ferran). Served with every meal and used as a utensil for scooping food.' },
  { term: 'Smen', arabic: 'سمن', definition: 'Aged, fermented butter with a strong, pungent flavor similar to Indian ghee but more intense. Prized in traditional cooking, sometimes aged for years.' },
  { term: 'Chermoula', arabic: 'شرمولة', definition: 'A vibrant marinade and sauce of cilantro, parsley, garlic, cumin, paprika, lemon juice, and olive oil. Used primarily for fish and seafood.' },
  { term: 'Ras el Hanout', arabic: 'رأس الحانوت', definition: 'Literally "head of the shop." A complex spice blend of 12-30 spices, each merchant&apos;s recipe is a closely guarded secret.' },
  { term: 'Warqa (Ouarka)', arabic: 'ورقة', definition: 'Paper-thin pastry sheets made by dabbing a ball of dough on a hot griddle. Used for pastilla and briouats. Similar to but thinner than phyllo.' },
  { term: 'Dada', arabic: 'دادة', definition: 'A traditional Moroccan home cook, usually a woman who has spent decades perfecting family recipes. Dadas are the guardians of Moroccan culinary heritage.' },
  { term: 'Diffa', arabic: 'ديفة', definition: 'An elaborate Moroccan feast of many courses, served at celebrations, weddings, and to honor special guests. Can include 7-12 courses.' },
  { term: 'Lben', arabic: 'لبن', definition: 'Fermented buttermilk, tangy and refreshing. Traditionally drunk with couscous and used in some sauces and breads.' },
  { term: 'Harissa', arabic: 'هريسة', definition: 'A hot chili paste of roasted red peppers, garlic, and spices. Used as a condiment, spread in sandwiches, and stirred into soups.' },
  { term: 'Amlou', arabic: 'أملو', definition: 'A rich Amazigh dip of ground almonds or peanuts, argan oil, and honey. Similar in concept to nut butter but distinctly Moroccan.' },
  { term: 'Fernatchi', arabic: 'فرناتشي', definition: 'The hammam (bathhouse) furnace keeper who tends the wood fires. Traditionally also cooks tanjia pots buried in the ashes.' },
  { term: 'Msemen', arabic: 'مسمن', definition: 'Square, layered, pan-fried flatbread. Flaky and buttery, enjoyed at breakfast or as a snack. Also spelled rghaif in some regions.' },
  { term: 'Baghrir', arabic: 'بغرير', definition: 'Semolina pancakes with a distinctive honeycomb of tiny holes on the surface. Also called "thousand-hole crepes."' },
  { term: 'Atay', arabic: 'أتاي', definition: 'Moroccan mint tea. Gunpowder green tea brewed with fresh spearmint and sugar. The national drink and symbol of hospitality.' },
  { term: 'Maqla', arabic: 'مقلة', definition: 'A flat, round griddle used for cooking msemen, baghrir, and other flatbreads. An essential piece of Moroccan kitchen equipment.' },
  { term: 'Couscoussier', arabic: 'كسكاس', definition: 'A two-part steaming pot: the bottom holds broth or stew, the top is a perforated steamer basket for couscous grains.' },
  { term: 'Gueddid', arabic: 'قديد', definition: 'Sun-dried, salted strips of meat (usually beef or lamb) prepared after Eid al-Adha. Morocco&apos;s answer to jerky, used in couscous and tagines.' },
  { term: 'Khliaa', arabic: 'خليع', definition: 'Preserved meat cooked and stored in its own fat with spices. A specialty of Meknes, similar to confit. Used in eggs and bread dishes.' },
  { term: 'Tfaya', arabic: 'تفاية', definition: 'A sweet topping of caramelized onions and raisins cooked with cinnamon and honey. Classically served over couscous in Fassi cuisine.' },
  { term: 'Mahlaba', arabic: 'محلبة', definition: 'A Moroccan milk bar serving rice pudding, fresh juices, smoothies, and milkshakes. Popular evening hangout, especially during Ramadan.' },
  { term: 'Ferran', arabic: 'فران', definition: 'A communal wood-fired bread oven found in every Moroccan neighborhood. Families bring their bread dough to be baked for a small fee.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function FoodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1600&q=80"
            alt="Traditional Moroccan tagine with spices and vegetables"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Food &amp; Cuisine</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              The Definitive Culinary Guide
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Food &amp; Cuisine
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the slow-simmered tagines of Marrakech to the delicate pastilla of Fes, from fiery
              snail soup at Jemaa el-Fnaa to ocean-fresh grilled sardines in Essaouira. The complete
              guide to one of the world&apos;s great culinary traditions.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Moroccan cuisine is widely regarded as one of the most diverse and flavorful in the world, a vibrant
              testament to centuries of cultural exchange at the crossroads of Africa, Europe, and the Middle East.
              Rooted in ancient Amazigh (Berber) traditions and enriched by Arab, Andalusian, Ottoman, and French
              influences, Moroccan cooking transforms humble ingredients into extraordinary dishes through patient
              technique, bold spices, and a deep respect for communal dining.
            </p>
            <p>
              The cuisine is defined by its masterful balance of sweet and savory -- lamb braised with prunes and
              honey, chicken paired with preserved lemons and olives, pastry dusted with cinnamon and sugar over
              savory fillings. This interplay, inherited from the medieval Andalusian-Moorish culinary tradition,
              distinguishes Moroccan cooking from all other North African cuisines. The spice palette is among the
              most complex in the world, anchored by ras el hanout (a blend of up to 30 spices), saffron from
              Taliouine, cumin, ginger, cinnamon, and paprika.
            </p>
            <p>
              Eating in Morocco is far more than sustenance -- it is an act of hospitality, community, and
              celebration. Meals are shared from communal platters, mint tea is poured with ceremony and grace, and
              the simple act of breaking bread together forms the foundation of Moroccan social life. Whether you
              are savoring a 10-dirham street food sandwich or a twelve-course diffa (feast) in a palatial riad,
              Moroccan food will leave an indelible impression on your palate and your heart.
            </p>
            <p>
              This guide covers over 30 essential dishes, regional specialties from eight cities, a complete street
              food primer, spice market navigation, vegetarian and vegan strategies, food photography tips, and a
              full glossary of Moroccan culinary terms. It is your companion for eating your way through Morocco.
            </p>
          </div>
        </div>
      </section>

      {/* ── Must-Try Dishes (Client Component) ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Must-Try Moroccan Dishes
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From hearty tagines and slow-cooked tanjia to delicate pastries and refreshing drinks -- these are the
              30 essential dishes every visitor to Morocco should experience, with detailed descriptions, regional
              origins, and spice levels.
            </p>
          </div>
          <FoodClient dishes={dishes} />
        </div>
      </section>

      {/* ── Food Regions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Regional Culinary Map
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each Moroccan city has its own culinary identity shaped by geography, history, and local traditions.
              From the palace cuisine of Fes to the Amazigh cooking of the Souss, here are eight food destinations.
            </p>
          </div>
          <div className="space-y-8">
            {foodRegions.map((region, index) => (
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
                    {region.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      >
                        <Star className="w-3 h-3" />
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Street Food Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HandPlatter className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Street Food Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s street food scene is legendary -- affordable, delicious, and an essential part of daily
              life. Here is everything you need to eat like a local on the streets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Where to Find */}
            <div className="card-moroccan p-6">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Where to Find the Best</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">&bull;</span>
                  <span>Jemaa el-Fnaa, Marrakech -- the world&apos;s largest open-air food court</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">&bull;</span>
                  <span>Talaa Kebira &amp; Sghira streets in Fes medina</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">&bull;</span>
                  <span>Central Market area in Casablanca</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">&bull;</span>
                  <span>Essaouira port fish stalls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">&bull;</span>
                  <span>Habous Quarter in Casablanca for pastries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">&bull;</span>
                  <span>Grand Socco &amp; Petit Socco in Tangier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">&bull;</span>
                  <span>Rcif square in Fes for sheep head and merguez</span>
                </li>
              </ul>
            </div>

            {/* Food Safety */}
            <div className="card-moroccan p-6">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Food Safety Tips</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-1">&bull;</span>
                  <span>Eat where locals eat -- high turnover means fresh food</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-1">&bull;</span>
                  <span>Choose stalls that cook food to order in front of you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-1">&bull;</span>
                  <span>Stick to bottled water; avoid ice from unknown sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-1">&bull;</span>
                  <span>Peel fruits yourself or eat only washed/cooked produce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-1">&bull;</span>
                  <span>Carry hand sanitizer or wet wipes for before and after eating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-1">&bull;</span>
                  <span>Avoid salads at street stalls; cooked food and fried items are safest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-1">&bull;</span>
                  <span>Build up gradually if you have a sensitive stomach -- start with cooked dishes</span>
                </li>
              </ul>
            </div>

            {/* Prices */}
            <div className="card-moroccan p-6">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <Coins className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Street Food Prices</h3>
              <ul className="space-y-2 text-sm">
                {streetFoods.map((item) => (
                  <li key={item.name} className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary)]">{item.name}</span>
                    <span className="font-semibold text-[var(--text-primary)] bg-[var(--surface-muted)] px-2 py-0.5 rounded text-xs">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Food Markets & Souks Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBasket className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food Markets &amp; Souks Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The best food markets, spice souks, and fresh produce markets across Morocco. These are where chefs,
              home cooks, and food lovers source the ingredients that define the cuisine.
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

      {/* ── Foodie's Morocco Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarDays className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Foodie&apos;s Morocco Itinerary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A 12-day food-focused itinerary hitting the culinary highlights of five cities. From cooking classes
              and market tours to street food crawls and fine dining, this is the ultimate gastronomic road trip.
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

      {/* ── Vegetarian & Vegan Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-green-500/10 mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Vegetarian &amp; Vegan Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              While Moroccan cuisine centers on meat, there are more plant-based options than you might expect.
              With the right knowledge and a few key phrases, vegetarians and vegans can eat very well in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dishes Column */}
            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Wheat className="w-5 h-5 text-green-600" />
                12 Plant-Based Dishes to Try
              </h3>
              <div className="space-y-4">
                {vegetarianDishes.map((dish) => (
                  <div key={dish.name} className="card-moroccan p-4">
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-1">{dish.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dish.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Column */}
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

      {/* ── Dining Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Dining Etiquette
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding Moroccan dining customs will enrich your culinary experience and show respect for local traditions.
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

      {/* ── Spice Guide ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essential Moroccan Spices
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The soul of Moroccan cooking lies in its spices. These ten essential flavors define the cuisine
              and are worth bringing home from the souks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {spices.map((spice) => (
              <div key={spice.name} className="card-moroccan p-5">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {spice.name}
                </h3>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">{spice.arabicName}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {spice.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Common uses:</span>{' '}
                    {spice.uses}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food Photography Tips ── */}
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
              Moroccan food is among the most photogenic in the world. Here are expert tips for capturing the
              colors, textures, and atmosphere of Moroccan cuisine.
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

      {/* ── Glossary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Glossary of Moroccan Food Terms
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A reference guide to the essential Moroccan culinary vocabulary. Understanding these terms will help
              you navigate menus, markets, and cooking classes with confidence.
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Taste Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore cooking classes to bring these flavors home, browse our restaurant recommendations,
            or plan a food-focused itinerary across the kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cooking-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <CookingPot className="w-4 h-4" /> Cooking Classes
            </Link>
            <Link
              href="/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <UtensilsCrossed className="w-4 h-4" /> Find Restaurants
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

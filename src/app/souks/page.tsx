import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Store,
  MapPin,
  Coins,
  ShieldCheck,
  Sparkles,
  Package,
  HandCoins,
  Gem,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Truck,
  Eye,
  Layers,
  Award,
  Clock,
  Star,
  Camera,
  Compass,
  ShoppingBag,
  Scale,
  MessageCircle,
  Navigation,
  Sun,
  Moon,
  Shield,
  Users,
  Heart,
  BookOpen,
  Footprints,
  Flame,
  Palette,
  Scissors,
  Coffee,
  Ban,
  Info,
  ThumbsUp,
  CircleDollarSign,
  Lamp,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Souks & Markets Guide | Haggling Tips, Best Souks by City & What to Buy',
  description:
    'Complete guide to Moroccan souks and markets. Discover the best souks in Marrakech, Fes, Chefchaouen, Essaouira, and Tangier. What to buy with real price ranges in MAD, step-by-step haggling strategies, common scams to avoid, souk etiquette, navigation tips, and how to ship purchases home. Practical and honest advice for first-time visitors.',
  keywords: [
    'Morocco souks',
    'Moroccan markets',
    'Marrakech souks',
    'Fes medina shopping',
    'haggling Morocco',
    'bargaining tips Morocco',
    'Jemaa el-Fnaa',
    'Souk Semmarine',
    'Souk Attarine Fes',
    'Chefchaouen shopping',
    'Essaouira market',
    'Tangier Grand Socco',
    'what to buy Morocco',
    'Moroccan leather goods',
    'Berber rugs price',
    'Moroccan spices',
    'argan oil Morocco',
    'Moroccan lanterns',
    'souk scams Morocco',
    'souk etiquette',
    'shipping from Morocco',
    'Chouara Tannery Fes',
    'Moroccan ceramics price',
    'babouche slippers Morocco',
  ],
  openGraph: {
    title: 'Morocco Souks & Markets Guide - CityGuide',
    description:
      'Your complete guide to shopping in Moroccan souks. Best markets by city, what to buy with prices, haggling strategies, scam avoidance, etiquette, and shipping advice.',
    url: 'https://citytoursmorocco.com/souks',
    images: [
      {
        url: '/images/hero-souk-lamps.webp',
        width: 1200,
        height: 630,
        alt: 'Colorful brass lanterns hanging in a Moroccan souk',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/souks' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/souks#guide',
      headline: 'Complete Guide to Morocco Souks & Markets',
      description:
        'Comprehensive guide covering the best souks in every major Moroccan city, what to buy with real price ranges, step-by-step haggling strategy, common scams, souk etiquette, navigation tips, best times to visit, and shipping purchases home.',
      url: 'https://citytoursmorocco.com/souks',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Top Moroccan Souks by City',
      description: 'The most important souks and markets across Morocco.',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Marrakech Souks (Souk Semmarine, Souk des Teinturiers, Jemaa el-Fnaa)' },
        { '@type': 'ListItem', position: 2, name: 'Fes Souks (Souk Attarine, Leather Souk, Spice Souk)' },
        { '@type': 'ListItem', position: 3, name: 'Chefchaouen (Craft Shops, Woven Blankets)' },
        { '@type': 'ListItem', position: 4, name: 'Essaouira (Thuya Wood, Argan, Silver)' },
        { '@type': 'ListItem', position: 5, name: 'Tangier (Grand Socco, Petit Socco)' },
      ],
    },
  ],
};

/* =====================================================================
   TOP SOUKS BY CITY DATA
   ===================================================================== */

interface CitySouk {
  city: string;
  image: string;
  overview: string;
  atmosphere: string;
  souks: {
    name: string;
    description: string;
    bestFor: string[];
    tip: string;
  }[];
}

const citySouks: CitySouk[] = [
  {
    city: 'Marrakech',
    image: '/images/hero-souk-lamps.webp',
    overview:
      'Marrakech has the largest and most famous souk complex in Morocco, stretching north from the legendary Jemaa el-Fnaa square in a labyrinth of covered alleyways organized loosely by trade. The souks of Marrakech are overwhelming, exhilarating, and occasionally exhausting. This is the epicenter of the Moroccan shopping experience, and the place where first-time visitors are most likely to feel both dazzled and disoriented. Over 3,000 shops crowd the narrow lanes, and the energy of sellers, donkeys, motorbikes, and fellow tourists creates an atmosphere unlike anything else on earth.',
    atmosphere: 'Intense, crowded, and sensory-overloading. Expect aggressive touts and higher starting prices than elsewhere in Morocco. The reward is the most diverse and spectacular selection of goods in the country.',
    souks: [
      {
        name: 'Souk Semmarine',
        description:
          'The main artery of the Marrakech souks, Souk Semmarine is a wide, partially covered alleyway that branches off from the north side of Jemaa el-Fnaa. This is where the majority of visitors enter the souk complex. The first section is dominated by clothing, scarves, and tourist-oriented goods, but as you venture deeper, the quality and variety improve dramatically. Side alleys branch off into specialized markets for leather, spices, metalwork, and carpets.',
        bestFor: ['Textiles', 'Clothing', 'General crafts', 'Lanterns'],
        tip: 'Walk past the first row of shops nearest to Jemaa el-Fnaa, where prices are highest. The deeper you go into the souk, the better the prices and the more authentic the merchandise becomes.',
      },
      {
        name: 'Souk des Teinturiers (Dyers Souk)',
        description:
          'One of the most photogenic spots in all of Morocco, the Dyers Souk is a narrow alleyway near the Mouassine quarter where skeins of freshly dyed wool and silk hang overhead in cascading rainbows of color. Master dyers (sabbaghin) work in open-fronted workshops, dipping fabrics into vats of natural pigments made from saffron, indigo, henna, and pomegranate. The souk is relatively small but incredibly atmospheric, and the artisans are generally happy to explain their craft if you show genuine interest.',
        bestFor: ['Dyed textiles', 'Wool skeins', 'Photography', 'Scarves'],
        tip: 'Visit in the morning when dyers are actively working and fresh skeins are being hung to dry. The afternoon light also creates stunning photographs as sun filters through the colored yarns.',
      },
      {
        name: 'Jemaa el-Fnaa',
        description:
          'While technically a square rather than a souk, Jemaa el-Fnaa is the beating heart of Marrakech and the starting point for all souk exploration. By day, the square hosts orange juice vendors (4 MAD per glass), henna artists, snake charmers, and stalls selling dried fruits and spices. As evening falls, it transforms into the largest open-air food market in Africa, with over 100 food stalls serving everything from grilled meats and snail soup to fresh-squeezed pomegranate juice. The square is a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity.',
        bestFor: ['Street food', 'Orange juice', 'Dried fruits', 'Evening entertainment', 'People watching'],
        tip: 'Eat at the busiest food stalls, as high turnover means fresher food. Agree on prices before ordering. For the best view, grab a rooftop terrace seat at one of the surrounding cafes (expect to pay 30-60 MAD for a mint tea with a view).',
      },
    ],
  },
  {
    city: 'Fes',
    image: '/images/hero-fes-tanneries.webp',
    overview:
      'The medina of Fes el-Bali is the largest car-free urban area in the world and home to what many consider the most authentic souk experience in Morocco. Unlike the tourist-heavy souks of Marrakech, the souks of Fes still function primarily as markets for local residents. Artisans work in workshops that have been in continuous operation for centuries, and the trades remain organized by guild, just as they were in medieval times. Shopping in Fes is a deeper, more culturally immersive experience, with better craftsmanship and generally lower prices than Marrakech.',
    atmosphere: 'Labyrinthine, atmospheric, and genuinely medieval. Less touristy than Marrakech but also harder to navigate. The locals are generally friendlier and less aggressive in their sales approach, though unofficial guides can be persistent.',
    souks: [
      {
        name: 'Souk Attarine (Spice and Perfume Souk)',
        description:
          'Located near the entrance to the al-Qarawiyyin Mosque, Souk Attarine is a fragrant corridor of spice and perfume sellers whose shops overflow with pyramids of colorful spices, dried flowers, medicinal herbs, and handmade soaps. The air is thick with the scent of cumin, cinnamon, saffron, and dried rosebuds. This is where locals buy their spices, so the quality is genuine and the prices reflect actual market rates rather than tourist markup. Many sellers will create custom spice blends on the spot.',
        bestFor: ['Spices', 'Ras el hanout', 'Saffron', 'Dried flowers', 'Argan oil', 'Natural soaps'],
        tip: 'Buy saffron here rather than in Marrakech for significantly lower prices. Genuine Moroccan saffron (from Taliouine) costs 15-30 MAD per gram. If offered saffron at 5 MAD per gram, it is safflower, not saffron.',
      },
      {
        name: 'Leather Souk (near Chouara Tannery)',
        description:
          'The leather workshops surrounding the Chouara Tannery in Fes produce some of the finest leather goods in Morocco. The tannery itself, dating from the 11th century, is one of the most iconic sights in the country: dozens of stone vats filled with natural dyes in white, amber, saffron, red, and brown, worked by tanners standing waist-deep in the solutions. Surrounding terraces offer viewing platforms (shops will give you a sprig of mint to counteract the strong smell), and the adjacent leather shops sell bags, jackets, poufs, wallets, and belts made from the freshly tanned hides.',
        bestFor: ['Leather bags', 'Leather poufs', 'Wallets', 'Belts', 'Jackets'],
        tip: 'Visit early morning when the light on the tannery vats is best for photos. Buy leather goods from shops near the tannery for the freshest selection. Smell the leather: genuine vegetable-tanned leather has an earthy, natural scent, while chemically tanned leather smells like plastic.',
      },
      {
        name: 'Spice Souk & Herborist Quarter',
        description:
          'Beyond the main Souk Attarine, the deeper herborist quarter of the Fes medina contains specialist shops selling traditional Moroccan medicines, beauty preparations, and obscure ingredients that have been traded here since the Middle Ages. You will find black soap (savon beldi), ghassoul clay, kohl eyeliner, dried chameleons and hedgehogs (used in traditional medicine), essential oils, and hand-pressed flower waters. The shopkeepers in this area tend to be knowledgeable about their products and will explain traditional uses in detail.',
        bestFor: ['Traditional medicines', 'Black soap', 'Ghassoul clay', 'Essential oils', 'Rose water', 'Kohl'],
        tip: 'Ask for a demonstration of any product before buying. Reputable herborists will let you smell, touch, and test items before purchase. Avoid buying any product derived from endangered animals.',
      },
    ],
  },
  {
    city: 'Chefchaouen',
    image: '/images/hero-chefchaouen.webp',
    overview:
      'The Blue City of Chefchaouen offers the most relaxed and visually stunning shopping experience in Morocco. The compact medina, painted in every shade of blue from powder to cobalt, is home to a small but distinctive collection of craft shops, galleries, and artisan workshops. Chefchaouen is not the place for a massive souk crawl, but rather for a leisurely stroll through photogenic lanes where shopkeepers are friendly, pressure is low, and the goods reflect the unique Rif Mountain culture. Prices are generally fair, and aggressive haggling is less common here than in the imperial cities.',
    atmosphere: 'Relaxed, picturesque, and unhurried. Shopkeepers are among the friendliest in Morocco. The blue-washed walls make every shop front a potential photograph.',
    souks: [
      {
        name: 'Craft Shops of the Medina',
        description:
          'Small, individually owned shops line the narrow blue streets of Chefchaouen medina, selling a curated mix of locally made crafts and goods from elsewhere in Morocco. The standout local products are woven blankets and textiles made by Rif Mountain women, goat cheese (jben) from the surrounding hills, handmade soaps, and unique Chefchaouen-branded pottery and ceramics in distinctive blue tones. Several shops specialize in handwoven bags, baskets, and traditional Riffian garments.',
        bestFor: ['Woven blankets', 'Blue pottery', 'Goat cheese', 'Handmade soaps', 'Photography props'],
        tip: 'The best local blankets are sold by women in the plaza near the kasbah. These are genuinely handwoven in the surrounding villages and cost 150-500 MAD depending on size and quality.',
      },
      {
        name: 'Woven Blankets & Textiles',
        description:
          'Chefchaouen is the best place in Morocco to buy traditional Riffian woven blankets and textiles. The blankets are made from wool or a wool-cotton blend, typically in bold stripes of red, white, and black, or more subdued natural tones. They are handwoven on traditional backstrap or floor looms by women in villages throughout the Rif Mountains. Larger shops in the medina carry a good selection, but for the widest variety and best prices, ask shopkeepers about visiting a weaving family in a nearby village, which some can arrange.',
        bestFor: ['Wool blankets', 'Striped textiles', 'Handwoven scarves', 'Traditional garments'],
        tip: 'Genuine handwoven blankets have slight irregularities in the weave. Machine-woven versions are perfectly uniform. Feel the weight: a good wool blanket should be heavy and warm. Ask if the dyes are natural or synthetic.',
      },
    ],
  },
  {
    city: 'Essaouira',
    image: '/images/hero-essaouira.webp',
    overview:
      'Essaouira is the most laid-back market town in Morocco, and many travelers find it a welcome relief after the intensity of Marrakech or Fes. The compact, walkable medina is enclosed within 18th-century Portuguese ramparts and organized around a central market street. The town has three distinct specialties that you will not find better anywhere else in Morocco: thuya wood crafts, argan oil products, and silver jewelry. The art gallery scene is also excellent, with genuine contemporary Moroccan artists selling original work. The fishing port adds a spectacular seafood market to the mix.',
    atmosphere: 'Breezy, relaxed, and artistic. The Atlantic wind keeps temperatures pleasant. Sellers are generally fair and low-pressure. A popular destination for artists and surfers.',
    souks: [
      {
        name: 'Thuya Wood Market',
        description:
          'Essaouira is the world capital of thuya wood crafts. Thuya (or thuja) is a rare, aromatic burl wood harvested from the roots of the Tetraclinis articulata tree that grows in the argan forest surrounding the town. The wood has extraordinary natural grain patterns, ranging from golden swirls to deep mahogany waves, and artisans carve it into boxes, chess sets, backgammon boards, picture frames, bowls, and furniture. The woodworking cooperative near Skala de la Ville is the best starting point, with fixed prices and demonstrations of the craft.',
        bestFor: ['Thuya wood boxes', 'Chess sets', 'Furniture', 'Decorative objects'],
        tip: 'Visit the cooperative first to understand fair prices, then browse independent shops for unique pieces. Genuine thuya has a distinctive sweet, cedar-like fragrance. Avoid pieces with cracks, which indicate the wood was not properly seasoned.',
      },
      {
        name: 'Argan Oil Shops & Cooperatives',
        description:
          'The argan forest surrounding Essaouira makes it the ideal place to buy authentic argan oil, both culinary and cosmetic. Women-run cooperatives on the road between Marrakech and Essaouira offer the most transparent purchasing experience: you can watch the entire production process from nut cracking to stone grinding. In the medina itself, numerous shops sell argan oil products, but quality varies enormously. Cosmetic argan oil (pressed from raw nuts) is used for skin and hair, while culinary argan oil (from roasted nuts) has a rich, nutty flavor used for dipping bread and drizzling on salads.',
        bestFor: ['Cosmetic argan oil', 'Culinary argan oil', 'Argan-based beauty products', 'Amlou (argan butter)'],
        tip: 'Buy from certified cooperatives for guaranteed purity. Cosmetic argan oil should be nearly odorless and pale gold. Culinary oil is darker and nutty-smelling. If the price seems too low (below 100 MAD per 100ml for cosmetic oil), it is likely diluted with cheaper oils.',
      },
      {
        name: 'Silver Jewelry Quarter',
        description:
          'Essaouira has a long history of silver craftsmanship, influenced by the town former Jewish community who were master silversmiths. Today, the tradition continues with Berber-style silver jewelry sold in shops throughout the medina. Pieces range from simple bangles and rings to elaborate tribal necklaces with amber, coral, and amazonite stones. The Mellah (former Jewish quarter) has some of the best jewelry shops. Essaouira silver tends to be more affordable than in Marrakech, and the quality of both the metalwork and the stones is generally higher.',
        bestFor: ['Berber silver jewelry', 'Amber necklaces', 'Silver bangles', 'Tuareg-style pieces'],
        tip: 'Look for the 925 hallmark for sterling silver. Traditional Berber pieces are often made from lower-purity coin silver, which has historical value but is less expensive per gram. Ask sellers to weigh pieces on a scale if buying by silver content.',
      },
    ],
  },
  {
    city: 'Tangier',
    image: '/images/hero-tangier.webp',
    overview:
      'Tangier straddles the meeting point of the Atlantic and Mediterranean, and its markets reflect this crossroads position with a unique blend of Moroccan, Spanish, and international influences. The city has undergone a dramatic revival in recent years, with its souks cleaned up and modernized while retaining their historic character. Shopping in Tangier feels different from the rest of Morocco: the pace is faster, the European influence is more visible, and the goods reflect the city cosmopolitan history. The medina is compact and manageable, making it a good introduction for visitors arriving from Spain.',
    atmosphere: 'Cosmopolitan, moderately busy, and culturally diverse. The medina is steep and hilly. Shopkeepers are generally straightforward, and many speak Spanish, French, and English.',
    souks: [
      {
        name: 'Grand Socco (Grand Market Square)',
        description:
          'The Grand Socco (officially Place du 9 Avril 1947) is a large, circular plaza that serves as the gateway between the modern city (ville nouvelle) and the old medina. The square itself hosts a daily produce market where Riffian women in traditional red-and-white striped foutas sell fresh vegetables, herbs, and bread. The surrounding streets are lined with shops selling everyday goods, clothing, and household items at local prices. The Grand Socco is also the starting point for exploring the medina souks, which branch off to the south through the gateway of Bab Fahs.',
        bestFor: ['Fresh produce', 'Local textiles', 'Household goods', 'People watching'],
        tip: 'Come in the morning for the freshest produce and the liveliest atmosphere. The Grand Socco is also the best place to catch a petit taxi to the Kasbah or the train station.',
      },
      {
        name: 'Petit Socco (Small Market Square)',
        description:
          'The Petit Socco is a tiny, atmospheric square deep in the heart of the Tangier medina that was once the social hub of the city international zone. In the 1950s and 1960s, it was the haunt of writers like Paul Bowles, William Burroughs, and Jack Kerouac. Today, the square is lined with cafes and small shops selling antiques, vintage items, leather goods, and curios that reflect Tangier multicultural past. The surrounding narrow streets contain spice sellers, textile shops, and artisan workshops. The Petit Socco is more about atmosphere and serendipitous finds than systematic shopping.',
        bestFor: ['Antiques', 'Vintage items', 'Spices', 'Leather goods', 'Literary history'],
        tip: 'Have a coffee at one of the Petit Socco cafes before shopping. The shops in the surrounding alleys are small and eclectic; this is the place for one-of-a-kind finds rather than standard Moroccan souvenirs. Bargaining is expected but less aggressive than in Marrakech.',
      },
    ],
  },
];

/* =====================================================================
   WHAT TO BUY - PRODUCT CATEGORIES WITH PRICES
   ===================================================================== */

interface ProductCategory {
  name: string;
  description: string;
  items: {
    item: string;
    priceRange: string;
    qualityNote: string;
  }[];
  bestCity: string;
  topTip: string;
}

const productCategories: ProductCategory[] = [
  {
    name: 'Leather Goods',
    description:
      'Morocco is world-famous for its leather, particularly the vegetable-tanned leather of Fes and Marrakech. The tanning process uses natural plant dyes and has been unchanged for a millennium. Products range from bags and belts to poufs, wallets, and jackets. Fes leather is considered the highest quality, with Marrakech offering the widest variety of finished products.',
    items: [
      { item: 'Leather bags (crossbody, tote)', priceRange: '200-800 MAD', qualityNote: 'Check stitching uniformity and leather smell. Genuine vegetable-tanned leather smells earthy, not plastic.' },
      { item: 'Babouche slippers', priceRange: '80-250 MAD', qualityNote: 'Should bend without cracking. Buy a half-size smaller as they stretch. Yellow is most traditional for men.' },
      { item: 'Leather poufs (unstuffed)', priceRange: '400-1,200 MAD', qualityNote: 'Embroidered designs cost more. Unstuffed poufs are easier to ship. Stuff with old clothes or newspaper at home.' },
      { item: 'Wallets and coin purses', priceRange: '50-200 MAD', qualityNote: 'Simple and practical. Check the snap closure and interior stitching.' },
      { item: 'Leather belts', priceRange: '80-300 MAD', qualityNote: 'Hand-tooled designs add cost. Check the buckle quality, as cheap buckles break first.' },
    ],
    bestCity: 'Fes for quality, Marrakech for variety',
    topTip: 'Visit the tanneries in Fes to understand the production process. Shops with tannery viewing terraces often charge a premium; compare prices with shops a few streets away.',
  },
  {
    name: 'Ceramics & Pottery',
    description:
      'Moroccan ceramics are instantly recognizable by their vibrant geometric designs and rich glazes. Fes produces the iconic cobalt blue and white pieces inspired by Andalusian traditions, while Safi on the Atlantic coast specializes in polychrome ceramics in greens, yellows, and reds. Both cities have active potters quarters where you can watch artisans at work. Functional items like tagine pots and bowls are complemented by purely decorative plates, vases, and tile panels.',
    items: [
      { item: 'Decorative plates and bowls', priceRange: '50-300 MAD', qualityNote: 'Hold up to light to check for even thickness. Fine hand-painting with clean lines indicates quality.' },
      { item: 'Tagine pots (decorative)', priceRange: '100-500 MAD', qualityNote: 'Decorative tagines are painted and not food-safe. Cooking tagines are plain terracotta and must be seasoned before use.' },
      { item: 'Tagine pots (cooking)', priceRange: '60-200 MAD', qualityNote: 'Unglazed, underpainted terracotta. Should feel heavy and even. Season with olive oil before first use.' },
      { item: 'Mosaic tile tables', priceRange: '1,500-8,000 MAD', qualityNote: 'Extremely heavy. Must be shipped. Verify that tiles are hand-cut zellige, not printed ceramic.' },
      { item: 'Ceramic mugs and tea sets', priceRange: '30-150 MAD', qualityNote: 'Ensure food-safe glaze if you plan to use for drinking. Ask the seller directly.' },
    ],
    bestCity: 'Fes for blue-and-white, Safi for colorful polychrome',
    topTip: 'Visit the pottery quarter (Ain Nokbi) in Fes or Colline des Potiers in Safi for wholesale prices direct from workshops. Bring bubble wrap or buy some from a hardware shop in the medina.',
  },
  {
    name: 'Carpets & Textiles',
    description:
      'Moroccan carpets are among the most coveted textiles in the world. The three major types are Beni Ourain (cream wool with bold black geometric patterns), Boucherouite (colorful recycled-fabric rugs), and flat-woven kilims. Each is handmade by Berber women, with patterns that encode tribal identity, spiritual protection, and personal narratives. Beyond carpets, Morocco produces stunning woven blankets, embroidered cushion covers, caftans, and djellabas.',
    items: [
      { item: 'Berber rugs (small/medium)', priceRange: '500-5,000+ MAD', qualityNote: 'Check the back: handmade rugs have slight irregularities. Ask about wool origin and dye type (natural vs synthetic).' },
      { item: 'Beni Ourain rugs (large)', priceRange: '2,000-20,000+ MAD', qualityNote: 'Authentic Beni Ourain rugs are 100% undyed sheep wool with bold geometric black patterns. The pile should be thick and soft.' },
      { item: 'Kilim flat-weave rugs', priceRange: '300-2,000 MAD', qualityNote: 'Thinner and lighter than pile rugs, making them easier to transport. Bold colors and geometric patterns.' },
      { item: 'Embroidered cushion covers', priceRange: '80-400 MAD', qualityNote: 'Hand-embroidered covers have slightly irregular stitching on the reverse. Machine versions are perfectly uniform.' },
      { item: 'Caftans and djellabas', priceRange: '300-3,000 MAD', qualityNote: 'Quality depends on fabric (silk, cotton, or synthetic) and embroidery detail. Custom tailoring available in 24-48 hours.' },
    ],
    bestCity: 'Marrakech and the High Atlas for carpets, Fes for embroidery, Chefchaouen for blankets',
    topTip: 'Visit a government-run Ensemble Artisanal to see fixed prices before entering the souks. This gives you a reliable baseline. For large rugs, negotiate shipping as part of the deal.',
  },
  {
    name: 'Spices & Food Products',
    description:
      'Morocco is a spice paradise, and the spice souks are among the most aromatic and photogenic stops in any medina. Ras el hanout (a complex blend of 15-30 spices) is the signature Moroccan spice blend, but you will also find cumin, cinnamon, turmeric, paprika, dried rosebuds, saffron from Taliouine, and preserved lemons. Argan oil and amlou (argan butter mixed with almonds and honey) are culinary treasures unique to Morocco.',
    items: [
      { item: 'Ras el hanout (spice blend)', priceRange: '20-80 MAD per 100g', qualityNote: 'Quality varies enormously. Good ras el hanout should be fragrant and complex. Avoid pre-packaged tourist versions with artificial colors.' },
      { item: 'Saffron (Taliouine)', priceRange: '15-30 MAD per gram', qualityNote: 'Moroccan saffron from Taliouine is world-class. Genuine threads are dark red with a slightly bitter, honey-like aroma. If it costs less than 10 MAD/gram, it is safflower.' },
      { item: 'Argan oil (culinary)', priceRange: '80-150 MAD per 250ml', qualityNote: 'Should be dark golden with a rich nutty aroma from roasted nuts. Buy from cooperatives for guaranteed purity.' },
      { item: 'Amlou (argan almond butter)', priceRange: '40-100 MAD per jar', qualityNote: 'A Moroccan version of nut butter made from argan oil, almonds, and honey. Delicious on bread. Check freshness date.' },
      { item: 'Preserved lemons', priceRange: '10-30 MAD per jar', qualityNote: 'Essential for authentic tagine cooking. Should be plump, soft, and fragrant. Will last months at home.' },
      { item: 'Dried rosebuds and rose water', priceRange: '20-60 MAD', qualityNote: 'Rose products from the Dades Valley (Kelaat M\'Gouna) are the best. Rose water should be clear with a pure floral scent.' },
    ],
    bestCity: 'Fes for spices, Essaouira/Souss region for argan oil',
    topTip: 'Buy spices from shops frequented by locals, not those with English signs on tourist routes. Local spice shops have higher turnover, meaning fresher products. Ask to smell before buying.',
  },
  {
    name: 'Metal & Lanterns',
    description:
      'Moroccan metalwork is some of the finest in the Islamic world. The pierced brass lanterns that cast mesmerizing geometric shadow patterns are the iconic purchase, but the range extends to tea sets, trays, door knockers, mirrors, and chandeliers. Artisans work primarily in brass and copper, though iron and silver pieces are also available. The coppersmiths souks of Marrakech and Fes (particularly Place Seffarine in Fes, in continuous operation for 1,000+ years) are the epicenters.',
    items: [
      { item: 'Brass lanterns (table size)', priceRange: '200-600 MAD', qualityNote: 'Check weight: heavier is better. Precision of pierced patterns indicates quality. Ensure electrical wiring is compatible with your home country.' },
      { item: 'Brass lanterns (large/hanging)', priceRange: '500-1,000+ MAD', qualityNote: 'Large lanterns may need to be shipped. Negotiate wiring and bulb fitting for your home electrical standard.' },
      { item: 'Mint tea sets (teapot + glasses)', priceRange: '150-600 MAD', qualityNote: 'Engraved silver-plated sets are more expensive. Stainless steel versions are practical for daily use. Glasses should have painted, not sticker, decoration.' },
      { item: 'Serving trays', priceRange: '100-500 MAD', qualityNote: 'Hand-hammered trays with intricate patterns are the most valuable. Machine-stamped trays are cheaper but less unique.' },
      { item: 'Brass mirrors and frames', priceRange: '200-800 MAD', qualityNote: 'Heavy and fragile for transport. Consider buying the frame and adding a mirror at home.' },
    ],
    bestCity: 'Marrakech for variety and Fes for traditional craftsmanship',
    topTip: 'The metalworkers souk in Marrakech (near Souk Haddadine) lets you watch artisans at work. If you find a piece you love but the size or design is not perfect, many metalworkers will create custom pieces in 2-5 days.',
  },
  {
    name: 'Clothing & Textiles',
    description:
      'Moroccan clothing is both beautiful and functional, designed for the local climate and cultural traditions. Caftans (formal, embroidered robes) and djellabas (everyday hooded garments) are the two most common purchases. Ready-to-wear versions are available in every souk, but custom tailoring is affordable and produces superior results. Beyond traditional garments, Morocco produces excellent cotton and linen textiles, hand-embroidered tablecloths, and stunning silk scarves.',
    items: [
      { item: 'Caftans (women, ready-to-wear)', priceRange: '300-2,000 MAD', qualityNote: 'Fabric quality matters most: silk and fine cotton command higher prices. Heavy embroidery adds cost. Custom-made caftans can be ready in 1-3 days.' },
      { item: 'Djellabas (unisex)', priceRange: '200-1,000 MAD', qualityNote: 'Lightweight cotton for summer, heavier wool for winter. Traditional colors are cream, brown, and grey for men; any color for women.' },
      { item: 'Pashmina and silk scarves', priceRange: '50-300 MAD', qualityNote: 'Test by pulling through a ring: genuine silk or pashmina slides through easily. Synthetic scarves catch and drag.' },
      { item: 'Embroidered tablecloths', priceRange: '200-2,000 MAD', qualityNote: 'Fes embroidery (monochrome blue or red on white) is the most refined. Check both sides: hand embroidery is neat on reverse but not identical to front.' },
    ],
    bestCity: 'Fes for traditional quality, Marrakech for fashion-forward designs',
    topTip: 'For a truly unique souvenir, have a caftan custom-made. Choose your fabric at a textile shop, then take it to a tailor recommended by your riad or hotel. Total cost (fabric + tailoring) is typically 400-2,500 MAD.',
  },
  {
    name: 'Jewelry',
    description:
      'Moroccan jewelry is predominantly a Berber tradition, with designs carrying deep symbolic and protective meaning. Silver is the primary metal, with gold more common in urban Arab traditions. Berber jewelry features bold geometric patterns, fibulae brooches, chunky bangles, and talismanic pendants incorporating symbols of fertility, protection from the evil eye, and nature. Stones include amber, coral, amazonite, and turquoise. Tiznit in the Anti-Atlas is the historical capital of Moroccan silversmithing.',
    items: [
      { item: 'Silver bangles and bracelets', priceRange: '100-500 MAD', qualityNote: 'Look for the 925 stamp for sterling silver. Traditional Berber coin silver is lower purity but historically significant.' },
      { item: 'Amber and coral necklaces', priceRange: '200-2,000 MAD', qualityNote: 'Real amber is warm to touch and light. Test by rubbing: genuine amber produces a faint resinous scent and static charge. Much "amber" in souks is copal or plastic.' },
      { item: 'Berber fibulae brooches', priceRange: '150-800 MAD', qualityNote: 'These large triangular brooches were traditionally used to fasten garments. Antique pieces have patina and wear marks; new reproductions are shinier.' },
      { item: 'Hand of Fatima pendants', priceRange: '50-300 MAD', qualityNote: 'Available in silver, brass, and gold-plated versions. A universal Moroccan protective symbol that makes a meaningful souvenir.' },
    ],
    bestCity: 'Tiznit for silver, Essaouira for amber and Berber pieces, Marrakech for variety',
    topTip: 'In Marrakech, the silver souk is in the Mellah (Jewish quarter) area near the Bahia Palace. For the best selection and fairest prices on authentic Berber silver, travel to Tiznit.',
  },
];

/* =====================================================================
   HAGGLING GUIDE - STEP BY STEP
   ===================================================================== */

interface HagglingStep {
  step: number;
  title: string;
  description: string;
  example: string;
}

const hagglingSteps: HagglingStep[] = [
  {
    step: 1,
    title: 'Research Prices Before You Enter the Souk',
    description:
      'Visit a government-run Ensemble Artisanal or fixed-price cooperative first. These shops sell crafts at regulated prices, giving you an honest baseline. Note prices for the specific items you want to buy. Also check online marketplaces for Moroccan goods to understand international retail prices.',
    example: 'A leather crossbody bag at the Ensemble Artisanal costs 350 MAD. This tells you the fair market price. A souk vendor asking 1,000 MAD for a similar bag is starting at roughly 3x.',
  },
  {
    step: 2,
    title: 'Browse Without Buying First',
    description:
      'On your first pass through the souk, look but do not commit. Visit multiple shops selling the item you want. Compare quality, variety, and opening prices. Take mental notes of which shops had the best selection and the friendliest sellers. This reconnaissance pass gives you confidence and knowledge for negotiations.',
    example: 'You visit five lamp shops. Three offer similar quality. One has a unique piece you love. You now know the market and can return with confidence.',
  },
  {
    step: 3,
    title: 'Show Interest but Not Desperation',
    description:
      'When you find an item you want, examine it casually. Pick it up, put it down, look at other items nearby. Ask the price of several items, not just the one you want. If the seller senses you must have a specific piece, the price will not come down. Your body language matters more than your words.',
    example: 'Seller: "You like this lantern? Very beautiful!" You: "It is nice. How much are these plates? And that teapot? What about the lantern?"',
  },
  {
    step: 4,
    title: 'Respond to the First Price with Friendly Surprise',
    description:
      'The seller will quote a price 2-4 times the expected selling price. Do not be offended; this is the game. Smile, shake your head gently, and say something like "That is too much for me" or "My budget is much less." Do not be aggressive or insulting. The tone should be warm and conversational, like a friendly debate.',
    example: 'Seller: "This bag, 900 MAD." You: (Smiling) "Ah, that is very expensive. I have seen similar for much less."',
  },
  {
    step: 5,
    title: 'Counter-Offer at 30-40% of the Asking Price',
    description:
      'Your first counter-offer should be roughly one-third to two-fifths of the asking price. This leaves room for both sides to negotiate toward the middle. The seller will act shocked, possibly offended, but this is theatrical. They know the game. You are now in the negotiation zone, which is where both parties expected to be.',
    example: 'Seller: "900 MAD." You: "I can offer 300 MAD." Seller: "300! Impossible! I paid more than that. 750." You are now negotiating.',
  },
  {
    step: 6,
    title: 'Negotiate in Small Increments Toward the Middle',
    description:
      'Raise your offer slowly in small amounts (20-50 MAD at a time). The seller will lower their price in larger jumps. As the prices converge, the increments get smaller. The sweet spot is usually 40-60% of the original asking price. At each step, justify your offer: compare it to other shops, mention your budget, note small imperfections.',
    example: 'You: "350 MAD." Seller: "600." You: "I saw something similar for 400 at another shop. 380?" Seller: "500, final price." You: "400 and I will buy it right now."',
  },
  {
    step: 7,
    title: 'Use the Walk-Away When Stuck',
    description:
      'If negotiations stall and the price is above what you want to pay, thank the seller warmly, start to leave, and say "I will think about it." This is the most powerful move in souk negotiation. If your offered price was reasonable, the seller will call you back within 10-20 steps. If they do not, you have found their floor price. You can try the next shop or return later.',
    example: 'You: "I can do 400 MAD maximum. Thank you for your time." (Start walking) Seller: "Wait, wait. 450, my friend, final price. For you, special price."',
  },
  {
    step: 8,
    title: 'Close the Deal with Grace',
    description:
      'When you reach a price you are comfortable with, agree with a handshake and a smile. Pay with exact change or close to it. Thank the seller genuinely. Accept the offered mint tea if time allows. A good bargaining session ends with both parties feeling satisfied. Do not gloat about the price you paid or ask other tourists what they paid; it spoils the experience.',
    example: 'You: "450 MAD. Deal?" Seller: "Deal, my friend." Handshake. Both parties are happy. You got a fair price; the seller made a fair profit.',
  },
];

/* =====================================================================
   COMMON SCAMS IN SOUKS
   ===================================================================== */

interface SoukScam {
  title: string;
  howItWorks: string;
  howToAvoid: string;
  severity: 'low' | 'medium' | 'high';
}

const soukScams: SoukScam[] = [
  {
    title: 'The Fake Guide',
    howItWorks:
      'A friendly local approaches you, usually near the entrance to the medina, and offers to "help you find your riad" or "show you the tanneries." They lead you through the souks, stopping at specific shops where they receive a commission on anything you buy. Eventually they demand payment for the "tour," often 100-200 MAD or more. If you resist, they may become aggressive.',
    howToAvoid:
      'Politely decline all unsolicited offers of help with a firm "no thank you" (la shukran). If you need directions, ask a shopkeeper, as they are stationary and have no incentive to lead you astray. Hire an official guide through your riad or hotel if you want a medina tour.',
    severity: 'high',
  },
  {
    title: 'The Closed/Moved Attraction',
    howItWorks:
      'Someone near a popular attraction (tanneries, palace, mosque) tells you it is "closed today" or "moved to a new location" and offers to take you to the "real" one or an alternative. They lead you to a carpet shop or leather shop where you face a high-pressure sales situation.',
    howToAvoid:
      'Ignore anyone who tells you a major attraction is closed or moved. Walk to the entrance yourself and verify. Major sites like the tanneries and palaces are open daily and do not move. This is one of the oldest scams in Morocco.',
    severity: 'high',
  },
  {
    title: 'Bait and Switch',
    howItWorks:
      'You agree on a price for an item, and the seller wraps it up. When you get home, you discover a different, lower-quality item was substituted during the wrapping process. Common with leather goods (a different bag put in the wrapping), spices (cheap filler added), and carpets (a machine-made rug switched for the handmade one you examined).',
    howToAvoid:
      'Always watch the wrapping process carefully. For high-value items like carpets, take a photo of the specific item before the seller wraps it, including any unique features or marks. Inspect the item one final time before handing over payment.',
    severity: 'medium',
  },
  {
    title: 'The Friendly "Tea Invitation" Trap',
    howItWorks:
      'A seemingly friendly shopkeeper invites you for mint tea and a chat "with no obligation to buy." The tea is genuinely offered, but the social obligation it creates makes it psychologically difficult to leave without purchasing something. The longer you stay, the more pressure builds. This is not always a scam: some shopkeepers genuinely enjoy conversation. But be aware of the dynamic.',
    howToAvoid:
      'Accept tea if you want to, but know that you are under no obligation to buy. A polite "Thank you for the tea, but nothing suits me today" is perfectly acceptable. You can also offer to pay for the tea (5-10 MAD) to dissolve the perceived obligation.',
    severity: 'low',
  },
  {
    title: 'Inflated "Final Price"',
    howItWorks:
      'After extensive haggling, you agree on a price. When you hand over the money, the seller says "That was the price per item, not for both" or "That was without the extras." Suddenly the agreed price doubles or triples. Some sellers use a calculator and "accidentally" add a zero.',
    howToAvoid:
      'Always clarify exactly what the agreed price includes before paying. Repeat it clearly: "So this bag, 400 MAD total?" Get verbal confirmation. If the seller changes the terms after agreement, walk away immediately. This is dishonest dealing and not part of legitimate bargaining culture.',
    severity: 'medium',
  },
  {
    title: 'Fake Saffron',
    howItWorks:
      'Sellers offer "saffron" at suspiciously low prices (5-10 MAD per gram). The product is actually safflower or marigold petals, dyed to resemble saffron. Genuine Moroccan saffron from Taliouine costs 15-30 MAD per gram. Some sellers mix a few real saffron threads on top of a bag of safflower.',
    howToAvoid:
      'Learn to identify real saffron: the threads are dark crimson-red with a slightly bitter, honey-like aroma. They should stain water a bright golden-yellow. If the price seems too good to be true, it is. Buy from established spice shops frequented by locals, not from street vendors.',
    severity: 'medium',
  },
  {
    title: 'The "My Uncle Has a Shop" Route',
    howItWorks:
      'A young person befriends you, walks with you through the medina, and steers you toward a relative or friend shop. The "friendship" is the hook. You feel socially obligated to browse, and the shop owner applies pressure. The guide collects a commission.',
    howToAvoid:
      'Be friendly but clear about your plans. "I am just walking, thank you" is sufficient. If someone accompanies you despite your decline, stop walking and firmly repeat that you prefer to walk alone. Do not feel guilty about being direct.',
    severity: 'medium',
  },
  {
    title: 'Wrong Change',
    howItWorks:
      'After a purchase, the seller gives you incorrect change, counting on confusion between similar-looking Moroccan bills or the distraction of a busy souk. Some sellers claim they do not have change and pocket the difference.',
    howToAvoid:
      'Carry small bills and coins. Count your change carefully before walking away. Know the Moroccan bills: 20 MAD (blue), 50 MAD (green), 100 MAD (brown), 200 MAD (yellow). If paying a large amount, count out the bills in front of the seller before handing them over.',
    severity: 'low',
  },
];

/* =====================================================================
   SOUK ETIQUETTE
   ===================================================================== */

interface EtiquetteRule {
  title: string;
  doThis: string;
  avoidThis: string;
}

const etiquetteRules: EtiquetteRule[] = [
  {
    title: 'Photography in the Souk',
    doThis:
      'Ask permission before photographing people, especially artisans at work. Many are happy to be photographed and proud of their craft. Photograph merchandise, architecture, and street scenes freely. A small tip (5-10 MAD) is appreciated when photographing individuals.',
    avoidThis:
      'Do not photograph people without consent, especially women. Do not use a flash in dark workshop spaces. Do not photograph the inside of mosques (non-Muslims cannot enter most Moroccan mosques). Some sellers may demand money for photos of their stalls, which is not customary.',
  },
  {
    title: 'Touching and Handling Merchandise',
    doThis:
      'Pick up items, examine them, turn them over. Sellers expect you to handle merchandise. For ceramics, hold items up to the light to check thickness. For leather, smell and flex it. For carpets, the seller will unroll many for you. This is normal and expected.',
    avoidThis:
      'Do not handle items roughly or drop things. If you break something, you are expected to buy it. Do not let children handle fragile items. In food shops, do not touch items with your hands; the seller will serve you.',
  },
  {
    title: 'Greeting and Social Interaction',
    doThis:
      'Greet shopkeepers with "salam alaikum" (peace be upon you) or "bonjour." Respond to greetings in kind. Accept offered mint tea if you have time; it is a genuine expression of hospitality. Chat about Morocco, family, football. Moroccans are warm people who value human connection.',
    avoidThis:
      'Do not ignore greetings or walk past someone who is speaking to you without acknowledging them. Do not haggle aggressively, shout, or insult the merchandise. Do not compare prices loudly between shops while in earshot of the seller.',
  },
  {
    title: 'Dress Code in the Medina',
    doThis:
      'Dress modestly, especially in the deeper, less touristy parts of the medina. Women should cover shoulders and knees at minimum. Loose, comfortable clothing works best for the heat and the narrow spaces. Wear sturdy, closed shoes; the medina has uneven cobblestones and occasional puddles.',
    avoidThis:
      'Avoid shorts, sleeveless tops, and revealing clothing in conservative medina areas. Do not wear expensive jewelry or carry flashy accessories that mark you as a wealthy tourist. Leave valuables at your riad.',
  },
  {
    title: 'Entering Shops and Workshops',
    doThis:
      'Enter shops freely; browsing without buying is perfectly normal and expected. If a seller offers to show you their workshop or how an item is made, this is generally genuine and educational. These behind-the-scenes visits are one of the great joys of the souk.',
    avoidThis:
      'Do not enter a shop and then immediately say you are not buying anything. Browse first, then decide. If you feel uncomfortable or pressured, a polite "shukran, not today" and a departure is always acceptable. You owe no one a purchase.',
  },
  {
    title: 'Mint Tea Culture',
    doThis:
      'Accept the offered mint tea with gratitude. Drinking tea together is a Moroccan social ritual that transcends commerce. It is a gesture of welcome, not a sales trap. If you want to reciprocate without buying, compliment the shop and the seller craft.',
    avoidThis:
      'Do not refuse tea rudely. A polite "thank you, but I have just had some" is fine. Do not assume every tea offer is a scam. Do not rush through tea; savor it as part of the experience. Do not pour tea for yourself; let the host pour.',
  },
];

/* =====================================================================
   BEST TIMES TO VISIT SOUKS
   ===================================================================== */

interface VisitTime {
  timeSlot: string;
  description: string;
  bestFor: string;
  crowdLevel: string;
}

const visitTimes: VisitTime[] = [
  {
    timeSlot: 'Early Morning (8:00-10:00)',
    description:
      'The souks are just opening. Sellers are arranging their merchandise, light is beautiful in the covered passages, and the crowds have not arrived. This is when locals shop for daily necessities. The atmosphere is calm and you can browse at your own pace. Some sellers believe the first sale of the day brings good luck (known as "el-ftour"), which can mean better opening prices.',
    bestFor: 'Photography, peaceful browsing, local atmosphere, potentially better first-sale prices',
    crowdLevel: 'Low',
  },
  {
    timeSlot: 'Mid-Morning (10:00-12:00)',
    description:
      'The sweet spot for shopping. All shops are fully open, sellers are energetic and ready to deal, and the crowds are manageable. This is the best window for serious shopping and haggling, as sellers are motivated but not yet fatigued by a long day of negotiations.',
    bestFor: 'Serious shopping, best selection, active haggling, artisan workshops open',
    crowdLevel: 'Moderate',
  },
  {
    timeSlot: 'Midday-Afternoon (12:00-15:00)',
    description:
      'The heat peaks and many shops close for the afternoon break, especially in summer. This is the worst time to shop in the souks. Some sellers are tired and less willing to negotiate. In Ramadan, the souks are largely deserted during the afternoon. Use this time for lunch and a siesta.',
    bestFor: 'Rest. Avoid the souks during this window if possible.',
    crowdLevel: 'Low (many shops closed)',
  },
  {
    timeSlot: 'Late Afternoon (15:00-18:00)',
    description:
      'Shops reopen and the souks come alive again. The temperature drops, the light turns golden, and the atmosphere becomes energetic. This is a good secondary window for shopping. Sellers who have not had a good day may be more flexible on prices in the late afternoon.',
    bestFor: 'Bargain hunting, golden-hour photography, leisurely browsing',
    crowdLevel: 'Moderate to High',
  },
  {
    timeSlot: 'Evening (18:00-21:00)',
    description:
      'The souks take on a magical quality as lanterns are lit and the shadows deepen. In Marrakech, Jemaa el-Fnaa transforms into the famous night market. Some souk shops stay open into the evening, especially in summer. This is the most atmospheric time to visit, though selection may be limited as sellers begin packing up.',
    bestFor: 'Atmosphere, Jemaa el-Fnaa night market, evening food stalls, lantern shopping (seeing them lit)',
    crowdLevel: 'High in Marrakech, Moderate elsewhere',
  },
  {
    timeSlot: 'Friday',
    description:
      'Friday is the Islamic holy day. Many shops open late (after midday prayers) or close entirely for the morning. The afternoon is quieter than usual. However, some sellers who are open on Friday are more relaxed and willing to chat without the pressure of a busy market day.',
    bestFor: 'Quiet exploration if shops are open, visiting mosques from outside during prayer time',
    crowdLevel: 'Low (morning), Moderate (afternoon)',
  },
];

/* =====================================================================
   NAVIGATION TIPS FOR MEDINAS
   ===================================================================== */

interface NavigationTip {
  title: string;
  description: string;
}

const navigationTips: NavigationTip[] = [
  {
    title: 'Use Landmarks, Not Maps',
    description:
      'Traditional medinas predate modern cartography and their organic layouts defy conventional maps. Instead of staring at your phone, identify major landmarks: mosques (listen for the call to prayer), fondouks (old caravanserais with large wooden doors), fountains, and distinctive shop fronts. Once you know two or three landmarks relative to your riad, you can always orient yourself.',
  },
  {
    title: 'Follow the Flow of People',
    description:
      'The main arteries of the medina carry the heaviest foot traffic. If you are lost, walk with the flow of people moving in one direction. Major crowds heading one way usually lead to a main gate (bab), a major square, or a significant landmark. Going against the flow takes you deeper into residential areas.',
  },
  {
    title: 'Note the Doors and Gates',
    description:
      'Each major entrance to the medina has a named gate (bab). Learn the names of 2-3 gates near your riad: Bab Boujloud in Fes, Bab Debbagh in Marrakech, and so on. If you are lost, ask anyone "Where is Bab [name]?" and follow the pointed direction. These gates are universally known.',
  },
  {
    title: 'Download Offline Maps Before You Go',
    description:
      'Google Maps and Maps.me both have reasonable medina coverage. Download the offline map for the city before entering the souk. GPS works between the narrow buildings but is not always accurate to the specific alley. Use the map to identify your general area, then ask locals for the last few turns.',
  },
  {
    title: 'Hire a Licensed Guide for Your First Visit',
    description:
      'An official guide (identifiable by their brass badge issued by the Ministry of Tourism) will orient you to the medina layout, show you the major landmarks, and give you the confidence to navigate independently afterward. A half-day official guide costs 200-400 MAD and is money well spent for first-time visitors.',
  },
  {
    title: 'Take Photos of Junctions',
    description:
      'When you reach a notable intersection or turn, snap a quick photo on your phone. If you need to retrace your steps, scrolling through your photos gives you a visual trail of breadcrumbs. This is especially useful in Fes, whose 9,000+ alleyways can disorient even experienced travelers.',
  },
  {
    title: 'Ask Shopkeepers for Directions',
    description:
      'Shopkeepers are the best source of directions in the medina. They are stationary, they know the area intimately, and they generally give accurate directions because they want you to return as a future customer. A simple "Where is [your riad name]?" or "How do I get to [landmark]?" will get you pointed in the right direction.',
  },
  {
    title: 'Stay Calm When Lost',
    description:
      'Getting lost in the medina is not just inevitable, it is part of the experience. The medinas of Fes and Marrakech are finite spaces enclosed by walls. You cannot truly get lost; you are simply exploring. Eventually every alley leads to a main artery or a gate. Enjoy the unexpected discoveries: the hidden mosque, the quiet fountain, the artisan working in a doorway.',
  },
];

/* =====================================================================
   SHIPPING PURCHASES HOME
   ===================================================================== */

interface ShippingOption {
  title: string;
  description: string;
  cost: string;
  bestFor: string;
}

const shippingOptions: ShippingOption[] = [
  {
    title: 'Carry in Your Luggage',
    description:
      'The simplest option for small, durable items. Babouche slippers, spices, small ceramics, jewelry, scarves, argan oil (in checked luggage due to liquid restrictions), and embroidered textiles all pack well. Wrap fragile items in your clothing or buy bubble wrap from medina hardware shops. Keep all receipts accessible for customs.',
    cost: 'Free (within luggage allowance)',
    bestFor: 'Small, lightweight, non-fragile items',
  },
  {
    title: 'La Poste Maroc (Amana Service)',
    description:
      'Morocco national postal service offers international parcel shipping through their Amana express service. Available at post offices in every city. Reliable for medium-sized packages. Tracking is available. Delivery to Europe takes 7-14 days, to North America 14-21 days.',
    cost: '150-500 MAD to Europe, 300-800 MAD to North America (depending on weight)',
    bestFor: 'Medium packages, moderate value items',
  },
  {
    title: 'DHL / FedEx / UPS',
    description:
      'International courier services have offices in major Moroccan cities (Marrakech, Casablanca, Fes, Tangier). Fast and reliable with full tracking and insurance options. Significantly more expensive than postal service but ideal for valuable or fragile items. Delivery in 3-7 business days worldwide.',
    cost: '500-2,000+ MAD depending on size and weight',
    bestFor: 'High-value items, fragile ceramics, urgent shipments',
  },
  {
    title: 'Seller-Arranged Shipping',
    description:
      'Many established souk sellers, particularly carpet and furniture dealers, have their own shipping arrangements with freight companies. They handle packing, customs paperwork, and door-to-door delivery. This is the most convenient option for large items. Always get a written receipt with the shipping terms, tracking number, and expected delivery date.',
    cost: '300-1,500 MAD for carpets to Europe, 500-2,500 MAD to North America',
    bestFor: 'Large carpets, furniture, heavy items',
  },
  {
    title: 'Consolidated Shipping Services',
    description:
      'If you have purchased many items from different shops, some shipping companies in Marrakech and Fes offer consolidation services. They collect items from multiple sellers, pack everything together, and ship as a single consignment. Ask your riad for recommendations.',
    cost: 'Varies; typically cheaper per item than individual shipping',
    bestFor: 'Multiple large purchases from different shops',
  },
];

/* =====================================================================
   QUALITY VS TOURIST TRAP INDICATORS
   ===================================================================== */

interface QualityMarker {
  category: string;
  genuine: string;
  touristTrap: string;
}

const qualityMarkers: QualityMarker[] = [
  {
    category: 'Leather',
    genuine: 'Earthy, cedar-like smell. Soft and supple. Visible pores in the grain. Vegetable-tanned leather develops a natural patina over time. Even stitching, solid hardware.',
    touristTrap: 'Plastic or chemical smell. Stiff and shiny. Perfectly smooth surface without natural grain. Cheap zippers and clasps that will break within weeks.',
  },
  {
    category: 'Ceramics',
    genuine: 'Even thickness when held to light. Fine, detailed hand-painting with clean brush strokes. Smooth, glossy glaze without bubbles or bare spots. Slight weight to quality pieces.',
    touristTrap: 'Uneven thickness (thin spots that will crack). Blurry or printed patterns instead of hand-painted designs. Dull or rough glaze. Suspiciously lightweight.',
  },
  {
    category: 'Carpets',
    genuine: 'Back shows slight irregularities in knotting (hand-tied). Wool smells faintly of lanolin when you press your nose into it. Natural dyes produce softer, more nuanced colors. The seller can explain the tribal origin and pattern meaning.',
    touristTrap: 'Perfectly uniform back (machine-made). No wool scent or smells like chemicals. Harsh, unnaturally bright colors from synthetic dyes. Seller cannot explain the pattern or claims every rug is "antique."',
  },
  {
    category: 'Saffron',
    genuine: 'Dark crimson threads with a slightly bitter, honey-like aroma. Threads are dry and brittle, not flexible. Stains water a bright golden-yellow within minutes. Costs 15-30 MAD per gram from Taliouine.',
    touristTrap: 'Orange or yellow threads (safflower). Sweet or no smell. Flexible threads that do not snap. Colors water red or pale yellow. Costs under 10 MAD per gram.',
  },
  {
    category: 'Argan Oil',
    genuine: 'Cosmetic: pale gold, nearly odorless, absorbs quickly into skin without residue. Culinary: darker gold with rich nutty aroma from roasted nuts. Both types leave no greasy film. Sold in glass or dark bottles to prevent light damage.',
    touristTrap: 'Strong or unpleasant smell. Greasy texture that does not absorb. Very pale or very dark color. Sold in clear plastic bottles. Price below 100 MAD per 100ml for cosmetic grade.',
  },
  {
    category: 'Silver Jewelry',
    genuine: 'Stamped 925 for sterling silver. Has weight and substance. Develops a natural patina over time. Traditional Berber coin silver has a warmer, more matte finish than sterling.',
    touristTrap: 'No hallmark. Unusually lightweight. Shiny chrome-like appearance that does not tarnish. Green discoloration on skin after wearing (indicates base metal with silver plating).',
  },
  {
    category: 'Metalwork & Lanterns',
    genuine: 'Heavy, solid brass or copper. Precision-pierced patterns with clean edges. Smooth interior. Even patina. Seller can explain the artisan who made it. Wiring (if electric) is safe and functional.',
    touristTrap: 'Surprisingly lightweight (thin metal or zinc alloy). Rough, uneven piercing. Sharp interior edges. Paint applied to simulate aged brass. Mass-produced with stamped patterns.',
  },
];

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Store className="w-5 h-5" />, label: 'Major Souks', value: '12+ Markets', detail: 'Across 5 cities' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Top City', value: 'Marrakech', detail: '3,000+ shops' },
  { icon: <HandCoins className="w-5 h-5" />, label: 'Haggling', value: 'Start at 30-40%', detail: 'Of asking price' },
  { icon: <ShoppingBag className="w-5 h-5" />, label: 'Categories', value: '7 Product Types', detail: 'With price ranges' },
  { icon: <Shield className="w-5 h-5" />, label: 'Scams', value: '8 Common Ones', detail: 'How to avoid them' },
  { icon: <Clock className="w-5 h-5" />, label: 'Best Time', value: '10:00-12:00', detail: 'Mid-morning' },
];

/* =====================================================================
   RELATED PAGES
   ===================================================================== */

const relatedPages = [
  { title: 'Moroccan Crafts & Artisans', href: '/crafts', description: '16 traditional crafts, master artisan profiles, and workshop experiences.' },
  { title: 'Scams & Safety Guide', href: '/scams', description: 'Complete guide to common scams across Morocco and how to stay safe.' },
  { title: 'Money & Currency Guide', href: '/money', description: 'ATM advice, tipping customs, and currency exchange tips for Morocco.' },
  { title: 'Moroccan Food & Cuisine', href: '/food', description: 'Street food, restaurant guide, and the dishes you must try.' },
  { title: 'Marrakech City Guide', href: '/cities/marrakech', description: 'Complete guide to Morocco most popular city and its legendary medina.' },
  { title: 'Fes City Guide', href: '/cities/fes', description: 'Explore the oldest medina in the world and its living artisan traditions.' },
  { title: 'Moroccan Ceramics', href: '/ceramics', description: 'Deep dive into pottery traditions from Fes, Safi, and beyond.' },
  { title: 'Spices of Morocco', href: '/cuisine', description: 'The essential Moroccan spices and where to find the best quality.' },
];

/* =====================================================================
   PAGE (Server Component)
   ===================================================================== */

export default function SouksPage() {
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
          <li className="text-text-primary font-medium">Souks &amp; Markets</li>
        </ol>
      </nav>

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-souk-lamps.webp"
            alt="Colorful brass lanterns and lamps hanging in a Moroccan souk passageway"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Shopping &amp; Culture
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Souks &amp; Markets Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Navigate the legendary souks of Morocco with confidence. From the dazzling maze of Marrakech
              to the artisan workshops of Fes, discover what to buy, how to haggle, and how to avoid the
              tourist traps. Practical advice with real prices in Moroccan dirhams.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          QUICK STATS BAR
          ============================================================ */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{stat.label}</p>
              <p className="font-heading font-semibold text-sm text-text-primary leading-tight">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          INTRODUCTION TO MOROCCAN SOUKS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Gem className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The World of Moroccan Souks
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              A souk is far more than a market. It is a living institution that has been the beating heart
              of Moroccan social, economic, and cultural life for over a thousand years. The word
              &quot;souk&quot; comes from the Arabic for &quot;marketplace,&quot; but the reality transcends
              simple commerce. Moroccan souks are sensory universes where the scent of cumin and cedar
              mingles with the sound of hammering brass, where mountains of saffron glow gold under
              shafts of light, and where the art of negotiation is practiced with the finesse of a
              centuries-old tradition.
            </p>
            <p>
              The great souks of Morocco trace their origins to the medieval trade routes that connected
              Sub-Saharan Africa, the Middle East, and Europe through the Maghreb. Fes, founded in the
              9th century, developed the oldest and most intricate souk system in North Africa, with trades
              organized by guild in a pattern that persists to this day. Marrakech, established in the
              11th century as a Saharan trading post, became the commercial gateway between the caravan
              routes and the Mediterranean world. The souks of these cities were not just places of trade
              but centers of innovation, cultural exchange, and craftsmanship that rivaled anything in
              medieval Europe.
            </p>
            <p>
              Today, the souks remain vital parts of Moroccan life. While tourism has inevitably changed
              their character in cities like Marrakech, the underlying structure, the division by trade,
              the social rituals of buying and selling, the artisan workshops producing goods by hand,
              remains remarkably intact. Understanding how souks work, what to expect, and how to engage
              with them respectfully transforms a potentially overwhelming experience into one of the
              most rewarding adventures in all of travel.
            </p>
            <p>
              This guide covers everything you need to know: the best souks in each city, what to buy
              and what to pay, a step-by-step haggling strategy, common scams and how to sidestep them,
              etiquette tips, navigation advice, and practical information on getting your purchases
              safely home.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          TOP SOUKS BY CITY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top Souks by City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Five cities, five distinct market experiences. Each Moroccan souk has its own personality,
              specialties, and rhythm.
            </p>
          </div>

          <div className="space-y-12">
            {citySouks.map((cityData, cityIndex) => (
              <div key={cityData.city} className="card-moroccan overflow-hidden">
                {/* City Header with Image */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={cityData.image}
                    alt={`Souk scene in ${cityData.city}, Morocco`}
                    className="w-full h-full object-cover"
                    loading={cityIndex === 0 ? undefined : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-2">
                      {cityData.city}
                    </h3>
                    <p className="text-sm text-white/80 italic max-w-xl">
                      {cityData.atmosphere}
                    </p>
                  </div>
                </div>

                {/* City Overview */}
                <div className="p-6 md:p-8">
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {cityData.overview}
                  </p>

                  {/* Individual Souks */}
                  <div className="space-y-6">
                    {cityData.souks.map((souk) => (
                      <div key={souk.name} className="p-5 rounded-xl bg-[var(--surface-muted)] border border-[var(--border-light)]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                            <Store className="w-4 h-4" />
                          </div>
                          <h4 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                            {souk.name}
                          </h4>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                          {souk.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {souk.bestFor.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-medium"
                            >
                              <Star className="w-2.5 h-2.5" />
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                          <Lightbulb className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            <span className="font-semibold text-[var(--color-accent)]">Tip:</span> {souk.tip}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT TO BUY (WITH PRICE RANGES)
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Buy &amp; How Much to Pay
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Seven product categories with honest price ranges in Moroccan dirhams (MAD). These are the
              prices you should aim for after negotiation, not the initial asking prices.
            </p>
          </div>

          <div className="space-y-8">
            {productCategories.map((category) => (
              <div key={category.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <Coins className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                        {category.name}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] font-medium">
                        Best in: {category.bestCity}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {category.description}
                  </p>

                  {/* Price Table */}
                  <div className="overflow-x-auto mb-5">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[var(--border-light)]">
                          <th className="text-left py-2.5 px-3 font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide">Item</th>
                          <th className="text-left py-2.5 px-3 font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide whitespace-nowrap">Price Range</th>
                          <th className="text-left py-2.5 px-3 font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide">Quality Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item) => (
                          <tr key={item.item} className="border-b border-[var(--border-light)]/50">
                            <td className="py-2.5 px-3 text-[var(--text-primary)] font-medium text-sm">{item.item}</td>
                            <td className="py-2.5 px-3 text-[var(--color-accent)] font-semibold text-sm whitespace-nowrap">{item.priceRange}</td>
                            <td className="py-2.5 px-3 text-[var(--text-secondary)] text-xs leading-relaxed">{item.qualityNote}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                    <Lightbulb className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--color-accent)]">Top tip:</span> {category.topTip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HAGGLING GUIDE (STEP BY STEP)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HandCoins className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Art of Haggling: Step-by-Step
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              An eight-step strategy for successful negotiation in Moroccan souks. Bargaining is not just
              expected, it is a respected social tradition. Here is how to do it well.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {hagglingSteps.map((step) => (
              <div key={step.step} className="card-moroccan p-5 md:p-6">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-lg shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="p-3 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-semibold text-[var(--color-primary)]">Example:</span> {step.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/art-moroccan-market-spices.webp" alt="Vibrant illustration of a Moroccan market spice stall with colorful pyramids of cumin, saffron, paprika, and ras el hanout displayed in traditional woven baskets" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ============================================================
          COMMON SCAMS IN SOUKS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Common Souk Scams &amp; How to Avoid Them
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Most souk interactions are honest, but awareness of these common tactics will help you
              shop with confidence and avoid unpleasant surprises.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {soukScams.map((scam) => (
              <div key={scam.title} className="card-moroccan p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                    scam.severity === 'high'
                      ? 'bg-red-100 text-red-600'
                      : scam.severity === 'medium'
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {scam.title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      scam.severity === 'high'
                        ? 'bg-red-100 text-red-700'
                        : scam.severity === 'medium'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {scam.severity} risk
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">How it works:</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scam.howItWorks}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--color-green)]/5 border border-[var(--color-green)]/15">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)]" />
                      <span className="text-xs font-semibold text-[var(--color-green)] uppercase tracking-wide">How to avoid:</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scam.howToAvoid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SOUK ETIQUETTE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Souk Etiquette
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Respecting local customs enhances your experience and earns you better treatment.
              Here are the essential do&apos;s and don&apos;ts for shopping in Moroccan souks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {etiquetteRules.map((rule) => (
              <div key={rule.title} className="card-moroccan p-6 md:p-8">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                  {rule.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--color-green)]/5 border border-[var(--color-green)]/15">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)]" />
                      <span className="text-xs font-semibold text-[var(--color-green)] uppercase tracking-wide">Do This</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule.doThis}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--color-secondary)]/5 border border-[var(--color-secondary)]/15">
                    <div className="flex items-center gap-2 mb-2">
                      <Ban className="w-4 h-4 text-[var(--color-secondary)]" />
                      <span className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide">Avoid This</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule.avoidThis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BEST TIMES TO VISIT SOUKS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Clock className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Times to Visit Souks
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              When you visit matters as much as where. Plan your souk time strategically for the
              best experience, the best prices, and the best light.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {visitTimes.map((time) => (
              <div key={time.timeSlot} className="card-moroccan p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {time.timeSlot.includes('Morning') ? (
                      <Sun className="w-5 h-5" />
                    ) : time.timeSlot.includes('Evening') ? (
                      <Moon className="w-5 h-5" />
                    ) : time.timeSlot.includes('Friday') ? (
                      <BookOpen className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {time.timeSlot}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)] font-medium">
                      Crowds: {time.crowdLevel}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {time.description}
                </p>
                <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                  <ThumbsUp className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--color-primary)]">Best for:</span> {time.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW TO NAVIGATE WITHOUT GETTING LOST
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              How to Navigate Without Getting Lost
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The medinas of Fes (9,000+ alleyways) and Marrakech (thousands of winding passages)
              are designed to disorient. These tips will keep you on track, or at least help you
              enjoy being lost.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {navigationTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-5 md:p-6 flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5 font-[family-name:var(--font-display)]">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SHIPPING PURCHASES HOME
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Truck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shipping Your Purchases Home
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Found that perfect oversized lantern or six-meter Berber rug? Here is how to get
              your treasures home safely.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {shippingOptions.map((option) => (
              <div key={option.title} className="card-moroccan p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Package className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {option.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {option.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[var(--border-light)]">
                  <div className="flex items-center gap-1.5">
                    <CircleDollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--color-accent)]">Cost:</span> {option.cost}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--color-primary)]">Best for:</span> {option.bestFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Customs Note */}
          <div className="max-w-4xl mx-auto mt-6">
            <div className="card-moroccan p-5 md:p-6 border-l-4 border-l-[var(--color-accent)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                    Customs &amp; Import Regulations
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Most countries allow personal-use quantities of crafts duty-free. The EU allows up
                    to 430 euros in goods duty-free for air travelers. The US allows $800 per person.
                    Leather goods, plant-based products (argan oil, straw baskets), and items claimed
                    as antiques may have specific import requirements. Keep all receipts organized, as
                    customs officers may request them. Research your home country regulations before
                    making large purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          QUALITY VS TOURIST TRAP
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Eye className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Quality vs Tourist Trap: How to Tell
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The single most important skill for souk shopping is distinguishing genuine, handmade
              Moroccan products from mass-produced imitations imported from China. Here are the
              telltale signs for each product category.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {qualityMarkers.map((marker) => (
              <div key={marker.category} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {marker.category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--color-green)]/5 border border-[var(--color-green)]/15">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)]" />
                      <span className="text-xs font-semibold text-[var(--color-green)] uppercase tracking-wide">Genuine Quality</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{marker.genuine}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--color-secondary)]/5 border border-[var(--color-secondary)]/15">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-[var(--color-secondary)]" />
                      <span className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide">Tourist Trap</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{marker.touristTrap}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Quality Advice */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-6 md:p-8">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                Three Universal Rules for Spotting Quality
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">If the price seems too good to be true, it is.</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      A &quot;handmade Berber rug&quot; for 200 MAD is not handmade. A &quot;leather bag&quot; for 50 MAD is not real leather.
                      Quality craftsmanship costs money because it takes time and skill. Be willing to pay fair prices for genuine products.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Visit workshops and cooperatives first.</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      Seeing how products are made, from raw materials to finished goods, is the ultimate education in quality.
                      Government-run Ensemble Artisanals and women cooperatives offer transparent, fixed-price shopping that
                      calibrates your expectations before entering the free-market chaos of the souks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Engage all your senses.</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      Smell the leather, feel the weight of the brass, rub the fabric, flex the slippers. Quality
                      reveals itself through physical interaction, not visual inspection alone. Mass-produced goods
                      feel light, smell synthetic, and lack the sensory richness of genuine handcraft.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Related Guides
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Continue planning your Morocco trip with these companion guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-5 group hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]">
                  Read guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
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
            Ready to Explore the Souks of Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Browse our city guides for detailed medina maps and local tips, or discover guided souk
            tours led by expert local guides who know every hidden alleyway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/crafts"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Crafts &amp; Artisans Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

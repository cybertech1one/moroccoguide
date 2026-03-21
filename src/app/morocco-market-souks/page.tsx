import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  ShoppingBag,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Shield,
  Compass,
  Palette,
  Scale,
  Calendar,
  Scissors,
  Layers,
  Store,
  HandCoins,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Souks & Markets in Morocco 2026 | Complete Shopping Guide',
  description:
    'Explore Morocco\'s best souks and markets city by city. Marrakech souk Semmarine, Fes tanneries, Essaouira thuya wood, Chefchaouen crafts, and more. Haggling tips, prices, specialty souks, and weekly rural markets.',
  keywords: [
    'morocco souks',
    'best markets morocco',
    'moroccan souk guide',
    'marrakech souk',
    'souk semmarine',
    'fes tanneries',
    'morocco shopping guide',
    'moroccan market shopping',
    'haggling morocco',
    'morocco carpet souk',
    'spice souk morocco',
    'leather souk fes',
    'essaouira market',
    'chefchaouen souk',
    'tangier grand socco',
    'morocco weekly markets',
    'rural souks morocco',
    'moroccan handicrafts',
    'morocco artisan shopping',
    'medina shopping morocco',
    'morocco souk tips',
    'moroccan souvenir guide',
  ],
  openGraph: {
    title: 'Best Souks & Markets in Morocco 2026 | Complete Shopping Guide',
    description:
      'City-by-city guide to Morocco\'s legendary souks and markets. Marrakech, Fes, Essaouira, Chefchaouen, Tangier, and beyond. Prices, haggling tips, and insider knowledge.',
    url: `${BASE_URL}/morocco-market-souks`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful spice pyramids and handcrafted goods in a traditional Moroccan souk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Souks & Markets in Morocco 2026 | Shopping Guide',
    description:
      'Complete guide to Morocco\'s souks and markets. Marrakech, Fes, Essaouira, Chefchaouen, Tangier. Haggling tips, prices, and what to buy in each city.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-market-souks` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-market-souks`,
  name: 'Best Souks & Markets in Morocco 2026 | Complete Shopping Guide',
  description:
    'Comprehensive guide to Morocco\'s best souks and markets. City-by-city breakdown of Marrakech, Fes, Essaouira, Chefchaouen, Tangier, Meknes, and Rabat souks with prices, haggling tips, and specialty market guides.',
  url: `${BASE_URL}/morocco-market-souks`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-market-souks`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Souks & Markets Guide', item: `${BASE_URL}/morocco-market-souks` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a souk in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A souk is a traditional open-air marketplace found throughout Morocco, typically located inside the old walled medina of a city. Souks are organized by trade — one alley for leather goods, another for spices, another for metalwork. They have operated for centuries and remain the primary shopping destination for both locals and visitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is haggling expected in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, haggling is expected and considered part of the shopping culture. The initial asking price is typically 2-4 times the actual value. Start at about 40% of the quoted price and work toward a middle ground. Fixed-price shops (ensemble artisanal) exist in most cities if you prefer not to negotiate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best souvenirs to buy in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top souvenirs include leather goods from Fes, argan oil from Essaouira cooperatives, hand-woven carpets and kilims, ceramic tagines and bowls from Fes and Safi, brass and copper lanterns, thuya wood boxes from Essaouira, saffron and spice blends, and hand-embroidered textiles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan souk is the best for first-time visitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech\'s Jemaa el-Fnaa and Souk Semmarine are the most accessible for first-time visitors. The souks radiate from the main square, are well-trafficked, and offer the widest range of goods. For a calmer introduction, Essaouira\'s compact medina has organized souks without the intensity of Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do Moroccan souks open and close?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most souks open between 9:00-10:00 AM and stay open until 7:00-8:00 PM. Many close for a break between 1:00-3:00 PM. Friday afternoons are quieter as some vendors close for prayers. During Ramadan, hours shift — many shops open later and stay open well past midnight.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Moroccan souks safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan souks are generally safe, but petty theft and scams do occur. Keep your valuables in a front pocket or crossbody bag. Watch for fake guides who lead you to shops for commission. Avoid flashing expensive cameras or jewelry. Stick to main alleys if you are unfamiliar with the area, and use your phone GPS if you get lost.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much money should I bring to a Moroccan souk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring cash in small denominations (20, 50, 100 MAD notes). Budget from 200-500 MAD for small souvenirs and spices, from 500-2,000 MAD for leather bags or ceramics, and from 2,000-15,000 MAD for quality carpets. Most souk vendors accept cash only, though some larger carpet and leather shops now take cards.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SOUKS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const souksByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    overview: 'The undisputed capital of Moroccan souk culture. Marrakech\'s medina contains over 3,000 shops spread across dozens of interconnected souks, all radiating from Jemaa el-Fnaa square. This is where most visitors get their first taste of souk shopping, and the sheer scale is staggering.',
    souks: [
      {
        name: 'Souk Semmarine',
        specialty: 'Textiles, clothing, and general goods',
        description: 'The main artery of the Marrakech souks. A wide, covered passageway running north from Jemaa el-Fnaa, packed with shops selling everything from djellabas and kaftans to leather bags and ceramics. This is where you start.',
        priceRange: 'From 30 MAD for scarves to 2,000 MAD for kaftans',
      },
      {
        name: 'Souk el-Attarine',
        specialty: 'Spices, herbs, and traditional cosmetics',
        description: 'The spice souk fills the air with cumin, saffron, ras el hanout, and dried roses. Vendors stack their spices in perfect pyramids. Also sells savon beldi, kohl, and traditional beauty products. Prices here require sharp bargaining.',
        priceRange: 'From 10 MAD for common spices to 30 MAD/gram for saffron',
      },
      {
        name: 'Souk Chouari',
        specialty: 'Woodworking and carpentry',
        description: 'Carpenters and woodworkers produce cedar furniture, picture frames, chess sets, and decorative screens. The smell of fresh cedar fills the narrow passages. Watch artisans carve geometric patterns by hand using techniques unchanged for generations.',
        priceRange: 'From 50 MAD for small items to 5,000+ MAD for furniture',
      },
      {
        name: 'Souk Haddadine',
        specialty: 'Metalwork and lanterns',
        description: 'The blacksmiths\' and metalworkers\' quarter. Brass and wrought-iron lanterns, trays, teapots, and decorative mirrors fill every shop. The clang of hammers on metal is constant. Marrakech\'s iconic pierced-metal lanterns originate here.',
        priceRange: 'From 80 MAD for small lanterns to 3,000+ MAD for large pieces',
      },
      {
        name: 'Souk des Teinturiers',
        specialty: 'Dyed fabrics and yarns',
        description: 'Skeins of freshly dyed wool and silk hang overhead in every color imaginable. The dyers\' souk is one of the most photographed spots in Marrakech. Smaller than its Fes counterpart but equally striking.',
        priceRange: 'From 20 MAD for yarn skeins',
      },
    ],
  },
  {
    city: 'Fes',
    icon: Award,
    overview: 'Fes el-Bali is the world\'s largest car-free urban area, and its souk network predates Marrakech by centuries. The medina of Fes holds over 9,000 alleyways and some of Morocco\'s most specialized artisan quarters. Shopping here feels like stepping into the 14th century.',
    souks: [
      {
        name: 'Talaa Kebira (Grand Talaa)',
        specialty: 'Main commercial artery — everything',
        description: 'The main downhill street from Bab Boujeloud to the Qarawiyyin Mosque. Shops line both sides selling textiles, leather, brass, ceramics, and food. This single street gives you a cross-section of everything Fes makes.',
        priceRange: 'Varies by category',
      },
      {
        name: 'Chouara Tannery',
        specialty: 'Leather production and sales',
        description: 'The most famous tannery in Morocco, operating since the 11th century. Hundreds of stone vats filled with natural dyes — saffron for yellow, poppy for red, indigo for blue, mint for green. View from surrounding terraces, then buy jackets, bags, and slippers below.',
        priceRange: 'From 150 MAD for babouches to 2,500 MAD for leather jackets',
      },
      {
        name: 'Souk Dabbaghin (Dyers\' Quarter)',
        specialty: 'Dyed textiles and silk',
        description: 'Fassi dyers have produced Morocco\'s finest fabrics for 800 years. Silk scarves, embroidered tablecloths, and brocade fabrics in deep jewel tones. The quality of Fes textiles surpasses what you find elsewhere in Morocco.',
        priceRange: 'From 100 MAD for cotton scarves to 1,500 MAD for silk brocade',
      },
      {
        name: 'Place Seffarine',
        specialty: 'Copperwork and brassware',
        description: 'A small square where coppersmiths hammer trays, pots, and decorative objects by hand. Artisans sit cross-legged on the ground, shaping copper with rapid blows. The hammering echoes off the walls of the adjacent Qarawiyyin library.',
        priceRange: 'From 100 MAD for small trays to 4,000+ MAD for large platters',
      },
      {
        name: 'Souk el-Henna',
        specialty: 'Henna, cosmetics, and ceramics',
        description: 'A quiet square near the Qarawiyyin mosque. Sells henna powder, kohl, ghassoul clay, argan oil, and hand-painted Fassi ceramics in the distinctive blue-and-white pattern. More relaxed than other Fes souks.',
        priceRange: 'From 10 MAD for henna to 400 MAD for large ceramic bowls',
      },
    ],
  },
  {
    city: 'Essaouira',
    icon: Compass,
    overview: 'Essaouira\'s compact, grid-planned medina makes souk shopping easier than in Marrakech or Fes. The city is famous for two products: thuya wood and silver jewelry. The Atlantic fishing port also means superb fresh seafood markets. Less pressure, more relaxed bargaining.',
    souks: [
      {
        name: 'Thuya Wood Workshops',
        specialty: 'Thuya and cedar wood crafts',
        description: 'Essaouira is Morocco\'s center for thuya wood carving. The aromatic wood, native to the region, gets shaped into boxes, chess sets, picture frames, and furniture. Visit workshops on Rue Laalouj to see craftsmen at work and buy direct.',
        priceRange: 'From 50 MAD for small boxes to 5,000+ MAD for furniture',
      },
      {
        name: 'Jewelers\' Souk',
        specialty: 'Silver and Berber jewelry',
        description: 'Essaouira has a long tradition of silver jewelry making, rooted in the city\'s historic Jewish community. Berber-style silver bracelets, fibulas (cloak pins), rings, and Hamsa pendants. Quality is high and prices are fair compared to Marrakech.',
        priceRange: 'From 80 MAD for simple rings to 1,500 MAD for elaborate pieces',
      },
      {
        name: 'Fish Market (Port)',
        specialty: 'Fresh seafood',
        description: 'At the port, fishermen sell the morning catch directly. Sardines, sea bream, prawns, octopus, and lobster. Pick your fish and have it grilled at the adjacent stalls. This is not a souvenir market — it is where locals eat.',
        priceRange: 'From 30 MAD for grilled sardines to 200 MAD for lobster',
      },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Palette,
    overview: 'The Blue City\'s small medina offers a tranquil shopping experience. Artisans here specialize in wool blankets, goat cheese, and locally produced soaps. The blue-washed walls make every photo look incredible. Prices tend to be lower than Marrakech, and bargaining is gentler.',
    souks: [
      {
        name: 'Plaza Uta el-Hammam Area',
        specialty: 'Wool, leather, and local crafts',
        description: 'The main square and surrounding streets hold most of Chefchaouen\'s shops. Hand-woven wool blankets in bold stripes, goat leather bags, straw hats, and locally pressed olive oil. The Rif Mountain influence gives products here a distinct character.',
        priceRange: 'From 100 MAD for blankets to 500 MAD for leather bags',
      },
      {
        name: 'Artisan Quarter',
        specialty: 'Woven goods and natural cosmetics',
        description: 'Small workshops produce hand-loomed fabrics, crochet items, and lavender-based cosmetics. Also one of the best places to buy Rif Mountain honey and goat cheese from nearby farms. Everything is small-scale and authentic.',
        priceRange: 'From 30 MAD for soaps to 200 MAD for woven goods',
      },
    ],
  },
  {
    city: 'Tangier',
    icon: Building,
    overview: 'Tangier\'s medina sits between Europe and Africa, and the shopping reflects that dual identity. The Grand Socco and Petit Socco anchor two distinct market zones. Tangier is strong on antiques, contemporary art, and Andalusian-influenced crafts.',
    souks: [
      {
        name: 'Grand Socco (Place du 9 Avril)',
        specialty: 'General market and produce',
        description: 'The large square at the medina entrance. Fruit and vegetable sellers, flower stalls, and surrounding shops selling textiles and household goods. Less touristy than Marrakech — this is where Tangier residents do their daily shopping.',
        priceRange: 'From 5 MAD for produce to 500 MAD for textiles',
      },
      {
        name: 'Petit Socco (Souk Dakhel)',
        specialty: 'Antiques, art, and cafes',
        description: 'A tiny square deep in the medina, once the heart of Tangier\'s international zone. Surrounded by antique shops, art galleries, and historic cafes. Look for vintage Moroccan posters, old maps, Berber jewelry, and mid-century furniture.',
        priceRange: 'From 100 MAD for prints to 5,000+ MAD for antiques',
      },
      {
        name: 'Rue des Siaghine',
        specialty: 'Gold and silver jewelry',
        description: 'The goldsmiths\' street runs between the Grand Socco and Petit Socco. Dozens of jewelers sell gold and silver pieces, many influenced by Spanish and Andalusian design traditions unique to northern Morocco.',
        priceRange: 'From 200 MAD for silver to 5,000+ MAD for gold pieces',
      },
    ],
  },
  {
    city: 'Meknes',
    icon: Store,
    overview: 'Often overlooked by tourists, Meknes has one of Morocco\'s most authentic souk experiences. Place el-Hedim is the local equivalent of Marrakech\'s Jemaa el-Fnaa, but with a fraction of the crowds. Prices here are among the lowest in Morocco because vendors sell primarily to locals.',
    souks: [
      {
        name: 'Place el-Hedim Market',
        specialty: 'Food, spices, and daily goods',
        description: 'The grand square facing Bab Mansour, surrounded by food stalls, juice vendors, and shops. In the evenings, street food vendors set up grills and sell everything from brochettes to snail soup. The adjacent covered market sells olives, preserved lemons, and dried fruits.',
        priceRange: 'From 5 MAD for juice to 100 MAD for spice sets',
      },
      {
        name: 'Souk Nejjarine',
        specialty: 'Woodworking and painted furniture',
        description: 'Meknes woodworkers produce painted cedar furniture and decorative panels. The Meknassi style uses bold geometric patterns in green, red, and gold. Smaller and less crowded than equivalent souks in Fes.',
        priceRange: 'From 200 MAD for small items to 8,000+ MAD for furniture',
      },
    ],
  },
  {
    city: 'Rabat',
    icon: Shield,
    overview: 'Morocco\'s capital has a refined medina with less aggressive sales tactics. The carpet souk on Rue des Consuls is the highlight. Rabat is also home to high-quality ensemble artisanal shops where prices are fixed and quality is government-certified.',
    souks: [
      {
        name: 'Rue des Consuls',
        specialty: 'Carpets and antiques',
        description: 'A wide, elegant street in the medina lined with carpet dealers and antique shops. Rabat carpets are known for their fine weave and deep burgundy tones. The atmosphere is calmer than Marrakech, and sellers are less pushy.',
        priceRange: 'From 800 MAD for small kilims to 15,000+ MAD for Rabati carpets',
      },
      {
        name: 'Ensemble Artisanal',
        specialty: 'Fixed-price handicrafts',
        description: 'A government-run complex near the medina where artisans sell directly. Fixed prices — no haggling required. Leather goods, pottery, jewelry, and textiles. Useful as a price benchmark before you bargain in the souks.',
        priceRange: 'Fixed prices, clearly labeled',
      },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SPECIALTY SOUKS
   ═══════════════════════════════════════════════════════════════ */

const specialtySouks = [
  {
    name: 'Spice Souks',
    icon: Layers,
    bestCities: 'Marrakech, Fes, Meknes',
    whatToBuy: [
      'Ras el hanout — Morocco\'s signature spice blend, each vendor has a secret recipe with 15-30 ingredients',
      'Saffron — Moroccan saffron from Taliouine is world-class. Expect from 25-40 MAD per gram for genuine threads',
      'Cumin, paprika, turmeric — sold loose from burlap sacks at a fraction of Western prices',
      'Dried roses and orange blossom — used in cooking and cosmetics',
    ],
    tip: 'Buy saffron only as whole threads, never powder. Powdered saffron is frequently mixed with safflower or turmeric. Genuine saffron threads should be deep red with no yellow or orange tips.',
  },
  {
    name: 'Leather Souks',
    icon: ShoppingBag,
    bestCities: 'Fes, Marrakech, Taroudant',
    whatToBuy: [
      'Babouches (traditional slippers) — from 80 MAD for plain, from 200 MAD for embroidered',
      'Leather bags — messenger bags, crossbody bags, and backpacks from 200 MAD',
      'Poufs — unstuffed leather ottomans from 250 MAD, stuff them with clothes for the flight home',
      'Belts and wallets — from 60 MAD for genuine leather',
    ],
    tip: 'Fes leather comes from the Chouara tannery, the oldest in the world. The natural dyeing process (using pomegranate, saffron, mint, and indigo) produces leather that ages beautifully. Avoid chemically treated leather, which is cheaper but cracks within months.',
  },
  {
    name: 'Carpet Souks',
    icon: Layers,
    bestCities: 'Marrakech, Rabat, Ouarzazate, Midelt',
    whatToBuy: [
      'Berber carpets — hand-knotted wool rugs from the Middle Atlas, from 1,500 MAD for small sizes',
      'Kilims — flat-woven rugs, lighter and cheaper than knotted carpets, from 400 MAD',
      'Hanbels — thin, blanket-like textiles with bold geometric patterns, from 300 MAD',
      'Boucherouite rugs — recycled fabric rugs, colorful and modern, from 600 MAD',
    ],
    tip: 'A genuine hand-knotted Berber carpet takes weeks to produce. Turn it over — hand-knotted rugs show the pattern clearly on the back; machine-made ones look blurry. Ask the seller to fold the carpet and check the density of knots per square inch. Higher knot count means higher quality and price.',
  },
  {
    name: 'Jewelry Souks',
    icon: Gem,
    bestCities: 'Essaouira, Tiznit, Fes, Tangier',
    whatToBuy: [
      'Berber silver — fibulas, bracelets, rings, and necklaces with Amazigh symbols',
      'Hamsa (Hand of Fatima) pendants — from 50 MAD in silver',
      'Coral and amber — traditional Berber wedding jewelry from southern Morocco',
      'Gold — available in Tangier and Fes souks, priced by weight plus craftsmanship',
    ],
    tip: 'Tiznit, south of Agadir, is Morocco\'s silver capital. Prices there are 30-50% lower than in Marrakech for identical pieces. In Essaouira, the Jewish heritage influenced unique designs you won\'t find elsewhere. Always test silver with a magnet — real silver is not magnetic.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING TIPS
   ═══════════════════════════════════════════════════════════════ */

const shoppingTips = [
  {
    title: 'The Art of Haggling',
    icon: HandCoins,
    content: 'Start at about 40% of the asking price. The seller will act shocked — this is normal. Go back and forth 3-5 times. A fair deal usually lands at 50-60% of the first quoted price. Walk away if the price does not drop — the seller will often call you back with a lower offer. Never haggle unless you intend to buy.',
  },
  {
    title: 'Carry Small Bills',
    icon: DollarSign,
    content: 'Bring plenty of 20, 50, and 100 MAD notes. Large bills (200 MAD) are hard to break in souks. Vendors may claim they have no change to avoid lowering the price. Having exact change strengthens your bargaining position.',
  },
  {
    title: 'Visit Early or Late',
    icon: Clock,
    content: 'Mornings (9:00-11:00 AM) bring the freshest goods and the calmest crowds. Late afternoon (4:00-6:00 PM) is when vendors are motivated to make end-of-day sales and prices soften. Midday heat empties the souks from 1:00-3:00 PM — some shops close entirely.',
  },
  {
    title: 'Use Ensemble Artisanal First',
    icon: Scale,
    content: 'Every major Moroccan city has a government-run Ensemble Artisanal with fixed prices. Visit this first to understand fair market value before entering the souks. It takes the guesswork out of haggling and protects you from overpaying.',
  },
  {
    title: 'Watch for Fakes',
    icon: AlertTriangle,
    content: 'Common fakes include saffron (mixed with safflower), argan oil (diluted with cheaper oils), leather (bonded or synthetic), and fossils (plaster casts painted to look old). If a price seems too good for a premium product, it probably is. Buy saffron threads not powder, test leather by smell, and buy argan oil from cooperatives.',
  },
  {
    title: 'Know What Ships Well',
    icon: ShoppingBag,
    content: 'Spices, leather goods, textiles, and jewelry travel well in luggage. Ceramics and lanterns are fragile — ask the vendor to pack them properly or ship directly. Most carpet dealers offer international shipping (from 300 MAD for standard post, from 800 MAD for DHL). Get a receipt with the vendor\'s details.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WEEKLY RURAL SOUKS
   ═══════════════════════════════════════════════════════════════ */

const weeklySouks = [
  {
    day: 'Monday',
    location: 'Souk el-Had, Tiznit',
    description: 'One of the largest weekly souks in southern Morocco. Over 3,000 stalls selling silver jewelry, leather, food, livestock, and household goods. This is where rural Berber communities from the Anti-Atlas come to trade.',
  },
  {
    day: 'Tuesday',
    location: 'Souk el-Tleta, Rissani',
    description: 'The gateway souk to the Sahara. Rissani\'s Tuesday market draws nomadic and semi-nomadic traders selling dates, camel leather, desert herbs, and fossils from the surrounding Erg Chebbi region.',
  },
  {
    day: 'Wednesday',
    location: 'Souk el-Arba, Ouarzazate region',
    description: 'A regional gathering point for communities along the Draa Valley. Dried fruits, almonds, carpets, and agricultural produce dominate. The souk has traded continuously for centuries along the ancient caravan route.',
  },
  {
    day: 'Thursday',
    location: 'Souk el-Khamis, Sefrou (near Fes)',
    description: 'A charming small-town market outside Fes. Famous for its cherry season (June), olives, and locally produced honey. Fewer tourists, better prices, and a genuine glimpse of rural Moroccan commerce.',
  },
  {
    day: 'Saturday',
    location: 'Souk el-Sebt, Had Draa (near Essaouira)',
    description: 'A sprawling rural souk where argan oil cooperatives sell directly. Also excellent for local vegetables, cactus fruit, and handwoven baskets. Arrive before 10:00 AM for the best selection.',
  },
  {
    day: 'Sunday',
    location: 'Souk el-Had, Agadir',
    description: 'Morocco\'s largest permanent covered market. Over 6,000 stalls under a concrete roof. Organized into sections for spices, leather, clothing, electronics, and produce. Open daily but busiest on Sundays when rural vendors join.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MODERN MARKETS
   ═══════════════════════════════════════════════════════════════ */

const modernMarkets = [
  {
    name: 'Morocco Mall, Casablanca',
    type: 'Luxury Mall',
    description: 'Africa\'s second-largest shopping mall. International brands, a massive aquarium, an IMAX cinema, and Moroccan designer boutiques. The artisan floor stocks high-end Moroccan handicrafts at fixed prices. Air-conditioned and hassle-free.',
  },
  {
    name: 'Menara Mall, Marrakech',
    type: 'Modern Mall',
    description: 'Marrakech\'s main modern shopping center, located in the new city (Gueliz). Mix of international brands and Moroccan chains. Useful for stocking up on essentials or escaping the medina heat.',
  },
  {
    name: 'Aswak Assalam (Supermarkets)',
    type: 'Supermarket Chain',
    description: 'Morocco\'s leading supermarket chain with branches in every major city. Fixed prices on spices, argan oil, olives, and Moroccan food products. A reliable option for edible souvenirs at known-good prices.',
  },
  {
    name: '33 Rue Majorelle, Marrakech',
    type: 'Concept Store',
    description: 'A curated design shop near the Jardin Majorelle. Sells contemporary Moroccan design — ceramics, textiles, and home decor by local artisans. Fixed prices, beautifully packaged, and a good alternative to souk haggling.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMarketSouksPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Colorful spice pyramids and handcrafted lanterns in a traditional Moroccan souk"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
            Best Souks &amp; Markets in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-4 font-[family-name:var(--font-heading)]">
            A complete city-by-city guide to Morocco&apos;s legendary markets. What to buy, where to find it, how to haggle, and what to avoid.
          </p>
          <p className="text-sm text-white/70">
            Updated March 2026 &middot; Prices in Moroccan Dirham (MAD)
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Souks &amp; Markets Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
              What Is a Souk?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              A souk is a traditional open-air marketplace, and in Morocco, souks are the beating heart of every medina. The word comes from the Arabic &quot;suq,&quot; meaning market. For centuries, these labyrinthine networks of covered alleyways have served as the primary commercial, social, and cultural gathering points for Moroccan communities.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Moroccan souks are organized by trade. One alley sells nothing but leather. The next is all spices. Turn a corner and you are surrounded by brass lanterns. This trade-based organization dates back to medieval guild systems, and most souks still follow this layout today.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Shopping in a Moroccan souk is not a Western retail experience. There are no price tags, no returns policies, no customer service desks. Prices are negotiated through haggling, relationships matter, and the process of buying is as important as the product. Understanding this mindset transforms the experience from stressful to genuinely enjoyable.
            </p>

            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-accent)] mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Quick orientation</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Morocco has two types of souks: <strong>permanent urban souks</strong> inside city medinas (open daily) and <strong>weekly rural souks</strong> held on specific days in towns and villages across the countryside. Both are worth experiencing, and this guide covers both.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Souks by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Souks by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has a distinct souk character. Here is what to expect and what to buy in each destination.
          </p>

          <div className="space-y-12">
            {souksByCity.map((cityData) => {
              const CityIcon = cityData.icon;
              return (
                <div key={cityData.city} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-6">
                    <div className="flex items-center gap-3">
                      <CityIcon className="w-7 h-7 text-white" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                        {cityData.city}
                      </h3>
                    </div>
                    <p className="text-white/85 text-sm mt-3 max-w-3xl leading-relaxed">
                      {cityData.overview}
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cityData.souks.map((souk) => (
                        <div key={souk.name} className="bg-[var(--surface-muted)] rounded-xl p-5">
                          <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                            {souk.name}
                          </h4>
                          <p className="text-xs text-[var(--color-accent)] font-medium mb-3 flex items-center gap-1">
                            <Scissors className="w-3 h-3" />
                            {souk.specialty}
                          </p>
                          <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                            {souk.description}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                            <DollarSign className="w-3 h-3 text-[var(--color-gold)]" />
                            {souk.priceRange}
                          </div>
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

      {/* ── Specialty Souks ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Specialty Souks: What to Buy &amp; Where
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s souks are organized by trade. Here are the four most popular specialty categories and how to shop them.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialtySouks.map((specialty) => {
              const SpecIcon = specialty.icon;
              return (
                <div key={specialty.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <SpecIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {specialty.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        Best in: {specialty.bestCities}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {specialty.whatToBuy.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Insider tip:</span> {specialty.tip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Shopping Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Souk Shopping Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to help you shop smarter, avoid common mistakes, and get the best value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shoppingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <TipIcon className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Weekly Rural Souks ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Weekly Rural Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond the city medinas, hundreds of weekly rural markets operate across Morocco. Each is named after its day of the week in Arabic (el-Had = Sunday, el-Tleta = Tuesday, el-Arba = Wednesday, el-Khamis = Thursday, el-Sebt = Saturday).
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Rural souks typically run from sunrise to early afternoon. Arrive early for the best selection.
          </p>

          <div className="space-y-4">
            {weeklySouks.map((souk) => (
              <div key={souk.day} className="card-moroccan p-5 flex gap-4 items-start">
                <div className="w-16 h-16 rounded-xl bg-[var(--color-accent)]/10 flex flex-col items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-[var(--color-accent)] mb-0.5" />
                  <span className="text-xs font-bold text-[var(--color-accent)]">{souk.day.slice(0, 3).toUpperCase()}</span>
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {souk.location}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {souk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modern Markets ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Store className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Modern Markets &amp; Fixed-Price Shopping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not everyone enjoys haggling. These modern alternatives offer Moroccan goods at fixed prices in comfortable settings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modernMarkets.map((market) => (
              <div key={market.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Building className="w-4 h-4 text-[var(--color-accent)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {market.name}
                  </h3>
                </div>
                <span className="inline-block text-xs px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium mb-3">
                  {market.type}
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {market.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Reference Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Price Reference
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fair prices for common souk purchases after haggling. Use these as a guideline — prices vary by quality, location, and season.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Seasonal pricing applies. Peak tourist months (October-April) push prices up 20-40% in Marrakech and Fes.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Item</div>
              <div className="p-3 px-4">Fair Price (after haggling)</div>
              <div className="p-3 px-4">Where to Buy</div>
            </div>
            {[
              { item: 'Babouches (leather slippers)', price: 'From 80-200 MAD', where: 'Fes, Marrakech' },
              { item: 'Leather crossbody bag', price: 'From 200-600 MAD', where: 'Fes, Marrakech' },
              { item: 'Leather pouf (unstuffed)', price: 'From 250-500 MAD', where: 'Marrakech, Fes' },
              { item: 'Small Berber carpet (1x1.5m)', price: 'From 1,500-4,000 MAD', where: 'Marrakech, Rabat, Ouarzazate' },
              { item: 'Kilim rug (flat woven)', price: 'From 400-1,200 MAD', where: 'Marrakech, Midelt' },
              { item: 'Silver Berber bracelet', price: 'From 100-400 MAD', where: 'Essaouira, Tiznit' },
              { item: 'Ceramic tagine (decorative)', price: 'From 80-250 MAD', where: 'Fes, Safi' },
              { item: 'Brass lantern (medium)', price: 'From 200-800 MAD', where: 'Marrakech' },
              { item: 'Thuya wood box', price: 'From 50-300 MAD', where: 'Essaouira' },
              { item: 'Argan oil (1 liter, cosmetic)', price: 'From 250-400 MAD', where: 'Essaouira cooperatives' },
              { item: 'Saffron (1 gram)', price: 'From 25-40 MAD', where: 'Taliouine, Fes, Marrakech' },
              { item: 'Ras el hanout blend (100g)', price: 'From 20-50 MAD', where: 'Any spice souk' },
            ].map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.item}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{row.price}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{row.where}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety & Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety &amp; Etiquette in the Souks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Shield className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Keep Valuables Secure
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Use a crossbody bag with a zip closure. Keep your phone in a front pocket. Leave expensive jewelry and watches at your hotel. Pickpocketing happens most in crowded areas like Jemaa el-Fnaa and the main souk arteries.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Decline Fake Guides Firmly
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Unofficial guides approach tourists at medina entrances offering to &quot;show you the way.&quot; They earn commission from shops they lead you to, which gets added to your purchase price. Say &quot;la shukran&quot; (no thank you) and keep walking. If you want a guide, hire one through your riad or hotel.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Navigation Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Download offline maps (Maps.me or Google Maps offline) before entering the medina. Major souks have signage pointing to landmarks. If you get lost, head downhill (in Fes) or ask any shopkeeper for directions to the main square. Locals are helpful when asked directly.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Palette className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ask before photographing people, especially shopkeepers. Some expect a small tip (from 5-10 MAD) for photos. Photographing goods is usually fine. At the Fes tanneries, the terrace viewing areas are free, but guides will expect a tip of from 20-50 MAD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is a souk in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A souk is a traditional open-air marketplace found throughout Morocco, typically located inside the old walled medina of a city. Souks are organized by trade — one alley for leather goods, another for spices, another for metalwork. They have operated for centuries and remain the primary shopping destination for both locals and visitors.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is haggling expected in Moroccan souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, haggling is expected and considered part of the shopping culture. The initial asking price is typically 2-4 times the actual value. Start at about 40% of the quoted price and work toward a middle ground. Fixed-price shops (ensemble artisanal) exist in most cities if you prefer not to negotiate.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best souvenirs to buy in Moroccan souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Top souvenirs include leather goods from Fes (bags, babouches, poufs), argan oil from Essaouira cooperatives, hand-woven carpets and kilims, ceramic tagines and bowls from Fes and Safi, brass and copper lanterns from Marrakech, thuya wood boxes from Essaouira, saffron and spice blends, and hand-embroidered textiles.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which Moroccan souk is the best for first-time visitors?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech&apos;s Jemaa el-Fnaa and Souk Semmarine are the most accessible for first-time visitors. The souks radiate from the main square, are well-trafficked, and offer the widest range of goods. For a calmer introduction, Essaouira&apos;s compact medina has organized souks without the intensity of Marrakech.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What time do Moroccan souks open and close?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most souks open between 9:00-10:00 AM and stay open until 7:00-8:00 PM. Many close for a break between 1:00-3:00 PM. Friday afternoons are quieter as some vendors close for prayers. During Ramadan, hours shift — many shops open later and stay open well past midnight.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are Moroccan souks safe for tourists?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccan souks are generally safe, but petty theft and scams do occur. Keep your valuables in a front pocket or crossbody bag. Watch for fake guides who lead you to shops for commission. Avoid flashing expensive cameras or jewelry. Stick to main alleys if you are unfamiliar with the area, and use your phone GPS if you get lost.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much money should I bring to a Moroccan souk?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Bring cash in small denominations (20, 50, 100 MAD notes). Budget from 200-500 MAD for small souvenirs and spices, from 500-2,000 MAD for leather bags or ceramics, and from 2,000-15,000 MAD for quality carpets. Most souk vendors accept cash only, though some larger carpet and leather shops now take cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-cuisine-food-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Tagines, couscous, pastilla, and street food. What to eat, where to eat, and what each dish costs.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Marrakech — sights, riads, restaurants, day trips, and getting around the Red City.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Travel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to travel Morocco on a budget. Daily costs, money-saving tips, and where to splurge vs. save.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 zellige-border">
        <div className="container-morocco text-center max-w-2xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Plan Your Moroccan Shopping Adventure
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            From the labyrinthine souks of Fes to the artisan workshops of Essaouira, Morocco offers some of the most memorable shopping experiences on earth. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-travel-planning"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Plan Your Trip
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/fes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-medium hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Explore Fes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

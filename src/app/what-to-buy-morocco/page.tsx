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
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  ShoppingBag,
  Scissors,
  Palette,
  Sparkles,
  Package,
  Scale,
  HandCoins,
  Truck,
  MessageCircle,
  Footprints,
  Droplets,
  Flower2,
  Lamp,
  Gift,
  Shell,
  Coffee,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'What to Buy in Morocco 2026 | 11 Best Souvenirs, Prices & Tips',
  description:
    'Discover the 11 best things to buy in Morocco: leather goods, ceramics, rugs, argan oil, spices, lanterns, babouche slippers, silver jewelry, textiles, tea sets, and fossils. Real prices in MAD, bargaining tips, and where to shop by city.',
  keywords: [
    'what to buy in Morocco',
    'Morocco souvenirs',
    'best things to buy Morocco',
    'Moroccan leather goods',
    'Moroccan ceramics',
    'Moroccan rugs',
    'argan oil Morocco',
    'Moroccan spices',
    'Moroccan lanterns',
    'babouche slippers Morocco',
    'Moroccan silver jewelry',
    'Moroccan textiles',
    'Moroccan tea set',
    'Morocco fossils',
    'bargaining Morocco',
    'Morocco shopping prices',
    'Morocco souvenir guide',
  ],
  alternates: {
    canonical: `${BASE_URL}/what-to-buy-morocco`,
  },
  openGraph: {
    title: 'What to Buy in Morocco 2026 | 11 Best Souvenirs & Prices',
    description:
      'The definitive guide to Moroccan souvenirs. Leather, ceramics, rugs, argan oil, spices, lanterns, babouche, jewelry, textiles, tea sets, and fossils with real prices and bargaining strategies.',
    url: `${BASE_URL}/what-to-buy-morocco`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/hero-shopping.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan souvenirs displayed in a traditional souk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Buy in Morocco | 11 Best Souvenirs & Prices',
    description:
      '11 must-buy Moroccan souvenirs with real MAD prices, bargaining tips, city-by-city shopping guide, and how to ship purchases home.',
    images: [`${BASE_URL}/images/hero-shopping.webp`],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/what-to-buy-morocco`,
  name: 'What to Buy in Morocco 2026 | 11 Best Souvenirs, Prices & Tips',
  description:
    'Discover the 11 best things to buy in Morocco with real prices in MAD, bargaining tips, and city-by-city shopping advice.',
  url: `${BASE_URL}/what-to-buy-morocco`,
  image: `${BASE_URL}/images/hero-shopping.webp`,
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
  mainEntityOfPage: `${BASE_URL}/what-to-buy-morocco`,
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
      { '@type': 'ListItem', position: 2, name: 'What to Buy in Morocco', item: `${BASE_URL}/what-to-buy-morocco` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best souvenirs to buy in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 11 best souvenirs from Morocco are leather goods (bags, poufs, babouche slippers), ceramics and pottery, handwoven rugs and carpets, argan oil, spices (especially ras el hanout and saffron), brass lanterns, babouche slippers, Berber silver jewelry, textiles and blankets, traditional tea sets, and fossils. Prices range from 20 MAD for spices to several thousand MAD for handwoven Beni Ourain rugs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I pay for souvenirs in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fair prices vary by item: babouche slippers from 80 MAD, leather bags from 200 MAD, argan oil from 80 MAD per 100ml, spices from 20 MAD per 100g, ceramics from 50 MAD, brass lanterns from 200 MAD, Berber silver jewelry from 100 MAD, and handwoven rugs from 500 MAD for kilims to 2,000+ MAD for Beni Ourain. Always bargain in souks; the first quoted price is typically 3-5 times the fair price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bargaining expected when shopping in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, bargaining is expected and even enjoyed in Moroccan souks. Start at 30-40% of the asking price, be friendly and patient, and use the walk-away technique if needed. Exceptions include supermarkets, pharmacies, restaurants, and government-run Ensemble Artisanal fixed-price shops.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which city in Morocco is best for shopping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes is best for leather goods and ceramics with lower prices. Marrakech has the widest variety and the most famous souks. Essaouira offers a relaxed atmosphere with great argan oil cooperatives and silver jewelry. Chefchaouen has unique Rif Mountain crafts, and Meknes is an underrated gem with excellent value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I ship large purchases home from Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You have four main options: Barid Al-Maghrib (Moroccan Post) from 150 MAD for small parcels (2-4 weeks), DHL/FedEx/UPS from 500 MAD (3-7 days), shop shipping services offered by established dealers, or carrying items in your luggage within airline weight limits. For carpets and fragile ceramics, courier services or shop shipping with insurance are recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I spot fake products in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common fakes include dyed safflower sold as saffron (real saffron has thin threads and a bitter taste), machine-made carpets labeled as handmade (check the back for knots), diluted argan oil (real argan absorbs quickly into skin), and plaster fossils (real fossils are heavy with natural color variations). Buy from established shops, cooperatives, and always inspect items carefully before purchasing.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 11 ITEMS TO BUY
   ═══════════════════════════════════════════════════════════════ */

const topItems = [
  {
    rank: 1,
    name: 'Leather Goods',
    icon: Footprints,
    price: 'From 80 MAD',
    bestCity: 'Fes',
    image: '/images/art-moroccan-leather.webp',
    description:
      'Morocco has produced world-renowned leather for over a thousand years. The tanneries of Fes, where hides are dyed in ancient stone vats using natural pigments, remain the gold standard. Look for bags, jackets, poufs, belts, wallets, and journal covers. Goatskin is softer and more supple; cowhide is sturdier for bags and belts.',
    topPicks: [
      { item: 'Leather pouf (unstuffed)', price: 'From 300 MAD' },
      { item: 'Crossbody bag', price: 'From 200 MAD' },
      { item: 'Custom leather jacket', price: 'From 800 MAD' },
      { item: 'Hand-tooled belt', price: 'From 100 MAD' },
    ],
    tip: 'Buy near the Chouara tannery in Fes for the best prices. Genuine leather has a rich, natural scent, not a chemical one. Poufs ship flat, unstuffed, for easy transport.',
  },
  {
    rank: 2,
    name: 'Ceramics & Pottery',
    icon: Palette,
    price: 'From 50 MAD',
    bestCity: 'Fes',
    image: '/images/art-moroccan-ceramics.webp',
    description:
      'Each Moroccan region has a signature ceramic style. Fes produces iconic cobalt blue and white geometric designs. Safi is known for colorful hand-painted pieces. Tamegroute in the south creates unique green-glazed pottery. Plates, tagines, bowls, and handcut zellige tiles all make unforgettable souvenirs.',
    topPicks: [
      { item: 'Fes blue plate (large)', price: 'From 150 MAD' },
      { item: 'Decorative tagine', price: 'From 80 MAD' },
      { item: 'Tamegroute vase', price: 'From 100 MAD' },
      { item: 'Zellige tile coaster set', price: 'From 120 MAD' },
    ],
    tip: 'Ask if a tagine is for cooking or display. Cooking tagines are unglazed and must be lead-free. Tap ceramics gently to check for cracks; a clear ring means solid quality.',
  },
  {
    rank: 3,
    name: 'Rugs & Carpets',
    icon: Crown,
    price: 'From 500 MAD',
    bestCity: 'Marrakech',
    image: '/images/art-moroccan-carpets.webp',
    description:
      'Moroccan carpets are coveted worldwide. Beni Ourain rugs feature minimalist cream-and-black geometric patterns. Azilal rugs are more colorful and abstract. Kilims are flat-woven and lighter to ship. Boucherouite rugs are recycled-fabric art pieces. Each tribal style tells a different story through its motifs and weaving technique.',
    topPicks: [
      { item: 'Beni Ourain rug (1.5x2m)', price: 'From 2,000 MAD' },
      { item: 'Azilal rug (small)', price: 'From 1,500 MAD' },
      { item: 'Kilim (flat-woven, 1x2m)', price: 'From 500 MAD' },
      { item: 'Boucherouite rug', price: 'From 800 MAD' },
    ],
    tip: 'Flip the rug over: handmade rugs show visible knots on the back. Machine-made ones have a flat, uniform backing. View rugs in natural light, not under the shop\'s flattering lamps.',
  },
  {
    rank: 4,
    name: 'Argan Oil',
    icon: Droplets,
    price: 'From 80 MAD',
    bestCity: 'Essaouira',
    image: '/images/art-argan-oil.webp',
    description:
      'Called liquid gold, argan oil is produced exclusively in southwestern Morocco. Cosmetic oil is light, nearly odorless, and cold-pressed from raw nuts. Culinary oil is darker with a rich, nutty flavor, pressed from roasted nuts. Buying from women\'s cooperatives ensures authenticity, fair prices, and supports local communities.',
    topPicks: [
      { item: 'Cosmetic argan oil (100ml)', price: 'From 80 MAD' },
      { item: 'Culinary argan oil (250ml)', price: 'From 120 MAD' },
      { item: 'Amlou (argan butter)', price: 'From 60 MAD' },
      { item: 'Prickly pear seed oil (15ml)', price: 'From 200 MAD' },
    ],
    tip: 'Real cosmetic argan oil absorbs into skin within a minute without leaving a greasy residue. If it sits on the surface, it is likely diluted or fake. Visit cooperatives near Essaouira for guaranteed purity.',
  },
  {
    rank: 5,
    name: 'Spices',
    icon: Flower2,
    price: 'From 20 MAD',
    bestCity: 'Marrakech',
    image: '/images/art-moroccan-spices.webp',
    description:
      'Morocco\'s spice souks overflow with color and aroma. Ras el hanout, the signature blend, can contain up to 30 ingredients. Saffron, cumin, paprika, turmeric, dried rosebuds, and herbal tea blends are all excellent buys. Spices are sold by weight and remarkably affordable compared to Western retail prices.',
    topPicks: [
      { item: 'Ras el hanout (100g)', price: 'From 30 MAD' },
      { item: 'Saffron (1g genuine)', price: 'From 20 MAD' },
      { item: 'Dried rosebuds (50g)', price: 'From 20 MAD' },
      { item: 'Herbal tea blend (100g)', price: 'From 25 MAD' },
    ],
    tip: 'Real saffron has thin red threads, tastes bitter, and turns water golden-yellow slowly. Fake saffron is thick, dyes water instantly red, and tastes sweet. Ask vendors to vacuum-seal bags for freshness.',
  },
  {
    rank: 6,
    name: 'Brass Lanterns',
    icon: Lamp,
    price: 'From 200 MAD',
    bestCity: 'Marrakech',
    image: '/images/hero-shopping.webp',
    description:
      'Moroccan lanterns cast mesmerizing geometric shadow patterns when lit. Hand-pierced brass or iron, they range from small table lanterns to grand hanging fixtures. The metalworkers of Marrakech\'s Place des Ferblantiers (Tinsmiths Square) are the acknowledged masters, hammering intricate designs into sheet metal by hand.',
    topPicks: [
      { item: 'Small table lantern', price: 'From 200 MAD' },
      { item: 'Medium hanging lantern', price: 'From 500 MAD' },
      { item: 'Large floor lantern', price: 'From 1,000 MAD' },
      { item: 'Brass candle holder', price: 'From 150 MAD' },
    ],
    tip: 'Check the wiring on electrified lanterns; you may need to rewire them at home for your country\'s voltage. For pure decor, candle lanterns are simpler and cheaper. Negotiate harder if buying multiple pieces.',
  },
  {
    rank: 7,
    name: 'Babouche Slippers',
    icon: Footprints,
    price: 'From 80 MAD',
    bestCity: 'Fes',
    image: '/images/art-moroccan-leather.webp',
    description:
      'The pointed-toe babouche is Morocco\'s most iconic footwear. Made from soft goatskin or cowhide, they come in every color imaginable. Plain leather babouche are affordable everyday wear, while embroidered, sequined, or dyed versions serve as elegant gifts. They mold to your feet after a few days of wear.',
    topPicks: [
      { item: 'Plain leather babouche', price: 'From 80 MAD' },
      { item: 'Embroidered babouche', price: 'From 150 MAD' },
      { item: 'Sequined babouche', price: 'From 200 MAD' },
      { item: 'Children\'s babouche', price: 'From 50 MAD' },
    ],
    tip: 'Try on both feet because sizing is inconsistent between artisans. Genuine leather babouche feel slightly stiff at first but soften within days. Avoid plastic imitations that do not breathe.',
  },
  {
    rank: 8,
    name: 'Silver Jewelry',
    icon: Gem,
    price: 'From 100 MAD',
    bestCity: 'Essaouira',
    image: '/images/art-moroccan-jewelry.webp',
    description:
      'Berber silver jewelry is steeped in symbolism. Chunky bracelets with geometric engravings, Tuareg cross pendants representing Saharan oasis towns, and Hand of Fatima (khamsa) necklaces all carry deep cultural meaning. Tiznit and Essaouira are the traditional centers of Moroccan silverwork.',
    topPicks: [
      { item: 'Berber silver bracelet', price: 'From 150 MAD' },
      { item: 'Tuareg cross pendant', price: 'From 100 MAD' },
      { item: 'Hand of Fatima necklace', price: 'From 80 MAD' },
      { item: 'Amber and silver necklace', price: 'From 300 MAD' },
    ],
    tip: 'Most "silver" in souks is nickel or alloy. Real silver is stamped 925 and is not magnetic. Real amber is warm, lightweight, and floats in saltwater; most souk "amber" is plastic resin.',
  },
  {
    rank: 9,
    name: 'Textiles & Blankets',
    icon: Scissors,
    price: 'From 150 MAD',
    bestCity: 'Marrakech',
    image: '/images/art-moroccan-textiles.webp',
    description:
      'Moroccan textiles showcase centuries of weaving tradition. Berber blankets (handira) from the Atlas Mountains, sabra (cactus silk) cushion covers in vivid colors, embroidered caftans, and lightweight djellabas all make remarkable souvenirs. Handwoven pieces show subtle irregularities that distinguish them from factory-made goods.',
    topPicks: [
      { item: 'Berber blanket (handira)', price: 'From 300 MAD' },
      { item: 'Sabra silk cushion cover', price: 'From 150 MAD' },
      { item: 'Cotton scarf / shawl', price: 'From 80 MAD' },
      { item: 'Caftan (formal, custom)', price: 'From 500 MAD' },
    ],
    tip: 'Check if a blanket is handwoven by examining the back for slight irregularities. Sabra silk is actually a plant fiber, not silk, but it is durable, ethical, and has a beautiful sheen.',
  },
  {
    rank: 10,
    name: 'Tea Sets & Teapots',
    icon: Coffee,
    price: 'From 150 MAD',
    bestCity: 'Fes',
    image: '/images/hero-shopping.webp',
    description:
      'Moroccan mint tea culture is central to daily life, and traditional tea sets make functional, decorative gifts. A complete set includes a silver-plated or stainless steel teapot, ornate tea glasses with gold or colored designs, and a silver or brass serving tray. The glasses are iconic and lightweight, perfect for packing.',
    topPicks: [
      { item: 'Tea glass set (6 glasses)', price: 'From 60 MAD' },
      { item: 'Traditional teapot', price: 'From 150 MAD' },
      { item: 'Complete tea set with tray', price: 'From 400 MAD' },
      { item: 'Decorative brass tray', price: 'From 200 MAD' },
    ],
    tip: 'Silver-plated teapots tarnish over time but polish up beautifully. Stainless steel is more practical for daily use. Wrap tea glasses individually in socks or clothing for safe packing.',
  },
  {
    rank: 11,
    name: 'Fossils & Minerals',
    icon: Shell,
    price: 'From 50 MAD',
    bestCity: 'Erfoud',
    image: '/images/hero-shopping.webp',
    description:
      'Morocco\'s Saharan regions are a geological treasure trove. Trilobites, ammonites, and orthoceras fossils dating back 350-450 million years are found near Erfoud and Midelt. Polished fossil plates, ammonite bowls, and geode crystals make striking, unique souvenirs unavailable anywhere else in the world.',
    topPicks: [
      { item: 'Trilobite fossil', price: 'From 100 MAD' },
      { item: 'Ammonite plate (polished)', price: 'From 200 MAD' },
      { item: 'Orthoceras fossil', price: 'From 50 MAD' },
      { item: 'Geode crystal', price: 'From 150 MAD' },
    ],
    tip: 'Real fossils are heavy with natural color variations. Fakes are lightweight plaster with uniform coloring. Buy from reputable fossil shops in Erfoud or Midelt, not from roadside vendors.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BARGAINING RULES
   ═══════════════════════════════════════════════════════════════ */

const bargainingRules = [
  {
    step: 1,
    title: 'Research Prices First',
    icon: BookOpen,
    text: 'Before entering the souks, check the price ranges in this guide and visit an Ensemble Artisanal (government fixed-price shop) to learn fair baseline values. Knowledge is your most powerful negotiating tool.',
  },
  {
    step: 2,
    title: 'Never Accept the First Price',
    icon: HandCoins,
    text: 'The first quoted price is always the starting point, not the real price. In tourist areas, opening prices can be 3-10 times the fair value. Even in quieter areas, expect to negotiate down by 30-50%.',
  },
  {
    step: 3,
    title: 'Start at 30-40% of the Asking Price',
    icon: DollarSign,
    text: 'If the vendor says 1,000 MAD, counter with 300-400 MAD. This gives both sides room to meet in the middle. A serious vendor will always counter rather than let you walk away.',
  },
  {
    step: 4,
    title: 'Stay Friendly and Patient',
    icon: Heart,
    text: 'Bargaining is a social ritual in Morocco, not a confrontation. Smile, accept the mint tea, make conversation. Vendors respect warmth and humor. Aggression never gets you a better price.',
  },
  {
    step: 5,
    title: 'Use the Walk-Away Technique',
    icon: Footprints,
    text: 'If you cannot reach your target price, politely say thank you and start walking. Most vendors will call you back with a lower offer. If they do not, the price may already be at their floor.',
  },
  {
    step: 6,
    title: 'Bundle for Better Deals',
    icon: Package,
    text: 'Buying multiple items from one vendor almost always gets you a better per-item price. Negotiate three scarves together, not one at a time. Vendors prefer a larger single sale.',
  },
  {
    step: 7,
    title: 'Pay Cash in Dirhams',
    icon: Scale,
    text: 'Cash gets better prices than card. Carry small denominations (20 and 50 MAD notes) to avoid the "I have no change" tactic. Most medina vendors do not accept cards anyway.',
  },
  {
    step: 8,
    title: 'Know When to Stop',
    icon: CheckCircle,
    text: 'Once you reach a price that feels fair based on your research, accept it gracefully. Pushing for another 10 MAD after a long negotiation is disrespectful. A good deal should feel good for both parties.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO BUY BY CITY
   ═══════════════════════════════════════════════════════════════ */

const shoppingCities = [
  {
    city: 'Fes',
    icon: Award,
    tagline: 'The Artisan Capital',
    specialties: 'Leather, blue ceramics, brass, embroidered textiles, zellige tiles',
    priceLevel: 'Moderate',
    description:
      'Over 9,000 workshops operate inside the Fes medina, the world\'s largest car-free urban zone. Leather from the Chouara tanneries, blue ceramics from Ain Nokbi, and handmade brass are all cheaper than in Marrakech because there is less tourist markup.',
  },
  {
    city: 'Marrakech',
    icon: Star,
    tagline: 'The Shopping Capital',
    specialties: 'Carpets, spices, leather bags, lanterns, textiles, caftans',
    priceLevel: 'Higher (tourist premium)',
    description:
      'Marrakech offers the widest variety and the most famous souks. Jemaa el-Fna leads into specialized markets: leather souk, spice souk, carpet souk, dyers souk. Prices run higher due to tourist volume, but so does the quality and selection.',
  },
  {
    city: 'Essaouira',
    icon: Sparkles,
    tagline: 'The Relaxed Choice',
    specialties: 'Argan oil, silver jewelry, thuya wood, art, relaxed shopping',
    priceLevel: 'Moderate',
    description:
      'Compact, easy to navigate, and far less intense than Fes or Marrakech. Essaouira is perfect for first-time souk shoppers. Women\'s argan cooperatives are nearby, and the Avenue de l\'Istiqlal has fixed-price concept shops.',
  },
  {
    city: 'Chefchaouen',
    icon: Palette,
    tagline: 'The Blue Boutique',
    specialties: 'Rif blankets, goat cheese, honey, handmade soap, woven goods',
    priceLevel: 'Lower',
    description:
      'The Blue City is small but packed with unique finds you will not see elsewhere. Woven Rif Mountain blankets, artisanal goat cheese, local honey, and hand-painted ceramics are highlights. Bargaining is straightforward and fair.',
  },
  {
    city: 'Meknes',
    icon: Building,
    tagline: 'The Hidden Gem',
    specialties: 'Damascene metalwork, embroidery, olive oil, regional wine',
    priceLevel: 'Lower',
    description:
      'Often bypassed by tourists, Meknes has an excellent medina with minimal tourist inflation. Damascene metalwork (inlaid silver on steel) and embroidery are local specialties. Also the gateway to the Meknes wine region.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SCAMS TO AVOID
   ═══════════════════════════════════════════════════════════════ */

const scamsToAvoid = [
  {
    scam: 'Fake Saffron',
    description: 'Dyed safflower, corn silk, or plastic threads sold as saffron. Real saffron has thin red threads, tastes bitter, and dissolves slowly in water turning it golden-yellow.',
    prevention: 'Buy from established spice shops. Taste a thread; real saffron is bitter. Expect from 20-40 MAD per gram; anything drastically cheaper is fake.',
  },
  {
    scam: 'Machine-Made "Handmade" Carpets',
    description: 'Factory rugs sold as handwoven. Machine-made carpets have perfectly uniform knots and a flat, synthetic backing.',
    prevention: 'Flip the rug over. Handmade rugs have visible individual knots on the reverse. Pull a fringe thread; wool feels organic, while synthetic is smooth and plastic-like.',
  },
  {
    scam: 'Diluted Argan Oil',
    description: 'Argan oil mixed with sunflower or olive oil, or entirely synthetic substitutes. Real argan absorbs quickly with a subtle nutty scent.',
    prevention: 'Buy from women\'s cooperatives. Real cosmetic argan oil absorbs into skin within a minute. If it sits greasy on the surface, it is fake or diluted.',
  },
  {
    scam: 'Plaster Fossils',
    description: 'Carved plaster painted to look like fossils. Real fossils are heavy with natural color variation; fakes are lightweight with uniform coloring.',
    prevention: 'Buy from reputable fossil shops in Erfoud. Real trilobites feel stone-heavy. If it is very light or perfectly symmetrical, it is likely plaster.',
  },
  {
    scam: 'The "My Friend\'s Shop" Redirect',
    description: 'A local offers to take you to a "special shop" for "local prices." The guide receives 10-30% commission added to your price.',
    prevention: 'Politely decline unsolicited guides. Use Google Maps to navigate the souks independently. If you follow a guide, factor the commission into your negotiation.',
  },
  {
    scam: 'Fake Silver Jewelry',
    description: 'Nickel or alloy pieces sold as sterling silver. Real silver is stamped 925, is not magnetic, and has a distinct cool weight.',
    prevention: 'Test with a magnet; silver is not magnetic. Buy from Essaouira or Tiznit where the silver tradition is strongest. Ask for the 925 stamp.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHIPPING OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const shippingTips = [
  {
    method: 'Barid Al-Maghrib (Post)',
    icon: Package,
    cost: 'From 150 MAD',
    time: '2-4 weeks',
    best: 'Spices, small leather goods, textiles',
  },
  {
    method: 'DHL / FedEx / UPS',
    icon: Truck,
    cost: 'From 500 MAD',
    time: '3-7 days',
    best: 'Ceramics, valuable items, fragile goods',
  },
  {
    method: 'Shop Shipping',
    icon: ShoppingBag,
    cost: 'From 200 MAD',
    time: '1-6 weeks',
    best: 'Carpets, large lanterns, furniture',
  },
  {
    method: 'Carry in Luggage',
    icon: Gift,
    cost: 'Free',
    time: 'Immediate',
    best: 'Babouche, jewelry, spices, scarves, tea glasses',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What are the best souvenirs to buy in Morocco?',
    answer:
      'The 11 best souvenirs are leather goods, ceramics, rugs and carpets, argan oil, spices, brass lanterns, babouche slippers, Berber silver jewelry, textiles and blankets, traditional tea sets, and fossils. Each represents authentic Moroccan craftsmanship and ranges from from 20 MAD for spices to thousands of MAD for handwoven rugs.',
  },
  {
    question: 'How much should I budget for shopping in Morocco?',
    answer:
      'Budget depends on your interests. For small souvenirs (spices, scarves, tea glasses), from 200-500 MAD is plenty. For a mix of leather goods, ceramics, and textiles, budget from 1,000-3,000 MAD. If you want a quality rug or carpet, add from 2,000-5,000 MAD. Serious shoppers spending a week may budget from 5,000-10,000 MAD for memorable purchases.',
  },
  {
    question: 'Is it safe to shop in Moroccan souks?',
    answer:
      'Yes. Moroccan souks are busy and sometimes overwhelming but safe. Keep valuables in a front pocket or crossbody bag in crowded areas. Vendors may be persistent but are rarely aggressive. A firm "la shukran" (no thank you) and continued walking is enough to disengage from any unwanted sales pitch.',
  },
  {
    question: 'Can I bring food items like spices and argan oil home?',
    answer:
      'Yes, most countries allow spices and sealed food products. Argan oil is permitted in checked luggage (bottles over 100ml cannot go in carry-on). Have spices vacuum-sealed for freshness and declare food items at customs if required. Check your home country\'s specific biosecurity rules for plant and food products.',
  },
  {
    question: 'What is the best city for first-time shoppers?',
    answer:
      'Essaouira. The medina is compact, easy to navigate, and the atmosphere is relaxed. Bargaining is gentler, vendors are less persistent, and there are fixed-price concept shops on Avenue de l\'Istiqlal. Build your confidence in Essaouira before tackling the legendary souks of Marrakech and Fes.',
  },
  {
    question: 'When is the best time of day to shop in the souks?',
    answer:
      'Early morning (9-11am) is ideal. Crowds are thin, vendors are fresh, and some believe the first sale brings good luck and may offer a better price. Late afternoon (4-6pm) is lively but more crowded. Avoid midday in summer when the heat makes shopping exhausting.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function WhatToBuyMoroccoPage() {
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
          style={{ backgroundImage: 'url(/images/hero-shopping.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">What to Buy in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ShoppingBag className="w-4 h-4" />
            Souvenirs &amp; Shopping
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            What to Buy in Morocco:
            <br className="hidden md:block" /> 11 Best Souvenirs
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From handwoven Berber rugs to fragrant ras el hanout. The definitive guide to
            Morocco&apos;s best souvenirs with real prices, quality tips, and where to find them.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: A Shopper&apos;s Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Few countries in the world offer the sheer variety and artisan quality of Morocco
                when it comes to souvenirs and handmade goods. From the ancient tanneries of Fes
                to the spice-laden souks of Marrakech, every corner of Morocco offers something
                worth bringing home. The craftsmanship here stretches back centuries, with skills
                passed from master to apprentice in an unbroken chain.
              </p>
              <p>
                But with so much on offer, knowing what to buy, what to pay, and where to find
                the real thing versus a factory copy can be overwhelming. This guide breaks down
                the 11 best categories of Moroccan souvenirs with actual prices in MAD, quality
                markers to look for, bargaining strategies, and city-by-city recommendations so
                you shop with confidence and bring home treasures that last.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices. Seasonal pricing applies during peak tourist
                months (October-April) and holidays, when souk prices tend to run 10-20% higher
                due to increased demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 11 Items to Buy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The 11 Best Things to Buy in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each item below includes fair starting prices, quality tips, and the best city to buy it.
          </p>

          <div className="space-y-12">
            {topItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.rank} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative h-56 lg:h-auto">
                      <img
                        src={item.image}
                        alt={`${item.name} - popular Moroccan souvenir to buy`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                            <span className="text-white font-bold text-sm">#{item.rank}</span>
                          </div>
                          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/80">
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3.5 h-3.5" />
                            {item.price}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            Best in {item.bestCity}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-2 p-6">
                      <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                        {item.description}
                      </p>

                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        Top Picks &amp; Prices
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                        {item.topPicks.map((pick, i) => (
                          <div key={i} className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[var(--color-gold)]" />
                            <span className="text-xs font-medium text-[var(--text-primary)]">{pick.item}</span>
                            <span className="ml-auto text-xs font-semibold text-[var(--color-accent)]">{pick.price}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                        <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {item.tip}
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

      {/* ── Bargaining Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Bargain in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bargaining is an art and a social ritual in Moroccan souks. Follow these 8 steps to negotiate with confidence and respect.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {bargainingRules.map((rule) => {
                  const RuleIcon = rule.icon;
                  return (
                    <div key={rule.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{rule.step}</span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <RuleIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {rule.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Buy by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy: City-by-City Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has its own shopping personality and specialties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {shoppingCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{city.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{city.description}</p>
                  <div className="space-y-2 mb-3">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">Best for:</p>
                    <p className="text-xs text-[var(--text-muted)]">{city.specialties}</p>
                  </div>
                  <span className="inline-block text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                    Price Level: {city.priceLevel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Shipping Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Ship Your Purchases Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bought a rug too big for your suitcase? Here are the four main ways to get your treasures home safely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {shippingTips.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.method} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <OptionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.method}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="text-[var(--color-accent)] font-semibold">{option.cost}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {option.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {option.best}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Packing Tips for Fragile Items
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Wrap ceramics individually in clothing, socks, or scarves you have also purchased</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Ask vendors for bubble wrap; most ceramics and glass sellers carry it</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Argan oil bottles over 100ml must go in checked luggage, not carry-on</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Leather poufs ship flat, unstuffed; stuff them with newspaper or old clothes at home</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scams to Avoid ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Scams &amp; Fakes to Avoid
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s souks are overwhelmingly honest, but knowing these pitfalls helps you shop smarter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {scamsToAvoid.map((item) => (
              <div key={item.scam} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.scam}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">How to avoid:</span> {item.prevention}
                  </p>
                </div>
              </div>
            ))}
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
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/morocco-shopping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth shopping guide with price reference tables, customs limits, and detailed bargaining strategies.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/souks" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Guide to Moroccan Souks
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate Morocco&apos;s famous markets with confidence. Souk etiquette, maps, and what to expect.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/scams" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Scams Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Common tourist scams in Morocco and exactly how to avoid them. Stay informed and travel smart.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the Red City&apos;s legendary souks, riads, and the vibrant Jemaa el-Fna square.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the world&apos;s largest car-free urban area and Morocco&apos;s artisan capital.
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

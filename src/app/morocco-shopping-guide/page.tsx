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
  Users,
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
  CircleDot,
  Footprints,
  Droplets,
  Flower2,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Shopping Guide 2026 | What to Buy, Prices & Bargaining Tips',
  description:
    'Complete guide to shopping in Morocco. Leather goods, argan oil, ceramics, carpets, spices, jewelry, and textiles with real prices in MAD. Bargaining rules, shipping home, and the best shopping cities ranked.',
  keywords: [
    'Morocco shopping guide',
    'what to buy in Morocco',
    'Morocco souvenirs',
    'Moroccan leather goods',
    'argan oil Morocco',
    'Moroccan ceramics',
    'Moroccan carpets',
    'Berber rugs Morocco',
    'Beni Ourain rugs',
    'Morocco spices',
    'bargaining Morocco',
    'haggling Morocco souks',
    'Morocco shopping prices',
    'Fes tanneries shopping',
    'Marrakech souks guide',
    'Moroccan jewelry',
    'Berber silver jewelry',
    'Morocco shipping customs',
    'Morocco souk tips',
    'Essaouira shopping',
    'Chefchaouen shopping',
    'Moroccan textiles',
  ],
  openGraph: {
    title: 'Morocco Shopping Guide 2026 | What to Buy, Prices & Bargaining Tips',
    description:
      'Everything you need to know about shopping in Morocco. From leather goods and argan oil to carpets and spices. Real prices, bargaining techniques, and the best cities for shopping.',
    url: `${BASE_URL}/morocco-shopping-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-shopping.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan souk market stall with handcrafted goods, leather bags, ceramics, and spices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Shopping Guide 2026 | What to Buy & Bargaining Tips',
    description:
      'From leather goods at 200 MAD to Beni Ourain carpets from 500 MAD. Complete guide to shopping in Morocco with real prices, bargaining rules, and shipping advice.',
    images: [`${BASE_URL}/images/hero-shopping.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-shopping-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-shopping-guide`,
  name: 'Morocco Shopping Guide 2026 | What to Buy, Prices & Bargaining Tips',
  description:
    'Complete guide to shopping in Morocco. Leather goods, argan oil, ceramics, carpets, spices, jewelry, and textiles with real prices in MAD. Bargaining rules, shipping home, and the best shopping cities ranked.',
  url: `${BASE_URL}/morocco-shopping-guide`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-shopping-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Shopping Guide', item: `${BASE_URL}/morocco-shopping-guide` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING CATEGORIES
   ═══════════════════════════════════════════════════════════════ */

const shoppingCategories = [
  {
    name: 'Leather Goods',
    icon: Footprints,
    priceRange: 'From 200 MAD',
    image: '/images/art-moroccan-leather.webp',
    description:
      'Morocco has been a center of leather craftsmanship for over a thousand years. The tanneries of Fes, where hides are still dyed using natural pigments in stone vats, produce some of the finest leather in the world. Marrakech offers the widest variety of finished goods. Look for bags, jackets, babouche slippers, belts, wallets, and journal covers.',
    bestBuys: [
      { item: 'Babouche slippers', price: 'From 80 MAD', note: 'Pointy-toed traditional slippers, plain or embroidered' },
      { item: 'Leather handbag', price: 'From 200 MAD', note: 'Crossbody, tote, or clutch styles; genuine cowhide or goatskin' },
      { item: 'Leather jacket', price: 'From 800 MAD', note: 'Custom-fitted in the souks; allow 2-3 days for tailoring' },
      { item: 'Leather belt', price: 'From 100 MAD', note: 'Hand-tooled with Berber or geometric patterns' },
      { item: 'Leather pouf (ottoman)', price: 'From 300 MAD', note: 'Iconic Moroccan home decor; can be shipped flat, unstuffed' },
    ],
    tips: [
      'Fes tanneries (Chouara) produce the best leather; buy directly from workshops surrounding the tannery for fair prices',
      'Check stitching quality and smell the leather; genuine leather has a rich, natural scent, not a chemical one',
      'For babouche slippers, try them on both feet; sizing is inconsistent between artisans',
      'Leather poufs are sold unstuffed for easier transport; stuff them with newspaper or old clothes at home',
    ],
    bestCity: 'Fes',
  },
  {
    name: 'Argan Oil',
    icon: Droplets,
    priceRange: 'From 80 MAD',
    image: '/images/art-argan-oil.webp',
    description:
      'Called liquid gold, argan oil comes from the nuts of the argan tree, which grows only in southwestern Morocco. There are two types: cosmetic (light, almost odorless, cold-pressed from raw nuts) and culinary (darker, nutty flavor, pressed from roasted nuts). Buying from women\'s cooperatives ensures fair prices and supports local communities.',
    bestBuys: [
      { item: 'Cosmetic argan oil (100ml)', price: 'From 80 MAD', note: 'Light, clear; for skin and hair; buy from cooperatives' },
      { item: 'Culinary argan oil (250ml)', price: 'From 120 MAD', note: 'Darker, nutty; for dipping bread and drizzling; roasted nut base' },
      { item: 'Amlou (argan butter)', price: 'From 60 MAD', note: 'Argan oil, almonds, and honey blend; Moroccan peanut butter' },
      { item: 'Argan soap', price: 'From 30 MAD', note: 'Gentle, moisturizing; great travel gift' },
      { item: 'Prickly pear seed oil (15ml)', price: 'From 200 MAD', note: 'Even rarer than argan; powerful anti-aging properties' },
    ],
    tips: [
      'Real argan oil absorbs quickly into skin without leaving a greasy residue; fake oil feels oily and has a chemical smell',
      'Visit women\'s cooperatives near Essaouira or on the road between Marrakech and Essaouira for fair prices and authentic product',
      'A 100ml bottle of pure cosmetic argan oil should cost from 80-150 MAD at a cooperative; souk prices vary wildly',
      'Check the color: cosmetic oil should be light golden; culinary oil is darker with a toasted aroma',
    ],
    bestCity: 'Essaouira',
  },
  {
    name: 'Ceramics & Pottery',
    icon: Palette,
    priceRange: 'From 50 MAD',
    image: '/images/art-moroccan-ceramics.webp',
    description:
      'Moroccan ceramics are among the most distinctive in the world. Each region has its signature style: Fes is famous for its cobalt blue and white geometric designs, Safi produces colorful hand-painted pieces, and Tamegroute in the south creates unique green-glazed pottery. Plates, tagines, bowls, and decorative tiles make excellent souvenirs.',
    bestBuys: [
      { item: 'Fes blue plate (large)', price: 'From 150 MAD', note: 'Hand-painted cobalt blue on white; iconic Moroccan design' },
      { item: 'Decorative tagine', price: 'From 80 MAD', note: 'For display, not cooking; ornate patterns and vibrant colors' },
      { item: 'Cooking tagine', price: 'From 50 MAD', note: 'Unglazed or minimally glazed; must be seasoned before first use' },
      { item: 'Tamegroute pottery', price: 'From 100 MAD', note: 'Unique green glaze; bowls, vases, and candle holders' },
      { item: 'Zellige tile set (4 tiles)', price: 'From 120 MAD', note: 'Handcut geometric mosaic tiles; coasters or wall art' },
    ],
    tips: [
      'Ask if a tagine is for cooking or decoration; cooking tagines are unglazed and must be lead-free',
      'Fes ceramics cooperative near the Ain Nokbi area lets you watch artisans at work and buy at fair prices',
      'Check for hairline cracks by tapping the piece gently; a clear ring means no cracks',
      'Wrap ceramics in clothing for safe packing, or ask the vendor to wrap in bubble wrap and newspaper',
    ],
    bestCity: 'Fes',
  },
  {
    name: 'Textiles',
    icon: Scissors,
    priceRange: 'From 150 MAD',
    image: '/images/art-moroccan-textiles.webp',
    description:
      'Moroccan textiles are a feast for the senses. Berber blankets woven from pure wool in the Atlas Mountains, embroidered caftans worn for celebrations, lightweight djellabas for everyday wear, and silk scarves from Fes all showcase centuries of weaving tradition. Quality ranges from factory-made to completely handwoven.',
    bestBuys: [
      { item: 'Berber blanket (handira)', price: 'From 300 MAD', note: 'Handwoven wool; sequined wedding blankets from 800 MAD' },
      { item: 'Cotton scarf / shawl', price: 'From 80 MAD', note: 'Lightweight, perfect for sun protection and as a souvenir' },
      { item: 'Djellaba (everyday robe)', price: 'From 200 MAD', note: 'Hooded garment; cotton for summer, wool for winter' },
      { item: 'Caftan (formal)', price: 'From 500 MAD', note: 'Elaborate embroidery; can be custom-tailored in 2-3 days' },
      { item: 'Sabra silk cushion cover', price: 'From 150 MAD', note: 'Cactus silk; vibrant colors; lightweight for packing' },
    ],
    tips: [
      'Check if a blanket is handwoven by looking at the back; handwoven pieces show slight irregularities that add character',
      'Sabra (cactus silk) is not actually silk but a plant fiber; it is durable, has a beautiful sheen, and is ethical',
      'For caftans, visit the fabric souks first, choose your cloth, then take it to a tailor for custom fitting',
      'Berber wedding blankets (handira) with sequins are the most sought-after textile; prices reflect the weeks of handwork',
    ],
    bestCity: 'Marrakech',
  },
  {
    name: 'Spices',
    icon: Flower2,
    priceRange: 'From 20 MAD',
    image: '/images/art-moroccan-spices.webp',
    description:
      'The spice souks of Morocco are a sensory overload of color, aroma, and flavor. Ras el hanout, Morocco\'s signature spice blend, can contain up to 30 different ingredients. Saffron, cumin, paprika, turmeric, cinnamon, and dried rosebuds are all excellent buys. Spices are sold by weight and are remarkably affordable compared to Western prices.',
    bestBuys: [
      { item: 'Ras el hanout (100g)', price: 'From 30 MAD', note: 'Morocco\'s signature blend; quality varies enormously by vendor' },
      { item: 'Saffron (1g)', price: 'From 20 MAD', note: 'Real saffron; see tips below for spotting fakes' },
      { item: 'Cumin (100g)', price: 'From 15 MAD', note: 'Moroccan cumin is intensely aromatic; buy whole seeds for freshness' },
      { item: 'Dried rosebuds (50g)', price: 'From 20 MAD', note: 'From Kelaa M\'gouna; for tea, cooking, or fragrance' },
      { item: 'Herbal tea blends (100g)', price: 'From 25 MAD', note: 'Custom blends of verbena, mint, chamomile, and rosemary' },
    ],
    tips: [
      'Real saffron: thin red threads, bitter taste, turns water golden-yellow slowly; fake saffron is thick, tastes sweet, and dyes water instantly',
      'Buy spices from established shops in the medina, not from street vendors who often sell stale or adulterated product',
      'Ask to smell and taste before buying; a reputable vendor will encourage this',
      'Vacuum-sealed bags travel better and keep spices fresh; many spice shops offer vacuum sealing for from 5 MAD extra',
    ],
    bestCity: 'Marrakech',
  },
  {
    name: 'Jewelry',
    icon: Gem,
    priceRange: 'From 100 MAD',
    image: '/images/art-moroccan-jewelry.webp',
    description:
      'Moroccan jewelry tells stories of Berber, Arab, and Saharan traditions. Berber silver jewelry, often set with amber or coral, features symbolic motifs for protection and fertility. Tuareg crosses from the south are distinctive geometric pendants, each representing a different oasis town. Hand of Fatima (khamsa) pendants are ubiquitous and make meaningful gifts.',
    bestBuys: [
      { item: 'Berber silver bracelet', price: 'From 150 MAD', note: 'Chunky, ornate; often with geometric engravings' },
      { item: 'Tuareg cross pendant', price: 'From 100 MAD', note: 'Each of the 21 designs represents a different Saharan town' },
      { item: 'Hand of Fatima necklace', price: 'From 80 MAD', note: 'Khamsa pendant; protective symbol; silver or silver-plated' },
      { item: 'Amber and silver necklace', price: 'From 300 MAD', note: 'Traditional Berber; real amber is warm to touch and lightweight' },
      { item: 'Handmade silver ring', price: 'From 100 MAD', note: 'Artisan-made; often with turquoise, coral, or onyx stones' },
    ],
    tips: [
      'Most "silver" jewelry in the souks is nickel or alloy; real silver should be stamped 925 or tested with a magnet (silver is not magnetic)',
      'Amber testing: real amber is warm to the touch, lightweight, and floats in saltwater; most "amber" in souks is plastic resin',
      'Essaouira and Tiznit are the best cities for authentic silver jewelry; prices are lower than Marrakech',
      'Tuareg crosses make unique gifts; ask the vendor to explain which town each cross represents',
    ],
    bestCity: 'Essaouira',
  },
  {
    name: 'Carpets & Rugs',
    icon: Crown,
    priceRange: 'From 500 MAD',
    image: '/images/art-moroccan-carpets.webp',
    description:
      'Moroccan carpets are among the most coveted in the world. Each region and tribe produces a distinctive style. Beni Ourain rugs from the Middle Atlas are the most internationally famous, with their minimalist cream-and-black geometric designs. Azilal rugs are more colorful and abstract. Kilims are flat-woven and lighter. Boucherouite rugs are recycled-fabric art pieces.',
    bestBuys: [
      { item: 'Beni Ourain rug (small, 1.5x2m)', price: 'From 2,000 MAD', note: 'Cream wool with black geometric lines; handknotted' },
      { item: 'Azilal rug (small)', price: 'From 1,500 MAD', note: 'Colorful, abstract designs on cream wool; each one unique' },
      { item: 'Kilim (flat-woven, 1x2m)', price: 'From 500 MAD', note: 'Lighter weight; geometric patterns; easier to ship' },
      { item: 'Boucherouite rug (small)', price: 'From 800 MAD', note: 'Made from recycled textiles; vibrant, eclectic designs' },
      { item: 'Hassira (reed mat)', price: 'From 300 MAD', note: 'Woven reed or palm leaf; traditional floor covering' },
    ],
    tips: [
      'Handknotted rugs have visible knots on the back; machine-made rugs have a flat, uniform backing',
      'A genuine Beni Ourain rug is 100% natural wool and takes 2-4 weeks to weave; prices below 1,500 MAD for a standard size suggest machine-made',
      'Ask to see the rug in natural light; indoor lighting in carpet shops is designed to enhance colors',
      'Carpet vendors will offer tea and spend hours showing rugs; this is normal, not a pressure tactic. Take your time and enjoy the ritual.',
      'Negotiate firmly but respectfully; the first price quoted is often 3-5 times the expected selling price',
    ],
    bestCity: 'Marrakech',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BARGAINING RULES
   ═══════════════════════════════════════════════════════════════ */

const bargainingRules = [
  {
    rule: 1,
    title: 'Never Accept the First Price',
    icon: HandCoins,
    description:
      'The first price quoted is almost never the real price. It is the starting point for negotiation. In tourist areas, the opening price can be 3-10 times the fair price. Even in less touristy areas, expect to negotiate down by at least 30-50%.',
  },
  {
    rule: 2,
    title: 'Know the Approximate Value Before You Start',
    icon: Scale,
    description:
      'Research rough prices online or ask your riad host before heading to the souks. Knowing the ballpark means you will not overpay. This guide provides starting prices for every category. A leather bag should not cost 2,000 MAD; a pair of babouche should not cost 500 MAD.',
  },
  {
    rule: 3,
    title: 'Start at 30-40% of the Asking Price',
    icon: DollarSign,
    description:
      'If the vendor says 1,000 MAD, counter with 300-400 MAD. This gives both parties room to negotiate toward the middle. If they seem offended, they are performing. A serious vendor will always counter-offer rather than let you walk away.',
  },
  {
    rule: 4,
    title: 'Be Friendly and Patient',
    icon: Heart,
    description:
      'Bargaining in Morocco is a social ritual, not a confrontation. Smile, make conversation, accept the mint tea. Vendors respect buyers who negotiate with warmth and humor. Getting angry or aggressive will get you a worse price, not a better one.',
  },
  {
    rule: 5,
    title: 'Use the Walk-Away Technique',
    icon: Footprints,
    description:
      'The most powerful tool in your negotiation arsenal. If you cannot reach your target price, politely say thank you and start walking away. In most cases, the vendor will call you back with a lower offer. If they do not, the price may genuinely be as low as they can go.',
  },
  {
    rule: 6,
    title: 'Bundle Items for Better Deals',
    icon: Package,
    description:
      'Buying multiple items from the same vendor almost always results in a better per-item price. If you want three scarves, negotiate them together rather than individually. Vendors prefer a larger single sale over multiple small ones.',
  },
  {
    rule: 7,
    title: 'Pay in Cash, Preferably Dirhams',
    icon: HandCoins,
    description:
      'Cash is king in Moroccan souks. Vendors will often offer a better price for cash payment in dirhams. Credit cards (where accepted) may incur a surcharge. Carrying small bills (20 and 50 MAD notes) helps avoid the "I have no change" tactic.',
  },
  {
    rule: 8,
    title: 'Do Not Show Too Much Enthusiasm',
    icon: ShieldCheck,
    description:
      'If you visibly fall in love with an item, the price goes up. Browse casually, pick up items and put them back, and act as though you could easily find the same thing elsewhere. A poker face is your friend in the souk.',
  },
  {
    rule: 9,
    title: 'Compare Prices at Multiple Shops',
    icon: Building,
    description:
      'Never buy from the first shop you enter, especially for carpets, leather, and ceramics. Visit at least three vendors selling similar goods. This gives you a clear sense of the price range and helps identify fair dealers.',
  },
  {
    rule: 10,
    title: 'Know When to Stop Bargaining',
    icon: CheckCircle,
    description:
      'Once you reach a price that feels fair based on your research, accept it gracefully. Pushing for an extra 10-20 MAD after long negotiations is disrespectful. The artisan invested time and skill. A deal should feel good for both parties.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHIPPING OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const shippingOptions = [
  {
    method: 'Barid Al-Maghrib (Moroccan Post)',
    icon: Package,
    cost: 'From 150 MAD for small parcel',
    delivery: '2-4 weeks to Europe/USA',
    description:
      'The cheapest option for shipping purchases home. Available at any post office. Reliable for small, non-fragile items. Track your parcel online. Insure valuable items (from 20 MAD). Best for spices, textiles, and small leather goods.',
    pros: ['Cheapest option', 'Available everywhere', 'Online tracking available'],
    cons: ['Slow delivery', 'Not ideal for fragile items', 'Limited insurance coverage'],
  },
  {
    method: 'DHL / FedEx / UPS',
    icon: Truck,
    cost: 'From 500 MAD for small parcel',
    delivery: '3-7 days worldwide',
    description:
      'The fastest and most reliable option. DHL has offices in major cities. Use for valuable items, ceramics, and anything fragile. Includes tracking, insurance, and customs documentation. Some carpet shops have established DHL accounts and can ship directly.',
    pros: ['Fast delivery', 'Full tracking and insurance', 'Handles customs paperwork'],
    cons: ['Expensive', 'Limited pickup locations', 'Cost increases quickly with weight'],
  },
  {
    method: 'Shop Shipping Service',
    icon: ShoppingBag,
    cost: 'Varies widely (from 200 MAD)',
    delivery: '1-6 weeks',
    description:
      'Many established shops, especially carpet dealers and ceramic workshops, offer their own shipping. They handle packing, customs forms, and insurance. Convenient but verify the reputation of the shop. Get a written receipt with tracking details.',
    pros: ['Vendor handles everything', 'Items packed by experts', 'Often includes insurance'],
    cons: ['Quality varies by vendor', 'Must verify reputation', 'Less control over the process'],
  },
  {
    method: 'Carry in Luggage',
    icon: Users,
    cost: 'Free (within airline weight limits)',
    delivery: 'Immediate',
    description:
      'The simplest option for small, durable purchases. Most airlines allow 23 kg checked bags. Wrap fragile items in clothing. Babouche, spices, scarves, jewelry, and small leather goods all travel well in luggage. Declare valuable items at customs if required.',
    pros: ['Free if within weight', 'No risk of loss in shipping', 'Immediate gratification'],
    cons: ['Weight and size limits', 'Risk of breakage for ceramics', 'Cannot carry liquids over 100ml in cabin'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CUSTOMS LIMITS BY COUNTRY
   ═══════════════════════════════════════════════════════════════ */

const customsLimits = [
  { country: 'United States', allowance: '$800 USD duty-free', note: 'Per person. Handmade goods often qualify for additional exemptions under GSP.' },
  { country: 'United Kingdom', allowance: '390 GBP duty-free', note: 'Post-Brexit rules. Goods over the limit subject to 2.5-20% duty depending on item.' },
  { country: 'European Union', allowance: '430 EUR duty-free (air travel)', note: 'Varies by EU member state. 300 EUR for land/sea travel.' },
  { country: 'Canada', allowance: '$800 CAD duty-free (7+ days)', note: 'Must be out of Canada for 7+ days. $200 CAD for trips under 48 hours.' },
  { country: 'Australia', allowance: '$900 AUD duty-free', note: 'Per person over 18. Declare all goods at customs; biosecurity rules apply to food items.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SHOPPING CITIES
   ═══════════════════════════════════════════════════════════════ */

const shoppingCities = [
  {
    rank: 1,
    city: 'Fes',
    icon: Award,
    image: '/images/hero-fes-medina.webp',
    tagline: 'The Artisan Capital',
    description:
      'Fes is Morocco\'s undisputed artisan capital. The medina houses over 9,000 workshops producing leather, ceramics, brass, textiles, and woodwork. The Chouara tanneries are world-famous. Shopping here feels like stepping into a living museum of Moroccan craftsmanship. Prices are generally lower than Marrakech because the tourist markup is smaller.',
    bestFor: ['Leather goods (tannery direct)', 'Fes blue ceramics', 'Brass and copperwork', 'Embroidered textiles', 'Zellige tilework'],
    priceLevel: 'Moderate',
  },
  {
    rank: 2,
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech-medina.webp',
    tagline: 'The Shopping Capital',
    description:
      'Marrakech has the widest selection of goods and the most established souk culture. Jemaa el-Fna is the gateway to a labyrinth of specialized souks: the leather souk, the spice souk, the carpet souk, the dyers souk. The sheer variety is unmatched. Prices can be higher than other cities due to tourist volume, but so is the quality and selection.',
    bestFor: ['Carpets and rugs', 'Spices', 'Leather bags and shoes', 'Lanterns and metalwork', 'Textiles and caftans'],
    priceLevel: 'Higher (tourist premium)',
  },
  {
    rank: 3,
    city: 'Essaouira',
    icon: Sparkles,
    image: '/images/hero-essaouira-medina.webp',
    tagline: 'The Relaxed Alternative',
    description:
      'Essaouira offers a more relaxed, less intense shopping experience than Fes or Marrakech. The medina is compact and easy to navigate. The city is famous for argan oil (cooperatives nearby), thuya wood crafts, silver jewelry, and art galleries. Bargaining is still expected but tends to be more gentle. The fixed-price concept shops along Avenue de l\'Istiqlal are a pressure-free option.',
    bestFor: ['Argan oil (cooperative fresh)', 'Silver and Berber jewelry', 'Thuya woodwork', 'Art and paintings', 'Relaxed browsing'],
    priceLevel: 'Moderate',
  },
  {
    rank: 4,
    city: 'Chefchaouen',
    icon: Palette,
    image: '/images/hero-chefchaouen-medina.webp',
    tagline: 'The Blue Boutique',
    description:
      'The Blue City is small but packed with unique finds. Woven blankets from the Rif Mountains, goat cheese, handmade soap, and locally produced honey are highlights. The shopping scene is intimate and artisanal, with many items you will not find elsewhere in Morocco. Prices are fair and bargaining is straightforward.',
    bestFor: ['Rif Mountain blankets', 'Handmade goat cheese', 'Local honey and jams', 'Handwoven scarves', 'Painted ceramics'],
    priceLevel: 'Lower',
  },
  {
    rank: 5,
    city: 'Meknes',
    icon: Building,
    image: '/images/hero-meknes.webp',
    tagline: 'The Hidden Gem',
    description:
      'Often overlooked by tourists, Meknes has an excellent medina with far less tourist inflation than Marrakech or Fes. The embroidery and damascene metalwork (inlaid silver on steel) are specialties. Meknes is also the gateway to the Volubilis region, where local olive oils and wines can be purchased.',
    bestFor: ['Damascene metalwork', 'Embroidery', 'Olive oils', 'Wine from Meknes region', 'Low-pressure shopping'],
    priceLevel: 'Lower',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE REFERENCE TABLE
   ═══════════════════════════════════════════════════════════════ */

const priceReference = [
  { item: 'Babouche slippers (plain)', price: 'From 80 MAD', fair: '80-150 MAD' },
  { item: 'Babouche slippers (embroidered)', price: 'From 150 MAD', fair: '150-300 MAD' },
  { item: 'Leather handbag (medium)', price: 'From 200 MAD', fair: '200-500 MAD' },
  { item: 'Leather pouf (unstuffed)', price: 'From 300 MAD', fair: '300-600 MAD' },
  { item: 'Argan oil, cosmetic (100ml)', price: 'From 80 MAD', fair: '80-150 MAD' },
  { item: 'Ras el hanout (100g)', price: 'From 30 MAD', fair: '30-60 MAD' },
  { item: 'Saffron (1g genuine)', price: 'From 20 MAD', fair: '20-40 MAD' },
  { item: 'Fes blue plate (large)', price: 'From 150 MAD', fair: '150-350 MAD' },
  { item: 'Decorative tagine', price: 'From 80 MAD', fair: '80-200 MAD' },
  { item: 'Berber blanket (plain wool)', price: 'From 300 MAD', fair: '300-600 MAD' },
  { item: 'Sabra silk cushion cover', price: 'From 150 MAD', fair: '150-300 MAD' },
  { item: 'Berber silver bracelet', price: 'From 150 MAD', fair: '150-400 MAD' },
  { item: 'Tuareg cross pendant', price: 'From 100 MAD', fair: '100-250 MAD' },
  { item: 'Beni Ourain rug (small)', price: 'From 2,000 MAD', fair: '2,000-5,000 MAD' },
  { item: 'Kilim rug (small)', price: 'From 500 MAD', fair: '500-1,500 MAD' },
  { item: 'Thuya wood box', price: 'From 100 MAD', fair: '100-300 MAD' },
  { item: 'Moroccan lantern (brass)', price: 'From 200 MAD', fair: '200-600 MAD' },
  { item: 'Handmade soap (savon beldi)', price: 'From 20 MAD', fair: '20-50 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SCAMS TO AVOID
   ═══════════════════════════════════════════════════════════════ */

const scamsToAvoid = [
  {
    scam: 'Fake Saffron',
    icon: AlertTriangle,
    description:
      'The most common scam in Moroccan souks. Fake saffron is dyed safflower, corn silk, or even plastic threads. Real saffron has thin red threads with a slightly lighter tip, tastes bitter, and dissolves slowly in water turning it golden-yellow. Fake saffron dissolves instantly and may turn water red.',
    prevention: 'Buy from established spice shops. Ask to taste a thread; real saffron is bitter. The price should be from 20-40 MAD per gram; anything cheaper is likely fake.',
  },
  {
    scam: 'Machine-Made "Handmade" Carpets',
    icon: AlertTriangle,
    description:
      'Some vendors sell factory-made carpets as handwoven. Machine-made rugs have perfectly uniform knots and a flat, synthetic-looking back. Genuine handmade carpets show slight irregularities in the weave and have visible individual knots on the reverse side.',
    prevention: 'Flip the rug over. Handmade rugs have visible knots on the back. Pull a thread from the fringe; wool feels organic and slightly oily, while synthetic is smooth and plastic-like.',
  },
  {
    scam: 'Fake Argan Oil',
    icon: AlertTriangle,
    description:
      'Some vendors sell diluted argan oil mixed with cheaper oils (sunflower, olive) or entirely synthetic substitutes. Real argan oil has a subtle nutty scent (cosmetic) or a rich toasted aroma (culinary), absorbs quickly, and does not feel greasy.',
    prevention: 'Buy from women\'s cooperatives or trusted pharmacies. Real cosmetic argan oil absorbs into skin within a minute. If it sits on the surface and feels greasy, it is mixed or fake.',
  },
  {
    scam: 'Fossil Fakes',
    icon: AlertTriangle,
    description:
      'Morocco is rich in real fossils, but many "fossils" sold in the souks are carved from plaster and painted. Real fossils are heavy, have natural color variations, and show organic patterns. Fakes are lightweight and have suspiciously perfect symmetry.',
    prevention: 'Buy from reputable fossil shops in Erfoud or Midelt. Real trilobite fossils feel stone-heavy. If it is very light or the color is uniform, it is likely fake.',
  },
  {
    scam: 'The "My Friend\'s Shop" Redirect',
    icon: AlertTriangle,
    description:
      'A friendly local offers to guide you to a "special shop" where you will get "local prices." In reality, the guide receives a commission (10-30%) that is added to your price. You end up paying more than you would have in the open souk.',
    prevention: 'Politely decline unsolicited guides. Navigate the souks yourself using Google Maps or a downloaded offline map. If you do follow a guide, negotiate the item price knowing a commission is built in.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoShoppingGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-shopping.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Shopping Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ShoppingBag className="w-4 h-4" />
            Shopping &amp; Souvenirs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Shopping Guide:
            <br className="hidden md:block" /> What to Buy &amp; Where
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 20 MAD spices to priceless handwoven carpets. Your complete guide to
            shopping in Morocco with real prices, bargaining strategies, and shipping advice.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Souks: Where Shopping Becomes an Adventure
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Shopping in Morocco is not a transaction. It is an experience. The souks
                (markets) of Fes, Marrakech, and Essaouira are labyrinths of narrow
                alleyways lined with workshops and stalls where artisans still practice
                crafts that have been passed down through generations. Here, the scent of
                leather mingles with saffron, and the sound of hammers on brass competes
                with the calls of vendors.
              </p>
              <p>
                For visitors, the Moroccan souk can be overwhelming, exhilarating, and
                deeply rewarding. The key is preparation: knowing what to look for, what
                to pay, and how to negotiate. This guide gives you all the tools you need
                to shop with confidence, avoid common pitfalls, and bring home treasures
                that will remind you of Morocco for years to come.
              </p>
              <p>
                Whether you are hunting for a Beni Ourain rug, a bottle of pure argan oil,
                or a simple bag of ras el hanout, this guide covers every category with
                real prices, quality indicators, and insider tips drawn from years of
                experience in Moroccan markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Price Reference
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A quick reference for fair prices across the most popular purchases in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when souk prices tend to be 10-20% higher due to increased demand.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Starting Price</div>
                <div className="p-3 px-4">Fair Price Range</div>
              </div>
              {priceReference.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.fair}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Buy: Shopping Categories ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Buy in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Seven categories of Moroccan goods worth bringing home, with specific items, fair prices, and quality tips for each.
          </p>

          <div className="space-y-16">
            {shoppingCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.name} className="card-moroccan overflow-hidden">
                  {/* Category header with image */}
                  <div className="relative h-56 md:h-64">
                    <img
                      src={category.image}
                      alt={`${category.name} shopping in Morocco - traditional Moroccan ${category.name.toLowerCase()}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <CategoryIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                            {category.name}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-white/80">
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3.5 h-3.5" />
                              {category.priceRange}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              Best in {category.bestCity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Best buys table */}
                    <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      Best Buys
                    </h4>
                    <div className="space-y-3 mb-6">
                      {category.bestBuys.map((buy, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-[var(--surface-muted)] rounded-lg">
                          <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-medium text-[var(--text-primary)]">{buy.item}</span>
                              <span className="text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                                {buy.price}
                              </span>
                            </div>
                            <p className="text-xs text-[var(--text-muted)] mt-1">{buy.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tips */}
                    <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      Insider Tips
                    </h4>
                    <div className="space-y-2">
                      {category.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Info className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip}</p>
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

      {/* ── Bargaining Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The 10 Rules of Bargaining in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bargaining is an art, a social ritual, and a way of life in Moroccan souks. Master these 10 rules and you will shop with confidence.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {bargainingRules.map((rule) => {
                  const RuleIcon = rule.icon;
                  return (
                    <div key={rule.rule} className="relative flex gap-6">
                      {/* Rule number circle */}
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{rule.rule}</span>
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <RuleIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {rule.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scams to Avoid ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Scams &amp; Fakes to Watch Out For
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s souks are overwhelmingly honest, but knowing these common pitfalls will help you shop smarter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {scamsToAvoid.map((item) => {
              const ScamIcon = item.icon;
              return (
                <div key={item.scam} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <ScamIcon className="w-5 h-5 text-red-500" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Shopping Cities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Shopping Cities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has its own shopping personality. Here are the top five, ranked by overall quality, variety, and value.
          </p>

          <div className="space-y-8">
            {shoppingCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.rank} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* City image */}
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={city.image}
                        alt={`Shopping in ${city.city}, Morocco - view of the medina and souks`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                            <span className="text-white font-bold text-sm">#{city.rank}</span>
                          </div>
                          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                            {city.city}
                          </h3>
                        </div>
                        <p className="text-sm text-white/80 flex items-center gap-1">
                          <CityIcon className="w-3.5 h-3.5" />
                          {city.tagline}
                        </p>
                      </div>
                    </div>

                    {/* City details */}
                    <div className="lg:col-span-2 p-6">
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{city.description}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                          Price Level: {city.priceLevel}
                        </span>
                      </div>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        Best For:
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {city.bestFor.map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Shipping Home ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Your Purchases Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bought a carpet too big for your suitcase? Here are your options for getting purchases home safely and affordably.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {shippingOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.method} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <OptionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.method}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="text-[var(--color-accent)] font-semibold">{option.cost}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {option.delivery}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{option.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-gold)] mb-2">Pros</p>
                      {option.pros.map((pro, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)] mb-1">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-500" />
                          {pro}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-muted)] mb-2">Cons</p>
                      {option.cons.map((con, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)] mb-1">
                          <CircleDot className="w-3 h-3 mt-0.5 shrink-0 text-[var(--text-muted)]" />
                          {con}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customs limits table */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
              Customs Duty-Free Allowances by Country
            </h3>
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Country</div>
                <div className="p-3 px-4">Duty-Free Allowance</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {customsLimits.map((item, i) => (
                <div
                  key={item.country}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.country}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.allowance}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Shopping Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Time to Shop
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Early morning (9-11am) offers the calmest souk experience. Vendors are fresh, crowds are
                thin, and some believe the first sale of the day brings good luck, so they may offer a better
                price. Avoid midday heat in summer. Late afternoon (4-6pm) is lively but crowded.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Cash &amp; ATMs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always carry enough cash in Moroccan dirhams for souk shopping. Most medina vendors do not
                accept cards. ATMs are available at medina gates and in the nouvelle ville. Carry small
                denominations (20 and 50 MAD) to avoid the &quot;no change&quot; ploy.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Useful Arabic Phrases
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                &quot;B-shhal?&quot; (How much?), &quot;Ghali bezzaf&quot; (Too expensive), &quot;Akhir taman?&quot; (Final
                price?), &quot;La shukran&quot; (No thank you), &quot;Wakha&quot; (OK/agreed). Using even basic
                Darija earns respect and often a better price.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Fixed-Price Shops
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If bargaining is not for you, look for Ensemble Artisanal shops (government-run
                fixed-price cooperatives) in major cities. Prices are fair and quality is guaranteed. They
                exist in Marrakech, Fes, Rabat, and other cities. Great for understanding fair market value
                before heading into the souks.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Quality Over Quantity
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Focus on a few well-chosen pieces rather than filling bags with cheap trinkets. A single
                handwoven Beni Ourain rug or a bottle of pure cooperative argan oil will bring more lasting
                joy than a dozen mass-produced souvenirs. Buy directly from artisans when possible.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Support Cooperatives
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Women&apos;s cooperatives (for argan oil, saffron, and textiles) and artisan cooperatives
                (for ceramics and woodwork) offer fair, often fixed prices. Your money goes directly to
                the makers. Look for cooperatives on the road between Marrakech and Essaouira, near Taliouine
                for saffron, and in the Fes medina for ceramics.
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
                Is it safe to shop in the Moroccan souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. Moroccan souks are busy, sometimes overwhelming, but safe. Pickpocketing can
                occur in very crowded areas, so keep valuables in a front pocket or crossbody bag. Vendors
                may be persistent but are rarely aggressive. A firm &quot;la shukran&quot; (no thank you) and
                continued walking is enough to disengage.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I know if I am getting a fair price?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Use the price reference table in this guide as a starting point. Visit an Ensemble Artisanal
                (government fixed-price shop) first to understand baseline prices. Ask your riad host for advice.
                Compare prices at 2-3 vendors before buying. If the final price falls within the &quot;fair
                range&quot; listed above, you have done well.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I return items if I change my mind?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Generally, no. Souk purchases are final. There is no return policy in a traditional market.
                This is why it is important to inspect items carefully before agreeing to a price. Check for
                defects, try on clothing, and test leather for genuine material. Once money changes hands,
                the transaction is complete.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best city for first-time shoppers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Essaouira. Its medina is compact, easy to navigate, and the shopping atmosphere is more
                relaxed than Fes or Marrakech. Bargaining is gentler, vendors are less persistent, and there
                are several fixed-price concept shops. Once you have built confidence in Essaouira, tackle the
                grand souks of Marrakech and Fes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get large items like rugs and furniture home?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most established carpet and furniture dealers offer international shipping and will handle
                packing, customs documentation, and delivery. Alternatively, use DHL or FedEx for items up to
                30 kg. For very large pieces, sea freight through a shipping agent is the most cost-effective
                option. Always get a written receipt with tracking details.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is bargaining expected for everything?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not quite. Bargaining is standard in souks, markets, and with taxis. However, prices are
                generally fixed in supermarkets, pharmacies, restaurants, and hotels. Government-run Ensemble
                Artisanal shops and cooperatives also have fixed prices. When in doubt, ask &quot;Akhir
                taman?&quot; (Is this the final price?). If they say yes without negotiation, the price is fixed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/argan-oil" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Argan Oil Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into Morocco&apos;s liquid gold with cooperative visits, quality testing, and buying tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the world&apos;s largest car-free urban area and Morocco&apos;s artisan capital.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the Red City&apos;s legendary souks, riads, and vibrant Jemaa el-Fna square.
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

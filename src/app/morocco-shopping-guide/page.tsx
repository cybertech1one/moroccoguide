import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  ShoppingBag,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Gem,
  Building,
  Award,
  BookOpen,
  Package,
  MessageCircleQuestion,
  HandCoins,
  Layers,
  Scissors,
  Scale,
  Tag,
  Eye,
  Truck,
  CircleDot,
  Lightbulb,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-shopping-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Shopping Guide 2026 | What to Buy, Best Souks & Haggling Tips',
  description:
    'Complete Morocco shopping guide covering the best souks in Marrakech, Fes & Essaouira, what to buy (leather, rugs, spices, argan oil, ceramics, lanterns), haggling strategies, quality indicators, Ensemble Artisanal fixed-price shops, customs allowances, and how to avoid tourist traps.',
  keywords: [
    'Morocco shopping guide',
    'Morocco souk guide',
    'what to buy in Morocco',
    'haggling in Morocco',
    'Marrakech souks',
    'Fes medina shopping',
    'Essaouira shopping',
    'Moroccan leather goods',
    'Moroccan rugs buying guide',
    'Morocco spices market',
    'argan oil Morocco buy',
    'Moroccan ceramics pottery',
    'Morocco lanterns buy',
    'babouche slippers Morocco',
    'Ensemble Artisanal Morocco',
    'Morocco customs duty free',
    'Morocco shopping tips 2026',
    'best souks Morocco',
  ],
  openGraph: {
    title: 'Morocco Shopping Guide 2026 | What to Buy, Best Souks & Haggling Tips',
    description:
      'Everything you need to know about shopping in Morocco: top souks by city, what to buy (leather, rugs, spices, argan oil, ceramics), haggling step-by-step, fixed-price alternatives, quality checks, and customs rules.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-souk-lamps.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan lanterns hanging in a traditional souk with warm golden light',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Shopping Guide 2026 | Souks, Haggling & What to Buy',
    description:
      'Top souks in Marrakech, Fes & Essaouira. What to buy, how to haggle, quality indicators, fixed-price shops, and customs allowances for bringing treasures home.',
    images: [`${BASE_URL}/images/hero-souk-lamps.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'How much should I haggle in Moroccan souks?',
    a: 'Start at 40-50% of the asking price and aim to settle around 60-70%. In tourist-heavy areas like Jemaa el-Fnaa, first prices can be inflated 3-4 times. In less-visited souks, markups are smaller. Always stay friendly and treat it as a conversation, not a confrontation.',
  },
  {
    q: 'Where can I buy authentic Moroccan goods at fixed prices?',
    a: 'Every major city has an Ensemble Artisanal, a government-backed cooperative where artisans sell at fixed prices with quality guarantees. Marrakech, Fes, Essaouira, Meknes, and Rabat all have one. Prices are slightly higher than a good souk deal, but you avoid the stress of haggling and know you are getting fair quality.',
  },
  {
    q: 'How do I tell if argan oil is authentic?',
    a: 'Genuine cosmetic argan oil has a light golden color, a faint nutty smell, and absorbs quickly without leaving a greasy film. It should come in a dark glass bottle (light degrades it). Avoid any argan oil with a strong smell or sold in plastic. Buy from women\'s cooperatives or certified shops. Expect to pay from 150 MAD for a 100ml bottle.',
  },
  {
    q: 'Can I bring Moroccan spices through customs?',
    a: 'Most dried spices are allowed into the EU, UK, US, Canada, and Australia. Pack them in sealed bags inside checked luggage. Fresh herbs, raw seeds, and saffron in large quantities may be questioned. Keep receipts. Ras el hanout, cumin, paprika, turmeric, and cinnamon all pass through customs without issues in normal travel quantities.',
  },
  {
    q: 'How do I ship large items like rugs or furniture from Morocco?',
    a: 'Most rug shops in Fes and Marrakech offer international shipping via DHL, FedEx, or freight forwarding. Expect to pay from 500 MAD for a small rug and from 2,000 MAD for large carpets. Get a written receipt with item description and your address. Insure anything valuable. Shipping typically takes 2-4 weeks to Europe and 3-6 weeks to North America.',
  },
  {
    q: 'What are the best souvenirs under 100 MAD?',
    a: 'Spice mixes like ras el hanout (from 20 MAD), small ceramic tagine pots (from 30 MAD), orange blossom water (from 15 MAD), leather coin purses (from 40 MAD), hand-painted tea glasses (from 15 MAD each), woven baskets (from 50 MAD), and henna art kits (from 30 MAD) all make great affordable gifts.',
  },
  {
    q: 'Is the leather from Fes tanneries good quality?',
    a: 'Fes produces excellent goat and camel leather, but quality varies widely between shops. Check for suppleness, even color, and a smooth interior finish. High-quality leather bends without cracking. Avoid stiff or overly shiny leather, which often has a cheap synthetic coating. The best shops near the tanneries let you watch the crafting process.',
  },
  {
    q: 'When is the best time to shop in Moroccan souks?',
    a: 'Weekday mornings between 9:00 and 11:00 offer the best conditions: fewer tourists, cooler temperatures, and shopkeepers in good spirits. The first sale of the day is considered lucky (called "ftour"), so sellers may give a better price. Avoid midday heat and Friday afternoons when many shops close for prayer.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Shopping Guide 2026',
  description:
    'Complete guide to shopping in Morocco covering the best souks, what to buy, haggling strategies, quality indicators, Ensemble Artisanal fixed-price shops, and customs allowances.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-souk-lamps.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Shopping Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: WHAT TO BUY
   ================================================================ */

const whatToBuy = [
  {
    name: 'Leather Goods',
    icon: ShoppingBag,
    price: 'From 200 MAD (bag), from 80 MAD (wallet)',
    where: 'Fes tanneries, Marrakech medina',
    description:
      'Morocco has been producing leather for over a millennium. Fes tanneries use traditional methods with vegetable dyes. Look for goat leather (soft, supple) for bags and jackets, and camel leather (thicker, more durable) for belts and sandals. Bags, wallets, belts, journal covers, and poufs are the most popular items.',
    qualityTip: 'Bend the leather. Good quality folds without cracking. Smell it: genuine vegetable-tanned leather has a natural earthy scent, not a chemical one. Check stitching is even and thread is waxed.',
    image: '/images/photo-moroccan-leather.webp',
  },
  {
    name: 'Berber Rugs & Carpets',
    icon: Layers,
    price: 'From 800 MAD (small), from 3,000 MAD (large)',
    where: 'Fes, Marrakech, Ouarzazate, Middle Atlas towns',
    description:
      'Handwoven Berber rugs take weeks to months to produce. Each region has distinct patterns: Beni Ourain (cream with dark geometric lines), Azilal (colorful abstract), Boucherouite (recycled fabric, bold colors), and Kilim (flat-woven, lighter). Machine-made imitations flood the market, so knowing what to look for is essential.',
    qualityTip: 'Flip the rug over. Handmade rugs show slightly irregular knots on the back. Machine-made rugs are perfectly uniform. Pull a fiber: wool should stretch before breaking. Ask about knot count per square inch.',
    image: '/images/art-berber-carpet-weaving.webp',
  },
  {
    name: 'Spices & Ras el Hanout',
    icon: Sparkles,
    price: 'From 20 MAD per 100g bag',
    where: 'Spice souks in every medina',
    description:
      'Morocco\'s spice markets sell cumin, paprika, turmeric, saffron, ginger, cinnamon, and the signature ras el hanout blend (up to 30+ spices). Saffron is the most expensive and most commonly faked. Whole spices retain flavor longer than pre-ground. Buy from shops that grind fresh in front of you.',
    qualityTip: 'Real saffron has a deep red color, releases color slowly in warm water, and costs from 30 MAD per gram. If it is cheap and bright orange, it is dyed safflower. Smell spices before buying: they should be pungent and fresh, not dusty.',
    image: '/images/photo-moroccan-spices.webp',
  },
  {
    name: 'Argan Oil',
    icon: Award,
    price: 'From 150 MAD (cosmetic, 100ml)',
    where: 'Women\'s cooperatives, Essaouira, Agadir region',
    description:
      'Argan oil comes in two types: cosmetic (cold-pressed, light color, used on skin and hair) and culinary (roasted, darker, nutty flavor for cooking). The best place to buy is directly from women\'s cooperatives between Marrakech and Essaouira. Cooperative prices are fair and the money goes directly to local women.',
    qualityTip: 'Cosmetic argan oil should be light golden, absorb into skin within minutes, and have a faint nutty smell. If it smells strong or feels greasy, it is likely diluted with cheaper oils. Always buy in dark glass bottles.',
    image: '/images/photo-argan-oil-stilllife.webp',
  },
  {
    name: 'Ceramics & Pottery',
    icon: CircleDot,
    price: 'From 30 MAD (small tagine), from 150 MAD (serving plate)',
    where: 'Fes (Fassi blue-white), Safi (colorful), Tamegroute (green)',
    description:
      'Fes is the ceramics capital of Morocco. The two main styles are hand-painted Fassi pottery (blue and white geometric patterns on white glaze) and Safi pottery (colorful, earth-toned). Decorative tagine pots, plates, bowls, and tile mosaics are the most common purchases. Functional tagines for cooking are heavier and unglazed inside.',
    qualityTip: 'Tap the piece. A clear ring means properly fired. A dull thud can mean cracks or underfiring. For food-safe ceramics, ask if the glaze is lead-free. Hand-painted pieces have slight brush variations; machine-stamped designs are perfectly uniform.',
    image: '/images/photo-ceramics-pottery.webp',
  },
  {
    name: 'Lanterns & Metalwork',
    icon: Lightbulb,
    price: 'From 100 MAD (small), from 500 MAD (large)',
    where: 'Marrakech metalwork souks, Fes',
    description:
      'Pierced brass and iron lanterns cast intricate shadow patterns that transform any room. The metalwork souk in Marrakech concentrates dozens of workshops where artisans hammer, cut, and solder by hand. Candleholders, tea trays, mirror frames, and decorative tables are also popular. Shipping is available for oversized pieces.',
    qualityTip: 'Check for even pattern work and smooth solder joints. Hold the lantern up to light to test the shadow pattern. Brass pieces should feel heavy; lightweight ones are thin and dent easily. Ask if it is wired for electricity or candle-only.',
    image: '/images/art-moroccan-lanterns.webp',
  },
  {
    name: 'Babouche Slippers',
    icon: Tag,
    price: 'From 60 MAD (basic), from 200 MAD (embroidered)',
    where: 'Every medina, best in Fes and Marrakech',
    description:
      'Babouches are the iconic Moroccan pointed-toe leather slippers. Traditional styles come in solid colors for men (usually yellow or brown) and embroidered or sequined versions for women. They are soft, flat, and meant to be slipped on and off easily. Break them in gradually over a few days to mold to your feet.',
    qualityTip: 'Check that the sole is stitched, not glued. Genuine leather babouches will have a natural smell. The inner lining should be smooth leather, not rough. Higher-quality pairs have thicker soles and reinforced heels.',
    image: '/images/card-leather.webp',
  },
  {
    name: 'Kaftans & Djellabas',
    icon: Scissors,
    price: 'From 300 MAD (ready-made), from 1,000 MAD (tailored)',
    where: 'Textile souks, Fes, Marrakech',
    description:
      'Kaftans are Morocco\'s formal garments, worn at weddings and celebrations. Ready-made versions in cotton or synthetic fabrics make lightweight souvenirs. For a serious purchase, commission a custom kaftan from a master tailor using silk or fine cotton with hand-embroidered trim. Djellabas (hooded robes) are the everyday equivalent.',
    qualityTip: 'For ready-made, check seam allowances and hem finishing. Custom tailoring takes 3-7 days, so order early in your trip. Silk kaftans command higher prices but drape beautifully. Ask for a fitting before final payment.',
    image: '/images/card-souk.webp',
  },
  {
    name: 'Silver Jewelry',
    icon: Gem,
    price: 'From 100 MAD (ring), from 500 MAD (necklace)',
    where: 'Tiznit, Essaouira, Marrakech jewelers\' souk',
    description:
      'Tiznit in southern Morocco is the silver capital, producing Berber-style pieces with coral, amber, and semi-precious stones. Common designs include Khamsa (Hand of Fatima) pendants, Berber fibula brooches, chunky cuff bracelets, and ring sets. Tuareg-style silver from the Sahara region uses ebony and niello inlay.',
    qualityTip: 'Real silver tarnishes over time. Bring a small magnet: silver is not magnetic. Look for a 925 stamp (sterling silver) on higher-end pieces. Costume jewelry is fine as a souvenir but should be priced accordingly.',
    image: '/images/photo-moroccan-jewelry.webp',
  },
  {
    name: 'Thuya Wood',
    icon: Package,
    price: 'From 50 MAD (small box), from 300 MAD (chess set)',
    where: 'Essaouira (primary), Marrakech',
    description:
      'Thuya is a slow-growing tree found only in Morocco\'s coastal regions. Its burl wood has a swirling grain pattern prized for decorative boxes, chess sets, picture frames, and inlaid furniture. Essaouira is the center of thuya woodcraft, with workshops along the ramparts where you can watch artisans at work.',
    qualityTip: 'Genuine thuya has a distinctive cedar-like fragrance. Rub the surface: it should release a woody scent. Check that inlay work (lemon wood or mother of pearl) is flush, not raised or loose. Heavier pieces indicate denser, more mature wood.',
    image: '/images/art-moroccan-woodwork.webp',
  },
] as const;

/* ================================================================
   DATA: BEST SOUKS BY CITY
   ================================================================ */

const bestSouks = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/poster-marrakech-souk.webp',
    intro: 'The largest and most famous souk network in Morocco. Branching out from Jemaa el-Fnaa, the souks are organized by trade: leather workers in one alley, metalworkers in the next, spice merchants around the corner. Overwhelming on first visit, but a clear system once you learn the layout.',
    souks: [
      { name: 'Souk Semmarine', specialty: 'Main covered market, textiles, souvenirs, ceramics', tip: 'The central artery. Prices highest here. Walk deeper for better deals.' },
      { name: 'Souk des Teinturiers', specialty: 'Dyers\' souk, colorful hanging skeins of wool and silk', tip: 'Great for photos and buying raw yarn or woven textiles.' },
      { name: 'Souk Haddadine', specialty: 'Blacksmiths and metalworkers, lanterns, iron furniture', tip: 'Watch artisans work. Commission custom pieces with 3-5 day lead time.' },
      { name: 'Souk Cherratine', specialty: 'Leather goods, bags, belts, wallets, babouches', tip: 'Compare multiple shops before buying. Quality varies widely.' },
      { name: 'Rahba Kedima', specialty: 'Spices, traditional cosmetics, dried herbs, apothecary items', tip: 'Buy whole spices here. Avoid pre-mixed "magic" remedies at inflated prices.' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/hero-fes-medina.webp',
    intro: 'The world\'s largest car-free urban zone. Fes el-Bali has over 9,000 alleys and the souks feel more authentic and less tourist-oriented than Marrakech. Prices tend to be 15-30% lower for comparable items. The tanneries, pottery workshops, and textile looms are all within walking distance.',
    souks: [
      { name: 'Chouara Tannery Area', specialty: 'Leather goods, bags, jackets, poufs', tip: 'Buy from ground-level shops, not the terrace viewing areas (terrace shops charge a premium).' },
      { name: 'Souk Attarine', specialty: 'Spices, perfumes, dried flowers, cosmetics', tip: 'Named after the attarines (perfumers). Excellent ras el hanout blends.' },
      { name: 'Ain Nokbi Pottery Quarter', specialty: 'Ceramics, zellige tiles, mosaic fountains', tip: 'Visit workshops to see the production process. Buy direct from potters for best prices.' },
      { name: 'Souk el-Henna', specialty: 'Henna, kohl, natural cosmetics, ceremonial items', tip: 'Smallest of the main souks but packed with unique finds.' },
    ],
  },
  {
    city: 'Essaouira',
    icon: MapPin,
    image: '/images/hero-essaouira.webp',
    intro: 'A compact, walkable medina with a relaxed Atlantic vibe. Essaouira is the best city for thuya woodwork, silver jewelry from nearby Tiznit, and argan oil cooperatives on the road from Marrakech. The haggling style is mellower and prices are generally fair from the start.',
    souks: [
      { name: 'Skala de la Ville Workshops', specialty: 'Thuya wood marquetry, boxes, furniture, inlaid items', tip: 'Artisans work in the old rampart workshops. Watch before buying to appreciate the craft.' },
      { name: 'Avenue de l\'Istiqlal', specialty: 'Silver jewelry, Berber artifacts, vintage Tuareg pieces', tip: 'Tiznit silversmiths sell here. Compare weight and craftsmanship across shops.' },
      { name: 'Medina Market Streets', specialty: 'Textiles, paintings, argan oil, spices, local art', tip: 'Essaouira has a strong local art scene. Original paintings from 300 MAD.' },
    ],
  },
  {
    city: 'Meknes',
    icon: Building,
    image: '/images/art-moroccan-doorway.webp',
    intro: 'Often overlooked by tourists, Meknes has authentic souks with some of the lowest prices in Morocco. The medina sees fewer foreign visitors, so shopkeepers are less practiced at hard sells. Excellent for pottery, textiles, and everyday Moroccan goods at local prices.',
    souks: [
      { name: 'Souk Nejjarine', specialty: 'Woodworkers, carved furniture, ornamental doors', tip: 'Meknes woodwork is less famous than Essaouira but comparable quality at lower prices.' },
      { name: 'Souk Bezzazine', specialty: 'Textiles, fabrics, traditional clothing, djellabas', tip: 'Great for djellabas and everyday Moroccan clothing at genuine local prices.' },
      { name: 'Kissaria Market', specialty: 'Covered market, general goods, spices, leather', tip: 'The heart of the Meknes medina. Similar quality to Fes but 20-30% cheaper.' },
    ],
  },
] as const;

/* ================================================================
   DATA: HAGGLING STEPS
   ================================================================ */

const hagglingSteps = [
  {
    step: 1,
    title: 'Browse Without Showing Interest',
    icon: Eye,
    description:
      'Walk through the souk and scan shops casually. If a vendor calls you over, smile but do not commit. The moment you show strong interest in a specific item, the dynamic shifts. Touch things lightly, compare across shops, and note where you see items you like.',
  },
  {
    step: 2,
    title: 'Ask the Price (Without Reacting)',
    icon: HandCoins,
    description:
      'When you find something you want, ask "B\'shhal?" (How much?). The vendor will give a high opening price. Do not react, do not wince, do not say "too much" immediately. A neutral face gives you leverage. If you gasp, the seller knows you are emotionally invested.',
  },
  {
    step: 3,
    title: 'Counter at 40-50% of the Asking Price',
    icon: Scale,
    description:
      'Offer roughly 40-50% of the stated price. This is your opening position. The vendor will act shocked and counter with something between their opening price and yours. This is normal and expected. Neither side expects the first numbers to hold.',
  },
  {
    step: 4,
    title: 'Trade Numbers 2-3 More Rounds',
    icon: DollarSign,
    description:
      'Raise your offer in small increments (20-30 MAD at a time). The seller drops their price in similar increments. Three to four rounds is typical. Each round brings you closer to a fair middle ground, usually 60-70% of the original asking price.',
  },
  {
    step: 5,
    title: 'Use the Walk-Away',
    icon: ArrowRight,
    description:
      'If you are stuck, politely say "shukran" (thank you) and start walking toward the door. If the seller has room to go lower, they will call you back with a new price. If they let you leave, the price was already near their bottom. You can always come back later without losing face.',
  },
  {
    step: 6,
    title: 'Seal the Deal with Goodwill',
    icon: CheckCircle,
    description:
      'When you agree on a price, shake hands and pay the agreed amount. Ask for a bag or wrapping. Many sellers will offer tea at this point. Accept if you have time; it seals the transaction with mutual respect. A good deal is one where both sides feel satisfied.',
  },
] as const;

/* ================================================================
   DATA: ENSEMBLE ARTISANAL
   ================================================================ */

const ensembleArtisanals = [
  { city: 'Marrakech', location: 'Avenue Mohammed V, near Koutoubia Mosque', specialty: 'Full range: leather, ceramics, textiles, woodwork, metalwork', hours: '9:00-19:00 daily' },
  { city: 'Fes', location: 'Boulevard Allal el-Fassi, Ville Nouvelle', specialty: 'Ceramics, zellige tiles, leather, embroidery, brass', hours: '9:00-18:00 (closed Sunday)' },
  { city: 'Essaouira', location: 'Near Bab Sbaa gate', specialty: 'Thuya wood, silver jewelry, argan oil products', hours: '9:00-18:00 daily' },
  { city: 'Meknes', location: 'Near Place el-Hedim', specialty: 'Woodwork, damascene metalwork, embroidery', hours: '9:00-18:00 (closed Sunday)' },
  { city: 'Rabat', location: 'Tarik Al Marsa, near Kasbah des Oudayas', specialty: 'Carpets, pottery, leather, national craft showcase', hours: '9:00-18:30 daily' },
] as const;

/* ================================================================
   DATA: TOURIST TRAPS
   ================================================================ */

const touristTraps = [
  { trap: 'The Friendly Guide Who Leads You to "His Uncle\'s Shop"', reality: 'The guide earns a 20-40% commission on anything you buy. The shop marks up prices to cover the commission. Politely decline unsolicited guides and navigate on your own or with a licensed guide.' },
  { trap: 'Saffron at Unbelievably Low Prices', reality: 'Real Moroccan saffron costs from 30 MAD per gram. If someone offers a big bag for 50 MAD, it is dyed safflower or turmeric threads. Buy from reputable spice shops and check the threads under light: real saffron is deep crimson, not bright orange.' },
  { trap: 'The "Closing Down" or "Special Price Today Only" Sale', reality: 'No souk shop is closing down. This is a pressure tactic. Walk away. The same "special price" will be available tomorrow, next week, and next year.' },
  { trap: 'Argan Oil in Plastic Bottles on the Roadside', reality: 'Authentic argan oil degrades in plastic and sunlight. Roadside stands often sell diluted or adulterated oil. Buy from cooperatives or certified shops that store oil in dark glass bottles.' },
  { trap: '"Antique" Berber Jewelry and Rugs', reality: 'Genuinely old pieces exist but are rare and expensive. Most "antique" items are artificially aged with chemicals or tea staining. If you want a real antique, buy from a reputable dealer who provides provenance documentation.' },
  { trap: 'The Carpet Shop Mint Tea Trap', reality: 'Rug sellers offer tea, unroll 40+ carpets, and create a sense of obligation. You are never obligated to buy. Accept the tea, enjoy the experience, and say "la shukran" (no thank you) if nothing catches your eye.' },
] as const;

/* ================================================================
   DATA: PACKING TIPS
   ================================================================ */

const packingTips = [
  { item: 'Ceramics & Pottery', tip: 'Wrap each piece in clothing or bubble wrap. Place in the center of your suitcase surrounded by soft items. Ask the shop for extra wrapping. Carry delicate pieces in hand luggage if allowed by size.' },
  { item: 'Spices', tip: 'Double-bag in zip-lock bags to prevent scent transfer. Place inside a hard container or wrap tightly. Turmeric and paprika stain everything they touch, so triple-bag those.' },
  { item: 'Leather Goods', tip: 'Stuff bags and poufs with clothing to maintain shape. Leather bags can serve as extra luggage. New leather may have a strong tannery smell; air it out for a few days before packing.' },
  { item: 'Rugs & Textiles', tip: 'Roll tightly (do not fold) to prevent crease marks. Vacuum-seal bags compress volume by 60%. For large rugs, ship separately through the shop or a freight forwarder.' },
  { item: 'Argan Oil & Liquids', tip: 'Wrap bottles in plastic bags, then in clothing. Place in checked luggage. Carry-on limits (100ml per container) apply for hand luggage.' },
  { item: 'Lanterns & Metalwork', tip: 'Large lanterns must be shipped or checked as oversized luggage. Small lanterns pack well wrapped in a sweater inside your suitcase. Remove candles before flying.' },
] as const;

/* ================================================================
   DATA: CUSTOMS INFO
   ================================================================ */

const customsInfo = [
  { region: 'European Union', allowance: 'Up to 430 EUR in goods duty-free (air travel). Dried spices, leather goods, and handicrafts pass easily. Live plants, seeds, and raw animal products may be restricted.', note: 'Keep receipts for items over 100 EUR. VAT may apply above the duty-free limit.' },
  { region: 'United Kingdom', allowance: 'Up to 390 GBP duty-free. Standard customs declarations for amounts above. No restrictions on dried spices, leather, or handicrafts.', note: 'Declare goods over the limit on the red channel. Duty rates vary by category.' },
  { region: 'United States', allowance: 'Up to 800 USD duty-free per person. Most Moroccan handicrafts qualify. Certain leather goods from specific animals may require CITES documentation.', note: 'Declare all food items on the customs form. Dried spices are generally fine.' },
  { region: 'Canada', allowance: 'Up to 800 CAD if away 7+ days. Handicrafts, spices, and textiles pass without issue. Alcohol and tobacco have separate limits.', note: 'Fresh food products may be confiscated. Stick to dried goods and packaged items.' },
  { region: 'Australia', allowance: 'Up to 900 AUD duty-free. Strict biosecurity on food items, seeds, and raw plant material. Processed spices in sealed packaging are allowed.', note: 'Declare all food on the incoming passenger card. Heavy fines for undeclared items.' },
] as const;

/* ================================================================
   DATA: PRICE COMPARISON TABLE
   ================================================================ */

const priceGuide = [
  { item: 'Leather bag (medium)', touristPrice: 'From 500 MAD', fairPrice: 'From 250-350 MAD' },
  { item: 'Argan oil (100ml cosmetic)', touristPrice: 'From 250 MAD', fairPrice: 'From 120-160 MAD' },
  { item: 'Ras el Hanout (100g)', touristPrice: 'From 60 MAD', fairPrice: 'From 20-35 MAD' },
  { item: 'Ceramic serving plate', touristPrice: 'From 200 MAD', fairPrice: 'From 80-130 MAD' },
  { item: 'Small Berber rug', touristPrice: 'From 1,500 MAD', fairPrice: 'From 600-900 MAD' },
  { item: 'Brass lantern (medium)', touristPrice: 'From 600 MAD', fairPrice: 'From 250-400 MAD' },
  { item: 'Babouche slippers', touristPrice: 'From 150 MAD', fairPrice: 'From 60-90 MAD' },
  { item: 'Silver pendant', touristPrice: 'From 350 MAD', fairPrice: 'From 150-250 MAD' },
  { item: 'Thuya wood box (small)', touristPrice: 'From 200 MAD', fairPrice: 'From 60-100 MAD' },
  { item: 'Kaftan (ready-made)', touristPrice: 'From 600 MAD', fairPrice: 'From 300-450 MAD' },
] as const;

/* ================================================================
   DATA: USEFUL DARIJA PHRASES
   ================================================================ */

const hagglingPhrases = [
  { darija: 'B\'shhal?', english: 'How much?', note: 'The essential opening question in any shop' },
  { darija: 'Ghali bezzaf!', english: 'Too expensive!', note: 'Express surprise at the initial asking price' },
  { darija: 'Nqess shwiya', english: 'Reduce a little', note: 'Ask politely for a lower price' },
  { darija: 'Akher taman?', english: 'Last price?', note: 'Signal you are serious and ready to close the deal' },
  { darija: 'La shukran', english: 'No thank you', note: 'Decline politely and prepare to walk away' },
  { darija: 'Wakha', english: 'Okay / agreed', note: 'Seal the deal when both sides are satisfied' },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoShoppingGuide() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px]">
        <img
          src="/images/hero-souk-lamps.webp"
          alt="Colorful Moroccan lanterns and lamps hanging in a traditional souk market"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 drop-shadow-lg max-w-4xl">
            Morocco Shopping Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow">
            What to buy, where to find it, and how to get a fair price in Morocco&apos;s legendary souks
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Shopping Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Intro ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping in Morocco: A Complete Guide
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco&apos;s souks rank among the most rewarding shopping experiences on the planet. The medinas of Marrakech, Fes, Essaouira, and Meknes hold thousands of workshops and stalls selling handcrafted goods that have been produced the same way for centuries: leather bags from Fes tanneries, hand-knotted Berber rugs from the Atlas Mountains, zellige ceramics from Safi, thuya wood boxes from Essaouira, and the unmistakable scent of ras el hanout from the spice souks.
            </p>
            <p>
              The challenge for visitors is separating quality from tourist-grade merchandise, knowing a fair price from an inflated one, and navigating the souk without getting overwhelmed. This guide breaks down the ten best things to buy, the top souks city by city, a step-by-step haggling strategy, fixed-price alternatives at Ensemble Artisanal shops, quality checks for every product category, customs rules for bringing purchases home, and the most common tourist traps to sidestep.
            </p>
            <p>
              All prices are in Moroccan Dirhams (MAD) based on 2026 market rates. Seasonal pricing can change, especially during peak tourist months (October-April) and around major holidays.
            </p>
          </div>
        </div>
      </section>

      {/* ── What to Buy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 10 Things to Buy in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From leather to lanterns, these are the purchases travelers rate highest for quality, authenticity, and value.
          </p>

          <div className="space-y-8">
            {whatToBuy.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="relative h-56 md:h-auto">
                      <img
                        src={item.image}
                        alt={`${item.name} for sale in a Moroccan souk market`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <ItemIcon className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {item.name}
                          </h3>
                          <div className="flex flex-wrap gap-4 mt-1 text-sm text-[var(--text-secondary)]">
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {item.price}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {item.where}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{item.description}</p>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <span className="font-semibold text-[var(--text-primary)]">Quality check:</span> {item.qualityTip}
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

      {/* ── Best Souks by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Souks by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each city offers a distinct shopping character. Here is where to head depending on what you want to buy.
          </p>

          <div className="space-y-10">
            {bestSouks.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={city.image}
                        alt={`${city.city} souk and medina market scene`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-2xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <CityIcon className="w-6 h-6" /> {city.city}
                      </h3>
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{city.intro}</p>
                      <div className="space-y-3">
                        {city.souks.map((souk) => (
                          <div key={souk.name} className="bg-[var(--surface-muted)] rounded-lg p-4">
                            <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                              {souk.name}
                            </h4>
                            <p className="text-xs text-[var(--text-secondary)] mb-1">
                              <span className="font-medium">Specialty:</span> {souk.specialty}
                            </p>
                            <p className="text-xs text-[var(--color-accent)] flex items-start gap-1">
                              <Info className="w-3 h-3 shrink-0 mt-0.5" /> {souk.tip}
                            </p>
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

      {/* ── Haggling Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Haggle: Step-by-Step
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bargaining is a social ritual in Morocco, not a hostile act. Both buyer and seller expect it. Here is how to do it well.
          </p>

          <div className="space-y-6">
            {hagglingSteps.map((s) => {
              const StepIcon = s.icon;
              return (
                <div key={s.step} className="card-moroccan p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <StepIcon className="w-5 h-5 text-[var(--color-gold)]" />
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 zellige-border">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)]" />
              Pro Haggling Tips
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Shop in the morning. The first sale (called &quot;ftour&quot;) is considered lucky, and sellers often give a better opening price.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Learn a few words of Darija. &quot;B&apos;shhal?&quot; (how much?), &quot;Ghali bezzaf&quot; (too expensive), and &quot;Shukran&quot; (thank you) go a long way.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Carry small bills. Paying with a 200 MAD note when you agreed on 180 MAD means you may not get change. Keep 20s and 50s ready.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Bundle purchases. Buying 3-4 items from one shop gives you more leverage for a group discount than buying single pieces.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Do not haggle if you have no intention of buying. Starting a negotiation and walking away at a fair price is considered rude.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Price Comparison Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Price Guide: Tourist Price vs. Fair Price
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Use these benchmarks during haggling. The &quot;fair price&quot; column represents what experienced shoppers pay.
          </p>
          <p className="text-center text-sm text-[var(--text-secondary)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices in MAD. Seasonal pricing can change during peak months.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Item</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-secondary)]">Tourist Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">Fair Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceGuide.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 text-[var(--text-primary)] font-medium">{row.item}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.touristPrice}</td>
                      <td className="p-4 text-[var(--color-accent)] font-semibold">{row.fairPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Darija Phrases */}
          <div className="mt-10 card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[var(--color-gold)]" />
              Useful Darija Phrases for Shopping
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hagglingPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-start gap-3 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="text-sm font-bold text-[var(--color-accent)] shrink-0 w-28">{phrase.darija}</div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{phrase.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ensemble Artisanal ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ensemble Artisanal: Fixed-Price Alternative
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Government-backed cooperatives where artisans sell directly at fixed, fair prices. No haggling required. Quality is guaranteed and you can watch craftsmen at work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ensembleArtisanals.map((ea) => (
              <div key={ea.city} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[var(--color-gold)]" />
                  {ea.city}
                </h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[var(--color-accent)]" />
                    {ea.location}
                  </p>
                  <p className="flex items-start gap-2">
                    <ShoppingBag className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[var(--color-accent)]" />
                    {ea.specialty}
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[var(--color-accent)]" />
                    {ea.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-amber-50">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2">
              <Info className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <span>
                <span className="font-semibold text-[var(--text-primary)]">Why visit an Ensemble Artisanal first?</span> Even if you plan to buy in the souks, visiting the Ensemble Artisanal gives you a benchmark for quality and fair pricing. You will know what a well-made tagine, a properly tanned leather bag, or a hand-knotted rug looks and costs before entering the negotiation arena of the medina.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Tourist Traps ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tourist Traps to Avoid
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These scams target first-time visitors. Knowing them in advance saves money and frustration.
          </p>

          <div className="space-y-4">
            {touristTraps.map((item) => (
              <div key={item.trap} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                  {item.trap}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-semibold">Reality:</span> {item.reality}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Inside Morocco&apos;s Souks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-moroccan-souks.webp"
                alt="Busy Moroccan souk alley with vendors displaying colorful goods"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Medina Souk Life</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-spice-souk-display.webp"
                alt="Pyramids of colorful spices displayed at a Moroccan spice merchant stall"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Spice Market Display</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-carpet-weaving-artisan.webp"
                alt="Moroccan artisan hand-weaving a Berber carpet on a traditional loom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Carpet Weaving Artisan</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing Your Purchases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Package className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing Your Purchases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting your treasures home safely requires planning. Here is how to pack each type of item.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packingTips.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.item}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 zellige-border">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)]" />
              Shipping from Morocco
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              For large or fragile items, most established souk shops can arrange international shipping. DHL and FedEx have offices in Marrakech, Fes, Casablanca, and Rabat. Costs start from 300 MAD for small parcels to Europe and from 500 MAD to North America. For rugs and furniture, freight forwarding services handle customs paperwork and door-to-door delivery.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Always get a detailed written receipt with the shop&apos;s name, your address, item description, and tracking number. Take photos of your items before they are packed. Insure shipments valued above 2,000 MAD. Seasonal pricing can change for shipping rates during holidays.
            </p>
          </div>
        </div>
      </section>

      {/* ── Customs & Duty-Free ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Customs &amp; Duty-Free Allowances
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Know your home country&apos;s duty-free limits before you shop. Keeping receipts makes border crossings smoother.
          </p>

          <div className="space-y-4">
            {customsInfo.map((item) => (
              <div key={item.region} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.region}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-1">{item.allowance}</p>
                <p className="text-xs text-[var(--color-accent)] flex items-start gap-1">
                  <Info className="w-3 h-3 shrink-0 mt-0.5" /> {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about shopping in Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Moroccan Cuisine Guide',
                description: 'Tagines, couscous, street food, and regional dishes across Morocco with prices and recommendations.',
                href: '/cuisine',
                icon: Sparkles,
              },
              {
                title: 'Morocco Budget Guide',
                description: 'How to travel Morocco on a budget. Daily costs, money-saving tips, and affordable accommodation.',
                href: '/budget',
                icon: DollarSign,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress codes, tipping customs, greetings, and social norms for respectful travel in Morocco.',
                href: '/etiquette',
                icon: ShieldCheck,
              },
              {
                title: 'Fes Travel Guide',
                description: 'The ancient medina, tanneries, riads, and cultural heritage of Morocco\'s spiritual capital.',
                href: '/fes',
                icon: Building,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── More Shopping & Culture Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Shopping &amp; Culture Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-food-guide', title: 'Morocco Food Guide', desc: 'Spice blends, cooking classes, food markets, and the flavors that define Moroccan cooking.' },
              { href: '/marrakech', title: 'Marrakech City Guide', desc: 'Jemaa el-Fnaa, the medina souks, riads, gardens, and day trips from Morocco\'s most popular city.' },
              { href: '/essaouira', title: 'Essaouira Guide', desc: 'The coastal gem known for thuya wood artisans, fresh seafood, and a laid-back Atlantic atmosphere.' },
              { href: '/morocco-money-guide', title: 'Money & Currency Guide', desc: 'ATMs, exchange rates, tipping, card acceptance, and how to manage money across Morocco.' },
              { href: '/first-time', title: 'First Time in Morocco', desc: 'Everything first-time visitors need to know: planning, safety, culture, and must-see highlights.' },
              { href: '/morocco-packing-guide', title: 'Packing Guide', desc: 'What to pack for Morocco by season, including clothing, gear, and items you can buy locally.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Ready to Explore Morocco&apos;s Souks?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Book a guided souk tour with a local expert who knows the best artisans, fair prices, and hidden workshops that most visitors miss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] px-8 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              Browse Tours <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

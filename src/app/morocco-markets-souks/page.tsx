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
  ShoppingBag,
  Palette,
  Sparkles,
  Package,
  Scale,
  HandCoins,
  Truck,
  MessageCircle,
  Footprints,
  Compass,
  Eye,
  Users,
  Camera,
  Coffee,
  Lamp,
  Navigation,
  Layers,
  Store,
  Hammer,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Markets & Souks Guide 2026 | Best Souks, Haggling Tips & What to Buy',
  description:
    'Complete guide to Moroccan markets and souks: navigate Marrakech medina, Fes el-Bali, Essaouira, Chefchaouen, Meknes, and Tangier souks. Haggling strategies, artisan workshops, what to buy, market hours, souk etiquette, and shipping tips.',
  keywords: [
    'Morocco markets souks',
    'best souks Morocco',
    'Marrakech souk guide',
    'Fes el-Bali shopping',
    'haggling tips Morocco',
    'what to buy Moroccan souk',
    'Moroccan market guide',
    'souk etiquette Morocco',
    'Morocco artisan workshops',
    'Essaouira souk',
    'Chefchaouen market',
    'Meknes souk',
    'Tangier Grand Socco',
    'Morocco souk hours',
    'shipping from Morocco',
    'Morocco tourist traps',
    'Moroccan leather goods',
    'Morocco spice market',
    'Morocco carpet buying',
    'Morocco ceramics pottery',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-markets-souks`,
  },
  openGraph: {
    title: 'Morocco Markets & Souks Guide 2026 | Navigate, Haggle & Shop',
    description:
      'Navigate Moroccan souks like a local. City-by-city souk guide for Marrakech, Fes, Essaouira, Chefchaouen, Meknes, and Tangier. Haggling strategies, fair prices in MAD, artisan workshops, and souk etiquette.',
    url: `${BASE_URL}/morocco-markets-souks`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/hero-shopping.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan souk stalls with spices, textiles, and handmade crafts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Markets & Souks Guide | Best Souks, Haggling & What to Buy',
    description:
      'City-by-city guide to Moroccan souks. Marrakech, Fes, Essaouira, Chefchaouen, Meknes, and Tangier. Haggling strategies, artisan workshops, fair prices, and souk etiquette.',
    images: [`${BASE_URL}/images/hero-shopping.webp`],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-markets-souks`,
  name: 'Morocco Markets & Souks Guide 2026 | Best Souks, Haggling Tips & What to Buy',
  description:
    'Complete guide to navigating Moroccan markets and souks. City-by-city breakdowns, haggling strategies, what to buy, artisan workshops, market hours, and souk etiquette.',
  url: `${BASE_URL}/morocco-markets-souks`,
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
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-markets-souks`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Markets & Souks', item: `${BASE_URL}/morocco-markets-souks` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a souk and a medina in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A medina is the old walled city center, while souks are the market areas within the medina. Souks are organized into specialized sections by trade (leather, spices, carpets, metalwork). Every medina contains souks, but the medina also includes residential areas, mosques, riads, and public spaces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan souk is best for first-time visitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essaouira offers the most relaxed souk experience with lower pressure and fairer starting prices. Chefchaouen is similarly calm with a compact, easy-to-navigate layout. Marrakech has the biggest selection but the most intense vendor culture. Save Fes el-Bali for when you have some souk experience, as its 9,000+ workshops can feel overwhelming on a first visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I offer when haggling in a Moroccan souk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start your counter-offer at 30-40% of the vendor\'s asking price. For high-ticket items like rugs or large leather pieces, you can open at 20-25%. The final agreed price usually lands at 40-60% of the initial ask. Always research fair prices before shopping so your counter-offer is based on actual value, not just a percentage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best things to buy in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best buys are leather goods (bags from 200 MAD, babouche slippers from 80 MAD), hand-knotted rugs (from 800 MAD), ceramics (plates from 50 MAD, tagines from 80 MAD), spices like ras el hanout and saffron (from 20 MAD per 100g), argan oil (from 80 MAD per 100ml from cooperatives), brass lanterns (from 200 MAD), and woven textiles (Berber blankets from 300 MAD).',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do Moroccan souks open and close?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most souks open between 9:00-10:00 AM and close by 7:00-8:00 PM. Many shops shut during Friday prayers from 12:00-2:00 PM. During Ramadan, hours shift later with some souks staying open until 10:00 PM. The best shopping hours are early morning (9-11 AM) when crowds are thin and some vendors offer favorable first-sale-of-the-day prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I avoid getting ripped off in Moroccan markets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research fair prices before entering the souk. Visit an Ensemble Artisanal (government fixed-price shop) first to learn baseline values. Shop deeper inside the souk where prices drop. Decline unsolicited guides who lead you to "special shops" (they earn commissions added to your price). Verify materials: real saffron is bitter, real leather has a natural scent, and handmade rugs show individual knots on the reverse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit artisan workshops in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many souks have active workshops where you can watch artisans at work. Fes is the best city for this, with coppersmith workshops at Place Seffarine, leather tanning at Chouara, and zellige tile cutting near Bab el-Ftouh. In Marrakech, the dyers\' souk (Souk des Teinturiers) and blacksmiths\' quarter (Souk Haddadine) have working artisans. Tipping from 10-20 MAD is appropriate when watching craftspeople.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I ship large purchases home from Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four main options: Barid Al-Maghrib (Moroccan Post) from 150 MAD for parcels taking 2-4 weeks. International couriers like DHL, FedEx, or UPS from 500 MAD with delivery in 3-7 days. Many established rug and furniture dealers offer their own international shipping with insurance. Or pack items in your checked luggage. For carpets and ceramics, courier services or dealer shipping with insurance are recommended.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SOUKS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const citySouks = [
  {
    city: 'Marrakech',
    icon: Star,
    tagline: 'The Grand Labyrinth',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Theatrical, intense, sensory overload',
    priceLevel: 'Higher (tourist premium applies)',
    specialtySouks: [
      { name: 'Souk Semmarine', focus: 'Main artery from Jemaa el-Fna; textiles, clothing, general goods' },
      { name: 'Souk el-Attarine', focus: 'Spices, perfumes, dried herbs, and aromatic oils' },
      { name: 'Souk des Teinturiers', focus: 'Dyers\' quarter; freshly dyed fabrics draped overhead in brilliant colors' },
      { name: 'Souk Haddadine', focus: 'Blacksmiths forging wrought iron lanterns and decorative metalwork' },
      { name: 'Souk Cherratine', focus: 'Leather workers and bookbinders; bags, wallets, belts' },
      { name: 'Souk des Bijoutiers', focus: 'Jewelry quarter; silver, gold, Berber amber, and bead necklaces' },
    ],
    description:
      'Marrakech has the most famous souks in Morocco, sprawling outward from Jemaa el-Fna in a maze of over 3,000 stalls organized by trade. The energy is unmatched. Leather goods cluster in one alley, copper lanterns in the next, mountains of spices around the corner. Prices run 20-40% higher than cities like Fes or Meknes because of tourist volume, but the variety and sheer spectacle justify a visit. The deeper you push past the main entrances, the lower prices drop and the more authentic the goods become.',
    tip: 'Use Place des Epices as your north-souk anchor point. Enter via Souk Semmarine and head deeper in. Mornings before 11 AM mean fewer crowds and cooler temperatures. Vendors near Jemaa el-Fna charge the highest premiums.',
  },
  {
    city: 'Fes el-Bali',
    icon: Award,
    tagline: 'The Artisan Capital',
    image: '/images/art-moroccan-leather.webp',
    atmosphere: 'Medieval, raw, overwhelming',
    priceLevel: 'Moderate (fewer tourists, better value)',
    specialtySouks: [
      { name: 'Chouara Tannery Quarter', focus: 'World-famous leather tanneries; bags and goods at source prices' },
      { name: 'Souk el-Attarine', focus: 'Spices and perfumes near the Al-Attarine Madrasa' },
      { name: 'Place Seffarine', focus: 'Coppersmith square; hammered brass platters, teapots, and trays' },
      { name: 'Ain Nokbi Quarter', focus: 'Blue-and-white Fassi ceramics, plates, bowls, and zellige tiles' },
      { name: 'Souk el-Nejjarine', focus: 'Woodworkers\' souk; carved furniture, thuya wood boxes, cedar pieces' },
    ],
    description:
      'Fes el-Bali is the world\'s largest car-free urban zone, home to over 9,000 workshops and the oldest continuously operating souks in Africa. This is where Morocco\'s artisan traditions run deepest. Leather tanning at Chouara uses methods unchanged for 900 years. Coppersmiths at Place Seffarine hammer brass by hand in workshops passed through generations. Prices are genuinely lower than Marrakech because fewer package tourists make it here, and the city\'s craft traditions mean quality is consistently high.',
    tip: 'Hire a licensed guide for your first visit (from 300 MAD for a half-day). The medina has 9,400 alleys and GPS can struggle with the covered passages. After your guided tour, return solo to revisit shops you spotted.',
  },
  {
    city: 'Meknes',
    icon: Building,
    tagline: 'The Local\'s Market',
    image: '/images/hero-meknes.webp',
    atmosphere: 'Authentic, unhurried, genuine',
    priceLevel: 'Low (genuine local prices)',
    specialtySouks: [
      { name: 'Grand Souk (Souk Sebbat)', focus: 'Covered market under stone archways; textiles, household goods' },
      { name: 'Souk Nejjarine', focus: 'Woodworkers\' quarter with carved furniture and painted doors' },
      { name: 'Place el-Hedim', focus: 'Open square with food stalls, juice stands, and olive vendors' },
      { name: 'Souk des Bijoux', focus: 'Jewelry shops selling silver Berber pieces at local prices' },
    ],
    description:
      'Meknes is the most underrated souk city in Morocco. Few international tourists make it here, which means prices reflect what locals actually pay. The souk unfolds south of the monumental Place el-Hedim in a series of covered passages that stay cool even in summer. This is an ideal city to calibrate your price expectations before tackling Marrakech or Fes. If a vendor quotes you a price in Meknes, it is probably only 50-100% above the real value, compared to the 300-500% markups common in tourist hotspots.',
    tip: 'Visit the olive market near Bab Mansour for the freshest olives in Morocco. Buy a kilogram of mixed olives for from 20-30 MAD and eat them in Place el-Hedim while watching street performers.',
  },
  {
    city: 'Essaouira',
    icon: Compass,
    tagline: 'The Relaxed Coastal Souk',
    image: '/images/hero-essaouira.webp',
    atmosphere: 'Laid-back, artistic, breezy',
    priceLevel: 'Moderate (fair but not cheap)',
    specialtySouks: [
      { name: 'Avenue de l\'Istiqlal', focus: 'Main souk street; argan oil, silver jewelry, general crafts' },
      { name: 'Thuya Wood Market', focus: 'Carved boxes, chess sets, and ornamental items from local thuya wood' },
      { name: 'Skala du Port', focus: 'Fresh fish market at the harbor; watch the daily catch come in' },
      { name: 'Spice Souk', focus: 'Compact spice section with argan oil cooperatives nearby' },
    ],
    description:
      'Essaouira offers the most relaxed souk experience in Morocco. The compact medina is easy to navigate, vendors are noticeably less pushy than in Marrakech, and the Atlantic breeze keeps things comfortable. The specialties here are thuya wood craftsmanship (a local tree whose burled root produces beautiful grain patterns), silver Berber jewelry, and argan oil from nearby cooperatives. Women\'s argan cooperatives on the road to Marrakech offer the most authentic oil at fair fixed prices.',
    tip: 'Buy thuya wood products here and nowhere else. Essaouira is the center of this craft, and prices are lower than in Marrakech. The fish market at Skala du Port lets you buy fresh fish and have it grilled on the spot for from 30-50 MAD.',
  },
  {
    city: 'Chefchaouen',
    icon: Palette,
    tagline: 'The Blue-Walled Gem',
    image: '/images/hero-chefchaouen.webp',
    atmosphere: 'Calm, photogenic, small-town charm',
    priceLevel: 'Low to moderate',
    specialtySouks: [
      { name: 'Plaza Uta el-Hammam', focus: 'Central square with craft shops, restaurants, and the kasbah' },
      { name: 'Main Souk Street', focus: 'Woven blankets, goat cheese, Rif Mountain crafts, leather goods' },
      { name: 'Artisan Cooperative', focus: 'Fixed-price woven goods and traditional Rifian textiles' },
    ],
    description:
      'Chefchaouen\'s souk is small, walkable, and completely different from the big-city markets. The blue-painted walls of the medina make it one of the most photographed towns in Africa, and the shopping reflects the Rif Mountain culture rather than the mainstream Moroccan tourist market. Specialties include hand-woven blankets and rugs with distinctive Rif geometric patterns, round goat cheese (jben), mountain honey, and handmade leather sandals. Vendor pressure is minimal. Prices are reasonable, and the pace is slow enough to browse without feeling hurried.',
    tip: 'The woven blankets here have patterns unique to the Rif region and are not available in Marrakech or Fes. Prices for a quality handwoven blanket start from 200 MAD, half what you would pay in larger cities.',
  },
  {
    city: 'Tangier',
    icon: Navigation,
    tagline: 'The Gateway Souk',
    image: '/images/hero-tangier.webp',
    atmosphere: 'Cosmopolitan, gritty, crossroads energy',
    priceLevel: 'Moderate',
    specialtySouks: [
      { name: 'Grand Socco (Place du Grand 9 Avril)', focus: 'Open-air market square connecting old and new Tangier' },
      { name: 'Petit Socco', focus: 'Historic café-lined square deep in the medina; leather and textiles' },
      { name: 'Rue d\'Italie area', focus: 'Antiques, vintage goods, and European-Moroccan fusion crafts' },
      { name: 'Central Market (Marché Central)', focus: 'Fresh produce, fish, spices, and everyday Moroccan goods' },
    ],
    description:
      'Tangier sits at the crossroads of Africa and Europe, and its souks reflect that dual identity. The Grand Socco is a bustling open square where the old medina meets the modern city, ringed by fruit sellers, spice vendors, and café terraces. Deeper inside the medina, Petit Socco is a compact square where Beat Generation writers once drank coffee alongside Moroccan merchants. Tangier\'s souk specialties lean toward antiques, vintage items, and a blend of Andalusian-Moroccan crafts you will not find elsewhere.',
    tip: 'The Central Market (Marché Central) near Boulevard Pasteur is one of Morocco\'s best produce markets. Arrive before 10 AM for the freshest fish, direct from the Strait of Gibraltar fishing boats.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HAGGLING STRATEGY
   ═══════════════════════════════════════════════════════════════ */

const hagglingSteps = [
  {
    step: 1,
    title: 'Research Fair Prices First',
    icon: BookOpen,
    text: 'Before entering the souk, visit an Ensemble Artisanal (government fixed-price shop found in most cities). These shops show you baseline values for leather, ceramics, rugs, and textiles. Knowing what items actually cost is the single most powerful bargaining tool you have.',
  },
  {
    step: 2,
    title: 'Browse the Full Section Before Buying',
    icon: Eye,
    text: 'Walk through the entire souk zone for your target item. Compare quality and starting prices at five or six stalls before engaging seriously with any vendor. Shops deeper inside the souk, away from main tourist routes, almost always have lower starting prices.',
  },
  {
    step: 3,
    title: 'Open at 30-40% of the Asking Price',
    icon: DollarSign,
    text: 'If a vendor says 1,000 MAD, counter with 300-400 MAD. This is not rude; it is expected. Both sides know the first number is inflated. The counter-offer signals you are a serious buyer who understands the game. For rugs or large items, you can start at 20-25%.',
  },
  {
    step: 4,
    title: 'Stay Warm, Patient, and Unhurried',
    icon: Heart,
    text: 'Haggling in Morocco is a social exchange, not a fight. Smile. Chat about the weather, football, or family. Accept the mint tea. Vendors who enjoy the interaction are more likely to give you a good price. Rushing or acting aggressive will cost you money.',
  },
  {
    step: 5,
    title: 'Use the Walk-Away When Stuck',
    icon: Footprints,
    text: 'If negotiation stalls above your target price, say "shukran" (thank you), smile, and start walking toward the exit. Most vendors call you back with a lower number. If they do not, you were likely already near their floor price, and the next stall sells the same item.',
  },
  {
    step: 6,
    title: 'Bundle Purchases for Better Deals',
    icon: Package,
    text: 'Buying three scarves? Negotiate them together, not one at a time. Vendors almost always offer a discount on multiple items. Say "what is your price for all of these?" after establishing the individual prices.',
  },
  {
    step: 7,
    title: 'Pay Cash in Small Dirhams',
    icon: HandCoins,
    text: 'Cash gets better prices than cards. Carry small denominations (20 and 50 MAD notes) so you can pay the exact agreed amount. Handing over a 200 MAD note for a 120 MAD purchase invites the "no change" problem.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST BUYS
   ═══════════════════════════════════════════════════════════════ */

const bestBuys = [
  {
    item: 'Leather Goods',
    icon: ShoppingBag,
    priceRange: 'From 80 MAD (slippers) to 800 MAD (jacket)',
    bestCity: 'Fes (Chouara Tannery Quarter)',
    details: 'Morocco has tanned leather by hand for over a millennium. Babouche slippers, bags, poufs, belts, wallets, and jackets are all strong buys. Goatskin is softer; cowhide is more durable. Fes prices run 20-30% below Marrakech for equivalent quality because you are buying at the source.',
    qualityCheck: 'Real leather has a natural scent. Synthetic copies smell chemical and have uniform texture. Check stitching tightness and zipper quality on bags.',
  },
  {
    item: 'Hand-Knotted Rugs & Carpets',
    icon: Layers,
    priceRange: 'From 800 MAD (small kilim) to 8,000+ MAD (large Beni Ourain)',
    bestCity: 'Marrakech or Fes carpet souks',
    details: 'Berber rugs from the Atlas Mountains are world-renowned. Beni Ourain rugs (cream with black geometric patterns) have become design icons globally. Kilims (flat-weave) are lighter and less expensive. Azilal rugs feature bold colors and abstract motifs. Every rug tells the story of its weaver through unique symbols.',
    qualityCheck: 'Flip the rug over: handmade rugs show individual knots on the reverse. Pull a fringe thread; real wool feels rough and organic, synthetics feel slick. Count knots per square inch for density.',
  },
  {
    item: 'Ceramics & Pottery',
    icon: Palette,
    priceRange: 'From 50 MAD (small bowl) to 400 MAD (large serving plate)',
    bestCity: 'Fes (Ain Nokbi) or Safi',
    details: 'Fes is known for blue-and-white geometric designs inspired by Andalusian art. Safi produces colorful, painterly ceramics. Tamegroute (near Zagora) makes distinctive green-glazed pottery. Plates, tagines, bowls, and zellige tile coasters make practical gifts with real character.',
    qualityCheck: 'Tap ceramics gently; a clear ring means solid construction. Ask if tagines are for cooking (lead-free glaze) or decorative only. Handmade pieces have slight asymmetries.',
  },
  {
    item: 'Spices & Ras el Hanout',
    icon: Sparkles,
    priceRange: 'From 20 MAD per 100g',
    bestCity: 'Marrakech or Fes Souk el-Attarine',
    details: 'Ras el hanout (meaning "head of the shop") is Morocco\'s signature spice blend, with up to 30 ingredients including cumin, coriander, ginger, cinnamon, and cardamom. Saffron from Taliouine is among the world\'s best. Prices for spices are dramatically lower than what you pay back home.',
    qualityCheck: 'Real saffron has thin red threads and tastes bitter. Ask vendors to vacuum-seal bags for travel. Avoid pre-mixed "tourist special" blends with vague labeling.',
  },
  {
    item: 'Argan Oil',
    icon: Award,
    priceRange: 'From 80 MAD per 100ml (cosmetic grade)',
    bestCity: 'Essaouira cooperatives',
    details: 'Cosmetic argan oil is cold-pressed from raw nuts and nearly odorless. Culinary argan is pressed from roasted nuts with a rich, nutty flavor. Women\'s cooperatives between Essaouira and Marrakech produce the most authentic oil and ensure fair wages for the workers. This is one product where buying from a cooperative beats souk shopping.',
    qualityCheck: 'Real cosmetic argan oil absorbs into skin within a minute. If it sits greasy on the surface, it has been diluted with cheaper oils. Culinary argan should smell distinctly nutty.',
  },
  {
    item: 'Textiles & Woven Goods',
    icon: Gem,
    priceRange: 'From 80 MAD (scarf) to 500 MAD (Berber blanket)',
    bestCity: 'Chefchaouen (Rif textiles) or Marrakech',
    details: 'Berber handira blankets, sabra (cactus silk) cushion covers, cotton scarves, and embroidered caftans are all sold across Moroccan souks. Each region produces distinctive patterns. Chefchaouen specializes in Rif Mountain geometric weaving. Marrakech has the widest selection.',
    qualityCheck: 'Handwoven textiles show subtle irregularities on the reverse side. Machine-made items have perfectly uniform patterns. Real sabra (agave fiber) feels slightly rough; synthetic "cactus silk" feels plasticky.',
  },
  {
    item: 'Brass Lanterns & Metalwork',
    icon: Lamp,
    priceRange: 'From 200 MAD (small lantern) to 2,000+ MAD (floor lamp)',
    bestCity: 'Marrakech (Souk Haddadine)',
    details: 'Moroccan pierced-brass lanterns cast intricate shadow patterns and have become a global interior design staple. The souk Haddadine in Marrakech is where blacksmiths still hand-punch the designs. Smaller lanterns are easy to pack; larger floor lamps can be shipped.',
    qualityCheck: 'Handmade lanterns have slightly irregular piercing patterns. Machine-stamped versions are perfectly uniform. Heavier brass is more durable than thin sheet metal.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SOUK ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Ask Before Photographing People',
    icon: Camera,
    text: 'Always ask permission before pointing a camera at vendors, artisans, or locals. Most are happy to be photographed. Some are not. A tip of from 5-10 MAD is appropriate when someone poses for you. Never photograph without asking first.',
  },
  {
    rule: 'Dress Modestly in the Medina',
    icon: Users,
    text: 'Souks are conservative spaces. Cover shoulders and knees. Women do not need to cover their hair, but modest clothing earns noticeable respect from vendors and reduces unwanted attention. Loose, breathable layers work best in the heat.',
  },
  {
    rule: 'Accept Tea Without Feeling Obligated',
    icon: Coffee,
    text: 'Mint tea is hospitality, not a sales contract. You can drink the tea, chat, and walk away without buying anything. However, sitting for tea does signal serious interest to the vendor, so accept it when you genuinely want to browse their goods.',
  },
  {
    rule: 'Decline with "La Shukran" and Keep Moving',
    icon: MessageCircle,
    text: 'A firm "la shukran" (no thank you) with a smile and continued walking is the most effective way to disengage from vendors. Making eye contact and stopping invites conversation. If you are not interested, keep your pace and your eyes forward.',
  },
  {
    rule: 'Respect Prayer Times',
    icon: Clock,
    text: 'Many vendors close briefly during the five daily prayers, especially Friday noon prayer from 12:00-2:00 PM. Do not try to force a transaction during the call to prayer. Use the pause to eat lunch, rest at a café, or explore the quieter parts of the medina.',
  },
  {
    rule: 'Yield to Donkeys and Carts',
    icon: AlertTriangle,
    text: 'In Fes especially, donkeys and hand-pushed carts are the only delivery vehicles that fit through narrow medina alleys. When you hear "balak!" (watch out), press yourself flat against the wall and let them pass. They always have the right of way.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ARTISAN WORKSHOPS
   ═══════════════════════════════════════════════════════════════ */

const artisanWorkshops = [
  {
    craft: 'Leather Tanning',
    location: 'Chouara, Fes',
    description: 'The Chouara tannery has operated since the 11th century. Watch workers treat hides in stone vats using pigeon droppings, quicklime, and natural dyes including saffron (yellow), indigo (blue), poppy (red), and mint (green). Access via surrounding leather shops that have rooftop terraces overlooking the pits.',
    tip: 'Vendors offer mint sprigs to hold under your nose against the smell. Expect from 10-20 MAD entry through a shop. Mornings have the best light for photos.',
  },
  {
    craft: 'Coppersmithing',
    location: 'Place Seffarine, Fes',
    description: 'Artisans hand-hammer brass and copper into platters, teapots, trays, and decorative pieces at this ancient square. The rhythmic hammering of metal fills the air, and you can watch an entire teapot take shape over the course of an hour.',
    tip: 'Buying directly from the workshop skips middleman markup. A hand-hammered brass tray starts from 150 MAD here versus from 300 MAD in a Marrakech souk.',
  },
  {
    craft: 'Zellige Tilework',
    location: 'Near Bab el-Ftouh, Fes',
    description: 'Zellige artisans cut geometric tile shapes from larger clay pieces by hand, then assemble them into intricate mosaic patterns. Each tile is chipped to shape with a small hammer. The skill takes years to master, and master zellige craftspeople are increasingly rare.',
    tip: 'Small zellige coasters and trivets (from 30 MAD each) make lightweight, packable souvenirs. Watching the cutting process is free; workshops welcome curious visitors.',
  },
  {
    craft: 'Thuya Woodcarving',
    location: 'Essaouira medina',
    description: 'Thuya is a conifer native to the Essaouira region whose burled root produces rich, swirling grain patterns. Woodworkers carve boxes, chess sets, picture frames, and decorative objects. The scent of freshly carved thuya fills the workshops.',
    tip: 'Essaouira is the only place to buy genuine thuya at fair prices. Identical-looking pieces sold in Marrakech are marked up 50-100%. A small jewelry box starts from 60 MAD.',
  },
  {
    craft: 'Textile Dyeing',
    location: 'Souk des Teinturiers, Marrakech',
    description: 'The dyers\' souk is one of the most photogenic spots in Marrakech\'s medina. Skeins of freshly dyed wool and silk hang from wooden poles overhead, dripping color in reds, yellows, blues, and purples. Workers dip fabrics in stone vats using both natural and synthetic dyes.',
    tip: 'This is a working souk, not a tourist attraction, so be respectful. Some dyers are happy to explain the process. Photos of the hanging fabrics are generally fine, but ask before photographing the workers directly.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: AVOIDING TOURIST TRAPS
   ═══════════════════════════════════════════════════════════════ */

const touristTraps = [
  {
    trap: 'Unsolicited "Guides" to Special Shops',
    warning: 'A friendly local offers to show you a "secret shop" or "my cousin\'s workshop" with "special local prices." The guide collects a 10-30% commission added directly to your purchase price. The shop is neither secret nor special.',
    defense: 'Politely decline with "la shukran" and navigate independently using offline maps. If you do want a guide, hire a licensed one through your riad or the tourist office.',
  },
  {
    trap: 'Fake Saffron at Bargain Prices',
    warning: 'Dyed safflower, corn silk, or plastic threads sold as premium Taliouine saffron. Real saffron costs from 20-40 MAD per gram. Anything dramatically cheaper is fake.',
    defense: 'Taste a thread before buying; real saffron is distinctly bitter. Look for thin red threads that slowly turn water golden-yellow when soaked. Buy from established spice shops, not street vendors.',
  },
  {
    trap: 'Machine-Made Rugs Sold as Handmade',
    warning: 'Factory-produced carpets marketed as hand-knotted Berber originals at handmade prices. Machine-made rugs have perfectly uniform knots and a flat, synthetic-feeling backing.',
    defense: 'Flip the rug over. Handmade rugs show visible individual knots on the reverse. Pull a fringe thread; real wool feels organic and slightly rough, while synthetic fibers feel smooth and plasticky.',
  },
  {
    trap: 'Entrance-Stall Price Inflation',
    warning: 'Shops positioned at souk entrances near tourist landmarks charge 3-5x more than identical shops further inside. They pay premium rent and rely on visitors who do not venture deeper.',
    defense: 'Walk past the first 200 meters of any souk entrance before engaging with vendors. The same goods appear at lower prices in the interior stalls where local customers also shop.',
  },
  {
    trap: 'The "Closed Riad" Misdirection',
    warning: 'Someone near your accommodation tells you it is "closed today" or "moved to a new location" and offers to take you to an alternative. Your riad is fine; they earn a commission from the replacement hotel.',
    defense: 'Ignore this completely. Walk directly to your riad. Call them if you feel uncertain. This scam targets newly arrived visitors near accommodation areas inside the medina.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SHIPPING OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const shippingOptions = [
  {
    method: 'Barid Al-Maghrib (Moroccan Post)',
    icon: Package,
    cost: 'From 150 MAD',
    time: '2-4 weeks',
    best: 'Spices, small leather goods, textiles, lightweight items',
    note: 'Reliable for non-fragile items. Available in every major city. Track parcels online.',
  },
  {
    method: 'DHL / FedEx / UPS',
    icon: Truck,
    cost: 'From 500 MAD',
    time: '3-7 days',
    best: 'Ceramics, valuable items, fragile goods, jewelry',
    note: 'Most reliable for breakables. Insurance available. Offices in Marrakech, Casablanca, and Fes.',
  },
  {
    method: 'Shop Shipping (Dealer-Arranged)',
    icon: Store,
    cost: 'From 200 MAD',
    time: '1-6 weeks',
    best: 'Carpets, large lanterns, furniture, heavy items',
    note: 'Established rug and furniture dealers have their own international shipping channels. Ask for tracking and insurance. Read reviews before committing.',
  },
  {
    method: 'Checked Luggage',
    icon: ShoppingBag,
    cost: 'Free (within airline limits)',
    time: 'Immediate',
    best: 'Spices, small ceramics, leather goods, textiles',
    note: 'Wrap ceramics in clothing. Argan oil bottles over 100ml must go in checked bags, not carry-on. Vacuum-sealed spice bags prevent leaks.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MARKET HOURS
   ═══════════════════════════════════════════════════════════════ */

const marketHours = [
  { period: 'Regular Hours', time: '9:00 AM - 7:00/8:00 PM', note: 'Most souk stalls follow this schedule daily' },
  { period: 'Friday Prayers', time: '12:00 - 2:00 PM', note: 'Many shops close; quieter browsing for those remaining open' },
  { period: 'Ramadan Hours', time: 'Shifted later; many open until 10:00 PM', note: 'Mornings are quieter; evenings are busiest after iftar' },
  { period: 'Best Shopping Window', time: '9:00 - 11:00 AM', note: 'Fewer crowds, cooler temperatures, and first-sale-of-the-day goodwill' },
  { period: 'Summer Siesta', time: '1:00 - 3:00 PM', note: 'Some vendors close during peak heat in July and August' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the difference between a souk and a medina in Morocco?',
    answer:
      'A medina is the entire old walled city center, while souks are the market areas located within the medina. Souks are organized by trade, with dedicated sections for leather, spices, carpets, metalwork, and other goods. Every medina contains souks, but the medina also includes residential neighborhoods, mosques, riads, hammams, and public spaces.',
  },
  {
    question: 'Which Moroccan souk is best for first-time visitors?',
    answer:
      'Essaouira offers the most relaxed souk atmosphere with lower vendor pressure and fairer starting prices. Chefchaouen is similarly calm with a compact, walkable layout. Both are good places to build your haggling confidence. Save Fes el-Bali for when you have some souk experience, as its 9,000+ workshops spanning 9,400 alleys can feel overwhelming on a first visit.',
  },
  {
    question: 'How much should I offer when haggling in a Moroccan souk?',
    answer:
      'Start your counter-offer at 30-40% of the vendor\'s asking price. For expensive items like rugs, open at 20-25%. The final agreed price typically settles between 40-60% of the initial ask. Research fair prices before shopping so your counter-offer is grounded in real value rather than arbitrary percentages.',
  },
  {
    question: 'What are the best things to buy in Moroccan souks?',
    answer:
      'Strong buys include leather goods (bags from 200 MAD, babouche slippers from 80 MAD), hand-knotted rugs (from 800 MAD), ceramics (plates from 50 MAD), spices like ras el hanout and saffron (from 20 MAD per 100g), argan oil from cooperatives (from 80 MAD per 100ml), brass lanterns (from 200 MAD), and woven textiles (Berber blankets from 300 MAD).',
  },
  {
    question: 'What time do Moroccan souks open and close?',
    answer:
      'Most souks open between 9:00-10:00 AM and close by 7:00-8:00 PM. Many shops close during Friday prayers from 12:00-2:00 PM. During Ramadan, hours shift later with some souks staying open past 10:00 PM. Early morning from 9:00-11:00 AM is the best time to shop: fewer crowds, cooler air, and some vendors offer favorable prices for the first sale of the day.',
  },
  {
    question: 'How do I avoid getting ripped off in Moroccan markets?',
    answer:
      'Research fair prices beforehand. Visit an Ensemble Artisanal (government fixed-price shop) to learn baseline values. Shop deeper inside the souk where prices normalize. Decline unsolicited guides who lead you to "special shops" where commissions inflate your purchase price. Verify materials: real saffron is bitter, real leather has a natural scent, and handmade rugs show individual knots on the reverse.',
  },
  {
    question: 'Can I visit artisan workshops inside Moroccan souks?',
    answer:
      'Yes. Fes is the best city for workshop visits: coppersmith workshops at Place Seffarine, leather tanning at Chouara, zellige tile cutting near Bab el-Ftouh, and woodworking at Souk el-Nejjarine. In Marrakech, the dyers\' souk (Souk des Teinturiers) and blacksmiths\' quarter (Souk Haddadine) have active artisans. Tipping from 10-20 MAD is appropriate when watching craftspeople at work.',
  },
  {
    question: 'How do I ship large purchases home from Morocco?',
    answer:
      'Four options: Barid Al-Maghrib (Moroccan Post) from 150 MAD for parcels taking 2-4 weeks. DHL, FedEx, or UPS from 500 MAD with delivery in 3-7 days. Established dealers (especially rug shops) offer their own international shipping with insurance. Or pack items in checked luggage. For fragile ceramics and large carpets, courier services or dealer shipping with tracking and insurance are recommended.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMarketsSouksPage() {
  return (
    <>
      {/* JSON-LD */}
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
            <span className="text-white">Morocco Markets &amp; Souks</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ShoppingBag className="w-4 h-4" />
            Markets &amp; Souks
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Markets &amp; Souks:
            <br className="hidden md:block" /> The Complete Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            City-by-city souk breakdowns, step-by-step haggling tactics, artisan workshops to visit,
            and everything you need to shop Moroccan markets with confidence.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Understanding Moroccan Souks
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan souks have operated continuously for centuries, organized by trade in a
                system that dates back to medieval times. Spice sellers cluster in one quarter,
                leatherworkers in another, metalworkers in a third. This layout was designed so
                that guilds could self-regulate quality and buyers could compare goods from
                competing stalls within a few steps. That same structure survives today across
                every major Moroccan city.
              </p>
              <p>
                The experience changes dramatically depending on which city you visit. Marrakech
                delivers maximum spectacle: 3,000+ stalls radiating from Jemaa el-Fna in a
                maze of narrow alleys where lanterns, leather, and spices compete for your
                attention. Fes el-Bali is rawer and more authentic, with 9,000 workshops spread
                across the world&apos;s largest car-free urban zone. Essaouira and Chefchaouen
                are gentle introductions for travelers who want the souk experience without
                the sensory overload.
              </p>
              <p>
                This guide covers six key souk cities, a step-by-step haggling strategy, the
                best items to buy (with fair prices in MAD), artisan workshops worth visiting,
                market hours, tourist traps to sidestep, and how to ship your purchases home.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices in Moroccan dirhams (MAD). Seasonal pricing
                can change during peak tourist months (October-April) and holidays, when souk
                prices tend to run 10-20% higher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Souks by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Souks by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six cities, six completely different market experiences. Here is what each one offers.
          </p>

          <div className="space-y-10">
            {citySouks.map((souk) => {
              const SoukIcon = souk.icon;
              return (
                <div key={souk.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative h-56 lg:h-auto">
                      <img
                        src={souk.image}
                        alt={`${souk.city} souk - ${souk.tagline}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                            <SoukIcon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                            {souk.city}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--color-gold)] font-medium">{souk.tagline}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-6">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                          {souk.atmosphere}
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-gold)] px-2 py-0.5 bg-[var(--color-gold)]/10 rounded">
                          Price: {souk.priceLevel}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {souk.description}
                      </p>

                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        Key Souks &amp; Specialty Areas
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {souk.specialtySouks.map((s) => (
                          <div key={s.name} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            <p className="text-xs text-[var(--text-secondary)]">
                              <strong>{s.name}:</strong> {s.focus}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-start gap-2 bg-[var(--color-accent)]/5 rounded p-3">
                        <Compass className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        <p className="text-xs text-[var(--text-secondary)]">
                          <strong>Insider tip:</strong> {souk.tip}
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

      {/* ── Haggling Strategy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Haggle in Moroccan Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bargaining is expected in every souk. Here is a seven-step strategy that works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hagglingSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex items-center gap-2">
                      <StepIcon className="w-5 h-5 text-[var(--color-gold)]" />
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 card-moroccan p-6 bg-[var(--color-accent)]/5 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Where NOT to Haggle
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Bargaining applies to souk goods, metered taxis, and private tours. Do not haggle at
                  pharmacies, supermarkets, restaurants with displayed prices, fixed-price shops
                  (marked &quot;prix fixe&quot;), Ensemble Artisanals, or when buying bread and basic
                  produce from vendors with price tags. Attempting to haggle in these settings is
                  considered disrespectful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Things to Buy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Buy in Moroccan Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Seven categories of goods worth buying, with fair prices, best cities, and quality checks.
          </p>

          <div className="space-y-6">
            {bestBuys.map((buy) => {
              const BuyIcon = buy.icon;
              return (
                <div key={buy.item} className="card-moroccan p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-3">
                        <BuyIcon className="w-6 h-6 text-[var(--color-accent)]" />
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {buy.item}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                          <p className="text-xs font-semibold text-[var(--color-gold)]">{buy.priceRange}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          <p className="text-xs text-[var(--text-muted)]">Best: {buy.bestCity}</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {buy.details}
                      </p>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-[var(--color-gold)]/5 rounded p-3">
                        <div className="flex items-start gap-2">
                          <Eye className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          <div>
                            <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Quality Check</p>
                            <p className="text-xs text-[var(--text-secondary)]">{buy.qualityCheck}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Artisan Workshops ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hammer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Artisan Workshops to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Go beyond shopping and watch master craftspeople at work. Five workshops where you can see
            Moroccan artisan traditions firsthand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artisanWorkshops.map((workshop) => (
              <div key={workshop.craft} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Building className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {workshop.craft}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-gold)] font-medium mb-3">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {workshop.location}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {workshop.description}
                </p>
                <div className="flex items-start gap-2 bg-[var(--color-accent)]/5 rounded p-3">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <p className="text-xs text-[var(--text-secondary)]">{workshop.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Hours ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Market Hours &amp; Best Times to Shop
          </h2>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] p-4">
                      Period
                    </th>
                    <th className="text-left text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] p-4">
                      Hours
                    </th>
                    <th className="text-left text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] p-4">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {marketHours.map((row, idx) => (
                    <tr key={row.period} className={idx % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 text-sm font-semibold text-[var(--text-primary)]">{row.period}</td>
                      <td className="p-4 text-sm text-[var(--color-gold)] font-medium">{row.time}</td>
                      <td className="p-4 text-sm text-[var(--text-secondary)]">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Souk Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Souk Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect the culture and you will have a better shopping experience. Six rules that matter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <RuleIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {rule.rule}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Avoiding Tourist Traps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tourist Traps to Avoid
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Most souk vendors are honest business owners. But these five scams do exist, and knowing
            them protects your wallet.
          </p>

          <div className="space-y-6">
            {touristTraps.map((trap) => (
              <div key={trap.trap} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <AlertTriangle className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                  {trap.trap}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  <strong>What happens:</strong> {trap.warning}
                </p>
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/10 rounded p-3">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-green-700 dark:text-green-400" />
                  <p className="text-xs text-green-800 dark:text-green-300">
                    <strong>Defense:</strong> {trap.defense}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shipping Purchases Home ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Your Purchases Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bought something too big for your suitcase? Here are four ways to get it home safely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.method} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <OptionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {option.method}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-semibold text-[var(--color-gold)]">{option.cost}</span>
                    <span className="text-xs text-[var(--text-muted)]">{option.time}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    <strong>Best for:</strong> {option.best}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">{option.note}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-5 max-w-3xl mx-auto bg-[var(--color-gold)]/5">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Customs &amp; Packing Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                <p className="text-xs text-[var(--text-secondary)]">Argan oil bottles over 100ml must go in checked luggage, not carry-on</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                <p className="text-xs text-[var(--text-secondary)]">Get receipts for valuable items to declare at customs if needed</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                <p className="text-xs text-[var(--text-secondary)]">Wrap ceramics in clothing or bubble wrap and pack in the center of your bag</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                <p className="text-xs text-[var(--text-secondary)]">Vacuum-seal spice bags to prevent odors from permeating your luggage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-leather-goods" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Leather Goods
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to buying Moroccan leather: bags, babouche, poufs, jackets, and how to spot quality.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-pottery-ceramics" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Palette className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Pottery &amp; Ceramics
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Fes blue, Safi colorwork, Tamegroute green. How to buy authentic Moroccan pottery and ceramics.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spice-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spice Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Ras el hanout, saffron, cumin, and more. Buying spices in Moroccan souks with fair prices.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-traditional-clothing" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Traditional Clothing
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Caftans, djellabas, and Berber textiles. Guide to buying traditional Moroccan garments.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Ready to Explore Moroccan Souks?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the leather tanneries of Fes to the spice stalls of Marrakech, every souk tells a story.
            Plan your market adventure with our city guides and start shopping with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              Explore Marrakech
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/fes-guide"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors"
            >
              Explore Fes
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors"
            >
              Explore Essaouira
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

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
  Fish,
  Leaf,
  Sun,
  Store,
  UtensilsCrossed,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Markets Guide 2026 | Best Markets, Types & Tips',
  description:
    'Complete guide to Morocco markets: famous city markets in Marrakech, Fes, Essaouira, Chefchaouen, Casablanca and Tangier. Types of markets, what to buy, best times, navigation, photography etiquette, bargaining tips, and food markets.',
  keywords: [
    'Morocco markets',
    'best markets in Morocco',
    'Moroccan market guide',
    'Marrakech market',
    'Fes medina market',
    'Essaouira fish market',
    'Chefchaouen artisan market',
    'Casablanca Central Market',
    'Tangier Grand Socco',
    'Morocco weekly markets',
    'Moroccan food markets',
    'Morocco spice market',
    'Morocco market tips',
    'Morocco market hours',
    'Morocco market photography',
    'bargaining Morocco markets',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-markets-guide`,
  },
  openGraph: {
    title: 'Morocco Markets Guide 2026 | Best Markets by City & Type',
    description:
      'Explore the best markets in Morocco: Marrakech souks, Fes medina markets, Essaouira fish market, and more. Market hours, bargaining tips, food to try, and photography etiquette.',
    url: `${BASE_URL}/morocco-markets-guide`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/hero-shopping.webp`,
        width: 1200,
        height: 630,
        alt: 'Vibrant Moroccan market stalls with colorful spices, textiles, and handcrafted goods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Markets Guide | Best Markets, Types & Tips',
    description:
      'Famous markets in Marrakech, Fes, Essaouira, Casablanca, Tangier and Chefchaouen. Types of markets, what to buy, bargaining essentials, food markets and photography etiquette.',
    images: [`${BASE_URL}/images/hero-shopping.webp`],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-markets-guide`,
  name: 'Morocco Markets Guide 2026 | Best Markets, Types & Tips',
  description:
    'Complete guide to Morocco markets with famous city markets, types of markets, what to buy, best times to visit, navigation tips, photography etiquette, bargaining essentials, and food markets.',
  url: `${BASE_URL}/morocco-markets-guide`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-markets-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Markets Guide', item: `${BASE_URL}/morocco-markets-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most famous markets in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most famous markets are the Marrakech souks (over 3,000 stalls around Jemaa el-Fna), the Fes medina markets (the world\'s largest car-free urban zone with 9,000+ workshops), Essaouira fish market at the port, Chefchaouen artisan market in the blue medina, Casablanca Central Market (March\u00e9 Central) for seafood, and the Tangier Grand Socco at the gateway to the medina.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of markets exist in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has daily souks (permanent markets in city medinas), weekly rural markets (souks held on a specific day serving farming communities), fish markets at port cities, spice markets (souk el-attarine), and antique or flea markets. Each type offers unique goods and a different atmosphere.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do Moroccan markets open and close?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most daily city markets open 9:00-10:00 AM and close by 7:00-8:00 PM. Fish markets start as early as 6:00 AM. Weekly rural markets run from sunrise to early afternoon. Many shops close for Friday prayers (12:00-2:00 PM). During Ramadan, hours shift later with evening shopping after iftar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it OK to take photos in Moroccan markets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photographing market stalls, goods, and architecture is generally fine. However, always ask permission before photographing people, especially vendors and artisans. Some will pose happily; others prefer not to be photographed. A small tip of 5-10 MAD is appreciated when someone poses for you. Avoid photographing women without explicit permission.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I bargain in a Moroccan market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by counter-offering at 30-40% of the asking price. The final price typically settles at 40-60% of the initial quote. Stay friendly, as haggling is a social ritual. Use the walk-away technique if you cannot reach your target. Bundle purchases for better deals, and always pay cash in MAD for the best price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What food should I try at Moroccan food markets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Try freshly grilled sardines at port fish markets (from 20 MAD), msemen flatbread (from 3 MAD), freshly squeezed orange juice (from 5 MAD), snail soup (babbouche, from 5 MAD), khobz bread with amlou dip, dried fruits and nuts, and street-side tagine. Marrakech\'s Jemaa el-Fna food stalls are world-famous for affordable Moroccan street food.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are weekly rural markets worth visiting in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, weekly rural markets (souks) offer an authentic glimpse into Moroccan daily life away from tourist areas. Named after the day they operate (e.g., Souk el-Had for Sunday, Souk el-Khemis for Thursday), they sell livestock, fresh produce, spices, and household goods at local prices. They are held in open fields or designated market squares across rural Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I avoid getting lost in Moroccan market medinas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Download offline maps (Google Maps or Maps.me) before entering. Note landmarks like mosques, fountains, and gates. Carry your riad\'s business card. Follow main arteries and look for colored directional signs installed in major medinas. Getting a little lost is part of the charm, but main thoroughfares always lead back to familiar squares and gates.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMOUS MARKETS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const cityMarkets = [
  {
    city: 'Marrakech',
    icon: Star,
    tagline: 'The Market Capital of Morocco',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Electric, theatrical, overwhelming',
    bestFor: 'Spices, carpets, leather, lanterns, textiles',
    highlights: [
      { name: 'Jemaa el-Fna Night Market', specialty: 'Food stalls, entertainers, fresh juice carts from sunset until midnight' },
      { name: 'Souk Semmarine', specialty: 'The main souk artery: textiles, clothing, babouche slippers, and souvenirs' },
      { name: 'Souk el-Attarine', specialty: 'Aromatic spice market with ras el hanout, saffron, cumin, and perfume oils' },
      { name: 'Rahba Kedima (Spice Square)', specialty: 'Open-air market with henna, natural cosmetics, and Berber baskets' },
    ],
    description:
      'Marrakech is synonymous with Moroccan market culture. Over 3,000 stalls radiate through the medina from the iconic Jemaa el-Fna square. By day the souks buzz with artisans, vendors, and shoppers; by night the square transforms into the world\'s largest open-air food market. Prices are higher here due to the tourist premium, but the variety and energy are unmatched anywhere in Morocco.',
    tip: 'Visit the souks in the morning (9-11 AM) for cooler temperatures and thinner crowds, then return to Jemaa el-Fna at sunset for the full spectacle of the night food market.',
  },
  {
    city: 'Fes',
    icon: Award,
    tagline: 'The Medieval Market Maze',
    image: '/images/art-moroccan-leather.webp',
    atmosphere: 'Authentic, intense, medieval',
    bestFor: 'Leather, blue ceramics, brass, embroidered textiles',
    highlights: [
      { name: 'Chouara Tannery Quarter', specialty: 'World-famous leather tanneries with rooftop viewing; leather goods at source prices' },
      { name: 'Place Seffarine', specialty: 'Coppersmith square with artisans hammering brass platters, teapots, and trays by hand' },
      { name: 'Souk el-Henna', specialty: 'Quiet square selling henna, kohl, argan oil, and natural Moroccan beauty products' },
      { name: 'Ain Nokbi Pottery Quarter', specialty: 'Workshops producing the iconic Fes blue-and-white hand-painted ceramics' },
    ],
    description:
      'Fes el-Bali is the world\'s largest car-free urban zone, home to over 9,000 artisan workshops connected by 9,400 narrow alleyways. Donkeys serve as delivery trucks through passages too narrow for vehicles. The markets feel medieval in the best sense: goods are made by hand just steps from where they are sold. Prices are 20-30% lower than Marrakech because fewer tourists reach Fes.',
    tip: 'Hire an official guide (from 300 MAD for a half day) for your first visit. The medina layout is genuinely disorienting. After one guided orientation, you can navigate independently on return visits.',
  },
  {
    city: 'Essaouira',
    icon: Fish,
    tagline: 'The Coastal Market Town',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Relaxed, salty, artistic',
    bestFor: 'Fresh fish, argan oil, thuya wood, silver jewelry',
    highlights: [
      { name: 'Port Fish Market', specialty: 'Fresh-caught sardines, shrimp, and seafood grilled to order for from 30 MAD' },
      { name: 'Thuya Woodworkers\' Quarter', specialty: 'Hand-carved thuya wood boxes, chess sets, and marquetry art' },
      { name: 'Medina Central Souk', specialty: 'Compact market with clothing, spices, argan oil, and artisan goods' },
      { name: 'Fish Auction (Cri\u00e9e)', specialty: 'Early morning wholesale fish auction at the port; fascinating to watch from 6 AM' },
    ],
    description:
      'Essaouira offers the most relaxed market experience in Morocco. The compact, walled medina is easy to navigate, vendors are low-pressure, and the fishing port provides one of Morocco\'s best food market experiences. Watch fishermen unload their catch at dawn, choose your seafood at the port market, and have it grilled on the spot for an unforgettable meal. The town is also the argan oil capital of Morocco.',
    tip: 'Visit the port fish market between 11 AM and 1 PM when grills are at peak activity. Point at the fish you want, agree on a price, and sit down while it is grilled with salt, cumin, and lemon.',
  },
  {
    city: 'Chefchaouen',
    icon: Palette,
    tagline: 'The Blue Artisan Market',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Charming, photogenic, gentle',
    bestFor: 'Rif blankets, goat cheese, honey, handmade soap, painted pottery',
    highlights: [
      { name: 'Place Outa el-Hammam', specialty: 'Central square ringed by cafes and souvenir shops with kasbah views' },
      { name: 'Blue Medina Market Streets', specialty: 'Woven goods, leather bags, and hand-painted ceramics along iconic blue walls' },
      { name: 'Women\'s Weaving Cooperatives', specialty: 'Authentic Rif Mountain textiles and blankets sold directly by artisan women' },
      { name: 'Ras el-Maa Local Market', specialty: 'Fresh produce, mountain herbs, local honey, and handmade goat cheese near the waterfall' },
    ],
    description:
      'Chefchaouen\'s market is small but uniquely charming. The blue-washed walls create the most photogenic shopping backdrop in Morocco. Goods reflect the Rif Mountain heritage: hand-woven blankets, goat cheese aged in caves, wildflower honey, olive oil soap, and blue-and-white ceramics found nowhere else. Bargaining is gentle and straightforward, making it ideal for visitors who find larger cities overwhelming.',
    tip: 'Shop at the women\'s weaving cooperatives on the edges of the medina for fair-trade textiles at honest prices. Ask your riad for directions. The hand-stitched leather bags unique to the Rif region are exceptional value.',
  },
  {
    city: 'Casablanca',
    icon: Building,
    tagline: 'The Modern Metropolis Market',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Urban, bustling, cosmopolitan',
    bestFor: 'Fresh seafood, produce, spices, everyday Moroccan goods',
    highlights: [
      { name: 'March\u00e9 Central (Central Market)', specialty: 'Art deco market hall with the freshest seafood, meats, flowers, and spices in Casablanca' },
      { name: 'Habous Quarter (New Medina)', specialty: 'French-designed Moroccan-style market with olive vendors, pastries, and leather goods' },
      { name: 'Derb Omar Wholesale Market', specialty: 'Massive wholesale district for textiles, household goods, and electronics at local prices' },
      { name: 'Old Medina Market', specialty: 'Compact traditional souk near the port with spices, leather, and affordable souvenirs' },
    ],
    description:
      'Casablanca\'s markets combine Moroccan tradition with metropolitan energy. The art deco March\u00e9 Central is a food lover\'s paradise: glistening fish, pyramids of olives, towers of spices, and butcher stalls all under one roof. The Habous Quarter, built by the French in Moroccan style, offers a curated market experience with fixed-price shops, making it a good introduction for first-timers before tackling traditional souks.',
    tip: 'Visit March\u00e9 Central in the morning when fish is freshest. The surrounding restaurants will cook your market purchases for a small fee. The Habous Quarter pastry shops are famous for their cornes de gazelle and chebakia.',
  },
  {
    city: 'Tangier',
    icon: Compass,
    tagline: 'The Gateway Market',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Cosmopolitan, breezy, crossroads',
    bestFor: 'Antiques, spices, fabric, international-influenced goods',
    highlights: [
      { name: 'Grand Socco (Place du Grand 9 Avril)', specialty: 'Historic market square at the medina entrance with vendors, cafes, and cinemas' },
      { name: 'Petit Socco', specialty: 'Intimate square inside the medina with spice stalls, antique shops, and literary-era cafes' },
      { name: 'Rue de la Libert\u00e9 Market Area', specialty: 'Mix of modern shops and traditional stalls along the main boulevard' },
      { name: 'Marshan Flea Market', specialty: 'Weekend antique and bric-a-brac market with vintage finds and Moroccan collectibles' },
    ],
    description:
      'Tangier sits at the crossroads of Africa and Europe, and its markets reflect that dual identity. The Grand Socco is the traditional gateway to the medina, a chaotic and colorful square where Africa meets the Mediterranean. The Petit Socco inside the medina has a bohemian, literary history. Tangier\'s antique and flea markets offer unique finds not available in southern Moroccan cities, including vintage European furniture and Andalusian-influenced crafts.',
    tip: 'The Grand Socco is best experienced on a Sunday morning when the produce market is at its peak. Walk from there through Rue Siaghin into the medina to reach the Petit Socco and the deeper market alleys.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPES OF MARKETS
   ═══════════════════════════════════════════════════════════════ */

const marketTypes = [
  {
    type: 'Daily Souks (Medina Markets)',
    icon: Store,
    whatToBuy: 'Spices, leather goods, textiles, ceramics, lanterns, jewelry, carpets',
    where: 'Every major city medina (Marrakech, Fes, Meknes, Essaouira, Chefchaouen)',
    description:
      'Permanent markets inside walled medinas, organized by trade into distinct zones. These are the classic Moroccan shopping experience. Stalls pass from father to son across generations. Each medina has its own character and specialty goods.',
  },
  {
    type: 'Weekly Rural Markets (Souk Days)',
    icon: Sun,
    whatToBuy: 'Fresh produce, livestock, household goods, Berber textiles, local spices',
    where: 'Rural towns across Morocco, named by the day they operate (e.g., Souk el-Had = Sunday)',
    description:
      'Held once a week in open fields or designated squares, these markets serve farming and pastoral communities. They are named after their operating day in Arabic. Souk el-Had (Sunday), Souk el-Tnine (Monday), Souk el-Tleta (Tuesday), Souk el-Arba (Wednesday), Souk el-Khemis (Thursday), Souk el-Jemaa (Friday), and Souk el-Sebt (Saturday). Entirely local, with almost no tourist presence.',
  },
  {
    type: 'Fish Markets',
    icon: Fish,
    whatToBuy: 'Fresh sardines, shrimp, squid, sea bream, swordfish, lobster (cooked to order)',
    where: 'Essaouira port, Casablanca March\u00e9 Central, Tangier port, Agadir, Al Hoceima',
    description:
      'Coastal cities have vibrant fish markets where the morning catch is sold directly from fishing boats. Essaouira and Casablanca are the most famous. Many fish markets have adjacent grilling stations where you choose your fish, agree on a price, and eat it freshly prepared with bread, salad, and harissa.',
  },
  {
    type: 'Spice Markets (Souk el-Attarine)',
    icon: Sparkles,
    whatToBuy: 'Ras el hanout, cumin, paprika, saffron, dried rosebuds, orange blossom water, perfume oils',
    where: 'Marrakech Souk el-Attarine, Fes Souk el-Attarine, Meknes spice quarter',
    description:
      'Dedicated spice zones within larger souks, named souk el-attarine (market of the perfumers). The air is thick with cumin, cinnamon, and saffron. Vendors sell both individual spices and custom blends. Ras el hanout, Morocco\'s signature spice mix with up to 30 ingredients, is the star purchase. Prices start from 20 MAD per 100g.',
  },
  {
    type: 'Antique and Flea Markets',
    icon: Gem,
    whatToBuy: 'Vintage Berber jewelry, old brass, antique tiles, vintage textiles, colonial-era furniture',
    where: 'Tangier Marshan flea market, Marrakech Bab el-Khemis, Essaouira antique shops',
    description:
      'These markets specialize in pre-owned, vintage, and antique goods. Tangier\'s weekend flea market and Marrakech\'s Thursday market at Bab el-Khemis offer everything from genuine antiques to interesting bric-a-brac. Prices vary wildly, so knowledge is essential. Genuine Berber silver jewelry and antique zellige tiles are the most prized finds.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MARKET HOURS & BEST TIMES
   ═══════════════════════════════════════════════════════════════ */

const marketHours = [
  { market: 'City Medina Souks', open: '9:00-10:00 AM', close: '7:00-8:00 PM', bestTime: 'Early morning (9-11 AM)', note: 'Many close for Friday prayers 12-2 PM' },
  { market: 'Fish Markets', open: '6:00-7:00 AM', close: '2:00-3:00 PM', bestTime: 'Mid-morning (9-11 AM)', note: 'Freshest catch sold first; go early' },
  { market: 'Weekly Rural Markets', open: 'Sunrise (6-7 AM)', close: '1:00-2:00 PM', bestTime: 'Early morning (7-9 AM)', note: 'Wind down by midday; livestock sold first' },
  { market: 'Night Food Markets', open: 'Sunset (6-7 PM)', close: 'Midnight-1:00 AM', bestTime: 'Around 8:00-9:00 PM', note: 'Jemaa el-Fna peaks after dark' },
  { market: 'Flea / Antique Markets', open: '8:00-9:00 AM', close: '4:00-5:00 PM', bestTime: 'Morning (9-11 AM)', note: 'Best finds go early; weekends busiest' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: NAVIGATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const navigationTips = [
  {
    title: 'Download Offline Maps First',
    icon: Navigation,
    text: 'Download Google Maps or Maps.me for offline use before entering the medina. GPS works inside souks even when mobile data does not. Mark your riad, the nearest gate, and key landmarks before you start exploring.',
  },
  {
    title: 'Learn the Trade Zone Layout',
    icon: Layers,
    text: 'Moroccan markets are organized by trade: leather in one zone, spices in another, metalwork in another. Once you understand the zone layout, navigating becomes intuitive. Major zones radiate outward from the central mosque or main square.',
  },
  {
    title: 'Navigate by Landmarks',
    icon: Compass,
    text: 'Most market alleys have no visible street names. Navigate by landmarks: mosques, fountains, painted gates, and open squares. The main mosque or central square is always the anchor point. When lost, walk downhill or follow the crowd toward main arteries.',
  },
  {
    title: 'Embrace Getting Lost',
    icon: Footprints,
    text: 'Getting lost in a Moroccan medina is not a failure; it is part of the experience. Some of the best discoveries happen in unplanned detours. Carry your riad\'s business card and phone number. Any shopkeeper can point you toward major landmarks.',
  },
  {
    title: 'Hire a Guide for First Visits',
    icon: Users,
    text: 'In Fes and Marrakech especially, an official guide (from 300 MAD for a half day) can transform your first visit. They know hidden workshops, can negotiate on your behalf, and help you build a mental map for independent exploration later.',
  },
  {
    title: 'Follow Colored Arrow Signs',
    icon: Eye,
    text: 'Many medinas (especially Fes and Marrakech) have installed colored directional signs pointing toward key exits, landmarks, and attractions. Follow these when you need to reorient. Blue arrows in Fes often point toward Bab Boujloud.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  {
    title: 'Always Ask Before Photographing People',
    icon: Camera,
    text: 'A simple gesture toward your camera with a questioning look is enough. Many vendors are happy to pose; others will wave you off. Respect their decision immediately. Photographing someone against their will is considered deeply disrespectful.',
  },
  {
    title: 'Tip When Someone Poses for You',
    icon: HandCoins,
    text: 'If a vendor, artisan, or local agrees to pose, a small tip of 5-10 MAD is appreciated and expected. This is a fair exchange. Professional water sellers in traditional dress and henna artists actively seek photo opportunities and will expect payment.',
  },
  {
    title: 'Photograph Goods and Architecture Freely',
    icon: Building,
    text: 'Photographing market stalls, colorful goods, architectural details, and general market scenes without people is almost always fine. Vendors often appreciate photos of their beautiful displays and may even arrange items for a better shot.',
  },
  {
    title: 'Be Discreet with Women and Children',
    icon: ShieldCheck,
    text: 'Never photograph women without explicit permission, especially in conservative rural markets. Photographing children should also involve parental permission. Use a zoom lens or capture wider scenes if you want to document the general atmosphere.',
  },
  {
    title: 'Best Light for Market Photography',
    icon: Sun,
    text: 'Morning light (9-11 AM) creates the best photographs in open-air markets. In covered souks, the interplay of light beams through gaps in the roof creates dramatic shots around midday. Golden hour (5-6 PM) is ideal for open squares like Jemaa el-Fna.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BARGAINING ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const bargainingTips = [
  { tip: 'Research prices before you enter the market. Visit an Ensemble Artisanal (fixed-price government shop) to learn baselines.', icon: BookOpen },
  { tip: 'Counter at 30-40% of the asking price. The final price typically settles at 40-60% of the initial quote.', icon: DollarSign },
  { tip: 'Stay friendly and patient. Haggling is a social ritual, not a confrontation. Smile, joke, and enjoy the process.', icon: Heart },
  { tip: 'Use the walk-away technique. Say "shukran" and start leaving; most vendors will call you back with a lower offer.', icon: Footprints },
  { tip: 'Bundle multiple purchases for better per-item pricing. "What price for all three?" signals a bulk deal.', icon: Package },
  { tip: 'Pay cash in small Moroccan dirham denominations (20 and 50 MAD notes). Cash always beats card prices.', icon: HandCoins },
  { tip: 'Never show too much excitement about an item. Casual interest keeps the starting price lower.', icon: Eye },
  { tip: 'Know when to stop. Once you reach a fair price, accept it graciously. Pushing for another 10 MAD is disrespectful.', icon: CheckCircle },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD MARKETS
   ═══════════════════════════════════════════════════════════════ */

const foodMarkets = [
  {
    food: 'Freshly Grilled Sardines',
    price: 'From 20 MAD',
    where: 'Essaouira port, Casablanca March\u00e9 Central, Tangier port area',
    description: 'Choose your sardines at the fish stall, have them grilled with salt, cumin, and lemon on a charcoal grill, and eat them with fresh bread and harissa. Essaouira\'s port grills are the most famous.',
  },
  {
    food: 'Freshly Squeezed Orange Juice',
    price: 'From 5 MAD',
    where: 'Jemaa el-Fna Marrakech, market squares across Morocco',
    description: 'Morocco\'s iconic street drink. Carts stacked with pyramids of oranges line every major market square. Freshly squeezed on the spot and served in a glass. Marrakech\'s Jemaa el-Fna has dozens of competing juice vendors.',
  },
  {
    food: 'Msemen (Moroccan Flatbread)',
    price: 'From 3 MAD',
    where: 'Street vendors at every market entrance and inside medinas',
    description: 'Flaky, layered flatbread cooked on a griddle, often served with honey, cheese, or khlii (preserved meat). A quintessential Moroccan breakfast food available at market stalls from early morning.',
  },
  {
    food: 'Snail Soup (Babbouche)',
    price: 'From 5 MAD',
    where: 'Jemaa el-Fna Marrakech, Fes medina food stalls',
    description: 'A beloved Moroccan street food served in a warm broth seasoned with thyme, liquorice, and spices. The small cart with a steaming pot is unmistakable. Use a toothpick to extract the snails. Locals swear it cures colds.',
  },
  {
    food: 'Dried Fruits, Nuts & Dates',
    price: 'From 30 MAD per 250g',
    where: 'Marrakech souks, Fes medina, every market in Morocco',
    description: 'Almonds, walnuts, figs, apricots, and Medjool dates are sold in mountainous displays. Dates from the Draa Valley and almonds from Tafraout are particularly prized. Sample before buying and buy by weight.',
  },
  {
    food: 'Street Tagine',
    price: 'From 25 MAD',
    where: 'Market-adjacent food stalls in Marrakech, Fes, Meknes',
    description: 'Simple, hearty tagines served in the clay pot they were cooked in. Chicken with preserved lemon, kefta (meatball) with egg, and vegetable tagines are the most common market versions. Served with bread for dipping.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What are the most famous markets in Morocco?',
    answer:
      'The most famous are the Marrakech souks (3,000+ stalls around Jemaa el-Fna), Fes medina markets (the world\'s largest car-free market zone with 9,000+ workshops), Essaouira fish market at the port, Chefchaouen\'s blue artisan market, Casablanca\'s art deco March\u00e9 Central, and the Tangier Grand Socco. Each city offers a completely different market atmosphere and specialty goods.',
  },
  {
    question: 'What types of markets exist in Morocco?',
    answer:
      'Morocco has daily souks (permanent markets in city medinas), weekly rural markets named by the day they operate, fish markets at coastal ports, spice markets (souk el-attarine), and antique or flea markets. Daily souks are the most visited by tourists, but weekly rural markets offer the most authentic, untouched Moroccan market experience.',
  },
  {
    question: 'What time do Moroccan markets open and close?',
    answer:
      'City medina souks open 9-10 AM and close 7-8 PM. Fish markets start as early as 6 AM and wind down by 2-3 PM. Weekly rural markets run from sunrise to early afternoon. Night food markets at Jemaa el-Fna open at sunset and run until midnight. Many shops close for Friday prayers from 12-2 PM. During Ramadan, hours shift later.',
  },
  {
    question: 'Is it OK to take photos in Moroccan markets?',
    answer:
      'Photographing stalls, goods, and architecture is generally fine. Always ask before photographing people. Many vendors will happily pose; others prefer not to be photographed. A small tip of 5-10 MAD is appreciated when someone poses for you. Avoid photographing women without explicit permission, especially in rural markets.',
  },
  {
    question: 'How much should I bargain in a Moroccan market?',
    answer:
      'Counter at 30-40% of the asking price. The final price typically settles at 40-60% of the initial quote. Stay friendly, bundle purchases for better deals, and always pay cash in MAD. Visit an Ensemble Artisanal (government fixed-price shop) first to learn baseline values, then negotiate with confidence in the souks.',
  },
  {
    question: 'What food should I try at Moroccan food markets?',
    answer:
      'Must-try foods include freshly grilled sardines at port markets (from 20 MAD), freshly squeezed orange juice (from 5 MAD), msemen flatbread (from 3 MAD), snail soup or babbouche (from 5 MAD), dried fruits and Medjool dates, and market-side tagines (from 25 MAD). Jemaa el-Fna in Marrakech offers the widest selection of street food in Morocco.',
  },
  {
    question: 'Are weekly rural markets worth visiting?',
    answer:
      'Absolutely. Weekly rural markets offer a genuine glimpse into Moroccan daily life with almost no tourist presence. They sell fresh produce, livestock, household goods, and local crafts at truly local prices. Named after the day they operate (Souk el-Had = Sunday, Souk el-Khemis = Thursday), they are held in open fields across rural Morocco from sunrise to early afternoon.',
  },
  {
    question: 'How do I avoid getting lost in a Moroccan market medina?',
    answer:
      'Download offline maps before entering. Note landmarks like mosques, fountains, and gates. Carry your riad\'s business card. Follow main arteries and look for colored directional signs. Hire a guide for your first visit to Fes or Marrakech medinas. Getting slightly lost is part of the charm, and main thoroughfares always lead back to familiar landmarks.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMarketsGuidePage() {
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
            <span className="text-white">Morocco Markets Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ShoppingBag className="w-4 h-4" />
            Markets &amp; Souks
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Markets Guide:
            <br className="hidden md:block" /> The Complete Visitor&apos;s Handbook
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Marrakech&apos;s legendary souks to Essaouira&apos;s seaside fish market. Every market
            type, what to buy, when to go, how to bargain, and what to eat at Morocco&apos;s vibrant markets.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Magic of Moroccan Markets
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan markets are sensory experiences unlike anything else in the world. Step
                through a medina gate and you enter a labyrinth of narrow alleys alive with color,
                scent, and sound. Pyramids of saffron glow golden beside towers of cumin.
                Leather bags hang like lanterns from wooden beams. The rhythmic tap of coppersmiths
                echoes off ancient stone walls. These markets have operated continuously for
                centuries, and their traditions remain remarkably intact.
              </p>
              <p>
                But Morocco&apos;s market culture extends far beyond the famous medina souks.
                Coastal cities host fish markets where the morning catch is grilled to order.
                Rural villages come alive once a week for sprawling open-air markets where
                farmers, shepherds, and artisans trade goods as they have for generations.
                Antique markets in Tangier yield vintage treasures with stories spanning
                continents. This guide covers every type of Moroccan market: where to find
                them, what to buy, when to go, how to navigate, and how to bring home the
                best finds.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices in Moroccan dirhams (MAD). Seasonal pricing
                applies during peak tourist months (October-April) and holidays, when market prices
                tend to run 10-20% higher due to increased demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Famous Markets by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Famous Markets by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six Moroccan cities, six completely different market experiences. Here is what makes each one special.
          </p>

          <div className="space-y-10">
            {cityMarkets.map((market) => {
              const MarketIcon = market.icon;
              return (
                <div key={market.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative h-56 lg:h-auto">
                      <img
                        src={market.image}
                        alt={`${market.city} market - ${market.tagline}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                            <MarketIcon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                            {market.city}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--color-gold)] font-medium">{market.tagline}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-6">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                          {market.atmosphere}
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-gold)] px-2 py-0.5 bg-[var(--color-gold)]/10 rounded">
                          Best for: {market.bestFor}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {market.description}
                      </p>

                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        Market Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {market.highlights.map((h) => (
                          <div key={h.name} className="flex items-start gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[var(--color-gold)] mt-0.5" />
                            <div>
                              <span className="text-xs font-semibold text-[var(--text-primary)]">{h.name}</span>
                              <p className="text-xs text-[var(--text-muted)]">{h.specialty}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                        <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {market.tip}
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

      {/* ── Types of Markets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Moroccan Markets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has five distinct types of markets, each offering a unique shopping experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {marketTypes.map((mt) => {
              const TypeIcon = mt.icon;
              return (
                <div key={mt.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TypeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {mt.type}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{mt.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs text-[var(--text-muted)]">
                      <ShoppingBag className="w-3 h-3 inline mr-1" />
                      <span className="font-semibold text-[var(--text-primary)]">What to buy:</span> {mt.whatToBuy}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      <span className="font-semibold text-[var(--text-primary)]">Where:</span> {mt.where}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Market Hours & Best Times ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Market Hours &amp; Best Times to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing matters. Here is when each type of Moroccan market is at its best.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-[var(--border-default)]">
              <div className="grid grid-cols-5 gap-4 p-4 bg-[var(--color-accent)]/5">
                <div className="text-xs font-bold text-[var(--text-primary)]">Market Type</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">Opens</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">Closes</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">Best Time</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">Note</div>
              </div>
              {marketHours.map((row) => (
                <div key={row.market} className="grid grid-cols-5 gap-4 p-4 items-center">
                  <div className="text-sm font-medium text-[var(--text-primary)]">{row.market}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{row.open}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{row.close}</div>
                  <div className="text-sm font-semibold text-[var(--color-accent)]">{row.bestTime}</div>
                  <div className="text-xs text-[var(--text-muted)]">{row.note}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-6">
            <Info className="w-4 h-4 inline mr-1" />
            During Ramadan, all market hours shift later. Evening markets become busier after iftar.
            Many shops open later in the morning and stay open later at night.
          </p>
        </div>
      </section>

      {/* ── Navigating the Medina ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Navigating the Medina
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to find your way through Morocco&apos;s maze-like markets without losing your bearings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {navigationTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Market Photography Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan markets are incredibly photogenic. Follow these guidelines to capture beautiful images respectfully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {photoTips.map((tip) => {
              const PhotoIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PhotoIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bargaining Essentials ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bargaining Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Quick-reference bargaining tips to negotiate with confidence and respect in any Moroccan market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bargainingTips.map((item, index) => {
              const BargainIcon = item.icon;
              return (
                <div key={index} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <BargainIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  When Not to Bargain
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Do not bargain at government-run Ensemble Artisanal shops, women&apos;s cooperatives,
                  food markets selling fresh produce by weight, pharmacies, or modern retail stores
                  with fixed prices. In these places, the listed price is the final price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Food Markets ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food Markets &amp; What to Try
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan food markets are a feast for the senses. Here are the must-try foods and where to find them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {foodMarkets.map((item) => (
              <div key={item.food} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.food}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{item.description}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  <span className="font-semibold text-[var(--text-primary)]">Where:</span> {item.where}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Food Market Safety Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Eat where locals eat; high turnover means fresh food and lower risk</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Drink bottled water; avoid tap water and ice in drinks from street vendors</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Grilled-to-order food is safest; avoid pre-cooked items sitting at room temperature</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Carry hand sanitizer; most market food is eaten with your hands and bread</p>
                </div>
              </div>
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
            <Link href="/souks" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Guide to Moroccan Souks
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide to every major souk in Morocco with maps, opening hours, and what to expect.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/moroccan-markets" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Markets Overview
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore traditional weekly markets, food markets, and modern shopping across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-souk-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Souk Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Step-by-step haggling guide, fair prices, scam avoidance, and souk etiquette for first-timers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-shopping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Scale className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete shopping guide with price tables, customs info, and advanced bargaining strategies.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-haggling-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <HandCoins className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Haggling Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Master the art of bargaining with step-by-step strategies, fair price benchmarks, and cultural tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-buy-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Buy in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best Moroccan souvenirs with real prices, quality markers, and city-by-city recommendations.
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

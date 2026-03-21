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
  Shield,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Award,
  Sparkles,
  Users,
  Eye,
  Globe,
  Scissors,
  Package,
  Layers,
  Palette,
  Droplets,
  Footprints,
  BookOpen,
  Leaf,
  Truck,
  HandHelping,
  Store,
  Ruler,
  ThumbsUp,
  Search,
  MessageCircleQuestion,
  ShieldCheck,
  Brush,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-leather-goods`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Morocco Leather Goods Guide 2026 | Fes Tanneries, Quality Tests & Buying Tips',
  description:
    'Complete guide to buying leather in Morocco. Visit Chouara tannery in Fes, learn goat vs camel vs cow leather, test quality, buy babouches, poufs, bags, belts & jackets at fair prices from 80 MAD, haggle in Marrakech souks, ship purchases home, and care for Moroccan leather.',
  keywords: [
    'Morocco leather goods',
    'buy leather Morocco',
    'Fes tannery tour',
    'Chouara tannery Fes',
    'Moroccan babouche slippers',
    'Moroccan leather pouf',
    'Moroccan leather bags',
    'goat leather Morocco',
    'camel leather Morocco',
    'cow leather Morocco',
    'natural leather dyeing Morocco',
    'Morocco leather prices 2026',
    'leather quality test Morocco',
    'bargaining leather Morocco',
    'ship leather from Morocco',
    'Marrakech leather souk',
    'Moroccan leather care',
    'vegetable tanned leather Morocco',
    'ethical leather Morocco',
    'traditional tanning process Morocco',
  ],
  openGraph: {
    title:
      'Morocco Leather Goods Guide 2026 | Fes Tanneries, Quality Tests & Buying Tips',
    description:
      'Everything you need to know about Moroccan leather. Fes tanneries, leather types, traditional tanning, what to buy (babouches, poufs, bags, belts, jackets), quality tests, fair prices, haggling strategies, ethical leather, shipping, and leather care.',
    url: PAGE_URL,
    siteName: 'City Tours Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/photo-morocco-leather.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful leather goods displayed at a Fes medina shop with handcrafted babouches and bags',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Leather Goods Guide 2026 | Tanneries, Crafts & Buying Tips',
    description:
      'Fes tanneries, leather types, quality tests, fair prices from 80 MAD, haggling strategies, ethical cooperatives, shipping, and caring for Moroccan leather.',
    images: [`${BASE_URL}/images/photo-morocco-leather.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'What leather goods should I buy in Morocco?',
    a: 'The most popular choices are babouche slippers (from 80 MAD), leather poufs (from 350 MAD unstuffed), crossbody bags (from 200 MAD), belts (from 100 MAD), leather journals (from 150 MAD), wallets (from 60 MAD), and jackets (from 1,500 MAD). Babouches and wallets are lightest to carry. Buy poufs unstuffed for easier transport.',
  },
  {
    q: 'How do I visit the Chouara tannery in Fes?',
    a: 'Access the Chouara tannery through surrounding leather shops that offer rooftop terrace views of the dye vats. There is no entrance fee, but a 10-20 MAD tip to your guide is customary. Visit between 8 and 10 AM when tanners are most active and the light is best for photos. You will receive a sprig of mint to offset the smell of the vats.',
  },
  {
    q: 'What is the difference between goat, cow, and camel leather in Morocco?',
    a: 'Goat leather (chevre) is soft, versatile, and the most widely used for babouches, poufs, and bags. Cow leather (vache) is thicker and more durable, suited for belts and jackets. Camel leather (chameau) is the rarest and most expensive with a distinctive coarse grain, used for premium goods. Sheep leather (mouton) is the softest but least durable, mainly for linings and lightweight garments.',
  },
  {
    q: 'How can I tell if Moroccan leather is good quality?',
    a: 'Use five tests. Smell: genuine leather has an earthy, slightly sweet scent rather than chemical or plastic odor. Touch: it warms to your hand with slightly irregular texture. Bend: it flexes without cracking or showing white stress marks. Water: a drop absorbs slowly over 10-30 seconds. Edge: cut edges show fibrous layers, not smooth plastic. Also check stitch evenness and hardware.',
  },
  {
    q: 'How much should I bargain when buying leather in Morocco?',
    a: 'Start at 30 to 40 percent of the asking price. A fair deal typically lands around 50 to 60 percent of the initial ask. Visit 3 to 4 shops first to compare prices. Shopping in the morning can yield better prices because of the baraka (good luck) tradition surrounding the first sale. Cooperatives have fixed, non-negotiable prices.',
  },
  {
    q: 'What is the traditional leather tanning process in Fes?',
    a: 'Hides are first soaked in lime and water for three days to loosen hair and fat. Workers scrape them clean by hand. The hides then soak in pigeon dung and tannin baths for softening, followed by days of immersion in stone vats filled with natural dyes made from saffron, poppy, indigo, cedar bark, and mint. The entire process takes two to three weeks per batch.',
  },
  {
    q: 'How do I ship leather goods from Morocco?',
    a: 'Small items fit in checked luggage. Established shops offer DHL or FedEx shipping from 300 MAD with tracking and insurance. Morocco Post (La Poste) costs from 150 MAD for parcels under 2 kg but takes 2 to 4 weeks. Buy poufs unstuffed and vacuum-seal them flat. Always keep receipts for customs declarations.',
  },
  {
    q: 'How do I care for Moroccan leather goods at home?',
    a: 'Condition leather every 3 to 6 months with a neutral leather balm or lanolin cream. Keep products away from direct sunlight and heat sources. Store bags stuffed with acid-free tissue paper to hold their shape. Wipe babouches with a damp cloth after wearing. For stains, use a dedicated leather cleaner rather than water alone. Naturally dyed leather develops a patina over time, which is desirable.',
  },
];

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Leather Goods Guide 2026',
  description:
    'Complete guide to buying leather goods in Morocco covering Fes tanneries, leather types, traditional tanning process, what to buy, quality tests, Marrakech souks, fair prices, haggling, ethical leather, shipping, and leather care.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/photo-morocco-leather.webp`,
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Morocco Leather Goods',
        item: PAGE_URL,
      },
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
   DATA: TANNERIES
   ================================================================ */

const tanneries = [
  {
    name: 'Chouara Tannery, Fes',
    icon: Star,
    founded: '11th century',
    scale: 'Over 100 stone vats',
    bestTime: '8-10 AM for active work and best light',
    description:
      'The largest and most famous tannery in Morocco, operating continuously for nearly a thousand years. Over 100 circular stone vats hold natural dyes in saffron yellow, poppy red, indigo blue, and cedar brown. Workers tread hides by foot, hand-dyeing each piece. UNESCO recognizes it as a living heritage site. The rooftop terraces of surrounding shops provide the best panoramic views.',
    visitInfo:
      'Free access through surrounding leather shops. You receive mint to offset the smell. A 10-20 MAD tip to your guide is customary.',
  },
  {
    name: 'Sidi Moussa Tannery, Fes',
    icon: Award,
    founded: '14th century',
    scale: 'Approximately 40 vats',
    bestTime: 'Morning hours, any day except Friday',
    description:
      'Smaller and far less touristed than Chouara, producing finer goat and sheep skins for bags, wallets, and bookbinding. Tanners here explain each step of the process willingly. The intimate scale makes this the best place for photography and genuine craftsman interaction without tourist crowds.',
    visitInfo:
      'Ask a nearby shop owner to guide you. Fewer tourists means more personal experience with working tanners.',
  },
  {
    name: 'Ain Azliten Tannery, Fes',
    icon: Sparkles,
    founded: '13th century',
    scale: 'Approximately 30 vats',
    bestTime: 'Mid-morning for best activity',
    description:
      'The oldest of the three Fes tanneries, near Bab Guissa in the northern medina. No tourist infrastructure exists here, making it the most raw and authentic experience. The methods predate even Chouara. Fewer than a dozen tourists per week visit, and the tanners work as they have for seven centuries.',
    visitInfo:
      'Hire a local guide to find access points. Combine with a walk to the Merenid Tombs viewpoint nearby.',
  },
  {
    name: 'Marrakech Leather District',
    icon: Store,
    founded: 'Historic souk area',
    scale: 'Dozens of workshops and shops',
    bestTime: '9 AM - 1 PM and 3 PM - 6 PM',
    description:
      'No open tannery like Fes, but Marrakech&apos;s leather district around Rue Mouassine contains dozens of workshops and retail shops. More retail-oriented with an emphasis on contemporary designs blending tradition and modern aesthetics. Many shops have on-site finishing workshops where you watch cutting, stitching, and embossing.',
    visitInfo:
      'Start at the northern Jemaa el-Fnaa souks and head toward the dyers souk. Leather shops cluster together for easy comparison shopping.',
  },
] as const;

/* ================================================================
   DATA: TRADITIONAL TANNING PROCESS
   ================================================================ */

const tanningSteps = [
  {
    step: 1,
    title: 'Soaking & Liming',
    icon: Droplets,
    duration: '3 days',
    description:
      'Raw hides arrive from slaughterhouses and are submerged in large stone pits filled with a mixture of water and quicklime. This alkaline bath loosens hair, fat, and residual flesh from the skin. Workers stir the hides with long poles. The lime solution has been used in Fes since the 9th century.',
  },
  {
    step: 2,
    title: 'Scraping & Cleaning',
    icon: Scissors,
    duration: '1-2 days',
    description:
      'Workers remove hides from the lime pits and drape them over wooden beams. Using curved blades, they scrape off loosened hair and remaining tissue by hand. This stage requires skill to avoid puncturing the hide. Each skin is inspected and sorted by thickness and quality.',
  },
  {
    step: 3,
    title: 'Softening in Pigeon Dung',
    icon: Leaf,
    duration: '2-3 days',
    description:
      'Scraped hides are placed in vats of pigeon dung mixed with water. The ammonia in the dung acts as a natural enzyme bath, softening fibers and making the leather supple. This stage is responsible for much of the tannery&apos;s signature smell. Workers tread the hides with bare feet to work the solution into every fiber.',
  },
  {
    step: 4,
    title: 'Vegetable Tanning',
    icon: Globe,
    duration: '3-7 days',
    description:
      'Softened hides soak in pits filled with solutions of bark, mimosa, and other plant-based tannins. This is the actual tanning stage that converts raw skin into stable leather. The tannins crosslink with collagen in the hide, preventing decay. Traditional vegetable tanning takes days rather than the hours that chrome tanning requires.',
  },
  {
    step: 5,
    title: 'Dyeing in Stone Vats',
    icon: Palette,
    duration: '1-3 days',
    description:
      'Tanned hides are submerged in the iconic circular stone vats filled with natural dye solutions. Saffron produces yellow, poppy flowers create red, indigo yields blue, cedar bark gives brown, and mint combined with copper oxide makes green. Workers rotate hides to ensure even color saturation.',
  },
  {
    step: 6,
    title: 'Drying & Finishing',
    icon: Star,
    duration: '2-5 days',
    description:
      'Dyed hides are laid flat on rooftops and hillsides around the medina to dry in the sun. Once dry, artisans oil the leather with natural fats for flexibility, then cut and stitch it into finished goods. The entire process from raw hide to finished product takes two to three weeks.',
  },
] as const;

/* ================================================================
   DATA: LEATHER TYPES
   ================================================================ */

const leatherTypes = [
  {
    animal: 'Goat (Chevre)',
    icon: Star,
    quality: 'Most versatile',
    characteristics:
      'Soft, supple, and lightweight with a natural grain. The most widely used leather in Moroccan craftwork. Takes dye well with rich color saturation. Used for babouches, poufs, bags, wallets, and book covers.',
    durability: 'High - softens with age without losing structure',
  },
  {
    animal: 'Cow (Vache)',
    icon: Shield,
    quality: 'Most durable',
    characteristics:
      'Thicker and more rigid than goat. Excellent for items that hold shape under stress. Smoother, more uniform surface that takes embossing well. Favored for belts, structured bags, jackets, and heavy-duty goods.',
    durability: 'Very high - lasts decades with proper care',
  },
  {
    animal: 'Camel (Chameau)',
    icon: Award,
    quality: 'Rarest and most premium',
    characteristics:
      'Extremely durable with a distinctive coarse grain unlike any other leather. Historically used by Saharan traders for saddlery. Today used for premium bags and decorative items. Limited supply makes it the most expensive option.',
    durability: 'Exceptional - resistant to heat, cold, and abrasion',
  },
  {
    animal: 'Sheep (Mouton)',
    icon: Heart,
    quality: 'Softest and lightest',
    characteristics:
      'The thinnest and most delicate Moroccan leather. Prized for buttery softness and lightweight feel. Used for linings, lightweight garments, and high-end babouches. Not suited for bags or items needing structural rigidity.',
    durability: 'Moderate - handle gently, not suited for heavy use',
  },
] as const;

/* ================================================================
   DATA: WHAT TO BUY
   ================================================================ */

const leatherCrafts = [
  {
    name: 'Babouches (Leather Slippers)',
    icon: Footprints,
    origin: 'Fes, dating to the Marinid dynasty',
    materials: 'Goat or sheep leather, leather sole',
    description:
      'Morocco&apos;s most iconic leather product. Pointed-toe slippers worn by men, women, and royalty for centuries. Men&apos;s babouches are typically plain in yellow, brown, or white. Women&apos;s come in every color with embroidery or beadwork. A quality pair molds to the foot within days. Soles are hand-stitched with waxed thread.',
    priceRange: 'From 80 MAD (plain) to 500 MAD (embroidered, premium goat leather)',
    buyingTip:
      'Buy a half-size larger than your usual size because leather contracts slightly as it dries. Check that the sole is stitched, not glued. Glued soles separate within weeks.',
  },
  {
    name: 'Leather Poufs & Ottomans',
    icon: Layers,
    origin: 'Marrakech and Fes, traditional Berber furniture',
    materials: 'Dyed goat leather panels, cotton or polyester filling',
    description:
      'Round leather floor cushions, one of Morocco&apos;s most globally recognized exports. Hand-stitched from panels of dyed goat leather with embossed geometric patterns or embroidery. Sold unstuffed for easy transport. Available in natural tan, metallics, and bold dyed hues.',
    priceRange: 'From 350 MAD (unstuffed, basic) to 900 MAD (stuffed, premium embroidered)',
    buyingTip:
      'Buy unstuffed for easier packing and cheaper shipping. Check every seam for double stitching. Natural dyed leather ages better than metallic finishes, which can peel over time.',
  },
  {
    name: 'Leather Bags & Satchels',
    icon: Package,
    origin: 'All major cities, strongest tradition in Fes',
    materials: 'Cow, goat, or camel leather; brass hardware',
    description:
      'Moroccan artisans produce crossbody satchels, structured totes, bucket bags, and duffels. The best feature hand-stitched construction, brass hardware from Fes metalworkers, and vegetable dyes. Contemporary designers blend centuries-old techniques with modern silhouettes at a fraction of European luxury prices.',
    priceRange:
      'From 200 MAD (small crossbody) to 2,000 MAD (large handcrafted tote or duffle)',
    buyingTip:
      'Inspect zipper quality, lining material, and stitch evenness. Ask whether the leather is vegetable-tanned or chrome-tanned. A strong chemical odor indicates poor finishing.',
  },
  {
    name: 'Leather Belts & Wallets',
    icon: Scissors,
    origin: 'Widespread, especially Fes and Marrakech',
    materials: 'Cow leather, brass or nickel buckles',
    description:
      'Hand-tooled leather belts with geometric or arabesque patterns pressed using heated metal stamps. Matching wallets and coin purses use softer goat leather with Berber motifs. Brass buckles are crafted by neighboring metalworkers in the same medina quarter.',
    priceRange:
      'From 60 MAD (wallet) to 300 MAD (hand-tooled belt with brass buckle)',
    buyingTip:
      'Bend the belt in half; good leather flexes smoothly without cracking or showing white stress marks. Check that the buckle attaches with a proper screw post, not glue.',
  },
  {
    name: 'Leather Jackets & Coats',
    icon: Shield,
    origin: 'Marrakech and Casablanca, modern tradition',
    materials: 'Lamb, goat, or cow leather; silk or cotton lining',
    description:
      'Quality leather jackets at prices far below European retail. Lamb is softest and most luxurious; goat balances softness with durability; cow is most hard-wearing. Shops in Marrakech and Fes offer custom tailoring with a finished jacket in 24-48 hours.',
    priceRange:
      'From 1,500 MAD (basic ready-to-wear) to 6,000 MAD (custom-tailored, premium lamb leather)',
    buyingTip:
      'Custom orders require at least one fitting; allow two days minimum. Try the finished jacket before paying final price. Check shoulder seam alignment and lining quality.',
  },
  {
    name: 'Leather-Bound Journals & Books',
    icon: BookOpen,
    origin: 'Fes, linked to Islamic scholarly tradition',
    materials: 'Goat leather, handmade paper, gold leaf',
    description:
      'Leather bookbinding in Fes dates to when the city was the intellectual capital of the Islamic world. Covers are tooled with geometric patterns using heated brass stamps, then gilded with gold leaf. Originally for Quran binding, the tradition now produces travel journals, guest books, and photo albums.',
    priceRange:
      'From 150 MAD (small journal) to 700 MAD (large gold-tooled cover with handmade paper)',
    buyingTip:
      'Fes is the best city for bookbinding. Ask to see the artisan at work; genuine craftspeople demonstrate their process proudly. Check that gold tooling is actual leaf, not printed foil.',
  },
] as const;

/* ================================================================
   DATA: DYEING METHODS
   ================================================================ */

const dyeingSources = [
  {
    method: 'Natural Dyeing (Traditional)',
    icon: Leaf,
    colors: [
      { name: 'Yellow', source: 'Saffron and pomegranate rind' },
      { name: 'Red', source: 'Poppy flowers and henna' },
      { name: 'Blue', source: 'Indigo plant (from the Sahel)' },
      { name: 'Brown', source: 'Cedar bark and walnut shells' },
      { name: 'Green', source: 'Mint leaves and copper oxide' },
      { name: 'Black', source: 'Antimony (kohl) and charcoal' },
    ],
    description:
      'The traditional method used in Fes for over a thousand years. Hides soak in stone vats filled with plant-based dye solutions for one to three days. Natural dyes produce warm, rich tones with subtle variation. Colors deepen with age and develop a prized patina.',
    pros: 'Environmentally friendlier, unique color variation, beautiful aging, no harsh chemical smell',
    cons: 'Higher cost, limited color range, slower production, colors may shift slightly over years',
  },
  {
    method: 'Chemical Dyeing (Chrome Tanning)',
    icon: Droplets,
    colors: [
      { name: 'Any color', source: 'Synthetic aniline and chrome-based pigments' },
    ],
    description:
      'Introduced in the 20th century and now widespread. Chrome tanning uses chromium salts and synthetic pigments to produce leather faster and in a wider color range, including bright neons and metallic finishes. The process takes hours rather than days.',
    pros: 'Faster production, wider color range, more uniform results, lower cost per hide',
    cons: 'Environmental pollution from chromium waste, potential skin irritation, colors can fade unevenly, lacks the character of natural dyes',
  },
] as const;

/* ================================================================
   DATA: QUALITY TESTS
   ================================================================ */

const qualityTests = [
  {
    test: 'The Smell Test',
    icon: Search,
    pass: 'Natural, earthy scent. Vegetable-tanned leather has a slightly sweet, woody aroma. Well-finished leather smells faintly of conditioning oils.',
    fail: 'Harsh chemical or ammonia odor signals poor finishing or synthetic materials. Walk away from any product that smells of plastic.',
  },
  {
    test: 'The Touch Test',
    icon: HandHelping,
    pass: 'Warms quickly to your touch with slightly irregular surface texture. Pressing your thumb creates temporary color variation as fibers compress.',
    fail: 'Stays cool with perfectly uniform, plastic-like texture. If every piece on the shelf feels identical, the material is likely synthetic.',
  },
  {
    test: 'The Bend Test',
    icon: Ruler,
    pass: 'Bends smoothly like folding thick cloth. Surface color stays consistent through the bend and springs back without permanent creasing.',
    fail: 'Cracks, shows white stress lines, or develops permanent creases. Cracking indicates low-quality hide or bonded leather.',
  },
  {
    test: 'The Water Test',
    icon: Droplets,
    pass: 'A tiny drop absorbs slowly over 10-30 seconds, darkening slightly. The spot dries and returns to normal within minutes.',
    fail: 'Water beads up and rolls off immediately, indicating heavy synthetic coating or faux material.',
  },
  {
    test: 'The Edge Test',
    icon: Eye,
    pass: 'Cut edges show a fibrous, slightly rough cross-section with visible layers. The edge looks organic and textured.',
    fail: 'Smooth, plastic-like edges with uniform color indicate synthetic material. Bonded leather shows a paper-like edge.',
  },
  {
    test: 'The Stitch Test',
    icon: Scissors,
    pass: 'Hand-stitched goods show slight variation with strong waxed thread pulled tight. Both hand and machine stitching resist a gentle tug.',
    fail: 'Loose stitches, thin thread, or stitches that pull free indicate poor construction. Glued seams are lowest quality.',
  },
] as const;

/* ================================================================
   DATA: BARGAINING STEPS
   ================================================================ */

const bargainingSteps = [
  {
    step: 'Research Prices Before You Shop',
    icon: Search,
    description:
      'Visit cooperatives or fixed-price shops first to establish baseline prices. Check 3-4 shops for the same item type. Knowing approximate fair prices is the foundation of successful bargaining.',
  },
  {
    step: 'Start at 30-40% of the Asking Price',
    icon: DollarSign,
    description:
      'The seller&apos;s first price is typically 2-4 times what they expect. Start low to leave negotiation room. This is expected and part of the cultural ritual.',
  },
  {
    step: 'Stay Calm and Friendly',
    icon: Heart,
    description:
      'Bargaining is a social exchange, not a confrontation. Accept the tea offered, smile, and make conversation. Firm but pleasant buyers get better results than aggressive ones.',
  },
  {
    step: 'Use the Walk-Away Strategy',
    icon: ArrowRight,
    description:
      'The most powerful bargaining tool. If prices do not meet your target, politely leave. If the seller calls you back, you have found the floor price.',
  },
  {
    step: 'Bundle Multiple Items',
    icon: Package,
    description:
      'Sellers give better per-item prices on bulk purchases. Bundle babouches with a belt and wallet. Ask for a package price. Bulk buying can reduce prices 20-30%.',
  },
  {
    step: 'Shop in the Morning for Baraka',
    icon: Clock,
    description:
      'The first sale of the day is considered good luck (baraka). Sellers accept lower prices early to secure that first transaction. Arrive when shops open around 9-10 AM.',
  },
] as const;

/* ================================================================
   DATA: SHIPPING OPTIONS
   ================================================================ */

const shippingOptions = [
  {
    method: 'Carry in Luggage',
    icon: Package,
    cost: 'Free (within airline weight limits)',
    timeframe: 'Immediate',
    description:
      'The simplest option for small items. Babouches, wallets, belts, and small bags fit in checked luggage. Buy poufs unstuffed and vacuum-seal flat. Keep receipts for customs declarations.',
    bestFor: 'Babouches, wallets, belts, small bags, journals',
  },
  {
    method: 'Shop Shipping (DHL/FedEx)',
    icon: Truck,
    cost: 'From 300 MAD for small packages, from 800 MAD for large items',
    timeframe: '5-10 business days',
    description:
      'Many established shops offer international shipping through DHL, FedEx, or UPS with packing and customs handled. Ask for tracking numbers and insurance. Verify the shop&apos;s shipping reputation through reviews before paying.',
    bestFor: 'Poufs, large bags, multiple items, jackets',
  },
  {
    method: 'Morocco Post (La Poste)',
    icon: Globe,
    cost: 'From 150 MAD for parcels under 2 kg',
    timeframe: '2-4 weeks',
    description:
      'Most affordable option for non-urgent shipments. Pack and address the parcel yourself at any post office. Tracking available but less reliable. Recommended only for items you can afford to replace if lost.',
    bestFor: 'Budget shipping, non-fragile items, lighter packages',
  },
] as const;

/* ================================================================
   DATA: LEATHER CARE
   ================================================================ */

const careTips = [
  {
    title: 'Condition Regularly',
    icon: Brush,
    description:
      'Apply a neutral leather balm or lanolin-based cream every 3 to 6 months. Work the conditioner into the surface with a soft cloth using circular motions. This prevents cracking and keeps the leather supple. Avoid products containing silicone, which seals the pores.',
  },
  {
    title: 'Store Properly',
    icon: Package,
    description:
      'Keep bags stuffed with acid-free tissue paper to maintain their shape. Store leather goods in breathable cotton dust bags, never in plastic. Hang jackets on padded hangers, not wire. Keep items in a cool, dry place away from direct sunlight.',
  },
  {
    title: 'Handle Stains Promptly',
    icon: Droplets,
    description:
      'Blot liquid spills immediately with a dry cloth. For oil stains, sprinkle cornstarch on the spot and leave overnight before brushing off. Use a dedicated leather cleaner for stubborn marks. Never soak leather in water or use household cleaning products.',
  },
  {
    title: 'Protect From Elements',
    icon: ShieldCheck,
    description:
      'Apply a water-resistant spray designed for leather before first use. Moroccan leather is vegetable-tanned, so it is more sensitive to water than chrome-tanned leather. If caught in rain, let the item dry naturally at room temperature. Never use a hairdryer or heater.',
  },
  {
    title: 'Embrace the Patina',
    icon: Sparkles,
    description:
      'Naturally dyed Moroccan leather develops a rich patina over time as oils from handling darken the surface. This aging process is considered desirable and adds character. The color shift is a sign of genuine, quality leather rather than a defect.',
  },
  {
    title: 'Care for Babouches',
    icon: Footprints,
    description:
      'Wipe babouches with a damp cloth after each wearing. Apply leather cream to the uppers once a month. Use cedar shoe trees or stuff with newspaper overnight to absorb moisture. Rotate between pairs to extend their lifespan.',
  },
] as const;

/* ================================================================
   DATA: ETHICAL LEATHER
   ================================================================ */

const ethicalPoints = [
  {
    title: 'Worker Health & Safety',
    icon: Shield,
    description:
      'Workers spend hours in chemical solutions, often without protective equipment. Supporting cooperatives that provide gloves, boots, and fair wages helps improve working conditions.',
  },
  {
    title: 'Water Pollution',
    icon: Droplets,
    description:
      'Tannery runoff flows into the Fes River and surrounding waterways. Morocco has invested in relocating operations to the Ain Nokbi industrial zone with water treatment facilities.',
  },
  {
    title: 'Vegetable vs Chrome Tanning',
    icon: Leaf,
    description:
      'Vegetable tanning uses natural plant extracts and produces biodegradable waste. Chrome tanning is faster but generates toxic chromium waste. Ask your seller which method was used.',
  },
  {
    title: 'Fair Trade Cooperatives',
    icon: Users,
    description:
      'Cooperatives guarantee artisans minimum wages, safe conditions, and profit sharing. Products cost slightly more than souk bargains but your money reaches the makers directly.',
  },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoLeatherGoodsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/photo-morocco-leather.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Leather Goods</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Layers className="w-4 h-4" />
            Artisan Crafts &amp; Shopping
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Leather Goods Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the ancient tanneries of Fes to the bustling souks of Marrakech.
            Leather types, quality tests, fair prices, haggling strategies, ethical
            sourcing, and how to care for your purchases at home.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            A Thousand-Year Tradition in Leather
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco&apos;s leather tradition dates to the 9th century, when tanners
              in Fes began processing hides using techniques borrowed from Andalusian
              and Middle Eastern craftsmen. Over the following centuries, Moroccan
              leather became so renowned across Europe that the English language
              adopted the word &quot;morocco&quot; as a generic term for fine goatskin
              leather. That same craft continues today, largely unchanged, in the
              medieval tanneries operating in the heart of the Fes medina.
            </p>
            <p>
              Buying leather in Morocco is more than a shopping transaction. The
              tanner who treads hides in stone vats, the dyer who mixes saffron and
              indigo by eye, the artisan who stitches babouches with waxed thread
              and a curved needle &mdash; each plays a role in a production chain
              that predates industrial manufacturing by centuries. Understanding that
              chain transforms how you evaluate and appreciate what you buy.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              <Info className="w-4 h-4 inline mr-1" />
              All prices listed are starting prices after bargaining in souks.
              Cooperative prices are fixed. Seasonal pricing can change during peak
              tourist months (October-April). Prices verified as of early 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tanneries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tanneries &amp; Leather Districts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the medieval stone vats of Fes to the bustling workshops of
            Marrakech, these are the places where Moroccan leather comes to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tanneries.map((tannery) => {
              const TanneryIcon = tannery.icon;
              return (
                <div key={tannery.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TanneryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tannery.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">
                        {tannery.founded} &middot; {tannery.scale}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {tannery.description}
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10 mb-3">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">
                        How to visit:
                      </span>{' '}
                      {tannery.visitInfo}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>Best time: {tannery.bestTime}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Traditional Tanning Process ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Traditional Tanning Process
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From raw hide to finished leather in six stages, using methods that have
            remained largely unchanged for over a thousand years.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {tanningSteps.map((item) => {
                  const StepIcon = item.icon;
                  return (
                    <div key={item.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">
                          {item.step}
                        </span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <StepIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <div>
                            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                              {item.title}
                            </h3>
                            <span className="text-xs text-[var(--color-gold)]">
                              Duration: {item.duration}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leather Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Leather Types: Goat, Cow, Camel &amp; Sheep
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Different animals produce leather with distinct characteristics.
            Knowing the differences helps you choose the right material.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {leatherTypes.map((type) => {
              const TypeIcon = type.icon;
              return (
                <div key={type.animal} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TypeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {type.animal}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">
                        {type.quality}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                    {type.characteristics}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Shield className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>Durability: {type.durability}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to Buy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Buy: Traditional Leather Crafts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan artisans transform raw hides into an extraordinary range of
            products, from everyday footwear to heirloom-quality home decor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {leatherCrafts.map((craft) => {
              const CraftIcon = craft.icon;
              return (
                <div key={craft.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CraftIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {craft.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">
                        {craft.origin}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                    {craft.description}
                  </p>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">
                      {craft.priceRange}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <ThumbsUp className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">
                        Buying tip:
                      </span>{' '}
                      {craft.buyingTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Natural vs Chemical Dyeing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Natural vs Chemical Dyeing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How leather gets its color matters for quality, longevity, and
            environmental impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {dyeingSources.map((dye) => {
              const DyeIcon = dye.icon;
              return (
                <div key={dye.method} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DyeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {dye.method}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {dye.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wider">
                      Color Sources
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dye.colors.map((color) => (
                        <span
                          key={color.name}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-[var(--surface-muted)] rounded-full text-xs text-[var(--text-secondary)]"
                        >
                          <Droplets className="w-3 h-3 text-[var(--color-accent)]" />
                          <span className="font-medium text-[var(--text-primary)]">
                            {color.name}:
                          </span>{' '}
                          {color.source}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2.5 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-green-700">Pros:</span>{' '}
                        {dye.pros}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-red-600">Cons:</span>{' '}
                        {dye.cons}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quality Tests ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Six Quality Tests for Leather Goods
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use these tests in any leather shop to determine whether a product is
            worth the price. Knowledge is the best defense against overpriced or
            synthetic goods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {qualityTests.map((item) => {
              const TestIcon = item.icon;
              return (
                <div key={item.test} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.test}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-green-700">Pass:</span>{' '}
                        {item.pass}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-red-600">Fail:</span>{' '}
                        {item.fail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bargaining ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHelping className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Haggle for Leather Goods
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bargaining is expected in Moroccan souks. These strategies help you
            reach a fair price while respecting the cultural tradition.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {bargainingSteps.map((item, index) => {
                  const StepIcon = item.icon;
                  return (
                    <div key={item.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <StepIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {item.step}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shipping ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Leather Goods Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting your purchases home safely requires planning. The right method
            depends on the size, value, and quantity of your leather goods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {shippingOptions.map((option) => {
              const ShipIcon = option.icon;
              return (
                <div key={option.method} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ShipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.method}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">
                        {option.timeframe}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">
                      {option.cost}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>Best for: {option.bestFor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ethical Leather ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical &amp; Environmental Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the human and environmental costs of leather production
            helps you make informed purchasing decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ethicalPoints.map((point) => {
              const PointIcon = point.icon;
              return (
                <div key={point.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <PointIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Caring for Moroccan Leather ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Brush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Caring for Moroccan Leather at Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Proper care extends the life of your leather purchases and preserves the
            natural beauty of Moroccan craftsmanship for years.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {careTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
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
            Answers to the most common questions about buying leather in Morocco.
          </p>
          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
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
                title: 'Fes City Guide',
                description:
                  'Explore the spiritual capital of Morocco, home to the world-famous tanneries and the oldest medina.',
                href: '/fes',
                icon: MapPin,
              },
              {
                title: 'Marrakech City Guide',
                description:
                  'Navigate the red city&apos;s souks, palaces, and vibrant leather shopping districts.',
                href: '/marrakech',
                icon: Star,
              },
              {
                title: 'Morocco Ceramics Guide',
                description:
                  'Discover Fes zellige tilework, Safi pottery, and hand-painted ceramics across Morocco.',
                href: '/ceramics',
                icon: Palette,
              },
              {
                title: 'Morocco Budget Travel',
                description:
                  'Strategies for traveling Morocco affordably, including souk shopping and bargaining.',
                href: '/budget-travel',
                icon: DollarSign,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 hover:shadow-lg transition-shadow group"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Moroccan Leather?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Plan your visit to the tanneries of Fes, discover artisan workshops, and
            bring home handcrafted leather goods that carry a millennium of tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Fes
            </Link>
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Store className="w-5 h-5" />
              Explore Marrakech
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

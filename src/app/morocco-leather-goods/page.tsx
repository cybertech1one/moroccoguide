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
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Leather Goods 2026 | Buying Guide, Tanneries & Artisan Crafts',
  description:
    'Complete guide to buying leather goods in Morocco. Explore Fes tanneries (Chouara, Sidi Moussa), Marrakech leather district, babouches, poufs, bags, belts, and book covers. Leather types, dyeing process, quality indicators, bargaining strategies, shipping tips, and ethical cooperatives.',
  keywords: [
    'Morocco leather goods',
    'buy leather Morocco',
    'Fes tannery tour',
    'Chouara tannery',
    'Sidi Moussa tannery',
    'Marrakech leather district',
    'Moroccan babouche slippers',
    'Moroccan leather pouf',
    'Moroccan leather bags',
    'goat leather Morocco',
    'camel leather Morocco',
    'natural leather dyeing Morocco',
    'Morocco leather prices 2026',
    'leather quality Morocco',
    'bargaining leather Morocco',
    'ship leather from Morocco',
    'Moroccan leather cooperatives',
    'leather book covers Morocco',
    'Moroccan leather belts',
    'vegetable tanned leather Morocco',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-leather-goods`,
  },
  openGraph: {
    title: 'Morocco Leather Goods 2026 | Buying Guide, Tanneries & Artisan Crafts',
    description:
      'Everything you need to know about Moroccan leather goods. From Fes tanneries to artisan workshops, leather types, quality tests, fair prices, bargaining, and shipping leather home.',
    url: `${BASE_URL}/morocco-leather-goods`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/photo-morocco-leather.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan leather goods displayed at a Fes souk with colorful babouches and handcrafted bags',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Leather Goods 2026 | Tanneries, Crafts & Buying Tips',
    description:
      'Your complete guide to Moroccan leather: tannery tours, artisan crafts, quality tests, fair prices from 80 MAD, bargaining strategies, and how to ship leather home.',
    images: [`${BASE_URL}/images/photo-morocco-leather.webp`],
  },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-leather-goods`,
  name: 'Morocco Leather Goods 2026 | Buying Guide, Tanneries & Artisan Crafts',
  description:
    'Complete guide to buying leather goods in Morocco. Explore Fes tanneries, Marrakech leather district, artisan crafts, leather types, dyeing process, quality indicators, bargaining, shipping, and ethical cooperatives.',
  url: `${BASE_URL}/morocco-leather-goods`,
  image: `${BASE_URL}/images/photo-morocco-leather.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-leather-goods`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Leather Goods', item: `${BASE_URL}/morocco-leather-goods` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What leather goods should I buy in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The most popular choices are babouches (from 80 MAD), leather poufs (from 350 MAD), crossbody bags (from 200 MAD), belts (from 100 MAD), leather journals (from 150 MAD), and jackets (from 1,500 MAD). Babouches and wallets are easiest to pack. Poufs are best bought unstuffed and shipped separately.' } },
    { '@type': 'Question', name: 'How do I visit the Chouara tannery in Fes?', acceptedAnswer: { '@type': 'Answer', text: 'Access is through surrounding leather shops that offer rooftop terrace views. No entrance fee, but a 10-20 MAD tip to your guide is customary. Visit between 8-10 AM when tanners are most active. You will receive mint to offset the smell.' } },
    { '@type': 'Question', name: 'What is the difference between goat, cow, and camel leather in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Goat leather is soft and versatile, used for babouches, bags, and poufs. Cow leather is thicker and more durable for belts and jackets. Camel leather is the rarest and most expensive with a distinctive grain. Sheep leather is the softest but least durable.' } },
    { '@type': 'Question', name: 'How can I tell if Moroccan leather is good quality?', acceptedAnswer: { '@type': 'Answer', text: 'Use five tests: smell (earthy, not chemical), touch (warms to hand, irregular texture), water (absorbs slowly), bend (no cracking or white stress lines), and edge (fibrous cross-section, not smooth plastic). Also check stitch evenness and hardware quality.' } },
    { '@type': 'Question', name: 'What is the difference between natural and chemical leather dyeing?', acceptedAnswer: { '@type': 'Answer', text: 'Natural dyeing uses saffron, poppy, indigo, cedar bark, and mint for rich tones that age beautifully. Chemical chrome dyeing produces brighter, uniform colors faster but can fade unevenly. Naturally dyed leather costs more but is considered higher quality.' } },
    { '@type': 'Question', name: 'How do I ship leather goods from Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Options include shop shipping via DHL/FedEx (from 300 MAD), Morocco Post (from 150 MAD, 2-4 weeks), or carrying in luggage. Buy poufs unstuffed. Keep receipts for customs. Declare purchases above your duty-free allowance.' } },
    { '@type': 'Question', name: 'How much should I bargain when buying leather in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Start at 30-40% of the asking price. A fair deal lands around 50-60% of the initial ask. Compare at 3-4 shops first. Morning shopping can yield better prices due to the baraka tradition. Cooperatives have fixed, non-negotiable prices.' } },
    { '@type': 'Question', name: 'Are Moroccan leather cooperatives better than souk shops?', acceptedAnswer: { '@type': 'Answer', text: 'Cooperatives offer fixed prices, fair artisan wages, and consistent quality. Prices are slightly above skilled souk bargaining but below tourist shop rates. They use more ethical production methods and are ideal for stress-free, transparent purchasing.' } },
  ],
};

/* ===================================================================
   DATA: TANNERIES
   =================================================================== */

const tanneries = [
  {
    name: 'Chouara Tannery, Fes',
    icon: Star,
    founded: '11th century',
    scale: 'Over 100 stone vats',
    bestTime: '8-10 AM for active work and best light',
    description:
      'The largest and most famous tannery in Morocco, a working medieval factory operating continuously for nearly a thousand years. Over 100 circular stone vats filled with natural dyes create a mesmerizing patchwork of color. Workers tread hides by foot, hand-dyeing leather in saffron yellow, poppy red, indigo blue, and cedar brown. UNESCO recognizes it as a living heritage site.',
    visitInfo: 'Free access through surrounding leather shops. You will receive mint to offset the smell. A 10-20 MAD tip to your guide is customary.',
  },
  {
    name: 'Sidi Moussa Tannery, Fes',
    icon: Award,
    founded: '14th century',
    scale: 'Approximately 40 vats',
    bestTime: 'Morning hours, any day except Friday',
    description:
      'Smaller and far less touristed than Chouara, offering a more intimate experience. Specializes in goat and sheep leather, producing finer skins for bags, wallets, and bookbinding. Tanners here willingly explain each step of the process in detail.',
    visitInfo: 'Ask a nearby shop owner to guide you. Fewer tourists means genuine interaction with craftsmen.',
  },
  {
    name: 'Ain Azliten Tannery, Fes',
    icon: Sparkles,
    founded: '13th century',
    scale: 'Approximately 30 vats',
    bestTime: 'Mid-morning for best activity',
    description:
      'The oldest of the three Fes tanneries, near Bab Guissa in the northern medina. No tourist infrastructure exists here, making it the most raw and authentic experience. The methods predate even Chouara. Fewer than a dozen tourists per week visit.',
    visitInfo: 'Hire a local guide to find access points. Combine with a walk to the Merenid Tombs viewpoint nearby.',
  },
  {
    name: 'Marrakech Leather District',
    icon: Store,
    founded: 'Historic souk area',
    scale: 'Dozens of shops and workshops',
    bestTime: '9 AM - 1 PM and 3 PM - 6 PM',
    description:
      'No Fes-style open tannery, but Marrakech&apos;s leather district around Rue Mouassine contains dozens of workshops and retail shops. More retail-oriented with emphasis on contemporary designs. Many shops have on-site finishing workshops where you can watch cutting, stitching, and dyeing.',
    visitInfo: 'Start at the northern Jemaa el-Fnaa souks and head toward the dyers souk. Leather shops cluster together for easy comparison.',
  },
] as const;

/* ===================================================================
   DATA: TRADITIONAL LEATHER CRAFTS
   =================================================================== */

const leatherCrafts = [
  {
    name: 'Babouches (Leather Slippers)',
    icon: Footprints,
    origin: 'Fes, dating to the Marinid dynasty',
    materials: 'Goat or sheep leather, leather sole',
    description:
      'Morocco&apos;s most iconic leather product. Pointed-toe slippers worn by men, women, and royalty for centuries. Men&apos;s babouches are typically plain in yellow, brown, or white; women&apos;s come in every color with embroidery or beadwork. A quality pair molds to the foot within days. Soles are hand-stitched with waxed thread.',
    priceRange: 'From 80 MAD (plain) to 500 MAD (embroidered, premium goat leather)',
    buyingTip: 'Buy a half-size larger than your usual size because leather contracts slightly as it dries. Check that the sole is stitched, not glued. Glued soles separate within weeks.',
  },
  {
    name: 'Leather Poufs & Ottomans',
    icon: Layers,
    origin: 'Marrakech and Fes, traditional Berber furniture',
    materials: 'Dyed goat leather panels, cotton or polyester filling',
    description:
      'Round leather floor cushions, one of Morocco&apos;s most globally recognized exports. Hand-stitched from panels of dyed goat leather with embossed geometric patterns or embroidery. Sold unstuffed for easy transport; fill at home with polyester fiber or fabric scraps. Available in natural tan, metallics, and bold dyed hues.',
    priceRange: 'From 350 MAD (unstuffed, basic) to 900 MAD (stuffed, premium embroidered)',
    buyingTip: 'Buy unstuffed for easier packing and cheaper shipping. Check every seam for double stitching. Metallic finishes look striking but can peel over time; natural dyed leather ages better.',
  },
  {
    name: 'Leather Bags & Satchels',
    icon: Package,
    origin: 'All major cities, strongest tradition in Fes',
    materials: 'Cow, goat, or camel leather; brass hardware',
    description:
      'Moroccan artisans produce bags from crossbody satchels to structured totes, bucket bags, and duffels. The best feature hand-stitched construction, brass hardware from Fes metalworkers, and vegetable dyes. Contemporary designers blend centuries-old techniques with modern silhouettes at a fraction of European luxury prices.',
    priceRange: 'From 200 MAD (small crossbody) to 2,000 MAD (large handcrafted tote or duffle)',
    buyingTip: 'Inspect zipper quality, lining material, and stitch evenness. Ask whether the leather is vegetable-tanned or chrome-tanned. A strong chemical odor indicates poor finishing.',
  },
  {
    name: 'Leather Belts & Accessories',
    icon: Scissors,
    origin: 'Widespread, especially Fes and Marrakech',
    materials: 'Cow leather, brass or nickel buckles',
    description:
      'Hand-tooled leather belts with geometric or arabesque patterns pressed using heated metal stamps. Matching wallets and coin purses use softer goat leather with Berber motifs. Brass buckles are often crafted by neighboring metalworkers in the same medina.',
    priceRange: 'From 100 MAD (belt) to 300 MAD (hand-tooled belt with brass buckle)',
    buyingTip: 'Bend the belt in half; good leather flexes smoothly without cracking or showing white stress marks. Check that the buckle is attached with a proper screw post, not just glued.',
  },
  {
    name: 'Leather-Bound Books & Journals',
    icon: BookOpen,
    origin: 'Fes, linked to Islamic scholarly tradition',
    materials: 'Goat leather, handmade paper, gold leaf',
    description:
      'Leather bookbinding in Fes dates to when the city was the intellectual capital of the Islamic world. Covers are tooled with geometric patterns using heated brass stamps, then gilded with gold leaf. Originally for Quran binding, the tradition now produces travel journals, guest books, and photo albums.',
    priceRange: 'From 150 MAD (small journal) to 700 MAD (large gold-tooled cover with handmade paper)',
    buyingTip: 'Fes is the best city for bookbinding. Ask to see the artisan at work; genuine craftspeople demonstrate their process proudly. Check that the gold tooling is actual leaf, not printed foil.',
  },
  {
    name: 'Leather Jackets & Coats',
    icon: Shield,
    origin: 'Marrakech and Casablanca, modern tradition',
    materials: 'Lamb, goat, or cow leather; silk or cotton lining',
    description:
      'Quality leather jackets at prices far below European retail. Lamb is softest and most luxurious; goat balances softness with durability; cow is most hard-wearing. Shops in Marrakech and Fes offer custom tailoring with a finished jacket in 24-48 hours.',
    priceRange: 'From 1,500 MAD (basic ready-to-wear) to 6,000 MAD (custom-tailored, premium lamb leather)',
    buyingTip: 'Custom orders require at least one fitting; allow two days minimum. Try on the finished jacket before paying final price. Check shoulder seam alignment, armhole fit, and lining quality.',
  },
] as const;

/* ===================================================================
   DATA: LEATHER TYPES
   =================================================================== */

const leatherTypes = [
  {
    animal: 'Goat (Chevre)',
    icon: Star,
    quality: 'Most versatile',
    characteristics: 'Soft, supple, and lightweight with a natural grain. The most widely used leather in Moroccan craftwork. Takes dye exceptionally well. Used for babouches, poufs, bags, wallets, and book covers.',
    durability: 'High - softens with age without losing structure',
  },
  {
    animal: 'Cow (Vache)',
    icon: Shield,
    quality: 'Most durable',
    characteristics: 'Thicker and more rigid than goat. Excellent for items that hold shape under stress. Smoother, more uniform surface that takes embossing well. Favored for belts, structured bags, jackets, and heavy-duty goods.',
    durability: 'Very high - lasts decades with proper care',
  },
  {
    animal: 'Camel (Chameau)',
    icon: Award,
    quality: 'Rarest and most premium',
    characteristics: 'Extremely durable with a distinctive coarse grain unlike any other leather. Historically used by Saharan traders for saddlery. Today used for premium bags and decorative items. Limited supply makes it the most expensive.',
    durability: 'Exceptional - resistant to heat, cold, and abrasion',
  },
  {
    animal: 'Sheep (Mouton)',
    icon: Heart,
    quality: 'Softest and lightest',
    characteristics: 'The thinnest and most delicate Moroccan leather. Prized for buttery softness and lightweight feel. Used for linings, lightweight garments, and high-end babouches. Not suited for bags or items needing structure.',
    durability: 'Moderate - handles gently, not suited for heavy use',
  },
] as const;

/* ===================================================================
   DATA: DYEING PROCESS
   =================================================================== */

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
      'The traditional method used in Fes for over a thousand years. Hides are submerged in stone vats filled with plant-based dye solutions for one to three days. Natural dyes produce warm, rich tones with subtle variation. Colors deepen with age and develop a prized patina.',
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

/* ===================================================================
   DATA: QUALITY INDICATORS
   =================================================================== */

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
    pass: 'A tiny drop of water absorbs slowly over 10-30 seconds, darkening slightly. The spot dries and returns to normal within minutes.',
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
    pass: 'Hand-stitched goods show slight variation with strong waxed thread pulled tight. Machine stitching is perfectly even. Both resist a gentle tug.',
    fail: 'Loose stitches, thin thread, or stitches that pull free indicate poor construction. Glued seams are lowest quality.',
  },
] as const;

/* ===================================================================
   DATA: BARGAINING STRATEGIES
   =================================================================== */

const bargainingSteps = [
  {
    step: 'Research Prices Before You Shop',
    icon: Search,
    description: 'Visit cooperatives or fixed-price shops first to establish baseline prices. Check 3-4 shops for the same item type. Knowing approximate fair prices is the foundation of successful bargaining.',
  },
  {
    step: 'Start at 30-40% of the Asking Price',
    icon: DollarSign,
    description: 'The seller&apos;s first price is typically 2-4 times what they expect. Start low to leave negotiation room. This is expected and part of the ritual. You gradually move toward a middle ground.',
  },
  {
    step: 'Stay Calm and Friendly',
    icon: Heart,
    description: 'Bargaining is a social exchange, not a confrontation. Accept the tea offered, smile, and make conversation. Firm but pleasant buyers get better results than aggressive ones.',
  },
  {
    step: 'Use the Walk-Away Strategy',
    icon: ArrowRight,
    description: 'The most powerful bargaining tool. If prices do not meet your target, politely leave. If the seller calls you back, you have found the floor price. If not, another shop has the same goods.',
  },
  {
    step: 'Bundle Multiple Items',
    icon: Package,
    description: 'Sellers give better per-item prices on bulk purchases. Bundle babouches with a belt and wallet. Ask for a package price on the lot. Bulk buying can reduce prices 20-30%.',
  },
  {
    step: 'Shop in the Morning for Baraka',
    icon: Clock,
    description: 'The first sale of the day is considered good luck (baraka). Sellers are more willing to accept lower prices early. Arrive when shops open around 9-10 AM.',
  },
  {
    step: 'Carry Cash in Small Denominations',
    icon: DollarSign,
    description: 'Pay in dirhams, not euros or dollars. Carry small bills so you can offer exact amounts. Having exact change signals a final offer.',
  },
] as const;

/* ===================================================================
   DATA: SHIPPING OPTIONS
   =================================================================== */

const shippingOptions = [
  {
    method: 'Carry in Luggage',
    icon: Package,
    cost: 'Free (within airline weight limits)',
    timeframe: 'Immediate',
    description: 'The simplest option for small items. Babouches, wallets, belts, and small bags fit in checked luggage. Buy poufs unstuffed and vacuum-seal flat. Keep receipts for customs.',
    bestFor: 'Babouches, wallets, belts, small bags, journals',
  },
  {
    method: 'Shop Shipping (DHL/FedEx)',
    icon: Truck,
    cost: 'From 300 MAD for small packages, from 800 MAD for large items',
    timeframe: '5-10 business days',
    description: 'Many established shops offer international shipping through DHL, FedEx, or UPS with packing and customs handled. Ask for tracking numbers and insurance. Verify the shop&apos;s shipping reputation through reviews before paying.',
    bestFor: 'Poufs, large bags, multiple items, jackets',
  },
  {
    method: 'Morocco Post (La Poste)',
    icon: Globe,
    cost: 'From 150 MAD for parcels under 2 kg',
    timeframe: '2-4 weeks',
    description: 'Most affordable option for non-urgent shipments. Pack and address the parcel yourself at any post office. Tracking available but less reliable. Recommended only for items you can afford to lose.',
    bestFor: 'Budget shipping, non-fragile items, lighter packages',
  },
] as const;

/* ===================================================================
   DATA: ETHICAL CONSIDERATIONS
   =================================================================== */

const ethicalPoints = [
  {
    title: 'Worker Health & Safety',
    icon: Shield,
    description: 'Workers spend hours in chemical solutions without protective equipment. Exposure to lime, ammonia, and chromium causes health issues. Supporting cooperatives with protective gear and fair wages improves conditions.',
  },
  {
    title: 'Water Pollution',
    icon: Droplets,
    description: 'Tannery runoff flows into the Fes River and surrounding waterways. Morocco has invested in relocating operations to the Ain Nokbi industrial zone with water treatment. Traditional medina tanneries operate with limited waste treatment.',
  },
  {
    title: 'Vegetable vs Chrome Tanning',
    icon: Leaf,
    description: 'Vegetable tanning uses natural plant extracts and produces biodegradable waste. Chrome tanning is faster but generates toxic chromium waste. Ask your seller which method was used and choose vegetable-tanned when possible.',
  },
  {
    title: 'Fair Trade Cooperatives',
    icon: Users,
    description: 'Cooperatives guarantee artisans minimum wages, safe conditions, and profit sharing. Products cost slightly more than souk bargains but your money reaches the makers. Several run apprenticeship programs keeping traditional techniques alive.',
  },
] as const;

/* ===================================================================
   DATA: COOPERATIVES
   =================================================================== */

const cooperatives = [
  {
    name: 'Cooperative Artisanale de Tanneurs, Fes',
    icon: Users,
    location: 'Near Chouara Tannery, Fes Medina',
    specialty: 'Full range of traditionally tanned leather goods',
    description: 'The largest leather cooperative in Fes, adjacent to Chouara tannery. Over 50 artisans using vegetable-tanning methods. Fixed prices posted on all items. Watch the production process from raw hide to finished product.',
    priceNote: 'Prices 10-20% above souk bargain prices, but include fair wages and quality guarantee',
  },
  {
    name: 'Ensemble Artisanal, Marrakech',
    icon: Store,
    location: 'Avenue Mohammed V, near Koutoubia Mosque',
    specialty: 'Government-backed artisan showcase with leather section',
    description: 'Government-operated fixed-price craft complex with a dedicated leather section. Prices are clearly labeled and quality meets government standards. No bargaining required. A good starting point for learning fair market prices.',
    priceNote: 'Fixed government-set prices, transparent and fair across all items',
  },
  {
    name: 'Cooperative des Artisans Maroquiniers, Meknes',
    icon: HandHelping,
    location: 'Old Medina, near Place el-Hedim',
    specialty: 'Babouches and traditional leather slippers',
    description: 'Smaller cooperative specializing in handmade babouches. Employs 15 master craftsmen using family techniques passed through generations. Watch a complete pair being made in about 40 minutes.',
    priceNote: 'Babouches from 120 MAD, higher than souk but guaranteed handmade quality',
  },
] as const;

/* ===================================================================
   DATA: FAQ (for rendering)
   =================================================================== */

const faqs = [
  {
    question: 'What leather goods should I buy in Morocco?',
    answer: 'The most popular choices are babouches (from 80 MAD), leather poufs (from 350 MAD), crossbody bags (from 200 MAD), belts (from 100 MAD), journals (from 150 MAD), and jackets (from 1,500 MAD). Babouches and wallets are easiest to pack. Buy poufs unstuffed for luggage.',
  },
  {
    question: 'How do I visit the Chouara tannery in Fes?',
    answer: 'Access is through surrounding leather shops. No entrance fee. A shop owner guides you to the rooftop terrace for views of the dye vats. Tip 10-20 MAD. Visit between 8-10 AM for active work and best light. Mint is provided for the smell.',
  },
  {
    question: 'What is the difference between goat, cow, and camel leather?',
    answer: 'Goat is soft and versatile for babouches, poufs, and bags. Cow is thicker and more durable for belts and jackets. Camel is rarest and most expensive with a unique grain for premium goods. Sheep is softest but least durable, used for linings.',
  },
  {
    question: 'How can I tell if Moroccan leather is good quality?',
    answer: 'Use five tests: smell (earthy, not chemical), touch (warms to hand), bend (no cracking), water (a drop absorbs slowly), and edge (fibrous cross-section). Also check stitch evenness and hardware quality.',
  },
  {
    question: 'What is the difference between natural and chemical dyeing?',
    answer: 'Natural dyeing uses saffron, poppy, indigo, cedar bark, and mint for rich tones that age beautifully. Chemical dyeing uses chrome-based pigments for brighter colors faster, but can fade unevenly. Naturally dyed leather costs more and is considered superior.',
  },
  {
    question: 'How do I ship leather goods from Morocco?',
    answer: 'Small items go in luggage. Shops offer DHL/FedEx from 300 MAD. La Poste is cheaper (from 150 MAD, 2-4 weeks). Buy poufs unstuffed and vacuum-seal. Keep receipts for customs. Freight forwarders handle bulk from 2,000 MAD.',
  },
  {
    question: 'How much should I bargain for leather goods?',
    answer: 'Start at 30-40% of the asking price. A fair deal lands around 50-60% of the initial ask. Compare at 3-4 shops first. Morning shopping may get better prices (baraka tradition). Cooperatives have fixed prices.',
  },
  {
    question: 'Are leather cooperatives better than souk shops?',
    answer: 'Cooperatives offer fixed prices, fair artisan wages, consistent quality, and on-site demonstrations. Prices are slightly above souk bargaining but below tourist shop rates. Best for travelers who value ethical and stress-free purchasing.',
  },
] as const;

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoLeatherGoodsPage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/photo-morocco-leather.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
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
            Morocco Leather Goods:
            <br className="hidden md:block" /> Tanneries, Crafts &amp; Buying Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know about buying leather in Morocco. From the ancient
            tanneries of Fes to the artisan cooperatives of Marrakech, with quality tests,
            fair prices, and strategies to bring the best leather goods home.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Thousand-Year Tradition in Leather
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s leather tradition dates to the 9th century, when tanners in Fes
                began processing hides using techniques borrowed from Andalusian and Middle Eastern
                craftsmen. Over the following centuries, Moroccan leather became so renowned across
                Europe that the English language adopted the word &quot;morocco&quot; as a generic term
                for fine goatskin leather. That same craft continues today, largely unchanged, in the
                medieval tanneries that still operate in the heart of the Fes medina.
              </p>
              <p>
                Buying leather in Morocco is more than a shopping transaction. It is an encounter with
                a living craft that has sustained families and communities for generations. The tanner
                who treads hides in stone vats, the dyer who mixes saffron and indigo by eye, the
                artisan who stitches a pair of babouches with waxed thread and a curved needle &mdash;
                each plays a role in a production chain that predates industrial manufacturing by
                centuries. Understanding that chain transforms how you see, evaluate, and appreciate
                what you buy.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices and reflect fair rates after bargaining in souks.
                Cooperative prices are fixed. Seasonal pricing can change during peak tourist months
                (October-April). Prices verified as of early 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Tanneries -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tanneries &amp; Leather Districts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the medieval stone vats of Fes to the bustling leather workshops of Marrakech,
            these are the places where Moroccan leather comes to life.
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
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{tannery.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10 mb-3">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">How to visit:</span> {tannery.visitInfo}
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

      {/* -- Traditional Leather Crafts -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Leather Crafts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan artisans transform raw hides into an extraordinary range of products,
            from everyday footwear to heirloom-quality home decor and fashion pieces.
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
                      <p className="text-xs text-[var(--color-gold)] font-medium">{craft.origin}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{craft.description}</p>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{craft.priceRange}</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <ThumbsUp className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Buying tip:</span> {craft.buyingTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Leather Types -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Leather Types: Goat, Cow, Camel &amp; Sheep
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Different animals produce leather with distinct characteristics. Knowing
            the differences helps you choose the right material for your intended use.
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
                      <p className="text-xs text-[var(--color-gold)] font-medium">{type.quality}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{type.characteristics}</p>
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

      {/* -- Dyeing Process -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Natural vs Chemical Dyeing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How leather gets its color matters for quality, longevity, and environmental impact.
            Understanding the difference helps you identify premium goods.
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
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{dye.description}</p>

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
                          <span className="font-medium text-[var(--text-primary)]">{color.name}:</span> {color.source}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2.5 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-green-700">Pros:</span> {dye.pros}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-red-600">Cons:</span> {dye.cons}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Quality Indicators -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Six Quality Tests for Leather Goods
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use these tests in any leather shop to determine whether a product is worth
            the price. Knowledge is the best defense against overpriced or fake goods.
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
                        <span className="font-semibold text-green-700">Pass:</span> {item.pass}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-red-600">Fail:</span> {item.fail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Bargaining Strategies -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Bargain for Leather Goods
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bargaining is expected in Moroccan souks. These strategies help you reach a
            fair price while respecting the cultural tradition of negotiation.
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
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <StepIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {item.step}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Shipping Leather Home -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Leather Goods Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting your purchases home safely requires planning. The right shipping
            method depends on the size, value, and quantity of your leather goods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                      <p className="text-xs text-[var(--color-gold)] font-medium">{option.timeframe}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{option.description}</p>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{option.cost}</span>
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

      {/* -- Ethical Considerations -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical &amp; Environmental Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the human and environmental costs of leather production helps
            you make informed, responsible purchasing decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Leather Cooperatives -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Leather Cooperatives &amp; Ethical Shops
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Cooperatives guarantee fair wages, transparent pricing, and consistent quality.
            They are the best option for ethical shopping and stress-free purchasing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cooperatives.map((coop) => {
              const CoopIcon = coop.icon;
              return (
                <div key={coop.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CoopIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {coop.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">
                        <MapPin className="w-3 h-3 inline mr-0.5" />
                        {coop.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{coop.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10 mb-3">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Specialty:</span> {coop.specialty}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>{coop.priceNote}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/morocco-leather-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Layers className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Leather Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide to the Fes tanneries, the full tanning process, and a complete price table for every leather product category.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/crafts" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Palette className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Crafts &amp; Artisans
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Morocco&apos;s legendary handicraft traditions from zellige tilework to metalwork, pottery, and textile weaving.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-buy-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Buy in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best souvenirs from Morocco with real prices, quality tips, and where to shop by city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-souk-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Souk Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate Morocco&apos;s famous markets with confidence. Etiquette, bargaining strategies, and maps for every major souk.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-haggling-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Haggling Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Master the art of negotiation in Moroccan souks. Strategies, cultural context, and when to walk away.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Fes, Morocco&apos;s spiritual and cultural capital. Medina tours, accommodations, restaurants, and practical travel tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* -- Final CTA -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Moroccan Leather?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Plan your visit to the tanneries of Fes, discover artisan workshops, and bring
            home handcrafted leather goods that carry a millennium of tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fes" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors">
              <MapPin className="w-5 h-5" />
              Explore Fes
            </Link>
            <Link href="/marrakech" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              <Store className="w-5 h-5" />
              Explore Marrakech
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

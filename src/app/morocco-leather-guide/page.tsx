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
  Navigation,
  Droplets,
  Footprints,
  BookOpen,
  Leaf,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Leather Guide 2026 | Fes Tanneries, Shopping & Prices',
  description:
    'The complete guide to Moroccan leather goods. Visit the Chouara tannery in Fes, shop for babouches, poufs, bags and jackets. Learn the leather production process, quality tests, fair prices from 80 MAD, bargaining tips, and ethical considerations.',
  keywords: [
    'Moroccan leather',
    'Morocco leather goods guide',
    'Fes tannery shopping',
    'Chouara tannery Fes',
    'Moroccan leather bags',
    'Moroccan babouches',
    'Moroccan leather pouf',
    'Morocco leather prices',
    'Fes leather souk',
    'Moroccan leather quality',
    'how leather is made Morocco',
    'Marrakech leather shopping',
    'Moroccan leather jacket',
    'buy leather in Morocco',
    'Morocco tannery visit',
    'Moroccan leather slippers',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-leather-guide`,
  },
  openGraph: {
    title: 'Morocco Leather Guide 2026 | Fes Tanneries, Shopping & Prices',
    description:
      'Everything you need to know about Moroccan leather. Visit the ancient tanneries of Fes, shop for authentic leather goods, learn quality tests, fair prices, and bargaining strategies.',
    url: `${BASE_URL}/morocco-leather-guide`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/photo-morocco-leather.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful leather goods displayed in a traditional Moroccan souk with babouches and bags',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Leather Guide | Fes Tanneries, Prices & Shopping Tips',
    description:
      'Complete guide to Moroccan leather: Fes tanneries, leather products, quality identification, price guide from 80 MAD, and bargaining tips.',
    images: [`${BASE_URL}/images/photo-morocco-leather.webp`],
  },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-leather-guide`,
  name: 'Morocco Leather Guide 2026 | Fes Tanneries, Shopping & Prices',
  description:
    'The complete guide to Moroccan leather goods and the famous tanneries of Fes. Types of leather products, the tanning process, quality identification, fair prices, best markets, bargaining strategies, and ethical considerations.',
  url: `${BASE_URL}/morocco-leather-guide`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-leather-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Leather Guide', item: `${BASE_URL}/morocco-leather-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it worth visiting the Fes tanneries?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, visiting the Chouara tannery in Fes is one of Morocco\'s most iconic experiences. The medieval stone vats filled with colorful dyes create a stunning visual spectacle. Go early morning (8-10 AM) for the best light and active work. You will be given mint sprigs to offset the smell. Access is free through surrounding leather shops, though a small tip to your guide is expected.' },
    },
    {
      '@type': 'Question',
      name: 'How much do leather goods cost in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Prices vary by product and quality. Babouches (leather slippers) start from 80 MAD. Small leather bags start from 200 MAD. Leather poufs start from 350 MAD. Belts start from 100 MAD. Leather jackets start from 1,500 MAD. Always bargain in souks; initial asking prices are typically 2-4 times the fair price. Seasonal pricing can change during peak tourist months.' },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if Moroccan leather is genuine?',
      acceptedAnswer: { '@type': 'Answer', text: 'Genuine leather has a distinctive natural smell, slight imperfections in the surface, and absorbs a small drop of water. Check stitching for evenness and strength. Real leather warms to your touch while faux leather stays cold. The edges of genuine leather show fibrous texture rather than smooth plastic. High-quality Moroccan leather is supple and soft, not stiff or plasticky.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best leather product to buy in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Babouches (traditional leather slippers) are the most iconic and affordable Moroccan leather souvenir. Leather poufs are hugely popular for home decor. Crossbody bags and totes offer excellent craftsmanship at a fraction of European designer prices. Your best choice depends on budget and luggage space. Babouches and wallets are easiest to pack.' },
    },
    {
      '@type': 'Question',
      name: 'Why does Moroccan leather smell?',
      acceptedAnswer: { '@type': 'Answer', text: 'Traditional Moroccan leather tanning uses natural materials including pigeon droppings, cow urine, quicklime, and tree bark. These create a strong smell during production. Finished leather goods should not smell unpleasant. A lingering chemical or ammonia smell on a finished product indicates poor finishing or low quality. Well-processed leather smells earthy and natural.' },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to buy leather in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fes is the leather capital of Morocco, home to the famous tanneries and the highest concentration of leather artisans. The medina leather souk offers the widest selection at competitive prices. Marrakech has a larger tourist market with more contemporary designs. Cooperatives offer fixed prices and ethical sourcing. Online Moroccan leather shops ship internationally.' },
    },
    {
      '@type': 'Question',
      name: 'How do I bargain for leather goods in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Start your counter-offer at about 30-40% of the asking price. Compare prices at multiple shops first. Be willing to walk away, which is the most effective tool. Never show too much enthusiasm for a specific item. Buy multiple items for better per-item discounts. Morning shopping often yields better prices as sellers want their first sale for good luck.' },
    },
    {
      '@type': 'Question',
      name: 'Is Moroccan leather ethically produced?',
      acceptedAnswer: { '@type': 'Answer', text: 'Traditional tanning in Fes uses natural, biodegradable materials but raises environmental concerns about water pollution and worker conditions. Modern tanneries increasingly use chrome tanning which is faster but involves chemicals. Support ethical production by buying from cooperatives, asking about tanning methods, and choosing vegetable-tanned leather. Some cooperatives ensure fair wages and safer working conditions.' },
    },
  ],
};

/* ===================================================================
   DATA: TANNERIES OF FES
   =================================================================== */

const tanneries = [
  {
    name: 'Chouara Tannery',
    icon: Star,
    founded: '11th century',
    description:
      'The largest and most famous tannery in Fes, and one of the most photographed sites in all of Morocco. Over 100 stone vats filled with vibrant natural dyes create a mesmerizing patchwork of color visible from surrounding terraces. Workers still use medieval techniques, treading hides by foot and hand-dyeing leather in saffron yellow, poppy red, indigo blue, and cedar brown. A UNESCO-recognized living heritage site that has operated continuously for nearly a thousand years.',
    visitTip: 'Enter through one of the surrounding leather shops for free terrace access. Go between 8-10 AM when workers are most active and the light is best for photos. You will be offered a sprig of mint to hold under your nose.',
  },
  {
    name: 'Sidi Moussa Tannery',
    icon: Award,
    founded: '14th century',
    description:
      'Smaller and less touristed than Chouara, Sidi Moussa offers a more intimate look at the tanning process. Located deeper in the medina, it attracts fewer visitors and allows you to observe the craftsmen at closer range. The tannery specializes in goat and sheep leather, producing finer, softer skins often used for high-quality bags and bookbinding. The workers here are often happy to explain the process in detail.',
    visitTip: 'Ask a local shop owner for access. Less tourist traffic means more genuine interaction with the tanners. Great for photography without crowds.',
  },
  {
    name: 'Ain Azliten Tannery',
    icon: Sparkles,
    founded: '13th century',
    description:
      'The oldest tannery in Fes, Ain Azliten is located near Bab Guissa in the northern part of the medina. It is the most traditional of the three, maintaining methods that predate even Chouara. Fewer tourists find their way here, making it the most authentic experience. The tannery is smaller but gives visitors a raw, unvarnished view of leather production as it has been practiced for over seven centuries.',
    visitTip: 'Combine with a visit to the Merenid Tombs viewpoint nearby. Virtually no tourist infrastructure here, so hiring a local guide is recommended to find the access points.',
  },
] as const;

/* ===================================================================
   DATA: LEATHER PRODUCTS
   =================================================================== */

const leatherProducts = [
  {
    name: 'Babouches (Leather Slippers)',
    icon: Footprints,
    description:
      'Morocco&apos;s most iconic leather product. Traditional pointed-toe slippers worn by men and women across the country for centuries. Men&apos;s babouches are typically plain in earth tones; women&apos;s come in every color with embroidery, sequins, or painted designs. Made from soft goat or sheep leather with a flat leather sole. They mold to your feet over time for a perfect fit.',
    price: 'From 80 MAD (plain) to 400 MAD (embroidered, high-quality)',
    tip: 'Buy a half-size larger than normal as leather stretches. Check that the sole is stitched, not glued. The best babouches come from Fes.',
  },
  {
    name: 'Leather Poufs & Ottomans',
    icon: Layers,
    description:
      'Round leather floor cushions that have become one of Morocco&apos;s most popular exports for home decor worldwide. Hand-stitched from panels of dyed goat leather with intricate embossed or embroidered patterns. Sold unstuffed for easy transport, they can be filled with polyester fiber, old clothing, or newspaper at home. Available in natural tan, dyed colors, and metallic finishes.',
    price: 'From 350 MAD (unstuffed) to 800 MAD (stuffed, premium quality)',
    tip: 'Buy unstuffed for easy packing and cheaper shipping. Check all seams are double-stitched. Metallic-finish poufs may peel over time; natural dyes age better.',
  },
  {
    name: 'Leather Bags & Totes',
    icon: Package,
    description:
      'Moroccan artisans produce an extraordinary range of leather bags from simple crossbody satchels to structured totes, bucket bags, and clutches. Handmade from cow, goat, or camel leather, the best pieces feature hand-stitched construction, brass hardware, and natural vegetable dyes. Contemporary Moroccan designers are now blending traditional craftsmanship with modern aesthetics, creating bags that rival European luxury brands at a fraction of the cost.',
    price: 'From 200 MAD (small crossbody) to 1,500 MAD (large handcrafted tote)',
    tip: 'Check zipper quality, lining material, and stitch evenness. Ask if the leather is vegetable-tanned (superior) or chrome-tanned. Avoid bags with a strong chemical smell.',
  },
  {
    name: 'Belts & Wallets',
    icon: Scissors,
    description:
      'Leather belts and wallets are among the most practical and affordable Moroccan leather souvenirs. Hand-tooled with geometric patterns, some feature brass buckles crafted in the same medina. Wallets range from simple bifolds to ornate coin purses with Berber motifs. The leather is typically cow hide for durability, with goat leather used for softer, more flexible pieces.',
    price: 'From 100 MAD (belt) to 250 MAD (hand-tooled wallet)',
    tip: 'Test belt flexibility by bending it; good leather bends smoothly without cracking. For wallets, check the card slots are cleanly cut with no rough edges.',
  },
  {
    name: 'Leather Jackets & Coats',
    icon: Shield,
    description:
      'Morocco produces high-quality leather jackets at prices significantly lower than Europe or North America. Lamb, goat, and cow leather jackets are available in classic and contemporary styles. The leather district in Marrakech and Fes medina have shops that can custom-make a jacket to your measurements in 24-48 hours. Styles range from classic biker jackets to tailored blazers.',
    price: 'From 1,500 MAD (basic jacket) to 5,000 MAD (custom, premium leather)',
    tip: 'Custom orders require fittings; allow at least two days. Insist on trying the jacket after completion before paying. Check shoulder seams, zipper smoothness, and lining quality.',
  },
  {
    name: 'Book Covers & Journals',
    icon: BookOpen,
    description:
      'Moroccan leather book covers and journals are prized worldwide for their beauty. Traditionally used to bind copies of the Quran and scholarly texts, the craft of leather bookbinding has flourished in Fes for centuries. Covers are tooled with intricate geometric patterns, often gilded with gold leaf. Modern artisans also produce travel journals, photo albums, and decorative covers in the same tradition.',
    price: 'From 150 MAD (small journal) to 600 MAD (large, gold-tooled cover)',
    tip: 'Fes is the undisputed center for leather bookbinding. Ask to see the artisan at work; genuine craftspeople are proud to demonstrate their skill.',
  },
  {
    name: 'Decorative & Miscellaneous',
    icon: Heart,
    description:
      'Beyond the classics, Moroccan artisans craft leather into mirror frames, lamp shades, jewelry boxes, backgammon sets, desk accessories, and even leather-upholstered furniture. Leather lamp shades painted with henna designs cast warm, patterned light and make striking decor pieces. Leather picture frames and tissue box covers are affordable, easy-to-pack gifts.',
    price: 'From 120 MAD (small decor item) to 2,000 MAD (leather lamp shade)',
    tip: 'Leather lamp shades should be translucent when held to light. Check that henna painting is even and detailed. These items are fragile; ask the seller to wrap them securely.',
  },
] as const;

/* ===================================================================
   DATA: TANNING PROCESS
   =================================================================== */

const tanningSteps = [
  {
    step: 'Soaking & Cleaning',
    icon: Droplets,
    description: 'Raw animal hides (primarily cow, goat, sheep, and camel) are first soaked in large stone vats filled with a mixture of water, quicklime, and salt. This softens the hides and loosens hair and fat. Workers tread the hides by foot for hours, a technique unchanged since medieval times. The soaking stage lasts two to three days.',
  },
  {
    step: 'De-Hairing & Fleshing',
    icon: Scissors,
    description: 'After soaking, workers scrape each hide by hand using curved blades to remove all remaining hair, fat, and tissue. This painstaking process requires skill to avoid cutting through the leather. The cleaned hides are then rinsed and wrung out. This stage determines the final thickness and smoothness of the leather.',
  },
  {
    step: 'Tanning with Pigeon Droppings',
    icon: Layers,
    description: 'In the most distinctive step, hides are immersed in vats of pigeon droppings mixed with water. The ammonia in the droppings acts as a natural softening and tanning agent, making the leather supple and workable. This ancient method produces the characteristic smell that tannery visitors encounter. The hides soak for one to three days depending on the desired softness.',
  },
  {
    step: 'Vegetable Tanning',
    icon: Leaf,
    description: 'Hides are then transferred to vats containing tannin-rich solutions made from tree bark (primarily mimosa and oak), pomegranate rinds, or other plant materials. This preserves the leather and gives it durability. Vegetable tanning takes weeks but produces leather that ages beautifully, developing a rich patina over time. This is what distinguishes traditional Moroccan leather from industrially processed hides.',
  },
  {
    step: 'Dyeing with Natural Colors',
    icon: Palette,
    description: 'The tanned leather is dyed by hand in stone vats filled with natural pigments. Saffron produces yellow, poppy flowers create red, indigo gives blue, cedar wood produces brown, mint yields green, and henna creates orange. Workers submerge and turn the hides repeatedly to ensure even color saturation. The natural dyes create the rich, warm tones that Moroccan leather is famous for.',
  },
  {
    step: 'Drying & Finishing',
    icon: Eye,
    description: 'Dyed hides are laid out on rooftops, hillsides, or wooden frames across Fes to dry in the sun. This can take several days depending on the weather. Once dry, the leather is softened by hand-rubbing, then polished, cut, and delivered to artisan workshops throughout the medina where it is transformed into finished goods.',
  },
] as const;

/* ===================================================================
   DATA: WHERE TO BUY
   =================================================================== */

const whereToBuy = [
  {
    city: 'Fes',
    location: 'Medina Leather Souk & Tannery Quarter',
    icon: Star,
    description:
      'The undisputed leather capital of Morocco. Fes has been the center of Moroccan leatherwork for over a millennium. The medina leather souk surrounds the Chouara tannery and offers the widest selection of leather goods at the most competitive prices. You can watch artisans hand-stitching babouches, tooling book covers, and sewing bags just steps from the vats where the leather was dyed. Buying here supports a living heritage.',
    tip: 'Visit the tannery first to understand the craft, then shop in surrounding stores where prices are lower than tourist-facing shops on main medina routes.',
    priceLevel: 'Moderate (best value for quality)',
  },
  {
    city: 'Marrakech',
    location: 'Souk Smata & Leather Quarter',
    icon: MapPin,
    description:
      'Marrakech&apos;s leather market is centered around the Souk Smata near Jemaa el-Fnaa. The selection is enormous, with more contemporary and fashion-forward designs than Fes. Expect more tourist-oriented shops with higher starting prices but also more willingness to negotiate. Several modern leather workshops in the Gueliz district offer designer-quality goods combining traditional Moroccan leather with European aesthetics.',
    tip: 'Walk deeper into the souk away from Jemaa el-Fnaa for better prices. The Gueliz district has fixed-price boutiques with modern designs if you prefer not to bargain.',
    priceLevel: 'Moderate to high (tourist premium)',
  },
  {
    city: 'Cooperatives & Workshops',
    location: 'Fes, Marrakech, and rural areas',
    icon: Users,
    description:
      'Leather cooperatives offer fair-trade shopping with fixed prices and transparent production. You can often watch artisans at work and learn about the craft. Cooperatives ensure fair wages for workers and typically use more environmentally responsible tanning methods. Several women&apos;s cooperatives specialize in leather accessories, providing economic opportunities in underserved communities.',
    tip: 'Cooperative prices are fixed with no bargaining. While slightly higher than souk rock-bottom prices, you are guaranteed quality, fair wages, and ethical production.',
    priceLevel: 'Fair trade (fixed prices)',
  },
  {
    city: 'Online Moroccan Shops',
    location: 'International shipping available',
    icon: Globe,
    description:
      'Several reputable Moroccan leather artisans and cooperatives sell online with worldwide shipping. This is convenient for repeat purchases once you know Moroccan leather quality, but you lose the ability to inspect texture, smell, and construction in person. Look for shops with a physical address in Morocco, verifiable customer reviews, and clear return policies.',
    tip: 'Request detailed photos and measurements before ordering. Ask about the tanning method (vegetable-tanned is superior). Factor in shipping costs and potential customs duties.',
    priceLevel: 'Moderate to high (convenience premium)',
  },
] as const;

/* ===================================================================
   DATA: QUALITY IDENTIFICATION
   =================================================================== */

const qualityTests = [
  {
    test: 'Smell Test',
    icon: Droplets,
    good: 'Genuine, well-processed leather has a natural, earthy smell. Vegetable-tanned Moroccan leather may have a faint woody or organic scent. The smell should not be unpleasant or overpowering on a finished product.',
    bad: 'Strong chemical, ammonia, or plastic smell on finished goods indicates poor processing, rushed finishing, or synthetic materials. A lingering foul smell means the leather was not properly treated after tanning.',
  },
  {
    test: 'Stitching Quality',
    icon: Scissors,
    good: 'Even, tight, consistent stitching with no loose threads. Hand-stitching should be slightly irregular but strong. Double-stitched seams on stress points like bag handles and pouf panels indicate quality construction.',
    bad: 'Uneven spacing, loose or fraying threads, and single-stitched stress points. Glued seams instead of stitching is a major red flag. Crooked stitch lines suggest hasty, careless work.',
  },
  {
    test: 'Dye Quality',
    icon: Palette,
    good: 'Natural vegetable dyes produce rich, slightly varied tones that deepen with age. Rub a damp white cloth on the surface; minimal color transfer is normal. Well-dyed leather has consistent color throughout the thickness.',
    bad: 'Heavy color bleeding onto a damp cloth. Patchy or uneven dye coverage. Surface-only dye that reveals a different color when scratched. Synthetic dyes produce unnaturally bright, uniform tones that fade harshly.',
  },
  {
    test: 'Real vs Faux Leather',
    icon: Eye,
    good: 'Genuine leather warms to your touch, has slight natural imperfections and grain variation, and absorbs a tiny water drop. The cut edge shows fibrous texture. It is supple and bends without cracking. It smells organic, not plasticky.',
    bad: 'Faux leather stays cool to the touch, has a perfectly uniform texture, and water beads on the surface. Cut edges show smooth plastic layers. It may crack or peel when bent sharply. Often has a chemical or plastic smell.',
  },
  {
    test: 'Leather Thickness & Suppleness',
    icon: Layers,
    good: 'Quality Moroccan leather is supple and flexible while maintaining substance. Bags and wallets should have consistent thickness throughout. Babouches should be soft enough to bend easily but thick enough to hold their shape.',
    bad: 'Overly thin, papery leather that tears easily. Excessively stiff leather that cracks when flexed. Inconsistent thickness within the same product, with some areas thin and others thick, indicates poor hide selection.',
  },
  {
    test: 'Hardware & Finishing',
    icon: Shield,
    good: 'Brass or solid metal hardware with weight and substance. Zippers that glide smoothly. Clean, well-trimmed edges without exposed rough spots. Interior lining (on bags and jackets) that is neatly attached and made from quality fabric.',
    bad: 'Lightweight, hollow metal fittings that bend easily. Zippers that stick or catch. Rough, unfinished edges with visible glue. No lining or poorly attached lining that separates from the leather.',
  },
] as const;

/* ===================================================================
   DATA: PRICE GUIDE
   =================================================================== */

const leatherPriceGuide = [
  { product: 'Babouches (plain, standard)', souk: 'From 80 MAD', touristShop: 'From 200-400 MAD', cooperative: 'From 120 MAD' },
  { product: 'Babouches (embroidered, premium)', souk: 'From 200 MAD', touristShop: 'From 400-700 MAD', cooperative: 'From 300 MAD' },
  { product: 'Leather pouf (unstuffed)', souk: 'From 350 MAD', touristShop: 'From 600-1,200 MAD', cooperative: 'From 450 MAD' },
  { product: 'Crossbody bag (small)', souk: 'From 200 MAD', touristShop: 'From 500-900 MAD', cooperative: 'From 300 MAD' },
  { product: 'Leather tote (large)', souk: 'From 600 MAD', touristShop: 'From 1,200-2,500 MAD', cooperative: 'From 800 MAD' },
  { product: 'Leather belt (hand-tooled)', souk: 'From 100 MAD', touristShop: 'From 250-500 MAD', cooperative: 'From 150 MAD' },
  { product: 'Leather wallet / coin purse', souk: 'From 80 MAD', touristShop: 'From 200-400 MAD', cooperative: 'From 120 MAD' },
  { product: 'Leather jacket (standard)', souk: 'From 1,500 MAD', touristShop: 'From 3,000-6,000 MAD', cooperative: 'From 2,000 MAD' },
  { product: 'Leather journal / book cover', souk: 'From 150 MAD', touristShop: 'From 300-600 MAD', cooperative: 'From 200 MAD' },
  { product: 'Leather lamp shade (henna-painted)', souk: 'From 500 MAD', touristShop: 'From 1,000-2,000 MAD', cooperative: 'From 700 MAD' },
] as const;

/* ===================================================================
   DATA: BARGAINING TIPS
   =================================================================== */

const bargainingTips = [
  {
    step: 'Visit Multiple Shops First',
    icon: Eye,
    description: 'Walk through the entire leather souk before buying. Note prices for similar items at different shops. Knowing the range of asking prices gives you confidence and prevents overpaying at the first stall. In Fes, the shops closest to the tannery viewing terrace charge the highest premiums.',
  },
  {
    step: 'Start at 30-40% of the Ask',
    icon: DollarSign,
    description: 'Begin your counter-offer at about one-third of the asking price. The seller will act shocked; this is part of the game. Stay friendly, patient, and engaged. Bargaining for leather goods is a social ritual and a genuine part of Moroccan commercial culture that should be enjoyed, not rushed.',
  },
  {
    step: 'Know the Product Value',
    icon: Shield,
    description: 'Understanding leather quality gives you leverage. Point out stitching details, leather type, and construction to show you are an informed buyer. Sellers respect knowledge and will adjust their prices when they realize you cannot be easily overcharged.',
  },
  {
    step: 'The Power of Walking Away',
    icon: Navigation,
    description: 'Walking toward the door is the most powerful move. If the seller lets you leave, the price was near their minimum. If they call you back with a lower offer, there is still margin. Many final deals happen at the doorstep. You can always return later if you change your mind.',
  },
  {
    step: 'Bundle for Better Deals',
    icon: Package,
    description: 'Buy multiple items together for a better overall price. If you want babouches and a bag, negotiate them as a package rather than separately. Sellers prefer larger transactions and will offer better per-item discounts to close a bigger sale.',
  },
  {
    step: 'Shop at the Right Time',
    icon: Clock,
    description: 'Morning hours are best as sellers are eager for their first sale of the day, which is considered good luck. Late afternoon, just before closing, is also favorable as traders want to end the day with a sale. Avoid the midday tourist rush when sellers feel no pressure to discount.',
  },
] as const;

/* ===================================================================
   DATA: ETHICAL CONSIDERATIONS
   =================================================================== */

const ethicalPoints = [
  { point: 'Traditional tanning uses natural materials (pigeon droppings, tree bark, plant dyes) but wastewater from the process can pollute local waterways if not properly managed', icon: Droplets },
  { point: 'Workers in traditional tanneries face harsh conditions including prolonged chemical exposure, strong smells, and physically demanding labor in open-air vats', icon: Users },
  { point: 'Chrome tanning is faster and cheaper but uses chromium salts that are toxic and environmentally damaging if not disposed of responsibly', icon: AlertTriangle },
  { point: 'Buying from cooperatives and certified workshops supports fair wages, safer working conditions, and more environmentally responsible production methods', icon: Heart },
  { point: 'Vegetable-tanned leather is the most sustainable option, using only natural plant materials. It ages better and is biodegradable at end of life', icon: Leaf },
  { point: 'Supporting traditional leather craftsmanship helps preserve an ancient heritage industry that provides livelihoods for thousands of Moroccan families', icon: Globe },
] as const;

/* ===================================================================
   DATA: FAQ
   =================================================================== */

const faqs = [
  {
    question: 'Is it worth visiting the Fes tanneries?',
    answer:
      'Yes, visiting the Chouara tannery in Fes is one of Morocco&apos;s most iconic experiences. The medieval stone vats filled with colorful natural dyes create a stunning visual spectacle. Go early morning (8-10 AM) for the best light and active work. You will be given mint sprigs to help with the smell. Access is free through surrounding leather shops, though a small tip to your guide is expected.',
  },
  {
    question: 'How much do leather goods cost in Morocco?',
    answer:
      'Prices vary by product and quality. Babouches (leather slippers) start from 80 MAD. Small leather bags start from 200 MAD. Leather poufs start from 350 MAD. Belts start from 100 MAD. Leather jackets start from 1,500 MAD. Always bargain in souks; initial asking prices are typically 2-4 times the fair price. Seasonal pricing can change, especially during peak tourist months.',
  },
  {
    question: 'How can I tell if Moroccan leather is genuine?',
    answer:
      'Genuine leather warms to your touch, has slight natural imperfections and grain variation, and absorbs a tiny drop of water. Check stitching for evenness and strength. The cut edge of real leather shows a fibrous texture rather than smooth plastic layers. High-quality Moroccan leather is supple and soft, not stiff or plasticky, and smells earthy and organic.',
  },
  {
    question: 'What is the best leather product to buy in Morocco?',
    answer:
      'Babouches (traditional leather slippers) are the most iconic and affordable souvenir. Leather poufs have become hugely popular for home decor worldwide. Crossbody bags and totes offer excellent craftsmanship at a fraction of European designer prices. Your choice depends on budget and luggage space. Babouches and wallets are the easiest to pack and transport home.',
  },
  {
    question: 'Why does Moroccan leather smell?',
    answer:
      'Traditional tanning uses pigeon droppings, cow urine, quicklime, and tree bark, creating a strong smell during production. Finished leather goods should not smell unpleasant. A lingering chemical or ammonia smell on a finished product indicates poor finishing or rushed processing. Well-made leather goods smell earthy and natural, not foul.',
  },
  {
    question: 'Where is the best place to buy leather in Morocco?',
    answer:
      'Fes is the leather capital of Morocco, home to the famous tanneries and the highest concentration of leather artisans. The medina leather souk offers the widest selection at competitive prices. Marrakech has a larger tourist market with more contemporary designs. Cooperatives offer fixed prices and ethical sourcing. Choose based on whether you prioritize selection, price, or ethical production.',
  },
  {
    question: 'How do I bargain for leather goods in Morocco?',
    answer:
      'Start your counter-offer at about 30-40% of the asking price. Compare prices at multiple shops before committing. Be prepared to walk away, which is the most powerful negotiation tool. Never show too much enthusiasm for a specific item. Buy multiple items together for better per-item discounts. Morning shopping often yields better prices as the first sale of the day is considered good luck.',
  },
  {
    question: 'Is Moroccan leather ethically produced?',
    answer:
      'Traditional tanning uses natural, biodegradable materials but raises environmental concerns about water pollution and worker safety. Modern tanneries increasingly use chrome tanning which is faster but involves toxic chemicals. Support ethical production by buying from cooperatives, asking about tanning methods, and choosing vegetable-tanned leather wherever possible.',
  },
] as const;

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoLeatherGuidePage() {
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
            <span className="text-white">Morocco Leather Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Layers className="w-4 h-4" />
            Leather &amp; Craftsmanship
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Leather Guide:
            <br className="hidden md:block" /> Tanneries, Shopping &amp; Prices
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the legendary tanneries of Fes to the leather souks of Marrakech. Everything
            you need to know about buying authentic Moroccan leather goods with quality tests,
            fair prices, and bargaining strategies.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Legendary Leather Tradition
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has been a center of leather production for over a thousand years. The
                tanneries of Fes, dating to the 11th century, are among the oldest continuously
                operating leather workshops in the world. Long before the term &quot;artisanal&quot;
                became a marketing buzzword, Moroccan tanners were hand-dyeing hides with saffron,
                indigo, and poppy in stone vats using techniques passed down through generations.
                The result is leather with a character and warmth that industrial production cannot
                replicate.
              </p>
              <p>
                From the pointed babouches worn by Moroccan royalty to the hand-stitched poufs that
                grace living rooms worldwide, Moroccan leather goods are both deeply traditional and
                endlessly adaptable. The craft supports thousands of families across the country,
                from the tanners of Fes to the slipper-makers of Marrakech. Whether you are drawn
                to the spectacle of the tanneries or the thrill of finding a perfectly crafted bag
                in the souk, understanding Moroccan leather transforms your shopping experience from
                a tourist transaction into a meaningful cultural encounter.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices and reflect fair souk rates after bargaining.
                Seasonal pricing can change during peak tourist months (October-April) when demand
                drives prices higher. Fixed prices apply only at cooperatives and certified shops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Tanneries of Fes -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Tanneries of Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The heart and soul of Moroccan leatherwork. Three ancient tanneries in the Fes
            medina have produced leather using medieval methods for nearly a millennium.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                      <p className="text-xs text-[var(--color-gold)] font-medium">Founded: {tannery.founded}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{tannery.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Visit tip:</span> {tannery.visitTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Leather Products -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Moroccan Leather Products
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan artisans transform tanned leather into an extraordinary range of
            products, from everyday accessories to statement pieces for your home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {leatherProducts.map((product) => {
              const ProductIcon = product.icon;
              return (
                <div key={product.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ProductIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{product.description}</p>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{product.price}</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {product.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Leather Production Process -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How Moroccan Leather Is Made
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The traditional tanning process used in Fes has changed remarkably little since
            medieval times. Each hide passes through six stages over several weeks.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {tanningSteps.map((item, index) => {
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

      {/* -- Where to Buy Leather -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Leather in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you buy matters as much as what you buy. Each city and channel offers a
            different experience, selection, and price range.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whereToBuy.map((market) => {
              const MarketIcon = market.icon;
              return (
                <div key={market.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MarketIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {market.city}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{market.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{market.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10 mb-3">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {market.tip}
                    </p>
                  </div>
                  <span className="inline-block text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                    Price level: {market.priceLevel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- How to Identify Quality -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Identify Quality Leather
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use these six tests in any leather shop to evaluate whether a product is
            worth the asking price. Knowledge is your best bargaining tool.
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
                        <span className="font-semibold text-green-700">Good:</span> {item.good}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-red-600">Bad:</span> {item.bad}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Price Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Leather Goods Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fair prices depend on where and how you buy. These ranges represent what you
            should expect to pay after successful bargaining.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-accent)]/10">
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Product</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Local Souk</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Tourist Shop</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Cooperative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leatherPriceGuide.map((row, i) => (
                      <tr key={row.product} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                        <td className="p-4 text-[var(--text-primary)] font-medium">{row.product}</td>
                        <td className="p-4 text-[var(--color-accent)] font-semibold">{row.souk}</td>
                        <td className="p-4 text-[var(--text-muted)]">{row.touristShop}</td>
                        <td className="p-4 text-[var(--text-secondary)]">{row.cooperative}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              Prices are starting prices and vary by quality, material, and season. Souk prices
              require bargaining; cooperative prices are fixed. Tourist shop prices reflect the
              range before negotiation. Seasonal pricing can change during peak months.
            </p>
          </div>
        </div>
      </section>

      {/* -- Bargaining Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bargaining Tips for Leather Shopping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Leather shopping in Morocco is a ritual. These strategies help you get a fair
            price while respecting the tradition of negotiation.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {bargainingTips.map((item, index) => {
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

      {/* -- Ethical & Environmental Considerations -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical &amp; Environmental Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the impact of leather production helps you make informed,
            responsible purchasing decisions.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ethicalPoints.map((item) => {
                  const PointIcon = item.icon;
                  return (
                    <div key={item.point} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <PointIcon className="w-4 h-4 text-[var(--color-accent)]" />
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.point}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card-moroccan p-5 mt-6">
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-1">How to Shop Responsibly</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Buy from cooperatives and workshops that demonstrate fair labor practices.
                    Ask about the tanning method; vegetable-tanned leather is more sustainable
                    than chrome-tanned. Choose quality over quantity so your purchase lasts a
                    lifetime. Supporting traditional artisans helps preserve this ancient craft
                    while providing fair livelihoods for Moroccan families.
                  </p>
                </div>
              </div>
            </div>
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/crafts" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Palette className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Crafts &amp; Artisans
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Morocco&apos;s legendary handicraft traditions from zellige tilework to metalwork, pottery, and textile arts.
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
                Navigate Morocco&apos;s famous markets with confidence. Etiquette, bargaining tips, and maps for every major souk.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-shopping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete shopping strategies for Morocco. From medina markets to modern malls, learn where and how to shop.
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
                Master the art of negotiation in Moroccan souks. Strategies, etiquette, and when to walk away.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-carpet-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Layers className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Carpet Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about buying authentic Moroccan carpets. Types, prices, quality tests, and bargaining.
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

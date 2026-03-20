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
  Ruler,
  Package,
  Layers,
  Grid,
  Palette,
  Navigation,
  Compass,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Carpet Buying Guide 2026 | Berber Rugs, Prices & Tips',
  description:
    'The complete guide to buying Moroccan carpets and rugs. Learn about Beni Ourain, Boucherouite, Kilim, and Azilal carpets. Where to buy in souks, how to spot quality, price guide from 500 MAD, bargaining tips, shipping, and how to avoid fakes.',
  keywords: [
    'Morocco carpet buying guide',
    'Moroccan rug guide',
    'how to buy a carpet in Morocco',
    'Beni Ourain rug',
    'Moroccan Berber carpet',
    'Boucherouite rug Morocco',
    'Moroccan Kilim',
    'Marrakech carpet souk',
    'Fes carpet shopping',
    'Moroccan rug prices',
    'buying rugs in Morocco',
    'Azilal carpet',
    'Moroccan carpet types',
    'Morocco rug bargaining',
    'shipping carpet from Morocco',
    'Moroccan rug quality',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-carpet-guide`,
  },
  openGraph: {
    title: 'Morocco Carpet Buying Guide 2026 | Berber Rugs, Prices & Tips',
    description:
      'Everything you need to know about buying authentic Moroccan carpets and rugs. Types, quality tests, fair prices, best markets, bargaining strategies, and shipping advice.',
    url: `${BASE_URL}/morocco-carpet-guide`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/photo-morocco-carpets.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful handwoven Moroccan carpets and Berber rugs displayed in a traditional souk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Carpet Buying Guide | Berber Rugs, Prices & Bargaining Tips',
    description:
      'Complete guide to Moroccan carpets: Beni Ourain, Boucherouite, Kilim, and more. Best markets, quality tips, and price guide from 500 MAD.',
    images: [`${BASE_URL}/images/photo-morocco-carpets.webp`],
  },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-carpet-guide`,
  name: 'Morocco Carpet Buying Guide 2026 | Berber Rugs, Prices & Tips',
  description:
    'The complete guide to buying authentic Moroccan carpets and rugs. Types of carpets, quality identification, fair prices, best markets, bargaining strategies, shipping, and how to avoid fakes.',
  url: `${BASE_URL}/morocco-carpet-guide`,
  image: `${BASE_URL}/images/photo-morocco-carpets.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-carpet-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Carpet Guide', item: `${BASE_URL}/morocco-carpet-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a Moroccan carpet cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Prices vary enormously by type, size, and quality. Small Kilims start from 500 MAD. Medium Beni Ourain rugs range from 3,000-8,000 MAD. Large, high-quality hand-knotted Rabat carpets can reach 15,000-50,000 MAD. Always bargain; initial asking prices are typically 3-5 times the fair price.' },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if a Moroccan carpet is handmade?',
      acceptedAnswer: { '@type': 'Answer', text: 'Flip the carpet over. Handmade rugs show slightly irregular knots on the back that mirror the front design. Machine-made carpets have perfectly uniform, identical loops. Handmade rugs also have minor imperfections, slight asymmetry, and fringe that is part of the weave rather than sewn on.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best type of Moroccan carpet to buy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Beni Ourain rugs are the most popular internationally for their minimalist cream-and-black geometric designs. Boucherouite rugs appeal to those wanting colorful, sustainable art. Kilims are lightweight and affordable. Your best choice depends on your decor style and budget.' },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to buy carpets in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Marrakech souk offers the widest selection. Fes medina has excellent traditional carpets. Cooperative workshops in the Middle Atlas provide fair-trade options with fixed prices. Ouarzazate and Taznakht offer carpets directly from weaving communities at lower prices.' },
    },
    {
      '@type': 'Question',
      name: 'Can I ship a Moroccan carpet home?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most reputable carpet shops offer international shipping via DHL, FedEx, or local postal services. Costs range from 300-1,500 MAD depending on weight and destination. Keep your receipt for customs. Import duties vary by country but handmade textiles often qualify for reduced rates.' },
    },
    {
      '@type': 'Question',
      name: 'How do I bargain for a carpet in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Start at about 30-40% of the asking price. Be prepared to walk away; this is the most powerful negotiation tool. Compare prices at multiple shops first. Never show too much enthusiasm. Budget 30-60 minutes for a carpet purchase. The final price should be around 40-60% of the initial ask.' },
    },
    {
      '@type': 'Question',
      name: 'How do I spot a fake Moroccan carpet?',
      acceptedAnswer: { '@type': 'Answer', text: 'Watch for machine-made rugs sold as handmade. Check the back for irregular knots. Synthetic dyes bleed when rubbed with a damp white cloth; natural dyes do not. Imported carpets from China or India are sometimes sold as Moroccan. Ask about the specific region and tribe of origin.' },
    },
    {
      '@type': 'Question',
      name: 'What is a Beni Ourain carpet?',
      acceptedAnswer: { '@type': 'Answer', text: 'Beni Ourain carpets are hand-knotted wool rugs made by the Beni Ourain tribe in the Middle Atlas Mountains. They feature cream or ivory backgrounds with simple geometric patterns in dark brown or black. Prized for their plush, thick pile and minimalist aesthetic, they have become globally popular in modern interior design.' },
    },
  ],
};

/* ===================================================================
   DATA: CARPET TYPES
   =================================================================== */

const carpetTypes = [
  {
    name: 'Beni Ourain',
    origin: 'Middle Atlas Mountains',
    icon: Star,
    material: '100% natural sheep wool',
    style: 'Cream/ivory base with black or dark brown geometric diamond patterns',
    description:
      'The most internationally sought-after Moroccan rug. Hand-knotted by the Beni Ourain Berber tribe using undyed wool from their own flocks. The minimalist diamond and zigzag patterns carry symbolic meanings related to fertility, nature, and protection. Their thick, plush pile was originally used as bedding and insulation in mountain homes.',
    tip: 'Authentic Beni Ourain rugs use only natural undyed wool. If you see bright colors, it is likely a different style being marketed as Beni Ourain.',
    price: 'From 3,000 MAD (small) to 15,000 MAD (large)',
  },
  {
    name: 'Boucherouite',
    origin: 'Various regions',
    icon: Palette,
    material: 'Recycled textiles, cotton scraps, synthetic fabrics',
    style: 'Bold, colorful, abstract designs with no fixed pattern',
    description:
      'Born from resourcefulness, Boucherouite rugs are woven from recycled fabric strips by women in communities with limited access to wool. Each rug is a unique work of art with vibrant colors and spontaneous abstract designs. The name comes from the Arabic "bu sherwit" meaning "a piece torn from used clothing." They have gained a strong following in the contemporary art world.',
    tip: 'Every Boucherouite is one-of-a-kind. The most sought-after have balanced compositions despite their spontaneous creation. Look for tight, even weaving.',
    price: 'From 800 MAD (small) to 5,000 MAD (large)',
  },
  {
    name: 'Kilim (Hanbel)',
    origin: 'Nationwide, especially Middle and High Atlas',
    icon: Grid,
    material: 'Wool, sometimes cotton blend',
    style: 'Flat-woven with bold geometric patterns, vibrant colors',
    description:
      'Flat-woven textiles produced across Morocco with distinct regional variations. Unlike knotted carpets, Kilims have no pile, making them lightweight, reversible, and versatile. They serve as floor coverings, wall hangings, table cloths, and saddle blankets. The geometric patterns encode tribal identity and regional origins. Atlas Mountain Kilims feature the boldest designs.',
    tip: 'Kilims are ideal for travelers since they are lightweight and easy to roll. They also make excellent wall hangings and can be used as throws.',
    price: 'From 500 MAD (small) to 4,000 MAD (large)',
  },
  {
    name: 'Rabat Carpet',
    origin: 'Rabat and Sale',
    icon: Award,
    material: 'Fine wool, sometimes silk accents',
    style: 'Central medallion design with intricate floral borders, Ottoman influence',
    description:
      'Morocco&apos;s most refined and labor-intensive carpet tradition. Rabat carpets feature a central medallion surrounded by elaborate floral and arabesque borders, reflecting Ottoman Turkish carpet influences brought to Morocco in the 17th century. They have a high knot density (up to 360 knots per square inch) and can take a single artisan 6-18 months to complete.',
    tip: 'Genuine Rabat carpets carry a certification label from the Ministry of Handicrafts. They are investment pieces with a high knot count.',
    price: 'From 8,000 MAD (small) to 50,000 MAD (large)',
  },
  {
    name: 'Azilal',
    origin: 'Azilal Province, High Atlas',
    icon: Sparkles,
    material: 'Wool on cotton or wool warp',
    style: 'White base with colorful free-form symbols, abstract motifs',
    description:
      'From the High Atlas town of Azilal, these rugs blend the cream-base aesthetic of Beni Ourain with the vibrant color palette of Boucherouite. Women weavers create spontaneous, almost artistic abstract compositions using symbols that represent their daily lives, dreams, and beliefs. Each piece is deeply personal and no two are alike.',
    tip: 'Azilal rugs are gaining value rapidly in the international design market. Look for pieces with harmonious color combinations and meaningful symbology.',
    price: 'From 2,000 MAD (small) to 10,000 MAD (large)',
  },
  {
    name: 'Zanafi (Glaoui)',
    origin: 'Ouarzazate region',
    icon: Layers,
    material: 'Wool with cotton foundation',
    style: 'Part flat-weave, part pile, geometric patterns in earth tones',
    description:
      'A distinctive hybrid carpet that combines flat-weave Kilim sections with raised pile sections in the same rug. This alternating texture creates a striking visual and tactile effect. Named after the powerful Glaoui chieftains of the Ouarzazate region, these carpets feature bold geometric patterns in natural earth tones of terracotta, black, cream, and saffron yellow.',
    tip: 'The contrasting textures of flat-weave and pile make Zanafi carpets highly distinctive. Run your hand across the surface to feel the transitions.',
    price: 'From 2,500 MAD (small) to 8,000 MAD (large)',
  },
  {
    name: 'Taznakht',
    origin: 'Taznakht, Ouarzazate Province',
    icon: Heart,
    material: 'Wool, often cactus silk (sabra) highlights',
    style: 'Rich jewel tones with geometric tribal patterns',
    description:
      'From the carpet-weaving capital of southern Morocco, Taznakht rugs are known for their rich, saturated colors achieved through natural dyes. Saffron yellow, pomegranate red, indigo blue, and henna orange create stunning color fields filled with symbolic geometric patterns. Many include cactus silk (sabra) threads that add a subtle sheen.',
    tip: 'Taznakht is worth visiting for direct-from-weaver prices. The town hosts a carpet festival each autumn celebrating the local weaving tradition.',
    price: 'From 1,500 MAD (small) to 7,000 MAD (large)',
  },
  {
    name: 'Chichaoua',
    origin: 'Chichaoua Province',
    icon: Compass,
    material: 'Wool with natural dyes',
    style: 'Deep red-orange base with simple geometric motifs',
    description:
      'Distinguished by their signature deep saffron-red background color, Chichaoua carpets feature restrained geometric designs that let the rich color field dominate. Made primarily by women of the Ait Ouaouzguit tribe, these rugs have a medium pile height and are extremely durable. They are less well-known internationally, making them excellent value.',
    tip: 'Chichaoua carpets offer excellent quality at lower prices because they are less trendy than Beni Ourain. Great for buyers who want authentic craftsmanship without the premium.',
    price: 'From 1,200 MAD (small) to 6,000 MAD (large)',
  },
] as const;

/* ===================================================================
   DATA: WHERE TO BUY
   =================================================================== */

const whereToBuy = [
  {
    city: 'Marrakech',
    location: 'Souk des Tapis & Criee Berbere',
    icon: Star,
    description:
      'The largest carpet market in Morocco, located in the heart of the medina. The Criee Berbere (Berber auction square) was historically where carpet auctions took place. Today it is surrounded by hundreds of carpet shops offering every type of Moroccan rug. The selection is unmatched, but so is the sales pressure and inflated prices aimed at tourists.',
    tip: 'Visit multiple shops before buying. Start deeper in the souk away from Jemaa el-Fnaa where prices are lower. Do not follow guides who lead you to specific shops as they earn commission.',
    priceLevel: 'High (strong tourist premium)',
  },
  {
    city: 'Fes',
    location: 'Medina carpet shops & Place Seffarine area',
    icon: Award,
    description:
      'Fes has a long tradition of fine carpet making, especially the city-style knotted carpets influenced by Ottoman and Andalusian designs. The medina carpet shops tend to be more established family businesses with higher-quality pieces and more knowledgeable staff. Prices are generally more reasonable than Marrakech, and the sales approach is often less aggressive.',
    tip: 'The carpet cooperative near Place Seffarine offers fixed prices and quality certificates. A good alternative if you dislike bargaining.',
    priceLevel: 'Moderate to high',
  },
  {
    city: 'Cooperative Workshops',
    location: 'Middle Atlas & High Atlas villages',
    icon: Users,
    description:
      'Women&apos;s weaving cooperatives across the Atlas Mountains offer the most ethical and transparent carpet-buying experience. You can watch artisans at work, learn about weaving techniques, and purchase directly from the makers at fixed, fair-trade prices. A portion of proceeds supports the community. Located in towns like Ain Leuh, Azrou, and Tazenakht.',
    tip: 'Cooperatives charge fixed prices with no bargaining. While slightly higher than souk rock-bottom prices, you are guaranteed authenticity, fair wages, and direct community support.',
    priceLevel: 'Fair trade (fixed prices)',
  },
  {
    city: 'Ouarzazate & Taznakht',
    location: 'Southern Morocco carpet towns',
    icon: MapPin,
    description:
      'The gateway to the Sahara is also a carpet heartland. Ouarzazate and the nearby town of Taznakht are centers for Zanafi and Taznakht carpet production. Buying here means you are close to the source, with lower prices and the chance to meet weavers directly. Less tourist traffic means more relaxed shopping and fairer starting prices.',
    tip: 'If traveling to the desert, budget time for carpet shopping in Ouarzazate. Prices here can be 30-50% lower than Marrakech for comparable quality.',
    priceLevel: 'Low to moderate',
  },
  {
    city: 'Online & Verified Dealers',
    location: 'International shipping available',
    icon: Globe,
    description:
      'Several reputable Moroccan carpet dealers operate online with worldwide shipping. This is convenient but you lose the ability to touch, feel, and inspect the carpet in person. Stick to dealers with physical shops in Morocco, verifiable reviews, and transparent return policies. Expect to pay a premium over souk prices for the convenience.',
    tip: 'Request a video call to see the carpet in natural light before purchasing. Verify the dealer has a physical address in Morocco and read reviews from independent sources.',
    priceLevel: 'Moderate to high (convenience premium)',
  },
] as const;

/* ===================================================================
   DATA: QUALITY IDENTIFICATION
   =================================================================== */

const qualityTests = [
  {
    test: 'Knot Count',
    icon: Grid,
    good: 'Higher knot density indicates finer craftsmanship. Rabat carpets reach 360 knots per square inch. Flip the rug and count knots in a one-inch square on the back.',
    bad: 'Very loose weaving with wide gaps between knots. Fewer than 25 knots per square inch on a carpet sold as "fine quality" is a warning sign.',
  },
  {
    test: 'Material Test',
    icon: Scissors,
    good: 'Pure wool feels warm, springs back when compressed, and has a natural lanolin scent. Pull a fiber: wool stretches before breaking. Cotton warps are acceptable.',
    bad: 'Synthetic fibers feel cold and plastic-like. They melt when touched with a match rather than charring like wool. Synthetic rugs pill and flatten quickly.',
  },
  {
    test: 'Dye Test',
    icon: Palette,
    good: 'Natural dyes produce rich, slightly varied tones. Rub a damp white cloth on the carpet; natural dyes show minimal color transfer. Colors age beautifully.',
    bad: 'Synthetic dyes produce uniform, harsh colors that bleed heavily onto a damp cloth. Chemical dye smells may be noticeable. Colors fade unevenly over time.',
  },
  {
    test: 'Back Inspection',
    icon: Eye,
    good: 'Handmade rugs have slightly irregular knots on the back that mirror the front pattern. The back reveals the true craftsmanship and knot density of the piece.',
    bad: 'Machine-made carpets show perfectly uniform, identical loops on the back. Glued-on backing hides construction quality. Fringe sewn on rather than integral to the weave.',
  },
  {
    test: 'Flexibility Test',
    icon: Layers,
    good: 'A quality handwoven carpet drapes and folds naturally. Roll it up; it should curl smoothly without cracking or resisting. Flat-weave Kilims should be fully flexible.',
    bad: 'Stiff, rigid carpets may have glue backing or synthetic stiffeners. Cracking sounds when folding indicate low-quality materials or poor construction.',
  },
  {
    test: 'Weight & Density',
    icon: Ruler,
    good: 'Heavier carpets generally indicate higher knot density and more material. A quality Beni Ourain rug feels substantial and plush. Even Kilims should feel dense despite being flat.',
    bad: 'Unusually light carpets for their size may use thin, low-quality yarn or have a very loose weave. Thin, flimsy rugs will not last or hold their shape.',
  },
] as const;

/* ===================================================================
   DATA: PRICE GUIDE
   =================================================================== */

const carpetPriceGuide = [
  { type: 'Kilim / Hanbel (small, 1x1.5m)', souk: 'From 500 MAD', touristShop: 'From 1,500-3,000 MAD', cooperative: 'From 800 MAD' },
  { type: 'Kilim / Hanbel (large, 2x3m)', souk: 'From 2,000 MAD', touristShop: 'From 5,000-8,000 MAD', cooperative: 'From 3,000 MAD' },
  { type: 'Boucherouite (medium)', souk: 'From 1,500 MAD', touristShop: 'From 3,000-6,000 MAD', cooperative: 'From 2,000 MAD' },
  { type: 'Beni Ourain (small, 1.5x2m)', souk: 'From 3,000 MAD', touristShop: 'From 6,000-12,000 MAD', cooperative: 'From 4,000 MAD' },
  { type: 'Beni Ourain (large, 2.5x3.5m)', souk: 'From 7,000 MAD', touristShop: 'From 15,000-25,000 MAD', cooperative: 'From 9,000 MAD' },
  { type: 'Azilal (medium, 1.5x2.5m)', souk: 'From 2,500 MAD', touristShop: 'From 5,000-10,000 MAD', cooperative: 'From 3,500 MAD' },
  { type: 'Zanafi / Glaoui (medium)', souk: 'From 2,500 MAD', touristShop: 'From 5,000-9,000 MAD', cooperative: 'From 3,500 MAD' },
  { type: 'Taznakht (medium)', souk: 'From 1,500 MAD', touristShop: 'From 4,000-8,000 MAD', cooperative: 'From 2,500 MAD' },
  { type: 'Rabat carpet (fine, 2x3m)', souk: 'From 15,000 MAD', touristShop: 'From 30,000-60,000 MAD', cooperative: 'From 20,000 MAD' },
] as const;

/* ===================================================================
   DATA: BARGAINING TIPS
   =================================================================== */

const bargainingTips = [
  {
    step: 'Research First',
    icon: Eye,
    description: 'Visit several carpet shops before buying anything. Note asking prices for similar rugs at different locations. This gives you a clear idea of the fair price range and prevents you from overpaying at the first shop you enter.',
  },
  {
    step: 'Start Low, Stay Calm',
    icon: DollarSign,
    description: 'Open your counter-offer at about 30-40% of the asking price. The seller will express shock; this is expected and part of the tradition. Stay friendly and patient. Bargaining for a carpet is a social ritual that should be enjoyed, not rushed.',
  },
  {
    step: 'Know Your Budget',
    icon: Shield,
    description: 'Decide your maximum price before entering the shop and do not exceed it. Emotional attachment to a specific rug weakens your negotiating position. If the price does not reach your budget, walk away; there are thousands of beautiful carpets in Morocco.',
  },
  {
    step: 'The Walk-Away',
    icon: Navigation,
    description: 'Walking toward the door is the most effective bargaining tool. If the seller lets you leave, the price was already near their minimum. If they call you back with a lower offer, you know there is still room. Many final deals happen at the doorstep.',
  },
  {
    step: 'Bundle Purchases',
    icon: Package,
    description: 'Buying multiple items gives you leverage for a better overall price. If you want a carpet and a Kilim, negotiate them together rather than separately. Sellers prefer larger transactions and will offer better per-item discounts.',
  },
  {
    step: 'Time It Right',
    icon: Clock,
    description: 'Shop in the morning when sellers are eager for their first sale of the day (considered good luck). Late afternoon, when traders want to close a final deal, is also favorable. Avoid peak tourist hours when sellers feel no pressure to discount.',
  },
] as const;

/* ===================================================================
   DATA: SHIPPING & CUSTOMS
   =================================================================== */

const shippingTips = [
  { tip: 'Most reputable carpet shops offer international shipping via DHL, FedEx, or Morocco Post (La Poste)', icon: Package },
  { tip: 'Shipping costs range from 300-1,500 MAD depending on carpet weight, size, and destination country', icon: DollarSign },
  { tip: 'Keep your purchase receipt and request a certificate of authenticity for customs purposes', icon: Shield },
  { tip: 'Handmade carpets and textiles often qualify for reduced import duty rates in the EU, USA, and Canada', icon: Globe },
  { tip: 'For carry-on transport, Kilims and small rugs can be vacuum-compressed and fit in a large suitcase', icon: Layers },
  { tip: 'Insist the carpet is wrapped and sealed in front of you to ensure the rug shipped is the one you selected', icon: CheckCircle },
] as const;

/* ===================================================================
   DATA: SPOTTING FAKES
   =================================================================== */

const fakeWarnings = [
  {
    warning: 'Machine-Made Sold as Handmade',
    icon: AlertTriangle,
    details: 'Always check the back of the carpet. Handmade rugs show slightly irregular knots; machine-made ones have perfectly uniform loops. Machine-made carpets are worth a fraction of handmade pieces.',
  },
  {
    warning: 'Imported Carpets',
    icon: Globe,
    details: 'Some shops sell carpets imported from India, China, or Turkey and market them as Moroccan. Ask specifically where and by which tribe the carpet was made. Genuine sellers can name the region and often the weaver.',
  },
  {
    warning: 'Synthetic Dye Deception',
    icon: Palette,
    details: 'Sellers may claim natural dyes when synthetic ones were used. Test with a damp white cloth rubbed on the carpet. Excessive color transfer suggests synthetic dyes. Natural vegetable dyes produce softer, more varied tones.',
  },
  {
    warning: 'Tourist Trap Shops',
    icon: Navigation,
    details: 'Be wary of shops that tour guides, taxi drivers, or self-appointed "friends" lead you to. These shops pay commission (up to 30-50% of the sale price), which is added to your price. Find shops independently.',
  },
  {
    warning: 'Inflated "Antique" Claims',
    icon: Clock,
    details: 'Many carpets sold as "antique" or "vintage" are recently made and artificially aged through washing and sun exposure. True antique Moroccan carpets are rare and typically found only through specialized dealers.',
  },
] as const;

/* ===================================================================
   DATA: FAQ
   =================================================================== */

const faqs = [
  {
    question: 'How much does a Moroccan carpet cost?',
    answer:
      'Prices vary enormously by type, size, and quality. Small Kilims start from 500 MAD. Medium Beni Ourain rugs range from 3,000-8,000 MAD. Large, high-quality hand-knotted Rabat carpets can reach from 15,000-50,000 MAD. Always bargain at souks; initial asking prices are typically 3-5 times the fair price. Seasonal pricing can change, especially during peak tourist months.',
  },
  {
    question: 'How can I tell if a Moroccan carpet is handmade?',
    answer:
      'Flip the carpet over. Handmade rugs show slightly irregular knots on the back that mirror the front design. Machine-made carpets have perfectly uniform, identical loops. Handmade rugs also have minor imperfections, slight asymmetry in the pattern, and fringe that is an integral part of the weave rather than sewn or glued on afterward.',
  },
  {
    question: 'What is the best type of Moroccan carpet to buy?',
    answer:
      'It depends on your style and budget. Beni Ourain rugs are the most internationally popular for their minimalist cream-and-black geometric designs. Boucherouite rugs appeal to those wanting colorful, sustainable textile art. Kilims are lightweight and affordable. Rabat carpets are the finest and most expensive. Visit several shops to see all types before deciding.',
  },
  {
    question: 'Where is the best place to buy carpets in Morocco?',
    answer:
      'Marrakech offers the widest selection but the highest prices and most sales pressure. Fes medina has excellent traditional carpets with less tourist markup. Cooperative workshops in the Middle Atlas provide fair-trade options at fixed prices. Ouarzazate and Taznakht offer carpets directly from weaving communities at the lowest prices.',
  },
  {
    question: 'Can I ship a Moroccan carpet home?',
    answer:
      'Yes. Most reputable carpet shops offer international shipping via DHL, FedEx, or La Poste Maroc. Shipping costs range from 300-1,500 MAD depending on weight and destination. Keep your receipt for customs clearance. Handmade textiles often qualify for reduced import duties. Always insist the carpet is wrapped and sealed in front of you.',
  },
  {
    question: 'How do I bargain for a carpet in Morocco?',
    answer:
      'Start your counter-offer at about 30-40% of the asking price. Be prepared to walk away, which is the most powerful negotiation tool. Compare prices at multiple shops first. Never show excessive enthusiasm. Budget 30-60 minutes for a carpet purchase. The final agreed price should typically land around 40-60% of the initial asking price.',
  },
  {
    question: 'How do I spot a fake Moroccan carpet?',
    answer:
      'Watch for machine-made rugs sold as handmade by checking the back for irregular knots. Rub a damp white cloth on the carpet to test for synthetic dyes which bleed heavily. Imported carpets from China or India are sometimes sold as Moroccan; ask about the specific region and tribe of origin. Be wary of carpets marketed as "antique" that may be artificially aged.',
  },
  {
    question: 'What is a Beni Ourain carpet?',
    answer:
      'Beni Ourain carpets are hand-knotted wool rugs made by the Beni Ourain Berber tribe in the Middle Atlas Mountains. They feature cream or ivory backgrounds with simple geometric patterns in dark brown or black. Prized for their plush, thick pile and minimalist aesthetic, they have become globally popular in modern and Scandinavian interior design.',
  },
] as const;

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoCarpetGuidePage() {
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
          style={{ backgroundImage: 'url(/images/photo-morocco-carpets.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Carpet Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Layers className="w-4 h-4" />
            Carpets &amp; Rugs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Carpet Guide:
            <br className="hidden md:block" /> How to Buy the Perfect Rug
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Beni Ourain to Boucherouite. Everything you need to know about buying
            authentic handwoven carpets in Morocco with real prices, quality tests, and bargaining strategies.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Carpet Lover&apos;s Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has one of the oldest and most diverse carpet-weaving traditions in the
                world, stretching back over a thousand years to the Berber (Amazigh) communities
                of the Atlas Mountains. Every region, tribe, and village has developed its own
                distinct style, patterns, and techniques, creating a tapestry of textile art
                found nowhere else on earth. From the plush ivory piles of Beni Ourain rugs to
                the riot of recycled color in Boucherouite textiles, Moroccan carpets are both
                functional craft and profound cultural expression.
              </p>
              <p>
                Walking into a Moroccan carpet shop is an experience unto itself. Sellers unroll
                rug after rug across the floor, mint tea appears, and the stories behind each
                piece unfold. The symbols woven into every carpet carry deep meaning: diamonds
                for protection, zigzags for water, crosses for the stars. Knowing what to look
                for, what to pay, and how to navigate the negotiation transforms this from an
                overwhelming encounter into one of the most rewarding purchases of your trip.
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

      {/* -- Types of Moroccan Carpets -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Moroccan Carpets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco produces an astonishing variety of handwoven carpets and rugs, each with
            its own character, origin, and price range.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {carpetTypes.map((carpet) => {
              const CarpetIcon = carpet.icon;
              return (
                <div key={carpet.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CarpetIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {carpet.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{carpet.origin}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{carpet.description}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-16 shrink-0">Material:</span>
                      <span className="text-[var(--text-secondary)]">{carpet.material}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-16 shrink-0">Style:</span>
                      <span className="text-[var(--text-secondary)]">{carpet.style}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{carpet.price}</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {carpet.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Where to Buy Carpets -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Carpets in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you buy matters as much as what you buy. Each location offers a different
            experience, selection, and price range.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
            How to Identify Quality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use these six tests in any carpet shop to evaluate whether a rug is worth
            the asking price. Knowledge is your best bargaining tool.
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
            Carpet Price Guide
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
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Carpet Type</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Local Souk</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Tourist Shop</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Cooperative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carpetPriceGuide.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                        <td className="p-4 text-[var(--text-primary)] font-medium">{row.type}</td>
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
              Prices are starting prices and vary by quality, condition, and season. Souk prices
              require bargaining; cooperative prices are fixed. Tourist shop prices reflect the
              range before negotiation.
            </p>
          </div>
        </div>
      </section>

      {/* -- Bargaining Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bargaining &amp; Negotiation Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Carpet buying in Morocco is a ritual. These strategies help you get a fair price
            while respecting the tradition of negotiation.
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

      {/* -- Shipping & Customs -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Package className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping &amp; Customs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting your carpet home safely is the final step. Here is what you need to know
            about international shipping and import regulations.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shippingTips.map((item) => {
                  const TipIcon = item.icon;
                  return (
                    <div key={item.tip} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <TipIcon className="w-4 h-4 text-[var(--color-accent)]" />
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card-moroccan p-5 mt-6">
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-1">Important: Customs Duties by Country</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    The USA charges import duty on handmade carpets above $800 in declared value
                    (typically 4-6% for hand-knotted rugs). EU countries generally allow personal
                    imports up to EUR 430 duty-free. Australia and Canada have similar thresholds.
                    Handmade textiles from Morocco may qualify for preferential trade rates under
                    various bilateral agreements. Keep your purchase receipt and request a certificate
                    of origin from the seller.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- How to Spot Fakes -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Spot Fakes &amp; Tourist Traps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not every carpet sold in Morocco is authentic. Arm yourself with these red flags
            to avoid common scams and deceptive practices.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {fakeWarnings.map((item) => {
              const WarnIcon = item.icon;
              return (
                <div key={item.warning} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <WarnIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.warning}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <Link href="/crafts" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Palette className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Crafts &amp; Artisans
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Morocco&apos;s legendary handicraft traditions from zellige tilework to leather goods and metalwork.
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

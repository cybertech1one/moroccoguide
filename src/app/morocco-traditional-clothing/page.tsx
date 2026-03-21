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
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Gem,
  Award,
  BookOpen,
  Crown,
  Scissors,
  Shirt,
  ShoppingBag,
  Ruler,
  Palette,
  Globe,
  CircleDot,
  Layers,
  Eye,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Traditional Clothing Guide 2026 | Djellaba, Caftan, Takchita & More',
  description:
    'Complete guide to Moroccan traditional clothing: djellaba, caftan, takchita, babouche slippers, fez hat, burnous, haik, and Amazigh dress. Where to buy, custom tailoring prices, clothing etiquette, and what travelers should wear in Morocco.',
  keywords: [
    'Morocco traditional clothing',
    'Moroccan djellaba',
    'Moroccan caftan',
    'kaftan Morocco',
    'takchita dress',
    'babouche slippers Morocco',
    'fez hat tarbouche',
    'burnous cloak Morocco',
    'Berber clothing Morocco',
    'Amazigh traditional dress',
    'Moroccan fashion',
    'gandoura Morocco',
    'haik Morocco',
    'selham Morocco',
    'what to wear in Morocco',
    'Moroccan clothing etiquette',
    'buy traditional clothes Morocco',
    'custom tailoring Marrakech',
    'Moroccan fashion designers',
    'Morocco dress code travelers',
    'souk clothing Morocco',
    'Moroccan wedding attire',
  ],
  openGraph: {
    title: 'Morocco Traditional Clothing Guide 2026 | Djellaba, Caftan, Takchita & More',
    description:
      'Discover Morocco\'s rich textile heritage. From the everyday djellaba to the lavish takchita, explore traditional garments, where to buy them, custom tailoring prices, and clothing etiquette for travelers.',
    url: `${BASE_URL}/morocco-traditional-clothing`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful traditional Moroccan clothing including caftans, djellabas, and babouche slippers displayed in a medina shop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Traditional Clothing Guide 2026 | Djellaba, Caftan & More',
    description:
      'From djellabas to caftans to babouche slippers: everything you need to know about Moroccan traditional clothing, where to buy, tailoring prices, and what travelers should wear.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-traditional-clothing` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-traditional-clothing`,
  name: 'Morocco Traditional Clothing Guide 2026 | Djellaba, Caftan, Takchita & More',
  description:
    'Complete guide to Moroccan traditional clothing covering djellaba, caftan, takchita, babouche slippers, fez hat, burnous, haik, gandoura, Amazigh dress, modern designers, where to buy, tailoring prices, and clothing etiquette for travelers.',
  url: `${BASE_URL}/morocco-traditional-clothing`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-traditional-clothing`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Traditional Clothing Guide', item: `${BASE_URL}/morocco-traditional-clothing` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the traditional clothing of Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most recognizable traditional Moroccan garments include the djellaba (a long hooded robe worn daily by both men and women), the caftan (an ornate dress for formal occasions), the takchita (a two-piece ceremonial ensemble), babouche slippers, the fez hat (tarbouche), the burnous (a heavy winter cloak), and various regional Amazigh/Berber styles. Each garment reflects centuries of cultural heritage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tourists wear traditional Moroccan clothing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, tourists are welcome to wear Moroccan clothing and most locals appreciate the cultural interest. Buying and wearing a djellaba, babouche slippers, or a caftan is a wonderful way to connect with local culture. Just be respectful with religious garments and avoid wearing traditional items as costumes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a custom djellaba cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom-made djellaba in Morocco costs from 300 MAD for a simple cotton version to 2,000+ MAD for fine wool or silk with intricate embroidery. Ready-made djellabas at the souk start from 150 MAD. Tailoring typically takes 3-7 days depending on the complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a caftan and a takchita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A caftan (kaftan) is a single-piece flowing dress, often richly embroidered, worn for formal events. A takchita is a two-piece ensemble consisting of an under-dress (tahtia) and a more elaborate over-dress (dfina) fastened with a decorative belt (mdamma). The takchita is considered more formal and is the standard choice for Moroccan weddings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to buy traditional Moroccan clothing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best places to buy traditional clothing include the medina souks of Fes and Marrakech for variety and competitive pricing, the Habous Quarter in Casablanca for quality tailoring, and specific ateliers in the Mellah district. For designer caftans, visit boutiques in Casablanca\'s Maarif district or the Gueliz area of Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should female travelers wear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Female travelers should dress modestly, covering shoulders and knees, especially in medinas, rural areas, and near mosques. Loose-fitting clothing is comfortable and culturally appropriate. In major cities like Casablanca and Marrakech\'s Gueliz district, dress codes are more relaxed. A lightweight scarf is useful for visiting religious sites and can double as sun protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Moroccan djellaba made from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Djellabas are made from different fabrics depending on the season and occasion. Summer djellabas use lightweight cotton or linen. Winter versions are crafted from handwoven wool, often from the Middle Atlas region. Formal djellabas may use fine wool, silk blends, or synthetic fabrics with elaborate passementerie (sfifa and aakad) button closures.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does custom tailoring take in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple alterations take 1-2 hours. A custom djellaba requires 3-5 days. A fully bespoke caftan with embroidery takes 1-3 weeks depending on complexity. For wedding takchitas with heavy handwork, allow 3-6 weeks. Many tailors in the medina offer rush services at an additional charge of 30-50% above the standard price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are babouche slippers comfortable for walking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional babouche slippers are designed for indoor use and short walks. They soften and mold to your feet after a few days. For extended walking in the medina, choose babouches with thicker soles or opt for the outdoor version with rubber bottoms. New babouches need a break-in period of 2-3 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors are significant in Moroccan clothing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Colors carry meaning in Moroccan dress. White symbolizes purity and is worn for religious occasions and Friday prayers. Blue is associated with Fes and the Saharan regions (the "Blue Men" Tuareg tradition). Green holds religious significance in Islam. Earth tones (browns, beiges) are typical of rural and Berber clothing. Red and gold are favored for celebrations and weddings.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL GARMENTS
   ═══════════════════════════════════════════════════════════════ */

const traditionalGarments = [
  {
    name: 'Djellaba',
    arabic: 'الجلابة',
    icon: Shirt,
    worn: 'Men & Women (daily)',
    price: 'From 150 MAD (ready-made) / From 300 MAD (custom)',
    description:
      'The quintessential Moroccan garment. A long, loose-fitting robe with full sleeves and a pointed hood (qob). Worn over regular clothing, the djellaba is practical, modest, and suited to Morocco\'s climate. Men\'s djellabas are typically solid-colored (white, beige, brown, gray), while women\'s versions come in every color and pattern imaginable.',
    details: [
      'Summer versions in cotton or linen; winter versions in handwoven wool',
      'The pointed hood (qob) serves as sun protection and warmth',
      'Fastened with sfifa (braided cord closures) and aakad (knot buttons)',
      'White djellabas are traditional for Friday mosque prayers',
    ],
  },
  {
    name: 'Caftan (Kaftan)',
    arabic: 'القفطان',
    icon: Crown,
    worn: 'Women (formal occasions)',
    price: 'From 800 MAD (ready-made) / From 2,000 MAD (custom)',
    description:
      'The Moroccan caftan is a single-piece flowing dress that represents centuries of refined craftsmanship. Worn for weddings, religious holidays, and formal gatherings, it features intricate embroidery, beading, and luxurious fabrics like silk, brocade, or chiffon. UNESCO recognized Moroccan caftan craftsmanship on its intangible heritage list.',
    details: [
      'Typically ankle-length with long or three-quarter sleeves',
      'Embellished with hand-embroidery (tarz), sequins, or crystal beading',
      'Worn with a matching belt (mdamma) to define the waist',
      'Moroccan caftan fashion shows are major cultural events',
    ],
  },
  {
    name: 'Takchita',
    arabic: 'التكشيطة',
    icon: Gem,
    worn: 'Women (weddings & grand ceremonies)',
    price: 'From 1,500 MAD (ready-made) / From 4,000 MAD (custom)',
    description:
      'The most formal garment in Moroccan women\'s wardrobe. A two-piece ensemble consisting of an under-dress (tahtia) in a complementary fabric and an over-dress (dfina) that is the main showpiece. The over-dress is left open at the front and cinched with an elaborate belt (mdamma). Brides often change into multiple takchitas during their wedding celebration.',
    details: [
      'The belt (mdamma) is often gold or silver with precious stones',
      'Brides may wear 5-7 different takchitas at their wedding',
      'Regional styles vary: Fassi, Marrakchi, Saharan, and modern fusion',
      'A master takchita seamstress (maalma) is highly respected',
    ],
  },
  {
    name: 'Babouche Slippers',
    arabic: 'البلغة',
    icon: CircleDot,
    worn: 'Men & Women (daily)',
    price: 'From 30 MAD (basic) / From 200 MAD (embroidered leather)',
    description:
      'Iconic Moroccan leather slippers without a heel counter, allowing you to slip them on and off easily. Made from soft leather, often dyed in bold colors. The traditional yellow babouche is the classic men\'s style, while women\'s babouches come in every color with embroidery, sequins, or beading.',
    details: [
      'Men\'s traditional color: yellow (also white for religious occasions)',
      'Handmade in the tanneries of Fes, Marrakech, and Taroudant',
      'Need a break-in period of 2-3 days to mold to your feet',
      'Outdoor versions have a rubber sole; indoor ones are all leather',
    ],
  },
  {
    name: 'Fez Hat (Tarbouche)',
    arabic: 'الطربوش',
    icon: Award,
    worn: 'Men (formal & ceremonial)',
    price: 'From 50 MAD (basic) / From 300 MAD (premium felt)',
    description:
      'A flat-topped, cylindrical hat made of red felt, named after the city of Fes where it originated. The tarbouche was standard formal headwear for Moroccan men from the 17th century through the mid-20th century. While less common in daily wear today, it remains an important part of ceremonial dress and is worn by royal guards, musicians, and during cultural events.',
    details: [
      'Made from pressed felt, traditionally dyed with crimson berry extract',
      'Often topped with a silk tassel (shosha) in black or dark blue',
      'The Fes medina still has active tarbouche workshops',
      'Worn at an angle for a traditional look',
    ],
  },
  {
    name: 'Gandoura',
    arabic: 'الغندورة',
    icon: Layers,
    worn: 'Men & Women (summer / casual)',
    price: 'From 100 MAD (ready-made) / From 250 MAD (custom)',
    description:
      'A simpler, sleeveless or short-sleeved version of the djellaba, without a hood. The gandoura is the preferred summer garment, lighter and more breathable than the full djellaba. Popular across North Africa, the Moroccan version often features subtle embroidery around the neckline and chest.',
    details: [
      'Cooler than the djellaba due to shorter sleeves and no hood',
      'Made from cotton, linen, or lightweight synthetic blends',
      'Common in southern Morocco and Saharan regions',
      'Often worn at home or for relaxed social gatherings',
    ],
  },
  {
    name: 'Haik',
    arabic: 'الحايك',
    icon: Eye,
    worn: 'Women (traditional / regional)',
    price: 'From 200 MAD (cotton) / From 600 MAD (fine wool)',
    description:
      'A large rectangular piece of fabric (approximately 5 meters long) draped around the entire body. The haik was the predominant outer garment for Moroccan women before the djellaba became widespread. Still worn in some regions, particularly in northern cities like Tetouan, Tangier, and Chefchaouen. The white haik is distinctive to northern Morocco.',
    details: [
      'Requires skill to drape and hold in place (no pins or fasteners)',
      'White haik: northern Morocco; dark haik: southern regions',
      'Historically, face veils (litham) were sometimes worn with the haik',
      'Gradually replaced by the djellaba from the mid-20th century onward',
    ],
  },
  {
    name: 'Burnous / Selham',
    arabic: 'البرنوس / السلهام',
    icon: ShieldCheck,
    worn: 'Men (winter / formal)',
    price: 'From 500 MAD (wool) / From 2,000 MAD (fine weave)',
    description:
      'A heavy, full-length hooded cloak worn over the djellaba during cold months. The burnous is typically white or cream and made from thick handwoven wool. The selham is the more formal version, often in darker colors with fine embroidery. Both are draped over the shoulders and fastened at the neck with a cord or clasp.',
    details: [
      'Essential winter garment in the Atlas Mountains and northern regions',
      'High-quality burnous wool comes from the Middle Atlas Berber weavers',
      'White burnous is the ceremonial choice; brown or dark for daily wear',
      'A well-made burnous can last decades and is often passed down',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: AMAZIGH / BERBER DRESS STYLES
   ═══════════════════════════════════════════════════════════════ */

const amazighStyles = [
  {
    region: 'Rif Mountains (North)',
    garment: 'Mendil & Fouta',
    description:
      'Riffian women wear a distinctive striped fouta (wrapped skirt) with a mendil (headscarf) in bold red and white stripes. The handwoven textiles use geometric patterns unique to each family or tribe.',
    colors: 'Red, white, black stripes',
  },
  {
    region: 'Middle Atlas',
    garment: 'Handira & Taharuyt',
    description:
      'The handira is a heavy woolen cape or blanket decorated with sequins, worn as a bridal cloak. The taharuyt is a black or dark handwoven outer garment. Both feature geometric Amazigh symbols with specific tribal meanings.',
    colors: 'Black, white, cream with silver sequins',
  },
  {
    region: 'High Atlas & Sousse',
    garment: 'Tamelhaft & Izar',
    description:
      'Women in the High Atlas wear the tamelhaft, a large rectangular cloth in black or indigo, wrapped and pinned at the shoulders with decorative fibulas (tizerzai). The izar is a wraparound cloth for daily wear.',
    colors: 'Black, indigo, saffron',
  },
  {
    region: 'Saharan / Southeast',
    garment: 'Melhfa & Tagelmust',
    description:
      'Saharan women wear the melhfa, a lightweight wrap of up to 4 meters of fabric, often in bright colors. Men wear the tagelmust, a long indigo or black cloth wound as a turban and face covering, earning the Tuareg the name "Blue Men."',
    colors: 'Indigo, bright orange, electric blue',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MODERN DESIGNERS
   ═══════════════════════════════════════════════════════════════ */

const modernDesigners = [
  {
    name: 'Zhor Rais',
    specialty: 'Haute couture caftans',
    city: 'Casablanca',
    note: 'Pioneer who brought Moroccan caftans to Paris Fashion Week. Her designs blend traditional tarz embroidery with contemporary silhouettes.',
  },
  {
    name: 'Fadila El Gadi',
    specialty: 'Contemporary djellabas & caftans',
    city: 'Casablanca',
    note: 'Known for reinventing the djellaba with modern cuts, unusual fabrics, and bold color combinations while preserving the traditional form.',
  },
  {
    name: 'Amine Bendriouich',
    specialty: 'Streetwear meets tradition',
    city: 'Casablanca',
    note: 'Founder of a streetwear label that reimagines Moroccan garments for a global youth audience. Djellaba hoodies and graphic babouches.',
  },
  {
    name: 'Artsi Ifrach',
    specialty: 'Art fashion & sustainability',
    city: 'Marrakech',
    note: 'Creates one-of-a-kind pieces from repurposed vintage textiles, Moroccan carpets, and hand-embroidered fabrics. Featured in international exhibitions.',
  },
  {
    name: 'Karim Tassi',
    specialty: 'Luxury caftans & takchitas',
    city: 'Casablanca',
    note: 'Award-winning designer whose elaborate bridal takchitas are sought after throughout Morocco and the Moroccan diaspora in Europe.',
  },
  {
    name: 'Hassan Hajjaj',
    specialty: 'Pop art fashion & photography',
    city: 'Marrakech / London',
    note: 'The "Andy Warhol of Marrakech" fuses Moroccan textiles with pop art aesthetics. His work blurs fashion, art, and cultural commentary.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO BUY
   ═══════════════════════════════════════════════════════════════ */

const shoppingLocations = [
  {
    city: 'Fes',
    icon: Star,
    spots: [
      { name: 'Kissaria in Fes el-Bali', type: 'Traditional souks', specialty: 'Silk caftans, fine embroidery, fez hats' },
      { name: 'Ain Nokbi area', type: 'Tailoring district', specialty: 'Custom djellabas and gandouras' },
      { name: 'Place R\'cif area', type: 'Fabric merchants', specialty: 'Brocade, silk, and embroidery supplies' },
    ],
  },
  {
    city: 'Marrakech',
    icon: MapPin,
    spots: [
      { name: 'Souk Semmarine & Souk el-Kebir', type: 'Main clothing souks', specialty: 'Djellabas, caftans, accessories' },
      { name: 'Mellah (Jewish Quarter)', type: 'Tailoring district', specialty: 'Custom-made garments, alterations' },
      { name: 'Gueliz boutiques', type: 'Modern fashion', specialty: 'Designer caftans and contemporary Moroccan fashion' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Globe,
    spots: [
      { name: 'Habous Quarter (Nouvelle Medina)', type: 'Traditional market', specialty: 'Quality djellabas, babouches, tarbouches' },
      { name: 'Maarif District', type: 'Fashion boutiques', specialty: 'Designer caftans, luxury takchitas' },
      { name: 'Derb Sultan area', type: 'Wholesale fabric', specialty: 'Fabric bolts, embroidery supplies, trims' },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Palette,
    spots: [
      { name: 'Main medina souks', type: 'Artisan shops', specialty: 'Handwoven Riffian textiles, woolen garments' },
      { name: 'Cooperative shops', type: 'Women\'s cooperatives', specialty: 'Authentic handwoven goods at fair prices' },
      { name: 'Uta el-Hammam Square area', type: 'Tourist-friendly shops', specialty: 'Babouches, scarves, woven bags' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CLOTHING ETIQUETTE RULES
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Dress Modestly in Medinas',
    icon: ShieldCheck,
    description:
      'Cover shoulders and knees when walking through medinas and traditional neighborhoods. Loose-fitting clothes are more comfortable and culturally respectful than tight-fitting outfits.',
  },
  {
    rule: 'Beach Towns Are More Relaxed',
    icon: Globe,
    description:
      'Coastal cities like Essaouira, Agadir, and resort areas have a more relaxed dress code. Swimwear is fine on beaches but always cover up when leaving the beach area.',
  },
  {
    rule: 'Remove Shoes When Asked',
    icon: CircleDot,
    description:
      'Always remove shoes before entering mosques (non-Muslims at permitted ones), some riads, and when visiting Moroccan homes. Babouches are designed for easy on-off.',
  },
  {
    rule: 'Respect Religious Dress',
    icon: BookOpen,
    description:
      'Do not wear items with Quranic text or Islamic calligraphy as fashion accessories. Avoid wearing prayer caps (taqiyah) or headscarves as costume pieces. Religious garments carry deep significance.',
  },
  {
    rule: 'Cover Up for Mosques',
    icon: Award,
    description:
      'If visiting a mosque open to non-Muslims (like Hassan II in Casablanca), both men and women should wear long sleeves and trousers or long skirts. Women should bring a headscarf.',
  },
  {
    rule: 'Haggle With Respect',
    icon: DollarSign,
    description:
      'Bargaining is expected in souks but keep it friendly. Start at 40-50% of the asking price. If a tailor quotes a price for custom work, there is less room for negotiation as you are paying for skilled labor.',
  },
  {
    rule: 'Avoid Overly Revealing Clothes',
    icon: AlertTriangle,
    description:
      'Tank tops, very short shorts, and low-cut tops draw unwanted attention outside of resorts. This applies to both men and women. Moroccan men typically do not wear shorts in the medina.',
  },
  {
    rule: 'Wedding Guest Attire',
    icon: Heart,
    description:
      'If invited to a Moroccan wedding, wear your finest outfit. Many guests wear caftans or takchitas. Foreign guests in elegant Western formal wear are equally welcome. Avoid wearing white, which is reserved for the bride.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TAILORING PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const tailoringPrices = [
  { item: 'Simple cotton djellaba', time: '3-5 days', price: 'From 300 MAD' },
  { item: 'Wool djellaba with embroidery', time: '5-7 days', price: 'From 800 MAD' },
  { item: 'Silk or satin caftan', time: '1-2 weeks', price: 'From 2,000 MAD' },
  { item: 'Takchita (two-piece)', time: '2-3 weeks', price: 'From 4,000 MAD' },
  { item: 'Bridal takchita (heavy embroidery)', time: '3-6 weeks', price: 'From 8,000 MAD' },
  { item: 'Gandoura', time: '2-3 days', price: 'From 250 MAD' },
  { item: 'Babouche slippers (custom-fit)', time: '1-2 days', price: 'From 150 MAD' },
  { item: 'Burnous / Selham (fine wool)', time: '1-2 weeks', price: 'From 1,500 MAD' },
  { item: 'Simple alterations', time: '1-2 hours', price: 'From 30 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTraditionalClothingPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[var(--text-primary)] font-medium">Morocco Traditional Clothing Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#3a1c0f] via-[#5c2e14] to-[#2d1a0e] overflow-hidden">
        <div className="absolute inset-0 moroccan-pattern opacity-10" />
        <div className="container-morocco relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-[var(--color-gold)] text-sm font-[family-name:var(--font-heading)] font-semibold tracking-wider uppercase mb-4">
            <Scissors className="w-4 h-4" />
            Cultural Heritage Guide
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Traditional<br />Clothing Guide
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            From the hooded djellaba to the jewel-encrusted takchita, Moroccan clothing carries
            centuries of artisan tradition. A complete guide to garments, tailoring, shopping,
            and dress etiquette for travelers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Shirt className="w-4 h-4 text-[var(--color-gold)]" />
              8 Traditional Garments
            </span>
            <span className="flex items-center gap-1.5">
              <Scissors className="w-4 h-4 text-[var(--color-gold)]" />
              Custom Tailoring Guide
            </span>
            <span className="flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-[var(--color-gold)]" />
              Where to Buy
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--color-gold)]" />
              Updated March 2026
            </span>
          </div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-8 zellige-border">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Clothing as Cultural Identity
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Moroccan clothing tells a story that runs deeper than fashion. Every stitch in a Fassi caftan, every fold
              of a Saharan tagelmust, and every crease in a well-worn pair of babouches reflects the country&apos;s position
              at the crossroads of Arab, Amazigh, Andalusian, and sub-Saharan African cultures. Walk through any medina
              and you see this heritage alive: tailors hunched over sewing machines in narrow ateliers, fabric merchants
              unrolling bolts of brocade, women examining embroidery on a caftan at a neighborhood boutique.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              For travelers, understanding Moroccan clothing opens a gateway to deeper cultural connection. This guide
              covers every major garment in the Moroccan wardrobe, from everyday wear to ceremonial dress, along with
              practical advice on where to buy, how much to pay, and how to dress respectfully as a visitor.
            </p>
          </div>
        </div>
      </section>

      {/* ── Traditional Garments ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Moroccan Garments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eight essential garments that define the Moroccan wardrobe, from daily wear to grand ceremony attire.
          </p>

          <div className="space-y-8">
            {traditionalGarments.map((garment) => {
              const GarmentIcon = garment.icon;
              return (
                <div key={garment.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-[var(--surface-muted)] flex items-center justify-center">
                        <GarmentIcon className="w-7 h-7 text-[var(--color-accent)]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {garment.name}
                        </h3>
                        <span className="text-sm text-[var(--text-muted)] font-[family-name:var(--font-heading)]">
                          {garment.arabic}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {garment.worn}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {garment.price}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {garment.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {garment.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Amazigh / Berber Regional Dress ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh (Berber) Regional Dress
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s indigenous Amazigh communities maintain distinct textile traditions that vary dramatically
            by region. These garments are woven with symbolic geometric patterns passed down through generations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amazighStyles.map((style) => (
              <div key={style.region} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {style.region}
                  </h3>
                </div>
                <p className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--color-accent)] mb-2">
                  {style.garment}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {style.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <Palette className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  <span>Signature colors: {style.colors}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modern Moroccan Fashion Designers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Modern Moroccan Fashion Designers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A new generation of Moroccan designers is reinterpreting traditional garments for global audiences,
            fusing heritage techniques with contemporary design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernDesigners.map((designer) => (
              <div key={designer.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {designer.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <Scissors className="w-3 h-3" />
                    {designer.specialty}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {designer.city}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{designer.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where to Buy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Traditional Clothing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best shopping destinations for traditional Moroccan garments, from bustling medina souks
            to curated designer boutiques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shoppingLocations.map((location) => {
              const CityIcon = location.icon;
              return (
                <div key={location.city} className="card-moroccan overflow-hidden">
                  <div className="bg-gradient-to-r from-[var(--color-accent)] to-[#7a3d20] p-4 flex items-center gap-3">
                    <CityIcon className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                      {location.city}
                    </h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {location.spots.map((spot, i) => (
                      <div key={i} className="border-b border-[var(--border-primary)] last:border-0 pb-3 last:pb-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {spot.name}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] bg-[var(--surface-muted)] px-2 py-0.5 rounded">
                            {spot.type}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{spot.specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 card-moroccan p-6 zellige-border max-w-3xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              Shopping Tips for Travelers
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Bargaining is expected in souks. Start at 40-50% of the asking price and work toward a fair middle ground.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Fixed-price cooperatives and boutiques offer fair prices without negotiation, ideal if you dislike haggling.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Check stitching quality, fabric weight, and embroidery consistency before buying. Turn garments inside out to inspect seams.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                For custom orders, get a written receipt with the agreed price, pickup date, and specifications. Leave a deposit of no more than 50%.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Ask for the garment to be vacuum-packed for your suitcase. Most souk sellers offer this service for free or a small fee.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Custom Tailoring Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ruler className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Custom Tailoring Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Approximate prices for custom-made garments in Morocco. Prices vary by city, fabric quality,
            and complexity of embroidery. Seasonal pricing can change.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="text-left p-4 text-sm font-[family-name:var(--font-heading)] font-bold">Garment</th>
                    <th className="text-left p-4 text-sm font-[family-name:var(--font-heading)] font-bold">Turnaround</th>
                    <th className="text-right p-4 text-sm font-[family-name:var(--font-heading)] font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {tailoringPrices.map((item, i) => (
                    <tr key={i} className={`border-b border-[var(--border-primary)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}>
                      <td className="p-4 text-sm text-[var(--text-primary)] font-medium">{item.item}</td>
                      <td className="p-4 text-sm text-[var(--text-secondary)]">
                        <Clock className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                        {item.time}
                      </td>
                      <td className="p-4 text-sm text-right font-semibold text-[var(--color-accent)]">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-moroccan p-4 text-center">
              <Scissors className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Finding a Tailor</p>
              <p className="text-xs text-[var(--text-secondary)]">Ask your riad host for recommendations. Hotel concierges know reliable tailors accustomed to international visitors.</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Ruler className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Measurements</p>
              <p className="text-xs text-[var(--text-secondary)]">Bring a well-fitting garment as reference. Moroccan tailors prefer a visual reference over written measurements.</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Clock className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Rush Orders</p>
              <p className="text-xs text-[var(--text-secondary)]">Rush service costs 30-50% extra. A simple djellaba can be completed in 24 hours if fabric is available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clothing Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Clothing Etiquette for Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical guidelines on what to wear and cultural norms to respect during your time in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What Travelers Should Wear ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack &amp; Wear in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                Women Travelers
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  Loose-fitting trousers or long skirts for medina walks
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  Tops that cover shoulders; t-shirts with sleeves are fine
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  A lightweight scarf (doubles as sun protection and mosque covering)
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  Comfortable closed-toe shoes for cobblestone medina streets
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  A light jacket or cardigan for air-conditioned restaurants and cool evenings
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                Men Travelers
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  Long trousers or chinos (shorts are uncommon in medinas)
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  Collared shirts or plain t-shirts; tank tops draw stares
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  Sturdy walking shoes with good grip for uneven medina terrain
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  A sun hat or cap for outdoor touring (the sun is intense year-round)
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  A light linen shirt for evenings out at restaurants or riads
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6 md:col-span-2">
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                Context-Specific Guidance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">Desert &amp; Atlas Mountains</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Layers are essential. Temperatures swing from 40+C by day to near freezing at night in the Sahara.
                    Pack a warm fleece and windproof layer. A scarf or cheche (Saharan turban) protects from sand and sun.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">Coastal Cities</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Atlantic coast cities (Essaouira, Agadir) are breezy. A windbreaker is useful year-round.
                    Swimwear is acceptable on the beach but always cover up for the walk to and from.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">Ramadan Period</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    During Ramadan, dress more conservatively than usual as a sign of respect.
                    Avoid eating or drinking visibly in public during daylight fasting hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Color Symbolism ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Color Symbolism in Moroccan Dress
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Colors in Moroccan clothing carry meaning rooted in religion, geography, and social custom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-moroccan p-5 border-l-4 border-l-white">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">White</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Purity and religious devotion. White djellabas are worn for Friday prayers and religious holidays. White caftans are reserved for brides.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-l-green-600">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Green</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Sacred in Islam, representing paradise and the Prophet. Green turbans hold particular reverence. The Moroccan flag features a green pentagram.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-l-blue-700">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Blue / Indigo</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Associated with the Tuareg &quot;Blue Men&quot; whose indigo garments stain the skin. Also linked to Chefchaouen. Indigo was historically precious.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-l-red-700">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Red &amp; Gold</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Celebration and festivity. Red is the national color and dominates wedding attire, especially with gold embroidery. Red babouches are popular for women.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-l-amber-800">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Earth Tones</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Brown, beige, and terracotta reflect the landscape and are typical of rural Amazigh dress. Men&apos;s everyday djellabas frequently come in these tones.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-l-black">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Black</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Less common in traditional dress than in other Arab countries. Modern urban Moroccans wear black as fashion. In Amazigh tradition, black wool appears in the High Atlas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.acceptedAnswer.text}
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
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-shopping-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Master the art of souk shopping with bargaining tips, best buys, and what to avoid.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-leather-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Leather Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From the tanneries of Fes to finished goods: babouches, bags, belts, and more.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-crafts-artisans" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Crafts &amp; Artisans
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the artisan workshops behind Morocco&apos;s handmade textiles, ceramics, and woodwork.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-cultural-etiquette" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Cultural Etiquette
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Customs, greetings, dining manners, and social norms every traveler should understand.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-souk-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Souk Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the best souks and markets across Morocco with insider knowledge and practical tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#3a1c0f] via-[#5c2e14] to-[#2d1a0e] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-6">
            Dress Like a Local, Travel Like an Insider
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Moroccan clothing is more than fabric and thread. Pick up a djellaba, slip on babouches,
            and experience Morocco the way Moroccans do.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morocco-shopping-guide" className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[#8a4525] text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold transition-colors">
              <ShoppingBag className="w-4 h-4" /> Shopping Guide
            </Link>
            <Link href="/morocco-packing-list" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold transition-colors border border-white/20">
              <BookOpen className="w-4 h-4" /> Packing List
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

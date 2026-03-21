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
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-traditional-clothing`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Traditional Clothing Guide 2026 | Djellaba, Caftan, Takchita & More',
  description:
    'Complete guide to Moroccan traditional clothing: djellaba, caftan/kaftan, takchita, jabador, gandora, haik, sarouel pants, babouche slippers, fez hat, turban/headwrap. Where to buy, custom tailoring prices, souk shopping tips, and dress etiquette for visitors.',
  keywords: [
    'Morocco traditional clothing',
    'Moroccan djellaba men women',
    'Moroccan caftan kaftan',
    'takchita bridal dress Morocco',
    'jabador Morocco',
    'gandora gandoura Morocco',
    'haik Morocco',
    'sarouel pants Morocco',
    'babouche slippers Morocco',
    'fez hat tarbouche',
    'Moroccan turban headwrap',
    'Moroccan fashion',
    'buy traditional clothes Morocco',
    'custom tailoring Morocco',
    'souk clothing shopping tips',
    'what to wear Morocco visitors',
    'Morocco dress code travelers',
    'Moroccan wedding attire',
    'Berber Amazigh clothing',
    'Morocco regional clothing styles',
  ],
  openGraph: {
    title: 'Morocco Traditional Clothing Guide 2026 | Djellaba, Caftan, Takchita & More',
    description:
      'From the hooded djellaba to jewel-encrusted takchitas, explore every garment in the Moroccan wardrobe. Custom tailoring prices, souk shopping tips, regional styles, and dress etiquette for travelers.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful traditional Moroccan clothing including caftans, djellabas, and babouche slippers displayed in a medina souk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Traditional Clothing Guide 2026 | Djellaba, Caftan & More',
    description:
      'Djellaba, caftan, takchita, jabador, sarouel pants, babouche slippers, fez hat: everything about Moroccan traditional clothing, tailoring prices, and what visitors should wear.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'What is the traditional clothing of Morocco?',
    a: 'The most recognizable Moroccan garments include the djellaba (a long hooded robe worn daily by men and women), the caftan/kaftan (an ornate dress for formal occasions), the takchita (a two-piece ceremonial ensemble), the jabador (a men\'s tunic-and-trouser set), babouche slippers, the fez hat (tarbouche), sarouel pants, the gandora (a sleeveless summer robe), and the haik (a large draped cloth). Each garment reflects centuries of Arab, Amazigh, Andalusian, and sub-Saharan African cultural influence.',
  },
  {
    q: 'Can tourists wear traditional Moroccan clothing?',
    a: 'Yes. Most Moroccans appreciate when visitors wear a djellaba, babouche slippers, or a caftan purchased locally. It signals cultural respect. Avoid wearing religious garments (prayer caps, turbans with religious significance) as fashion accessories, and do not wear items featuring Quranic calligraphy as decoration.',
  },
  {
    q: 'How much does a custom djellaba cost in Morocco?',
    a: 'A custom-made djellaba costs from 300 MAD for a simple cotton version to from 2,000 MAD for fine wool or silk with intricate embroidery (sfifa and aakad). Ready-made djellabas at the souk start from 150 MAD. Tailoring typically takes 3-7 days depending on the complexity. Seasonal pricing can change.',
  },
  {
    q: 'What is the difference between a caftan and a takchita?',
    a: 'A caftan (kaftan) is a single-piece flowing dress, richly embroidered, worn for formal events. A takchita is a two-piece ensemble consisting of an under-dress (tahtia) and a more elaborate over-dress (dfina) fastened with a decorative belt (mdamma). The takchita is considered more formal and is the standard choice for Moroccan weddings. Brides may change into five to seven different takchitas during the celebration.',
  },
  {
    q: 'Where is the best place to buy traditional Moroccan clothing?',
    a: 'The best places include the kissaria souks of Fes el-Bali for silk caftans and fine embroidery, Souk Semmarine in Marrakech for djellabas and accessories, the Habous Quarter in Casablanca for quality ready-to-wear, and the Mellah (Jewish Quarter) areas for custom tailoring. For designer caftans, visit boutiques in Casablanca\'s Maarif district or Marrakech\'s Gueliz neighborhood.',
  },
  {
    q: 'What should female travelers wear in Morocco?',
    a: 'Cover shoulders and knees in medinas, rural areas, and near mosques. Loose-fitting clothing is comfortable and culturally appropriate. In Casablanca\'s modern neighborhoods and Marrakech\'s Gueliz, dress codes are more relaxed. A lightweight scarf is useful for visiting religious sites and doubles as sun protection. Swimwear is fine on beaches but cover up when leaving the beach area.',
  },
  {
    q: 'How long does custom tailoring take in Morocco?',
    a: 'Simple alterations take 1-2 hours. A custom djellaba requires 3-5 days. A bespoke caftan with embroidery takes 1-3 weeks. Wedding takchitas with heavy handwork need 3-6 weeks. Many medina tailors offer rush services at 30-50% above the standard price. Always get a written receipt with the agreed price and pickup date.',
  },
  {
    q: 'Are babouche slippers comfortable for walking?',
    a: 'Traditional babouches are designed for indoor use and short walks. They soften and mold to your feet after 2-3 days of break-in. For extended walking in the medina, choose babouches with thicker soles or opt for the outdoor version with rubber bottoms. Leather babouches start from 30 MAD for basic styles and from 200 MAD for embroidered versions.',
  },
];

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Traditional Clothing Guide 2026',
  description:
    'Complete guide to Moroccan traditional clothing covering djellaba, caftan, takchita, jabador, gandora, haik, sarouel pants, babouche slippers, fez hat, turban, regional Amazigh styles, custom tailoring, souk shopping tips, and clothing etiquette for travelers.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Traditional Clothing Guide', item: PAGE_URL },
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
   DATA: TRADITIONAL GARMENTS
   ================================================================ */

const traditionalGarments = [
  {
    name: 'Djellaba',
    arabic: 'الجلابة',
    icon: Shirt,
    worn: 'Men & Women (daily)',
    price: 'From 150 MAD (ready-made) / From 300 MAD (custom)',
    description:
      'The quintessential Moroccan garment. A long, loose-fitting robe with full sleeves and a pointed hood (qob). Worn over regular clothing, the djellaba is practical, modest, and suited to Morocco\'s climate. Men\'s djellabas tend toward solid colors (white, beige, brown, gray), while women\'s versions come in every color and pattern.',
    details: [
      'Summer versions in cotton or linen; winter versions in handwoven wool from the Middle Atlas',
      'The pointed hood (qob) serves as sun protection, warmth, and wind shelter',
      'Fastened with sfifa (braided cord closures) and aakad (knot buttons)',
      'White djellabas are the standard choice for Friday mosque prayers',
    ],
  },
  {
    name: 'Caftan / Kaftan',
    arabic: 'القفطان',
    icon: Crown,
    worn: 'Women (formal occasions)',
    price: 'From 800 MAD (ready-made) / From 2,000 MAD (custom)',
    description:
      'A single-piece flowing dress that represents centuries of refined craftsmanship. Worn for weddings, religious holidays, and formal gatherings, the caftan features intricate embroidery, beading, and luxurious fabrics like silk, brocade, or chiffon. UNESCO recognized Moroccan caftan craftsmanship on its intangible heritage list.',
    details: [
      'Typically ankle-length with long or three-quarter sleeves',
      'Embellished with hand-embroidery (tarz), sequins, or crystal beading',
      'Worn with a matching belt (mdamma) to define the waist',
      'Moroccan caftan fashion shows are major cultural events in Marrakech and Casablanca',
    ],
  },
  {
    name: 'Takchita',
    arabic: 'التكشيطة',
    icon: Gem,
    worn: 'Women (weddings & grand ceremonies)',
    price: 'From 1,500 MAD (ready-made) / From 4,000 MAD (custom)',
    description:
      'The most formal garment in a Moroccan woman\'s wardrobe. A two-piece ensemble consisting of an under-dress (tahtia) in a complementary fabric and an over-dress (dfina) that serves as the showpiece. The over-dress is left open at the front and cinched with an elaborate belt (mdamma). Brides often change into multiple takchitas during the wedding celebration.',
    details: [
      'The belt (mdamma) is often gold or silver with precious stones',
      'Brides may wear 5-7 different takchitas at their wedding',
      'Regional styles vary: Fassi (Fes), Marrakchi, Saharan, and modern fusion',
      'A master takchita seamstress (maalma) is one of the most respected artisan roles',
    ],
  },
  {
    name: 'Jabador',
    arabic: 'الجبادور',
    icon: Layers,
    worn: 'Men (semi-formal & festive)',
    price: 'From 400 MAD (ready-made) / From 800 MAD (custom)',
    description:
      'A two-piece men\'s outfit consisting of a tunic top and matching trousers, often made from silk, satin, or fine cotton. The jabador sits between the casual djellaba and the formal suit in Morocco\'s menswear hierarchy. Worn at family gatherings, religious feasts (Eid), and social celebrations, the jabador has seen a revival among younger Moroccan men.',
    details: [
      'The tunic falls to mid-thigh with side slits and front embroidery',
      'Paired with matching slim or straight-leg trousers',
      'Common fabrics: raw silk, linen blends, satin for evening wear',
      'Often accessorized with babouche slippers and a fez hat for a complete traditional look',
    ],
  },
  {
    name: 'Gandora / Gandoura',
    arabic: 'الغندورة',
    icon: Sparkles,
    worn: 'Men & Women (summer / casual)',
    price: 'From 100 MAD (ready-made) / From 250 MAD (custom)',
    description:
      'A simpler, sleeveless or short-sleeved version of the djellaba, without a hood. The gandora is the preferred warm-weather garment across Morocco and North Africa, lighter and more breathable than the full djellaba. The Moroccan version often features subtle embroidery around the neckline and chest.',
    details: [
      'Cooler than the djellaba due to shorter sleeves and no hood',
      'Made from cotton, linen, or lightweight synthetic blends',
      'Popular in southern Morocco, the Saharan regions, and as home wear',
      'Often the garment worn for relaxed social gatherings and neighborhood visits',
    ],
  },
  {
    name: 'Haik',
    arabic: 'الحايك',
    icon: Eye,
    worn: 'Women (traditional / regional)',
    price: 'From 200 MAD (cotton) / From 600 MAD (fine wool)',
    description:
      'A large rectangular piece of fabric (approximately 5 meters long) draped around the entire body. The haik was the predominant outer garment for Moroccan women before the djellaba became widespread. Still worn in some regions, particularly in the northern cities of Tetouan, Tangier, and Chefchaouen, where the white haik remains distinctive.',
    details: [
      'Requires skill to drape and hold in place without pins or fasteners',
      'White haik: northern Morocco; dark haik: southern regions',
      'Historically worn with a face veil (litham) in some communities',
      'Gradually replaced by the djellaba from the mid-20th century onward',
    ],
  },
  {
    name: 'Sarouel Pants',
    arabic: 'السروال',
    icon: Scissors,
    worn: 'Men & Women (daily / traditional)',
    price: 'From 80 MAD (ready-made) / From 200 MAD (custom)',
    description:
      'Wide, loose-fitting trousers with a dropped crotch, gathered at the ankles. Sarouel pants are worn under djellabas and gandoras, but also as standalone bottoms in rural and traditional settings. The design allows unrestricted movement and airflow, well suited to Morocco\'s warm climate. They are a staple in Amazigh communities across the Atlas region.',
    details: [
      'Traditional sarouel uses a drawstring waist with no zipper or buttons',
      'Fabric ranges from cotton and linen to thick wool for winter',
      'Worn by both men and women, often under a djellaba or gandora',
      'Modern versions in lighter fabrics have become popular with international fashion brands',
    ],
  },
  {
    name: 'Babouche Slippers',
    arabic: 'البلغة',
    icon: CircleDot,
    worn: 'Men & Women (daily)',
    price: 'From 30 MAD (basic) / From 200 MAD (embroidered leather)',
    description:
      'Iconic Moroccan leather slippers without a heel counter, allowing easy on-off wear. Made from soft leather and often dyed in bold colors. The traditional yellow babouche is the classic men\'s style, while women\'s babouches come in every color with embroidery, sequins, or beading. Handmade in the tanneries of Fes, Marrakech, and Taroudant.',
    details: [
      'Men\'s traditional color: yellow (white for religious occasions)',
      'Need a break-in period of 2-3 days to mold to your feet',
      'Outdoor versions have a rubber sole; indoor ones are all leather',
      'A quality pair of leather babouches lasts several years with care',
    ],
  },
  {
    name: 'Fez Hat (Tarbouche)',
    arabic: 'الطربوش',
    icon: Award,
    worn: 'Men (formal & ceremonial)',
    price: 'From 50 MAD (basic) / From 300 MAD (premium felt)',
    description:
      'A flat-topped cylindrical hat made of red felt, named after the city of Fes where it originated. The tarbouche was standard formal headwear for Moroccan men from the 17th century through the mid-20th century. While less common in daily wear today, it remains an important part of ceremonial dress, worn by royal guards, musicians, and at cultural events.',
    details: [
      'Made from pressed felt, traditionally dyed with crimson berry extract',
      'Topped with a silk tassel (shosha) in black or dark blue',
      'The Fes medina still has active tarbouche workshops open to visitors',
      'Worn at an angle for the traditional look; flat for a modern style',
    ],
  },
  {
    name: 'Turban / Headwrap',
    arabic: 'العمامة / الشاش',
    icon: Globe,
    worn: 'Men (daily in south / ceremonial)',
    price: 'From 40 MAD (cotton cheche) / From 200 MAD (fine muslin)',
    description:
      'Turbans and headwraps carry deep cultural significance across Morocco\'s regions. The cheche is a long cloth (3-5 meters) wound around the head, essential in the Saharan south for sand and sun protection. The tagelmust is the Tuareg indigo turban that also covers the face. In northern and urban Morocco, white or green turbans signify religious learning or Sufi affiliation.',
    details: [
      'The cheche (Saharan scarf) comes in cotton, muslin, or gauze and protects against sandstorms',
      'Tuareg tagelmust dyed with indigo stains the skin, earning the name "Blue Men"',
      'Green turbans are associated with descendants of the Prophet (Sharifs)',
      'Increasingly worn by travelers on Sahara desert tours as practical sun and sand protection',
    ],
  },
];

/* ================================================================
   DATA: AMAZIGH / BERBER REGIONAL DRESS
   ================================================================ */

const amazighStyles = [
  {
    region: 'Rif Mountains (North)',
    garment: 'Mendil & Fouta',
    description:
      'Riffian women wear a distinctive striped fouta (wrapped skirt) with a mendil (headscarf) in bold red and white stripes. The handwoven textiles use geometric patterns unique to each family or tribal group.',
    colors: 'Red, white, black stripes',
  },
  {
    region: 'Middle Atlas',
    garment: 'Handira & Taharuyt',
    description:
      'The handira is a heavy woolen cape decorated with sequins, worn as a bridal cloak during wedding ceremonies. The taharuyt is a black or dark handwoven outer garment. Both feature geometric Amazigh symbols with specific tribal meanings.',
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
      'Saharan women wear the melhfa, a lightweight wrap of up to 4 meters of fabric in bright colors. Men wear the tagelmust, a long indigo or black cloth wound as a turban and face covering, a tradition of the Tuareg people.',
    colors: 'Indigo, bright orange, electric blue',
  },
];

/* ================================================================
   DATA: WHERE TO BUY
   ================================================================ */

const shoppingLocations = [
  {
    city: 'Fes',
    icon: Star,
    spots: [
      { name: 'Kissaria in Fes el-Bali', type: 'Traditional souks', specialty: 'Silk caftans, fine embroidery, fez hats, brocade fabrics' },
      { name: 'Ain Nokbi area', type: 'Tailoring district', specialty: 'Custom djellabas, gandouras, and jabadors' },
      { name: 'Place R\'cif area', type: 'Fabric merchants', specialty: 'Brocade, silk bolts, embroidery supplies, and trims' },
    ],
  },
  {
    city: 'Marrakech',
    icon: MapPin,
    spots: [
      { name: 'Souk Semmarine & Souk el-Kebir', type: 'Main clothing souks', specialty: 'Djellabas, caftans, babouches, sarouel pants' },
      { name: 'Mellah (Jewish Quarter)', type: 'Tailoring district', specialty: 'Custom-made garments, expert alterations' },
      { name: 'Gueliz boutiques', type: 'Modern fashion', specialty: 'Designer caftans and contemporary Moroccan fashion' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Globe,
    spots: [
      { name: 'Habous Quarter (Nouvelle Medina)', type: 'Traditional market', specialty: 'Quality djellabas, babouches, tarbouches, jabadors' },
      { name: 'Maarif District', type: 'Fashion boutiques', specialty: 'Designer caftans, luxury takchitas, haute couture' },
      { name: 'Derb Sultan area', type: 'Wholesale fabric', specialty: 'Fabric bolts, embroidery supplies, passementerie trims' },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Palette,
    spots: [
      { name: 'Main medina souks', type: 'Artisan shops', specialty: 'Handwoven Riffian textiles, woolen garments, haik fabrics' },
      { name: 'Women\'s cooperatives', type: 'Fair-trade shops', specialty: 'Authentic handwoven goods at transparent prices' },
      { name: 'Uta el-Hammam Square area', type: 'Tourist-friendly shops', specialty: 'Babouches, scarves, cheche headwraps, woven bags' },
    ],
  },
];

/* ================================================================
   DATA: TAILORING PRICE GUIDE
   ================================================================ */

const tailoringPrices = [
  { item: 'Simple cotton djellaba', time: '3-5 days', price: 'From 300 MAD' },
  { item: 'Wool djellaba with embroidery', time: '5-7 days', price: 'From 800 MAD' },
  { item: 'Jabador (tunic + trousers)', time: '3-5 days', price: 'From 800 MAD' },
  { item: 'Silk or satin caftan', time: '1-2 weeks', price: 'From 2,000 MAD' },
  { item: 'Takchita (two-piece)', time: '2-3 weeks', price: 'From 4,000 MAD' },
  { item: 'Bridal takchita (heavy embroidery)', time: '3-6 weeks', price: 'From 8,000 MAD' },
  { item: 'Gandora', time: '2-3 days', price: 'From 250 MAD' },
  { item: 'Sarouel pants (custom-fit)', time: '1-2 days', price: 'From 200 MAD' },
  { item: 'Babouche slippers (custom-fit)', time: '1-2 days', price: 'From 150 MAD' },
  { item: 'Burnous / Selham (fine wool)', time: '1-2 weeks', price: 'From 1,500 MAD' },
  { item: 'Simple alterations', time: '1-2 hours', price: 'From 30 MAD' },
];

/* ================================================================
   DATA: CLOTHING ETIQUETTE
   ================================================================ */

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
      'Coastal cities like Essaouira, Agadir, and resort areas have a relaxed dress code. Swimwear is fine on beaches but always cover up when leaving the beach area.',
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
      'Do not wear items with Quranic text or Islamic calligraphy as fashion accessories. Avoid wearing prayer caps or religious headwear as costume pieces.',
  },
  {
    rule: 'Cover Up for Mosques',
    icon: Award,
    description:
      'If visiting a mosque open to non-Muslims (like Hassan II in Casablanca), both men and women should wear long sleeves and long trousers or skirts. Women should bring a headscarf.',
  },
  {
    rule: 'Haggle With Respect',
    icon: DollarSign,
    description:
      'Bargaining is standard in souks. Start at 40-50% of the asking price. For custom tailoring, there is less room for negotiation since you are paying for skilled labor and materials.',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoTraditionalClothingPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

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
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-[var(--color-gold)] text-sm font-[family-name:var(--font-heading)] font-semibold tracking-wider uppercase mb-4">
            <Scissors className="w-4 h-4" />
            Cultural Heritage Guide
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Traditional<br />Clothing Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            From the hooded djellaba to the jewel-encrusted takchita, Moroccan clothing carries
            centuries of artisan tradition. A garment-by-garment guide covering tailoring, shopping,
            regional styles, and dress etiquette for visitors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Shirt className="w-4 h-4 text-[var(--color-gold)]" />
              10 Traditional Garments
            </span>
            <span className="flex items-center gap-1.5">
              <Scissors className="w-4 h-4 text-[var(--color-gold)]" />
              Custom Tailoring Guide
            </span>
            <span className="flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-[var(--color-gold)]" />
              Souk Shopping Tips
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
              and this heritage is alive: tailors working at sewing machines in narrow ateliers, fabric merchants
              unrolling bolts of brocade, women examining embroidery on a caftan at a neighborhood boutique.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              For travelers, understanding Moroccan clothing opens a gateway to deeper cultural connection. This guide
              covers every major garment in the Moroccan wardrobe, from everyday wear to ceremonial dress, along with
              practical advice on where to buy, how much to pay, how to commission custom work, and how to dress
              respectfully as a visitor.
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
            Ten garments that define the Moroccan wardrobe, from daily wear to grand ceremony attire.
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
            Amazigh (Berber) Regional Styles
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

      {/* ── Where to Buy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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

          {/* ── Souk Shopping Tips ── */}
          <div className="mt-10 card-moroccan p-6 zellige-border max-w-3xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              Souk Shopping Tips
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Bargaining is expected in souks. Start at 40-50% of the asking price and work toward a fair middle ground. Walk away if the price does not feel right; the seller will often call you back.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Fixed-price cooperatives and boutiques offer fair prices without negotiation, a good option if you prefer transparent transactions.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Check stitching quality, fabric weight, and embroidery consistency before buying. Turn garments inside out to inspect seams and finishing.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                For custom orders, get a written receipt with the agreed price, pickup date, and specifications. Leave a deposit of no more than 50%.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Ask for the garment to be vacuum-packed for your suitcase. Most souk sellers offer this service for free or a small fee.
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                Real silk has a slightly rough texture and distinctive sheen. Rub fabric between your fingers: synthetic feels slippery, silk feels textured. Ask to burn a thread: silk smells like burned hair, synthetic melts.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Buying Quality Pieces ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying Quality Pieces
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to distinguish high-quality garments from mass-produced tourist goods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                Fabric Quality
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Hold fabric up to the light. Quality cotton and wool have a consistent weave without thin patches. Handwoven
                fabrics from the Middle Atlas have subtle irregularities that are a sign of authenticity, not defects.
                Machine-made fabrics are perfectly uniform but lack character.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                Embroidery Inspection
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Hand-embroidered garments (tarz) show slight variations in stitch length and tension. Turn the garment over:
                hand embroidery has a neat reverse side with visible thread paths. Machine embroidery is identical front and
                back. Hand-embroidered caftans take weeks to complete, and the price reflects this labor.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                Leather Goods (Babouches)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Quality babouches use vegetable-tanned leather that smells earthy, not chemical. Press your thumbnail into
                the sole: real leather springs back, synthetic stays dented. The best babouches come from Fes and Taroudant
                tanneries where leather is still processed with traditional methods.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                Passementerie (Sfifa &amp; Aakad)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The braided cord closures (sfifa) and hand-knotted buttons (aakad) on djellabas and caftans are a
                hallmark of quality. Hand-made sfifa has a tight, even braid with a subtle sheen. Machine-made versions
                are flat and lack dimension. A skilled passementerie artisan can produce only a few meters per day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Custom Tailoring Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ruler className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Custom Tailoring &amp; Orders
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
              <p className="text-xs text-[var(--text-secondary)]">Ask your riad host for recommendations. Hotel concierges know reliable tailors accustomed to international visitors and their sizing expectations.</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Ruler className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Measurements</p>
              <p className="text-xs text-[var(--text-secondary)]">Bring a well-fitting garment as reference. Moroccan tailors prefer a visual reference over written measurements. A fitting session takes 15-30 minutes.</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Clock className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Rush Orders</p>
              <p className="text-xs text-[var(--text-secondary)]">Rush service costs 30-50% extra. A simple djellaba can be completed in 24 hours if fabric is in stock. Schedule your first fitting on day one of your stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clothing Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Appropriate Dress for Visitors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical guidelines on what to wear and cultural norms to respect during your time in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── What to Pack & Wear ── */}
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
                  A lightweight scarf for sun protection and mosque visits
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
                  A sun hat or cap for outdoor touring
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  A light linen shirt for evenings at restaurants or riads
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
                    Layers are essential. Temperatures swing from 40+ C by day to near freezing at night in the Sahara.
                    Pack a warm fleece and windproof layer. A cheche (Saharan turban) protects from sand and sun.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">Coastal Cities</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Atlantic coast cities (Essaouira, Agadir) are breezy. A windbreaker is useful year-round.
                    Swimwear is acceptable on the beach but always cover up for the walk to and from the waterfront.
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
                Purity and religious devotion. White djellabas are worn for Friday prayers and religious holidays. White caftans are reserved for brides during certain wedding ceremonies.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-l-green-600">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Green</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Sacred in Islam, representing paradise and the Prophet. Green turbans hold particular reverence and are associated with Sharifs (descendants of the Prophet).
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-l-blue-700">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Blue / Indigo</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Associated with the Tuareg &quot;Blue Men&quot; whose indigo garments stain the skin. Also linked to Chefchaouen. Indigo dye was historically a precious commodity.
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
                Brown, beige, and terracotta reflect the Moroccan landscape and are typical of rural Amazigh dress. Men&apos;s everyday djellabas frequently come in these tones.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-l-black">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Black</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Less common in traditional dress than in other regions. Modern urban Moroccans wear black as fashion. In Amazigh tradition, black wool appears in High Atlas garments.
              </p>
            </div>
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
            Answers to the most common questions about Moroccan traditional clothing and dress etiquette.
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
                title: 'Morocco Shopping Guide',
                description: 'Master the art of souk shopping with bargaining tips, best buys, and what to avoid.',
                href: '/morocco-shopping-guide',
                icon: ShoppingBag,
              },
              {
                title: 'Morocco Leather Guide',
                description: 'From the tanneries of Fes to finished goods: babouches, bags, belts, and jackets.',
                href: '/morocco-leather-guide',
                icon: Gem,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress code, tipping customs, greetings, and social norms for respectful travel.',
                href: '/etiquette',
                icon: ShieldCheck,
              },
              {
                title: 'Morocco Crafts & Artisans',
                description: 'Explore the artisan workshops behind handmade textiles, ceramics, and woodwork.',
                href: '/morocco-crafts-artisans',
                icon: Sparkles,
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

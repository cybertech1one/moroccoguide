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
  Gem,
  Award,
  BookOpen,
  Eye,
  ShoppingBag,
  Ruler,
  Globe,
  AlertTriangle,
  PackageCheck,
  Truck,
  Scissors,
  Users,
  Paintbrush,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Buying a Moroccan Carpet 2026 | Berber Rug Guide, Prices & Where to Shop',
  description:
    'Complete guide to buying Moroccan carpets and Berber rugs. Learn about Beni Ourain, Azilal, Boucherouite, Kilim, Rabati, Chichaoua, and Taznakht carpets. Real prices, quality tips, best souks, shipping, haggling advice, and how to avoid scams.',
  keywords: [
    'moroccan carpet',
    'buying carpet morocco',
    'berber rug',
    'moroccan rug guide',
    'beni ourain rug',
    'azilal carpet',
    'boucherouite rug',
    'moroccan kilim',
    'rabati carpet',
    'chichaoua carpet',
    'taznakht rug',
    'moroccan carpet prices',
    'marrakech carpet souk',
    'fez carpet market',
    'moroccan carpet scams',
    'haggling carpets morocco',
    'shipping carpet from morocco',
    'berber rug cooperative',
    'women weavers morocco',
    'moroccan carpet quality',
    'natural dye carpet morocco',
    'handmade rug morocco',
  ],
  openGraph: {
    title: 'Buying a Moroccan Carpet 2026 | Berber Rug Guide, Prices & Where to Shop',
    description:
      'Everything you need to know about buying authentic Moroccan carpets. Carpet types, real prices, quality identification, best souks, cooperatives, shipping, and scam avoidance.',
    url: `${BASE_URL}/morocco-carpet-buying`,
    images: [
      {
        url: `${BASE_URL}/images/art-berber-carpet-weaving.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful handwoven Moroccan Berber carpets displayed in a traditional souk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buying a Moroccan Carpet 2026 | Berber Rug Guide & Prices',
    description:
      'Complete guide to Moroccan carpets: Beni Ourain, Azilal, Boucherouite, Kilim, and more. Real prices, quality tips, best souks, and how to ship your rug home.',
    images: [`${BASE_URL}/images/art-berber-carpet-weaving.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-carpet-buying` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-carpet-buying`,
  name: 'Buying a Moroccan Carpet 2026 | Berber Rug Guide, Prices & Where to Shop',
  description:
    'Complete guide to buying Moroccan carpets and Berber rugs. Carpet types, prices, quality identification, best souks, cooperatives, shipping, haggling, and scam avoidance.',
  url: `${BASE_URL}/morocco-carpet-buying`,
  image: `${BASE_URL}/images/art-berber-carpet-weaving.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-carpet-buying`,
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
      { '@type': 'ListItem', position: 2, name: 'Buying a Moroccan Carpet', item: `${BASE_URL}/morocco-carpet-buying` },
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
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices vary widely by type and size. Small Boucherouite rugs start from 300 MAD, while a large hand-knotted Beni Ourain carpet (2x3m) can cost from 5,000 to 15,000 MAD at cooperatives. In tourist souks, the same rug may be priced at 20,000-40,000 MAD before haggling. Kilims are generally less expensive (from 400 MAD) since they are flat-woven rather than knotted.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if a Moroccan carpet is authentic and handmade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check the back of the carpet: handmade rugs show slight irregularities in the knots, while machine-made carpets have perfectly uniform rows. Pull the pile apart to examine the knot base -- hand-knotted rugs have individual knots visible. The fringe on a handmade carpet is an extension of the warp threads, not sewn on. Natural wool has a lanolin scent, especially when slightly damp. Real vegetable dyes show subtle color variations, while synthetic dyes are perfectly uniform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best type of Moroccan carpet to buy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your taste and budget. Beni Ourain rugs with their minimalist black-on-cream geometric patterns suit modern interiors and are the most sought-after internationally. Azilal carpets are vibrant and abstract, popular with collectors. Boucherouite rugs made from recycled textiles are colorful and affordable. Kilims are lightweight and easy to transport. Rabati carpets suit formal spaces with their intricate medallion designs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to buy carpets in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For fair prices and guaranteed authenticity, buy directly from women weaver cooperatives in the Atlas Mountains or carpet-producing towns like Tazenakht and Azrou. In cities, Marrakech has the widest selection (Souk des Tapis in the medina, Ensemble Artisanal for fixed prices). Fez has excellent Rabati and city-style carpets. Ouarzazate cooperatives are good for Taznakht and tribal rugs. Avoid any shop where a guide or taxi driver brings you, as commissions inflate prices by 30-50%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I ship a carpet home from Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most reputable carpet shops offer shipping via DHL, FedEx, or La Poste Maroc. Expect to pay from 400-1,200 MAD for shipping depending on carpet size and destination. Sea freight is cheaper for large orders (from 2,000 MAD for a crate). Always get a receipt with the shop name, carpet description, and price paid. You will need this for customs. Some EU and US customs may charge import duty on carpets valued over certain thresholds. Carry small rugs in your checked luggage to avoid shipping costs entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I haggle for a carpet in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by visiting cooperatives or the Ensemble Artisanal to learn fixed prices as a baseline. In souks, the first asking price is typically three to five times the actual selling price. Begin your offer at about 30-40% of the asking price and work toward a middle ground. Never show too much enthusiasm for a specific carpet. Be prepared to walk away -- this is the most powerful negotiating tool. Tea is offered as part of the shopping ritual; accepting it does not obligate you to buy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common carpet scams in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common scams include machine-made carpets sold as handmade, synthetic dyes marketed as natural vegetable dyes, new carpets artificially aged with chemicals or sun exposure to appear antique, and blend wool mixed with cotton or synthetic fiber presented as pure wool. Some shops use the bait-and-switch technique: showing a high-quality sample, then rolling up a lower-quality carpet for you to take. Always inspect the carpet you will actually take home. Commission-based guides steer tourists to specific shops where prices are inflated 30-50%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I care for a Moroccan wool carpet at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vacuum regularly on a low setting without the beater bar. Rotate your carpet every six months for even wear. For spills, blot immediately with a clean cloth and cold water -- never rub. Professional cleaning is recommended every two to three years. For deep cleaning at home, use a mix of cold water and mild wool detergent, then air dry flat in the shade. Avoid direct sunlight which fades natural dyes. Moth prevention is important: cedar blocks or lavender sachets placed under the carpet help. New wool carpets may shed for the first few months; this is normal.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: CARPET TYPES
   ═══════════════════════════════════════════════════════════════ */

const carpetTypes = [
  {
    name: 'Beni Ourain',
    region: 'Middle Atlas (Azrou, Ifrane, Boulemane)',
    icon: Star,
    description:
      'The most internationally recognized Moroccan carpet. Woven by the Beni Ourain tribe of the Middle Atlas, these thick, plush pile rugs feature cream or ivory undyed wool with geometric black or dark brown diamond and lozenge patterns. Traditionally used as sleeping mats and blankets in cold mountain homes. The minimalist aesthetic has made them favorites of interior designers worldwide since Le Corbusier and Alvar Aalto placed them in modernist spaces.',
    material: 'Pure sheep wool, natural undyed (cream) with henna or walnut-dyed motifs',
    knotDensity: '20,000-40,000 knots per square meter',
    priceSmall: 'From 2,000 MAD (1x1.5m)',
    priceLarge: 'From 5,000 MAD (2x3m)',
    timeToWeave: '2-4 months for a large rug',
  },
  {
    name: 'Azilal',
    region: 'Central High Atlas (Azilal Province)',
    icon: Sparkles,
    description:
      'Burst-of-color carpets from the Azilal Province in the central High Atlas. Unlike the restrained Beni Ourain palette, Azilal carpets are explosions of pink, orange, yellow, and blue on a white or cream base. Designs range from geometric abstractions to figurative symbols: people, animals, Tifinagh letters, and fertility motifs. Each rug is a personal statement by its weaver, making no two Azilal carpets alike. Highly sought by collectors and contemporary art enthusiasts.',
    material: 'Wool pile on wool or cotton foundation, vegetable and synthetic dyes',
    knotDensity: '15,000-30,000 knots per square meter',
    priceSmall: 'From 1,500 MAD (1x1.5m)',
    priceLarge: 'From 4,000 MAD (2x3m)',
    timeToWeave: '1-3 months',
  },
  {
    name: 'Boucherouite',
    region: 'Throughout Morocco (urban and rural)',
    icon: Heart,
    description:
      'The ultimate recycled textile. Boucherouite (from "bu sherwit," meaning a piece of old clothing) carpets are woven from scraps of cotton, nylon, jersey, and other fabric remnants. Born from necessity in communities where wool was scarce or expensive, they became an art form in their own right. Wildly colorful and abstract, Boucherouite rugs have found a following in contemporary design circles. Each one is truly unique, and they are often the most affordable entry point into Moroccan carpets.',
    material: 'Recycled textiles: cotton, jersey, nylon, synthetic fabrics',
    knotDensity: 'N/A (rag-woven, not knotted)',
    priceSmall: 'From 300 MAD (1x1.5m)',
    priceLarge: 'From 1,200 MAD (2x3m)',
    timeToWeave: '2-6 weeks',
  },
  {
    name: 'Kilim (Hanbel)',
    region: 'Throughout Morocco (Atlas, Rif, Sahara)',
    icon: Ruler,
    description:
      'Flat-woven tapestries without a pile, kilims are lighter and thinner than knotted carpets. Moroccan kilims, locally called hanbel, feature bold geometric patterns in reds, blacks, oranges, and natural tones. They serve as floor coverings, wall hangings, saddlebags, and grain sacks. The Glaoua kilims from the Ouarzazate region are particularly prized, as are striped kilims from the Haouz plain around Marrakech. Easily rolled and transported, they are practical souvenirs.',
    material: 'Wool or wool-cotton blend, flat-woven (no pile)',
    knotDensity: 'N/A (flat-weave tapestry technique)',
    priceSmall: 'From 400 MAD (1x1.5m)',
    priceLarge: 'From 1,500 MAD (2x3m)',
    timeToWeave: '1-4 weeks',
  },
  {
    name: 'Rabati',
    region: 'Rabat, Sale, Mediouna',
    icon: Award,
    description:
      'The most refined of Moroccan carpets, influenced by Ottoman and Persian traditions brought to Morocco in the 17th century. Rabati carpets feature a central medallion on a solid-colored field (typically deep red, burgundy, or navy), surrounded by intricate floral and arabesque borders. The pile is short and dense, the weave tight and precise. These are the formal carpets of Morocco, found in royal palaces and upscale homes. The craft was revived under Sultan Moulay Hassan I and continues in workshops in Rabat and Sale.',
    material: 'High-grade wool, tight knotting, often with cotton foundation',
    knotDensity: '50,000-160,000 knots per square meter',
    priceSmall: 'From 3,000 MAD (1x1.5m)',
    priceLarge: 'From 8,000 MAD (2x3m)',
    timeToWeave: '3-8 months',
  },
  {
    name: 'Chichaoua',
    region: 'Chichaoua Province (between Marrakech and Essaouira)',
    icon: Gem,
    description:
      'Named after the town midway between Marrakech and Essaouira, Chichaoua carpets are bold, graphic, and deeply tribal. Typically featuring an orange or saffron-yellow background with geometric motifs in black, red, and brown, they have a rougher, more rustic texture than Beni Ourain or Azilal rugs. Patterns encode protective symbols and clan identity. Less commercially known than other types, Chichaoua carpets offer excellent value and strong visual impact.',
    material: 'Coarse wool, natural and synthetic dyes',
    knotDensity: '10,000-25,000 knots per square meter',
    priceSmall: 'From 1,000 MAD (1x1.5m)',
    priceLarge: 'From 3,000 MAD (2x3m)',
    timeToWeave: '1-3 months',
  },
  {
    name: 'Taznakht',
    region: 'Ouarzazate Province (Tazenakht, Sirwa region)',
    icon: Paintbrush,
    description:
      'From the town of Tazenakht at the foot of Jebel Sirwa, between the High Atlas and Anti-Atlas. Taznakht carpets are known for their rich purples, deep reds, and saffron yellows derived from local plants including henna, saffron, pomegranate, and indigo. Designs are geometric and tribal, often featuring diamond lattices, zigzags, and protective eye motifs. Tazenakht is considered the carpet capital of southern Morocco, with dozens of women weaver cooperatives.',
    material: 'Wool with natural vegetable dyes (henna, saffron, pomegranate, indigo)',
    knotDensity: '15,000-35,000 knots per square meter',
    priceSmall: 'From 1,200 MAD (1x1.5m)',
    priceLarge: 'From 3,500 MAD (2x3m)',
    timeToWeave: '2-4 months',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: QUALITY INDICATORS
   ═══════════════════════════════════════════════════════════════ */

const qualityChecks = [
  {
    check: 'Knot Density',
    icon: Eye,
    how: 'Fold the carpet back on itself and count knots per centimeter along both warp and weft. Multiply to get knots per square centimeter. Higher density means finer detail and greater durability. Rabati carpets have the highest density (50,000-160,000 per m2), while tribal rugs are coarser (10,000-40,000 per m2).',
    tip: 'A magnifying glass or your phone camera zoom makes counting easier.',
  },
  {
    check: 'Wool Quality',
    icon: Gem,
    how: 'Pinch the pile and pull gently. Quality wool springs back; poor wool stays flat or sheds excessively. Mountain sheep wool from the Middle and High Atlas is denser and more lustrous than lowland wool. The best carpets use hand-spun wool, which has a slight irregularity in thickness that machine-spun wool lacks.',
    tip: 'Lightly dampen a small area: natural wool smells faintly of lanolin; synthetic fiber has no scent.',
  },
  {
    check: 'Natural vs. Synthetic Dyes',
    icon: Sparkles,
    how: 'Natural vegetable dyes produce subtle, complex tones that vary slightly across the carpet (called abrash). Synthetic dyes are perfectly uniform. Rub a damp white cloth on an inconspicuous area: vegetable dyes leave little to no residue, while cheap synthetic dyes may bleed. Common natural dyes include henna (orange-red), pomegranate rind (yellow), indigo (blue), and saffron (yellow-gold).',
    tip: 'Ask the seller to name specific dye sources. Genuine artisans know their plants.',
  },
  {
    check: 'Foundation and Construction',
    icon: Ruler,
    how: 'Flip the carpet over. On a hand-knotted rug, individual knots are visible on the back and the pattern mirrors the front. Machine-made carpets have perfectly uniform loops. The fringe (end tassels) should be a natural extension of the warp threads, not sewn on separately. Tug a fringe strand: if it slides out, it was glued or stitched on.',
    tip: 'Handmade carpets are never perfectly symmetrical. Slight irregularities are a mark of authenticity.',
  },
  {
    check: 'Age and Condition',
    icon: Clock,
    how: 'Genuinely old carpets have softened pile, faded colors (especially on the surface vs. the knot base), and wear patterns consistent with use. Artificially aged carpets are treated with bleach, chemicals, or prolonged sun exposure, which weakens the fibers. Check for brittle or crumbly foundation threads, which indicate chemical damage rather than natural aging.',
    tip: 'Part the pile to compare the color at the knot base with the tip. Natural fading shows a gradient; chemical fading is uniform.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO BUY
   ═══════════════════════════════════════════════════════════════ */

const whereToBuy = [
  {
    city: 'Marrakech',
    icon: MapPin,
    spots: [
      { name: 'Souk des Tapis (Rahba Kedima area)', type: 'Traditional souk', note: 'The largest carpet market in Morocco. Dozens of shops in the medina near Rahba Kedima square. Wide selection of all types. Prices start high; haggling expected.' },
      { name: 'Ensemble Artisanal', type: 'Government-run fixed-price', note: 'On Avenue Mohammed V near the Koutoubia. Fixed prices set by the artisan ministry. No haggling, but prices are fair and quality is verified. Good for establishing baseline prices.' },
      { name: 'Cooperative Artisanale Femmes de Marrakech', type: 'Women cooperative', note: 'Near Bab Ghmat. Women weavers sell directly. Fair trade practices and prices go directly to artisans.' },
      { name: 'Criee Berbere (Carpet Auction)', type: 'Auction', note: 'Held most afternoons in the medina near Souk des Tapis. Dealers bid on carpets brought in from rural areas. Visitors can watch; buying requires confidence in quality assessment.' },
    ],
  },
  {
    city: 'Fez',
    icon: MapPin,
    spots: [
      { name: 'Souk Nejjarine area', type: 'Traditional souk', note: 'Fez is known for fine Rabati-style and city carpets. Shops near the Nejjarine fountain and woodworking museum carry high-quality knotted rugs. Less tourist pressure than Marrakech.' },
      { name: 'Place Seffarine carpet merchants', type: 'Specialist dealers', note: 'Several reputable dealers near the coppersmith square sell both new and antique carpets. Known for honest dealing among locals.' },
      { name: 'Centre Artisanal Fes', type: 'Government-run fixed-price', note: 'Boulevard Allal El Fassi. Fixed prices, curated selection, reliable quality. Less variety than the souk but zero pressure.' },
    ],
  },
  {
    city: 'Ouarzazate & Tazenakht',
    icon: MapPin,
    spots: [
      { name: 'Tazenakht Women Cooperatives', type: 'Producer cooperatives', note: 'Tazenakht, about 100km south of Ouarzazate on the road to Tata, is the carpet capital of southern Morocco. Multiple women cooperatives sell directly at weaver prices. The best value in Morocco for Taznakht and tribal carpets.' },
      { name: 'Cooperative Feminine de Tissage (Ouarzazate)', type: 'Women cooperative', note: 'Near the main road in Ouarzazate. Small cooperative with on-site looms. Watch weavers at work and buy finished pieces.' },
      { name: 'Kasbah Taourirt carpet shops', type: 'Tourist-oriented', note: 'Several shops near the kasbah sell Taznakht and Saharan carpets. Prices higher than cooperatives but selection is curated.' },
    ],
  },
  {
    city: 'Atlas Mountain Villages',
    icon: MapPin,
    spots: [
      { name: 'Ait Bougmez Valley cooperatives', type: 'Village cooperatives', note: 'The "Happy Valley" has several women weaving cooperatives selling directly. Authentic Berber carpets at village prices. Accessible by road from Azilal.' },
      { name: 'Azrou (Middle Atlas)', type: 'Producer town', note: 'Center of Beni Ourain carpet production. The Tuesday souk and local cooperatives offer authentic pieces at lower prices than city shops.' },
      { name: 'Chefchaouen cooperatives', type: 'Village cooperatives', note: 'Small cooperatives in and around Chefchaouen sell Riffian-style carpets and kilims with distinctive Rif Mountain patterns.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON SCAMS
   ═══════════════════════════════════════════════════════════════ */

const commonScams = [
  {
    scam: 'Machine-Made Sold as Handmade',
    icon: AlertTriangle,
    how: 'Factories in China, Turkey, and India produce machine-made copies of Moroccan carpet designs. Some dealers import these and sell them as handmade.',
    avoid: 'Check the back: hand-knotted rugs show irregular knots; machine-made carpets have perfectly uniform loops. The fringe on handmade carpets is part of the warp, not sewn on.',
  },
  {
    scam: 'Synthetic Dyes Marketed as Natural',
    icon: AlertTriangle,
    how: 'Natural vegetable dyes are expensive and time-consuming. Some sellers claim synthetic-dyed carpets use natural dyes to justify higher prices.',
    avoid: 'Look for subtle color variation (abrash) across the carpet. Natural dyes create gentle shifts; synthetic dyes are perfectly even. Rub a damp white cloth on the carpet: cheap synthetics bleed.',
  },
  {
    scam: 'Fake Antiques',
    icon: AlertTriangle,
    how: 'New carpets are bleached, left in the sun, or treated with chemicals to simulate age. They are sold as "vintage" or "antique" at inflated prices.',
    avoid: 'Part the pile and compare colors at the base vs. the tip. Natural aging creates a gradient. Chemically aged carpets feel brittle and may have a chemical smell. Check for weak foundation threads.',
  },
  {
    scam: 'Bait and Switch',
    icon: AlertTriangle,
    how: 'You select a high-quality carpet, negotiate a price, then a different (lower quality) carpet is rolled up and packaged for you.',
    avoid: 'Always watch the carpet being rolled and packaged. Mark it with a discreet piece of tape or take a photo of a specific section before it is wrapped.',
  },
  {
    scam: 'Guide Commission Inflation',
    icon: AlertTriangle,
    how: 'Guides, taxi drivers, and hotel staff earn 20-50% commissions for bringing tourists to specific shops. This commission is added to your price.',
    avoid: 'Visit carpet shops on your own. If a guide insists on taking you somewhere, assume the price is inflated by at least 30%. Establish your own baseline at the Ensemble Artisanal first.',
  },
  {
    scam: 'Wool Blend Misrepresentation',
    icon: AlertTriangle,
    how: 'Carpets labeled "pure wool" contain cotton, acrylic, or polyester mixed in. Cotton makes the carpet feel thinner and less springy. Synthetics reduce durability.',
    avoid: 'Pull a small fiber from an inconspicuous spot and do the burn test: wool smells like burning hair and forms a crumbly ash. Cotton smells like burning paper. Synthetic fiber melts into a hard bead.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COOPERATIVES
   ═══════════════════════════════════════════════════════════════ */

const cooperatives = [
  {
    name: 'Association Feminine de Tazenakht',
    location: 'Tazenakht, Ouarzazate Province',
    specialty: 'Taznakht carpets with natural vegetable dyes',
    impact: 'Employs over 80 women weavers. Provides literacy classes, health insurance, and childcare alongside weaving income.',
  },
  {
    name: 'Cooperative Tissage Ait Bougmez',
    location: 'Ait Bougmez Valley, Azilal Province',
    specialty: 'Azilal and Beni Ourain style carpets',
    impact: 'Community-owned cooperative where proceeds fund a local school and water projects. Visitors can see the entire weaving process.',
  },
  {
    name: 'Association des Femmes Tisseuses de Ain Leuh',
    location: 'Ain Leuh, Middle Atlas',
    specialty: 'Beni Mguild carpets and Middle Atlas designs',
    impact: 'Supports 45 women artisans in a remote village. Fair Trade certified. Carpets come with artisan cards identifying the weaver.',
  },
  {
    name: 'Cooperative Feminine de Chichaoua',
    location: 'Chichaoua town',
    specialty: 'Chichaoua tribal carpets and flat-weave kilims',
    impact: 'Founded with NGO support. Women receive 80% of the sale price directly. Demonstration workshops available for visitors.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCarpetBuyingPage() {
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
          style={{
            backgroundImage: 'url(/images/art-berber-carpet-weaving.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Buying a Moroccan Carpet</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ShoppingBag className="w-4 h-4" />
            Shopping &amp; Crafts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Buying a Moroccan Carpet:
            <br className="hidden md:block" /> The Complete Berber Rug Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Beni Ourain to Boucherouite, every Moroccan carpet tells a story.
            Learn to read that story, know real prices, find the best souks, and bring home an authentic piece.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Moroccan Carpets Are Worth the Journey
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan carpets are not mass-produced commodities. Each one is woven by hand,
                typically by a woman working on an upright loom in her home or at a village cooperative.
                A single large carpet can take two to eight months to complete, with every knot tied
                individually. The patterns encode tribal identity, family history, protective symbols,
                and personal expression. A Beni Ourain diamond pattern from the Middle Atlas tells
                a different story than an Azilal abstract from the central High Atlas, and both are
                worlds apart from a refined Rabati medallion carpet from the capital.
              </p>
              <p>
                Morocco produces an estimated 3-4 million square meters of handwoven carpets and
                textiles annually, making it one of the largest handmade carpet producers outside of
                Central Asia. The tradition stretches back at least 2,500 years to the indigenous
                Amazigh (Berber) people. Today, over 40,000 women across Morocco earn their primary
                income from carpet weaving, and buying directly from cooperatives puts money into
                the hands of the artisans themselves rather than middlemen.
              </p>
              <p>
                This guide covers seven major carpet types, how to judge quality, real prices at
                cooperatives and souks, where to buy, how to ship your carpet home, specific
                haggling strategies, common scams, and the women weaver cooperatives that are
                preserving this tradition while empowering communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carpet Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seven Types of Moroccan Carpets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Each region of Morocco produces distinct carpet styles, reflecting local traditions,
            available materials, and centuries of artistic evolution.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices at cooperatives. Souk and city-shop prices may be two to five times higher before negotiation. Seasonal pricing can change.
          </p>

          <div className="space-y-8">
            {carpetTypes.map((carpet) => {
              const CarpetIcon = carpet.icon;
              return (
                <div key={carpet.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CarpetIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {carpet.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 inline mr-1" />{carpet.region}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{carpet.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <Scissors className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{carpet.material}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{carpet.knotDensity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{carpet.timeToWeave}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>Small: {carpet.priceSmall}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>Large: {carpet.priceLarge}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quality Identification ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Identify Quality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five checks that take less than five minutes and save you from overpaying or buying a counterfeit.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {qualityChecks.map((item, idx) => {
              const QIcon = item.icon;
              return (
                <div key={item.check} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 text-white text-sm font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.check}
                    </h3>
                    <QIcon className="w-4 h-4 text-[var(--color-accent)] ml-auto shrink-0" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.how}</p>
                  <div className="flex items-start gap-2 text-xs text-[var(--color-gold)] bg-[var(--color-gold)]/5 rounded-lg p-3">
                    <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{item.tip}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Where to Buy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Moroccan Carpets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From city souks to mountain cooperatives, the best places to find authentic carpets at fair prices.
          </p>

          <div className="space-y-10">
            {whereToBuy.map((location) => {
              const LocIcon = location.icon;
              return (
                <div key={location.city}>
                  <div className="flex items-center gap-3 mb-4">
                    <LocIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {location.city}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {location.spots.map((spot) => (
                      <div key={spot.name} className="card-moroccan p-5">
                        <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                          {spot.name}
                        </h4>
                        <span className="inline-block text-xs text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full mb-3">
                          {spot.type}
                        </span>
                        <p className="text-sm text-[var(--text-secondary)]">{spot.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Haggling Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Haggle for a Carpet
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Carpet negotiation in Morocco is an art form. These strategies are specific to the carpet trade.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Step 1: Establish Your Baseline
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Before entering any souk, visit the Ensemble Artisanal in Marrakech, Fez, or Meknes.
                These government-run shops have fixed prices verified by the artisan ministry. They are
                not the cheapest option, but they give you a reliable reference point. A Beni Ourain
                carpet priced at 6,000 MAD at the Ensemble Artisanal will start at 15,000-25,000 MAD
                in the souk. Your target should be somewhere between the cooperative price and the
                Ensemble Artisanal price.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Step 2: Control the Pace
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Carpet sellers will pull out dozens of carpets, unfolding them one after another. This
                is deliberate: the more you see, the harder it is to leave without buying. Accept the
                mint tea (it does not obligate you to purchase). Look at many carpets before indicating
                any interest. Ask questions about materials and regions, not prices. The more knowledge
                you demonstrate, the less likely you are to be quoted an inflated starting price.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Step 3: The Price Dance
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                When you find a carpet you want, ask the price. The first number is typically three to
                five times the actual selling price. Counter at about 30-40% of the asking price. The
                seller will act offended, then drop their price. You raise yours slightly. This
                back-and-forth continues until you meet somewhere in the middle. For a carpet initially
                quoted at 10,000 MAD, a realistic final price might be 3,000-4,500 MAD. If you are buying
                multiple carpets, negotiate a bundle discount of 10-20% on the total.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Step 4: Walk Away
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most effective haggling tool is leaving the shop. If the price has not reached your
                target, thank the seller, stand up, and walk toward the door. If they let you leave, the
                price was already near their bottom. If they call you back with a lower offer, you are
                in a strong position. In carpet souks, there are dozens of shops with similar inventory.
                Competition works in your favor.
              </p>
            </div>

            <div className="card-moroccan p-6 bg-[var(--color-gold)]/5 border-[var(--color-gold)]/20">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Important: Be Fair
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    A handmade carpet represents weeks or months of a weaver&apos;s labor. Haggling
                    is expected, but grinding the price to the absolute minimum hurts artisans. A fair
                    price is one where you feel you got good value and the weaver earned a living
                    wage. At cooperatives, prices are already fair: do not try to negotiate them down
                    further. The goal is a good deal, not the cheapest possible price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Scams ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Carpet Scams to Watch For
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Most carpet sellers are honest, but knowing these tactics protects you from the few who are not.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {commonScams.map((item) => (
              <div key={item.scam} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.scam}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{item.how}</p>
                <div className="flex items-start gap-2 text-xs text-green-700 bg-green-50 rounded-lg p-3">
                  <ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span><strong>Protection:</strong> {item.avoid}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shipping Your Carpet ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Your Carpet Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting your new carpet from the souk to your living room: options, costs, and customs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <PackageCheck className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Carry It Yourself
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The cheapest option. Small to medium carpets (up to about 2x1.5m) can be tightly
                rolled and placed in checked luggage or carried as an oversized item. Most airlines
                allow rolled carpets as checked baggage for the standard fee. Ask the seller to
                vacuum-pack the carpet to reduce its volume. A tightly rolled Beni Ourain (2x3m) is
                about 20-25cm in diameter and 100cm long when compressed.
              </p>
              <div className="text-xs text-[var(--text-muted)]">
                <DollarSign className="w-3 h-3 inline text-[var(--color-accent)]" /> Cost: Free to standard checked bag fee (from 200-600 MAD equivalent)
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Truck className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Shop Shipping (DHL/FedEx)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Most established carpet shops offer courier shipping via DHL, FedEx, or Aramex.
                They handle packaging and customs documentation. Delivery to Europe takes 5-10 days;
                to North America 7-14 days. Get a tracking number and keep your receipt. Insist on
                seeing the carpet being packaged and note the tracking number before leaving.
              </p>
              <div className="text-xs text-[var(--text-muted)]">
                <DollarSign className="w-3 h-3 inline text-[var(--color-accent)]" /> Cost: From 400-1,200 MAD depending on size and destination
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Globe className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                La Poste Maroc
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s postal service offers international parcel shipping at lower rates than
                private couriers, but delivery takes 2-6 weeks. Available at any main post office.
                Package the carpet yourself or pay for the post office packaging service. Tracking is
                available but less reliable than DHL/FedEx. Suitable for non-urgent shipments.
              </p>
              <div className="text-xs text-[var(--text-muted)]">
                <DollarSign className="w-3 h-3 inline text-[var(--color-accent)]" /> Cost: From 300-800 MAD depending on weight and destination
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <PackageCheck className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Sea Freight (Large Orders)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                If you are buying multiple carpets (for resale or a large home), sea freight from
                Casablanca port is the most economical option. Shipping agents in Marrakech and Fez
                can arrange this. Transit takes 3-6 weeks to Europe, 4-8 weeks to North America.
                You will need a customs broker at the receiving port.
              </p>
              <div className="text-xs text-[var(--text-muted)]">
                <DollarSign className="w-3 h-3 inline text-[var(--color-accent)]" /> Cost: From 2,000 MAD for a small crate; economical for bulk orders
              </div>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-6 bg-[var(--color-gold)]/5 border-[var(--color-gold)]/20">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Customs and Import Duties
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Keep your purchase receipt for customs. The EU generally allows personal goods worth
                  up to 430 EUR duty-free for air travelers. The US allows up to $800 per person. Carpets
                  exceeding these thresholds may be subject to import duty (typically 3-12% in the EU,
                  0-5% in the US for handmade textiles). Handmade carpets from Morocco may qualify for
                  preferential rates under trade agreements. Check your country&apos;s customs regulations
                  before your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Women Weaver Cooperatives ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Women Weaver Cooperatives
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Buying from cooperatives supports the women who actually make the carpets and keeps
            centuries-old weaving traditions alive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cooperatives.map((coop) => (
              <div key={coop.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {coop.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-2">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  <span>{coop.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
                  <Paintbrush className="w-3 h-3 text-[var(--color-accent)]" />
                  <span>{coop.specialty}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  <Heart className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                  {coop.impact}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Why Cooperatives Matter
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Fair wages:</strong> Weavers at cooperatives earn 60-80% of the sale price, compared to 10-20% when selling through middlemen in city souks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Authenticity guaranteed:</strong> You see where and how the carpet is made. No question about handmade vs. machine-made.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Community development:</strong> Cooperative profits fund literacy programs, healthcare, and school supplies in rural villages.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Preserving tradition:</strong> Young women learn weaving skills that might otherwise be lost as rural populations migrate to cities.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carpet Care ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Caring for Your Moroccan Carpet
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Proper care ensures your carpet lasts generations. Wool is naturally resilient, but a few
            practices make a significant difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Regular Maintenance
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Vacuum on low suction without the beater bar once a week</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Rotate 180 degrees every six months for even wear and sun exposure</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Use a rug pad underneath to prevent slipping and reduce wear</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>New wool carpets shed for 3-6 months: this is normal and decreases over time</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Spills and Stains
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Blot spills immediately with a clean white cloth and cold water</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Never rub a stain: rubbing pushes it deeper into the wool fibers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>For stubborn stains, use a mild wool detergent diluted in cold water</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Avoid bleach and hot water, which damage wool and natural dyes permanently</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Deep Cleaning
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Professional cleaning every 2-3 years is recommended for heavily used carpets</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>For home washing: cold water, mild wool detergent, gentle agitation, flat drying in shade</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Never machine wash, tumble dry, or hang a wet carpet (the weight stretches it)</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Moth and Sun Protection
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Cedar blocks or lavender sachets deter moths: place under or near the carpet</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Avoid prolonged direct sunlight, which fades natural dyes over time</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>If storing, roll (never fold) with mothballs in breathable fabric, not plastic</span>
                </div>
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

          <div className="space-y-5">
            {[
              { q: 'How much does a Moroccan carpet cost?', a: 'Prices vary widely. Small Boucherouite rugs start from 300 MAD; a large Beni Ourain (2x3m) costs from 5,000-15,000 MAD at cooperatives. In tourist souks, expect opening asks of 20,000-40,000 MAD before negotiation. Kilims start from 400 MAD. Rabati carpets are the most expensive, from 3,000 MAD for small sizes.' },
              { q: 'How can I tell if a Moroccan carpet is authentic?', a: 'Check the back: handmade rugs show irregular knots; machine-made carpets have uniform loops. The fringe should extend from the warp threads, not be sewn on. Natural wool smells faintly of lanolin when damp. Vegetable dyes show subtle color shifts (abrash); synthetic dyes are perfectly even.' },
              { q: 'What is the best type of Moroccan carpet to buy?', a: 'Beni Ourain rugs suit modern interiors with minimalist black-on-cream geometry. Azilal carpets are vibrant art pieces. Boucherouite rugs are affordable and colorful. Kilims are lightweight for easy transport. Rabati carpets suit formal spaces. Visit a cooperative to compare several types side by side.' },
              { q: 'Where is the best place to buy carpets in Morocco?', a: 'For fair prices and authenticity, buy from women weaver cooperatives in the Atlas or carpet towns like Tazenakht and Azrou. In cities, Marrakech has the widest selection (Souk des Tapis, Ensemble Artisanal). Fez excels at Rabati carpets. Avoid shops where guides or drivers bring you -- commissions inflate prices 30-50%.' },
              { q: 'How do I ship a carpet home from Morocco?', a: 'Most shops offer DHL/FedEx shipping (from 400-1,200 MAD). La Poste Maroc is cheaper but slower (2-6 weeks). Small carpets fit in checked luggage. Keep your receipt for customs. EU allows 430 EUR duty-free; the US allows $800. Sea freight from 2,000 MAD is economical for bulk purchases.' },
              { q: 'How should I haggle for a carpet?', a: 'Visit the Ensemble Artisanal first for fixed-price baselines. In souks, the first ask is 3-5x the selling price. Counter at 30-40% and negotiate toward the middle. Walking away is your strongest tool. Tea does not obligate you to buy. For multiple carpets, negotiate a 10-20% bundle discount.' },
              { q: 'What are common carpet scams in Morocco?', a: 'Machine-made sold as handmade, synthetic dyes marketed as natural, new carpets chemically aged, bait-and-switch packaging, wool blends misrepresented as pure wool, and guide-commission inflation (30-50% markup). Always inspect the actual carpet being wrapped and check the back for hand-knotted construction.' },
              { q: 'How do I care for a Moroccan wool carpet at home?', a: 'Vacuum weekly on low suction without the beater bar. Rotate every six months. Blot spills with cold water immediately. Professional cleaning every 2-3 years. Store rolled (never folded) with cedar blocks for moth prevention. Avoid direct sunlight. New wool carpets shed for the first few months -- this is normal.' },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the Amazigh heritage behind every carpet: traditions, villages, music, and architecture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the medina, souks, and riads of Morocco&apos;s most vibrant city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-shopping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Beyond carpets: leather, ceramics, spices, argan oil, and more Moroccan souvenirs.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Money-saving tips, haggling strategies, and how to stretch your dirhams further.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Find Your Perfect Moroccan Carpet?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the Middle Atlas cooperatives to the Marrakech souk, a one-of-a-kind handwoven
            carpet is waiting for you. Support the women artisans who carry this tradition forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Marrakech
            </Link>
            <Link
              href="/morocco-berber-culture"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Berber Culture Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

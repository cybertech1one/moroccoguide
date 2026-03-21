import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
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
  Building,
  Award,
  BookOpen,
  Palette,
  Package,
  Hammer,
  Eye,
  Globe,
  Layers,
  Store,
  Truck,
  Heart,
  CircleDot,
  MessageCircleQuestion,
  Flame,
  Paintbrush,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-pottery-ceramics`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Pottery & Ceramics Guide 2026 | Fes, Safi, Zellige & Tamegroute',
  description:
    'Complete guide to Moroccan pottery and ceramics. Fes blue pottery, Safi polychrome ceramics, Tamegroute green glazeware, zellige tilework, pottery workshops, buying tips, shipping fragile items home, price guide, traditional vs modern designs, and glazing techniques.',
  keywords: [
    'Morocco pottery guide',
    'Moroccan ceramics',
    'Fes pottery',
    'Fes blue pottery',
    'Safi ceramics',
    'Tamegroute pottery',
    'Tamegroute green pottery',
    'zellige tiles Morocco',
    'Moroccan tilework',
    'pottery workshops Morocco',
    'buy ceramics Morocco',
    'ship pottery from Morocco',
    'Moroccan artisan crafts',
    'pottery cooperatives Morocco',
    'Safi polychrome ceramics',
    'Morocco craft shopping',
    'Moroccan ceramic styles',
    'pottery museum Morocco',
    'Morocco handmade crafts 2026',
    'Moroccan glazing techniques',
    'traditional Moroccan pottery',
    'modern Moroccan ceramics',
    'zellige how its made',
  ],
  openGraph: {
    title: 'Morocco Pottery & Ceramics Guide 2026 | Fes, Safi, Zellige & Tamegroute',
    description:
      'From cobalt-blue Fes plates to rustic Tamegroute green glazeware and hand-cut zellige mosaics. Workshops, buying tips, pricing, shipping advice, and glazing techniques.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-ceramics.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan ceramic plates and bowls displayed at a traditional pottery workshop in Fes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Pottery & Ceramics Guide 2026 | Fes, Safi & Zellige',
    description:
      'Hand-painted Fes pottery, Safi polychrome ceramics, Tamegroute green ware, zellige tilework. Prices, workshops, buying tips, and how to ship ceramics home.',
    images: [`${BASE_URL}/images/hero-ceramics.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the difference between Fes pottery and Safi pottery?',
    a: 'Fes pottery uses cobalt oxide on a white tin-glaze background, producing deep blue geometric and floral patterns rooted in Andalusian traditions. Safi uses a broader palette of yellows, greens, reds, and browns with more figurative, free-flowing designs. Fes pieces are more refined and expensive; Safi produces higher volumes at lower price points.',
  },
  {
    q: 'How much does authentic Moroccan pottery cost?',
    a: 'Prices vary by region and quality. Simple Safi bowls start from 30 MAD. Fes hand-painted plates range from 150 MAD to over 3,000 MAD for museum-quality pieces. Tamegroute green pottery starts from 50 MAD. Zellige tiles cost from 800 MAD per square meter. Seasonal pricing can change during peak tourist periods.',
  },
  {
    q: 'Can I ship pottery and ceramics home from Morocco?',
    a: 'Yes. Many shops and cooperatives in Fes and Safi offer international shipping. Packing costs from 100 MAD to 300 MAD. Surface mail takes 4-8 weeks at from 200 MAD per kilogram. Express couriers (DHL, FedEx) are available in major cities. Photograph everything before handing it over for shipping.',
  },
  {
    q: 'Where can I take a pottery workshop in Morocco?',
    a: 'Fes (Ain Nokbi quarter), Safi (Colline des Potiers), and Marrakech (medina ateliers) offer the best workshops. Sessions last 2-3 hours and cost from 200 MAD to 500 MAD per person, including materials and keeping your creation. Fes is more traditional; Marrakech studios are polished with English-speaking instructors.',
  },
  {
    q: 'What is zellige tilework and where can I see it?',
    a: 'Zellige is Islamic mosaic tilework made from individually hand-cut geometric tiles assembled into intricate patterns. The finest examples are at the Bou Inania Madrasa and Dar Batha Museum in Fes, Bahia Palace in Marrakech, and the Hassan II Mosque in Casablanca.',
  },
  {
    q: 'Is Tamegroute pottery lead-free and food safe?',
    a: 'Traditional Tamegroute pottery uses a lead-based green glaze not considered food-safe by modern standards. Some workshops now use lead-free alternatives — ask specifically before purchasing. For decorative use, the traditional glaze presents no issue.',
  },
  {
    q: 'How can I tell if Moroccan pottery is handmade or mass-produced?',
    a: 'Handmade pottery has slight irregularities in shape, variations in painted designs, and fingerprints or wheel marks. The base may be unglazed with kiln marks. Mass-produced pieces are perfectly uniform with screen-printed designs. Handmade pottery tends to be heavier due to thicker clay walls.',
  },
  {
    q: 'What is the best city in Morocco for buying pottery?',
    a: 'Fes offers the highest quality and widest selection — the Ain Nokbi quarter has dozens of workshops at artisan prices. Safi is best for budget-friendly colorful ceramics. Tamegroute is worth the detour for unique green pottery. Marrakech has the most tourist-oriented selection with higher prices but greater convenience.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Pottery & Ceramics Guide 2026',
  description:
    'Complete guide to Moroccan pottery and ceramics covering Fes blue pottery, Safi polychrome ceramics, Tamegroute green glazeware, zellige tilework, pottery workshops, buying tips, and shipping advice.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-ceramics.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Pottery & Ceramics Guide', item: PAGE_URL },
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
   DATA: REGIONAL POTTERY STYLES
   ================================================================ */

const regionalStyles = [
  {
    region: 'Fes',
    title: 'Fes Blue-and-White Pottery',
    icon: Star,
    signature: 'Cobalt blue geometric and floral patterns on white ground',
    description:
      'Fes potters have refined their craft over 1,000 years, drawing from Andalusian, Persian, and Berber traditions. Cobalt oxide blue on a white tin-glaze background defines the style. Patterns include geometric interlacing, arabesques, and stylized floral motifs, all painted freehand by master artisans.',
    notableItems: ['Large decorative plates (tobsil)', 'Tajine dishes', 'Vases with calligraphic designs', 'Mosque lamps'],
    priceRange: 'From 150 MAD for small bowls to over 3,000 MAD for large master-painted plates',
    bestBuy: 'Ain Nokbi pottery quarter — direct from workshops',
  },
  {
    region: 'Safi',
    title: 'Safi Polychrome Ceramics',
    icon: Palette,
    signature: 'Multi-colored designs with yellows, greens, blues, and reds',
    description:
      'Morocco\'s ceramics capital by volume. The style is more colorful and less formal than Fes — potters work faster with a wider palette, producing bold, expressive pieces. The Colline des Potiers district has over 800 workshops. Output ranges from everyday functional ware to decorative pieces sold nationwide.',
    notableItems: ['Serving bowls and platters', 'Garden pots', 'Decorative tiles', 'Animal-shaped vessels'],
    priceRange: 'From 30 MAD for simple bowls to 800 MAD for large decorative platters',
    bestBuy: 'Colline des Potiers (Potters\' Hill) — walk between workshops',
  },
  {
    region: 'Tamegroute',
    title: 'Tamegroute Green Pottery',
    icon: Gem,
    signature: 'Distinctive green glaze with drip patterns, irregular shapes',
    description:
      'From a Draa Valley village south of Zagora, Tamegroute pottery is recognizable by its rich green glaze (emerald to olive). The tradition is tied to the Zaouia Naciria brotherhood. Green comes from manganese, copper, and silica. Each piece is unique — the glaze creates unpredictable drip patterns in the kiln, and rustic irregular shapes are part of the appeal.',
    notableItems: ['Candleholders', 'Small bowls and cups', 'Decorative plates', 'Oil lamps'],
    priceRange: 'From 50 MAD for small pieces to 400 MAD for larger items',
    bestBuy: 'Tamegroute village workshops — only a few families still operate',
  },
  {
    region: 'Meknes & Sale',
    title: 'Meknes and Sale Traditions',
    icon: Building,
    signature: 'Green-and-white patterns, influenced by Fes but with distinct local character',
    description:
      'Meknes potters work in green and white, producing pieces reflecting the city\'s imperial heritage. Sale specializes in functional kitchenware and water jugs. Both produce less tourist-oriented work than Fes, meaning lower prices and a less commercial workshop experience.',
    notableItems: ['Water jugs (guerba)', 'Cooking pots', 'Olive jars', 'Floral-patterned plates'],
    priceRange: 'From 40 MAD for kitchen pieces to 600 MAD for decorative ware',
    bestBuy: 'Local souks and medina workshops — fewer tourists mean less markup',
  },
  {
    region: 'Oulja (Rabat-Sale)',
    title: 'Oulja Pottery Complex',
    icon: Store,
    signature: 'Modern Moroccan ceramics blending traditional and contemporary design',
    description:
      'One of the largest pottery production areas in Morocco. Dozens of workshops and showrooms line the main road between Rabat and Sale, with traditional and contemporary designs. Many interior designers source pieces here. Well-organized for visitors with parking.',
    notableItems: ['Modern tagine sets', 'Contemporary vases', 'Large garden pottery', 'Custom-order tiles'],
    priceRange: 'From 80 MAD for tableware to 2,000 MAD for large custom pieces',
    bestBuy: 'Compare prices across several showrooms before committing',
  },
] as const;

/* ================================================================
   DATA: GLAZING TECHNIQUES
   ================================================================ */

const glazingTechniques = [
  {
    name: 'Tin Glaze (Mayolika)',
    origin: 'Fes',
    icon: Sparkles,
    description:
      'The foundation of Fes blue-and-white pottery. Tin oxide creates an opaque white surface that acts as a canvas for cobalt blue painting. The technique arrived via Andalusian refugees in the 15th century, who carried it from Spain where it was known as majolica. Fires at approximately 1,000 degrees Celsius.',
    colors: 'White base with cobalt blue decoration',
  },
  {
    name: 'Copper-Manganese Green Glaze',
    origin: 'Tamegroute',
    icon: Gem,
    description:
      'Unique to the Draa Valley. Potters mix copper oxide with manganese and silica from local river sand to create the characteristic green. Exact proportions are closely guarded family recipes. Kiln temperature determines whether the color leans emerald, olive, or sage. Drip marks and pooling are considered desirable.',
    colors: 'Emerald to olive green with natural drip patterns',
  },
  {
    name: 'Polychrome Overglaze',
    origin: 'Safi',
    icon: Palette,
    description:
      'Safi potters apply multiple colored glazes to bisque-fired pottery: yellow (antimony oxide), green (copper oxide), blue (cobalt oxide), and brown (iron oxide). Each color is painted separately and the piece is fired multiple times. This technique allows the bold, multi-colored designs that distinguish Safi ware from Fes.',
    colors: 'Yellow, green, blue, red, brown on white or cream ground',
  },
  {
    name: 'Salt Glaze',
    origin: 'Rural regions',
    icon: Flame,
    description:
      'Berber-tradition potters in the Rif and Middle Atlas throw common salt into the kiln at peak temperature. The sodium vaporizes and bonds with silica in the clay, forming a thin glassy surface with a distinctive orange-peel texture. Produces subtle, earthy tones prized by collectors of rustic ware.',
    colors: 'Warm browns, tans, and amber with orange-peel texture',
  },
] as const;

/* ================================================================
   DATA: TRADITIONAL VS MODERN DESIGNS
   ================================================================ */

const designComparisons = [
  {
    aspect: 'Patterns',
    traditional: 'Geometric interlacing, arabesques, eight-pointed stars, khatam motifs from Islamic mathematics',
    modern: 'Minimalist line work, abstract color blocks, asymmetric compositions, Moroccan-Scandinavian fusion',
  },
  {
    aspect: 'Colors',
    traditional: 'Blue and white (Fes), polychrome primaries (Safi), green (Tamegroute), limited by historic pigments',
    modern: 'Matte pastels, charcoal grays, earth tones, monochrome finishes, metallic gold and copper accents',
  },
  {
    aspect: 'Forms',
    traditional: 'Round plates, tajine dishes, water jugs, oil lamps, mosque lamps — shapes dictated by daily use',
    modern: 'Organic sculptures, square plates, tall cylinder vases, wall art, functional tableware for export',
  },
  {
    aspect: 'Glazes',
    traditional: 'Glossy tin glaze, lead-based greens, bright saturated finishes as a functional waterproof layer',
    modern: 'Matte finishes, reactive glazes, food-safe lead-free formulations, deliberate imperfections',
  },
  {
    aspect: 'Market',
    traditional: 'Local households, mosques, riads, restaurants, tourist souvenirs for the domestic economy',
    modern: 'International design, gallery exhibitions, high-end export, brand collaborations',
  },
] as const;

/* ================================================================
   DATA: POTTERY WORKSHOPS & EXPERIENCES
   ================================================================ */

const potteryWorkshops = [
  {
    name: 'Ain Nokbi Pottery Quarter',
    city: 'Fes',
    type: 'Traditional Workshop Visit',
    duration: '2-3 hours',
    price: 'From 200 MAD per person (hands-on); free to observe',
    description:
      'The heart of Fes pottery production. This hillside quarter has operated for centuries with potters in open-air workshops. Watch every stage: clay preparation, wheel throwing, painting, and kiln firing. Some offer hands-on sessions on a kick wheel. Kilns here still use traditional wood-fire methods.',
    highlights: ['Watch master painters at work', 'Try the pottery wheel', 'See wood-fired kilns', 'Buy direct at workshop prices'],
  },
  {
    name: 'Safi Potters\' Hill (Colline des Potiers)',
    city: 'Safi',
    type: 'Open-Air Workshop District',
    duration: '2-4 hours',
    price: 'From 150 MAD for guided tour; free to wander',
    description:
      'An entire hillside of pottery workshops overlooking the Atlantic. Over 800 workshops operate here, from one-person operations to larger producers. The experience is raw compared to Fes — working industrial sites, not tourist showrooms. Walk freely between workshops and watch artisans at every stage.',
    highlights: ['Largest pottery district in Morocco', 'Ocean views from hilltop kilns', 'Direct-from-artisan pricing', 'Less tourist-oriented than Fes'],
  },
  {
    name: 'Tamegroute Pottery Cooperative',
    city: 'Tamegroute (Draa Valley)',
    type: 'Village Cooperative',
    duration: '1-2 hours',
    price: 'From 50 MAD donation; pottery from 50 MAD',
    description:
      'A small Draa Valley operation where a handful of families maintain the green pottery tradition. The workshop is basic — a courtyard with a kick wheel, glazing area, and hillside kiln. Potters demonstrate their technique and explain the glazing process. Not a polished tourist experience, which is exactly what makes it memorable.',
    highlights: ['Authentic village craft experience', 'Watch the green glaze being mixed', 'Unique pieces not found elsewhere', 'Combine with Zaouia Naciria library visit'],
  },
  {
    name: 'Dar Batha Museum & Ceramic Collection',
    city: 'Fes',
    type: 'Museum Visit',
    duration: '1.5-2 hours',
    price: 'From 20 MAD entry',
    description:
      'Housed in a former royal palace, Dar Batha holds Morocco\'s finest Fes ceramics dating to the 14th century. The collection traces Fassi pottery evolution with blue-and-white masterpieces, polychrome pieces, and rare early examples. The Andalusian garden with fountains and orange trees is a calm retreat. Essential context before visiting workshops.',
    highlights: ['14th-century ceramic masterpieces', 'Hispano-Moresque palace setting', 'Traces Fassi pottery evolution', 'Peaceful Andalusian garden'],
  },
  {
    name: 'National Ceramics Museum',
    city: 'Safi',
    type: 'Museum Visit',
    duration: '1-1.5 hours',
    price: 'From 20 MAD entry',
    description:
      'Inside the Kechla fortress overlooking Safi, this museum covers ceramic history from Almohad-era production through Portuguese-influenced periods to modern works. Temporary exhibitions by contemporary ceramic artists add a forward-looking dimension.',
    highlights: ['Historic Kechla fortress setting', 'Almohad-era pottery collection', 'Portuguese-period ceramics', 'Contemporary artist exhibitions'],
  },
  {
    name: 'Marrakech Medina Ateliers',
    city: 'Marrakech',
    type: 'Boutique Workshop Sessions',
    duration: '2-3 hours',
    price: 'From 350 MAD per person',
    description:
      'Curated pottery workshops with English-speaking instructors, small groups, and air-conditioned studios. Learn basic wheel techniques and paint a piece using traditional Moroccan designs. Your finished piece is fired and can be collected or shipped to your accommodation.',
    highlights: ['English-speaking instructors', 'Small group sizes', 'Air-conditioned studios', 'Pieces fired and shipped to your hotel'],
  },
] as const;

/* ================================================================
   DATA: ZELLIGE TILEWORK PROCESS
   ================================================================ */

const zelligeSteps = [
  {
    step: 1,
    title: 'Clay Preparation & Tile Forming',
    description:
      'Local clay from the Fes region is mixed with water and kneaded by foot until smooth. The clay is then pressed into square molds measuring roughly 10x10 centimeters and left to dry in the sun for several days before the next stage.',
  },
  {
    step: 2,
    title: 'Glazing & First Firing',
    description:
      'Each square tile is dipped in a single-color enamel glaze — typically blues, greens, whites, yellows, or blacks. The tiles are stacked in a traditional wood-burning kiln and fired at approximately 1,000 degrees Celsius. Kiln temperatures are judged by eye, not by thermometer.',
  },
  {
    step: 3,
    title: 'Hand-Cutting (Tqouchire)',
    description:
      'A master cutter (maalem tqouchire) uses a sharp-edged hammer called a menqach to chip each glazed square into tiny geometric shapes — stars, diamonds, hexagons, triangles, and custom curves. A single mosaic panel can require thousands of individual cuts. Speed and precision define the master.',
  },
  {
    step: 4,
    title: 'Assembly (Farache)',
    description:
      'The cut pieces are arranged face-down on a flat surface following a master pattern drawn on paper or traced in chalk. The artisan fits each piece like a jigsaw puzzle, pressing the tiles tightly together with glazed faces against the table. Plaster mixed with sand is poured over the backs, binding the mosaic into a rigid panel.',
  },
  {
    step: 5,
    title: 'Installation',
    description:
      'The finished panels are flipped to reveal the mosaic surface, then fixed to walls, floors, fountains, or columns using lime mortar. Grout lines between tiles are kept minimal, creating the seamless flow that makes zellige so distinctive. A skilled installer can set several square meters per day.',
  },
] as const;

/* ================================================================
   DATA: PRICE GUIDE
   ================================================================ */

const priceGuide = [
  { item: 'Small Safi bowl (15cm)', price: 'From 30 MAD', note: 'Most affordable painted ceramics' },
  { item: 'Tamegroute candleholder', price: 'From 50 MAD', note: 'Unique green glaze, buy at source' },
  { item: 'Fes hand-painted bowl (20cm)', price: 'From 150 MAD', note: 'Quality varies — inspect closely' },
  { item: 'Decorative tagine (display only)', price: 'From 120 MAD', note: 'Painted ceramics, not for cooking' },
  { item: 'Fes master-painted large plate', price: 'From 500 MAD', note: 'Museum-quality pieces reach 3,000+ MAD' },
  { item: 'Safi serving platter (40cm)', price: 'From 200 MAD', note: 'Polychrome, great for display' },
  { item: 'Zellige tile panel (custom)', price: 'From 800 MAD/sqm', note: 'Complexity determines final cost' },
  { item: 'Pottery workshop session', price: 'From 200 MAD', note: 'Hands-on, includes materials' },
  { item: 'Ceramic tea set (pot + 6 cups)', price: 'From 250 MAD', note: 'Hand-painted, functional' },
  { item: 'Professional packing for shipping', price: 'From 100 MAD', note: 'Per item; bulk discounts available' },
  { item: 'Surface mail shipping (per kg)', price: 'From 200 MAD', note: '4-8 weeks delivery time' },
  { item: 'Courier shipping (DHL/FedEx)', price: 'From 500 MAD', note: '5-10 days, trackable and insured' },
] as const;

/* ================================================================
   DATA: BUYING & SHIPPING TIPS
   ================================================================ */

const buyingTips = [
  {
    title: 'Spotting Handmade vs. Factory-Made',
    icon: Eye,
    tips: [
      'Handmade pieces have slight asymmetries — perfectly round means machine-made',
      'Look at painted designs up close: hand-painted lines vary in thickness',
      'Check the base — handmade pottery often has unglazed or rough base areas',
      'Genuine pieces tend to be heavier because of thicker clay walls',
      'Ask to see the artisan at work if buying at a workshop',
    ],
  },
  {
    title: 'Negotiating Prices',
    icon: DollarSign,
    tips: [
      'Start at 40-50% of the asking price in tourist souks',
      'Workshop prices are closer to fair value and less negotiable',
      'Cooperatives have fixed prices — no bargaining needed or expected',
      'Buying multiple items earns better discounts (ask for lot pricing)',
      'Cash payments sometimes get an additional 5-10% reduction',
    ],
  },
  {
    title: 'Checking Quality Before You Buy',
    icon: CheckCircle,
    tips: [
      'Tap the piece gently — a clear ring means no cracks; a dull thud suggests damage',
      'Hold plates and bowls up to the light to check for hairline cracks',
      'Run your finger over the glaze to feel for bubbles or rough spots',
      'Ask if the glaze is food-safe (lead-free) if you plan to eat from it',
      'Check that the piece sits flat on a table without wobbling',
    ],
  },
  {
    title: 'Shipping Ceramics Home Safely',
    icon: Truck,
    tips: [
      'Many workshops in Fes and Safi offer professional packing and international shipping',
      'Double-box with newspaper or bubble wrap between layers for personal packing',
      'Surface mail is cheapest (from 200 MAD per kg) but takes 4-8 weeks',
      'Courier services (DHL, FedEx) are available in Fes, Marrakech, and Casablanca',
      'Photograph everything before shipping for insurance and customs records',
      'For carry-on luggage: wrap pieces individually in clothing inside your bag center',
    ],
  },
] as const;

/* ================================================================
   DATA: COOPERATIVES & SHOPS
   ================================================================ */

const cooperatives = [
  {
    name: 'Cooperative Artisanale de Poterie de Fes',
    location: 'Ain Nokbi, Fes',
    speciality: 'Blue-and-white Fassi pottery, zellige tiles',
    description:
      'Government-recognized cooperative with over 50 master potters. Fixed prices displayed, no bargaining stress. Quality standards are enforced. Shipping available; custom orders with 2-3 weeks lead time.',
    hasShopping: true,
    hasWorkshop: true,
  },
  {
    name: 'Art Naji',
    location: 'Fes Medina',
    speciality: 'Traditional and contemporary Fassi ceramics',
    description:
      'One of the most visited showrooms in Fes, inside a converted foundouk (caravanserai). Watch artisans painting above the showroom. Higher prices than cooperatives but curated selection and rigorous quality control.',
    hasShopping: true,
    hasWorkshop: true,
  },
  {
    name: 'Complexe de Poterie de Safi',
    location: 'Colline des Potiers, Safi',
    speciality: 'Polychrome Safi ceramics, large-scale production',
    description:
      'A cluster of family-run workshops on the potters\' hill. Walk between independent artisans, watch potters at their wheels, and buy directly. Prices are noticeably lower than Fes or Marrakech.',
    hasShopping: true,
    hasWorkshop: false,
  },
  {
    name: 'Ensemble Artisanal',
    location: 'Multiple cities (Marrakech, Fes, Meknes, Rabat)',
    speciality: 'Mixed crafts including pottery, at government-set prices',
    description:
      'Government-run craft complexes in major cities. Fixed-price pottery from regional artisans. Excellent reference points for fair market value before heading into the souks.',
    hasShopping: true,
    hasWorkshop: false,
  },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoPotteryCeramicsPage() {
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-ceramics.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Pottery &amp; Ceramics Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Palette className="w-4 h-4" />
            Arts &amp; Crafts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Pottery &amp; Ceramics Guide:
            <br className="hidden md:block" /> Fes, Safi, Zellige &amp; Beyond
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A thousand years of ceramic mastery, from cobalt-blue Fes plates painted by master artisans
            to rustic green Tamegroute glazeware fired in Saharan-edge kilns. Your complete guide to
            buying, making, and understanding Moroccan pottery.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Living Tradition Shaped by Fire and Earth
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan pottery is not a museum relic. It is a living craft practiced daily by thousands
                of artisans, from sprawling Fes workshop complexes to solitary potters in desert oases.
                The tradition stretches back to the Berber era, was transformed by Andalusian refugees
                carrying Persian ceramic techniques in the 15th century, and continues to evolve as
                contemporary artists push the boundaries of form and color.
              </p>
              <p>
                Each region has developed its own ceramic identity. Fes produces refined blue-and-white
                ware synonymous with Moroccan design worldwide. Safi fires bold polychrome pieces filling
                markets from Casablanca to Tangier. Tamegroute creates pottery with a green glaze found
                nowhere else on earth. And the zellige tile cutters of Fes and Meknes maintain an art
                that UNESCO recognizes as part of humanity&apos;s intangible cultural heritage.
              </p>
              <p>
                For travelers, this means the chance to watch a master artisan create a piece from raw
                clay to finished product, understand the chemistry of glazes and geometry of Islamic
                patterns, and bring home an object carrying centuries of knowledge in its form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regional Styles ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Pottery Styles of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five distinct ceramic traditions, each shaped by local clay, regional aesthetics, and centuries of
            accumulated craft knowledge.
          </p>

          <div className="space-y-8">
            {regionalStyles.map((style) => {
              const StyleIcon = style.icon;
              return (
                <div key={style.region} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <StyleIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {style.title}
                      </h3>
                      <p className="text-sm text-[var(--color-gold)] font-medium mt-1">
                        <Sparkles className="w-3.5 h-3.5 inline mr-1" />
                        {style.signature}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{style.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-2">Notable Items</h4>
                      <ul className="space-y-1">
                        {style.notableItems.map((item) => (
                          <li key={item} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-2">Price Range</h4>
                      <p className="text-xs text-[var(--color-accent)] font-semibold">{style.priceRange}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-2">Where to Buy</h4>
                      <p className="text-xs text-[var(--text-secondary)]">{style.bestBuy}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Glazing Techniques ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Paintbrush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Glazing Techniques of Moroccan Pottery
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The glaze defines the character of Moroccan ceramics. Each region guards its formulas and
            firing methods as family secrets passed through generations.
          </p>

          <div className="space-y-6">
            {glazingTechniques.map((technique) => {
              const TechIcon = technique.icon;
              return (
                <div key={technique.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TechIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {technique.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium mt-0.5">
                        Origin: {technique.origin}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{technique.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-xs text-[var(--text-muted)]">
                    <CircleDot className="w-3 h-3" />
                    {technique.colors}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Traditional vs Modern ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional vs. Modern Moroccan Ceramics
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A new generation of Moroccan ceramic artists is reinterpreting century-old traditions for
            contemporary tastes. Here is how the old and new compare.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Aspect</div>
              <div className="p-3 px-4">Traditional</div>
              <div className="p-3 px-4">Modern</div>
            </div>
            {designComparisons.map((row, i) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-semibold text-[var(--text-primary)]">{row.aspect}</div>
                <div className="p-3 px-4 text-[var(--text-secondary)]">{row.traditional}</div>
                <div className="p-3 px-4 text-[var(--text-secondary)]">{row.modern}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[var(--text-muted)] text-center">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Modern Moroccan ceramics can be found at 33 Rue Majorelle (Marrakech), Lalla Yddouna (Fes),
            the Oulja Complex (Rabat-Sale), and from online exporters who ship worldwide.
          </p>
        </div>
      </section>

      {/* ── Zellige Tilework ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Zellige: Morocco&apos;s Iconic Mosaic Tilework
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Zellige is the geometric mosaic art that covers the walls, floors, and fountains of Morocco&apos;s
            most celebrated buildings. Every tile is hand-cut by a master artisan using techniques unchanged
            for over 700 years.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            A single square meter of zellige can contain over 1,000 individual hand-cut tiles.
            Custom panels start from 800 MAD per square meter. Seasonal pricing applies, and
            complex patterns cost more.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {zelligeSteps.map((step) => (
                  <div key={step.step} className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div className="card-moroccan p-6 flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Award className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Where to See the Finest Zellige
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <p className="text-sm text-[var(--text-secondary)]"><MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" /><strong>Bou Inania Madrasa, Fes</strong> — floor-to-ceiling zellige in 10+ colors</p>
                <p className="text-sm text-[var(--text-secondary)]"><MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" /><strong>Bahia Palace, Marrakech</strong> — 19th-century zellige courtyards</p>
                <p className="text-sm text-[var(--text-secondary)]"><MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" /><strong>Moulay Ismail Mausoleum, Meknes</strong> — imperial-era zellige</p>
                <p className="text-sm text-[var(--text-secondary)]"><MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" /><strong>Hassan II Mosque, Casablanca</strong> — modern zellige on monumental scale</p>
                <p className="text-sm text-[var(--text-secondary)]"><MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" /><strong>Saadian Tombs, Marrakech</strong> — 16th-century funerary zellige</p>
                <p className="text-sm text-[var(--text-secondary)]"><MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" /><strong>Dar Batha Museum, Fes</strong> — zellige panels with ceramics collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pottery &amp; Ceramics Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for Moroccan pottery, from simple Safi bowls to master-painted Fes plates
            and professional shipping services.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months
            (October-April). Prices at tourist-oriented shops may be 50-100% higher than at
            workshops and cooperatives.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Workshops & Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hammer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pottery Workshops &amp; Museum Visits
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best places to watch artisans at work, try your hand at the wheel, and understand the full
            depth of Morocco&apos;s ceramic heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {potteryWorkshops.map((workshop) => (
              <div key={workshop.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {workshop.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {workshop.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {workshop.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {workshop.price}
                </div>
                <p className="text-xs text-[var(--text-muted)] italic mb-3">{workshop.type}</p>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{workshop.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {workshop.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buying Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying Tips &amp; Shipping Ceramics Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to identify genuine handmade pottery, negotiate fair prices, check quality, and get your
            purchases home in one piece.
          </p>

          <div className="space-y-8">
            {buyingTips.map((section) => {
              const TipIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                    <TipIcon className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cooperatives ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pottery Cooperatives &amp; Showrooms
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Cooperatives offer fair-trade pricing, quality assurance, and the confidence that your purchase
            supports working artisans directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cooperatives.map((coop) => (
              <div key={coop.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {coop.name}
                </h3>
                <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {coop.location}
                  </span>
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-3">
                  {coop.speciality}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{coop.description}</p>
                <div className="flex items-center gap-4">
                  {coop.hasShopping && (
                    <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <Store className="w-3 h-3 text-[var(--color-accent)]" />
                      Shopping available
                    </span>
                  )}
                  {coop.hasWorkshop && (
                    <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <Hammer className="w-3 h-3 text-[var(--color-accent)]" />
                      Workshop tours
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Artisan Heritage ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Preserving Morocco&apos;s Ceramic Heritage
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Maalem System
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A young potter begins as a <em>mouta&apos;alem</em> (apprentice) around age 12-14. After
                years of training he becomes a <em>sana&apos;i</em> (skilled worker). Only the most
                talented earn the title of <em>maalem</em> (master) — a distinction that can take 15-20
                years to achieve. A maalem painter in Fes creates intricate geometric patterns entirely
                freehand, without guidelines or stencils.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Challenges &amp; How Travelers Can Help
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Mass-produced imports undercut handmade prices. Young Moroccans increasingly prefer other
                careers. Wood for traditional kilns grows scarcer. In Tamegroute, only a handful of
                families continue the green pottery tradition. Buying from artisans and cooperatives is
                the most direct way to sustain this heritage:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Buy from cooperatives, not middlemen in tourist souks
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Pay fair prices — aggressive bargaining hurts artisans
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Visit workshops and tip the artisans who demonstrate
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Share photos and tag Moroccan craft businesses online
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Pottery Shoppers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Time to Visit Workshops
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morning (8-11am) is ideal: artisans work at full pace, kilns are firing, and natural light shows true colors. Avoid Fridays (prayer closures) and holidays. The Fes pottery quarter is busiest October through March.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Common Tourist Traps
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Guides who lead you to specific shops earn commission on inflated prices. &quot;Factory direct&quot; labels on souk-front shops rarely reflect actual factory pricing. Ceramics labeled &quot;antique&quot; are almost always new pieces aged with tea stains and scratches.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Package className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Packing for Your Suitcase
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Wrap each piece individually in clothing (socks work for small items). Place wrapped pieces in the center of your bag surrounded by soft items. Bubble wrap from any stationery shop costs from 10 MAD.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Customs &amp; Import Duties
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The EU and US permit handmade crafts under personal exemption limits. Keep receipts for customs. Zellige tiles in commercial quantities may attract import duties — check your country&apos;s rules before ordering large panels.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Learning Before You Buy
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Visit the Dar Batha Museum (Fes) or National Ceramics Museum (Safi) before shopping. Seeing historic masterpieces calibrates your eye. Ensemble Artisanal shops offer fixed-price references for fair market values.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CircleDot className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Food Safety &amp; Lead Glazes
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Traditional glazes sometimes contain lead, especially in Tamegroute and older Safi pieces. For decorative display, no concern. If you plan to serve food, ask about food-safe glazes. Fes cooperatives increasingly use certified lead-free formulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
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
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-crafts-artisans" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Hammer className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Crafts &amp; Artisans
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Beyond pottery: leatherwork, metalwork, weaving, and woodcarving traditions across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The spiritual capital of Morocco, home to the world&apos;s oldest university and finest pottery.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-shopping-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Store className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Shopping in Moroccan souks, medinas, and modern malls with bargaining tips and price guides.
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
            Ready to Explore Morocco&apos;s Pottery Heritage?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the ancient kilns of Fes to the green glazeware of the Saharan edge, Morocco&apos;s
            ceramic traditions are waiting to be discovered. Plan your craft-focused journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fes-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Explore Fes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-crafts-artisans"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30"
            >
              All Moroccan Crafts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

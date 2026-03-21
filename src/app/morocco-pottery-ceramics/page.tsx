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
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Pottery & Ceramics Guide 2026 | Fes, Safi, Zellige & Tamegroute',
  description:
    'Complete guide to Moroccan pottery and ceramics. Explore Fes blue-and-white pottery, Safi polychrome ceramics, Tamegroute green glazeware, zellige tilework, pottery workshops, buying tips, and how to ship ceramics home safely.',
  keywords: [
    'Morocco pottery guide',
    'Moroccan ceramics',
    'Fes pottery',
    'Safi ceramics',
    'Tamegroute pottery',
    'zellige tiles Morocco',
    'Moroccan tilework',
    'pottery workshops Morocco',
    'buy ceramics Morocco',
    'ship pottery from Morocco',
    'Moroccan artisan crafts',
    'pottery cooperatives Morocco',
    'Fes blue pottery',
    'Safi polychrome ceramics',
    'Morocco craft shopping',
    'Moroccan ceramic styles',
    'pottery museum Morocco',
    'Morocco handmade crafts 2026',
  ],
  openGraph: {
    title: 'Morocco Pottery & Ceramics Guide 2026 | Fes, Safi, Zellige & Tamegroute',
    description:
      'Explore Morocco\'s legendary pottery traditions. From Fes blue-and-white ceramics to Tamegroute green glazeware. Workshop visits, buying tips, regional styles, and shipping advice.',
    url: `${BASE_URL}/morocco-pottery-ceramics`,
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
      'From hand-painted Fes pottery to ancient zellige tilework. Complete guide to Morocco\'s ceramic traditions with prices, workshops, and buying tips.',
    images: [`${BASE_URL}/images/hero-ceramics.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-pottery-ceramics` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-pottery-ceramics`,
  name: 'Morocco Pottery & Ceramics Guide 2026 | Fes, Safi, Zellige & Tamegroute',
  description:
    'Complete guide to Moroccan pottery and ceramics including Fes blue-and-white pottery, Safi polychrome ceramics, Tamegroute green glazeware, zellige tilework, pottery workshops, buying tips, and shipping advice.',
  url: `${BASE_URL}/morocco-pottery-ceramics`,
  image: `${BASE_URL}/images/hero-ceramics.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-pottery-ceramics`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Pottery & Ceramics Guide', item: `${BASE_URL}/morocco-pottery-ceramics` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Fes pottery and Safi pottery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes pottery is known for its blue-and-white designs inspired by Andalusian and Islamic geometric patterns, using cobalt oxide for its distinctive deep blue color. Safi pottery uses a broader palette of colors including yellow, green, red, and brown, with designs that tend to be more figurative and free-flowing. Fes pottery is generally considered more refined, while Safi produces larger volumes at lower price points.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does authentic Moroccan pottery cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices vary widely by region and quality. Simple Safi bowls start from 30 MAD. Fes hand-painted plates range from 150 MAD to over 2,000 MAD for large museum-quality pieces. Tamegroute green pottery starts from 50 MAD. Zellige tiles cost from 800 MAD per square meter. Prices are seasonal and can change during peak tourist periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I ship pottery and ceramics home from Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many pottery shops and cooperatives in Fes and Safi offer international shipping services. Professional packing typically costs from 100-300 MAD depending on the number of items. Shipping via surface mail takes 4-8 weeks and costs from 200 MAD per kilogram. Express courier options from DHL or FedEx are available in major cities at higher rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I take a pottery workshop in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best pottery workshops for visitors are in Fes (Ain Nokbi pottery quarter), Safi (the pottery hill district), and Marrakech (several medina-based ateliers). Sessions typically last 2-3 hours and cost from 200 MAD to 500 MAD per person, including materials and the chance to keep your creation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is zellige tilework and where can I see it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zellige is a form of Islamic mosaic tilework made from individually hand-cut geometric tiles. Each tile is chiseled by hand from larger glazed squares, then assembled into intricate patterns. The finest examples are in Fes at the Bou Inania Madrasa, the Dar Batha Museum, and throughout the Fes medina. Meknes and Marrakech also have stunning zellige installations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Tamegroute pottery lead-free and food safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional Tamegroute pottery uses a lead-based green glaze, which means many pieces are not considered food-safe by modern standards. Some workshops have transitioned to lead-free alternatives, so ask specifically. For decorative use, the traditional glaze is fine. If you plan to eat from the pottery, confirm the glaze is food-safe before purchasing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if Moroccan pottery is handmade or mass-produced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genuine handmade pottery has slight irregularities in shape, small variations in the painted designs, and often shows fingerprints or subtle marks from the wheel. The base may be unglazed or have kiln marks. Mass-produced pieces are perfectly uniform, have screen-printed designs, and identical patterns across multiple pieces. Handmade pottery also tends to be heavier due to thicker walls.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best city in Morocco for buying pottery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes is the undisputed capital of Moroccan pottery, offering the highest quality and widest selection. The Ain Nokbi quarter alone has dozens of workshops where you can buy directly from artisans at workshop prices. Safi is best for budget-friendly, colorful ceramics. Tamegroute is worth visiting for its unique green pottery. Marrakech has the most tourist-oriented selection with higher prices but greater convenience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I bargain for pottery in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start at about 40-50% of the asking price and expect to settle around 60-70%. In pottery workshops where you watch artisans at work, prices are often more fixed and closer to fair value. Cooperative shops have fixed prices. The more you buy, the better your discount. Cash payments sometimes earn an extra reduction. Be respectful and patient during negotiations.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL POTTERY STYLES
   ═══════════════════════════════════════════════════════════════ */

const regionalStyles = [
  {
    region: 'Fes',
    title: 'Fes Blue-and-White Pottery',
    icon: Star,
    signature: 'Cobalt blue geometric and floral patterns on white ground',
    description:
      'The most celebrated pottery tradition in Morocco. Fes potters have refined their craft over 1,000 years, drawing from Andalusian, Persian, and Berber traditions. The defining feature is cobalt oxide blue on a white tin-glaze background. Patterns include intricate geometric interlacing, arabesques, and stylized floral motifs. Each piece is painted freehand by master artisans who train for years before earning the title of maalem (master).',
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
      'Safi is Morocco\'s second pottery capital, producing the majority of the country\'s commercial ceramics. The style is more colorful and less formal than Fes. Safi potters work faster and use a wider color palette, resulting in bold, expressive pieces. The city has an entire hillside district dedicated to pottery, with over 800 workshops employing thousands of artisans. Safi ceramics range from everyday functional ware to decorative pieces.',
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
      'From a small village in the Draa Valley south of Zagora, Tamegroute pottery is instantly recognizable by its rich green glaze that ranges from emerald to olive. The pottery tradition here dates back centuries and is closely tied to the Zaouia Naciria, a religious brotherhood. The green color comes from a mixture of manganese, copper, and silica. Each piece is unique, with the glaze creating unpredictable drip patterns during firing. The rustic, irregular shapes are part of the appeal.',
    notableItems: ['Candleholders', 'Small bowls and cups', 'Decorative plates', 'Oil lamps'],
    priceRange: 'From 50 MAD for small pieces to 400 MAD for larger items',
    bestBuy: 'Tamegroute village workshops — only a few operate, so prices are fairly standard',
  },
  {
    region: 'Meknes & Sale',
    title: 'Meknes and Sale Traditions',
    icon: Building,
    signature: 'Green-and-white patterns, influenced by Fes but with distinct local character',
    description:
      'Meknes and Sale each maintain their own pottery traditions. Meknes potters often work in green and white, producing elegant pieces that reflect the city\'s imperial heritage. Sale, across the river from Rabat, has a long pottery history specializing in functional kitchenware and water jugs. Both cities produce less tourist-oriented work than Fes, meaning prices tend to be lower and the experience of visiting workshops feels more authentic.',
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
      'The Oulja complex between Rabat and Sale is one of the largest pottery production areas in Morocco. Here, dozens of workshops and showrooms line the main road, offering everything from traditional designs to contemporary Moroccan ceramics. Many of Morocco\'s interior designers source their pieces here. The complex is well-organized for visitors, with parking and the ability to browse multiple workshops in one location.',
    notableItems: ['Modern tagine sets', 'Contemporary vases', 'Large garden pottery', 'Custom-order tiles'],
    priceRange: 'From 80 MAD for tableware to 2,000 MAD for large custom pieces',
    bestBuy: 'Compare prices across several showrooms before committing',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: POTTERY WORKSHOPS & EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const potteryWorkshops = [
  {
    name: 'Ain Nokbi Pottery Quarter',
    city: 'Fes',
    type: 'Traditional Workshop Visit',
    duration: '2-3 hours',
    price: 'From 200 MAD per person (hands-on); free to observe',
    description:
      'The heart of Fes pottery production. This hillside quarter has operated for centuries, with potters working in open-air workshops. You can watch every stage of production: clay preparation, wheel throwing, drying, painting, and kiln firing. Some workshops offer hands-on sessions where you throw your own pot on a kick wheel and paint a design. The kilns here still use traditional wood-fire methods.',
    highlights: ['Watch master painters at work', 'Try the pottery wheel', 'See ancient wood-fired kilns', 'Buy direct at workshop prices'],
  },
  {
    name: 'Safi Potters\' Hill (Colline des Potiers)',
    city: 'Safi',
    type: 'Open-Air Workshop District',
    duration: '2-4 hours',
    price: 'From 150 MAD for guided tour; free to wander',
    description:
      'An entire hillside covered in pottery workshops overlooking the Atlantic Ocean. Over 800 workshops operate here, from one-person operations to large-scale producers. The experience is raw and unpolished compared to Fes — these are working industrial sites, not tourist showrooms. You can walk freely between workshops and watch artisans at every stage. The views of the ocean while potters work are unforgettable.',
    highlights: ['Largest pottery district in Morocco', 'Ocean views from hilltop kilns', 'Direct-from-artisan pricing', 'Less tourist-oriented than Fes'],
  },
  {
    name: 'Tamegroute Pottery Cooperative',
    city: 'Tamegroute (Draa Valley)',
    type: 'Village Cooperative',
    duration: '1-2 hours',
    price: 'From 50 MAD donation; pottery from 50 MAD',
    description:
      'A small operation in the Draa Valley where a handful of families maintain the green pottery tradition. The workshop is basic — a simple courtyard with a kick wheel, glazing area, and a wood-fired kiln built into the hillside. The potters are happy to demonstrate their technique and explain the glazing process. This is not a polished tourist experience, which is exactly what makes it special.',
    highlights: ['Authentic village craft experience', 'Watch the green glaze being mixed', 'Unique pieces not found elsewhere', 'Combined with Zaouia Naciria library visit'],
  },
  {
    name: 'Dar Batha Museum & Ceramic Collection',
    city: 'Fes',
    type: 'Museum Visit',
    duration: '1.5-2 hours',
    price: 'From 20 MAD entry',
    description:
      'Housed in a former royal palace, the Dar Batha Museum holds Morocco\'s finest collection of Fes ceramics dating back to the 14th century. The collection traces the evolution of Fassi pottery through the centuries, with masterpieces of blue-and-white ware, polychrome pieces, and rare early examples. The museum garden is an oasis of calm with fountains and orange trees. Essential context before visiting the workshops.',
    highlights: ['14th-century ceramic masterpieces', 'Beautiful Hispano-Moresque palace setting', 'Traces evolution of Fassi pottery', 'Peaceful Andalusian garden'],
  },
  {
    name: 'National Ceramics Museum',
    city: 'Safi',
    type: 'Museum Visit',
    duration: '1-1.5 hours',
    price: 'From 20 MAD entry',
    description:
      'Located inside the Kechla fortress overlooking Safi, this museum documents the city\'s deep pottery heritage. Displays cover Safi\'s ceramic history from early Almohad-era production through Portuguese-influenced periods to modern works. The museum also hosts temporary exhibitions by contemporary ceramic artists and provides context for understanding the different styles you will encounter on the Potters\' Hill.',
    highlights: ['Housed in historic Kechla fortress', 'Almohad-era pottery collection', 'Portuguese-period ceramics', 'Contemporary artist exhibitions'],
  },
  {
    name: 'Marrakech Medina Ateliers',
    city: 'Marrakech',
    type: 'Boutique Workshop Sessions',
    duration: '2-3 hours',
    price: 'From 350 MAD per person',
    description:
      'Several medina-based ateliers in Marrakech offer curated pottery workshops for visitors. These tend to be more polished experiences than Fes or Safi, with English-speaking instructors, small group sizes, and air-conditioned studios. You will learn basic wheel techniques and paint a piece using traditional Moroccan designs. Your finished piece is fired and can be collected or shipped. Popular with families and creative travelers.',
    highlights: ['English-speaking instructors', 'Small group sizes', 'Air-conditioned studios', 'Pieces fired and shipped to your hotel'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ZELLIGE TILEWORK
   ═══════════════════════════════════════════════════════════════ */

const zelligeDetails = [
  {
    step: 1,
    title: 'Clay Preparation & Tile Forming',
    description: 'Local clay is mixed with water, kneaded by foot, and pressed into square molds. The raw tiles are dried in the sun for several days before being glazed and fired.',
  },
  {
    step: 2,
    title: 'Glazing & First Firing',
    description: 'Each square tile is dipped in a single-color enamel glaze — typically in blues, greens, whites, yellows, or blacks. The tiles are fired at around 1,000 degrees Celsius in a wood-burning kiln.',
  },
  {
    step: 3,
    title: 'Hand-Cutting (Tqouchire)',
    description: 'A master cutter (maalem tqouchire) uses a sharp-edged hammer to chip each glazed square into tiny geometric shapes — stars, diamonds, hexagons, triangles. A single mosaic panel can require thousands of individual cuts.',
  },
  {
    step: 4,
    title: 'Assembly (Farache)',
    description: 'The cut pieces are arranged face-down on a flat surface following a master pattern drawn on paper. The artisan fits each piece like a jigsaw puzzle, pressing the tiles tightly together. Plaster is then poured over the back to bind the mosaic into a single panel.',
  },
  {
    step: 5,
    title: 'Installation',
    description: 'The finished panels are flipped over to reveal the mosaic surface, then fixed to walls, floors, fountains, or columns using lime mortar. The grout lines between tiles are left minimal, creating the seamless flow that makes zellige so striking.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Small Safi bowl (15cm)', price: 'From 30 MAD', note: 'Most affordable painted ceramics' },
  { item: 'Tamegroute candleholder', price: 'From 50 MAD', note: 'Unique green glaze, buy at source' },
  { item: 'Fes hand-painted bowl (20cm)', price: 'From 150 MAD', note: 'Quality varies — inspect closely' },
  { item: 'Decorative tagine (display only)', price: 'From 120 MAD', note: 'Painted ceramics, not for cooking' },
  { item: 'Fes master-painted large plate', price: 'From 500 MAD', note: 'Museum-quality pieces reach 3,000+ MAD' },
  { item: 'Safi serving platter (40cm)', price: 'From 200 MAD', note: 'Polychrome, great for display' },
  { item: 'Zellige tile panel (custom)', price: 'From 800 MAD/sqm', note: 'Price depends on pattern complexity' },
  { item: 'Pottery workshop session', price: 'From 200 MAD', note: 'Hands-on, includes materials' },
  { item: 'Ceramic tea set (pot + 6 cups)', price: 'From 250 MAD', note: 'Hand-painted, functional' },
  { item: 'Professional packing for shipping', price: 'From 100 MAD', note: 'Per item; bulk discounts available' },
  { item: 'Surface mail shipping (per kg)', price: 'From 200 MAD', note: '4-8 weeks delivery time' },
  { item: 'Courier shipping (DHL/FedEx)', price: 'From 500 MAD', note: '5-10 days, trackable and insured' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUYING & SHIPPING TIPS
   ═══════════════════════════════════════════════════════════════ */

const buyingTips = [
  {
    title: 'Spotting Handmade vs. Factory-Made',
    icon: Eye,
    tips: [
      'Handmade pieces have slight asymmetries — perfectly round means machine-made',
      'Look at the painted designs up close: hand-painted lines vary in thickness',
      'Check the base — handmade pottery often has unglazed or rough base areas',
      'Genuine pieces tend to be heavier due to thicker clay walls',
      'Ask to see the artisan at work if buying at a workshop',
    ],
  },
  {
    title: 'Negotiating Prices',
    icon: DollarSign,
    tips: [
      'Start at 40-50% of the asking price in tourist souks',
      'Workshop prices are closer to fair value and less negotiable',
      'Cooperatives have fixed prices — no bargaining needed',
      'Buying multiple items earns better discounts',
      'Cash payments sometimes get an additional 5-10% reduction',
    ],
  },
  {
    title: 'Checking Quality',
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
      'Many workshops in Fes and Safi offer professional packing and shipping',
      'Double-box with newspaper or bubble wrap between layers',
      'Surface mail is cheapest but takes 4-8 weeks — from 200 MAD per kg',
      'Courier services (DHL, FedEx) are available in Fes, Marrakech, and Casablanca',
      'Take photos of everything before shipping for insurance purposes',
      'For carry-on luggage: wrap pieces individually in clothing inside your bag',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COOPERATIVE VISITS
   ═══════════════════════════════════════════════════════════════ */

const cooperatives = [
  {
    name: 'Cooperative Artisanale de Poterie de Fes',
    location: 'Ain Nokbi, Fes',
    speciality: 'Blue-and-white Fassi pottery, zellige tiles',
    description:
      'This government-recognized cooperative brings together over 50 master potters. Fixed prices are displayed, removing the stress of bargaining. The quality is consistently high because the cooperative sets standards. They also offer shipping and can produce custom orders with 2-3 weeks lead time.',
    hasShopping: true,
    hasWorkshop: true,
  },
  {
    name: 'Art Naji',
    location: 'Fes Medina',
    speciality: 'Traditional and contemporary Fassi ceramics',
    description:
      'One of the most visited pottery showrooms in Fes. Located in a large converted foundouk (caravanserai), Art Naji offers both traditional and modern designs. You can watch artisans painting in the workshop above the showroom. Prices are higher than the cooperatives but the selection is curated and the quality control is rigorous.',
    hasShopping: true,
    hasWorkshop: true,
  },
  {
    name: 'Complexe de Poterie de Safi',
    location: 'Colline des Potiers, Safi',
    speciality: 'Polychrome Safi ceramics, large-scale production',
    description:
      'A cluster of family-run workshops on the potters\' hill. Unlike a single cooperative, this is a district of independent artisans who welcome visitors. The experience is less structured than Fes — you walk between workshops, watch potters at their wheels, and buy directly. Prices are noticeably lower than Fes or Marrakech.',
    hasShopping: true,
    hasWorkshop: false,
  },
  {
    name: 'Ensemble Artisanal',
    location: 'Multiple cities (Marrakech, Fes, Meknes, Rabat)',
    speciality: 'Mixed crafts including pottery, at government-set prices',
    description:
      'Government-run craft complexes found in most major cities. The pottery section carries work from regional artisans at fixed prices. These are excellent reference points for understanding fair market value before heading into the souks. Quality is reliable, if not always at the highest artistic level.',
    hasShopping: true,
    hasWorkshop: false,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPotteryCeramicsPage() {
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
            backgroundImage: 'url(/images/hero-ceramics.webp)',
          }}
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
            to rustic green Tamegroute glazeware fired in desert kilns. Your complete guide to Morocco&apos;s
            pottery traditions.
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
                of artisans across the country, from sprawling workshop complexes in Fes to solitary
                potters in desert oases. The tradition stretches back to the Berber era, was transformed
                by Andalusian refugees who arrived in the 15th century carrying Persian ceramic techniques,
                and continues to evolve as contemporary artists push the boundaries of form and color.
              </p>
              <p>
                Each region of Morocco has developed its own distinct ceramic identity. Fes produces the
                refined blue-and-white ware that has become synonymous with Moroccan design worldwide.
                Safi fires the bold polychrome pieces that fill markets from Casablanca to Tangier.
                Tamegroute, a small village in the Draa Valley, creates pottery with a green glaze found
                nowhere else on earth. And the zellige tile cutters of Fes and Meknes maintain an art form
                that UNESCO has recognized as part of humanity&apos;s intangible cultural heritage.
              </p>
              <p>
                For travelers, Morocco&apos;s pottery scene offers something rare: the chance to watch a
                master artisan create a piece from raw clay to finished product, to understand the chemistry
                of glazes and the geometry of Islamic patterns, and to bring home a handmade object that
                carries centuries of accumulated knowledge in its form.
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
            accumulated craft knowledge. Here is what makes each one unique.
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

      {/* ── Zellige Tilework ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Zellige: Morocco&apos;s Iconic Mosaic Tilework
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Zellige is the geometric mosaic art that covers the walls, floors, and fountains of Morocco&apos;s
            most iconic buildings. Every tile is hand-cut by a master artisan using techniques unchanged
            for over 700 years.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            A single square meter of zellige can contain over 1,000 individual hand-cut tiles. Custom zellige panels start from 800 MAD per square meter. Seasonal pricing applies, and complex patterns cost more.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {zelligeDetails.map((step) => (
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Bou Inania Madrasa, Fes</strong> — 14th-century masterpiece with floor-to-ceiling zellige in over 10 colors
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Dar Batha Museum, Fes</strong> — historic zellige panels alongside the ceramics collection
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Bahia Palace, Marrakech</strong> — 19th-century palace with stunning zellige courtyards
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Mausoleum of Moulay Ismail, Meknes</strong> — imperial-era zellige at its most elaborate
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Hassan II Mosque, Casablanca</strong> — modern zellige on a monumental scale
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Saadian Tombs, Marrakech</strong> — 16th-century zellige in intimate funerary chambers
                  </p>
                </div>
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
            What to expect to pay for Moroccan pottery, from simple Safi bowls to master-painted Fes plates.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April). Prices at tourist-oriented shops may be 50-100% higher than at workshops and cooperatives.
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

      {/* ── Artisan Tradition ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Artisan Tradition: Preserving Morocco&apos;s Ceramic Heritage
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Maalem System
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Moroccan pottery follows a centuries-old apprenticeship system. A young potter begins as a
                <em> mouta&apos;alem</em> (apprentice), typically around age 12-14, learning basic clay preparation
                and wheel techniques. After years of training under a master, he becomes a <em>sana&apos;i</em>
                (skilled worker). Only the most talented earn the title of <em>maalem</em> (master), a
                distinction that can take 15-20 years to achieve. A maalem painter in Fes can create the
                most intricate geometric patterns entirely freehand, without guidelines or stencils.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Challenges Facing the Craft
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The craft faces real pressures. Mass-produced ceramics imported from China and Vietnam undercut
                handmade prices. Young Moroccans increasingly prefer other careers. The cost of traditional
                wood-fired kilns has risen as wood becomes scarcer. Some workshops have switched to gas
                kilns, which produce consistent results but lack the subtle variations of wood firing. In
                Tamegroute, only a handful of families continue the green pottery tradition, and the knowledge
                could disappear within a generation if demand drops.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                How Travelers Can Help
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Buying directly from artisans and cooperatives is the most effective way to support the
                craft. Every purchase from a workshop sustains a family and validates the choice of young
                apprentices to continue learning. Beyond buying, consider these actions:
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
                  Share your photos and tag Moroccan craft businesses online
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
                Morning visits (8-11am) offer the best experience. Artisans are working at full pace, kilns
                are firing, and the light is ideal for seeing true colors. Avoid Fridays (many workshops close
                for prayer) and major holidays. The Fes pottery quarter is busiest October-March.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Common Tourist Traps
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Be cautious of guides who lead you to specific shops (they earn commission, and prices are
                inflated). &quot;Factory direct&quot; labels on souk-front shops rarely mean actual factory
                prices. Ceramics labeled &quot;antique&quot; are almost always new pieces aged artificially with tea stains and scratches.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Package className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Packing for Your Suitcase
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If carrying pottery in luggage, wrap each piece individually in clothing (socks work well for
                small items). Place wrapped pieces in the center of your bag surrounded by soft items.
                Bubble wrap from any stationery shop costs from 10 MAD. Never pack pottery in carry-on
                if the piece could be mistaken for a blunt object at security.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Customs &amp; Import Duties
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most countries allow reasonable quantities of pottery as personal goods without duties. The
                EU and US permit handmade crafts under personal exemption limits. Keep receipts for customs
                declarations. Zellige tiles in commercial quantities may attract import duties — check your
                country&apos;s rules before ordering large architectural panels.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Learning Before You Buy
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Visit the Dar Batha Museum in Fes or the National Ceramics Museum in Safi before shopping.
                Seeing historic masterpieces calibrates your eye for quality. The Ensemble Artisanal shops
                in major cities offer fixed-price references so you understand fair market values.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CircleDot className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Food Safety &amp; Lead Glazes
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Traditional Moroccan glazes sometimes contain lead, especially in Tamegroute and older
                Safi pieces. For decorative display, this is not a concern. If you plan to serve food
                on your pottery, ask the artisan specifically about food-safe glazes. Modern cooperatives
                in Fes increasingly use certified lead-free glazes.
              </p>
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
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
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

      {/* ── Related Pages ── */}
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
            <Link href="/morocco-shopping-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Store className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to shopping in Moroccan souks, medinas, and modern malls with bargaining tips.
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
                Navigate Morocco&apos;s legendary markets with confidence. City-by-city souk recommendations.
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
                Explore the spiritual and cultural capital of Morocco, home to the world&apos;s oldest university and finest pottery.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-zellige-tiles" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Layers className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Zellige Tilework Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into Morocco&apos;s iconic geometric mosaic tilework, its history, and where to commission custom pieces.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-market-souks" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Markets &amp; Souks
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From Marrakech&apos;s Jemaa el-Fnaa to the quiet craft souks of Fes. Where to find the best market experiences.
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

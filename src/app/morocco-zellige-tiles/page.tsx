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
  Award,
  BookOpen,
  ShoppingBag,
  Package,
  Sparkles,
  Layers,
  Users,
  Eye,
  Plane,
  Globe,
  Building,
  Search,
  Flame,
  Paintbrush,
  Hammer,
  Ruler,
  Scissors,
  Hexagon,
  Gem,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Zellige Tiles Guide 2026 | History, Workshops & Buying Tips',
  description:
    'The complete guide to Moroccan zellige mosaic tiles. Discover the 10th-century Fes tradition, 7-step handmade process, star patterns, best palaces to visit, workshop tours, price guide from 800 MAD/m², and shipping tiles internationally.',
  keywords: [
    'Moroccan zellige tiles',
    'zellige tile Morocco',
    'Moroccan mosaic tiles',
    'zellige mosaic art',
    'Fes zellige tiles',
    'Moroccan geometric tiles',
    'zellige workshops Morocco',
    'buy zellige tiles Morocco',
    'zellige tile prices',
    'Islamic geometric art Morocco',
    'Moroccan tile patterns',
    'handmade zellige tiles',
    'zellige interior design',
    'Moroccan mosaic art',
    'shipping zellige tiles',
    'zellige tile making process',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-zellige-tiles`,
  },
  openGraph: {
    title: 'Moroccan Zellige Tiles Guide 2026 | History, Workshops & Prices',
    description:
      'Everything about Moroccan zellige mosaic tiles. History from 10th-century Fes, the 7-step handmade process, star patterns, palaces, workshop tours, prices, and international shipping.',
    url: `${BASE_URL}/morocco-zellige-tiles`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/art-moroccan-pattern-zellige.webp`,
        width: 1200,
        height: 630,
        alt: 'Intricate Moroccan zellige mosaic tilework featuring geometric star patterns in blue, green, and white',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Zellige Tiles Guide | History, Workshops & Buying Tips',
    description:
      'Complete guide to Moroccan zellige tiles: 10th-century origins, 7-step process, star patterns, best palaces, workshops, prices from 800 MAD/m², and shipping tips.',
    images: [`${BASE_URL}/images/art-moroccan-pattern-zellige.webp`],
  },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-zellige-tiles`,
  name: 'Moroccan Zellige Tiles Guide 2026 | History, Workshops & Buying Tips',
  description:
    'The complete guide to Moroccan zellige mosaic tiles. History, handmade process, patterns, palaces, workshops, prices, and shipping advice.',
  url: `${BASE_URL}/morocco-zellige-tiles`,
  image: `${BASE_URL}/images/art-moroccan-pattern-zellige.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-zellige-tiles`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Zellige Tiles Guide', item: `${BASE_URL}/morocco-zellige-tiles` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are Moroccan zellige tiles?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zellige (also spelled zellij) are hand-cut mosaic tiles originating from Fes, Morocco in the 10th century. Each small tile chip is individually hand-cut from larger glazed terracotta squares, then assembled face-down into intricate geometric patterns. The art is a UNESCO-recognized intangible cultural heritage and adorns mosques, palaces, fountains, and riads across Morocco.' },
    },
    {
      '@type': 'Question',
      name: 'How much do zellige tiles cost in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Simple single-color zellige tiles start from 800 MAD per square meter. Standard geometric patterns with 2-3 colors cost from 1,500 MAD/m². Complex star patterns with multiple colors range from 2,500 to 5,000+ MAD/m². Custom designs by master craftsmen can exceed 8,000 MAD/m². Prices vary by complexity, number of colors, and the reputation of the workshop.' },
    },
    {
      '@type': 'Question',
      name: 'Can you ship zellige tiles internationally?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Established workshops in Fes and Marrakech regularly ship internationally. Tiles are heavy, so shipping costs from 2,000 to 8,000 MAD depending on quantity and destination. Expect 4-8 weeks by sea or 7-14 days by air. Most workshops handle customs paperwork and professional packing. Order 10-15% extra tiles to account for breakage during shipping and installation.' },
    },
    {
      '@type': 'Question',
      name: 'Where can I see the best zellige tilework in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'The finest zellige is found in Fes at the Bou Inania Madrasa, Medersa Attarine, and Al-Attarine Madrasa. In Marrakech, Bahia Palace and Ben Youssef Madrasa are outstanding. The Hassan II Mosque in Casablanca has the largest modern zellige installation. The Royal Palace gates in Fes showcase monumental zellige panels visible from the street.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to make zellige tiles?',
      acceptedAnswer: { '@type': 'Answer', text: 'The entire process from raw clay to finished installation takes 4-6 weeks. Clay preparation and drying takes 1-2 weeks, glazing and firing another week. A skilled maalem (master) can cut about 400-500 tile chips per day. A complex 1-square-meter panel with an 8-point star pattern requires roughly 800-1,200 individual pieces and takes 3-5 days to assemble.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between zellige and regular mosaic?',
      acceptedAnswer: { '@type': 'Answer', text: 'Unlike Roman or Byzantine mosaics that use small uniform squares (tesserae), Moroccan zellige uses hand-cut irregular geometric shapes that tessellate perfectly. Each piece is cut from a larger glazed square using a sharp hammer called a menqash. The tiles are assembled face-down in a bed of sand, then plaster is poured over the back. This unique technique creates the characteristic slightly uneven surface that catches light beautifully.' },
    },
    {
      '@type': 'Question',
      name: 'Can I take a zellige workshop class in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, several workshops in Fes and Marrakech offer hands-on zellige experiences. In Fes, Art Naji and the Ain Nokbi zellige cooperatives welcome visitors. Classes typically last 2-3 hours and cost from 300 MAD per person. You learn to cut tiles with a menqash and assemble a small pattern to take home. Some luxury riads also arrange private zellige workshops.' },
    },
    {
      '@type': 'Question',
      name: 'Is zellige suitable for modern interior design?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Zellige is hugely popular in contemporary interior design worldwide. It works beautifully as kitchen backsplashes, bathroom walls, fireplace surrounds, and accent walls. Modern designers often use monochromatic zellige (especially white, terracotta, or sage green) for a subtle handmade texture. The slight color variations in hand-glazed tiles add depth and character that machine-made tiles cannot replicate.' },
    },
  ],
};

/* ===================================================================
   DATA: ZELLIGE PATTERNS
   =================================================================== */

const zelligePatterns = [
  {
    name: '8-Point Star (Khatam)',
    icon: Sparkles,
    complexity: 'Medium',
    pieces: '800-1,000 per m²',
    description:
      'The most iconic zellige pattern. Eight diamond-shaped pieces radiate from a central point, surrounded by smaller filler shapes. This pattern appears in nearly every historic building in Fes and is the most commonly requested design for residential projects.',
    colors: 'Traditionally blue, white, green, and honey yellow',
  },
  {
    name: '16-Point Star (Taza Star)',
    icon: Star,
    complexity: 'High',
    pieces: '1,200-1,600 per m²',
    description:
      'A more complex evolution of the 8-point star with double the radiating points. This pattern creates a mesmerizing effect of interlocking stars and rosettes. Found in the finest royal palaces and madrasas, it requires a master craftsman with decades of experience.',
    colors: 'Multi-colored with up to 8 different hues',
  },
  {
    name: 'Geometric Lattice (Shabaka)',
    icon: Hexagon,
    complexity: 'Medium-High',
    pieces: '900-1,100 per m²',
    description:
      'An interlocking lattice of hexagons, diamonds, and triangles that creates an infinite-repeat pattern. Popular for large wall panels and fountain basins. The visual rhythm of this pattern makes it ideal for covering expansive surfaces without a defined center point.',
    colors: 'Often two-tone: blue-white, green-white, or black-white',
  },
  {
    name: 'Floral Rosette (Tawriq)',
    icon: Heart,
    complexity: 'Very High',
    pieces: '1,400-1,800 per m²',
    description:
      'Curvilinear zellige that mimics floral and arabesque forms. This is the most technically demanding pattern because it requires cutting curved tile pieces. Found primarily in 14th-century Marinid-era buildings and premium modern commissions.',
    colors: 'Full polychrome palette with 6-10 colors',
  },
  {
    name: 'Fountain Basin (Sahn)',
    icon: Gem,
    complexity: 'High',
    pieces: '1,000-1,400 per m²',
    description:
      'Radial patterns designed specifically for the interior of fountain basins and round surfaces. The pattern radiates outward from a central star, with concentric bands of increasingly complex geometric shapes. These are among the most prized zellige installations.',
    colors: 'Deep blues, whites, and greens (water-inspired)',
  },
] as const;

/* ===================================================================
   DATA: MAKING PROCESS (7 STEPS)
   =================================================================== */

const makingProcess = [
  {
    step: 1,
    title: 'Clay Extraction & Preparation',
    icon: Layers,
    description: 'Gray clay is dug from deposits near Fes, soaked in water for several days, then kneaded by foot to remove air bubbles and impurities. The clay is aged for 2-4 weeks to achieve optimal plasticity. Different clay sources produce subtly different base colors after firing.',
  },
  {
    step: 2,
    title: 'Shaping the Square Tiles',
    icon: Ruler,
    description: 'The prepared clay is pressed into square molds, typically 10x10 cm or 15x15 cm. Each tile is about 1.5 cm thick. The squares are left to air-dry on wooden racks in the sun for 3-5 days until they reach a leather-hard consistency suitable for glazing.',
  },
  {
    step: 3,
    title: 'Enamel Glazing',
    icon: Paintbrush,
    description: 'Each dried tile is dipped into a vat of colored enamel glaze made from natural minerals. Cobalt produces blue, copper makes green, antimony creates yellow, and iron oxide gives red. The glaze is applied to one face only, leaving the back rough for better adhesion.',
  },
  {
    step: 4,
    title: 'Kiln Firing',
    icon: Flame,
    description: 'Glazed tiles are stacked in traditional wood-fired kilns and fired at 1,050-1,100 degrees Celsius for 8-10 hours. The firing vitrifies the glaze, creating the characteristic glossy, waterproof surface. Temperature control is critical because even small variations produce different color shades.',
  },
  {
    step: 5,
    title: 'Hand-Cutting (Tqshir)',
    icon: Scissors,
    description: 'This is the most skilled step. A master cutter (maalem) places a fired tile face-down and chips it into precise geometric shapes using a sharp hammer called a menqash. An experienced maalem can cut 400-500 pieces per day. Each shape must be exact for the pattern to tessellate perfectly.',
  },
  {
    step: 6,
    title: 'Pattern Assembly (Trkib)',
    icon: Hexagon,
    description: 'Cut pieces are arranged face-down in a flat bed of fine sand, following a geometric pattern drawn on paper or memorized by the artisan. The pieces are placed like a jigsaw puzzle, with tiny gaps between them. A master can assemble roughly one square meter of complex pattern per day.',
  },
  {
    step: 7,
    title: 'Plaster Backing & Installation',
    icon: Hammer,
    description: 'Once the pattern is complete, a layer of plaster mixed with cement is poured over the backs of the tiles to lock them together as a solid panel. After setting for 24 hours, the panel is flipped over, sand is brushed away, and the finished mosaic is revealed. Panels are then mounted on walls or floors with mortar.',
  },
] as const;

/* ===================================================================
   DATA: LANDMARK SITES
   =================================================================== */

const landmarkSites = [
  {
    name: 'Bou Inania Madrasa, Fes',
    icon: Star,
    built: '1351-1356 (Marinid dynasty)',
    highlight: 'Floor-to-ceiling zellige covering the entire courtyard, featuring the finest 14th-century star patterns',
    description: 'Considered the pinnacle of Moroccan zellige artistry. Every surface of the central courtyard is covered in intricate mosaic, transitioning from zellige at the base through carved stucco in the middle to carved cedarwood above. The 16-point star patterns here are among the most complex ever created.',
    entry: 'From 70 MAD',
  },
  {
    name: 'Medersa Attarine, Fes',
    icon: Award,
    built: '1325 (Marinid dynasty)',
    highlight: 'Exquisite zellige fountain basin with concentric star patterns in 10+ colors',
    description: 'This intimate theological school features some of the most refined zellige work in Morocco. The central courtyard fountain is a masterwork of radial zellige design. The quality of the tile cutting here is exceptionally fine, with joints so tight they appear seamless.',
    entry: 'From 30 MAD',
  },
  {
    name: 'Bahia Palace, Marrakech',
    icon: Building,
    built: '1866-1900',
    highlight: 'Vast zellige floors and dados across 150+ rooms, blending Fassi and Marrakchi styles',
    description: 'Built over 14 years by Grand Vizier Si Moussa, Bahia Palace features acres of zellige tilework across its many courtyards and reception halls. The patterns here show the evolution of zellige into the 19th century, with bolder color combinations and larger-scale designs than the medieval originals.',
    entry: 'From 70 MAD',
  },
  {
    name: 'Hassan II Mosque, Casablanca',
    icon: Globe,
    built: '1986-1993',
    highlight: 'The largest modern zellige installation in the world, 53,000 m² of handmade tilework',
    description: 'Over 10,000 artisans from Fes spent 6 years creating the zellige for this monumental mosque. Traditional techniques were used at an unprecedented scale, with over 53,000 square meters of handmade mosaic covering floors, walls, columns, and fountains. The quality matches any historic monument.',
    entry: 'From 130 MAD (guided tour required)',
  },
  {
    name: 'Royal Palace Gates (Dar el-Makhzen), Fes',
    icon: Eye,
    built: '1960s restoration of 13th-century originals',
    highlight: 'Massive bronze doors flanked by monumental zellige panels in green, blue, and gold',
    description: 'The seven ornamental gates of the Royal Palace in Fes feature towering zellige panels that are among the most photographed in Morocco. The bold green-and-blue color scheme against brass doors creates a stunning contrast. While the palace interior is closed, the gates are freely viewable from Place des Alaouites.',
    entry: 'Free (exterior only)',
  },
] as const;

/* ===================================================================
   DATA: ZELLIGE COLORS
   =================================================================== */

const zelligeColors = [
  {
    color: 'Cobalt Blue (Zraq)',
    mineral: 'Cobalt oxide',
    origin: 'The most iconic zellige color, introduced from Al-Andalus. Ranges from pale sky blue to deep navy depending on cobalt concentration.',
    usage: 'Dominant color in Fes madrasas, fountains, and royal commissions',
  },
  {
    color: 'Emerald Green (Khdhar)',
    mineral: 'Copper oxide',
    origin: 'Represents paradise in Islamic art. The green ranges from bright emerald to deep forest depending on firing temperature and copper content.',
    usage: 'Royal Palace gates, mosque interiors, garden pavilions',
  },
  {
    color: 'Honey Yellow (Sfar)',
    mineral: 'Antimony or iron oxide',
    origin: 'A warm golden tone that creates beautiful contrast with blue and white. The shade varies from pale butter to deep saffron.',
    usage: 'Star points, border accents, and geometric filler shapes',
  },
  {
    color: 'Terracotta Red (Hmar)',
    mineral: 'Iron oxide (natural clay color)',
    origin: 'The natural color of fired Moroccan clay. Some workshops enhance it with additional iron oxide for a deeper, richer red.',
    usage: 'Background fields, border frames, and rustic-style installations',
  },
  {
    color: 'Pure White (Byed)',
    mineral: 'Tin oxide glaze',
    origin: 'Created by applying an opaque tin-based white glaze over the clay. The most expensive base color due to the cost of tin.',
    usage: 'Background color in most patterns, modern monochrome installations',
  },
  {
    color: 'Black (Khal)',
    mineral: 'Manganese dioxide',
    origin: 'A deep brownish-black achieved with manganese. True jet black is difficult and prized. Used sparingly for maximum contrast.',
    usage: 'Outline shapes, star points, and fine detail work',
  },
] as const;

/* ===================================================================
   DATA: WHERE TO BUY
   =================================================================== */

const buyingGuide = [
  {
    location: 'Fes Zellige Workshops (Ain Nokbi)',
    icon: Star,
    priceRange: 'From 800 MAD/m²',
    description: 'The source. Fes has been the zellige capital since the 10th century, and the Ain Nokbi area houses the largest concentration of workshops. Buy direct from the artisans at the best prices. Many workshops will create custom patterns to your specifications and handle international shipping.',
    tip: 'Visit in the morning to see craftsmen at work. Ask to see sample panels of different complexity levels before committing.',
  },
  {
    location: 'Marrakech Artisan Shops',
    icon: ShoppingBag,
    priceRange: 'From 1,200 MAD/m²',
    description: 'Marrakech has many showrooms selling zellige sourced from Fes workshops. Prices are higher than buying direct in Fes, but the selection is curated and shops cater well to international buyers. Several shops in Sidi Ghanem industrial zone specialize in zellige for export.',
    tip: 'Visit Sidi Ghanem for export-quality tiles with international shipping experience. Check shops along Rue Bab Doukkala in the medina for decorative panels.',
  },
  {
    location: 'Meknes & Tetouan Workshops',
    icon: MapPin,
    priceRange: 'From 700 MAD/m²',
    description: 'Meknes has a smaller but excellent zellige tradition, with workshops near the Bab Mansour gate area. Tetouan in the north produces zellige with a distinct Andalusian influence, featuring finer cuts and more delicate patterns. Both cities offer lower prices than Fes or Marrakech.',
    tip: 'Meknes workshops are less touristy and more willing to negotiate on bulk orders.',
  },
  {
    location: 'Online & International Dealers',
    icon: Globe,
    priceRange: 'From 150-400 USD/m²',
    description: 'Several Moroccan companies now sell zellige internationally through websites and showrooms in Europe and North America. Prices are significantly higher but include shipping, customs, and quality guarantees. Companies like Mosaic del Sur and Zellige Marocain have established reputations.',
    tip: 'Order samples before committing to a large order. Color accuracy in online photos is often unreliable for hand-glazed tiles.',
  },
] as const;

/* ===================================================================
   DATA: WORKSHOPS TO VISIT
   =================================================================== */

const workshopVisits = [
  {
    name: 'Art Naji, Fes',
    icon: Award,
    description: 'One of the oldest and most respected zellige workshops in Fes. Three generations of the Naji family have produced tilework for palaces, hotels, and mosques worldwide. Visitors can observe the entire 7-step process and try cutting tiles under a master&apos;s guidance.',
    duration: '1.5-2 hours',
    price: 'Free entry (purchases expected)',
    bookingRequired: false,
  },
  {
    name: 'Zellige Workshop, Ain Nokbi, Fes',
    icon: Users,
    description: 'The cooperative houses over 30 zellige artisans working in open-air ateliers. Watch tiles being cut, patterns assembled, and panels finished. The cooperative offers competitive prices on finished panels, custom orders, and individual tile chips for small projects.',
    duration: '1-2 hours',
    price: 'Free entry',
    bookingRequired: false,
  },
  {
    name: 'Hands-On Zellige Class, Fes Medina',
    icon: Hammer,
    description: 'Several cultural centers in the Fes medina offer 2-3 hour workshops where you learn to cut tiles with a menqash and assemble a small coaster or trivet pattern. All materials provided, and you keep your creation. Classes are available in English and French.',
    duration: '2-3 hours',
    price: 'From 300 MAD per person',
    bookingRequired: true,
  },
  {
    name: 'Marrakech Zellige Experience',
    icon: Paintbrush,
    description: 'Luxury riads and cultural tour operators in Marrakech arrange private zellige workshops with master craftsmen. These premium experiences include tea ceremony, historical explanation, hands-on cutting and assembly, and a finished piece shipped to your address.',
    duration: '3-4 hours',
    price: 'From 600 MAD per person',
    bookingRequired: true,
  },
] as const;

/* ===================================================================
   DATA: PRICE GUIDE
   =================================================================== */

const priceGuide = [
  { item: 'Plain single-color tiles (per m²)', price: 'From 800 MAD', notes: 'Simple square or rectangular cuts, one glaze color' },
  { item: 'Two-color geometric pattern (per m²)', price: 'From 1,500 MAD', notes: 'Basic star or lattice with two contrasting colors' },
  { item: 'Multi-color 8-point star (per m²)', price: 'From 2,500 MAD', notes: '4-6 colors, standard Fassi pattern' },
  { item: '16-point star or complex pattern (per m²)', price: 'From 4,000 MAD', notes: 'Master-level work, 6-10 colors, intricate cuts' },
  { item: 'Custom floral/curvilinear design (per m²)', price: 'From 6,000 MAD', notes: 'Highest complexity, curved cuts, bespoke pattern' },
  { item: 'Decorative panel (30x30 cm)', price: 'From 250 MAD', notes: 'Pre-assembled on plaster backing, ready to hang' },
  { item: 'Fountain basin with zellige', price: 'From 8,000 MAD', notes: 'Small wall fountain, fully tiled and assembled' },
  { item: 'Individual tile chips (100 pieces)', price: 'From 80 MAD', notes: 'Loose cut pieces for DIY projects or samples' },
] as const;

/* ===================================================================
   COMPONENT
   =================================================================== */

export default function MoroccoZelligeTilesPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[480px]">
        <img src="/images/art-moroccan-pattern-zellige.webp" alt="Intricate Moroccan zellige mosaic tilework with geometric star patterns in vivid blue, green, white, and gold" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
            Moroccan Zellige Tiles
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl max-w-2xl opacity-90">
            A thousand years of hand-cut mosaic art -- from the workshops of Fes to the palaces of kings
          </p>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <nav aria-label="Breadcrumb" className="container-morocco py-4 text-sm text-gray-500">
        <ol className="flex items-center gap-1 flex-wrap">
          <li className="flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5" />
          <li className="text-[#A0522D] font-medium">Moroccan Zellige Tiles Guide</li>
        </ol>
      </nav>

      {/* ── INTRO ── */}
      <section className="container-morocco py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Art of Moroccan Zellige Mosaic
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zellige (also spelled <em>zellij</em>) is Morocco&apos;s most distinctive decorative art form -- a tradition of hand-cut mosaic tilework that transforms simple glazed clay into dazzling geometric masterpieces. Originating in Fes over a thousand years ago, zellige adorns every surface of Morocco&apos;s greatest mosques, palaces, madrasas, and fountains, turning architecture into living mathematics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each tiny tile chip is individually hand-cut from a larger glazed square using nothing more than a sharp hammer and trained eyes. The pieces are then assembled face-down into impossibly precise geometric patterns -- 8-point stars, 16-point rosettes, interlocking lattices -- before being set in plaster. No two installations are exactly alike, because every piece carries the subtle marks of the human hand.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In 2019, UNESCO recognized Moroccan zellige as an Intangible Cultural Heritage of Humanity, acknowledging both its artistic significance and the ongoing efforts by Moroccan artisans to keep this ancient craft alive. Today, zellige is experiencing a global renaissance as interior designers worldwide embrace its handmade beauty for modern kitchens, bathrooms, and living spaces.
          </p>
        </div>
      </section>

      {/* ── HISTORY ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-7 h-7 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              History of Zellige: A Millennium of Mosaic Art
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The origins of zellige trace back to the 10th century in Fes, Morocco, where artisans adapted techniques from Roman mosaics and Middle Eastern glazed ceramics to create something entirely new. The earliest zellige used only white and brown tiles, but the craft rapidly evolved under the patronage of successive Moroccan dynasties.
              </p>
              <p>
                The <strong>Almoravid dynasty (11th-12th century)</strong> introduced colored glazes imported from Al-Andalus (Islamic Spain). When Muslim and Jewish artisans fled Spain during the Reconquista, many settled in Fes, bringing Andalusian decorative traditions that fused with Moroccan techniques to create the golden age of zellige.
              </p>
              <p>
                Under the <strong>Marinid dynasty (13th-15th century)</strong>, zellige reached its artistic peak. The great madrasas and mosques of Fes -- Bou Inania, Al-Attarine, and Medersa Seffarine -- showcase patterns of extraordinary complexity, with some panels featuring over 1,500 individual pieces per square meter in up to 10 different colors.
              </p>
              <p>
                The geometric patterns of zellige are rooted in Islamic art&apos;s preference for abstract ornamentation over figurative imagery. Every zellige pattern is based on mathematical principles of symmetry, tessellation, and the division of circles -- reflecting the Islamic philosophical concept of divine order expressed through geometry.
              </p>
            </div>

            <div className="card-moroccan p-0 overflow-hidden">
              <img src="/images/detail-zellige-mosaic.webp" alt="Close-up detail of historic zellige mosaic showing hand-cut geometric star pattern in a Fes madrasa" className="w-full h-64 object-cover" />
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900 mb-2">Key Historical Milestones</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>10th century:</strong> First zellige appears in Fes, using white and brown tiles</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>11th-12th century:</strong> Almoravids introduce colored glazes from Al-Andalus</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>13th-15th century:</strong> Marinid golden age -- Bou Inania, Attarine masterpieces</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>16th-17th century:</strong> Saadian dynasty expands zellige to Marrakech palaces</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>1986-1993:</strong> 10,000 artisans create 53,000 m² of zellige for Hassan II Mosque</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>2019:</strong> UNESCO recognizes zellige as Intangible Cultural Heritage</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7-STEP PROCESS ── */}
      <section className="container-morocco py-14">
        <div className="flex items-center gap-3 mb-3">
          <Hammer className="w-7 h-7 text-[#A0522D]" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
            How Zellige Tiles Are Made: The 7-Step Process
          </h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Every zellige tile is handmade using techniques virtually unchanged since the 10th century. The process from raw clay to finished installation takes 4-6 weeks.
        </p>

        <div className="space-y-6">
          {makingProcess.map((s) => (
            <div key={s.step} className="card-moroccan p-5 flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#A0522D]/10 rounded-full flex items-center justify-center">
                <span className="text-[#A0522D] font-bold text-lg">{s.step}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <s.icon className="w-5 h-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#C4960C]/10 border border-[#C4960C]/30 rounded-lg p-5 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#C4960C] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            <strong>Master artisan insight:</strong> The most critical skill is cutting (step 5). An apprentice spends 8-12 years learning to cut tiles precisely before being allowed to work on important commissions. A seasoned <em>maalem</em> can identify the exact cutting angle needed just by hearing the sound of the hammer on terracotta.
          </p>
        </div>
      </section>

      {/* ── PATTERNS ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Hexagon className="w-7 h-7 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              Types of Zellige Patterns
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Moroccan zellige encompasses dozens of traditional patterns, each based on mathematical principles of symmetry and tessellation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zelligePatterns.map((p) => (
              <div key={p.name} className="card-moroccan p-5 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <p.icon className="w-5 h-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900">{p.name}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3 flex-grow">{p.description}</p>
                <div className="space-y-1 text-xs text-gray-500 border-t pt-3">
                  <p><strong>Complexity:</strong> {p.complexity}</p>
                  <p><strong>Pieces:</strong> {p.pieces}</p>
                  <p><strong>Colors:</strong> {p.colors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZELLIGE COLORS ── */}
      <section className="container-morocco py-14">
        <div className="flex items-center gap-3 mb-3">
          <Paintbrush className="w-7 h-7 text-[#A0522D]" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
            Traditional Zellige Colors & Their Origins
          </h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Each zellige color comes from natural mineral pigments mixed into the enamel glaze. The palette has remained largely unchanged for centuries.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {zelligeColors.map((c) => (
            <div key={c.color} className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 mb-1">{c.color}</h3>
              <p className="text-xs text-[#A0522D] font-medium mb-2">Mineral: {c.mineral}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">{c.origin}</p>
              <p className="text-xs text-gray-500"><strong>Used for:</strong> {c.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE BREAK ── */}
      <section className="relative h-[40vh] min-h-[300px]">
        <img src="/images/detail-zellige-pattern.webp" alt="Zellige tile pattern at a traditional Moroccan palace showing star and rosette motifs in vibrant colors" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <p className="font-[family-name:var(--font-display)] text-white text-2xl md:text-3xl font-bold text-center px-4 max-w-2xl">
            &ldquo;Zellige is where mathematics becomes poetry in clay and color.&rdquo;
          </p>
        </div>
      </section>

      {/* ── LANDMARK SITES ── */}
      <section className="container-morocco py-14">
        <div className="flex items-center gap-3 mb-3">
          <Eye className="w-7 h-7 text-[#A0522D]" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
            Where to See the Best Zellige in Morocco
          </h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-2xl">
          These five sites showcase the finest zellige tilework in Morocco, spanning seven centuries of craftsmanship.
        </p>

        <div className="space-y-6">
          {landmarkSites.map((site) => (
            <div key={site.name} className="card-moroccan p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#C4960C]/10 rounded-full flex items-center justify-center">
                  <site.icon className="w-5 h-5 text-[#C4960C]" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900 mb-1">{site.name}</h3>
                  <p className="text-xs text-[#A0522D] font-medium mb-2">{site.built} | Entry: {site.entry}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">{site.description}</p>
                  <div className="flex items-start gap-2 bg-[#FAF8F5] rounded p-3">
                    <Sparkles className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-600"><strong>Highlight:</strong> {site.highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-4 flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5" />
          Entry prices are approximate and may vary by season. Seasonal pricing can change without notice.
        </p>
      </section>

      {/* ── WHERE TO BUY ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag className="w-7 h-7 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              Where to Buy Zellige Tiles in Morocco
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Whether you want a small decorative panel or enough tiles to renovate a kitchen, here is where to shop.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {buyingGuide.map((b) => (
              <div key={b.location} className="card-moroccan p-5 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <b.icon className="w-5 h-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900">{b.location}</h3>
                </div>
                <p className="text-sm font-medium text-[#A0522D] mb-2">{b.priceRange}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3 flex-grow">{b.description}</p>
                <div className="bg-[#FAF8F5] rounded p-3 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-600"><strong>Tip:</strong> {b.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICE GUIDE ── */}
      <section className="container-morocco py-14">
        <div className="flex items-center gap-3 mb-3">
          <DollarSign className="w-7 h-7 text-[#A0522D]" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
            Zellige Tile Price Guide
          </h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Prices vary by pattern complexity, number of colors, workshop reputation, and order size. All prices are for purchasing directly from workshops in Morocco.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-[#A0522D]/20">
                <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-gray-900">Item</th>
                <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-gray-900">Price</th>
                <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody>
              {priceGuide.map((row) => (
                <tr key={row.item} className="border-b border-gray-100 hover:bg-[#FAF8F5]/50">
                  <td className="py-3 px-4 text-gray-800">{row.item}</td>
                  <td className="py-3 px-4 text-[#A0522D] font-medium whitespace-nowrap">{row.price}</td>
                  <td className="py-3 px-4 text-gray-500">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 mt-4 flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5" />
          Prices are approximate and based on 2025-2026 workshop rates. Seasonal pricing can change. Bulk orders (10+ m²) typically receive 10-20% discounts.
        </p>
      </section>

      {/* ── WORKSHOPS TO VISIT ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-7 h-7 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              Zellige Workshops You Can Visit
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Watching zellige artisans at work is one of Morocco&apos;s most fascinating cultural experiences. These workshops welcome visitors.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {workshopVisits.map((w) => (
              <div key={w.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <w.icon className="w-5 h-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900">{w.name}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{w.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {w.duration}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {w.price}</span>
                  <span className="flex items-center gap-1"><Info className="w-3.5 h-3.5" /> {w.bookingRequired ? 'Booking required' : 'Walk-in welcome'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHIPPING INTERNATIONALLY ── */}
      <section className="container-morocco py-14">
        <div className="flex items-center gap-3 mb-3">
          <Plane className="w-7 h-7 text-[#A0522D]" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
            Shipping Zellige Tiles Internationally
          </h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Many buyers purchase zellige in Morocco for international projects. Here is what you need to know about shipping.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-moroccan p-5">
            <Package className="w-6 h-6 text-[#C4960C] mb-3" />
            <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 mb-2">Packing & Crating</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Established workshops pack tiles in custom wooden crates with foam padding between layers. Pre-assembled panels on plaster backing are the safest to ship. Loose tile chips should be wrapped individually. Request double-walled crating for fragile patterns.
            </p>
          </div>

          <div className="card-moroccan p-5">
            <Globe className="w-6 h-6 text-[#C4960C] mb-3" />
            <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 mb-2">Shipping Costs & Times</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Sea freight: from 2,000 MAD for small orders, 4-8 weeks delivery. Air freight: from 5,000 MAD, 7-14 days. To Europe expect 3-5 weeks by sea. To North America or Asia, 6-8 weeks. Always order 10-15% extra to account for breakage during transit and installation cuts.
            </p>
          </div>

          <div className="card-moroccan p-5">
            <ShieldCheck className="w-6 h-6 text-[#C4960C] mb-3" />
            <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 mb-2">Customs & Import Duties</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Zellige tiles are classified as decorative ceramics for customs purposes. Import duties vary by country: EU averages 4-6%, US 5-8%, UK 6%. Most workshops provide commercial invoices and certificates of origin. Some countries require fumigation certificates for wooden crating.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-[#A0522D]/5 border border-[#A0522D]/20 rounded-lg p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> Before purchasing large quantities for export, confirm that your workshop has experience with international shipping. Ask to see photos of their packing process and request references from previous international clients. Reputable workshops like Art Naji in Fes ship worldwide regularly.
          </p>
        </div>
      </section>

      {/* ── BUYING TIPS ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-7 h-7 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              Essential Buying Tips for Zellige Tiles
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Whether you are buying a decorative souvenir or sourcing tiles for a renovation project, these tips will help you get the best quality and value.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#A0522D]" /> How to Spot Quality Zellige
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><Star className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" /> <span>Even thickness across all tiles (about 1.5 cm)</span></li>
                <li className="flex items-start gap-2"><Star className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" /> <span>Smooth, glossy glaze without bubbles or bare patches</span></li>
                <li className="flex items-start gap-2"><Star className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" /> <span>Clean, sharp cut edges with no crumbling</span></li>
                <li className="flex items-start gap-2"><Star className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" /> <span>Consistent color saturation within each batch</span></li>
                <li className="flex items-start gap-2"><Star className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" /> <span>Tight joints in assembled panels (under 1 mm gaps)</span></li>
              </ul>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#C4960C]" /> Common Mistakes to Avoid
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span>Do not buy without seeing a finished sample panel first</span></li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span>Avoid ordering exact quantities -- always add 10-15% for waste</span></li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span>Do not assume all workshops ship internationally -- confirm first</span></li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span>Never accept machine-cut tiles sold as handmade (check cut edges)</span></li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span>Get written quotes with pattern, colors, quantity, and delivery date</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODERN INTERIOR DESIGN ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-7 h-7 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              Zellige in Modern Interior Design
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Once confined to palaces and mosques, zellige has become one of the most sought-after materials in contemporary design worldwide.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The global interior design world has embraced zellige for its <strong>handmade imperfections</strong> -- the slight color variations, uneven surfaces, and organic texture that machine-made tiles cannot replicate. Each tile reflects light differently, creating a living, breathing surface that changes throughout the day.
              </p>
              <p>
                <strong>Kitchen backsplashes</strong> are the most popular application in Western homes. Monochromatic zellige in white, cream, or sage green provides a subtle textural backdrop that elevates any kitchen. The waterproof glaze makes it practical, while the artisanal character adds warmth.
              </p>
              <p>
                <strong>Bathroom walls and shower surrounds</strong> are another natural fit. The water-resistant properties of zellige have been proven over centuries in Moroccan hammams and fountain courts. Full-wall zellige in a bathroom creates a spa-like atmosphere with authentic heritage character.
              </p>
              <p>
                <strong>Fireplace surrounds, accent walls, and entryway floors</strong> round out the most common modern applications. Designers increasingly use zellige as a statement material, combining traditional Moroccan patterns with contemporary furniture and fixtures for a curated, collected look.
              </p>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 mb-3">Popular Modern Zellige Styles</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>Monochrome white:</strong> Subtle texture, works with any interior style</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>Terracotta/clay:</strong> Warm earth tones for rustic and Mediterranean interiors</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>Sage green:</strong> The trending color for 2025-2026 kitchen backsplashes</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>Deep blue:</strong> Classic Fassi blue for statement walls and bathrooms</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" /> <span><strong>Multi-color geometric:</strong> Traditional patterns as feature panels or fireplace surrounds</span></li>
                </ul>
              </div>

              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 mb-3">Design Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" /> Order samples first -- screen colors differ from reality</li>
                  <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" /> Use a tile installer experienced with handmade tiles</li>
                  <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" /> Mix tiles from multiple boxes to distribute color variation evenly</li>
                  <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" /> Seal unglazed terracotta zellige before grouting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="container-morocco py-14">
        <div className="flex items-center gap-3 mb-8">
          <Search className="w-7 h-7 text-[#A0522D]" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
            Frequently Asked Questions About Zellige
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl">
          {faqJsonLd.mainEntity.map((faq, i) => (
            <details key={i} className="card-moroccan p-5 group">
              <summary className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                {faq.name}
                <ChevronRight className="w-4 h-4 text-[#A0522D] transition-transform group-open:rotate-90 flex-shrink-0" />
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-7 h-7 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              Related Morocco Guides
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: '/crafts', title: 'Moroccan Crafts & Artisans', desc: 'Explore the full range of traditional Moroccan handicrafts from leatherwork to woodcarving.' },
              { href: '/architecture', title: 'Moroccan Architecture Guide', desc: 'Discover the riads, kasbahs, mosques, and palaces that define Morocco\'s built heritage.' },
              { href: '/morocco-pottery-guide', title: 'Morocco Pottery Guide', desc: 'Fes blue-and-white, Safi polychrome, Tamegroute green -- the complete ceramics guide.' },
              { href: '/what-to-buy-morocco', title: 'What to Buy in Morocco', desc: 'The ultimate shopping guide: souvenirs, crafts, spices, and what to avoid.' },
              { href: '/fes-guide', title: 'Fes Travel Guide', desc: 'Plan your visit to the spiritual and artisanal capital of Morocco.' },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900 group-hover:text-[#A0522D] transition-colors mb-2 flex items-center gap-2">
                  {g.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600">{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Explore Morocco&apos;s Zellige Heritage?
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            From the medieval madrasas of Fes to hands-on workshops where you can try cutting tiles yourself, Morocco&apos;s zellige tradition is waiting to be discovered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fes-guide" className="inline-flex items-center gap-2 bg-[#A0522D] text-white px-6 py-3 rounded-lg hover:bg-[#8B4726] transition-colors font-medium">
              <MapPin className="w-4 h-4" /> Explore Fes
            </Link>
            <Link href="/crafts" className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-[#A0522D]">
              <Heart className="w-4 h-4" /> All Moroccan Crafts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

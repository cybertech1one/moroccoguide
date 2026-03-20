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
  Droplets,
  CircleDot,
  Hammer,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Pottery Guide 2026 | Fes Ceramics, Safi & Buying Tips',
  description:
    'The complete guide to Moroccan pottery and ceramics. Discover Fes blue-and-white, Safi polychrome, Tamegroute green, and zellige tiles. Workshop visits, price guide from 20 MAD, authenticity tips, and how to ship pottery home safely.',
  keywords: [
    'Moroccan pottery',
    'Morocco ceramics guide',
    'Fes pottery',
    'Fes blue ceramics',
    'Safi pottery Morocco',
    'Tamegroute green pottery',
    'zellige tiles Morocco',
    'Moroccan tagine pot',
    'buying pottery Morocco',
    'Morocco pottery workshops',
    'handmade Moroccan ceramics',
    'Moroccan tiles',
    'Sale pottery Morocco',
    'Moroccan pottery prices',
    'shipping pottery Morocco',
    'authentic Moroccan pottery',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-pottery-guide`,
  },
  openGraph: {
    title: 'Morocco Pottery Guide 2026 | Fes Ceramics, Safi & Prices',
    description:
      'Everything you need to know about buying authentic Moroccan pottery. Fes blue-and-white, Safi polychrome, Tamegroute green, zellige tiles, workshops, prices, and shipping tips.',
    url: `${BASE_URL}/morocco-pottery-guide`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/photo-morocco-pottery.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful hand-painted Moroccan pottery and ceramics displayed at a traditional workshop in Fes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Pottery Guide | Fes Ceramics, Safi & Buying Tips',
    description:
      'Complete guide to Moroccan pottery: Fes blue-and-white, Safi polychrome, Tamegroute green, workshops, prices from 20 MAD, and shipping tips.',
    images: [`${BASE_URL}/images/photo-morocco-pottery.webp`],
  },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-pottery-guide`,
  name: 'Morocco Pottery Guide 2026 | Fes Ceramics, Safi & Buying Tips',
  description:
    'The complete guide to buying authentic Moroccan pottery and ceramics. Types, workshops, prices, authenticity tests, and shipping advice.',
  url: `${BASE_URL}/morocco-pottery-guide`,
  image: `${BASE_URL}/images/photo-morocco-pottery.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-pottery-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Pottery Guide', item: `${BASE_URL}/morocco-pottery-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Fes pottery unique?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fes pottery is distinguished by its cobalt blue-and-white designs inspired by Andalusian and Islamic geometric patterns. Artisans use a centuries-old technique of hand-painting intricate motifs on white-glazed earthenware, fired in traditional wood-burning kilns at over 1,000 degrees Celsius.' },
    },
    {
      '@type': 'Question',
      name: 'How much does Moroccan pottery cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Small bowls start from 20 MAD, medium plates from 50 MAD, tagine pots from 80 MAD, and large decorative platters from 200 MAD. Handmade pieces from master artisans in Fes can reach 2,000 MAD or more. Prices vary by quality, size, and intricacy of the design.' },
    },
    {
      '@type': 'Question',
      name: 'Can you ship Moroccan pottery home safely?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many pottery workshops and established shops offer international shipping with professional packing. Expect to pay from 300-800 MAD for shipping depending on weight and destination. Items are wrapped in bubble wrap, packed in straw, and placed in sturdy cardboard boxes. Shipping takes 2-6 weeks by sea or 5-10 days by air.' },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if Moroccan pottery is handmade?',
      acceptedAnswer: { '@type': 'Answer', text: 'Handmade pottery has slight irregularities in shape, brush strokes visible under the glaze, uneven weight distribution, and a rougher bottom where it sat on the kiln shelf. Factory pieces are perfectly uniform, lighter in weight, and have printed (not painted) designs with no visible brush marks.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Fes and Safi pottery?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fes pottery is known for blue-and-white geometric and floral patterns on a white base. Safi pottery is more colorful, using polychrome glazes in yellows, greens, blues, and browns with bolder, more modern designs. Safi pieces tend to be more affordable than Fes ceramics.' },
    },
    {
      '@type': 'Question',
      name: 'Is Moroccan pottery food safe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Traditional Moroccan pottery uses lead-based glazes that may not meet modern food safety standards. For daily cooking and eating, look for pieces labeled "food safe" or "sans plomb" (lead-free). Decorative pieces with bright glazes are best used for display. Many workshops now produce lead-free lines specifically for export.' },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to buy pottery in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fes is the pottery capital with the widest selection and highest quality. Visit the Ain Nokbi pottery quarter to buy direct from workshops. Safi is best for colorful polychrome pieces at lower prices. Tamegroute near Zagora is the only source for distinctive green-glazed pottery. Sale near Rabat offers good quality at moderate prices.' },
    },
    {
      '@type': 'Question',
      name: 'Can I visit a pottery workshop in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, most pottery cities welcome visitors to their workshops. In Fes, the Ain Nokbi pottery cooperative offers free tours. Safi has an entire pottery quarter (Colline des Potiers) open to visitors. Many workshops let you try throwing a pot on the wheel or painting a tile. Workshop visits are usually free, with the expectation you may purchase something.' },
    },
  ],
};

/* ===================================================================
   DATA: TYPES OF MOROCCAN POTTERY
   =================================================================== */

const potteryTypes = [
  {
    name: 'Fes Blue-and-White',
    region: 'Fes',
    icon: Droplets,
    colors: 'Cobalt blue on white',
    signature: 'Intricate geometric and floral arabesques, Andalusian influence',
    description:
      'The most iconic Moroccan pottery style. Artisans in Fes have perfected this cobalt blue-on-white tradition since the 14th century, drawing from Andalusian, Persian, and Islamic design. Each piece is hand-painted with fine brushes, featuring complex interlocking patterns that can take days to complete.',
    priceRange: 'From 80 MAD for small bowls to 3,000+ MAD for master-crafted platters',
  },
  {
    name: 'Safi Polychrome',
    region: 'Safi',
    icon: Paintbrush,
    colors: 'Yellow, green, blue, brown, red',
    signature: 'Bold multicolored designs, modern interpretations, animal motifs',
    description:
      'Safi is Morocco&apos;s second pottery capital, known for vibrant polychrome ceramics. The style is more colorful and contemporary than Fes, with artisans experimenting freely with shapes and patterns. The Colline des Potiers (Potters&apos; Hill) houses dozens of workshops where you can watch the entire process.',
    priceRange: 'From 30 MAD for small pieces to 1,500 MAD for large decorative items',
  },
  {
    name: 'Tamegroute Green',
    region: 'Tamegroute (Draa Valley)',
    icon: Sparkles,
    colors: 'Distinctive jade and olive green',
    signature: 'Rustic, organic shapes with unique green glaze from local minerals',
    description:
      'Produced exclusively in the small oasis village of Tamegroute near Zagora, this pottery gets its signature green color from a mix of manganese, copper, and local silica sand. The glaze is unpredictable, creating unique drip patterns on each piece. No two items are alike, making each one a collector&apos;s piece.',
    priceRange: 'From 40 MAD for small bowls to 800 MAD for large vessels',
  },
  {
    name: 'Sale Pottery',
    region: 'Sale (near Rabat)',
    icon: CircleDot,
    colors: 'Earth tones, blue, green, cream',
    signature: 'Refined forms, Berber-influenced geometric patterns',
    description:
      'The coastal city of Sale has a pottery tradition dating back to the Merinid dynasty. Sale ceramics blend Berber geometric motifs with refined urban aesthetics. The pottery here tends toward elegant, understated designs with earth-toned glazes and clean lines, favored by collectors who appreciate subtlety over the bold patterns of Fes.',
    priceRange: 'From 50 MAD for small items to 1,200 MAD for fine pieces',
  },
  {
    name: 'Zellige Mosaic Tiles',
    region: 'Fes, Meknes, Tetouan',
    icon: Layers,
    colors: 'Multi-colored geometric chips on plaster',
    signature: 'Hand-cut tessellated mosaic patterns, architectural decoration',
    description:
      'Zellige is the art of hand-cut mosaic tilework that adorns mosques, palaces, riads, and fountains across Morocco. Each tiny tile chip is individually hand-cut from larger glazed squares using a sharp hammer, then assembled face-down into intricate geometric star and rosette patterns. This ancient art requires years of apprenticeship to master.',
    priceRange: 'From 800 MAD per square meter for simple patterns to 5,000+ MAD for complex designs',
  },
] as const;

/* ===================================================================
   DATA: POTTERY CITIES
   =================================================================== */

const potteryCities = [
  {
    city: 'Fes',
    nickname: 'The Pottery Capital',
    icon: Star,
    description:
      'Fes is the undisputed capital of Moroccan pottery with a tradition spanning over 700 years. The Ain Nokbi pottery quarter on the outskirts of the medina houses dozens of cooperatives and workshops where you can watch every stage of production. The city is famous for its blue-and-white ceramics, but also produces multicolored pieces and zellige tiles.',
    mustVisit: 'Ain Nokbi Pottery Cooperative, Dar Batha Museum (historic ceramics collection), medina pottery shops along Talaa Kebira',
    tip: 'Visit Ain Nokbi in the morning when workshops are most active. Ask for a demonstration of the entire process from clay preparation to kiln firing.',
  },
  {
    city: 'Safi',
    nickname: 'The Atlantic Potter\'s City',
    icon: Award,
    description:
      'Safi is Morocco&apos;s oldest pottery center, with a tradition predating even Fes. The Colline des Potiers (Potters&apos; Hill) is an entire hillside district of workshops, kilns, and showrooms. Safi pottery is known for its bold polychrome glazes and more affordable prices than Fes. The annual pottery festival in July celebrates the craft with exhibitions and demonstrations.',
    mustVisit: 'Colline des Potiers, National Ceramics Museum, Kechla fortress ceramics exhibition',
    tip: 'Walk up the hill to the smaller workshops at the top. Prices are lower and artisans have more time to explain their work.',
  },
  {
    city: 'Tamegroute',
    nickname: 'The Green Glaze Village',
    icon: Sparkles,
    description:
      'This remote oasis village in the Draa Valley is the only place in Morocco that produces the distinctive green-glazed pottery. A handful of family workshops have passed down the secret glaze recipe for generations. The village is also home to a famous zaouia (religious school) with a library of ancient manuscripts, making it a worthwhile cultural stop on any desert itinerary.',
    mustVisit: 'Maison de Poterie (main pottery cooperative), Zaouia Naciria library, nearby Saharan dunes',
    tip: 'Combine with a trip to Zagora or the Erg Chigaga dunes. Tamegroute is a 20-minute drive from Zagora.',
  },
  {
    city: 'Sale',
    nickname: 'The Refined Tradition',
    icon: Building,
    description:
      'Just across the river from Rabat, Sale has maintained a quieter pottery tradition focused on quality over quantity. Sale&apos;s potters produce elegant pieces with subtle Berber-inspired geometric patterns in earth tones. The Oulja pottery complex on the outskirts has a cluster of workshops and showrooms. Sale ceramics are favored by interior designers for their understated elegance.',
    mustVisit: 'Complexe des Potiers de l\'Oulja, Sale medina artisan shops, Centre de Formation des Arts Traditionnels',
    tip: 'The Oulja complex has fixed prices displayed, making it a good first stop to learn fair pricing before bargaining elsewhere.',
  },
  {
    city: 'Ourika Valley',
    nickname: 'The Mountain Pottery',
    icon: Globe,
    description:
      'The Ourika Valley in the High Atlas foothills near Marrakech is home to several Berber pottery workshops. The pottery here is more rustic and functional than urban styles, with simple geometric decorations in earth tones. Women&apos;s cooperatives in the valley produce traditional cooking vessels and decorative items, providing an important income source for mountain communities.',
    mustVisit: 'Berber pottery cooperatives along the valley road, weekly Berber market (Monday), Setti Fatma waterfalls',
    tip: 'Combine a pottery visit with a day trip from Marrakech to the Ourika Valley. Most tours can include a pottery stop.',
  },
] as const;

/* ===================================================================
   DATA: POTTERY WORKSHOPS
   =================================================================== */

const workshops = [
  {
    name: 'Ain Nokbi Pottery Cooperative, Fes',
    icon: Users,
    description:
      'The largest pottery complex in Morocco with over 60 workshops. Watch artisans shape clay on kick-wheels, hand-paint intricate designs, and fire pieces in traditional wood-burning kilns. Free guided tours are available, and you can try your hand at the pottery wheel.',
    duration: '1-2 hours',
    price: 'Free entry (purchases expected)',
  },
  {
    name: 'Colline des Potiers, Safi',
    icon: Hammer,
    description:
      'An entire hillside quarter dedicated to pottery production. Walk between workshops to see different stages of the process, from raw clay preparation to the final glazing and firing. The kilns here use traditional olive wood fuel that gives Safi pottery its distinctive character.',
    duration: '2-3 hours',
    price: 'Free entry',
  },
  {
    name: 'Tamegroute Pottery Cooperative',
    icon: Sparkles,
    description:
      'A small family-run cooperative in the Draa Valley where the secret of the green glaze has been passed down for generations. Artisans demonstrate the entire process in a compact workspace, from clay extraction near the river to the final firing in beehive-shaped kilns.',
    duration: '30-45 minutes',
    price: 'From 20 MAD donation',
  },
  {
    name: 'Pottery Classes in Marrakech',
    icon: Paintbrush,
    description:
      'Several riads and cultural centers in Marrakech offer hands-on pottery classes where you shape, paint, and glaze your own piece. Classes are led by master potters and include all materials. Your finished piece can be fired and shipped to your home address.',
    duration: '2-3 hours',
    price: 'From 350 MAD per person',
  },
] as const;

/* ===================================================================
   DATA: TRADITIONAL TECHNIQUES
   =================================================================== */

const techniques = [
  {
    step: 'Clay Preparation',
    icon: Layers,
    description: 'Raw clay is dug from local deposits, soaked in water for days, then kneaded and filtered to remove stones and impurities. The clay is aged for weeks or months to improve its workability. Different regions use different clay compositions, which affects the final color and texture.',
  },
  {
    step: 'Wheel Throwing',
    icon: CircleDot,
    description: 'Traditional Moroccan potters use kick-wheels rather than electric wheels. The potter centers the clay, opens it, and shapes the vessel using only hands and simple tools. Large pieces like tagines and platters are thrown in sections and joined together while still wet.',
  },
  {
    step: 'Drying & Shaping',
    icon: Clock,
    description: 'Formed pieces dry slowly in the shade for several days to prevent cracking. During this stage, handles are attached, surfaces are smoothed, and any decorative carving is done. The drying time depends on the piece size and humidity, typically 3-7 days.',
  },
  {
    step: 'Hand-Painting',
    icon: Paintbrush,
    description: 'The most skilled artisans apply intricate geometric and floral designs freehand using fine brushes made from donkey hair. In Fes, painters use cobalt oxide for blue designs on a white tin-oxide glaze. A single large platter can take an experienced painter an entire day to complete.',
  },
  {
    step: 'Glazing',
    icon: Droplets,
    description: 'Pieces are dipped in or brushed with liquid glaze made from silica, metal oxides, and other minerals. The glaze recipe determines the final color: cobalt for blue, copper for green, manganese for brown, and antimony for yellow. Each workshop guards its glaze formulas carefully.',
  },
  {
    step: 'Kiln Firing',
    icon: Flame,
    description: 'Traditional kilns are fueled by olive wood, palm fronds, or sawdust, reaching temperatures of 1,000-1,100 degrees Celsius. Firing takes 8-12 hours, followed by a slow 24-hour cooling period. The kiln atmosphere and fuel type subtly affect the final color and surface quality of each piece.',
  },
] as const;

/* ===================================================================
   DATA: PRICE GUIDE
   =================================================================== */

const potteryPriceGuide = [
  { item: 'Small bowl (12-15 cm)', workshop: 'From 20 MAD', souk: 'From 30-60 MAD', touristShop: 'From 60-120 MAD' },
  { item: 'Medium plate (20-25 cm)', workshop: 'From 50 MAD', souk: 'From 80-150 MAD', touristShop: 'From 150-300 MAD' },
  { item: 'Large decorative platter (35-40 cm)', workshop: 'From 200 MAD', souk: 'From 300-600 MAD', touristShop: 'From 500-1,200 MAD' },
  { item: 'Tagine pot (cooking, medium)', workshop: 'From 80 MAD', souk: 'From 120-250 MAD', touristShop: 'From 200-500 MAD' },
  { item: 'Decorative tagine (painted)', workshop: 'From 150 MAD', souk: 'From 200-400 MAD', touristShop: 'From 350-800 MAD' },
  { item: 'Tamegroute green bowl', workshop: 'From 40 MAD', souk: 'From 80-150 MAD', touristShop: 'From 150-300 MAD' },
  { item: 'Ceramic vase (30 cm)', workshop: 'From 120 MAD', souk: 'From 200-400 MAD', touristShop: 'From 350-700 MAD' },
  { item: 'Zellige tiles (per m\u00B2)', workshop: 'From 800 MAD', souk: 'From 1,200-2,000 MAD', touristShop: 'From 2,000-5,000 MAD' },
  { item: 'Hand-painted tile (single, 10x10 cm)', workshop: 'From 10 MAD', souk: 'From 15-30 MAD', touristShop: 'From 30-60 MAD' },
] as const;

/* ===================================================================
   DATA: AUTHENTICITY CHECKS
   =================================================================== */

const authenticityChecks = [
  {
    test: 'Weight Test',
    icon: Hammer,
    good: 'Handmade pottery feels heavier and denser due to hand-wedged clay. Slight variations in wall thickness indicate hand-throwing on a kick-wheel.',
    bad: 'Factory pieces are lighter and uniformly thin. Machine-pressed pottery has perfectly even walls and a hollow, tinny sound when tapped.',
  },
  {
    test: 'Surface Inspection',
    icon: Eye,
    good: 'Visible brush strokes under the glaze, slight irregularities in the painted pattern. The design follows a consistent style but with natural human variation. Colors may vary slightly across the piece.',
    bad: 'Perfectly uniform printed patterns with no brush marks. Decal transfers feel smooth and flat under the glaze. Machine-stenciled designs are identical on every piece.',
  },
  {
    test: 'Base Check',
    icon: Search,
    good: 'The bottom is rough or unglazed where the piece sat on the kiln shelf. You may see a potter\'s mark scratched into the clay. Slight warping or unevenness is normal.',
    bad: 'A perfectly smooth, glazed bottom. Mass-produced pieces often have a factory stamp or sticker rather than a hand-scratched mark.',
  },
  {
    test: 'Sound Test',
    icon: CircleDot,
    good: 'Tap the rim gently: well-fired pottery produces a clear, ringing tone. Stoneware-temperature pieces ring higher than earthenware. No dull thuds or rattles.',
    bad: 'A dull, flat thud indicates under-fired pottery that may crack or chip easily. Rattling or buzzing suggests hidden cracks inside the wall.',
  },
  {
    test: 'Glaze Quality',
    icon: Droplets,
    good: 'Traditional glazes have depth and slight variations in color intensity. You may see tiny glaze bubbles (pinholes) from the kiln atmosphere, which is normal in handmade pottery.',
    bad: 'Perfectly smooth, uniform, plastic-looking glaze. Bright neon colors indicate industrial pigments rather than traditional metal-oxide glazes.',
  },
  {
    test: 'Price Reality Check',
    icon: DollarSign,
    good: 'A hand-painted Fes plate (25 cm) should cost from 80-200 MAD at the source. If it seems too cheap for its complexity, it is likely factory-made or imported.',
    bad: 'Extremely low prices on intricately decorated pieces. A full set of hand-painted Fes dishes for 100 MAD is almost certainly mass-produced.',
  },
] as const;

/* ===================================================================
   DATA: SHIPPING TIPS
   =================================================================== */

const shippingTips = [
  { tip: 'Buy from established workshops that offer professional packing and international shipping with tracking', icon: Package },
  { tip: 'Each piece should be individually wrapped in bubble wrap, then cushioned with straw or foam in a sturdy box', icon: ShieldCheck },
  { tip: 'Ask about insurance for valuable pieces; most workshops offer it from 50 MAD per shipment', icon: DollarSign },
  { tip: 'Sea freight takes 2-6 weeks but costs less; air freight takes 5-10 days but costs 2-3 times more', icon: Plane },
  { tip: 'For carry-on, wrap small pieces in clothing inside your luggage. Place in the center of the suitcase surrounded by soft items', icon: ShoppingBag },
  { tip: 'Keep receipts and photos of your purchases for customs declaration and insurance claims if needed', icon: CheckCircle },
] as const;

/* ===================================================================
   DATA: BUYING TIPS
   =================================================================== */

const buyingTips = [
  {
    title: 'Start at workshops, not souks',
    icon: Building,
    description: 'Visit a pottery cooperative first (like Ain Nokbi in Fes) to learn fair wholesale prices before shopping in the medina. Workshop prices are typically 40-60% less than souk prices.',
  },
  {
    title: 'Bargain with respect',
    icon: Heart,
    description: 'Counter-offer at about 50% of the first asking price and work toward a middle ground. Never disparage the workmanship as a bargaining tactic. If a price feels fair for the quality, pay it.',
  },
  {
    title: 'Check for cracks before buying',
    icon: AlertTriangle,
    description: 'Run your fingers over the entire surface and hold the piece up to light. Tap the rim and listen for a clear ring. Hairline cracks in the glaze may worsen over time, especially with hot food or water.',
  },
  {
    title: 'Ask about food safety',
    icon: ShieldCheck,
    description: 'If you plan to eat or cook from the pottery, ask if the glaze is lead-free (sans plomb). Many traditional glazes contain lead. Modern export-quality pieces are increasingly produced with food-safe glazes.',
  },
  {
    title: 'Buy multiples for savings',
    icon: DollarSign,
    description: 'Buying a set of 6 plates or a complete tagine dinner service gives you more bargaining power. Artisans and shops typically offer 15-25% discounts on bulk purchases.',
  },
  {
    title: 'Get a certificate of authenticity',
    icon: Award,
    description: 'Reputable cooperatives provide certificates showing the artisan name, technique, and origin. This adds value if you ever resell the piece and helps with customs documentation.',
  },
] as const;

/* ===================================================================
   DATA: FAQ
   =================================================================== */

const faqs = [
  {
    question: 'What makes Fes pottery unique?',
    answer:
      'Fes pottery is distinguished by its cobalt blue-and-white designs inspired by Andalusian and Islamic geometric patterns. Artisans use a centuries-old technique of hand-painting intricate motifs on white-glazed earthenware, fired in traditional wood-burning kilns at over 1,000 degrees Celsius. The Ain Nokbi pottery quarter has been producing these ceramics for over 700 years.',
  },
  {
    question: 'How much does Moroccan pottery cost?',
    answer:
      'Small bowls start from 20 MAD at workshops, medium plates from 50 MAD, tagine pots from 80 MAD, and large decorative platters from 200 MAD. Handmade pieces from master artisans in Fes can reach 2,000-3,000 MAD or more. Souk prices are typically 50-100% higher than workshop prices, and tourist shops charge 2-3 times more. Seasonal pricing may apply during peak tourist months.',
  },
  {
    question: 'Can you ship Moroccan pottery home safely?',
    answer:
      'Yes. Many pottery workshops and established shops offer international shipping with professional packing. Expect to pay from 300-800 MAD for shipping depending on weight and destination. Items are wrapped in bubble wrap, packed in straw, and placed in sturdy cardboard boxes. Shipping takes 2-6 weeks by sea or 5-10 days by air. Always ask about insurance for valuable pieces.',
  },
  {
    question: 'How can I tell if Moroccan pottery is handmade?',
    answer:
      'Handmade pottery has slight irregularities in shape, visible brush strokes under the glaze, uneven weight distribution, and a rough unglazed bottom where it sat on the kiln shelf. Factory pieces are perfectly uniform, lighter in weight, and have printed or decal designs with no visible brush marks. Tap the rim: handmade pottery produces a clear ring.',
  },
  {
    question: 'What is the difference between Fes and Safi pottery?',
    answer:
      'Fes pottery is known for blue-and-white geometric and floral patterns on a white base, using traditional Andalusian-influenced designs. Safi pottery is more colorful, using polychrome glazes in yellows, greens, blues, and browns with bolder, more modern designs including animal motifs. Safi pieces tend to be more affordable than Fes ceramics.',
  },
  {
    question: 'Is Moroccan pottery food safe?',
    answer:
      'Traditional Moroccan pottery uses lead-based glazes that may not meet modern food safety standards. For daily cooking and eating, look for pieces labeled "food safe" or "sans plomb" (lead-free). Decorative pieces with bright glazes are best used for display only. Many workshops now produce lead-free lines specifically for export to the EU and North America.',
  },
  {
    question: 'Where is the best place to buy pottery in Morocco?',
    answer:
      'Fes is the pottery capital with the widest selection and highest quality. Visit the Ain Nokbi pottery quarter to buy direct from workshops at the best prices. Safi is best for colorful polychrome pieces at lower prices. Tamegroute near Zagora is the only source for distinctive green-glazed pottery. Sale near Rabat offers good quality at moderate prices with less bargaining pressure.',
  },
  {
    question: 'Can I visit a pottery workshop in Morocco?',
    answer:
      'Yes, most pottery cities welcome visitors to their workshops. In Fes, the Ain Nokbi pottery cooperative offers free tours showing every step of production. Safi has an entire pottery quarter (Colline des Potiers) open to visitors. Many workshops let you try throwing a pot on the wheel or painting a tile. Workshop visits are usually free, with the expectation you may purchase something.',
  },
] as const;

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoPotteryGuidePage() {
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
          style={{ backgroundImage: 'url(/images/photo-morocco-pottery.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Pottery Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Paintbrush className="w-4 h-4" />
            Pottery &amp; Ceramics
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Pottery Guide:
            <br className="hidden md:block" /> From Clay to Masterpiece
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Fes blue-and-white to Tamegroute green. Everything you need to know about
            Moroccan pottery, with workshop visits, real prices, and expert buying tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Pottery Lover&apos;s Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has one of the richest pottery traditions in the world, shaped by centuries
                of Berber, Arab, Andalusian, and African influences. From the legendary blue-and-white
                ceramics of Fes to the earthy green glazes of Tamegroute in the Saharan oasis, Moroccan
                pottery is both a living art form and a window into the country&apos;s cultural soul.
                Every region has developed its own distinctive styles, techniques, and glaze recipes,
                creating a diversity of ceramics found nowhere else on earth.
              </p>
              <p>
                Visiting a Moroccan pottery workshop is one of the most rewarding cultural experiences
                available to travelers. Watching a potter shape raw clay on a centuries-old kick-wheel,
                seeing an artist hand-paint intricate geometric patterns with a donkey-hair brush, and
                feeling the blast of heat from a wood-fired kiln connects you directly to a craft that
                has remained essentially unchanged since the medieval period. Whether you are a collector,
                a home decorator, or simply someone who appreciates handmade beauty, Morocco&apos;s
                pottery scene offers extraordinary value and authenticity.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices at workshops and local souks. Seasonal pricing
                applies during peak tourist months (October-April) when prices may run higher due to
                increased demand. Souk prices require bargaining; workshop prices are often fixed or
                semi-fixed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Types of Moroccan Pottery -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Moroccan Pottery
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each region of Morocco has developed its own distinctive pottery style with unique
            colors, patterns, and techniques passed down through generations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {potteryTypes.map((type) => {
              const TypeIcon = type.icon;
              return (
                <div key={type.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TypeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {type.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{type.region}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{type.description}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-20 shrink-0">Colors:</span>
                      <span className="text-[var(--text-secondary)]">{type.colors}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-20 shrink-0">Signature:</span>
                      <span className="text-[var(--text-secondary)]">{type.signature}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{type.priceRange}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Famous Pottery Cities -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Famous Pottery Cities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you buy matters as much as what you buy. These cities offer the best
            workshops, selection, and prices for Moroccan pottery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {potteryCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{city.nickname}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{city.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Must visit:</p>
                    <p className="text-xs text-[var(--text-secondary)]">{city.mustVisit}</p>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {city.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Pottery Workshops -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pottery Workshops &amp; Demonstrations
          </h2>

          <div className="space-y-6">
            {workshops.map((ws) => {
              const WsIcon = ws.icon;
              return (
                <div key={ws.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WsIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {ws.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{ws.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                      <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span className="text-sm text-[var(--text-secondary)]">{ws.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                      <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">{ws.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- How Pottery Is Made -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hammer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How Moroccan Pottery Is Made
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Traditional Moroccan pottery follows a six-step process that has remained largely
            unchanged for centuries, from raw clay to finished masterpiece.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {techniques.map((tech, index) => {
                  const TechIcon = tech.icon;
                  return (
                    <div key={tech.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <TechIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {tech.step}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tech.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Price Guide -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pottery Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Prices vary dramatically depending on where you buy. Workshops offer the best
            value, while tourist shops charge significant premiums.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-accent)]/10">
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Item</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Workshop</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Souk</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Tourist Shop</th>
                    </tr>
                  </thead>
                  <tbody>
                    {potteryPriceGuide.map((row, i) => (
                      <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                        <td className="p-4 text-[var(--text-primary)] font-medium">{row.item}</td>
                        <td className="p-4 text-[var(--color-accent)] font-semibold">{row.workshop}</td>
                        <td className="p-4 text-[var(--text-secondary)]">{row.souk}</td>
                        <td className="p-4 text-[var(--text-muted)]">{row.touristShop}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              Prices are starting prices and may vary seasonally. Workshop prices are often fixed;
              souk prices require bargaining. Tourist shop prices represent the range before negotiation.
            </p>
          </div>
        </div>
      </section>

      {/* -- How to Identify Authentic Pottery -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Identify Authentic Handmade Pottery
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Factory-made imitations are increasingly common in tourist areas. Use these six
            tests to verify you are buying genuine handmade Moroccan pottery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {authenticityChecks.map((item) => {
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
                        <span className="font-semibold text-green-700">Handmade:</span> {item.good}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-red-600">Factory:</span> {item.bad}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Shipping Pottery Home -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Fragile Pottery Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting your pottery purchases home safely requires careful planning. Follow these
            tips to avoid heartbreak at the airport or on delivery.
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
                  <p className="text-sm font-semibold text-amber-800 mb-1">Important: Customs &amp; Fragile Items</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Most countries allow ceramics through customs without issues. If shipping
                    commercially, ensure the workshop provides a proper invoice and packing list
                    for customs clearance. Some countries charge import duty on ceramics above
                    certain values (typically from 200-300 USD). For carry-on, airlines allow
                    fragile items but they count toward your baggage allowance. Consider purchasing
                    shipping insurance for pieces valued above 500 MAD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Buying Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying Tips: Bargaining &amp; Quality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Smart shopping ensures you get authentic handmade pottery at fair prices while
            supporting the artisans who keep this tradition alive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buyingTips.map((item) => {
              const BuyIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BuyIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
            <Link href="/crafts" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Paintbrush className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Crafts Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the full range of Moroccan artisanal crafts from leatherwork and metalwork to weaving and woodcarving.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-buy-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
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
                Navigate Morocco&apos;s famous markets with confidence. Etiquette, bargaining tips, and maps.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-shopping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete shopping guide covering souks, boutiques, cooperatives, and fixed-price stores across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-carpet-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Carpet Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about Moroccan rugs and carpets. Berber, kilim, and Rabat styles with price guide and buying tips.
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

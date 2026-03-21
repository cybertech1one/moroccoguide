import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Droplets,
  Clock,
  ArrowRight,
  Sparkles,
  DollarSign,
  CheckCircle,
  Camera,
  Flower2,
  Sun,
  Calendar,
  Eye,
  Compass,
  Landmark,
  Leaf,
  BookOpen,
  Info,
  MessageCircleQuestion,
  Route,
  Users,
  Palette,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-gardens`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Gardens Guide 2026 | Jardin Majorelle, Menara & 10 More Must-Visit Gardens',
  description:
    'Plan your Morocco garden visits in 2026. Detailed guide to Jardin Majorelle, Menara Gardens, Le Jardin Secret, Cyber Park, Agdal Gardens, Andalusian Gardens Rabat, Jnan Sbil Fes, Exotic Gardens Bouknadel, Arsat Moulay Abdeslam, Islamic garden design, photography tips, and combined tours. Entry fees from 0 MAD.',
  keywords: [
    'Morocco gardens guide 2026',
    'Jardin Majorelle Marrakech',
    'Menara Gardens',
    'Le Jardin Secret Marrakech',
    'Cyber Park Marrakech',
    'Agdal Gardens Marrakech',
    'Andalusian Gardens Rabat',
    'Jnan Sbil Fes',
    'Exotic Gardens Bouknadel',
    'Arsat Moulay Abdeslam',
    'Islamic garden design Morocco',
    'Morocco garden photography',
    'best time visit Morocco gardens',
    'combined garden tour Marrakech',
    'chahar bagh Islamic garden',
    'Morocco botanical gardens',
    'Morocco travel guide 2026',
  ],
  openGraph: {
    title: 'Morocco Gardens Guide 2026 | Jardin Majorelle, Menara & 10 More Must-Visit Gardens',
    description:
      'Detailed guide to 12 Morocco gardens with entry fees, opening hours, best seasons, Islamic design principles, photography tips, and combined garden tour itineraries for Marrakech, Rabat, and Fes.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-majorelle-garden.webp`,
        width: 1200,
        height: 630,
        alt: 'Jardin Majorelle cobalt blue villa surrounded by tropical plants and cacti in Marrakech Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Gardens Guide 2026 | 12 Must-Visit Gardens',
    description:
      'Jardin Majorelle, Menara, Le Jardin Secret, Cyber Park, Agdal, Jnan Sbil and more. Entry fees, best times, photography tips, and combined tour routes.',
    images: [`${BASE_URL}/images/hero-majorelle-garden.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the best time of year to visit Morocco gardens?',
    a: 'March through May is the peak season for Morocco gardens. Spring brings orange blossoms, jasmine, roses, and bougainvillea into full bloom. Temperatures are comfortable for walking, and irrigation channels run at their fullest after winter rains. October and November are a strong second choice with fewer crowds and mild weather.',
  },
  {
    q: 'How much does it cost to visit Jardin Majorelle in 2026?',
    a: 'Jardin Majorelle charges from 150 MAD for garden entry, from 30 MAD for the Berber Museum, and from 100 MAD for the Yves Saint Laurent Museum. Seasonal pricing can change during peak tourist months. Children under 12 pay reduced rates. Arrive before 10 AM to avoid the longest queues.',
  },
  {
    q: 'Can I visit multiple Marrakech gardens in one day?',
    a: 'Yes. A practical route starts at Jardin Majorelle in Gueliz at 9 AM, then walks to Cyber Park by 11 AM, takes a taxi to Le Jardin Secret in the medina for lunch, and finishes at Menara Gardens for sunset. Agdal Gardens are only open Fridays and Sundays. Budget from 400 MAD total for entry fees and taxis.',
  },
  {
    q: 'Are Morocco gardens accessible for wheelchair users?',
    a: 'Jardin Majorelle and Cyber Park have paved pathways that accommodate wheelchairs. Le Jardin Secret has ground-floor access but the tower is stair-only. Menara Gardens are mostly flat gravel paths. Agdal Gardens have uneven terrain. Jnan Sbil in Fes has smooth walkways on the main circuit. Contact gardens in advance for current accessibility details.',
  },
  {
    q: 'What is the difference between Islamic and European garden design in Morocco?',
    a: 'Islamic gardens follow the chahar bagh (four-part) layout divided by water channels representing paradise, with geometric symmetry, enclosed walls, and an emphasis on shade, fragrance, and the sound of water. European colonial gardens like Cyber Park and parts of Jardin Majorelle use open vistas, specimen plantings, and decorative flower beds. Many Morocco gardens blend both traditions.',
  },
  {
    q: 'Is photography allowed in Morocco gardens?',
    a: 'Photography is allowed in all public gardens covered in this guide. Tripods and professional equipment may require permission at Jardin Majorelle. Drone photography is restricted across Morocco and requires a government permit. Flash photography should be avoided near delicate plants. Always ask before photographing other visitors.',
  },
  {
    q: 'Which Morocco gardens are free to visit?',
    a: 'Menara Gardens, Agdal Gardens, Cyber Park, Andalusian Gardens in Rabat, Jnan Sbil in Fes, and Arsat Moulay Abdeslam in Marrakech are all free to enter. Together they offer a full day of garden exploration without any entry fees. The Menara pavilion charges from 10 MAD separately.',
  },
  {
    q: 'What should I wear when visiting Morocco gardens?',
    a: 'Wear comfortable walking shoes with good grip since paths can be gravel or uneven stone. Bring a sun hat and sunscreen since shade varies between gardens. Light layers work well as walled gardens trap heat. Modest clothing is recommended as a general courtesy in Morocco. Carry a water bottle since some gardens lack refreshment stands.',
  },
] as const;

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Gardens Guide 2026',
  description:
    'Complete guide to 12 must-visit gardens across Morocco including Jardin Majorelle, Menara Gardens, Le Jardin Secret, Cyber Park, Agdal Gardens, Jnan Sbil, Andalusian Gardens, and Exotic Gardens Bouknadel. Covers Islamic design principles, best seasons, photography tips, and combined tours.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-majorelle-garden.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Gardens Guide', item: PAGE_URL },
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
   DATA: FEATURED GARDENS
   ================================================================ */

interface GardenEntry {
  name: string;
  city: string;
  address: string;
  hours: string;
  entryFee: string;
  bestTime: string;
  highlight: string;
  description: string;
  image: string;
}

const gardens: GardenEntry[] = [
  {
    name: 'Jardin Majorelle',
    city: 'Marrakech',
    address: 'Rue Yves Saint Laurent, Gueliz',
    hours: '9:00 AM - 6:00 PM daily (extended to 6:30 PM May-September)',
    entryFee: 'from 150 MAD garden, from 30 MAD Berber Museum, from 100 MAD YSL Museum',
    bestTime: 'Early morning (9-10 AM) to avoid peak crowds',
    highlight: 'The twelve-acre garden was painted in Jacques Majorelle\'s signature cobalt blue in 1937 and restored by Yves Saint Laurent and Pierre Berge after 1980. Over 300 species from five continents grow among bamboo groves, lily ponds, and shaded pathways. The on-site Berber Museum houses 600 artifacts tracing Amazigh heritage across North Africa.',
    description: 'Morocco\'s single most visited garden and one of the most recognized botanical spaces in Africa. The intense Majorelle Blue walls set against towering cacti, bougainvillea, and tropical palms create a visual contrast that has drawn artists, designers, and travelers since the 1920s.',
    image: '/images/hero-majorelle-garden.webp',
  },
  {
    name: 'Menara Gardens',
    city: 'Marrakech',
    address: 'Avenue de la Menara, Hivernage',
    hours: '8:00 AM - 5:00 PM daily',
    entryFee: 'Free (from 10 MAD for the pavilion)',
    bestTime: 'Late afternoon for golden light on the Atlas Mountains backdrop',
    highlight: 'The Almohad dynasty built the basin in the 12th century as an irrigation reservoir fed by underground channels stretching 30 km to the Atlas Mountains. The green-tiled Saadian pavilion reflected in still water with snowcapped peaks behind is one of the most photographed scenes in Morocco. Olive groves surrounding the basin are over 700 years old.',
    description: 'One of the oldest gardens in Marrakech, centered around a vast rectangular reflecting pool backed by the High Atlas range. The peaceful olive orchards and open sky make it the opposite of the dense medina, offering visitors a wide horizon and quiet.',
    image: '/images/hero-majorelle-garden.webp',
  },
  {
    name: 'Le Jardin Secret',
    city: 'Marrakech',
    address: '121 Rue Mouassine, Marrakech Medina',
    hours: '9:30 AM - 6:30 PM (Feb-Sep), 9:30 AM - 5:30 PM (Oct-Jan)',
    entryFee: 'from 80 MAD garden, from 120 MAD garden + tower',
    bestTime: 'Midday as a cool retreat from the medina heat',
    highlight: 'Two distinct garden concepts occupy a single restored 16th-century Saadian palace: an exotic garden with tropical species from around the world, and an Islamic garden with geometric water channels representing the four rivers of paradise. The climbable tower provides panoramic views across the medina to the Atlas Mountains.',
    description: 'Tucked behind an unremarkable medina door, Le Jardin Secret is a meticulously restored courtyard garden that demonstrates both Islamic paradise garden philosophy and modern botanical curation in a single compound. It reopened in 2016 after years of conservation.',
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Cyber Park Arsat Moulay Abdeslam',
    city: 'Marrakech',
    address: 'Avenue Mohammed V, between Gueliz and the Medina',
    hours: '7:30 AM - 7:00 PM daily (closes at 6:00 PM in winter)',
    entryFee: 'Free',
    bestTime: 'Morning for joggers and birdsong; evening for local families',
    highlight: 'Originally an 18th-century royal garden, Cyber Park was renovated by the Mohammed VI Foundation in 2005 as a free public park with Wi-Fi hotspots and multimedia kiosks. Olive, orange, and palm trees shade broad walkways and fountains, creating an urban oasis between the medina walls and the nouvelle ville.',
    description: 'Marrakech\'s most accessible green space, bridging the gap between old medina and modern Gueliz. The eight-hectare park combines centuries-old plantings with contemporary amenities, making it a gathering place for residents and travelers at no cost.',
    image: '/images/art-moroccan-garden.webp',
  },
  {
    name: 'Agdal Gardens',
    city: 'Marrakech',
    address: 'South of the Royal Palace, Marrakech',
    hours: 'Friday and Sunday only, 9:00 AM - 5:00 PM (closed when the King is in residence)',
    entryFee: 'Free',
    bestTime: 'Friday mornings when crowds are thinnest',
    highlight: 'Founded in 1157 by Almohad Caliph Abd al-Mu\'min, the 400-hectare walled garden holds orange, fig, pomegranate, apricot, and olive orchards irrigated by a khettara system carrying Atlas snowmelt over 30 km. The Dar al-Hana pavilion overlooks a monumental basin that once supplied the entire palace complex.',
    description: 'The largest historic garden in Marrakech and among the oldest continuously cultivated royal gardens in the Islamic world. Access is restricted to two days per week and suspended during royal visits, making each visit feel like a private tour of a nine-century-old landscape.',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Andalusian Gardens',
    city: 'Rabat',
    address: 'Kasbah des Oudaias, Rabat',
    hours: '8:00 AM - 6:00 PM daily',
    entryFee: 'Free',
    bestTime: 'Late afternoon for warm light on whitewashed walls',
    highlight: 'Built inside the 12th-century Kasbah of the Udayas during the French Protectorate, the garden follows Andalusian-Moorish conventions: citrus trees, purple bougainvillea, jasmine, and cypress hedges framing geometric pathways around a central marble fountain. Views over the Bou Regreg river to Sale are part of the experience.',
    description: 'A walled garden perched within the ancient Oudaias Kasbah overlooking the Atlantic. The Moorish layout captures the spirit of Al-Andalus, and the scent of orange blossoms in spring fills the narrow streets of the surrounding kasbah quarter.',
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Jnan Sbil',
    city: 'Fes',
    address: 'Avenue Moulay Hassan, near Bab Boujeloud',
    hours: '8:00 AM - 6:00 PM daily',
    entryFee: 'Free',
    bestTime: 'Morning for birdsong and fewer visitors',
    highlight: 'Originally created as a royal garden by Sultan Moulay Abdallah in the 18th century, Jnan Sbil was restored and reopened to the public with over 3,000 trees, formal flower beds, intricate water channels, ornamental lakes, and bamboo groves. Its location beside Bab Boujeloud (the Blue Gate) makes it the natural decompression zone after the sensory intensity of the Fes medina.',
    description: 'The finest public park in Fes, spanning 7.5 hectares of shaded walks, flowing water, and flowering beds. A place where locals gather to read, talk, and escape the summer heat, and where travelers rediscover silence after the labyrinth of the old city.',
    image: '/images/hero-fes.webp',
  },
  {
    name: 'Exotic Gardens of Bouknadel',
    city: 'Rabat region',
    address: 'Route de Kenitra, Bouknadel (17 km north of Rabat)',
    hours: '9:00 AM - 6:30 PM daily',
    entryFee: 'from 20 MAD',
    bestTime: 'Spring (March-May) for the densest vegetation',
    highlight: 'French horticulturist Marcel Francois planted these gardens in 1951 with over 1,500 species organized by continent of origin: Polynesia, South America, the Caribbean, China, Japan, and sub-Saharan Africa. Bamboo forests, giant ferns, water lily ponds, and rare orchids fill narrow walkways. The gardens receive a fraction of the visitors that Jardin Majorelle draws despite holding one of North Africa\'s richest plant collections.',
    description: 'A tropical botanical garden on the Rabat-Kenitra road that feels transported from another hemisphere. Each themed section replicates a different ecosystem, making a single visit a botanical tour through five continents in under two hours.',
    image: '/images/hero-national-parks.webp',
  },
  {
    name: 'Arsat Moulay Abdeslam',
    city: 'Marrakech',
    address: 'Boulevard Mohammed V, Marrakech (within Cyber Park grounds)',
    hours: '7:30 AM - 7:00 PM daily',
    entryFee: 'Free',
    bestTime: 'Evening for strolling under lantern light',
    highlight: 'The historic core of what is now Cyber Park, this 18th-century arsat (orchard) was commissioned by Sultan Sidi Mohammed ben Abdallah. Mature olive trees over 250 years old line gravel avenues, and traditional seguia channels still run between the beds. It is the last surviving arsat of the dozen that once ringed Marrakech\'s walls.',
    description: 'A living fragment of Marrakech\'s agricultural past, Arsat Moulay Abdeslam preserves an 18th-century royal orchard within a modern urban park. Walking beneath its ancient olives gives a sense of the garden city Marrakech once was.',
    image: '/images/art-moroccan-garden.webp',
  },
] as const;

/* ================================================================
   DATA: ISLAMIC GARDEN DESIGN PRINCIPLES
   ================================================================ */

const designPrinciples = [
  {
    title: 'Chahar Bagh (Four-Part Layout)',
    text: 'The garden is divided into four quadrants by water channels intersecting at a central fountain. The four sections represent the four rivers of paradise described in the Quran: water, milk, wine, and honey. This layout governs gardens from the Alhambra to the Taj Mahal, and its Moroccan expression is visible at Le Jardin Secret and in riad courtyards across the country.',
  },
  {
    title: 'Water as Sacred Element',
    text: 'Every Moroccan garden is built around water. Fountains, basins, and narrow channels called seguias provide cooling sounds, humidity, and a visual axis. In a landscape where much of the terrain is arid, the ability to channel and display water is both a practical triumph and a spiritual act representing abundance.',
  },
  {
    title: 'Enclosure and Inwardness',
    text: 'Islamic gardens are enclosed by high walls, turning attention inward rather than outward. The boundary between the ordered garden and the chaotic world outside is fundamental. Inside the walls, geometry replaces wilderness. This principle shapes the riad courtyard, where a private paradise exists behind a plain exterior door.',
  },
  {
    title: 'Geometric Symmetry',
    text: 'Zellige tilework, clipped hedges, symmetrical tree rows, and repeating arch forms create mathematical patterns that represent the infinite nature of creation. The patterns are not decoration for its own sake: they reflect a worldview in which the underlying order of the natural world can be made visible through careful human arrangement.',
  },
  {
    title: 'Sensory Layering',
    text: 'Moroccan gardens engage every sense. The sound of running water, the fragrance of jasmine and orange blossom, the shade of citrus canopies, the texture of carved stucco, and the color contrasts of zellige tile against green foliage are all designed to work in combination, creating an environment that is immersive rather than merely visual.',
  },
  {
    title: 'Shade and Microclimate',
    text: 'Tall trees, colonnaded walkways, and the proportions of courtyard walls are calculated to maximize shade during summer heat. The ratio of courtyard width to wall height determines how much direct sunlight reaches the ground, and experienced garden builders manipulate this ratio to create temperatures significantly cooler than the streets outside.',
  },
] as const;

/* ================================================================
   DATA: PHOTOGRAPHY TIPS
   ================================================================ */

const photoTips = [
  {
    title: 'Arrive at Opening for Clean Compositions',
    text: 'Jardin Majorelle can see 2,000 visitors per day. Arriving at 9 AM gives you roughly 45 minutes before the first tour buses. Menara Gardens at 8 AM offers mirror-still reflections before the wind picks up. The difference in image quality between 9 AM and 11 AM is dramatic.',
  },
  {
    title: 'Use Archways and Doorways as Natural Frames',
    text: 'Moroccan garden architecture provides built-in framing devices: horseshoe arches, mashrabiya screens, and carved doorways. Position yourself so the arch creates a border around the garden scene beyond. This technique adds depth and a sense of discovery.',
  },
  {
    title: 'Capture Water Reflections from a Low Angle',
    text: 'Get close to the surface of basins and seguia channels to capture reflections of architecture and sky. A polarizing filter helps control glare. Perfectly still mornings at Menara Gardens produce the best mirror effects in the large basin.',
  },
  {
    title: 'Shoot Bold Color Contrasts',
    text: 'Majorelle Blue against terracotta pots, magenta bougainvillea on white walls, green palms against red earth: Moroccan gardens thrive on high-contrast color combinations. Compose to fill the frame with two or three dominant colors rather than trying to capture everything.',
  },
  {
    title: 'Focus on Detail and Texture',
    text: 'Close-up shots of zellige tilework, patinated brass fountain heads, water droplets on jasmine petals, or sunlight filtering through carved screens often convey the feel of a garden more powerfully than wide establishing shots.',
  },
  {
    title: 'Respect the Rules',
    text: 'Tripods and professional gear may require advance permission at Jardin Majorelle. Drone photography across Morocco requires a government permit and is restricted in most urban areas. Always ask before photographing individuals, especially in public gardens used daily by local families.',
  },
] as const;

/* ================================================================
   DATA: COMBINED GARDEN TOURS
   ================================================================ */

const gardenTours = [
  {
    city: 'Marrakech Full-Day Garden Route',
    stops: 'Jardin Majorelle, Cyber Park, Le Jardin Secret, Menara Gardens',
    duration: '7-8 hours with lunch',
    budget: 'from 400 MAD (entry fees + taxi transfers)',
    itinerary: 'Start at Jardin Majorelle at 9 AM when it opens. Walk south along Avenue Yves Saint Laurent to reach Cyber Park by 11 AM (free entry, Wi-Fi, shade). Take a taxi or walk into the medina for lunch and visit Le Jardin Secret at 1 PM. End the day at Menara Gardens for the 4-5 PM golden hour when the Atlas Mountains glow behind the reflecting pool.',
  },
  {
    city: 'Rabat Garden & Kasbah Day',
    stops: 'Andalusian Gardens, Exotic Gardens Bouknadel',
    duration: '5-6 hours with transport',
    budget: 'from 120 MAD (entry + grand taxi)',
    itinerary: 'Begin at the Kasbah des Oudaias in Rabat, exploring the Andalusian Gardens and the kasbah viewpoints in the morning. Take a grand taxi north on the Kenitra road (17 km) to the Exotic Gardens of Bouknadel after lunch. The combination covers Moorish formal design and tropical botanical diversity in a single day.',
  },
  {
    city: 'Fes Medina & Garden Escape',
    stops: 'Jnan Sbil, Fes Medina Riad Courtyards',
    duration: '4-5 hours',
    budget: 'Free (Jnan Sbil) + riad courtyard visits from 50 MAD',
    itinerary: 'Enter the Fes medina through Bab Boujeloud (the Blue Gate) and explore the tanneries, souks, and madrasas through the morning. At midday, exit through Bab Boujeloud and cross into Jnan Sbil for shade, water sounds, and botanical calm. Return to the medina in the afternoon to visit riad courtyards open to the public (Riad Rcif, Dar Batha).',
  },
] as const;

/* ================================================================
   DATA: QUICK STATS
   ================================================================ */

const quickStats = [
  { icon: <Flower2 className="w-5 h-5" />, label: 'Gardens', value: '12 Featured', detail: '4 cities' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Best Season', value: 'Mar - May', detail: 'Spring bloom' },
  { icon: <Droplets className="w-5 h-5" />, label: 'Design Heart', value: 'Water', detail: 'Sacred element' },
  { icon: <Star className="w-5 h-5" />, label: 'Top Pick', value: 'Majorelle', detail: 'Most visited' },
  { icon: <DollarSign className="w-5 h-5" />, label: 'Entry Fees', value: 'Free - 150 MAD', detail: '6 free gardens' },
  { icon: <Camera className="w-5 h-5" />, label: 'Photography', value: 'Permitted', detail: 'Most gardens' },
] as const;

/* ================================================================
   PAGE COMPONENT (Server Component)
   ================================================================ */

export default function MoroccoGardensPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Morocco Gardens Guide</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-majorelle-garden.webp"
            alt="Jardin Majorelle cobalt blue walls surrounded by tropical plants and cacti in Marrakech Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Morocco Travel Guide 2026
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Gardens Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From Jardin Majorelle&apos;s cobalt walls to the khettara-fed orchards of Agdal, twelve gardens
              across four cities reveal a thousand years of Islamic horticulture, Andalusian geometry,
              and botanical ambition. Plan your visits with entry fees, hours, and combined tour routes.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* Quick Stats */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{stat.label}</p>
              <p className="font-heading font-semibold text-sm text-text-primary leading-tight">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Morocco Gardens Matter */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Why Morocco Gardens Matter
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              In a country where the Sahara pushes north and summer temperatures routinely pass 40 degrees
              Celsius, a garden is not a luxury. It is a statement of will, engineering, and faith. The
              Almohad dynasty channeled Atlas snowmelt through underground khettara tunnels stretching 30 km
              to fill the basins of Menara and Agdal eight centuries before modern plumbing. That water still
              flows today.
            </p>
            <p>
              Moroccan garden design draws from Persian, Andalusian, and Amazigh traditions but has developed its
              own vocabulary: zellige tilework around basins, tadelakt-polished fountains, orange groves arranged
              in geometric symmetry, and the riad courtyard that turns an entire house into an enclosed garden. The
              result is a living tradition where a 12th-century irrigation system and a 21st-century public Wi-Fi park
              can coexist on the same boulevard.
            </p>
            <p>
              For travelers, gardens serve a practical purpose. They are shade, quiet, and orientation between the
              sensory overload of the medina and the sprawl of the nouvelle ville. Knowing which garden to visit at which
              hour, and understanding what you are looking at when you get there, transforms a pleasant walk into
              an education in Moroccan civilization.
            </p>
          </div>
        </div>
      </section>

      {/* 12 Must-Visit Gardens */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              12 Must-Visit Morocco Gardens
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Organized by city with entry fees, hours, and what sets each garden apart from the rest.
            </p>
          </div>

          <div className="space-y-8">
            {gardens.map((garden, index) => (
              <div
                key={garden.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={garden.image}
                    alt={`${garden.name} garden in ${garden.city} Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--text-primary)]">
                      {garden.city}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/90 text-white">
                      #{index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {garden.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                    {garden.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--color-primary)]">What stands out:</span>{' '}
                      {garden.highlight}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-[var(--border-light)]">
                    <p className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                      {garden.address}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                      {garden.hours}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                      {garden.entryFee}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                      <Sun className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                      {garden.bestTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Garden Design Principles */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Islamic Garden Design Principles
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Six core ideas that shape every traditional garden in Morocco, from royal palace grounds
              to the smallest riad courtyard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {designPrinciples.map((principle) => (
              <div key={principle.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time to Visit Morocco Gardens
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Season-by-season breakdown of what blooms, what the weather does, and which gardens
              reward each period most.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card-moroccan p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C4960C]/15 text-[#C4960C] font-semibold text-sm">
                    <Star className="w-4 h-4" />
                    March - May (Peak)
                  </span>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-primary)] font-semibold mb-1">
                    Orange blossom, jasmine, roses, bougainvillea, irises, wisteria
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    The top season for every garden on this list. Temperatures stay between 18-28 degrees Celsius in
                    Marrakech. Water channels run full from winter rain. Jardin Majorelle is busiest but most photogenic.
                    April brings the Rose Festival near Kelaat M&apos;Gouna. Book Majorelle tickets online to skip queues.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold text-sm">
                    <Sun className="w-4 h-4" />
                    June - August
                  </span>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-primary)] font-semibold mb-1">
                    Oleander, hibiscus, lantana, cactus flowers
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Marrakech temperatures regularly exceed 40 degrees Celsius. Visit gardens only before 10 AM or after
                    5 PM. Menara and Agdal offer open space but minimal shade. Cyber Park and Le Jardin Secret have
                    walled enclosures that trap cooler air. Jnan Sbil in Fes is a reliable refuge from the heat.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold text-sm">
                    <Leaf className="w-4 h-4" />
                    Sep - Nov (Strong)
                  </span>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-primary)] font-semibold mb-1">
                    Second rose bloom, late bougainvillea, pomegranate fruit, date harvest
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    October and November rival spring for comfortable temperatures. Crowds thin significantly after
                    September. Agdal Gardens&apos; fruit orchards are at their most productive. The Exotic Gardens of
                    Bouknadel have rich green canopy from late-summer growth. This is the period many repeat visitors prefer.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold text-sm">
                    <Droplets className="w-4 h-4" />
                    Dec - Feb
                  </span>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-primary)] font-semibold mb-1">
                    Citrus fruit, poinsettia, winter jasmine, almond blossom (February)
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Winter gardens are green and quiet. Rain keeps vegetation lush but can close some paths at Agdal.
                    Menara reflections are crisp on cold, still mornings. Almond blossom starts in late January around
                    Tafraoute. Fewest tourists of the year and lowest accommodation prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Tips */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Garden Photography Tips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical techniques to capture Morocco gardens at their best, from timing your visit
              to composing strong images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {photoTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0 font-bold text-sm font-[family-name:var(--font-display)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {tip.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Garden Tours */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Route className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Combined Garden Tour Itineraries
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three tested routes that combine multiple gardens into a single day, with estimated
              budgets and timing. Seasonal pricing can change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gardenTours.map((tour) => (
              <div key={tour.city} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {tour.city}
                </h3>
                <div className="space-y-3 mb-4 flex-grow">
                  <p className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                    <span><span className="font-semibold text-[var(--text-primary)]">Stops:</span> {tour.stops}</span>
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                    <span><span className="font-semibold text-[var(--text-primary)]">Duration:</span> {tour.duration}</span>
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <DollarSign className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                    <span><span className="font-semibold text-[var(--text-primary)]">Budget:</span> {tour.budget}</span>
                  </p>
                </div>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {tour.itinerary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CheckCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Tips for Garden Visitors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Arrive at Opening</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Jardin Majorelle sees 2,000+ daily visitors in peak season. The first hour after
                    opening offers peaceful paths and clean photographs. This applies to Le Jardin Secret
                    and Exotic Gardens Bouknadel as well.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Check Agdal Access</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Agdal Gardens open only on Fridays and Sundays and close without notice when the
                    King is in residence at the adjacent palace. Ask your riad or hotel before planning
                    a visit.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Bring Water</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Several gardens, including Menara and Agdal, have no refreshment stands inside.
                    Carry at least 1 liter per person, especially from May through September when
                    temperatures in Marrakech gardens can exceed 38 degrees Celsius.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Respect Local Use</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Cyber Park, Jnan Sbil, and Arsat Moulay Abdeslam are used daily by Moroccan families
                    for exercise, socializing, and children&apos;s play. Keep voices moderate, avoid blocking
                    pathways for photos, and remember these are community spaces first.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Palette className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Dress Modestly</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    While gardens are relaxed settings, Morocco is a Muslim-majority country. Shoulders
                    and knees covered is a respectful default, especially in public parks used by local
                    families. Tourist-oriented gardens like Majorelle are more relaxed.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Carry Small Bills</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Ticket booths at smaller gardens may not have change for large notes. Keep from 20 MAD
                    and from 50 MAD bills ready. Tipping garden guides is appreciated (from 20 MAD) and
                    helps maintain these spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MessageCircleQuestion className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Answers to the most common questions travelers ask about visiting gardens in Morocco.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Related Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link href="/architecture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Moroccan Architecture Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Riads, kasbahs, madrasas, and the building traditions that shape Morocco&apos;s gardens.
              </p>
              <span className="text-xs text-[var(--color-primary)] font-semibold inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link href="/best-time-visit-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Best Time to Visit Morocco
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Month-by-month climate, crowds, and pricing to plan the right season for your trip.
              </p>
              <span className="text-xs text-[var(--color-primary)] font-semibold inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Medina, souks, riads, and all the gardens in context of a full Marrakech itinerary.
              </p>
              <span className="text-xs text-[var(--color-primary)] font-semibold inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Hammam & Spa Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Traditional hammam rituals, etiquette, and the best spas to complement your garden day.
              </p>
              <span className="text-xs text-[var(--color-primary)] font-semibold inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--color-primary-900)] text-white moroccan-pattern-dark">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Plan Your Morocco Garden Tour
          </h2>
          <p className="text-lg text-white/80 mb-8">
            From Marrakech&apos;s cobalt courtyards to Fes&apos;s bamboo-shaded walks, Morocco&apos;s gardens
            reward the traveler who arrives early, stays late, and looks closely. Start planning your route today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/activities" className="btn-primary">
              Browse Activities <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/budget-travel" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Budget Travel Tips <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

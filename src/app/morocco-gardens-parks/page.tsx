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
  Camera,
  DollarSign,
  CheckCircle,
  Users,
  Flower2,
  Sun,
  Building,
  Award,
  BookOpen,
  Droplets,
  TreeDeciduous,
  Leaf,
  Eye,
  CalendarDays,
  HelpCircle,
  Ticket,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Gardens & Parks in Morocco 2026 | Majorelle, Menara & Hidden Green Spaces',
  description:
    'Discover Morocco\'s 15 most beautiful gardens and parks. From Jardin Majorelle\'s cobalt blue walls to Menara Gardens\' olive groves. Entry fees, best times to visit, photography tips, and Islamic garden design explained.',
  keywords: [
    'morocco gardens',
    'jardin majorelle',
    'menara gardens marrakech',
    'best parks morocco',
    'majorelle garden marrakech',
    'moroccan gardens',
    'agdal gardens',
    'le jardin secret marrakech',
    'anima garden marrakech',
    'jnan sbil fes',
    'islamic garden design',
    'morocco green spaces',
    'chellah gardens rabat',
    'exotic garden bouknadel',
    'andalusian garden rabat',
    'hassan ii park casablanca',
    'parc ligue arabe casablanca',
    'cyber park marrakech',
    'morocco garden photography',
    'morocco garden entry fees',
    'garden visit morocco tips',
    'best time visit morocco gardens',
  ],
  openGraph: {
    title: 'Best Gardens & Parks in Morocco 2026 | Majorelle, Menara & Hidden Green Spaces',
    description:
      'Explore Morocco\'s 15 finest gardens — from Jardin Majorelle\'s iconic cobalt walls to hidden green oases in Fes and Rabat. Entry fees, hours, photography tips, and practical visitor info.',
    url: `${BASE_URL}/morocco-gardens-parks`,
    images: [
      {
        url: `${BASE_URL}/images/hero-gardens.webp`,
        width: 1200,
        height: 630,
        alt: 'Jardin Majorelle in Marrakech with cobalt blue buildings surrounded by cacti and tropical plants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Gardens & Parks in Morocco 2026 | 15 Must-Visit Green Spaces',
    description:
      'From Jardin Majorelle to Menara Gardens — the complete guide to Morocco\'s most beautiful gardens. Entry fees, best times, photography tips, and hidden gems.',
    images: [`${BASE_URL}/images/hero-gardens.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-gardens-parks` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-gardens-parks`,
  name: 'Best Gardens & Parks in Morocco 2026 | Majorelle, Menara & Hidden Green Spaces',
  description:
    'Complete guide to Morocco\'s 15 most beautiful gardens and parks. Jardin Majorelle, Menara Gardens, Agdal Gardens, Le Jardin Secret, and hidden green spaces across Marrakech, Fes, Rabat, Casablanca, and Agadir.',
  url: `${BASE_URL}/morocco-gardens-parks`,
  image: `${BASE_URL}/images/hero-gardens.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-gardens-parks`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Gardens & Parks', item: `${BASE_URL}/morocco-gardens-parks` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to visit Jardin Majorelle in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jardin Majorelle entry costs from 100 MAD for adults (garden only). The Berber Museum inside requires a separate ticket from 30 MAD. The Yves Saint Laurent Museum adjacent is from 30 MAD. Seasonal pricing can change, so check before visiting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit gardens in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) is the best season for visiting Moroccan gardens. Flowers are in full bloom, temperatures are comfortable at 20-28 degrees Celsius, and the light is ideal for photography. Autumn (September to November) is the second-best option. Summer visits should be early morning or late afternoon to avoid midday heat exceeding 40 degrees in Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Menara Gardens free to visit in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, walking the Menara Gardens olive groves is free. There is a small entry fee from 10 MAD to enter the pavilion building itself. The gardens are open daily and are popular with locals for evening walks, particularly at sunset when the Atlas Mountains are reflected in the basin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take photographs inside Jardin Majorelle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, personal photography is allowed throughout Jardin Majorelle. Tripods and professional photography equipment require prior permission. Drone photography is not permitted. The best photography times are early morning right at opening (8 AM) when crowds are thinnest and the light is warm.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Islamic garden design and where can I see it in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Islamic garden design follows the concept of a chahar bagh — a four-part garden divided by water channels symbolizing the rivers of paradise. Key features include geometric symmetry, central fountains, enclosed walls for privacy, and fragrant plantings like jasmine and orange blossom. The best examples in Morocco are the Agdal Gardens, Le Jardin Secret, and the Andalusian Garden in Rabat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Anima Garden worth the trip from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anima Garden, located about 27 km from Marrakech in the Ourika Valley, is worth the trip for art and nature enthusiasts. Created by Austrian artist Andre Heller, it combines botanical gardens with large-scale sculptures and art installations. Entry is from 120 MAD and a shuttle service runs from Marrakech. Allow half a day including travel time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan gardens are wheelchair accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accessibility varies. Cyber Park in Marrakech has paved flat paths throughout. Hassan II Park in Casablanca and Parc de la Ligue Arabe also have good accessibility. Jardin Majorelle has partially accessible paths but some narrow sections. Historic gardens like Agdal and Chellah have uneven terrain that can be difficult for wheelchair users. Always contact venues ahead for the latest accessibility information.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 15 GARDENS & PARKS
   ═══════════════════════════════════════════════════════════════ */

const topGardens = [
  {
    rank: 1,
    name: 'Jardin Majorelle',
    city: 'Marrakech',
    type: 'Botanical Garden & Museum',
    icon: Flower2,
    price: 'From 100 MAD',
    description:
      'Created by French painter Jacques Majorelle in 1923 and later restored by Yves Saint Laurent and Pierre Berge, this garden is defined by its striking cobalt blue — now known as Majorelle Blue. The 1-hectare space holds over 300 plant species from five continents, including towering bamboo groves, giant cacti, and bougainvillea. The on-site Berber Museum occupies Majorelle\'s former studio.',
    highlights: ['Majorelle Blue architecture', 'Over 300 plant species', 'Berber Museum', 'YSL Memorial'],
    bestTime: 'Early morning (8 AM opening) to avoid crowds',
  },
  {
    rank: 2,
    name: 'Menara Gardens',
    city: 'Marrakech',
    type: 'Historic Olive Grove',
    icon: TreeDeciduous,
    price: 'Free (pavilion from 10 MAD)',
    description:
      'Built in the 12th century under the Almohad dynasty, the Menara Gardens span a vast olive grove surrounding a reflective basin fed by underground channels from the Atlas Mountains. The 19th-century Saadian-style pavilion overlooking the pool has become one of Marrakech\'s most photographed landmarks, particularly at sunset when the snow-capped Atlas range mirrors in the still water.',
    highlights: ['12th-century Almohad origin', 'Atlas Mountain views', 'Sunset reflections', 'Free garden access'],
    bestTime: 'Late afternoon for sunset views over the Atlas Mountains',
  },
  {
    rank: 3,
    name: 'Agdal Gardens',
    city: 'Marrakech',
    type: 'Royal Historic Garden',
    icon: Building,
    price: 'Free (open Fridays and Sundays only)',
    description:
      'Stretching over 400 hectares south of the Royal Palace, the Agdal Gardens are among the oldest in Marrakech, dating to 1157 under the Almohad Caliph Abd al-Mu\'min. Irrigated by a sophisticated khettara underground canal system, the gardens contain orchards of olive, orange, apricot, pomegranate, and fig trees. Two large basins — Dar el-Hana and Sahraj el-Ghouzal — served as water reserves and royal swimming pools.',
    highlights: ['400+ hectares of orchards', 'Almohad-era irrigation system', 'UNESCO World Heritage component', 'Royal history'],
    bestTime: 'Friday or Sunday mornings before midday heat',
  },
  {
    rank: 4,
    name: 'Le Jardin Secret',
    city: 'Marrakech',
    type: 'Restored Riad Garden',
    icon: Sparkles,
    price: 'From 80 MAD',
    description:
      'Hidden in the heart of the Mouassine quarter in the medina, Le Jardin Secret occupies a restored 16th-century riad. The garden is split into two distinct sections: an exotic garden with plants from around the world and an Islamic garden following traditional chahar bagh design with intersecting water channels. A tower offers panoramic views over the medina rooftops to the Atlas Mountains.',
    highlights: ['16th-century riad setting', 'Islamic chahar bagh design', 'Rooftop tower panorama', 'Medina location'],
    bestTime: 'Mid-morning on weekdays for fewer visitors',
  },
  {
    rank: 5,
    name: 'Anima Garden',
    city: 'Ourika Valley (near Marrakech)',
    type: 'Art & Botanical Garden',
    icon: Eye,
    price: 'From 120 MAD',
    description:
      'Created by Austrian multimedia artist Andre Heller in 2016, Anima Garden is a 2-hectare wonderland where botanical abundance meets contemporary art. Set in the foothills of the Atlas Mountains, 27 km from Marrakech, the garden features large-scale sculptures by artists including Keith Haring, alongside thousands of plant species. A free shuttle departs daily from central Marrakech.',
    highlights: ['Contemporary art installations', 'Atlas Mountain foothill setting', 'Free shuttle from Marrakech', 'Keith Haring sculptures'],
    bestTime: 'Morning for best mountain light and cooler temperatures',
  },
  {
    rank: 6,
    name: 'Cyber Park Moulay Abdeslam',
    city: 'Marrakech',
    type: 'Public Park & Digital Garden',
    icon: Leaf,
    price: 'Free',
    description:
      'Originally an 18th-century royal garden built by Prince Moulay Abdeslam, Cyber Park was restored in 2005 as a fusion of traditional Moroccan garden design and modern technology. The 8-hectare park sits on Avenue Mohammed V between the medina and Gueliz, offering free Wi-Fi, interactive information kiosks, and shaded walking paths. Olive and orange trees line geometric pathways where locals gather in the evening.',
    highlights: ['Free Wi-Fi throughout', '18th-century royal origins', 'Central Marrakech location', 'Shaded walkways'],
    bestTime: 'Late afternoon when locals gather and temperature drops',
  },
  {
    rank: 7,
    name: 'Jnan Sbil Gardens',
    city: 'Fes',
    type: 'Historic Royal Garden',
    icon: Droplets,
    price: 'Free',
    description:
      'Fes\'s principal public garden dates to the reign of Sultan Moulay Hassan in the 19th century and was restored with support from the Millennium Challenge Corporation in 2011. Spanning 7.5 hectares alongside the Fes el-Jdid walls, the garden boasts over 3,000 trees — including centuries-old olive and cypress specimens — a boating lake, bamboo groves, and the grand Noria waterwheel that once lifted water from the Fes River.',
    highlights: ['3,000+ trees', 'Historic Noria waterwheel', 'Lakeside walking paths', 'Adjacent to Fes el-Jdid'],
    bestTime: 'Morning or late afternoon for bird activity and softer light',
  },
  {
    rank: 8,
    name: 'Exotic Garden of Bouknadel',
    city: 'Bouknadel (near Rabat)',
    type: 'Tropical Botanical Garden',
    icon: Flower2,
    price: 'From 10 MAD',
    description:
      'Created in 1951 by French horticulturist Marcel Francois, this 4.5-hectare garden 17 km north of Rabat houses an extraordinary collection of tropical and subtropical plants from Asia, South America, and the Pacific Islands. Winding paths cut through dense bamboo forests, past lily ponds, under canopies of banana palms, and through zones representing different climate regions. It feels a world apart from the surrounding countryside.',
    highlights: ['Plants from five continents', 'Bamboo forest walks', 'Lily ponds', 'Quiet countryside setting'],
    bestTime: 'Spring for the most vibrant growth and flowering',
  },
  {
    rank: 9,
    name: 'Andalusian Garden',
    city: 'Rabat',
    type: 'Historic Terraced Garden',
    icon: Star,
    price: 'Free',
    description:
      'Built during the French Protectorate era in the early 20th century within the Kasbah of the Udayas, this terraced garden takes design inspiration from the gardens of Andalusia. Enclosed by the fortress walls overlooking the Bou Regreg River and the Atlantic, the garden features citrus trees, purple jacaranda, jasmine hedges, and a central fountain. It is one of the most tranquil spots in Rabat.',
    highlights: ['Kasbah of the Udayas setting', 'River and ocean views', 'Andalusian design elements', 'Fragrant jasmine hedges'],
    bestTime: 'Early morning for golden light on the whitewashed walls',
  },
  {
    rank: 10,
    name: 'Arsat Moulay Abdeslam',
    city: 'Marrakech',
    type: 'Historic Arboretum',
    icon: TreeDeciduous,
    price: 'Free',
    description:
      'Often overlooked by visitors who flock to nearby Majorelle, this 8-hectare arboretum near the Bab Doukkala mosque is Marrakech\'s oldest surviving green space. Established in the 18th century, the garden holds mature olive, palm, and citrus trees and serves as a lung for the surrounding medina neighborhoods. Restoration work has added paved paths and seating areas while preserving its peaceful character.',
    highlights: ['Marrakech\'s oldest garden', 'Local neighborhood atmosphere', 'Mature specimen trees', 'Peaceful and uncrowded'],
    bestTime: 'Any time — rarely crowded even at peak hours',
  },
  {
    rank: 11,
    name: 'Hassan II Park',
    city: 'Casablanca',
    type: 'Urban Park',
    icon: Users,
    price: 'Free',
    description:
      'Casablanca\'s largest green space at 32 hectares, Hassan II Park opened in 2013 on the site of a former golf course. Designed for families and recreation, the park includes jogging trails, a skateboard area, children\'s playgrounds, botanical zones, and an artificial lake. Palm-lined avenues and open lawns provide breathing space amid the city\'s dense urban fabric.',
    highlights: ['32 hectares of green space', 'Children\'s playgrounds', 'Jogging and cycling paths', 'Artificial lake'],
    bestTime: 'Weekend mornings when local families gather',
  },
  {
    rank: 12,
    name: 'Lalla Hasna Park',
    city: 'Marrakech',
    type: 'Modern Public Park',
    icon: Sun,
    price: 'Free',
    description:
      'Situated along Avenue Mohammed VI in the Hivernage district, Lalla Hasna Park offers a modern counterpoint to Marrakech\'s historic gardens. The landscaped park features well-maintained flower beds, a central pond, children\'s play areas, and benches shaded by mature trees. It connects to the broader promenade stretching toward the Menara Gardens and is a favored evening walking route for Marrakech residents.',
    highlights: ['Modern landscaped design', 'Evening promenade route', 'Children\'s play areas', 'Connects to Menara area'],
    bestTime: 'Early evening for the local promenade atmosphere',
  },
  {
    rank: 13,
    name: 'Olhao Garden',
    city: 'Agadir',
    type: 'City Center Park',
    icon: Leaf,
    price: 'Free',
    description:
      'Named after Agadir\'s Portuguese twin city, Olhao Garden sits at the heart of rebuilt Agadir and provides welcome shade in a city that sees over 300 sunny days per year. The compact garden holds a small museum documenting the devastating 1960 earthquake that destroyed the original city, along with a cafe and pathways through Mediterranean plantings. It is a starting point for exploring Agadir\'s rebuilt center.',
    highlights: ['Earthquake history museum', 'Central Agadir location', 'Shaded cafe', 'Portuguese twin city tribute'],
    bestTime: 'Midday as a refuge from the Agadir sun',
  },
  {
    rank: 14,
    name: 'Chellah Gardens',
    city: 'Rabat',
    type: 'Archaeological Garden',
    icon: Building,
    price: 'From 70 MAD',
    description:
      'Chellah is where gardens meet ancient ruins. This fortified site on the outskirts of Rabat contains the remains of the Roman city Sala Colonia, overlaid with a 14th-century Marinid necropolis. Nature has reclaimed much of the site — fig trees push through stone walls, storks nest atop the minaret, and wildflowers carpet the grounds in spring. The sacred eel pool and sunken garden add an atmospheric dimension found nowhere else in Morocco.',
    highlights: ['Roman and Marinid ruins', 'Nesting stork colonies', 'Sacred eel pool', 'Wildflower meadows in spring'],
    bestTime: 'Spring for wildflowers and active stork nesting season',
  },
  {
    rank: 15,
    name: 'Parc de la Ligue Arabe',
    city: 'Casablanca',
    type: 'Art Deco Public Park',
    icon: Award,
    price: 'Free',
    description:
      'Casablanca\'s most central green space, Parc de la Ligue Arabe was designed by French landscape architect Albert Laprade during the Protectorate era. The park stretches along Boulevard Moulay Youssef with Art Deco-influenced layout, manicured palm avenues, a cathedral-like canopy of ficus trees, and formal flower beds. The Sacred Heart Cathedral — now a cultural center — overlooks the park\'s northern end.',
    highlights: ['Art Deco landscape design', 'Cathedral backdrop', 'Ficus tree canopy', 'Central Casablanca location'],
    bestTime: 'Late afternoon for golden light filtering through the canopy',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ISLAMIC GARDEN DESIGN PRINCIPLES
   ═══════════════════════════════════════════════════════════════ */

const designPrinciples = [
  {
    title: 'Chahar Bagh (Four-Part Layout)',
    description: 'The garden is divided into four quadrants by water channels or pathways, symbolizing the four rivers of paradise described in the Quran. Each section may hold different plantings while maintaining geometric balance.',
  },
  {
    title: 'Water as a Central Element',
    description: 'Fountains, rills, and reflecting pools serve both practical irrigation and spiritual symbolism. The sound of moving water provides cooling and represents the life-giving force at the garden\'s heart.',
  },
  {
    title: 'Enclosure and Privacy',
    description: 'High walls create a private sanctuary — a controlled paradise separate from the outside world. The Arabic word for garden, "janna," is the same word used for paradise.',
  },
  {
    title: 'Geometric Symmetry',
    description: 'Paths, plantings, and water features follow precise geometric patterns reflecting the order of creation. This mathematical harmony connects to broader Islamic traditions in art and architecture.',
  },
  {
    title: 'Fragrant Plantings',
    description: 'Orange blossom, jasmine, rose, and mint engage the sense of smell. Scent was considered a bridge between the material and spiritual worlds, and fragrant gardens were places of contemplation.',
  },
  {
    title: 'Shade and Light Interplay',
    description: 'Pergolas, arcades, and canopy trees create patterns of shade and dappled light. The contrast between cool shade and bright sun is a fundamental organizing principle in hot climate garden design.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photographyTips = [
  { tip: 'Visit at opening time (typically 8-9 AM) for the softest light and fewest people in your frames.' },
  { tip: 'Use a polarizing filter to deepen the blues at Majorelle and reduce glare on water surfaces at Menara.' },
  { tip: 'Shoot through archways and doorways to create natural frames — a technique that works especially well at Le Jardin Secret and the Andalusian Garden.' },
  { tip: 'Get low among flower beds for foreground interest. Many Moroccan gardens have ground-level blooms that add depth when shot from a crouching position.' },
  { tip: 'Late afternoon golden hour creates warm tones on sandstone walls and long shadows through tree-lined paths. The Menara pavilion is best photographed at this time.' },
  { tip: 'Bring a macro lens for detail shots of zellige tilework, carved stucco, and individual flowers — these close-ups tell the story of craftsmanship.' },
  { tip: 'At Chellah, include the stork nests on the minaret for a composition that captures the intersection of nature and ruin.' },
  { tip: 'Ask permission before photographing gardeners or other visitors. A respectful approach often leads to more authentic portraits.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: VISITOR ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const visitorEssentials = [
  { label: 'Best Season', value: 'March to May (spring bloom)', icon: CalendarDays },
  { label: 'Budget per Garden', value: 'Free to from 120 MAD', icon: DollarSign },
  { label: 'Average Visit Duration', value: '1 to 2.5 hours per garden', icon: Clock },
  { label: 'Photography', value: 'Allowed (tripods may need permission)', icon: Camera },
  { label: 'Best for Families', value: 'Cyber Park, Hassan II Park, Lalla Hasna', icon: Users },
  { label: 'Most Instagrammable', value: 'Jardin Majorelle, Chellah, Le Jardin Secret', icon: Star },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoGardensParksPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ══════════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#2d5016] via-[#3a6b1e] to-[#1a3a0a]">
        <div className="hero-overlay" />
        <div className="container-morocco relative z-10 text-center py-20">
          <p className="text-green-200 font-[family-name:var(--font-heading)] text-sm tracking-widest uppercase mb-4">
            Nature &amp; Heritage
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white mb-6 leading-tight">
            Best Gardens &amp; Parks in Morocco
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From Jardin Majorelle&apos;s cobalt blue walls to Menara&apos;s olive groves reflecting the Atlas Mountains — explore 15 green spaces where Moroccan history, Islamic design, and botanical beauty converge.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BREADCRUMBS
          ══════════════════════════════════════════════════════════ */}
      <nav aria-label="Breadcrumb" className="bg-white/80 border-b border-[#A0522D]/10">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[#A0522D]/70">
            <li className="flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-[#A0522D] font-medium">Morocco Gardens &amp; Parks</li>
          </ol>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          INTRO & QUICK STATS
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-6">
              Why Morocco&apos;s Gardens Deserve a Place on Your Itinerary
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Morocco&apos;s gardens are far more than decorative green spaces. They are living records of dynasties, a testament to engineering ingenuity in an arid climate, and quiet retreats where the principles of Islamic paradise gardens have been cultivated for nearly a thousand years. The Almohad rulers of the 12th century established vast irrigated orchards that still produce fruit today. French colonial-era botanists introduced tropical species from across the globe. Contemporary artists have reimagined the garden as an outdoor gallery.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you are drawn to the iconic Majorelle Blue of Yves Saint Laurent&apos;s garden, the sunset reflections at Menara, or the Roman ruins reclaimed by wildflowers at Chellah, Morocco offers a garden experience for every traveler. This guide covers the 15 best gardens and parks across Marrakech, Fes, Rabat, Casablanca, and Agadir — with entry fees, best visiting times, and practical tips so you can plan your visits with confidence.
            </p>
          </div>

          {/* Quick stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {visitorEssentials.map((item) => (
              <div key={item.label} className="card-moroccan p-5 text-center">
                <item.icon className="w-6 h-6 text-[#A0522D] mx-auto mb-2" />
                <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-gray-800 mb-1">{item.label}</p>
                <p className="text-sm text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TOP 15 GARDENS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              The 15 Best Gardens &amp; Parks in Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ranked by historical significance, visitor experience, and botanical interest. Each entry includes entry fees (seasonal pricing can change), best visiting times, and what makes it worth your time.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {topGardens.map((garden) => (
              <article key={garden.rank} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center text-[#A0522D] font-[family-name:var(--font-display)] font-bold text-lg">
                    {garden.rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <garden.icon className="w-5 h-5 text-[#C4960C]" />
                      <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900">
                        {garden.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {garden.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ticket className="w-3.5 h-3.5" /> {garden.price}
                      </span>
                      <span className="flex items-center gap-1">
                        <Info className="w-3.5 h-3.5" /> {garden.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{garden.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {garden.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 text-xs bg-[#A0522D]/5 text-[#A0522D] px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-3 h-3" /> {h}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-[#C4960C] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-medium">Best time:</span> {garden.bestTime}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ISLAMIC GARDEN DESIGN
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              Understanding Islamic Garden Design
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moroccan gardens follow a design tradition rooted in the Quran&apos;s descriptions of paradise. These six principles underpin the gardens you will encounter across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {designPrinciples.map((principle, idx) => (
              <div key={idx} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-[#C4960C] font-bold text-sm">
                    {idx + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          GARDEN HISTORY TIMELINE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              A Brief History of Gardens in Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nine centuries of garden-making, from Almohad irrigation engineering to contemporary art installations.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { period: '12th Century', event: 'The Almohad dynasty establishes the Menara and Agdal Gardens in Marrakech, introducing sophisticated underground irrigation from the Atlas Mountains.' },
              { period: '14th Century', event: 'The Marinid dynasty builds the Chellah necropolis in Rabat, where gardens and sacred pools are woven among Roman ruins.' },
              { period: '16th Century', event: 'Saadian rulers expand Marrakech\'s garden tradition. The riad that later becomes Le Jardin Secret dates to this period.' },
              { period: '19th Century', event: 'Sultan Moulay Hassan creates Jnan Sbil in Fes. The Menara pavilion is rebuilt in its current Saadian-revival style.' },
              { period: '1920s-1950s', event: 'French colonial influence brings botanical science to Morocco. Jacques Majorelle begins his garden in 1923. Marcel Francois creates the Exotic Garden of Bouknadel in 1951.' },
              { period: '1980', event: 'Yves Saint Laurent and Pierre Berge purchase Jardin Majorelle, beginning decades of restoration that transform it into Morocco\'s most visited garden.' },
              { period: '2005-2016', event: 'A new generation of gardens emerges. Cyber Park reopens with technology integration. Anima Garden opens as an art-nature hybrid. Le Jardin Secret is meticulously restored and opened to the public.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-28 text-right">
                  <span className="font-[family-name:var(--font-display)] text-[#A0522D] font-semibold text-sm">
                    {item.period}
                  </span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#C4960C] mt-1" />
                  {idx < 6 && <div className="w-0.5 flex-1 bg-[#C4960C]/20 mt-1" />}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pb-2">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PHOTOGRAPHY TIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              Photography Tips for Morocco&apos;s Gardens
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical advice for capturing these gardens at their best, whether you are shooting with a phone or a dedicated camera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {photographyTips.map((item, idx) => (
              <div key={idx} className="card-moroccan p-5 flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#A0522D]/10 flex items-center justify-center text-[#A0522D] text-xs font-bold mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ENTRY FEES COMPARISON TABLE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              Entry Fees at a Glance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick reference for planning your garden visits. All prices are indicative — seasonal pricing can change, so confirm at the venue.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#A0522D]/20">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#A0522D]">Garden</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#A0522D]">City</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#A0522D]">Entry Fee</th>
                </tr>
              </thead>
              <tbody>
                {topGardens.map((g, idx) => (
                  <tr key={g.rank} className={idx % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}>
                    <td className="py-2.5 px-4 text-gray-800 font-medium">{g.name}</td>
                    <td className="py-2.5 px-4 text-gray-600">{g.city}</td>
                    <td className="py-2.5 px-4 text-[#C4960C] font-medium">{g.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BEST TIME TO VISIT
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              Best Time to Visit Morocco&apos;s Gardens
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Flower2 className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Spring (March - May)</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                The best season overall. Temperatures sit between 20 and 28 degrees Celsius in most cities. Gardens are at peak bloom with roses, bougainvillea, and jasmine flowering. Chellah is carpeted in wildflowers. The light is warm without the harshness of summer. This is also when Marrakech holds its Popular Arts Festival and gardens serve as event backdrops.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Summer (June - August)</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Marrakech regularly exceeds 40 degrees Celsius. Visit gardens at opening time or after 5 PM. Coastal gardens in Rabat and Agadir remain more comfortable. The Menara and Agdal Gardens provide shade under their olive and fruit tree canopies. Carry water and wear a hat. Summer is low season so crowds are thinner at Majorelle.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Autumn (September - November)</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                The second-best season for garden visits. Temperatures cool to 22 to 30 degrees. Citrus fruits begin ripening in the Agdal orchards. Bougainvillea often has a second flush of color. October is particularly pleasant with warm days and cool evenings. Fewer tourists than spring but gardens are still well-maintained and lush.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Winter (December - February)</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mild in Marrakech (10 to 20 degrees) with occasional rain. Gardens are greener due to winter rains but some flowering plants are dormant. Majorelle remains visually striking year-round due to its painted structures and evergreen cacti. The Agdal Gardens may have restricted access in winter. Jnan Sbil in Fes can be chilly but atmospheric with morning mist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRACTICAL TIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              Practical Tips for Visiting Moroccan Gardens
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-5">
              <DollarSign className="w-6 h-6 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">Budgeting</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Many gardens are free. Budget from 100 MAD for paid gardens like Majorelle. Carry small change for tips to garden guardians at free sites. Student discounts are sometimes available with an international student card.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <Clock className="w-6 h-6 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">Timing Your Visits</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Arrive at opening for popular gardens. Majorelle can see over 700,000 visitors per year so weekday mornings are best. Combine nearby gardens in one morning — Menara and Cyber Park are 15 minutes apart by foot. The Agdal Gardens are only open Fridays and Sundays.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <BookOpen className="w-6 h-6 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">Etiquette</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Stay on marked paths to protect plantings. Do not pick flowers, fruit, or leaves. Keep noise levels down — gardens are places of quiet contemplation for locals. Some gardens have picnic areas; eat only in designated spots. Dispose of litter responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          GARDEN ROUTES BY CITY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <MapPin className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              Suggested Garden Routes by City
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combine multiple gardens into a single day with these city-specific walking routes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3 text-lg">
                Marrakech Garden Day
              </h3>
              <p className="text-gray-600 text-sm mb-4">Full day covering four major gardens</p>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-[#C4960C] text-xs font-bold">1</span>
                  <span><strong>8:00 AM</strong> — Start at Jardin Majorelle at opening to beat the crowds. Allow 1.5 hours including the Berber Museum.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-[#C4960C] text-xs font-bold">2</span>
                  <span><strong>10:00 AM</strong> — Walk 10 minutes south to Cyber Park for a stroll through the shaded avenues. Allow 45 minutes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-[#C4960C] text-xs font-bold">3</span>
                  <span><strong>11:30 AM</strong> — Head into the medina to Le Jardin Secret. Climb the tower for rooftop views. Lunch at the on-site cafe.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-[#C4960C] text-xs font-bold">4</span>
                  <span><strong>5:00 PM</strong> — Finish at Menara Gardens for sunset. Watch the Atlas Mountains reflect in the basin as the light fades.</span>
                </li>
              </ol>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3 text-lg">
                Rabat Green Trail
              </h3>
              <p className="text-gray-600 text-sm mb-4">Half day covering three distinct garden styles</p>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-[#C4960C] text-xs font-bold">1</span>
                  <span><strong>9:00 AM</strong> — Begin at the Andalusian Garden in the Kasbah of the Udayas. Enjoy the river views and jasmine-scented paths. Allow 45 minutes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-[#C4960C] text-xs font-bold">2</span>
                  <span><strong>10:30 AM</strong> — Take a taxi or tram to Chellah. Explore the Roman ruins, Marinid tombs, stork colonies, and the sacred eel pool. Allow 1.5 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-[#C4960C] text-xs font-bold">3</span>
                  <span><strong>12:30 PM</strong> — Drive 17 km north to the Exotic Garden of Bouknadel for tropical immersion. End with lunch in Sale or return to Rabat.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT TO BRING
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              What to Bring on a Garden Visit
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { item: 'Sunscreen & Hat', reason: 'Many gardens have open sections with direct sun exposure, particularly Menara and Agdal.' },
              { item: 'Water Bottle', reason: 'Not all gardens have drinking fountains. Carry at least 500 ml, more in summer months.' },
              { item: 'Comfortable Shoes', reason: 'Gravel paths, uneven stone at Chellah, and cobblestones in medina gardens require sturdy footwear.' },
              { item: 'Small Change (MAD)', reason: 'For entry fees at smaller sites, tipping garden guardians, and on-site cafes that may not accept cards.' },
              { item: 'Camera & Polarizer', reason: 'A polarizing filter deepens blues, reduces water glare, and saturates foliage colors.' },
              { item: 'Light Layer', reason: 'Shaded garden areas can feel cool even on warm days. Morning visits in spring benefit from a light jacket.' },
              { item: 'Insect Repellent', reason: 'Water features attract mosquitoes, especially at dusk. Jnan Sbil lake and Chellah pool areas can be buggy.' },
              { item: 'Notebook or Sketchpad', reason: 'Many artists find Moroccan gardens ideal for plein air sketching. Drawing is welcomed at most sites.' },
            ].map((item, idx) => (
              <div key={idx} className="card-moroccan p-4">
                <p className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 text-sm mb-1">{item.item}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <HelpCircle className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {jsonLdFaq.mainEntity.map((faq, idx) => (
              <div key={idx} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A0522D]/10 flex items-center justify-center text-[#A0522D] text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  {faq.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed pl-8">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED GUIDES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#A0522D] mb-4">
              Related Morocco Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Continue planning your Morocco trip with these companion guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { title: 'Things to Do in Marrakech', href: '/things-to-do-marrakech', desc: 'Top attractions, day trips, and experiences in the Red City.' },
              { title: 'Morocco Weather Guide', href: '/morocco-weather-guide', desc: 'Month-by-month climate data and packing advice.' },
              { title: 'Morocco Photography Guide', href: '/morocco-photography-guide', desc: 'Best locations, camera gear, and etiquette tips.' },
              { title: 'Things to Do in Rabat', href: '/things-to-do-rabat', desc: 'Capital city highlights including the Kasbah and Chellah.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2 group-hover:text-[#A0522D] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{guide.desc}</p>
                <span className="text-[#A0522D] text-sm font-medium flex items-center gap-1">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-[#A0522D] to-[#7a3d21]">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-4">
            Plan Your Morocco Garden Tour
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            From the vibrant blues of Majorelle to the ancient olives of Menara, Morocco&apos;s gardens are a journey through centuries of art, science, and spiritual design. Start planning your visits today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/things-to-do-marrakech"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-[#FAF8F5] transition-colors"
            >
              Explore Marrakech <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-travel-tips"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-white/10 transition-colors"
            >
              Travel Tips <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

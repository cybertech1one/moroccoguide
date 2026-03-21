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
  Camera,
  Building,
  Building2,
  Landmark,
  BookOpen,
  Crown,
  Compass,
  CheckCircle,
  Layers,
  Eye,
  Columns3,
  Ruler,
  Pen,
  Gem,
  Shield,
  Globe,
  Calendar,
  Lightbulb,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Architecture Guide 2026 | Islamic Design, Riads, Kasbahs & Moorish Masterpieces',
  description:
    'Explore Morocco\'s architectural heritage from ancient Roman ruins at Volubilis to Moorish masterpieces in Fes and Marrakech. Covers zellige tilework, carved plaster (gebs), cedar woodwork, kasbahs, medersas, mosques, riads, and modern Moroccan design.',
  keywords: [
    'Morocco architecture',
    'Islamic architecture Morocco',
    'Moorish design Morocco',
    'Moroccan riads architecture',
    'kasbahs Morocco',
    'zellige tilework',
    'gebs carved plaster Morocco',
    'cedar woodwork Morocco',
    'medersas Morocco',
    'Morocco mosques',
    'Volubilis Roman ruins',
    'French colonial architecture Morocco',
    'modern architecture Morocco',
    'Moroccan design elements',
    'Hassan II Mosque Casablanca',
    'Ben Youssef Medersa Marrakech',
    'Bou Inania Medersa Fes',
    'Morocco photography architecture',
    'Ait Benhaddou kasbah',
    'Morocco architectural tours',
    'Moroccan riad design',
    'Morocco building traditions',
  ],
  openGraph: {
    title: 'Morocco Architecture Guide 2026 | Islamic Design, Riads, Kasbahs & Moorish Masterpieces',
    description:
      'From ancient Volubilis to the towering Hassan II Mosque, Morocco holds thirteen centuries of architectural brilliance. Discover zellige tilework, carved plaster, cedar woodwork, kasbahs, and the buildings that define Moroccan civilization.',
    url: `${BASE_URL}/morocco-architecture`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech-architecture.webp`,
        width: 1200,
        height: 630,
        alt: 'Intricate Moorish archways and zellige tilework inside a Moroccan palace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Architecture Guide 2026 | Moorish Design & Islamic Masterpieces',
    description:
      'Discover thirteen centuries of Moroccan architectural brilliance. Zellige tilework, carved plaster, cedar ceilings, kasbahs, medersas, mosques, and the buildings that shaped a civilization.',
    images: [`${BASE_URL}/images/hero-marrakech-architecture.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-architecture` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-architecture`,
  name: 'Morocco Architecture Guide 2026 | Islamic Design, Riads, Kasbahs & Moorish Masterpieces',
  description:
    'Comprehensive guide to Morocco\'s architectural heritage from Roman ruins to contemporary design. Covers Islamic architecture, Moorish design, zellige, carved plaster, cedar woodwork, kasbahs, medersas, mosques, riads, and modern buildings.',
  url: `${BASE_URL}/morocco-architecture`,
  image: `${BASE_URL}/images/hero-marrakech-architecture.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-architecture`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Architecture Guide', item: `${BASE_URL}/morocco-architecture` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the main architectural styles found in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco features Islamic and Moorish architecture (mosques, medersas, palaces), Berber kasbahs and ksour, ancient Roman ruins at Volubilis, French colonial Art Deco in Casablanca and Rabat, traditional riad courtyard houses, and contemporary designs like the Grand Theatre de Rabat. The decorative arts include zellige mosaic tilework, carved plaster (gebs), and cedar wood carving (taqshirat).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can non-Muslims enter mosques in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hassan II Mosque in Casablanca is the only functioning mosque in Morocco open to non-Muslim visitors. It offers guided tours daily except Friday. All other active mosques are closed to non-Muslims, though you can admire their exteriors. Medersas (Quranic schools), many of which are now museums, are open to all visitors regardless of faith.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is zellige tilework and where can I see the best examples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zellige is hand-cut geometric mosaic tilework made from individually chiseled pieces of glazed terracotta. Master artisans (maallems) cut each tile by hand and arrange them into intricate geometric star patterns. The finest examples are found at the Bou Inania Medersa in Fes, the Bahia Palace in Marrakech, and the Hassan II Mosque in Casablanca. Fes remains the center of zellige production.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a riad and a dar in Moroccan architecture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are traditional courtyard houses, but a riad specifically has a central garden with trees and plants (the word comes from the Arabic "ryad" meaning garden). A dar has a central courtyard with a fountain but no garden. In practice, the terms are used interchangeably in the tourism industry, and many properties called riads are technically dars.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best city for architecture lovers visiting Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes is widely considered the best city for architecture enthusiasts. Its medina, a UNESCO World Heritage Site, contains the oldest university in the world (al-Qarawiyyin, founded 859 CE), stunning medersas, and the highest concentration of traditional Moroccan craftsmanship. Marrakech offers grander palaces, while Casablanca has the Hassan II Mosque and remarkable Art Deco heritage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are kasbahs and where are the best ones in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kasbahs are fortified strongholds built from rammed earth (pise), typically featuring corner towers and thick walls. They served as residences for local leaders and defensive structures. The most famous is Ait Benhaddou near Ouarzazate, a UNESCO World Heritage Site. Other outstanding examples include the Kasbah of the Udayas in Rabat, Taourirt Kasbah in Ouarzazate, and Telouet Kasbah in the High Atlas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do architectural tours cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A half-day guided architecture tour in Fes or Marrakech costs from 400 MAD per person. Full-day private tours with an architecture specialist run from 1,200 MAD. Entry fees for individual monuments range from 10 MAD to 70 MAD. The Hassan II Mosque tour costs 130 MAD. Budget from 200-500 MAD per day for entry fees if visiting multiple sites.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to photograph Moroccan architecture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The golden hour (first and last hour of sunlight) produces the warmest tones on rammed-earth buildings and zellige. For interior photography at medersas and palaces, midday provides the best overhead light through open courtyards. Overcast days are ideal for zellige detail shots as direct sunlight creates harsh reflections on glazed tiles. Spring (March-May) and autumn (September-November) offer the most comfortable conditions for long walking tours.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ARCHITECTURAL STYLES
   ═══════════════════════════════════════════════════════════════ */

const architecturalStyles = [
  {
    name: 'Islamic & Moorish',
    period: '7th century CE onwards',
    icon: Landmark,
    description:
      'The dominant architectural language of Morocco for over 1,300 years. Characterized by horseshoe arches, geometric patterns, muqarnas (honeycomb vaulting), and the strict avoidance of figurative imagery. Moorish architecture reached its peak under the Almohad and Marinid dynasties.',
    keyFeatures: ['Horseshoe and multifoil arches', 'Muqarnas stalactite ceilings', 'Geometric tile patterns', 'Carved stucco ornamentation'],
    bestExamples: ['Koutoubia Mosque, Marrakech', 'Bou Inania Medersa, Fes', 'Hassan Tower, Rabat'],
  },
  {
    name: 'Berber Vernacular',
    period: 'Pre-Islamic to present',
    icon: Shield,
    description:
      'Indigenous Amazigh building traditions shaped by climate and geography. Rammed earth (pise) construction dominates the south, producing the ochre kasbahs and ksour (fortified villages) of the Draa and Dades valleys. In the Rif and Atlas, stone construction prevails with flat roofs for drying crops.',
    keyFeatures: ['Rammed earth (pise) walls', 'Corner watchtowers', 'Communal granaries (agadirs)', 'Geometric painted decoration'],
    bestExamples: ['Ait Benhaddou, Ouarzazate', 'Ksar of Tizourgane, Anti-Atlas', 'Agadir Igherm, Tata'],
  },
  {
    name: 'Andalusian',
    period: '15th-17th century',
    icon: Columns3,
    description:
      'When Muslims and Jews were expelled from Spain, they brought Andalusian refinement to Morocco. This influence is most visible in Fes, Tetouan, and Chefchaouen. Expect elaborate tilework, ornate garden courtyards, carved wooden screens (moucharabieh), and fountains as architectural centerpieces.',
    keyFeatures: ['Elaborate garden courtyards', 'Moucharabieh lattice screens', 'Carved wooden ceilings', 'Central fountain design'],
    bestExamples: ['Nejjarine Fondouk, Fes', 'Medina of Tetouan', 'Chefchaouen old town'],
  },
  {
    name: 'French Colonial & Art Deco',
    period: '1912-1956',
    icon: Building2,
    description:
      'During the French Protectorate, architect Henri Prost planned new European quarters (villes nouvelles) alongside existing medinas. Casablanca became a laboratory for Art Deco and Modernist architecture, while Rabat received grand administrative buildings blending Moorish motifs with French Beaux-Arts traditions.',
    keyFeatures: ['Art Deco facades in Casablanca', 'Mauresque hybrid style', 'Wide boulevards and arcades', 'Iron balconies and terraces'],
    bestExamples: ['Cinema Rialto, Casablanca', 'Casablanca Cathedral (Sacre Coeur)', 'Habous Quarter, Casablanca'],
  },
  {
    name: 'Contemporary Moroccan',
    period: '2000s onwards',
    icon: Globe,
    description:
      'A new generation of architects is creating bold work that references traditional forms without copying them. The Grand Theatre de Rabat (Zaha Hadid), the ONCF Kenitra station, and the MACAAL museum in Marrakech signal a confident architectural future.',
    keyFeatures: ['Parametric geometry echoing zellige', 'Rammed earth in modern contexts', 'Passive cooling strategies', 'Dialogue between old and new'],
    bestExamples: ['Grand Theatre de Rabat', 'ONCF Kenitra Station', 'MACAAL, Marrakech'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DECORATIVE ARTS
   ═══════════════════════════════════════════════════════════════ */

const decorativeArts = [
  {
    name: 'Zellige Tilework',
    icon: Layers,
    description:
      'Hand-cut chips of glazed terracotta assembled into geometric mosaics. A master craftsman (maalem) memorizes hundreds of patterns, cutting each tile individually with a hammer. The patterns follow strict mathematical rules based on star geometry. Fes has been the center of zellige production since the 10th century.',
    whereToSee: 'Bou Inania Medersa (Fes), Bahia Palace (Marrakech), Hassan II Mosque (Casablanca)',
    craftsmanNote: 'A single square meter can contain 800+ hand-cut pieces and takes several days to complete.',
  },
  {
    name: 'Carved Plaster (Gebs)',
    icon: Pen,
    description:
      'The art of carving arabesques, floral scrollwork, and calligraphy into wet plaster. Applied above the zellige band, it creates a lace-like layer. The plaster is carved while still soft using small chisels. Once dried, it becomes rock-hard. The depth of carving indicates the artisan\'s skill and the patron\'s wealth.',
    whereToSee: 'Attarine Medersa (Fes), Saadian Tombs (Marrakech), Dar Si Said Museum (Marrakech)',
    craftsmanNote: 'Gebs carvers train for 8-10 years before they are considered masters. The tradition passes from father to son.',
  },
  {
    name: 'Cedar Woodwork (Taqshirat)',
    icon: Ruler,
    description:
      'Atlas cedar provides the material for carved ceilings, doors, and screens. Woodworkers carve geometric and floral motifs into panels, then paint them with natural pigments. Cedar is prized for its beauty and natural insect resistance. Its scent fills old palaces and medersas centuries after construction.',
    whereToSee: 'Nejjarine Museum of Wooden Arts (Fes), Bahia Palace (Marrakech), Ben Youssef Medersa (Marrakech)',
    craftsmanNote: 'Moroccan cedar comes from Middle Atlas forests. Conservation efforts now protect these ancient forests.',
  },
  {
    name: 'Painted Wood (Zouak)',
    icon: Eye,
    description:
      'Painting geometric and floral patterns onto wood surfaces using natural pigments — saffron for yellow, pomegranate for red, indigo for blue, mint for green. The painted ceilings of Moroccan palaces are among the most elaborate in the Islamic world.',
    whereToSee: 'Bahia Palace (Marrakech), Royal Palace doors (Fes), Dar Jamai Museum (Meknes)',
    craftsmanNote: 'A single palace ceiling can take a team of zouak painters 6-12 months to complete.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MUST-SEE BUILDINGS
   ═══════════════════════════════════════════════════════════════ */

const mustSeeBuildings = [
  {
    name: 'Hassan II Mosque',
    city: 'Casablanca',
    built: '1986-1993',
    icon: Landmark,
    entry: 'From 130 MAD (guided tour)',
    description:
      'The largest mosque in Africa and the 5th largest in the world. Its 210-meter minaret is the tallest religious structure on Earth. Built on a platform over the Atlantic Ocean, fulfilling the Quranic verse that God\'s throne was built upon water. The retractable roof opens to reveal the sky. The interior holds 25,000 worshippers and the esplanade accommodates 80,000 more. It is the only functioning mosque in Morocco that admits non-Muslim visitors.',
    architecturalHighlights: ['Retractable titanium roof', 'Laser beam pointing toward Mecca from the minaret', 'Italian marble floors with underfloor heating', 'Hand-carved granite columns from Tafraoute'],
    visitingTips: 'Tours run Saturday-Thursday at 9am, 10am, 11am, and 2pm (closed Friday). Arrive 15 minutes early. Dress modestly — no shorts or sleeveless tops.',
  },
  {
    name: 'Bou Inania Medersa',
    city: 'Fes',
    built: '1350-1357',
    icon: BookOpen,
    entry: 'From 30 MAD',
    description:
      'The finest Marinid-era theological college and the architectural jewel of Fes. Every surface is covered with decoration: zellige on the lower walls, carved plaster in the middle band, and carved cedar above. The central courtyard features a white marble floor, an ablution fountain of onyx, and a water channel that runs the full length of the building. Unusually for a medersa, it also functions as a Friday mosque with its own minaret.',
    architecturalHighlights: ['Complete trilogy of zellige, gebs, and cedar', 'Onyx ablution fountain', 'Bronze doors with geometric knockers', 'Water channel running through the courtyard'],
    visitingTips: 'Open 9am-5pm daily. Visit early morning for the best light in the courtyard. Photography is allowed.',
  },
  {
    name: 'Ben Youssef Medersa',
    city: 'Marrakech',
    built: '1557 (rebuilt under Saadians)',
    icon: BookOpen,
    entry: 'From 50 MAD',
    description:
      'Once the largest Islamic college in North Africa, housing 900 students in 130 dormitory cells arranged around a central courtyard. The contrast between the plain student cells and the lavishly decorated public spaces is striking. The carved plaster work here is among the most refined in Morocco, with Kufic calligraphy woven into floral arabesques. After years of restoration, it reopened in 2022.',
    architecturalHighlights: ['130 student dormitory cells on two floors', 'Prayer hall with Carrara marble columns', 'Kufic calligraphy integrated into plaster carving', 'Green-tiled pyramidal roof'],
    visitingTips: 'Open 9am-6pm. Combined ticket with nearby Museum of Marrakech available for from 60 MAD. Go at opening time to avoid crowds.',
  },
  {
    name: 'Bahia Palace',
    city: 'Marrakech',
    built: '1866-1900',
    icon: Crown,
    entry: 'From 70 MAD',
    description:
      'Built over 14 years by Grand Vizier Si Moussa and his son Ba Ahmed, the Bahia ("Brilliance") Palace covers 8,000 square meters. The palace showcases every Moroccan decorative art at its peak: zellige floors, painted cedar ceilings (some reaching 6 meters high), marble-paved courtyards with central fountains, and carved plaster walls. The Riad al-Ain garden courtyard, with its cypress and orange trees, is one of the most photographed spaces in Morocco.',
    architecturalHighlights: ['8,000 sqm of interconnected courtyards and rooms', 'Painted cedar ceilings of extraordinary detail', 'Marble courtyard with central fountain', 'Harem quarters with stained glass windows'],
    visitingTips: 'Open 9am-5pm. Entry from 70 MAD. Midday light is best for the courtyards. Hire a guide at the entrance (from 50 MAD) to understand the palace layout.',
  },
  {
    name: 'Ait Benhaddou',
    city: 'Near Ouarzazate',
    built: '11th century onwards',
    icon: Shield,
    entry: 'Free (donations appreciated)',
    description:
      'A UNESCO World Heritage ksar (fortified village) of stunning rammed-earth architecture. The settlement rises up a hillside in a cascade of ochre towers, walls, and terraces. Narrow lanes wind between houses decorated with geometric patterns pressed into the mud plaster. The ksar has appeared in over 20 films including Gladiator, Game of Thrones, and Lawrence of Arabia. A few families still live within the walls.',
    architecturalHighlights: ['Multi-story rammed-earth towers', 'Geometric mud-plaster decoration', 'Defensive walls and corner bastions', 'Communal granary at the summit'],
    visitingTips: 'Cross the river on foot (stepping stones) or take the footbridge. Morning light is best for photography from the opposite bank. Allow 2 hours for a full visit.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photographyTips = [
  {
    title: 'Golden Hour on Rammed Earth',
    icon: Camera,
    tip: 'The warm tones of kasbahs and medina walls glow most intensely during the first and last hour of sunlight. Ait Benhaddou and the Draa Valley kasbahs transform from dull brown to rich gold at sunset.',
  },
  {
    title: 'Courtyard Light at Midday',
    icon: Lightbulb,
    tip: 'Open courtyards in medersas and palaces receive direct overhead light between 11am and 1pm. This is the only time the full zellige and carved plaster is evenly illuminated. For the Bou Inania and Ben Youssef, midday visits produce the best interior shots.',
  },
  {
    title: 'Zellige Detail Shots',
    icon: Layers,
    tip: 'Overcast skies are your ally for zellige photography. Glazed tiles create distracting reflections in direct sunlight. Use a polarizing filter on sunny days to cut glare. Get close and fill the frame with repeating geometric patterns for the strongest compositions.',
  },
  {
    title: 'Doorways and Passages',
    icon: Compass,
    tip: 'Moroccan doors are masterpieces in their own right — studded brass, carved cedar, painted panels. Frame subjects through arched doorways to create depth. In medinas, the contrast between dark passages and sunlit courtyards produces dramatic compositions.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CITY ARCHITECTURE TOURS
   ═══════════════════════════════════════════════════════════════ */

const cityArchGuides = [
  {
    city: 'Fes',
    icon: BookOpen,
    tagline: 'The intellectual capital',
    highlights: [
      'Al-Qarawiyyin Mosque & University (859 CE) — oldest continuously operating university',
      'Bou Inania Medersa — the complete decorative trilogy of zellige, gebs, and cedar',
      'Attarine Medersa — intimate scale with exquisite carved plaster',
      'Nejjarine Fondouk — restored caravansary housing the Museum of Wooden Arts',
    ],
    budget: 'Budget from 200 MAD for entry fees. Half-day architecture tour from 400 MAD.',
  },
  {
    city: 'Marrakech',
    icon: Crown,
    tagline: 'The imperial showpiece',
    highlights: [
      'Koutoubia Mosque — the template for the Giralda in Seville',
      'Ben Youssef Medersa — the largest medersa in North Africa',
      'Bahia Palace — 8,000 sqm of decorative arts at their peak',
      'Saadian Tombs — muqarnas vaulting of extraordinary precision',
    ],
    budget: 'Budget from 300 MAD for entry fees. Full-day guided tour from 800 MAD.',
  },
  {
    city: 'Casablanca',
    icon: Building2,
    tagline: 'Art Deco and the modern mosque',
    highlights: [
      'Hassan II Mosque — the defining building of contemporary Morocco',
      'Art Deco downtown — one of the largest Art Deco collections in the world',
      'Cathedral Sacre Coeur — neo-Gothic cathedral, now a cultural center',
      'Habous Quarter — 1930s French-built "new medina" blending styles',
    ],
    budget: 'Hassan II Mosque tour from 130 MAD. Art Deco walking tour from 300 MAD.',
  },
  {
    city: 'Meknes & Volubilis',
    icon: Landmark,
    tagline: 'Imperial grandeur and Roman ruins',
    highlights: [
      'Bab Mansour — the largest decorated gate in Morocco',
      'Heri es-Souani — royal granaries and stables for 12,000 horses',
      'Volubilis — remarkably preserved Roman city with stunning floor mosaics',
      'Moulay Idriss Zerhoun — Morocco\'s holiest town on two hills',
    ],
    budget: 'Volubilis entry from 70 MAD. Combined Meknes-Volubilis day trip from 600 MAD.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoArchitecturePage() {
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
            backgroundImage: 'url(/images/hero-marrakech-architecture.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Architecture Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Building className="w-4 h-4" />
            Art &amp; Architecture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Architecture Guide:
            <br className="hidden md:block" /> 1,300 Years of Building Brilliance
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the Roman columns of Volubilis to the soaring minaret of the Hassan II Mosque,
            Morocco holds one of the richest architectural legacies on Earth. A guide to the
            buildings, decorative arts, and design traditions that shaped a civilization.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco&apos;s Architecture Stands Apart
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of Africa, Europe, and the Arab world. The Romans
                built cities with columned forums. The Idrissids founded Fes. The Almohads raised
                minarets that inspired Seville&apos;s Giralda. The Marinids perfected the medersa.
                And French colonial architects turned Casablanca into an open-air Art Deco museum.
              </p>
              <p>
                What makes Moroccan architecture unique is the decorative trinity: zellige (geometric
                mosaic tilework) on the lower walls, gebs (carved plaster) in the middle band, and
                taqshirat (carved and painted cedar) above. These three crafts combine to create
                spaces of mathematical precision. The geometric patterns express an understanding
                of infinity — a core concept in Islamic theology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architectural Styles ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Five Architectural Traditions of Morocco
          </h2>

          <div className="space-y-8">
            {architecturalStyles.map((style) => (
              <div key={style.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <style.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {style.name}
                    </h3>
                    <span className="text-sm text-[var(--color-accent)]">
                      <Calendar className="w-3.5 h-3.5 inline mr-1" />
                      {style.period}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {style.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {style.keyFeatures.map((feature) => (
                        <li key={feature} className="text-xs text-[var(--text-secondary)] flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-[var(--color-gold)] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                      Best Examples
                    </h4>
                    <ul className="space-y-1">
                      {style.bestExamples.map((example) => (
                        <li key={example} className="text-xs text-[var(--text-secondary)] flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)] flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Decorative Arts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Decorative Arts: Zellige, Gebs, Cedar &amp; Zouak
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decorativeArts.map((art) => (
              <div key={art.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <art.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {art.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {art.description}
                </p>
                <div className="space-y-2 border-t border-[var(--border-primary)] pt-3">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <MapPin className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                    <span className="font-semibold">Where to see:</span> {art.whereToSee}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] italic">
                    <Star className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                    {art.craftsmanNote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative hierarchy explainer */}
          <div className="mt-12 card-moroccan p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 text-center">
              <Info className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
              The Three-Zone System
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Traditional Moroccan interiors follow a strict vertical hierarchy. The lower wall
              (up to 1.5 meters) is waterproof zellige. The middle band is carved plaster (gebs),
              protected from water by its height. The ceiling features carved and painted cedar.
              This system reflects both material durability and the Islamic principle that decoration
              should increase as the eye moves upward toward the heavens.
            </p>
          </div>
        </div>
      </section>

      {/* ── Must-See Buildings ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Must-See Buildings in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five buildings that represent the full range of Moroccan architectural achievement,
            from imperial mosques to Berber fortified villages.
          </p>

          <div className="space-y-8">
            {mustSeeBuildings.map((building) => (
              <div key={building.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <building.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {building.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {building.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                        {building.built}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                        {building.entry}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {building.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                      Architectural Highlights
                    </h4>
                    <ul className="space-y-1">
                      {building.architecturalHighlights.map((highlight) => (
                        <li key={highlight} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                          <Eye className="w-3 h-3 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                      Visiting Tips
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <Clock className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                      {building.visitingTips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Riad Architecture ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Riad: Morocco&apos;s Courtyard House
          </h2>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              The riad is the fundamental unit of Moroccan domestic architecture. From outside,
              it presents a blank wall — a plain door revealing nothing. Step through and the
              effect is immediate: a central courtyard open to the sky, with a fountain, fruit
              trees, and trailing bougainvillea. All rooms face inward. This design provides
              privacy, creates a cool microclimate, channels rainwater, and embodies the Islamic
              principle that private spaces can be lavish while exteriors remain modest. The richest
              riads in Fes and Marrakech contain zellige courtyards and painted cedar ceilings
              that rival any palace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Riad vs. Dar
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A true riad has a garden (ryad) at its center with trees and planted beds. A dar
                has a courtyard with a fountain but no garden. In practice, both terms are used
                interchangeably in tourism. Many boutique hotels called &quot;riads&quot; are technically dars.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Staying in a Riad
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Hundreds of riads have been converted into guesthouses, ranging from budget (from 300 MAD
                per night) to ultra-luxury (from 5,000 MAD per night). Staying in a restored riad is
                the best way to experience this architectural tradition from the inside. Fes and
                Marrakech have the largest selection.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                The Rooftop Terrace
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Every riad has a rooftop terrace, traditionally used for drying laundry and sleeping
                on hot summer nights. Today, many riad guesthouses have transformed their terraces
                into breakfast areas with panoramic views over the medina rooftops and minarets.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Architectural Elements
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Look for the bent entrance (chicane) designed for privacy, the central fountain,
                tadelakt (polished waterproof lime plaster) on walls, carved plaster above doorways,
                and the moucharabieh (wooden lattice screens) on upper-floor windows that allow
                residents to see out without being seen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Volubilis & Roman Heritage ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Columns3 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Volubilis: Morocco&apos;s Roman Chapter
          </h2>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              Before Islam, Rome ruled northern Morocco. Volubilis (Walili in Arabic), 30 km north
              of Meknes, was the capital of the Roman province of Mauretania Tingitana from the
              1st century BCE to the 3rd century CE. The Triumphal Arch of Caracalla still stands,
              the Basilica&apos;s columns rise against rolling wheat fields, and the floor mosaics —
              depicting Orpheus, Bacchus, and Diana — are among the finest Roman mosaics in Africa,
              many still in their original locations. A UNESCO World Heritage Site since 1997,
              Volubilis was never buried like Pompeii but gradually abandoned, its stones repurposed
              for buildings in Meknes and Moulay Idriss. Entry costs from 70 MAD. Allow 2-3 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5 text-center">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Triumphal Arch
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Built in 217 CE to honor Emperor Caracalla. Partially reconstructed, it marks the
                southeastern end of the main avenue.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Building className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                The Basilica
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                The civic center of Roman Volubilis. Rows of standing columns define the nave.
                Adjacent to the Capitol temple and the forum.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Floor Mosaics
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Over 30 mosaic floors survive in the House of Orpheus, House of the Athlete,
                and other patrician residences. Mythological scenes in vivid color.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── City Architecture Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Architecture by City
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cityArchGuides.map((guide) => (
              <div key={guide.city} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-1">
                  <guide.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {guide.city}
                  </h3>
                </div>
                <p className="text-sm text-[var(--color-accent)] italic mb-4">{guide.tagline}</p>
                <ul className="space-y-2 mb-4">
                  {guide.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                      <Star className="w-3 h-3 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--text-muted)] border-t border-[var(--border-primary)] pt-3">
                  <Info className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                  {guide.budget}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kasbahs & Ksour Deep Dive ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kasbahs &amp; Ksour: Fortified Earth Architecture
          </h2>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              South of the High Atlas, the dominant building material becomes the earth itself.
              Rammed earth (pise) — a mixture of clay, gravel, straw, and water pounded between
              wooden forms — produces walls that can stand for centuries if maintained. A kasbah
              is a fortified residence built by a local chief, featuring corner towers and thick
              walls. A ksar (plural: ksour) is a fortified village — multiple families behind
              a shared defensive wall. The Draa Valley, Dades Valley, and Todra Gorge area contain
              the highest concentration of kasbahs in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ait Benhaddou &amp; Telouet
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ait Benhaddou is the most famous ksar in Morocco — a UNESCO World Heritage Site
                and filming location for Gladiator, Game of Thrones, and The Mummy. Nearby Telouet
                Kasbah, the crumbling Glaoui stronghold, still displays extraordinary zellige and
                painted ceilings despite decades of neglect.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Taourirt &amp; Kasbah of the Udayas
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Taourirt Kasbah in Ouarzazate has been partially restored and shows how these
                fortified compounds functioned. In Rabat, the 12th-century Kasbah of the Udayas
                overlooks the Atlantic and contains an Andalusian garden and streets painted in
                blue and white.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── French Colonial Architecture ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Building2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            French Colonial &amp; Art Deco Heritage
          </h2>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              The French Protectorate (1912-1956) preserved existing medinas while building new
              European-style cities (villes nouvelles) alongside them. Casablanca became a testing
              ground for avant-garde architecture — Boulevard Mohammed V is lined with Art Deco
              facades blending Parisian elegance with Moroccan motifs. The Casamemoire association
              has catalogued over 200 heritage buildings and offers guided walking tours.
            </p>
            <p>
              The Habous Quarter, a 1930s &quot;new medina&quot; designed by French architects to replicate
              traditional Moroccan urban forms, remains one of the most successful experiments in
              cross-cultural architecture of the 20th century.
            </p>
          </div>

          <div className="card-moroccan p-6">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Info className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
              Key Art Deco Sites in Casablanca
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Cinema Rialto (1930), the Mauresque-style Wilaya Building, Hotel Lincoln (1916),
              Marius Boyer&apos;s Immeuble Bessonneau, Villa des Arts (now a contemporary art
              museum), and the 1920s Central Market with its Moorish arches. The Casamemoire
              association offers guided Art Deco walking tours from 300 MAD.
            </p>
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photographing Moroccan Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographyTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <tip.icon className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {tip.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {tip.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Planning ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Planning an Architecture Trip to Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Season
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Spring (March-May) and autumn (September-November) offer comfortable walking
                temperatures and good light. Summer is punishing for outdoor exploration in Fes
                and Marrakech. Winter is mild but some southern kasbahs may be hard to reach after rain.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                How Much Time
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A serious architecture itinerary needs at least 10 days: 3 days in Fes, 2 in
                Meknes/Volubilis, 3 in Marrakech, and 2 in Casablanca. Add 2-3 days for the
                kasbahs of the Draa Valley if southern Morocco is on your list.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Entry Fees &amp; Guides
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most monuments charge from 10 MAD to 70 MAD. The Hassan II Mosque tour is from
                130 MAD. Budget from 200-500 MAD per day for entries. A specialist architecture guide
                costs from 1,200 MAD for a full day. Carry small notes — many ticket offices do
                not accept cards. Seasonal pricing can change.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Eye className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Craft Workshops
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Visit the artisan quarters of Fes to see zellige, gebs, and woodwork being made.
                The Ain Nokbi zellige workshops welcome visitors. In Marrakech, the Maison de
                l&apos;Artisan on Avenue Mohammed V showcases traditional crafts. Workshop visits
                are free, though purchases are expected.
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the main architectural styles found in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco features Islamic and Moorish architecture (mosques, medersas, palaces),
                Berber kasbahs and ksour, ancient Roman ruins at Volubilis, French colonial Art Deco
                in Casablanca and Rabat, traditional riad courtyard houses, and contemporary designs
                like the Grand Theatre de Rabat. The decorative arts include zellige mosaic tilework,
                carved plaster (gebs), and cedar wood carving (taqshirat).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can non-Muslims enter mosques in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Hassan II Mosque in Casablanca is the only functioning mosque in Morocco open to
                non-Muslim visitors. It offers guided tours daily except Friday. All other active
                mosques are closed to non-Muslims, though you can admire their exteriors freely.
                Medersas (Quranic schools), many of which now function as museums, are open to all
                visitors regardless of faith.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is zellige tilework and where can I see the best examples?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Zellige is hand-cut geometric mosaic tilework made from individually chiseled pieces
                of glazed terracotta. Master artisans (maallems) cut each tile by hand and arrange
                them into intricate geometric star patterns. The finest examples are found at the
                Bou Inania Medersa in Fes, the Bahia Palace in Marrakech, and the Hassan II Mosque.
                Fes remains the center of zellige production.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the difference between a riad and a dar?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Both are traditional courtyard houses, but a riad specifically has a central garden
                with trees and plants (the word comes from the Arabic &quot;ryad&quot; meaning garden). A dar
                has a central courtyard with a fountain but no garden. In practice, the tourism
                industry uses both terms interchangeably, and many properties called riads are
                technically dars.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best city for architecture lovers visiting Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Fes is widely considered the best city for architecture enthusiasts. Its medina,
                a UNESCO World Heritage Site, contains the oldest university in the world
                (al-Qarawiyyin, founded 859 CE), stunning medersas, and the highest concentration of
                traditional Moroccan craftsmanship. Marrakech offers grander palaces, while Casablanca
                has the Hassan II Mosque and remarkable Art Deco heritage.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are kasbahs and where are the best ones?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Kasbahs are fortified strongholds built from rammed earth (pise) with corner towers
                and thick walls. The most famous is Ait Benhaddou (UNESCO). Others include the
                Kasbah of the Udayas in Rabat and Telouet Kasbah in the High Atlas.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much do architectural tours cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Half-day guided tours cost from 400 MAD. Full-day private tours from 1,200 MAD.
                Entry fees range from 10-70 MAD per monument. Hassan II Mosque tour from 130 MAD.
                Budget from 200-500 MAD per day for entries. Seasonal pricing can change.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time to photograph Moroccan architecture?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Golden hour produces the warmest tones on rammed-earth walls. For interiors,
                midday gives the best overhead courtyard light. Overcast days are ideal for zellige
                detail shots. Spring and autumn offer the most comfortable walking conditions.
              </p>
            </div>

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
            <Link href="/morocco-best-riads" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Stay inside the architecture. Our guide to the finest restored riads across Fes,
                Marrakech, Essaouira, and beyond.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-zellige-tiles" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Layers className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Zellige Tile Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A deep dive into Morocco&apos;s most celebrated decorative art — the mathematics,
                the craft, and the best places to see it.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-photography-locations" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Photography Locations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most photogenic spots in Morocco — from medina doorways to mountain kasbahs
                and coastal fortifications.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#A0522D] to-[#7a3e22] moroccan-pattern">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Morocco&apos;s Architectural Wonders?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the zellige-clad medersas of Fes to the rammed-earth kasbahs of the Draa Valley,
            Morocco rewards travelers who look up, look closely, and step through every open doorway.
            Start planning your architecture-focused itinerary today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-itinerary-10-days"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#A0522D] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              Plan Your 10-Day Itinerary
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get Expert Help
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

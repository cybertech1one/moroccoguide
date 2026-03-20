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
  Building,
  Award,
  BookOpen,
  Crown,
  Globe,
  Landmark,
  Columns,
  Ruler,
  Camera,
  Eye,
  Layers,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Architecture Guide 2026 | Islamic Design, Riads, Zellige & Iconic Buildings',
  description:
    'Authoritative guide to Moroccan architecture. Explore Moorish, Andalusian, Berber, Art Deco, and modern styles. Learn about zellige tilework, muqarnas, carved plaster, riad design, kasbahs, Hassan II Mosque, Bou Inania Madrasa, Bahia Palace, and architecture tours across Morocco.',
  keywords: [
    'moroccan architecture',
    'morocco architecture styles',
    'islamic architecture morocco',
    'riad architecture',
    'moroccan design',
    'zellige tiles',
    'muqarnas morocco',
    'hassan ii mosque architecture',
    'bahia palace marrakech',
    'bou inania madrasa fes',
    'kasbah ait benhaddou',
    'moroccan art deco casablanca',
    'riad courtyard design',
    'horseshoe arch morocco',
    'carved plaster gebs',
    'cedarwood carving morocco',
    'moroccan modern architecture',
    'architecture tours morocco',
    'ksar fortified village',
    'moorish architecture',
  ],
  openGraph: {
    title: 'Moroccan Architecture Guide 2026 | Islamic Design, Riads, Zellige & Iconic Buildings',
    description:
      'Explore 12 centuries of Moroccan architecture: Moorish mosques, Andalusian palaces, Berber kasbahs, French Art Deco, and cutting-edge modern design. Zellige, muqarnas, cedarwood, and more.',
    url: `${BASE_URL}/morocco-architecture-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-architecture.webp`,
        width: 1200,
        height: 630,
        alt: 'Intricate zellige tilework and carved plaster arches inside a historic Moroccan palace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Architecture Guide 2026 | Islamic Design, Riads & Zellige',
    description:
      'Complete guide to Moroccan architecture: Moorish, Andalusian, Berber, Art Deco, and modern styles. Zellige, muqarnas, riads, kasbahs, and iconic buildings.',
    images: [`${BASE_URL}/images/hero-architecture.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-architecture-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-architecture-guide`,
  name: 'Moroccan Architecture Guide 2026 | Islamic Design, Riads, Zellige & Iconic Buildings',
  description:
    'Authoritative guide to Moroccan architecture spanning Moorish mosques, Andalusian palaces, Berber kasbahs, French Art Deco, and modern design. Covers zellige, muqarnas, carved plaster, riads, and architecture tours.',
  url: `${BASE_URL}/morocco-architecture-guide`,
  image: `${BASE_URL}/images/hero-architecture.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-architecture-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Architecture Guide', item: `${BASE_URL}/morocco-architecture-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are zellige tiles and how are they made?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zellige (also zellij) are hand-cut geometric mosaic tiles unique to Morocco. Artisans in Fes have produced them since the 10th century. Each tile is individually chiseled from larger glazed terracotta squares, then assembled face-down into intricate star-and-polygon patterns. A single square meter can require over 1,000 pieces. The process remains almost entirely manual and takes years to master.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the architectural layout of a traditional Moroccan riad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A riad is an inward-facing house organized around a central courtyard with a fountain or garden. The name comes from the Arabic "ryad" meaning garden. Rooms open onto the courtyard on all four sides, and windows face inward rather than onto the street, ensuring privacy. A rooftop terrace provides outdoor space. Load-bearing walls use lime plaster (tadelakt), and floors feature zellige tiles. Most historic riads in Fes and Marrakech date from the 17th to 19th centuries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit the Hassan II Mosque in Casablanca as a non-Muslim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Hassan II Mosque is one of the few mosques in Morocco open to non-Muslim visitors. Guided tours run daily except Friday, departing at 10:00, 11:00, and 14:00 (with an additional 15:00 tour in summer). Tours last about one hour and cost from 130 MAD for adults. Modest dress is required, and shoes must be removed inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a kasbah and a ksar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A kasbah is a single fortified residence belonging to one prominent family, typically featuring corner towers and decorated upper facades. A ksar (plural: ksour) is an entire fortified village composed of interconnected dwellings enclosed within a shared defensive wall. Ait Benhaddou near Ouarzazate is technically a ksar, though it is commonly called a kasbah. Both use rammed earth (pise) construction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I see the best examples of Art Deco architecture in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casablanca has the largest concentration of Art Deco buildings in Africa. Key examples include the Cinema Rialto (1930, Pierre Jabin), the Sacre-Coeur Cathedral (1930, Paul Tournon), the Marche Central, and dozens of apartment blocks along Boulevard Mohammed V. The Quartier des Habous, completed in the 1930s, blends Art Deco structure with traditional Moroccan ornamentation. Guided architecture walks are available through the Casamemoire association.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is muqarnas and where can I see it in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Muqarnas are three-dimensional honeycomb vaulting used to decorate domes, cornices, and niche heads in Islamic architecture. They create a cascading, stalactite-like effect through stacked tiers of small concave cells. Outstanding examples include the Bou Inania Madrasa in Fes (built 1351-1356 by Sultan Abu Inan Faris), the Saadian Tombs in Marrakech (1590s), and the Attarine Madrasa in Fes (completed 1325).',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there architecture tours available in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several cities offer dedicated architecture tours. In Fes, medina tours focus on medieval madrasas, foundouks, and the Qarawiyyin Mosque complex. In Marrakech, tours cover Saadian-era palaces and Almohad walls. In Casablanca, the Casamemoire association runs Art Deco walking tours. Prices typically range from 300 MAD for group walks to from 1,500 MAD for private half-day tours with an architecture specialist.',
      },
    },
    {
      '@type': 'Question',
      name: 'What building materials are used in traditional Moroccan architecture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional Moroccan construction relies on locally sourced materials. Rammed earth (pise or tabya) forms walls in southern kasbahs. Tadelakt, a waterproof lime plaster mixed with olive oil soap, lines hammams and bathrooms. Atlas cedarwood is carved for doors, screens, and ceilings. Zellige tiles cover floors and lower walls. Carved gypsum plaster (gebs) decorates upper walls. Marble from Meknes quarries is used for columns and fountains.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ARCHITECTURAL STYLES
   ═══════════════════════════════════════════════════════════════ */

const architecturalStyles = [
  {
    name: 'Moorish-Andalusian',
    era: '8th-15th century',
    icon: Columns,
    description:
      'After the fall of Cordoba and Granada, Andalusian refugees brought refined building techniques to Fes, Meknes, and Tetouan. The style fuses Umayyad Spanish and North African traditions: horseshoe arches, intricate stucco carving, zellige mosaic floors, polychrome woodwork, and serene courtyard gardens with central fountains. The Bou Inania Madrasa in Fes (1351-1356), commissioned by Marinid Sultan Abu Inan Faris, is the finest surviving synthesis of these two traditions.',
    keyBuildings: 'Bou Inania Madrasa (Fes), Attarine Madrasa (Fes), Bahia Palace (Marrakech)',
  },
  {
    name: 'Almohad Imperial',
    era: '12th-13th century',
    icon: Landmark,
    description:
      'The Almohad dynasty (1121-1269) brought monumental scale and geometric austerity to Moroccan architecture. Under Sultan Yacoub al-Mansour, massive gates, minarets, and mosques rose across the empire. The unfinished Hassan Tower in Rabat (begun 1195) was intended to crown the largest mosque in the western Islamic world. Almohad builders favored massive rammed-earth walls, darj-wa-ktarf (step-and-shoulder) merlon crenellations, and restrained exterior decoration that contrasted with lavish interiors.',
    keyBuildings: 'Hassan Tower (Rabat), Koutoubia Mosque (Marrakech), Giralda (Seville, same architect)',
  },
  {
    name: 'Berber Vernacular',
    era: 'Pre-Islamic to present',
    icon: Building,
    description:
      'Amazigh architecture responds directly to geography and climate. In the Draa and Dades valleys, rammed-earth kasbahs and ksour use thick walls for thermal insulation, with narrow windows to reduce heat gain. In the Rif Mountains, stone-and-timber construction handles heavier rainfall. Anti-Atlas agadirs (communal granaries) perch on hilltops for defense. Decoration consists of geometric reliefs pressed into wet mud plaster, and painted ceilings using natural pigments. Ait Benhaddou, built between the 14th and 17th centuries, earned UNESCO World Heritage status in 1987.',
    keyBuildings: 'Ksar Ait Benhaddou, Kasbah Telouet, Agadir of Amtoudi',
  },
  {
    name: 'French Colonial & Art Deco',
    era: '1912-1956',
    icon: Award,
    description:
      'During the Protectorate (1912-1956), French architect Henri Prost drafted Casablanca\'s urban plan, separating the medina from the Ville Nouvelle. Architects like Marius Boyer, Pierre Jabin, and Auguste Cadet designed hundreds of Art Deco buildings using reinforced concrete adorned with Moroccan motifs. Boyer alone designed over 100 buildings in Casablanca between 1919 and 1955. The Cinema Rialto (1930), Sacre-Coeur Cathedral (Paul Tournon, 1930), and the Quartier des Habous (Albert Laprade, 1917-1930s) exemplify this hybrid style.',
    keyBuildings: 'Cinema Rialto, Sacre-Coeur Cathedral, Quartier des Habous (all Casablanca)',
  },
  {
    name: 'Contemporary & Neo-Moroccan',
    era: '1980s-present',
    icon: Sparkles,
    description:
      'Modern Moroccan architecture blends international methods with local craft. Michel Pinseau designed the Hassan II Mosque (completed 1993) with a retractable roof and 210-meter minaret, the tallest religious structure in Africa. The MACAAL contemporary art museum opened in Marrakech in 2016. The Grand Theatre de Casablanca, designed by Christian de Portzamparc and expected to open in 2025, deploys sweeping concrete shells inspired by drapery. Tarik Oualalou and Studio KO have led a generation of architects rethinking earthen construction with contemporary sensibility.',
    keyBuildings: 'Hassan II Mosque (Casablanca), MACAAL (Marrakech), Grand Theatre (Casablanca)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY ARCHITECTURAL ELEMENTS
   ═══════════════════════════════════════════════════════════════ */

const architecturalElements = [
  {
    name: 'Zellige Tilework',
    icon: Gem,
    description:
      'Hand-cut geometric mosaic tiles produced continuously in Fes since the 10th century. Artisans at workshops like the Fassi firm of Beldi chisel individual shapes from glazed terracotta, assembling them face-down into star-and-polygon patterns. A square meter can require over 1,000 pieces and days of labor. Colors traditionally included white, green, blue, yellow, black, and the prized bordeaux.',
    where: 'Bou Inania Madrasa (Fes), Bahia Palace (Marrakech), Royal Palace (Meknes)',
  },
  {
    name: 'Muqarnas Vaulting',
    icon: Layers,
    description:
      'Three-dimensional honeycomb vaulting that creates a stalactite effect through tiers of stacked concave cells. Moroccan muqarnas reached their peak under the Marinids (13th-15th century). Master builders calculated each cell in advance using geometric diagrams on paper. The Saadian Tombs in Marrakech (Hall of Twelve Columns, 1590s) contain carved cedar muqarnas gilded with 24-karat gold leaf.',
    where: 'Saadian Tombs (Marrakech), Bou Inania Madrasa (Fes), Attarine Madrasa (Fes)',
  },
  {
    name: 'Carved Plaster (Gebs)',
    icon: Ruler,
    description:
      'Gypsum plaster is hand-carved in situ while still damp, producing flowing arabesques, Kufic calligraphy, and floral motifs. The technique allows walls to be covered from zellige wainscoting up to the cedarwood ceiling. Craftsmen (maalems) in Fes still apprentice for five or more years before working independently. The Bahia Palace in Marrakech, built by Grand Vizier Si Moussa in the 1860s and expanded by Ba Ahmed ibn Moussa through the 1890s, contains some of the most elaborate surviving gebs work.',
    where: 'Bahia Palace (Marrakech), Dar Si Said Museum (Marrakech), Glaoui Palace (Telouet)',
  },
  {
    name: 'Cedarwood Carving',
    icon: Crown,
    description:
      'Atlas cedarwood (Cedrus atlantica) is carved into mashrabiya screens, palace ceilings, doors, and minbars. The wood\'s natural oils resist insects, and its grain accepts fine detail. The minbar of the Koutoubia Mosque, created in Cordoba in 1137 and transported to Marrakech, required seven years of work by Andalusian craftsmen and contains over 1,000 individual inlaid pieces of ivory, bone, and precious woods.',
    where: 'Koutoubia Mosque minbar (viewable at Badi Palace museum), Bahia Palace, Fes medina foundouks',
  },
  {
    name: 'Horseshoe & Multifoil Arches',
    icon: Columns,
    description:
      'The horseshoe arch extends beyond a semicircle, enclosing about two-thirds of a full circle. It arrived in Morocco from Umayyad Spain and became the defining silhouette of Moroccan doorways and prayer niches. Multifoil (lobed) arches subdivide the curve into three, five, or more cusps. The Bab Mansour gate in Meknes (completed 1732 under Sultan Moulay Ismail) displays massive horseshoe arches framed in zellige.',
    where: 'Bab Mansour (Meknes), Bab Agnaou (Marrakech), Koutoubia Mosque (Marrakech)',
  },
  {
    name: 'Tadelakt Plaster',
    icon: Eye,
    description:
      'A waterproof lime plaster native to the Marrakech region, polished with flat stones and treated with olive oil soap to create a smooth, water-resistant finish. Used in hammams, fountains, and bathrooms for centuries. The technique requires specific lime from the Marrakech plateau and precise timing during application. Contemporary designers have adopted tadelakt for luxury interiors worldwide.',
    where: 'Traditional hammams, riad bathrooms, Bahia Palace surfaces',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ICONIC BUILDINGS
   ═══════════════════════════════════════════════════════════════ */

const iconicBuildings = [
  {
    name: 'Hassan II Mosque, Casablanca',
    year: 'Completed 1993',
    architect: 'Michel Pinseau',
    icon: Landmark,
    description:
      'Built on a platform over the Atlantic Ocean, this is the largest mosque in Africa and the 5th largest in the world. Its 210-meter minaret is topped with a laser beam directed toward Mecca. The retractable roof opens to the sky, and the prayer hall holds 25,000 worshippers with space for 80,000 more in the courtyard. Over 6,000 Moroccan artisans produced the zellige, carved plaster, painted cedarwood, and marble. Total cost: approximately 800 million USD, funded largely by public donation.',
    visit: 'Guided tours for non-Muslims daily except Friday. From 130 MAD.',
  },
  {
    name: 'Bou Inania Madrasa, Fes',
    year: 'Built 1351-1356',
    architect: 'Commissioned by Sultan Abu Inan Faris',
    icon: BookOpen,
    description:
      'The last and most ambitious of the Marinid-era madrasas. Unique among Moroccan madrasas for containing a minbar and serving as a Friday mosque in addition to a theological school. Every surface is ornamented: zellige mosaic from floor to mid-wall, carved stucco above, and painted cedarwood ceilings overhead. The bronze-and-brass water clock on the exterior, powered by hydraulics, is the only known surviving medieval example of its kind in Morocco.',
    visit: 'Open to non-Muslims. Entry from 30 MAD.',
  },
  {
    name: 'Bahia Palace, Marrakech',
    year: 'Built 1860s-1900',
    architect: 'Grand Vizier Si Moussa (original), expanded by Ba Ahmed ibn Moussa',
    icon: Crown,
    description:
      'Spread across eight hectares, the Bahia ("brilliance") Palace was built to be the greatest palace of its time. Ba Ahmed assembled the finest maalems from Fes to execute carved cedarwood ceilings, zellige floors, and gebs walls. The Petit Riad section, with its intimate painted ceilings, contrasts with the Grand Riad\'s vast marble courtyard. The palace has no upper floors because Ba Ahmed, reportedly too heavy to climb stairs, insisted all rooms remain at ground level.',
    visit: 'Open daily. Entry from 70 MAD.',
  },
  {
    name: 'Ksar Ait Benhaddou',
    year: '14th-17th century',
    architect: 'Communal Berber construction',
    icon: Building,
    description:
      'A fortified village of interconnected rammed-earth dwellings on the Ouarzazate-Marrakech caravan route. Six families still live within the walls. The ksar earned UNESCO World Heritage status in 1987 and has served as a filming location for Lawrence of Arabia (1962), Gladiator (2000), and Game of Thrones (2013-2019). The earthen structures require constant maintenance, with the outer layer re-applied after each rainy season.',
    visit: 'Free entry. Local guides from 100 MAD. 30 km from Ouarzazate.',
  },
  {
    name: 'Saadian Tombs, Marrakech',
    year: 'Built 1590s',
    architect: 'Commissioned by Sultan Ahmad al-Mansur',
    icon: Star,
    description:
      'Sealed by the Alaouite dynasty after 1672 and rediscovered by a French aerial survey in 1917. The Hall of Twelve Columns contains the tomb of Ahmad al-Mansur beneath a cedar muqarnas dome gilded with imported Sudanese gold. Italian Carrara marble columns support horseshoe arches, and the surrounding walls carry some of the finest zellige and gebs work in Marrakech.',
    visit: 'Open daily. Entry from 70 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD ARCHITECTURE
   ═══════════════════════════════════════════════════════════════ */

const riadFeatures = [
  {
    feature: 'Central Courtyard (Wust al-Dar)',
    description: 'The heart of the riad, open to the sky. Traditionally contains a marble fountain, citrus trees, and sometimes a plunge pool. The courtyard provides light, ventilation, and a private outdoor space shielded from the street. Rooms on all four sides open directly onto this space.',
  },
  {
    feature: 'Inward-Facing Design',
    description: 'Riads present blank exterior walls to the street, with only a modest doorway. All windows face the courtyard. This design reflects Islamic principles of privacy (haya) and the separation of public and domestic life. A bent entrance passage (skifa) prevents passersby from seeing inside.',
  },
  {
    feature: 'Rooftop Terrace',
    description: 'Every riad has a roof terrace for drying laundry, socializing, and sleeping during hot months. In converted guest riads, terraces now serve as dining areas and lounges with views across the medina roofscape toward minarets and mountains.',
  },
  {
    feature: 'Tadelakt Walls & Zellige Floors',
    description: 'Lower walls and floors use zellige tilework for durability and beauty. Upper walls feature carved plaster or painted lime. Bathrooms and wet areas use tadelakt, the waterproof lime plaster polished to a marble-like sheen. Color palettes vary: Fes riads favor blue and white, Marrakech riads use warmer terracottas.',
  },
  {
    feature: 'Cedarwood Ceilings & Doors',
    description: 'Ceilings display painted geometric patterns or exposed carved beams. Main doors are thick cedar planked with iron studs and fitted with traditional knockers: one heavy ring for men (producing a deep sound) and a lighter hand-shaped knocker for women (a higher pitch), allowing the household to know who is calling before opening.',
  },
  {
    feature: 'Mashrabiya Screens',
    description: 'Turned-wood lattice screens cover upper-floor windows overlooking the courtyard. They allow residents to observe without being seen, circulate air while filtering direct sunlight, and demonstrate the woodworker\'s skill. Geometric star patterns are the most common motif.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ARCHITECTURE TOURS
   ═══════════════════════════════════════════════════════════════ */

const architectureTours = [
  {
    city: 'Fes',
    focus: 'Medieval Madrasas & Foundouks',
    description: 'Walk through the 9th-century medina to visit the Bou Inania and Attarine madrasas, Qarawiyyin Mosque exterior (founded 859, making it the world\'s oldest continuously operating university), and restored merchant foundouks. Guides explain Marinid building techniques and zellige production.',
    duration: 'Half day (3-4 hours)',
    price: 'From 350 MAD with licensed guide',
  },
  {
    city: 'Marrakech',
    focus: 'Palaces & Saadian Heritage',
    description: 'Cover the Bahia Palace, Badi Palace ruins, Saadian Tombs, Koutoubia Mosque exterior, and Ben Youssef Madrasa. Some tours include a visit to a zellige workshop in the Mellah district. Evening tours offer different light on carved plaster.',
    duration: 'Half day (3-4 hours)',
    price: 'From 400 MAD with licensed guide',
  },
  {
    city: 'Casablanca',
    focus: 'Art Deco & Modern Architecture',
    description: 'The Casamemoire association organizes monthly walking tours through the Ville Nouvelle, covering Marius Boyer apartment buildings, the Sacre-Coeur Cathedral, Cinema Rialto, and Boulevard Mohammed V arcades. Private tours visit the Hassan II Mosque interior and the Quartier des Habous.',
    duration: 'Half day (3-4 hours)',
    price: 'From 300 MAD for Casamemoire group tours, from 1,500 MAD private',
  },
  {
    city: 'Ouarzazate & Draa Valley',
    focus: 'Kasbahs & Earthen Architecture',
    description: 'Multi-day circuits cover Ait Benhaddou, Kasbah Telouet, Kasbah Taourirt, Skoura oasis palm grove kasbahs, and the Draa Valley ksour. Specialist guides explain rammed-earth construction, restoration challenges, and the social organization that produced these fortified villages.',
    duration: 'Two to three days recommended',
    price: 'From 1,200 MAD per day for driver-guide',
  },
  {
    city: 'Meknes & Volubilis',
    focus: 'Imperial & Roman Ruins',
    description: 'Combine Sultan Moulay Ismail\'s grandiose 17th-century capital, including the Bab Mansour gate and the Heri es-Souani grain stores, with the Roman ruins of Volubilis (founded 3rd century BC). The juxtaposition of Roman mosaics with Islamic tilework demonstrates two millennia of architectural dialogue.',
    duration: 'Full day (7-8 hours)',
    price: 'From 500 MAD with transport from Fes',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photographyTips = [
  {
    tip: 'Shoot during golden hour and blue hour',
    detail: 'Moroccan buildings glow warmest in the first and last hours of sunlight. The Koutoubia minaret at sunset and Ait Benhaddou at dawn are iconic for a reason. Blue hour (just after sunset) brings out the contrast between warm electric light and cool sky.',
  },
  {
    tip: 'Use a wide-angle lens for courtyards',
    detail: 'Riad courtyards and madrasa interiors are compact spaces packed with detail. A 16-35mm lens captures the full height of tilework, archways, and cedarwood ceilings in a single frame. Shoot from corners to maximize depth.',
  },
  {
    tip: 'Look up at ceilings and muqarnas',
    detail: 'Many visitors photograph walls and floors but miss the most spectacular elements overhead. Painted cedarwood ceilings in the Bahia Palace and muqarnas domes in the Saadian Tombs reward an upward camera angle. A tripod helps in dim interiors.',
  },
  {
    tip: 'Photograph details at zellige workshops',
    detail: 'In Fes, working zellige ateliers allow photography. Close-up shots of artisans chiseling individual tiles, the color-sorted tile bins, and the face-down assembly process tell a story that finished walls alone do not.',
  },
  {
    tip: 'Respect mosque photography rules',
    detail: 'Non-Muslims cannot enter most mosques in Morocco. The Hassan II Mosque in Casablanca is the primary exception, and photography is allowed inside during guided tours. For other mosques, photograph exteriors and doorways only. Always ask permission before photographing people at prayer.',
  },
  {
    tip: 'Bring a polarizing filter for zellige',
    detail: 'Glazed zellige tiles reflect harsh light and lose color saturation. A circular polarizing filter cuts glare and deepens the greens, blues, and yellows. It also darkens skies behind minarets for more dramatic exterior shots.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoArchitectureGuidePage() {
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
            backgroundImage: 'url(/images/hero-architecture.webp)',
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
            <Landmark className="w-4 h-4" />
            Architecture &amp; Design
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Architecture Guide:
            <br className="hidden md:block" /> Twelve Centuries of Design
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Almohad minarets and Marinid madrasas to Art Deco boulevards and
            contemporary galleries. A detailed survey of the buildings, techniques, and
            craftsmen that shaped Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is an Architectural Masterclass
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the intersection of Africa, Europe, and the Arab world. Each
                civilization that passed through left its mark in stone, plaster, tile, and
                earth. Amazigh builders raised rammed-earth fortresses along Saharan trade
                routes before the 7th century. Umayyad and later Andalusian exiles imported
                horseshoe arches and zellige craftsmanship to Fes. Almohad sultans built minarets
                so influential their proportions were replicated in Seville and Rabat alike.
                French Protectorate architects fused reinforced concrete with Moroccan motifs to
                create Casablanca&apos;s Art Deco district, the largest in Africa.
              </p>
              <p>
                What makes Moroccan architecture distinct is continuity. The same zellige
                workshops in Fes that supplied the Attarine Madrasa in 1325 still produce tiles
                today. Tadelakt plasterers in Marrakech use the same local lime and polishing
                stones their predecessors used in the 16th century. When Michel Pinseau designed
                the Hassan II Mosque in the 1980s, he employed 6,000 traditional artisans
                alongside modern engineers. Understanding these techniques transforms a visit
                from sightseeing into reading a 1,200-year manuscript written in geometry,
                light, and material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architectural Styles ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Columns className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Major Architectural Styles
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five distinct traditions, each rooted in a specific era and political context,
            define the built environment of Morocco.
          </p>
          <div className="space-y-8">
            {architecturalStyles.map((style) => {
              const Icon = style.icon;
              return (
                <div key={style.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {style.name}
                      </h3>
                      <span className="text-sm text-[var(--color-accent)] font-medium">{style.era}</span>
                      <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                        {style.description}
                      </p>
                      <p className="text-sm text-[var(--text-primary)] mt-3 font-medium">
                        <Landmark className="w-3.5 h-3.5 inline-block mr-1 text-[var(--color-accent)]" />
                        Key buildings: {style.keyBuildings}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Architectural Elements ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Key Architectural Elements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The building blocks of Moroccan design: materials and techniques that have
            defined the country&apos;s architecture for a millennium.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architecturalElements.map((element) => {
              const Icon = element.icon;
              return (
                <div key={element.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {element.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {element.description}
                  </p>
                  <p className="text-xs text-[var(--text-primary)] font-medium">
                    <MapPin className="w-3 h-3 inline-block mr-1 text-[var(--color-accent)]" />
                    Where to see it: {element.where}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Iconic Buildings ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Iconic Buildings You Should Not Miss
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five structures that represent the pinnacle of Moroccan architectural achievement,
            from medieval madrasas to modern megaprojects.
          </p>
          <div className="space-y-6">
            {iconicBuildings.map((building) => {
              const Icon = building.icon;
              return (
                <div key={building.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {building.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                        <span className="text-[var(--color-accent)] font-medium">
                          <Clock className="w-3.5 h-3.5 inline-block mr-1" />
                          {building.year}
                        </span>
                        <span className="text-[var(--text-secondary)]">
                          <Ruler className="w-3.5 h-3.5 inline-block mr-1" />
                          {building.architect}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                        {building.description}
                      </p>
                      <p className="text-sm text-[var(--text-primary)] font-medium">
                        <CheckCircle className="w-3.5 h-3.5 inline-block mr-1 text-green-600" />
                        {building.visit}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Riad Architecture Explained ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Architecture Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The riad is Morocco&apos;s most distinctive domestic building type. The word derives
            from the Arabic &quot;ryad&quot; (garden), and the form has shaped urban life in Fes,
            Marrakech, Meknes, and Essaouira for centuries.
          </p>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Most historic riads date from the 17th to 19th centuries. Since the late 1990s,
            thousands have been restored and converted into guesthouses, bringing a global
            audience into direct contact with traditional Moroccan design.
          </p>
          <div className="space-y-4">
            {riadFeatures.map((item) => (
              <div key={item.feature} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {item.feature}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kasbahs & Ksour ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kasbahs &amp; Ksour: Fortified Earth Architecture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Southern Morocco&apos;s kasbahs and ksour represent one of the world&apos;s great
            traditions of earthen construction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Construction Technique: Pise (Rammed Earth)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Builders pack damp earth mixed with straw and small stones between parallel
                wooden forms (tabya), compacting it by hand or foot. Each course dries before
                the next is added. Walls taper from about 80cm thick at the base to 40cm at the
                top. The resulting structures have excellent thermal mass, staying cool by day
                and releasing stored warmth at night. Without maintenance, pise walls erode at
                roughly 1-2cm per year, which is why many abandoned kasbahs appear to be melting
                back into the landscape.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Social Organization
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A ksar houses an entire community. Inside the defensive walls, narrow lanes
                connect family dwellings, a communal mosque, a grain storage area, and
                sometimes a Jewish quarter (mellah). Each family maintained its own rooms but
                shared responsibility for wall maintenance and gate security. The amghar
                (elected elder) coordinated communal labor. This cooperative structure reflects
                the Amazigh jemaa (council) system of governance, one of Africa&apos;s oldest forms
                of participatory decision-making.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Decoration
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The upper facades of kasbahs display geometric motifs pressed into wet mud
                plaster: chevrons, diamonds, blind arches, and stylized floral patterns.
                Corner towers feature crenellated parapets. The Kasbah Telouet, seat of the
                Glaoui lords from the 1860s to 1956, contains interior rooms with zellige,
                carved plaster, and painted ceilings rivaling urban palaces, a striking contrast
                to its crumbling pise exterior.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Conservation Challenges
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                As families relocate to modern concrete housing, many kasbahs and ksour are
                deteriorating. CERKAS (the Centre for the Conservation and Rehabilitation of
                the Architectural Heritage of the Atlas and Sub-Atlas Zones), based in
                Ouarzazate, leads restoration efforts. International projects like the Aga
                Khan Trust for Culture have also intervened. Climate change, with increasing
                flash floods, accelerates erosion of unprotected structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── French Colonial & Art Deco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            French Colonial Architecture &amp; Casablanca Art Deco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The French Protectorate (1912-1956) reshaped Morocco&apos;s urban landscape. Nowhere
            is this more visible than in Casablanca.
          </p>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              Resident-General Hubert Lyautey made a strategic decision: preserve the medinas
              and build modern villes nouvelles alongside them. He appointed Henri Prost to
              plan Casablanca, Rabat, Fes, and Meknes. Prost&apos;s Casablanca plan (1914-1917)
              created broad boulevards, public parks, and zoning regulations that attracted
              European architects eager to experiment with Art Deco on a scale impossible in
              Paris.
            </p>
            <p>
              Marius Boyer arrived in Casablanca in 1919 and over the next 36 years designed
              more than 100 buildings, including apartment blocks, cinemas, and commercial
              buildings. Boyer and contemporaries like Pierre Jabin, Auguste Cadet, and Edmond
              Brion incorporated Moroccan elements: zellige panels, horseshoe arch windows,
              geometric stucco friezes. The result was a unique Mauresque-Deco hybrid found
              nowhere else.
            </p>
          </div>
          <div className="card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Info className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              Casamemoire: Preserving Casablanca&apos;s Heritage
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The Casamemoire association, founded in 1995, campaigns for the preservation
              of Casablanca&apos;s 20th-century architectural heritage. They maintain an inventory
              of over 1,000 significant buildings, organize public walking tours, and lobby
              for heritage protection legislation. Their efforts led to the classification of
              several Art Deco buildings as national monuments. Monthly architecture walks
              (typically on Saturdays, from 50 MAD) are the best way to understand the city&apos;s
              built history.
            </p>
          </div>
        </div>
      </section>

      {/* ── Modern Architecture ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Modern Morocco: Contemporary Architecture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A new generation of architects is reinterpreting Moroccan building traditions
            through contemporary lenses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                MACAAL, Marrakech (2016)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The Museum of African Contemporary Art Al Maaden opened in 2016 in a former
                residential villa redesigned for gallery use. It hosts rotating exhibitions
                of African contemporary art in clean, naturally lit spaces that contrast with
                Marrakech&apos;s historic aesthetic. Entry from 40 MAD.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Grand Theatre de Casablanca
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Designed by Pritzker Prize-winning architect Christian de Portzamparc, this
                performing arts center features sweeping concrete shells and a translucent
                facade inspired by flowing fabric. Situated near the Hassan II Mosque, it is
                expected to become Casablanca&apos;s principal cultural venue upon completion.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mohammed VI Museum of Modern Art, Rabat (2014)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Designed by Karim Chakor, this was Morocco&apos;s first major public museum of
                modern and contemporary art. The building integrates Hispano-Moorish arched
                porticos with minimalist white interiors. Its permanent collection spans
                Moroccan art from the 1950s to the present. Entry from 40 MAD.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Studio KO &amp; New Earthen Architecture
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The Paris-Marrakech firm Studio KO (Karl Fournier and Olivier Marty) designed
                the Yves Saint Laurent Museum Marrakech (2017), clad in terracotta-colored
                concrete that references Berber earthen construction. Tarik Oualalou, based in
                Marrakech, applies parametric design tools to rammed-earth construction,
                demonstrating that traditional materials can meet contemporary performance
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Architecture Tours Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Guided tours provide context that self-guided visits cannot. Here are the
            principal options by city.
          </p>
          <div className="space-y-6">
            {architectureTours.map((tour) => (
              <div key={tour.city} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      <MapPin className="w-4 h-4 inline-block mr-1 text-[var(--color-accent)]" />
                      {tour.city}: {tour.focus}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">
                      {tour.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm md:text-right md:min-w-[180px]">
                    <span className="text-[var(--text-primary)] font-medium">
                      <Clock className="w-3.5 h-3.5 inline-block mr-1" />
                      {tour.duration}
                    </span>
                    <span className="text-[var(--color-accent)] font-medium">
                      <DollarSign className="w-3.5 h-3.5 inline-block mr-1" />
                      {tour.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Architecture Photography Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for capturing Moroccan buildings and interiors at their best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographyTips.map((item) => (
              <div key={item.tip} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle className="w-4 h-4 inline-block mr-1 text-green-600" />
                  {item.tip}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Moroccan Architecture in Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-kasbahs.webp', alt: 'Rammed-earth kasbahs with decorated towers in the Draa Valley of southern Morocco', label: 'Kasbahs of the Draa Valley' },
              { src: '/images/art-riad-courtyard.webp', alt: 'Traditional riad courtyard with zellige tiles, marble fountain, and arched doorways in Marrakech', label: 'Riad Courtyard Design' },
              { src: '/images/hero-casablanca.webp', alt: 'Hassan II Mosque minaret rising over the Atlantic Ocean in Casablanca Morocco', label: 'Hassan II Mosque' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are zellige tiles and how are they made?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Zellige are hand-cut geometric mosaic tiles produced in Fes since the 10th century.
                Artisans chisel individual shapes from glazed terracotta squares, then assemble them
                face-down into star-and-polygon patterns. A single square meter can require over
                1,000 pieces. The process remains almost entirely manual and takes years of
                apprenticeship to master.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the architectural layout of a traditional Moroccan riad?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A riad is an inward-facing house built around a central courtyard with a fountain
                or garden. Rooms open onto the courtyard, and windows face inward rather than onto
                the street. A rooftop terrace provides outdoor space. Walls use lime plaster
                (tadelakt), and floors feature zellige tiles. Most historic riads in Fes and
                Marrakech date from the 17th to 19th centuries.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit the Hassan II Mosque as a non-Muslim?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. The Hassan II Mosque in Casablanca is one of the few mosques in Morocco
                open to non-Muslim visitors. Guided tours run daily except Friday at 10:00,
                11:00, and 14:00 (with an additional 15:00 tour in summer). Tours last about
                one hour and cost from 130 MAD for adults. Modest dress is required.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the difference between a kasbah and a ksar?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A kasbah is a single fortified residence belonging to one family, with corner
                towers and decorated facades. A ksar (plural: ksour) is an entire fortified
                village of interconnected dwellings within a shared wall. Ait Benhaddou is
                technically a ksar. Both use rammed earth (pise) construction.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where can I see Art Deco architecture in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Casablanca has the largest concentration of Art Deco buildings in Africa. Key
                examples include the Cinema Rialto (1930, Pierre Jabin), Sacre-Coeur Cathedral
                (Paul Tournon, 1930), and buildings along Boulevard Mohammed V. The Casamemoire
                association runs guided architecture walks, typically on Saturdays from 50 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is muqarnas and where can I see it?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Muqarnas are three-dimensional honeycomb vaulting that creates a stalactite-like
                decorative effect. Outstanding examples include the Bou Inania Madrasa in Fes
                (1351-1356), the Saadian Tombs in Marrakech (1590s), and the Attarine Madrasa
                in Fes (completed 1325).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there architecture tours available in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Several cities offer dedicated architecture tours. Fes medina tours cover
                medieval madrasas and foundouks. Marrakech tours visit Saadian-era palaces.
                Casablanca&apos;s Casamemoire association runs Art Deco walking tours. Prices
                range from 300 MAD for group walks to from 1,500 MAD for private half-day
                tours with a specialist.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What building materials are used in traditional Moroccan architecture?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditional construction uses locally sourced materials. Rammed earth (pise)
                forms walls in southern kasbahs. Tadelakt, a waterproof lime plaster, lines
                hammams and bathrooms. Atlas cedarwood is carved for doors and ceilings.
                Zellige tiles cover floors and lower walls. Carved gypsum plaster (gebs)
                decorates upper walls. Marble from Meknes quarries is used for columns.
              </p>
            </div>
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
            <Link href="/moroccan-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Riads Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to choose and book the right riad, from budget gems to luxury historic houses.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Amazigh heritage, crafts, music, food, and village experiences in the Atlas Mountains.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/casablanca" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Casablanca City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Art Deco district, Hassan II Mosque, modern dining, and the business capital.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/kasbahs" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Kasbahs &amp; Ksour Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Morocco&apos;s fortified earthen architecture along the southern caravan routes.
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
            Ready to Explore Morocco&apos;s Built Heritage?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the zellige-clad madrasas of Fes to the rammed-earth kasbahs of the Draa
            Valley and the Art Deco boulevards of Casablanca, twelve centuries of architecture
            await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/casablanca"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Building className="w-5 h-5" />
              Explore Casablanca
            </Link>
            <Link
              href="/moroccan-riads"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Read the Riads Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

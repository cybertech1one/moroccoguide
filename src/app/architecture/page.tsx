import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Building2,
  Landmark,
  MapPin,
  Clock,
  Crown,
  Star,
  ArrowRight,
  Columns3,
  Castle,
  DollarSign,
  Globe,
  BookOpen,
  Layers,
  Shapes,
  Compass,
  Award,
  Sparkles,
  Footprints,
  GraduationCap,
  PenLine,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Architecture Guide | 1000 Years of Islamic, Berber & Modern Design | CityGuide',
  description:
    'Explore 1000 years of Moroccan architecture from Berber kasbahs and Almohad minarets to Art Deco Casablanca and the Hassan II Mosque. Discover architectural styles, key elements like zellige and muqarnas, 15+ must-see masterpieces, riad design, mosque architecture, kasbah and ksar details, colonial Art Deco, modern architects, walking tours, and a full glossary.',
  keywords: [
    'Moroccan architecture',
    'Islamic architecture Morocco',
    'Koutoubia Mosque',
    'Hassan II Mosque',
    'zellige tilework',
    'Moroccan riad design',
    'kasbah Morocco',
    'Berber architecture',
    'Almohad architecture',
    'Marinid madrasa',
    'muqarnas Morocco',
    'mashrabiya',
    'tadelakt',
    'Art Deco Casablanca',
    'UNESCO Morocco sites',
    'horseshoe arch Morocco',
    'El Badi Palace',
    'Saadian Tombs',
    'Bou Inania madrasa',
    'Morocco architectural tour',
    'Qarawiyyin Mosque',
    'colonial architecture Rabat',
    'modern Moroccan architects',
    'ksar architecture',
    'carved stucco gebs',
    'cedar woodwork Morocco',
    'Moroccan architectural glossary',
  ],
  openGraph: {
    title: 'Moroccan Architecture Guide - 1000 Years of Design | CityGuide',
    description:
      'From Berber kasbahs to the world\'s largest mosque, discover Morocco\'s extraordinary architectural heritage spanning a millennium of innovation and beauty.',
    url: 'https://citytoursmorocco.com/architecture',
    images: [
      {
        url: '/images/hero-kasbahs.webp',
        width: 1200,
        height: 630,
        alt: 'Ornate Moroccan architecture with intricate zellige tilework and carved stucco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/architecture' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/architecture#guide',
      headline: 'Complete Guide to Moroccan Architecture - 1000 Years of Design',
      description:
        'Comprehensive guide covering Berber, Moorish, Almohad, Marinid, Saadian, Alaouite, Art Deco, and Modern Moroccan architecture with key elements, 15+ must-see masterpieces, mosque architecture, riad design, walking tours, and a full glossary.',
      url: 'https://citytoursmorocco.com/architecture',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Moroccan Architectural Styles',
      description: 'The major architectural styles that shaped Morocco over a millennium.',
      numberOfItems: 8,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Berber/Amazigh Architecture' },
        { '@type': 'ListItem', position: 2, name: 'Moorish/Andalusian Architecture' },
        { '@type': 'ListItem', position: 3, name: 'Almohad Dynasty Architecture' },
        { '@type': 'ListItem', position: 4, name: 'Marinid Dynasty Architecture' },
        { '@type': 'ListItem', position: 5, name: 'Saadian Dynasty Architecture' },
        { '@type': 'ListItem', position: 6, name: 'Alaouite Dynasty Architecture' },
        { '@type': 'ListItem', position: 7, name: 'Art Deco Architecture' },
        { '@type': 'ListItem', position: 8, name: 'Modern Architecture' },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   ARCHITECTURAL STYLES DATA
   ═══════════════════════════════════════════════════════════════ */

interface ArchStyle {
  name: string;
  period: string;
  description: string;
  keyFeatures: string[];
  examples: string[];
  image: string;
}

const architecturalStyles: ArchStyle[] = [
  {
    name: 'Berber / Amazigh',
    period: 'Prehistoric - Present',
    description: 'The indigenous architecture of Morocco\'s original inhabitants, the Amazigh (Berber) people. This tradition produced the dramatic kasbahs and ksour (fortified villages) of the Draa and Dades Valleys, built from pise (rammed earth) that blends seamlessly with the desert landscape. Berber architecture is defined by its harmony with terrain, using locally sourced materials and responding to extreme climate conditions. The multi-story kasbahs with their crenellated towers and geometric pise decoration are among the most visually striking buildings in all of Africa.',
    keyFeatures: ['Pise (rammed earth) construction', 'Crenellated watchtowers', 'Geometric earth decorations', 'Fortified granaries (agadirs)', 'Climate-responsive thick walls'],
    examples: ['Ait Benhaddou (UNESCO)', 'Kasbah Taourirt, Ouarzazate', 'Tamnougalt Kasbah, Draa Valley', 'Tizourgane Agadir, Anti-Atlas'],
    image: '/images/hero-ait-benhaddou.webp',
  },
  {
    name: 'Moorish / Andalusian',
    period: '8th - 15th Century',
    description: 'When the Moors were expelled from Al-Andalus (Spain and Portugal), they brought with them a refined architectural tradition that profoundly shaped Moroccan building. Moorish architecture is characterized by horseshoe arches, intricate stucco carving (gebs), zellige tilework, lush courtyard gardens with central fountains, and an emphasis on interior beauty over exterior display. The medinas of Fes, Tetouan, and Chefchaouen are living museums of Andalusian architectural influence, where every door, fountain, and courtyard echoes the lost splendor of Cordoba and Granada.',
    keyFeatures: ['Horseshoe and multifoil arches', 'Central courtyard with fountain', 'Zellige geometric tilework', 'Carved stucco (gebs)', 'Whitewashed exterior, ornate interior'],
    examples: ['Chefchaouen Medina', 'Tetouan Medina (UNESCO)', 'Qarawiyyin Mosque, Fes', 'Andalusian Mosque, Fes'],
    image: '/images/hero-chefchaouen.webp',
  },
  {
    name: 'Almohad Dynasty',
    period: '1121 - 1269',
    description: 'The Almohad dynasty produced some of Morocco\'s most monumental architecture, characterized by massive scale, austere grandeur, and sophisticated geometric decoration. The Almohads built the great minarets that define the Moroccan skyline: the Koutoubia in Marrakech, the Hassan Tower in Rabat, and (their influence extending to Spain) the Giralda in Seville. All three share a distinctive square plan and ascending decorative registers that move from simple arches to elaborate interlacing patterns. Almohad architecture established the template that would influence all subsequent Moroccan building.',
    keyFeatures: ['Monumental square minarets', 'Ascending decorative registers', 'Sebka (diamond lattice) patterns', 'Massive defensive walls and gates', 'Austere grandeur and scale'],
    examples: ['Koutoubia Mosque, Marrakech', 'Hassan Tower, Rabat', 'Bab Oudaia gate, Rabat', 'Tin Mal Mosque, High Atlas'],
    image: '/images/hero-marrakech-koutoubia.webp',
  },
  {
    name: 'Marinid Dynasty',
    period: '1244 - 1465',
    description: 'The Marinids elevated decorative arts to their absolute zenith in Morocco. While politically weaker than the Almohads, they were unrivaled patrons of architecture, founding a series of madrasas (theological colleges) in Fes, Meknes, and Sale that rank among the finest buildings in the Islamic world. Marinid architecture is defined by astonishing intricacy: every surface is covered with zellige tilework, carved stucco, and painted cedar wood in layers of mathematical complexity that can take years of study to fully appreciate. The Bou Inania Madrasa in Fes represents the peak of this decorative genius.',
    keyFeatures: ['Extraordinary surface decoration', 'Three-layer ornament (zellige, stucco, cedar)', 'Madrasa architecture perfected', 'Muqarnas (honeycomb) vaulting', 'Marble courtyard floors'],
    examples: ['Bou Inania Madrasa, Fes', 'Al-Attarine Madrasa, Fes', 'Madrasa Abu al-Hassan, Sale', 'Chellah Necropolis, Rabat'],
    image: '/images/detail-zellige-mosaic.webp',
  },
  {
    name: 'Saadian Dynasty',
    period: '1549 - 1659',
    description: 'The Saadians brought a new opulence to Moroccan architecture, drawing on Marinid decorative traditions while adding influences from Ottoman Turkey and Renaissance Europe. Their greatest surviving works are the Saadian Tombs and the ruins of El Badi Palace in Marrakech. The Saadian Tombs, rediscovered in 1917, contain some of the most lavish interior spaces in Morocco, with Italian Carrara marble columns, exquisite muqarnas ceilings, and zellige of extraordinary refinement. El Badi Palace, though now in ruins, was once described as the eighth wonder of the world.',
    keyFeatures: ['Lavish use of imported marble', 'Gold and onyx ornamentation', 'Refined muqarnas ceilings', 'Grand palace complexes', 'Synthesis of Moroccan and Ottoman elements'],
    examples: ['Saadian Tombs, Marrakech', 'El Badi Palace ruins, Marrakech', 'Ben Youssef Madrasa, Marrakech', 'Moulay Ismail\'s early works'],
    image: '/images/art-moroccan-doorway.webp',
  },
  {
    name: 'Alaouite Dynasty',
    period: '1631 - Present',
    description: 'The ruling Alaouite dynasty has shaped Moroccan architecture for nearly four centuries, beginning with the colossal building projects of Sultan Moulay Ismail in Meknes. Alaouite architecture is characterized by grand scale, the integration of traditional Moroccan decorative arts with new influences, and during the 20th-century French Protectorate period, a deliberate blend of Moroccan and European elements. Royal palaces, grand mosques, and monumental gates (babs) demonstrate the dynasty\'s commitment to architectural splendor as an expression of political power.',
    keyFeatures: ['Monumental royal complexes', 'Integration of gardens and architecture', 'Grand processional gates (babs)', 'Franco-Moroccan colonial fusion', 'Continued patronage of traditional crafts'],
    examples: ['Dar el-Makhzen, Meknes', 'Royal Palace, Fes', 'Bab Mansour, Meknes', 'Mohammed V Mausoleum, Rabat'],
    image: '/images/hero-hassan-mosque.webp',
  },
  {
    name: 'Art Deco',
    period: '1912 - 1956',
    description: 'During the French Protectorate, Casablanca became one of the world\'s great Art Deco cities. French architects, given a blank canvas in the rapidly growing commercial capital, designed hundreds of buildings that blended European Art Deco geometry with Moroccan decorative motifs: zellige-inspired facade patterns, Moorish arches rendered in concrete, and balconies with Islamic geometric railings. The result is a unique architectural style found nowhere else in the world. The Ville Nouvelle of Casablanca contains one of the largest and most coherent collections of Art Deco architecture outside of Miami and Mumbai.',
    keyFeatures: ['Geometric facades blending Deco and Islamic motifs', 'Reinforced concrete construction', 'Moorish arches in modern materials', 'Ornamental balconies with iron railings', 'Cinema palaces and commercial buildings'],
    examples: ['Cinema Rialto, Casablanca', 'Sacre-Coeur Cathedral (now cultural center), Casablanca', 'Hotel Lincoln, Casablanca', 'Quartier Habous (New Medina), Casablanca'],
    image: '/images/hero-hassan-mosque.webp',
  },
  {
    name: 'Modern',
    period: '1986 - Present',
    description: 'Contemporary Moroccan architecture seeks to honor the country\'s extraordinary heritage while embracing global modernism. The Hassan II Mosque in Casablanca (completed 1993) is the defining work: the world\'s tallest minaret at 210 meters, a retractable roof over an ocean-facing prayer hall, and the finest traditional craftsmanship applied at unprecedented scale. More recent projects like the Mohammed VI Theatre in Rabat by Zaha Hadid Architects and the Yves Saint Laurent Museum in Marrakech by Studio KO demonstrate a new generation of architecture that is confidently Moroccan and unapologetically modern.',
    keyFeatures: ['Traditional craftsmanship at modern scale', 'Retractable and innovative structures', 'International architects with local sensitivity', 'Sustainable desert-adapted design', 'Cultural institutions as architectural statements'],
    examples: ['Hassan II Mosque, Casablanca', 'Mohammed VI Theatre, Rabat', 'Yves Saint Laurent Museum, Marrakech', 'ONCF Kenitra Station'],
    image: '/images/hero-hassan-mosque.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════
   KEY ARCHITECTURAL ELEMENTS (12)
   ═══════════════════════════════════════════════════════════════ */

const architecturalElements = [
  {
    name: 'Zellige',
    description: 'Hand-cut geometric mosaic tilework made from glazed terracotta. Each tiny piece is individually chiseled and assembled into infinite mathematical patterns. The art form originated in 10th-century Fes and remains one of Morocco\'s most iconic decorative traditions.',
  },
  {
    name: 'Tadelakt',
    description: 'A luxurious, waterproof lime plaster polished with flat river stones and black soap to create a seamless, marble-like surface. Traditionally used in hammams and palaces, this ancient technique produces surfaces that are both beautiful and naturally antibacterial.',
  },
  {
    name: 'Mashrabiya',
    description: 'Intricately carved wooden lattice screens that cover windows and balconies. They allow air circulation and diffused light while providing privacy. The geometric patterns cast mesmerizing shadow patterns that shift throughout the day.',
  },
  {
    name: 'Muqarnas',
    description: 'Three-dimensional honeycomb vaulting made from carved plaster or wood, used in ceilings, domes, and transitional zones between walls and ceilings. Muqarnas create a cascading, stalactite-like effect that symbolizes the infinite complexity of creation.',
  },
  {
    name: 'Horseshoe Arches',
    description: 'The signature arch form of Moroccan architecture, where the curve extends beyond the semicircle to create a keyhole or horseshoe shape. Developed during the Umayyad period, horseshoe arches appear in mosques, palaces, gates, and domestic architecture.',
  },
  {
    name: 'Riads',
    description: 'Traditional urban houses built around a central open-air courtyard with a fountain and garden. The inward-facing design provides privacy, natural ventilation, and a private paradise in the heart of the dense medina. Riad architecture is a masterclass in climate-responsive design.',
  },
  {
    name: 'Minarets',
    description: 'The square minaret is distinctly Moroccan and North African, in contrast to the round or octagonal minarets found elsewhere in the Islamic world. Moroccan minarets feature ascending tiers of decoration, topped by a lantern and brass orbs (jamour).',
  },
  {
    name: 'Bab (Monumental Gates)',
    description: 'Grand fortified gates that served as both defensive structures and expressions of royal power. Moroccan babs feature massive horseshoe arches, decorative zellige panels, and carved stone. Bab Mansour in Meknes is considered the finest gate in North Africa.',
  },
  {
    name: 'Gebs (Carved Stucco)',
    description: 'Intricate plaster carving that covers walls above the zellige dado. Artisans carve floral arabesques, geometric patterns, and Kufic calligraphy into wet plaster using hand tools. The finest gebs work is found in Marinid madrasas.',
  },
  {
    name: 'Painted Cedar',
    description: 'Carved and painted cedarwood used for ceilings, doors, brackets, and screens. Cedar is prized for its fragrance, durability, and resistance to insects. The geometric and floral patterns are painted in rich polychrome, creating the third layer of traditional Moroccan interior decoration.',
  },
  {
    name: 'Pise (Rammed Earth)',
    description: 'Walls built by compressing layers of earth, clay, straw, and lime into wooden forms. Pise construction is naturally insulating, keeping interiors cool in summer and warm in winter. The technique produces the distinctive rose-red and ochre tones of southern Moroccan kasbahs.',
  },
  {
    name: 'Khettara (Underground Channels)',
    description: 'Ancient underground water channels that carry snowmelt from mountains to cities and gardens over distances of up to 30 kilometers. While not visible architecture, the khettara system is the hidden engineering that made Morocco\'s great gardens and cities possible.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   15+ MUST-SEE ARCHITECTURAL MASTERPIECES
   ═══════════════════════════════════════════════════════════════ */

interface Masterpiece {
  name: string;
  city: string;
  period: string;
  description: string;
  whyVisit: string;
  image: string;
}

const masterpieces: Masterpiece[] = [
  {
    name: 'Hassan II Mosque',
    city: 'Casablanca',
    period: 'Modern (1993)',
    description: 'The largest mosque in Africa and the third-largest in the world. Its 210-meter minaret is the tallest religious structure on earth. Built over the Atlantic Ocean with a glass floor revealing the sea below and a retractable roof that opens to the sky, it combines cutting-edge engineering with 10,000 master artisans\' traditional craftsmanship.',
    whyVisit: 'The only mosque in Morocco open to non-Muslim visitors. Guided tours reveal 53,000 square meters of hand-carved marble, zellige, and painted cedar.',
    image: '/images/hero-hassan-mosque.webp',
  },
  {
    name: 'Koutoubia Mosque',
    city: 'Marrakech',
    period: 'Almohad (1147-1199)',
    description: 'The defining symbol of Marrakech and the masterwork of Almohad architecture. The 77-meter square minaret, visible from across the city, established the template for Moroccan minarets including the Hassan Tower in Rabat and the Giralda in Seville. The ascending decorative registers on each face are a textbook of Almohad geometric art.',
    whyVisit: 'While the interior is closed to non-Muslims, the minaret and surrounding gardens are essential viewing, especially at sunset when the warm light illuminates the stone.',
    image: '/images/hero-marrakech-koutoubia.webp',
  },
  {
    name: 'Qarawiyyin Mosque & University',
    city: 'Fes',
    period: 'Founded 859, rebuilt multiple dynasties',
    description: 'Founded by Fatima al-Fihri in 859 CE, the Qarawiyyin is recognized by UNESCO and Guinness World Records as the oldest continuously operating university in the world. The mosque complex has been expanded and embellished by every dynasty since the Idrisids, creating a layered architectural palimpsest that spans over a thousand years of Moroccan building. The prayer hall can accommodate 20,000 worshippers and features an extraordinary forest of horseshoe arches.',
    whyVisit: 'While the interior is closed to non-Muslims, the exterior, doorways, and courtyard glimpses through open doors are extraordinary. The surrounding medina streets offer multiple vantage points.',
    image: '/images/hero-fes-tanneries.webp',
  },
  {
    name: 'Bou Inania Madrasa',
    city: 'Fes',
    period: 'Marinid (1351-1356)',
    description: 'The pinnacle of Marinid decorative art and arguably the most beautiful building in Morocco. Every surface is covered with three layers of ornament: zellige tilework below, carved stucco in the middle, and painted cedar above. The marble courtyard with its central ablutions fountain and water clock mechanism is a masterpiece of medieval Islamic architecture.',
    whyVisit: 'Open to non-Muslims (rare for a functioning mosque-madrasa). The level of decorative detail is staggering and rewards extended, careful observation.',
    image: '/images/detail-zellige-mosaic.webp',
  },
  {
    name: 'Ait Benhaddou',
    city: 'Ouarzazate',
    period: 'Berber (17th century, on ancient foundations)',
    description: 'A UNESCO World Heritage fortified village (ksar) of dramatic pise kasbahs rising above the Ounila River. The cluster of earthen towers and buildings against the barren landscape is one of the most photographed scenes in Morocco and has served as a backdrop for dozens of films including Gladiator, Game of Thrones, and Lawrence of Arabia.',
    whyVisit: 'The most accessible and photogenic example of traditional Berber earthen architecture. Climbing to the summit provides panoramic views of the surrounding desert landscape.',
    image: '/images/hero-ait-benhaddou.webp',
  },
  {
    name: 'Saadian Tombs',
    city: 'Marrakech',
    period: 'Saadian (16th century)',
    description: 'Rediscovered in 1917 after being sealed by the Alaouite dynasty, these royal mausolea contain some of the most exquisite interior spaces in Morocco. The Hall of Twelve Columns features Italian Carrara marble pillars, a breathtaking muqarnas cedar ceiling, and zellige tilework of supreme refinement. The intimate garden courtyards are tranquil and beautiful.',
    whyVisit: 'One of the few Saadian structures to survive intact, offering a glimpse into the extraordinary opulence of the dynasty. Go early to avoid crowds in the small chambers.',
    image: '/images/art-moroccan-doorway.webp',
  },
  {
    name: 'Hassan Tower',
    city: 'Rabat',
    period: 'Almohad (begun 1195, unfinished)',
    description: 'The unfinished minaret of what was intended to be the largest mosque in the world. Sultan Yacoub al-Mansour\'s death halted construction, leaving the 44-meter tower surrounded by 200 stone columns that mark the prayer hall\'s planned footprint. Adjacent stands the exquisite Mohammed V Mausoleum (1971), a masterpiece of Alaouite architecture.',
    whyVisit: 'The juxtaposition of the medieval unfinished tower and the modern mausoleum tells 800 years of Moroccan architectural history in a single site.',
    image: '/images/hero-hassan-mosque.webp',
  },
  {
    name: 'Bab Mansour',
    city: 'Meknes',
    period: 'Alaouite (1732)',
    description: 'Widely considered the finest monumental gate in North Africa, Bab Mansour was built by Sultan Moulay Ismail using marble columns recycled from the Roman ruins of Volubilis and the Saadian El Badi Palace. The massive horseshoe arch is framed by elaborate zellige panels and carved green tile decorations of extraordinary scale and refinement.',
    whyVisit: 'The sheer scale and decorative ambition of the gate is best appreciated in person. The Place el-Hedim square in front provides excellent viewing angles.',
    image: '/images/detail-moroccan-door.webp',
  },
  {
    name: 'Ben Youssef Madrasa',
    city: 'Marrakech',
    period: 'Saadian (rebuilt 1564-1570)',
    description: 'The largest madrasa in Morocco, once housing 900 students. The central courtyard is a symphony of zellige, carved stucco, and cedar, with a large marble ablutions basin reflecting the decorated walls. The 132 student dormitory cells surrounding the courtyard offer a rare glimpse into the daily life of medieval Islamic scholarship.',
    whyVisit: 'Recently reopened after extensive restoration, the madrasa offers one of Morocco\'s most immersive architectural experiences. The interplay of light, water, and decoration changes throughout the day.',
    image: '/images/detail-zellige-pattern.webp',
  },
  {
    name: 'Volubilis Roman Ruins',
    city: 'Near Meknes',
    period: 'Roman (3rd century BCE - 3rd century CE)',
    description: 'The best-preserved Roman ruins in North Africa, featuring remarkably intact mosaic floors, a triumphal arch, the Basilica, and the Capitol Temple. Volubilis demonstrates that Morocco\'s architectural heritage predates the Islamic period by many centuries. The site sits on a fertile plain with views to the holy city of Moulay Idriss.',
    whyVisit: 'The mosaics alone justify the visit. The Labours of Hercules and Orpheus mosaics are among the finest Roman floor mosaics surviving anywhere in the former empire.',
    image: '/images/hero-kasbahs.webp',
  },
  {
    name: 'Tin Mal Mosque',
    city: 'High Atlas Mountains',
    period: 'Almohad (1156)',
    description: 'Perched at 1,200 meters in a remote High Atlas valley, the Tin Mal Mosque is the birthplace of the Almohad movement and one of only two mosques in Morocco open to non-Muslims. Though partially ruined, the soaring nave, massive horseshoe arches, and the remnants of exquisite stucco decoration convey the austere power that characterized early Almohad architecture. The dramatic mountain setting is unforgettable.',
    whyVisit: 'One of only two mosques in Morocco open to non-Muslims. The remote mountain journey along the Tizi n\'Test pass is an adventure in itself, and the isolation heightens the spiritual atmosphere.',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Bahia Palace',
    city: 'Marrakech',
    period: 'Alaouite (1860s-1900)',
    description: 'A sprawling 19th-century palace built by Grand Vizier Si Moussa and his son Ba Ahmed. The name means "Palace of the Beautiful" and the interior lives up to it: a sequence of painted reception rooms, intimate riads, and grand courtyards decorated with the finest zellige, carved cedar, and stucco work that the best artisans of the period could produce. The gardens, including an immense central courtyard paved in marble, are among the most serene spaces in Marrakech.',
    whyVisit: 'The most accessible and photogenic palace in Marrakech. The interplay of indoor and outdoor rooms illustrates how Moroccan architecture dissolves the boundary between building and garden.',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Chellah Necropolis',
    city: 'Rabat',
    period: 'Marinid over Roman (14th century on ancient foundations)',
    description: 'A hauntingly beautiful site where Marinid royal tombs were built atop the ruins of the Roman city of Sala Colonia. The monumental Marinid gateway opens onto a garden of ruins where crumbling minarets, carved marble tombs, and Roman columns are overgrown with fig trees and inhabited by nesting storks. It is one of the most atmospheric places in Morocco.',
    whyVisit: 'The layering of Roman, Islamic, and natural elements in a single garden-ruin creates a timeless, contemplative atmosphere found nowhere else. Visit at sunset when the golden light transforms the ruins.',
    image: '/images/hero-essaouira-ramparts.webp',
  },
  {
    name: 'Yves Saint Laurent Museum',
    city: 'Marrakech',
    period: 'Modern (2017)',
    description: 'Designed by Studio KO, this terracotta-clad museum is a masterclass in contemporary Moroccan architecture. The exterior is composed of interlocking cubes sheathed in a lace-like terracotta pattern that references zellige tilework, while the interior galleries are cool, minimal, and bathed in natural light. The building demonstrates how Moroccan architectural DNA can be reinterpreted for the 21st century.',
    whyVisit: 'Beyond the fashion exhibitions, the architecture itself is the attraction. The building is a conversation between Moroccan tradition and global contemporary design, set within a garden that connects to the nearby Jardin Majorelle.',
    image: '/images/hero-majorelle-garden.webp',
  },
  {
    name: 'El Badi Palace Ruins',
    city: 'Marrakech',
    period: 'Saadian (1578-1603)',
    description: 'Once the most lavish palace in the Islamic world, El Badi ("The Incomparable") was built by Sultan Ahmad al-Mansur to celebrate his victory at the Battle of the Three Kings. Italian marble, Sudanese gold, Irish granite, and Indian onyx were used in its construction. Though stripped of all decoration by Moulay Ismail a century later, the vast sunken gardens, massive walls, and sheer scale of the ruins still convey the staggering ambition of the Saadian golden age.',
    whyVisit: 'The immense scale of the ruins and the annual Marrakech Popular Arts Festival held within the walls create an experience that connects past grandeur to living culture.',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Kasbah of the Udayas',
    city: 'Rabat',
    period: 'Almohad (12th century)',
    description: 'Perched on a cliff above the mouth of the Bou Regreg River, this fortified kasbah is one of the most perfectly preserved Almohad structures in Morocco. The grand Almohad gateway, the narrow blue-and-white streets of the residential quarter (added later by Andalusian refugees), and the serene Andalusian garden overlooking the Atlantic create a layered architectural experience spanning eight centuries.',
    whyVisit: 'The combination of Almohad fortifications, Andalusian domestic architecture, formal gardens, and ocean views makes this one of the most rewarding short visits in Morocco.',
    image: '/images/hero-morocco.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MOSQUE ARCHITECTURE DEEP DIVE
   ═══════════════════════════════════════════════════════════════ */

const mosqueFeatures = [
  {
    title: 'The Hypostyle Prayer Hall',
    description: 'Moroccan mosques follow the hypostyle plan: a vast hall of parallel aisles created by rows of arches resting on columns, oriented toward the qibla wall facing Mecca. The Qarawiyyin Mosque in Fes contains over 270 columns creating a mesmerizing forest of horseshoe arches that seems to extend infinitely.',
  },
  {
    title: 'The Square Minaret',
    description: 'Unlike the round or octagonal minarets of the eastern Islamic world, Morocco developed a distinctively square minaret form. Each face is decorated with increasingly complex geometric patterns as the eye travels upward, symbolizing the ascent from the earthly to the divine. The minaret is crowned by a lantern (jamour) topped with brass orbs.',
  },
  {
    title: 'The Mihrab',
    description: 'A niche in the qibla wall indicating the direction of Mecca, the mihrab is the focal point of the mosque and receives the most elaborate decoration. In Moroccan mosques, the mihrab is typically framed by layers of carved stucco, zellige, and calligraphy, often with a muqarnas half-dome above.',
  },
  {
    title: 'The Sahn (Courtyard)',
    description: 'The open courtyard serves as both an ablution area and an extension of the prayer hall for overflow crowds during Friday prayers and festivals. Moroccan mosque courtyards are paved in marble or zellige and often feature a central fountain or ornamental basin.',
  },
  {
    title: 'The Minbar (Pulpit)',
    description: 'The wooden pulpit from which the imam delivers the Friday sermon. Moroccan minbars are among the most elaborate in the Islamic world, carved from precious woods and inlaid with ivory, ebony, and marquetry. The Koutoubia minbar, now in the Badi Palace Museum, took eight years to complete.',
  },
  {
    title: 'Ablution Fountains',
    description: 'Ritual washing before prayer requires accessible water, and Moroccan mosques feature elaborate ablution fountains in their courtyards and surrounding streets. Public fountains (sebils) near mosques are often decorated with zellige and carved marble, serving both a religious and civic function.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   KASBAH AND KSAR ARCHITECTURE
   ═══════════════════════════════════════════════════════════════ */

const kasbahFeatures = [
  {
    title: 'Ksar (Fortified Village)',
    description: 'A ksar (plural ksour) is a fortified communal village built from rammed earth, typically surrounded by high walls with corner watchtowers. Families lived in individual houses within the protective perimeter, sharing communal granaries, wells, and mosques. Ait Benhaddou is the most famous surviving ksar.',
  },
  {
    title: 'Kasbah (Fortified House)',
    description: 'A kasbah is an individual fortified dwelling belonging to a single family or clan leader. Multi-story structures with crenellated towers, narrow slit windows for defense, and elaborate geometric earth decoration on the upper floors, kasbahs are the signature architecture of southern Morocco\'s Draa, Dades, and Todra valleys.',
  },
  {
    title: 'Agadir (Fortified Granary)',
    description: 'A collective fortified storehouse found primarily in the Anti-Atlas and Souss regions. Each family in the community had a designated storage chamber for grain, oil, and valuables. The tiered cells, accessed by steep ladders, create a dramatic honeycomb effect. Agadir Oufella in Agadir and Igherm\'s granaries are on the UNESCO Tentative List.',
  },
  {
    title: 'Rammed Earth Construction',
    description: 'Southern Moroccan builders perfected the pise technique: a mixture of local earth, straw, water, and sometimes lime is compacted in wooden formwork layer by layer. Walls can be a meter thick, providing excellent insulation. The earth colors range from deep rose-red in the Dades Valley to honey-gold near Ouarzazate.',
  },
  {
    title: 'Climate Adaptation',
    description: 'Every element of kasbah design responds to the extreme desert climate. Thick walls absorb daytime heat and release it slowly at night. Narrow windows reduce solar gain. Internal courtyards create shade and channel breezes. Towers catch wind for ventilation. Water channels irrigate interior gardens.',
  },
  {
    title: 'Decorative Earthwork',
    description: 'Despite using humble materials, kasbah builders created sophisticated decoration. Geometric patterns are formed by projecting or recessing rows of bricks within the pise walls, creating shadow patterns that change throughout the day. The upper floors, being the most public-facing, receive the most elaborate decoration.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RIAD ARCHITECTURE DEEP DIVE DATA
   ═══════════════════════════════════════════════════════════════ */

const riadFeatures = [
  {
    title: 'Inward-Facing Design',
    description: 'A riad presents blank exterior walls to the street, revealing its beauty only to those who enter. This inward orientation reflects Islamic values of privacy and modesty while creating a controlled interior environment shielded from the noise, dust, and heat of the medina.',
  },
  {
    title: 'Central Courtyard (Wust al-Dar)',
    description: 'The courtyard is the heart of the riad, an open-air room that serves as the primary living space. Its proportions are carefully calculated so that the surrounding walls provide shade for most of the day while allowing sunlight to reach the garden and fountain below.',
  },
  {
    title: 'Fountain and Water Features',
    description: 'A marble or zellige-tiled fountain at the center of the courtyard provides cooling evaporation, pleasant sound, and spiritual symbolism. Running water represents paradise and purity in Islamic tradition. Larger riads may have multiple fountains and water channels.',
  },
  {
    title: 'Four Rooms off the Courtyard',
    description: 'The classic riad has four rooms opening directly onto the courtyard through tall doorways, one on each side. Each room serves a different function: reception, family living, sleeping, and cooking. The tall, narrow proportions channel breezes from the courtyard.',
  },
  {
    title: 'Rooftop Terrace',
    description: 'The roof terrace serves as a private outdoor space with views over the medina. Traditionally used for drying laundry and sleeping on hot summer nights, today riad terraces often feature dining areas and plunge pools. The terrace is the riad\'s connection to sky and cityscape.',
  },
  {
    title: 'Natural Climate Control',
    description: 'The thick walls, central courtyard, water features, and vegetation create a passive cooling system that can maintain interior temperatures 10-15 degrees below the street outside. In winter, the same thermal mass retains warmth. The riad is a masterclass in pre-electric climate engineering.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   COLONIAL FRENCH ARCHITECTURE
   ═══════════════════════════════════════════════════════════════ */

const colonialLandmarks = [
  {
    name: 'Cinema Rialto',
    city: 'Casablanca',
    year: '1930',
    description: 'A stunning Art Deco cinema with a streamlined facade, geometric reliefs, and a soaring interior. Designed by Pierre Jabin, it is one of the finest surviving examples of Casablanca\'s golden age of cinema architecture and has been restored as a cultural venue.',
  },
  {
    name: 'Casablanca Cathedral (former Sacre-Coeur)',
    city: 'Casablanca',
    year: '1930',
    description: 'Designed by Paul Tournon, this striking Neo-Gothic cathedral blends European structural forms with Moroccan decorative motifs. Decommissioned as a church after independence, it now serves as a cultural center. The twin towers and geometric stained glass are distinctly Art Deco.',
  },
  {
    name: 'Quartier Habous (New Medina)',
    city: 'Casablanca',
    year: '1917-1955',
    description: 'A fascinating experiment in Franco-Moroccan urbanism: a completely new medina designed by French architects using traditional Moroccan building forms and materials. The arcaded streets, central mosque, and residential quarters replicate the organic feel of a historic medina within a planned framework.',
  },
  {
    name: 'Bank al-Maghrib Building',
    city: 'Rabat',
    year: '1930',
    description: 'The central bank headquarters, designed by Edmond Brion, exemplifies the Protectorate-era blend of Mauresque and Art Deco styles. Classical columns sit alongside Moorish arches, and the grand banking hall features zellige-inspired floor patterns executed in marble.',
  },
  {
    name: 'Hotel Lincoln',
    city: 'Casablanca',
    year: '1916',
    description: 'One of the earliest Art Deco buildings in Casablanca, the Hotel Lincoln features a distinctive curved corner facade with ornamental ironwork balconies and geometric relief panels. It established the template that hundreds of subsequent Casablanca buildings would follow.',
  },
  {
    name: 'Ville Nouvelle, Rabat',
    city: 'Rabat',
    year: '1912-1930s',
    description: 'Planned by Henri Prost under Resident-General Lyautey, Rabat\'s new town was designed as a garden city with wide boulevards, public parks, and administrative buildings in a restrained neo-Moorish style. Lyautey\'s policy of preserving the existing medina while building the new city alongside it was revolutionary for colonial urbanism.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MODERN MOROCCAN ARCHITECTS AND PROJECTS
   ═══════════════════════════════════════════════════════════════ */

const modernProjects = [
  {
    name: 'Grand Theatre of Rabat',
    architect: 'Zaha Hadid Architects',
    year: '2019-ongoing',
    description: 'A flowing, organic form that emerges from the landscape like a sand dune sculpted by wind. The 1,800-seat theatre on the banks of the Bou Regreg River uses parametric design to create sweeping curves that reference both Atlantic waves and the draped forms of Moroccan textiles. It represents Morocco\'s ambition to become a hub for international performing arts.',
  },
  {
    name: 'Musee Yves Saint Laurent',
    architect: 'Studio KO (Karl Fournier & Olivier Marty)',
    year: '2017',
    description: 'A terracotta and concrete museum whose interlocking cubic volumes reference traditional Moroccan earthen architecture at a contemporary scale. The exterior lace-like terracotta cladding evokes zellige patterns, while the interior galleries use controlled natural light to create serene exhibition spaces. Studio KO are among the most influential architects working in Morocco today.',
  },
  {
    name: 'ONCF Kenitra Station',
    architect: 'Silvio d\'Ascia Architecture with Omar Kobbite',
    year: '2019',
    description: 'Morocco\'s high-speed rail station, designed as a gateway for the Al Boraq TGV line. The undulating white canopy, perforated with geometric patterns that cast dappled shadows below, reinterprets the mashrabiya screen at an urban infrastructure scale. It demonstrates how traditional Moroccan design principles can inform 21st-century transport architecture.',
  },
  {
    name: 'Mohammed VI Museum of Modern and Contemporary Art',
    architect: 'Karim Chakor',
    year: '2014',
    description: 'Rabat\'s first major art museum, designed by Moroccan architect Karim Chakor, features a restrained modern exterior in travertine stone that sits respectfully alongside the historic ville nouvelle. The interior is organized around a central atrium flooded with natural light, echoing the riad courtyard tradition translated into museum architecture.',
  },
  {
    name: 'Africa Institute, Sharjah (by Moroccan team)',
    architect: 'Tarik Oualalou & Associates',
    year: '2023',
    description: 'While not in Morocco, this project by Moroccan architect Tarik Oualalou exemplifies the new generation of Moroccan architects working globally. Oualalou\'s practice bridges traditional Moroccan spatial concepts like the riad, the fondouk, and the derb (alley) with contemporary architectural thinking.',
  },
  {
    name: 'Green Energy Park, Benguerir',
    architect: 'Various (IRESEN campus)',
    year: '2017',
    description: 'Part of Morocco\'s ambitious renewable energy program, this research campus near Marrakech integrates solar architecture, passive cooling, and sustainable materials. The buildings use rammed-earth walls, natural ventilation towers inspired by traditional windcatchers, and locally sourced stone, demonstrating that Morocco\'s architectural future is rooted in its sustainable past.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   ARCHITECTURE WALKING TOURS
   ═══════════════════════════════════════════════════════════════ */

const walkingTours = [
  {
    city: 'Fes',
    name: 'Marinid Masterpieces Walking Tour',
    duration: '4-5 hours',
    highlights: ['Bou Inania Madrasa', 'Al-Attarine Madrasa', 'Qarawiyyin Mosque exterior', 'Fondouk Nejjarine', 'Chouara Tanneries', 'Dar Batha Museum'],
    description: 'Walk through the medieval heart of Fes el-Bali to experience the finest Marinid architecture. Begin at Bab Bou Jeloud and wind through the dense medina to the great madrasas, pausing to admire carved stucco, zellige, and cedar at every turn.',
  },
  {
    city: 'Marrakech',
    name: 'Dynastic Splendor Walking Tour',
    duration: '4-6 hours',
    highlights: ['Koutoubia Mosque', 'Saadian Tombs', 'El Badi Palace', 'Bahia Palace', 'Ben Youssef Madrasa', 'Maison de la Photographie rooftop'],
    description: 'Trace the architectural legacy of four dynasties across Marrakech. From Almohad monuments to Saadian opulence and Alaouite grandeur, this route covers the essential masterpieces with time to appreciate the decorative details.',
  },
  {
    city: 'Casablanca',
    name: 'Art Deco Heritage Walk',
    duration: '3-4 hours',
    highlights: ['Place Mohammed V', 'Cinema Rialto', 'Hotel Lincoln', 'Wilaya Building', 'Quartier Habous', 'Hassan II Mosque'],
    description: 'Discover Casablanca\'s extraordinary collection of Art Deco architecture, the largest in Africa. The route moves from the Place Mohammed V administrative ensemble through the commercial district\'s geometric facades to the Franco-Moroccan experiment of the Quartier Habous.',
  },
  {
    city: 'Rabat',
    name: 'Capital Through the Ages Walk',
    duration: '3-4 hours',
    highlights: ['Kasbah of the Udayas', 'Hassan Tower', 'Mohammed V Mausoleum', 'Chellah Necropolis', 'Mohammed V Avenue', 'Parliament Building'],
    description: 'Rabat uniquely layers Almohad fortifications, Roman ruins, Marinid tombs, French Protectorate urban planning, and contemporary government architecture in a single walkable circuit. This route covers 2,000 years in one morning.',
  },
  {
    city: 'Meknes',
    name: 'Imperial City Architecture Walk',
    duration: '3 hours',
    highlights: ['Bab Mansour', 'Place el-Hedim', 'Moulay Ismail Mausoleum', 'Heri es-Souani', 'Royal Stables', 'Dar Jamai Museum'],
    description: 'Explore Moulay Ismail\'s monumental vision for his imperial capital. The walk takes you through the grandest gate in North Africa, into vast granaries and stables built for 12,000 horses, and through the imperial palace precinct.',
  },
  {
    city: 'Ouarzazate & Dades Valley',
    name: 'Kasbah Road Drive & Walk',
    duration: 'Full day (driving)',
    highlights: ['Kasbah Taourirt', 'Ait Benhaddou', 'Skoura Palm Oasis kasbahs', 'Dades Gorge kasbahs', 'Kasbah Amridil', 'Tamnougalt Kasbah'],
    description: 'Follow the Route of a Thousand Kasbahs through the dramatic landscapes of southern Morocco. Each stop reveals a different aspect of Berber earthen architecture, from compact fortified granaries to towering multi-story clan houses.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   GLOSSARY OF MOROCCAN ARCHITECTURAL TERMS
   ═══════════════════════════════════════════════════════════════ */

const glossary = [
  { term: 'Agadir', definition: 'Fortified collective granary found in the Anti-Atlas and Souss regions, used by communities to store grain, oil, and valuables.' },
  { term: 'Bab', definition: 'Monumental gate in a city wall or palace complex. Literally "door" in Arabic.' },
  { term: 'Borj', definition: 'Tower or bastion, especially in fortification walls. Used for defense and surveillance.' },
  { term: 'Dar', definition: 'House or dwelling. A dar is typically a more modest urban house compared to a riad, often without a central garden.' },
  { term: 'Derb', definition: 'A narrow residential alley or cul-de-sac in the medina. Derbs branch off main streets and serve as semi-private neighborhood passages.' },
  { term: 'Fondouk', definition: 'A caravanserai or merchants\' inn built around a central courtyard. The ground floor housed animals and goods; upper floors provided sleeping quarters.' },
  { term: 'Gebs', definition: 'Carved plaster stucco, the middle layer of the traditional Moroccan decorative trinity (zellige below, gebs in the middle, cedar above).' },
  { term: 'Hammam', definition: 'Public bathhouse, an essential element of Moroccan urban architecture. The domed steam rooms use tadelakt plaster and heated marble floors.' },
  { term: 'Jamour', definition: 'The brass orbs stacked on top of a Moroccan minaret, symbolizing the three mosques of Mecca, Medina, and Jerusalem.' },
  { term: 'Kasbah', definition: 'A fortified residential complex or citadel, typically the seat of a local chief. In southern Morocco, a multi-story earthen dwelling with crenellated towers.' },
  { term: 'Khettara', definition: 'Underground water channel (qanat) that uses gravity to transport groundwater over long distances without evaporation.' },
  { term: 'Koubba', definition: 'A small domed shrine or mausoleum housing the tomb of a holy man (marabout). Often whitewashed with a simple hemispherical dome.' },
  { term: 'Ksar', definition: 'A fortified village, especially in the pre-Saharan south. Plural: ksour. An entire community enclosed within defensive walls.' },
  { term: 'Madrasa', definition: 'A theological college attached to a mosque. Marinid madrasas are the finest examples, with student dormitory cells surrounding a decorated courtyard.' },
  { term: 'Mashrabiya', definition: 'An intricately carved wooden lattice screen used on windows and balconies for privacy, ventilation, and light filtration.' },
  { term: 'Medersa', definition: 'Alternative French-influenced spelling of madrasa, commonly used in Moroccan tourist signage.' },
  { term: 'Medina', definition: 'The historic walled old city, predating colonial development. Moroccan medinas are characterized by dense, organic street patterns and car-free alleyways.' },
  { term: 'Mellah', definition: 'The historic Jewish quarter of a Moroccan city, typically located near the royal palace and featuring distinctive balconied houses with exterior-facing windows.' },
  { term: 'Mihrab', definition: 'A niche in the qibla wall of a mosque indicating the direction of Mecca. The most decorated element of mosque interior architecture.' },
  { term: 'Minbar', definition: 'The pulpit from which the Friday sermon is delivered. Moroccan minbars are elaborate carved wooden structures, often with inlay work.' },
  { term: 'Moucharabieh', definition: 'French term for mashrabiya. Carved lattice woodwork screens, widely used in Moroccan domestic architecture.' },
  { term: 'Muqarnas', definition: 'Three-dimensional honeycomb or stalactite vaulting used in domes, niches, and transitional ceiling zones. Carved from plaster or wood.' },
  { term: 'Pise', definition: 'Rammed earth construction technique. A mixture of earth, straw, and water is compacted in wooden forms to create thick, insulating walls.' },
  { term: 'Riad', definition: 'Traditional Moroccan townhouse organized around a central garden courtyard. From Arabic "ryad" meaning garden.' },
  { term: 'Sebka', definition: 'A diamond-shaped interlacing pattern characteristic of Almohad architecture, used extensively on minarets and gates.' },
  { term: 'Tadelakt', definition: 'Waterproof lime plaster polished with river stones and black soap, creating a glossy, marble-like surface. Traditional to Marrakech.' },
  { term: 'Zellige', definition: 'Hand-cut geometric mosaic tilework from glazed terracotta. Individual pieces are chiseled to shape and assembled face-down on a pattern before being set.' },
  { term: 'Zouak', definition: 'Painted wood decoration, particularly on ceilings and eaves. Geometric and floral designs are painted in polychrome on carved cedar surfaces.' },
];

/* ═══════════════════════════════════════════════════════════════
   UNESCO ARCHITECTURAL SITES
   ═══════════════════════════════════════════════════════════════ */

const unescoSites = [
  { name: 'Medina of Fes', year: 1981, description: 'The world\'s largest car-free urban area, containing over 9,400 buildings, 14 gates, 6,000 streets, and hundreds of mosques, madrasas, and fondouks spanning over a thousand years.' },
  { name: 'Medina of Marrakech', year: 1985, description: 'Founded by the Almoravids in 1062, containing the Koutoubia Mosque, Saadian Tombs, Ben Youssef Madrasa, and miles of traditional souks within massive Almohad walls.' },
  { name: 'Ksar of Ait Benhaddou', year: 1987, description: 'A striking fortified village of traditional pre-Saharan earthen architecture, with kasbahs, towers, and collective granaries built in dramatic pise construction.' },
  { name: 'Historic City of Meknes', year: 1996, description: 'Sultan Moulay Ismail\'s imperial capital with monumental gates, vast royal stables, granaries, and gardens demonstrating the grandeur of 17th-century Alaouite power.' },
  { name: 'Medina of Tetouan', year: 1997, description: 'The most complete and best-preserved medina of Andalusian character in Morocco, built by refugees from the Reconquista with distinctly Spanish-Moorish architecture.' },
  { name: 'Medina of Essaouira (Mogador)', year: 2001, description: 'An 18th-century fortified port city designed by French architect Theodore Cornut, blending European military engineering with North African urban traditions.' },
  { name: 'Portuguese City of El Jadida (Mazagan)', year: 2004, description: 'A 16th-century Portuguese fortress with its remarkable Gothic cistern, blending European and Moroccan architectural traditions in a unique Atlantic port.' },
  { name: 'Archaeological Site of Volubilis', year: 1997, description: 'Extensive Roman ruins with exceptional mosaics, monumental arches, and public buildings demonstrating Morocco\'s pre-Islamic architectural heritage.' },
  { name: 'Rabat, Modern Capital and Historic City', year: 2012, description: 'Recognized for its blend of Arab-Muslim heritage and Western modernism: the Hassan Tower, Chellah, Kasbah of the Udayas, and French Protectorate-era city planning.' },
];

/* ═══════════════════════════════════════════════════════════════
   QUICK STATS
   ═══════════════════════════════════════════════════════════════ */

const quickStats = [
  { icon: <Building2 className="w-5 h-5" />, label: 'Styles', value: '8 Major', detail: 'Over 1000 years' },
  { icon: <Landmark className="w-5 h-5" />, label: 'Masterpieces', value: '16 Must-See', detail: 'Across Morocco' },
  { icon: <Globe className="w-5 h-5" />, label: 'UNESCO Sites', value: '9 Listed', detail: 'Architectural heritage' },
  { icon: <Layers className="w-5 h-5" />, label: 'Elements', value: '12 Key', detail: 'Design vocabulary' },
  { icon: <Crown className="w-5 h-5" />, label: 'Dynasties', value: '6 Major', detail: 'Builder patrons' },
  { icon: <Star className="w-5 h-5" />, label: 'Top Site', value: 'Hassan II Mosque', detail: 'Casablanca' },
];

/* ═══════════════════════════════════════════════════════════════
   TIMELINE DATA
   ═══════════════════════════════════════════════════════════════ */

const timeline = [
  { era: 'Prehistoric', period: '~700,000 BCE', event: 'First human settlements and cave dwellings in Morocco' },
  { era: 'Phoenician', period: '~800 BCE', event: 'Phoenician trading posts along the coast (Lixus, Mogador)' },
  { era: 'Roman', period: '40 CE - 285 CE', event: 'Volubilis becomes provincial capital; Roman urban planning' },
  { era: 'Islamic', period: '680 CE', event: 'Arab conquest brings mosque and medina architecture' },
  { era: 'Idrisid', period: '789', event: 'Fes founded; Qarawiyyin Mosque established (859)' },
  { era: 'Almoravid', period: '1040-1147', event: 'Marrakech founded (1062); first great Moroccan dynasty' },
  { era: 'Almohad', period: '1121-1269', event: 'Koutoubia, Hassan Tower, monumental gates and walls' },
  { era: 'Marinid', period: '1244-1465', event: 'Golden age of madrasas; decorative arts peak in Fes' },
  { era: 'Saadian', period: '1549-1659', event: 'El Badi Palace, Saadian Tombs, Ben Youssef Madrasa' },
  { era: 'Alaouite', period: '1631-present', event: 'Moulay Ismail\'s Meknes; Mohammed V Mausoleum' },
  { era: 'Protectorate', period: '1912-1956', event: 'Art Deco Casablanca; Ville Nouvelle urban planning' },
  { era: 'Modern', period: '1986-present', event: 'Hassan II Mosque; Yves Saint Laurent Museum; Grand Theatre' },
];

/* ═══════════════════════════════════════════════════════════════
   ZELLIGE, STUCCO & CEDAR DEEP DIVE
   ═══════════════════════════════════════════════════════════════ */

const decorativeArtsDeepDive = [
  {
    title: 'Zellige Tilework: The Mathematical Art',
    content: 'Zellige begins with square terracotta tiles glazed in a single color. The maalem (master craftsman) places a tile face-down on a cushion and chips it with a sharp hammer into one of hundreds of possible geometric shapes. These individual pieces are assembled face-down into complex patterns on a bed of sand, then set with plaster to form panels. A single square meter can contain over 1,000 hand-cut pieces. The geometric patterns are based on mathematical principles of symmetry and tessellation, incorporating 17 possible wallpaper groups long before Western mathematicians codified them. Fes remains the center of zellige production, with workshops in the medina producing tilework for palaces, mosques, and riads worldwide.',
  },
  {
    title: 'Carved Stucco (Gebs): Frozen Lace in Plaster',
    content: 'Carved stucco occupies the middle register of the traditional Moroccan decorative scheme, above the zellige dado and below the cedar ceiling. Artisans work with freshly applied plaster, carving intricate floral arabesques, interlacing geometric patterns, and Kufic calligraphic inscriptions using simple hand tools. The work must be completed before the plaster sets, requiring extraordinary speed and precision. Master stucco carvers train for 10 to 15 years. The finest examples, in the Marinid madrasas of Fes, achieve a complexity that approaches the limits of what the human hand can execute. Unlike zellige, which is geometric and abstract, gebs frequently incorporates organic floral motifs and flowing calligraphy.',
  },
  {
    title: 'Cedar Woodwork: The Crown of the Interior',
    content: 'The ceiling is the climax of the Moroccan decorative program. Atlas cedar, prized for its fragrance, honey color, and natural resistance to insects, is carved into geometric panels, assembled into complex coffered ceilings, and painted in rich polychrome (zouak). The most elaborate cedar ceilings use interlocking geometric frameworks that echo the zellige below, creating a sense of architectural unity from floor to sky. Cedar is also used for doors (which can weigh over 200 kg and feature massive bronze knockers), window screens, balustrades, and the elaborate minbars of mosques. The Ben Youssef Madrasa in Marrakech and the Qarawiyyin in Fes contain some of the most extraordinary cedar ceilings in existence.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE (Server Component)
   ═══════════════════════════════════════════════════════════════ */

export default function ArchitecturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Architecture</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-kasbahs.webp"
            alt="Ornate Moroccan architecture with intricate zellige tilework and carved stucco arches"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Built Heritage
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Architecture Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A thousand years of building mastery. From Berber kasbahs carved from desert earth to
              the soaring Hassan II Mosque over the Atlantic, discover the architecture that makes
              Morocco one of the most visually extraordinary countries on earth.
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

      {/* 1000 Years of Moroccan Architecture - Timeline */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Clock className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              1000 Years of Moroccan Architecture
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From prehistoric cave dwellings to cutting-edge modern design, Morocco&apos;s built heritage is a
              continuous thread connecting ancient Berber traditions to the 21st century.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-12">
            <p>
              Morocco&apos;s architectural story is one of extraordinary layering. Each dynasty, each wave of cultural
              influence, each era of trade and conquest has added new elements to the built environment without
              erasing what came before. The result is a living architectural palimpsest where Roman columns support
              Islamic arches, Berber earthen construction techniques coexist with Art Deco concrete, and
              thousand-year-old mosques stand alongside buildings by Pritzker Prize-winning architects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)]" />
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.era} className={`relative flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-10 md:pl-0`}>
                    <div className="card-moroccan p-4 inline-block">
                      <span className="tag tag-primary text-xs mb-2 inline-block">{item.period}</span>
                      <h3 className="font-bold text-sm text-[var(--text-primary)]">{item.era}</h3>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-4 w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-white shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Styles */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Columns3 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Architectural Styles Through History
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Eight distinct architectural traditions that have shaped Morocco&apos;s built heritage over a millennium,
              from Berber indigenous building to international modernism.
            </p>
          </div>

          <div className="space-y-8">
            {architecturalStyles.map((style, index) => (
              <div
                key={style.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={style.image}
                    alt={`${style.name} architecture in Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)]/90 text-[var(--text-primary)]">
                      {style.period}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {style.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                    {style.description}
                  </p>
                  <div className="space-y-3 pt-3 border-t border-[var(--border-light)]">
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-primary)] mb-1.5">Key Features</p>
                      <div className="flex flex-wrap gap-1.5">
                        {style.keyFeatures.map((feature) => (
                          <span key={feature} className="tag tag-primary text-xs">{feature}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-primary)] mb-1.5">Examples</p>
                      <div className="flex flex-wrap gap-1.5">
                        {style.examples.map((example) => (
                          <span key={example} className="tag tag-accent text-xs">{example}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zellige, Stucco & Cedar Deep Dive */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Zellige, Carved Stucco &amp; Cedar Woodwork
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The three layers of Moroccan decorative art that transform bare walls into some of the most
              ornate interiors in the Islamic world.
            </p>
          </div>

          <div className="relative mb-8">
            <img
              src="/images/detail-zellige-mosaic.webp"
              alt="Detail of zellige tilework, carved stucco, and cedar woodwork in a Moroccan madrasa"
              className="w-full h-72 md:h-96 object-cover rounded-2xl"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            {decorativeArtsDeepDive.map((section) => (
              <div key={section.title} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                  {section.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mosque Architecture */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Mosque Architecture
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the Qarawiyyin (founded 859) to the Hassan II Mosque (completed 1993), Moroccan
              mosque architecture represents over a millennium of spiritual and artistic achievement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                The mosque is the most important building type in Moroccan architecture, and its design has been
                refined over twelve centuries. Moroccan mosques are distinguished by their square minarets (unlike
                the round minarets common in the eastern Islamic world), their hypostyle prayer halls with forests
                of horseshoe arches, and their lavish decoration in zellige, stucco, and cedar. The three greatest
                Moroccan mosques &mdash; the Qarawiyyin in Fes, the Koutoubia in Marrakech, and the Hassan II in
                Casablanca &mdash; each represent a different era and scale of achievement, yet all share a
                common vocabulary of form and ornament.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mosqueFeatures.map((feature) => (
              <div key={feature.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kasbah and Ksar Architecture */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Castle className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Kasbah &amp; Ksar Architecture of the South
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The dramatic earthen fortifications of southern Morocco, where Berber communities built
              some of the most visually stunning architecture on the African continent.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/images/hero-ait-benhaddou.webp"
                alt="Ait Benhaddou ksar with dramatic rammed earth towers"
                className="w-full h-64 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed flex flex-col justify-center">
                <p>
                  The valleys south of the High Atlas &mdash; the Draa, the Dades, the Todra, the Ziz &mdash; contain
                  one of the world&apos;s great concentrations of earthen architecture. For centuries, Berber communities
                  built fortified villages (ksour) and family compounds (kasbahs) from the red and ochre earth of the
                  surrounding landscape, creating structures that seem to grow organically from the desert itself.
                </p>
                <p>
                  The Route of a Thousand Kasbahs between Ouarzazate and Errachidia passes dozens of these
                  remarkable structures, many still inhabited, others crumbling poetically back into the earth from
                  which they were built.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {kasbahFeatures.map((feature) => (
              <div key={feature.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Castle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Architectural Elements - 12 Elements */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shapes className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Key Architectural Elements
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The twelve essential building blocks of Moroccan architecture, from geometric tilework to
              underground water engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architecturalElements.map((element) => (
              <div key={element.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {element.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 Must-See Architectural Masterpieces */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Award className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              16 Must-See Architectural Masterpieces
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The sixteen buildings every architecture lover must experience in Morocco, spanning two thousand
              years of building tradition from Roman ruins to contemporary museums.
            </p>
          </div>

          <div className="space-y-8">
            {masterpieces.map((building, index) => (
              <div
                key={building.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={building.image}
                    alt={`${building.name} in ${building.city}, Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--text-primary)]">
                      {building.city}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/90 text-white">
                      #{index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {building.name}
                    </h3>
                  </div>
                  <span className="tag tag-accent text-xs mb-3 inline-block w-fit">{building.period}</span>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                    {building.description}
                  </p>
                  <div className="pt-3 border-t border-[var(--border-light)]">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--color-primary)]">Why visit:</span>{' '}
                      {building.whyVisit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Riad Architecture Deep Dive */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Riad Architecture &amp; Interior Design
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The riad is Morocco&apos;s most distinctive domestic architecture: an inward-facing paradise
              of courtyard, water, and light hidden behind blank medina walls.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The word <em>riad</em> comes from the Arabic <em>ryad</em>, meaning &quot;garden.&quot; A true riad is a
                traditional Moroccan townhouse built around a central garden courtyard, typically with a
                symmetrical plan and at least two stories. The riad is one of the most sophisticated examples
                of climate-responsive urban architecture ever developed, solving the challenges of privacy,
                ventilation, light, and heat management in the dense fabric of the medieval medina.
              </p>
              <p>
                Construction follows time-tested methods: thick walls of lime, stone, and earth provide thermal
                mass; the central courtyard acts as a natural chimney, drawing hot air upward and pulling cooler
                air in at ground level; the fountain provides evaporative cooling; and the planted trees and vines
                create shade and release moisture. The result is an interior environment that can be 10 to 15
                degrees cooler than the street outside, achieved without any mechanical systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {riadFeatures.map((feature) => (
              <div key={feature.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colonial French Architecture */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Columns3 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Colonial French Architecture
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The French Protectorate (1912-1956) left a remarkable architectural legacy in Casablanca and Rabat,
              where Art Deco geometry met Moorish decorative tradition.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Under Resident-General Lyautey, the French adopted a unique approach to colonial urbanism: rather
                than demolishing existing cities, they built new towns (villes nouvelles) alongside them. In Casablanca,
                this produced one of the 20th century&apos;s great experiments in architectural fusion, where French architects
                blended Art Deco modernism with Moroccan Islamic motifs to create a style found nowhere else on earth.
                Today, Casablanca contains over 12,000 Art Deco buildings, making it one of the largest collections in the world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colonialLandmarks.map((landmark) => (
              <div key={landmark.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {landmark.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{landmark.city} &middot; {landmark.year}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {landmark.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Moroccan Architects and Projects */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <GraduationCap className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Modern Moroccan Architects &amp; Projects
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A new generation of architects is reinterpreting Moroccan building traditions for the 21st century,
              creating structures that honor the past while embracing innovation.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {modernProjects.map((project) => (
              <div key={project.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)] font-semibold mb-2">
                      {project.architect} &middot; {project.year}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Walking Tours */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Footprints className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Architecture Walking Tours
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Six curated walking routes in Morocco&apos;s most architecturally rich cities, from Marinid
              masterpieces in Fes to Art Deco Casablanca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {walkingTours.map((tour) => (
              <div key={tour.city} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {tour.city}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--color-primary)]">{tour.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">Duration: {tour.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {tour.description}
                </p>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-primary)] mb-2">Highlights</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tour.highlights.map((h) => (
                      <span key={h} className="tag tag-primary text-xs">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNESCO Architectural Sites */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              UNESCO Architectural Sites in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Nine UNESCO World Heritage sites that collectively tell the story of Morocco&apos;s
              extraordinary architectural diversity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unescoSites.map((site) => (
              <div key={site.name} className="card-featured p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {site.name}
                    </h3>
                    <span className="text-xs text-[var(--color-accent)] font-medium">Inscribed {site.year}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {site.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/unesco"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Full UNESCO Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Glossary of Moroccan Architectural Terms */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Glossary of Moroccan Architectural Terms
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              An essential vocabulary for understanding and appreciating Morocco&apos;s built heritage,
              from agadir to zouak.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {glossary.map((entry) => (
                <div key={entry.term} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                    <PenLine className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {entry.term}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-1">
                      {entry.definition}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL DETAILS GALLERY */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1814' }}>
              Architectural Details Gallery
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The beauty of Moroccan architecture lives in the details -- every arch, fountain, and garden tells a story.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/art-moroccan-arch.webp', alt: 'Ornate horseshoe arch with carved stucco decoration in a Moroccan palace' },
              { src: '/images/art-moroccan-stucco.webp', alt: 'Detailed carved stucco plasterwork with geometric and floral arabesques' },
              { src: '/images/art-moroccan-fountain.webp', alt: 'Traditional zellige-tiled Moroccan fountain with intricate mosaic patterns' },
              { src: '/images/art-moroccan-garden.webp', alt: 'Lush Moroccan riad garden with orange trees, fountains, and tiled pathways' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-square group">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--color-primary-900)] text-white moroccan-pattern-dark">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Explore More of Morocco
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Architecture is just one facet of Morocco&apos;s extraordinary cultural heritage. Discover gardens,
            crafts, cuisine, UNESCO sites, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/unesco" className="btn-primary">
              UNESCO Heritage Sites <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/gardens" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Moroccan Gardens <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/crafts" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Crafts &amp; Artisans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

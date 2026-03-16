import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Flower2,
  MapPin,
  Clock,
  DollarSign,
  Sun,
  Camera,
  Droplets,
  TreePine,
  Star,
  Calendar,
  Palette,
  Eye,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Gardens Guide | Top 15 Gardens to Visit in Morocco | CityGuide',
  description:
    'Discover the most beautiful gardens in Morocco. From Jardin Majorelle in Marrakech to the Exotic Gardens of Bouknadel in Rabat, explore 15 stunning Moroccan gardens with visiting hours, entry fees, best seasons, and photography tips.',
  keywords: [
    'Moroccan gardens',
    'Jardin Majorelle',
    'Menara Gardens Marrakech',
    'Islamic gardens Morocco',
    'Agdal Gardens',
    'Le Jardin Secret',
    'Anima Garden Marrakech',
    'Jnan Sbil Fes',
    'Morocco garden tour',
    'riad gardens Morocco',
    'Skoura palm grove',
    'Fint Oasis Ouarzazate',
    'Morocco spring flowers',
    'Andalusian Gardens Rabat',
    'best gardens Morocco',
    'Morocco garden photography',
  ],
  openGraph: {
    title: 'Moroccan Gardens Guide - Top 15 Gardens to Visit | CityGuide',
    description:
      'Explore Morocco\'s most enchanting gardens. A comprehensive guide to 15 must-visit gardens across Marrakech, Rabat, Fes, Meknes, Essaouira, and Ouarzazate.',
    url: 'https://citytoursmorocco.com/gardens',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1585247226801-bc613c441316?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Jardin Majorelle cobalt blue walls with tropical plants in Marrakech Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/gardens' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/gardens#guide',
      headline: 'Complete Guide to Moroccan Gardens - 15 Must-Visit Gardens',
      description:
        'Comprehensive guide to the most beautiful gardens in Morocco, covering Islamic garden tradition, garden design elements, best seasons, and photography tips.',
      url: 'https://citytoursmorocco.com/gardens',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Top 15 Gardens in Morocco',
      description: 'The finest gardens to visit across Morocco.',
      numberOfItems: 15,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Jardin Majorelle, Marrakech' },
        { '@type': 'ListItem', position: 2, name: 'Menara Gardens, Marrakech' },
        { '@type': 'ListItem', position: 3, name: 'Agdal Gardens, Marrakech' },
        { '@type': 'ListItem', position: 4, name: 'Le Jardin Secret, Marrakech' },
        { '@type': 'ListItem', position: 5, name: 'Anima Garden, Marrakech' },
        { '@type': 'ListItem', position: 6, name: 'Exotic Gardens of Bouknadel, Rabat' },
        { '@type': 'ListItem', position: 7, name: 'Andalusian Gardens, Rabat' },
        { '@type': 'ListItem', position: 8, name: 'Jnan Sbil, Fes' },
        { '@type': 'ListItem', position: 9, name: 'Riad Gardens of Fes' },
        { '@type': 'ListItem', position: 10, name: 'Royal Stables Gardens, Meknes' },
        { '@type': 'ListItem', position: 11, name: 'Agdal Basin, Meknes' },
        { '@type': 'ListItem', position: 12, name: 'Argan Groves, Essaouira' },
        { '@type': 'ListItem', position: 13, name: 'Diabat Gardens, Essaouira' },
        { '@type': 'ListItem', position: 14, name: 'Fint Oasis, Ouarzazate' },
        { '@type': 'ListItem', position: 15, name: 'Skoura Palm Grove, Ouarzazate' },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   TOP 15 GARDENS DATA
   ═══════════════════════════════════════════════════════════════ */

interface Garden {
  name: string;
  city: string;
  address: string;
  hours: string;
  entryFee: string;
  bestTime: string;
  special: string;
  description: string;
  image: string;
}

const gardens: Garden[] = [
  {
    name: 'Jardin Majorelle',
    city: 'Marrakech',
    address: 'Rue Yves Saint Laurent, Gueliz, Marrakech',
    hours: '9:00 AM - 6:00 PM daily (extended to 6:30 PM in summer)',
    entryFee: '150 MAD garden, 30 MAD Berber Museum, 100 MAD YSL Museum',
    bestTime: 'Early morning (9-10 AM) to avoid crowds; March-May for blooming',
    special: 'Created by French painter Jacques Majorelle in 1923 and later restored by Yves Saint Laurent and Pierre Berge. Famous for its electric cobalt blue walls (Majorelle Blue), over 300 plant species from five continents, towering bamboo groves, lotus ponds, and the Berber Museum housed in a stunning Art Deco studio.',
    description: 'Morocco\'s most iconic garden and one of the most visited attractions in all of Africa. The twelve-acre botanical paradise combines vivid cobalt blue architecture with exotic plantings from around the world, creating an otherworldly sensory experience.',
    image: 'https://images.unsplash.com/photo-1585247226801-bc613c441316?w=800&q=80',
  },
  {
    name: 'Menara Gardens',
    city: 'Marrakech',
    address: 'Avenue de la Menara, Marrakech',
    hours: '8:00 AM - 5:00 PM daily',
    entryFee: 'Free (10 MAD for the pavilion)',
    bestTime: 'Late afternoon for golden light on the Atlas Mountains backdrop',
    special: 'A 12th-century Almohad garden centered around a massive reflecting pool (the Menara basin) with the snowcapped Atlas Mountains as a backdrop. The green-tiled pavilion reflected in the still water is one of Morocco most photographed scenes. Surrounded by ancient olive groves planted over 700 years ago.',
    description: 'One of the oldest gardens in Morocco, built by the Almohad dynasty in the 12th century. The vast reflecting pool was originally designed as an irrigation reservoir, surrounded by a peaceful olive grove that stretches for hundreds of acres.',
    image: 'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=800&q=80',
  },
  {
    name: 'Agdal Gardens',
    city: 'Marrakech',
    address: 'South of the Royal Palace, Marrakech',
    hours: 'Friday and Sunday only, 9:00 AM - 5:00 PM (closed when King is in residence)',
    entryFee: 'Free',
    bestTime: 'Friday mornings for peaceful walks among the orchards',
    special: 'A vast 400-hectare royal garden founded in 1157 by the Almohad Caliph Abd al-Mu\'min. Contains ancient orange, fig, pomegranate, apricot, and olive groves irrigated by an ingenious underground channel system (khettara) that carries snowmelt from the Atlas Mountains over 30 kilometers. The Dar al-Hana pavilion overlooks a massive ornamental basin.',
    description: 'The largest historic garden in Marrakech and one of the oldest surviving royal gardens in the Islamic world. This walled paradise of fruit orchards and reflecting pools has been in continuous cultivation for nearly nine centuries.',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
  },
  {
    name: 'Le Jardin Secret',
    city: 'Marrakech',
    address: '121 Rue Mouassine, Marrakech Medina',
    hours: '9:30 AM - 6:30 PM (February-September), 9:30 AM - 5:30 PM (October-January)',
    entryFee: '80 MAD garden, 120 MAD garden + tower',
    bestTime: 'Midday as a cool retreat from the medina heat; spring for jasmine blooms',
    special: 'A beautifully restored 16th-century palace garden in the heart of the medina, featuring two distinct gardens: an exotic garden with tropical plants from around the world and an Islamic garden with traditional geometric water channels representing the four rivers of paradise. The climbable tower offers panoramic views over the medina rooftops to the Atlas Mountains.',
    description: 'Hidden behind unassuming medina walls, this meticulously restored riad garden combines 400 years of Saadian-era architecture with a living showcase of Islamic garden philosophy. One of the best examples of traditional courtyard garden design in Morocco.',
    image: 'https://images.unsplash.com/photo-1570526904826-6690e3b98efa?w=800&q=80',
  },
  {
    name: 'Anima Garden',
    city: 'Marrakech',
    address: 'Douar Sbiti, Route de l\'Ourika, Km 27, Marrakech',
    hours: '9:00 AM - 6:00 PM daily (closed Tuesdays)',
    entryFee: '120 MAD (includes shuttle from meeting point)',
    bestTime: 'Morning for cool mountain air; April-June for peak flowering',
    special: 'A spectacular contemporary art garden in the foothills of the Atlas Mountains, created by Austrian artist Andre Heller. Features monumental sculptures, theatrical plantings, and immersive art installations woven through exotic gardens. The juxtaposition of massive cacti, tropical palms, and contemporary art against the Atlas backdrop is utterly unique. A free shuttle runs from a meeting point in Marrakech.',
    description: 'A two-hectare open-air museum and botanical garden located 27 km outside Marrakech in the Ourika Valley. Unlike traditional Moroccan gardens, Anima is a bold contemporary vision that blends botanical diversity with large-scale art installations.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
  },
  {
    name: 'Exotic Gardens of Bouknadel',
    city: 'Rabat',
    address: 'Route de Kenitra, Bouknadel (17 km north of Rabat)',
    hours: '9:00 AM - 6:30 PM daily',
    entryFee: '20 MAD',
    bestTime: 'Spring (March-May) for the most lush vegetation',
    special: 'Created by French horticulturist Marcel Francois in 1951, these lush tropical gardens contain over 1,500 plant species from five continents, organized by geographic origin: Polynesia, South America, the Caribbean, China, Japan, and sub-Saharan Africa. Bamboo forests, giant ferns, water lily ponds, and rare orchids create an astonishing diversity. A hidden gem rarely visited by tourists despite being one of Morocco finest botanical collections.',
    description: 'A remarkable tropical botanical garden on the road between Rabat and Kenitra. This hidden treasure houses one of the most diverse plant collections in North Africa, spread across themed gardens representing ecosystems from around the world.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
  },
  {
    name: 'Andalusian Gardens',
    city: 'Rabat',
    address: 'Kasbah des Oudaias, Rabat',
    hours: '8:00 AM - 6:00 PM daily',
    entryFee: 'Free',
    bestTime: 'Late afternoon for warm light on the whitewashed kasbah walls',
    special: 'A serene walled garden within the 12th-century Kasbah of the Udayas, built in the Andalusian style during the French Protectorate using traditional Moorish design principles. Orange and lemon trees, purple bougainvillea, fragrant jasmine, and cypress hedges surround geometric pathways and a central marble fountain. The views over the Bou Regreg River to Sale are magnificent.',
    description: 'A tranquil Andalusian-style garden perched within the ancient Kasbah of the Udayas overlooking the Atlantic. Though created in the early 20th century, the garden perfectly captures the spirit of the Moorish gardens of Al-Andalus.',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
  },
  {
    name: 'Jnan Sbil',
    city: 'Fes',
    address: 'Avenue Moulay Hassan, Fes (near Bab Boujeloud)',
    hours: '8:00 AM - 6:00 PM daily',
    entryFee: 'Free',
    bestTime: 'Morning for birdsong; spring for roses and iris blooms',
    special: 'The most beautiful public park in Fes, originally a royal garden created in the 18th century by Sultan Moulay Abdallah. Recently restored to its original glory with over 3,000 trees, formal flower beds, intricate water channels, ornamental lakes, and bamboo groves. The garden sits just outside the famous Bab Boujeloud (Blue Gate), making it the perfect retreat after exploring the intense Fes medina.',
    description: 'A seven-and-a-half-hectare historic royal garden that has been lovingly restored as a public park. Jnan Sbil is an oasis of calm next to the ancient medina, offering shaded walkways, flowering gardens, and the gentle sound of flowing water.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
  },
  {
    name: 'Riad Gardens of Fes',
    city: 'Fes',
    address: 'Throughout the Fes el-Bali medina',
    hours: 'Varies by riad (typically open to guests 24/7; some allow visitors)',
    entryFee: 'Free for guests; some riads charge 50-100 MAD for non-guest visits',
    bestTime: 'Midday, when sunlight floods the courtyard from directly above',
    special: 'The courtyard gardens of Fes riads are among the most intimate and exquisite gardens in Morocco. Enclosed by ornate zellige-tiled walls, carved stucco, and painted cedar balconies, these miniature paradise gardens typically feature a central marble fountain surrounded by citrus trees, jasmine vines, and potted geraniums. The interplay of water, tile, light, and greenery within these walled courtyards perfectly embodies Islamic garden philosophy.',
    description: 'Not a single garden but a living tradition of courtyard garden design found throughout the ancient medina. Each riad (traditional townhouse) contains a private garden courtyard that follows centuries-old Islamic principles of enclosed paradise.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?w=800&q=80',
  },
  {
    name: 'Royal Stables Gardens',
    city: 'Meknes',
    address: 'Heri es-Souani, south of the Royal Palace, Meknes',
    hours: '9:00 AM - 6:00 PM daily',
    entryFee: '20 MAD',
    bestTime: 'Morning for the best light on the monumental arches',
    special: 'The gardens and grounds surrounding Sultan Moulay Ismail\'s legendary Royal Stables (Heri es-Souani), once home to 12,000 horses. The massive granary building with its forest of arches and vaults opens onto landscaped gardens, ornamental basins, and the vast Agdal reservoir. The scale of the 17th-century engineering is breathtaking, combining monumental architecture with sophisticated hydraulic garden design.',
    description: 'The gardens surrounding the colossal granary and stables complex built by Sultan Moulay Ismail in the 17th century. This UNESCO World Heritage site combines monumental Alaouite architecture with royal garden landscapes.',
    image: 'https://images.unsplash.com/photo-1570197571499-166b36435b75?w=800&q=80',
  },
  {
    name: 'Agdal Basin',
    city: 'Meknes',
    address: 'Near Heri es-Souani, Meknes',
    hours: '8:00 AM - 6:00 PM daily',
    entryFee: 'Free',
    bestTime: 'Sunset for reflections on the water and views of the old city',
    special: 'A monumental artificial lake built by Sultan Moulay Ismail as a reservoir for the royal palace grounds and surrounding gardens. The four-hectare basin is bordered by olive trees and garden promenades, offering panoramic views over Meknes. Originally fed by a 25-kilometer canal, the basin was a masterpiece of 17th-century hydraulic engineering. Today it serves as a peaceful public park popular with locals.',
    description: 'A vast ornamental reservoir and garden complex built as part of Sultan Moulay Ismail\'s grand vision for his imperial capital. The basin demonstrates the centrality of water engineering to Moroccan royal garden traditions.',
    image: 'https://images.unsplash.com/photo-1562501748-ac39c3b0fb8f?w=800&q=80',
  },
  {
    name: 'Argan Groves',
    city: 'Essaouira',
    address: 'Surrounding countryside, 5-20 km from Essaouira',
    hours: 'Open countryside (cooperatives typically 9:00 AM - 5:00 PM)',
    entryFee: 'Free (guided tours of cooperatives from 50 MAD)',
    bestTime: 'Spring (April-May) when wildflowers bloom among the trees',
    special: 'The UNESCO-protected argan biosphere reserve surrounding Essaouira is a unique living landscape where endemic argan trees (found nowhere else on earth) create a distinctive open woodland. Famous for the sight of goats climbing the gnarled argan branches to eat the fruit. Women\'s cooperatives in the groves produce argan oil using centuries-old stone-grinding methods. The twisted, ancient trees against the Atlantic breeze create an ethereal landscape.',
    description: 'A UNESCO Biosphere Reserve of endemic argan woodland surrounding Essaouira. These ancient groves are not formal gardens but a living cultural landscape where traditional agriculture, biodiversity, and women\'s cooperatives intersect.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'Diabat Gardens',
    city: 'Essaouira',
    address: 'Village of Diabat, 5 km south of Essaouira',
    hours: 'Open access (village gardens are private but surrounding landscape is accessible)',
    entryFee: 'Free',
    bestTime: 'Late afternoon when the Atlantic light is golden and soft',
    special: 'The windswept village of Diabat, famously visited by Jimi Hendrix in 1969, sits among sand dunes, ruined 18th-century palace gardens, and small irrigated plots where locals grow vegetables and herbs using traditional methods. The ruins of the Dar Sultan palace and its once-magnificent gardens overlook the Atlantic, with wild fig trees and bougainvillea reclaiming the crumbling walls. The surrounding landscape of dune gardens and ocean views is hauntingly beautiful.',
    description: 'A village of wild beauty south of Essaouira where ruined palace gardens, sand dunes, and traditional small-scale agriculture create a landscape that blurs the line between cultivated garden and untamed nature.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    name: 'Fint Oasis',
    city: 'Ouarzazate',
    address: '10 km south of Ouarzazate, Fint Valley',
    hours: 'Open access (best to hire a local guide at the village)',
    entryFee: 'Free (tip for local guide recommended, 50-100 MAD)',
    bestTime: 'Morning before the midday heat; October-April for comfortable temperatures',
    special: 'A stunning hidden oasis in a narrow red-rock canyon just outside Ouarzazate. Lush palm groves, irrigated terraced gardens, and a meandering river create an impossibly green paradise surrounded by the barren desert landscape. The contrast between the verdant oasis and the stark red cliffs is extraordinary. Used as a filming location for numerous Hollywood productions including Lawrence of Arabia. The traditional Berber village within the oasis maintains an ancient irrigation system.',
    description: 'A dramatic desert oasis hidden in a red-rock canyon, where traditional Berber irrigation creates a pocket of lush greenery in the midst of arid pre-Saharan landscape. One of the most photogenic spots in southern Morocco.',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
  },
  {
    name: 'Skoura Palm Grove',
    city: 'Ouarzazate',
    address: 'Skoura, 42 km east of Ouarzazate on the N10',
    hours: 'Open access (guided tours available through local kasbahs)',
    entryFee: 'Free (guided tours from 100-200 MAD)',
    bestTime: 'Early morning or late afternoon; spring for rose blooms',
    special: 'One of Morocco\'s largest and most beautiful palm groves (palmeries), containing over 700,000 date palms along with ancient kasbahs, rose gardens, olive groves, and irrigated vegetable plots. The 17th-century Kasbah Amridil, one of the best-preserved kasbahs in Morocco, sits within the grove. The combination of towering palms, crumbling earthen kasbahs, rose hedges, and snow-capped Atlas peaks in the distance creates a landscape of extraordinary beauty.',
    description: 'A vast and ancient palm oasis stretching along the Valley of Roses. Skoura\'s palmery combines date palm agriculture, rose cultivation, and historic kasbah architecture in a landscape that has remained essentially unchanged for centuries.',
    image: 'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=800&q=80',
  },
];

/* ═══════════════════════════════════════════════════════════════
   GARDEN DESIGN ELEMENTS DATA
   ═══════════════════════════════════════════════════════════════ */

const designElements = [
  {
    name: 'Zellige Tilework',
    description: 'Hand-cut geometric mosaic tiles in vivid blues, greens, and golds line fountains, pathways, and garden walls. The mathematical patterns represent infinity and the divine order of creation.',
  },
  {
    name: 'Tadelakt Surfaces',
    description: 'Polished waterproof lime plaster used on fountains, basins, and garden walls. Its smooth, luminous surface catches light and creates a sense of flowing water even on dry surfaces.',
  },
  {
    name: 'Central Fountains',
    description: 'The heart of every Moroccan garden. Running water symbolizes life and paradise in Islamic tradition. Marble or zellige fountains provide cooling sounds and attract songbirds.',
  },
  {
    name: 'Four-Part Layout (Chahar Bagh)',
    description: 'The classic Islamic garden is divided into four quadrants by water channels, representing the four rivers of paradise described in the Quran: water, milk, wine, and honey.',
  },
  {
    name: 'Orange and Citrus Trees',
    description: 'Bitter orange trees (naranj) are the signature planting of Moroccan gardens. Their fragrant blossoms perfume the air in spring, while the bright fruit provides winter color against green foliage.',
  },
  {
    name: 'Bougainvillea',
    description: 'The cascading magenta, purple, and coral blooms of bougainvillea drape over garden walls and pergolas throughout Morocco, creating dramatic color against whitewashed or blue-painted surfaces.',
  },
  {
    name: 'Riad Courtyard Geometry',
    description: 'Enclosed courtyards use precise proportions to frame the sky, channel breezes, and create a microclimate. The ratio of courtyard width to surrounding wall height is carefully calculated for optimal shade and light.',
  },
  {
    name: 'Water Channels (Seguias)',
    description: 'Narrow channels carry water from central fountains to the four corners of the garden. Their gentle murmur provides a cooling acoustic backdrop and symbolizes the abundance of paradise.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SPRING BLOOM CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const bloomCalendar = [
  { month: 'January-February', blooms: 'Almond blossoms (Tafraoute, Tizi n\'Test), early wildflowers, mimosa', conditions: 'Cool mornings, mild afternoons. Gardens are green from winter rain.' },
  { month: 'March', blooms: 'Orange and lemon blossoms, irises, wisteria, jasmine begins', conditions: 'Perfect garden weather. The medina air fills with orange blossom fragrance.' },
  { month: 'April', blooms: 'Roses (especially the Valley of Roses near Skoura), bougainvillea, jacaranda, oleander', conditions: 'Peak season. The Kelaat M\'Gouna Rose Festival typically falls in late April to mid-May.' },
  { month: 'May', blooms: 'Bougainvillea at peak, jasmine, lavender in Atlas foothills, hibiscus', conditions: 'Warm but not yet hot. Last comfortable month before summer heat in southern Morocco.' },
  { month: 'June-August', blooms: 'Oleander, hibiscus, lantana, plumbago. Garden cacti flower in oases.', conditions: 'Hot in interior cities. Visit gardens in early morning or late afternoon only.' },
  { month: 'September-October', blooms: 'Second bloom of roses, late bougainvillea, pomegranate fruit ripens', conditions: 'Temperatures moderate. Date palms fruit in October in the south.' },
  { month: 'November-December', blooms: 'Citrus fruit colors, poinsettia, winter jasmine, green winter foliage', conditions: 'Mild. Gardens are quieter with fewer tourists. Excellent visiting conditions.' },
];

/* ═══════════════════════════════════════════════════════════════
   PHOTOGRAPHY TIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  {
    title: 'Golden Hour is Everything',
    tip: 'Moroccan gardens are most photogenic in the first and last hours of sunlight. The warm golden light transforms zellige tiles, water reflections, and foliage colors. Arrive at garden opening time for the best light and smallest crowds.',
  },
  {
    title: 'Capture Water Reflections',
    tip: 'Moroccan gardens are designed around water. Get low to capture reflections in basins, fountains, and channels. A polarizing filter helps control glare and deepen the blue of tiled basins. Perfectly still mornings produce the best mirror reflections.',
  },
  {
    title: 'Frame Through Archways',
    tip: 'Use the horseshoe arches, carved window screens (mashrabiya), and doorways of garden architecture as natural frames for your compositions. These create depth and a sense of discovery in your images.',
  },
  {
    title: 'Focus on Details',
    tip: 'Some of the most compelling garden photographs are close-ups: a single orange against zellige tiles, water droplets on jasmine petals, the patina of aged brass fountain heads, or sunlight filtering through carved screens.',
  },
  {
    title: 'Use the Vertical Format',
    tip: 'Tall palm trees, soaring arches, cascading bougainvillea, and narrow riad courtyards are natural subjects for vertical (portrait) compositions. Do not default to horizontal for every shot.',
  },
  {
    title: 'Include People for Scale',
    tip: 'A figure walking through a palm grove, sitting by a fountain, or framed in an archway adds human scale and narrative to garden photographs. Ask permission before photographing individuals.',
  },
  {
    title: 'Respect Photography Rules',
    tip: 'Some gardens restrict tripods or professional equipment. Mosques and their gardens are generally off-limits to non-Muslim visitors. Always check signage and ask before using flash or drones. Drone photography is heavily restricted in Morocco.',
  },
  {
    title: 'Shoot the Color Contrasts',
    tip: 'Moroccan gardens thrive on bold color combinations: cobalt blue against terracotta, magenta bougainvillea on white walls, green palms against red earth. Compose to emphasize these contrasts for maximum visual impact.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   QUICK STATS
   ═══════════════════════════════════════════════════════════════ */

const quickStats = [
  { icon: <Flower2 className="w-5 h-5" />, label: 'Gardens', value: '15 Featured', detail: 'Across 6 cities' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Best Season', value: 'March-May', detail: 'Spring bloom' },
  { icon: <Droplets className="w-5 h-5" />, label: 'Design Heart', value: 'Water', detail: 'Sacred element' },
  { icon: <Star className="w-5 h-5" />, label: 'Top Garden', value: 'Jardin Majorelle', detail: 'Most visited' },
  { icon: <DollarSign className="w-5 h-5" />, label: 'Entry Fees', value: 'Free - 150 MAD', detail: 'Many are free' },
  { icon: <Camera className="w-5 h-5" />, label: 'Photography', value: 'Permitted', detail: 'Most gardens' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE (Server Component)
   ═══════════════════════════════════════════════════════════════ */

export default function GardensPage() {
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
          <li className="text-text-primary font-medium">Gardens</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585247226801-bc613c441316?w=1600&q=80"
            alt="Jardin Majorelle vibrant cobalt blue walls surrounded by lush tropical plants in Marrakech"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Paradise on Earth
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Gardens Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the cobalt splendor of Jardin Majorelle to hidden desert oases, discover Morocco&apos;s most
              enchanting gardens. A thousand-year tradition of paradise gardens, water engineering, and botanical
              beauty awaits.
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

      {/* The Art of the Moroccan Garden */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Flower2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Art of the Moroccan Garden
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The Moroccan garden is far more than a collection of plants. It is a philosophical statement, a spiritual
              practice, and a masterwork of environmental engineering refined over a thousand years. Rooted in the
              Islamic concept of <em>Janna</em> (paradise), the traditional Moroccan garden is designed as an earthly
              reflection of the gardens described in the Quran: enclosed, abundant, fragrant, and centered on the life-giving
              presence of water.
            </p>
            <p>
              Water is the sacred element at the heart of every Moroccan garden. In a land where much of the landscape
              is arid, the ability to channel, store, and display water was both a practical triumph and a spiritual act.
              The ancient <em>khettara</em> system of underground channels, some stretching over 30 kilometers from
              the Atlas Mountains, delivered snowmelt to royal gardens in Marrakech centuries before modern plumbing
              existed. Fountains, basins, and narrow water channels (<em>seguias</em>) are not decorative afterthoughts
              but the very skeleton around which the garden is built.
            </p>
            <p>
              Geometric design governs every aspect of the Moroccan garden. The <em>chahar bagh</em> (four-part garden)
              layout, inherited from Persian and Mughal traditions, divides the space into four quadrants using
              intersecting water channels. This geometry extends to the zellige tilework that adorns fountains and walls,
              the precise clipping of hedges, and the symmetrical arrangement of citrus trees and palm plantings. The
              mathematical patterns are not merely aesthetic: they represent the infinite nature of creation and the
              divine order underlying the natural world.
            </p>
          </div>
        </div>
      </section>

      {/* Top 15 Gardens to Visit */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <TreePine className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top 15 Gardens to Visit
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From imperial palace gardens to hidden desert oases, these are Morocco&apos;s most beautiful and rewarding
              green spaces.
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
                    alt={`${garden.name} in ${garden.city}, Morocco`}
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
                      <span className="font-semibold text-[var(--color-primary)]">What makes it special:</span>{' '}
                      {garden.special}
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

      {/* Garden Design Elements */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Garden Design Elements
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The vocabulary of the Moroccan garden: water, tile, stone, and plant woven together in geometric harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designElements.map((element) => (
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

      {/* Best Season for Gardens - Spring Bloom Calendar */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Season for Gardens
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco enjoys a long blooming season. Here is what to expect month by month across the country&apos;s gardens.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {bloomCalendar.map((season) => (
              <div key={season.month} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold text-sm">
                      <Sun className="w-4 h-4" />
                      {season.month}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-primary)] font-semibold mb-1">
                      {season.blooms}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {season.conditions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Tips for Gardens */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Photography Tips for Gardens
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Capture the magic of Moroccan gardens with these expert photography techniques.
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
                      {tip.tip}
                    </p>
                  </div>
                </div>
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
            From ancient architecture to vibrant crafts, there is always more to discover in the kingdom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/architecture" className="btn-primary">
              Moroccan Architecture <ArrowRight className="w-4 h-4" />
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

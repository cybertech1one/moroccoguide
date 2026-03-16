import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wine,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Star,
  Grape,
  Sun,
  Mountain,
  Thermometer,
  Calendar,
  ArrowRight,
  Globe,
  BookOpen,
  Heart,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Info,
  Camera,
  UtensilsCrossed,
  Phone,
  ShieldCheck,
  Award,
  Leaf,
  History,
  Map,
  Navigation,
  Droplets,
  CloudSun,
  TrendingUp,
  CircleDollarSign,
  Lightbulb,
  PartyPopper,
  GlassWater,
  Route,
  Compass,
  Building2,
  TreePine,
  Landmark,
  Flame,
} from 'lucide-react';

/* =================================================================
   SEO METADATA
   ================================================================= */

export const metadata: Metadata = {
  title: 'Morocco Wine Tourism | Top Wineries, Wine Regions, Tastings & Complete Guide',
  description:
    'The definitive guide to wine tourism in Morocco. Explore top wine regions including Meknes, Boulaouane, and the Atlas foothills. Visit renowned wineries like Domaine de la Zouina, Chateau Roslane, and Val d\'Argan. Discover Moroccan Syrah, Cabernet Sauvignon, wine-food pairings, festivals, tasting tours, and practical tips for wine lovers.',
  keywords: [
    'morocco wine tourism',
    'moroccan wine',
    'meknes wine region',
    'domaine de la zouina',
    'chateau roslane',
    'val d argan',
    'les celliers de meknes',
    'volubilia wine',
    'moroccan syrah',
    'morocco wine tasting',
    'boulaouane wine',
    'guerrouane wine',
    'morocco wine tour',
    'moroccan winery visit',
    'morocco wine regions',
    'moroccan cabernet sauvignon',
    'morocco wine and food pairing',
    'morocco wine festival',
    'moroccan grenache',
    'atlas foothills wine',
    'benslimane wine',
    'morocco vineyard tour',
    'moroccan wine history',
    'roman wine morocco',
    'french wine influence morocco',
    'best moroccan wines',
    'wine tasting meknes',
    'morocco wine guide 2026',
  ],
  openGraph: {
    title: 'Morocco Wine Tourism | Top Wineries, Wine Regions & Complete Guide',
    description:
      'Discover Morocco\'s flourishing wine scene. Visit world-class wineries in Meknes and the Atlas foothills, taste award-winning Syrah and Cabernet Sauvignon, and explore centuries of winemaking heritage from Roman Volubilis to modern boutique vineyards.',
    url: 'https://citytoursmorocco.com/wine',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Vineyard rows with grapevines stretching toward mountains in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Wine Tourism | Top Wineries & Complete Guide',
    description:
      'Explore Morocco\'s wine regions, visit top wineries, and taste award-winning Moroccan wines. Your complete wine tourism guide.',
    images: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&h=630&fit=crop',
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/wine' },
};

/* =================================================================
   JSON-LD STRUCTURED DATA
   ================================================================= */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Morocco Wine Tourism',
  description:
    'Comprehensive guide to wine tourism in Morocco, covering wine regions, wineries, tastings, tours, and practical travel tips.',
  url: 'https://citytoursmorocco.com/wine',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA',
    addressRegion: 'Meknes-Tafilalet',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.8935,
    longitude: -5.5473,
  },
  touristType: ['Wine enthusiast', 'Food lover', 'Cultural traveler'],
  availableLanguage: ['English', 'French', 'Arabic'],
  isAccessibleForFree: false,
  sameAs: [
    'https://en.wikipedia.org/wiki/Moroccan_wine',
  ],
};

/* =================================================================
   DATA: WINE REGIONS
   ================================================================= */

const wineRegions = [
  {
    name: 'Meknes-Fes (Saiss Plateau)',
    arabicName: 'مكناس',
    description:
      'The undisputed heart of Moroccan winemaking. The Saiss Plateau surrounding Meknes sits at 500-600 meters elevation with rich alluvial soils, continental climate, and significant diurnal temperature variation that produces wines of remarkable depth and complexity. Home to over 60% of Morocco\'s total wine production, the region draws natural parallels to the Rhone Valley and parts of southern Spain.',
    keyFacts: {
      elevation: '500-600m',
      soil: 'Clay-limestone, alluvial',
      climate: 'Semi-arid continental',
      grapes: 'Syrah, Cabernet Sauvignon, Merlot, Grenache',
      production: '60% of national output',
    },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop',
    notableWineries: ['Les Celliers de Meknes', 'Chateau Roslane', 'Domaine de la Zouina', 'Volubilia'],
  },
  {
    name: 'Guerrouane',
    arabicName: 'غروان',
    description:
      'Morocco\'s first Appellation d\'Origine Garantie (AOG), established to protect and promote the quality of wines from this distinctive terroir between Meknes and Fes. The Guerrouane appellation covers rolling hills with calcareous clay soils and benefits from cooling Atlantic breezes that moderate the summer heat. Wines here tend toward elegance rather than power, with particularly impressive rose and lighter red wines.',
    keyFacts: {
      elevation: '400-550m',
      soil: 'Calcareous clay, limestone',
      climate: 'Mediterranean-continental',
      grapes: 'Cinsault, Carignan, Grenache, Cabernet Sauvignon',
      production: 'First AOG designation in Morocco',
    },
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=500&fit=crop',
    notableWineries: ['Domaine Brahim Zniber', 'Vignobles de Guerrouane'],
  },
  {
    name: 'Boulaouane',
    arabicName: 'بولعوان',
    description:
      'Located along the Oum Er-Rbia River in the Doukkala region south of Casablanca, Boulaouane is one of Morocco\'s oldest wine-producing areas. The region\'s proximity to the Atlantic coast provides natural humidity regulation and cooling sea breezes. The gris wine tradition here dates back centuries, and the famous Boulaouane Gris -- a pale, dry rose -- remains one of Morocco\'s most recognizable and widely exported wines. The ancient kasbah overlooking the river adds historical romance to any wine touring visit.',
    keyFacts: {
      elevation: '100-200m',
      soil: 'Sandy loam, alluvial',
      climate: 'Atlantic maritime',
      grapes: 'Cinsault, Grenache, Carignan',
      production: 'Famous for gris (rose) wines',
    },
    image: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=800&h=500&fit=crop',
    notableWineries: ['Boulaouane Estate'],
  },
  {
    name: 'Atlas Foothills (Beni M\'Tir & Zerhoun)',
    arabicName: 'سفوح الأطلس',
    description:
      'The dramatic landscapes where the Middle Atlas mountains begin their ascent provide some of Morocco\'s most exciting emerging wine terroirs. Higher elevations mean cooler nights and longer growing seasons, producing grapes with intense aromatics and balanced acidity. The volcanic and schist soils around Beni M\'Tir and the limestone ridges near Zerhoun (close to the Roman ruins of Volubilis) create distinct mineral-driven wines that are attracting international attention from sommeliers and critics.',
    keyFacts: {
      elevation: '600-900m',
      soil: 'Volcanic, schist, limestone',
      climate: 'Continental with mountain influence',
      grapes: 'Syrah, Tempranillo, Viognier, Chardonnay',
      production: 'Premium boutique wines',
    },
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    notableWineries: ['Domaine de la Zouina', 'Volubilia'],
  },
  {
    name: 'Benslimane-Zenata',
    arabicName: 'بن سليمان',
    description:
      'Situated between Casablanca and Rabat along the Atlantic coastal plain, the Benslimane-Zenata region benefits from the moderating influence of the ocean. The sandy-clay soils and consistent maritime breezes produce fresh, fruit-forward wines with bright acidity. This region has historically focused on large-volume production, but a new generation of winemakers is pushing toward premium quality. Its proximity to Casablanca and Rabat makes it the most accessible wine region for visitors based in Morocco\'s major cities.',
    keyFacts: {
      elevation: '100-300m',
      soil: 'Sandy clay, coastal alluvial',
      climate: 'Atlantic maritime',
      grapes: 'Cabernet Sauvignon, Merlot, Syrah, Sauvignon Blanc',
      production: 'Accessible from Casablanca and Rabat',
    },
    image: 'https://images.unsplash.com/photo-1559738116-2e8e7b023db4?w=800&h=500&fit=crop',
    notableWineries: ['Thalvin', 'Les Deux Domaines'],
  },
];

/* =================================================================
   DATA: TOP WINERIES
   ================================================================= */

const topWineries = [
  {
    rank: 1,
    name: 'Domaine de la Zouina',
    region: 'Meknes / Atlas Foothills',
    founded: 2001,
    description:
      'A partnership between Moroccan and French winemaking families, Domaine de la Zouina has rapidly become Morocco\'s most critically acclaimed boutique winery. Spread across 80 hectares of vines at 600 meters elevation on the Saiss Plateau, the estate benefits from the same terroir that drew Roman winemakers two millennia ago. French winemaker Christophe Doubre brings Bordeaux and Rhone expertise, while the Moroccan team contributes intimate knowledge of local soil and climate. Their flagship wines consistently earn medals at international competitions.',
    signatureWines: [
      { name: 'Volubilia Red', grape: 'Syrah-Cabernet Sauvignon blend', notes: 'Dark fruit, leather, spice, long finish' },
      { name: 'Epicuria White', grape: 'Viognier-Chardonnay', notes: 'Stone fruit, floral, elegant minerality' },
      { name: 'Les Aureliens Rose', grape: 'Grenache-Cinsault', notes: 'Provence-style, dry, wild strawberry' },
    ],
    visiting: {
      tours: 'Daily vineyard and cellar tours with tasting',
      duration: '1.5-2 hours',
      price: '200-400 MAD per person',
      booking: 'Advance reservation recommended',
      restaurant: 'On-site restaurant with wine pairing menu',
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=500&fit=crop',
  },
  {
    rank: 2,
    name: 'Chateau Roslane',
    region: 'Meknes (Guerrouane AOG)',
    founded: 1994,
    description:
      'The crown jewel of Les Celliers de Meknes, Chateau Roslane is Morocco\'s answer to the grand chateaux of Bordeaux. The estate sprawls across 2,000 hectares of prime Guerrouane terroir, though only the finest parcels are selected for the Chateau Roslane label. The Bordeaux-trained winemaking team employs modern French techniques while respecting the unique character of Moroccan terroir. Barrel aging in French oak barrels for 12-18 months produces structured, age-worthy reds that have won gold medals at the Concours Mondial de Bruxelles and the Vinalies Internationales.',
    signatureWines: [
      { name: 'Chateau Roslane Premier Cru', grape: 'Cabernet Sauvignon-Merlot-Syrah', notes: 'Blackcurrant, cedar, vanilla, velvety tannins' },
      { name: 'Chateau Roslane AOG Rouge', grape: 'Cabernet Sauvignon-Syrah', notes: 'Plum, black pepper, garrigue herbs' },
      { name: 'Chateau Roslane Blanc', grape: 'Chardonnay-Sauvignon Blanc', notes: 'Citrus, green apple, crisp minerality' },
    ],
    visiting: {
      tours: 'Guided estate tours with premium tasting flight',
      duration: '2-3 hours',
      price: '300-600 MAD per person',
      booking: 'Required 48 hours in advance',
      restaurant: 'Fine dining restaurant with seasonal Moroccan-French menu',
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=800&h=500&fit=crop',
  },
  {
    rank: 3,
    name: 'Val d\'Argan',
    region: 'Essaouira (Atlantic Coast)',
    founded: 1994,
    description:
      'Morocco\'s most westerly winery and one of the most unexpected wine destinations in the country. Founded by Charles Melia, a French-Moroccan winemaker who saw potential in the Essaouira hinterland, Val d\'Argan\'s 35 hectares of vines sit just 20 kilometers inland from the Atlantic coast. The maritime influence creates a unique microclimate with cool, foggy mornings and warm afternoons -- conditions that extend the growing season and develop intense aromatics in the grapes. The combination of argan tree-dotted landscapes, Atlantic breezes, and Berber culture makes visiting Val d\'Argan a distinctly Moroccan wine experience unlike anything in Europe.',
    signatureWines: [
      { name: 'Le Val d\'Argan Rouge', grape: 'Syrah-Marselan-Grenache', notes: 'Red fruit, herbs, Atlantic salinity, medium body' },
      { name: 'Le Val d\'Argan Blanc', grape: 'Vermentino-Clairette', notes: 'Sea breeze, white flowers, citrus zest' },
      { name: 'Gazelle de Mogador Rose', grape: 'Cinsault-Grenache', notes: 'Pale salmon, dry, melon and peach' },
    ],
    visiting: {
      tours: 'Vineyard walks, cellar tour, and coastal tasting',
      duration: '1.5-2 hours',
      price: '150-350 MAD per person',
      booking: 'Walk-ins possible but reservation preferred',
      restaurant: 'Terrace bistro with seafood and wine pairings',
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=500&fit=crop',
  },
  {
    rank: 4,
    name: 'Les Celliers de Meknes',
    region: 'Meknes',
    founded: 1964,
    description:
      'The largest and most historic wine producer in Morocco, Les Celliers de Meknes accounts for approximately 85% of the country\'s total wine output. Founded by Brahim Zniber, the company has grown from a modest post-independence venture into a wine empire encompassing multiple estates, brands, and appellations. While the volume brands (Guerrouane, Beau Vallon, Amazir) provide accessible everyday drinking, the premium tiers -- particularly Chateau Roslane and the single-vineyard selections -- compete seriously at international level. The main production facility in Meknes is one of the largest and most modern in Africa.',
    signatureWines: [
      { name: 'Beauvallon Rouge', grape: 'Carignan-Cinsault-Grenache', notes: 'Approachable, cherry, soft tannins, everyday wine' },
      { name: 'Amazir', grape: 'Cabernet Sauvignon-Merlot', notes: 'Berber-inspired label, medium body, dark fruit' },
      { name: 'Guerrouane AOG', grape: 'Regional blend', notes: 'Terroir-driven, earthy, balanced' },
    ],
    visiting: {
      tours: 'Production facility tour and multi-brand tasting',
      duration: '2-3 hours',
      price: '150-300 MAD per person',
      booking: 'Available Monday-Saturday, reservation required',
      restaurant: 'Tasting room with charcuterie and cheese boards',
    },
    rating: 4,
    image: 'https://images.unsplash.com/photo-1566903451935-7e8835ed3e97?w=800&h=500&fit=crop',
  },
  {
    rank: 5,
    name: 'Volubilia',
    region: 'Meknes (Near Volubilis Ruins)',
    founded: 2003,
    description:
      'Named after the ancient Roman city of Volubilis -- where wine was produced over 2,000 years ago -- this estate beautifully connects Morocco\'s modern wine renaissance with its deep viticultural roots. Located just minutes from the UNESCO World Heritage Roman ruins, Volubilia\'s 70 hectares of vines grow in the same soils that nourished Roman vineyards. The winemaking philosophy blends traditional methods with modern precision: hand harvesting, gravity-fed processing, and aging in a combination of French and American oak. The estate\'s visitor center includes a small museum exploring the Roman wine heritage of the region.',
    signatureWines: [
      { name: 'Volubilia Reserve', grape: 'Syrah-Cabernet Sauvignon', notes: 'Complex, dark fruit, tobacco, oak spice' },
      { name: 'Volubilia Blanc', grape: 'Sauvignon Blanc-Viognier', notes: 'Tropical, herbaceous, refreshing acidity' },
      { name: 'Volubilia Gris', grape: 'Grenache-Cinsault', notes: 'Classic Moroccan gris, copper-tinted, bone dry' },
    ],
    visiting: {
      tours: 'Combined winery and Roman ruins excursion',
      duration: '3-4 hours (with Volubilis ruins)',
      price: '250-500 MAD per person',
      booking: 'Advance booking required, minimum 2 persons',
      restaurant: 'Garden terrace with Roman-inspired Moroccan menu',
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
  },
];

/* =================================================================
   DATA: GRAPE VARIETIES
   ================================================================= */

const grapeVarieties = [
  {
    name: 'Syrah',
    origin: 'Rhone Valley, France',
    color: 'Red',
    description:
      'Morocco\'s star red grape. The warm days and cool nights of the Meknes plateau develop intense dark fruit flavors with the peppery spice that Syrah is known for. Moroccan Syrah tends to be fuller-bodied than Northern Rhone examples, closer to Australian Shiraz in richness but with a distinctly Mediterranean aromatic profile of garrigue herbs, leather, and dried violet.',
    flavorProfile: ['Blackberry', 'Black pepper', 'Leather', 'Violet', 'Smoke'],
    bestWith: 'Lamb tagine with prunes, mechoui, grilled merguez',
    acreage: 'Expanding rapidly -- now Morocco\'s most-planted premium red variety',
  },
  {
    name: 'Cabernet Sauvignon',
    origin: 'Bordeaux, France',
    color: 'Red',
    description:
      'The king of Bordeaux thrives in Morocco\'s warm continental climate. Moroccan Cabernet Sauvignon tends toward ripe, concentrated expressions with softer tannins than classic Bordeaux, thanks to the abundant sunshine. The best examples, particularly from Chateau Roslane and the Guerrouane AOG region, show impressive structure and aging potential, developing complex secondary aromas of cedar, tobacco, and truffle after several years in bottle.',
    flavorProfile: ['Blackcurrant', 'Cedar', 'Tobacco', 'Green pepper', 'Vanilla'],
    bestWith: 'Tangia marrakchia, beef kefta, aged cheese',
    acreage: 'Well established across all major regions',
  },
  {
    name: 'Merlot',
    origin: 'Bordeaux, France',
    color: 'Red',
    description:
      'Often blended with Cabernet Sauvignon to add softness and plummy fruit, Merlot also appears as a varietal wine from several Moroccan producers. The grape performs particularly well in the slightly warmer, lower-elevation sites where it develops generous fruit without losing its characteristic velvet texture. Moroccan Merlot offers excellent value and approachability, making it a popular choice in restaurants and hotels.',
    flavorProfile: ['Plum', 'Cherry', 'Chocolate', 'Herbs', 'Vanilla'],
    bestWith: 'Chicken pastilla, vegetable couscous, aged Gouda',
    acreage: 'Significant plantings across Meknes and Benslimane',
  },
  {
    name: 'Grenache',
    origin: 'Aragon, Spain',
    color: 'Red',
    description:
      'Historically one of Morocco\'s most important grape varieties, Grenache is particularly suited to the hot, dry conditions and is the backbone of many traditional Moroccan wines and the famous gris rose style. It brings warmth, ripe red fruit, and generous body to blends. As a varietal, Moroccan Grenache delivers sun-drenched raspberry and strawberry flavors with subtle white pepper and herbal notes.',
    flavorProfile: ['Raspberry', 'Strawberry', 'White pepper', 'Herbs', 'Orange peel'],
    bestWith: 'Moroccan salads, bastilla, grilled sardines',
    acreage: 'Widely planted, essential for rose production',
  },
  {
    name: 'Cinsault',
    origin: 'Southern France',
    color: 'Red',
    description:
      'The unsung hero of Moroccan winemaking. Cinsault has been grown in Morocco since the French protectorate era and is perfectly adapted to the climate. It produces the light, fresh, easy-drinking wines and gris roses that Moroccans consume in the greatest volume. While rarely celebrated as a prestige grape, Cinsault is indispensable in Moroccan winemaking, providing the aromatic lift and fresh acidity that balance the richer varieties in blends.',
    flavorProfile: ['Red cherry', 'Peach', 'Rose petal', 'Almond', 'Fresh herbs'],
    bestWith: 'Seafood, zaalouk, briouats, light appetizers',
    acreage: 'Morocco\'s most widely planted grape variety',
  },
];

/* =================================================================
   DATA: WINE & FOOD PAIRINGS
   ================================================================= */

const winePairings = [
  {
    dish: 'Lamb Tagine with Prunes & Almonds',
    wine: 'Moroccan Syrah or Syrah-Grenache blend',
    why: 'The dark fruit and spice of Syrah mirrors the sweetness of the prunes while the tannins cut through the rich lamb. The peppery finish echoes the warming spices of the tagine.',
    restaurant: 'Al Fassia, Marrakech',
  },
  {
    dish: 'Chicken Pastilla (B\'stilla)',
    wine: 'Chateau Roslane Blanc or a Moroccan Chardonnay',
    why: 'The buttery richness of Chardonnay complements the flaky warqa pastry, while the wine\'s acidity cuts through the layers of almonds and cinnamon-sugar. The subtle sweetness of pastilla needs a wine that won\'t overwhelm the delicate balance.',
    restaurant: 'Dar Hatim, Fes',
  },
  {
    dish: 'Grilled Sardines with Chermoula',
    wine: 'Val d\'Argan Blanc or Moroccan Sauvignon Blanc',
    why: 'The herbaceous, citrus-driven white wine mirrors the cilantro and lemon in chermoula. The wine\'s acidity lifts the oily richness of the sardines, and if from Essaouira, you get a poetic terroir match -- coastal fish with coastal wine.',
    restaurant: 'Port de peche, Essaouira',
  },
  {
    dish: 'Mechoui (Slow-Roasted Whole Lamb)',
    wine: 'Volubilia Reserve or Cabernet Sauvignon-Merlot blend',
    why: 'Mechoui\'s intense, smoky-tender lamb needs a wine of equal stature. The structured tannins and dark fruit of a premium Moroccan red stand up to the richness while the oak-derived smoke notes create harmony.',
    restaurant: 'Mechoui Alley, Marrakech',
  },
  {
    dish: 'Vegetable Couscous (Seven Vegetables)',
    wine: 'Moroccan Rose (Gris) or light Grenache-Cinsault',
    why: 'The delicate broth and steamed vegetables call for a wine that won\'t dominate. A pale, dry Moroccan gris provides refreshment and subtle fruit without overpowering the gentle flavors.',
    restaurant: 'La Sqala, Casablanca',
  },
  {
    dish: 'Tangia Marrakchia',
    wine: 'Chateau Roslane Premier Cru or bold Cabernet-Syrah blend',
    why: 'This intensely flavored slow-cooked beef dish with preserved lemons, saffron, and smen (aged butter) demands a powerful, complex wine. The wine\'s tannins tame the richness while its fruit complements the umami depth.',
    restaurant: 'Chez Lamine, Marrakech',
  },
  {
    dish: 'Moroccan Salads (Zaalouk, Taktouka, Carrot)',
    wine: 'Dry Moroccan Rose or crisp white blend',
    why: 'The array of flavors in a traditional Moroccan salad course -- smoky eggplant, sweet tomato, cumin-spiced carrot -- pairs beautifully with a versatile, food-friendly rose that can bridge all the different tastes.',
    restaurant: 'Any traditional Moroccan restaurant',
  },
  {
    dish: 'Seafood Tagine (Fish with Chermoula)',
    wine: 'Moroccan Viognier or Vermentino',
    why: 'The aromatic, slightly floral character of Viognier harmonizes with the cumin and paprika in the tagine sauce, while the wine\'s body handles the richness of the slow-cooked fish. A genuinely exciting pairing.',
    restaurant: 'Le Relais de Paris, Casablanca',
  },
];

/* =================================================================
   DATA: WINE TOURS
   ================================================================= */

const wineTours = [
  {
    name: 'Meknes Grand Cru Circuit',
    duration: 'Full day (8-10 hours)',
    description:
      'The definitive Moroccan wine tour. Depart from Meknes or Fes to visit three premier wineries: Chateau Roslane, Domaine de la Zouina, and Volubilia. Includes guided tastings at each estate, a gourmet lunch with wine pairings, and a stop at the Roman ruins of Volubilis. The route traverses the heart of Moroccan wine country through olive groves, wheat fields, and vineyard-covered hills.',
    includes: ['Hotel pickup/drop-off', 'Three winery visits', 'Lunch with wine pairing', 'Volubilis ruins entrance', 'English-speaking guide'],
    price: '1,200-2,500 MAD per person',
    groupSize: '2-8 guests',
    bestSeason: 'September-November (harvest season)',
  },
  {
    name: 'Essaouira Coastal Wine & Argan Experience',
    duration: 'Half day (4-5 hours)',
    description:
      'Combine Atlantic coastal charm with wine at Val d\'Argan winery. The tour departs from Essaouira, passing through argan forests and Berber villages before reaching the vineyard. After a vineyard walk and cellar tour, enjoy a tasting paired with local goat cheese and argan oil bread. On the return, stop at an argan oil cooperative for the full Essaouira terroir experience.',
    includes: ['Essaouira hotel pickup', 'Val d\'Argan tour and tasting', 'Argan oil cooperative visit', 'Light snacks', 'Guide'],
    price: '600-1,200 MAD per person',
    groupSize: '2-12 guests',
    bestSeason: 'Year-round (mild coastal climate)',
  },
  {
    name: 'Volubilis Heritage Wine & History Tour',
    duration: 'Half day (5-6 hours)',
    description:
      'A journey through 2,000 years of Moroccan winemaking. Begin at the UNESCO World Heritage Roman ruins of Volubilis, where your guide explains the ancient olive presses and wine production facilities visible in the archaeological site. Then drive to the nearby Volubilia winery to taste wines made from vines growing in the same soil that nourished Roman vineyards. The connection between ancient and modern is visceral and unforgettable.',
    includes: ['Transport from Meknes', 'Volubilis guided tour', 'Volubilia winery tour and tasting', 'Artisanal lunch', 'History booklet'],
    price: '800-1,500 MAD per person',
    groupSize: '2-6 guests',
    bestSeason: 'March-May and September-November',
  },
  {
    name: 'Private Luxury Wine Safari',
    duration: '2-3 days',
    description:
      'The ultimate Moroccan wine experience for serious oenophiles. A private, chauffeur-driven tour visiting five to seven wineries across multiple regions, with overnight stays at luxury wine estates and riads. Includes private tastings with winemakers, barrel sampling of unreleased wines, sommelier-guided dinners, and a customized itinerary based on your wine preferences. This is how Morocco\'s wine insiders experience the country.',
    includes: ['Luxury 4x4 transport', '5-7 private winery visits', 'Boutique riad accommodations', 'Winemaker dinners', 'Sommelier guide', 'All meals with wine'],
    price: '8,000-20,000 MAD per person',
    groupSize: '2-4 guests',
    bestSeason: 'September-October (harvest participation available)',
  },
];

/* =================================================================
   DATA: HISTORICAL TIMELINE
   ================================================================= */

const historicalTimeline = [
  {
    era: 'Phoenician Origins',
    period: '1100 - 500 BCE',
    description: 'Phoenician traders from present-day Lebanon established trading posts along the Moroccan coast, bringing grapevines and basic winemaking knowledge to North Africa.',
  },
  {
    era: 'Roman Golden Age',
    period: '40 BCE - 400 CE',
    description: 'Under Roman rule, Volubilis became a major wine-producing center. Elaborate olive and wine presses have been excavated at the site. Moroccan wine was exported across the Roman Empire, and the Meknes region was recognized for its viticultural potential.',
  },
  {
    era: 'Islamic Period',
    period: '700 - 1912 CE',
    description: 'The arrival of Islam brought religious prohibition on alcohol consumption, but grape cultivation continued for table grapes, raisins, and grape juice. Viticulture knowledge was preserved, particularly by Jewish and Christian communities in Morocco.',
  },
  {
    era: 'French Protectorate',
    period: '1912 - 1956',
    description: 'French colonists planted extensive vineyards across Morocco, introducing Bordeaux and Rhone grape varieties and modern winemaking techniques. Production peaked at over 300,000 hectares of vineyards. Many of today\'s established wineries trace their origins to this period.',
  },
  {
    era: 'Post-Independence Transition',
    period: '1956 - 1990s',
    description: 'After independence, many French winemakers departed and vineyards fell into neglect. The government maintained some production, but quality declined significantly. Morocco\'s wine industry entered a long dormant period.',
  },
  {
    era: 'Modern Renaissance',
    period: '1994 - Present',
    description: 'A new generation of Moroccan and Franco-Moroccan winemakers began reinvesting in quality. Chateau Roslane and Val d\'Argan were founded in 1994, marking the start of Morocco\'s wine renaissance. International varieties were replanted, modern cellars built, and Moroccan wines began winning international awards.',
  },
];

/* =================================================================
   DATA: RESTAURANTS
   ================================================================= */

const wineRestaurants = [
  {
    name: 'La Table du Riad at Riad 72',
    city: 'Marrakech',
    description: 'An intimate fine dining experience in a beautifully restored riad with one of Marrakech\'s most thoughtful Moroccan wine lists. The sommelier is passionate about promoting local wines.',
    priceRange: '500-900 MAD per person',
    wineFocus: 'Extensive Moroccan wine list with rare vintages',
  },
  {
    name: 'Le Jardin',
    city: 'Marrakech',
    description: 'Hidden garden restaurant in the Medina with a modern Moroccan menu. Excellent selection of Moroccan wines by the glass, making it perfect for exploring different producers.',
    priceRange: '300-600 MAD per person',
    wineFocus: 'Wines by the glass, garden terrace ambiance',
  },
  {
    name: 'Nur',
    city: 'Fes',
    description: 'Contemporary Moroccan cuisine in a stunning Fes riad. The chef works closely with local wineries to create bespoke pairings for the seasonal tasting menu.',
    priceRange: '600-1,200 MAD per person',
    wineFocus: 'Tasting menus with wine pairing flights',
  },
  {
    name: 'La Sqala',
    city: 'Casablanca',
    description: 'Set inside an 18th-century Portuguese bastion, La Sqala serves classic Moroccan-French cuisine in a romantic garden setting. The wine list favors Moroccan reds from Meknes.',
    priceRange: '300-600 MAD per person',
    wineFocus: 'Strong Moroccan red selection, historical setting',
  },
  {
    name: 'Restaurant at Domaine de la Zouina',
    city: 'Meknes Region',
    description: 'Dine among the vines at this estate restaurant offering a farm-to-table menu designed to showcase the winery\'s entire portfolio. The harvest dinner series is legendary.',
    priceRange: '400-800 MAD per person',
    wineFocus: 'Complete estate portfolio, vineyard views',
  },
  {
    name: 'Le Relais de Paris',
    city: 'Casablanca',
    description: 'Classic French brasserie with an extensive cellar that champions Moroccan wines alongside French imports. Excellent wine flight options for comparison tasting.',
    priceRange: '400-900 MAD per person',
    wineFocus: 'Morocco vs. France comparison flights',
  },
];

/* =================================================================
   DATA: FESTIVALS & EVENTS
   ================================================================= */

const wineFestivals = [
  {
    name: 'Festival des Vins du Maroc',
    location: 'Meknes',
    timing: 'October (during harvest season)',
    description:
      'Morocco\'s premier wine festival brings together producers from across the country for three days of tastings, masterclasses, vineyard tours, and gala dinners. The festival takes place at various estates around Meknes and attracts international wine journalists, sommeliers, and enthusiasts.',
    highlights: ['Grand tasting with 50+ producers', 'Winemaker masterclasses', 'Vineyard harvest participation', 'Gala dinner with live Andalusian music'],
  },
  {
    name: 'Salon du Vin de Casablanca',
    location: 'Casablanca',
    timing: 'November',
    description:
      'An urban wine salon held in Casablanca\'s modern conference facilities. More trade-focused than the Meknes festival, this event is where new vintages are unveiled to the hospitality industry, but it also opens to the public for weekend tasting sessions.',
    highlights: ['New vintage launches', 'Industry networking', 'Public tasting weekends', 'Wine and gastronomy workshops'],
  },
  {
    name: 'Essaouira Wine & Music Weekend',
    location: 'Essaouira',
    timing: 'June (alongside Gnaoua Festival)',
    description:
      'A satellite event during Essaouira\'s famous Gnaoua World Music Festival, bringing Val d\'Argan and guest wineries into the medina for pop-up wine bars and food pairing events. The collision of Gnaoua music and Moroccan wine creates a uniquely atmospheric experience.',
    highlights: ['Pop-up wine bars in the medina', 'Music and wine pairing evenings', 'Beach sunset tastings', 'Val d\'Argan special releases'],
  },
  {
    name: 'Harvest Experience Events',
    location: 'Various estates',
    timing: 'Late August - October',
    description:
      'Individual wineries host their own harvest events, inviting visitors to participate in grape picking, crushing, and the first stages of winemaking. Domaine de la Zouina, Chateau Roslane, and Volubilia all offer harvest day programs with varying levels of hands-on involvement.',
    highlights: ['Hands-on grape picking', 'Traditional foot crushing', 'First-press juice tasting', 'Harvest dinner under the stars'],
  },
];

/* =================================================================
   DATA: PRACTICAL TIPS
   ================================================================= */

const practicalTips = [
  {
    category: 'Purchasing Wine',
    icon: 'shopping',
    tips: [
      'Wine is available at licensed supermarkets (Carrefour, Marjane, Acima), specialist wine shops, and hotel restaurants throughout major cities.',
      'Prices range from 40-80 MAD for everyday wines (Beauvallon, Guerrouane) to 200-500 MAD for premium estate wines (Chateau Roslane, Volubilia Reserve).',
      'The best selection is found in Casablanca, Rabat, Marrakech, and Meknes. Smaller cities and rural areas have limited availability.',
      'Buy directly from wineries when visiting for the best prices and exclusive wines not available in shops.',
      'Wine shops may close during Ramadan or reduce hours. Hotel bars and international restaurants typically continue to serve.',
    ],
  },
  {
    category: 'Cultural Sensitivity',
    icon: 'culture',
    tips: [
      'Morocco is a Muslim-majority country where alcohol is legally permitted but culturally sensitive. Drink respectfully and discreetly.',
      'Never drink alcohol in public spaces, near mosques, or during the call to prayer. Consumption should be in licensed establishments, private homes, or winery premises.',
      'During Ramadan, be especially discreet about alcohol consumption. Many restaurants stop serving alcohol during the holy month, though hotels and licensed establishments typically continue.',
      'Do not offer alcohol to Moroccan hosts unless you are certain they drink. Many Moroccans abstain for religious reasons.',
      'In conservative rural areas, it is best to limit wine consumption to your hotel or riad.',
      'Moroccan winery workers and winemakers are generally cosmopolitan and comfortable discussing wine openly.',
    ],
  },
  {
    category: 'Customs & Transport',
    icon: 'customs',
    tips: [
      'You may export up to 1 bottle of wine per person duty-free when leaving Morocco. Check your destination country\'s import limits.',
      'Wine purchased at wineries can usually be packed and shipped internationally for a fee. Ask about export services.',
      'If renting a car for wine tours, Morocco has strict zero-tolerance drink-driving laws. Use a designated driver or hire a tour driver.',
      'Major airports (Casablanca, Marrakech, Fes) have duty-free shops with limited Moroccan wine selections.',
      'Pack wine in checked luggage wrapped in clothing. Consider purchasing a wine carrier if visiting multiple estates.',
    ],
  },
  {
    category: 'Best Time to Visit',
    icon: 'calendar',
    tips: [
      'Harvest season (late August to October) is the most exciting time, with estates buzzing with activity and special events.',
      'Spring (March to May) offers beautiful green vineyards, wildflowers, and pleasant touring weather.',
      'Summer (June to August) is very hot in the Meknes region (35-42 degrees Celsius). Visit early morning or switch to coastal Val d\'Argan.',
      'Winter (November to February) is quiet at most estates but still possible to visit. Meknes can be cold and rainy.',
      'Avoid major Islamic holidays when many establishments may be closed or operating on reduced schedules.',
    ],
  },
];

/* =================================================================
   PAGE COMPONENT
   ================================================================= */

export default function MoroccoWineTourismPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&h=1080&fit=crop&q=80"
            alt="Vineyard landscape at golden hour with rows of grapevines stretching toward distant mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/80 via-[var(--color-primary)]/50 to-[var(--color-primary)]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/30 to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-12 left-8 w-24 h-24 border border-[var(--color-gold)]/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-12 w-16 h-16 border border-[var(--color-accent)]/20 rounded-full animate-pulse delay-1000" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 mb-8 text-sm text-white/70">
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--color-gold)]">Wine Tourism</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 backdrop-blur-sm">
            <Wine className="w-4 h-4 text-[var(--color-gold)]" />
            <span className="text-[var(--color-gold)] text-sm font-heading font-semibold tracking-wider uppercase">
              Morocco Wine Guide
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Discover Morocco&apos;s
            <span className="block text-[var(--color-gold)] mt-2">Wine Heritage</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-10 font-body leading-relaxed">
            From ancient Roman vineyards to modern award-winning estates, explore a winemaking
            tradition spanning two millennia. Taste bold Syrah, elegant Cabernet Sauvignon, and
            sun-kissed rose across five distinctive wine regions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '5', label: 'Wine Regions', icon: Map },
              { value: '30+', label: 'Wineries', icon: Building2 },
              { value: '2000+', label: 'Years of History', icon: History },
              { value: '35M', label: 'Bottles/Year', icon: Wine },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-gold)]/15 mb-2">
                  <stat.icon className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60 font-heading uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#wine-regions"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-primary)] font-heading font-semibold rounded-lg hover:bg-[var(--color-gold)]/90 transition-all hover:shadow-lg hover:shadow-[var(--color-gold)]/20"
            >
              Explore Wine Regions
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#wineries"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-heading font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Grape className="w-4 h-4" />
              Visit Top Wineries
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[var(--color-gold)] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================================
          INTRODUCTION SECTION
          ============================================================ */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                An Unexpected Wine Destination
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                Morocco: Where Ancient Terroir Meets Modern Winemaking
              </h2>
              <div className="space-y-4 text-[var(--color-primary)]/80 font-body leading-relaxed">
                <p>
                  Morocco surprises most visitors with its flourishing wine industry. As the
                  second-largest wine producer in the Arab world and one of the oldest wine-producing
                  regions on Earth, the country offers a wine tourism experience that combines
                  ancient history, stunning landscapes, warm hospitality, and increasingly
                  world-class wines.
                </p>
                <p>
                  The story begins with Phoenician traders who planted the first vines over 3,000
                  years ago, continues through the golden age of Roman winemaking at Volubilis, and
                  picks up again with French protectorate-era plantings in the early 20th century.
                  Today, a new generation of passionate Moroccan and Franco-Moroccan winemakers is
                  crafting wines that regularly earn international medals and draw comparisons to the
                  Rhone Valley, southern Spain, and the New World.
                </p>
                <p>
                  With approximately 45,000 hectares under vine and annual production exceeding 35
                  million bottles, Morocco is far more than a curiosity on the global wine map. It
                  is a genuine wine destination waiting to be discovered.
                </p>
              </div>
            </div>

            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=350&fit=crop"
                    alt="Red wine being poured into a glass at a Moroccan winery tasting room"
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=350&fit=crop"
                    alt="Vineyard rows stretching across the Moroccan landscape"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1566903451935-7e8835ed3e97?w=400&h=350&fit=crop"
                    alt="Wine barrels aging in a cool cellar at a Moroccan estate"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-[var(--color-accent)] p-6 flex flex-col justify-center items-center text-center">
                  <Award className="w-8 h-8 text-white mb-3" />
                  <span className="text-white font-display text-2xl font-bold">Gold Medals</span>
                  <span className="text-white/80 text-sm font-body mt-1">
                    at Concours Mondial de Bruxelles &amp; Vinalies Internationales
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HISTORY TIMELINE
          ============================================================ */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-gold)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <History className="w-4 h-4" />
              A Story 3,000 Years in the Making
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              The History of Moroccan Wine
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-body">
              From Phoenician traders to modern estate wineries, trace the remarkable journey of
              wine across Moroccan civilization.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-gold)]/30 hidden md:block" />

            <div className="space-y-12">
              {historicalTimeline.map((event, index) => (
                <div key={event.era} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-[var(--color-primary-light)] border border-[var(--color-gold)]/15 rounded-2xl p-6 hover:border-[var(--color-gold)]/30 transition-colors">
                      <div className="text-[var(--color-gold)] font-heading font-semibold text-sm uppercase tracking-wider mb-1">
                        {event.period}
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-3">
                        {event.era}
                      </h3>
                      <p className="text-white/70 font-body text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-gold)] border-4 border-[var(--color-primary)] z-10 shrink-0" />

                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WINE REGIONS
          ============================================================ */}
      <section id="wine-regions" className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <Map className="w-4 h-4" />
              Terroir & Territory
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Morocco&apos;s Wine Regions
            </h2>
            <p className="text-[var(--color-primary)]/70 max-w-2xl mx-auto font-body">
              Five distinct wine-growing regions, each with unique terroir, climate, and
              character. From the continental heights of the Atlas foothills to the
              Atlantic-kissed coastal plains.
            </p>
          </div>

          <div className="space-y-16">
            {wineRegions.map((region, index) => (
              <div
                key={region.name}
                className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:[direction:rtl] lg:[&>*]:[direction:ltr]' : ''}`}
              >
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={region.image}
                    alt={`${region.name} wine region landscape in Morocco`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                      {region.name}
                    </h3>
                    <span className="text-[var(--color-accent)]/50 font-arabic text-lg">{region.arabicName}</span>
                  </div>

                  <p className="text-[var(--color-primary)]/75 font-body leading-relaxed mb-6">
                    {region.description}
                  </p>

                  {/* Key Facts Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {Object.entries(region.keyFacts).map(([key, value]) => (
                      <div key={key} className="bg-white rounded-xl p-3 border border-[var(--color-primary)]/5 shadow-sm">
                        <div className="text-[var(--color-accent)] text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-[var(--color-primary)] text-sm font-body font-medium">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Notable Wineries */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[var(--color-primary)]/60 text-sm font-heading font-medium">Notable wineries:</span>
                    {region.notableWineries.map((winery) => (
                      <span
                        key={winery}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-heading font-semibold rounded-full"
                      >
                        <Grape className="w-3 h-3" />
                        {winery}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TOP WINERIES
          ============================================================ */}
      <section id="wineries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-4 h-4" />
              Estate Profiles
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Top Moroccan Wineries to Visit
            </h2>
            <p className="text-[var(--color-primary)]/70 max-w-2xl mx-auto font-body">
              From boutique estates to Africa&apos;s largest producer, these wineries welcome
              visitors with open cellars and generous hospitality.
            </p>
          </div>

          <div className="space-y-12">
            {topWineries.map((winery) => (
              <div
                key={winery.name}
                className="bg-[var(--color-bg)] rounded-3xl overflow-hidden shadow-lg border border-[var(--color-primary)]/5 hover:shadow-xl transition-shadow"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 relative">
                    <img
                      src={winery.image}
                      alt={`${winery.name} winery estate in the ${winery.region} region of Morocco`}
                      className="w-full h-full min-h-[300px] object-cover"
                    />
                    {/* Rank Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center shadow-lg">
                      <span className="text-[var(--color-primary)] font-display font-bold text-lg">
                        #{winery.rank}
                      </span>
                    </div>
                    {/* Rating */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 px-3 py-1.5 bg-[var(--color-primary)]/80 backdrop-blur-sm rounded-full">
                      {Array.from({ length: winery.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[var(--color-gold)] fill-[var(--color-gold)]" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-1">
                          {winery.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-[var(--color-primary)]/60 font-body">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                            {winery.region}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                            Est. {winery.founded}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--color-primary)]/75 font-body text-sm leading-relaxed mb-6">
                      {winery.description}
                    </p>

                    {/* Signature Wines */}
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Wine className="w-4 h-4 text-[var(--color-accent)]" />
                        Signature Wines
                      </h4>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {winery.signatureWines.map((wine) => (
                          <div key={wine.name} className="bg-white rounded-xl p-3 border border-[var(--color-primary)]/5">
                            <div className="font-heading font-semibold text-[var(--color-primary)] text-sm mb-1">
                              {wine.name}
                            </div>
                            <div className="text-[var(--color-accent)] text-xs font-body mb-1">{wine.grape}</div>
                            <div className="text-[var(--color-primary)]/60 text-xs font-body">{wine.notes}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visitor Info */}
                    <div className="bg-white rounded-xl p-4 border border-[var(--color-primary)]/5">
                      <h4 className="font-heading font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Compass className="w-4 h-4 text-[var(--color-gold)]" />
                        Visitor Information
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm">
                        <div>
                          <span className="text-[var(--color-primary)]/50 font-body text-xs">Tours</span>
                          <div className="text-[var(--color-primary)] font-body">{winery.visiting.tours}</div>
                        </div>
                        <div>
                          <span className="text-[var(--color-primary)]/50 font-body text-xs">Duration</span>
                          <div className="text-[var(--color-primary)] font-body">{winery.visiting.duration}</div>
                        </div>
                        <div>
                          <span className="text-[var(--color-primary)]/50 font-body text-xs">Price</span>
                          <div className="text-[var(--color-primary)] font-body">{winery.visiting.price}</div>
                        </div>
                        <div>
                          <span className="text-[var(--color-primary)]/50 font-body text-xs">Booking</span>
                          <div className="text-[var(--color-primary)] font-body">{winery.visiting.booking}</div>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[var(--color-primary)]/50 font-body text-xs">Dining</span>
                          <div className="text-[var(--color-primary)] font-body">{winery.visiting.restaurant}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          GRAPE VARIETIES
          ============================================================ */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <Grape className="w-4 h-4" />
              The Grapes of Morocco
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Key Grape Varieties
            </h2>
            <p className="text-[var(--color-primary)]/70 max-w-2xl mx-auto font-body">
              Predominantly French and Spanish varieties that have adapted beautifully to
              Morocco&apos;s warm, sun-drenched terroir over decades of cultivation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grapeVarieties.map((grape) => (
              <div
                key={grape.name}
                className="bg-white rounded-2xl p-6 shadow-md border border-[var(--color-primary)]/5 hover:shadow-lg hover:border-[var(--color-accent)]/20 transition-all group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {grape.name}
                    </h3>
                    <div className="text-[var(--color-primary)]/50 text-xs font-body">
                      Origin: {grape.origin}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-heading font-semibold ${
                    grape.color === 'Red'
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {grape.color}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[var(--color-primary)]/70 font-body text-sm leading-relaxed mb-4">
                  {grape.description}
                </p>

                {/* Flavor Profile */}
                <div className="mb-4">
                  <div className="text-[var(--color-accent)] text-xs font-heading font-semibold uppercase tracking-wider mb-2">
                    Flavor Profile
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {grape.flavorProfile.map((flavor) => (
                      <span
                        key={flavor}
                        className="px-2.5 py-1 bg-[var(--color-bg)] text-[var(--color-primary)]/70 text-xs font-body rounded-full border border-[var(--color-primary)]/10"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best With */}
                <div className="pt-4 border-t border-[var(--color-primary)]/5">
                  <div className="flex items-center gap-2 text-xs">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    <span className="text-[var(--color-primary)]/50 font-heading font-semibold uppercase tracking-wider">
                      Pairs with:
                    </span>
                  </div>
                  <div className="text-[var(--color-primary)]/75 text-sm font-body mt-1">
                    {grape.bestWith}
                  </div>
                </div>

                {/* Acreage Note */}
                <div className="mt-3 text-[var(--color-accent)]/80 text-xs font-body italic flex items-start gap-1.5">
                  <TrendingUp className="w-3 h-3 mt-0.5 shrink-0" />
                  {grape.acreage}
                </div>
              </div>
            ))}
          </div>

          {/* Additional White Varieties Note */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-[var(--color-gold)]/20 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-[var(--color-gold)]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-[var(--color-primary)] mb-2">
                  White & Emerging Varieties
                </h3>
                <p className="text-[var(--color-primary)]/70 font-body text-sm leading-relaxed">
                  While Morocco is predominantly a red wine country, white varieties are gaining
                  ground. <strong>Chardonnay</strong> and <strong>Sauvignon Blanc</strong> perform
                  well in cooler Atlas foothill sites, while <strong>Viognier</strong> produces
                  aromatic, full-bodied whites. <strong>Vermentino</strong> and{' '}
                  <strong>Clairette</strong> are found at Val d&apos;Argan near Essaouira, benefiting
                  from the Atlantic climate. <strong>Tempranillo</strong>, the great Spanish grape,
                  is an exciting new addition being trialed at several estates, reflecting Morocco&apos;s
                  Iberian connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WINE & FOOD PAIRING
          ============================================================ */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-gold)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <UtensilsCrossed className="w-4 h-4" />
              The Perfect Match
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Moroccan Wine &amp; Food Pairings
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-body">
              Moroccan cuisine&apos;s complex spice profiles, sweet-savory balance, and rich tagine
              traditions create extraordinary pairing opportunities with local wines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {winePairings.map((pairing) => (
              <div
                key={pairing.dish}
                className="bg-[var(--color-primary-light)] rounded-2xl p-6 border border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/25 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-1">
                    <UtensilsCrossed className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      {pairing.dish}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Wine className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="text-[var(--color-gold)] text-sm font-heading font-semibold">
                        {pairing.wine}
                      </span>
                    </div>
                    <p className="text-white/65 font-body text-sm leading-relaxed mb-3">
                      {pairing.why}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/40 text-xs font-body">
                      <MapPin className="w-3 h-3" />
                      Try at: {pairing.restaurant}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pairing Principles */}
          <div className="mt-12 bg-[var(--color-primary-light)] rounded-2xl p-8 border border-[var(--color-gold)]/15">
            <h3 className="font-display text-xl font-bold text-white mb-6 text-center">
              General Pairing Principles for Moroccan Cuisine
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Spice-Friendly Reds',
                  detail: 'Syrah and Grenache handle cumin, ras el hanout, and harissa heat beautifully. Avoid very tannic wines with chili-heavy dishes.',
                  icon: Flame,
                },
                {
                  title: 'Sweet-Savory Balance',
                  detail: 'Dishes with dried fruit or honey (pastilla, lamb with prunes) pair best with wines that have ripe fruit and a touch of residual warmth.',
                  icon: Heart,
                },
                {
                  title: 'Rose Versatility',
                  detail: 'Dry Moroccan rose (gris) is the most versatile pairing for a mixed Moroccan table. When in doubt, order rose.',
                  icon: GlassWater,
                },
                {
                  title: 'Coastal Matches',
                  detail: 'Seafood dishes from Essaouira and the coast call for white wines or light roses. The Atlantic influence in coastal wines creates natural harmony.',
                  icon: Droplets,
                },
              ].map((principle) => (
                <div key={principle.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-gold)]/15 mb-3">
                    <principle.icon className="w-6 h-6 text-[var(--color-gold)]" />
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-white/60 font-body text-xs leading-relaxed">
                    {principle.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WINE TASTING TOURS
          ============================================================ */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <Route className="w-4 h-4" />
              Curated Experiences
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Wine Tasting Tours
            </h2>
            <p className="text-[var(--color-primary)]/70 max-w-2xl mx-auto font-body">
              From half-day tastings to multi-day wine safaris, these curated tours bring
              Morocco&apos;s wine country to life with expert guides and insider access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {wineTours.map((tour) => (
              <div
                key={tour.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-[var(--color-primary)]/5 hover:shadow-lg transition-shadow group"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/80 p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {tour.name}
                  </h3>
                  <div className="flex items-center gap-4 text-white/80 text-sm font-body">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {tour.groupSize}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-[var(--color-primary)]/75 font-body text-sm leading-relaxed mb-5">
                    {tour.description}
                  </p>

                  {/* Includes */}
                  <div className="mb-5">
                    <h4 className="text-[var(--color-primary)] font-heading font-semibold text-xs uppercase tracking-wider mb-3">
                      Tour Includes
                    </h4>
                    <div className="space-y-2">
                      {tour.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm font-body text-[var(--color-primary)]/70">
                          <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-[var(--color-primary)]/5">
                    <div>
                      <div className="text-[var(--color-primary)]/50 text-xs font-heading uppercase tracking-wider">
                        Price
                      </div>
                      <div className="text-[var(--color-accent)] font-display font-bold text-lg">
                        {tour.price}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[var(--color-primary)]/50 text-xs font-heading uppercase tracking-wider">
                        Best Season
                      </div>
                      <div className="flex items-center gap-1 text-[var(--color-primary)] font-body text-sm">
                        <Sun className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                        {tour.bestSeason}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BEST RESTAURANTS FOR MOROCCAN WINE
          ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <UtensilsCrossed className="w-4 h-4" />
              Where to Drink
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Best Restaurants for Moroccan Wine
            </h2>
            <p className="text-[var(--color-primary)]/70 max-w-2xl mx-auto font-body">
              Restaurants across Morocco that champion local wines with curated lists,
              knowledgeable staff, and menus designed for pairing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wineRestaurants.map((restaurant) => (
              <div
                key={restaurant.name}
                className="bg-[var(--color-bg)] rounded-2xl p-6 border border-[var(--color-primary)]/5 hover:border-[var(--color-accent)]/20 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-[var(--color-accent)] text-sm font-heading font-semibold">{restaurant.city}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-primary)] mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-[var(--color-primary)]/70 font-body text-sm leading-relaxed mb-4">
                  {restaurant.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-primary)]/5">
                  <div className="flex items-center gap-1.5 text-[var(--color-primary)]/60 text-xs font-body">
                    <CircleDollarSign className="w-3.5 h-3.5" />
                    {restaurant.priceRange}
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--color-gold)] text-xs font-heading font-semibold">
                    <Wine className="w-3.5 h-3.5" />
                    {restaurant.wineFocus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WINE FESTIVALS & EVENTS
          ============================================================ */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <PartyPopper className="w-4 h-4" />
              Celebrate
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Wine Festivals &amp; Events
            </h2>
            <p className="text-[var(--color-primary)]/70 max-w-2xl mx-auto font-body">
              Time your visit to coincide with Morocco&apos;s growing calendar of wine events,
              from grand festivals to intimate harvest experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {wineFestivals.map((festival) => (
              <div
                key={festival.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-[var(--color-primary)]/5"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[var(--color-primary)]">
                        {festival.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--color-primary)]/60 font-body">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {festival.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {festival.timing}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[var(--color-primary)]/75 font-body text-sm leading-relaxed mb-5">
                    {festival.description}
                  </p>

                  <div>
                    <h4 className="text-[var(--color-primary)] font-heading font-semibold text-xs uppercase tracking-wider mb-3">
                      Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {festival.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm font-body text-[var(--color-primary)]/70">
                          <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PRACTICAL TIPS
          ============================================================ */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-gold)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              Know Before You Go
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Practical Tips for Wine Tourists
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-body">
              Essential advice for navigating Morocco&apos;s wine scene with respect,
              confidence, and maximum enjoyment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practicalTips.map((section) => (
              <div
                key={section.category}
                className="bg-[var(--color-primary-light)] rounded-2xl p-6 border border-[var(--color-gold)]/10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center">
                    {section.icon === 'shopping' && <CircleDollarSign className="w-5 h-5 text-[var(--color-gold)]" />}
                    {section.icon === 'culture' && <Globe className="w-5 h-5 text-[var(--color-gold)]" />}
                    {section.icon === 'customs' && <Navigation className="w-5 h-5 text-[var(--color-gold)]" />}
                    {section.icon === 'calendar' && <Sun className="w-5 h-5 text-[var(--color-gold)]" />}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {section.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {section.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)]/70 mt-0.5 shrink-0" />
                      <p className="text-white/70 font-body text-sm leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-10 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 rounded-2xl p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-heading font-semibold text-white mb-2">
                Important: Drink-Driving Laws
              </h4>
              <p className="text-white/70 font-body text-sm leading-relaxed">
                Morocco enforces strict drink-driving laws with a near zero-tolerance blood alcohol
                limit (0.02%). Penalties include heavy fines, license suspension, and imprisonment.
                If you plan to visit multiple wineries in a day, always hire a driver, join an
                organized tour, or designate a non-drinking driver. This is non-negotiable -- the
                consequences are severe and the mountain roads around Meknes demand full attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAP / GETTING THERE
          ============================================================ */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <Navigation className="w-4 h-4" />
              Getting There
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              How to Reach Morocco&apos;s Wine Country
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                gateway: 'Fes-Saiss Airport (FEZ)',
                region: 'Meknes Wine Region',
                distance: '60 km / 45 minutes',
                description: 'The nearest airport to the main Meknes wine region. Direct flights from major European cities. Hire a car at the airport or arrange a transfer to Meknes city, which serves as the base for wine touring.',
                icon: Building2,
              },
              {
                gateway: 'Marrakech Menara Airport (RAK)',
                region: 'Day trips to Atlas wineries',
                distance: 'Varies by estate',
                description: 'Morocco\'s busiest tourist airport. While the main wine regions are further north, many tour operators run multi-day wine trips departing from Marrakech. Val d\'Argan near Essaouira is accessible as a day trip.',
                icon: Mountain,
              },
              {
                gateway: 'Casablanca Mohammed V Airport (CMN)',
                region: 'Benslimane & All regions',
                distance: 'Hub airport',
                description: 'Morocco\'s main international hub with the most connections. The Benslimane wine region is just 45 minutes from the airport. Excellent train connections to Meknes (3 hours) for onward wine touring.',
                icon: Globe,
              },
            ].map((gateway) => (
              <div key={gateway.gateway} className="bg-white rounded-2xl p-6 shadow-md border border-[var(--color-primary)]/5">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                  <gateway.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-primary)] mb-1">
                  {gateway.gateway}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--color-accent)] font-heading font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {gateway.region}
                </div>
                <div className="text-[var(--color-primary)]/50 text-xs font-body mb-3">
                  {gateway.distance}
                </div>
                <p className="text-[var(--color-primary)]/70 font-body text-sm leading-relaxed">
                  {gateway.description}
                </p>
              </div>
            ))}
          </div>

          {/* Train Info */}
          <div className="mt-10 bg-white rounded-2xl p-8 border border-[var(--color-primary)]/5 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                <Route className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-[var(--color-primary)] mb-2">
                  Travel by Train: ONCF Rail Network
                </h3>
                <p className="text-[var(--color-primary)]/70 font-body text-sm leading-relaxed">
                  Morocco&apos;s national rail service (ONCF) connects Casablanca, Rabat, Meknes, and
                  Fes with frequent, comfortable trains. The Casablanca-Meknes route takes
                  approximately 3 hours and costs 130-200 MAD in first class. From Meknes train
                  station, taxis and hired drivers can reach the major wineries in 20-40 minutes.
                  This is an excellent option for visitors who want to avoid driving and enjoy the
                  scenery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PHOTO GALLERY HIGHLIGHT
          ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <Camera className="w-4 h-4" />
              Visual Journey
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Scenes from Morocco&apos;s Wine Country
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop', alt: 'Rolling vineyards under the Moroccan sun with Atlas Mountains in the distance' },
              { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', alt: 'Grapevines heavy with ripe purple grapes ready for harvest' },
              { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop', alt: 'Wine tasting flight with multiple glasses of red and white wine' },
              { src: 'https://images.unsplash.com/photo-1566903451935-7e8835ed3e97?w=600&h=400&fit=crop', alt: 'Oak barrels in a dimly lit wine cellar' },
              { src: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&h=400&fit=crop', alt: 'Pouring red wine into a glass with warm sunset lighting' },
              { src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop', alt: 'Panoramic vineyard view at golden hour' },
              { src: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=600&h=400&fit=crop', alt: 'Traditional Moroccan courtyard with wine service' },
              { src: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=600&h=400&fit=crop', alt: 'Estate chateau architecture with vineyard in foreground' },
            ].map((photo, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-md group ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION
          ============================================================ */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              <Info className="w-4 h-4" />
              Common Questions
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Is wine legal in Morocco?',
                answer: 'Yes. Morocco produces, sells, and exports wine legally. As a Muslim-majority country, alcohol is culturally sensitive but legally permitted for non-Muslims and many Moroccans. Wine is available in licensed restaurants, hotels, supermarkets, and at wineries themselves.',
              },
              {
                question: 'Do I need to book winery visits in advance?',
                answer: 'Strongly recommended for most estates. Major wineries like Chateau Roslane and Domaine de la Zouina require 24-48 hours advance booking. Val d\'Argan sometimes accepts walk-ins. During harvest season (September-October), booking well in advance is essential as tours fill up quickly.',
              },
              {
                question: 'What is the average cost of a wine tasting?',
                answer: 'Basic tastings range from 100-200 MAD (approximately $10-20 USD). Premium tastings with food pairings cost 300-600 MAD. A full-day guided tour covering multiple wineries typically runs 1,200-2,500 MAD per person including transport and lunch.',
              },
              {
                question: 'Can I visit wineries without joining a tour?',
                answer: 'Yes, if you have a rental car and a designated non-drinking driver. Most estates around Meknes are within 20-40 minutes of the city center. However, organized tours are recommended for first-time visitors because the wineries can be hard to find, signage is limited, and having a guide enhances the experience enormously.',
              },
              {
                question: 'What is Moroccan gris wine?',
                answer: 'Gris is a traditional Moroccan rose style, particularly associated with Boulaouane. It\'s made from red grapes (typically Cinsault and Grenache) using very short skin contact, producing a pale, copper-tinted, dry wine. It\'s Morocco\'s most popular wine style and pairs beautifully with the local cuisine.',
              },
              {
                question: 'How does Moroccan wine compare to French or Spanish wine?',
                answer: 'Moroccan wines are often compared to Southern Rhone and Spanish Priorat styles -- warm-climate wines with ripe fruit, moderate acidity, and generous body. The best Moroccan wines (Chateau Roslane Premier Cru, Volubilia Reserve) can stand alongside mid-range Chateauneuf-du-Pape or Priorat at a fraction of the price. They offer exceptional value.',
              },
              {
                question: 'Is it appropriate to discuss wine openly in Morocco?',
                answer: 'In tourist areas, hotels, licensed restaurants, and at wineries, absolutely. Moroccans in the hospitality and wine industry are cosmopolitan and happy to discuss wine. However, avoid discussing wine or alcohol consumption with religious strangers, in conservative rural areas, or near mosques. Read the room and be respectful.',
              },
              {
                question: 'Can I buy Moroccan wine abroad?',
                answer: 'Moroccan wine is exported to France, Belgium, Canada, the US, and several other countries, but availability varies greatly. Boulaouane Gris and Beauvallon are the most widely distributed export brands. Premium estate wines are harder to find abroad, which is another compelling reason to taste them at the source.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[var(--color-primary)]/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-semibold text-[var(--color-primary)] mb-3 flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold shrink-0 mt-0.5">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-[var(--color-primary)]/70 font-body text-sm leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA / RELATED LINKS
          ============================================================ */}
      <section className="py-20 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]/90">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Wine className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Morocco&apos;s Wine Country?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-body mb-10">
            Plan your wine tourism adventure across Morocco. Combine vineyard visits with
            ancient Roman ruins, Atlas Mountain scenery, and the culinary treasures of Meknes
            and Fes.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Moroccan Food Guide', href: '/food', icon: UtensilsCrossed },
              { label: 'Cooking Classes', href: '/cooking-classes', icon: BookOpen },
              { label: 'Meknes City Guide', href: '/cities', icon: Landmark },
              { label: 'Tours & Experiences', href: '/tours', icon: Compass },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white/15 border border-white/25 text-white font-heading font-semibold text-sm rounded-xl hover:bg-white/25 transition-all backdrop-blur-sm"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          STRUCTURED DATA: FAQ
          ============================================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is wine legal in Morocco?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Morocco produces, sells, and exports wine legally. As a Muslim-majority country, alcohol is culturally sensitive but legally permitted for non-Muslims and many Moroccans.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to book winery visits in advance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Strongly recommended for most estates. Major wineries require 24-48 hours advance booking. During harvest season (September-October), booking well in advance is essential.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the average cost of a wine tasting in Morocco?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Basic tastings range from 100-200 MAD (approximately $10-20 USD). Premium tastings with food pairings cost 300-600 MAD. Full-day guided tours cost 1,200-2,500 MAD per person.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is Moroccan gris wine?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Gris is a traditional Moroccan rose style made from red grapes using very short skin contact, producing a pale, copper-tinted, dry wine. It is Morocco\'s most popular wine style.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does Moroccan wine compare to French or Spanish wine?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Moroccan wines are often compared to Southern Rhone and Spanish Priorat styles. The best Moroccan wines can stand alongside mid-range Chateauneuf-du-Pape at a fraction of the price.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

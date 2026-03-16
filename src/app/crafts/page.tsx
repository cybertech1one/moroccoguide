import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Paintbrush,
  Scissors,
  Star,
  MapPin,
  Coins,
  ShieldCheck,
  Sparkles,
  Package,
  HandCoins,
  Gem,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Store,
  Truck,
  Eye,
  Layers,
  Award,
  BookOpen,
  Clock,
  GraduationCap,
  Hammer,
  Heart,
  Landmark,
  Mountain,
  Palette,
  ScrollText,
  Shield,
  Users,
  Wrench,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Crafts & Artisans Guide | 16 Traditional Crafts, Master Artisans & Workshops',
  description:
    'Comprehensive guide to Moroccan traditional crafts and artisan heritage. Discover 16 iconic crafts including zellige tilework, leather tanning, Berber carpets, pottery, metalwork, woodcarving, calligraphy, textile dyeing, and more. Master artisan profiles, craft workshops for tourists, UNESCO heritage crafts, museum guide, and expert shopping tips.',
  keywords: [
    'Moroccan crafts',
    'Morocco artisans',
    'zellige tiles Morocco',
    'Moroccan leather',
    'Berber carpets',
    'Moroccan pottery',
    'Fes tanneries',
    'Moroccan woodwork',
    'thuya wood Essaouira',
    'Moroccan silver jewelry',
    'bargaining Morocco',
    'Moroccan souks',
    'tadelakt plaster',
    'babouche slippers',
    'argan oil cooperatives',
    'Beni Ourain rugs',
    'Moroccan calligraphy',
    'craft workshops Morocco',
    'Moroccan textile dyeing',
    'Morocco craft museums',
    'UNESCO intangible heritage Morocco',
    'master artisan Morocco',
    'Moroccan brass lanterns',
    'Safi pottery Morocco',
  ],
  openGraph: {
    title: 'Moroccan Crafts & Artisans Guide - CityGuide',
    description:
      'Explore Morocco living heritage of 16 traditional crafts. From zellige tilework to Berber carpets, discover master artisans, workshops, museums, UNESCO heritage crafts, and expert shopping tips.',
    url: 'https://citytoursmorocco.com/crafts',
    images: [
      {
        url: '/images/detail-zellige-mosaic.webp',
        width: 1200,
        height: 630,
        alt: 'Moroccan artisan crafting traditional zellige tiles in Fes',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/crafts' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/crafts#guide',
      headline: 'Complete Guide to Moroccan Traditional Crafts & Artisans',
      description:
        'Comprehensive guide covering 16 traditional Moroccan crafts, master artisan profiles, craft workshops, museums, UNESCO heritage, best souks, bargaining techniques, and shipping logistics.',
      url: 'https://citytoursmorocco.com/crafts',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Traditional Moroccan Crafts',
      description: 'The 16 essential traditional crafts of Morocco.',
      numberOfItems: 16,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Zellige (Geometric Tilework)' },
        { '@type': 'ListItem', position: 2, name: 'Tadelakt (Waterproof Plaster)' },
        { '@type': 'ListItem', position: 3, name: 'Leather Tanning' },
        { '@type': 'ListItem', position: 4, name: 'Carpet Weaving' },
        { '@type': 'ListItem', position: 5, name: 'Pottery & Ceramics' },
        { '@type': 'ListItem', position: 6, name: 'Metalwork' },
        { '@type': 'ListItem', position: 7, name: 'Woodwork & Carving' },
        { '@type': 'ListItem', position: 8, name: 'Silver Jewelry' },
        { '@type': 'ListItem', position: 9, name: 'Babouche Leather Slippers' },
        { '@type': 'ListItem', position: 10, name: 'Argan Oil' },
        { '@type': 'ListItem', position: 11, name: 'Embroidery' },
        { '@type': 'ListItem', position: 12, name: 'Basket Weaving' },
        { '@type': 'ListItem', position: 13, name: 'Calligraphy & Illumination' },
        { '@type': 'ListItem', position: 14, name: 'Textile Dyeing' },
        { '@type': 'ListItem', position: 15, name: 'Musical Instrument Making' },
        { '@type': 'ListItem', position: 16, name: 'Gebs (Carved Plaster)' },
      ],
    },
  ],
};

/* =====================================================================
   TRADITIONAL CRAFTS DATA (16 crafts)
   ===================================================================== */

interface Craft {
  name: string;
  arabicName: string;
  region: string;
  image: string;
  description: string;
  history: string;
  buyingTip: string;
  priceRange: string;
  unescoStatus?: string;
}

const crafts: Craft[] = [
  {
    name: 'Zellige (Geometric Tilework)',
    arabicName: 'زليج',
    region: 'Fes',
    image: '/images/detail-zellige-mosaic.webp',
    description:
      'Zellige is the art of hand-cut geometric mosaic tilework that adorns fountains, walls, floors, and courtyards across Morocco. Each tiny tile chip is individually chiseled from larger glazed terracotta squares, then assembled face-down into intricate mathematical patterns of breathtaking complexity. The craft demands years of apprenticeship and an intuitive understanding of geometry. Fes remains the undisputed capital of zellige production, where master craftsmen (maalems) work in workshops that have operated continuously for centuries.',
    history:
      'Zellige arrived in Morocco with the Andalusian Moors in the 10th century and reached its artistic zenith during the Marinid dynasty in the 14th century. The patterns are rooted in Islamic geometric art, which uses mathematical repetition to suggest the infinite nature of creation. UNESCO has recognized Moroccan zellige as an Intangible Cultural Heritage.',
    buyingTip:
      'Visit workshops in the Fes medina near Bab el-Ghissa to see artisans at work. Small zellige pieces and coasters make portable souvenirs. Full tables and fountains can be custom-ordered and shipped.',
    priceRange: '50-500 MAD for small pieces; 5,000-50,000+ MAD for tables and fountains',
  },
  {
    name: 'Tadelakt (Waterproof Plaster)',
    arabicName: 'تدلاكت',
    region: 'Marrakech',
    image: '/images/hero-hammam-interior.webp',
    description:
      'Tadelakt is a luxurious, waterproof lime plaster technique unique to Morocco, traditionally used to line the walls and floors of hammams, riads, and palaces. The plaster is made from limestone sourced near Marrakech, applied in multiple layers, and polished to a lustrous sheen using flat river stones and black soap. The result is a seamless, marble-like surface that is naturally waterproof, antibacterial, and stunningly beautiful.',
    history:
      'The technique dates back centuries and was traditionally used exclusively in hammams and the homes of the wealthy. The word tadelakt comes from the Berber verb "to rub" or "to knead." Today, it has gained international fame as an eco-friendly luxury wall treatment, with Marrakech craftsmen exporting their skills worldwide.',
    buyingTip:
      'While you cannot buy tadelakt as a souvenir, you can commission small tadelakt bowls, soap dishes, and decorative objects from workshops in the Marrakech medina. These make elegant and unique gifts.',
    priceRange: '100-500 MAD for small objects; custom installations priced per square meter',
  },
  {
    name: 'Leather Tanning',
    arabicName: 'الدباغة',
    region: 'Fes, Marrakech',
    image: '/images/hero-fes-tanneries.webp',
    description:
      'The leather tanneries of Fes are one of Morocco most iconic sights. The Chouara Tannery in the Fes medina has been operating since the 11th century, using the same techniques: raw animal hides are soaked in lime to remove hair, then submerged in vats of natural plant dyes including saffron (yellow), indigo (blue), poppy (red), and mint (green). Workers stand waist-deep in the stone vats, turning and kneading the leather by hand under the open sky.',
    history:
      'Fes has been the center of Moroccan leather production since the founding of the city in the 9th century. The English word "cordovan" derives from the fine leather produced in Moorish Cordoba, a tradition that transferred to Fes. Moroccan leather was once exported across Europe and was prized for bookbinding, particularly in Renaissance Italy.',
    buyingTip:
      'In Fes, buy directly from shops overlooking the tanneries for the best selection. Smell the leather: genuine vegetable-tanned leather has an earthy, cedar scent, while chemical-tanned leather smells like plastic. Quality bags, belts, and poufs are excellent purchases.',
    priceRange: '100-800 MAD for bags; 400-1500 MAD for leather poufs',
  },
  {
    name: 'Carpet Weaving',
    arabicName: 'الزربية',
    region: 'Middle Atlas, High Atlas, Nationwide',
    image: '/images/art-berber-carpet-weaving.webp',
    description:
      'Moroccan carpets are among the most sought-after textiles in the world, with distinct styles varying by region and tribe. The three major types are Beni Ourain (cream-colored wool with bold black geometric patterns from the Middle Atlas), Boucherouite (colorful recycled fabric rugs from the High Atlas), and flat-woven kilims. Each rug is handmade on a traditional loom by Berber women, with patterns that encode tribal identity, spiritual protection, and personal stories.',
    history:
      'Carpet weaving is a pre-Islamic Berber tradition that predates the Arab conquest of North Africa. For Berber women, weaving is both an art form and a form of cultural communication, with symbols representing fertility, protection, freedom, and the natural world. Each region and tribe has distinctive patterns passed through generations.',
    buyingTip:
      'Examine the back of the carpet: handmade rugs have slight irregularities, while machine-made rugs are perfectly uniform. Ask about the wool origin and dye type (natural vs. synthetic). Visit cooperatives for fair-trade purchases. Beni Ourain rugs start at 2,000 MAD for small sizes.',
    priceRange: '500-3000 MAD for small kilims; 2,000-20,000+ MAD for large Beni Ourain rugs',
  },
  {
    name: 'Pottery & Ceramics',
    arabicName: 'الفخار',
    region: 'Fes, Safi',
    image: '/images/photo-ceramics-pottery.webp',
    description:
      'Moroccan pottery is instantly recognizable by its vibrant colors and geometric designs. Fes is famous for its cobalt blue and white ceramics, inspired by the city centuries-old connection with Andalusia and the Middle East. Safi, on the Atlantic coast, is the other great pottery center, known for its polychrome pieces in greens, yellows, and reds. Both cities have active potters quarters where you can watch artisans throw, paint, and fire ceramics in traditional wood-burning kilns.',
    history:
      'Moroccan pottery traditions date back to the Neolithic period, but the distinctive glazed and painted ceramics developed during the Idrisid dynasty in the 9th century. Fassi blue-and-white pottery shows clear Chinese porcelain influence, transmitted via the Silk Road trade routes. The geometric patterns follow the same mathematical principles as zellige tilework.',
    buyingTip:
      'Visit the pottery quarter (Ain Nokbi) in Fes or the Colline des Potiers in Safi for wholesale prices. Check that plates and bowls are food-safe if you plan to use them for dining. The best pieces have fine, detailed hand-painting and a smooth, even glaze.',
    priceRange: '30-200 MAD for plates and bowls; 200-2000 MAD for large decorative pieces',
  },
  {
    name: 'Metalwork',
    arabicName: 'النحاس',
    region: 'Marrakech, Fes',
    image: '/images/hero-souk-lamps.webp',
    description:
      'The coppersmiths and brass workers of Morocco produce some of the most exquisite metalwork in the Islamic world. From the pierced brass lanterns that cast mesmerizing shadow patterns to ornate tea sets, trays, and door knockers, Moroccan metalwork combines functionality with extraordinary decorative artistry. In the metalworking souks of Marrakech and Fes, the rhythmic hammering of artisans fills the air as they transform flat sheets of copper and brass into three-dimensional works of art.',
    history:
      'Metalworking has been central to Moroccan craft traditions since the Berber kingdoms. The elaborate brass lanterns and chandeliers that define Moroccan interior design evolved during the Almohad and Marinid dynasties. The Place Seffarine in the Fes medina, the coppersmiths square, has been in continuous operation for over a thousand years.',
    buyingTip:
      'Brass lanterns are the quintessential Moroccan metalwork purchase. Test the quality by checking the weight (heavier is better) and the precision of the pierced patterns. Ensure you get wiring compatible with your home country electrical system. Tea sets and trays also make excellent gifts.',
    priceRange: '200-2000 MAD for lanterns; 150-800 MAD for tea sets and trays',
  },
  {
    name: 'Woodwork & Carving',
    arabicName: 'النجارة',
    region: 'Essaouira, Fes',
    image: '/images/hero-essaouira.webp',
    description:
      'Morocco woodworking tradition splits into two distinct schools. Fes specializes in carved and painted cedar, used for the elaborate ceilings, doors, and screens that define Moroccan palace architecture. Essaouira is the capital of thuya wood, a rare, aromatic burl wood from the argan forest, which artisans turn into boxes, chess sets, furniture, and decorative objects using an ancient marquetry technique. The natural grain patterns of thuya create swirling, almost psychedelic designs.',
    history:
      'Cedar carving in Fes reached its peak during the Marinid dynasty, when the finest craftsmen decorated palaces and madrasas with breathtaking wooden muqarnas (honeycomb vaulting). Thuya woodworking in Essaouira has been a specialty since the Phoenician era, when the wood was exported across the Mediterranean. The craft nearly died out in the 20th century but has been revived through artisan cooperatives.',
    buyingTip:
      'In Essaouira, visit the woodworking cooperative near Skala de la Ville for fair prices and authentic thuya products. Smell the wood: genuine thuya has a distinctive sweet, resinous fragrance. Avoid pieces with cracks, which indicate the wood was not properly dried.',
    priceRange: '50-300 MAD for small boxes; 500-5000+ MAD for chess sets and furniture',
  },
  {
    name: 'Silver Jewelry',
    arabicName: 'الحلي الفضية',
    region: 'Tiznit, Anti-Atlas',
    image: '/images/hero-spices.webp',
    description:
      'Moroccan silver jewelry is primarily a Berber tradition, with designs that carry deep symbolic and protective meaning. The town of Tiznit in the Anti-Atlas is the historic capital of Moroccan silversmithing, where Jewish and Berber craftsmen developed distinctive styles featuring fibulae (large ornamental brooches), chunky bangles, talismanic pendants, and elaborate headpieces. Berber jewelry incorporates symbols of fertility, the evil eye, and natural elements like stars, moons, and geometric patterns.',
    history:
      'Silver jewelry in Morocco has ancient Berber roots, but the craft was also profoundly influenced by Jewish silversmiths who lived in the mellah (Jewish quarters) of Moroccan cities for centuries. When most Moroccan Jews emigrated to Israel in the mid-20th century, the silversmithing traditions were passed to Muslim artisans. Today, Tiznit remains the center, though fine silver jewelry is found throughout the south.',
    buyingTip:
      'Look for the 925 stamp indicating sterling silver. Berber jewelry is traditionally made from coin silver, which is lower purity but has historical value. Avoid pieces sold by weight without craftsmanship consideration. The best selection is in Tiznit souk and the silver section of Marrakech souks.',
    priceRange: '100-500 MAD for bangles and small pieces; 500-5000+ MAD for elaborate necklaces',
  },
  {
    name: 'Babouche (Leather Slippers)',
    arabicName: 'البلغة',
    region: 'Fes, Marrakech',
    image: '/images/photo-babouche-slippers.webp',
    description:
      'The babouche is Morocco iconic leather slipper, recognized by its flat sole, pointed toe, and backless design that allows you to slip them on and off easily. Made from soft, hand-dyed leather, babouches come in every color imaginable, from classic camel and black to vivid saffron, cobalt, and fuchsia. Men traditional babouches tend to be simpler in design, while women versions may feature embroidery, sequins, or silk thread decoration.',
    history:
      'The babouche has been the standard Moroccan footwear for centuries, perfectly adapted to the climate and lifestyle. The backless design makes them easy to remove when entering homes and mosques. Fes has been the principal production center since the medieval period, though today Marrakech also has major babouche souks. The craft remains entirely handmade in Morocco.',
    buyingTip:
      'Buy babouches in Fes for the best leather quality and lowest prices. Test flexibility: good babouches bend easily without cracking. Check the stitching around the sole. Buy a half size smaller than your usual shoe size, as the soft leather stretches. Yellow babouches are the most traditional for men.',
    priceRange: '60-150 MAD for basic pairs; 150-500 MAD for embroidered or designer versions',
  },
  {
    name: 'Argan Oil',
    arabicName: 'زيت أركان',
    region: 'Souss-Massa, Essaouira',
    image: '/images/photo-argan-oil-stilllife.webp',
    description:
      'Argan oil is extracted from the nuts of the argan tree, which grows only in southwestern Morocco in a UNESCO-protected biosphere reserve. There are two types: culinary argan oil (from roasted nuts, with a rich, nutty flavor used in cooking and as a bread dip) and cosmetic argan oil (from unroasted nuts, used for skin and hair care). The oil is rich in vitamin E, essential fatty acids, and antioxidants. Women cooperatives in the Souss region produce most of Morocco argan oil using traditional stone-grinding methods.',
    history:
      'The Amazigh (Berber) people have used argan oil for cooking, cosmetics, and medicine for centuries. The argan tree can live up to 200 years and is so vital to the ecosystem that UNESCO designated the argan forest a Biosphere Reserve in 1998. The rise of the women cooperative movement in the 1990s transformed argan oil production into a major source of rural female empowerment.',
    buyingTip:
      'Buy from certified women cooperatives for guaranteed authenticity and fair trade. Cosmetic argan oil should be nearly odorless and pale gold; culinary oil is darker with a nutty aroma. Avoid vendors selling suspiciously cheap oil, which is often diluted with sunflower or olive oil.',
    priceRange: '150-300 MAD per 100ml for cosmetic oil; 80-150 MAD per 250ml for culinary oil',
  },
  {
    name: 'Embroidery',
    arabicName: 'الطرز',
    region: 'Fes, Rabat, Sale',
    image: '/images/art-berber-carpet-weaving.webp',
    description:
      'Moroccan embroidery is a refined art form with distinct regional styles. Fes embroidery (terz fassi) features monochrome designs in deep blue or red on white linen, with reversible stitching so precise that both sides are identical. Rabat embroidery uses bold, colorful geometric patterns on silk or cotton. Sale specializes in delicate floral cross-stitch. Embroidered items include tablecloths, cushion covers, caftans, and napkins, all painstakingly stitched by hand.',
    history:
      'Embroidery has been a cornerstone of Moroccan women domestic arts for centuries, with techniques and patterns passing from mother to daughter. Each city developed its own distinctive style, and a woman embroidery skill was once a key factor in marriage negotiations. The Fassi style is the most celebrated and was traditionally practiced by women of the aristocratic families.',
    buyingTip:
      'Examine the back of embroidered items: hand embroidery has a neat but slightly irregular reverse, while machine embroidery has perfectly uniform backing. Fes embroidery on fine linen makes elegant tablecloths and napkin sets. Look for cooperatives that support women artisans.',
    priceRange: '100-500 MAD for cushion covers; 500-3000 MAD for large tablecloths',
  },
  {
    name: 'Basket Weaving',
    arabicName: 'صناعة السلال',
    region: 'Nationwide, Rif, Sahara',
    image: '/images/hero-spices.webp',
    description:
      'Basket weaving is one of Morocco oldest and most widespread crafts, practiced across every region using locally available natural materials. In the north and Rif Mountains, artisans weave with palm leaves and doum palm. In the south, date palm fronds are the primary material. Raffia, straw, and esparto grass are also used. Products range from practical household items like bread baskets, storage containers, and shopping bags to decorative wall hangings, lampshades, and fashion accessories that have become popular worldwide.',
    history:
      'Basket weaving predates recorded Moroccan history and is found in archaeological sites dating back thousands of years. Every Berber community had its own weaving traditions, with patterns and techniques adapted to local materials. The craft has experienced a remarkable revival as Moroccan woven bags and home decor items have become global fashion trends.',
    buyingTip:
      'The best woven bags and baskets come from Essaouira, the Rif region, and the Draa Valley. Check the tightness of the weave for quality. Raffia bags from Essaouira with leather handles are the most popular tourist purchase. Flat-woven bread baskets make practical and beautiful souvenirs.',
    priceRange: '30-200 MAD for small baskets; 100-500 MAD for woven bags with leather trim',
  },
  {
    name: 'Calligraphy & Illumination',
    arabicName: 'الخط والزخرفة',
    region: 'Fes, Meknes, Marrakech',
    image: '/images/art-moroccan-calligraphy.webp',
    description:
      'Arabic calligraphy in Morocco is a refined visual art practiced by master calligraphers (khattatine) who train for decades to achieve the flowing perfection of Maghrebi script, a distinctive North African calligraphic style with rounded, sweeping forms. Moroccan illumination (tezhib) accompanies calligraphy with intricate geometric and floral borders painted in gold leaf, lapis lazuli blue, and vegetable-based pigments. Together, these arts adorn Qurans, royal decrees, architectural inscriptions, and decorative panels found in mosques, palaces, and madrasas throughout the kingdom.',
    history:
      'The Maghrebi script developed in North Africa from the 10th century onward, diverging from the angular Kufic styles of the eastern Islamic world into a distinctive cursive form. Fes became the preeminent center of calligraphic art after the founding of the University of al-Qarawiyyin in 859 CE, the oldest continuously operating university in the world. Royal workshops (dar al-makhzen) maintained the highest standards, and today UNESCO recognizes Moroccan calligraphy as part of the broader Intangible Cultural Heritage of Arabic calligraphy.',
    buyingTip:
      'Seek out calligraphy studios in the Fes medina near the al-Qarawiyyin mosque for authentic pieces. Hand-lettered works on handmade paper or vellum are far more valuable than printed reproductions. Ask to see the calligrapher work in progress as proof of authenticity. Custom commissions of names or phrases make deeply personal souvenirs.',
    priceRange: '200-1000 MAD for small framed pieces; 2,000-15,000+ MAD for illuminated manuscripts',
    unescoStatus: 'Part of UNESCO-recognized Arabic Calligraphy heritage',
  },
  {
    name: 'Textile Dyeing',
    arabicName: 'صباغة النسيج',
    region: 'Marrakech, Fes, Ouarzazate',
    image: '/images/hero-fes-tanneries.webp',
    description:
      'The dyers souk (souk des teinturiers) is one of the most visually spectacular sights in any Moroccan medina. Master dyers (sabbaghin) transform raw wool, cotton, and silk using an ancient palette of natural dyes extracted from plants, minerals, and insects. Saffron yields brilliant yellow, indigo produces deep blue, pomegranate rind creates gold, henna gives warm orange, and cochineal insects produce vivid crimson. The freshly dyed skeins of yarn are hung to dry on poles and lines above the narrow alleyways, creating cascading rainbows of color that have become iconic images of Morocco.',
    history:
      'Natural textile dyeing in Morocco predates the Arab conquest, with Berber communities using local plants for millennia. The dyers guild in Fes was one of the most prestigious medieval trade organizations, with closely guarded secret formulas for color permanence. The introduction of synthetic dyes in the 19th century nearly destroyed the traditional craft, but a growing appreciation for natural, sustainable processes has sparked a significant revival, particularly among luxury textile producers and eco-conscious cooperatives.',
    buyingTip:
      'Visit the dyers souk in Marrakech (near the Mouassine quarter) to see the process firsthand. When buying naturally dyed textiles, rub a damp white cloth on the fabric: natural dyes show minimal color transfer after proper fixing, while cheap synthetic dyes bleed immediately. Naturally dyed goods have subtler, more nuanced colors compared to the harsh brightness of synthetic dyes.',
    priceRange: '100-500 MAD for naturally dyed scarves; 300-2000 MAD for dyed wool skeins and textiles',
  },
  {
    name: 'Musical Instrument Making',
    arabicName: 'صناعة الآلات الموسيقية',
    region: 'Fes, Tetouan, Essaouira',
    image: '/images/art-gnawa-music.webp',
    description:
      'Morocco has a rich tradition of handcrafting musical instruments that are central to the country diverse musical heritage. The oud (a pear-shaped stringed instrument), the guembri (a three-stringed bass lute sacred to Gnawa musicians), the bendir (a large frame drum), and the rebab (a single-stringed fiddle) are all built by specialized luthiers using centuries-old techniques. Each instrument requires specific tonewoods, animal skins, and gut strings, with the guembri traditionally made from a single carved piece of walnut or mahogany covered with dromedary camel skin.',
    history:
      'Musical instrument making in Morocco reflects the country position at the crossroads of Arab, Berber, Andalusian, and Sub-Saharan African musical traditions. The guembri is sacred to the Gnawa Brotherhood, whose spiritual music traditions were inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity in 2019. Andalusian-tradition instruments like the oud and rebab arrived with refugees from Islamic Spain, while drums and percussion instruments have deep Berber and African roots.',
    buyingTip:
      'The best guembris come from Essaouira, the spiritual home of Gnawa music. For ouds, visit the instrument makers near Bab Boujloud in Fes. Always play or listen to the instrument before buying; a well-made instrument has a warm, resonant tone. Mass-produced tourist versions lack proper resonance and are not suitable for actual performance.',
    priceRange: '300-1500 MAD for bendirs and small drums; 1,500-8,000+ MAD for quality ouds and guembris',
    unescoStatus: 'Gnawa instrument traditions recognized by UNESCO (2019)',
  },
  {
    name: 'Gebs (Carved Plaster)',
    arabicName: 'الجبص',
    region: 'Fes, Marrakech, Meknes',
    image: '/images/detail-zellige-pattern.webp',
    description:
      'Gebs is the Moroccan art of hand-carved decorative plasterwork that transforms walls, ceilings, arches, and columns into lace-like masterpieces of geometric and arabesque beauty. Working with freshly applied wet plaster, artisans use small chisels and hammers to carve intricate patterns before the material sets, requiring exceptional speed, precision, and memorized pattern knowledge. The finished surface is often whitewashed or painted in subtle earth tones, creating a layered, three-dimensional effect that plays magnificently with natural light and shadow.',
    history:
      'Carved plaster (gebs or gypsum work) has been a defining element of Moroccan architecture since the Almoravid period in the 11th century. The technique reached extraordinary refinement in the Marinid-era madrasas of Fes, particularly the Bou Inania and al-Attarine madrasas, where every surface is covered in interlocking carved plaster arabesques. The craft is typically combined with zellige tilework below and carved cedar woodwork above, forming the three tiers of classical Moroccan interior decoration.',
    buyingTip:
      'While large-scale gebs work is architectural, small carved plaster panels, mirror frames, and decorative medallions are available in the souks of Fes and Marrakech. Visit the restoration workshops near the historical madrasas in Fes to see gebs artisans at work. Authentic pieces are carved from real plaster and have a soft, chalky weight, unlike lightweight resin reproductions.',
    priceRange: '150-800 MAD for small decorative panels; 500-3000 MAD for mirror frames and larger pieces',
  },
];

/* =====================================================================
   WHERE TO BUY - BEST SOUKS BY CITY
   ===================================================================== */

const soukGuide = [
  {
    city: 'Marrakech',
    souk: 'Jemaa el-Fnaa & Surrounding Souks',
    description: 'The largest and most famous souk complex in Morocco. Organized by trade: leather, spices, metalwork, carpets, and babouches each have their own alley. The Souk Semmarine is the main artery. Expect aggressive sellers and higher starting prices.',
    bestFor: ['Leather goods', 'Lanterns', 'Babouches', 'Spices', 'Carpets'],
  },
  {
    city: 'Fes',
    souk: 'Fes el-Bali Medina',
    description: 'The world largest car-free urban area and Morocco most authentic souk experience. Artisans still work in centuries-old workshops. The pottery quarter (Ain Nokbi), tanneries (Chouara), and metalwork square (Place Seffarine) are highlights. Better craftsmanship and lower prices than Marrakech.',
    bestFor: ['Ceramics', 'Leather', 'Zellige', 'Embroidery', 'Metalwork'],
  },
  {
    city: 'Essaouira',
    souk: 'Medina & Skala Artisan Market',
    description: 'A more relaxed, less pressured shopping experience than Marrakech or Fes. Essaouira specializes in thuya woodwork, silver jewelry, and woven goods. The woodworking cooperative near the Skala de la Ville offers fair fixed prices.',
    bestFor: ['Thuya wood', 'Silver jewelry', 'Woven bags', 'Argan oil', 'Art galleries'],
  },
  {
    city: 'Chefchaouen',
    souk: 'Medina Shops & Uta el-Hammam Square',
    description: 'The Blue City medina is compact and charming, with shops specializing in locally made woven blankets, goat cheese, and unique blue-washed pottery and crafts not found elsewhere in Morocco.',
    bestFor: ['Woven blankets', 'Local cheese', 'Painted crafts', 'Photography'],
  },
  {
    city: 'Tiznit',
    souk: 'Souk of the Silversmiths',
    description: 'Morocco capital of silver jewelry. The dedicated souk of silversmiths inside the old walls offers the widest selection and best prices for Berber silver jewelry in the country. Less touristy and more authentic than buying silver in Marrakech.',
    bestFor: ['Silver jewelry', 'Berber ornaments', 'Antique pieces'],
  },
  {
    city: 'Safi',
    souk: 'Colline des Potiers (Potters Hill)',
    description: 'An entire hillside dedicated to pottery production, where you can watch artisans at every stage from throwing to painting to firing. Wholesale prices are the lowest in Morocco for ceramics. A must-visit for pottery lovers.',
    bestFor: ['Pottery', 'Ceramics', 'Tagine pots', 'Decorative tiles'],
  },
  {
    city: 'Meknes',
    souk: 'Souk Nejjarine & Bab Mansour Area',
    description: 'Less touristy than Marrakech and Fes, Meknes souks offer excellent value and a more relaxed shopping experience. The city is known for its Damascene metalwork (inlaid silver on steel) and quality leather goods.',
    bestFor: ['Damascene metalwork', 'Leather', 'Textiles', 'Food products'],
  },
  {
    city: 'Ouarzazate',
    souk: 'Taourirt Kasbah Market',
    description: 'The gateway to the Sahara Desert has a small but interesting market near the Taourirt Kasbah specializing in Berber crafts from the Draa and Dades valleys. Expect desert rose minerals, Berber carpets, and nomadic jewelry.',
    bestFor: ['Berber carpets', 'Desert crafts', 'Nomadic jewelry', 'Fossils'],
  },
  {
    city: 'Rabat',
    souk: 'Rue des Consuls & Kasbah des Oudaias',
    description: 'The Rue des Consuls in the Rabat medina is a long, covered market street with high-quality carpet and antique dealers. The Kasbah des Oudaias area has upscale craft boutiques. Prices are fair and bargaining is less aggressive than in Marrakech.',
    bestFor: ['Carpets', 'Antiques', 'Embroidery', 'Upscale crafts'],
  },
  {
    city: 'Tangier',
    souk: 'Grand Socco & Petit Socco',
    description: 'Tangier souks reflect the city international heritage with a mix of Moroccan crafts and European-influenced goods. The Grand Socco is the main market area, while the Petit Socco in the medina has atmospheric cafes and smaller artisan shops.',
    bestFor: ['Textiles', 'Spices', 'Antiques', 'Leather goods'],
  },
];

/* =====================================================================
   BARGAINING TIPS
   ===================================================================== */

const bargainingTips = [
  {
    title: 'Research Prices Before You Shop',
    description:
      'Visit fixed-price cooperative shops first to establish baseline prices for the items you want. This gives you a realistic reference point for souk negotiations. Government-run Ensemble Artisanal shops in major cities sell crafts at regulated prices, providing excellent benchmarks.',
  },
  {
    title: 'Start at 30-40% of the Asking Price',
    description:
      'The initial asking price in a souk is typically inflated by 2-3 times the expected selling price. Begin your counter-offer at roughly one-third of what the vendor asks. This leaves room for both sides to negotiate toward a fair middle ground, usually 50-70% of the first price.',
  },
  {
    title: 'Never Show Excessive Enthusiasm',
    description:
      'If a seller senses you are desperate to buy, the price will stay high. Browse casually, show mild interest, and compare items at multiple shops before committing. The more indifferent you appear, the more leverage you have in the negotiation.',
  },
  {
    title: 'Walk Away Strategically',
    description:
      'Walking away is the most powerful bargaining tool. If you cannot reach a price you are comfortable with, politely thank the seller and leave. If your offered price was reasonable, the seller will often call you back and accept. If they do not, you now know their floor price for the next shop.',
  },
  {
    title: 'Buy Multiple Items for Better Deals',
    description:
      'Purchasing several items from the same vendor significantly increases your bargaining power. Sellers are much more willing to reduce per-item prices when they see a larger total sale. Group your purchases and negotiate a package price.',
  },
  {
    title: 'Keep It Friendly and Respectful',
    description:
      'Bargaining in Morocco is a social exchange, not a confrontation. Smile, make conversation, accept the offered mint tea, and negotiate with good humor. Aggressive or disrespectful bargaining will not get you a better price and sours the experience for everyone.',
  },
  {
    title: 'Carry Small Bills and Exact Change',
    description:
      'Once you agree on a price, pay with the exact amount or close to it. Handing over a large bill makes it psychologically harder for both parties if the seller claims they quoted a different price. Keep your money discreetly organized, and avoid flashing large amounts of cash.',
  },
  {
    title: 'Know When Not to Bargain',
    description:
      'Fixed-price cooperatives, supermarkets, pharmacies, and restaurants with printed menus do not bargain. In very small village shops, where prices are already minimal, aggressive bargaining is inappropriate. Use your judgment: if the initial price seems fair and the item is handmade, the difference of 20-30 MAD matters more to the artisan than to you.',
  },
];

/* =====================================================================
   AUTHENTICITY MARKERS
   ===================================================================== */

const authenticityMarkers = [
  {
    title: 'Examine the Back and Inside',
    authentic: 'Slight irregularities, hand-stitching, natural imperfections that show individual craftsmanship.',
    massProduced: 'Perfectly uniform, machine-stitched seams, identical pieces with zero variation.',
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: 'Check the Materials',
    authentic: 'Natural materials: real leather (soft, warm to touch), genuine wool (smells faintly of lanolin), solid wood, hand-forged metal.',
    massProduced: 'Synthetic materials: plastic-coated faux leather, acrylic yarn, MDF wood, stamped metal.',
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: 'Weight and Feel',
    authentic: 'Heavier than expected (solid wood, real brass, thick leather). Has a substantial, quality feel in hand.',
    massProduced: 'Surprisingly lightweight (hollow metal, thin materials, plastic components). Feels flimsy.',
    icon: <HandCoins className="w-5 h-5" />,
  },
  {
    title: 'Ask About the Artisan',
    authentic: 'Seller can tell you who made it, where it was made, and explain the technique. Some shops display artisan photos.',
    massProduced: 'Seller is vague about origins. "It comes from the factory" or evasive answers about craftsmanship.',
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: 'Price as Quality Indicator',
    authentic: 'Fair but not cheap. A genuine hand-knotted Berber rug cannot cost 200 MAD. If the price seems too good, it is.',
    massProduced: 'Suspiciously cheap for what it claims to be. Mass production makes low prices possible but quality impossible.',
    icon: <Coins className="w-5 h-5" />,
  },
  {
    title: 'Visit the Workshop',
    authentic: 'If possible, visit the workshop where items are made. Seeing the production process is the ultimate proof of authenticity.',
    massProduced: 'Seller discourages workshop visits or claims everything is made "in the back" without evidence.',
    icon: <Store className="w-5 h-5" />,
  },
];

/* =====================================================================
   SHIPPING GUIDE
   ===================================================================== */

const shippingTips = [
  {
    title: 'Use Established Shipping Companies',
    description:
      'For large items like carpets, furniture, and fragile ceramics, use international shipping companies such as DHL, FedEx, or the Moroccan postal service (La Poste Maroc, specifically their Amana service). Many souk sellers have established relationships with shipping agents and can arrange door-to-door delivery to your home country. Get everything in writing, including tracking numbers.',
  },
  {
    title: 'Negotiate Shipping Separately from Purchase Price',
    description:
      'Always negotiate the item price and the shipping cost as separate line items. Some sellers inflate the shipping cost to recover discounts given on the product. Get shipping quotes from independent companies to verify. For carpets, expect shipping costs of 300-800 MAD to Europe and 500-1200 MAD to North America.',
  },
  {
    title: 'Pack Fragile Items Yourself or Supervise',
    description:
      'Moroccan ceramics, lanterns, and zellige pieces are fragile. If you are carrying items in your luggage, ask the seller to wrap them thoroughly in bubble wrap and newspaper. For shipped items, ensure proper crating for ceramics and lanterns. Consider buying packing materials in the medina hardware shops.',
  },
  {
    title: 'Understand Customs Regulations',
    description:
      'Research your home country import regulations before buying. Most countries allow personal-use quantities of crafts duty-free. The EU allows up to 430 euros in goods duty-free for air travelers. The US allows $800. Leather goods, plant-based products (argan oil, straw baskets), and antiques may have specific import requirements. Keep all receipts.',
  },
  {
    title: 'Carpet Shipping Considerations',
    description:
      'Large Berber carpets can be vacuum-compressed and shipped flat in waterproof packaging. Reputable carpet dealers offer worldwide shipping and often have experience with customs documentation for your specific country. Ask for a certificate of origin and a detailed receipt describing the carpet materials, dimensions, and production method.',
  },
  {
    title: 'Carry-On vs Checked Luggage',
    description:
      'Small items like babouches, silver jewelry, argan oil (in checked luggage due to liquid restrictions), small ceramics, embroidered textiles, and spices are easy to pack in your suitcase. Wrap fragile items in your clothing for protection. Brass lanterns can often fit in checked luggage if properly padded. Always keep receipts accessible for airport security and customs.',
  },
];

/* =====================================================================
   MASTER ARTISAN PROFILES
   ===================================================================== */

interface Artisan {
  name: string;
  craft: string;
  city: string;
  workshop: string;
  experience: string;
  description: string;
  image: string;
  specialty: string;
}

const masterArtisans: Artisan[] = [
  {
    name: 'Haj Ahmed Lahlou',
    craft: 'Zellige Tilework',
    city: 'Fes',
    workshop: 'Atelier Lahlou, Derb Ain Azliten, Fes el-Bali',
    experience: '45+ years',
    description:
      'A fourth-generation zellige master (maalem) whose family workshop has been producing tilework since the late 19th century. Haj Ahmed is renowned for his ability to cut the most complex star patterns with sixteen or more points, a skill only a handful of living artisans possess. He has contributed to the restoration of several royal palaces and historic mosques.',
    image: '/images/detail-zellige-mosaic.webp',
    specialty: '16-point star patterns and royal palace restoration',
  },
  {
    name: 'Fatima Ait Benhaddou',
    craft: 'Carpet Weaving',
    city: 'Taznakht, High Atlas',
    workshop: 'Cooperative Feminine Ait Benhaddou, Taznakht',
    experience: '35+ years',
    description:
      'A master weaver and co-founder of one of the first women weaving cooperatives in the High Atlas region. Fatima is celebrated for preserving ancient Ait Ouaouzguite tribal patterns that were at risk of being lost. She trains young women in traditional natural dyeing techniques using pomegranate, henna, saffron, and indigo.',
    image: '/images/art-berber-carpet-weaving.webp',
    specialty: 'Natural dyes and Ait Ouaouzguite tribal patterns',
  },
  {
    name: 'Omar Bennani',
    craft: 'Brass Lantern Making',
    city: 'Marrakech',
    workshop: 'Bennani Cuivres, Souk Haddadine, Marrakech Medina',
    experience: '30+ years',
    description:
      'One of the last master lantern makers in Marrakech who creates every piece entirely by hand, from cutting the brass sheet to piercing the intricate geometric light patterns. His workshop in the blacksmiths souk produces lanterns for luxury riads, international hotels, and private collectors. Omar apprenticed under his uncle and has trained over twenty young artisans.',
    image: '/images/hero-souk-lamps.webp',
    specialty: 'Pierced geometric brass lanterns for luxury interiors',
  },
  {
    name: 'Khadija El Ouazzani',
    craft: 'Fassi Embroidery',
    city: 'Fes',
    workshop: 'Dar Embroidery, Derb Tazi, Fes el-Bali',
    experience: '40+ years',
    description:
      'A National Living Heritage treasure recognized by the Moroccan Ministry of Culture for her mastery of terz fassi, the centuries-old Fes embroidery tradition. Khadija specializes in the demanding technique of reversible stitching, where both sides of the fabric display identical patterns. She leads a small atelier of women artisans producing heirloom-quality tablecloths and ceremonial textiles.',
    image: '/images/art-berber-carpet-weaving.webp',
    specialty: 'Reversible terz fassi embroidery on fine linen',
  },
  {
    name: 'Moulay Hassan Skalli',
    craft: 'Thuya Woodwork',
    city: 'Essaouira',
    workshop: 'Cooperative Artisanale, Skala de la Ville, Essaouira',
    experience: '50+ years',
    description:
      'The eldest active thuya wood master in Essaouira and a founding member of the artisan cooperative near the Skala fortress. Moulay Hassan is famous for his marquetry technique, inlaying thuya burl wood with aromatic cedar, lemon wood, and mother-of-pearl to create chess sets, jewelry boxes, and decorative tables of extraordinary beauty. He has exhibited at craft fairs across Europe.',
    image: '/images/hero-essaouira.webp',
    specialty: 'Multi-wood marquetry with mother-of-pearl inlay',
  },
];

/* =====================================================================
   CRAFT REGIONS & SPECIALTIES
   ===================================================================== */

interface CraftRegion {
  region: string;
  description: string;
  specialties: string[];
  keyCity: string;
  image: string;
}

const craftRegions: CraftRegion[] = [
  {
    region: 'Fes-Meknes',
    description:
      'The undisputed capital of Moroccan craftsmanship, Fes boasts the highest concentration of active artisan workshops in the country. The medina of Fes el-Bali is essentially a living museum of traditional crafts, with entire quarters devoted to single trades. Meknes adds its own specialty of Damascene metalwork.',
    specialties: ['Zellige tilework', 'Ceramics (blue & white)', 'Leather tanning', 'Embroidery', 'Calligraphy', 'Gebs plaster carving', 'Brass and copper work'],
    keyCity: 'Fes',
    image: '/images/hero-fes.webp',
  },
  {
    region: 'Marrakech-Safi',
    description:
      'Marrakech is Morocco commercial craft hub, where artisans produce for both domestic and international markets. The city vast souk complex is the country busiest shopping destination. Safi, on the coast, is the pottery capital where an entire hillside is devoted to ceramic production.',
    specialties: ['Tadelakt plaster', 'Metalwork and lanterns', 'Textile dyeing', 'Safi polychrome pottery', 'Leather babouches', 'Spice blending'],
    keyCity: 'Marrakech',
    image: '/images/hero-marrakech-koutoubia.webp',
  },
  {
    region: 'Souss-Massa & Anti-Atlas',
    description:
      'The southern regions are the heartland of Berber silver jewelry and argan oil production. Tiznit is the historic silversmithing capital, while women cooperatives in the argan forest zone produce the world supply of this precious oil. The region also has strong traditions in indigo textile work and leather.',
    specialties: ['Silver Berber jewelry', 'Argan oil production', 'Indigo textiles', 'Henna art', 'Berber leather goods'],
    keyCity: 'Tiznit',
    image: '/images/hero-spices.webp',
  },
  {
    region: 'Middle & High Atlas',
    description:
      'The Atlas mountain communities are the source of Morocco most prized carpets and textiles. Berber women in remote villages weave rugs with patterns unique to their tribes, creating wearable art that encodes centuries of cultural identity. The town of Taznakht is the carpet-weaving capital.',
    specialties: ['Beni Ourain carpets', 'Boucherouite rugs', 'Kilim weaving', 'Wool spinning', 'Hanbel flat-weave textiles'],
    keyCity: 'Azrou / Taznakht',
    image: '/images/hero-atlas.webp',
  },
  {
    region: 'Essaouira & Atlantic Coast',
    description:
      'The windswept port city of Essaouira has a distinct artisan identity shaped by its Gnawa heritage, Portuguese influences, and the surrounding argan and thuya forests. The city is a magnet for artists, musicians, and woodworkers who give its crafts a creative, bohemian character unlike anywhere else in Morocco.',
    specialties: ['Thuya wood marquetry', 'Gnawa musical instruments', 'Raffia weaving', 'Contemporary art', 'Argan oil cosmetics'],
    keyCity: 'Essaouira',
    image: '/images/hero-essaouira-ramparts.webp',
  },
];

/* =====================================================================
   CRAFT MUSEUMS & CULTURAL CENTERS
   ===================================================================== */

interface Museum {
  name: string;
  city: string;
  description: string;
  highlights: string[];
  admission: string;
}

const craftMuseums: Museum[] = [
  {
    name: 'Dar Batha Museum',
    city: 'Fes',
    description:
      'Housed in a magnificent 19th-century Hispano-Moorish palace, Dar Batha contains the finest collection of traditional Fes craftsmanship. The museum showcases the city artistic heritage through rooms dedicated to each major craft.',
    highlights: ['Antique Fassi blue ceramics', 'Carved cedar woodwork', 'Zellige tilework panels', 'Berber carpets and embroidery', 'Historic astrolabes and metalwork'],
    admission: '20 MAD (free on Fridays)',
  },
  {
    name: 'Musee Nejjarine (Woodwork Museum)',
    city: 'Fes',
    description:
      'Located in a beautifully restored 18th-century fondouk (caravanserai) on the Place Nejjarine, this museum is entirely devoted to Moroccan woodworking traditions. The building itself, with its carved cedar balconies and zellige courtyard, is as impressive as the collection.',
    highlights: ['Historical woodworking tools', 'Carved cedar panels and doors', 'Regional wood craft comparison', 'Reconstructed artisan workshops', 'Rooftop terrace with medina views'],
    admission: '20 MAD',
  },
  {
    name: 'Maison de la Photographie',
    city: 'Marrakech',
    description:
      'While primarily a photography museum, it houses a remarkable collection of vintage photographs documenting Moroccan artisan life from the 1870s to the 1950s, providing invaluable visual history of craft traditions.',
    highlights: ['Vintage artisan photographs', 'Historical craft documentation', 'Berber portrait collection', 'Rooftop cafe with Atlas views'],
    admission: '50 MAD',
  },
  {
    name: 'Dar Si Said Museum (National Museum of Weaving and Carpets)',
    city: 'Marrakech',
    description:
      'A stunning 19th-century palace now serving as the national museum for Moroccan textile and carpet heritage. The collection spans centuries of weaving traditions from every region of the country, displayed in rooms of exceptional architectural beauty.',
    highlights: ['Comprehensive carpet collection by region', 'Antique Berber jewelry', 'Historical weapons and woodwork', 'Marble courtyard with carved plaster', 'Textile dyeing exhibits'],
    admission: '20 MAD',
  },
  {
    name: 'Musee Sidi Mohammed ben Abdallah',
    city: 'Essaouira',
    description:
      'This regional ethnographic museum, set in a former 19th-century riad, documents the arts and crafts of the Essaouira region, including thuya woodwork, musical instruments, and Gnawa culture.',
    highlights: ['Thuya wood craft history', 'Gnawa musical instruments', 'Regional jewelry and textiles', 'Historical photographs of Essaouira artisans'],
    admission: '10 MAD',
  },
  {
    name: 'Borj Nord Arms Museum & Craft Wing',
    city: 'Fes',
    description:
      'A 16th-century Saadian fortress overlooking the Fes medina, Borj Nord houses a world-class arms collection showcasing centuries of Moroccan metalwork, damascening, and weapons craft alongside panoramic views.',
    highlights: ['Damascened swords and daggers', 'Ornate firearms with silver inlay', 'Berber shields and armor', 'Panoramic views of the medina'],
    admission: '20 MAD',
  },
];

/* =====================================================================
   DIY CRAFT WORKSHOPS FOR TOURISTS
   ===================================================================== */

interface Workshop {
  name: string;
  craft: string;
  city: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
}

const diyWorkshops: Workshop[] = [
  {
    name: 'Zellige Tile Workshop Experience',
    craft: 'Zellige Tilework',
    city: 'Fes',
    duration: '3-4 hours',
    price: '400-600 MAD per person',
    description:
      'Learn the ancient art of zellige tile cutting and assembly under the guidance of a master craftsman in a working medina atelier. You will chip your own tile pieces from glazed terracotta squares and assemble a small geometric pattern to take home as a coaster or decorative piece.',
    includes: ['All materials', 'Expert instruction', 'Mint tea', 'Finished piece to take home', 'Workshop tour'],
  },
  {
    name: 'Leather Crafting Atelier',
    craft: 'Leather Work',
    city: 'Marrakech',
    duration: '2-3 hours',
    price: '350-500 MAD per person',
    description:
      'Work with vegetable-tanned Moroccan leather to create your own small leather goods. Learn traditional stitching techniques and simple tooling patterns from a leather artisan in the medina. Projects include coin pouches, bookmarks, or small clutch bags.',
    includes: ['All leather and tools', 'Artisan instruction', 'Finished leather item', 'Tannery viewing access', 'Refreshments'],
  },
  {
    name: 'Pottery Painting Workshop',
    craft: 'Ceramics',
    city: 'Fes / Safi',
    duration: '2-3 hours',
    price: '250-400 MAD per person',
    description:
      'Paint your own Moroccan ceramic plate or bowl using traditional geometric patterns and the iconic cobalt blue glaze. A master painter demonstrates the technique, then guides you through creating your own design. The piece is fired in a wood-burning kiln and can be collected later or shipped.',
    includes: ['Ceramic blank', 'Paints and brushes', 'Expert demonstration', 'Kiln firing', 'Shipping option available'],
  },
  {
    name: 'Carpet Weaving Introduction',
    craft: 'Carpet Weaving',
    city: 'Marrakech / Taznakht',
    duration: '3-5 hours',
    price: '500-800 MAD per person',
    description:
      'Join Berber women weavers at a traditional loom and learn the basics of flat-weave kilim technique. You will card and spin raw wool, learn about natural dyes, and weave a small sample piece on a floor loom. Full-day options include visiting a rural weaving cooperative in the Atlas foothills.',
    includes: ['Loom access', 'Raw wool and dyes', 'Instruction from master weaver', 'Woven sample to keep', 'Traditional Berber lunch (full day)'],
  },
  {
    name: 'Calligraphy & Bookbinding Workshop',
    craft: 'Calligraphy',
    city: 'Fes / Marrakech',
    duration: '2-3 hours',
    price: '300-500 MAD per person',
    description:
      'Discover the art of Arabic calligraphy with a trained calligrapher. Learn to prepare a traditional reed pen (qalam), mix natural inks, and write basic Maghrebi script letterforms. Advanced sessions include gold-leaf illumination borders and traditional bookbinding techniques.',
    includes: ['Reed pen and ink set to keep', 'Handmade paper', 'Expert calligraphy instruction', 'Practice sheets', 'Mint tea and pastries'],
  },
  {
    name: 'Brass Lantern Making',
    craft: 'Metalwork',
    city: 'Marrakech',
    duration: '4-5 hours',
    price: '600-900 MAD per person',
    description:
      'Create your own small pierced brass lantern in the coppersmiths souk. A master metalworker teaches you to cut, shape, and pierce decorative patterns in brass sheet using traditional hand tools. This is one of the most physically engaging and rewarding craft workshops available.',
    includes: ['Brass sheet and tools', 'Master artisan guidance', 'Finished lantern to take home', 'Souk tour of metalworkers quarter', 'Tea ceremony'],
  },
];

/* =====================================================================
   UNESCO INTANGIBLE CULTURAL HERITAGE CRAFTS
   ===================================================================== */

interface UnescoEntry {
  title: string;
  year: string;
  description: string;
  relatedCrafts: string[];
}

const unescoCrafts: UnescoEntry[] = [
  {
    title: 'Gnawa Music & Traditions',
    year: '2019',
    description:
      'The Gnawa spiritual musical tradition, inscribed on the UNESCO list in 2019, encompasses not only music and ritual but also the master craftsmanship of guembri lute making, costume production, and the creation of metal castanets (qraqeb). Essaouira is the epicenter.',
    relatedCrafts: ['Musical instrument making', 'Metalwork (qraqeb castanets)', 'Textile work (Gnawa costumes)'],
  },
  {
    title: 'Mediterranean Diet (Moroccan Dimension)',
    year: '2013',
    description:
      'The Mediterranean diet inscription includes the artisanal food production practices of Morocco, particularly argan oil production, traditional pottery used in tagine cooking, and the handcrafting of couscous utensils and serving ware that form an inseparable part of culinary heritage.',
    relatedCrafts: ['Argan oil production', 'Pottery (tagine pots)', 'Woodwork (serving utensils)'],
  },
  {
    title: 'Arabic Calligraphy: Knowledge, Skills, and Practices',
    year: '2021',
    description:
      'Morocco was among the nations whose calligraphic traditions were recognized in UNESCO multinational inscription of Arabic calligraphy. The Maghrebi script style, the art of tezhib illumination, and traditional ink and paper making are all encompassed.',
    relatedCrafts: ['Calligraphy', 'Paper making', 'Bookbinding', 'Gold-leaf illumination'],
  },
  {
    title: 'Taskiwin, Martial Dance of the Western High Atlas',
    year: '2017',
    description:
      'While primarily a performing art, Taskiwin involves the creation of elaborate costumes, embroidered garments, silver jewelry, and decorated powder horns. The craft of producing Taskiwin regalia represents a convergence of textile, metalwork, and leatherworking traditions.',
    relatedCrafts: ['Embroidery', 'Silver jewelry', 'Leather craft', 'Textile weaving'],
  },
  {
    title: 'Cherry Festival of Sefrou',
    year: '2012',
    description:
      'The annual cherry festival in Sefrou involves traditional craft demonstrations, artisan markets, and the production of ceremonial objects. The event serves as an important marketplace for regional craft traditions of the Middle Atlas.',
    relatedCrafts: ['Basket weaving', 'Embroidery', 'Woodwork', 'Ceramics'],
  },
];

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Paintbrush className="w-5 h-5" />, label: 'Craft Types', value: '16 Traditional', detail: 'Living heritage' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Key Cities', value: 'Fes & Marrakech', detail: 'Artisan capitals' },
  { icon: <Coins className="w-5 h-5" />, label: 'Bargaining', value: 'Start at 30-40%', detail: 'Of asking price' },
  { icon: <Award className="w-5 h-5" />, label: 'UNESCO', value: '5 Inscriptions', detail: 'Intangible heritage' },
  { icon: <Store className="w-5 h-5" />, label: 'Souks', value: '10+ Major Markets', detail: 'Across Morocco' },
  { icon: <GraduationCap className="w-5 h-5" />, label: 'Workshops', value: '6 DIY Classes', detail: 'For tourists' },
];

/* =====================================================================
   PAGE (Server Component)
   ===================================================================== */

export default function CraftsPage() {
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
          <li className="text-text-primary font-medium">Crafts &amp; Artisans</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/detail-zellige-mosaic.webp"
            alt="Moroccan artisan working on traditional zellige tilework in Fes workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Living Heritage
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Crafts &amp; Artisans Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Explore the extraordinary world of Moroccan handcraft traditions. From the geometric precision of zellige tilework to the ancient art of Berber carpet weaving, Morocco living heritage is waiting to be discovered.
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

      {/* Morocco's Living Heritage */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Gem className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Living Heritage
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is one of the last countries on earth where traditional handcraft is not merely preserved in museums but
              thrives as a living, breathing part of daily life. In the labyrinthine medinas of Fes and Marrakech, artisans
              work in workshops that have been in continuous operation for five, eight, even ten centuries, using techniques
              passed from master to apprentice across dozens of generations. The rhythmic hammering of coppersmiths, the
              click-clack of looms, and the patient chipping of zellige tilecutters form the soundtrack of the Moroccan medina.
            </p>
            <p>
              This extraordinary craft heritage is the product of Morocco unique position at the crossroads of Africa, Europe,
              and the Middle East. Berber weaving traditions predating the Roman Empire blend with Arab calligraphic arts,
              Andalusian decorative refinement, Sub-Saharan African design influences, and even echoes of Chinese and Persian
              aesthetics brought by medieval trade routes. The result is an artisan tradition of unparalleled richness and
              diversity, recognized by UNESCO as one of the world most significant intangible cultural heritages.
            </p>
            <p>
              For visitors, Morocco artisan heritage offers some of the most memorable travel experiences available anywhere.
              Whether you are watching a master zellige cutter transform a clay tile into forty perfectly shaped pieces,
              exploring the ancient tanneries of Fes where leather is still dyed in stone vats using medieval techniques, or
              bargaining for a hand-knotted Berber rug in a mountain village, you are participating in living traditions that
              connect the modern world to the very origins of human craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Crafts Guide - 12 Crafts */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Paintbrush className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Crafts Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Sixteen iconic Moroccan crafts, each with centuries of history and a living community of master artisans.
            </p>
          </div>

          <div className="space-y-8">
            {crafts.map((craft, index) => (
              <div
                key={craft.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={craft.image}
                    alt={craft.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--text-primary)]">
                      {craft.region}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                    {craft.name}
                  </h3>
                  <p className="text-xs text-[var(--color-accent)] font-medium mb-3">{craft.arabicName}</p>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                    {craft.description}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3 italic">
                    {craft.history}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                    {craft.unescoStatus && (
                      <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                        <span className="font-semibold text-[var(--color-accent)]">{craft.unescoStatus}</span>
                      </p>
                    )}
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--color-primary)]">Buying tip:</span> {craft.buyingTip}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">Price range:</span> {craft.priceRange}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Buy - Best Souks */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Store className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Buy: Best Souks by City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ten cities, ten distinct shopping experiences. Each Moroccan souk has its own character, specialties, and atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {soukGuide.map((souk) => (
              <div key={souk.city} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {souk.city}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)] font-medium">{souk.souk}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {souk.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-light)]">
                  {souk.bestFor.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-medium"
                    >
                      <Star className="w-2.5 h-2.5" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bargaining Guide */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HandCoins className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Art of Bargaining
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Eight essential tips for successful negotiation in Moroccan souks. Bargaining is expected, respected, and even enjoyed.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {bargainingTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-5 md:p-6 flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5 font-[family-name:var(--font-display)]">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotting Authentic vs Mass-Produced */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Authentic vs Mass-Produced
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Six quality markers to help you distinguish genuine Moroccan handcraft from factory-made imitations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {authenticityMarkers.map((marker) => (
              <div key={marker.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {marker.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {marker.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--color-green)]/5 border border-[var(--color-green)]/15">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)]" />
                      <span className="text-xs font-semibold text-[var(--color-green)] uppercase tracking-wide">Authentic Handmade</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{marker.authentic}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--color-secondary)]/5 border border-[var(--color-secondary)]/15">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-[var(--color-secondary)]" />
                      <span className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide">Mass-Produced</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{marker.massProduced}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Home */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Truck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shipping Your Treasures Home
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical advice on getting your Moroccan craft purchases safely back to your home country.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {shippingTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-5 md:p-6 flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5 font-[family-name:var(--font-display)]">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover Moroccan Craftsmanship?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore our city guides to plan your artisan trail, or browse activities to find guided souk tours and craft workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Craft Workshops
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

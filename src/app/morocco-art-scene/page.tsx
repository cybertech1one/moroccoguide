import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Sparkles,
  MapPin,
  Compass,
  Heart,
  Landmark,
  Building,
  Star,
  Calendar,
  MessageCircle,
  Frame,
  Eye,
  Palette,
  Brush,
  Award,
  ShoppingBag,
  Hotel,
  Pen,
  Scissors,
  Globe,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Art Scene 2026 | Galleries, Street Art & Contemporary Artists',
  description:
    'Explore Morocco vibrant art scene in 2026. Discover top galleries like MACMA, David Bloch, and LOFT Art Gallery. Street art in Marrakech, Casablanca, and Asilah. Famous Moroccan artists, traditional crafts, art festivals, residencies, and where to buy art.',
  keywords: [
    'Morocco art scene',
    'Moroccan contemporary art',
    'art galleries Morocco',
    'MACMA Marrakech',
    'David Bloch Gallery',
    'LOFT Art Gallery Casablanca',
    'Voice Gallery Marrakech',
    'Comptoir des Mines Gallery',
    'Museum of African Contemporary Art',
    'Marrakech street art',
    'Asilah murals',
    'Hassan Hajjaj',
    'Farid Belkahia',
    'Mahi Binebine',
    'Moroccan calligraphy',
    'art festivals Morocco',
    '1-54 art fair Marrakech',
    'Marrakech Biennale',
    'buy art Morocco',
    'art residencies Morocco',
    'traditional Moroccan arts',
    'Morocco art hotels',
  ],
  openGraph: {
    title: 'Morocco Art Scene 2026 | Galleries, Street Art & Contemporary Artists',
    description:
      'Discover Morocco thriving art world: contemporary galleries, street art, traditional crafts, and world-class festivals. From Hassan Hajjaj to Asilah murals, the complete guide to Moroccan art.',
    url: `${BASE_URL}/morocco-art-scene`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful contemporary art gallery interior in Marrakech Morocco with vibrant paintings and sculptures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Art Scene 2026 | Complete Guide',
    description:
      'Top galleries, street art, festivals, famous artists & where to buy art in Morocco. Your complete guide for 2026.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-art-scene` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-art-scene`,
  name: 'Morocco Art Scene 2026 | Galleries, Street Art & Contemporary Artists',
  description:
    'Comprehensive guide to Morocco art scene covering contemporary galleries, street art, traditional crafts, art festivals, famous Moroccan artists, residencies, and buying art. Includes MACMA, David Bloch Gallery, 1-54 art fair, and more.',
  url: `${BASE_URL}/morocco-art-scene`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-art-scene`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Art Scene', item: `${BASE_URL}/morocco-art-scene` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the contemporary art scene like in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has one of Africa most dynamic contemporary art scenes, centered in Marrakech and Casablanca. The country hosts internationally recognized art fairs like 1-54, world-class galleries such as MACMA and David Bloch, and a thriving community of artists blending traditional craft with modern expression. Major institutions like the Mohammed VI Museum of Modern and Contemporary Art in Rabat anchor the national art landscape.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best art galleries in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech top art galleries include MACMA (Museum of African Contemporary Art Al Maaden), David Bloch Gallery in the medina specializing in urban and contemporary art, Voice Gallery featuring emerging Moroccan artists, Comptoir des Mines Gallery in Gueliz, and LOFT Art Gallery. The Yves Saint Laurent Museum also hosts temporary art exhibitions alongside its permanent fashion collection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I see street art in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best street art in Morocco can be found in three main locations: Marrakech where the MB6 Street Art project has transformed walls throughout the medina and Gueliz; Casablanca where large-scale murals appear in the Habous quarter and along Boulevard Mohammed V; and Asilah, a coastal town famous for its annual International Cultural Moussem where artists paint murals on the whitewashed medina walls each summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are the most famous Moroccan artists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notable Moroccan artists include Hassan Hajjaj, known as the "Andy Warhol of Marrakech" for his vibrant pop art photography; Farid Belkahia (1934-2014), a pioneer of modern Moroccan art who worked with copper and leather; Mahi Binebine, a painter and sculptor whose work explores migration and identity; Mohamed Melehi, a founding figure of the Casablanca School; and younger talents like Yassine Mekhnache and Safaa Erruas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy authentic art in Morocco and how much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco offers many opportunities to buy art. Gallery prices for established contemporary artists range from 5,000 MAD to 200,000+ MAD. Emerging artists can be found from 1,000 to 10,000 MAD. Traditional crafts like calligraphy, woodwork, and metalwork are available in souks from 200 MAD. For authenticity, buy directly from galleries, artist studios, or reputable dealers. Always request a certificate of authenticity for higher-value pieces.',
      },
    },
    {
      '@type': 'Question',
      name: 'What art festivals take place in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco hosts several major art events annually. The 1-54 Contemporary African Art Fair takes place each February at La Mamounia in Marrakech, bringing together galleries from across Africa. The Marrakech Biennale (now relaunched as the Marrakech Art Week) showcases international contemporary art. The Asilah International Cultural Moussem each summer transforms the town with murals and exhibitions. The Dak Art Satellite events also extend to Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there art residencies in Morocco for international artists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has a growing number of artist residency programs. Le 18 in Marrakech offers studio space and exhibition opportunities. The Dar al-Ma mun residency near Marrakech provides rural retreat-style residencies. MACMA hosts short-term residencies tied to exhibitions. The Asilah Forum Foundation sponsors artist residencies during its annual festival. International artists typically need to apply 6-12 months in advance, and some programs offer stipends or free accommodation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What traditional Moroccan art forms should I look for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key traditional Moroccan art forms include zellige (geometric mosaic tilework), tadelakt (polished lime plaster), Arabic calligraphy, carved cedarwood (especially doors and ceilings), brass and copper metalwork (lanterns, trays, teapots), Berber carpet weaving with tribal motifs, embroidery from Fes and Meknes, leatherwork from the tanneries, and ceramic arts particularly the blue-and-white pottery of Fes. Many of these living traditions can be observed in workshops throughout medinas.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MAJOR ART GALLERIES
   ═══════════════════════════════════════════════════════════════ */

const majorGalleries = [
  {
    name: 'MACMA (Museum of African Contemporary Art Al Maaden)',
    city: 'Marrakech',
    description: 'Morocco premier contemporary art museum features rotating exhibitions of African and international modern art across a striking modernist building. The permanent collection showcases works by leading Moroccan and pan-African artists, while the sculpture garden provides an outdoor gallery experience amid olive groves.',
    highlight: 'Largest contemporary art collection in North Africa',
    price: 'from 60 MAD',
    icon: Landmark,
  },
  {
    name: 'Comptoir des Mines Gallery',
    city: 'Marrakech',
    description: 'Housed in a converted 1930s Art Deco mining office in Gueliz, this gallery represents a curated roster of established and emerging Moroccan and international artists. The industrial architecture creates a powerful dialogue with the contemporary works on display, from large-scale installations to intimate paintings.',
    highlight: 'Art Deco architecture meets contemporary vision',
    price: 'Free entry',
    icon: Building,
  },
  {
    name: 'David Bloch Gallery',
    city: 'Marrakech',
    description: 'Located in the heart of the medina, David Bloch Gallery is a leading force in Marrakech contemporary art scene, specializing in urban and street-influenced contemporary art. The gallery bridges the gap between international art movements and Moroccan visual culture, representing artists like Giacomo Santiago Rogado and L7m.',
    highlight: 'Urban contemporary art in the ancient medina',
    price: 'Free entry',
    icon: Frame,
  },
  {
    name: 'LOFT Art Gallery',
    city: 'Casablanca',
    description: 'One of Casablanca most prominent contemporary art spaces, LOFT Art Gallery champions emerging and mid-career Moroccan artists working across painting, sculpture, photography, and mixed media. The gallery has been instrumental in building a collector base for Moroccan contemporary art both locally and internationally.',
    highlight: 'Champion of emerging Moroccan talent',
    price: 'Free entry',
    icon: Eye,
  },
  {
    name: 'Voice Gallery',
    city: 'Marrakech',
    description: 'Founded in 2011 in a beautifully renovated riad in the Mouassine quarter, Voice Gallery focuses on contemporary art from Morocco and the wider MENA region. The intimate setting allows for deeply engaging encounters with the art, featuring solo and group exhibitions that rotate every six to eight weeks.',
    highlight: 'Intimate riad gallery in the Mouassine quarter',
    price: 'Free entry',
    icon: Sparkles,
  },
  {
    name: 'Mohammed VI Museum of Modern and Contemporary Art',
    city: 'Rabat',
    description: 'Morocco flagship national art museum, opened in 2014, is the first dedicated modern art institution in the Maghreb. The collection spans Moroccan art from the early 20th century to present day, featuring masters like Mohamed Melehi, Farid Belkahia, and Ahmed Cherkaoui alongside ambitious temporary exhibitions of international scope.',
    highlight: 'North Africa first modern art museum',
    price: 'from 40 MAD',
    icon: Palette,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: STREET ART DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const streetArtDestinations = [
  {
    city: 'Marrakech',
    description: 'The MB6 Street Art project has transformed Marrakech into an open-air gallery. Commissioned murals by international artists adorn walls throughout the medina and the Gueliz neighborhood. Look for works near Bab Doukkala, Rue de la Liberte, and the area around MACMA. Local and international artists including Dotmaster, Okuda San Miguel, and Hendrick Beikirch have left their mark on the Red City.',
    highlights: ['MB6 Street Art Project', 'Bab Doukkala murals', 'Gueliz neighborhood walls', 'Medina hidden works'],
  },
  {
    city: 'Casablanca',
    description: 'Morocco largest city has embraced street art as urban regeneration. The Sbagha Bagha festival has covered entire building facades in the old medina and surrounding neighborhoods with vibrant murals. Boulevard Mohammed V and the Habous quarter feature large-scale works that address social themes, urbanism, and Moroccan identity through contemporary visual language.',
    highlights: ['Sbagha Bagha festival murals', 'Boulevard Mohammed V facades', 'Habous quarter artworks', 'Port area installations'],
  },
  {
    city: 'Asilah',
    description: 'This small Atlantic coastal town has been synonymous with public art since the 1978 founding of the International Cultural Moussem. Every summer, international artists are invited to paint murals on the whitewashed walls of the medina, creating an ever-changing gallery. The result is a picturesque town where art and architecture merge seamlessly against the backdrop of the Atlantic.',
    highlights: ['International Cultural Moussem murals', 'Whitewashed medina walls', 'Annual artist residencies', 'Year-round outdoor gallery'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL ARTS
   ═══════════════════════════════════════════════════════════════ */

const traditionalArts = [
  {
    name: 'Arabic Calligraphy',
    description: 'Moroccan calligraphy encompasses both the Maghrebi script tradition and contemporary interpretations. Master calligraphers work in mosques, madrasas, and private studios, creating works on paper, wood, and plaster. The art form bridges sacred text and visual beauty, with contemporary artists like Lalla Essaydi pushing calligraphy into new realms.',
    where: 'Fes, Marrakech, Meknes',
    icon: Pen,
  },
  {
    name: 'Cedarwood Carving',
    description: 'The intricate geometric and floral patterns carved into cedarwood doors, ceilings, screens, and furniture represent centuries of mathematical and artistic mastery. Workshops in Fes and Essaouira produce everything from traditional architectural elements to contemporary decorative objects, using techniques passed down through master-apprentice lineages.',
    where: 'Fes, Essaouira, Marrakech',
    icon: Scissors,
  },
  {
    name: 'Metalwork and Brass',
    description: 'Moroccan metalworkers create lanterns, trays, teapots, door knockers, and decorative objects from brass, copper, and silver. The hammering, engraving, and inlay techniques produce objects of extraordinary beauty. The brass souks of Marrakech and Fes remain active workshops where artisans shape metal by hand.',
    where: 'Marrakech, Fes, Tiznit',
    icon: Star,
  },
  {
    name: 'Embroidery and Textiles',
    description: 'Each Moroccan city has its own embroidery tradition. Fes is renowned for its delicate silk thread work on fine linen, Rabat for its cross-stitch patterns, and Meknes for its bold geometric designs. These textile arts are preserved by women artisans and cooperatives, with pieces ranging from tablecloths and cushion covers to ceremonial garments.',
    where: 'Fes, Rabat, Meknes, Sale',
    icon: Heart,
  },
  {
    name: 'Zellige Tilework',
    description: 'The art of zellige involves chipping individual tiles by hand from glazed terracotta squares, then assembling thousands of geometric pieces into intricate mosaic patterns. Each pattern is mathematically precise, with some designs containing over 16 shapes. The tradition is centered in Fes where multi-generational workshops supply mosques, palaces, and homes across Morocco.',
    where: 'Fes, Meknes, Marrakech',
    icon: Frame,
  },
  {
    name: 'Tadelakt Plaster',
    description: 'This ancient lime-based plastering technique creates a waterproof, polished surface with a soft, luminous sheen. Originally used in hammams and riads, tadelakt has gained international recognition in luxury design. Master craftsmen apply layers of lime plaster mixed with pigments, then burnish the surface with river stones and treat it with olive oil soap.',
    where: 'Marrakech, Fes, Essaouira',
    icon: Brush,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ART FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const artFestivals = [
  {
    name: '1-54 Contemporary African Art Fair',
    location: 'Marrakech (La Mamounia)',
    timing: 'February annually',
    description: 'The premier African art fair brings together galleries from across the continent and diaspora each February at the iconic La Mamounia hotel. Founded in 2013 with editions in London and New York, the Marrakech edition launched in 2018 and has become a cornerstone of the global art calendar, with talks, performances, and special projects alongside gallery presentations.',
  },
  {
    name: 'Marrakech Biennale / Art Week',
    location: 'Various venues, Marrakech',
    timing: 'Spring (biennial)',
    description: 'Originally launched in 2005, the Marrakech Biennale brought international contemporary art to venues across the city. Now evolved into Marrakech Art Week, it coordinates exhibitions, gallery openings, studio visits, and cultural programming across the city, drawing collectors, curators, and art lovers from around the world.',
  },
  {
    name: 'Asilah International Cultural Moussem',
    location: 'Asilah',
    timing: 'July-August annually',
    description: 'Running since 1978, this pioneering festival transforms the whitewashed walls of Asilah medina into an open-air gallery. International artists create murals, alongside a program of exhibitions, concerts, poetry readings, and cultural seminars. The moussem has made Asilah one of Morocco most culturally significant small towns.',
  },
  {
    name: 'Jidar Street Art Festival',
    location: 'Rabat',
    timing: 'Spring annually',
    description: 'Rabat annual street art festival invites local and international urban artists to create large-scale murals across the capital city. The festival has transformed entire neighborhoods, making Rabat an increasingly important destination for street art alongside Casablanca and Marrakech.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMOUS ARTISTS
   ═══════════════════════════════════════════════════════════════ */

const famousArtists = [
  {
    name: 'Hassan Hajjaj',
    era: 'b. 1961, Larache',
    description: 'Known as the "Andy Warhol of Marrakech," Hajjaj creates vibrant pop art photographs and installations that blend Moroccan street culture with global consumerism. His portraits, framed in recycled tin cans and fabric, have been exhibited at the V&A, Guggenheim, and across the world. His Riad Yima in the Marrakech medina serves as gallery, shop, and cafe.',
    medium: 'Photography, Installation, Mixed Media',
  },
  {
    name: 'Farid Belkahia',
    era: '1934-2014, Marrakech',
    description: 'A towering figure of modern Moroccan art, Belkahia moved away from easel painting to create works on copper and treated leather, incorporating Berber symbols, henna motifs, and organic materials. As director of the Ecole des Beaux-Arts in Casablanca in the 1960s, he helped forge a distinctly Moroccan modernism rooted in local traditions rather than European models.',
    medium: 'Copper, Leather, Mixed Media',
  },
  {
    name: 'Mahi Binebine',
    era: 'b. 1959, Marrakech',
    description: 'A celebrated painter, sculptor, and novelist, Binebine work explores themes of migration, exile, and human suffering with raw emotional power. His paintings feature distorted, entangled human forms rendered in earth tones. His work is held by the Guggenheim, the Museum of Modern Art in Paris, and numerous private collections. He returned to Marrakech after years in Paris and New York.',
    medium: 'Painting, Sculpture, Literature',
  },
  {
    name: 'Mohamed Melehi',
    era: '1936-2020, Asilah',
    description: 'A co-founder of the Casablanca School and a driving force behind the Asilah Cultural Moussem, Melehi signature flame-like undulating forms became icons of Moroccan modernism. Trained in Rome, Paris, and New York, he synthesized international abstraction with Moroccan decorative arts, creating a visual language that inspired generations of Moroccan artists.',
    medium: 'Painting, Graphic Design, Murals',
  },
  {
    name: 'Lalla Essaydi',
    era: 'b. 1956, Marrakech',
    description: 'Working primarily in large-format photography, Essaydi challenges Western and Arab perceptions of Muslim women. Her striking images feature women in draped white garments covered in Arabic calligraphy, set within traditional Moroccan architectural spaces. Her work merges Islamic calligraphic tradition with contemporary feminist discourse.',
    medium: 'Photography, Calligraphy',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ART RESIDENCIES
   ═══════════════════════════════════════════════════════════════ */

const artResidencies = [
  {
    name: 'Le 18',
    location: 'Marrakech',
    description: 'An independent art space in the medina offering studio space, exhibition opportunities, and a residency program for international artists. Le 18 fosters cross-cultural dialogue and supports experimental practices across visual art, performance, and sound.',
    duration: '1-3 months',
  },
  {
    name: 'Dar al-Ma\'mun',
    location: 'Near Marrakech',
    description: 'A rural artist retreat set in a traditional farmstead surrounded by olive groves and gardens. The residency provides accommodation, studio space, and a contemplative environment for artists, writers, and thinkers to develop new work away from urban distractions.',
    duration: '2-8 weeks',
  },
  {
    name: 'MACMA Artist Residency',
    location: 'Marrakech',
    description: 'Linked to the MACMA museum, this residency program supports artists working in contemporary visual art. Residents gain access to the museum facilities, professional networks, and the opportunity to exhibit their work in one of North Africa leading art institutions.',
    duration: '4-12 weeks',
  },
  {
    name: 'Asilah Forum Foundation',
    location: 'Asilah',
    description: 'Connected to the International Cultural Moussem, the foundation sponsors artist residencies during the annual summer festival. Artists create murals and installations in public spaces, engaging directly with the town architecture and its community.',
    duration: 'July-August (festival period)',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUYING ART
   ═══════════════════════════════════════════════════════════════ */

const buyingArtTips = [
  'Established galleries provide certificates of authenticity, provenance documentation, and can arrange international shipping for purchased works.',
  'For contemporary art, expect prices from 5,000 MAD for emerging artists up to 200,000+ MAD for established names. Gallery prices are generally fixed and non-negotiable.',
  'Souk art stalls sell decorative paintings, calligraphy, and traditional crafts from 200 MAD. Bargaining is expected here and prices can typically be negotiated down by 30-50%.',
  'Visit artist studios directly for unique pieces and the best prices. Many artists in Marrakech and Essaouira welcome studio visits by appointment.',
  'The Ensemble Artisanal (government-run craft cooperatives) in each major city sells quality traditional art at fixed, fair prices without the need to negotiate.',
  'For shipping artwork internationally, galleries can arrange crating and delivery. For souk purchases, reliable shipping services are available in Marrakech and Casablanca.',
  'Keep receipts for customs purposes. Works valued over 10,000 MAD may require an export certificate from the Ministry of Culture to leave Morocco.',
  'Art auctions by houses like Artcurial Casablanca offer another avenue to acquire significant Moroccan works with verified provenance.',
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ART HOTELS
   ═══════════════════════════════════════════════════════════════ */

const artHotels = [
  {
    name: 'Royal Mansour',
    city: 'Marrakech',
    description: 'This palace hotel curates museum-quality exhibitions throughout its public spaces, with works by major Moroccan and international artists rotating seasonally. The hotel commissions site-specific installations and hosts private viewings during art week.',
    artFocus: 'Rotating museum-quality exhibitions',
  },
  {
    name: 'El Fenn',
    city: 'Marrakech',
    description: 'Co-founded by Vanessa Branson, El Fenn is as much gallery as guesthouse. The riad houses an impressive collection of contemporary Moroccan art, with works adorning every room and communal space. Regular exhibitions and artist events make it a cultural hub.',
    artFocus: 'Contemporary Moroccan art collection',
  },
  {
    name: 'Riad Yima',
    city: 'Marrakech',
    description: 'Hassan Hajjaj personal creative space in the medina functions as boutique guesthouse, gallery, shop, and cafe. Every surface is a canvas for Hajjaj distinctive pop aesthetic, making a stay here an immersive art experience in one of Morocco most recognizable artistic environments.',
    artFocus: 'Hassan Hajjaj immersive pop art space',
  },
  {
    name: 'La Mamounia',
    city: 'Marrakech',
    description: 'This legendary hotel hosts the annual 1-54 art fair and maintains a permanent collection of Moroccan art throughout its historic interiors and gardens. The property itself, with its Art Deco architecture and Moorish details, is considered a work of art.',
    artFocus: 'Host of 1-54 art fair, permanent collection',
  },
  {
    name: 'Heure Bleue Palais',
    city: 'Essaouira',
    description: 'This elegant riad-hotel in Essaouira medina showcases a carefully curated collection of Moroccan contemporary art. The rooftop terrace and salons display paintings and sculptures by local and national artists, reflecting Essaouira long artistic heritage.',
    artFocus: 'Curated Essaouira artist collection',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ART DISTRICTS & NEIGHBORHOODS
   ═══════════════════════════════════════════════════════════════ */

const artDistricts = [
  {
    name: 'Gueliz, Marrakech',
    description: 'The Ville Nouvelle district of Marrakech is the epicenter of the contemporary gallery scene. Along and around Avenue Mohammed V and Rue de la Liberte, you will find Comptoir des Mines, Galerie 127 (Africa first photography-only gallery), Matisse Art Gallery, and numerous project spaces. Art cafes and concept stores complete the creative ecosystem.',
    bestFor: 'Gallery hopping, contemporary art, photography',
    icon: Building,
  },
  {
    name: 'Mouassine, Marrakech',
    description: 'This historic medina quarter has become home to a cluster of riad-based galleries, including Voice Gallery and several artist-run spaces. The narrow streets between Jemaa el-Fnaa and the Ben Youssef Madrasa hide creative spaces that blend traditional architecture with cutting-edge contemporary art.',
    bestFor: 'Riad galleries, medina art walks, artist studios',
    icon: Eye,
  },
  {
    name: 'Gauthier & Maarif, Casablanca',
    description: 'Casablanca upscale neighborhoods host the city major contemporary galleries, including LOFT Art Gallery, L\'Atelier 21, and Galerie Venise Cadre. The Art Deco architecture of the surrounding streets adds another visual layer to the gallery experience. The nearby Villa des Arts hosts regular exhibitions.',
    bestFor: 'Casablanca galleries, Art Deco architecture, cultural institutions',
    icon: Landmark,
  },
  {
    name: 'Tangier Kasbah & Medina',
    description: 'Tangier storied artistic legacy, from the Beat Generation to contemporary times, lives on in galleries and studios throughout the Kasbah and medina. The Cinemagie Gallery, Galerie Delacroix, and various artist-run spaces continue the tradition of a city that inspired Matisse, Bowles, and Burroughs.',
    bestFor: 'Literary art heritage, independent galleries, bohemian culture',
    icon: BookOpen,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PLANNING TIPS
   ═══════════════════════════════════════════════════════════════ */

const planningTips = [
  'February is the best time for art lovers, coinciding with the 1-54 art fair at La Mamounia and numerous gallery openings across Marrakech.',
  'Most galleries in Gueliz are open Monday to Saturday from 10:00 to 19:00, while medina galleries may keep slightly irregular hours. Always check ahead.',
  'Gallery openings (vernissages) are social events often open to the public. Follow galleries on Instagram for invitations to upcoming events.',
  'Dress smartly-casual for gallery visits. Many galleries are in renovated riads or historic buildings where you may need to remove shoes.',
  'Combine gallery visits with a traditional craft workshop. Several organizations in Marrakech and Fes offer hands-on sessions in calligraphy, zellige, and ceramics.',
  'For serious collectors, consider hiring a local art consultant who can arrange private studio visits and introductions to emerging artists.',
  'Photography is generally welcome in commercial galleries but always ask first. Museums may charge a separate photography fee.',
  'The souks can be overwhelming for art buyers. Visit the Ensemble Artisanal first for fixed-price reference before negotiating in the medina.',
  'Many contemporary artists maintain active social media presences. Research and follow Moroccan artists before your trip to plan studio visits.',
  'Art shipping from Morocco to Europe typically takes 2-3 weeks. To North America, allow 4-6 weeks. Galleries with international experience handle logistics smoothly.',
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into the traditions, customs, and cultural heritage that shape everyday life in Morocco.',
    icon: Globe,
  },
  {
    href: '/morocco-museums',
    title: 'Museums in Morocco',
    description: 'Complete guide to the best museums across Marrakech, Fes, Rabat, and beyond with tickets and hours.',
    icon: Landmark,
  },
  {
    href: '/architecture',
    title: 'Moroccan Architecture',
    description: 'From ancient kasbahs to contemporary design, explore the architectural heritage of Morocco.',
    icon: Building,
  },
  {
    href: '/crafts',
    title: 'Moroccan Crafts & Artisans',
    description: 'Discover the master craftspeople behind Morocco legendary carpets, ceramics, leather, and metalwork.',
    icon: Brush,
  },
  {
    href: '/morocco-film-locations',
    title: 'Morocco Film Locations',
    description: 'Visit the stunning Moroccan landscapes and sets that have starred in Hollywood blockbusters.',
    icon: Eye,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoArtScenePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Vibrant contemporary art gallery in Morocco with colorful paintings and traditional architectural details"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-white/80 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Morocco Art Scene</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 drop-shadow-lg">
            Morocco Art Scene
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From contemporary galleries in Marrakech to ancient calligraphy traditions in Fes, from
            street murals in Casablanca to world-class art fairs &mdash; explore one of Africa
            most vibrant and dynamic art landscapes.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 md:p-8">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              <Palette className="w-7 h-7 inline-block text-[var(--color-accent)] mr-2" />
              A Creative Kingdom
            </h2>
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco art scene has undergone a remarkable transformation over the past two decades.
                What was once a landscape dominated by traditional craftsmanship and tourist-oriented
                paintings has evolved into a globally recognized contemporary art destination. Marrakech,
                in particular, has emerged as a cultural hub rivaling established art capitals, while
                Casablanca, Rabat, and Tangier each contribute their own creative energy.
              </p>
              <p>
                The kingdom unique position at the crossroads of Africa, the Arab world, and Europe
                infuses its art with a distinctive fusion of influences. Contemporary Moroccan artists
                draw equally from Islamic geometric traditions, Amazigh symbolism, French colonial
                history, and the urgent themes of migration, identity, and globalization. This blending
                of ancient craft with modern expression creates art that feels both rooted and boundary-breaking.
              </p>
              <p>
                Whether you are a serious collector attending the 1-54 art fair, a casual admirer
                exploring gallery-hopping in Gueliz, or a traveler discovering street art in the
                medina, Morocco offers an art experience unlike anywhere else on the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Major Galleries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Major Art Galleries &amp; Spaces
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From world-class museums to intimate medina galleries, these are the essential art
            destinations shaping Morocco creative landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {majorGalleries.map((gallery) => {
              const GalleryIcon = gallery.icon;
              return (
                <div key={gallery.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GalleryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {gallery.name}
                      </h3>
                      <span className="text-xs text-[var(--color-accent)] font-medium">
                        <MapPin className="w-3 h-3 inline mr-1" />{gallery.city}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{gallery.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--color-gold)] font-medium flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" /> {gallery.highlight}
                    </span>
                    <span className="text-[var(--text-muted)]">{gallery.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Street Art ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Brush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Street Art &amp; Murals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco cities have become open-air galleries where contemporary street art transforms
            ancient walls into canvases for global artistic expression.
          </p>

          <div className="space-y-6">
            {streetArtDestinations.map((dest) => (
              <div key={dest.city} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <MapPin className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
                  {dest.city}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{dest.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs rounded-full font-medium">
                      <CheckCircle className="w-3 h-3" /> {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traditional Arts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Frame className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Moroccan Arts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Centuries-old art forms that remain living traditions, practiced by master artisans
            in workshops throughout Morocco medinas and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {traditionalArts.map((art) => {
              const ArtIcon = art.icon;
              return (
                <div key={art.name} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ArtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {art.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{art.description}</p>
                  <p className="text-xs text-[var(--color-accent)] font-medium">
                    <MapPin className="w-3 h-3 inline mr-1" />Where to find: {art.where}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Art Festivals ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Art Festivals &amp; Biennales
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Annual and biennial events that bring international attention to Morocco art world
            and draw collectors, curators, and artists from around the globe.
          </p>

          <div className="space-y-6">
            {artFestivals.map((festival) => (
              <div key={festival.name} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    <Sparkles className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
                    {festival.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {festival.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {festival.timing}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{festival.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Famous Artists ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Famous Moroccan Artists
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The visionary artists who have shaped Morocco creative identity and earned
            international recognition for Moroccan contemporary art.
          </p>

          <div className="space-y-6">
            {famousArtists.map((artist) => (
              <div key={artist.name} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {artist.name}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)]">{artist.era}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{artist.description}</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs rounded-full font-medium">
                  <Palette className="w-3 h-3" /> {artist.medium}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Art Residencies ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Art Residencies &amp; Workshops
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Programs welcoming international artists to create, collaborate, and exhibit
            in Morocco inspiring creative environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artResidencies.map((residency) => (
              <div key={residency.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {residency.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {residency.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {residency.duration}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{residency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buying Art ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying Art in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for purchasing artwork, from gallery etiquette and pricing
            to shipping and export regulations.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {buyingArtTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Art Hotels ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hotel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Art Hotels &amp; Riads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Stay surrounded by art in these hotels and riads that double as curated galleries,
            offering immersive creative experiences for culturally minded travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artHotels.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {hotel.name}
                </h3>
                <span className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3" /> {hotel.city}
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{hotel.description}</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-xs rounded-full font-medium">
                  <Star className="w-3 h-3" /> {hotel.artFocus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Art Districts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Art Districts &amp; Neighborhoods
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Navigate Morocco creative neighborhoods where galleries, studios, and art spaces
            cluster together to form vibrant cultural districts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artDistricts.map((district) => {
              const DistrictIcon = district.icon;
              return (
                <div key={district.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DistrictIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {district.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{district.description}</p>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-xs rounded-full font-medium">
                    <Star className="w-3 h-3" /> {district.bestFor}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Planning Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Planning Your Art Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical tips for making the most of Morocco art scene, from timing your visit
            to navigating galleries and collecting artwork.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {planningTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about experiencing the art scene in Morocco.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring Moroccan culture, creativity, and craftsmanship with these essential guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="group">
                  <div className="card-moroccan p-5 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mt-2">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Palette className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Experience Morocco Through Its Art
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            From the pop art portraits of Hassan Hajjaj to the ancient zellige mosaics of Fes,
            from the 1-54 art fair at La Mamounia to the painted walls of Asilah &mdash; Morocco
            art scene is a living canvas where centuries of tradition meet bold contemporary vision.
            Discover the kingdom through the eyes of its artists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/culture"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Moroccan Culture Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-museums"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Museums in Morocco
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Gallery hours, exhibition schedules, and pricing are based on information available as of March 2026.
            Exhibitions rotate frequently and hours may vary during Ramadan and national holidays.
            Seasonal pricing can vary. Always confirm details directly with each venue before visiting.
          </p>
        </div>
      </section>
    </>
  );
}

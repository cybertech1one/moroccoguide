import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Palette,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Ticket,
  Globe,
  BookOpen,
  Brush,
  Frame,
  Landmark,
  Users,
  Calendar,
  ShoppingBag,
  Layers,
  Building2,
  CircleDollarSign,
  GraduationCap,
  HelpCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Art Galleries & Museums Guide 2026 | Contemporary Art, Traditional Craft & Art Scene | CityGuide',
  description:
    'Discover Morocco\'s best art galleries, museums, and contemporary art spaces. From MACMA and Musee Yves Saint Laurent in Marrakech to Mohammed VI Museum in Rabat, plus Casablanca\'s underground art scene, Essaouira galleries, buying tips, art fairs, and residencies.',
  keywords: [
    'morocco art galleries',
    'moroccan contemporary art',
    'marrakech art scene',
    'morocco museums art',
    'MACMA Marrakech',
    'Musee Yves Saint Laurent Marrakech',
    'David Bloch Gallery',
    'Mohammed VI Museum Rabat',
    'Casablanca art scene',
    'Villa des Arts Morocco',
    'Galerie Damgaard Essaouira',
    'moroccan contemporary artists',
    'marrakech biennale',
    '1-54 art fair marrakech',
    'moroccan zellige art',
    'berber textiles art',
    'buying art in morocco',
    'art residencies morocco',
    'tangier art scene',
    'moroccan calligraphy',
    'moroccan ceramics art',
    'street art morocco',
    'art workshops marrakech',
    'traditional moroccan crafts',
  ],
  openGraph: {
    title: 'Morocco Art Galleries & Museums Guide 2026 | CityGuide',
    description:
      'The complete guide to Morocco\'s art scene: galleries in Marrakech, Casablanca, Rabat, Essaouira, and Tangier. Contemporary art spaces, traditional craft, art fairs, buying tips, and residency programs.',
    url: 'https://citytoursmorocco.com/morocco-art-galleries',
    images: [
      {
        url: '/images/art-moroccan-calligraphy.webp',
        width: 1200,
        height: 630,
        alt: 'Moroccan contemporary art gallery with calligraphy and geometric works on display',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Art Galleries & Museums Guide 2026',
    description:
      'Best galleries, museums, and contemporary art spaces across Morocco. Marrakech, Casablanca, Rabat, Essaouira, and Tangier art scenes covered.',
    images: ['/images/art-moroccan-calligraphy.webp'],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-art-galleries' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelGuide',
      '@id': 'https://citytoursmorocco.com/morocco-art-galleries#guide',
      name: 'Morocco Art Galleries & Museums Guide 2026',
      description:
        'Comprehensive guide to Morocco\'s best art galleries, museums, contemporary art spaces, traditional craft, art fairs, buying tips, and residency programs across Marrakech, Casablanca, Rabat, Essaouira, and Tangier.',
      url: 'https://citytoursmorocco.com/morocco-art-galleries',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
      about: {
        '@type': 'Thing',
        name: 'Art and Culture in Morocco',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://citytoursmorocco.com/morocco-art-galleries#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best art gallery in Marrakech?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MACMA (Musee d\'Art et de Culture de Marrakech) and Musee Yves Saint Laurent are the two most significant. MACMA focuses on Orientalist and modern Moroccan art, while YSL Museum showcases fashion alongside rotating contemporary exhibitions. David Bloch Gallery is the top pick for cutting-edge street art and contemporary work.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do Morocco museum tickets cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Museum entry in Morocco ranges from 10 MAD to 70 MAD. Musee Yves Saint Laurent charges 100 MAD (around 10 USD). Jardin Majorelle costs 150 MAD for the garden plus 30 MAD for the Berber Museum. Mohammed VI Museum of Modern Art in Rabat is 40 MAD. Many smaller galleries are free to enter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a contemporary art scene in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco has one of Africa\'s most active contemporary art scenes. Marrakech hosts the 1-54 Contemporary African Art Fair each February. Casablanca\'s L\'Uzine and Le Cube are thriving independent spaces. Artists like Hassan Hajjaj, Mahi Binebine, and Lalla Essaydi have gained international recognition. The Mohammed VI Museum in Rabat is the largest modern art museum on the African continent.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I buy authentic Moroccan art and ship it home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Established galleries in Marrakech and Casablanca handle international shipping regularly. Expect to pay from 2,000 MAD for emerging artist prints up to 200,000+ MAD for established names. Galleries provide certificates of authenticity and can arrange secure crating and shipping via DHL or specialist art couriers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What traditional art forms should I look for in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The five major traditional art forms are: zellige (geometric mosaic tilework), calligraphy (Arabic and Amazigh scripts), Berber textiles (Beni Ourain, Boucherouite, and kilim rugs), leatherwork (especially from Fes tanneries), and hand-painted ceramics from Fes and Safi. Wood carving (zouak) and metalwork (brass and copper) are also significant traditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'When is the best time to visit Morocco for art events?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'February is peak season thanks to the 1-54 Contemporary African Art Fair in Marrakech. The Marrakech Biennale (when held) typically runs in spring. October through April sees the densest gallery programming across all cities. Summer months (July-August) are quieter as many gallery owners travel, though Essaouira\'s Gnaoua Festival in June draws creative crowds.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there art residencies in Morocco open to international artists?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Several residencies welcome international applicants. Le 18 in Marrakech, Dar al-Ma\'mun near the Haouz Plain, and the Asilah Forum Foundation are among the most established. Residencies typically last 4-8 weeks, and many provide studio space, accommodation, and a modest stipend. Applications usually open 6-12 months in advance.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   MARRAKECH GALLERIES DATA
   ═══════════════════════════════════════════════════════════════ */

interface Gallery {
  name: string;
  location: string;
  focus: string;
  highlight: string;
  price: string;
  hours: string;
}

const marrakechGalleries: Gallery[] = [
  {
    name: 'MACMA (Musee d\'Art et de Culture de Marrakech)',
    location: 'Place du 16 Novembre, Gueliz',
    focus: 'Orientalist paintings, modern Moroccan art, and photography. The permanent collection traces European artists\' fascination with Morocco from the 19th century through mid-20th century, alongside works by pioneering Moroccan modernists.',
    highlight: 'The Jacques Majorelle room contains original paintings by the French artist who designed the famous Majorelle Garden, plus rare photographs of early 20th-century Marrakech.',
    price: 'from 50 MAD',
    hours: 'Tue-Sun: 10:00-18:00, closed Monday',
  },
  {
    name: 'Musee Yves Saint Laurent Marrakech (mYSLm)',
    location: 'Rue Yves Saint Laurent, Gueliz',
    focus: 'Fashion design, haute couture archives, and rotating contemporary exhibitions. The Studio KO-designed building itself is a masterwork of terracotta-clad architecture inspired by the warp and weft of fabric.',
    highlight: 'The permanent exhibition rotates 50 of YSL\'s 5,000 garments on a biannual basis, displayed in climate-controlled galleries alongside sketches and accessories. The temporary exhibition hall hosts major international shows.',
    price: 'from 100 MAD (students 50 MAD)',
    hours: 'Tue-Sun: 10:00-18:00, closed Monday',
  },
  {
    name: 'Jardin Majorelle & Berber Museum',
    location: 'Rue Yves Saint Laurent, Gueliz',
    focus: 'Amazigh cultural heritage displayed inside the cobalt-blue Art Deco studio built by Jacques Majorelle in 1931. The collection spans jewelry, textiles, weapons, and ceremonial objects from Morocco\'s diverse Amazigh communities.',
    highlight: 'Pierre Berge\'s personal collection of over 600 Berber artifacts arranged by region. The garden itself contains 300+ plant species from five continents.',
    price: 'from 150 MAD (garden) + 30 MAD (Berber Museum)',
    hours: 'Daily: 8:00-17:30 (Oct-Apr), 8:00-18:00 (May-Sep)',
  },
  {
    name: 'David Bloch Gallery',
    location: '8 bis Rue des Vieux Marrakchis, Gueliz',
    focus: 'Contemporary urban art, street art, pop art, and sculpture. The gallery represents both Moroccan and international artists working at the intersection of street culture and fine art.',
    highlight: 'Annual solo shows by artists like Lek & Sowat, L\'Atlas, and Moroccan graffiti pioneer Dotmaster. The gallery curates outdoor murals throughout the Gueliz district.',
    price: 'Free entry',
    hours: 'Mon-Sat: 10:00-13:00, 15:00-19:00',
  },
  {
    name: 'Dar Si Said (Museum of Moroccan Arts)',
    location: 'Riad Zitoun el-Jdid, Medina',
    focus: 'Traditional Moroccan decorative arts housed in a restored 19th-century palace. Collections include cedarwood carvings, Berber jewelry, zellige panels, embroidered textiles, and antique carpets from across the kingdom.',
    highlight: 'The marble basin from 10th-century Cordoba in the central courtyard, and the painted wooden ceilings that took master craftsmen (maallems) over a decade to complete.',
    price: 'from 30 MAD',
    hours: 'Wed-Mon: 9:00-18:00, closed Tuesday',
  },
  {
    name: 'RIAD Art Gallery & Maison de la Photographie',
    location: 'Rue Ahl Fes, Medina',
    focus: 'Historical photography of Morocco from 1870-1960, plus rotating exhibitions of contemporary Moroccan photographers. The restored riad itself functions as an architectural exhibition.',
    highlight: 'The rooftop terrace offers panoramic Atlas views alongside a collection of hand-colored glass plates from the early French Protectorate period.',
    price: 'from 50 MAD',
    hours: 'Daily: 9:30-19:00',
  },
];

/* ═══════════════════════════════════════════════════════════════
   CASABLANCA ART SPACES DATA
   ═══════════════════════════════════════════════════════════════ */

const casablancaSpaces: Gallery[] = [
  {
    name: 'Villa des Arts Casablanca',
    location: '30 Boulevard Brahim Roudani, Maarif',
    focus: 'The ONA Foundation\'s flagship cultural space. Two floors dedicated to modern and contemporary Moroccan art, with emphasis on emerging talent and mid-career retrospectives.',
    highlight: 'The annual "Regards Croises" group show pairs established and emerging artists around a single theme.',
    price: 'Free entry',
    hours: 'Tue-Sat: 10:00-19:00, closed Sunday-Monday',
  },
  {
    name: 'L\'Uzine',
    location: 'Ain Sebaa industrial district',
    focus: 'A converted warehouse functioning as Casablanca\'s primary independent art center. Exhibitions, film screenings, concerts, theater, and workshops in raw concrete.',
    highlight: 'Monthly "Open Studios" where resident artists open their workspace. The rooftop hosts summer cinema nights.',
    price: 'from 20 MAD (varies by event)',
    hours: 'Wed-Sun: 14:00-20:00, events until 23:00',
  },
  {
    name: 'Le Cube - independent art room',
    location: 'Rue Abou Mahassine Arrouyani, Gauthier',
    focus: 'Morocco\'s only dedicated new media art space. Video art, digital installations, and experimental media. Commissions site-specific works and runs a digital artist residency.',
    highlight: 'The annual "Screen Festival" transforms the space into an immersive audiovisual environment drawing artists from across Africa and Europe.',
    price: 'Free entry',
    hours: 'Tue-Sat: 11:00-19:00',
  },
  {
    name: 'Galerie Mohamed Drissi',
    location: 'Boulevard Moulay Rachid, Anfa',
    focus: 'Rotating exhibitions of established Moroccan painters and sculptors. The white-cube gallery occupies a modernist building near the Corniche.',
    highlight: 'Retrospectives of Casablanca School artists who shaped Moroccan modernism in the 1960s.',
    price: 'Free entry',
    hours: 'Mon-Sat: 10:00-18:00',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RABAT ART SPACES DATA
   ═══════════════════════════════════════════════════════════════ */

const rabatSpaces: Gallery[] = [
  {
    name: 'Mohammed VI Museum of Modern & Contemporary Art (MMVI)',
    location: 'Avenue Moulay Hassan, Agdal',
    focus: 'Africa\'s largest modern art museum, opened 2014. Three floors showcase Moroccan art from independence to the present, plus major international touring exhibitions.',
    highlight: 'Over 400 works by Morocco\'s most important artists: Cherkaoui, Gharbaoui, Melehi, Belkahia, and Hajjaj. Has hosted Giacometti and major African photography shows.',
    price: 'from 40 MAD',
    hours: 'Wed-Mon: 10:00-18:00, closed Tuesday',
  },
  {
    name: 'Oudaya Museum (Musee des Oudaias)',
    location: 'Kasbah des Oudaias, Rabat Medina',
    focus: 'Traditional Moroccan arts and crafts displayed in a 17th-century palace within the historic Kasbah. Collections include Fes ceramics, Amazigh jewelry, Andalusian musical instruments, and astrolabes.',
    highlight: 'The Andalusian Garden adjacent to the museum, designed during the French Protectorate, offers a tranquil space with citrus trees and bougainvillea overlooking the Bou Regreg river.',
    price: 'from 10 MAD',
    hours: 'Wed-Mon: 9:00-16:00, closed Tuesday',
  },
  {
    name: 'Villa des Arts Rabat',
    location: '10 Rue Beni Mellal, Hassan',
    focus: 'Sister institution to the Casablanca branch. This Art Deco villa presents contemporary Moroccan and African art in an intimate domestic setting. Programming leans toward photography, installation, and works on paper.',
    highlight: 'The building itself dates from the 1930s Protectorate era and retains original decorative elements that frame contemporary works in an unexpected historical dialogue.',
    price: 'Free entry',
    hours: 'Tue-Sat: 10:00-19:00',
  },
];

/* ═══════════ ESSAOUIRA & TANGIER DATA ═══════════ */

interface CityGallery { city: string; galleries: Gallery[]; }

const coastalCities: CityGallery[] = [
  {
    city: 'Essaouira',
    galleries: [
      {
        name: 'Galerie Damgaard',
        location: 'Avenue Oqba Ibn Nafiaa, Medina',
        focus: 'The gallery that launched Essaouira\'s art movement. Danish expat Frederic Damgaard began collecting self-taught Gnaoua-inspired painters in the 1980s, and his gallery remains the definitive showcase for Souiri art.',
        highlight: 'Works by the late Mohammed Tabal, whose trance-state paintings during Gnaoua ceremonies became internationally collected. Current artists continue the tradition of spiritually charged, intensely colored canvases.',
        price: 'Free entry',
        hours: 'Daily: 9:00-13:00, 15:00-19:00',
      },
      {
        name: 'Espace Othello',
        location: 'Rue Mohamed Layachi, Medina',
        focus: 'Mixed-use cultural space in a restored medina building. Rotating exhibitions of Essaouira artists alongside film screenings, book launches, and live music in an atmospheric stone-walled courtyard.',
        highlight: 'The space often ties programming to the Gnaoua and World Music Festival (June), hosting pre-festival exhibitions and artist talks.',
        price: 'Free entry',
        hours: 'Daily: 10:00-19:00',
      },
    ],
  },
  {
    city: 'Tangier',
    galleries: [
      {
        name: 'American Legation Museum',
        location: 'Rue d\'Amerique, Medina',
        focus: 'The only U.S. National Historic Landmark on foreign soil. This 1821 building houses a permanent collection of paintings, maps, and photographs documenting the long relationship between Morocco and the United States.',
        highlight: 'The Paul Bowles Wing preserves the writer\'s personal library and recordings of Moroccan music. The gallery hosts contemporary exhibitions by Tangier-based artists in rooms where American diplomats once negotiated treaties.',
        price: 'from 20 MAD',
        hours: 'Mon-Fri: 10:00-13:00, 14:00-17:00',
      },
      {
        name: 'Galerie Conil',
        location: 'Rue de la Liberte, Ville Nouvelle',
        focus: 'One of Tangier\'s longest-running commercial galleries, specializing in contemporary painting and sculpture by Northern Moroccan artists. The gallery played a key role in nurturing Tangier\'s artistic renaissance after decades of post-international-zone decline.',
        highlight: 'Group shows that pair Tangerois painters with artists from across the Strait of Gibraltar, reflecting Tangier\'s identity as a bridge between Africa and Europe.',
        price: 'Free entry',
        hours: 'Mon-Sat: 10:00-13:00, 16:00-20:00',
      },
      {
        name: 'Cinematheque de Tanger',
        location: 'Rue du Cinema, Ville Nouvelle',
        focus: 'Part cinema archive, part cultural center. Beyond its film programming, the space hosts photography and video art exhibitions in a restored Art Deco cinema dating from the International Zone era.',
        highlight: 'Annual retrospective of Moroccan cinema alongside contemporary video art from North Africa and the Middle East.',
        price: 'from 30 MAD',
        hours: 'Tue-Sun: 14:00-22:00',
      },
    ],
  },
];

/* ═══════════ TRADITIONAL ART FORMS DATA ═══════════ */

interface ArtForm { name: string; description: string; where: string; priceRange: string; }

const traditionalArtForms: ArtForm[] = [
  {
    name: 'Zellige Tilework',
    description: 'Each mosaic piece is hand-cut from glazed terracotta with a hammer and chisel, then assembled face-down into geometric star and polygon patterns. A single square meter of fine zellige can contain over 1,000 individual pieces. Master craftsmen (maallems) in Fes train for 8-10 years before executing the most intricate designs.',
    where: 'Fes, Meknes, Marrakech, Tetouan',
    priceRange: 'from 800 MAD per square meter for simple patterns; from 5,000 MAD for complex traditional designs',
  },
  {
    name: 'Arabic & Amazigh Calligraphy',
    description: 'Morocco developed its own calligraphic tradition distinct from eastern Arab styles. The Maghrebi script, with rounded letterforms and open bowls, appears on everything from mosque walls to shop signs. Contemporary calligraphers push the form into pure abstraction, blurring the line between text and image.',
    where: 'Fes (traditional schools), Marrakech (contemporary studios), Casablanca (modern galleries)',
    priceRange: 'from 300 MAD for small framed pieces; from 5,000 MAD for large-scale gallery works',
  },
  {
    name: 'Berber Textiles & Carpets',
    description: 'Amazigh women across the Middle and High Atlas weave carpets that function as domestic objects, personal narratives, and abstract art. Beni Ourain rugs (cream with dark geometric lines) are most internationally famous, but Boucherouite, Azilal, and Kilim traditions each have devoted collectors.',
    where: 'Azrou, Ain Leuh, Ouarzazate, Taznakht, Marrakech souks',
    priceRange: 'from 1,500 MAD for small kilims; from 8,000 MAD for large Beni Ourain; from 15,000 MAD for antique museum pieces',
  },
  {
    name: 'Leatherwork',
    description: 'Fes has tanned leather in the same open-air vats for a millennium. The Chouara tannery, operating since the 11th century, produces hides dyed with natural pigments: poppy for red, indigo for blue, saffron for yellow, mint for green. Artisans craft the leather into babouche slippers, bags, poufs, and book bindings.',
    where: 'Fes (Chouara Tannery), Marrakech (Bab Debbagh), Taroudant',
    priceRange: 'from 80 MAD for babouche slippers; from 500 MAD for handmade bags; from 1,200 MAD for embossed leather poufs',
  },
  {
    name: 'Painted Ceramics',
    description: 'Fes and Safi are Morocco\'s ceramic capitals. Fes produces blue-and-white pottery influenced by Chinese porcelain via Andalusia, with intricate geometric patterns. Safi favors bolder polychrome designs. In both cities, potters throw on kick wheels and painters apply designs freehand without stencils.',
    where: 'Fes (Ain Nokbi pottery quarter), Safi (Colline des Potiers), Tamegroute (green glaze)',
    priceRange: 'from 50 MAD for small bowls; from 300 MAD for large tagine dishes; from 2,000 MAD for elaborate Fassi display plates',
  },
  {
    name: 'Woodwork & Zouak',
    description: 'Atlas cedar is carved into geometric screens (moucharabieh) and painted with zouak -- polychrome designs in red, green, gold, and blue. Thuya wood, found only near Essaouira, has a rich burl grain that artisans carve into boxes, chess sets, and decorative panels.',
    where: 'Essaouira (thuya), Fes (cedar), Marrakech (both traditions)',
    priceRange: 'from 100 MAD for small thuya boxes; from 3,000 MAD for large carved cedar panels',
  },
];

/* ═══════════ ART EVENTS DATA ═══════════ */

interface ArtEvent { name: string; location: string; when: string; description: string; }

const artEvents: ArtEvent[] = [
  {
    name: '1-54 Contemporary African Art Fair',
    location: 'La Mamounia Hotel, Marrakech',
    when: 'February (annual since 2018)',
    description: 'The Marrakech edition of London\'s premier African art fair. Around 20 galleries from Africa, Europe, and the Americas exhibit works across La Mamounia\'s salons and gardens. VIP previews, artist talks, and satellite events across the city make this the single most important week in Morocco\'s art calendar. Expect works priced from 2,000 to 500,000+ USD.',
  },
  {
    name: 'Marrakech Biennale',
    location: 'Various venues, Marrakech Medina and Gueliz',
    when: 'Spring (intermittent scheduling)',
    description: 'Founded in 2005, the Biennale has featured major international curators and transformed the medina into a citywide exhibition. Past editions used the Bahia Palace, Dar Si Said, and abandoned riads as exhibition spaces. Check the official site for the latest edition dates, as scheduling has been irregular since 2016.',
  },
  {
    name: 'Jidar - Toiles de Rue (Street Art Festival)',
    location: 'Rabat',
    when: 'Spring (annual since 2015)',
    description: 'Rabat\'s annual street art festival invites Moroccan and international muralists to paint large-scale works on building facades across the capital. Over 100 murals now cover walls from the medina to Hay Riad, making Rabat one of North Africa\'s most significant street art destinations.',
  },
];

/* ═══════════ ART RESIDENCIES DATA ═══════════ */

interface Residency { name: string; location: string; duration: string; description: string; includes: string; }

const artResidencies: Residency[] = [
  {
    name: 'Le 18',
    location: 'Derb el Ferrane, Marrakech Medina',
    duration: '4-8 weeks',
    description: 'An independent art space and residency in the heart of the medina. Le 18 hosts two to three artists at a time, providing studio space in a restored riad and culminating in an exhibition open to the public.',
    includes: 'Private studio, accommodation, curatorial support, and public exhibition',
  },
  {
    name: 'Dar al-Ma\'mun',
    location: 'Haouz Plain (45 min from Marrakech)',
    duration: '6-8 weeks',
    description: 'Set in a rural compound surrounded by olive groves, Dar al-Ma\'mun offers artists a retreat from urban distraction. The program emphasizes research and experimentation, with residents sharing their process through open studios and talks.',
    includes: 'Studio, accommodation, meals, production budget, and travel within Morocco',
  },
  {
    name: 'Asilah Forum Foundation',
    location: 'Asilah, Atlantic coast',
    duration: '2-4 weeks (during Asilah Cultural Moussem)',
    description: 'Asilah has hosted an annual cultural moussem since 1978, during which international artists paint murals directly on the medina walls. The foundation selects artists each year to create permanent public artworks in this Atlantic coastal town.',
    includes: 'Accommodation, materials, exhibition space, and cultural programming',
  },
  {
    name: 'LE CUBE residency program',
    location: 'Casablanca',
    duration: '4-6 weeks',
    description: 'Focused exclusively on digital and new media art, LE CUBE\'s residency program supports artists working with video, sound, coding, and interactive installation. Residents have access to the gallery\'s technical equipment and Casablanca\'s growing tech ecosystem.',
    includes: 'Studio access, technical equipment, accommodation stipend, and exhibition',
  },
];

/* ═══════════ FAQ DATA ═══════════ */

interface FAQ { question: string; answer: string; }

const faqs: FAQ[] = [
  {
    question: 'What is the best art gallery in Marrakech?',
    answer: 'MACMA and Musee Yves Saint Laurent are the two heavyweights. MACMA holds the strongest collection of Orientalist and modern Moroccan painting. The YSL Museum delivers world-class temporary exhibitions alongside its fashion archive. For contemporary work with an edge, David Bloch Gallery in Gueliz is the top pick -- they represent some of the most exciting street and urban artists working in Africa.',
  },
  {
    question: 'How much do Morocco museum tickets cost?',
    answer: 'Entry fees range from 10 MAD at smaller municipal museums to 100 MAD at Musee Yves Saint Laurent. Jardin Majorelle charges 150 MAD for the garden plus 30 MAD for the Berber Museum. Mohammed VI Museum in Rabat costs 40 MAD. Most commercial galleries are free. Seasonal pricing can change, so confirm at the door.',
  },
  {
    question: 'Is there a contemporary art scene in Morocco?',
    answer: 'Absolutely. Morocco has one of the most active contemporary art scenes on the African continent. The 1-54 Contemporary African Art Fair takes place in Marrakech each February. Casablanca\'s L\'Uzine and Le Cube operate as independent art spaces with year-round programming. Artists like Hassan Hajjaj, Mahi Binebine, and Lalla Essaydi show in galleries from New York to London to Dubai. The Mohammed VI Museum in Rabat anchors the institutional side as Africa\'s largest modern art museum.',
  },
  {
    question: 'Can I buy authentic Moroccan art and ship it home?',
    answer: 'Yes, and established galleries make it straightforward. Galleries in Marrakech and Casablanca regularly handle international shipping through DHL, FedEx, or specialist art couriers. Prices start from around 2,000 MAD for prints and works on paper by emerging artists, and climb to 200,000+ MAD for major works by established names. Ask for a certificate of authenticity and ensure the gallery provides proper customs documentation.',
  },
  {
    question: 'What traditional art forms should I look for in Morocco?',
    answer: 'Five major traditions stand out: zellige geometric mosaic tilework (Fes is the capital), Arabic and Amazigh calligraphy, Berber textiles (Beni Ourain, Boucherouite, Azilal, and kilim rugs), hand-painted ceramics (Fes blue-and-white, Safi polychrome, Tamegroute green-glaze), and leatherwork from Fes\'s Chouara tannery. Cedar wood carving with zouak painting and brass/copper metalwork are also significant.',
  },
  {
    question: 'When is the best time to visit Morocco for art events?',
    answer: 'February stands above all other months thanks to the 1-54 Contemporary African Art Fair at La Mamounia in Marrakech. Spring brings the Jidar Street Art Festival in Rabat and the Marrakech Biennale (when scheduled). June sees the Gnaoua Festival in Essaouira. October through April is the peak gallery season across all cities. July and August are quieter -- many gallerists travel, and the heat slows exhibition programming.',
  },
  {
    question: 'Are there art residencies in Morocco open to international artists?',
    answer: 'Several welcome international applicants. Le 18 in Marrakech, Dar al-Ma\'mun near the Haouz Plain, Jardin Rouge (Montresso Foundation), LE CUBE in Casablanca, and the Asilah Forum Foundation all accept foreign artists. Residencies typically run 4-8 weeks and often include studio space, accommodation, and a production budget. Applications open 6-12 months ahead, so plan accordingly.',
  },
];

/* ═══════════ RELATED GUIDES ═══════════ */
const relatedGuides = [
  { title: 'Moroccan Architecture', href: '/architecture', description: '1000 years of Islamic, Berber & modern design' },
  { title: 'Crafts & Artisans', href: '/crafts', description: 'Workshops, souks & master craftsmen' },
  { title: 'Ceramics Guide', href: '/ceramics', description: 'Fes, Safi & Tamegroute pottery traditions' },
  { title: 'Berber Culture', href: '/berber-culture', description: 'Amazigh heritage, music & traditions' },
  { title: 'Street Art Morocco', href: '/street-art', description: 'Murals and urban art across the kingdom' },
  { title: 'Morocco Museums', href: '/morocco-museums', description: 'Full museum directory city by city' },
  { title: 'Marrakech City Guide', href: '/marrakech', description: 'Explore the Red City' },
  { title: 'Casablanca City Guide', href: '/casablanca', description: 'Morocco\'s economic and cultural capital' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoArtGalleriesPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 hero-overlay">
        <img
          src="/images/art-moroccan-calligraphy.webp"
          alt="Moroccan art gallery interior with contemporary calligraphy and geometric works"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="container-morocco relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" />
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="flex items-center gap-1.5">
                <Link href="/culture" className="hover:text-white transition-colors">
                  Culture
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-white font-medium">Art Galleries &amp; Museums</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 max-w-4xl">
            Morocco Art Galleries &amp; Museums Guide
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
            From Marrakech&apos;s world-class museums to Casablanca&apos;s underground
            art spaces, Rabat&apos;s landmark modern art museum, and the creative
            communities of Essaouira and Tangier -- the complete guide to Morocco&apos;s
            art scene.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="#marrakech-galleries" className="btn-primary">
              Marrakech Galleries <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#buying-art" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Buying Art <ShoppingBag className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO: Morocco's Art Scene ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Art Scene: Where Tradition Meets the Avant-Garde
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-4">
              <p>
                Morocco bridges Africa and Europe across the 14-kilometer Strait of Gibraltar. Its
                cultural identity draws on Amazigh, Arab, Andalusian, Sub-Saharan, and French colonial
                traditions. That layered heritage has produced one of the most compelling art scenes on
                the African continent -- a scene that has accelerated dramatically since 2010.
              </p>
              <p>
                The Mohammed VI Museum, which opened in Rabat in 2014, was the first major public modern
                art museum in the Maghreb. The 1-54 Contemporary African Art Fair chose Marrakech as its
                third location (after London and New York) in 2018. Over 40 commercial galleries now
                operate across the country, up from fewer than a dozen in 2005.
              </p>
              <p>
                Morocco&apos;s artistic DNA runs through a thousand years of zellige tilework, carved
                stucco, Quranic calligraphy, Berber weaving, and painted wood (zouak). These are not
                museum relics but living practices, transmitted through master-apprentice relationships
                in workshops that operate much as they did in the 14th century.
              </p>
              <p>
                Hassan Hajjaj shoots pop-art portraits framed in Coca-Cola crates and Moroccan tea tins.
                Mahi Binebine sculpts tortured bronze figures referencing sub-Saharan migration. Lalla
                Essaydi inscribes calligraphy onto the bodies of Moroccan women. Mohamed Melehi spent
                six decades developing a hard-edge abstraction rooted in Moroccan geometry. This guide
                maps the spaces where you can encounter all of it.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { icon: Frame, label: 'Galleries & Museums', value: '40+' },
              { icon: MapPin, label: 'Cities with Art Scenes', value: '6 major' },
              { icon: Calendar, label: 'Major Art Fairs', value: '3 annual' },
              { icon: Users, label: 'Active Contemporary Artists', value: '200+' },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-5 text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-[var(--color-primary)]" />
                <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARRAKECH GALLERIES ── */}
      <section id="marrakech-galleries" className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Marrakech Galleries &amp; Museums
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Red City dominates Morocco&apos;s art market. A dozen galleries cluster in Gueliz (the
              new town), while the medina houses historic museums in restored palaces and riads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {marrakechGalleries.map((gallery) => (
              <div key={gallery.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {gallery.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  {gallery.location}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{gallery.focus}</p>
                <div className="bg-[var(--color-primary)]/5 rounded-lg p-3 mb-3">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <Star className="w-4 h-4 text-[var(--color-gold)] inline mr-1" />
                    <strong>Highlight:</strong> {gallery.highlight}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-[var(--color-primary)] font-semibold">
                    <Ticket className="w-4 h-4" /> {gallery.price}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--text-secondary)]">
                    <Clock className="w-4 h-4" /> {gallery.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CASABLANCA ART SPACES ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Casablanca Art Spaces
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s economic capital has developed a raw, independent art scene in converted
              warehouses and modernist villas. Casablanca is where you&apos;ll find the most experimental
              work and the strongest sense of an emerging creative class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {casablancaSpaces.map((space) => (
              <div key={space.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {space.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  {space.location}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{space.focus}</p>
                <div className="bg-[var(--color-primary)]/5 rounded-lg p-3 mb-3">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <Star className="w-4 h-4 text-[var(--color-gold)] inline mr-1" />
                    <strong>Highlight:</strong> {space.highlight}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-[var(--color-primary)] font-semibold">
                    <Ticket className="w-4 h-4" /> {space.price}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--text-secondary)]">
                    <Clock className="w-4 h-4" /> {space.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RABAT ART SPACES ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Rabat: The Institutional Capital
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s political capital has invested heavily in cultural infrastructure. The
              Mohammed VI Museum alone justifies a trip to Rabat for anyone serious about North African art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rabatSpaces.map((space) => (
              <div key={space.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {space.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  {space.location}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{space.focus}</p>
                <div className="bg-[var(--color-primary)]/5 rounded-lg p-3 mb-3">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <Star className="w-4 h-4 text-[var(--color-gold)] inline mr-1" />
                    <strong>Highlight:</strong> {space.highlight}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-[var(--color-primary)] font-semibold">
                    <Ticket className="w-4 h-4" /> {space.price}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--text-secondary)]">
                    <Clock className="w-4 h-4" /> {space.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESSAOUIRA & TANGIER ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essaouira &amp; Tangier: Coastal Creative Hubs
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Two Atlantic cities with distinct creative identities -- Essaouira&apos;s Gnaoua-inspired
              painters and Tangier&apos;s Beat Generation legacy.
            </p>
          </div>

          {coastalCities.map((cityGroup) => (
            <div key={cityGroup.city} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                {cityGroup.city}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {cityGroup.galleries.map((gallery) => (
                  <div key={gallery.name} className="card-moroccan p-5">
                    <h4 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                      {gallery.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                      {gallery.location}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{gallery.focus}</p>
                    <div className="bg-[var(--color-primary)]/5 rounded-lg p-2 mb-3">
                      <p className="text-xs text-[var(--text-secondary)]">
                        <Star className="w-3.5 h-3.5 text-[var(--color-gold)] inline mr-1" />
                        {gallery.highlight}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-[var(--color-primary)] font-semibold">
                        <Ticket className="w-3.5 h-3.5" /> {gallery.price}
                      </span>
                      <span className="flex items-center gap-1 text-[var(--text-secondary)]">
                        <Clock className="w-3.5 h-3.5" /> {gallery.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Coastal images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
            {[
              { src: '/images/art-tangier-kasbah.webp', alt: 'Tangier Kasbah with gallery entrance' },
              { src: '/images/art-moroccan-brass.webp', alt: 'Traditional Moroccan brasswork in an Essaouira gallery' },
              { src: '/images/art-street-art.webp', alt: 'Street art mural on a Moroccan medina wall' },
              { src: '/images/art-moroccan-lanterns.webp', alt: 'Handcrafted Moroccan lanterns in a gallery setting' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-square group">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRADITIONAL ART FORMS ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Layers className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Moroccan Art Forms
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Long before galleries arrived, Morocco&apos;s artistic traditions were carried forward by
              master craftsmen in souks and palace workshops. These six forms remain at the heart of the
              country&apos;s creative identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {traditionalArtForms.map((art) => (
              <div key={art.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {art.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{art.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]"><strong>Where:</strong> {art.where}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CircleDollarSign className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]"><strong>Price:</strong> {art.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Traditional art images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
            {[
              { src: '/images/art-moroccan-pattern-zellige.webp', alt: 'Zellige tilework pattern in traditional Moroccan geometric design' },
              { src: '/images/art-berber-carpet-weaving.webp', alt: 'Berber woman weaving a traditional carpet on a handloom' },
              { src: '/images/art-moroccan-woodwork.webp', alt: 'Cedar wood panel with painted zouak decoration' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ART EVENTS & FAIRS ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Art Events &amp; Fairs
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s art calendar peaks in February and spring, but cultural events run year-round.
              Plan your trip around these key dates to see the scene at its most active.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {artEvents.map((event) => (
              <div key={event.name} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                      {event.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)] mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                        {event.when}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUYING MOROCCAN ART ── */}
      <section id="buying-art" className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Buying Moroccan Art: A Practical Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Galleries, souks, or directly from artists -- each channel has different price dynamics,
              quality guarantees, and logistics. Here&apos;s what to expect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Galleries vs Souks */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                <Frame className="w-5 h-5 text-[var(--color-primary)]" />
                Gallery Purchases
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><strong>Fixed prices:</strong> No haggling. Prices include framing and documentation.</li>
                <li><strong>Certificate of authenticity</strong> provided with every purchase.</li>
                <li><strong>International shipping</strong> arranged by the gallery (DHL, FedEx, or art couriers).</li>
                <li><strong>Price range:</strong> from 2,000 MAD (prints) to 500,000+ MAD (major works).</li>
                <li><strong>Tax:</strong> 20% VAT included in listed prices. Tourist tax refund not available on art.</li>
                <li><strong>Best for:</strong> Collectors seeking investment-grade contemporary art with provenance.</li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[var(--color-primary)]" />
                Souk &amp; Market Purchases
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><strong>Negotiable prices:</strong> Start at 40-50% of the asking price and work up.</li>
                <li><strong>No certificates</strong> -- authenticity depends on your own judgment.</li>
                <li><strong>You handle shipping:</strong> DHL and FedEx offices in all major cities.</li>
                <li><strong>Price range:</strong> from 50 MAD (small crafts) to 15,000 MAD (fine carpets).</li>
                <li><strong>Watch for:</strong> Machine-made items sold as handmade, especially rugs and ceramics.</li>
                <li><strong>Best for:</strong> Traditional crafts, rugs, ceramics, leather, and decorative items.</li>
              </ul>
            </div>

            {/* Shipping tips */}
            <div className="card-moroccan p-6 md:col-span-2">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-primary)]" />
                Shipping &amp; Customs Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
                <div>
                  <p className="mb-2"><strong>Galleries</strong> handle crating, customs paperwork, and door-to-door delivery for purchases over 5,000 MAD. Expect from 500 MAD to 3,000 MAD for shipping to Europe, more for the Americas and Asia.</p>
                  <p><strong>Customs declaration:</strong> Keep your receipt. Art imports under certain thresholds are duty-free in most countries; check your home country&apos;s rules.</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Souk purchases:</strong> The DHL office on Avenue Mohammed V in Marrakech is well-practiced at shipping fragile items. Bring your item already wrapped and they will provide outer packaging. Expect from 300 MAD for small parcels to Europe.</p>
                  <p><strong>Antiques:</strong> Items over 100 years old may require an export permit from the Ministry of Culture. Ask the seller and verify age claims carefully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ART RESIDENCIES & WORKSHOPS ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <GraduationCap className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Art Residencies &amp; Workshops
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Established programs across Morocco accept international artists, each with a distinct
              focus and environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {artResidencies.map((residency) => (
              <div key={residency.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {residency.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-1">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  {residency.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                  <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  {residency.duration}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{residency.description}</p>
                <div className="bg-[var(--color-primary)]/5 rounded-lg p-3">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <strong>Includes:</strong> {residency.includes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Workshop note */}
          <div className="max-w-3xl mx-auto mt-10 card-moroccan p-6 zellige-border">
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
              <Brush className="w-5 h-5 text-[var(--color-primary)]" />
              Short-Term Workshops for Visitors
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Not an artist-in-residence? Several programs welcome casual visitors for day and multi-day
              workshops in traditional Moroccan art forms.
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <strong>Zellige workshops in Fes:</strong> Half-day sessions at Ain Nokbi pottery quarter
                where you learn to cut and assemble tilework under a maallem&apos;s supervision. From 400 MAD per person.
              </li>
              <li>
                <strong>Calligraphy classes in Marrakech:</strong> MACMA and several medina riads offer
                two-hour Arabic calligraphy introductions with ink, reed pen, and parchment. From 250 MAD.
              </li>
              <li>
                <strong>Weaving in the Atlas:</strong> Multi-day stays in Amazigh villages like Ain Leuh
                include hands-on weaving instruction alongside local women. From 800 MAD per day including meals and accommodation.
              </li>
              <li>
                <strong>Ceramics in Safi:</strong> Visit the Colline des Potiers and try your hand at the
                kick wheel, then paint a piece in traditional Safi polychrome. From 200 MAD.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Answers to the most common questions about Morocco&apos;s art scene, gallery visits,
              buying art, and planning an art-focused trip.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Related Guides
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive deeper into Morocco&apos;s culture, crafts, and cities with these guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                <span className="text-sm text-[var(--color-primary)] font-semibold flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 md:py-20 bg-[var(--color-primary-900)] text-white moroccan-pattern-dark">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Plan Your Morocco Art Trip
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Morocco&apos;s art scene rewards the curious. From the grand halls of the Mohammed VI Museum
            to a maallem&apos;s zellige workshop in the back streets of Fes, the creative pulse of this
            country runs deep. Start exploring.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/marrakech" className="btn-primary">
              Marrakech Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/crafts" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Crafts &amp; Artisans <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/culture" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Culture Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

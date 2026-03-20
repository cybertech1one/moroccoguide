import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Globe,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Compass,
  Heart,
  Landmark,
  Building,
  Star,
  Calendar,
  MessageCircle,
  Camera,
  Ticket,
  Frame,
  Eye,
  Palette,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Museums in Morocco 2026 | Marrakech, Fes, Rabat & More',
  description:
    'Complete guide to the best museums in Morocco in 2026. Discover top museums in Marrakech, Fes, Rabat, Casablanca, and Tangier including the Yves Saint Laurent Museum, MACMA, Mohammed VI Museum, Dar Si Said, and more. Ticket prices, hours, and tips.',
  keywords: [
    'Morocco museums',
    'best museums in Morocco',
    'Marrakech museums',
    'Fes museums',
    'Rabat museums',
    'Yves Saint Laurent Museum Marrakech',
    'MACMA Marrakech',
    'Mohammed VI Museum Rabat',
    'Dar Si Said Museum',
    'Maison de la Photographie Marrakech',
    'Museum of Confluences Marrakech',
    'Batha Museum Fes',
    'Kasbah Museum Tangier',
    'Morocco art museums',
    'Morocco history museums',
    'museum passes Morocco',
    'Casablanca museums',
    'Tangier museums',
  ],
  openGraph: {
    title: 'Best Museums in Morocco 2026 | Marrakech, Fes, Rabat & More',
    description:
      'Explore Morocco finest museums: contemporary art at MACMA, haute couture at Yves Saint Laurent, Berber heritage at Dar Si Said, and modern art at the Mohammed VI Museum. Complete guide with prices, hours, and insider tips.',
    url: `${BASE_URL}/morocco-museums`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Interior of a beautifully decorated Moroccan museum with intricate zellige tilework and carved plaster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Museums in Morocco 2026 | Complete Guide',
    description:
      'Top museums in Marrakech, Fes, Rabat, Casablanca & Tangier. Ticket prices, opening hours, photography rules & insider tips for 2026.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-museums` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-museums`,
  name: 'Best Museums in Morocco 2026 | Marrakech, Fes, Rabat & More',
  description:
    'Complete guide to the best museums in Morocco covering Marrakech, Fes, Rabat, Casablanca, and Tangier. Includes art museums, history museums, ethnographic collections, photography galleries, ticket prices, opening hours, and practical visitor tips.',
  url: `${BASE_URL}/morocco-museums`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-museums`,
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
      { '@type': 'ListItem', position: 2, name: 'Museums in Morocco', item: `${BASE_URL}/morocco-museums` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best museum in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mohammed VI Museum of Modern and Contemporary Art in Rabat is widely considered Morocco most important museum, housing a world-class collection of Moroccan and international art. In Marrakech, the Yves Saint Laurent Museum (Musee YSL) and MACMA (Museum of African Contemporary Art Al Maaden) are the most acclaimed. For traditional Moroccan arts, Dar Si Said Museum in Marrakech and the Batha Museum in Fes are essential visits.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do museums cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Museum admission prices in Morocco typically range from 10 MAD to 100 MAD (approximately 1 to 10 USD). Government-run museums like Dar Si Said or the Batha Museum charge from 10 to 20 MAD. Private museums like the Yves Saint Laurent Museum cost from 100 MAD, and MACMA charges from 60 MAD. Many museums offer reduced rates for students and Moroccan nationals, and some are free on certain days or for children under 12.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are museums in Morocco open on Fridays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most museums in Morocco are open on Fridays, but many government-run museums close on Tuesdays instead. Private museums like the Yves Saint Laurent Museum and MACMA are generally open daily. However, some museums may close for Friday prayers between noon and 2:30 PM or adjust their hours during Ramadan. Always check the specific museum schedule before visiting, especially during religious holidays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you take photos inside Moroccan museums?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photography policies vary by museum. Most government-run museums allow photography without flash for free or for a small additional fee (from 10 MAD). The Yves Saint Laurent Museum permits photography in most areas but restricts it in temporary exhibition halls. MACMA generally allows photography. Tripods and professional equipment usually require prior permission. Video recording may require a separate fee. Always check at the ticket counter before photographing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What museums are in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech has the richest museum scene in Morocco. Key museums include MACMA (Museum of African Contemporary Art Al Maaden), Yves Saint Laurent Museum (Musee YSL), Dar Si Said Museum of Moroccan Arts, Maison de la Photographie, Museum of Confluences (Dar el Bacha), the Berber Museum at Jardin Majorelle, Marrakech Museum in the Ben Youssef complex, and the Orientalist Museum. Together they cover contemporary art, fashion, traditional crafts, photography, and Berber culture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a museum pass for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco does not have a single nationwide museum pass. However, the Foundation Nationale des Musees (FNM) manages many major museums and occasionally offers combined tickets or promotional pricing. In Marrakech, visiting the Jardin Majorelle and Yves Saint Laurent Museum together offers a combined ticket from 180 MAD. Some cities offer tourist passes that include museum entries alongside other attractions. Check locally at tourist offices for current combo deals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the oldest museum in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Archaeological Museum of Rabat, founded in 1932 during the French protectorate, is one of Morocco oldest museums. It houses artifacts spanning from prehistory to the Islamic era, including exceptional Roman bronzes from Volubilis. The Dar Batha Museum in Fes, established in 1915 in a 19th-century palace, is another of Morocco earliest museum institutions and displays traditional Fassi arts and crafts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best museums for kids in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For families with children, the Berber Museum at Jardin Majorelle in Marrakech combines a beautiful garden with an accessible collection. The Borj Nord Arms Museum in Fes fascinates children with its displays of historic weapons and armor. The Archaeological Museum in Rabat has tangible artifacts that engage young visitors. MACMA in Marrakech offers family-friendly contemporary art in a spacious modern building. The Kasbah Museum in Tangier, set in a fortress, also captures children imagination.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MARRAKECH MUSEUMS
   ═══════════════════════════════════════════════════════════════ */

const marrakechMuseums = [
  {
    name: 'MACMA (Museum of African Contemporary Art Al Maaden)',
    description: 'Morocco premier contemporary art museum, MACMA houses a rotating collection of African and international modern art across a striking modernist building. The permanent collection features works by leading Moroccan and pan-African artists, while temporary exhibitions bring world-class contemporary art to Marrakech. The museum also hosts artist residencies and cultural events.',
    price: 'from 60 MAD',
    hours: 'Daily 10:00-18:00',
    highlight: 'Largest contemporary art collection in North Africa',
    icon: Palette,
  },
  {
    name: 'Yves Saint Laurent Museum (Musee YSL)',
    description: 'Designed by Studio KO, this stunning museum celebrates the legendary French fashion designer who found deep inspiration in Morocco. The permanent exhibition displays a rotating selection of YSL haute couture garments, accessories, and sketches. The building itself is a masterpiece of contemporary architecture with a facade inspired by the warp and weft of fabric.',
    price: 'from 100 MAD',
    hours: 'Daily 10:00-18:00 (closed Wednesdays)',
    highlight: 'Iconic fashion and architecture combined',
    icon: Star,
  },
  {
    name: 'Dar Si Said Museum of Moroccan Arts',
    description: 'Housed in a beautifully restored 19th-century palace, Dar Si Said showcases the finest examples of traditional Moroccan craftsmanship. The collection spans carved cedarwood, Berber jewelry, ceramic arts, weaving, leatherwork, and zellige tilework. The palace courtyard with its central fountain and carved stucco is itself a masterpiece.',
    price: 'from 20 MAD',
    hours: 'Wed-Mon 9:00-17:00 (closed Tuesdays)',
    highlight: 'Finest collection of traditional Moroccan woodwork',
    icon: Frame,
  },
  {
    name: 'Maison de la Photographie',
    description: 'This intimate riad-museum displays a remarkable collection of vintage photographs documenting Moroccan life from the 1870s to the 1950s. Spread over three floors, the images capture tribespeople, landscapes, souks, and daily life across Morocco during the pre-protectorate and protectorate eras. The rooftop terrace offers stunning views over the medina.',
    price: 'from 50 MAD',
    hours: 'Daily 9:30-19:00',
    highlight: 'Rare historical photographs with rooftop medina views',
    icon: Camera,
  },
  {
    name: 'Museum of Confluences (Dar el Bacha)',
    description: 'Opened in 2017 within the magnificently restored Dar el Bacha palace, this museum explores the cultural encounters between Morocco and the world. The palace once hosted Winston Churchill, Charlie Chaplin, and other luminaries. The architecture alone is worth the visit, with lavish zellige, carved plaster, and painted cedarwood ceilings.',
    price: 'from 50 MAD',
    hours: 'Wed-Mon 10:00-18:00 (closed Tuesdays)',
    highlight: 'Stunning palace architecture and cultural history',
    icon: Building,
  },
  {
    name: 'Berber Museum (Musee Berbere)',
    description: 'Located within the iconic Jardin Majorelle, the Berber Museum occupies the former studio of Jacques Majorelle. The collection of over 600 objects celebrates Amazigh (Berber) culture through jewelry, textiles, costumes, pottery, and ritual objects from across Morocco Amazigh regions. Each piece tells the story of a living cultural heritage.',
    price: 'from 30 MAD (garden entry separate)',
    hours: 'Daily 8:00-18:00 (summer until 18:30)',
    highlight: 'Essential Amazigh heritage collection in Majorelle Garden',
    icon: Heart,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FES MUSEUMS
   ═══════════════════════════════════════════════════════════════ */

const fesMuseums = [
  {
    name: 'Batha Museum (Musee Dar Batha)',
    description: 'Set in a 19th-century Hispano-Moorish palace built by Sultan Moulay Hassan I, Dar Batha displays the artistic heritage of Fes. Its collections include the celebrated Fassi blue ceramics, Berber carpets, embroidery, carved wood, wrought iron, and Moroccan coins. The Andalusian garden with its towering cypress trees is a peaceful retreat.',
    price: 'from 20 MAD',
    hours: 'Wed-Mon 9:00-17:00 (closed Tuesdays)',
    highlight: 'Famous blue-and-white Fassi ceramics collection',
    icon: Palette,
  },
  {
    name: 'Borj Nord Arms Museum',
    description: 'Housed in a 16th-century Saadian fortress overlooking the Fes medina, the Borj Nord displays over 8,000 weapons and armaments spanning Moroccan military history from prehistory to the 20th century. The collection includes swords, rifles, cannons, and the famous 5-meter-long cannon used at the Battle of the Three Kings in 1578. The rooftop offers panoramic views.',
    price: 'from 20 MAD',
    hours: 'Wed-Mon 9:00-17:00 (closed Tuesdays)',
    highlight: 'Historic weapons and panoramic views over Fes medina',
    icon: Eye,
  },
  {
    name: 'Dar Batha Palace Collections',
    description: 'Beyond the main Batha Museum, the Dar Batha complex houses rotating exhibitions of contemporary Moroccan art alongside its permanent ethnographic collection. The palace rooms display traditional Fassi domestic life, including reconstructed reception rooms with original furnishings, stucco work, and zellige.',
    price: 'from 20 MAD',
    hours: 'Wed-Mon 9:00-17:00 (closed Tuesdays)',
    highlight: 'Traditional Fassi palace rooms and rotating exhibitions',
    icon: Building,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RABAT MUSEUMS
   ═══════════════════════════════════════════════════════════════ */

const rabatMuseums = [
  {
    name: 'Mohammed VI Museum of Modern and Contemporary Art',
    description: 'Morocco flagship art museum, opened in 2014, is the first institution of its kind in North Africa. The museum houses an impressive collection of Moroccan modern and contemporary art, with works by Hassan El Glaoui, Mohamed Melehi, Farid Belkahia, and many others. Temporary exhibitions feature international artists, making it a world-class cultural destination.',
    price: 'from 40 MAD',
    hours: 'Wed-Mon 10:00-18:00 (closed Tuesdays)',
    highlight: 'North Africa first modern art museum',
    icon: Palette,
  },
  {
    name: 'Archaeological Museum of Rabat',
    description: 'Founded in 1932, this museum houses Morocco most important archaeological collections. Highlights include exceptional Roman bronzes from Volubilis (the marble-like bust of Juba II and the bronze dog), prehistoric tools from across Morocco, and Islamic-era ceramics and coins. The collection traces human presence in Morocco from the earliest stone tools to the medieval period.',
    price: 'from 20 MAD',
    hours: 'Wed-Mon 9:00-16:30 (closed Tuesdays)',
    highlight: 'Volubilis Roman bronzes and prehistoric artifacts',
    icon: Landmark,
  },
  {
    name: 'Oudayas Museum (Museum of the Kasbah)',
    description: 'Situated within the 17th-century Oudayas Kasbah overlooking the Atlantic Ocean and the Bou Regreg river, this museum occupies a former palace built by Sultan Moulay Ismail. The collection focuses on Moroccan arts and crafts including jewelry, musical instruments, ceramics, carpets, and manuscripts. The adjacent Andalusian garden is a serene highlight.',
    price: 'from 10 MAD',
    hours: 'Wed-Mon 9:00-17:00 (closed Tuesdays)',
    highlight: 'Oceanside kasbah setting with Andalusian garden',
    icon: MapPin,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CASABLANCA & TANGIER MUSEUMS
   ═══════════════════════════════════════════════════════════════ */

const otherCityMuseums = [
  {
    city: 'Casablanca',
    museums: [
      {
        name: 'Villa des Arts',
        description: 'A 1930s Art Deco villa converted into a contemporary art space managed by the Fondation ONA. The museum hosts rotating exhibitions of Moroccan and international contemporary art. The elegant architecture of the villa itself reflects Casablanca Art Deco heritage, and the intimate galleries create an engaging viewing experience.',
        price: 'from 20 MAD',
        hours: 'Tue-Sat 9:00-19:00 (closed Sundays & Mondays)',
        icon: Palette,
      },
      {
        name: 'Abderrahman Slaoui Foundation Museum',
        description: 'Housed in a stunning 1940s Art Deco building, this private museum displays the personal collection of the late Abderrahman Slaoui. Highlights include a remarkable collection of vintage Moroccan travel posters, jewelry, decorative arts, and ceramics. The Art Deco interior with its stained glass and ironwork is an attraction in its own right.',
        price: 'from 20 MAD',
        hours: 'Mon-Sat 10:00-18:00 (closed Sundays)',
        icon: Frame,
      },
    ],
  },
  {
    city: 'Tangier',
    museums: [
      {
        name: 'Kasbah Museum (Dar el Makhzen)',
        description: 'Occupying the former sultan palace in the Tangier Kasbah, this museum spans Moroccan history from prehistoric times through the Islamic era. Collections include Roman mosaics from Volubilis, Phoenician pottery, medieval maps, traditional textiles, and a stunning full-size replica of a Moroccan reception room. The palace courtyard features a centuries-old fig tree.',
        price: 'from 20 MAD',
        hours: 'Wed-Mon 10:00-18:00 (closed Tuesdays)',
        icon: Landmark,
      },
      {
        name: 'American Legation Museum',
        description: 'The only U.S. National Historic Landmark located outside the United States, this 1821 building commemorates Morocco being the first country to recognize American independence in 1777. The museum displays documents, paintings, photographs, and artifacts chronicling the 250-year diplomatic relationship between Morocco and the United States.',
        price: 'from 20 MAD',
        hours: 'Mon-Fri 10:00-13:00 & 15:00-17:00',
        icon: Globe,
      },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MUSEUM TYPES
   ═══════════════════════════════════════════════════════════════ */

const museumTypes = [
  {
    type: 'Contemporary & Modern Art',
    description: 'Morocco contemporary art scene has exploded in recent decades. MACMA in Marrakech leads the way with pan-African contemporary art, while the Mohammed VI Museum in Rabat showcases Moroccan modernists who blended Western techniques with Islamic motifs. Villa des Arts in Casablanca focuses on emerging talent.',
    examples: 'MACMA, Mohammed VI Museum, Villa des Arts',
    icon: Palette,
  },
  {
    type: 'History & Archaeology',
    description: 'From Roman bronzes to medieval manuscripts, Morocco history museums trace millennia of civilization. The Archaeological Museum in Rabat holds the finest Roman artifacts, while the Kasbah Museum in Tangier covers the breadth of Moroccan history from prehistory to the modern era.',
    examples: 'Archaeological Museum Rabat, Kasbah Museum Tangier, Borj Nord Fes',
    icon: Landmark,
  },
  {
    type: 'Ethnographic & Traditional Arts',
    description: 'Ethnographic museums preserve the living heritage of Morocco diverse cultures. Dar Si Said in Marrakech is the crown jewel of traditional craftsmanship, while the Batha Museum in Fes specializes in Fassi artisanal traditions. The Berber Museum at Majorelle celebrates Amazigh culture.',
    examples: 'Dar Si Said, Batha Museum, Berber Museum, Oudayas Museum',
    icon: Heart,
  },
  {
    type: 'Photography & Visual Arts',
    description: 'The Maison de la Photographie in Marrakech pioneered the photography museum concept in Morocco, displaying vintage images from the 1870s to 1950s. Private galleries in Marrakech and Tangier increasingly host photographic exhibitions exploring contemporary Moroccan identity.',
    examples: 'Maison de la Photographie, MACMA galleries',
    icon: Camera,
  },
  {
    type: 'Fashion & Design',
    description: 'The Yves Saint Laurent Museum in Marrakech brought fashion into Morocco museum landscape. The museum celebrates the intersection of Moroccan culture and haute couture, displaying how Morocco colors, patterns, and light shaped one of the 20th century greatest designers.',
    examples: 'Yves Saint Laurent Museum, Museum of Confluences',
    icon: Star,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRACTICAL TIPS
   ═══════════════════════════════════════════════════════════════ */

const practicalTips = [
  'Most government-run museums in Morocco close on Tuesdays. Private museums like the YSL Museum and MACMA are generally open daily. Always check specific schedules before visiting.',
  'Standard opening hours for most museums are 9:00 or 10:00 to 17:00 or 18:00. During Ramadan, hours are typically shortened, often closing by 15:00 or 16:00. Summer hours may extend until 18:30 or 19:00.',
  'Photography without flash is permitted in most museums, sometimes for a small additional fee (from 10 MAD). Tripods and professional equipment generally require prior authorization. Ask at the ticket desk.',
  'Student discounts are widely available at government museums. Bring an international student card (ISIC) for reduced admission, often 50 percent off standard prices.',
  'Guided tours are available at major museums like the Mohammed VI Museum and MACMA. English-speaking guides can be arranged at the ticket counter or booked in advance for from 100 MAD.',
  'Museum gift shops, particularly at the YSL Museum and MACMA, offer high-quality books, prints, and Moroccan design objects that make excellent souvenirs beyond the souk.',
  'Visit popular museums like the YSL Museum early in the morning (10:00 opening) or in the last two hours before closing to avoid tour group crowds.',
  'Combine the Berber Museum with Jardin Majorelle and the YSL Museum for a half-day cultural experience in the Gueliz district of Marrakech.',
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST MUSEUMS BY INTEREST
   ═══════════════════════════════════════════════════════════════ */

const bestByInterest = [
  { interest: 'Art Lovers', museums: 'MACMA (Marrakech), Mohammed VI Museum (Rabat), Villa des Arts (Casablanca)', reason: 'World-class contemporary and modern art collections spanning Moroccan and international artists.', icon: Palette },
  { interest: 'History Buffs', museums: 'Archaeological Museum (Rabat), Kasbah Museum (Tangier), Borj Nord (Fes)', reason: 'Trace Morocco story from prehistoric cave dwellers to Roman colonists to Islamic dynasties.', icon: BookOpen },
  { interest: 'Fashion & Design', museums: 'Yves Saint Laurent Museum (Marrakech), Museum of Confluences (Marrakech)', reason: 'Haute couture, design innovation, and the cultural cross-pollination between Morocco and Europe.', icon: Star },
  { interest: 'Photography', museums: 'Maison de la Photographie (Marrakech), Slaoui Foundation (Casablanca)', reason: 'Vintage and contemporary photography documenting Moroccan life across the centuries.', icon: Camera },
  { interest: 'Moroccan Crafts', museums: 'Dar Si Said (Marrakech), Batha Museum (Fes), Oudayas Museum (Rabat)', reason: 'Zellige, cedarwood carving, Berber jewelry, ceramics, and traditional textiles at their finest.', icon: Heart },
  { interest: 'Families with Kids', museums: 'Berber Museum (Marrakech), Borj Nord (Fes), Kasbah Museum (Tangier)', reason: 'Interactive displays, fortress settings, and tangible artifacts that captivate young visitors.', icon: Users },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into Moroccan traditions, festivals, arts, music, and the rich cultural heritage that makes the kingdom unique.',
    icon: Globe,
  },
  {
    href: '/history',
    title: 'Morocco History Overview',
    description: 'A concise overview of Moroccan history from ancient times to the modern kingdom, covering all major periods and events.',
    icon: BookOpen,
  },
  {
    href: '/morocco-history-guide',
    title: 'Complete History Guide',
    description: 'In-depth guide to 3,000 years of Moroccan dynasties, conquests, independence, and the historical sites that tell the story.',
    icon: Landmark,
  },
  {
    href: '/attractions',
    title: 'Morocco Attractions',
    description: 'Discover the top attractions across Morocco, from ancient medinas and imperial cities to natural wonders and coastal towns.',
    icon: MapPin,
  },
  {
    href: '/architecture',
    title: 'Moroccan Architecture Guide',
    description: 'From riads and kasbahs to mosques and madrasas, explore the architectural traditions that define Morocco built heritage.',
    icon: Building,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMuseumsPage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Museums in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            Art &amp; Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Museums in Morocco
            <br className="hidden md:block" /> Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From contemporary art at MACMA to the haute couture of Yves Saint Laurent, from Roman bronzes in Rabat
            to Berber jewelry in Marrakech &mdash; discover Morocco&apos;s extraordinary museum scene.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Kingdom of Art, History &amp; Heritage
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco may be famous for its souks, medinas, and mountain landscapes, but the kingdom&apos;s
                museum scene has undergone a remarkable transformation in recent years. From the opening of
                North Africa&apos;s first modern art museum in Rabat to the architectural triumph of the
                Yves Saint Laurent Museum in Marrakech, Morocco is now a serious destination for art and
                culture enthusiasts.
              </p>
              <p>
                The country&apos;s museums span an extraordinary range: world-class contemporary art galleries
                sit alongside 19th-century palaces filled with traditional craftsmanship. Fortress museums
                display medieval weapons while photography galleries document a vanishing way of life. Roman
                bronzes stand beside Berber jewelry, and haute couture shares space with zellige tilework.
              </p>
              <p>
                Whether you&apos;re an art lover, history buff, architecture enthusiast, or simply looking
                for a cool retreat from the medina heat, Morocco&apos;s museums offer some of the most
                rewarding experiences the kingdom has to offer. This guide covers the best museums across
                five major cities, with practical information on tickets, hours, and how to make the most
                of your visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Museum Stats at a Glance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Museums at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about the Moroccan museum landscape that every visitor should know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Major Museums', value: '30+ Nationwide', detail: 'Across Marrakech, Fes, Rabat, Casablanca, and Tangier', icon: Building },
              { label: 'Admission Range', value: '10-100 MAD', detail: 'Government museums from 10 MAD, private from 50-100 MAD', icon: Ticket },
              { label: 'Closed Day', value: 'Tuesdays', detail: 'Most government museums close on Tuesdays, not Mondays', icon: Calendar },
              { label: 'Museum Capital', value: 'Marrakech', detail: 'Home to 8+ major museums including MACMA and YSL', icon: Star },
            ].map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Marrakech Museums ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s museum capital boasts the richest and most diverse collection of museums in the country.
          </p>

          <div className="space-y-4">
            {marrakechMuseums.map((museum) => {
              const MuseumIcon = museum.icon;
              return (
                <div key={museum.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MuseumIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {museum.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {museum.price}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {museum.hours}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{museum.description}</p>
                      <p className="text-xs text-[var(--color-accent)] font-medium">
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        {museum.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fes Museums ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fes Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The spiritual and intellectual capital of Morocco, Fes houses museums that reflect centuries of artisanal mastery.
          </p>

          <div className="space-y-4">
            {fesMuseums.map((museum) => {
              const MuseumIcon = museum.icon;
              return (
                <div key={museum.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MuseumIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {museum.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {museum.price}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {museum.hours}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{museum.description}</p>
                      <p className="text-xs text-[var(--color-accent)] font-medium">
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        {museum.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Rabat Museums ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rabat Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The capital city is home to Morocco&apos;s flagship national museums and finest archaeological collections.
          </p>

          <div className="space-y-4">
            {rabatMuseums.map((museum) => {
              const MuseumIcon = museum.icon;
              return (
                <div key={museum.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MuseumIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {museum.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {museum.price}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {museum.hours}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{museum.description}</p>
                      <p className="text-xs text-[var(--color-accent)] font-medium">
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        {museum.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Casablanca & Tangier Museums ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Casablanca &amp; Tangier Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s economic capital and northern gateway each offer distinctive museum experiences.
          </p>

          {otherCityMuseums.map((cityGroup) => (
            <div key={cityGroup.city} className="mb-8 last:mb-0">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Building className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                {cityGroup.city}
              </h3>
              <div className="space-y-4">
                {cityGroup.museums.map((museum) => {
                  const MuseumIcon = museum.icon;
                  return (
                    <div key={museum.name} className="card-moroccan p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                          <MuseumIcon className="w-5 h-5 text-[var(--color-accent)]" />
                        </div>
                        <div>
                          <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                            {museum.name}
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                              {museum.price}
                            </span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                              {museum.hours}
                            </span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{museum.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Museum Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Museums in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the different museum categories helps you plan visits around your interests.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {museumTypes.map((mt) => {
              const TypeIcon = mt.icon;
              return (
                <div key={mt.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TypeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {mt.type}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{mt.description}</p>
                  <p className="text-xs text-[var(--color-gold)] font-medium">
                    <Star className="w-3 h-3 inline mr-1" />
                    Key museums: {mt.examples}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Museum Passes & Combo Tickets ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ticket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Museum Passes &amp; Combo Tickets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to save money and maximize your museum visits across Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {[
                { title: 'Majorelle + YSL Combined Ticket', detail: 'The most popular combo ticket in Morocco bundles Jardin Majorelle, the Berber Museum, and the Yves Saint Laurent Museum for from 180 MAD. This saves approximately 20 percent compared to buying each ticket separately and allows you to explore the entire Gueliz cultural district in a half day.', icon: Ticket },
                { title: 'Foundation Nationale des Musees (FNM)', detail: 'The FNM manages many of Morocco major museums including the Mohammed VI Museum, Dar Si Said, and the Kasbah Museum in Tangier. While no formal multi-museum pass exists, FNM museums typically share consistent pricing (from 20 MAD) and a uniform Tuesday closure day.', icon: Building },
                { title: 'City Tourist Passes', detail: 'Some cities offer tourist passes that include museum entries alongside other attractions. Check at local tourist offices (Offices du Tourisme) in Marrakech, Fes, and Rabat for current offerings. These passes are not always well-advertised but can offer significant savings for multi-day visits.', icon: Globe },
                { title: 'Student & Group Discounts', detail: 'Government museums offer 50 percent discounts for students with valid ISIC cards. Group rates (typically 10 or more visitors) are available at most museums. Children under 12 often enter free. Moroccan nationals pay reduced rates at all government-run institutions.', icon: Users },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Budget Tip: Free Museum Days
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Some museums offer free admission on certain days, particularly during national holidays
                  and cultural events. The Mohammed VI Museum in Rabat has occasionally offered free entry
                  on International Museum Day (May 18). Check locally for current free admission schedules,
                  as these can change seasonally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Museums by Interest ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Museums by Interest
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tailored recommendations based on what you&apos;re most passionate about.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestByInterest.map((item) => {
              const IntIcon = item.icon;
              return (
                <div key={item.interest} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <IntIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.interest}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{item.reason}</p>
                  <p className="text-xs text-[var(--color-gold)] font-medium">
                    <Star className="w-3 h-3 inline mr-1" />
                    {item.museums}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Visitor Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential information on hours, tickets, photography, and making the most of your museum visits.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {practicalTips.map((tip, i) => (
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
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about visiting museums in Morocco.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring Moroccan culture, history, and architecture with these essential guides.
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
          <Landmark className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Discover Morocco Through Its Museums
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            From the contemporary galleries of MACMA to the Roman bronzes of Rabat, from YSL&apos;s haute couture
            to the Berber treasures of Dar Si Said &mdash; Morocco&apos;s museums unlock layers of history,
            art, and culture that the souks and medinas only hint at. Step inside and see the kingdom
            from a new perspective.
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
              href="/morocco-history-guide"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              History of Morocco
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Museum opening hours, ticket prices, and policies are based on information available as of March 2026.
            Hours may vary during Ramadan, national holidays, and summer months. Seasonal pricing can vary.
            Always confirm details directly with each museum before visiting.
          </p>
        </div>
      </section>
    </>
  );
}

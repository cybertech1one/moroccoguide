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
  Camera,
  Eye,
  Sparkles,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-art-galleries`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Art Galleries Guide 2026 | Contemporary Art, Street Art & Gallery Scene',
  description:
    'Complete guide to Morocco\'s art galleries and contemporary art scene. MACAAL, Comptoir des Mines, Galerie 127, Loft Art Gallery, Dar Si Said, street art districts, 1-54 Marrakech Art Fair, Jardin Majorelle, studio visits, and how to buy Moroccan art.',
  keywords: [
    'morocco art galleries',
    'moroccan contemporary art',
    'marrakech art scene',
    'MACAAL Morocco',
    'Comptoir des Mines Marrakech',
    'Galerie 127 Marrakech',
    'Loft Art Gallery Casablanca',
    'Dar Si Said museum',
    'Jardin Majorelle art',
    'morocco street art',
    '1-54 art fair marrakech',
    'buying moroccan art',
    'morocco art festivals',
    'moroccan emerging artists',
    'tangier art galleries',
    'essaouira art scene',
    'casablanca contemporary art',
    'rabat Mohammed VI museum',
    'morocco studio visits',
    'moroccan calligraphy art',
    'morocco photography galleries',
  ],
  openGraph: {
    title: 'Morocco Art Galleries Guide 2026 | Contemporary Art, Street Art & Gallery Scene',
    description:
      'From MACAAL and Comptoir des Mines to Essaouira\'s Gnaoua-inspired painters and Tangier\'s Beat Generation legacy. The complete guide to Morocco\'s galleries, museums, street art, art fairs, and emerging artists.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/art-moroccan-calligraphy.webp`,
        width: 1200,
        height: 630,
        alt: 'Contemporary Moroccan art gallery with calligraphy and geometric works on display',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Art Galleries Guide 2026 | Contemporary Art & Gallery Scene',
    description:
      'MACAAL, Comptoir des Mines, Galerie 127, street art, 1-54 Art Fair, studio visits, and buying Moroccan art. The full guide to Morocco\'s gallery scene.',
    images: [`${BASE_URL}/images/art-moroccan-calligraphy.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What are the best art galleries in Marrakech?',
    a: 'MACAAL (Museum of African Contemporary Art Al Maaden) and Comptoir des Mines top the list for contemporary work. Galerie 127 is the only gallery in Africa dedicated exclusively to fine-art photography. Dar Si Said houses the finest collection of traditional Moroccan decorative arts. Musee Yves Saint Laurent and Jardin Majorelle round out the must-visit circuit in Gueliz.',
  },
  {
    q: 'How much do Morocco gallery and museum tickets cost?',
    a: 'Many commercial galleries are free to enter. Museum admission ranges from 10 MAD at smaller institutions to 100 MAD at Musee Yves Saint Laurent. Jardin Majorelle charges from 150 MAD for the garden plus 30 MAD for the Berber Museum. MACAAL costs from 60 MAD. Mohammed VI Museum in Rabat is 40 MAD. Seasonal pricing can change during peak months.',
  },
  {
    q: 'Is there a serious contemporary art scene in Morocco?',
    a: 'Morocco has one of Africa\'s most developed contemporary art markets. The 1-54 Contemporary African Art Fair has held its Marrakech edition annually since 2018. Over 40 commercial galleries operate across the country. Artists like Hassan Hajjaj, Mahi Binebine, and Lalla Essaydi exhibit globally. The Mohammed VI Museum in Rabat is the largest modern art museum on the African continent.',
  },
  {
    q: 'Can I buy Moroccan art and have it shipped internationally?',
    a: 'Yes. Established galleries handle international shipping regularly through DHL, FedEx, or specialist art couriers. Expect prices from 2,000 MAD for emerging artist prints to 200,000+ MAD for major works. Galleries provide certificates of authenticity and customs documentation. Shipping to Europe runs from 500 MAD to 3,000 MAD depending on size.',
  },
  {
    q: 'Where can I see street art in Morocco?',
    a: 'Rabat is the street art capital thanks to the annual Jidar - Toiles de Rue festival, which has produced over 100 large-scale murals since 2015. Casablanca\'s Ain Sebaa industrial district has a growing scene around L\'Uzine art space. In Marrakech, the Gueliz district has murals curated by David Bloch Gallery. Asilah has hosted public mural painting during its cultural moussem since 1978.',
  },
  {
    q: 'When is the best time to visit Morocco for art events?',
    a: 'February is the peak month because of the 1-54 Contemporary African Art Fair at La Mamounia in Marrakech. Spring brings the Jidar Street Art Festival in Rabat. June has the Gnaoua Festival in Essaouira. October through April is the main gallery season across all cities. July and August are quieter as many gallerists travel and exhibition programming slows.',
  },
  {
    q: 'Can I visit artist studios in Morocco?',
    a: 'Several programs welcome studio visits. Le 18 in Marrakech and L\'Uzine in Casablanca hold monthly open-studio events. In Essaouira, many painters in the medina work with their doors open and welcome visitors. The Ain Nokbi pottery quarter in Fes and the Colline des Potiers in Safi allow walk-in visits to working ceramic studios.',
  },
  {
    q: 'Are there art residencies in Morocco open to international artists?',
    a: 'Several residencies welcome international applicants. Le 18 in Marrakech, Dar al-Ma\'mun near the Haouz Plain, the Montresso Foundation (Jardin Rouge), LE CUBE in Casablanca, and the Asilah Forum Foundation all accept foreign artists. Programs typically run 4-8 weeks and include studio space, accommodation, and sometimes a production budget. Applications open 6-12 months ahead.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Art Galleries Guide 2026',
  description:
    'Comprehensive guide to Morocco\'s art galleries, contemporary art spaces, street art, art festivals, traditional craft, buying tips, and emerging artists across Marrakech, Casablanca, Rabat, Essaouira, and Tangier.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/art-moroccan-calligraphy.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Art Galleries Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: MARRAKECH GALLERIES
   ================================================================ */

const marrakechGalleries = [
  {
    name: 'MACAAL (Museum of African Contemporary Art Al Maaden)',
    location: 'Al Maaden, Route de l\'Ourika',
    focus: 'The first museum in North Africa dedicated to contemporary African art. The collection spans painting, sculpture, photography, video, and installation from across the continent, with a strong representation of Moroccan and West African artists.',
    highlight: 'The permanent collection holds over 2,000 works. Rotating exhibitions change every three months, often pairing established African artists with emerging talent. The sculpture garden is worth the visit alone.',
    price: 'from 60 MAD',
    hours: 'Wed-Mon: 10:00-18:00, closed Tuesday',
  },
  {
    name: 'Comptoir des Mines Galerie',
    location: 'Gueliz, near Place du 16 Novembre',
    focus: 'One of Marrakech\'s most ambitious contemporary art spaces, housed in a converted industrial building. The gallery represents a roster of established Moroccan and international artists, mounting solo exhibitions that push boundaries between painting, sculpture, and installation.',
    highlight: 'The raw, high-ceilinged exhibition space suits large-scale works. Past shows have featured monumental sculptures and site-specific installations that could not fit in traditional gallery settings.',
    price: 'Free entry',
    hours: 'Mon-Sat: 10:00-13:00, 15:00-19:00',
  },
  {
    name: 'Galerie 127',
    location: 'Avenue Mohammed V, Gueliz',
    focus: 'Africa\'s only gallery dedicated exclusively to fine-art photography. Founded by Nathalie Locatelli, the gallery exhibits both historical and contemporary photography with a focus on images from and about Morocco, the Maghreb, and the wider African continent.',
    highlight: 'Solo exhibitions rotate every six weeks. The gallery has shown work by Daoud Aoulad-Syad, Hicham Benohoud, and Touhami Ennadre, and regularly participates in Paris Photo and Photo London fairs.',
    price: 'Free entry',
    hours: 'Tue-Sat: 10:00-13:00, 15:30-19:30',
  },
  {
    name: 'Dar Si Said (Museum of Moroccan Arts)',
    location: 'Riad Zitoun el-Jdid, Medina',
    focus: 'Traditional Moroccan decorative arts in a restored 19th-century palace. Collections include cedarwood carvings, Berber jewelry, zellige panels, embroidered textiles, antique carpets, and painted wood ceilings that took maallems over a decade to complete.',
    highlight: 'The marble basin from 10th-century Cordoba in the central courtyard. The painted wooden ceilings are among the finest surviving examples of zouak in the medina.',
    price: 'from 30 MAD',
    hours: 'Wed-Mon: 9:00-18:00, closed Tuesday',
  },
  {
    name: 'Musee Yves Saint Laurent Marrakech',
    location: 'Rue Yves Saint Laurent, Gueliz',
    focus: 'Fashion design and haute couture archives alongside rotating contemporary exhibitions. The Studio KO-designed building, clad in terracotta inspired by fabric weave, is an architectural statement in itself.',
    highlight: 'The permanent exhibition rotates 50 of YSL\'s 5,000 garments biannually. The temporary exhibition hall hosts major international shows curated independently of the fashion archive.',
    price: 'from 100 MAD (students 50 MAD)',
    hours: 'Tue-Sun: 10:00-18:00, closed Monday',
  },
  {
    name: 'Jardin Majorelle & Berber Museum',
    location: 'Rue Yves Saint Laurent, Gueliz',
    focus: 'Amazigh cultural heritage displayed inside the cobalt-blue Art Deco studio built by Jacques Majorelle in 1931. Pierre Berge\'s personal collection of over 600 Berber artifacts, arranged by region, covers jewelry, textiles, weapons, and ceremonial objects.',
    highlight: 'The garden contains 300+ plant species from five continents. The intensity of the Majorelle blue against desert plants makes this one of the most photographed places in Morocco.',
    price: 'from 150 MAD (garden) + 30 MAD (Berber Museum)',
    hours: 'Daily: 8:00-17:30 (Oct-Apr), 8:00-18:00 (May-Sep)',
  },
  {
    name: 'David Bloch Gallery',
    location: '8 bis Rue des Vieux Marrakchis, Gueliz',
    focus: 'Contemporary urban art, street art, pop art, and sculpture. The gallery represents both Moroccan and international artists working at the intersection of street culture and fine art, and curates outdoor murals throughout the Gueliz district.',
    highlight: 'Annual solo shows by leading urban artists. The gallery\'s street art map of Gueliz murals is free at the front desk and makes for an excellent self-guided walking tour.',
    price: 'Free entry',
    hours: 'Mon-Sat: 10:00-13:00, 15:00-19:00',
  },
  {
    name: 'Maison de la Photographie',
    location: 'Rue Ahl Fes, Medina',
    focus: 'Historical photography of Morocco from 1870 to 1960, plus rotating exhibitions of contemporary Moroccan photographers. The restored riad functions as both gallery and architectural exhibition.',
    highlight: 'Hand-colored glass plates from the French Protectorate period. The rooftop terrace offers panoramic Atlas views alongside the photographic collection.',
    price: 'from 50 MAD',
    hours: 'Daily: 9:30-19:00',
  },
] as const;

/* ================================================================
   DATA: CASABLANCA ART SPACES
   ================================================================ */

const casablancaGalleries = [
  {
    name: 'Loft Art Gallery',
    location: 'Quartier Gauthier, Casablanca',
    focus: 'One of Morocco\'s most respected commercial galleries, representing mid-career and established Moroccan artists. The gallery occupies a converted loft space with white walls and industrial details that let the art command attention.',
    highlight: 'The gallery\'s stable includes painters, sculptors, and mixed-media artists. It participates in international fairs including 1-54, Art Dubai, and AKAA Paris.',
    price: 'Free entry',
    hours: 'Tue-Sat: 10:00-19:00',
  },
  {
    name: 'L\'Uzine',
    location: 'Ain Sebaa industrial district',
    focus: 'A converted warehouse functioning as Casablanca\'s primary independent art center. Exhibitions, film screenings, concerts, theater, and workshops take place in raw concrete spaces that feel closer to Berlin than North Africa.',
    highlight: 'Monthly open-studio events where resident artists open their workspaces. The rooftop hosts summer cinema nights. The surrounding Ain Sebaa district has become a magnet for street art.',
    price: 'from 20 MAD (varies by event)',
    hours: 'Wed-Sun: 14:00-20:00, events until 23:00',
  },
  {
    name: 'Le Cube - independent art room',
    location: 'Rue Abou Mahassine Arrouyani, Gauthier',
    focus: 'Morocco\'s only dedicated new media art space. Video art, digital installations, experimental sound, and interactive works. The gallery commissions site-specific projects and runs a digital artist residency.',
    highlight: 'The annual Screen Festival transforms the space into an immersive audiovisual environment drawing artists from across Africa and Europe.',
    price: 'Free entry',
    hours: 'Tue-Sat: 11:00-19:00',
  },
  {
    name: 'Villa des Arts Casablanca',
    location: '30 Boulevard Brahim Roudani, Maarif',
    focus: 'The ONA Foundation\'s flagship cultural space. Two floors dedicated to modern and contemporary Moroccan art, with emphasis on emerging talent and mid-career retrospectives.',
    highlight: 'The annual "Regards Croises" group show pairs established and emerging artists around a single theme. The building\'s Art Deco facade is a Casablanca landmark.',
    price: 'Free entry',
    hours: 'Tue-Sat: 10:00-19:00, closed Sunday-Monday',
  },
] as const;

/* ================================================================
   DATA: TANGIER & ESSAOUIRA GALLERIES
   ================================================================ */

const tangierGalleries = [
  {
    name: 'American Legation Museum',
    location: 'Rue d\'Amerique, Medina',
    focus: 'The only U.S. National Historic Landmark on foreign soil. This 1821 building houses paintings, maps, and photographs documenting the long relationship between Morocco and the United States.',
    highlight: 'The Paul Bowles Wing preserves the writer\'s personal library and recordings of Moroccan music. Contemporary exhibitions by Tangier-based artists rotate through rooms where American diplomats once negotiated treaties.',
    price: 'from 20 MAD',
    hours: 'Mon-Fri: 10:00-13:00, 14:00-17:00',
  },
  {
    name: 'Galerie Conil',
    location: 'Rue de la Liberte, Ville Nouvelle',
    focus: 'One of Tangier\'s longest-running commercial galleries, specializing in contemporary painting and sculpture by Northern Moroccan artists. The gallery has been central to Tangier\'s artistic renaissance since the 1990s.',
    highlight: 'Group shows pairing Tangerois painters with artists from across the Strait of Gibraltar, reflecting Tangier\'s identity as a bridge between Africa and Europe.',
    price: 'Free entry',
    hours: 'Mon-Sat: 10:00-13:00, 16:00-20:00',
  },
  {
    name: 'Cinematheque de Tanger',
    location: 'Rue du Cinema, Ville Nouvelle',
    focus: 'Part cinema archive, part cultural center. Beyond film programming, the space hosts photography and video art exhibitions in a restored Art Deco cinema from the International Zone era.',
    highlight: 'Annual retrospectives of Moroccan cinema alongside contemporary video art from North Africa.',
    price: 'from 30 MAD',
    hours: 'Tue-Sun: 14:00-22:00',
  },
] as const;

const essaouiraGalleries = [
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
    highlight: 'Programming tied to the Gnaoua and World Music Festival each June, with pre-festival exhibitions and artist talks.',
    price: 'Free entry',
    hours: 'Daily: 10:00-19:00',
  },
] as const;

/* ================================================================
   DATA: STREET ART DISTRICTS
   ================================================================ */

const streetArtDistricts = [
  {
    city: 'Rabat',
    district: 'Citywide (Medina to Hay Riad)',
    description: 'Morocco\'s street art capital. The annual Jidar - Toiles de Rue festival has produced over 100 large-scale murals since 2015. International and Moroccan artists paint building facades up to ten stories high, making Rabat one of the most significant outdoor galleries in Africa.',
    bestRoute: 'Start at the medina walls near Bab el-Had, walk through Hassan district, and continue to Hay Riad where the newest murals appear.',
  },
  {
    city: 'Casablanca',
    district: 'Ain Sebaa industrial quarter',
    description: 'The warehouse district around L\'Uzine has become a canvas for Casablanca\'s underground artists. Murals range from political commentary to abstract color explosions. The area is rougher than tourist zones but safe during daylight.',
    bestRoute: 'Walk the streets around L\'Uzine art space, then head toward the former factory buildings north of Boulevard Moulay Ismail.',
  },
  {
    city: 'Marrakech',
    district: 'Gueliz (Nouvelle Ville)',
    description: 'David Bloch Gallery has curated a constellation of murals across the Gueliz neighborhood. The gallery provides a free street art map at its front desk. Artists include L\'Atlas, Lek & Sowat, and Moroccan urban painters.',
    bestRoute: 'Pick up the map at David Bloch Gallery, then follow the route through Rue des Vieux Marrakchis, Avenue Mohammed V, and side streets.',
  },
  {
    city: 'Asilah',
    district: 'Medina walls',
    description: 'Asilah has hosted public mural painting during its annual cultural moussem since 1978. International artists paint directly on the whitewashed medina walls, creating a rotating open-air gallery. Some murals are preserved; others are whitewashed for the next year\'s artists.',
    bestRoute: 'Walk the full circuit of the medina walls. Every surface is a potential canvas.',
  },
] as const;

/* ================================================================
   DATA: ART EVENTS & FESTIVALS
   ================================================================ */

const artEvents = [
  {
    name: '1-54 Contemporary African Art Fair',
    location: 'La Mamounia Hotel, Marrakech',
    when: 'February (annual since 2018)',
    description: 'The Marrakech edition of London\'s premier African art fair. Around 20 galleries from Africa, Europe, and the Americas exhibit across La Mamounia\'s salons and gardens. VIP previews, artist talks, and satellite exhibitions across the city make this the single most important week on Morocco\'s art calendar. Works range from 2,000 to 500,000+ USD.',
  },
  {
    name: 'Marrakech Biennale',
    location: 'Various venues, Marrakech',
    when: 'Spring (intermittent scheduling)',
    description: 'Founded in 2005, the Biennale has used the Bahia Palace, Dar Si Said, and abandoned riads as exhibition spaces, transforming the medina into a citywide gallery. Scheduling has been irregular since 2016, so check the official site for upcoming editions.',
  },
  {
    name: 'Jidar - Toiles de Rue (Street Art Festival)',
    location: 'Rabat',
    when: 'Spring (annual since 2015)',
    description: 'Rabat\'s annual street art festival invites Moroccan and international muralists to paint large-scale works on building facades across the capital. Over 100 murals now cover walls throughout the city, making this one of North Africa\'s most significant public art events.',
  },
  {
    name: 'Gnaoua and World Music Festival',
    location: 'Essaouira',
    when: 'June (annual)',
    description: 'While primarily a music festival, Gnaoua draws Essaouira\'s artistic community together and sparks exhibitions, open studios, and live painting events throughout the medina. Galerie Damgaard and Espace Othello schedule their strongest shows around the festival dates.',
  },
  {
    name: 'Asilah Cultural Moussem',
    location: 'Asilah',
    when: 'Summer (annual since 1978)',
    description: 'One of the longest-running cultural festivals in Africa. International artists paint murals on medina walls, alongside literary readings, music performances, and philosophy symposia. The festival has drawn figures from Gabriel Garcia Marquez to leading African visual artists.',
  },
] as const;

/* ================================================================
   DATA: EMERGING MOROCCAN ARTISTS
   ================================================================ */

const emergingArtists = [
  {
    name: 'Hassan Hajjaj',
    medium: 'Photography, installation, fashion',
    note: 'Often called the "Andy Warhol of Marrakech." His pop-art portraits framed in Coca-Cola crates and Moroccan tea tins challenge Western and Moroccan stereotypes simultaneously. Collected by major international museums.',
  },
  {
    name: 'Mahi Binebine',
    medium: 'Sculpture, painting, literature',
    note: 'Creates tortured bronze and mixed-media figures referencing sub-Saharan migration and human suffering. Also an acclaimed novelist. His studio in Marrakech accepts visits by appointment.',
  },
  {
    name: 'Lalla Essaydi',
    medium: 'Photography, mixed media',
    note: 'Inscribes Arabic calligraphy onto the bodies and garments of Moroccan women, challenging orientalist representations. Her large-format photographs have been acquired by the Smithsonian and the British Museum.',
  },
  {
    name: 'Mohamed Melehi',
    medium: 'Painting, graphic design',
    note: 'A founding figure of Moroccan modernism who spent six decades developing hard-edge abstraction rooted in Moroccan geometric tradition. His flame-like wave motif became iconic. Passed in 2020 but his influence runs through a generation of Moroccan painters.',
  },
  {
    name: 'Ilias Selfati',
    medium: 'Painting, drawing',
    note: 'A younger-generation painter whose dense, layered canvases explore memory and urban life in Casablanca. Represented by Loft Art Gallery and shown at 1-54.',
  },
  {
    name: 'Safaa Erruas',
    medium: 'Sculpture, installation',
    note: 'Works with fragile materials like needles, pins, and white fabric to create delicate sculptures about vulnerability and resilience. Based in Tetouan, exhibited internationally including Venice Biennale satellite events.',
  },
] as const;

/* ================================================================
   DATA: STUDIO VISITS & WORKSHOPS
   ================================================================ */

const studioVisits = [
  {
    name: 'Le 18 Open Studios',
    city: 'Marrakech',
    type: 'Open studio + exhibition',
    details: 'This independent art space in the medina hosts two to three artists at a time and opens its doors to the public during end-of-residency exhibitions. Check their social media for dates.',
    price: 'Free',
  },
  {
    name: 'L\'Uzine Monthly Open Studios',
    city: 'Casablanca',
    type: 'Open studio',
    details: 'Resident artists in this converted warehouse open their workspaces once a month. A chance to see work in progress and buy directly from the artist.',
    price: 'Free',
  },
  {
    name: 'Ain Nokbi Pottery Quarter',
    city: 'Fes',
    type: 'Walk-in studio visit + workshop',
    details: 'The potters\' quarter welcomes visitors to watch wheel-throwing and freehand painting. Half-day workshops where you paint your own piece are available.',
    price: 'from 200 MAD for workshop',
  },
  {
    name: 'Colline des Potiers',
    city: 'Safi',
    type: 'Walk-in studio visit + workshop',
    details: 'Safi\'s potters\' hill has dozens of active studios. Walk in, watch the process, and try the kick wheel yourself. Painted ceramics available for purchase directly from artisans.',
    price: 'from 150 MAD for workshop',
  },
  {
    name: 'Essaouira Medina Painters',
    city: 'Essaouira',
    type: 'Open-door studios',
    details: 'Many Gnaoua-inspired painters in the medina work with their doors open. Walk in, watch them paint, and buy directly. Prices are negotiable and far lower than gallery rates.',
    price: 'from 300 MAD for small canvases',
  },
  {
    name: 'Calligraphy Studios',
    city: 'Marrakech / Fes',
    type: 'Workshop',
    details: 'Several medina riads and MACMA offer two-hour Arabic calligraphy introductions with ink, reed pen, and parchment. A hands-on way to connect with one of Morocco\'s oldest art forms.',
    price: 'from 250 MAD per person',
  },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoArtGalleriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/art-moroccan-calligraphy.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Art Galleries Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Palette className="w-4 h-4" />
            Art &amp; Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Art Galleries
            <br className="hidden md:block" /> &amp; Contemporary Art Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From MACAAL and Comptoir des Mines to Essaouira&apos;s Gnaoua painters and Tangier&apos;s
            Beat Generation legacy -- the full guide to Morocco&apos;s gallery scene, street art,
            art fairs, and studio visits.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            A Country Where Craft and Contemporary Art Coexist
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco bridges Africa and Europe across the 14-kilometer Strait of Gibraltar. Its
              cultural identity draws on Amazigh, Arab, Andalusian, Sub-Saharan, and French colonial
              traditions. That layered heritage has produced one of the most compelling art scenes on
              the African continent -- a scene that has accelerated since 2010.
            </p>
            <p>
              The Mohammed VI Museum opened in Rabat in 2014 as the first major public modern art
              museum in the Maghreb. The 1-54 Contemporary African Art Fair chose Marrakech as its
              third location (after London and New York) in 2018. Over 40 commercial galleries now
              operate across the country, up from fewer than a dozen in 2005.
            </p>
            <p>
              Morocco&apos;s artistic DNA runs through a thousand years of zellige tilework, carved
              stucco, Quranic calligraphy, Berber weaving, and painted wood. These are not museum
              relics but living practices, carried forward by master-apprentice relationships in
              workshops that function much as they did in the 14th century. At the same time, Hassan
              Hajjaj shoots pop-art portraits framed in Coca-Cola crates, Mahi Binebine sculpts
              tortured bronze figures about migration, and Lalla Essaydi inscribes calligraphy onto
              the bodies of Moroccan women. This guide maps the spaces where you can encounter all of it.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: Frame, label: 'Galleries & Museums', value: '40+' },
              { icon: MapPin, label: 'Cities with Art Scenes', value: '6 major' },
              { icon: Calendar, label: 'Major Art Events', value: '5 annual' },
              { icon: Users, label: 'Active Contemporary Artists', value: '200+' },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-5 text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" />
                <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marrakech Galleries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech Galleries &amp; Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Red City dominates Morocco&apos;s art market. MACAAL, Comptoir des Mines, Galerie
            127, and a dozen other spaces cluster between Gueliz and the medina.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marrakechGalleries.map((gallery) => (
              <div key={gallery.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {gallery.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  {gallery.location}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{gallery.focus}</p>
                <div className="bg-[var(--color-accent)]/5 rounded-lg p-3 mb-3">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <Star className="w-4 h-4 text-[var(--color-gold)] inline mr-1" />
                    <strong>Highlight:</strong> {gallery.highlight}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
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

      {/* ── Casablanca Art Spaces ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Casablanca Art Spaces
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s economic capital has developed a raw, independent art scene in converted
            warehouses and modernist villas. Loft Art Gallery, L&apos;Uzine, and Le Cube lead the way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {casablancaGalleries.map((space) => (
              <div key={space.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {space.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  {space.location}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{space.focus}</p>
                <div className="bg-[var(--color-accent)]/5 rounded-lg p-3 mb-3">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <Star className="w-4 h-4 text-[var(--color-gold)] inline mr-1" />
                    <strong>Highlight:</strong> {space.highlight}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
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

      {/* ── Tangier & Essaouira ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tangier &amp; Essaouira: Coastal Creative Hubs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two coastal cities with distinct creative identities -- Tangier&apos;s Beat Generation
            literary legacy and Essaouira&apos;s Gnaoua-inspired art movement.
          </p>

          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
            Tangier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tangierGalleries.map((gallery) => (
              <div key={gallery.name} className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {gallery.name}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mb-2">{gallery.focus}</p>
                <div className="flex items-center justify-between text-xs mt-3">
                  <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
                    <Ticket className="w-3.5 h-3.5" /> {gallery.price}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--text-secondary)]">
                    <Clock className="w-3.5 h-3.5" /> {gallery.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
            Essaouira
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {essaouiraGalleries.map((gallery) => (
              <div key={gallery.name} className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {gallery.name}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mb-2">{gallery.focus}</p>
                <div className="bg-[var(--color-accent)]/5 rounded-lg p-2 mb-2">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <Star className="w-3.5 h-3.5 text-[var(--color-gold)] inline mr-1" />
                    {gallery.highlight}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
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
      </section>

      {/* ── Street Art Districts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Brush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Street Art Districts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s street art scene has exploded since 2015. These four cities offer the best
            outdoor galleries -- all free, all open around the clock.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {streetArtDistricts.map((district) => (
              <div key={district.city} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  {district.city} -- {district.district}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{district.description}</p>
                <div className="bg-[var(--color-accent)]/5 rounded-lg p-3">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <Eye className="w-3.5 h-3.5 text-[var(--color-gold)] inline mr-1" />
                    <strong>Best route:</strong> {district.bestRoute}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Art Events & Festivals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Art Events &amp; Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s art calendar peaks in February and spring, but cultural events run year-round.
            Plan around these dates to see the scene at full intensity.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {artEvents.map((event) => (
              <div key={event.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {event.name}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[var(--color-accent)]" />
                    {event.when}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emerging Moroccan Artists ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Artists to Know
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These artists represent the range and ambition of Morocco&apos;s creative scene, from
            internationally collected figures to emerging voices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergingArtists.map((artist) => (
              <div key={artist.name} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {artist.name}
                </h3>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">{artist.medium}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{artist.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buying Moroccan Art ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying Moroccan Art
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Galleries, souks, or directly from artists -- each channel has different price dynamics,
            quality guarantees, and logistics.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Frame className="w-5 h-5 text-[var(--color-accent)]" />
                Gallery Purchases
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><strong>Fixed prices:</strong> No haggling. Prices include framing and documentation.</li>
                <li><strong>Certificate of authenticity</strong> provided with every purchase.</li>
                <li><strong>International shipping</strong> arranged by the gallery (DHL, FedEx, or art couriers).</li>
                <li><strong>Price range:</strong> from 2,000 MAD for prints to 500,000+ MAD for major works.</li>
                <li><strong>Tax:</strong> 20% VAT included in listed prices.</li>
                <li><strong>Best for:</strong> Collectors seeking investment-grade contemporary art with provenance.</li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[var(--color-accent)]" />
                Souk &amp; Direct Purchases
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><strong>Negotiable prices:</strong> Start at 40-50% of asking price and work up.</li>
                <li><strong>No certificates</strong> -- authenticity depends on your own judgment.</li>
                <li><strong>You handle shipping:</strong> DHL and FedEx offices in all major cities.</li>
                <li><strong>Price range:</strong> from 50 MAD for small crafts to 15,000 MAD for fine carpets.</li>
                <li><strong>Watch for:</strong> Machine-made items sold as handmade, especially rugs and ceramics.</li>
                <li><strong>Best for:</strong> Traditional crafts, rugs, ceramics, leather, and decorative items.</li>
              </ul>
            </div>

            <div className="card-moroccan p-6 md:col-span-2">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-accent)]" />
                Shipping &amp; Customs Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
                <div>
                  <p className="mb-2"><strong>Galleries</strong> handle crating, customs paperwork, and door-to-door delivery for purchases over 5,000 MAD. Expect from 500 MAD to 3,000 MAD for shipping to Europe. Seasonal pricing can change.</p>
                  <p><strong>Customs declaration:</strong> Keep your receipt. Art imports under certain thresholds are duty-free in most countries; check your home country&apos;s rules.</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Souk purchases:</strong> The DHL office on Avenue Mohammed V in Marrakech handles fragile items daily. Bring your item already wrapped and they provide outer packaging. From 300 MAD for small parcels to Europe.</p>
                  <p><strong>Antiques:</strong> Items over 100 years old may require an export permit from the Ministry of Culture. Verify age claims carefully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Studio Visits & Workshops ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Studio Visits &amp; Workshops
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Go beyond the gallery walls. These studios and workshops welcome visitors,
            from casual observers to hands-on participants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studioVisits.map((studio) => (
              <div key={studio.name} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {studio.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {studio.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {studio.type}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-3">{studio.details}</p>
                <span className="text-xs font-semibold text-[var(--color-accent)] flex items-center gap-1">
                  <CircleDollarSign className="w-3.5 h-3.5" /> {studio.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Images ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/art-moroccan-pattern-zellige.webp', alt: 'Zellige tilework pattern in traditional geometric design' },
              { src: '/images/art-berber-carpet-weaving.webp', alt: 'Berber woman weaving a traditional carpet on a handloom' },
              { src: '/images/art-street-art.webp', alt: 'Street art mural on a Moroccan building facade' },
              { src: '/images/art-moroccan-lanterns.webp', alt: 'Handcrafted Moroccan brass lanterns in a gallery setting' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-square group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about Morocco&apos;s art scene, gallery visits,
            buying art, and planning an art-focused trip.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Architecture',
                description: 'Islamic design, riads, kasbahs, and Moorish masterpieces across thirteen centuries.',
                href: '/morocco-architecture',
                icon: Landmark,
              },
              {
                title: 'Morocco Photography Guide',
                description: 'Best locations, camera gear tips, permissions, and the golden-hour spots locals know.',
                href: '/morocco-photography',
                icon: Camera,
              },
              {
                title: 'Morocco Pottery & Ceramics',
                description: 'Fes blue-and-white, Safi polychrome, and Tamegroute green-glaze pottery traditions.',
                href: '/morocco-pottery-ceramics',
                icon: Layers,
              },
              {
                title: 'Marrakech City Guide',
                description: 'The complete guide to the Red City -- medina, Gueliz, gardens, food, and accommodation.',
                href: '/morocco-marrakech',
                icon: Star,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#A0522D] to-[#7a3d20] text-white">
        <div className="container-morocco text-center max-w-3xl">
          <Palette className="w-12 h-12 mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Plan Your Morocco Art Trip
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Morocco&apos;s art scene rewards the curious. From the grand halls of MACAAL to a
            maallem&apos;s zellige workshop in the back streets of Fes, the creative pulse of this
            country runs deep. Start with the galleries, stay for the studios, and leave with art
            you will not find anywhere else.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#A0522D] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              Marrakech Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-architecture"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Architecture Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

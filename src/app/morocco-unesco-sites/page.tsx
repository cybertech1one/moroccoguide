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
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Landmark,
  Camera,
  Calendar,
  Globe,
  Mountain,
  Navigation,
  Ticket,
  Map,
  Music,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco UNESCO World Heritage Sites 2026 | Complete Guide to All 9 Sites',
  description:
    'Complete guide to all 9 UNESCO World Heritage Sites in Morocco. Visit the medinas of Fes, Marrakech, Essaouira, and Tetouan, Ait-Ben-Haddou, Volubilis, Meknes, El Jadida, and Rabat. Entry fees, best times, itineraries, and insider tips.',
  keywords: [
    'unesco morocco sites',
    'world heritage sites morocco',
    'UNESCO sites in Morocco',
    'Morocco heritage sites',
    'morocco UNESCO',
    'cultural heritage morocco',
    'medina of fes UNESCO',
    'ait ben haddou',
    'volubilis roman ruins',
    'marrakech medina heritage',
    'meknes UNESCO',
    'tetouan medina',
    'essaouira UNESCO',
    'el jadida portuguese city',
    'rabat modern capital UNESCO',
    'morocco intangible heritage',
    'gnawa music UNESCO',
    'couscous UNESCO heritage',
    'morocco cultural tourism',
    'UNESCO world heritage Morocco list',
  ],
  openGraph: {
    title: 'Morocco UNESCO World Heritage Sites 2026 | Complete Guide to All 9 Sites',
    description:
      'Explore all 9 UNESCO World Heritage Sites in Morocco. From ancient Roman ruins to medieval medinas and modern architecture. Entry fees, itineraries, and visiting tips.',
    url: `${BASE_URL}/morocco-unesco-sites`,
    images: [
      {
        url: `${BASE_URL}/images/hero-ait-ben-haddou.webp`,
        width: 1200,
        height: 630,
        alt: 'Ait-Ben-Haddou ksar UNESCO World Heritage Site in Morocco with traditional earthen architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco UNESCO World Heritage Sites 2026 | All 9 Sites Guide',
    description:
      'Complete guide to all 9 UNESCO World Heritage Sites in Morocco. Ancient medinas, Roman ruins, kasbahs, and modern architecture. Entry fees, tips, and itineraries.',
    images: [`${BASE_URL}/images/hero-ait-ben-haddou.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-unesco-sites` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-unesco-sites`,
  name: 'Morocco UNESCO World Heritage Sites 2026 | Complete Guide to All 9 Sites',
  description:
    'Complete guide to all 9 UNESCO World Heritage Sites in Morocco. Visit the medinas of Fes, Marrakech, Essaouira, and Tetouan, Ait-Ben-Haddou, Volubilis, Meknes, El Jadida, and Rabat.',
  url: `${BASE_URL}/morocco-unesco-sites`,
  image: `${BASE_URL}/images/hero-ait-ben-haddou.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-unesco-sites`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco UNESCO World Heritage Sites', item: `${BASE_URL}/morocco-unesco-sites` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many UNESCO World Heritage Sites are in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has 9 UNESCO World Heritage Sites as of 2026. These include four historic medinas (Fes, Marrakech, Tetouan, Essaouira), the Ksar of Ait-Ben-Haddou, the archaeological site of Volubilis, the Historic City of Meknes, the Portuguese City of El Jadida, and Rabat as Modern Capital and Historic City.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is the oldest UNESCO site in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Medina of Fes was the first Moroccan site inscribed on the UNESCO World Heritage List in 1981. Founded in the 9th century, it contains the world\'s oldest university (University of al-Qarawiyyin, founded 859 AD) and is considered the best-preserved medieval city in the Arab world.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you visit all Morocco UNESCO sites in one trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is possible to visit all 9 UNESCO sites in a 10-14 day itinerary. A recommended route starts in Rabat, then proceeds to Meknes, Volubilis, Fes, south to Ait-Ben-Haddou, Marrakech, Essaouira, El Jadida, and finally Tetouan. Domestic flights or a rental car are the most practical transport options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Morocco UNESCO sites charge entry fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most UNESCO sites in Morocco are free to walk through, as they are living cities with residents and businesses. However, specific monuments, museums, and archaeological sites within them charge entry fees ranging from 10 MAD to 70 MAD. Volubilis charges 70 MAD, and major monuments in Meknes charge from 10 to 70 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit Morocco UNESCO sites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit is spring (March-May) or autumn (September-November) when temperatures are comfortable for walking. Summer can be extremely hot in inland cities like Fes and Marrakech (40C+). Winter is mild but can bring rain in coastal and northern cities like Tetouan and Essaouira.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ALL 9 UNESCO WORLD HERITAGE SITES
   ═══════════════════════════════════════════════════════════════ */

const unescoSites = [
  {
    rank: 1,
    name: 'Medina of Fes',
    yearInscribed: 1981,
    type: 'Cultural',
    icon: Building,
    location: 'Fes, northern Morocco',
    whyItMatters:
      'The Medina of Fes el-Bali is the world\'s largest car-free urban area and one of the best-preserved medieval cities in the Arab world. Founded in the 9th century, it contains the University of al-Qarawiyyin (founded 859 AD), recognized as the oldest continuously operating university on earth. Over 9,000 narrow alleys weave through a living city of 156,000 residents, artisan workshops, mosques, madrasas, and fondouks.',
    whatToSee: ['Bou Inania Madrasa', 'Al-Qarawiyyin Mosque and University', 'Chouara Tanneries', 'Nejjarine Museum of Wooden Arts', 'Dar Batha Museum', 'Bab Bou Jeloud (Blue Gate)'],
    entryFees: 'Free to walk the medina. Bou Inania Madrasa: from 20 MAD. Dar Batha Museum: from 20 MAD. Tannery terrace viewing: tip expected (from 20 MAD).',
    gettingThere: 'Fes-Saiss Airport (FEZ) receives domestic and European flights. Train from Casablanca (3.5h) or Rabat (2.5h). CTM bus from Marrakech (8h).',
    tips: 'Hire an official guide (from 300 MAD half-day) for your first visit. The medina is genuinely labyrinthine. Visit the tanneries in the morning for the best light. Carry mint leaves to hold under your nose at the tanneries.',
  },
  {
    rank: 2,
    name: 'Medina of Marrakech',
    yearInscribed: 1985,
    type: 'Cultural',
    icon: Star,
    location: 'Marrakech, central Morocco',
    whyItMatters:
      'Founded in 1071 by the Almoravids, Marrakech became one of the great Islamic capitals. The medina is a masterpiece of Berber and Moorish architecture, centered around the legendary Jemaa el-Fnaa square, a living spectacle of storytellers, musicians, and food stalls that is itself recognized as a Masterpiece of the Oral and Intangible Heritage of Humanity. The city\'s rose-pink ramparts stretch for 19 kilometers.',
    whatToSee: ['Jemaa el-Fnaa Square', 'Koutoubia Mosque', 'Bahia Palace', 'Saadian Tombs', 'Ben Youssef Madrasa', 'Majorelle Garden'],
    entryFees: 'Medina access is free. Bahia Palace: from 70 MAD. Saadian Tombs: from 70 MAD. Ben Youssef Madrasa: from 50 MAD. Majorelle Garden: from 70 MAD.',
    gettingThere: 'Marrakech Menara Airport (RAK) is Morocco\'s busiest tourist airport with flights from across Europe and the Middle East. Train from Casablanca (2.5h). CTM bus from Fes (8h).',
    tips: 'Visit Jemaa el-Fnaa at sunset when the food stalls light up. The medina is easier to navigate than Fes but still hire a guide for the first day (from 300 MAD). Bargain firmly in the souks; start at 30-40% of the asking price.',
  },
  {
    rank: 3,
    name: 'Ksar of Ait-Ben-Haddou',
    yearInscribed: 1987,
    type: 'Cultural',
    icon: Mountain,
    location: 'Ouarzazate Province, southeast Morocco',
    whyItMatters:
      'This fortified village (ksar) of red-earth buildings clustered along the Ounila River valley is the most iconic example of traditional Saharan earthen architecture. It has served as a backdrop for numerous films including Gladiator, Game of Thrones, and Lawrence of Arabia. The ksar demonstrates pre-Saharan construction techniques using rammed earth, sun-dried bricks, and decorative motifs unique to southern Morocco.',
    whatToSee: ['Fortified granary at the summit', 'Traditional kasbahs and homes', 'River crossing and village walk', 'Panoramic viewpoint from the hilltop', 'Nearby Atlas Film Studios in Ouarzazate', 'Traditional carpet cooperatives'],
    entryFees: 'Free entry to the ksar. Guided tours from 150 MAD. Atlas Film Studios: from 50 MAD. Crossing the river: free (seasonal footbridge).',
    gettingThere: 'Located 30 km northwest of Ouarzazate. Most visitors come by rental car or organized tour from Marrakech (4h drive over the Tizi n\'Tichka pass). Grand taxi from Ouarzazate from 50 MAD.',
    tips: 'Visit early morning or late afternoon to avoid the heat and the tour bus crowds. The climb to the top takes 20-30 minutes and the views are spectacular. Bring water. Only a handful of families still live in the ksar itself; the main village is across the river.',
  },
  {
    rank: 4,
    name: 'Historic City of Meknes',
    yearInscribed: 1996,
    type: 'Cultural',
    icon: Crown,
    location: 'Meknes, northern Morocco',
    whyItMatters:
      'Built by Sultan Moulay Ismail in the 17th century as a rival to Versailles, Meknes is a harmonious blend of Islamic and European architectural styles. The massive ramparts stretch over 40 kilometers and are pierced by monumental gates including the famous Bab Mansour, considered the finest gateway in North Africa. Moulay Ismail intended this city to be the greatest in the Maghreb.',
    whatToSee: ['Bab Mansour gate', 'Heri es-Souani (Royal Granaries)', 'Mausoleum of Moulay Ismail', 'Place el-Hedim', 'Dar Jamai Museum', 'Royal Stables'],
    entryFees: 'Medina access is free. Mausoleum of Moulay Ismail: free. Heri es-Souani: from 10 MAD. Dar Jamai Museum: from 20 MAD. Royal Stables: from 10 MAD.',
    gettingThere: 'Train from Fes (45 min), Rabat (2h), or Casablanca (3h). CTM bus from Marrakech (7h). Meknes is often combined with a day trip to nearby Volubilis (30 km).',
    tips: 'Meknes is much less touristy than Fes or Marrakech, so prices are lower and the atmosphere is more authentic. The Heri es-Souani granaries are extraordinary. Combine with Volubilis for a full day. The medina souks are excellent for shopping without the aggressive salesmanship found in larger cities.',
  },
  {
    rank: 5,
    name: 'Archaeological Site of Volubilis',
    yearInscribed: 1997,
    type: 'Cultural',
    icon: Landmark,
    location: 'Near Meknes, northern Morocco',
    whyItMatters:
      'The best-preserved Roman ruins in North Africa. Volubilis was the capital of the Roman province of Mauretania Tingitana from the 1st century AD. The site covers 42 hectares and contains remarkably intact mosaics, a triumphal arch, a basilica, and the foundations of grand patrician houses. It reveals the southernmost extent of Roman civilization in the western Mediterranean.',
    whatToSee: ['House of Orpheus mosaics', 'Triumphal Arch of Caracalla', 'Capitol and Basilica', 'House of the Athlete', 'House of Venus mosaics', 'Decumanus Maximus (main street)'],
    entryFees: 'Entry: from 70 MAD for adults, from 30 MAD for children. Guided tours available from 150 MAD at the entrance.',
    gettingThere: 'Located 33 km north of Meknes and 60 km west of Fes. Grand taxi from Meknes from 100 MAD round trip. Most visitors combine Volubilis with Meknes and the holy town of Moulay Idriss Zerhoun.',
    tips: 'Visit in the early morning when the light on the mosaics is best and before tour groups arrive. Bring sun protection as there is minimal shade. Allow 2-3 hours. The on-site museum is small but informative. Spring brings wildflowers that carpet the ruins beautifully.',
  },
  {
    rank: 6,
    name: 'Medina of Tetouan',
    yearInscribed: 1997,
    type: 'Cultural',
    icon: Building,
    location: 'Tetouan, northern Morocco',
    whyItMatters:
      'The Medina of Tetouan served as the main point of contact between Morocco and Andalusia from the 8th century onward. When Moors and Jews were expelled from Spain in 1492, many resettled in Tetouan, bringing Andalusian art, architecture, and craft traditions. The result is a unique medina that blends Moroccan and Andalusian influences, with whitewashed buildings, Spanish-style balconies, and ornate tilework.',
    whatToSee: ['Royal Palace', 'Hassan II Square', 'School of Arts and Crafts', 'Archaeological Museum', 'Mellah (Jewish Quarter)', 'Artisan workshops in the medina'],
    entryFees: 'Medina access is free. Archaeological Museum: from 20 MAD. School of Arts and Crafts: from 10 MAD.',
    gettingThere: 'CTM bus from Tangier (1h) or Chefchaouen (1.5h). Grand taxi from Tangier from 30 MAD. No direct train; the nearest station is Tangier (65 km). Often combined with visits to Chefchaouen.',
    tips: 'Tetouan is one of the least-visited UNESCO medinas in Morocco, which means fewer crowds and more authentic encounters. The School of Arts and Crafts is a living workshop where young artisans learn traditional techniques. The medina is compact and navigable on foot in 2-3 hours.',
  },
  {
    rank: 7,
    name: 'Medina of Essaouira (formerly Mogador)',
    yearInscribed: 2001,
    type: 'Cultural',
    icon: Navigation,
    location: 'Essaouira, Atlantic coast',
    whyItMatters:
      'Essaouira is a remarkable example of a late-18th-century fortified port town built according to European military architecture principles but adapted to a North African context. The medina was designed by French architect Theodore Cornut for Sultan Mohammed III in 1764 and represents a unique fusion of European and Moroccan architectural traditions. It served as a major trading post between the Sahara and Europe.',
    whatToSee: ['Skala de la Ville (sea bastions)', 'Port and fish market', 'Medina streets and galleries', 'Moulay Hassan Square', 'Gnaoua and World Music Festival venue', 'Thuya wood workshops'],
    entryFees: 'Medina access is free. Skala de la Ville: from 10 MAD. Sidi Mohammed Ben Abdellah Museum: from 20 MAD.',
    gettingThere: 'Essaouira-Mogador Airport (ESU) has seasonal European flights. Bus from Marrakech (2.5h) via CTM or Supratours. Grand taxi from Marrakech from 80 MAD per person.',
    tips: 'The Atlantic wind makes Essaouira cooler than other Moroccan cities, but it can be very windy, especially in summer. The Gnaoua World Music Festival in June is spectacular. The port fish grill stalls offer the freshest seafood from 40 MAD. The medina is small and easily walkable without a guide.',
  },
  {
    rank: 8,
    name: 'Portuguese City of Mazagan (El Jadida)',
    yearInscribed: 2004,
    type: 'Cultural',
    icon: Globe,
    location: 'El Jadida, Atlantic coast',
    whyItMatters:
      'The fortification of Mazagan was built by the Portuguese in 1514 as a colonial trading post and is an early and exceptional example of the interchange of influences between European and Moroccan cultures. The Portuguese Cistern, a vast underground chamber originally designed as a warehouse, is one of Morocco\'s most atmospheric sights with its Gothic columns reflected in shallow water. The town was captured by the Moroccans in 1769.',
    whatToSee: ['Portuguese Cistern (underground chamber)', 'Church of the Assumption', 'Ramparts and sea bastions', 'Manueline-style architecture', 'Old Jewish quarter', 'Panoramic rampart walk'],
    entryFees: 'Portuguese Cistern: from 20 MAD. Ramparts: free. Church of the Assumption: free.',
    gettingThere: 'Train from Casablanca (1.5h) to El Jadida station, then taxi or walk to the old city. CTM bus from Marrakech (4h) or Essaouira (4h). Easily visited as a day trip from Casablanca.',
    tips: 'The Portuguese Cistern was used as a filming location for Othello by Orson Welles. Visit in the morning when a shaft of light illuminates the cistern through the oculus. The cit\u00e9 portugaise is small and can be explored in 1-2 hours. Combine with the beach resort of El Jadida for a full day.',
  },
  {
    rank: 9,
    name: 'Rabat, Modern Capital and Historic City',
    yearInscribed: 2012,
    type: 'Cultural',
    icon: Landmark,
    location: 'Rabat, northwest Morocco',
    whyItMatters:
      'Rabat is a unique shared heritage of an ancient Islamic city and a modern capital created under the French Protectorate (1912-1956). The inscription recognizes the successful blending of the historic with the modern: the 12th-century Almohad ramparts, the medieval medina, and the colonial-era Ville Nouvelle with its Art Deco architecture. The Hassan Tower and the Mausoleum of Mohammed V are iconic landmarks.',
    whatToSee: ['Hassan Tower and Mohammed V Mausoleum', 'Kasbah of the Udayas', 'Chellah necropolis', 'Royal Palace exterior', 'Rabat medina', 'Mohammed VI Museum of Modern and Contemporary Art'],
    entryFees: 'Kasbah of the Udayas: free. Chellah: from 70 MAD. Mohammed V Mausoleum: free. Mohammed VI Museum: from 40 MAD.',
    gettingThere: 'Rabat-Sale Airport (RBA) has domestic and some European flights. Train from Casablanca (1h), Fes (2.5h), or Marrakech (4h). Rabat Ville station is central.',
    tips: 'Rabat is Morocco\'s most orderly and calm city. The Kasbah of the Udayas is a photogenic blue-and-white neighborhood with ocean views and an Andalusian garden. Chellah at sunset is magical with storks nesting on the medieval ruins. The medina is quiet and hassle-free compared to Fes or Marrakech.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INTANGIBLE CULTURAL HERITAGE
   ═══════════════════════════════════════════════════════════════ */

const intangibleHeritage = [
  {
    name: 'Gnawa Music and Ceremonies',
    yearInscribed: 2019,
    icon: Music,
    description:
      'Gnawa is a body of music, performances, and ceremonies rooted in the spiritual traditions of sub-Saharan African communities who came to Morocco centuries ago. The rituals blend African, Berber, and Sufi elements with trance-like music featuring the guembri (three-stringed bass lute), large metal castanets (qraqeb), and call-and-response singing. The annual Gnaoua World Music Festival in Essaouira is the largest celebration.',
    whereToExperience: 'Essaouira (Gnaoua Festival in June), Marrakech (Jemaa el-Fnaa), Fes, Casablanca.',
  },
  {
    name: 'Couscous: Knowledge, Know-How and Practices',
    yearInscribed: 2020,
    icon: Users,
    description:
      'Couscous was jointly nominated by Morocco, Algeria, Tunisia, and Mauritania. The inscription recognizes the centuries-old social and cultural significance of preparing and sharing couscous. In Morocco, Friday couscous is a sacred family tradition. The hand-rolling technique, the slow steaming over a tagine or stew, and the communal eating from a shared platter are all intangible cultural practices passed through generations.',
    whereToExperience: 'Every Moroccan home on Fridays. Restaurants across Morocco. Cooking classes in Marrakech and Fes (from 300 MAD).',
  },
  {
    name: 'Taskiwin, Martial Dance of the Western High Atlas',
    yearInscribed: 2017,
    icon: Sparkles,
    description:
      'A martial dance performed by Amazigh (Berber) communities of the western High Atlas. Dancers carry ornate horns (tiskt) and perform rhythmic shoulder movements accompanied by drums and flutes, representing warrior traditions of the Atlas Berbers.',
    whereToExperience: 'High Atlas villages during local festivals. Cultural events in Taroudant and Agadir region.',
  },
  {
    name: 'Cherry Festival of Sefrou',
    yearInscribed: 2012,
    icon: Calendar,
    description:
      'The Sefrou Cherry Festival, held annually in June since 1920, is one of Morocco\'s oldest cultural festivals. It features a parade, the election of the Cherry Queen, traditional music, and the celebration of the cherry harvest in the town historically known as the "Garden of Morocco."',
    whereToExperience: 'Sefrou, 28 km south of Fes, every June. Day trip from Fes.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: UNESCO ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const itineraries = [
  {
    name: '7-Day Essential UNESCO Route',
    icon: Map,
    days: [
      { day: 1, title: 'Arrive in Rabat', description: 'Explore the Kasbah of the Udayas, Hassan Tower, and Chellah necropolis.' },
      { day: 2, title: 'Rabat to Meknes and Volubilis', description: 'Morning train to Meknes. Visit Bab Mansour, Heri es-Souani, then taxi to Volubilis. Overnight in Fes.' },
      { day: 3, title: 'Fes Medina', description: 'Full day exploring the Medina of Fes with a guide. Tanneries, madrasas, and the souks.' },
      { day: 4, title: 'Fes to Marrakech', description: 'Train or flight to Marrakech. Afternoon walk through the medina and souks.' },
      { day: 5, title: 'Marrakech Medina', description: 'Full day: Bahia Palace, Saadian Tombs, Ben Youssef Madrasa, and Jemaa el-Fnaa at sunset.' },
      { day: 6, title: 'Day Trip to Ait-Ben-Haddou', description: 'Drive over the Tizi n\'Tichka pass (4h each way). Explore the ksar. Return to Marrakech.' },
      { day: 7, title: 'Marrakech to Essaouira', description: 'Bus or taxi to Essaouira (2.5h). Explore the medina, port, and ramparts. Depart or overnight.' },
    ],
  },
  {
    name: '14-Day Complete UNESCO Circuit',
    icon: Globe,
    days: [
      { day: '1-2', title: 'Rabat', description: 'Kasbah of the Udayas, Chellah, Hassan Tower, Mohammed VI Museum, and the medina.' },
      { day: '3-4', title: 'Meknes and Volubilis', description: 'Imperial city, Roman ruins, and Moulay Idriss Zerhoun.' },
      { day: '5-6', title: 'Fes', description: 'Two days in the world\'s largest car-free medina. Tanneries, madrasas, and crafts.' },
      { day: '7-9', title: 'Marrakech and Ait-Ben-Haddou', description: 'Train to Marrakech. Palaces, souks, Jemaa el-Fnaa. Day trip to the ksar.' },
      { day: '10-11', title: 'Essaouira', description: 'Coastal medina, port, Gnawa music, and seafood.' },
      { day: 12, title: 'El Jadida', description: 'Portuguese Cistern, ramparts, cit\u00e9 portugaise.' },
      { day: '13-14', title: 'Tetouan and Departure', description: 'Andalusian medina, Arts and Crafts school. Depart from Tangier.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ENTRY FEES QUICK REFERENCE
   ═══════════════════════════════════════════════════════════════ */

const entryFeesTable = [
  { site: 'Medina of Fes', medina: 'Free', monument: 'Bou Inania Madrasa: from 20 MAD', museum: 'Dar Batha: from 20 MAD' },
  { site: 'Medina of Marrakech', medina: 'Free', monument: 'Bahia Palace: from 70 MAD', museum: 'Ben Youssef Madrasa: from 50 MAD' },
  { site: 'Ait-Ben-Haddou', medina: 'Free', monument: 'Ksar: free entry', museum: 'Film Studios: from 50 MAD' },
  { site: 'Meknes', medina: 'Free', monument: 'Heri es-Souani: from 10 MAD', museum: 'Dar Jamai: from 20 MAD' },
  { site: 'Volubilis', medina: 'N/A', monument: 'Site entry: from 70 MAD', museum: 'On-site museum: included' },
  { site: 'Medina of Tetouan', medina: 'Free', monument: 'Arts School: from 10 MAD', museum: 'Archaeological: from 20 MAD' },
  { site: 'Essaouira', medina: 'Free', monument: 'Skala: from 10 MAD', museum: 'City Museum: from 20 MAD' },
  { site: 'El Jadida (Mazagan)', medina: 'Free', monument: 'Cistern: from 20 MAD', museum: 'N/A' },
  { site: 'Rabat', medina: 'Free', monument: 'Chellah: from 70 MAD', museum: 'Mohammed VI Museum: from 40 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoUnescoSitesPage() {
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
            backgroundImage: 'url(/images/hero-ait-ben-haddou.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco UNESCO World Heritage Sites</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            Cultural Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco UNESCO World Heritage Sites:
            <br className="hidden md:block" /> Complete Guide to All 9 Sites
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the labyrinthine Medina of Fes inscribed in 1981 to the modern capital of Rabat
            recognized in 2012. Your definitive guide to Morocco&apos;s nine UNESCO treasures.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Thousand Years of Heritage, Nine UNESCO Treasures
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco holds 9 UNESCO World Heritage Sites, each a chapter in the country&apos;s
                extraordinary story spanning Roman antiquity, medieval Islamic civilization, European
                colonial encounters, and modern nation-building. No other country in North Africa offers
                such diversity of recognized heritage.
              </p>
              <p>
                Four of the nine sites are historic medinas: the living old cities of Fes, Marrakech,
                Tetouan, and Essaouira, where hundreds of thousands of people still live within walls
                that have stood for centuries. Beyond the medinas, the list includes Roman ruins at
                Volubilis, the imperial grandeur of Meknes, the cinematic ksar of Ait-Ben-Haddou,
                the Portuguese fortress of El Jadida, and the dual-identity capital of Rabat. Morocco
                also holds intangible heritage recognitions including Gnawa music and couscous traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Entry Fees Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ticket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Entry Fees Quick Reference
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Most UNESCO medinas are free to walk through. Here are the fees for specific monuments and museums at each site.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Seasonal pricing may apply during peak tourist months (October-April). Prices can change without notice.
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">UNESCO Site</div>
                <div className="p-3 px-4">Medina Access</div>
                <div className="p-3 px-4">Key Monument</div>
                <div className="p-3 px-4">Museum</div>
              </div>
              {entryFeesTable.map((item, i) => (
                <div
                  key={item.site}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.site}</div>
                  <div className="p-3 px-4 text-[var(--color-gold)] font-semibold">{item.medina}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.monument}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.museum}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── All 9 UNESCO Sites ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            All 9 UNESCO World Heritage Sites in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A comprehensive guide to each site, from the oldest inscription in 1981 to the most recent in 2012.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Entry fees shown are starting prices and may vary by season and availability.
          </p>

          <div className="space-y-10">
            {unescoSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.rank} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SiteIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {site.rank}. {site.name}
                        </h3>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          Inscribed {site.yearInscribed}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {site.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="w-3.5 h-3.5" />
                          {site.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4 text-[var(--color-accent)]" />
                        Why It Matters
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{site.whyItMatters}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                        <Camera className="w-4 h-4 text-[var(--color-accent)]" />
                        What to See
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {site.whatToSee.map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="text-xs font-semibold text-[var(--color-accent)]">Entry Fees</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{site.entryFees}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Navigation className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="text-xs font-semibold text-[var(--color-accent)]">Getting There</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{site.gettingThere}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="text-xs font-semibold text-[var(--color-accent)]">Visiting Tips</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{site.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Intangible Cultural Heritage ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Intangible Cultural Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond physical sites, UNESCO also recognizes Morocco&apos;s living traditions, music, crafts, and culinary heritage that have been passed down through generations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {intangibleHeritage.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.name}
                      </h3>
                      <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        Inscribed {item.yearInscribed}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <MapPin className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Where to Experience:</span> {item.whereToExperience}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── UNESCO Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            UNESCO Heritage Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two suggested routes to experience Morocco&apos;s UNESCO heritage, from a focused week to a comprehensive two-week circuit.
          </p>

          <div className="space-y-12">
            {itineraries.map((itinerary) => {
              const ItineraryIcon = itinerary.icon;
              return (
                <div key={itinerary.name}>
                  <div className="flex items-center gap-3 mb-6">
                    <ItineraryIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {itinerary.name}
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
                    <div className="space-y-4">
                      {itinerary.days.map((day, i) => (
                        <div key={i} className="relative flex gap-6">
                          <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                            <span className="text-white font-bold text-xs">D{day.day}</span>
                          </div>
                          <div className="card-moroccan p-5 flex-1">
                            <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                              {day.title}
                            </h4>
                            <p className="text-xs text-[var(--text-secondary)]">{day.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Visiting UNESCO Sites
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Time to Visit
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Spring (March-May) and autumn (September-November) offer the most comfortable temperatures
                for exploring. Summer temperatures in Fes, Marrakech, and Meknes regularly exceed 40C.
                Winter is mild but coastal sites like Essaouira can be windy.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hiring Guides
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Official guides are strongly recommended for Fes and Marrakech medinas. Half-day rates
                start from 300 MAD. Look for the official guide badge. In smaller sites like Volubilis
                and El Jadida, the on-site guides at the entrance are knowledgeable and affordable (from 150 MAD).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Photography is generally allowed at all UNESCO sites, but ask permission before photographing
                people. Some monuments charge a small camera fee (from 10 MAD). Early morning light is best
                for the medinas. Volubilis is most photogenic at golden hour.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety in Medinas
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                UNESCO medinas are generally safe but can be disorienting. Keep your phone charged for
                GPS (offline maps work in most medinas). Watch for motorbikes in narrow alleys. Be
                cautious of unofficial guides who approach you. Carry small change for tips.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Budget Planning
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Budget from 300-500 MAD per day for entry fees and guides if visiting multiple monuments.
                Most medinas are free to walk through. Students with an international student card often
                get 50% discounts. Children under 12 are free at most sites.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Respect Local Customs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Non-Muslims cannot enter active mosques in Morocco (with rare exceptions). Dress modestly
                when visiting religious sites: cover shoulders and knees. Remove shoes when entering
                private homes or small prayer rooms. Ask before entering artisan workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How many UNESCO World Heritage Sites are in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco has 9 UNESCO World Heritage Sites as of 2026. All 9 are cultural sites (none are natural
                heritage). They span from the Medina of Fes, first inscribed in 1981, to Rabat as Modern Capital
                and Historic City, inscribed in 2012. Additionally, Morocco has several intangible cultural
                heritage recognitions including Gnawa music (2019) and couscous traditions (2020).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which is the oldest UNESCO site in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Medina of Fes was the first Moroccan site inscribed on the UNESCO World Heritage List in
                1981. The medina itself was founded in the 9th century and is home to the University of
                al-Qarawiyyin (859 AD), the oldest continuously operating university in the world. It remains
                one of the best-preserved medieval cities in the Arab world.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can you visit all Morocco UNESCO sites in one trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. A 10-14 day itinerary can cover all 9 sites. The 7-day essential route covers the most
                iconic sites (Rabat, Meknes, Volubilis, Fes, Marrakech, Ait-Ben-Haddou, Essaouira), while
                the 14-day complete circuit adds Tetouan and El Jadida. Morocco&apos;s excellent train network
                and domestic flights make inter-city travel efficient.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do Morocco UNESCO sites charge entry fees?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The medinas themselves are free to walk through as they are living cities. However, specific
                monuments, palaces, museums, and archaeological sites charge entry fees ranging from 10 MAD
                to 70 MAD. Volubilis (from 70 MAD) and the Bahia Palace in Marrakech (from 70 MAD) are among the
                most expensive. Budget from 300-500 MAD per day if visiting multiple monuments.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year to visit Morocco UNESCO sites?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March-May) and autumn (September-November) offer the best weather for sightseeing.
                Temperatures are comfortable for walking (20-28C). Summer can be brutally hot in inland
                cities like Fes and Marrakech, with temperatures exceeding 40C. Winter is mild but can bring
                rain in the north. Ramadan dates vary each year and affect opening hours and dining options.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Ait-Ben-Haddou worth the trip from Marrakech?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. The drive over the Tizi n&apos;Tichka pass is spectacular, crossing the High Atlas
                Mountains at 2,260 meters. The ksar itself is one of Morocco&apos;s most photogenic sites and
                has appeared in dozens of major films. Allow a full day for the round trip (4 hours each
                way). For a less rushed experience, stay overnight in Ouarzazate or at a kasbah near Ait-Ben-Haddou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UNESCO Sites by Region ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            UNESCO Sites by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Plan your heritage trip by region. Some sites can be combined in a single day, saving time and travel costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Building className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Northern Morocco
                </h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Fes:</strong> Medina of Fes (1981) - World&apos;s largest car-free urban area</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Meknes:</strong> Historic City (1996) - 17th-century imperial capital</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Volubilis:</strong> Roman ruins (1997) - 30 km from Meknes</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Tetouan:</strong> Andalusian medina (1997) - Near Tangier</span>
                </div>
              </div>
              <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Info className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                  <strong>Tip:</strong> Meknes and Volubilis can be combined in a single day trip from Fes. Allow 3-4 days for this cluster.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Central &amp; South
                </h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Marrakech:</strong> Medina (1985) - The iconic Red City</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Ait-Ben-Haddou:</strong> Ksar (1987) - 4h from Marrakech</span>
                </div>
              </div>
              <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Info className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                  <strong>Tip:</strong> Ait-Ben-Haddou is a day trip from Marrakech or a stop en route to the Sahara desert. Allow 2-3 days for this cluster.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Atlantic Coast
                </h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Rabat:</strong> Modern Capital (2012) - Art Deco meets medieval</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Essaouira:</strong> Fortified port (2001) - 18th-century design</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>El Jadida:</strong> Portuguese city (2004) - Day trip from Casablanca</span>
                </div>
              </div>
              <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Info className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                  <strong>Tip:</strong> All three coastal sites are connected by train and bus routes. Allow 3-4 days for this cluster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Heritage Conservation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Heritage Conservation &amp; Responsible Tourism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Morocco&apos;s UNESCO sites face challenges from urbanization, mass tourism, and climate change. As a visitor, you can support responsible heritage tourism.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Support Local Artisans
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Buy directly from artisan workshops in the medinas. Traditional crafts like zellige tilework,
                leather tanning, and woodcarving are integral to the heritage. Your purchase sustains centuries-old traditions.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Stay in Historic Riads
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Choosing accommodation within medina walls supports historic neighborhoods economically. Many
                riads invest profits into maintaining traditional architecture and employing local staff.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Respect the Living Heritage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s UNESCO medinas are not open-air museums. They are home to families, schools, and
                businesses. Respect residents&apos; privacy and keep noise appropriate near mosques and schools.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Landmark className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Use Official Guides
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Official guides are licensed and trained in heritage interpretation. They provide accurate
                historical context and help manage visitor flow in sensitive areas. From 300 MAD for a half-day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/fes-medina-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes Medina Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into the world&apos;s largest car-free urban area. Tanneries, madrasas, souks, and hidden gems.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech-medina-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech Medina Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the Red City&apos;s vibrant medina. Jemaa el-Fnaa, palaces, gardens, and the legendary souks.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/volubilis-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Volubilis Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore North Africa&apos;s finest Roman ruins. Mosaics, temples, and 2,000 years of history near Meknes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Understand Moroccan traditions, customs, festivals, and the cultural context behind the heritage sites.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

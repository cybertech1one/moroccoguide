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
  Shield,
  Crown,
  Sword,
  Flag,
  Building,
  Star,
  Calendar,
  MessageCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'History of Morocco Guide 2026 | Dynasties, Historical Sites & Timeline',
  description:
    'Complete guide to the history of Morocco in 2026. Explore Moroccan dynasties from the Almoravids to the Alaouites, key historical sites like Volubilis and Chellah, the French protectorate era, independence, and a full timeline of major events.',
  keywords: [
    'Morocco history',
    'history of Morocco',
    'Moroccan dynasties',
    'Morocco historical sites',
    'Almoravid dynasty',
    'Almohad dynasty',
    'Marinid dynasty',
    'Saadian dynasty',
    'Alaouite dynasty',
    'Volubilis Morocco',
    'Chellah Rabat',
    'Ait Ben Haddou history',
    'French protectorate Morocco',
    'Morocco independence',
    'Berber kingdoms Morocco',
    'Roman Morocco',
    'imperial cities Morocco',
  ],
  openGraph: {
    title: 'History of Morocco Guide 2026 | Dynasties, Historical Sites & Timeline',
    description:
      'Explore 3,000 years of Moroccan history: prehistoric origins, Roman ruins, Berber dynasties, the Arab conquest, colonial era, and modern Morocco. Includes a timeline, key historical sites, and FAQs.',
    url: `${BASE_URL}/morocco-history-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Ancient Moroccan historical ruins with dramatic sky overlooking the landscape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'History of Morocco Guide 2026 | Dynasties, Sites & Timeline',
    description:
      '3,000 years of Moroccan history: prehistoric origins, Roman Volubilis, Berber dynasties, Arab conquest, colonial era, independence & modern Morocco. Complete guide with timeline & FAQ.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-history-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-history-guide`,
  name: 'History of Morocco Guide 2026 | Dynasties, Historical Sites & Timeline',
  description:
    'Complete guide to the history of Morocco covering prehistoric origins, Phoenician and Roman settlements, Arab conquest, Berber dynasties (Almoravids, Almohads, Marinids, Saadians, Alaouites), French and Spanish protectorate, independence, modern Morocco, and key historical sites to visit.',
  url: `${BASE_URL}/morocco-history-guide`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-history-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'History of Morocco', item: `${BASE_URL}/morocco-history-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old is Morocco as a country?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has been inhabited for over 300,000 years, as evidenced by the oldest known Homo sapiens fossils discovered at Jebel Irhoud in 2017. As a unified kingdom, Morocco dates to 788 AD when Idris I founded the Idrisid dynasty in Volubilis. The modern Kingdom of Morocco gained independence from France and Spain on March 2, 1956, making it one of the oldest continuously ruled monarchies in the world.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the major Moroccan dynasties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has been shaped by several major dynasties: the Idrisids (788-974 AD), who founded Fes; the Almoravids (1040-1147), Saharan Berbers who built Marrakech; the Almohads (1121-1269), who created an empire spanning North Africa and Spain; the Marinids (1244-1465), patrons of Fes architecture; the Wattasids (1472-1554); the Saadians (1549-1659), who built the El Badi Palace; and the Alaouites (1631-present), the current ruling dynasty under King Mohammed VI.',
      },
    },
    {
      '@type': 'Question',
      name: 'What was the French protectorate in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The French protectorate in Morocco lasted from 1912 to 1956, established by the Treaty of Fez. France controlled most of Morocco while Spain administered the northern Rif region and parts of the Sahara. The protectorate brought modern infrastructure including railways, roads, and the Ville Nouvelle (new city) districts, but also suppressed Moroccan sovereignty and culture. Morocco gained independence on March 2, 1956, under Sultan Mohammed V.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you visit Roman ruins in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco has several well-preserved Roman archaeological sites. The most famous is Volubilis (near Meknes), a UNESCO World Heritage Site with impressive mosaics, triumphal arches, and basilica ruins dating to the 2nd and 3rd centuries AD. Other sites include Lixus near Larache, Banasa near Kenitra, and Sala Colonia (the ancient part of Chellah in Rabat). Volubilis is the most accessible and best-preserved, taking about 2 hours to explore.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are there four imperial cities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has four imperial cities because different dynasties chose different capitals throughout history. Fes was founded by the Idrisids in 789 AD; Marrakech was established by the Almoravids in 1062; Meknes became the capital under the Alaouite Sultan Moulay Ismail in 1672; and Rabat has served as the capital since the French protectorate era in 1912. Each city reflects the architectural and cultural legacy of the dynasty that built it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the significance of Ait Ben Haddou?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ait Ben Haddou is a UNESCO World Heritage Site and a fortified ksar (village) along the former caravan route between the Sahara and Marrakech. Dating to the 17th century, its earthen clay architecture represents the traditional pre-Saharan building style. It has been used as a filming location for movies including Gladiator, Game of Thrones, and Lawrence of Arabia. A few families still live within the kasbah, and visitors can explore the narrow lanes and climb to the granary at the top.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who were the Berbers and what is their role in Moroccan history?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Berbers (Amazigh, meaning "free people") are the indigenous inhabitants of North Africa who have lived in Morocco for thousands of years. They played a central role in Moroccan history: the Almoravid and Almohad dynasties were Berber in origin, and Berber tribes resisted both Arab and European colonization. Today, Amazigh culture is officially recognized in the Moroccan constitution (2011), and Tamazight is an official language alongside Arabic. About 40% of Moroccans identify as Amazigh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened during the Green March of 1975?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Green March (La Marche Verte) of November 6, 1975, was a mass peaceful demonstration organized by King Hassan II in which 350,000 unarmed Moroccan civilians marched into the Spanish Sahara to assert Morocco claim to the territory. Spain had been the colonial ruler of the region, and the march led to the Madrid Accords, by which Spain ceded the territory. The Green March is celebrated annually as a national holiday in Morocco and remains one of the most significant events in modern Moroccan history.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best historical sites to visit in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top historical sites in Morocco include Volubilis (Roman ruins near Meknes), Chellah (Roman and Marinid necropolis in Rabat), Ait Ben Haddou (fortified village near Ouarzazate), the Fes Medina (world largest car-free urban zone), the Saadian Tombs in Marrakech, the Koutoubia Mosque, Meknes imperial city walls, El Badi Palace ruins, Bab Mansour gate, the Hassan Tower in Rabat, and the Kasbah of the Udayas. UNESCO has designated nine World Heritage Sites in Morocco.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORICAL TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const historicalTimeline = [
  {
    era: '300,000 BC',
    title: 'Earliest Human Presence',
    detail: 'The oldest known Homo sapiens fossils, discovered at Jebel Irhoud in 2017, reveal that early humans inhabited Morocco over 300,000 years ago. Stone tools and cave art found across the Atlas Mountains and Sahara region testify to continuous prehistoric habitation.',
    icon: Globe,
  },
  {
    era: '1100 BC',
    title: 'Phoenician Trading Posts',
    detail: 'Phoenician merchants from present-day Lebanon established coastal trading settlements at Lixus (near modern Larache), Tingis (Tangier), and Mogador (Essaouira). These outposts facilitated trade in gold, ivory, and purple dye extracted from murex shells.',
    icon: Globe,
  },
  {
    era: '40 AD',
    title: 'Roman Province of Mauretania Tingitana',
    detail: 'Rome annexed northern Morocco as the province of Mauretania Tingitana. The city of Volubilis flourished as the regional capital with grand temples, basilicas, and mosaic-adorned villas. Roman influence extended south to Sala Colonia (Rabat) and Lixus.',
    icon: Landmark,
  },
  {
    era: '682 AD',
    title: 'Arab Conquest Begins',
    detail: 'The Umayyad general Uqba ibn Nafi led the first Arab expedition into Morocco, introducing Islam to the Amazigh (Berber) population. Resistance was fierce, led by figures like Kahina and Kusaila, but by 710 AD most of Morocco had embraced Islam while retaining Amazigh customs.',
    icon: Star,
  },
  {
    era: '788 AD',
    title: 'Idrisid Dynasty Founded',
    detail: 'Idris I, a descendant of the Prophet Muhammad, fled the Abbasids and established Morocco first Islamic dynasty at Volubilis. His son Idris II founded Fes in 808 AD, which became a center of learning, commerce, and the home of the University of al-Qarawiyyin (founded 859 AD), the oldest continually operating university in the world.',
    icon: Crown,
  },
  {
    era: '1062',
    title: 'Almoravid Empire',
    detail: 'Yusuf ibn Tashfin founded Marrakech and built a vast Saharan Berber empire stretching from Senegal to Spain. The Almoravids unified Morocco, spread Islam across West Africa, and defended Muslim Spain (Al-Andalus) against the Christian Reconquista.',
    icon: Shield,
  },
  {
    era: '1147',
    title: 'Almohad Caliphate',
    detail: 'The Almohads, led by Ibn Tumart and Abd al-Mumin, overthrew the Almoravids and built the largest Berber empire in history, spanning from Libya to Spain. They constructed the Koutoubia Mosque in Marrakech, the Giralda in Seville, and the Hassan Tower in Rabat.',
    icon: Building,
  },
  {
    era: '1244',
    title: 'Marinid Dynasty',
    detail: 'The Marinid Berbers succeeded the Almohads and made Fes their capital. They are remembered as great patrons of art and architecture, building the Bou Inania and Attarine madrasas in Fes, and the Chellah necropolis in Rabat. Their reign saw Fes become one of the Islamic world great intellectual centers.',
    icon: BookOpen,
  },
  {
    era: '1549',
    title: 'Saadian Dynasty',
    detail: 'The Saadians, an Arab dynasty from the Draa Valley, defeated the Wattasids and repelled Portuguese invaders at the Battle of the Three Kings (1578). Sultan Ahmad al-Mansur built the lavish El Badi Palace in Marrakech and expanded trade with England and the Ottoman Empire.',
    icon: Crown,
  },
  {
    era: '1631',
    title: 'Alaouite Dynasty Begins',
    detail: 'The Alaouite dynasty, claiming descent from the Prophet Muhammad, seized power and continues to rule Morocco today under King Mohammed VI. Sultan Moulay Ismail (r. 1672-1727) made Meknes his grand capital, building massive walls, gates, and the Royal Stables.',
    icon: Crown,
  },
  {
    era: '1912',
    title: 'French & Spanish Protectorate',
    detail: 'The Treaty of Fez established the French protectorate over most of Morocco, while Spain controlled the Rif and parts of the Sahara. Marshal Lyautey modernized infrastructure while preserving medinas. Moroccan resistance continued through the Rif War (1921-1926) led by Abd el-Krim.',
    icon: Flag,
  },
  {
    era: '1956',
    title: 'Independence',
    detail: 'Sultan Mohammed V led the independence movement and on March 2, 1956, Morocco regained sovereignty from France. Spain relinquished its northern protectorate shortly after. Mohammed V became king, and Morocco embarked on building a modern nation-state.',
    icon: Flag,
  },
  {
    era: '1999-Present',
    title: 'Modern Morocco',
    detail: 'King Mohammed VI initiated sweeping reforms including the Mudawwana (family code), the 2011 constitutional reform recognizing Amazigh identity, and major infrastructure projects like the Tangier-Med port and Africa first high-speed railway. Morocco today blends ancient traditions with rapid modernization.',
    icon: Sparkles,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MOROCCAN DYNASTIES
   ═══════════════════════════════════════════════════════════════ */

const moroccanDynasties = [
  { name: 'Idrisids', period: '788-974 AD', origin: 'Arab (Sharifian)', capital: 'Fes', legacy: 'Founded Fes, established Morocco first Islamic state, and built the University of al-Qarawiyyin. Unified the northern Moroccan tribes under a single Arab-Islamic polity.', icon: Crown },
  { name: 'Almoravids', period: '1040-1147', origin: 'Sanhaja Berber (Saharan)', capital: 'Marrakech', legacy: 'Founded Marrakech, unified Morocco and Al-Andalus (Muslim Spain), spread Islam across West Africa, and built the Ben Youssef Mosque in Marrakech.', icon: Shield },
  { name: 'Almohads', period: '1121-1269', origin: 'Masmuda Berber (Atlas)', capital: 'Marrakech', legacy: 'Created the largest Berber empire ever, built the Koutoubia Mosque, the Hassan Tower, and the Giralda. Championed a puritanical Islamic reform movement.', icon: Building },
  { name: 'Marinids', period: '1244-1465', origin: 'Zenata Berber', capital: 'Fes', legacy: 'Great patrons of art and learning. Built the madrasas of Fes (Bou Inania, Attarine), the Chellah necropolis, and made Fes the intellectual heart of the Islamic West.', icon: BookOpen },
  { name: 'Saadians', period: '1549-1659', origin: 'Arab (Sharifian)', capital: 'Marrakech', legacy: 'Defeated the Portuguese, won the legendary Battle of the Three Kings (1578), built the El Badi Palace and the Saadian Tombs in Marrakech. Expanded trans-Saharan trade.', icon: Sword },
  { name: 'Alaouites', period: '1631-Present', origin: 'Arab (Sharifian)', capital: 'Rabat (modern)', legacy: 'The current ruling dynasty. Sultan Moulay Ismail built Meknes as a rival to Versailles. Mohammed V led independence. Mohammed VI modernized Morocco with democratic reforms.', icon: Star },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY HISTORICAL SITES
   ═══════════════════════════════════════════════════════════════ */

const historicalSites = [
  { name: 'Volubilis', location: 'Near Meknes', period: 'Roman, 2nd-3rd Century AD', description: 'UNESCO World Heritage Site and Morocco best-preserved Roman ruins. Features stunning floor mosaics, a triumphal arch, basilica, and Capitol temple. The city was the administrative center of Mauretania Tingitana and later an Idrisid capital.', icon: Landmark },
  { name: 'Chellah', location: 'Rabat', period: 'Roman & Marinid, 3rd-14th Century', description: 'A hauntingly beautiful necropolis combining Roman Sala Colonia ruins with a 14th-century Marinid royal burial ground. Features crumbling minarets, stork nests, fig trees, and a sacred pool. Reopened in 2024 after major restoration.', icon: Landmark },
  { name: 'Ait Ben Haddou', location: 'Near Ouarzazate', period: 'Ksar, 17th Century', description: 'UNESCO-listed fortified village of earthen clay buildings along the old caravan route between the Sahara and Marrakech. A living example of pre-Saharan Moroccan architecture and a famous film location for Gladiator and Game of Thrones.', icon: Building },
  { name: 'Fes el-Bali Medina', location: 'Fes', period: 'Founded 808 AD', description: 'The world largest car-free urban area and a UNESCO World Heritage Site. Home to the University of al-Qarawiyyin (founded 859), the oldest continually operating university. Over 9,000 narrow alleyways, 300 mosques, and countless artisan workshops.', icon: MapPin },
  { name: 'Saadian Tombs', location: 'Marrakech', period: '16th Century', description: 'Magnificent mausoleum complex housing the tombs of the Saadian dynasty, sealed and forgotten for centuries until rediscovered by the French in 1917. Features intricate carved cedar, Italian Carrara marble, and zellige tilework.', icon: Crown },
  { name: 'Koutoubia Mosque', location: 'Marrakech', period: 'Almohad, 1147-1199', description: 'The largest mosque in Marrakech with a 77-meter minaret that served as the model for the Giralda in Seville and the Hassan Tower in Rabat. A masterpiece of Almohad architecture visible from across the city.', icon: Building },
  { name: 'Hassan Tower', location: 'Rabat', period: 'Almohad, 1195', description: 'An unfinished minaret intended for the world largest mosque, commissioned by Almohad Caliph Yaqub al-Mansur. The tower stands 44 meters tall (the planned 86 meters was never completed). Surrounded by 200 columns and the Mausoleum of Mohammed V.', icon: Landmark },
  { name: 'Bab Mansour', location: 'Meknes', period: 'Alaouite, 1732', description: 'Considered the most beautiful gate in Morocco, built by Sultan Moulay Ismail. The massive horseshoe arch is decorated with elaborate zellige mosaics, carved marble columns recycled from Volubilis, and intricate stucco work.', icon: Building },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: IMPERIAL CITIES THROUGH HISTORY
   ═══════════════════════════════════════════════════════════════ */

const imperialCities = [
  {
    city: 'Fes',
    founded: '808 AD',
    dynasty: 'Idrisids',
    highlights: 'Oldest imperial city, home to the University of al-Qarawiyyin (859 AD), the Bou Inania and Attarine madrasas, Chouara tanneries, and the world largest car-free urban zone. The medina contains over 9,000 streets and 300 mosques.',
    icon: BookOpen,
  },
  {
    city: 'Marrakech',
    founded: '1062',
    dynasty: 'Almoravids',
    highlights: 'The "Red City" built by Yusuf ibn Tashfin. Home to the Koutoubia Mosque, Jemaa el-Fna square, the Saadian Tombs, El Badi Palace ruins, and the Ben Youssef Madrasa. The medina walls stretch for 19 kilometers.',
    icon: Star,
  },
  {
    city: 'Meknes',
    founded: '1672 (as capital)',
    dynasty: 'Alaouites',
    highlights: 'Sultan Moulay Ismail grand capital, designed to rival Versailles. Features the monumental Bab Mansour gate, the Royal Stables (built for 12,000 horses), the Heri es-Souani granary, and 40 kilometers of defensive walls.',
    icon: Crown,
  },
  {
    city: 'Rabat',
    founded: '1150 (Almohad fortress)',
    dynasty: 'Almohads / Modern',
    highlights: 'Morocco modern capital since 1912. Home to the Hassan Tower (unfinished Almohad minaret), the Mausoleum of Mohammed V, the Kasbah of the Udayas, the Chellah necropolis, and the Mohammed VI Museum of Modern and Contemporary Art.',
    icon: Landmark,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORY TRAVELER TIPS
   ═══════════════════════════════════════════════════════════════ */

const historyTravelerTips = [
  'Hire a licensed guide at major sites like Volubilis and the Fes Medina. Their knowledge of history and context transforms a visit from sightseeing into a meaningful experience. Official guides carry government-issued ID cards.',
  'Visit Volubilis early in the morning (opening time) or in the late afternoon. Midday heat makes the exposed ruins uncomfortable, and the light is best for photography at golden hour.',
  'The Fes Medina is best explored on foot with a guide for your first visit. GPS and maps are unreliable in the narrow, winding alleys. Return on your own once you have your bearings.',
  'Bring a flashlight or use your phone light when exploring the Saadian Tombs and some Marinid madrasas, as interior chambers can be dimly lit and the detailed craftsmanship deserves close inspection.',
  'Check restoration schedules before visiting. Morocco has been actively restoring many historical sites, and some sections may be temporarily closed. The Chellah in Rabat reopened in 2024 after major restoration work.',
  'Respect the cultural significance of religious sites. Non-Muslims cannot enter active mosques in Morocco (with the exception of the Hassan II Mosque in Casablanca), but you can admire their architecture from outside.',
  'Combine history with food. Many historical cities have traditional restaurants in restored riads or palaces. Eating in a centuries-old building while surrounded by original zellige and stucco work is part of the experience.',
  'Photography is generally permitted at archaeological sites and historical monuments, but always ask before photographing people. Some sites charge a small additional fee for camera or drone use.',
  'Allow at least two full days each for Fes and Marrakech to properly explore their historical sites. Meknes and Rabat can each be covered in a full day. Volubilis requires about 2 to 3 hours.',
  'Visit museums for deeper context. The Dar Batha Museum in Fes, the Museum of Moroccan Judaism in Casablanca, and the Marrakech Museum in the Ben Youssef complex all provide excellent historical background.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/history',
    title: 'Morocco History Overview',
    description: 'A concise overview of Moroccan history from ancient times to the modern kingdom, covering all major periods and events.',
    icon: BookOpen,
  },
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into Moroccan traditions, festivals, arts, music, and the rich cultural heritage that makes the kingdom unique.',
    icon: Globe,
  },
  {
    href: '/unesco',
    title: 'UNESCO World Heritage Sites',
    description: 'Explore Morocco nine UNESCO World Heritage Sites, from ancient medinas and Roman ruins to fortified villages and historic cities.',
    icon: Landmark,
  },
  {
    href: '/jewish-heritage',
    title: 'Jewish Heritage in Morocco',
    description: 'Discover the rich Jewish history of Morocco, from ancient mellahs and synagogues to the enduring legacy of Moroccan Jewish culture.',
    icon: Heart,
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

export default function MoroccoHistoryGuidePage() {
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
            <span className="text-white">History of Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            History &amp; Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            History of Morocco
            <br className="hidden md:block" /> Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the oldest Homo sapiens fossils to the modern kingdom &mdash; 3,000 years
            of dynasties, conquests, independence, and the historical sites that tell Morocco&apos;s story.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Kingdom Forged by Millennia
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco stands at the crossroads of Africa, Europe, and the Middle East &mdash; a
                geographic position that has shaped one of the richest and most layered histories
                of any nation on earth. The territory of modern Morocco has been continuously inhabited
                for over 300,000 years, making it home to the oldest known Homo sapiens fossils
                ever discovered, unearthed at Jebel Irhoud in 2017.
              </p>
              <p>
                Phoenician traders established coastal outposts here a thousand years before Christ.
                Rome built grand cities with mosaic floors and triumphal arches. Arab conquerors
                brought Islam, and Berber dynasties forged empires that stretched from the Senegal
                River to the gates of Paris. The Portuguese and Spanish carved out fortresses along
                the coast, the French and Spanish imposed protectorates in the 20th century, and
                Morocco emerged as an independent kingdom in 1956 under the leadership of Mohammed V.
              </p>
              <p>
                Today, this history is etched into every medina alleyway, every crumbling kasbah,
                and every imperial gate. Understanding Morocco&apos;s past is the key to
                appreciating the extraordinary cultural mosaic you encounter as a visitor &mdash;
                from the Roman mosaics of Volubilis to the living medieval city of Fes el-Bali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick History Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco History at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about Morocco&apos;s historical significance that every visitor should know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Human Habitation', value: '300,000+ Years', detail: 'Oldest Homo sapiens fossils found at Jebel Irhoud', icon: Globe },
              { label: 'Major Dynasties', value: '7 Dynasties', detail: 'Idrisids through Alaouites, spanning 1,200+ years', icon: Crown },
              { label: 'UNESCO Sites', value: '9 Listed', detail: 'Including Fes Medina, Volubilis, and Ait Ben Haddou', icon: Landmark },
              { label: 'Independence', value: 'March 2, 1956', detail: 'From French & Spanish protectorate under Mohammed V', icon: Flag },
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

      {/* ── Historical Timeline ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Timeline of Moroccan History
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From prehistoric origins to the modern kingdom &mdash; the defining moments that shaped Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {historicalTimeline.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.era} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {item.era}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Moroccan Dynasties ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Great Moroccan Dynasties
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six major dynasties that built, defended, and transformed the Kingdom of Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moroccanDynasties.map((dynasty) => {
              const DynIcon = dynasty.icon;
              return (
                <div key={dynasty.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DynIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {dynasty.name}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--color-gold)]">{dynasty.period}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      Origin: {dynasty.origin}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      Capital: {dynasty.capital}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dynasty.legacy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Prehistoric & Ancient Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Prehistoric &amp; Ancient Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Before the dynasties, Morocco was home to some of humanity&apos;s earliest communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Jebel Irhoud Fossils', detail: 'In 2017, archaeologists at Jebel Irhoud (near Safi) discovered the remains of five Homo sapiens individuals dating to approximately 300,000 years ago. This discovery pushed back the known origin of our species by 100,000 years and proved that early humans were spread across Africa, not just East Africa as previously believed.', icon: Globe },
              { title: 'Phoenician Settlements', detail: 'From around 1100 BC, Phoenician traders from Tyre and Sidon established settlements along Morocco Atlantic and Mediterranean coasts. Lixus (near Larache) became a major trading hub, while Mogador (Essaouira) served as a waypoint for voyages down the African coast. They introduced alphabetic writing, advanced metallurgy, and the famous Tyrian purple dye industry.', icon: Globe },
              { title: 'Carthaginian Influence', detail: 'After the fall of Tyre to the Babylonians, Carthage (in modern Tunisia) inherited control of Morocco Phoenician settlements. The Carthaginian explorer Hanno the Navigator sailed down Morocco Atlantic coast around 500 BC, establishing colonies and recording encounters with gorillas. Carthaginian influence waned after the Punic Wars with Rome.', icon: Shield },
              { title: 'Roman Mauretania Tingitana', detail: 'Rome annexed northern Morocco in 40 AD following the assassination of the last Berber client king, Ptolemy of Mauretania. The province of Mauretania Tingitana centered on Volubilis and included major settlements at Tingis (Tangier), Sala (Rabat), and Lixus. Rome brought roads, aqueducts, public baths, and olive oil production to the region.', icon: Landmark },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Colonial Era & Independence ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Colonial Era &amp; Independence
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How Morocco endured colonial rule and won back its sovereignty in the 20th century.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {[
                { title: 'European Encroachment (19th Century)', detail: 'By the late 1800s, European powers competed for influence in Morocco. France and Spain signed treaties carving out spheres of influence, while Britain and Germany jockeyed for economic concessions. The Algeciras Conference of 1906 formalized international interest in Morocco, setting the stage for colonization.', icon: Globe },
                { title: 'Treaty of Fez (1912)', detail: 'On March 30, 1912, Sultan Abdelhafid signed the Treaty of Fez, establishing the French protectorate over most of Morocco. Spain received the Rif region in the north and the Sidi Ifni enclave in the south. Marshal Hubert Lyautey became the first Resident-General and pursued a policy of preserving Morocco medinas while building modern Villes Nouvelles alongside them.', icon: Flag },
                { title: 'The Rif War (1921-1926)', detail: 'Abd el-Krim, a brilliant Riffian Berber leader, united the Rif tribes and inflicted devastating defeats on the Spanish army, including the Battle of Annual (1921) where 8,000 Spanish soldiers perished. His Republic of the Rif was eventually crushed by a combined French-Spanish force of 250,000 troops. Abd el-Krim is revered as a hero of anti-colonial resistance.', icon: Sword },
                { title: 'Nationalist Movement & Exile of Mohammed V', detail: 'The Istiqlal (Independence) Party, founded in 1944, demanded full sovereignty. When Sultan Mohammed V openly supported the nationalists, France exiled him to Madagascar in 1953. His exile backfired spectacularly, galvanizing nationwide resistance and making Mohammed V a symbol of Moroccan independence.', icon: Users },
                { title: 'Independence Day: March 2, 1956', detail: 'Faced with mounting unrest, France agreed to Moroccan independence. Mohammed V returned from exile in triumph on November 16, 1955, and on March 2, 1956, Morocco formally regained its sovereignty. Spain relinquished its northern zone the following month. Mohammed V became the first king of independent Morocco.', icon: Star },
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
                  Lyautey&apos;s Legacy: Why Morocco&apos;s Medinas Survived
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Unlike other colonial administrators who demolished historic quarters, Marshal Lyautey
                  ordered that Morocco&apos;s ancient medinas be preserved intact while building modern
                  European-style &ldquo;Villes Nouvelles&rdquo; (new cities) alongside them. This policy
                  is the reason cities like Fes, Marrakech, and Meknes still have their medieval urban
                  fabric &mdash; and why so many Moroccan medinas are UNESCO World Heritage Sites today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Historical Sites to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Key Historical Sites to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The essential historical landmarks where you can experience Morocco&apos;s layered past firsthand.
          </p>

          <div className="space-y-4">
            {historicalSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SiteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {site.name}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {site.period}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mb-2">{site.location}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{site.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Modern Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Modern Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How the kingdom has transformed since independence while preserving its heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'The Years of Lead (1961-1999)', detail: 'Under King Hassan II, Morocco experienced political repression known as the "Years of Lead" (Les Annees de Plomb). Political dissidents were imprisoned or disappeared. The Equity and Reconciliation Commission (IER), established in 2004 by Mohammed VI, investigated these abuses and compensated victims, making Morocco one of the few Arab states to formally address past human rights violations.', icon: Users },
              { title: 'The Green March (1975)', detail: 'King Hassan II organized the Green March, in which 350,000 unarmed Moroccan civilians peacefully marched into the Spanish Sahara to assert Morocco territorial claim. The event led to the Madrid Accords and Spain withdrawal. The Western Sahara question remains unresolved and is a defining issue of modern Moroccan diplomacy.', icon: Flag },
              { title: 'Constitutional Reforms (2011)', detail: 'In response to the Arab Spring, King Mohammed VI introduced a new constitution that strengthened parliament, recognized Amazigh (Berber) as an official language alongside Arabic, enshrined gender equality, and established regional governance. The reforms represented a significant step toward democratic monarchy.', icon: CheckCircle },
              { title: 'Infrastructure & Economy', detail: 'Modern Morocco has invested heavily in infrastructure: the Tangier-Med port (Africa largest), the Al Boraq high-speed railway (Africa first, connecting Tangier to Casablanca), renewable energy projects like the Noor-Ouarzazate solar complex (world largest concentrated solar plant), and the hosting of the 2030 FIFA World Cup alongside Spain and Portugal.', icon: Star },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
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
            Answers to the most common questions about the history of Morocco.
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
            Continue exploring Moroccan heritage, culture, and architecture with these essential guides.
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
            Walk Through 3,000 Years of History
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            From the Roman mosaics of Volubilis to the bustling medieval medina of Fes, from the
            Saadian Tombs of Marrakech to the grand gates of Meknes &mdash; Morocco&apos;s history
            is not locked behind museum glass. It is alive in every city, every kasbah, and every
            conversation. Come and walk through it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/history"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Explore Morocco History
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/culture"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Moroccan Culture Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Historical dates and details are based on widely accepted scholarship as of March 2026.
            Some dates, especially for early periods, are approximate. Site opening hours and entry fees
            may vary by season. Seasonal pricing can vary.
          </p>
        </div>
      </section>
    </>
  );
}

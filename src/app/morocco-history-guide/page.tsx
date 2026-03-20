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
  CheckCircle,
  Globe,
  Landmark,
  BookOpen,
  Crown,
  Building,
  Scroll,
  Swords,
  Shield,
  Flag,
  Mountain,
  Users,
  Calendar,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'History of Morocco 2026 | Complete Timeline from Prehistoric Era to Modern Kingdom',
  description:
    'Complete guide to the history of Morocco. From prehistoric cave paintings and Berber kingdoms to Roman Volubilis, Islamic dynasties, the French protectorate, independence in 1956, and the modern Alaouite monarchy under Mohamed VI.',
  keywords: [
    'history of morocco',
    'morocco history',
    'moroccan dynasties',
    'morocco timeline',
    'ancient morocco',
    'berber kingdoms',
    'almoravid dynasty',
    'almohad dynasty',
    'marinid dynasty',
    'saadian dynasty',
    'alaouite dynasty',
    'roman morocco volubilis',
    'french protectorate morocco',
    'morocco independence 1956',
    'green march 1975',
    'idrisid dynasty fes',
    'morocco historical sites',
    'moroccan history guide',
    'mohamed vi morocco',
    'islamic conquest morocco',
  ],
  openGraph: {
    title: 'History of Morocco 2026 | Complete Timeline from Prehistoric Era to Modern Kingdom',
    description:
      'From Paleolithic cave paintings to the modern Alaouite monarchy. Explore 12,000 years of Moroccan history: Berber kingdoms, Roman ruins, Islamic dynasties, colonial era, and independence.',
    url: `${BASE_URL}/morocco-history-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-kasbahs.webp`,
        width: 1200,
        height: 630,
        alt: 'Ancient kasbah fortress in Morocco representing centuries of Moroccan history and architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'History of Morocco 2026 | Complete Timeline & Dynasties Guide',
    description:
      'From prehistoric Berber kingdoms and Roman Volubilis to Islamic golden ages, colonial resistance, and modern Morocco. The full story of 12,000 years of history.',
    images: [`${BASE_URL}/images/hero-kasbahs.webp`],
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
  name: 'History of Morocco 2026 | Complete Timeline from Prehistoric Era to Modern Kingdom',
  description:
    'Complete guide to the history of Morocco covering prehistoric cave paintings, Berber kingdoms, Roman Volubilis, Islamic dynasties, French protectorate, independence, and the modern Alaouite monarchy.',
  url: `${BASE_URL}/morocco-history-guide`,
  image: `${BASE_URL}/images/hero-kasbahs.webp`,
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
        text: 'Morocco was founded as a unified state in 789 AD by Idris I, making it one of the oldest kingdoms in the world. However, human habitation in the region dates back over 300,000 years, with Jebel Irhoud yielding the oldest known Homo sapiens fossils. The modern Kingdom of Morocco gained independence from France on March 2, 1956.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the major dynasties of Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has been ruled by seven major dynasties: the Idrisids (789-974), Almoravids (1040-1147), Almohads (1121-1269), Marinids (1244-1465), Wattasids (1472-1554), Saadians (1549-1659), and the Alaouites (1631-present). Each left distinct architectural, cultural, and political legacies across the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you visit Roman ruins in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Volubilis, a UNESCO World Heritage Site near Meknes, is the best-preserved Roman site in Morocco. Founded in the 3rd century BC, it features intact mosaic floors, a triumphal arch, basilica, and olive presses. Entry costs from 70 MAD. Other Roman sites include Lixus near Larache and Banasa near Kenitra.',
      },
    },
    {
      '@type': 'Question',
      name: 'What was the Green March of 1975?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On November 6, 1975, King Hassan II organized a peaceful march of 350,000 unarmed Moroccan civilians into the Spanish-controlled Western Sahara. This diplomatic maneuver pressured Spain to sign the Madrid Accords on November 14, 1975, transferring the territory to Morocco and Mauritania. The Green March is a major national holiday in Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who were the Berbers in ancient Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Berbers, or Amazigh ("free people"), are the indigenous inhabitants of North Africa. They established kingdoms like Mauretania (not to be confused with modern Mauritania) as early as the 3rd century BC. Berber leaders like Jugurtha fought Rome, and Berber dynasties -- the Almoravids and Almohads -- built empires stretching from Spain to Senegal. Today, 40-50% of Moroccans identify as Amazigh.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long did France control Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France established its protectorate over Morocco on March 30, 1912, through the Treaty of Fes. Spain controlled a northern zone and the Ifni enclave. The protectorate lasted 44 years until Morocco regained independence on March 2, 1956, under Sultan Mohammed V. The French colonial period transformed Morocco with modern infrastructure, but also provoked significant resistance movements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best historical sites to visit in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top historical sites include: Volubilis (Roman ruins near Meknes), Fes el-Bali (world\'s oldest functioning medina, founded 808 AD), Ait Benhaddou (UNESCO kasbah near Ouarzazate), the Koutoubia Mosque in Marrakech (1147), the Hassan Tower in Rabat (1195), Chellah necropolis in Rabat (Phoenician-Roman-Marinid layers), and the Saadian Tombs in Marrakech (1578-1603).',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened during Morocco\'s independence movement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco\'s independence movement intensified after France exiled Sultan Mohammed V to Madagascar in 1953. This backfired: Moroccans rallied around the exiled sultan, and armed resistance groups launched attacks. Widespread unrest, combined with international pressure and the Algerian War draining French resources, forced France to negotiate. Mohammed V returned triumphantly on November 16, 1955, and Morocco declared independence on March 2, 1956.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TIMELINE ERAS
   ═══════════════════════════════════════════════════════════════ */

const timelineEras = [
  {
    era: 'Prehistoric Morocco',
    period: '300,000 BC -- 1,000 BC',
    icon: Mountain,
    color: 'var(--color-accent)',
    events: [
      'Jebel Irhoud fossils (discovered 2017): oldest Homo sapiens remains on Earth, dated to approximately 300,000 years ago',
      'Taforalt cave (eastern Morocco): evidence of the oldest known jewelry -- perforated Nassarius shells dating to 82,000 BC',
      'Tazina rock engravings in the eastern Sahara and High Atlas depict elephants, rhinoceros, and hunting scenes from 10,000-6,000 BC',
      'Neolithic revolution reached Morocco around 5,000 BC, bringing agriculture, pottery, and megalithic stone circles like Msoura near Asilah',
    ],
  },
  {
    era: 'Berber Kingdoms & Phoenician Contact',
    period: '1,000 BC -- 40 AD',
    icon: Shield,
    color: 'var(--color-gold)',
    events: [
      'Phoenicians established trading posts at Lixus (near Larache), Tingis (Tangier), and Mogador (Essaouira) around 1,000-800 BC',
      'Carthage controlled coastal settlements after 500 BC, trading purple dye from murex shells -- the origin of the name "Mauretania" (land of the Mauri)',
      'Kingdom of Mauretania emerged as a Berber client state of Rome under King Bocchus I (110 BC), who betrayed Jugurtha to the Romans in 105 BC',
      'King Juba II (25 BC - 23 AD) made Volubilis a secondary capital. A scholar-king educated in Rome, he married Cleopatra Selene, daughter of Cleopatra VII and Mark Antony',
      'Rome annexed Mauretania Tingitana in 40 AD after Emperor Caligula murdered the last Berber king, Ptolemy of Mauretania',
    ],
  },
  {
    era: 'Roman Morocco',
    period: '40 AD -- 429 AD',
    icon: Landmark,
    color: 'var(--color-accent)',
    events: [
      'Volubilis grew to 20,000 inhabitants with a forum, basilica, triumphal arch (217 AD), public baths, and olive oil production that supplied Rome',
      'Roman control extended only to the Bou Regreg river (modern Rabat area); Berber tribes south of this line remained independent',
      'Tingis (Tangier) served as the provincial capital of Mauretania Tingitana, connected to Spain by sea routes',
      'Christianity spread through Roman Morocco: early bishops attended councils, and the Donatist heresy had strong roots in North Africa',
      'Vandals swept through in 429 AD, ending Roman control. Berber tribes quickly reclaimed the interior territories Rome had administered',
    ],
  },
  {
    era: 'Islamic Conquest & the Idrisids',
    period: '682 -- 974 AD',
    icon: BookOpen,
    color: 'var(--color-gold)',
    events: [
      'Uqba ibn Nafi led the first Arab raid into Morocco in 682 AD, reportedly riding his horse into the Atlantic and declaring he had reached the end of the land',
      'Musa ibn Nusayr completed the conquest by 710 AD. His Berber lieutenant, Tariq ibn Ziyad, crossed to Spain in 711 with 7,000 troops, giving his name to Gibraltar (Jabal Tariq)',
      'Berber revolts against Arab taxation and racial discrimination erupted in 740 AD, establishing independent Berber states across Morocco',
      'Idris I, a descendant of the Prophet Muhammad fleeing Abbasid persecution, arrived in Volubilis in 788 AD. Local Awraba Berbers proclaimed him imam, founding Morocco\'s first Islamic dynasty',
      'Idris II founded Fes in 808 AD, establishing it as the kingdom\'s capital. Refugees from Cordoba and Kairouan brought Andalusian and Tunisian culture, making Fes a center of learning',
      'The Qarawiyyin Mosque, founded in 859 AD by Fatima al-Fihri, evolved into one of the world\'s oldest continuously operating universities',
    ],
  },
  {
    era: 'The Almoravids',
    period: '1040 -- 1147',
    icon: Swords,
    color: 'var(--color-accent)',
    events: [
      'Abdallah ibn Yasin, a Malikite scholar, united Sanhaja Berber tribes in a ribat (religious-military camp) in the western Sahara around 1040',
      'Yusuf ibn Tashfin captured Aghmat in 1058, then founded Marrakech in 1062 as the Almoravid capital, building the first khettara irrigation system',
      'By 1085, Almoravid territory stretched from Senegal to central Spain. Ibn Tashfin defeated Alfonso VI of Castile at the Battle of Sagrajas (1086)',
      'Almoravids introduced Andalusian art and architecture to Morocco. Ali ibn Yusuf built the first walls of Marrakech and the Ben Youssef Mosque (1126)',
      'The Almoravid era linked sub-Saharan gold routes to Mediterranean trade, making Morocco a crossroads of African and European commerce',
    ],
  },
  {
    era: 'The Almohad Golden Age',
    period: '1121 -- 1269',
    icon: Crown,
    color: 'var(--color-gold)',
    events: [
      'Ibn Tumart, a Masmuda Berber from the Anti-Atlas, launched a puritanical reform movement against the Almoravids around 1121, proclaiming himself the Mahdi',
      'Abd al-Mu\'min conquered Marrakech in 1147, destroying Almoravid palaces. He unified the entire Maghreb from Libya to Morocco under one state for the first and only time',
      'Yaqub al-Mansur (r. 1184-1199) built the Hassan Tower in Rabat (intended as the world\'s largest minaret at 86m, left unfinished at 44m), the Koutoubia Mosque in Marrakech, and the Giralda in Seville',
      'The Almohad empire was the largest Berber state in history, controlling Morocco, Algeria, Tunisia, Libya, and Muslim Spain',
      'Defeat at Las Navas de Tolosa (1212) against a Christian coalition began the Almohad decline. Provincial governors declared independence, fragmenting the empire',
    ],
  },
  {
    era: 'Marinids & Wattasids',
    period: '1244 -- 1554',
    icon: Building,
    color: 'var(--color-accent)',
    events: [
      'The Zenata Berber Marinids captured Fes in 1248 and Marrakech in 1269, making Fes their capital and building Fes el-Jdid (New Fes) in 1276',
      'Abu Inan Faris (r. 1348-1358) built the Bou Inania Madrasa in Fes, a masterpiece of Marinid carved stucco, zellij tilework, and cedarwood',
      'Marinids established 14 madrasas in Fes alone, transforming the city into the intellectual capital of the western Islamic world',
      'The Black Death devastated Morocco from 1348, killing an estimated one-third of the population and weakening Marinid authority',
      'The Wattasids, Marinid viziers, seized power in 1472 but controlled only northern Morocco. Portugal and Spain captured coastal cities: Ceuta (1415), Tangier (1471), Agadir (1505)',
    ],
  },
  {
    era: 'The Saadian Dynasty',
    period: '1549 -- 1659',
    icon: Star,
    color: 'var(--color-gold)',
    events: [
      'The Saadians, an Arab sharif family from the Draa Valley, rose to power by leading jihad against Portuguese occupation, recapturing Agadir in 1541',
      'Ahmed al-Mansur (r. 1578-1603) funded his reign with ransom from the Battle of the Three Kings (1578), where Portuguese King Sebastian I died invading Morocco',
      'Al-Mansur built the El Badi Palace in Marrakech (1578-1593) with Italian marble, Sudanese gold, and Irish crystal. He also constructed the Saadian Tombs',
      'In 1591, al-Mansur sent 4,000 troops across the Sahara to conquer the Songhai Empire, seizing Timbuktu and controlling trans-Saharan gold and salt trade',
      'After al-Mansur\'s death in 1603, his sons fought a civil war that split Morocco into rival statelets for decades',
    ],
  },
  {
    era: 'The Alaouite Dynasty',
    period: '1631 -- Present',
    icon: Crown,
    color: 'var(--color-accent)',
    events: [
      'Moulay Rashid (r. 1666-1672) unified Morocco and established the Alaouite dynasty, which claims descent from the Prophet Muhammad through Ali ibn Abi Talib',
      'Moulay Ismail (r. 1672-1727) built Meknes as his capital with 40 km of walls, 20 gates, and vast royal stables. His army of 150,000 slave soldiers (the Abid al-Bukhari) maintained iron control',
      'Mohammed III (r. 1757-1790) built Essaouira as a trade port, was the first head of state to recognize American independence (1777), and signed the Treaty of Marrakesh with the United States in 1786',
      'The 19th century brought European pressure: France invaded Algeria (1830), Spain attacked Tetouan (1860), and the Conference of Madrid (1880) gave European powers economic privileges in Morocco',
      'Sultan Abdelaziz\'s weak rule and European debt led to the Algeciras Conference (1906), where France and Spain divided Morocco into zones of influence',
    ],
  },
  {
    era: 'The Colonial Period',
    period: '1912 -- 1956',
    icon: Flag,
    color: 'var(--color-gold)',
    events: [
      'The Treaty of Fes (March 30, 1912) established a French protectorate. Marshal Lyautey became the first Resident-General, building nouvelle villes alongside traditional medinas',
      'Spain controlled a northern zone (capital: Tetouan), the Ifni enclave, and the Western Sahara. Tangier became an international zone in 1923',
      'Abdelkrim al-Khattabi led the Rif War (1921-1926), defeating Spain at the Battle of Annual (1921) where 8,000 Spanish soldiers died. He established the Republic of the Rif before a combined Franco-Spanish force of 250,000 crushed his resistance',
      'The Istiqlal (Independence) Party formed in 1944, issuing the Independence Manifesto on January 11, 1944. France exiled Sultan Mohammed V to Madagascar in August 1953',
      'Mohammed V\'s exile united Moroccans across class and tribal lines. Armed resistance, international pressure, and France\'s Algerian war forced negotiations. Mohammed V returned on November 16, 1955',
      'Morocco declared independence on March 2, 1956. Mohammed V became king, and Morocco joined the United Nations on November 12, 1956',
    ],
  },
  {
    era: 'Modern Morocco',
    period: '1956 -- Present',
    icon: Flag,
    color: 'var(--color-accent)',
    events: [
      'Hassan II succeeded his father in 1961 and ruled until 1999. He survived two assassination attempts (1971 at Skhirat and 1972 when fighter jets attacked his Boeing 727)',
      'The Green March (November 6, 1975): 350,000 unarmed Moroccan civilians marched into Spanish Sahara, leading Spain to cede the territory in the Madrid Accords',
      'The "Years of Lead" (1960s-1990s) saw harsh repression of political opponents. The 1990s brought gradual liberalization, culminating in the Equity and Reconciliation Commission (2004)',
      'Mohamed VI ascended the throne on July 23, 1999. His reign brought the Mudawwana family code reform (2004), the new constitution (2011), and massive infrastructure investment',
      'Morocco launched Africa\'s first high-speed rail (Al Boraq, 2018), the Noor Ouarzazate Solar Complex (world\'s largest concentrated solar plant), and won the bid to co-host the 2030 FIFA World Cup',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORICAL SITES
   ═══════════════════════════════════════════════════════════════ */

const historicalSites = [
  {
    name: 'Volubilis',
    location: 'Near Meknes',
    era: 'Roman (3rd century BC -- 5th century AD)',
    icon: Landmark,
    description:
      'The best-preserved Roman archaeological site in Morocco, with intact mosaics depicting Orpheus, Hercules, and Bacchus. The triumphal arch of Caracalla (217 AD), the Capitoline temple, and dozens of olive oil presses reveal a prosperous provincial city. UNESCO World Heritage Site since 1997.',
    entry: 'From 70 MAD',
    tip: 'Visit early morning or late afternoon to avoid heat and crowds. Allow 2-3 hours.',
  },
  {
    name: 'Fes el-Bali',
    location: 'Fes',
    era: 'Idrisid -- Marinid (808 AD onward)',
    icon: Building,
    description:
      'The world\'s largest car-free urban zone and oldest continuously functioning medina. Founded by Idris II in 808 AD, it holds the Qarawiyyin University (859 AD), the Bou Inania Madrasa (1351-1356), the Chouara tanneries (11th century), and over 9,000 alleyways. UNESCO World Heritage Site since 1981.',
    entry: 'Free to enter medina; guide from 300 MAD per half-day',
    tip: 'Hire a licensed guide for your first visit. The medina is genuinely disorienting without one.',
  },
  {
    name: 'Ait Benhaddou',
    location: 'Near Ouarzazate',
    era: 'Almoravid -- Saadian (11th -- 17th century)',
    icon: Landmark,
    description:
      'A fortified ksar (village) of earthen buildings on a hillside along the former caravan route between Marrakech and the Sahara. The oldest structures date to the 11th century. Used as a filming location for Gladiator, Game of Thrones, and Lawrence of Arabia. UNESCO World Heritage Site since 1987.',
    entry: 'Free; guided tours from 100 MAD',
    tip: 'Cross the river to climb to the granary at the top for panoramic views of the valley.',
  },
  {
    name: 'Chellah Necropolis',
    location: 'Rabat',
    era: 'Phoenician -- Roman -- Marinid (7th century BC -- 14th century AD)',
    icon: Scroll,
    description:
      'A layered archaeological site spanning 2,000 years. Phoenician traders founded Sala Colonia here. Romans built a forum and port. The Marinids converted it into a royal necropolis in the 14th century, adding a mosque, madrasa, and garden. Storks nest on the crumbling minarets.',
    entry: 'From 70 MAD',
    tip: 'A peaceful escape from Rabat\'s bustle. The garden is especially atmospheric at sunset.',
  },
  {
    name: 'Koutoubia Mosque',
    location: 'Marrakech',
    era: 'Almohad (1147-1199)',
    icon: Building,
    description:
      'Built by the Almohad caliph Yaqub al-Mansur, the Koutoubia\'s 77-meter minaret set the architectural template for the Giralda in Seville and the Hassan Tower in Rabat. The name means "Mosque of the Booksellers," referencing the manuscript market that once surrounded it. Non-Muslims cannot enter, but the minaret dominates Marrakech\'s skyline.',
    entry: 'Exterior only for non-Muslims',
    tip: 'The minaret is most photogenic in golden hour light from the Jardin de la Koutoubia park.',
  },
  {
    name: 'Saadian Tombs',
    location: 'Marrakech',
    era: 'Saadian (1578-1603)',
    icon: Crown,
    description:
      'Built by Ahmed al-Mansur for his family, these tombs were sealed by the Alaouite Sultan Moulay Ismail and forgotten until 1917 when a French aerial survey rediscovered them. The Hall of Twelve Columns features Italian Carrara marble, gilded cedarwood muqarnas, and zellij tilework of extraordinary precision.',
    entry: 'From 70 MAD',
    tip: 'Arrive at opening time (9 AM) to avoid the narrow passages being packed with tour groups.',
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
            backgroundImage: 'url(/images/hero-kasbahs.webp)',
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
            <Scroll className="w-4 h-4" />
            History &amp; Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            History of Morocco:
            <br className="hidden md:block" /> 12,000 Years of Empires &amp; Dynasties
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the oldest Homo sapiens fossils on Earth to a modern kingdom co-hosting the 2030 World Cup.
            The full story of Morocco&apos;s extraordinary past.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: Where Africa, Europe, and the Islamic World Converge
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco occupies a unique geographic position at the northwest corner of Africa, separated
                from Europe by just 14 kilometers at the Strait of Gibraltar. This location made it a
                crossroads of civilizations for millennia. Phoenician traders, Roman colonists, Arab
                conquerors, Berber empire-builders, Ottoman rivals, and European colonial powers all shaped
                the territory that became the modern kingdom.
              </p>
              <p>
                The country&apos;s history stretches far deeper than most visitors realize. In 2017,
                archaeologists at Jebel Irhoud reclassified fossils found there as the oldest known Homo
                sapiens remains on Earth -- approximately 300,000 years old. From those Paleolithic origins
                through Berber kingdoms, Roman provinces, Islamic dynasties, a colonial interlude, and a
                hard-won independence, Morocco&apos;s story is one of continuous adaptation and fierce
                cultural identity.
              </p>
              <p>
                Today, Morocco stands as Africa&apos;s oldest monarchy. The ruling Alaouite dynasty has
                held the throne since 1631 -- nearly 400 years of continuous rule. Understanding this
                history transforms any visit: the Roman mosaics at Volubilis, the medieval madrasas of Fes,
                the Almohad minaret dominating Marrakech, and the French-built nouvelle villes all become
                chapters in a story you can walk through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Complete Timeline ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Complete Timeline of Moroccan History
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eleven eras that shaped the kingdom, from the Stone Age to the smartphone age.
          </p>

          <div className="space-y-8">
            {timelineEras.map((era) => {
              const EraIcon = era.icon;
              return (
                <div key={era.era} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${era.color}15` }}
                    >
                      <EraIcon className="w-5 h-5" style={{ color: era.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {era.era}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{era.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {era.events.map((event, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Dynasties Deep Dive ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Ruling Dynasties at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Seven dynasties, each defined by a founding vision and lasting monuments.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--color-accent)]/20">
                  <th className="py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Dynasty</th>
                  <th className="py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Period</th>
                  <th className="py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Capital</th>
                  <th className="py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Legacy</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--surface-muted)]">
                  <td className="py-3 pr-4 font-medium">Idrisids</td>
                  <td className="py-3 pr-4">789 -- 974</td>
                  <td className="py-3 pr-4">Fes</td>
                  <td className="py-3">Founded Morocco&apos;s first Islamic state and the city of Fes. Built the Qarawiyyin (859 AD).</td>
                </tr>
                <tr className="border-b border-[var(--surface-muted)]">
                  <td className="py-3 pr-4 font-medium">Almoravids</td>
                  <td className="py-3 pr-4">1040 -- 1147</td>
                  <td className="py-3 pr-4">Marrakech</td>
                  <td className="py-3">Founded Marrakech (1062). Built an empire from Senegal to Spain. Introduced Andalusian art.</td>
                </tr>
                <tr className="border-b border-[var(--surface-muted)]">
                  <td className="py-3 pr-4 font-medium">Almohads</td>
                  <td className="py-3 pr-4">1121 -- 1269</td>
                  <td className="py-3 pr-4">Marrakech</td>
                  <td className="py-3">Built the Koutoubia, Hassan Tower, and Giralda. Largest Berber empire in history.</td>
                </tr>
                <tr className="border-b border-[var(--surface-muted)]">
                  <td className="py-3 pr-4 font-medium">Marinids</td>
                  <td className="py-3 pr-4">1244 -- 1465</td>
                  <td className="py-3 pr-4">Fes</td>
                  <td className="py-3">Built 14 madrasas in Fes. Created masterpieces of zellij and carved stucco.</td>
                </tr>
                <tr className="border-b border-[var(--surface-muted)]">
                  <td className="py-3 pr-4 font-medium">Wattasids</td>
                  <td className="py-3 pr-4">1472 -- 1554</td>
                  <td className="py-3 pr-4">Fes</td>
                  <td className="py-3">Weakened by Portuguese coastal conquests. Controlled only northern Morocco.</td>
                </tr>
                <tr className="border-b border-[var(--surface-muted)]">
                  <td className="py-3 pr-4 font-medium">Saadians</td>
                  <td className="py-3 pr-4">1549 -- 1659</td>
                  <td className="py-3 pr-4">Marrakech</td>
                  <td className="py-3">El Badi Palace, Saadian Tombs. Conquered Timbuktu (1591). Expelled the Portuguese.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Alaouites</td>
                  <td className="py-3 pr-4">1631 -- present</td>
                  <td className="py-3 pr-4">Rabat</td>
                  <td className="py-3">Current ruling dynasty. Built Meknes. Led independence. Modernized the kingdom.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Historical Sites to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historical Sites You Can Visit Today
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Walk through 2,000 years of history at these accessible archaeological and architectural landmarks.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Entry prices are starting prices and may change seasonally. Confirm current rates locally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historicalSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SiteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {site.name}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{site.era}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{site.description}</p>
                  <div className="space-y-2 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{site.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{site.entry}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{site.tip}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Figures Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Figures Who Shaped Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Kings, scholars, warriors, and reformers whose decisions echo across centuries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Idris I (745 -- 791)
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">Founder of the Idrisid Dynasty</p>
              <p className="text-sm text-[var(--text-secondary)]">
                A great-grandson of the Prophet Muhammad, Idris fled the Abbasid massacre at Fakhkh (786) near Mecca.
                He reached Volubilis, where the Awraba Berbers recognized his religious authority and proclaimed him
                imam in 789. He unified local tribes and laid the foundation for the first Moroccan Islamic state
                before his assassination by an Abbasid agent in 791.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Yusuf ibn Tashfin (c. 1009 -- 1106)
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">Almoravid Empire Builder</p>
              <p className="text-sm text-[var(--text-secondary)]">
                A Sanhaja Berber commander who founded Marrakech in 1062 and built an empire from the Senegal
                River to central Spain. His victory at Sagrajas (1086) against Alfonso VI of Castile saved
                Muslim Spain from Christian reconquest for another four centuries. He lived ascetically despite
                ruling one of the era&apos;s wealthiest states.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Ahmed al-Mansur (1549 -- 1603)
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">The Saadian &quot;Golden&quot; Sultan</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Called &quot;al-Dhahabi&quot; (the Golden) for his vast wealth, al-Mansur financed his reign with
                Portuguese ransom money and Saharan gold. He sent an army across the desert to conquer the Songhai
                Empire in 1591, making Morocco a transatlantic power. His El Badi Palace in Marrakech was one of
                the most lavish buildings of the 16th century.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Mohammed V (1909 -- 1961)
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">Father of Independence</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Sultan since 1927, Mohammed V became the symbol of Moroccan resistance when France exiled him to
                Madagascar in 1953. His forced removal galvanized the independence movement, uniting nationalists,
                tribal leaders, and ordinary citizens. He returned in triumph on November 16, 1955, and led
                Morocco to full independence on March 2, 1956, becoming its first modern king.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Abdelkrim al-Khattabi (1882 -- 1963)
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">Rif War Hero &amp; Anti-Colonial Leader</p>
              <p className="text-sm text-[var(--text-secondary)]">
                A Rifian Berber leader who inflicted one of colonial history&apos;s worst defeats on Spain at the Battle
                of Annual (1921). He established the Republic of the Rif with a constitution, judicial system, and
                modernizing reforms. It took a combined Franco-Spanish force of 250,000 troops and chemical
                weapons (mustard gas) to defeat him in 1926. He remains a hero across North Africa.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Fatima al-Fihri (c. 800 -- 880)
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">Founder of the Qarawiyyin</p>
              <p className="text-sm text-[var(--text-secondary)]">
                A Tunisian-born woman whose family settled in Fes. She used her inheritance to build the Qarawiyyin
                Mosque in 859 AD. It evolved into one of the world&apos;s oldest continuously operating universities,
                predating both Oxford (1096) and Bologna (1088). Scholars like Ibn Khaldun and Maimonides studied
                within its walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco Through the Ages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-kasbahs.webp', alt: 'Ancient mud-brick kasbahs along the former caravan route in southern Morocco', label: 'Kasbah Heritage' },
              { src: '/images/hero-fes.webp', alt: 'The medieval medina of Fes Morocco founded in 808 AD by Idris II', label: 'Medieval Fes el-Bali' },
              { src: '/images/hero-marrakech.webp', alt: 'Marrakech Morocco founded by the Almoravids in 1062 AD', label: 'Imperial Marrakech' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips for History Lovers ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for History-Focused Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Make the most of Morocco&apos;s historical sites with these recommendations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Best History-Focused Itinerary
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Days 1-2:</strong> Rabat -- Chellah, Hassan Tower, Mohammed V Mausoleum, Kasbah of the Udayas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Day 3:</strong> Meknes and Volubilis -- Moulay Ismail&apos;s granaries, Roman mosaics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Days 4-5:</strong> Fes -- Qarawiyyin, Bou Inania Madrasa, tanneries, Jewish mellah</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Days 6-7:</strong> Marrakech -- Koutoubia, Saadian Tombs, Ben Youssef Madrasa, Bahia Palace</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Day 8:</strong> Ait Benhaddou and Ouarzazate -- kasbahs and Saharan caravan history</span>
                </li>
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Essential Advice
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Hire licensed guides at Fes medina and Volubilis. Self-guiding misses most of the context.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Non-Muslims cannot enter active mosques in Morocco (except the Hassan II Mosque in Casablanca).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>April-May and September-October are ideal for outdoor sites. Summer heat at Volubilis and kasbahs reaches 45 C.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Carry cash for entry fees. Most historical sites do not accept cards. ATMs are widely available in cities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Read before you go: &quot;Morocco: From Empire to Independence&quot; by C.R. Pennell is the best single-volume history.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How old is Morocco as a country?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco was founded as a unified Islamic state in 789 AD by Idris I, making it one of the oldest
                kingdoms in the world. Human habitation goes back much further -- the Jebel Irhoud fossils are
                approximately 300,000 years old, the oldest known Homo sapiens remains on Earth. The modern
                kingdom gained independence from France on March 2, 1956.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the major dynasties of Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Seven major dynasties ruled Morocco: the Idrisids (789-974), Almoravids (1040-1147),
                Almohads (1121-1269), Marinids (1244-1465), Wattasids (1472-1554), Saadians (1549-1659),
                and the Alaouites (1631-present). The Almoravids and Almohads were Berber dynasties that built
                empires stretching from the Sahara to Spain.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can you visit Roman ruins in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Volubilis, near Meknes, is a UNESCO World Heritage Site with intact mosaics, a triumphal arch,
                basilica, and olive presses. Entry costs from 70 MAD. Other Roman sites include Lixus (near Larache),
                Banasa (near Kenitra), and Sala Colonia within the Chellah necropolis in Rabat.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What was the Green March of 1975?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                King Hassan II organized 350,000 unarmed Moroccan civilians to march into the Spanish-controlled
                Western Sahara on November 6, 1975. This peaceful mass mobilization pressured Spain to sign the
                Madrid Accords on November 14, ceding the territory. The Green March is one of Morocco&apos;s most
                important national holidays, celebrated every November 6.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Who were the Berbers in ancient Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Berbers, or Amazigh (&quot;free people&quot;), are the indigenous inhabitants of North Africa. They
                established the Kingdom of Mauretania by the 3rd century BC. Berber leaders like Jugurtha waged
                war against Rome, and Berber dynasties -- the Almoravids and Almohads -- built empires spanning
                from Spain to Senegal. Today, 40-50% of Morocco&apos;s population identifies as Amazigh.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How long did France control Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                France established its protectorate on March 30, 1912, through the Treaty of Fes. Spain simultaneously
                controlled a northern zone and the Ifni enclave. French rule lasted 44 years, ending when Morocco
                declared independence on March 2, 1956. The French period left a permanent imprint through urban
                planning, road networks, and the French language, which remains widely spoken.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best historical sites to visit in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Top picks: Volubilis (Roman ruins), Fes el-Bali (oldest functioning medina, founded 808 AD), Ait
                Benhaddou (UNESCO kasbah), the Koutoubia Mosque in Marrakech (1147), the Hassan Tower in Rabat
                (1195), the Chellah necropolis in Rabat (Phoenician-Roman-Marinid layers), and the Saadian Tombs
                in Marrakech (1578-1603). Allow at least a week to cover the major sites.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What happened during Morocco&apos;s independence movement?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Istiqlal Party issued its Independence Manifesto on January 11, 1944. Tensions escalated when
                France exiled Sultan Mohammed V to Madagascar in August 1953. This unified Moroccans across class
                and tribal lines. Armed resistance, international pressure, and France&apos;s draining Algerian War
                forced negotiations. Mohammed V returned on November 16, 1955, and Morocco declared independence
                on March 2, 1956.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The indigenous Amazigh people who founded dynasties, built kasbahs, and shaped Moroccan identity.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Customs, etiquette, social norms, and cultural insights for a deeper understanding of Moroccan life.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the world&apos;s oldest functioning medina, founded in 808 AD. Madrasas, tanneries, and souks.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Almoravid capital founded in 1062. Koutoubia, Saadian Tombs, Bahia Palace, and Jemaa el-Fna.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Walk Through 12,000 Years of History
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Roman mosaics, Almohad minarets, Marinid madrasas, Saadian tombs. Morocco&apos;s past is not behind
            glass in a museum -- it surrounds you in every city and every landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Building className="w-5 h-5" />
              Explore Fes
            </Link>
            <Link
              href="/morocco-berber-culture"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Discover Berber Heritage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

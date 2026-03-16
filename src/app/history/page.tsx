import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Clock,
  MapPin,
  Landmark,
  Crown,
  Swords,
  BookOpen,
  Building2,
  Flag,
  Globe,
  TrendingUp,
  ArrowRight,
  Map,
  Scroll,
  Shield,
  Star,
  Users,
  Mountain,
  Compass,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'History of Morocco | From Prehistoric Times to the Modern Kingdom | CityGuide',
  description:
    'Explore the rich history of Morocco from prehistoric cave paintings to the modern kingdom. Discover the Phoenician, Roman, Islamic, and colonial eras, along with key historical sites to visit.',
  keywords: [
    'Morocco history',
    'Moroccan dynasties',
    'Volubilis',
    'Almoravid',
    'Almohad',
    'Marinid',
    'Saadian',
    'Alaouite',
    'French Protectorate Morocco',
    'Moroccan independence',
    'Hassan II',
    'Mohammed VI',
    'Idrisid dynasty',
    'Marrakech history',
    'Fes history',
    'Berber kingdoms',
    'Phoenician Morocco',
    'Roman Morocco',
    'Islamic conquest Morocco',
    'Morocco timeline',
  ],
  openGraph: {
    title: 'History of Morocco - CityGuide',
    description:
      'A journey through Morocco\'s history, from Stone Age cave paintings to the vibrant modern kingdom.',
    url: 'https://citytoursmorocco.com/history',
    images: [
      {
        url: '/images/hero-kasbahs.webp',
        width: 1200,
        height: 630,
        alt: 'Ancient Roman ruins of Volubilis in Morocco with columns and arches',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/history' },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/history',
  name: 'History of Morocco',
  description:
    'Comprehensive guide to Moroccan history covering prehistoric times, Phoenician and Roman periods, Islamic dynasties, colonial era, and modern Morocco.',
  url: 'https://citytoursmorocco.com/history',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'History', item: 'https://citytoursmorocco.com/history' },
    ],
  },
};

/* ================================================================
   TIMELINE DATA
   ================================================================ */

const timelinePeriods = [
  {
    id: 'prehistoric',
    title: 'Prehistoric Morocco',
    dateRange: '700,000 BCE - 1,100 BCE',
    icon: Clock,
    color: '#8B7355',
    image: '/images/hero-kasbahs.webp',
    description: [
      'Morocco is one of the oldest inhabited territories on Earth. Archaeological evidence reveals that early hominids, including Homo erectus, roamed the region over 700,000 years ago. In 2017, the discovery of 300,000-year-old Homo sapiens fossils at Jebel Irhoud, near Safi, rewrote the story of human evolution, pushing back the origin of our species by 100,000 years and placing Morocco at the very cradle of humanity.',
      'The prehistoric inhabitants left a remarkable artistic legacy. Rock engravings and cave paintings in the High Atlas, the Anti-Atlas, and the Draa Valley depict animals, hunting scenes, and geometric symbols dating back thousands of years. The Tazina style of rock art, found across southern Morocco, features elegant, stylized animal figures that rank among the finest prehistoric art in Africa.',
      'By the Neolithic period, Morocco&apos;s early inhabitants had developed agriculture, domesticated animals, and began creating pottery. The stone circles and burial mounds found across the country attest to increasingly complex societies with spiritual beliefs and organized social structures. The Grotte des Pigeons at Taforalt, in the Rif Mountains, has yielded some of the oldest known jewelry in the world &mdash; perforated shell beads dating to 82,000 years ago &mdash; evidence of symbolic thinking and cultural sophistication long before the dawn of civilization.',
    ],
    keySites: ['Jebel Irhoud (near Safi)', 'Tazina rock art sites', 'Grotte des Pigeons (Taforalt)', 'High Atlas cave paintings', 'Draa Valley petroglyphs'],
    keyFacts: ['Oldest Homo sapiens fossils found here (300,000 years)', 'Oldest known jewelry: 82,000-year-old shell beads', 'Tazina rock art spans 12,000+ years'],
  },
  {
    id: 'phoenician-roman',
    title: 'Phoenician & Roman Period',
    dateRange: '1,100 BCE - 429 CE',
    icon: Landmark,
    color: '#CD853F',
    image: '/images/hero-ait-benhaddou.webp',
    description: [
      'Phoenician traders from present-day Lebanon established the first trading posts along Morocco&apos;s coast around 1,100 BCE, founding settlements at Lixus (near Larache), Tingis (Tangier), and Mogador (Essaouira). These outposts became thriving centers of Mediterranean commerce, trading in gold, ivory, and the precious purple dye extracted from murex shells that made Phoenician textiles legendary.',
      'After the fall of Carthage in 146 BCE, Rome gradually extended its influence over northern Morocco, incorporating the region into the province of Mauretania Tingitana. The Romans built cities, roads, aqueducts, and monumental public buildings. Volubilis, near Meknes, became the provincial capital and one of the most important Roman cities in Africa, with grand basilicas, triumphal arches, and exquisite mosaic floors that survive to this day.',
      'The Berber kingdoms, however, maintained considerable autonomy even under Roman rule. King Juba II, a Berber ruler educated in Rome, governed Mauretania as a client king and transformed his court into a center of Greco-Roman learning. The interplay between Roman imperial ambitions and indigenous Berber resilience set a pattern that would repeat throughout Moroccan history. When the Vandals swept through North Africa in 429 CE, Roman authority collapsed, but the cultural and architectural legacy of antiquity endured in Morocco&apos;s ruins and in the memory of a province that once fed the Roman Empire&apos;s appetite for grain, olive oil, and wild animals for the arena.',
    ],
    keySites: ['Volubilis (UNESCO World Heritage Site)', 'Lixus (near Larache)', 'Banasa (Kenitra region)', 'Chellah necropolis (Rabat)', 'Mogador island (Essaouira)', 'Sala Colonia (Rabat)'],
    keyFacts: ['Volubilis: largest Roman ruins in Morocco', 'Juba II married Cleopatra Selene, daughter of Cleopatra VII', 'Mauretania Tingitana exported wild lions for Roman games'],
  },
  {
    id: 'islamic-conquest',
    title: 'Islamic Conquest & the Idrisid Dynasty',
    dateRange: '7th - 10th Century',
    icon: BookOpen,
    color: '#2E8B57',
    image: '/images/hero-souk-lamps.webp',
    description: [
      'The arrival of Islam in the 7th century transformed Morocco forever. Arab armies under Uqba ibn Nafi reached Morocco&apos;s Atlantic coast in 683 CE, bringing with them a new faith, language, and way of life. While the initial Arab conquest met fierce resistance from Berber leaders &mdash; most famously the legendary queen Kahina &mdash; Islam gradually took root and became inseparable from Moroccan identity.',
      'The founding of the Idrisid dynasty in 789 CE by Idris I, a descendant of the Prophet Muhammad who fled political persecution in the Arabian Peninsula, marks the beginning of Morocco as a distinct nation. His son, Idris II, founded the city of Fes in 809 CE, which rapidly became one of the most important intellectual and spiritual centers of the Islamic world. The establishment of the University of al-Qarawiyyin in Fes in 859 CE &mdash; recognized by UNESCO and the Guinness World Records as the oldest existing, continually operating university in the world &mdash; cemented Morocco&apos;s place as a beacon of learning.',
      'This period also saw the development of a uniquely Moroccan form of Islam that blended orthodox Sunni practice with Sufi mysticism and pre-Islamic Berber traditions, creating the rich spiritual tapestry that characterizes Moroccan religious life to this day. The Idrisid period established Fes as Morocco&apos;s intellectual capital, a status the city has never relinquished. The intricate water-clock mechanism of the al-Qarawiyyin mosque, the sprawling tanneries, and the labyrinthine medina streets all trace their origins to this foundational era.',
    ],
    keySites: ['Al-Qarawiyyin University & Mosque (Fes)', 'Idris I Mausoleum (Moulay Idriss Zerhoun)', 'Fes Medina (UNESCO World Heritage Site)', 'Moulay Idriss Zerhoun town'],
    keyFacts: ['Al-Qarawiyyin: world\'s oldest operating university (859 CE)', 'Fes founded in 809 CE by Idris II', 'Queen Kahina led Berber resistance for years'],
  },
  {
    id: 'almoravid-almohad',
    title: 'Almoravid & Almohad Empires',
    dateRange: '11th - 13th Century',
    icon: Swords,
    color: '#B22222',
    image: '/images/hero-marrakech-koutoubia.webp',
    description: [
      'The Almoravids, a Berber dynasty from the Sahara driven by religious reform and military prowess, founded Marrakech in 1070 CE and rapidly built an empire stretching from Senegal to central Spain. Under leaders like Yusuf ibn Tashfin, the Almoravids unified Morocco, revived Andalusian Islam, and established Marrakech as a dazzling capital of art, architecture, and commerce. The Koubba Almoravid in Marrakech, the only surviving Almoravid structure in the city, gives a glimpse of their refined architectural style.',
      'The Almohads, another Berber movement founded by the religious reformer Ibn Tumart in the High Atlas Mountains, overthrew the Almoravids in the mid-12th century. The Almohad Empire became one of the largest in the medieval world, stretching from Libya to the Iberian Peninsula. Their architectural legacy is monumental: the Koutoubia Mosque in Marrakech, the Hassan Tower in Rabat, and the Giralda in Seville were all built to the same grand design, symbolizing the unity of the empire.',
      'This was Morocco&apos;s golden age of architecture, scholarship, and cultural influence. The great philosopher Ibn Rushd (Averroes) and the legendary traveler Ibn Battuta were products of this remarkable era. The Almohad period established the architectural vocabulary &mdash; horseshoe arches, ornate stucco, geometric zellige &mdash; that defines Moroccan style to this day.',
      'The Battle of Alarcos (1195) was the Almohads&apos; greatest military triumph, shattering the Castilian army and establishing Almohad dominance over Islamic Iberia. Yet the dynasty&apos;s decline came swiftly after the catastrophic defeat at Las Navas de Tolosa in 1212, which opened Andalusia to the Christian reconquista and fragmented the Almohad Empire into competing successor states.',
    ],
    keySites: ['Koutoubia Mosque (Marrakech)', 'Hassan Tower (Rabat)', 'Koubba Almoravid (Marrakech)', 'Tin Mal Mosque (High Atlas)', 'Kasbah Mosque (Marrakech)', 'Rabat city walls'],
    keyFacts: ['Empire stretched from Senegal to Spain', 'Koutoubia, Hassan Tower, and Giralda share one architect', 'Ibn Rushd (Averroes) shaped European philosophy'],
  },
  {
    id: 'marinid',
    title: 'Marinid Dynasty',
    dateRange: '13th - 15th Century',
    icon: Crown,
    color: '#4169E1',
    image: '/images/detail-zellige-mosaic.webp',
    description: [
      'The Marinid dynasty, a Zenata Berber clan from eastern Morocco, rose to power in the 13th century and chose Fes as their capital, ushering in a golden age for the city. Unable to match the Almohads&apos; vast empire, the Marinids channeled their energy into architectural patronage and religious scholarship, leaving behind some of Morocco&apos;s most exquisite buildings.',
      'The Marinid madrasas of Fes are masterpieces of Islamic architecture. The Bou Inania Madrasa and the Attarine Madrasa feature breathtaking combinations of carved stucco, cedarwood, zellige tilework, and marble that represent the absolute zenith of Moroccan decorative arts. These theological colleges attracted scholars from across the Islamic world, solidifying Fes as a center of learning rivaling Cairo and Baghdad.',
      'The Marinid period also saw the construction of the Chellah necropolis in Rabat, a hauntingly beautiful complex of tombs and ruins set within garden walls. As the dynasty weakened, Morocco entered a period of fragmentation, with Portuguese and Spanish forces seizing coastal cities including Ceuta (1415), Tangier (1471), and other ports, setting the stage for the next chapter in Moroccan history.',
      'The Marinids also established Fes el-Jdid (New Fes) as a royal quarter in 1276, complete with a grand palace, a new mosque, and the Mellah &mdash; one of the first Jewish quarters in Morocco. This period saw the flourishing of Judeo-Moroccan culture and the development of the distinctive Fassi craftsmanship traditions that survive today in the metalwork, leather, and textile workshops of the medina.',
    ],
    keySites: ['Bou Inania Madrasa (Fes)', 'Attarine Madrasa (Fes)', 'Chellah Necropolis (Rabat)', 'Marinid Tombs (Fes)', 'Fes el-Jdid (New Fes)', 'Seffarine Madrasa (Fes)'],
    keyFacts: ['Bou Inania Madrasa is the zenith of Moroccan decorative arts', 'Fes el-Jdid built in 1276 as royal quarter', 'Chellah blends Roman and Islamic ruins in one site'],
  },
  {
    id: 'wattasid',
    title: 'Wattasid Period & Portuguese Incursions',
    dateRange: '15th - 16th Century',
    icon: Shield,
    color: '#556B2F',
    image: '/images/detail-zellige-mosaic.webp',
    description: [
      'The Wattasid dynasty, a branch of the Marinid family, took power in 1472 but presided over a weakened and fragmented Morocco. The Portuguese had established a string of fortified trading posts along the Atlantic coast &mdash; Ceuta (1415), Ksar es-Seghir (1458), Arzila (1471), Tangier (1471), and Agadir (1505) &mdash; while Spain occupied Melilla (1497) and other northern enclaves. For the first time in centuries, foreign powers controlled significant portions of Moroccan territory.',
      'This era of foreign occupation deeply scarred the national psyche and became a rallying point for religious and political resistance. Sufi brotherhoods and local marabouts (holy men) emerged as centers of opposition, mobilizing the population with the dual call of Islam and patriotism. The Battle of the Three Kings at Ksar el-Kebir in 1578 &mdash; one of the most consequential battles in world history &mdash; saw the death of the Portuguese king Sebastian I and effectively ended Portuguese ambitions in Morocco.',
      'The Portuguese fortifications that survive at El Jadida (a UNESCO World Heritage Site), Essaouira, and Safi are among the most striking colonial-era monuments in Morocco. The massive cistern at El Jadida, with its vaulted Gothic ceiling reflected in shallow water, has become one of the most photographed historical sites in the country. These fortresses tell the story of a turbulent era when Morocco fought to preserve its sovereignty against European expansion.',
    ],
    keySites: ['Portuguese Cistern (El Jadida)', 'Portuguese ramparts (Essaouira)', 'Portuguese fortress (Safi)', 'Ksar es-Seghir ruins', 'Ceuta fortifications'],
    keyFacts: ['Battle of Three Kings (1578) killed three monarchs', 'El Jadida cistern is a UNESCO World Heritage Site', 'Portugal held Ceuta from 1415 to 1668'],
  },
  {
    id: 'saadian',
    title: 'Saadian Dynasty',
    dateRange: '16th - 17th Century',
    icon: Crown,
    color: '#DAA520',
    image: '/images/hero-hassan-mosque.webp',
    description: [
      'The Saadian dynasty emerged from the Draa Valley in the 16th century, rallying Moroccans against the Portuguese occupation of coastal cities. By unifying the country and driving out the European powers, the Saadians restored Moroccan sovereignty and chose Marrakech as their capital, inaugurating a second golden age for the Red City.',
      'The Saadian sultan Ahmad al-Mansur, whose epithet "the Golden" reflected the staggering wealth that flowed from his conquest of the Songhai Empire and control of the trans-Saharan gold trade, transformed Marrakech into one of the most opulent courts in the world. The El Badi Palace, now a romantic ruin but once rivaling the Alhambra in splendor, was built with Italian marble, Sudanese gold, and Irish granite. The exquisite Saadian Tombs, rediscovered in 1917 after being sealed for centuries, remain one of Marrakech&apos;s most visited monuments.',
      'The Saadians also forged surprising diplomatic connections, exchanging ambassadors with Queen Elizabeth I of England and even proposing a joint military alliance against Spain. This period demonstrated Morocco&apos;s status as a significant player in global geopolitics, a role it would continue to pursue under the next dynasty.',
      'Ahmad al-Mansur&apos;s conquest of the Songhai Empire in 1591 &mdash; sending an army of 4,000 men across the Sahara Desert to capture Timbuktu &mdash; was one of the most audacious military expeditions in African history. The gold, salt, and slaves that flowed north from this conquest funded the architectural magnificence that still dazzles visitors to Marrakech today.',
    ],
    keySites: ['Saadian Tombs (Marrakech)', 'El Badi Palace (Marrakech)', 'Draa Valley kasbahs', 'Ben Youssef Madrasa (Marrakech)', 'Agdal Gardens (Marrakech)'],
    keyFacts: ['Ahmad al-Mansur conquered Timbuktu in 1591', 'El Badi Palace used Italian marble and Sudanese gold', 'Saadian Tombs hidden for 200+ years before rediscovery'],
  },
  {
    id: 'alaouite',
    title: 'Alaouite Dynasty',
    dateRange: '17th Century - Present',
    icon: Crown,
    color: '#8B0000',
    image: '/images/hero-essaouira-ramparts.webp',
    description: [
      'The Alaouite dynasty, which claims descent from the Prophet Muhammad through his grandson Hassan, rose to power in the 17th century from the Tafilalet oasis in southeastern Morocco. They have ruled the country ever since, making them one of the longest-reigning dynasties in the world. The current monarch, King Mohammed VI, is the 23rd Alaouite ruler.',
      'The most formidable early Alaouite sultan was Moulay Ismail (1672-1727), who built the imperial city of Meknes as his capital with a ruthless ambition often compared to Louis XIV of France. Moulay Ismail constructed massive palaces, granaries, stables for 12,000 horses, and formidable walls that still stand today. He unified Morocco, expelled the Europeans from most coastal cities, and maintained the largest standing army in Moroccan history &mdash; an elite force of 150,000 soldiers known as the Black Guard.',
      'Subsequent Alaouite sultans continued to develop Morocco&apos;s imperial cities. Mohammed III built the port city of Essaouira and established diplomatic relations with the newly independent United States &mdash; Morocco was the first country to recognize American independence in 1786. The Royal Palace in Rabat, the Hassan II Mosque in Casablanca, and the mausoleum of Mohammed V in Rabat are among the most significant Alaouite-era monuments.',
      'Sultan Mohammed ben Abdallah (Mohammed III) also built the Mellah of Essaouira and invited Jewish merchants to settle there, establishing the city as a cosmopolitan trading hub. His diplomatic vision positioned Morocco as a bridge between Africa, Europe, and the Americas &mdash; a role the kingdom has maintained across the centuries.',
    ],
    keySites: ['Meknes Imperial City', 'Royal Granaries & Stables (Meknes)', 'Moulay Ismail Mausoleum (Meknes)', 'Essaouira Medina', 'Bab Mansour (Meknes)', 'Dar el-Makhzen (Fes)'],
    keyFacts: ['Morocco was first nation to recognize US independence (1786)', 'Moulay Ismail maintained 150,000-strong Black Guard', 'Alaouite dynasty has ruled since 1631'],
  },
  {
    id: 'protectorate',
    title: 'French & Spanish Protectorate',
    dateRange: '1912 - 1956',
    icon: Building2,
    color: '#4682B4',
    image: '/images/hero-morocco.webp',
    description: [
      'The Treaty of Fes in 1912 divided Morocco between French and Spanish protectorates, ending centuries of full sovereignty. France controlled the majority of the country from Rabat, while Spain administered the northern Rif region and the southern Saharan zones. The sultan remained as a figurehead, but real power lay with the French Resident-General, most notably Marshal Lyautey, who pursued a policy of preserving Morocco&apos;s traditional cities while building modern European-style villes nouvelles alongside them.',
      'The colonial period transformed Morocco&apos;s urban landscape. Casablanca mushroomed from a small port town into a major metropolis, its skyline defined by Art Deco masterpieces designed by architects like Henri Prost and Marius Boyer. Rabat was developed as the administrative capital with grand boulevards and government buildings. Modern infrastructure &mdash; railways, ports, hospitals, and schools &mdash; was built, though primarily to serve colonial economic interests.',
      'Moroccan resistance to colonial rule was fierce and continuous. The Rif War (1921-1926), led by the legendary Abd el-Krim, saw Berber fighters inflict stunning defeats on Spanish forces before being overwhelmed by a combined Franco-Spanish army. The nationalist movement grew throughout the 1930s and 1940s, gaining momentum after Sultan Mohammed V was exiled by the French in 1953, an act that united the entire nation in the struggle for independence.',
      'The colonial architectural legacy is most visible in Casablanca, where an extraordinary concentration of Art Deco, Streamline Moderne, and Neo-Moorish buildings creates one of the most important early 20th-century cityscapes in the world. The city&apos;s Habous Quarter, built by the French in a traditional Moroccan style, represents an unusual experiment in "sympathetic" colonial urbanism. Lyautey&apos;s dual-city approach &mdash; preserving the old medinas while building new European quarters &mdash; inadvertently saved Morocco&apos;s historic centers for posterity.',
    ],
    keySites: ['Art Deco Casablanca (guided walks)', 'Ville Nouvelle districts (Rabat, Fes, Marrakech)', 'Rif region (Al Hoceima)', 'Rabat administrative quarter', 'Habous Quarter (Casablanca)', 'Tetouan Spanish quarter'],
    keyFacts: ['Abd el-Krim defeated the Spanish at Annual (1921)', 'Casablanca grew from 20,000 to 1 million under French rule', 'Mohammed V exiled in 1953, returned as national hero'],
  },
  {
    id: 'independence',
    title: 'Independence & Modern Morocco',
    dateRange: '1956 - 1999',
    icon: Flag,
    color: '#228B22',
    image: '/images/hero-morocco.webp',
    description: [
      'Morocco regained its independence on March 2, 1956, and Sultan Mohammed V returned from exile to a hero&apos;s welcome, becoming the symbol of the new nation. He took the title of King in 1957 and began the process of building a modern state while preserving Morocco&apos;s rich cultural heritage. His untimely death in 1961 passed the crown to his son, Hassan II.',
      'King Hassan II ruled Morocco for 38 years (1961-1999), a complex era of nation-building, political repression, and economic development. His greatest achievement was the construction of the Hassan II Mosque in Casablanca (completed 1993), the largest mosque in Africa and one of the few open to non-Muslim visitors, featuring a retractable roof and a laser beam pointing toward Mecca. The "Green March" of 1975, when 350,000 unarmed Moroccans marched into the Spanish-controlled Western Sahara, was another defining moment of his reign.',
      'The later years of Hassan II&apos;s rule saw gradual political liberalization, economic reforms, and the beginning of Morocco&apos;s transformation into a tourism destination. The king also played a significant role as a mediator in Middle Eastern peace negotiations, leveraging Morocco&apos;s unique position as an Arab and African nation with deep ties to both the Islamic world and the West.',
      'The "Years of Lead" (les annees de plomb), a period of political repression from the 1960s through the 1980s, left deep scars that Morocco later addressed through the landmark Equity and Reconciliation Commission. The Tazmamart prison in the Atlas Mountains, where political prisoners were held in horrific conditions, became a symbol of this dark chapter. Morocco&apos;s willingness to confront this history has been praised as a model for transitional justice in the Arab world.',
    ],
    keySites: ['Mohammed V Mausoleum (Rabat)', 'Hassan II Mosque (Casablanca)', 'Royal Palace (Rabat)', 'Independence monument sites', 'Parliament building (Rabat)'],
    keyFacts: ['Independence: March 2, 1956', 'Hassan II Mosque: tallest religious structure in Africa (210m minaret)', 'Green March: 350,000 civilians marched into Western Sahara'],
  },
  {
    id: 'modern',
    title: 'Morocco Today',
    dateRange: '1999 - Present',
    icon: TrendingUp,
    color: '#C4960C',
    image: '/images/hero-essaouira-ramparts.webp',
    description: [
      'Since ascending the throne in 1999, King Mohammed VI has pursued an ambitious agenda of modernization, social reform, and economic development that has transformed Morocco into one of Africa&apos;s most dynamic nations. The new family code (Moudawana) of 2004 significantly expanded women&apos;s rights, while the Truth and Reconciliation Commission addressed human rights abuses of the past. Major infrastructure projects &mdash; the Tanger-Med port, the Al Boraq high-speed rail line, and vast solar energy plants &mdash; have positioned Morocco as a regional leader.',
      'Tourism has become a cornerstone of Morocco&apos;s economy, with the country welcoming over 14 million visitors annually before the global pandemic. The "Vision 2030" tourism strategy aims to make Morocco one of the world&apos;s top 20 tourism destinations, with investments in infrastructure, cultural heritage preservation, and sustainable tourism. Morocco&apos;s successful bid to co-host the 2030 FIFA World Cup alongside Spain and Portugal promises to further accelerate this trajectory.',
      'Modern Morocco is a country of dynamic contrasts: ancient medinas pulse alongside contemporary art galleries, traditional souks thrive beside modern shopping malls, and Berber villages perched in the Atlas Mountains are connected to cosmopolitan cities by new highways. This ability to honor the past while embracing the future is perhaps the defining characteristic of Morocco today &mdash; and the reason it captivates visitors from around the world.',
      'The Noor-Ouarzazate Solar Complex, one of the largest concentrated solar power plants on Earth, and the Tanger-Med Port, the largest port in Africa and the Mediterranean, symbolize Morocco&apos;s leap into the 21st century. Meanwhile, the renovation of historic sites like the Chellah in Rabat, the restoration of Fes el-Bali, and the creation of world-class museums like the Mohammed VI Museum of Modern and Contemporary Art demonstrate that modernization and heritage preservation go hand in hand.',
    ],
    keySites: ['Mohammed VI Museum of Modern Art (Rabat)', 'Tanger-Med Port area', 'Noor Solar Complex (Ouarzazate)', 'Al Boraq high-speed rail (Tangier-Casablanca)', 'MACAAL (Marrakech)', 'Yves Saint Laurent Museum (Marrakech)'],
    keyFacts: ['Al Boraq: Africa\'s first high-speed rail (320 km/h)', 'Noor Solar Complex: one of world\'s largest (580 MW)', '2030 FIFA World Cup co-host with Spain & Portugal'],
  },
];

/* ================================================================
   HISTORY BY CITY DATA
   ================================================================ */

const historyByCities = [
  {
    city: 'Fes',
    era: 'Idrisid / Marinid',
    founded: '809 CE',
    famousFor: 'World\'s oldest university, medieval madrasas, and the largest car-free urban area on Earth',
    image: '/images/hero-fes.webp',
    highlights: ['Al-Qarawiyyin University (859 CE)', 'Bou Inania Madrasa', 'Chouara Tanneries', 'Fes el-Bali Medina'],
  },
  {
    city: 'Marrakech',
    era: 'Almoravid / Saadian',
    founded: '1070 CE',
    famousFor: 'Imperial capital of empires, the Red City of merchants, scholars, and sultans',
    image: '/images/hero-marrakech.webp',
    highlights: ['Koutoubia Mosque (1162)', 'Saadian Tombs', 'El Badi Palace ruins', 'Jemaa el-Fna square'],
  },
  {
    city: 'Meknes',
    era: 'Alaouite',
    founded: '11th century',
    famousFor: 'Moulay Ismail\'s imperial capital, the "Versailles of Morocco"',
    image: '/images/hero-essaouira-ramparts.webp',
    highlights: ['Bab Mansour gate', 'Royal Granaries', 'Moulay Ismail Mausoleum', 'Heri es-Souani'],
  },
  {
    city: 'Rabat',
    era: 'Almohad / Modern',
    founded: '12th century',
    famousFor: 'Almohad fortress-city turned modern capital, blending medieval walls with Art Deco',
    image: '/images/hero-morocco.webp',
    highlights: ['Hassan Tower (1195)', 'Chellah Necropolis', 'Mohammed V Mausoleum', 'Kasbah of the Udayas'],
  },
  {
    city: 'Casablanca',
    era: 'Protectorate / Modern',
    founded: 'Ancient (modern city from 1907)',
    famousFor: 'Art Deco metropolis, economic capital, and home to Africa\'s tallest religious structure',
    image: '/images/hero-hassan-mosque.webp',
    highlights: ['Hassan II Mosque', 'Art Deco downtown', 'Habous Quarter', 'Rick\'s Cafe'],
  },
  {
    city: 'Tangier',
    era: 'Phoenician / International',
    founded: 'c. 1,100 BCE (as Tingis)',
    famousFor: 'Gateway between Africa and Europe, international zone (1923-1956), literary bohemia',
    image: '/images/hero-essaouira.webp',
    highlights: ['Kasbah Museum', 'Cap Spartel', 'Caves of Hercules', 'Grand Socco'],
  },
  {
    city: 'Essaouira',
    era: 'Alaouite / Portuguese',
    founded: '18th century (modern city)',
    famousFor: 'Wind-swept fortified port designed by a French architect for a Moroccan sultan',
    image: '/images/hero-essaouira.webp',
    highlights: ['Skala de la Ville', 'Portuguese ramparts', 'Mellah quarter', 'Mogador island'],
  },
  {
    city: 'Volubilis',
    era: 'Roman',
    founded: '3rd century BCE',
    famousFor: 'Best-preserved Roman ruins in North Africa, with stunning mosaics and triumphal arch',
    image: '/images/hero-ait-benhaddou.webp',
    highlights: ['Triumphal Arch of Caracalla', 'House of Orpheus mosaics', 'Capitol temple', 'Basilica'],
  },
];

/* ================================================================
   EMPIRE MAP DATA
   ================================================================ */

const empireExtents = [
  {
    dynasty: 'Almoravid Empire',
    period: '1040 - 1147',
    territory: 'From Senegal and Ghana in the south to central Spain (Al-Andalus) in the north. Included modern Morocco, Western Sahara, Mauritania, and parts of Algeria.',
    capital: 'Marrakech',
    peakRuler: 'Yusuf ibn Tashfin',
    color: '#B22222',
  },
  {
    dynasty: 'Almohad Empire',
    period: '1121 - 1269',
    territory: 'The largest Moroccan empire. From Libya in the east to the Atlantic, and from the Sahel to central Iberia. Included all of modern Morocco, Algeria, Tunisia, Libya, and Muslim Spain.',
    capital: 'Marrakech',
    peakRuler: 'Abu Yusuf Yaqub al-Mansur',
    color: '#DAA520',
  },
  {
    dynasty: 'Marinid Sultanate',
    period: '1244 - 1465',
    territory: 'Primarily Morocco and parts of western Algeria. Brief control of Tlemcen. Attempted invasions of Iberia largely failed.',
    capital: 'Fes',
    peakRuler: 'Abu al-Hasan Ali',
    color: '#4169E1',
  },
  {
    dynasty: 'Saadian Dynasty',
    period: '1549 - 1659',
    territory: 'Morocco plus the conquered Songhai Empire (modern Mali, Niger, parts of Nigeria). Controlled trans-Saharan gold and salt trade.',
    capital: 'Marrakech',
    peakRuler: 'Ahmad al-Mansur',
    color: '#228B22',
  },
];

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function HistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-kasbahs.webp"
            alt="Ancient Roman ruins of Volubilis in Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">History</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Through the Ages
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              History of Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the earliest human fossils ever discovered to a modern kingdom at the crossroads of Africa and
              Europe &mdash; explore 700,000 years of Moroccan history.
            </p>
          </div>

          {/* Quick-jump era links */}
          <div className="mt-10 flex flex-wrap gap-2">
            {timelinePeriods.map((period) => (
              <a
                key={period.id}
                href={`#${period.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium hover:bg-white/20 transition-colors"
              >
                <period.icon className="w-3 h-3" />
                {period.title.length > 25 ? period.title.split('&')[0].trim() : period.title}
              </a>
            ))}
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* -- Visual Timeline Navigation -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Scroll className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Timeline at a Glance
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Twelve defining periods that shaped the Morocco we know today.
            </p>
          </div>

          {/* CSS-based interactive timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B7355] via-[#B22222] via-[#DAA520] to-[#C4960C] md:-translate-x-px" />

            <div className="space-y-8">
              {timelinePeriods.map((period, index) => {
                const isEven = index % 2 === 0;
                return (
                  <a
                    key={period.id}
                    href={`#${period.id}`}
                    className="group relative flex items-center gap-4 md:gap-0"
                  >
                    {/* Dot on the line */}
                    <div
                      className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 -translate-x-1/2 group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: period.color }}
                    />

                    {/* Content card */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isEven ? 'md:mr-auto md:pr-4 md:text-right' : 'md:ml-auto md:pl-4'
                      }`}
                    >
                      <div className="p-4 rounded-xl bg-white border border-[var(--border-light)] shadow-sm group-hover:shadow-md group-hover:border-[var(--color-primary)]/30 transition-all">
                        <div className={`flex items-center gap-2 mb-1 ${isEven ? 'md:justify-end' : ''}`}>
                          <span
                            className="text-xs font-bold uppercase tracking-wider"
                            style={{ color: period.color }}
                          >
                            {period.dateRange}
                          </span>
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-[var(--text-primary)]">
                          {period.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -- Detailed Timeline -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Clock className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              A Journey Through Time
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From prehistoric cave dwellers to a modern nation preparing to host the 2030 World Cup &mdash; the full story of Morocco in twelve chapters.
            </p>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 max-w-5xl mx-auto">
            {timelinePeriods.map((period, index) => (
              <article
                key={period.id}
                id={period.id}
                className="scroll-mt-24"
              >
                {/* Period Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                    style={{ backgroundColor: `${period.color}15` }}
                  >
                    <period.icon className="w-6 h-6" style={{ color: period.color }} />
                  </div>
                  <div>
                    <span
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: period.color }}
                    >
                      {period.dateRange}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {period.title}
                    </h3>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                    <img
                      src={period.image}
                      alt={period.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-[15px]">
                      {period.description.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Key Facts */}
                    {period.keyFacts && (
                      <div className="mt-5 p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
                        <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-2">
                          <Star className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          Key Facts
                        </h4>
                        <ul className="space-y-1">
                          {period.keyFacts.map((fact) => (
                            <li key={fact} className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                              {fact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Sites */}
                    <div className="mt-6 pt-6 border-t border-[var(--border-light)]">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                        Key Sites to Visit
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {period.keySites.map((site) => (
                          <span
                            key={site}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                          >
                            {site}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < timelinePeriods.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-px h-12 bg-gradient-to-b from-[var(--color-primary)]/20 to-transparent" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -- History by City -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              History by City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each Moroccan city tells a different chapter of the nation&apos;s story. Discover which era defines each destination and what historical treasures await.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyByCities.map((item) => (
              <div key={item.city} className="card-moroccan overflow-hidden group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Historic ${item.city}, Morocco`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[var(--color-primary)]">
                      {item.era}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white">
                      Founded {item.founded}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {item.city}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {item.famousFor}
                  </p>
                  <div className="space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <Landmark className="w-3 h-3 text-[var(--color-primary)] shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Map of Historical Empires -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Great Empires
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              At their peak, Moroccan dynasties controlled territories stretching from sub-Saharan Africa to the Iberian Peninsula. These empires shaped the history of three continents.
            </p>
          </div>

          <div className="space-y-6">
            {empireExtents.map((empire) => (
              <div key={empire.dynasty} className="card-featured p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${empire.color}15` }}
                  >
                    <Crown className="w-6 h-6" style={{ color: empire.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{empire.dynasty}</h3>
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: `${empire.color}15`, color: empire.color }}
                      >
                        <Clock className="w-3 h-3" /> {empire.period}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                      {empire.territory}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <Building2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        Capital: <strong className="text-[var(--text-primary)]">{empire.capital}</strong>
                      </span>
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <Crown className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        Peak ruler: <strong className="text-[var(--text-primary)]">{empire.peakRuler}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Key Dynasties Comparison -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Dynasties at a Glance
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A quick comparison of Morocco&apos;s major ruling dynasties, their capitals, and their lasting contributions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-primary)]/20">
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Dynasty</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Period</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Origin</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Capital</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Legacy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-light)]">
                {[
                  { name: 'Idrisid', period: '789 - 974', origin: 'Arab (Hejaz)', capital: 'Fes', legacy: 'Founded Fes, established al-Qarawiyyin' },
                  { name: 'Almoravid', period: '1040 - 1147', origin: 'Sanhaja Berber', capital: 'Marrakech', legacy: 'Founded Marrakech, unified Morocco & Spain' },
                  { name: 'Almohad', period: '1121 - 1269', origin: 'Masmuda Berber', capital: 'Marrakech', legacy: 'Koutoubia, Hassan Tower, largest empire' },
                  { name: 'Marinid', period: '1244 - 1465', origin: 'Zenata Berber', capital: 'Fes', legacy: 'Madrasas of Fes, Chellah necropolis' },
                  { name: 'Wattasid', period: '1472 - 1554', origin: 'Zenata Berber', capital: 'Fes', legacy: 'Resisted Portuguese incursions' },
                  { name: 'Saadian', period: '1549 - 1659', origin: 'Arab (Draa Valley)', capital: 'Marrakech', legacy: 'Saadian Tombs, conquered Timbuktu' },
                  { name: 'Alaouite', period: '1631 - present', origin: 'Arab (Tafilalet)', capital: 'Fes / Rabat', legacy: 'Meknes, Essaouira, Hassan II Mosque' },
                ].map((d) => (
                  <tr key={d.name} className="hover:bg-[var(--color-primary)]/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">{d.name}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{d.period}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{d.origin}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{d.capital}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{d.legacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -- Related Historical Sites -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Explore Historical Sites
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s history is not confined to books &mdash; it lives in the ancient medinas, imperial palaces, Roman ruins,
              and sacred monuments that you can explore firsthand across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'UNESCO World Heritage Sites',
                count: '9 sites',
                description: 'Including the medinas of Fes, Marrakech, Essaouira, Tetouan, and Meknes, the archaeological site of Volubilis, the Portuguese city of El Jadida, Rabat, and the ksar of Ait Benhaddou.',
                image: '/images/hero-essaouira.webp',
              },
              {
                title: 'Imperial Cities',
                count: '4 cities',
                description: 'Fes, Marrakech, Meknes, and Rabat &mdash; each served as Morocco&apos;s capital under different dynasties, and each preserves the monumental architecture of its golden age.',
                image: '/images/hero-marrakech.webp',
              },
              {
                title: 'Ancient Ruins',
                count: '10+ sites',
                description: 'Roman Volubilis, Phoenician Lixus, Banasa, Sala Colonia, and Chellah offer windows into Morocco&apos;s ancient past spanning over 2,000 years of pre-Islamic history.',
                image: '/images/hero-ait-benhaddou.webp',
              },
              {
                title: 'Kasbahs & Ksour',
                count: '100+ sites',
                description: 'Fortified villages and citadels along the ancient caravan routes of southern Morocco, including UNESCO-listed Ait Benhaddou and the Draa Valley kasbahs.',
                image: '/images/hero-kasbahs.webp',
              },
            ].map((card) => (
              <div key={card.title} className="card-moroccan overflow-hidden group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                      {card.count}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Landmark className="w-4 h-4" /> Browse All Attractions
            </Link>
          </div>
        </div>
      </section>

      {/* -- Historical Travel Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tips for History Travelers
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical advice for getting the most out of Morocco&apos;s historical sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Hire Local Guides',
                description: 'At complex sites like Fes el-Bali, Volubilis, and Ait Benhaddou, a knowledgeable local guide transforms a visit from sightseeing into storytelling. Licensed guides are available at every major historical site.',
                icon: Users,
              },
              {
                title: 'Visit Early or Late',
                description: 'Morocco\'s most popular historical sites can get crowded, especially during cruise ship arrivals and school holidays. Visit at opening time or in the late afternoon for the best light and fewest crowds.',
                icon: Clock,
              },
              {
                title: 'Combine Nearby Sites',
                description: 'Many historical sites are close together: Volubilis and Moulay Idriss Zerhoun make a perfect half-day. Ait Benhaddou and Atlas Studios are 30 minutes apart. Plan routes to maximize your time.',
                icon: Mountain,
              },
              {
                title: 'Respect Sacred Spaces',
                description: 'Non-Muslims cannot enter most mosques in Morocco (exceptions: Hassan II Mosque in Casablanca and the Tin Mal Mosque). Dress modestly at all religious and historical sites. Photography may be restricted at some mausoleums.',
                icon: BookOpen,
              },
              {
                title: 'Carry Cash for Entry',
                description: 'Most historical sites charge a small entry fee (10-70 MAD). Many accept only cash. The Moroccan Museum Pass offers discounts at multiple sites if you plan to visit several.',
                icon: Landmark,
              },
              {
                title: 'Read Before You Go',
                description: 'Morocco\'s history is deeply layered. Reading a general history book before your trip (try "Morocco: From Empire to Independence" by C.R. Pennell) will enormously enrich your experience at every site.',
                icon: Scroll,
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Walk Through History
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Morocco&apos;s past comes alive when you explore it in person. Plan your visit to the imperial cities,
            ancient ruins, and living heritage sites that tell the story of this remarkable nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Globe className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Historical Itineraries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

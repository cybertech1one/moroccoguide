import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  BookOpen,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Info,
  CheckCircle,
  AlertTriangle,
  Users,
  Star,
  Heart,
  ShoppingBag,
  UtensilsCrossed,
  MapPin,
  Volume2,
  Hash,
  Globe,
  Languages,
  Lightbulb,
  HandHelping,
  Phone,
  Navigation,
  Coffee,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Essential Moroccan Darija Phrases for Travelers 2026 | Arabic Dialect Guide',
  description:
    'Master 100+ essential Moroccan Darija phrases for your trip. Greetings, shopping, restaurant, directions, and emergency phrases in Moroccan Arabic. Plus Amazigh and French basics every traveler needs.',
  keywords: [
    'darija phrases',
    'Moroccan Arabic phrases',
    'moroccan language',
    'shukran bzaf',
    'useful Arabic phrases Morocco',
    'Darija for travelers',
    'Moroccan dialect',
    'learn Darija',
    'Morocco travel phrases',
    'Moroccan greetings',
    'haggling phrases Morocco',
    'Moroccan Arabic numbers',
    'Amazigh phrases',
    'Berber language Morocco',
    'French phrases Morocco',
    'Morocco language guide',
    'salam alaikum Morocco',
    'labas Morocco',
    'bshhal hada Morocco',
    'Darija pronunciation guide',
    'Moroccan Arabic vs Modern Standard Arabic',
    'Morocco communication tips',
  ],
  openGraph: {
    title: 'Essential Moroccan Darija Phrases for Travelers 2026 | Arabic Dialect Guide',
    description:
      'Master 100+ essential Moroccan Darija phrases. Greetings, shopping, food, directions, and emergency vocabulary in Moroccan Arabic, Amazigh, and French.',
    url: `${BASE_URL}/morocco-darija-phrases`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan medina with Arabic calligraphy signs and vibrant market stalls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essential Moroccan Darija Phrases 2026 | Arabic Dialect Guide',
    description:
      'Learn 100+ Darija phrases before your Morocco trip. Greetings, shopping, food, and emergency vocabulary in Moroccan Arabic with pronunciation tips.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-darija-phrases` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-darija-phrases`,
  name: 'Essential Moroccan Darija Phrases for Travelers 2026 | Arabic Dialect Guide',
  description:
    'Complete guide to essential Moroccan Darija phrases for travelers. Over 100 phrases covering greetings, shopping, food, directions, numbers, emergencies, plus Amazigh and French basics.',
  url: `${BASE_URL}/morocco-darija-phrases`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-darija-phrases`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Darija Phrases', item: `${BASE_URL}/morocco-darija-phrases` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Darija and how is it different from Modern Standard Arabic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Darija is the Moroccan dialect of Arabic spoken daily by over 30 million Moroccans. It differs significantly from Modern Standard Arabic (MSA) used in news and formal writing. Darija incorporates Amazigh (Berber), French, and Spanish vocabulary, making it largely unintelligible to speakers of Gulf or Levantine Arabic. Most Moroccans understand MSA but speak Darija in everyday life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to learn Darija before visiting Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While not strictly necessary, learning even 10-15 basic Darija phrases will significantly enhance your trip. Moroccans deeply appreciate when visitors make an effort to speak their language. Key phrases like salam (hello), shukran (thank you), and bshhal (how much) will help in markets, taxis, and restaurants. French is also widely spoken in cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is French or Darija more useful in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are useful in different contexts. In major cities like Casablanca, Rabat, and Marrakech, French is widely spoken in hotels, restaurants, and shops. In rural areas, smaller towns, and traditional souks, Darija is more practical. Learning basics of both gives you the best coverage. English is growing but still limited outside tourist areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most important Darija phrases for shopping in souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The essential souk phrases are: bshhal hada? (how much is this?), ghali bzaf (too expensive), naqas shwiya (reduce a little), and wakha (okay/agreed). Knowing numbers in Darija also helps during price negotiations. Always start by saying salam and maintain a friendly tone while haggling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you say thank you in Moroccan Arabic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thank you in Moroccan Darija is shukran. To say thank you very much, say shukran bzaf. You can also use the French merci, which is commonly understood. For an even more emphatic thanks, say Allah y-khallik (may God bless you), which is deeply appreciated by locals.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BASIC GREETINGS
   ═══════════════════════════════════════════════════════════════ */

const basicGreetings = [
  { darija: 'Salam / Salam Alaikum', pronunciation: 'sa-LAHM / sa-LAHM a-LAY-kum', english: 'Hello / Peace be upon you', note: 'The most universal greeting. Use everywhere, anytime.' },
  { darija: 'Wa Alaikum Salam', pronunciation: 'wa a-LAY-kum sa-LAHM', english: 'And peace be upon you (response)', note: 'The proper response to Salam Alaikum.' },
  { darija: 'Labas?', pronunciation: 'la-BASS', english: 'How are you? / Are you well?', note: 'Casual and friendly. Can also mean "I\'m fine" as a response.' },
  { darija: 'Labas, hamdullah', pronunciation: 'la-BASS, ham-du-LAH', english: 'I\'m fine, thanks to God', note: 'The standard response to labas. Shows gratitude.' },
  { darija: 'Sbah l-kheir', pronunciation: 'SBAH ul-KHEIR', english: 'Good morning', note: 'Use before noon. Kheir means goodness.' },
  { darija: 'Msa l-kheir', pronunciation: 'MSA ul-KHEIR', english: 'Good evening', note: 'Use from afternoon onwards.' },
  { darija: 'Bslama', pronunciation: 'b-SLA-ma', english: 'Goodbye', note: 'Literally means "with peace." Used when parting.' },
  { darija: 'Shukran', pronunciation: 'SHUK-ran', english: 'Thank you', note: 'The most essential word. Use it constantly.' },
  { darija: 'Shukran bzaf', pronunciation: 'SHUK-ran b-ZAHF', english: 'Thank you very much', note: 'Bzaf means "a lot." Shows extra appreciation.' },
  { darija: 'Afak / Min fadlak', pronunciation: 'a-FAK / min FAD-lak', english: 'Please', note: 'Afak is casual Darija, min fadlak is more formal.' },
  { darija: 'La, shukran', pronunciation: 'LA, SHUK-ran', english: 'No, thank you', note: 'Polite refusal. Essential in souks and with touts.' },
  { darija: 'Iyeh / Naam', pronunciation: 'EE-yeh / NA-am', english: 'Yes', note: 'Iyeh is Darija, naam is more formal Arabic.' },
  { darija: 'Smiyti...', pronunciation: 'SMEE-tee...', english: 'My name is...', note: 'Follow with your name. People love knowing your name.' },
  { darija: 'Marhba', pronunciation: 'MAR-hba', english: 'Welcome', note: 'You will hear this everywhere. Moroccans are famously hospitable.' },
  { darija: 'Allah y-khallik', pronunciation: 'AL-lah ee-KHAL-lik', english: 'May God bless you', note: 'A warm way to express deep gratitude.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING & HAGGLING PHRASES
   ═══════════════════════════════════════════════════════════════ */

const shoppingPhrases = [
  { darija: 'Bshhal hada?', pronunciation: 'b-SHHAL HA-da', english: 'How much is this?', note: 'The most important souk phrase. Point at the item.' },
  { darija: 'Bshhal hadi?', pronunciation: 'b-SHHAL HA-dee', english: 'How much is this? (feminine)', note: 'Use for feminine nouns like bags, scarves.' },
  { darija: 'Ghali bzaf!', pronunciation: 'GHA-lee b-ZAHF', english: 'Too expensive!', note: 'Say this with a smile. Part of the haggling ritual.' },
  { darija: 'Naqas shwiya', pronunciation: 'NA-qas SHWEE-ya', english: 'Reduce a little / Lower the price', note: 'A polite request to bring the price down.' },
  { darija: 'Akhir taman?', pronunciation: 'A-khir ta-MAN', english: 'Last price? / Final price?', note: 'Ask this to signal you are serious about buying.' },
  { darija: 'Wakha', pronunciation: 'WAK-ha', english: 'Okay / Agreed', note: 'Use this to accept a deal. Also means "alright" generally.' },
  { darija: 'Maashi mushkil', pronunciation: 'MA-shee MUSH-kil', english: 'No problem', note: 'Versatile phrase. Works in many situations.' },
  { darija: 'Bgheet n-shri...', pronunciation: 'BGHEET n-SHREE', english: 'I want to buy...', note: 'Start with this when you know what you want.' },
  { darija: 'Aatini wahd...', pronunciation: 'AA-tee-nee WAHD', english: 'Give me one...', note: 'Useful at market stalls and food vendors.' },
  { darija: 'Ma bgheet-sh', pronunciation: 'ma BGHEET-sh', english: 'I don\'t want (it)', note: 'Polite refusal. Add shukran for extra politeness.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RESTAURANT & FOOD PHRASES
   ═══════════════════════════════════════════════════════════════ */

const foodPhrases = [
  { darija: 'Bsmillah', pronunciation: 'bis-MIL-lah', english: 'In the name of God (before eating)', note: 'Said before meals. Shows respect for the food and host.' },
  { darija: 'Hamdullah', pronunciation: 'ham-du-LAH', english: 'Thanks to God (after eating)', note: 'Said after finishing a meal. Sign of satisfaction.' },
  { darija: 'Bsahha!', pronunciation: 'b-SAH-ha', english: 'Bon appetit! / Enjoy!', note: 'Said to someone eating or after they finish.' },
  { darija: 'Bneen bzaf!', pronunciation: 'BNEEN b-ZAHF', english: 'Very delicious!', note: 'The ultimate compliment to a cook. Use generously.' },
  { darija: 'Atay', pronunciation: 'a-TAY', english: 'Mint tea', note: 'The national drink. Never refuse an offer of atay.' },
  { darija: 'Qahwa', pronunciation: 'QAH-wa', english: 'Coffee', note: 'Noss-noss means half-half (coffee with milk).' },
  { darija: 'L-ma', pronunciation: 'ul-MA', english: 'Water', note: 'Ask for l-ma if you need water at a restaurant.' },
  { darija: 'L-hisab, afak', pronunciation: 'ul-hee-SAB, a-FAK', english: 'The bill, please', note: 'Use at the end of your meal.' },
  { darija: 'Ana ma kan-aklsh l-hm', pronunciation: 'A-na ma kan-AKL-sh ul-HM', english: 'I don\'t eat meat', note: 'Useful for vegetarians. L-hm = meat.' },
  { darija: 'Haram aaliya', pronunciation: 'ha-RAM aa-LEE-ya', english: 'I\'m allergic / It\'s forbidden for me', note: 'Use for food allergies or dietary restrictions.' },
  { darija: 'Zidni shwiya', pronunciation: 'ZID-nee SHWEE-ya', english: 'Give me a little more', note: 'Useful when ordering at food stalls by weight.' },
  { darija: 'Khobz', pronunciation: 'KHOBZ', english: 'Bread', note: 'Bread is sacred in Morocco. Never waste it.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DIRECTIONS & TRANSPORT
   ═══════════════════════════════════════════════════════════════ */

const directionPhrases = [
  { darija: 'Fin kayn...?', pronunciation: 'FEEN KAYN', english: 'Where is...?', note: 'The key direction-asking phrase. Point or name the place.' },
  { darija: 'Sir neeshan', pronunciation: 'SEER nee-SHAN', english: 'Go straight', note: 'Neeshan literally means "direct/straight."' },
  { darija: 'Dour l-leemin', pronunciation: 'DOOR lil-lee-MIN', english: 'Turn right', note: 'Leemin = right side.' },
  { darija: 'Dour l-lisar', pronunciation: 'DOOR lil-lee-SAR', english: 'Turn left', note: 'Lisar = left side.' },
  { darija: 'Qreeb', pronunciation: 'QREEB', english: 'Near / Close', note: 'Ask "wesh qreeb?" (is it close?) before walking.' },
  { darija: 'Baeed', pronunciation: 'ba-EED', english: 'Far', note: 'If you hear this, consider taking a taxi.' },
  { darija: 'Wqaf hna', pronunciation: 'WQAF H-NA', english: 'Stop here', note: 'Essential phrase for taxis. Say it firmly.' },
  { darija: 'Ddi-ni l...', pronunciation: 'DDI-nee l', english: 'Take me to...', note: 'Use when getting into a taxi.' },
  { darija: 'Bshhal l... ?', pronunciation: 'b-SHHAL l', english: 'How much to (place)?', note: 'Always agree on taxi fare before getting in.' },
  { darija: 'Shaal l-contador?', pronunciation: 'SHAAL ul-kon-ta-DOR', english: 'Use the meter', note: 'Petit taxis in cities should use meters.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NUMBERS 1-10
   ═══════════════════════════════════════════════════════════════ */

const darijaNumbers = [
  { number: 1, darija: 'Wahd', pronunciation: 'WAHD' },
  { number: 2, darija: 'Jouj', pronunciation: 'JOOJ' },
  { number: 3, darija: 'Tlata', pronunciation: 'TLA-ta' },
  { number: 4, darija: 'Rbaa', pronunciation: 'R-BAA' },
  { number: 5, darija: 'Khmsa', pronunciation: 'KHUM-sa' },
  { number: 6, darija: 'Stta', pronunciation: 'ST-ta' },
  { number: 7, darija: 'Sbaa', pronunciation: 'S-BAA' },
  { number: 8, darija: 'Tmnya', pronunciation: 'TM-nya' },
  { number: 9, darija: 'Tsaud', pronunciation: 'T-SAUD' },
  { number: 10, darija: 'Ashra', pronunciation: 'ASH-ra' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EMERGENCY PHRASES
   ═══════════════════════════════════════════════════════════════ */

const emergencyPhrases = [
  { darija: 'Aafak, saadni!', pronunciation: 'AA-fak, SAA-ad-nee', english: 'Please, help me!', note: 'Use in any urgent situation.' },
  { darija: 'Awddi l-tbib', pronunciation: 'AW-dee ul-TBEEB', english: 'Take me to a doctor', note: 'Tbib = doctor. Important for medical emergencies.' },
  { darija: 'Ana mrid / mrida', pronunciation: 'A-na MREED / MREE-da', english: 'I am sick (m/f)', note: 'Mrid for males, mrida for females.' },
  { darija: 'Fin kayn spitar?', pronunciation: 'FEEN KAYN spee-TAR', english: 'Where is the hospital?', note: 'Spitar comes from French "hopital."' },
  { darija: 'Fin kayn pharmacie?', pronunciation: 'FEEN KAYN far-ma-SEE', english: 'Where is the pharmacy?', note: 'Pharmacies are well-stocked and accessible in Morocco.' },
  { darija: 'Ayyet l-police', pronunciation: 'AY-yet lil-po-LEES', english: 'Call the police', note: 'Police emergency number: 19. Gendarmerie: 177.' },
  { darija: 'Tlfat liya...', pronunciation: 'TL-fat LEE-ya', english: 'I have lost my...', note: 'Follow with: passport (passeport), phone (tilifun), wallet (portefeuille).' },
  { darija: 'Ma fhamt-sh', pronunciation: 'ma FHAMT-sh', english: 'I don\'t understand', note: 'Useful when conversations get beyond your ability.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: AMAZIGH (BERBER) BASIC PHRASES
   ═══════════════════════════════════════════════════════════════ */

const amazighPhrases = [
  { amazigh: 'Azul', pronunciation: 'a-ZOOL', english: 'Hello', region: 'All regions' },
  { amazigh: 'Tanmirt', pronunciation: 'tan-MEERT', english: 'Thank you', region: 'All regions' },
  { amazigh: 'Iyeh', pronunciation: 'EE-yeh', english: 'Yes', region: 'All regions' },
  { amazigh: 'Uhu', pronunciation: 'OO-hoo', english: 'No', region: 'All regions' },
  { amazigh: 'Manzakin?', pronunciation: 'man-za-KEEN', english: 'How are you?', region: 'Tashelhit (South)' },
  { amazigh: 'Labas darik?', pronunciation: 'la-BASS da-REEK', english: 'Are you well?', region: 'Tamazight (Central)' },
  { amazigh: 'Ar tufat', pronunciation: 'AR too-FAT', english: 'Goodbye / See you', region: 'Tamazight (Central)' },
  { amazigh: 'Mshta ay-ghee?', pronunciation: 'MSH-ta ay-GHEE', english: 'How much is this?', region: 'Tashelhit (South)' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FRENCH BASICS FOR MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const frenchPhrases = [
  { french: 'Bonjour', pronunciation: 'bon-ZHOOR', english: 'Hello / Good day', context: 'Universal greeting in urban Morocco.' },
  { french: 'Merci beaucoup', pronunciation: 'mer-SEE bo-KOO', english: 'Thank you very much', context: 'Widely understood everywhere.' },
  { french: 'S\'il vous plait', pronunciation: 'seel voo PLAY', english: 'Please', context: 'Works in restaurants, hotels, taxis.' },
  { french: 'L\'addition, s\'il vous plait', pronunciation: 'la-dee-SYON seel voo PLAY', english: 'The bill, please', context: 'Common in upscale restaurants.' },
  { french: 'Parlez-vous anglais?', pronunciation: 'par-LAY voo on-GLAY', english: 'Do you speak English?', context: 'Useful starting point in conversations.' },
  { french: 'Je ne comprends pas', pronunciation: 'zhuh nuh kom-PRON pa', english: 'I don\'t understand', context: 'Polite way to indicate confusion.' },
  { french: 'Ou est...?', pronunciation: 'oo AY', english: 'Where is...?', context: 'Asking for directions in cities.' },
  { french: 'Combien?', pronunciation: 'kom-BYAN', english: 'How much?', context: 'Quick price inquiry. Works in most shops.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRONUNCIATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const pronunciationTips = [
  { sound: 'Kh', description: 'Like the "ch" in Scottish "loch" or German "Bach." A throaty, raspy sound made at the back of the throat. Found in kheir, khobz, khmsa.', difficulty: 'Medium' },
  { sound: 'Gh', description: 'A gargling "r" sound, like the French "r" but deeper. Similar to gargling water gently. Found in ghali, maghrib.', difficulty: 'Medium' },
  { sound: 'Q', description: 'A deep "k" sound produced far back in the throat (uvular). Different from regular "k." Found in qahwa, qreeb.', difficulty: 'Hard' },
  { sound: 'Aa (ayn)', description: 'A constricted throat sound with no English equivalent. Sounds like a squeezed "a." Found in aaliya, aafak, sbaa.', difficulty: 'Hard' },
  { sound: 'H (emphatic)', description: 'A breathy "h" that comes from deep in the throat, stronger than English "h." Found in hada, hamdullah, haram.', difficulty: 'Easy' },
  { sound: 'Sh', description: 'Same as English "sh" in "shoe." Found in shukran, bshhal, shwiya. One of the easiest Darija sounds.', difficulty: 'Easy' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL CONTEXT
   ═══════════════════════════════════════════════════════════════ */

const culturalTips = [
  { icon: Heart, title: 'Greetings Are Sacred', tip: 'Never skip the greeting ritual. Even a quick salam before asking a question shows respect. Moroccans may ask about your health and family before getting to business.' },
  { icon: Users, title: 'Gender Awareness', tip: 'Some words change based on gender. Use "akh" (brother) or "sahbi" (my friend) for men. For women, use "ukhti" (sister) or "sahbti." Using the right form shows cultural sensitivity.' },
  { icon: HandHelping, title: 'Right Hand Rule', tip: 'Use your right hand for greetings, giving and receiving items, and eating. The left hand is considered impolite for these purposes across all of Morocco.' },
  { icon: Coffee, title: 'Tea Invitation Etiquette', tip: 'When a shopkeeper offers mint tea, it is a genuine gesture of hospitality, not a sales obligation. Accepting tea does not mean you must buy anything.' },
  { icon: Volume2, title: 'Tone and Volume', tip: 'Moroccans speak loudly and expressively. This is enthusiasm, not aggression. Speak Darija with energy and a smile. A bold, cheerful attempt is always better than hesitant mumbling.' },
  { icon: Globe, title: 'Code-Switching Is Normal', tip: 'Moroccans seamlessly mix Darija, French, Amazigh, and even Spanish in a single sentence. You can do the same with no judgment.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDarijaPhrases() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Moroccan Darija Phrases</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 hero-overlay">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-morocco.webp"
            alt="Vibrant Moroccan medina with colorful market stalls, Arabic calligraphy, and traditional architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="container-morocco text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm text-white mb-6">
            <Languages className="w-4 h-4 inline mr-1.5" />
            Morocco Language Guide 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Essential Moroccan Darija<br />Phrases for Travelers
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Master 100+ essential Darija phrases to connect with locals, navigate souks, order food, and
            travel confidently across Morocco. Includes Amazigh and French basics.
          </p>
        </div>
      </section>

      {/* ── What Is Darija ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Is Darija? Understanding Moroccan Arabic
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            The living language of Morocco that no textbook fully captures.
          </p>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Darija (pronounced da-REE-ja) is the Moroccan dialect of Arabic spoken daily by over 30 million people.
              Unlike Modern Standard Arabic (MSA), which is used in news broadcasts and official documents, Darija is
              the language of the street, the souk, and the home. It is what you will hear in cafes, taxis, and when
              families gather for dinner.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              What makes Darija unique is its rich blend of influences. Centuries of history have woven Amazigh (Berber)
              vocabulary, French expressions, and Spanish words (especially in the north) into a dialect that is
              distinctly Moroccan. A speaker of Gulf or Egyptian Arabic would struggle to understand Darija.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              For travelers, the good news is that you do not need to be fluent. Even a handful of well-pronounced
              Darija phrases will open doors and transform your interactions. Moroccans are incredibly warm toward
              visitors who make an effort, and even a simple &quot;shukran bzaf&quot; will be met with genuine delight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5 text-center">
              <Languages className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                3 Major Languages
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Arabic (Darija), Amazigh (Berber), and French are the three primary languages spoken across Morocco.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                French Is Widespread
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                French is the primary language of business, higher education, and government administration in Morocco.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <MessageCircle className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                English Is Growing
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                English proficiency is rising among young Moroccans, especially in Marrakech, Casablanca, and tourist areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Basic Greetings ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Basic Greetings &amp; Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These 15 phrases will cover 80% of your daily interactions in Morocco. Start here.
          </p>

          <div className="space-y-4">
            {basicGreetings.map((phrase) => (
              <div key={phrase.darija} className="card-moroccan p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-1/3">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                      {phrase.darija}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] italic mt-0.5">
                      <Volume2 className="w-3 h-3 inline mr-1" />
                      {phrase.pronunciation}
                    </p>
                  </div>
                  <div className="md:w-1/4">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                  </div>
                  <div className="md:w-5/12">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <Lightbulb className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {phrase.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shopping & Haggling Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Haggling Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Navigate the souks like a seasoned traveler. These phrases are essential for bargaining.
          </p>

          <div className="space-y-4">
            {shoppingPhrases.map((phrase) => (
              <div key={phrase.darija} className="card-moroccan p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-1/3">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                      {phrase.darija}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] italic mt-0.5">
                      <Volume2 className="w-3 h-3 inline mr-1" />
                      {phrase.pronunciation}
                    </p>
                  </div>
                  <div className="md:w-1/4">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                  </div>
                  <div className="md:w-5/12">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <Lightbulb className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {phrase.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              Pro Haggling Tip
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Start at about 40-50% of the asking price and work your way up. Always smile and keep the tone
              friendly. Walking away is a legitimate negotiation tactic -- if the vendor calls you back, you have
              leverage. Prices for handmade goods like leather bags start from 150 MAD and carpets from 500 MAD,
              though seasonal pricing can change. See our full
              <Link href="/morocco-haggling-guide" className="text-[var(--color-accent)] hover:underline ml-1">
                Morocco Haggling Guide
              </Link> for detailed strategies.
            </p>
          </div>
        </div>
      </section>

      {/* ── Restaurant & Food Phrases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Restaurant &amp; Food Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From ordering tagine to complimenting the chef. Make every meal a cultural experience.
          </p>

          <div className="space-y-4">
            {foodPhrases.map((phrase) => (
              <div key={phrase.darija} className="card-moroccan p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-1/3">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                      {phrase.darija}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] italic mt-0.5">
                      <Volume2 className="w-3 h-3 inline mr-1" />
                      {phrase.pronunciation}
                    </p>
                  </div>
                  <div className="md:w-1/4">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                  </div>
                  <div className="md:w-5/12">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <Lightbulb className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {phrase.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Directions & Transport ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Directions &amp; Transport Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Find your way through medinas and negotiate taxi rides with confidence.
          </p>

          <div className="space-y-4">
            {directionPhrases.map((phrase) => (
              <div key={phrase.darija} className="card-moroccan p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-1/3">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                      {phrase.darija}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] italic mt-0.5">
                      <Volume2 className="w-3 h-3 inline mr-1" />
                      {phrase.pronunciation}
                    </p>
                  </div>
                  <div className="md:w-1/4">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                  </div>
                  <div className="md:w-5/12">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <Lightbulb className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {phrase.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numbers 1-10 ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hash className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Numbers 1-10 in Darija
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential for shopping, taxis, and ordering food. Moroccans also use French numbers frequently.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {darijaNumbers.map((num) => (
              <div key={num.number} className="card-moroccan p-4 text-center">
                <div className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-1">
                  {num.number}
                </div>
                <div className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  {num.darija}
                </div>
                <div className="text-xs text-[var(--text-muted)] italic mt-1">{num.pronunciation}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Larger Numbers &amp; Prices
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              For prices above 10, many Moroccans switch to French numbers. &quot;Vingt&quot; (20), &quot;cinquante&quot; (50),
              &quot;cent&quot; (100), and &quot;mille&quot; (1000) are commonly used in Darija conversations. In souks, vendors
              often quote prices in &quot;rial&quot; (1 rial = 0.05 MAD or 5 centimes), an old currency unit. So
              &quot;miya rial&quot; (100 rial) actually means 5 MAD. Always clarify: &quot;f-dirham?&quot; (in dirhams?).
            </p>
          </div>
        </div>
      </section>

      {/* ── Emergency Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Emergency &amp; Essential Safety Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hopefully you will never need these, but knowing them provides peace of mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyPhrases.map((phrase) => (
              <div key={phrase.darija} className="card-moroccan p-4 md:p-5 border-l-4 border-red-400">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {phrase.darija}
                </h3>
                <p className="text-xs text-[var(--text-muted)] italic mb-2">
                  <Volume2 className="w-3 h-3 inline mr-1" />
                  {phrase.pronunciation}
                </p>
                <p className="text-sm font-medium text-[var(--color-accent)] mb-1">{phrase.english}</p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {phrase.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-red-50 dark:bg-red-900/10">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Phone className="w-4 h-4 inline mr-1 text-red-500" />
              Emergency Numbers in Morocco
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[var(--text-secondary)]">
              <div><span className="font-bold">Police:</span> 19 (cities) / 177 (Gendarmerie, rural areas)</div>
              <div><span className="font-bold">Fire / Ambulance:</span> 15</div>
              <div><span className="font-bold">Tourist Police:</span> Available in major cities like Marrakech and Fes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Amazigh (Berber) Phrases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh (Berber) Basic Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            About 40% of Moroccans speak an Amazigh language. These phrases are valued in the Atlas Mountains,
            Souss Valley, and Rif region.
          </p>

          <div className="card-moroccan p-6 mb-8">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Amazigh (also known as Berber) is an indigenous language family of North Africa. In Morocco, three main
              varieties are spoken: <span className="font-bold text-[var(--text-primary)]">Tashelhit</span> in the south and
              Souss region, <span className="font-bold text-[var(--text-primary)]">Tamazight</span> in the Central Atlas,
              and <span className="font-bold text-[var(--text-primary)]">Tarifit</span> in the Rif Mountains of the north.
              Since 2011, Amazigh has been recognized as an official language of Morocco alongside Arabic.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              If you are trekking in the Atlas Mountains, visiting the Souss Valley, or exploring Berber villages,
              using even a single Amazigh word will earn enormous respect and warm hospitality.
            </p>
          </div>

          <div className="space-y-4">
            {amazighPhrases.map((phrase) => (
              <div key={phrase.amazigh} className="card-moroccan p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-1/4">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                      {phrase.amazigh}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] italic mt-0.5">
                      <Volume2 className="w-3 h-3 inline mr-1" />
                      {phrase.pronunciation}
                    </p>
                  </div>
                  <div className="md:w-1/4">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <MapPin className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {phrase.region}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── French Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            French Phrases Widely Used in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            French is Morocco&apos;s second language and is essential for business, administration, and urban life.
          </p>

          <div className="space-y-4">
            {frenchPhrases.map((phrase) => (
              <div key={phrase.french} className="card-moroccan p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-1/4">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                      {phrase.french}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] italic mt-0.5">
                      <Volume2 className="w-3 h-3 inline mr-1" />
                      {phrase.pronunciation}
                    </p>
                  </div>
                  <div className="md:w-1/4">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <Lightbulb className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {phrase.context}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              When to Use French vs. Darija
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              In upscale restaurants, hotels, and formal settings, French is typically preferred. In medinas,
              souks, neighborhood cafes, and rural areas, Darija is more appropriate and appreciated. When in
              doubt, start with &quot;salam&quot; (it works everywhere) and then gauge whether the person responds
              more comfortably in French or Darija. Many educated Moroccans are trilingual and will happily
              switch to whichever language you prefer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pronunciation Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Volume2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pronunciation Guide for Darija Sounds
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Darija has several sounds that do not exist in English. Here is how to approximate them.
          </p>

          <div className="space-y-4">
            {pronunciationTips.map((tip) => (
              <div key={tip.sound} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-[family-name:var(--font-display)] font-bold text-white">{tip.sound}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        tip.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        tip.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {tip.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cultural Context ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Context &amp; Language Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Language in Morocco is inseparable from culture. These tips will help you communicate with respect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Formal Arabic vs Darija ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Modern Standard Arabic vs. Darija
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding when each is used will help you navigate Morocco&apos;s linguistic landscape.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 bg-[var(--color-accent)] text-white text-sm font-[family-name:var(--font-heading)] font-bold">
              <div className="p-4">Context</div>
              <div className="p-4">MSA (Fusha)</div>
              <div className="p-4">Darija</div>
            </div>
            {[
              { context: 'Daily conversation', msa: 'Rarely used', darija: 'Always used' },
              { context: 'News broadcasts', msa: 'Primary language', darija: 'Some programs' },
              { context: 'Souks and markets', msa: 'Never used', darija: 'Always used' },
              { context: 'Official documents', msa: 'Primary language', darija: 'Not used' },
              { context: 'Social media', msa: 'Formal posts', darija: 'Dominant in messaging' },
            ].map((row, i) => (
              <div key={row.context} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}>
                <div className="p-4 font-medium text-[var(--text-primary)]">{row.context}</div>
                <div className="p-4 text-[var(--text-secondary)]">{row.msa}</div>
                <div className="p-4 text-[var(--text-secondary)]">{row.darija}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <CheckCircle className="w-4 h-4 inline mr-1 text-green-600" />
              The Bottom Line for Travelers
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              As a traveler, focus on Darija and French. Modern Standard Arabic is useful for reading signs
              and menus, but Darija is what people actually speak. If you have studied Arabic elsewhere in
              the Middle East, you will recognize some words, but the pronunciation, vocabulary, and grammar
              of Darija are sufficiently different that you will need to learn Morocco-specific phrases.
            </p>
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
                What is Darija and how is it different from Modern Standard Arabic?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Darija is the Moroccan dialect of Arabic spoken daily by over 30 million Moroccans. It differs
                significantly from Modern Standard Arabic (MSA) used in news and formal writing. Darija incorporates
                Amazigh (Berber), French, and Spanish vocabulary, making it largely unintelligible to speakers of
                Gulf or Levantine Arabic. Most Moroccans understand MSA but speak Darija in everyday life.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need to learn Darija before visiting Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                While not strictly necessary, learning even 10-15 basic Darija phrases will significantly enhance
                your trip. Moroccans deeply appreciate when visitors make an effort to speak their language. Key
                phrases like salam (hello), shukran (thank you), and bshhal (how much) will help in markets,
                taxis, and restaurants. French is also widely spoken in cities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is French or Darija more useful in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Both are useful in different contexts. In major cities like Casablanca, Rabat, and Marrakech,
                French is widely spoken in hotels, restaurants, and shops. In rural areas, smaller towns, and
                traditional souks, Darija is more practical. Learning basics of both gives you the best coverage.
                English is growing but still limited outside tourist areas.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the most important Darija phrases for shopping in souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The essential souk phrases are: bshhal hada? (how much is this?), ghali bzaf (too expensive),
                naqas shwiya (reduce a little), and wakha (okay/agreed). Knowing numbers in Darija also helps
                during price negotiations. Always start by saying salam and maintain a friendly tone while haggling.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do you say thank you in Moroccan Arabic?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Thank you in Moroccan Darija is shukran. To say thank you very much, say shukran bzaf. You can
                also use the French merci, which is commonly understood. For an even more emphatic thanks, say
                Allah y-khallik (may God bless you), which is deeply appreciated by locals.
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
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Understand Moroccan customs, traditions, and social norms for a respectful and enriching visit.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-etiquette" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <UtensilsCrossed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Food Etiquette
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Master Moroccan dining customs, from communal tagine etiquette to tea ceremony traditions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-haggling-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Haggling Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Learn the art of negotiation in Moroccan souks with proven strategies and fair price ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-safety-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Stay safe in Morocco with practical tips on scams, health, transport, and emergency contacts.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 zellige-border">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Ready to Speak Like a Local?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
            Print this page or save it on your phone for quick reference during your Morocco trip.
            A few Darija phrases go a long way toward genuine connections and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-culture-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[#8B4726] transition-colors font-medium"
            >
              Explore Morocco Culture
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/plan"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border-default)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-muted)] transition-colors font-medium"
            >
              Plan Your Trip
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
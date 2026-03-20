import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Globe,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Compass,
  Heart,
  MessageCircle,
  ShoppingBag,
  Volume2,
  Languages,
  Phone,
  UtensilsCrossed,
  Car,
  AlertTriangle,
  CheckCircle,
  Hash,
  Smartphone,
  HandHelping,
  CircleAlert,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Language Guide 2026 | 50+ Essential Darija Phrases for Tourists',
  description:
    'Complete Morocco language guide for 2026. Learn 50+ essential Moroccan Arabic (Darija) phrases with pronunciation for greetings, shopping, dining, transport, emergencies, and numbers. French vs Arabic, language apps, and tips for travelers.',
  keywords: [
    'Moroccan Arabic phrases',
    'basic Darija for tourists',
    'useful Arabic Morocco',
    'Morocco language guide for travelers',
    'Darija pronunciation guide',
    'Morocco travel phrases',
    'Moroccan Arabic for beginners',
    'French in Morocco',
    'learn Darija',
    'Morocco greetings Arabic',
    'haggling phrases Morocco',
    'restaurant Arabic Morocco',
    'emergency phrases Morocco',
    'numbers in Moroccan Arabic',
    'Darija phrasebook',
    'Morocco communication tips',
  ],
  openGraph: {
    title: 'Morocco Language Guide 2026 | 50+ Essential Darija Phrases for Tourists',
    description:
      'Master 50+ essential Moroccan Arabic (Darija) phrases with pronunciation guides. Greetings, shopping, dining, transport, emergencies, and more for confident travel in Morocco.',
    url: `${BASE_URL}/morocco-language-basics`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan market scene representing language and communication in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Language Guide 2026 | 50+ Darija Phrases for Travelers',
    description:
      '50+ essential Moroccan Arabic phrases with pronunciation. Greetings, numbers, shopping, dining, transport & emergencies. Your complete Darija phrasebook for Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-language-basics` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-language-basics`,
  name: 'Morocco Language Guide 2026 | 50+ Essential Darija Phrases for Tourists',
  description:
    'Complete guide to languages spoken in Morocco with 50+ essential Darija (Moroccan Arabic) phrases organized by category, pronunciation tips, French vs Arabic usage, language apps, and body language guide for travelers in 2026.',
  url: `${BASE_URL}/morocco-language-basics`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-language-basics`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Language Basics', item: `${BASE_URL}/morocco-language-basics` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What language do they speak in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has two official languages: Modern Standard Arabic and Amazigh (Berber). However, the everyday spoken language is Darija, a Moroccan dialect of Arabic that differs significantly from Modern Standard Arabic. French is widely spoken in business, government, and education, especially in cities. Spanish is common in northern Morocco (Tangier, Tetouan, Nador). English is increasingly spoken by younger Moroccans and those working in tourism.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Darija the same as standard Arabic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, Darija (Moroccan Arabic) is significantly different from Modern Standard Arabic (MSA). Darija has incorporated many words from Amazigh, French, and Spanish, making it largely unintelligible to Arabic speakers from the Middle East without exposure. The grammar is simplified compared to MSA, and the pronunciation differs considerably. Moroccans learn MSA in school and can understand it, but they speak Darija in daily life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get by with just French in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, French is widely spoken in Moroccan cities, government offices, upscale hotels, restaurants, and shops. Most educated Moroccans speak French fluently. However, in rural areas, small villages, and traditional medinas, French may be less useful and Darija becomes more important. In northern Morocco, Spanish is often more useful than French. Learning even a few Darija phrases will greatly enhance your experience everywhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do people speak English in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'English is growing in Morocco but is not as widely spoken as French. You will find English speakers in major tourist areas like Marrakech, Fes, Casablanca, and Essaouira, especially among younger Moroccans, hotel staff, and tour guides. Outside tourist zones, English proficiency drops significantly. Having some French or Darija phrases is highly recommended as a backup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best app to learn Moroccan Arabic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several apps can help you learn Moroccan Darija. Mondly and Pimsleur offer Moroccan Arabic courses. The app "Speak Moroccan" is specifically designed for Darija learners. YouTube channels like "Learn Darija with Simo" provide free lessons. Google Translate works for basic phrases but can be unreliable for Darija specifically, as it primarily supports Modern Standard Arabic. A physical phrasebook is still useful as a backup.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I say "thank you" in Moroccan Arabic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thank you in Moroccan Arabic (Darija) is "Shukran" (SHOO-kran). For "thank you very much," say "Shukran bezef" (SHOO-kran beh-ZEFF). You can also say "Barak Allahu fik" (may God bless you), which is a more formal and deeply appreciated expression of gratitude. In French-speaking contexts, "Merci" is also perfectly understood and commonly used.',
      },
    },
    {
      '@type': 'Question',
      name: 'What numbers should I learn for shopping in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For shopping and haggling, learn the numbers wahid (1) through ashara (10), then mia (100), and alf (1000). Most prices in souks are quoted in dirhams (MAD), and knowing numbers helps enormously when haggling. You can also use French numbers, which most vendors understand. Many vendors will type prices on a calculator to show you, but knowing the numbers in Darija earns respect and can help you get better prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it important to learn Arabic before visiting Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do not need to be fluent, but learning 20-30 basic Darija phrases will significantly improve your travel experience. Moroccans deeply appreciate any effort to speak their language, even if your pronunciation is imperfect. Essential phrases like greetings (Salam), thank you (Shukran), please (Afak), how much (Bshhal), and numbers will help you navigate souks, restaurants, and taxis with more confidence and often better prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What body language should I know about in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccans are expressive communicators. Important body language cues include: use your right hand for greetings, eating, and passing items (the left is considered unclean). Placing your hand on your heart after a handshake shows sincerity. Avoid pointing with your index finger; use an open hand instead. Showing the soles of your feet is disrespectful. Men may hold hands as a sign of friendship. Maintaining eye contact during conversation shows respect and engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What language should I use when haggling in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Starting a negotiation in Darija immediately earns respect and can lead to better prices. Key haggling phrases include "Bshhal?" (how much?), "Ghali bezef" (too expensive), and "Nqqes shwiya" (lower the price a little). However, most souk vendors speak French and many speak English or Spanish. Using Darija shows effort and cultural respect, which vendors appreciate. You can mix languages freely, as most Moroccans do in daily conversation.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: GREETINGS PHRASES
   ═══════════════════════════════════════════════════════════════ */

const greetingPhrases = [
  { darija: 'Salam Alaikum', pronunciation: 'sa-LAHM a-LAY-kum', english: 'Peace be upon you (formal hello)' },
  { darija: 'Wa Alaikum Salam', pronunciation: 'wa a-LAY-kum sa-LAHM', english: 'And peace be upon you (response)' },
  { darija: 'La bes?', pronunciation: 'la-BESS', english: 'How are you? / Are you well?' },
  { darija: 'La bes, hamdullah', pronunciation: 'la-BESS, ham-DOO-lah', english: 'I am fine, praise God' },
  { darija: 'Sbah el kheir', pronunciation: 'SBAH el KHAYR', english: 'Good morning' },
  { darija: 'Msa el kheir', pronunciation: 'MSA el KHAYR', english: 'Good evening' },
  { darija: 'Bslama', pronunciation: 'b-SLA-ma', english: 'Goodbye' },
  { darija: 'Tsbah ala kheir', pronunciation: 'ts-BAH ala KHAYR', english: 'Good night' },
  { darija: 'Merhba', pronunciation: 'MER-hba', english: 'Welcome' },
  { darija: 'Smiti...', pronunciation: 'SMI-tee', english: 'My name is...' },
  { darija: 'Shno smitk?', pronunciation: 'SHNO smit-ek', english: 'What is your name?' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL / POLITE PHRASES
   ═══════════════════════════════════════════════════════════════ */

const essentialPhrases = [
  { darija: 'Shukran', pronunciation: 'SHOO-kran', english: 'Thank you' },
  { darija: 'Shukran bezef', pronunciation: 'SHOO-kran beh-ZEFF', english: 'Thank you very much' },
  { darija: 'Afak', pronunciation: 'ah-FAHK', english: 'Please' },
  { darija: 'Smehli', pronunciation: 'SMEH-lee', english: 'Excuse me / Sorry' },
  { darija: 'Iyyeh', pronunciation: 'ee-YEH', english: 'Yes' },
  { darija: 'La', pronunciation: 'la', english: 'No' },
  { darija: 'Inshallah', pronunciation: 'in-SHA-lah', english: 'God willing' },
  { darija: 'Bismillah', pronunciation: 'bis-MIL-lah', english: 'In the name of God (before eating)' },
  { darija: 'Hamdullah', pronunciation: 'ham-DOO-lah', english: 'Praise God (after eating / I am fine)' },
  { darija: 'Barak Allahu fik', pronunciation: 'BA-rak al-LA-hu feek', english: 'May God bless you (deep thanks)' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NUMBERS
   ═══════════════════════════════════════════════════════════════ */

const numberPhrases = [
  { darija: 'Wahid', pronunciation: 'WA-hid', english: '1' },
  { darija: 'Jouj', pronunciation: 'JOOJ', english: '2' },
  { darija: 'Tlata', pronunciation: 'TLA-ta', english: '3' },
  { darija: 'Rbaa', pronunciation: 'r-BAA', english: '4' },
  { darija: 'Khmsa', pronunciation: 'KHUM-sa', english: '5' },
  { darija: 'Stta', pronunciation: 'SET-ta', english: '6' },
  { darija: 'Sbaa', pronunciation: 's-BAA', english: '7' },
  { darija: 'Tmnya', pronunciation: 'TMEN-ya', english: '8' },
  { darija: 'Tsaoud', pronunciation: 'TSAH-ood', english: '9' },
  { darija: 'Ashara', pronunciation: 'ASH-ra', english: '10' },
  { darija: 'Mia', pronunciation: 'MEE-ya', english: '100' },
  { darija: 'Alf', pronunciation: 'ALF', english: '1,000' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING & HAGGLING PHRASES
   ═══════════════════════════════════════════════════════════════ */

const shoppingPhrases = [
  { darija: 'Bshhal?', pronunciation: 'b-SHHAL', english: 'How much?' },
  { darija: 'Ghali bezef', pronunciation: 'GA-lee beh-ZEFF', english: 'Too expensive' },
  { darija: 'Nqqes shwiya', pronunciation: 'n-QQES SHWEE-ya', english: 'Lower the price a little' },
  { darija: 'Akher taman?', pronunciation: 'AH-kher ta-MAN', english: 'Last price? / Final price?' },
  { darija: 'Maashi', pronunciation: 'MAA-shee', english: 'Okay / Deal' },
  { darija: 'Shukran, la', pronunciation: 'SHOO-kran, la', english: 'Thank you, no' },
  { darija: 'Bghit had shi', pronunciation: 'BGHEET had SHEE', english: 'I want this' },
  { darija: 'Ma bghitsh', pronunciation: 'ma BGHEET-sh', english: 'I do not want it' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DINING PHRASES
   ═══════════════════════════════════════════════════════════════ */

const diningPhrases = [
  { darija: 'Bghit natghedda', pronunciation: 'BGHEET nat-GHED-da', english: 'I want to eat lunch' },
  { darija: 'Bghit atay', pronunciation: 'BGHEET a-TAY', english: 'I want tea' },
  { darija: 'Bghit lma', pronunciation: 'BGHEET l-MA', english: 'I want water' },
  { darija: 'Zwin bezef!', pronunciation: 'ZWEEN beh-ZEFF', english: 'Very delicious!' },
  { darija: 'L-hsab, afak', pronunciation: 'el-HSAB, ah-FAHK', english: 'The bill, please' },
  { darija: 'Bla lhem', pronunciation: 'BLA l-HEM', english: 'Without meat (vegetarian)' },
  { darija: 'Andi hassasiya', pronunciation: 'AN-dee has-sa-SEE-ya', english: 'I have an allergy' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT PHRASES
   ═══════════════════════════════════════════════════════════════ */

const transportPhrases = [
  { darija: 'Fin kayn...?', pronunciation: 'FEEN kayn', english: 'Where is...?' },
  { darija: 'Bghit nmshi l...', pronunciation: 'BGHEET NEM-shee l', english: 'I want to go to...' },
  { darija: 'Baal shhal?', pronunciation: 'b-AAL SHHAL', english: 'How far?' },
  { darija: 'Dir el compteur', pronunciation: 'DEER el komp-TUR', english: 'Turn on the meter (taxi)' },
  { darija: 'Wqef hna, afak', pronunciation: 'WQEF HNA, ah-FAHK', english: 'Stop here, please' },
  { darija: 'Limen', pronunciation: 'lee-MEN', english: 'Right' },
  { darija: 'Liser', pronunciation: 'lee-SER', english: 'Left' },
  { darija: 'Nishan', pronunciation: 'nee-SHAN', english: 'Straight ahead' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EMERGENCY PHRASES
   ═══════════════════════════════════════════════════════════════ */

const emergencyPhrases = [
  { darija: 'Awnuni!', pronunciation: 'aw-NOO-nee', english: 'Help me!' },
  { darija: 'Aytni tabib', pronunciation: 'AYT-nee ta-BEEB', english: 'Get me a doctor' },
  { darija: 'Ana mrid(a)', pronunciation: 'ANA mreed/MREE-da', english: 'I am sick (m/f)' },
  { darija: 'Fin kayna sbiatar?', pronunciation: 'FEEN KAY-na sbi-YTAR', english: 'Where is the hospital?' },
  { darija: 'Fin kayna pharmacie?', pronunciation: 'FEEN KAY-na far-ma-SEE', english: 'Where is the pharmacy?' },
  { darija: 'Ayyit al-bolis', pronunciation: 'AY-yit al-bo-LEES', english: 'Call the police' },
  { darija: 'Tsrquli!', pronunciation: 'TSER-qoo-lee', english: 'I have been robbed!' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LANGUAGES IN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const languagesOverview = [
  {
    language: 'Darija (Moroccan Arabic)',
    usage: 'Daily conversation everywhere',
    detail: 'The mother tongue of most Moroccans. A blend of Arabic, Amazigh, French, and Spanish vocabulary that differs greatly from Modern Standard Arabic. This is what you hear in medinas, taxis, and homes.',
    icon: MessageCircle,
  },
  {
    language: 'Modern Standard Arabic',
    usage: 'Official language, media, formal documents',
    detail: 'Used in news broadcasts, government documents, religious contexts, and formal speeches. All Moroccans learn it in school, but nobody speaks it in everyday life.',
    icon: BookOpen,
  },
  {
    language: 'Amazigh (Berber)',
    usage: 'Official language, rural & mountain areas',
    detail: 'Morocco recognized Amazigh as an official language in 2011. Three main dialects exist: Tashelhit (south), Tamazight (Middle Atlas), and Tarifit (Rif mountains). Roughly 40% of Moroccans speak an Amazigh language.',
    icon: MapPin,
  },
  {
    language: 'French',
    usage: 'Business, education, government, cities',
    detail: 'A legacy of the French protectorate (1912-1956), French remains the dominant language of business, higher education, and government administration. Most urban Moroccans are fluent in French.',
    icon: Globe,
  },
  {
    language: 'Spanish',
    usage: 'Northern Morocco, Saharan regions',
    detail: 'Widely spoken in Tangier, Tetouan, Nador, and the northern Rif region due to historical Spanish influence. Also spoken in Saharan cities like Laayoune. Many northern Moroccans prefer Spanish over French.',
    icon: Languages,
  },
  {
    language: 'English',
    usage: 'Tourism, younger generation, growing',
    detail: 'Increasingly popular, especially among younger Moroccans and those in the tourism industry. Major tourist cities like Marrakech, Fes, and Essaouira have many English speakers. Still less widespread than French.',
    icon: Users,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRONUNCIATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const pronunciationTips = [
  { sound: 'Kh', guide: 'A raspy sound from the back of the throat, like the "ch" in Scottish "loch" or German "Bach." Found in words like "kheir" (good) and "khmsa" (five).', example: 'Kheir (good)' },
  { sound: 'Gh', guide: 'A softer, gargling version of "kh," similar to the French "r" in "Paris." The sound is produced deep in the throat.', example: 'Ghali (expensive)' },
  { sound: 'Aa', guide: 'A deep, emphatic "a" sound made by tightening the throat. Has no English equivalent. Practice by saying "ah" while tensing the muscles at the back of your throat.', example: 'Aafak (please - alternate)' },
  { sound: 'Q', guide: 'A deep "k" sound from the very back of the throat, deeper than a regular "k." In casual Darija, many speakers pronounce it as a glottal stop.', example: 'Nqqes (reduce)' },
  { sound: 'H', guide: 'A breathy "h" similar to English but can also be a stronger, more emphatic sound. Context determines which is used. The emphatic version is more forceful than English "h."', example: 'Hamdullah (praise God)' },
  { sound: 'Sh', guide: 'Exactly like English "sh" in "shoe." Very common in Darija and easy for English speakers to pronounce correctly.', example: 'Shukran (thanks)' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHEN TO USE WHICH LANGUAGE
   ═══════════════════════════════════════════════════════════════ */

const languageContexts = [
  { situation: 'Medinas & Souks', bestLanguage: 'Darija', fallback: 'French, then English', tip: 'Starting in Darija earns respect and better prices. Most vendors also speak French and basic English.' },
  { situation: 'Hotels & Riads', bestLanguage: 'French or English', fallback: 'Darija', tip: 'Staff at tourist accommodations typically speak English. Boutique riads often have French-speaking staff.' },
  { situation: 'Restaurants', bestLanguage: 'French', fallback: 'Darija, English', tip: 'Menus are often in French and Arabic. Upscale restaurants usually have English menus. Local eateries may be Darija-only.' },
  { situation: 'Taxis', bestLanguage: 'Darija or French', fallback: 'Show address on phone', tip: 'Most taxi drivers speak Darija and basic French. Few speak English. Having your destination written in Arabic helps.' },
  { situation: 'Rural Areas', bestLanguage: 'Darija or Amazigh', fallback: 'Basic French', tip: 'English is rare in villages. Amazigh may be the primary language in Atlas Mountain and desert communities.' },
  { situation: 'Northern Morocco', bestLanguage: 'Spanish or Darija', fallback: 'French', tip: 'In Tangier, Tetouan, and the Rif, Spanish is often more useful than French due to historical ties.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LANGUAGE APPS
   ═══════════════════════════════════════════════════════════════ */

const languageApps = [
  { name: 'Mondly', description: 'Offers a specific Moroccan Arabic course with audio from native speakers. Gamified lessons make learning engaging.', best: 'Structured Darija lessons' },
  { name: 'Pimsleur', description: 'Audio-focused language learning with a Moroccan Arabic course. Great for pronunciation practice during commutes.', best: 'Pronunciation mastery' },
  { name: 'Speak Moroccan', description: 'Purpose-built app for Darija learners with real conversational phrases and cultural context.', best: 'Darija-specific content' },
  { name: 'Google Translate', description: 'Useful for basic Arabic but limited for Darija specifically. Camera mode can translate signs in Arabic script.', best: 'Quick text/sign translation' },
  { name: 'YouTube (Learn Darija)', description: 'Free channels like "Learn Darija with Simo" and "Moroccan Arabic with Maha" offer video lessons.', best: 'Free video lessons' },
  { name: 'Anki Flashcards', description: 'Create or download community Darija flashcard decks for spaced repetition learning.', best: 'Vocabulary memorization' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BODY LANGUAGE
   ═══════════════════════════════════════════════════════════════ */

const bodyLanguageTips = [
  'Use your right hand for greetings, eating, and passing items. The left hand is traditionally considered unclean.',
  'Placing your hand on your heart after a handshake is a sign of sincerity and warmth.',
  'Avoid pointing with your index finger. Use an open hand or tilt your chin in the direction instead.',
  'Showing the soles of your feet or shoes to someone is considered disrespectful.',
  'Men holding hands is a common sign of friendship and carries no romantic connotation.',
  'Maintain eye contact during conversation as it shows respect and engagement.',
  'A slight nod or touching the forehead means "I understand" or shows acknowledgment.',
  'Beckoning someone with your palm facing down (fingers curling inward) is the polite way to call someone over.',
  'Tapping the side of your nose can mean "be careful" or "I know what you are up to" depending on context.',
  'Kissing your fingertips after touching food signifies that it tastes wonderful.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/language',
    title: 'Full Morocco Language Guide',
    description: 'Comprehensive overview of every language spoken across Morocco with regional breakdowns and history.',
    icon: Globe,
  },
  {
    href: '/darija',
    title: 'Darija Phrasebook',
    description: 'Over 100 Moroccan Arabic phrases with detailed pronunciation guides for every travel situation.',
    icon: BookOpen,
  },
  {
    href: '/etiquette',
    title: 'Quick Etiquette Overview',
    description: 'Condensed Moroccan etiquette essentials at a glance for quick reference before your trip.',
    icon: Heart,
  },
  {
    href: '/morocco-cultural-etiquette',
    title: 'Cultural Etiquette Guide',
    description: 'In-depth guide to Moroccan customs, dress code, dining rules, tipping, haggling, and Ramadan behavior.',
    icon: Users,
  },
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into Moroccan traditions, festivals, arts, music, and the rich cultural heritage of the kingdom.',
    icon: Compass,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoLanguageBasicsPage() {
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
            <span className="text-white">Morocco Language Basics</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Language &amp; Communication
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Language Guide
            <br className="hidden md:block" /> for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            50+ essential Darija phrases with pronunciation, language tips, French vs Arabic guide,
            and everything you need to communicate confidently across Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Speak the Language, Unlock the Culture
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most linguistically diverse countries in the world. On a single
                walk through a Marrakech medina, you might hear Darija (Moroccan Arabic), Amazigh,
                French, Spanish, and English &mdash; sometimes in the same conversation. This rich
                linguistic tapestry reflects centuries of trade, conquest, and cultural exchange.
              </p>
              <p>
                For travelers, navigating Morocco&apos;s languages can seem daunting, but the good news
                is that Moroccans are incredibly patient and appreciative when visitors attempt even a
                few words in Darija. A simple &ldquo;Salam&rdquo; or &ldquo;Shukran&rdquo; can transform
                a transaction into a genuine human connection and often opens doors that remain closed
                to those who rely only on English.
              </p>
              <p>
                This guide gives you 50+ essential Darija phrases organized by situation, pronunciation
                tips for tricky Arabic sounds, advice on when to use French versus Darija, recommended
                language apps, and body language cues that will help you communicate even when words
                fail you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Languages Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Languages Spoken in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s linguistic landscape is shaped by Arabic, Amazigh, French, Spanish, and English.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languagesOverview.map((lang) => {
              const LangIcon = lang.icon;
              return (
                <div key={lang.language} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <LangIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {lang.language}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        {lang.usage}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{lang.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Greetings Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Greetings &amp; Introductions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Greetings are the foundation of every interaction in Morocco. Start every encounter right.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {greetingPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="min-w-[160px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {phrase.darija}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">{phrase.pronunciation}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{phrase.english}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Essential / Polite Phrases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Polite Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These polite expressions will make you a welcomed guest everywhere in Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {essentialPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="min-w-[160px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {phrase.darija}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">{phrase.pronunciation}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{phrase.english}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hash className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Numbers in Darija
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential for shopping, taxis, and restaurant bills. Knowing numbers helps immensely when haggling.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {numberPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="min-w-[100px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {phrase.darija}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">{phrase.pronunciation}</p>
                  </div>
                  <p className="text-lg font-bold text-[var(--color-accent)]">{phrase.english}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shopping & Haggling Phrases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Haggling Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Master these phrases to negotiate like a local in Morocco&apos;s famous souks and markets.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {shoppingPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="min-w-[160px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {phrase.darija}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">{phrase.pronunciation}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{phrase.english}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Haggling Tip
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Start by asking &ldquo;Bshhal?&rdquo; then offer around 30-40% of the asking price.
                  If the vendor says the price is too high for you, smile and say &ldquo;Ghali bezef&rdquo;
                  and begin walking away. They will often call you back with a better price. Always
                  haggle with humor and respect &mdash; it is a social interaction, not a confrontation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dining Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dining &amp; Restaurant Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Order food, ask for the bill, and compliment the chef with these essential dining phrases.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {diningPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="min-w-[160px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {phrase.darija}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">{phrase.pronunciation}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{phrase.english}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Transport Phrases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport &amp; Directions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Navigate taxis, ask for directions, and get around Morocco with confidence.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {transportPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="min-w-[160px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {phrase.darija}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">{phrase.pronunciation}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{phrase.english}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Taxi Tip
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  In cities, always ask the taxi driver to use the meter (&ldquo;Dir el compteur&rdquo;).
                  For longer trips between cities, negotiate the fare before getting in. Having your
                  destination written in Arabic on your phone is extremely helpful when language
                  barriers arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Emergency Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Phrases you hope you never need, but should know just in case. Morocco&apos;s emergency number is 19 (police) and 15 (ambulance).
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {emergencyPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-4 p-3 bg-red-50/50 rounded-lg border border-red-100">
                  <div className="min-w-[180px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {phrase.darija}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">{phrase.pronunciation}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{phrase.english}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Emergency Numbers
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Police: 19 | Ambulance: 15 | Fire: 15 | Tourist Police (Marrakech): +212 524 384 601.
                  Save these numbers in your phone before traveling. Most operators speak French;
                  some speak English. Your hotel or riad staff can also help communicate in emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pronunciation Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Volume2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pronunciation Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Darija has several sounds that do not exist in English. Master these key sounds to be understood.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {pronunciationTips.map((tip) => (
                <div key={tip.sound} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-white">{tip.sound}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        Example: {tip.example}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.guide}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── When to Use Which Language ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Languages className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            French vs Arabic: When to Use Which Language
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Knowing which language to use in each situation makes navigating Morocco much smoother.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {languageContexts.map((ctx) => (
                <div key={ctx.situation} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {ctx.situation}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        Best: {ctx.bestLanguage}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        Fallback: {ctx.fallback}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{ctx.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Language Apps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Smartphone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Apps &amp; Resources for Learning Darija
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Start learning before your trip with these recommended apps and resources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languageApps.map((app) => (
              <div key={app.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {app.name}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {app.best}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body Language ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHelping className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Body Language &amp; Non-Verbal Communication
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            When words fail, body language speaks. Understanding Moroccan gestures avoids misunderstandings.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {bodyLanguageTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about languages and communication in Morocco.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue learning about Moroccan language and culture with these essential guides.
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
          <MessageCircle className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Speak Darija, Connect with Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            You do not need to be fluent &mdash; even a few words in Darija will transform your
            Morocco experience. Moroccans deeply appreciate the effort, and every &ldquo;Shukran&rdquo;
            and &ldquo;Salam&rdquo; opens a door to genuine warmth and hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/darija"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Full Darija Phrasebook
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-cultural-etiquette"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Cultural Etiquette Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Darija pronunciation varies by region across Morocco. The phonetic guides above represent
            the most widely understood pronunciations. Information on this page is current as of March 2026.
          </p>
        </div>
      </section>
    </>
  );
}

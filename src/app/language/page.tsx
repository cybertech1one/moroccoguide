import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Languages,
  MessageCircle,
  ShoppingBag,
  UtensilsCrossed,
  MapPin,
  Hash,
  AlertCircle,
  Volume2,
  Handshake,
  BookOpen,
  Hand,
  Smartphone,
  Map,
  ArrowRight,
  Globe,
  Star,
  Clock,
  Coffee,
  Compass,
  Heart,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Arabic & Language Guide | Darija Phrases | CityGuide',
  description:
    'Learn essential Moroccan Arabic (Darija) phrases for your trip. 60+ phrases for greetings, haggling, restaurants, directions, and emergencies. Plus French phrases, food vocabulary, pronunciation guide, and regional dialect differences.',
  keywords: [
    'Moroccan Arabic',
    'Darija phrases',
    'Morocco language guide',
    'Moroccan greetings',
    'haggling phrases Morocco',
    'learn Darija',
    'Moroccan Arabic pronunciation',
    'Tamazight Berber',
    'French Morocco',
    'Morocco travel phrases',
    'Morocco numbers Arabic',
    'emergency phrases Morocco',
    'market phrases Morocco',
    'Moroccan food vocabulary',
    'Amazigh language',
    'Morocco direction words',
  ],
  openGraph: {
    title: 'Moroccan Arabic & Language Guide - Essential Darija Phrases',
    description:
      'Master 60+ essential Moroccan Arabic (Darija) phrases for travel. Greetings, haggling, dining, directions, food vocabulary, and more.',
    url: 'https://citytoursmorocco.com/language',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Arabic calligraphy on a Moroccan wall',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/language' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/language',
  name: 'Moroccan Arabic & Language Guide',
  description:
    'Comprehensive guide to languages spoken in Morocco with 60+ essential Darija phrases, food vocabulary, pronunciation tips, and regional dialect differences.',
  url: 'https://citytoursmorocco.com/language',
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
      { '@type': 'ListItem', position: 2, name: 'Language Guide', item: 'https://citytoursmorocco.com/language' },
    ],
  },
};

/* ===================================================================
   LANGUAGES OF MOROCCO
   =================================================================== */

const languages = [
  {
    name: 'Darija (Moroccan Arabic)',
    icon: MessageCircle,
    speakers: '~30 million',
    description:
      'The mother tongue of most Moroccans. Darija is a dialect of Arabic that has absorbed Berber, French, and Spanish vocabulary over centuries. It differs significantly from Modern Standard Arabic (MSA) and from other Arabic dialects, so even Arabic speakers from the Gulf or Levant may struggle to understand it. Darija is the language of daily life, pop music, comedy, and the street. While MSA is used in formal media, education, and religious contexts, Darija is what you will hear in every market, cafe, and taxi ride.',
  },
  {
    name: 'Modern Standard Arabic (MSA)',
    icon: BookOpen,
    speakers: 'Formal/official',
    description:
      'Modern Standard Arabic (Fusha) is one of Morocco\'s official languages and is used in government, formal media, religious sermons, and education. However, no Moroccan speaks MSA as their mother tongue. There is a significant gap between spoken Darija and formal MSA &mdash; think of the difference between spoken street Italian and classical Latin. If you have studied MSA, Moroccans will understand you, but they will reply in Darija. Learning Darija-specific vocabulary is far more useful for travelers.',
  },
  {
    name: 'Tamazight (Berber/Amazigh)',
    icon: Globe,
    speakers: '~10 million',
    description:
      'The language family of Morocco\'s indigenous Amazigh people, recognized as an official language in the 2011 constitution. Three main variants exist: Tarifit in the Rif Mountains of the north, Tamazight in the Middle Atlas, and Tashelhit in the High Atlas, Souss Valley, and Anti-Atlas. These variants differ enough that speakers of one may not fully understand another. The distinctive Tifinagh script is used on official signage throughout the country. Learning a few Amazigh words (such as "azul" for hello) is deeply appreciated in Berber-speaking regions.',
  },
  {
    name: 'French',
    icon: BookOpen,
    speakers: '~12 million',
    description:
      'Morocco\'s primary language of business, higher education, and government administration. A legacy of the French Protectorate (1912-1956), French remains the language of prestige and upward mobility. Most educated Moroccans are bilingual in Darija and French. Menus, road signs, and official documents are typically in both Arabic and French. Speaking basic French will open doors across the country. Many Darija words are borrowed directly from French: "tomobil" (car), "trottoir" (sidewalk), "la gare" (train station).',
  },
  {
    name: 'Spanish',
    icon: Map,
    speakers: '~5 million',
    description:
      'Widely spoken in northern Morocco, particularly in the former Spanish Protectorate zones of Tangier, Tetouan, Nador, and the Spanish enclaves of Ceuta and Melilla. Many older residents in the north are fluent, and Spanish-language media is widely consumed. If you speak Spanish but not French, you will find it especially useful in the Rif region and along the northern coast.',
  },
  {
    name: 'English',
    icon: Languages,
    speakers: 'Growing',
    description:
      'English proficiency is increasing rapidly among younger Moroccans, especially in tourism, tech, and international business. In major tourist areas like Marrakech, Fes, Essaouira, and Agadir, you will find English speakers at hotels, restaurants, and tour agencies. However, outside tourist zones and in rural areas, English is rarely spoken. Learning some Darija or French will significantly enrich your experience.',
  },
];

/* ===================================================================
   ESSENTIAL DARIJA PHRASES
   =================================================================== */

const greetings = [
  { darija: 'Salam / Salam alaykum', meaning: 'Hello / Peace be upon you', note: 'Universal greeting, always appropriate' },
  { darija: 'Wa alaykum salam', meaning: 'And peace be upon you (reply)', note: 'The proper response to salam alaykum' },
  { darija: 'Labas?', meaning: 'How are you? / Are you well?', note: 'The most common greeting after salam' },
  { darija: 'Labas, hamdullah', meaning: 'I\'m fine, thank God', note: 'Standard reply, always include hamdullah' },
  { darija: 'Kidayr(a)?', meaning: 'How are you? (m/f)', note: 'More informal version of labas' },
  { darija: 'Mzyan', meaning: 'Good / Fine', note: 'General word for good' },
  { darija: 'Shukran', meaning: 'Thank you', note: 'Essential, use constantly' },
  { darija: 'Shukran bzaf', meaning: 'Thank you very much', note: 'For extra gratitude' },
  { darija: 'Bslama', meaning: 'Goodbye', note: 'Literally: with safety' },
  { darija: 'Tsbah ala kheir', meaning: 'Good night', note: 'Said when parting in the evening' },
  { darija: 'Afak / 3afak', meaning: 'Please', note: 'Essential politeness word' },
  { darija: 'Smeh li', meaning: 'Excuse me / I\'m sorry', note: 'For apologies or getting attention' },
  { darija: 'Iyyeh / Ah', meaning: 'Yes', note: 'Iyyeh is more formal' },
  { darija: 'La', meaning: 'No', note: 'Short and direct' },
  { darija: 'La shukran', meaning: 'No thank you', note: 'Polite refusal, use in souks constantly' },
  { darija: 'Marhba', meaning: 'Welcome', note: 'Said to guests and visitors' },
  { darija: 'Bsmillah', meaning: 'In the name of God', note: 'Said before eating, starting a journey' },
  { darija: 'Hamdullah', meaning: 'Praise be to God', note: 'Said after eating, when asked how you are' },
  { darija: 'Inshallah', meaning: 'God willing', note: 'Used for future plans and hopes' },
];

const timeGreetings = [
  { darija: 'Sbah l\'kheir', meaning: 'Good morning', note: 'Use before noon; response: "Sbah n-nur" (morning of light)' },
  { darija: 'Msa l\'kheir', meaning: 'Good afternoon / evening', note: 'Use after noon; response: "Msa n-nur"' },
  { darija: 'Tsbah ala kheir', meaning: 'Good night (farewell)', note: 'When saying goodbye at night' },
  { darija: 'Allah y3awnek', meaning: 'May God help you', note: 'Said to someone who is working' },
  { darija: 'Bssa7a', meaning: 'To your health / Enjoy', note: 'Said after someone eats, bathes, or buys new clothes' },
  { darija: 'Ramadan Mubarak', meaning: 'Blessed Ramadan', note: 'During the holy month' },
  { darija: 'Aid Mabrouk', meaning: 'Blessed Eid/holiday', note: 'For religious celebrations' },
  { darija: 'Mabrouk!', meaning: 'Congratulations!', note: 'For weddings, births, achievements' },
];

const marketPhrases = [
  { darija: 'Bshhal?', meaning: 'How much?', note: 'Point at the item and ask' },
  { darija: 'Bshhal hada?', meaning: 'How much is this?', note: 'More complete version' },
  { darija: 'Ghali bzaf!', meaning: 'Too expensive!', note: 'Your most important haggling word' },
  { darija: 'Rkhis', meaning: 'Cheap', note: 'What you want the price to become' },
  { darija: 'Nqes shwiya', meaning: 'Lower the price a bit', note: 'Polite way to start negotiating' },
  { darija: 'Ma bghitsh', meaning: 'I don\'t want it', note: 'Walking away starts real negotiation' },
  { darija: 'Akhir taman?', meaning: 'Last/final price?', note: 'Signals you are serious about buying' },
  { darija: 'Wakhha', meaning: 'OK / Agreed', note: 'Seals the deal' },
  { darija: 'Ana ghi kanshuf', meaning: 'I\'m just looking', note: 'Useful to browse without commitment' },
  { darija: '3nd wahd s-sahbi rkhis mn hna', meaning: 'My friend has it cheaper', note: 'Classic haggling leverage' },
];

const restaurantPhrases = [
  { darija: 'L\'menu, 3afak', meaning: 'The menu, please', note: 'Many small places have no written menu' },
  { darija: 'L\'addition, 3afak', meaning: 'The check, please', note: 'Same word as in French' },
  { darija: 'Bnayn!', meaning: 'Delicious!', note: 'Moroccans love to hear this about their food' },
  { darija: 'Bezzaf', meaning: 'A lot / Enough', note: 'When your plate is overflowing' },
  { darija: 'Shwiya', meaning: 'A little', note: 'Useful for spice level or portions' },
  { darija: 'Ma fihsh l7em', meaning: 'Without meat', note: 'For vegetarians ordering' },
  { darija: 'L\'ma', meaning: 'Water', note: 'Always ask for bottled: l\'ma dial l\'qar3a' },
  { darija: 'Atay', meaning: 'Mint tea', note: 'The national drink, offered everywhere' },
  { darija: 'Saha!', meaning: 'Bon appetit! / Cheers!', note: 'Said before meals and when someone sneezes' },
  { darija: 'Bghit ...', meaning: 'I want / I would like ...', note: 'Point at what you want and say this' },
  { darija: 'Shbert', meaning: 'I\'m full', note: 'Essential when your host keeps serving more' },
];

const foodVocabulary = [
  { darija: 'Khobz', meaning: 'Bread', note: 'The sacred staple, served with every meal' },
  { darija: 'Tagine', meaning: 'Slow-cooked stew (and the conical pot)', note: 'Morocco\'s most famous dish' },
  { darija: 'Kuskus / Seksu', meaning: 'Couscous', note: 'Traditional Friday lunch dish' },
  { darija: 'Harira', meaning: 'Tomato-lentil soup', note: 'Traditional Ramadan iftar soup' },
  { darija: 'L7em', meaning: 'Meat (general)', note: 'Usually means beef or lamb' },
  { darija: 'Djaj', meaning: 'Chicken', note: 'The most common protein' },
  { darija: 'Hut', meaning: 'Fish', note: 'Abundant on the coast' },
  { darija: 'Khudra', meaning: 'Vegetables', note: 'Generic term for vegetables' },
  { darija: 'Fakya', meaning: 'Fruit', note: 'Morocco has excellent seasonal fruit' },
  { darija: 'Zeytun', meaning: 'Olives', note: 'Served at nearly every meal' },
  { darija: 'Zit d\'zeytun', meaning: 'Olive oil', note: 'Essential Moroccan ingredient' },
  { darija: 'Tmar', meaning: 'Dates', note: 'From the Saharan oases' },
  { darija: 'Lben', meaning: 'Buttermilk', note: 'Popular refreshing drink' },
  { darija: 'Qahwa', meaning: 'Coffee', note: 'Usually served as cafe noir or noss-noss (half-half with milk)' },
  { darija: 'Hlib', meaning: 'Milk', note: 'Noss-noss = half coffee, half milk' },
  { darija: 'Ma ward', meaning: 'Orange blossom water', note: 'Used in pastries and drinks' },
  { darija: 'Msemmen', meaning: 'Flaky layered flatbread', note: 'Common breakfast item' },
  { darija: 'Baghrir', meaning: 'Spongy semolina pancakes', note: 'Served with honey and butter' },
  { darija: 'Pastilla / Bastilla', meaning: 'Sweet-savory pastry (pigeon or chicken)', note: 'Specialty of Fes' },
  { darija: 'Mechoui', meaning: 'Slow-roasted lamb', note: 'For celebrations and feasts' },
  { darija: 'Chebakia', meaning: 'Flower-shaped sesame honey cookies', note: 'Essential during Ramadan' },
  { darija: 'Ghriba', meaning: 'Crumbly almond cookies', note: 'Common with tea' },
  { darija: 'Hrar / Harr', meaning: 'Spicy / Hot', note: 'Harr bzaf = very spicy' },
  { darija: 'Hluw', meaning: 'Sweet', note: 'Moroccans love sweet tea and pastries' },
];

const directionPhrases = [
  { darija: 'Fin ...?', meaning: 'Where is ...?', note: 'Most essential direction word' },
  { darija: 'Fin l\'hammam?', meaning: 'Where is the hammam?', note: 'Example usage' },
  { darija: 'Fin l\'funduq?', meaning: 'Where is the hotel?', note: 'Funduq or otel both work' },
  { darija: 'L\'yameen', meaning: 'Right', note: 'To the right' },
  { darija: 'L\'iser', meaning: 'Left', note: 'To the left' },
  { darija: 'Seer nishan', meaning: 'Go straight', note: 'Literally: go direct' },
  { darija: 'Qrib', meaning: 'Close / Nearby', note: 'Warning: Moroccan "close" can mean 20 minutes' },
  { darija: 'B3id', meaning: 'Far', note: 'If they say this, take a taxi' },
  { darija: 'Wqef hna', meaning: 'Stop here', note: 'Essential for taxis' },
  { darija: 'Ddi-ni l ...', meaning: 'Take me to ...', note: 'For taxi rides' },
  { darija: 'Fug / Lfoq', meaning: 'Up / Above', note: 'Useful in medina navigation' },
  { darija: 'Lt7et / Lta7t', meaning: 'Down / Below', note: 'Useful in medina navigation' },
  { darija: 'Hdaya', meaning: 'Next to / Beside', note: 'Hdaya l\'mosque = next to the mosque' },
];

const socialPhrases = [
  { darija: 'Smiti ...', meaning: 'My name is ...', note: 'Introducing yourself' },
  { darija: 'Shno smitk?', meaning: 'What is your name?', note: 'Asking someone\'s name' },
  { darija: 'Mn fin nta/nti?', meaning: 'Where are you from? (m/f)', note: 'Common icebreaker question' },
  { darija: 'Ana mn ...', meaning: 'I am from ...', note: 'Follow with your country name' },
  { darija: 'Ka-n\'tkellm shwiya d\'l-3rbiya', meaning: 'I speak a little Arabic', note: 'Managing expectations' },
  { darija: 'Ma fhemtsh', meaning: 'I don\'t understand', note: 'Polite way to say you\'re lost' },
  { darija: 'Ka-t\'tkellm l\'ingliziya?', meaning: 'Do you speak English?', note: 'Ask in Darija before switching to English' },
  { darija: '3afak, 3awed', meaning: 'Please, repeat that', note: 'When you did not catch what was said' },
  { darija: 'Kul shi bikhir?', meaning: 'Is everything OK?', note: 'Checking in with someone' },
  { darija: 'Inshallah', meaning: 'God willing / Hopefully', note: 'Used for anything in the future' },
  { darija: 'Mashi mushkil', meaning: 'No problem', note: 'Very common phrase' },
  { darija: 'Tbarkallah', meaning: 'Bless you / How wonderful', note: 'Complimenting something beautiful or impressive' },
];

const numbers = [
  { darija: 'Wahd', meaning: '1' },
  { darija: 'Juj', meaning: '2' },
  { darija: 'Tlata', meaning: '3' },
  { darija: 'Rb3a', meaning: '4' },
  { darija: 'Khmsa', meaning: '5' },
  { darija: 'Stta', meaning: '6' },
  { darija: 'Sb3a', meaning: '7' },
  { darija: 'Tmnya', meaning: '8' },
  { darija: 'Ts3ud', meaning: '9' },
  { darija: '3shra', meaning: '10' },
  { darija: 'Ashrin', meaning: '20' },
  { darija: 'Tlatin', meaning: '30' },
  { darija: 'Rb3in', meaning: '40' },
  { darija: 'Khmsin', meaning: '50' },
  { darija: 'Mya', meaning: '100' },
];

const emergencyPhrases = [
  { darija: '3afak, 3awni!', meaning: 'Please, help me!', note: 'For urgent situations' },
  { darija: 'Tabib', meaning: 'Doctor', note: 'Ask for tabib if you need medical help' },
  { darija: 'Sbitar / Lopital', meaning: 'Hospital', note: 'Lopital from French "l\'hopital"' },
  { darija: 'Bolice', meaning: 'Police', note: 'Same as French/English, widely understood' },
  { darija: 'Farmacien', meaning: 'Pharmacy', note: 'Look for the green cross sign' },
  { darija: 'Mrid(a)', meaning: 'I\'m sick (m/f)', note: 'Mrid for men, mrida for women' },
  { darija: 'Serq-ni!', meaning: 'I\'ve been robbed!', note: 'To report theft' },
  { darija: 'Safara dial ...', meaning: 'Embassy of ...', note: 'For consular emergencies' },
  { darija: 'L\'7ariq!', meaning: 'Fire!', note: 'To alert people of fire' },
  { darija: '3ndi 7asasiya', meaning: 'I have an allergy', note: 'Critical for food allergies' },
];

/* ===================================================================
   AMAZIGH/BERBER PHRASES
   =================================================================== */

const amazighPhrases = [
  { amazigh: 'Azul', meaning: 'Hello', note: 'Universal Amazigh greeting; use in Berber-speaking areas' },
  { amazigh: 'Azul fellawen (m) / fellawent (f)', meaning: 'Hello to you (plural)', note: 'Greeting a group' },
  { amazigh: 'Manzakin? / Matteggid?', meaning: 'How are you?', note: 'Varies by dialect' },
  { amazigh: 'Labas, lhamdullah', meaning: 'Fine, praise God', note: 'Same structure as Darija response' },
  { amazigh: 'Tanemmirt', meaning: 'Thank you', note: 'Essential in Berber communities' },
  { amazigh: 'Oho / Yah', meaning: 'Yes', note: 'Varies by region' },
  { amazigh: 'Uhu', meaning: 'No', note: 'Common across dialects' },
  { amazigh: 'Ar tufat', meaning: 'Goodbye (see you tomorrow)', note: 'Literally: until tomorrow' },
  { amazigh: 'Meqqar', meaning: 'Big / A lot', note: 'Useful for describing quantity' },
  { amazigh: 'Imeddukal', meaning: 'Friends', note: 'A warm word to know' },
];

/* ===================================================================
   PRONUNCIATION GUIDE
   =================================================================== */

const pronunciationGuide = [
  {
    sound: 'Kh (x)',
    example: 'kheir (good)',
    description: 'Like clearing your throat, similar to the Scottish "loch" or German "Bach." A harsh, guttural sound from the back of the throat. Not like English "k".',
  },
  {
    sound: 'Gh (ghain)',
    example: 'ghali (expensive)',
    description: 'A gargling sound from deep in the throat, like the French "r" in "Paris" but deeper. Think of gargling water gently.',
  },
  {
    sound: '3 (ain)',
    example: '3afak (please)',
    description: 'The number 3 represents the Arabic letter ain, a deep throat constriction with no English equivalent. Squeeze the back of your throat as if choking slightly. Practice saying "aaah" from deep in the throat.',
  },
  {
    sound: '7 (ha)',
    example: '7amdullah (praise God)',
    description: 'A heavy, breathy "h" from deep in the throat, much stronger than English "h." Like fogging a mirror but with more force from the pharynx.',
  },
  {
    sound: 'Q (qaf)',
    example: 'qrib (close)',
    description: 'A "k" sound produced at the very back of the throat, deeper than regular "k." In some Moroccan dialects, this becomes a glottal stop (a catch in the throat).',
  },
  {
    sound: 'R (rolled)',
    example: 'rkhis (cheap)',
    description: 'Always rolled/trilled, similar to Spanish "rr." Tap the tip of your tongue against the ridge behind your upper front teeth.',
  },
  {
    sound: 'Sh',
    example: 'shukran (thanks)',
    description: 'Like English "sh" in "shoe." This one is easy for English speakers.',
  },
  {
    sound: 'Double consonants',
    example: 'bzzaf (a lot)',
    description: 'When you see double consonants, hold the sound longer. "Bzzaf" buzzes the "z" noticeably longer than a single letter would.',
  },
];

/* ===================================================================
   HAGGLING PHRASES
   =================================================================== */

const hagglingPhrases = [
  { phrase: 'Bshhal hada?', translation: 'How much is this?', tip: 'Always ask before touching or showing too much interest' },
  { phrase: 'Ghali bzaf! Nqes shwiya.', translation: 'Too expensive! Lower it a bit.', tip: 'Look shocked at the first price, even if it seems fair' },
  { phrase: 'Ana ghi kanshuf.', translation: 'I\'m just looking.', tip: 'Useful to browse without commitment' },
  { phrase: 'Ma 3ndish flus bzaf.', translation: 'I don\'t have much money.', tip: 'A classic haggling tactic understood worldwide' },
  { phrase: '3nd wahd s-sahbi rkhis mn hna.', translation: 'My friend has it cheaper.', tip: 'Competition is real leverage in souks' },
  { phrase: 'Akhir taman, 3afak.', translation: 'Final price, please.', tip: 'Use when you are ready to seriously negotiate' },
  { phrase: 'Nkhelles ... dirham.', translation: 'I\'ll pay ... dirhams.', tip: 'Counter-offer at 30-40% of their asking price' },
  { phrase: 'Ila shrit juj, nqes li?', translation: 'If I buy two, will you reduce?', tip: 'Bulk discounts are common and expected' },
  { phrase: 'Shukran, ghadi nmshi.', translation: 'Thanks, I\'ll leave.', tip: 'Walking away is the most powerful move' },
  { phrase: 'Wakhha, mttafqin!', translation: 'OK, deal!', tip: 'Shake hands to seal the deal with a smile' },
];

/* ===================================================================
   FRENCH USEFUL PHRASES
   =================================================================== */

const frenchPhrases = [
  { french: 'Bonjour / Bonsoir', meaning: 'Good morning / Good evening' },
  { french: 'Merci beaucoup', meaning: 'Thank you very much' },
  { french: 'S\'il vous plait', meaning: 'Please' },
  { french: 'Excusez-moi', meaning: 'Excuse me' },
  { french: 'Parlez-vous anglais?', meaning: 'Do you speak English?' },
  { french: 'Je ne comprends pas', meaning: 'I don\'t understand' },
  { french: 'Combien?', meaning: 'How much?' },
  { french: 'C\'est trop cher', meaning: 'It\'s too expensive' },
  { french: 'L\'addition, s\'il vous plait', meaning: 'The check, please' },
  { french: 'Ou est ...?', meaning: 'Where is ...?' },
  { french: 'A gauche / A droite', meaning: 'To the left / To the right' },
  { french: 'Tout droit', meaning: 'Straight ahead' },
  { french: 'Je voudrais ...', meaning: 'I would like ...' },
  { french: 'La gare / L\'aeroport', meaning: 'The train station / The airport' },
  { french: 'Je suis perdu(e)', meaning: 'I\'m lost (m/f)' },
  { french: 'Appelez la police', meaning: 'Call the police' },
  { french: 'Une table pour deux', meaning: 'A table for two' },
  { french: 'Je suis vegetarien(ne)', meaning: 'I am vegetarian (m/f)' },
];

/* ===================================================================
   BODY LANGUAGE & GESTURES
   =================================================================== */

const gestures = [
  {
    gesture: 'Right Hand for Everything',
    description: 'Use your right hand for greetings, eating, giving and receiving items, and touching food. The left hand is considered unclean in Moroccan culture. This is one of the most important social rules to follow.',
  },
  {
    gesture: 'Hand on Heart After Handshake',
    description: 'After shaking hands, Moroccans often place their right hand over their heart. This gesture signifies sincerity and warmth. Mirroring this gesture shows cultural awareness and is deeply appreciated.',
  },
  {
    gesture: 'Touching Fingers to Lips',
    description: 'Bringing the fingertips together and touching them to the lips means the food is delicious. This non-verbal compliment to the cook is universally understood and always brings smiles.',
  },
  {
    gesture: 'Beckoning Palm Down',
    description: 'Moroccans beckon by extending the arm with the palm facing down and waving the fingers toward themselves. The Western palm-up beckoning gesture can seem rude or suggestive.',
  },
  {
    gesture: 'Personal Space',
    description: 'Moroccans stand closer together during conversation than most Westerners are accustomed to. Same-gender friends often walk arm-in-arm or hold hands, which is a sign of friendship and carries no romantic connotation.',
  },
  {
    gesture: 'Showing Shoe Soles',
    description: 'Avoid showing the soles of your shoes or feet to others, especially while sitting. The bottom of the foot is considered the dirtiest part of the body, and pointing it at someone is an insult.',
  },
  {
    gesture: 'Head Nod vs. Shake',
    description: 'A quick upward head tilt often means "no" in Morocco, which can confuse Westerners who interpret upward head movements as acknowledgment or agreement. A slow nod forward means yes.',
  },
  {
    gesture: 'Thumbs Up',
    description: 'The thumbs up gesture is generally understood as positive in Morocco, especially among younger people familiar with Western culture. However, in rural or conservative areas, it can occasionally be interpreted differently. A smile is always the safest universal positive signal.',
  },
];

/* ===================================================================
   LANGUAGE APPS & RESOURCES
   =================================================================== */

const resources = [
  {
    name: 'Pimsleur Moroccan Arabic',
    type: 'Audio Course',
    description: 'The gold standard for learning spoken Darija. Pimsleur\'s spaced-repetition audio method is ideal for travelers who want to learn conversational phrases. The Moroccan Arabic course covers greetings, shopping, dining, and travel scenarios.',
    url: 'https://www.pimsleur.com',
  },
  {
    name: 'Anki (Darija Decks)',
    type: 'Flashcard App',
    description: 'Free, open-source flashcard app with community-created Moroccan Arabic decks. Search for "Darija" or "Moroccan Arabic" in the shared deck library. The spaced repetition system makes vocabulary stick.',
    url: 'https://apps.ankiweb.net',
  },
  {
    name: 'Peace Corps Darija Course',
    type: 'Free PDF',
    description: 'A comprehensive free course developed by the US Peace Corps for volunteers posted to Morocco. Covers Darija grammar, vocabulary, and cultural context. Available as a free PDF download.',
    url: 'https://www.livelingua.com/peace-corps-moroccan-arabic-course',
  },
  {
    name: 'Italki',
    type: 'Tutor Platform',
    description: 'Book one-on-one lessons with native Moroccan Arabic speakers. Even a few sessions before your trip can dramatically improve your pronunciation and confidence. Rates for Darija tutors are very affordable.',
    url: 'https://www.italki.com',
  },
  {
    name: 'Moroccan Arabic Phrasebook (Lonely Planet)',
    type: 'Phrasebook',
    description: 'A compact physical phrasebook you can carry through the medina. Covers essential phrases organized by situation (hotel, restaurant, shopping, emergencies) with phonetic pronunciations.',
    url: 'https://www.lonelyplanet.com',
  },
];

/* ===================================================================
   REGIONAL DIALECTS
   =================================================================== */

const dialects = [
  {
    region: 'Casablanca & Rabat',
    description: 'The "standard" Darija that most Moroccans understand. Heavily influenced by French, with many French words integrated into daily speech. "Tomobil" (car), "trottoir" (sidewalk), and "la gare" (train station) are used interchangeably with Arabic equivalents.',
  },
  {
    region: 'Marrakech & Southern Morocco',
    description: 'Retains more Berber (Tashelhit) influence and vocabulary. Spoken slightly faster with distinct intonation patterns. Some Darija words differ: "seer" (go) may become "mshi," and vowel sounds tend to be more open.',
  },
  {
    region: 'Fes & Meknes',
    description: 'Considered the most "refined" Darija by some Moroccans due to the cities\' roles as intellectual and cultural capitals. Closer to classical Arabic in some constructions. The Fassi accent is recognizable throughout Morocco.',
  },
  {
    region: 'Northern Morocco (Tangier, Tetouan)',
    description: 'Heavily influenced by Spanish rather than French. Many Spanish loanwords: "simana" (week, from semana), "kozhina" (kitchen, from cocina). The accent is distinct, with more emphasis on certain consonants. Tarifit Berber is also widely spoken in the Rif Mountains.',
  },
  {
    region: 'Eastern Morocco (Oujda, Nador)',
    description: 'Shows significant Algerian Arabic influence due to proximity to the border. Some words and expressions are shared with Algerian dialect and may puzzle Moroccans from the west. Tarifit Berber is the mother tongue of many people in this region.',
  },
  {
    region: 'Saharan Morocco (Errachidia, Zagora)',
    description: 'The Hassaniya dialect, related to Mauritanian Arabic, is spoken in parts of the deep south. Darija here has unique vocabulary and a slower, more melodic cadence. Berber (Tamazight) is widely spoken in oasis communities of the Draa and Ziz valleys.',
  },
];

/* ===================================================================
   PHRASE TABLE COMPONENT
   =================================================================== */

function PhraseTable({
  phrases,
  icon,
  title,
  columns,
}: {
  phrases: { darija?: string; french?: string; amazigh?: string; meaning: string; note?: string }[];
  icon: React.ReactNode;
  title: string;
  columns: { key: string; label: string }[];
}) {
  return (
    <div className="card-moroccan overflow-hidden">
      <div className="flex items-center gap-3 p-5 border-b border-[var(--border-primary)]">
        <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
          {title}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--surface-muted)]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="text-left px-5 py-3 font-semibold text-[var(--text-primary)] whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {phrases.map((phrase, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? '' : 'bg-[var(--surface-muted)]/50'}
              >
                <td className="px-5 py-3 font-semibold text-[var(--color-primary)] whitespace-nowrap">
                  {phrase.darija ?? phrase.french ?? phrase.amazigh}
                </td>
                <td className="px-5 py-3 text-[var(--text-primary)]">
                  {phrase.meaning}
                </td>
                {phrase.note !== undefined && (
                  <td className="px-5 py-3 text-[var(--text-secondary)] text-xs">
                    {phrase.note}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===================================================================
   PAGE COMPONENT (Server)
   =================================================================== */

export default function LanguagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Arabic calligraphy and Moroccan tilework"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Language Guide</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Communication &amp; Culture
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Arabic &amp; Language Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Even a few words of Darija will transform your experience in Morocco. Learn the essential
              phrases, food vocabulary, pronunciation tips, and cultural context to connect with locals on a deeper level.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is one of the most linguistically diverse countries in the world. Most Moroccans speak at least
              two languages fluently, and many speak three or four. The primary language of daily life is Darija
              (Moroccan Arabic), a unique dialect that has absorbed vocabulary from Berber, French, Spanish, and even
              Portuguese over the centuries. Understanding this linguistic landscape is essential for meaningful travel.
            </p>
            <p>
              You do not need to become fluent in Darija to have an extraordinary time in Morocco. But learning
              even a handful of phrases &mdash; "Salam," "Shukran," "Labas?" &mdash; will earn you genuine warmth,
              better prices in the souk, and doors opened that remain closed to those who only speak English.
              Moroccans deeply appreciate any effort to speak their language, and your attempts will be met with
              encouragement, smiles, and often enthusiastic language lessons from shopkeepers and taxi drivers alike.
            </p>
          </div>
        </div>
      </section>

      {/* ── Languages of Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Languages className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Languages of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is a remarkably multilingual country. Most Moroccans speak at least two languages,
              and many speak three or four fluently. Understanding which language to use where will
              significantly enhance your travels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="card-moroccan p-6 md:p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <lang.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {lang.name}
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-3">
                  {lang.speakers} speakers
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {lang.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essential Darija Phrases ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MessageCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essential Darija Phrases
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Over 60 phrases organized by situation. You do not need to memorize all of them &mdash;
              even learning salam, shukran, and bslama will earn you genuine warmth from every Moroccan you meet.
            </p>
          </div>

          <div className="space-y-8">
            <PhraseTable
              phrases={greetings}
              icon={<MessageCircle className="w-5 h-5" />}
              title="Greetings &amp; Basics"
              columns={[
                { key: 'darija', label: 'Darija' },
                { key: 'meaning', label: 'English' },
                { key: 'note', label: 'Usage Tip' },
              ]}
            />

            <PhraseTable
              phrases={timeGreetings}
              icon={<Clock className="w-5 h-5" />}
              title="Time-of-Day Greetings &amp; Blessings"
              columns={[
                { key: 'darija', label: 'Darija' },
                { key: 'meaning', label: 'English' },
                { key: 'note', label: 'Usage Tip' },
              ]}
            />

            <PhraseTable
              phrases={socialPhrases}
              icon={<Heart className="w-5 h-5" />}
              title="Social &amp; Conversational"
              columns={[
                { key: 'darija', label: 'Darija' },
                { key: 'meaning', label: 'English' },
                { key: 'note', label: 'Usage Tip' },
              ]}
            />

            <PhraseTable
              phrases={marketPhrases}
              icon={<ShoppingBag className="w-5 h-5" />}
              title="At the Market / Souk"
              columns={[
                { key: 'darija', label: 'Darija' },
                { key: 'meaning', label: 'English' },
                { key: 'note', label: 'Usage Tip' },
              ]}
            />

            <PhraseTable
              phrases={restaurantPhrases}
              icon={<UtensilsCrossed className="w-5 h-5" />}
              title="At Restaurants &amp; Cafes"
              columns={[
                { key: 'darija', label: 'Darija' },
                { key: 'meaning', label: 'English' },
                { key: 'note', label: 'Usage Tip' },
              ]}
            />

            <PhraseTable
              phrases={directionPhrases}
              icon={<MapPin className="w-5 h-5" />}
              title="Directions &amp; Transportation"
              columns={[
                { key: 'darija', label: 'Darija' },
                { key: 'meaning', label: 'English' },
                { key: 'note', label: 'Usage Tip' },
              ]}
            />

            {/* Numbers Grid */}
            <div className="card-moroccan overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-[var(--border-primary)]">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Hash className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Numbers (1-10, plus useful tens)
                </h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-0">
                {numbers.map((num, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center py-4 px-3 border-b border-r border-[var(--border-primary)] ${
                      i % 2 === 0 ? 'bg-[var(--surface-muted)]/50' : ''
                    }`}
                  >
                    <span className="text-2xl font-bold text-[var(--color-primary)]">{num.meaning}</span>
                    <span className="text-sm text-[var(--text-primary)] font-medium mt-1">{num.darija}</span>
                  </div>
                ))}
              </div>
            </div>

            <PhraseTable
              phrases={emergencyPhrases}
              icon={<AlertCircle className="w-5 h-5" />}
              title="Emergencies &amp; Health"
              columns={[
                { key: 'darija', label: 'Darija' },
                { key: 'meaning', label: 'English' },
                { key: 'note', label: 'Usage Tip' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Food Vocabulary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Coffee className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food &amp; Drink Vocabulary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan cuisine is one of the world&apos;s great culinary traditions. Knowing these food words will
              help you navigate menus, order with confidence, and appreciate the dishes placed before you.
            </p>
          </div>

          <PhraseTable
            phrases={foodVocabulary}
            icon={<UtensilsCrossed className="w-5 h-5" />}
            title="Essential Food &amp; Drink Words"
            columns={[
              { key: 'darija', label: 'Darija' },
              { key: 'meaning', label: 'English' },
              { key: 'note', label: 'Context' },
            ]}
          />
        </div>
      </section>

      {/* ── Amazigh/Berber Phrases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Amazigh (Berber) Phrases
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              In Berber-speaking regions &mdash; the Atlas Mountains, the Souss Valley, the Rif &mdash; knowing even
              a few Amazigh words will earn enormous respect and genuine delight. "Azul" (hello) and "Tanemmirt"
              (thank you) are the two most important.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PhraseTable
              phrases={amazighPhrases}
              icon={<Compass className="w-5 h-5" />}
              title="Essential Amazigh Phrases"
              columns={[
                { key: 'amazigh', label: 'Amazigh' },
                { key: 'meaning', label: 'English' },
                { key: 'note', label: 'Usage Tip' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Pronunciation Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Volume2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Pronunciation Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Darija contains several sounds not found in English. Do not worry about perfection &mdash;
              Moroccans deeply appreciate any effort and will gently help you improve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pronunciationGuide.map((item) => (
              <div key={item.sound} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-lg font-mono">
                    {item.sound.split(' ')[0]}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">{item.sound}</h3>
                    <p className="text-sm text-[var(--color-primary)] italic">{item.example}</p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Haggling Phrases ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4">
              <Handshake className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Haggling Phrases
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Haggling in Moroccan souks is an art form and a social ritual, not a confrontation.
              Use these phrases with a smile, maintain good humor, and enjoy the exchange.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {hagglingPhrases.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-white font-semibold">{item.phrase}</p>
                    <p className="text-white/80 text-sm mt-1">{item.translation}</p>
                    <p className="text-white/60 text-xs mt-2 italic">{item.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── French Useful Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              French Useful Phrases
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              French is widely understood throughout Morocco. If you already speak French, these phrases
              will serve you well. If you speak neither Darija nor French, French is the easier backup to learn.
            </p>
          </div>

          <PhraseTable
            phrases={frenchPhrases.map((p) => ({ french: p.french, meaning: p.meaning }))}
            icon={<BookOpen className="w-5 h-5" />}
            title="Essential French for Morocco"
            columns={[
              { key: 'french', label: 'French' },
              { key: 'meaning', label: 'English' },
            ]}
          />
        </div>
      </section>

      {/* ── Body Language & Gestures ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Hand className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Body Language &amp; Gestures
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Non-verbal communication carries enormous weight in Morocco. These 8 gestures and customs
              will help you avoid misunderstandings and show cultural respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {gestures.map((item, i) => (
              <div key={i} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                      {item.gesture}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Language Apps & Resources ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Smartphone className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Language Apps &amp; Resources
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Start learning before your trip. Even a few weeks of practice will make a dramatic difference
              in how deeply you connect with Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res) => (
              <div key={res.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                    {res.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {res.name}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {res.description}
                </p>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  Visit Resource <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional Dialects ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Regional Dialects
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Darija varies noticeably across Morocco. While all Moroccans understand each other,
              you may notice different vocabulary, accents, and loanwords depending on where you travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dialects.map((dialect) => (
              <div key={dialect.region} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {dialect.region}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {dialect.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Connect With Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Language is the gateway to authentic cultural experiences. Pair your new phrases with
            our etiquette guide to travel Morocco with confidence and respect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/etiquette"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Hand className="w-4 h-4" /> Etiquette Guide
            </Link>
            <Link
              href="/culture"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Culture &amp; Traditions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

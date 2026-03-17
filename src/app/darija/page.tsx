import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  ChevronRight,
  Home,
  Info,
  Globe,
  BookOpen,
  MessageCircle,
  Languages,
  Volume2,
  GraduationCap,
  Heart,
  Coffee,
  ShoppingBag,
  Car,
  Utensils,
  AlertTriangle,
  Phone,
  Shield,
  Smile,
  Users,
  Handshake,
  Star,
  Compass,
  Navigation,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Arabic (Darija) Phrasebook | Essential Phrases for Travelers',
  description:
    'The most comprehensive Moroccan Arabic (Darija) phrasebook for travelers. Learn essential greetings, haggling phrases, food vocabulary, emergency words, pronunciation guide, numbers, cultural expressions, and regional variations. Includes French and Amazigh phrases useful in Morocco.',
  keywords: [
    'Moroccan Arabic',
    'Darija phrasebook',
    'Darija phrases',
    'Moroccan language',
    'learn Darija',
    'Moroccan Arabic phrases',
    'Morocco travel phrases',
    'Darija greetings',
    'haggling phrases Morocco',
    'Moroccan numbers',
    'Darija pronunciation',
    'Moroccan Arabic for travelers',
    'Darija food vocabulary',
    'emergency phrases Morocco',
    'Moroccan cultural expressions',
    'Moroccan proverbs',
    'Amazigh phrases',
    'Berber language Morocco',
    'French phrases Morocco',
    'Darija transliteration',
    'Morocco language guide',
    'Arabic dialect Morocco',
    'Moroccan slang',
    'Darija numbers system',
    'Morocco communication',
    'Salam alaykum',
    'Labas hamdullah',
    'Bshhal hada',
    'Moroccan Arabic lessons',
    'Darija apps',
    'learn Moroccan Arabic online',
  ],
  openGraph: {
    title: 'Moroccan Arabic (Darija) Phrasebook - CityGuide Morocco',
    description:
      'Complete Darija phrasebook for Morocco travelers. Essential greetings, shopping phrases, food vocabulary, emergency words, pronunciation guide, and cultural expressions.',
    url: `${BASE_URL}/darija`,
    images: [
      {
        url: `${BASE_URL}/images/hero-darija.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan Arabic calligraphy and traditional architecture representing the Darija language',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Arabic (Darija) Phrasebook | Essential Travel Phrases',
    description:
      'Learn essential Moroccan Arabic (Darija) phrases for your Morocco trip. Greetings, haggling, food, transport, emergencies, and cultural expressions.',
    images: [`${BASE_URL}/images/hero-darija.webp`],
  },
  alternates: { canonical: `${BASE_URL}/darija` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const faqItems = [
  {
    question: 'What is Darija and how is it different from Modern Standard Arabic?',
    answer:
      'Darija is the everyday spoken Arabic dialect of Morocco. While Modern Standard Arabic (MSA or Fusha) is used in formal contexts like news broadcasts, government, and education, Darija is what Moroccans actually speak at home, in shops, and on the street. Darija incorporates significant Amazigh (Berber), French, and Spanish vocabulary, making it largely unintelligible to speakers of Gulf Arabic or Egyptian Arabic without exposure.',
  },
  {
    question: 'Can I get by with just French in Morocco?',
    answer:
      'French is widely spoken in Moroccan cities, especially in business, restaurants, and tourist areas. In Marrakech, Fes, Casablanca, and Rabat, you can generally communicate in French. However, in rural areas, smaller towns, and the deep south, French proficiency drops significantly. Even in cities, speaking a few Darija phrases earns enormous goodwill and better prices in souks.',
  },
  {
    question: 'What do the numbers 3, 7, and 9 mean in Darija transliteration?',
    answer:
      'When Darija is written in Latin script (common in texting and online), numbers represent Arabic sounds that have no English equivalent. 3 represents the letter ain (a deep throaty sound), 7 represents an emphatic H sound (ha), 9 represents the qaf sound (a deep K from the throat), and 2 represents the hamza (a glottal stop). For example, "3afak" means "please" and "7anut" means "shop."',
  },
  {
    question: 'Is Darija the same across all of Morocco?',
    answer:
      'No, Darija varies by region. Northern Darija (around Tangier, Tetouan, Nador) has heavy Spanish influence and distinct pronunciation. Southern Darija is spoken more slowly with Amazigh influence. Urban dialects (Casablanca, Rabat) incorporate more French. The Fassi (Fes) dialect is considered prestigious. Despite these differences, all Darija speakers can understand each other.',
  },
  {
    question: 'What languages are spoken in Morocco besides Darija?',
    answer:
      'Morocco is remarkably multilingual. Darija (Moroccan Arabic) is the most widely spoken language. Amazigh/Tamazight (Berber) has three main varieties: Tachelhit in the south, Tamazight in the Middle Atlas, and Tarifit in the Rif mountains. French is the primary language of business and higher education. Spanish is common in the north (Tangier, Tetouan, Nador). English is growing rapidly, especially among younger Moroccans and in tourism.',
  },
  {
    question: 'How important is haggling in Morocco and what phrases do I need?',
    answer:
      'Haggling is expected in souks (traditional markets) and with street vendors. Fixed-price shops and supermarkets do not require haggling. Essential phrases include "Bshhal hada?" (How much is this?), "Ghali bzaf" (Too expensive), "Nqes shwiya" (Reduce a little), and "Akhir taman" (Final price). Always start at about 30-40% of the asking price and negotiate from there. Stay friendly and be prepared to walk away.',
  },
  {
    question: 'Should I learn Arabic script to visit Morocco?',
    answer:
      'No, you do not need to learn Arabic script for a Morocco visit. Most tourist signage is in Arabic, French, and sometimes English. Moroccans themselves often write Darija in Latin letters (with numbers for special sounds) when texting or on social media. Learning a few key phrases in transliterated Darija is far more useful than learning the Arabic alphabet for a short trip.',
  },
  {
    question: 'What is the best way to learn Darija before visiting Morocco?',
    answer:
      'Start with apps like Mondly Arabic (has a Moroccan dialect option), or search YouTube for "Darija for beginners." The Peace Corps Morocco language guide is an excellent free resource. Practice greetings and shopping phrases first, as these are the most immediately useful. Moroccan podcasts and music (like Nass El Ghiwane) help train your ear. Once in Morocco, Moroccans are extremely encouraging and patient with anyone attempting their language.',
  },
  {
    question: 'What is the polite way to greet someone in Morocco?',
    answer:
      'The standard greeting is "Salam alaykum" (Peace be upon you), to which the reply is "Wa alaykum salam." You can follow this with "Labas?" (How are you?), answered with "Labas, hamdullah" (Fine, praise God). When meeting someone of the same gender, handshakes are common. For opposite genders, wait for the Moroccan person to extend their hand first. Adding "Bslama" (Goodbye/Go in peace) when leaving shows respect.',
  },
  {
    question: 'Are there any words or gestures I should avoid in Morocco?',
    answer:
      'Avoid using your left hand for greetings, eating, or passing items, as it is considered unclean. Do not point at people with your index finger -- use your whole hand instead. The thumbs-up gesture is fine, but avoid showing the soles of your shoes toward someone. Language-wise, avoid using "Inshallah" (God willing) sarcastically. When someone says "Bismillah" (In the name of God) before eating or entering, it is a sign of respect, not something to joke about.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${BASE_URL}/darija`,
      headline: 'Moroccan Arabic (Darija) Phrasebook: Essential Phrases for Travelers',
      description:
        'Comprehensive Darija phrasebook with essential greetings, shopping phrases, food vocabulary, emergency words, pronunciation guide, cultural expressions, and regional variations.',
      url: `${BASE_URL}/darija`,
      image: `${BASE_URL}/images/hero-darija.webp`,
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
      datePublished: '2025-06-01',
      dateModified: '2026-03-15',
      mainEntityOfPage: `${BASE_URL}/darija`,
      isPartOf: {
        '@type': 'WebSite',
        name: 'CityGuide Morocco',
        url: BASE_URL,
      },
      about: [
        { '@type': 'Language', name: 'Moroccan Arabic (Darija)' },
        { '@type': 'Country', name: 'Morocco' },
      ],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Darija Phrasebook', item: `${BASE_URL}/darija` },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   PHRASE DATA
   ═══════════════════════════════════════════════════════════════ */

type Phrase = {
  darija: string;
  english: string;
  phonetic: string;
};

const greetingPhrases: Phrase[] = [
  { darija: 'Salam alaykum', english: 'Peace be upon you (Hello)', phonetic: 'sah-LAHM ah-LAY-koom' },
  { darija: 'Wa alaykum salam', english: 'And upon you peace (Reply)', phonetic: 'wah ah-LAY-koom sah-LAHM' },
  { darija: 'Labas?', english: 'How are you? / Are you well?', phonetic: 'lah-BASS' },
  { darija: 'Labas, hamdullah', english: 'Fine, praise God', phonetic: 'lah-BASS, ham-DOO-lah' },
  { darija: 'Bslama', english: 'Goodbye (Go in peace)', phonetic: 'b-SLAH-mah' },
  { darija: 'Sbah lkhir', english: 'Good morning', phonetic: 'SBAH l-KHEER' },
  { darija: 'Msa lkhir', english: 'Good evening', phonetic: 'MSAH l-KHEER' },
  { darija: 'Tsbah ala khir', english: 'Good night (sleep well)', phonetic: 'ts-BAH ah-lah KHEER' },
  { darija: 'Shukran', english: 'Thank you', phonetic: 'SHOO-krahn' },
  { darija: 'Shukran bzaf', english: 'Thank you very much', phonetic: 'SHOO-krahn b-ZAHF' },
  { darija: 'Afak / 3afak', english: 'Please', phonetic: 'ah-FAHK / ah-FAHK' },
  { darija: 'La shukran ala wajib', english: "You're welcome (No thanks needed)", phonetic: 'lah SHOO-krahn ah-lah WAH-jib' },
  { darija: 'Smahli', english: 'Excuse me / Sorry', phonetic: 'SMAH-lee' },
  { darija: 'Iyeh', english: 'Yes', phonetic: 'ee-YEH' },
  { darija: 'La', english: 'No', phonetic: 'LAH' },
  { darija: 'Merhba', english: 'Welcome', phonetic: 'MEHR-bah' },
  { darija: 'Bismillah', english: 'In the name of God (before eating/entering)', phonetic: 'bis-MIL-lah' },
  { darija: 'Inshallah', english: 'God willing', phonetic: 'in-SHAH-lah' },
  { darija: 'Hamdullah', english: 'Praise God / Thank God', phonetic: 'ham-DOO-lah' },
  { darija: 'Kifash?', english: 'How?', phonetic: 'kee-FASH' },
];

const numberPhrases: Phrase[] = [
  { darija: 'Wahed', english: '1 (One)', phonetic: 'WAH-hed' },
  { darija: 'Jouj', english: '2 (Two)', phonetic: 'JOOJ' },
  { darija: 'Tlata', english: '3 (Three)', phonetic: 'TLAH-tah' },
  { darija: 'Reb3a', english: '4 (Four)', phonetic: 'REB-ah' },
  { darija: 'Khmsa', english: '5 (Five)', phonetic: 'KHEM-sah' },
  { darija: 'Stta', english: '6 (Six)', phonetic: 'STAH' },
  { darija: 'Seb3a', english: '7 (Seven)', phonetic: 'SEB-ah' },
  { darija: 'Tmnya', english: '8 (Eight)', phonetic: 'TMEN-yah' },
  { darija: 'Tes3ud', english: '9 (Nine)', phonetic: 'TES-ood' },
  { darija: 'Ashra', english: '10 (Ten)', phonetic: 'ASH-rah' },
  { darija: 'Ashrin', english: '20 (Twenty)', phonetic: 'ash-REEN' },
  { darija: 'Khamsin', english: '50 (Fifty)', phonetic: 'kham-SEEN' },
  { darija: 'Mya', english: '100 (One hundred)', phonetic: 'MEE-yah' },
  { darija: 'Alf', english: '1,000 (One thousand)', phonetic: 'AHLF' },
];

const shoppingPhrases: Phrase[] = [
  { darija: 'Bshhal hada?', english: 'How much is this?', phonetic: 'b-SHAHL HAH-dah' },
  { darija: 'Ghali bzaf!', english: 'Too expensive!', phonetic: 'GAH-lee b-ZAHF' },
  { darija: 'Nqes shwiya', english: 'Reduce a little', phonetic: 'N-KESS shWEE-yah' },
  { darija: 'Akhir taman?', english: 'Final price?', phonetic: 'AH-kheer tah-MAHN' },
  { darija: 'Mabeghitch', english: "I don't want it", phonetic: 'mah-BEGH-eetch' },
  { darija: 'Wakha', english: 'OK / Agreed', phonetic: 'WAH-khah' },
  { darija: 'Mezyan', english: 'Good / Nice', phonetic: 'mez-YAHN' },
  { darija: 'Kbir bzaf', english: 'Too big', phonetic: 'k-BEER b-ZAHF' },
  { darija: 'Sghir bzaf', english: 'Too small', phonetic: 's-GHEER b-ZAHF' },
  { darija: 'Andek shi haja khra?', english: 'Do you have something else?', phonetic: 'AHN-dek shee HAH-jah KHRA' },
  { darija: 'Bghit ghir nshuf', english: 'I just want to look', phonetic: 'BGHEET gheer n-SHOOF' },
  { darija: 'Fin kayn l7anut?', english: 'Where is the shop?', phonetic: 'FEEN KAY-en l-ha-NOOT' },
  { darija: 'Hadi jdida?', english: 'Is this new?', phonetic: 'HAH-dee j-DEE-dah' },
  { darija: 'Hadi mzyana', english: 'This is nice / good quality', phonetic: 'HAH-dee m-ZYAH-nah' },
];

const transportPhrases: Phrase[] = [
  { darija: 'Fin kayn...?', english: 'Where is...?', phonetic: 'FEEN KAY-en' },
  { darija: 'Bghit nmshi l...', english: 'I want to go to...', phonetic: 'BGHEET NEM-shee l...' },
  { darija: 'Bshhal l...?', english: 'How much to...?', phonetic: 'b-SHAHL l...' },
  { darija: 'Wqef hna', english: 'Stop here', phonetic: 'W-KEF h-NAH' },
  { darija: 'Safi, wasalna', english: "That's it, we've arrived", phonetic: 'SAH-fee, wah-SAHL-nah' },
  { darija: 'B3id?', english: 'Is it far?', phonetic: 'b-AHEED' },
  { darija: 'Qrib', english: 'Close / Near', phonetic: 'KREEB' },
  { darija: 'Limen', english: 'Right', phonetic: 'lee-MEN' },
  { darija: 'Lissar', english: 'Left', phonetic: 'lee-SAHR' },
  { darija: 'Neeshan', english: 'Straight ahead', phonetic: 'nee-SHAHN' },
  { darija: 'Taxi!', english: 'Taxi!', phonetic: 'TAK-see' },
  { darija: 'Tobis / Kar', english: 'Bus', phonetic: 'TOH-bees / KAHR' },
  { darija: 'Tran / Train', english: 'Train', phonetic: 'TRAHN' },
  { darija: 'Mashi hna', english: 'Not here', phonetic: 'MAH-shee h-NAH' },
  { darija: 'Shtah dial taxi?', english: 'Where is the taxi stand?', phonetic: 'SHTAH dee-YAHL TAK-see' },
];

const foodPhrases: Phrase[] = [
  { darija: 'Menu afak', english: 'Menu please', phonetic: 'meh-NOO ah-FAHK' },
  { darija: 'Bghit...', english: 'I want...', phonetic: 'BGHEET...' },
  { darija: 'Hada bnin!', english: 'This is delicious!', phonetic: 'HAH-dah b-NEEN' },
  { darija: 'Lhsab afak', english: 'The bill please', phonetic: 'l-HSAB ah-FAHK' },
  { darija: 'Bla lhem', english: 'Without meat', phonetic: 'BLAH l-HEM' },
  { darija: 'Ma fihash lhem', english: "It doesn't have meat", phonetic: 'mah fee-HASH l-HEM' },
  { darija: 'Atay', english: 'Mint tea', phonetic: 'ah-TAY' },
  { darija: 'Qahwa', english: 'Coffee', phonetic: 'QAH-wah' },
  { darija: 'Qahwa b lhlib', english: 'Coffee with milk', phonetic: 'QAH-wah b l-HLEEB' },
  { darija: 'Lma', english: 'Water', phonetic: 'l-MAH' },
  { darija: 'Khobz', english: 'Bread', phonetic: 'KHOBZ' },
  { darija: 'Hlib', english: 'Milk', phonetic: 'HLEEB' },
  { darija: 'Zit zitun', english: 'Olive oil', phonetic: 'ZEET zee-TOON' },
  { darija: 'Tajine', english: 'Tagine (stew)', phonetic: 'tah-JEEN' },
  { darija: 'Kuskus', english: 'Couscous', phonetic: 'KOOS-koos' },
  { darija: 'Msemen', english: 'Layered flatbread', phonetic: 'm-SEH-men' },
  { darija: 'Baghrir', english: 'Thousand-hole pancake', phonetic: 'bah-GREER' },
  { darija: 'Harira', english: 'Lentil and tomato soup', phonetic: 'hah-REE-rah' },
  { darija: 'Ana ma kanakoulsh...', english: "I don't eat...", phonetic: 'AH-nah mah kah-nah-KOOLSH' },
  { darija: 'Haram', english: 'Forbidden (for dietary/religious restrictions)', phonetic: 'hah-RAHM' },
  { darija: 'Sukkar', english: 'Sugar', phonetic: 'SOOK-ahr' },
  { darija: 'Melha', english: 'Salt', phonetic: 'MEL-hah' },
  { darija: 'Felfel', english: 'Pepper', phonetic: 'FEL-fel' },
  { darija: 'Limun', english: 'Lemon', phonetic: 'lee-MOON' },
  { darija: 'Bnin bzaf!', english: 'Very delicious!', phonetic: 'b-NEEN b-ZAHF' },
  { darija: 'Shbi3t', english: 'I am full', phonetic: 'shBEE-aht' },
];

const emergencyPhrases: Phrase[] = [
  { darija: '3awnuni!', english: 'Help me!', phonetic: 'AH-weh-NOO-nee' },
  { darija: 'Tbib', english: 'Doctor', phonetic: 'T-BEEB' },
  { darija: 'Sbiriya / Pharmacie', english: 'Hospital / Pharmacy', phonetic: 's-bee-REE-yah / far-mah-SEE' },
  { darija: 'Bolis', english: 'Police', phonetic: 'boh-LEES' },
  { darija: 'Lhriqa!', english: 'Fire!', phonetic: 'l-HREE-kah' },
  { darija: 'Ana mrid (m) / mrida (f)', english: 'I am sick', phonetic: 'AH-nah m-REED / m-REE-dah' },
  { darija: 'Andek telephone?', english: 'Do you have a phone?', phonetic: 'AHN-dek teh-leh-FOHN' },
  { darija: 'Fin kayn sbiriya?', english: 'Where is the hospital?', phonetic: 'FEEN KAY-en s-bee-REE-yah' },
  { darija: 'Sarquni!', english: 'I have been robbed!', phonetic: 'sar-KOO-nee' },
  { darija: 'Ma fhemtsh', english: "I don't understand", phonetic: 'mah FHEMT-sh' },
  { darija: 'Tkelem shwiya b shwiya', english: 'Speak slowly please', phonetic: 'tkel-LEM shWEE-yah b shWEE-yah' },
  { darija: 'Kat tkelem l ingliziya?', english: 'Do you speak English?', phonetic: 'kaht TKEL-em l in-glee-ZEE-yah' },
  { darija: 'Wesh kayn shi had kat tkelem Franswiya?', english: 'Does anyone speak French?', phonetic: 'WESH KAY-en shee HADD kaht TKEL-em frahn-SWEE-yah' },
  { darija: 'Safara dyali', english: 'My embassy', phonetic: 'sah-FAH-rah dee-YAH-lee' },
];

const accommodationPhrases: Phrase[] = [
  { darija: 'Riad', english: 'Traditional guesthouse', phonetic: 'ree-YAHD' },
  { darija: 'Bit', english: 'Room', phonetic: 'BEET' },
  { darija: 'Andkom shi bit khawi?', english: 'Do you have a free room?', phonetic: 'AHN-dkom shee BEET KHAH-wee' },
  { darija: 'Bshhal l bit f llila?', english: 'How much is the room per night?', phonetic: 'b-SHAHL l-BEET f l-LEE-lah' },
  { darija: 'Sarut', english: 'Key', phonetic: 'sah-ROOT' },
  { darija: 'Fin kayn l hammam?', english: 'Where is the bathroom?', phonetic: 'FEEN KAY-en l-ham-MAHM' },
  { darija: 'Lma skhun', english: 'Hot water', phonetic: 'l-MAH s-KHOON' },
  { darija: 'Lma bared', english: 'Cold water', phonetic: 'l-MAH BAH-red' },
  { darija: 'Wifi', english: 'WiFi', phonetic: 'WEE-fee' },
  { darija: 'Ftur', english: 'Breakfast', phonetic: 'f-TOOR' },
  { darija: 'Weqtash l ftur?', english: 'What time is breakfast?', phonetic: 'wek-TAHSH l-f-TOOR' },
  { darija: 'Stah / L fog', english: 'Terrace / Rooftop', phonetic: 'S-TAH / l-FOHG' },
];

const timePhrases: Phrase[] = [
  { darija: 'Daba', english: 'Now', phonetic: 'DAH-bah' },
  { darija: 'Ghda', english: 'Tomorrow', phonetic: 'GH-dah' },
  { darija: 'Lbareh', english: 'Yesterday', phonetic: 'l-BAH-reh' },
  { darija: 'Lyum', english: 'Today', phonetic: 'l-YOOM' },
  { darija: 'Shhal f sa3a?', english: 'What time is it?', phonetic: 'SHAHL f SAH-ah' },
  { darija: 'Bekri', english: 'Early', phonetic: 'BEK-ree' },
  { darija: 'M3ettel', english: 'Late', phonetic: 'm-AHT-tel' },
  { darija: 'Shwiya', english: 'A little / A moment', phonetic: 'shWEE-yah' },
  { darija: 'Bzaf', english: 'A lot / Very much', phonetic: 'b-ZAHF' },
  { darija: 'Simana', english: 'Week', phonetic: 'see-MAH-nah' },
  { darija: 'Shher', english: 'Month', phonetic: 'SH-hair' },
  { darija: 'L3am', english: 'Year', phonetic: 'l-AHM' },
];

const culturalExpressions: { darija: string; literal: string; meaning: string; usage: string }[] = [
  {
    darija: 'Bismillah',
    literal: 'In the name of God',
    meaning: 'Said before beginning any activity -- eating, entering a home, starting work, or a journey.',
    usage: 'Universal. Say it before meals to show respect.',
  },
  {
    darija: 'Inshallah',
    literal: 'If God wills it',
    meaning: 'Used when talking about future plans or hopes. Can also be a polite way to say "maybe" or "we will see."',
    usage: 'Extremely common. "See you tomorrow?" "Inshallah."',
  },
  {
    darija: 'Hamdullah',
    literal: 'Praise be to God',
    meaning: 'Expression of gratitude and contentment. Used when asked how you are, after a meal, or after good news.',
    usage: '"How are you?" "Labas, hamdullah."',
  },
  {
    darija: 'Tbarkallah',
    literal: 'God has blessed',
    meaning: 'An expression of admiration. Used to compliment someone or something beautiful, often to ward off the evil eye.',
    usage: '"Your children are wonderful, tbarkallah!"',
  },
  {
    darija: 'Allah y barek fik',
    literal: 'God bless you',
    meaning: 'Expression of gratitude deeper than shukran. Used when someone does you a significant kindness.',
    usage: 'After receiving help, a gift, or genuine hospitality.',
  },
  {
    darija: 'B saha',
    literal: 'With health',
    meaning: 'Said to someone who has just eaten, bathed, gotten a haircut, or bought something new. Wishing them health to enjoy it.',
    usage: '"I just got a new car!" "B saha!"',
  },
  {
    darija: 'Allah y 3tik s-s7a',
    literal: 'May God give you health',
    meaning: 'A way of thanking someone, especially after they have done physical work or served you food.',
    usage: 'To a waiter, a taxi driver, or anyone who has served you.',
  },
  {
    darija: 'Mashi mushkil',
    literal: 'Not a problem',
    meaning: 'The Moroccan "no worries." Used to reassure someone or accept an apology.',
    usage: '"Sorry I am late." "Mashi mushkil!"',
  },
  {
    darija: 'Yallah!',
    literal: "Let's go!",
    meaning: 'An enthusiastic call to action. Can mean "hurry up," "come on," or "let us go."',
    usage: 'Extremely common in everyday speech.',
  },
  {
    darija: 'Safi',
    literal: "That's it / Enough / Done",
    meaning: 'One of the most versatile words in Darija. Can mean "finished," "stop," "OK," or "enough."',
    usage: '"Want more tea?" "Safi, shukran."',
  },
];

const moroccanProverbs: { darija: string; english: string; meaning: string }[] = [
  {
    darija: 'Li fat mat',
    english: 'What is past is dead',
    meaning: 'Do not dwell on the past. Move forward.',
  },
  {
    darija: 'Lli bgha l3sel, yesber l qress n-nhal',
    english: 'He who wants honey must endure bee stings',
    meaning: 'Good things require patience and effort.',
  },
  {
    darija: 'Yedd wahdha ma katsffq sh',
    english: 'One hand alone cannot clap',
    meaning: 'Cooperation is essential. You cannot succeed alone.',
  },
  {
    darija: 'Kul shi bwaqtu zin',
    english: 'Everything is beautiful in its time',
    meaning: 'Patience brings beauty. Do not rush things.',
  },
  {
    darija: 'Lli 3ndu flus, yshri lkhla',
    english: 'He who has money can buy the desert',
    meaning: 'Money opens all doors.',
  },
  {
    darija: 'Dar bla mra, bhal lqber',
    english: 'A house without a woman is like a grave',
    meaning: 'Women are the heart of the Moroccan home.',
  },
];

const frenchPhrases: Phrase[] = [
  { darija: 'Combien?', english: 'How much?', phonetic: 'kom-bee-EN' },
  { darija: "Ou est...?", english: 'Where is...?', phonetic: 'oo EH' },
  { darija: "L'addition, s'il vous plait", english: 'The bill, please', phonetic: "lah-dee-see-ON, seel voo PLEH" },
  { darija: 'Merci beaucoup', english: 'Thank you very much', phonetic: 'mehr-SEE boh-KOO' },
  { darija: 'Parlez-vous anglais?', english: 'Do you speak English?', phonetic: 'par-lay VOO on-GLEH' },
  { darija: 'Je ne comprends pas', english: "I don't understand", phonetic: 'zhuh nuh kom-PRON pah' },
  { darija: "Ou sont les toilettes?", english: 'Where are the toilets?', phonetic: 'oo SON lay twah-LET' },
  { darija: 'Excusez-moi', english: 'Excuse me', phonetic: 'ex-koo-zay MWAH' },
  { darija: "C'est trop cher", english: 'It is too expensive', phonetic: 'say TROH shehr' },
  { darija: 'Je voudrais...', english: 'I would like...', phonetic: 'zhuh voo-DREH' },
];

const amazighPhrases: Phrase[] = [
  { darija: 'Azul', english: 'Hello', phonetic: 'ah-ZOOL' },
  { darija: 'Manzakin?', english: 'How are you?', phonetic: 'mahn-zah-KEEN' },
  { darija: 'Labas, hamdullah', english: 'Fine, praise God', phonetic: 'lah-BASS ham-DOO-lah' },
  { darija: 'Tanmirt', english: 'Thank you', phonetic: 'tan-MEERT' },
  { darija: 'Iyeh', english: 'Yes', phonetic: 'ee-YEH' },
  { darija: 'Uhu', english: 'No', phonetic: 'OO-hoo' },
  { darija: 'Ar tufat', english: 'Goodbye (until next time)', phonetic: 'ahr too-FAHT' },
  { darija: 'Minshk?', english: 'What is your name?', phonetic: 'MEENSH-k' },
  { darija: 'Ism inu...', english: 'My name is...', phonetic: 'ism EE-noo' },
  { darija: 'Aman', english: 'Water', phonetic: 'ah-MAHN' },
  { darija: 'Aghrum', english: 'Bread', phonetic: 'ah-GROOM' },
  { darija: 'Tafukt', english: 'Sun', phonetic: 'tah-FOOKT' },
];

/* ═══════════════════════════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function PhraseTable({ phrases, icon: Icon, title, color = '#A0522D' }: { phrases: Phrase[]; icon: React.ElementType; title: string; color?: string }) {
  return (
    <div className="rounded-2xl border border-[#EDE8E0] bg-white overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-[#EDE8E0]" style={{ backgroundColor: 'rgba(160, 82, 45, 0.04)' }}>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}14` }}>
          <Icon className="h-5 w-5" style={{ color }} />
        </span>
        <h3 className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: '#1A1814' }}>
          {title}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#EDE8E0] bg-[#FAF8F5]">
              <th className="px-6 py-3 text-left font-semibold font-[family-name:var(--font-heading)] text-[#A0522D]">Darija</th>
              <th className="px-6 py-3 text-left font-semibold font-[family-name:var(--font-heading)] text-[#A0522D]">English</th>
              <th className="px-6 py-3 text-left font-semibold font-[family-name:var(--font-heading)] text-[#A0522D]">
                <span className="flex items-center gap-1.5"><Volume2 className="h-3.5 w-3.5" /> Pronunciation</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((phrase, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]/60'}>
                <td className="px-6 py-3 font-semibold text-[#1A1814]">{phrase.darija}</td>
                <td className="px-6 py-3 text-[#1A1814]/80">{phrase.english}</td>
                <td className="px-6 py-3 text-[#A0522D]/70 italic">{phrase.phonetic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionHeading({ icon: Icon, title, subtitle, id }: { icon: React.ElementType; title: string; subtitle?: string; id?: string }) {
  return (
    <div className="mb-8" id={id}>
      <div className="flex items-center gap-3 mb-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A0522D]/10">
          <Icon className="h-5 w-5 text-[#A0522D]" />
        </span>
        <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">{title}</h2>
      </div>
      {subtitle && <p className="text-base text-[#1A1814]/70 ml-[52px] font-[family-name:var(--font-heading)]">{subtitle}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function DarijaPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end">
        <img
          src="/images/hero-darija.webp"
          alt="Moroccan Arabic calligraphy on traditional zellige tilework, representing the Darija language and culture of Morocco"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-[#1A1814] via-[#1A1814]/60 to-transparent" />
        <div className="container-morocco relative z-10 pb-12 pt-32 md:pb-16 md:pt-40">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                <span className="text-white font-medium">Darija Phrasebook</span>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Languages className="h-6 w-6 text-[#C4960C]" />
            </span>
            <span className="px-3 py-1 rounded-full bg-[#C4960C]/20 text-[#C4960C] text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Language Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-display)] leading-tight max-w-4xl">
            Moroccan Arabic (Darija) Phrasebook
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl font-[family-name:var(--font-heading)]">
            Your essential guide to the language of Morocco. Learn the phrases that will transform your travels -- from souk haggling to heartfelt greetings.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#greetings" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A0522D] text-white text-sm font-semibold hover:bg-[#8B4726] transition-colors">
              <MessageCircle className="h-4 w-4" /> Start Learning
            </a>
            <a href="#pronunciation" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold hover:bg-white/20 transition-colors border border-white/20">
              <Volume2 className="h-4 w-4" /> Pronunciation Guide
            </a>
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="bg-[#FAF8F5] border-b border-[#EDE8E0]">
        <div className="container-morocco py-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#A0522D] mb-4 font-[family-name:var(--font-heading)]">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              { href: '#what-is-darija', label: 'What is Darija?', icon: Info },
              { href: '#language-landscape', label: 'Language Landscape', icon: Globe },
              { href: '#greetings', label: 'Essential Greetings', icon: Handshake },
              { href: '#numbers', label: 'Numbers', icon: BookOpen },
              { href: '#shopping', label: 'Shopping & Haggling', icon: ShoppingBag },
              { href: '#transport', label: 'Transportation', icon: Car },
              { href: '#food', label: 'Food & Restaurant', icon: Utensils },
              { href: '#emergency', label: 'Emergency Phrases', icon: AlertTriangle },
              { href: '#pronunciation', label: 'Pronunciation', icon: Volume2 },
              { href: '#cultural', label: 'Cultural Expressions', icon: Heart },
              { href: '#transliteration', label: 'Number Codes', icon: MessageCircle },
              { href: '#regional', label: 'Regional Variations', icon: MapPin },
              { href: '#french', label: 'French Phrases', icon: Globe },
              { href: '#amazigh', label: 'Amazigh Phrases', icon: Compass },
              { href: '#apps', label: 'Learning Resources', icon: GraduationCap },
              { href: '#faq', label: 'FAQ', icon: Info },
            ].map((item) => {
              const NavIcon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-[#1A1814]/80 hover:bg-white hover:shadow-sm hover:text-[#A0522D] transition-all font-[family-name:var(--font-heading)]"
                >
                  <NavIcon className="h-4 w-4 text-[#A0522D]/60" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUICK START: 10 MUST-KNOW PHRASES ── */}
      <section className="py-12 bg-white border-b border-[#EDE8E0]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border-2 border-[#A0522D]/20 bg-gradient-to-br from-[#FAF8F5] to-white p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A0522D]/10">
                  <Star className="h-5 w-5 text-[#A0522D]" />
                </span>
                <div>
                  <h2 className="text-xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">Quick Start: 10 Must-Know Phrases</h2>
                  <p className="text-sm text-[#1A1814]/60 font-[family-name:var(--font-heading)]">If you learn nothing else, learn these</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { darija: 'Salam alaykum', english: 'Hello (Peace be upon you)', phonetic: 'sah-LAHM ah-LAY-koom' },
                  { darija: 'Labas?', english: 'How are you?', phonetic: 'lah-BASS' },
                  { darija: 'Shukran', english: 'Thank you', phonetic: 'SHOO-krahn' },
                  { darija: 'Afak', english: 'Please', phonetic: 'ah-FAHK' },
                  { darija: 'Bslama', english: 'Goodbye', phonetic: 'b-SLAH-mah' },
                  { darija: 'Bshhal hada?', english: 'How much is this?', phonetic: 'b-SHAHL HAH-dah' },
                  { darija: 'Iyeh / La', english: 'Yes / No', phonetic: 'ee-YEH / LAH' },
                  { darija: 'Smahli', english: 'Excuse me / Sorry', phonetic: 'SMAH-lee' },
                  { darija: 'Bismillah', english: 'In the name of God', phonetic: 'bis-MIL-lah' },
                  { darija: 'Inshallah', english: 'God willing', phonetic: 'in-SHAH-lah' },
                ].map((item) => (
                  <div key={item.darija} className="flex items-center gap-3 rounded-xl bg-white border border-[#EDE8E0] px-4 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[#1A1814] text-sm">{item.darija}</p>
                      <p className="text-xs text-[#1A1814]/60">{item.english}</p>
                    </div>
                    <p className="text-xs text-[#A0522D]/70 italic shrink-0">{item.phonetic}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#1A1814]/50 text-center">
                Master these 10 phrases and you will be able to navigate 80% of basic interactions in Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION: WHAT IS DARIJA? ── */}
      <section className="py-16 bg-white" id="what-is-darija">
        <div className="container-morocco">
          <SectionHeading icon={Info} title="What is Darija?" subtitle="Understanding Morocco's everyday language" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-5 text-[#1A1814]/80 leading-relaxed">
              <p>
                <strong className="text-[#1A1814]">Darija</strong> (also written &quot;Dariija&quot; or called Moroccan Arabic) is the colloquial spoken language of over 30 million Moroccans. It is the language of daily life -- what people speak at home, in cafes, at the souk, and on the street. While it shares roots with Classical Arabic, centuries of evolution have made Darija a distinct linguistic entity, heavily influenced by Amazigh (Berber), French, Spanish, and even Portuguese.
              </p>
              <p>
                If you have studied Modern Standard Arabic (MSA, or <em>Fusha</em>), you will find Darija simultaneously familiar and baffling. The script is the same (when written in Arabic), and many basic words are shared, but pronunciation shifts, vocabulary substitutions, and unique grammatical shortcuts make Darija largely unintelligible to speakers of Gulf Arabic, Egyptian Arabic, or Levantine Arabic without significant exposure. Think of it as the difference between Portuguese and Spanish -- related, but far from identical.
              </p>
              <p>
                For travelers, the good news is that you do not need to master Darija to enjoy Morocco. French is widely spoken in cities, and English is growing rapidly, especially in tourism. However, even a handful of Darija phrases will dramatically improve your experience. Moroccans are deeply proud of their language and culture, and hearing a visitor attempt even a simple &quot;Labas?&quot; or &quot;Shukran bzaf&quot; opens doors, earns smiles, and builds genuine connections that no amount of French or English ever could.
              </p>

              <div className="rounded-2xl border border-[#EDE8E0] p-6 bg-[#FAF8F5]">
                <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-3 flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#C4960C]" /> Key Differences: Darija vs. Modern Standard Arabic
                </h3>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" /><span><strong className="text-[#1A1814]">Vowel reduction:</strong> Darija drops many short vowels, creating consonant clusters. &quot;Kitab&quot; (book) in MSA becomes &quot;ktab&quot; in Darija.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" /><span><strong className="text-[#1A1814]">French loanwords:</strong> Everyday words like &quot;tomobil&quot; (car), &quot;telfaza&quot; (TV), and &quot;la carte&quot; come directly from French.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" /><span><strong className="text-[#1A1814]">Amazigh substrate:</strong> Words like &quot;azul&quot; (hello) and &quot;aghrum&quot; (bread) from Tamazight are used across Morocco.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" /><span><strong className="text-[#1A1814]">Verb conjugation:</strong> Darija simplifies MSA verb patterns and adds the prefix &quot;ka-&quot; or &quot;ta-&quot; for present tense.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" /><span><strong className="text-[#1A1814]">Negation:</strong> Darija uses &quot;ma...sh&quot; around verbs (e.g., &quot;ma fhemtsh&quot; -- I did not understand) instead of MSA &quot;la.&quot;</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" /><span><strong className="text-[#1A1814]">Spanish influence:</strong> Northern Darija includes Spanish words like &quot;simana&quot; (week, from &quot;semana&quot;) and &quot;cuzina&quot; (kitchen, from &quot;cocina&quot;).</span></li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="/images/photo-arabic-calligraphy.webp"
                alt="Traditional Arabic calligraphy on parchment, showing the artistic beauty of the Arabic script used in Morocco"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                width={600}
                height={450}
                loading="lazy"
              />
              <div className="rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#C4960C] mb-2 flex items-center gap-2">
                  <Smile className="h-4 w-4" /> Traveler Tip
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  You do not need perfect pronunciation. Moroccans will be delighted that you are trying and will gently correct you with a smile. Start with &quot;Salam alaykum&quot; and &quot;Shukran&quot; -- these two phrases alone will change how people interact with you throughout your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE LANDSCAPE ── */}
      <section className="py-16 bg-[#FAF8F5]" id="language-landscape">
        <div className="container-morocco">
          <SectionHeading icon={Globe} title="Morocco's Language Landscape" subtitle="A multilingual mosaic where four languages interweave daily" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Darija (Moroccan Arabic)',
                icon: MessageCircle,
                speakers: '~30 million',
                description: 'The lingua franca of Morocco. Spoken by virtually everyone as a first or second language. Used in daily life, media, music, comedy, and informal settings. Written in Arabic script formally, but increasingly in Latin script with numbers on social media.',
                color: '#A0522D',
              },
              {
                name: 'Amazigh / Tamazight',
                icon: Compass,
                speakers: '~10 million',
                description: 'The indigenous language of North Africa with three main Moroccan varieties: Tachelhit (south/High Atlas), Tamazight (Middle Atlas), and Tarifit (Rif mountains). Made an official language in the 2011 constitution. Written in Tifinagh script.',
                color: '#2D7A4F',
              },
              {
                name: 'French',
                icon: Globe,
                speakers: '~12 million (L2)',
                description: 'The primary language of business, higher education, government administration, and the professional world. Most educated Moroccans are fluent. Street signs, menus, and official documents are often in French alongside Arabic.',
                color: '#2563EB',
              },
              {
                name: 'Spanish',
                icon: Navigation,
                speakers: '~5 million',
                description: 'Widely spoken in northern Morocco (Tangier, Tetouan, Nador, Al Hoceima) due to historical ties with Spain. Many northern Moroccans watch Spanish television and switch effortlessly between Darija and Spanish.',
                color: '#DC2626',
              },
            ].map((lang) => (
              <div key={lang.name} className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${lang.color}14` }}>
                    <lang.icon className="h-5 w-5" style={{ color: lang.color }} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold font-[family-name:var(--font-display)] text-[#1A1814]">{lang.name}</h3>
                    <p className="text-xs text-[#A0522D] font-medium">{lang.speakers}</p>
                  </div>
                </div>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">{lang.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#EDE8E0] bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-[#A0522D]" /> English in Morocco
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-[#1A1814]/70 leading-relaxed">
              <p>
                English proficiency is growing rapidly in Morocco, particularly among younger generations and those working in tourism. In major tourist destinations like Marrakech, Fes, Essaouira, and Chefchaouen, you will find many locals who speak conversational English. Hotel staff, tour guides, and upscale restaurant workers typically speak English well.
              </p>
              <p>
                However, outside tourist hubs, English is much less common. In rural areas, small towns, and non-tourist neighborhoods, French and Darija may be your only options. Learning even basic Darija phrases is invaluable for these situations and shows respect for Moroccan culture. Young Moroccans increasingly learn English through YouTube, social media, and online courses, so you may find unexpected English speakers in surprising places.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESSENTIAL GREETINGS ── */}
      <section className="py-16 bg-white" id="greetings">
        <div className="container-morocco">
          <SectionHeading icon={Handshake} title="Essential Greetings & Polite Phrases" subtitle="The foundation of every interaction in Morocco" />

          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <PhraseTable phrases={greetingPhrases} icon={Handshake} title="Greetings & Courtesy" />
            </div>
            <div className="space-y-6">
              <img
                src="/images/photo-tea-pour-traditional.webp"
                alt="Traditional Moroccan mint tea being poured from height, a symbol of hospitality and greeting in Morocco"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                width={600}
                height={450}
                loading="lazy"
              />
              <div className="rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Greeting Etiquette
                </h3>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" />
                    <span>Same-gender greetings often include a handshake, sometimes followed by touching your heart with your right hand.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" />
                    <span>Close friends and family may exchange kisses on both cheeks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" />
                    <span>For opposite-gender greetings, wait for the Moroccan person to extend their hand first.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" />
                    <span>Greetings are never rushed. It is normal to exchange several &quot;Labas?&quot; back and forth before getting to the point.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" />
                    <span>Always greet shopkeepers, taxi drivers, and servers before asking for anything.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS ── */}
      <section className="py-16 bg-[#FAF8F5]" id="numbers">
        <div className="container-morocco">
          <SectionHeading icon={BookOpen} title="Numbers in Darija" subtitle="Essential for shopping, bargaining, and getting around" />
          <div className="max-w-3xl">
            <PhraseTable phrases={numberPhrases} icon={BookOpen} title="Numbers 1-10 & Key Amounts" color="#C4960C" />
          </div>
          <div className="mt-8 rounded-2xl border border-[#EDE8E0] bg-white p-6 max-w-3xl shadow-sm">
            <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-3">Number Tips for Travelers</h3>
            <ul className="space-y-2 text-sm text-[#1A1814]/70">
              <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>French numbers are also widely understood, especially for prices. Vendors often switch between Darija and French numbers freely.</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>When in doubt, use your phone calculator to show/confirm prices -- a universal trick that avoids misunderstandings.</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Some older Moroccans still reference &quot;ryal&quot; -- an old currency unit where 1 dirham = 20 ryals. If a price sounds unusually high, they may be quoting in ryals.</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Compound numbers follow the pattern: ones + &quot;u&quot; (and) + tens. Example: 25 = &quot;khmsa u ashrin&quot; (five and twenty).</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SHOPPING & HAGGLING ── */}
      <section className="py-16 bg-white" id="shopping">
        <div className="container-morocco">
          <SectionHeading icon={ShoppingBag} title="Shopping & Haggling Phrases" subtitle="Master the art of souk negotiation" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PhraseTable phrases={shoppingPhrases} icon={ShoppingBag} title="Souk Survival Kit" />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-6">
                <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#C4960C] mb-4 flex items-center gap-2">
                  <Star className="h-4 w-4" /> Haggling Strategy
                </h3>
                <ol className="space-y-3 text-sm text-[#1A1814]/70 list-decimal list-inside">
                  <li><strong className="text-[#1A1814]">Browse first.</strong> Walk through the souk to get a feel for prices before buying anything.</li>
                  <li><strong className="text-[#1A1814]">Ask the price casually.</strong> &quot;Bshhal hada?&quot; with a relaxed tone.</li>
                  <li><strong className="text-[#1A1814]">Counter at 30-40%</strong> of the asking price. The vendor expects this.</li>
                  <li><strong className="text-[#1A1814]">Negotiate playfully.</strong> Smile, joke, and keep it friendly. This is social theater.</li>
                  <li><strong className="text-[#1A1814]">Be ready to walk away.</strong> &quot;Bslama!&quot; while walking out often produces the best price.</li>
                  <li><strong className="text-[#1A1814]">Agree or leave.</strong> Once you agree on a price, the deal is done. Do not try to negotiate further.</li>
                </ol>
              </div>
              <div className="rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-2">Where NOT to Haggle</h3>
                <p className="text-sm text-[#1A1814]/70">
                  Supermarkets, pharmacies, restaurants (with menus), official taxis with meters, government offices, and shops with clearly marked &quot;prix fixe&quot; signs. Haggling is for souks, street vendors, unmarked taxis, and market stalls only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSPORTATION ── */}
      <section className="py-16 bg-[#FAF8F5]" id="transport">
        <div className="container-morocco">
          <SectionHeading icon={Car} title="Transportation Phrases" subtitle="Navigate Morocco's cities and countryside with confidence" />
          <div className="max-w-4xl">
            <PhraseTable phrases={transportPhrases} icon={Car} title="Getting Around" color="#2D7A4F" />
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-3 flex items-center gap-2">
                <Car className="h-4 w-4 text-[#A0522D]" /> Petit Taxi Tips
              </h3>
              <ul className="space-y-2 text-sm text-[#1A1814]/70">
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Always insist on the meter (&quot;compteur&quot;) in city taxis. Say &quot;Compteur, afak&quot; firmly but politely.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>If the driver refuses the meter, agree on a price before getting in.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Petit taxis (small, colored by city) operate within cities. Grand taxis (larger, usually beige Mercedes) run between cities.</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-3 flex items-center gap-2">
                <Navigation className="h-4 w-4 text-[#A0522D]" /> Useful Destinations
              </h3>
              <ul className="space-y-2 text-sm text-[#1A1814]/70">
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Medina</strong> -- Old town / historical center</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Gare</strong> -- Train station (from French)</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Matar</strong> -- Airport</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Mahatta dial tobis</strong> -- Bus station</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Suq / Souk</strong> -- Market</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOD & RESTAURANT ── */}
      <section className="py-16 bg-white" id="food">
        <div className="container-morocco">
          <SectionHeading icon={Utensils} title="Food & Restaurant Phrases" subtitle="Order like a local and discover Morocco's incredible cuisine" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PhraseTable phrases={foodPhrases} icon={Coffee} title="Dining Vocabulary" />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                  <Utensils className="h-4 w-4" /> Dining Etiquette
                </h3>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Say &quot;Bismillah&quot; before eating and &quot;Hamdullah&quot; after finishing.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Eat with your right hand only. The left hand is considered unclean.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>When eating from a communal tagine, eat from the section directly in front of you.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Refusing tea is impolite. Accept at least one glass.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Tipping (pourboire) of 10-15% is customary in restaurants.</span></li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#C4960C] mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" /> Dietary Restrictions
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Morocco is a Muslim country, so pork and alcohol are not served in most traditional restaurants. For vegetarian/vegan travelers, say &quot;Bla lhem&quot; (without meat). Be aware that many dishes contain hidden meat stocks. Specify &quot;bla djaj, bla lhem, bla hut&quot; (no chicken, no meat, no fish) to be thorough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY PHRASES ── */}
      <section className="py-16 bg-[#FAF8F5]" id="emergency">
        <div className="container-morocco">
          <SectionHeading icon={AlertTriangle} title="Emergency Phrases" subtitle="Critical words to know for safety situations" />
          <div className="max-w-4xl">
            <PhraseTable phrases={emergencyPhrases} icon={Phone} title="Emergency & Safety" color="#DC2626" />
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-red-700 mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4" /> Emergency Numbers
              </h3>
              <ul className="space-y-1 text-sm text-red-700/80">
                <li><strong>Police:</strong> 19 (city) / 177 (Gendarmerie)</li>
                <li><strong>Ambulance:</strong> 15</li>
                <li><strong>Fire:</strong> 15</li>
                <li><strong>Tourist Police:</strong> Available in major cities</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4" /> Safety Tip
              </h3>
              <p className="text-sm text-[#1A1814]/70">
                Morocco is generally very safe for travelers. Most emergencies involve minor scams or stomach issues, not serious danger. Keep your embassy number saved in your phone and know your riad/hotel address in both French and Arabic.
              </p>
            </div>
            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-2 flex items-center gap-2">
                <Info className="h-4 w-4" /> Pharmacy Access
              </h3>
              <p className="text-sm text-[#1A1814]/70">
                Moroccan pharmacies (&quot;pharmacie&quot;) are excellent and many medications available only by prescription in Western countries can be purchased over the counter. Pharmacists often speak French and can recommend treatments. There is always a &quot;pharmacie de garde&quot; (duty pharmacy) open 24/7 on a rotating basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCOMMODATION PHRASES ── */}
      <section className="py-16 bg-white" id="accommodation">
        <div className="container-morocco">
          <SectionHeading icon={Home} title="Accommodation Phrases" subtitle="Check in, ask questions, and feel at home in your riad" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PhraseTable phrases={accommodationPhrases} icon={Home} title="Riad & Hotel Vocabulary" color="#A0522D" />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                  <Home className="h-4 w-4" /> Riad Etiquette
                </h3>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>A riad is a traditional Moroccan house with an interior garden courtyard. The name comes from &quot;ryad&quot; meaning garden.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Remove your shoes when entering carpeted areas or when invited to sit on floor cushions.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Most riads serve a generous Moroccan breakfast (ftur) included in the price, with msemen, baghrir, bread, olive oil, jam, eggs, and mint tea.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>The rooftop terrace (stah) is often the best spot in the riad -- perfect for evening tea with views over the medina.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Riad staff often become like family during your stay. A warm &quot;Sbah lkhir&quot; each morning goes a long way.</span></li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#C4960C] mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4" /> Accommodation Types
                </h3>
                <ul className="space-y-1.5 text-sm text-[#1A1814]/70">
                  <li><strong className="text-[#1A1814]">Riad:</strong> Traditional courtyard house (most authentic)</li>
                  <li><strong className="text-[#1A1814]">Dar:</strong> Smaller traditional house (dar = house)</li>
                  <li><strong className="text-[#1A1814]">Kasbah:</strong> Fortified residence, often in the south</li>
                  <li><strong className="text-[#1A1814]">Bivouac:</strong> Desert camp with tents</li>
                  <li><strong className="text-[#1A1814]">Gite:</strong> Rural mountain lodge (from French)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIME & EVERYDAY PHRASES ── */}
      <section className="py-16 bg-[#FAF8F5]" id="time">
        <div className="container-morocco">
          <SectionHeading icon={Globe} title="Time & Everyday Phrases" subtitle="Essential words for navigating daily life in Morocco" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PhraseTable phrases={timePhrases} icon={Globe} title="Time & General Words" color="#C4960C" />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-[#A0522D]" /> Moroccan Time Culture
                </h3>
                <div className="space-y-3 text-sm text-[#1A1814]/70 leading-relaxed">
                  <p>
                    Morocco operates on its own sense of time. Appointments, meetups, and departures are often approximate. This is not rudeness -- it is a cultural norm where relationships and present moments take priority over schedules.
                  </p>
                  <p>
                    If someone says &quot;Ghda inshallah&quot; (tomorrow, God willing), it may mean tomorrow, the day after, or &quot;eventually.&quot; The addition of &quot;inshallah&quot; to time expressions is so common that it has become a gentle way of expressing flexibility.
                  </p>
                  <p>
                    Embrace it. Slow down. Pour another glass of mint tea. Morocco teaches patience as a form of presence, and the best experiences often happen when you stop watching the clock.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#EDE8E0] bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-2">Days of the Week</h3>
                <ul className="space-y-1.5 text-sm text-[#1A1814]/70">
                  <li><strong className="text-[#1A1814]">Letnin</strong> -- Monday</li>
                  <li><strong className="text-[#1A1814]">Ltlat</strong> -- Tuesday</li>
                  <li><strong className="text-[#1A1814]">Larb3a</strong> -- Wednesday</li>
                  <li><strong className="text-[#1A1814]">Lkhmis</strong> -- Thursday</li>
                  <li><strong className="text-[#1A1814]">Ljm3a</strong> -- Friday (from &quot;jm3a&quot; = gathering/mosque)</li>
                  <li><strong className="text-[#1A1814]">Ssbt</strong> -- Saturday</li>
                  <li><strong className="text-[#1A1814]">Lhdd</strong> -- Sunday</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRONUNCIATION GUIDE ── */}
      <section className="py-16 bg-white" id="pronunciation">
        <div className="container-morocco">
          <SectionHeading icon={Volume2} title="Darija Pronunciation Guide" subtitle="Special sounds that do not exist in English" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                sound: 'Kh',
                description: 'Like the "ch" in Scottish "loch" or German "Bach." A raspy sound from the back of the throat. Found in "khobz" (bread), "lkhir" (good).',
                example: 'Sbah lkhir (Good morning)',
                difficulty: 'Medium',
              },
              {
                sound: 'Gh',
                description: 'A voiced version of "kh" -- like gargling gently. Similar to the French "r" in "Paris." Found in "ghali" (expensive), "Maghreb" (Morocco/west).',
                example: 'Ghali bzaf (Too expensive)',
                difficulty: 'Medium',
              },
              {
                sound: 'Q (Qaf)',
                description: 'A deep "K" sound produced from the very back of the throat, almost at the uvula. In some Darija dialects, it becomes a glottal stop (like the pause in "uh-oh").',
                example: 'Qahwa (Coffee)',
                difficulty: 'Hard',
              },
              {
                sound: "3 (Ain / ')",
                description: 'The most challenging sound for English speakers. A deep, constricted sound from the throat -- like saying "ah" while squeezing your throat. Unique to Arabic and Semitic languages.',
                example: "3afak (Please), 3awnuni (Help me)",
                difficulty: 'Hard',
              },
              {
                sound: '7 (Ha)',
                description: 'An emphatic, breathy "H" sound, stronger than the English "h." Produced with more friction in the throat. Distinct from the normal "h" in Darija.',
                example: '7anut (Shop), 7lib (Milk)',
                difficulty: 'Medium',
              },
              {
                sound: 'Sh',
                description: 'Identical to English "sh" as in "shoe." Very common in Darija and easy for English speakers.',
                example: 'Shukran (Thank you)',
                difficulty: 'Easy',
              },
              {
                sound: 'R (Rolled)',
                description: 'Darija uses a rolled "R" similar to Spanish or Italian. The tongue taps or trills against the ridge behind the upper teeth. Practice by saying "butter" quickly.',
                example: 'Merhba (Welcome)',
                difficulty: 'Medium',
              },
              {
                sound: 'Double Consonants',
                description: 'When you see doubled consonants (ll, mm, ss, etc.), hold the sound longer than a single consonant. This is meaningful -- "hram" and "haram" have different meanings.',
                example: 'Allah, hammam, bissllama',
                difficulty: 'Easy',
              },
            ].map((item) => (
              <div key={item.sound} className="rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-[#A0522D]">{item.sound}</h3>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      item.difficulty === 'Easy'
                        ? 'bg-green-100 text-green-700'
                        : item.difficulty === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {item.difficulty}
                  </span>
                </div>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">{item.description}</p>
                <p className="text-xs font-semibold text-[#A0522D] bg-white rounded-lg px-3 py-2 border border-[#EDE8E0]">
                  Example: {item.example}
                </p>
              </div>
            ))}
          </div>

          {/* Practical pronunciation tips */}
          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#A0522D]" /> Practice Exercises
              </h3>
              <div className="space-y-3 text-sm text-[#1A1814]/70 leading-relaxed">
                <p><strong className="text-[#1A1814]">Exercise 1:</strong> Say &quot;Salam alaykum&quot; ten times, focusing on the &quot;kh&quot; sound at the end. It should feel like a gentle rasp at the back of your throat.</p>
                <p><strong className="text-[#1A1814]">Exercise 2:</strong> Practice &quot;Shukran&quot; by emphasizing the &quot;sh&quot; at the beginning and rolling the &quot;r&quot; lightly. The emphasis falls on the first syllable: SHOO-krahn.</p>
                <p><strong className="text-[#1A1814]">Exercise 3:</strong> For the ain sound (3), try saying &quot;aah&quot; while gently tightening your throat. It may feel like you are straining at first. Do not force it -- Moroccans will understand you even without a perfect ain.</p>
                <p><strong className="text-[#1A1814]">Exercise 4:</strong> Practice the phrase &quot;Labas, hamdullah&quot; as a complete unit. This is the most common response to &quot;how are you?&quot; and should flow naturally as one phrase.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-4 flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-[#A0522D]" /> Stress & Intonation Patterns
              </h3>
              <div className="space-y-3 text-sm text-[#1A1814]/70 leading-relaxed">
                <p><strong className="text-[#1A1814]">Stress:</strong> In Darija, stress generally falls on the last heavy syllable (a syllable with a long vowel or ending in two consonants). When in doubt, stress the second-to-last syllable.</p>
                <p><strong className="text-[#1A1814]">Questions:</strong> Yes/no questions are indicated by rising intonation at the end, similar to English. &quot;Labas?&quot; rises at the end to become a question.</p>
                <p><strong className="text-[#1A1814]">The &quot;wesh&quot; prefix:</strong> Adding &quot;wesh&quot; at the beginning of a sentence turns it into a question. &quot;Wesh hada bnin?&quot; (Is this delicious?). Think of it as &quot;is it that...?&quot;</p>
                <p><strong className="text-[#1A1814]">Consonant clusters:</strong> Darija loves consonant clusters that would be impossible in English. Words like &quot;ktab&quot; (book), &quot;khra&quot; (other), and &quot;tqder&quot; (you can) start with consonant combinations. Take them slowly and you will get the hang of it.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-4xl rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-6">
            <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#C4960C] mb-3 flex items-center gap-2">
              <Smile className="h-5 w-5" /> The Golden Rule of Darija Pronunciation
            </h3>
            <p className="text-sm text-[#1A1814]/70 leading-relaxed">
              Do not aim for perfection. Moroccans do not expect tourists to sound native, and they find genuine attempts charming and endearing. Your accent is not a barrier -- it is a bridge. Every mispronunciation is an invitation for a Moroccan to help you, teach you, and connect with you. Some of the best travel stories begin with a magnificently butchered &quot;Bshhal hada?&quot; in a crowded souk. Embrace the imperfection. That is where the magic lives.
            </p>
          </div>
        </div>
      </section>

      {/* ── CULTURAL EXPRESSIONS & PROVERBS ── */}
      <section className="py-16 bg-[#FAF8F5]" id="cultural">
        <div className="container-morocco">
          <SectionHeading icon={Heart} title="Cultural Expressions & Proverbs" subtitle="Phrases that reveal the soul of Moroccan culture" />

          <div className="space-y-12">
            {/* Cultural Expressions */}
            <div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-6 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-[#A0522D]" /> Essential Cultural Expressions
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {culturalExpressions.map((expr) => (
                  <div key={expr.darija} className="rounded-2xl border border-[#EDE8E0] bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-1">{expr.darija}</h4>
                    <p className="text-xs text-[#C4960C] font-semibold mb-2 font-[family-name:var(--font-heading)]">Literally: &quot;{expr.literal}&quot;</p>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-2">{expr.meaning}</p>
                    <p className="text-xs text-[#1A1814]/50 italic">Usage: {expr.usage}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Proverbs */}
            <div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-6 flex items-center gap-2">
                <Star className="h-5 w-5 text-[#C4960C]" /> Moroccan Proverbs (Amthal)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {moroccanProverbs.map((proverb) => (
                  <div key={proverb.darija} className="rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-5">
                    <p className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-1 italic">&quot;{proverb.darija}&quot;</p>
                    <p className="text-sm text-[#A0522D] font-semibold mb-2">{proverb.english}</p>
                    <p className="text-xs text-[#1A1814]/60">{proverb.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS IN TRANSLITERATION ── */}
      <section className="py-16 bg-white" id="transliteration">
        <div className="container-morocco">
          <SectionHeading icon={MessageCircle} title="Numbers in Darija Transliteration" subtitle="Decoding the number-letter system used in texting and social media" />

          <div className="max-w-3xl">
            <p className="text-[#1A1814]/70 leading-relaxed mb-8">
              When Moroccans write Darija in Latin script -- on WhatsApp, Facebook, Instagram, or in text messages -- they use numbers to represent Arabic sounds that have no Latin equivalent. This system is intuitive once you understand it, and you will see it everywhere in Morocco, from shop signs to social media. Here is the complete decoder:
            </p>

            <div className="rounded-2xl border border-[#EDE8E0] bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#EDE8E0] bg-[#FAF8F5]">
                      <th className="px-6 py-3 text-left font-semibold font-[family-name:var(--font-heading)] text-[#A0522D]">Number</th>
                      <th className="px-6 py-3 text-left font-semibold font-[family-name:var(--font-heading)] text-[#A0522D]">Arabic Letter</th>
                      <th className="px-6 py-3 text-left font-semibold font-[family-name:var(--font-heading)] text-[#A0522D]">Sound</th>
                      <th className="px-6 py-3 text-left font-semibold font-[family-name:var(--font-heading)] text-[#A0522D]">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { num: '2', letter: "\u0621 (Hamza)", sound: 'Glottal stop, like pause in "uh-oh"', example: 'su2al (question)' },
                      { num: '3', letter: "\u0639 (Ain)", sound: 'Deep throaty "ah" sound', example: "3afak (please), 3awnuni (help me)" },
                      { num: '5', letter: "\u062E (Kha)", sound: 'Like "ch" in Scottish "loch"', example: '5obz (bread) -- also written "kh"' },
                      { num: '7', letter: "\u062D (Ha)", sound: 'Emphatic breathy "H"', example: '7lib (milk), 7anut (shop)' },
                      { num: '8', letter: "\u0647 (Ha)", sound: 'Light "h" sound', example: '8ad (this) -- less common' },
                      { num: '9', letter: "\u0642 (Qaf)", sound: 'Deep "K" from back of throat', example: "9ahwa (coffee), su9 (market)" },
                    ].map((item, idx) => (
                      <tr key={item.num} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]/60'}>
                        <td className="px-6 py-3 font-bold text-2xl text-[#A0522D]">{item.num}</td>
                        <td className="px-6 py-3 text-[#1A1814] font-medium">{item.letter}</td>
                        <td className="px-6 py-3 text-[#1A1814]/70">{item.sound}</td>
                        <td className="px-6 py-3 text-[#1A1814]/70 italic">{item.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-5">
              <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#C4960C] mb-2 flex items-center gap-2">
                <Smile className="h-4 w-4" /> Why Numbers?
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                The number choices are not random. Each number visually resembles the Arabic letter it represents when flipped or rotated. For example, &quot;3&quot; looks like the Arabic letter ain (&quot;\u0639&quot;) mirrored, and &quot;7&quot; resembles the letter ha (&quot;\u062D&quot;). This clever visual mapping emerged naturally among Moroccan internet users in the early 2000s and is now universally understood across North Africa and the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGIONAL VARIATIONS ── */}
      <section className="py-16 bg-[#FAF8F5]" id="regional">
        <div className="container-morocco">
          <SectionHeading icon={MapPin} title="Regional Variations in Darija" subtitle="How the dialect changes from north to south" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-2">Northern Darija</h3>
              <p className="text-xs text-[#A0522D] font-semibold mb-3 font-[family-name:var(--font-heading)]">Tangier, Tetouan, Nador, Al Hoceima, Larache</p>
              <ul className="space-y-2 text-sm text-[#1A1814]/70">
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Heavy Spanish influence due to the former Spanish Protectorate (1912-1956). Words like &quot;simana&quot; (week), &quot;cuzina&quot; (kitchen), and &quot;spitar&quot; (hospital) come from Spanish.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Distinct pronunciation: the &quot;q&quot; sound often becomes a glottal stop or is dropped entirely.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Rifian Amazigh influence in the northeast, adding unique vocabulary.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Considered more &quot;melodic&quot; and faster-paced than central/southern Darija.</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-2">Central Darija</h3>
              <p className="text-xs text-[#A0522D] font-semibold mb-3 font-[family-name:var(--font-heading)]">Casablanca, Rabat, Meknes, Fes</p>
              <ul className="space-y-2 text-sm text-[#1A1814]/70">
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>The &quot;standard&quot; Darija used in national media, TV shows, and music. Most phrasebooks teach this variety.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Heavy French influence, especially in Casablanca and Rabat where code-switching (mixing Darija and French) is constant.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Fassi (Fes) dialect is considered prestigious and more &quot;classical,&quot; preserving older Arabic vocabulary.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Urban slang evolves rapidly, influenced by social media and global culture.</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-2">Southern Darija</h3>
              <p className="text-xs text-[#A0522D] font-semibold mb-3 font-[family-name:var(--font-heading)]">Marrakech, Agadir, Ouarzazate, Errachidia</p>
              <ul className="space-y-2 text-sm text-[#1A1814]/70">
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Spoken more slowly and deliberately than northern or central varieties.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Strong Tachelhit (southern Amazigh) influence, with borrowed vocabulary for nature, agriculture, and daily life.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Marrakchi dialect has its own colorful slang, reflecting the city&apos;s identity as a cultural melting pot.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>In deep southern oases (Zagora, Merzouga), Hassaniya Arabic influence appears, connecting to Mauritanian dialects.</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-2">Amazigh-Dominant Regions</h3>
              <p className="text-xs text-[#A0522D] font-semibold mb-3 font-[family-name:var(--font-heading)]">Atlas Mountains, Souss Valley, Rif Mountains</p>
              <ul className="space-y-2 text-sm text-[#1A1814]/70">
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>In many rural and mountain communities, Amazigh is the first language and Darija is a second language.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Three main varieties: Tachelhit (8 million speakers), Tamazight Central (3 million), Tarifit (1.5 million).</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Amazigh speakers in these regions typically also speak Darija, but may prefer Tamazight in daily interactions.</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span>Learning a few Amazigh greetings (see below) shows deep respect when visiting these areas.</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-4xl">
            <img
              src="/images/photo-zellige-tilework.webp"
              alt="Intricate Moroccan zellige tilework in geometric patterns, reflecting the diversity and artistry of Moroccan culture"
              className="w-full rounded-2xl object-cover aspect-[21/9]"
              width={1200}
              height={514}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── FRENCH PHRASES THAT HELP ── */}
      <section className="py-16 bg-white" id="french">
        <div className="container-morocco">
          <SectionHeading icon={Globe} title="French Phrases That Help in Morocco" subtitle="Your backup language for when Darija runs out" />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PhraseTable phrases={frenchPhrases} icon={Globe} title="Essential French for Morocco" color="#2563EB" />
            </div>
            <div className="rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-6 h-fit">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-4 flex items-center gap-2">
                <Info className="h-4 w-4 text-[#A0522D]" /> Why French Matters
              </h3>
              <div className="space-y-3 text-sm text-[#1A1814]/70 leading-relaxed">
                <p>
                  French is Morocco&apos;s de facto second language, a legacy of the French Protectorate (1912-1956). It remains the language of business, higher education, science, and government administration.
                </p>
                <p>
                  In practical terms, French is your best fallback when Darija fails. Restaurant menus, street signs, pharmacy instructions, and hotel communications are typically in French. Most Moroccans in cities speak French fluently and will switch to it if they sense you are struggling with Darija.
                </p>
                <p>
                  Many Moroccans engage in &quot;code-switching&quot; -- mixing Darija and French freely in a single sentence. Do not be surprised to hear something like &quot;Mshit l le supermarche bach nshri les courses&quot; (I went to the supermarket to buy groceries), blending both languages seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY LANGUAGE & GESTURES ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <SectionHeading icon={Users} title="Body Language & Non-Verbal Communication" subtitle="What to do (and what to avoid) beyond words" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {[
              {
                title: 'The Heart Touch',
                description: 'After shaking hands, many Moroccans touch their right hand to their heart. This gesture means "I greet you sincerely" or "from the heart." Adopting this gesture shows cultural awareness and respect.',
                type: 'do',
              },
              {
                title: 'Right Hand Rule',
                description: 'Always use your right hand for eating, greeting, giving and receiving items, and pointing. The left hand is traditionally considered unclean. Even left-handed people in Morocco learn to eat with their right hand.',
                type: 'do',
              },
              {
                title: 'Shoe Soles',
                description: 'Avoid showing the soles of your shoes or feet when sitting, especially in traditional settings. Pointing the sole of your shoe at someone is considered deeply disrespectful across Moroccan and Arab cultures.',
                type: 'avoid',
              },
              {
                title: 'Pointing',
                description: 'Do not point at people with your index finger. If you need to indicate someone or a direction, use your whole open hand or a gentle head nod. Pointing with one finger is considered rude.',
                type: 'avoid',
              },
              {
                title: 'The "Wait" Gesture',
                description: 'Holding your hand palm-up with fingers bunched together and moving it up and down means "wait" or "be patient." You will see this constantly in Morocco, especially in busy souks and restaurants.',
                type: 'do',
              },
              {
                title: 'Head Nod vs. Shake',
                description: 'A slight upward tilt of the head (chin up) means "no" in Morocco. A downward nod means "yes." This can be confusing for Westerners at first. Watch for it, especially in non-verbal interactions with vendors.',
                type: 'do',
              },
              {
                title: 'Eye Contact',
                description: 'Moderate eye contact is appropriate and shows engagement. Prolonged staring can be uncomfortable. Between opposite genders, brief eye contact followed by looking away is the norm in conservative settings.',
                type: 'do',
              },
              {
                title: 'Personal Space',
                description: 'Moroccans stand closer during conversations than most Westerners are used to. Same-gender friends often walk arm-in-arm or hold hands, which is a sign of friendship, not romantic interest.',
                type: 'do',
              },
              {
                title: 'Photography Etiquette',
                description: 'Always ask permission before photographing people. Say "Wesh ymken lik tsowerr?" (Can I take a photo?). Many Moroccans prefer not to be photographed, especially women and elderly people in rural areas. Respect a "no" gracefully.',
                type: 'do',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 shadow-sm ${
                  item.type === 'avoid'
                    ? 'border-red-200 bg-red-50/50'
                    : 'border-[#EDE8E0] bg-white'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      item.type === 'avoid'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {item.type === 'avoid' ? 'AVOID' : 'GOOD TO KNOW'}
                  </span>
                </div>
                <h3 className="text-sm font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-2">{item.title}</h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BASIC AMAZIGH / BERBER PHRASES ── */}
      <section className="py-16 bg-[#FAF8F5]" id="amazigh">
        <div className="container-morocco">
          <SectionHeading icon={Compass} title="Basic Amazigh (Berber) Phrases" subtitle="Connect with Morocco's indigenous Imazighen people" />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PhraseTable phrases={amazighPhrases} icon={Compass} title="Tachelhit / Tamazight Basics" color="#2D7A4F" />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#A0522D]" /> About the Amazigh People
                </h3>
                <div className="space-y-3 text-sm text-[#1A1814]/70 leading-relaxed">
                  <p>
                    The Imazighen (Amazigh people, commonly called &quot;Berbers&quot;) are the indigenous inhabitants of North Africa. In Morocco, they make up roughly 40-60% of the population, depending on how identity is measured.
                  </p>
                  <p>
                    Tamazight was recognized as an official language of Morocco in the 2011 constitutional reforms. It is now taught in schools and used in some government signage. The ancient Tifinagh script, used to write Tamazight, appears on government buildings, banknotes, and road signs.
                  </p>
                  <p>
                    If you are trekking in the Atlas Mountains, visiting Amazigh villages, or exploring the Souss region around Agadir, a few Tamazight phrases will be deeply appreciated.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#C4960C] mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4" /> Tifinagh Script
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Tifinagh is one of the oldest writing systems in the world, dating back over 3,000 years. The modern standardized version (Neo-Tifinagh) was developed by the Royal Institute of Amazigh Culture (IRCAM). You will see it on street signs, government buildings, and banknotes alongside Arabic and French. The distinctive geometric characters are immediately recognizable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPS & LEARNING RESOURCES ── */}
      <section className="py-16 bg-white" id="apps">
        <div className="container-morocco">
          <SectionHeading icon={GraduationCap} title="Apps & Resources for Learning Darija" subtitle="Continue your language journey before and during your trip" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {[
              {
                name: 'Mondly',
                type: 'App (iOS & Android)',
                description: 'One of the few major language apps offering Moroccan Arabic specifically, not just MSA. Interactive lessons with speech recognition and daily practice.',
                best: 'Structured learning with audio',
              },
              {
                name: 'Peace Corps Morocco Language Guide',
                type: 'Free PDF',
                description: 'An excellent, thorough Darija course originally developed for Peace Corps volunteers stationed in Morocco. Covers grammar, vocabulary, and cultural context in depth.',
                best: 'Comprehensive free resource',
              },
              {
                name: 'YouTube: Darija with Simo',
                type: 'Free Video Series',
                description: 'Popular channel teaching Darija through practical conversational scenarios. Clear explanations, good pronunciation modeling, and cultural insights.',
                best: 'Visual and auditory learners',
              },
              {
                name: 'Anki Flashcards (Darija decks)',
                type: 'App + Community Decks',
                description: 'Spaced repetition flashcard system. Search for "Moroccan Arabic" or "Darija" decks created by the community. Great for memorizing vocabulary before your trip.',
                best: 'Vocabulary memorization',
              },
              {
                name: 'Preply / iTalki',
                type: 'Online Tutoring',
                description: 'Book one-on-one sessions with native Moroccan speakers. The most effective way to practice conversational Darija. Sessions typically cost 10-25 USD per hour.',
                best: 'Conversation practice with natives',
              },
              {
                name: 'Moroccan Arabic Phrasebook (Lonely Planet)',
                type: 'Book / eBook',
                description: 'A pocket-sized phrasebook covering essential Darija for travelers. Organized by situation (hotel, restaurant, transport, emergencies) with pronunciation guides.',
                best: 'Quick reference while traveling',
              },
            ].map((resource) => (
              <div key={resource.name} className="rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-6 hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-1">{resource.name}</h3>
                <p className="text-xs text-[#A0522D] font-semibold mb-3 font-[family-name:var(--font-heading)]">{resource.type}</p>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">{resource.description}</p>
                <p className="text-xs text-[#C4960C] font-semibold flex items-center gap-1.5">
                  <Star className="h-3 w-3" /> Best for: {resource.best}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-4xl rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-6">
            <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-3 flex items-center gap-2">
              <Smile className="h-5 w-5 text-[#A0522D]" /> Learning Strategy for Short Trips
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-[#1A1814]/70">
              <div className="rounded-xl bg-white p-4 border border-[#EDE8E0]">
                <p className="font-bold text-[#A0522D] mb-1 font-[family-name:var(--font-heading)]">Week 1-2 Before</p>
                <p>Master greetings: Salam alaykum, Labas, Shukran, Bslama. Practice saying them aloud daily.</p>
              </div>
              <div className="rounded-xl bg-white p-4 border border-[#EDE8E0]">
                <p className="font-bold text-[#A0522D] mb-1 font-[family-name:var(--font-heading)]">Week 3-4 Before</p>
                <p>Add shopping phrases (Bshhal hada?, Ghali bzaf) and food words (Atay, Tajine, Lhsab afak).</p>
              </div>
              <div className="rounded-xl bg-white p-4 border border-[#EDE8E0]">
                <p className="font-bold text-[#A0522D] mb-1 font-[family-name:var(--font-heading)]">During Your Trip</p>
                <p>Use every phrase you know. Moroccans will teach you more. Save new words in your phone notes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARIJA IN POPULAR CULTURE ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <SectionHeading icon={Star} title="Darija in Popular Culture" subtitle="Music, film, and media to immerse yourself before your trip" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-4 flex items-center gap-2">
                <Heart className="h-4 w-4 text-[#A0522D]" /> Moroccan Music
              </h3>
              <div className="space-y-3 text-sm text-[#1A1814]/70 leading-relaxed">
                <p>
                  Moroccan music is overwhelmingly in Darija, making it an incredible tool for ear training. Start with these genres and artists:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Nass El Ghiwane</strong> -- The &quot;Rolling Stones of Morocco.&quot; Their protest music defined a generation. Powerful, poetic Darija lyrics about social justice and Moroccan identity.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Saad Lamjarred</strong> -- Morocco&apos;s biggest pop star. His songs (&quot;LM3ALLEM,&quot; &quot;Ghaltane&quot;) mix Darija with modern production. Great for learning casual, modern language.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Gnawa music</strong> -- Spiritual trance music from sub-Saharan Moroccan communities. Hypnotic rhythms and Darija chanting. UNESCO-recognized since 2019.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Chaabi</strong> -- Popular folk music heard at weddings and celebrations. Fast-paced, joyful Darija lyrics everyone sings along to.</span></li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-[#EDE8E0] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#A0522D]" /> Moroccan Film & TV
              </h3>
              <div className="space-y-3 text-sm text-[#1A1814]/70 leading-relaxed">
                <p>
                  Moroccan cinema and television are almost entirely in Darija, providing authentic listening practice:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">2M TV</strong> -- Morocco&apos;s second national channel. Their Darija sitcoms and dramas are a window into everyday Moroccan life and conversation.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Ramadan series</strong> -- Every Ramadan, Morocco produces dozens of new TV series watched by the entire country. These are peak Darija content.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Moroccan YouTube</strong> -- Channels like &quot;DZjoker&quot; and &quot;Amine Raghib&quot; create content in Darija covering everything from comedy to tech reviews. Excellent for modern vocabulary.</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-3.5 w-3.5 text-[#A0522D] mt-1 shrink-0" /><span><strong className="text-[#1A1814]">Podcasts</strong> -- Search &quot;Moroccan podcast Darija&quot; on Spotify or Apple Podcasts. Several shows discuss current events and culture entirely in Darija.</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-4xl rounded-2xl border border-[#C4960C]/20 bg-[#C4960C]/5 p-5">
            <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#C4960C] mb-2 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> Immersion Tip
            </h3>
            <p className="text-sm text-[#1A1814]/70 leading-relaxed">
              Before your trip, listen to Moroccan music or watch Moroccan YouTube videos for even 15 minutes a day. You will not understand the words at first, but your ear will start recognizing the rhythm, intonation, and common sounds of Darija. When you arrive in Morocco, the language will feel surprisingly familiar even if you cannot translate it. This passive immersion is one of the most effective preparation techniques linguists recommend.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white" id="faq">
        <div className="container-morocco">
          <SectionHeading icon={Info} title="Frequently Asked Questions" subtitle="Everything travelers ask about the Darija language" />

          <div className="max-w-3xl space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-[#EDE8E0] bg-white shadow-sm overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#1A1814] font-[family-name:var(--font-heading)] hover:bg-[#FAF8F5] transition-colors">
                  <span className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A0522D]/10 text-xs font-bold text-[#A0522D] mt-0.5">
                      {idx + 1}
                    </span>
                    {item.question}
                  </span>
                  <ChevronRight className="h-5 w-5 text-[#A0522D] shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 pt-0 text-sm text-[#1A1814]/70 leading-relaxed ml-9">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES TO AVOID ── */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <SectionHeading icon={AlertTriangle} title="Common Mistakes Travelers Make" subtitle="Avoid these pitfalls when speaking Darija and navigating Moroccan culture" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                mistake: 'Using MSA (Fusha) phrases in daily conversation',
                why: 'Modern Standard Arabic sounds overly formal in Morocco, like speaking Shakespearean English in a pub. While Moroccans will understand you, they may find it amusing or confusing.',
                instead: 'Stick to Darija phrases from this guide. Even simple Darija is more effective than perfect MSA.',
              },
              {
                mistake: 'Assuming everyone speaks the same language',
                why: 'Morocco is deeply multilingual. An Amazigh grandmother in the Atlas may not speak Darija fluently. A young Casablancan may prefer French. A northern Moroccan may use Spanish.',
                instead: 'Start with "Salam alaykum" (universal), then gauge what language the person is most comfortable in.',
              },
              {
                mistake: 'Skipping greetings and going straight to business',
                why: 'In Moroccan culture, diving into a transaction or request without proper greeting is considered rude. Greetings establish respect and human connection before anything else.',
                instead: 'Always greet first. "Salam alaykum, labas?" Then pause. Let the greeting breathe before making your request.',
              },
              {
                mistake: 'Taking "Inshallah" literally as confirmation',
                why: '"Inshallah" (God willing) can mean "yes, definitely," "maybe," "probably not," or even "polite no" depending on context and tone. It is not a firm commitment.',
                instead: 'Listen to the tone. An enthusiastic "Inshallah!" is positive. A hesitant, drawn-out "Inshaaaaallah..." likely means it will not happen.',
              },
              {
                mistake: 'Using the left hand for greetings or eating',
                why: 'The left hand is traditionally considered unclean in Moroccan and Islamic culture. Offering your left hand for a handshake or eating with it causes visible discomfort.',
                instead: 'Always use your right hand. If your right hand is occupied, a brief explanation ("Smahli") and switching hands is appreciated.',
              },
              {
                mistake: 'Refusing hospitality too firmly',
                why: 'Moroccan hospitality (diyafa) is sacred. Refusing tea, food, or a gift too firmly can be seen as rejecting the person, not just the offer.',
                instead: 'Accept at least once. If you truly cannot (dietary reasons, etc.), explain warmly and show genuine appreciation for the offer.',
              },
            ].map((item) => (
              <div key={item.mistake} className="rounded-2xl border border-[#EDE8E0] bg-[#FAF8F5] p-6">
                <h3 className="text-sm font-bold font-[family-name:var(--font-display)] text-red-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" /> {item.mistake}
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">{item.why}</p>
                <div className="rounded-xl bg-white border border-[#EDE8E0] p-3">
                  <p className="text-xs font-semibold text-[#A0522D] mb-0.5 font-[family-name:var(--font-heading)]">Instead:</p>
                  <p className="text-sm text-[#1A1814]/70">{item.instead}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A0522D]/10 mb-6">
              <Heart className="h-7 w-7 text-[#A0522D]" />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-4">
              Your Darija Journey Starts Now
            </h2>
            <p className="text-base text-[#1A1814]/70 leading-relaxed mb-4 max-w-xl mx-auto">
              Even a single &quot;Salam alaykum&quot; or &quot;Shukran bzaf&quot; will light up faces across Morocco. Language is the master key to authentic travel -- and Moroccans are the most generous teachers you will ever find.
            </p>
            <p className="text-sm text-[#1A1814]/50 leading-relaxed mb-8 max-w-lg mx-auto">
              Save this phrasebook to your phone for offline access during your trip. Screenshot the Quick Start section at the top and keep it handy for your first interactions in Morocco. Every word you speak in Darija is a small act of respect that will be returned tenfold.
            </p>
            <p className="text-lg font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-8">
              Yallah, let&apos;s go!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/first-time"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A0522D] text-white text-sm font-semibold hover:bg-[#8B4726] transition-colors"
              >
                <Compass className="h-4 w-4" /> First-Time Visitor Guide
              </Link>
              <Link
                href="/cuisine"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#A0522D] text-sm font-semibold border border-[#EDE8E0] hover:bg-[#EDE8E0] transition-colors"
              >
                <Utensils className="h-4 w-4" /> Moroccan Cuisine Guide
              </Link>
              <Link
                href="/souks"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#A0522D] text-sm font-semibold border border-[#EDE8E0] hover:bg-[#EDE8E0] transition-colors"
              >
                <ShoppingBag className="h-4 w-4" /> Souks & Markets
              </Link>
              <Link
                href="/berber-culture"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#A0522D] text-sm font-semibold border border-[#EDE8E0] hover:bg-[#EDE8E0] transition-colors"
              >
                <Heart className="h-4 w-4" /> Amazigh Heritage
              </Link>
              <Link
                href="/etiquette"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#A0522D] text-sm font-semibold border border-[#EDE8E0] hover:bg-[#EDE8E0] transition-colors"
              >
                <Users className="h-4 w-4" /> Etiquette Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE MORE ── */}
      <ExploreMore currentCategory="culture" currentHref="/darija" />
    </>
  );
}

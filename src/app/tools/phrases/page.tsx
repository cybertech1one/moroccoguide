import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  ChevronRight,
  Languages,
  MessageCircle,
  ShoppingCart,
  UtensilsCrossed,
  Navigation,
  Hash,
  ShieldAlert,
  Heart,
  Bus,
  Info,
  BookOpen,
  Globe,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Moroccan Arabic (Darija) Phrasebook | 80+ Essential Phrases',
  description:
    'Learn 80+ essential Moroccan Arabic (Darija) phrases for your Morocco trip. Greetings, shopping, food, directions, numbers, and emergency phrases with pronunciation tips and Arabic script.',
  keywords: [
    'Moroccan Arabic phrases',
    'Darija phrasebook',
    'Morocco language guide',
    'learn Darija',
    'Moroccan greetings',
    'haggling phrases Morocco',
    'Morocco travel phrases',
    'French in Morocco',
    'Arabic for travelers',
    'Moroccan numbers',
    'Morocco emergency phrases',
  ],
  openGraph: {
    title: 'Moroccan Arabic (Darija) Phrasebook - 80+ Essential Phrases',
    description:
      'Master essential Darija phrases for Morocco: greetings, bargaining, food ordering, directions, numbers, and emergency phrases.',
    type: 'website',
    url: 'https://citytoursmorocco.com/tools/phrases',
  },
}

/* ================================================================== */
/*  Phrase Data                                                        */
/* ================================================================== */
interface Phrase {
  english: string
  darija: string
  arabic: string
  note?: string
}

interface PhraseCategory {
  title: string
  icon: React.ElementType
  description: string
  phrases: Phrase[]
}

const PHRASE_CATEGORIES: PhraseCategory[] = [
  {
    title: 'Greetings & Basics',
    icon: MessageCircle,
    description: 'Start every interaction with a greeting. Moroccans highly value politeness.',
    phrases: [
      { english: 'Hello / Peace be upon you', darija: 'Salam alaikum', arabic: '\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645', note: 'Most common greeting, always appropriate' },
      { english: 'And upon you peace (reply)', darija: 'Wa alaikum salam', arabic: '\u0648\u0639\u0644\u064A\u0643\u0645 \u0627\u0644\u0633\u0644\u0627\u0645' },
      { english: 'Hello (informal)', darija: 'Ahlan', arabic: '\u0623\u0647\u0644\u0627' },
      { english: 'Good morning', darija: 'Sbah l-kheir', arabic: '\u0635\u0628\u0627\u062D \u0627\u0644\u062E\u064A\u0631' },
      { english: 'Good evening', darija: 'Msa l-kheir', arabic: '\u0645\u0633\u0627\u0621 \u0627\u0644\u062E\u064A\u0631' },
      { english: 'How are you?', darija: 'La-bas?', arabic: '\u0644\u0627\u0628\u0627\u0633\u061F', note: 'Literally "no harm?" -- very common' },
      { english: 'I am fine, thanks be to God', darija: 'La-bas, l-hamdulillah', arabic: '\u0644\u0627\u0628\u0627\u0633 \u0627\u0644\u062D\u0645\u062F \u0644\u0644\u0647' },
      { english: 'Thank you', darija: 'Shukran', arabic: '\u0634\u0643\u0631\u0627' },
      { english: 'Thank you very much', darija: 'Barak Allahu fik', arabic: '\u0628\u0627\u0631\u0643 \u0627\u0644\u0644\u0647 \u0641\u064A\u0643', note: 'More heartfelt thank you' },
      { english: 'Please', darija: 'Afak', arabic: '\u0639\u0641\u0627\u0643' },
      { english: 'Yes', darija: 'Iyeh / Naam', arabic: '\u0627\u064A\u0647 / \u0646\u0639\u0645' },
      { english: 'No', darija: 'La', arabic: '\u0644\u0627' },
      { english: 'Excuse me / Sorry', darija: 'Smeh liya', arabic: '\u0633\u0645\u062D \u0644\u064A\u0627' },
      { english: 'Goodbye', darija: 'Bslama', arabic: '\u0628\u0633\u0644\u0627\u0645\u0629' },
      { english: 'See you later', darija: 'Nshufek men baad', arabic: '\u0646\u0634\u0648\u0641\u0643 \u0645\u0646 \u0628\u0639\u062F' },
      { english: 'God willing', darija: 'Inshallah', arabic: '\u0625\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647', note: 'Used constantly -- means "hopefully"' },
      { english: 'My name is...', darija: 'Smiyti...', arabic: '\u0633\u0645\u064A\u062A\u064A...'},
      { english: 'What is your name?', darija: 'Shnu smiytek?', arabic: '\u0634\u0646\u0648 \u0633\u0645\u064A\u062A\u0643\u061F' },
    ],
  },
  {
    title: 'Shopping & Bargaining',
    icon: ShoppingCart,
    description: 'Bargaining is expected in souks. These phrases will help you negotiate.',
    phrases: [
      { english: 'How much is this?', darija: 'Bshhal hada?', arabic: '\u0628\u0634\u062D\u0627\u0644 \u0647\u0627\u062F\u0627\u061F' },
      { english: 'That is too expensive', darija: 'Ghali bezzaf', arabic: '\u063A\u0627\u0644\u064A \u0628\u0632\u0627\u0641', note: 'Key bargaining phrase' },
      { english: 'Can you lower the price?', darija: 'Imken tenqes?', arabic: '\u0625\u0645\u0643\u0646 \u062A\u0646\u0642\u0635\u061F' },
      { english: 'What is the last price?', darija: 'Shhal akher taman?', arabic: '\u0634\u062D\u0627\u0644 \u0622\u062E\u0631 \u062B\u0645\u0646\u061F' },
      { english: 'I will give you...', darija: 'Naatik...', arabic: '\u0646\u0639\u0637\u064A\u0643...' },
      { english: 'No thank you, I am just looking', darija: 'La shukran, ghir kanshuf', arabic: '\u0644\u0627 \u0634\u0643\u0631\u0627 \u063A\u064A\u0631 \u0643\u0646\u0634\u0648\u0641' },
      { english: 'I do not want it', darija: 'Ma bghitsh', arabic: '\u0645\u0627 \u0628\u063A\u064A\u062A\u0634' },
      { english: 'I will take it', darija: 'Ghanakhdu', arabic: '\u063A\u0646\u0627\u062E\u062F\u0648' },
      { english: 'Do you have...?', darija: 'Wash aandek...?', arabic: '\u0648\u0627\u0634 \u0639\u0646\u062F\u0643...?' },
      { english: 'This is beautiful', darija: 'Hada zwin', arabic: '\u0647\u0627\u062F\u0627 \u0632\u0648\u064A\u0646' },
    ],
  },
  {
    title: 'Food & Dining',
    icon: UtensilsCrossed,
    description: 'Ordering food and navigating restaurants and street food stalls.',
    phrases: [
      { english: 'I am hungry', darija: 'Ana jiaan', arabic: '\u0623\u0646\u0627 \u062C\u064A\u0639\u0627\u0646' },
      { english: 'I am thirsty', darija: 'Ana aatshan', arabic: '\u0623\u0646\u0627 \u0639\u0637\u0634\u0627\u0646' },
      { english: 'The menu please', darija: 'L-carta afak', arabic: '\u0627\u0644\u0643\u0627\u0631\u0637\u0627 \u0639\u0641\u0627\u0643' },
      { english: 'I would like...', darija: 'Bghit...', arabic: '\u0628\u063A\u064A\u062A...' },
      { english: 'Mint tea', darija: 'Atay b-naanaa', arabic: '\u0623\u062A\u0627\u064A \u0628\u0627\u0644\u0646\u0639\u0646\u0627\u0639' },
      { english: 'Water', darija: 'L-ma', arabic: '\u0627\u0644\u0645\u0627\u0621' },
      { english: 'Bread', darija: 'Khobz', arabic: '\u062E\u0628\u0632', note: 'Served with every meal' },
      { english: 'Delicious!', darija: 'Bnin!', arabic: '\u0628\u0646\u064A\u0646!', note: 'Moroccans love compliments about food' },
      { english: 'The bill please', darija: 'L-hssab afak', arabic: '\u0627\u0644\u062D\u0633\u0627\u0628 \u0639\u0641\u0627\u0643' },
      { english: 'I do not eat meat', darija: 'Ma kanakul-sh l-lhem', arabic: '\u0645\u0627 \u0643\u0646\u0627\u0643\u0644\u0634 \u0627\u0644\u0644\u062D\u0645' },
      { english: 'Without sugar', darija: 'Bla sukkar', arabic: '\u0628\u0644\u0627 \u0633\u0643\u0631' },
      { english: 'Spicy', darija: 'Haar', arabic: '\u062D\u0627\u0631' },
      { english: 'Not spicy', darija: 'Ma haar-sh', arabic: '\u0645\u0627 \u062D\u0627\u0631\u0634' },
      { english: 'Enough / I am full', darija: 'Safi / Shbaate', arabic: '\u0635\u0627\u0641\u064A / \u0634\u0628\u0639\u062A' },
    ],
  },
  {
    title: 'Directions & Getting Around',
    icon: Navigation,
    description: 'Navigate medinas and find your way around Moroccan cities.',
    phrases: [
      { english: 'Where is...?', darija: 'Fin kayn...?', arabic: '\u0641\u064A\u0646 \u0643\u0627\u064A\u0646...?' },
      { english: 'Left', darija: 'L-lisar', arabic: '\u0627\u0644\u064A\u0633\u0627\u0631' },
      { english: 'Right', darija: 'L-limin', arabic: '\u0627\u0644\u064A\u0645\u064A\u0646' },
      { english: 'Straight ahead', darija: 'Neeshan', arabic: '\u0646\u064A\u0634\u0627\u0646' },
      { english: 'Near / Close', darija: 'Qrib', arabic: '\u0642\u0631\u064A\u0628' },
      { english: 'Far', darija: 'Baaid', arabic: '\u0628\u0639\u064A\u062F' },
      { english: 'Stop here', darija: 'Wqef hna', arabic: '\u0648\u0642\u0641 \u0647\u0646\u0627', note: 'Useful for taxis' },
      { english: 'I am lost', darija: 'Ana tleft', arabic: '\u0623\u0646\u0627 \u062A\u0644\u0641\u062A' },
      { english: 'Where is the bathroom?', darija: 'Fin kayn l-toilette?', arabic: '\u0641\u064A\u0646 \u0643\u0627\u064A\u0646 \u0627\u0644\u062A\u0648\u0627\u0644\u064A\u062A\u061F' },
      { english: 'Is it far from here?', darija: 'Wash baaid men hna?', arabic: '\u0648\u0627\u0634 \u0628\u0639\u064A\u062F \u0645\u0646 \u0647\u0646\u0627\u061F' },
      { english: 'I want to go to...', darija: 'Bghit nemshi l...', arabic: '\u0628\u063A\u064A\u062A \u0646\u0645\u0634\u064A \u0644...' },
      { english: 'How far is it?', darija: 'Shhal baaid?', arabic: '\u0634\u062D\u0627\u0644 \u0628\u0639\u064A\u062F\u061F' },
    ],
  },
  {
    title: 'Numbers (1-1000)',
    icon: Hash,
    description: 'Essential for shopping, taxis, and understanding prices.',
    phrases: [
      { english: '1', darija: 'Wahed', arabic: '\u0648\u0627\u062D\u062F' },
      { english: '2', darija: 'Jouj', arabic: '\u062C\u0648\u062C' },
      { english: '3', darija: 'Tlata', arabic: '\u062A\u0644\u0627\u062A\u0627' },
      { english: '4', darija: 'Rbaa', arabic: '\u0631\u0628\u0639\u0627' },
      { english: '5', darija: 'Khamsa', arabic: '\u062E\u0645\u0633\u0627' },
      { english: '6', darija: 'Stta', arabic: '\u0633\u062A\u0627' },
      { english: '7', darija: 'Sbaa', arabic: '\u0633\u0628\u0639\u0627' },
      { english: '8', darija: 'Tmanya', arabic: '\u062A\u0645\u0627\u0646\u064A\u0627' },
      { english: '9', darija: 'Tsaoud', arabic: '\u062A\u0633\u0639\u0648\u062F' },
      { english: '10', darija: 'Ashra', arabic: '\u0639\u0634\u0631\u0627' },
      { english: '20', darija: 'Ashrin', arabic: '\u0639\u0634\u0631\u064A\u0646' },
      { english: '50', darija: 'Khamsin', arabic: '\u062E\u0645\u0633\u064A\u0646' },
      { english: '100', darija: 'Miya', arabic: '\u0645\u064A\u0627', note: 'Important for prices' },
      { english: '200', darija: 'Miyatayn', arabic: '\u0645\u064A\u062A\u064A\u0646' },
      { english: '500', darija: 'Khams miya', arabic: '\u062E\u0645\u0633 \u0645\u064A\u0627' },
      { english: '1000', darija: 'Alf', arabic: '\u0623\u0644\u0641' },
    ],
  },
  {
    title: 'Emergency',
    icon: ShieldAlert,
    description: 'Phrases you hopefully will not need, but should know.',
    phrases: [
      { english: 'Help!', darija: 'Aawnuni!', arabic: '\u0639\u0627\u0648\u0646\u0648\u0646\u064A!', note: 'Emergency use only' },
      { english: 'Call the police', darija: 'Ayyat l-bolis', arabic: '\u0639\u064A\u0637 \u0627\u0644\u0628\u0648\u0644\u064A\u0633' },
      { english: 'Call an ambulance', darija: 'Ayyat l-isbitar', arabic: '\u0639\u064A\u0637 \u0627\u0644\u0633\u0628\u064A\u0637\u0627\u0631' },
      { english: 'I am sick', darija: 'Ana mrid', arabic: '\u0623\u0646\u0627 \u0645\u0631\u064A\u0636' },
      { english: 'I need a doctor', darija: 'Khasni tbib', arabic: '\u062E\u0627\u0635\u0646\u064A \u0637\u0628\u064A\u0628' },
      { english: 'Hospital', darija: 'Sbitar', arabic: '\u0633\u0628\u064A\u0637\u0627\u0631' },
      { english: 'Pharmacy', darija: 'Pharmacie / Farmasyan', arabic: '\u0641\u0627\u0631\u0645\u0627\u0633\u064A\u0627\u0646' },
      { english: 'I lost my passport', darija: 'Daat liya l-passeport', arabic: '\u0636\u0627\u0639\u062A \u0644\u064A\u0627 \u0627\u0644\u0628\u0627\u0633\u0628\u0648\u0631' },
      { english: 'Police emergency number', darija: '19', arabic: '19', note: 'Dial 19 for police, 15 for ambulance' },
    ],
  },
  {
    title: 'Compliments & Courtesy',
    icon: Heart,
    description: 'Moroccans appreciate compliments. Use these to make genuine connections.',
    phrases: [
      { english: 'Beautiful (thing)', darija: 'Zwin', arabic: '\u0632\u0648\u064A\u0646' },
      { english: 'Beautiful (female)', darija: 'Zwina', arabic: '\u0632\u0648\u064A\u0646\u0629' },
      { english: 'God bless you', darija: 'Allah ibarek fik', arabic: '\u0627\u0644\u0644\u0647 \u064A\u0628\u0627\u0631\u0643 \u0641\u064A\u0643' },
      { english: 'Welcome', darija: 'Merhba', arabic: '\u0645\u0631\u062D\u0628\u0627' },
      { english: 'No problem', darija: 'Mashi mushkil', arabic: '\u0645\u0627\u0634\u064A \u0645\u0634\u0643\u0644' },
      { english: 'With pleasure', darija: 'B-l-farha', arabic: '\u0628\u0627\u0644\u0641\u0631\u062D\u0629' },
      { english: 'May God give you health', darija: 'Allah yaatik s-sahha', arabic: '\u0627\u0644\u0644\u0647 \u064A\u0639\u0637\u064A\u0643 \u0627\u0644\u0635\u062D\u0629', note: 'Said after someone does you a favor' },
      { english: 'I love Morocco', darija: 'Kanbghhi l-Maghrib', arabic: '\u0643\u0646\u0628\u063A\u064A \u0627\u0644\u0645\u063A\u0631\u0628' },
    ],
  },
  {
    title: 'Transportation',
    icon: Bus,
    description: 'Getting around by taxi, bus, and train.',
    phrases: [
      { english: 'Taxi', darija: 'Taxi', arabic: '\u0637\u0627\u0643\u0633\u064A' },
      { english: 'Bus station', darija: 'Mahatta dyal l-kar', arabic: '\u0645\u062D\u0637\u0629 \u062F\u064A\u0627\u0644 \u0627\u0644\u0643\u0627\u0631' },
      { english: 'Train station', darija: 'La gare / Mahatta dyal l-train', arabic: '\u0645\u062D\u0637\u0629 \u062F\u064A\u0627\u0644 \u0627\u0644\u062A\u0631\u0627\u0646' },
      { english: 'Airport', darija: 'L-matar', arabic: '\u0627\u0644\u0645\u0637\u0627\u0631' },
      { english: 'How much to...?', darija: 'Bshhal l...?', arabic: '\u0628\u0634\u062D\u0627\u0644 \u0644...?' },
      { english: 'Turn on the meter', darija: 'Dir l-compteur', arabic: '\u062F\u064A\u0631 \u0627\u0644\u0643\u0648\u0646\u062A\u0648\u0631', note: 'Important for petit taxis' },
      { english: 'Slowly please', darija: 'Shwiya afak', arabic: '\u0634\u0648\u064A\u0627 \u0639\u0641\u0627\u0643' },
      { english: 'I want to get off here', darija: 'Bghit nzel hna', arabic: '\u0628\u063A\u064A\u062A \u0646\u0646\u0632\u0644 \u0647\u0646\u0627' },
      { english: 'Is this the road to...?', darija: 'Wash hadi t-triq l...?', arabic: '\u0648\u0627\u0634 \u0647\u0627\u062F\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0644...?' },
    ],
  },
]

/* ================================================================== */
/*  French Phrases                                                     */
/* ================================================================== */
const FRENCH_PHRASES: { english: string; french: string; note?: string }[] = [
  { english: 'Hello', french: 'Bonjour' },
  { english: 'Goodbye', french: 'Au revoir' },
  { english: 'Please', french: 'S\'il vous plait' },
  { english: 'Thank you', french: 'Merci' },
  { english: 'How much?', french: 'Combien?' },
  { english: 'Where is...?', french: 'Ou est...?' },
  { english: 'I do not understand', french: 'Je ne comprends pas' },
  { english: 'Do you speak English?', french: 'Parlez-vous anglais?' },
  { english: 'The bill, please', french: 'L\'addition, s\'il vous plait' },
  { english: 'Excuse me', french: 'Excusez-moi' },
  { english: 'I would like...', french: 'Je voudrais...' },
  { english: 'Is it far?', french: 'C\'est loin?' },
]

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */
export default function PhrasebookPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="relative bg-[#1A1814] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-sm text-[#FAF8F5]/30 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C4960C] transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/tools" className="hover:text-[#C4960C] transition-colors">Tools</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FAF8F5]/60">Darija Phrasebook</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <Languages className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-[family-name:var(--font-display)]">
                Darija Phrasebook
              </h1>
              <p className="text-[#FAF8F5]/50 mt-1">
                80+ essential Moroccan Arabic phrases for travelers
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Intro */}
        <div className="p-5 rounded-xl bg-[#C4960C]/5 border border-[#C4960C]/10 mb-8 flex items-start gap-3">
          <Info className="h-5 w-5 text-[#C4960C] shrink-0 mt-0.5" />
          <div className="text-sm text-[#1A1814]/60 leading-relaxed">
            <strong className="text-[#1A1814]">Moroccan Arabic (Darija)</strong> is the everyday language of Morocco.
            It differs significantly from Modern Standard Arabic and is not taught in schools -- it is learned at home.
            French is widely spoken as Morocco&apos;s second language, especially in cities and business. In northern Morocco,
            Spanish is also common. In the Atlas and Rif mountains, many people speak Amazigh (Berber) as their first language.
            Even a few Darija words will earn you warm smiles and better prices.
          </div>
        </div>

        {/* Pronunciation Tips */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-4 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <BookOpen className="h-5 w-5 text-[#C4960C]" />
            Pronunciation Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { sound: 'kh', tip: 'Like the "ch" in Scottish "loch" or German "Bach". A throaty sound.' },
              { sound: 'gh', tip: 'A gargled "r" sound, like the French "r". Made in the back of the throat.' },
              { sound: 'aa', tip: 'A deep, emphatic "a" sound from the throat. Deeper than a normal "a".' },
              { sound: 'q', tip: 'A deep "k" sound made from the back of the throat. Distinct from regular "k".' },
              { sound: 'sh', tip: 'Like "sh" in "shoe". Very common in Darija.' },
              { sound: 'h', tip: 'Can be a light "h" or a strong, breathy "H" (written as a capital H in some guides).' },
            ].map((item) => (
              <div key={item.sound} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#1A1814]/5">
                <span className="inline-block px-2 py-0.5 rounded bg-[#1A1814] text-[#C4960C] text-xs font-bold mr-2 font-mono">
                  {item.sound}
                </span>
                <span className="text-sm text-[#1A1814]/60">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phrase Categories */}
        {PHRASE_CATEGORIES.map((cat) => {
          const Icon = cat.icon
          return (
            <div key={cat.title} className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Icon className="h-5 w-5 text-[#C4960C]" />
                <h2 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                  {cat.title}
                </h2>
              </div>
              <p className="text-sm text-[#1A1814]/50 mb-4 ml-8">{cat.description}</p>
              <div className="rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#FAF8F5]">
                        <th className="text-left py-3 px-4 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">English</th>
                        <th className="text-left py-3 px-4 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">Darija</th>
                        <th className="text-left py-3 px-4 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider font-[family-name:var(--font-arabic)]">Arabic</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.phrases.map((phrase) => (
                        <tr key={phrase.english} className="border-t border-[#1A1814]/5 hover:bg-[#FAF8F5]/50 transition-colors">
                          <td className="py-3 px-4 font-medium text-[#1A1814]">
                            {phrase.english}
                          </td>
                          <td className="py-3 px-4 text-[#C4960C] font-semibold">
                            {phrase.darija}
                            {phrase.note && (
                              <span className="block text-[10px] text-[#1A1814]/30 font-normal mt-0.5">{phrase.note}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-[#1A1814]/70 font-[family-name:var(--font-arabic)] text-base" dir="rtl">
                            {phrase.arabic}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        })}

        {/* French Section */}
        <div className="mt-12 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="h-5 w-5 text-[#C4960C]" />
            <h2 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
              Essential French Phrases
            </h2>
          </div>
          <p className="text-sm text-[#1A1814]/50 mb-4 ml-8">
            French is widely spoken in Morocco, especially in cities, hotels, and restaurants. Many signs
            are in both Arabic and French. These basics will help when Darija fails.
          </p>
          <div className="rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#FAF8F5]">
                    <th className="text-left py-3 px-4 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">English</th>
                    <th className="text-left py-3 px-4 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">French</th>
                  </tr>
                </thead>
                <tbody>
                  {FRENCH_PHRASES.map((phrase) => (
                    <tr key={phrase.english} className="border-t border-[#1A1814]/5 hover:bg-[#FAF8F5]/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-[#1A1814]">{phrase.english}</td>
                      <td className="py-3 px-4 text-[#A0522D] font-semibold">{phrase.french}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cultural Context */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#1A1814] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative">
            <h2 className="text-lg font-bold text-[#FAF8F5] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
              <Info className="h-5 w-5 text-[#C4960C]" />
              Cultural Notes on Language
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Always greet first',
                  text: 'Never jump straight to business. Start with "Salam alaikum" and ask how someone is doing. This applies to shops, taxis, and even asking for directions.',
                },
                {
                  title: 'Right hand for gestures',
                  text: 'Use your right hand for greetings, giving/receiving items, and eating. The left hand is considered unclean in Moroccan culture.',
                },
                {
                  title: 'Inshallah is essential',
                  text: '"God willing" is used in virtually every conversation about the future. Plans, promises, and appointments all include it. It does not mean "maybe".',
                },
                {
                  title: 'Tea is a social ritual',
                  text: 'If offered mint tea, accept. It is a sign of hospitality and refusing may be considered rude. Three glasses is traditional.',
                },
                {
                  title: 'Bargaining is an art',
                  text: 'In souks, the first price is never the final price. Bargaining is expected and is a social interaction, not confrontation. Be friendly and patient.',
                },
                {
                  title: 'Code-switching is normal',
                  text: 'Moroccans regularly mix Darija, French, and sometimes Spanish or English in the same sentence. Do not be surprised to hear "Merci bezzaf" (thanks a lot).',
                },
              ].map((note, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#C4960C]">{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#FAF8F5]/80 mb-0.5">{note.title}</div>
                    <p className="text-xs text-[#FAF8F5]/40 leading-relaxed">{note.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

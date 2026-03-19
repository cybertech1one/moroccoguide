import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Globe,
  Shield,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Banknote,
  CircleAlert,
  Compass,
  Heart,
  Camera,
  HandHeart,
  Coffee,
  MessageCircle,
  ShoppingBag,
  Eye,
  Moon,
  Shirt,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Etiquette Guide 2026 | Cultural Tips, Customs & Do\'s and Don\'ts',
  description:
    'Complete Morocco etiquette guide for 2026. Learn Moroccan customs and traditions, greetings, dress code, mosque etiquette, dining rules, tea ceremony, tipping, haggling, photography rules, Ramadan behavior, gender norms, and essential Arabic/Darija phrases.',
  keywords: [
    'Morocco etiquette guide',
    'Morocco cultural tips',
    'Morocco customs and traditions',
    'dos and don\'ts Morocco',
    'Morocco dress code',
    'Morocco mosque etiquette',
    'Morocco dining etiquette',
    'Morocco tipping customs',
    'Morocco haggling tips',
    'Morocco Ramadan rules',
    'Morocco greetings',
    'Moroccan tea ceremony',
    'Morocco photography rules',
    'Morocco gender norms',
    'Darija phrases for tourists',
    'Morocco cultural customs',
    'Morocco travel etiquette',
    'Morocco respect culture',
  ],
  openGraph: {
    title: 'Morocco Etiquette Guide 2026 | Cultural Tips, Customs & Do\'s and Don\'ts',
    description:
      'Master Moroccan etiquette before you travel. Greetings, dress code, dining rules, mosque visits, haggling, Ramadan behavior, tipping, and essential Darija phrases.',
    url: `${BASE_URL}/morocco-cultural-etiquette`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan tea ceremony representing cultural etiquette and customs in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Etiquette Guide 2026 | Cultural Tips & Customs',
    description:
      'Greetings, dress code, dining rules, mosque visits, haggling, tipping, Ramadan behavior & Darija phrases. Everything you need to respect Moroccan culture.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-cultural-etiquette` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-cultural-etiquette`,
  name: 'Morocco Etiquette Guide 2026 | Cultural Tips, Customs & Do\'s and Don\'ts',
  description:
    'Complete guide to Moroccan cultural etiquette in 2026, covering greetings, dress code, mosque visits, dining customs, tea ceremonies, tipping, haggling, photography rules, Ramadan behavior, gender norms, and essential Darija phrases for respectful travel.',
  url: `${BASE_URL}/morocco-cultural-etiquette`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-cultural-etiquette`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Cultural Etiquette', item: `${BASE_URL}/morocco-cultural-etiquette` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it rude to shake hands with the opposite gender in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Morocco, handshakes between men are common and expected. However, many Moroccan women, particularly in conservative or rural areas, may not shake hands with men they are not related to for religious reasons. The safest approach is to wait for the other person to extend their hand first. If a woman places her hand over her heart instead of reaching out, simply smile and mirror the gesture. It is not considered rude; it is a sign of modesty and respect.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear when visiting Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is a Muslim-majority country, and modest clothing is appreciated, especially outside tourist resorts. For women, cover shoulders and knees in public; loose-fitting trousers, maxi skirts, and tunics work well. Men should avoid sleeveless tops and very short shorts in medinas and local neighborhoods. In beach resorts like Agadir, Western swimwear is acceptable at pools and beaches. When visiting mosques (non-Muslims can enter Hassan II Mosque in Casablanca), women should cover their hair and both genders should cover arms and legs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I tip in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping is customary and expected in Morocco. In restaurants, leave from 10-15% of the bill or round up generously. For cafe servers, from 2-5 MAD per drink is standard. Hotel porters expect from 10-20 MAD per bag. Tour guides typically receive from 100-200 MAD per day, and drivers from 50-100 MAD per day. Hammam attendants expect from 20-50 MAD. Small tips of from 5-10 MAD are appreciated for anyone who provides helpful directions or assistance in the medina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can non-Muslims enter mosques in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Morocco, non-Muslims are generally not permitted to enter active mosques. The major exception is the Hassan II Mosque in Casablanca, which offers guided tours to visitors of all faiths. You can admire mosque architecture from the outside and photograph exteriors respectfully. Never attempt to enter a mosque during prayer times, and always be quiet and respectful near mosque entrances. Some historic madrasas (Islamic schools) like Medersa Ben Youssef in Marrakech are open to all visitors as museums.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to take photos of people in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always ask permission before photographing Moroccans, especially in medinas and rural areas. Many people are happy to be photographed, but some, particularly older women and people in traditional dress, may decline for personal or religious reasons. Respect their wishes. Be aware that some people in tourist areas like Jemaa el-Fnaa in Marrakech may pose for photos and then demand payment (from 10-20 MAD is fair). Never photograph military installations, police, or government buildings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I haggle properly in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Haggling is expected and even enjoyed in Moroccan souks and markets. Start by asking the price, then offer around 30-40% of the asking price. The seller will counter, and you gradually meet somewhere in the middle, typically paying 50-70% of the initial price. Stay friendly and good-humored throughout. Walk away if the price is too high; the seller may call you back with a better offer. Never haggle aggressively or insult the quality of goods. Fixed-price shops and supermarkets do not involve haggling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I know about visiting Morocco during Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During Ramadan, Muslims fast from sunrise to sunset. As a visitor, you are not expected to fast, but you should avoid eating, drinking, or smoking in public during daylight hours as a sign of respect. Many restaurants close during the day but open after iftar (the sunset meal). Alcohol is generally unavailable during Ramadan except in international hotels. The atmosphere after sunset is festive and communal, making iftar meals a wonderful cultural experience. Business hours may be shorter during Ramadan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it true you should eat with your right hand in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in Moroccan culture the right hand is used for eating, greeting, and giving or receiving items. The left hand is traditionally considered unclean. When eating communal dishes like tagine or couscous, always use your right hand. If you are left-handed, try to use your right hand for eating and especially for giving and receiving items. When eating bread, tear pieces with your right hand. Cutlery is available in most restaurants, but traditional meals at riads or with local families are often eaten by hand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What basic Darija phrases should I learn before visiting Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Learning a few Darija (Moroccan Arabic) phrases goes a long way. Essential phrases include: Salam (hello), La bes (how are you), Shukran (thank you), Afak (please), Bslama (goodbye), Iyyeh/La (yes/no), Bshhal (how much), Smehli (excuse me), and Inshallah (God willing). Even attempting to speak Darija will earn you warm smiles and respect from locals. French is also widely spoken in cities, and many Moroccans in tourist areas speak English and Spanish.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any topics I should avoid discussing in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While Moroccans are generally open and welcoming, certain topics should be approached with sensitivity. Avoid criticizing the King or the royal family, as this is illegal under Moroccan law. Do not disrespect Islam or make negative comments about religion. The Western Sahara conflict is a sensitive political issue. Avoid discussions about personal income or wealth. Moroccan hospitality is legendary, so if someone invites you for tea or a meal, it is polite to accept or decline gracefully rather than making excuses.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: GREETINGS
   ═══════════════════════════════════════════════════════════════ */

const greetingsGuide = [
  {
    context: 'Between Men',
    description: 'Men greet each other with a firm handshake, often prolonged. Close friends and family exchange cheek kisses, typically alternating left-right. In more traditional settings, men may touch their heart with the right hand after the handshake as a sign of sincerity.',
    icon: Users,
  },
  {
    context: 'Between Women',
    description: 'Women greet each other with cheek kisses, usually two (left-right), though some regions do one or three. A warm handshake is also common among acquaintances. The greeting is often accompanied by asking after family members and health.',
    icon: Heart,
  },
  {
    context: 'Between Opposite Genders',
    description: 'This depends on the individual and setting. In cosmopolitan areas like Casablanca and Marrakech, handshakes between men and women are common. In conservative areas, a woman may place her hand over her heart instead. Always let the Moroccan person initiate and follow their lead.',
    icon: HandHeart,
  },
  {
    context: 'Verbal Greetings',
    description: 'Start with "Salam Alaikum" (peace be upon you), responded with "Wa Alaikum Salam." Follow with "La bes?" (how are you) and "Hamdullah" (praise God, meaning fine). Moroccans appreciate visitors who attempt even basic greetings in Darija or Arabic.',
    icon: MessageCircle,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRESS CODE
   ═══════════════════════════════════════════════════════════════ */

const dressCodeTips = [
  { area: 'Medinas & Local Areas', women: 'Cover shoulders and knees. Loose trousers, maxi skirts, tunics, and light scarves work well. Avoid tight or revealing clothing.', men: 'Long trousers or below-knee shorts. T-shirts are fine; avoid sleeveless tops in traditional neighborhoods.', icon: MapPin },
  { area: 'Beach Resorts (Agadir, Essaouira)', women: 'Western swimwear at pools and resort beaches. Cover up when leaving the beach area. Topless sunbathing is not acceptable.', men: 'Standard swimwear at pools and beaches. Wear a shirt and trousers or longer shorts when walking through town.', icon: Globe },
  { area: 'Mosques & Religious Sites', women: 'Cover hair, arms, and legs completely. Bring a scarf or shawl. Remove shoes before entering. Loose, non-transparent clothing required.', men: 'Long trousers and sleeved shirt. Remove shoes before entering. No shorts or sleeveless tops at religious sites.', icon: ShieldCheck },
  { area: 'Upscale Restaurants & Hotels', women: 'Smart casual. Dresses, elegant trousers, and blouses. Some upscale venues have dress codes; check in advance.', men: 'Smart casual. Collared shirts, chinos, or dress trousers. Closed-toe shoes preferred at high-end establishments.', icon: Sparkles },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DINING ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const diningRules = [
  'Always eat with your right hand. The left hand is considered unclean in Moroccan tradition.',
  'When eating from a communal tagine or couscous dish, eat only from the section directly in front of you.',
  'Bread is sacred in Moroccan culture. Never waste it, place it upside down, or throw it away.',
  'If invited to a Moroccan home, remove your shoes at the door and bring a small gift such as pastries or sugar.',
  'Accept at least one glass of mint tea when offered. Declining is considered impolite. The host may pour three glasses; it is customary to drink all three.',
  'Wait for the host to say "Bismillah" (in the name of God) before eating. This signals the start of the meal.',
  'Wash your hands before and after the meal. Your host will often bring a basin and pitcher of water.',
  'Compliment the food generously. Moroccans take great pride in their cooking and hospitality.',
  'The host may insist you eat more even when you are full. A polite "Hamdullah, I am satisfied" is accepted.',
  'When finished, leave a small amount on your plate to show you have been well-fed and are satisfied.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TIPPING GUIDE
   ═══════════════════════════════════════════════════════════════ */

const tippingGuide = [
  { service: 'Restaurant Waiter', amount: 'from 10-15% of the bill', note: 'Leave cash on the table. Credit card tips may not reach the server.' },
  { service: 'Cafe Server', amount: 'from 2-5 MAD per drink', note: 'Round up the bill or leave a few coins for coffee and tea service.' },
  { service: 'Hotel Porter', amount: 'from 10-20 MAD per bag', note: 'Tip when luggage is delivered to your room.' },
  { service: 'Tour Guide (Full Day)', amount: 'from 100-200 MAD per day', note: 'More for exceptional service or small private group tours.' },
  { service: 'Driver', amount: 'from 50-100 MAD per day', note: 'Tip at the end of the journey or at the end of a multi-day tour.' },
  { service: 'Hammam Attendant', amount: 'from 20-50 MAD', note: 'Tip after your scrub and treatment in addition to the hammam fee.' },
  { service: 'Riad / Hotel Housekeeper', amount: 'from 10-20 MAD per day', note: 'Leave on the pillow or bedside table daily.' },
  { service: 'Medina Directions Helper', amount: 'from 5-10 MAD', note: 'For someone who walks you to your destination in the medina.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HAGGLING STEPS
   ═══════════════════════════════════════════════════════════════ */

const hagglingSteps = [
  { step: 1, title: 'Browse First, Then Ask', detail: 'Walk around the souk to get a feel for prices before engaging. Show casual interest rather than excitement about an item. The moment you seem eager, the price goes up.' },
  { step: 2, title: 'Ask the Price Casually', detail: 'When you find something you like, ask "Bshhal?" (how much). The first price quoted is almost always significantly inflated, often by 2-3 times the expected selling price.' },
  { step: 3, title: 'Start at 30-40% of the Asking Price', detail: 'Make your first counter-offer at roughly a third of the asking price. This gives room for negotiation. The seller expects this and will not be offended.' },
  { step: 4, title: 'Negotiate with a Smile', detail: 'Haggling should be enjoyable for both parties. Stay friendly, humorous, and patient. Never raise your voice, show frustration, or insult the quality of the goods.' },
  { step: 5, title: 'The Walk-Away Technique', detail: 'If you cannot reach an agreeable price, politely say "Shukran, la" (thank you, no) and start walking away. The seller will often call you back with a better price.' },
  { step: 6, title: 'Settle Around 50-70% of the Original Price', detail: 'A fair deal typically lands between half and two-thirds of the initial asking price. Both parties should feel satisfied. If you are happy with the price, shake hands and pay.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DARIJA PHRASES
   ═══════════════════════════════════════════════════════════════ */

const darijaPhrases = [
  { darija: 'Salam Alaikum', pronunciation: 'sa-LAHM a-LAY-kum', english: 'Peace be upon you (formal hello)' },
  { darija: 'La bes?', pronunciation: 'la-BESS', english: 'How are you? / Are you well?' },
  { darija: 'Hamdullah', pronunciation: 'ham-DOO-lah', english: 'Praise God (I am fine)' },
  { darija: 'Shukran', pronunciation: 'SHOO-kran', english: 'Thank you' },
  { darija: 'Shukran bezef', pronunciation: 'SHOO-kran beh-ZEFF', english: 'Thank you very much' },
  { darija: 'Afak', pronunciation: 'ah-FAHK', english: 'Please' },
  { darija: 'Bslama', pronunciation: 'b-SLA-ma', english: 'Goodbye' },
  { darija: 'Iyyeh / La', pronunciation: 'ee-YEH / la', english: 'Yes / No' },
  { darija: 'Smehli', pronunciation: 'SMEH-lee', english: 'Excuse me / Sorry' },
  { darija: 'Bshhal?', pronunciation: 'b-SHHAL', english: 'How much?' },
  { darija: 'Ghali bezef', pronunciation: 'GA-lee beh-ZEFF', english: 'Too expensive' },
  { darija: 'Inshallah', pronunciation: 'in-SHA-lah', english: 'God willing' },
  { darija: 'Bismillah', pronunciation: 'bis-MIL-lah', english: 'In the name of God (said before eating)' },
  { darija: 'Merhba', pronunciation: 'MER-hba', english: 'Welcome' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DO'S AND DON'TS
   ═══════════════════════════════════════════════════════════════ */

const dosList = [
  'Learn and use basic Darija greetings like "Salam" and "Shukran"',
  'Dress modestly, especially in medinas and religious areas',
  'Remove your shoes when entering a Moroccan home or mosque',
  'Accept mint tea when offered as a sign of hospitality',
  'Eat with your right hand during traditional meals',
  'Ask permission before photographing people',
  'Haggle respectfully in souks and markets',
  'Respect prayer times and avoid blocking mosque entrances',
  'Carry small bills and coins for tips and small purchases',
  'Show genuine interest in Moroccan culture and traditions',
];

const dontsList = [
  'Do not criticize the King or the royal family (it is illegal)',
  'Do not eat, drink, or smoke in public during Ramadan daylight hours',
  'Do not enter mosques unless explicitly open to non-Muslims',
  'Do not photograph military or government buildings',
  'Do not use your left hand for eating, greeting, or giving items',
  'Do not show the soles of your feet or point them at people',
  'Do not display excessive public affection (hand-holding is fine)',
  'Do not assume all women want to shake hands with men',
  'Do not drink alcohol openly in public outside of licensed venues',
  'Do not waste bread or treat it disrespectfully',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/etiquette',
    title: 'Quick Etiquette Overview',
    description: 'Condensed Moroccan etiquette essentials at a glance for quick reference before your trip.',
    icon: Heart,
  },
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into Moroccan traditions, festivals, arts, music, and the rich cultural heritage of the kingdom.',
    icon: Globe,
  },
  {
    href: '/what-to-wear-in-morocco',
    title: 'What to Wear in Morocco',
    description: 'Complete dress code guide for every situation, from medinas and mosques to beaches and desert tours.',
    icon: Shirt,
  },
  {
    href: '/language',
    title: 'Morocco Language Guide',
    description: 'Comprehensive guide to languages spoken in Morocco with essential phrases in Darija, French, and Amazigh.',
    icon: MessageCircle,
  },
  {
    href: '/darija',
    title: 'Darija Phrasebook',
    description: 'Over 100 Moroccan Arabic phrases with pronunciation guides for navigating souks, restaurants, and daily life.',
    icon: BookOpen,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCulturalEtiquettePage() {
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
            <span className="text-white">Morocco Cultural Etiquette</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Cultural Customs &amp; Etiquette
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Etiquette Guide
            <br className="hidden md:block" /> for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Greetings, dress code, dining customs, mosque etiquette, haggling, tipping, Ramadan behavior,
            and essential Darija phrases to travel Morocco respectfully and confidently.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Respect the Culture, Enrich Your Experience
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a country where ancient traditions blend with modern life, and understanding
                local customs is the key to having meaningful interactions with Moroccans. From the
                elaborate tea-pouring rituals to the art of souk haggling, cultural etiquette here is
                not just about rules &mdash; it is an invitation into one of the world&apos;s most
                hospitable societies.
              </p>
              <p>
                Moroccan culture is deeply rooted in Islamic traditions, Amazigh (Berber) heritage, and
                centuries of cross-cultural exchange with Arab, African, and European influences. The
                result is a warm, generous, and deeply social culture where hospitality is sacred and
                respect is earned through small, thoughtful gestures.
              </p>
              <p>
                Whether you are navigating the winding medinas of Fes, sharing a tagine with a local
                family, or photographing the stunning architecture of Marrakech, this guide will help
                you avoid cultural missteps and connect authentically with the people you meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Cultural Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Culture at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Quick cultural facts every visitor should know before arriving in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Official Religion', value: 'Islam', detail: '99% of Moroccans are Sunni Muslim', icon: Moon },
              { label: 'Main Languages', value: 'Darija & French', detail: 'Arabic, Amazigh, French, and Spanish spoken', icon: MessageCircle },
              { label: 'Greeting Style', value: 'Warm & Personal', detail: 'Handshakes, cheek kisses, and heart touching', icon: Heart },
              { label: 'Hospitality', value: 'Sacred Tradition', detail: 'Mint tea and generosity are pillars of culture', icon: Coffee },
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

      {/* ── Greetings Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Greetings &amp; Social Interactions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to greet people properly in Morocco &mdash; from handshakes to cheek kisses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {greetingsGuide.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.context} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.context}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dress Code ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dress Code by Situation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to wear in Morocco depends on where you are. Here is a breakdown by location.
          </p>

          <div className="space-y-6">
            {dressCodeTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.area} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {tip.area}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                      <p className="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Women</p>
                      <p className="text-sm text-[var(--text-secondary)]">{tip.women}</p>
                    </div>
                    <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                      <p className="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Men</p>
                      <p className="text-sm text-[var(--text-secondary)]">{tip.men}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mosque Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mosque &amp; Religious Site Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respectful behavior at mosques and religious sites is essential in Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {[
                { rule: 'Entry Restrictions', detail: 'Non-Muslims cannot enter most active mosques in Morocco. The exception is the Hassan II Mosque in Casablanca, which offers guided tours. Historic madrasas (like Ben Youssef in Marrakech) are open as museums.', icon: Shield },
                { rule: 'Remove Your Shoes', detail: 'Always remove shoes before entering any mosque or religious space. Carry them with you or place them on the shoe rack provided. Wear clean, hole-free socks.', icon: CheckCircle },
                { rule: 'Dress Conservatively', detail: 'Cover arms, legs, and (for women) hair completely. Bring a scarf or shawl. Some mosques provide coverings for visitors, but do not rely on this.', icon: Shirt },
                { rule: 'Photography', detail: 'Photography inside mosques is generally prohibited. You may photograph the exterior and surrounding areas. At the Hassan II Mosque, photography rules are explained during the guided tour.', icon: Camera },
                { rule: 'Prayer Times', detail: 'Be aware of the five daily prayer times (announced by the adhan, or call to prayer). Avoid visiting mosques during prayer. Be quiet and respectful when near any mosque during the adhan.', icon: Clock },
                { rule: 'General Behavior', detail: 'Speak softly, do not point at worshippers, and avoid walking in front of people who are praying. Show reverence even if you are just admiring the architecture from outside.', icon: Eye },
              ].map((item) => {
                const RuleIcon = item.icon;
                return (
                  <div key={item.rule} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.rule}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dining Etiquette & Tea Ceremony ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dining Etiquette &amp; Tea Ceremony
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Food is central to Moroccan culture. Master these dining customs to honor your hosts.
          </p>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              <CheckCircle className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
              Essential Dining Rules
            </h3>
            <div className="space-y-3">
              {diningRules.map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              <Coffee className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
              The Moroccan Mint Tea Ceremony
            </h3>
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Mint tea (&ldquo;atay&rdquo;) is far more than a drink in Morocco &mdash; it is a symbol of
                hospitality, friendship, and welcome. The tea is prepared with Chinese gunpowder green tea,
                fresh spearmint, and generous amounts of sugar, poured from a height to create a frothy top.
              </p>
              <p>
                When offered tea, always accept at least one glass. The traditional serving is three glasses:
                the first is &ldquo;gentle as life,&rdquo; the second is &ldquo;strong as love,&rdquo; and the
                third is &ldquo;bitter as death.&rdquo; Drinking all three is a sign of respect and appreciation.
              </p>
              <p>
                Never rush the tea ceremony. It is a time for conversation, connection, and building
                relationships. In shops and with carpet sellers, tea is offered as part of the social ritual
                of negotiation, and accepting does not obligate you to purchase anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tipping Customs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tipping Customs in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tipping is customary and expected throughout Morocco. Here is what to tip for every situation.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {tippingGuide.map((item) => (
                <div key={item.service} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Banknote className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.service}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        {item.amount}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Rules ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Rules &amp; Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is incredibly photogenic, but respecting people and places matters more than any shot.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Always Ask First', detail: 'Before photographing anyone, make eye contact and gesture with your camera or simply ask. A smile and "Photo?" in any language is understood. Respect a "no" gracefully.', icon: Users },
              { title: 'Jemaa el-Fnaa Performers', detail: 'Snake charmers, musicians, and performers in Marrakech expect payment for photos (from 10-20 MAD is fair). Agree on the price before taking the photo to avoid conflict.', icon: Banknote },
              { title: 'Women & Children', detail: 'Be especially sensitive about photographing women and children. Many families, particularly in rural areas, prefer not to be photographed. Never photograph children without parental consent.', icon: Heart },
              { title: 'Religious Sites', detail: 'Photography inside mosques is generally prohibited. Photograph exteriors from a respectful distance. Madrasas open as museums usually allow photos without flash.', icon: ShieldCheck },
              { title: 'Military & Government', detail: 'Never photograph military installations, police officers, government buildings, or border areas. Your camera or phone may be confiscated and you could face questioning.', icon: AlertTriangle },
              { title: 'General Tips', detail: 'Carry a small photo printer or offer to send digital photos to people who pose for you. This builds goodwill. Landscapes, architecture, and food are always safe subjects to photograph freely.', icon: Lightbulb },
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

      {/* ── Haggling Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Art of Haggling in Moroccan Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Haggling is an expected and enjoyable part of shopping in Morocco. Follow these steps
            for a fair deal.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {hagglingSteps.map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-white">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  When Not to Haggle
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Fixed-price shops (often marked &ldquo;prix fixe&rdquo;), supermarkets, pharmacies, official
                  cooperatives (like argan oil women&apos;s cooperatives), and restaurants have set prices.
                  Taxis should use the meter in cities; negotiate the fare for longer journeys before
                  departing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ramadan Behavior ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visiting Morocco During Ramadan
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ramadan is a sacred month of fasting. Here is how to be a respectful visitor during this special time.
          </p>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="space-y-6">
              {[
                { title: 'No Public Eating or Drinking', detail: 'During daylight hours, avoid eating, drinking, or smoking in public. You can eat inside your hotel or riad, but not on the street or in public view. This is the most important rule for visitors during Ramadan.', icon: Coffee },
                { title: 'Adjusted Business Hours', detail: 'Many shops, restaurants, and attractions operate on shorter hours during Ramadan. Government offices may close early. Museums and sites may have reduced schedules. Plan your day accordingly.', icon: Clock },
                { title: 'Iftar Experience', detail: 'Iftar (the sunset meal that breaks the fast) is a communal celebration. Many restaurants offer special iftar menus. If you are invited to share iftar with a Moroccan family, it is a privilege and one of the best cultural experiences in Morocco.', icon: Heart },
                { title: 'Dress Extra Modestly', detail: 'During Ramadan, be even more conservative with your clothing choices. Cover shoulders, knees, and avoid tight or revealing garments throughout the day.', icon: Shirt },
                { title: 'Alcohol Restrictions', detail: 'Alcohol is much harder to find during Ramadan. Most restaurants and bars stop serving alcohol. International hotels may continue to serve alcohol in private areas, but be discreet.', icon: AlertTriangle },
                { title: 'Evening Festivities', detail: 'After iftar, Moroccan cities come alive. Streets fill with people, cafes buzz, and there is a festive atmosphere until late at night. This is a wonderful time to explore medinas and enjoy the communal spirit.', icon: Sparkles },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
        </div>
      </section>

      {/* ── Gender Norms ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gender Norms &amp; Social Expectations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding gender dynamics helps you navigate social situations in Morocco with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Public Displays of Affection', detail: 'Moroccan couples rarely show affection in public. Hand-holding is acceptable for married couples, but kissing, hugging, and other displays of intimacy in public are frowned upon and may attract negative attention. This applies equally to Moroccan and foreign couples.', icon: Heart },
              { title: 'Solo Female Travelers', detail: 'Morocco is generally safe for solo female travelers, especially in tourist areas. Dress modestly, project confidence, and ignore unwanted attention. Walk purposefully, wear sunglasses, and consider hiring local female guides in less touristy areas. Group tours are another great option.', icon: Shield },
              { title: 'Mixed-Gender Spaces', detail: 'Some traditional hammams (bathhouses) and cafes are gender-separated. Men-only cafes are common in rural areas. Tourist establishments are always mixed. When in doubt, observe who is inside before entering.', icon: Eye },
              { title: 'Same-Sex Travelers', detail: 'Homosexuality is illegal in Morocco. Same-sex couples should exercise discretion in public. Two friends of the same gender sharing a hotel room or walking together is completely normal and will not attract attention.', icon: ShieldCheck },
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

      {/* ── Do's and Don'ts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Do&apos;s and Don&apos;ts in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your quick-reference checklist for respectful behavior in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Do&apos;s
                </h3>
              </div>
              <div className="space-y-3">
                {dosList.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <CircleAlert className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Don&apos;ts
                </h3>
              </div>
              <div className="space-y-3">
                {dontsList.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CircleAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Darija Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Arabic &amp; Darija Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Even a few words in Darija (Moroccan Arabic) will open doors and earn warm smiles.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {darijaPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="min-w-[140px]">
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
                  Language Tip
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  French is widely spoken in cities and is useful as a fallback. In northern Morocco
                  (Tangier, Tetouan, Chefchaouen), many people also speak Spanish. English is increasingly
                  common among younger Moroccans and in tourist areas. However, attempting Darija, even
                  imperfectly, shows respect and will significantly enhance your interactions.
                </p>
              </div>
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
            Answers to the most common questions about Moroccan cultural etiquette and customs.
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
            Continue learning about Moroccan culture and customs with these essential guides.
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
          <Heart className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Travel Morocco with Respect and Confidence
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Understanding Moroccan etiquette is not about following strict rules &mdash; it is about
            showing respect for a culture that will welcome you with open arms. Learn a few Darija
            phrases, dress modestly, and embrace the warmth of Moroccan hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/culture"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Explore Moroccan Culture
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/what-to-wear-in-morocco"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              What to Wear Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Cultural norms vary across Morocco, from cosmopolitan Casablanca to traditional rural villages.
            When in doubt, observe locals and follow their lead. Information on this page is current as of March 2026.
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
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
  HandHeart,
  Coffee,
  MessageCircle,
  UtensilsCrossed,
  Wheat,
  Moon,
  ShieldCheck,
  AlertTriangle,
  Globe,
  Hand,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Food Etiquette Guide 2026 | Dining Customs, Tea Ceremony & Tips',
  description:
    'Complete Moroccan food etiquette guide for 2026. Learn how to eat with your hands, communal tagine traditions, mint tea ceremony, bread etiquette, guest customs, street food tips, Ramadan dining, tipping at restaurants, and dietary restriction phrases in Darija.',
  keywords: [
    'Moroccan food etiquette',
    'eating in Morocco tips',
    'Moroccan dining customs',
    'Morocco eating with hands',
    'Moroccan tea ceremony etiquette',
    'Morocco bread etiquette',
    'communal tagine tradition',
    'Morocco guest etiquette',
    'Morocco restaurant tipping',
    'Morocco street food etiquette',
    'Ramadan dining Morocco',
    'Morocco dietary restrictions',
    'Moroccan meal customs',
    'Morocco food culture',
    'how to eat in Morocco',
    'Moroccan hospitality food',
  ],
  openGraph: {
    title: 'Moroccan Food Etiquette Guide 2026 | Dining Customs, Tea Ceremony & Tips',
    description:
      'Master Moroccan dining etiquette before your trip. Eating with hands, communal tagine traditions, tea ceremony, bread customs, guest etiquette, street food tips, and Ramadan dining rules.',
    url: `${BASE_URL}/morocco-food-etiquette`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan tagine and mint tea representing Moroccan food etiquette and dining customs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Food Etiquette Guide 2026 | Dining Customs & Tips',
    description:
      'Eating with hands, communal tagine, tea ceremony, bread customs, guest etiquette, street food, Ramadan dining & tipping. Everything you need to dine respectfully in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-food-etiquette` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-food-etiquette`,
  name: 'Moroccan Food Etiquette Guide 2026 | Dining Customs, Tea Ceremony & Tips',
  description:
    'Complete guide to Moroccan food etiquette in 2026, covering eating with your hands, communal tagine traditions, mint tea ceremony, bread customs, guest etiquette, restaurant vs home dining, street food, Ramadan considerations, dietary restrictions, and tipping.',
  url: `${BASE_URL}/morocco-food-etiquette`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-food-etiquette`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Food Etiquette', item: `${BASE_URL}/morocco-food-etiquette` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you really eat with your hands in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, traditional Moroccan meals are eaten with the right hand, especially when dining at home or at riads. Bread serves as your primary utensil, used to scoop food from communal dishes. Always use your right hand, as the left is considered unclean. In modern restaurants and tourist establishments, cutlery is provided, so you can choose whichever method you prefer. When eating with a Moroccan family, using your hands shows appreciation for the tradition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it rude to refuse food in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan hospitality is legendary, and hosts will insist you eat generously. Refusing food entirely can be seen as impolite. If you are full, the best approach is to eat a small amount and say "Hamdullah" (praise God) to indicate you are satisfied. Your host may still encourage you to eat more; this is a sign of generosity, not pressure. Politely declining with a smile while praising the food is always well-received.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I tip at a restaurant in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In sit-down restaurants, tipping from 10-15% of the total bill is standard. In casual cafes, leaving from 2-5 MAD per drink or rounding up the bill is customary. Always tip in cash, as credit card tips may not reach the server. In upscale restaurants, check if a service charge is already included in the bill. For street food vendors, tipping is not expected but rounding up by a few dirhams is a kind gesture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I find vegetarian or vegan food in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers many naturally vegetarian dishes, including vegetable tagines, lentil soup (harira without meat), zaalouk (eggplant salad), cooked salads, couscous with vegetables, and a wide variety of fresh salads and bread. However, the concept of strict veganism is not widely understood. Meat stock may be used in seemingly vegetable dishes. Learn to say "bla lhem" (without meat) in Darija. In Marrakech, Fes, and other tourist cities, dedicated vegetarian restaurants are increasingly common.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is bread so important in Moroccan culture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bread (khobz) is considered sacred in Moroccan culture, tied to Islamic reverence for sustenance. It is served with every meal and functions as the primary eating utensil. Moroccans never waste bread, never place it upside down, never throw it in the garbage, and never cut it with a knife (it is always torn by hand). Stale bread is often given to animals rather than discarded. Disrespecting bread is considered deeply offensive.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens during a Moroccan tea ceremony?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan mint tea (atay) is prepared with Chinese gunpowder green tea, fresh spearmint leaves, and generous sugar. The host pours from a height to create a frothy top, which is a sign of skill. Tea is traditionally served three times: the first glass is "gentle as life," the second is "strong as love," and the third is "bitter as death." Accepting at least one glass is expected; refusing is considered impolite. The ceremony is a time for conversation and connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I eat during Ramadan as a tourist in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a non-Muslim tourist, you are not required to fast during Ramadan, but you should avoid eating, drinking, or smoking in public during daylight hours out of respect. Hotels and riads serve meals to guests throughout the day. Many restaurants close during the daytime but open for iftar (the sunset meal). Tourist areas in Marrakech and other major cities may have some restaurants that remain open discreetly. The iftar experience after sunset is a highlight worth embracing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I remove my shoes before entering a Moroccan home for dinner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always remove your shoes before entering a Moroccan home. Look for shoes at the entrance as your cue. Your host will likely provide slippers. This is a universal custom in Moroccan households. You should also wash your hands before the meal; your host will often bring a basin and pitcher of water to pour over your hands. Bringing a small gift such as pastries, dates, or sugar is a thoughtful gesture when invited for a meal.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: EATING WITH HANDS
   ═══════════════════════════════════════════════════════════════ */

const handEatingRules = [
  {
    rule: 'Always Use Your Right Hand',
    detail: 'The left hand is considered unclean in Moroccan and Islamic tradition. Use only your right hand for eating, passing food, and tearing bread. If you are naturally left-handed, make an effort to use your right hand at the table, especially when dining with locals.',
    icon: Hand,
  },
  {
    rule: 'Bread Is Your Utensil',
    detail: 'Tear small pieces of khobz (Moroccan bread) with your right hand and use them to scoop food from the communal dish. Bread replaces forks and spoons in traditional settings. Pinch the bread around a piece of meat or vegetable to pick it up cleanly.',
    icon: Wheat,
  },
  {
    rule: 'Eat From Your Section Only',
    detail: 'When sharing a communal tagine or couscous dish, eat only from the area directly in front of you. Never reach across to the other side. The host may place choice pieces of meat or vegetables in front of you as a gesture of honor.',
    icon: Users,
  },
  {
    rule: 'Wash Hands Before and After',
    detail: 'Your host will bring a basin, pitcher of water, and towel for hand-washing before the meal. This ritual cleansing is both practical and symbolic. You will wash again after the meal. In restaurants, a sink or wet wipes may be provided instead.',
    icon: Sparkles,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMUNAL TAGINE TRADITION
   ═══════════════════════════════════════════════════════════════ */

const tagineRules = [
  'Everyone eats from the same central dish, which is placed in the middle of the table or on a low round table (meida).',
  'Wait for the host or eldest person to say "Bismillah" (in the name of God) before anyone begins eating.',
  'Eat only from the section of the dish closest to you. Reaching across is considered rude.',
  'The host will push the best pieces of meat, prunes, or vegetables toward honored guests. Accept graciously.',
  'Pace yourself with the group. Eating too quickly or too slowly draws attention.',
  'When the host says "Kul, kul" (eat, eat), it is encouragement, not a command. A polite smile and continued eating is the best response.',
  'Leave a small amount of food on the communal plate when finished to show you have been well-fed.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA CEREMONY
   ═══════════════════════════════════════════════════════════════ */

const teaCeremonySteps = [
  { step: 1, title: 'The Preparation', detail: 'Chinese gunpowder green tea is rinsed, then brewed with large bundles of fresh spearmint and generous sugar. The tea is left to steep for several minutes. The host controls the entire process with practiced care.' },
  { step: 2, title: 'The Pour', detail: 'Tea is poured from a great height (sometimes over a foot) into small decorated glasses. This aerates the tea and creates a signature frothy top. A skilled pour is a point of pride for the host.' },
  { step: 3, title: 'The Tasting', detail: 'The host pours a glass, tastes it, and may pour it back into the pot to adjust sweetness or strength. This is normal. When satisfied, the host serves guests first, then family.' },
  { step: 4, title: 'Accept Graciously', detail: 'Always accept at least one glass. Declining tea is considered impolite and a rejection of hospitality. Hold the glass by the rim and top, not the sides, as it will be very hot.' },
  { step: 5, title: 'Three Glasses Tradition', detail: 'Traditionally, three rounds are served. The first is "gentle as life," the second is "strong as love," and the third is "bitter as death." Drinking all three honors the host.' },
  { step: 6, title: 'No Rush', detail: 'The tea ceremony is a time for conversation and bonding. Never rush it. In shops, tea is offered during negotiations. Accepting does not obligate you to buy anything.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BREAD ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const breadRules = [
  { rule: 'Never Waste Bread', detail: 'Bread is sacred in Moroccan culture. Leftover bread is given to animals, dried for later use, or donated, but never discarded in the trash. Throwing bread away is deeply offensive.', icon: AlertTriangle },
  { rule: 'Never Place Bread Upside Down', detail: 'An upside-down loaf is considered disrespectful, almost a curse. If you notice bread placed face-down, turn it right-side up. Moroccans are very particular about this.', icon: CircleAlert },
  { rule: 'Tear, Never Cut', detail: 'Bread is always torn by hand, never sliced with a knife. Using a knife on bread is considered improper. Tear small, manageable pieces to use as your eating utensil.', icon: Hand },
  { rule: 'Bread Comes with Every Meal', detail: 'Whether breakfast, lunch, or dinner, bread accompanies every Moroccan meal. The round flatbread (khobz) is baked fresh daily in communal neighborhood ovens (ferran) or at home.', icon: Clock },
  { rule: 'If Bread Falls on the Ground', detail: 'Moroccans will pick up fallen bread, kiss it, and touch it to their forehead as a sign of respect before setting it aside. You do not need to mimic this, but do pick up dropped bread rather than leaving it on the floor.', icon: Heart },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GUEST ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const guestEtiquette = [
  { tip: 'Remove Your Shoes', detail: 'Always remove shoes at the entrance of a Moroccan home. Look for shoes lined up by the door as your cue. Your host will likely offer slippers or babouches (traditional slippers).', icon: Home },
  { tip: 'Bring a Gift', detail: 'Bring pastries from a local patisserie, a box of dates, sugar cones, or flowers. Avoid alcohol unless you know your host drinks. Gifts for children are always appreciated.', icon: Heart },
  { tip: 'Compliment the Cook', detail: 'Praising the food is essential. Say "Bneen bezef" (very delicious) or "Allah y-barek" (God bless). Moroccan cooks take immense pride in their meals, and genuine praise means the world.', icon: MessageCircle },
  { tip: 'Eat Generously', detail: 'Your host will urge you to eat more repeatedly. This is a sign of affection and generosity, not pressure. Eat enough to honor the effort, even if you need to pace yourself.', icon: UtensilsCrossed },
  { tip: 'Leave a Little on the Plate', detail: 'Leaving a small amount indicates you have been well-fed. An empty plate suggests you are still hungry, and the host may worry they did not prepare enough food.', icon: CheckCircle },
  { tip: 'Stay for Tea', detail: 'After the meal, mint tea is always served. Leaving immediately after eating is considered abrupt. The post-meal tea ceremony is a time for relaxed conversation and gratitude.', icon: Coffee },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RESTAURANT VS HOME DINING
   ═══════════════════════════════════════════════════════════════ */

const diningComparison = [
  { aspect: 'Seating', home: 'Low round table (meida) with floor cushions or sofas. Guests of honor sit beside the host.', restaurant: 'Standard tables and chairs. Upscale riads may offer traditional low seating for atmosphere.' },
  { aspect: 'Utensils', home: 'Bread and right hand. Spoons for soups and couscous. Forks and knives are rare at traditional tables.', restaurant: 'Full cutlery provided. You may still use bread if you prefer the traditional approach.' },
  { aspect: 'Ordering', home: 'The host decides the menu. You eat what is served with gratitude. Portions are always generous.', restaurant: 'Order from a menu. Ask for recommendations. Waiters may suggest the daily tagine special.' },
  { aspect: 'Pace', home: 'Slower, communal affair. Multiple courses over 1-2 hours. Conversation is central.', restaurant: 'Standard restaurant pace. Street food stalls are grab-and-go. Upscale venues are leisurely.' },
  { aspect: 'Payment', home: 'Never offer to pay. Your attendance is the gift. Bring a thoughtful host gift instead.', restaurant: 'The person who invited usually pays. Splitting bills is uncommon but accepted among friends.' },
  { aspect: 'Tipping', home: 'Not applicable. Express thanks through compliments and a return invitation.', restaurant: 'From 10-15% of the bill. Leave cash on the table for the server.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: STREET FOOD ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const streetFoodTips = [
  { tip: 'Follow the Locals', detail: 'The busiest stalls have the freshest food and highest turnover. If Moroccans are queuing, the food is good and safe. Empty stalls with no local customers are a red flag.', icon: Users },
  { tip: 'Eat Standing or at the Counter', detail: 'Most street food is eaten standing at the stall or on small stools. This is perfectly normal. Some vendors have a few seats; take one if available but do not linger during busy periods.', icon: MapPin },
  { tip: 'Pay Before or After (Ask)', detail: 'Some stalls require payment upfront; others expect you to pay after eating. Watch what locals do or simply ask. Prices at stalls are generally fixed and non-negotiable.', icon: Banknote },
  { tip: 'Use the Provided Bread', detail: 'Street food vendors often provide small pieces of bread with dishes like snail soup, bean stew (bessara), or grilled meats. Use the bread to scoop, just as in home dining.', icon: Wheat },
  { tip: 'Shared Condiments', detail: 'Salt, cumin, and harissa are communal at street stalls. Use the shared spoon or shaker, never double-dip, and pass condiments to others who are waiting.', icon: HandHeart },
  { tip: 'Typical Prices', detail: 'Street food is very affordable. Expect to pay from 5-15 MAD for a bowl of snail soup, from 10-20 MAD for a sandwich (bocadillo), and from 20-40 MAD for a grilled meat plate. Seasonal pricing can vary.', icon: Banknote },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RAMADAN DINING
   ═══════════════════════════════════════════════════════════════ */

const ramadanDining = [
  { rule: 'No Public Eating During Daylight', detail: 'Even as a tourist, avoid eating, drinking, or smoking in public between sunrise and sunset during Ramadan. Eat inside your hotel or riad. This is the most important rule for visitors.', icon: Moon },
  { rule: 'Hotel Meals Continue', detail: 'Hotels and riads continue to serve meals to guests. Some have screened dining areas for daytime eating. Breakfast may be served later than usual, and lunch options may be limited.', icon: ShieldCheck },
  { rule: 'Experience Iftar', detail: 'Iftar (the sunset meal that breaks the fast) begins with dates and harira soup. If you are invited to share iftar with a family, accept enthusiastically. It is one of the most authentic cultural experiences in Morocco.', icon: Heart },
  { rule: 'Suhoor Before Dawn', detail: 'Suhoor is the pre-dawn meal before the day&apos;s fast begins. Some restaurants and cafes open very early (around 3-4 AM) for suhoor. The atmosphere is quiet and communal.', icon: Clock },
  { rule: 'Limited Restaurant Hours', detail: 'Many restaurants close during the day and reopen after iftar (around 7-8 PM, depending on the season). Plan your meals accordingly. Stock up on snacks from supermarkets for daytime.', icon: AlertTriangle },
  { rule: 'Alcohol Restrictions', detail: 'Alcohol is largely unavailable during Ramadan. Licensed restaurants and bars usually stop serving. International hotels may serve alcohol discreetly in private areas.', icon: CircleAlert },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DIETARY RESTRICTIONS
   ═══════════════════════════════════════════════════════════════ */

const dietaryPhrases = [
  { english: 'Without meat', darija: 'Bla lhem', pronunciation: 'bla L-HEM', note: 'Covers all red meat. Specify chicken (djaj) or fish (hout) separately if needed.' },
  { english: 'Without chicken', darija: 'Bla djaj', pronunciation: 'bla DJAJ', note: 'Chicken is the most common Moroccan protein. This phrase is essential for vegetarians.' },
  { english: 'Without fish', darija: 'Bla hout', pronunciation: 'bla HOOT', note: 'Useful in coastal cities where fish is added to many dishes.' },
  { english: 'I am vegetarian', darija: 'Ana nabati', pronunciation: 'AH-na na-BA-tee', note: 'The concept is understood in tourist areas but may need further explanation in rural regions.' },
  { english: 'I am allergic to...', darija: 'Andi hasasiya men...', pronunciation: 'AN-dee ha-sa-SEE-ya men', note: 'Follow with the ingredient: peanuts (kaokaou), milk (hlib), gluten (gluten), eggs (beid).' },
  { english: 'No nuts please', darija: 'Bla gergo afak', pronunciation: 'bla GER-go ah-FAHK', note: 'Important for those with nut allergies. Nuts are common in pastries and tagines.' },
  { english: 'No dairy / milk', darija: 'Bla hlib', pronunciation: 'bla HLEEB', note: 'Dairy appears in many dishes. Butter and fresh cheese (jben) are staples.' },
  { english: 'Is this halal?', darija: 'Wash hada halal?', pronunciation: 'wash HA-da ha-LAL', note: 'Almost all food in Morocco is halal, but useful in areas with imported products.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TIPPING AT RESTAURANTS
   ═══════════════════════════════════════════════════════════════ */

const restaurantTipping = [
  { venue: 'Sit-Down Restaurant', amount: 'from 10-15% of the bill', note: 'Leave cash on the table. Some upscale restaurants add a service charge; check the bill first.' },
  { venue: 'Casual Cafe', amount: 'from 2-5 MAD per drink', note: 'Round up the bill or leave a few coins. Cafe staff remember generous tippers.' },
  { venue: 'Riad Dining', amount: 'from 20-50 MAD per meal', note: 'Tip the cook or staff directly. Your riad may pool tips among all employees.' },
  { venue: 'Street Food Stall', amount: 'Round up by 1-2 MAD', note: 'Tipping is not expected but appreciated. Simply leave the change from your purchase.' },
  { venue: 'Food Tour Guide', amount: 'from 50-100 MAD per person', note: 'Tip at the end of the tour. More for small private tours or exceptional guides.' },
  { venue: 'Cooking Class Chef', amount: 'from 50-100 MAD', note: 'Tip the chef or instructor after the class as a thank-you for sharing their knowledge.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/etiquette',
    title: 'Quick Etiquette Overview',
    description: 'Condensed Moroccan etiquette essentials at a glance for quick reference before your trip.',
    icon: CheckCircle,
  },
  {
    href: '/morocco-cultural-etiquette',
    title: 'Morocco Cultural Etiquette',
    description: 'Complete guide to Moroccan customs, greetings, dress code, mosque etiquette, haggling, and social norms.',
    icon: Globe,
  },
  {
    href: '/cuisine',
    title: 'Moroccan Cuisine Guide',
    description: 'Explore the flavors of Morocco from tagine and couscous to pastilla and harira soup.',
    icon: UtensilsCrossed,
  },
  {
    href: '/morocco-food-guide',
    title: 'Morocco Food Guide',
    description: 'What to eat in Morocco city by city, from street food stalls to fine dining riads.',
    icon: MapPin,
  },
  {
    href: '/morocco-tea-culture',
    title: 'Morocco Tea Culture',
    description: 'Deep dive into Moroccan mint tea traditions, preparation methods, and regional variations.',
    icon: Coffee,
  },
  {
    href: '/morocco-tipping-guide',
    title: 'Morocco Tipping Guide',
    description: 'Complete tipping etiquette for every situation in Morocco, from restaurants to tour guides.',
    icon: Banknote,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFoodEtiquettePage() {
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
            <span className="text-white">Moroccan Food Etiquette</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <UtensilsCrossed className="w-4 h-4" />
            Dining Customs &amp; Food Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Food Etiquette
            <br className="hidden md:block" /> Guide for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Eating with your hands, communal tagine traditions, the sacred art of mint tea, bread
            customs, guest etiquette, and everything you need to dine respectfully in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Art of Moroccan Dining
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In Morocco, food is far more than sustenance &mdash; it is an expression of love,
                hospitality, and cultural identity. Every meal, from a humble bowl of harira soup at a
                street stall to an elaborate family feast of seven-vegetable couscous, carries deep
                social meaning and centuries of tradition.
              </p>
              <p>
                Moroccan dining customs are rooted in Islamic traditions, Amazigh (Berber) heritage,
                and the Moroccan concept of &ldquo;diyafa&rdquo; &mdash; sacred hospitality. A Moroccan
                host would rather go without than let a guest leave hungry. Understanding the etiquette
                around communal eating, bread, tea, and guest customs will transform your meals from
                simple dinners into profound cultural experiences.
              </p>
              <p>
                Whether you are scooping lamb tagine with fresh khobz at a family table in Fes,
                sipping mint tea in a Marrakech riad, or sampling snail soup in Jemaa el-Fnaa, this
                guide will help you navigate every dining situation with confidence and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Dining Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Dining at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential facts about Moroccan food culture every visitor should know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Primary Utensil', value: 'Bread & Hands', detail: 'Right hand only; bread scoops food from communal dishes', icon: Hand },
              { label: 'Meal Structure', value: 'Communal Sharing', detail: 'One large dish in the center, everyone eats from it', icon: Users },
              { label: 'Sacred Food', value: 'Bread (Khobz)', detail: 'Never wasted, never upside down, always torn by hand', icon: Wheat },
              { label: 'Hospitality Symbol', value: 'Mint Tea', detail: 'Three glasses tradition; declining is considered impolite', icon: Coffee },
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

      {/* ── Eating with Your Hands ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hand className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Eating with Your Hands: The Right-Hand Rule
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most distinctive aspect of Moroccan dining &mdash; and the one visitors find most unfamiliar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {handEatingRules.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.rule} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.rule}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Comfort Tip for First-Timers
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  If you are not comfortable eating with your hands, do not worry. Moroccans are understanding
                  with visitors. In restaurants, cutlery is always available. At home meals, you can ask for a
                  spoon. The important thing is to use your right hand for any hand-based eating, giving, or
                  receiving. Making an effort is what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Communal Tagine Tradition ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Communal Tagine Tradition
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sharing food from one dish is at the heart of Moroccan family and social life.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              <CheckCircle className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
              Rules of the Communal Table
            </h3>
            <div className="space-y-3">
              {tagineRules.map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Friday Couscous Tradition
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Friday is couscous day in Morocco. After the midday prayer, families gather for a large
                  communal couscous dish with seven vegetables and meat. This is the most important shared meal
                  of the week. If a Moroccan family invites you for Friday couscous, consider it a great honor.
                  Couscous is traditionally eaten with a spoon or rolled into small balls with the right hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tea Ceremony Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Mint Tea Ceremony
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Mint tea is the soul of Moroccan hospitality. Understanding its rituals is essential.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {teaCeremonySteps.map((s) => (
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
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Sugar &amp; Sweetness
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Moroccan tea is very sweet by Western standards. It is polite to drink it as served. If you
                  genuinely cannot handle the sweetness, you can discreetly ask for less sugar (&ldquo;shwiya
                  d-sukkar afak&rdquo;) before it is prepared, but never after it has been poured. In some homes,
                  asking for less sugar may surprise your host, so sip graciously if you can.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bread Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wheat className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bread Etiquette: The Sacred Khobz
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bread holds a near-sacred status in Moroccan culture. Knowing these rules is essential.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {breadRules.map((item) => {
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

      {/* ── Guest Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guest Etiquette When Dining in a Moroccan Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Being invited to a Moroccan home for a meal is a privilege. Here is how to be a gracious guest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guestEtiquette.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.tip}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Restaurant vs Home Dining ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Restaurant vs Home Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Etiquette differs depending on whether you are eating out or dining with a Moroccan family.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {diningComparison.map((item) => (
                <div key={item.aspect} className="p-4 bg-[var(--surface-muted)] rounded-lg">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {item.aspect}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Home Dining</p>
                      <p className="text-sm text-[var(--text-secondary)]">{item.home}</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-xs font-semibold text-[var(--color-gold)] uppercase mb-1">Restaurant</p>
                      <p className="text-sm text-[var(--text-secondary)]">{item.restaurant}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Street Food Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Street Food Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s street food scene is vibrant, affordable, and delicious. Here is how to navigate it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {streetFoodTips.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.tip}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ramadan Dining ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ramadan Dining Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ramadan transforms the dining landscape in Morocco. Here is what every visitor needs to know.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {ramadanDining.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.rule} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.rule}
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

      {/* ── Dietary Restrictions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dietary Restrictions &amp; Useful Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Communicating dietary needs in Darija will help you eat safely and enjoyably across Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {dietaryPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="min-w-[160px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {phrase.darija}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">{phrase.pronunciation}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                    <p className="text-xs text-[var(--text-muted)]">{phrase.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Allergy Warning
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  For serious allergies, write your restrictions in both French and Darija on a card to show
                  restaurant staff and cooks. French is widely understood in kitchens. Cross-contamination awareness
                  is limited in traditional kitchens, so be extra cautious with severe allergies to nuts, dairy,
                  or gluten. When in doubt, stick to simple grilled meats, salads, and fresh fruit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tipping at Restaurants ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tipping at Restaurants &amp; Food Venues
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tipping is customary in Morocco. Here is what to leave at every type of food venue.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {restaurantTipping.map((item) => (
                <div key={item.venue} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Banknote className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.venue}
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

          <p className="text-xs text-[var(--text-muted)] text-center mt-6">
            <Info className="w-3 h-3 inline mr-1" />
            Prices and tipping amounts are approximate and reflect seasonal norms as of March 2026. Amounts may vary.
          </p>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about Moroccan food etiquette and dining customs.
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
            Continue exploring Moroccan food culture and travel customs with these essential guides.
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
          <UtensilsCrossed className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Dine Like a Local in Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Moroccan food etiquette is not about rigid rules &mdash; it is about showing respect for a
            culture that expresses love through food. Tear the bread, accept the tea, compliment the cook,
            and let the warmth of Moroccan hospitality transform every meal into an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cuisine"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Explore Moroccan Cuisine
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
            Dining customs can vary between urban and rural Morocco and across different regions and families.
            When in doubt, observe your hosts and follow their lead. Information on this page is current as of March 2026.
          </p>
        </div>
      </section>
    </>
  );
}

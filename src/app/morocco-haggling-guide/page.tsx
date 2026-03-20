import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  HandCoins,
  Info,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Users,
  Shield,
  Star,
  MapPin,
  Compass,
  Banknote,
  Heart,
  HelpCircle,
  Sparkles,
  Clock,
  ShoppingBag,
  Store,
  Tag,
  Percent,
  Scale,
  Eye,
  ThumbsUp,
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
  title: 'Morocco Haggling Guide 2026 | How to Bargain in Souks Like a Pro',
  description:
    'Master the art of haggling in Morocco. Step-by-step bargaining tips for souks, price expectations for leather, ceramics, spices, carpets, and textiles. Cultural etiquette, seller tactics, and the mint tea ritual.',
  keywords: [
    'how to haggle in Morocco',
    'Morocco bargaining tips',
    'haggling guide Morocco souks',
    'Morocco souk bargaining',
    'how to negotiate in Morocco',
    'Morocco market haggling',
    'bargaining tips Marrakech',
    'haggling in Fes medina',
    'Morocco shopping negotiation',
    'souk prices Morocco',
    'what to pay in Moroccan souks',
    'Morocco fair prices guide',
    'haggling etiquette Morocco',
    'Morocco carpet bargaining',
    'Marrakech souk prices 2026',
    'how much to pay Morocco markets',
    'Morocco leather prices',
    'haggling culture Morocco',
    'walking away technique Morocco',
    'mint tea haggling Morocco',
  ],
  openGraph: {
    title: 'Morocco Haggling Guide 2026 | How to Bargain in Souks Like a Pro',
    description:
      'Master the art of haggling in Moroccan souks. Step-by-step bargaining process, fair prices for common items, seller tactics, and cultural etiquette tips.',
    url: `${BASE_URL}/morocco-haggling-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-souk.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan souk with handmade goods and lanterns in the medina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Haggling Guide 2026 | Bargaining Tips for Souks',
    description:
      'Step-by-step guide to haggling in Moroccan souks. Fair prices, seller tactics, cultural etiquette, and the art of negotiation.',
    images: [`${BASE_URL}/images/hero-morocco-souk.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-haggling-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-haggling-guide`,
  name: 'Morocco Haggling Guide 2026 | How to Bargain in Souks Like a Pro',
  description:
    'Master the art of haggling in Morocco. Step-by-step bargaining tips for souks, price expectations for leather, ceramics, spices, carpets, and textiles.',
  url: `${BASE_URL}/morocco-haggling-guide`,
  image: `${BASE_URL}/images/hero-morocco-souk.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-haggling-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Haggling Guide', item: `${BASE_URL}/morocco-haggling-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much lower should my first offer be when haggling in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start your first offer at roughly 30-40% of the seller\'s asking price. This gives both sides room to negotiate toward a fair middle ground, typically 50-60% of the initial asking price. The exact ratio depends on the item: mass-produced goods have less markup than handcrafted artisan pieces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it rude to haggle in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. Haggling is an integral part of Moroccan culture and commerce. Sellers expect it and enjoy the social interaction. What is considered rude is haggling aggressively or disrespectfully, starting a negotiation with no intention of buying, or walking away from an agreed price. Approach it with a smile and treat it as a cultural exchange.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I NOT haggle for in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not haggle at supermarkets, pharmacies, government offices, petrol stations, or restaurants with printed menus. These have fixed prices. Also avoid haggling for basic necessities like bread at bakeries or staple goods at small neighborhood shops. Haggling is reserved for souks, markets, taxi fares (before the ride), and independent shops without marked prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the walking away technique really work in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, walking away is one of the most effective bargaining techniques in Moroccan souks. If a seller lets you leave without calling you back, the price they quoted may already have been fair. If they call you back with a lower offer, you know there is still room to negotiate. Only use this technique genuinely -- walk away if the price truly does not work for you, not as a bluff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do sellers offer mint tea during negotiations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offering mint tea is a traditional Moroccan gesture of hospitality. It creates a relaxed atmosphere and builds rapport between buyer and seller. Accepting tea does not obligate you to buy, but it does signal that you are genuinely interested. The tea ritual slows down the negotiation, giving both sides time to assess the deal. It is perfectly acceptable to enjoy the tea and still walk away.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I got a fair price in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fair price is one you are happy to pay and the seller is happy to accept. As a general guideline, paying 40-60% of the initial asking price is normal for most souk items. You can research prices beforehand at fixed-price cooperatives or ensemble artisanal shops, which display government-set prices. If multiple sellers offer similar items at similar prices, you are likely in the right range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I haggle differently in Marrakech vs Fes vs smaller towns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In major tourist cities like Marrakech and Fes, initial asking prices tend to be higher (sometimes 3-5x the fair price), so more aggressive bargaining is expected. In smaller towns like Chefchaouen, Essaouira, or rural markets, markups are typically lower and sellers may be more direct. Adjust your starting offer accordingly and always remain respectful.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I haggle in Moroccan taxis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For petit taxis (city taxis), always insist on the meter. If the driver refuses, negotiate the fare before getting in. For grand taxis (shared inter-city taxis), the fare is typically fixed per seat. For private grand taxi hire, you should negotiate the price upfront. Never discuss the fare mid-ride, and agree on the total before departing.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: STEP-BY-STEP HAGGLING PROCESS
   ═══════════════════════════════════════════════════════════════ */

const hagglingSteps = [
  {
    step: 1,
    title: 'Greet & Build Rapport',
    icon: Heart,
    description:
      'Begin with a warm greeting. Say "As-salamu alaykum" (peace be upon you) or "Bonjour." Ask how the seller is doing. In Morocco, business begins with human connection. Rushing straight to prices signals inexperience and invites higher quotes.',
    tip: 'Learn 3-4 basic Arabic or Darija phrases. Sellers genuinely appreciate the effort and may offer better starting prices to someone who shows cultural respect.',
  },
  {
    step: 2,
    title: 'Browse Casually & Show Interest',
    icon: Eye,
    description:
      'Walk through the shop and look at multiple items before focusing on what you want. Avoid showing too much excitement about a specific item -- sellers read body language expertly. Pick up a few things, ask about craftsmanship, and let the conversation flow naturally.',
    tip: 'If you show intense interest in one item immediately, the seller knows you want it and will price accordingly. Spread your attention across several items.',
  },
  {
    step: 3,
    title: 'Ask the Price',
    icon: Tag,
    description:
      'When you are ready, ask "Beshhal?" (how much?) or "Quel est le prix?" The seller will give their opening price, which is typically 2-4 times the price they are willing to accept. Listen calmly, do not react with shock or outrage. Nod thoughtfully as if considering the number.',
    tip: 'The seller\'s first price is never the final price. It is the starting point of a conversation, not a take-it-or-leave-it figure.',
  },
  {
    step: 4,
    title: 'Make Your Counter-Offer',
    icon: Scale,
    description:
      'Offer roughly 30-40% of their asking price. This is not insulting -- it is expected. The seller will likely act surprised and counter with a lower number than their opening. You are now in the dance. Each side moves gradually toward a middle ground, typically landing at 40-60% of the original ask.',
    tip: 'State your offer with a friendly smile, not apologetically. Confidence signals that you know the market and have shopped around.',
  },
  {
    step: 5,
    title: 'Negotiate Back & Forth',
    icon: Users,
    description:
      'The negotiation continues with each side adjusting their price. The seller may highlight the quality, the craftsmanship, or how the item is handmade. You can mention that you have seen similar items elsewhere, that you are buying multiple items, or that your budget is limited. Keep the tone friendly and even humorous.',
    tip: 'Bundling multiple items together ("I will take the bag and two scarves for X MAD") often gets you a better overall deal than negotiating each item separately.',
  },
  {
    step: 6,
    title: 'The Walk-Away Moment',
    icon: ArrowRight,
    description:
      'If you cannot agree on a price, politely thank the seller and begin to leave. Say "C\'est trop cher" (it is too expensive) or "Shukran, ghali bezzaf" (thank you, too expensive). If the seller has room to negotiate further, they will call you back with a better offer. If they do not, their last price may have been close to fair.',
    tip: 'Only walk away if you genuinely mean it. Using this as a bluff repeatedly will damage trust and the seller will stop taking you seriously.',
  },
  {
    step: 7,
    title: 'Seal the Deal',
    icon: HandCoins,
    description:
      'When you reach a price both sides are happy with, shake hands and pay. In Morocco, once a price is verbally agreed upon, the deal is considered binding. Going back on an agreed price is considered very rude. Pay the exact amount -- do not ask for change from a large bill as it can reopen the negotiation.',
    tip: 'Carry small denominations (20, 50, 100 MAD notes). Having the exact amount ready shows you planned for this price and avoids the awkward "I only have a 200" moment.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE EXPECTATIONS
   ═══════════════════════════════════════════════════════════════ */

const priceExpectations = [
  {
    category: 'Leather Goods',
    icon: ShoppingBag,
    items: [
      { item: 'Leather bag (medium)', askingPrice: 'From 600-1,200 MAD', fairPrice: 'From 250-500 MAD' },
      { item: 'Leather pouf (unstuffed)', askingPrice: 'From 400-800 MAD', fairPrice: 'From 200-350 MAD' },
      { item: 'Leather belt', askingPrice: 'From 150-300 MAD', fairPrice: 'From 60-120 MAD' },
      { item: 'Leather wallet', askingPrice: 'From 200-400 MAD', fairPrice: 'From 80-150 MAD' },
      { item: 'Leather babouche slippers', askingPrice: 'From 150-400 MAD', fairPrice: 'From 60-150 MAD' },
    ],
  },
  {
    category: 'Ceramics & Pottery',
    icon: Store,
    items: [
      { item: 'Decorative tagine (large)', askingPrice: 'From 300-600 MAD', fairPrice: 'From 120-250 MAD' },
      { item: 'Hand-painted plate', askingPrice: 'From 100-300 MAD', fairPrice: 'From 40-120 MAD' },
      { item: 'Small ceramic bowl', askingPrice: 'From 50-150 MAD', fairPrice: 'From 20-60 MAD' },
      { item: 'Ceramic tile set (4 pcs)', askingPrice: 'From 80-200 MAD', fairPrice: 'From 30-80 MAD' },
      { item: 'Mosaic fountain (small)', askingPrice: 'From 2,000-5,000 MAD', fairPrice: 'From 800-2,000 MAD' },
    ],
  },
  {
    category: 'Spices & Food',
    icon: Sparkles,
    items: [
      { item: 'Saffron (1 gram, genuine)', askingPrice: 'From 30-80 MAD', fairPrice: 'From 15-30 MAD' },
      { item: 'Ras el hanout (100g)', askingPrice: 'From 30-60 MAD', fairPrice: 'From 10-25 MAD' },
      { item: 'Cumin, turmeric (100g)', askingPrice: 'From 15-40 MAD', fairPrice: 'From 5-15 MAD' },
      { item: 'Argan oil (1 liter, cosmetic)', askingPrice: 'From 300-600 MAD', fairPrice: 'From 150-300 MAD' },
      { item: 'Dried fruit mix (500g)', askingPrice: 'From 50-120 MAD', fairPrice: 'From 25-50 MAD' },
    ],
  },
  {
    category: 'Textiles & Carpets',
    icon: Tag,
    items: [
      { item: 'Berber carpet (small, 1x1.5m)', askingPrice: 'From 1,500-4,000 MAD', fairPrice: 'From 600-1,500 MAD' },
      { item: 'Berber carpet (medium, 2x3m)', askingPrice: 'From 3,000-8,000 MAD', fairPrice: 'From 1,200-3,500 MAD' },
      { item: 'Silk scarf / pashmina', askingPrice: 'From 200-500 MAD', fairPrice: 'From 80-200 MAD' },
      { item: 'Djellaba (traditional robe)', askingPrice: 'From 300-800 MAD', fairPrice: 'From 150-350 MAD' },
      { item: 'Embroidered tablecloth', askingPrice: 'From 200-500 MAD', fairPrice: 'From 80-200 MAD' },
    ],
  },
  {
    category: 'Lamps & Metalwork',
    icon: Star,
    items: [
      { item: 'Brass lantern (medium)', askingPrice: 'From 400-1,000 MAD', fairPrice: 'From 150-400 MAD' },
      { item: 'Metal ceiling lamp', askingPrice: 'From 600-2,000 MAD', fairPrice: 'From 250-800 MAD' },
      { item: 'Silver teapot', askingPrice: 'From 300-800 MAD', fairPrice: 'From 150-350 MAD' },
      { item: 'Brass tea tray', askingPrice: 'From 200-500 MAD', fairPrice: 'From 80-200 MAD' },
      { item: 'Metal mirror frame', askingPrice: 'From 300-700 MAD', fairPrice: 'From 120-300 MAD' },
    ],
  },
  {
    category: 'Jewelry & Accessories',
    icon: Sparkles,
    items: [
      { item: 'Silver Berber bracelet', askingPrice: 'From 200-600 MAD', fairPrice: 'From 80-250 MAD' },
      { item: 'Silver Berber necklace', askingPrice: 'From 300-800 MAD', fairPrice: 'From 120-350 MAD' },
      { item: 'Beaded bracelet', askingPrice: 'From 30-80 MAD', fairPrice: 'From 10-30 MAD' },
      { item: 'Amber necklace (genuine)', askingPrice: 'From 500-1,500 MAD', fairPrice: 'From 200-600 MAD' },
      { item: 'Hand of Fatima pendant', askingPrice: 'From 50-200 MAD', fairPrice: 'From 20-80 MAD' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SELLER TACTICS & RESPONSES
   ═══════════════════════════════════════════════════════════════ */

const sellerTactics = [
  {
    tactic: 'The Emotional Appeal',
    icon: Heart,
    description: '"I am losing money at this price!" or "My family depends on this sale." These are classic bargaining phrases, not genuine distress.',
    response: 'Smile warmly and stay with your price. Say "I understand, but this is my budget." The seller would never agree to a price that loses money.',
  },
  {
    tactic: 'The Quality Comparison',
    icon: Star,
    description: '"This is real silver / genuine leather / hand-dyed." The seller emphasizes quality to justify a higher price, sometimes exaggerating authenticity.',
    response: 'Ask to see the item closely. Check weight, stitching, dye quality. If you cannot verify authenticity, factor uncertainty into your price.',
  },
  {
    tactic: 'The Calculator Trick',
    icon: Percent,
    description: 'The seller punches numbers into a calculator and shows you a "special discount" -- often just the price they intended to sell at all along.',
    response: 'Acknowledge the discount graciously, then counter with your own number on the calculator. It turns the negotiation into a visual game.',
  },
  {
    tactic: 'The Friend Price',
    icon: Users,
    description: '"Because you are my friend, I give you a special price." This flattering approach makes you feel obligated to accept a higher price out of social pressure.',
    response: 'Thank them for the kindness, then offer your price as "the friend price from my side." Keep it light and playful.',
  },
  {
    tactic: 'The Guilt Trip',
    icon: AlertTriangle,
    description: '"You come to my shop, I serve you tea, and you offer this?" The seller implies that your low offer disrespects their hospitality.',
    response: 'Express genuine thanks for the tea and hospitality. Clarify that you respect the product and the seller, but your budget is fixed. Accepting tea never obligates a purchase.',
  },
  {
    tactic: 'The Urgency Play',
    icon: Clock,
    description: '"Last one! Another tourist wanted this just today." Creating urgency pressures you to decide quickly before "losing" the item.',
    response: 'Take your time. In a souk with hundreds of stalls, the same item is almost certainly available elsewhere. Say "If it is sold, I will find another."',
  },
  {
    tactic: 'The Bundle Push',
    icon: ShoppingBag,
    description: '"Buy two and I give you a better price." The seller encourages you to spend more by offering a volume discount.',
    response: 'Bundling can be genuinely good value -- but only if you actually want multiple items. Calculate the per-item price to ensure the "deal" is real.',
  },
  {
    tactic: 'The Send-Away & Call-Back',
    icon: ArrowRight,
    description: 'You start leaving and the seller calls "Okay, okay, come back!" with a lower price. This is the walk-away technique working in reverse.',
    response: 'If the new price is within your range, go back and close the deal. If not, keep walking. There is no obligation to return.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT NOT TO HAGGLE FOR
   ═══════════════════════════════════════════════════════════════ */

const noHagglingZones = [
  {
    place: 'Supermarkets & chain stores',
    icon: Store,
    reason: 'All items have fixed, labeled prices. Carrefour, Marjane, Acima, and similar chains operate on non-negotiable retail pricing.',
  },
  {
    place: 'Pharmacies',
    icon: Shield,
    reason: 'Medication and health products have government-regulated fixed prices. Prices are printed on the packaging.',
  },
  {
    place: 'Restaurants with printed menus',
    icon: Coffee,
    reason: 'Menu prices are fixed. However, negotiation may apply to large group bookings or special catering arrangements.',
  },
  {
    place: 'Government offices & museums',
    icon: MapPin,
    reason: 'Entry fees, visas, and official charges are fixed. Never attempt to negotiate with government officials.',
  },
  {
    place: 'Petrol stations',
    icon: Compass,
    reason: 'Fuel prices are nationally regulated and displayed on pumps. They are the same at every station across Morocco.',
  },
  {
    place: 'Bakeries & basic grocery shops',
    icon: ShoppingBag,
    reason: 'Bread and staple items have set prices in neighborhood shops. These are low-margin essentials, not luxury goods.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BODY LANGUAGE & ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteTips = [
  {
    rule: 'Smile & Stay Friendly',
    icon: Heart,
    description:
      'Haggling in Morocco is a social activity, not a fight. Maintain a warm, friendly demeanor throughout the negotiation. Humor goes a long way. A seller who likes you is more likely to give you a fair price.',
  },
  {
    rule: 'Maintain Eye Contact',
    icon: Eye,
    description:
      'Direct eye contact shows confidence and sincerity. It signals that you are serious about buying but also firm about your price. Avoiding eye contact may be read as disinterest or dishonesty.',
  },
  {
    rule: 'Use Your Right Hand',
    icon: HandCoins,
    description:
      'When handling items or passing money, use your right hand or both hands. The left hand alone is considered impolite in Moroccan culture.',
  },
  {
    rule: 'Do Not Insult the Goods',
    icon: AlertTriangle,
    description:
      'Never criticize the quality of an item to drive the price down. Saying "this looks cheap" or "this is poor quality" is deeply offensive. Instead, calmly state what you are willing to pay.',
  },
  {
    rule: 'Dress Modestly',
    icon: Shield,
    description:
      'How you dress influences how sellers perceive your budget. Flashy jewelry, designer bags, and expensive cameras can lead to higher starting prices. Dress simply and practically for souk visits.',
  },
  {
    rule: 'Be Patient',
    icon: Clock,
    description:
      'Moroccan negotiations move at their own pace. Rushing signals desperation and weak bargaining position. Allow 10-20 minutes for significant purchases like carpets. The best deals come to patient buyers.',
  },
  {
    rule: 'Know When to Stop',
    icon: CheckCircle,
    description:
      'Once you agree on a price, the deal is done. Do not try to renegotiate after shaking hands. Walking away from an agreed price is the biggest breach of souk etiquette.',
  },
  {
    rule: 'Respect the Culture',
    icon: Star,
    description:
      'Remember that haggling supports livelihoods. The goal is a fair exchange, not "winning." Pushing a seller below their cost is not a victory -- it is exploitation. A good deal leaves both sides satisfied.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much lower should my first offer be when haggling in Morocco?',
    answer:
      'Start your first offer at roughly 30-40% of the seller\'s asking price. This gives both sides room to negotiate toward a fair middle ground, typically 50-60% of the initial asking price. The exact ratio depends on the item: mass-produced goods have less markup than handcrafted artisan pieces. In heavily touristic areas like the Marrakech medina, initial prices can be 3-5 times the fair price, so starting low is expected.',
  },
  {
    question: 'Is it rude to haggle in Morocco?',
    answer:
      'Not at all. Haggling is an integral part of Moroccan culture and commerce. Sellers expect it and genuinely enjoy the social interaction. What is considered rude is haggling aggressively, starting a negotiation with no intention of buying, or walking away from a price you have already agreed upon. Approach it with a smile and treat it as a cultural exchange rather than a confrontation.',
  },
  {
    question: 'What should I NOT haggle for in Morocco?',
    answer:
      'Do not haggle at supermarkets, pharmacies, government offices, petrol stations, or restaurants with printed menus. These have fixed prices. Also avoid haggling for basic necessities like bread at bakeries or staple goods at small neighborhood shops. Haggling is reserved for souks, markets, taxi fares (before the ride), and independent shops without marked prices.',
  },
  {
    question: 'Does the walking away technique really work in Morocco?',
    answer:
      'Yes, walking away is one of the most effective bargaining techniques in Moroccan souks. If a seller lets you leave without calling you back, the price they quoted may already have been fair. If they call you back with a lower offer, you know there is still room to negotiate. Only use this technique genuinely -- walk away if the price does not work for you, not as a bluff you repeat at every stall.',
  },
  {
    question: 'Why do sellers offer mint tea during negotiations?',
    answer:
      'Offering mint tea is a traditional Moroccan gesture of hospitality. It creates a relaxed atmosphere and builds rapport between buyer and seller. Accepting tea does not obligate you to buy, but it signals genuine interest. The tea ritual slows down the negotiation, giving both sides time to assess the deal. It is perfectly acceptable to enjoy the tea and still walk away if you cannot agree on a price.',
  },
  {
    question: 'How do I know if I got a fair price in Morocco?',
    answer:
      'A fair price is one you are happy to pay and the seller is happy to accept. As a general guideline, paying 40-60% of the initial asking price is normal for most souk items. You can research prices beforehand at fixed-price cooperatives or ensemble artisanal shops, which display standardized prices. If multiple sellers offer similar items at similar final prices, you are likely in the right range.',
  },
  {
    question: 'Should I haggle differently in Marrakech vs Fes vs smaller towns?',
    answer:
      'Yes. In major tourist cities like Marrakech and Fes, initial asking prices tend to be significantly higher (sometimes 3-5 times the fair price), so more assertive bargaining is expected. In smaller towns like Chefchaouen, Essaouira, or rural markets, markups are typically lower and sellers may be more straightforward with pricing. Adjust your starting offer accordingly and always remain respectful regardless of location.',
  },
  {
    question: 'Can I haggle in Moroccan taxis?',
    answer:
      'For petit taxis (city taxis), always insist on the meter. If the driver refuses to use the meter, negotiate the fare before getting in. For grand taxis on fixed routes, the fare per seat is standard and non-negotiable. For private grand taxi hire, you should negotiate the price upfront. The key rule is to always agree on the fare before you start the journey.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHagglingGuidePage() {
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
            backgroundImage: 'url(/images/hero-morocco-souk.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Haggling Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <HandCoins className="w-4 h-4" />
            Shopping &amp; Souks
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Haggling Guide:
            <br className="hidden md:block" /> The Art of Bargaining in Souks
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Master the centuries-old art of negotiation in Moroccan markets. Step-by-step
            bargaining tips, fair prices for common items, seller tactics decoded, and
            the cultural etiquette that turns haggling into an unforgettable experience.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: The Culture of Haggling ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Haggling in Morocco: A Cultural Tradition, Not a Battle
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In Morocco, haggling is not a confrontation -- it is a conversation. For
                centuries, the souks of Marrakech, Fes, Meknes, and beyond have operated
                on a system where prices are fluid and negotiation is the norm. The
                process is deeply woven into Moroccan social fabric, as much about human
                connection as it is about commerce.
              </p>
              <p>
                For many Western visitors, bargaining feels uncomfortable at first. We are
                conditioned to accept price tags as final. But in Morocco, the asking
                price is an invitation to engage, not a fixed number. The seller expects
                you to counter, and the back-and-forth that follows is a ritual both sides
                understand and enjoy.
              </p>
              <p>
                The key to successful haggling is mindset. You are not trying to
                &quot;win&quot; or get the lowest possible price. You are seeking a fair
                exchange where both you and the seller walk away satisfied. The seller
                makes a reasonable profit, and you pay a price that feels right for the
                value you are receiving. That mutual satisfaction is the true art of
                Moroccan bargaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Haggling Process ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The 7-Step Haggling Process
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow this step-by-step guide to navigate any negotiation in a Moroccan souk with confidence and cultural sensitivity.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {hagglingSteps.map((item) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <StepIcon className="w-5 h-5 text-[var(--color-accent)]" />
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold text-[var(--color-gold)]">Pro Tip:</span>{' '}
                            {item.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Expectations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Price Expectations: What Things Actually Cost
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Typical asking prices vs. fair prices for common souk items. Use these ranges as a guide during your negotiations.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices in Moroccan dirhams (MAD). Prices vary by quality, city, and season. Seasonal pricing can change.
          </p>

          <div className="space-y-10 max-w-5xl mx-auto">
            {priceExpectations.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="card-moroccan overflow-hidden ml-[52px]">
                    <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                      <div className="p-3 px-4">Item</div>
                      <div className="p-3 px-4">Typical Asking Price</div>
                      <div className="p-3 px-4">Fair Price (After Haggling)</div>
                    </div>
                    {category.items.map((row, i) => (
                      <div
                        key={row.item}
                        className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                      >
                        <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.item}</div>
                        <div className="p-3 px-4 text-[var(--text-muted)] line-through">{row.askingPrice}</div>
                        <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{row.fairPrice}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What NOT to Haggle For ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where NOT to Haggle in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not everything in Morocco is negotiable. These places and situations have fixed prices -- attempting to haggle is inappropriate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {noHagglingZones.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.place} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.place}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seller Tactics & How to Respond ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Seller Tactics &amp; How to Respond
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan sellers are skilled negotiators. Recognizing their techniques helps you navigate the dance with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sellerTactics.map((item) => {
              const TacticIcon = item.icon;
              return (
                <div key={item.tactic} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TacticIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.tactic}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                    <span className="font-semibold">What they do:</span> {item.description}
                  </p>
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--color-gold)]">
                        <ThumbsUp className="w-3 h-3 inline mr-1" />
                        Your response:
                      </span>{' '}
                      {item.response}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Body Language & Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Body Language &amp; Etiquette Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How you conduct yourself matters as much as the numbers you negotiate. These etiquette guidelines ensure respectful and successful bargaining.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteTips.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Mint Tea Ritual ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Mint Tea Ritual During Negotiations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the role of mint tea in Moroccan haggling is essential for any visitor to the souks.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Why Sellers Offer Tea
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Mint tea (&quot;atay&quot;) is Morocco&apos;s national drink and offering it to visitors is a gesture of hospitality
                rooted in centuries of tradition. In the context of a souk negotiation, tea serves multiple purposes: it
                slows the pace, creates a comfortable atmosphere, and signals that the seller views you as a serious buyer
                worthy of their time. The act of preparing and pouring tea together transforms a commercial transaction into
                a social interaction -- and that is exactly how Moroccans prefer to do business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <CheckCircle className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                  When to Accept Tea
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    You are genuinely interested in buying something
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    You are shopping for a big-ticket item like a carpet
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    You want to learn about the craft and the seller&apos;s work
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    You have time to enjoy the experience
                  </li>
                </ul>
              </div>

              <div className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Key Things to Know
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Accepting tea does not obligate you to buy anything
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Declining tea politely is perfectly acceptable
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Tea is typically free -- it is part of the shopping experience
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Carpet and leather shops are most likely to offer tea
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-moroccan p-5 bg-[var(--color-accent)]/5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Cultural Insight
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    In Moroccan culture, refusing hospitality can be seen as impolite. If you truly do not want tea,
                    a gentle &quot;la shukran, ana mashi aatshan&quot; (no thanks, I am not thirsty) with a warm smile
                    is the most gracious way to decline. If you are in a rush, explain that you have limited time and
                    the seller will understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── When to Walk Away vs. Good Deal ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When to Walk Away vs. When You Have a Good Deal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <AlertTriangle className="w-5 h-5 inline mr-1 text-[var(--color-accent)]" />
                Walk Away When...
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  The seller will not budge from an unreasonably high price
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  You feel pressured, rushed, or uncomfortable
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  The seller becomes aggressive or disrespectful
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  You suspect the item is not authentic or as described
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  The price exceeds what you genuinely want to pay
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  You were led to the shop by an unsolicited guide expecting commission
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <CheckCircle className="w-5 h-5 inline mr-1 text-[var(--color-gold)]" />
                You Have a Good Deal When...
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  The price is 40-60% of the original asking price
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  You have compared prices at 2-3 other shops for similar items
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  The seller is smiling and satisfied (not visibly upset)
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  You feel happy about the purchase, not just the price
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  The price aligns with the ranges in the table above
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  The item is genuinely handmade and you value the craftsmanship
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  The Golden Rule of Haggling
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  If you love an item and the price feels fair to you, buy it. Do not agonize over whether you could
                  have saved from 20-30 MAD more. The memory of the experience and the item itself are worth far more than
                  the difference. Conversely, never buy something you do not truly want just because the price is low.
                  A bargain on something you do not need is not a bargain at all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Haggling in Morocco
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/morocco-souk-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Store className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Souk Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate Morocco&apos;s famous markets. Souk layouts, what to find where, and insider tips for each city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-buy-morocco" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Buy in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best souvenirs and handicrafts to bring home. Quality guide for leather, ceramics, textiles, and more.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-shopping-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Tag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete shopping guide covering souks, cooperatives, modern malls, and the best places to shop in every city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-carpet-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Carpet Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to buy a genuine Moroccan carpet. Types, quality indicators, pricing, and how to ship them home.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spice-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spice Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Morocco&apos;s aromatic spice markets. What to buy, how to spot quality, and fair prices for saffron and more.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-tipping-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <HandCoins className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Tipping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Who to tip, how much, and when in Morocco. Practical guide with exact amounts in MAD for every situation.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

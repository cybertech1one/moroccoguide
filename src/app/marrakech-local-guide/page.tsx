import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  UtensilsCrossed,
  ShoppingBag,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Heart,
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Coffee,
  Bus,
  Store,
  Bath,
  Building2,
  Users,
  Flame,
  DollarSign,
  Navigation,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Marrakech Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
  description:
    'Discover Marrakech beyond Jemaa el-Fna. Explore Gueliz, Mellah, Mouassine, Bab Doukkala food stalls, Sidi Ghanem design district, local hammams, real souk prices, and where Marrakchis actually eat. Complete insider guide with prices in MAD.',
  keywords: [
    'marrakech like a local',
    'marrakech hidden gems',
    'marrakech local food',
    'marrakech neighborhoods',
    'marrakech off beaten path',
    'gueliz marrakech',
    'mellah marrakech',
    'mouassine marrakech',
    'bab doukkala food marrakech',
    'sidi ghanem marrakech',
    'marrakech local hammam',
    'marrakech real prices',
    'marrakech souk prices',
    'marrakech local restaurants',
    'marrakech breakfast spots',
    'marrakech petit taxi',
    'marrakech insider tips',
    'marrakech local guide 2026',
  ],
  openGraph: {
    title: 'Marrakech Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
    description:
      'Beyond Jemaa el-Fna: explore Gueliz, Mellah, Mouassine quarter, Bab Doukkala food stalls, Sidi Ghanem design district, authentic hammams, and real souk prices. The complete local insider guide.',
    url: `${BASE_URL}/marrakech-local-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Narrow alleyway in the Marrakech medina with local life and traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marrakech Like a Local 2026: Hidden Gems & Neighborhoods',
    description:
      'Beyond Jemaa el-Fna: Gueliz, Mellah, Mouassine, Bab Doukkala food stalls, Sidi Ghanem, local hammams, real souk prices, and where Marrakchis actually eat.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/marrakech-local-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/marrakech-local-guide`,
  name: 'Marrakech Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
  description:
    'Discover Marrakech beyond Jemaa el-Fna. Explore Gueliz, Mellah, Mouassine, Bab Doukkala food stalls, Sidi Ghanem design district, local hammams, real souk prices, and where Marrakchis actually eat.',
  url: `${BASE_URL}/marrakech-local-guide`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/marrakech-local-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Marrakech',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Marrakech', item: `${BASE_URL}/marrakech` },
      { '@type': 'ListItem', position: 3, name: 'Local Guide', item: `${BASE_URL}/marrakech-local-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Where do locals eat in Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Locals eat at Bab Doukkala food stalls for tanjia (from 40 MAD), breakfast msemen and harira at hole-in-the-wall shops near Riad Zitoun (from 5 MAD), Chez Bejgueni in the medina for kefta tagine (from 35 MAD), and the grilled meat stalls at Bab Ighli. The tourist restaurants on Jemaa el-Fna are generally avoided by Marrakchis, who prefer the side-street eateries where prices are half and quality is higher.' } },
    { '@type': 'Question', name: 'What are the hidden gems of Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Hidden gems include Le Jardin Secret in Mouassine quarter (from 50 MAD), the Lazama Synagogue in the Mellah (free, donation appreciated), the fondouks (caravanserais) off Mouassine fountain, Sidi Ghanem industrial zone for design shops, the Doukkala quarter for authentic tanjia, Parc Lalla Hasna for evening strolls, and Borj Nord viewpoint over the medina. Most tourists never leave the Jemaa el-Fna orbit.' } },
    { '@type': 'Question', name: 'Is Gueliz worth visiting in Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Gueliz is modern Marrakech where locals actually live, work, and socialize. Avenue Mohammed V has excellent cafes, the MACMA gallery showcases Moroccan modern art, Cafe 16 and Grand Cafe de la Poste are local institutions, and the shopping along Rue de la Liberte offers fixed prices without haggling. It gives a completely different perspective on Marrakech life.' } },
    { '@type': 'Question', name: 'How much should you pay in Marrakech souks?', acceptedAnswer: { '@type': 'Answer', text: 'As a general rule, the first price quoted to tourists is 3-10 times the real price. Leather babouche slippers: from 80-120 MAD (not 300+). A small tagine pot: from 30-60 MAD. Argan oil (1 liter): from 250-350 MAD. Spice mix (100g): from 10-20 MAD. A woven basket: from 40-80 MAD. Check Marjane supermarket prices first to establish a baseline. Walk away if the price does not feel right - there are hundreds of identical stalls.' } },
    { '@type': 'Question', name: 'What is the difference between local and tourist hammams?', acceptedAnswer: { '@type': 'Answer', text: 'Local hammams (from 15-20 MAD entry) are no-frills neighborhood bathhouses where Marrakchis go weekly. You bring your own soap, savon beldi, and kessa glove (buy at any spice shop for from 20-30 MAD). Tourist hammams (from 200-600 MAD) offer spa-like experiences with private rooms, provided products, and massage options. Both are valid experiences but the local hammam is the authentic one.' } },
    { '@type': 'Question', name: 'How do locals get around Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Locals use petit taxis (small beige Fiat Unos, metered, from 7 MAD minimum fare within the city), city buses (from 4 MAD, routes 1 and 16 are most useful for tourists connecting Gueliz to Jemaa el-Fna), and walking. Grand taxis go to outlying areas. Avoid the horse-drawn caleches at Jemaa el-Fna - they are tourist traps charging from 150-300 MAD for short rides.' } },
  ],
};

/* ===============================================================
   DATA: NEIGHBORHOODS
   =============================================================== */

const neighborhoods = [
  {
    name: 'Gueliz (Ville Nouvelle)',
    icon: Building2,
    category: 'Modern Marrakech',
    vibe: 'Cosmopolitan, cafe culture, galleries',
    description:
      'Gueliz is where Marrakchis actually live their daily lives. Built during the French Protectorate era, this modern district stretches along Avenue Mohammed V and Rue de la Liberte with wide boulevards, art-deco buildings, contemporary galleries, and some of the city best cafes and restaurants. This is where young Marrakchis meet friends for coffee, where professionals lunch at fixed-price bistros, and where you can shop without haggling. The MACMA gallery (Musee d Art et de Culture de Marrakech) showcases important Moroccan modern art. Cafe 16 on Place du 16 Novembre is a local institution where creatives gather. Grand Cafe de la Poste, in a restored 1920s post office, serves excellent French-Moroccan cuisine in a colonial-era setting. The Carrefour supermarket on Avenue Mohammed V reveals real Marrakech prices and is a great place to stock up on local products at fair rates.',
    insiderTip:
      'Walk Avenue Mohammed V from the medina walls to Place du 16 Novembre for the full Gueliz experience. Stop at Amandine patisserie for Moroccan pastries (from 5 MAD each). The area around Rue de la Liberte has boutiques with fixed prices — useful for understanding fair souk prices before you haggle in the medina.',
  },
  {
    name: 'Mellah (Jewish Quarter)',
    icon: Landmark,
    category: 'Historic Quarter',
    vibe: 'Authentic, historical, less touristy',
    description:
      'The Mellah, Marrakech historic Jewish quarter, is one of the most atmospheric and least visited parts of the medina. Established in 1558 under Sultan Moulay Abdallah, it was once home to a thriving Jewish community of 30,000. Today, only a handful of Jewish families remain, but the quarter architecture tells its story: distinctive wooden balconies (unique to the Mellah — the medina houses have none), narrow lanes, and the remarkable Lazama Synagogue (Slat al-Azama), beautifully restored with painted ceilings and a central courtyard. The Miaara Jewish Cemetery, one of the largest in Morocco, contains thousands of white-washed tombs. The spice market (Rahba Kedima) at the Mellah entrance is more genuine and less aggressive than the central souks, with lower prices and real interaction with vendors.',
    insiderTip:
      'Visit the Lazama Synagogue in the morning when it is quiet — ask the guardian to open it (free entry, donation of from 20-30 MAD appreciated). The Mellah spice souk has better prices than the central souks: cumin, saffron, ras el hanout, and dried roses at local rates. The balconied houses along Derb el-Mellah are the most photogenic in the medina.',
  },
  {
    name: 'Mouassine Quarter',
    icon: Sparkles,
    category: 'Artisan Quarter',
    vibe: 'Refined, creative, historic fondouks',
    description:
      'Mouassine is the medina most elegant quarter, a network of narrow lanes centered around the 16th-century Mouassine Mosque and its stunning public fountain — one of the largest in Marrakech, with carved cedar wood and zellige tilework. The quarter is home to beautifully restored fondouks (historic caravanserais where traders once stored goods and stabled animals), now converted into artisan workshops, galleries, and concept stores. Le Jardin Secret (from 50 MAD) is a masterfully restored riad with two gardens — an exotic garden and an Islamic garden — plus a tower with panoramic medina views. The lanes between Mouassine fountain and the Dar el-Bacha palace (now the Musee des Confluences, from 50 MAD) are lined with high-quality artisan shops, contemporary art galleries, and some of the best riads in Marrakech.',
    insiderTip:
      'The fondouks along Derb el-Hammam near Mouassine fountain are where real artisans work — metalworkers, woodcarvers, leather craftspeople. Peek inside the open doors to watch them at work. Le Jardin Secret tower offers the best rooftop view in the medina for the price. Visit Dar el-Bacha in the late afternoon when tour groups have left.',
  },
  {
    name: 'Bab Doukkala Quarter',
    icon: Flame,
    category: 'Local Food District',
    vibe: 'Working-class, authentic cuisine, real life',
    description:
      'If you want to eat like a Marrakchi, head to Bab Doukkala. This working-class neighborhood around the massive Bab Doukkala gate is where locals come for the city best tanjia — a slow-cooked meat dish unique to Marrakech. Tanjia is traditionally prepared by men: seasoned beef or lamb is placed in an earthenware urn, sealed with parchment, and slow-cooked for hours in the ashes of the local hammam furnace. The food stalls near the gate serve it with fresh bread for from 40-60 MAD — a fraction of what tourist restaurants charge. The neighborhood mosque, Bab Doukkala Mosque, is a beautiful 16th-century structure. The area around Rue Bab Doukkala has local bakeries (fernatchi) where you can buy fresh-from-the-oven khobz (bread) for from 2-3 MAD, pastry shops with cornes de gazelle and chebakia, and juice stands with fresh orange and avocado smoothies.',
    insiderTip:
      'Ask any local for the best tanjia stall near Bab Doukkala — they all have favorites. Order a half-portion (noss tanjia) for from 25-30 MAD if you are not very hungry. The bread from the bakeries (fernatchi) on the side streets is the best in the city — locals bring their own dough to be baked in the communal wood-fired oven for from 1-2 MAD per loaf.',
  },
  {
    name: 'Sidi Ghanem Industrial Zone',
    icon: Store,
    category: 'Design District',
    vibe: 'Creative, contemporary, factory outlets',
    description:
      'Sidi Ghanem is Marrakech open secret — an industrial zone on the outskirts that has been transformed into the city creative hub. Warehouses and factories have been converted into design showrooms, concept stores, furniture workshops, and artisan ateliers. This is where Marrakech design scene lives: Lalla (contemporary Moroccan fashion), Amira Bougies (handmade candles), Chabi Chic (ceramic tableware), Akkal (natural beauty products), and dozens more. Prices are wholesale — often 30-50% less than medina shops selling the same products. The zone also has excellent restaurants and cafes popular with the city creative class. No haggling, no hassle, fixed prices displayed.',
    insiderTip:
      'Take a petit taxi from the medina (from 30-40 MAD, about 15 minutes). Visit on a weekday morning when workshops are active and you can watch artisans at work. Cafe Clock and Le Studio have excellent lunch menus. Many shops close for lunch (1-3 PM). Bring a list of what you want — the zone is spread out and walking between warehouses in summer heat is taxing. Combine with a visit to the Menara Gardens nearby.',
  },
  {
    name: 'Douar Graoua & Bab Ighli Area',
    icon: Users,
    category: 'Evening Hangout',
    vibe: 'Local evening life, street food, community',
    description:
      'When the sun sets and the heat breaks, Marrakchis head to the open spaces around Bab Ighli and the Douar Graoua neighborhood south of the medina. This is where local families promenade, friends gather at outdoor cafes, and the grilled meat stalls fire up for the evening. The area around Bab Ighli gate has some of the best brochettes (skewered grilled meat) in the city — kefta, lamb, chicken, and merguez sausages served with bread, harissa, and cumin for from 20-40 MAD. Parc Lalla Hasna, a leafy park nearby, fills with families, joggers, and couples enjoying the cool evening air. This is everyday Marrakech life — completely removed from the tourist circuit, just ten minutes walk from Jemaa el-Fna.',
    insiderTip:
      'The grilled meat stalls at Bab Ighli are busiest from 8-10 PM. Look for the stalls with the most locals — quality and turnover go together. Order mechoui (slow-roasted lamb) by weight (from 100 MAD per kilo) for a genuine Marrakech feast. Parc Lalla Hasna is lovely for a sunset walk before dinner.',
  },
];

/* ===============================================================
   DATA: LOCAL FOOD SPOTS
   =============================================================== */

const localFoodSpots = [
  {
    name: 'Breakfast Like a Marrakchi',
    icon: Coffee,
    category: 'Morning Ritual',
    price: 'From 10-25 MAD',
    description:
      'Forget the riad breakfast buffet (from 80-150 MAD). Marrakchis start the day at neighborhood hole-in-the-wall spots with msemen (flaky semolina flatbread, from 3-5 MAD), harira soup (from 5-8 MAD), beghrir (spongy pancakes drizzled with honey, from 5 MAD), and a glass of fresh orange juice (from 5 MAD). The best breakfast spots are along Riad Zitoun el-Kedim, near Bab Doukkala, and in the lanes off Derb Dabachi. Look for small shops where locals crowd around a counter — the food is prepared fresh and costs a fraction of tourist-oriented cafes. For a sit-down breakfast, the cafes along Avenue Mohammed V in Gueliz serve excellent msemen with honey, amlou (almond-argan butter), and Moroccan coffee (nous-nous: half milk, half coffee, from 8 MAD).',
    insiderTip:
      'Ask for "nous-nous" (half-half) when ordering coffee — it is the local preference: half espresso, half steamed milk. The best msemen is found at stalls where they cook it fresh on a griddle in front of you. Arrive before 9 AM for the freshest offerings.',
  },
  {
    name: 'Tanjia at Bab Doukkala',
    icon: Flame,
    category: 'Marrakech Signature Dish',
    price: 'From 40-60 MAD',
    description:
      'Tanjia is THE dish of Marrakech — you cannot find it properly made anywhere else in Morocco. It is a bachelor dish, traditionally prepared by men: beef or lamb with preserved lemons, garlic, cumin, saffron, and smen (aged butter), sealed in a clay urn and slow-cooked for 6-8 hours in the ashes of the hammam furnace. The result is melt-off-the-bone tender meat with an impossibly rich, concentrated sauce. The stalls at Bab Doukkala serve this with fresh khobz bread. Tourist restaurants charge from 120-200 MAD for an inferior version. At the source, you pay from 40-60 MAD and the quality is incomparable.',
    insiderTip:
      'Tanjia is best at lunchtime when fresh batches come out of the hammam ashes. Ask for "tanjia b el-lham" (lamb tanjia) or "tanjia b el-bgri" (beef tanjia). Some stalls let you order a whole urn in advance — perfect for groups of 3-4 people (from 150-200 MAD for the urn). The clay urn is yours to keep as a souvenir.',
  },
  {
    name: 'Street Food at Riad Zitoun',
    icon: UtensilsCrossed,
    category: 'Local Street Food',
    price: 'From 5-30 MAD per item',
    description:
      'The streets of Riad Zitoun el-Kedim and Riad Zitoun el-Jedid (the two main arteries south of Jemaa el-Fna) are lined with local food stalls that tourists walk past without noticing. Look for: kefta sandwiches (from 10-15 MAD), snail soup (babbouche, from 5 MAD — a Marrakech obsession on cold evenings), fried fish (from 15-25 MAD), potato and egg sandwiches (from 10 MAD), and sfenj (Moroccan doughnuts, from 2 MAD each). The stalls near Bahia Palace are particularly good. Unlike the Jemaa el-Fna food stalls which aggressively target tourists and charge inflated prices, the Riad Zitoun stalls serve locals at local prices.',
    insiderTip:
      'The snail soup (babbouche) carts appear in the late afternoon. Each bowl costs from 5-10 MAD and is a genuine Marrakech experience. The broth is spiced with thyme, licorice root, and pepper. If you are unsure about a stall, look for local families eating there — they know the best quality.',
  },
  {
    name: 'Marjane Supermarket Reality Check',
    icon: ShoppingBag,
    category: 'Price Reference',
    price: 'Fixed prices',
    description:
      'Before you enter the souks, visit Marjane (or Carrefour in Gueliz) to learn what things actually cost in Morocco. This is not a tourist tip — it is essential intelligence. Argan oil (1L cosmetic grade): from 200-300 MAD at Marjane vs. from 500-1000+ MAD quoted in the souks. Ras el hanout spice mix (100g): from 10-15 MAD vs. from 50-80 MAD at tourist spice shops. Saffron (1g): from 8-15 MAD. Olive oil (1L): from 40-60 MAD. Amlou (argan-almond spread): from 60-80 MAD. Moroccan tea (250g): from 15-25 MAD. These are the real Moroccan prices. Armed with this knowledge, you can negotiate in the souks from a position of strength. Marjane Menara is the most accessible location, reachable by petit taxi from the medina (from 20 MAD).',
    insiderTip:
      'Take photos of Marjane prices on your phone and show them when a souk vendor quotes something absurd. They will immediately drop to a reasonable price. The Marjane bakery section also has excellent Moroccan pastries at local prices — cornes de gazelle from 3-5 MAD each vs. from 15-25 MAD in tourist shops.',
  },
];

/* ===============================================================
   DATA: LOCAL EXPERIENCES
   =============================================================== */

const localExperiences = [
  {
    name: 'Local Hammam Experience',
    icon: Bath,
    category: 'Authentic Bathing Ritual',
    price: 'From 15-20 MAD (entry)',
    duration: '1-2 hours',
    description:
      'The local hammam is where Marrakchis go at least once a week — it is a social institution, a place to relax, gossip, and get clean. Forget the spa-like tourist hammams (from 200-600 MAD). A neighborhood hammam costs from 15-20 MAD entry. You bring your own savon beldi (black soap, from 15 MAD at any spice shop), kessa glove (exfoliating mitt, from 15-20 MAD), and towel. Inside, there are three rooms of increasing heat. You scrub yourself (or hire an attendant, from 30-50 MAD tip). The experience is communal, unpretentious, and deeply authentic. Hammam Bab Doukkala and Hammam Mouassine are two accessible local hammams. Men and women have separate hours — ask your riad for the schedule.',
    insiderTip:
      'Buy your hammam kit (savon beldi, kessa glove, ghassoul clay, and a small bucket) at a spice shop for from 50-60 MAD total. Tourist hammams sell the same kit for from 200+ MAD. Go in the late morning (women) or early evening (men) when it is most social. Bring flip-flops — the floors are hot and slippery.',
  },
  {
    name: 'Real Souk Negotiation',
    icon: DollarSign,
    category: 'Shopping Strategy',
    price: 'Varies',
    duration: '2-3 hours',
    description:
      'Shopping in the Marrakech souks is an art form. The key insight locals have is this: the tourist souks around Jemaa el-Fna charge 3-10x the real price. The deeper you go into the medina — toward Bab Doukkala, Bab Debbagh (tannery quarter), or the Mellah — the closer prices get to reality. Real price benchmarks: leather babouche slippers from 80-120 MAD (not from 300+), small ceramic tagine pots from 30-60 MAD, woven baskets from 40-80 MAD, leather bags from 150-300 MAD (not from 600+), silver jewelry from 100-300 MAD depending on weight, a wooden chess set from 80-150 MAD. Always start at 25-30% of the quoted price and be willing to walk away — there are hundreds of identical shops.',
    insiderTip:
      'The artisan workshops deep in the souks (off the main tourist routes) sell direct — no middleman markup. Look for small workshops where craftspeople are actively working. The souk des teinturiers (dyers souk), souk des babouches (slipper souk), and souk Semmarine are the traditional artisan areas. Shopping after 7 PM often gets better prices as vendors want to close shop.',
  },
  {
    name: 'Local Transport: Petit Taxis & Buses',
    icon: Bus,
    category: 'Getting Around',
    price: 'From 4-30 MAD',
    duration: 'All day',
    description:
      'Locals never take caleches (horse carriages) or the overpriced tourist taxis. Petit taxis (small beige cars) are metered and cheap: a trip from Jemaa el-Fna to Gueliz costs from 15-20 MAD, to Marjane from 20-25 MAD, to the train station from 20-30 MAD. The meter starts at from 7 MAD (from 10 MAD at night). City buses cost from 4 MAD per trip. Bus 1 connects the medina (Bab Doukkala) to Gueliz. Bus 16 goes to the Menara Gardens. The bus station is at Bab Doukkala. For trips to the Palmeraie or Sidi Ghanem, a petit taxi costs from 30-50 MAD. Grand taxis (shared Mercedes sedans) go to outlying areas and the airport (from 70-100 MAD fixed, or from 200 MAD private).',
    insiderTip:
      'Always insist the petit taxi driver uses the meter (compteur). If they refuse, get another taxi — there are thousands. At night, the meter legally doubles. Never accept a "fixed price" from a petit taxi — it will always be more than the meter. For the airport, negotiate a grand taxi price before getting in. The official airport transfer is from 200 MAD.',
  },
  {
    name: 'Evening at Parc Lalla Hasna',
    icon: Heart,
    category: 'Local Leisure',
    price: 'Free',
    duration: '1-2 hours',
    description:
      'When Marrakchis want to escape the medina heat and chaos, they head to Parc Lalla Hasna, a green oasis between the medina and Hivernage district. In the evening, the park fills with families picnicking on the grass, couples strolling the paths, children playing, and groups of friends gathered on benches. Street vendors sell corn on the cob (from 5 MAD), cotton candy, and roasted almonds. The park is flanked by the Koutoubia Mosque — watching the sunset light hit the minaret from the park is one of Marrakech most beautiful free experiences. This is the real Marrakech social scene — no tourists, no touts, just everyday city life.',
    insiderTip:
      'Arrive around 6 PM in summer (5 PM in winter) for the best evening light on the Koutoubia. The western side of the park has the best views of the minaret at sunset. Bring a blanket and picnic supplies from the medina — fresh bread, olives, cheese, and fruit for from 30-40 MAD total. The park is safe and well-lit in the evening.',
  },
];

/* ===============================================================
   DATA: SOUK PRICE GUIDE
   =============================================================== */

const soukPrices = [
  { item: 'Leather Babouche Slippers', touristPrice: 'From 250-400 MAD', localPrice: 'From 80-120 MAD', tip: 'Go to the babouche souk off Souk Semmarine, not the stalls near Jemaa el-Fna' },
  { item: 'Ceramic Tagine Pot (decorative)', touristPrice: 'From 150-300 MAD', localPrice: 'From 30-60 MAD', tip: 'The pottery souk near Bab Debbagh has the best prices and selection' },
  { item: 'Argan Oil (1L cosmetic)', touristPrice: 'From 500-1000 MAD', localPrice: 'From 200-350 MAD', tip: 'Buy from cooperatives or Marjane — souk "argan oil" is often diluted' },
  { item: 'Ras el Hanout (100g)', touristPrice: 'From 50-100 MAD', localPrice: 'From 10-20 MAD', tip: 'The spice shops in the Mellah souk sell at local prices' },
  { item: 'Woven Basket Bag', touristPrice: 'From 200-400 MAD', localPrice: 'From 40-80 MAD', tip: 'The basket weavers near Bab Khemis sell direct' },
  { item: 'Leather Crossbody Bag', touristPrice: 'From 400-800 MAD', localPrice: 'From 150-300 MAD', tip: 'Go to the tanneries at Bab Debbagh and buy from the workshops' },
  { item: 'Silver Berber Bracelet', touristPrice: 'From 200-500 MAD', localPrice: 'From 80-200 MAD', tip: 'Real silver is sold by weight — ask for the gram price' },
  { item: 'Wooden Chess Set', touristPrice: 'From 300-600 MAD', localPrice: 'From 80-150 MAD', tip: 'The woodworkers near Mouassine sell direct from their workshops' },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Eat Where Locals Eat', icon: UtensilsCrossed, description: 'Bab Doukkala tanjia from 40 MAD, Riad Zitoun street food from 5-15 MAD, breakfast msemen from 3 MAD. Tourist restaurants charge from 100-200 MAD for the same food, worse quality.', savings: 'Save from 50-150 MAD per meal' },
  { tip: 'Local Hammam Over Spa Hammam', icon: Bath, description: 'Neighborhood hammam entry from 15-20 MAD with your own supplies (from 50 MAD kit). Tourist spa hammams charge from 200-600 MAD for essentially the same experience.', savings: 'Save from 130-530 MAD per visit' },
  { tip: 'Petit Taxi with Meter', icon: Navigation, description: 'Insist on the meter: Jemaa el-Fna to Gueliz from 15-20 MAD by meter. Without the meter, drivers quote from 50-80 MAD. Caleches charge from 150-300 MAD for shorter distances.', savings: 'Save from 30-280 MAD per trip' },
  { tip: 'Shop in the Mellah Souk', icon: ShoppingBag, description: 'The Mellah spice market has prices 40-60% lower than the central tourist souks. Same products, less harassment, genuine interaction with vendors who appreciate the business.', savings: 'Save from 30-50% on spices & crafts' },
  { tip: 'Marjane for Souvenirs', icon: Store, description: 'Argan oil, spices, tea, sweets, and cosmetics at Marjane cost from 50-70% less than souk tourist prices. Fixed prices, no haggling, guaranteed quality.', savings: 'Save from 50-70% on packaged goods' },
  { tip: 'Free Medina Exploration', icon: Footprints, description: 'The medina, souks, Koutoubia exterior, Parc Lalla Hasna, Mellah streets, and Bab Ighli evening food scene are all free. The best of Marrakech costs nothing.', savings: 'Free — best local experiences' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Learn Three Arabic Phrases', icon: Globe, description: 'Salam alaykum (hello), la shukran (no thank you), and bezzef (too expensive). These three phrases will transform your souk experience. Vendors appreciate the effort and will treat you differently from tourists who just say "how much?"' },
  { tip: 'Timing the Medina', icon: Clock, description: 'The medina is quietest from 7-9 AM (many shops closed but the light is beautiful for photography) and most active from 10 AM-1 PM and 5-8 PM. Avoid midday (12-4 PM) in summer when the heat is brutal and many shops close.' },
  { tip: 'The Fondouk Secret', icon: Eye, description: 'Marrakech has dozens of historic fondouks (caravanserais) hidden behind unmarked doors in the medina. Peek through any open door in the Mouassine quarter — many are active artisan workshops and welcome visitors. The Fondouk el-Amri near Mouassine fountain is particularly beautiful.' },
  { tip: 'Photography Etiquette', icon: Camera, description: 'Locals generally do not want their photo taken without permission. Ask first (especially women and market vendors). Many vendors will demand payment for photos (from 10-20 MAD). Photograph architecture, doorways, and details freely. The Mellah balconies are the most photogenic structures.' },
  { tip: 'Avoiding Common Scams', icon: AlertTriangle, description: 'The most common scam: someone "helps" you navigate the medina then demands payment. Also: the "my uncle has a shop" ruse, fake saffron (usually safflower), and carpet shop invitations with aggressive sales tactics. A firm "la shukran" and keep walking works every time.' },
  { tip: 'Riad vs. Hotel Stays', icon: Heart, description: 'Stay in a riad in the medina at least one night for the authentic experience (from 300-600 MAD per night). But do not feel obligated to stay exclusively in the medina — a Gueliz hotel (from 400-800 MAD) gives you proximity to modern restaurants, bars, and a different side of the city.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Where do locals eat in Marrakech?', answer: 'Locals eat at Bab Doukkala food stalls for tanjia (from 40 MAD), breakfast msemen and harira at neighborhood shops near Riad Zitoun (from 5 MAD), kefta tagine at Chez Bejgueni (from 35 MAD), grilled meat at Bab Ighli evening stalls (from 20 MAD), and snail soup (babbouche) from street carts (from 5 MAD). Tourist restaurants on Jemaa el-Fna are generally avoided by Marrakchis.' },
  { question: 'What are the hidden gems of Marrakech?', answer: 'Le Jardin Secret in Mouassine (from 50 MAD), Lazama Synagogue in the Mellah (free, donation appreciated), fondouks near Mouassine fountain, Sidi Ghanem industrial zone for design shops, Bab Doukkala for authentic tanjia, Parc Lalla Hasna for evening strolls, Bab Ighli grilled meat scene, and the Mellah spice market with real local prices.' },
  { question: 'Is Gueliz worth visiting in Marrakech?', answer: 'Absolutely. Gueliz is modern Marrakech where locals live, work, and socialize. Avenue Mohammed V has excellent cafes, MACMA gallery has Moroccan modern art, and shopping has fixed prices without haggling. Grand Cafe de la Poste and Cafe 16 are local institutions. It reveals a completely different side of the city.' },
  { question: 'How much should you pay in Marrakech souks?', answer: 'Real prices: leather babouche slippers from 80-120 MAD, ceramic tagine pots from 30-60 MAD, argan oil (1L) from 250-350 MAD, ras el hanout (100g) from 10-20 MAD, woven baskets from 40-80 MAD, leather bags from 150-300 MAD. Tourist first-offer prices are typically 3-10x higher. Check Marjane supermarket first for baseline pricing.' },
  { question: 'What is the difference between local and tourist hammams?', answer: 'Local hammams cost from 15-20 MAD entry — you bring your own soap, kessa glove, and towel. Tourist hammams cost from 200-600 MAD with private rooms, products provided, and massage options. The local hammam is the authentic Moroccan experience: communal, social, unpretentious.' },
  { question: 'How do locals get around Marrakech?', answer: 'Petit taxis (beige, metered, from 7 MAD minimum), city buses (from 4 MAD), and walking. Insist on the meter in petit taxis. Bus 1 connects Bab Doukkala to Gueliz. Avoid caleches (horse carriages) — they are tourist traps. Grand taxis go to the airport and outlying areas.' },
  { question: 'What neighborhoods should I explore beyond the medina?', answer: 'Gueliz for cafes, galleries, and fixed-price shopping. Mellah for the synagogue and cheaper spice souk. Mouassine for fondouks and artisan workshops. Bab Doukkala for tanjia and local food. Sidi Ghanem industrial zone for design shops. Bab Ighli area for evening grilled meat and local life.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/marrakech', icon: MapPin, title: 'Marrakech City Guide', description: 'Complete guide to Marrakech: accommodations, transport, attractions, and trip planning.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to street food and regional specialties.' },
  { href: '/best-riads-morocco', icon: Heart, title: 'Best Riads in Morocco', description: 'Handpicked traditional riads in Marrakech, Fes, and beyond.' },
  { href: '/morocco-budget-travel', icon: DollarSign, title: 'Morocco Budget Travel', description: 'How to travel Morocco affordably without missing the best experiences.' },
  { href: '/fes-local-guide', icon: Compass, title: 'Fes Like a Local', description: 'Hidden gems, local food, and authentic neighborhoods in Fes.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MarrakechLocalGuidePage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/marrakech" className="hover:text-white transition-colors">
              Marrakech
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Local Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Local Insider Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Marrakech Like
            <br className="hidden md:block" /> a Local
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Beyond Jemaa el-Fna: hidden neighborhoods, where Marrakchis actually eat, real souk
            prices, authentic hammams, and the local secrets that transform a tourist trip into a
            genuine experience. Your 2026 insider guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Marrakech Tourists Never See
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Every year, millions of visitors flock to Jemaa el-Fna, are funneled through the
                same souk routes by the same touts, eat at the same overpriced tourist stalls, and
                leave thinking they have experienced Marrakech. They have not. They have experienced
                a theme-park version of the city, carefully constructed to extract maximum dirhams
                from visitors who do not know any better.
              </p>
              <p>
                Real Marrakech is the Bab Doukkala tanjia stalls where taxi drivers eat melt-off-the-bone
                lamb for from 40 MAD. It is the Mellah quarter where you can buy saffron at one-fifth
                of the tourist price. It is the Mouassine fondouks where artisans hammer copper and
                carve cedar exactly as their grandfathers did. It is the Gueliz cafe terraces where
                young Marrakchis debate over espressos, and the Bab Ighli brochette stalls where
                families gather on warm evenings.
              </p>
              <p>
                This guide takes you into the Marrakech that Marrakchis know and love. We cover the
                neighborhoods tourists miss, the food spots locals actually frequent, real souk prices
                based on what things actually cost, local hammams, and practical transport tips. With
                this knowledge, you will save money, eat better, and experience a city that most
                visitors only glimpse from behind a wall of touts and tourist menus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top Local Experiences -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Local Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The experiences that separate travelers from tourists in Marrakech.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Tanjia at Bab Doukkala', price: 'From 40 MAD', time: '1 hour', category: 'Local Food' },
              { rank: 2, name: 'Local Hammam Experience', price: 'From 15 MAD', time: '1-2 hours', category: 'Culture' },
              { rank: 3, name: 'Gueliz Cafe Crawl', price: 'From 8 MAD', time: '2-3 hours', category: 'Modern City' },
              { rank: 4, name: 'Mellah & Lazama Synagogue', price: 'Free', time: '1-2 hours', category: 'Heritage' },
              { rank: 5, name: 'Mouassine Fondouk Walk', price: 'Free', time: '1-2 hours', category: 'Artisan' },
              { rank: 6, name: 'Sidi Ghanem Design District', price: 'Free to browse', time: '2-3 hours', category: 'Shopping' },
              { rank: 7, name: 'Evening at Bab Ighli', price: 'From 20 MAD', time: '1-2 hours', category: 'Street Food' },
              { rank: 8, name: 'Breakfast Like a Marrakchi', price: 'From 10 MAD', time: '30-45 min', category: 'Morning' },
              { rank: 9, name: 'Parc Lalla Hasna Sunset', price: 'Free', time: '1-2 hours', category: 'Leisure' },
              { rank: 10, name: 'Deep Souk Shopping', price: 'Varies', time: '2-4 hours', category: 'Experience' },
            ].map((item) => (
              <div key={item.rank} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-[var(--color-accent)]">{item.rank}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Ticket className="w-3 h-3" />
                      {item.price}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Neighborhoods Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Neighborhoods Beyond the Tourist Trail
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Six districts that reveal the real Marrakech — from the creative buzz of Gueliz to the
            ancient lanes of the Mellah, each with its own character, flavors, and stories.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All neighborhoods are accessible on foot or by petit taxi (from 10-30 MAD from Jemaa el-Fna).
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {neighborhoods.map((hood) => {
              const HoodIcon = hood.icon;
              return (
                <div key={hood.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {hood.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {hood.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          {hood.vibe}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {hood.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {hood.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Where Locals Eat -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where Marrakchis Actually Eat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Forget the Jemaa el-Fna tourist stalls. These are the places locals go for the best food
            at real prices — from dawn msemen to late-night grilled meats.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are per person. Seasonal pricing may change. Tourist restaurant prices are shown for comparison.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {localFoodSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpotIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {spot.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {spot.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {spot.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {spot.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {spot.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Local Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Authentic Local Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From neighborhood hammams to petit taxi mastery — the experiences that connect you
            to daily Marrakech life.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            These experiences are available year-round. Ask your riad host for current recommendations.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {localExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {exp.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {exp.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {exp.price}
                        </span>
                        {exp.duration && (
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {exp.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {exp.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Real Souk Prices -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Real Souk Prices: Tourist vs. Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What things actually cost in Marrakech versus what tourists are quoted.
            Print this or save it on your phone before entering the souks.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are approximate starting prices and vary by quality, size, and negotiation skill. Seasonal pricing may change.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {soukPrices.map((item) => (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {item.item}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-red-50 text-red-700">
                          <AlertTriangle className="w-3 h-3" />
                          Tourist Price: {item.touristPrice}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-green-50 text-green-700">
                          <CheckCircle className="w-3 h-3" />
                          Local Price: {item.localPrice}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">
                        <Lightbulb className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                        {item.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips: Save Like a Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How locals save money in their own city — and how you can too.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => {
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.tip}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{tip.description}</p>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                    {tip.savings}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that turns a good trip into an unforgettable one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const InsiderIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <InsiderIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sample Local Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Day in Marrakech Like a Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow this itinerary to experience Marrakech the way Marrakchis do — no tourist traps, no overpriced stalls, just the real city.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Breakfast &amp; Mellah
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 AM - Local Breakfast</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start with msemen, beghrir, and nous-nous coffee at a neighborhood stall near Riad Zitoun (from 10-15 MAD total). Then walk through the quiet early-morning medina to the Mellah quarter. Visit the Lazama Synagogue (donation from 20 MAD) and browse the Mellah spice souk for saffron, ras el hanout, and dried roses at local prices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">10:00 AM - Mouassine Quarter</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk to the Mouassine quarter. Explore the fondouks, watch artisans at work, and visit Le Jardin Secret (from 50 MAD). Climb the tower for medina panoramas. Browse the artisan shops along Derb el-Hammam without the pressure of the main tourist routes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Afternoon: Gueliz &amp; Tanjia
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM - Lunch at Bab Doukkala</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Head to Bab Doukkala for tanjia — the dish that defines Marrakech (from 40-60 MAD). Eat with fresh bread and wash it down with a glass of avocado juice (from 10 MAD). This is lunch as Marrakchis experience it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">2:30 PM - Gueliz Exploration</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a petit taxi to Gueliz (from 15 MAD). Walk Avenue Mohammed V, stopping at Amandine for pastries. Visit the MACMA gallery, browse fixed-price boutiques on Rue de la Liberte. Coffee at Cafe 16 or Grand Cafe de la Poste (from 15-30 MAD).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Evening: Local Hammam &amp; Bab Ighli
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">5:00 PM - Neighborhood Hammam</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit a local hammam with your savon beldi and kessa glove kit (from 15 MAD entry + from 50 MAD kit). Spend an hour steaming, scrubbing, and relaxing. You will emerge feeling reborn.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM - Sunset &amp; Dinner</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk through Parc Lalla Hasna watching the sunset light the Koutoubia (free). Then head to Bab Ighli for grilled brochettes and mechoui with locals (from 20-100 MAD). Total day cost: from 200-350 MAD — half what most tourists spend, with twice the experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Marrakech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore the Real Marrakech?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Skip the tourist traps and discover the Marrakech that Marrakchis love — authentic food,
            real prices, hidden neighborhoods, and experiences you will not find in any guidebook.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Marrakech City Guide
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Morocco Food Guide
            </Link>
            <Link
              href="/fes-local-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Fes Like a Local
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

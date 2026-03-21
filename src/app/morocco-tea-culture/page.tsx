import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  MessageCircleQuestion,
  HandCoins,
  Layers,
  Leaf,
  CupSoda,
  GlassWater,
  Flame,
  Gift,
  ThumbsUp,
  Globe,
  Utensils,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-tea-culture`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Tea Culture Guide 2026 | Mint Tea Ceremony, Etiquette & Tea Houses',
  description:
    'Complete guide to Moroccan mint tea (atay). Learn the tea preparation ceremony, Chinese gunpowder green tea, fresh mint varieties, pouring technique, social etiquette, best tea houses (salons de the) in Marrakech, Fes & Chefchaouen, regional variations, health benefits, and where to buy authentic tea.',
  keywords: [
    'Moroccan mint tea',
    'Morocco tea culture',
    'atay Morocco',
    'Moroccan tea ceremony',
    'mint tea Morocco',
    'Chinese gunpowder tea Morocco',
    'Moroccan tea etiquette',
    'tea houses Morocco',
    'salon de the Morocco',
    'how to make Moroccan tea',
    'Moroccan tea pouring technique',
    'best tea Marrakech',
    'Morocco tea guide 2026',
    'buy Moroccan tea',
    'Berber whiskey tea',
    'Moroccan tea tradition',
    'green tea Morocco',
    'nana mint Morocco',
  ],
  openGraph: {
    title: 'Morocco Tea Culture Guide 2026 | Mint Tea Ceremony, Etiquette & Tea Houses',
    description:
      'Master the art of Moroccan mint tea: preparation ceremony, pouring technique, tea house culture, social etiquette, regional variations across Morocco, and where to find the best atay from Marrakech to Chefchaouen.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-tea-culture.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan mint tea being poured from a silver teapot into ornate glasses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Tea Culture Guide 2026 | Mint Tea Ceremony & Etiquette',
    description:
      'Moroccan mint tea ceremony, preparation steps, pouring technique, tea house culture, etiquette, regional variations, and where to buy authentic atay.',
    images: [`${BASE_URL}/images/hero-tea-culture.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is Moroccan mint tea made from?',
    a: 'Moroccan mint tea (atay) combines Chinese gunpowder green tea, fresh spearmint leaves (nana), and generous amounts of sugar. The gunpowder tea provides a robust, slightly bitter base, while the fresh mint adds its distinctive cooling aroma. Some families add other herbs like wormwood (sheeba), verbena, or sage depending on the region and season.',
  },
  {
    q: 'Why do Moroccans pour tea from a height?',
    a: 'Pouring from roughly 30 centimeters above the glass serves two purposes. First, it aerates the tea and creates a light foam (rozza) on the surface, which Moroccans consider a sign of quality. Second, it slightly cools the tea to a drinkable temperature. The higher the pour, the more skilled the host. This technique takes practice and is a point of pride.',
  },
  {
    q: 'Is it rude to refuse tea in Morocco?',
    a: 'Refusing tea in Morocco is considered impolite, especially when offered in someone\'s home. Tea is a gesture of hospitality and welcome. If you genuinely cannot drink it, accept the glass and take a small sip to show respect. In shops, accepting tea does not obligate you to buy anything, despite what some sellers may imply.',
  },
  {
    q: 'How many glasses of tea should you drink as a guest?',
    a: 'Moroccan custom holds that you should drink at least three glasses. A popular proverb says: "The first glass is gentle like life, the second is strong like love, the third is bitter like death." Each round has a slightly different flavor as the tea steeps longer. Leaving before the third glass can signal displeasure with the host.',
  },
  {
    q: 'Can I buy authentic Moroccan tea to take home?',
    a: 'Yes. Buy Chinese gunpowder green tea (look for brands like Sultan, Menara, or the premium 4011 grade) at any spice shop or supermarket. A 250-gram box costs from 15 MAD. Fresh mint cannot travel, but dried Moroccan mint blends are available at spice shops in the souks from 30 MAD per bag. Brass or silver-plated teapots make excellent souvenirs, starting from 80 MAD for a basic pot to 800 MAD for handcrafted artisan pieces.',
  },
  {
    q: 'What is the difference between Berber whiskey and regular mint tea?',
    a: '"Berber whiskey" is a humorous nickname for Moroccan mint tea, referencing the fact that Morocco is a Muslim-majority country where alcohol is not widely consumed. The name is used affectionately and you will hear it in tourist areas, particularly in the Atlas Mountains and desert camps. The tea itself is identical to standard Moroccan mint tea.',
  },
  {
    q: 'How much does tea cost at a Moroccan cafe?',
    a: 'At a neighborhood cafe, a glass of mint tea costs from 5 MAD to 10 MAD. At a tourist-area cafe or rooftop terrace, expect from 15 MAD to 30 MAD. At upscale tea houses and riads, a full teapot for two costs from 40 MAD to 80 MAD. In rural areas, tea is sometimes offered free as a courtesy. Seasonal pricing can change.',
  },
  {
    q: 'Is Moroccan mint tea healthy?',
    a: 'Green tea provides antioxidants, and fresh mint aids digestion and can relieve nausea. However, traditional Moroccan tea contains significant sugar, sometimes 4-5 sugar cones per pot. You can request "bla sukkar" (without sugar) or "shwiya dial sukkar" (a little sugar). The unsweetened version retains all the health benefits of green tea and mint without the sugar spike.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Tea Culture Guide 2026',
  description:
    'Complete guide to Moroccan mint tea culture covering the preparation ceremony, pouring technique, social etiquette, tea houses, regional variations, health benefits, and where to buy authentic tea.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-tea-culture.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Tea Culture Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: TEA PREPARATION STEPS
   ================================================================ */

const preparationSteps = [
  {
    step: 1,
    title: 'Rinse the Tea',
    icon: GlassWater,
    duration: '2 min',
    description:
      'Place one tablespoon of Chinese gunpowder green tea into the teapot. Add a splash of boiling water, swirl gently for 20 seconds, then pour the water out. This rinse removes dust and bitterness from the tightly rolled tea leaves, leaving a cleaner flavor.',
    tip: 'Never skip the rinse. Unrinsed gunpowder tea produces a harsh, overly astringent brew that overwhelms the mint.',
  },
  {
    step: 2,
    title: 'First Steep',
    icon: Flame,
    duration: '3 min',
    description:
      'Fill the teapot halfway with boiling water. Let the rinsed leaves steep for two to three minutes. This first steep extracts the core green tea flavor without pulling out too many tannins. The liquid should turn a medium amber-gold.',
    tip: 'Water temperature matters. Bring water to a full rolling boil. Lukewarm water produces a flat, underwhelming tea.',
  },
  {
    step: 3,
    title: 'Add Mint & Sugar',
    icon: Leaf,
    duration: '2 min',
    description:
      'Pack a generous handful of fresh spearmint (nana) into the teapot. Add sugar cones or loose sugar. A traditional pot uses roughly 4 to 5 large sugar cones for a one-liter teapot. Push the mint below the water line with a long spoon.',
    tip: 'Moroccan nana spearmint is the standard. If using peppermint or other varieties, reduce the quantity as their flavor is more intense.',
  },
  {
    step: 4,
    title: 'Top Off & Simmer',
    icon: Flame,
    duration: '3-5 min',
    description:
      'Fill the teapot to the brim with boiling water and place it on low heat for three to five minutes. This gentle simmer melds the tea, mint, and sugar into a unified flavor. Watch for the first small bubbles at the edges, then remove from heat.',
    tip: 'Do not let the tea reach a full boil once the mint is added. Boiling mint releases a bitter compound that spoils the taste.',
  },
  {
    step: 5,
    title: 'Test Pour',
    icon: CupSoda,
    duration: '1 min',
    description:
      'Pour a glass of tea and taste it. Then pour that glass back into the pot. Repeat two or three times. This cycling, called "turning the tea," mixes the ingredients thoroughly and equalizes the strength throughout the pot.',
    tip: 'The test pour is non-negotiable. Skipping it results in the first glass being weak and the last glass being excessively strong.',
  },
  {
    step: 6,
    title: 'The High Pour',
    icon: Sparkles,
    duration: '1 min',
    description:
      'Pour each glass from a height of roughly 30 centimeters. A thin, steady stream of tea falls into the glass, creating a frothy layer of bubbles (rozza) on the surface. This aeration is the hallmark of well-made Moroccan tea.',
    tip: 'Practice with water first. The stream should be continuous and precise. Splashing means the angle or height is wrong.',
  },
] as const;

/* ================================================================
   DATA: TEA VARIETIES & INGREDIENTS
   ================================================================ */

const teaVarieties = [
  {
    name: 'Chinese Gunpowder Green Tea',
    arabic: 'atay siniy',
    description:
      'The foundation of every pot. Tightly rolled pellets of green tea that unfurl during steeping. The 4011 grade is standard in Morocco. Higher grades (3505, 9375) offer a more refined, less astringent flavor.',
    priceRange: 'from 15 MAD per 250g box',
    icon: Leaf,
  },
  {
    name: 'Fresh Spearmint (Nana)',
    arabic: 'nana',
    description:
      'Moroccan nana is a specific spearmint cultivar with broad, bright green leaves and a sweet, aromatic profile. It grows abundantly across the country and is sold in large bunches at every market.',
    priceRange: 'from 2 MAD per bunch',
    icon: Leaf,
  },
  {
    name: 'Wormwood (Sheeba)',
    arabic: 'sheeba / chiba',
    description:
      'Added in small quantities in northern Morocco and the Rif region. Sheeba lends a subtle bitter, herbal edge that offsets the sweetness. Used sparingly as it has a potent flavor.',
    priceRange: 'from 10 MAD per bundle',
    icon: Leaf,
  },
  {
    name: 'Verbena (Louiza)',
    arabic: 'louiza',
    description:
      'Lemon verbena is steeped alone or added to mint tea, particularly in Marrakech and the south. It provides a citrusy, floral note and is believed to calm the stomach after heavy meals.',
    priceRange: 'from 5 MAD per bunch',
    icon: Leaf,
  },
  {
    name: 'Sage (Salmiya)',
    arabic: 'salmiya',
    description:
      'Sage tea is a winter favorite, brewed alone or blended with mint. Popular in the Middle Atlas and mountain communities where its warming properties are valued during cold months.',
    priceRange: 'from 8 MAD per bundle',
    icon: Leaf,
  },
  {
    name: 'Saffron Tea',
    arabic: 'atay zaafrane',
    description:
      'A luxury variation from the Taliouine region, where Morocco produces some of the world\'s finest saffron. A few threads added to green tea create a golden, fragrant infusion served at special occasions.',
    priceRange: 'from 20 MAD per gram of saffron',
    icon: Crown,
  },
] as const;

/* ================================================================
   DATA: TEA EXPERIENCES BY CITY
   ================================================================ */

const cityTeaExperiences = [
  {
    city: 'Marrakech',
    description:
      'The Jemaa el-Fna square teahouses offer ringside views of the nightly spectacle. Rooftop terraces along Rue Riad Zitoun serve tea with panoramic Atlas Mountain views. Cafe des Epices above the spice square and the Maison de la Photographie rooftop are standout choices.',
    highlight: 'Rooftop tea with Atlas Mountain sunset views',
    priceRange: 'from 15 MAD at cafes, from 40 MAD at riads',
    icon: Building,
  },
  {
    city: 'Fes',
    description:
      'The world\'s oldest university city serves tea in centuries-old medina cafes where little has changed in generations. Cafe Clock in Fes el-Bali hosts cultural events alongside its tea service. The tannery-view terraces serve tea while you watch the leather-dyeing process below.',
    highlight: 'Tea at Cafe Clock with live Gnawa music',
    priceRange: 'from 10 MAD at local cafes, from 30 MAD at Cafe Clock',
    icon: Building,
  },
  {
    city: 'Chefchaouen',
    description:
      'The blue city\'s tea culture centers on Plaza Uta el-Hammam, where cafe terraces face the kasbah. Tea here often includes sheeba (wormwood), reflecting the northern Rif tradition. The pace is slower and conversations longer.',
    highlight: 'Sheeba-laced tea in the blue-walled medina',
    priceRange: 'from 8 MAD at local cafes, from 25 MAD at tourist terraces',
    icon: MapPin,
  },
  {
    city: 'Essaouira',
    description:
      'The coastal wind city pairs its mint tea with Atlantic breezes. Rampart-top cafes serve tea overlooking the ocean and Mogador Island. Gnaoua musicians sometimes play in the background. Tea with fresh pastries at a port-side cafe is a quintessential Essaouira morning.',
    highlight: 'Mint tea on the ramparts with Atlantic views',
    priceRange: 'from 10 MAD at cafes, from 35 MAD at rampart terraces',
    icon: MapPin,
  },
  {
    city: 'Tangier',
    description:
      'The Grand Socco and Petit Socco cafes carry the legacy of writers and artists who drank tea in these same seats decades ago. Cafe Hafa, perched on cliffs above the Strait of Gibraltar, has served mint tea since 1921. The Rolling Stones and Paul Bowles once frequented this terrace.',
    highlight: 'Tea at Cafe Hafa overlooking the Strait of Gibraltar',
    priceRange: 'from 10 MAD at Cafe Hafa, from 30 MAD at hotel lounges',
    icon: Globe,
  },
  {
    city: 'Merzouga & Desert Camps',
    description:
      'In the Sahara, tea takes on a ritual significance. Berber guides brew tea over open coals in the sand, using a small pot balanced on stones. The desert version is stronger with more sugar. Drinking tea under a canopy of stars in complete silence is an experience unique to the desert.',
    highlight: 'Berber tea ceremony under Saharan stars',
    priceRange: 'Typically included with desert camp stays from 300 MAD/night',
    icon: Star,
  },
] as const;

/* ================================================================
   DATA: TEA ETIQUETTE RULES
   ================================================================ */

const etiquetteRules = [
  {
    rule: 'Accept with your right hand',
    detail:
      'Always receive and hold tea glasses with your right hand. The left hand is considered unclean in Moroccan culture. You may support the bottom of a hot glass with your left hand if needed.',
    icon: ThumbsUp,
  },
  {
    rule: 'Drink at least three glasses',
    detail:
      'Three is the customary minimum. Each glass from the same pot tastes slightly different as the flavors develop. Leaving early signals you are unhappy with the hospitality.',
    icon: CheckCircle,
  },
  {
    rule: 'Never pour your own tea',
    detail:
      'The host or the youngest family member pours for everyone. Pouring your own tea suggests the host is neglecting their duties. Wait to be served each round.',
    icon: Users,
  },
  {
    rule: 'Praise the tea',
    detail:
      'Compliment the host on the quality of their tea. Saying "had atay bnine" (this tea is delicious) earns genuine appreciation. Tea-making skill is a source of personal pride.',
    icon: Heart,
  },
  {
    rule: 'Sip, do not gulp',
    detail:
      'Tea is meant to be savored slowly over conversation. Gulping your glass and setting it down is considered rushed and disrespectful. Take small sips and let the conversation flow.',
    icon: Clock,
  },
  {
    rule: 'Place glass upside down to stop',
    detail:
      'When you have had enough tea, turn your empty glass upside down on the tray. This is the polite signal that you are finished. Otherwise, the host will continue refilling your glass.',
    icon: Info,
  },
] as const;

/* ================================================================
   DATA: WHERE TO BUY TEA & SUPPLIES
   ================================================================ */

const buyingGuide = [
  {
    item: 'Gunpowder Green Tea',
    where: 'Supermarkets (Marjane, Carrefour, Acima) or spice shops in the souk',
    brands: 'Sultan, Menara, or bulk 4011 grade',
    price: 'from 15 MAD per 250g, from 50 MAD per kilo (bulk)',
    tip: 'Check the harvest date printed on boxed tea. Fresher stock produces better flavor.',
  },
  {
    item: 'Dried Mint Blends',
    where: 'Spice shops in the medina, particularly in Fes and Marrakech souks',
    brands: 'No major brands; sold loose by weight',
    price: 'from 30 MAD per 100g bag',
    tip: 'Smell before buying. The mint should be aromatic and bright green, not dusty brown.',
  },
  {
    item: 'Traditional Teapot (Berrad)',
    where: 'Metalwork shops in the medina, particularly Rue des Teinturiers in Fes',
    brands: 'Handcrafted; look for artisan stamps on the base',
    price: 'from 80 MAD basic, from 300 MAD engraved, from 800 MAD silver-plated artisan',
    tip: 'Test the lid fit and pour before buying. A good berrad pours a clean, thin stream without dripping.',
  },
  {
    item: 'Tea Glasses',
    where: 'Household goods shops in any medina, or upscale craft stores like Ensemble Artisanal',
    brands: 'Hand-painted or gold-rimmed Moroccan style',
    price: 'from 5 MAD each (plain), from 15 MAD each (painted), from 40 MAD each (gold-rimmed)',
    tip: 'Buy a set of six for a complete traditional service. Wrap carefully for travel; they are fragile.',
  },
  {
    item: 'Silver Tea Tray (Siniya)',
    where: 'Metalwork souks, antique shops, cooperative stores',
    brands: 'Handcrafted; Fes is known for the finest metalwork',
    price: 'from 150 MAD basic, from 600 MAD engraved brass, from 2,000 MAD antique silver',
    tip: 'Engraved trays with geometric patterns are the most traditional. Round trays are classic; rectangular ones are modern.',
  },
] as const;

/* ================================================================
   DATA: HEALTH BENEFITS
   ================================================================ */

const healthBenefits = [
  {
    benefit: 'Antioxidant-rich green tea base',
    detail:
      'Chinese gunpowder green tea contains catechins and polyphenols that support cardiovascular health and reduce oxidative stress.',
    icon: ShieldCheck,
  },
  {
    benefit: 'Digestive aid from fresh mint',
    detail:
      'Spearmint relaxes the smooth muscles of the digestive tract, helping relieve bloating, gas, and nausea after heavy meals.',
    icon: Leaf,
  },
  {
    benefit: 'Mental alertness without jitters',
    detail:
      'Green tea contains L-theanine alongside caffeine, producing a calm focus rather than the spiky energy of coffee. One pot contains roughly the caffeine of one espresso.',
    icon: Sparkles,
  },
  {
    benefit: 'Hydration in hot climates',
    detail:
      'Despite being served hot, mint tea promotes sweating which cools the body. The fluid intake helps maintain hydration in Morocco\'s arid climate.',
    icon: GlassWater,
  },
  {
    benefit: 'Social and mental wellbeing',
    detail:
      'The tea ritual slows the pace of the day. Sitting with others over three glasses of tea reduces stress and strengthens social bonds, which research links to improved mental health outcomes.',
    icon: Heart,
  },
] as const;

/* ================================================================
   DATA: REGIONAL VARIATIONS
   ================================================================ */

const regionalVariations = [
  {
    region: 'Northern Rif (Chefchaouen, Tetouan)',
    variation:
      'Sheeba (wormwood) is added to the standard mint tea, giving it a slightly bitter, herbaceous undertone. The sugar level tends to be lower than in the south.',
    icon: MapPin,
  },
  {
    region: 'Marrakech & Central Morocco',
    variation:
      'The classic preparation with heavy sugar and abundant fresh nana mint. Some families add a sprig of verbena (louiza) or orange blossom water for special occasions.',
    icon: MapPin,
  },
  {
    region: 'Saharan South (Merzouga, Zagora)',
    variation:
      'Tea is brewed directly over charcoal or sand-buried coals. The desert version is typically stronger, sweeter, and served in smaller glasses. Three rounds are strictly observed.',
    icon: Star,
  },
  {
    region: 'Atlas Mountains',
    variation:
      'Mountain communities add sage (salmiya) or thyme (zaatar) during winter months. The tea is brewed strong to warm visitors after cold treks at high altitude.',
    icon: MapPin,
  },
  {
    region: 'Atlantic Coast (Essaouira, Agadir)',
    variation:
      'Coastal cafes sometimes offer tea with fresh orange blossom or rose petals. The lighter, more floral character complements the seaside atmosphere.',
    icon: Globe,
  },
  {
    region: 'Souss & Taliouine',
    variation:
      'The saffron-producing heartland occasionally adds a few saffron threads to green tea, creating a golden, fragrant luxury brew served at celebrations and to honored guests.',
    icon: Crown,
  },
] as const;

/* ================================================================
   DATA: HISTORY TIMELINE
   ================================================================ */

const historyTimeline = [
  {
    era: '1700s',
    title: 'Tea Arrives in Morocco',
    description:
      'British merchants introduced tea to Morocco through trade routes via the port of Essaouira (then Mogador). Sultan Moulay Ismail received tea as diplomatic gifts from Queen Anne of England. Initially, tea was a luxury reserved for the royal court and wealthy merchant families.',
    icon: Globe,
  },
  {
    era: '1800s',
    title: 'Tea Becomes Affordable',
    description:
      'As trade volumes increased, Chinese gunpowder green tea prices dropped enough for middle-class Moroccan families to afford it. The practice of adding fresh mint and sugar emerged during this period, transforming an imported product into a distinctly Moroccan creation.',
    icon: DollarSign,
  },
  {
    era: 'Early 1900s',
    title: 'Tea Reaches Every Household',
    description:
      'By the early 20th century, tea had penetrated every level of Moroccan society. Even the poorest families kept tea and sugar on hand. The berrad (teapot) became a standard household item. Tea houses (salons de the) opened in every city and town.',
    icon: Building,
  },
  {
    era: 'Mid 1900s',
    title: 'Post-Independence Identity',
    description:
      'After Morocco gained independence from France in 1956, tea became a symbol of Moroccan cultural identity. While the French had promoted coffee culture, Moroccans reasserted their preference for mint tea as a marker of national pride and tradition.',
    icon: Award,
  },
  {
    era: '2000s-Present',
    title: 'Global Recognition',
    description:
      'Moroccan mint tea has become internationally recognized as one of the world\'s distinctive tea traditions. Tourism has spread awareness, and Moroccan tea houses have opened in cities from Paris to New York. Morocco remains the world\'s largest importer of Chinese green tea.',
    icon: Star,
  },
] as const;

/* ================================================================
   DATA: TEA HOUSE TYPES
   ================================================================ */

const teaHouseTypes = [
  {
    type: 'Neighborhood Cafe (Qahwa)',
    description:
      'The backbone of Moroccan social life. Every neighborhood has at least one. Men dominate the terrace seating; women are welcome but typically sit inside. A glass of mint tea costs from 5 MAD to 10 MAD. The atmosphere is informal, the TV plays football, and conversations range from politics to family.',
    priceRange: 'from 5 MAD per glass',
    bestFor: 'Authentic local atmosphere and people-watching',
    icon: Building,
  },
  {
    type: 'Rooftop Terrace Cafe',
    description:
      'Found throughout the medinas of Marrakech, Fes, and Chefchaouen. These elevated cafes offer panoramic views over the old city rooftops. Tea is the main draw, often served with Moroccan pastries. Prices are higher than street-level cafes but the views justify the markup.',
    priceRange: 'from 15 MAD to 40 MAD per glass',
    bestFor: 'Photography, sunset views, and a tourist-friendly introduction',
    icon: Star,
  },
  {
    type: 'Riad Tea Salon',
    description:
      'Many riads (traditional courtyard guesthouses) serve afternoon tea to non-guests. The setting is intimate: tiled courtyards, fountains, orange trees, and carved plaster walls. Tea is served on silver trays with an assortment of Moroccan cookies and pastries.',
    priceRange: 'from 40 MAD to 80 MAD per pot with pastries',
    bestFor: 'A refined, quiet experience away from the medina bustle',
    icon: Crown,
  },
  {
    type: 'Salon de The (French-Style Tea Room)',
    description:
      'A holdover from the French protectorate era. These establishments blend Moroccan and European tea culture, serving both mint tea and patisserie alongside French-style cafe au lait. Found mainly in the Ville Nouvelle (new city) districts of major cities.',
    priceRange: 'from 20 MAD to 50 MAD per pot',
    bestFor: 'Mixed tea traditions and French-Moroccan pastries',
    icon: CupSoda,
  },
  {
    type: 'Desert & Mountain Camp',
    description:
      'In the Sahara and Atlas Mountains, tea is brewed over open flames by Berber guides. There is no menu and no bill. Tea is offered as part of the camp experience. The preparation is slower, the setting is raw, and the ritual feels closer to its historical roots.',
    priceRange: 'Included with camp stays from 300 MAD/night',
    bestFor: 'The most atmospheric and culturally immersive tea experience',
    icon: Flame,
  },
] as const;

/* ================================================================
   DATA: USEFUL ARABIC PHRASES FOR TEA
   ================================================================ */

const teaPhrases = [
  { darija: 'Atay, afak', english: 'Tea, please', context: 'Ordering tea at any cafe' },
  { darija: 'Bla sukkar', english: 'Without sugar', context: 'Requesting unsweetened tea' },
  { darija: 'Shwiya dial sukkar', english: 'A little sugar', context: 'Requesting lightly sweetened tea' },
  { darija: 'Had atay bnine', english: 'This tea is delicious', context: 'Complimenting the host\'s tea' },
  { darija: 'Shukran, bzzaf', english: 'Thank you very much', context: 'Expressing gratitude for tea' },
  { darija: 'Atay b\'naanaa', english: 'Tea with mint', context: 'Specifying mint tea (standard)' },
  { darija: 'Atay b\'louiza', english: 'Tea with verbena', context: 'Ordering verbena tea' },
  { darija: 'Wahd al-kas zayed', english: 'One more glass', context: 'Requesting another serving' },
] as const;

/* ================================================================
   RELATED GUIDES
   ================================================================ */

const relatedGuides = [
  { title: 'Moroccan Cuisine Guide', href: '/morocco-cuisine-guide', icon: Utensils },
  { title: 'Morocco Shopping Guide', href: '/morocco-shopping-guide', icon: Gift },
  { title: 'Morocco Budget Travel', href: '/morocco-budget-travel', icon: HandCoins },
  { title: 'Berber Culture & Heritage', href: '/berber-culture', icon: Users },
  { title: 'Morocco Etiquette Tips', href: '/morocco-etiquette', icon: BookOpen },
  { title: 'Traditional Hammam & Spa Guide', href: '/morocco-spa-guide', icon: Sparkles },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoTeaCulturePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="hero-overlay relative isolate overflow-hidden bg-[#1a0f0a] py-24 sm:py-32">
        <img
          src="/images/hero-tea-culture.webp"
          alt="Traditional Moroccan mint tea being poured from an ornate silver teapot into decorated glasses on a brass tray"
          width={1200}
          height={630}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="container-morocco text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-1 text-sm text-white/80">
              <li>
                <Link href="/" className="flex items-center gap-1 transition-colors hover:text-white">
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
              </li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li className="font-medium text-white">Morocco Tea Culture Guide</li>
            </ol>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Morocco Tea Culture Guide 2026
          </h1>
          <p className="font-[family-name:var(--font-heading)] mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            The art of Moroccan mint tea is far more than a beverage. It is the country&apos;s
            most enduring social ritual, a daily ceremony of hospitality repeated millions
            of times from Tangier to the Sahara. This guide covers every aspect of atay,
            from the leaves in the pot to the etiquette at the table.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 15 min read</span>
            <span className="flex items-center gap-1.5"><Leaf className="h-4 w-4" /> Updated March 2026</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 6 cities covered</span>
          </div>
        </div>
      </section>

      {/* ── Quick Overview ── */}
      <section className="container-morocco py-16">
        <div className="zellige-border rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-display)] mb-6 flex items-center gap-2 text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
            <CupSoda className="h-7 w-7 text-[#A0522D]" />
            Why Tea Matters in Morocco
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'National Symbol', text: 'Morocco consumes more green tea per capita than any other country. Tea arrived from Britain in the 18th century and became inseparable from Moroccan identity within a generation.', icon: Award },
              { title: 'Social Glue', text: 'Every meeting, negotiation, family gathering, and shop visit begins with tea. Refusing tea is refusing connection. The ritual creates trust and signals respect between parties.', icon: Users },
              { title: 'Daily Frequency', text: 'Most Moroccan families brew tea four to six times per day. The morning tea starts the day, after-lunch tea aids digestion, afternoon tea fuels conversation, and evening tea winds down the night.', icon: Clock },
              { title: 'Economic Weight', text: 'Morocco imports more than 75,000 tonnes of Chinese green tea annually, making it the world\'s largest importer of green tea. Tea is a meaningful line item in household budgets across every income level.', icon: DollarSign },
              { title: 'Gender & Tradition', text: 'In many households, the man of the house prepares and pours the tea, especially when guests are present. In private, both men and women brew tea. The role of tea preparer carries quiet respect.', icon: Heart },
              { title: 'Beyond Mint', text: 'While mint tea dominates, Moroccans also drink sage tea, verbena tea, thyme tea, and saffron-infused tea depending on region and season. Each variation carries its own cultural significance.', icon: Leaf },
            ].map((item) => (
              <div key={item.title} className="card-moroccan rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] mb-1 font-semibold text-[#1a0f0a]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History Timeline ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
            A Brief History of Tea in Morocco
          </h2>
          <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Tea is not indigenous to Morocco. Its arrival, adoption, and transformation into a national
            symbol spans roughly three centuries of trade, colonization, and cultural reinvention.
          </p>
          <div className="mx-auto max-w-3xl space-y-6">
            {historyTimeline.map((h) => (
              <div key={h.era} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A0522D] text-xs font-bold text-white">
                    {h.era}
                  </span>
                  <div className="mt-2 h-full w-px bg-[#A0522D]/20" />
                </div>
                <div className="card-moroccan rounded-xl bg-[#FAF8F5] p-5 flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h.icon className="h-4 w-4 text-[#C4960C]" />
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#1a0f0a]">{h.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tea Preparation Steps ── */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
            How to Prepare Moroccan Mint Tea
          </h2>
          <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
            The six-step preparation process has remained unchanged for generations. Each step affects the
            final flavor. Rushing any stage produces noticeably inferior tea.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {preparationSteps.map((s) => (
              <div key={s.step} className="card-moroccan rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A0522D] text-sm font-bold text-white">
                    {s.step}
                  </span>
                  <s.icon className="h-5 w-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#1a0f0a]">{s.title}</h3>
                </div>
                <span className="mb-3 inline-block rounded-full bg-[#A0522D]/10 px-2 py-0.5 text-xs font-medium text-[#A0522D]">
                  <Clock className="mr-1 inline h-3 w-3 -mt-0.5" />{s.duration}
                </span>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">{s.description}</p>
                <div className="flex items-start gap-2 rounded-lg bg-[#FAF8F5] p-3">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C4960C]" />
                  <p className="text-xs leading-relaxed text-gray-500">{s.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tea Varieties & Ingredients ── */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
          Tea Varieties & Ingredients
        </h2>
        <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Standard Moroccan tea uses three ingredients: gunpowder green tea, fresh mint, and sugar.
          Regional herbs and seasonal additions create dozens of variations across the country.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teaVarieties.map((v) => (
            <div key={v.name} className="card-moroccan rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <v.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#A0522D]" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] mb-0.5 font-semibold text-[#1a0f0a]">{v.name}</h3>
                  <p className="mb-2 text-xs italic text-[#C4960C]">Arabic: {v.arabic}</p>
                  <p className="mb-2 text-sm leading-relaxed text-gray-600">{v.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#A0522D]">
                    <DollarSign className="h-3 w-3" /> {v.priceRange}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tea Etiquette ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
            Tea Etiquette: The Unwritten Rules
          </h2>
          <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Moroccan tea etiquette is learned by observation from childhood. As a visitor, knowing these
            customs shows cultural awareness and earns genuine warmth from your hosts.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {etiquetteRules.map((r) => (
              <div key={r.rule} className="zellige-border rounded-xl bg-[#FAF8F5] p-5">
                <div className="flex items-start gap-3">
                  <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] mb-1 font-semibold text-[#1a0f0a]">{r.rule}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{r.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional Variations ── */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
          Regional Tea Variations Across Morocco
        </h2>
        <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
          While the base recipe is universal, each region puts its own signature on the tea. Traveling
          through Morocco, you will notice the flavor shifting as the landscape changes.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {regionalVariations.map((rv) => (
            <div key={rv.region} className="card-moroccan rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <rv.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#A0522D]" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] mb-1 font-semibold text-[#1a0f0a]">{rv.region}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{rv.variation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tea House Types ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
            Types of Tea Houses in Morocco
          </h2>
          <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Morocco has several distinct types of tea-drinking establishments, each offering a
            different atmosphere, price point, and cultural experience.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {teaHouseTypes.map((th) => (
              <div key={th.type} className="zellige-border rounded-xl bg-[#FAF8F5] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <th.icon className="h-5 w-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#1a0f0a]">{th.type}</h3>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">{th.description}</p>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-1.5 text-xs text-[#A0522D]">
                    <DollarSign className="h-3 w-3" /> {th.priceRange}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-gray-500">
                    <CheckCircle className="h-3 w-3 text-[#C4960C]" /> {th.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Useful Arabic Phrases ── */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
          Useful Darija Phrases for Tea
        </h2>
        <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Knowing a few words in Darija (Moroccan Arabic) transforms the tea experience.
          Hosts and cafe owners respond with visible warmth when visitors make the effort.
        </p>
        <div className="mx-auto max-w-3xl grid gap-3 sm:grid-cols-2">
          {teaPhrases.map((p) => (
            <div key={p.darija} className="card-moroccan flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[#A0522D]" />
              <div>
                <p className="font-[family-name:var(--font-heading)] font-semibold text-[#1a0f0a]">{p.darija}</p>
                <p className="text-sm text-[#C4960C]">{p.english}</p>
                <p className="mt-1 text-xs text-gray-500">{p.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Best Tea Experiences by City ── */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
            Best Tea Experiences by City
          </h2>
          <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Every Moroccan city has its own tea personality. These are the standout spots where the
            setting, the service, and the tea itself come together into something worth traveling for.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cityTeaExperiences.map((c) => (
              <div key={c.city} className="card-moroccan rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <c.icon className="h-5 w-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1a0f0a]">{c.city}</h3>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">{c.description}</p>
                <div className="mb-3 rounded-lg bg-[#FAF8F5] p-3">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-[#A0522D]">
                    <Star className="h-3.5 w-3.5 text-[#C4960C]" />
                    {c.highlight}
                  </p>
                </div>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  <DollarSign className="h-3 w-3" /> {c.priceRange}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Health Benefits ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
            Health Benefits of Moroccan Mint Tea
          </h2>
          <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
            When consumed without excessive sugar, Moroccan mint tea offers genuine health advantages.
            The combination of green tea and fresh mint delivers benefits that neither ingredient
            provides alone.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {healthBenefits.map((hb) => (
              <div key={hb.benefit} className="zellige-border rounded-xl bg-[#FAF8F5] p-5">
                <div className="flex items-start gap-3">
                  <hb.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#A0522D]" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] mb-1 font-semibold text-[#1a0f0a]">{hb.benefit}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{hb.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-2xl card-moroccan rounded-xl bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] mb-1 font-semibold text-[#1a0f0a]">A Note on Sugar</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Traditional Moroccan mint tea is heavily sweetened. A standard pot can contain 40 to 60
                  grams of sugar. If you prefer less sugar, say &quot;shwiya dial sukkar&quot; (a little sugar)
                  or &quot;bla sukkar&quot; (without sugar). Most cafes will accommodate the request. Reducing
                  sugar does not offend; many health-conscious Moroccans now drink lighter tea themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Buying Guide ── */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] mb-4 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
          Buying Moroccan Tea & Supplies to Take Home
        </h2>
        <p className="font-[family-name:var(--font-heading)] mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Bringing the Moroccan tea experience home is straightforward. The essential ingredients are
          inexpensive, widely available, and easy to pack. The teaware makes a memorable souvenir.
        </p>
        <div className="space-y-4">
          {buyingGuide.map((bg) => (
            <div key={bg.item} className="card-moroccan rounded-xl bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex shrink-0 items-center gap-2 sm:w-48">
                  <Gift className="h-5 w-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#1a0f0a]">{bg.item}</h3>
                </div>
                <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="mb-0.5 text-xs font-medium text-[#A0522D]">Where to Buy</p>
                    <p className="text-sm text-gray-600">{bg.where}</p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium text-[#A0522D]">Brands / Type</p>
                    <p className="text-sm text-gray-600">{bg.brands}</p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium text-[#A0522D]">Price</p>
                    <p className="text-sm text-gray-600">{bg.price}</p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium text-[#A0522D]">Buying Tip</p>
                    <p className="text-sm text-gray-600">{bg.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] mb-10 flex items-center justify-center gap-2 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
            <MessageCircleQuestion className="h-7 w-7 text-[#A0522D]" />
            Frequently Asked Questions
          </h2>
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {faqItems.map((f) => (
              <div key={f.q} className="zellige-border rounded-xl bg-[#FAF8F5] p-5">
                <h3 className="font-[family-name:var(--font-heading)] mb-2 text-sm font-semibold text-[#1a0f0a]">{f.q}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] mb-8 text-center text-2xl font-bold text-[#1a0f0a] sm:text-3xl">
          Related Morocco Guides
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="card-moroccan group flex items-center gap-3 rounded-xl p-5 transition-shadow hover:shadow-md"
            >
              <g.icon className="h-5 w-5 shrink-0 text-[#A0522D]" />
              <span className="font-[family-name:var(--font-heading)] font-medium text-[#1a0f0a] transition-colors group-hover:text-[#A0522D]">
                {g.title}
              </span>
              <ArrowRight className="ml-auto h-4 w-4 text-gray-400 transition-colors group-hover:text-[#A0522D]" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-[#1a0f0a] py-16">
        <div className="container-morocco text-center">
          <Layers className="mx-auto mb-4 h-10 w-10 text-[#C4960C]" />
          <h2 className="font-[family-name:var(--font-display)] mb-4 text-2xl font-bold text-white sm:text-3xl">
            Experience Moroccan Tea Culture First-Hand
          </h2>
          <p className="font-[family-name:var(--font-heading)] mx-auto mb-8 max-w-2xl leading-relaxed text-white/80">
            From rooftop terraces in Marrakech to Berber camps in the Sahara, tea is the thread
            that connects every Moroccan experience. Let us help you plan a trip where the tea
            flows freely and the hospitality runs deep.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#A0522D] px-6 py-3 font-medium text-white transition-colors hover:bg-[#8B4726]"
            >
              Plan Your Morocco Trip
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Browse All Tours
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

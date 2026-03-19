import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Globe,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Compass,
  Heart,
  Coffee,
  Leaf,
  GlassWater,
  Store,
  HandHeart,
  Star,
  ThermometerSun,
  Flame,
  ListChecks,
  MessageCircle,
  ShoppingBag,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Mint Tea Guide 2026 | Tea Culture, Recipe & Ceremony Etiquette',
  description:
    'Complete guide to Moroccan mint tea and Morocco tea culture in 2026. Learn how to make Moroccan tea step by step, tea ceremony etiquette, regional variations, best tea houses by city, tea ingredients, and where to buy authentic Moroccan tea supplies.',
  keywords: [
    'Moroccan mint tea',
    'Morocco tea culture',
    'how to make Moroccan tea',
    'mint tea Morocco',
    'Moroccan tea ceremony',
    'Moroccan tea recipe',
    'atay Morocco',
    'gunpowder green tea Morocco',
    'Moroccan tea etiquette',
    'best tea houses Morocco',
    'Moroccan mint tea recipe',
    'Morocco tea traditions',
    'Berber whiskey Morocco',
    'Moroccan tea set',
    'mint tea Marrakech',
    'Morocco tea history',
    'traditional Moroccan tea',
  ],
  openGraph: {
    title: 'Moroccan Mint Tea Guide 2026 | Tea Culture, Recipe & Ceremony Etiquette',
    description:
      'Everything about Moroccan mint tea: history, ceremony etiquette, step-by-step recipe, regional variations, best tea houses, and where to buy authentic tea supplies.',
    url: `${BASE_URL}/morocco-tea-culture`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan mint tea being poured from a silver teapot into ornate glasses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Mint Tea Guide 2026 | Culture, Recipe & Etiquette',
    description:
      'History, ceremony etiquette, step-by-step recipe, regional variations, best tea houses & where to buy supplies. Your complete guide to mint tea in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-tea-culture` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-tea-culture`,
  name: 'Moroccan Mint Tea Guide 2026 | Tea Culture, Recipe & Ceremony Etiquette',
  description:
    'Complete guide to Moroccan mint tea culture in 2026, covering the history of tea in Morocco, ceremony etiquette, how to make mint tea step by step, regional variations, best tea houses by city, tea ingredients, social customs, and where to buy authentic supplies.',
  url: `${BASE_URL}/morocco-tea-culture`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-tea-culture`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Tea Culture', item: `${BASE_URL}/morocco-tea-culture` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What type of tea is used in Moroccan mint tea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan mint tea is made with Chinese gunpowder green tea (rolled into small pellets), fresh spearmint (nana), and generous amounts of white sugar. The gunpowder tea provides a strong, slightly bitter base, while the fresh mint adds a cooling, aromatic flavor. Some regions also add other herbs like wormwood (shiba) or lemon verbena (louiza) for variety.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Moroccan tea poured from a height?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pouring Moroccan tea from a height of 30 to 50 centimeters (about 12 to 20 inches) serves both practical and ceremonial purposes. The height aerates the tea, creating a light froth on top that enhances the flavor and indicates the tea has been properly mixed. It also cools the tea slightly, making it drinkable sooner. The graceful, skillful pour is a sign of the host hospitality and mastery of the tea ritual.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it rude to refuse tea in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, refusing tea in Morocco is considered impolite, as offering tea is a fundamental gesture of hospitality and welcome. You should accept at least one glass. If you truly cannot drink tea for health reasons, explain politely and your host will understand. In shops and markets, accepting tea does not obligate you to buy anything; it is simply part of the social ritual.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many glasses of Moroccan tea should I drink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditionally, three glasses of tea are served, each with its own meaning: the first glass is "gentle as life," the second is "strong as love," and the third is "bitter as death." Drinking all three is considered respectful and shows appreciation for your host hospitality. However, drinking at least one glass is the minimum expectation. After three glasses, you can politely decline more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy authentic Moroccan tea supplies to take home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Moroccan souks and spice markets sell gunpowder green tea, dried mint, sugar cones, and traditional tea sets including silver or brass teapots (berrad), ornate glasses, and serving trays. The best places to buy are the spice souks in Marrakech, Fes, and Meknes. Expect to haggle for teapots and glassware. Loose tea and mint are sold by weight at very affordable prices, typically from 20 to 80 MAD per 100 grams depending on quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Moroccan tea in the north and south?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Northern Moroccan tea (around Tangier and the Rif region) tends to be lighter with less sugar and sometimes includes wormwood (shiba) for a slightly bitter, herbal flavor. Southern Moroccan tea, especially in the Sahara and Draa Valley, is typically much sweeter and stronger, often made with more sugar and saffron. In the Atlas Mountains, Amazigh (Berber) communities may add wild herbs like thyme, sage, or pennyroyal. Coastal cities like Essaouira sometimes use lemon verbena (louiza) or orange blossom water.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a traditional Moroccan tea ceremony take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A traditional Moroccan tea ceremony typically takes between 20 and 45 minutes, though it can extend much longer during social gatherings. The preparation itself takes about 10 minutes, and each round of three glasses is savored slowly with conversation. In a carpet shop or during business negotiations, tea may be served multiple times over an hour or more. The key is never to rush the ceremony; it is a time for connection and relaxation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Moroccan mint tea called Berber whiskey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan mint tea is humorously nicknamed "Berber whiskey" (or "Moroccan whiskey") because it is the national drink of Morocco, consumed with the same frequency and social importance that alcohol might hold in other cultures. Since Morocco is a Muslim-majority country where most people do not drink alcohol, mint tea fills the role of the social beverage. The nickname is used lightheartedly by Moroccans themselves and reflects the central role tea plays in daily life and hospitality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I make Moroccan mint tea at home without a traditional teapot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can make Moroccan mint tea at home using any small teapot or even a saucepan. The key ingredients are Chinese gunpowder green tea, fresh spearmint leaves, and sugar. Steep the tea, add mint and sugar, and let it simmer briefly. While a traditional berrad (Moroccan teapot) helps with the iconic high pour, you can approximate the effect by pouring from a regular teapot held at a height into glasses. The flavor will be authentic as long as you use the right tea and fresh mint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Moroccan tea served with food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan tea is served throughout the day and accompanies nearly every social interaction. It is commonly served with Moroccan pastries like msemen (flatbread), baghrir (semolina pancakes), chebakia (sesame cookies), or kaab el ghazal (gazelle horns). Tea is served before meals as a welcome, after meals as a digestif, during business meetings, and when guests visit. It is essentially the universal Moroccan beverage for any occasion.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA HISTORY TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const teaHistory = [
  {
    era: '18th Century',
    title: 'Tea Arrives in Morocco',
    detail: 'British merchants introduced Chinese green tea to Morocco through the port of Mogador (modern-day Essaouira) and Tangier. Initially, tea was a luxury reserved for the royal court and wealthy merchants in cities like Fes and Marrakech.',
    icon: Globe,
  },
  {
    era: '19th Century',
    title: 'Tea Becomes a National Drink',
    detail: 'During the reign of Sultan Moulay Hassan I, tea became widely available across Morocco. The combination of gunpowder green tea with local spearmint and sugar created the signature Moroccan blend. Tea drinking spread from the elite to all social classes.',
    icon: Users,
  },
  {
    era: 'Early 20th Century',
    title: 'Tea Ceremony Traditions Solidify',
    detail: 'The ritualized tea ceremony became a cornerstone of Moroccan hospitality. Silver teapots, ornate glasses, and brass trays became essential household items. The art of pouring from a height was refined and became a point of pride for hosts.',
    icon: Star,
  },
  {
    era: 'Modern Day',
    title: 'An Enduring Cultural Icon',
    detail: 'Today, Morocco imports more green tea per capita than almost any country on earth. Mint tea remains the national drink, consumed from breakfast to late evening. Traditional tea houses coexist with modern cafes, and the ceremony continues to bring families and communities together.',
    icon: Heart,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA CEREMONY ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const ceremonyEtiquette = [
  'Always accept at least one glass of tea when offered. Refusing is considered disrespectful to the host.',
  'Tea is traditionally poured by the male head of the household or the most honored guest. Do not pour your own tea.',
  'Hold the glass by the rim with your thumb and forefinger. The glass will be hot at the bottom.',
  'Sip slowly and savor the tea. Rushing through tea is seen as dismissive of the host hospitality.',
  'The traditional serving is three glasses. Each has meaning: gentle as life, strong as love, bitter as death.',
  'Compliment the tea with phrases like "Bneen" (delicious) or "Zween bezef" (very nice). Hosts take pride in their tea.',
  'If offered more tea after three glasses, you may politely decline by placing your hand over the glass.',
  'Never blow on hot tea to cool it. Instead, pour a small amount from your glass into the saucer and back.',
  'In shops and carpet sellers, accepting tea is social protocol. It does not obligate you to purchase anything.',
  'Wait for the host to drink first before taking your first sip, as a sign of respect.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HOW TO MAKE TEA (STEP BY STEP)
   ═══════════════════════════════════════════════════════════════ */

const teaRecipeSteps = [
  { step: 1, title: 'Rinse the Teapot', detail: 'Rinse your Moroccan teapot (berrad) with boiling water to warm it. This helps maintain the brewing temperature and ensures a clean flavor. Swirl the water and discard it.' },
  { step: 2, title: 'Add the Green Tea', detail: 'Add 1 to 2 tablespoons of Chinese gunpowder green tea to the warmed teapot. The tightly rolled pellets will unfurl as they steep, releasing a robust, slightly smoky flavor.' },
  { step: 3, title: 'First Rinse of the Tea', detail: 'Pour a small amount of boiling water over the tea leaves, swirl gently for 15 seconds, then pour off the water. This "washing" step removes bitterness and dust from the tea leaves while preserving the flavor.' },
  { step: 4, title: 'Add Boiling Water', detail: 'Fill the teapot with boiling water (about 4 cups or 1 liter). Let the tea steep for 2 to 3 minutes. The water should be at a full rolling boil when you add it.' },
  { step: 5, title: 'Add Fresh Mint and Sugar', detail: 'Pack a generous handful of fresh spearmint (nana) into the teapot. Add sugar to taste, typically 4 to 6 sugar cubes or 3 to 4 tablespoons. Moroccans use white sugar; the amount varies by region and preference.' },
  { step: 6, title: 'Steep and Stir', detail: 'Place the teapot on low heat for 2 to 3 minutes, allowing the sugar to dissolve and the mint to infuse. Do not let it boil vigorously, as this will make the tea bitter and destroy the mint freshness.' },
  { step: 7, title: 'Test the Flavor', detail: 'Pour a small glass of tea, taste it, and pour it back into the teapot. Repeat 2 to 3 times. This mixing process ensures consistent flavor and helps the Moroccan say the tea has been "married" (the flavors are fully combined).' },
  { step: 8, title: 'Pour from a Height', detail: 'Hold the teapot high (30 to 50 cm above the glass) and pour in a steady stream. This aerates the tea, creates the signature frothy top, and slightly cools the liquid. Practice makes perfect; start at a lower height and increase gradually.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL VARIATIONS
   ═══════════════════════════════════════════════════════════════ */

const regionalVariations = [
  { region: 'Marrakech & Central Morocco', style: 'Classic Mint Tea', detail: 'The standard Moroccan mint tea with a strong, sweet profile. Uses generous amounts of sugar and fresh spearmint. Often served with almond-stuffed pastries.', icon: Coffee },
  { region: 'Tangier & Northern Rif', style: 'Shiba (Wormwood) Tea', detail: 'In the north, tea is lighter and sometimes includes shiba (wormwood) alongside or instead of mint, giving a distinctive bitter herbal taste. Less sugar is used compared to the south.', icon: Leaf },
  { region: 'Fes & Meknes', style: 'Orange Blossom Tea', detail: 'The imperial cities occasionally add orange blossom water (mazhar) to mint tea for a fragrant, floral twist. This refined variation reflects the sophisticated culinary traditions of Fes.', icon: Sparkles },
  { region: 'Atlas Mountains (Berber)', style: 'Wild Herb Tea', detail: 'Amazigh communities in the High Atlas and Middle Atlas brew tea with wild mountain herbs such as thyme (zaatar), sage (salmia), pennyroyal (fliyou), and sometimes lavender gathered from the hillsides.', icon: ThermometerSun },
  { region: 'Sahara & Southern Morocco', style: 'Desert Tea', detail: 'Saharan tea is extremely sweet and strong, brewed longer over a charcoal fire. In Tuareg tradition, three rounds are served, each progressively sweeter. Saffron threads are sometimes added for color and aroma.', icon: Flame },
  { region: 'Essaouira & Atlantic Coast', style: 'Louiza (Verbena) Tea', detail: 'Coastal towns favor lemon verbena (louiza) tea, served hot or cold. This caffeine-free herbal infusion is prized for its digestive properties and refreshing citrus aroma, perfect for seaside afternoons.', icon: GlassWater },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TEA HOUSES BY CITY
   ═══════════════════════════════════════════════════════════════ */

const bestTeaHouses = [
  { city: 'Marrakech', name: 'Le Jardin', location: 'Medina, Souk Sidi Abdelaziz', highlight: 'Lush garden courtyard setting with traditional mint tea served alongside Moroccan pastries. A peaceful oasis in the bustling medina.' },
  { city: 'Marrakech', name: 'Nomad', location: 'Derb Aarjaan, Medina', highlight: 'Rooftop terrace with panoramic views of the medina. Modern Moroccan cuisine paired with traditional tea service.' },
  { city: 'Fes', name: 'Cafe Clock', location: 'Derb el Magana, Fes el-Bali', highlight: 'Cultural cafe known for storytelling events, live music, and excellent mint tea. A meeting point for travelers and locals alike.' },
  { city: 'Fes', name: 'Riad Fes Maya Lounge', location: 'Derb Bennis, Zarbatana', highlight: 'Elegant riad with an ornate tea salon serving tea in traditional silver service with handmade sweets.' },
  { city: 'Chefchaouen', name: 'Cafe Aladdin', location: 'Place Uta el-Hammam', highlight: 'Terrace overlooking the blue medina main square. Enjoy mint tea while watching the town come alive below.' },
  { city: 'Essaouira', name: 'Taros Cafe', location: 'Place Moulay Hassan', highlight: 'Rooftop lounge overlooking the port. Known for louiza (verbena) tea and sea-breeze afternoons with live Gnawa music.' },
  { city: 'Tangier', name: 'Cafe Hafa', location: 'Avenue Hafa, Marshan', highlight: 'Legendary cliffside cafe overlooking the Strait of Gibraltar. Unchanged since 1921, frequented by the Rolling Stones and Paul Bowles. Simple mint tea with stunning views.' },
  { city: 'Casablanca', name: 'Rick\'s Cafe', location: 'Boulevard Sour Jdid, Old Medina', highlight: 'Inspired by the classic film, offering traditional Moroccan tea in an Art Deco atmosphere with live piano music.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA INGREDIENTS & TYPES
   ═══════════════════════════════════════════════════════════════ */

const teaIngredients = [
  { name: 'Gunpowder Green Tea', arabic: 'Atay', description: 'Chinese green tea rolled into small pellets that resemble gunpowder. The tightly rolled leaves produce a strong, slightly smoky brew. Morocco is one of the world\'s largest importers of Chinese gunpowder tea.', icon: Leaf },
  { name: 'Fresh Spearmint', arabic: 'Nana', description: 'Fresh spearmint (Mentha spicata) is the signature herb in Moroccan tea. It must be fresh, never dried. Moroccans buy bunches daily from markets. The mint adds a cooling, aromatic quality that defines the drink.', icon: Leaf },
  { name: 'White Sugar', arabic: 'Sukkar', description: 'Moroccan tea is traditionally very sweet. White sugar loaves (pain de sucre) are broken into chunks and added generously. The sugar balances the bitterness of the green tea and enhances the mint flavor.', icon: Star },
  { name: 'Wormwood', arabic: 'Shiba', description: 'Used primarily in northern Morocco, dried wormwood adds a distinctive bitter, medicinal flavor. It is believed to aid digestion and is often mixed with mint or used as a substitute in winter months.', icon: Leaf },
  { name: 'Lemon Verbena', arabic: 'Louiza', description: 'Popular in coastal regions, especially Essaouira. This fragrant herb produces a caffeine-free, citrusy infusion served hot or cold. Widely used as a calming evening tea.', icon: Leaf },
  { name: 'Saffron', arabic: 'Zaafrane', description: 'Added to tea in the Taliouine region and parts of the Sahara, Moroccan saffron gives the tea a golden color and a subtle, earthy flavor. Morocco is one of the world\'s largest saffron producers.', icon: Sparkles },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const teaExperiences = [
  { title: 'Tea Ceremony Workshop', detail: 'Join a hands-on workshop in Marrakech or Fes where a local host teaches you the art of preparing and pouring traditional mint tea. Learn to balance the flavors and master the high pour. Workshops typically last 1 to 2 hours and cost from 150 to 300 MAD.', icon: Coffee },
  { title: 'Desert Tea with Nomads', detail: 'Experience authentic Saharan tea brewed over a charcoal fire by Tuareg or Amazigh nomads in the Merzouga or Zagora desert. Three rounds are served under the stars. Often included in overnight desert camp experiences.', icon: Flame },
  { title: 'Tea and Cooking Class', detail: 'Many riads offer combined Moroccan cooking classes and tea ceremonies. Learn to make tagine, couscous, and mint tea in a single session. Available in most major cities, typically from 300 to 600 MAD per person.', icon: ListChecks },
  { title: 'Tea Tasting at a Spice Market', detail: 'Spice merchants in the souks of Fes and Marrakech offer tea tastings with different blends: classic mint, saffron, orange blossom, verbena, and wild herb varieties. A great way to discover regional differences before buying.', icon: ShoppingBag },
  { title: 'Berber Family Tea Visit', detail: 'Community-based tourism programs in the Atlas Mountains let you visit a Berber family in their home. Share tea made with wild mountain herbs, learn about daily life, and experience authentic Amazigh hospitality. From 100 to 200 MAD per person.', icon: HandHeart },
  { title: 'Historic Cafe Tea Trail', detail: 'Follow a self-guided tea trail visiting legendary cafes like Cafe Hafa in Tangier, Cafe Clock in Fes, and the rooftop terraces of Marrakech. Each cafe has its own story, atmosphere, and tea style.', icon: MapPin },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA HEALTH BENEFITS
   ═══════════════════════════════════════════════════════════════ */

const teaHealthBenefits = [
  { benefit: 'Digestive Aid', detail: 'Moroccan mint tea is traditionally consumed after meals to aid digestion. The combination of spearmint and warm water helps soothe the stomach, reduce bloating, and ease discomfort after heavy meals like tagine or couscous.', icon: Heart },
  { benefit: 'Antioxidant Properties', detail: 'Green tea is rich in catechins and polyphenols, powerful antioxidants that help protect cells from damage. Regular consumption of gunpowder green tea may support cardiovascular health and immune function.', icon: Leaf },
  { benefit: 'Mental Alertness', detail: 'The natural caffeine in green tea provides a gentle energy boost without the jitteriness of coffee. Combined with the calming effect of mint, Moroccan tea offers a balanced alertness that Moroccans rely on throughout the day.', icon: Lightbulb },
  { benefit: 'Stress Relief & Relaxation', detail: 'The tea ceremony itself is meditative. The slow preparation, the social connection, and the warm, aromatic beverage all contribute to reducing stress. Lemon verbena (louiza) tea is especially prized for its calming properties.', icon: Sparkles },
  { benefit: 'Hydration in Hot Climate', detail: 'Despite being a hot drink, Moroccan tea helps with hydration in the desert climate. The warmth induces light perspiration, which cools the body. The sugar provides quick energy, essential in Morocco heat.', icon: ThermometerSun },
  { benefit: 'Respiratory Support', detail: 'Fresh mint has natural decongestant properties. Inhaling the steam from a glass of fresh mint tea can help clear nasal passages, making it a popular remedy during cold and flu season in Morocco.', icon: GlassWater },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TEA VOCABULARY
   ═══════════════════════════════════════════════════════════════ */

const teaVocabulary = [
  { darija: 'Atay', pronunciation: 'ah-TAY', english: 'Tea' },
  { darija: 'Atay b\'nana', pronunciation: 'ah-TAY b-NA-na', english: 'Tea with mint' },
  { darija: 'Nana', pronunciation: 'NA-na', english: 'Spearmint / mint' },
  { darija: 'Berrad', pronunciation: 'BEAR-rad', english: 'Teapot' },
  { darija: 'Kisan', pronunciation: 'KEE-san', english: 'Tea glasses' },
  { darija: 'Siniya', pronunciation: 'see-NEE-ya', english: 'Serving tray' },
  { darija: 'Sukkar', pronunciation: 'SOO-kar', english: 'Sugar' },
  { darija: 'Shiba', pronunciation: 'SHEE-ba', english: 'Wormwood herb' },
  { darija: 'Louiza', pronunciation: 'loo-EE-za', english: 'Lemon verbena' },
  { darija: 'Bneen', pronunciation: 'b-NEEN', english: 'Delicious (to compliment tea)' },
  { darija: 'Afak, atay', pronunciation: 'ah-FAHK, ah-TAY', english: 'Tea, please' },
  { darija: 'Shukran, baraka', pronunciation: 'SHOO-kran, ba-RA-ka', english: 'Thank you, enough (to decline more)' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO BUY TEA SUPPLIES
   ═══════════════════════════════════════════════════════════════ */

const teaSupplyGuide = [
  { item: 'Gunpowder Green Tea', where: 'Spice souks in any Moroccan city', price: 'from 20-80 MAD per 100g', tip: 'Ask for "atay Chinois" (Chinese tea). Higher grades have tighter, more uniform pellets. Taste before buying if offered.' },
  { item: 'Traditional Teapot (Berrad)', where: 'Metalwork souks in Fes, Marrakech, Meknes', price: 'from 80-500 MAD', tip: 'Silver-plated pots are decorative; stainless steel versions are more practical for daily use. Haggle starting at 40% of the asking price.' },
  { item: 'Ornate Tea Glasses', where: 'Glassware shops throughout medinas', price: 'from 5-30 MAD per glass', tip: 'Sold individually or in sets of 6 or 12. Hand-painted glasses with gold trim are popular souvenirs. Wrap carefully for transport.' },
  { item: 'Silver Serving Tray', where: 'Artisan workshops in Fes and Marrakech', price: 'from 100-800 MAD', tip: 'Engraved brass trays are more affordable than silver. Look for the maker mark for authentic handmade pieces.' },
  { item: 'Sugar Cones (Pain de Sucre)', where: 'Grocery stores and souks nationwide', price: 'from 8-15 MAD each', tip: 'The traditional cone-shaped white sugar. Break into chunks with a special hammer. A unique, affordable souvenir.' },
  { item: 'Dried Herbs (Shiba, Louiza)', where: 'Herboriste (herbalist) shops in medinas', price: 'from 10-40 MAD per bunch', tip: 'Dried herbs travel well. Ask the herbalist for recommendations on blends. Louiza makes excellent caffeine-free evening tea.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/cuisine',
    title: 'Moroccan Cuisine Guide',
    description: 'Explore the rich flavors of Moroccan cooking from tagines and couscous to pastilla, harira, and street food favorites.',
    icon: Coffee,
  },
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into Moroccan traditions, festivals, arts, music, and the rich cultural heritage of the kingdom.',
    icon: Globe,
  },
  {
    href: '/morocco-food-guide',
    title: 'Morocco Food Guide',
    description: 'Complete guide to Moroccan dishes, regional specialties, street food, and the best restaurants across the country.',
    icon: Star,
  },
  {
    href: '/etiquette',
    title: 'Morocco Etiquette Guide',
    description: 'Essential tips on Moroccan customs, greetings, dress code, tipping, haggling, and respectful travel behavior.',
    icon: Heart,
  },
  {
    href: '/recipes',
    title: 'Moroccan Recipes',
    description: 'Authentic Moroccan recipes you can recreate at home, from classic tagines to traditional pastries and mint tea.',
    icon: BookOpen,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTeaCulturePage() {
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
            <span className="text-white">Moroccan Tea Culture</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Coffee className="w-4 h-4" />
            Tea Culture &amp; Traditions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Mint Tea
            <br className="hidden md:block" /> Culture Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            History, ceremony etiquette, step-by-step recipe, regional variations, best tea houses,
            and everything you need to know about Morocco&apos;s beloved national drink.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              More Than a Drink &mdash; A Way of Life
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In Morocco, mint tea is far more than a simple beverage. Known as &ldquo;atay
                b&apos;nana&rdquo; (tea with mint), it is the cornerstone of Moroccan hospitality,
                a symbol of friendship, and a daily ritual that brings families, friends, and even
                strangers together. From the bustling souks of Marrakech to the quiet villages of
                the Atlas Mountains, the sound of tea being poured and the fragrance of fresh mint
                are constants of Moroccan life.
              </p>
              <p>
                Affectionately nicknamed &ldquo;Berber whiskey&rdquo; for its central role in a
                culture that largely abstains from alcohol, Moroccan mint tea is prepared with Chinese
                gunpowder green tea, generous handfuls of fresh spearmint, and white sugar. The
                ritualized preparation and the iconic high pour transform a simple drink into an art
                form that has been perfected over centuries.
              </p>
              <p>
                Whether you are being welcomed into a Moroccan home, negotiating in a carpet shop,
                or resting at a cliffside cafe overlooking the Strait of Gibraltar, understanding
                Moroccan tea culture will deepen your connection to this warm and generous country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Tea Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Tea at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential facts about Morocco&apos;s national drink that every visitor should know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'National Drink', value: 'Mint Tea', detail: 'Consumed by every social class, all day long', icon: Coffee },
              { label: 'Key Ingredients', value: '3 Essentials', detail: 'Gunpowder green tea, fresh spearmint, sugar', icon: Leaf },
              { label: 'Serving Tradition', value: '3 Glasses', detail: '"Gentle as life, strong as love, bitter as death"', icon: GlassWater },
              { label: 'Daily Consumption', value: 'All Day', detail: 'From breakfast through late evening gatherings', icon: Clock },
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

      {/* ── History of Moroccan Tea ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            History of Tea in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How a Chinese import became the heart and soul of Moroccan hospitality.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {teaHistory.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.era} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {item.era}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tea Ceremony Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea Ceremony Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The unwritten rules of the Moroccan tea ritual that every visitor should follow.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              <CheckCircle className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
              Essential Tea Etiquette Rules
            </h3>
            <div className="space-y-3">
              {ceremonyEtiquette.map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Make Moroccan Mint Tea ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ListChecks className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Make Moroccan Mint Tea
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these eight steps to prepare authentic Moroccan mint tea like a local.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {teaRecipeSteps.map((s) => (
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
                  Pro Tip: The Perfect Pour
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The high pour is the signature of Moroccan tea service. Start with the spout close
                  to the glass and gradually raise the teapot as you pour. The stream should be thin
                  and steady. If you spill, pour it back and try again &mdash; even experienced
                  Moroccans sometimes miss. The frothy top (called &ldquo;the crown&rdquo;) is a
                  sign of well-prepared tea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regional Variations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Tea Variations Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the sweet desert brews to the herbal Atlas Mountain blends, tea varies across the kingdom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionalVariations.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.region} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.region}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--color-gold)]">{item.style}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tea Ingredients & Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea Ingredients &amp; Types
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The essential ingredients and herbs used in Moroccan tea, from the classic to the regional.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {teaIngredients.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.name} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] italic">
                          {item.arabic}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Tea Houses by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Store className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Tea Houses &amp; Cafes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Iconic tea houses and cafes across Morocco where you can experience the finest tea culture.
          </p>

          <div className="space-y-4">
            {bestTeaHouses.map((house) => (
              <div key={`${house.city}-${house.name}`} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {house.name}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        {house.city}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mb-2">{house.location}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{house.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tea & Social Customs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea &amp; Social Customs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How mint tea weaves through every aspect of Moroccan daily life and social interaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Welcoming Guests', detail: 'The first thing a Moroccan host does when you arrive is prepare tea. It is offered before any conversation about business or purpose. Refusing is considered a rejection of the host hospitality and should be avoided.', icon: HandHeart },
              { title: 'Business & Negotiations', detail: 'In carpet shops, real estate dealings, and business meetings, tea is served as a social lubricant. Multiple rounds may be poured during lengthy negotiations. Accepting tea is part of the relationship-building process.', icon: MessageCircle },
              { title: 'Family Gatherings', detail: 'Evenings in Moroccan homes revolve around tea. After dinner, the family gathers in the salon for tea and conversation. It is the glue that holds family time together, often accompanied by pastries and sweets.', icon: Heart },
              { title: 'Religious & Festive Occasions', detail: 'Tea is central to celebrations including Ramadan iftars, Eid al-Fitr, weddings, and religious holidays. Special blends with saffron, orange blossom, or rose water may be prepared for these occasions.', icon: Star },
              { title: 'Street & Cafe Culture', detail: 'Moroccan cafes are social hubs where men (and increasingly women) gather to drink tea, play cards, and watch football. A glass of mint tea at a cafe costs from 5 to 15 MAD and can accompany hours of socializing.', icon: Store },
              { title: 'Gender & Tea Service', detail: 'Traditionally, the male head of the household prepares and pours tea in the presence of guests. However, women often prepare the tea in the kitchen. In modern urban households, anyone may serve, and women commonly pour tea for guests.', icon: Users },
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

      {/* ── Tea Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tea Experiences for Visitors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Immersive tea experiences that let you dive deeper into Morocco&apos;s tea culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teaExperiences.map((item) => {
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

      {/* ── Where to Buy Tea Supplies ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Moroccan Tea Supplies
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Take the taste of Morocco home with you. Here is what to buy and where to find it.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {teaSupplyGuide.map((item) => (
                <div key={item.item} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.item}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">{item.where}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tea Health Benefits ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health Benefits of Moroccan Tea
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond taste and tradition, Moroccan mint tea offers genuine health benefits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teaHealthBenefits.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.benefit} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.benefit}
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
                  A Note on Sugar Content
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Traditional Moroccan mint tea is very sweet, often containing 4 to 6 sugar cubes per
                  pot. While the antioxidants and mint provide health benefits, be mindful of the sugar
                  intake, especially if you are drinking several glasses per day. In modern Morocco, it
                  is perfectly acceptable to request &ldquo;atay bla sukkar&rdquo; (tea without sugar)
                  or &ldquo;shwiya sukkar&rdquo; (a little sugar).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tea Vocabulary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Tea Vocabulary in Darija
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Useful Moroccan Arabic words and phrases related to tea that will impress your hosts.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {teaVocabulary.map((phrase) => (
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

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about Moroccan mint tea and tea culture.
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
            Continue exploring Moroccan culture, cuisine, and traditions with these essential guides.
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
          <Coffee className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Experience the Magic of Moroccan Tea
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            From the first sip of freshly poured mint tea to the warmth of a shared ceremony
            with strangers who become friends, Moroccan tea culture is an experience that stays
            with you long after you leave. Accept every glass offered, savor the moment, and
            let the ritual connect you to centuries of tradition.
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
              href="/culture"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Moroccan Culture Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Tea customs and prices may vary by region and season. Prices listed are approximate as of March 2026
            and may change. Seasonal pricing can vary.
          </p>
        </div>
      </section>
    </>
  );
}

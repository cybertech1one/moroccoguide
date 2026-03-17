import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Sun,
  Snowflake,
  Leaf,
  Mountain,
  Building,
  Waves,
  Wind,
  MapPin,
  Star,
  Info,
  ArrowRight,
  ShieldCheck,
  Thermometer,
  CheckCircle,
  AlertTriangle,
  Users,
  ShoppingBag,
  Eye,
  Shirt,
  Footprints,
  Camera,
  Utensils,
  Music,
  Compass,
  BookOpen,
  Heart,
  CircleDot,
  Luggage,
  DollarSign,
  Clock,
  Lightbulb,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'What to Wear in Morocco 2026 | Complete Dress Code Guide by Season & City',
  description:
    'Complete guide to what to wear in Morocco for men and women. Dress codes by season (summer, winter, spring), city type (medinas, beach towns, desert, mountains), and activity. Packing lists, cultural modesty tips, and where to buy clothes locally.',
  keywords: [
    'what to wear in Morocco',
    'Morocco dress code',
    'what to pack for Morocco',
    'Morocco clothing guide',
    'Morocco modesty dress code',
    'what women wear in Morocco',
    'what men wear in Morocco',
    'Morocco summer outfit',
    'Morocco winter clothes',
    'Morocco packing list',
    'Morocco beach dress code',
    'Morocco desert clothing',
    'Morocco mosque dress code',
    'Morocco medina outfit',
    'Morocco fashion guide',
    'Morocco cultural dress',
    'what not to wear Morocco',
    'Morocco capsule wardrobe',
    'buy clothes in Morocco',
    'Morocco shopping fashion',
    'Morocco travel outfit 2026',
    'Morocco hammam clothing',
  ],
  openGraph: {
    title: 'What to Wear in Morocco 2026 | Complete Dress Code Guide by Season & City',
    description:
      'Everything you need to know about dressing for Morocco. Season-by-season guides, city-specific advice, cultural modesty tips, and capsule wardrobe packing lists for men and women.',
    url: `${BASE_URL}/what-to-wear-in-morocco`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fashion.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan fashion and textiles displayed in a traditional souk market',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Wear in Morocco 2026 | Dress Code Guide',
    description:
      'Complete guide to dressing for Morocco. Season-by-season, city-by-city advice for men and women. Cultural modesty tips, packing lists, and local shopping guide.',
    images: [`${BASE_URL}/images/hero-fashion.webp`],
  },
  alternates: { canonical: `${BASE_URL}/what-to-wear-in-morocco` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/what-to-wear-in-morocco`,
  name: 'What to Wear in Morocco 2026 | Complete Dress Code Guide by Season & City',
  description:
    'Complete guide to what to wear in Morocco for men and women. Dress codes by season, city type, and activity. Packing lists, cultural modesty tips, and where to buy clothes locally.',
  url: `${BASE_URL}/what-to-wear-in-morocco`,
  image: `${BASE_URL}/images/hero-fashion.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/what-to-wear-in-morocco`,
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
      { '@type': 'ListItem', position: 2, name: 'What to Wear in Morocco', item: `${BASE_URL}/what-to-wear-in-morocco` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I have to cover my head in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Morocco does not require head coverings for visitors or non-Muslim women. While some Moroccan women wear hijab, it is a personal choice. You should, however, carry a lightweight scarf for mosque visits and conservative rural areas where covering your hair is respectful.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I wear shorts in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the location. In beach towns like Essaouira and Agadir, shorts are perfectly acceptable. In Marrakech and Fes medinas, knee-length shorts are tolerated for men but not ideal. Women should avoid short shorts in traditional areas. In rural and conservative areas, both men and women should wear longer clothing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear to visit a mosque in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most mosques in Morocco are closed to non-Muslims except Hassan II Mosque in Casablanca. For mosque visits: women should cover their hair, arms, and legs; men should wear long trousers and sleeved shirts. Remove shoes before entering. Bring a scarf in your bag if visiting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco very conservative about clothing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is moderate compared to many Muslim-majority countries. Modern cities like Casablanca and Rabat are cosmopolitan, and you will see Moroccans in everything from traditional djellabas to Western fashion. However, traditional medinas, rural areas, and the south are more conservative. The general rule is to dress modestly but comfortably.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy clothes in Morocco instead of packing everything?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Morocco is one of the best countries for shopping for clothes. You can buy beautiful kaftans, djellabas, linen shirts, leather babouche slippers, and more in any souk. Prices start from 50 MAD for basic items. Buying locally is part of the experience and helps you dress appropriately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What shoes should I bring to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comfortable walking shoes are essential. Medina streets are uneven cobblestone, so flat closed-toe shoes or sturdy sandals work best. Bring hiking boots if visiting the Atlas Mountains, flip-flops for hammams and beaches, and one pair of dressier shoes for restaurants. Avoid high heels on medina streets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do Moroccan women actually wear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan women wear everything from traditional djellabas and kaftans to jeans, dresses, and modern Western fashion. In cities like Casablanca, you will see the full spectrum. In rural areas, traditional dress is more common. Young Moroccan women often blend Moroccan and Western styles. There is no single dress code for Moroccan women.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL DRESSING GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Summer (June - August)',
    icon: Sun,
    tempRange: '30-45 C in most areas',
    description:
      'Moroccan summers are intensely hot, especially inland. The coast is milder but still warm. Lightweight, breathable fabrics are essential. Loose-fitting clothing keeps you cooler than tight clothes.',
    women: [
      'Loose linen or cotton trousers and wide-leg pants',
      'Midi and maxi skirts in breathable fabrics',
      'Loose-fitting tunics and long blouses that cover shoulders',
      'Light cotton or linen maxi dresses',
      'Lightweight cardigan or kimono for air-conditioned interiors',
      'Wide-brimmed sun hat for UV protection',
      'Scarf for mosque visits and sun protection',
    ],
    men: [
      'Lightweight linen or cotton trousers (avoid jeans in the heat)',
      'Short-sleeve collared shirts or breathable linen shirts',
      'Knee-length shorts for beach towns and modern city areas',
      'Lightweight cotton t-shirts in neutral tones',
      'Sun hat or cap for desert and outdoor sightseeing',
      'Breathable sneakers or quality leather sandals',
    ],
    tip: 'Choose light colors (white, beige, light blue) to reflect sunlight. Dark colors absorb heat and will make you significantly hotter. Natural fabrics like linen and cotton breathe far better than synthetics.',
  },
  {
    season: 'Winter (December - February)',
    icon: Snowflake,
    tempRange: '8-18 C, colder in mountains',
    description:
      'Many visitors are surprised by how cold Morocco gets in winter. The Atlas Mountains receive snow, Fes and inland cities drop to near freezing at night, and even Marrakech can be chilly after sunset. Riads and traditional buildings often lack central heating.',
    women: [
      'Warm layers: thermal base layer, sweater, and jacket',
      'Warm trousers or jeans (denim is practical in winter)',
      'Medium-weight coat or warm down jacket',
      'Warm scarf, gloves, and beanie for mountain and evening wear',
      'Closed-toe boots or warm ankle boots',
      'Rain jacket or waterproof layer for the north and coast',
      'Warm socks (riad floors can be cold marble or tile)',
    ],
    men: [
      'Layered outfits: t-shirt, flannel or sweater, and jacket',
      'Warm jeans or chinos',
      'Warm jacket or coat (down jacket for the mountains)',
      'Warm scarf and beanie for cold evenings',
      'Closed-toe boots or sturdy warm shoes',
      'Rain jacket for the northern cities (Tangier, Chefchaouen, Fes)',
      'Warm socks and potentially thermals for mountain areas',
    ],
    tip: 'Do not underestimate the cold. Many riads and guesthouses use only space heaters. Bring thermal base layers if visiting the mountains or staying in traditional accommodation. A hot water bottle can be your best friend on cold riad nights.',
  },
  {
    season: 'Spring & Fall (March - May, September - November)',
    icon: Leaf,
    tempRange: '18-28 C, ideal for most',
    description:
      'The best seasons to visit Morocco. Temperatures are pleasant, with warm days and cool evenings. Spring brings wildflowers in the mountains and countryside. Autumn has warm days with cooling temperatures toward November. Layering is the key strategy.',
    women: [
      'Light layers: cotton tops with a light cardigan or jacket',
      'Midi skirts and linen trousers',
      'Light maxi dresses (add a layer for cool evenings)',
      'A light denim or cotton jacket for evenings',
      'Comfortable walking shoes for medina exploration',
      'A versatile scarf that doubles as shawl and head cover',
      'One warm sweater for chilly evenings or mountain excursions',
    ],
    men: [
      'Cotton chinos or lightweight trousers',
      'Short and long-sleeve shirts (bring both)',
      'Light jacket or hoodie for evenings',
      'Comfortable walking shoes or smart trainers',
      'One warmer layer for mountain day trips',
      'Sunglasses and cap for sunny days',
      'Light rain layer for the north (especially March and November)',
    ],
    tip: 'The layering approach works perfectly in these seasons. Mornings and evenings can be 15 degrees cooler than midday. A packable jacket you can tie around your waist is invaluable. These are the most versatile months for packing light.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRESSING BY LOCATION TYPE
   ═══════════════════════════════════════════════════════════════ */

const locationGuide = [
  {
    location: 'Modern Cities (Casablanca, Rabat)',
    icon: Building,
    modestyLevel: 'Relaxed',
    description:
      'Casablanca and Rabat are cosmopolitan, Westernized cities. Moroccans here dress in international fashion: jeans, dresses, blazers, and everything in between. You can wear nearly anything you would wear in a European city. The Corniche beach area in Casablanca is particularly relaxed.',
    women: [
      'Jeans, dresses, skirts of any length are acceptable',
      'Sleeveless tops are common in summer',
      'Modern fashion is the norm in malls and business districts',
      'Beach areas: swimwear on the beach, cover up when leaving',
    ],
    men: [
      'Jeans, chinos, t-shirts, polo shirts all fine',
      'Shorts acceptable in casual settings and beaches',
      'Smart casual for upscale restaurants and bars',
      'Essentially the same as any Mediterranean city',
    ],
  },
  {
    location: 'Traditional Medinas (Fes, Marrakech old town)',
    icon: MapPin,
    modestyLevel: 'Moderate',
    description:
      'The historic medinas are more conservative than modern city districts. While tourists are generally given a pass, dressing more modestly shows respect for the local culture and will also result in less unwanted attention. The narrow streets mean you are in close proximity to residents going about daily life.',
    women: [
      'Cover shoulders and knees as a minimum',
      'Loose-fitting trousers or skirts below the knee',
      'Tunics, loose blouses, or t-shirts that cover the upper arms',
      'Avoid low-cut tops, short skirts, and tight clothing',
    ],
    men: [
      'Long trousers preferred over shorts',
      'T-shirts or collared shirts with sleeves',
      'Avoid going shirtless even in hot weather',
      'Neat, clean clothing shows respect',
    ],
  },
  {
    location: 'Beach Towns (Essaouira, Agadir, Taghazout)',
    icon: Waves,
    modestyLevel: 'Relaxed',
    description:
      'Beach towns are the most relaxed places in Morocco for dress code. Essaouira has a bohemian surfer vibe, Agadir feels like a Mediterranean resort, and Taghazout is a laid-back surf village. On the beach itself, swimwear is standard. When walking through town, a cover-up is respectful.',
    women: [
      'Bikinis and swimwear are fine on tourist beaches',
      'Cover up with a sarong or dress when leaving the beach',
      'Shorts, sundresses, and casual clothing in town',
      'Essaouira gets windy: bring a light jacket or windbreaker',
    ],
    men: [
      'Swim shorts on the beach, shorts in town are normal',
      'T-shirts and casual wear throughout',
      'Flip-flops or sandals are standard footwear',
      'Board shorts double as casual wear in surf towns',
    ],
  },
  {
    location: 'Sahara Desert (Merzouga, Zagora)',
    icon: Wind,
    modestyLevel: 'Practical first, modesty second',
    description:
      'The desert demands practical clothing above all else. Days are scorchingly hot in summer and surprisingly cold at night year-round. Sand gets everywhere. Your guides and camp hosts are generally relaxed about clothing, but the desert sun is merciless and covering up is purely practical.',
    women: [
      'Loose, full-length trousers or harem pants',
      'Long-sleeve breathable shirts to protect from sun and sand',
      'A desert scarf (cheche) for wind and sand protection',
      'Warm layers for cold desert nights (temperatures drop sharply)',
    ],
    men: [
      'Loose full-length trousers (avoid shorts due to sun and sand)',
      'Long-sleeve shirt or breathable base layer',
      'Cheche (Saharan scarf/turban) for sand and sun protection',
      'Warm fleece or jacket for camp nights',
    ],
  },
  {
    location: 'Atlas Mountains (Imlil, Toubkal, Dades)',
    icon: Mountain,
    modestyLevel: 'Moderate to conservative',
    description:
      'Mountain villages are among the most conservative areas in Morocco. Berber communities maintain traditional values. Additionally, mountain weather demands proper hiking and layering gear. Even in summer, high-altitude areas can be cool, and winter brings genuine cold and snow.',
    women: [
      'Long trousers for hiking and village visits (no shorts)',
      'Layered tops: t-shirt plus fleece plus windbreaker',
      'Proper hiking boots with ankle support',
      'Head scarf for visiting rural villages (sign of respect)',
    ],
    men: [
      'Long hiking trousers or convertible pants',
      'Moisture-wicking layers for trekking',
      'Warm fleece and waterproof jacket',
      'Proper hiking boots (the terrain is rough)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRESSING BY ACTIVITY
   ═══════════════════════════════════════════════════════════════ */

const activityGuide = [
  {
    activity: 'Sightseeing & Medina Exploration',
    icon: Camera,
    advice:
      'Comfortable walking shoes are non-negotiable. Medina streets are uneven cobblestone, often wet, and full of obstacles. Wear closed-toe shoes with good grip. Dress modestly in loose, breathable layers. Carry a small crossbody bag (not a backpack) to keep valuables close and move through narrow alleys easily.',
    essentials: ['Closed-toe walking shoes', 'Loose comfortable clothes', 'Crossbody bag', 'Scarf for sun and mosques'],
  },
  {
    activity: 'Mosque Visits',
    icon: Building,
    advice:
      'Most mosques are closed to non-Muslims. The exception is Hassan II Mosque in Casablanca, which offers guided tours. Women must cover their hair, arms, and legs completely. Men must wear long trousers and a sleeved shirt. Shoes are removed at the entrance. Bring a lightweight scarf and wear appropriate clothing if you plan to visit.',
    essentials: ['Headscarf for women', 'Long sleeves and trousers', 'Socks (floors can be cold)', 'Easy-to-remove shoes'],
  },
  {
    activity: 'Hammam & Spa',
    icon: Heart,
    advice:
      'In a public hammam, women wear underwear bottoms (many go topless, which is perfectly normal in the single-gender setting). Men wear swim shorts or underwear. In luxury spas, robes and disposable underwear are provided. Bring flip-flops for wet floors. No special clothing needed, but bring a change of comfortable clothes for afterward.',
    essentials: ['Flip-flops', 'Underwear or swimwear', 'Change of clothes', 'Hair tie for long hair'],
  },
  {
    activity: 'Desert Camping & Camel Trekking',
    icon: Compass,
    advice:
      'Full coverage is practical, not just cultural. The Saharan sun can burn exposed skin in minutes, and sand stings in the wind. Wear loose long-sleeve shirts, full-length trousers, and closed-toe shoes you do not mind getting sandy. Your camp will provide a cheche (desert turban) which protects your face and neck.',
    essentials: ['Long sleeves and trousers', 'Cheche or scarf', 'Closed shoes', 'Warm layer for night'],
  },
  {
    activity: 'Beach & Swimming',
    icon: Waves,
    advice:
      'Tourist beaches in Agadir, Essaouira, and Taghazout are relaxed about swimwear. Bikinis and swim trunks are standard. On more local beaches away from tourist areas, more conservative swimwear is respectful. Always cover up with a sarong, dress, or t-shirt and shorts when leaving the sand.',
    essentials: ['Swimwear', 'Cover-up or sarong', 'Waterproof sandals', 'Sun hat and sunscreen'],
  },
  {
    activity: 'Hiking & Trekking',
    icon: Footprints,
    advice:
      'Proper hiking gear is important for the Atlas Mountains and gorge trails. Ankle-supporting hiking boots, moisture-wicking base layers, and a waterproof outer shell are essential. Mountain villages are conservative, so avoid short shorts. Convertible trousers (zip-off legs) are ideal for adjusting to temperature changes.',
    essentials: ['Hiking boots', 'Moisture-wicking layers', 'Rain jacket', 'Convertible trousers'],
  },
  {
    activity: 'Restaurants & Dining Out',
    icon: Utensils,
    advice:
      'Casual dining in Morocco has no strict dress code. Smart casual is appreciated at upscale restaurants in Marrakech, Casablanca, and Rabat. Men can wear a collared shirt and chinos. Women can wear dresses or nice separates. For rooftop restaurants and riads, clean and neat is sufficient. No formal attire is ever required.',
    essentials: ['Smart casual outfit', 'Clean shoes (not hiking boots)', 'Light layer for rooftop evenings', 'One nicer outfit for upscale dining'],
  },
  {
    activity: 'Nightlife & Bars',
    icon: Music,
    advice:
      'Nightlife exists primarily in Casablanca, Marrakech, and Agadir. Club dress codes are similar to European standards: smart casual to dressy. Men may need closed-toe shoes (no sandals) for clubs. Women can wear dresses and heels. Marrakech nightlife venues like Theatro and Pacha have a fashionable crowd.',
    essentials: ['Smart outfit or cocktail wear', 'Closed-toe shoes for men', 'Jacket for cool nights', 'Cab fare (do not walk alone late at night)'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT NOT TO WEAR
   ═══════════════════════════════════════════════════════════════ */

const whatNotToWear = [
  {
    item: 'Very short skirts or hot pants in medinas',
    reason: 'Traditional medina neighborhoods are conservative. Short clothing draws unwanted attention and is disrespectful to local culture. Save short skirts for beach towns or nightlife.',
    icon: AlertTriangle,
  },
  {
    item: 'Low-cut or revealing tops in traditional areas',
    reason: 'Cleavage-baring tops are inappropriate in medinas, rural areas, and mosques. A modest neckline paired with loose-fitting fabric is comfortable and respectful.',
    icon: AlertTriangle,
  },
  {
    item: 'Going shirtless (men) outside the beach',
    reason: 'While common on tourist beaches, going shirtless in medinas, souks, or towns is considered disrespectful. Always put a shirt on when leaving the beach area.',
    icon: AlertTriangle,
  },
  {
    item: 'High heels on medina streets',
    reason: 'Medina streets are uneven cobblestone with open drains, steps, and donkey traffic. High heels are impractical and potentially dangerous. Save them for upscale restaurants with smooth floors.',
    icon: AlertTriangle,
  },
  {
    item: 'Brand new white clothing in the medina',
    reason: 'The medina is dusty, narrow, and busy. Donkeys, motorbikes, and food stalls line the paths. White clothing will get dirty within an hour. Save it for the hotel or beach.',
    icon: AlertTriangle,
  },
  {
    item: 'Culturally insensitive graphic t-shirts',
    reason: 'T-shirts with offensive imagery, profanity, or religious mockery are disrespectful. Morocco is a Muslim country, and provocative clothing can cause genuine offense.',
    icon: AlertTriangle,
  },
  {
    item: 'Only packing sandals and flip-flops',
    reason: 'Medina streets demand closed-toe shoes. Desert sand gets into open shoes. Mountain trails require boots. Flip-flops are for the beach and hammam only. Always bring proper walking shoes.',
    icon: AlertTriangle,
  },
  {
    item: 'Excessive jewelry in the medina',
    reason: 'Flashy expensive jewelry can make you a target for pickpockets in crowded souks. Keep accessories simple and leave valuables at the hotel.',
    icon: AlertTriangle,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CAPSULE WARDROBE PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const capsuleWardrobeWomen = [
  { item: 'Lightweight trousers or linen pants', qty: 2, note: 'Neutral colors (beige, olive, navy)' },
  { item: 'Midi or maxi skirt', qty: 1, note: 'Versatile print or solid that works day to night' },
  { item: 'Maxi dress', qty: 1, note: 'Loose-fitting, breathable, doubles as evening wear' },
  { item: 'Loose-fitting t-shirts or blouses', qty: 4, note: 'Mix of short and long sleeve' },
  { item: 'Light cardigan or kimono', qty: 1, note: 'For covering shoulders and cool evenings' },
  { item: 'Light jacket (denim or cotton)', qty: 1, note: 'Packable, for layering' },
  { item: 'Warm sweater or fleece', qty: 1, note: 'Essential for mountains and winter visits' },
  { item: 'Swimwear', qty: 1, note: 'One-piece or bikini depending on comfort level' },
  { item: 'Versatile scarf', qty: 2, note: 'One lightweight, one warmer. Endless uses in Morocco' },
  { item: 'Comfortable walking shoes', qty: 1, note: 'Closed-toe, good grip, broken in before trip' },
  { item: 'Sandals', qty: 1, note: 'Sturdy flat sandals for casual days' },
  { item: 'Flip-flops', qty: 1, note: 'For hammam, beach, and hotel' },
  { item: 'Underwear', qty: 7, note: 'Quick-dry fabric ideal for hand washing' },
  { item: 'Sleepwear', qty: 1, note: 'Riads can be chilly at night' },
  { item: 'Sun hat', qty: 1, note: 'Wide-brimmed for UV protection' },
  { item: 'Sunglasses', qty: 1, note: 'UV-protective, the Moroccan sun is strong' },
];

const capsuleWardrobeMen = [
  { item: 'Lightweight trousers or chinos', qty: 2, note: 'Neutral colors (khaki, navy, olive)' },
  { item: 'Shorts (knee-length)', qty: 1, note: 'For beach towns and casual settings only' },
  { item: 'T-shirts', qty: 4, note: 'Breathable cotton or merino, neutral tones' },
  { item: 'Collared shirt or linen button-up', qty: 2, note: 'For restaurants and smart casual occasions' },
  { item: 'Light jacket or hoodie', qty: 1, note: 'For cool evenings and mountain excursions' },
  { item: 'Warm layer (fleece or sweater)', qty: 1, note: 'Essential for mountains and winter' },
  { item: 'Swimwear', qty: 1, note: 'Board shorts or swim trunks' },
  { item: 'Comfortable walking shoes', qty: 1, note: 'Sturdy, good grip for medina streets' },
  { item: 'Sandals or casual shoes', qty: 1, note: 'Leather sandals or smart trainers' },
  { item: 'Flip-flops', qty: 1, note: 'For hammam and beach' },
  { item: 'Underwear', qty: 7, note: 'Quick-dry fabric for easy hand washing' },
  { item: 'Socks', qty: 4, note: 'Including one warm pair for mountains' },
  { item: 'Cap or sun hat', qty: 1, note: 'Protection from intense sun' },
  { item: 'Sunglasses', qty: 1, note: 'Essential year-round' },
  { item: 'Scarf or bandana', qty: 1, note: 'Useful for desert, dust, and sun protection' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING FOR CLOTHES IN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const shoppingGuide = [
  {
    item: 'Kaftan or Djellaba',
    icon: Shirt,
    description:
      'The quintessential Moroccan garment. Kaftans are elegant, often embroidered robes worn by women for special occasions. Djellabas are hooded robes worn by both men and women daily. Buying one is both practical (they keep you cool and modest) and a wonderful souvenir.',
    whereToBy: 'Any medina souk, especially Fes and Marrakech',
    priceRange: 'From 150 MAD for basic, from 500 MAD for embroidered',
  },
  {
    item: 'Babouche Slippers',
    icon: Footprints,
    description:
      'Traditional leather slippers found everywhere in Morocco. Soft, flat, and incredibly comfortable. They come in every color imaginable. Men and women both wear them. Perfect for wearing inside riads and as a lightweight travel shoe.',
    whereToBy: 'Leather souks in Fes, Marrakech, and Essaouira',
    priceRange: 'From 50 MAD for basic leather, from 200 MAD for embroidered',
  },
  {
    item: 'Cheche (Desert Scarf)',
    icon: Wind,
    description:
      'A long cotton or linen scarf traditionally worn as a turban by Saharan nomads. Incredibly versatile: use it as sun protection, a head wrap, a shawl, a pillow, or a dust mask. Available in every color, most famously in Tuareg blue.',
    whereToBy: 'Desert towns, any souk, and desert camps',
    priceRange: 'From 30 MAD for cotton, from 80 MAD for quality linen',
  },
  {
    item: 'Linen Shirts & Tunics',
    icon: Shirt,
    description:
      'Morocco produces excellent linen clothing. Loose-fitting tunics and shirts in natural fabrics are perfect for the Moroccan climate. Many shops in tourist areas sell Western-style linen clothing specifically designed for travelers.',
    whereToBy: 'Tourist shops in medinas and modern boutiques in the Ville Nouvelle',
    priceRange: 'From 100 MAD for cotton, from 250 MAD for quality linen',
  },
  {
    item: 'Harem Pants',
    icon: Shirt,
    description:
      'Loose, flowing trousers that are both comfortable and modest. Popular with travelers for their breathability and packability. They come in colorful prints and solid colors. Perfect for medina exploring and desert trips.',
    whereToBy: 'Souk stalls throughout Morocco, especially tourist medinas',
    priceRange: 'From 60 MAD for basic cotton, from 150 MAD for quality fabric',
  },
  {
    item: 'Leather Belt & Accessories',
    icon: ShoppingBag,
    description:
      'Morocco is famous for its leather work, especially from Fes. Handcrafted leather belts, bags, wallets, and sandals are excellent quality and far cheaper than European equivalents. The tanneries in Fes produce some of the finest leather in North Africa.',
    whereToBy: 'Leather souks in Fes (near the tanneries), Marrakech, Essaouira',
    priceRange: 'From 50 MAD for belts, from 200 MAD for bags',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MODESTY QUICK REFERENCE
   ═══════════════════════════════════════════════════════════════ */

const modestyScale = [
  { location: 'Tourist beaches (Agadir, Essaouira)', level: 'Very relaxed', color: 'bg-green-100 text-green-800' },
  { location: 'Modern cities (Casablanca, Rabat)', level: 'Relaxed', color: 'bg-green-50 text-green-700' },
  { location: 'Marrakech new town (Gueliz)', level: 'Moderate', color: 'bg-yellow-50 text-yellow-700' },
  { location: 'Medinas (Fes, Marrakech old town)', level: 'Moderate-Conservative', color: 'bg-orange-50 text-orange-700' },
  { location: 'Mountain villages (Atlas, Rif)', level: 'Conservative', color: 'bg-red-50 text-red-700' },
  { location: 'Rural south (Ouarzazate, Zagora)', level: 'Conservative', color: 'bg-red-50 text-red-700' },
  { location: 'Mosques (Hassan II)', level: 'Strict modest dress required', color: 'bg-red-100 text-red-800' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function WhatToWearInMoroccoPage() {
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
            backgroundImage: 'url(/images/hero-fashion.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">What to Wear in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Shirt className="w-4 h-4" />
            Travel Style &amp; Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            What to Wear in Morocco:
            <br className="hidden md:block" /> The Complete Dress Code Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Season-by-season, city-by-city advice on how to dress comfortably and respectfully
            in Morocco. For men and women, with packing lists and cultural context.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Dressing for Morocco: Comfort, Respect, and Common Sense
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                One of the most common questions travelers ask before visiting Morocco is: what should
                I wear? The answer depends on where you are going, what season it is, and what you will
                be doing. Morocco is a diverse country that ranges from cosmopolitan Casablanca, where
                locals wear international fashion, to conservative mountain villages where traditional
                dress is the norm.
              </p>
              <p>
                The general principle is simple: dress modestly but comfortably. Morocco is a
                Muslim-majority country, and while it is significantly more relaxed than many others
                in the region, showing respect through your clothing choices will enhance your experience.
                You will receive warmer welcomes, less unwanted attention, and feel more comfortable
                blending in.
              </p>
              <p>
                This guide covers everything: what to wear in each season, how to dress for different
                city types (modern cities vs. traditional medinas vs. beaches vs. desert vs. mountains),
                what to wear for specific activities, what NOT to wear, and complete capsule wardrobe
                packing lists. We also cover where to buy clothes in Morocco if you want to shop locally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modesty Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Modesty Scale by Location
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s dress code varies significantly by location. Use this quick reference to gauge what is expected where you are going.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-2 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Location</div>
                <div className="p-3 px-4">Dress Code Level</div>
              </div>
              {modestyScale.map((item, i) => (
                <div
                  key={item.location}
                  className={`grid grid-cols-2 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.location}</div>
                  <div className="p-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${item.color}`}>
                      {item.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cultural Context ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Context: Modesty in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding why modesty matters helps you make informed choices.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Users className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Morocco&apos;s Dress Culture Is Diverse
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco is not a monolith. In Casablanca, young Moroccan women wear jeans, crop tops, and modern
                fashion. In Fes medina, traditional djellabas are the norm. On the beach in Agadir, you will see
                bikinis. In the Atlas Mountains, Berber women wear colorful layered dresses. Morocco encompasses
                all of this at once. Your clothing choices should simply match the setting you are in.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Heart className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Modesty Is About Respect, Not Rules
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                There is no clothing police in Morocco. You will not be arrested for wearing shorts. But dressing
                modestly in traditional areas is a form of respect, similar to how you might dress up for a
                church visit or a formal dinner. It tells people that you value their culture. In return, you will
                find people warmer, more welcoming, and more willing to help you.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Practical Benefits of Covering Up
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Beyond cultural respect, there are practical reasons to cover up in Morocco. The sun is intense
                year-round, and covered skin is protected skin. Loose, long clothing is actually cooler than
                shorts and tank tops in extreme heat because it shields you from direct sun while allowing air
                to circulate. Long sleeves also protect against mosquitoes in the evening and sand in the desert.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                For Women Specifically
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Women travelers will receive less unwanted attention when dressed modestly in traditional areas.
                This is not about blaming clothing for behavior; it is simply a practical observation that many
                female travelers confirm. A loose tunic over trousers or a maxi dress makes exploring the medina
                more comfortable in every sense. That said, dress for your own comfort level. Many women travel
                Morocco in whatever they feel good in and have a wonderful time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Dressing Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear by Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s climate varies dramatically by season. Here is what to pack for each time of year.
          </p>

          <div className="space-y-8">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)]/5 p-6 border-b border-[var(--color-accent)]/10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                        <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {season.season}
                        </h3>
                        <p className="text-sm text-[var(--text-muted)]">
                          <Thermometer className="w-3 h-3 inline mr-1" />
                          {season.tempRange}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">{season.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4 text-[var(--color-accent)]" />
                          For Women
                        </h4>
                        <ul className="space-y-2">
                          {season.women.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4 text-[var(--color-accent)]" />
                          For Men
                        </h4>
                        <ul className="space-y-2">
                          {season.men.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Pro tip:</span> {season.tip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dressing by Location ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear by Location
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The same outfit that works on a Casablanca beach may be uncomfortable in a Fes medina. Here is how to dress for each type of destination.
          </p>

          <div className="space-y-8">
            {locationGuide.map((loc) => {
              const LocIcon = loc.icon;
              return (
                <div key={loc.location} className="card-moroccan overflow-hidden">
                  <div className="p-6 border-b border-[var(--color-accent)]/10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                          <LocIcon className="w-5 h-5 text-[var(--color-accent)]" />
                        </div>
                        <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {loc.location}
                        </h3>
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0">
                        {loc.modestyLevel}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{loc.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          Women
                        </h4>
                        <ul className="space-y-2">
                          {loc.women.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          Men
                        </h4>
                        <ul className="space-y-2">
                          {loc.men.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dressing by Activity ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear by Activity
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Different activities in Morocco call for different outfits. Here is what to wear for each experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activityGuide.map((act) => {
              const ActIcon = act.icon;
              return (
                <div key={act.activity} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ActIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {act.activity}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">{act.advice}</p>
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">Essentials:</p>
                    {act.essentials.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What NOT to Wear ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What NOT to Wear in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Avoid these common clothing mistakes to stay comfortable, respectful, and safe during your trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatNotToWear.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5 border-l-4 border-l-[var(--color-accent)]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <ItemIcon className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.item}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Capsule Wardrobe: Women ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Capsule Wardrobe Packing Lists
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Pack light, pack smart. These capsule wardrobes cover a 10-14 day trip across multiple Moroccan climates and settings.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Choose neutral colors (beige, navy, olive, white, black) so all pieces mix and match. You can always buy extra items in Moroccan souks.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Women's List */}
            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                Women&apos;s Capsule Wardrobe
              </h3>
              <div className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-12 gap-0 bg-[var(--color-accent)] text-white text-xs font-medium">
                  <div className="col-span-5 p-2 px-3">Item</div>
                  <div className="col-span-1 p-2 text-center">Qty</div>
                  <div className="col-span-6 p-2 px-3">Note</div>
                </div>
                {capsuleWardrobeWomen.map((item, i) => (
                  <div
                    key={item.item}
                    className={`grid grid-cols-12 gap-0 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="col-span-5 p-2 px-3 font-medium text-[var(--text-primary)]">{item.item}</div>
                    <div className="col-span-1 p-2 text-center text-[var(--color-accent)] font-bold">{item.qty}</div>
                    <div className="col-span-6 p-2 px-3 text-[var(--text-muted)]">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Men's List */}
            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                Men&apos;s Capsule Wardrobe
              </h3>
              <div className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-12 gap-0 bg-[var(--color-accent)] text-white text-xs font-medium">
                  <div className="col-span-5 p-2 px-3">Item</div>
                  <div className="col-span-1 p-2 text-center">Qty</div>
                  <div className="col-span-6 p-2 px-3">Note</div>
                </div>
                {capsuleWardrobeMen.map((item, i) => (
                  <div
                    key={item.item}
                    className={`grid grid-cols-12 gap-0 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="col-span-5 p-2 px-3 font-medium text-[var(--text-primary)]">{item.item}</div>
                    <div className="col-span-1 p-2 text-center text-[var(--color-accent)] font-bold">{item.qty}</div>
                    <div className="col-span-6 p-2 px-3 text-[var(--text-muted)]">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shopping for Clothes in Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping for Clothes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco is a fashion destination in itself. Buy local clothing that keeps you comfortable, stylish, and immersed in the culture.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Haggle respectfully. Start at about 40-50% of the asking price and negotiate from there.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shoppingGuide.map((item) => {
              const ShopIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ShopIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{item.description}</p>
                  <div className="space-y-1.5 text-xs text-[var(--text-muted)]">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span>{item.whereToBy}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <DollarSign className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span>{item.priceRange}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Clothing Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                The Scarf Is Your Best Friend
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A versatile scarf is the single most useful item you can pack for Morocco. Use it as a head
                covering for mosque visits, a shawl for cool evenings, sun protection for the desert, a privacy
                screen on overnight buses, a picnic blanket, and even an emergency beach towel. Buy a beautiful
                one in the souk from 30 MAD.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Shirt className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Natural Fabrics Are Essential
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Cotton, linen, and merino wool breathe far better than polyester and synthetics. In Moroccan
                heat, synthetic fabrics trap sweat and become uncomfortable within minutes. Linen is king in
                summer: it dries quickly, breathes well, and gets softer with every wash. The wrinkles are
                part of its charm.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Footprints className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Break In Your Shoes Before You Go
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                You will walk more in Morocco than you expect. Medina exploration alone can mean 15,000+
                steps per day on uneven surfaces. Wear your travel shoes for at least two weeks before
                your trip. Blisters in the medina are miserable. Pack moleskin blister pads just in case.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Layer, Layer, Layer
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco can have a 20-degree temperature swing between midday and midnight, especially in
                spring and fall. The key to comfortable dressing is layers. A breathable base layer, a
                light mid-layer (cardigan, flannel, or light fleece), and a packable outer layer covers
                every scenario.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Laundry Is Easy and Cheap
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most riads and hotels offer laundry service from 30 MAD per kg. There are also laundromats
                in major cities. This means you can pack lighter and wash as you go. Quick-dry fabrics are
                ideal for hand washing in your room. Most accommodations have clotheslines or balconies.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CircleDot className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Neutral Colors Are Versatile
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Packing in a neutral palette (navy, olive, beige, white, black) means everything mixes
                and matches. You can create many outfits from few pieces. Add color through a Moroccan
                scarf or locally bought accessories. Dark bottoms hide medina dust better than light ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I have to cover my head in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                No. Morocco does not require head coverings for visitors or non-Muslim women. While some
                Moroccan women wear hijab, it is a personal choice. You should, however, carry a lightweight
                scarf for mosque visits (like Hassan II in Casablanca) and conservative rural areas where
                covering your hair is a sign of respect.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I wear shorts in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                It depends on the location. In beach towns like Essaouira and Agadir, shorts are perfectly
                acceptable for everyone. In Marrakech and Fes medinas, knee-length shorts are tolerated for
                men but not ideal. Women should avoid very short shorts in traditional areas. In rural and
                conservative areas, both men and women should choose longer clothing. When in doubt, opt for
                lightweight trousers.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I wear to visit a mosque in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most mosques in Morocco are closed to non-Muslims. The major exception is Hassan II Mosque
                in Casablanca, which offers guided tours. For mosque visits, women should cover their hair
                with a scarf, wear long sleeves, and cover legs fully. Men should wear long trousers and
                a sleeved shirt. Shoes are removed at the entrance, so bring socks and wear shoes that
                are easy to slip off.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco very conservative about clothing?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is moderate compared to many Muslim-majority countries. Modern cities like Casablanca
                and Rabat are cosmopolitan, and you will see Moroccans in everything from traditional djellabas
                to Western fashion. However, traditional medinas, rural areas, and the south are more
                conservative. The general rule is: dress modestly in traditional areas, and wear what you like
                in modern city districts and beaches.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I buy clothes in Morocco instead of packing everything?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. Morocco is one of the best countries in the world for shopping for clothes.
                You can buy beautiful kaftans from 150 MAD, linen shirts from 100 MAD, harem pants from
                60 MAD, leather babouche slippers from 50 MAD, and desert scarves from 30 MAD in any souk.
                Buying locally is part of the experience and helps you dress appropriately while supporting
                local artisans.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What shoes should I bring to Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Comfortable walking shoes are the most important thing. Medina streets are uneven cobblestone
                with steps, slopes, and occasional wet patches, so flat closed-toe shoes or sturdy sandals
                with good grip work best. Bring hiking boots if visiting the Atlas Mountains, flip-flops for
                hammams and beaches, and one pair of dressier shoes for restaurants. Avoid high heels on
                medina streets entirely.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What do Moroccan women actually wear?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccan women wear everything from traditional djellabas and kaftans to jeans, dresses,
                and modern Western fashion. In cities like Casablanca, you will see the full spectrum of
                styles. In rural areas, traditional dress is more common. Young Moroccan women often blend
                Moroccan and Western styles creatively. There is no single dress code for Moroccan women,
                and the idea that all Moroccan women dress conservatively is a misconception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/packing" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Luggage className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete packing lists for every type of Morocco trip, from weekend city breaks to month-long adventures.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/shopping" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Shopping in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The ultimate guide to shopping in Moroccan souks. Bargaining tips, what to buy, and where to find it.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/weather" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Thermometer className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Weather Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Month-by-month weather breakdown for every region. Know exactly what temperatures to expect.
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

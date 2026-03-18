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
  Music,
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
  Mountain,
  Sparkles,
  Globe,
  BookOpen,
  Gem,
  Users,
  AlertTriangle,
  Flame,
  Footprints,
  TreeDeciduous,
  Palette,
  Bath,
  Eye,
  Droplets,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Top 25 Things to Do in Fes 2026 | Ultimate Guide',
  description:
    'Discover the best things to do in Fes in 2026. From the Chouara Tannery and Bou Inania Madrasa to cooking classes, pottery workshops, and day trips to Volubilis. Complete guide with prices, insider tips, and local secrets.',
  keywords: [
    'things to do in Fes',
    'Fes attractions',
    'what to do in Fes',
    'Fes sightseeing',
    'Fes things to see',
    'Fes medina',
    'Fes el-Bali',
    'Chouara Tannery',
    'Bou Inania Madrasa',
    'Al-Qarawiyyin',
    'Dar Batha Museum',
    'Borj Nord',
    'Fes cooking class',
    'Fes pottery',
    'Fes leather shopping',
    'Volubilis day trip',
    'Fes food tour',
    'Fes day trips',
    'Sefrou day trip',
    'Ifrane day trip',
    'Fes 2026',
    'best Fes experiences',
    'Fes bucket list',
    'Fes travel guide',
    'Meknes day trip from Fes',
  ],
  openGraph: {
    title: 'Top 25 Things to Do in Fes 2026 | Ultimate Guide',
    description:
      'The complete guide to Fes attractions, activities, and experiences. Historical sites, cultural immersion, artisan workshops, food, shopping, and day trips with prices in MAD.',
    url: `${BASE_URL}/things-to-do-fes`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Fes medina with the minarets of Al-Qarawiyyin and Bou Inania rising above whitewashed rooftops at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 25 Things to Do in Fes 2026',
    description:
      'Chouara Tannery, Bou Inania Madrasa, Fes el-Bali medina, cooking classes, leather shopping, Volubilis, and more. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-fes.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-fes` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-fes`,
  name: 'Top 25 Things to Do in Fes 2026 | Ultimate Guide',
  description:
    'Discover the best things to do in Fes in 2026. From the Chouara Tannery and Bou Inania Madrasa to cooking classes, pottery workshops, and day trips to Volubilis.',
  url: `${BASE_URL}/things-to-do-fes`,
  image: `${BASE_URL}/images/hero-fes.webp`,
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
  mainEntityOfPage: `${BASE_URL}/things-to-do-fes`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Fes',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Fes', item: `${BASE_URL}/fes-guide` },
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-fes` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the top things to do in Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top things to do in Fes include visiting the Chouara Tannery to watch traditional leather dyeing, exploring the Bou Inania Madrasa for its stunning architecture, getting lost in the Fes el-Bali medina (the world largest car-free urban area), visiting Al-Qarawiyyin (the world oldest university), taking a cooking class, shopping for leather and ceramics, and day-tripping to the Roman ruins at Volubilis.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do you need in Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most travelers find 2-3 days ideal for Fes. This allows time for the major sights in Fes el-Bali (Chouara Tannery, madrasas, souks), a cooking class or pottery workshop, and a day trip to Volubilis and Meknes. With 4-5 days, you can explore at a relaxed pace and add excursions to Sefrou, Ifrane, or the Middle Atlas cedar forests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Fes expensive to visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes is one of the most affordable cities in Morocco. Street food costs from 10-35 MAD, museum entries from 10-70 MAD, and a guided medina tour from 250 MAD. Budget travelers can enjoy Fes on from 300-450 MAD per day, while mid-range travelers spend from 800-1,500 MAD per day including a beautiful riad stay.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit Fes is March to May and September to November, when temperatures are comfortable (18-28 degrees Celsius). Summer (June-August) can be extremely hot, exceeding 40 degrees. Winter (December-February) is mild but can be rainy. Spring is ideal for the surrounding countryside and the Fes Festival of World Sacred Music in June.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Fes safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes is generally safe for tourists. The main concerns are getting lost in the labyrinthine medina and encountering persistent self-appointed guides (faux guides). Keep valuables secure, politely decline unsolicited guiding services with "la shukran," and consider hiring an official licensed guide for your first medina exploration. Serious crime against tourists is rare.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I not miss in Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not miss the Chouara Tannery viewed from a terrace above (free, tip expected), the Bou Inania Madrasa (from 30 MAD), a guided walk through Fes el-Bali medina, leather shopping in the tannery quarter, a traditional Fassi cooking class (from 300 MAD), and a panoramic sunset view from either the Borj Nord fortress or the Merenid Tombs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do day trips from Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, excellent day trips from Fes include Volubilis Roman ruins and Moulay Idriss (1 hour, from 300 MAD), Meknes (45 minutes, from 25 MAD by train), Sefrou and its waterfalls (30 minutes, from 100 MAD), Ifrane "the Switzerland of Morocco" (1 hour, from 200 MAD), and the Middle Atlas cedar forests to see Barbary macaques (1.5 hours, from 300 MAD).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a cooking class cost in Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cooking class in Fes costs from 300 MAD for a group class to from 700 MAD for a private experience. Most half-day classes include a guided market visit, hands-on cooking of 3-5 traditional Fassi dishes (pastilla, tagine, couscous), and eating everything you prepare. Palais Amani and Cafe Clock Fes offer highly rated classes.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORICAL & CULTURAL LANDMARKS
   ═══════════════════════════════════════════════════════════════ */

const historicalAttractions = [
  {
    name: 'Fes el-Bali Medina',
    icon: Globe,
    category: 'UNESCO World Heritage',
    price: 'Free',
    duration: '4-8 hours',
    bestTime: 'Morning (before 11 AM)',
    description:
      'The largest car-free urban area in the world and a UNESCO World Heritage Site since 1981. Founded in the 9th century, Fes el-Bali is a living medieval city of over 9,400 winding alleys, 11,000 historic buildings, and a population of roughly 150,000. The medina is home to mosques, madrasas, fondouks (caravanserais), fountains, tanneries, and souks that have operated continuously for over a thousand years. Getting lost here is not a risk — it is the entire point.',
    insiderTip:
      'Hire a licensed guide for your first visit (from 250 MAD for a half-day) to understand the layout and history. After that, explore freely. The main arteries run between Bab Bou Jeloud (the Blue Gate) and the Kairaouine quarter. Walk downhill to go deeper, uphill to find your way out. Download an offline map before entering.',
  },
  {
    name: 'Bou Inania Madrasa',
    icon: BookOpen,
    category: 'Historical Monument',
    price: 'From 30 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning (opens 9 AM)',
    description:
      'Built between 1351 and 1356 by the Marinid Sultan Abu Inan Faris, this is the only madrasa in Morocco with its own minbar (pulpit), making it both a school and a functioning mosque. The architecture is breathtaking — intricate carved stucco, zellige tilework in geometric patterns, carved cedar wood screens, a marble courtyard with an ablution fountain, and a stunning bronze-clad entrance door. The water clock (clepsydra) on the exterior wall opposite the entrance is unique in the Islamic world.',
    insiderTip:
      'Visit right at 9 AM to have the courtyard almost to yourself. Look up at the carved cedar eaves and the bronze window grilles — the detail is astonishing. The student cells on the upper floor are open and worth exploring. The water clock across the narrow street is easy to miss but historically significant.',
  },
  {
    name: 'Al-Qarawiyyin Mosque & University',
    icon: Landmark,
    category: 'Historical Landmark',
    price: 'Free (exterior only, non-Muslims cannot enter)',
    duration: '30 minutes',
    bestTime: 'Any time',
    description:
      'Founded in 859 AD by Fatima al-Fihri, Al-Qarawiyyin is recognized by UNESCO and the Guinness Book of Records as the oldest continuously operating university in the world. Before Oxford, Bologna, or the Sorbonne existed, scholars here were studying theology, mathematics, astronomy, chemistry, and languages. The mosque can hold 20,000 worshippers. Non-Muslims cannot enter, but you can admire the ornate courtyard and architecture through the open doors and from surrounding terraces.',
    insiderTip:
      'The best views of the university courtyard are from the rooftop terraces of nearby leather shops on Derb Mechattine. Ask shopkeepers politely if you can access their terrace — they usually allow it in hopes of a purchase. The Al-Qarawiyyin Library, recently restored, occasionally opens for special tours — check at the tourist office.',
  },
  {
    name: 'Chouara Tannery',
    icon: Palette,
    category: 'Living Heritage',
    price: 'Free (tip from 20 MAD expected)',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning (10-11 AM)',
    description:
      'The most iconic sight in Fes and one of the most photographed locations in all of Morocco. The Chouara Tannery has been operating since the 11th century, making it one of the oldest tanneries in the world. Workers stand waist-deep in stone vats of natural dyes — saffron yellow, poppy red, mint green, indigo blue — treating leather using methods unchanged for a millennium. The bird eye view from surrounding terraces reveals a honeycomb of circular stone vats stretching across the valley floor.',
    insiderTip:
      'The best views are from the terraces of the leather shops above the tannery on the east side. You will be handed a sprig of fresh mint to hold against the intense smell. Morning light from 10-11 AM is the best for photography and when the workers are most active. A shopkeeper will guide you up and expect you to browse leather goods — you are not obligated to buy, but a from 20 MAD tip for terrace access is fair.',
  },
  {
    name: 'Bab Bou Jeloud (The Blue Gate)',
    icon: Landmark,
    category: 'Iconic Landmark',
    price: 'Free',
    duration: '15-30 minutes',
    bestTime: 'Golden hour (sunset)',
    description:
      'The main western entrance to Fes el-Bali and the most recognizable landmark of the city. Built in 1913 in a Moorish style, the gate features blue ceramic tiles on the exterior (representing Fes, the blue city of Morocco) and green tiles on the interior (representing Islam). The gate frames a perfect view of the Bou Inania Madrasa minaret and is the starting point for most medina explorations. The surrounding cafes are ideal for people-watching.',
    insiderTip:
      'Photograph the gate from both sides — the blue exterior is most famous but the green interior view with the minaret framed through the arch is equally stunning. The cafe terraces on either side of the gate serve excellent juices and mint tea and offer front-row seats to the constant parade of people, donkeys, and handcarts entering the medina.',
  },
  {
    name: 'Al-Attarine Madrasa',
    icon: BookOpen,
    category: 'Historical Monument',
    price: 'From 30 MAD',
    duration: '30-45 minutes',
    bestTime: 'Morning',
    description:
      'Built in 1325 by the Marinid Sultan Abu Said Uthman II, this exquisite madrasa sits at the entrance to the spice souk (Souk al-Attarine) and directly adjacent to the Al-Qarawiyyin Mosque. Smaller and more intimate than Bou Inania, it features some of the finest zellige tilework and carved stucco in all of Fes. The central courtyard with its white marble fountain is a masterpiece of Marinid architecture. From the rooftop, you can look directly into the courtyard of Al-Qarawiyyin.',
    insiderTip:
      'The rooftop terrace offers the closest and best view into the Al-Qarawiyyin courtyard available to non-Muslims. Visit in the morning when sunlight hits the central courtyard tiles. This madrasa is less visited than Bou Inania but equally magnificent. Combine your visit with browsing the adjacent spice souk.',
  },
  {
    name: 'Merenid Tombs',
    icon: Landmark,
    category: 'Historical Ruins & Viewpoint',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Sunset',
    description:
      'The ruined tombs of the Merenid dynasty sit on the hilltop above Fes el-Bali, offering the most spectacular panoramic view of the entire medina. Built in the 14th century, the tombs themselves are now atmospheric ruins — roofless walls and crumbling arches silhouetted against the sky. But the real draw is the sweeping vista: the medina spreading below like a carpet, with dozens of minarets rising above the whitewashed rooftops, the green hills beyond, and the distant Middle Atlas mountains.',
    insiderTip:
      'Visit at sunset for the most dramatic light — the medina turns golden and the call to prayer echoes from dozens of mosques simultaneously. Take a taxi or walk up from Bab Guissa (20 minutes uphill). Do not linger after dark as the area is poorly lit. The adjoining Hotel des Merinides terrace bar offers the same view with a drink in hand.',
  },
  {
    name: 'Borj Nord (Arms Museum)',
    icon: Eye,
    category: 'Museum & Viewpoint',
    price: 'From 20 MAD',
    duration: '1 hour',
    bestTime: 'Late afternoon',
    description:
      'A 16th-century Saadian-era fortress perched on the hills north of the medina, now housing an extensive collection of historical weapons and armor from across Morocco and the Islamic world. The collection includes 13th-century Almohad swords, Berber rifles, Ottoman cannons, and a 12-ton cannon from the 1578 Battle of the Three Kings. The rooftop terrace offers commanding views across the medina and is a worthy alternative to the Merenid Tombs for panoramic photography.',
    insiderTip:
      'The weapons collection is surprisingly fascinating even for non-military enthusiasts. The views from the fortress terrace are equal to the Merenid Tombs but with fewer crowds and better safety. Combine with a visit to the Merenid Tombs, which are a short walk along the ridge. Best accessed by taxi from the medina for from 15-20 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MUSEUMS & CULTURAL SITES
   ═══════════════════════════════════════════════════════════════ */

const museumsAndCulture = [
  {
    name: 'Dar Batha Museum',
    icon: Palette,
    category: 'Art & Craft Museum',
    price: 'From 20 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Mid-morning',
    description:
      'Housed in a stunning 19th-century Hispano-Moorish palace built by Sultan Moulay Hassan I, Dar Batha displays the finest examples of traditional Fassi craftsmanship. The collection includes celebrated Fes blue pottery (the famous cobalt blue ceramics), intricate embroidery, carved wood, zellige tilework, Berber carpets, wrought ironwork, and astrolabes. The Andalusian garden in the central courtyard is a peaceful haven with towering cypresses, orange trees, and a central fountain.',
    insiderTip:
      'The Fes blue pottery collection on the ground floor is the highlight — study the techniques before visiting the pottery quarter. The garden is a lovely spot to rest mid-exploration. Located near Bab Bou Jeloud, making it an ideal first or last stop in the medina. The museum is rarely crowded.',
  },
  {
    name: 'Nejjarine Museum of Wooden Arts & Crafts',
    icon: Gem,
    category: 'Craft Museum',
    price: 'From 20 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'Set in a beautifully restored 18th-century fondouk (caravanserai) in the heart of the woodworkers souk, this museum showcases the remarkable woodworking traditions of Fes. The three floors display intricately carved cedar doors, window screens (mashrabiya), Quran stands, bridal furniture, musical instruments, and carpenter tools. The building itself, with its central courtyard and carved galleries, is as impressive as the collection. The rooftop terrace cafe offers medina views.',
    insiderTip:
      'The fondouk building is worth the visit alone — it is one of the finest restored fondouks in Morocco. The rooftop cafe serves mint tea with views over the medina rooftops. The Nejjarine fountain in the square outside is one of the most photographed fountains in Fes, decorated with stunning zellige work. Visit before the woodworking souk to understand what you are seeing.',
  },
  {
    name: 'Dar el-Makhzen (Royal Palace)',
    icon: Landmark,
    category: 'Architectural Landmark',
    price: 'Free (exterior only)',
    duration: '20-30 minutes',
    bestTime: 'Any time',
    description:
      'The Royal Palace of Fes dates from the 13th century and sprawls over 80 hectares, making it one of the largest palaces in the world. While the palace interior is closed to visitors, the main entrance gates are magnificent — enormous brass doors adorned with intricate geometric patterns, flanked by zellige tilework and carved stucco. The seven grand doors represent the seven days of the week. The scale and craftsmanship of the gates alone make the visit worthwhile.',
    insiderTip:
      'The palace is located in Fes el-Jdid (New Fes), a short walk from the Mellah. The brass doors are most photogenic in the morning when the sun lights up the golden metalwork. Combine with a visit to the adjacent Mellah and the Ibn Danan Synagogue. The surrounding Place des Alaouites is a vast open square — a stark contrast to the narrow medina.',
  },
  {
    name: 'Mellah (Jewish Quarter) & Ibn Danan Synagogue',
    icon: MapPin,
    category: 'Historical District',
    price: 'Free (synagogue from 20 MAD)',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'The Fes Mellah, established in 1438, was the first Jewish quarter in Morocco and one of the oldest in the Islamic world. At its peak, it housed over 250,000 Jewish residents. The architecture is distinctively different from the medina — buildings have outward-facing balconies and windows, unlike the inward-facing Muslim houses. The 17th-century Ibn Danan Synagogue has been beautifully restored. The Jewish cemetery, the largest in Morocco, is a moving testament to the once-thriving community.',
    insiderTip:
      'The Mellah today is largely Muslim but its Jewish heritage remains visible in the architecture and the synagogue. The Ibn Danan Synagogue guardian will give you a tour and explain the history — a tip of from 20 MAD is appropriate. The Mellah market is one of the best spots for spices and dried fruits at local prices, without the tourist markup of the main souks.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD & CULINARY EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const foodExperiences = [
  {
    name: 'Fassi Cooking Class',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 300 MAD',
    duration: '4-5 hours (half-day)',
    description:
      'Fes is considered the culinary capital of Morocco, and its cuisine — known as Fassi cooking — is the most refined in the country. A cooking class teaches you to prepare iconic dishes like pastilla (pigeon or chicken in filo pastry with almonds and cinnamon), rfissa (lentils with shredded msemen), lamb tagine with prunes and almonds, and mechchi (stuffed vegetables). Most classes include a guided market visit to source ingredients from the souks.',
    insiderTip:
      'Book a class that includes the market tour — walking through the spice souk and vegetable market with a chef is an education in itself. Palais Amani and Cafe Clock Fes both offer highly rated cooking classes. Private classes from 700 MAD are excellent for couples. Ask your chef to teach you pastilla — it is the signature Fassi dish and surprisingly achievable at home.',
  },
  {
    name: 'Street Food Tour of the Medina',
    icon: Flame,
    category: 'Culinary Walking Tour',
    price: 'From 350 MAD (guided)',
    duration: '3-4 hours',
    description:
      'The Fes medina is a street food paradise. A guided food tour takes you to hidden stalls and neighborhood eateries that most tourists walk right past. Taste sendj (Moroccan doughnuts) fresh from the fryer, khlii (preserved meat), bessara (fava bean soup), sfenj dipped in honey, grilled kefta, mechoui (slow-roasted lamb), and the famous Fes nougat. End with a glass of fresh pomegranate juice and handmade Fassi pastries.',
    insiderTip:
      'Book a morning tour when the markets are freshest and the street food stalls are just firing up. Come hungry — you will eat at 8-10 stops. The best tours venture into Rcif and Ain Zleten neighborhoods where tourists rarely go. If exploring solo, head to Talaa Kebira street for the highest concentration of food stalls.',
  },
  {
    name: 'Riad Dinner Experience',
    icon: Star,
    category: 'Fine Dining',
    price: 'From 250-600 MAD per person',
    duration: '2-3 hours',
    description:
      'Dine in the candlelit courtyard of a centuries-old riad, surrounded by zellige fountains, carved stucco walls, and orange trees. Many of the finest riads in Fes offer elaborate multi-course Moroccan tasting menus featuring pastilla, harira, lamb tagine with caramelized onions and eggs, couscous with seven vegetables, and Fassi pastries. Some feature live Andalusian music. Riad Fes, Palais Amani, and Dar Roumana are top choices.',
    insiderTip:
      'Many riad restaurants are open to non-guests — book in advance. Dar Roumana is widely considered the finest dining in Fes (from 500 MAD for a tasting menu). For a more affordable but equally atmospheric experience, try the set menu at Cafe Clock Fes (from 120 MAD). Riads in the heart of the medina often serve food that is more traditional and refined than restaurants on the main streets.',
  },
  {
    name: 'Moroccan Mint Tea & Pastries',
    icon: Heart,
    category: 'Cultural Experience',
    price: 'From 10-25 MAD',
    duration: '30-45 minutes',
    description:
      'Fes is famous for its pastries — the city has a sweet tooth unmatched elsewhere in Morocco. Try kaab el ghazal (crescent-shaped almond pastries), ghriba (crumbly semolina cookies), chebakia (sesame and honey pastries traditionally eaten during Ramadan), briwat (almond-filled filo triangles), and the famous cornes de gazelle. Pair with a glass of perfectly brewed mint tea in a traditional tea house or medina cafe.',
    insiderTip:
      'The best pastries in Fes are from the pattisseries near Bab Bou Jeloud and the bakeries along Talaa Sghira. Buy a mixed box of pastries (from 30 MAD) and take them to a cafe for tea — many places allow this. The pattisserie at the entrance to the Mellah is particularly excellent. Ask for "hlou Fassi" (Fassi sweets) to get the traditional specialties.',
  },
  {
    name: 'Fes Food Market Tour (Self-Guided)',
    icon: ShoppingBag,
    category: 'Food & Culture',
    price: 'Free to explore',
    duration: '1-2 hours',
    description:
      'The food markets of Fes are a sensory experience unlike any other. Explore the spice souk with pyramids of cumin, saffron, ras el hanout, and dried roses. Visit the olive market with dozens of varieties in barrels. Watch bread being baked in wood-fired communal ovens. Browse the dried fruit and nut stalls. The freshest produce is in the Rcif market and the Achabine quarter, where locals shop for daily ingredients.',
    insiderTip:
      'Visit the markets early morning (8-10 AM) when produce is freshest and the atmosphere is most authentic. The communal bread ovens (ferrane) are fascinating — locals bring their own dough to be baked. Rcif market is the most authentic and least touristy. Try the fresh-pressed olive oil from the presses in the medina — you can taste before buying.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ARTISAN & WORKSHOP EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const artisanExperiences = [
  {
    name: 'Pottery Workshop & Ceramics Quarter',
    icon: Palette,
    category: 'Artisan Experience',
    price: 'From 150 MAD (workshop) / Free (visit)',
    duration: '2-3 hours',
    description:
      'The Fes pottery cooperative at Ain Nokbi, on the outskirts of the medina, is where the famous Fes blue ceramics are made. Watch artisans shape clay on traditional kick-wheels, hand-paint intricate geometric patterns using cobalt oxide (the distinctive Fes blue), and fire pieces in wood-burning kilns. You can take a hands-on pottery workshop where you shape, paint, and fire your own piece. The showroom offers ceramics at factory prices.',
    insiderTip:
      'Visit in the morning when artisans are most active and the kilns are firing. The hands-on workshop (from 150 MAD) is excellent for families and makes a memorable souvenir. Prices at the factory showroom are 30-50% lower than in the medina shops. The painting technique — using a single horsehair brush for intricate geometric patterns — is mesmerizing to watch.',
  },
  {
    name: 'Leather Shopping at the Tanneries',
    icon: ShoppingBag,
    category: 'Shopping & Artisan',
    price: 'Varies',
    duration: '1-2 hours',
    bestTime: 'After visiting the tannery terraces',
    description:
      'Fes leather is renowned worldwide for its quality and the natural dyeing process used at the medieval tanneries. The leather shops surrounding the Chouara Tannery offer bags, jackets, belts, wallets, babouche slippers, and poufs in every color. The leather is softer and more supple than machine-processed alternatives. The signature items are babouche slippers (from 80 MAD), leather bags (from 200 MAD), and poufs (from 300 MAD).',
    insiderTip:
      'Prices are always negotiable — start at 40% of the asking price. Quality varies significantly, so check stitching and leather thickness. The shops directly overlooking the tannery charge the highest prices due to their terrace access. Walk 2-3 streets away for the same quality at 30% lower prices. If buying a pouf, ask to have it shipped flat (unstuffed) to save luggage space.',
  },
  {
    name: 'Zellige Tilework Workshop',
    icon: Gem,
    category: 'Artisan Experience',
    price: 'From 200 MAD',
    duration: '2-3 hours',
    description:
      'Zellige (the intricate geometric mosaic tilework that defines Moroccan architecture) is a Fassi invention, and Fes remains the center of this ancient craft. Visit a zellige workshop to watch master craftsmen chip individual tiles by hand into precise geometric shapes, then assemble them face-down into complex patterns. Some workshops offer hands-on experiences where you can try chipping and assembling under expert guidance.',
    insiderTip:
      'The zellige workshops in the Ain Nokbi area (near the pottery cooperative) offer the most authentic experience. The skill required is extraordinary — master zellige craftsmen train for 8-10 years. Ask to see the moment when a completed panel is flipped over to reveal the finished pattern — it is genuinely magical. Small zellige pieces make excellent souvenirs from 50 MAD.',
  },
  {
    name: 'Metalwork & Coppersmith Souk',
    icon: Sparkles,
    category: 'Artisan Quarter',
    price: 'Free to explore',
    duration: '1 hour',
    description:
      'The Place Seffarine (Coppersmiths Square) is one of the most atmospheric spots in the medina. For centuries, coppersmiths and metalworkers have hammered enormous cauldrons, trays, teapots, and lanterns by hand. The sound of hammering echoes off the surrounding walls as craftsmen shape glowing copper and brass into functional art. You can watch the entire process from raw metal to finished product and commission custom pieces.',
    insiderTip:
      'The square is easiest to find by following the sound of hammering. The craftsmen here welcome spectators and will often explain their work. Copper trays and traditional Moroccan teapots make excellent souvenirs from 100 MAD. The quality of handwork here is superior to machine-made imports sold in tourist shops. Place Seffarine is also home to the entrance of the Al-Qarawiyyin Library.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS & EXCURSIONS
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    name: 'Volubilis & Moulay Idriss',
    icon: Globe,
    category: 'Day Trip / Historical',
    price: 'From 300 MAD (tour) / From 70 MAD entry',
    duration: 'Full day (6-8 hours)',
    description:
      'The best-preserved Roman ruins in North Africa, Volubilis (Walili) was a thriving Roman city from the 3rd century BC to the 11th century AD. Walk among remarkably intact triumphal arches, basilicas, public baths, olive presses, and private houses with stunning floor mosaics depicting mythological scenes. The adjacent holy town of Moulay Idriss Zerhoun, built on two hills, is the burial place of Morocco founder and one of the country most sacred sites. Non-Muslims can now visit (but cannot stay overnight).',
    insiderTip:
      'Visit Volubilis early morning before tour groups arrive and when the light is best for the mosaics. Bring water and sun protection — there is little shade. The House of Orpheus and House of Venus mosaics are the highlights. Combine with Moulay Idriss for lunch — the town terrace restaurants offer spectacular views. A private taxi from Fes costs from 400-500 MAD for the round trip.',
  },
  {
    name: 'Meknes Day Trip',
    icon: Landmark,
    category: 'Day Trip / Imperial City',
    price: 'From 25 MAD (train)',
    duration: 'Full day',
    description:
      'The smallest of Morocco four imperial cities, Meknes is just 45 minutes by train from Fes and makes an easy day trip. Built by the fearsome Sultan Moulay Ismail in the 17th century as a rival to Versailles, it features the monumental Bab Mansour gate (one of the most impressive in Africa), the vast Heri es-Souani granaries and stables, the underground prison (Qara), and a relaxed medina with far fewer tourists than Fes. The train ride itself passes through beautiful countryside.',
    insiderTip:
      'Take the train for the most comfortable and affordable journey (from 25 MAD, departures every 30-60 minutes). Start at the spectacular Bab Mansour, walk through Place el-Hedim, visit the Mausoleum of Moulay Ismail (free, non-Muslims welcome), and explore the granaries. The Meknes medina has excellent shopping with much less pressure than Fes. Return trains run until 9 PM.',
  },
  {
    name: 'Sefrou & Sefrou Waterfalls',
    icon: Droplets,
    category: 'Day Trip / Nature',
    price: 'From 100 MAD (transport)',
    duration: 'Half day (3-4 hours)',
    description:
      'The charming small town of Sefrou, just 30 minutes south of Fes, sits at the foot of the Middle Atlas mountains surrounded by cherry orchards. Known as the "Garden of Morocco," it hosts the famous Cherry Festival each June. The town has its own compact medina, a Mellah (Jewish quarter) with a distinctive covered market, and a beautiful waterfall (Cascades de Sefrou) just outside town where locals picnic among the riverside cafes.',
    insiderTip:
      'Sefrou is best visited in June during the Cherry Festival, or in spring when the orchards are in bloom. The waterfalls are modest but the setting is lovely — bring a picnic or eat at the riverside cafes. The Sefrou medina is tiny but atmospheric and completely free of tourists. Grand taxis from Fes cost from 20-25 MAD per person. The round trip makes a perfect half-day escape.',
  },
  {
    name: 'Ifrane & Middle Atlas',
    icon: TreeDeciduous,
    category: 'Day Trip / Nature',
    price: 'From 200 MAD (transport)',
    duration: 'Full day',
    description:
      'Known as "the Switzerland of Morocco," Ifrane is a startlingly European town in the Middle Atlas mountains, just one hour from Fes. Built by the French as a hill station, it features alpine chalets, manicured gardens, and even a famous stone lion statue. Nearby, the Azrou Cedar Forest is home to troops of Barbary macaque monkeys living in ancient cedar trees. In winter, the resort of Michlifen offers skiing. The contrast with the medieval medina of Fes could not be more dramatic.',
    insiderTip:
      'The Barbary macaques in the cedar forest near Azrou are the highlight — they are wild but habituated to humans and very photogenic. Do not feed them processed food. Ifrane itself is worth a walk for the surreal European architecture. In winter (December-February), the area gets snow and Michlifen has basic ski facilities. Hire a private taxi for the day from 400-500 MAD to cover both Ifrane and Azrou.',
  },
  {
    name: 'Middle Atlas Lakes (Dayet Aoua & Dayet Ifrah)',
    icon: Mountain,
    category: 'Day Trip / Nature',
    price: 'From 300 MAD (private transport)',
    duration: 'Full day',
    description:
      'The Middle Atlas mountain lakes south of Fes offer a spectacular natural landscape that few tourists discover. Dayet Aoua and Dayet Ifrah are crater lakes surrounded by cedar and oak forests, home to a remarkable variety of birdlife including flamingos, herons, and migratory species. The drive through the mountains passes through Berber villages and rolling countryside dotted with sheep and wildflowers in spring.',
    insiderTip:
      'This trip is best combined with Ifrane and Azrou for a full day in the Middle Atlas. The lakes are seasonal — Dayet Aoua sometimes dries up in late summer. Spring (March-May) is the best time for wildflowers and birdwatching. There are no facilities at the lakes so bring a picnic. The roads are good but a private driver is recommended as public transport is limited.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING & SOUKS
   ═══════════════════════════════════════════════════════════════ */

const shoppingExperiences = [
  {
    name: 'Fes Souks & Markets',
    icon: ShoppingBag,
    category: 'Shopping & Culture',
    price: 'Free to explore',
    duration: '3-5 hours',
    description:
      'The Fes souks are the most traditional and least commercialized of any major Moroccan city. Unlike Marrakech, where many goods are imported, much of what you find in the Fes souks is still made by local artisans. The main commercial arteries — Talaa Kebira (the large slope) and Talaa Sghira (the small slope) — descend from Bab Bou Jeloud through a maze of specialized souks: spices, textiles, leather, brassware, carpets, and the famous Fes blue ceramics.',
    insiderTip:
      'The souks get progressively more local and less touristy as you move deeper into the medina. Talaa Kebira is more touristy; Talaa Sghira is more authentic. Tuesday and Wednesday are the best days for fresh artisan stock. Fes shopkeepers are generally less aggressive than in Marrakech. Start haggling at 30-40% of the asking price for crafts, but spice and food prices are usually close to fair.',
  },
  {
    name: 'Carpet & Textile Shopping',
    icon: Gem,
    category: 'Shopping',
    price: 'From 300 MAD for a small rug',
    duration: '1-3 hours',
    description:
      'Fes has been a center of textile production for centuries. The carpet souks sell Berber rugs from the Middle Atlas (thick, shaggy, geometric patterns), Rabat-style carpets (finer weave, floral motifs), and kilims (flat-weave tapestries). Silk embroidery from Fes (known as Fassi embroidery) is among the most intricate in the Islamic world. The textile fondouks offer a less pressured shopping experience than the open souks.',
    insiderTip:
      'Before buying carpets, visit the Dar Batha Museum to understand quality and traditional patterns. A good carpet seller will serve you mint tea and explain the origin, age, and technique of each piece — enjoy the process. Prices range from 300 MAD for a small kilim to 5,000+ MAD for a large handmade Berber rug. Ask for a certificate of authenticity for expensive purchases.',
  },
  {
    name: 'Henna Souk & Traditional Remedies',
    icon: Sparkles,
    category: 'Shopping & Culture',
    price: 'Free to explore',
    duration: '30 minutes - 1 hour',
    description:
      'The Souk el-Henna is a quiet square near the Kairaouine quarter where traditional remedies, cosmetics, and ritual items have been sold for centuries. Alongside henna powder, you will find kohl (traditional eyeliner), ghassoul clay (for hair and skin), argan oil, black soap (savon beldi), antimony, and an array of mysterious dried herbs and minerals used in traditional Moroccan medicine. The herbalists here are walking encyclopedias of traditional remedies.',
    insiderTip:
      'Henna powder from 10 MAD for a bag is an excellent souvenir. Ghassoul clay from 15 MAD and black soap from 20 MAD are used in the hammam. Ask the herbalists to explain their remedies — they are often happy to share knowledge. This souk is one of the most atmospheric and least touristy spots in the medina. Genuine argan oil should cost from 150-250 MAD per liter.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WELLNESS & RELAXATION
   ═══════════════════════════════════════════════════════════════ */

const wellnessExperiences = [
  {
    name: 'Traditional Fes Hammam',
    icon: Bath,
    category: 'Wellness & Culture',
    price: 'From 15 MAD (public) / From 200 MAD (tourist)',
    duration: '1-2 hours',
    description:
      'Fes has dozens of neighborhood hammams that have served the community for centuries. The experience involves entering progressively hotter steam rooms, being scrubbed vigorously with a kessa glove and black soap (savon beldi) by an attendant, and rinsing with buckets of warm water. You emerge with impossibly soft skin and a deep sense of relaxation. Tourist-oriented hammams in riads add essential oils, clay masks, and massage in more luxurious settings.',
    insiderTip:
      'For an authentic local experience, ask your riad for the nearest neighborhood hammam (from 15 MAD entry, from 50 MAD with scrub by an attendant). Bring your own kessa glove and black soap from the souk (from 30 MAD total). Hammam etiquette: men wear underwear or shorts, women can go fully unclothed in the women-only sessions. For a luxury experience, Riad Fes and Palais Amani offer spa hammams from 300-500 MAD.',
  },
  {
    name: 'Riad Garden Retreat',
    icon: TreeDeciduous,
    category: 'Relaxation',
    price: 'From 30 MAD (tea) / Free (for riad guests)',
    duration: '1-2 hours',
    description:
      'One of the great pleasures of Fes is retreating from the intensity of the medina into the tranquil courtyard of a traditional riad. Many riads welcome non-guests for mint tea or lunch in their garden courtyards, surrounded by zellige fountains, citrus trees, and carved plaster walls. The contrast between the narrow, noisy alley outside and the peaceful paradise within is one of the defining experiences of Fes.',
    insiderTip:
      'Several riads open their courtyards for tea and lunch — Riad Fes, Riad Laaroussa, and Palais Amani are particularly beautiful. A pot of mint tea (from 30 MAD) buys you an hour of serenity. The afternoon heat (1-4 PM) is the perfect time for a riad retreat. Some riads also offer rooftop terraces with medina views.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIPS
   ═══════════════════════════════════════════════════════════════ */

const budgetTips = [
  {
    tip: 'Explore the Medina for Free',
    icon: Footprints,
    description: 'The best experience in Fes costs nothing — simply walking through the medina and getting gloriously lost among the thousands of alleyways, discovering workshops, fountains, and hidden corners.',
    savings: 'Free — the best experience in Fes',
  },
  {
    tip: 'Eat Where Locals Eat',
    icon: UtensilsCrossed,
    description: 'Walk past the restaurants on Talaa Kebira and eat at the tiny stalls in the deeper medina. A bowl of bessara soup costs from 5 MAD, a sandwich from 15 MAD, and a full tagine from 30-40 MAD in local spots.',
    savings: 'Save from 50-100 MAD per meal',
  },
  {
    tip: 'Take the Train to Meknes',
    icon: Compass,
    description: 'The train to Meknes costs from 25 MAD each way — far cheaper than an organized tour (from 300 MAD). Meknes is easy to explore independently. The Bab Mansour gate and Moulay Ismail mausoleum are free.',
    savings: 'Save from 250 MAD vs. organized tour',
  },
  {
    tip: 'Visit Tannery Terraces Smartly',
    icon: Eye,
    description: 'The leather shop terraces overlooking the Chouara Tannery are free to access with a small tip of from 20 MAD. You are not obligated to buy leather goods. Be polite but firm if you just want to see the view.',
    savings: 'Free with from 20 MAD tip',
  },
  {
    tip: 'Use Public Hammams',
    icon: Bath,
    description: 'A public neighborhood hammam costs from 15 MAD entry versus from 300-500 MAD at a tourist spa. The experience is more authentic and the scrub is usually more thorough. Buy your own kessa glove and black soap from 30 MAD.',
    savings: 'Save from 250-450 MAD per visit',
  },
  {
    tip: 'Grand Taxis for Day Trips',
    icon: MapPin,
    description: 'Grand taxis shared with other passengers are incredibly cheap for day trips. Fes to Sefrou from 20 MAD, Fes to Meknes from 30 MAD. Wait at the grand taxi rank until the car fills (6 passengers) for the lowest fare.',
    savings: 'Save from 200-400 MAD on day trip transport',
  },
  {
    tip: 'Shop Deep in the Medina',
    icon: ShoppingBag,
    description: 'Prices drop dramatically as you move away from the main tourist streets. The same leather bag that costs from 400 MAD near the tannery terrace sells for from 200-250 MAD in shops 3 streets away.',
    savings: 'Save 30-50% on shopping',
  },
  {
    tip: 'Free Panoramic Views',
    icon: Camera,
    description: 'The Merenid Tombs (free) and the hills above Bab Guissa offer the best panoramic views of the medina. Skip paid viewpoints and head to these hilltop spots at sunset for spectacular photography.',
    savings: 'Free vs. paid viewpoints',
  },
  {
    tip: 'Drink Orange Juice at Local Stalls',
    icon: CheckCircle,
    description: 'Fresh squeezed orange juice at local stalls costs from 5-8 MAD. Near Bab Bou Jeloud, the same juice costs from 15-20 MAD. Pomegranate juice (in season) is from 10 MAD at local stalls.',
    savings: 'Save from 10-12 MAD per glass',
  },
  {
    tip: 'Book Direct, Avoid Touts',
    icon: AlertTriangle,
    description: 'Fes has more "faux guides" (unlicensed touts) than any other Moroccan city. They add 30-50% commission on everything. Book activities through your riad or online. Politely decline unsolicited guide offers with "la shukran."',
    savings: 'Save 30-50% on activities and shopping',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INSIDER TIPS
   ═══════════════════════════════════════════════════════════════ */

const insiderTips = [
  {
    tip: 'Hire a Guide for Day One',
    icon: Users,
    description:
      'The Fes medina is the most confusing urban space you will ever encounter. A licensed guide (from 250 MAD half-day) on your first day will teach you the layout, explain the history, and show you how the medina works. After that, explore freely.',
  },
  {
    tip: 'Navigate by Landmarks',
    icon: Compass,
    description:
      'Learn the major landmarks: Bab Bou Jeloud (main entrance), Talaa Kebira (main downhill street), Al-Qarawiyyin (center), Rcif (eastern quarter), Ain Zleten (northern quarter). When lost, ask anyone for "Bab Bou Jeloud" — they will point you uphill and out.',
  },
  {
    tip: 'Watch the Donkeys',
    icon: AlertTriangle,
    description:
      'Donkeys, mules, and handcarts are the only transport in the car-free medina. They have absolute right of way in the narrow alleys. When you hear "balak!" (watch out), press yourself flat against the nearest wall. Getting clipped by a loaded donkey is no joke.',
  },
  {
    tip: 'Dress Modestly',
    icon: Users,
    description:
      'Fes is more conservative than Marrakech. Cover shoulders and knees in the medina. Women should carry a scarf for entering sensitive areas near mosques. Modest dress earns respect and reduces unwanted attention significantly.',
  },
  {
    tip: 'Carry Small Change',
    icon: CheckCircle,
    description:
      'Keep from 10 and 20 MAD notes handy. Many interactions — tannery terraces, mosque door tips, small purchases — require small change. Breaking a 200 MAD note at a street stall is difficult.',
  },
  {
    tip: 'Best Time to Visit',
    icon: Calendar,
    description:
      'March to May and September to November are ideal. Summer temperatures exceed 40 degrees — plan indoor activities (museums, hammam, cooking class) for midday. The Festival of World Sacred Music in June is spectacular.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQS
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What are the top things to do in Fes?',
    answer:
      'The top things to do in Fes include visiting the Chouara Tannery (free, tip expected), exploring the Bou Inania Madrasa (from 30 MAD), getting lost in the Fes el-Bali medina (free), visiting the Dar Batha Museum (from 20 MAD), watching sunset from the Merenid Tombs (free), shopping for leather and ceramics, taking a cooking class (from 300 MAD), and day-tripping to the Volubilis Roman ruins (from 300 MAD).',
  },
  {
    question: 'How many days do you need in Fes?',
    answer:
      'Most travelers find 2-3 days ideal. Day 1: Guided medina tour covering Bou Inania, Chouara Tannery, Al-Qarawiyyin, and souks. Day 2: Cooking class, Dar Batha Museum, Mellah, and Merenid Tombs at sunset. Day 3: Day trip to Volubilis and Meknes. With 4-5 days, add pottery workshops, Sefrou, Ifrane, and deeper medina exploration.',
  },
  {
    question: 'Is Fes expensive to visit?',
    answer:
      'Fes is very affordable — often cheaper than Marrakech. Street food costs from 10-35 MAD, museum entries from 10-70 MAD, and a neighborhood hammam from 15 MAD. Budget travelers can enjoy Fes on from 300-450 MAD per day. Mid-range travelers spend from 800-1,500 MAD per day including a beautiful riad stay, guided tours, and restaurant meals.',
  },
  {
    question: 'What is the best time to visit Fes?',
    answer:
      'March to May and September to November are the best months, with pleasant temperatures of 18-28 degrees Celsius. Summer (June-August) regularly exceeds 40 degrees and the medina can feel oppressive. Winter (December-February) is mild but rainy. The Festival of World Sacred Music in June is a highlight if you can handle the heat.',
  },
  {
    question: 'Is Fes safe for tourists?',
    answer:
      'Fes is generally safe. The main challenges are the confusing medina layout (download offline maps), persistent faux guides who offer unsolicited services, and donkeys in narrow alleys. Keep valuables secure, say "la shukran" firmly to touts, and always step aside for donkeys. Serious crime against tourists is extremely rare.',
  },
  {
    question: 'What should I not miss in Fes?',
    answer:
      'Do not miss the Chouara Tannery viewed from above (free, tip from 20 MAD), the Bou Inania Madrasa (from 30 MAD), a sunset at the Merenid Tombs (free), a cooking class with a market tour (from 300 MAD), leather shopping near the tanneries, and mint tea in a riad courtyard (from 30 MAD). These experiences capture the essence of Fes.',
  },
  {
    question: 'Can I do day trips from Fes?',
    answer:
      'Excellent day trips include Volubilis Roman ruins and Moulay Idriss (1 hour, from 300 MAD tour), Meknes (45 minutes, from 25 MAD by train), Sefrou with its waterfalls (30 minutes, from 100 MAD), Ifrane and the cedar forests with Barbary macaques (1 hour, from 200 MAD), and the Middle Atlas lakes (1.5 hours, from 300 MAD).',
  },
  {
    question: 'How much does a cooking class cost in Fes?',
    answer:
      'A cooking class in Fes costs from 300 MAD for a group class to from 700 MAD for a private experience. Most half-day classes include a guided market visit, hands-on cooking of 3-5 traditional Fassi dishes (pastilla, tagine, couscous, Moroccan salads), and eating everything you prepare. Palais Amani and Cafe Clock Fes are top-rated.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/fes-guide',
    icon: MapPin,
    title: 'Fes City Guide',
    description: 'The complete guide to Fes: neighborhoods, transport, accommodation, and planning your visit.',
  },
  {
    href: '/cooking-classes',
    icon: UtensilsCrossed,
    title: 'Morocco Cooking Classes',
    description: 'Detailed guide to the best cooking classes across Morocco with prices, what to expect, and booking tips.',
  },
  {
    href: '/souks',
    icon: ShoppingBag,
    title: 'Guide to Moroccan Souks',
    description: 'Navigate the souks like a local: haggling strategies, fair prices, what to buy, and where to find it.',
  },
  {
    href: '/morocco-food-tours',
    icon: Flame,
    title: 'Morocco Food Tours',
    description: 'The best food tours across Morocco, from Marrakech street food walks to Fes culinary experiences.',
  },
  {
    href: '/morocco-3-days',
    icon: Calendar,
    title: '3 Days in Morocco',
    description: 'How to plan the perfect short trip to Morocco, including itineraries that feature Fes.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ThingsToDoFesPage() {
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
            backgroundImage: 'url(/images/hero-fes.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/fes-guide" className="hover:text-white transition-colors">
              Fes
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top 25 Things to Do
            <br className="hidden md:block" /> in Fes
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the ancient tanneries and medieval madrasas to pottery workshops and Roman ruins.
            Your complete 2026 guide to Morocco&apos;s spiritual capital, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Fes: The World&apos;s Largest Living Medieval City
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Fes is Morocco&apos;s oldest imperial city and the cultural and spiritual heart of the
                kingdom. While Marrakech seduces with spectacle, Fes captivates with depth. The medina
                of Fes el-Bali — founded in the 9th century and barely changed since the 14th — is the
                largest car-free urban area on earth, a labyrinthine world of 9,400 alleyways where
                donkeys still carry goods, artisans still hammer copper by hand, and the call to prayer
                echoes from a hundred minarets at dawn.
              </p>
              <p>
                This is where Morocco&apos;s most refined cuisine was born, where the world&apos;s oldest
                university still stands, where leather is dyed in stone vats using methods unchanged
                for a millennium, and where zellige tilework was invented. Fes does not perform for
                tourists — it simply continues being what it has always been. And that authenticity is
                exactly what makes it extraordinary.
              </p>
              <p>
                This guide covers 25 of the best things to do in Fes, organized by category: historical
                landmarks, museums, food and culinary experiences, artisan workshops, day trips, shopping,
                and wellness. Each includes real 2026 prices in MAD, practical logistics, and insider tips
                from people who know the city intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Overview: Top 10 Must-Do ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Must-Do Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Short on time? These are the ten experiences that define a visit to Fes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Chouara Tannery from Above', price: 'Free (tip from 20 MAD)', time: '45 min - 1 hour', category: 'Living Heritage' },
              { rank: 2, name: 'Get Lost in Fes el-Bali', price: 'Free', time: '4-8 hours', category: 'UNESCO World Heritage' },
              { rank: 3, name: 'Bou Inania Madrasa', price: 'From 30 MAD', time: '45 min - 1 hour', category: 'Historical' },
              { rank: 4, name: 'Sunset at the Merenid Tombs', price: 'Free', time: '1 hour', category: 'Viewpoint' },
              { rank: 5, name: 'Fassi Cooking Class', price: 'From 300 MAD', time: '4-5 hours', category: 'Culinary' },
              { rank: 6, name: 'Leather Shopping at the Tanneries', price: 'Varies', time: '1-2 hours', category: 'Shopping' },
              { rank: 7, name: 'Volubilis Roman Ruins', price: 'From 70 MAD', time: 'Full day', category: 'Day Trip' },
              { rank: 8, name: 'Pottery Workshop', price: 'From 150 MAD', time: '2-3 hours', category: 'Artisan' },
              { rank: 9, name: 'Traditional Hammam', price: 'From 15 MAD', time: '1-2 hours', category: 'Wellness' },
              { rank: 10, name: 'Riad Dinner Experience', price: 'From 250 MAD', time: '2-3 hours', category: 'Fine Dining' },
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

      {/* ── Historical & Cultural Landmarks ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historical &amp; Cultural Landmarks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fes was founded in 789 AD and has been a center of Islamic scholarship, artisan craft, and trade for over
            twelve centuries. These are the monuments and sites that tell its extraordinary story.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {historicalAttractions.map((attraction) => {
              const AttrIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttrIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {attraction.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {attraction.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {attraction.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {attraction.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {attraction.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {attraction.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Museums & Cultural Sites ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Museums &amp; Cultural Sites
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fes museums are housed in some of the most beautiful buildings in Morocco — restored palaces and fondouks
            that are works of art in their own right. The collections showcase centuries of Fassi craftsmanship.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most museums are closed on Tuesdays. Check opening times during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {museumsAndCulture.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Food & Culinary Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Culinary Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fes is the culinary capital of Morocco. Fassi cuisine is the most refined in the country, blending
            Andalusian, Berber, and Arab influences into dishes of extraordinary complexity and flavor.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All food prices are starting prices. Tourist-area restaurants charge 30-50% more than local neighborhoods.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodExperiences.map((item) => {
              const FoodIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Artisan & Workshop Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Artisan &amp; Workshop Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fes is the artisan capital of Morocco. Crafts that have been practiced here for centuries — pottery,
            zellige tilework, leatherwork, metalwork — are still alive in the workshops of the medina.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Workshop visits are usually free. Hands-on experiences require booking. Ask your riad for recommendations.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {artisanExperiences.map((item) => {
              const ArtIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ArtIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Day Trips & Excursions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fes is surrounded by remarkable destinations. Roman ruins, alpine forests, holy towns, and
            another imperial city are all within easy reach for a day trip.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Day trip prices are starting prices per person. Private transport costs more but offers flexibility. Book through your riad or online.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {dayTrips.map((item) => {
              const TripIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Shopping & Souks ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Fes souks are the most traditional and authentic in Morocco. Unlike other cities, much of what
            you find here is still made by local artisans using centuries-old techniques.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Souk prices are negotiable for crafts and goods. Food and spice prices are usually close to fair from the start.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {shoppingExperiences.map((item) => {
              const ShopIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ShopIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Wellness & Relaxation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bath className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wellness &amp; Relaxation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            After the intensity of the medina, Fes offers wonderful ways to unwind — from centuries-old
            neighborhood hammams to the serene courtyards of traditional riads.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Public hammams are single-gender. Tourist spas may offer mixed sessions. Ask your riad for neighborhood recommendations.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {wellnessExperiences.map((item) => {
              const WellIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WellIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Budget Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            10 Budget Tips for Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies to stretch your budget further without missing out on any of the best experiences.
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

      {/* ── Insider Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that makes the difference between a good trip and an unforgettable one.
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

      {/* ── Sample 3-Day Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 3-Day Fes Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical day-by-day plan covering the essential experiences. Adjust based on your interests and pace.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: The Medina &amp; Major Monuments
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Enter through Bab Bou Jeloud and visit the Bou Inania Madrasa (from 30 MAD) right at 9 AM.
                      Walk down Talaa Kebira through the souks toward the Chouara Tannery. View the tannery from the terraces
                      above (tip from 20 MAD). Browse the leather shops for babouche slippers and bags.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit the Al-Attarine Madrasa (from 30 MAD) and admire Al-Qarawiyyin from outside. Explore the
                      spice souk and Place Seffarine. Visit the Dar Batha Museum (from 20 MAD). Lunch at a medina
                      restaurant (from 50 MAD). Rest at your riad during the heat.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a taxi to the Merenid Tombs for sunset panoramic views of the medina (free). Return for dinner
                      at a riad restaurant (from 200 MAD) or eat street food near Bab Bou Jeloud (from 30-50 MAD).
                      Estimated Day 1 cost: from 250-450 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Cooking, Crafts &amp; Culture
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Half-day cooking class (from 300 MAD) including a guided market tour, preparing 3-5 Fassi dishes
                      (pastilla, tagine, couscous), and eating your creations. Most classes run from 9 AM to 1 PM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit the pottery cooperative at Ain Nokbi (free visit / from 150 MAD workshop). Watch artisans
                      create the famous Fes blue ceramics. Explore the Mellah and visit the Ibn Danan Synagogue (from 20 MAD).
                      See the Royal Palace gates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Traditional hammam experience (from 15 MAD public / from 300 MAD spa). Dinner at Cafe Clock Fes
                      or a riad restaurant (from 120-400 MAD). Estimated Day 2 cost: from 450-900 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 3: Day Trip &amp; Farewell
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option A: Volubilis &amp; Meknes</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Full-day trip to the Volubilis Roman ruins (from 70 MAD entry) and the holy town of Moulay Idriss.
                      Continue to Meknes to see Bab Mansour and the Moulay Ismail mausoleum. Return to Fes by evening.
                      Tour from 300 MAD or private taxi from 400-500 MAD.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option B: Ifrane &amp; Cedar Forests</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Day trip to Ifrane and the Azrou cedar forest (from 200 MAD transport). See the Barbary macaque
                      monkeys, walk through the alpine town, and enjoy the mountain scenery. Lunch in Ifrane (from 80 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Final souk shopping for leather, ceramics, and spices. Farewell dinner at a riad (from 250 MAD).
                      One last walk through the medina as the evening call to prayer echoes through the alleys.
                      Estimated Day 3 cost: from 350-800 MAD (depending on option).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                3-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 800-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Free activities, street food, public hammam, train day trips</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 2,000-3,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">All major sights, cooking class, spa hammam, riad dinners</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 4,000-7,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private tours, fine dining, luxury spa, private transport</p>
                </div>
              </div>
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Fes Trip
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Fes?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the ancient medina to Roman ruins and cedar forests, Fes offers experiences that will stay with
            you forever. Start planning your trip with our complete city guide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fes-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Fes City Guide
            </Link>
            <Link
              href="/cooking-classes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Cooking Classes
            </Link>
            <Link
              href="/morocco-3-days"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Calendar className="w-5 h-5" />
              3 Days in Morocco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

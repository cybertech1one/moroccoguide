import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Car,
  Camera,
  Compass,
  Heart,
  Eye,
  Sparkles,
  Mountain,
  Info,
  Lightbulb,
  Users,
  Globe,
  BookOpen,
  Leaf,
  Shield,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Calendar,
  ArrowRight,
  Utensils,
  Bed,
  ShoppingBag,
  Landmark,
  Building,
  TreePine,
  Navigation,
  Wine,
  Music,
  Palette,
  Coffee,
  Footprints,
  Ticket,
  HandCoins,
  ThermometerSun,
  CloudSun,
  Umbrella,
  BadgeCheck,
  CircleDot,
  Map,
  Phone,
  MessageSquare,
  GraduationCap,
  Hammer,
  Train,
  Plane,
  Bus,
  HelpCircle,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Fes Travel Guide 2025-2026 | Morocco\'s Spiritual & Intellectual Capital | Medina, Tanneries & More',
  description:
    'The ultimate Fes travel guide. Explore the world\'s oldest medina, Al-Qarawiyyin University (859 AD), Chouara Tannery, Bou Inania Madrasa, and Bab Boujloud. Best restaurants, riads, day trips to Meknes & Volubilis, crafts shopping, festivals, budget tips, and practical advice for Morocco\'s spiritual capital.',
  keywords: [
    'Fes travel guide',
    'Fes Morocco',
    'Fes el-Bali',
    'Fes medina',
    'Al-Qarawiyyin University',
    'Al-Qarawiyyin Mosque',
    'Chouara Tannery Fes',
    'Bou Inania Madrasa',
    'Bab Boujloud Blue Gate',
    'Fes riads',
    'Fes restaurants',
    'Dar Batha Museum',
    'Merenid Tombs',
    'Fes el-Jdid',
    'Fes pottery',
    'Fes blue ceramics',
    'Fes leather',
    'Fes day trips',
    'Meknes from Fes',
    'Volubilis Roman ruins',
    'Fes Festival Sacred Music',
    'best time to visit Fes',
    'Fes food guide',
    'Fes shopping guide',
    'Fes safety tips',
    'Nejjarine Museum Fes',
    'Place Seffarine',
    'Royal Palace Fes',
    'Mellah Fes',
    'Fes cooking classes',
  ],
  openGraph: {
    title: 'Fes Travel Guide 2025-2026 | Morocco\'s Spiritual & Intellectual Capital',
    description:
      'Everything you need for Fes: the world\'s largest car-free urban area, medieval madrasas, legendary tanneries, artisan quarters, traditional riads, and day trips to Meknes, Volubilis, and the Middle Atlas.',
    url: 'https://moroccoguide.com/fes-guide',
    type: 'article',
    images: [
      {
        url: '/images/hero-fes-tanneries.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Fes medina with minarets and traditional rooftops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fes Travel Guide 2025-2026 | Morocco\'s Spiritual Capital',
    description:
      'Complete guide to Fes: Al-Qarawiyyin University, Chouara Tannery, Bou Inania Madrasa, Blue Gate, riads, food, crafts, day trips, and practical tips for the world\'s oldest medina.',
    images: ['/images/hero-fes-tanneries.webp'],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/fes-guide',
  },
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  { label: 'Population', value: '1.2 million', icon: Users },
  { label: 'Founded', value: '789 AD', icon: BookOpen },
  { label: 'Elevation', value: '410 meters', icon: Mountain },
  { label: 'Airport', value: 'FEZ (Saiss)', icon: Globe },
  { label: 'Language', value: 'Arabic, French, Berber', icon: MessageSquare },
  { label: 'Currency', value: 'Moroccan Dirham (MAD)', icon: DollarSign },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
  { label: 'Best Months', value: 'March-May, Sep-Nov', icon: Calendar },
];

/* =====================================================================
   DATA: FES ESSENTIALS
   ===================================================================== */

const essentialTips = [
  {
    icon: Info,
    title: 'Hire a Guide',
    description: 'Fes el-Bali is the largest car-free urban area on Earth with over 9,000 alleyways. A licensed guide (150-300 MAD for a half day) is highly recommended for your first day. They know the hidden gems, prevent you from getting hopelessly lost, and keep persistent touts at bay.',
  },
  {
    icon: Footprints,
    title: 'Wear Sturdy Shoes',
    description: 'The medina streets are uneven cobblestone, often slippery, and frequently steep. Comfortable closed-toe shoes with good grip are essential. Sandals and heels are a recipe for twisted ankles. You will walk 15,000 to 20,000 steps a day exploring Fes el-Bali.',
  },
  {
    icon: HandCoins,
    title: 'Carry Small Bills',
    description: 'Many medina shops cannot break large notes. Carry plenty of 10, 20, and 50 MAD bills. ATMs are available at Bab Boujloud, Place Rcif, and throughout the Ville Nouvelle. Tipping is customary: 10-15% at restaurants, 20-50 MAD for guides per half day.',
  },
  {
    icon: Globe,
    title: 'Connectivity',
    description: 'Buy a local SIM card at Fes-Saiss Airport or in the Ville Nouvelle (Maroc Telecom or Orange, about 30 MAD with data). Wi-Fi is available in most riads. GPS signal inside the deep medina can be unreliable, so download offline maps in advance.',
  },
  {
    icon: Coffee,
    title: 'Mint Tea Ritual',
    description: 'Moroccan mint tea is the social currency of Fes. Refusing tea when offered by a shopkeeper is considered impolite. It is extremely sweet. You will be offered tea constantly in the medina, especially in craft shops. Accepting does not obligate you to buy.',
  },
  {
    icon: Calendar,
    title: 'Ramadan Awareness',
    description: 'During Ramadan, many restaurants close during daylight hours and the medina is quieter until sunset. Eating, drinking, or smoking in public during fasting hours is disrespectful. Evenings become magical with festive food stalls and late-night energy throughout the medina.',
  },
];

/* =====================================================================
   DATA: TOP ATTRACTIONS
   ===================================================================== */

const attractions = [
  {
    name: 'Fes el-Bali (The Medina)',
    description:
      'The largest car-free urban area in the world and a UNESCO World Heritage Site since 1981. Founded in the 9th century, this medieval labyrinth contains over 9,000 narrow alleyways, 11,000 historic buildings, 350 mosques, and countless fondouks (caravanserais). The sensory overload is absolute: the smell of cedar and leather, the sound of hammers on brass, the sight of donkeys carrying goods through passages barely wide enough for two people. Fes el-Bali is not a museum. It is a living, breathing medieval city where 150,000 people work, trade, pray, and live exactly as their ancestors have for twelve centuries.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'UNESCO Heritage',
    rating: 4.9,
    hours: 'Open 24 hours (shops close by sunset)',
    price: 'Free',
    tip: 'Enter through Bab Boujloud and follow the main artery of Talaa Kebira downhill. This is the medina\'s spine and leads past most major attractions. Getting lost is inevitable and part of the charm, but you can always ask anyone to point you back to Talaa Kebira.',
  },
  {
    name: 'Al-Qarawiyyin Mosque & University',
    description:
      'Founded in 859 AD by Fatima al-Fihri, a woman of extraordinary vision, Al-Qarawiyyin is recognized by UNESCO and the Guinness Book of World Records as the oldest continuously operating university in the world. For over 1,160 years, scholars have studied theology, law, mathematics, astronomy, and medicine within these walls. The mosque can hold 20,000 worshippers and features a stunning courtyard with zellige tilework, carved stucco, and cedarwood screens. The adjacent library, restored in 2016, contains manuscripts dating to the 9th century, including a 9th-century Quran written on camel skin.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Historic University',
    rating: 4.9,
    hours: 'Non-Muslims cannot enter the mosque; the library has limited visiting hours',
    price: 'Exterior and courtyard views are free',
    tip: 'While non-Muslims cannot enter the prayer hall, you can glimpse the spectacular courtyard through several doorways along the surrounding streets. The best vantage point is through the main entrance on the western side. The restored library occasionally opens for guided visits; ask your riad to arrange one.',
  },
  {
    name: 'Chouara Tannery',
    description:
      'The largest and oldest of the three medieval tanneries in Fes, operating continuously since the 11th century. Hundreds of stone vessels filled with vivid dyes of saffron yellow, poppy red, indigo blue, and mint green stretch across an open-air courtyard where tanners work waist-deep in the vats using methods unchanged for a thousand years. The process begins with soaking hides in pigeon droppings and quicklime to soften them, then dyeing with natural pigments. The result is the supple, world-famous Fes leather. The smell is legendarily pungent, which is why the surrounding leather shops hand out sprigs of fresh mint to hold under your nose.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Historic Tannery',
    rating: 4.7,
    hours: 'Viewable from surrounding terraces daily, best 9:00 AM - 4:00 PM',
    price: 'Free to view from shop terraces (tipping 10-20 MAD is customary)',
    tip: 'Visit in the morning when the light is best and the workers are most active. The leather shops surrounding the tannery will invite you to their terraces for free, but expect a sales pitch afterward. There is no obligation to buy. The terrace at Terrasse de Tanneurs offers the widest panoramic view.',
  },
  {
    name: 'Bou Inania Madrasa',
    description:
      'The most lavishly decorated theological college in Morocco and one of the few religious buildings in Fes open to non-Muslims. Built between 1350 and 1357 by the Marinid Sultan Abu Inan Faris, every surface is covered in breathtaking zellige tilework, carved stucco arabesques, and intricately sculpted cedarwood. The central courtyard features a marble floor, an ablutions fountain, and a water clock (clepsydra) of 13 wooden windows and brass bowls that is the only surviving medieval water clock in the Islamic world. The rooftop offers stunning views over the medina.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Historic Madrasa',
    rating: 4.8,
    hours: '9:00 AM - 6:00 PM daily (closed during Friday prayers)',
    price: '30 MAD',
    tip: 'Visit at opening time for the best light on the zellige tilework. Look up at every surface; the carved cedarwood ceilings are among the finest in Morocco. The water clock mechanism on the exterior wall facing Talaa Kebira is easy to miss but historically significant.',
  },
  {
    name: 'Dar Batha Museum',
    description:
      'Housed in a stunning 19th-century Hispano-Moorish palace built by Sultan Moulay Hassan I, this museum showcases the best of Fes craftsmanship across the centuries. The collection includes exquisite examples of Fassi woodcarving, zellige tilework, embroidery, Berber carpets, wrought iron, and most famously the cobalt blue ceramics that are synonymous with Fes. The Andalusian garden courtyard with its towering cypress trees, fountains, and birdsong is one of the most peaceful retreats in the entire medina.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Museum',
    rating: 4.5,
    hours: '9:00 AM - 5:00 PM (closed Tuesdays)',
    price: '20 MAD',
    tip: 'The garden alone is worth the entry fee on a hot day. The ceramics collection on the upper floor is the highlight, featuring the distinctive "Fes blue" glaze that has been the city\'s signature since the 14th century. Photography is permitted.',
  },
  {
    name: 'Merenid Tombs',
    description:
      'The ruined tombs of the Marinid dynasty sultans crown the hilltop north of Fes el-Bali, offering the most spectacular panoramic view of the entire medina. Built in the 14th century, the tombs themselves are now atmospheric ruins of carved stone and crumbling arches, but the location is the real treasure. At sunset, the entire medina stretches below you in a tapestry of minarets, satellite dishes, and terracotta rooftops, with the call to prayer echoing from hundreds of mosques simultaneously.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Historic Ruins',
    rating: 4.6,
    hours: 'Open 24 hours (best at sunset)',
    price: 'Free',
    tip: 'Come at sunset for one of the most unforgettable views in all of Morocco. Take a petit taxi up and walk down. The area is generally safe during daylight and early evening, but avoid visiting alone after dark. The nearby Hotel Les Merinides has a terrace bar with the same view if you prefer a drink with your panorama.',
  },
  {
    name: 'Mellah (Jewish Quarter)',
    description:
      'Founded in 1438, the Fes Mellah was the first Jewish ghetto in Morocco and once home to a thriving community of over 250,000 Jewish residents. The architecture is distinctive: balconied houses with outward-facing windows and wrought-iron railings, contrasting with the inward-facing homes of the Muslim medina. Today it contains the beautifully restored Ibn Danan Synagogue (17th century), the vast and haunting Jewish Cemetery with thousands of white-washed tombs overlooking the medina, and the vibrant Mellah Market where locals buy spices, dried fruits, and household goods at local prices.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Historic Quarter',
    rating: 4.4,
    hours: 'Ibn Danan Synagogue: 9:00 AM - 6:00 PM; Cemetery: daylight hours',
    price: '10 MAD (synagogue), 10 MAD (cemetery)',
    tip: 'The Jewish Cemetery is deeply moving and offers a unique elevated perspective over the medina. The Ibn Danan Synagogue has been beautifully restored with original 17th-century features. The Mellah Market is far less touristy than the medina souks and offers genuine local prices.',
  },
  {
    name: 'Borj Nord (Arms Museum)',
    description:
      'A 16th-century Saadian fortress perched on the hillside above Fes el-Bali, now housing an impressive arms museum with over 8,000 pieces spanning thirteen centuries of Moroccan military history. The collection includes swords, daggers, muskets, cannons, and a massive 5-ton bronze cannon from the 1578 Battle of the Three Kings. Beyond the collection, the hilltop location provides sweeping views across the medina that rival the Merenid Tombs without the climb.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Fortress & Museum',
    rating: 4.3,
    hours: '9:00 AM - 5:00 PM (closed Tuesdays)',
    price: '20 MAD',
    tip: 'The panoramic views from the fortress walls are superb and less crowded than the Merenid Tombs. History enthusiasts will appreciate the Battle of the Three Kings exhibit. Combine with a visit to the Merenid Tombs in a single hilltop excursion.',
  },
  {
    name: 'Royal Palace (Dar el-Makhzen)',
    description:
      'The Royal Palace of Fes covers an astonishing 80 hectares, making it one of the largest royal palaces in the world. While the interior is closed to visitors as it remains an active royal residence, the seven monumental brass doors at the main entrance are a masterpiece of Moroccan craftsmanship. Each door features intricate geometric patterns in hammered brass and zellige tilework surrounds in royal blue and green. The scale and opulence of the entrance alone conveys the importance Fes holds in Moroccan royal heritage.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Royal Palace',
    rating: 4.5,
    hours: 'Exterior viewable 24 hours; interior closed to public',
    price: 'Free (exterior)',
    tip: 'Visit for the iconic brass doors and zellige surrounds, which are among the most photographed architectural details in Morocco. The best time for photography is morning when the sun illuminates the golden doors. The adjacent Place des Alaouites is a good spot for wide-angle shots.',
  },
  {
    name: 'Nejjarine Museum of Wooden Arts & Crafts',
    description:
      'Set in a meticulously restored 18th-century fondouk (caravanserai) on the photogenic Place Nejjarine, this museum celebrates the extraordinary tradition of Fassi woodworking. Three floors display carved cedarwood doors, painted ceilings, musical instruments, Quran stands, and the intricate moucharabieh lattice screens that adorn Fes\'s finest buildings. The fondouk itself, with its central courtyard, carved galleries, and original wooden beams, is as much a masterpiece as the collection it houses.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Museum',
    rating: 4.6,
    hours: '10:00 AM - 5:00 PM daily',
    price: '20 MAD',
    tip: 'The rooftop terrace has one of the best medina views in Fes and is a wonderful place to rest. Place Nejjarine itself, with its ornate tiled fountain, is one of the most beautiful small squares in the medina. The nearby carpenters\' souk smells of freshly cut cedar.',
  },
  {
    name: 'Place Seffarine',
    description:
      'The coppersmith and brassworker square has been ringing with the sound of hammers on metal for over a thousand years. Artisans sit cross-legged at the edges of this small, tree-shaded plaza, hand-hammering enormous cauldrons, trays, teapots, and decorative platters using techniques passed down through generations. The square sits at the foot of the Al-Qarawiyyin library and is one of the most authentic, un-touristy scenes in Fes. The rhythmic metallic percussion is the soundtrack of the medina.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Artisan Quarter',
    rating: 4.5,
    hours: 'Artisans work approximately 8:00 AM - 6:00 PM',
    price: 'Free',
    tip: 'Sit on the stone bench under the ancient tree and simply watch and listen. This is living heritage at its most authentic. The craftsmen are generally happy to be photographed and will explain their techniques. Buying a small hand-hammered piece directly from the maker is a meaningful souvenir.',
  },
  {
    name: 'Bab Boujloud (The Blue Gate)',
    description:
      'The iconic western gateway to the Fes el-Bali medina and the most photographed monument in the city. Built in 1913, the gate features three symmetrical horseshoe arches adorned with stunning blue zellige tilework on the exterior (representing the color of Fes) and green zellige on the interior (representing Islam). The gate frames a dramatic view into the medina, with the minaret of the Bou Inania Madrasa visible through the central arch. Bab Boujloud is both a functional entrance and an architectural statement of Fes\'s identity.',
    image: '/images/hero-fes-tanneries.webp',
    type: 'Historic Gate',
    rating: 4.7,
    hours: 'Open 24 hours',
    price: 'Free',
    tip: 'The gate is beautiful from both sides, but the blue exterior facing the Ville Nouvelle is the classic photo. The cafes on Place Boujloud offer rooftop terraces with perfect views. Enter through the gate and immediately turn left for the best angle looking back at the interior green tilework.',
  },
];

/* =====================================================================
   DATA: NEIGHBORHOODS
   ===================================================================== */

const neighborhoods = [
  {
    name: 'Fes el-Bali (Old Medina)',
    icon: Landmark,
    character: 'Medieval, labyrinthine, overwhelming',
    description:
      'The heart and soul of Fes and one of the most extraordinary urban environments on Earth. Founded in the 9th century, this UNESCO World Heritage medina is the largest car-free urban area in the world, home to 150,000 residents, 11,000 historic buildings, and over 9,000 alleyways. Every turning reveals a new scene: a donkey laden with hides, a brass worker hammering a tray, children playing in a sunlit courtyard, the minaret of a 12th-century mosque. The sensory density is unmatched anywhere in Morocco.',
    highlights: ['Al-Qarawiyyin University', 'Chouara Tannery', 'Bou Inania Madrasa', 'Artisan souks', 'Bab Boujloud'],
    bestFor: 'Culture seekers, history lovers, photographers, adventurous travelers',
    stayHere: 'Stay in a riad within the medina for the full Fes experience. You will wake to the call to prayer, breakfast on a rooftop terrace overlooking minarets, and step out your door into a thousand years of living history.',
  },
  {
    name: 'Fes el-Jdid (New City)',
    icon: Building,
    character: 'Royal, historic, less chaotic',
    description:
      'Built in 1276 by the Marinid dynasty as their capital, Fes el-Jdid (the "New Fes") is actually over 700 years old. It contains the vast Royal Palace complex, the historic Mellah (Jewish Quarter), the Grand Mosque of Fes el-Jdid, and the Moulay Abdallah Quarter. The streets are wider than Fes el-Bali, the atmosphere calmer, and the blend of royal, Jewish, and Islamic architecture is unique. The Mellah Market is one of the best places in Fes for genuine local shopping without tourist inflation.',
    highlights: ['Royal Palace gates', 'Mellah (Jewish Quarter)', 'Ibn Danan Synagogue', 'Jewish Cemetery', 'Mellah Market'],
    bestFor: 'History buffs, those wanting a calmer medina experience, cultural explorers',
    stayHere: 'A few excellent riads offer proximity to both the Royal Palace area and Fes el-Bali. The neighborhood is quieter at night and well-connected to both the old medina and Ville Nouvelle.',
  },
  {
    name: 'Ville Nouvelle (Modern City)',
    icon: Globe,
    character: 'French colonial, modern, relaxed',
    description:
      'The French-built modern district laid out in the early 20th century with wide tree-lined boulevards, European-style cafes, international restaurants, and modern amenities. Avenue Hassan II is the main artery, lined with banks, shops, and restaurants. The Ville Nouvelle is where you find the train station, long-distance bus terminal, modern hotels, and a welcome contrast to the intensity of the medina. It feels like an entirely different city and offers a useful decompression zone.',
    highlights: ['Avenue Hassan II', 'Train station', 'Modern restaurants', 'Banks & ATMs', 'Shopping'],
    bestFor: 'Modern comfort seekers, business travelers, those who prefer contemporary hotels',
    stayHere: 'Hotels here offer Western-standard amenities and easy access to the medina by petit taxi (15-20 MAD, 10 minutes). Good option if the medina feels too intense for sleeping.',
  },
];

/* =====================================================================
   DATA: CRAFTS & SHOPPING
   ===================================================================== */

const craftQuarters = [
  {
    name: 'Pottery & Ceramics (Fes Blue)',
    specialty: 'Cobalt blue glazed ceramics',
    icon: Palette,
    description: 'Fes is world-famous for its distinctive cobalt blue and white ceramics, a tradition dating to the 14th century. The blue comes from a cobalt oxide glaze that was originally imported from Persia. Visit the pottery cooperative at Ain Nokbi on the outskirts of the medina where you can watch every stage from clay preparation to hand-painting to kiln firing. A hand-painted tagine plate starts at 50 MAD; a large decorative charger can reach 2,000 MAD for museum-quality work.',
  },
  {
    name: 'Leather Quarter (Chouara & Sidi Moussa)',
    specialty: 'Bags, jackets, slippers, poufs',
    icon: ShoppingBag,
    description: 'Fes leather has been prized for centuries, giving English the word "Morocco" as a synonym for fine leather. The tanneries produce goat, sheep, cow, and camel leather in every color. The surrounding shops sell bags, wallets, belts, jackets, babouche slippers, and the iconic leather poufs. Unstuffed poufs start at 120 MAD. For the best quality, check that the leather is soft and supple, the stitching is even, and there is no chemical smell.',
  },
  {
    name: 'Place Seffarine (Brasswork)',
    specialty: 'Hammered brass & copper',
    icon: Hammer,
    description: 'The metalworkers of Place Seffarine create everything from enormous wedding cauldrons to delicate tea trays by hand-hammering sheets of brass and copper. The sound of their work has echoed through this square for over a millennium. A hand-hammered brass tray starts at 80 MAD; an ornate engraved tea service can cost 500-2,000 MAD depending on size and complexity.',
  },
  {
    name: 'Carpet Souks',
    specialty: 'Berber rugs, kilims, city carpets',
    icon: Eye,
    description: 'Fes is a major carpet trading center with dealers sourcing from across Morocco. The medina contains dozens of carpet shops where buying is an elaborate ritual involving tea, viewing, and negotiation. Fes city carpets are distinguished by their deep reds, intricate geometric patterns, and dense knotting. A quality handmade Berber rug starts around 1,500 MAD; silk-blend Fes carpets can reach 20,000 MAD for exceptional pieces.',
  },
  {
    name: 'Woodworking (Nejjarine Quarter)',
    specialty: 'Carved cedar, painted wood, lattice screens',
    icon: TreePine,
    description: 'The carpenters\' quarter around Place Nejjarine has produced master woodworkers for centuries. Atlas cedar is the material of choice, prized for its fragrance, durability, and resistance to insects. Artisans carve intricate geometric patterns, create moucharabieh lattice screens, and build traditional furniture. A carved cedar box starts at 40 MAD; a full moucharabieh screen panel can cost several thousand MAD.',
  },
  {
    name: 'Textile & Embroidery Souks',
    specialty: 'Silk, kaftans, Fassi embroidery',
    icon: Sparkles,
    description: 'Fes has a centuries-old tradition of fine embroidery, particularly the intricate geometric patterns in blue thread on white linen that are unique to the city. The textile souks sell kaftans, djellabas, scarves, and table linens. Fassi embroidered tablecloths start at 200 MAD for simple designs; a fully hand-embroidered wedding kaftan can take six months of work and cost 5,000-30,000 MAD.',
  },
];

const hagglingTips = [
  'Start at roughly one-quarter to one-third of the asking price. Fes shopkeepers start higher than Marrakech.',
  'Never show excitement about an item. Browse casually, ask the price as an afterthought.',
  'Be prepared to walk away. The shopkeeper will often call you back with a dramatically lower price.',
  'Compare prices at several shops before committing, especially for leather and ceramics.',
  'Haggling is a social ritual in Fes. Be friendly, drink the tea, enjoy the conversation, but stay firm on your price.',
  'Have small bills ready. Paying with large notes after negotiating a low price undermines your position.',
  'Fixed-price cooperatives (like the pottery cooperative at Ain Nokbi) establish fair market value before you enter the souks.',
  'Quality varies enormously. For leather, check suppleness, stitching, and smell. For ceramics, check the weight, glaze consistency, and sound when tapped.',
];

/* =====================================================================
   DATA: FOOD GUIDE
   ===================================================================== */

const restaurants = [
  {
    name: 'Cafe Clock',
    cuisine: 'Modern Moroccan-Fusion',
    price: '$$',
    location: '7 Derb el Magana, Fes el-Bali',
    description: 'The cultural heartbeat of the Fes medina, set in a beautifully restored four-story riad. Famous for its camel burger (75 MAD), Cafe Clock also serves excellent traditional dishes, fresh juices, and legendary carrot cake. The rooftop terrace overlooks the medina and hosts weekly cultural events including Gnaoua music nights, storytelling sessions, and calligraphy workshops.',
  },
  {
    name: 'Dar Roumana',
    cuisine: 'Refined Moroccan',
    price: '$$$',
    location: 'Derb el Amer, Zkak Roumana, Fes el-Bali',
    description: 'Set in a stunning 600-year-old riad, Dar Roumana serves some of the finest food in Fes. The set dinner menu (400-500 MAD) changes nightly and features creative interpretations of Fassi classics: pigeon pastilla with cinnamon and almonds, lamb with prunes and sesame, and desserts using pomegranate from the courtyard tree that gives the restaurant its name. Reservations essential.',
  },
  {
    name: 'The Ruined Garden',
    cuisine: 'Moroccan-Mediterranean',
    price: '$$',
    location: 'Sidi Ahmed Chaoui, Fes el-Bali',
    description: 'Hidden in the ruins of a partially collapsed riad where plants have reclaimed the architecture, this atmospheric restaurant serves inventive salads, grilled meats, and Moroccan classics in one of the most unique settings in Fes. The partially open-air dining room with fig trees growing through the walls is Instagram gold. Lunch is the best time to visit.',
  },
  {
    name: 'Fes Cooking School (Palais Amani)',
    cuisine: 'Cooking Classes & Dining',
    price: '$$',
    location: 'Palais Amani, Oued Souafine, Fes el-Bali',
    description: 'A hands-on cooking experience that begins with a guided tour of the spice markets and food stalls of the medina, followed by preparation of a multi-course Fassi meal. The half-day class (600 MAD) includes market tour, cooking instruction, and eating your creation on the terrace. The restaurant is also open for non-cooking guests with excellent set menus.',
  },
  {
    name: 'Riad Rcif Restaurant',
    cuisine: 'Traditional Fassi',
    price: '$$',
    location: 'Place Rcif, Fes el-Bali',
    description: 'A beloved local institution known for its authentic Fassi home cooking. The menu features regional specialties rarely found in tourist restaurants: rfissa (shredded flatbread with lentils and chicken), tanjia fassia, and seffa medfouna (sweet vermicelli with chicken). The rooftop terrace overlooks the bustling Place Rcif.',
  },
  {
    name: 'Nagham Cafe',
    cuisine: 'Moroccan Cafe',
    price: '$',
    location: 'Near Bab Boujloud, Fes el-Bali',
    description: 'A popular local cafe steps from the Blue Gate serving excellent traditional breakfasts, fresh-squeezed juices, and simple but delicious Moroccan comfort food at local prices. The msemen (layered flatbread) with honey and amlou (almond butter) is the perfect medina breakfast for under 30 MAD.',
  },
];

const streetFood = [
  { item: 'Harira (chickpea & lentil soup)', price: '5-10 MAD', where: 'Throughout the medina, especially near Bab Boujloud' },
  { item: 'Brochettes (lamb or beef kebabs)', price: '15-30 MAD', where: 'Place Rcif, Talaa Kebira food stalls' },
  { item: 'Sfenj (Moroccan donuts)', price: '1-2 MAD each', where: 'Morning vendors throughout the medina' },
  { item: 'Msemen & baghrir (flatbreads)', price: '3-5 MAD', where: 'Breakfast stalls near Bab Boujloud' },
  { item: 'Bocadillos (sandwiches)', price: '15-25 MAD', where: 'Hole-in-the-wall sandwich shops on Talaa Kebira' },
  { item: 'Fresh orange juice', price: '5-8 MAD', where: 'Juice carts throughout the medina' },
  { item: 'Pastilla (sweet pigeon or chicken pie)', price: '30-50 MAD', where: 'Specialty bakeries in the medina' },
  { item: 'Snail soup (babouche)', price: '10-15 MAD', where: 'Snail carts near Place Rcif and Bab Boujloud' },
];

/* =====================================================================
   DATA: WHERE TO STAY
   ===================================================================== */

const accommodationsByBudget = [
  {
    category: 'Budget Riads & Hostels',
    priceRange: '150-400 MAD/night',
    icon: Bed,
    options: [
      { name: 'Funky Fes Hostel', area: 'Fes el-Bali', highlight: 'The best hostel in the medina with dorms from 100 MAD. Rooftop terrace, social atmosphere, and excellent staff who organize medina tours.' },
      { name: 'Riad Verus', area: 'Fes el-Bali', highlight: 'A beautifully restored small riad with doubles from 250 MAD. Courtyard with fountain, traditional breakfast included, and a welcoming Moroccan family.' },
      { name: 'Dar Seffarine', area: 'Fes el-Bali (Place Seffarine)', highlight: 'A characterful guesthouse overlooking the metalworkers\' square. Simple rooms with thick walls and authentic atmosphere. From 300 MAD including breakfast.' },
    ],
  },
  {
    category: 'Mid-Range Riads',
    priceRange: '500-1,500 MAD/night',
    icon: Heart,
    options: [
      { name: 'Riad Fes', area: 'Fes el-Bali', highlight: 'An award-winning riad blending traditional architecture with contemporary design. Pool, hammam, cooking classes, and a rooftop restaurant with panoramic views.' },
      { name: 'Riad Laaroussa', area: 'Fes el-Bali', highlight: 'A 17th-century palace transformed into an intimate riad with museum-quality zellige, heated pool, hammam, and one of the finest restaurants in the medina.' },
      { name: 'Dar Roumana', area: 'Fes el-Bali', highlight: 'A 600-year-old riad with five individually designed suites, a celebrated restaurant, and a pomegranate-tree courtyard. Culinary focused with cooking classes available.' },
    ],
  },
  {
    category: 'Luxury Riads & Hotels',
    priceRange: '2,000-6,000+ MAD/night',
    icon: Sparkles,
    options: [
      { name: 'Palais Faraj Suites & Spa', area: 'Fes el-Bali (hilltop)', highlight: 'A palatial five-star overlooking the entire medina with infinity pool, full-service spa, hammam, and the finest rooftop restaurant in Fes. Breathtaking views from every room.' },
      { name: 'Riad Fes (Royal Suite)', area: 'Fes el-Bali', highlight: 'The premium experience at this award-winning property: private terrace, personal butler, and access to the exclusive rooftop spa and pool.' },
      { name: 'Hotel Sahrai', area: 'Hillside overlooking medina', highlight: 'A sleek contemporary hotel with pool, Givenchy spa, rooftop bar, and sweeping views. Modern luxury for those who want five-star amenities without medina intensity.' },
    ],
  },
  {
    category: 'Ville Nouvelle Hotels',
    priceRange: '300-1,200 MAD/night',
    icon: Building,
    options: [
      { name: 'Barcelo Fes Medina', area: 'Ville Nouvelle', highlight: 'Modern four-star with pool, restaurant, and easy medina access. Air-conditioned comfort at reasonable rates. From 500 MAD.' },
      { name: 'Ibis Fes', area: 'Ville Nouvelle', highlight: 'Reliable international chain near the train station. Clean, modern, air-conditioned. Budget-friendly from 300 MAD for those who prefer predictability.' },
      { name: 'Hotel Across Fes', area: 'Ville Nouvelle', highlight: 'A contemporary boutique hotel with rooftop pool and bar. Walking distance to the Ville Nouvelle restaurants and a short taxi ride to the medina.' },
    ],
  },
];

/* =====================================================================
   DATA: GETTING AROUND
   ===================================================================== */

const transportModes = [
  {
    mode: 'Walking the Medina',
    icon: Footprints,
    cost: 'Free',
    description: 'The medina is entirely car-free and must be explored on foot. Donkeys and mules are the only vehicles; a shout of "balak!" (watch out!) means one is coming and you should flatten yourself against the wall. The main arteries are Talaa Kebira (the upper route) and Talaa Seghira (the lower route), both running from Bab Boujloud downhill to the Al-Qarawiyyin mosque area. Download Maps.me or Organic Maps offline, which cover the medina better than Google Maps.',
    tips: ['Download Maps.me for offline medina navigation', 'Follow Talaa Kebira as your reference spine', 'Press against walls when you hear "balak!" (donkey warning)', 'Ask any shopkeeper for directions to Bab Boujloud if lost'],
  },
  {
    mode: 'Licensed Guide',
    icon: Compass,
    cost: '150-300 MAD for a half day',
    description: 'A licensed guide is the single best investment for your first day in Fes. The medina is genuinely bewildering and a guide opens doors both literal and figurative: they lead you to hidden workshops, explain the history behind every madrasa and fountain, prevent you from being hustled by touts, and ensure you do not miss the highlights. Arrange through your riad or the tourist office at Place de Florence in the Ville Nouvelle.',
    tips: ['Book through your riad for vetted, licensed guides', 'Half-day (3-4 hours) is sufficient for an overview', 'Agree on price and itinerary beforehand', 'Tip 50-100 MAD for excellent service'],
  },
  {
    mode: 'Petit Taxis (Red Taxis)',
    icon: Car,
    cost: '10-25 MAD within the city',
    description: 'Small red Mercedes taxis that hold up to three passengers. Essential for getting between the medina, Ville Nouvelle, and train station. Drivers should use the meter but many will try to negotiate a flat fare. A ride from Bab Boujloud to the Ville Nouvelle should cost 12-18 MAD on the meter. Taxis cannot enter the medina, so they drop you at the nearest gate.',
    tips: ['Always insist on the meter', 'Fes taxis are red (Marrakech are beige)', 'Cannot enter the medina; drop-off is at a bab (gate)', 'Maximum 3 passengers'],
  },
  {
    mode: 'Bus & Train',
    icon: Bus,
    cost: 'City bus: 3.5 MAD; Train varies',
    description: 'Fes has a functional city bus network connecting the Ville Nouvelle, train station, and medina gates. The main train station (Gare de Fes) has frequent services to Casablanca (3.5 hours, from 125 MAD), Rabat (2.5 hours, from 95 MAD), Marrakech (7 hours, from 195 MAD), and Meknes (40 minutes, from 25 MAD). The CTM and Supratours bus stations in the Ville Nouvelle serve destinations not reached by rail.',
    tips: ['Train to Meknes is just 40 minutes and very cheap', 'Book train tickets online at oncf.ma', 'CTM buses are more comfortable than local buses', 'Grand taxis to Meknes cost 25 MAD per seat from near Bab Boujloud'],
  },
];

/* =====================================================================
   DATA: DAY TRIPS
   ===================================================================== */

const dayTrips = [
  {
    name: 'Meknes & Volubilis',
    icon: Landmark,
    distance: '60 km to Meknes / 85 km to Volubilis',
    duration: 'Full day',
    price: '25-40 MAD (train/grand taxi to Meknes) + 200-500 MAD (transport to Volubilis)',
    description:
      'The essential Fes day trip combines two UNESCO World Heritage Sites in one journey. Meknes, the "Versailles of Morocco," was built by the megalomaniac Sultan Moulay Ismail in the 17th century with massive granaries, royal stables for 12,000 horses, and the monumental Bab Mansour gate. Volubilis, 30 km north of Meknes, is the best-preserved Roman ruins in North Africa, with stunning mosaics, triumphal arches, and columns set against rolling farmland. Start early and visit Volubilis in the morning before the heat, then spend the afternoon in Meknes.',
    highlights: ['Bab Mansour gate (Meknes)', 'Heri es-Souani granaries', 'Volubilis Roman mosaics', 'Triumphal Arch of Caracalla', 'Moulay Idriss Zerhoun holy town'],
  },
  {
    name: 'Ifrane & Middle Atlas',
    icon: TreePine,
    distance: '63 km / 1.5 hours',
    duration: 'Full day',
    price: '300-600 MAD (private transport or organized tour)',
    description:
      'Known as "Little Switzerland," Ifrane is a startlingly European alpine town at 1,650 meters elevation with red-roofed chalets, manicured gardens, and a famous stone lion carved by a German prisoner of war. The surrounding Middle Atlas is covered in ancient cedar forests inhabited by Barbary macaques, Morocco\'s only primate. The cedar forest at Azrou, 17 km south of Ifrane, is the best place to see these endangered monkeys in their natural habitat. In winter, the nearby ski resort of Michlifen offers Morocco\'s only alpine skiing.',
    highlights: ['Ifrane stone lion', 'Azrou cedar forests', 'Barbary macaques', 'Michlifen ski resort (winter)', 'Ain Vitale spring'],
  },
  {
    name: 'Sefrou & Cherry Festival',
    icon: Leaf,
    distance: '28 km / 30 minutes',
    duration: 'Half day',
    price: '10-15 MAD (grand taxi)',
    description:
      'A charming small town just 30 minutes from Fes with its own miniature medina, waterfalls (Cascades de Sefrou), and a fascinating cultural blend of Berber, Arab, and historically Jewish communities. Sefrou is famous throughout Morocco for its annual Cherry Festival (Fete des Cerises) in June, one of the oldest festivals in the country, featuring a cherry queen pageant, folk music, and celebration of the local harvest. Even outside festival season, the cascades and relaxed atmosphere make a pleasant escape from Fes.',
    highlights: ['Cascades de Sefrou', 'Cherry Festival (June)', 'Miniature medina', 'Bhalil cave houses (nearby)', 'Local market'],
  },
  {
    name: 'Moulay Yacoub Hot Springs',
    icon: Sparkles,
    distance: '20 km / 30 minutes',
    duration: 'Half day',
    price: '15 MAD (grand taxi) + 50-200 MAD (spa entry)',
    description:
      'Natural thermal hot springs with water emerging at 54 degrees Celsius, rich in sulfur and minerals believed to have therapeutic properties for skin conditions and joint pain. The modern spa complex offers thermal pools, hammams, and treatments at reasonable prices. The setting in a steep-sided valley is dramatic. Locals have bathed here for centuries. A perfect way to soothe tired muscles after days of medina walking.',
    highlights: ['Thermal hot springs (54C)', 'Spa treatments', 'Natural mineral pools', 'Valley scenery', 'Local hammam tradition'],
  },
  {
    name: 'Bhalil Cave Houses',
    icon: Mountain,
    distance: '33 km / 40 minutes',
    duration: 'Half day (combine with Sefrou)',
    price: '15-20 MAD (grand taxi)',
    description:
      'A remarkable Berber village where dozens of families still live in houses built into natural caves in the hillside. The cave homes are surprisingly spacious and comfortable, with painted interiors, electricity, and modern amenities built behind traditional stone facades. Several families welcome visitors for a small tip (20-30 MAD), offering tea and a tour of their extraordinary homes. The village is authentically off the tourist trail and offers a glimpse of living heritage.',
    highlights: ['Troglodyte cave houses', 'Local Berber hospitality', 'Hillside views', 'Authentic village life', 'Combine with Sefrou visit'],
  },
];

/* =====================================================================
   DATA: FESTIVALS & EVENTS
   ===================================================================== */

const festivals = [
  {
    name: 'Fes Festival of World Sacred Music',
    month: 'June (annually since 1994)',
    icon: Music,
    description: 'The crown jewel of Moroccan cultural events and one of the most prestigious world music festivals on the planet. For nine days each June, performers from every spiritual tradition converge on Fes: Sufi musicians from Turkey, gospel choirs from the United States, Gnaoua masters from Morocco, qawwali singers from Pakistan, and classical Indian artists. Concerts are held in extraordinary venues including the Bab Makina courtyard, Dar Batha garden, and intimate Sufi zawiyas. Tickets range from free for outdoor concerts to 200-600 MAD for headline evening performances.',
  },
  {
    name: 'National Festival of Amazigh Film',
    month: 'October',
    icon: Camera,
    description: 'An annual celebration of Amazigh (Berber) cinema and culture held in Fes, showcasing films in Tamazight and other Berber languages from Morocco and across North Africa. The festival promotes Amazigh cultural identity and includes screenings, panel discussions, and cultural events. A unique window into the indigenous heritage that predates the Arab arrival in Morocco.',
  },
  {
    name: 'Moussem of Moulay Idriss II',
    month: 'September',
    icon: Star,
    description: 'The annual religious festival honoring Moulay Idriss II, the founder of Fes and one of Morocco\'s most revered saints. The moussem features religious processions through the medina, traditional music, and a pilgrimage to the zaouia (shrine) of Moulay Idriss II in the heart of Fes el-Bali. The shrine itself is one of the holiest sites in Morocco and is visited by thousands of pilgrims year-round.',
  },
  {
    name: 'Fes Culinary Festival',
    month: 'April/May',
    icon: Utensils,
    description: 'A celebration of the extraordinary Fassi culinary tradition, which is considered the most refined in Morocco. Cooking demonstrations, tasting events, lectures on the history of Moroccan cuisine, and hands-on workshops led by master chefs and home cooks. Fes is the birthplace of many of Morocco\'s signature dishes, including pastilla and the elaborate diffa (feast) tradition.',
  },
];

/* =====================================================================
   DATA: BEST TIME TO VISIT
   ===================================================================== */

const monthlyWeather = [
  { months: 'March - May', temp: '18-28C', rating: 5, icon: Sun, verdict: 'The ideal time to visit Fes. Warm, sunny days perfect for exploring the medina on foot. Gardens and courtyards are in bloom. April is peak perfection with comfortable temperatures and occasional refreshing rain.' },
  { months: 'September - November', temp: '18-30C', rating: 5, icon: Leaf, verdict: 'Equally excellent. The intense summer heat has broken, autumn light is golden, and the olive and pomegranate harvests begin. October is arguably the single best month for Fes, combining pleasant weather with the Amazigh Film Festival.' },
  { months: 'December - February', temp: '8-16C', rating: 4, icon: CloudSun, verdict: 'Cool and pleasant during the day with cold evenings. Fewer tourists, lower riad prices, and a cozy atmosphere in the medina. Pack layers; nights can drop to 3-5C and riads with thick walls can be chilly. Rain is possible.' },
  { months: 'June', temp: '28-35C', rating: 3, icon: ThermometerSun, verdict: 'Getting hot but manageable. Mornings and evenings are delightful for exploration. The Fes Festival of World Sacred Music in June is worth the heat. Air-conditioned riads become essential for afternoon rest.' },
  { months: 'July - August', temp: '33-42C', rating: 2, icon: ThermometerSun, verdict: 'Brutally hot. Daytime temperatures regularly exceed 38C and the dense medina traps heat. If you visit, explore before 10 AM and after 5 PM only. The medina empties in the afternoon heat. Many Fassis leave the city entirely.' },
];

/* =====================================================================
   DATA: BUDGET GUIDE
   ===================================================================== */

const budgetBreakdown = [
  {
    category: 'Backpacker',
    dailyBudget: '250-450 MAD/day ($25-45)',
    icon: Footprints,
    details: [
      'Hostel dorm: 80-120 MAD/night',
      'Street food meals: 20-50 MAD/meal',
      'Walking (medina is free to explore)',
      'Free attractions: medina streets, tannery views, gates, souks',
      'Paid attractions: 20-30 MAD each (be selective)',
    ],
  },
  {
    category: 'Mid-Range',
    dailyBudget: '700-1,300 MAD/day ($70-130)',
    icon: Heart,
    details: [
      'Riad double room: 400-800 MAD/night',
      'Restaurant meals: 80-200 MAD/meal',
      'Licensed guide: 150-300 MAD half day',
      'All major attractions: 20-30 MAD each',
      'Cooking class: 400-600 MAD',
    ],
  },
  {
    category: 'Luxury',
    dailyBudget: '2,500-6,000+ MAD/day ($250-600+)',
    icon: Sparkles,
    details: [
      'Luxury riad or palace hotel: 2,000-6,000+ MAD/night',
      'Fine dining: 300-600 MAD/meal',
      'Private guide: 500-1,000 MAD/day',
      'Private day trip with driver: 1,500-2,500 MAD',
      'Spa & hammam: 400-1,500 MAD',
    ],
  },
];

/* =====================================================================
   DATA: SAFETY TIPS
   ===================================================================== */

const safetyTips = [
  {
    icon: Shield,
    title: 'General Safety',
    tips: [
      'Fes is generally safe for tourists. The medina can feel overwhelming but the people are welcoming and the crime rate against tourists is very low.',
      'The medina is confusing but not dangerous. If lost, ask any shopkeeper for directions to the nearest bab (gate) or landmark.',
      'Keep valuables in your riad safe. Carry only what you need in a secure bag worn cross-body. Pickpocketing exists in crowded areas.',
      'Women may receive verbal attention; dress modestly (shoulders and knees covered in the medina) and walk with purpose. A firm "la, shukran" (no, thank you) works.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Common Scams',
    tips: [
      'Fake guides: Young men offering to lead you through the medina then demanding payment. Politely decline or use your licensed guide. Say "I have a guide" even if you do not.',
      'Tannery bait: Being led to a tannery terrace "for free" then pressured to buy leather at inflated prices. View the tannery independently from any surrounding shop terrace.',
      'Wrong directions: Occasionally people give deliberately wrong directions to lead you past a relative\'s shop. Cross-reference with your offline map.',
      'Inflated taxi fares: Always insist on the meter. A ride within the city should never exceed 25-30 MAD.',
    ],
  },
  {
    icon: Phone,
    title: 'Emergency Information',
    tips: [
      'Tourist police: 19 (French and Arabic speaking)',
      'Ambulance: 15',
      'Fire: 15',
      'Pharmacies: Marked with a green cross. Several operate 24 hours in the Ville Nouvelle on Avenue Hassan II.',
      'Your riad staff are your best resource for any problem. They know the medina intimately and can help with everything from a lost phone to medical attention.',
    ],
  },
];

/* =====================================================================
   DATA: PRACTICAL INFO
   ===================================================================== */

const practicalInfo = [
  {
    icon: Calendar,
    title: 'How Many Days?',
    description: 'Three days is the sweet spot for Fes. Day one: guided medina tour hitting the major landmarks. Day two: independent medina exploration, shopping, and a cooking class. Day three: day trip to Meknes and Volubilis. If you have a fourth day, explore the Mellah, Borj Nord, and the Merenid Tombs at sunset.',
  },
  {
    icon: Plane,
    title: 'Getting There by Air',
    description: 'Fes-Saiss Airport (FEZ) is 15 km south of the city with flights from major European cities via Ryanair, Wizz Air, Transavia, and Royal Air Maroc. A petit taxi from the airport to the medina costs 120-150 MAD (20 minutes). There is no airport bus; arrange a riad transfer for convenience (150-200 MAD).',
  },
  {
    icon: Train,
    title: 'Getting There by Train',
    description: 'ONCF trains connect Fes to Casablanca (3.5 hours, from 125 MAD first class), Rabat (2.5 hours, from 95 MAD), Marrakech (7 hours, from 195 MAD), Tangier (4.5 hours, from 135 MAD), and Meknes (40 minutes, from 25 MAD). The train station is in the Ville Nouvelle, a 15 MAD taxi ride from the medina.',
  },
  {
    icon: Bus,
    title: 'Getting There by Bus',
    description: 'CTM and Supratours operate comfortable intercity buses from the Ville Nouvelle. CTM runs to Casablanca (5 hours, 120 MAD), Marrakech (8.5 hours, 190 MAD), Chefchaouen (4 hours, 75 MAD), and many other cities. Supratours buses connect with ONCF train schedules. The cheapest option but slower than trains.',
  },
];

/* =====================================================================
   DATA: FAQ
   ===================================================================== */

const faqItems = [
  {
    question: 'Is it safe to walk in the Fes medina at night?',
    answer: 'The main arteries (Talaa Kebira, Talaa Seghira) are generally safe in the early evening as shops close around sunset. However, the deep medina becomes very dark and deserted after 9-10 PM and is best avoided. Stick to well-lit main routes after dark, and your riad staff will always meet you at the nearest landmark if you call ahead.',
  },
  {
    question: 'Do I really need a guide in Fes?',
    answer: 'For your first day, yes, absolutely. Fes el-Bali has over 9,000 alleyways and no grid pattern. A licensed guide (150-300 MAD for a half day) prevents you from getting hopelessly lost, opens doors to hidden workshops and terraces, provides invaluable historical context, and keeps aggressive touts away. After the guided tour, you will have your bearings and can explore independently.',
  },
  {
    question: 'How bad is the smell at the tanneries?',
    answer: 'The Chouara Tannery uses pigeon droppings and quicklime in the leather preparation process, which produces a strong, pungent odor. The surrounding shops provide sprigs of fresh mint to hold under your nose. Most visitors find the smell manageable, especially from the elevated terraces. Visit in the morning when the breeze is stronger. The visual spectacle far outweighs the temporary olfactory challenge.',
  },
  {
    question: 'Can I visit mosques in Fes as a non-Muslim?',
    answer: 'No. Unlike some countries, Morocco does not allow non-Muslims to enter active mosques. The exception is some madrasas (theological schools) that are now museums, such as the Bou Inania Madrasa and the Attarine Medersa, which are open to all visitors. You can admire mosque architecture from the exterior and glimpse courtyards through open doorways.',
  },
  {
    question: 'How does Fes compare to Marrakech?',
    answer: 'Fes is more authentic, less touristy, more historically significant, and more challenging to navigate. Marrakech is more accessible, more cosmopolitan, has better nightlife, and is easier for first-time visitors. Fes rewards patience and curiosity with deeper cultural experiences. Marrakech rewards with immediate sensory gratification. Both are essential Morocco experiences, but Fes is the one that lingers in your memory.',
  },
  {
    question: 'What is the best area to stay in Fes?',
    answer: 'The medina (Fes el-Bali) is the best area for atmosphere and proximity to attractions. Choose a riad near Bab Boujloud for easy navigation (closest to taxis and the Ville Nouvelle) or deeper in the medina near Al-Qarawiyyin for a more immersive experience. The Ville Nouvelle suits those who prefer modern hotel amenities and air conditioning, with easy taxi access to the medina.',
  },
  {
    question: 'How do I get from Fes to the Sahara Desert?',
    answer: 'The Sahara (Merzouga/Erg Chebbi dunes) is approximately 460 km from Fes, an 8-9 hour drive through the Middle Atlas and Ziz Valley. Most visitors do this as a 2-3 day tour via Ifrane, Azrou, Midelt, and the Ziz Gorge. Private tours cost 2,000-4,000 MAD per person; shared group tours from 800 MAD per person. Direct buses run from Fes to Rissani (nearest town to Merzouga) but take 10+ hours.',
  },
  {
    question: 'Is Fes worth visiting for just one day?',
    answer: 'One day is enough to see the highlights with a guide: Bab Boujloud, Bou Inania Madrasa, the tanneries, Al-Qarawiyyin area, and Place Seffarine. However, Fes deserves at least two to three days. The medina reveals its secrets slowly, and rushing through it misses the entire point. The real magic of Fes is in the unplanned discoveries: a hidden courtyard, a craftsman at work, a shaft of light through a cedar screen.',
  },
];

/* =====================================================================
   DATA: 3-DAY ITINERARY
   ===================================================================== */

const itinerary = [
  {
    day: 'Day 1',
    title: 'Guided Medina Tour & Major Landmarks',
    icon: Landmark,
    morning: {
      time: '9:00 AM - 12:30 PM',
      activities: [
        'Meet your licensed guide at Bab Boujloud and photograph the iconic Blue Gate',
        'Enter the medina via Talaa Kebira and visit the Bou Inania Madrasa at opening',
        'Walk through the artisan quarters: woodworkers, brass workers, and textile dyers',
        'Arrive at Al-Qarawiyyin University and glimpse the courtyard through the western entrance',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:00 PM',
      activities: [
        'Lunch at The Ruined Garden for atmospheric dining among ancient fig trees',
        'Continue to the Chouara Tannery for rooftop views of the colorful dye vats',
        'Browse the leather shops surrounding the tannery (no obligation to buy)',
        'Visit Place Seffarine to watch coppersmiths hammering brass by hand',
      ],
    },
    evening: {
      time: '5:00 PM - 9:00 PM',
      activities: [
        'Return to your riad for rest and a refreshing mint tea on the rooftop terrace',
        'Sunset walk through the quieting medina as the call to prayer echoes from minarets',
        'Dinner at Cafe Clock with its famous camel burger and weekly Gnaoua music night',
        'Evening stroll around Bab Boujloud where locals gather in the cool air',
      ],
    },
  },
  {
    day: 'Day 2',
    title: 'Independent Exploration, Crafts & Cooking',
    icon: Palette,
    morning: {
      time: '8:30 AM - 12:30 PM',
      activities: [
        'Independent medina exploration following your own curiosity down unknown alleyways',
        'Visit the Nejjarine Museum of Wooden Arts and enjoy the rooftop terrace views',
        'Explore the Dar Batha Museum and its peaceful Andalusian garden courtyard',
        'Walk through the spice and textile souks, comparing prices before buying',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:30 PM',
      activities: [
        'Join the Fes Cooking School at Palais Amani for a half-day cooking class',
        'Start with a guided market tour to source spices, vegetables, and herbs',
        'Learn to prepare a traditional Fassi meal: pastilla, tagine, and Moroccan salads',
        'Eat your creation on the terrace overlooking the medina rooftops',
      ],
    },
    evening: {
      time: '5:30 PM - 9:00 PM',
      activities: [
        'Visit the pottery cooperative at Ain Nokbi to watch ceramic artisans at work',
        'Purchase Fes blue ceramics directly from the makers at fair cooperative prices',
        'Dinner at Dar Roumana for the finest set menu in Fes (reservations essential)',
        'Nightcap mint tea on your riad rooftop under a canopy of stars and minarets',
      ],
    },
  },
  {
    day: 'Day 3',
    title: 'Meknes, Volubilis & Farewell Sunset',
    icon: Compass,
    morning: {
      time: '7:30 AM - 12:30 PM',
      activities: [
        'Early departure for Volubilis Roman ruins (arrange transport through your riad)',
        'Explore the remarkably preserved mosaics, triumphal arch, and basilica ruins',
        'Walk the Decumanus Maximus and admire the House of Orpheus floor mosaics',
        'Optional stop at the holy town of Moulay Idriss Zerhoun on the hilltop above',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:00 PM',
      activities: [
        'Continue to Meknes for lunch at a local restaurant near the medina',
        'Visit the monumental Bab Mansour gate, one of the finest in North Africa',
        'Explore the Heri es-Souani granaries and royal stables of Moulay Ismail',
        'Return to Fes by train (40 minutes) or grand taxi (30 minutes)',
      ],
    },
    evening: {
      time: '5:00 PM - Late',
      activities: [
        'Take a petit taxi to the Merenid Tombs for the legendary sunset panorama over the medina',
        'Watch the call to prayer rise from hundreds of minarets as the city turns golden',
        'Walk down through the Mellah, visiting the Ibn Danan Synagogue and Jewish Cemetery',
        'Farewell dinner at Riad Rcif for authentic Fassi home cooking: rfissa and seffa medfouna',
      ],
    },
  },
];

/* =====================================================================
   DATA: RELATED PAGES
   ===================================================================== */

const relatedPages = [
  { href: '/marrakech', title: 'Marrakech Guide', description: 'Morocco\'s Red City: souks, palaces, Jemaa el-Fnaa, and Atlas day trips.', icon: Landmark },
  { href: '/chefchaouen-guide', title: 'Chefchaouen Guide', description: 'The Blue Pearl of Morocco nestled in the Rif Mountains.', icon: Palette },
  { href: '/medina-guide', title: 'Medina Guide', description: 'How to navigate, shop, and thrive in Morocco\'s medieval medinas.', icon: Map },
  { href: '/riads', title: 'Riad Guide', description: 'Everything about staying in traditional Moroccan courtyard houses.', icon: Bed },
  { href: '/cuisine', title: 'Moroccan Food Guide', description: 'Tagines, couscous, pastilla, and the flavors of Morocco.', icon: Utensils },
  { href: '/crafts', title: 'Moroccan Crafts Guide', description: 'Pottery, leather, brasswork, and the artisan traditions of Morocco.', icon: ShoppingBag },
  { href: '/cities', title: 'All Morocco Cities', description: 'Explore every destination across the kingdom.', icon: Globe },
  { href: '/unesco', title: 'UNESCO Sites Guide', description: 'Morocco\'s nine UNESCO World Heritage Sites explored in depth.', icon: BookOpen },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function FesGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Fes',
    alternateName: 'Fez',
    description:
      'Fes is Morocco\'s spiritual and intellectual capital, home to the world\'s oldest university (Al-Qarawiyyin, 859 AD), the largest car-free urban area on Earth (Fes el-Bali), legendary tanneries, and twelve centuries of continuous living history as a UNESCO World Heritage Site.',
    url: 'https://moroccoguide.com/fes-guide',
    touristType: ['Culture Enthusiasts', 'History Buffs', 'Photographers', 'Foodies', 'Craft Lovers', 'Spiritual Seekers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0331,
      longitude: -5.0003,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Fes el-Bali (Medina)' },
      { '@type': 'TouristAttraction', name: 'Al-Qarawiyyin University' },
      { '@type': 'TouristAttraction', name: 'Chouara Tannery' },
      { '@type': 'TouristAttraction', name: 'Bou Inania Madrasa' },
      { '@type': 'TouristAttraction', name: 'Bab Boujloud (Blue Gate)' },
      { '@type': 'TouristAttraction', name: 'Dar Batha Museum' },
      { '@type': 'TouristAttraction', name: 'Merenid Tombs' },
      { '@type': 'TouristAttraction', name: 'Royal Palace (Dar el-Makhzen)' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =================================================================
          HERO SECTION
          ================================================================= */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-fes-tanneries.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Fes</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Fes
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Spiritual &amp; Intellectual Capital
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Home to the world&apos;s oldest university, the largest car-free urban area on Earth,
            and twelve centuries of unbroken living history. Fes is not a city frozen in time &mdash;
            it is a city where time folds in on itself, where medieval and modern coexist in every alleyway.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Landmark className="w-3.5 h-3.5 mr-1.5" /> UNESCO Heritage</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><GraduationCap className="w-3.5 h-3.5 mr-1.5" /> Oldest University</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Palette className="w-3.5 h-3.5 mr-1.5" /> Artisan Capital</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><BookOpen className="w-3.5 h-3.5 mr-1.5" /> Founded 789 AD</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* =================================================================
          INTRODUCTION / OVERVIEW
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Spiritual Heart of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Founded in 789 AD by Idris I, the great-grandson of the Prophet Muhammad, Fes
              (also spelled Fez) is the oldest of Morocco&apos;s four imperial cities and the
              spiritual, cultural, and intellectual heart of the kingdom. With a population of
              1.2 million, it is Morocco&apos;s third-largest city, but its significance transcends
              size. For over twelve centuries, Fes has been the center of Moroccan religious life,
              scholarship, and craftsmanship.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              The medina of Fes el-Bali is a UNESCO World Heritage Site and the largest car-free
              urban area in the world. Its 9,000-plus alleyways form a medieval labyrinth that has
              remained essentially unchanged since the 14th century. Within its ancient walls stand
              Al-Qarawiyyin, the world&apos;s oldest continuously operating university, founded in 859 AD
              by Fatima al-Fihri; the legendary Chouara Tannery, where leather has been produced by
              hand for over a thousand years; and hundreds of mosques, madrasas, fondouks, and fountains
              of extraordinary architectural beauty.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Unlike Marrakech, which wears its beauty on its sleeve, Fes reveals itself slowly.
              The treasures are hidden behind unmarked doors, down blind alleyways, and inside
              crumbling facades that conceal gardens of breathtaking beauty. Fes rewards patience,
              curiosity, and a willingness to get lost. It is Morocco at its most profound, its most
              challenging, and ultimately its most rewarding. This guide covers everything you need
              to unlock the secrets of Morocco&apos;s oldest and most authentic city.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================
          QUICK FACTS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickFacts.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-4 text-center">
                  <FactIcon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)] mb-1">{fact.label}</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          ESSENTIAL TIPS
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Fes Essentials: Know Before You Go
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            These practical tips will help you navigate the world&apos;s most complex medina
            with confidence from your very first day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <TipIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          TOP ATTRACTIONS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top 12 Attractions in Fes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From the world&apos;s oldest university to medieval tanneries unchanged for a millennium,
            these are the experiences that define Morocco&apos;s spiritual capital.
          </p>

          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-3 left-3">
                      <span className="tag bg-white/90 text-[var(--color-primary)] font-semibold">
                        {attraction.type}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                      <span className="text-white text-xs font-semibold">{attraction.rating}</span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-3">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                      {attraction.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-[var(--text-secondary)] mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {attraction.hours}</span>
                      <span className="flex items-center gap-1"><Ticket className="w-3.5 h-3.5" /> {attraction.price}</span>
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-accent-50)]">
                      <Lightbulb className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-semibold text-[var(--color-accent-dark)]">Tip:</span> {attraction.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          NEIGHBORHOODS GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Neighborhoods Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Fes has three distinct districts, each with its own character and history.
            Understanding them helps you plan where to stay and what to explore.
          </p>

          <div className="space-y-6">
            {neighborhoods.map((hood) => {
              const Icon = hood.icon;
              return (
                <div key={hood.name} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                          {hood.name}
                        </h3>
                        <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                          {hood.character}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                        {hood.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hood.highlights.map((h) => (
                          <span key={h} className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <Users className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold">Best for:</span> {hood.bestFor}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <Bed className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold">Stay here:</span> {hood.stayHere}
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

      {/* =================================================================
          CRAFTS & SHOPPING
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Crafts &amp; Shopping: The Artisan Capital
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Fes is Morocco&apos;s undisputed center of traditional craftsmanship. The medina&apos;s artisan
            quarters have operated continuously for over a thousand years, producing pottery, leather,
            brass, wood, and textiles of extraordinary quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {craftQuarters.map((craft) => {
              const CraftIcon = craft.icon;
              return (
                <div key={craft.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CraftIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {craft.name}
                    </h3>
                  </div>
                  <span className="inline-block tag bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-3">
                    {craft.specialty}
                  </span>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {craft.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Haggling Tips */}
          <div className="card-moroccan p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <HandCoins className="w-6 h-6 text-[var(--color-accent)]" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                The Art of Haggling: 8 Essential Tips for Fes
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hagglingTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          FOOD GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Eat in Fes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Fes is the birthplace of Morocco&apos;s most refined cuisine. Fassi cooking is considered
            the haute cuisine of the Maghreb, with complex spice blends, slow-cooked tagines,
            and the legendary pastilla originating here.
          </p>

          {/* Best Restaurants */}
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--color-accent)]" />
            Best Restaurants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {restaurant.name}
                  </h4>
                  <span className="text-sm font-semibold text-[var(--color-green)]">{restaurant.price}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                    {restaurant.cuisine}
                  </span>
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                    <MapPin className="w-3 h-3 mr-1" />{restaurant.location}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {restaurant.description}
                </p>
              </div>
            ))}
          </div>

          {/* Street Food */}
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Coffee className="w-5 h-5 text-[var(--color-accent)]" />
            Street Food in the Medina
          </h3>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary-50)]">
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Dish</th>
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Where to Find</th>
                  </tr>
                </thead>
                <tbody>
                  {streetFood.map((food, index) => (
                    <tr key={food.item} className={index % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-medium text-[var(--text-primary)]">{food.item}</td>
                      <td className="p-4 text-[var(--color-green)] font-semibold">{food.price}</td>
                      <td className="p-4 text-[var(--text-muted)]">{food.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE TO STAY
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Stay in Fes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Staying in a traditional riad within the medina is the quintessential Fes experience.
            These converted courtyard houses offer an intimate window into centuries of Fassi domestic architecture.
          </p>

          <div className="space-y-8">
            {accommodationsByBudget.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.category} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                      <TierIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {tier.category}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{tier.priceRange}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tier.options.map((option) => (
                      <div key={option.name} className="p-4 rounded-xl bg-[var(--surface-muted)]">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-[var(--text-primary)]">{option.name}</h4>
                          <span className="tag text-xs bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                            {option.area}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                          {option.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          GETTING AROUND
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Car className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Getting Around Fes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            No cars in the medina, no grid pattern, no street signs. Here is how to navigate
            Morocco&apos;s most labyrinthine city.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportModes.map((transport) => {
              const TransportIcon = transport.icon;
              return (
                <div key={transport.mode} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <TransportIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {transport.mode}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{transport.cost}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {transport.description}
                  </p>
                  <div className="space-y-2">
                    {transport.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-[var(--text-secondary)]">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          DAY TRIPS FROM FES
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day Trips from Fes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Fes is perfectly positioned for excursions to Roman ruins, alpine forests,
            thermal springs, and ancient towns. These trips are easily arranged through your riad.
          </p>

          <div className="space-y-6">
            {dayTrips.map((trip) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                      <TripIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-1">
                        {trip.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)] mb-3">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {trip.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {trip.duration}</span>
                        <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {trip.price}</span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                        {trip.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {trip.highlights.map((h) => (
                          <span key={h} className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          FESTIVALS & EVENTS
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Music className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Festivals &amp; Events
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Fes hosts some of Morocco&apos;s most culturally significant festivals, drawing
            artists, musicians, and scholars from around the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {festivals.map((festival) => {
              const FestIcon = festival.icon;
              return (
                <div key={festival.name} className="card-moroccan p-6 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                      <FestIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {festival.name}
                      </h3>
                      <span className="text-xs text-[var(--color-accent-dark)] font-semibold">{festival.month}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {festival.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          BEST TIME TO VISIT
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Best Time to Visit Fes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Fes is an inland city with a continental climate. Summers are scorching and winters
            are cool. Spring and autumn offer the most comfortable temperatures for medina exploration.
          </p>

          <div className="space-y-4">
            {monthlyWeather.map((month) => {
              const WeatherIcon = month.icon;
              return (
                <div key={month.months} className="card-moroccan p-5 flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex items-center gap-3 sm:w-64 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <WeatherIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {month.months}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{month.temp}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < month.rating
                              ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                              : 'text-[var(--border-default)]'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {month.verdict}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          BUDGET GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Fes Budget Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Fes offers excellent value for money and is generally cheaper than Marrakech.
            Here is what to expect at each budget level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetBreakdown.map((tier) => {
              const BudgetIcon = tier.icon;
              return (
                <div key={tier.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                      <BudgetIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {tier.category}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{tier.dailyBudget}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {tier.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--text-secondary)]">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          SAFETY TIPS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Safety Tips for Fes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Fes is a safe city for tourists. The medina can feel intense and confusing, but
            awareness and common sense are all you need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyTips.map((section) => {
              const SafetyIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <SafetyIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {section.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <BadgeCheck className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          PRACTICAL INFO
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Info className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Practical Information
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Everything you need to plan your trip to Fes, from transport connections to
            how many days to allocate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((item) => {
              const PractIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <PractIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          3-DAY ITINERARY
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Map className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              The Perfect 3-Day Fes Itinerary
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Three days is the ideal amount of time to experience Fes properly: a guided deep dive
            into the medina, independent exploration and cooking, and a day trip to the Roman ruins
            of Volubilis and the imperial city of Meknes.
          </p>

          <div className="space-y-8">
            {itinerary.map((day) => {
              const DayIcon = day.icon;
              return (
                <div key={day.day} className="card-moroccan overflow-hidden">
                  <div className="p-4 bg-[var(--color-primary)] text-white flex items-center gap-3">
                    <DayIcon className="w-6 h-6" />
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-lg">
                        {day.day}: {day.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Morning */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Sunrise className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Morning</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.morning.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.morning.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Afternoon */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Afternoon</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.afternoon.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.afternoon.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Evening */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Moon className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Evening</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.evening.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.evening.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
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

      {/* =================================================================
          FAQ SECTION
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Frequently Asked Questions About Fes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Answers to the most common questions travelers ask about visiting Fes.
          </p>

          <div className="space-y-4 max-w-3xl">
            {faqItems.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary)] text-xs font-bold">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed ml-10">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          RELATED PAGES
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-[var(--text-secondary)]">
              Discover more destinations and experiences that pair perfectly with a Fes adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-6 group flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-100)] transition-colors">
                  <link.icon className="w-5 h-5 text-[var(--color-accent-dark)]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  {link.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)]">
                  Explore
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          FINAL CTA
          ================================================================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-fes-tanneries.webp"
            alt="Fes medina rooftops with minarets at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="container-morocco relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <GraduationCap className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Fes Is Calling
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Twelve centuries of history echo through every alleyway. The world&apos;s oldest university
              still teaches within its ancient walls. Tanners still dye leather by hand in stone vats
              unchanged for a millennium. The call to prayer still rises from hundreds of minarets at dawn.
              Fes is not a destination you visit &mdash; it is a world you enter. Start planning your
              journey to Morocco&apos;s spiritual capital today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent btn-lg rounded-full"
              >
                <Compass className="w-5 h-5" />
                Plan Your Fes Trip
              </Link>
              <Link
                href="/cities"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                <Globe className="w-5 h-5" />
                Explore All Cities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="zellige-border" />
    </>
  );
}

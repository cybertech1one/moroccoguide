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
  Wind,
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  TreesIcon,
  Mountain,
  Coffee,
  MoonStar,
  Shield,
  GraduationCap,
  Tent,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Guide to Oujda 2026 | Eastern Morocco Capital',
  description:
    'Discover Oujda, Morocco: eastern gateway city with Parc Lalla Aicha, Bab Sidi Abdelwahab, ancient medina, Saidia beach (Blue Pearl), Beni-Snassen mountains, Rai music heritage, and Algerian border culture. Real prices in MAD.',
  keywords: [
    'oujda morocco',
    'oujda guide',
    'things to do oujda',
    'saidia beach',
    'oujda medina',
    'eastern morocco',
    'oujda travel guide',
    'beni snassen mountains',
    'oujda attractions',
    'parc lalla aicha',
    'bab sidi abdelwahab',
    'sidi yahia oujda',
    'rai music morocco',
    'oujda algeria border',
    'berkane morocco',
    'ain sfa springs',
  ],
  openGraph: {
    title: 'Complete Guide to Oujda 2026 | Eastern Morocco Capital',
    description:
      'Explore Oujda: eastern Morocco capital with ancient medina, Mediterranean beaches, mountain excursions, Rai music, and unique Algerian border culture.',
    url: `${BASE_URL}/oujda-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'View of Oujda city center with Bab Sidi Abdelwahab gate and the eastern Morocco landscape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to Oujda 2026 | Eastern Morocco',
    description:
      'Parc Lalla Aicha, medina, Saidia beach, Beni-Snassen mountains, Rai music, Algerian border culture. Complete Oujda guide with prices in MAD.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/oujda-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/oujda-guide`,
  name: 'Complete Guide to Oujda 2026 | Eastern Morocco Capital',
  description:
    'Discover Oujda, Morocco: eastern gateway city with parks, medina, Saidia beach, mountain excursions, Rai music, and Algerian border culture.',
  url: `${BASE_URL}/oujda-guide`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/oujda-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Oujda',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Oujda Guide', item: `${BASE_URL}/oujda-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Oujda known for?', acceptedAnswer: { '@type': 'Answer', text: 'Oujda is known as the capital of eastern Morocco and the gateway to Algeria. It is famous for its Rai and Gharnati music traditions, Parc Lalla Aicha gardens, the medieval medina with Bab Sidi Abdelwahab gate, the pilgrimage site of Sidi Yahia, proximity to Saidia beach (the Blue Pearl of Morocco, 60 km away), the Beni-Snassen mountain range, and Berkane orange country. It is also a major university city with a youthful cultural energy.' } },
    { '@type': 'Question', name: 'How far is Saidia beach from Oujda?', acceptedAnswer: { '@type': 'Answer', text: 'Saidia beach is approximately 60 km north of Oujda, about a 45-minute drive. Grand taxis run regularly from Oujda to Saidia (from 25 MAD per person shared). Saidia has 14 km of sandy Mediterranean coastline and is known as the Blue Pearl of Morocco. The beach resort has been extensively developed with hotels, a marina, and a golf course.' } },
    { '@type': 'Question', name: 'How do I get to Oujda?', acceptedAnswer: { '@type': 'Answer', text: 'Oujda has Angads Airport (OUD) with domestic flights from Casablanca, Rabat, and seasonal international flights from Europe. ONCF trains connect Oujda to Fes (from 130 MAD, 5-6 hours), Meknes, and Casablanca. CTM buses serve all major Moroccan cities. By car, Oujda is 580 km east of Fes via the A2 motorway, or reachable from Nador (150 km) and Taza (220 km).' } },
    { '@type': 'Question', name: 'Can you cross into Algeria from Oujda?', acceptedAnswer: { '@type': 'Answer', text: 'The Morocco-Algeria land border has been closed since 1994. While the border crossing point at Bab el-Assa is just 14 km from Oujda, it is not possible to cross by land. Despite the closed border, Oujda retains strong cultural connections to Algeria through shared music traditions (Rai), cuisine, family ties, and the cross-border influence visible in the city daily life.' } },
    { '@type': 'Question', name: 'How many days do you need in Oujda?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three days is ideal. Day 1: explore the medina, Bab Sidi Abdelwahab, Parc Lalla Aicha, Sidi Yahia, and the city center. Day 2: day trip to Saidia beach (60 km) or the Beni-Snassen mountains and Ain Sfa springs. Day 3: visit Berkane orange country, the Museum of Lalla Meryem, and experience the evening music and cafe culture. One full day covers the medina and city highlights.' } },
    { '@type': 'Question', name: 'What is the best time to visit Oujda?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March-May) and autumn (September-November) offer the most pleasant weather with temperatures of 18-28 degrees. Summer (June-August) is very hot, often exceeding 40 degrees, though Saidia beach provides relief. Winter is mild (8-15 degrees) with some rain. The annual Rai music festival in September and the International Oujda Film Festival are cultural highlights worth timing your visit around.' } },
  ],
};

/* ===============================================================
   DATA: CITY ATTRACTIONS
   =============================================================== */

const cityAttractions = [
  {
    name: 'Parc Lalla Aicha',
    icon: TreesIcon,
    category: 'Urban Park & Gardens',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Late afternoon',
    description:
      'Parc Lalla Aicha is the green heart of Oujda and one of the finest urban parks in eastern Morocco. Spread across several hectares in the city center, the park features manicured gardens with Mediterranean and North African plant species, shaded walking paths lined with palm trees and bougainvillea, ornamental fountains, and peaceful seating areas. The park was named after Princess Lalla Aicha, a prominent figure in Morocco independence movement, and serves as the gathering point for Oujda residents on warm evenings. Families, students, and couples stroll beneath the canopy of mature trees, creating a vibrant social atmosphere that reveals the everyday rhythms of eastern Moroccan life.',
    insiderTip:
      'Visit in the late afternoon when the heat subsides and the park fills with local life — families, students from Mohammed I University, and elderly men playing cards. The surrounding streets have excellent juice bars and cafes. The park is beautifully lit in the evening and is one of the safest and most pleasant places for an evening walk in Oujda.',
  },
  {
    name: 'Bab Sidi Abdelwahab',
    icon: Landmark,
    category: 'Historic Gateway',
    price: 'Free',
    duration: '20-30 minutes',
    bestTime: 'Morning (best light)',
    description:
      'Bab Sidi Abdelwahab is the main ceremonial gate of Oujda medina and the city most recognizable landmark. This imposing stone gateway, renovated and illuminated in recent years, marks the principal entrance to the old city from the modern commercial district. The gate features classic Moroccan architectural elements including a horseshoe arch, crenellated parapet, and carved stone detailing. Named after a local saint whose tomb lies nearby, the gate has served as the symbolic threshold between old and new Oujda for centuries. The square in front of the gate buzzes with activity — petit taxis, street vendors, and the constant flow of people moving between the medina and the ville nouvelle.',
    insiderTip:
      'The gate is most photogenic in the morning when the eastern light illuminates the stonework. In the evening, it is beautifully lit and makes an atmospheric starting point for a medina walk. The square in front is a major transit hub — you can catch petit taxis here to anywhere in the city. Street food vendors near the gate sell excellent msemen and fresh juice.',
  },
  {
    name: 'Oujda Medina',
    icon: Globe,
    category: 'Cultural Heritage',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'Founded in 994 AD by Ziri ibn Atiyya, the Oujda medina is one of the oldest continuously inhabited urban areas in eastern Morocco. Unlike the labyrinthine medinas of Fes or Marrakech, Oujda old city is relatively compact and navigable, with a roughly rectangular layout enclosed by restored ramparts. The medina retains its medieval character with narrow covered souks, traditional fondouks (caravanserais), neighborhood mosques, and residential streets where ornate doorways hint at courtyard homes within. The souk areas specialize in different trades: gold and jewelry along one street, spices and herbs in another, leather goods and traditional clothing in a third. The medina has been undergoing restoration in recent years, balancing preservation with the needs of its living community.',
    insiderTip:
      'Enter through Bab Sidi Abdelwahab for the most atmospheric approach. The covered spice souk is excellent — prices are local, not tourist-inflated. Look for the traditional fondouks with their internal courtyards. The medina is compact enough that you cannot truly get lost. The northeastern section near the ramparts is the quietest and most photogenic. Friday afternoons are quietest as many shops close for prayers.',
  },
  {
    name: 'Sidi Yahia Pilgrimage Site',
    icon: Heart,
    category: 'Religious & Spiritual Heritage',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Morning',
    description:
      'The shrine and oasis garden of Sidi Yahia, located about 6 km south of Oujda city center, is one of the most important pilgrimage sites in eastern Morocco. The site is associated with Sidi Yahia ben Younes, a holy figure venerated by both Muslims and Jews in the region, with some traditions identifying him with the biblical prophet Jonah and others with John the Baptist. The shrine complex includes a sanctuary, a sacred spring, and a tranquil oasis garden of palm trees and olive groves. For centuries, pilgrims have visited to pray, seek blessings, and collect water from the spring believed to have healing properties. The annual moussem (religious festival) draws thousands of devotees from across eastern Morocco and western Algeria.',
    insiderTip:
      'The site is a place of active worship — dress modestly and behave respectfully. Remove shoes before entering any prayer areas. The oasis garden is peaceful and beautiful for quiet contemplation. A grand taxi from Oujda center costs from 15-20 MAD. The annual moussem festival (dates vary) is a remarkable cultural event with traditional music, feasting, and prayer gatherings.',
  },
  {
    name: 'Museum of Lalla Meryem',
    icon: Landmark,
    category: 'Cultural Museum',
    price: 'From 10 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'The Museum of Lalla Meryem, housed in a restored traditional building in Oujda, showcases the cultural heritage of the Oriental region of Morocco. The collection spans archaeological finds from the Beni-Snassen mountains and surrounding areas, traditional Berber jewelry and textiles, agricultural tools, and exhibits documenting the unique cultural identity of eastern Morocco — a region shaped by its position between the Sahara, the Mediterranean, and the Algerian frontier. The museum offers insight into the nomadic and sedentary cultures that have coexisted in this region for millennia, and the distinctive artistic traditions that emerged from this cultural crossroads.',
    insiderTip:
      'The museum is small but well-curated, offering excellent context for understanding eastern Morocco distinctive identity. The Berber jewelry collection is particularly fine. Ask the staff about the history of the building itself. The museum is sometimes used for temporary exhibitions of contemporary Moroccan art — check locally for current shows.',
  },
  {
    name: 'Oujda City Center & University Quarter',
    icon: GraduationCap,
    category: 'Urban Culture',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Evening',
    description:
      'Oujda ville nouvelle (new city) reflects its status as the largest city in eastern Morocco and a major university town. Mohammed I University, one of Morocco biggest public universities, brings a youthful energy to the city, with student cafes, bookshops, and cultural venues concentrated in the modern districts. Boulevard Mohammed V, the main commercial artery, is lined with French colonial-era buildings, contemporary shops, and cafe terraces. The evening promenade along this boulevard is an Oujda institution — families, couples, and groups of friends strolling, window-shopping, and socializing at outdoor cafes. The modern city offers a window into contemporary eastern Moroccan urban life, distinct from the tourist-oriented atmosphere of western Moroccan cities.',
    insiderTip:
      'The evening promenade on Boulevard Mohammed V (from 7 PM) is the best free entertainment in Oujda. Cafe terraces fill with university students debating, families enjoying ice cream, and friends catching up. The French colonial architecture along the boulevard is worth photographing. For the best cafe atmosphere, try the terraces near Place du 16 Aout.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS & EXCURSIONS
   =============================================================== */

const dayTrips = [
  {
    name: 'Saidia Beach (Blue Pearl of Morocco)',
    icon: Waves,
    category: 'Beach & Resort',
    price: 'From 25 MAD (grand taxi) / Free beach entry',
    duration: 'Full day',
    bestTime: 'June to September',
    description:
      'Saidia, located 60 km north of Oujda on the Mediterranean coast, boasts 14 km of golden sandy beach that has earned it the nickname "Blue Pearl of Morocco." The beach stretches from the Algerian border to the mouth of the Moulouya River estuary, offering calm Mediterranean waters ideal for swimming and water sports. In recent years, Saidia has been developed into a major resort destination with a luxury marina (Saidia Marina), an 18-hole golf course, beachfront hotels, and a selection of restaurants and cafes. Despite the development, the eastern sections of the beach remain relatively uncrowded, especially outside the July-August peak season when Moroccan and European holidaymakers descend. The Moulouya River estuary at the western end is an important bird habitat.',
    insiderTip:
      'Grand taxis run regularly from Oujda to Saidia (from 25 MAD per person shared, 45 minutes). The public beach sections east of the marina are less crowded and equally beautiful. Visit the Moulouya estuary (free) for birdwatching — flamingos, herons, and egrets are common. Restaurants along the corniche serve excellent fresh fish (from 60 MAD). Avoid the peak July-August rush if possible; June and September offer warm water with fewer crowds.',
  },
  {
    name: 'Beni-Snassen Mountains',
    icon: Mountain,
    category: 'Mountain & Nature Excursion',
    price: 'From 300-500 MAD (grand taxi for the day)',
    duration: 'Full day',
    bestTime: 'Spring or autumn',
    description:
      'The Beni-Snassen mountain range rises south of the Mediterranean coast between Oujda and Berkane, reaching elevations of over 1,500 meters. These limestone mountains are covered in forests of holm oak, argan, and Mediterranean scrub, with deep gorges, natural caves, and panoramic viewpoints. The range is named after the Beni-Snassen Berber tribe who have inhabited these mountains for centuries. Key stops include the Zegzel Gorges, the Grotte du Chameau (Camel Cave) with its impressive stalactites, and numerous hiking trails through wild, rarely visited countryside. The mountains provide a dramatic contrast to the flat agricultural plains around Oujda and offer welcome cool air in the heat of summer.',
    insiderTip:
      'Hire a grand taxi for the day from Oujda (from 300-500 MAD for the car, negotiate). The Zegzel Gorges road is one of the most scenic drives in eastern Morocco. Grotte du Chameau requires a local guide — ask in the village of Ain Sfa. Bring hiking shoes if you plan to walk the mountain trails. Spring wildflowers (March-April) are spectacular. Pack a picnic — there are very few restaurants in the mountains.',
  },
  {
    name: 'Ain Sfa Springs & Gorges',
    icon: Waves,
    category: 'Natural Springs & Scenery',
    price: 'Free (transport from 200 MAD)',
    duration: '3-4 hours',
    bestTime: 'Spring (peak water)',
    description:
      'Ain Sfa is a remarkable natural spring that emerges from the limestone cliffs of the Beni-Snassen mountains, creating a lush oasis of greenery in the dry eastern Moroccan landscape. The spring feeds pools of crystal-clear water surrounded by fig trees, oleanders, and cultivated gardens — a traditional irrigation system that has sustained the local community for generations. The surrounding gorge landscape is dramatic, with vertical limestone cliffs rising above the spring valley. Local families use the area for picnics and swimming in the natural pools, especially during the hot summer months. The springs are part of a larger karst system that connects to the caves of the Beni-Snassen range.',
    insiderTip:
      'Ain Sfa is best combined with a Beni-Snassen mountains day trip. The springs are most impressive after winter and spring rains. Bring swimming gear for the natural pools. The small village near the springs has a basic cafe serving mint tea and simple food. The drive from Berkane through the Zegzel Gorges to Ain Sfa is spectacularly scenic and worth taking slowly.',
  },
  {
    name: 'Berkane & Orange Country',
    icon: Sun,
    category: 'Agricultural Heritage & Towns',
    price: 'From 15 MAD (grand taxi from Oujda)',
    duration: '3-5 hours',
    bestTime: 'Spring (orange blossom) or winter (harvest)',
    description:
      'Berkane, 60 km northeast of Oujda, is the capital of Morocco citrus country. The Triffa Plain surrounding Berkane is carpeted with orange, clementine, and lemon groves that produce some of the finest citrus fruit in North Africa. During the spring blossom season (March-April), the air is heavy with the intoxicating scent of orange flowers, and the landscape becomes a patchwork of white blossoms against green foliage. The town itself is pleasant, with a compact center, traditional markets, and restaurants serving local specialties. The annual Berkane Orange Festival celebrates the harvest with parades, music, and tastings. Berkane also serves as a base for exploring the Beni-Snassen mountains to the south.',
    insiderTip:
      'Visit during the spring blossom season (March-April) for the most sensory experience — the fragrance of orange blossoms is unforgettable. In winter (December-February), roadside stalls sell bags of fresh oranges for as little as from 5 MAD per kilogram. Grand taxis from Oujda to Berkane cost from 15 MAD per person (shared). Try the local clementines — they are among the best in the world.',
  },
  {
    name: 'Oujda Music Scene: Rai & Gharnati',
    icon: Music,
    category: 'Music & Cultural Heritage',
    price: 'Free (street performances) / From 50 MAD (venues)',
    duration: '2-3 hours (evening)',
    bestTime: 'Year-round, especially September (Rai Festival)',
    description:
      'Oujda is the undisputed capital of Moroccan Rai music — a genre that originated in the borderlands between Morocco and Algeria and blends traditional Bedouin poetry with modern rhythms. The city also preserves the ancient Gharnati musical tradition, a form of Andalusian classical music brought by refugees from Granada. These two musical styles — one popular and contemporary, the other refined and centuries-old — coexist in Oujda, reflecting the city position as a cultural crossroads. Rai can be heard in cafes, taxi rides, and evening street performances throughout the city. Gharnati ensembles perform at cultural events and private celebrations. The annual International Rai Festival, held in September, draws performers from across North Africa and is the city biggest cultural event.',
    insiderTip:
      'Ask your hotel about Gharnati performances — these intimate concerts of Andalusian classical music are extraordinary. The Rai Festival in September (dates vary annually) is worth timing your visit around — performances are held in public squares and venues across the city, many free. Even outside festival season, Rai music pulses through Oujda cafes and taxis — ask locals for their favorite spots. The medina area has occasional live music evenings.',
  },
  {
    name: 'Moulouya River Estuary & Birdwatching',
    icon: Eye,
    category: 'Nature & Wildlife',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Spring and autumn (migration)',
    description:
      'The Moulouya River estuary, where Morocco longest river empties into the Mediterranean near Saidia, is one of the most important wetland habitats in North Africa. Designated a Ramsar site and part of a biological reserve, the estuary marshes, dunes, and lagoons attract over 200 bird species including greater flamingos, white storks, Audouin gulls, marbled teal, and various herons and egrets. The landscape is hauntingly beautiful — salt marshes, reed beds, and sand dunes stretching between the river and the sea. During spring and autumn migration, the estuary becomes a critical stopover for birds traveling between Africa and Europe, making it one of the premier birdwatching sites in Morocco.',
    insiderTip:
      'The estuary is located at the western end of Saidia beach, about 70 km from Oujda. Combine with a Saidia beach day. Bring binoculars — the birds can be distant across the marshes. Early morning is best for birdwatching when birds are most active. The area is not formally managed for tourism, so there are no visitor facilities — bring water and sun protection. A birding field guide to North Africa is essential.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Free City Exploration', icon: Footprints, description: 'Parc Lalla Aicha, the medina, Bab Sidi Abdelwahab, and the evening promenade on Boulevard Mohammed V are all free. Oujda best experiences — local atmosphere, music, and architecture — cost nothing.', savings: 'Free — Oujda best attractions' },
  { tip: 'Shared Grand Taxis to Saidia', icon: MapPin, description: 'Grand taxis from Oujda to Saidia beach cost from 25 MAD per person (shared) vs. private transfers at from 300-400 MAD. Taxis depart from the grand taxi stand when full (6 passengers).', savings: 'Save from 275-375 MAD vs. private' },
  { tip: 'Eat Where Students Eat', icon: UtensilsCrossed, description: 'University city means cheap, generous portions. Student restaurants near Mohammed I University serve full meals from 20-30 MAD. Tourist-oriented restaurants charge from 80-150 MAD for similar food.', savings: 'Save from 60-120 MAD per meal' },
  { tip: 'Berkane Day Trip by Grand Taxi', icon: Sun, description: 'Grand taxis to Berkane cost from 15 MAD per person (shared, 45 minutes) vs. organized citrus country tours at from 400-600 MAD. Buy oranges directly from roadside farms for from 5 MAD/kg.', savings: 'Save from 385-585 MAD vs. tour' },
  { tip: 'Free Music in the Streets', icon: Music, description: 'Rai music is everywhere in Oujda — cafes, taxis, street performers. No need to pay for a concert venue. During the September Rai Festival, many outdoor performances are free.', savings: 'Free — music is Oujda DNA' },
  { tip: 'Self-Guided Medina Walk', icon: Compass, description: 'The compact medina is easy to explore without a guide. Enter at Bab Sidi Abdelwahab and follow the main souks. Official guides cost from 200 MAD, but the medina is small enough to navigate independently.', savings: 'Save from 200 MAD on guide fees' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Border Culture Is Unique', icon: Globe, description: 'Oujda sits just 14 km from Algeria. The closed border has not erased cultural connections — you will hear Algerian-accented Arabic, taste shared cuisine, and experience a cultural blend found nowhere else in Morocco. Embrace this unique cross-border identity.' },
  { tip: 'Summer Heat Is Intense', icon: Sun, description: 'Oujda can exceed 40 degrees in July and August. Plan outdoor sightseeing for early morning (before 10 AM) and evening (after 5 PM). Saidia beach provides coastal relief during the hottest months. Stay hydrated and carry water.' },
  { tip: 'Learn Some Rai History', icon: Music, description: 'Rai music originated in the Morocco-Algeria borderlands as the voice of the marginalized, blending Bedouin poetry with Western instruments. Understanding its social context enriches your experience of Oujda deeply. Ask locals about their favorite Rai artists.' },
  { tip: 'Cash Is King Outside the City', icon: AlertTriangle, description: 'While Oujda city center has ATMs and some card acceptance, Saidia beach, Beni-Snassen mountains, and Berkane are largely cash economies. Withdraw sufficient dirhams before day trips. Small denominations are essential for taxis and markets.' },
  { tip: 'University Brings Culture', icon: GraduationCap, description: 'Mohammed I University population means Oujda has bookshops, cultural centers, and intellectual cafes unusual for a city its size. The university area is worth exploring for its cafe culture and youthful energy, especially during term time.' },
  { tip: 'Airport Connections Are Growing', icon: Compass, description: 'Oujda Angads Airport has expanding connections. RAM flies to Casablanca multiple times daily. Seasonal Ryanair and other low-cost flights connect to European cities. Check for direct flights from your country — it may be easier to reach than expected.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Oujda known for?', answer: 'Oujda is the capital of eastern Morocco and the gateway city to the Algerian border (14 km away). It is famous for Rai and Gharnati music traditions, Parc Lalla Aicha, the medieval medina with Bab Sidi Abdelwahab gate, Sidi Yahia pilgrimage site, proximity to Saidia beach (60 km, the "Blue Pearl"), the Beni-Snassen mountains, and Berkane orange country. It is also a major university city with a vibrant student culture.' },
  { question: 'How far is Saidia beach from Oujda?', answer: 'Saidia is 60 km north of Oujda, about 45 minutes by car or grand taxi. Shared grand taxis from Oujda cost from 25 MAD per person. The beach stretches 14 km along the Mediterranean coast with golden sand, a marina, golf course, and resort hotels. The public beach sections are free. Best visited June to September for swimming.' },
  { question: 'How do I get to Oujda?', answer: 'Oujda Angads Airport (OUD) has domestic flights from Casablanca and seasonal European connections. ONCF trains connect to Fes (from 130 MAD, 5-6 hours) and beyond. CTM buses serve all major cities. By car, Oujda is 580 km east of Fes via the A2 motorway, 150 km from Nador, and 220 km from Taza.' },
  { question: 'Can you cross into Algeria from Oujda?', answer: 'No. The Morocco-Algeria land border has been closed since 1994. The border crossing at Bab el-Assa (14 km from Oujda) is not operational. Despite the closed border, Oujda maintains strong cultural ties to Algeria through shared music, cuisine, family connections, and the distinctive cross-border culture that gives the city its unique character.' },
  { question: 'How many days do you need in Oujda?', answer: 'Two to three days is ideal. Day 1: medina, Bab Sidi Abdelwahab, Parc Lalla Aicha, Sidi Yahia, and evening promenade. Day 2: Saidia beach day trip (60 km). Day 3: Beni-Snassen mountains and Berkane orange country, plus Museum of Lalla Meryem and evening music. One full day covers the essential city sights.' },
  { question: 'What is the best time to visit Oujda?', answer: 'Spring (March-May) and autumn (September-November) offer the best weather at 18-28 degrees. Summer exceeds 40 degrees but Saidia beach provides relief. Winter is mild (8-15 degrees). The International Rai Festival in September and Berkane Orange Festival are cultural highlights. March-April brings orange blossom season in Berkane.' },
  { question: 'Is Oujda worth visiting?', answer: 'Yes, for travelers seeking authentic, untouristy Morocco. Oujda offers a unique border-city culture, world-class Rai music, a genuine working medina without tourist pressure, Mediterranean beaches at Saidia, mountain excursions, and some of the lowest prices in Morocco. It is ideal for those who want to experience Morocco as Moroccans live it.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/taza-guide', icon: MapPin, title: 'Taza Guide', description: 'Ancient fortified medina and gateway to Tazzeka National Park with Africa deepest caves.' },
  { href: '/nador-guide', icon: MapPin, title: 'Nador Guide', description: 'Rif coast city with Marchica lagoon, Mediterranean beaches, and Melilla day trips.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches and hidden coves along the Atlantic and Mediterranean coasts.' },
  { href: '/morocco-budget-guide', icon: Lightbulb, title: 'Morocco Budget Guide', description: 'How to explore Morocco affordably with real prices, tips, and strategies.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, including the eastern corridor.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function OujdaGuidePage() {
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
            <span className="text-white">Oujda Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Complete Guide
            <br className="hidden md:block" /> to Oujda
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Eastern Morocco&apos;s capital city where Rai music echoes through ancient medina walls,
            Mediterranean beaches shimmer on the horizon, and Algerian-Moroccan culture creates
            something found nowhere else.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Oujda: Where Morocco Meets the East
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Oujda occupies a unique position in Morocco — geographically, culturally, and
                emotionally. Sitting just 14 kilometers from the Algerian border, this city of over
                half a million people has been shaped by centuries of cross-border exchange, creating
                a cultural identity that blends Moroccan traditions with Algerian influences in music,
                cuisine, dialect, and daily life. It is the capital of the Oriental region, Morocco
                largest and most sparsely populated, stretching from the Mediterranean coast to the
                edges of the Sahara.
              </p>
              <p>
                While most tourists bypass Oujda entirely on their way between Fes and the Mediterranean,
                the city rewards curious travelers with genuine discoveries. The medieval medina, entered
                through the imposing Bab Sidi Abdelwahab, contains working souks where prices reflect
                local economics, not tourist expectations. The magnificent Parc Lalla Aicha provides a
                green sanctuary in the city center. And the music — Oujda is the undisputed capital of
                Rai, the soulful genre born in these borderlands that blends Bedouin poetry with modern
                rhythms.
              </p>
              <p>
                Beyond the city, the region offers remarkable diversity: Saidia beach, the "Blue Pearl,"
                stretches 14 km along the Mediterranean just 60 km north. The Beni-Snassen mountains
                rise with gorges, springs, and caves. And the Berkane plain spreads with orange groves
                whose spring blossoms perfume the air for miles. This guide covers everything you need
                to explore Oujda and its surrounding region with real prices and practical insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top 12 Must-Do -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 12 Oujda Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the medina to the Mediterranean, these define a visit to eastern Morocco capital.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Saidia Beach (Blue Pearl)', price: 'From 25 MAD taxi', time: 'Full day', category: 'Beach' },
              { rank: 2, name: 'Oujda Medina & Souks', price: 'Free', time: '2-3 hours', category: 'Cultural Heritage' },
              { rank: 3, name: 'Bab Sidi Abdelwahab', price: 'Free', time: '20-30 min', category: 'Historic Landmark' },
              { rank: 4, name: 'Parc Lalla Aicha', price: 'Free', time: '1-2 hours', category: 'Urban Park' },
              { rank: 5, name: 'Rai Music Experience', price: 'Free - From 50 MAD', time: '2-3 hours', category: 'Music & Culture' },
              { rank: 6, name: 'Beni-Snassen Mountains', price: 'From 300 MAD taxi', time: 'Full day', category: 'Nature' },
              { rank: 7, name: 'Sidi Yahia Pilgrimage', price: 'Free', time: '30-45 min', category: 'Spiritual Heritage' },
              { rank: 8, name: 'Berkane Orange Country', price: 'From 15 MAD taxi', time: '3-5 hours', category: 'Agricultural' },
              { rank: 9, name: 'Ain Sfa Springs', price: 'Free', time: '3-4 hours', category: 'Nature' },
              { rank: 10, name: 'Museum of Lalla Meryem', price: 'From 10 MAD', time: '45 min - 1 hr', category: 'Museum' },
              { rank: 11, name: 'Moulouya River Birdwatching', price: 'Free', time: '2-3 hours', category: 'Wildlife' },
              { rank: 12, name: 'Evening Boulevard Promenade', price: 'Free', time: '1-2 hours', category: 'Local Life' },
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

      {/* -- City Attractions -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            City Attractions &amp; Cultural Sights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Oujda city center blends a medieval medina with French colonial architecture, green parks,
            and a youthful university-town energy unique in eastern Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most city attractions are free. The medina and parks are walkable from the city center.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cityAttractions.map((attraction) => {
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

      {/* -- Day Trips & Excursions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Mediterranean beaches and mountain gorges to orange groves and wetland birdwatching,
            the Oujda region offers remarkable diversity within easy reach.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Grand taxis from Oujda serve all these destinations. Negotiate day rates for mountain excursions.
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

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Oujda
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eastern Morocco is already one of the most affordable regions. These tips help you maximize value.
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
            Insider Tips for Oujda
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential knowledge for navigating eastern Morocco most distinctive city.
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

      {/* -- Sample 3-Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 3-Day Oujda Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            City, beach, and mountains — experience the full diversity of eastern Morocco.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Oujda City &amp; Culture
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at Bab Sidi Abdelwahab and enter the medina. Explore the covered souks —
                      spice market, gold and jewelry alley, and traditional clothing sections. Visit the
                      Museum of Lalla Meryem (from 10 MAD) for context on eastern Moroccan heritage.
                      Walk the medina ramparts for city views.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a local restaurant near the medina (from 25-40 MAD). Take a grand taxi
                      to Sidi Yahia pilgrimage site (from 15-20 MAD) and explore the shrine and oasis
                      garden. Return to Parc Lalla Aicha for a relaxing afternoon in the gardens.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Join the evening promenade on Boulevard Mohammed V. Dinner at a restaurant in the
                      ville nouvelle (from 40-80 MAD). Listen for Rai music in cafes — it is the
                      soundtrack of Oujda. Estimated Day 1 cost: from 100-200 MAD.
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
                  Day 2: Saidia Beach &amp; Mediterranean Coast
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Grand taxi to Saidia (from 25 MAD per person, 45 minutes). Arrive early to claim
                      a good beach spot. Swim in the calm Mediterranean waters and explore the marina
                      promenade. The eastern public beach sections are less crowded.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Seafood lunch at a corniche restaurant (from 60 MAD). Visit the Moulouya River
                      estuary at the western end of Saidia for birdwatching — flamingos, herons, and
                      egrets in the wetlands. Continue enjoying the 14 km of golden beach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset on the beach before returning to Oujda by grand taxi. Evening at a local
                      cafe with mint tea and music. Estimated Day 2 cost: from 150-300 MAD.
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
                  Day 3: Mountains, Gorges &amp; Orange Country
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Hire a grand taxi for a full-day Beni-Snassen excursion (from 300-500 MAD for the
                      car). Drive through Berkane orange country — stop at roadside fruit stalls (oranges
                      from 5 MAD/kg). Continue into the Zegzel Gorges, one of eastern Morocco most
                      scenic drives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit Ain Sfa springs for a refreshing swim in the natural pools. Explore the
                      Grotte du Chameau (Camel Cave) with a local guide if time permits. Picnic lunch
                      in the mountain setting (prepare supplies in advance from Oujda market, from 20-30 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Oujda for a farewell dinner at one of the best restaurants in the ville
                      nouvelle (from 60-100 MAD). Final evening promenade. Catch a night train to Fes
                      (from 130 MAD) or early flight to Casablanca. Estimated Day 3 cost: from 200-400 MAD.
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 350-600 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Shared taxis, street food, free attractions, public beaches</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 700-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private taxi for mountains, restaurant meals, beach activities</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-2,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private guide-driver, best restaurants, Saidia resort facilities</p>
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
            Continue Exploring Eastern Morocco
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
            Ready to Discover Oujda?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Rai rhythms in the medina to golden Mediterranean sands, eastern Morocco capital
            offers an authentic experience far from the tourist trail. Start planning your journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/taza-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Taza Guide
            </Link>
            <Link
              href="/nador-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Nador Guide
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

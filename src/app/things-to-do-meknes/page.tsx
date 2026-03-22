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
  Calendar,
  Ticket,
  Sun,
  Heart,
  Globe,
  Eye,
  Waves,
  TreesIcon,
  Mountain,
  MoonStar,
  Train,
  Crown,
  Columns3,
  Grape,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Top 15+ Things to Do in Meknes 2026 | Complete Guide',
  description:
    'Discover the best things to do in Meknes in 2026. Bab Mansour, Heri es-Souani, Place el-Hedim, Moulay Ismail Mausoleum, Volubilis day trip, Moulay Idriss, wine tasting, medina walks, and more. Prices in MAD and insider tips.',
  keywords: [
    'things to do in Meknes',
    'Meknes attractions',
    'Bab Mansour',
    'Meknes medina',
    'Meknes Morocco guide',
    'Meknes day trips',
    'Volubilis from Meknes',
    'what to do in Meknes',
    'Meknes activities',
    'Meknes sightseeing',
    'Heri es-Souani Meknes',
    'Place el-Hedim',
    'Moulay Ismail Mausoleum',
    'Moulay Idriss Zerhoun',
    'Meknes wine region',
    'Dar Jamai Museum',
    'Meknes Imperial city',
    'Meknes souks',
    'Meknes 2026',
    'Meknes travel guide',
    'best Meknes experiences',
  ],
  openGraph: {
    title: 'Top 15+ Things to Do in Meknes 2026 | Complete Guide',
    description:
      'The complete guide to Meknes activities and experiences. Bab Mansour, Heri es-Souani, Place el-Hedim, Volubilis, Moulay Idriss, wine tasting, medina, and more with prices in MAD.',
    url: `${BASE_URL}/things-to-do-meknes`,
    images: [
      {
        url: `${BASE_URL}/images/hero-meknes.webp`,
        width: 1200,
        height: 630,
        alt: 'The magnificent Bab Mansour gate in Meknes with its intricate zellige tilework and carved marble columns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 15+ Things to Do in Meknes 2026',
    description:
      'Bab Mansour, Heri es-Souani, Place el-Hedim, Moulay Ismail Mausoleum, Volubilis ruins, Moulay Idriss, wine tasting, medina, and souks. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-meknes.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-meknes` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-meknes`,
  name: 'Top 15+ Things to Do in Meknes 2026 | Complete Guide',
  description:
    'Discover the best things to do in Meknes in 2026. From the monumental Bab Mansour and royal granaries to Volubilis Roman ruins, Moulay Idriss pilgrimage town, and Morocco wine country.',
  url: `${BASE_URL}/things-to-do-meknes`,
  image: `${BASE_URL}/images/hero-meknes.webp`,
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
  mainEntityOfPage: `${BASE_URL}/things-to-do-meknes`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Meknes',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Meknes', item: `${BASE_URL}/meknes` },
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-meknes` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the top things to do in Meknes?', acceptedAnswer: { '@type': 'Answer', text: 'The top things to do include admiring Bab Mansour (free), visiting the Heri es-Souani royal granaries (from 20 MAD), exploring Place el-Hedim (free), Moulay Ismail Mausoleum (free), walking the medina and souks, Dar Jamai Museum (from 20 MAD), the Jewish mellah, Agdal Basin, a day trip to Volubilis Roman ruins (from 70 MAD), Moulay Idriss Zerhoun, wine tasting in the surrounding vineyards, and Royal Golf.' } },
    { '@type': 'Question', name: 'How many days do you need in Meknes?', acceptedAnswer: { '@type': 'Answer', text: 'One to two days is ideal for Meknes itself. Day 1: Bab Mansour, Place el-Hedim, Moulay Ismail Mausoleum, Heri es-Souani, Dar Jamai Museum, medina souks. Day 2: day trip to Volubilis and Moulay Idriss, wine tasting, Agdal Basin. Many travelers visit Meknes as a day trip from Fes (1 hour by train), but staying overnight allows a deeper experience.' } },
    { '@type': 'Question', name: 'Is Meknes worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Meknes is one of Morocco four imperial cities and was the capital under Sultan Moulay Ismail (1672-1727), who built it into a rival of Versailles. It has grand monuments, an authentic medina with minimal tourism pressure, excellent food, and is the gateway to Volubilis and Morocco wine country. It offers a more relaxed experience than Fes or Marrakech.' } },
    { '@type': 'Question', name: 'How do I get from Fes to Meknes?', acceptedAnswer: { '@type': 'Answer', text: 'ONCF trains run frequently between Fes and Meknes (from 25 MAD, 45 minutes to 1 hour). Grand taxis cost from 25 MAD shared and take about 1 hour. CTM and private buses also operate the route. The train is the most comfortable option with multiple daily departures.' } },
    { '@type': 'Question', name: 'Can I visit Volubilis from Meknes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Volubilis is 33 km from Meknes — about 40 minutes by car or grand taxi. Grand taxis from Place el-Hedim cost from 50 MAD per person shared or from 250 MAD for the whole car. Many visitors combine Volubilis with Moulay Idriss Zerhoun (5 km from Volubilis) for a full day trip. Entry to Volubilis is from 70 MAD.' } },
    { '@type': 'Question', name: 'What is Meknes known for?', acceptedAnswer: { '@type': 'Answer', text: 'Meknes is known as the Versailles of Morocco for its grand imperial architecture built by Sultan Moulay Ismail. Key landmarks include Bab Mansour (the grandest gate in Morocco), the Heri es-Souani royal granaries, and the Moulay Ismail Mausoleum. It is also Morocco wine capital, surrounded by the country largest vineyards, and serves as the gateway to the Volubilis Roman ruins.' } },
  ],
};

/* ===============================================================
   DATA: IMPERIAL MONUMENTS
   =============================================================== */

const imperialMonuments = [
  {
    name: 'Bab Mansour el-Aleuj',
    icon: Landmark,
    category: 'Imperial Gate',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Morning or late afternoon',
    description:
      'Bab Mansour is widely considered the grandest gate in all of Morocco — and possibly in all of North Africa. Completed in 1732 under Sultan Moulay Abdallah, it was named after its architect, a Christian convert to Islam named Mansour el-Aleuj ("Mansour the Renegade"). The gate is a masterwork of Moroccan decorative arts: the massive horseshoe arch is framed by fluted marble columns (repurposed from the Roman ruins of Volubilis), intricate zellige tilework in green and white, and carved stucco arabesques. The sheer scale — over 16 meters high — is staggering. It served as the monumental entrance to Moulay Ismail imperial city and remains the most photographed landmark in Meknes.',
    insiderTip:
      'The gate is most beautifully lit in late afternoon when the warm sun brings out the green and gold of the zellige tiles. Stand in Place el-Hedim opposite for the best photographs. The gate itself is closed to foot traffic, but walk through the smaller flanking gate to enter the imperial city quarter beyond. Inside, temporary exhibitions are sometimes held in the gate chambers.',
  },
  {
    name: 'Heri es-Souani (Royal Granaries & Stables)',
    icon: Columns3,
    category: 'Imperial Architecture',
    price: 'From 20 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'The Heri es-Souani is one of the most awe-inspiring structures in Morocco — a vast complex of royal granaries and stables built by Sultan Moulay Ismail to supply his imperial city. The granaries feature ingeniously thick walls (up to 4 meters) and an underground water channel system that kept the interior naturally cool, preserving grain for years. The adjoining stables were designed to house 12,000 horses — a scale of ambition that earned Moulay Ismail comparisons to Louis XIV. Much of the roof has collapsed, creating a hauntingly beautiful ruin of massive arches and columns open to the sky. Behind the complex, the Agdal Basin — a vast artificial lake — provided water and leisure for the royal court.',
    insiderTip:
      'The roofless sections create dramatic light and shadow effects — morning light streaming through the massive arches is extraordinary for photography. The underground chambers are cool even in summer heat. Walk behind the granaries to the Agdal Basin for a peaceful escape. The complex is less visited than the medina, so you may have it nearly to yourself on weekday mornings.',
  },
  {
    name: 'Moulay Ismail Mausoleum',
    icon: Crown,
    category: 'Royal Mausoleum',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Morning (before 11 AM)',
    description:
      'The tomb of Sultan Moulay Ismail (1634-1727), the ruler who made Meknes his capital and transformed it into an imperial city to rival Versailles, is one of the few Islamic religious sites in Morocco open to non-Muslims. The mausoleum was restored by King Mohammed V in the 1950s and is a masterpiece of traditional Moroccan craftsmanship: intricately carved stucco walls, stunning zellige tilework, painted cedarwood ceilings, and marble fountains. The peaceful courtyard leads to the burial chamber where Moulay Ismail rests alongside his wife and sons. The atmosphere is one of reverential beauty.',
    insiderTip:
      'Remove your shoes before entering (free shoe racks available). Dress modestly — cover shoulders and knees. Photography is permitted in the courtyards but not in the actual burial chamber. The craftsmanship rivals the Mohammed V Mausoleum in Rabat. Visit early morning when the light through the courtyard is softest. Non-Muslims can enter all areas except the prayer hall.',
  },
  {
    name: 'Place el-Hedim',
    icon: Eye,
    category: 'Public Square',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late afternoon to evening',
    description:
      'Place el-Hedim (the "Square of Demolition") is Meknes main public square and social heart. Created by Moulay Ismail by demolishing existing buildings to clear a grand approach to Bab Mansour, it serves the same function in Meknes that Djemaa el-Fna does in Marrakech — though on a smaller, more intimate scale. The square is ringed by cafes, shops, and food stalls. In the evening, storytellers, musicians, and food vendors set up, creating a lively atmosphere. The views across the square toward the floodlit Bab Mansour at night are magnificent.',
    insiderTip:
      'The square transforms at sundown — grab a cafe table with a view of Bab Mansour and watch the evening entertainment unfold. The food stalls on the eastern side serve excellent grilled meats, salads, and fresh juice (from 20-40 MAD for a full meal). Unlike Djemaa el-Fna, the prices here are genuinely local — no tourist inflation. The Dar Jamai Museum is at the far end of the square.',
  },
];

/* ===============================================================
   DATA: MEDINA & CULTURE
   =============================================================== */

const medinaCulture = [
  {
    name: 'Meknes Medina & Souks',
    icon: ShoppingBag,
    category: 'Shopping & Heritage',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Morning (9 AM - 12 PM)',
    description:
      'The Meknes medina is one of the most authentic and least touristy in Morocco. Unlike Marrakech or Fes where visitors are constantly approached by touts and guides, the Meknes souks function primarily for local residents. This means genuine craftsmanship, real prices, and an unhurried atmosphere. The covered souk passages are organized by trade: metalworkers, leather craftsmen, carpenters, spice merchants, and textile weavers each have their own quarter. The quality of Meknes woodwork and embroidery is particularly notable — the city has a centuries-old tradition of fine craftsmanship that continues today.',
    insiderTip:
      'Enter the souks from Place el-Hedim and follow the main covered passage (Souk es-Sebbat) deeper into the medina. The ironwork souk (Souk en-Nejjarine) is fascinating — watch craftsmen hammering out lanterns and door knockers. Prices are 30-50 percent lower than Marrakech for comparable quality. Bargaining is expected but less aggressive. The Thursday souk brings extra vendors from surrounding villages.',
  },
  {
    name: 'Dar Jamai Museum',
    icon: Landmark,
    category: 'Museum & Palace',
    price: 'From 20 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'Housed in a magnificent 19th-century palace built by the Jamai family (once powerful viziers), this museum showcases the traditional arts of Meknes and the Fes-Meknes region. The palace itself — with its central courtyard, carved stucco, painted ceilings, and lush Andalusian garden — is the main attraction. Collections include traditional Meknes embroidery (renowned throughout Morocco), ceramics, jewelry, woodwork, weaponry, and textiles. The rooftop terrace offers panoramic views over Place el-Hedim and the medina roofscape.',
    insiderTip:
      'The palace architecture alone justifies the entry fee. The Andalusian garden in the central courtyard is a peaceful retreat from the square outside. The embroidery collection is exceptional — Meknes embroidery is considered among the finest in Morocco. The rooftop terrace at the back has a view across to Bab Mansour that few visitors discover. Allow 45 minutes.',
  },
  {
    name: 'Jewish Mellah',
    icon: Globe,
    category: 'Historic Quarter',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Morning',
    description:
      'The old Jewish quarter of Meknes, established during the Merenid period, is a poignant reminder of the diverse communities that once thrived in Morocco imperial cities. Located adjacent to the medina, the mellah is recognizable by its slightly wider streets, balconied houses (unusual in Moroccan architecture), and the remains of synagogues. While the Jewish community has largely emigrated, the architectural character remains distinct. The quarter has a contemplative, slightly melancholic atmosphere that contrasts with the bustle of the adjacent souks.',
    insiderTip:
      'The mellah is easily combined with a medina walk — it is adjacent to the southwestern edge of the old city. Look for the distinctive wooden balconies on the upper floors of houses — these are characteristic of Jewish quarters across Morocco. A few craft workshops operate in the mellah, and the quieter atmosphere makes it easier to photograph architectural details. Respectful behavior is appreciated.',
  },
  {
    name: 'Agdal Basin (Bassin de l\'Agdal)',
    icon: Waves,
    category: 'Historic Reservoir',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Late afternoon',
    description:
      'This enormous artificial lake behind the Heri es-Souani was built by Sultan Moulay Ismail to irrigate his palace gardens and provide water for the imperial city. Measuring roughly 4 hectares, it is fed by a system of underground channels from the Middle Atlas Mountains — an engineering feat that still impresses today. The basin is surrounded by olive groves and gardens, and local families gather here on evenings and weekends. The setting, with the Heri es-Souani arches reflected in the water, is serene and beautiful.',
    insiderTip:
      'Combine a visit with the Heri es-Souani — the basin is directly behind the granaries. Late afternoon light is beautiful here, with the water reflecting the ruins and sky. It is a popular picnic spot for locals on weekends. The surrounding olive groves are pleasant for a short walk. The basin has been partially restored and the pathways improved.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS
   =============================================================== */

const dayTrips = [
  {
    name: 'Volubilis Roman Ruins',
    icon: Columns3,
    category: 'UNESCO World Heritage',
    price: 'From 70 MAD (entry) + from 50 MAD (transport)',
    duration: 'Half to full day',
    bestTime: 'Morning (avoid midday heat)',
    description:
      'The Roman city of Volubilis, 33 km north of Meknes, is one of the best-preserved Roman archaeological sites in North Africa and a UNESCO World Heritage Site. Founded in the 3rd century BC and expanded under Roman rule from the 1st century AD, the site features remarkably intact mosaics, triumphal arches, basilicas, a capitol temple, olive presses, and residential houses with floor mosaics still in place. The Triumphal Arch of Caracalla, the Capitol, and the House of Orpheus with its famous mosaic are highlights. The setting — golden ruins on a fertile plain with the Zerhoun mountains behind — is spectacular.',
    insiderTip:
      'Arrive early (the site opens at 8:30 AM) to beat the heat and tour groups. The mosaics in the House of the Labours of Hercules, House of the Acrobat, and House of Venus are extraordinarily well-preserved — take time to study them. Wear sun protection and comfortable shoes (the site is large and exposed). Grand taxis from Meknes cost from 50 MAD per person shared. Combine with Moulay Idriss for a full day.',
  },
  {
    name: 'Moulay Idriss Zerhoun',
    icon: Mountain,
    category: 'Holy Town',
    price: 'From 10 MAD (transport)',
    duration: '2-3 hours',
    bestTime: 'Morning',
    description:
      'Draped over two hills just 5 km from Volubilis, the whitewashed town of Moulay Idriss Zerhoun is Morocco most sacred site — the resting place of Moulay Idriss I, the founder of the first Moroccan dynasty and the great-grandson of the Prophet Mohammed. Until recently, non-Muslims were not permitted to stay overnight. Today, the town welcomes visitors with charming guesthouses, panoramic terraces, and a medina that feels untouched by time. The town offers stunning views over the surrounding countryside and the Volubilis plain.',
    insiderTip:
      'Non-Muslims cannot enter the main shrine of Moulay Idriss, but the town itself is open to all visitors. Climb to the Grand Terrace viewpoint for a panoramic view over both hills and the countryside. The Saturday market is vibrant and authentic. Small restaurants in the medina serve excellent home-style Moroccan food (tagine from 35 MAD). Combine with Volubilis for a perfect day trip from Meknes.',
  },
  {
    name: 'Wine Tasting in the Meknes Region',
    icon: Grape,
    category: 'Gastronomy',
    price: 'From 150 MAD (winery visit with tasting)',
    duration: 'Half day',
    bestTime: 'Morning or afternoon',
    description:
      'Meknes is the capital of Moroccan wine production, surrounded by the country largest vineyards. The Guerrouane and Beni Sadden regions produce reds, roses, and grays (gris) from Grenache, Cinsault, Carignan, and Cabernet Sauvignon grapes. Domaine de la Zouina, Chateau Roslane, and Les Celliers de Meknes are among the most established producers, offering tours and tastings. Moroccan wine has improved dramatically in recent years, and the Meknes terroir — with its altitude, clay soils, and continental climate — produces wines of genuine quality and character.',
    insiderTip:
      'Domaine de la Zouina (about 20 km from Meknes) offers the most visitor-friendly experience with guided tours, tastings, and a restaurant serving Moroccan-Mediterranean cuisine paired with their wines (tasting from 150 MAD, lunch from 200 MAD). Book in advance. Chateau Roslane also offers tours. A grand taxi to the vineyards costs from 200-300 MAD return. Wine is available in licensed restaurants and supermarkets in Meknes city.',
  },
];

/* ===============================================================
   DATA: FOOD & LEISURE
   =============================================================== */

const foodLeisure = [
  {
    name: 'Meknes Food Scene',
    icon: UtensilsCrossed,
    category: 'Dining',
    price: 'From 30 MAD (street food) to from 200 MAD (fine dining)',
    duration: '1-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'Meknes food scene is authentic, affordable, and deeply local. The city is renowned for its olive oil, preserved lemons, and dairy products from the surrounding agricultural plains. Place el-Hedim food stalls serve some of the best and cheapest street food in Morocco: grilled kefta (from 15 MAD), tangia meknessia (the local slow-cooked meat specialty, from 40 MAD), fresh bread, and salads. The medina restaurants offer traditional tagines and couscous at prices well below Fes or Marrakech. For upscale dining, the Ville Nouvelle has several excellent restaurants.',
    insiderTip:
      'Try tangia meknessia — the Meknes specialty of meat slow-cooked overnight in an urn in the communting hammam ashes (from 40 MAD at medina restaurants). The olive market in the medina is one of the best in Morocco — dozens of varieties available for tasting before purchase. For the best value, eat at the food stalls on Place el-Hedim at sunset. The fresh orange juice stands charge from 4-5 MAD per glass — the cheapest in Morocco.',
  },
  {
    name: 'Royal Golf de Meknes',
    icon: TreesIcon,
    category: 'Sport & Leisure',
    price: 'From 400 MAD (green fee)',
    duration: '3-4 hours',
    bestTime: 'Morning',
    description:
      'The Royal Golf de Meknes is one of Morocco most historic golf courses, established in 1971 within the grounds of the former royal palace gardens. The 9-hole course (played as 18 with different tees) is set among mature trees, olive groves, and historic palace walls. The setting is uniquely atmospheric — you play alongside Moulay Ismail ancient ramparts and garden walls. The clubhouse serves good food and drinks with views over the course. It is a relaxed, affordable golfing experience compared to the luxury courses of Marrakech.',
    insiderTip:
      'Green fees are significantly lower than Marrakech courses (from 400 MAD vs. from 1,000+ MAD). Club rental is available (from 150 MAD). The course is walkable and flat. Advance booking is recommended on weekends but weekdays are usually quiet. The surrounding gardens — remnants of Moulay Ismail vast pleasure grounds — are beautiful to explore even if you do not play golf.',
  },
  {
    name: 'Meknes Evening Culture',
    icon: MoonStar,
    category: 'Evening Entertainment',
    price: 'From 30 MAD (drinks)',
    duration: '2-3 hours',
    bestTime: 'Evening',
    description:
      'Meknes evening life centers on Place el-Hedim and the Ville Nouvelle. The square comes alive after dark with food stalls, musicians, and families promenading — a more intimate version of Marrakech Djemaa el-Fna. The Ville Nouvelle has cafes, patisseries, and a few bars. The cultural life is quieter than Fes or Rabat but genuinely local. The annual Meknes International Film Festival and the olive harvest festival in October bring extra energy. The Moroccan tradition of the evening promenade (the "passeggiata") is alive and well here.',
    insiderTip:
      'Place el-Hedim with the floodlit Bab Mansour behind is magical after dark. Grab street food and find a bench to absorb the atmosphere. The Ville Nouvelle cafes along Avenue Ismail serve good patisserie and coffee. For a drink, the hotels in the Ville Nouvelle have bars. The city is conservative — nightlife is subdued compared to Marrakech or Tangier, but the evening square scene is one of the most authentic in Morocco.',
  },
  {
    name: 'Olive Groves & Countryside',
    icon: TreesIcon,
    category: 'Nature & Agriculture',
    price: 'Free (self-guided)',
    duration: '2-3 hours',
    bestTime: 'Morning',
    description:
      'The Meknes plain is one of Morocco most fertile agricultural regions, carpeted with olive groves, vineyards, wheat fields, and fruit orchards. The olive oil from this region is considered the finest in the country, and the annual olive harvest (October-November) is a significant cultural event. Driving or cycling through the countryside reveals a peaceful, rural Morocco that most tourists never see — ancient farmhouses, grazing flocks, and the Middle Atlas Mountains rising to the south. The landscape between Meknes and Volubilis is particularly scenic.',
    insiderTip:
      'The road from Meknes to Volubilis passes through beautiful olive country — if you have a rental car, take the smaller roads for a scenic route. The olive market in the Meknes medina sells dozens of varieties of olives and olive oil — purchase directly from producers for the best quality and prices. The countryside is most beautiful in spring (March-May) when wildflowers carpet the fields.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Free Imperial Sights', icon: Landmark, description: 'Bab Mansour, Place el-Hedim, the Moulay Ismail Mausoleum, and the Agdal Basin are all free. The most impressive monuments in Meknes cost nothing to visit.', savings: 'Free — the best of Meknes' },
  { tip: 'Cheapest Street Food in Morocco', icon: UtensilsCrossed, description: 'Place el-Hedim food stalls serve complete meals from 20-40 MAD. Orange juice from 4-5 MAD. This is consistently cheaper than any other tourist city in Morocco.', savings: 'Save from 40-100 MAD per meal vs. Marrakech' },
  { tip: 'Shared Grand Taxi to Volubilis', icon: MapPin, description: 'A shared grand taxi to Volubilis costs from 50 MAD per person. Organized tours charge from 400-800 MAD per person for the same trip.', savings: 'Save from 350-750 MAD vs. organized tour' },
  { tip: 'Train from Fes Instead of Tour', icon: Train, description: 'The train from Fes to Meknes costs from 25 MAD (45 minutes). Many Fes-based tours to Meknes and Volubilis charge from 600-1,200 MAD per person.', savings: 'Save from 500-1,100 MAD vs. tour' },
  { tip: 'Medina Shopping at Real Prices', icon: ShoppingBag, description: 'Meknes souks sell to locals, not tourists. Crafts, leather, and textiles are 30-50 percent cheaper than Marrakech or Fes for comparable quality.', savings: 'Save 30-50% on shopping' },
  { tip: 'Combine Volubilis and Moulay Idriss', icon: Compass, description: 'Both sites are only 5 km apart. A shared grand taxi can take you to both and back to Meknes for from 70-100 MAD per person total.', savings: 'Save from 200-400 MAD vs. separate trips' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Meknes Is the Anti-Marrakech', icon: Heart, description: 'If you find Marrakech overwhelming, Meknes offers the same imperial grandeur with a fraction of the crowds and hassle. The medina is genuine and the atmosphere is relaxed. Locals appreciate respectful visitors.' },
  { tip: 'Best Photography Spots', icon: Camera, description: 'Bab Mansour at sunset with warm light on the zellige tiles. The Heri es-Souani arches with morning light streaming through. Place el-Hedim at blue hour with the gate floodlit. The Volubilis Triumphal Arch against the mountains.' },
  { tip: 'The Moulay Ismail Legacy', icon: Crown, description: 'Understanding Moulay Ismail (1672-1727) enriches every visit. He built 25 km of walls, maintained an army of 150,000, had hundreds of wives and children, and dreamed of rivaling Versailles. His ambition shaped everything you see in Meknes.' },
  { tip: 'Combined Ticket Value', icon: Ticket, description: 'If visiting multiple paid sites (Heri es-Souani, Dar Jamai Museum, Volubilis), consider asking about combined tickets at the first site. This can save money on entry fees though availability varies.' },
  { tip: 'Best Day Trip Timing', icon: Calendar, description: 'For Volubilis, arrive at 8:30 AM opening to avoid heat and crowds. Visit Moulay Idriss for lunch. Return to Meknes by mid-afternoon for the evening square scene. This optimizes the entire day.' },
  { tip: 'Morocco Wine Capital', icon: Grape, description: 'Meknes is the only Moroccan city where wine culture is a genuine attraction. The surrounding vineyards are accessible and welcoming. Wine is available in restaurants and shops in the Ville Nouvelle. Ask locals for recommendations.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the top things to do in Meknes?', answer: 'The top things to do include admiring Bab Mansour (free), visiting the Heri es-Souani royal granaries (from 20 MAD), exploring Place el-Hedim (free), the Moulay Ismail Mausoleum (free), walking the medina souks (free), Dar Jamai Museum (from 20 MAD), the Jewish mellah (free), Agdal Basin (free), a day trip to Volubilis (from 70 MAD), Moulay Idriss Zerhoun, wine tasting (from 150 MAD), and Royal Golf (from 400 MAD).' },
  { question: 'How many days do you need in Meknes?', answer: 'One to two days is ideal. Day 1: Bab Mansour, Place el-Hedim, Moulay Ismail Mausoleum, Heri es-Souani, Agdal Basin, Dar Jamai Museum, medina souks, evening on Place el-Hedim. Day 2: day trip to Volubilis and Moulay Idriss, wine tasting, return for evening. One day covers the city highlights; two days allows the essential day trip.' },
  { question: 'How do I get from Fes to Meknes?', answer: 'ONCF trains run frequently between Fes and Meknes (from 25 MAD, 45 minutes to 1 hour). Grand taxis cost from 25 MAD shared. CTM buses are also available. The train station is in the Ville Nouvelle, a 15-minute walk or short petit taxi ride (from 10 MAD) from Place el-Hedim.' },
  { question: 'Is Meknes worth visiting?', answer: 'Absolutely. Meknes is one of Morocco four imperial cities with grand monuments, an authentic medina with minimal tourism pressure, excellent affordable food, nearby Volubilis Roman ruins, and Morocco wine country. It offers a more genuine Moroccan experience than Marrakech or even Fes, with the same imperial heritage.' },
  { question: 'Can I visit Volubilis from Meknes?', answer: 'Yes, Volubilis is 33 km north of Meknes (40 minutes by car). Grand taxis from Place el-Hedim cost from 50 MAD shared or from 250 MAD for the car. Entry is from 70 MAD. Combine with Moulay Idriss Zerhoun (5 km from Volubilis) for a full day. Morning visits are best to avoid midday heat.' },
  { question: 'What food is Meknes known for?', answer: 'Meknes is famous for its olive oil (considered Morocco finest), tangia meknessia (slow-cooked meat specialty), preserved lemons, dairy products, and extremely affordable street food. Place el-Hedim has excellent food stalls. The surrounding agricultural region produces high-quality olives, wine, and seasonal produce.' },
  { question: 'What is the best time to visit Meknes?', answer: 'April to June and September to November offer the best weather (18-28 degrees). Summer (July-August) is hot (35+ degrees) which makes outdoor sightseeing, especially Volubilis, uncomfortable. Winter is mild (8-16 degrees) with occasional rain. Spring is ideal — wildflowers in the countryside, comfortable temperatures, and the storks nesting at Volubilis.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/meknes', icon: MapPin, title: 'Meknes City Guide', description: 'Complete guide to Meknes: neighborhoods, transport, accommodation, and planning.' },
  { href: '/things-to-do-rabat', icon: Landmark, title: 'Things to Do in Rabat', description: 'Explore Morocco elegant capital — Hassan Tower, Kasbah Oudaias, Chellah, and more.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to street food and wine — the complete cuisine guide.' },
  { href: '/fes', icon: Globe, title: 'Fes City Guide', description: 'The world largest car-free urban area, an hour from Meknes — the ultimate day trip.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Morocco Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function ThingsToDoMeknesPage() {
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
            backgroundImage: 'url(/images/hero-meknes.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/meknes" className="hover:text-white transition-colors">
              Meknes
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Crown className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top Things to Do
            <br className="hidden md:block" /> in Meknes
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the grandest gate in Morocco and haunting royal granaries to Volubilis Roman ruins and wine country.
            Your complete 2026 guide to the Versailles of Morocco, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Meknes: The Versailles of Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Meknes is the imperial city that ambition built. When Sultan Moulay Ismail made it his
                capital in 1672, he set out to create a city that would rival Versailles. Over 55 years,
                he constructed 25 kilometers of massive walls, monumental gates covered in zellige tilework,
                vast royal granaries capable of feeding an army, an artificial lake, and a palace complex
                so sprawling that it was said to contain 50 palaces within its walls. His 150,000-strong
                army and legendary ferocity kept Morocco unified, while his city grew to rival the greatest
                capitals of the Islamic world.
              </p>
              <p>
                Today, Meknes is Morocco most underrated imperial city. While travelers flock to Marrakech
                and Fes, Meknes offers the same grand architecture and rich history with a fraction of the
                crowds and none of the tourist pressure. The medina souks sell to locals at local prices.
                The monumental Bab Mansour — possibly the most beautiful gate in North Africa — stands
                largely unvisited by international tourists. And just 33 kilometers north, the Roman ruins
                of Volubilis and the holy town of Moulay Idriss Zerhoun provide two of Morocco most
                extraordinary day trips.
              </p>
              <p>
                This guide covers 15+ of the best things to do in Meknes, organized by category: imperial
                monuments, medina and culture, day trips, food and leisure. Each includes real 2026 prices
                in MAD, practical logistics, and insider tips from people who know this city intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top 10 Must-Do -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Must-Do Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Short on time? These are the ten experiences that define a visit to Meknes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Bab Mansour Gate', price: 'Free', time: '30-45 min', category: 'Imperial Gate' },
              { rank: 2, name: 'Heri es-Souani (Royal Granaries)', price: 'From 20 MAD', time: '1-1.5 hours', category: 'Imperial Ruins' },
              { rank: 3, name: 'Volubilis Roman Ruins', price: 'From 70 MAD', time: 'Half day', category: 'UNESCO Site' },
              { rank: 4, name: 'Moulay Ismail Mausoleum', price: 'Free', time: '30-45 min', category: 'Royal Mausoleum' },
              { rank: 5, name: 'Place el-Hedim & Evening Scene', price: 'Free', time: '1-2 hours', category: 'Public Square' },
              { rank: 6, name: 'Medina Souks', price: 'Free', time: '2-3 hours', category: 'Shopping' },
              { rank: 7, name: 'Moulay Idriss Zerhoun', price: 'From 10 MAD', time: '2-3 hours', category: 'Holy Town' },
              { rank: 8, name: 'Dar Jamai Museum', price: 'From 20 MAD', time: '45 min - 1 hour', category: 'Museum' },
              { rank: 9, name: 'Wine Tasting', price: 'From 150 MAD', time: 'Half day', category: 'Gastronomy' },
              { rank: 10, name: 'Agdal Basin & Olive Groves', price: 'Free', time: '30-45 min', category: 'Nature' },
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

      {/* -- Imperial Monuments -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Imperial Monuments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The grand architectural legacy of Sultan Moulay Ismail, who spent 55 years transforming
            Meknes into a capital to rival Versailles.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {imperialMonuments.map((attraction) => {
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

      {/* -- Medina & Culture -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina &amp; Culture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            One of the most authentic and least touristy medinas in Morocco, where real
            craftsmanship meets genuine local life.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The medina is free to explore. Dar Jamai Museum charges a modest entry fee.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {medinaCulture.map((item) => {
              const MedIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MedIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Day Trips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Meknes is the gateway to some of Morocco most extraordinary sites — from the finest
            Roman ruins in Africa to Morocco holiest town and the country wine country.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Volubilis and Moulay Idriss can be combined in a single day trip. Grand taxis depart from Place el-Hedim.
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

      {/* -- Food & Leisure -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food, Nightlife &amp; Leisure
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the cheapest street food in Morocco and the local tangia specialty
            to evening entertainment on Place el-Hedim and royal golf.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Meknes food is among the most affordable in Morocco. Place el-Hedim stalls offer the best value.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodLeisure.map((item) => {
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

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Meknes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Meknes is already one of Morocco most affordable cities. These tips stretch your budget even further.
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
            Insider Tips for Meknes
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

      {/* -- Sample 2-Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 2-Day Meknes Itinerary
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
                  Day 1: Imperial City &amp; Medina
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at Place el-Hedim with a coffee (from 10 MAD) and take in the view of Bab Mansour.
                      Walk through the gate into the imperial city quarter. Visit the Moulay Ismail Mausoleum
                      (free, 30-45 minutes). Continue to the Heri es-Souani royal granaries (from 20 MAD, 1 hour)
                      and the Agdal Basin behind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a medina restaurant (tagine from 35 MAD). Visit the Dar Jamai Museum (from 20 MAD,
                      45 minutes) at the corner of Place el-Hedim. Explore the medina souks — the ironwork,
                      leather, and textile quarters. Browse the olive and spice markets. Walk through the mellah.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Place el-Hedim for the evening entertainment and street food stalls (full meal
                      from 20-40 MAD). Watch Bab Mansour illuminated at night. Cafe or patisserie in the Ville
                      Nouvelle (from 20 MAD). Estimated Day 1 cost: from 150-300 MAD.
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
                  Day 2: Volubilis, Moulay Idriss &amp; Wine
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Early grand taxi to Volubilis (from 50 MAD per person shared, 40 minutes). Explore the
                      Roman ruins (from 70 MAD entry, 1.5-2 hours) — the mosaics, Triumphal Arch, Capitol,
                      and residential houses. Continue to Moulay Idriss Zerhoun (5 km, from 10 MAD taxi).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch in Moulay Idriss — home-style tagine (from 35 MAD). Climb to the Grand Terrace
                      viewpoint. Walk the medina streets. Return toward Meknes and stop at Domaine de la Zouina
                      for wine tasting (from 150 MAD) or continue directly back to the city.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Meknes for a final evening on Place el-Hedim. Farewell dinner — treat yourself to
                      a Ville Nouvelle restaurant (from 100 MAD) or stick with the street food stalls (from 30 MAD).
                      Estimated Day 2 cost: from 300-600 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                2-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 300-500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Free monuments, street food, shared taxis to Volubilis</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 700-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Museum entries, restaurant meals, Volubilis, wine tasting</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-3,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private tours, fine dining, wine estate lunch, golf</p>
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
            Continue Planning Your Meknes Trip
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
            Ready to Explore Meknes?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the magnificent Bab Mansour and haunting royal granaries to Volubilis Roman mosaics and
            Moroccan wine tasting, Meknes offers imperial grandeur without the crowds. Start planning today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/meknes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Meknes City Guide
            </Link>
            <Link
              href="/things-to-do-rabat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Landmark className="w-5 h-5" />
              Things to Do in Rabat
            </Link>
            <Link
              href="/morocco-road-trip-routes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Road Trip Routes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

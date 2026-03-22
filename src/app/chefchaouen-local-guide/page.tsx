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
  Wind,
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  Sunset,
  TreesIcon,
  Mountain,
  Coffee,
  MoonStar,
  Droplets,
  Paintbrush,
  Flower2,
  BookOpen,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Chefchaouen Local & Hidden Gems Guide 2026 | Beyond the Blue Streets',
  description:
    'Discover Chefchaouen beyond the tourist trail. Ras el-Maa waterfall, Spanish Mosque sunset, Akchour waterfalls day trip, local hammams, Rif village cheese-making, hidden neighborhoods, and off-the-beaten-path experiences. Complete local guide with prices in MAD.',
  keywords: [
    'chefchaouen hidden gems',
    'chefchaouen local guide',
    'akchour waterfalls',
    'chefchaouen off beaten path',
    'chefchaouen hiking',
    'ras el maa chefchaouen',
    'chefchaouen spanish mosque',
    'chefchaouen local food',
    'talassemtane national park',
    'chefchaouen hammam',
    'chefchaouen cheese',
    'god bridge chefchaouen',
    'jebel el kelaa',
    'chefchaouen craft workshops',
    'chefchaouen monday market',
    'chefchaouen 2026',
    'chefchaouen travel guide',
    'rif mountains morocco',
  ],
  openGraph: {
    title: 'Chefchaouen Local & Hidden Gems Guide 2026 | Beyond the Blue Streets',
    description:
      'Go beyond the blue medina: Ras el-Maa waterfall, Spanish Mosque sunset hike, Akchour waterfalls, local hammams, Rif village cheese, hidden neighborhoods, and off-tourist-trail experiences.',
    url: `${BASE_URL}/chefchaouen-local-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-chefchaouen.webp`,
        width: 1200,
        height: 630,
        alt: 'Hidden blue alleyway in Chefchaouen medina with local life and Rif Mountain backdrop Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chefchaouen Local & Hidden Gems 2026',
    description:
      'Ras el-Maa, Spanish Mosque sunset, Akchour waterfalls, local hammams, Rif cheese, hidden spots. The local\'s guide to the Blue City.',
    images: [`${BASE_URL}/images/hero-chefchaouen.webp`],
  },
  alternates: { canonical: `${BASE_URL}/chefchaouen-local-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/chefchaouen-local-guide`,
  name: 'Chefchaouen Local & Hidden Gems Guide 2026',
  description:
    'Discover Chefchaouen beyond the tourist trail. Local neighborhoods, hidden waterfalls, traditional hammams, Rif village experiences, and off-beaten-path gems.',
  url: `${BASE_URL}/chefchaouen-local-guide`,
  image: `${BASE_URL}/images/hero-chefchaouen.webp`,
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
  mainEntityOfPage: `${BASE_URL}/chefchaouen-local-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Chefchaouen',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Chefchaouen', item: `${BASE_URL}/chefchaouen` },
      { '@type': 'ListItem', position: 3, name: 'Local Guide', item: `${BASE_URL}/chefchaouen-local-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the hidden gems in Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'Beyond the famous blue medina, hidden gems include the Ras el-Maa waterfall where locals gather and women wash laundry, the Spanish Mosque sunset hike (20 minutes uphill for panoramic views), Akchour waterfalls and God\'s Bridge (a day trip into Talassemtane National Park), the Bab el-Ain neighborhood (less touristy blue streets), local hammams like Hammam Jinan, Rif village cheese-making experiences, craft workshops tucked in medina alleys, and hiking Jebel el-Kelaa mountain.' } },
    { '@type': 'Question', name: 'How do I get to Akchour waterfalls from Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'Akchour is about 30 km from Chefchaouen. Take a grand taxi from the main taxi stand (from 25-30 MAD per person shared, 40 minutes). The hike to the small waterfalls takes about 1 hour, while the larger Grand Cascade takes 2-3 hours. God\'s Bridge is a separate trail from the same starting point (1.5 hours). Bring water, sturdy shoes, and sun protection. Start early to avoid afternoon heat.' } },
    { '@type': 'Question', name: 'Is the Spanish Mosque worth visiting in Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The Spanish Mosque (Mosquee Espagnole) is a 20-minute uphill walk from the medina and offers the best panoramic views of Chefchaouen\'s blue rooftops against the Rif Mountains. It is especially stunning at sunset when the town glows golden and blue. The mosque itself is an unfinished Spanish colonial-era building that is atmospheric in its incompleteness. It is free to visit and rarely crowded outside sunset time.' } },
    { '@type': 'Question', name: 'What local food should I try in Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'Local specialties include jben (fresh goat cheese made in Rif villages, from 10 MAD), Rif-style olive oil (richer than southern Moroccan varieties), bissara (fava bean soup, from 5 MAD at local stalls), fried fish at the market stalls (from 15 MAD), locally harvested honey, and traditional Rif bread. The cafes around Outa el-Hammam square serve excellent harira and tajines at local prices (from 30-50 MAD).' } },
    { '@type': 'Question', name: 'Are there good hikes near Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'Chefchaouen is surrounded by excellent hiking. Top options: Spanish Mosque sunset hike (easy, 20 minutes), Akchour waterfalls and God\'s Bridge (moderate, full day trip), Jebel el-Kelaa summit (challenging, 4-6 hours, 2,159 m), and trails within Talassemtane National Park (various lengths). The Rif Mountains offer some of Morocco\'s most rewarding and least crowded hiking terrain.' } },
    { '@type': 'Question', name: 'What is a traditional hammam experience like in Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'A traditional hammam in Chefchaouen (like Hammam Jinan) is a communal bathhouse experience. You progress through rooms of increasing heat, scrub with black soap (savon beldi) and a kessa glove, and rinse with warm water. Men and women use separate sections or different time slots. Entry costs from 15-20 MAD at public hammams. Bring your own towel and flip-flops, or rent them. It is deeply cleansing and a quintessential Moroccan experience.' } },
  ],
};

/* ===============================================================
   DATA: HIDDEN SPOTS & LOCAL LIFE
   =============================================================== */

const hiddenSpots = [
  {
    name: 'Ras el-Maa Waterfall & Laundry Area',
    icon: Droplets,
    category: 'Local Life & Nature',
    price: 'Free',
    duration: '30-60 minutes',
    bestTime: 'Morning (most activity)',
    description:
      'At the eastern edge of the medina, where the blue streets give way to the Rif mountainside, the Ras el-Maa river tumbles over a small cascade into a series of pools. This is one of Chefchaouen\'s most authentic spots — a place where tourists are secondary to daily local life. Women gather at the pools to wash laundry and blankets, beating them on the flat rocks in a rhythm that has not changed for generations. Children splash in the pools, men fill water jugs from the spring, and the sound of rushing water provides a natural soundtrack to the scene. The area is shaded by trees, the air is noticeably cooler, and the transition from the dense blue medina to this open, green riverside feels like entering another world. Several simple cafe terraces overlook the waterfall, offering a perfect spot to sit with mint tea and watch the daily theater unfold.',
    insiderTip:
      'Visit in the morning when the laundry washing is in full swing and the light through the trees is beautiful. Cross the small stone bridge above the waterfall for the best photographs looking back toward the medina. The path beyond continues up into the hills — follow it for 10 minutes for views back over the entire medina. Respect the women working — photograph the scene from a distance rather than close up.',
  },
  {
    name: 'Bab el-Ain Neighborhood',
    icon: MapPin,
    category: 'Hidden Neighborhood',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Late afternoon (best light)',
    description:
      'While every tourist gravitates to the main medina streets and Outa el-Hammam square, the Bab el-Ain neighborhood on the eastern side of the medina remains relatively undiscovered. Here, the blue paint is just as vivid but the alleys are quieter, the doors more ornate, and the chance of encountering local life — a grandmother spinning wool, a carpenter shaping wood in his doorway, children playing between painted walls — is far higher. The neighborhood climbs steeply up the hillside, creating dramatic steps and archways that frame views of the mountains above. Some of the deepest, most saturated blue walls in all of Chefchaouen are found here, untrampled by the daily tour group circuit. The neighborhood connects to Ras el-Maa, making a natural loop that takes you through the most authentic parts of the medina.',
    insiderTip:
      'Enter from the Ras el-Maa side and wander uphill. The streets are narrow and steep — wear comfortable shoes with grip. Late afternoon light hitting the eastern-facing blue walls creates the most intense color saturation. Bring a camera but leave the selfie stick — the tight alleys reward thoughtful composition over wide angles. A few tiny neighborhood shops sell handmade crafts without the hard sell of the main souk streets.',
  },
  {
    name: 'Outa el-Hammam Square (Local Perspective)',
    icon: Coffee,
    category: 'Cultural Hub',
    price: 'Free (food from 20 MAD)',
    duration: '1-2 hours',
    bestTime: 'Evening (when locals gather)',
    description:
      'The main square is no secret, but most visitors experience it wrong — rushing through for photographs or eating at the first restaurant that calls them in. To experience Outa el-Hammam like a local, slow down. The square is dominated by the Great Mosque with its distinctive octagonal minaret and the restored Kasbah with its garden. The real action is at the cafes along the edges, where Chefchaouen men gather in the evening for mint tea, heated political discussions, and card games. The vendors selling olives, fresh cheese, and honey along the Kasbah wall are local farmers, not tourist shops. The restaurants on the far side, away from the main entrance, serve better food at lower prices. In the evening, the square fills with families taking their evening stroll (paseo), children running, and the call to prayer echoing from the minaret — a scene unchanged for centuries.',
    insiderTip:
      'Choose a cafe on the Kasbah side of the square (not the tourist-facing restaurants opposite) for better prices and a more local crowd. Order bissara (fava bean soup, from 5 MAD) for an authentic Rif breakfast. Visit the Kasbah garden (from 10 MAD) for a peaceful escape — the rooftop offers a unique overhead view of the square. Evening, especially after the final call to prayer, is when the square feels most genuinely alive.',
  },
];

/* ===============================================================
   DATA: HIKING & NATURE
   =============================================================== */

const hikingNature = [
  {
    name: 'Spanish Mosque Sunset Hike',
    icon: Sunset,
    category: 'Easy Hike & Views',
    price: 'Free',
    duration: '1-2 hours (round trip)',
    bestTime: 'Late afternoon for sunset',
    description:
      'The hike to the Spanish Mosque (Mosquee Espagnole) is the single best activity in Chefchaouen for effort-to-reward ratio. A gentle 20-minute uphill walk from the medina leads to this unfinished colonial-era mosque perched on a hillside overlooking the entire town. The view is extraordinary: the blue-painted medina spilling down the valley below, hemmed by the dramatic peaks of Jebel el-Kelaa and Jebel Meggou, with the Rif Mountains extending to the horizon. The mosque itself — built by the Spanish during the Protectorate era but never completed — has a photogenic stone shell that frames the views beautifully. At sunset, the town catches golden light while the mountains turn purple and the blue rooftops seem to glow. It is arguably the most photographed viewpoint in all of Morocco, but somehow never feels crowded.',
    insiderTip:
      'The trail starts near Ras el-Maa and is well-marked. Arrive 45-60 minutes before sunset to claim a good spot — the flat rocks around the mosque make comfortable seats. Bring a snack and water. The light show lasts about 30 minutes, with the best colors just after the sun drops below the mountain ridge. The walk down in twilight is easy but bring a phone light for the last section. For an alternative perspective, continue past the mosque to higher ground — fewer people, even better panorama.',
  },
  {
    name: 'Akchour Waterfalls & God\'s Bridge',
    icon: Waves,
    category: 'Day Trip & Hiking',
    price: 'From 25 MAD (transport) + From 20 MAD (park entry)',
    duration: 'Full day (5-7 hours)',
    bestTime: 'Spring and early autumn (best water flow)',
    description:
      'The Akchour waterfalls are one of northern Morocco\'s natural wonders, hidden in the Talassemtane National Park about 30 km from Chefchaouen. Two separate trails lead from the trailhead: one to the waterfalls, one to God\'s Bridge. The waterfall trail follows the Farda River through a stunning gorge, passing swimming holes and small cascades before reaching the Grand Cascade — a 100-meter waterfall plunging into a turquoise pool in a natural amphitheater. God\'s Bridge (Pont de Dieu) is a massive natural stone arch spanning a deep canyon, formed over millennia by water erosion. Both trails pass through pristine Rif Mountain forest — Barbary oaks, cork trees, and wildflowers — with the sound of rushing water as a constant companion. The pools along the way are swimmable in summer, their blue-green color rivaling any tropical waterfall.',
    insiderTip:
      'Start early (leave Chefchaouen by 8 AM) to beat the midday heat and have the trails to yourself. The Grand Cascade trail is about 2.5 hours each way and can be slippery after rain — wear hiking shoes, not sandals. God\'s Bridge is a separate, shorter trail (1.5 hours each way) from the same starting point. Doing both in one day is possible but demanding. Bring lunch, plenty of water, and swimwear. Spring (March-May) offers the best water flow. Grand taxis from Chefchaouen cost from 25-30 MAD shared or from 200 MAD private.',
  },
  {
    name: 'Talassemtane National Park',
    icon: TreesIcon,
    category: 'Nature & Hiking',
    price: 'From 20 MAD (entry)',
    duration: 'Half day to multi-day',
    bestTime: 'Spring (March-May) or autumn (September-November)',
    description:
      'Talassemtane National Park protects 58,000 hectares of the Rif Mountains surrounding Chefchaouen, encompassing some of the last remaining Moroccan fir forests and extraordinary biodiversity. The park is home to Barbary macaques (one of the few places in Morocco to see them reliably), golden eagles, Egyptian vultures, and dozens of endemic plant species. Hiking trails range from easy half-day walks through cedar and oak forests to multi-day treks along mountain ridges with views stretching to the Mediterranean. The forest atmosphere — dappled light, birdsong, cool mountain air — is a world away from the bustling medina just kilometers away. Unlike the busy Akchour trails, many paths in the park see barely a handful of hikers per week.',
    insiderTip:
      'Hire a local guide from the park office or through your guesthouse (from 300 MAD per day). They know where to find Barbary macaques and which trails offer the best views. The park is vast and trails are not always well-marked — a guide prevents getting lost. Bring layers even in summer — mountain weather changes quickly. The forest canopy keeps temperatures 5-10 degrees cooler than Chefchaouen town. Pack a picnic from the medina.',
  },
  {
    name: 'Jebel el-Kelaa Summit Hike',
    icon: Mountain,
    category: 'Challenging Hike',
    price: 'Free (guide from 400 MAD)',
    duration: '4-6 hours (round trip)',
    bestTime: 'Early morning (start at dawn)',
    description:
      'The twin-horned peak of Jebel el-Kelaa (2,159 meters) towers above Chefchaouen and defines the town\'s dramatic mountain backdrop. Summiting it is a serious but rewarding hike that puts the entire Rif landscape at your feet. The trail climbs steeply through forest and scrubland before emerging onto exposed rocky terrain near the summit. The final approach involves some scrambling over loose rocks. From the top, the views are immense: Chefchaouen appears as a tiny blue splash in the valley far below, the Mediterranean glints on the northern horizon, and the Rif Mountains roll away in every direction. The sense of achievement is real — this is a mountain climb, not a gentle walk. The descent follows the same route and can be harder on the knees than the ascent.',
    insiderTip:
      'Start at first light (5-6 AM in summer, 7 AM in winter) to avoid the heat and reach the summit before clouds build. A guide is strongly recommended — the upper section is not well-marked, and the scramble can be disorienting. Bring at least 2-3 liters of water per person, sun protection, and warm layers for the exposed summit. The trail starts behind the medina near the cemetery. Fitness is required — this is 800+ meters of elevation gain over rough terrain. The reward is one of the finest viewpoints in the Rif.',
  },
];

/* ===============================================================
   DATA: LOCAL FOOD & CULTURE
   =============================================================== */

const localCulture = [
  {
    name: 'Local Hammams (Hammam Jinan)',
    icon: Droplets,
    category: 'Local Experience',
    price: 'From 15 MAD (public) / From 80 MAD (private)',
    duration: '1-2 hours',
    bestTime: 'Late morning or afternoon',
    description:
      'The traditional hammam is one of Morocco\'s most intimate cultural experiences, and Chefchaouen\'s neighborhood hammams offer something the tourist-oriented spas cannot: authenticity. Hammam Jinan, near the medina, is a favorite among locals. The ritual follows the same pattern used for centuries: you progress through rooms of increasing heat (warm, hot, steam), scrub your skin with savon beldi (black olive soap) and a coarse kessa glove that removes dead skin in satisfying dark rolls, then rinse with buckets of warm water. The communal aspect is fundamental — locals chat, mothers scrub their children, and the humid air carries the scent of eucalyptus and argan. Public hammams are gender-separated, either through separate sections or alternating hours. The experience leaves your skin impossibly soft and your body deeply relaxed. It is not a spa treatment — it is a neighborhood ritual, and being part of it is a privilege.',
    insiderTip:
      'Ask at your guesthouse for the nearest public hammam and the schedule (women\'s hours are typically morning, men\'s afternoon, or vice versa). Bring your own towel, flip-flops, underwear to wear inside, and a change of clothes. Kessa gloves and savon beldi are sold at the entrance or in the souk (from 15-20 MAD). Do not bring valuables. Tip the attendant from 10-20 MAD. Private hammam sessions cost more (from 80 MAD) but include personal scrubbing service.',
  },
  {
    name: 'Rif Village Cheese-Making',
    icon: Flower2,
    category: 'Rural Experience',
    price: 'From 150 MAD (guided visit)',
    duration: '2-4 hours',
    bestTime: 'Morning (active cheese-making)',
    description:
      'The Rif Mountains surrounding Chefchaouen are home to a centuries-old tradition of goat cheese production. Small villages dotting the hillsides above the town keep herds of goats that graze on the herb-rich mountain pastures, producing milk with a distinctive flavor. The fresh cheese, called jben, is made daily by hand using traditional methods: the milk is curdled with natural rennet, drained in woven baskets, and lightly salted. The result is a soft, tangy, creamy white cheese that is served at every breakfast table in Chefchaouen. Visiting a cheese-making family in the villages above town (arranged through guesthouses or local guides) reveals the full process and connects you to rural Rif life. You typically get to taste the cheese fresh from the basket, paired with local bread, olive oil, and mint tea — a simple meal that captures the essence of the mountains.',
    insiderTip:
      'Ask your guesthouse to arrange a village visit with a local guide (from 150 MAD). The experience typically includes a short drive or walk to a hillside village, meeting the family, watching (or helping with) cheese-making, and sharing a meal. Buy cheese to take back — it is freshest at the source and costs from 10-20 MAD for a portion vs. from 30-40 MAD in the medina. Spring and early summer is the best season for cheese as the goats graze on the most aromatic pastures.',
  },
  {
    name: 'Weekly Monday Market',
    icon: ShoppingBag,
    category: 'Local Market',
    price: 'Free to browse',
    duration: '1-2 hours',
    bestTime: 'Monday morning (8 AM - 1 PM)',
    description:
      'While the medina souks cater increasingly to tourists, the weekly Monday market on the outskirts of Chefchaouen is where locals actually shop. Farmers from surrounding Rif villages descend with donkeys loaded with produce, and the market fills with seasonal vegetables, fresh herbs, local honey, olive oil, dried fruits, nuts, live poultry, handmade tools, and household goods. The cheese sellers are a highlight — stacks of fresh jben wrapped in cloth, sold by the same families who made it that morning. The livestock section, where goats and chickens change hands amid animated bargaining, feels like stepping back in time. The atmosphere is lively, colorful, and almost entirely tourist-free — a window into the economic life of the Rif Mountains.',
    insiderTip:
      'The market is a 10-minute walk from the medina center, near the main taxi stand. Arrive before 10 AM for the fullest selection and most animated trading. Bring cash in small denominations — prices are already low, so hard bargaining is unnecessary. Try the fresh-squeezed seasonal fruit juices (from 5 MAD). The honey sellers offer tastings — Rif mountain honey (from 80 MAD per half-kilo) is excellent. The market winds down by early afternoon.',
  },
  {
    name: 'Cannabis & Kif Culture (Educational Context)',
    icon: BookOpen,
    category: 'Cultural Understanding',
    price: 'Free',
    duration: 'N/A',
    bestTime: 'N/A',
    description:
      'The Rif Mountains have been the center of cannabis (kif) cultivation in Morocco for centuries, and understanding this context is part of understanding Chefchaouen and its surrounding region. Cannabis was traditionally grown for personal use and local trade, and kif — a mixture of dried cannabis and tobacco — has been part of Rif social culture for generations. While cultivation and consumption remain technically illegal in Morocco, enforcement in the Rif has historically been lenient, and the industry provides income for thousands of farming families in the mountains. In 2021, Morocco legalized cannabis cultivation for medical and industrial use, beginning a new chapter in the plant\'s complex relationship with the region. Visitors will notice the culture subtly — in the occasional sweet smell in the medina alleys, in the fields visible on mountain roads, and in the frankness with which locals discuss the topic. Understanding this context enriches your appreciation of the Rif\'s economic realities and cultural identity.',
    insiderTip:
      'Visitors will likely be offered kif or hashish at some point in Chefchaouen. It is important to know that purchasing and consuming cannabis remains illegal for tourists and can result in fines or legal complications. A polite but firm refusal is all that is needed. The offers are not aggressive — a simple "la shukran" (no thank you) is respected. Focus instead on understanding the cultural and economic context, which many locals are happy to discuss openly.',
  },
];

/* ===============================================================
   DATA: CRAFT & WORKSHOPS
   =============================================================== */

const craftExperiences = [
  {
    name: 'Medina Craft Workshops',
    icon: Paintbrush,
    category: 'Artisan Experience',
    price: 'Free to watch (workshops from 100 MAD)',
    duration: '1-3 hours',
    bestTime: 'Morning (artisans at work)',
    description:
      'Tucked into the blue alleys of the medina, small workshops continue craft traditions that have defined Chefchaouen for centuries. Leather workers stitch bags and belts using techniques passed through generations. Weavers sit at wooden looms producing the striped wool blankets and djellabas distinctive to the Rif. Woodworkers carve and paint the intricate geometric patterns found on furniture and doors. Metalworkers shape brass and copper into lamps, teapots, and decorative pieces. Unlike the mass-produced goods in Marrakech souks, many Chefchaouen crafts are genuinely handmade and locally distinctive. Some workshops welcome visitors to watch or even try their hand at a craft — ask politely and most artisans are happy to demonstrate their work. A few guesthouses and cultural associations arrange structured craft workshops where you can spend a morning learning leatherwork, weaving, or painting under an artisan\'s guidance.',
    insiderTip:
      'The best workshops are away from the main tourist streets. Walk beyond Outa el-Hammam into the quieter southern medina alleys to find working artisans rather than shopkeeper-artisans. Morning is when most work happens. If you want a structured workshop, ask your guesthouse to arrange one (from 100-200 MAD for a 2-3 hour session). Buying directly from the artisan who made the item is both the cheapest option and the most ethical.',
  },
  {
    name: 'Local Goat Cheese Tasting',
    icon: UtensilsCrossed,
    category: 'Culinary',
    price: 'From 10 MAD per portion',
    duration: '30-60 minutes',
    bestTime: 'Morning (freshest cheese)',
    description:
      'Chefchaouen\'s goat cheese (jben) is the town\'s signature food — soft, fresh, tangy, and unmistakably local. The cheese appears at every breakfast table, crumbled over salads, stuffed into msemen flatbread, and served alongside local olive oil and honey. The best tasting experience is at the Monday market, where cheese-making women from the surrounding villages sell portions still warm from the morning\'s production. In the medina, several small shops specialize in cheese, selling varieties from fresh-that-morning to slightly aged. The Kasbah wall area of Outa el-Hammam square has farmers selling directly. Pair the cheese with local bread, Rif olive oil (richer and fruitier than southern Moroccan varieties), and wildflower honey for a quintessentially Chefchaouen meal.',
    insiderTip:
      'Buy cheese at the Monday market or from the women selling at the Kasbah wall — these are the freshest and cheapest sources (from 10 MAD for a generous portion). The medina shops are slightly more expensive but available daily. Ask for "jben beldi" (traditional cheese) rather than commercial varieties. Combine cheese, fresh bread, olive oil, and honey for the ultimate Rif breakfast — the flavors together are extraordinary. Cheese does not keep well in warm weather — eat it the same day.',
  },
];

/* ===============================================================
   DATA: PRACTICAL & BUDGET
   =============================================================== */

const budgetTips = [
  { tip: 'Spanish Mosque Sunset Is Free', icon: Sunset, description: 'The best viewpoint in Chefchaouen costs nothing. The 20-minute hike rewards with panoramic views of the blue medina against the Rif Mountains. Bring your own snacks and drinks.', savings: 'Free — best view in town' },
  { tip: 'Public Hammam Over Hotel Spa', icon: Droplets, description: 'A public hammam entry costs from 15-20 MAD. Hotel spa hammam treatments charge from 200-500 MAD. The public experience is more authentic and 10-25 times cheaper.', savings: 'Save from 180-480 MAD per visit' },
  { tip: 'Shared Taxi to Akchour', icon: Compass, description: 'Grand taxi to Akchour costs from 25-30 MAD per person shared. Organized tours charge from 300-500 MAD per person for the same trip. Save money and gain flexibility.', savings: 'Save from 270-470 MAD vs. tour' },
  { tip: 'Eat at Local Stalls, Not Tourist Restaurants', icon: UtensilsCrossed, description: 'Bissara soup (from 5 MAD), fried fish (from 15 MAD), and cheese-stuffed msemen (from 10 MAD) at local stalls vs. tourist restaurants charging from 60-120 MAD for similar food.', savings: 'Save from 30-90 MAD per meal' },
  { tip: 'Buy Cheese at the Monday Market', icon: ShoppingBag, description: 'Fresh jben at the Monday market costs from 10 MAD per portion. Medina tourist shops charge from 30-40 MAD for the same cheese. The market cheese is often fresher too.', savings: 'Save from 20-30 MAD per portion' },
  { tip: 'Self-Guide the Medina', icon: Footprints, description: 'Chefchaouen medina is small enough to explore without a guide. Official guides charge from 200-300 MAD for half a day. Wander freely — getting lost in the blue alleys is half the experience.', savings: 'Save from 200-300 MAD per visit' },
];

const insiderTips = [
  { tip: 'The Blue Paint Is Ongoing', icon: Paintbrush, description: 'The blue paint is not just aesthetic tradition — residents continually repaint their walls. Some say it repels mosquitoes, others that it was introduced by Jewish refugees in the 1930s. Regardless of origin, it is actively maintained. Early morning before the paint dries is when you catch the freshest, most vivid blue.' },
  { tip: 'Photography Etiquette', icon: Camera, description: 'Chefchaouen residents are increasingly weary of having cameras thrust in their faces. Ask permission before photographing people, especially women and the elderly. Photograph buildings and streets freely, but respect personal space. A smile and "mumkin sura?" (may I take a photo?) goes a long way.' },
  { tip: 'The Medina Is Tiny', icon: CheckCircle, description: 'Unlike Fes or Marrakech, Chefchaouen medina is compact and easy to navigate. You cannot truly get lost — walking in any direction will eventually bring you to a gate or main street. This makes it perfect for aimless wandering without a guide.' },
  { tip: 'Avoid the Tourist Rush', icon: Clock, description: 'Day-trippers from Fes arrive around 11 AM and leave by 4 PM. Early morning (7-9 AM) and evening (after 5 PM) are when the medina feels most authentic and the light is best for photography. Stay at least one night to experience both.' },
  { tip: 'Water from Ras el-Maa', icon: Droplets, description: 'Locals fill bottles at the Ras el-Maa springs and consider the water excellent. It is mountain spring water flowing through the Rif. Many guesthouses use it for cooking. It is safe to drink but use your own judgment.' },
  { tip: 'Beyond Blue', icon: Eye, description: 'The medina is famous for blue, but look closely and you will notice doors painted in vivid yellows, greens, and oranges. Windows framed in white. Potted geraniums in terracotta. The color palette is richer than photographs suggest — the blue is a canvas, not the whole painting.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the hidden gems in Chefchaouen?', answer: 'Beyond the blue medina: Ras el-Maa waterfall and local laundry area, Bab el-Ain neighborhood (quiet blue streets), the Spanish Mosque sunset hike, Akchour waterfalls and God\'s Bridge day trip, local hammams (Hammam Jinan from 15 MAD), Rif village cheese-making visits, Monday market, craft workshops, and hiking Jebel el-Kelaa.' },
  { question: 'How do I get to Akchour waterfalls?', answer: 'Take a shared grand taxi from the main taxi stand (from 25-30 MAD, 40 minutes). The waterfall trail takes 2-3 hours each way to the Grand Cascade. God\'s Bridge is a separate 1.5-hour trail from the same starting point. Bring water, sturdy shoes, and start early. Park entry is from 20 MAD.' },
  { question: 'Is the Spanish Mosque worth visiting?', answer: 'Absolutely. A 20-minute uphill walk from the medina gives the best panoramic view of Chefchaouen\'s blue rooftops against the Rif Mountains. Free to visit. Sunset is the most spectacular time, when the town glows golden and blue. Arrive 45-60 minutes before sunset for the best spot.' },
  { question: 'What local food should I try in Chefchaouen?', answer: 'Essentials: jben (fresh goat cheese, from 10 MAD), bissara (fava bean soup, from 5 MAD), Rif olive oil, local honey, cheese-stuffed msemen, and fried fish from market stalls (from 15 MAD). The cafes around Outa el-Hammam serve authentic harira and tajines from 30-50 MAD.' },
  { question: 'Are there good hikes near Chefchaouen?', answer: 'Excellent hiking surrounds the town. Spanish Mosque sunset hike (easy, 20 minutes), Akchour waterfalls and God\'s Bridge (moderate, full day), Jebel el-Kelaa summit (challenging, 4-6 hours, 2,159 m), and Talassemtane National Park trails (various). The Rif Mountains offer some of Morocco\'s most rewarding and least crowded hiking.' },
  { question: 'What is a traditional hammam experience like?', answer: 'A hammam is a communal steam bath. You move through rooms of increasing heat, scrub with savon beldi (black soap) and a kessa glove, and rinse with warm water. Gender-separated. Entry from 15-20 MAD at public hammams. Bring towel, flip-flops, and underwear to wear inside. Deeply cleansing and culturally authentic.' },
  { question: 'How many days should I spend in Chefchaouen?', answer: 'Two to three days is ideal for the full experience. Day 1: medina, Ras el-Maa, Spanish Mosque sunset. Day 2: Akchour waterfalls day trip. Day 3: hammam, Monday market (if timing works), Bab el-Ain neighborhood, craft workshops. One day allows the medina highlights and Spanish Mosque but misses the depth.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/chefchaouen', icon: MapPin, title: 'Chefchaouen City Guide', description: 'Complete guide to the Blue City: accommodation, transport, and planning.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to street food — the complete cuisine guide.' },
  { href: '/morocco-hiking-guide', icon: Mountain, title: 'Hiking in Morocco', description: 'Trails, peaks, and trekking routes across the Atlas and Rif Mountains.' },
  { href: '/morocco-off-beaten-path', icon: Compass, title: 'Off the Beaten Path', description: 'Hidden destinations and experiences beyond the tourist trail.' },
  { href: '/budget-travel', icon: Lightbulb, title: 'Budget Travel Morocco', description: 'Money-saving strategies and real prices for traveling Morocco affordably.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function ChefchaouenLocalGuidePage() {
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
            backgroundImage: 'url(/images/hero-chefchaouen.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/chefchaouen" className="hover:text-white transition-colors">
              Chefchaouen
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Local Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Eye className="w-4 h-4" />
            Local &amp; Hidden Gems Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Chefchaouen
            <br className="hidden md:block" /> Beyond the Blue
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The local&apos;s guide to Morocco&apos;s Blue City. Hidden neighborhoods, mountain waterfalls,
            traditional hammams, Rif village cheese, and off-the-beaten-path experiences, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Chefchaouen Tourists Don&apos;t See
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Every visitor to Chefchaouen walks the same circuit: blue walls, Outa el-Hammam square,
                maybe the Kasbah. They photograph the same doorways, eat at the same tourist restaurants,
                and leave by mid-afternoon on the bus back to Fes, confident they have &quot;done&quot;
                the Blue City. They have barely scratched the surface. Chefchaouen — pronounced
                &quot;shef-SHAH-wen&quot; by locals — is a living town of 45,000 people nestled in the
                Rif Mountains, and its real character reveals itself to those who slow down, venture off
                the main streets, and engage with the local rhythms that tourism has not yet overwritten.
              </p>
              <p>
                This guide is about the Chefchaouen that exists beyond the Instagram frame. The Ras el-Maa
                waterfall where women still wash laundry on the rocks. The Bab el-Ain neighborhood where
                the blue paint is just as vivid but the alleys are empty of selfie sticks. The hammams where
                locals scrub and gossip in the steam. The Rif village families making goat cheese by hand,
                using the same techniques their grandparents used. The trail to the Spanish Mosque where
                sunset transforms the entire town into gold and blue. The extraordinary waterfalls of
                Akchour, hidden in a mountain gorge just an hour away. The Monday market where the real
                economy of the Rif plays out in olives, cheese, honey, and livestock.
              </p>
              <p>
                Chefchaouen rewards exploration and patience. Stay at least two nights. Wake early, before
                the day-trip buses arrive. Walk the quiet alleys, climb the mountains, eat the local
                cheese, sweat in a hammam, and let the Blue City show you what lies beyond the blue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Local &amp; Hidden Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The experiences that separate a quick visit from a deep understanding of Chefchaouen.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Spanish Mosque Sunset Hike', price: 'Free', time: '1-2 hours', category: 'Views' },
              { rank: 2, name: 'Akchour Waterfalls & God\'s Bridge', price: 'From 45 MAD', time: 'Full day', category: 'Nature' },
              { rank: 3, name: 'Ras el-Maa Waterfall & Local Life', price: 'Free', time: '30-60 min', category: 'Local' },
              { rank: 4, name: 'Traditional Hammam', price: 'From 15 MAD', time: '1-2 hours', category: 'Culture' },
              { rank: 5, name: 'Bab el-Ain Hidden Neighborhood', price: 'Free', time: '1-2 hours', category: 'Explore' },
              { rank: 6, name: 'Rif Village Cheese-Making', price: 'From 150 MAD', time: '2-4 hours', category: 'Rural' },
              { rank: 7, name: 'Monday Market', price: 'Free', time: '1-2 hours', category: 'Market' },
              { rank: 8, name: 'Jebel el-Kelaa Summit', price: 'Free', time: '4-6 hours', category: 'Hiking' },
              { rank: 9, name: 'Medina Craft Workshops', price: 'From 100 MAD', time: '1-3 hours', category: 'Artisan' },
              { rank: 10, name: 'Talassemtane National Park', price: 'From 20 MAD', time: 'Half day+', category: 'Nature' },
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

      {/* -- Hidden Spots & Local Life -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hidden Spots &amp; Local Life
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The places where Chefchaouen&apos;s authentic daily life unfolds away from the main tourist circuit.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            These spots reward patience and respect. Engage quietly and let the experience come to you.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {hiddenSpots.map((item) => {
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

      {/* -- Hiking & Nature -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hiking &amp; Mountain Nature
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Rif Mountains surrounding Chefchaouen offer some of Morocco&apos;s finest and least
            crowded hiking, from gentle sunset walks to challenging summit climbs.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Hiking conditions vary seasonally. Spring and autumn are ideal. Summer is hot; winter brings occasional snow at altitude.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {hikingNature.map((item) => {
              const HikeIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HikeIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Local Food & Culture -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Local Food &amp; Culture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From steaming hammams and mountain cheese to the complex cultural fabric of the Rif, these
            experiences reveal Chefchaouen&apos;s authentic identity.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Cultural experiences require respect and sensitivity. Follow local customs and ask before photographing people.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {localCulture.map((item) => {
              const CultIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CultIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Craft & Workshops -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Paintbrush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Crafts &amp; Artisan Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Handmade traditions that continue in the blue alleys, from leatherwork and weaving
            to the town&apos;s legendary goat cheese.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Buying directly from artisans supports local craftspeople and typically offers the best prices.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {craftExperiences.map((item) => {
              const CraftIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CraftIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
            Budget Tips for Chefchaouen
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Chefchaouen is naturally affordable. These tips help you save even more while experiencing the best the town offers.
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
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Local Insider Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Knowledge that transforms a tourist visit into a genuine connection with the Blue City.
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
            Sample 3-Day Local&apos;s Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three days that go beyond the blue walls to reveal the real Chefchaouen.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Medina Deep Dive &amp; Sunset
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start before 8 AM when the medina is quiet and the light is magical. Walk from your
                      guesthouse to Ras el-Maa waterfall to see women washing laundry and children playing in the
                      pools. Cross the bridge and explore the Bab el-Ain neighborhood — quiet blue alleys with
                      zero crowds. Return via Outa el-Hammam for a local breakfast: bissara soup (from 5 MAD),
                      fresh jben cheese, and bread.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit the Kasbah and its peaceful garden (from 10 MAD). Browse the quieter southern medina
                      alleys for craft workshops. Visit a public hammam — Hammam Jinan or ask your guesthouse
                      for the nearest option (from 15 MAD). The scrub and steam will leave you deeply relaxed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Hike to the Spanish Mosque for sunset (20 minutes, arrive 45 minutes before sunset).
                      Watch the town turn gold and blue as the sun drops behind the Rif. Return to the medina
                      for dinner at a local restaurant away from the tourist square (tajine from 40 MAD).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Akchour Waterfalls Day Trip
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Full Day</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Leave by 8 AM. Grand taxi to Akchour (from 25 MAD shared, 40 minutes). Hike to God&apos;s Bridge
                      first (1.5 hours each way, less strenuous). Then take the waterfall trail to the Grand Cascade
                      (2-3 hours each way). Swim in the turquoise pools. Pack lunch and plenty of water. Return to
                      Chefchaouen by late afternoon. Relax at a medina cafe and relive the day over mint tea.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 3: Market, Village &amp; Crafts
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      If Monday, head to the weekly market early (before 10 AM) for the authentic Rif trading
                      experience. Buy fresh cheese, honey, and olives. If not Monday, arrange a Rif village
                      cheese-making visit through your guesthouse (from 150 MAD). Watch cheese being made and
                      share a traditional breakfast with a mountain family.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Explore medina craft workshops — watch a weaver or leatherworker in action. Try a structured
                      craft workshop if available (from 100 MAD). Do your final souvenir shopping: woven blankets,
                      local cheese and honey, hand-painted ceramics. Have a farewell mint tea at a quiet cafe
                      in the Bab el-Ain neighborhood, away from the crowds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                3-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 300-500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Local food, free hikes, public hammam, shared taxis</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 700-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Akchour trip, village visit, restaurant meals, craft workshop</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-2,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private guide, Jebel el-Kelaa hike, private hammam, fine dining</p>
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
            Continue Exploring Chefchaouen &amp; Morocco
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
            Ready to Go Beyond the Blue?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From hidden waterfalls and mountain sunsets to hammam steam and fresh goat cheese,
            the real Chefchaouen awaits those who look beyond the postcards. Start planning your deeper visit today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/chefchaouen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Chefchaouen City Guide
            </Link>
            <Link
              href="/morocco-hiking-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Hiking Guide
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Food Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

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
  AlertTriangle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Mountain,
  Globe,
  Landmark,
  Sun,
  Camera,
  Aperture,
  Eye,
  Calendar,
  Compass,
  Waves,
  Sunset,
  Wine,
  Utensils,
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-sunset-spots`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Best Sunset Spots in Morocco 2026 | 12 Stunning Locations & Photography Tips',
  description:
    'Discover the 12 best sunset spots in Morocco, from Djemaa el-Fna rooftop terraces and Essaouira ramparts to Erg Chebbi sand dunes and Ait Benhaddou. Photography tips, best times of year, sunset dinner spots, and romantic experiences across the country.',
  keywords: [
    'best sunset Morocco',
    'Morocco sunset spots',
    'sunset Marrakech',
    'sunset Essaouira',
    'Sahara desert sunset',
    'Erg Chebbi sunset',
    'Ait Benhaddou sunset',
    'Chefchaouen sunset',
    'sunset photography Morocco',
    'Morocco golden hour',
    'romantic sunset Morocco',
    'sunset dinner Marrakech',
    'Taghazout sunset beach',
    'Cape Spartel sunset',
    'Agadir Kasbah sunset',
    'Merzouga sunset',
    'Dakhla lagoon sunset',
    'Morocco sunset photography tips',
    'best time sunset Morocco',
    'Ouarzazate sunset',
  ],
  openGraph: {
    title: 'Best Sunset Spots in Morocco 2026 | 12 Stunning Locations & Photography Tips',
    description:
      'From Sahara dunes glowing orange to Atlantic waves crashing below ancient ramparts, these are the most spectacular sunset locations across Morocco with photography tips and seasonal timing.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-sahara.webp`,
        width: 1200,
        height: 630,
        alt: 'Golden sunset over Erg Chebbi sand dunes in the Moroccan Sahara Desert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Sunset Spots in Morocco 2026 | 12 Stunning Locations',
    description:
      'The most spectacular sunset locations in Morocco: Sahara dunes, Atlantic ramparts, rooftop terraces, mountain kasbahs, and hidden beaches with photography tips.',
    images: [`${BASE_URL}/images/hero-sahara.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the single best sunset spot in Morocco?',
    a: 'Erg Chebbi dunes near Merzouga consistently rank as Morocco\'s most spectacular sunset location. The towering sand dunes shift from gold to deep orange to crimson as the sun drops below the horizon, with no light pollution and no obstructions. Djemaa el-Fna rooftop terraces in Marrakech come in as a close second for those who prefer an urban setting with food and atmosphere.',
  },
  {
    q: 'What time does the sun set in Morocco?',
    a: 'Sunset times in Morocco vary by season and location. In winter (December-January), the sun sets around 5:30 PM. In summer (June-July), sunset is around 7:30-8:00 PM. During spring and autumn equinoxes, expect sunset around 6:30 PM. Morocco observes GMT+1 year-round since 2018, so sunset times are consistent without daylight saving shifts.',
  },
  {
    q: 'Which Moroccan city has the best sunset views?',
    a: 'Essaouira offers the best city-based sunset experience because the entire western rampart faces the open Atlantic, giving you an unobstructed horizon. The combination of crashing waves, 18th-century cannon fortifications, and circling seagulls creates a dramatic backdrop. Marrakech is a close alternative thanks to numerous rooftop terraces overlooking the medina and Atlas Mountains.',
  },
  {
    q: 'Is it worth taking a Sahara desert tour just for the sunset?',
    a: 'Absolutely. A Sahara sunset is a once-in-a-lifetime experience that justifies the journey alone. Most desert tours from Marrakech or Fez are 2-3 days, giving you both sunset and sunrise over the dunes. Budget options start from 600 MAD per person for a one-night camp. The silence and scale of the desert at golden hour cannot be replicated anywhere else in Morocco.',
  },
  {
    q: 'What camera settings work best for Morocco sunsets?',
    a: 'Shoot in manual or aperture priority mode. Start at ISO 100-200, f/8-f/11 for landscapes, and adjust shutter speed for correct exposure. Underexpose by 1/3 to 2/3 stop to preserve rich sky colors. Use a graduated neutral density filter to balance bright skies and darker foregrounds. Shoot in RAW format for maximum post-processing flexibility. A tripod is essential for blue hour shots after the sun dips below the horizon.',
  },
  {
    q: 'Are rooftop terraces in Marrakech free to access for sunset?',
    a: 'Most rooftop terraces in Marrakech are attached to cafes and restaurants, so you need to order something. A mint tea costs from 25 MAD, an orange juice from 20 MAD. Some popular terraces like Cafe de France and Nomad require a minimum spend during peak sunset hours. Riad rooftops are typically reserved for guests only. Arrive 30-45 minutes before sunset to secure a good table.',
  },
  {
    q: 'Can I watch the sunset from Chefchaouen\'s Spanish Mosque?',
    a: 'Yes. The abandoned Spanish Mosque sits on a hill above Chefchaouen and offers a panoramic view of the blue medina against the Rif Mountains. The 15-minute uphill walk from the medina is straightforward. There is no entrance fee. Bring a blanket to sit on and arrive at least 30 minutes early since the viewpoint gets crowded during peak season. The path is safe but unlit, so bring a flashlight for the walk down after dark.',
  },
  {
    q: 'What is the best time of year to photograph sunsets in Morocco?',
    a: 'Autumn (September-November) offers the most dramatic sunset colors across Morocco, with warm tones amplified by dust particles in the atmosphere after the dry summer. Spring (March-May) brings clear skies and wildflowers in the foreground. Winter sunsets are early but often produce deep red and purple skies over the Sahara. Summer sunsets are late (after 8 PM) and work well on the Atlantic coast where ocean breezes keep the air clear.',
  },
  {
    q: 'Are there sunset boat tours in Morocco?',
    a: 'Yes. Essaouira offers fishing boat sunset cruises from 200 MAD per person, typically departing 90 minutes before sunset. Dakhla has lagoon kayak and boat excursions through local operators from 350 MAD. Rabat offers occasional sunset cruises on the Bou Regreg river. Agadir has glass-bottom boat sunset trips from 250 MAD. Book through your riad or directly at the harbor. Seasonal pricing can change during peak months.',
  },
  {
    q: 'What should I bring to a sunset viewing spot in Morocco?',
    a: 'Bring a light jacket or scarf (temperatures drop quickly after sunset, especially in the desert and mountains), a tripod for photography, a headlamp for walking back in the dark, water, and a blanket for sitting on sand or stone. In the Sahara, bring a face covering for wind-blown sand. On the coast, a windbreaker is useful. Insect repellent helps at inland spots near palm groves and rivers.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Best Sunset Spots in Morocco 2026',
  description:
    'Complete guide to the best sunset viewing locations across Morocco, including Sahara dunes, Atlantic coast ramparts, mountain kasbahs, rooftop terraces, and hidden beaches with photography tips and seasonal timing.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-sahara.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Sunset Spots in Morocco', item: PAGE_URL },
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
   DATA: TOP SUNSET SPOTS
   ================================================================ */

const sunsetSpots = [
  {
    rank: 1,
    name: 'Erg Chebbi Dunes, Merzouga',
    region: 'Sahara Desert',
    icon: Sun,
    image: '/images/hero-sahara.webp',
    description:
      'The towering dunes of Erg Chebbi reach 150 meters and transform into a canvas of shifting color as the sun descends. Gold bleeds into copper, then deep crimson. The silence is total. No roads, no buildings, no power lines -- just sand sculpted by wind and light. Camel caravans trace ridgelines in silhouette, and the vastness of the Sahara makes every sunset feel like the first one ever witnessed by human eyes.',
    bestTime: 'Year-round, but autumn and winter bring clearest skies',
    arriveBy: '90 minutes before sunset to climb a high dune',
    proTip: 'Book an overnight desert camp (from 600 MAD) to combine sunset with stargazing and sunrise the next morning.',
    photoTip: 'Shoot along dune ridgelines to capture the S-curve shadows. Include a human figure for scale.',
  },
  {
    rank: 2,
    name: 'Djemaa el-Fna Rooftop Terraces, Marrakech',
    region: 'Marrakech-Safi',
    icon: Building,
    image: '/images/hero-marrakech.webp',
    description:
      'As the sun drops behind the Koutoubia Mosque minaret, the rooftop terraces ringing Djemaa el-Fna square come alive. Smoke rises from food stalls below, the call to prayer echoes across the medina, and the sky shifts from amber to violet. The scene is pure sensory overload: snake charmers packing up, storytellers drawing crowds, and the orange juice vendors flicking on their lights. No other sunset in Morocco combines spectacle, sound, and atmosphere like this one.',
    bestTime: 'October through April for cooler evenings and earlier sunsets',
    arriveBy: '45 minutes before sunset to secure a front-row table',
    proTip: 'Cafe de France and Le Grand Balcon offer the best vantage points. Order mint tea (from 25 MAD) to hold your table.',
    photoTip: 'Use a wide-angle lens to capture the square below with the Koutoubia silhouette. Bracket exposures for HDR.',
  },
  {
    rank: 3,
    name: 'Essaouira Ramparts (Skala de la Ville)',
    region: 'Marrakech-Safi',
    icon: Landmark,
    image: '/images/hero-essaouira.webp',
    description:
      'The 18th-century Portuguese fortifications face directly west over the Atlantic, making Essaouira one of the rare Moroccan cities with a true ocean sunset. Waves crash against the sea wall, cannons line the walkway, and seagulls circle above in the warm updrafts. The light here is different from inland Morocco -- softer, filtered through Atlantic moisture, with pastel pinks and lavenders that photographers chase from around the world.',
    bestTime: 'Spring and autumn for moderate winds and warm colors',
    arriveBy: '30 minutes before sunset -- the ramparts are never too crowded',
    proTip: 'Walk to the end of the harbor jetty for an alternative angle looking back at the ramparts and the medina.',
    photoTip: 'Use a slow shutter speed (1/4 sec) to blur the waves crashing below the cannon embrasures.',
  },
  {
    rank: 4,
    name: 'Ait Benhaddou',
    region: 'Draa-Tafilalet',
    icon: Landmark,
    image: '/images/hero-ait-benhaddou.webp',
    description:
      'This UNESCO World Heritage kasbah is built from rammed earth, and the material absorbs and reflects sunset light in ways that stone and concrete never could. The entire fortified village glows from within -- walls turning from ochre to burnished copper to deep sienna as minutes pass. Cross the shallow Ounila River and shoot from the opposite bank to capture the full kasbah reflected in the water with the sky blazing above.',
    bestTime: 'Late afternoon year-round; winter sun sits lower for warmer tones',
    arriveBy: '60 minutes before sunset to cross the river and set up',
    proTip: 'Climb to the granary at the top of the kasbah for a 360-degree panorama of the valley and surrounding mountains.',
    photoTip: 'Arrive early enough to capture the kasbah in warm side-light before the sun drops too low.',
  },
  {
    rank: 5,
    name: 'Spanish Mosque Viewpoint, Chefchaouen',
    region: 'Tanger-Tetouan-Al Hoceima',
    icon: Eye,
    image: '/images/hero-chefchaouen.webp',
    description:
      'The abandoned mosque on the hillside above Chefchaouen is the definitive viewpoint of Morocco\'s blue city. As sunset approaches, the blue-washed walls of the medina take on lavender and purple hues, while the surrounding Rif Mountains darken to silhouettes. The contrast between the warm sky and cool blue architecture creates a color palette that looks retouched but is entirely natural. Local families, travelers, and stray cats share the hillside in comfortable silence.',
    bestTime: 'March through May and September through November for clearest skies',
    arriveBy: '45 minutes before sunset; the walk from the medina takes 15 minutes',
    proTip: 'Bring a blanket and mint tea from a medina cafe. The stone steps are cold and the wind picks up at elevation.',
    photoTip: 'A 70-200mm telephoto lens compresses the blue rooftops against the mountains for dramatic composition.',
  },
  {
    rank: 6,
    name: 'Agadir Kasbah (Agadir Oufella)',
    region: 'Souss-Massa',
    icon: Mountain,
    image: '/images/hero-agadir.webp',
    description:
      'Perched 236 meters above the city on a hilltop, the ruins of Agadir\'s 16th-century kasbah command sweeping views of the coastline, the port, and the sprawling city below. The sun drops directly into the Atlantic from this vantage point, and the long Agadir beach becomes a mirror of amber and pink reflected light. The Arabic inscription on the restored gateway reads "God, Country, King" and catches the last rays in dramatic relief.',
    bestTime: 'Year-round; Agadir averages 300 days of sunshine',
    arriveBy: '30 minutes before sunset; accessible by taxi (from 30 MAD from the beach)',
    proTip: 'Combine with dinner at a seafood restaurant in the port afterward, where the post-sunset sky provides a violet backdrop.',
    photoTip: 'Include the hilltop inscription or crumbling walls as a foreground frame for the coastal panorama.',
  },
];

const sunsetSpotsExtended = [
  {
    rank: 7,
    name: 'Taghazout Beach',
    region: 'Souss-Massa',
    icon: Waves,
    description:
      'This surf village 20 km north of Agadir has become Morocco\'s sunset beach of choice. Surfers ride the last waves of the day as silhouettes against an orange sky, fishermen pull boats up the sand, and the small cafes along the shore serve fresh fish with sunset views. The rocky headlands on either side of the main beach create natural framing for photographs, and the informal atmosphere makes this the most relaxed sunset experience on the Atlantic coast.',
    bestTime: 'September through April (surf season); summer evenings are long and warm',
    proTip: 'Sit at one of the beachfront cafes and order grilled sardines (from 40 MAD) as the sun goes down.',
  },
  {
    rank: 8,
    name: 'Cape Spartel',
    region: 'Tanger-Tetouan-Al Hoceima',
    icon: Globe,
    description:
      'Where the Atlantic Ocean meets the Mediterranean Sea, the lighthouse at Cape Spartel marks the northwestern tip of Africa. Sunset here carries a geographical weight -- you are watching the sun set over two bodies of water simultaneously. The Hercules Caves nearby add a mythological dimension. On clear days, the southern coast of Spain is visible across the Strait of Gibraltar, turning the sunset into a two-continent spectacle.',
    bestTime: 'Spring and early autumn for the clearest views of Spain across the strait',
    proTip: 'Visit the Hercules Caves (from 60 MAD entry) first, then drive 5 minutes to the lighthouse for sunset.',
  },
  {
    rank: 9,
    name: 'Ouarzazate Viewpoints',
    region: 'Draa-Tafilalet',
    icon: Compass,
    description:
      'Known as the "Door of the Desert," Ouarzazate sits at a crossroads where the Atlas Mountains give way to the pre-Saharan landscape. Sunset from the Taourirt Kasbah terrace or the road toward the Atlas Film Studios reveals layers of terrain -- palm groves, dry riverbeds, kasbah ruins, and distant snow-capped peaks -- all lit in graduated shades of gold and rust. The sky here is enormous because the terrain is flat and open to the south.',
    bestTime: 'Autumn and winter for snow on the Atlas peaks combined with warm desert light',
    proTip: 'The terrace of the Taourirt Kasbah (from 20 MAD entry) gives an elevated perspective over the town and valley.',
  },
  {
    rank: 10,
    name: 'Dakhla Lagoon',
    region: 'Dakhla-Oued Ed-Dahab',
    icon: Waves,
    description:
      'Morocco\'s deep south holds a secret: a 40-kilometer lagoon separating the Dakhla peninsula from the Saharan mainland. The shallow turquoise water reflects the sky like a mirror, doubling the intensity of every sunset color. Kitesurfers trace patterns on the glassy surface, flamingos wade in the shallows, and the absence of development means no artificial light competes with the natural show. This is Morocco\'s most remote and least crowded major sunset location.',
    bestTime: 'October through March for mild temperatures and migratory bird populations',
    proTip: 'Book a lagoon kayak tour (from 350 MAD) that times the return paddle with sunset for a water-level perspective.',
  },
  {
    rank: 11,
    name: 'Tinghir Palm Groves & Todra Gorge',
    region: 'Draa-Tafilalet',
    icon: Mountain,
    description:
      'The oasis town of Tinghir sits at the mouth of the Todra Gorge, surrounded by thousands of date palms fed by ancient irrigation channels called khettaras. At sunset, the palm fronds catch the low light and glow translucent green against the darkening canyon walls. The viewpoint from the road above town reveals the full extent of the oasis -- a ribbon of green cutting through barren rock, with the gorge\'s 300-meter limestone walls turning amber in the last light.',
    bestTime: 'Late September through November when dates hang heavy on the palms',
    proTip: 'Drive up to the panoramic viewpoint above Tinghir on the road to Todra Gorge for the widest perspective.',
  },
  {
    rank: 12,
    name: 'Merzouga Village Edge',
    region: 'Draa-Tafilalet',
    icon: Sun,
    description:
      'Distinct from climbing the Erg Chebbi dunes themselves, the edge of Merzouga village offers a different sunset experience. Small hotels and guesthouses face the dune field, with rooftop terraces providing unobstructed views of the sand turning from gold to fire-red. You can watch the camel caravans returning from dune excursions in silhouette. The advantage over the dunes is comfort: a cold drink in hand, a cushioned seat, and none of the sand-in-every-crevice reality of dune climbing.',
    bestTime: 'Year-round; the dunes are spectacular in every season',
    proTip: 'Many guesthouses offer free rooftop access to non-guests if you order dinner (tajine from 70 MAD).',
  },
];

/* ================================================================
   DATA: SUNSET PHOTOGRAPHY TIPS
   ================================================================ */

const photoTips = [
  {
    title: 'Arrive Early and Stay Late',
    icon: Clock,
    detail:
      'The best sunset light often occurs 20-30 minutes before the sun touches the horizon (warm golden hour) and 15-20 minutes after it disappears (blue hour with purple and pink afterglow). Plan to be at your spot for at least an hour total. The "second sunset" -- the reflected light on clouds after the sun has set -- is frequently more dramatic than the main event.',
  },
  {
    title: 'Exposure and Metering',
    icon: Aperture,
    detail:
      'Meter off the sky, not the foreground. Underexpose by 1/3 to 2/3 of a stop to preserve rich sunset tones. Auto mode will try to brighten the scene and wash out the colors. Shoot in RAW format so you can recover shadow detail in post-processing without losing the saturated sky.',
  },
  {
    title: 'Compose with Foreground Interest',
    icon: Camera,
    detail:
      'A sunset alone is beautiful but forgettable as a photograph. Add a foreground element: a camel silhouette on a dune ridge, cannon embrasures on the Essaouira ramparts, a minaret tower, palm fronds, or a figure in a djellaba walking toward the light. This gives the image depth, context, and a sense of place that says "Morocco."',
  },
  {
    title: 'White Balance and Filters',
    icon: Sparkles,
    detail:
      'Set white balance to "Cloudy" or "Shade" (around 6500-7500K) to enhance warm tones. A graduated neutral density filter (2-3 stops) balances the bright sky with a darker foreground. A polarizing filter can deepen blue skies in the minutes before golden hour but should be removed once the sun is low.',
  },
  {
    title: 'Smartphone Techniques',
    icon: Eye,
    detail:
      'Lock exposure by tapping and holding on the brightest part of the sky, then drag the exposure slider down slightly. Use HDR mode for balanced exposures. Shoot at 0.5x wide angle to capture sweeping desert or coastal panoramas. Portrait mode creates beautiful silhouette shots of people against the sunset. Clean your lens -- sand and dust accumulate fast in Morocco.',
  },
  {
    title: 'Tripod and Long Exposures',
    icon: Camera,
    detail:
      'A travel tripod weighing under 1.5 kg is worth carrying for blue hour shots, wave motion on the coast, and low-light scenes after sunset. Use a 2-second timer or remote trigger to eliminate camera shake. Exposures of 1-4 seconds blur ocean waves into silk and create a dreamy atmosphere that contrasts with sharp foreground rocks or architecture.',
  },
];

/* ================================================================
   DATA: SUNSET DINNER SPOTS
   ================================================================ */

const sunsetDinnerSpots = [
  {
    name: 'Nomad Restaurant',
    location: 'Marrakech',
    icon: Utensils,
    cuisine: 'Modern Moroccan',
    price: 'From 150 MAD per person',
    view: 'Rooftop terrace overlooking the medina and Djemaa el-Fna with Atlas Mountain backdrop',
    highlight: 'Reserve a terrace table at least 2 days ahead. The lamb tangia and rooftop cocktails are signature dishes.',
  },
  {
    name: 'Taros Cafe',
    location: 'Essaouira',
    icon: Wine,
    cuisine: 'Moroccan-Mediterranean fusion',
    price: 'From 120 MAD per person',
    view: 'Multi-level terrace facing the harbor, ramparts, and open Atlantic sunset',
    highlight: 'Live Gnawa music on some evenings. The seafood pastilla is a local favorite.',
  },
  {
    name: 'Cafe Maure (Kasbah des Oudaias)',
    location: 'Rabat',
    icon: Utensils,
    cuisine: 'Traditional Moroccan tea and pastries',
    price: 'From 30 MAD per person',
    view: 'Cliff-edge garden terrace overlooking the Bou Regreg river mouth and Sale across the water',
    highlight: 'One of Morocco\'s most beautiful garden settings. Mint tea and Moroccan pastries only -- no full meals.',
  },
  {
    name: 'Le Jardin des Douars',
    location: 'Near Essaouira',
    icon: Heart,
    cuisine: 'French-Moroccan fine dining',
    price: 'From 350 MAD per person',
    view: 'Lush garden setting with distant Atlantic views as the sky changes color',
    highlight: 'A romantic splurge. Multi-course dinner with locally sourced ingredients. Reservation required.',
  },
  {
    name: 'Restaurant du Port',
    location: 'Agadir',
    icon: Utensils,
    cuisine: 'Seafood',
    price: 'From 100 MAD per person',
    view: 'Harbor-front tables with the fishing port and sunset over the Atlantic',
    highlight: 'Choose your fish from the daily catch and they grill it fresh. Simple, authentic, excellent value.',
  },
  {
    name: 'Kasbah Tamadot',
    location: 'Atlas Mountains (Asni)',
    icon: Gem,
    cuisine: 'Haute Moroccan cuisine',
    price: 'From 500 MAD per person',
    view: 'Mountain terrace with panoramic views of the High Atlas peaks at sunset',
    highlight: 'Sir Richard Branson\'s retreat. The terrace dining experience at sunset is world-class. Book well in advance.',
  },
];

/* ================================================================
   DATA: ROMANTIC SUNSET EXPERIENCES
   ================================================================ */

const romanticExperiences = [
  {
    title: 'Private Desert Camp Dinner',
    icon: Star,
    location: 'Erg Chebbi, Merzouga',
    description: 'Luxury desert camps set up private dinner tables on the dunes with lanterns, cushions, and traditional music. Watch the sun set over an ocean of sand while Berber chefs prepare a fire-cooked dinner under the stars that follow.',
    price: 'From 2,000 MAD per couple',
  },
  {
    title: 'Hot Air Balloon at Dawn',
    icon: Sun,
    location: 'Marrakech',
    description: 'While technically a sunrise experience, the golden hour light over the Atlas Mountains and Jbilet hills delivers the same magic. Float silently above palm groves and Berber villages with champagne breakfast on landing.',
    price: 'From 1,800 MAD per person',
  },
  {
    title: 'Riad Rooftop Private Dinner',
    icon: Heart,
    location: 'Marrakech, Fez, or Essaouira',
    description: 'Many boutique riads arrange private rooftop dinners for couples. A candlelit table, a personal chef preparing a multi-course Moroccan feast, and the medina skyline shifting through golden hour to blue hour.',
    price: 'From 800 MAD per couple',
  },
  {
    title: 'Sunset Camel Ride on the Beach',
    icon: Compass,
    location: 'Essaouira or Agadir',
    description: 'Ride camels along the wide Atlantic beach as the sun sinks into the ocean. The wet sand reflects the sky, doubling the color palette. Most rides last 1-2 hours, timed so you reach the farthest point at peak golden hour.',
    price: 'From 300 MAD per person',
  },
  {
    title: 'Sunset Sailing from Dakhla',
    icon: Waves,
    location: 'Dakhla Lagoon',
    description: 'A small sailboat or catamaran glides across the mirror-calm lagoon, surrounded by flamingos and kitesurfers, as the Saharan sky turns every shade of pink and gold. The isolation and silence are absolute.',
    price: 'From 500 MAD per person',
  },
  {
    title: 'Atlas Mountain Sunset Trek',
    icon: Mountain,
    location: 'Imlil or Ouirgane Valley',
    description: 'A guided 2-3 hour afternoon trek through walnut groves and Berber villages leads to a summit viewpoint overlooking the Toubkal massif. The snow-capped peaks turn pink as the sun sets, and a simple Berber tea ceremony marks the moment.',
    price: 'From 400 MAD per person including guide and tea',
  },
];

/* ================================================================
   DATA: BEST TIMES BY SEASON
   ================================================================ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Sparkles,
    sunsetTime: '6:30 - 7:30 PM',
    highlights: [
      'Wildflowers across the Atlas foothills create colorful foregrounds',
      'Moderate temperatures make outdoor sunset viewing comfortable everywhere',
      'Almond and cherry blossoms in the Dades Valley add delicate pinks to the landscape',
      'Clear skies with occasional dramatic cloud formations after spring rains',
    ],
    bestSpots: 'Atlas Mountain viewpoints, Dades Valley, Chefchaouen',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    sunsetTime: '7:30 - 8:15 PM',
    highlights: [
      'Long evenings with extended golden hours on the Atlantic coast',
      'Coastal towns benefit from ocean breezes that clear haze for sharp sunsets',
      'Late sunsets allow time for a full dinner with sunset views',
      'The Sahara is extremely hot -- limit desert sunset viewing to shoulder months',
    ],
    bestSpots: 'Essaouira, Taghazout, Agadir, Cape Spartel',
  },
  {
    season: 'Autumn (September - November)',
    icon: Award,
    sunsetTime: '5:45 - 6:45 PM',
    highlights: [
      'The most dramatic sunset colors of the year due to atmospheric dust after dry summer',
      'Date harvest season fills Tinghir and Zagora palm groves with golden tones',
      'Comfortable temperatures for both desert and mountain locations',
      'Migratory birds arrive at Dakhla lagoon, adding life to the scene',
    ],
    bestSpots: 'Erg Chebbi, Ait Benhaddou, Tinghir, Dakhla',
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    sunsetTime: '5:15 - 5:45 PM',
    highlights: [
      'Early sunsets create deep red and purple tones amplified by lower sun angle',
      'Snow-capped Atlas peaks at sunset produce striking alpine-meets-desert contrasts',
      'Sahara skies are clearest in winter with minimal humidity',
      'Fewer tourists mean unobstructed views at popular spots',
    ],
    bestSpots: 'Merzouga, Ouarzazate, Atlas viewpoints, Marrakech rooftops',
  },
];

/* ================================================================
   DATA: ESSENTIAL TIPS
   ================================================================ */

const essentialTips = [
  { title: 'Dress in Layers', icon: ShieldCheck, text: 'Temperatures drop rapidly after sunset in Morocco, especially in the desert (can fall 15-20 degrees in an hour) and mountains. Bring a warm layer even on hot days. A lightweight merino wool scarf works for both warmth and as a photography prop.' },
  { title: 'Bring Water and Snacks', icon: CheckCircle, text: 'Many of the best sunset spots are remote -- hilltops, dune crests, cliff edges -- without nearby vendors. Carry at least a liter of water and a snack. Dehydration headaches from the Moroccan sun ruin the experience.' },
  { title: 'Plan Your Return Route', icon: AlertTriangle, text: 'Morocco has limited street lighting outside major cities. If your sunset spot requires a hike (Spanish Mosque, dune climb, Agadir Kasbah), bring a headlamp or phone flashlight for the walk back. Download offline maps before heading out.' },
  { title: 'Respect Sacred Spaces', icon: BookOpen, text: 'Some sunset viewpoints are near mosques, cemeteries, or private homes. Keep noise levels down, avoid alcohol in public, and dress modestly. The Spanish Mosque in Chefchaouen is an abandoned structure but still carries cultural significance for locals.' },
  { title: 'Watch for Touts and Guides', icon: Info, text: 'At popular spots like Djemaa el-Fna rooftops and Ait Benhaddou, informal guides may approach offering to show you the "best spot." A polite "la shukran" (no thank you) is sufficient. If you do accept, agree on a price beforehand -- from 20-50 MAD is standard.' },
  { title: 'Golden Hour vs Blue Hour', icon: Clock, text: 'Golden hour (the 30 minutes before sunset) delivers warm amber light on faces and buildings. Blue hour (20-40 minutes after sunset) provides cool, even light with deep sky colors. Each requires different camera settings. Plan to shoot through both for the widest range of images.' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoSunsetSpotsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-sahara.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Best Sunset Spots in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Sunset className="w-4 h-4" />
            Golden Hour &amp; Sunset Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Sunset Spots
            <br className="hidden md:block" /> in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Sahara dunes glowing crimson to Atlantic waves crashing below ancient ramparts --
            12 locations where Morocco puts on its most spectacular show, every single evening.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Morocco Delivers Some of the World&apos;s Best Sunsets
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco occupies a rare geographical position: an Atlantic coastline stretching over
              1,800 kilometers, a Mediterranean shore, the Sahara Desert, and the High Atlas Mountains
              all compressed into a single country. Each landscape interacts with light differently.
              Desert dust scatters warm tones across enormous skies. Ocean moisture softens coastal
              light into pastels. Mountain elevation sharpens the air and intensifies color saturation.
              The result is that Morocco offers not one type of sunset, but half a dozen, each tied to
              a specific terrain and season.
            </p>
            <p>
              Moroccan culture amplifies the experience. Rooftop terraces are built into the DNA of
              medina architecture. The evening call to prayer provides a soundtrack. Mint tea is poured
              as the sky changes. Street food stalls light up as darkness falls. A Moroccan sunset is
              never just a visual event -- it marks the transition from the heat and bustle of the day
              into the cooler, slower rhythms of the evening, and the entire country participates.
            </p>
            <p>
              This guide covers 12 locations ranked by visual impact, accessibility, and the overall
              experience. For each spot, you will find the best season to visit, the ideal arrival
              time, photography settings, and nearby dining options so you can plan sunset into every
              day of your Morocco itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top 6 Sunset Spots (with images) ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunset className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 12 Sunset Locations in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ranked by visual impact, atmosphere, and photographic potential. The top six include images and detailed photography guidance.
          </p>

          <div className="space-y-12">
            {sunsetSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-auto min-h-[280px]">
                      <img
                        src={spot.image}
                        alt={`Sunset at ${spot.name}, Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-white text-sm font-bold px-3 py-1 rounded-full">
                        #{spot.rank}
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 text-sm text-[var(--color-accent)] mb-2">
                        <SpotIcon className="w-4 h-4" />
                        {spot.region}
                      </div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                        {spot.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {spot.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <span className="text-[var(--text-secondary)]"><strong>Best season:</strong> {spot.bestTime}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <span className="text-[var(--text-secondary)]"><strong>Arrive by:</strong> {spot.arriveBy}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <span className="text-[var(--text-secondary)]"><strong>Tip:</strong> {spot.proTip}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Camera className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <span className="text-[var(--text-secondary)]"><strong>Photo:</strong> {spot.photoTip}</span>
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

      {/* ── Spots 7-12 (compact cards) ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            More Outstanding Sunset Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sunsetSpotsExtended.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <SpotIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">#{spot.rank}</span>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spot.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-gold)] mb-2">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {spot.region}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {spot.description}
                  </p>
                  <div className="text-xs text-[var(--text-secondary)] space-y-1 border-t border-[var(--border-primary)] pt-3">
                    <p><Calendar className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" /><strong>Season:</strong> {spot.bestTime}</p>
                    <p><Star className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" /><strong>Tip:</strong> {spot.proTip}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time of Year for Morocco Sunsets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sunset character changes dramatically by season. Plan your trip around the type of sunset experience you want.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalGuide.map((s) => {
              const SeasonIcon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {s.season}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-gold)] font-medium mb-3">
                    <Clock className="w-3.5 h-3.5 inline mr-1" />
                    Sunset: {s.sunsetTime}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Best spots:</strong> {s.bestSpots}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sunset Photography Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical camera settings and composition techniques to capture Morocco&apos;s golden hour at its best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <TipIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sunset Dinner Spots ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Sunset Dinner Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Restaurants and cafes where the food matches the view. Reserve ahead during peak season (October-April).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sunsetDinnerSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <SpotIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spot.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)]">{spot.location} &bull; {spot.cuisine}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">{spot.view}</p>
                  <p className="text-sm text-[var(--text-secondary)] italic mb-3">{spot.highlight}</p>
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    <DollarSign className="w-3.5 h-3.5 inline mr-1" />
                    {spot.price}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-secondary)] mt-6">
            Seasonal pricing can change. Prices reflect typical costs as of early 2026.
          </p>
        </div>
      </section>

      {/* ── Romantic Sunset Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Sunset Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Special experiences for couples and celebrations that turn a Moroccan sunset into an unforgettable memory.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {romanticExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.title} className="card-moroccan p-6">
                  <ExpIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[var(--color-gold)] mb-3">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {exp.location}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{exp.description}</p>
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    <DollarSign className="w-3.5 h-3.5 inline mr-1" />
                    {exp.price}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-secondary)] mt-6">
            Seasonal pricing can change. Book through your riad or a local tour operator for the best rates.
          </p>
        </div>
      </section>

      {/* ── Essential Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Sunset-Viewing Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <TipIcon className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Visual Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco at Golden Hour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-marrakech.webp"
                alt="Sunset over the Marrakech medina rooftops with the Koutoubia minaret silhouetted against an orange sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Marrakech Rooftops</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira.webp"
                alt="Atlantic sunset from the Essaouira ramparts with cannons and crashing waves"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Essaouira Ramparts</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara.webp"
                alt="Erg Chebbi sand dunes in golden sunset light with camel caravan silhouettes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Erg Chebbi Dunes</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-chefchaouen.webp"
                alt="Blue medina of Chefchaouen at golden hour from the Spanish Mosque viewpoint"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Chefchaouen at Golden Hour</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ait-benhaddou.webp"
                alt="Ait Benhaddou UNESCO kasbah glowing amber in sunset light reflected in the river"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ait Benhaddou</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-agadir.webp"
                alt="Agadir coastline sunset viewed from the hilltop Kasbah ruins"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Agadir Kasbah View</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical answers for planning sunset experiences across Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Photography Guide',
                description: 'Best photo locations, camera gear tips, street photography etiquette, and golden hour spots across the country.',
                href: '/morocco-photography-guide',
                icon: Camera,
              },
              {
                title: 'Sahara Desert Guide',
                description: 'Everything you need for a desert trip: camps, camel treks, 4x4 tours, packing lists, and star gazing tips.',
                href: '/morocco-sahara-guide',
                icon: Sun,
              },
              {
                title: 'Romantic Getaways',
                description: 'The most romantic riads, restaurants, experiences, and honeymoon destinations across Morocco.',
                href: '/morocco-romantic-getaways',
                icon: Heart,
              },
              {
                title: 'Best Beaches in Morocco',
                description: 'Atlantic and Mediterranean beaches ranked for swimming, surfing, sunset views, and family visits.',
                href: '/best-beaches-morocco',
                icon: Waves,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── More Sunset & Photography Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Sunset &amp; Photography Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-photography-spots', title: 'Photography Spots Guide', desc: 'Curated list of the most photogenic locations in every major Moroccan city and region.' },
              { href: '/morocco-instagram-spots', title: 'Instagram Spots', desc: 'The most Instagram-worthy locations across Morocco with timing tips and angle suggestions.' },
              { href: '/morocco-desert-camping', title: 'Desert Camping Guide', desc: 'How to choose a Sahara camp, what to pack, and how to combine sunset and sunrise dune experiences.' },
              { href: '/morocco-for-couples', title: 'Morocco for Couples', desc: 'Romantic itineraries, couples activities, and the most intimate riads and restaurants.' },
              { href: '/morocco-best-time-visit', title: 'Best Time to Visit', desc: 'Month-by-month weather, crowds, and pricing to help you plan the ideal Morocco trip.' },
              { href: '/morocco-coastal-towns', title: 'Coastal Towns Guide', desc: 'Atlantic and Mediterranean towns with beaches, seafood, and spectacular ocean sunsets.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

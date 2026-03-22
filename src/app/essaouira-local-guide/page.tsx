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
  Anchor,
  Coffee,
  Music,
  Building2,
  Users,
  DollarSign,
  Navigation,
  Fish,
  Palette,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Essaouira Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
  description:
    'Discover Essaouira beyond the ramparts. Explore the Mellah quarter, Diabat village, Sidi Kaouki beach, the fish auction, gnawa music venues, thuya wood workshops, argan cooperatives, and where Souiris actually eat. Complete insider guide with prices in MAD.',
  keywords: [
    'essaouira like a local',
    'essaouira hidden gems',
    'essaouira local food',
    'essaouira neighborhoods',
    'diabat village',
    'sidi kaouki beach',
    'essaouira fish auction',
    'essaouira gnawa music',
    'essaouira thuya wood',
    'essaouira mellah quarter',
    'essaouira argan oil cooperative',
    'essaouira off beaten path',
    'essaouira local restaurants',
    'essaouira sardines',
    'scala de la kasbah essaouira',
    'moulay hassan square essaouira',
    'essaouira sunday souk',
    'essaouira insider guide 2026',
  ],
  openGraph: {
    title: 'Essaouira Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
    description:
      'Beyond the ramparts: explore the Mellah quarter, Diabat village, Sidi Kaouki beach, the fish auction, gnawa music, thuya wood workshops, and where Souiris actually eat. The complete local insider guide.',
    url: `${BASE_URL}/essaouira-local-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira.webp`,
        width: 1200,
        height: 630,
        alt: 'Essaouira ramparts and fishing port with blue boats and Atlantic waves',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essaouira Like a Local 2026: Hidden Gems & Neighborhoods',
    description:
      'Beyond the ramparts: Mellah quarter, Diabat village, Sidi Kaouki, fish auction, gnawa music, and where Souiris eat. Complete insider guide.',
    images: [`${BASE_URL}/images/hero-essaouira.webp`],
  },
  alternates: { canonical: `${BASE_URL}/essaouira-local-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/essaouira-local-guide`,
  name: 'Essaouira Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
  description:
    'Discover Essaouira beyond the ramparts. Explore the Mellah quarter, Diabat village, Sidi Kaouki beach, the fish auction, gnawa music venues, thuya wood workshops, and where Souiris actually eat.',
  url: `${BASE_URL}/essaouira-local-guide`,
  image: `${BASE_URL}/images/hero-essaouira.webp`,
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
  mainEntityOfPage: `${BASE_URL}/essaouira-local-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Essaouira',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Essaouira', item: `${BASE_URL}/essaouira` },
      { '@type': 'ListItem', position: 3, name: 'Local Guide', item: `${BASE_URL}/essaouira-local-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Where do locals eat in Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'Souiris eat grilled sardines at the port stalls (from 20-30 MAD for a generous plate), fresh fish from the outdoor grill restaurants behind the fish market (from 30-50 MAD, you choose your fish and they grill it), tagines at small restaurants in the medina side streets away from Moulay Hassan square (from 25-40 MAD), and breakfast msemen and harira at the stalls near Bab Doukkala (from 5-10 MAD). The seafood restaurants lining Moulay Hassan square are tourist-priced at from 80-200 MAD for similar quality.' } },
    { '@type': 'Question', name: 'What is Diabat village and is it worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Diabat is a small village 5 km south of Essaouira, famous as the place where Jimi Hendrix stayed in 1969. The ruined Borj el-Baroud (Dar Sultane palace) on the beach is atmospheric, and the village itself is a quiet contrast to Essaouira. A camel ride on the beach between Essaouira and Diabat costs from 150-200 MAD. You can walk along the beach (1-1.5 hours), take a petit taxi (from 20-30 MAD), or ride a bicycle. It is worth visiting for the wild beach scenery and the Hendrix legend.' } },
    { '@type': 'Question', name: 'What is Sidi Kaouki beach like?', acceptedAnswer: { '@type': 'Answer', text: 'Sidi Kaouki is a wild, windswept beach 25 km south of Essaouira, popular with surfers and those seeking solitude. The beach is huge and uncrowded, with consistent Atlantic surf. Surf lessons cost from 200-300 MAD per session. Simple beachfront cafes serve tagines for from 30-50 MAD. The village has a few guesthouses (from 200-400 MAD per night). Grand taxis from Essaouira cost from 80-100 MAD one way. It is the antidote to Essaouira when even that relaxed city feels too busy.' } },
    { '@type': 'Question', name: 'When is the Essaouira fish auction?', acceptedAnswer: { '@type': 'Answer', text: 'The criee (fish auction) happens daily at the port when the fishing boats return, typically between 2-4 PM (timing varies with tides and season). It is a chaotic, colorful spectacle as buyers shout bids on crates of sardines, sea bream, octopus, and other Atlantic catch. The auction is free to watch from the sidelines. Arrive by 2 PM to see the boats coming in. The port area is busiest and most atmospheric in the afternoon.' } },
    { '@type': 'Question', name: 'Where can I hear gnawa music in Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'Gnawa music is Essaouira soul. Year-round, you can hear live gnawa at Dar Souiri cultural center (free or small entry), some restaurants and cafes in the medina (especially on weekends), and impromptu sessions at Place Moulay Hassan in the evening. The annual Gnawa and World Music Festival (usually June) is the biggest event, with free outdoor concerts. Ask your riad or hotel for current weekly gnawa sessions. Taros cafe on Place Moulay Hassan often has live music.' } },
    { '@type': 'Question', name: 'Is it worth buying argan oil near Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but buy from women cooperatives on the road between Essaouira and Marrakech, not from medina shops. Cooperatives sell genuine cosmetic argan oil from 250-350 MAD per liter and culinary argan oil from 200-300 MAD per liter. Medina shops charge from 500-1000+ MAD for often-diluted product. The cooperatives demonstrate the traditional extraction process and the money goes directly to the women who produce it. Ask your taxi or bus driver to stop at a cooperative on the way to or from Marrakech.' } },
  ],
};

/* ===============================================================
   DATA: NEIGHBORHOODS
   =============================================================== */

const neighborhoods = [
  {
    name: 'Mellah Quarter',
    icon: Landmark,
    category: 'Historic Jewish Quarter',
    vibe: 'Quiet, historic, less visited',
    description:
      'Essaouira Mellah (Jewish quarter) is tucked away in the northeastern corner of the medina, beyond the main tourist flow, and it is one of the most atmospheric parts of the city. Established in the 18th century when Sultan Mohammed III invited Jewish merchants to develop Essaouira as a trading port, the Mellah once housed a community of several thousand. Today, almost all have emigrated, but the quarter retains its distinctive character: wider streets than the main medina, Star of David carvings on some doorways, and the beautifully restored Slat Lkahal Synagogue (Bayt Dakira), now a museum and cultural center. The Mellah is quieter, more residential, and less commercialized than the rest of the medina — a place where you can wander without being approached by touts or shopkeepers. The Hebrew cemetery outside the walls contains hundreds of ornate Jewish tombs and offers views of the Atlantic.',
    insiderTip:
      'Visit Slat Lkahal Synagogue (Bayt Dakira) in the morning — it is beautifully restored with exhibitions on the Jewish heritage of Essaouira and the broader Jewish-Moroccan history (from 30 MAD). The synagogue roof terrace has one of the best views in the medina. The streets around the Mellah have some of the most photogenic doorways in Essaouira — carved wood, faded blue paint, intricate ironwork.',
  },
  {
    name: 'Scala de la Kasbah & Scala du Port',
    icon: Anchor,
    category: 'Fortifications & Views',
    vibe: 'Dramatic, photogenic, history',
    description:
      'Essaouira has two scala (fortified rampart batteries), and understanding the difference enriches your visit. The Scala de la Kasbah, the north-facing sea bastion, is the more visited and photogenic — a line of 18th-century Portuguese and European bronze cannons pointing out over the Atlantic, with the Iles Purpuraires (Purple Islands) visible offshore. This is where Orson Welles filmed scenes for his 1952 Othello. The view of the crashing waves below is mesmerizing. The Scala du Port, at the harbor entrance, is smaller and less visited but equally atmospheric — it overlooks the busy fishing port, the seawall, and the arriving and departing boats. The contrast between the two is telling: one faces the open Atlantic, the other the human world of the port. Both are included in the medina visit (the Kasbah scala has a from 10 MAD gallery entry inside the tower). Visit them at different times of day for dramatically different light.',
    insiderTip:
      'The Scala de la Kasbah is most dramatic at sunset when the cannons cast long shadows and the light on the stone walls turns golden. The Scala du Port is best in the morning when the fishing fleet is active. For the most dramatic photos, visit the Kasbah scala on a stormy day when waves crash against the ramparts below — the spray sometimes reaches the cannons. The gallery inside the Kasbah tower has interesting exhibitions on Essaouira maritime history.',
  },
  {
    name: 'Bab Doukkala Neighborhood',
    icon: Users,
    category: 'Local Life',
    vibe: 'Working-class, authentic, real food',
    description:
      'Bab Doukkala, the main eastern gate of the medina, opens onto a neighborhood that most tourists walk through without noticing — yet it is the heart of everyday Souiri life. The area around the gate has the city best local food: breakfast stalls serving msemen with honey and amlou (from 5-10 MAD), harira soup (from 5 MAD), and fresh-baked bread from the neighborhood fernatchi (bakeries). The Wednesday and Sunday souks (markets) are held just outside the walls near Bab Doukkala, where locals buy everything from vegetables and spices to clothing and household goods at dramatically lower prices than the tourist shops inside the medina. The neighborhood beyond the gate has local cafes where men play cards and women shop at the vegetable market. This is the Essaouira that has nothing to do with tourism — and it is beautiful in its ordinariness.',
    insiderTip:
      'The Sunday souk outside Bab Doukkala is the big one — arrive before 10 AM for the best produce and atmosphere. Prices are local: tomatoes from 5 MAD per kilo, oranges from 8 MAD per kilo, avocados from 15 MAD per kilo. The breakfast stalls inside the gate (turn right after entering) are the cheapest and most authentic morning food in the city. A full breakfast of msemen, boiled egg, olives, and coffee costs from 12-18 MAD.',
  },
  {
    name: 'Diabat Village',
    icon: Globe,
    category: 'Beach Village & Legend',
    vibe: 'Wild, bohemian, windswept',
    description:
      'Diabat is a small village 5 km south of Essaouira, connected by a long, wild beach that you can walk along in about 1-1.5 hours. The village is wrapped in legend: Jimi Hendrix stayed here in 1969, reportedly inspiring "Castles Made of Sand" (though this is disputed — some say the song was written before his visit). Regardless, the ruined Borj el-Baroud (Dar Sultane palace) on the beach between Essaouira and Diabat looks exactly like a castle made of sand, crumbling into the dunes. The village itself is simple and wind-battered, with a few basic cafes, a marabout (saint shrine), and local families living a life far removed from tourism. The beach walk from Essaouira to Diabat passes through dramatic dune landscapes and offers camel ride opportunities (from 150-200 MAD). The ruins of the palace are free to explore and wonderfully atmospheric at sunset.',
    insiderTip:
      'Walk south along the beach from Essaouira at low tide (check tidal times) for the most dramatic approach. The ruined palace is about 3 km from town — visible on the left as you walk. Diabat village is a further 2 km beyond. Bring water and sun protection. A petit taxi back to Essaouira from Diabat costs from 20-30 MAD. The camel ride operators on the beach between Essaouira and Diabat charge from 150-200 MAD for 30-45 minutes — negotiate before mounting.',
  },
  {
    name: 'Sidi Kaouki Beach',
    icon: Waves,
    category: 'Surf & Solitude',
    vibe: 'Wild, surfer, remote',
    description:
      'Sidi Kaouki is the escape from the escape. This wild, windswept beach 25 km south of Essaouira is where you go when Essaouira feels too civilized. A long stretch of Atlantic sand backed by sand dunes and a whitewashed marabout (saint shrine), Sidi Kaouki has consistent surf (best September-March), strong wind (the alizee trades blow most of the year), and a handful of simple beachfront guesthouses and restaurants. Surf lessons are available (from 200-300 MAD per session with board rental), and the waves range from gentle beach breaks suitable for beginners to more challenging reef breaks further north. The village behind the beach has a relaxed, bohemian atmosphere — yoga retreats, surf camps, and backpacker hostels have sprouted in recent years. A tagine lunch at a beachfront cafe costs from 30-50 MAD, eaten with sandy feet and the sound of the Atlantic.',
    insiderTip:
      'Grand taxis from Essaouira to Sidi Kaouki cost from 80-100 MAD one way (from the stand near Bab Doukkala). Negotiate the return in advance or arrange with your guesthouse. The beach is safest for swimming in the sheltered area near the marabout — currents can be strong further south. For a full day, combine the beach with a tagine lunch and return by late afternoon. Many people come for a day and end up staying a week.',
  },
  {
    name: 'The Fishing Port',
    icon: Fish,
    category: 'Working Waterfront',
    vibe: 'Raw, authentic, seafood',
    description:
      'The fishing port of Essaouira is not a tourist attraction — it is a working harbor where hundreds of blue wooden boats land Atlantic sardines, sea bream, sole, octopus, shrimp, and lobster daily. But it is also one of the most fascinating and photogenic places in the city. The daily fish auction (criee) happens in the afternoon (typically 2-4 PM, timing varies with tides and season) when boats return and buyers crowd around wooden crates to shout bids. The energy is extraordinary — organized chaos with a soundtrack of seagulls, engines, and rapid-fire Arabic. After the auction, head to the outdoor grill restaurants beside the fish market where you choose your own fish from the display, negotiate the price, and have it grilled while you wait (from 30-50 MAD for a generous plate of fish with bread and salad). These grill stalls are where locals eat seafood — not the restaurants lining Moulay Hassan square.',
    insiderTip:
      'The grill stalls behind the fish market (look for the smoking grills and outdoor tables) serve the freshest fish in Morocco at local prices. Choose the stall with the most locals. Point at the fish you want, agree on a price (from 30-50 MAD for sardines, from 50-80 MAD for sea bream or sole), and they grill it with cumin, salt, and lemon. The auction is best watched from the side — stay out of the way of the professional buyers. Take photos freely but be aware that some fishermen prefer not to be photographed.',
  },
];

/* ===============================================================
   DATA: LOCAL FOOD SPOTS
   =============================================================== */

const localFoodSpots = [
  {
    name: 'Grilled Sardines at the Port',
    icon: Fish,
    category: 'Essaouira Signature Dish',
    price: 'From 20-30 MAD',
    description:
      'Essaouira is the sardine capital of Morocco, and the cheapest way to eat them is at the grill stalls near the fishing port. A plate of freshly grilled sardines — charred on the outside, moist and flavorful inside, seasoned with cumin, salt, and a squeeze of lemon — costs from 20-30 MAD and comes with bread. This is the same meal that would cost from 60-100 MAD at the restaurants on Moulay Hassan square, with identical (or inferior) freshness. The sardines are grilled on open charcoal, the smoke mixing with the salt air. Add a salade marocaine (chopped tomato, cucumber, onion, from 10 MAD) and a fresh juice (from 5-8 MAD) for a complete seafood feast under from 50 MAD. The stalls are busiest at lunchtime and in the late afternoon after the fish auction — this is when the catch is freshest.',
    insiderTip:
      'The key phrase: "wahd tabsil dial sardin" (one plate of sardines). Point at the sardines on the display and hold up fingers for how many you want. Six to eight sardines is a typical plate. The outdoor grill stalls behind the fish market are the local choice — the fancier stalls with printed menus closer to the port entrance charge more. Eat at the shared tables and you will likely be chatting with Souiri fishermen on their lunch break.',
  },
  {
    name: 'Choose-Your-Fish Grill Restaurants',
    icon: UtensilsCrossed,
    category: 'Fresh Seafood',
    price: 'From 30-80 MAD',
    description:
      'Behind the fish market, a row of outdoor grill restaurants operates on a simple principle: you choose your fish from the fresh display, they weigh it, you agree on a price, and they grill it while you sit at a communal table. This is how locals eat seafood in Essaouira. The selection changes daily depending on the catch: sardines (from 30 MAD per plate), sole (from 50-70 MAD), sea bream (from 40-60 MAD), red mullet (from 40-60 MAD), shrimp (from 50-80 MAD), calamari (from 40-60 MAD), and occasionally lobster (from 150-250 MAD). Everything comes with bread, cumin-salt dip, and a simple salad. The quality is extraordinary because the fish was swimming in the Atlantic hours (sometimes minutes) before. The tourist restaurants on the square charge from 100-250 MAD for the same fish, served on proper plates with a view — but the taste is identical.',
    insiderTip:
      'Check the eyes (should be clear, not cloudy) and gills (should be bright red) of the fish before choosing — fresh fish looks alive. Negotiate before sitting down: ask "beshhal?" (how much?) as you point at each type. The price is usually per kilo for larger fish and per plate for sardines. A mixed grill plate (sardines + calamari + shrimp) shared between two people costs from 80-120 MAD total. Visit between 1-3 PM for the widest selection.',
  },
  {
    name: 'Breakfast at Bab Doukkala Stalls',
    icon: Coffee,
    category: 'Morning Ritual',
    price: 'From 10-20 MAD',
    description:
      'The breakfast stalls just inside Bab Doukkala gate serve the meal that starts every Souiri day. Msemen (flaky layered flatbread) with honey or cheese (from 4-6 MAD), baghrir (spongy pancakes drizzled with butter and honey, from 5 MAD), boiled eggs with cumin salt (from 3 MAD), harira soup (from 5 MAD), and nous-nous coffee or mint tea (from 5-8 MAD). A full local breakfast costs from 12-20 MAD. Compare this with a riad breakfast (from 60-100 MAD) or a cafe on Moulay Hassan square (from 40-80 MAD). The stalls are simple — wooden counters with metal stools — and the food is made fresh in front of you. This is where market vendors, artisans, and port workers eat before starting their day.',
    insiderTip:
      'Arrive before 9 AM for the freshest msemen, cooked on a round griddle in front of you. Ask for "msemen b el-asal" (with honey) or "msemen b el-jben" (with soft cheese). The baghrir stall on the left as you enter from Bab Doukkala is particularly good — the pancakes are light and full of the tiny holes that soak up the honey-butter sauce. Combine with a walk through the Bab Doukkala neighborhood for a true local morning.',
  },
  {
    name: 'Moulay Hassan Square Evening',
    icon: Star,
    category: 'Evening Atmosphere',
    price: 'From 15-50 MAD',
    description:
      'Place Moulay Hassan is Essaouira living room. While the square restaurants are tourist-priced (avoid them for food), the square itself is the social heart of the city every evening. As the heat breaks around 6 PM, Souiris flood the square and adjoining streets for the evening promenade. Children play, friends cluster around cafe tables, street musicians perform gnawa and Berber music, and the cafes come alive with chatter and clinking glasses. Taros cafe (upstairs, with a terrace overlooking the square) often has live music and serves decent cocktails (from 40-60 MAD). For food, walk two streets back from the square to find local restaurants with tagines from 30-40 MAD — the same quality as the square restaurants but at half the price. The evening atmosphere of Moulay Hassan is free and priceless — one of the most pleasant public spaces in Morocco.',
    insiderTip:
      'Grab a mint tea at one of the cheaper cafes on the east side of the square (from 10-15 MAD) and people-watch. The west side cafes facing the sea charge a premium for the view (from 20-30 MAD for tea). Street musicians sometimes include remarkable gnawa performers — give from 10-20 MAD if you stop to listen. For dinner, duck into the streets behind the square (Rue de la Skala, Rue Ibn Rochd) for local-priced restaurants with identical food.',
  },
];

/* ===============================================================
   DATA: LOCAL EXPERIENCES
   =============================================================== */

const localExperiences = [
  {
    name: 'The Fish Auction (Criee)',
    icon: Anchor,
    category: 'Working Port Life',
    price: 'Free to watch',
    duration: '30 minutes - 1 hour',
    description:
      'The daily criee (fish auction) at the port is Essaouira most electrifying local experience. When the fishing boats return (typically 2-4 PM, timing varies), the port explodes into organized chaos. Wooden crates of sardines, sole, sea bream, octopus, and shrimp are unloaded and arranged in the auction area. Buyers — restaurant owners, fishmongers, and housewives — crowd around as the auctioneer moves from crate to crate, shouting prices in rapid Darija while buyers wave and shout their bids. The entire catch of each boat is sold in minutes. Seagulls wheel overhead, cats lurk around the crates, and the scale of the daily harvest is impressive. This is not a show for tourists — it is the economic engine of Essaouira, a city whose identity is inseparable from the sea.',
    insiderTip:
      'Stand at the edge of the auction area and watch without getting in the way of the professional buyers. The best viewing is from the slightly elevated walkway along the seawall. Photograph freely but do not use flash. The auction happens faster than you expect — the entire haul from a boat is sold in 5-10 minutes. After the auction, walk to the grill stalls for the freshest possible fish lunch. The port smells strongly of fish — embrace it.',
  },
  {
    name: 'Thuya Wood Workshops (Skala Area)',
    icon: Palette,
    category: 'Traditional Craft',
    price: 'Free to watch / Products from 30 MAD',
    duration: '30-60 minutes',
    description:
      'Essaouira is the center of Morocco thuya wood craft — a unique tradition based on the aromatic thuya tree (Tetraclinis articulata) that grows in the nearby forests. Under the Scala de la Kasbah ramparts, a series of workshop-galleries are built into the fortification walls. Here, artisans carve, turn, and polish thuya wood into boxes, chess sets, picture frames, furniture, and decorative objects. The wood burl has a distinctive swirling grain pattern and a warm, resinous scent. Watching a turner shape a piece on a foot-powered lathe is mesmerizing. Prices at the workshops are significantly lower than in medina shops: a small decorative box from 30-50 MAD (vs. from 100-200 MAD in shops), a chess set from 150-300 MAD (vs. from 400-800 MAD). The artisans welcome visitors and will explain the process. Some workshops also incorporate marquetry — inlaying lemonwood, ebony, and mother-of-pearl into thuya pieces.',
    insiderTip:
      'The workshops under the Scala de la Kasbah are the originals — beware of middlemen in the medina streets who will "take you to their uncle workshop" (with a commission markup). Walk to the Scala yourself and enter the workshops directly. Smell the wood before buying — genuine thuya has a distinctive warm, cedar-like aroma. Larger pieces can be shipped. The artisan cooperative at the Scala exit has fixed prices displayed, useful as a reference before negotiating at individual workshops.',
  },
  {
    name: 'Gnawa Music Sessions',
    icon: Music,
    category: 'Musical Heritage',
    price: 'Free to from 50 MAD',
    duration: '1-3 hours',
    description:
      'Gnawa music is the soul of Essaouira. This trance-inducing musical tradition, brought to Morocco by sub-Saharan African slaves centuries ago, combines driving rhythms from the guembri (three-string bass lute), metal castanets (qraqeb), call-and-response chanting, and spiritual healing rituals. Essaouira has been the gnawa capital since the annual Gnawa and World Music Festival put it on the global map in the late 1990s. Year-round, you can hear gnawa at Dar Souiri cultural center (check their weekly schedule, free or from 20 MAD), impromptu sessions at Place Moulay Hassan (free — tip the musicians from 10-20 MAD), some restaurants and cafes (Taros, Mandala) on weekends, and occasionally at private lilas (all-night spiritual ceremonies — ask your riad host if any are happening). The festival, usually held in June, transforms the city with free outdoor concerts on the beach and at the port.',
    insiderTip:
      'Ask your riad or hotel host about gnawa events during your stay — there are often informal sessions not advertised publicly. The Dar Souiri cultural center near Place Moulay Hassan is the most reliable venue for scheduled performances. During the annual festival, the free outdoor concerts at Place Moulay Hassan and the beach stage draw thousands — arrive early for good spots. If invited to a lila (healing ceremony), it is a profound spiritual experience that can last all night.',
  },
  {
    name: 'Argan Oil Cooperatives',
    icon: Heart,
    category: 'Women Cooperatives',
    price: 'Free visit / Oil from 200 MAD per liter',
    duration: '30-45 minutes',
    description:
      'The argan tree (Argania spinosa) grows only in southwestern Morocco, and the road between Essaouira and Marrakech passes through the heart of argan country. Along this route, women cooperatives process argan nuts into oil using traditional methods: cracking the incredibly hard shells by hand (harder than any other nut), grinding the kernels in a stone mill, and pressing the paste to extract the oil. Visiting a cooperative is free and provides a fascinating window into this labor-intensive process. More importantly, it guarantees you buy genuine argan oil directly from the women who produce it. Cosmetic argan oil (cold-pressed, unroasted) costs from 250-350 MAD per liter at cooperatives. Culinary argan oil (from roasted kernels, with a nutty flavor) costs from 200-300 MAD per liter. Compare this with medina shops: from 500-1000+ MAD per liter, often diluted with cheaper oils.',
    insiderTip:
      'Visit a cooperative on the way to or from Marrakech — ask your bus driver, taxi driver, or tour operator to stop. The cooperative Marjana (about 30 km from Essaouira on the N8) is well-established and demonstrates the full process. Buy the oil in dark glass bottles (light degrades argan oil). Culinary argan oil is excellent drizzled on salads, couscous, and amlou (argan-almond-honey spread). Real argan oil has a faint nutty smell — if it has no smell, it may be diluted.',
  },
  {
    name: 'Sunday Souk Outside the Walls',
    icon: ShoppingBag,
    category: 'Weekly Market',
    price: 'Free entry',
    duration: '1-2 hours',
    description:
      'Every Sunday, a large open-air souk materializes outside the medina walls near Bab Doukkala. This is not a tourist market — it is where Souiris and the surrounding rural communities buy their weekly supplies. The market sprawls across several areas: produce (vegetables, fruits, herbs, spices at from 3-15 MAD per kilo), clothing (from 20-100 MAD), household goods (from 10-50 MAD), second-hand items, live poultry, and a food section with grilled meat and local dishes. The atmosphere is lively and authentically Moroccan. You can find things here that do not exist in the tourist medina: local spice blends, homemade preserved lemons, fresh regional cheese, and seasonal berries. The prices are dramatically lower than anything inside the walls — a kilo of fresh figs for from 10 MAD, ripe avocados for from 5 MAD each, bunches of fresh mint for from 2 MAD.',
    insiderTip:
      'Arrive between 8-10 AM for the freshest produce and most manageable crowds. By noon, the good stuff is picked over and the heat builds. Bring your own bags — plastic bags are banned in Morocco. The second-hand clothing section has surprisingly good finds (vintage European brands that arrived via charity shipments, from 10-50 MAD per item). The spice vendors at the back of the market sell ras el hanout, cumin, and saffron at wholesale prices — from 50-70% less than medina tourist shops.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Port Grill Stalls Over Restaurants', icon: Fish, description: 'Grilled sardines at the port stalls from 20-30 MAD vs. from 60-100 MAD at Moulay Hassan restaurants. Same fish, same sea air, fraction of the price.', savings: 'Save from 40-70 MAD per meal' },
  { tip: 'Breakfast at Bab Doukkala', icon: Coffee, description: 'Full local breakfast (msemen, egg, coffee) from 12-18 MAD. Riad breakfast from 60-100 MAD. Cafe breakfast on the square from 40-80 MAD. The local stalls are freshest.', savings: 'Save from 30-80 MAD per morning' },
  { tip: 'Walk to Diabat', icon: Footprints, description: 'The beach walk to Diabat is free and beautiful (1-1.5 hours). Organized excursions charge from 200-400 MAD. Camel rides cost from 150-200 MAD if desired.', savings: 'Free vs. from 200-400 MAD' },
  { tip: 'Buy Argan at Cooperatives', icon: Heart, description: 'Cosmetic argan oil at cooperatives: from 250-350 MAD per liter. Medina shops: from 500-1000+ MAD per liter. Cooperatives guarantee authenticity.', savings: 'Save from 250-650 MAD per liter' },
  { tip: 'Sunday Souk Shopping', icon: ShoppingBag, description: 'Fresh produce at Sunday souk: from 50-70% cheaper than medina shops. Spices, preserved lemons, and local goods at wholesale prices.', savings: 'Save from 50-70% on groceries' },
  { tip: 'Free Evening Entertainment', icon: Music, description: 'Moulay Hassan square promenade, street gnawa music, and sunset from the ramparts are all free. The best of Essaouira costs nothing.', savings: 'Free — best local experiences' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'The Wind Is Real', icon: Wind, description: 'Essaouira is called the "Wind City" for a reason. The alizee trade winds blow from the north most of the year, strongest June-August. Bring a windbreaker even in summer. The beach is often too windy for sunbathing — which is why surfers love it. The medina walls provide shelter.' },
  { tip: 'Essaouira Is Walkable', icon: Footprints, description: 'The entire medina is compact and walkable in 20 minutes end to end. You do not need taxis within the walls. The medina is also much easier to navigate than Fes or Marrakech — a grid-like layout with main streets leading to the port, the square, or the gates.' },
  { tip: 'Avoid Moulay Hassan Restaurants', icon: AlertTriangle, description: 'The restaurants directly on Place Moulay Hassan are the most expensive and least authentic in the city. Walk one or two streets back for identical food at 50% lower prices. The locals know this — you will never see a Souiri eating on the square.' },
  { tip: 'Best Photography Spots', icon: Camera, description: 'Scala de la Kasbah at sunset (cannons and waves), the fishing port in the morning (blue boats and golden light), the Mellah doorways (faded blue paint), and the view from Borj el-Baroud ruins in Diabat (wide beach panorama). The medina streets have consistently beautiful light in the morning.' },
  { tip: 'Surfing Season', icon: Waves, description: 'The best surf is September to March when Atlantic swells are strongest. Summer has smaller waves but stronger wind (great for windsurfing and kitesurfing). Sidi Kaouki has the most consistent breaks. Essaouira town beach is best for beginners. Surf schools operate year-round.' },
  { tip: 'Essaouira as a Day Trip', icon: Navigation, description: 'Many visitors come to Essaouira as a day trip from Marrakech (2.5-3 hours by bus, from 80 MAD). This is not enough. Give Essaouira at least two nights — the evening promenade, sunset from the ramparts, and morning port atmosphere are what make the city special. One night minimum.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Where do locals eat in Essaouira?', answer: 'Grilled sardines at the port grill stalls (from 20-30 MAD), choose-your-fish restaurants behind the fish market (from 30-80 MAD), breakfast at Bab Doukkala stalls (from 10-20 MAD), tagines at side-street restaurants away from Moulay Hassan square (from 25-40 MAD). Avoid the restaurants directly on the square — tourist prices for local food.' },
  { question: 'What is Diabat village and is it worth visiting?', answer: 'A small village 5 km south, linked to Jimi Hendrix. The beach walk (1-1.5 hours) passes the ruined Borj el-Baroud palace. Camel rides available (from 150-200 MAD). Worth visiting for the wild beach scenery and legend. Return by petit taxi (from 20-30 MAD).' },
  { question: 'What is Sidi Kaouki beach like?', answer: 'Wild, windswept beach 25 km south. Consistent Atlantic surf, simple cafes (tagines from 30-50 MAD), surf lessons (from 200-300 MAD), and a few guesthouses (from 200-400 MAD per night). Grand taxi from Essaouira from 80-100 MAD. Perfect for surfers and solitude seekers.' },
  { question: 'When is the fish auction?', answer: 'Daily at the port, typically 2-4 PM when fishing boats return (timing varies with tides and season). Free to watch from the sidelines. Arrive by 2 PM to see the boats coming in. The port is most atmospheric in the afternoon.' },
  { question: 'Where can I hear gnawa music?', answer: 'Dar Souiri cultural center (free or from 20 MAD), Moulay Hassan square impromptu sessions (free, tip from 10-20 MAD), Taros cafe (weekends), and the annual Gnawa Festival (usually June, free outdoor concerts). Ask your riad for current weekly sessions.' },
  { question: 'Is it worth buying argan oil near Essaouira?', answer: 'Yes, but buy from women cooperatives on the Essaouira-Marrakech road (cosmetic oil from 250-350 MAD per liter), not medina shops (from 500-1000+ MAD, often diluted). Cooperatives demonstrate the process and money goes directly to the women producers.' },
  { question: 'How windy is Essaouira?', answer: 'Very. The alizee trade winds blow most of the year, strongest June-August. Bring a windbreaker even in summer. The wind makes the beach challenging for sunbathing but perfect for surfing, windsurfing, and kitesurfing. The medina walls provide shelter from the wind.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/essaouira', icon: MapPin, title: 'Essaouira City Guide', description: 'Complete guide to Essaouira: accommodations, transport, attractions, and trip planning.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to sardines and street food specialties.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic coast.' },
  { href: '/marrakech-local-guide', icon: Compass, title: 'Marrakech Like a Local', description: 'Hidden gems, local food, and authentic neighborhoods in Marrakech.' },
  { href: '/morocco-budget-travel', icon: DollarSign, title: 'Morocco Budget Travel', description: 'How to travel Morocco affordably without missing the best experiences.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function EssaouiraLocalGuidePage() {
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
            backgroundImage: 'url(/images/hero-essaouira.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/essaouira" className="hover:text-white transition-colors">
              Essaouira
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Local Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Local Insider Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Essaouira Like
            <br className="hidden md:block" /> a Local
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Beyond the ramparts: hidden quarters, the daily fish auction, where Souiris eat sardines
            for dirhams, gnawa music venues, wild beaches, Diabat village legends, and the wind city
            secrets that guidebooks miss. Your 2026 insider guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Wind City Beyond the Postcards
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Essaouira is the Morocco that Marrakech wishes it could be: relaxed, authentic, and
                genuinely welcoming. This small Atlantic port city, built within 18th-century French-designed
                ramparts, has a rhythm unlike anywhere else in the country. The constant wind off the
                Atlantic keeps the temperature moderate, the souks low-key, and the pace unhurried.
                There are no aggressive touts, no overwhelming medina maze, no pressure to buy.
              </p>
              <p>
                But most visitors only see the postcard version: a stroll along the ramparts, a
                seafood lunch on the square, a browse through the souvenir shops, and a bus back to
                Marrakech. They miss the Mellah quarter with its synagogue and Jewish history. They
                miss the daily fish auction at the port, one of the most electrifying spectacles in
                Morocco. They miss Diabat village with its Hendrix legend and crumbling palace. They
                miss Sidi Kaouki, the wild surf beach 25 km south. They miss the gnawa music sessions
                that happen in homes and cultural centers year-round. And they definitely miss the
                port grill stalls where locals eat the freshest sardines in the country for a
                fraction of what the square restaurants charge.
              </p>
              <p>
                This guide takes you into the Essaouira that Souiris (Essaouira locals) know. We
                cover the neighborhoods tourists skip, the food spots where fishermen eat, the artisan
                workshops where you buy direct, the wild beaches beyond the town, and the musical
                traditions that give this wind city its soul.
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
            The experiences that separate travelers from tourists in Essaouira.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Port Grilled Sardines', price: 'From 20 MAD', time: '30-45 min', category: 'Local Food' },
              { rank: 2, name: 'Daily Fish Auction', price: 'Free', time: '30-60 min', category: 'Port Life' },
              { rank: 3, name: 'Mellah Quarter Walk', price: 'Free', time: '1-1.5 hours', category: 'Heritage' },
              { rank: 4, name: 'Diabat Beach Walk', price: 'Free', time: '2-3 hours', category: 'Adventure' },
              { rank: 5, name: 'Gnawa Music Session', price: 'Free to from 50 MAD', time: '1-3 hours', category: 'Culture' },
              { rank: 6, name: 'Thuya Wood Workshops', price: 'Free to browse', time: '30-60 min', category: 'Artisan' },
              { rank: 7, name: 'Sidi Kaouki Beach Day', price: 'From 80 MAD taxi', time: 'Half-full day', category: 'Beach' },
              { rank: 8, name: 'Sunday Souk Shopping', price: 'Free entry', time: '1-2 hours', category: 'Market' },
              { rank: 9, name: 'Scala Sunset', price: 'From 10 MAD', time: '45-60 min', category: 'Views' },
              { rank: 10, name: 'Argan Cooperative Visit', price: 'Free', time: '30-45 min', category: 'Experience' },
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
            Neighborhoods &amp; Surroundings Beyond the Tourist Trail
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Six areas that reveal the real Essaouira — from the historic Mellah to wild beaches
            and the working fishing port.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The medina is walkable. Diabat, Sidi Kaouki, and argan cooperatives require taxis or walking.
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
            Where Souiris Actually Eat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Skip the Moulay Hassan square restaurants. These are the places locals go for the
            freshest fish and best food at real prices.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are per person. Essaouira is all about seafood — the freshest you will ever taste.
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
            From the chaotic fish auction to gnawa trance music and argan cooperatives — the
            experiences that define the real Essaouira.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            These experiences are available year-round. The Gnawa Festival (usually June) is the cultural highlight.
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
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
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

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips: Save Like a Souiri
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How locals stretch their dirhams in Essaouira — and how you can too.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Essaouira
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Day in Essaouira Like a Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow this itinerary to experience Essaouira the way Souiris do — at the port, in the workshops, and with the freshest sardines in Morocco.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Breakfast, Mellah &amp; Workshops
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">8:00 AM - Local Breakfast</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at the Bab Doukkala breakfast stalls for msemen, baghrir, and nous-nous coffee (from 12-18 MAD total). Walk through the medina to the Mellah quarter. Visit Slat Lkahal Synagogue (from 30 MAD) and photograph the distinctive balconied doorways.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">10:00 AM - Scala &amp; Thuya Workshops</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk the Scala de la Kasbah ramparts (from 10 MAD for the gallery). Descend to the thuya wood workshops underneath — watch artisans at work, compare prices, and pick up a handmade box or chess set at workshop prices (from 30-300 MAD).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Fish className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Afternoon: Port, Fish Auction &amp; Diabat
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">12:00 PM - Seafood Lunch at the Port</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Head to the grill stalls behind the fish market. Choose your fish, watch it grilled over charcoal, and eat at a communal table with fishermen and locals (from 30-50 MAD for a feast). Grilled sardines, bread, and salad — the best meal in Essaouira.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM - Fish Auction &amp; Beach Walk</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Watch the daily criee (fish auction) at the port (free, 2-4 PM). Then walk south along the beach toward Diabat, passing the ruined Borj el-Baroud palace (1-1.5 hours walk). Alternatively, take a camel ride along the sand (from 150-200 MAD).
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
                  Evening: Sunset, Music &amp; Square Life
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">6:00 PM - Scala Sunset</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to the Scala de la Kasbah for sunset — the cannons, crashing waves, and golden light create the most dramatic scene in Essaouira. The ramparts face west, perfectly positioned for the Atlantic sunset.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM - Evening Promenade</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Join the evening promenade at Place Moulay Hassan. Grab mint tea at a side cafe (from 10-15 MAD). Listen for gnawa musicians. Dinner at a side-street restaurant (tagine from 30-40 MAD) or return to the port stalls. Total day cost: from 150-300 MAD — less than a single tourist restaurant meal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Essaouira
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
            Ready to Explore the Real Essaouira?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Taste the freshest sardines at the port, watch the fish auction, walk wild beaches to
            Diabat, lose yourself in gnawa rhythms, and discover why Souiris call their wind city home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Essaouira City Guide
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
            <Link
              href="/marrakech-local-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Marrakech Like a Local
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

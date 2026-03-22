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
  Sparkles,
  Globe,
  AlertTriangle,
  Eye,
  Waves,
  Coffee,
  MoonStar,
  Users,
  Wifi,
  Music,
  Laptop,
  BookOpen,
  Sunrise,
  Mountain,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: '20 Best Cafes in Morocco 2026 | Mint Tea to Modern Coffee',
  description:
    'Discover the 20 best cafes in Morocco for 2026. From legendary Cafe Hafa in Tangier and Cafe des Epices in Marrakech to modern coffee shops, digital nomad spots, and traditional mint tea rituals. Complete guide with prices and insider tips.',
  keywords: [
    'best cafes morocco',
    'morocco coffee shops',
    'cafe hafa tangier',
    'mint tea morocco',
    'best cafes marrakech',
    'digital nomad cafes morocco',
    'cafe des epices marrakech',
    'cafe clock fes',
    'cafe maure rabat',
    'gran cafe de paris tangier',
    'morocco cafe culture',
    'morocco mint tea ritual',
    'best coffee morocco',
    'cafes casablanca',
    'cafes essaouira',
    'cafes chefchaouen',
    'morocco wifi cafes',
    'morocco brunch spots',
    'traditional moroccan cafe',
    'morocco cafe guide 2026',
  ],
  openGraph: {
    title: '20 Best Cafes in Morocco 2026 | Mint Tea to Modern Coffee',
    description:
      'The definitive guide to Morocco cafe culture. 20 best cafes across Marrakech, Tangier, Fes, Casablanca, Essaouira, Rabat, and Chefchaouen with prices, wifi info, and insider tips.',
    url: `${BASE_URL}/morocco-best-cafes`,
    images: [
      {
        url: `${BASE_URL}/images/hero-cuisine.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan mint tea being poured from a silver teapot at a cafe terrace with medina views',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '20 Best Cafes in Morocco 2026',
    description:
      'Cafe Hafa, Cafe des Epices, Cafe Clock, and 17 more. The ultimate Morocco cafe guide from traditional mint tea spots to modern coffee shops.',
    images: [`${BASE_URL}/images/hero-cuisine.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-best-cafes` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-best-cafes`,
  name: '20 Best Cafes in Morocco 2026 | Mint Tea to Modern Coffee',
  description:
    'The definitive guide to the best cafes in Morocco for 2026, from legendary traditional tea houses to modern specialty coffee shops.',
  url: `${BASE_URL}/morocco-best-cafes`,
  image: `${BASE_URL}/images/hero-cuisine.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-best-cafes`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Cafes', item: `${BASE_URL}/morocco-best-cafes` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the mint tea ritual in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Moroccan mint tea (atay) is a cornerstone of social life. It is prepared by steeping Chinese gunpowder green tea with fresh spearmint leaves and generous sugar in a silver teapot. The tea is poured from height to create a froth, and always served in small decorated glasses. Refusing an offer of mint tea is considered rude. In cafes, a pot costs from 10-20 MAD and serves 2-3 glasses. The ritual is about hospitality, conversation, and the art of slowing down.' } },
    { '@type': 'Question', name: 'What are the best cafes in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The most iconic cafes include Cafe Hafa in Tangier (cliff-edge views since 1921), Cafe des Epices in Marrakech (overlooking the spice square), Cafe Clock in Fes (cultural hub with live music), Cafe Maure in Rabat (Oudaias Kasbah river views), Gran Cafe de Paris in Tangier (literary heritage), Cafe Barroco in Casablanca (art-deco gem), and Aladdin terrace in Chefchaouen (blue medina views).' } },
    { '@type': 'Question', name: 'Are there good wifi cafes for digital nomads in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Morocco growing specialty coffee scene caters well to digital nomads. In Marrakech, try Atay Cafe or Grand Cafe de la Poste. In Casablanca, the emerging third-wave scene includes several work-friendly spots. Essaouira and Tangier have established nomad communities with reliable wifi cafes. Speeds typically range from 10-50 Mbps. Many modern cafes welcome laptop workers during non-peak hours. Co-working spaces are also emerging in major cities.' } },
    { '@type': 'Question', name: 'What is the difference between traditional and modern cafes in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional Moroccan cafes (often men-dominated) serve mint tea, coffee, and sometimes fresh juice in simple settings with plastic chairs. They are social institutions where locals spend hours in conversation. Modern cafes, emerging in cities like Marrakech, Casablanca, and Rabat, serve specialty coffee, avocado toast, and smoothie bowls in Instagram-worthy interiors. Both coexist and each offers a valuable cultural experience. Traditional cafes cost from 5-15 MAD per drink; modern cafes from 25-50 MAD.' } },
    { '@type': 'Question', name: 'How much does coffee cost in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'At traditional cafes, coffee (noss-noss or cafe au lait) costs from 8-15 MAD. Mint tea is from 8-15 MAD. Fresh orange juice is from 8-15 MAD. At modern specialty coffee shops, espresso drinks cost from 25-45 MAD. Smoothies and health drinks from 30-50 MAD. Tourist-area cafes charge 20-30% more than neighborhood spots. The best value is always at the local cafe where you see residents drinking.' } },
    { '@type': 'Question', name: 'What is noss-noss?', acceptedAnswer: { '@type': 'Answer', text: 'Noss-noss literally means half-half in Moroccan Arabic (darija). It is Morocco most popular coffee drink — half espresso, half steamed milk, served in a small glass. Think of it as a Moroccan cortado or flat white. It costs from 8-15 MAD at traditional cafes and is what most Moroccans drink in the morning and afternoon. Order noss-noss to blend in with the locals.' } },
  ],
};

/* ===============================================================
   DATA: MARRAKECH CAFES
   =============================================================== */

const marrakechCafes = [
  {
    rank: 1,
    name: 'Nomad Terrace',
    icon: Star,
    city: 'Marrakech',
    type: 'Modern rooftop cafe-restaurant',
    priceRange: 'From 25-60 MAD (drinks)',
    wifi: 'Yes, good speed',
    bestFor: 'Sunset drinks, medina views, photography',
    description:
      'Nomad multi-level rooftop terrace overlooking the spice square (Rahba Kedima) is as much a cafe as it is a restaurant. The upper terrace offers panoramic views of medina rooftops, minarets, and the Atlas Mountains on clear days. The drink menu includes excellent cocktails (from 60 MAD), fresh juices (from 30 MAD), specialty coffees (from 25 MAD), and mint tea (from 20 MAD). The modern design — natural wood, clean lines, potted plants — creates a sophisticated perch above the medina chaos. Service is polished. This is where Marrakech creative class meets traveling foodies.',
    insiderTip:
      'Come at 16:00-17:00 for golden hour light on the medina — the photography opportunities from the top terrace are exceptional. The fresh watermelon and mint juice (from 30 MAD) is perfect on hot days. If you want to eat, the kitchen is excellent (see our Best Restaurants guide). For drinks only, no reservation needed — head straight to the top terrace.',
  },
  {
    rank: 2,
    name: 'Cafe des Epices',
    icon: Coffee,
    city: 'Marrakech',
    type: 'Traditional rooftop cafe',
    priceRange: 'From 15-35 MAD (drinks)',
    wifi: 'Limited',
    bestFor: 'People-watching, spice square views, relaxing',
    description:
      'Cafe des Epices overlooks the Rahba Kedima (spice square) from a three-level terrace that captures the essence of Marrakech medina life. Below you, spice merchants display pyramids of saffron, cumin, and ras el hanout, while herbalists sell remedies and tourists navigate the maze of alleys. The cafe itself is simple — mint tea, fresh juices, simple snacks — but the location is peerless. The terraces fill with a mix of travelers and Marrakech residents, creating a democratic atmosphere that the more polished rooftop bars cannot replicate. The woven straw canopies provide welcome shade, and the mint tea is consistently excellent.',
    insiderTip:
      'The second-floor terrace offers the best balance of views and shade. Order the spiced orange juice (from 15 MAD) — a house specialty with cinnamon and orange blossom. Morning is quieter; late afternoon is most atmospheric when the square below comes alive. The almond milk smoothie is a hidden gem on the menu. Cash only.',
  },
  {
    rank: 3,
    name: 'Atay Cafe',
    icon: Wifi,
    city: 'Marrakech',
    type: 'Modern specialty coffee',
    priceRange: 'From 25-50 MAD (drinks)',
    wifi: 'Yes, fast and reliable',
    bestFor: 'Digital nomads, specialty coffee, laptop work',
    description:
      'Atay Cafe represents the new wave of Moroccan coffee culture — a specialty coffee shop that takes beans as seriously as any Melbourne or Brooklyn roaster. Located in the Gueliz (new city) neighborhood, it sources single-origin beans and prepares them with precision using V60, AeroPress, and espresso methods. The interior is Instagram-worthy: minimalist Scandinavian design with Moroccan touches, long communal tables, and good natural light. The food menu includes avocado toast, acai bowls, and pastries that would not be out of place in a European capital. Free wifi and a welcoming laptop policy (during non-peak hours) make it a digital nomad favorite.',
    insiderTip:
      'Come before 10:00 or after 15:00 for the best laptop-working atmosphere. The pour-over coffee (from 35 MAD) is the best specialty coffee in Marrakech. They also serve excellent matcha lattes (from 35 MAD). The weekend brunch is popular with expats. Pair it with a walk around the Gueliz galleries and bookshops for a modern Marrakech experience.',
  },
  {
    rank: 4,
    name: 'Grand Cafe de la Poste',
    icon: Landmark,
    city: 'Marrakech',
    type: 'Colonial-era grand cafe',
    priceRange: 'From 30-80 MAD (drinks)',
    wifi: 'Yes',
    bestFor: 'Art-deco atmosphere, cocktails, brunch',
    description:
      'Grand Cafe de la Poste is Marrakech most elegant cafe — a colonial-era institution that occupies the former central post office in Gueliz. The art-deco interior features high ceilings, ceiling fans, dark wood paneling, vintage tile floors, and white-jacketed waiters, creating an atmosphere that transports you to 1920s French Morocco. The terrace, shaded by palm trees and bougainvillea, is one of the most pleasant outdoor dining spaces in the city. The cafe serves excellent cocktails, wines, French-Moroccan bistro food, and a legendary weekend brunch (from 150 MAD). It is simultaneously a working cafe, a bar, and a restaurant — you can linger over a single coffee or make an evening of cocktails and dinner.',
    insiderTip:
      'The terrace is best in winter when Marrakech weather is mild. The Sunday brunch is a Gueliz tradition. For a quick coffee, the bar area has a more casual atmosphere. The craft cocktails (from 60 MAD) are among the best in the city — the bartenders know their craft. Dress smart casual, especially for dinner. The post office next door still operates.',
  },
];

/* ===============================================================
   DATA: TANGIER CAFES
   =============================================================== */

const tangierCafes = [
  {
    rank: 5,
    name: 'Cafe Hafa',
    icon: Star,
    city: 'Tangier',
    type: 'Legendary cliff-edge tea house',
    priceRange: 'From 15-25 MAD',
    wifi: 'No',
    bestFor: 'Sunset views, literary history, mint tea meditation',
    description:
      'Cafe Hafa is the most famous cafe in Morocco and possibly in all of North Africa. Clinging to the cliff face overlooking the Strait of Gibraltar since 1921, it has hosted the Rolling Stones, the Beatles, Paul Bowles, William Burroughs, Tennessee Williams, and Jean Genet. The cafe cascades down the hillside in a series of whitewashed terraces, each offering unobstructed views of the sea and Spain shimmering across the water. There is no food, no cocktails, no wifi — just mint tea (from 15 MAD), coffee (from 15 MAD), and one of the most transcendent views on the planet. The simplicity is the point. Cafe Hafa strips away everything except the essentials: tea, the sea, the sky, and the company.',
    insiderTip:
      'Arrive 45 minutes before sunset and descend to the lowest terrace for the most dramatic unobstructed views. Cash only. Weekday mornings are the most peaceful — you may have a terrace to yourself. Do not expect fast service; the waiters move at the pace the cafe demands. Bring a book. The path down from the main road is steep — wear proper shoes. This cafe changed everything for the writers who came here; give it the time it deserves.',
  },
  {
    rank: 6,
    name: 'Gran Cafe de Paris',
    icon: BookOpen,
    city: 'Tangier',
    type: 'Historic literary cafe',
    priceRange: 'From 15-40 MAD',
    wifi: 'No',
    bestFor: 'Literary heritage, people-watching, Grand Socco views',
    description:
      'Gran Cafe de Paris sits on the Grand Socco, the pulsing central square where Tangier old medina meets the new city. This cafe has been a meeting point for writers, intellectuals, spies, and bohemians since the days of the International Zone. Paul Bowles was a regular. Samuel Beckett passed through. The interior retains its mid-century character with wood-paneled walls, simple tables, and an atmosphere of faded grandeur. Outside, the terrace faces the chaotic energy of the Grand Socco — Berber women selling produce, taxis honking, men debating over mint tea. The cafe serves standard Moroccan fare — mint tea, coffee, fresh juices, and simple sandwiches — but you come for the atmosphere and the history, not the cuisine.',
    insiderTip:
      'Grab an outside table facing the Grand Socco for the best people-watching in Tangier. The cafe is busiest in the late morning and evening during the local promenade. Order noss-noss (from 12 MAD) and watch the Grand Socco theater unfold. The Mendoubia Gardens are just across the square for a post-cafe walk. The cafe has barely changed in decades — that is its charm.',
  },
];

/* ===============================================================
   DATA: FES CAFES
   =============================================================== */

const fesCafes = [
  {
    rank: 7,
    name: 'Cafe Clock Fes',
    icon: Globe,
    city: 'Fes',
    type: 'Cultural cafe and community hub',
    priceRange: 'From 20-65 MAD',
    wifi: 'Yes, good speed',
    bestFor: 'Live music, cultural events, cooking classes, camel burger',
    description:
      'Cafe Clock is the cultural heartbeat of the Fes medina — a cafe, restaurant, music venue, and community center rolled into one. Spread across a rambling multi-level medina house near the Bou Inania Medersa, it has become the place where travelers and locals converge. The cafe serves excellent coffee (from 20 MAD), mint tea (from 15 MAD), smoothies (from 30 MAD), and the famous camel burger (from 65 MAD). But the magic of Cafe Clock is in its programming: live Gnawa music on Sundays, Arabic calligraphy workshops, storytelling evenings in Darija, cooking classes (from 350 MAD), and a general atmosphere of cross-cultural exchange that makes the Fes medina feel welcoming and accessible.',
    insiderTip:
      'Visit on Sunday evening for live Gnawa music on the rooftop — it is one of the most atmospheric live music experiences in Morocco and it is free. Book cooking classes via email days ahead — they sell out. The rooftop terrace has good medina views. The smoothies are excellent, especially the avocado and date. Wifi is reliable enough for light work but the atmosphere encourages conversation over screens.',
  },
  {
    rank: 8,
    name: 'The Ruined Garden Cafe',
    icon: Heart,
    city: 'Fes',
    type: 'Garden cafe in restored ruins',
    priceRange: 'From 15-40 MAD (drinks)',
    wifi: 'Limited',
    bestFor: 'Peaceful garden atmosphere, afternoon tea, romance',
    description:
      'The Ruined Garden functions as both a restaurant (see our Best Restaurants guide) and a tranquil cafe. The setting — tables scattered among fruit trees, trailing vines, and flowering plants within the crumbling mosaic walls of a once-grand medina house — makes it one of the most atmospheric places in Fes to enjoy a quiet drink. The cafe menu includes mint tea (from 15 MAD), coffee (from 20 MAD), fresh lemonades (from 25 MAD), and homemade pastries (from 20 MAD). In the afternoon, between the lunch and dinner services, the garden takes on a dreamy quality — dappled light, birdsong, the distant call to prayer. It is the perfect antidote to the intensity of the Fes medina.',
    insiderTip:
      'Come between 15:00-17:00 for the quietest, most peaceful atmosphere. The homemade lemonade with orange blossom water is the perfect afternoon drink. The garden seats about 30 — if full, return in 30 minutes. This is one of the few places in the Fes medina where you can sit for an hour without being interrupted. The entrance is easy to miss — look for the small sign on Derb Idrissy.',
  },
];

/* ===============================================================
   DATA: CASABLANCA CAFES
   =============================================================== */

const casablancaCafes = [
  {
    rank: 9,
    name: 'Cafe Barroco',
    icon: Landmark,
    city: 'Casablanca',
    type: 'Art-deco heritage cafe',
    priceRange: 'From 15-40 MAD',
    wifi: 'Limited',
    bestFor: 'Art-deco architecture, local atmosphere, morning coffee',
    description:
      'Cafe Barroco is a survivor — a genuine art-deco cafe from Casablanca golden age that has resisted modernization. Located near the Central Market in the city center, its interior features original 1930s tilework, carved wooden bar, vintage mirrors, and a pressed-tin ceiling that transport you to the era when Casablanca was known as the White City of the Atlantic. The clientele is almost entirely local — businessmen discussing deals, retired men reading newspapers, students studying. The cafe serves traditional Moroccan drinks: noss-noss, mint tea, fresh juice, and simple snacks at prices that reflect its local character. There is nothing polished or tourist-oriented about Cafe Barroco, and that is precisely its value.',
    insiderTip:
      'Visit in the morning (8:00-10:00) when the cafe is at its most authentic — regulars reading the newspaper over noss-noss (from 10 MAD). Study the art-deco details: the geometric floor tiles, the original bar, the etched glass. The Central Market nearby is worth exploring for fresh produce and the atmosphere. Combined with the nearby art-deco walking circuit (free), Cafe Barroco anchors a morning of architectural discovery.',
  },
  {
    rank: 10,
    name: 'La Sqala Garden Cafe',
    icon: Coffee,
    city: 'Casablanca',
    type: 'Fortress garden cafe',
    priceRange: 'From 20-45 MAD (drinks)',
    wifi: 'Limited',
    bestFor: 'Breakfast, garden atmosphere, escaping the city',
    description:
      'La Sqala is best known as a restaurant (see our Best Restaurants guide), but the garden cafe functions independently as one of Casablanca most enchanting places to sit with a coffee. The courtyard of the 18th-century Portuguese fortress is filled with orange trees, bougainvillea, and jasmine, creating a fragrant oasis that blocks out the noise of the surrounding city. The cafe serves excellent coffee (from 20 MAD), mint tea (from 15 MAD), fresh juices (from 25 MAD), and Moroccan pastries. The fortress walls create a sense of enclosure and tranquility. On weekend mornings, the garden fills with families enjoying the legendary breakfast spread (from 80 MAD), but on weekday mornings, it is a peaceful retreat.',
    insiderTip:
      'Come on a weekday morning for the most peaceful experience. Even if not eating breakfast, a pot of mint tea in the garden (from 15 MAD) is one of the best-value experiences in Casablanca. The artisanal shops inside the fortress walls are worth browsing. The wifi is inconsistent, so this is not ideal for laptop work — bring a book instead. The garden is equally lovely at sunset.',
  },
];

/* ===============================================================
   DATA: ESSAOUIRA CAFES
   =============================================================== */

const essaouiraCafes = [
  {
    rank: 11,
    name: 'Taros Cafe & Rooftop',
    icon: Music,
    city: 'Essaouira',
    type: 'Rooftop cafe-bar with live music',
    priceRange: 'From 20-60 MAD (drinks)',
    wifi: 'Yes',
    bestFor: 'Harbor views, sunset drinks, live music',
    description:
      'Taros occupies a commanding position on the harbor square with a multi-level space that serves as cafe, restaurant, and live music venue. The rooftop terrace is the star — panoramic views of the harbor, the ancient ramparts, the Mogador Islands, and the Atlantic stretching to the horizon. During the day, it functions as an excellent cafe with good coffee (from 20 MAD), fresh juices (from 25 MAD), cocktails (from 50 MAD), and light snacks. In the evening, it transforms into Essaouira social hub with live Gnawa music, jazz, and singer-songwriters performing under the stars. The bohemian atmosphere reflects Essaouira character as a city of artists and musicians.',
    insiderTip:
      'Arrive at 17:00 for the rooftop at golden hour — the harbor lights up and the sunset is spectacular. Check their social media for live music nights (usually Thursday-Saturday). The ground-floor bar is cozier on windy days. The fresh-squeezed orange juice (from 20 MAD) is excellent. Wifi is decent for checking messages but not for heavy work.',
  },
  {
    rank: 12,
    name: 'Patio',
    icon: Sun,
    city: 'Essaouira',
    type: 'Modern courtyard cafe',
    priceRange: 'From 25-50 MAD (drinks)',
    wifi: 'Yes, good speed',
    bestFor: 'Digital nomads, brunch, specialty coffee',
    description:
      'Patio is Essaouira answer to the modern cafe movement — a beautifully designed courtyard cafe that serves specialty coffee, fresh pastries, and a brunch menu that has made it a favorite of both the expat community and visiting travelers. The interior courtyard is filled with plants, natural light, and mid-century modern furniture that creates a calm, stylish space. The coffee is among the best in Essaouira (espresso from 25 MAD, flat white from 35 MAD), and the brunch offerings include eggs Benedict, granola bowls, and excellent avocado toast. Free wifi and a laptop-friendly atmosphere make it the go-to spot for digital nomads, though the cafe politely requests screens-free during peak brunch hours.',
    insiderTip:
      'The courtyard gets beautiful dappled morning light — ideal for a 9:00-11:00 breakfast. The flat white (from 35 MAD) is the best coffee in Essaouira. Come on weekday mornings for quiet laptop work. The weekend brunch is popular with the expat community — arrive before 10:00. Pair a morning at Patio with an afternoon at the beach for the perfect Essaouira day.',
  },
];

/* ===============================================================
   DATA: CHEFCHAOUEN & RABAT CAFES
   =============================================================== */

const chefchaouenRabatCafes = [
  {
    rank: 13,
    name: 'Aladdin Terrace',
    icon: Mountain,
    city: 'Chefchaouen',
    type: 'Traditional terrace with blue medina views',
    priceRange: 'From 10-30 MAD',
    wifi: 'Limited',
    bestFor: 'Blue medina views, mint tea, photography',
    description:
      'The Aladdin restaurant terrace doubles as Chefchaouen most spectacular cafe. Rising above the tumbling blue-washed buildings of the medina with the Rif Mountains as a backdrop, the multi-level terrace offers views that look like a painting come to life. Every shade of blue — powder, cobalt, cerulean, indigo — cascades down the hillside below you, punctuated by terracotta rooftops and green mountain slopes. The cafe menu is simple: mint tea (from 10 MAD), coffee (from 15 MAD), fresh juices (from 15 MAD), and simple snacks. But nobody comes for the menu — the terrace at golden hour, when the blue buildings glow in warm light and the mountains turn purple, is one of the most photogenic moments in Morocco.',
    insiderTip:
      'Arrive by 17:00-17:30 to secure a top-terrace spot before sunset. The mint tea here is good and very affordable (from 10 MAD). Bring your camera — every angle is a postcard. The cafe is busiest at sunset; morning is quieter and the light reveals different shades of blue. The fresh orange juice (from 15 MAD) is excellent. Cash only.',
  },
  {
    rank: 14,
    name: 'Cafe Maure (Oudaias Kasbah)',
    icon: Waves,
    city: 'Rabat',
    type: 'Historic Kasbah cliff-edge cafe',
    priceRange: 'From 15-25 MAD',
    wifi: 'No',
    bestFor: 'River views, sunset, peaceful afternoon retreat',
    description:
      'Cafe Maure sits at the edge of the Oudaias Kasbah in Rabat, overlooking the point where the Bou Regreg river meets the Atlantic Ocean. The open-air terrace, shaded by reed canopies and fragrant jasmine, is Rabat equivalent of Tangier Cafe Hafa — a place where time dissolves and the view becomes the entire experience. Below the terrace, fishermen mend nets on the riverbank, and the Sale skyline shimmers across the water. The cafe serves mint tea (from 15 MAD), coffee (from 15 MAD), fresh orange juice (from 20 MAD), and traditional almond pastries (from 10 MAD). The Andalusian Garden, which you walk through to reach the cafe, is itself one of Rabat most beautiful spaces.',
    insiderTip:
      'Walk through the Andalusian Garden first to appreciate the full journey. The cafe is at the far end of the Kasbah, past the garden — follow the path toward the cliff. Come at 16:00-17:00 for the best afternoon light. Stay through sunset if the sky is clear. Cash only. The combination of the Andalusian Garden and Cafe Maure is the single best free-to-cheap experience in Rabat.',
  },
];

/* ===============================================================
   DATA: DIGITAL NOMAD CAFES
   =============================================================== */

const nomadCafes = [
  {
    rank: 15,
    name: 'Cafe Clock Marrakech',
    icon: Globe,
    city: 'Marrakech',
    type: 'Cultural cafe with wifi',
    priceRange: 'From 20-65 MAD',
    wifi: 'Yes, good speed',
    bestFor: 'Cultural events, camel burger, community atmosphere',
    description:
      'The Marrakech outpost of the Cafe Clock family (the original is in Fes) brings the same formula of good food, cultural programming, and community to the Kasbah neighborhood. Located near the Saadian Tombs, the multi-level space includes a ground-floor cafe, an upstairs restaurant, and a rooftop terrace with medina views. The cafe serves excellent coffee (from 20 MAD), creative smoothies (from 30 MAD), and the famous camel burger (from 65 MAD). Programming includes live music, cooking classes, and cultural talks. Reliable wifi and a welcoming atmosphere make it a hub for both travelers and creative professionals.',
    insiderTip:
      'The rooftop terrace is the best spot for both views and wifi signal. The cold-pressed juice menu (from 30 MAD) is excellent. Check their schedule for events — the storytelling evenings and music nights are special. The Kasbah location means fewer tourists than the Jemaa el-Fna area. Good for a morning of laptop work followed by an afternoon exploring the Saadian Tombs.',
  },
  {
    rank: 16,
    name: 'Bacha Coffee',
    icon: Coffee,
    city: 'Marrakech',
    type: 'Luxury specialty coffee boutique',
    priceRange: 'From 40-80 MAD (drinks)',
    wifi: 'Yes',
    bestFor: 'Premium coffee experience, beautiful interiors, gift shopping',
    description:
      'Bacha Coffee occupies a restored riad in the medina that has been transformed into a temple of coffee. Originally a Singapore-based luxury coffee brand, the Marrakech location is an immersive experience — hundreds of single-origin coffees from around the world displayed in golden canisters line the walls of rooms decorated with intricate zellige tiles, painted ceilings, and vintage furniture. The cafe serves its coffees with precision (espresso from 40 MAD, filter from 50 MAD) alongside delicate pastries and light meals. The gift shop sells beautifully packaged coffee beans, accessories, and tea. It is unashamedly premium, but the quality of the coffee and the beauty of the space justify the prices.',
    insiderTip:
      'Order the Moroccan coffee blend — it is a house specialty. The pastries are excellent, particularly the almond-based Moroccan varieties. The boutique is worth browsing even if you do not buy — the presentation is gorgeous. Visit mid-morning for a quieter experience. The interior is heavily photographed, but it genuinely is as beautiful as it looks online.',
  },
  {
    rank: 17,
    name: 'Cafe 34',
    icon: Laptop,
    city: 'Tangier',
    type: 'Modern co-working cafe',
    priceRange: 'From 20-45 MAD (drinks)',
    wifi: 'Yes, fast and reliable',
    bestFor: 'Digital nomads, laptop work, modern atmosphere',
    description:
      'Cafe 34 represents the new Tangier — a modern specialty coffee shop and co-working-friendly cafe that caters to the city growing community of remote workers, entrepreneurs, and creative professionals. Located in the new city near the Grand Socco, it offers fast wifi, abundant power outlets, good coffee (espresso from 20 MAD, specialty drinks from 35 MAD), and a workspace-friendly atmosphere. The interior is clean and contemporary with communal tables, individual desks, and comfortable seating. Light food includes sandwiches, salads, and pastries. The cafe actively welcomes laptop workers and has become the unofficial hub of Tangier digital nomad scene.',
    insiderTip:
      'The best work hours are 9:00-13:00 and 15:00-18:00. The communal table near the window has the best natural light. The flat white (from 30 MAD) is excellent. Speed tests consistently show 30-50 Mbps. The staff are friendly and helpful with local recommendations. Pair a morning of work at Cafe 34 with an afternoon at Cafe Hafa for the ultimate Tangier day — productivity followed by contemplation.',
  },
];

/* ===============================================================
   DATA: MORE CAFES (18-20)
   =============================================================== */

const moreCafes = [
  {
    rank: 18,
    name: 'Cafe Central (Petit Socco)',
    icon: BookOpen,
    city: 'Tangier',
    type: 'Historic literary cafe',
    priceRange: 'From 10-25 MAD',
    wifi: 'No',
    bestFor: 'Literary history, medina atmosphere, morning coffee',
    description:
      'Cafe Central on the Petit Socco is hallowed ground for literary travelers. William Burroughs reportedly wrote parts of Naked Lunch at these tables. Paul Bowles was a fixture. Tennessee Williams passed through. The tiny square deep in the Tangier medina was once the most notorious spot in the International Zone, and Cafe Central was its nerve center. Today the cafe is considerably calmer but retains its bohemian atmosphere — faded colonial facades, simple tables and chairs, and the constant flow of medina life through the square. Mint tea costs from 10 MAD, noss-noss from 12 MAD. The morning light filtering between the buildings is beautiful.',
    insiderTip:
      'Come in the morning when the light is best and the square is quiet. Order a noss-noss (from 12 MAD) and imagine the 1950s when this square was the center of the literary world. Read "The Sheltering Sky" by Paul Bowles while sitting here for the full meta-experience. The square has other cafes, but Cafe Central has the historical weight. Cash only.',
  },
  {
    rank: 19,
    name: 'Cafe de France (Jemaa el-Fna)',
    icon: Eye,
    city: 'Marrakech',
    type: 'Iconic square-facing terrace',
    priceRange: 'From 15-35 MAD',
    wifi: 'No',
    bestFor: 'Jemaa el-Fna views, people-watching, sunset spectacle',
    description:
      'Cafe de France commands the most coveted terrace position in Marrakech — a rooftop overlooking the entire Jemaa el-Fna square. From its upper levels, you survey the greatest open-air theater in Morocco: snake charmers, henna artists, acrobats, juice sellers, storytellers, and the thousands of visitors who make this square the beating heart of the city. As the sun sets, the food stalls fire up their grills and clouds of fragrant smoke rise across the square. The cafe itself is basic — the drinks are simple and the service is functional — but the view is worth every dirham. This is not about gastronomy; it is about spectacle.',
    insiderTip:
      'Climb to the very top terrace for the widest panoramic views. Arrive at 17:00 to secure a front-row seat before sunset. Mint tea (from 15 MAD) or orange juice (from 15 MAD) is all you need. Do not expect gourmet anything — you are paying for the view. The sunset transformation of the square, from daytime market to evening food carnival, is mesmerizing from this angle. Early morning (8:00-9:00) offers a completely different, peaceful perspective.',
  },
  {
    rank: 20,
    name: 'Cafe les Negociants',
    icon: Users,
    city: 'Casablanca',
    type: 'Classic local neighborhood cafe',
    priceRange: 'From 8-20 MAD',
    wifi: 'No',
    bestFor: 'Authentic local experience, people-watching, cheap drinks',
    description:
      'Cafe les Negociants is the quintessential Moroccan neighborhood cafe — unpretentious, affordable, and bursting with local character. Located on Boulevard Mohammed V in Casablanca, it is the kind of place where businessmen close deals over mint tea, students study for exams, retired men play chess, and the waiter knows everyone by name. The terrace faces the boulevard, offering prime people-watching as Casablanca daily life parades past. Noss-noss costs from 8 MAD, mint tea from 8 MAD, fresh juice from 10 MAD. There are no avocado toasts or flat whites — just the traditional Moroccan cafe experience in its purest form. For travelers who want to understand how Moroccans actually spend their days, an hour at a cafe like this is worth more than any museum.',
    insiderTip:
      'Visit in the morning (8:00-10:00) for the most authentic atmosphere — regulars with their newspapers and noss-noss. The terrace is where the action is. Order noss-noss (from 8 MAD) to blend in. The cafe is near several art-deco buildings worth admiring. This experience costs almost nothing and teaches you more about Moroccan daily life than any guided tour. Cash only. No English menu — point at what others are drinking.',
  },
];

/* ===============================================================
   DATA: CAFE CULTURE GUIDE
   =============================================================== */

const cafeCultureTips = [
  { tip: 'The Mint Tea Ritual', icon: Coffee, description: 'Moroccan mint tea (atay) is prepared with Chinese gunpowder green tea, fresh spearmint, and generous sugar. It is poured from height to create a froth and served in small decorated glasses. Refusing an offer of tea is considered impolite. A pot costs from 10-20 MAD in traditional cafes.' },
  { tip: 'Order Noss-Noss Like a Local', icon: CheckCircle, description: 'Noss-noss (half-half) is Morocco signature coffee — half espresso, half steamed milk, served in a small glass. It costs from 8-15 MAD at traditional cafes. Ordering noss-noss marks you as someone who knows Moroccan cafe culture.' },
  { tip: 'Traditional vs. Modern Cafes', icon: Globe, description: 'Traditional cafes serve mint tea and noss-noss in simple settings (from 8-15 MAD per drink). Modern specialty cafes serve flat whites and pour-overs (from 25-50 MAD). Both coexist and each offers a valuable cultural experience.' },
  { tip: 'Cafe Etiquette', icon: Users, description: 'Moroccan cafes are social institutions. It is perfectly acceptable to sit for hours over a single drink. Traditional cafes are often male-dominated — women are always welcome but may feel more comfortable at modern cafes or those near tourist areas.' },
  { tip: 'Fresh Juice Culture', icon: Sun, description: 'Fresh orange juice is ubiquitous and excellent (from 5-15 MAD). Avocado juice/smoothies (from 15-25 MAD) are a Moroccan specialty. Seasonal fruits like pomegranate and prickly pear appear as juice options. Juice stalls are safe to drink from.' },
  { tip: 'Digital Nomad Tips', icon: Wifi, description: 'Wifi speeds vary from 5-50 Mbps. Modern cafes in Marrakech, Casablanca, and Tangier have the best connectivity. Traditional cafes rarely have wifi. Co-working spaces are emerging in major cities. Peak hours (12:00-15:00) often mean slower speeds and fewer seats.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is the mint tea ritual in Morocco?', answer: 'Moroccan mint tea is made with Chinese gunpowder green tea, fresh spearmint leaves, and generous sugar, brewed in a silver teapot and poured from height to create a froth. It is served in small decorated glasses and is central to Moroccan hospitality. A pot costs from 10-20 MAD at cafes. Refusing tea when offered is considered impolite.' },
  { question: 'What are the best cafes in Morocco?', answer: 'The most iconic include Cafe Hafa in Tangier (cliff-edge views since 1921), Cafe des Epices in Marrakech (spice square views), Cafe Clock in Fes (cultural hub with live music), Cafe Maure in Rabat (river and ocean views), Gran Cafe de Paris in Tangier (literary heritage), and Cafe Barroco in Casablanca (art-deco gem).' },
  { question: 'Are there good wifi cafes for digital nomads?', answer: 'Yes. Atay Cafe in Marrakech, Cafe 34 in Tangier, Patio in Essaouira, and several modern cafes in Casablanca offer reliable wifi (10-50 Mbps) and laptop-friendly atmospheres. Many welcome remote workers during non-peak hours. Co-working spaces are emerging in major cities.' },
  { question: 'How much does coffee cost in Morocco?', answer: 'Traditional cafe: noss-noss from 8-15 MAD, mint tea from 8-15 MAD. Modern specialty cafe: espresso from 25-40 MAD, flat white from 30-45 MAD. Tourist-area cafes charge 20-30% more. The best value is always at the local neighborhood cafe.' },
  { question: 'What is noss-noss?', answer: 'Noss-noss means half-half in Moroccan Arabic — half espresso, half steamed milk, served in a small glass. It is Morocco most popular coffee drink, similar to a cortado or small flat white. It costs from 8-15 MAD at traditional cafes. Order it to drink like a local.' },
  { question: 'Are Moroccan cafes welcoming to women?', answer: 'Modern cafes and tourist-area cafes are fully welcoming to everyone. Traditional neighborhood cafes tend to have a male-dominated clientele, though women are never turned away. In cities like Marrakech, Rabat, and Casablanca, the cafe scene is increasingly mixed and progressive. Tourist-oriented cafes like Nomad, Cafe des Epices, and Cafe Clock have diverse clienteles.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/morocco-best-restaurants', icon: UtensilsCrossed, title: 'Best Restaurants Morocco', description: 'The 25 best restaurants across Morocco from fine dining to hidden gems.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Complete guide to Moroccan cuisine from tagine and couscous to street food.' },
  { href: '/rabat-local-guide', icon: MapPin, title: 'Rabat Local Guide', description: 'Explore Rabat like a local with hidden neighborhoods and food experiences.' },
  { href: '/morocco-budget-travel', icon: Lightbulb, title: 'Morocco Budget Travel', description: 'How to travel Morocco affordably with real prices and savings tips.' },
  { href: '/morocco-digital-nomad', icon: Wifi, title: 'Digital Nomad Morocco', description: 'Guide to working remotely from Morocco with wifi, visa, and cost info.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoBestCafesPage() {
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
            backgroundImage: 'url(/images/hero-cuisine.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Best Cafes</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Coffee className="w-4 h-4" />
            Morocco Cafe Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            20 Best Cafes
            <br className="hidden md:block" /> in Morocco 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From legendary cliff-edge tea houses and literary cafes to modern specialty coffee shops
            and digital nomad hubs. The complete guide to Morocco&apos;s cafe culture with prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Art of Moroccan Cafe Culture
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In Morocco, the cafe is not a pit stop — it is a destination. The Moroccan cafe is
                where business is conducted, friendships are maintained, politics debated, and the
                simple act of sitting with a glass of mint tea becomes a meditation on the good life.
                From the clifftop terraces of Tangier where Beat Generation writers gazed at Spain
                to the rooftop perches of Marrakech where travelers watch the medina unfold below,
                Morocco&apos;s cafes are as much a part of the culture as its mosques and markets.
              </p>
              <p>
                What makes Morocco&apos;s cafe scene particularly exciting in 2026 is the convergence
                of two traditions. The ancient Moroccan cafe — mint tea poured from height, small
                glasses, hours of unhurried conversation — continues unchanged in thousands of
                neighborhood establishments across the kingdom. Meanwhile, a new generation of
                specialty coffee shops, drawing on Melbourne and Scandinavian coffee culture, is
                emerging in cities like Marrakech, Casablanca, Tangier, and Essaouira, bringing
                pour-over techniques, single-origin beans, and avocado toast to a country that
                has been drinking coffee since the 16th century.
              </p>
              <p>
                This guide presents 20 cafes across seven cities that capture the breadth of
                Morocco&apos;s cafe culture — from century-old institutions to brand-new specialty
                spots, from free-wifi digital nomad hubs to screen-free retreats where the only
                technology is a silver teapot. All prices are starting prices in MAD and may vary
                by season.
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
            Top 10 Must-Visit Cafes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            If you visit only ten cafes in Morocco, make it these.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Cafe Hafa, Tangier', price: 'From 15 MAD', category: 'Legendary', best: 'Sunset views' },
              { rank: 2, name: 'Cafe des Epices, Marrakech', price: 'From 15 MAD', category: 'Rooftop', best: 'Spice square views' },
              { rank: 3, name: 'Cafe Clock, Fes', price: 'From 20 MAD', category: 'Cultural', best: 'Live Gnawa music' },
              { rank: 4, name: 'Cafe Maure, Rabat', price: 'From 15 MAD', category: 'Historic', best: 'River & ocean views' },
              { rank: 5, name: 'Grand Cafe de la Poste, Marrakech', price: 'From 30 MAD', category: 'Art-Deco', best: 'Colonial elegance' },
              { rank: 6, name: 'Nomad Terrace, Marrakech', price: 'From 25 MAD', category: 'Modern', best: 'Medina panorama' },
              { rank: 7, name: 'Taros Rooftop, Essaouira', price: 'From 20 MAD', category: 'Music', best: 'Harbor views' },
              { rank: 8, name: 'Gran Cafe de Paris, Tangier', price: 'From 15 MAD', category: 'Literary', best: 'Grand Socco people-watching' },
              { rank: 9, name: 'Cafe Barroco, Casablanca', price: 'From 15 MAD', category: 'Heritage', best: 'Art-deco original' },
              { rank: 10, name: 'Aladdin Terrace, Chefchaouen', price: 'From 10 MAD', category: 'Views', best: 'Blue medina panorama' },
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
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {item.best}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Marrakech Cafes -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech (4 Cafes)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From medina rooftop terraces to colonial-era grand cafes and modern specialty coffee.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {marrakechCafes.map((cafe) => {
              const CafeIcon = cafe.icon;
              return (
                <div key={cafe.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{cafe.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {cafe.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {cafe.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {cafe.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {cafe.city}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Wifi className="w-3.5 h-3.5" />
                          Wifi: {cafe.wifi}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <strong>Best For:</strong> {cafe.bestFor}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cafe.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {cafe.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Tangier Cafes -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tangier (2 Cafes)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The city where cafe culture is woven into literary legend and the view from the terrace
            spans two continents.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {tangierCafes.map((cafe) => {
              const CafeIcon = cafe.icon;
              return (
                <div key={cafe.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{cafe.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {cafe.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {cafe.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {cafe.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {cafe.city}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Wifi className="w-3.5 h-3.5" />
                          Wifi: {cafe.wifi}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <strong>Best For:</strong> {cafe.bestFor}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cafe.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {cafe.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Fes Cafes -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fes (2 Cafes)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Cultural community hubs and garden oases in the heart of the world&apos;s largest medina.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {fesCafes.map((cafe) => {
              const CafeIcon = cafe.icon;
              return (
                <div key={cafe.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{cafe.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {cafe.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {cafe.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {cafe.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {cafe.city}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Wifi className="w-3.5 h-3.5" />
                          Wifi: {cafe.wifi}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <strong>Best For:</strong> {cafe.bestFor}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cafe.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {cafe.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Casablanca Cafes -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Casablanca (2 Cafes)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Art-deco heritage and fortress gardens in Morocco&apos;s economic capital.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {casablancaCafes.map((cafe) => {
              const CafeIcon = cafe.icon;
              return (
                <div key={cafe.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{cafe.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {cafe.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {cafe.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {cafe.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {cafe.city}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Wifi className="w-3.5 h-3.5" />
                          Wifi: {cafe.wifi}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <strong>Best For:</strong> {cafe.bestFor}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cafe.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {cafe.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Essaouira, Chefchaouen & Rabat Cafes -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essaouira, Chefchaouen &amp; Rabat (4 Cafes)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beach bohemia, blue mountain terraces, and cliff-edge Kasbah retreats.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[...essaouiraCafes, ...chefchaouenRabatCafes].map((cafe) => {
              const CafeIcon = cafe.icon;
              return (
                <div key={cafe.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{cafe.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {cafe.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {cafe.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {cafe.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {cafe.city}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Wifi className="w-3.5 h-3.5" />
                          Wifi: {cafe.wifi}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <strong>Best For:</strong> {cafe.bestFor}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cafe.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {cafe.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Digital Nomad & Specialty Cafes -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Digital Nomad &amp; Specialty Cafes (3 Cafes)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Modern coffee culture meets reliable wifi for Morocco&apos;s growing remote work community.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {nomadCafes.map((cafe) => {
              const CafeIcon = cafe.icon;
              return (
                <div key={cafe.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{cafe.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {cafe.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {cafe.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {cafe.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {cafe.city}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Wifi className="w-3.5 h-3.5" />
                          Wifi: {cafe.wifi}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <strong>Best For:</strong> {cafe.bestFor}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cafe.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {cafe.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- More Cafes (18-20) -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            More Essential Cafes (3 Picks)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three more cafes that capture the full spectrum of Morocco&apos;s cafe culture — from literary legend
            to iconic squares to authentic neighborhood life.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {moreCafes.map((cafe) => {
              const CafeIcon = cafe.icon;
              return (
                <div key={cafe.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-gold)]">{cafe.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {cafe.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {cafe.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {cafe.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {cafe.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cafe.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {cafe.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Cafe Culture Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Morocco Cafe Culture Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential knowledge for navigating Morocco&apos;s cafe scene like a regular.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cafeCultureTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
            Continue Exploring Morocco
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
            Ready to Explore Morocco&apos;s Cafe Culture?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From century-old cliff-edge tea houses to modern specialty coffee shops, Morocco&apos;s
            cafes are where the culture comes alive. Grab a glass of mint tea and start planning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-best-restaurants"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Best Restaurants
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Food Guide
            </Link>
            <Link
              href="/rabat-local-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Rabat Local Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

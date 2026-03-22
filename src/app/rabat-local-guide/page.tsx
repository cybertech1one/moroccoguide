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
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  Building,
  Coffee,
  MoonStar,
  Users,
  BookOpen,
  Train,
  TreesIcon,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Rabat Like a Local: Hidden Gems & Neighborhoods 2026 | Complete Guide',
  description:
    'Discover Rabat like a local in 2026. Explore hidden neighborhoods like Agdal, Hassan, Ocean, Sale medina, Hay Riad, and Diour Jamaa. Local food, nightlife, patisseries, river walks, and off-the-beaten-path experiences in Morocco capital city.',
  keywords: [
    'rabat like a local',
    'rabat hidden gems',
    'rabat local food',
    'rabat neighborhoods',
    'sale medina',
    'rabat off beaten path',
    'rabat agdal',
    'rabat nightlife',
    'rabat ocean neighborhood',
    'rabat hassan quarter',
    'rabat hay riad',
    'bou regreg river rabat',
    'avenue mohammed v rabat',
    'temara beach rabat',
    'rabat patisseries',
    'rabat local guide 2026',
    'diour jamaa rabat',
    'rue souika rabat',
    'rabat travel guide',
  ],
  openGraph: {
    title: 'Rabat Like a Local: Hidden Gems & Neighborhoods 2026',
    description:
      'Go beyond the tourist sights in Morocco capital. Explore Rabat hidden neighborhoods, local food spots, river walks, nightlife, and the twin city of Sale with real insider knowledge.',
    url: `${BASE_URL}/rabat-local-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-rabat.webp`,
        width: 1200,
        height: 630,
        alt: 'View of Rabat medina and Bou Regreg river with Hassan Tower in the background at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabat Like a Local: Hidden Gems & Neighborhoods 2026',
    description:
      'Explore Rabat beyond the tourist sights. Hidden neighborhoods, local food, Sale medina, river walks, nightlife, and insider tips for Morocco capital.',
    images: [`${BASE_URL}/images/hero-rabat.webp`],
  },
  alternates: { canonical: `${BASE_URL}/rabat-local-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/rabat-local-guide`,
  name: 'Rabat Like a Local: Hidden Gems & Neighborhoods 2026',
  description:
    'Discover Rabat like a local. Explore hidden neighborhoods, local food, Sale medina, river walks, patisseries, and nightlife in Morocco capital city.',
  url: `${BASE_URL}/rabat-local-guide`,
  image: `${BASE_URL}/images/hero-rabat.webp`,
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
  mainEntityOfPage: `${BASE_URL}/rabat-local-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Rabat',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Rabat', item: `${BASE_URL}/rabat` },
      { '@type': 'ListItem', position: 3, name: 'Rabat Local Guide', item: `${BASE_URL}/rabat-local-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best hidden gems in Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'Rabat hidden gems include the Sale medina across the river (far less touristic than Rabat medina), the Oudaias Kasbah Andalusian Garden at sunset, the local market on Rue Souika, the Diour Jamaa neighborhood with its traditional bakeries, the Bou Regreg river walk from Hassan to the marina, and the Ocean neighborhood with its trendy restaurants and beach promenade. Temara beach, a 20-minute drive south, is where locals escape on weekends.' } },
    { '@type': 'Question', name: 'What neighborhoods should I explore in Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'Agdal is the lively university neighborhood with cafes and modern dining. Hassan is the grand governmental quarter with wide boulevards and the Hassan Tower. Ocean (Les Oudaias area) has beach access and trendy restaurants. Hay Riad is the modern upscale district with malls and international dining. Diour Jamaa is a traditional residential area with authentic bakeries and local life. Sale, the twin city across the river, has a fascinating medina few tourists visit.' } },
    { '@type': 'Question', name: 'Where do locals eat in Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'Locals eat at the small restaurants along Rue Souika in the medina for traditional dishes from 25 MAD. In Agdal, cafe-restaurants like Cosmopolitan and La Veranda serve modern Moroccan cuisine from 60 MAD. The fish market near Bab el-Bahr has the freshest seafood. For breakfast, neighborhood patisseries serve msemen, baghrir, and croissants from 5 MAD. The Ocean neighborhood has trendy spots like Dhow and Le Petit Beur.' } },
    { '@type': 'Question', name: 'Is Sale worth visiting from Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Sale is Rabat twin city across the Bou Regreg river and is easily reached by tram (from 6 MAD) or a walk across the bridge. Sale medina is far less touristic than Rabat, with authentic souks, the beautiful Medersa of Sale (from 10 MAD), traditional pottery workshops, and the shrine of Sidi Abdallah ben Hassoun. The Gnawa music scene in Sale is renowned. It feels like stepping back in time compared to cosmopolitan Rabat.' } },
    { '@type': 'Question', name: 'What is Rabat nightlife like?', acceptedAnswer: { '@type': 'Answer', text: 'Rabat nightlife is more understated than Marrakech or Casablanca but has a loyal following. L Igloo on Avenue Mohammed V is an iconic bar that has been open since the 1960s. Upstairs is a rooftop lounge popular with young professionals. The Agdal neighborhood has several bars and cafe-lounges. Hotel bars like La Tour Hassan and Sofitel offer upscale cocktails. In summer, beach clubs near Temara come alive. Rabat nightlife starts late, from 22:00 onwards.' } },
    { '@type': 'Question', name: 'How do I get around Rabat like a local?', acceptedAnswer: { '@type': 'Answer', text: 'The Rabat-Sale tramway is the easiest way to get around, connecting the main neighborhoods and crossing to Sale (from 6 MAD per trip). Petit taxis (blue) are abundant and metered, costing from 10-25 MAD for most trips within the city. Walking is the best way to explore the medina, Oudaias Kasbah, and the Hassan quarter. For Temara beach and Hay Riad, use petit taxis or ride-hailing apps. The Rabat Ville and Rabat Agdal train stations connect to all major Moroccan cities.' } },
  ],
};

/* ===============================================================
   DATA: NEIGHBORHOODS
   =============================================================== */

const neighborhoods = [
  {
    name: 'Agdal: The University Quarter',
    icon: BookOpen,
    category: 'Modern & Vibrant',
    vibe: 'Young, energetic, cafe culture',
    bestTime: 'Afternoon and evening',
    description:
      'Agdal is the beating heart of young Rabat. Centered around Mohammed V University, this leafy neighborhood buzzes with students, young professionals, and a thriving cafe culture that rivals anything in Casablanca. Avenue de France and its side streets are lined with modern restaurants, juice bars, bookshops, and patisseries. This is where Rabatis come to eat, study, debate, and see friends. The vibe is distinctly Mediterranean — outdoor terraces spill onto wide sidewalks, and the energy is cosmopolitan without being touristy. You will hear as much French as Arabic, and the dress code is decidedly modern. For travelers, Agdal offers a window into contemporary Moroccan life that the medina simply cannot provide.',
    insiderTip:
      'Walk Avenue de France from the Agdal train station toward the city center. Stop at Cafe Cosmopolitan for people-watching, try La Veranda for modern Moroccan fusion (mains from 70 MAD), and browse the bookshops on Rue Oukaimeden. The best time is late afternoon when the terraces fill up. Thursday and Friday evenings are particularly lively when the weekend begins.',
  },
  {
    name: 'Hassan: The Governmental Quarter',
    icon: Landmark,
    category: 'Grand & Historic',
    vibe: 'Stately, wide boulevards, monumental',
    bestTime: 'Morning',
    description:
      'The Hassan neighborhood is where power and history converge. Dominated by the unfinished Hassan Tower and the stunning Mohammed V Mausoleum, this quarter is the governmental heart of Morocco. Wide, tree-lined boulevards radiate from the Hassan Tower esplanade, flanked by ministerial buildings, embassies, and grand villas from the French Protectorate era. The architecture is a striking blend of Moorish arches, art-deco facades, and modernist government buildings. Walking these boulevards gives you a sense of Rabat as a capital city — ordered, dignified, and quietly powerful. The neighborhood is less visited by tourists who tend to cluster in the medina and Oudaias, but its grandeur and the morning light on the Hassan Tower colonnade are unforgettable.',
    insiderTip:
      'Visit the Hassan Tower and Mohammed V Mausoleum early in the morning when the light is golden and the tour groups have not arrived. Walk along Boulevard Abi Regreg toward the river for views of Sale across the water. The cafe terraces near the tower are quieter than those in the medina. If you see the Royal Guard in their red uniforms at the mausoleum, you may photograph them — they are accustomed to it.',
  },
  {
    name: 'Ocean: Beach Life & Trendy Dining',
    icon: Waves,
    category: 'Coastal & Trendy',
    vibe: 'Beach, surf, modern restaurants',
    bestTime: 'Late afternoon and evening',
    description:
      'The Ocean neighborhood stretches along Rabat Atlantic coastline south of the Oudaias Kasbah, and it is where the city turns its face to the sea. The corniche promenade runs along dramatic cliffs above crashing waves, and the beach below draws surfers, joggers, and families. In recent years, this area has become Rabat trendiest dining and nightlife zone. Restaurants like Le Dhow (a converted boat permanently moored on the river) and Dar Zaki serve innovative cuisine in stunning settings. The sunsets from the Ocean corniche are spectacular — watch the Atlantic turn gold from one of the cliff-top terraces. This is modern, confident Rabat at its best, and a stark contrast to the ancient medina just a short walk north.',
    insiderTip:
      'Walk the entire corniche from the Oudaias Kasbah south toward Temara for dramatic cliff views. The beach below is popular for surfing (board rental from 100 MAD per hour). For dinner, book Le Dhow (mains from 100 MAD) at sunset for the most magical setting in Rabat. The area around Boulevard de la Corniche has several new restaurants and lounges worth exploring.',
  },
  {
    name: 'Sale Medina: The Authentic Twin City',
    icon: Globe,
    category: 'Traditional & Untouristed',
    vibe: 'Authentic, traditional, peaceful',
    bestTime: 'Morning',
    description:
      'Sale sits just across the Bou Regreg river from Rabat, but it feels like a different world. While Rabat has embraced modernity, Sale has preserved its traditional character with an authenticity that Rabat medina has largely lost to tourism. The Sale medina is a working neighborhood where families live, artisans craft, and daily life unfolds without regard for visitors. The Medersa of Sale (built in 1341) is one of Morocco finest Marinid-era schools, with exquisite zellige, carved stucco, and cedar woodwork rivaling anything in Fes. The Great Mosque, the Bab Mrisa sea gate, and the shrine of Sidi Abdallah ben Hassoun are all within the compact medina. Sale was historically a republic of corsairs — Barbary pirates who raided European shipping — and that rebellious spirit lingers in its fiercely independent character.',
    insiderTip:
      'Take the tramway from Rabat to Sale (from 6 MAD, 15 minutes). Enter the medina through Bab Mrisa, the massive 13th-century sea gate. Visit the Medersa (from 10 MAD) in the morning light. Explore the souks for traditional ceramics and textiles at prices far lower than Rabat or Marrakech. The pottery cooperatives near Bab Fes produce distinctive blue-and-white Sale ceramics. Have lunch at a local restaurant inside the medina (tagine from 30 MAD) for an authentic experience.',
  },
  {
    name: 'Hay Riad: Modern Rabat',
    icon: Building,
    category: 'Upscale & Contemporary',
    vibe: 'Malls, international dining, modern life',
    bestTime: 'Afternoon and evening',
    description:
      'Hay Riad is where Rabat looks to the future. This sprawling modern district southwest of the city center is home to the Mega Mall, international restaurants, corporate offices, and upscale residential developments. While it lacks the charm of the medina, Hay Riad reveals how Morocco urban middle and upper classes live today — in apartment complexes with underground parking, shopping at international brands, dining at sushi restaurants and burger joints alongside traditional Moroccan fare. The district is also home to the Rabat zoo and several parks. For travelers interested in contemporary Morocco beyond the tourist trail, Hay Riad offers an honest glimpse of the modern kingdom. It is also where you will find the best international cuisine if you need a break from tagine.',
    insiderTip:
      'Take a petit taxi from the city center (from 20 MAD). The Mega Mall has air-conditioned comfort, a cinema with English-language films, and a food court. For proper dining, try Sushi Wan for Japanese (mains from 90 MAD), Seasons for Italian (from 80 MAD), or Al Warda for upscale Moroccan (from 120 MAD). The area around Hay Riad is where many expatriates live, so the restaurants reflect international tastes.',
  },
  {
    name: 'Diour Jamaa: Traditional Neighborhood Life',
    icon: Heart,
    category: 'Residential & Authentic',
    vibe: 'Traditional, quiet, bakeries, local markets',
    bestTime: 'Early morning',
    description:
      'Diour Jamaa is one of Rabat oldest residential neighborhoods, nestled between the medina and the Hassan quarter. This is not a tourist destination — it is a living neighborhood where families have roots going back generations. The narrow streets are lined with traditional houses, neighborhood mosques, corner shops, and some of the best bakeries in Rabat. Every morning, the air fills with the scent of fresh bread from wood-fired ovens, and residents queue for hot msemen, baghrir (spongy semolina pancakes), and rghaif. The neighborhood hammam is still a social institution where men and women gather on alternate days. Walking through Diour Jamaa in the early morning, when the bread is baking and the tea is brewing, is one of the most authentic experiences you can have in Rabat.',
    insiderTip:
      'Visit at 7:00-8:00 AM when the bakeries are firing. Follow the scent of fresh bread to a neighborhood ferran (communal oven) — locals bring their own dough to be baked. Buy msemen or baghrir from a street vendor (from 2-5 MAD each) and eat them warm with honey or cheese. The neighborhood hammam offers a traditional bathing experience (from 15 MAD entry). Be respectful — this is a residential area, not a tourist attraction. A quiet walk and a genuine smile go further than a camera.',
  },
];

/* ===============================================================
   DATA: LOCAL FOOD EXPERIENCES
   =============================================================== */

const localFoodExperiences = [
  {
    name: 'Breakfast at a Local Patisserie',
    icon: Coffee,
    category: 'Morning Ritual',
    price: 'From 15-30 MAD',
    description:
      'Rabatis take breakfast seriously. Every neighborhood has its beloved patisserie where locals start the day with msemen (flaky flatbread), croissants, pain au chocolat, baghrir with honey, and mint tea or coffee. The French colonial legacy lives on in the quality of the pastries — Rabat patisseries rival those in Paris. Try Patisserie Majestic on Avenue Mohammed V for classic French pastries in an art-deco setting, or Paul on Avenue de France in Agdal for a modern take. In the medina, neighborhood bakeries serve fresh-from-the-oven msemen with butter and honey from 5 MAD — arguably the best breakfast in Morocco.',
    insiderTip:
      'Ask for msemen bel jben (with cheese) or msemen bel assel (with honey) at any medina bakery. Pair it with noss-noss (half coffee, half milk), which is what most Rabatis drink in the morning. The combination costs from 10-15 MAD and is infinitely better than any hotel breakfast buffet.',
  },
  {
    name: 'Rue Souika Market',
    icon: ShoppingBag,
    category: 'Local Market',
    price: 'Free to browse',
    description:
      'Rue Souika is the main commercial artery of Rabat medina, and its daily market is where locals do their actual shopping. Unlike the tourist-oriented souks of Marrakech, here you will find Rabatis buying vegetables, spices, olives, fresh bread, household goods, and clothing at prices that reflect local reality, not tourist markup. The street is narrow and bustling, with vendors calling out their wares and the scent of fresh herbs and spices filling the air. The olive sellers are particularly impressive, with dozens of varieties in gleaming mounds. The butchers, fishmongers, and produce stalls form a living encyclopedia of Moroccan cuisine.',
    insiderTip:
      'Go in the morning (9:00-11:00) when the produce is freshest and the energy highest. Prices here are fixed or nearly so — there is minimal negotiation because locals know what things cost. Buy a bag of mixed olives (from 15 MAD per kilo), fresh spice blends for tagine (from 10 MAD), and seasonal fruit. The juice stalls along the street serve fresh orange or avocado juice from 8 MAD.',
  },
  {
    name: 'Le Dhow Floating Restaurant',
    icon: UtensilsCrossed,
    category: 'Fine Dining',
    price: 'From 120-300 MAD per person',
    description:
      'Moored permanently on the Bou Regreg river between Rabat and Sale, Le Dhow is a converted traditional sailing vessel that has become one of Rabat most iconic dining experiences. The multi-level boat offers Moroccan and international cuisine with panoramic views of the medina, the Oudaias Kasbah, and the Sale skyline. At sunset, the river turns golden and the city lights begin to twinkle — it is genuinely magical. The menu spans grilled seafood, Moroccan classics with modern presentation, and a strong cocktail list. This is where Rabatis celebrate special occasions, and you should too.',
    insiderTip:
      'Book ahead for a sunset table on the upper deck — call or use the restaurant social media. The tasting menu (from 250 MAD) offers the best value for experiencing multiple dishes. The mojitos are excellent. After dinner, walk along the Bou Regreg marina promenade for a digestive stroll with river views.',
  },
  {
    name: 'Dar Zaki',
    icon: Star,
    category: 'Traditional Moroccan',
    price: 'From 80-200 MAD per person',
    description:
      'Dar Zaki is widely considered one of the finest traditional Moroccan restaurants in Rabat. Set in a beautifully restored riad near the medina, it serves classic dishes with an attention to detail that borders on reverence. The pastilla (pigeon pie with almonds and cinnamon) is legendary, the lamb tagine with prunes and almonds is sublime, and the couscous on Fridays follows centuries of tradition. The dining room features carved plaster, zellige tiles, and candlelight. Unlike the tourist restaurants of Marrakech, Dar Zaki clientele is largely Moroccan, which is the highest compliment a restaurant can receive.',
    insiderTip:
      'Reserve for Friday lunch to experience traditional couscous day — many Moroccan families dine out for the weekly couscous, and Dar Zaki version is exceptional (from 100 MAD). Ask for the pastilla as a starter even if it is not on the regular menu — they can usually prepare it with advance notice. The terrace is lovely on warm evenings.',
  },
  {
    name: 'Cafe Maure in the Oudaias',
    icon: Coffee,
    category: 'Iconic Cafe',
    price: 'From 15-25 MAD',
    description:
      'Perched on the edge of the Oudaias Kasbah with sweeping views of the Bou Regreg river mouth and the Atlantic beyond, Cafe Maure is Rabat equivalent of Tangier Cafe Hafa. This open-air terrace, shaded by reed canopies and fragrant jasmine, serves mint tea and fresh orange juice while you gaze out at one of the most beautiful views in Morocco. Below you, the river meets the ocean, fishermen mend nets, and the walls of Sale shimmer in the distance. It is a place that resists hurry — order your tea, settle into a cushion, and let the afternoon dissolve.',
    insiderTip:
      'Come at 16:00-17:00 for the best afternoon light and to avoid the midday heat. Order a pot of Moroccan mint tea (from 15 MAD) and almond pastries (from 10 MAD). Stay through sunset if the weather is clear — the sky turns extraordinary colors over the Atlantic. Cash only. The cafe is at the end of the Andalusian Garden inside the Oudaias Kasbah — walk through the garden first for the full experience.',
  },
];

/* ===============================================================
   DATA: WALKS & EXPERIENCES
   =============================================================== */

const walksAndExperiences = [
  {
    name: 'Avenue Mohammed V Architecture Walk',
    icon: Building,
    category: 'Architecture & History',
    price: 'Free',
    duration: '1.5-2 hours',
    description:
      'Avenue Mohammed V is Rabat grandest boulevard, stretching from the medina gate of Bab el-Had to the Agdal train station. Lined with art-deco, neo-Moorish, and modernist buildings from the French Protectorate period (1912-1956), it is an open-air museum of 20th-century architecture. Look up as you walk to admire the ornate balconies, geometric facades, carved cornices, and the blend of European and Islamic decorative motifs that defines Rabat built heritage. Key landmarks include the Bank al-Maghrib building, the Central Post Office, the Parliament, and the Cathedral of Saint-Pierre. The avenue is also Rabat main commercial street, with banks, pharmacies, bookshops, and the legendary Patisserie Majestic.',
    insiderTip:
      'Start at Bab el-Had and walk southeast toward Agdal. The most impressive architectural stretch is between the post office and the parliament. Photograph the buildings in the morning when the light hits the facades. Stop at Patisserie Majestic (open since the 1940s) for coffee and pastries in an unchanged art-deco interior (from 20 MAD). The Bank al-Maghrib building is particularly stunning — the blend of Moorish arches with art-deco geometry is uniquely Rabat.',
  },
  {
    name: 'Bou Regreg River Walk',
    icon: Waves,
    category: 'Scenic Walk',
    price: 'Free',
    duration: '1-2 hours',
    description:
      'The Bou Regreg river separates Rabat from Sale, and the recently developed river promenade offers one of the most pleasant walks in the city. Starting from the Hassan Tower area, you can walk along the riverbank past the new marina, Le Dhow restaurant, and the tramway bridge all the way to the river mouth at the Oudaias Kasbah. Along the way, you will see traditional rowing boats (feluccas) ferrying passengers between Rabat and Sale (from 3 MAD), fishermen casting nets, and the contrasting skylines of modern Rabat and ancient Sale. The marina area has been developed with restaurants, cafes, and a landscaped promenade that transforms this once-neglected waterfront into a destination.',
    insiderTip:
      'Walk from the Hassan Tower to the Oudaias Kasbah along the river for the best route (about 3 km). Take a felucca across to Sale (from 3 MAD) for a 5-minute boat ride that doubles as a scenic experience. The river walk is best in late afternoon when the light is soft and the evening promenade begins. The marina cafes are good for a mint tea break midway.',
  },
  {
    name: 'Temara Beach: The Local Weekend Escape',
    icon: Sun,
    category: 'Beach & Relaxation',
    price: 'Free (taxi from 30 MAD)',
    duration: 'Half day to full day',
    description:
      'When Rabatis want a beach day, they head to Temara — a coastal town 15 km south of the city center with wider, cleaner beaches than Rabat proper. The main beach stretches for kilometers along the Atlantic, with golden sand, moderate surf, and a relaxed atmosphere that feels a world away from the capital. On weekends and holidays, Temara fills with families grilling sardines, groups of friends playing football, and couples walking the shoreline. Beach cafes and fish restaurants line the road above the beach, serving grilled catch-of-the-day with bread and salad from 50 MAD. The water is colder than the Mediterranean coast but perfectly swimmable from June to September.',
    insiderTip:
      'Take a grand taxi from Rabat (from 10 MAD per person shared, from 30 MAD private) or a petit taxi. Go on a weekday for uncrowded beaches or Saturday morning for the full local experience. The beach restaurants south of the main strip are less crowded and often better. Try grilled sardines with chermoula (from 30 MAD) — arguably the best way to eat sardines in Morocco. Bring sunscreen — the Atlantic breeze disguises strong UV.',
  },
  {
    name: 'Rabat Nightlife: L&apos;Igloo & Upstairs',
    icon: MoonStar,
    category: 'Nightlife & Social',
    price: 'From 50-150 MAD (drinks)',
    duration: '2-4 hours',
    description:
      'Rabat nightlife is quieter than Marrakech or Casablanca, but that is part of its charm — the scene is intimate, unpretentious, and genuinely local. L Igloo on Avenue Mohammed V is a Rabat institution, a bar that has operated since the 1960s with wood-paneled walls, vintage decor, and a loyal clientele of artists, journalists, and intellectuals. The draft beer is cheap (from 30 MAD) and the atmosphere is utterly authentic. Upstairs, on the rooftop of a building near Agdal, offers a more modern lounge experience with cocktails (from 70 MAD), DJs on weekends, and views across the city. Between these two extremes, Rabat nightlife caters to every taste — from hotel bars at La Tour Hassan and Sofitel to neighborhood cafes that stay open late with shisha and conversation.',
    insiderTip:
      'Start at L Igloo around 21:00-22:00 for a drink and a slice of old Rabat. Move to Upstairs after 23:00 when the DJ starts and the rooftop fills with young professionals. In summer, the beach clubs south of the city near Temara host outdoor parties. Rabat nightlife starts late — nothing happens before 22:00. Dress smart casual for rooftop venues. Hotel bars are the best option on weeknights when clubs are quiet.',
  },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Use the Tramway', icon: Train, description: 'The Rabat-Sale tramway is cheap (from 6 MAD), efficient, and connects the main areas including the medina, Agdal, Hassan, and Sale. It runs from 6:00 to 23:00. Buy tickets at the platform machines.' },
  { tip: 'Learn Basic Darija Phrases', icon: Users, description: 'Rabatis appreciate effort with Moroccan Arabic. "Labas?" (how are you?), "Shukran" (thank you), and "Bslama" (goodbye) go far. French is widely spoken as a fallback. English is less common than in Marrakech.' },
  { tip: 'Friday Is Couscous Day', icon: UtensilsCrossed, description: 'Traditional Moroccan families eat couscous for Friday lunch. Many restaurants serve special couscous on Fridays. If invited to a Moroccan home for Friday lunch, it is an honor — always accept.' },
  { tip: 'Rabat Is a Walking City', icon: Footprints, description: 'The medina, Oudaias Kasbah, Hassan Tower, and Ocean neighborhood are all within walking distance. Wear comfortable shoes — the medina has cobblestones and hills. The river walk connects many attractions.' },
  { tip: 'Rabat Ville vs. Rabat Agdal Stations', icon: Train, description: 'Rabat has two main train stations. Rabat Ville is central, near the medina. Rabat Agdal is in the Agdal neighborhood. Both serve all major routes, but Rabat Ville is more convenient for most tourist areas.' },
  { tip: 'Visit Sale on a Weekday', icon: Calendar, description: 'Sale medina is quieter and more authentic on weekdays. The Medersa is less crowded in the morning. Friday afternoon many shops close for prayers. Saturday morning is the busiest market day.' },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Eat Where Locals Eat', icon: UtensilsCrossed, description: 'Neighborhood restaurants in the medina and Agdal serve full meals from 25-40 MAD. The tourist restaurants near the Kasbah charge from 80-150 MAD for similar dishes. Follow the locals.', savings: 'Save from 40-110 MAD per meal' },
  { tip: 'Tramway Over Taxis', icon: Train, description: 'A tramway ride costs from 6 MAD anywhere on the network. Petit taxis charge from 10-30 MAD for similar distances. For trips between Rabat and Sale, the tram saves significantly over multiple trips.', savings: 'Save from 4-24 MAD per trip' },
  { tip: 'Free Attractions Abound', icon: Star, description: 'The medina walk, Oudaias Kasbah exterior, Hassan Tower esplanade, Avenue Mohammed V, Bou Regreg river walk, and the beach are all free. Rabat best experiences cost nothing.', savings: 'Free — Rabat best experiences' },
  { tip: 'Patisserie Breakfast', icon: Coffee, description: 'Skip hotel breakfast and eat at a neighborhood patisserie. Msemen, coffee, and juice cost from 15-25 MAD vs. from 80-150 MAD for a hotel buffet.', savings: 'Save from 55-125 MAD per morning' },
  { tip: 'Shared Grand Taxi to Temara', icon: MapPin, description: 'A shared grand taxi to Temara beach costs from 10 MAD per person. Private petit taxis charge from 30-50 MAD. Organized beach trips from hotels cost from 200 MAD.', savings: 'Save from 20-190 MAD per trip' },
  { tip: 'Buy Souvenirs in Sale', icon: ShoppingBag, description: 'Sale medina souks have significantly lower prices than Rabat medina or Marrakech. Ceramics, textiles, and leather goods cost from 30-50% less across the river.', savings: 'Save 30-50% on souvenirs' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the best hidden gems in Rabat?', answer: 'Rabat hidden gems include the Sale medina (far less touristic), the morning bakeries in Diour Jamaa (msemen from 2 MAD), the Bou Regreg river walk, the Ocean neighborhood restaurants, and Temara beach. The Medersa of Sale (from 10 MAD) rivals those in Fes without the crowds. The local market on Rue Souika is authentic and unspoiled. Even the Oudaias Kasbah Andalusian Garden, while not unknown, is rarely crowded at sunset.' },
  { question: 'What neighborhoods should I explore in Rabat?', answer: 'Agdal for cafe culture and modern dining. Hassan for grand architecture and the tower. Ocean for beach life and trendy restaurants. Diour Jamaa for traditional neighborhood bakeries. Sale medina for untouristed authenticity. Hay Riad for modern Morocco. Each neighborhood reveals a different facet of the capital, and all are connected by tramway or a short taxi ride.' },
  { question: 'Where do locals eat in Rabat?', answer: 'Locals eat at small restaurants on Rue Souika (full meal from 25 MAD), neighborhood joints in Agdal (from 40 MAD), fish stalls near Bab el-Bahr, and Dar Zaki for special occasions (from 80 MAD). For breakfast, any neighborhood patisserie beats a hotel buffet. Cafe Maure in the Oudaias is where everyone goes for mint tea. Friday is couscous day at most traditional restaurants.' },
  { question: 'Is Sale worth visiting from Rabat?', answer: 'Yes. Sale is one of Rabat best experiences. The medina is authentic and untouristed, the Medersa (from 10 MAD) is stunning, the souks have genuine prices, and the traditional atmosphere is palpable. Take the tram (from 6 MAD) or a felucca boat (from 3 MAD) across the river. Budget 3-4 hours for a proper visit. The pottery cooperatives near Bab Fes are excellent.' },
  { question: 'What is Rabat nightlife like?', answer: 'Intimate and local rather than flashy. L Igloo is a legendary dive bar on Avenue Mohammed V (beer from 30 MAD). Upstairs offers rooftop cocktails and weekend DJs (from 70 MAD). Hotel bars at La Tour Hassan and Sofitel are upscale options. In summer, beach clubs near Temara host events. The Agdal neighborhood has several cafe-lounges. Nightlife starts after 22:00.' },
  { question: 'How many days do you need in Rabat?', answer: 'Two to three days allows you to explore beyond the tourist sights. Day 1: medina, Oudaias Kasbah, Cafe Maure, Bou Regreg river walk. Day 2: Hassan Tower, Avenue Mohammed V architecture walk, Agdal neighborhood, nightlife. Day 3: Sale medina, Temara beach, Dar Zaki dinner. One day is enough for just the highlights but misses the local character.' },
  { question: 'How do I get around Rabat like a local?', answer: 'The tramway connects most areas (from 6 MAD). Petit taxis are metered and affordable (from 10 MAD). Walk the medina and central areas — they are compact. Use the felucca to cross to Sale (from 3 MAD). For Temara, take a shared grand taxi (from 10 MAD per person). Rabat is one of the easiest Moroccan cities to navigate on foot.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/rabat', icon: MapPin, title: 'Rabat City Guide', description: 'Complete guide to Rabat: attractions, transport, accommodation, and planning.' },
  { href: '/morocco-best-restaurants', icon: UtensilsCrossed, title: 'Best Restaurants in Morocco', description: 'The 25 best restaurants across Morocco from street food to fine dining.' },
  { href: '/morocco-best-cafes', icon: Coffee, title: 'Best Cafes in Morocco', description: 'From traditional mint tea spots to modern coffee shops across the kingdom.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Complete guide to Moroccan cuisine from tagine and couscous to pastilla and street food.' },
  { href: '/morocco-budget-travel', icon: Lightbulb, title: 'Morocco Budget Travel', description: 'How to travel Morocco on a budget with real prices and money-saving strategies.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function RabatLocalGuidePage() {
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
            backgroundImage: 'url(/images/hero-rabat.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/rabat" className="hover:text-white transition-colors">
              Rabat
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Local Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Local Insider Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Rabat Like a Local
            <br className="hidden md:block" /> Hidden Gems &amp; Neighborhoods
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Beyond the tourist sights: explore Morocco&apos;s capital through its neighborhoods,
            local food, river walks, and the twin city of Sale. Your 2026 insider guide to the real Rabat.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Capital They Don&apos;t Show You
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Most travelers pass through Rabat in half a day — Hassan Tower, the medina, the Oudaias
                Kasbah, and then on to Marrakech or Fes. They miss the real city entirely. Rabat is Morocco
                at its most refined, a capital where government ministers share cafe terraces with university
                students, where ancient medina streets lead to modern art galleries, and where the Atlantic
                Ocean crashes against city walls that have stood since the 12th century.
              </p>
              <p>
                What makes Rabat special is not its monuments (though they are magnificent) but its
                neighborhoods. Each one tells a different story of Morocco: the buzzing student cafes of
                Agdal, the grand governmental boulevards of Hassan, the trendy beach restaurants of the
                Ocean quarter, the untouristed authenticity of Sale across the river, the morning bakeries
                of Diour Jamaa where bread is still baked in communal ovens. This is a city that lives at
                a human pace, where mint tea is never rushed and the evening promenade is still sacred.
              </p>
              <p>
                This guide takes you beyond the tourist highlights into Rabat&apos;s neighborhoods, local
                food scenes, hidden experiences, and the daily rhythms that make this capital one of
                Morocco&apos;s most rewarding cities. Whether you have two days or a week, these
                recommendations will help you experience Rabat the way Rabatis do.
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
            The experiences that reveal the real Rabat beyond the guidebook highlights.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Breakfast at a Neighborhood Patisserie', price: 'From 15 MAD', time: '30-45 min', category: 'Morning Ritual' },
              { rank: 2, name: 'Sale Medina & Medersa Visit', price: 'From 10 MAD', time: '3-4 hours', category: 'Cultural Heritage' },
              { rank: 3, name: 'Cafe Maure Sunset at the Oudaias', price: 'From 15 MAD', time: '1-2 hours', category: 'Iconic Cafe' },
              { rank: 4, name: 'Bou Regreg River Walk & Felucca', price: 'From 3 MAD', time: '1-2 hours', category: 'Scenic Walk' },
              { rank: 5, name: 'Avenue Mohammed V Architecture', price: 'Free', time: '1.5-2 hours', category: 'Architecture' },
              { rank: 6, name: 'Rue Souika Local Market', price: 'Free to browse', time: '1-2 hours', category: 'Market' },
              { rank: 7, name: 'Agdal Cafe Hopping', price: 'From 20 MAD', time: '2-3 hours', category: 'Modern Life' },
              { rank: 8, name: 'Temara Beach Day', price: 'From 10 MAD (taxi)', time: 'Half day', category: 'Beach' },
              { rank: 9, name: 'Dinner at Le Dhow or Dar Zaki', price: 'From 80 MAD', time: '2 hours', category: 'Dining' },
              { rank: 10, name: 'L&apos;Igloo & Rabat Nightlife', price: 'From 30 MAD', time: '2-4 hours', category: 'Nightlife' },
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

      {/* -- Neighborhoods -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rabat&apos;s Neighborhoods
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Each neighborhood reveals a different facet of Morocco&apos;s capital. Go beyond
            the medina to discover the city&apos;s true character.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All neighborhoods are accessible by tramway or a short petit taxi ride (from 10 MAD).
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
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {hood.bestTime}
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

      {/* -- Local Food Experiences -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where Locals Eat &amp; Drink
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From morning patisseries to floating restaurants, these are the food
            experiences that define daily life in Rabat.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices per person. Seasonal pricing may apply at some restaurants.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {localFoodExperiences.map((item) => {
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

      {/* -- Walks & Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Footprints className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Walks &amp; Local Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The walks, day trips, and evening experiences that reveal
            Rabat&apos;s character beyond the monuments.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most of these experiences are free or very affordable. Comfortable walking shoes recommended.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {walksAndExperiences.map((item) => {
              const WalkIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WalkIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
                        {item.duration && (
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {item.duration}
                          </span>
                        )}
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Rabat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Rabat is one of the most affordable capital cities in the Mediterranean region. Here is how to stretch your budget even further.
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
            Insider Tips for Rabat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that will help you navigate the capital like a Rabati.
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

      {/* -- Sample 3-Day Local Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            3-Day &quot;Like a Local&quot; Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A day-by-day plan designed to show you Rabat through local eyes, not a tourist lens.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Medina, River &amp; Sunset
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Breakfast at a neighborhood patisserie — msemen with honey and noss-noss coffee (from 15 MAD).
                      Walk through the medina via Rue Souika, browsing the local market for olives, spices, and fresh
                      juice (from 8 MAD). Exit through the medina toward the Hassan Tower and Mohammed V Mausoleum.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk along the Bou Regreg river from Hassan toward the Oudaias Kasbah (3 km, free). Take a
                      felucca across to Sale for a quick look (from 3 MAD). Return and explore the Andalusian Garden
                      inside the Oudaias. Lunch at a medina restaurant (from 35 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset mint tea at Cafe Maure (from 15 MAD). Walk along the Ocean corniche as the city
                      lights come on. Dinner at Le Dhow floating restaurant (from 120 MAD) or a local spot
                      in the medina (from 40 MAD). Estimated Day 1 cost: from 200-350 MAD.
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
                  Day 2: Architecture, Agdal &amp; Nightlife
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk Avenue Mohammed V from Bab el-Had, admiring the art-deco and neo-Moorish architecture.
                      Coffee at Patisserie Majestic (from 20 MAD). Visit the Parliament area and the Hassan quarter
                      governmental buildings. Walk through Diour Jamaa for a glimpse of traditional neighborhood life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take the tram to Agdal (from 6 MAD). Explore Avenue de France, browse bookshops, and settle
                      into a cafe terrace for people-watching (from 20 MAD). Lunch at La Veranda or a local Agdal
                      restaurant (from 60 MAD). This is young, modern Rabat at its liveliest.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Dinner at Dar Zaki for traditional Moroccan cuisine (from 80 MAD). Drinks at L&apos;Igloo for
                      old-school Rabat atmosphere (beer from 30 MAD), then Upstairs for rooftop cocktails and DJs
                      (from 70 MAD). Estimated Day 2 cost: from 250-500 MAD.
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
                  Day 3: Sale &amp; Temara Beach
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take the tramway to Sale (from 6 MAD). Enter through Bab Mrisa and explore the medina.
                      Visit the stunning Medersa of Sale (from 10 MAD). Browse the pottery souks and textile
                      stalls at local prices. This is the most authentic medina experience near Rabat.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Grand taxi to Temara beach (from 10 MAD shared). Spend the afternoon swimming, walking the
                      shoreline, and eating grilled sardines at a beach restaurant (from 30 MAD). This is how
                      Rabatis spend their weekends — relaxed, social, and sun-soaked.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Rabat for a final sunset from the Ocean corniche. Farewell dinner at a restaurant
                      of your choice — the fish restaurants near the medina offer excellent value (from 50 MAD).
                      End with mint tea in the Oudaias. Estimated Day 3 cost: from 150-350 MAD.
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-900 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Local eateries, tramway, free walks, patisserie breakfasts</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,200-2,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Restaurant meals, Le Dhow dinner, nightlife, Temara day trip</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 3,000-5,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Fine dining, hotel bars, private taxis, upscale experiences</p>
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
            Ready to Discover the Real Rabat?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From morning patisseries and river walks to floating restaurants and rooftop nightlife,
            Rabat rewards those who look beyond the guidebook. Start planning your local experience today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rabat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Rabat City Guide
            </Link>
            <Link
              href="/morocco-best-restaurants"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Best Restaurants
            </Link>
            <Link
              href="/morocco-best-cafes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Coffee className="w-5 h-5" />
              Best Cafes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

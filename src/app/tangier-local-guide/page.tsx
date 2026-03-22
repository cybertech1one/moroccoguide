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
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  Sunset,
  Mountain,
  Coffee,
  MoonStar,
  BookOpen,
  Building,
  Users,
  Navigation,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Tangier Like a Local: Hidden Gems & Neighborhoods 2026 | Insider Guide',
  description:
    'Discover Tangier like a local in 2026. Hidden neighborhoods, Marshan terraces sunset, Dradeb local life, Boulevard Pasteur, Cafe Hafa rituals, grilled sardines at the fish market, literary quarter, cheap medina eats, and real petit taxi prices.',
  keywords: [
    'tangier like a local',
    'tangier hidden gems',
    'tangier local food',
    'tangier neighborhoods',
    'tangier off beaten path',
    'marshan tangier',
    'dradeb tangier',
    'boulevard pasteur tangier',
    'cafe hafa locals',
    'tangier fish market',
    'tangier literary quarter',
    'tangier cheap eats',
    'tangier petit taxi prices',
    'socco chico tangier evening',
    'place de france tangier',
    'tanja marina bay',
    'malabata beach tangier',
    'tangier iberia quarter',
    'tangier local guide 2026',
    'tangier authentic experiences',
  ],
  openGraph: {
    title: 'Tangier Like a Local: Hidden Gems & Neighborhoods 2026',
    description:
      'Go beyond Cap Spartel. Discover authentic Tangier neighborhoods, local food spots, the literary quarter, sunset rituals at Cafe Hafa, and real petit taxi prices from locals who know the city.',
    url: `${BASE_URL}/tangier-local-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tangier.webp`,
        width: 1200,
        height: 630,
        alt: 'Tangier medina rooftops and the Strait of Gibraltar at sunset with local neighborhood terraces in the foreground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tangier Like a Local: Hidden Gems & Neighborhoods 2026',
    description:
      'Beyond the tourist trail. Marshan sunset terraces, Dradeb neighborhood life, grilled sardines at the fish market, literary quarter walks, and real local prices.',
    images: [`${BASE_URL}/images/hero-tangier.webp`],
  },
  alternates: { canonical: `${BASE_URL}/tangier-local-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/tangier-local-guide`,
  name: 'Tangier Like a Local: Hidden Gems & Neighborhoods 2026',
  description:
    'An insider guide to Tangier beyond the tourist trail. Discover authentic neighborhoods, local food, the literary quarter, and hidden gems that most visitors never find.',
  url: `${BASE_URL}/tangier-local-guide`,
  image: `${BASE_URL}/images/hero-tangier.webp`,
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
  mainEntityOfPage: `${BASE_URL}/tangier-local-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Tangier',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tangier', item: `${BASE_URL}/tangier` },
      { '@type': 'ListItem', position: 3, name: 'Local Guide', item: `${BASE_URL}/tangier-local-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the hidden gems of Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'The best hidden gems include the Marshan quarter with its sunset terraces and crumbling villas, the Dradeb neighborhood where you can experience authentic local life far from tourists, the Iberia quarter with Spanish colonial heritage, the local fish market where you can eat grilled sardines for from 15 MAD, and the literary quarter where Paul Bowles, William Burroughs, and Mohamed Choukri once lived and wrote.' } },
    { '@type': 'Question', name: 'What neighborhoods should I explore in Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'Beyond the medina, explore the Ville Nouvelle along Boulevard Pasteur and Place de France for cafe culture, the Marshan quarter for sunset views and colonial villas, Dradeb for real local life and cheap eats, and the Iberia quarter for Spanish heritage buildings. Malabata on the eastern bay is the local beach, and Tanja Marina Bay is the modern waterfront development.' } },
    { '@type': 'Question', name: 'Where do locals eat in Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'Locals eat at the fish market near the port where freshly grilled sardines cost from 15 MAD. For breakfast, look for msemen and harira stalls in Dradeb (from 5 MAD). The cheap eateries around Rue d Italie serve generous tajine for from 25 MAD. In the medina, the stalls around Petit Socco serve bocadillos for from 15 MAD. Avoid restaurants on the main tourist drag where prices double.' } },
    { '@type': 'Question', name: 'How much does a petit taxi cost in Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'Petit taxis in Tangier should cost from 7-10 MAD for a short ride within the city center using the meter. Medina to Malabata costs from 15-20 MAD. Medina to the train station costs from 15 MAD. Always insist on the meter. At night, drivers sometimes refuse the meter — agree on a price before getting in but it should not exceed from 25-30 MAD for any ride within the city.' } },
    { '@type': 'Question', name: 'What is the Marshan quarter in Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'Marshan is a residential quarter west of the medina perched on the cliffs overlooking the Strait of Gibraltar. It is known for crumbling colonial-era villas, quiet leafy streets, and the famous Marshan terraces where locals gather at sunset to watch the sky change over Spain. Cafe Hafa sits at its edge. The area is less visited by tourists but offers some of the most atmospheric walks in Tangier.' } },
    { '@type': 'Question', name: 'Is Tangier good for literary tourism?', acceptedAnswer: { '@type': 'Answer', text: 'Tangier has one of the richest literary histories of any city in North Africa. Paul Bowles lived here from 1947 until his death in 1999. William Burroughs wrote Naked Lunch in a room near Petit Socco. Jack Kerouac visited. Mohamed Choukri, author of For Bread Alone, grew up in the city. Tennessee Williams, Jean Genet, and Truman Capote all spent time here. You can visit the American Legation Museum, walk past Bowles former apartment in the Itesa building, and drink tea at the cafes these writers frequented.' } },
  ],
};

/* ===============================================================
   DATA: NEIGHBORHOODS
   =============================================================== */

const neighborhoods = [
  {
    name: 'Boulevard Pasteur & Place de France',
    icon: Building,
    category: 'Ville Nouvelle Heart',
    vibe: 'Cosmopolitan & Elegant',
    description:
      'Boulevard Pasteur is the spine of Tangier Ville Nouvelle, a broad European-style avenue lined with Art Deco buildings, French patisseries, bookshops, and upscale cafes. At its western end sits Place de France, the elegant square where the French consulate once anchored the international community. The Gran Cafe de Paris on the square has been serving coffee since 1927 and was a haunt of writers, diplomats, and spies during the International Zone era. Today the boulevard is where Tangier white-collar workers take lunch breaks, where families promenade in the evening, and where the pulse of modern Tangier beats loudest. The terrace belvedere at Place de France offers a panoramic view across the port to the Spanish coast.',
    insiderTip:
      'The Gran Cafe de Paris terrace is the classic people-watching spot (coffee from 15 MAD). Walk the boulevard in the early evening when it fills with locals. The Librairie des Colonnes bookshop, open since 1949 and frequented by Bowles and Genet, is worth a browse. Side streets south of the boulevard hide excellent patisseries selling French-Moroccan pastries from 3 MAD each.',
  },
  {
    name: 'Marshan Quarter',
    icon: Sunset,
    category: 'Clifftop Residential',
    vibe: 'Romantic & Historic',
    description:
      'West of the medina, Marshan is Tangier most atmospheric residential quarter. Perched on the cliffs above the Strait of Gibraltar, it is a neighborhood of crumbling colonial villas draped in bougainvillea, quiet residential streets, and sweeping sea views. In the early 20th century, wealthy European and American expatriates built grand houses here, many of which survive in various states of elegant decay. The Marshan terraces, a series of informal cliff-edge viewpoints, are where locals gather every evening to watch the sunset paint the Strait in shades of amber and violet. The only sounds are seagulls and the distant hum of ships. This is the Tangier that artists and writers fell in love with.',
    insiderTip:
      'Walk from the medina through Bab el-Kasbah and continue west along the clifftop road. The terraces are not signposted, just follow where locals congregate in the late afternoon. Bring a mint tea from a nearby shop. The Italian cemetery on the Marshan road is hauntingly beautiful and usually deserted. This area is perfectly safe but poorly lit at night, so visit around sunset.',
  },
  {
    name: 'Dradeb',
    icon: Users,
    category: 'Working-Class Authentic',
    vibe: 'Raw & Real',
    description:
      'Dradeb is the neighborhood most tourists never see, and that is precisely its appeal. Located south of the medina, this densely packed working-class quarter is where ordinary Tangier families live, shop, and eat. The streets are narrow and busy with vendors selling vegetables, household goods, and freshly baked bread. Small hole-in-the-wall restaurants serve generous plates of tajine for from 25 MAD and bowls of steaming harira for from 5 MAD. There are no souvenir shops, no tourist restaurants, and no touts. Visiting Dradeb gives you an honest glimpse of daily Moroccan life that the medina, increasingly curated for visitors, no longer provides.',
    insiderTip:
      'Enter from the south side of Grand Socco and walk downhill into Dradeb. The morning is best when the bread ovens are firing and the produce stalls are at their freshest. For breakfast, find a stall selling msemen with honey and butter (from 5 MAD) and a glass of fresh orange juice (from 5 MAD). The locals are friendly but speak minimal English or French, so a few Arabic words go a long way. La shukran (no thank you) and shukran (thank you) cover most situations.',
  },
  {
    name: 'Iberia Quarter',
    icon: Globe,
    category: 'Spanish Colonial Heritage',
    vibe: 'Quiet & Nostalgic',
    description:
      'Tangier Spanish heritage runs deep, and nowhere is it more visible than in the Iberia quarter, a neighborhood of Spanish-style houses with wrought-iron balconies, tiled courtyards, and facades painted in Mediterranean pastels. Spain ruled Tangier for brief periods and maintained a large community during the International Zone era. The quarter, located between the medina and Dradeb, retains a distinctly Iberian feel. You will find a Spanish church, a former Spanish school, and streets named in both Arabic and Spanish. The neighborhood is quiet and residential, a world away from the medina crowds just a few hundred meters north.',
    insiderTip:
      'Look for the Iglesia de San Francisco and the old Spanish Mission school. The balconied houses on the narrow streets around Rue d Espagne are the most photogenic. This area connects well with a walk through Dradeb, making a loop from Grand Socco through Iberia to Dradeb and back. Morning light brings out the colors of the tiled facades beautifully.',
  },
  {
    name: 'Malabata',
    icon: Waves,
    category: 'Locals Beach Quarter',
    vibe: 'Relaxed & Family-Friendly',
    description:
      'While tourists cluster on the central Tangier Beach strip near the port, locals head east to Malabata. This stretch of sandy shore along the bay is wider, cleaner, and considerably less crowded. Moroccan families come here on weekends with picnics, children play in the calm shallow waters, and young people gather for informal football matches on the sand. The promenade behind the beach has been recently renovated, and a handful of beachfront restaurants serve fresh fish at local prices rather than tourist markup. Beyond the beach, the road continues to the Malabata lighthouse and a series of small hidden coves.',
    insiderTip:
      'A petit taxi from the medina to Malabata costs from 15-20 MAD on the meter. The beach restaurants here charge from 50-70 MAD for a full fish meal versus from 100-150 MAD at the central beach restaurants. Visit on a weekday for near-empty stretches of sand. In summer, the water is warm and the bay is sheltered from Atlantic swells. For a walk, continue past the beach toward the Malabata lighthouse for cliff-edge views.',
  },
];

/* ===============================================================
   DATA: LOCAL FOOD EXPERIENCES
   =============================================================== */

const localFoodSpots = [
  {
    name: 'The Fish Market & Grilled Sardines',
    icon: UtensilsCrossed,
    category: 'Street Food & Market',
    price: 'From 15 MAD per plate',
    description:
      'The fish market near the port is where Tangier comes alive every morning. Fishermen land their catch at dawn, and the market fills with locals haggling over glistening sardines, sole, shrimp, and sea bream. The real magic happens at the small grill stalls adjacent to the market, where you can buy fish and have it grilled on the spot. A plate of grilled sardines with bread, olives, and chermoula costs from 15 MAD. A mixed fish grill with prawns and sole runs from 40 MAD. The smoke, the sizzle, and the chaos are quintessential Tangier.',
    insiderTip:
      'Arrive before 9 AM for the freshest selection. Point at the fish you want, agree on the price, and it will be grilled within minutes. Bring your own napkins. The stalls closest to the port entrance tend to be cheapest. Friday mornings are busiest. The market closes by early afternoon.',
  },
  {
    name: 'Cheap Medina Eats',
    icon: Heart,
    category: 'Local Restaurants',
    price: 'From 20-40 MAD per meal',
    description:
      'Forget the tourist restaurants with laminated menus in four languages. The real medina eating happens at tiny unnamed restaurants tucked into side alleys, identifiable by their steaming pots and plastic chairs. Around Rue d Italie and the streets south of Petit Socco, you will find places serving kefta tajine (from 25 MAD), lentil soup with bread (from 10 MAD), chicken with preserved lemons (from 30 MAD), and plates of couscous on Fridays (from 25 MAD). These are the places where local shopkeepers and workers eat lunch, and the food is honest, generous, and extremely affordable.',
    insiderTip:
      'Look for restaurants with high local turnover, meaning the food is fresh. Lunch (12-2 PM) is the best time as the daily specials are at their freshest. Expect to share tables with strangers during peak hours. Bread is always included. Tap water is generally safe in Tangier but bottled water costs from 3 MAD if you prefer. Tipping from 2-5 MAD is appreciated.',
  },
  {
    name: 'Cafe Hafa: The Locals Sunset Ritual',
    icon: Coffee,
    category: 'Iconic Local Experience',
    price: 'From 15 MAD per tea',
    description:
      'Yes, Cafe Hafa appears in every guidebook, but the difference between a tourist visit and a local experience is timing and attitude. Locals do not rush to Cafe Hafa for a quick photo and leave. They arrive in the late afternoon, claim a terrace spot, order mint tea, and simply sit for hours as the sun drops into the Atlantic and the lights of Tarifa begin to twinkle across the Strait. The ritual is about slowness, conversation, and the daily miracle of sunset over two continents. On weekday evenings, the cafe is mostly locals. Weekend evenings bring families and groups of friends.',
    insiderTip:
      'Come on a Tuesday or Wednesday evening for the most local atmosphere. The lower terraces are the best but fill up first. There is no food, just mint tea (from 15 MAD) and coffee (from 15 MAD). Cash only. Bring a light jacket as the cliff-edge gets breezy at sunset. Stay past sunset for the blue hour when the lights of Spain appear across the dark water.',
  },
  {
    name: 'Morning Msemen & Baghrir Breakfast',
    icon: Sun,
    category: 'Breakfast Ritual',
    price: 'From 5 MAD',
    description:
      'Forget the hotel breakfast buffet. The Tangier morning ritual is msemen (flaky, layered flatbread cooked on a griddle) and baghrir (spongy semolina pancakes with a thousand tiny holes). Street vendors and small breakfast shops sell them fresh off the griddle, drizzled with honey and melted butter or stuffed with cheese and herbs. Pair with a glass of fresh orange juice (from 5 MAD) or a cafe nous-nous (half coffee, half steamed milk, from 8 MAD). The stalls around Grand Socco and Dradeb are the best.',
    insiderTip:
      'The best msemen stalls have a visible griddle and a queue of locals. Avoid pre-made ones that have been sitting. Specify if you want yours with honey (b-lassel) or cheese (b-jben). A full local breakfast of 2 msemen, juice, and coffee costs from 15-20 MAD total. This is the real Tangier morning experience that no hotel can replicate.',
  },
];

/* ===============================================================
   DATA: CULTURAL & LITERARY SPOTS
   =============================================================== */

const culturalSpots = [
  {
    name: 'Tangier Literary Quarter',
    icon: BookOpen,
    category: 'Literary Heritage',
    price: 'Free (self-guided walk)',
    duration: '2-3 hours',
    description:
      'No city in North Africa has a richer literary history than Tangier. Paul Bowles arrived in 1947 and never left, writing The Sheltering Sky and translating Moroccan authors until his death in 1999. William Burroughs holed up in a room near Petit Socco and wrote much of Naked Lunch. Jack Kerouac visited and wrote about the city. Mohamed Choukri, Morocco most famous author, grew up in Tangier poverty and documented it in For Bread Alone. Tennessee Williams, Jean Genet, Truman Capote, and countless others passed through. The literary quarter is not a defined area but a trail of sites: the Itesa building where Bowles lived, the Hotel El Muniria where Burroughs wrote, Petit Socco cafes, the American Legation Museum, and the Librairie des Colonnes bookshop.',
    insiderTip:
      'Start at Librairie des Colonnes on Boulevard Pasteur, open since 1949 and the intellectual heart of expat Tangier. Walk to Petit Socco and Cafe Central where Burroughs drank. Find the Hotel El Muniria on Rue Magellan (room 9 is legendary). The American Legation Museum has a Bowles wing. End at Cafe Hafa where all the writers gathered. A self-guided literary walk takes 2-3 hours with cafe stops.',
  },
  {
    name: 'Socco Chico Evening Atmosphere',
    icon: MoonStar,
    category: 'Nightlife & Ambiance',
    price: 'From 10 MAD (mint tea)',
    duration: '1-2 hours',
    description:
      'Petit Socco (Socco Chico) transforms after dark. The daytime tourist traffic thins out, and the square fills with locals. Young men gather on the cafe terraces arguing about football, elderly men play cards and dominoes, cats weave between chairs, and the muezzin call from the nearby mosque echoes off the faded facades. The lighting is dim and atmospheric, the conversations are in Darija and Spanish, and the energy is authentically Tangier. This is the square where spies exchanged secrets, where writers found inspiration, and where the line between respectable and disreputable was always wonderfully blurred.',
    insiderTip:
      'Visit between 8-10 PM on any evening for the best atmosphere. Order mint tea (from 10 MAD) at Cafe Central or Cafe Tingis and just sit. The square is safe but keep valuables close. This experience is free beyond the cost of a drink. It is the cheapest and most authentic evening entertainment in Tangier.',
  },
  {
    name: 'Place du 9 Avril & Cinema Rif',
    icon: Landmark,
    category: 'Cultural Hub',
    price: 'From 30 MAD (film ticket)',
    duration: '1-3 hours',
    description:
      'Place du 9 Avril 1947, better known as Grand Socco, is the pivot between old and new Tangier. But the real hidden gem on the square is Cinema Rif, a restored 1930s Art Deco cinema that now serves as the Cinematheque de Tanger. It screens independent Moroccan, European, and world cinema in a beautifully restored interior. The rooftop cafe is one of the best-kept secrets in the city, offering views across the square to the Mendoubia Gardens and the medina entrance. Locals gather here for film festivals, cultural events, and simply to enjoy a quiet coffee away from the tourist flow.',
    insiderTip:
      'Check the Cinematheque de Tanger website or social media for current screenings. Film tickets cost from 30 MAD. The rooftop cafe is open even if you are not seeing a film, with coffee from 10 MAD. The Mendoubia Gardens adjacent to the square have an 800-year-old banyan tree and are a peaceful retreat. The gardens close at sunset.',
  },
  {
    name: 'Tanja Marina Bay',
    icon: Sparkles,
    category: 'Modern Development',
    price: 'Free to explore',
    duration: '1-2 hours',
    description:
      'The Tanja Marina Bay development represents the new face of Tangier. This modern waterfront complex at the former port area includes yacht berths, restaurants, cafes, a promenade, and retail spaces. It is where young Tangier comes to socialize, where couples stroll in the evening, and where the contrast between the ancient medina rising above and the sleek contemporary architecture below perfectly captures the city dual identity. The restaurants range from upscale seafood to casual cafes, and the views across the harbor to the medina walls are spectacular, especially at night when both old and new Tangier are illuminated.',
    insiderTip:
      'Visit in the evening for the best atmosphere. The restaurants are pricier than the medina (main courses from 80-150 MAD) but the setting justifies it for a special meal. The promenade is excellent for an after-dinner walk. Free parking is available but limited on weekends. The marina connects to the beach promenade heading east toward Malabata.',
  },
];

/* ===============================================================
   DATA: REAL LOCAL PRICES
   =============================================================== */

const localPrices = [
  { item: 'Petit taxi (meter, city center)', local: 'From 7-10 MAD', tourist: 'From 20-30 MAD', tip: 'Always insist on the meter. Say "compteur, afak" (meter, please).' },
  { item: 'Grilled sardines (fish market)', local: 'From 15 MAD', tourist: 'From 40-60 MAD (restaurant)', tip: 'Go to the port fish market stalls, not the medina tourist restaurants.' },
  { item: 'Mint tea', local: 'From 8-10 MAD', tourist: 'From 15-25 MAD', tip: 'Cafe Hafa is from 15 MAD (fair for the view). Avoid cafes on main tourist streets.' },
  { item: 'Tajine lunch', local: 'From 25-35 MAD', tourist: 'From 60-120 MAD', tip: 'Eat where locals eat. Look for steaming pots, plastic chairs, and no English menu.' },
  { item: 'Fresh orange juice', local: 'From 5 MAD', tourist: 'From 10-15 MAD', tip: 'Street vendors charge less than cafes. Dradeb and Grand Socco have the cheapest.' },
  { item: 'Grand taxi to Cap Spartel', local: 'From 150-200 MAD (whole car)', tourist: 'From 300-400 MAD', tip: 'Negotiate at the grand taxi stand, not with taxis that approach you at tourist sites.' },
  { item: 'Haircut (men)', local: 'From 20-30 MAD', tourist: 'From 50-80 MAD', tip: 'Any barber in Dradeb or the Ville Nouvelle side streets charges local prices.' },
  { item: 'Hammam (public)', local: 'From 15-20 MAD', tourist: 'From 100-250 MAD (spa)', tip: 'Public neighborhood hammams charge from 15 MAD. Bring your own soap and towel.' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Learn the Taxi Meter Trick', icon: Navigation, description: 'Petit taxis have meters but drivers often claim they are broken. If a driver refuses the meter, get out and try the next one. At taxi stands, competition means drivers are more likely to use the meter. The meter starts at from 1.40 MAD during the day and from 2.10 MAD at night.' },
  { tip: 'Explore Beyond the Medina', icon: Compass, description: 'The medina is wonderful but represents a tiny fraction of Tangier. The Ville Nouvelle, Marshan, Dradeb, and Malabata each have distinct characters. Budget at least one afternoon for walking neighborhoods outside the medina walls.' },
  { tip: 'Friday Is Couscous Day', icon: UtensilsCrossed, description: 'On Fridays, most local restaurants serve couscous as the daily special (from 25 MAD). This is a Moroccan tradition. The best couscous is served between 12:30 and 2 PM. Arrive early as it often runs out.' },
  { tip: 'The Evening Promenade', icon: Footprints, description: 'Between 6-9 PM, all of Tangier seems to be walking. Boulevard Pasteur, the marina promenade, and the beach corniche fill with families, couples, and groups. Join the promenade for the most authentic insight into local social life.' },
  { tip: 'Avoid the Medina Entrance Touts', icon: AlertTriangle, description: 'Self-appointed guides cluster at Bab el-Fahs (the medina entrance at Grand Socco). A polite but firm "la shukran" works. The medina is compact and you cannot truly get lost. If you want a guide, book through your hotel (from 200 MAD half day).' },
  { tip: 'Coffee Culture Is Important', icon: Coffee, description: 'Tangier cafe culture rivals Paris. A nous-nous (half espresso, half steamed milk, from 8 MAD) at a neighborhood cafe is more than a drink. It is a social ritual. Sit, watch, listen. The cafe is where Tangier reveals itself.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the hidden gems of Tangier?', answer: 'The best hidden gems include the Marshan quarter with its sunset terraces and crumbling colonial villas, the Dradeb neighborhood for authentic local life, the Iberia quarter with Spanish heritage, the fish market for grilled sardines from 15 MAD, Cinema Rif rooftop cafe, and the literary trail following Bowles, Burroughs, and Choukri through the medina and Ville Nouvelle.' },
  { question: 'What neighborhoods should I explore in Tangier?', answer: 'Beyond the medina, explore Boulevard Pasteur and Place de France for cafe culture, Marshan for sunset terraces and colonial villas, Dradeb for cheap local food and real life, the Iberia quarter for Spanish heritage, and Malabata for the local beach experience. Each has a distinct character and none feature on standard tourist itineraries.' },
  { question: 'Where do locals eat in Tangier?', answer: 'Locals eat at the fish market grill stalls near the port (sardines from 15 MAD), the unnamed restaurants along Rue d Italie (tajine from 25 MAD), breakfast msemen stalls in Dradeb (from 5 MAD), and the cheap eateries south of Petit Socco. For couscous, any local restaurant on Friday (from 25 MAD). Avoid restaurants with multi-language tourist menus.' },
  { question: 'How much does a petit taxi cost in Tangier?', answer: 'With the meter, a short ride within the city center costs from 7-10 MAD. Medina to Malabata beach from 15-20 MAD. Medina to train station from 15 MAD. Always insist on the meter by saying "compteur, afak." Night rates are 50 percent higher. Taxis at tourist sites may refuse the meter, in which case negotiate before boarding.' },
  { question: 'What is the Marshan quarter known for?', answer: 'Marshan is a residential clifftop quarter west of the medina known for crumbling colonial villas, quiet streets, and the Marshan terraces, informal cliff-edge viewpoints where locals gather at sunset. Cafe Hafa sits at its edge. The area has a romantic, melancholy atmosphere and some of the finest views in the city across the Strait of Gibraltar to Spain.' },
  { question: 'Is Tangier good for literary tourism?', answer: 'Tangier has one of the richest literary histories in the world. Paul Bowles (The Sheltering Sky), William Burroughs (Naked Lunch), Jack Kerouac, Mohamed Choukri (For Bread Alone), Tennessee Williams, Jean Genet, and Truman Capote all lived in or frequently visited the city. Key sites include the American Legation Museum, Librairie des Colonnes, Petit Socco cafes, and the Hotel El Muniria.' },
  { question: 'What is the best time to visit Tangier as a local experience?', answer: 'Spring (April-June) and autumn (September-November) offer the best balance of pleasant weather and fewer tourists, making local experiences more authentic. Ramadan is a unique experience if you respect the fasting hours. Winter is mild and very quiet. August is when Moroccan diaspora families return, making the city lively but crowded.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/tangier', icon: MapPin, title: 'Tangier City Guide', description: 'Complete guide to Tangier: accommodation, transport, and trip planning.' },
  { href: '/things-to-do-tangier', icon: Star, title: 'Things to Do in Tangier', description: 'Top 15+ attractions including Kasbah, Cap Spartel, and Hercules Caves.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to street food, the complete cuisine guide.' },
  { href: '/morocco-budget-travel', icon: Lightbulb, title: 'Morocco Budget Travel', description: 'How to travel Morocco on any budget with real prices and saving tips.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along two coastlines.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function TangierLocalGuidePage() {
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
            backgroundImage: 'url(/images/hero-tangier.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/tangier" className="hover:text-white transition-colors">
              Tangier
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Local Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Eye className="w-4 h-4" />
            Insider Local Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Tangier Like a Local
            <br className="hidden md:block" /> Hidden Gems &amp; Neighborhoods
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Beyond Cap Spartel and the Kasbah. Discover the neighborhoods, food spots, and daily
            rituals that reveal the real Tangier — the city locals love and tourists rarely see.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Real Tangier Beyond the Tourist Trail
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Every guidebook tells you to visit the Kasbah, Cap Spartel, and the Caves of Hercules.
                And you should. But the Tangier that locals know and love extends far beyond these
                postcard landmarks. It lives in the cliff-edge terraces of Marshan where neighbors
                gather silently to watch the sunset. It sizzles at the fish market where sardines cost
                from 15 MAD. It hums along Boulevard Pasteur where the evening promenade has been a
                ritual for generations.
              </p>
              <p>
                Tangier is a city of layers. The ancient medina, the French Ville Nouvelle, the Spanish
                Iberia quarter, the working-class energy of Dradeb, and the gleaming modernity of Tanja
                Marina Bay all coexist within a few square kilometers. Understanding these layers — and
                knowing which streets to wander, where to eat, and when to sit still — is what separates
                a tourist visit from a genuine experience.
              </p>
              <p>
                This guide is about the Tangier that does not appear on most itineraries. The
                neighborhoods where life happens without an audience. The food spots where a full meal
                costs less than a museum ticket. The literary ghosts that haunt Petit Socco after dark.
                The real petit taxi prices that locals pay. This is Tangier as locals live it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Neighborhoods -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tangier Neighborhoods You Should Explore
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond the medina walls, each neighborhood tells a different story about Tangier past, present,
            and future.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All neighborhoods are walkable from the medina. Petit taxis cost from 7-15 MAD on the meter.
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

      {/* -- Local Food Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Eat Like a Local in Tangier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Where locals actually eat, what they order, and what they really pay. No tourist markup, no
            laminated menus.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Prices may vary by season and location.
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

      {/* -- Cultural & Literary Spots -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture, Literature &amp; Nightlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Tangier literary ghosts, cinema culture, evening atmosphere, and the city modern
            waterfront transformation.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most cultural experiences are free or low-cost. The literary walk is entirely self-guided.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {culturalSpots.map((spot) => {
              const CultIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CultIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
                        {spot.duration && (
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {spot.duration}
                          </span>
                        )}
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

      {/* -- Real Local Prices -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Real Prices: Local vs. Tourist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What locals actually pay versus what tourists are often charged. Knowing these prices
            helps you avoid overpaying.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are approximate starting prices in MAD. Seasonal variations apply.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 p-4 bg-[var(--color-accent)]/5 font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">
                <div>Item</div>
                <div>Local Price</div>
                <div>Tourist Price</div>
                <div>How to Pay Local</div>
              </div>
              {localPrices.map((price) => (
                <div key={price.item} className="grid grid-cols-4 gap-0 p-4 border-t border-[var(--border-primary)]">
                  <div className="text-sm font-medium text-[var(--text-primary)]">{price.item}</div>
                  <div className="text-sm text-green-700 font-semibold">{price.local}</div>
                  <div className="text-sm text-red-600">{price.tourist}</div>
                  <div className="text-xs text-[var(--text-muted)]">{price.tip}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Living Like a Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical knowledge that transforms a tourist visit into a genuine local experience.
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

      {/* -- Local's Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Local&apos;s Day in Tangier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow this itinerary to experience Tangier exactly as locals do, from morning msemen to sunset at Marshan.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Dradeb Breakfast &amp; Fish Market
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Start with msemen and fresh orange juice at a Dradeb street stall (from 10 MAD for both).
                    Walk through the morning bustle of the neighborhood as bread ovens fire and produce
                    vendors set up their stalls.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Head to the fish market near the port (before 10 AM). Watch the catch being unloaded,
                    browse the stalls, and eat grilled sardines at the market grill (from 15 MAD). This is
                    the most authentic food experience in Tangier.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Midday: Ville Nouvelle &amp; Literary Walk
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Walk Boulevard Pasteur and stop at Gran Cafe de Paris for a nous-nous coffee (from 10 MAD).
                    Browse Librairie des Colonnes bookshop. Walk through the Iberia quarter to see
                    the Spanish heritage buildings.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Lunch at a local restaurant in the medina off Rue d Italie. Order the daily tajine
                    special (from 25 MAD with bread). This is where shopkeepers eat, not where tourists
                    are steered.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sunset className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Afternoon &amp; Evening: Marshan Sunset &amp; Socco Chico
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Walk through Marshan quarter to the cliff-edge terraces. Arrive 45 minutes before
                    sunset. Buy mint tea from Cafe Hafa (from 15 MAD) or simply sit at the informal
                    terraces with locals watching the light change over Spain.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    After sunset, walk back to Petit Socco for the evening atmosphere. Order mint tea
                    at Cafe Central (from 10 MAD) and watch the medina come alive after dark. Join the
                    evening promenade along Boulevard Pasteur or the marina. Estimated total day cost:
                    from 100-200 MAD per person.
                  </p>
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
            Continue Planning Your Tangier Trip
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
            Ready to Discover the Real Tangier?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Skip the tourist trail and experience Tangier as locals do. From Marshan sunset terraces
            and fish market sardines to literary quarter walks and Dradeb morning rituals, the real
            city is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tangier"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Tangier City Guide
            </Link>
            <Link
              href="/things-to-do-tangier"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Star className="w-5 h-5" />
              Things to Do
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

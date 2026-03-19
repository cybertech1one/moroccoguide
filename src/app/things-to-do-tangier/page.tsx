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
  Anchor,
  Sunset,
  Ship,
  TreesIcon,
  Mountain,
  Coffee,
  MoonStar,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Top 15+ Things to Do in Tangier 2026 | Complete Guide',
  description:
    'Discover the best things to do in Tangier in 2026. Kasbah Museum, Cap Spartel, Hercules Caves, medina walks, Cafe Hafa, street food tours, Asilah day trips, ferry to Spain, and more. Prices in MAD and insider tips.',
  keywords: [
    'things to do in Tangier',
    'Tangier attractions',
    'what to do in Tangier',
    'Tangier activities',
    'Tangier sightseeing',
    'Tangier medina',
    'Kasbah Museum Tangier',
    'Cap Spartel',
    'Hercules Caves Tangier',
    'Grand Socco Tangier',
    'Petit Socco Tangier',
    'Cafe Hafa Tangier',
    'Tangier beach',
    'Tangier to Asilah day trip',
    'American Legation Museum Tangier',
    'Tangier street food',
    'Tangier nightlife',
    'Tangier ferry to Spain',
    'Rmilat Park Tangier',
    'Tangier new marina',
    'Tangier 2026',
    'Tangier travel guide',
    'best Tangier experiences',
  ],
  openGraph: {
    title: 'Top 15+ Things to Do in Tangier 2026 | Complete Guide',
    description:
      'The complete guide to Tangier activities and experiences. Kasbah Museum, Cap Spartel, Hercules Caves, medina exploration, street food, day trips to Asilah, and nightlife with prices in MAD.',
    url: `${BASE_URL}/things-to-do-tangier`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tangier.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Tangier medina and port overlooking the Strait of Gibraltar with the Mediterranean and Atlantic meeting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 15+ Things to Do in Tangier 2026',
    description:
      'Kasbah Museum, Cap Spartel, Hercules Caves, medina walks, Cafe Hafa, street food, Asilah day trips, ferry to Spain, and nightlife. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-tangier.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-tangier` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-tangier`,
  name: 'Top 15+ Things to Do in Tangier 2026 | Complete Guide',
  description:
    'Discover the best things to do in Tangier in 2026. From the Kasbah Museum and Hercules Caves to street food tours, Cafe Hafa sunsets, and ferries to Spain.',
  url: `${BASE_URL}/things-to-do-tangier`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/things-to-do-tangier`,
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
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-tangier` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the top things to do in Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'The top things to do include visiting the Kasbah Museum (from 20 MAD), exploring Cap Spartel lighthouse and the Hercules Caves (from 10 MAD), walking the medina (free), visiting the American Legation Museum (from 20 MAD), people-watching at Grand Socco and Petit Socco, Tangier Beach, a day trip to Asilah (from 25 MAD by train), sunset at Cafe Hafa, a street food tour, Rmilat Park, the new marina, and experiencing the nightlife.' } },
    { '@type': 'Question', name: 'How many days do you need in Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three days is ideal. Day 1: medina, Kasbah Museum, Grand and Petit Socco, American Legation Museum. Day 2: Cap Spartel, Hercules Caves, Tangier Beach, Cafe Hafa sunset. Day 3: day trip to Asilah or explore the new marina, Rmilat Park, street food tour, and nightlife. One day allows the medina, Kasbah, and Cafe Hafa.' } },
    { '@type': 'Question', name: 'Can you take a ferry from Tangier to Spain?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, ferries run daily from Tangier Ville port and Tanger Med port to Tarifa and Algeciras in Spain. The Tangier Ville to Tarifa fast ferry takes 35-60 minutes and costs from 350 MAD one way. Tanger Med to Algeciras takes about 1 hour. Book in advance during summer and holidays.' } },
    { '@type': 'Question', name: 'Is Tangier safe for tourists?', acceptedAnswer: { '@type': 'Answer', text: 'Tangier is generally safe for tourists. The city has undergone major redevelopment since 2010 with improved infrastructure, policing, and tourism facilities. Standard precautions apply: watch for pickpockets in crowded areas, use official taxis, and be cautious in the medina at night. The tourist areas including the Kasbah, Grand Socco, and beach promenade are well-patrolled.' } },
    { '@type': 'Question', name: 'What is the best time to visit Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'April to June and September to November offer the best weather with warm temperatures (20-28 degrees) and fewer crowds. Summer (July-August) is hot and busy with Moroccan and European tourists. Winter is mild but rainy. The Tanjazz Festival in September and the Mediterranean Film Festival in November are cultural highlights.' } },
    { '@type': 'Question', name: 'Is Tangier worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Tangier has been transformed in recent years with a stunning new marina, renovated medina, excellent restaurants, and improved transport links. Its unique position where the Atlantic meets the Mediterranean, its literary and artistic heritage (Burroughs, Bowles, Matisse), and its role as a gateway between Africa and Europe make it unlike any other Moroccan city.' } },
  ],
};

/* ===============================================================
   DATA: MEDINA & HISTORICAL SIGHTS
   =============================================================== */

const medinaAttractions = [
  {
    name: 'Kasbah Museum (Dar el-Makhzen)',
    icon: Landmark,
    category: 'Museum & Heritage',
    price: 'From 20 MAD',
    duration: '1-2 hours',
    bestTime: 'Morning (before 11 AM)',
    description:
      'The former sultan palace at the highest point of the medina houses the Kasbah Museum of Mediterranean Cultures. Built in the 17th century by Sultan Moulay Ismail, the palace features a stunning central courtyard with carved stucco, zellige tilework, and painted cedar ceilings. Collections span Phoenician, Roman, and Islamic artifacts from the Tangier region, including a remarkable Roman mosaic of Venus. The Andalusian garden behind the palace offers sweeping views across the Strait of Gibraltar to Spain.',
    insiderTip:
      'Visit the garden terrace behind the museum for one of the finest views in all of Morocco. On clear days you can see the Spanish coast just 14 km away. The museum is small enough to enjoy in an hour. Combined with a Kasbah walk, budget 2 hours total.',
  },
  {
    name: 'Tangier Medina Walk',
    icon: Globe,
    category: 'Cultural Heritage',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The Tangier medina is one of the most atmospheric in Morocco, its narrow whitewashed alleys climbing steeply from the port to the Kasbah. Unlike the orderly grid of Essaouira or the overwhelming maze of Fes, Tangier medina has a distinctly cosmopolitan character — a legacy of its years as an International Zone (1923-1956) when it attracted writers, artists, spies, and bohemians from around the world. Explore painted doorways, hidden riads, and tiny squares where cafe tables spill across the cobblestones.',
    insiderTip:
      'Enter through Bab el-Fahs at Grand Socco and climb uphill toward the Kasbah. The medina is compact and relatively easy to navigate. Rue des Almohades and Rue de la Kasbah are the main arteries. Allow yourself to wander side alleys — the unexpected views over rooftops to the sea are the reward.',
  },
  {
    name: 'American Legation Museum',
    icon: Landmark,
    category: 'Historical Museum',
    price: 'From 20 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'The first American public property outside the United States, this 1821 legation building in the medina commemorates Morocco being the first country to recognize American independence in 1777. Now a museum, it houses a fascinating collection of paintings, maps, and letters documenting the centuries-old Morocco-US relationship. Highlights include paintings by Scottish-Moroccan artist James McBey, a letter from George Washington to Sultan Mohammed III, and a gallery of Paul Bowles memorabilia.',
    insiderTip:
      'This hidden gem is overlooked by most tourists. The building itself — a traditional Moroccan palace with courtyard and fountains — is as interesting as the collection. The staff are knowledgeable and happy to share stories. Visit on a weekday morning when you may have it to yourself.',
  },
  {
    name: 'Grand Socco (Place du 9 Avril)',
    icon: Eye,
    category: 'Public Square',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late morning or evening',
    description:
      'The pulsing heart of Tangier where the medina meets the new city. This circular plaza, officially named Place du 9 Avril 1947 (commemorating a landmark speech by Sultan Mohammed V), is ringed by cafes, the whitewashed Cinema Rif, and the entrance to the Mendoubia Gardens. Berber women in traditional striped skirts sell produce, men debate over mint tea, and the energy is quintessentially Tangier — a blend of old and new, local and international.',
    insiderTip:
      'Grab a table at Cafe Tingis or Gran Cafe de Paris on the edge of the square for prime people-watching. The Mendoubia Gardens adjacent are a peaceful retreat with an 800-year-old banyan tree. In the evening, the square fills with locals promenading — the best free show in Tangier.',
  },
  {
    name: 'Petit Socco (Souk Dakhil)',
    icon: Coffee,
    category: 'Historic Square',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning or late afternoon',
    description:
      'This tiny square deep in the medina was once the most notorious spot in the international zone — a hub of intrigue, opium dens, and literary excess. William Burroughs, Jack Kerouac, Tennessee Williams, and Paul Bowles all frequented its cafes. Today it is considerably calmer but retains a bohemian atmosphere. Faded colonial-era facades surround the square, and the cafe terraces are perfect for lingering over mint tea and watching medina life unfold.',
    insiderTip:
      'Cafe Central on the square is where Burroughs reputedly wrote parts of "Naked Lunch." Order a mint tea (from 10 MAD) and imagine the 1950s when this tiny plaza was the center of the literary world. The morning light here, filtering between the buildings, is beautiful for photography.',
  },
];

/* ===============================================================
   DATA: NATURE & LANDMARKS
   =============================================================== */

const natureLandmarks = [
  {
    name: 'Cap Spartel Lighthouse',
    icon: Mountain,
    category: 'Natural Landmark',
    price: 'Free (exterior) / From 20 MAD (lighthouse grounds)',
    duration: '1-1.5 hours',
    description:
      'Standing at Cap Spartel is standing at the northwestern tip of Africa, where the Atlantic Ocean meets the Mediterranean Sea. The dramatic headland, crowned by a striped 19th-century lighthouse built in 1864 by Sultan Mohammed IV, offers panoramic views of the two colliding bodies of water. Below, rugged cliffs plunge into churning surf. On clear days, the Spanish coast and the Rock of Gibraltar are visible.',
    insiderTip:
      'Combine Cap Spartel with the Hercules Caves — they are only 3 km apart. Hire a grand taxi from Tangier city center (from 200 MAD return for both sites, negotiate). Visit in the late afternoon for the best golden light on the cliffs and to catch sunset. Bring a jacket — the wind at the cape is fierce.',
  },
  {
    name: 'Caves of Hercules (Grottes d\'Hercule)',
    icon: Compass,
    category: 'Natural Wonder',
    price: 'From 10 MAD',
    duration: '30-45 minutes',
    description:
      'These dramatic sea caves, 14 km west of Tangier, are steeped in Greek mythology — Hercules supposedly rested here after separating Africa from Europe to create the Strait of Gibraltar. The highlight is the cave opening facing the Atlantic, whose shape uncannily resembles the map of Africa (best seen from inside looking out). Phoenician-era millstone quarrying carved the interior into surreal honeycomb chambers. The crashing waves below and the interplay of light and stone make this hauntingly beautiful.',
    insiderTip:
      'Arrive early to avoid tour groups. The "Africa-shaped" opening photographs best in the morning when the sun illuminates the Atlantic beyond. Watch your step — the rocks inside are slippery. Vendors outside sell fossils and minerals (from 20 MAD), but negotiate hard. Visit at low tide for the most dramatic cave floor.',
  },
  {
    name: 'Rmilat Park (Perdicaris Park)',
    icon: TreesIcon,
    category: 'Nature & Relaxation',
    price: 'Free',
    duration: '1-2 hours',
    description:
      'A sprawling forested park on the hillside above the sea, Rmilat Park is Tangier best-kept natural secret. Named after Ion Perdicaris (whose 1904 kidnapping by Raisuli sparked an international incident), the park features eucalyptus and pine forests, walking trails, cliff-edge viewpoints, and peaceful picnic areas. It connects to the coastal road leading to Cap Spartel and offers a welcome escape from the medina bustle.',
    insiderTip:
      'Perfect for a morning jog or afternoon walk. The trails along the cliff edge offer stunning views of the Strait of Gibraltar. Bring a picnic — there are shaded areas with tables. Combine with a trip to Cap Spartel and Hercules Caves for a full nature day. Quiet on weekdays, lively with local families on weekends.',
  },
];

/* ===============================================================
   DATA: BEACH & WATERFRONT
   =============================================================== */

const beachActivities = [
  {
    name: 'Tangier City Beach',
    icon: Waves,
    category: 'Beach & Leisure',
    price: 'Free (sunbed from 30 MAD)',
    duration: '2-4 hours',
    description:
      'The sweeping sandy beach curves along Tangier Bay from the port to Malabata, with the blue Mediterranean on one side and the city skyline rising behind. Once rundown, the beach promenade has been beautifully renovated with wide walkways, palm trees, and modern beach clubs. The waters are calm and warm in summer, ideal for swimming. Beach cafes and restaurants line the corniche, and the views across the Strait to Spain are ever-present.',
    insiderTip:
      'The beach is best June to September when the water is warmest (21-24 degrees). The western end near the port is busiest — head toward Malabata for more space. Beach clubs rent sunbeds and umbrellas from 30-50 MAD. For dinner with a view, the restaurants along the eastern corniche offer fresh seafood overlooking the bay.',
  },
  {
    name: 'Tangier Marina (Port de Plaisance)',
    icon: Anchor,
    category: 'Waterfront & Dining',
    price: 'Free to explore',
    duration: '1-2 hours',
    description:
      'The gleaming new marina is the centerpiece of Tangier modern transformation. Opened as part of the city major redevelopment, it features hundreds of yacht berths, waterfront restaurants, cafes, shops, and a pedestrian promenade. The contrast between the ancient medina rising above and the contemporary marina below perfectly captures modern Tangier — a city that honors its past while racing toward the future.',
    insiderTip:
      'The marina promenade is ideal for an evening stroll. Restaurants here are pricier than the medina but the waterfront setting is worth it for a special dinner. The terrace of Le Saveur du Poisson (technically just outside the marina) is legendary for its multi-course fish feast. Sunset drinks at the marina cafes are a highlight.',
  },
  {
    name: 'Ferry to Spain (Tangier-Tarifa)',
    icon: Ship,
    category: 'Cross-Strait Experience',
    price: 'From 350 MAD (one-way)',
    duration: '35-60 minutes (crossing)',
    description:
      'Tangier is the gateway between Africa and Europe, and taking the ferry across the Strait of Gibraltar to Tarifa, Spain is an unforgettable experience. The fast ferry from Tangier Ville port takes just 35-60 minutes, with views of the Strait, the Rif Mountains receding, and the Spanish coast approaching. It is entirely possible to do a day trip to Tarifa or continue to other Spanish cities. The return trip at sunset, with the Moroccan coast glowing amber, is magical.',
    insiderTip:
      'Book with FRS or Inter Shipping (from 350 MAD one-way, from 600 MAD return). Buy tickets online in advance during summer — ferries fill up. Bring your passport. The Tangier Ville port is walking distance from the medina. For cars, use Tanger Med port (45 km east). Tarifa is a beautiful town worth exploring for a few hours.',
  },
];

/* ===============================================================
   DATA: FOOD & CULTURE
   =============================================================== */

const foodCultureExperiences = [
  {
    name: 'Cafe Hafa',
    icon: Coffee,
    category: 'Iconic Cafe & Views',
    price: 'From 15 MAD (mint tea)',
    duration: '1-2 hours',
    description:
      'Perched on the cliff edge overlooking the Strait of Gibraltar, Cafe Hafa has been Tangier most legendary cafe since 1921. The Rolling Stones, the Beatles, Paul Bowles, Tennessee Williams, and William Burroughs all sat on its whitewashed terraces sipping mint tea. The cafe cascades down the hillside in a series of tiered terraces, each offering unobstructed views of the sea and the Spanish coast beyond. There is no food menu — just mint tea and the best view in Tangier.',
    insiderTip:
      'Arrive 45 minutes before sunset to secure a lower terrace seat — these have the best unobstructed views. The cafe serves only mint tea (from 15 MAD) and coffee (from 15 MAD). It is cash only. The terraces below are quieter; the upper terrace near the entrance gets crowded. Weekday mornings are the most peaceful time.',
  },
  {
    name: 'Street Food Tour',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 50-150 MAD (self-guided) / From 250 MAD (guided tour)',
    duration: '2-3 hours',
    description:
      'Tangier street food reflects its position between two continents. The medina and Grand Socco area overflow with food stalls: freshly fried sardines (from 10 MAD), msemen flatbread stuffed with honey or meat (from 5 MAD), bowls of harira soup (from 10 MAD), bocadillos (Spanish-style sandwiches, from 15 MAD), and the Tangier specialty of battered and fried seafood. Fresh-squeezed orange juice vendors line every corner (from 5-10 MAD).',
    insiderTip:
      'Start at Grand Socco where Berber women sell seasonal produce. Head into the medina via Rue es-Siaghine for spice stalls and bakeries. The fish market near the port serves the freshest fried catch. For the best bocadillos, try the stalls near Petit Socco. Avoid eating at places without visible turnover. A guided food tour (from 250 MAD) with a local reveals hidden spots.',
  },
  {
    name: 'Day Trip to Asilah',
    icon: Compass,
    category: 'Coastal Day Trip',
    price: 'From 25 MAD (train) / From 30 MAD (grand taxi)',
    duration: 'Full day',
    description:
      'The whitewashed coastal town of Asilah, 46 km south of Tangier, is one of the most photogenic places in Morocco. Its Portuguese-era ramparts frame a medina painted with vibrant murals that change every summer during the Asilah Arts Festival. The town beach is clean and calm, the seafood restaurants are excellent, and the pace is wonderfully slow. The contrast to Tangier bustle makes Asilah a perfect day escape.',
    insiderTip:
      'Take the ONCF train from Tangier Ville station (from 25 MAD, 45 minutes, multiple daily). Grand taxis cost from 30 MAD shared. Wander the medina murals, walk the Portuguese ramparts, and lunch on fresh fish at a harbor restaurant (from 60 MAD). The annual arts festival in July transforms the medina into an open-air gallery. Return by late afternoon for Cafe Hafa sunset.',
  },
  {
    name: 'Tangier Nightlife',
    icon: MoonStar,
    category: 'Evening Entertainment',
    price: 'From 50 MAD (drinks)',
    duration: '2-4 hours',
    description:
      'Tangier has the most vibrant nightlife of any Moroccan city outside Marrakech. The city cosmopolitan heritage means bars, lounges, and clubs are plentiful and welcoming. The scene ranges from the atmospheric El Morocco Club in the Kasbah (live jazz, art-deco interiors) to rooftop bars overlooking the Strait, beachfront lounges, and the legendary late-night clubs along the waterfront. The mix of Moroccan, European, and international crowds creates an energy unique to Tangier.',
    insiderTip:
      'Start with sunset drinks at Cafe Hafa or a marina terrace. Move to El Morocco Club for cocktails and jazz in a stunning setting (from 80 MAD for cocktails). For late nights, the beach clubs and bars along the corniche stay open late in summer. Hotel Nord-Pinus rooftop bar is atmospheric. Tangier is more liberal than other Moroccan cities but dress smartly for upscale venues.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Walk the Medina for Free', icon: Footprints, description: 'The medina, Grand Socco, Petit Socco, Kasbah exterior, beach, and marina promenade are all free. The best of Tangier — atmosphere, views, architecture — costs nothing.', savings: 'Free — the best of Tangier' },
  { tip: 'Grand Taxi to Cap Spartel', icon: MapPin, description: 'A shared grand taxi to Cap Spartel and Hercules Caves costs from 200 MAD return for the car (split between passengers). Organized tours charge from 400-600 MAD per person.', savings: 'Save from 200-400 MAD vs. tour' },
  { tip: 'Street Food Over Restaurants', icon: UtensilsCrossed, description: 'Street food in the medina costs from 10-30 MAD per item. A full meal of fried fish, msemen, and juice for from 30-50 MAD. Restaurants charge from 80-200 MAD for similar food.', savings: 'Save from 50-150 MAD per meal' },
  { tip: 'Train to Asilah, Not a Tour', icon: Compass, description: 'The ONCF train to Asilah costs from 25 MAD vs. organized day tours at from 400-800 MAD. The train ride along the coast is scenic and easy.', savings: 'Save from 375-775 MAD vs. tour' },
  { tip: 'Cafe Hafa Instead of Rooftop Bars', icon: Coffee, description: 'Mint tea at Cafe Hafa costs from 15 MAD with the best view in Tangier. Rooftop bar cocktails run from 80-150 MAD for a comparable (or lesser) view.', savings: 'Save from 65-135 MAD per drink' },
  { tip: 'Public Beach Over Beach Clubs', icon: Waves, description: 'The public beach is free with excellent swimming. Beach club sunbed rental from 30-100 MAD. Bring your own towel and buy drinks from mobile vendors (from 5 MAD).', savings: 'Save from 25-95 MAD per visit' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'The Wind at Cap Spartel', icon: Wind, description: 'The cape is exposed and windy year-round. Bring a windbreaker even on warm days. The Levante (east wind) can be fierce. Secure hats and loose items.' },
  { tip: 'Navigate the Medina Confidently', icon: CheckCircle, description: 'Tangier medina is compact and manageable. If lost, head uphill for the Kasbah or downhill for the port. Ignore touts offering to "show you the way" — politely decline and keep walking.' },
  { tip: 'Best Photography Light', icon: Camera, description: 'The Kasbah and medina glow in morning light. Cap Spartel and Cafe Hafa are best at sunset. The port and marina photograph beautifully at blue hour. Bring a lens cloth — sea spray is constant.' },
  { tip: 'Tangier Is a Gateway City', icon: Ship, description: 'Many travelers pass through Tangier quickly en route to or from Spain. Give it at least 2 full days. The new Tangier has world-class dining, art galleries, and a cafe culture that rewards lingering.' },
  { tip: 'Watch for Unofficial Guides', icon: AlertTriangle, description: 'Self-appointed guides approach tourists in the medina. A firm "la shukran" (no thank you) works. If you want a guide, hire an official one through your hotel (from 200 MAD for a half-day).' },
  { tip: 'Best Sunset Spots', icon: Sunset, description: 'Top viewpoints: Cafe Hafa terraces, Cap Spartel cliffs, the Kasbah ramparts, the marina promenade, and the beach toward Malabata. Arrive 30-40 minutes before sunset for the best seats.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the top things to do in Tangier?', answer: 'The top things to do include visiting the Kasbah Museum (from 20 MAD), exploring Cap Spartel and the Hercules Caves (from 10 MAD), walking the medina (free), the American Legation Museum (from 20 MAD), Grand Socco and Petit Socco (free), Tangier Beach (free), Cafe Hafa sunset (from 15 MAD tea), a street food tour (from 50 MAD self-guided), Rmilat Park (free), the new marina (free), a day trip to Asilah (from 25 MAD train), and experiencing the nightlife.' },
  { question: 'How many days do you need in Tangier?', answer: 'Two to three days is ideal. Day 1: medina, Kasbah Museum, Grand and Petit Socco, American Legation Museum, Cafe Hafa sunset. Day 2: Cap Spartel, Hercules Caves, Tangier Beach, marina, nightlife. Day 3: day trip to Asilah or Rmilat Park, street food tour, and final medina shopping. One day allows the medina, Kasbah, and Cafe Hafa.' },
  { question: 'Can you take a ferry from Tangier to Spain?', answer: 'Yes, fast ferries run daily from Tangier Ville port to Tarifa, Spain (35-60 minutes, from 350 MAD one-way). Tanger Med port serves Algeciras (1 hour). Book in advance during summer. A day trip to Tarifa is entirely feasible. Bring your passport.' },
  { question: 'Is Tangier safe for tourists?', answer: 'Tangier is generally safe. Major redevelopment since 2010 has improved infrastructure and security. Standard precautions apply: watch for pickpockets in crowded medina areas, use official taxis (insist on the meter), and be cautious at night in quiet medina alleys. Tourist areas are well-patrolled.' },
  { question: 'What is the best time to visit Tangier?', answer: 'April to June and September to November offer the best weather (20-28 degrees) and moderate crowds. July-August is hot and busy. Winter is mild (12-17 degrees) with some rain. The Tanjazz music festival in September is a cultural highlight.' },
  { question: 'How do I get from Tangier airport to the city?', answer: 'Tangier Ibn Battouta Airport is 15 km from the city center. Grand taxis cost from 150-200 MAD to the medina (negotiate before boarding). The airport bus costs from 30 MAD. Some hotels offer airport transfers. The new Al Boraq high-speed train connects Tangier to Casablanca and Rabat from Tangier Ville station.' },
  { question: 'Is Tangier worth visiting?', answer: 'Absolutely. Tangier has been transformed with a stunning marina, renovated medina, excellent dining, and improved transport. Its unique position where two oceans and two continents meet, its literary heritage (Burroughs, Bowles, Kerouac), and its role as a cosmopolitan gateway make it unlike any other Moroccan city. Give it at least 2 days.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/tangier', icon: MapPin, title: 'Tangier City Guide', description: 'Complete guide to Tangier: neighborhoods, transport, accommodation, and planning.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to seafood and street food — the complete cuisine guide.' },
  { href: '/morocco-3-days', icon: Calendar, title: 'Morocco in 3 Days', description: 'How to make the most of a short trip to Morocco with sample itineraries.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Morocco Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function ThingsToDoTangierPage() {
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
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top Things to Do
            <br className="hidden md:block" /> in Tangier
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From ancient Kasbah walls and mythical caves to cliff-edge cafes and ferries to Spain.
            Your complete 2026 guide to Morocco&apos;s gateway between two continents, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Tangier: Where Africa Meets Europe
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Tangier sits at the edge of the known world — the northwestern tip of Africa, where the
                Atlantic crashes into the Mediterranean and the mountains of Spain shimmer just 14 km across
                the Strait of Gibraltar. For centuries this position made it one of the most coveted cities
                on Earth, fought over by Phoenicians, Romans, Portuguese, British, and Moroccans. In the
                20th century it became an International Zone, a free port where anything was possible, drawing
                writers like Paul Bowles, William Burroughs, and Jack Kerouac alongside spies, smugglers,
                and the international elite.
              </p>
              <p>
                Today, Tangier is experiencing a remarkable renaissance. Billions of dirhams in investment
                have produced a gleaming new marina, a high-speed rail link to Casablanca, renovated medina
                streets, and a thriving restaurant and nightlife scene. Yet the old Tangier endures — in the
                labyrinthine medina, the cliff-edge terraces of Cafe Hafa, the mythical Caves of Hercules,
                and the atmospheric Petit Socco where Beat Generation ghosts still linger.
              </p>
              <p>
                This guide covers 15+ of the best things to do in Tangier, organized by category: medina
                sights, nature and landmarks, beach and waterfront, food and culture, day trips, and
                nightlife. Each includes real 2026 prices in MAD, practical logistics, and insider tips
                from people who know this city intimately.
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
            Short on time? These are the ten experiences that define a visit to Tangier.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Kasbah Museum & Ramparts', price: 'From 20 MAD', time: '1-2 hours', category: 'Museum' },
              { rank: 2, name: 'Cap Spartel Lighthouse', price: 'From 20 MAD', time: '1-1.5 hours', category: 'Nature' },
              { rank: 3, name: 'Caves of Hercules', price: 'From 10 MAD', time: '30-45 min', category: 'Natural Wonder' },
              { rank: 4, name: 'Cafe Hafa Sunset', price: 'From 15 MAD', time: '1-2 hours', category: 'Iconic Cafe' },
              { rank: 5, name: 'Medina & Petit Socco', price: 'Free', time: '2-4 hours', category: 'Cultural Heritage' },
              { rank: 6, name: 'Street Food Tour', price: 'From 50 MAD', time: '2-3 hours', category: 'Culinary' },
              { rank: 7, name: 'Day Trip to Asilah', price: 'From 25 MAD', time: 'Full day', category: 'Day Trip' },
              { rank: 8, name: 'American Legation Museum', price: 'From 20 MAD', time: '45 min - 1 hour', category: 'Historical' },
              { rank: 9, name: 'Tangier Marina & Waterfront', price: 'Free', time: '1-2 hours', category: 'Waterfront' },
              { rank: 10, name: 'Ferry to Spain (Tarifa)', price: 'From 350 MAD', time: '35-60 min crossing', category: 'Adventure' },
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

      {/* -- Medina & Historical Sights -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina &amp; Historical Sights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Tangier medina is steeped in centuries of history, from Phoenician traders to the International Zone bohemians.
            These five landmarks define its unique character.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {medinaAttractions.map((attraction) => {
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

      {/* -- Nature & Landmarks -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nature &amp; Landmarks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond the medina, Tangier surroundings offer dramatic natural wonders at the meeting point
            of two oceans and two continents.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Cap Spartel and the Hercules Caves are 14 km west of the city center. Combine both in a single trip.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {natureLandmarks.map((item) => {
              const NatIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <NatIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Beach & Waterfront -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach &amp; Waterfront
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Tangier Bay offers sandy beaches, a modern marina, and the remarkable opportunity to take a
            ferry across the Strait of Gibraltar to Europe.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Beach season runs June to September. The marina and waterfront promenade are enjoyable year-round.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {beachActivities.map((item) => {
              const BeachIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BeachIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Food, Culture & Experiences -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food, Culture &amp; Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From legendary cliff-edge cafes and medina street food to day trips along the coast and
            Morocco most cosmopolitan nightlife scene.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Tangier food reflects its position between two continents — expect Moroccan, Spanish, and French influences.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodCultureExperiences.map((item) => {
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
            Budget Tips for Tangier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies to stretch your budget further without missing any of the best experiences.
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
            Insider Tips for Tangier
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
            Sample 2-Day Tangier Itinerary
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
                  Day 1: Medina, Kasbah &amp; Cafe Hafa Sunset
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at Grand Socco for coffee and people-watching. Enter the medina via Bab el-Fahs
                      and climb through the alleys to the Kasbah Museum (from 20 MAD). Explore the museum
                      garden with its views to Spain. Walk the Kasbah ramparts. Visit the American Legation
                      Museum (from 20 MAD) on the way back down.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Street food lunch in the medina — fried sardines and msemen (from 30 MAD). Wander to
                      Petit Socco for mint tea at Cafe Central (from 10 MAD). Browse the medina souks for
                      spices, leather goods, and antiques. Walk down to the new marina for a waterfront stroll.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset at Cafe Hafa (from 15 MAD mint tea) — arrive 45 minutes early for the best
                      terrace seat. Dinner at a medina restaurant or the marina (from 80-150 MAD). Drinks
                      at El Morocco Club or a rooftop bar. Estimated Day 1 cost: from 200-400 MAD.
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
                  Day 2: Cap Spartel, Caves &amp; Beach
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Hire a grand taxi (from 200 MAD return for the car) to Cap Spartel. Walk the
                      lighthouse grounds and take in the views where two oceans meet. Continue to the
                      Caves of Hercules (from 10 MAD) — photograph the Africa-shaped opening. Optionally
                      stop at Rmilat Park for a forest walk on the return.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Spend the afternoon at Tangier Beach — swim, relax, or rent a sunbed (from 30 MAD).
                      Lunch at a corniche restaurant with fresh seafood overlooking the bay (from 80 MAD).
                      Alternatively, take the train to Asilah (from 25 MAD) for a half-day of art murals and
                      coastal charm.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Final street food tour through the medina (from 50 MAD). Farewell dinner at the marina
                      or a medina restaurant (from 100 MAD). Experience Tangier nightlife — rooftop bars,
                      live jazz, or waterfront lounges (from 50 MAD drinks). Estimated Day 2 cost: from 350-700 MAD.
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 400-700 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Street food, free medina walks, public beach, shared taxis</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-2,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Cap Spartel taxi, restaurant meals, Asilah day trip, nightlife</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 2,500-4,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private tours, ferry to Spain, fine dining, upscale nightlife</p>
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
            Ready to Explore Tangier?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the ancient Kasbah and mythical Hercules Caves to cliff-edge mint tea and ferries to Spain,
            Tangier offers experiences unlike anywhere else in Morocco. Start planning your trip today.
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
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
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

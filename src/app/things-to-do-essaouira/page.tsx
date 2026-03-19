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
  Palette,
  Bath,
  Eye,
  Waves,
  Anchor,
  Sunset,
  Fish,
} from 'lucide-react';

/* ── CONSTANTS ── */

const BASE_URL = 'https://citytoursmorocco.com';

/* ── SEO METADATA ── */

export const metadata: Metadata = {
  title: 'Top 15+ Things to Do in Essaouira 2026 | Complete Guide',
  description:
    'Discover the best things to do in Essaouira in 2026. Medina walks, Skala de la Ville, surfing, Gnaoua music, argan oil cooperatives, camel rides, cooking classes, and more. Prices in MAD and insider tips.',
  keywords: [
    'things to do in Essaouira',
    'Essaouira attractions',
    'what to do in Essaouira',
    'Essaouira activities',
    'Essaouira sightseeing',
    'Essaouira medina',
    'Skala de la Ville',
    'Essaouira surfing',
    'Essaouira windsurfing',
    'Gnaoua music Essaouira',
    'Essaouira fishing port',
    'argan oil cooperative',
    'Essaouira camel ride',
    'Essaouira cooking class',
    'Diabat ruins',
    'Game of Thrones Essaouira',
    'Sidi Kaouki day trip',
    'Essaouira beach',
    'Essaouira art galleries',
    'Essaouira hammam',
    'Essaouira 2026',
    'Essaouira travel guide',
    'best Essaouira experiences',
  ],
  openGraph: {
    title: 'Top 15+ Things to Do in Essaouira 2026 | Complete Guide',
    description:
      'The complete guide to Essaouira activities and experiences. Surfing, medina exploration, Gnaoua music, art galleries, cooking classes, and day trips with prices in MAD.',
    url: `${BASE_URL}/things-to-do-essaouira`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Essaouira medina and ramparts overlooking the Atlantic Ocean with fishing boats in the harbor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 15+ Things to Do in Essaouira 2026',
    description:
      'Surfing, Skala ramparts, Gnaoua music, argan cooperatives, camel beach rides, cooking classes, and more. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-essaouira.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-essaouira` },
};

/* ── SECTION ── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-essaouira`,
  name: 'Top 15+ Things to Do in Essaouira 2026 | Complete Guide',
  description:
    'Discover the best things to do in Essaouira in 2026. From surfing and Gnaoua music to argan cooperatives, camel rides, and cooking classes.',
  url: `${BASE_URL}/things-to-do-essaouira`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/things-to-do-essaouira`,
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
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-essaouira` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the top things to do in Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'The top things to do include walking the Skala de la Ville ramparts, exploring the UNESCO medina, visiting the fishing port at dawn, surfing or windsurfing, experiencing Gnaoua music, touring an argan oil cooperative, camel beach rides, cooking classes, art galleries, and sunset at Place Moulay Hassan.' } },
    { '@type': 'Question', name: 'How many days do you need in Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three days is ideal. Day 1: medina, Skala ramparts, fishing port, and Place Moulay Hassan. Day 2: surfing or windsurfing, argan cooperative, and cooking class. Day 3: camel ride, Diabat ruins, Sidi Kaouki day trip. With one day, focus on the medina, ramparts, port, and sunset.' } },
    { '@type': 'Question', name: 'Is Essaouira good for surfing?', acceptedAnswer: { '@type': 'Answer', text: 'Essaouira is one of the best wind and wave sports destinations in Morocco. Consistent trade winds make it world-class for windsurfing and kitesurfing April to September. Surfing is best October to March. Sidi Kaouki, 25 km south, offers sheltered breaks for beginners.' } },
    { '@type': 'Question', name: 'What is the best time to visit Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'April to June and September to October offer pleasant temperatures (20-26 degrees) and moderate wind. Summer is peak windsurfing but very windy. Winter is mild with fewer tourists. The Gnaoua World Music Festival takes place in June.' } },
    { '@type': 'Question', name: 'Is Essaouira expensive?', acceptedAnswer: { '@type': 'Answer', text: 'Essaouira is very affordable. Grilled fish at the port from 40-80 MAD, surf lessons from 200 MAD, camel rides from 200 MAD. Budget travelers enjoy it on from 250-400 MAD per day. Mid-range travelers spend from 600-1,200 MAD per day including riad stay.' } },
    { '@type': 'Question', name: 'What is Gnaoua music?', acceptedAnswer: { '@type': 'Answer', text: 'Gnaoua is a mystical music tradition blending sub-Saharan African spiritual practices with Sufi Islam. Essaouira is its heartland. The guembri (bass lute), qraqeb (iron castanets), and call-and-response chanting create trance-like states. The Gnaoua World Music Festival each June draws hundreds of thousands of visitors.' } },
  ],
};

/* ── SECTION ── */

const medinaAttractions = [
  {
    name: 'Medina & Ramparts Walk',
    icon: Globe,
    category: 'UNESCO World Heritage',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning (before 11 AM)',
    description:
      'The Essaouira medina, a UNESCO World Heritage Site since 2001, is one of the finest examples of an 18th-century fortified port in North Africa. Designed by French architect Theodore Cornut for Sultan Mohammed III in 1764, it uniquely blends Moroccan and European military architecture. The grid-like layout is unusually ordered for a Moroccan medina, making it easy to navigate. Walk the crenellated ramparts for Atlantic views and explore whitewashed alleys lined with blue shutters.',
    insiderTip:
      'Unlike the labyrinthine medinas of Fes and Marrakech, Essaouira is nearly impossible to get lost in. The two main streets — Avenue de l\'Istiqlal and Rue Sidi Mohammed Ben Abdallah — run the length of the medina. Start at Bab Sbaa and end at the port.',
  },
  {
    name: 'Skala de la Ville',
    icon: Landmark,
    category: 'Historical Fortress',
    price: 'From 70 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Late afternoon (golden hour)',
    description:
      'The most iconic sight in Essaouira: a dramatic 200-meter sea-facing rampart lined with 18th-century bronze Portuguese and Spanish cannons pointing over crashing Atlantic waves. Built in 1765 as the city primary naval defense, the crenellated walls and circular watchtowers create an atmosphere of timeless grandeur. The cannon-lined terrace appeared as Astapor in Game of Thrones.',
    insiderTip:
      'Visit at golden hour when warm light turns the stone walls amber and spray from crashing waves catches the sun. The circular North Tower offers the best vantage point. Below the Skala, woodworking workshops in former munitions rooms house artisans carving thuya wood.',
  },
  {
    name: 'Skala du Port',
    icon: Anchor,
    category: 'Historical Fortification',
    price: 'From 10 MAD',
    duration: '30 minutes',
    bestTime: 'Morning',
    description:
      'The smaller of Essaouira two fortified bastions guards the harbour entrance. The squat tower offers panoramic views across the port, the medina skyline, and the offshore Iles Purpuraires (Purple Islands). The perspective is unique — looking back at the city from the water side with fishing boats bobbing in the foreground.',
    insiderTip:
      'Combine with a morning trip to the fishing port next door. On clear days the Atlas Mountains are faintly visible. The entry fee is minimal and it is rarely crowded.',
  },
  {
    name: 'Essaouira Fishing Port',
    icon: Fish,
    category: 'Living Heritage',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Early morning (7-9 AM)',
    description:
      'The heart and soul of Essaouira. The working fishing port is a daily theater: blue wooden trawlers unloading at dawn, fishermen mending nets, seagulls wheeling overhead, and the famous outdoor fish market. Beyond the market, open-air grills cook the freshest seafood — sardines, prawns, sole, and calamari straight from boats to plate.',
    insiderTip:
      'Arrive by 7-8 AM for the most active scenes and freshest grill selection. Point at the fish you want — they grill it with lemon and cumin (from 40-80 MAD). The boat-building yards at the far end are fascinating. Beware of aggressive seagulls — they will steal food from your hands.',
  },
];

/* ── SECTION ── */

const beachActivities = [
  {
    name: 'Surfing & Windsurfing',
    icon: Wind,
    category: 'Water Sports',
    price: 'From 200 MAD (lesson) / From 150 MAD (board rental)',
    duration: '2-3 hours',
    description:
      'Essaouira is nicknamed the "Wind City of Africa" — powerful Atlantic trade winds blow consistently from April to September, making it world-class for windsurfing and kitesurfing. Surfing is best October to March when wind drops and swells build. Dozens of surf schools line the beach south of the medina, offering lessons for all levels with quality equipment.',
    insiderTip:
      'For surfing, head to the southern end near the river mouth where waves are more sheltered. Beginners should book a 2-hour lesson (from 200 MAD including board and wetsuit). The water is cold year-round (16-20 degrees) — a wetsuit is essential even in summer.',
  },
  {
    name: 'Camel Beach Rides',
    icon: Sunset,
    category: 'Beach Experience',
    price: 'From 200 MAD (1 hour) / From 350 MAD (sunset ride)',
    duration: '1-2 hours',
    description:
      'One of the most memorable Essaouira experiences: riding a camel along the vast Atlantic beach as the sun sinks toward the horizon. The beach stretches for kilometers south of the medina — crashing waves, golden sand, and the distant silhouette of the fortified city. Operators offer rides from a 30-minute trot to a 2-hour sunset expedition reaching the dunes near Diabat village.',
    insiderTip:
      'Book the sunset ride (from 350 MAD) for the most spectacular light. Negotiate prices directly on the beach rather than through your riad. Wear long trousers to avoid saddle chafing. The ride toward Diabat passes the ruined palace and Borj el-Berod tower immortalized by Jimi Hendrix lore.',
  },
];

/* ── SECTION ── */

const cultureExperiences = [
  {
    name: 'Gnaoua Music Experience',
    icon: Music,
    category: 'Music & Culture',
    price: 'Free (street) / From 100 MAD (private)',
    duration: '1-3 hours',
    description:
      'Essaouira is the spiritual home of Gnaoua music, a mystical tradition rooted in sub-Saharan African rituals blended with Sufi Islam. The hypnotic rhythms of the guembri (three-stringed bass lute), qraqeb (iron castanets), and call-and-response chanting create trance-like states used in healing ceremonies. The annual Gnaoua World Music Festival in June draws over 500,000 visitors.',
    insiderTip:
      'Ask at Dar Souiri cultural center about private performances (from 100 MAD). Musicians in Place Moulay Hassan play nightly — tip from 10-20 MAD. The June festival is free but book accommodation months ahead. Buy a guembri from medina instrument makers (from 300 MAD) as a unique souvenir.',
  },
  {
    name: 'Art Galleries & Studios',
    icon: Palette,
    category: 'Art & Culture',
    price: 'Free',
    duration: '1-2 hours',
    description:
      'Essaouira has been an artists colony since the 1950s. The medina is dotted with galleries showcasing painting, sculpture, and mixed media by Moroccan and international artists. The scene ranges from established spaces like Galerie Frederic Damgaard to tiny studios where painters work with doors open, inviting you inside.',
    insiderTip:
      'Start at Galerie Frederic Damgaard on Avenue Oqba Ibn Nafiaa for the best contemporary art. Wander the side streets where smaller galleries invite you in. Original paintings start from 500 MAD. The thuya wood ateliers beneath the Skala de la Ville are also worth visiting.',
  },
  {
    name: 'Argan Oil Cooperative Visit',
    icon: Heart,
    category: 'Cultural & Shopping',
    price: 'Free (visit) / From 150 MAD per liter (oil)',
    duration: '1-1.5 hours',
    description:
      'Essaouira sits at the heart of argan country. Women-run cooperatives produce argan oil using traditional methods — cracking nuts by hand, grinding kernels, and pressing paste to extract the oil. Both culinary (roasted, nutty) and cosmetic (cold-pressed) varieties are produced. A visit lets you watch the process and buy directly at fair prices.',
    insiderTip:
      'Visit a genuine cooperative — they support local women and guarantee quality. Cooperative Marjana and Amal are well-regarded. Expect from 150-250 MAD per liter for genuine oil — cheaper means diluted. Amlou (argan, almond, and honey paste) makes an excellent souvenir from 50 MAD.',
  },
];

/* ── SECTION ── */

const foodExperiences = [
  {
    name: 'Essaouira Cooking Class',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 350 MAD',
    duration: '4-5 hours (half-day)',
    description:
      'Essaouira cooking classes focus on the city unique coastal cuisine — Moroccan and Andalusian flavors centered on Atlantic seafood. Classes begin with a guided spice souk and fish market tour, then you prepare fish tagine with chermoula, seafood pastilla, and traditional Souiri salads. The experience ends with a communal feast.',
    insiderTip:
      'Book a class with the market tour included. L\'Atelier de Madada and Khmissa Cooking Class are highly rated. Private classes from 600 MAD. Ask to learn chermoula — the Moroccan marinade of cilantro, garlic, cumin, and paprika that transforms any fish dish.',
  },
  {
    name: 'Sunset at Place Moulay Hassan',
    icon: Sunset,
    category: 'Food & Atmosphere',
    price: 'From 25-60 MAD (drinks/snacks)',
    duration: '1-2 hours',
    description:
      'The main square is the social heart of Essaouira — a wide plaza surrounded by cafe terraces. As the sun drops toward the Atlantic, musicians set up, food stalls fire their grills, and golden light washes over the medina walls. The fish grills on the square edge serve the day catch at remarkably low prices.',
    insiderTip:
      'West-facing terraces catch the best sunset light. Arrive by 5-6 PM to secure a table. Grilled sardines and calamari from 30-50 MAD at the square stalls. Taros Cafe has the best rooftop views. After dark, Gnaoua musicians often play — enjoy the free concert with mint tea.',
  },
];

/* ── SECTION ── */

const dayTrips = [
  {
    name: 'Diabat Village & Borj el-Berod Ruins',
    icon: Landmark,
    category: 'Historical Excursion',
    price: 'Free (walking) / From 100 MAD (horse or camel)',
    duration: '2-3 hours',
    description:
      'Just 3 km south along the beach lies Diabat, famous for its Jimi Hendrix association (he visited in 1969, reportedly inspiring "Castles Made of Sand"). The ruined Dar Sultan palace sits half-buried in dunes — walls and arches reclaimed by sand. The solitary Borj el-Berod watchtower rises from the beach, hauntingly photogenic against the Atlantic.',
    insiderTip:
      'Walk the beach at low tide (45 minutes each way). The ruins photograph best in late afternoon golden light. Diabat village is small and quiet — a pleasant contrast to the medina. Combine with a camel ride for a complete experience.',
  },
  {
    name: 'Game of Thrones Filming Locations',
    icon: Camera,
    category: 'Pop Culture Tour',
    price: 'Free (self-guided) / From 200 MAD (guided)',
    duration: '1.5-2 hours',
    description:
      'Essaouira doubled as Astapor in Season 3 of Game of Thrones, where Daenerys acquired the Unsullied. The Skala de la Ville ramparts served as the slave market and the harbour area was used for the "Dracarys" scene. Walking the ramparts and port with the show in mind adds an entirely new dimension.',
    insiderTip:
      'The Skala de la Ville cannon terrace is the primary filming location. Self-guided is easy since all locations are central. Guided tours (from 200 MAD) add context with comparison photos from the show.',
  },
  {
    name: 'Day Trip to Sidi Kaouki',
    icon: Waves,
    category: 'Beach & Surf Day Trip',
    price: 'From 30 MAD (grand taxi) / From 200 MAD (surf lesson)',
    duration: 'Half or full day',
    description:
      'The laid-back beach village of Sidi Kaouki, 25 km south, is a surfer paradise. The long sandy beach is less windy than Essaouira, ideal for surfing beginners. The village is tiny — surf camps, guesthouses, and cafes along the shore, with the Sufi shrine of Sidi Kaouki at the north end. Horseback rides and yoga retreats are popular alternatives.',
    insiderTip:
      'Grand taxis cost from 30 MAD shared or from 150 MAD for the car. Surf lessons from 200 MAD include board and wetsuit. The village seafood restaurants are excellent and cheaper than Essaouira. For a peaceful escape, stay overnight at a beachfront guesthouse from 300 MAD.',
  },
];

/* ── SECTION ── */

const wellnessAndShopping = [
  {
    name: 'Traditional Hammam',
    icon: Bath,
    category: 'Wellness & Culture',
    price: 'From 15 MAD (public) / From 200 MAD (tourist spa)',
    duration: '1-2 hours',
    description:
      'After a day battling the Atlantic wind, a hammam is the perfect antidote. The traditional experience involves progressively hotter steam rooms, a vigorous scrub with kessa glove and black soap, then rinsing with warm water. You emerge with impossibly soft skin. Essaouira has neighborhood hammams and luxury riad spa options.',
    insiderTip:
      'Ask your riad for the nearest neighborhood hammam (from 15 MAD entry, from 50 MAD with scrub). Buy a kessa glove and black soap from the souk (from 30 MAD). Les Bains d\'Essaouira offers hammam with argan oil massage from 300 MAD — an Essaouira signature experience.',
  },
  {
    name: 'Medina Souk Shopping',
    icon: ShoppingBag,
    category: 'Shopping & Culture',
    price: 'Free to explore',
    duration: '2-3 hours',
    description:
      'The Essaouira souks are more relaxed than Marrakech, making shopping a pleasure. The medina specializes in thuya woodwork, silver Berber jewelry, argan products, woven textiles, and Gnaoua instruments. The woodworking quarter beneath the Skala de la Ville is where master craftsmen carve everything from chess sets to furniture.',
    insiderTip:
      'Thuya wood is the signature souvenir — beautiful grain, distinctive scent. A small box from 50 MAD, a chess set from 200 MAD. Sellers are fairer than in larger cities. Silver jewelry along Rue Sidi Mohammed Ben Abdallah is mostly Berber-made. Buy argan oil at cooperatives for guaranteed quality.',
  },
];

/* ── SECTION ── */

const budgetTips = [
  { tip: 'Eat at the Port Fish Grills', icon: Fish, description: 'The outdoor grills serve the freshest seafood. Point at your fish, they grill it — sardines, calamari, or sole from 40-80 MAD, a fraction of restaurant prices.', savings: 'Save from 50-100 MAD per meal' },
  { tip: 'Walk the Medina for Free', icon: Footprints, description: 'The medina, rampart walls (exterior), beach, port, and Diabat ruins are all free. The best experiences — atmosphere, light, ocean spray — cost nothing.', savings: 'Free — the best of Essaouira' },
  { tip: 'Rent a Board, Skip the Lesson', icon: Wind, description: 'Board rental costs from 80-150 MAD per day, wetsuits from 50 MAD. Far cheaper than a lesson package if you can already surf.', savings: 'Save from 100-150 MAD vs. lesson' },
  { tip: 'Grand Taxi to Sidi Kaouki', icon: MapPin, description: 'A shared grand taxi costs from 30 MAD per person vs. organized tours at from 400 MAD. Private car from 150 MAD.', savings: 'Save from 250-350 MAD vs. tour' },
  { tip: 'Public Hammam Instead of Spa', icon: Bath, description: 'Neighborhood hammam from 15 MAD entry, from 50 MAD with scrub. Tourist spas charge from 200-500 MAD for a similar experience.', savings: 'Save from 150-400 MAD per visit' },
  { tip: 'Buy Argan Oil at Cooperatives', icon: Heart, description: 'Cooperative argan oil from 150-250 MAD per liter. Tourist shops charge from 300-500 MAD for the same quality. Cooperative oil is guaranteed genuine.', savings: 'Save from 100-250 MAD per liter' },
];

/* ── SECTION ── */

const insiderTips = [
  { tip: 'The Wind Is Real', icon: Wind, description: 'The Alizee trade winds blow strongest June to August. Bring layers, secure hats, and expect sand on the beach. Exhilarating for water sports but challenging for relaxed beach days.' },
  { tip: 'Carry a Light Layer', icon: CheckCircle, description: 'Even in summer, evenings are cool due to the ocean breeze. A light jacket or shawl is essential year-round. Medina alleys can be chilly in the morning even when the beach is warm.' },
  { tip: 'Best Photography Light', icon: Camera, description: 'The west-facing ramparts, port, and beach glow amber at sunset. Blue shutters and white walls photograph best in soft morning light. Bring a lens cloth — salt spray is constant.' },
  { tip: 'Gnaoua Festival Planning', icon: Music, description: 'If visiting during the Gnaoua Festival in June, book accommodation 2-3 months ahead. Prices double. Concerts are free and scattered across the medina — pick up a program.' },
  { tip: 'Respect the Fishing Port', icon: AlertTriangle, description: 'The port is a working facility. Stay clear of fishermen unloading, watch your step (wet and slippery), and ask before photographing workers. Respectful visitors earn warm welcomes.' },
  { tip: 'Best Sunset Spots', icon: Sunset, description: 'Top viewpoints: Skala de la Ville ramparts, the beach south of the medina, Taros Cafe rooftop, and the port breakwater. Arrive 30-40 minutes before sunset.' },
];

/* ── SECTION ── */

const faqs = [
  { question: 'What are the top things to do in Essaouira?', answer: 'The top things to do include walking the Skala de la Ville ramparts (from 70 MAD), exploring the UNESCO medina (free), visiting the fishing port at dawn (free), surfing or windsurfing (from 200 MAD lesson), Gnaoua music (free), argan cooperatives (free), camel rides (from 200 MAD), cooking classes (from 350 MAD), art galleries (free), and sunset at Place Moulay Hassan.' },
  { question: 'How many days do you need in Essaouira?', answer: 'Two to three days is ideal. Day 1: medina, Skala ramparts, fishing port, sunset at Place Moulay Hassan. Day 2: surfing, argan cooperative, cooking class or camel ride. Day 3: Diabat ruins, Sidi Kaouki, hammam. With one day from Marrakech, focus on medina, port, and Skala.' },
  { question: 'Is Essaouira good for surfing?', answer: 'Essaouira is excellent for wind and wave sports. Windsurfing and kitesurfing are world-class April to September. Surfing is best October to March with bigger swells. Sidi Kaouki (25 km south, from 30 MAD by grand taxi) offers sheltered breaks for beginners.' },
  { question: 'What is the best time to visit Essaouira?', answer: 'April to June and September to October offer the best balance of weather and moderate wind. July-August is peak windsurfing but very windy. Winter is mild with fewer tourists. The Gnaoua Festival in June is the highlight event.' },
  { question: 'Is Essaouira expensive?', answer: 'Very affordable. Grilled fish at the port from 40-80 MAD, surf lesson from 200 MAD, Skala from 70 MAD, camel ride from 200 MAD. Budget: from 250-400 MAD per day. Mid-range: from 600-1,200 MAD per day including riad and activities.' },
  { question: 'Can I do a day trip from Marrakech?', answer: 'Yes, Essaouira is 2.5-3 hours from Marrakech. Supratours and CTM buses run daily from 80-100 MAD each way. A day trip is possible but rushed. An overnight stay is recommended for sunset, evening atmosphere, and morning port.' },
  { question: 'What is Gnaoua music?', answer: 'Gnaoua is a mystical music tradition blending sub-Saharan African spiritual practices with Sufi Islam. The guembri (bass lute), qraqeb (iron castanets), and chanting create hypnotic trance rhythms. The annual Gnaoua World Music Festival in June draws over 500,000 visitors.' },
];

/* ── SECTION ── */

const relatedGuides = [
  { href: '/essaouira', icon: MapPin, title: 'Essaouira City Guide', description: 'Complete guide to Essaouira: neighborhoods, transport, accommodation, and planning.' },
  { href: '/surfing', icon: Wind, title: 'Surfing in Morocco', description: 'Best surf spots from Essaouira and Taghazout to Sidi Kaouki and Imsouane.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean.' },
  { href: '/cooking-classes', icon: UtensilsCrossed, title: 'Morocco Cooking Classes', description: 'Best cooking classes across Morocco with prices, dishes, and booking tips.' },
  { href: '/morocco-food-guide', icon: Star, title: 'Morocco Food Guide', description: 'From tagine and couscous to seafood and street food — the complete cuisine guide.' },
];

/* ── SECTION ── */

export default function ThingsToDoEssaouiraPage() {
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

      {/* ── Hero Section ── */}
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
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top Things to Do
            <br className="hidden md:block" /> in Essaouira
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From windswept ramparts and Gnaoua rhythms to Atlantic surf and sizzling seafood grills.
            Your complete 2026 guide to Morocco&apos;s coolest coastal city, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Essaouira: Where the Atlantic Meets the Medina
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Essaouira is a city that defies Moroccan stereotypes. While Marrakech overwhelms with
                intensity and Fes mesmerizes with complexity, Essaouira seduces with ease. This
                18th-century fortified port on Morocco&apos;s Atlantic coast is a place where whitewashed
                walls meet crashing waves, where Gnaoua rhythms drift through blue-shuttered alleys, and
                where the pace of life slows to the rhythm of the tide.
              </p>
              <p>
                The medina — a UNESCO World Heritage Site — is a masterpiece of European-Moroccan
                military architecture, its grid-like streets refreshingly easy to navigate. Beyond the
                ramparts, a vast sandy beach stretches south, drawing surfers, windsurfers, and
                kitesurfers from around the world. The fishing port is a daily spectacle of color and
                activity, and the seafood grilled fresh from the boats is among the best you will eat
                anywhere.
              </p>
              <p>
                This guide covers 15+ of the best things to do in Essaouira, organized by category:
                medina sights, beach activities, culture and music, food experiences, day trips, and
                wellness. Each includes real 2026 prices in MAD, practical logistics, and insider tips
                from people who know this city intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Overview: Top 10 Must-Do ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Must-Do Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Short on time? These are the ten experiences that define a visit to Essaouira.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Skala de la Ville Ramparts', price: 'From 70 MAD', time: '45 min - 1 hour', category: 'Historical' },
              { rank: 2, name: 'Fishing Port at Dawn', price: 'Free', time: '1-1.5 hours', category: 'Living Heritage' },
              { rank: 3, name: 'Surfing or Windsurfing', price: 'From 200 MAD', time: '2-3 hours', category: 'Water Sports' },
              { rank: 4, name: 'Gnaoua Music Experience', price: 'Free (street)', time: '1-3 hours', category: 'Music' },
              { rank: 5, name: 'Sunset at Place Moulay Hassan', price: 'From 25 MAD', time: '1-2 hours', category: 'Atmosphere' },
              { rank: 6, name: 'Camel Beach Ride at Sunset', price: 'From 200 MAD', time: '1-2 hours', category: 'Beach' },
              { rank: 7, name: 'Argan Oil Cooperative', price: 'Free (visit)', time: '1-1.5 hours', category: 'Cultural' },
              { rank: 8, name: 'Cooking Class with Market Tour', price: 'From 350 MAD', time: '4-5 hours', category: 'Culinary' },
              { rank: 9, name: 'Medina Art Galleries', price: 'Free', time: '1-2 hours', category: 'Art' },
              { rank: 10, name: 'Traditional Hammam', price: 'From 15 MAD', time: '1-2 hours', category: 'Wellness' },
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

      {/* ── Medina & Historical Sights ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina &amp; Historical Sights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Essaouira was built as a fortified trading port in 1764 and its medina blends Moroccan tradition
            with European military architecture in a style found nowhere else in Morocco.
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

      {/* ── Beach & Water Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach &amp; Water Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Atlantic coast defines Essaouira. From world-class windsurfing to magical sunset camel rides,
            the beach is where Essaouira shows its adventurous side.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Water temperatures range from 16-20 degrees Celsius year-round. Wetsuits are strongly recommended.
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

      {/* ── Culture & Music ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture, Music &amp; Art
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Essaouira is a creative soul. Gnaoua music, contemporary art, and the ancient craft of argan
            production all thrive in this windswept coastal city.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Many cultural experiences are free. The Gnaoua World Music Festival in June is the highlight event of the year.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cultureExperiences.map((item) => {
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

      {/* ── Food & Culinary Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Culinary Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Essaouira is a seafood city. The freshest Atlantic catch grilled at the port, coastal tagines
            with chermoula, and cooking classes centered on the ocean define the culinary scene.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All food prices are starting prices. Port-side grills are the best value for fresh seafood.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodExperiences.map((item) => {
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

      {/* ── Day Trips & Excursions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond the medina walls, Essaouira surroundings offer ruins steeped in legend,
            pop-culture filming locations, and a surfer village escape.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Day trip prices are starting prices per person. Self-guided options are available for all destinations.
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

      {/* ── Wellness & Shopping ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wellness &amp; Shopping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            After the wind and waves, Essaouira offers soothing hammams and relaxed souk shopping
            for thuya wood, argan products, and silver jewelry.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Essaouira shopkeepers are generally more relaxed than in Marrakech. Prices are negotiable but usually fair.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {wellnessAndShopping.map((item) => {
              const WellIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WellIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* ── Budget Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Essaouira
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

      {/* ── Insider Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Essaouira
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

      {/* ── Sample 2-Day Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 2-Day Essaouira Itinerary
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
                  Day 1: Medina, Port &amp; Sunset
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at the fishing port at 7-8 AM to see the catch being unloaded. Eat fresh grilled
                      sardines for breakfast (from 40 MAD). Walk to the Skala du Port (from 10 MAD) for panoramic
                      views. Continue to the Skala de la Ville (from 70 MAD) and walk the cannon-lined ramparts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Explore the medina: browse the thuya woodworking ateliers, visit art galleries, and shop the
                      souks for argan products and silver jewelry. Visit an argan oil cooperative (free). Lunch at
                      a medina restaurant (from 60 MAD). Rest at your riad during the windiest hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset at Place Moulay Hassan with mint tea and Gnaoua music (from 25 MAD). Dinner at a
                      seafood restaurant or the port grills (from 50-120 MAD). Estimated Day 1 cost: from 250-400 MAD.
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
                  Day 2: Beach, Adventures &amp; Farewell
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Surf lesson on the beach (from 200 MAD, 2 hours) or walk to Diabat ruins along the beach
                      (free, 45 minutes each way). Alternatively, take a half-day cooking class with market tour
                      (from 350 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Traditional hammam (from 15 MAD public / from 200 MAD spa). Final souk shopping for thuya
                      wood, spices, and argan products. Lunch at a medina cafe (from 50 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset camel ride on the beach (from 200 MAD) or watch the sunset from Taros Cafe rooftop.
                      Farewell seafood dinner at the port (from 60 MAD). Estimated Day 2 cost: from 300-700 MAD.
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
                  <p className="text-xs text-[var(--text-muted)]">Port fish grills, free medina walks, public hammam, beach</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-2,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Surf lesson, cooking class, camel ride, restaurant dinners</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 2,500-4,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private tours, spa hammam, fine dining, private transport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Essaouira Trip
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Essaouira?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From ancient ramparts and Gnaoua rhythms to Atlantic surf and the freshest seafood in Morocco,
            Essaouira offers experiences that will stay with you forever. Start planning your trip today.
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
              href="/surfing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Wind className="w-5 h-5" />
              Surfing in Morocco
            </Link>
            <Link
              href="/cooking-classes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Cooking Classes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

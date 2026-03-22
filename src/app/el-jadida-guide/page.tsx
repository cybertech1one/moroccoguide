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
  Footprints,
  Eye,
  Waves,
  Sunset,
  Mountain,
  Castle,
  Fish,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'El Jadida Guide 2026 | Portuguese Cistern, UNESCO City & Beaches',
  description:
    'Complete guide to El Jadida, Morocco in 2026. Explore the UNESCO Portuguese City, famous underground cistern, rampart walks, Sidi Bouzid beach, Mazagan resort, seafood restaurants, and Oualidia day trips. Prices in MAD and insider tips.',
  keywords: [
    'el jadida morocco',
    'el jadida cistern',
    'portuguese city el jadida',
    'el jadida beach',
    'el jadida guide',
    'mazagan morocco',
    'cite portugaise el jadida',
    'el jadida things to do',
    'el jadida travel guide',
    'sidi bouzid beach el jadida',
    'deauville beach el jadida',
    'el jadida ramparts',
    'el jadida seafood',
    'oualidia day trip',
    'el jadida 2026',
    'moulay abdallah moussem',
    'haras chaouia el jadida',
    'el jadida jewish cemetery',
  ],
  openGraph: {
    title: 'El Jadida Guide 2026 | Portuguese Cistern, UNESCO City & Beaches',
    description:
      'The complete guide to El Jadida, Morocco. UNESCO Portuguese City, underground cistern, rampart walks, beaches, Mazagan resort, and seafood with prices in MAD.',
    url: `${BASE_URL}/el-jadida-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-el-jadida.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of El Jadida Portuguese city ramparts overlooking the Atlantic Ocean in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Jadida Guide 2026 | Portuguese City & Beaches',
    description:
      'UNESCO Portuguese cistern, rampart walks, Sidi Bouzid beach, Mazagan resort, and seafood. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-el-jadida.webp`],
  },
  alternates: { canonical: `${BASE_URL}/el-jadida-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/el-jadida-guide`,
  name: 'El Jadida Guide 2026 | Portuguese Cistern, UNESCO City & Beaches',
  description:
    'Complete guide to El Jadida, Morocco. Explore the UNESCO Portuguese City, underground cistern, rampart walks, beaches, Mazagan resort, and seafood.',
  url: `${BASE_URL}/el-jadida-guide`,
  image: `${BASE_URL}/images/hero-el-jadida.webp`,
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
  mainEntityOfPage: `${BASE_URL}/el-jadida-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'El Jadida',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'El Jadida Guide', item: `${BASE_URL}/el-jadida-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is El Jadida famous for?', acceptedAnswer: { '@type': 'Answer', text: 'El Jadida is famous for its UNESCO-listed Cite Portugaise (Portuguese City), built in the 16th century, and particularly the underground Portuguese Cistern with its hauntingly beautiful reflections. The cistern was used as a filming location for Orson Welles\' Othello. The city is also known for its Atlantic beaches, seafood, and the Mazagan beach resort.' } },
    { '@type': 'Question', name: 'How many days do you need in El Jadida?', acceptedAnswer: { '@type': 'Answer', text: 'One to two days is ideal. One day covers the Portuguese City, cistern, ramparts, medina, and a beach visit. Two days allows you to add the Haras de la Chaouia horse farm, Mazagan resort, Moulay Abdallah ruins, and a day trip to Oualidia for oysters. El Jadida also works as a half-day stop between Casablanca and Essaouira.' } },
    { '@type': 'Question', name: 'How do I get to El Jadida from Casablanca?', acceptedAnswer: { '@type': 'Answer', text: 'El Jadida is 100 km southwest of Casablanca, about 1.5 hours by car via the A1 highway. CTM and Supratours buses run frequently (from 50 MAD, 1.5 hours). Grand taxis are also available from Casablanca Ouled Ziane station. There is no direct train service to El Jadida.' } },
    { '@type': 'Question', name: 'Is the Portuguese Cistern in El Jadida worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The underground cistern is one of the most atmospheric and photogenic sites in all of Morocco. Built by the Portuguese in the 16th century as a water reservoir (possibly an armory), the vaulted stone ceiling is reflected perfectly in a thin layer of water on the floor, creating an ethereal mirror effect. The small skylight in the center adds dramatic natural lighting. Entry costs from 20 MAD.' } },
    { '@type': 'Question', name: 'What are the best beaches near El Jadida?', acceptedAnswer: { '@type': 'Answer', text: 'Sidi Bouzid is the most popular beach, about 5 km south of the city center, with golden sand and beach cafes. Deauville Beach (Haouzia) is wider and less crowded, 8 km north. The beaches at Mazagan resort area are well-maintained. For a special trip, drive 75 km south to Oualidia, one of the most beautiful lagoon beaches in Morocco.' } },
    { '@type': 'Question', name: 'What is the best time to visit El Jadida?', acceptedAnswer: { '@type': 'Answer', text: 'May to October offers the best beach weather with temperatures of 22-30 degrees. The Moulay Abdallah Amghar moussem in August is a spectacular equestrian festival. Spring (March-May) and autumn (September-November) are pleasant for sightseeing with fewer crowds. Winter is mild (15-20 degrees) but can be windy.' } },
    { '@type': 'Question', name: 'Can you visit Oualidia from El Jadida?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Oualidia is 75 km south of El Jadida (about 1 hour by car). It is famous for its protected lagoon, oyster farms, and stunning beach. You can eat fresh oysters at the lagoon restaurants from 60 MAD per dozen. Grand taxis are available or you can rent a car. It makes an excellent half-day or full-day trip.' } },
  ],
};

/* ===============================================================
   DATA: PORTUGUESE CITY & HERITAGE
   =============================================================== */

const heritageAttractions = [
  {
    name: 'Underground Portuguese Cistern',
    icon: Landmark,
    category: 'UNESCO Heritage',
    price: 'From 20 MAD',
    duration: '30-45 minutes',
    bestTime: 'Morning (before 11 AM)',
    description:
      'The crown jewel of El Jadida and one of Morocco most mesmerizing sites. Built by the Portuguese in 1514 as a water reservoir beneath their fortified city, this underground Gothic hall features 25 stone pillars supporting ribbed vaulting that rises from a thin sheet of water covering the floor. A single skylight pierces the ceiling, casting a column of natural light that reflects off the water to illuminate the entire chamber in an otherworldly glow. Orson Welles was so captivated that he filmed scenes of his 1952 Othello adaptation here. The perfect reflections of columns and arches in the still water create a symmetry that is both disorienting and beautiful.',
    insiderTip:
      'Visit in the morning when the skylight casts the strongest beam of light into the cistern. The reflection effect is best when the water is undisturbed — arrive when the site first opens and you may have it to yourself. Photography tip: use a wide-angle lens and shoot from floor level for the most dramatic reflections. The cistern is underground and cool, making it a welcome retreat on hot days.',
  },
  {
    name: 'Cite Portugaise (Portuguese City)',
    icon: Castle,
    category: 'UNESCO World Heritage',
    price: 'Free (open access)',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The entire fortified Portuguese quarter is a UNESCO World Heritage Site, inscribed in 2004 as an outstanding example of the interchange of European and Moroccan culture. Built between 1514 and 1541 by Portuguese colonizers as the fortress of Mazagan, the compact citadel is enclosed by massive stone ramparts and bastions that rise dramatically from the Atlantic shore. Inside, narrow streets reveal a unique architectural blend: Portuguese Manueline doorways sit beside Moroccan arched windows, a Catholic church adjoins the grand mosque, and the Assumption Church (now restored) features beautiful stone carving. The entire ensemble is remarkably intact and free to explore.',
    insiderTip:
      'Enter through the main gate on the seaward side for the most dramatic first impression. The interior is small — you can walk every street in under an hour. Look for the Manueline-style carved stone doorways, a distinctive Portuguese decorative style you will not find elsewhere in Morocco. The residential streets are still inhabited, giving the citadel a living, breathing atmosphere rather than a museum feel.',
  },
  {
    name: 'Portuguese Ramparts Walk',
    icon: Eye,
    category: 'Historical Walk',
    price: 'Free',
    duration: '45 minutes - 1 hour',
    bestTime: 'Sunset',
    description:
      'Walking the complete circuit of the Portuguese ramparts is one of the finest experiences in El Jadida. The massive stone fortifications, studded with four corner bastions (Saint Sebastian, Holy Spirit, Angel, and Saint Antoine), encircle the old Portuguese city and offer commanding views in every direction. To the west, the Atlantic crashes against the sea wall. To the east, the bustling Moroccan medina spreads out below. From the Bastion of the Angel, you can gaze north along the coast toward Casablanca or south toward Sidi Bouzid beach. Cannons still point seaward from several bastions, evoking the centuries when this fortress guarded Portugal Atlantic trade routes.',
    insiderTip:
      'Time your rampart walk for sunset when the stone walls glow golden and the Atlantic turns deep blue. Start from the Bastion of Saint Sebastian (southeast corner) and walk counterclockwise. The Bastion of the Angel on the north side has the best views. The ramparts are unguarded with no railings in some spots — exercise caution, especially with children. Bring a camera — the light is exceptional.',
  },
  {
    name: 'Church of the Assumption',
    icon: Landmark,
    category: 'Historical Monument',
    price: 'Free',
    duration: '20-30 minutes',
    bestTime: 'Morning',
    description:
      'This 16th-century Portuguese church inside the Cite Portugaise is one of the few surviving examples of Manueline architecture in North Africa. Originally built as the main parish church of the Portuguese garrison, it features a simple but elegant stone interior with ribbed vaulting and carved stone details characteristic of late Portuguese Gothic style. After the Portuguese departure in 1769, the church fell into disuse but has been carefully restored. It now occasionally hosts cultural exhibitions and events. The juxtaposition of this European church standing beside the medina mosque exemplifies El Jadida unique cultural layering.',
    insiderTip:
      'The church is sometimes closed — check at the entrance to the Portuguese City if it is open that day. When open, the interior is cool and quiet, with beautiful acoustics. Look for the carved stone details around the doorways and windows — these Manueline flourishes incorporate maritime motifs like ropes and shells, reflecting Portugal seafaring identity.',
  },
  {
    name: 'El Jadida Jewish Cemetery',
    icon: Heart,
    category: 'Heritage Site',
    price: 'Free',
    duration: '20-30 minutes',
    bestTime: 'Morning',
    description:
      'Tucked within the old Portuguese quarter, this small but poignant Jewish cemetery testifies to El Jadida long history of religious coexistence. The city was home to a significant Mellah (Jewish quarter), and the community played an important role in trade and commerce for centuries. The cemetery contains whitewashed tombs and Hebrew inscriptions dating back several hundred years. It is a quiet, contemplative space that speaks to the diverse cultural tapestry of Moroccan port cities. The Mellah itself, while no longer inhabited by a Jewish community, retains its distinctive architectural character with balconied houses and narrow lanes.',
    insiderTip:
      'Ask the guardian at the Portuguese City entrance for access — the cemetery may require someone to unlock the gate. A small tip (from 10-20 MAD) for the guardian is customary. Visit respectfully and dress modestly. The cemetery offers an important perspective on El Jadida multicultural past that most tourists overlook.',
  },
];

/* ===============================================================
   DATA: BEACHES & COAST
   =============================================================== */

const beachAttractions = [
  {
    name: 'Sidi Bouzid Beach',
    icon: Waves,
    category: 'Beach & Leisure',
    price: 'Free (sunbed from 30 MAD)',
    duration: '2-4 hours',
    bestTime: 'Morning to mid-afternoon',
    description:
      'The most popular beach in the El Jadida area, Sidi Bouzid stretches along a beautiful crescent of golden sand about 5 km south of the city center. The beach is flanked by low cliffs and backed by a row of beach cafes and seafood restaurants. The water is clean and the swimming is generally safe, though Atlantic currents can be strong. During summer, the beach fills with Moroccan families and the atmosphere is lively and welcoming. Beach cafes serve fresh grilled fish, salads, and cold drinks right on the sand, making it easy to spend a full day here.',
    insiderTip:
      'Visit on a weekday for more space — weekends and holidays get very crowded in summer. The southern end of the beach is quieter. The beach cafes serve excellent grilled sardines and sole for from 40-80 MAD. Bring sunscreen — the Atlantic breeze can mask the intensity of the sun. Grand taxis from El Jadida center cost from 10-15 MAD per person.',
  },
  {
    name: 'Deauville Beach (Haouzia)',
    icon: Sun,
    category: 'Beach & Nature',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning',
    description:
      'Named after the famous French resort town, Deauville Beach (locally known as Haouzia) is a long, wide stretch of sand about 8 km north of El Jadida. Far less developed than Sidi Bouzid, this beach offers a more natural and tranquil experience. The sand is fine and golden, stretching for kilometers in both directions. Dunes and scrubland back the shore, and in the off-season you may have vast stretches to yourself. The water can be rougher here with stronger Atlantic waves, making it popular with body surfers and those who enjoy wilder coastline.',
    insiderTip:
      'There are few facilities at Deauville — bring your own water, snacks, and shade. The beach is accessible by car or by grand taxi (from 15-20 MAD from the city center). The sunsets here are spectacular because the beach faces northwest. In summer, some temporary beach bars set up. The lack of crowds makes it ideal for long beach walks and photography.',
  },
  {
    name: 'Mazagan Beach & Resort Area',
    icon: Sparkles,
    category: 'Luxury Resort',
    price: 'Day pass from 300 MAD (seasonal pricing may apply)',
    duration: 'Half day - full day',
    bestTime: 'All day',
    description:
      'The Mazagan Beach & Golf Resort is a five-star complex located 15 km from El Jadida, offering a different side of the coastal experience. Built on the site of the old Mazagan fortress, the resort features a private beach, an 18-hole golf course designed by Gary Player, a casino (one of few in Morocco), multiple restaurants, a spa, and an entertainment complex. Even if you are not staying at the resort, day passes allow access to the beach, pool, and some facilities. The architecture draws on traditional Moroccan and Portuguese design elements, creating a visually striking complex.',
    insiderTip:
      'Day pass prices and availability vary by season — call ahead during peak summer months. The casino operates year-round and is one of the few legal gambling establishments in Morocco. The golf course is world-class and open to non-guests (green fees from 800 MAD). For a taste of luxury without the full resort price, book a meal at one of the resort restaurants — the seafood buffet is excellent.',
  },
];

/* ===============================================================
   DATA: CULTURE & EXPERIENCES
   =============================================================== */

const cultureExperiences = [
  {
    name: 'Haras de la Chaouia (Regional Horse Farm)',
    icon: Mountain,
    category: 'Equestrian Heritage',
    price: 'From 50 MAD (guided visit)',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'Morocco is a nation of horsemen, and the Haras de la Chaouia near El Jadida is one of the country premier horse breeding farms. Established during the French protectorate era to preserve and develop Moroccan horse breeds (Barb and Arab-Barb), the haras offers guided tours of the stables, paddocks, and training facilities. You can see magnificent stallions and mares, learn about the centuries-old Moroccan equestrian tradition, and understand the breeding programs that supply horses for the fantasia (tbourida) festivals across the country. During the Moulay Abdallah moussem, the horses from this haras are often featured in the spectacular fantasia charges.',
    insiderTip:
      'Call ahead to confirm visiting hours — the haras sometimes closes for private events or breeding activities. Morning visits are best when the horses are being exercised. Photography is usually permitted. If you are interested in riding, ask about arranging a session — some visits include short rides. The farm is about 10 km from the city center; take a grand taxi (from 20-30 MAD).',
  },
  {
    name: 'Moulay Abdallah Amghar Moussem',
    icon: Calendar,
    category: 'Festival & Heritage',
    price: 'Free (spectator) / Horse activities from 100 MAD',
    duration: 'Full day',
    bestTime: 'August (annual festival)',
    description:
      'The Moulay Abdallah moussem is one of Morocco greatest annual festivals, held in August at the ancient ribat (fortified religious settlement) of Moulay Abdallah Amghar, 11 km south of El Jadida. This week-long celebration combines religious pilgrimage with the spectacular fantasia (tbourida) — mounted horsemen in traditional dress charge in formation, firing their muskets in synchronized volleys. Hundreds of riders participate, and the thundering hooves, gunpowder smoke, and the colorful spectacle of traditional costume create an unforgettable atmosphere. Alongside the fantasia, there are markets, food stalls, music, and a fairground atmosphere.',
    insiderTip:
      'The moussem takes place in August — exact dates vary by the Islamic calendar, so check locally. The fantasia performances are the highlight, usually in the late afternoon. Arrive early for a good viewing spot. The site gets extremely crowded — bring water, sun protection, and wear comfortable shoes. The ancient ruins of the ribat are worth exploring before the festivities begin. Grand taxis run frequently from El Jadida during the moussem.',
  },
  {
    name: 'El Jadida Medina & Souks',
    icon: ShoppingBag,
    category: 'Shopping & Culture',
    price: 'Free (browsing)',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'Beyond the Portuguese quarter, the Moroccan medina of El Jadida buzzes with everyday local life. The covered souks offer everything from spices and olives to household goods and fabrics. This is a working medina rather than a tourist-oriented one, meaning prices are local and the atmosphere is authentic. The fish market (marche au poisson) is particularly lively in the morning when the catch comes in from the nearby port. The medina streets are wider and more navigable than in cities like Fes or Marrakech, making it a pleasant and pressure-free shopping experience.',
    insiderTip:
      'The fish market is best before 10 AM when fishermen bring in the fresh catch. Prices here are genuinely local — you can buy a kilogram of sardines for from 10-15 MAD. The spice shops near the main market sell excellent ras el hanout and saffron at local prices. Haggling is expected but low-key compared to tourist cities. The medina is safe and welcoming — locals are accustomed to visitors.',
  },
  {
    name: 'Seafood Restaurants & Port',
    icon: Fish,
    category: 'Culinary Experience',
    price: 'From 40 MAD (casual) / From 120 MAD (restaurant)',
    duration: '1-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'El Jadida is one of the best seafood cities in Morocco, thanks to its active fishing port. The port itself is worth visiting to see the colorful fishing boats and watch the catch being auctioned in the morning. For eating, the options range from simple grilled fish stalls near the port (from 40 MAD for a plate of sardines, salad, and bread) to established restaurants serving elaborate seafood platters with lobster, prawns, sole, and sea bass. The city specialty is grilled sole — a flat white fish pulled from the Atlantic that morning and served simply with chermoula sauce, lemon, and fresh bread.',
    insiderTip:
      'For the freshest and cheapest seafood, head to the small restaurants behind the fish market — they cook whatever came in that morning. Restaurant La Portugaise inside the Portuguese City is atmospheric, serving seafood in a historic setting (mains from 80-150 MAD). For upmarket dining, try the restaurants along the corniche south of the city. Always ask for the catch of the day rather than ordering from a fixed menu.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS
   =============================================================== */

const dayTrips = [
  {
    name: 'Oualidia Day Trip (Oysters & Lagoon)',
    icon: Compass,
    category: 'Coastal Day Trip',
    price: 'From 50 MAD (transport) / Oysters from 60 MAD per dozen',
    duration: 'Full day',
    bestTime: 'Morning departure',
    description:
      'Oualidia, 75 km south of El Jadida, is a hidden gem that most international tourists miss. The town sits on a stunning protected lagoon where calm turquoise waters contrast with the wild Atlantic surf just beyond the sandbar. Oualidia is Morocco oyster capital — the lagoon farms produce the country finest oysters, which you can eat freshly shucked at waterside restaurants for from 60 MAD per dozen. Beyond oysters, the lagoon is ideal for kayaking, the beach is pristine, and the overall atmosphere is one of peaceful, unspoiled coastal beauty. The drive from El Jadida passes through farmland and coast.',
    insiderTip:
      'Rent a car for the most flexibility, or take a grand taxi from El Jadida (from 50 MAD per person, negotiate for a private hire at from 250-300 MAD). Eat oysters at one of the lagoon-side shacks for the freshest experience — Ostrea II and Restaurant L Araignee Gourmande are popular choices. The lagoon beach is calm and safe for children. If you have time, continue 20 km further south to Safi for pottery workshops.',
  },
  {
    name: 'Azemmour Side Trip',
    icon: Globe,
    category: 'Historical Town',
    price: 'From 10 MAD (grand taxi)',
    duration: '2-3 hours',
    bestTime: 'Morning',
    description:
      'Just 15 km north of El Jadida, the small riverside town of Azemmour is one of Morocco most atmospheric and least-visited historical places. Built on the banks of the Oum er-Rbia river, Azemmour has its own Portuguese-era ramparts and a beautifully preserved medina filled with street art murals. The town has attracted artists who have painted vibrant works on the whitewashed walls, creating an open-air gallery. The old mellah (Jewish quarter) features distinctive architecture, and the riverside setting is photogenic. Azemmour sees very few tourists, offering a genuine and untouched experience.',
    insiderTip:
      'Take a grand taxi from El Jadida (from 10 MAD, 20 minutes). Walk the ramparts for river views, then explore the medina murals. The town is tiny — you can see everything in 2 hours. There are a few small cafes but limited restaurant options, so consider eating before or after. Azemmour combines perfectly with an El Jadida visit for a full day of Portuguese-era heritage.',
  },
  {
    name: 'Moulay Abdallah Ruins',
    icon: Landmark,
    category: 'Archaeological Site',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The ancient ribat of Moulay Abdallah Amghar, 11 km south of El Jadida near the coast, is a fascinating archaeological site outside of the famous moussem period. The ruins of this 12th-century Almohad fortified monastery include crumbling walls, a minaret, and the shrine of the saint Moulay Abdallah himself. The site sits on a windswept promontory overlooking the Atlantic, with a small fishing village beside it. Outside of the August moussem, the site is quiet and atmospheric — you can explore the ruins with only the sound of the wind and the waves for company.',
    insiderTip:
      'Combine this with a trip to Sidi Bouzid beach, as they are in the same direction. A grand taxi from El Jadida costs from 15-20 MAD per person. The ruins are unguarded and free to explore year-round. The coastline here is wild and beautiful — bring a camera. The fishing village has a small cafe where you can get mint tea. The site is best outside the moussem period when you can appreciate the ruins in peace.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Walk the Portuguese City for Free', icon: Footprints, description: 'The UNESCO Cite Portugaise, ramparts, streets, and church are all free to enter. Only the cistern charges admission (from 20 MAD). The best of El Jadida heritage costs nothing.', savings: 'Free — UNESCO heritage' },
  { tip: 'Eat at the Fish Market', icon: Fish, description: 'Buy fresh fish at the port market (sardines from 10-15 MAD/kg) and have it grilled at nearby stalls for from 10-20 MAD. A full seafood lunch for from 30-50 MAD beats restaurant prices of from 100-200 MAD.', savings: 'Save from 50-150 MAD per meal' },
  { tip: 'Grand Taxi to Beaches', icon: MapPin, description: 'Shared grand taxis to Sidi Bouzid beach cost from 10-15 MAD per person. Private taxis or organized beach excursions charge from 100-200 MAD for the same 5 km trip.', savings: 'Save from 85-185 MAD per trip' },
  { tip: 'Skip Mazagan, Enjoy Public Beaches', icon: Waves, description: 'Sidi Bouzid and Deauville beaches are free with excellent swimming. Mazagan resort day passes start from 300 MAD. The public beaches are arguably more authentic and enjoyable.', savings: 'Save from 300 MAD per person' },
  { tip: 'Day Trip by Grand Taxi', icon: Compass, description: 'Grand taxi to Oualidia costs from 50 MAD per person shared. Organized day tours charge from 500-800 MAD per person for the same trip with similar content.', savings: 'Save from 450-750 MAD vs. tour' },
  { tip: 'Bus from Casablanca, Not Private Transfer', icon: ArrowRight, description: 'CTM bus from Casablanca to El Jadida costs from 50 MAD. Private transfers charge from 500-800 MAD. The bus is comfortable, air-conditioned, and runs frequently.', savings: 'Save from 450-750 MAD per trip' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Best Cistern Photography', icon: Camera, description: 'The cistern photographs best in the morning when the skylight beam is strongest. Use a wide-angle lens and shoot from low angles for the reflection effect. A small tripod helps in the dim light. Arrive right at opening for an empty cistern.' },
  { tip: 'Combine With Essaouira Route', icon: Compass, description: 'El Jadida sits perfectly on the Casablanca-to-Essaouira coastal route. Stop for a half-day to see the cistern and ramparts, lunch on seafood, then continue south. The coastal road via Oualidia to Safi and Essaouira is scenic.' },
  { tip: 'The Moussem Is Unmissable', icon: Calendar, description: 'If you are in Morocco in August, do everything possible to attend the Moulay Abdallah moussem. The fantasia charges are among the most spectacular traditional events in the country. Nothing else compares to the thundering horses and synchronized musket fire.' },
  { tip: 'El Jadida Is a Local City', icon: CheckCircle, description: 'Unlike Marrakech or Fes, El Jadida is not geared toward mass tourism. Prices are local, hassle is minimal, and you will often be the only foreign visitor at attractions. This authenticity is its greatest appeal.' },
  { tip: 'Wind and Weather', icon: Wind, description: 'The Atlantic coast around El Jadida can be windy, especially in the afternoon. Mornings are typically calmer. Even in summer, bring a light jacket for evening walks along the ramparts. The wind makes the heat very bearable.' },
  { tip: 'Sunset on the Ramparts', icon: Sunset, description: 'The Portuguese ramparts face west over the Atlantic — the sunset views are extraordinary. The Bastion of the Angel is the prime spot. Arrive 30 minutes before sunset and watch the walls turn gold as the sun drops into the ocean.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is El Jadida famous for?', answer: 'El Jadida is famous for its UNESCO-listed Cite Portugaise (Portuguese City), particularly the underground Portuguese Cistern with its hauntingly beautiful reflected columns. The city also offers excellent Atlantic beaches, fresh seafood, the Moulay Abdallah moussem festival, and serves as a gateway to the oyster town of Oualidia.' },
  { question: 'How many days do you need in El Jadida?', answer: 'One to two days is ideal. One day covers the Portuguese City, cistern, ramparts, medina, and a beach visit. Two days allows for the horse farm, Mazagan resort, Moulay Abdallah ruins, and a day trip to Oualidia. El Jadida also works as a half-day stop on the Casablanca-to-Essaouira route.' },
  { question: 'How do I get to El Jadida from Casablanca?', answer: 'El Jadida is 100 km southwest of Casablanca (1.5 hours by car via the A1 highway). CTM and Supratours buses run frequently (from 50 MAD, 1.5 hours). Grand taxis depart from Casablanca Ouled Ziane station. There is no direct train service to El Jadida.' },
  { question: 'Is the Portuguese Cistern worth visiting?', answer: 'Absolutely. The underground cistern is one of Morocco most photogenic and atmospheric sites. The reflected columns, vaulted ceiling, and single skylight create an ethereal mirror effect that is unlike anything else in the country. Orson Welles filmed Othello scenes here. Entry costs from 20 MAD.' },
  { question: 'What are the best beaches near El Jadida?', answer: 'Sidi Bouzid (5 km south) is the most popular with golden sand and beach cafes. Deauville Beach (8 km north) is wider and less crowded. Mazagan resort has private beaches. For a special trip, Oualidia lagoon (75 km south) is one of Morocco most beautiful coastal spots.' },
  { question: 'What is the best time to visit El Jadida?', answer: 'May to October for beach weather (22-30 degrees). August for the Moulay Abdallah moussem festival. Spring and autumn are pleasant for sightseeing with fewer crowds. Winter is mild (15-20 degrees) but can be windy on the coast.' },
  { question: 'Can you visit Oualidia from El Jadida?', answer: 'Yes, Oualidia is 75 km south (about 1 hour by car). Famous for its protected lagoon and oyster farms, you can eat freshly shucked oysters from 60 MAD per dozen. Grand taxis are available, or rent a car for more flexibility. It makes an excellent half-day or full-day trip.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean coasts.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to seafood and street food — the complete cuisine guide.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Morocco Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
  { href: '/essaouira', icon: MapPin, title: 'Essaouira Guide', description: 'Wind-swept Atlantic port town with art galleries, seafood, and beautiful medina.' },
  { href: '/casablanca', icon: Globe, title: 'Casablanca Guide', description: 'Morocco largest city: Hassan II Mosque, art deco architecture, and modern culture.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function ElJadidaGuidePage() {
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
            backgroundImage: 'url(/images/hero-el-jadida.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">El Jadida Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            El Jadida
            <br className="hidden md:block" /> Travel Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A UNESCO Portuguese fortress rising from the Atlantic, a hauntingly beautiful underground cistern,
            golden beaches, and some of Morocco best seafood. Your complete 2026 guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              El Jadida: Portugal on the Atlantic Coast of Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                El Jadida is a city of unexpected beauty. Located 100 km southwest of Casablanca on the
                Atlantic coast, this unassuming Moroccan port town hides one of the country most extraordinary
                historical treasures: a complete 16th-century Portuguese fortress city, remarkably intact,
                its massive ramparts rising directly from the ocean shore. Inside those walls, a single site
                draws visitors from around the world — the underground Portuguese Cistern, where Gothic columns
                are reflected in a mirror-still pool of water in an effect so ethereal that Orson Welles
                chose it as a filming location for his Othello.
              </p>
              <p>
                But El Jadida is far more than its cistern. The Cite Portugaise, inscribed as a UNESCO World
                Heritage Site in 2004, is a living neighborhood where Moroccan families occupy the same streets
                that Portuguese soldiers once patrolled. The ramparts offer sunset walks with Atlantic panoramas.
                Beyond the old city, golden beaches stretch north and south, a vibrant fishing port supplies
                some of the freshest seafood on the coast, and the annual Moulay Abdallah moussem brings
                thundering fantasia horsemen from across Morocco.
              </p>
              <p>
                This guide covers 14 essential attractions and experiences in and around El Jadida, organized
                by category: Portuguese heritage, beaches, culture and food, and day trips. Each includes
                real 2026 prices in MAD, practical logistics, and insider tips. Whether you are spending a
                full weekend or stopping for a half-day on the coastal road, El Jadida rewards every moment.
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
            Short on time? These are the ten experiences that define a visit to El Jadida.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Portuguese Cistern', price: 'From 20 MAD', time: '30-45 min', category: 'UNESCO Heritage' },
              { rank: 2, name: 'Cite Portugaise Walk', price: 'Free', time: '1-2 hours', category: 'World Heritage' },
              { rank: 3, name: 'Ramparts Sunset Walk', price: 'Free', time: '45 min - 1 hour', category: 'Historical' },
              { rank: 4, name: 'Sidi Bouzid Beach', price: 'Free', time: '2-4 hours', category: 'Beach' },
              { rank: 5, name: 'Seafood at the Port', price: 'From 40 MAD', time: '1-2 hours', category: 'Culinary' },
              { rank: 6, name: 'Oualidia Day Trip (Oysters)', price: 'From 50 MAD', time: 'Full day', category: 'Day Trip' },
              { rank: 7, name: 'Moulay Abdallah Moussem', price: 'Free', time: 'Full day', category: 'Festival' },
              { rank: 8, name: 'El Jadida Medina & Souks', price: 'Free', time: '1-2 hours', category: 'Shopping' },
              { rank: 9, name: 'Haras de la Chaouia', price: 'From 50 MAD', time: '1-2 hours', category: 'Equestrian' },
              { rank: 10, name: 'Deauville Beach', price: 'Free', time: '2-4 hours', category: 'Beach' },
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

      {/* -- Portuguese City & Heritage -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Portuguese City &amp; Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The UNESCO-listed Cite Portugaise is the heart of El Jadida — a 16th-century fortress city
            that preserves a remarkable chapter of Portuguese expansion along the African coast.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {heritageAttractions.map((attraction) => {
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

      {/* -- Beaches & Coast -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beaches &amp; Coast
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            El Jadida Atlantic coastline offers golden sand beaches ranging from lively resort strips
            to wild, empty stretches of natural shore.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Beach season runs May to October. The coast can be windy — mornings are typically calmest.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {beachAttractions.map((item) => {
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

      {/* -- Culture & Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture, Food &amp; Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From equestrian heritage and thundering fantasia to fresh-caught seafood and bustling medina souks,
            El Jadida offers authentic Moroccan experiences without the tourist crowds.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            El Jadida is a working city — expect local prices and minimal tourist pressure in the medina and port.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cultureExperiences.map((item) => {
              const CultureIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CultureIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Day Trips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from El Jadida
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            El Jadida position on the Atlantic coast makes it an excellent base for exploring nearby
            towns, beaches, and archaeological sites.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Grand taxis and rental cars are the most practical transport options for day trips from El Jadida.
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

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for El Jadida
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            El Jadida is one of Morocco most affordable coastal cities. These tips help you stretch your budget even further.
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
            Insider Tips for El Jadida
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
            Sample 2-Day El Jadida Itinerary
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
                  Day 1: Portuguese City, Cistern &amp; Beach
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at the Cite Portugaise early. Visit the underground cistern (from 20 MAD) when
                      the morning light creates the best reflections. Explore the Portuguese streets, Church
                      of the Assumption, and the Jewish cemetery. Walk the complete rampart circuit, finishing
                      at the Bastion of the Angel for coastal views.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a port restaurant — grilled sole and fresh sardines (from 40-80 MAD). Browse
                      the medina souks and fish market. Take a grand taxi (from 10 MAD) to Sidi Bouzid
                      beach for swimming and sunbathing. Beach cafe snacks and drinks from 20-40 MAD.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to the ramparts for sunset — the western-facing walls glow golden. Dinner
                      at Restaurant La Portugaise inside the citadel or at a corniche seafood restaurant
                      (from 80-150 MAD). Evening walk along the port promenade. Estimated Day 1 cost: from 200-400 MAD.
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
                  Day 2: Oualidia, Oysters &amp; Exploration
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Depart early for Oualidia (75 km, 1 hour drive). Stop at Moulay Abdallah ruins
                      en route (free). Arrive at Oualidia lagoon and enjoy fresh oysters at a waterside
                      restaurant (from 60 MAD per dozen). Swim in the calm lagoon waters or walk the beach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to El Jadida via the coast road. Visit the Haras de la Chaouia horse farm
                      (from 50 MAD) if time permits. Alternatively, drive 15 km north to Azemmour for
                      Portuguese ramparts and medina street art (grand taxi from 10 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Final sunset on the Portuguese ramparts. Farewell seafood dinner at the port or
                      a medina restaurant (from 80-120 MAD). Pick up spices and olives from the medina
                      souks as souvenirs. Estimated Day 2 cost: from 300-600 MAD.
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
                  <p className="text-xs text-[var(--text-muted)]">Free heritage walks, port food, public beaches, shared taxis</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 700-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Oualidia trip, restaurant meals, horse farm visit, cistern entry</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-3,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Mazagan resort, fine dining, private transport, golf</p>
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
            Continue Planning Your Morocco Trip
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
            Ready to Explore El Jadida?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the ethereal underground cistern and UNESCO fortress walls to golden Atlantic beaches
            and fresh-shucked oysters in Oualidia, El Jadida offers an authentic coastal Morocco
            experience away from the crowds. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Food Guide
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

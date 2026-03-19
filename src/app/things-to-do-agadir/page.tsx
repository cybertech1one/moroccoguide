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
  Bath,
  Eye,
  Waves,
  Anchor,
  Sunset,
  Fish,
  Mountain,
  Bike,
} from 'lucide-react';

/* ── CONSTANTS ── */

const BASE_URL = 'https://citytoursmorocco.com';

/* ── SEO METADATA ── */

export const metadata: Metadata = {
  title: 'Top 15+ Things to Do in Agadir 2026 | Complete Guide',
  description: 'Discover the best things to do in Agadir in 2026. Beach promenade, Kasbah Oufella, Souk El Had, Crocoparc, Paradise Valley, Taghazout surfing, golf, hammam, seafood port, and more. Prices in MAD and insider tips.',
  keywords: ['things to do in Agadir', 'Agadir attractions', 'what to do in Agadir', 'Agadir activities', 'Agadir sightseeing', 'Agadir beach', 'Kasbah Oufella', 'Souk El Had Agadir', 'Crocoparc Agadir', 'Paradise Valley Morocco', 'Taghazout surfing', 'Agadir golf', 'Agadir hammam', 'Agadir seafood', 'Valley of the Birds Agadir', 'Amazigh Heritage Museum', 'Agadir camel rides', 'Agadir boat cruise', 'Tiznit day trip', 'Agadir 2026', 'Agadir travel guide', 'best Agadir experiences'],
  openGraph: {
    title: 'Top 15+ Things to Do in Agadir 2026 | Complete Guide',
    description: 'The complete guide to Agadir activities and experiences. Beach, Kasbah Oufella, Souk El Had, surfing, golf, Paradise Valley, and more with prices in MAD.',
    url: `${BASE_URL}/things-to-do-agadir`,
    images: [{ url: `${BASE_URL}/images/hero-agadir.webp`, width: 1200, height: 630, alt: 'Panoramic view of Agadir beach and promenade with the Atlantic Ocean and modern waterfront hotels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 15+ Things to Do in Agadir 2026',
    description: 'Beach, Kasbah Oufella, Souk El Had, Crocoparc, surfing at Taghazout, Paradise Valley, golf, hammam, and more. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-agadir.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-agadir` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-agadir`,
  name: 'Top 15+ Things to Do in Agadir 2026 | Complete Guide',
  description: 'Discover the best things to do in Agadir in 2026. From the sweeping beach promenade and Kasbah Oufella to surfing Taghazout, Paradise Valley, and world-class golf.',
  url: `${BASE_URL}/things-to-do-agadir`,
  image: `${BASE_URL}/images/hero-agadir.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-19', dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/things-to-do-agadir`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'City', name: 'Agadir', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Agadir', item: `${BASE_URL}/agadir` },
    { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-agadir` },
  ] },
};

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What are the top things to do in Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'The top things to do include relaxing on Agadir Beach, visiting Kasbah Oufella for panoramic views, bargain-hunting at Souk El Had, exploring Crocoparc, surfing at Taghazout, a day trip to Paradise Valley, playing world-class golf, visiting the Amazigh Heritage Museum, a sunset boat cruise, camel rides on the beach, and enjoying fresh seafood at the port.' } },
  { '@type': 'Question', name: 'How many days do you need in Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Three to four days is ideal. Day 1: beach, promenade, and Kasbah Oufella sunset. Day 2: Souk El Had, Amazigh Museum, Valley of the Birds, and seafood port. Day 3: Paradise Valley or Taghazout surfing. Day 4: golf, hammam, and boat cruise. With two days, focus on beach, Kasbah, souk, and one day trip.' } },
  { '@type': 'Question', name: 'Is Agadir good for surfing?', acceptedAnswer: { '@type': 'Answer', text: 'Agadir itself has gentle beach breaks suited to beginners. For serious surfing, Taghazout — just 19 km north — is one of the best surf destinations in Africa. Anchor Point, Killer Point, and Hash Point offer world-class right-hand point breaks from September to April. Surf camps and lessons are widely available from 250 MAD.' } },
  { '@type': 'Question', name: 'What is the best time to visit Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Agadir enjoys over 300 days of sunshine per year. October to April is peak season with pleasant temperatures of 20-26 degrees. Summer is hotter but tempered by ocean breezes. Winter is ideal for escaping European cold.' } },
  { '@type': 'Question', name: 'Is Agadir expensive?', acceptedAnswer: { '@type': 'Answer', text: 'Agadir is affordable. Fresh grilled fish at the port from 50-100 MAD, Souk El Had shopping from 10 MAD, Kasbah Oufella is free. Budget travelers enjoy it on from 300-500 MAD per day. Mid-range travelers spend from 700-1,500 MAD per day.' } },
  { '@type': 'Question', name: 'What is Paradise Valley near Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Paradise Valley is a stunning natural gorge in the Atlas foothills, about 30 km northeast of Agadir. Crystal-clear natural pools, palm-lined ravines, and dramatic rock formations make it a perfect day trip. Entry is free but a local guide is recommended (from 100 MAD).' } },
] };

/* ═══════════════════════════════════════════════════════════════
   DATA: BEACHES & WATERFRONT
   ═══════════════════════════════════════════════════════════════ */

const beachAttractions = [
  {
    name: 'Agadir Beach & Promenade',
    icon: Waves,
    category: 'Beach & Leisure',
    price: 'Free',
    duration: '2-5 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'Agadir boasts a magnificent 10-kilometer crescent of golden sand — one of the longest and finest beaches in Morocco. The wide promenade is lined with palm trees, cafes, and hotels. The beach has sunbed and parasol rentals, lifeguards during peak season, and gentle waves perfect for swimming. Water temperature ranges from 17 degrees in winter to 22 degrees in summer.',
    insiderTip:
      'Sunbeds and parasols cost from 30-50 MAD per day. The southern end near the marina is calmer and less crowded. The promenade is perfect for evening strolls — the sunset paints the entire waterfront gold.',
  },
  {
    name: 'Sunset Boat Cruise',
    icon: Anchor,
    category: 'Maritime Experience',
    price: 'From 250 MAD (shared) / From 1,500 MAD (private)',
    duration: '2-3 hours',
    bestTime: 'Late afternoon (departs 4-5 PM)',
    description:
      'Sailing along the Agadir coastline as the sun descends over the Atlantic is unforgettable. Cruises depart from Agadir Marina, passing the fishing port, beach panorama, and rocky coastline. Many include refreshments, fishing, and dolphin spotting. The view of the illuminated "God, Country, King" inscription on the hillside as you return after dark is spectacular.',
    insiderTip:
      'Book a shared cruise for the best value (from 250 MAD including drinks). Dolphin sightings are most common May to October. Bring a light jacket — it gets breezy on the water even in summer.',
  },
  {
    name: 'Camel Rides on the Beach',
    icon: Sunset,
    category: 'Beach Experience',
    price: 'From 150 MAD (30 min) / From 300 MAD (sunset ride)',
    duration: '30 minutes - 2 hours',
    bestTime: 'Late afternoon for sunset',
    description:
      'A quintessential Agadir experience: riding a camel along the golden beach with Atlantic waves crashing beside you. Operators line the southern beach stretch, offering rides from a 30-minute trot to a full sunset expedition. The dramatic backdrop of the setting sun over the ocean creates an iconic Moroccan memory.',
    insiderTip:
      'Negotiate prices directly on the beach — starting prices are flexible outside peak season. The sunset ride (from 300 MAD) offers the best light for photos. Wear long trousers to avoid saddle chafing.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LANDMARKS & CULTURE
   ═══════════════════════════════════════════════════════════════ */

const landmarkAttractions = [
  {
    name: 'Kasbah Oufella (Agadir Oufella)',
    icon: Landmark,
    category: 'Historical Landmark',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Sunset (golden hour)',
    description:
      'Perched 236 meters above the city, the ruins of Kasbah Oufella are the most significant historical site in Agadir. Built in 1540 by the Saadian dynasty against Portuguese invasion, the fortress was largely destroyed in the devastating 1960 earthquake. Today the restored rampart walls and the Arabic inscription "God, Country, King" remain. The panoramic views over the bay, city, port, and Atlas Mountains are breathtaking.',
    insiderTip:
      'Visit at sunset when the entire bay turns golden. A taxi costs from 30-50 MAD one way, or walk the steep road in about 40 minutes. Bring water — there are no facilities at the top.',
  },
  {
    name: 'Amazigh Heritage Museum',
    icon: Globe,
    category: 'Museum & Culture',
    price: 'From 20 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'This excellent museum celebrates Amazigh (Berber) culture of the Souss region. The collection spans centuries: intricate silver jewelry, hand-woven carpets, traditional costumes, carved wooden items, and ceramics. Well-curated displays with English, French, and Arabic explanations provide essential context for understanding the indigenous culture that defines southern Morocco.',
    insiderTip:
      'Allow at least an hour — the jewelry and textile collections are outstanding. Centrally located on Avenue Hassan II. Visit before Souk El Had to recognize authentic Amazigh craftsmanship.',
  },
  {
    name: 'Valley of the Birds (Vallee des Oiseaux)',
    icon: Heart,
    category: 'Park & Nature',
    price: 'Free',
    duration: '45 minutes - 1.5 hours',
    bestTime: 'Morning (cooler temperatures)',
    description:
      'A narrow, lush ravine park cutting through the city center between the beach and the main boulevard. Home to exotic birds including flamingos, parrots, and macaws, plus Barbary sheep, deer, and monkeys. Shaded walkways, waterfalls, and bridges make it a peaceful escape from the beachfront buzz.',
    insiderTip:
      'Completely free and centrally located — perfect for a break between the beach and shopping. Children love the animal enclosures. Visit in the morning when animals are most active.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING & MARKETS
   ═══════════════════════════════════════════════════════════════ */

const shoppingExperiences = [
  {
    name: 'Souk El Had',
    icon: ShoppingBag,
    category: 'Market & Shopping',
    price: 'Free to explore',
    duration: '2-4 hours',
    bestTime: 'Morning (before noon)',
    description:
      'The largest souk in southern Morocco with over 6,000 stalls sprawling across a massive walled compound. Organized into distinct sections — produce, spices, argan products, leather, clothing, ceramics — it is an authentic market experience without the tourist markup of Marrakech. The produce section overflows with Souss Valley oranges, dates, and olives.',
    insiderTip:
      'Enter through Bab 1 for orientation. Argan oil near Bab 3 from 100-200 MAD per liter. Haggling is expected: start at half. Sunday is market day. Carry small bills.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NATURE & ADVENTURE
   ═══════════════════════════════════════════════════════════════ */

const natureAdventures = [
  {
    name: 'Crocoparc',
    icon: Eye,
    category: 'Nature Park',
    price: 'From 70 MAD (adult) / From 40 MAD (child)',
    duration: '1.5-2.5 hours',
    bestTime: 'Morning (10-11 AM for feeding)',
    description:
      'A beautifully designed crocodile park 14 km from Agadir, home to over 300 Nile crocodiles in landscaped enclosures. The park also features giant tortoises, iguanas, pythons, and a cactus garden with over 400 species. Feeding demonstrations make it fascinating for all ages.',
    insiderTip:
      'Arrive by 10 AM for crocodile feeding. A taxi costs from 50-80 MAD. The on-site cafe overlooks the main pool. Allow at least 2 hours for the botanical gardens.',
  },
  {
    name: 'Paradise Valley Day Trip',
    icon: Mountain,
    category: 'Nature & Swimming',
    price: 'Free (entry) / From 400 MAD (guided tour)',
    duration: 'Half or full day',
    bestTime: 'April to October (warm enough to swim)',
    description:
      'About 30 km northeast in the Atlas foothills, Paradise Valley is a breathtaking gorge with turquoise rock pools, palm groves, and cliff formations. Crystal-clear pools are perfect for swimming and flat rocks provide natural sunbathing platforms. Local Berber cafes serve tagine and mint tea. The drive through argan forests with goats climbing trees is an experience in itself.',
    insiderTip:
      'Hire a local guide at the entrance (from 100 MAD) to find the best pools. Wear sturdy sandals — rocks are smooth and wet. Rental car from 250 MAD per day or shared taxis from 40 MAD. Avoid Sundays when pools get crowded.',
  },
  {
    name: 'Taghazout Surfing',
    icon: Wind,
    category: 'Water Sports & Surf Culture',
    price: 'From 250 MAD (lesson) / From 100 MAD (board rental)',
    duration: 'Half or full day',
    bestTime: 'September to April (best swells)',
    description:
      'Just 19 km north, the surf mecca of Taghazout offers some of the best waves in Africa. Anchor Point, Killer Point, and Hash Point deliver world-class right-hand point breaks every winter. Beginners find gentler waves at Panorama Beach. The village is a charming maze of blue-and-white houses, surf shops, and rooftop cafes.',
    insiderTip:
      'December to February has the biggest swells. Beginners: start at Panorama or Tamraght beach. 2-hour lesson from 250 MAD including wetsuit and board. Grand taxis from 15-20 MAD per person. Village cafes serve fish tagine from 50 MAD.',
  },
  {
    name: 'Banana Plantation Visit',
    icon: Sparkles,
    category: 'Agricultural Experience',
    price: 'From 50 MAD (guided visit)',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'The Souss Valley is Morocco premier banana-growing region. Guided visits reveal how tropical fruit thrives in semi-arid climate using ingenious irrigation. Walk through banana rows, learn cultivation methods, and sample fresh fruit. Some plantations also grow avocados, mangoes, and papayas.',
    insiderTip:
      'Plantations are along the N1 highway south. Ask your hotel to arrange a visit or combine with Tiznit. Fresh banana juice at roadside stalls from 10 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD & WELLNESS
   ═══════════════════════════════════════════════════════════════ */

const foodAndWellness = [
  {
    name: 'Seafood at the Fishing Port',
    icon: Fish,
    category: 'Culinary Experience',
    price: 'From 50-120 MAD (meal)',
    duration: '1-2 hours',
    bestTime: 'Lunch (12-2 PM for freshest catch)',
    description:
      'The Agadir fishing port is one of the largest sardine ports in the world, and the restaurants lining the harbor serve astonishingly fresh fish at local prices. Choose from sardines, sole, sea bream, shrimp, or calamari — grilled or fried to order with salad, bread, and sauces. The atmosphere is lively, surrounded by fishing boats and port bustle.',
    insiderTip:
      'Restaurants inside the port area offer better prices than the marina. Mixed seafood plate from 80-120 MAD. Sardines from 30-50 MAD for a full plate. Go at lunchtime for the freshest morning catch.',
  },
  {
    name: 'Traditional Hammam & Spa',
    icon: Bath,
    category: 'Wellness & Culture',
    price: 'From 20 MAD (public) / From 250 MAD (tourist spa)',
    duration: '1-2.5 hours',
    bestTime: 'Afternoon or evening',
    description:
      'After a day of sun and sand, a traditional hammam is the ultimate Agadir experience. Progressively warmer steam rooms, vigorous exfoliation with kessa glove and black soap, then rinsing and relaxation. Both authentic neighborhood hammams and luxury resort spas with argan oil treatments unique to the Souss region are available.',
    insiderTip:
      'Neighborhood hammam from 20 MAD entry, from 60 MAD with scrub. Buy kessa glove and black soap at Souk El Had (from 25 MAD). Resort spas offer hammam with argan massage from 400 MAD — an Agadir specialty.',
  },
  {
    name: 'Golf Courses',
    icon: Bike,
    category: 'Sport & Leisure',
    price: 'From 450 MAD (18 holes) / From 250 MAD (9 holes)',
    duration: '3-5 hours',
    bestTime: 'Morning (cooler temperatures)',
    description:
      'Agadir is Morocco premier golf destination with championship courses set against ocean, desert, and Atlas Mountain backdrops. Golf du Soleil, Royal Golf Agadir, and Ocean Golf are the most renowned. Over 300 sunny days with mild winters make year-round play possible.',
    insiderTip:
      'Green fees are far cheaper than European courses. Afternoon tee times from 300 MAD. Club rental from 200 MAD. Royal Golf Agadir (founded 1952) has eucalyptus-lined fairways. Winter is peak season — book ahead.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    name: 'Tiznit Day Trip',
    icon: Compass,
    category: 'Cultural Day Trip',
    price: 'From 25 MAD (bus) / From 500 MAD (guided tour)',
    duration: 'Half or full day',
    description:
      'The walled town of Tiznit (90 km south) is the silver jewelry capital of Morocco. The medina enclosed by 5 km of 19th-century ramparts houses dozens of workshops where Amazigh artisans craft fibulas, bracelets, and necklaces. Thursday souk is vibrant. Tiznit also has a beautiful mellah and the sacred spring of Lalla Tiznit.',
    insiderTip:
      'Buses from 25 MAD (1.5 hours). Jewelers Souk: silver from 50 MAD simple, from 300 MAD elaborate. Thursday is market day. Combine with Aglou beach (30 km west) for a full day.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIPS
   ═══════════════════════════════════════════════════════════════ */

const budgetTips = [
  { tip: 'Eat at the Fishing Port', icon: Fish, description: 'Skip the marina restaurants and eat at the port grills. Grilled sardines, sole, or shrimp from 50-100 MAD.', savings: 'Save from 80-150 MAD per meal' },
  { tip: 'Free Beach All Day', icon: Waves, description: 'The 10 km beach costs nothing. Bring your own towel and snacks from Souk El Had.', savings: 'Save from 50-100 MAD on sunbed rental' },
  { tip: 'Shared Grand Taxi to Taghazout', icon: MapPin, description: 'A shared grand taxi costs from 15-20 MAD per person vs. organized tours at from 500 MAD.', savings: 'Save from 300-400 MAD vs. tour' },
  { tip: 'Public Hammam Experience', icon: Bath, description: 'Neighborhood hammam from 20 MAD entry, from 60 MAD with scrub. Hotel spas charge from 250-500 MAD.', savings: 'Save from 200-400 MAD per visit' },
  { tip: 'Buy Argan Oil at Souk El Had', icon: Heart, description: 'Genuine argan oil from 100-200 MAD per liter at the souk vs. from 300-500 MAD in tourist shops.', savings: 'Save from 100-300 MAD per liter' },
  { tip: 'Walk to Kasbah Oufella', icon: Footprints, description: 'The steep walk takes 40 minutes but saves a taxi fare. The ruins and panoramic views are free.', savings: 'Free — save from 50-80 MAD taxi' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INSIDER TIPS
   ═══════════════════════════════════════════════════════════════ */

const insiderTips = [
  { tip: 'Sun Protection Is Essential', icon: Sun, description: 'Agadir averages 300+ sunny days per year. UV is intense even in winter. Apply SPF 50, wear a hat, and reapply after swimming.' },
  { tip: 'Carry Small Bills', icon: CheckCircle, description: 'Souk El Had vendors and grand taxi drivers rarely have change for 200 MAD notes. Get small bills from ATMs beforehand.' },
  { tip: 'Learn a Few Tashelhit Words', icon: Globe, description: 'The local Amazigh dialect is Tashelhit. Saying "barakallahufik" (thank you) or "mnshk" (how much) earns warmth from locals.' },
  { tip: 'Wind Picks Up After Noon', icon: Wind, description: 'Agadir gets breezy in the afternoon. Plan beach time for the morning. Great for kitesurfing but less ideal for sunbathing.' },
  { tip: 'Earthquake Memorial Awareness', icon: AlertTriangle, description: 'The 1960 earthquake destroyed the old city and killed 15,000 people. Agadir was entirely rebuilt. Be respectful at Kasbah and memorial sites.' },
  { tip: 'Best Photography Spots', icon: Camera, description: 'Kasbah Oufella at sunset for bay views, the fishing port at dawn, Paradise Valley for nature, and the promenade at golden hour.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQS
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  { question: 'What are the top things to do in Agadir?', answer: 'The top things to do include Agadir Beach and promenade (free), Kasbah Oufella sunset views (free), Souk El Had shopping (free), Crocoparc (from 70 MAD), surfing at Taghazout (from 250 MAD), Paradise Valley (free entry), golf (from 450 MAD), Amazigh Heritage Museum (from 20 MAD), sunset boat cruise (from 250 MAD), camel beach rides (from 150 MAD), and fresh seafood at the port (from 50 MAD).' },
  { question: 'How many days do you need in Agadir?', answer: 'Three to four days is ideal. Day 1: beach, Kasbah Oufella sunset. Day 2: Souk El Had, Amazigh Museum, seafood port. Day 3: Paradise Valley or Taghazout surfing. Day 4: golf, hammam, boat cruise. With two days, focus on beach, Kasbah, souk, and one excursion.' },
  { question: 'Is Agadir good for surfing?', answer: 'The beach has gentle waves for beginners. For serious surfing, Taghazout (19 km north, from 15 MAD by grand taxi) is world-class. Anchor Point and Killer Point offer epic right-hand point breaks September to April. Surf lessons from 250 MAD.' },
  { question: 'What is the best time to visit Agadir?', answer: 'Agadir enjoys over 300 days of sunshine. October to April is peak season with 20-26 degree temperatures. Summer is warmer but ocean breezes keep it comfortable. Surfing is best September to April; golf is excellent year-round.' },
  { question: 'Is Agadir expensive?', answer: 'Very affordable. Port seafood from 50-100 MAD, Souk El Had shopping from 10 MAD, Kasbah and beach are free. Budget: from 300-500 MAD per day. Mid-range: from 700-1,500 MAD per day.' },
  { question: 'How do I get to Paradise Valley from Agadir?', answer: 'Paradise Valley is about 30 km northeast. Options: rental car (from 250 MAD per day), shared grand taxi (from 40 MAD per person), or organized tour (from 400 MAD). The drive takes about 45 minutes through argan forests.' },
  { question: 'What is Paradise Valley?', answer: 'A stunning natural gorge in the Atlas foothills with turquoise rock pools, palm groves, and cliff formations. Perfect for swimming April to October. Entry is free; local guides from 100 MAD.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { href: '/agadir', icon: MapPin, title: 'Agadir City Guide', description: 'Complete guide to Agadir: neighborhoods, transport, accommodation, and planning.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean.' },
  { href: '/surfing', icon: Wind, title: 'Surfing in Morocco', description: 'Best surf spots from Taghazout and Essaouira to Imsouane and Sidi Kaouki.' },
  { href: '/morocco-golf-courses', icon: Star, title: 'Morocco Golf Courses', description: 'Championship courses across Morocco with green fees, booking tips, and reviews.' },
  { href: '/morocco-spa-guide', icon: Bath, title: 'Morocco Spa Guide', description: 'Traditional hammams and luxury spas across Morocco with prices and etiquette.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ThingsToDoAgadirPage() {
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
            backgroundImage: 'url(/images/hero-agadir.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/agadir" className="hover:text-white transition-colors">
              Agadir
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
            <br className="hidden md:block" /> in Agadir
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From golden beaches and ancient hilltop ruins to world-class surfing and hidden mountain pools.
            Your complete 2026 guide to Morocco&apos;s sunniest coastal city, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Agadir: Where the Sun Meets the Atlantic
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Agadir is a city reborn. After a devastating earthquake flattened the old city in 1960, Morocco rebuilt it as a modern resort destination — wide boulevards, a sweeping 10-kilometer beach, and a climate delivering over 300 days of sunshine per year. Where Marrakech seduces with ancient alleys and Fes with medieval grandeur, Agadir wins with endless golden sand, year-round warmth, and the laid-back rhythm of a coastal city that lives for the ocean.
              </p>
              <p>
                But Agadir is far more than a beach resort. Kasbah Oufella tells the story of a city predating its modern incarnation by centuries. Souk El Had pulses with over 6,000 stalls. Taghazout, just 19 km north, draws surfers from around the globe. And Paradise Valley reveals turquoise swimming pools beneath Atlas cliffs. This guide covers 15+ of the best things to do in Agadir with real 2026 prices in MAD and insider tips.
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
            Short on time? These are the ten experiences that define a visit to Agadir.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Agadir Beach & Promenade', price: 'Free', time: '2-5 hours', category: 'Beach' },
              { rank: 2, name: 'Kasbah Oufella at Sunset', price: 'Free', time: '1-2 hours', category: 'Historical' },
              { rank: 3, name: 'Souk El Had Shopping', price: 'Free to explore', time: '2-4 hours', category: 'Market' },
              { rank: 4, name: 'Taghazout Surfing', price: 'From 250 MAD', time: 'Half day', category: 'Water Sports' },
              { rank: 5, name: 'Paradise Valley Day Trip', price: 'Free (entry)', time: 'Half/full day', category: 'Nature' },
              { rank: 6, name: 'Seafood at the Fishing Port', price: 'From 50 MAD', time: '1-2 hours', category: 'Culinary' },
              { rank: 7, name: 'Crocoparc', price: 'From 70 MAD', time: '1.5-2.5 hours', category: 'Nature Park' },
              { rank: 8, name: 'Sunset Boat Cruise', price: 'From 250 MAD', time: '2-3 hours', category: 'Maritime' },
              { rank: 9, name: 'Traditional Hammam', price: 'From 20 MAD', time: '1-2.5 hours', category: 'Wellness' },
              { rank: 10, name: 'Camel Beach Ride', price: 'From 150 MAD', time: '30 min - 2 hours', category: 'Beach' },
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

      {/* ── Beaches & Waterfront ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beaches &amp; Waterfront
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Agadir 10-kilometer golden beach is the centerpiece. From swimming and sunbathing to camel rides and sunset cruises, the waterfront delivers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing may apply.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {beachAttractions.map((attraction) => {
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

      {/* ── Landmarks & Culture ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Landmarks &amp; Culture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Though rebuilt after the 1960 earthquake, Agadir preserves heritage through the hilltop Kasbah, an outstanding Amazigh museum, and a green city oasis.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most cultural attractions are free or very affordable. Opening times may change during Ramadan.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {landmarkAttractions.map((item) => {
              const LandIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <LandIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* ── Shopping & Markets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Markets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Souk El Had is one of the largest markets in Morocco — authentic shopping with local prices and true souk vibrancy.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Haggling is expected. Start at half the asking price.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {shoppingExperiences.map((item) => {
              const ShopIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ShopIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* ── Nature & Adventure ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nature &amp; Adventure
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Crocodile parks, hidden mountain pools, world-class surfing, and tropical plantations — the Agadir area is packed with adventure.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Paradise Valley and Taghazout are easily reached independently or with organized tours.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {natureAdventures.map((item) => {
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

      {/* ── Food & Wellness ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food, Wellness &amp; Sport
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fresh Atlantic seafood, traditional hammam rituals, and championship golf make Agadir a destination for body and soul.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Seafood prices vary by catch and season. Golf fees are lowest in summer and for afternoon tee times.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodAndWellness.map((item) => {
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

      {/* ── Day Trips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond the city: walled silver towns, argan forests, and dramatic coastline waiting to be explored.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Starting prices per person. Self-guided options available for all destinations.
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

      {/* ── Budget Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Agadir
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
            Insider Tips for Agadir
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

      {/* ── Sample 3-Day Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 3-Day Agadir Itinerary
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
                  Day 1: Beach, Culture &amp; Sunset
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Morning: </span>
                    Beach walk along the 10 km promenade (free). Swim and relax. Visit Valley of the Birds (free).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Afternoon: </span>
                    Souk El Had (free) for argan oil and spices. Amazigh Heritage Museum (from 20 MAD). Lunch near the souk (from 40-80 MAD).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Evening: </span>
                    Kasbah Oufella for sunset (from 30 MAD taxi). Dinner at the port — grilled seafood from 50-100 MAD. Day 1 cost: from 150-300 MAD.
                  </p>
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
                  Day 2: Paradise Valley or Taghazout
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Morning: </span>
                    Option A: Paradise Valley (from 40 MAD taxi) — swim in turquoise pools. Option B: Taghazout surf lesson (from 250 MAD).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Afternoon: </span>
                    Lunch: Berber tagine or fish tagine from 50 MAD. Explore the surf village or continue swimming. Return to Agadir.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Evening: </span>
                    Hammam (from 20 MAD public / from 250 MAD spa). Promenade dinner (from 80-150 MAD). Day 2 cost: from 200-600 MAD.
                  </p>
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
                  Day 3: Nature, Leisure &amp; Farewell
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Morning: </span>
                    Crocoparc (from 70 MAD) for crocodile feeding and botanical gardens, or golf (from 450 MAD).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Afternoon: </span>
                    Camel ride on the beach (from 150 MAD). Final souk shopping. Lunch at the port (from 60 MAD).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Evening: </span>
                    Sunset boat cruise (from 250 MAD). Farewell dinner on the promenade (from 100 MAD). Day 3 cost: from 350-900 MAD.
                  </p>
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-1,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Port grills, free beach, public hammam, shared taxis</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-3,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Surf lesson, Crocoparc, boat cruise, restaurant dinners</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 3,500-6,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private tours, spa hammam, golf, fine dining, private boat</p>
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
            Continue Planning Your Agadir Trip
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
            Ready to Explore Agadir?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From golden beaches and hilltop ruins to world-class surfing and hidden mountain pools,
            Agadir offers experiences that will stay with you forever. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agadir"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Agadir City Guide
            </Link>
            <Link
              href="/surfing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Wind className="w-5 h-5" />
              Surfing in Morocco
            </Link>
            <Link
              href="/morocco-spa-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Bath className="w-5 h-5" />
              Morocco Spa Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

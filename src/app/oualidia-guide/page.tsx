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
  Sunset,
  Shell,
  TreesIcon,
  Mountain,
  Coffee,
  MoonStar,
  Binoculars,
  Car,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Oualidia Guide 2026 | Morocco\'s Oyster Capital & Lagoon Paradise',
  description:
    'Complete guide to Oualidia, Morocco. Explore the stunning Atlantic lagoon, taste fresh oysters at Parc No.7, kayak protected waters, visit the Kasbah ruins, watch flamingos, and enjoy world-class seafood. Prices in MAD and insider tips.',
  keywords: [
    'oualidia morocco',
    'oualidia oysters',
    'oualidia lagoon',
    'oualidia beach',
    'oualidia guide',
    'oualidia seafood',
    'oualidia oyster farms',
    'oualidia bird watching',
    'oualidia kasbah',
    'oualidia salt flats',
    'oualidia day trip',
    'oualidia surfing',
    'oualidia flamingos',
    'oualidia travel guide',
    'oualidia atlantic coast morocco',
    'oualidia Hassan II villa',
    'parc no 7 oualidia',
    'oualidia 2026',
  ],
  openGraph: {
    title: 'Oualidia Guide 2026 | Morocco\'s Oyster Capital & Lagoon Paradise',
    description:
      'The complete guide to Oualidia: Atlantic lagoon, oyster farms, kayaking, bird watching, Kasbah ruins, salt flats, and world-class seafood. Real prices in MAD and local tips.',
    url: `${BASE_URL}/oualidia-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-oualidia.webp`,
        width: 1200,
        height: 630,
        alt: 'Aerial view of Oualidia lagoon with turquoise waters, golden sand, and the Atlantic coast of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oualidia Guide 2026 | Morocco\'s Oyster Capital',
    description:
      'Atlantic lagoon, fresh oysters, kayaking, flamingos, Kasbah ruins, and world-class seafood. Complete Oualidia guide with real prices.',
    images: [`${BASE_URL}/images/hero-oualidia.webp`],
  },
  alternates: { canonical: `${BASE_URL}/oualidia-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/oualidia-guide`,
  name: 'Oualidia Guide 2026 | Morocco\'s Oyster Capital & Lagoon Paradise',
  description:
    'Complete guide to Oualidia, Morocco. Explore the stunning Atlantic lagoon, taste fresh oysters, kayak protected waters, visit the Kasbah, and enjoy world-class seafood.',
  url: `${BASE_URL}/oualidia-guide`,
  image: `${BASE_URL}/images/hero-oualidia.webp`,
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
  mainEntityOfPage: `${BASE_URL}/oualidia-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Oualidia',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Oualidia Guide', item: `${BASE_URL}/oualidia-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Oualidia known for?', acceptedAnswer: { '@type': 'Answer', text: 'Oualidia is known as Morocco\'s oyster capital. The town sits on a stunning Atlantic lagoon where oyster farms produce some of the finest oysters in Africa. The protected lagoon offers calm swimming, kayaking, and exceptional bird watching, including flamingos and herons. The seafood restaurants here are considered among the best in Morocco.' } },
    { '@type': 'Question', name: 'How do you get to Oualidia?', acceptedAnswer: { '@type': 'Answer', text: 'Oualidia is located on the Atlantic coast between El Jadida (75 km north) and Safi (65 km south). The easiest way is by car or grand taxi from El Jadida (about 1.5 hours) or from Casablanca (about 3 hours via the motorway to El Jadida then the coast road). CTM and Supratours buses also serve Oualidia from major cities, though schedules are limited.' } },
    { '@type': 'Question', name: 'When is the best time to visit Oualidia?', acceptedAnswer: { '@type': 'Answer', text: 'April to June and September to October are ideal, with warm weather (22-28 degrees), calm lagoon waters, and fewer crowds. July and August are busy with Moroccan holidaymakers and accommodation prices rise. Winter (November to March) is quieter but still mild, and the oysters are at their best. Bird watching is exceptional from November to March when migratory species arrive.' } },
    { '@type': 'Question', name: 'Are Oualidia oysters safe to eat?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Oualidia oysters are cultivated in monitored lagoon waters and are considered among the safest and finest in Africa. The main oyster farm, Parc No.7, follows strict hygiene standards. Oysters are best eaten at the farm itself or at reputable restaurants. A dozen oysters costs from 80-150 MAD depending on size and season.' } },
    { '@type': 'Question', name: 'How many days do you need in Oualidia?', acceptedAnswer: { '@type': 'Answer', text: 'One to two days is ideal. A single full day covers the lagoon, oyster tasting, Kasbah, and a seafood dinner. Two days allows you to add surfing at the outer beach, bird watching, the salt flats, and a more relaxed pace. Oualidia also works well as a day trip from El Jadida or a stopover on a coastal road trip between Casablanca and Essaouira.' } },
    { '@type': 'Question', name: 'Can you swim in the Oualidia lagoon?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the Oualidia lagoon is one of the safest swimming spots on the Moroccan Atlantic coast. The sandbar protects the lagoon from ocean waves, creating calm, shallow waters ideal for families and children. The water is warmest from June to September. The outer beach beyond the sandbar has stronger waves suitable for surfing.' } },
  ],
};

/* ===============================================================
   DATA: LAGOON & WATER ACTIVITIES
   =============================================================== */

const lagoonActivities = [
  {
    name: 'Oualidia Lagoon',
    icon: Waves,
    category: 'Natural Wonder',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The Oualidia lagoon is one of Morocco\'s most beautiful natural treasures. A crescent-shaped body of turquoise water protected from the Atlantic by a natural sandbar, it creates a sheltered paradise unlike anything on the wild Moroccan coast. The lagoon stretches for about 4 km, its shallow waters shifting between sapphire blue and emerald green depending on the tide. At low tide, golden sandbars emerge, creating natural pools perfect for wading. Local fishermen glide across in painted wooden boats, and the surrounding cliffs glow amber in the evening light. Swimming here feels like a private Mediterranean cove transplanted to the Atlantic.',
    insiderTip:
      'The lagoon is tidal, so conditions change dramatically. High tide fills the lagoon with deep clear water ideal for swimming and kayaking. Low tide reveals sandbars and tidal pools. Check tide times and plan accordingly. The southern end of the lagoon near the oyster farms is quieter and less developed than the town-facing shore.',
  },
  {
    name: 'Kayaking the Lagoon',
    icon: Anchor,
    category: 'Water Sport',
    price: 'From 100 MAD per hour',
    duration: '1-3 hours',
    bestTime: 'Morning (calmest water)',
    description:
      'Kayaking the Oualidia lagoon is a serene experience unmatched on the Moroccan coast. The protected waters mean zero ocean swell, allowing even beginners to paddle confidently. Glide past oyster farm floats, over seagrass meadows, and along sandbar edges where wading birds feed. The full lagoon loop takes 2-3 hours at a relaxed pace, passing fishing boats, cliff faces, and secluded sandy coves. Some operators offer double kayaks and stand-up paddleboards. The clarity of the water allows you to see fish and crabs below, and the surrounding silence — broken only by birdsong and gentle lapping — makes it deeply meditative.',
    insiderTip:
      'Rent from the guesthouses or small operators along the lagoon shore rather than the beach hawkers, who charge more. Morning is best — the water is glassy calm and the light on the cliffs is golden. Bring waterproof sun protection and a dry bag for your phone. High tide offers the most navigable water for a full lagoon exploration.',
  },
  {
    name: 'Oualidia Beach & Surfing',
    icon: Wind,
    category: 'Beach & Surf',
    price: 'Free (board rental from 150 MAD)',
    duration: '2-4 hours',
    bestTime: 'All day (surf best at mid-tide)',
    description:
      'Beyond the sheltering sandbar, the outer beach at Oualidia faces the full force of the Atlantic. This long stretch of golden sand catches consistent swells that make it a growing surf destination, far less crowded than Taghazout or Essaouira. The beach break works best at mid-tide with a southwest swell. The beach itself is stunning — wide, clean, and backed by low cliffs — and perfect for long walks even if you do not surf. During summer, local families set up picnic camps, and mobile vendors sell grilled corn and fresh juice. The contrast between the wild outer beach and the calm inner lagoon, separated by just a strip of sand, is remarkable.',
    insiderTip:
      'The surf here is more exposed and powerful than it looks. It suits intermediate surfers; beginners should stick to the lagoon or take a lesson. There are no formal surf schools yet, but some guesthouses can arrange instructors. The beach is also excellent for kitesurfing when the wind picks up, typically afternoon in summer. Walk south along the beach for emptier stretches.',
  },
];

/* ===============================================================
   DATA: OYSTER & FOOD EXPERIENCES
   =============================================================== */

const oysterExperiences = [
  {
    name: 'Parc No.7 Oyster Farm',
    icon: Shell,
    category: 'Culinary Experience',
    price: 'From 80 MAD (dozen oysters)',
    duration: '1-2 hours',
    bestTime: 'Late morning or lunchtime',
    description:
      'Parc No.7 is the legendary heart of Oualidia\'s oyster industry and an essential stop for any visitor. Established decades ago, this working farm cultivates Pacific oysters (Crassostrea gigas) in the nutrient-rich lagoon waters. Visitors sit at simple tables right beside the oyster beds, watching workers harvest and shuck the oysters moments before they land on your plate. The oysters are briny, plump, and extraordinarily fresh — many food writers consider them the finest in Africa. Pair them with fresh lemon, a mignonette sauce, and crusty bread. The farm also serves sea urchins in season (from 60 MAD) and other shellfish. The setting — water lapping beneath your table, seabirds wheeling overhead — elevates the experience from a meal to a memory.',
    insiderTip:
      'Go at lunchtime for the freshest oysters and the liveliest atmosphere. A dozen medium oysters costs from 80 MAD, large from 120 MAD. Add sea urchins if available (winter months). Bring your own white wine — the farm does not always serve alcohol but generally allows you to bring your own. Cash only. No reservation needed on weekdays, but weekends can be busy in summer.',
  },
  {
    name: 'Seafood Restaurants',
    icon: UtensilsCrossed,
    category: 'Dining',
    price: 'From 100 MAD per person',
    duration: '1.5-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'Oualidia has some of the finest seafood restaurants on the entire Moroccan coast, punching well above its weight for a small town. Restaurant Araignee de Mer (The Spider Crab) is legendary for its multi-course seafood feast — platters of oysters, shrimp, crab, calamari, sea bass, and lobster served overlooking the lagoon. Restaurant l\'Initiale at La Sultana offers refined seafood in luxury surroundings. Simpler eateries in the town center serve fresh grilled fish, sardines, and calamari at local prices. The common thread is extraordinary freshness — most fish is caught the same morning from the Atlantic just beyond the sandbar. A seafood lunch in Oualidia is worth a detour from anywhere in Morocco.',
    insiderTip:
      'Restaurant Araignee de Mer is the iconic choice — book ahead on weekends. Expect to pay from 200-400 MAD per person for the full multi-course seafood feast. For budget-friendly options, the small restaurants near the town center serve grilled fish plates from 60-80 MAD. Ask for the catch of the day rather than ordering from the menu for the freshest options. Lobster is seasonal and priced by weight — always confirm the price before ordering.',
  },
  {
    name: 'Salt Flats',
    icon: Sparkles,
    category: 'Cultural & Natural',
    price: 'Free',
    duration: '30-60 minutes',
    bestTime: 'Late afternoon (golden light)',
    description:
      'South of the lagoon, the traditional salt flats of Oualidia have been producing sea salt for centuries using methods that have barely changed. Shallow evaporation ponds carved into the coastal rock fill with seawater at high tide, and as the water evaporates under the fierce Atlantic sun, white salt crystals form in geometric patterns. Workers rake the salt by hand into gleaming white pyramids. The visual effect is striking — grids of pink, white, and turquoise pools against the deep blue Atlantic horizon. The salt produced here, fleur de sel, is prized by Moroccan chefs. Visiting the flats connects you to an ancient coastal tradition and offers some of the most unusual photographic opportunities on the coast.',
    insiderTip:
      'The salt flats are most photogenic in late afternoon when the low sun turns the pools pink and gold. Salt production peaks in summer (June to September) when evaporation is fastest. You can buy bags of fresh fleur de sel directly from the workers for from 20-30 MAD — a unique and lightweight souvenir. The flats are a 10-minute drive south of the lagoon center.',
  },
];

/* ===============================================================
   DATA: NATURE & HERITAGE
   =============================================================== */

const natureHeritage = [
  {
    name: 'Bird Watching',
    icon: Binoculars,
    category: 'Wildlife',
    price: 'Free (guided tours from 200 MAD)',
    duration: '2-4 hours',
    bestTime: 'Early morning or late afternoon',
    description:
      'The Oualidia lagoon is one of Morocco\'s most important bird habitats, recognized as an Important Bird Area by BirdLife International. The combination of sheltered lagoon, tidal flats, marshes, and coastal scrub creates diverse ecosystems that attract over 150 bird species throughout the year. The stars are the greater flamingos — flocks of up to several hundred gather in the shallows during winter and spring, their pink plumage reflecting in the still water. Herons (grey, purple, and cattle egrets), spoonbills, avocets, sandpipers, cormorants, and terns are common year-round. In winter, migratory species from Europe and sub-Saharan Africa swell the numbers. The lagoon\'s shallow edges provide ideal feeding grounds, and the relative quiet of Oualidia means birds are less disturbed than at busier sites.',
    insiderTip:
      'November to March is peak bird-watching season when migratory species arrive. Bring binoculars — flamingos tend to feed at the southern end of the lagoon, away from the town. Early morning offers the best activity and light. A local bird guide can be arranged through guesthouses (from 200 MAD for a half-day). The raised road along the lagoon\'s eastern edge provides excellent vantage points without disturbing the birds.',
  },
  {
    name: 'Kasbah of Oualidia',
    icon: Landmark,
    category: 'Historical Ruins',
    price: 'Free',
    duration: '30-60 minutes',
    bestTime: 'Sunset',
    description:
      'Perched on the hilltop above the lagoon, the ruined Kasbah of Oualidia was built by the Saadian sultan El Oualid in the 17th century — the town itself takes its name from this ruler. The fortified walls and crumbling towers command extraordinary 360-degree views: the turquoise lagoon below, the Atlantic stretching to the horizon, farmland rolling inland, and the distant haze of the coast curving north and south. While the structure is largely in ruins, enough walls and archways remain to evoke its former grandeur as a coastal defensive outpost. The climb up takes just 10-15 minutes from the town and rewards with some of the finest panoramic views on the entire Moroccan coast.',
    insiderTip:
      'Visit at sunset for the most spectacular experience — the lagoon turns gold and crimson as the sun sinks into the Atlantic. The path up starts near the town center and is well-trodden if uneven. Wear sturdy shoes. There is no entrance fee and rarely any other visitors. Bring a camera with a wide-angle lens to capture the full lagoon panorama. The ruins are unfenced, so watch your footing on crumbling walls.',
  },
  {
    name: 'Hassan II Royal Villa',
    icon: Globe,
    category: 'Royal Heritage',
    price: 'Free (exterior only)',
    duration: '15-30 minutes',
    bestTime: 'Any time',
    description:
      'Overlooking the lagoon from a prime clifftop position, the Royal Villa was built for King Hassan II, who was famously fond of Oualidia and its oysters. The villa is said to have played a role in establishing the oyster farms, as the king wanted to bring French-style oyster cultivation to Morocco. While the villa grounds are closed to the public, the exterior is visible from the lagoon road and from the water, its whitewashed walls and green-roofed towers forming one of the most recognizable landmarks of Oualidia. The king\'s patronage put Oualidia on the culinary map and helped protect the lagoon from overdevelopment.',
    insiderTip:
      'You can see the villa well from the kayak on the lagoon or from the road that runs along the eastern shore. Do not attempt to enter the grounds — it is guarded. The best photographs are from the water looking back toward the cliffs. The story of Hassan II and the oysters is part of Oualidia\'s identity — ask any local and they will proudly recount the royal connection.',
  },
];

/* ===============================================================
   DATA: PRACTICAL & BUDGET
   =============================================================== */

const budgetTips = [
  { tip: 'Swim in the Lagoon for Free', icon: Waves, description: 'The lagoon is a public natural area. Swimming, sunbathing on the sandbars, and walking the shore cost nothing. Bring your own towel and snacks for a zero-cost beach day.', savings: 'Free — best beach in the region' },
  { tip: 'Eat Oysters at the Source', icon: Shell, description: 'A dozen oysters at Parc No.7 costs from 80 MAD — far cheaper than the same quality in Casablanca or Marrakech restaurants where they charge from 200-400 MAD per dozen.', savings: 'Save from 100-300 MAD per dozen' },
  { tip: 'Local Restaurants Over Hotels', icon: UtensilsCrossed, description: 'Hotel restaurants in Oualidia charge from 200-500 MAD per person. Local spots in town serve fresh grilled fish plates from 60-80 MAD with the same Atlantic catch.', savings: 'Save from 140-420 MAD per meal' },
  { tip: 'Grand Taxi from El Jadida', icon: Car, description: 'Grand taxis from El Jadida to Oualidia cost from 40-50 MAD per person (shared) vs. organized tours at from 500-800 MAD. The ride takes about 1.5 hours along the scenic coast road.', savings: 'Save from 450-750 MAD vs. tour' },
  { tip: 'Kayak Rental from Guesthouses', icon: Anchor, description: 'Guesthouses rent kayaks from 80-100 MAD per hour. Beach operators charge from 150-200 MAD. Some guesthouses include free kayak use for overnight guests.', savings: 'Save from 50-100 MAD per hour' },
  { tip: 'Buy Salt at the Flats', icon: Sparkles, description: 'Fresh fleur de sel directly from the salt flat workers costs from 20-30 MAD per bag. The same product in Marrakech souvenir shops sells for from 80-120 MAD.', savings: 'Save from 50-90 MAD per bag' },
];

const insiderTips = [
  { tip: 'Tide Timing Is Everything', icon: Waves, description: 'The lagoon transforms with the tides. High tide is best for swimming and kayaking with deep, clear water. Low tide reveals sandbars and tidal pools ideal for wading and photography. Check tide schedules at your guesthouse.' },
  { tip: 'The Coast Road Is Stunning', icon: Compass, description: 'The R301 coast road between El Jadida and Safi through Oualidia is one of Morocco\'s most scenic drives. Rocky coves, fishing villages, and sweeping ocean views make the journey half the experience.' },
  { tip: 'Weekend Crowds', icon: AlertTriangle, description: 'Oualidia is a popular weekend getaway for Moroccans from Casablanca and Marrakech. Visit midweek for a quieter experience, better restaurant availability, and lower accommodation prices.' },
  { tip: 'Bring Binoculars', icon: Binoculars, description: 'Even casual bird watchers will be rewarded. Flamingos, herons, and egrets are visible from the road, but binoculars reveal the full spectacle. Winter months offer the best variety.' },
  { tip: 'Limited Nightlife', icon: MoonStar, description: 'Oualidia is a quiet town. There are no clubs or late-night bars. The evening rhythm is a long seafood dinner, a lagoon-side walk, and stargazing. Embrace the calm — that is the charm.' },
  { tip: 'Photography Light', icon: Camera, description: 'The lagoon faces west, making sunset the golden hour. Late afternoon light on the cliffs, salt flats, and lagoon surface creates extraordinary colors. The Kasbah ruins at sunset are particularly photogenic.' },
];

/* ===============================================================
   DATA: SAMPLE ITINERARY
   =============================================================== */

const dayTripItinerary = {
  morning: 'Arrive early and head straight to the lagoon. Swim or wade in the calm waters at high tide, or explore the emerging sandbars at low tide. Walk along the eastern shore for panoramic views. If you are a bird watcher, bring binoculars — flamingos and herons feed in the shallows, especially at the quieter southern end.',
  midday: 'Make your way to Parc No.7 oyster farm for the essential Oualidia experience. Order a dozen fresh oysters (from 80 MAD), sea urchins if in season, and crusty bread. Sit waterside and savor what many consider the finest oysters in Africa. Alternatively, lunch at Restaurant Araignee de Mer for the famous multi-course seafood feast (from 200 MAD).',
  afternoon: 'Climb to the Kasbah ruins (15 minutes from town center) for sweeping views of the lagoon and Atlantic. Then kayak the lagoon (from 100 MAD per hour) or drive to the outer beach for a walk along the wild Atlantic shore. If time allows, visit the salt flats south of the lagoon for unique photographs.',
  evening: 'Finish with a seafood dinner at a lagoon-side restaurant as the sun sets. The colors on the water during golden hour are extraordinary. Pick up some fleur de sel from the salt flats as a souvenir. The drive back to El Jadida or onward to Safi takes about 1.5 hours.',
};

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Oualidia known for?', answer: 'Oualidia is known as Morocco\'s oyster capital. The town sits on a stunning Atlantic lagoon where oyster farms produce some of the finest oysters in Africa. Beyond oysters, it offers calm lagoon swimming, kayaking, exceptional bird watching (including flamingos), a historic Kasbah, salt flats, and outstanding seafood restaurants.' },
  { question: 'How do you get to Oualidia?', answer: 'Oualidia is on the Atlantic coast between El Jadida (75 km north, 1.5 hours by grand taxi from 40 MAD) and Safi (65 km south). From Casablanca, take the motorway to El Jadida then the R301 coast road (about 3 hours total). CTM buses also serve the route. The coast road is scenic and worth driving.' },
  { question: 'When is the best time to visit Oualidia?', answer: 'April to June and September to October offer the best balance of warm weather, calm lagoon waters, and fewer crowds. Summer (July-August) is busy with Moroccan tourists. Winter is mild and quiet, with the best bird watching (November to March) and peak oyster quality.' },
  { question: 'Are Oualidia oysters safe to eat?', answer: 'Yes, the oysters are cultivated in monitored lagoon waters following strict hygiene standards. Parc No.7 is the most established farm. Oysters are harvested and shucked to order. A dozen medium oysters costs from 80 MAD. Eat at the farm or reputable restaurants for the best quality and safety.' },
  { question: 'How many days do you need in Oualidia?', answer: 'One to two days is ideal. A full day covers the lagoon, oyster tasting, Kasbah, and a seafood dinner. Two days adds surfing, bird watching, salt flats, and kayaking. Oualidia also works as a day trip from El Jadida or a stopover on a Casablanca-Essaouira coastal road trip.' },
  { question: 'Can you swim in the Oualidia lagoon?', answer: 'Yes, the lagoon is one of the safest swimming spots on the Moroccan Atlantic coast. The sandbar protects it from ocean waves, creating calm, shallow waters ideal for families. Water is warmest June to September. The outer beach has stronger waves suitable for surfing.' },
  { question: 'Is there accommodation in Oualidia?', answer: 'Yes, Oualidia has several options ranging from simple guesthouses (from 300 MAD per night) to the luxury La Sultana Oualidia (from 2,500 MAD per night). Most accommodation overlooks the lagoon. Book ahead for weekends and summer holidays when Moroccan families arrive in numbers.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to seafood and street food — the complete cuisine guide.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Morocco Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
  { href: '/el-jadida-guide', icon: MapPin, title: 'El Jadida Guide', description: 'Portuguese cistern, medina ramparts, and Atlantic beaches just 75 km from Oualidia.' },
  { href: '/essaouira', icon: Wind, title: 'Essaouira Guide', description: 'The wind city on the Atlantic — medina, beaches, and seafood south of Oualidia.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function OualidiaGuidePage() {
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
            backgroundImage: 'url(/images/hero-oualidia.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Oualidia Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Shell className="w-4 h-4" />
            Complete Destination Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Oualidia
            <br className="hidden md:block" /> Morocco&apos;s Oyster Capital
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A turquoise Atlantic lagoon, world-class oysters, pink flamingos, and some of the finest
            seafood in Morocco. Your complete 2026 guide to this hidden coastal gem, with real prices and local tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Hidden Jewel of Morocco&apos;s Atlantic Coast
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Tucked between the rugged Atlantic cliffs midway between El Jadida and Safi, Oualidia is one of
                Morocco&apos;s best-kept secrets. This small town of just a few thousand residents sits on a
                crescent-shaped lagoon of improbable beauty — turquoise waters protected from the open ocean by
                a natural sandbar, creating a calm paradise that feels closer to the Caribbean than the wild
                Moroccan Atlantic. The lagoon has made Oualidia famous for two things above all: its oysters
                and its birds.
              </p>
              <p>
                The oyster farms of Oualidia, established with royal patronage from King Hassan II, produce
                what many food critics consider the finest oysters in Africa. At Parc No.7, the legendary farm
                at the lagoon&apos;s edge, you can eat oysters shucked moments ago while sitting over the very
                waters where they grew. The experience is elemental and unforgettable. Beyond the oysters,
                Oualidia&apos;s seafood restaurants serve Atlantic fish with a freshness impossible to replicate
                inland — grilled sea bass, platters of shrimp and crab, and the famous multi-course seafood
                feasts at Restaurant Araignee de Mer.
              </p>
              <p>
                The lagoon is also a sanctuary for birdlife. Flamingos wade in the shallows during winter and
                spring, their pink reflections shimmering in the still water. Herons, spoonbills, egrets, and
                dozens of migratory species make this one of Morocco&apos;s premier bird-watching destinations.
                Add a 17th-century Kasbah with commanding views, traditional salt flats, an emerging surf scene
                on the outer beach, and some of the most spectacular sunsets on the coast, and Oualidia becomes
                a destination that rewards far more than its modest size suggests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top Experiences -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Oualidia Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The essential experiences that make Oualidia one of Morocco&apos;s most rewarding coastal destinations.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Oyster Tasting at Parc No.7', price: 'From 80 MAD', time: '1-2 hours', category: 'Culinary' },
              { rank: 2, name: 'Lagoon Swimming & Sunbathing', price: 'Free', time: '2-4 hours', category: 'Nature' },
              { rank: 3, name: 'Kayaking the Lagoon', price: 'From 100 MAD', time: '1-3 hours', category: 'Water Sport' },
              { rank: 4, name: 'Bird Watching (Flamingos)', price: 'Free', time: '2-4 hours', category: 'Wildlife' },
              { rank: 5, name: 'Kasbah Ruins at Sunset', price: 'Free', time: '30-60 min', category: 'Heritage' },
              { rank: 6, name: 'Seafood Feast at Araignee de Mer', price: 'From 200 MAD', time: '2 hours', category: 'Dining' },
              { rank: 7, name: 'Outer Beach Surfing', price: 'From 150 MAD', time: '2-4 hours', category: 'Surf' },
              { rank: 8, name: 'Salt Flats Visit', price: 'Free', time: '30-60 min', category: 'Cultural' },
              { rank: 9, name: 'Hassan II Royal Villa (Exterior)', price: 'Free', time: '15-30 min', category: 'Heritage' },
              { rank: 10, name: 'Sunset Over the Lagoon', price: 'Free', time: '1 hour', category: 'Experience' },
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

      {/* -- Lagoon & Water Activities -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Lagoon &amp; Water Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The lagoon is Oualidia&apos;s crown jewel — a sheltered natural pool offering calm swimming,
            kayaking, and a wild outer beach for surfing.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Lagoon conditions change with the tides. Check tide times at your guesthouse for the best experience.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {lagoonActivities.map((item) => {
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

      {/* -- Oysters & Seafood -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Oysters &amp; Seafood
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Oualidia is Morocco&apos;s undisputed oyster capital. The lagoon farms and seafood restaurants
            here are a pilgrimage for food lovers from across the country and beyond.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Oysters are available year-round. Quality peaks in cooler months (October to April). Prices may vary seasonally.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {oysterExperiences.map((item) => {
              const OysterIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OysterIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Nature & Heritage -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Binoculars className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nature &amp; Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From flocks of flamingos to a 17th-century Kasbah and a royal villa, Oualidia blends natural
            wonders with centuries of coastal history.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Bird watching peaks November to March. The Kasbah and villa are accessible year-round.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {natureHeritage.map((item) => {
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

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Oualidia
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Oualidia is affordable by coastal Morocco standards. These tips help stretch your dirhams further.
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
            Insider Tips for Oualidia
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to help you make the most of this hidden coastal gem.
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

      {/* -- Sample Day Trip Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Perfect Day in Oualidia
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to experience the best of Oualidia in a single day, whether visiting as a day trip or on a coastal road trip.
          </p>

          <div className="card-moroccan p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Morning (9:00 - 12:00)</p>
                  <p className="text-xs text-[var(--text-secondary)]">{dayTripItinerary.morning}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Midday (12:00 - 14:00)</p>
                  <p className="text-xs text-[var(--text-secondary)]">{dayTripItinerary.midday}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon (14:00 - 17:00)</p>
                  <p className="text-xs text-[var(--text-secondary)]">{dayTripItinerary.afternoon}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Evening (17:00 - 20:00)</p>
                  <p className="text-xs text-[var(--text-secondary)]">{dayTripItinerary.evening}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Summary */}
          <div className="card-moroccan p-6 bg-[var(--surface-muted)] mt-6">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
              Day Trip Budget Summary (per person, excluding transport)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded-lg">
                <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                <p className="text-lg font-bold text-[var(--color-accent)]">From 150-250 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">Free lagoon, oysters at farm, local restaurant, walking</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                <p className="text-lg font-bold text-[var(--color-accent)]">From 400-700 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">Oysters, kayaking, seafood restaurant, salt flat visit</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-2,000 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">La Sultana lunch, full seafood feast, private guide, surf lesson</p>
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
            Continue Planning Your Coastal Trip
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
            Ready to Discover Oualidia?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the finest oysters in Africa to a turquoise lagoon, flamingo-filled shores, and sunsets
            that set the Atlantic ablaze, Oualidia is Morocco&apos;s best-kept coastal secret. Start planning your visit today.
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
              Morocco Food Guide
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

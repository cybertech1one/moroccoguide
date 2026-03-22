import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
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
  Globe,
  AlertTriangle,
  Footprints,
  Waves,
  Ship,
  TreesIcon,
  Coffee,
  Fish,
  Bird,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Guide to Kenitra 2026 | Mehdia Beach, Sidi Boughaba & More',
  description:
    'Discover Kenitra, Morocco in 2026. Mehdia Beach surfing, Mehdia Kasbah, Lac de Sidi Boughaba bird sanctuary, Sebou riverside, souks, and day trips from Rabat. Prices in MAD and local tips.',
  keywords: [
    'kenitra morocco',
    'mehdia beach',
    'kenitra guide',
    'sidi boughaba lake',
    'kenitra things to do',
    'mehdia kasbah',
    'kenitra travel guide',
    'kenitra day trip from rabat',
    'kenitra surfing',
    'gharb plain morocco',
    'moulay bousselham',
    'kenitra market',
    'kenitra 2026',
    'sebou river kenitra',
    'atlantic coast morocco',
    'kenitra city guide',
  ],
  openGraph: {
    title: 'Complete Guide to Kenitra 2026 | Mehdia Beach, Sidi Boughaba & More',
    description:
      'Your complete guide to Kenitra: Mehdia Beach surfing, the historic Kasbah, Sidi Boughaba bird sanctuary, riverside walks, souks, and day trips. Real prices in MAD.',
    url: `${BASE_URL}/kenitra-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-rabat.webp`,
        width: 1200,
        height: 630,
        alt: 'Atlantic coastline near Kenitra with Mehdia Beach and the historic Kasbah overlooking the ocean',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to Kenitra 2026 | Morocco',
    description:
      'Mehdia Beach, Mehdia Kasbah, Sidi Boughaba bird sanctuary, Sebou riverside, souks, and Rabat day trip. Complete city guide with real prices.',
    images: [`${BASE_URL}/images/hero-rabat.webp`],
  },
  alternates: { canonical: `${BASE_URL}/kenitra-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/kenitra-guide`,
  name: 'Complete Guide to Kenitra 2026 | Mehdia Beach, Sidi Boughaba & More',
  description:
    'Discover Kenitra, an Atlantic city near Rabat, with Mehdia Beach surfing, the 17th-century Kasbah, Sidi Boughaba wetland, Sebou riverside, and Gharb agriculture.',
  url: `${BASE_URL}/kenitra-guide`,
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
  mainEntityOfPage: `${BASE_URL}/kenitra-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Kenitra',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Kenitra Guide', item: `${BASE_URL}/kenitra-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Kenitra known for?', acceptedAnswer: { '@type': 'Answer', text: 'Kenitra is an industrial Atlantic city known for Mehdia Beach (popular for surfing), the 17th-century Mehdia Kasbah fortress overlooking the ocean, Lac de Sidi Boughaba (a Ramsar-listed wetland and bird sanctuary), and its position on the Sebou River. It is the capital of the Gharb-Chrarda-Beni Hssen region and a major agricultural hub.' } },
    { '@type': 'Question', name: 'How far is Kenitra from Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'Kenitra is approximately 40 km north of Rabat. By train, the journey takes 30-45 minutes and costs from 25 MAD. By grand taxi, it takes about 40 minutes. The Al Boraq high-speed train also stops at Kenitra on the Tangier-Casablanca route.' } },
    { '@type': 'Question', name: 'Is Mehdia Beach good for surfing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Mehdia Beach is one of the best surfing spots near Rabat. The beach break offers consistent waves suitable for beginners and intermediate surfers, especially from September to April. Board rental starts from 100 MAD per hour. The beach is also popular for swimming and sunbathing in summer.' } },
    { '@type': 'Question', name: 'What birds can you see at Lac de Sidi Boughaba?', acceptedAnswer: { '@type': 'Answer', text: 'Lac de Sidi Boughaba is home to over 200 bird species. Key species include greater flamingos, marbled teal, white-headed duck, crested coot, purple gallinule, and various herons and egrets. The lake is a crucial stopover for migratory birds traveling between Europe and sub-Saharan Africa. Winter months (November to February) offer the best birdwatching.' } },
    { '@type': 'Question', name: 'What is the best time to visit Kenitra?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March to May) and autumn (September to November) are ideal, with pleasant temperatures of 18-26 degrees and fewer crowds. Summer is excellent for Mehdia Beach but can be hot in the city (up to 38 degrees). Winter is mild and the best season for birdwatching at Sidi Boughaba. Surfing is best from September to April.' } },
    { '@type': 'Question', name: 'Is Kenitra worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Kenitra is an excellent off-the-beaten-path destination, especially as a day trip from Rabat. Mehdia Beach, the historic Kasbah, and Sidi Boughaba lake offer a mix of nature, history, and relaxation away from tourist crowds. The city also provides an authentic glimpse into everyday Moroccan life in a working industrial city.' } },
  ],
};

/* ===============================================================
   DATA: TOP ATTRACTIONS
   =============================================================== */

const topAttractions = [
  {
    name: 'Mehdia Beach',
    icon: Waves,
    category: 'Beach & Surfing',
    price: 'Free (board rental from 100 MAD/hour)',
    duration: 'Half day - Full day',
    bestTime: 'Morning (surfing), Afternoon (swimming)',
    description:
      'Mehdia Beach is the star attraction of the Kenitra area, a long stretch of golden sand backed by dunes and forest at the mouth of the Sebou River. The beach break produces consistent waves that attract surfers from Rabat and beyond, particularly from September to April when Atlantic swells are strongest. In summer, the beach transforms into a lively resort scene with families, swimmers, and beachside cafes serving fresh grilled fish and cold drinks. The beach sits below the Mehdia Kasbah, creating a dramatic backdrop of fortress walls and Atlantic surf. Beach vendors offer parasols and sunbeds (from 30 MAD), and several surf schools operate during peak season.',
    insiderTip:
      'For surfing, the best waves are at the northern end of the beach near the river mouth, where a sandbar creates a reliable left-hander. Arrive early on summer weekends as the beach gets crowded by midday. The beachside grilled sardine stands (from 25 MAD per portion) are some of the freshest and cheapest on the Atlantic coast.',
  },
  {
    name: 'Mehdia Kasbah',
    icon: Landmark,
    category: 'Historical Fortress',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'Perched on a rocky promontory overlooking the Atlantic and the mouth of the Sebou River, the Mehdia Kasbah is a 17th-century fortress with a turbulent history. Originally built by the Almohads in the 12th century, the current structure dates primarily from the Saadian dynasty (16th-17th century) and was later fortified by Sultan Moulay Ismail. The kasbah changed hands multiple times between Moroccan, Portuguese, Spanish, and even English forces. During the World War II Operation Torch landings in November 1942, American forces assaulted the kasbah in one of the first Allied operations in North Africa. Today the partially ruined fortress offers atmospheric exploration through crumbling walls, arched gateways, and bastions with commanding views of the coastline and the Sebou estuary below.',
    insiderTip:
      'The kasbah is largely unrestored, which is part of its charm. Watch your footing on uneven ground. The best views are from the western bastions looking out over the Atlantic. Combine with Mehdia Beach directly below for a half-day outing. The golden hour light on the fortress walls makes for exceptional photography.',
  },
  {
    name: 'Lac de Sidi Boughaba',
    icon: Bird,
    category: 'Nature Reserve & Wetland',
    price: 'From 10 MAD',
    duration: '2-3 hours',
    bestTime: 'Early morning',
    description:
      'This freshwater lake nestled among coastal dunes and cork oak forest is one of Morocco most important wetlands, designated a Ramsar site of international significance. Lac de Sidi Boughaba stretches approximately 6 km long and hosts over 200 bird species, making it a paradise for birdwatchers. The lake serves as a crucial winter refuge for migratory waterbirds traveling between Europe and sub-Saharan Africa. Greater flamingos wade in the shallows, marbled teal and white-headed duck swim among the reeds, and birds of prey circle overhead. A small eco-museum near the entrance explains the lake ecosystem, and marked trails wind through the surrounding forest and along the lakeshore. The tranquil setting, with birdsong replacing city noise, makes this a remarkable natural escape just minutes from Kenitra.',
    insiderTip:
      'Bring binoculars and arrive at dawn for the best birdwatching. The eastern shore trail offers the most sheltered viewpoints. November to February is peak migration season with the greatest diversity of species. The eco-museum has knowledgeable staff who can help identify species. Wear waterproof shoes as paths can be muddy after rain.',
  },
  {
    name: 'Kenitra City Center & Souks',
    icon: ShoppingBag,
    category: 'Market & Urban Life',
    price: 'Free (shopping budget from 50 MAD)',
    duration: '2-3 hours',
    bestTime: 'Morning',
    description:
      'Kenitra city center blends French colonial-era architecture with modern Moroccan urban life. The wide boulevard Mohammed V, lined with cafes and shops, forms the commercial spine of the city, leading to the central covered market where vendors sell fresh produce from the surrounding Gharb plain, Atlantic fish, olives, and household goods. Unlike the polished tourist medinas of Marrakech or Fes, Kenitra souks are working markets serving the local population, offering an unvarnished glimpse into everyday Moroccan commerce. The streets around the market come alive in the morning with the calls of fruit sellers, the scent of fresh bread from neighborhood bakeries, and the bustle of a city going about its business. You will likely be the only tourist in sight, which is precisely the appeal.',
    insiderTip:
      'The central market is busiest on Saturday mornings when farmers from the Gharb region bring their freshest produce. Try the local specialty msemen with honey (from 5 MAD) from street vendors near the market entrance. The French colonial quarter around Avenue Mohammed V has some attractive early 20th-century buildings worth photographing.',
  },
  {
    name: 'Sebou Riverside Walk',
    icon: Footprints,
    category: 'Nature & Leisure',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Late afternoon',
    description:
      'The Oued Sebou (Sebou River) is Morocco longest river, flowing 614 km from the Middle Atlas to the Atlantic at Mehdia. Kenitra sits along its banks, and the riverside promenade offers a peaceful walking route away from the city bustle. The Sebou played a vital role in the city history, serving as a navigable waterway that connected Kenitra (formerly Port Lyautey, named during the French protectorate) to the ocean and enabled it to function as a river port. Today, you can stroll along the tree-lined banks, watching fishing boats and enjoying views across the slow-moving water. The late afternoon light reflecting off the river surface is particularly beautiful, and local families gather along the banks for evening promenades.',
    insiderTip:
      'The most pleasant stretch for walking is downstream from the city center toward Mehdia. If you have a car, drive the riverside road for a scenic route to Mehdia Beach and the Kasbah. Fishermen along the banks sometimes sell their catch directly, which is about as fresh as fish gets.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS & EXCURSIONS
   =============================================================== */

const dayTrips = [
  {
    name: 'Moulay Bousselham Lagoon',
    icon: Fish,
    category: 'Lagoon & Bird Sanctuary',
    distance: '80 km north (1.5 hours)',
    price: 'From 50 MAD (boat tour)',
    description:
      'The stunning Merja Zerga (Blue Lagoon) at Moulay Bousselham is one of North Africa most important bird habitats. This coastal lagoon, separated from the Atlantic by a sandbar, hosts flamingos, spoonbills, ospreys, and thousands of migrating birds. Take a wooden boat tour (from 50 MAD per person) through the reed-filled channels, then climb to the hilltop tomb of Moulay Bousselham for panoramic lagoon views. The small fishing village offers excellent fresh seafood at waterfront restaurants (from 60 MAD for a fish meal). Combine with a swim at the wild, uncrowded Atlantic beach.',
    insiderTip:
      'Negotiate boat tour prices before boarding. Early morning tours see the most birds. The village makes a lovely overnight stop if you want a peaceful Atlantic escape. Sunday is market day.',
  },
  {
    name: 'Rabat (Day Trip)',
    icon: Landmark,
    category: 'Capital City & UNESCO Heritage',
    distance: '40 km south (30-45 min by train)',
    price: 'From 25 MAD (train ticket)',
    description:
      'Morocco capital city is an easy half-day or full-day trip from Kenitra by train. Visit the UNESCO-listed Kasbah des Oudaias with its blue-and-white painted streets, the impressive Hassan Tower and Mohammed V Mausoleum, the atmospheric Chellah ruins (a Roman and Marinid necropolis), and the Rabat medina. Rabat combines imperial Moroccan heritage with modern cafe culture and a beautiful Atlantic oceanfront. The train runs frequently throughout the day, making this one of Morocco easiest and most rewarding day trips.',
    insiderTip:
      'Take the earliest train to maximize your day. The Kasbah des Oudaias is most photogenic in the morning light. Have lunch at Cafe Maure in the Kasbah gardens overlooking the Bou Regreg river (from 30 MAD for mint tea and pastries).',
  },
  {
    name: 'Sidi Taibi & Gharb Countryside',
    icon: TreesIcon,
    category: 'Agriculture & Rural Life',
    distance: '15 km southeast',
    price: 'Free',
    description:
      'The Gharb plain surrounding Kenitra is one of Morocco most fertile agricultural regions, fed by the Sebou River system. A drive through the countryside reveals vast rice paddies, citrus orchards, sugar beet fields, and vegetable farms that supply much of Morocco produce. The area around Sidi Taibi, a satellite town southeast of Kenitra, gives a glimpse of rural Moroccan life where agriculture remains the primary livelihood. Seasonal harvests create ever-changing landscapes, from the green of spring crops to the golden wheat fields of summer.',
    insiderTip:
      'Best explored by car. Spring (March to May) is the most scenic when fields are green and wildflowers bloom. Stop at roadside stands for incredibly fresh, cheap fruit and vegetables. The rice grown here is a local specialty — look for Gharb rice at markets.',
  },
];

/* ===============================================================
   DATA: FOOD & DRINK
   =============================================================== */

const foodDrink = [
  {
    name: 'Fresh Atlantic Seafood',
    icon: Fish,
    category: 'Local Cuisine',
    price: 'From 40 MAD',
    description:
      'Kenitra proximity to the Atlantic and the Sebou River means exceptionally fresh seafood. At Mehdia Beach, beachside stalls grill sardines, sole, shrimp, and calamari over charcoal (from 25 MAD per portion). In the city, restaurants along Avenue Mohammed V serve seafood tagines, fried fish platters, and fish pastilla. The central market fish section is a spectacle of gleaming catches brought in daily from the Atlantic. For the freshest experience, buy directly from fishermen at Mehdia port and have it grilled at a nearby stall.',
    insiderTip:
      'The best fish restaurants are at Mehdia Beach, not in the city center. Sardines are cheapest from May to October. Ask for fish "meshwi" (grilled) rather than fried for the healthiest preparation.',
  },
  {
    name: 'Gharb Agricultural Specialties',
    icon: UtensilsCrossed,
    category: 'Regional Produce',
    price: 'From 10 MAD',
    description:
      'The Gharb plain produces some of Morocco finest agricultural products, and Kenitra is the best place to taste them. Local specialties include Gharb rice (used in a distinctive local rice couscous), fresh-pressed olive oil from the region orchards, Sidi Allal Tazi melons in summer, and fresh cow milk and leben (buttermilk) from local dairy farms. The central market is the best place to sample and buy these products. Street vendors sell seasonal fruit at remarkably low prices, with oranges, strawberries, and pomegranates depending on the time of year.',
    insiderTip:
      'Try rfissa, a traditional chicken and lentil dish served on msemen bread, at local restaurants (from 30 MAD). The Gharb rice couscous on Friday is a regional specialty worth seeking out. Buy olive oil at the market for a fraction of Marrakech prices.',
  },
  {
    name: 'Cafe Culture',
    icon: Coffee,
    category: 'Cafes & Tea',
    price: 'From 8 MAD',
    description:
      'Like all Moroccan cities, Kenitra has a vibrant cafe culture. The terraces along Avenue Mohammed V and around the central market are prime spots for mint tea (from 8 MAD), nous-nous (half espresso, half milk, from 10 MAD), and people-watching. Kenitra cafes are refreshingly unpretentious compared to tourist cities, and you will experience genuine Moroccan social life. Patisseries serve excellent Moroccan pastries including gazelle horns, chebakia, and briwat (from 5 MAD per piece). The evening promenade around the city center sees cafes fill up with families, students, and workers unwinding after the day.',
    insiderTip:
      'Join the locals for an evening nous-nous at one of the cafes near Avenue Mohammed V. Kenitra pastries are made for local tastes, not tourist expectations, meaning more flavor and lower prices. Try ghriba (crumbly almond cookies) with your mint tea.',
  },
];

/* ===============================================================
   DATA: PRACTICAL INFO
   =============================================================== */

const practicalTips = [
  {
    icon: Ship,
    title: 'Getting There',
    content:
      'Kenitra is on the main Tangier-Casablanca rail line, with frequent trains from Rabat (from 25 MAD, 30-45 min), Casablanca (from 55 MAD, 1.5 hours), and Tangier (from 90 MAD, 2.5 hours). The Al Boraq high-speed train also stops here. Grand taxis run from Rabat (from 20 MAD). By car, Kenitra is on the A2 autoroute, about 40 km north of Rabat.',
  },
  {
    icon: Compass,
    title: 'Getting Around',
    content:
      'Kenitra city center is walkable but spread out. Petit taxis (blue) run within the city (from 7 MAD). To reach Mehdia Beach and the Kasbah (10 km west), take a grand taxi from the city center (from 15 MAD) or bus number 15. Sidi Boughaba is accessible by grand taxi (from 20 MAD). Having a car is ideal for exploring the surrounding countryside and lagoons.',
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    content:
      'Spring (March to May) and autumn (September to November) offer the best weather. Summer is great for the beach but the city interior can exceed 38 degrees. Winter is mild (12-18 degrees) and ideal for birdwatching. Surfing season runs September to April. Avoid Ramadan if you want open restaurants during the day.',
  },
  {
    icon: AlertTriangle,
    title: 'Safety & Tips',
    content:
      'Kenitra is a working industrial city, not a tourist destination, so you will attract some curiosity. The city is generally safe but exercise normal precautions. Very few people speak English; French and Darija are the primary languages. ATMs are available along Avenue Mohammed V. Mehdia Beach can have strong currents — swim near lifeguard stations in summer.',
  },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What is Kenitra known for?',
    answer:
      'Kenitra is an industrial Atlantic city known for Mehdia Beach (popular for surfing), the 17th-century Mehdia Kasbah fortress overlooking the ocean, Lac de Sidi Boughaba (a Ramsar-listed wetland and bird sanctuary), and its position on the Sebou River. It is the capital of the Gharb-Chrarda-Beni Hssen region and a major agricultural hub.',
  },
  {
    question: 'How far is Kenitra from Rabat?',
    answer:
      'Kenitra is approximately 40 km north of Rabat. By train, the journey takes 30-45 minutes and costs from 25 MAD. By grand taxi, it takes about 40 minutes. The Al Boraq high-speed train also stops at Kenitra on the Tangier-Casablanca route.',
  },
  {
    question: 'Is Mehdia Beach good for surfing?',
    answer:
      'Yes, Mehdia Beach is one of the best surfing spots near Rabat. The beach break offers consistent waves suitable for beginners and intermediate surfers, especially from September to April when Atlantic swells are strongest. Board rental starts from 100 MAD per hour.',
  },
  {
    question: 'What birds can you see at Lac de Sidi Boughaba?',
    answer:
      'Lac de Sidi Boughaba is home to over 200 bird species. Key species include greater flamingos, marbled teal, white-headed duck, crested coot, purple gallinule, and various herons and egrets. The lake is a crucial stopover for migratory birds traveling between Europe and sub-Saharan Africa. Winter months (November to February) offer the best birdwatching.',
  },
  {
    question: 'What is the best time to visit Kenitra?',
    answer:
      'Spring (March to May) and autumn (September to November) are ideal, with pleasant temperatures of 18-26 degrees and fewer crowds. Summer is excellent for Mehdia Beach. Winter is mild and the best season for birdwatching at Sidi Boughaba. Surfing is best from September to April.',
  },
  {
    question: 'Is Kenitra worth visiting?',
    answer:
      'Kenitra is an excellent off-the-beaten-path destination, especially as a day trip from Rabat. Mehdia Beach, the historic Kasbah, and Sidi Boughaba lake offer a mix of nature, history, and relaxation away from tourist crowds. The city provides an authentic glimpse into everyday Moroccan life.',
  },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/rabat', icon: MapPin, title: 'Rabat City Guide', description: 'Complete guide to Morocco capital: Kasbah des Oudaias, Hassan Tower, Chellah, and more.' },
  { href: '/things-to-do-rabat', icon: Star, title: 'Things to Do in Rabat', description: 'Top attractions, activities, and experiences in the Moroccan capital.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean coasts.' },
  { href: '/birdwatching', icon: Bird, title: 'Birdwatching in Morocco', description: 'Top birding sites including wetlands, mountains, and desert oases across Morocco.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Morocco Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function KenitraGuidePage() {
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
            <span className="text-white">Kenitra Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Kenitra
            <br className="hidden md:block" /> City Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            An industrial Atlantic city where the Sebou meets the ocean, with golden beaches,
            a historic fortress, and one of Morocco&apos;s most important bird sanctuaries.
            Your 2026 guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Kenitra: Morocco&apos;s Hidden Atlantic Gateway
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Kenitra sits where the Sebou River, Morocco&apos;s longest waterway, empties into the
                Atlantic Ocean. This working industrial city of over 400,000 people rarely appears on
                tourist itineraries, yet it offers some of the most rewarding off-the-beaten-path
                experiences on Morocco&apos;s Atlantic coast. Just 40 km north of Rabat and connected
                by frequent trains, Kenitra rewards the curious traveler with surf-pounded beaches,
                a dramatically sited 17th-century fortress, and a bird sanctuary of international
                significance.
              </p>
              <p>
                Known as Port Lyautey during the French Protectorate era (named after Marshal Lyautey,
                the first French Resident-General), Kenitra played a pivotal role in World War II when
                American forces landed at Mehdia Beach during Operation Torch in November 1942. Today
                the city is a major industrial and agricultural center, the gateway to the rich Gharb
                plain whose farms feed much of Morocco. This workaday character means tourists are a
                rarity, and the welcome you receive is genuinely warm and surprised.
              </p>
              <p>
                This guide covers everything worth seeing in and around Kenitra: the surfing and
                swimming at Mehdia Beach, the atmospheric Mehdia Kasbah ruins, the extraordinary
                birdlife at Lac de Sidi Boughaba, pleasant riverside walks, authentic souks, and
                rewarding day trips to Moulay Bousselham lagoon and Rabat. Each listing includes
                real 2026 prices in MAD and local tips.
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
            Top 8 Kenitra Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The best reasons to visit this underappreciated Atlantic city.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Mehdia Beach Surfing', price: 'From 100 MAD (board rental)', time: 'Half day', category: 'Beach' },
              { rank: 2, name: 'Mehdia Kasbah', price: 'Free', time: '1-2 hours', category: 'Heritage' },
              { rank: 3, name: 'Lac de Sidi Boughaba', price: 'From 10 MAD', time: '2-3 hours', category: 'Nature' },
              { rank: 4, name: 'Kenitra Central Market', price: 'Free', time: '1-2 hours', category: 'Market' },
              { rank: 5, name: 'Sebou Riverside Walk', price: 'Free', time: '1-2 hours', category: 'Leisure' },
              { rank: 6, name: 'Moulay Bousselham Lagoon', price: 'From 50 MAD', time: 'Full day', category: 'Day Trip' },
              { rank: 7, name: 'Mehdia Beach Seafood', price: 'From 25 MAD', time: '1-2 hours', category: 'Food' },
              { rank: 8, name: 'Rabat Day Trip', price: 'From 25 MAD', time: 'Full day', category: 'Day Trip' },
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

      {/* -- Top Attractions -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Attractions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Atlantic surf beaches to historic fortresses and pristine wetlands, Kenitra
            area offers surprisingly diverse attractions.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Seasonal variations may apply.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {topAttractions.map((attraction) => {
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

      {/* -- Day Trips & Excursions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Kenitra is well-positioned for exploring the Atlantic coast and the Gharb countryside.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {dayTrips.map((trip) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {trip.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {trip.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {trip.distance}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {trip.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {trip.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {trip.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Food & Drink -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Drink
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Atlantic seafood, Gharb agricultural specialties, and unpretentious cafe culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {foodDrink.map((item) => {
              const FoodIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.name}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Practical Information -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {practicalTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TipIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Suggested Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Suggested Day Trip Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to make the most of a day in Kenitra, whether from Rabat or as a standalone visit.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Sidi Boughaba &amp; Mehdia Kasbah
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Take the early train from Rabat (from 25 MAD, 30-45 minutes). From Kenitra station,
                    grab a grand taxi to Lac de Sidi Boughaba (from 20 MAD). Spend 1.5-2 hours walking
                    the lakeshore trails and birdwatching. Visit the eco-museum for context on the
                    wetland ecosystem.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Continue by taxi to the Mehdia Kasbah (from 15 MAD). Explore the ruins of this
                    17th-century fortress and take in the commanding views over the Atlantic and the
                    Sebou estuary from the western bastions.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Afternoon: Mehdia Beach &amp; Seafood
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Walk down from the Kasbah to Mehdia Beach. Swim, surf (board rental from 100 MAD/hour),
                    or simply relax on the golden sand. Have a fresh grilled fish lunch at one of the
                    beachside stalls (from 25 MAD for sardines, from 60 MAD for a mixed fish plate).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Return to Kenitra city center by grand taxi. Wander the central market and
                    Avenue Mohammed V. Stop for mint tea and pastries at a local cafe (from 15 MAD).
                    Catch the evening train back to Rabat. Estimated day trip cost: from 200-400 MAD
                    (excluding surf rental).
                  </p>
                </div>
              </div>
            </div>

            {/* Budget Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Day Trip Budget Summary (per person)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 150-250 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Train, walking, street food, public beach</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 300-500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Taxis, restaurant lunch, surf rental, market shopping</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Full Day with Extras</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-800 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private taxi, surf lesson, restaurant meals, market purchases</p>
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
            Ready to Discover Kenitra?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Atlantic surf and ancient fortress ruins to pristine bird sanctuaries and fresh
            seafood straight from the ocean, Kenitra offers authentic Morocco without the tourist crowds.
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
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
            <Link
              href="/birdwatching"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Bird className="w-5 h-5" />
              Birdwatching Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

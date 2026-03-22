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
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Mountain,
  Coffee,
  Building,
  BedDouble,
  Flower2,
  TreesIcon,
  Waypoints,
  Gem,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Taroudant Morocco Guide 2026 | Little Marrakech - Ramparts, Souks & Souss Valley',
  description:
    'Complete guide to Taroudant, Morocco in 2026. Explore the 7km red ramparts, Arab and Berber souks, tanneries, argan oil cooperatives, horse-drawn caleche rides, and Anti-Atlas day trips. Prices in MAD.',
  keywords: [
    'taroudant morocco guide',
    'things to do in taroudant',
    'taroudant souk',
    'taroudant ramparts',
    'little marrakech',
    'taroudant hotels',
    'taroudant morocco',
    'taroudant tanneries',
    'taroudant argan oil',
    'taroudant caleche',
    'taroudant kasbah',
    'souss valley morocco',
    'taroudant to tafraout',
    'taroudant saffron',
    'tizi n test pass',
    'taroudant travel guide',
    'taroudant anti-atlas',
    'taroudant palais salam',
    'taroudant berber souk',
    'taroudant day trip agadir',
  ],
  openGraph: {
    title: 'Taroudant Morocco Guide 2026 | Little Marrakech - Ramparts, Souks & Souss Valley',
    description:
      'Discover Taroudant: the walled Berber city called Little Marrakech. 7km of red ramparts, authentic souks, tanneries, argan cooperatives, and gateway to the Anti-Atlas mountains.',
    url: `${BASE_URL}/taroudant-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Red rampart walls of Taroudant with the snow-capped High Atlas mountains in the background and palm trees in the foreground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taroudant Morocco Guide 2026 | Little Marrakech',
    description:
      '7km red ramparts, Arab and Berber souks, tanneries, argan oil, caleche rides, Anti-Atlas day trips. Complete guide with prices.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/taroudant-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/taroudant-guide`,
  name: 'Taroudant Morocco Guide 2026 | Little Marrakech',
  description:
    'Complete guide to Taroudant, the walled Berber city in the Souss Valley known as Little Marrakech. Red ramparts, authentic souks, tanneries, argan cooperatives, and gateway to the Anti-Atlas.',
  url: `${BASE_URL}/taroudant-guide`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  mainEntityOfPage: `${BASE_URL}/taroudant-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Taroudant',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Taroudant Guide', item: `${BASE_URL}/taroudant-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why is Taroudant called Little Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Taroudant earned the nickname "Little Marrakech" because of its imposing red rampart walls that closely resemble the famous walls of Marrakech. Like Marrakech, Taroudant is surrounded by 7 km of mudbrick fortifications with crenellated towers, enclosing bustling souks, a Kasbah, and a traditional medina. However, Taroudant is far quieter, less touristy, and more authentically Berber than its famous counterpart.' } },
    { '@type': 'Question', name: 'How do I get to Taroudant?', acceptedAnswer: { '@type': 'Answer', text: 'Taroudant is 80 km east of Agadir (1.5 hours by car or grand taxi from 50 MAD shared). From Marrakech, the dramatic Tizi n Test pass route takes 5-6 hours (290 km). CTM and Supratours buses connect Taroudant to Agadir (from 30 MAD), Marrakech (from 100 MAD), and other cities. The nearest airport is Agadir Al Massira (80 km).' } },
    { '@type': 'Question', name: 'How many days do you need in Taroudant?', acceptedAnswer: { '@type': 'Answer', text: 'One full day covers the ramparts walk, both souks, and a caleche ride. Two days allow you to visit the tanneries, argan cooperatives, and explore more deeply. Three days add a day trip to Tafraout or the Tizi n Test pass. Taroudant rewards a slower pace — it is a place to absorb rather than rush through.' } },
    { '@type': 'Question', name: 'What is there to buy in Taroudant souks?', acceptedAnswer: { '@type': 'Answer', text: 'The Arab Souk (Souk Arab) specializes in clothing, household goods, and crafts. The Berber Souk (Souk Amazigh) is known for pottery, leather goods, carpets, silver Berber jewelry, and local produce. Argan oil from local cooperatives is excellent and genuine (from 150 MAD per liter). Saffron from the nearby Taliouine region is some of the world finest (from 30 MAD per gram). Bargaining is expected — start at half the asking price.' } },
    { '@type': 'Question', name: 'Is Taroudant worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Taroudant offers the experience of a walled Moroccan city with authentic souks, genuine Berber culture, and far fewer tourists than Marrakech or Fes. The 7 km rampart walk is stunning, the souks are among the most authentic in Morocco, and the Souss Valley setting with views to the High Atlas and Anti-Atlas mountains is spectacular. It is an ideal stop between Agadir and Marrakech.' } },
    { '@type': 'Question', name: 'What is the best time to visit Taroudant?', acceptedAnswer: { '@type': 'Answer', text: 'October to April is ideal. The Souss Valley is warm year-round but summer (June-September) is extremely hot, with temperatures regularly exceeding 40 degrees Celsius. Spring (March-April) brings wildflowers and pleasant temperatures. Winter (December-February) is mild and sunny with clear views of the snow-capped Atlas mountains.' } },
  ],
};

/* ===============================================================
   DATA: RAMPARTS & HISTORIC SIGHTS
   =============================================================== */

const historicSights = [
  {
    name: 'The Red Ramparts (7 km Circuit)',
    icon: Landmark,
    category: 'Historic Fortification',
    price: 'Free',
    duration: '2-3 hours (walk) / 1 hour (caleche)',
    bestTime: 'Late afternoon (golden light)',
    description:
      'Taroudant defining feature is its magnificent circuit of red mudbrick ramparts stretching 7 km around the entire old city. Built by the Saadian dynasty in the 16th century when Taroudant served as their first capital before Marrakech, the walls stand 8-10 meters high with 130 towers and 9 gates (babs). The crenellated silhouette against the Atlas mountain backdrop is one of Morocco most dramatic urban landscapes. Unlike Marrakech walls, Taroudant ramparts are largely uninterrupted by modern development, and you can walk the full circuit along the base on a dusty path used by locals, donkeys, and the occasional caleche.',
    insiderTip:
      'The most photogenic section runs between Bab el-Kasbah and Bab Targhount on the eastern side, where the ramparts are best preserved and the Atlas views are clearest. Late afternoon light turns the mudbrick walls a deep burnt orange. Start at Bab el-Kasbah and walk clockwise. Bring water — the full circuit takes 2-3 hours with photo stops. Alternatively, hire a caleche (horse-drawn carriage) for the circuit (from 150 MAD for 1 hour).',
  },
  {
    name: 'Bab el-Kasbah & Kasbah Quarter',
    icon: Building,
    category: 'Historic Quarter',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Morning',
    description:
      'The Kasbah quarter in the southwest corner of the medina was the former royal citadel, enclosed within its own walls inside the larger rampart circuit. The imposing Bab el-Kasbah gate, with its horseshoe arch and decorative brickwork, is the most photographed gate in Taroudant. Inside, the quarter has a quieter, more residential feel than the souk area, with narrow alleys, traditional houses with carved wooden doors, and small neighborhood mosques. The former Palais Salam, once a pasha residence and later a luxury hotel, is located here — its gardens and terrace (when accessible) offer views across the Kasbah to the mountains.',
    insiderTip:
      'Walk through the Kasbah quarter early in the morning when it is quiet and atmospheric. The residential alleys east of Palais Salam are particularly photogenic. The Kasbah walls within walls create an interesting layered effect. If the Palais Salam grounds are accessible, the garden terrace is worth visiting for its citrus trees and mountain views.',
  },
  {
    name: 'Horse-Drawn Caleche Ride',
    icon: Compass,
    category: 'Scenic Experience',
    price: 'From 150 MAD (1 hour)',
    duration: '1-1.5 hours',
    bestTime: 'Late afternoon',
    description:
      'The horse-drawn caleche is Taroudant most iconic experience. These traditional carriages — similar to those in Marrakech but far less pressured — clip-clop along the rampart circuit, giving you a leisurely tour of the walls, gates, and surrounding olive and citrus groves. The ride typically starts from Place Assarag or Place al-Alaouyine, follows the exterior of the ramparts, and passes through several gates. The drivers often double as informal guides, pointing out historical features and sharing local stories. It is the most pleasant way to appreciate the scale and beauty of the rampart circuit.',
    insiderTip:
      'Agree on the price before departing — from 150 MAD for a full rampart circuit is fair. Sunset rides are magical when the walls glow amber. Ask the driver to pause at Bab el-Kasbah and Bab Targhount for photos. Tipping is customary (from 20 MAD). The ride also passes citrus orchards and olive groves outside the walls — the agricultural landscape is part of Taroudant charm.',
  },
  {
    name: 'Place Assarag & Place al-Alaouyine',
    icon: Coffee,
    category: 'Public Squares',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Evening',
    description:
      'Taroudant two main squares are the social heartbeat of the city. Place Assarag (also spelled Assarag or Aassarag) is the larger, tree-lined square near the center where cafes overflow with men drinking mint tea and debating. Place al-Alaouyine, closer to the Kasbah, is more formal with a fountain and garden. Both squares come alive in the evening as families promenade and the cafe terraces fill. The atmosphere is authentically Moroccan — virtually no tourist-oriented businesses here, just local life unfolding. Sitting at a cafe terrace with a glass of mint tea and watching the evening rhythm is one of Taroudant simplest and deepest pleasures.',
    insiderTip:
      'Place Assarag cafes have the best people-watching. Order a full mint tea service (from 12 MAD) and settle in. The evening scene from 7 PM onward is the most atmospheric. Place al-Alaouyine has better pastry shops — try the cornes de gazelle (from 5 MAD each). The caleche stand between the two squares is where you negotiate rides. Both squares have ATMs nearby.',
  },
];

/* ===============================================================
   DATA: SOUKS & SHOPPING
   =============================================================== */

const souksShopping = [
  {
    name: 'Arab Souk (Souk Arab)',
    icon: ShoppingBag,
    category: 'Traditional Market',
    price: 'Free to explore',
    duration: '1-2 hours',
    bestTime: 'Morning (9 AM - noon)',
    description:
      'The Arab Souk occupies the northern section of the medina and is the more organized of Taroudant two main markets. Covered alleyways lined with shops selling clothing, fabrics, household goods, electronics, and everyday necessities create a bustling commercial atmosphere. Unlike the tourist-oriented souks of Marrakech or Fes, the Arab Souk primarily serves local shoppers, which means prices are fair, bargaining is genuine rather than performative, and the goods reflect what Moroccans actually buy. The spice sections are particularly aromatic, and the fabric merchants stock beautiful Tashelhit Berber textiles.',
    insiderTip:
      'Visit in the morning when the souk is most active. The spice stalls near the southern entrance sell excellent quality ras el hanout, cumin, and turmeric at local prices (far cheaper than tourist souks). For authentic Berber textiles, look for the weavers near the center of the souk. Prices here are already reasonable, but gentle bargaining (10-20% off) is expected. Thursday is the busiest market day.',
  },
  {
    name: 'Berber Souk (Souk Amazigh)',
    icon: Gem,
    category: 'Artisan Market',
    price: 'Free to explore',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'The Berber Souk, south of the Arab Souk, is where artisans and craftspeople sell their handmade wares. This is the souk for serious shoppers seeking authentic Moroccan crafts at genuine prices. Berber silver jewelry (old and new), pottery from the Souss Valley, leather goods, handwoven carpets and kilims, carved wooden items, and local produce including argan oil, amlou (argan-almond butter), and dried fruits. The atmosphere is less frenetic than larger city souks — vendors are patient and genuinely knowledgeable about their products. The traditional Berber jewelry section, with its distinctive geometric designs and silver filigree, is outstanding.',
    insiderTip:
      'The Berber silver jewelry here is some of the most authentic and fairly priced in Morocco. Old Berber pieces (genuine antiques) start from 200 MAD. For argan oil, buy from the cooperative stalls rather than middlemen — quality is guaranteed and prices are fair (from 150 MAD per liter for cosmetic grade). The pottery section has beautiful tagine pots that make excellent souvenirs (from 50 MAD).',
  },
  {
    name: 'Taroudant Tanneries',
    icon: Eye,
    category: 'Artisan Workshop',
    price: 'Free (tip from 20 MAD expected)',
    duration: '30-45 minutes',
    bestTime: 'Morning (workers most active)',
    description:
      'Taroudant small tanneries operate much as they have for centuries, using traditional methods to process goat, sheep, and cow hides. Located near the Berber Souk, the tannery quarter consists of stone vats filled with natural dyes — saffron yellow, poppy red, indigo blue, mint green — and workers treading and soaking hides by hand. The operation is smaller and far less overwhelming than the famous Chouara tannery in Fes, making it more accessible and intimate. Workers are generally happy to explain the process and let you photograph from the viewing terraces above the vats.',
    insiderTip:
      'Bring a scarf or handkerchief for the smell — it is pungent but less overpowering than Fes. A worker will usually offer to guide you; a tip of from 20-30 MAD is appropriate. Morning visits (before noon) catch the workers at their most active. The leather goods shop adjacent sells bags, belts, and slippers made from locally tanned leather at excellent prices (bags from 150 MAD, slippers from 80 MAD).',
  },
];

/* ===============================================================
   DATA: NATURE & EXCURSIONS
   =============================================================== */

const natureExcursions = [
  {
    name: 'Argan Oil Cooperatives',
    icon: Flower2,
    category: 'Cultural Experience',
    price: 'Free (purchases from 150 MAD)',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'The Souss Valley surrounding Taroudant is the heartland of the argan tree, a UNESCO-protected species found nowhere else on Earth. Women-run cooperatives in and around Taroudant process argan nuts into culinary and cosmetic oil using traditional stone-grinding methods. Visiting a cooperative is a fascinating cultural experience: you see the entire production process from cracking the impossibly hard nuts (using a stone between the feet) to grinding the kernels into rich, golden oil. The cooperatives provide fair-wage employment for rural Berber women and produce genuinely pure argan oil — unlike the diluted versions sold in tourist markets.',
    insiderTip:
      'The Cooperative Tafyoucht, about 10 km outside Taroudant, is well-regarded and authentic. Culinary argan oil (from 150 MAD per liter) has a nuttier, roasted flavor for cooking. Cosmetic oil (from 200 MAD per liter) is cold-pressed for skin and hair. Buy directly from cooperatives rather than middlemen — the quality is guaranteed, the price is fair, and the money goes directly to the women workers. Ask your hotel to arrange a visit.',
  },
  {
    name: 'Day Trip to Tafraout & Anti-Atlas',
    icon: Mountain,
    category: 'Mountain Excursion',
    price: 'From 300 MAD (grand taxi) / From 600 MAD (private driver)',
    duration: 'Full day',
    bestTime: 'February-April (almond blossoms)',
    description:
      'The spectacular drive from Taroudant to Tafraout (200 km, 3 hours) traverses the Anti-Atlas mountains through some of Morocco most dramatic landscapes. The road climbs through argan forests, passes terraced Berber villages clinging to mountainsides, and crosses high passes with panoramic views. Tafraout itself is a small Berber town nestled in a valley surrounded by extraordinary pink granite boulders. Nearby attractions include the Belgian artist Jean Verame painted rocks (massive boulders painted in vivid blue, red, and purple), the Napoleon Hat rock formation, and traditional Berber villages. In February and March, the valley explodes with pink almond blossoms.',
    insiderTip:
      'Hire a private driver from Taroudant (from 600 MAD for the day including fuel) rather than trying to use public transport — the flexibility to stop at viewpoints and villages is essential. Leave early (7 AM) to maximize daylight. The road is winding but well-maintained. Stop at the village of Igherm for a tea break. In Tafraout, visit the painted rocks (5 km outside town) and the Maison Traditionnelle museum. Bring warm layers — the Anti-Atlas is significantly cooler than the Souss Valley.',
  },
  {
    name: 'Tizi n\'Test Pass to Marrakech',
    icon: Waypoints,
    category: 'Scenic Drive',
    price: 'From 500 MAD (grand taxi to Marrakech)',
    duration: 'Full day (5-6 hours driving)',
    bestTime: 'Spring or autumn',
    description:
      'The Tizi n\'Test pass (2,092 meters) is one of Morocco most spectacular mountain roads, connecting Taroudant and the Souss Valley to Marrakech via the High Atlas mountains. The narrow, winding road climbs through argan forests, walnut groves, and Berber villages before reaching the summit pass with views that stretch from the Souss plain to the peaks of Toubkal National Park. On the descent toward Marrakech, stop at the 12th-century Tin Mal mosque — one of only two mosques in Morocco open to non-Muslims. The drive is not for the faint-hearted (hairpin bends, steep drops, occasional goat crossings) but is one of the most rewarding drives in North Africa.',
    insiderTip:
      'If driving, start early and allow 6 hours minimum with stops. The road is paved but narrow with sharp bends — confident mountain driving experience is essential. Alternatively, the CTM bus runs the route to Marrakech (from 100 MAD). Stop at Tin Mal mosque (free entry, beautiful Almohad architecture). The village of Ijoukak near Tin Mal has a simple restaurant for lunch. Do not attempt this route in heavy rain or winter snow — check conditions locally.',
  },
  {
    name: 'Saffron Farms of Taliouine',
    icon: Flower2,
    category: 'Agricultural Tourism',
    price: 'From 400 MAD (transport + visit)',
    duration: 'Full day',
    bestTime: 'October-November (harvest season)',
    description:
      'Taliouine, about 100 km east of Taroudant, is the saffron capital of Morocco and produces some of the world finest saffron. The region crocus fields, planted at around 1,400 meters elevation, bloom in late October and November when the purple flowers are harvested at dawn and the precious red stigmas carefully extracted by hand. The Maison du Safran cooperative in Taliouine offers tours explaining the cultivation, harvesting, and grading process. A single kilogram of saffron requires 150,000 flowers, picked and processed entirely by hand, explaining why saffron is worth more by weight than gold.',
    insiderTip:
      'If visiting during harvest season (late October-November), you can join the dawn picking alongside local workers — an unforgettable experience. Outside harvest season, the Maison du Safran cooperative is still worth visiting for its museum and shop (pure saffron from 30 MAD per gram, far cheaper than retail). Combine with a stop at Taliouine Kasbah and lunch at a local restaurant. Grand taxi from Taroudant costs from 60 MAD shared.',
  },
  {
    name: 'Citrus & Olive Groves Walk',
    icon: TreesIcon,
    category: 'Nature Walk',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning (spring for blossoms)',
    description:
      'The fertile Souss Valley surrounding Taroudant is Morocco agricultural heartland, and the city is encircled by vast citrus orchards, olive groves, and palm gardens. Walking outside the ramparts through these groves is a peaceful and sensory experience — the scent of orange blossom in spring is intoxicating. The area between the ramparts and the Oued Souss (Souss River) is particularly pleasant, with irrigation channels, small farms, and views back to the walls with the Atlas mountains rising behind. This is the landscape that has sustained Taroudant for centuries.',
    insiderTip:
      'Exit through Bab Targhount gate and walk east along the outside of the ramparts. The citrus orchards extend for kilometers. In spring (March-April), the orange blossom season perfumes the entire city. The olive harvest (November-January) is another atmospheric time. Bring water and a hat — the Souss Valley is warm even in mild months. This walk combines beautifully with the rampart circuit.',
  },
];

/* ===============================================================
   DATA: FOOD & DINING
   =============================================================== */

const foodDining = [
  {
    name: 'Souss Valley Cuisine',
    icon: UtensilsCrossed,
    category: 'Local Dining',
    price: 'From 40 MAD (restaurant meal)',
    duration: '1-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'Taroudant cuisine reflects its Berber heritage and the agricultural abundance of the Souss Valley. Signature dishes include tafernout (Berber bread baked in a clay oven), amlou (a rich paste of argan oil, almonds, and honey spread on bread for breakfast), tagines slow-cooked with local olives and preserved lemons, couscous served on Fridays with seven vegetables, and grilled meats seasoned with local spices. The city restaurants range from simple hole-in-the-wall eateries in the medina (full meals from 30-40 MAD) to more refined dining at riad restaurants (from 80-150 MAD). The produce is exceptional — Souss Valley oranges are the finest in Morocco.',
    insiderTip:
      'For the most authentic experience, eat where locals eat. The small restaurants on the streets between the two souks serve excellent tagines and grilled meats at local prices (from 30 MAD). Ask for the day special. Try amlou for breakfast at your riad — once tasted, you will want to buy jars to take home (from 50 MAD). The Friday couscous tradition is strong in Taroudant — many restaurants serve it only on Fridays.',
  },
  {
    name: 'Cafe Culture & Mint Tea',
    icon: Coffee,
    category: 'Cafe & Social',
    price: 'From 10 MAD',
    duration: '30 minutes - 2 hours',
    bestTime: 'Afternoon or evening',
    description:
      'Taroudant cafe terraces are social institutions. The cafes lining Place Assarag and Place al-Alaouyine are where Taroudant male population gathers to drink mint tea, debate, read newspapers, and watch the world pass. The tea here is served in the traditional Berber style — strong green tea with fresh mint and generous sugar, poured from a height to create a frothy head. Pastries including cornes de gazelle (crescent-shaped almond cookies), briouates (sweet pastry triangles), and chebakia (sesame-coated flower cookies) accompany the tea. Women typically gather in separate salons or at home, though more modern mixed cafes are appearing.',
    insiderTip:
      'Order a full tea service with pastries (from 25 MAD) at a Place Assarag terrace and spend at least 30 minutes absorbing the atmosphere. The tea is refilled without additional charge. The best pastry shops are on the streets connecting the two squares — buy a box of mixed Moroccan pastries (from 30 MAD per kilogram) for an excellent souvenir. The cafe culture is most vibrant from 4-7 PM and after 9 PM.',
  },
];

/* ===============================================================
   DATA: PRACTICAL INFO
   =============================================================== */

const practicalInfo = [
  { tip: 'Getting There', icon: Compass, description: 'Grand taxi from Agadir: from 50 MAD shared (1.5 hours). CTM bus from Agadir: from 30 MAD. From Marrakech via Tizi n\'Test: 5-6 hours by car. Supratours bus from Marrakech via highway: 4.5 hours (from 100 MAD). Nearest airport: Agadir Al Massira (80 km).' },
  { tip: 'Getting Around', icon: Footprints, description: 'The medina is compact and walkable. Caleche rides around the ramparts cost from 150 MAD (1 hour). Petit taxis within town cost from 7-15 MAD. For day trips (Tafraout, Taliouine), hire a grand taxi or private driver. Bicycles can be rented from some hotels.' },
  { tip: 'Where to Stay', icon: BedDouble, description: 'Riad Maryam and Dar Zitoune are excellent riads inside the medina (from 500 MAD/night). Hotel Palais Salam in the Kasbah has historic character (from 800 MAD/night). Budget guesthouses from 200 MAD/night. The Gazelle d\'Or outside town is one of Morocco most exclusive hotels.' },
  { tip: 'Best Time to Visit', icon: Calendar, description: 'October to April for comfortable temperatures (18-28 degrees). Summer (June-September) is extremely hot (40+ degrees). February-March for almond blossoms. October-November for saffron harvest in Taliouine. Spring wildflowers are spectacular in the Anti-Atlas.' },
  { tip: 'Money & Essentials', icon: ShoppingBag, description: 'ATMs are available near Place Assarag and Place al-Alaouyine. Most souks and restaurants are cash only. Bring Moroccan Dirhams — foreign currency is rarely accepted. The post office is near Place al-Alaouyine. Pharmacies are well-stocked.' },
  { tip: 'Safety & Culture', icon: CheckCircle, description: 'Taroudant is very safe and significantly less touristy than Marrakech or Fes. Hassle from touts and guides is minimal. Locals are genuine and hospitable. Tashelhit Berber is the primary language; French and Arabic are also widely spoken. Dress modestly in the medina.' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'The Marrakech Alternative', icon: Heart, description: 'If you find Marrakech overwhelming, Taroudant delivers a similar walled-city experience without the crowds, aggressive touts, or inflated tourist prices. The souks here are real working markets, the interactions genuine, and the pace unhurried.' },
  { tip: 'Golden Hour at the Ramparts', icon: Camera, description: 'The red mudbrick ramparts glow an extraordinary deep amber in the last hour of sunlight. The most photogenic sections are between Bab el-Kasbah and Bab Targhount. Position yourself outside the walls looking in, with the Atlas mountains behind.' },
  { tip: 'Learn Some Tashelhit', icon: Globe, description: 'Taroudant is primarily Tashelhit (Souss Berber) speaking. Learning a few words — "azul" (hello), "tanmirt" (thank you), "manzakin" (how are you) — delights locals and opens doors. French is the second language. Arabic is understood but not the mother tongue.' },
  { tip: 'Avoid Summer Heat', icon: AlertTriangle, description: 'The Souss Valley is one of Morocco hottest regions in summer. Temperatures regularly exceed 40 degrees from June to September. If visiting in summer, plan outdoor activities for early morning and late afternoon. Midday is best spent in a riad or shaded cafe.' },
  { tip: 'Thursday Souk Day', icon: ShoppingBag, description: 'Thursday is the big weekly market day when rural Berber communities come to town. The souks are at their most vibrant and stocked. The livestock market outside the walls is fascinating. Plan your visit to include a Thursday if possible.' },
  { tip: 'Base for the Anti-Atlas', icon: Mountain, description: 'Taroudant is the best base for exploring the Anti-Atlas mountains and Souss Valley. Day trips to Tafraout, Taliouine, argan cooperatives, and the Tizi n\'Test pass all start from here. Stay at least 2-3 nights to take advantage of the excursion options.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Why is Taroudant called Little Marrakech?', answer: 'Taroudant earned this nickname because its impressive 7 km circuit of red mudbrick ramparts closely resembles the famous walls of Marrakech. Both cities were Saadian dynasty capitals. However, Taroudant is far smaller, quieter, and more authentically Berber than modern Marrakech, making the comparison somewhat misleading — Taroudant has its own distinct character.' },
  { question: 'How do I get to Taroudant?', answer: 'From Agadir: grand taxi (from 50 MAD, 1.5 hours) or CTM bus (from 30 MAD). From Marrakech: Supratours bus (from 100 MAD, 4.5 hours via highway) or the dramatic Tizi n\'Test pass road (5-6 hours). The nearest airport is Agadir Al Massira (80 km). Private transfers from Agadir cost from 400 MAD.' },
  { question: 'How many days should I spend in Taroudant?', answer: 'One full day covers the ramparts, souks, and a caleche ride. Two days add the tanneries, argan cooperatives, and deeper exploration. Three or more days allow excellent day trips to Tafraout, Taliouine (saffron), and the Tizi n\'Test pass. The slower pace rewards longer stays.' },
  { question: 'What should I buy in Taroudant?', answer: 'Argan oil from cooperatives (from 150 MAD per liter), Berber silver jewelry (from 200 MAD), saffron from Taliouine (from 30 MAD per gram), leather goods from the tanneries (bags from 150 MAD), pottery, carpets, and local spices. The Berber Souk has the best crafts; the Arab Souk for everyday goods and fabrics.' },
  { question: 'Is Taroudant worth visiting?', answer: 'Yes, especially if you value authenticity over spectacle. Taroudant offers a genuine, unhurried Moroccan walled-city experience that larger cities like Marrakech no longer provide. The souks, ramparts, food, and Berber culture are exceptional, and the surrounding Souss Valley and Anti-Atlas mountains add outstanding natural beauty.' },
  { question: 'What is the best time to visit?', answer: 'October to April for comfortable weather (18-28 degrees). Summer exceeds 40 degrees and is best avoided. February-March brings almond blossoms in the Anti-Atlas. October-November is saffron harvest season in Taliouine. Spring wildflowers are spectacular.' },
  { question: 'Where should I eat in Taroudant?', answer: 'Local restaurants between the two souks serve excellent tagines and grilled meats (from 30 MAD). Riad restaurants offer refined Moroccan cuisine (from 80 MAD). Try amlou (argan-almond paste) for breakfast, Friday couscous, and Souss Valley tagines with local olives. Place Assarag cafes are perfect for mint tea and pastries.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/agadir', icon: MapPin, title: 'Agadir City Guide', description: 'Beach resort gateway to the Souss Valley and southern Morocco.' },
  { href: '/marrakech', icon: MapPin, title: 'Marrakech City Guide', description: 'The legendary Red City with its souks, palaces, and Jemaa el-Fna.' },
  { href: '/argan-oil', icon: Flower2, title: 'Argan Oil Guide', description: 'Everything about Morocco liquid gold — production, uses, and where to buy.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes including the Tizi n\'Test and Anti-Atlas circuits.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Tagine, couscous, amlou, and the regional cuisines of Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function TaroudantGuidePage() {
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
            backgroundImage: 'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Taroudant Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Taroudant
            <br className="hidden md:block" /> &ldquo;Little Marrakech&rdquo;
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The walled Berber city in the Souss Valley where 7 km of red ramparts encircle
            authentic souks, ancient tanneries, and the gateway to the Anti-Atlas mountains.
            Your complete 2026 guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Authentic Walled City
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Taroudant is what Marrakech might have been without the tour buses. A Berber city of
                80,000 people enclosed within 7 km of magnificent red mudbrick ramparts, it sits in
                the fertile Souss Valley between the High Atlas to the north and the Anti-Atlas to
                the south. The Saadian dynasty made Taroudant their first capital in the 16th century
                before moving to Marrakech, and the city retains a regal dignity — the walls are
                immaculately preserved, the souks genuinely serve local needs, and the pace of life
                is unhurried and authentic.
              </p>
              <p>
                The nickname &ldquo;Little Marrakech&rdquo; is both apt and misleading. The red ramparts,
                the souks, the caleche carriages — these echo Marrakech in miniature. But Taroudant
                atmosphere is entirely different. There are no tourist hordes, no persistent touts,
                no inflated prices. The Arab Souk and Berber Souk are working markets where you
                can browse genuine Berber silver jewelry, hand-pressed argan oil, and saffron from
                nearby Taliouine without the exhausting negotiation theater of larger cities. The
                cafe terraces on Place Assarag fill with Taroudant men drinking mint tea and
                debating politics — not performing for tourists.
              </p>
              <p>
                Beyond the walls, the Souss Valley offers extraordinary excursions: women-run argan
                oil cooperatives, the Anti-Atlas mountains and the painted rocks of Tafraout, the
                saffron fields of Taliouine, and the legendary Tizi n&apos;Test mountain pass to
                Marrakech. Taroudant is a destination and a base — a place to experience the real
                Morocco while accessing some of its most spectacular landscapes.
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
            Top 10 Things to Do in Taroudant
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The essential experiences in Morocco most authentic walled city.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Walk the 7 km Red Ramparts', price: 'Free', time: '2-3 hours', category: 'Heritage' },
              { rank: 2, name: 'Berber Souk Shopping', price: 'Free to browse', time: '1-2 hours', category: 'Market' },
              { rank: 3, name: 'Horse-Drawn Caleche Ride', price: 'From 150 MAD', time: '1-1.5 hours', category: 'Experience' },
              { rank: 4, name: 'Visit Argan Oil Cooperative', price: 'Free', time: '1-2 hours', category: 'Culture' },
              { rank: 5, name: 'Explore the Tanneries', price: 'Free (tip expected)', time: '30-45 min', category: 'Artisan' },
              { rank: 6, name: 'Day Trip to Tafraout', price: 'From 300 MAD', time: 'Full day', category: 'Excursion' },
              { rank: 7, name: 'Cafe Culture at Place Assarag', price: 'From 10 MAD', time: '1 hour', category: 'Local Life' },
              { rank: 8, name: 'Tizi n\'Test Pass Drive', price: 'From 500 MAD', time: 'Full day', category: 'Scenic' },
              { rank: 9, name: 'Saffron Farms of Taliouine', price: 'From 400 MAD', time: 'Full day', category: 'Agritourism' },
              { rank: 10, name: 'Kasbah Quarter & Bab el-Kasbah', price: 'Free', time: '30-45 min', category: 'History' },
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

      {/* -- Ramparts & Historic Sights -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ramparts &amp; Historic Sights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Taroudant magnificent Saadian-era fortifications and historic quarters form the backbone of
            the city identity and visitor experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The rampart circuit is best walked in the late afternoon for the finest light on the red mudbrick walls.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {historicSights.map((item) => {
              const SightIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SightIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Souks & Shopping -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Souks &amp; Shopping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Taroudant twin souks offer some of Morocco most authentic shopping experiences,
            from Berber silver jewelry to hand-pressed argan oil.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Thursday is the busiest market day. Bargaining is expected but prices are already more fair than tourist cities.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {souksShopping.map((item) => {
              const SoukIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SoukIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Nature & Excursions -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nature, Excursions &amp; Day Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From argan cooperatives and saffron farms to the Anti-Atlas mountains and
            one of Morocco most spectacular mountain passes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Taroudant is the ideal base for exploring the Souss Valley and Anti-Atlas. Allow 2-3 extra days for excursions.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {natureExcursions.map((item) => {
              const ExcIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExcIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Food & Dining -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Taroudant cuisine reflects its Berber heritage and the abundant Souss Valley agriculture,
            from argan-almond amlou to saffron-scented tagines.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Restaurant prices in Taroudant are significantly lower than Marrakech or coastal cities.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodDining.map((item) => {
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

      {/* -- Practical Information -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Practical Information
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to plan your visit to Taroudant — transport, accommodation, timing, and local tips.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {practicalInfo.map((item) => {
              const PracIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <PracIcon className="w-5 h-5 text-[var(--color-accent)]" />
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

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Taroudant
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to help you experience Taroudant beyond the surface.
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

      {/* -- Sample Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 2-Day Taroudant Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical day-by-day plan covering the essential experiences in and around the walled city.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Ramparts, Souks &amp; Caleche
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at Place Assarag with mint tea and pastries (from 25 MAD). Walk through the Arab Souk
                      browsing spices, fabrics, and daily goods. Continue to the Berber Souk for silver jewelry,
                      pottery, and argan oil. Visit the tanneries nearby (free, tip from 20 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a local medina restaurant — tagine with local olives and bread (from 40 MAD).
                      Explore the Kasbah quarter and walk through Bab el-Kasbah. Take a caleche ride
                      around the full rampart circuit (from 150 MAD, 1 hour). Return for mint tea at
                      Place al-Alaouyine cafes (from 10 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk the ramparts on foot for golden-hour photography. Dinner at a riad restaurant
                      (from 80 MAD) or a local restaurant between the souks (from 40 MAD). Evening
                      promenade on the main squares. Estimated Day 1 cost: from 300-500 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Argan Cooperative &amp; Anti-Atlas
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit an argan oil cooperative outside Taroudant (free, purchases from 150 MAD). Learn the
                      traditional production process and buy genuine argan oil. Alternatively, drive to
                      Tafraout via the Anti-Atlas (3 hours) for a full mountain excursion (from 600 MAD private driver).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk through the citrus and olive groves outside the eastern ramparts (free). Lunch
                      at a local restaurant (from 40 MAD). Final souk shopping for souvenirs. Return to
                      the Berber Souk for any items you spotted on Day 1.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Farewell sunset walk along the ramparts. Dinner featuring Souss Valley specialties
                      — try amlou, saffron tagine, and local pastries (from 80 MAD). Final mint tea ceremony
                      at a Place Assarag cafe. Estimated Day 2 cost: from 300-800 MAD (depending on excursion).
                    </p>
                  </div>
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
            Ready to Explore Taroudant?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the magnificent red ramparts and authentic Berber souks to argan cooperatives and
            the Anti-Atlas mountains, Taroudant offers the Morocco experience many travelers dream of
            but rarely find. Start planning your visit today.
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
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Marrakech Guide
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

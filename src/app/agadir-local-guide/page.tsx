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
  Building,
  Users,
  Navigation,
  Anchor,
  Fish,
  TreesIcon,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Agadir Like a Local: Hidden Gems & Neighborhoods 2026 | Insider Guide',
  description:
    'Discover Agadir like a local in 2026. Souk El Had, Agadir Oufella sunset, Talborjt neighborhood cheap tajine, Anza beach, Agadir Marina, Inezgane market, Paradise Valley, Taghazout surf village, real prices vs tourist prices.',
  keywords: [
    'agadir like a local',
    'agadir hidden gems',
    'souk el had agadir',
    'agadir local food',
    'agadir neighborhoods',
    'agadir off beaten path',
    'agadir oufella',
    'talborjt agadir',
    'anza beach agadir',
    'agadir marina',
    'inezgane market',
    'paradise valley agadir',
    'taghazout surf village',
    'agadir port fish bbq',
    'valley of the birds agadir',
    'crocoparc agadir',
    'tiznit day trip agadir',
    'agadir local guide 2026',
    'agadir authentic experiences',
    'agadir real prices',
  ],
  openGraph: {
    title: 'Agadir Like a Local: Hidden Gems & Neighborhoods 2026',
    description:
      'Go beyond the resort strip. Discover authentic Agadir experiences including Souk El Had, Oufella sunset, Talborjt cheap eats, Anza beach, port fish BBQ, Paradise Valley, and Taghazout surf village.',
    url: `${BASE_URL}/agadir-local-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-agadir.webp`,
        width: 1200,
        height: 630,
        alt: 'Agadir beach and coastline with the Agadir Oufella kasbah ruins on the hill above and the Atlantic Ocean stretching to the horizon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agadir Like a Local: Hidden Gems & Neighborhoods 2026',
    description:
      'Beyond the resort strip. Souk El Had, Oufella sunset, port fish BBQ, Talborjt cheap tajine, Paradise Valley waterfalls, and Taghazout surf village with real local prices.',
    images: [`${BASE_URL}/images/hero-agadir.webp`],
  },
  alternates: { canonical: `${BASE_URL}/agadir-local-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/agadir-local-guide`,
  name: 'Agadir Like a Local: Hidden Gems & Neighborhoods 2026',
  description:
    'An insider guide to Agadir beyond the resort strip. Discover authentic neighborhoods, Souk El Had, local food, Paradise Valley, and hidden gems that package tourists never find.',
  url: `${BASE_URL}/agadir-local-guide`,
  image: `${BASE_URL}/images/hero-agadir.webp`,
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
  mainEntityOfPage: `${BASE_URL}/agadir-local-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Agadir',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Agadir', item: `${BASE_URL}/agadir` },
      { '@type': 'ListItem', position: 3, name: 'Local Guide', item: `${BASE_URL}/agadir-local-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the hidden gems of Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'The best hidden gems include Agadir Oufella (kasbah ruins with panoramic sunset views, free), the fish BBQ stalls at the port (from 30 MAD), Anza beach north of the city (less crowded than the main beach), Talborjt neighborhood for cheap local tajine (from 25 MAD), Valley of the Birds (free park), Inezgane wholesale market (15 minutes away), the banana plantations of the Souss Valley, and Paradise Valley waterfalls in the foothills of the Atlas Mountains.' } },
    { '@type': 'Question', name: 'What is Souk El Had in Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Souk El Had is the largest souk in the Souss-Massa region with over 6,000 shops spread across a massive walled compound. Unlike tourist souks in Marrakech, this is where Agadir residents do their daily shopping. Sections include fresh produce, spices, argan oil, clothing, electronics, household goods, and a massive food court. Prices are significantly lower than tourist areas. The souk is open daily except Monday. Budget 2-3 hours for a proper visit.' } },
    { '@type': 'Question', name: 'Where do locals eat in Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Locals eat at the fish BBQ stalls at the port (grilled fish from 30 MAD), the cheap restaurants in Talborjt neighborhood (tajine from 25 MAD), the food stalls inside Souk El Had (various dishes from 15 MAD), and breakfast spots serving msemen and harira throughout the city (from 5 MAD). Avoid the beachfront tourist restaurants where prices are double or triple local rates.' } },
    { '@type': 'Question', name: 'Is Agadir worth visiting beyond the beach?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. While Agadir is known for its beach, the surrounding area offers exceptional experiences: Souk El Had (6,000 shops), Agadir Oufella sunset viewpoint, Paradise Valley waterfalls (60 km), Taghazout surf village (15 km north), Inezgane market (15 minutes), Tiznit silver town day trip, Crocoparc, and the Souss Valley banana plantations. Two to three days beyond the beach reveals a very different Morocco.' } },
    { '@type': 'Question', name: 'What are the real prices vs tourist prices in Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'The difference is significant. A fish meal at the port costs from 30-50 MAD locally versus from 100-200 MAD at beachfront restaurants. A petit taxi ride costs from 5-10 MAD on the meter versus from 20-30 MAD without. Tajine in Talborjt costs from 25 MAD versus from 60-100 MAD in tourist restaurants. Fresh orange juice is from 5 MAD at street stalls versus from 15-20 MAD at beachfront cafes. Always insist on the taxi meter.' } },
    { '@type': 'Question', name: 'How do I get to Paradise Valley from Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Paradise Valley (Imouzzer des Ida Outanane) is about 60 km northeast of Agadir. The easiest way is by grand taxi (from 300-400 MAD for the car, round trip, negotiable) or rental car. The road passes through the Souss Valley and up into the foothills. The valley has natural pools, small waterfalls, and palm groves. Bring swimwear and water shoes. Entry to the valley is from 20 MAD. A full day trip is recommended.' } },
  ],
};

/* ===============================================================
   DATA: NEIGHBORHOODS & LOCAL SPOTS
   =============================================================== */

const neighborhoods = [
  {
    name: 'Agadir Oufella (Kasbah Ruins)',
    icon: Mountain,
    category: 'Historic Viewpoint',
    vibe: 'Panoramic & Reflective',
    description:
      'High above the modern city, the ruins of Agadir Oufella (the old kasbah) are the spiritual heart of Agadir. The original fortress, built in 1540, was destroyed in the devastating 1960 earthquake that killed over 15,000 people and leveled the entire city. Today, only the restored walls and the Arabic inscription "God, Country, King" remain, along with a memorial to the earthquake victims. But the real draw is the view: a 360-degree panorama encompassing the entire sweep of Agadir Bay, the modern city grid, the Atlas Mountains to the east, and the Atlantic stretching to infinity. At sunset, when the bay turns gold and the mountains glow purple, this is one of the most beautiful viewpoints in all of Morocco.',
    insiderTip:
      'Visit 30-45 minutes before sunset for the best light and colors. A petit taxi from the city center costs from 20-30 MAD (negotiate before). The road up is steep and winding. There are no facilities at the top, so bring water. The site is free to visit. On clear days, you can see the Anti-Atlas Mountains in the distance. The memorial garden is peaceful and worth a quiet moment. This is where locals bring out-of-town guests to show them the city.',
  },
  {
    name: 'Souk El Had',
    icon: ShoppingBag,
    category: 'Massive Local Market',
    vibe: 'Bustling & Authentic',
    description:
      'Souk El Had is not a tourist attraction — it is where Agadir lives. With over 6,000 shops spread across a massive walled compound, it is the largest souk in the Souss-Massa region and one of the biggest in Morocco. The souk is organized into sections: fresh produce (mountains of oranges, argan fruits, dates, and seasonal vegetables), spices and dried goods (cumin, saffron, ras el hanout by the kilo), clothing and textiles, electronics, household goods, and a sprawling food court. The argan oil section is particularly important — the Souss Valley is the world center for argan production, and the souk sells it at local prices far below what tourists pay in Marrakech or Essaouira. The atmosphere is chaotic, colorful, and absolutely authentic.',
    insiderTip:
      'Enter through Gate 3 (Bab 3) for the produce and spice section. The souk is closed on Mondays. Morning (9-11 AM) is the busiest and most atmospheric time. For argan oil, go to the dedicated argan section and taste before buying (culinary argan from 80-120 MAD per liter, cosmetic argan from 150-250 MAD per liter). These are genuine local prices — Marrakech charges from 200-400 MAD or more. Bring small bills and coins. Practice basic Arabic numbers for bargaining.',
  },
  {
    name: 'Talborjt Neighborhood',
    icon: Users,
    category: 'Working-Class Local Quarter',
    vibe: 'Authentic & Budget-Friendly',
    description:
      'Talborjt, located inland from the tourist beach strip, is where Agadir working and middle-class residents live. The neighborhood is not beautiful in the postcard sense — it is a grid of concrete apartment buildings, busy streets, and small shops. But it is where you find the most authentic and affordable food in the city. Small restaurants with steaming tajine pots, rotisserie chicken joints, sandwich shops, and juice bars line every block. A complete tajine lunch with bread costs from 25 MAD, a rotisserie half-chicken from 20 MAD, and a fresh juice from 5 MAD. There are no tourists, no English menus, and no inflated prices. This is the Agadir that locals know.',
    insiderTip:
      'Walk south from the tourist zone along Avenue Hassan II to reach Talborjt. The best cheap restaurants are along the main commercial streets. Look for the ones with the most local customers at lunchtime (12-2 PM). For a snack, the panini and bocadillo shops sell stuffed sandwiches from 10-15 MAD. The neighborhood is perfectly safe during the day but not especially interesting after dark. Combine with a visit to Souk El Had, which is a short walk away.',
  },
  {
    name: 'Anza Beach',
    icon: Waves,
    category: 'Local Beach Alternative',
    vibe: 'Quiet & Uncrowded',
    description:
      'While tourists crowd the main Agadir beach strip with its sunbed vendors and restaurant touts, locals head north to Anza. This stretch of coast between Agadir and Taghazout is rockier and wilder than the main beach, with smaller sandy coves tucked between headlands. The waves are better for surfing (though not as consistent as Taghazout), the crowds are minimal, and the handful of beachfront restaurants serve fresh fish at local prices. Anza is also where Agadir fishing community lives, and the small port has boats being repaired, nets being mended, and the salt-worn atmosphere of a working coastline.',
    insiderTip:
      'A petit taxi to Anza costs from 15-20 MAD from central Agadir. The best swimming coves are accessible by foot from the road. Bring your own towel and supplies as facilities are minimal. The fish restaurants near the Anza port serve grilled catch of the day from 30-50 MAD. In winter, the surf breaks attract local surfers. This is the beach experience for those who want the Atlantic without the resort atmosphere.',
  },
  {
    name: 'Agadir Marina',
    icon: Anchor,
    category: 'Modern Waterfront',
    vibe: 'Upscale & Social',
    description:
      'The Agadir Marina, opened in 2007, brought a touch of Mediterranean glamour to this Atlantic city. The complex includes a yacht harbor, a promenade lined with restaurants and cafes, shops, and a small commercial center. It is where young, affluent Agadir comes to socialize, especially on warm evenings when the restaurants fill and the promenade buzzes with energy. The architecture is modern Moroccan, with arched walkways and ochre walls that reference traditional design. While it is more polished than the rest of the city, the marina has become a genuine gathering place for locals, not just a tourist attraction.',
    insiderTip:
      'Visit in the evening for the best atmosphere. The restaurants are pricier than Talborjt (mains from 70-150 MAD) but the waterfront setting is lovely for a special meal. The ice cream shops are popular with families. The marina connects to the northern end of the main beach promenade, making it easy to combine with a beach walk. Free to explore and walk around.',
  },
  {
    name: 'Inezgane',
    icon: Globe,
    category: 'Twin City & Wholesale Hub',
    vibe: 'Chaotic & Bargain-Rich',
    description:
      'Inezgane, technically a separate city 15 km south of Agadir, functions as Agadir chaotic twin. Its massive wholesale market is where traders from across southern Morocco come to buy in bulk: clothing, textiles, electronics, household goods, shoes, and food products at rock-bottom wholesale prices. The market area is a labyrinth of narrow alleys packed with stalls, the noise is overwhelming, and the energy is intoxicating. Inezgane is not for the faint-hearted — it is loud, crowded, and entirely Moroccan — but for bargain hunters willing to brave the chaos, the prices are unbeatable. It is also a major transport hub, with grand taxis and buses departing to destinations across southern Morocco.',
    insiderTip:
      'Take a grand taxi from Agadir to Inezgane (from 5 MAD per seat, shared, 15 minutes). The market area is next to the grand taxi station. Go in the morning when traders are setting up and goods are freshest. Clothing and shoes are the best bargains. Do not bring valuables as the crowds are thick. The food stalls in the market serve hearty meals from 15-20 MAD. Inezgane is not a tourist destination, and that is exactly the point.',
  },
];

/* ===============================================================
   DATA: LOCAL FOOD EXPERIENCES
   =============================================================== */

const localFoodSpots = [
  {
    name: 'Fish BBQ at the Port',
    icon: Fish,
    category: 'Harbor Grill',
    price: 'From 30 MAD per plate',
    description:
      'The Agadir fishing port is one of the most important in Morocco, landing sardines, anchovies, sea bream, shrimp, and squid daily. Adjacent to the commercial port, a row of open-air grill restaurants serves the freshest possible seafood at prices that make tourist beachfront restaurants look like robbery. Choose your fish from the display (or buy it fresh from the nearby vendors), and it will be grilled over charcoal and served with bread, salad, olives, and chermoula sauce. A plate of grilled sardines costs from 20 MAD. A mixed fish grill with shrimp and sole runs from 40-60 MAD. A full seafood feast for two costs from 100-150 MAD.',
    insiderTip:
      'Arrive around 11 AM-1 PM for the freshest fish from the morning catch. The grill stalls closest to the actual port (not the ones facing the road) have the best prices. Point at what you want and agree on the price before grilling. Bring your own napkins and wet wipes. The port is a 10-minute taxi ride from the beach strip (from 10-15 MAD). This is the single most authentic food experience in Agadir.',
  },
  {
    name: 'Souk El Had Food Court',
    icon: UtensilsCrossed,
    category: 'Market Eating',
    price: 'From 15 MAD per dish',
    description:
      'Inside Souk El Had, the food section is a revelation. Stalls serve freshly cooked tagines, grilled meats, soups, salads, and the Souss specialty of tafarnout (thin, crispy Amazigh bread served with argan oil and honey). Eat at communal tables surrounded by market traders and local shoppers. The prices are the lowest in Agadir: a bowl of harira soup from 5 MAD, a plate of grilled kefta from 15 MAD, a small tajine from 20 MAD, and fresh bread baked in wood-fired ovens from 1 MAD per loaf. The fresh-squeezed juice stalls sell orange, pomegranate, and mixed fruit juices from 5 MAD.',
    insiderTip:
      'The food stalls are concentrated near Gate 5 (Bab 5) and the central area of the souk. Go at lunchtime (12-2 PM) when the cooking is at its peak. Try the Amazigh specialties that you will not find in tourist restaurants: tafarnout with amlou (almond and argan paste, from 10 MAD), bessara (fava bean soup, from 5 MAD), and rfissa. Sit where locals sit and point at what looks good.',
  },
  {
    name: 'Talborjt Cheap Tajine Restaurants',
    icon: Heart,
    category: 'Budget Local Dining',
    price: 'From 25 MAD per meal',
    description:
      'The small restaurants of Talborjt are Agadir version of fast food — except the food is slow-cooked, generous, and genuinely delicious. Each restaurant has a row of individual tajine pots simmering on gas burners. You point at which one you want: chicken with preserved lemon and olives (from 25 MAD), kefta with egg and tomato (from 25 MAD), fish tajine (from 30 MAD), or lamb with prunes (from 35 MAD). It arrives at your table still bubbling, with a basket of warm bread. No menu, no pretense, just honest Moroccan home-style cooking at prices that locals consider fair.',
    insiderTip:
      'The best restaurants are identified by the number of simmering pots visible from the street. More pots means more variety and faster turnover (fresher food). Lunch between 12-2 PM is peak time. A complete meal with a tajine, bread, and a bottle of water costs from 30 MAD. Tipping from 2-5 MAD is appreciated. These restaurants do not serve alcohol. The quality is often better than tourist restaurants at a quarter of the price.',
  },
  {
    name: 'Breakfast: Street-Side Msemen & Amlou',
    icon: Sun,
    category: 'Morning Ritual',
    price: 'From 5 MAD',
    description:
      'The Souss region has its own breakfast traditions that differ from northern Morocco. The star is amlou, a thick paste made from ground almonds, argan oil, and honey that is uniquely Amazigh and utterly addictive. Served alongside msemen (flaky flatbread) and baghrir (spongy pancakes), it is the quintessential Agadir morning meal. Street stalls throughout the city sell msemen with amlou from 5 MAD, or with honey and butter from 3 MAD. Pair with mint tea (from 5 MAD at a street stall) or a nous-nous coffee (from 8 MAD). The Amazigh women who make msemen on portable griddles are artists, layering and folding the dough with practiced speed.',
    insiderTip:
      'Look for the msemen stalls near Souk El Had and in Talborjt. The ones with the biggest queues are the freshest. Specifically ask for amlou (a-mloo) if you want the argan-almond paste — it is a Souss specialty not widely available in northern Morocco. Buy a small jar of amlou from Souk El Had (from 30-50 MAD) to take home. A full breakfast of 2 msemen with amlou, fresh juice, and tea costs from 15-20 MAD.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS & EXCURSIONS
   =============================================================== */

const dayTrips = [
  {
    name: 'Paradise Valley (Imouzzer des Ida Outanane)',
    icon: Mountain,
    category: 'Nature & Waterfalls',
    price: 'From 20 MAD entry',
    distance: '60 km from Agadir',
    description:
      'Tucked into the foothills of the western Atlas Mountains, Paradise Valley is a lush river gorge with natural swimming pools, small cascading waterfalls, and groves of palm and oleander trees. The contrast with Agadir dry coastal landscape is startling — within an hour you transition from arid coastline to a green, water-filled canyon. The pools range from shallow wading areas to deep swimming holes fed by cool mountain water. Local guides can lead you to the best spots, including hidden upper pools that most visitors miss. The tiny Amazigh village of Imouzzer above the valley has a waterfall and Thursday market. The drive through the Souss Valley, passing banana plantations and argan trees, is beautiful in itself.',
    insiderTip:
      'Hire a grand taxi (from 300-400 MAD return for the car, negotiate at the central taxi stand) or rent a car. The road is paved but winding. Bring swimwear, water shoes (the rocks are slippery), sunscreen, and a picnic. Entry to the valley is from 20 MAD. Local guides at the entrance charge from 50-100 MAD and are worth it for finding the best pools. Visit on weekdays to avoid crowds. The Thursday market in Imouzzer village is worth timing your visit around.',
  },
  {
    name: 'Taghazout Surf Village',
    icon: Waves,
    category: 'Surf & Beach Culture',
    price: 'Free to visit / Surf lesson from 250 MAD',
    distance: '15 km north of Agadir',
    description:
      'Taghazout, once a sleepy fishing village, has become Morocco most famous surf destination. Located 15 km north of Agadir along the coast road, this small village of whitewashed houses tumbling down a hillside to the sea has a laid-back, international atmosphere. The beaches to the north and south (Anchor Point, Hash Point, Killer Point, Panoramas) offer consistent Atlantic surf from September to April. Even if you do not surf, Taghazout is worth visiting for its bohemian cafes, yoga studios, rooftop terraces overlooking the ocean, fresh fish restaurants, and the relaxed vibe of a community built around the sea. The contrast to resort Agadir is stark and welcome.',
    insiderTip:
      'A grand taxi from Agadir to Taghazout costs from 10-15 MAD per person (shared) or from 50-70 MAD for the whole car. Alternatively, local bus number 32 runs the route (from 5 MAD). Surf lessons start from 250 MAD for 2 hours with board rental. For non-surfers, the village is charming for a half-day visit: explore the narrow lanes, have lunch at a rooftop cafe (fish tajine from 40 MAD), and watch the surfers. The best surf season is October to March.',
  },
  {
    name: 'Tiznit Day Trip',
    icon: Compass,
    category: 'Silver Town & Medina',
    price: 'From 15 MAD (grand taxi)',
    distance: '95 km south of Agadir',
    description:
      'Tiznit, a small walled city 95 km south of Agadir, is famous throughout Morocco for its silver jewelry. The medina, enclosed within 5 km of pink-stone ramparts, is compact, quiet, and largely tourist-free. The silver souk (Souk des Bijoutiers) is where Amazigh silversmiths craft traditional jewelry: heavy silver bracelets, fibulae (ornate cloak pins), Tuareg crosses, and rings set with semi-precious stones. Prices are significantly lower than Marrakech or Essaouira. Beyond the silver, Tiznit medina has a pleasant, lived-in atmosphere with small squares, neighborhood mosques, and a genuine old-Morocco feel that Agadir, rebuilt entirely after 1960, lacks.',
    insiderTip:
      'Grand taxis from Inezgane (the transport hub south of Agadir) to Tiznit cost from 15-20 MAD per person (shared, 1.5 hours). The silver souk is inside the medina near the main gate. For silver jewelry, expect to pay from 50-500 MAD depending on size and craftsmanship. Negotiate but remember that handmade silver has real value. Lunch in a Tiznit restaurant is from 25-40 MAD for tajine. The Thursday souk is the most lively. A half-day trip is sufficient.',
  },
  {
    name: 'Souss Valley Banana Plantations',
    icon: TreesIcon,
    category: 'Agricultural Heritage',
    price: 'Free (informal visits)',
    distance: '20-40 km east of Agadir',
    description:
      'The Souss Valley behind Agadir is Morocco agricultural heartland, producing the majority of the country citrus fruits, tomatoes, and bananas. The banana plantations, in particular, surprise visitors who do not expect tropical fruit growing in Morocco. The valley stretches east from Agadir toward Taroudant, flanked by the Atlas Mountains to the north and the Anti-Atlas to the south. Driving through the valley, you pass endless rows of banana plants, citrus groves, and the iconic argan trees (found nowhere else on Earth except this region). Several cooperatives produce argan oil and welcome visitors to watch the traditional pressing process.',
    insiderTip:
      'Combine with a visit to Paradise Valley or a day trip to Taroudant. There are no formal plantation tours — you simply drive through the valley and stop where interest strikes. Argan oil cooperatives (particularly the women cooperatives) welcome visitors and sell directly at local prices (culinary argan from 80-120 MAD per liter). The road through the valley (N8 toward Taroudant) is scenic and well-paved. The best time is morning when the valley is coolest and the light on the mountains is beautiful.',
  },
];

/* ===============================================================
   DATA: FREE & LOW-COST ACTIVITIES
   =============================================================== */

const freeActivities = [
  {
    name: 'Valley of the Birds',
    icon: TreesIcon,
    category: 'Free Park & Nature',
    price: 'Free',
    description:
      'This small but charming park, located between the beach and the city center on Boulevard du 20 Aout, is a green oasis in Agadir concrete urban landscape. Home to flamingos, peacocks, parrots, deer, and other animals in spacious enclosures, it functions as a mini zoo and botanical garden. Walking paths wind through shade trees and flower beds. The park is where Agadir families come for weekend picnics and where young children meet exotic birds for the first time. It is small (30-45 minutes to explore) but a pleasant break from the beach or city walking.',
    insiderTip:
      'Completely free to enter. Open daily from around 9 AM to 6 PM (hours vary). Best combined with a walk along the nearby beach promenade. The park is particularly nice in the late afternoon when the heat eases and families arrive. There is a small playground for children.',
  },
  {
    name: 'Crocoparc',
    icon: Eye,
    category: 'Wildlife Attraction',
    price: 'From 70 MAD',
    description:
      'Located 14 km from the city center, Crocoparc is a well-designed attraction housing over 300 Nile crocodiles in naturalistic habitats along with a cactus garden, turtle enclosure, and botanical areas. The park is set in beautiful landscaped grounds with winding paths, bridges, and viewing platforms. While it is a commercial attraction rather than a hidden gem, locals enjoy it for family outings. The cactus garden, featuring species from around the world adapted to the Souss climate, is surprisingly impressive. The feeding times, when the crocodiles become terrifyingly active, are the highlight.',
    insiderTip:
      'A petit taxi from the center costs from 40-60 MAD, or join one of the minibus excursions from the tourist zone (from 100 MAD including transport). Check feeding times on arrival as they change seasonally. Allow 1.5-2 hours. The on-site cafe is reasonably priced. The park is less crowded on weekday mornings. The cactus garden alone is worth the visit for plant enthusiasts.',
  },
];

/* ===============================================================
   DATA: REAL LOCAL PRICES
   =============================================================== */

const localPrices = [
  { item: 'Petit taxi (meter, city center)', local: 'From 5-10 MAD', tourist: 'From 20-30 MAD', tip: 'Always insist on the meter. Agadir taxis are orange. Say "compteur" (meter).' },
  { item: 'Grilled fish at the port', local: 'From 30-50 MAD', tourist: 'From 100-200 MAD (beach)', tip: 'Go to the port grill stalls, not the beachfront tourist restaurants.' },
  { item: 'Tajine lunch', local: 'From 25 MAD (Talborjt)', tourist: 'From 60-100 MAD (tourist zone)', tip: 'Walk 10 minutes inland from the beach to Talborjt for local prices.' },
  { item: 'Fresh orange juice', local: 'From 5 MAD', tourist: 'From 15-20 MAD', tip: 'Street stalls and souk vendors charge a third of beachfront cafes.' },
  { item: 'Argan oil (culinary, per liter)', local: 'From 80-120 MAD (Souk El Had)', tourist: 'From 200-400 MAD (Marrakech)', tip: 'Buy from Souk El Had or valley cooperatives, not tourist shops.' },
  { item: 'Grand taxi to Taghazout', local: 'From 10-15 MAD (shared)', tourist: 'From 100-150 MAD (private)', tip: 'Share a grand taxi from the rank. 6 passengers, fixed route, cheapest option.' },
  { item: 'Sunbed on the beach', local: 'From 20 MAD', tourist: 'From 50-100 MAD', tip: 'Walk away from the main tourist cluster for cheaper sunbed vendors.' },
  { item: 'Hammam (public)', local: 'From 15 MAD', tourist: 'From 150-300 MAD (spa)', tip: 'Public neighborhood hammams charge from 15 MAD. Bring your own savon beldi and towel.' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Walk 10 Minutes to Save 70%', icon: Footprints, description: 'The beachfront tourist strip charges resort prices. Walk just 10 minutes inland to Talborjt or the avenues behind the hotels, and prices for food, drinks, and taxis drop dramatically. This single tip saves more money than anything else in this guide.' },
  { tip: 'Buy Argan Oil at the Source', icon: ShoppingBag, description: 'The Souss Valley is the world only argan-producing region. Buy directly from Souk El Had (from 80-120 MAD per liter for culinary) or valley cooperatives. Tourist shops in Marrakech charge double or triple. Taste before buying — good argan oil has a nutty, toasted flavor.' },
  { tip: 'Agadir Is a Base, Not a Destination', icon: Compass, description: 'The smartest travelers use Agadir as a base for exploring the region: Paradise Valley, Taghazout, Tiznit, Taroudant, and the Souss Valley. The beach is pleasant but the surrounding area is where the real experiences are.' },
  { tip: 'Sunset at Oufella Is Non-Negotiable', icon: Sunset, description: 'No matter how short your Agadir stay, make time for sunset at Agadir Oufella. The panoramic view over the bay, city, and mountains is the definitive Agadir experience. Free, spectacular, and deeply moving given the site history.' },
  { tip: 'The Port Fish BBQ Is Sacred', icon: Fish, description: 'The grill stalls at the fishing port serve the freshest, cheapest seafood in the region. A full fish meal for from 30-50 MAD versus from 100-200 MAD at beachfront restaurants. Go for lunch, point at what you want, and enjoy one of Morocco best food experiences.' },
  { tip: 'Souk El Had Is Closed Mondays', icon: AlertTriangle, description: 'The biggest souk in the region closes every Monday. Plan your visit for any other day. Sunday and early morning on any day are the best times for the freshest produce and the most energetic atmosphere.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the hidden gems of Agadir?', answer: 'Agadir Oufella sunset viewpoint (free), fish BBQ at the port (from 30 MAD), Souk El Had with 6,000 shops, Anza beach (less crowded), Talborjt neighborhood for cheap local food (tajine from 25 MAD), Valley of the Birds (free park), Inezgane wholesale market, Paradise Valley waterfalls (60 km away), and Taghazout surf village (15 km north).' },
  { question: 'What is Souk El Had in Agadir?', answer: 'Souk El Had is the largest souk in the Souss-Massa region with over 6,000 shops. It sells everything from produce and spices to clothing, electronics, and argan oil at genuine local prices. Closed Mondays. Budget 2-3 hours for a full visit. Enter through Gate 3 for produce and spices.' },
  { question: 'Where do locals eat in Agadir?', answer: 'The port fish BBQ stalls (from 30 MAD), Talborjt neighborhood restaurants (tajine from 25 MAD), Souk El Had food stalls (from 15 MAD), and street-side msemen and amlou stalls (from 5 MAD). Avoid the beachfront tourist restaurants where prices are 2-3 times higher for the same or lesser quality food.' },
  { question: 'How do I get to Paradise Valley from Agadir?', answer: 'Grand taxi from Agadir (from 300-400 MAD return for the whole car, negotiate) or rental car. The drive is 60 km, about 1.5 hours via the scenic Souss Valley road. Bring swimwear, water shoes, and a picnic. Entry from 20 MAD. Local guides from 50-100 MAD. Best on weekdays.' },
  { question: 'Is Taghazout worth visiting if I do not surf?', answer: 'Absolutely. Taghazout is a charming whitewashed village with rooftop cafes, fresh fish restaurants (from 40 MAD), yoga studios, and a bohemian atmosphere. Watch surfers from the terraces, walk the coastal paths, and enjoy a half-day escape from resort Agadir. Grand taxi from 10-15 MAD per person shared.' },
  { question: 'What are real prices vs tourist prices in Agadir?', answer: 'Taxi rides: from 5-10 MAD (meter) vs from 20-30 MAD (without). Fish meal: from 30-50 MAD (port) vs from 100-200 MAD (beach). Tajine: from 25 MAD (Talborjt) vs from 60-100 MAD (tourist zone). Orange juice: from 5 MAD (street) vs from 15-20 MAD (beachfront). Argan oil: from 80-120 MAD/L (souk) vs from 200-400 MAD/L (tourist shops).' },
  { question: 'Is Agadir worth visiting beyond the beach?', answer: 'Yes. The surrounding region offers Paradise Valley waterfalls, Taghazout surf village, Tiznit silver town, the Souss Valley with banana and argan plantations, Inezgane wholesale market, and Souk El Had. Two to three days beyond the beach reveals a fascinating side of southern Morocco that package tourists miss entirely.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/agadir', icon: MapPin, title: 'Agadir City Guide', description: 'Complete guide to Agadir: accommodation, transport, and trip planning.' },
  { href: '/things-to-do-agadir', icon: Star, title: 'Things to Do in Agadir', description: 'Top attractions including beach, Oufella, Souk El Had, and excursions.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Tagine, couscous, Amazigh specialties, and street food explained.' },
  { href: '/morocco-budget-travel', icon: Lightbulb, title: 'Morocco Budget Travel', description: 'How to travel Morocco on any budget with real prices and tips.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Atlantic and Mediterranean beaches, surf breaks, and hidden coves.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function AgadirLocalGuidePage() {
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
            <span className="text-white">Local Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Eye className="w-4 h-4" />
            Insider Local Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Agadir Like a Local
            <br className="hidden md:block" /> Hidden Gems &amp; Neighborhoods
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Beyond the resort strip. Discover the souk, the port, the neighborhoods, and the
            surrounding valley that reveal the real Agadir — a city far more interesting than
            its beach reputation suggests.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Real Agadir Beyond the Resort Strip
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Ask most travelers about Agadir and they will mention the beach, the resorts, and
                maybe the weather. Agadir gets 300 days of sunshine a year and has Morocco longest
                sandy beach. But to see only the beach strip is to miss everything that makes this
                city and its surrounding region genuinely fascinating. The real Agadir is inland, at
                the port, up the hill, and out in the valley.
              </p>
              <p>
                Agadir was rebuilt from scratch after the devastating 1960 earthquake, which means it
                lacks the medieval medina charm of Fes or Marrakech. But what it has instead is equally
                compelling: the massive Souk El Had with its 6,000 shops, the haunting ruins of Agadir
                Oufella with their panoramic views, the fish BBQ stalls at the working port where a
                feast costs less than a cocktail at the resort bar, and the surrounding Souss Valley
                with its banana plantations, argan cooperatives, and Paradise Valley waterfalls.
              </p>
              <p>
                This guide is for travelers who want more than a sunbed. It covers the neighborhoods
                where locals eat for from 25 MAD, the day trips that reveal southern Morocco true
                character, the real prices that locals pay versus tourist markup, and the experiences
                that turn a beach holiday into a genuine encounter with Amazigh culture. The resort
                strip will always be there. The real Agadir is what you will remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Neighborhoods & Local Spots -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Agadir Neighborhoods &amp; Local Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Step off the beach strip and discover the neighborhoods, markets, and viewpoints that
            locals treasure.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All spots are accessible by petit taxi (from 5-30 MAD on the meter) or grand taxi.
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
            Eat Like a Local in Agadir
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From port-fresh fish BBQ to souk food courts and Amazigh breakfast traditions. Where
            locals eat, what they order, and what they actually pay.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Seasonal and catch-dependent variations apply.
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

      {/* -- Day Trips & Excursions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Agadir region offers some of Morocco most diverse day trips — from mountain waterfalls
            and surf villages to silver towns and agricultural valleys.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All trips are accessible by grand taxi or rental car. Prices are for transport from Agadir.
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
                          <Ticket className="w-3.5 h-3.5" />
                          {trip.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Navigation className="w-3.5 h-3.5" />
                          {trip.distance}
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

      {/* -- Free & Low-Cost Activities -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Free &amp; Low-Cost Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Agadir offers excellent free and budget-friendly experiences beyond the beach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {freeActivities.map((activity) => {
              const ActIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {activity.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3 h-3" />
                          {activity.price}
                        </span>
                        <span className="inline-block px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {activity.description}
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span>{' '}
                      {activity.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Real Local Prices -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Real Prices: Local vs. Tourist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The price difference between the resort strip and local Agadir is dramatic. Know these
            prices and you will save significantly.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for the Real Agadir
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical knowledge that separates resort tourists from travelers who experience the real city.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Local&apos;s Day in Agadir
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Skip the resort pool and experience Agadir the way residents do, from souk mornings to Oufella sunsets.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Breakfast &amp; Souk El Had
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Start with msemen and amlou at a street stall near your hotel (from 10 MAD with
                    tea). Take a petit taxi to Souk El Had (from 10 MAD). Spend 2-3 hours exploring
                    the 6,000 shops. Buy argan oil directly (from 80 MAD per liter), taste olives,
                    and browse the spice section.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Eat lunch inside the souk at the food court stalls (tajine from 20 MAD, harira
                    from 5 MAD). Try the Amazigh specialty tafarnout with amlou (from 10 MAD).
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
                  Afternoon: Port Fish BBQ &amp; Anza Beach
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Head to the fishing port for grilled fish at the BBQ stalls (from 30 MAD for a
                    full plate). Watch the boats unloading their catch. This is where you eat the
                    freshest and cheapest seafood in the region.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Take a taxi to Anza beach (from 15 MAD) for a swim and relaxation without the
                    resort crowds. Alternatively, visit Valley of the Birds park (free) for a shaded
                    walk before heading to the waterfront.
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
                  Evening: Oufella Sunset &amp; Marina Dinner
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Take a taxi to Agadir Oufella (from 20-30 MAD) and arrive 30-45 minutes before
                    sunset. The panoramic view over the bay, city, and Atlas Mountains as the sun
                    drops is unforgettable. Free to visit.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Descend to the Agadir Marina for dinner at a waterfront restaurant (from 70 MAD)
                    or save money with a tajine in Talborjt (from 25 MAD). Walk the beach promenade
                    after dark when it fills with families and the evening energy picks up. Estimated
                    total day cost: from 150-350 MAD per person.
                  </p>
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

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover the Real Agadir?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Step off the resort strip and into the Agadir locals know. From Souk El Had bargains
            and port fish BBQ to Oufella sunsets and Paradise Valley waterfalls, the real southern
            Morocco is waiting.
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
              href="/things-to-do-agadir"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Star className="w-5 h-5" />
              Things to Do
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

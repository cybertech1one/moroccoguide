import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Waves,
  Sun,
  MapPin,
  Star,
  Clock,
  ShoppingBag,
  Compass,
  Camera,
  ArrowRight,
  Utensils,
  Hotel,
  Plane,
  Users,
  Shield,
  DollarSign,
  Gem,
  Droplets,
  Mountain,
  Fish,
  Music,
  Baby,
  Car,
  Binoculars,
  Trophy,
  Sparkles,
  Navigation,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Anchor,
  Wind,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Agadir & Souss Region Guide | Beach Resort, Surfing & Argan Country | Morocco',
  description:
    'Complete guide to Agadir and the Souss-Massa region. Discover Morocco\'s premier beach resort with 300+ sunny days, world-class surfing at Taghazout, Souk El Had, argan oil cooperatives, Paradise Valley, and family-friendly attractions. Beaches, nightlife, food, and accommodation guide.',
  keywords: [
    'Agadir Morocco guide',
    'Agadir beach',
    'Taghazout surfing',
    'Souss-Massa region',
    'Souk El Had Agadir',
    'argan oil Morocco',
    'Paradise Valley Agadir',
    'Agadir nightlife',
    'Agadir restaurants',
    'Agadir all-inclusive resorts',
    'Crocoparc Agadir',
    'Taroudant Morocco',
    'Tiznit silver Morocco',
    'Legzira beach',
    'Imsouane surfing',
    'Agadir family holiday',
    'Morocco beach holiday',
    'Agadir Oufella kasbah',
  ],
  openGraph: {
    title: 'Agadir & Souss Region Guide - Morocco\'s Premier Beach Resort',
    description:
      'Your complete guide to Agadir and the Souss-Massa region. Beaches, surfing, argan oil, day trips, nightlife, food, and where to stay.',
    url: 'https://citytoursmorocco.com/agadir-guide',
    images: [
      {
        url: '/images/card-beach.webp',
        width: 1200,
        height: 630,
        alt: 'Agadir beach promenade with golden sand and palm trees along the Atlantic coast',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/agadir-guide' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/agadir-guide',
  name: 'Agadir & Souss Region Guide - Morocco\'s Premier Beach Resort',
  description:
    'Comprehensive guide to Agadir and the Souss-Massa region including beaches, surfing, argan oil cooperatives, day trips, nightlife, restaurants, and accommodation options.',
  url: 'https://citytoursmorocco.com/agadir-guide',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://citytoursmorocco.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Agadir & Souss Region', item: 'https://citytoursmorocco.com/agadir-guide' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   BEACH DATA
   ═══════════════════════════════════════════════════════════════ */

const beaches = [
  {
    name: 'Agadir Main Beach',
    distance: 'City center',
    length: '10 km',
    bestFor: 'Swimming, sunbathing, families',
    description:
      'The crown jewel of Agadir stretches for a magnificent 10 kilometers of wide, golden sand along a gently curving bay. The beach is backed by a palm-lined promenade (the Corniche) with restaurants, cafes, and resort hotels. The water is relatively calm compared to other Atlantic beaches in Morocco, making it ideal for families. Lifeguards patrol during peak season, and sun loungers with parasols are available for rent (20-40 MAD per day). The southern end near the marina is the most developed, while the northern stretch toward Taghazout becomes progressively quieter and more natural.',
    image: '/images/card-beach.webp',
    highlights: ['10 km of uninterrupted golden sand', 'Calm swimming conditions year-round', 'Palm-lined Corniche promenade', 'Lifeguards and sun lounger rental'],
  },
  {
    name: 'Taghazout Beach',
    distance: '19 km north',
    length: '1.5 km',
    bestFor: 'Surfing, backpacker scene, yoga',
    description:
      'The bohemian surf village of Taghazout has transformed from a sleepy fishing hamlet into Morocco\'s premier surf destination. The main beach sits beneath the village and offers consistent right-hand point breaks that attract surfers from around the world. The village itself is a charming labyrinth of blue-and-white painted houses, rooftop cafes overlooking the ocean, surf shops, and yoga studios. The vibe is relaxed, international, and unmistakably surf-culture. While the main beach gets busy, walking five minutes north or south reveals quieter spots.',
    image: '/images/card-beach.webp',
    highlights: ['World-class point break surf', 'Bohemian village atmosphere', 'Rooftop cafes with ocean views', 'Yoga retreats and surf camps'],
  },
  {
    name: 'Tamraght Beach',
    distance: '15 km north',
    length: '2 km',
    bestFor: 'Surfing, budget surf camps',
    description:
      'Just south of Taghazout, Tamraght (also spelled Tamraght or Tamraght) is the slightly less polished, more affordable cousin. The beach here is wider and less protected than Taghazout, producing excellent surf conditions particularly at the Banana Point and Devil\'s Rock breaks. The village is home to dozens of surf camps offering accommodation and lessons at prices well below Taghazout. The banana plantations behind the village give the area its distinctive character, and the overall atmosphere is more Moroccan and less international than its famous neighbor.',
    image: '/images/card-beach.webp',
    highlights: ['Banana Point and Devil\'s Rock surf breaks', 'Budget-friendly surf camps', 'Banana plantation backdrop', 'More local atmosphere than Taghazout'],
  },
  {
    name: 'Imsouane Beach',
    distance: '90 km north',
    length: '3 km',
    bestFor: 'Longboarding, intermediate surfers',
    description:
      'Imsouane is a tiny fishing village perched on a dramatic headland that shelters what many consider the longest wave in Morocco, and possibly all of Africa. The bay produces rides of up to 300 meters on a good day, making it a paradise for longboarders. The village itself is extremely laid-back with a handful of guesthouses, fish restaurants, and not much else. The bay side (La Baie) offers the famous long wave, while the exposed side (La Cathedrale) produces powerful barrels for advanced surfers. Get here before it becomes the next Taghazout.',
    image: '/images/card-beach.webp',
    highlights: ['Longest wave in Morocco (up to 300m rides)', 'Pristine fishing village atmosphere', 'Two distinct surf breaks', 'Fresh fish restaurants on the harbor'],
  },
  {
    name: 'Aglou Beach',
    distance: '130 km south',
    length: '5 km',
    bestFor: 'Solitude, local atmosphere, bodyboarding',
    description:
      'A wild, windswept beach south of Tiznit that remains almost entirely off the tourist radar. The village of Aglou Plage consists of a scattering of concrete houses and a few basic restaurants serving grilled fish. The beach is broad, flat, and pounded by powerful Atlantic swells that make it better for bodyboarding and walks than swimming. The real draw is the dramatic landscape: red-brown cliffs, crashing surf, and the feeling of being at the edge of the world. The cave dwellings carved into the cliffs south of the village are a fascinating curiosity.',
    image: '/images/card-beach.webp',
    highlights: ['Off-the-beaten-path destination', 'Dramatic cliff scenery', 'Cave dwellings in the cliffs', 'Powerful waves for bodyboarding'],
  },
  {
    name: 'Legzira Beach',
    distance: '150 km south',
    length: '4 km',
    bestFor: 'Photography, dramatic scenery, sunset',
    description:
      'Famous worldwide for its extraordinary natural stone arches carved by the Atlantic into russet-red cliffs, Legzira is one of Morocco\'s most photographed beaches. One of the two original arches collapsed in 2016, but the remaining arch is still a staggering sight, particularly at sunset when the red rock glows against the deepening sky. The beach itself is expansive and wild, with strong currents that make swimming inadvisable, but the scenery alone justifies the journey. Visit at low tide for the best views and to walk beneath the arch.',
    image: '/images/card-beach.webp',
    highlights: ['Iconic natural stone arch', 'Stunning red cliff landscape', 'World-famous sunset photography', 'Best visited at low tide'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SURF BREAKS DATA
   ═══════════════════════════════════════════════════════════════ */

const surfBreaks = [
  {
    name: 'Anchor Point',
    location: 'Taghazout',
    type: 'Right-hand point break',
    level: 'Intermediate to Advanced',
    bestSeason: 'October - April',
    description: 'Morocco\'s most famous wave. A long, powerful right-hander that wraps around the point, producing rides of 200+ meters on big swells. Works best on medium to large northwest swells with light east winds. Can get very crowded.',
  },
  {
    name: 'Killer Point',
    location: 'North of Taghazout',
    type: 'Right-hand point break',
    level: 'Advanced',
    bestSeason: 'November - March',
    description: 'A heavy, fast right-hander that breaks over shallow reef. Named for the orcas once spotted offshore. Requires a scramble down the cliff to access. Not for beginners. Produces some of the best barrels in the region.',
  },
  {
    name: 'Hash Point',
    location: 'Taghazout village',
    type: 'Right-hand point break',
    level: 'Intermediate',
    bestSeason: 'September - May',
    description: 'A more forgiving right-hand point break directly in front of Taghazout village. Smaller and slower than Anchor Point, making it perfect for improving intermediates. Easy paddle out from the rocks.',
  },
  {
    name: 'Panoramas',
    location: 'Taghazout',
    type: 'Beach break',
    level: 'Beginner to Intermediate',
    bestSeason: 'Year-round',
    description: 'A sandy-bottom beach break just south of Taghazout village. Offers mellow, peeling waves that are ideal for beginners and longboarders. Multiple peaks spread the crowd. Surf schools operate here daily.',
  },
  {
    name: 'Banana Point',
    location: 'Tamraght',
    type: 'Right-hand point break',
    level: 'Intermediate',
    bestSeason: 'October - April',
    description: 'A fun, playful right-hander that breaks in front of the banana plantations. Less powerful than Anchor Point but more consistent and forgiving. Very popular with the surf camp crowd from Tamraght.',
  },
  {
    name: 'La Baie (Imsouane)',
    location: 'Imsouane',
    type: 'Right-hand point break',
    level: 'All levels',
    bestSeason: 'September - May',
    description: 'The legendary long wave of Imsouane. Breaks into a sheltered bay, producing incredibly long, mellow rides that can exceed 300 meters. Perfect for longboarding. One of the most magical waves in Morocco.',
  },
  {
    name: 'La Cathedrale (Imsouane)',
    location: 'Imsouane',
    type: 'Reef break',
    level: 'Advanced',
    bestSeason: 'November - March',
    description: 'The exposed, ocean-facing side of the Imsouane headland. Produces powerful, hollow waves that are a completely different character from the gentle bay. For experienced surfers only.',
  },
  {
    name: 'Devil\'s Rock',
    location: 'Tamraght',
    type: 'Reef break',
    level: 'Intermediate to Advanced',
    bestSeason: 'October - April',
    description: 'A rocky reef break between Tamraght and Taghazout producing fast, hollow waves. Best on a mid to high tide. The paddle out through the rocks requires experience.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WATER SPORTS DATA
   ═══════════════════════════════════════════════════════════════ */

const waterSports = [
  {
    name: 'Jet Ski',
    price: '400-600 MAD / 30 min',
    location: 'Agadir Marina & main beach',
    season: 'Year-round',
    description: 'Jet ski rental is available along the main beach and at the marina. Operators provide life jackets and a brief orientation. Popular during summer when the sea is calmest. No license required for rental with an operator on board.',
  },
  {
    name: 'Parasailing',
    price: '300-500 MAD / 15 min',
    location: 'Agadir main beach',
    season: 'May - October',
    description: 'Soar above Agadir\'s coastline with tandem parasailing flights launched from the beach. The views of the entire bay, the Kasbah hill, and the Atlas Mountains in the distance are spectacular. Wind conditions are most stable in the morning.',
  },
  {
    name: 'Sea Kayaking',
    price: '150-250 MAD / hour',
    location: 'Agadir beach, Taghazout',
    season: 'Year-round',
    description: 'Single and tandem kayaks are available for rental along the beach. Paddle north from Agadir toward the cliffs for the most scenic route. In Taghazout, guided kayak tours explore sea caves and secluded coves inaccessible by land.',
  },
  {
    name: 'Banana Boat',
    price: '100-150 MAD / ride',
    location: 'Agadir main beach',
    season: 'June - September',
    description: 'A classic beach resort activity. Inflatable banana boats are towed behind a speedboat while riders attempt to hold on through sharp turns. Great fun for groups and families with older children. Available at multiple points along the beach.',
  },
  {
    name: 'Stand-Up Paddleboarding',
    price: '150-200 MAD / hour',
    location: 'Agadir beach, Taghazout bay',
    season: 'Year-round',
    description: 'SUP has exploded in popularity and is perfect for the calm morning waters of Agadir bay. Boards are available for rent along the beach, and guided SUP tours operate from Taghazout. The calm bay at Imsouane is also exceptional for SUP.',
  },
  {
    name: 'Scuba Diving',
    price: '500-800 MAD / dive',
    location: 'Agadir, Taghazout',
    season: 'May - November',
    description: 'While not Morocco\'s premier dive destination, the waters off Agadir offer interesting reef diving with visibility of 10-20 meters. Marine life includes octopus, moray eels, sea bass, and occasional rays. Several PADI-certified operators offer courses and guided dives.',
  },
  {
    name: 'Kitesurfing',
    price: '1,500-2,500 MAD / lesson',
    location: 'Agadir bay (north end)',
    season: 'April - September',
    description: 'The north end of Agadir bay and the beaches north toward Tamraght catch consistent afternoon thermal winds. Conditions are less consistent than Essaouira or Dakhla, but lessons and rental are available and the flat-water bay is excellent for beginners.',
  },
  {
    name: 'Fishing Trips',
    price: '300-800 MAD / half day',
    location: 'Agadir port',
    season: 'Year-round',
    description: 'Charter a traditional fishing boat from the port for a half-day of line fishing. Species include sea bream, sea bass, and mackerel. Some operators offer a full experience where your catch is grilled on the beach afterward.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DAY TRIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    name: 'Paradise Valley',
    distance: '30 km northeast',
    duration: 'Half day',
    description:
      'A stunning natural gorge in the foothills of the Anti-Atlas where a series of crystal-clear turquoise rock pools are connected by a seasonal river. The palm-lined valley was a hippie hangout in the 1960s and 1970s, reportedly visited by Jimi Hendrix. Today it is a popular escape from the beach, offering swimming in natural pools, cliff jumping (with caution), and a scenic hike along the valley floor. The access road winds through argan tree forests where goats famously climb the branches. Best visited in spring when water levels are highest.',
    highlights: ['Turquoise natural rock pools', 'Swimming and cliff jumping', 'Argan trees with climbing goats', 'Palm-lined valley hike'],
    bestTime: 'March - June (highest water levels)',
    cost: 'Free (10 MAD parking fee)',
    image: '/images/card-beach.webp',
  },
  {
    name: 'Tiznit',
    distance: '90 km south',
    duration: 'Half day to full day',
    description:
      'Known as the silver capital of Morocco, Tiznit is a walled town with an atmospheric medina that specializes in Berber silver jewelry. The town\'s jewelers produce intricate brooches, necklaces, fibulae, and rings using techniques passed down through generations. The medina is small enough to explore without getting lost, and the shopping is superb if you appreciate handcrafted metalwork. The Source Bleue (Blue Spring) in the center of the medina is a small oasis pool with an interesting local legend. Tiznit is also the gateway to Aglou and Legzira beaches.',
    highlights: ['Berber silver jewelry workshops', 'Compact, walkable medina', 'Source Bleue oasis pool', 'Gateway to Aglou and Legzira beaches'],
    bestTime: 'Year-round (Thursday souk day)',
    cost: 'Transport + shopping budget',
    image: '/images/card-beach.webp',
  },
  {
    name: 'Taroudant',
    distance: '80 km east',
    duration: 'Full day',
    description:
      'Often called "little Marrakech" for its impressive circuit of tawny-red ramparts, Taroudant delivers much of the red city\'s atmosphere at a fraction of the crowds and prices. The town has two distinct souks: the Arab Souk (Souk Arabe) specializing in clothing, spices, and household goods, and the Berber Souk (Souk Amazigh) focused on produce, pottery, and livestock. The 7.5 km circuit of crenellated walls is beautifully preserved and can be explored by calèche (horse-drawn carriage). The surrounding Souss Valley is intensively farmed with citrus groves, olive orchards, and argan forests.',
    highlights: ['Impressive 7.5 km circuit of red ramparts', 'Two distinct souks (Arab and Berber)', 'Calèche rides along the walls', 'Fraction of Marrakech\'s crowds and prices'],
    bestTime: 'Year-round (Sunday and Thursday souk days)',
    cost: '100-200 MAD for calèche tour',
    image: '/images/card-beach.webp',
  },
  {
    name: 'Crocoparc',
    distance: '14 km east',
    duration: 'Half day',
    description:
      'A modern, well-designed crocodile park and botanical garden set in a beautifully landscaped 4-hectare site. Home to over 300 Nile crocodiles, the park features walking paths through cactus gardens, a serpentarium, and informative displays about reptile ecology. There is a shaded playground, a good restaurant, and an overall level of design quality that feels more European than Moroccan. Particularly excellent for families with children, who are mesmerized by the crocodile feeding demonstrations. One of the best-maintained attractions in the Agadir region.',
    highlights: ['Over 300 Nile crocodiles', 'Beautiful botanical gardens', 'Excellent for families', 'Crocodile feeding demonstrations'],
    bestTime: 'Year-round',
    cost: '70 MAD adult / 40 MAD child',
    image: '/images/card-beach.webp',
  },
  {
    name: 'Souss-Massa National Park',
    distance: '40 km south',
    duration: 'Half day to full day',
    description:
      'A 33,800-hectare national park protecting the estuary of the Oued Souss and Oued Massa rivers, renowned as one of the most important birdwatching sites in Morocco. The park is the last refuge of the critically endangered northern bald ibis, with a population of around 100 breeding pairs. The landscape encompasses beaches, sand dunes, farmland, and steppe, supporting over 250 bird species. Flamingos, spoonbills, marbled ducks, and various raptors are regular sightings. The Oued Massa section is the most accessible and rewarding for casual visitors.',
    highlights: ['Critically endangered northern bald ibis', 'Over 250 bird species', 'Flamingos and spoonbills', 'Beautiful estuary landscape'],
    bestTime: 'October - March (migratory birds present)',
    cost: '20 MAD entry fee',
    image: '/images/card-beach.webp',
  },
  {
    name: 'Immouzzer des Ida Outanane',
    distance: '60 km northeast',
    duration: 'Full day',
    description:
      'A mountain village in the Western Anti-Atlas known for its seasonal waterfall (Cascade du Voile de la Mariee, or Bride\'s Veil Falls), its honey festival held each August, and the stunning drive through the argan forests and Berber villages to reach it. The road climbs from the coast through increasingly dramatic landscapes of terraced hillsides and granite outcrops. The village itself is small and peaceful, with a handful of cafes serving local honey and almond amlou. The waterfall is best in late winter and spring; by summer it may be a trickle.',
    highlights: ['Bride\'s Veil waterfall', 'Scenic mountain drive', 'Local honey and amlou', 'Annual honey festival in August'],
    bestTime: 'February - May (waterfall at its best)',
    cost: 'Free (transport costs only)',
    image: '/images/card-beach.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RESTAURANTS DATA
   ═══════════════════════════════════════════════════════════════ */

const restaurants = [
  {
    name: 'Port Fish Stalls',
    type: 'Seafood / Street food',
    price: '40-80 MAD',
    description: 'The row of open-air fish grills at Agadir\'s commercial port is a quintessential experience. Choose your fish from the display (sardines, sea bream, sole, prawns, calamari), have it weighed and priced, then it is grilled on the spot and served with bread, salad, and chermoula sauce. Unbeatable freshness at rock-bottom prices.',
    mustTry: 'Grilled sardines with chermoula (40-50 MAD for a generous plate)',
  },
  {
    name: 'Corniche Restaurants',
    type: 'International / Seafood',
    price: '120-300 MAD',
    description: 'The beachfront promenade is lined with restaurants offering everything from Moroccan tagines to Italian pasta and French bistro fare. Quality varies, but the ocean views are consistent. Popular spots include Le Jardin d\'Eau for upscale Moroccan cuisine and Pure Passion for its beachside terrace.',
    mustTry: 'Fresh fish tagine with preserved lemons and olives',
  },
  {
    name: 'Marina Restaurants',
    type: 'Upscale dining',
    price: '200-500 MAD',
    description: 'The modern Agadir Marina development houses the city\'s most upscale restaurants, with terraces overlooking the yachts and fishing boats. The setting is distinctly Mediterranean in character. Options range from sushi and tapas to grilled lobster and steak.',
    mustTry: 'Grilled lobster with garlic butter at one of the marina-front terraces',
  },
  {
    name: 'Souk El Had Food Stalls',
    type: 'Street food / Moroccan',
    price: '15-40 MAD',
    description: 'Inside the souk, dozens of food stalls serve fresh-squeezed orange juice (4-5 MAD), msemen (Moroccan crepes), harira soup, brochettes (skewered meat), and tajine pots bubbling over charcoal. This is where locals eat, and the prices reflect it. Head to the food section near the center of the souk for the best selection.',
    mustTry: 'Fresh orange juice and msemen with honey for breakfast',
  },
  {
    name: 'Taghazout Rooftop Cafes',
    type: 'Cafe / Light meals',
    price: '50-120 MAD',
    description: 'The rooftop cafes of Taghazout village offer some of the best sunset views on the Moroccan coast. Menu staples include avocado toast, smoothie bowls, fresh juices, fish tacos, and Moroccan salads. The international surf crowd has influenced the food scene, resulting in a health-conscious, globally inspired menu.',
    mustTry: 'Fresh juice while watching the sunset over the surf',
  },
  {
    name: 'Traditional Moroccan Restaurants',
    type: 'Moroccan',
    price: '80-200 MAD',
    description: 'Several restaurants in the new city center (Nouveau Talborjt area) serve authentic Moroccan home cooking at local prices. Look for places busy with Moroccan families, which is always the best indicator of quality. Dishes include slow-cooked tagines, tangia, couscous (traditionally served on Fridays), and pastilla.',
    mustTry: 'Friday couscous with seven vegetables and tfaya (sweet onion and raisin topping)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   ACCOMMODATION DATA
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    category: 'All-Inclusive Resorts',
    priceRange: '1,200-3,500 MAD / night',
    description: 'Agadir is Morocco\'s all-inclusive resort capital, with large beachfront complexes offering pools, buffet dining, entertainment, and direct beach access. Most are clustered along the Secteur Balneaire (beach tourism zone) south of the city center. The convenience factor is high, particularly for families, though the resort experience can feel disconnected from authentic Morocco.',
    examples: ['Sofitel Agadir Royal Bay Resort', 'Riu Palace Tikida Agadir', 'Robinson Club Agadir', 'Iberostar Founty Beach'],
    bestFor: 'Families, couples seeking convenience, first-time visitors to Morocco',
  },
  {
    category: 'Boutique Hotels & Riads',
    priceRange: '600-2,000 MAD / night',
    description: 'Unlike Marrakech or Fes, Agadir lacks a traditional medina and therefore has few classic riads. However, several boutique hotels in the city and surrounding area offer a more characterful experience. The best options tend to be outside the city center, in the hills above Taghazout or in renovated properties along the coast road.',
    examples: ['Hotel Timoulay & Spa', 'Riad Villa Blanche', 'Sol House Taghazout Bay', 'Hyatt Place Taghazout Bay'],
    bestFor: 'Couples, design-conscious travelers, those seeking character',
  },
  {
    category: 'Surf Camps',
    priceRange: '200-600 MAD / night',
    description: 'Taghazout and Tamraght are packed with surf camps offering accommodation, daily surf lessons or guiding, equipment rental, and often yoga sessions as part of weekly packages. Accommodation ranges from shared dorms to private rooms, and the social atmosphere is a major part of the appeal. Most include breakfast and some include all meals.',
    examples: ['Surf Maroc Taghazout', 'Amouage Surf House', 'Tamraght Surf Hostel', 'Surf Berbere Taghazout'],
    bestFor: 'Solo travelers, surfers, backpackers, social travelers',
  },
  {
    category: 'Budget Hotels & Hostels',
    priceRange: '100-300 MAD / night',
    description: 'Agadir\'s Nouveau Talborjt district and the streets behind the beach strip offer numerous budget options. Quality is inconsistent, but clean, air-conditioned rooms with private bathrooms are available at the higher end of this range. In Taghazout and Tamraght, budget options include guesthouses and homestays with families.',
    examples: ['Hotel Kamal', 'Residence Yasmina', 'Atlantic Hotel Agadir', 'Guest houses in Taghazout village'],
    bestFor: 'Budget travelers, backpackers, longer stays',
  },
  {
    category: 'Apartment Rentals',
    priceRange: '300-1,000 MAD / night',
    description: 'Self-catering apartments are increasingly popular, particularly for longer stays of a week or more. The Cite Founty and Secteur Balneaire areas have the most options, many with pool access and sea views. In Taghazout Bay, the new development has modern apartments available on short-term rental platforms. A kitchen allows you to shop at Souk El Had and cook your own tagines with market-fresh ingredients.',
    examples: ['Cite Founty apartments', 'Marina Agadir residences', 'Taghazout Bay apartments', 'Private rentals via platforms'],
    bestFor: 'Families, longer stays, self-caterers, digital nomads',
  },
];

/* ═══════════════════════════════════════════════════════════════
   NIGHTLIFE DATA
   ═══════════════════════════════════════════════════════════════ */

const nightlifeSpots = [
  {
    name: 'Beach Clubs',
    description: 'Several beach clubs along the Corniche offer daytime lounging that transitions into evening cocktail bars with music. The atmosphere is relaxed and Mediterranean in feel, with sunset being the prime hour. Some operate seasonal pop-up bars directly on the sand.',
    hours: 'Noon - midnight',
    vibe: 'Relaxed, daytime-to-evening',
  },
  {
    name: 'Agadir Marina',
    description: 'The modern marina development is the center of Agadir\'s evening scene, with a string of restaurants, cocktail bars, and lounges overlooking the boats. The atmosphere is cosmopolitan and the dress code is smart-casual. This is where Agadir feels most like a European resort.',
    hours: '6 PM - 1 AM',
    vibe: 'Cosmopolitan, upscale casual',
  },
  {
    name: 'Casino Agadir',
    description: 'The Atlantic Palace Casino is one of the few casinos in Morocco, offering roulette, blackjack, poker, and slot machines. Dress code is enforced (no shorts or flip-flops), and you will need your passport for entry. Minimum bets are modest by international standards.',
    hours: '8 PM - 4 AM',
    vibe: 'Formal, entertainment',
  },
  {
    name: 'Hotel Bars & Clubs',
    description: 'Several of the large resort hotels operate nightclubs that are open to non-guests and attract a mix of tourists and locals. These tend to get busy after midnight and play a mix of Arabic pop, Western club music, and reggaeton. The Sofitel and Tikida Palace have popular venues.',
    hours: '10 PM - 4 AM',
    vibe: 'Energetic, mixed crowd',
  },
  {
    name: 'Rooftop Bars',
    description: 'A handful of hotels and restaurants offer rooftop terraces with panoramic views over the bay, the Kasbah hill, and the city lights. These are the most atmospheric spots for a sunset drink. The altitude adds a cooling breeze that makes evening rooftop sessions very pleasant.',
    hours: '5 PM - midnight',
    vibe: 'Scenic, romantic',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FAMILY ACTIVITIES DATA
   ═══════════════════════════════════════════════════════════════ */

const familyActivities = [
  {
    name: 'Crocoparc',
    ageRange: 'All ages',
    duration: '2-3 hours',
    cost: '70 MAD adult / 40 MAD child',
    description: 'Over 300 Nile crocodiles in a beautifully designed botanical garden. Children are fascinated by the crocodile feeding demonstrations. The cactus garden and serpentarium add variety, and there is a good on-site restaurant and shaded playground.',
  },
  {
    name: 'Souss-Massa National Park',
    ageRange: '6+',
    duration: 'Half day',
    cost: '20 MAD entry',
    description: 'Morocco\'s most important birdwatching reserve. Children enjoy spotting flamingos, storks, and the rare northern bald ibis. The landscape is varied and the walking trails are gentle. Bring binoculars and a bird identification guide.',
  },
  {
    name: 'Camel Rides on the Beach',
    ageRange: 'All ages',
    duration: '30 min - 2 hours',
    cost: '100-300 MAD',
    description: 'Camel rides along Agadir\'s main beach are available year-round and are a highlight for children and adults alike. Shorter rides stick to the beach while longer excursions head into the dunes and argan forest behind the coast. Sunset rides are particularly popular.',
  },
  {
    name: 'Aquapark',
    ageRange: 'All ages',
    duration: 'Full day',
    cost: '200-300 MAD',
    description: 'Atlantica Parc is a water park located between Agadir and the airport, offering slides, wave pools, and splash zones. It is not on the scale of European water parks, but for a hot day with restless children, it provides solid entertainment and welcome relief from the heat.',
  },
  {
    name: 'Horse and Pony Rides',
    ageRange: 'All ages',
    duration: '1-2 hours',
    cost: '200-500 MAD',
    description: 'Several stables in the Agadir area offer beach rides, forest rides through argan woodlands, and gentle pony rides for young children. The beach rides at sunset are magical. Ranch de Diabat and other operators can arrange rides suitable for all experience levels.',
  },
  {
    name: 'Glass-Bottom Boat Trips',
    ageRange: 'All ages',
    duration: '1-2 hours',
    cost: '150-250 MAD',
    description: 'Small glass-bottom boats depart from the marina and cruise along the coastline, allowing passengers to observe fish and marine life through the transparent hull. A gentle, accessible activity that works for all ages and does not require getting wet.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BUDGET VS LUXURY DATA
   ═══════════════════════════════════════════════════════════════ */

const budgetVsLuxury = [
  {
    category: 'Accommodation',
    budget: 'Surf camp dorm in Tamraght (150-250 MAD/night)',
    luxury: 'Sofitel Royal Bay beachfront suite (3,000-5,000 MAD/night)',
  },
  {
    category: 'Breakfast',
    budget: 'Msemen and orange juice at Souk El Had (10-20 MAD)',
    luxury: 'Buffet breakfast at resort hotel (150-250 MAD)',
  },
  {
    category: 'Lunch',
    budget: 'Grilled fish at the port stalls (40-60 MAD)',
    luxury: 'Seafood platter at the marina (250-400 MAD)',
  },
  {
    category: 'Dinner',
    budget: 'Tajine in Nouveau Talborjt (50-80 MAD)',
    luxury: 'Multi-course meal at a Corniche restaurant (300-600 MAD)',
  },
  {
    category: 'Surfing',
    budget: 'Board rental and self-guide (100-150 MAD/day)',
    luxury: 'Private lesson with premium equipment (500-800 MAD/session)',
  },
  {
    category: 'Day Trip',
    budget: 'Grand taxi to Paradise Valley (30-50 MAD shared)',
    luxury: 'Private driver with guide for a full day (800-1,500 MAD)',
  },
  {
    category: 'Evening',
    budget: 'Sunset walk on the promenade (free)',
    luxury: 'Cocktails at a marina rooftop bar (80-150 MAD per drink)',
  },
  {
    category: 'Daily Total',
    budget: '300-500 MAD / day (roughly 30-50 USD)',
    luxury: '3,000-6,000 MAD / day (roughly 300-600 USD)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function AgadirGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/card-beach.webp"
            alt="Agadir beach with golden sand, blue Atlantic waters, and palm-lined promenade"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/guides" className="hover:text-white transition-colors">
              Guides
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Agadir &amp; Souss Region</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Morocco&apos;s Premier Beach Resort
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Agadir &amp; the Souss Region
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Sun-drenched beaches, world-class surf, ancient argan forests, and the gateway to
              southern Morocco. With over 300 days of sunshine a year, Agadir is the beach capital
              of the kingdom.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sun className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Sun-Kissed Atlantic Paradise
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Rebuilt from the ground up after a devastating earthquake, Agadir has emerged as
              Morocco&apos;s most modern and relaxed coastal city.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              On February 29, 1960, a catastrophic earthquake measuring 5.7 on the Richter scale struck Agadir,
              leveling the city in just 15 seconds and killing an estimated 15,000 people &mdash; nearly a third
              of the population. The destruction was so complete that authorities considered abandoning the site
              entirely. Instead, King Mohammed V declared &ldquo;If destiny decided the destruction of Agadir,
              its rebuilding depends on our faith and our will,&rdquo; and the city was rebuilt from scratch two
              kilometers south of the original site.
            </p>
            <p>
              This tragic history explains why Agadir looks and feels so different from every other Moroccan city.
              There is no ancient medina, no labyrinthine alleyways, no centuries-old riads. Instead, you find
              wide boulevards, modern architecture, a purpose-built beachfront promenade, and an atmosphere
              that has more in common with a Mediterranean resort than with the Morocco of Fes or Marrakech. For
              some travelers, this is a disappointment; for others, it is precisely the appeal.
            </p>
            <p>
              What Agadir does offer is something no other Moroccan city can match: a combination of over 300
              days of sunshine per year, a magnificent 10-kilometer crescent of golden sand, warm winter
              temperatures that rarely drop below 20&deg;C even in January, and a relaxed, cosmopolitan
              atmosphere where European beach culture meets Moroccan hospitality. The Souss-Massa region
              surrounding the city adds depth to any visit, from the surf mecca of Taghazout to the argan
              forests of the foothills, the silver souks of Tiznit, and the mini-Marrakech ambiance of Taroudant.
            </p>
            <p>
              Agadir is also the economic engine of southern Morocco, serving as the country&apos;s largest
              fishing port and the center of its citrus and argan oil industries. The city welcomes over
              a million tourists annually, with particularly strong visitor numbers from Northern Europe
              during the winter months. For Moroccans, it is the domestic beach holiday destination of
              choice, and the summer months (July and August) see the city swell with vacationing families
              from across the kingdom.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { icon: Sun, label: 'Sunny Days', value: '300+ per year' },
              { icon: Waves, label: 'Beach Length', value: '10 km' },
              { icon: Users, label: 'Population', value: '600,000+' },
              { icon: Plane, label: 'Airport', value: 'Al-Massira (AGA)' },
            ].map((fact) => (
              <div key={fact.label} className="card-moroccan p-4 text-center">
                <fact.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                <p className="text-xs text-[var(--text-secondary)]">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beach Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waves className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Beach Guide: From City Sand to Hidden Coves
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Souss-Massa coast offers beaches for every taste &mdash; from the wide, serviced sands
              of Agadir to the wild, dramatic shores of Legzira.
            </p>
          </div>

          <div className="space-y-8">
            {beaches.map((beach, index) => (
              <article
                key={beach.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={beach.image}
                    alt={`${beach.name} on the Moroccan Atlantic coast`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                      {beach.distance}
                    </span>
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)] text-white">
                      {beach.length}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1">
                    Best for: {beach.bestFor}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {beach.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {beach.description}
                  </p>
                  <div className="pt-4 border-t border-[var(--border-light)]">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {beach.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Surfing Hub ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Wind className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Surfing Hub: Taghazout &amp; Beyond
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The stretch of coast from Agadir to Imsouane is one of the world&apos;s great surfing corridors,
              with consistent swells, warm water, and breaks for every level.
            </p>
          </div>

          {/* Surf intro text */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s surf scene has exploded over the past two decades, and the Agadir-Taghazout
                corridor sits at the epicenter. The combination of powerful Atlantic swells generated by
                North Atlantic storms, a coastline that faces northwest (ideal for catching swell), warm water
                temperatures (16-22&deg;C year-round), and a cost of living a fraction of European surf
                destinations has made this stretch of coast one of the most popular surf destinations on Earth.
              </p>
              <p>
                The prime surf season runs from October to April, when consistent northwest swells produce
                the best waves at the point breaks. Summer (June to September) is smaller but still offers
                fun waves at beach breaks, and the warmer water and calmer conditions make it ideal for
                beginners. A 3/2mm wetsuit is recommended from November to March; a shorty or boardshorts
                suffice from June to October.
              </p>
            </div>
          </div>

          {/* Surf Schools Box */}
          <div className="card-moroccan p-6 md:p-8 mb-10 max-w-4xl mx-auto">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[var(--color-primary)]" />
              Choosing a Surf School
            </h3>
            <div className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
              <p>
                Taghazout and Tamraght are home to dozens of surf schools and camps. Prices for a
                two-hour group lesson (including board and wetsuit) range from 200-400 MAD. A private
                lesson costs 400-800 MAD. Week-long packages (accommodation + daily lessons) start at
                around 2,500 MAD and represent the best value.
              </p>
              <p>
                When choosing a school, verify that instructors hold recognized qualifications (ISA or
                equivalent), that equipment is in good condition, and that the student-to-instructor
                ratio does not exceed 6:1 for beginners. Reputable schools include Surf Maroc, Surf
                Berbere, HashPoint Surf Camp, and Dynamic Loisirs. Board rental without a lesson
                typically costs 100-150 MAD per day for a softboard and 150-200 MAD for a hardboard.
              </p>
            </div>
          </div>

          {/* Surf Breaks Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="text-left p-3 text-sm font-semibold rounded-tl-lg">Break</th>
                  <th className="text-left p-3 text-sm font-semibold">Location</th>
                  <th className="text-left p-3 text-sm font-semibold">Type</th>
                  <th className="text-left p-3 text-sm font-semibold">Level</th>
                  <th className="text-left p-3 text-sm font-semibold">Season</th>
                  <th className="text-left p-3 text-sm font-semibold rounded-tr-lg">Description</th>
                </tr>
              </thead>
              <tbody>
                {surfBreaks.map((sb, i) => (
                  <tr
                    key={sb.name}
                    className={`border-b border-[var(--border-light)] ${
                      i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'
                    }`}
                  >
                    <td className="p-3 text-sm font-semibold text-[var(--text-primary)]">{sb.name}</td>
                    <td className="p-3 text-sm text-[var(--text-secondary)]">{sb.location}</td>
                    <td className="p-3 text-sm text-[var(--text-secondary)]">{sb.type}</td>
                    <td className="p-3 text-sm text-[var(--text-secondary)]">{sb.level}</td>
                    <td className="p-3 text-sm text-[var(--text-secondary)]">{sb.bestSeason}</td>
                    <td className="p-3 text-sm text-[var(--text-secondary)]">{sb.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Water Sports ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Water Sports Beyond Surfing
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Agadir&apos;s calm bay and long beach make it the water sports capital of Morocco,
              with activities ranging from gentle kayaking to adrenaline-pumping jet skiing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {waterSports.map((sport) => (
              <div key={sport.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {sport.name}
                  </h3>
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {sport.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {sport.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[var(--color-primary)]" />
                    {sport.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[var(--color-primary)]" />
                    {sport.season}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agadir Oufella (Kasbah) ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Agadir Oufella: The Hilltop Kasbah
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The ruins of the old Kasbah perched 236 meters above the city offer the most spectacular
              panoramic views in the entire region.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="relative h-72 md:h-96">
              <img
                src="/images/card-beach.webp"
                alt="Panoramic view from Agadir Oufella Kasbah ruins overlooking the bay and city"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-sm">
                  The famous inscription on the Kasbah wall reads: &ldquo;God, Country, King&rdquo; &mdash;
                  visible from the city below, illuminated at night in Arabic script.
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Agadir Oufella (meaning &ldquo;the granary on the hill&rdquo; in Amazigh) was the original
                  fortified settlement above the bay, built in 1540 by the Saadian sultan Mohammed ash-Sheikh to
                  repel Portuguese incursions along the coast. The Kasbah once contained a mosque, a riad,
                  a synagogue, and granaries within its walls, and served as a strategic defensive position for
                  centuries.
                </p>
                <p>
                  The 1960 earthquake devastated the Kasbah along with the rest of old Agadir, and today only
                  fragments of the outer walls remain. The site was recently renovated with improved pathways,
                  lighting, and viewing platforms as part of a major restoration project. The inscribed wall
                  bearing the words &ldquo;God, Country, King&rdquo; in Arabic is the most iconic visual
                  symbol of Agadir, illuminated at night and visible from across the city.
                </p>
                <p>
                  The primary reason to visit Agadir Oufella is the view. From the summit, you can see the
                  entire sweep of the bay from the port in the south to the beginnings of Taghazout in the
                  north, the modern city spread beneath you, and on clear days, the snow-capped peaks of the
                  High Atlas Mountains to the east. Sunset is the most popular time to visit, when the light
                  turns the city and ocean golden. The site is accessible by road (taxi or rental car) or
                  by a steep 30-minute walk from the city below.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[var(--border-light)]">
                {[
                  { icon: Clock, label: 'Best Time', value: 'Sunset (1 hour before)' },
                  { icon: MapPin, label: 'Access', value: 'Taxi (20 MAD) or 30-min walk' },
                  { icon: Camera, label: 'Photo Tip', value: 'Wide-angle lens for the full bay panorama' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{item.label}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Souk El Had ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Souk El Had: Morocco&apos;s Largest Market
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Sprawling across 11 hectares with over 6,000 shops and stalls, Souk El Had is a vast,
              labyrinthine marketplace that compensates for Agadir&apos;s lack of a historic medina.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-moroccan p-6 md:p-8">
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Souk El Had (the Sunday Souk) is not a picturesque medieval marketplace like the souks of
                    Fes or Marrakech. It is an enormous, utilitarian, concrete-walled enclosure that is
                    nonetheless one of the most authentic shopping experiences in Morocco. This is where
                    the people of Agadir and the surrounding Souss region do their actual shopping, and
                    the sheer scale is staggering: over 6,000 shops and stalls arranged in a maze of
                    covered and open-air sections spanning 11 hectares.
                  </p>
                  <p>
                    Despite the name, the souk operates every day except Monday. It opens early (around
                    6:00 AM) and closes by late afternoon (6:00-7:00 PM). The souk is divided into
                    loosely organized sections: produce and spices, meat and fish, clothing and textiles,
                    household goods, electronics, cosmetics (including argan oil), and a dedicated area
                    for traditional crafts and souvenirs. The produce section is particularly impressive,
                    overflowing with the fruits of the Souss Valley: oranges, clementines, tomatoes,
                    avocados, dates, and saffron.
                  </p>
                  <p>
                    Prices at Souk El Had are significantly lower than in touristy souks elsewhere in
                    Morocco, but haggling is still expected for non-food items. A reasonable starting
                    point for your counter-offer is around 50-60% of the initial asking price (as
                    opposed to the 25-30% starting point recommended for Marrakech). The atmosphere
                    is busy, noisy, and intensely local &mdash; do not expect anyone to speak English
                    outside of the tourist craft sections.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical sidebar */}
            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                  Practical Information
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Open', value: 'Daily except Monday, 6:00 AM - 7:00 PM' },
                    { label: 'Best time', value: 'Early morning (6-9 AM) for freshest produce' },
                    { label: 'Gates', value: '13 entrances around the perimeter' },
                    { label: 'Location', value: 'Rue Chaht Mohammed, Nouveau Talborjt' },
                    { label: 'Taxi cost', value: '10-15 MAD from the beachfront' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>
                        <span className="font-semibold text-[var(--text-primary)]">{item.label}:</span>{' '}
                        <span className="text-[var(--text-secondary)]">{item.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[var(--color-primary)]" />
                  What to Buy
                </h3>
                <ul className="space-y-2">
                  {[
                    'Argan oil (cosmetic and culinary)',
                    'Amlou (argan, almond, and honey spread)',
                    'Saffron from Taliouine',
                    'Local honey (thyme, euphorbia, carob)',
                    'Berber silver jewelry',
                    'Handwoven baskets and bags',
                    'Spices (cumin, ras el hanout, paprika)',
                    'Dried fruits and nuts',
                    'Leather goods (babouches, bags)',
                    'Traditional textiles and carpets',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-moroccan p-6 bg-yellow-50 border-yellow-200">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Tips
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>Bring cash (MAD) &mdash; no card facilities</li>
                  <li>Watch your belongings in crowded areas</li>
                  <li>The souk is huge &mdash; enter from Gate 1 to orient yourself</li>
                  <li>Carry a small bag for purchases</li>
                  <li>Photography of people requires permission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Argan Oil Experience ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Argan Oil Experience
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Souss-Massa region is the heartland of the argan tree, a species found nowhere else on
              Earth, and visiting a cooperative is one of the defining experiences of the region.
            </p>
          </div>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              The argan tree (Argania spinosa) is endemic to Morocco, with the vast majority of the
              world&apos;s argan forests concentrated in the Souss-Massa region around Agadir. UNESCO
              declared the argan forest a Biosphere Reserve in 1998, recognizing both its ecological
              importance and its cultural significance to the Amazigh (Berber) communities who have
              harvested its fruit for centuries.
            </p>
            <p>
              Argan oil is produced from the kernels found inside the fruit of the argan tree. The
              traditional production process is labor-intensive: the fruit is collected, sun-dried, the
              outer flesh removed, the extremely hard nut cracked by hand between two stones to extract
              the tiny kernels, the kernels are then roasted (for culinary oil) or left raw (for cosmetic
              oil), ground in a stone mill, and the resulting paste hand-kneaded to extract the oil. It
              takes approximately 30 kg of fruit to produce just one liter of oil, which explains the
              high price.
            </p>
            <p>
              The best way to experience argan oil production is to visit one of the women&apos;s
              cooperatives located along the road between Agadir and Essaouira (the N1 highway) or in
              the foothills around the road to Immouzzer des Ida Outanane. These cooperatives provide
              employment to Berber women in rural areas and allow visitors to observe the traditional
              cracking and grinding process firsthand. You can taste the difference between culinary
              argan oil (darker, nutty, roasted) and cosmetic argan oil (lighter, odorless, raw), and
              purchase directly from the producers at fair prices.
            </p>
          </div>

          {/* Argan products and prices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'Culinary Argan Oil',
                description: 'Dark amber, with a rich, nutty, toasted flavor. Used for drizzling on couscous, salads, tagines, and for dipping with bread. Also the key ingredient in amlou.',
                price: '200-350 MAD / liter',
                tip: 'Look for oil from roasted kernels only. If it tastes bland, it is diluted with other oils.',
              },
              {
                title: 'Cosmetic Argan Oil',
                description: 'Light golden, nearly odorless. Used for skin moisturizing, hair treatment, and nail care. Rich in vitamin E and essential fatty acids. Should absorb quickly without a greasy residue.',
                price: '250-400 MAD / liter',
                tip: 'True cosmetic argan oil is made from unroasted kernels. It should have little to no scent.',
              },
              {
                title: 'Amlou',
                description: 'A thick, addictive spread made from argan oil, ground almonds, and honey. Often called "Berber Nutella." Eaten with bread for breakfast or as a snack. Varies from smooth to chunky.',
                price: '50-100 MAD / jar',
                tip: 'The best amlou is freshly made at cooperatives. Commercial versions often use cheaper oils.',
              },
            ].map((product) => (
              <div key={product.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {product.description}
                </p>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">
                  {product.price}
                </p>
                <p className="text-xs text-[var(--text-secondary)] italic">
                  Tip: {product.tip}
                </p>
              </div>
            ))}
          </div>

          {/* Goats in trees note */}
          <div className="card-moroccan p-6 mt-8 flex gap-4 items-start">
            <Camera className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                The Famous Goats in Argan Trees
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Along the road between Agadir and Essaouira, you will encounter the famous sight of goats
                climbing argan trees to eat the fruit. While this is a genuine natural behavior (goats are
                remarkably agile climbers and argan fruit is a prized food source), be aware that some
                roadside displays are staged by locals who place goats in the trees for tourist photos
                and then request a tip. The genuinely wild goat-climbing tends to happen in more remote
                areas and during fruit season (June to September). If you stop for a photo at a roadside
                display, a tip of 10-20 MAD is expected and fair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Day Trips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Car className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Day Trips from Agadir
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Souss-Massa region surrounding Agadir offers extraordinary diversity, from mountain
              gorges and waterfalls to walled towns and wildlife reserves.
            </p>
          </div>

          <div className="space-y-8">
            {dayTrips.map((trip, index) => (
              <article
                key={trip.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={trip.image}
                    alt={`${trip.name} day trip from Agadir`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                      {trip.distance}
                    </span>
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)] text-white">
                      {trip.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1 text-sm text-[var(--text-secondary)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      {trip.bestTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      {trip.cost}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {trip.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {trip.description}
                  </p>
                  <div className="pt-4 border-t border-[var(--border-light)]">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {trip.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nightlife & Entertainment ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Music className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Nightlife &amp; Entertainment
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Agadir has the most liberal nightlife scene in Morocco outside of Casablanca, with beach clubs,
              marina bars, hotel nightclubs, and even a casino.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Morocco is a Muslim-majority country where alcohol consumption is not universal, but Agadir&apos;s
              tourism-oriented character means that bars, clubs, and licensed restaurants are more numerous
              and more visible here than in most Moroccan cities. Alcohol is widely available at hotels,
              the marina, and licensed restaurants. Local beer (Flag Speciale, Casablanca) costs 25-40 MAD,
              wine 40-80 MAD per glass, and cocktails 60-120 MAD. The nightlife scene is concentrated
              around the marina, the hotel zone, and the Corniche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nightlifeSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {spot.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {spot.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border-light)]">
                  <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[var(--color-primary)]" />
                    {spot.hours}
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-primary)]">
                    {spot.vibe}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food Guide: From Port Grills to Fine Dining
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Agadir&apos;s position as Morocco&apos;s largest fishing port means seafood dominates
              the dining scene, with the freshest catch going directly from boat to grill.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-[var(--color-primary)]">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                <Fish className="w-5 h-5 text-[var(--color-primary)]" />
                The Port Fish Experience
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                The single must-do food experience in Agadir is eating freshly grilled fish at the port.
                The process is simple and immensely satisfying: walk along the row of open-air stalls,
                choose your fish from the iced displays (sardines, sole, sea bream, prawns, calamari,
                lobster), have it weighed and priced, then sit at a shared table while it is grilled over
                charcoal and served with bread, tomato and onion salad, olives, and chermoula (a pungent
                herb and garlic sauce). A generous plate of sardines costs around 40-50 MAD. A whole
                sea bream with sides might be 80-120 MAD. It is, quite simply, the freshest and best-value
                seafood meal you will find anywhere in Morocco.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {restaurant.name}
                  </h3>
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                    {restaurant.price}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-2">
                  {restaurant.type}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {restaurant.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Must try:</span>{' '}
                    {restaurant.mustTry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Hotel className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay in Agadir
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From all-inclusive beachfront resorts to bohemian surf camps, Agadir offers accommodation
              for every style and budget.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {accommodations.map((acc) => (
              <div key={acc.category} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {acc.category}
                  </h3>
                  <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {acc.priceRange}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                  {acc.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {acc.examples.map((example) => (
                    <span
                      key={example}
                      className="inline-flex px-3 py-1 rounded-full text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)] border border-[var(--border-light)]"
                    >
                      {example}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Best for:</span>{' '}
                  {acc.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting to Agadir
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Agadir is well-connected by air and road, with direct flights from Europe
              and comfortable bus connections from major Moroccan cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* By Air */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-[var(--color-primary)]" />
                By Air
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Agadir Al-Massira Airport (AGA)</span> is
                  located 22 km southeast of the city center. It is Morocco&apos;s third-busiest airport
                  after Casablanca and Marrakech, serving primarily charter and low-cost flights from Europe.
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Airlines:</span> Ryanair, EasyJet,
                  TUI, Transavia, Royal Air Maroc, and various charter operators serve Agadir from UK,
                  France, Germany, Netherlands, Belgium, Scandinavia, and other European cities.
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Airport transfer:</span> Grand taxi
                  to the city center costs 200-250 MAD (fixed rate, negotiate before departure). Some hotels
                  offer shuttle services. The airport bus (line 22) costs 15 MAD but runs infrequently.
                </p>
              </div>
            </div>

            {/* By Bus */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[var(--color-primary)]" />
                By Bus
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">From Marrakech:</span> CTM and Supratours
                  operate comfortable coaches taking approximately 3 to 3.5 hours via the Tizi n&apos;Test or the
                  newer autoroute. Departures every 1-2 hours. Tickets cost 100-140 MAD one way.
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">From Casablanca:</span> Direct buses take
                  approximately 8-9 hours. An overnight service is available. Tickets cost 200-250 MAD.
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">From Essaouira:</span> Approximately 3 hours
                  by bus, with regular departures. Tickets cost 80-100 MAD. The route along the coastal N1
                  passes through argan forests and is scenic.
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Bus stations:</span> The main Gare Routiere
                  is in Inezgane (13 km south). CTM has a more central terminal in Nouveau Talborjt.
                </p>
              </div>
            </div>

            {/* By Car */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-[var(--color-primary)]" />
                By Car
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">From Marrakech:</span> 270 km via the
                  A7 autoroute (3 hours) or the scenic N8/R203 mountain road via Tizi n&apos;Test pass (5 hours
                  but spectacular). The autoroute is modern and well-maintained.
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Car rental:</span> Available at the
                  airport and in the city. International brands (Hertz, Avis, Europcar) and local companies
                  (Medcar, Afrique Car) are represented. A compact car costs from 250-400 MAD per day.
                  Highly recommended for exploring the region (Taghazout, Paradise Valley, Tiznit, Taroudant).
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Driving tips:</span> Roads in the Agadir
                  area are generally good. Watch for speed cameras on the autoroute. Parking in Agadir city
                  center is pay-and-display (2 MAD/hour).
                </p>
              </div>
            </div>

            {/* Getting Around */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                Getting Around Agadir
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Petit taxis:</span> Orange petit taxis
                  circulate throughout the city. Insist on the meter (compteur). A typical ride within
                  the city costs 10-20 MAD. Available on every main street.
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Grand taxis:</span> Shared Mercedes grand
                  taxis run fixed routes to Taghazout (15-20 MAD), Inezgane (5-10 MAD), and other regional
                  destinations. Depart when full (6 passengers).
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Local buses:</span> Alsa operates city
                  buses (4 MAD per trip). Routes cover most of the city and beach zone but service is
                  infrequent. Useful for the airport line.
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Walking:</span> The beachfront Corniche
                  is very walkable and pleasant. The city center is flat and easy to navigate on foot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Family Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Baby className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Family Activities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Agadir is one of the most family-friendly destinations in Morocco, with beach activities,
              wildlife parks, and gentle adventures suitable for all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {familyActivities.map((activity) => (
              <div key={activity.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {activity.name}
                  </h3>
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                    {activity.cost}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {activity.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] pt-3 border-t border-[var(--border-light)]">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-[var(--color-primary)]" />
                    Ages: {activity.ageRange}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[var(--color-primary)]" />
                    {activity.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget vs Luxury ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <DollarSign className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Budget vs Luxury: How Much Does Agadir Cost?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Agadir caters to both backpackers on a shoestring and luxury travelers seeking five-star
              comfort. Here is a realistic comparison of daily costs.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="text-left p-4 text-sm font-semibold">Category</th>
                    <th className="text-left p-4 text-sm font-semibold">
                      <span className="flex items-center gap-1">
                        <Shield className="w-4 h-4" /> Budget
                      </span>
                    </th>
                    <th className="text-left p-4 text-sm font-semibold">
                      <span className="flex items-center gap-1">
                        <Gem className="w-4 h-4" /> Luxury
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {budgetVsLuxury.map((row, i) => (
                    <tr
                      key={row.category}
                      className={`border-b border-[var(--border-light)] ${
                        i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'
                      } ${row.category === 'Daily Total' ? 'font-bold' : ''}`}
                    >
                      <td className="p-4 text-sm text-[var(--text-primary)] font-semibold">{row.category}</td>
                      <td className="p-4 text-sm text-[var(--text-secondary)]">{row.budget}</td>
                      <td className="p-4 text-sm text-[var(--text-secondary)]">{row.luxury}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 card-moroccan p-6 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                Money-Saving Tips
              </h3>
              <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Stay in Tamraght instead of Taghazout for 30-40% lower accommodation costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Eat at the port fish stalls and Souk El Had for a fraction of restaurant prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Use shared grand taxis (15-20 MAD to Taghazout) instead of private transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Buy argan oil at cooperatives, not tourist shops (50% cheaper for better quality)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Visit in shoulder season (October or April) for lower hotel rates and fewer crowds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Discover more destinations, activities, and travel planning resources for your
              Moroccan adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Beach Guide',
                description: 'Explore all 20 of Morocco\'s best beaches along the Atlantic and Mediterranean coasts.',
                href: '/beaches',
                icon: Waves,
              },
              {
                title: 'Water Sports',
                description: 'Surfing, kitesurfing, diving, and more across Morocco\'s 3,500 km coastline.',
                href: '/water-sports',
                icon: Anchor,
              },
              {
                title: 'Argan Oil',
                description: 'Everything about Morocco\'s liquid gold, from production to purchasing authentic oil.',
                href: '/argan-oil',
                icon: Sparkles,
              },
              {
                title: 'Essaouira Guide',
                description: 'The artistic, windswept port city just 3 hours north of Agadir.',
                href: '/essaouira-guide',
                icon: Wind,
              },
              {
                title: 'Road Trips',
                description: 'Coastal and mountain road trip itineraries featuring the Souss region.',
                href: '/road-trips',
                icon: Car,
              },
              {
                title: 'Family Travel',
                description: 'Complete guide to visiting Morocco with children of all ages.',
                href: '/family-guide',
                icon: Users,
              },
              {
                title: 'National Parks',
                description: 'Wildlife reserves and protected areas including Souss-Massa.',
                href: '/national-parks',
                icon: Binoculars,
              },
              {
                title: 'Accommodation',
                description: 'Find the perfect stay from riads to resorts across Morocco.',
                href: '/accommodations',
                icon: Hotel,
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
              >
                <link.icon className="w-8 h-8 text-[var(--color-primary)] mb-3" />
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {link.description}
                </p>
                <span className="text-sm font-semibold text-[var(--color-primary)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Agadir?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you come for the surf, the sunshine, the seafood, or simply to unwind on 10 kilometers
            of golden sand, Agadir and the Souss region promise a Moroccan experience unlike any other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Book Agadir Tours
            </Link>
            <Link
              href="/accommodations"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Hotel className="w-4 h-4" /> Find Accommodation
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

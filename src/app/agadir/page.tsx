import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Car,
  Camera,
  Compass,
  Heart,
  Eye,
  Sparkles,
  Mountain,
  Info,
  Lightbulb,
  Users,
  Globe,
  BookOpen,
  Leaf,
  Shield,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Calendar,
  ArrowRight,
  Utensils,
  Bed,
  ShoppingBag,
  Landmark,
  Building,
  TreePine,
  Navigation,
  Wine,
  Music,
  Palette,
  Coffee,
  Footprints,
  Ticket,
  HandCoins,
  ThermometerSun,
  CloudSun,
  Umbrella,
  BadgeCheck,
  CircleDot,
  Map,
  Phone,
  MessageSquare,
  Waves,
  Plane,
  Bus,
  Droplets,
  Binoculars,
  Trophy,
  HelpCircle,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Agadir Travel Guide 2025-2026 | Beaches, Surfing, Resorts & Day Trips',
  description:
    'The ultimate Agadir travel guide. Discover Morocco\'s premier beach resort city with 10km of golden sand, world-class surfing in Taghazout, argan oil cooperatives, Paradise Valley, golf courses, family activities, and the best restaurants along the Atlantic coast.',
  keywords: [
    'Agadir travel guide',
    'Agadir Morocco',
    'Agadir beach',
    'Taghazout surfing',
    'Agadir resorts',
    'Souk El Had Agadir',
    'Agadir Oufella',
    'Paradise Valley Morocco',
    'Agadir restaurants',
    'Agadir golf',
    'Crocoparc Agadir',
    'argan oil Morocco',
    'Agadir day trips',
    'Taroudant day trip',
    'Tiznit silver',
    'Tafraoute painted rocks',
    'Souss Massa National Park',
    'Legzira beach',
    'Agadir family holiday',
    'Agadir surfing lessons',
    'best time to visit Agadir',
    'Agadir airport',
    'Morocco beach holiday',
    'Agadir budget guide',
    'Agadir weather',
  ],
  openGraph: {
    title: 'Agadir Travel Guide 2025-2026 | Morocco\'s Beach & Resort Capital',
    description:
      'Everything you need for Agadir: 10km beach, Taghazout surfing, argan oil tours, Paradise Valley, golf, family activities, and the best coastal dining in Morocco.',
    url: 'https://moroccoguide.com/agadir',
    type: 'article',
    images: [
      {
        url: '/images/hero-agadir.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Agadir bay with golden beach and Atlantic Ocean',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agadir Travel Guide 2025-2026 | Beach & Resort Capital',
    description:
      'Complete guide to Agadir: beaches, Taghazout surfing, argan oil, Paradise Valley, golf, resorts, family activities, day trips, and coastal dining.',
    images: ['/images/hero-agadir.webp'],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/agadir',
  },
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  { label: 'Population', value: '600,000+', icon: Users },
  { label: 'Rebuilt', value: '1960 onward', icon: BookOpen },
  { label: 'Beach Length', value: '10 km', icon: Waves },
  { label: 'Airport', value: 'AGA (Al Massira)', icon: Globe },
  { label: 'Language', value: 'Arabic, French, Tashelhit', icon: MessageSquare },
  { label: 'Currency', value: 'Moroccan Dirham (MAD)', icon: DollarSign },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
  { label: 'Sunshine', value: '300+ days/year', icon: Sun },
];

/* =====================================================================
   DATA: AGADIR ESSENTIALS
   ===================================================================== */

const essentialTips = [
  {
    icon: Sun,
    title: 'Year-Round Sunshine',
    description: 'Agadir enjoys over 300 days of sunshine per year with average temperatures of 20-26 degrees Celsius. Even in winter, daytime highs regularly reach 22 degrees. SPF 50 sunscreen is essential year-round as the UV index is consistently high.',
  },
  {
    icon: Info,
    title: 'Modern City Layout',
    description: 'Unlike Marrakech or Fes, Agadir has no ancient medina. The city was rebuilt after the devastating 1960 earthquake on a modern grid. Streets are wide, navigation is easy, and the atmosphere is relaxed and resort-oriented. Think Miami Beach meets North Africa.',
  },
  {
    icon: HandCoins,
    title: 'Tipping Culture',
    description: 'Tipping is appreciated but more relaxed than in Marrakech. Restaurant waiters: 10-15%. Hotel porters: 10-20 MAD. Tour guides: 50-100 MAD. Beach umbrella attendants: 10-20 MAD. Taxi drivers do not expect tips but rounding up is appreciated.',
  },
  {
    icon: Globe,
    title: 'Connectivity',
    description: 'Buy a local SIM card at Al Massira Airport (Maroc Telecom or Orange) for about 30 MAD with data. Wi-Fi is available in all resorts and most restaurants. Coverage along the coast and in Taghazout is excellent.',
  },
  {
    icon: Coffee,
    title: 'Relaxed Atmosphere',
    description: 'Agadir is one of Morocco\'s most liberal cities. Beach culture is accepted, alcohol is widely available in hotels and many restaurants, and dress codes are relaxed along the promenade. The Souk El Had area is more traditional, so modest dress is appreciated there.',
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    description: 'Agadir is a year-round destination. Peak season is July-August (European holidays) and December-January (winter sun seekers). The best months for surfing are September-April. Spring (March-May) offers perfect weather with fewer crowds and lower prices.',
  },
];

/* =====================================================================
   DATA: BEACHES
   ===================================================================== */

const beaches = [
  {
    name: 'Agadir Bay (Main Beach)',
    description:
      'The crown jewel of Moroccan beach tourism: a sweeping 10-kilometer crescent of fine golden sand stretching from the port to the cliffs of the Oued Souss estuary. The beach is wide, gently sloping, and perfect for families with children. Sunbeds and parasols are available for 30-50 MAD per day from beachfront operators. The promenade running the full length is lined with cafes, restaurants, and palm trees. Swimming is safe in the designated areas, with lifeguards on duty during summer months. The water temperature ranges from 17 degrees in winter to 22 degrees in summer.',
    type: 'City Beach',
    bestFor: 'Families, sunbathing, promenade walks',
    distance: 'City center',
    tip: 'The southern end near the marina is quieter and cleaner. Sunsets from the north end near the kasbah hill are spectacular. Beach vendors sell everything from corn on the cob to fresh fruit.',
  },
  {
    name: 'Taghazout Beach',
    description:
      'The legendary surf village 19 kilometers north of Agadir that put Moroccan surfing on the world map. Once a sleepy fishing village, Taghazout has evolved into an internationally recognized surf destination while retaining its laid-back bohemian character. The main beach offers consistent right-hand point breaks that work on almost any swell direction. The village itself is a charming maze of blue-and-white buildings, rooftop cafes, surf shops, and yoga studios clinging to the hillside above the Atlantic.',
    type: 'Surf Beach',
    bestFor: 'Surfing, surf culture, digital nomads',
    distance: '19 km north (30 min drive)',
    tip: 'Hash Point and Anchor Point are the famous breaks, but beginners should start at Panoramas beach. The village has excellent accommodation ranging from 80 MAD hostels to 2,000 MAD boutique riads.',
  },
  {
    name: 'Tamraght Beach',
    description:
      'Located between Agadir and Taghazout, Tamraght is a quieter alternative with excellent surf breaks and a growing reputation among intermediate surfers. The village sits above Banana Point, a reliable right-hand reef break that offers long rides on medium swells. The atmosphere is more authentically Moroccan than Taghazout, with fewer tourists, lower prices, and a genuine Amazigh village feel. Several surf camps and yoga retreats operate from converted traditional houses.',
    type: 'Surf Beach',
    bestFor: 'Intermediate surfing, yoga retreats, budget travelers',
    distance: '14 km north (20 min drive)',
    tip: 'Banana Point works best at mid-to-high tide. The village has some of the best-value surf camp accommodation on the coast, with packages including lessons, board hire, and meals from 350 MAD per day.',
  },
  {
    name: 'Aourir (Banana Beach)',
    description:
      'Named for the banana plantations that once surrounded the village, Aourir sits 12 kilometers north of Agadir and offers a long sandy beach with mellow waves ideal for beginners and bodyboarders. The Tuesday souk in Aourir is famous throughout the region and far more authentic than tourist markets. The banana village market sells fresh produce, spices, argan products, and household goods at genuine local prices.',
    type: 'Beach & Market Village',
    bestFor: 'Beginners, bodyboarding, authentic markets',
    distance: '12 km north (15 min drive)',
    tip: 'Visit on Tuesday for the weekly souk, one of the best in the Souss region. Combine with a morning at the beach. The banana fritters from street vendors are legendary.',
  },
  {
    name: 'Legzira Beach',
    description:
      'One of Morocco\'s most photographed beaches, famous for its dramatic red stone arches carved by millennia of Atlantic waves. Located 150 kilometers south of Agadir near Sidi Ifni, Legzira\'s towering natural rock formations create cathedral-like spaces on the beach. One of the two famous arches collapsed in 2016, but the remaining arch and the surrounding cliff formations remain breathtaking. The beach is wild, relatively empty, and backed by terracotta cliffs that glow crimson at sunset.',
    type: 'Natural Wonder',
    bestFor: 'Photography, nature lovers, adventurous day trips',
    distance: '150 km south (2 hours drive)',
    tip: 'Time your visit with low tide to walk under and around the arches. The light is most dramatic in the last two hours before sunset. Bring water and snacks as facilities are minimal.',
  },
  {
    name: 'Sidi Ifni Beach',
    description:
      'A charming former Spanish colonial town 165 kilometers south of Agadir with a wild Atlantic beach, art deco architecture, and a beautifully melancholic atmosphere. The town was the last territory Spain returned to Morocco in 1969, and the Spanish influence is visible in the pastel-colored buildings, plaza layout, and even the occasional Spanish conversation. The beach is dramatic with big waves and strong currents, better for walks and photography than swimming.',
    type: 'Colonial Coastal Town',
    bestFor: 'History, architecture, atmosphere, photography',
    distance: '165 km south (2.5 hours drive)',
    tip: 'Stay overnight to experience the town\'s tranquil evening atmosphere. The Sunday fish market on the old airstrip is extraordinary. Combine with Legzira for a two-day southern coast adventure.',
  },
  {
    name: 'Imouzzer & Paradise Valley',
    description:
      'While not technically a beach, this lush palm-filled valley 60 kilometers northeast of Agadir offers natural rock pools and small waterfalls fed by mountain springs. The contrast with the arid coast is startling: you drive through argan forest into a green valley with cascading pools of turquoise water surrounded by palm trees and red rocks. The main waterfall flows best in spring after winter rains. Local guides (50-100 MAD) know the best swimming spots.',
    type: 'Natural Pools & Waterfalls',
    bestFor: 'Swimming, hiking, escaping the heat',
    distance: '60 km northeast (1.5 hours drive)',
    tip: 'Visit in spring (March-May) when the waterfalls are fullest. Wear sturdy shoes for the rocky paths. The roadside honey sellers along the route offer genuine wild thyme honey for 80-150 MAD per jar.',
  },
];

/* =====================================================================
   DATA: SURFING
   ===================================================================== */

const surfSpots = [
  {
    name: 'Anchor Point',
    level: 'Advanced',
    type: 'Right-hand point break',
    description: 'Morocco\'s most famous wave and one of the best right-hand point breaks in the world. Long, powerful walls that can hold swells up to 15 feet. When it fires on a solid northwest swell, rides of 300 meters or more are possible. Not for beginners under any circumstances.',
    bestSeason: 'October - March',
    bestTide: 'Mid to high tide',
  },
  {
    name: 'Hash Point',
    level: 'Intermediate-Advanced',
    type: 'Right-hand point break',
    description: 'Named after the headland in Taghazout village, this is a long, walling right-hander that breaks over a boulder-strewn seabed. More forgiving than Anchor Point and an excellent step up for intermediate surfers looking to progress. Consistent and rideable on most swells.',
    bestSeason: 'September - April',
    bestTide: 'All tides',
  },
  {
    name: 'Panoramas (Panoramicas)',
    level: 'Beginner-Intermediate',
    type: 'Beach break',
    description: 'A forgiving beach break south of Taghazout village with sandy bottom and mellow waves. This is where most surf schools bring beginners for their first sessions. The waves are gentle, the water is relatively warm, and the wipeouts are soft. Perfect for learning to stand up and catch your first green waves.',
    bestSeason: 'Year-round',
    bestTide: 'Low to mid tide',
  },
  {
    name: 'Banana Point (Tamraght)',
    level: 'Intermediate',
    type: 'Right-hand reef break',
    description: 'A fun, reliable right-hander breaking over a rocky reef in front of Tamraght village. Offers long, workable walls with the occasional barrel section on bigger swells. The paddle out is straightforward and the lineup is usually less crowded than Taghazout spots.',
    bestSeason: 'September - April',
    bestTide: 'Mid to high tide',
  },
  {
    name: 'Killer Point',
    level: 'Advanced',
    type: 'Right-hand point break',
    description: 'A heavy, powerful wave breaking over shallow reef north of Taghazout. Named (perhaps ominously) for the orca whales once spotted here, not for any danger to surfers, though it demands respect. Produces thick, hollow barrels on solid swells. Access requires a scramble down the cliff.',
    bestSeason: 'November - February',
    bestTide: 'Mid tide',
  },
  {
    name: 'Devil\'s Rock',
    level: 'Intermediate-Advanced',
    type: 'Right-hand reef break',
    description: 'A quality right-hander breaking in front of a distinctive offshore rock formation between Tamraght and Taghazout. Offers fast, hollow sections with a reliable takeoff zone. Works on medium to large swells and can produce excellent barrels at low tide.',
    bestSeason: 'October - March',
    bestTide: 'Low to mid tide',
  },
];

const surfSchools = [
  {
    name: 'Surf Maroc',
    location: 'Taghazout',
    price: '450-600 MAD/lesson',
    description: 'The original Taghazout surf operation, running since 2003. Professional ISA-certified instructors, excellent equipment, and stylish accommodation in converted traditional houses. Their week-long packages include accommodation, daily lessons, video analysis, and meals.',
  },
  {
    name: 'Hash Point Surf Camp',
    location: 'Taghazout',
    price: '350-500 MAD/lesson',
    description: 'A popular mid-range option with a prime location overlooking Hash Point. Good quality boards, experienced local instructors, and a social rooftop with ocean views. Group lessons are excellent value at 350 MAD including equipment.',
  },
  {
    name: 'Amouage Surf & Yoga',
    location: 'Tamraght',
    price: '300-450 MAD/lesson',
    description: 'Combining surfing and yoga in a beautifully designed retreat in Tamraght village. The surf lessons are professional and the post-surf yoga sessions on the rooftop terrace are the perfect recovery. Week-long packages from 3,500 MAD all-inclusive.',
  },
  {
    name: 'Dynamite Surf School',
    location: 'Taghazout',
    price: '350-550 MAD/lesson',
    description: 'Run by local Moroccan surfers who grew up on these waves. Authentic experience with deep knowledge of local conditions. Individual attention with small group sizes (maximum 4 students per instructor). Board rental from 150 MAD per day.',
  },
];

/* =====================================================================
   DATA: ATTRACTIONS
   ===================================================================== */

const attractions = [
  {
    name: 'Agadir Oufella (Kasbah Ruins)',
    description:
      'The hilltop ruins of the old kasbah perched 236 meters above the city offer the most spectacular panoramic views of Agadir Bay, the port, and the Atlas Mountains fading into the distance. The original fortress was built in 1540 by the Saadian sultan Mohammed ash-Sheikh to defend against Portuguese attacks. The 1960 earthquake destroyed the kasbah and buried most of the old city beneath it. Today, only the restored outer walls and the famous Arabic inscription "God, Country, King" remain, but the sunset views are unforgettable. A winding road leads to the top, and the site is free to visit.',
    image: '/images/hero-agadir.webp',
    type: 'Historic Ruins',
    rating: 4.5,
    hours: 'Open daily, sunrise to sunset',
    price: 'Free',
    tip: 'Visit at sunset when the bay turns gold and the city lights begin to twinkle. A taxi to the top costs 30-40 MAD. The inscription on the wall is illuminated at night and visible from the entire city.',
  },
  {
    name: 'Souk El Had',
    description:
      'The largest souk in the Souss region, covering over 13 hectares with more than 3,000 shops arranged in clearly labeled sections. Unlike the labyrinthine souks of Marrakech and Fes, Souk El Had is organized on a grid system with numbered gates and sectioned areas for spices, textiles, leather, electronics, produce, meat, fish, ceramics, and household goods. This is where Agadir locals shop, and prices are significantly lower than in tourist-oriented markets. The fresh produce section is a riot of color with stacked pyramids of oranges, dates, olives, and seasonal vegetables.',
    image: '/images/hero-agadir.webp',
    type: 'Market',
    rating: 4.6,
    hours: 'Saturday - Thursday: 6:00 AM - 8:00 PM, closed Friday',
    price: 'Free entry',
    tip: 'Enter through Gate 1 (Bab 1) for the main entrance. The argan oil and spice sections are near Gate 5. Prices are already reasonable but light haggling (10-20% off) is still expected. Bring cash as most vendors do not accept cards.',
  },
  {
    name: 'Crocoparc',
    description:
      'A beautifully designed zoological garden dedicated to Nile crocodiles, set within a lush botanical garden of cacti, tropical plants, and medicinal herbs. Home to over 300 crocodiles of various sizes, from tiny hatchlings to four-meter adults basking on the banks of landscaped pools. The park also features an impressive cactus garden with over 400 species, a snake house, a giant tortoise enclosure, and well-maintained walking paths through themed gardens. Interactive feeding demonstrations happen twice daily.',
    image: '/images/hero-agadir.webp',
    type: 'Zoo & Botanical Garden',
    rating: 4.4,
    hours: '9:30 AM - 6:00 PM daily',
    price: '70 MAD (adult), 40 MAD (children 3-12)',
    tip: 'Arrive for the 11 AM or 3 PM feeding session when the crocodiles are most active. The cactus garden is underrated and genuinely impressive. Allow 2 hours for a full visit. There is a good on-site cafe.',
  },
  {
    name: 'Valley of the Birds (Vallee des Oiseaux)',
    description:
      'A narrow, shaded park running through the center of the city between the beach and the main boulevard. Despite the name, it is more of a small urban zoo and botanical garden than a bird sanctuary. Flamingos, macaws, monkeys, Barbary sheep, and gazelles inhabit landscaped enclosures connected by pathways shaded by eucalyptus and palm trees. Children love the playground, the small waterfall, and the animal encounters. It is a pleasant green escape from the beach and boulevard.',
    image: '/images/hero-agadir.webp',
    type: 'Urban Park & Mini Zoo',
    rating: 4.1,
    hours: '9:00 AM - 6:30 PM daily',
    price: 'Free',
    tip: 'A perfect mid-morning break if you have young children. The park connects the promenade to Avenue Hassan II, making it a convenient shortcut as well as a destination.',
  },
  {
    name: 'Marina d\'Agadir',
    description:
      'A modern waterfront development at the northern end of the beach where luxury yachts bob alongside traditional fishing boats. The marina complex includes upscale restaurants, cafes, boutique shops, and an attractive pedestrian boardwalk. It is the most polished and contemporary part of Agadir, with a Mediterranean feel that contrasts with the rest of the city. Evening strolls along the marina are popular with both tourists and locals. Several restaurants here serve excellent fresh seafood with marina views.',
    image: '/images/hero-agadir.webp',
    type: 'Waterfront',
    rating: 4.3,
    hours: 'Open 24 hours (restaurants until late)',
    price: 'Free',
    tip: 'The marina restaurants are pricier than city center options but the setting is unbeatable for a sunset dinner. The fish restaurants near the port end offer better value than those at the boutique end.',
  },
  {
    name: 'Amazigh Heritage Museum (Musee du Patrimoine Amazigh)',
    description:
      'A small but thoughtfully curated museum dedicated to the Amazigh (Berber) heritage of the Souss region. The collection includes traditional Amazigh jewelry, carpets, pottery, musical instruments, weapons, clothing, and domestic objects spanning several centuries. The silver jewelry collection is particularly impressive, showcasing the intricate craftsmanship of Tiznit and Anti-Atlas silversmiths. The museum provides essential context for understanding the predominantly Amazigh culture of the Agadir region.',
    image: '/images/hero-agadir.webp',
    type: 'Museum',
    rating: 4.2,
    hours: '9:30 AM - 5:30 PM, closed Sunday',
    price: '20 MAD',
    tip: 'Visit before going to Souk El Had or the argan cooperatives to better appreciate the Amazigh culture you will encounter. The museum is small and can be covered in 45 minutes.',
  },
  {
    name: 'The Promenade (Corniche)',
    description:
      'Agadir\'s famous beachfront promenade stretches for nearly 7 kilometers along the bay, lined with palm trees, restaurants, cafes, and hotels. This is the social heart of the city, especially in the early evening when families, joggers, and couples stroll along the wide pedestrian walkway as the sun sets over the Atlantic. Bicycle and electric scooter rentals are available along the route. The promenade connects the marina in the north to the Oued Souss estuary in the south, passing virtually every major beachfront hotel.',
    image: '/images/hero-agadir.webp',
    type: 'Promenade',
    rating: 4.4,
    hours: 'Open 24 hours',
    price: 'Free',
    tip: 'Walk the full length at sunset for the quintessential Agadir experience. Rent a bicycle (30-50 MAD per hour) if you want to cover the full distance. The cafes near Sector Touristique have the best people-watching.',
  },
];

/* =====================================================================
   DATA: RESTAURANTS
   ===================================================================== */

const restaurants = [
  {
    name: 'Ocean Vagabond',
    cuisine: 'Mediterranean-Moroccan',
    price: '$$',
    location: 'Beachfront (Secteur Balneaire)',
    description: 'A stylish beachfront restaurant and lounge with direct sand access, excellent seafood, creative cocktails, and a laid-back California-meets-Morocco vibe. The grilled sea bass, prawn tagine, and fresh salads are superb. Weekend brunch is very popular with expats and well-heeled locals.',
    priceRange: '80-200 MAD per person',
  },
  {
    name: 'Pure Passion Restaurant',
    cuisine: 'International-Moroccan Fusion',
    price: '$$$',
    location: 'Marina d\'Agadir',
    description: 'One of Agadir\'s finest dining experiences, set in the marina with beautiful terrace views over the yachts. The menu blends Moroccan flavors with French and Italian technique. The seafood pastilla, lamb shank tagine, and chocolate fondant are standouts. Excellent wine list featuring Moroccan and French bottles.',
    priceRange: '150-350 MAD per person',
  },
  {
    name: 'Le Jardin d\'Eau',
    cuisine: 'Moroccan-French',
    price: '$$$',
    location: 'City Center',
    description: 'An elegant garden restaurant known for its refined take on Moroccan classics. The setting is a beautifully landscaped courtyard with water features and lantern lighting. Specialties include pigeon pastilla, saffron monkfish, and an exceptional seven-vegetable couscous served only on Fridays. Reservations recommended.',
    priceRange: '120-280 MAD per person',
  },
  {
    name: 'Fish Market Grills (Port d\'Agadir)',
    cuisine: 'Fresh Seafood',
    price: '$',
    location: 'Agadir Port',
    description: 'The most authentic seafood experience in Agadir. Choose your fish, prawns, calamari, or lobster from the market stalls, negotiate the price per kilogram, then hand it to one of the adjacent grill operators who will cook it with chermoula marinade, salad, and bread for a small cooking fee of 20-30 MAD. A full seafood feast can cost as little as 60-120 MAD per person. The sardines (8-15 MAD per portion) are the best value in Morocco.',
    priceRange: '30-120 MAD per person',
  },
  {
    name: 'Chez Tonton',
    cuisine: 'French Bistro',
    price: '$$',
    location: 'Nouveau Talborjt',
    description: 'A beloved French-style bistro run by the same family for decades. Known for generous portions, honest cooking, and a warm atmosphere. The steak frites, moules mariniere, and tarte tatin are consistently excellent. One of the few restaurants in Agadir where the French expat community gathers, which tells you everything about the quality.',
    priceRange: '80-180 MAD per person',
  },
  {
    name: 'La Scala',
    cuisine: 'Italian-Mediterranean',
    price: '$$',
    location: 'Secteur Touristique',
    description: 'An Italian restaurant that has earned a loyal following for its wood-fired pizzas, fresh pasta, and generous antipasti platters. The terrace is pleasant in the evening, and the portions are large. Good for families and groups. The seafood linguine and quattro formaggi pizza are local favorites.',
    priceRange: '70-160 MAD per person',
  },
  {
    name: 'Mezzo Mezzo',
    cuisine: 'Mediterranean',
    price: '$$',
    location: 'Sonaba district',
    description: 'A modern, sleek restaurant that draws a younger crowd with its creative Mediterranean menu, craft cocktails, and stylish interior. The tuna tataki, grilled octopus, and risotto are beautifully presented and genuinely delicious. One of the newer additions to Agadir\'s dining scene and rapidly becoming a local favorite.',
    priceRange: '90-200 MAD per person',
  },
  {
    name: 'Jour et Nuit',
    cuisine: 'Moroccan-International',
    price: '$',
    location: 'Avenue Hassan II',
    description: 'A popular all-day cafe and restaurant on Agadir\'s main boulevard. Excellent for breakfast (fresh juice, msemen, eggs, and coffee from 25 MAD), casual lunches, and affordable dinners. The mixed grill plate and chicken tagine with preserved lemons offer excellent value. Locals and tourists mix here in equal measure.',
    priceRange: '25-100 MAD per person',
  },
];

/* =====================================================================
   DATA: ACCOMMODATION
   ===================================================================== */

const accommodation = [
  {
    name: 'Sofitel Agadir Royal Bay Resort',
    category: 'Luxury',
    price: '2,000-5,000 MAD/night',
    description: 'The crown jewel of Agadir hotels. A five-star resort set in sprawling gardens with direct beach access, multiple pools, a world-class spa, and impeccable service. The rooms blend Moroccan design with contemporary luxury. The beachfront restaurant serves exceptional seafood, and the bar terrace is the best sunset spot in Agadir. Half-board packages offer excellent value.',
    features: ['Private beach', 'Spa & hammam', 'Multiple pools', '3 restaurants', 'Golf access'],
  },
  {
    name: 'Tikida Golf Palace',
    category: 'Luxury',
    price: '1,500-3,500 MAD/night',
    description: 'An elegant resort adjacent to the Golf du Soleil course, perfect for golf enthusiasts. Spacious rooms with balconies overlooking manicured gardens and the golf course. The resort features a large pool complex, full spa, tennis courts, and direct beach shuttle. The architecture is beautifully Moorish-inspired with zellige-tiled courtyards and carved stucco.',
    features: ['Golf course access', 'Spa & wellness center', 'Tennis courts', 'Beach shuttle', 'Kids club'],
  },
  {
    name: 'Iberostar Founty Beach',
    category: 'Mid-Range All-Inclusive',
    price: '800-1,800 MAD/night',
    description: 'A solid all-inclusive option directly on the beach with reliable quality, extensive buffet restaurants, multiple bars, entertainment programs, and a large pool area. The rooms are modern and well-maintained. The all-inclusive package represents good value for families who want everything included. The beach access is among the best of any Agadir hotel.',
    features: ['All-inclusive', 'Beachfront', 'Animation team', 'Multiple pools', 'Buffet restaurants'],
  },
  {
    name: 'Riad Villa Blanche',
    category: 'Boutique',
    price: '900-2,200 MAD/night',
    description: 'An intimate boutique hotel styled as a traditional riad but with modern comforts and a swimming pool. Located in the city center rather than the tourist strip, it offers a more authentic experience with personalized service, a beautiful courtyard restaurant, and individually decorated rooms. The staff arranges excellent day trips and can organize private dining experiences.',
    features: ['Boutique atmosphere', 'Pool & garden', 'Restaurant', 'Personalized service', 'Central location'],
  },
  {
    name: 'Atlantic Hotel Agadir',
    category: 'Mid-Range',
    price: '500-1,000 MAD/night',
    description: 'A reliable mid-range hotel on the promenade with clean, comfortable rooms, a rooftop pool with ocean views, and an excellent location for exploring the beach and city center on foot. The breakfast buffet is generous and the staff are helpful. Good value for money with a prime beachfront position.',
    features: ['Beachfront location', 'Rooftop pool', 'Restaurant', 'Ocean view rooms', 'Tour desk'],
  },
  {
    name: 'Hostel Agadir Surf (Various)',
    category: 'Budget',
    price: '80-200 MAD/night',
    description: 'Agadir and Taghazout have numerous budget hostels and surf camps offering dormitory beds from 80 MAD and private rooms from 150 MAD. The surf hostels in Taghazout and Tamraght generally offer better atmosphere and value than city center budget options. Many include communal kitchens, rooftop terraces, and surfboard storage. Weekly rates offer significant discounts.',
    features: ['Dormitory & private rooms', 'Communal kitchen', 'Surf storage', 'Social atmosphere', 'Rooftop terrace'],
  },
];

/* =====================================================================
   DATA: DAY TRIPS
   ===================================================================== */

const dayTrips = [
  {
    name: 'Paradise Valley',
    icon: Droplets,
    distance: '60 km (1.5 hours)',
    description:
      'A stunning natural oasis hidden in the foothills of the Anti-Atlas mountains. The valley features a series of natural rock pools connected by small waterfalls, surrounded by palm trees, oleander bushes, and dramatic rock formations. The turquoise pools are deep enough for swimming and cliff jumping in designated spots. The drive through argan forest is scenic, passing goats climbing argan trees. Local guides (50-100 MAD) lead you to the best pools and ensure safety.',
    highlights: ['Natural rock pools', 'Swimming & cliff jumping', 'Palm-filled valley', 'Argan forest drive', 'Local guides available'],
    bestTime: 'March - June (water levels highest)',
    cost: 'Free entry; guide 50-100 MAD; taxi day trip 400-600 MAD round trip',
  },
  {
    name: 'Taroudant',
    icon: Landmark,
    distance: '85 km (1.5 hours)',
    description:
      'Often called "Little Marrakech," this walled city in the fertile Souss Valley offers an authentic Moroccan medina experience without the tourist intensity of Marrakech. The impressive red-ochre ramparts stretch for 7.5 kilometers around a working medina where artisans craft leather goods, metal lanterns, and Amazigh jewelry. Two distinct souks serve different functions: the Arab souk for spices, textiles, and household goods, and the Amazigh souk for local produce and handcrafts. The tanneries here are smaller and less overwhelming than those in Fes.',
    highlights: ['7.5 km city walls', 'Two authentic souks', 'Working tanneries', 'Amazigh jewelry', 'Riad lunch options'],
    bestTime: 'Year-round; cooler in winter',
    cost: 'Grand taxi 200-300 MAD round trip; organized tour 400-700 MAD',
  },
  {
    name: 'Tiznit',
    icon: Sparkles,
    distance: '95 km (1.5 hours)',
    description:
      'The silver capital of Morocco, where the Amazigh tradition of silver jewelry-making has thrived for centuries. The small walled medina houses dozens of silver workshops where you can watch artisans hammer, engrave, and enamel intricate pieces by hand. Tiznit silver jewelry is characterized by bold geometric Amazigh designs, amber and coral inlays, and fibula brooches that have been worn by Berber women for millennia. The quality is far superior to tourist jewelry sold in Marrakech, and prices are 30-50% lower.',
    highlights: ['Silver jewelry workshops', 'Amazigh designs', 'Walled medina', 'Artisan demonstrations', 'Authentic prices'],
    bestTime: 'Thursday (main souk day)',
    cost: 'Grand taxi 150-250 MAD round trip; silver pieces from 100 MAD',
  },
  {
    name: 'Tafraoute & Painted Rocks',
    icon: Palette,
    distance: '170 km (3 hours)',
    description:
      'A remote and spectacularly beautiful town nestled in a valley of pink granite boulders in the Anti-Atlas mountains. The surrounding landscape is otherworldly: massive smooth granite formations in shades of pink, red, and orange tower above almond orchards and traditional Amazigh villages. The famous Painted Rocks, created by Belgian artist Jean Verame in 1984, are a collection of massive boulders painted in vivid blues, reds, and purples scattered across the desert landscape. Tafraoute is also known for its February almond blossom festival.',
    highlights: ['Painted Rocks installation', 'Pink granite valley', 'Almond blossoms (February)', 'Amazigh villages', 'Napoleon\'s Hat rock formation'],
    bestTime: 'February (almond blossoms), October - April (pleasant temperatures)',
    cost: 'Rental car recommended; organized tour 600-900 MAD; allow full day',
  },
  {
    name: 'Souss Massa National Park',
    icon: Binoculars,
    distance: '65 km (1 hour)',
    description:
      'A coastal national park stretching 33,000 hectares along the Atlantic between Agadir and Tiznit. The park protects critical habitat for the endangered Northern Bald Ibis, one of the world\'s rarest birds with fewer than 700 individuals remaining. The park encompasses dramatic cliff-lined coastline, sand dunes, freshwater marshes, and argan forest. Over 250 bird species have been recorded, including flamingos, spoonbills, marbled teal, and Eleonora\'s falcon. Guided birdwatching tours are the best way to see the ibis colonies.',
    highlights: ['Northern Bald Ibis colony', '250+ bird species', 'Coastal cliffs & dunes', 'Argan forest', 'Flamingo wetlands'],
    bestTime: 'March - May and September - November (migration seasons)',
    cost: 'Park entry 20 MAD; guided birdwatching tour 300-500 MAD',
  },
  {
    name: 'Immouzzer des Ida Outanane',
    icon: Mountain,
    distance: '60 km (1 hour)',
    description:
      'A mountain village at 1,200 meters elevation known for its weekly Thursday souk, cascading waterfall, and honey production. The drive from Agadir climbs through spectacular mountain scenery with argan forests and Amazigh villages clinging to hillsides. The waterfall is most impressive in spring but the mountain air and panoramic views are rewarding year-round. The village is the center of Morocco\'s wild thyme honey production, and the Thursday market is an excellent place to buy genuine honey, argan oil, and mountain herbs.',
    highlights: ['Mountain waterfall', 'Thursday honey market', 'Argan forest drive', 'Mountain villages', 'Panoramic views'],
    bestTime: 'Thursday (market day); spring for waterfall',
    cost: 'Grand taxi 200-300 MAD round trip; honey from 80 MAD per jar',
  },
];

/* =====================================================================
   DATA: ARGAN OIL
   ===================================================================== */

const arganInfo = {
  overview: 'The argan tree (Argania spinosa) is endemic to southwestern Morocco, and the Souss-Massa region around Agadir is the heartland of argan production. UNESCO designated the argan forest as a Biosphere Reserve in 1998. The oil is extracted from the kernels of the argan fruit through a labor-intensive process traditionally performed by Amazigh women in cooperatives. Culinary argan oil is made from roasted kernels and has a rich, nutty flavor used in Moroccan cuisine. Cosmetic argan oil is cold-pressed from raw kernels and prized worldwide for its moisturizing and anti-aging properties.',
  cooperatives: [
    {
      name: 'Cooperative Marjana',
      location: '30 km east of Agadir on the road to Taroudant',
      description: 'One of the most established women\'s cooperatives in the region with over 60 members. Visitors can observe the full production process from cracking the incredibly hard argan nuts by hand to grinding the roasted kernels on a traditional stone mill. The cooperative produces both culinary and cosmetic oils, amlou (argan-almond-honey spread), and argan-based soaps and creams.',
      prices: 'Culinary oil: 200-280 MAD/liter; Cosmetic oil: 250-350 MAD/liter; Amlou: 80-120 MAD/jar',
    },
    {
      name: 'Cooperative Tafyoucht',
      location: 'Essaouira road, 45 km north of Agadir',
      description: 'A smaller, more intimate cooperative where you can sit with the women as they work and learn about the process in detail. Less touristic than roadside cooperatives, with genuinely fair-trade practices that ensure the majority of the revenue goes directly to the women workers. Their cosmetic oil is particularly high quality.',
      prices: 'Culinary oil: 180-250 MAD/liter; Cosmetic oil: 220-320 MAD/liter; Soap: 30-60 MAD',
    },
  ],
  goatsInTrees: 'The famous image of goats perched in argan trees is real, though increasingly staged for tourists along the Essaouira road. Goats naturally climb argan trees to eat the fruit, and their digestive process was once part of the oil production chain (the goats would eat the fruit and excrete the hard inner nut). Modern cooperatives crack the nuts by hand, making the goat-digested method obsolete, but the sight of goats balancing in tree branches remains one of Morocco\'s most iconic and surreal images. If you see goats placed in trees by the roadside with handlers expecting tips, that is the staged version. Genuine goat-in-tree sightings happen naturally throughout the argan forest.',
  buyingTips: [
    'Buy directly from cooperatives, not from roadside vendors or tourist shops where diluted oil is common.',
    'Culinary argan oil should be dark amber with a strong nutty aroma. If it smells faint or looks pale, it is likely diluted with cheaper oils.',
    'Cosmetic argan oil should be light gold and nearly odorless. Avoid any with added fragrance.',
    'A liter of genuine argan oil requires 30-50 kilograms of argan fruit and 15-20 hours of manual labor. If the price seems too cheap, the oil is not pure.',
    'Look for the cooperative seal and ask about their production process. Legitimate cooperatives are happy to explain and demonstrate.',
    'Prices range from 150 MAD per liter for basic culinary oil to 350 MAD per liter for premium cosmetic oil. Prices below 100 MAD per liter are almost certainly diluted.',
  ],
};

/* =====================================================================
   DATA: GOLF COURSES
   ===================================================================== */

const golfCourses = [
  {
    name: 'Golf du Soleil',
    holes: '36 holes (2 courses)',
    designer: 'Championship & 9-hole courses',
    greenFee: '500-800 MAD',
    description: 'The premier golf destination in Agadir with two 18-hole courses (the Championship and the 27-hole combination) set among eucalyptus trees and flowering gardens. The Championship course is the most challenging in the region with well-bunkered greens and water hazards. Excellent practice facilities including a driving range, putting green, and short game area. The clubhouse restaurant is surprisingly good.',
  },
  {
    name: 'Golf de l\'Ocean',
    holes: '27 holes',
    designer: 'Belt Collins',
    greenFee: '450-700 MAD',
    description: 'A stunning oceanside course with holes playing along the Atlantic coastline. The sea views from several holes are distractingly beautiful. Three 9-hole loops offer varied challenges: the Links, the Dunes, and the Garden. Wind is the defining feature, particularly on the coastal holes where Atlantic breezes can add two clubs to your shot selection. The most scenic course in the Agadir area.',
  },
  {
    name: 'Tazegzout Golf Course',
    holes: '18 holes',
    designer: 'Kyle Phillips',
    greenFee: '600-1,000 MAD',
    description: 'A spectacular clifftop course north of Agadir near Taghazout, designed by Kyle Phillips (who also designed Kingsbarns in Scotland). Dramatic ocean views from nearly every hole, with several tee boxes perched on cliff edges above the Atlantic. The course weaves through argan trees and native landscape. This is the newest and most architecturally ambitious course in the region. Part of the Tazegzout Bay resort development.',
  },
  {
    name: 'Golf Les Dunes',
    holes: '27 holes',
    designer: 'Cabell Robinson',
    greenFee: '400-650 MAD',
    description: 'A well-maintained course located inland with three distinct 9-hole loops named the Dunes, the Eucalyptus, and the Garden. More sheltered from wind than the coastal courses, making it a good choice on blustery days. The Eucalyptus loop runs through mature eucalyptus forest and is particularly pleasant. Good value for money and less crowded than Golf du Soleil.',
  },
];

/* =====================================================================
   DATA: FAMILY ACTIVITIES
   ===================================================================== */

const familyActivities = [
  {
    name: 'Crocoparc',
    icon: Eye,
    ageRange: 'All ages',
    price: '70 MAD adult, 40 MAD child (3-12)',
    description: 'Over 300 Nile crocodiles in beautifully landscaped enclosures, plus a superb cactus garden with 400+ species, giant tortoises, and a snake house. Feeding sessions at 11 AM and 3 PM are the highlight. Children are fascinated by the baby crocodile nursery. Allow 2 hours.',
  },
  {
    name: 'Atlantica Parc',
    icon: Waves,
    ageRange: 'All ages',
    price: '200-280 MAD per person',
    description: 'Agadir\'s main water park with slides, wave pools, lazy rivers, and dedicated toddler areas. The park is well-maintained by Moroccan standards with clean water and functioning rides. Food and drink are available on-site but bringing your own snacks is permitted. Expect to spend a full day.',
  },
  {
    name: 'Camel Rides on the Beach',
    icon: Sunrise,
    ageRange: '4+',
    price: '100-200 MAD per person (30-60 minutes)',
    description: 'Several operators offer camel and dromedary rides along Agadir beach, typically departing from the southern end near the Oued Souss. Sunset rides are the most popular and photogenic. The camels are generally well-cared for. Negotiate the price before mounting and clarify the duration.',
  },
  {
    name: 'Quad Biking (Buggy Tours)',
    icon: Navigation,
    ageRange: '8+ (passengers), 16+ (drivers)',
    price: '350-600 MAD per person (2-3 hours)',
    description: 'Guided quad bike excursions through the argan forest and Amazigh villages surrounding Agadir. Most tours include stops at an argan cooperative and a traditional village for mint tea. Some tours reach the sand dunes near the Souss River estuary. Helmets and goggles are provided. Half-day tours are also available.',
  },
  {
    name: 'Horseback Riding on Beach',
    icon: Heart,
    ageRange: '6+',
    price: '250-500 MAD per person (1-2 hours)',
    description: 'Several stables offer guided horseback rides along the beach, through argan forests, or along the Oued Souss riverbank. Ranch de Diabat and Atlas Equestrian are the most reputable operators with well-maintained horses. Sunset beach rides are magical. No experience necessary for the guided walk rides.',
  },
  {
    name: 'Banana Boat & Jet Ski',
    icon: Waves,
    ageRange: 'Banana boat: 4+; Jet ski: 16+',
    price: 'Banana boat: 50-100 MAD; Jet ski: 300-500 MAD (30 min)',
    description: 'Water sports operators set up along the main beach during summer months (June-September). Banana boats, jet skis, parasailing, and pedal boats are all available. Prices are negotiable, especially for multiple activities. Check that operators have life jackets and valid insurance.',
  },
  {
    name: 'Souss Massa National Park (Family Visit)',
    icon: Binoculars,
    ageRange: 'All ages',
    price: 'Entry 20 MAD; guided tour 300-500 MAD',
    description: 'An excellent educational excursion for nature-loving families. The park\'s flamingo wetlands and Northern Bald Ibis colonies are accessible via easy walking trails. Guides make the experience come alive for children by spotting and identifying birds. Binoculars can be rented. Pack a picnic and plenty of water.',
  },
];

/* =====================================================================
   DATA: GETTING THERE
   ===================================================================== */

const gettingThere = [
  {
    mode: 'By Air',
    icon: Plane,
    details: [
      'Al Massira Airport (AGA) is located 33 km southeast of Agadir city center, approximately 30-40 minutes by taxi.',
      'Direct flights from major European cities including London (Gatwick, Stansted), Paris (Orly, CDG), Brussels, Amsterdam, Frankfurt, Manchester, and many Scandinavian capitals.',
      'Ryanair, easyJet, TUI, Transavia, and Royal Air Maroc operate regular scheduled and charter services.',
      'Airport taxi to city center: fixed rate 200-250 MAD (posted at the airport). Do not accept higher prices.',
      'The airport has ATMs, currency exchange, car rental desks, and SIM card vendors in the arrivals hall.',
      'Domestic flights connect to Casablanca (1 hour) and Marrakech (35 minutes) via Royal Air Maroc.',
    ],
  },
  {
    mode: 'By Bus',
    icon: Bus,
    details: [
      'CTM and Supratours operate comfortable coach services from Marrakech (3-3.5 hours, 100-130 MAD), Essaouira (3 hours, 80-100 MAD), and Casablanca (9 hours, 200-250 MAD).',
      'CTM buses depart from the Gare Routiere on Avenue Al Mouquawama. Supratours depart from their own terminal near the port.',
      'Book CTM tickets online at ctm.ma for guaranteed seats, especially during holidays and weekends.',
      'The Marrakech-Agadir road crosses the High Atlas via the Tizi n\'Test pass (spectacular scenery) or the faster Tizi n\'Tleta route via the A7 motorway.',
      'Long-distance buses from Fes (10 hours), Tangier (12 hours), and the Western Sahara also serve Agadir.',
    ],
  },
  {
    mode: 'By Car',
    icon: Car,
    details: [
      'From Marrakech: 270 km via the A7 motorway (Autoroute), approximately 3 hours. Toll cost approximately 80 MAD.',
      'From Essaouira: 170 km via the N1 coastal road, approximately 2.5-3 hours. The road passes through Tamaloukt and the argan country.',
      'From Casablanca: 460 km via the A2 motorway to Marrakech, then A7 to Agadir, approximately 5 hours. Tolls approximately 200 MAD total.',
      'Car rental is available at the airport from international (Europcar, Hertz, Avis) and local companies. Daily rates from 250 MAD for a small car.',
      'Driving in Agadir city is straightforward with wide streets and clear signage. Parking is available at most hotels and in the city center.',
      'A rental car is highly recommended for day trips to Paradise Valley, Taroudant, Tiznit, and Tafraoute.',
    ],
  },
];

/* =====================================================================
   DATA: PRACTICAL INFO
   ===================================================================== */

const practicalInfo = [
  {
    icon: Shield,
    title: 'Safety',
    tips: [
      'Agadir is one of the safest cities in Morocco for tourists. Violent crime against visitors is extremely rare.',
      'The beach and promenade are safe for evening walks. Standard precautions apply: avoid deserted areas at night and keep valuables secure.',
      'Beach vendors can be persistent but are not aggressive. A firm "la shukran" (no thank you) is sufficient.',
      'Swimming: pay attention to the flag system on the beach. Red flag means dangerous currents. Always swim in lifeguard-supervised areas.',
      'The surf spots north of Agadir have strong currents and rocky seabeds. Never surf alone and always check conditions with locals.',
    ],
  },
  {
    icon: ThermometerSun,
    title: 'Weather & When to Go',
    tips: [
      'Average temperatures: Winter (Dec-Feb) 18-22 C; Spring (Mar-May) 20-25 C; Summer (Jun-Aug) 25-30 C; Autumn (Sep-Nov) 22-28 C.',
      'Water temperature: ranges from 17 C in winter to 22 C in summer. Wetsuits (3/2mm) recommended for surfing year-round.',
      'Rain is rare: fewer than 30 days of rain per year, mostly concentrated in November-February.',
      'The "Chergui" wind from the Sahara can occasionally bring hot, dusty conditions in summer, pushing temperatures above 40 C.',
      'Peak tourist season: July-August and Christmas-New Year. Best value: March-May and October-November.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Common Scams & Annoyances',
    tips: [
      'Fake argan oil: diluted or non-argan oil sold at tourist prices. Buy only from established cooperatives.',
      'Beach vendors with overpriced sunglasses, watches, and souvenirs. Ignore or firmly decline.',
      'Taxi drivers not using the meter: always insist on the meter (compteur) or agree on price before departing.',
      'Restaurant touts on the promenade trying to lure you into mediocre restaurants. Choose your own based on reviews.',
      'Unofficial "guides" in Souk El Had. The souk is easy to navigate on your own and does not require a guide.',
    ],
  },
  {
    icon: Phone,
    title: 'Emergency Information',
    tips: [
      'Tourist police: 19 (French and Arabic speaking)',
      'Ambulance: 15',
      'Fire: 15',
      'Hassan II Hospital is the main public hospital. Clinique Al Hayat and Clinique Atlas are private clinics with English-speaking doctors.',
      'Pharmacies are marked with a green cross. Several along Avenue Hassan II operate late-night rotation schedules.',
      'Your hotel reception is your best resource for any problem. Resort staff are experienced in handling tourist issues.',
    ],
  },
];

/* =====================================================================
   DATA: FAQ
   ===================================================================== */

const faqs = [
  {
    question: 'Is Agadir worth visiting, or should I just go to Marrakech?',
    answer: 'Agadir and Marrakech are completely different experiences and not interchangeable. Agadir is for beach lovers, surfers, golfers, and families wanting a relaxed resort holiday with sunshine. Marrakech is for culture, history, souks, and sensory overload. Many travelers combine both: fly into one, spend a few days, then transfer to the other (3 hours by road). If you only want beaches and relaxation, Agadir is the better choice. If you want medina exploration and cultural immersion, choose Marrakech.',
  },
  {
    question: 'How many days do I need in Agadir?',
    answer: 'For a beach holiday with day trips, 5-7 days is ideal. This gives you 2-3 days on the beach and promenade, a day surfing in Taghazout, a day trip to Paradise Valley or Taroudant, and time for the souk, argan cooperatives, and golf. If you are primarily here for surfing, many visitors stay 1-2 weeks in Taghazout. A minimum of 3 days covers the essentials.',
  },
  {
    question: 'When is the best time to surf in Agadir and Taghazout?',
    answer: 'The prime surf season runs from September to April, with the biggest and most consistent swells arriving November through February. The water temperature is 17-19 C in winter, so a 3/2mm wetsuit is essential. Summer (June-August) is generally flat with occasional small swells suitable for beginners. September and October offer the best combination of warm weather and consistent waves.',
  },
  {
    question: 'Is Agadir safe for solo female travelers?',
    answer: 'Agadir is one of the safest cities in Morocco for solo female travelers. The resort areas, promenade, and beach are comfortable and well-patrolled. Dress standards are more relaxed than inland cities, though modest clothing is still appreciated in the souk and residential neighborhoods. The surf scene in Taghazout is very international and welcoming. Standard solo travel precautions apply: avoid walking alone in poorly lit areas at night.',
  },
  {
    question: 'Can I drink alcohol in Agadir?',
    answer: 'Yes. Agadir is one of the most liberal cities in Morocco regarding alcohol. Most hotels, resort restaurants, and many independent restaurants serve beer, wine, and cocktails. The marina restaurants all serve alcohol. There are several bars and nightclubs in the tourist zone. Alcohol is not available in the souk area or in traditional Moroccan restaurants. Carrefour and the Uniprix supermarkets sell alcohol for self-catering.',
  },
  {
    question: 'How do I get from the airport to the city center?',
    answer: 'The official airport taxi fare to the city center and beach hotels is 200-250 MAD (fixed rate posted at the airport). The journey takes 30-40 minutes. Agree on the price before getting in the taxi and do not accept offers above the posted rate. Some hotels offer airport transfers that can be arranged in advance. There is no regular public bus service from the airport. Car rental desks are available in the arrivals hall.',
  },
  {
    question: 'What is the best way to get to Taghazout from Agadir?',
    answer: 'The cheapest option is a shared grand taxi from Agadir (near the Souk El Had) to Taghazout for 15-20 MAD per person. A private taxi costs 150-200 MAD each way. Local bus number 32 runs the coastal route but is slow and infrequent. If staying for multiple days of surfing, consider renting a car (from 250 MAD per day) for the flexibility to explore multiple breaks and beaches.',
  },
  {
    question: 'Is the food safe to eat in Agadir?',
    answer: 'Yes, with normal precautions. The resort restaurants and established city restaurants maintain good hygiene standards. The fish market grills at the port are cooked at high temperatures and are safe and delicious. Street food in Souk El Had is generally safe if it is freshly cooked and served hot. Drink bottled water rather than tap water. Wash fruit before eating. Agadir has fewer stomach issues reported than Marrakech, likely due to its modern infrastructure.',
  },
  {
    question: 'Do I need a rental car in Agadir?',
    answer: 'Not for the city itself, where taxis are cheap and the main attractions are walkable along the promenade. However, a rental car is highly recommended for day trips to Paradise Valley, Taroudant, Tiznit, Tafraoute, and Souss Massa National Park. Driving in the Agadir region is straightforward with good roads and clear signage. Book in advance during peak season as availability can be limited.',
  },
  {
    question: 'What should I buy in Agadir?',
    answer: 'Argan oil (culinary and cosmetic) is the signature purchase - buy from cooperatives for guaranteed quality. Souk El Had offers excellent prices on spices (saffron, ras el hanout, cumin), Amazigh silver jewelry from Tiznit, leather goods, ceramics, and textiles. Amlou (argan, almond, and honey spread) is a unique local delicacy. Saffron from Taliouine, sold in the souk, is among the best in the world at a fraction of European prices.',
  },
];

/* =====================================================================
   DATA: RELATED PAGES
   ===================================================================== */

const relatedPages = [
  { href: '/marrakech', title: 'Marrakech City Guide', description: 'Morocco\'s most iconic city: souks, palaces, Jemaa el-Fnaa, and the Red City magic.', icon: Landmark },
  { href: '/essaouira', title: 'Essaouira Guide', description: 'Bohemian coastal charm, fresh seafood, and Atlantic breezes just 3 hours north.', icon: Globe },
  { href: '/beaches', title: 'Morocco Beaches Guide', description: 'The complete guide to Morocco\'s Atlantic and Mediterranean coastline.', icon: Waves },
  { href: '/water-sports', title: 'Water Sports Guide', description: 'Surfing, kitesurfing, diving, and water adventures across Morocco.', icon: Waves },
  { href: '/argan-oil', title: 'Argan Oil Guide', description: 'Everything about Morocco\'s liquid gold: production, buying, and cooperatives.', icon: Leaf },
  { href: '/golf', title: 'Morocco Golf Guide', description: 'World-class golf courses from Agadir to Marrakech to Rabat.', icon: Trophy },
  { href: '/family', title: 'Family Travel Guide', description: 'Planning the perfect family holiday in Morocco with children.', icon: Users },
  { href: '/day-trips', title: 'Day Trips from Agadir', description: 'Paradise Valley, Taroudant, Tiznit, Tafraoute, and more.', icon: Compass },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function AgadirPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Agadir',
    alternateName: 'Morocco\'s Beach Capital',
    description:
      'Agadir is Morocco\'s premier beach and resort city, offering 10km of golden sand, world-class surfing in Taghazout, argan oil country, championship golf, and a gateway to the Anti-Atlas mountains and Souss-Massa region.',
    url: 'https://moroccoguide.com/agadir',
    touristType: ['Beach Lovers', 'Surfers', 'Golfers', 'Families', 'Nature Enthusiasts', 'Water Sports'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.4278,
      longitude: -9.5981,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Agadir Beach' },
      { '@type': 'TouristAttraction', name: 'Taghazout Surf Village' },
      { '@type': 'TouristAttraction', name: 'Souk El Had' },
      { '@type': 'TouristAttraction', name: 'Agadir Oufella' },
      { '@type': 'TouristAttraction', name: 'Paradise Valley' },
      { '@type': 'TouristAttraction', name: 'Crocoparc' },
      { '@type': 'TouristAttraction', name: 'Marina d\'Agadir' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =================================================================
          HERO SECTION
          ================================================================= */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-agadir.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Agadir</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Agadir
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Premier Beach &amp; Resort Destination
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Ten kilometers of golden sand, year-round sunshine, world-class surfing in Taghazout,
            argan oil country, and a gateway to the dramatic Anti-Atlas mountains. Agadir is where
            Morocco meets the Atlantic &mdash; and the living is effortlessly good.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Waves className="w-3.5 h-3.5 mr-1.5" /> 10km Beach</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Sun className="w-3.5 h-3.5 mr-1.5" /> 300+ Sunny Days</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Compass className="w-3.5 h-3.5 mr-1.5" /> Surf Capital</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Leaf className="w-3.5 h-3.5 mr-1.5" /> Argan Country</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* =================================================================
          INTRODUCTION / OVERVIEW
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Reborn from the Rubble: Morocco&apos;s Sunshine City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              On February 29, 1960, a devastating earthquake measuring 5.7 on the Richter scale struck
              Agadir, destroying over 90% of the city and claiming an estimated 15,000 lives in just
              15 seconds. It remains one of the deadliest earthquakes in African history. The old city,
              including the historic kasbah and medina perched on the hillside, was obliterated beyond
              repair. King Mohammed V declared that Agadir would be rebuilt, and from the rubble rose
              an entirely new city &mdash; modern, planned, and forward-looking.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Today, Agadir is Morocco&apos;s largest seaside resort and the capital of the Souss-Massa
              region. With over 300 days of sunshine per year and a 10-kilometer crescent of golden
              sand lapped by the Atlantic, it draws millions of visitors seeking sun, surf, and
              relaxation. The city feels unlike anywhere else in Morocco: wide boulevards, modern
              architecture, beachfront promenades, and an atmosphere more reminiscent of a
              Mediterranean resort than a North African medina town.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              But Agadir is far more than just a beach. To the north, the legendary surf village of
              Taghazout attracts wave riders from around the world. Inland, argan forests shelter
              the cooperatives where Amazigh women produce Morocco&apos;s liquid gold. Paradise Valley
              offers natural swimming pools in a palm-filled canyon. And the Anti-Atlas mountains
              harbor hidden valleys, ancient villages, and landscapes that look like they belong
              on another planet.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Whether you are here for a week of surfing, a family beach holiday, a golf getaway,
              or as a base for exploring Morocco&apos;s stunning southwest, Agadir delivers sunshine,
              warmth, and a pace of life that makes the rest of the world feel very far away. This
              guide covers everything you need to plan the perfect Agadir trip.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================
          QUICK FACTS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickFacts.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-4 text-center">
                  <FactIcon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)] mb-1">{fact.label}</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          ESSENTIAL TIPS
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Agadir Essentials: Know Before You Go
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Practical tips to help you make the most of Morocco&apos;s sunshine city from
            the moment you arrive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <TipIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          BEACHES
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Waves className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Beaches &amp; Coastal Escapes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From the golden crescent of Agadir Bay to wild surf breaks and dramatic
            rock arches, the Souss coast has a beach for every mood.
          </p>

          <div className="space-y-6">
            {beaches.map((beach, index) => (
              <div
                key={beach.name}
                className="card-moroccan p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {beach.name}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {beach.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm mb-3">
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {beach.distance}
                      </span>
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <Star className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {beach.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <Heart className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {beach.bestFor}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">{beach.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fishing Heritage Visual ── */}
      <div className="container-morocco py-12">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/hero-fishing-morocco.webp"
            alt="Traditional Moroccan fishing boats in a harbor with colorful painted hulls and nets drying in the sun"
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <p className="text-sm text-[var(--text-muted)] mt-3 text-center">
            Agadir is Morocco's largest fishing port -- the daily catch fuels the city's legendary seafood restaurants
          </p>
        </div>
      </div>

      {/* =================================================================
          SURFING CAPITAL
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Surfing Capital of Morocco
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-4 max-w-2xl">
            The Agadir-Taghazout coastline is one of the world&apos;s premier surf destinations,
            with consistent Atlantic swells, warm water by European standards, and breaks
            for every level from first-time beginners to charging professionals.
          </p>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            The surf season runs from September to April, with the biggest swells arriving
            November through February. Summer offers smaller, gentler waves ideal for learning.
            Water temperature ranges from 17 to 22 degrees Celsius; a 3/2mm wetsuit is standard
            for winter sessions. Board rental costs 100-200 MAD per day at most surf shops.
          </p>

          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            Top Surf Spots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {surfSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6 group">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {spot.name}
                  </h4>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    spot.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                    spot.level === 'Intermediate-Advanced' ? 'bg-orange-100 text-orange-700' :
                    spot.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {spot.level}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">{spot.type}</p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                  {spot.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {spot.bestSeason}
                  </span>
                  <span className="flex items-center gap-1">
                    <Waves className="w-3 h-3" /> {spot.bestTide}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            Surf Schools &amp; Camps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surfSchools.map((school) => (
              <div key={school.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {school.name}
                  </h4>
                  <span className="text-sm font-semibold text-[var(--color-accent)]">{school.price}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-2">
                  <MapPin className="w-3 h-3 inline mr-1" />{school.location}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {school.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          ATTRACTIONS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top Attractions in Agadir
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Beyond the beach, Agadir offers ancient ruins, vibrant markets, a crocodile park,
            and a beautiful marina and promenade.
          </p>

          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="tag bg-white/90 text-[var(--text-primary)] text-xs font-semibold backdrop-blur-sm">
                        {attraction.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {attraction.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                        <span>{attraction.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Ticket className="w-4 h-4 text-[var(--color-accent)]" />
                        <span>{attraction.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Star className="w-4 h-4 text-[var(--color-gold)]" />
                        <span>{attraction.rating} / 5</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">{attraction.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE TO EAT
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Eat in Agadir
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From port-fresh seafood grilled over charcoal to refined marina dining, Agadir&apos;s
            food scene is driven by the ocean and the abundance of the Souss Valley.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {restaurant.name}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)]">{restaurant.cuisine}</p>
                  </div>
                  <span className="text-sm font-bold text-[var(--text-primary)]">{restaurant.price}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  <MapPin className="w-3 h-3 inline mr-1" />{restaurant.location}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {restaurant.description}
                </p>
                <p className="text-xs font-semibold text-[var(--color-accent)]">
                  <DollarSign className="w-3 h-3 inline mr-1" />{restaurant.priceRange}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE TO STAY
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Stay in Agadir
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From five-star beachfront resorts to budget surf hostels in Taghazout, Agadir
            has accommodation for every style and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodation.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    hotel.category === 'Luxury' ? 'bg-amber-100 text-amber-700' :
                    hotel.category === 'Boutique' ? 'bg-purple-100 text-purple-700' :
                    hotel.category === 'Mid-Range All-Inclusive' ? 'bg-blue-100 text-blue-700' :
                    hotel.category === 'Mid-Range' ? 'bg-sky-100 text-sky-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {hotel.category}
                  </span>
                  <span className="text-sm font-bold text-[var(--color-accent)]">{hotel.price}</span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {hotel.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {hotel.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {hotel.features.map((feature) => (
                    <span key={feature} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-1 rounded-md">
                      <CheckCircle className="w-3 h-3 inline mr-1 text-green-600" />{feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          DAY TRIPS
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Car className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day Trips from Agadir
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Agadir is the perfect base for exploring the Souss-Massa region: natural swimming pools,
            walled cities, silver workshops, painted rocks, and world-class birdwatching.
          </p>

          <div className="space-y-6">
            {dayTrips.map((trip) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] flex-shrink-0">
                      <TripIcon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {trip.name}
                        </h3>
                        <span className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                          <Navigation className="w-3.5 h-3.5" /> {trip.distance}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {trip.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {trip.highlights.map((highlight) => (
                          <span key={highlight} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2.5 py-1 rounded-md">
                            <CheckCircle className="w-3 h-3 inline mr-1 text-green-600" />{highlight}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[var(--color-accent)]" /> {trip.bestTime}</span>
                        <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> {trip.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          ARGAN OIL EXPERIENCE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              The Argan Oil Experience
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            The Souss-Massa region around Agadir is the global heartland of argan oil production.
            Visiting a women&apos;s cooperative is one of the most meaningful experiences in Morocco.
          </p>

          <div className="card-moroccan p-6 lg:p-8 mb-8">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Understanding Argan Oil
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {arganInfo.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {arganInfo.cooperatives.map((coop) => (
              <div key={coop.name} className="card-moroccan p-6">
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {coop.name}
                </h4>
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  <MapPin className="w-3 h-3 inline mr-1" />{coop.location}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {coop.description}
                </p>
                <p className="text-xs font-semibold text-[var(--color-accent)]">
                  <DollarSign className="w-3 h-3 inline mr-1" />{coop.prices}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 lg:p-8 mb-8">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Goats in Argan Trees
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {arganInfo.goatsInTrees}
            </p>
          </div>

          <div className="card-moroccan p-6 lg:p-8">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Buying Tips: How to Spot Genuine Argan Oil
            </h3>
            <ul className="space-y-3">
              {arganInfo.buyingTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =================================================================
          GOLF
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Golf in Agadir
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            With year-round sunshine, ocean views, and green fees a fraction of European prices,
            Agadir is one of North Africa&apos;s premier golf destinations. Four quality courses
            are within easy reach of the city.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {golfCourses.map((course) => (
              <div key={course.name} className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {course.name}
                  </h3>
                  <span className="text-sm font-bold text-[var(--color-accent)]">{course.greenFee}</span>
                </div>
                <div className="flex flex-wrap gap-3 mb-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <CircleDot className="w-3 h-3" /> {course.holes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Palette className="w-3 h-3" /> {course.designer}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          FAMILY ACTIVITIES
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Family Activities
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Agadir is one of Morocco&apos;s most family-friendly destinations, with activities
            ranging from crocodile parks to camel rides on the beach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyActivities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <ActivityIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {activity.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-[var(--text-muted)]">
                    <span><Users className="w-3 h-3 inline mr-1" />Ages: {activity.ageRange}</span>
                    <span><DollarSign className="w-3 h-3 inline mr-1" />{activity.price}</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          GETTING THERE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Plane className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Getting to Agadir
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Agadir is well-connected by air from Europe and domestically by bus and road
            from major Moroccan cities.
          </p>

          <div className="space-y-6">
            {gettingThere.map((mode) => {
              const ModeIcon = mode.icon;
              return (
                <div key={mode.mode} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <ModeIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {mode.mode}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {mode.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          PRACTICAL INFO & SAFETY
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Practical Information &amp; Safety
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Essential practical information for a smooth and safe visit to Agadir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <SectionIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          FAQ
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <HelpCircle className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Answers to the most common questions travelers ask about visiting Agadir.
          </p>

          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          PHOTO GALLERY
          ================================================================= */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 mx-auto mb-4" style={{ color: '#A0522D' }} />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1814' }}>
              Agadir &amp; Nearby Beaches
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1A1814', opacity: 0.7 }}>
              Sun-drenched coastline, dramatic rock arches, and the wild beauty of southern
              Morocco&apos;s Atlantic shore await just beyond the city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: '/images/hero-legzira.webp', alt: 'Legzira Beach near Agadir with dramatic red stone arches over the Atlantic Ocean' },
              { src: '/images/hero-legzira-arch.webp', alt: 'Close-up of the iconic natural rock arch formation at Legzira Beach, southern Morocco' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[16/9] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          RELATED PAGES
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-8 text-center">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page) => {
              const PageIcon = page.icon;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <PageIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                    {page.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">{page.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] mt-3 font-medium">
                    Read guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
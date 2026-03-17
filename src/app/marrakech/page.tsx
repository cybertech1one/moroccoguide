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
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Marrakech Travel Guide 2025-2026 | The Red City | Top Attractions, Riads, Souks & More',
  description:
    'The ultimate Marrakech travel guide. Explore Jemaa el-Fnaa, Bahia Palace, Majorelle Garden, souks, and riads. Best restaurants, neighborhoods, day trips to the Atlas Mountains, nightlife, budget tips, safety advice, and a complete 3-day itinerary for Morocco\'s most iconic city.',
  keywords: [
    'Marrakech travel guide',
    'Marrakech Morocco',
    'Jemaa el-Fnaa',
    'Marrakech souks',
    'Marrakech riads',
    'Bahia Palace',
    'Majorelle Garden',
    'Koutoubia Mosque',
    'Ben Youssef Medersa',
    'Saadian Tombs',
    'Marrakech medina',
    'Marrakech restaurants',
    'Marrakech day trips',
    'Atlas Mountains from Marrakech',
    'Marrakech nightlife',
    'Marrakech budget guide',
    'Marrakech safety tips',
    'Marrakech shopping guide',
    'Marrakech neighborhoods',
    'best time to visit Marrakech',
    'Marrakech itinerary',
    'Marrakech food guide',
    'Marrakech cooking classes',
    'Essaouira day trip',
    'Ourika Valley',
    'Ouzoud Falls',
    'Marrakech by night',
    'haggling in Marrakech',
    'Gueliz Marrakech',
    'Marrakech riad guide',
  ],
  openGraph: {
    title: 'Marrakech Travel Guide 2025-2026 | The Complete Red City Guide',
    description:
      'Everything you need for Marrakech: Jemaa el-Fnaa, palaces, souks, riads, food, nightlife, day trips, and a perfect 3-day itinerary through Morocco\'s most magical city.',
    url: 'https://moroccoguide.com/marrakech',
    type: 'article',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech medina with Koutoubia Mosque at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marrakech Travel Guide 2025-2026 | The Red City',
    description:
      'Complete guide to Marrakech: Jemaa el-Fnaa, Bahia Palace, Majorelle Garden, souks, riads, food, nightlife, Atlas day trips, budget tips, and a 3-day itinerary.',
    images: ['/images/hero-marrakech.webp'],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/marrakech',
  },
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  { label: 'Population', value: '1.3 million', icon: Users },
  { label: 'Founded', value: '1070 AD', icon: BookOpen },
  { label: 'Elevation', value: '466 meters', icon: Mountain },
  { label: 'Airport', value: 'RAK (Menara)', icon: Globe },
  { label: 'Language', value: 'Arabic, French, Berber', icon: MessageSquare },
  { label: 'Currency', value: 'Moroccan Dirham (MAD)', icon: DollarSign },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
  { label: 'Best Months', value: 'March-May, Oct-Nov', icon: Calendar },
];

/* =====================================================================
   DATA: MARRAKECH ESSENTIALS
   ===================================================================== */

const essentialTips = [
  {
    icon: Info,
    title: 'Dress Code',
    description: 'Marrakech is more liberal than rural Morocco but modesty is appreciated, especially in the medina. Shoulders and knees covered is the safest approach. Swimwear is fine at hotel pools only.',
  },
  {
    icon: HandCoins,
    title: 'Tipping Culture',
    description: 'Tipping is expected and appreciated. Restaurant waiters: 10-15%. Riad staff: 20-50 MAD/day. Tour guides: 100-200 MAD. Porters: 10-20 MAD. Small tips for helpfulness are part of daily life.',
  },
  {
    icon: Globe,
    title: 'Connectivity',
    description: 'Buy a local SIM card at the airport (Maroc Telecom or Orange) for about 30 MAD with data. Wi-Fi is available in most riads and restaurants. Signal in the deep medina can be patchy.',
  },
  {
    icon: Sun,
    title: 'Sun Protection',
    description: 'Marrakech receives over 300 days of sunshine. SPF 50 sunscreen, a hat, and sunglasses are essential year-round. The UV index regularly exceeds 10 in summer.',
  },
  {
    icon: Coffee,
    title: 'Mint Tea Etiquette',
    description: 'Moroccan mint tea is served everywhere and refusing it can be seen as rude. It is extremely sweet. Holding the glass by the rim signals you would like a refill; placing your hand over the glass means you are done.',
  },
  {
    icon: Calendar,
    title: 'Ramadan Awareness',
    description: 'During Ramadan, many restaurants close during daylight hours. Eating, drinking, or smoking in public during fasting hours is considered disrespectful. Evenings become festive with special foods and late-night activity.',
  },
];

/* =====================================================================
   DATA: TOP ATTRACTIONS
   ===================================================================== */

const attractions = [
  {
    name: 'Jemaa el-Fnaa',
    description:
      'The beating heart of Marrakech and one of the busiest squares in Africa. By day, orange juice vendors, henna artists, and snake charmers compete for attention. By sunset, over a hundred food stalls erupt in clouds of charcoal smoke, serving everything from lamb kebabs to snail soup. By night, Gnaoua musicians, storytellers, and acrobats transform the square into the greatest open-air spectacle on Earth. UNESCO recognized the entire square as a Masterpiece of the Oral and Intangible Heritage of Humanity.',
    image: '/images/hero-marrakech.webp',
    type: 'UNESCO Heritage',
    rating: 4.8,
    hours: 'Open 24 hours (food stalls 6 PM - midnight)',
    price: 'Free',
    tip: 'Visit at sunset when the energy is electric. Avoid the overpriced rooftop cafes ringing the square and instead eat at the food stalls where locals eat. Stall 1 and Stall 14 are legendary.',
  },
  {
    name: 'Koutoubia Mosque',
    description:
      'The largest mosque in Marrakech and the city\'s defining landmark. Its 77-meter minaret has dominated the skyline since the 12th century, visible from nearly every point in the medina. The minaret\'s perfect proportions inspired the Hassan Tower in Rabat and the Giralda in Seville. While non-Muslims cannot enter, the surrounding gardens are a peaceful retreat from the medina chaos, particularly beautiful at sunset when the sandstone glows amber and gold.',
    image: '/images/hero-marrakech.webp',
    type: 'Historic Mosque',
    rating: 4.7,
    hours: 'Gardens open daily; mosque interior closed to non-Muslims',
    price: 'Free (gardens)',
    tip: 'The best photographs are taken from the gardens at golden hour. Walk the full perimeter for different angles. The rose gardens on the south side are particularly fragrant in spring.',
  },
  {
    name: 'Bahia Palace',
    description:
      'A masterpiece of Moroccan architecture built in the late 19th century for Grand Vizier Si Moussa. The name means "brilliance" and the palace delivers on its promise with eight hectares of intricate zellige tilework, carved cedarwood ceilings, painted stucco, and tranquil courtyards with fountains and citrus trees. Each room is more elaborately decorated than the last. The Grand Courtyard, with its Italian marble floor and soaring painted ceilings, is the undisputed highlight.',
    image: '/images/hero-marrakech.webp',
    type: 'Palace',
    rating: 4.7,
    hours: '9:00 AM - 5:00 PM daily',
    price: '70 MAD',
    tip: 'Arrive when the palace opens at 9 AM to photograph the courtyards without crowds. The afternoon light streaming through latticed windows creates magical patterns on the zellige floors.',
  },
  {
    name: 'Majorelle Garden & YSL Museum',
    description:
      'A botanical paradise created by French painter Jacques Majorelle in the 1920s and later restored by fashion designer Yves Saint Laurent. The garden is famous for its electric cobalt blue buildings, towering bamboo groves, bougainvillea cascades, and over 300 species of plants from five continents. The adjacent Musee Yves Saint Laurent Marrakech showcases the designer\'s haute couture masterpieces in a striking terracotta building that is itself an architectural landmark.',
    image: '/images/hero-marrakech.webp',
    type: 'Garden & Museum',
    rating: 4.8,
    hours: '8:00 AM - 6:30 PM (garden); 10:00 AM - 6:00 PM (museum)',
    price: '150 MAD (garden) + 100 MAD (museum)',
    tip: 'Buy tickets online to skip the queue, which can stretch for 30 minutes in peak season. Visit early morning when the light is soft and the paths are quiet. The cactus garden is photographic gold.',
  },
  {
    name: 'Ben Youssef Medersa',
    description:
      'The largest and most important theological college in Morocco, founded in the 14th century and rebuilt in the 16th century by the Saadian dynasty. For over 400 years, 900 students lived and studied in its tiny dormitory cells while praying in its breathtaking central courtyard. Every surface is covered in carved stucco, cedarwood latticework, and zellige mosaics of staggering complexity. The reflection pool in the courtyard creates perfect symmetrical photographs.',
    image: '/images/hero-marrakech.webp',
    type: 'Historic Medersa',
    rating: 4.9,
    hours: '9:00 AM - 6:00 PM daily',
    price: '50 MAD',
    tip: 'This is the most photogenic building in Marrakech. Visit early morning for the best light and fewest visitors. Look up constantly as the carved cedarwood ceilings are some of the finest in Morocco.',
  },
  {
    name: 'Saadian Tombs',
    description:
      'Hidden behind a small passage near the Kasbah Mosque, these 16th-century royal tombs were sealed by the Alaouite dynasty and only rediscovered by aerial photography in 1917. The main chamber, the Hall of Twelve Columns, features Italian Carrara marble columns and an extraordinarily ornate honeycomb muqarnas ceiling. Sultan Ahmad al-Mansour and over 60 members of the Saadian dynasty rest here in rooms of staggering beauty.',
    image: '/images/hero-marrakech.webp',
    type: 'Royal Tombs',
    rating: 4.6,
    hours: '9:00 AM - 5:00 PM daily',
    price: '70 MAD',
    tip: 'The narrow entrance passage creates bottleneck queues in the afternoon. Arrive before 10 AM or after 4 PM. The garden area with the less ornate graves is surprisingly peaceful.',
  },
  {
    name: 'El Badi Palace',
    description:
      'Once called "The Incomparable," this 16th-century Saadian palace was built to celebrate the victory at the Battle of the Three Kings. Sultan Ahmad al-Mansour spared no expense: Italian marble, Sudanese gold, Irish granite, and Indian onyx adorned 360 rooms. Today, only the massive sunken gardens, towering pisé walls, and underground dungeons remain, but the sheer scale of the ruins and the resident storks nesting on the walls create an atmosphere of faded grandeur that sparks the imagination.',
    image: '/images/hero-marrakech.webp',
    type: 'Palace Ruins',
    rating: 4.5,
    hours: '9:00 AM - 5:00 PM daily',
    price: '70 MAD',
    tip: 'Climb the northeast tower for panoramic views of the medina and Atlas Mountains. Visit in late afternoon when the warm light paints the red walls and storks return to their nests. The underground prison is fascinatingly eerie.',
  },
];

/* =====================================================================
   DATA: NEIGHBORHOODS
   ===================================================================== */

const neighborhoods = [
  {
    name: 'Medina (Old City)',
    icon: Landmark,
    character: 'Ancient, chaotic, magical',
    description:
      'The walled medieval heart of Marrakech and a UNESCO World Heritage Site. A labyrinth of over 30,000 alleyways where the air smells of cedar, mint, and leather. This is where you find the souks, the riads, the palaces, and the essence of everything that makes Marrakech unforgettable. Getting lost is inevitable, expected, and part of the experience.',
    highlights: ['Jemaa el-Fnaa', 'Souks', 'Ben Youssef Medersa', 'Traditional riads', 'Street food'],
    bestFor: 'First-time visitors, culture seekers, photographers',
    stayHere: 'Stay in a riad for the authentic Marrakech experience. You will wake to birdsong, breakfast on a rooftop terrace, and step out your door into centuries of history.',
  },
  {
    name: 'Gueliz (Ville Nouvelle)',
    icon: Building,
    character: 'Modern, cosmopolitan, relaxed',
    description:
      'The French-built new town stretching along Avenue Mohammed V. Tree-lined boulevards, international restaurants, boutique shopping, art galleries, and a completely different energy from the medina. This is where Marrakech\'s creative class works, eats, and socializes. It feels like a different city entirely.',
    highlights: ['Majorelle Garden', 'Avenue Mohammed V', 'Art galleries', 'International restaurants', 'Boutique shopping'],
    bestFor: 'Modern travelers, foodies, those who prefer contemporary comfort',
    stayHere: 'Hotels here offer Western-style amenities with easy access to both Gueliz attractions and the medina by a short taxi ride.',
  },
  {
    name: 'Hivernage',
    icon: Star,
    character: 'Upscale, tranquil, glamorous',
    description:
      'Marrakech\'s luxury district, home to five-star hotels, elegant restaurants, and the city\'s best nightlife. Broad tree-lined avenues, manicured gardens, and a peaceful atmosphere that contrasts sharply with the medina\'s intensity. The Royal Theatre and Palais des Congres anchor the neighborhood.',
    highlights: ['Five-star hotels', 'Upscale dining', 'Nightclubs', 'Royal Theatre', 'Spa resorts'],
    bestFor: 'Luxury travelers, couples, nightlife enthusiasts',
    stayHere: 'Choose Hivernage if you want pool-side luxury, world-class spas, and a calm base with medina access by taxi.',
  },
  {
    name: 'Mellah (Jewish Quarter)',
    icon: BookOpen,
    character: 'Historic, authentic, under-the-radar',
    description:
      'Founded in 1558, the Mellah was once home to Marrakech\'s thriving Jewish community. The architecture is distinctive: balconied houses with outward-facing windows, unlike the inward-facing medina homes. Today it hosts the Lazama Synagogue, the Miaara Jewish Cemetery (the largest in Morocco), and the vibrant Mellah Market where locals buy spices, preserved lemons, and dried fruits at local prices.',
    highlights: ['Lazama Synagogue', 'Jewish Cemetery', 'Spice Market', 'Bahia Palace (nearby)', 'Local food stalls'],
    bestFor: 'History buffs, budget travelers, those seeking authentic local life',
    stayHere: 'Fewer tourists, lower riad prices, and genuine neighborhood atmosphere. Walking distance to both Bahia Palace and Jemaa el-Fnaa.',
  },
  {
    name: 'Kasbah',
    icon: Shield,
    character: 'Regal, quiet, historic',
    description:
      'The royal quarter surrounding the current Royal Palace. Quieter and more spacious than the dense northern medina, with wider streets, the Saadian Tombs, El Badi Palace, and the imposing Bab Agnaou gate. The neighborhood has a stately, dignified feel with some of the medina\'s finest riads tucked into its residential streets.',
    highlights: ['Saadian Tombs', 'El Badi Palace', 'Bab Agnaou', 'Royal Palace (exterior)', 'Kasbah Mosque'],
    bestFor: 'History lovers, those wanting a calmer medina base, architecture fans',
    stayHere: 'Upscale riads in a quieter setting, steps from major monuments but away from the souk crowds.',
  },
];

/* =====================================================================
   DATA: SOUK SHOPPING GUIDE
   ===================================================================== */

const soukSections = [
  {
    name: 'Souk Semmarine',
    specialty: 'Textiles, clothing, slippers',
    description: 'The main artery of the souk system, a covered market stretching north from Jemaa el-Fnaa. The widest and most touristy of the souks, lined with shops selling kaftans, leather babouche slippers, scarves, and pashminas. Prices start high here; this is where your haggling skills are tested first.',
  },
  {
    name: 'Souk el-Attarine',
    specialty: 'Spices, perfumes, traditional cosmetics',
    description: 'The spice souk fills the air with cumin, saffron, paprika, and ras el hanout. Stalls overflow with pyramids of colorful powdered spices, argan oil, black soap, rose water, and kohl eyeliner. The fragrance is intoxicating. Saffron here is roughly one-tenth the price you pay in Europe.',
  },
  {
    name: 'Souk des Teinturiers',
    specialty: 'Dyed wool and fabrics',
    description: 'The dyers\' souk is one of Marrakech\'s most photogenic spots. Skeins of freshly dyed wool in vivid crimson, saffron yellow, and cobalt blue hang from wooden poles high above the narrow alley, dripping color onto the stones below. Arrive in the morning when the dyers are actively working.',
  },
  {
    name: 'Souk Haddadine',
    specialty: 'Metalwork and lanterns',
    description: 'The blacksmiths\' souk rings with the sound of hammers on metal. Artisans craft the iconic Moroccan lanterns, candelabras, teapots, and ornate door knockers by hand. Watch craftsmen punch intricate star patterns into brass and copper sheets. The lanterns here cost 50-300 MAD versus 150-800 MAD in tourist shops.',
  },
  {
    name: 'Souk Chouari',
    specialty: 'Woodwork and carpentry',
    description: 'The carpenters\' souk where artisans carve cedarwood boxes, chess sets, picture frames, and furniture using techniques unchanged for centuries. The cedar scent is wonderful. Thuya wood items from Essaouira are also sold here at lower prices than the coastal city.',
  },
  {
    name: 'Souk Cherratine',
    specialty: 'Leather goods',
    description: 'The leatherworkers\' souk near the tanneries, selling bags, belts, wallets, poufs, and jackets. The quality varies enormously: check stitching, hardware, and smell. Good leather should not smell of chemicals. The famous leather poufs start at 150 MAD unstuffed.',
  },
  {
    name: 'Souk des Tapis (Criee Berbere)',
    specialty: 'Carpets and rugs',
    description: 'The carpet souk is a world unto itself. Hundreds of Berber rugs, kilims, and Beni Ourain carpets hang from every surface. Buying a carpet is a ritual involving mint tea, extensive browsing, and theatrical negotiation. A quality handmade Berber rug starts around 1,500 MAD and can reach 15,000 MAD for museum-quality pieces.',
  },
];

const hagglingTips = [
  'Start at roughly one-third of the asking price and meet in the middle.',
  'Never show excessive excitement about an item. Admire casually, then ask the price.',
  'Be prepared to walk away. The vendor will often call you back with a lower price.',
  'Compare prices at several stalls before committing to a purchase.',
  'Haggling is expected and enjoyed. Smile, be friendly, and treat it as a social interaction.',
  'Have small bills ready. Paying with large notes weakens your negotiating position.',
  'Morning and late afternoon are the best times. Vendors are more flexible at the start and end of the day.',
  'Fixed-price cooperatives (Ensemble Artisanal near Bab Nkob) let you understand fair market prices before entering the souks.',
];

/* =====================================================================
   DATA: FOOD GUIDE
   ===================================================================== */

const restaurants = [
  {
    name: 'Nomad',
    cuisine: 'Modern Moroccan',
    price: '$$',
    location: 'Medina (Souk area)',
    description: 'A rooftop sensation serving creative Moroccan cuisine with panoramic medina views. The lamb tangia, cauliflower steak, and date milkshake are legendary. Book ahead or arrive at opening.',
  },
  {
    name: 'Le Jardin',
    cuisine: 'Moroccan-Mediterranean',
    price: '$$',
    location: 'Medina',
    description: 'Hidden in a lush garden courtyard deep in the medina, this secret oasis serves excellent salads, grilled fish, and pastilla. The setting alone is worth the visit. Instagram favorite.',
  },
  {
    name: 'Cafe des Epices',
    cuisine: 'Moroccan Cafe',
    price: '$',
    location: 'Place Rahba Kedima (Spice Square)',
    description: 'The original souk rooftop cafe, perfect for people-watching over the Spice Square. Simple but delicious food: kefta sandwiches, avocado smoothies, and the best freshly squeezed juices in the medina.',
  },
  {
    name: 'Al Fassia',
    cuisine: 'Traditional Moroccan',
    price: '$$$',
    location: 'Gueliz',
    description: 'Run entirely by women, Al Fassia has served refined Moroccan cuisine since 1987. The slow-cooked lamb with prunes and almonds, the pastilla, and the seven-vegetable couscous are exceptional. The gold standard of traditional dining.',
  },
  {
    name: 'KABANA',
    cuisine: 'International Rooftop',
    price: '$$$',
    location: 'Medina Rooftop',
    description: 'Marrakech\'s most stylish rooftop bar and restaurant. Panoramic views of the Koutoubia Mosque, creative cocktails, sushi, and Mediterranean plates. Reserve the sunset terrace for an unforgettable evening.',
  },
  {
    name: 'Mechoui Alley',
    cuisine: 'Street Food',
    price: '$',
    location: 'Near Jemaa el-Fnaa',
    description: 'A narrow alley where whole lambs slow-roast in underground clay ovens since dawn. Point at the cut you want and the butcher pulls it apart by hand. Served with cumin salt and fresh bread. Arrive by noon before it sells out.',
  },
];

const streetFoodAtJemaa = [
  { item: 'Grilled lamb kebabs & kefta', price: '30-50 MAD', stall: 'Stalls 1, 14, 31' },
  { item: 'Harira soup (chickpea & lentil)', price: '10-15 MAD', stall: 'Corner stalls near Cafe de France' },
  { item: 'Fresh orange juice', price: '5-10 MAD', stall: 'Rows of identical juice stalls' },
  { item: 'Snail soup (babouche)', price: '10-15 MAD', stall: 'Dedicated snail carts' },
  { item: 'Sheep head (tete)', price: '20-40 MAD', stall: 'South side food stalls' },
  { item: 'Fried fish sandwiches', price: '20-30 MAD', stall: 'Stalls near the entrance' },
  { item: 'Msemen & baghrir pancakes', price: '5-10 MAD', stall: 'Morning vendors around the square' },
  { item: 'Dried fruit & nut mixes', price: '30-80 MAD/bag', stall: 'Northern edge stalls' },
];

const cookingClasses = [
  {
    name: 'La Maison Arabe',
    description: 'The original and most prestigious cooking school in Marrakech, founded in 1946. Half-day workshops include a market tour, hands-on cooking of three courses, and dining at your creation.',
    price: 'From 800 MAD',
    duration: '4-5 hours',
  },
  {
    name: 'Amal Women\'s Training Center',
    description: 'A social enterprise training disadvantaged women in culinary arts. Your class fee directly supports their empowerment program. Intimate classes with incredible personal stories.',
    price: 'From 350 MAD',
    duration: '3-4 hours',
  },
  {
    name: 'Souk Cuisine',
    description: 'Market-to-table experience beginning with ingredient sourcing in the souks, followed by cooking traditional dishes in a restored riad kitchen. Small groups ensure personal attention.',
    price: 'From 500 MAD',
    duration: '4 hours',
  },
];

/* =====================================================================
   DATA: WHERE TO STAY
   ===================================================================== */

const accommodationsByBudget = [
  {
    category: 'Budget Riads',
    priceRange: '200-500 MAD/night',
    icon: Bed,
    options: [
      { name: 'Riad Laayoun', area: 'Northern Medina', highlight: 'Stunning rooftop terrace with Koutoubia views. Simple rooms but exceptional hospitality and homemade breakfast.' },
      { name: 'Riad Dar Zaman', area: 'Medina', highlight: 'Beautifully restored with a plunge pool. Remarkably affordable given the quality of the zellige work and courtyard.' },
      { name: 'Equity Point Hostel', area: 'Medina', highlight: 'Best hostel in the medina with dorms from 100 MAD. Rooftop pool, organized tours, and social atmosphere.' },
    ],
  },
  {
    category: 'Mid-Range Riads',
    priceRange: '500-1,500 MAD/night',
    icon: Heart,
    options: [
      { name: 'Riad Yasmine', area: 'Medina', highlight: 'Instagram-famous green-tiled plunge pool, gorgeous interiors, and one of the best rooftop breakfasts in the city.' },
      { name: 'Riad BE Marrakech', area: 'Medina', highlight: 'Boutique design riad blending Moroccan tradition with contemporary style. Exceptional service and cooking classes.' },
      { name: 'Riad Kniza', area: 'Medina', highlight: 'Five antique-filled suites, hammam, and a restaurant rated among the medina\'s finest. Intimate and sophisticated.' },
    ],
  },
  {
    category: 'Luxury Riads & Hotels',
    priceRange: '2,000-8,000+ MAD/night',
    icon: Sparkles,
    options: [
      { name: 'La Mamounia', area: 'Medina Edge', highlight: 'The legendary palace hotel where Churchill painted. Art deco meets Moroccan splendor across 17 acres of gardens, three restaurants, and a world-class spa.' },
      { name: 'Royal Mansour', area: 'Medina', highlight: 'Each accommodation is a private three-story riad with personal butler, rooftop terrace, and plunge pool. The most exclusive address in Morocco.' },
      { name: 'El Fenn', area: 'Medina', highlight: 'Boutique luxury with contemporary art collection, three pools, a renowned cocktail bar, and bohemian-chic design throughout.' },
    ],
  },
  {
    category: 'Gueliz Hotels',
    priceRange: '400-2,000 MAD/night',
    icon: Building,
    options: [
      { name: 'Radisson Blu', area: 'Gueliz', highlight: 'Modern four-star with pool, gym, and easy access to Gueliz dining. Comfortable and predictable in the best sense.' },
      { name: 'Hotel Dina', area: 'Gueliz', highlight: 'Clean budget option on Avenue Mohammed V with air conditioning, en-suite bathrooms, and a restaurant. Ideal for modern comfort at low prices.' },
      { name: '2Ciels Boutique Hotel', area: 'Gueliz', highlight: 'Design-forward boutique hotel with rooftop pool, excellent cocktails, and a young creative atmosphere.' },
    ],
  },
];

/* =====================================================================
   DATA: DAY TRIPS
   ===================================================================== */

const dayTrips = [
  {
    name: 'Atlas Mountains & Imlil Valley',
    icon: Mountain,
    distance: '60 km / 1.5 hours',
    duration: 'Full day',
    price: '300-800 MAD (transport + guide)',
    description:
      'Escape the heat into the High Atlas foothills. The Berber village of Imlil sits at 1,740 meters and serves as the base camp for Jebel Toubkal, North Africa\'s highest peak at 4,167 meters. Even without summit ambitions, a half-day hike through terraced walnut groves, past waterfalls, and into authentic Berber villages is transformative. Lunch in a village home is a highlight.',
    highlights: ['Berber village visits', 'Mountain hiking', 'Traditional lunch', 'Toubkal views', 'Waterfall walks'],
  },
  {
    name: 'Ourika Valley',
    icon: Leaf,
    distance: '35 km / 45 minutes',
    duration: 'Half to full day',
    price: '150-400 MAD',
    description:
      'The closest mountain escape from Marrakech. A lush river valley climbing into the Atlas foothills with terraced gardens, Berber settlements, and the Setti Fatma waterfalls at its head. Visit a saffron farm, explore an argan oil cooperative, and hike to the seven cascading waterfalls. The roadside restaurants serving tagine beside the rushing river are a Marrakchi tradition.',
    highlights: ['Setti Fatma waterfalls', 'Saffron farm', 'Argan oil cooperative', 'Riverside tagine', 'Berber markets (Monday)'],
  },
  {
    name: 'Essaouira',
    icon: Globe,
    distance: '175 km / 2.5 hours',
    price: '100-300 MAD (bus/shared transport)',
    duration: 'Full day or overnight',
    description:
      'A windswept Atlantic port city that is the antithesis of Marrakech: relaxed, bohemian, and breezy. Wander the blue-shuttered medina (another UNESCO site), watch fishing boats unload the catch, eat grilled sardines at the port, browse art galleries, and walk the vast sandy beach. Essaouira is a perfect contrast to Marrakech\'s intensity.',
    highlights: ['Port fish market', 'Medina walls', 'Beach & windsurfing', 'Thuya woodcraft', 'Live Gnaoua music'],
  },
  {
    name: 'Ouzoud Falls',
    icon: Sparkles,
    distance: '150 km / 2.5 hours',
    duration: 'Full day',
    price: '200-500 MAD',
    description:
      'Morocco\'s most spectacular waterfalls: three cascading tiers dropping 110 meters into a gorge of lush greenery. Rainbow mist catches the sunlight, Barbary macaques swing through the trees, and local guides lead you down to the plunge pool for a refreshing swim. The setting is breathtaking and the resident monkeys are endlessly entertaining.',
    highlights: ['110m triple waterfall', 'Barbary macaques', 'Swimming in the pools', 'Rainbow mist', 'Gorge hiking trails'],
  },
  {
    name: 'Ait Benhaddou',
    icon: Camera,
    distance: '185 km / 3 hours',
    duration: 'Full day',
    price: '300-700 MAD',
    description:
      'A UNESCO-listed fortified ksar (village) rising from the desert like a sandcastle. This is one of the best-preserved examples of traditional Moroccan earthen architecture and has starred in Gladiator, Game of Thrones, and Lawrence of Arabia. Cross the river on stepping stones, climb to the summit for Atlas Mountain panoramas, and explore the winding alleys of the old village.',
    highlights: ['UNESCO kasbah', 'Film location tours', 'Atlas panoramas', 'Traditional pisé architecture', 'Sunset views'],
  },
];

/* =====================================================================
   DATA: GETTING AROUND
   ===================================================================== */

const transportModes = [
  {
    mode: 'Petit Taxis (Red Taxis)',
    icon: Car,
    cost: '10-30 MAD within the city',
    description: 'Small red Mercedes sedans that hold up to three passengers. The cheapest and most convenient way to get between the medina and Gueliz or Hivernage. Drivers are required by law to use the meter but many "forget." Insist on the meter or agree on a price before getting in. A ride from Jemaa el-Fnaa to Majorelle Garden should cost 15-25 MAD.',
    tips: ['Always insist on the meter', 'Keep small bills ready', 'Agree on price before getting in if meter is "broken"', 'Maximum 3 passengers per taxi'],
  },
  {
    mode: 'Caleche (Horse-drawn Carriage)',
    icon: Navigation,
    cost: '150-300 MAD per hour',
    description: 'Romantic horse-drawn carriages that line up near Jemaa el-Fnaa and the Koutoubia Mosque. A lovely way to see the ramparts, the Menara Gardens, and the palmery. Fixed routes are available or negotiate a custom tour. Agree on the price and duration before departure. Evening rides along the illuminated walls are magical.',
    tips: ['Negotiate firmly before boarding', 'Standard rate is about 150 MAD/hour', 'Sunset ramparts tour is the classic route', 'Check the horse looks healthy and well-cared-for'],
  },
  {
    mode: 'Walking',
    icon: Footprints,
    cost: 'Free',
    description: 'The medina is best explored on foot. The alleyways are too narrow for cars and the discoveries around every corner are the entire point. Download the Maps.me offline map which covers the medina better than Google Maps. Getting lost is inevitable but Jemaa el-Fnaa is always signposted, so you can always find your way back to the center.',
    tips: ['Download Maps.me for offline navigation', 'Follow signs to Jemaa el-Fnaa when lost', 'Wear comfortable shoes on uneven surfaces', 'Stay on main paths after dark'],
  },
  {
    mode: 'Bus (ALSA)',
    icon: Map,
    cost: '4-5 MAD per ride',
    description: 'Marrakech\'s modern bus system connects the medina with Gueliz, the train station, and outlying areas. Clean, air-conditioned, and incredibly cheap. Line 1 runs the useful medina-to-Gueliz route. The bus stop near Jemaa el-Fnaa is at Place de Foucauld.',
    tips: ['Line 1: Medina to Gueliz (most useful)', 'Pay with cash or rechargeable card', 'Air-conditioned and modern fleet', 'Runs approximately 6 AM to 10 PM'],
  },
];

/* =====================================================================
   DATA: NIGHTLIFE
   ===================================================================== */

const nightlifeSpots = [
  {
    name: 'Cafe Arabe',
    type: 'Rooftop Bar & Restaurant',
    location: 'Medina',
    description: 'Elegant rooftop terrace with Italian-Moroccan cuisine and craft cocktails. The candlelit terrace overlooking the medina rooftops is perfect for a sophisticated evening out. Live music on weekends.',
  },
  {
    name: 'KABANA',
    type: 'Rooftop Lounge',
    location: 'Medina',
    description: 'Stylish rooftop with panoramic views, creative cocktails, and a DJ spinning chill beats as the sun sets behind the Koutoubia. The atmosphere shifts from mellow to lively as the evening progresses.',
  },
  {
    name: 'Barometre',
    type: 'Cocktail Bar',
    location: 'Gueliz',
    description: 'Marrakech\'s best craft cocktail bar, tucked away in Gueliz. Inventive drinks with Moroccan ingredients like saffron, orange blossom, and argan. Intimate atmosphere and knowledgeable bartenders.',
  },
  {
    name: 'Theatro',
    type: 'Nightclub',
    location: 'Hivernage (Es Saadi Hotel)',
    description: 'The city\'s most famous nightclub, set in a converted theatre with opulent decor. International DJs, a see-and-be-seen crowd, and a party that runs until dawn. Dress code enforced.',
  },
  {
    name: 'Le Comptoir Darna',
    type: 'Dinner & Show',
    location: 'Hivernage',
    description: 'A Marrakech institution combining fine Moroccan dining with live belly dancing and Gnaoua performances. The atmosphere is electric and theatrical. Reserve a table for the 9 PM show.',
  },
  {
    name: 'Jemaa el-Fnaa by Night',
    type: 'Cultural Experience',
    location: 'Medina',
    description: 'The square itself is Marrakech\'s greatest night out. Gnaoua musicians, storytelling circles, henna artists, and the chaos of a hundred food stalls under a canopy of smoke and light. Free, unforgettable, and utterly unique on Earth.',
  },
];

/* =====================================================================
   DATA: BEST TIME TO VISIT
   ===================================================================== */

const monthlyWeather = [
  { months: 'March - May', temp: '22-30C', rating: 5, icon: Sun, verdict: 'The ideal time to visit. Warm but not oppressive, gardens in full bloom, and comfortable for all-day medina exploration. April is peak perfection with occasional light rain refreshing the air.' },
  { months: 'October - November', temp: '20-28C', rating: 5, icon: Leaf, verdict: 'Equally excellent. Summer heat has broken, skies are clear, and the autumn light is golden and soft. October is arguably the single best month for Marrakech.' },
  { months: 'December - February', temp: '12-20C', rating: 4, icon: CloudSun, verdict: 'Cool and pleasant during the day with cold evenings. Fewer tourists, lower riad prices, and snow-capped Atlas Mountains as a stunning backdrop. Pack layers for nights that can drop to 5C.' },
  { months: 'June', temp: '30-38C', rating: 3, icon: ThermometerSun, verdict: 'Getting hot. Mornings and evenings are delightful but midday requires shade and water. Air-conditioned riads become essential. Good deals available as tourist numbers thin.' },
  { months: 'September', temp: '28-35C', rating: 3, icon: Sunset, verdict: 'Similar to June but transitioning toward the autumn sweet spot. The heat breaks noticeably by late September. A good month if you can handle warm afternoons.' },
  { months: 'July - August', temp: '35-45C', rating: 2, icon: ThermometerSun, verdict: 'Brutally hot. Temperatures regularly exceed 40C and the medina becomes an oven. If you must visit, schedule outdoor activities before 10 AM and after 5 PM. Pools are essential.' },
];

/* =====================================================================
   DATA: BUDGET GUIDE
   ===================================================================== */

const budgetBreakdown = [
  {
    category: 'Backpacker',
    dailyBudget: '300-500 MAD/day ($30-50)',
    icon: Footprints,
    details: [
      'Hostel dorm: 80-150 MAD/night',
      'Street food meals: 30-60 MAD/meal',
      'Public bus: 4-5 MAD/ride',
      'Free attractions: souks, Jemaa el-Fnaa, mosque exteriors',
      'Paid attractions: 50-150 MAD each (be selective)',
    ],
  },
  {
    category: 'Mid-Range',
    dailyBudget: '800-1,500 MAD/day ($80-150)',
    icon: Heart,
    details: [
      'Riad double room: 400-800 MAD/night',
      'Restaurant meals: 80-200 MAD/meal',
      'Petit taxis: 15-30 MAD/ride',
      'All major attractions: 50-150 MAD each',
      'Cooking class or hammam: 300-600 MAD',
    ],
  },
  {
    category: 'Luxury',
    dailyBudget: '3,000-8,000+ MAD/day ($300-800+)',
    icon: Sparkles,
    details: [
      'Luxury riad/palace hotel: 2,000-8,000+ MAD/night',
      'Fine dining: 400-1,000 MAD/meal',
      'Private driver: 800-1,500 MAD/day',
      'Private guided tours: 1,000-2,000 MAD',
      'Spa & hammam: 500-2,000 MAD',
    ],
  },
];

/* =====================================================================
   DATA: SAFETY TIPS
   ===================================================================== */

const safetyTips = [
  {
    icon: Shield,
    title: 'General Safety',
    tips: [
      'Marrakech is generally safe for tourists but petty crime exists. Keep valuables in your riad safe and carry only what you need.',
      'The medina can feel overwhelming but aggressive touts are annoying, not dangerous. A firm "la, shukran" (no, thank you) is sufficient.',
      'Avoid walking alone in unlit medina alleyways after midnight. Stick to main routes at night.',
      'Women may receive more attention; dress modestly in the medina (shoulders and knees covered) and walk with purpose.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Common Scams',
    tips: [
      'Fake guides: Young men offering to "help you find your riad" then demanding payment. Politely decline or use your phone GPS.',
      'Carpet shop diversion: Being led to a carpet shop by a "friend." You are under no obligation to buy anything.',
      'Inflated taxi fares: Always insist on the meter or agree on the price beforehand.',
      'Henna ambush: Women applying henna without consent then demanding high payment. Firmly say no if you do not want it.',
      'Spice shop "pharmacy" tours: A man claims to be a pharmacist selling miracle cures. Just enjoy the theater and buy only what you want.',
    ],
  },
  {
    icon: Phone,
    title: 'Emergency Information',
    tips: [
      'Tourist police: 19 (French and Arabic speaking)',
      'Ambulance: 15',
      'Fire: 15',
      'Pharmacies: Marked with a green cross, many are open 24 hours on a rotation basis.',
      'Your riad staff are your best resource for any problem. They know the medina and can help with anything from a lost phone to medical attention.',
    ],
  },
];

/* =====================================================================
   DATA: 3-DAY ITINERARY
   ===================================================================== */

const itinerary = [
  {
    day: 'Day 1',
    title: 'The Medina & Jemaa el-Fnaa',
    icon: Landmark,
    morning: {
      time: '9:00 AM - 12:30 PM',
      activities: [
        'Start at Ben Youssef Medersa when it opens at 9 AM for crowd-free photos',
        'Walk to the Museum of Marrakech in the adjacent Dar Menebhi Palace',
        'Explore the Almoravid Koubba, the oldest monument in Marrakech',
        'Wind through the northern souks toward Souk Semmarine',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:00 PM',
      activities: [
        'Lunch at Cafe des Epices overlooking the Spice Square',
        'Navigate the specialized souks: spice, leather, metalwork, dyers',
        'Stop at the Ensemble Artisanal for fixed-price reference shopping',
        'Return to your riad for a rest during the hottest hours',
      ],
    },
    evening: {
      time: '5:00 PM - 10:00 PM',
      activities: [
        'Walk to the Koutoubia Mosque gardens for golden hour photographs',
        'Enter Jemaa el-Fnaa as the food stalls are lighting their grills at sunset',
        'Eat at the food stalls: lamb kebabs, harira soup, and fresh orange juice',
        'Watch the musicians, storytellers, and acrobats as the square comes alive',
      ],
    },
  },
  {
    day: 'Day 2',
    title: 'Palaces, Gardens & the Kasbah',
    icon: Palette,
    morning: {
      time: '8:30 AM - 12:30 PM',
      activities: [
        'Take a petit taxi to Majorelle Garden, arriving at opening to beat the crowds',
        'Spend 1.5 hours in the garden and the Musee Yves Saint Laurent',
        'Walk or taxi to the nearby Musee de la Palmeraie for contemporary art',
        'Browse the boutiques and galleries of Gueliz along Avenue Mohammed V',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:30 PM',
      activities: [
        'Lunch at Nomad (book ahead) or Le Jardin for garden-courtyard dining',
        'Walk to Bahia Palace and explore every courtyard and painted ceiling',
        'Continue to the Mellah: visit the Lazama Synagogue and spice market',
        'End at El Badi Palace, climbing the tower for panoramic sunset views',
      ],
    },
    evening: {
      time: '5:30 PM - 10:00 PM',
      activities: [
        'Walk through the Kasbah to the Saadian Tombs before closing',
        'Traditional hammam session at a riad spa or the public Hammam Mouassine',
        'Dinner at Le Comptoir Darna with live music and belly dancing show',
        'Nightcap on the rooftop at KABANA with Koutoubia views',
      ],
    },
  },
  {
    day: 'Day 3',
    title: 'Day Trip & Final Exploration',
    icon: Mountain,
    morning: {
      time: '7:00 AM - 1:00 PM',
      activities: [
        'Early departure for Ourika Valley or Atlas Mountains (arranged by riad)',
        'Hike to the Setti Fatma waterfalls or explore Imlil village',
        'Visit a saffron farm or argan oil cooperative',
        'Traditional Berber tagine lunch beside the river',
      ],
    },
    afternoon: {
      time: '2:00 PM - 5:00 PM',
      activities: [
        'Return to Marrakech and rest at your riad',
        'Join a cooking class at La Maison Arabe or Amal Center',
        'Alternatively, do final souk shopping with a clearer sense of prices',
        'Pick up any items you spotted on Day 1 and negotiate from a position of knowledge',
      ],
    },
    evening: {
      time: '5:00 PM - Late',
      activities: [
        'Sunset from a rooftop terrace (your riad or a rooftop bar)',
        'Farewell dinner at Al Fassia in Gueliz for refined Moroccan cuisine',
        'Final walk through Jemaa el-Fnaa for one last dose of the magic',
        'Optional: cocktails at Barometre or dancing at Theatro in Hivernage',
      ],
    },
  },
];

/* =====================================================================
   DATA: RELATED PAGES
   ===================================================================== */

const relatedPages = [
  { href: '/cities/fes', title: 'Fes City Guide', description: 'Morocco\'s spiritual capital with the world\'s largest medieval medina.', icon: Landmark },
  { href: '/cities/essaouira', title: 'Essaouira Guide', description: 'Bohemian coastal charm, fresh seafood, and Atlantic breezes.', icon: Globe },
  { href: '/sahara', title: 'Sahara Desert Guide', description: 'Camel treks, desert camps, and stargazing under the darkest skies.', icon: Compass },
  { href: '/riads', title: 'Morocco Riad Guide', description: 'How to choose the perfect riad for your Moroccan adventure.', icon: Bed },
  { href: '/food', title: 'Moroccan Food Guide', description: 'Tagines, couscous, pastilla, and the flavors of Morocco.', icon: Utensils },
  { href: '/souks', title: 'Souk Shopping Guide', description: 'Master the art of haggling and find the best Moroccan crafts.', icon: ShoppingBag },
  { href: '/itineraries/3-day-marrakech', title: '3-Day Marrakech Itinerary', description: 'A detailed day-by-day plan for the perfect Marrakech trip.', icon: Calendar },
  { href: '/hammam', title: 'Hammam Guide', description: 'Everything you need to know about the Moroccan bathhouse ritual.', icon: Sparkles },
  { href: '/morocco-nightlife-guide', title: 'Morocco Nightlife Guide', description: 'Rooftop bars, live music, and after-dark culture in Marrakech and beyond.', icon: Moon },
  { href: '/morocco-shopping-guide', title: 'Morocco Shopping Guide', description: 'What to buy, where to shop, and how to get the best prices across Morocco.', icon: ShoppingBag },
  { href: '/morocco-spa-guide', title: 'Morocco Spa Guide', description: 'Luxury hammams, traditional treatments, and the best spas in the kingdom.', icon: Sparkles },
  { href: '/marrakech-to-sahara', title: 'Marrakech to Sahara', description: 'Tour options, route details, desert camps, and prices for the iconic trip.', icon: Compass },
  { href: '/morocco-day-trips', title: 'Day Trips from Marrakech', description: 'Ouzoud Falls, Ourika Valley, Essaouira, and more in a day.', icon: MapPin },
  { href: '/morocco-food-tours', title: 'Morocco Food Tours', description: 'Guided culinary walks through the souks and hidden food stalls.', icon: Utensils },
  { href: '/morocco-trip-cost', title: 'Morocco Trip Cost', description: 'Complete budget breakdown for backpackers to luxury travelers.', icon: ShoppingBag },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MarrakechPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Marrakech',
    alternateName: 'The Red City',
    description:
      'Marrakech is Morocco\'s most iconic city, famous for the Jemaa el-Fnaa square, ancient medina, stunning palaces, vibrant souks, and the gateway to the Atlas Mountains and Sahara Desert.',
    url: 'https://moroccoguide.com/marrakech',
    touristType: ['Culture Enthusiasts', 'Foodies', 'Shoppers', 'History Buffs', 'Photographers', 'Adventure Seekers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.6295,
      longitude: -7.9811,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Jemaa el-Fnaa' },
      { '@type': 'TouristAttraction', name: 'Koutoubia Mosque' },
      { '@type': 'TouristAttraction', name: 'Bahia Palace' },
      { '@type': 'TouristAttraction', name: 'Majorelle Garden' },
      { '@type': 'TouristAttraction', name: 'Ben Youssef Medersa' },
      { '@type': 'TouristAttraction', name: 'Saadian Tombs' },
      { '@type': 'TouristAttraction', name: 'El Badi Palace' },
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
            backgroundImage: 'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Marrakech</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Marrakech
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            The Red City &mdash; Morocco&apos;s Most Iconic Destination
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            A sensory overload of ancient palaces, labyrinthine souks, sizzling street food, and the
            legendary Jemaa el-Fnaa square. Marrakech is not just a city &mdash; it is an experience
            that rewires your senses and stays with you forever.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Landmark className="w-3.5 h-3.5 mr-1.5" /> UNESCO Heritage</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><ShoppingBag className="w-3.5 h-3.5 mr-1.5" /> Legendary Souks</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Utensils className="w-3.5 h-3.5 mr-1.5" /> Food Capital</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Mountain className="w-3.5 h-3.5 mr-1.5" /> Atlas Gateway</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* =================================================================
          INTRODUCTION
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Red City: Where Africa, Arabia & Europe Collide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Founded in 1070 by the Almoravid dynasty, Marrakech has spent nearly a thousand years
              enchanting travelers from every corner of the globe. Its rose-red ramparts stretch for
              19 kilometers around a medina so dense and labyrinthine that GPS signals surrender within
              minutes. This is a city built for getting lost &mdash; and in that disorientation,
              discovering something extraordinary around every corner.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Marrakech is Morocco&apos;s undisputed tourism capital and the number one searched destination
              in the country. Over three million visitors arrive each year seeking the intoxicating
              combination of ancient palaces, world-class food, artisan souks, hammam rituals, and
              the Atlas Mountains shimmering on the southern horizon. The city delivers on every promise
              and then some.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Whether you are here for 48 hours or two weeks, Marrakech will assault your senses in
              the best possible way. The call to prayer echoing over terracotta rooftops at dawn. The
              scent of cedar, saffron, and orange blossom drifting through the souks. The taste of
              slow-cooked tagine and fresh mint tea. The sight of a thousand lanterns casting star
              patterns on ancient walls. This guide covers everything you need to make the most of
              every moment in Morocco&apos;s Red City.
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
              Marrakech Essentials: Know Before You Go
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            These practical tips will help you navigate Marrakech like an experienced traveler
            from your very first day.
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
          TOP ATTRACTIONS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top 7 Attractions in Marrakech
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From the chaos of Jemaa el-Fnaa to the serenity of Majorelle Garden, these are the
            experiences that define Marrakech.
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-3 left-3">
                      <span className="tag bg-white/90 text-[var(--color-primary)] font-semibold">
                        {attraction.type}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                      <span className="text-white text-xs font-semibold">{attraction.rating}</span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-3">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                      {attraction.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-[var(--text-secondary)] mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {attraction.hours}</span>
                      <span className="flex items-center gap-1"><Ticket className="w-3.5 h-3.5" /> {attraction.price}</span>
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-accent-50)]">
                      <Lightbulb className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-semibold text-[var(--color-accent-dark)]">Tip:</span> {attraction.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          NEIGHBORHOODS GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Neighborhoods Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Marrakech has distinct neighborhoods, each with its own personality. Where you stay
            shapes your entire experience.
          </p>

          <div className="space-y-6">
            {neighborhoods.map((hood) => {
              const Icon = hood.icon;
              return (
                <div key={hood.name} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                          {hood.name}
                        </h3>
                        <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                          {hood.character}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                        {hood.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hood.highlights.map((h) => (
                          <span key={h} className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <Users className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold">Best for:</span> {hood.bestFor}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <Bed className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold">Stay here:</span> {hood.stayHere}
                          </p>
                        </div>
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
          SOUK SHOPPING GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              The Ultimate Souk Shopping Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Marrakech&apos;s souks are the largest traditional market in Morocco, with over 3,000 stalls
            spread across a maze of covered alleyways. Here is your guide to navigating them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {soukSections.map((souk) => (
              <div key={souk.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CircleDot className="w-4 h-4 text-[var(--color-accent)]" />
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {souk.name}
                  </h3>
                </div>
                <span className="inline-block tag bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-3">
                  {souk.specialty}
                </span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {souk.description}
                </p>
              </div>
            ))}
          </div>

          {/* Haggling Tips */}
          <div className="card-moroccan p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <HandCoins className="w-6 h-6 text-[var(--color-accent)]" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                The Art of Haggling: 8 Essential Tips
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hagglingTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          FOOD GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Food Guide: Where & What to Eat
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Marrakech is Morocco&apos;s culinary capital, from sizzling street food at Jemaa el-Fnaa to
            refined palace dining and everything in between.
          </p>

          {/* Best Restaurants */}
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--color-accent)]" />
            Best Restaurants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {restaurant.name}
                  </h4>
                  <span className="text-sm font-semibold text-[var(--color-green)]">{restaurant.price}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                    {restaurant.cuisine}
                  </span>
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                    <MapPin className="w-3 h-3 mr-1" />{restaurant.location}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {restaurant.description}
                </p>
              </div>
            ))}
          </div>

          {/* Street Food at Jemaa el-Fnaa */}
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Coffee className="w-5 h-5 text-[var(--color-accent)]" />
            Street Food at Jemaa el-Fnaa
          </h3>
          <div className="card-moroccan overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary-50)]">
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Dish</th>
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Where to Find</th>
                  </tr>
                </thead>
                <tbody>
                  {streetFoodAtJemaa.map((food, index) => (
                    <tr key={food.item} className={index % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-medium text-[var(--text-primary)]">{food.item}</td>
                      <td className="p-4 text-[var(--color-green)] font-semibold">{food.price}</td>
                      <td className="p-4 text-[var(--text-muted)]">{food.stall}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cooking Classes */}
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
            Cooking Classes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cookingClasses.map((cc) => (
              <div key={cc.name} className="card-moroccan p-6">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {cc.name}
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                    <Clock className="w-3 h-3 mr-1" />{cc.duration}
                  </span>
                  <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                    <DollarSign className="w-3 h-3 mr-1" />{cc.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {cc.description}
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
              Where to Stay in Marrakech
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From backpacker hostels to palace hotels, Marrakech has accommodation for every budget.
            Staying in a traditional riad is one of the defining Marrakech experiences.
          </p>

          <div className="space-y-8">
            {accommodationsByBudget.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.category} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                      <TierIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {tier.category}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{tier.priceRange}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tier.options.map((option) => (
                      <div key={option.name} className="p-4 rounded-xl bg-[var(--surface-muted)]">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-[var(--text-primary)]">{option.name}</h4>
                          <span className="tag text-xs bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                            {option.area}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                          {option.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          DAY TRIPS FROM MARRAKECH
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day Trips from Marrakech
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Marrakech is the gateway to some of Morocco&apos;s most spectacular landscapes.
            These five day trips are easily arranged through your riad or a local agency.
          </p>

          <div className="space-y-6">
            {dayTrips.map((trip) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                      <TripIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-1">
                        {trip.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)] mb-3">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {trip.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {trip.duration}</span>
                        <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {trip.price}</span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                        {trip.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {trip.highlights.map((h) => (
                          <span key={h} className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                            {h}
                          </span>
                        ))}
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
          GETTING AROUND
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Car className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Getting Around Marrakech
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            The medina is best explored on foot, but you will need wheels to reach Gueliz, Hivernage,
            and the Majorelle Garden.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportModes.map((transport) => {
              const TransportIcon = transport.icon;
              return (
                <div key={transport.mode} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <TransportIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {transport.mode}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{transport.cost}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {transport.description}
                  </p>
                  <div className="space-y-2">
                    {transport.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-[var(--text-secondary)]">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          MARRAKECH BY NIGHT
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Moon className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Marrakech by Night
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From rooftop cocktails with minaret views to theatrical dinner shows and the world&apos;s
            most extraordinary open-air night market, Marrakech comes alive after dark.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nightlifeSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6 group">
                <div className="flex items-center gap-2 mb-1">
                  <Wine className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)] text-xs">
                    {spot.type}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-secondary)] transition-colors">
                  {spot.name}
                </h3>
                <p className="text-xs text-[var(--color-primary)] font-semibold mb-2">
                  <MapPin className="w-3 h-3 inline mr-1" />{spot.location}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {spot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          BEST TIME TO VISIT
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Best Time to Visit Marrakech
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Marrakech is a year-round destination, but spring and autumn offer the most comfortable
            temperatures for exploring the medina on foot.
          </p>

          <div className="space-y-4">
            {monthlyWeather.map((month) => {
              const WeatherIcon = month.icon;
              return (
                <div key={month.months} className="card-moroccan p-5 flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex items-center gap-3 sm:w-64 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <WeatherIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {month.months}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{month.temp}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < month.rating
                              ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                              : 'text-[var(--border-default)]'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {month.verdict}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          BUDGET GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Marrakech Budget Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Marrakech offers exceptional value for money. You can have an incredible trip on almost
            any budget. Here is what to expect at each level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetBreakdown.map((tier) => {
              const BudgetIcon = tier.icon;
              return (
                <div key={tier.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                      <BudgetIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {tier.category}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{tier.dailyBudget}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {tier.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--text-secondary)]">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          SAFETY TIPS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Safety Tips for Marrakech
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Marrakech is a safe city for tourists, but like any major destination, awareness goes
            a long way. Here is what you need to know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyTips.map((section) => {
              const SafetyIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <SafetyIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {section.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <BadgeCheck className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          3-DAY ITINERARY
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Map className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              The Perfect 3-Day Marrakech Itinerary
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Three days is the sweet spot for Marrakech. Enough time to explore the medina, visit the
            top attractions, take a day trip, and still have moments to simply sit on a rooftop
            terrace and soak it all in.
          </p>

          <div className="space-y-8">
            {itinerary.map((day) => {
              const DayIcon = day.icon;
              return (
                <div key={day.day} className="card-moroccan overflow-hidden">
                  <div className="p-4 bg-[var(--color-primary)] text-white flex items-center gap-3">
                    <DayIcon className="w-6 h-6" />
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-lg">
                        {day.day}: {day.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Morning */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Sunrise className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Morning</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.morning.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.morning.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Afternoon */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Afternoon</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.afternoon.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.afternoon.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Evening */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Moon className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Evening</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.evening.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.evening.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
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
          RELATED PAGES
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-[var(--text-secondary)]">
              Discover more destinations and experiences that pair perfectly with a Marrakech adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-6 group flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-100)] transition-colors">
                  <link.icon className="w-5 h-5 text-[var(--color-accent-dark)]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  {link.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)]">
                  Explore
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
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
              Marrakech in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1A1814', opacity: 0.7 }}>
              The Red City&apos;s kaleidoscope of color &mdash; from the nightly spectacle of Jemaa el-Fnaa to
              the serene blues of Majorelle and the golden glow of Koutoubia at sunset.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/hero-bahia-palace.webp', alt: 'Ornate courtyard and zellige tilework of Bahia Palace in Marrakech' },
              { src: '/images/hero-jemaa-elfna-night.webp', alt: 'Jemaa el-Fnaa square at night with food stall smoke and lights in Marrakech' },
              { src: '/images/hero-majorelle-blue.webp', alt: 'Vibrant cobalt blue walls of the Majorelle Garden in Marrakech' },
              { src: '/images/hero-koutoubia-sunset.webp', alt: 'Koutoubia Mosque minaret silhouetted against a golden Marrakech sunset' },
              { src: '/images/hero-souk-lamps.webp', alt: 'Colorful Moroccan brass and glass lanterns hanging in a Marrakech souk' },
            ].map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-xl group ${i === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3]' : 'aspect-[4/3]'}`}>
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
          FINAL CTA
          ================================================================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Marrakech medina rooftops at golden hour with Atlas Mountains in the distance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="container-morocco relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Marrakech Is Calling
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              There is a reason Marrakech has enchanted travelers for a thousand years. The maze of the medina,
              the scent of spices on the evening breeze, the call to prayer echoing over rose-red rooftops, the
              taste of mint tea poured from a silver pot. This is a city that does not just visit your senses
              &mdash; it rewires them. Start planning your journey to the Red City today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent btn-lg rounded-full"
              >
                <Compass className="w-5 h-5" />
                Plan Your Marrakech Trip
              </Link>
              <Link
                href="/cities"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                <Globe className="w-5 h-5" />
                Explore All Cities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="zellige-border" />
    </>
  );
}

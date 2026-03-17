import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Plane,
  Mountain,
  Film,
  Castle,
  Sun,
  Camera,
  Star,
  Compass,
  Car,
  Hotel,
  Utensils,
  ChevronRight,
  Info,
  Calendar,
  Thermometer,
  Shield,
  Home,
  Sunrise,
  Eye,
  Navigation,
  Globe,
  Footprints,
  Wind,
  BookOpen,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title:
    'Ouarzazate Travel Guide 2025-2026 | Hollywood of Africa | Atlas Studios, Ait Ben Haddou & Sahara Gateway',
  description:
    'The ultimate Ouarzazate travel guide. Explore Atlas Film Studios, UNESCO-listed Ait Ben Haddou, Kasbah Taourirt, Draa Valley, Dades & Todra Gorges, Rose Valley, and the gateway to the Sahara Desert. Best restaurants, kasbahs, desert camps, photography tips, and getting there from Marrakech.',
  keywords: [
    'Ouarzazate travel guide',
    'Ouarzazate Morocco',
    'Hollywood of Africa',
    'Atlas Film Studios',
    'Ait Ben Haddou',
    'Kasbah Taourirt',
    'Ouarzazate film studios',
    'Game of Thrones Morocco',
    'Gladiator filming location',
    'Lawrence of Arabia Morocco',
    'Draa Valley',
    'Dades Gorge',
    'Todra Gorge',
    'Rose Valley Morocco',
    'Skoura palm grove',
    'Fint Oasis',
    'Sahara gateway',
    'Ouarzazate hotels',
    'Ouarzazate restaurants',
    'Tizi n Tichka pass',
    'Ouarzazate photography',
    'best time to visit Ouarzazate',
    'Ouarzazate day trips',
    'Kelaat M Gouna',
    'desert camps Morocco',
    'kasbah accommodation Morocco',
  ],
  openGraph: {
    title:
      'Ouarzazate Travel Guide 2025-2026 | The Hollywood of Africa',
    description:
      'Complete guide to Ouarzazate: Atlas Film Studios, Ait Ben Haddou UNESCO site, Kasbah Taourirt, Draa Valley, gorges, desert gateway, photography spots, and where to stay in Morocco\'s cinematic heartland.',
    url: 'https://citytoursmorocco.com/ouarzazate',
    type: 'article',
    images: [
      {
        url: '/images/hero-ouarzazate-studios.webp',
        width: 1200,
        height: 630,
        alt: 'Atlas Film Studios in Ouarzazate with desert landscape - citytoursmorocco.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Ouarzazate Travel Guide 2025-2026 | Hollywood of Africa',
    description:
      'Complete guide to Ouarzazate: Atlas Studios, Ait Ben Haddou, Kasbah Taourirt, Draa Valley, gorges, Rose Valley, and the Sahara gateway.',
    images: ['/images/hero-ouarzazate-studios.webp'],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/ouarzazate',
  },
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  { label: 'Altitude', value: '1,160 m', icon: Mountain },
  { label: 'Climate', value: 'Semi-arid desert', icon: Thermometer },
  { label: 'Airport', value: 'OZZ', icon: Plane },
  { label: 'Best Season', value: 'Mar-May, Sep-Nov', icon: Calendar },
  { label: 'Population', value: '72,000', icon: MapPin },
  { label: 'Province', value: 'Draa-Tafilalet', icon: Globe },
  { label: 'Language', value: 'Arabic, Tamazight', icon: BookOpen },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
];

/* =====================================================================
   DATA: TOP ATTRACTIONS
   ===================================================================== */

const attractions = [
  {
    name: 'Atlas Film Studios',
    subtitle: 'The Largest Film Studio in the World',
    description:
      'Spanning over 322,000 square meters on the outskirts of Ouarzazate, Atlas Film Studios is the largest film studio complex in the world and the reason this city earned its legendary nickname. Since opening in 1983, more than 200 major international productions have been filmed here. Walking through the studios is like stepping through a time machine: you pass ancient Egyptian temples built for "The Mummy," a full-scale Tibetan monastery from "Kundun," Roman colosseum sets from "Gladiator," and the imposing walls of Astapor from "Game of Thrones." Every set is left standing after production wraps, creating a surreal landscape where civilizations and centuries collide in the Moroccan desert light.',
    image: '/images/hero-ouarzazate-studios.webp',
    type: 'Film Studios',
    rating: 4.6,
    hours: '8:15 AM - 6:15 PM (summer), 8:15 AM - 5:15 PM (winter)',
    price: '60 MAD',
    tip: 'Hire a local guide at the entrance for 100-150 MAD. They know every set intimately and will take you to hidden corners that self-guided visitors miss. The morning light creates the most dramatic photographs of the Egyptian sets.',
  },
  {
    name: 'Ait Ben Haddou',
    subtitle: 'UNESCO World Heritage Ksar',
    description:
      'Rising from the banks of the Ounila River like a vision from another age, Ait Ben Haddou is the most spectacular fortified village in Morocco and one of the most photographed sites in all of North Africa. This UNESCO World Heritage Site is a masterpiece of pre-Saharan earthen architecture: a cluster of kasbahs and homes built from rammed earth, straw, and red clay, stacked dramatically up a hillside and crowned by a communal granary. The ksar has been a major filming location for decades, appearing in "Lawrence of Arabia," "Gladiator," "Game of Thrones" (as the city of Yunkai), "The Mummy," "Prince of Persia," and "Kingdom of Heaven." A handful of families still live within the ancient walls, maintaining a living connection to centuries of history.',
    image: '/images/hero-morocco-hero.webp',
    type: 'UNESCO World Heritage',
    rating: 4.9,
    hours: 'Open daily, sunrise to sunset',
    price: 'Free (guides available 150-200 MAD)',
    tip: 'Cross the river at dawn when the first light paints the kasbah walls in shades of amber and gold. Climb to the granary at the summit for a 360-degree panorama. The view from across the river is equally magnificent and is the classic postcard angle.',
  },
  {
    name: 'Kasbah Taourirt',
    subtitle: 'The Glaoui Fortress in the Heart of Ouarzazate',
    description:
      'Kasbah Taourirt dominates the eastern end of Ouarzazate and is the city\'s most important historical monument. This sprawling fortress was once the seat of power of the Glaoui family, the powerful Berber lords who controlled the caravan routes between the Sahara and Marrakech for centuries. The kasbah is a labyrinth of over 300 rooms, narrow passageways, hidden staircases, and decorated reception chambers with ornate painted ceilings and carved stucco walls. The restored reception rooms showcase the finest examples of traditional Amazigh craftsmanship in southern Morocco. The adjacent Ensemble Artisanal offers high-quality local crafts at fixed prices.',
    image: '/images/hero-ouarzazate-studios.webp',
    type: 'Historic Fortress',
    rating: 4.5,
    hours: '8:30 AM - 6:00 PM daily',
    price: '20 MAD',
    tip: 'The rooftop terrace offers sweeping views over the city toward the Atlas Mountains. Visit in the late afternoon when the warm light illuminates the earthen walls and the fortress takes on its most photogenic hue.',
  },
  {
    name: 'Fint Oasis',
    subtitle: 'A Hidden Paradise in the Desert',
    description:
      'Just 15 kilometers south of Ouarzazate, Fint Oasis is one of Morocco\'s most beautiful and least-visited natural wonders. Hidden in a dramatic canyon where the arid stony desert suddenly gives way to a lush palm grove fed by natural springs, Fint feels like a mirage made real. The oasis is home to a small Berber village where life follows ancient rhythms: farmers tend date palms, olive groves, and vegetable gardens irrigated by a traditional khettara water system. The contrast between the verdant green palms and the stark red-brown desert cliffs creates a landscape of extraordinary beauty. Several films have used Fint as a location, including scenes from "The Hills Have Eyes."',
    image: '/images/hero-dades-valley-road.webp',
    type: 'Natural Oasis',
    rating: 4.7,
    hours: 'Open access (daylight hours recommended)',
    price: 'Free',
    tip: 'Arrange a visit through your hotel or hire a local driver. The unpaved road requires a sturdy vehicle. Bring water and snacks. The oasis is most magical in the early morning when mist rises from the palms.',
  },
];

/* =====================================================================
   DATA: DRAA VALLEY
   ===================================================================== */

const draaHighlights = [
  {
    title: 'Agdz',
    description:
      'The gateway town to the Draa Valley, where the road descends from the Tizi n Tinifift pass into a world of palm groves and kasbahs. The Thursday souk is one of the most authentic in the region.',
    icon: MapPin,
  },
  {
    title: 'Tamnougalt Kasbah',
    description:
      'A stunning 16th-century kasbah perched above the Draa River near Agdz. Once the administrative center for the entire valley, its decorated rooms and rooftop views are exceptional.',
    icon: Castle,
  },
  {
    title: 'Zagora',
    description:
      'The main town of the Draa Valley, famous for its iconic road sign reading "Timbuktu 52 Days" by camel. The starting point for desert excursions to the dunes of Erg Chigaga.',
    icon: Compass,
  },
  {
    title: 'Palm Groves',
    description:
      'The Draa Valley contains over six million date palms stretching for 200 kilometers, making it the longest palm grove in Morocco. The dates harvested here in autumn are among the finest in the country.',
    icon: Sun,
  },
  {
    title: 'Tamegroute',
    description:
      'A sacred village known for its ancient Koranic library containing manuscripts dating to the 13th century, and its distinctive green-glazed pottery workshops that have operated for generations.',
    icon: BookOpen,
  },
  {
    title: 'Erg Chigaga',
    description:
      'The most remote and spectacular sand dunes in Morocco, accessible from Zagora. These towering golden dunes reach heights of 300 meters and offer an untouched Saharan wilderness experience.',
    icon: Wind,
  },
];

/* =====================================================================
   DATA: SKOURA PALM GROVE & KASBAHS
   ===================================================================== */

const skouraHighlights = [
  {
    title: 'Kasbah Amridil',
    description:
      'One of the best-preserved kasbahs in all of Morocco, Amridil appears on the 50-dirham banknote. This 17th-century fortress features four decorative towers, painted ceilings, and a small museum showcasing traditional Amazigh life. The family who owns it has lived here for twelve generations.',
    icon: Castle,
  },
  {
    title: 'Skoura Palm Grove',
    description:
      'A vast oasis of over 700,000 palm trees, almond trees, and olive groves stretching along the Dadès River. Walking or cycling through the palm grove reveals hidden kasbahs, traditional irrigation channels, and Berber villages untouched by mass tourism.',
    icon: Sun,
  },
  {
    title: 'Kasbah Ait Ben Moro',
    description:
      'A beautifully restored 17th-century kasbah now operating as a characterful guest house. Even if you do not stay the night, the architecture and setting among the palms make it worth a visit.',
    icon: Hotel,
  },
  {
    title: 'Bird Watching',
    description:
      'The Skoura palm grove is a paradise for birdwatchers. Species include the desert warbler, Tristram\'s warbler, Egyptian nightjar, and various raptors. Spring and autumn migrations bring dozens of additional species.',
    icon: Eye,
  },
];

/* =====================================================================
   DATA: DADES & TODRA GORGES
   ===================================================================== */

const gorgesData = [
  {
    name: 'Dades Gorge',
    distance: '110 km from Ouarzazate',
    description:
      'The Dades Gorge carves a dramatic path through the eastern High Atlas, creating towering walls of rust-red rock that soar hundreds of meters above the valley floor. The road through the gorge is one of the most spectacular drives in Morocco, winding through a landscape of bizarre rock formations known as the "monkey fingers" or "human bodies" due to their eroded shapes. The valley floor is surprisingly green, with walnut, almond, and fig trees fed by the Dades River. Several kasbahs and guest houses perch dramatically on the canyon walls.',
    highlights: [
      'The famous hairpin bends of the Dades road, among the most photographed roads in Morocco',
      'Monkey Fingers rock formations: towering pillars of eroded conglomerate',
      'Kasbah Ait Arbi: a crumbling fortress perched on the canyon rim',
      'Hiking trails ranging from easy valley walks to challenging canyon scrambles',
      'Traditional Berber villages accessible only on foot along the river',
    ],
    tip: 'The road through the gorge is paved for about 30 kilometers and then becomes a rough track. The most dramatic scenery is in the first 25 kilometers. Stay overnight at a guesthouse in the gorge to enjoy the silence and stargazing.',
  },
  {
    name: 'Todra Gorge',
    distance: '160 km from Ouarzazate',
    description:
      'Todra Gorge is one of the most dramatic natural landscapes in Morocco. At its narrowest point, sheer limestone walls rise 300 meters on either side while the gap between them narrows to just 10 meters, creating a natural cathedral of rock. A crystal-clear river flows through the canyon floor, and the play of light on the orange and pink rock walls changes by the hour. The gorge is world-renowned among rock climbers, with over 400 bolted routes on the canyon walls attracting climbers from around the globe.',
    highlights: [
      'The narrow canyon passage where 300-meter walls are just 10 meters apart',
      'World-class rock climbing with routes graded from beginner to expert',
      'The palmerie at the gorge entrance, a lush contrast to the desert surroundings',
      'Traditional carpet cooperatives in the nearby town of Tinghir',
      'The old Jewish quarter (mellah) in Tinghir with its historic silver workshops',
    ],
    tip: 'The gorge is most dramatic in the morning when sunlight penetrates the narrow canyon from above. Arrive before 10 AM for the best light. The walk through the narrowest section is easy and suitable for all fitness levels.',
  },
];

/* =====================================================================
   DATA: ROSE VALLEY & KELAAT M'GOUNA
   ===================================================================== */

const roseValleyInfo = {
  overview:
    'Between the Dades and Todra gorges lies the Valley of Roses (Vallee des Roses), centered on the town of Kelaat M\'Gouna (also spelled El Kelaa des Mgouna). Each spring, millions of Damask roses bloom across the valley, transforming the landscape into a fragrant tapestry of pink and green. The roses were originally brought from Damascus by pilgrims returning from Mecca centuries ago, and they have thrived in the valley\'s unique microclimate ever since.',
  festival:
    'The annual Moussem des Roses (Rose Festival) takes place in mid-May and is one of Morocco\'s most colorful celebrations. For three days, the town erupts in parades, traditional music, dancing, a Rose Queen competition, and the intoxicating scent of millions of fresh roses. The festival attracts visitors from across Morocco and around the world.',
  products: [
    'Rose water (eau de rose): used in Moroccan cooking, cosmetics, and traditional medicine',
    'Rose essential oil: Morocco is the fourth-largest producer of rose oil in the world',
    'Rose-scented soaps, creams, and cosmetics produced by local cooperatives',
    'Dried rosebuds for tea and cooking, available year-round in the local souks',
    'Rose-flavored nougat and sweets unique to the valley',
  ],
  bestTime:
    'The rose harvest runs from mid-April to mid-May. Visit during this window to see the valley at its most beautiful and fragrant. The festival is typically held in the second week of May.',
};

/* =====================================================================
   DATA: RESTAURANTS
   ===================================================================== */

const restaurants = [
  {
    name: 'Restaurant Douyria',
    cuisine: 'Traditional Moroccan',
    priceRange: '80-150 MAD',
    description:
      'Set inside a beautifully restored kasbah near the center of town, Douyria serves some of the best traditional Moroccan cuisine in Ouarzazate. The lamb tagine with prunes and almonds is legendary, and the rooftop terrace offers views over the city toward the Atlas Mountains.',
    mustTry: 'Lamb tagine with prunes and almonds',
  },
  {
    name: 'Chez Dimitri',
    cuisine: 'Moroccan-European',
    priceRange: '100-200 MAD',
    description:
      'A Ouarzazate institution since 1928, Chez Dimitri has fed film crews from nearly every major production shot in the region. The walls are covered with signed photos from actors and directors. The menu blends Moroccan and European dishes, and the atmosphere is a living museum of the city\'s cinematic history.',
    mustTry: 'Brochettes and the house couscous',
  },
  {
    name: 'Restaurant 3 Thes',
    cuisine: 'Moroccan',
    priceRange: '60-120 MAD',
    description:
      'A welcoming family-run restaurant near Avenue Mohammed V offering generous portions of home-style Moroccan cooking at reasonable prices. The Berber omelette for breakfast and the chicken tagine with preserved lemons for lunch are both excellent.',
    mustTry: 'Berber omelette and chicken tagine',
  },
  {
    name: 'La Kasbah des Sables',
    cuisine: 'Moroccan Fine Dining',
    priceRange: '150-300 MAD',
    description:
      'Located within a converted kasbah, this upscale restaurant offers refined Moroccan cuisine in an elegant setting. The tasting menu is an excellent introduction to the region\'s culinary traditions, featuring local specialties like pastilla, mechoui, and rosewater desserts.',
    mustTry: 'The tasting menu with rosewater pastries',
  },
  {
    name: 'Accord Majeur',
    cuisine: 'French-Moroccan Fusion',
    priceRange: '120-250 MAD',
    description:
      'A stylish restaurant run by a French-Moroccan couple, blending the best of both culinary traditions. The duck confit with ras el hanout and the chocolate fondant with orange blossom water are standout dishes. The wine list features Moroccan and French selections.',
    mustTry: 'Duck confit with ras el hanout',
  },
  {
    name: 'Habous Restaurant',
    cuisine: 'Moroccan Traditional',
    priceRange: '50-100 MAD',
    description:
      'A no-frills local favorite near the main roundabout, serving hearty portions of traditional food at honest prices. The harira soup is perfect for cold desert evenings, and the mixed grill platter feeds two generously.',
    mustTry: 'Harira soup and mixed grill platter',
  },
];

/* =====================================================================
   DATA: ACCOMMODATION
   ===================================================================== */

const accommodations = [
  {
    category: 'Kasbah Hotels',
    icon: Castle,
    options: [
      {
        name: 'Dar Ahlam',
        priceRange: 'From 5,000 MAD/night',
        description:
          'Often called the most beautiful hotel in Morocco, Dar Ahlam is a lovingly restored 19th-century kasbah surrounded by 12 hectares of palm groves in Skoura. The experience is entirely bespoke: no menus, no schedules, no other guests in sight. Every meal, every excursion, and every detail is tailored to you. This is where celebrities and discerning travelers come to disappear from the world.',
      },
      {
        name: 'Ksar Ighnda',
        priceRange: 'From 1,200 MAD/night',
        description:
          'A stunning boutique hotel built in the traditional kasbah style near Ait Ben Haddou, with panoramic views of the UNESCO ksar. The infinity pool overlooking the desert landscape is extraordinary, and the restaurant serves excellent Moroccan cuisine using local ingredients.',
      },
      {
        name: 'Kasbah Ait Ben Moro',
        priceRange: 'From 600 MAD/night',
        description:
          'A 17th-century kasbah in Skoura transformed into a characterful guest house with thick earthen walls, traditional furnishings, and a peaceful garden. The rooms retain their historic character while offering modern comforts.',
      },
    ],
  },
  {
    category: 'Riads & Guest Houses',
    icon: Hotel,
    options: [
      {
        name: 'Riad Salam',
        priceRange: 'From 400 MAD/night',
        description:
          'A centrally located riad with a beautiful courtyard garden, rooftop terrace with Atlas views, and warm Moroccan hospitality. The breakfast spread is generous and features local ingredients.',
      },
      {
        name: 'Le Temple des Arts',
        priceRange: 'From 500 MAD/night',
        description:
          'An art-filled guest house celebrating Ouarzazate\'s cinematic heritage. Each room is themed after a different film shot in the region, and the owner is a walking encyclopedia of local film history.',
      },
      {
        name: 'Dar Chamaa',
        priceRange: 'From 350 MAD/night',
        description:
          'A friendly, family-run guest house with comfortable rooms, home-cooked meals, and an owner who can arrange every possible excursion. Excellent value in a convenient location.',
      },
    ],
  },
  {
    category: 'Desert Camps',
    icon: Compass,
    options: [
      {
        name: 'Erg Chigaga Luxury Camp',
        priceRange: 'From 2,500 MAD/night',
        description:
          'A luxury desert camp in the remote Erg Chigaga dunes, accessible only by 4x4 from Zagora. Traditional Berber tents with real beds, hot showers, and gourmet dining under the stars. The silence and the night sky are worth every dirham of the journey.',
      },
      {
        name: 'Bivouac Erg Lihoudi',
        priceRange: 'From 800 MAD/night',
        description:
          'A more accessible desert camp in the smaller but beautiful Erg Lihoudi dunes, just an hour south of Ouarzazate. Camel rides at sunset, traditional Berber music around the campfire, and a sky full of stars.',
      },
      {
        name: 'Nomad Palace',
        priceRange: 'From 500 MAD/night',
        description:
          'A mid-range camp offering an authentic desert experience without the extreme remoteness of Erg Chigaga. Comfortable tents, traditional meals, sandboarding, and stargazing sessions with telescopes.',
      },
    ],
  },
];

/* =====================================================================
   DATA: GETTING THERE
   ===================================================================== */

const gettingThereRoutes = [
  {
    title: 'From Marrakech via Tizi n\'Tichka Pass',
    icon: Car,
    distance: '200 km',
    duration: '4-5 hours',
    description:
      'The most popular and dramatic route to Ouarzazate. The N9 highway climbs from Marrakech through the High Atlas Mountains via the Tizi n\'Tichka pass at 2,260 meters, the highest mountain pass in Morocco. The drive is one of the most scenic in the country, winding through Berber villages, terraced hillsides, and dramatic mountain scenery. The road is well-maintained but features many hairpin bends. Stop at the Tizi n\'Tichka summit for photographs and hot mint tea from the roadside vendors.',
    tips: [
      'Leave Marrakech early in the morning to cross the pass in the best light',
      'The road can be icy in winter (December-February); check conditions before departing',
      'Stop at the Argan oil cooperatives on the northern side of the pass',
      'Consider hiring a driver if you are not comfortable with mountain driving',
      'Many tours combine this drive with a stop at Ait Ben Haddou en route',
    ],
  },
  {
    title: 'By Air to Ouarzazate Airport (OZZ)',
    icon: Plane,
    distance: '3 km from city center',
    duration: 'Direct flights from Casablanca (1h)',
    description:
      'Ouarzazate Airport (OZZ) receives domestic flights from Casablanca and seasonal charter flights from European cities. The airport is small and efficient, located just 3 kilometers from the city center. A petit taxi to the center costs about 30-40 MAD. Royal Air Maroc operates the most reliable domestic service.',
    tips: [
      'Book domestic flights through Royal Air Maroc for the most reliable schedule',
      'Seasonal charter flights operate from Paris, Lyon, and other European cities',
      'The airport has limited facilities; eat before arriving',
      'Car rental is available at the airport from major agencies',
      'Pre-arrange airport transfer through your hotel for the easiest arrival',
    ],
  },
  {
    title: 'By Bus from Major Cities',
    icon: Navigation,
    distance: 'Various',
    duration: 'Marrakech 5h, Errachidia 5h, Zagora 3h',
    description:
      'CTM and Supratours operate comfortable bus services connecting Ouarzazate with Marrakech, Errachidia, Zagora, Tinghir, and other cities. The buses are modern, air-conditioned, and reasonably priced. The Marrakech route crosses the Tizi n\'Tichka pass and is an affordable alternative to a private transfer, though the mountain driving can be intense for nervous passengers.',
    tips: [
      'CTM buses depart from the central bus station on Avenue Mohammed V',
      'Book tickets in advance during peak season (Easter, summer, Christmas)',
      'The Marrakech-Ouarzazate CTM bus costs approximately 90-120 MAD',
      'Supratours buses connect with the ONCF train network in Marrakech',
      'Sit on the right side for the best mountain views on the Tichka crossing',
    ],
  },
  {
    title: 'Self-Drive Road Trips',
    icon: Compass,
    distance: 'Varies by route',
    duration: 'Multiple days recommended',
    description:
      'Ouarzazate is the ideal base for one of Morocco\'s greatest road trips: the circuit through the Valley of a Thousand Kasbahs. From here you can drive east through Skoura, the Dades Gorge, and Todra Gorge to Errachidia, then south to the Sahara dunes at Merzouga or Erg Chebbi, creating a spectacular loop through the most dramatic landscapes in Morocco.',
    tips: [
      'A 4x4 is recommended for off-road excursions but regular cars handle main routes',
      'Fuel stations are available in Ouarzazate, Skoura, Kelaat M\'Gouna, Boumalne, and Tinghir',
      'Roads are generally good but watch for livestock and slow-moving vehicles',
      'International driving license required alongside your national license',
      'Consider downloading offline maps as mobile signal is patchy in the gorges',
    ],
  },
];

/* =====================================================================
   DATA: PHOTOGRAPHY GUIDE
   ===================================================================== */

const photographySpots = [
  {
    location: 'Ait Ben Haddou at Sunrise',
    description:
      'The classic view from across the Ounila River captures the entire ksar bathed in golden dawn light. The warm tones of the earthen buildings against the clear desert sky create an image that belongs on a magazine cover.',
    bestTime: 'Sunrise to 9:00 AM',
    gearTip: 'Wide-angle lens for the full ksar, telephoto for architectural details. Tripod essential for dawn shots.',
  },
  {
    location: 'Atlas Studios Egyptian Sets',
    description:
      'The monumental Egyptian temple sets against the stark desert backdrop offer surreal compositions. The scale of the sets creates dramatic leading lines and the desert light provides natural studio lighting.',
    bestTime: '8:00 AM - 10:00 AM (front-lit) or 4:00 PM - 6:00 PM (golden hour)',
    gearTip: 'Standard zoom covers most needs. Polarizing filter to deepen the sky contrast.',
  },
  {
    location: 'Dades Gorge Hairpin Bends',
    description:
      'The serpentine road climbing through the Dades Gorge is one of the most dramatic road photographs in the world. The view from the viewpoint above the hairpins looking down over the switchbacks is breathtaking.',
    bestTime: 'Late afternoon for warm light on the red rock walls',
    gearTip: 'Telephoto lens to compress the switchbacks. Drone photography is spectacular here (check regulations).',
  },
  {
    location: 'Todra Gorge Canyon',
    description:
      'The towering 300-meter canyon walls create dramatic vertical compositions. The narrow slit of sky above and the play of light and shadow on the rock make every shot unique.',
    bestTime: '10:00 AM - 12:00 PM when direct sunlight enters the narrow canyon',
    gearTip: 'Ultra-wide lens essential. High ISO capability for the deep shadows. Include a person for scale.',
  },
  {
    location: 'Kasbah Taourirt Rooftop',
    description:
      'The rooftop of Kasbah Taourirt provides a panoramic view over Ouarzazate with the snow-capped Atlas Mountains as a backdrop. The decorative towers in the foreground add depth and local character.',
    bestTime: 'Sunset for warm light and dramatic shadows on the kasbah towers',
    gearTip: 'Wide-angle for panoramas, medium telephoto for isolating the Atlas peaks.',
  },
  {
    location: 'Fint Oasis',
    description:
      'The striking contrast between the lush green palms and the barren desert canyon creates compositions of extraordinary color contrast. The small scale of the oasis feels intimate and otherworldly.',
    bestTime: 'Early morning when mist rises from the palms or late afternoon for warm light',
    gearTip: 'Standard zoom for landscapes. Macro lens for palm details and wildflowers.',
  },
  {
    location: 'Draa Valley Palm Groves',
    description:
      'Endless rows of date palms stretching to the horizon, punctuated by crumbling kasbahs and the silver ribbon of the Draa River. The layered landscape of palms, kasbahs, and mountains is deeply photogenic.',
    bestTime: 'Golden hour in either direction; the valley runs roughly north-south',
    gearTip: 'Telephoto lens to compress the layers of palms and kasbahs. ND grad filter for balanced exposures.',
  },
  {
    location: 'Night Sky from the Desert',
    description:
      'The desert south of Ouarzazate offers some of the darkest skies in Morocco. The Milky Way is visible to the naked eye, and astrophotography conditions rival the best in the world.',
    bestTime: 'New moon periods, 10:00 PM - 4:00 AM',
    gearTip: 'Fast wide-angle lens (f/2.8 or wider), sturdy tripod, remote shutter release. Star tracker for deep-sky shots.',
  },
];

/* =====================================================================
   DATA: FAQ
   ===================================================================== */

const faqs = [
  {
    question: 'How many days do I need in Ouarzazate?',
    answer:
      'A minimum of two days allows you to visit Atlas Studios, Ait Ben Haddou, and Kasbah Taourirt. Three to four days lets you add the Dades and Todra gorges, Skoura, and the Draa Valley. A full week allows you to explore the entire region at a relaxed pace, including a desert excursion to Erg Chigaga or Merzouga.',
  },
  {
    question: 'Is Ouarzazate worth visiting?',
    answer:
      'Absolutely. Ouarzazate is the gateway to some of the most spectacular landscapes in Morocco: the Atlas Film Studios, UNESCO-listed Ait Ben Haddou, dramatic gorges, palm-filled valleys, and the edge of the Sahara Desert. It is essential for anyone interested in film history, desert landscapes, or Berber culture.',
  },
  {
    question: 'What is the best time to visit Ouarzazate?',
    answer:
      'Spring (March to May) and autumn (September to November) offer the most pleasant temperatures, between 20 and 30 degrees Celsius. Summer (June to August) is extremely hot, regularly exceeding 40 degrees. Winter (December to February) has comfortable daytime temperatures but cold nights, and the Atlas passes can be icy.',
  },
  {
    question: 'How do I get from Marrakech to Ouarzazate?',
    answer:
      'The most common route is by road over the Tizi n\'Tichka pass (200 km, 4-5 hours). You can drive yourself, hire a private driver, or take a CTM/Supratours bus. The mountain road is spectacular but involves many hairpin bends. There are also domestic flights from Casablanca.',
  },
  {
    question: 'Can I visit Ait Ben Haddou as a day trip from Marrakech?',
    answer:
      'Yes, many visitors combine the Tizi n\'Tichka drive with a stop at Ait Ben Haddou as a day trip from Marrakech. However, this makes for a very long day (10+ hours). It is far better to stay overnight in Ouarzazate or near Ait Ben Haddou to enjoy the ksar at dawn or dusk when the light is magical and the tour buses have departed.',
  },
  {
    question: 'What movies were filmed in Ouarzazate?',
    answer:
      'The list is extraordinary: Lawrence of Arabia (1962), The Man Who Would Be King (1975), The Living Daylights (1987), The Sheltering Sky (1990), Kundun (1997), Gladiator (2000), Kingdom of Heaven (2005), Babel (2006), Prince of Persia (2010), Game of Thrones (2012-2019), The Mummy (1999), Ben-Hur (2016), and many more. Over 200 major productions have used Ouarzazate and its surroundings.',
  },
  {
    question: 'Is Ouarzazate safe for tourists?',
    answer:
      'Ouarzazate is one of the safest cities in Morocco for tourists. The crime rate is very low, the people are friendly and welcoming, and the tourism infrastructure is well-established. Standard travel precautions apply: keep valuables secure, be aware of your surroundings, and use reputable guides and transport.',
  },
  {
    question: 'What should I pack for Ouarzazate?',
    answer:
      'Sun protection is essential year-round: SPF 50+ sunscreen, a wide-brimmed hat, and quality sunglasses. Comfortable walking shoes for exploring kasbahs and gorges. Layers for temperature swings between hot days and cool evenings. A headlamp or torch for exploring dim kasbah interiors. A camera with plenty of storage for the extraordinary landscapes.',
  },
  {
    question: 'Can I see the Sahara Desert from Ouarzazate?',
    answer:
      'Ouarzazate itself is on the edge of the pre-Saharan zone rather than the Sahara proper. For true Saharan sand dunes, you need to travel further south: Erg Chigaga (6-7 hours by 4x4 from Zagora) or Erg Chebbi near Merzouga (6 hours by road via the Dades Valley). Both offer spectacular overnight desert camp experiences.',
  },
  {
    question: 'Do I need a 4x4 to visit Ouarzazate and surroundings?',
    answer:
      'Not necessarily. The main roads between Ouarzazate, Ait Ben Haddou, Skoura, the Dades Gorge, and Todra Gorge are all paved and accessible in a regular car. A 4x4 is needed for off-road excursions to Fint Oasis, Erg Chigaga, and some remote kasbahs. Most hotels can arrange 4x4 excursions with local drivers.',
  },
];

/* =====================================================================
   DATA: FILMS SHOT IN OUARZAZATE
   ===================================================================== */

const notableFilms = [
  { title: 'Lawrence of Arabia', year: 1962, director: 'David Lean' },
  { title: 'The Man Who Would Be King', year: 1975, director: 'John Huston' },
  { title: 'The Living Daylights', year: 1987, director: 'John Glen' },
  { title: 'The Sheltering Sky', year: 1990, director: 'Bernardo Bertolucci' },
  { title: 'Kundun', year: 1997, director: 'Martin Scorsese' },
  { title: 'The Mummy', year: 1999, director: 'Stephen Sommers' },
  { title: 'Gladiator', year: 2000, director: 'Ridley Scott' },
  { title: 'Kingdom of Heaven', year: 2005, director: 'Ridley Scott' },
  { title: 'Babel', year: 2006, director: 'Alejandro G. Inarritu' },
  { title: 'Prince of Persia', year: 2010, director: 'Mike Newell' },
  { title: 'Game of Thrones', year: 2012, director: 'Various' },
  { title: 'Ben-Hur', year: 2016, director: 'Timur Bekmambetov' },
  { title: 'Prison Break', year: 2017, director: 'Various' },
  { title: 'The Physician', year: 2013, director: 'Philipp Stolzl' },
];

/* =====================================================================
   DATA: SEASONAL WEATHER
   ===================================================================== */

const seasonalWeather = [
  {
    season: 'Spring (Mar-May)',
    icon: Sun,
    tempHigh: '25-32',
    tempLow: '10-18',
    description:
      'The ideal season. Warm days, pleasant evenings, wildflowers in the valleys, and the rose harvest in May. Clear skies and excellent visibility for photography.',
  },
  {
    season: 'Summer (Jun-Aug)',
    icon: Thermometer,
    tempHigh: '38-45',
    tempLow: '22-28',
    description:
      'Extremely hot. Daytime temperatures regularly exceed 40 degrees Celsius. Sightseeing is best done early morning or late afternoon. Many visitors avoid this period.',
  },
  {
    season: 'Autumn (Sep-Nov)',
    icon: Wind,
    tempHigh: '25-35',
    tempLow: '12-20',
    description:
      'Excellent conditions similar to spring. The date harvest in the Draa Valley adds a cultural dimension. Fewer tourists than spring. Perfect for desert excursions.',
  },
  {
    season: 'Winter (Dec-Feb)',
    icon: Mountain,
    tempHigh: '15-20',
    tempLow: '0-8',
    description:
      'Comfortable days but cold nights, sometimes near freezing. Snow caps the Atlas Mountains, creating dramatic backdrops. The Tichka pass may be icy. Low tourist numbers.',
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function OuarzazatePage() {
  /* --- JSON-LD: TouristDestination --- */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Ouarzazate',
    alternateName: 'Hollywood of Africa',
    description:
      'Ouarzazate is the cinematic capital of Morocco and the gateway to the Sahara Desert, home to the world\'s largest film studios, the UNESCO-listed Ait Ben Haddou ksar, dramatic gorges, lush oases, and the vast palm-filled Draa Valley.',
    url: 'https://citytoursmorocco.com/ouarzazate',
    touristType: [
      'Film Enthusiasts',
      'Photographers',
      'Adventure Travelers',
      'Culture Seekers',
      'Desert Explorers',
      'History Buffs',
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.9189,
      longitude: -6.8936,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Atlas Film Studios' },
      { '@type': 'TouristAttraction', name: 'Ait Ben Haddou' },
      { '@type': 'TouristAttraction', name: 'Kasbah Taourirt' },
      { '@type': 'TouristAttraction', name: 'Fint Oasis' },
      { '@type': 'TouristAttraction', name: 'Dades Gorge' },
      { '@type': 'TouristAttraction', name: 'Todra Gorge' },
      { '@type': 'TouristAttraction', name: 'Draa Valley' },
    ],
  };

  /* --- JSON-LD: FAQPage --- */
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

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

      {/* =================================================================
          HERO SECTION
          ================================================================= */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-ouarzazate-studios.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/cities"
              className="hover:text-white transition-colors"
            >
              Cities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Ouarzazate</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Film className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Ouarzazate
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            The Hollywood of Africa &mdash; Gateway to the Sahara
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Where the Atlas Mountains meet the Sahara Desert, a city of ancient kasbahs, world-famous
            film studios, and landscapes so dramatic they have served as the backdrop for over 200 major
            international productions. Ouarzazate is where desert dreams become cinematic reality.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm">
              <Film className="w-3.5 h-3.5 mr-1.5" /> Film Capital
            </span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm">
              <Castle className="w-3.5 h-3.5 mr-1.5" /> UNESCO Kasbahs
            </span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm">
              <Sun className="w-3.5 h-3.5 mr-1.5" /> Desert Gateway
            </span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm">
              <Camera className="w-3.5 h-3.5 mr-1.5" /> Photography Paradise
            </span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* =================================================================
          QUICK FACTS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickFacts.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="card-moroccan p-4 text-center"
                >
                  <FactIcon className="w-5 h-5 text-[#A0522D] mx-auto mb-2" />
                  <p className="text-xs text-[#1A1814]/60 mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm font-semibold text-[#1A1814]">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          OVERVIEW / INTRODUCTION
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-6">
              Gateway Between the Atlas Mountains and the Sahara
            </h2>
            <p className="text-lg text-[#1A1814]/70 leading-relaxed mb-4">
              Ouarzazate (pronounced &ldquo;war-za-zat&rdquo;) sits at 1,160 meters above sea level on
              a vast plateau where the High Atlas Mountains give way to the hammada, the stony pre-Saharan
              desert stretching south toward the dunes. This strategic position at the crossroads of ancient
              caravan routes between sub-Saharan Africa and the Mediterranean made it a trading hub for
              centuries, controlled by powerful Berber warlords who built the magnificent kasbahs that still
              dot the landscape.
            </p>
            <p className="text-lg text-[#1A1814]/70 leading-relaxed mb-4">
              The French Protectorate transformed Ouarzazate into a garrison town in the 1920s, but it was
              the film industry that gave the city its modern identity. The extraordinary desert light &mdash;
              330 days of sunshine per year with crystal-clear visibility &mdash; combined with a landscape
              that can convincingly double for ancient Egypt, biblical Jerusalem, imperial Rome, or the
              surface of another planet, has made Ouarzazate the most in-demand filming location in Africa
              and one of the busiest in the world.
            </p>
            <p className="text-lg text-[#1A1814]/70 leading-relaxed mb-4">
              Today, Ouarzazate serves a triple role: it is Morocco&apos;s cinematic capital, the
              administrative center of the Draa-Tafilalet region, and the primary gateway for travelers
              heading into the Sahara. From here, the great valleys of the Draa, the Dades, and the Todra
              radiate outward like the fingers of an open hand, each offering its own distinct landscape
              of gorges, oases, kasbahs, and palm groves.
            </p>
            <p className="text-lg text-[#1A1814]/70 leading-relaxed">
              Whether you come for the film studios, the UNESCO-listed ksar of Ait Ben Haddou, the
              roses of the M&apos;Goun Valley, the towering walls of the Todra Gorge, or the silence
              of the Sahara dunes at dawn, Ouarzazate is the starting point for adventures that will
              redefine your understanding of what Morocco has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================
          SEASONAL WEATHER GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Thermometer className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              When to Visit Ouarzazate
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            The desert climate means extreme temperature variations between seasons and between day and
            night. Planning your visit around the weather makes all the difference.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalWeather.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div
                  key={season.season}
                  className="card-moroccan p-6 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A0522D]/10 text-[#A0522D] mb-4 group-hover:bg-[#A0522D] group-hover:text-white transition-colors">
                    <SeasonIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                    {season.season}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#A0522D] font-semibold mb-3">
                    <span>{season.tempHigh} C high</span>
                    <span className="text-[#1A1814]/30">|</span>
                    <span>{season.tempLow} C low</span>
                  </div>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    {season.description}
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
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Top Attractions in Ouarzazate
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            From the world&apos;s largest film studios to a UNESCO ksar that has featured in dozens of
            blockbusters, Ouarzazate&apos;s attractions are unlike anything else in Morocco.
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
                      alt={`${attraction.name} in Ouarzazate, Morocco - citytoursmorocco.com`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-3 left-3">
                      <span className="tag bg-white/90 text-[#A0522D] font-semibold">
                        {attraction.type}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5 fill-[#C4960C] text-[#C4960C]" />
                      <span className="text-white text-xs font-semibold">
                        {attraction.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-[#1A1814] mb-1">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-[#A0522D] font-[family-name:var(--font-heading)] font-semibold mb-3">
                      {attraction.subtitle}
                    </p>
                    <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-4">
                      {attraction.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-[#1A1814]/70 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {attraction.hours}
                      </span>
                      <span className="flex items-center gap-1">
                        <Info className="w-3.5 h-3.5" /> {attraction.price}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[#C4960C]/10">
                      <Info className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[#1A1814]/70 leading-relaxed">
                        <span className="font-semibold text-[#C4960C]">
                          Tip:
                        </span>{' '}
                        {attraction.tip}
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
          FILM HISTORY - NOTABLE PRODUCTIONS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Film className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Ouarzazate on Screen: 60 Years of Cinema History
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            From David Lean&apos;s epic masterpiece in 1962 to the latest HBO productions, Ouarzazate
            has been the backdrop for some of the most iconic scenes in film and television history.
          </p>

          <div className="max-w-4xl">
            <p className="text-[#1A1814]/70 leading-relaxed mb-6">
              The story of Ouarzazate as a film destination begins in 1962, when David Lean arrived to
              film scenes for &ldquo;Lawrence of Arabia,&rdquo; arguably the greatest epic ever committed
              to celluloid. Lean was captivated by the desert light and the landscapes around Ait Ben
              Haddou, and his production established the template that would make Ouarzazate the default
              location for Hollywood whenever a script called for desert, ancient cities, or biblical
              landscapes.
            </p>
            <p className="text-[#1A1814]/70 leading-relaxed mb-6">
              The construction of Atlas Film Studios in 1983 by Italian producer Mohamed Belghmi
              formalized what had been an informal arrangement. CLA Studios followed, and together these
              facilities have hosted an unbroken stream of major productions. Ridley Scott filmed
              &ldquo;Gladiator&rdquo; here in 2000, reconstructing the Roman Colosseum in the desert.
              Martin Scorsese built a Tibetan monastery for &ldquo;Kundun.&rdquo; HBO transformed the
              landscape into the slave cities of Astapor and Yunkai for &ldquo;Game of Thrones.&rdquo;
            </p>
            <p className="text-[#1A1814]/70 leading-relaxed mb-8">
              Today, the studios and surrounding desert remain among the most active filming locations
              in the world. The combination of 330 days of sunshine, diverse landscapes within a short
              drive, low costs, experienced local crews, and the Moroccan government&apos;s film-friendly
              policies continue to attract productions from around the globe. Walking through the studios,
              you encounter the physical remnants of these productions: Egyptian temples, Roman arenas,
              medieval fortresses, and alien planets, all standing side by side in the Moroccan desert sun.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {notableFilms.map((film) => (
                <div
                  key={film.title}
                  className="card-moroccan p-4 flex items-center gap-3"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#A0522D]/10 flex-shrink-0">
                    <Film className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1A1814]">
                      {film.title}
                    </p>
                    <p className="text-xs text-[#1A1814]/60">
                      {film.year} &middot; {film.director}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          DRAA VALLEY
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              The Draa Valley: Morocco&apos;s Longest River and Grandest Palm Groves
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-4 max-w-3xl">
            Stretching over 1,100 kilometers from the High Atlas to the Atlantic (though it rarely
            reaches the sea anymore), the Draa is Morocco&apos;s longest river. The valley it carves
            south of Ouarzazate is one of the most beautiful and historically significant landscapes
            in North Africa.
          </p>
          <p className="text-[#1A1814]/70 mb-8 max-w-3xl">
            The road from Ouarzazate to Zagora (160 km, roughly 3 hours) passes through a continuous
            ribbon of palm groves, ancient kasbahs, and Berber villages where the rhythms of life have
            changed little in centuries. The Draa Valley was a vital link in the trans-Saharan trade
            routes, and the kasbahs that line the river were built to protect the precious date harvests
            and control the caravan trade.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {draaHighlights.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-moroccan p-6 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A0522D]/10 text-[#A0522D] mb-4 group-hover:bg-[#A0522D] group-hover:text-white transition-colors">
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          SKOURA PALM GROVE & KASBAHS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Castle className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Skoura: The Palm Grove of a Thousand Kasbahs
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-4 max-w-3xl">
            Just 42 kilometers east of Ouarzazate on the road to the Dades Gorge, the Skoura
            palm grove is one of the most enchanting landscapes in southern Morocco. This vast
            oasis, watered by the Dades River and a network of ancient irrigation channels called
            seguias, contains over 700,000 palm trees and dozens of historic kasbahs in various
            states of preservation.
          </p>
          <p className="text-[#1A1814]/70 mb-8 max-w-3xl">
            The palm grove is best explored on foot, by bicycle, or on a mule, allowing you to
            discover hidden kasbahs, cross ancient bridges, and meet the farmers who tend the palms,
            almond trees, and olive groves that have sustained life here for centuries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skouraHighlights.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-moroccan p-6 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10 text-[#A0522D] group-hover:bg-[#A0522D] group-hover:text-white transition-colors">
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          DADES & TODRA GORGES
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Mountain className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Dades and Todra Gorges: Day Trips into the Atlas
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-3xl">
            Two of Morocco&apos;s most spectacular natural wonders are within easy reach of
            Ouarzazate. The Dades and Todra gorges carve dramatic paths through the eastern High
            Atlas, creating landscapes of towering rock walls, verdant valley floors, and winding
            mountain roads that rank among the finest drives in the country.
          </p>

          <div className="relative">
            <img
              src="/images/hero-dades-valley-road.webp"
              alt="Winding road through the Dades Valley with dramatic gorge walls near Ouarzazate, Morocco - citytoursmorocco.com"
              className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            {gorgesData.map((gorge) => (
              <div
                key={gorge.name}
                className="card-moroccan p-6 lg:p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-[#1A1814]">
                    {gorge.name}
                  </h3>
                  <span className="tag bg-[#A0522D]/10 text-[#A0522D] font-semibold text-xs">
                    <Car className="w-3.5 h-3.5 mr-1" /> {gorge.distance}
                  </span>
                </div>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-6">
                  {gorge.description}
                </p>

                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[#1A1814] mb-3">
                  Highlights
                </h4>
                <div className="space-y-2 mb-6">
                  {gorge.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 text-[#C4960C] mt-1 flex-shrink-0" />
                      <span className="text-sm text-[#1A1814]/70 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-2 p-3 rounded-lg bg-[#C4960C]/10">
                  <Info className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-[#1A1814]/70 leading-relaxed">
                    <span className="font-semibold text-[#C4960C]">
                      Tip:
                    </span>{' '}
                    {gorge.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          ROSE VALLEY & KELAAT M'GOUNA
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Sunrise className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              The Valley of Roses and Kelaat M&apos;Gouna
            </h2>
          </div>

          <div className="max-w-4xl">
            <p className="text-[#1A1814]/70 leading-relaxed mb-6">
              {roseValleyInfo.overview}
            </p>

            <div className="card-moroccan p-6 lg:p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  The Rose Festival (Moussem des Roses)
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-4">
                {roseValleyInfo.festival}
              </p>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-[#C4960C]/10">
                <Calendar className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-[#1A1814]/70 leading-relaxed">
                  <span className="font-semibold text-[#C4960C]">
                    Best Time:
                  </span>{' '}
                  {roseValleyInfo.bestTime}
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6 lg:p-8">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-4">
                Rose Products of the Valley
              </h3>
              <div className="space-y-3">
                {roseValleyInfo.products.map((product, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Star className="w-3.5 h-3.5 text-[#A0522D] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#1A1814]/70 leading-relaxed">
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE TO EAT
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Where to Eat in Ouarzazate
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            Ouarzazate&apos;s dining scene reflects its position at the crossroads of Berber, Arab,
            and French culinary traditions. From simple local eateries to refined kasbah restaurants,
            the city offers excellent food at every price point.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.name}
                className="card-moroccan p-6 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] group-hover:text-[#A0522D] transition-colors">
                    {restaurant.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="tag bg-[#A0522D]/10 text-[#A0522D] text-xs">
                    {restaurant.cuisine}
                  </span>
                  <span className="tag bg-[#C4960C]/10 text-[#C4960C] text-xs">
                    {restaurant.priceRange}
                  </span>
                </div>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-3">
                  {restaurant.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#C4960C] font-semibold">
                  <Star className="w-3.5 h-3.5 fill-[#C4960C]" />
                  Must try: {restaurant.mustTry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE TO STAY
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Hotel className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Where to Stay in Ouarzazate
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            Ouarzazate offers accommodation ranging from converted historic kasbahs to comfortable
            riads, guest houses, and even luxury desert camps. Sleeping in a centuries-old kasbah
            is an experience unique to this region of Morocco.
          </p>

          <div className="space-y-8">
            {accommodations.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10 text-[#A0522D]">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1A1814]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.options.map((option) => (
                      <div
                        key={option.name}
                        className="card-moroccan p-6"
                      >
                        <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-1">
                          {option.name}
                        </h4>
                        <p className="text-sm text-[#C4960C] font-semibold mb-3">
                          {option.priceRange}
                        </p>
                        <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                          {option.description}
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
          GETTING THERE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Car className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Getting to Ouarzazate
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            Reaching Ouarzazate is part of the adventure. The drive from Marrakech over the Tizi
            n&apos;Tichka pass is one of the most spectacular road journeys in Morocco.
          </p>

          <div className="space-y-6">
            {gettingThereRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div
                  key={route.title}
                  className="card-moroccan p-6 lg:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10 text-[#A0522D]">
                        <RouteIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814]">
                        {route.title}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <span className="tag bg-[#A0522D]/10 text-[#A0522D] text-xs">
                        {route.distance}
                      </span>
                      <span className="tag bg-[#C4960C]/10 text-[#C4960C] text-xs">
                        {route.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-4">
                    {route.description}
                  </p>
                  <div className="space-y-2">
                    {route.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-[#A0522D] mt-1 flex-shrink-0" />
                        <span className="text-sm text-[#1A1814]/70 leading-relaxed">
                          {tip}
                        </span>
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
          PHOTOGRAPHY GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Photography Guide: Capturing Ouarzazate
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-4 max-w-3xl">
            Ouarzazate and its surroundings are a photographer&apos;s paradise. The extraordinary
            desert light, dramatic landscapes, ancient architecture, and vivid contrasts between
            oasis greens and desert reds create endless opportunities for stunning images.
          </p>
          <p className="text-[#1A1814]/70 mb-8 max-w-3xl">
            The same qualities that attract the world&apos;s film industry &mdash; 330 days of sunshine,
            crystalline air, and landscapes that change character by the hour &mdash; make this region
            one of the most rewarding photography destinations in all of North Africa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographySpots.map((spot) => (
              <div
                key={spot.location}
                className="card-moroccan p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Camera className="w-4 h-4 text-[#A0522D]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                    {spot.location}
                  </h3>
                </div>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-3">
                  {spot.description}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-[#A0522D]">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-semibold">Best light:</span>{' '}
                    <span className="text-[#1A1814]/60">{spot.bestTime}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#C4960C]">
                    <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold">Gear:</span>{' '}
                    <span className="text-[#1A1814]/60">{spot.gearTip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photography tips callout */}
          <div className="card-moroccan p-6 lg:p-8 mt-8 max-w-4xl">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814] mb-4">
              General Photography Tips for the Region
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Sun className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    <span className="font-semibold text-[#1A1814]">Golden hours are paramount:</span> The desert
                    light is harsh from 11 AM to 3 PM. Shoot early morning and late afternoon for the warm, directional
                    light that makes this region so photogenic.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    <span className="font-semibold text-[#1A1814]">Protect your gear:</span> Fine desert dust is
                    the enemy of cameras. Bring lens cleaning supplies, use a UV filter as lens protection, and keep
                    your camera bag sealed when not shooting.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Eye className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    <span className="font-semibold text-[#1A1814]">People photography:</span> Always ask permission
                    before photographing locals. Many Berber people are happy to be photographed but appreciate being
                    asked first. A small tip of 5-10 MAD is customary.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Compass className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    <span className="font-semibold text-[#1A1814]">Carry backup power:</span> The cold desert nights
                    drain batteries quickly. Bring at least two spare batteries and keep them warm in your pocket.
                    Charging opportunities in remote areas can be limited.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Mountain className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    <span className="font-semibold text-[#1A1814]">Scale and context:</span> The landscapes are
                    vast and can appear flat in photographs. Include people, vehicles, or animals to convey the
                    enormous scale of the gorges, kasbahs, and desert panoramas.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Camera className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    <span className="font-semibold text-[#1A1814]">Drone regulations:</span> Drone use in Morocco
                    requires authorization from the DGAC (civil aviation authority). Many tourists fly drones
                    informally, but be aware of the legal requirements and avoid flying near military areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          PRACTICAL INFORMATION
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Info className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Practical Information
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            Essential tips for making the most of your visit to Ouarzazate and the surrounding region.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A0522D]/10 text-[#A0522D] mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Safety
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Ouarzazate is extremely safe for tourists. The local population is hospitable and
                accustomed to visitors. Standard travel precautions apply: keep valuables secure,
                drink bottled water, and use licensed guides for remote excursions. The tourist
                police can be reached at 19.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A0522D]/10 text-[#A0522D] mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Connectivity
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Mobile coverage (Maroc Telecom, Orange, inwi) is good in Ouarzazate city and along main
                roads. Signal becomes patchy in the gorges and remote areas. Wi-Fi is available in most
                hotels and cafes. Download offline maps before heading into the countryside.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A0522D]/10 text-[#A0522D] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Getting Around Town
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Ouarzazate is a small, manageable city. The center can be explored on foot. Petit taxis
                (blue in color) are inexpensive for trips within the city. For excursions to Ait Ben
                Haddou, the gorges, or the Draa Valley, hire a private car with driver through your
                hotel or a local agency.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A0522D]/10 text-[#A0522D] mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Sun Protection
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                The desert sun is intense year-round. SPF 50+ sunscreen, a wide-brimmed hat, and quality
                sunglasses are essential. The UV index regularly exceeds 10 in summer. Stay hydrated by
                drinking at least 3 liters of water per day, more if hiking or exploring.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A0522D]/10 text-[#A0522D] mb-4">
                <Footprints className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Local Guides
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                A knowledgeable local guide transforms the experience of visiting Ait Ben Haddou, the
                studios, and the kasbahs. Official guides wear badges and can be arranged through your
                hotel or the tourist office on Avenue Mohammed V. Expect to pay 300-500 MAD for a
                full-day guide.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A0522D]/10 text-[#A0522D] mb-4">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Local Specialties
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                The cuisine of the Ouarzazate region features desert specialties: tangia (slow-cooked
                lamb), madfouna (Berber pizza), dates from the Draa Valley, almond-based sweets, and
                the fragrant tagines that are the staple of every Moroccan table. Local mint tea here
                tends to be sweeter than in the north.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SUGGESTED ITINERARY
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Suggested 3-Day Ouarzazate Itinerary
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            Three days gives you time to explore the city, visit the major sites, and take an
            unforgettable day trip into the gorges or the Draa Valley.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D] text-white font-bold text-sm">
                  01
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814]">
                  Day 1: Ouarzazate City and Ait Ben Haddou
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sunrise className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Morning</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Visit Atlas Film Studios when they open at 8:15 AM for the best light and fewest crowds</p>
                    <p className="text-sm text-[#1A1814]/60">Explore the Egyptian, Roman, and Game of Thrones sets with a local guide</p>
                    <p className="text-sm text-[#1A1814]/60">Stop at the Cinema Museum near the studios for additional context</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Afternoon</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Lunch at Chez Dimitri, the legendary restaurant of film crews</p>
                    <p className="text-sm text-[#1A1814]/60">Drive 30 minutes to Ait Ben Haddou (arrange through your hotel)</p>
                    <p className="text-sm text-[#1A1814]/60">Cross the river and explore the ksar, climbing to the granary summit</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Evening</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Watch the sunset paint Ait Ben Haddou in amber and gold tones</p>
                    <p className="text-sm text-[#1A1814]/60">Return to Ouarzazate for dinner at Restaurant Douyria</p>
                    <p className="text-sm text-[#1A1814]/60">Stroll along Avenue Mohammed V and enjoy mint tea at a local cafe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D] text-white font-bold text-sm">
                  02
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814]">
                  Day 2: Dades Gorge and the Valley of Roses
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sunrise className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Morning</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Early departure east through Skoura palm grove</p>
                    <p className="text-sm text-[#1A1814]/60">Stop at Kasbah Amridil in Skoura for a guided tour</p>
                    <p className="text-sm text-[#1A1814]/60">Continue through Kelaat M&apos;Gouna (Rose Valley) to the Dades Gorge</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Afternoon</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Drive the famous hairpin bends of the Dades road</p>
                    <p className="text-sm text-[#1A1814]/60">Lunch at a guesthouse in the gorge with canyon views</p>
                    <p className="text-sm text-[#1A1814]/60">Photograph the Monkey Fingers rock formations</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Evening</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Return via the Valley of Roses, stopping at a rosewater cooperative</p>
                    <p className="text-sm text-[#1A1814]/60">Dinner at Accord Majeur for French-Moroccan fusion</p>
                    <p className="text-sm text-[#1A1814]/60">Stargazing from your hotel rooftop (the desert skies are remarkable)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="card-moroccan p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D] text-white font-bold text-sm">
                  03
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814]">
                  Day 3: Kasbah Taourirt, Fint Oasis, and Departure
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sunrise className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Morning</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Visit Kasbah Taourirt when it opens for crowd-free exploration</p>
                    <p className="text-sm text-[#1A1814]/60">Explore the decorated rooms and climb to the rooftop terrace</p>
                    <p className="text-sm text-[#1A1814]/60">Browse the Ensemble Artisanal next door for fixed-price crafts</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Afternoon</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Drive or arrange transport to Fint Oasis (30 minutes)</p>
                    <p className="text-sm text-[#1A1814]/60">Walk through the hidden palm grove and meet local farmers</p>
                    <p className="text-sm text-[#1A1814]/60">Enjoy a simple traditional lunch prepared by a local family</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-[#C4960C]" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">Evening</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1814]/60">Final walk through Ouarzazate as the afternoon light softens</p>
                    <p className="text-sm text-[#1A1814]/60">Pick up last souvenirs: rosewater, dates, or Berber jewelry</p>
                    <p className="text-sm text-[#1A1814]/60">Depart for Marrakech via the Tichka pass or continue south to the Sahara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          FAQ SECTION
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Info className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Frequently Asked Questions About Ouarzazate
            </h2>
          </div>
          <p className="text-[#1A1814]/70 mb-8 max-w-2xl">
            Everything you need to know before visiting Morocco&apos;s cinematic capital and Sahara gateway.
          </p>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-moroccan p-6"
              >
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-start gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed pl-8">
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
              Ouarzazate in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1A1814', opacity: 0.7 }}>
              Where ancient kasbahs meet Hollywood film sets &mdash; the cinematic landscapes
              of Morocco&apos;s desert heartland captured at the golden hour.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/hero-ouarzazate.webp', alt: 'Panoramic view of Ouarzazate with the Atlas Mountains in the background' },
              { src: '/images/hero-ouarzazate-kasbah.webp', alt: 'Kasbah Taourirt earthen fortress in the heart of Ouarzazate at sunset' },
              { src: '/images/hero-ouarzazate-studios.webp', alt: 'Atlas Film Studios set pieces in Ouarzazate with desert landscape' },
              { src: '/images/hero-ait-benhaddou-sunset.webp', alt: 'Ait Ben Haddou UNESCO ksar glowing amber at sunset across the river' },
              { src: '/images/photo-atlas-film-studios.webp', alt: 'Film set props and ancient Egyptian temple replicas at Atlas Studios Ouarzazate' },
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
            src="/images/hero-morocco-hero.webp"
            alt="Panoramic view of kasbahs and desert landscape near Ouarzazate, Morocco - citytoursmorocco.com"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="container-morocco relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Film className="w-10 h-10 text-[#C4960C] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ouarzazate Awaits
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Where the Atlas Mountains yield to the Sahara, where ancient kasbahs stand sentinel over
              palm-filled valleys, and where the world&apos;s greatest filmmakers have come for over sixty
              years to capture the light that exists nowhere else on Earth. Ouarzazate is not just a
              destination &mdash; it is the gateway to adventures that will stay with you for a lifetime.
              Start planning your journey to the Hollywood of Africa today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent btn-lg rounded-full"
              >
                <Compass className="w-5 h-5" />
                Plan Your Ouarzazate Trip
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

      {/* =================================================================
          EXPLORE MORE
          ================================================================= */}
      <ExploreMore
        currentCategory="cities"
        currentHref="/ouarzazate"
        title="Continue Exploring Morocco"
      />
    </>
  );
}

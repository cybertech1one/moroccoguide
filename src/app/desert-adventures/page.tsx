import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Compass,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle,
  Shield,
  Sun,
  ArrowRight,
  AlertTriangle,
  ThermometerSun,
  Bike,
  Car,
  Tent,
  Eye,
  HelpCircle,
  Users,
  Zap,
  Mountain,
  Wind,
  Flame,
  Heart,
  Phone,
  BookOpen,
  Flag,
  Sparkles,
  CircleDot,
  Timer,
  Footprints,
  Camera,
  Moon,
  CloudSun,
  Droplets,
  Package,
  BadgeCheck,
  CircleAlert,
  Glasses,
  Route,
  Trophy,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desert Adventures Morocco | Quad Biking, Sandboarding, Buggy, 4x4, Camel Trekking & Glamping',
  description:
    'Complete guide to Morocco desert adventures: quad biking in Marrakech Palm Grove and Merzouga, sandboarding Erg Chebbi, buggy tours in Agafay, 4x4 Sahara expeditions, camel trekking, luxury glamping, and stargazing safaris. Real prices in MAD, verified operators, and safety tips.',
  keywords: [
    'desert adventures morocco',
    'quad biking marrakech',
    'sandboarding erg chebbi',
    'buggy tour agafay',
    '4x4 sahara tour morocco',
    'camel trekking merzouga',
    'desert glamping morocco',
    'stargazing sahara',
    'agafay desert',
    'erg chigaga',
    'erg chebbi merzouga',
    'motorcycle desert morocco',
    'desert camping morocco',
    'sahara desert tour',
    'morocco desert activities',
    'quad biking merzouga',
  ],
  openGraph: {
    title: 'Desert Adventures Morocco | Quad Biking, Sandboarding, Buggy, 4x4 & Glamping',
    description:
      'The ultimate guide to adrenaline-fueled desert adventures in Morocco. Quad biking, sandboarding, buggy tours, 4x4 expeditions, camel trekking, luxury glamping, and stargazing in the Sahara.',
    url: 'https://citytoursmorocco.com/desert-adventures',
    images: [
      {
        url: '/images/hero-quad-biking.webp',
        width: 1200,
        height: 630,
        alt: 'Quad biking through the golden dunes of the Sahara Desert in Morocco',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Morocco Desert Adventures',
  description:
    'Comprehensive guide to desert adventures in Morocco including quad biking, sandboarding, buggy tours, 4x4 expeditions, camel trekking, luxury glamping, and stargazing safaris across the Sahara, Agafay, and beyond.',
  url: 'https://citytoursmorocco.com/desert-adventures',
  touristType: ['Adventure tourists', 'Thrill seekers', 'Desert explorers'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.1,
    longitude: -4.0,
  },
};

/* ------------------------------------------------------------------ */
/*  DATA: Quad Biking Locations                                       */
/* ------------------------------------------------------------------ */
const quadBikingLocations = [
  {
    name: 'Marrakech Palm Grove (Palmeraie)',
    description:
      'The most popular quad biking destination in Morocco. The Palmeraie is a vast palm oasis just 15 minutes from the Marrakech medina, offering well-established trails through palm groves, Berber villages, and dusty tracks. Perfect for first-timers and families.',
    duration: '2 hours (typical)',
    price: '400-700 MAD per person',
    terrain: 'Flat to gently rolling, dirt tracks, palm grove paths',
    operators: [
      'Palmeraie Quad Biking (oldest operator, well-maintained bikes)',
      'Dunes & Desert Marrakech (combo packages with camel rides)',
      'Marrakech Quad Experience (new Yamaha fleet)',
    ],
    tips: 'Morning sessions are cooler and less dusty. Afternoon light is better for photos. Expect to share trails with other groups during peak season (October-March).',
  },
  {
    name: 'Merzouga Dunes (Erg Chebbi)',
    description:
      'Quad biking on actual Saharan sand dunes is a completely different experience from the Palmeraie. The terrain around Merzouga includes hard-packed desert, soft sand, and the edges of the towering Erg Chebbi dunes. More challenging and more rewarding.',
    duration: '1-3 hours',
    price: '500-900 MAD per person',
    terrain: 'Mixed: hard desert floor, soft sand, dune edges',
    operators: [
      'Merzouga Desert Activities (local Berber-owned)',
      'Camel Trek & Quad Merzouga (combined experiences)',
      'Sahara Quad Experience (guided dune circuits)',
    ],
    tips: 'Riding on soft sand requires more skill. Ask for an experienced guide if it is your first time on dunes. Sunrise quad tours are spectacular but require a 5am start.',
  },
  {
    name: 'Agafay Desert',
    description:
      'A rocky, lunar-like desert landscape just 45 minutes from Marrakech. The Agafay is not sand dunes but rather a stark, beautiful stone desert with views of the Atlas Mountains. Quad biking here feels like riding on another planet.',
    duration: '1.5-2.5 hours',
    price: '450-800 MAD per person',
    terrain: 'Rocky desert, dried river beds, gravel tracks',
    operators: [
      'Agafay Desert Quad (sunset tours with tea)',
      "Terres d'Amanar (adventure park with quad option)",
      'Scarabeo Camp Quad Tours (luxury camp-based)',
    ],
    tips: 'The rocky terrain can be harder on your body than sand. Wear sturdy shoes. Sunset tours are the most popular and photogenic. Combine with dinner at a glamping camp for a full evening experience.',
  },
  {
    name: 'Essaouira Coast',
    description:
      'Quad biking along the Atlantic coast near Essaouira offers a unique combination of beach, dunes, and argan forest. The coastal wind keeps things cool even in summer, and the landscape is strikingly different from inland desert.',
    duration: '2-3 hours',
    price: '500-800 MAD per person',
    terrain: 'Beach sand, coastal dunes, forest trails',
    operators: [
      'Essaouira Quad Aventure',
      'Palma Quad Essaouira',
      'Ranch de Diabat (combo horse and quad)',
    ],
    tips: 'The wind can be intense, especially afternoon. Bring a buff or scarf for your face. The beach sections at low tide are the best part.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Sandboarding Locations                                      */
/* ------------------------------------------------------------------ */
const sandboardingLocations = [
  {
    name: 'Erg Chebbi (Merzouga)',
    description:
      'The premier sandboarding destination in Morocco. Erg Chebbi features dunes reaching 150 meters in height, with long, steep faces perfect for carving turns or bombing straight down. The sand is fine and golden, and the setting is spectacular.',
    bestDunes: 'The western face of the main dune ridge offers the longest runs, up to 200 meters. The dunes directly behind most desert camps provide convenient access for repeated runs.',
    rental: 'Boards available at most desert camps and guesthouses in Merzouga village. Rental is typically 100-200 MAD per day, or included in desert camp packages.',
    guided: '200-400 MAD for a 2-hour guided session with transport to the best dunes and instruction.',
    freeOption: 'Hike up any dune in the Erg Chebbi system and slide down. No equipment rental needed if you bring or improvise a board. Many travelers use makeshift sleds.',
  },
  {
    name: "Erg Chigaga (M'hamid)",
    description:
      "More remote and less visited than Erg Chebbi, Erg Chigaga offers pristine dunes with virtually no other tourists. The dunes are equally impressive but require a 4x4 to reach (about 50km from M'hamid village across open desert).",
    bestDunes: 'The central dune field has the steepest faces. Because fewer people visit, the sand is often smoother and untouched, perfect for clean lines.',
    rental: 'Boards available at the luxury camps in Erg Chigaga (Erg Chigaga Luxury Camp, Azalai Desert Camp). Typically included in overnight stays.',
    guided: "300-500 MAD for a guided session, usually combined with 4x4 transport from M'hamid.",
    freeOption: 'You need 4x4 access to reach Erg Chigaga, so truly free sandboarding is not practical here. Budget for transport at minimum.',
  },
];

const sandboardingTips = [
  {
    title: 'Wax your board',
    detail: 'Saharan sand is fine but still creates friction. Candle wax or surf wax on the base of your board dramatically improves speed. Most rental shops will wax boards for you.',
  },
  {
    title: 'Stand or sit',
    detail: 'Standing (snowboard-style) is more fun but harder. Sitting or lying on the board is easier and still thrilling. Beginners should start seated and progress to standing.',
  },
  {
    title: 'Climb smart',
    detail: 'Walking up soft sand dunes is exhausting. Zigzag up the ridge line where the sand is firmer. Take your time and hydrate. Each run takes 2-5 minutes down but 15-30 minutes to climb back up.',
  },
  {
    title: 'Timing matters',
    detail: 'Early morning or late afternoon is best. Midday sand temperatures can exceed 60 degrees Celsius and will burn bare feet and hands. The sand is also firmer (faster) when cool.',
  },
  {
    title: 'Protect your eyes',
    detail: 'Goggles or tight-fitting sunglasses are essential. Sand spray at speed will get in your eyes without protection. A buff over your nose and mouth helps too.',
  },
  {
    title: 'Footwear',
    detail: 'Wear closed shoes or sandals with secure straps for the climb. Go barefoot on the board if you want more control, but only when the sand is cool.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Buggy & Side-by-Side                                        */
/* ------------------------------------------------------------------ */
const buggyLocations = [
  {
    name: 'Agafay Desert (near Marrakech)',
    description:
      'The most accessible buggy experience in Morocco. Agafay is a 45-minute drive from Marrakech, and its rocky, undulating terrain is perfect for side-by-side vehicles. The backdrop of the snow-capped Atlas Mountains makes for incredible photos.',
    vehicles: 'Can-Am Maverick, Polaris RZR, and custom dune buggies. Most operators offer 2-seater and 4-seater options.',
    duration: '1.5-2.5 hours',
    price: '800-1,500 MAD per buggy (not per person)',
    operators: [
      'Agafay Buggy Adventure (newest Polaris RZR fleet, GPS-guided routes)',
      "Terres d'Amanar (eco-adventure park, combo activities)",
      'MyTripTailor Agafay (English-speaking guides, GoPro included)',
    ],
    tips: 'Buggies are louder and faster than quads. Wear the provided helmet and goggles. The driver must be 18+ with a valid driving license. Sunset tours are most popular.',
  },
  {
    name: 'Merzouga',
    description:
      'Buggy tours around the Erg Chebbi dunes combine hard desert floor sections with excursions to the dune edges. Some operators take you through Berber villages and to seasonal desert lakes (Dayet Srij).',
    vehicles: 'Mostly custom-built dune buggies. Polaris RZRs at premium operators.',
    duration: '2-3 hours',
    price: '900-1,500 MAD per buggy',
    operators: [
      'Merzouga Buggy Tours (local family operation, excellent safety record)',
      'Sahara Buggy Experience (combined with camel sunset ride)',
      'Morocco Desert Buggy (multi-day tour options)',
    ],
    tips: 'The desert floor around Merzouga can be surprisingly rough. Full-face helmets are recommended. Bring a bandana for dust. Try to book the first morning slot when the sand is packed and fast.',
  },
  {
    name: 'Ouarzazate Surrounds',
    description:
      'The dramatic landscape around Ouarzazate, known as the "Hollywood of Africa," offers buggy routes through kasbahs, dry river beds, and film-set terrain. A unique and less crowded alternative.',
    vehicles: 'Mix of buggies and side-by-sides depending on operator.',
    duration: '2-4 hours',
    price: '700-1,200 MAD per buggy',
    operators: [
      'Atlas Film Studios Buggy Tour (routes past movie sets)',
      'Ouarzazate Adventures (desert and oasis routes)',
    ],
    tips: 'Combine with a visit to Ait Benhaddou kasbah for a full day. The terrain here is more cinematic than anywhere else in Morocco.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: 4x4 Desert Routes                                          */
/* ------------------------------------------------------------------ */
const desertRoutes = [
  {
    name: 'Classic Marrakech to Merzouga (3 Days)',
    description:
      "The most popular desert route in Morocco. Cross the High Atlas via Tizi n'Tichka pass (2,260m), descend to Ouarzazate, drive through the Dades and Todra Gorges, and arrive at the towering dunes of Erg Chebbi. Return via a different route for variety.",
    itinerary: [
      'Day 1: Marrakech - Tizi n\'Tichka - Ait Benhaddou - Ouarzazate - Dades Gorge (350km)',
      'Day 2: Dades Gorge - Todra Gorge - Erfoud - Merzouga. Camel trek to desert camp, overnight in Sahara (300km + camel trek)',
      'Day 3: Sunrise in desert - Rissani - Errachidia - Midelt - Ifrane - Fes (or return to Marrakech via Ouarzazate, 480km)',
    ],
    price: '2,500-4,500 MAD per person (based on 2-4 people sharing). Includes vehicle, driver-guide, fuel, accommodation, and most meals.',
    highlights: "Tizi n'Tichka pass, Ait Benhaddou UNESCO site, Dades Gorge, Todra Gorge, Erg Chebbi dunes, camel trek, desert sunrise",
    operators: [
      'Morocco Desert Tours (20+ years, excellent fleet of Land Cruisers)',
      'Sahara Desert Trips (Berber-owned, authentic experiences)',
      'Grand Sahara Experience (luxury 4x4 with premium camps)',
    ],
  },
  {
    name: 'Draa Valley Route to Erg Chigaga (3-4 Days)',
    description:
      'A less-traveled route south from Ouarzazate through the stunning Draa Valley, the longest river valley in Morocco. Ends at the remote Erg Chigaga dunes, which are far more pristine and wild than Erg Chebbi.',
    itinerary: [
      'Day 1: Ouarzazate - Agdz - Draa Valley - Zagora (200km). Visit kasbahs and palm oases along the Draa River.',
      "Day 2: Zagora - Tamegroute (famous pottery) - M'hamid - 4x4 across open desert to Erg Chigaga (180km, last 50km off-road)",
      'Day 3: Full day at Erg Chigaga. Sandboarding, camel trekking, exploring the dune field. Overnight in luxury desert camp.',
      "Day 4: Return to M'hamid or Ouarzazate via alternative desert tracks (200km)",
    ],
    price: '3,000-5,000 MAD per person. Premium camps add 1,000-2,000 MAD per night.',
    highlights: "Draa Valley palm groves, Zagora, Tamegroute green pottery, M'hamid last oasis, open desert crossing, Erg Chigaga pristine dunes",
    operators: [
      'Chigaga Desert Adventures (specialists in Erg Chigaga)',
      'Caravane du Sud (Zagora-based, nomadic heritage tours)',
      'Wild Morocco (off-road specialists, expedition vehicles)',
    ],
  },
  {
    name: 'Deep South Expedition (5-7 Days)',
    description:
      'For serious desert enthusiasts. This expedition-grade route takes you from Ouarzazate through the remote Jebel Saghro mountains, across the Draa-Tafilalet region, and into rarely visited desert terrain including dry lakes, ancient rock engravings, and nomad camps.',
    itinerary: [
      'Day 1: Ouarzazate - Jebel Saghro foothills - N\'kob (village of 45 kasbahs)',
      'Day 2: N\'kob - Tazzarine - Alnif - fossil beds of the eastern Anti-Atlas',
      'Day 3: Alnif - Rissani - Merzouga. Explore Erg Chebbi by 4x4 and camel.',
      'Day 4: Merzouga - Khamlia (Gnawa music village) - desert tracks south to Mfis',
      "Day 5: Desert tracks to Ramlia - M'hamid el Ghizlane (the last oasis)",
      "Day 6: M'hamid - open desert crossing to Erg Chigaga. Full day at the dunes.",
      'Day 7: Return via Zagora and Draa Valley to Ouarzazate',
    ],
    price: '4,000-6,500 MAD per person per day. Fully inclusive with premium 4x4 vehicle, experienced desert guide, camps, and meals.',
    highlights: 'Jebel Saghro, 360-million-year-old fossils, Gnawa music, two major erg systems, nomad encounters, ancient caravan routes, total desert immersion',
    operators: [
      'Wild Morocco Expeditions (expedition-grade vehicles and guides)',
      'Sahara Services (deep desert specialists since 1998)',
      'Wilderness Wheels Morocco (small group, high quality)',
    ],
  },
  {
    name: 'Off-Road Atlas Crossing (2-3 Days)',
    description:
      'A high-altitude 4x4 adventure across remote Atlas Mountain tracks. This is not a sand desert trip but rather a mountain off-road experience through villages, passes, and valleys that are inaccessible by normal vehicles.',
    itinerary: [
      "Day 1: Marrakech - Ourika Valley - Tizi n'Test pass tracks - remote Berber villages (180km, mostly off-road)",
      'Day 2: Mountain tracks to Telouet - Ait Benhaddou - Ouarzazate (200km, mixed road and off-road)',
      'Day 3: Optional extension to Dades Gorge via unpaved mountain roads',
    ],
    price: '2,000-3,500 MAD per person per day. Vehicle, driver, fuel, and meals.',
    highlights: "Remote Atlas passes, traditional Berber villages, Telouet Kasbah, mountain panoramas, off-road technical driving",
    operators: [
      'Atlas Overland (Land Rover Defender specialists)',
      'Morocco Off-Road (custom 4x4 and motorcycle tours)',
      'Pathfinders Morocco (GPS-guided self-drive with backup vehicle)',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Camel Trekking                                              */
/* ------------------------------------------------------------------ */
const camelExperiences = [
  {
    type: 'Sunset Camel Ride (1-2 hours)',
    description:
      'The most popular desert experience in Morocco. A gentle ride from the edge of the dunes to a desert camp or viewpoint, timed to watch the sun set over the Sahara. Suitable for all ages and no experience needed.',
    locations: "Erg Chebbi (Merzouga), Erg Chigaga (M'hamid), Zagora outskirts",
    price: '200-400 MAD per person',
    includes: 'Camel, guide, tea at camp or viewpoint. Some include sandboarding or drumming.',
    reality: 'Expect a well-trodden route with other groups. The camels know the way and plod steadily. It is peaceful and photogenic, but not a wilderness experience. Riding for more than 30 minutes can be uncomfortable for the unaccustomed.',
  },
  {
    type: 'Overnight Desert Camp (1 night)',
    description:
      'The quintessential Sahara experience. Ride a camel to a camp in the dunes, enjoy a traditional dinner with Berber music and drumming, sleep under the stars or in a tent, and wake for sunrise over the desert.',
    locations: 'Erg Chebbi (most options), Erg Chigaga (more remote)',
    price: '500-1,500 MAD per person (budget camp) or 1,500-5,000 MAD (luxury camp)',
    includes: 'Camel ride (45 min each way), dinner, breakfast, tent, blankets. Luxury camps add private bathrooms, proper beds, and multi-course meals.',
    reality: 'Budget camps can be crowded and basic (shared tents, minimal facilities). Luxury camps are genuinely impressive with real beds, hot showers, and gourmet food. The camel ride in is the same either way. It gets cold at night (October-March) so bring warm layers.',
  },
  {
    type: 'Multi-Day Camel Trek (2-5 days)',
    description:
      'A genuine desert expedition on camelback, following ancient caravan routes through the sand sea. Sleep in nomad-style bivouacs, eat traditional desert food, and experience the Sahara as travelers have for millennia.',
    locations: "Erg Chebbi to Erg Chigaga (the ultimate trek), Draa Valley, M'hamid region",
    price: '1,500-3,000 MAD per person per day. All-inclusive: food, water, camel, guide, camp equipment.',
    includes: 'Everything. Your guide provides all meals, water, camping equipment, and camels. You carry only personal items.',
    reality: 'This is genuinely challenging. You will ride 4-6 hours per day, and your body will ache after the first day. The desert is vast, empty, and transformative. Bring maximum sun protection, lip balm, and padded cycling shorts. This is a life-changing experience for those who commit to it.',
  },
];

const camelFacts = [
  {
    question: 'Dromedary or camel?',
    answer: 'All Moroccan "camels" are actually dromedaries (one hump). True two-humped Bactrian camels are from Central Asia. Moroccans call them "camels" regardless, and so does every tour operator. Do not correct your guide.',
  },
  {
    question: 'Is camel riding ethical?',
    answer: 'Well-treated camels are adapted to desert life and carrying riders. Look for operators where camels appear healthy (good weight, no sores, alert behavior) and are not overworked. Avoid operators who run back-to-back trips with the same animals all day. Ask how many trips a camel does per day (2 maximum is reasonable).',
  },
  {
    question: 'What does it feel like?',
    answer: 'The mount and dismount are the most dramatic parts. Camels kneel, and you lurch forward and backward as they stand. Once walking, the gait is a slow, rolling sway. It is surprisingly high up. After 30 minutes, your inner thighs and lower back will notice. After 2 hours, you will understand why nomads are tough people.',
  },
  {
    question: 'What should I wear?',
    answer: 'Long loose pants (not tight jeans), closed shoes, a scarf or tagelmust for sun and sand, sunglasses, and sunscreen. Shorts will chafe badly. Flip-flops will fall off. Bring a small backpack with water, camera, and extra layers for evening.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Desert Glamping                                             */
/* ------------------------------------------------------------------ */
const glampingCamps = [
  {
    name: 'Kam Kam Dunes',
    location: 'Erg Chebbi, Merzouga',
    category: 'Ultra-Luxury',
    priceRange: '3,000-5,000 MAD per night',
    description:
      'One of the most acclaimed desert camps in Morocco. Private tented suites with king beds, en-suite bathrooms with hot showers, and a swimming pool in the desert. The camp is set in a private section of the dunes with no other camps visible.',
    includes: 'Dinner (4-course), breakfast, camel ride, sandboarding, Berber music evening, sunrise wake-up call.',
    highlights: [
      'Private dune location with no other camps visible',
      'Swimming pool surrounded by sand dunes',
      'Each tent has its own terrace and lounge area',
      'Professional kitchen with local and international cuisine',
    ],
  },
  {
    name: 'Sahara Stars Camp',
    location: 'Erg Chebbi, Merzouga',
    category: 'Luxury',
    priceRange: '1,500-3,000 MAD per night',
    description:
      'An excellent mid-luxury option with well-appointed tents, private bathrooms, and attentive service. The camp focuses on stargazing with minimal light pollution and provides telescopes for guests.',
    includes: 'Dinner, breakfast, camel ride, stargazing session, sand board use.',
    highlights: [
      'Dedicated stargazing area with telescopes',
      'Traditional Berber tent design with modern comforts',
      'Heated tents in winter months',
      'Gnawa music evening around the campfire',
    ],
  },
  {
    name: 'Erg Chigaga Luxury Camp',
    location: "Erg Chigaga, near M'hamid",
    category: 'Ultra-Luxury',
    priceRange: '3,500-5,000 MAD per night',
    description:
      "The most remote luxury camp in Morocco, set deep in the untouched Erg Chigaga dune system. Reaching the camp requires a 2-hour 4x4 journey across open desert, which adds to the exclusivity. Spacious Berber-style tents with handcrafted furniture.",
    includes: "4x4 transfer from M'hamid, all meals, camel trek, sandboarding, guided dune walk, sunset drinks.",
    highlights: [
      'Total isolation - no other camps or settlements for kilometers',
      'Handcrafted furnishings and traditional textiles',
      'Chef-prepared meals using local ingredients',
      'Private 4x4 excursions into the deep desert',
    ],
  },
  {
    name: 'Azalai Desert Camp',
    location: "Erg Chigaga, near M'hamid",
    category: 'Luxury',
    priceRange: '2,000-3,500 MAD per night',
    description:
      'Named after the ancient salt caravans, this camp offers an authentic yet comfortable desert experience. The tents are traditional khaima-style, large and beautifully decorated, with proper beds and solar-powered lighting.',
    includes: 'All meals, 4x4 transfer, camel trek, bonfire evening, sunrise walk.',
    highlights: [
      'Traditional khaima tents with modern amenities',
      'Solar-powered for minimal environmental impact',
      'Expert local Berber guides with deep desert knowledge',
      'Cooking classes available with the camp chef',
    ],
  },
  {
    name: 'Scarabeo Camp',
    location: 'Agafay Desert, near Marrakech',
    category: 'Boutique Luxury',
    priceRange: '2,000-4,000 MAD per night',
    description:
      'A designer desert camp just 45 minutes from Marrakech. Scarabeo offers a curated glamping experience in the rocky Agafay desert with views of the Atlas Mountains. Perfect for those short on time who still want a desert night.',
    includes: 'Dinner, breakfast, sunset drinks, yoga session (select dates), star observation.',
    highlights: [
      'Only 45 minutes from Marrakech',
      'Designer interiors by Moroccan artists',
      'Atlas Mountain views from every tent',
      'Swimming pool and lounge areas',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Stargazing                                                  */
/* ------------------------------------------------------------------ */
const stargazingInfo = [
  {
    title: 'Why the Sahara for Stargazing',
    description:
      'The Sahara Desert is one of the best places on Earth for stargazing. Near-zero light pollution, dry air with minimal moisture (meaning less atmospheric distortion), high altitude in some areas, and over 300 clear nights per year. The Milky Way is visible to the naked eye, and you can see thousands of stars that are invisible from cities.',
  },
  {
    title: 'What You Can See',
    description:
      "The Milky Way band stretching across the sky. Jupiter, Saturn, Mars, and Venus as bright points. The Andromeda Galaxy with the naked eye. Meteor showers (Perseids in August are spectacular). Satellite trails. Star clusters and nebulae with binoculars. With a telescope: rings of Saturn, moons of Jupiter, craters on Earth's Moon.",
  },
  {
    title: 'Best Camps for Stargazing',
    description:
      'Sahara Stars Camp (Merzouga) has dedicated telescopes and a guide. Erg Chigaga camps offer the darkest skies due to total isolation. Kam Kam Dunes provides star maps and blankets for rooftop observation. Some camps now offer astrophotography workshops.',
  },
  {
    title: 'Equipment to Bring',
    description:
      'At minimum, bring binoculars (even cheap ones dramatically improve star viewing). A star map app on your phone (turn to night mode). For photography: a tripod, wide-angle lens (f/2.8 or faster), and a camera capable of 15-30 second exposures. A red headlamp preserves night vision.',
  },
  {
    title: 'Best Months',
    description:
      'June through September for the Milky Way core. August for Perseids meteor shower. October through March for comfortable temperatures and clear skies. New moon periods for darkest conditions (check a lunar calendar). Winter constellations like Orion are magnificent from November through February.',
  },
  {
    title: 'Guided Astronomy Experiences',
    description:
      'Several operators now offer dedicated astronomy evenings with professional-grade telescopes and knowledgeable guides. Expect to pay 300-600 MAD per person for a 2-hour guided session. Some luxury camps include this in the room rate. The best guides are often local Berbers who learned navigation by the stars.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Motorcycle & Rally                                          */
/* ------------------------------------------------------------------ */
const motorcycleInfo = [
  {
    title: 'Desert Motorcycle Tours',
    description:
      "Morocco is one of the world's top destinations for adventure motorcycle touring. The combination of paved mountain passes, gravel tracks, desert pistes, and sand makes it an enduro paradise. Tours range from guided day rides to multi-week expeditions.",
    details: [
      'Most popular bikes: Honda Africa Twin, BMW GS 1200/1250, KTM 790/890 Adventure, Yamaha Tenere 700',
      'Rental prices: 800-1,500 MAD per day for mid-range adventure bikes. Premium bikes (BMW GS) go up to 2,000 MAD per day.',
      'Guided tour packages: 3,500-6,000 MAD per day all-inclusive (bike, guide, fuel, accommodation, meals)',
      'Top rental operators: Ride in Morocco (Marrakech), MotoMaroc (Ouarzazate), Sahara Motorcycle Tours (Erfoud)',
    ],
  },
  {
    title: 'Rally Experiences',
    description:
      'Morocco hosts several major desert rallies including stages of the Africa Eco Race (the spiritual successor to the Paris-Dakar). Amateur rally experiences are available for those who want a taste of competition.',
    details: [
      'Morocco Desert Challenge: annual amateur rally event open to motorcycles and 4x4 vehicles',
      'Rallye du Maroc: professional World Championship rally event held annually near Erfoud/Merzouga',
      'Amateur rally experiences: 2-3 day guided rally-style rides with GPS waypoints and timed stages. From 5,000 MAD per person.',
      'Some operators offer "rally lite" packages where you ride their bikes on actual rally tracks with professional guidance',
    ],
  },
  {
    title: 'Required Licenses and Documents',
    description:
      'To ride a motorcycle in Morocco you need the proper documentation. Rules are enforced, especially on highways and in cities.',
    details: [
      'International Driving Permit (IDP) with motorcycle endorsement is required',
      'Your home country motorcycle license must be valid',
      'For bikes over 125cc, category A license is required',
      'Insurance is mandatory. Rental companies provide third-party insurance. Comprehensive coverage costs extra (200-400 MAD per day).',
      'Helmet is legally required and enforced. Bring your own if you are particular about fit and condition.',
    ],
  },
  {
    title: 'Desert Riding Tips',
    description:
      'Desert riding is a specific skill set that differs significantly from road riding. Even experienced motorcyclists should prepare for unique challenges.',
    details: [
      'Stand on the pegs in sand. Sitting down shifts weight too far back and causes the front wheel to dig in.',
      'Momentum is your friend in soft sand. Maintain speed but do not accelerate aggressively.',
      'Lower tire pressure in sand (0.8-1.0 bar) dramatically improves traction. Re-inflate for tarmac.',
      'Carry at minimum 3 liters of water, a tire repair kit, a tow rope, and a basic tool kit.',
      'GPS is essential off-road. Download offline maps. Phone signal is unreliable in the desert.',
      'Never ride alone in the desert. A breakdown in remote areas can be life-threatening.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Agafay Desert                                               */
/* ------------------------------------------------------------------ */
const agafayActivities = [
  {
    name: 'Quad Biking',
    price: '450-800 MAD',
    duration: '1.5-2.5 hours',
    description: 'High-speed circuits through the rocky desert with Atlas Mountain views.',
  },
  {
    name: 'Buggy Tours',
    price: '800-1,500 MAD',
    duration: '1.5-2 hours',
    description: 'Side-by-side vehicles on curated desert tracks. More power, more speed, more dust.',
  },
  {
    name: 'Camel Rides',
    price: '200-400 MAD',
    duration: '1-2 hours',
    description: 'Gentle rides through the stone desert at sunset with tea at a viewpoint.',
  },
  {
    name: 'Hot Air Ballooning',
    price: '1,500-2,500 MAD',
    duration: '1 hour flight + transfer',
    description: 'Sunrise balloon flights over the Agafay with views of the Atlas Mountains. Magical.',
  },
  {
    name: 'Horseback Riding',
    price: '400-800 MAD',
    duration: '1-3 hours',
    description: 'Arabian and Barb horse treks through the desert. Faster-paced than camels.',
  },
  {
    name: 'Dinner Under the Stars',
    price: '500-1,200 MAD',
    duration: 'Evening (sunset to 10pm)',
    description: 'Outdoor dining experience at a glamping camp with traditional music and fire pits.',
  },
  {
    name: 'Yoga Retreats',
    price: '800-2,000 MAD per day',
    duration: 'Half-day to multi-day',
    description: 'Desert yoga sessions at camps like Scarabeo and Inara Camp. Sunrise and sunset sessions.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Safety & Practical                                          */
/* ------------------------------------------------------------------ */
const safetyTips = [
  {
    icon: Droplets,
    title: 'Hydration is Non-Negotiable',
    description:
      'The desert is dangerously dry. You lose water faster than you realize through sweat and breathing. Drink at minimum 3-4 liters per day, more during activity. Carry water at all times. Dehydration symptoms (headache, dizziness, dark urine) should be treated immediately by stopping activity and rehydrating.',
  },
  {
    icon: Sun,
    title: 'Sun Protection',
    description:
      'UV radiation in the Sahara is intense year-round. SPF 50+ sunscreen applied every 2 hours, a wide-brimmed hat or tagelmust (Tuareg-style head wrap), UV-blocking sunglasses, and long loose clothing are essential. Sunburn can occur in under 30 minutes at midday.',
  },
  {
    icon: Wind,
    title: 'Sandstorm Protocol',
    description:
      'Sandstorms (called "sirocco" or "chergui") can arise quickly, especially in spring. If caught: turn your back to the wind, cover all exposed skin and airways with a scarf, protect your eyes with goggles, and shelter behind a rock or vehicle. Do not attempt to drive or walk in a severe sandstorm. They typically pass in 1-3 hours.',
  },
  {
    icon: ThermometerSun,
    title: 'Temperature Extremes',
    description:
      'Summer daytime temperatures exceed 45 degrees Celsius. Winter nights can drop below freezing. The daily temperature swing can be 30 degrees or more. Pack layers regardless of season. Midday activity in summer is dangerous and should be avoided.',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description:
      'Standard travel insurance often excludes adventure sports. Verify that your policy covers quad biking, sandboarding, and camel trekking specifically. World Nomads and SafetyWing offer adventure-inclusive policies. Moroccan operators rarely carry liability insurance, so your personal coverage is your only protection.',
  },
  {
    icon: Phone,
    title: 'Communication',
    description:
      'Phone signal is unreliable to nonexistent in the deep desert. Buy a local Maroc Telecom SIM (best coverage in remote areas) at any airport. Download offline maps in Google Maps or Maps.me before departing. Luxury camps usually have satellite WiFi. Carry a power bank.',
  },
  {
    icon: Heart,
    title: 'Health Considerations',
    description:
      'People with heart conditions, back problems, or pregnancy should avoid camel riding, quad biking, and buggy tours. The physical demands are real. Carry any personal medication with you. The nearest hospital to Merzouga is in Erfoud (50km). The nearest to Erg Chigaga is in Zagora (140km).',
  },
  {
    icon: Package,
    title: 'What to Pack',
    description:
      'Headscarf or buff (essential for dust), sunglasses with tight fit, sunscreen SPF 50+, lip balm with SPF, 2+ liters water bottle, light long-sleeved shirt, long pants, closed sturdy shoes, warm layer for evening, flashlight or headlamp, basic first aid kit, toilet paper, hand sanitizer, cash in small bills.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Booking Guide                                               */
/* ------------------------------------------------------------------ */
const bookingTips = [
  {
    title: 'Book Direct vs Through Hotel',
    description:
      'Hotels and riads add 20-40% commission on desert activities. Booking directly with operators is almost always cheaper. However, hotel-booked tours offer convenience and a layer of accountability. For standard experiences (sunset camel ride, quad biking), book direct. For multi-day 4x4 tours, the hotel can help vet operators.',
  },
  {
    title: 'Comparing Operators',
    description:
      'Check reviews on TripAdvisor, Google, and GetYourGuide. Look for recent reviews (last 6 months). Ask specifically about vehicle condition, guide quality, and group sizes. The cheapest option is rarely the best. A 100 MAD difference often means significantly better equipment and safety standards.',
  },
  {
    title: 'Red Flags to Watch For',
    description:
      'No safety briefing before the activity. Helmets not provided or in poor condition. Vehicles that look poorly maintained (bald tires, visible damage). Guides who pressure you to book additional services during the activity. No written confirmation or receipt. Unwillingness to show vehicle or equipment before departure.',
  },
  {
    title: 'Age and Health Restrictions',
    description:
      'Quad biking: minimum age 16 (driver) or 6 (passenger with adult). Buggy driving: 18+ with valid license. Sandboarding: no age limit but physical fitness required for the hike. Camel riding: generally 4+ but at operator discretion. 4x4 tours: no restrictions. Motorcycle: 18+ with valid motorcycle license.',
  },
  {
    title: 'Best Time to Book',
    description:
      'Peak season (October-April) requires booking 1-2 weeks ahead for popular activities, especially luxury glamping and multi-day 4x4 tours. Off-peak (May-September) has availability but dangerously high temperatures. Shoulder months (October and April) offer the best combination of good weather and availability.',
  },
  {
    title: 'Payment and Negotiation',
    description:
      'Most operators accept cash (MAD) and some accept cards. Cash often gets a 5-10% discount. Negotiate respectfully but firmly. Group discounts are common for parties of 4+. Tips for guides are expected and appreciated: 50-100 MAD for a half-day guide, 100-200 MAD for full-day.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: FAQ                                                         */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    question: 'What is the best time of year for desert adventures in Morocco?',
    answer: 'October through April is ideal. Temperatures are comfortable (15-30 degrees Celsius during the day) and the sky is usually clear. November and March are the sweet spot: warm days, cool nights, fewer crowds than December-January. Avoid June through August unless you can handle 45+ degree heat.',
  },
  {
    question: 'Is the Sahara Desert safe for tourists?',
    answer: "Yes. The Moroccan Sahara is safe for tourists. The areas around Merzouga, Zagora, and M'hamid are well-established tourist zones with experienced operators. The Moroccan government maintains security in desert areas. The main risks are environmental (heat, dehydration, getting lost) rather than security-related. Always go with a reputable guide for off-road activities.",
  },
  {
    question: 'How far is the Sahara from Marrakech?',
    answer: "The nearest real sand dunes (Erg Chebbi at Merzouga) are about 560km from Marrakech, roughly 9-10 hours by road. This is why most people do a 3-day tour. The Agafay Desert (rocky, no sand) is only 45 minutes from Marrakech. Erg Chigaga is about 600km via the Draa Valley route.",
  },
  {
    question: 'Can I do desert activities with children?',
    answer: 'Yes, many activities are family-friendly. Camel rides accept children from about 4 years (sharing a camel with a parent). Quad biking allows children as passengers from age 6. Sandboarding has no age limit. Glamping camps welcome families. Multi-day 4x4 tours are fine for children who can handle long drives. Buggy driving requires age 18.',
  },
  {
    question: 'What is the difference between Erg Chebbi and Erg Chigaga?',
    answer: "Erg Chebbi (Merzouga) is more accessible, better developed for tourism, with more accommodation and activity options. Dunes reach 150m. Erg Chigaga (M'hamid) is more remote, requires 4x4 access, has fewer tourists, and feels more wild and pristine. Dunes are lower but the area is larger. Choose Chebbi for convenience and variety, Chigaga for solitude and authenticity.",
  },
  {
    question: 'Do I need a 4x4 to visit the desert?',
    answer: 'To reach Merzouga town, no. The road is fully paved. But to access the dunes themselves or any off-road sites, you need a 4x4 or to join a tour. To reach Erg Chigaga, you absolutely need a 4x4 (the last 50km is across open desert with no road). Most desert activities include transport from your accommodation.',
  },
  {
    question: 'How much should I budget for desert activities?',
    answer: 'Budget tier: 200-400 MAD per activity (camel ride, basic sandboarding). Mid-range: 500-1,000 MAD per activity (quad biking, buggy tour). Premium: 1,500-5,000 MAD per night (luxury glamping). Multi-day 4x4 tour: 2,500-5,000 MAD per person for 3 days. A full desert adventure week with luxury camp costs roughly 15,000-25,000 MAD per person.',
  },
  {
    question: 'Will I get cell phone reception in the desert?',
    answer: 'In Merzouga town, yes (Maroc Telecom is best). At desert camps near the dunes, signal is weak to nonexistent. In Erg Chigaga, there is no signal at all. Luxury camps often have satellite WiFi, but it is slow. Download offline maps and notify family of your plans before departing into the desert.',
  },
  {
    question: 'What should I wear for desert activities?',
    answer: 'Long loose pants (not jeans for camel riding), a long-sleeved breathable shirt, closed sturdy shoes (not sandals for motorized activities), a headscarf or buff for dust and sun, sunglasses, and a warm layer for evening. Light colors reflect heat. Cotton or linen breathe better than synthetics in dry heat.',
  },
  {
    question: 'Can I self-drive a 4x4 in the desert?',
    answer: 'Technically yes, but it is not recommended unless you have serious off-road experience. Sand driving is a specialized skill. Getting stuck in soft sand in 45-degree heat with no phone signal is dangerous. Rental companies often void insurance for off-road damage. Hiring a local driver-guide costs 500-800 MAD per day and is vastly safer.',
  },
  {
    question: 'Are the desert camps environmentally responsible?',
    answer: 'It varies widely. Top camps like Kam Kam Dunes and Azalai use solar power, manage waste responsibly, and employ local staff. Budget camps can be problematic (litter, diesel generators, water waste). Ask about their environmental practices before booking. Erg Chigaga camps tend to be better because they are in a more protected area.',
  },
  {
    question: 'How physically demanding is a camel trek?',
    answer: 'A 1-hour sunset ride is not physically demanding at all, just uncomfortable. A full-day ride (4-6 hours) requires reasonable fitness and a tolerance for repetitive motion. Multi-day treks are genuinely challenging: saddle soreness, sun exposure, and basic camping conditions. Prepare with stretching and consider padded cycling shorts.',
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Best Season Matrix                                          */
/* ------------------------------------------------------------------ */
const seasonData = [
  { activity: 'Quad Biking', months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1] },
  { activity: 'Sandboarding', months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1] },
  { activity: 'Buggy Tours', months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1] },
  { activity: '4x4 Expeditions', months: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1] },
  { activity: 'Camel Trekking', months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1] },
  { activity: 'Desert Glamping', months: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1] },
  { activity: 'Stargazing', months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { activity: 'Motorcycle Tours', months: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1] },
  { activity: 'Agafay Activities', months: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1] },
  { activity: 'Hot Air Ballooning', months: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1] },
];

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* ================================================================== */
/*  PAGE COMPONENT                                                    */
/* ================================================================== */

export default function DesertAdventuresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* -- Hero Section -- */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-quad-biking.webp"
          alt="Quad biking through golden Sahara dunes in Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-morocco text-center py-24">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white/80 mb-6">
            <Compass className="w-4 h-4" />
            <span>Morocco Adventure Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Desert Adventures: Adrenaline in the Sahara &amp; Beyond
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            From roaring quad bikes across golden dunes to silent camel treks under a billion stars,
            Morocco&apos;s deserts offer the full spectrum of adventure. This is your complete guide
            to every desert activity, with real prices, verified operators, and hard-won practical advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quad-biking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#A0522D] text-white font-semibold hover:bg-[#8B4726] transition-colors"
            >
              <Zap className="w-4 h-4" /> Explore Activities
            </a>
            <a
              href="#booking-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Booking Guide
            </a>
          </div>
        </div>
      </section>

      {/* -- Breadcrumb -- */}
      <nav className="bg-[#FAF8F5] border-b border-[#EDE8E0]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[#1A1814]/60">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[#A0522D] transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li>
              <Link href="/adventure" className="hover:text-[#A0522D] transition-colors">
                Adventure
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[#A0522D] font-medium">Desert Adventures</li>
          </ol>
        </div>
      </nav>

      {/* -- Quick Navigation -- */}
      <section className="py-8 bg-[#FAF8F5] border-b border-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Quad Biking', href: '#quad-biking', icon: Bike },
              { label: 'Sandboarding', href: '#sandboarding', icon: Mountain },
              { label: 'Buggy Tours', href: '#buggy-tours', icon: Car },
              { label: '4x4 Expeditions', href: '#desert-4x4', icon: Route },
              { label: 'Camel Trekking', href: '#camel-trekking', icon: Footprints },
              { label: 'Glamping', href: '#glamping', icon: Tent },
              { label: 'Stargazing', href: '#stargazing', icon: Moon },
              { label: 'Motorcycle', href: '#motorcycle', icon: Bike },
              { label: 'Agafay Desert', href: '#agafay', icon: Compass },
              { label: 'Safety', href: '#safety', icon: Shield },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#EDE8E0] text-sm font-medium text-[#1A1814] hover:border-[#A0522D] hover:text-[#A0522D] transition-colors"
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/*  SECTION 1: QUAD BIKING                                       */}
      {/* ============================================================== */}
      <section id="quad-biking" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Bike className="w-4 h-4" />
              <span>Motorized Adventure</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Quad Biking Across Morocco
            </h2>
            <p className="text-[#1A1814]/70 max-w-3xl mx-auto leading-relaxed">
              Quad biking (ATV riding) is Morocco&apos;s most accessible motorized desert adventure.
              No experience is needed, prices start at 400 MAD, and there are options from 15 minutes
              outside Marrakech to the deep Saharan dunes. Here is where to go, what to pay, and
              who to ride with.
            </p>
          </div>

          {/* Safety Briefing Callout */}
          <div className="card-moroccan p-6 border-l-4 border-l-[#C4960C] mb-10">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[#C4960C]/10 shrink-0">
                <Shield className="w-5 h-5 text-[#C4960C]" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  Safety Briefing: What Every Rider Must Know
                </h3>
                <ul className="space-y-2 text-sm text-[#1A1814]/70 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>Always wear the provided helmet, goggles, and gloves. Refuse to ride without them.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>Closed shoes are mandatory. Sandals, flip-flops, and bare feet are dangerous on quads (hot exhaust pipes, moving parts).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>Maintain distance from the rider in front (dust clouds reduce visibility to near zero).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>Do not attempt jumps or sharp turns at speed on unfamiliar terrain. Quads can roll.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>Wear long pants and a long-sleeved shirt. Sun, dust, and rocks spray up constantly.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quad Biking Locations */}
          <div className="space-y-8">
            {quadBikingLocations.map((loc) => (
              <div key={loc.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-3">
                    {loc.name}
                  </h3>
                  <p className="text-[#1A1814]/70 leading-relaxed mb-5">{loc.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    <div className="p-3 rounded-lg bg-[#FAF8F5]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#A0522D] uppercase tracking-wider mb-1">
                        <Clock className="w-3 h-3" /> Duration
                      </div>
                      <p className="text-sm text-[#1A1814]/70">{loc.duration}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FAF8F5]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#C4960C] uppercase tracking-wider mb-1">
                        <DollarSign className="w-3 h-3" /> Price
                      </div>
                      <p className="text-sm text-[#1A1814]/70">{loc.price}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FAF8F5]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1814]/60 uppercase tracking-wider mb-1">
                        <Compass className="w-3 h-3" /> Terrain
                      </div>
                      <p className="text-sm text-[#1A1814]/70">{loc.terrain}</p>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-[#1A1814] mb-3">Recommended Operators</h4>
                  <div className="space-y-2 mb-4">
                    {loc.operators.map((op) => (
                      <div key={op} className="flex items-start gap-2 border-l-2 border-[#A0522D]/30 pl-3">
                        <BadgeCheck className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                        <p className="text-sm text-[#1A1814]/70">{op}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-[#C4960C]/5 border border-[#C4960C]/20">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#1A1814]/70"><span className="font-semibold">Insider Tip:</span> {loc.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/*  SECTION 2: SANDBOARDING                                      */}
      {/* ============================================================== */}
      <section id="sandboarding" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Mountain className="w-4 h-4" />
              <span>Dune Sports</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Sandboarding the Saharan Dunes
            </h2>
            <p className="text-[#1A1814]/70 max-w-3xl mx-auto leading-relaxed">
              Imagine snowboarding, but on golden sand dunes reaching 150 meters high, with nothing but
              Sahara in every direction. Sandboarding in Morocco is accessible, affordable, and one of
              the most pure-fun activities in the desert. You can do it for free or with a guide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {sandboardingLocations.map((loc) => (
              <div key={loc.name} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-3">
                  {loc.name}
                </h3>
                <p className="text-[#1A1814]/70 leading-relaxed mb-4">{loc.description}</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-[#FAF8F5]">
                    <p className="text-xs font-bold text-[#A0522D] uppercase tracking-wider mb-1">Best Dunes</p>
                    <p className="text-sm text-[#1A1814]/70">{loc.bestDunes}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF8F5]">
                    <p className="text-xs font-bold text-[#C4960C] uppercase tracking-wider mb-1">Board Rental</p>
                    <p className="text-sm text-[#1A1814]/70">{loc.rental}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF8F5]">
                    <p className="text-xs font-bold text-[#1A1814]/60 uppercase tracking-wider mb-1">Guided Experience</p>
                    <p className="text-sm text-[#1A1814]/70">{loc.guided}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF8F5]">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Free Option</p>
                    <p className="text-sm text-[#1A1814]/70">{loc.freeOption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-6 text-center">
              Sandboarding Technique Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sandboardingTips.map((tip) => (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="inline-flex p-2 rounded-lg bg-[#A0522D]/10 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">{tip.title}</h4>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">{tip.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/*  SECTION 3: BUGGY & SIDE-BY-SIDE                              */}
      {/* ============================================================== */}
      <section id="buggy-tours" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Car className="w-4 h-4" />
              <span>High-Powered Off-Road</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Buggy &amp; Side-by-Side Adventures
            </h2>
            <p className="text-[#1A1814]/70 max-w-3xl mx-auto leading-relaxed">
              For more power, speed, and protection from the elements, dune buggies and side-by-side
              vehicles (UTVs) deliver a thrilling desert experience. These roll-cage-equipped vehicles
              handle rough terrain at speed and seat 2-4 people. Prices range from 800 to 1,500 MAD
              for a 2-hour session.
            </p>
          </div>

          <div className="space-y-8">
            {buggyLocations.map((loc) => (
              <div key={loc.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex p-2 rounded-lg bg-[#A0522D]/10">
                      <MapPin className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                      {loc.name}
                    </h3>
                  </div>
                  <p className="text-[#1A1814]/70 leading-relaxed mb-5">{loc.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                    <div className="p-3 rounded-lg bg-[#FAF8F5]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1814]/60 uppercase tracking-wider mb-1">
                        <Car className="w-3 h-3" /> Vehicles
                      </div>
                      <p className="text-sm text-[#1A1814]/70">{loc.vehicles}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FAF8F5]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#A0522D] uppercase tracking-wider mb-1">
                        <Clock className="w-3 h-3" /> Duration
                      </div>
                      <p className="text-sm text-[#1A1814]/70">{loc.duration}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FAF8F5]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#C4960C] uppercase tracking-wider mb-1">
                        <DollarSign className="w-3 h-3" /> Price
                      </div>
                      <p className="text-sm text-[#1A1814]/70">{loc.price}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FAF8F5]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-green-700 uppercase tracking-wider mb-1">
                        <Sparkles className="w-3 h-3" /> Tip
                      </div>
                      <p className="text-sm text-[#1A1814]/70">{loc.tips}</p>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-[#1A1814] mb-3">Recommended Operators</h4>
                  <div className="space-y-2">
                    {loc.operators.map((op) => (
                      <div key={op} className="flex items-start gap-2 border-l-2 border-[#A0522D]/30 pl-3">
                        <BadgeCheck className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                        <p className="text-sm text-[#1A1814]/70">{op}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

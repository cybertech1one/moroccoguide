import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Mountain,
  Compass,
  Sun,
  Camera,
  Star,
  Users,
  Info,
  Calendar,
  Heart,
  CircleDollarSign,
  BookOpen,
  Globe,
  Flag,
  AlertTriangle,
  Bike,
  ArrowRight,
  Zap,
  Tent,
  Sunrise,
  Wind,
  Package,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desert Adventures & ATV/Quad Biking in Morocco | Complete Guide 2025',
  description:
    'Complete guide to Morocco desert adventures. Quad biking in Marrakech Palmeraie & Agafay, buggy tours, sandboarding Erg Chebbi, go-karting, camel trekking Merzouga, 4x4 off-road safaris, horse riding, and luxury desert camps with prices and booking tips.',
  keywords: [
    'desert adventures morocco',
    'quad biking marrakech',
    'atv morocco',
    'buggy tour agafay',
    'sandboarding erg chebbi',
    'camel trekking merzouga',
    'morocco desert camp',
    'go karting marrakech',
    '4x4 off road morocco',
    'desert glamping morocco',
    'merzouga quad biking',
    'agafay desert buggy',
    'morocco desert activities',
    'sahara adventure morocco',
    'overnight desert camp morocco',
    'erg chigaga sandboarding',
  ],
  openGraph: {
    title: 'Desert Adventures & ATV/Quad Biking in Morocco | Complete Guide',
    description:
      'From quad biking in Agafay to overnight camel treks in Merzouga, Morocco offers world-class desert adventures. Prices, safety tips, and booking advice for every activity.',
    url: 'https://citytoursmorocco.com/desert-adventures',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 1200,
        height: 630,
        alt: 'Quad biking through the golden desert dunes of Morocco at sunset',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/desert-adventures' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Desert Adventures & ATV/Quad Biking in Morocco',
  description:
    'Complete guide to desert adventures in Morocco including quad biking, buggy tours, sandboarding, camel trekking, 4x4 safaris, and overnight desert camps across Marrakech, Agafay, Merzouga, and beyond.',
  url: 'https://citytoursmorocco.com/desert-adventures',
  touristType: ['Adventure tourists', 'Thrill seekers', 'Desert explorers', 'Family travelers'],
  geo: { '@type': 'GeoCoordinates', latitude: 31.7917, longitude: -7.0926 },
};

/* ===================================================================
   WHY MOROCCO FOR DESERT ADVENTURES
   =================================================================== */

const whyMorocco = [
  {
    icon: Globe,
    title: 'Diverse Desert Landscapes',
    description:
      'Morocco offers an extraordinary range of desert terrain within a compact geography. From the rocky, moon-like expanses of the Agafay stone desert just an hour from Marrakech, to the towering golden sand dunes of Erg Chebbi in Merzouga, to the vast emptiness of Erg Chigaga near M\'Hamid, each desert environment delivers a completely different adventure experience. No other country packs so many desert types into such accessible distances.',
  },
  {
    icon: Sun,
    title: 'Year-Round Adventure Season',
    description:
      'While peak season runs from October to April when temperatures are comfortable, Morocco\'s desert adventures operate year-round. Winter days are bright and clear with crisp nights perfect for stargazing. Spring brings wildflowers to the desert fringes. Even summer is manageable with early morning and sunset activities. The reliable weather means you can plan your trip with confidence regardless of when you visit.',
  },
  {
    icon: Shield,
    title: 'Professional Operators & Safety Standards',
    description:
      'Morocco\'s desert adventure industry has matured significantly. Established operators maintain modern fleets of ATVs, buggies, and 4x4 vehicles. Safety briefings are standard, protective gear is provided, and guides are experienced with the terrain. Many operators hold international safety certifications and carry liability insurance. This professionalism means thrill-seekers can push their limits with confidence.',
  },
  {
    icon: CircleDollarSign,
    title: 'Outstanding Value for Money',
    description:
      'Desert adventures in Morocco offer exceptional value compared to similar experiences in the UAE, Namibia, or the American Southwest. A two-hour quad biking session in Agafay costs a fraction of what you would pay for dune bashing in Dubai. Overnight desert camps with meals, camel rides, and entertainment start from just 350 MAD. Budget travelers and luxury seekers alike find Morocco delivers extraordinary experiences per dirham.',
  },
  {
    icon: Heart,
    title: 'Cultural Depth Beyond the Thrill',
    description:
      'What sets Morocco apart from other desert adventure destinations is the cultural richness woven into every experience. A camel trek is not just a ride; it is an immersion into nomadic Berber traditions. Desert camps feature traditional music, storytelling, and home-cooked tagines under the stars. Even a quad biking excursion weaves through ancient palm groves and past centuries-old kasbahs. The adventure is always layered with authentic cultural encounters.',
  },
  {
    icon: Compass,
    title: 'Easy Access from Major Cities',
    description:
      'Morocco\'s desert adventures are remarkably accessible. The Agafay Desert is just 45 minutes from Marrakech\'s medina. Merzouga\'s Erg Chebbi dunes are reachable in a day\'s drive from Marrakech via stunning mountain passes, or by a short internal flight to Errachidia. Operators arrange seamless transfers, and many adventures can be booked as half-day excursions that fit neatly into a broader Moroccan itinerary.',
  },
];

/* ===================================================================
   QUAD BIKING / ATV EXPERIENCES
   =================================================================== */

const quadBikingExperiences = [
  {
    id: 'palmeraie-quad',
    name: 'Palmeraie Marrakech',
    subtitle: '2-Hour Palm Grove Ride',
    location: 'Marrakech Palmeraie (15 minutes from medina)',
    duration: '2 hours',
    price: '500-800 MAD',
    difficulty: 'Beginner to Intermediate',
    difficultyColor: '#2d8a4e',
    image: '/images/hero-desert.webp',
    description:
      'The most popular quad biking experience for visitors to Marrakech. Ride through the sprawling Palmeraie, a vast palm grove of over 100,000 date palms on the northern edge of the city. The terrain is a mix of hard-packed dirt tracks, sandy patches, and paths winding between the palm trees with the snow-capped Atlas Mountains as a stunning backdrop. The circuit passes through small Berber villages where children wave and farmers tend their fields, giving the ride a cultural dimension alongside the adrenaline. No experience is necessary as guides provide thorough safety briefings and the terrain is relatively gentle. Automatic quad bikes are standard, making this accessible to anyone comfortable on a motorbike or even complete novices. Most operators offer hotel pickup and drop-off from anywhere in Marrakech.',
    highlights: [
      'Wind through 100,000+ date palms with Atlas Mountain views',
      'Pass through traditional Berber villages and farmland',
      'Gentle terrain suitable for complete beginners',
      'Hotel pickup and drop-off included by most operators',
      'Available morning, afternoon, and sunset time slots',
      'Photo stops at scenic viewpoints',
    ],
    tips: [
      'Book the sunset slot for the best light and cooler temperatures',
      'Wear closed shoes and clothes you do not mind getting dusty',
      'Goggles and helmets are provided but bring sunglasses as backup',
      'Operators require a minimum age of 16 to drive (passengers from age 6)',
    ],
  },
  {
    id: 'agafay-quad',
    name: 'Agafay Desert',
    subtitle: 'Rocky Desert Quad Adventure',
    location: 'Agafay Desert (45 minutes from Marrakech)',
    duration: '2-3 hours',
    price: '600-1,000 MAD',
    difficulty: 'Intermediate',
    difficultyColor: '#C4960C',
    image: '/images/hero-desert.webp',
    description:
      'The Agafay Desert is a dramatic rocky desert landscape just 45 minutes south of Marrakech. Unlike the sand dunes of the Sahara, Agafay is a barren, stony wilderness of cracked earth, low hills, and dried riverbeds that resembles the surface of Mars. Quad biking here is more technical and thrilling than the Palmeraie, with steeper inclines, rockier surfaces, and faster open stretches. The landscape unfolds in shades of ochre, amber, and grey, with the High Atlas range dominating the southern horizon. Many tours combine the quad ride with a traditional Berber lunch in a desert camp, mint tea under a caidal tent, and sometimes even a short camel ride. Sunset tours are particularly spectacular as the rocks glow orange-red in the fading light. This is the perfect middle ground between the easy Palmeraie ride and the more demanding Saharan dune rides.',
    highlights: [
      'Mars-like rocky desert terrain unlike anything you have experienced',
      'More challenging terrain with hills, dry riverbeds, and fast stretches',
      'Stunning High Atlas panorama throughout the entire ride',
      'Many tours include Berber lunch and mint tea in a desert camp',
      'Sunset rides offer extraordinary photography opportunities',
      'Can be combined with overnight glamping in Agafay',
    ],
    tips: [
      'This is dustier than the Palmeraie so a buff or scarf for your face is recommended',
      'Terrain is rougher so some comfort on a quad is helpful but not essential',
      'Half-day packages with lunch offer the best overall value',
      'The road to Agafay passes spectacular scenery so enjoy the transfer',
    ],
  },
  {
    id: 'merzouga-quad',
    name: 'Merzouga Sand Dunes',
    subtitle: 'Sunset Dune Ride on Erg Chebbi',
    location: 'Erg Chebbi, Merzouga',
    duration: '1.5-2 hours',
    price: '400-600 MAD',
    difficulty: 'Intermediate to Advanced',
    difficultyColor: '#C4960C',
    image: '/images/hero-desert.webp',
    description:
      'Riding a quad bike across the towering sand dunes of Erg Chebbi is one of Morocco\'s most exhilarating experiences. The dunes rise up to 150 meters high, creating a landscape of flowing golden curves that shift color from amber to pink to deep orange as the sun moves across the sky. The ride takes you up and over dune ridges, through flat sandy corridors between dune formations, and to elevated viewpoints where the Sahara stretches to the horizon in every direction. The sensation of cresting a tall dune and seeing nothing but sand ahead is both thrilling and humbling. Sunset rides time the experience so you reach a prime viewpoint as the sky erupts in color. The sand is softer and more demanding than rocky terrain, so some comfort on a quad is helpful. Operators provide thorough briefings on handling the bike in sand, including throttle control on inclines and weight distribution on descents. This is the quintessential Saharan adventure.',
    highlights: [
      'Ride across dunes rising up to 150 meters high',
      'Sunset timing for spectacular golden-hour photography',
      'Reach viewpoints with unobstructed Saharan panoramas',
      'More demanding sand terrain adds to the adventure',
      'Often combined with overnight desert camp packages',
      'Unique sense of isolation in the vast Erg Chebbi dune field',
    ],
    tips: [
      'Sand riding requires more throttle than you expect on uphill sections',
      'Lean back going downhill and forward going uphill',
      'Secure everything: sand gets into every pocket and crevice',
      'Combine with an overnight camp for the complete Merzouga experience',
    ],
  },
];

/* ===================================================================
   QUAD BIKING SAFETY & WHAT TO WEAR
   =================================================================== */

const quadSafetyTips = [
  'Always wear the provided helmet and goggles. Head and eye protection is non-negotiable in desert conditions where rocks and sand are constant hazards.',
  'Wear closed-toe shoes with ankle support. Boots are ideal. Sandals and flip-flops are dangerous near hot engines and rough terrain.',
  'Dress in long trousers and a long-sleeved shirt. Exposed skin will be sandblasted on faster rides and sunburned regardless of speed.',
  'Apply SPF 50+ sunscreen before the ride and bring it for reapplication. The desert sun is intense and reflective off sand.',
  'Bring a scarf, buff, or bandana to cover your nose and mouth. Dust is unavoidable, especially when riding in a group.',
  'Drink plenty of water before and after the ride. Carry water if the operator provides a storage compartment on the quad.',
  'Listen to the full safety briefing even if you have ridden before. Each terrain and each machine handles differently.',
  'Maintain safe following distance. The rider in front kicks up a dust cloud that reduces visibility to near zero.',
  'Do not attempt jumps, wheelies, or off-route exploration. The terrain hides rocks, holes, and soft patches that can cause rollovers.',
  'If you have back or neck problems, consult your doctor before quad biking. Desert terrain generates significant jolts and vibrations.',
];

const quadWhatToWear = [
  { item: 'Closed-toe shoes or boots', note: 'Ankle boots with grip are ideal. The quad footrests get hot and the terrain is unforgiving to exposed feet.' },
  { item: 'Long trousers', note: 'Jeans or sturdy outdoor trousers. The exhaust pipe and engine are close to your legs. Sand abrasion at speed is real.' },
  { item: 'Long-sleeved shirt', note: 'Lightweight, breathable fabric. Protects from sun and sand. Dark colors show less dust.' },
  { item: 'Scarf or buff', note: 'Essential for covering nose and mouth. Desert dust is fine and pervasive. Operators sometimes provide these.' },
  { item: 'Sunglasses with secure strap', note: 'Backup to goggles, or for when you stop. Wind and sand are constant. A strap prevents losing them.' },
  { item: 'Sunscreen SPF 50+', note: 'Apply generously before the ride. Your face below the goggles and your hands are most exposed.' },
  { item: 'Light jacket (winter/evening)', note: 'Desert temperatures drop sharply after sunset, especially October to March. A windproof layer is wise for evening rides.' },
  { item: 'Secure pockets or small bag', note: 'Phone, wallet, and keys need to be secured. Vibration shakes loose items out of open pockets easily.' },
];

/* ===================================================================
   BUGGY TOUR EXPERIENCES
   =================================================================== */

const buggyExperiences = [
  {
    id: 'agafay-buggy',
    name: 'Agafay Desert Buggies',
    subtitle: '2-Hour High-Speed Desert Circuit',
    location: 'Agafay Desert (45 minutes from Marrakech)',
    duration: '2-3 hours',
    price: '900-1,200 MAD',
    difficulty: 'Intermediate',
    difficultyColor: '#C4960C',
    image: '/images/hero-desert.webp',
    description:
      'Buggy tours in the Agafay Desert are the high-octane alternative to quad biking. Purpose-built off-road buggies with roll cages, harnesses, and powerful engines tackle the rocky desert terrain at speed. The open-air cockpit gives you an unobstructed view of the dramatic landscape as you power through dry riverbeds, climb rocky hills, and race across flat desert plains. Buggies typically seat two people (driver and passenger), making this a fantastic couples or friends activity. The vehicles handle the rough terrain with more stability than quads, and the roll cage provides an additional safety margin that lets you push harder. Most operators run 2-hour circuits that cover 30 to 40 kilometers of varied desert terrain, with stops at panoramic viewpoints. The combination of speed, scenery, and the visceral thrill of open-air driving makes Agafay buggy tours one of the most popular adventure activities near Marrakech.',
    highlights: [
      'Purpose-built off-road buggies with roll cages and harnesses',
      'Faster and more stable than quad bikes on rocky terrain',
      'Seats two people making it ideal for couples and friends',
      'Circuits cover 30-40km of varied Agafay desert terrain',
      'Panoramic viewpoint stops with Atlas Mountain backdrop',
      'Available as standalone or combined with lunch and camel ride',
    ],
    tips: [
      'The driver needs a valid driving license at most operators',
      'Passengers can swap to drive midway through the circuit at most operators',
      'Buggy tours generate even more dust than quads so face protection is essential',
      'Book the morning slot in summer to avoid peak heat in the open buggy',
    ],
  },
  {
    id: 'merzouga-buggy',
    name: 'Merzouga Dune Buggies',
    subtitle: 'Sand Dune Buggy Adventure',
    location: 'Erg Chebbi, Merzouga',
    duration: '1.5-2 hours',
    price: '600-900 MAD',
    difficulty: 'Intermediate to Advanced',
    difficultyColor: '#dc3545',
    image: '/images/hero-desert.webp',
    description:
      'Buggy tours on the Erg Chebbi sand dunes take the dune riding experience to another level. The buggies are specially equipped for sand driving with wide tires, modified suspension, and engines tuned for the demands of soft terrain. The circuit weaves between the lower dunes, climbs to elevated ridgelines, and descends sandy slopes that would be challenging or impossible on a standard quad. The sense of speed and exposure in an open buggy surrounded by nothing but towering sand dunes is unforgettable. Circuits typically include a stop at a high dune for sunset viewing or photography, with mint tea served at a desert viewpoint. The sand driving is more technical than the rocky Agafay terrain, with the buggy occasionally sliding sideways on steep sandy descents, adding to the excitement. Operators provide full safety briefings specific to sand driving, including throttle management and steering technique for soft surfaces.',
    highlights: [
      'Wide-tire sand buggies built specifically for dune driving',
      'More technical and thrilling than rocky terrain buggies',
      'Circuits include elevated dune ridgeline driving',
      'Sunset stop with mint tea at panoramic dune viewpoint',
      'Exciting sideways slides on steep sand descents',
      'Combine with overnight camp for a full Saharan experience',
    ],
    tips: [
      'Sand driving requires smooth, consistent throttle input',
      'Do not brake suddenly on sand or you will dig in and stop abruptly',
      'Goggles are absolutely essential as sand spray is constant',
      'Ask your operator about their buggy maintenance schedule',
    ],
  },
];

/* ===================================================================
   SANDBOARDING EXPERIENCES
   =================================================================== */

const sandboardingExperiences = [
  {
    id: 'erg-chebbi-sandboarding',
    name: 'Erg Chebbi, Merzouga',
    subtitle: 'Morocco\'s Premier Sandboarding Destination',
    location: 'Erg Chebbi dunes, Merzouga',
    duration: '1-2 hours (usually part of a desert package)',
    price: 'Free with most desert tours (boards provided)',
    difficulty: 'Beginner to Intermediate',
    difficultyColor: '#2d8a4e',
    image: '/images/hero-desert.webp',
    description:
      'Erg Chebbi is Morocco\'s undisputed sandboarding capital. The towering dunes, some reaching 150 meters in height, provide long, steep slopes of fine golden sand perfect for carving turns or simply flying straight down at exhilarating speed. Most desert tour operators and overnight camps include sandboarding as a complimentary activity. After a sunset camel ride to the camp, or the following morning before departure, guides lead groups to a suitable dune and provide basic boards. The climb up is the hardest part as there are no lifts, just your own legs sinking into soft sand. The ride down, however, is pure joy. Standing on a board is harder than it looks on sand, so most people end up sitting or lying on the board for their first runs, which is actually faster. The sand at Erg Chebbi is fine enough to allow decent glide without the need for waxing, though experienced sandboarders sometimes bring their own wax for longer runs.',
    highlights: [
      'Dunes up to 150 meters provide long, thrilling descents',
      'Free with most overnight desert camp packages',
      'Boards provided by operators, no need to bring equipment',
      'Fine golden sand provides good glide conditions',
      'Activity available at sunrise or sunset for best conditions',
      'Suitable for all ages and no experience necessary',
    ],
    tips: [
      'Early morning sand is firmer and faster than afternoon sand',
      'Standing is hard on sand. Start sitting or lying on your stomach for speed',
      'Wax the bottom of the board with candle wax or paraffin for dramatically faster runs',
      'Wear long sleeves. Sand rash from wipeouts is real and painful',
      'Climb at an angle rather than straight up to save energy',
    ],
  },
  {
    id: 'erg-chigaga-sandboarding',
    name: 'Erg Chigaga, M\'Hamid',
    subtitle: 'Remote Saharan Dune Boarding',
    location: 'Erg Chigaga, near M\'Hamid el Ghizlane',
    duration: '1-2 hours (part of multi-day desert tour)',
    price: 'Included in desert tour packages',
    difficulty: 'Beginner to Intermediate',
    difficultyColor: '#2d8a4e',
    image: '/images/hero-desert.webp',
    description:
      'Erg Chigaga is Morocco\'s other great sand sea, less visited and more remote than Erg Chebbi. Reaching it requires a 4x4 journey of 50 to 60 kilometers from M\'Hamid across open desert, which is an adventure in itself. The dunes here are equally impressive, stretching over 40 kilometers and reaching heights comparable to Erg Chebbi, but with far fewer visitors. Sandboarding at Erg Chigaga feels genuinely wild and untouched. The dune formations include long, sweeping ridgelines that offer extended runs without the need to climb back up a single steep face. Desert camps in the area are smaller and more intimate than those at Merzouga, and the overall experience feels more authentically remote. Sandboarding here is typically included as part of a 2 to 3-day desert tour from Marrakech or M\'Hamid, combining the journey through the Draa Valley with the destination experience.',
    highlights: [
      'Far fewer tourists than Erg Chebbi for a more private experience',
      'Equally impressive dune formations stretching over 40 kilometers',
      'Long sweeping ridgelines for extended sandboarding runs',
      'The 4x4 journey to reach Erg Chigaga is an adventure in itself',
      'Smaller, more intimate desert camps',
      'True sense of Saharan isolation and wilderness',
    ],
    tips: [
      'Erg Chigaga requires a 4x4 to reach so it must be part of an organized tour',
      'Bring your own sandboard wax as camps here are more basic',
      'The remoteness means medical help is far away so be cautious',
      'Allow at least 2 nights to fully appreciate the Erg Chigaga experience',
    ],
  },
];

const sandboardingBeginnerTips = [
  {
    title: 'Start Sitting Down',
    description: 'Your first few runs should be sitting on the board with your feet out front. This is the easiest position to control and actually produces the fastest speeds. Once comfortable, try kneeling, then standing.',
  },
  {
    title: 'Wax Your Board',
    description: 'Sand creates enormous friction compared to snow. If your board is not waxed, you will barely move. Ask your guide for wax, or bring a household candle and rub it generously across the entire bottom surface.',
  },
  {
    title: 'Choose the Right Dune',
    description: 'Not all dunes are equal. Look for steep, smooth faces without ripples. Rippled sand slows you down. Wind-swept faces with a slight crust on top provide the fastest surface.',
  },
  {
    title: 'Climb Diagonally',
    description: 'Walking straight up a dune is exhausting and slow. Zigzag up at a diagonal angle and take breaks. The climb is the real workout, not the descent.',
  },
  {
    title: 'Protect Your Eyes',
    description: 'Wipeouts spray sand everywhere. Goggles or tight-fitting sunglasses prevent sand from getting in your eyes. If sand does get in, do not rub. Let tears flush it out naturally.',
  },
  {
    title: 'Time It Right',
    description: 'Early morning offers the firmest, fastest sand. Midday sand is loose and slow. Sunset is visually stunning but the sand is at its softest. For performance, go early. For photos, go at golden hour.',
  },
];

/* ===================================================================
   GO-KARTING EXPERIENCES
   =================================================================== */

const goKartingExperiences = [
  {
    id: 'marrakech-gp',
    name: 'Marrakech Grand Prix',
    subtitle: 'Morocco\'s Premier Karting Circuit',
    location: 'Route de Safi, Marrakech',
    duration: '10-15 minutes per session',
    price: '200 MAD per session',
    difficulty: 'All Levels',
    difficultyColor: '#2d8a4e',
    description:
      'The Marrakech Grand Prix karting circuit on the Route de Safi is the best-known go-karting venue in Morocco. The track is a well-maintained, purpose-built circuit with proper safety barriers, tire walls, and marshaling. Karts range from junior models for children to high-powered 390cc machines for adults seeking serious speed. The track layout includes tight hairpins, sweeping corners, and a long straight that lets you reach satisfying top speeds. Sessions typically last 10 to 15 minutes, and you can book multiple sessions back-to-back. The facility includes a timing system that tracks your lap times, adding a competitive element whether you are racing friends or trying to beat your own personal best. The venue also has a cafe area for spectators and waiting drivers. Evening sessions under floodlights add a different atmosphere. This is a popular activity for groups, stag parties, and families with older children. Karts are well-maintained and the staff are attentive to safety.',
    highlights: [
      'Purpose-built circuit with professional safety standards',
      'Junior karts for children and powerful 390cc adult karts',
      'Electronic lap timing for competitive racing',
      'Evening sessions available under floodlights',
      'Cafe and spectator area on-site',
      'Group packages and race events available',
    ],
  },
  {
    id: 'atlas-karting',
    name: 'Atlas Karting',
    subtitle: 'Karting with Mountain Views',
    location: 'Route de l\'Ourika, Marrakech outskirts',
    duration: '10-15 minutes per session',
    price: '180-250 MAD per session',
    difficulty: 'All Levels',
    difficultyColor: '#2d8a4e',
    description:
      'Atlas Karting is located on the outskirts of Marrakech on the Route de l\'Ourika, with the Atlas Mountains as a dramatic backdrop. The circuit offers a slightly different layout to the Marrakech Grand Prix with more elevation changes taking advantage of the sloping terrain. The karts are modern and well-maintained, with options for all ages from gentle junior karts to high-performance adult machines. The setting is what distinguishes this venue: racing with the snow-capped Atlas peaks visible beyond the circuit is a uniquely Moroccan go-karting experience. The facility often has fewer crowds than the Route de Safi circuit, meaning shorter wait times and more available sessions. Like the Marrakech Grand Prix, electronic timing is available, and group events including team races and mini-championships can be organized. The venue has basic refreshment facilities and a viewing terrace.',
    highlights: [
      'Scenic setting with Atlas Mountain panorama',
      'Track with elevation changes for varied driving experience',
      'Generally fewer crowds than Route de Safi circuit',
      'Modern kart fleet for all ages and ability levels',
      'Team race events and mini-championship packages',
      'Viewing terrace with refreshments for spectators',
    ],
  },
];

/* ===================================================================
   CAMEL TREKKING EXPERIENCES
   =================================================================== */

const camelTrekkingExperiences = [
  {
    id: 'merzouga-overnight',
    name: 'Merzouga Overnight Trek',
    subtitle: 'Saharan Camp Under the Stars',
    location: 'Erg Chebbi, Merzouga',
    duration: 'Overnight (afternoon to next morning)',
    price: 'From 350 MAD (including camp, meals, sunrise)',
    difficulty: 'Easy',
    difficultyColor: '#2d8a4e',
    image: '/images/hero-desert.webp',
    description:
      'The overnight camel trek from Merzouga into the Erg Chebbi dunes is Morocco\'s most iconic desert experience. In the late afternoon, you mount your dromedary camel at the edge of the dune field and ride for approximately 1 to 1.5 hours as the sun sinks toward the horizon, painting the dunes in shades of gold, copper, and pink. Your caravan follows ancient routes between the dunes, led by experienced Berber camel guides who have navigated this landscape for generations. You arrive at a desert camp as darkness falls. Camps range from basic bivouacs with mattresses under the stars to elaborate luxury setups with private tents, en-suite bathrooms, and gourmet dining. After a traditional Berber dinner of tagine or couscous, the evening unfolds around a campfire with drum music and singing. The desert night sky, free from light pollution, is staggering in its brilliance. You will see the Milky Way in a way that is impossible in any city. The following morning, you wake before dawn to watch the sunrise over the dunes, a moment of profound beauty and silence, before riding your camel back to Merzouga.',
    highlights: [
      '1-1.5 hour sunset camel ride through Erg Chebbi dunes',
      'Overnight in a desert camp with traditional Berber dinner',
      'Campfire evening with drum music and Saharan stargazing',
      'Sunrise over the dunes the following morning',
      'Experienced Berber guides navigate ancient caravan routes',
      'Options from budget bivouac to luxury glamping',
    ],
  },
  {
    id: 'palmeraie-camel',
    name: 'Palmeraie Marrakech',
    subtitle: '1-Hour Palm Grove Camel Ride',
    location: 'Marrakech Palmeraie',
    duration: '1 hour',
    price: '200 MAD',
    difficulty: 'Easy',
    difficultyColor: '#2d8a4e',
    image: '/images/hero-desert.webp',
    description:
      'For visitors short on time or not traveling to the Sahara, the Palmeraie camel ride offers a taste of the camel experience just 15 minutes from Marrakech\'s medina. The ride meanders through the palm groves with views of the Atlas Mountains, passing small Berber settlements and farmland. While it lacks the drama of the Saharan dunes, the Palmeraie ride is a pleasant, accessible introduction to camel riding. The camels are gentle and well-trained, making this suitable for families with children and nervous first-timers. Most rides include mint tea at a Berber house midway through the circuit. Hotel pickup and drop-off is standard. This is one of Marrakech\'s most popular tourist activities and can be booked through virtually any hotel, riad, or tour agency in the city. Morning and sunset slots are preferable to the midday heat.',
    highlights: [
      'Quick and accessible from Marrakech medina (15-minute drive)',
      'Gentle ride through palm groves with Atlas Mountain views',
      'Mint tea stop at a traditional Berber house',
      'Suitable for families and complete beginners',
      'Hotel pickup and drop-off included',
      'Available morning, afternoon, and sunset',
    ],
  },
  {
    id: 'essaouira-camel',
    name: 'Essaouira Beach Sunset',
    subtitle: 'Atlantic Coast Camel Ride',
    location: 'Essaouira beach and Diabat dunes',
    duration: '1.5-2 hours',
    price: '300 MAD',
    difficulty: 'Easy',
    difficultyColor: '#2d8a4e',
    image: '/images/hero-desert.webp',
    description:
      'Essaouira\'s wide, windswept beach and the sand dunes around the village of Diabat provide a stunning coastal setting for camel riding. The ride typically starts on the beach, with the Atlantic waves crashing beside you, before turning inland to the dunes where the ruins of an old Portuguese fortress add a mysterious atmosphere. The dunes here are modest compared to the Sahara but the combination of ocean, beach, and sand creates a uniquely photogenic environment. Sunset rides are timed so you are on the beach as the sun drops into the Atlantic, creating one of Morocco\'s most photographed scenes. The camels are well-accustomed to the beach environment, walking calmly through the shallow surf. This is a romantic, atmospheric activity that Essaouira does better than anywhere else in Morocco. The experience is very different from the Saharan camel treks, trading dune grandeur for oceanic beauty.',
    highlights: [
      'Ride along Essaouira\'s dramatic Atlantic beach',
      'Pass through the Diabat sand dunes and fortress ruins',
      'Sunset timing creates spectacular photography opportunities',
      'Camels walk calmly through shallow ocean surf',
      'Unique combination of beach, dunes, and ocean',
      'Romantic and atmospheric experience',
    ],
  },
  {
    id: 'zagora-trek',
    name: 'Zagora 2-Day Trek',
    subtitle: 'Multi-Day Desert Camel Expedition',
    location: 'Zagora, Draa Valley',
    duration: '2 days / 1 night',
    price: '600-1,000 MAD',
    difficulty: 'Easy to Moderate',
    difficultyColor: '#C4960C',
    image: '/images/hero-desert.webp',
    description:
      'The famous road sign in Zagora reads "Timbuktu 52 jours" (52 days to Timbuktu), a reminder that this was once the starting point for the great trans-Saharan caravans. A 2-day camel trek from Zagora follows in the footsteps of those ancient traders, heading south into the desert of the Draa Valley. The landscape here is different from Merzouga, characterized by flat, stony desert (hamada) interspersed with smaller dune formations and palm-lined oases. The pace is slower and more contemplative than a single overnight at Erg Chebbi, allowing you to settle into the rhythm of the camel and the desert. The first day rides for 3 to 4 hours into the desert, arriving at a bivouac camp by sunset. The second day returns via a different route, often visiting nomadic families who still live in the desert. This trek is ideal for travelers who want a deeper desert experience than a single overnight but cannot commit to the longer Erg Chigaga expeditions.',
    highlights: [
      'Follow ancient trans-Saharan caravan routes from historic Zagora',
      'Flat stony desert and oasis landscape different from Erg Chebbi',
      'Slower, more contemplative pace over two full days',
      'Visit nomadic families living in the desert on return route',
      'Overnight in a remote bivouac camp with stargazing',
      'Good middle ground between 1-night and extended desert treks',
    ],
  },
];

/* ===================================================================
   4x4 OFF-ROAD SAFARI EXPERIENCES
   =================================================================== */

const offRoadExperiences = [
  {
    id: 'agafay-4x4',
    name: 'Agafay Desert Half-Day',
    subtitle: '4x4 Safari Near Marrakech',
    location: 'Agafay Desert (45 minutes from Marrakech)',
    duration: 'Half day (4-5 hours)',
    price: '800-1,200 MAD',
    difficulty: 'Easy (you are a passenger)',
    difficultyColor: '#2d8a4e',
    description:
      'A 4x4 safari through the Agafay Desert offers the thrill of off-road driving without needing to operate a vehicle yourself. An experienced driver pilots a Land Cruiser or similar 4x4 through the rocky desert landscape, navigating dry riverbeds, steep tracks, and open plains at speed. The ride is bouncy, fast, and exhilarating, with the vehicle frequently tilting at angles that feel impossible but are entirely controlled. Half-day programs typically include a scenic drive through Berber villages on the edge of the desert, the off-road safari itself, and a traditional lunch under a tent with panoramic Atlas views. Some operators add quad biking, camel rides, or tea ceremonies to create comprehensive adventure packages. This is an excellent option for travelers who want desert thrills but do not want to drive themselves, including families with children and older travelers who find quad bikes too physical.',
    highlights: [
      'Professional driver handles the off-road driving',
      'Rocky terrain, dry riverbeds, and fast desert plains',
      'Traditional Berber lunch with Atlas Mountain views',
      'Suitable for all ages including children and seniors',
      'Often combined with quad, camel, and tea experiences',
      'Closest desert safari to Marrakech',
    ],
  },
  {
    id: 'erg-chebbi-4x4',
    name: 'Erg Chebbi Full Experience',
    subtitle: 'Complete Saharan 4x4 Adventure',
    location: 'Merzouga and Erg Chebbi dune field',
    duration: 'Full day (8-10 hours)',
    price: '1,200-2,000 MAD',
    difficulty: 'Easy (passenger experience)',
    difficultyColor: '#2d8a4e',
    description:
      'A full-day 4x4 safari around the Erg Chebbi dune field is the most comprehensive way to experience the Merzouga desert landscape. The circuit covers terrain that is impossible to reach on foot or by camel, including the remote black desert (volcanic rock fields), the seasonal salt lake of Dayet Srji where flamingos sometimes gather, abandoned mines, nomadic settlements, and the hidden oases that dot the desert fringe. The driver is also a guide, stopping at points of geological and cultural interest throughout the day. The route typically includes a visit to a Gnaoua music village, a traditional Berber lunch in a desert home, and a drive along the base of the main dune formation with stops for photography. The afternoon section often includes more aggressive off-roading on the flat sandy plains between dune formations, providing the adrenaline component. This tour is the best way to understand the full scope and diversity of the Merzouga desert environment beyond just the famous dunes.',
    highlights: [
      'Full circumnavigation of the Erg Chebbi dune field',
      'Visit black desert, salt lake, mines, and hidden oases',
      'Gnaoua music village cultural stop',
      'Traditional Berber lunch in a desert home',
      'Aggressive off-roading on sandy plains',
      'Most comprehensive Merzouga desert experience available',
    ],
  },
  {
    id: 'draa-valley-4x4',
    name: 'Draa Valley Expedition',
    subtitle: 'Multi-Day Off-Road Journey',
    location: 'Ouarzazate to Zagora to M\'Hamid',
    duration: '2-3 days',
    price: '2,500-5,000 MAD',
    difficulty: 'Easy to Moderate (passenger)',
    difficultyColor: '#C4960C',
    description:
      'The Draa Valley expedition is an epic multi-day 4x4 journey following Morocco\'s longest river from Ouarzazate to M\'Hamid at the edge of the Sahara. The route passes through some of Morocco\'s most dramatic scenery: fortified kasbahs perched on rocky outcrops, vast palm groves stretching along the river valley, ancient trading towns, and increasingly arid desert landscapes as you head south. The 4x4 sections leave the paved road to explore off-road tracks through the desert, visit remote villages inaccessible by regular vehicles, and access viewpoints overlooking the valley from surrounding mountains. Nights are spent in traditional kasbahs or desert bivouacs. The journey culminates at M\'Hamid, the last town before the open Sahara, from where you can continue to Erg Chigaga for the ultimate dune experience. This expedition is ideal for travelers who want to combine off-road adventure with cultural exploration and landscape photography across multiple days.',
    highlights: [
      'Follow the Draa River from mountains to Sahara over 2-3 days',
      'Explore fortified kasbahs, palm groves, and trading towns',
      'Off-road sections through remote desert and mountain tracks',
      'Overnight in traditional kasbahs and desert bivouacs',
      'Culminates at M\'Hamid with option to continue to Erg Chigaga',
      'Perfect blend of adventure, culture, and landscape photography',
    ],
  },
];

/* ===================================================================
   HORSE & MULE RIDING IN DESERT
   =================================================================== */

const desertHorseRiding = [
  {
    name: 'Desert Horse Safari (Merzouga)',
    location: 'Erg Chebbi fringe, Merzouga',
    duration: '2 hours to full day',
    price: '600-1,500 MAD',
    description:
      'Horseback riding along the edge of the Erg Chebbi dunes is a less common but deeply rewarding alternative to camel riding. The Arab-Barb horses used by desert operators are bred for endurance and heat tolerance, carrying riders confidently across the rocky hamada and onto the firmer sand at the dune base. The sensation of cantering alongside towering golden dunes on a spirited horse is extraordinary. Sunset rides to a viewpoint overlooking the dune field are particularly popular. Unlike camels, horses allow experienced riders to cover more ground and explore areas further from the standard tourist routes. Multi-hour and full-day rides venture into remote sections of the desert that few visitors ever see. This experience requires at least intermediate riding ability as the terrain is uneven and the horses are forward-moving.',
    suitableFor: 'Intermediate to advanced riders',
  },
  {
    name: 'Agafay Desert Horse Ride',
    location: 'Agafay Desert, near Marrakech',
    duration: '1.5-3 hours',
    price: '500-1,000 MAD',
    description:
      'The Agafay Desert\'s rocky terrain is well-suited to horseback riding, with established trails winding through the stony landscape between low hills and along dry riverbed tracks. Several operators based in and around the Agafay luxury camp area offer horse rides ranging from gentle 90-minute walks to more adventurous 3-hour treks. The horses are sure-footed on the rocky ground and the open landscape allows for cantering on suitable stretches. Combined packages with a Berber lunch or sunset dinner at an Agafay camp are popular. This is a more convenient option than Merzouga for travelers based in Marrakech who want desert horse riding without the long journey south.',
    suitableFor: 'All levels (gentle routes available for beginners)',
  },
  {
    name: 'Mule Trekking (Atlas Desert Fringe)',
    location: 'Southern Atlas slopes, Ouarzazate region',
    duration: 'Half day to multi-day',
    price: '300-600 MAD per day',
    description:
      'Mules have been the traditional pack and riding animals of Morocco\'s mountains and desert edges for centuries. On the southern slopes of the Atlas, where mountain meets desert, mule trekking offers an authentic, unhurried way to explore remote landscapes. Mules are incredibly sure-footed on rocky trails and can access paths too narrow or steep for horses. Multi-day treks from the Ouarzazate region head into the Anti-Atlas or along ancient trade routes connecting mountain and desert. The pace is slow and meditative, giving you time to absorb the changing landscape. Mule treks are often led by local Berber muleteers who share stories, brew tea at rest stops, and prepare simple but delicious meals. This is Morocco\'s most traditional form of desert-edge transport and a window into a way of life that continues today.',
    suitableFor: 'All levels (mules are gentle and steady)',
  },
];

/* ===================================================================
   OVERNIGHT DESERT CAMPS
   =================================================================== */

const desertCamps = [
  {
    type: 'Budget Bivouac',
    priceRange: '350-600 MAD per person',
    description:
      'Budget desert camps offer the essential Saharan overnight experience at an accessible price point. Accommodation is in shared Berber-style tents with mattresses, blankets, and pillows on the sand floor. Bathroom facilities are basic, typically a shared composting toilet and limited washing facilities. Dinner is a communal affair around a central fire, usually tagine or couscous with bread and salad, followed by mint tea and drum music. The experience is authentic and communal, with travelers from around the world sharing stories under the stars. What budget camps may lack in comfort, they make up for in atmosphere and genuine desert immersion. The star-gazing is identical to luxury camps, and the sunrise is equally spectacular.',
    includes: [
      'Camel ride to camp (1-1.5 hours)',
      'Shared tent accommodation with mattresses',
      'Dinner (tagine or couscous) and breakfast',
      'Campfire with traditional music',
      'Sunrise viewing and camel ride back',
      'Basic shared bathroom facilities',
    ],
    bestFor: 'Backpackers, budget travelers, solo travelers seeking social atmosphere',
  },
  {
    type: 'Mid-Range Camp',
    priceRange: '600-1,200 MAD per person',
    description:
      'Mid-range camps strike an excellent balance between comfort and authenticity. Tents are larger, often private rather than shared, with proper beds, bedding, and sometimes small rugs or cushions for decoration. Bathroom facilities are improved, with flush toilets and basic showers. Meals are more elaborate, often featuring multiple courses with grilled meats, salads, fresh bread, and desserts. The campfire experience remains central, but the setting is more polished with comfortable seating areas and better lighting. Some mid-range camps offer additional activities like sandboarding, small henna painting sessions, and guided stargazing. This is the sweet spot for most travelers who want comfort without the premium price of luxury glamping.',
    includes: [
      'Camel ride to camp',
      'Private tent with proper bed and bedding',
      'Multi-course dinner and full breakfast',
      'Campfire with music and entertainment',
      'Improved bathroom facilities with showers',
      'Additional activities (sandboarding, henna, stargazing)',
    ],
    bestFor: 'Couples, families, travelers wanting comfort without luxury pricing',
  },
  {
    type: 'Luxury Glamping',
    priceRange: '1,500-5,000+ MAD per person',
    description:
      'Luxury desert glamping in Morocco has reached extraordinary levels of sophistication. Top-end camps feature spacious canvas tents with king-size beds, quality linens, Berber rugs, atmospheric lantern lighting, and sometimes even air conditioning. En-suite bathrooms with hot showers, flushing toilets, and branded toiletries are standard. Dining is a gourmet affair with multiple courses, professional service, and sometimes wine. Common areas include furnished lounges, fire pits with comfortable seating, and in some cases, swimming pools in the desert. The experience combines the romance and adventure of sleeping in the Sahara with the comfort of a luxury hotel. Activities often include private camel rides, personalized stargazing with telescopes, 4x4 excursions, and spa treatments. Camps like Merzouga Luxury Desert Camp, Erg Chigaga Grand Desert Camp, and several boutique operations in the Agafay Desert near Marrakech lead this category.',
    includes: [
      'Private camel ride (or 4x4 transfer)',
      'Luxury private tent with en-suite bathroom',
      'Gourmet multi-course dinner with drinks',
      'Premium campfire experience with professional entertainment',
      'Hot showers, quality toiletries, plush bedding',
      'Additional activities: stargazing, sandboarding, spa options',
    ],
    bestFor: 'Honeymooners, luxury travelers, special occasions, those wanting five-star desert experience',
  },
];

/* ===================================================================
   COMPARISON TABLE DATA
   =================================================================== */

const comparisonData = [
  {
    activity: 'Quad Biking (Palmeraie)',
    price: '500-800 MAD',
    duration: '2 hours',
    difficulty: 'Beginner',
    bestLocation: 'Marrakech Palmeraie',
    physicalDemand: 'Low',
  },
  {
    activity: 'Quad Biking (Agafay)',
    price: '600-1,000 MAD',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    bestLocation: 'Agafay Desert',
    physicalDemand: 'Low-Medium',
  },
  {
    activity: 'Quad Biking (Merzouga)',
    price: '400-600 MAD',
    duration: '1.5-2 hours',
    difficulty: 'Intermediate-Advanced',
    bestLocation: 'Erg Chebbi',
    physicalDemand: 'Medium',
  },
  {
    activity: 'Buggy Tour (Agafay)',
    price: '900-1,200 MAD',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    bestLocation: 'Agafay Desert',
    physicalDemand: 'Low',
  },
  {
    activity: 'Buggy Tour (Merzouga)',
    price: '600-900 MAD',
    duration: '1.5-2 hours',
    difficulty: 'Intermediate-Advanced',
    bestLocation: 'Erg Chebbi',
    physicalDemand: 'Low',
  },
  {
    activity: 'Sandboarding',
    price: 'Free with tours',
    duration: '1-2 hours',
    difficulty: 'Beginner',
    bestLocation: 'Erg Chebbi, Merzouga',
    physicalDemand: 'Medium (climbing dunes)',
  },
  {
    activity: 'Go-Karting',
    price: '200 MAD/session',
    duration: '10-15 min/session',
    difficulty: 'All Levels',
    bestLocation: 'Marrakech',
    physicalDemand: 'Low',
  },
  {
    activity: 'Camel Trek (Overnight)',
    price: 'From 350 MAD',
    duration: 'Overnight',
    difficulty: 'Easy',
    bestLocation: 'Merzouga',
    physicalDemand: 'Low',
  },
  {
    activity: 'Camel Ride (Short)',
    price: '200-300 MAD',
    duration: '1-2 hours',
    difficulty: 'Easy',
    bestLocation: 'Palmeraie / Essaouira',
    physicalDemand: 'Low',
  },
  {
    activity: 'Camel Trek (2-Day)',
    price: '600-1,000 MAD',
    duration: '2 days',
    difficulty: 'Easy-Moderate',
    bestLocation: 'Zagora',
    physicalDemand: 'Low-Medium',
  },
  {
    activity: '4x4 Safari (Half-Day)',
    price: '800-1,200 MAD',
    duration: '4-5 hours',
    difficulty: 'Easy (passenger)',
    bestLocation: 'Agafay Desert',
    physicalDemand: 'Low',
  },
  {
    activity: '4x4 Safari (Full Day)',
    price: '1,200-2,000 MAD',
    duration: '8-10 hours',
    difficulty: 'Easy (passenger)',
    bestLocation: 'Merzouga',
    physicalDemand: 'Low',
  },
  {
    activity: '4x4 Expedition (Multi-Day)',
    price: '2,500-5,000 MAD',
    duration: '2-3 days',
    difficulty: 'Easy-Moderate',
    bestLocation: 'Draa Valley',
    physicalDemand: 'Low-Medium',
  },
  {
    activity: 'Desert Horse Riding',
    price: '600-1,500 MAD',
    duration: '2 hours - full day',
    difficulty: 'Intermediate-Advanced',
    bestLocation: 'Merzouga / Agafay',
    physicalDemand: 'Medium-High',
  },
  {
    activity: 'Mule Trekking',
    price: '300-600 MAD/day',
    duration: 'Half day - multi-day',
    difficulty: 'Easy',
    bestLocation: 'Southern Atlas',
    physicalDemand: 'Low',
  },
  {
    activity: 'Budget Desert Camp',
    price: '350-600 MAD',
    duration: 'Overnight',
    difficulty: 'Easy',
    bestLocation: 'Merzouga',
    physicalDemand: 'Low',
  },
  {
    activity: 'Luxury Glamping',
    price: '1,500-5,000+ MAD',
    duration: 'Overnight',
    difficulty: 'Easy',
    bestLocation: 'Merzouga / Agafay',
    physicalDemand: 'Low',
  },
];

/* ===================================================================
   BOOKING TIPS
   =================================================================== */

const bookingTips = [
  {
    icon: CircleDollarSign,
    title: 'Book Directly with Operators',
    description:
      'Hotel concierges, riad staff, and tour agencies in the medina add a 20 to 40 percent commission to the actual operator price. Whenever possible, contact the adventure operator directly through their website or social media. You will get the same experience at a significantly lower price. If you must use an intermediary, negotiate firmly.',
  },
  {
    icon: Shield,
    title: 'Verify Safety Credentials',
    description:
      'Ask operators about their safety record, insurance coverage, vehicle maintenance schedule, and guide qualifications before booking. Reputable operators will answer these questions confidently. Avoid operators who are vague about safety. Check recent reviews on TripAdvisor and Google Maps specifically for safety mentions. Your safety is worth more than saving a few dirhams.',
  },
  {
    icon: Star,
    title: 'Read Recent Reviews',
    description:
      'Focus on reviews from the last 3 to 6 months. Desert adventure operations change ownership, equipment, and quality frequently. A glowing review from two years ago may not reflect the current experience. Look for consistent themes across multiple recent reviews rather than relying on a single standout positive or negative comment.',
  },
  {
    icon: Calendar,
    title: 'Book Ahead in Peak Season',
    description:
      'From October to April, popular activities like sunset quad biking in Agafay and overnight camps in Merzouga book out days or weeks in advance. Christmas, New Year, and Easter periods are particularly busy. Book at least a week ahead for peak season and at least 2 to 3 days ahead in shoulder season. Summer bookings can usually be made same-day.',
  },
  {
    icon: Users,
    title: 'Group Discounts Are Available',
    description:
      'Almost every desert adventure operator offers group discounts for parties of 4 or more. Some offer significant reductions for groups of 8 or more. Even if you are traveling as a couple, ask about joining a group departure for a lower per-person rate. The experience is just as good in a larger group and the savings are meaningful.',
  },
  {
    icon: Camera,
    title: 'Clarify What Is Included',
    description:
      'Before paying, confirm exactly what is included in the quoted price: hotel transfers, equipment, protective gear, meals, drinks, photos, and insurance. Hidden extras can add 30 percent or more to the advertised price. Get inclusions confirmed in writing via WhatsApp or email. The best operators are transparent about their all-inclusive pricing.',
  },
  {
    icon: Clock,
    title: 'Choose the Right Time Slot',
    description:
      'Sunset slots are the most popular and often the most expensive for quad biking and camel rides. Morning slots are cooler, quieter, and usually cheaper. For photography, golden hour (sunrise or sunset) cannot be beaten. Midday activities in summer should be avoided as temperatures can exceed 45 degrees Celsius in the desert.',
  },
  {
    icon: Info,
    title: 'Understand Cancellation Policies',
    description:
      'Weather, particularly sandstorms and heavy rain, can cancel desert activities. Understand the operator\'s cancellation and refund policy before booking. The best operators offer free rescheduling or full refunds for weather cancellations. Avoid operators who charge cancellation fees for weather-related disruptions.',
  },
];

/* ===================================================================
   WHAT TO PACK FOR DESERT ADVENTURES
   =================================================================== */

const whatToPack = [
  { item: 'Sunscreen SPF 50+', note: 'The desert sun is relentless. Reapply every 2 hours. Bring a high-SPF lip balm as well.' },
  { item: 'Sunglasses (UV400)', note: 'Essential for every activity. Sand reflection doubles UV exposure. Wrap-around styles prevent peripheral glare.' },
  { item: 'Scarf or shemagh', note: 'The single most versatile desert item. Sun protection, dust mask, pillow, towel, and cultural accessory in one.' },
  { item: 'Closed-toe shoes', note: 'Boots for quad/buggy riding. Sturdy sandals acceptable for camel rides. Sand gets everywhere regardless.' },
  { item: 'Lightweight long sleeves', note: 'Sun protection is more effective than sunscreen. Breathable, moisture-wicking fabric is ideal.' },
  { item: 'Warm layer for evenings', note: 'Desert temperatures drop dramatically after sunset. A fleece or light down jacket is essential October to April.' },
  { item: 'Water bottle (1.5L minimum)', note: 'Dehydration is the biggest health risk in the desert. Drink before you feel thirsty.' },
  { item: 'Camera with dust protection', note: 'A ziplock bag protects your camera between shots. Desert sand and fine dust destroy electronics quickly.' },
  { item: 'Headlamp or torch', note: 'Essential for overnight camps. Moving around a dark desert camp without light is difficult and dangerous.' },
  { item: 'Cash in small denominations', note: 'Tips, extra drinks, and small purchases at camps or villages require cash. ATMs do not exist in the desert.' },
  { item: 'Basic first aid kit', note: 'Plasters, antiseptic, rehydration salts, and any personal medications. Medical help can be hours away.' },
  { item: 'Dry bag or ziplock bags', note: 'Protect phone, wallet, and electronics from sand. A large dry bag keeps overnight supplies sand-free.' },
  { item: 'Moisturizer and lip balm', note: 'Desert air is extremely dry. Your skin and lips will crack without protection, especially overnight.' },
  { item: 'Swimwear (luxury camps)', note: 'Some luxury Agafay and Merzouga camps have pools. Check in advance and pack accordingly.' },
];

/* ===================================================================
   RELATED PAGES
   =================================================================== */

const relatedPages = [
  { href: '/desert', title: 'Moroccan Desert Guide', description: 'Comprehensive guide to Morocco\'s desert regions, landscapes, and planning.' },
  { href: '/sahara', title: 'Sahara Desert', description: 'In-depth guide to the Moroccan Sahara, Erg Chebbi, and Erg Chigaga.' },
  { href: '/adventure', title: 'Adventure Morocco', description: 'All adventure sports from surfing to rock climbing to paragliding.' },
  { href: '/horse-riding', title: 'Horse Riding', description: 'Beach rides, mountain treks, desert horse safaris, and Tbourida shows.' },
  { href: '/camping', title: 'Camping in Morocco', description: 'Wild camping, glamping, and campsite guide across Morocco.' },
  { href: '/stargazing', title: 'Stargazing', description: 'Best dark sky locations, Saharan astronomy, and stargazing tours.' },
  { href: '/safety', title: 'Safety Guide', description: 'Staying safe in Morocco including desert-specific safety advice.' },
  { href: '/packing', title: 'Packing Guide', description: 'Complete packing lists for every type of Moroccan adventure.' },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function DesertAdventuresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-desert.webp"
          alt="Quad biking through the golden desert dunes of Morocco at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1814]/70 via-[#1A1814]/50 to-[#1A1814]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#C4960C]">Desert Adventures</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Desert Adventures &amp;
            <span className="block text-[#C4960C]">ATV / Quad Biking</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ride quad bikes through palm groves, race buggies across rocky deserts,
            sandboard down towering dunes, trek by camel to a Saharan camp under the stars,
            and explore Morocco&apos;s wild landscapes by 4x4.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Bike className="w-4 h-4 text-[#C4960C]" /> Quad &amp; ATV
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Zap className="w-4 h-4 text-[#C4960C]" /> Buggy Tours
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Wind className="w-4 h-4 text-[#C4960C]" /> Sandboarding
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Sunrise className="w-4 h-4 text-[#C4960C]" /> Camel Trekking
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Tent className="w-4 h-4 text-[#C4960C]" /> Desert Camps
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTRODUCTION - WHY MOROCCO FOR DESERT ADVENTURES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Why Morocco for Desert Adventures
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the rocky Agafay just outside Marrakech to the towering golden dunes of the
            Sahara, Morocco offers an unrivaled range of desert adventure experiences for every
            budget and thrill level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMorocco.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          QUAD BIKING / ATV EXPERIENCES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Bike className="w-4 h-4" /> Quad Biking &amp; ATV
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Quad Biking &amp; ATV Experiences
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three distinct terrains, three completely different experiences. From gentle palm
              grove rides to adrenaline-pumping Saharan dune crossings, Morocco&apos;s quad biking
              options cater to every skill level.
            </p>
          </div>

          <div className="space-y-12">
            {quadBikingExperiences.map((exp, index) => (
              <div key={exp.id} className="card-moroccan overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={exp.image}
                      alt={`Quad biking in ${exp.name}, Morocco`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-white text-xs font-medium"
                        style={{ backgroundColor: exp.difficultyColor }}
                      >
                        {exp.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{exp.name}</h3>
                    <p className="text-[var(--color-primary)] font-medium mb-4">{exp.subtitle}</p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                        <Clock className="w-3 h-3" /> {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#C4960C]/10 text-[#C4960C]">
                        <CircleDollarSign className="w-3 h-3" /> {exp.price}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#C4960C]" /> Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#2d8a4e] mt-0.5 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                        <Info className="w-4 h-4 text-[var(--color-primary)]" /> Tips
                      </h4>
                      <ul className="space-y-1">
                        {exp.tips.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          QUAD BIKING SAFETY & WHAT TO WEAR
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Quad Biking Safety &amp; What to Wear
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Desert terrain is unforgiving. Proper preparation and awareness of safety
            fundamentals ensure your adventure stays thrilling, not dangerous.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Safety Tips */}
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--color-primary)]" /> Safety Essentials
              </h3>
              <ul className="space-y-3">
                {quadSafetyTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <AlertTriangle className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Wear */}
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-[var(--color-primary)]" /> What to Wear
              </h3>
              <div className="space-y-4">
                {quadWhatToWear.map((item) => (
                  <div key={item.item} className="border-b border-[var(--border-light)] pb-3 last:border-0 last:pb-0">
                    <p className="font-semibold text-[var(--text-primary)] text-sm">{item.item}</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BUGGY TOURS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Zap className="w-4 h-4" /> Buggy Tours
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Buggy Tours
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              More power, more stability, and room for two. Desert buggies deliver the
              high-speed off-road experience with roll-cage safety and open-air exhilaration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {buggyExperiences.map((exp) => (
              <div key={exp.id} className="card-moroccan overflow-hidden">
                <div className="relative h-56">
                  <img
                    src={exp.image}
                    alt={`Buggy tour in ${exp.name}, Morocco`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-white text-xs font-medium"
                      style={{ backgroundColor: exp.difficultyColor }}
                    >
                      {exp.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{exp.name}</h3>
                  <p className="text-[var(--color-primary)] font-medium text-sm mb-3">{exp.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                      <Clock className="w-3 h-3" /> {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#C4960C]/10 text-[#C4960C]">
                      <CircleDollarSign className="w-3 h-3" /> {exp.price}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#C4960C]" /> Highlights
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2d8a4e] mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                    <Info className="w-4 h-4 text-[var(--color-primary)]" /> Tips
                  </h4>
                  <ul className="space-y-1">
                    {exp.tips.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SANDBOARDING
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Wind className="w-4 h-4" /> Sandboarding
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Sandboarding
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ride down towering Saharan dunes on a board. Free with most desert tours and
              accessible to everyone, sandboarding is one of Morocco&apos;s most unique thrills.
            </p>
          </div>

          {/* Sandboarding Locations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {sandboardingExperiences.map((exp) => (
              <div key={exp.id} className="card-moroccan overflow-hidden">
                <div className="relative h-56">
                  <img
                    src={exp.image}
                    alt={`Sandboarding at ${exp.name}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-white text-xs font-medium"
                      style={{ backgroundColor: exp.difficultyColor }}
                    >
                      {exp.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#2d8a4e] text-white text-xs font-medium">
                      {exp.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{exp.name}</h3>
                  <p className="text-[var(--color-primary)] font-medium text-sm mb-3">{exp.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                      <Clock className="w-3 h-3" /> {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#C4960C]" /> Highlights
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2d8a4e] mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                    <Info className="w-4 h-4 text-[var(--color-primary)]" /> Tips
                  </h4>
                  <ul className="space-y-1">
                    {exp.tips.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Sandboarding Beginner Tips */}
          <div className="card-moroccan p-6 lg:p-8">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[var(--color-primary)]" /> Sandboarding Tips for Beginners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sandboardingBeginnerTips.map((tip, index) => (
                <div key={tip.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--color-primary)]">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1">{tip.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GO-KARTING
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Flag className="w-4 h-4" /> Go-Karting
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Go-Karting
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Take a break from the sand and dust. Marrakech has purpose-built karting
              circuits with karts for all ages, electronic timing, and evening floodlit sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {goKartingExperiences.map((exp) => (
              <div key={exp.id} className="card-moroccan p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{exp.name}</h3>
                <p className="text-[var(--color-primary)] font-medium text-sm mb-3">{exp.subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                    <Clock className="w-3 h-3" /> {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#C4960C]/10 text-[#C4960C]">
                    <CircleDollarSign className="w-3 h-3" /> {exp.price}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: exp.difficultyColor }}
                  >
                    {exp.difficulty}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#C4960C]" /> Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2d8a4e] mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CAMEL TREKKING
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Sunrise className="w-4 h-4" /> Camel Trekking
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Camel Trekking
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The quintessential Moroccan desert experience. From quick palm grove rides to
              multi-day Saharan expeditions, camel trekking connects you to centuries of
              nomadic tradition.
            </p>
          </div>

          <div className="space-y-8">
            {camelTrekkingExperiences.map((exp, index) => (
              <div key={exp.id} className="card-moroccan overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${index % 2 === 1 ? '' : ''}`}>
                  <div className="relative h-64 lg:h-auto lg:col-span-2">
                    <img
                      src={exp.image}
                      alt={`Camel trekking at ${exp.name}, Morocco`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 rounded-full text-white text-xs font-medium"
                        style={{ backgroundColor: exp.difficultyColor }}
                      >
                        {exp.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 lg:col-span-3">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{exp.name}</h3>
                    <p className="text-[var(--color-primary)] font-medium mb-3">{exp.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                        <Clock className="w-3 h-3" /> {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#C4960C]/10 text-[#C4960C]">
                        <CircleDollarSign className="w-3 h-3" /> {exp.price}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#C4960C]" /> Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2d8a4e] mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4x4 OFF-ROAD SAFARI
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Compass className="w-4 h-4" /> 4x4 Off-Road
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              4x4 Off-Road Safari
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Let a professional driver handle the terrain while you absorb the scenery. From
              half-day Agafay excursions to multi-day Draa Valley expeditions, 4x4 safaris
              access terrain nothing else can reach.
            </p>
          </div>

          <div className="space-y-8">
            {offRoadExperiences.map((exp) => (
              <div key={exp.id} className="card-moroccan p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{exp.name}</h3>
                    <p className="text-[var(--color-primary)] font-medium text-sm mb-3">{exp.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                        <Clock className="w-3 h-3" /> {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#C4960C]/10 text-[#C4960C]">
                        <CircleDollarSign className="w-3 h-3" /> {exp.price}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: exp.difficultyColor }}
                      >
                        {exp.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{exp.description}</p>
                  </div>
                  <div className="lg:w-1/3">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#C4960C]" /> Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2d8a4e] mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HORSE & MULE RIDING IN DESERT
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Heart className="w-4 h-4" /> Horse &amp; Mule Riding
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Horse &amp; Mule Riding in the Desert
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Beyond camels, Morocco&apos;s deserts can be explored on horseback or by
              traditional mule. Each animal offers a distinct pace and perspective on the landscape.
            </p>
          </div>

          <div className="space-y-6">
            {desertHorseRiding.map((ride) => (
              <div key={ride.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{ride.name}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <MapPin className="w-3 h-3" /> {ride.location}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                    <Clock className="w-3 h-3" /> {ride.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#C4960C]/10 text-[#C4960C]">
                    <CircleDollarSign className="w-3 h-3" /> {ride.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Users className="w-3 h-3" /> {ride.suitableFor}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{ride.description}</p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <Info className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-[var(--text-primary)]">See also:</strong>{' '}
                  For comprehensive coverage of horse riding across all of Morocco including beach rides,
                  mountain treks, Tbourida shows, and riding center reviews, visit our dedicated{' '}
                  <Link href="/horse-riding" className="text-[var(--color-primary)] underline hover:no-underline">
                    Horse Riding &amp; Equestrian Guide
                  </Link>.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OVERNIGHT DESERT CAMPS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Tent className="w-4 h-4" /> Desert Camps
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Overnight Desert Camps
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Sleeping in the Sahara is a bucket-list experience. Choose from basic bivouacs
              with authentic atmosphere to luxury glamping with en-suite bathrooms and gourmet
              dining.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {desertCamps.map((camp) => (
              <div key={camp.type} className="card-moroccan overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[var(--color-primary)]/10">
                      <Tent className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)]">{camp.type}</h3>
                      <p className="text-sm text-[#C4960C] font-medium">{camp.priceRange}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{camp.description}</p>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Includes:</h4>
                  <ul className="space-y-1.5 mb-4">
                    {camp.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2d8a4e] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 border-t border-[var(--border-light)] bg-[var(--color-primary)]/5">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> {camp.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPARISON TABLE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Desert Activities at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Compare all desert adventure activities by price, duration, difficulty, and
            best location to find your perfect experience.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left p-3 font-semibold text-[var(--text-primary)] whitespace-nowrap">Activity</th>
                    <th className="text-left p-3 font-semibold text-[var(--text-primary)] whitespace-nowrap">Price</th>
                    <th className="text-left p-3 font-semibold text-[var(--text-primary)] whitespace-nowrap">Duration</th>
                    <th className="text-left p-3 font-semibold text-[var(--text-primary)] whitespace-nowrap">Difficulty</th>
                    <th className="text-left p-3 font-semibold text-[var(--text-primary)] whitespace-nowrap">Best Location</th>
                    <th className="text-left p-3 font-semibold text-[var(--text-primary)] whitespace-nowrap">Physical Demand</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.activity}
                      className={index % 2 === 0 ? '' : 'bg-[var(--color-primary)]/[0.02]'}
                    >
                      <td className="p-3 font-medium text-[var(--text-primary)] whitespace-nowrap">{row.activity}</td>
                      <td className="p-3 text-[#C4960C] font-medium whitespace-nowrap">{row.price}</td>
                      <td className="p-3 text-[var(--text-secondary)] whitespace-nowrap">{row.duration}</td>
                      <td className="p-3 text-[var(--text-secondary)] whitespace-nowrap">{row.difficulty}</td>
                      <td className="p-3 text-[var(--text-secondary)] whitespace-nowrap">{row.bestLocation}</td>
                      <td className="p-3 text-[var(--text-secondary)] whitespace-nowrap">{row.physicalDemand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-[var(--border-light)] bg-[var(--color-primary)]/5">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Note:</strong>{' '}
                Prices are in MAD (Moroccan Dirham). 1 EUR = approximately 11 MAD. Prices vary by
                operator, season, and group size. Budget for tips (10-20% is standard for guides).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOOKING TIPS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--bg-alt)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Smart booking saves money and ensures a better experience. Follow these
            guidelines to get the most from your desert adventures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookingTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-lg bg-[var(--color-primary)]/10">
                      <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT TO PACK
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            What to Pack for Desert Adventures
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The desert is beautiful but harsh. The right gear makes the difference between a
            comfortable adventure and an uncomfortable ordeal.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left p-3 font-semibold text-[var(--text-primary)]">Item</th>
                    <th className="text-left p-3 font-semibold text-[var(--text-primary)]">Why You Need It</th>
                  </tr>
                </thead>
                <tbody>
                  {whatToPack.map((item, index) => (
                    <tr
                      key={item.item}
                      className={index % 2 === 0 ? '' : 'bg-[var(--color-primary)]/[0.02]'}
                    >
                      <td className="p-3 font-medium text-[var(--text-primary)] whitespace-nowrap align-top">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2d8a4e] flex-shrink-0" />
                          {item.item}
                        </span>
                      </td>
                      <td className="p-3 text-[var(--text-secondary)]">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-[var(--border-light)] bg-[var(--color-primary)]/5">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Pro tip:</strong>{' '}
                Pack everything in a dry bag or large ziplock bags. Desert sand and dust penetrate
                regular bags and backpacks. Your electronics and clean clothes will thank you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--bg-alt)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Moroccan adventure with these complementary guides.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-5 hover:border-[var(--color-primary)]/30 transition-colors group"
              >
                <h3 className="font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
                  {page.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Compass className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for Your Desert Adventure?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you dream of racing across dunes on a quad bike, sleeping under Saharan
            stars, or sandboarding down towering golden slopes, Morocco&apos;s deserts are waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/desert"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Sun className="w-4 h-4" /> Desert Guide
            </Link>
            <Link
              href="/adventure"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Mountain className="w-4 h-4" /> Adventure Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Sun,
  Moon,
  Star,
  Compass,
  Thermometer,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Car,
  Tent,
  Camera,
  Backpack,
  Wind,
  Shield,
  Sunrise,
  Sunset,
  Mountain,
  Info,
  Lightbulb,
  Users,
  Heart,
  Eye,
  Droplets,
  Footprints,
  Sparkles,
  Binoculars,
  Navigation,
  Globe,
  BookOpen,
  Leaf,
  Bug,
  Zap,
  CircleDot,
  HandCoins,
  MessageSquare,
  ThumbsUp,
  XCircle,
  ShieldCheck,
  BadgeCheck,
  Calendar,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Sahara Desert Guide Morocco 2025-2026 | Merzouga, Erg Chebbi, Erg Chigaga, Camps & Treks',
  description:
    'The ultimate Sahara Desert guide for Morocco. Compare Erg Chebbi vs Erg Chigaga, find luxury and budget desert camps, plan camel treks, sandboarding, stargazing, and 4x4 safaris. Packing lists, safety tips, Berber culture, photography advice, and how to get there from Marrakech or Fes.',
  keywords: [
    'Sahara Desert Morocco',
    'Merzouga desert camp',
    'Erg Chebbi sand dunes',
    'Erg Chigaga Morocco',
    'Morocco camel trekking',
    'luxury desert camp Morocco',
    'Sahara sandboarding',
    'Morocco desert photography',
    'desert glamping Morocco',
    'Morocco desert stargazing',
    'Sahara camping Morocco',
    'what to pack Sahara',
    'best time Sahara Morocco',
    'Morocco desert adventure',
    'Berber culture Sahara',
    'Sahara wildlife Morocco',
    'Morocco desert safety',
    'Sahara quad biking',
    'desert 4x4 safari Morocco',
    'Sahara night sky Milky Way',
    'responsible desert tourism Morocco',
    'Morocco desert scams',
    'Sahara tour operators Morocco',
    'Marrakech to Sahara',
    'Fes to Merzouga',
  ],
  openGraph: {
    title: 'Sahara Desert Guide Morocco 2025-2026 | Complete Travel Guide',
    description:
      'Everything you need for the ultimate Sahara experience: Erg Chebbi vs Erg Chigaga, desert camps, camel treks, sandboarding, stargazing, photography tips, and Berber culture.',
    url: 'https://citytoursmorocco.com/sahara',
    type: 'article',
    images: [
      {
        url: '/images/hero-sahara-sunrise.webp',
        width: 1200,
        height: 630,
        alt: 'Golden sunrise over the Sahara Desert sand dunes in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahara Desert Guide Morocco 2025-2026',
    description:
      'Complete guide to Merzouga, Erg Chebbi, Erg Chigaga. Camel treks, luxury camps, stargazing, photography, and Berber culture in the world\'s largest desert.',
    images: ['/images/hero-sahara-sunrise.webp'],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/sahara',
  },
};

/* =====================================================================
   DATA: ERG CHEBBI VS ERG CHIGAGA COMPARISON
   ===================================================================== */

const ergComparison = [
  { feature: 'Location', chebbi: 'Near Merzouga, eastern Morocco', chigaga: 'Near M\'Hamid El Ghizlane, southern Morocco' },
  { feature: 'Dune Height', chebbi: 'Up to 150 meters', chigaga: 'Up to 300 meters' },
  { feature: 'Dune Field Size', chebbi: '22 km long, 5 km wide', chigaga: '40 km long, 15 km wide' },
  { feature: 'Access', chebbi: 'Paved road to dune edge', chigaga: '50 km off-road by 4x4 only' },
  { feature: 'From Marrakech', chebbi: '9-10 hours drive', chigaga: '8-9 hours + 2 hour 4x4 transfer' },
  { feature: 'From Fes', chebbi: '8-9 hours drive', chigaga: '12+ hours (Fes is far)' },
  { feature: 'Number of Camps', chebbi: '100+ camps all levels', chigaga: '~15 camps, mostly mid-luxury' },
  { feature: 'Crowd Level', chebbi: 'Moderate to high in peak season', chigaga: 'Very low, often private' },
  { feature: 'Budget Camp Price', chebbi: '200-800 MAD/night', chigaga: '600-1,200 MAD/night' },
  { feature: 'Luxury Camp Price', chebbi: '2,500-8,000+ MAD/night', chigaga: '3,000-6,000 MAD/night' },
  { feature: 'Camel Trek', chebbi: '1-1.5 hours to camp', chigaga: '2-day trek from M\'Hamid' },
  { feature: 'Stargazing Quality', chebbi: 'Excellent (Bortle 1-2)', chigaga: 'World-class (Bortle 1)' },
  { feature: 'Nearby Attractions', chebbi: 'Khamlia village, Rissani souk, Todra Gorge', chigaga: 'Iriki dry lake, nomad camps, Draa Valley' },
  { feature: 'Best For', chebbi: 'First-timers, photographers, families', chigaga: 'Adventurers, solitude seekers, repeat visitors' },
];

/* =====================================================================
   DATA: DESERT EXPERIENCES
   ===================================================================== */

const desertExperiences = [
  {
    icon: Compass,
    name: 'Camel Trekking (1-Night)',
    duration: '1 night / 2 days',
    price: '400-1,200 MAD',
    description:
      'The classic Sahara experience. Ride a dromedary camel for 1-1.5 hours through towering dunes as the sun sets, arriving at a desert camp nestled between dunes. Enjoy a traditional tagine dinner under the stars, sleep in Berber tents, then wake before dawn for a sunrise that paints the dunes in shades of pink, gold, and amber. The return camel ride in the morning light is equally spectacular.',
    tips: 'Wear loose trousers and closed shoes. Bring a scarf for sand protection. The camels are gentle but the mount/dismount is abrupt, so hold on tight. Tip your camel handler 20-50 MAD.',
    bestFor: 'First-time visitors, couples, those with limited time',
  },
  {
    icon: Footprints,
    name: 'Camel Trekking (2-Night)',
    duration: '2 nights / 3 days',
    price: '1,200-3,000 MAD',
    description:
      'A deeper desert immersion. The first night is spent at a standard camp; the second night at a more remote bivouac where silence is absolute. You cover more ground, see diverse terrain from reg (stony desert) to erg (sand sea), and have time for sandboarding, dune hiking, and unhurried stargazing. The extra night transforms the experience from a highlight to a life-changing journey.',
    tips: 'Pack light but bring extra warm layers for the second night, which is often at a more basic camp. Bring a sleeping bag liner for added warmth and hygiene.',
    bestFor: 'Those wanting more depth without a full expedition commitment',
  },
  {
    icon: Navigation,
    name: 'Multi-Day Camel Expedition (3-7 Days)',
    duration: '3-7 nights',
    price: '3,000-12,000 MAD',
    description:
      'The ultimate desert experience. Trek 15-25 km per day by camel, camping at a different location each night. Cross varied landscapes from dried riverbeds to towering dune fields. Visit nomad families, learn traditional desert survival skills, and experience total disconnection from the modern world. The M\'Hamid to Erg Chigaga circuit is the most popular multi-day route.',
    tips: 'Padded cycling shorts help with saddle soreness. Bring electrolyte tablets. A support vehicle often carries gear and water. Expect 5-7 hours of riding per day. Not recommended for those with back problems.',
    bestFor: 'Adventurers, experienced travelers, those seeking transformative experiences',
  },
  {
    icon: Car,
    name: '4x4 Desert Safari',
    duration: 'Half-day to 3 days',
    price: '500-4,000 MAD',
    description:
      'Explore the desert by Land Cruiser, covering vast distances impossible on camelback. Visit remote fossil sites near Rissani where 350-million-year-old marine fossils lie scattered across the surface. Cross the black volcanic desert of Taouz, see the dried Iriki salt lake with its surreal mirror reflections after rain, and traverse the hammada (stony desert) between dune fields. Essential for reaching Erg Chigaga.',
    tips: 'Negotiate price and itinerary in advance. Ensure the vehicle has working seatbelts, spare tires, and the driver carries water and a satellite phone. Sit in the front for less bouncing.',
    bestFor: 'Those who prefer not to ride camels, families with young children, reaching remote sites',
  },
  {
    icon: Wind,
    name: 'Sandboarding',
    duration: '1-3 hours',
    price: 'Free (camp boards) to 300 MAD (guided)',
    description:
      'Surf the dunes on a sandboard. Most camps at Erg Chebbi provide boards for free. The sand is soft for landings, and riding down a 150-meter dune with nothing but golden sand in every direction is exhilarating. The technique is similar to snowboarding but sand requires waxing the board base with candle wax for speed. The best runs are on dunes with a 30-40 degree incline.',
    tips: 'Go early morning when the sand is cool and firm. By midday it becomes too hot to walk barefoot and too soft for speed. Wear closed shoes for the climb. Goggles help in windy conditions.',
    bestFor: 'Active travelers, thrill-seekers, families with older children',
  },
  {
    icon: Zap,
    name: 'Quad Biking / ATV',
    duration: '1-3 hours',
    price: '300-800 MAD',
    description:
      'Race across the desert on a quad bike, kicking up rooster tails of sand behind you. Circuits range from beginner-friendly flat terrain to challenging dune routes. Most tours depart from Merzouga and loop through the outskirts of Erg Chebbi, with stops at panoramic viewpoints. This is the most adrenaline-pumping desert activity and popular with younger travelers.',
    tips: 'Wear a face covering against sand spray. Goggles are usually provided. Choose a reputable operator with well-maintained bikes and safety briefings. Do not ride during the hottest hours.',
    bestFor: 'Adrenaline seekers, groups, those wanting an active alternative to camels',
  },
  {
    icon: Sparkles,
    name: 'Desert Glamping (Luxury Camps)',
    duration: '1-3 nights',
    price: '2,000-8,000+ MAD/night',
    description:
      'Experience the Sahara without sacrificing comfort. Luxury camps offer private tents with king-size beds, en-suite bathrooms with hot showers, gourmet multi-course dinners with wine, private campfires, and telescope-guided stargazing. The finest camps feature swimming pools, spa services, generators for electricity, and private dune excursions with personal guides.',
    tips: 'Book 2-4 weeks in advance for peak season (October-November, March-April). Top camps include Kam Kam Dunes, Azalai Desert Lodge, and Desert Luxury Camp near Merzouga, and Erg Chigaga Luxury Desert Camp near M\'Hamid.',
    bestFor: 'Honeymooners, luxury travelers, special occasions, those wanting comfort in the wild',
  },
  {
    icon: Tent,
    name: 'Budget Desert Camping',
    duration: '1-2 nights',
    price: '200-600 MAD/night',
    description:
      'Basic bivouac camps with shared tents, foam mattresses, heavy blankets, and communal facilities. Dinner is a group tagine around a campfire with Berber drumming. The experience is less polished but the stars, the silence, and the sunrise are identical to what luxury guests see. Many budget trips from Marrakech include transport, meals, and the camp as a complete package.',
    tips: 'Bring a sleeping bag liner, earplugs, and a headlamp. Shared tents sleep 2-6 people. Bathroom facilities range from basic pit toilets to nothing at all. Embrace the simplicity.',
    bestFor: 'Backpackers, solo travelers, budget-conscious visitors',
  },
  {
    icon: Star,
    name: 'Stargazing Tours',
    duration: '2-4 hours (evening)',
    price: 'Free (camp) to 500 MAD (guided telescope)',
    description:
      'The Sahara offers some of the darkest skies on Earth, rated Bortle Class 1-2 with near-zero light pollution. On a clear moonless night, you can see up to 6,000 stars with the naked eye, the Milky Way as a dense luminous band, shooting stars every few minutes, and planets as bright steady points. Some luxury camps provide telescopes and professional astronomy guides who identify constellations and share Berber star lore.',
    tips: 'Plan around the new moon for the darkest skies. Allow 20 minutes for your eyes to fully dark-adapt. Download a star map app before you lose signal. Bring binoculars for stunning views of star clusters and the Andromeda Galaxy.',
    bestFor: 'Everyone, especially astrophotography enthusiasts and romantics',
  },
];

/* =====================================================================
   DATA: WHEN TO VISIT
   ===================================================================== */

const monthlyGuide = [
  { months: 'October', temp: '28-32C day / 14-18C night', rating: 5, verdict: 'The single best month. Warm days, cool nights, crystal-clear skies, and the date harvest in full swing. The dunes glow their deepest gold. Book camps well in advance as this is peak season.' },
  { months: 'November', temp: '22-28C day / 10-15C night', rating: 5, verdict: 'Superb conditions. Slightly cooler than October with equally clear skies. The Taragalte Music Festival in M\'Hamid often falls in November. Excellent for multi-day treks.' },
  { months: 'March', temp: '24-30C day / 12-16C night', rating: 5, verdict: 'Spring arrives in the desert. Comfortable temperatures, occasional wildflowers in oases, and excellent light for photography. Second-best window alongside October.' },
  { months: 'April', temp: '28-34C day / 14-20C night', rating: 4, verdict: 'Still excellent but warming up. Occasional wind can reduce visibility. The sand starts getting hot by midday. Book early morning activities.' },
  { months: 'December', temp: '18-22C day / 4-8C night', rating: 4, verdict: 'Beautiful clear days but bitterly cold nights. Temperatures can drop below freezing in deep desert. Pack serious warm layers and request extra blankets. Christmas and New Year are popular.' },
  { months: 'January - February', temp: '15-20C day / 0-6C night', rating: 3, verdict: 'The coldest months. Daytime is pleasant but nights can be genuinely freezing. Frost on the dunes at dawn is a rare and beautiful sight. Good deals on camps but pack as if going to the mountains.' },
  { months: 'May', temp: '32-38C day / 18-24C night', rating: 3, verdict: 'Getting hot. Still manageable with early morning and late afternoon activities. Midday rest is essential. Good deals on camps as tourist numbers thin out.' },
  { months: 'September', temp: '34-40C day / 22-26C night', rating: 2, verdict: 'Hot and building toward the autumn sweet spot. The heat begins to break by late September. Only visit if this is your only option, and schedule activities for dawn and dusk only.' },
  { months: 'June - August', temp: '40-50C+ day / 28-35C night', rating: 1, verdict: 'Extremely dangerous. Sand surface temperatures exceed 70C. Heatstroke is a medical emergency. Most camps close entirely. Do not visit. Choose the Atlas Mountains or Atlantic coast instead.' },
];

/* =====================================================================
   DATA: PACKING LIST
   ===================================================================== */

const packingList = [
  {
    category: 'Clothing',
    icon: Backpack,
    items: [
      'Lightweight long-sleeve shirts (2-3, for sun protection)',
      'Loose trousers or harem pants (avoid shorts in the desert)',
      'Warm fleece or down jacket (nights drop to 0-10C in winter)',
      'Desert headwrap / cheche scarf (buy locally for 30-50 MAD)',
      'Comfortable closed-toe shoes for dune walking',
      'Sandals for around camp',
      'Warm socks for cold desert nights',
      'Swimsuit (some luxury camps have pools)',
    ],
  },
  {
    category: 'Sun & Skin Protection',
    icon: Sun,
    items: [
      'SPF 50+ sunscreen (reapply every 2 hours)',
      'UV-blocking polarized sunglasses',
      'Wide-brim hat or cap with neck flap',
      'Lip balm with SPF (lips crack fast in the dry air)',
      'Rich moisturizer (desert humidity is near zero)',
      'Aloe vera gel for sunburn',
      'Insect repellent (mosquitoes near oases at dusk)',
    ],
  },
  {
    category: 'Essential Gear',
    icon: Zap,
    items: [
      'Water bottle (2-3 liters minimum per day)',
      'Headlamp or torch with fresh batteries',
      'Power bank (10,000+ mAh, charge before you go)',
      'Camera with extra batteries (cold nights drain them fast)',
      'Wet wipes and hand sanitizer',
      'Basic first aid kit (plasters, painkillers, anti-diarrhea)',
      'Prescription medications (with copies of prescriptions)',
      'Passport photocopy and emergency contacts on paper',
    ],
  },
  {
    category: 'Comfort & Extras',
    icon: Heart,
    items: [
      'Sleeping bag liner (camps provide blankets but a liner adds warmth and hygiene)',
      'Earplugs and eye mask',
      'Small daypack for dune hikes',
      'Snacks for the journey (nuts, dates, energy bars)',
      'Cash in small denominations (20-50 MAD notes for tips)',
      'Book or journal (no wifi in the deep desert)',
      'Ziplock bags to protect electronics from sand',
      'Toilet paper (basic camps may not provide it)',
    ],
  },
];

/* =====================================================================
   DATA: GETTING TO THE SAHARA
   ===================================================================== */

const gettingThereRoutes = [
  {
    from: 'From Marrakech',
    icon: Car,
    toMerzouga: '9-10 hours via Ouarzazate, Dades Valley, Tinghir, and the Todra Gorge (N10/N13). The most scenic route in Morocco, crossing the High Atlas over the Tizi n\'Tichka pass at 2,260 meters. Most travelers break the journey with an overnight stop in the Dades Valley or Tinghir.',
    toMhamid: '8-9 hours via Ouarzazate and Zagora on the N9. Slightly shorter than the Merzouga route and passes through the spectacular Draa Valley with its 200 km ribbon of palm oases. From M\'Hamid, it is a further 2-hour 4x4 ride to reach Erg Chigaga.',
    options: ['Organized tour (most popular, 800-3,500 MAD all-inclusive)', 'Shared minibus/Supratours (250-400 MAD to Rissani)', 'Private driver (1,500-2,500 MAD/day)', 'Rental car with 4x4 recommended (500-800 MAD/day)'],
  },
  {
    from: 'From Fes',
    icon: Car,
    toMerzouga: '8-9 hours via the Middle Atlas cedar forests, Ifrane, Midelt, and the Ziz Valley (N13). The Ziz Valley section features dramatic gorges and palm-lined oases that rival the Draa Valley. You pass through Errachidia, a fascinating desert-edge city. This is the most direct route to Erg Chebbi.',
    toMhamid: 'Not practical as a direct route (14+ hours). Travelers from Fes heading to Erg Chigaga should fly to Ouarzazate or take a multi-day route via Merzouga and the southern road. Alternatively, bus to Marrakech and take the M\'Hamid route.',
    options: ['Organized tour (most popular for Fes departures)', 'Supratours bus to Errachidia + taxi to Merzouga (200-300 MAD total)', 'Private driver (1,500-2,000 MAD/day)', 'Rental car (Ziz Valley scenic drive is a highlight)'],
  },
  {
    from: 'From Ouarzazate',
    icon: Car,
    toMerzouga: '5-6 hours via Tinghir and the Todra/Dades Gorges. This is the second half of the Marrakech route and is spectacular driving through rose-colored gorge walls, palm oases, and ancient kasbahs. Ouarzazate itself merits a stop for Kasbah Taourirt and Atlas Film Studios.',
    toMhamid: '5-6 hours via Zagora through the Draa Valley (N9). This is a straightforward and beautiful drive south through the longest palm oasis in Morocco. From M\'Hamid, connect to Erg Chigaga by pre-arranged 4x4.',
    options: ['CTM or Supratours bus (80-150 MAD to Zagora or Tinghir)', 'Grand taxi (150-300 MAD, negotiable)', 'Rental car (excellent flexibility)', 'Tour extension from Marrakech'],
  },
];

/* =====================================================================
   DATA: CAMP TYPES
   ===================================================================== */

const campTypes = [
  {
    type: 'Budget Camps',
    priceRange: '200-600 MAD/night',
    description: 'Basic bivouac camping at its most affordable. Shared Berber tents with foam mattresses and heavy woolen blankets. Communal facilities range from basic pit toilets to nothing at all. Dinner is a group tagine cooked over fire, followed by drumming around the campfire. These camps prove that the magic of the Sahara is not about thread count but about the sky above you.',
    features: ['Shared tents (2-6 people per tent)', 'Foam mattresses and heavy blankets', 'Communal or no toilet facilities', 'Simple tagine dinner and bread breakfast', 'Group campfire with Berber drumming', 'Basic but clean and functional'],
    considerations: 'Best for backpackers and solo travelers. The stars and sunrise are identical to luxury camps. Main drawbacks are shared sleeping quarters, minimal bathroom facilities, and cold nights without heating. Bring your own sleeping bag liner and toilet paper.',
  },
  {
    type: 'Mid-Range Camps',
    priceRange: '600-2,000 MAD/night',
    description: 'A significant step up in comfort while retaining authentic desert character. Private or semi-private tents with proper bedding and pillows. Shared but clean bathroom blocks with running water and sometimes hot showers. Better quality meals with more variety, and often a more scenic camp location further into the dunes. This is the sweet spot for most travelers.',
    features: ['Private or semi-private tents (2-3 per tent)', 'Real mattresses with clean linens and pillows', 'Shared bathroom block with running water', 'Multi-dish dinner with salad, tagine, dessert', 'Music entertainment and guided dune walks', 'Some camps offer sandboarding and stargazing'],
    considerations: 'The best value option for most visitors. You get privacy, proper bedding, and functioning bathrooms without the luxury price tag. Examples include Erg Chebbi Camp, Merzouga Desert Camp, and Camp Mars at Erg Chigaga. Book directly for better rates than through agencies.',
  },
  {
    type: 'Luxury Glamping',
    priceRange: '2,000-8,000+ MAD/night',
    description: 'Five-star comfort in the middle of the Sahara. Private luxury tents with king-size beds, premium linens, Berber rugs, lantern lighting, and en-suite bathrooms with hot showers and flushing toilets. Gourmet multi-course dinners with wine, private campfires, telescope-guided stargazing, and personal guides. The finest camps feature swimming pools, spa treatments, air conditioning, and electricity.',
    features: ['Private suite-style tents with en-suite bathroom', 'King beds with premium linens and heating', 'Hot showers and flushing toilets', 'Gourmet multi-course dinner with wine pairing', 'Private campfire, music, and stargazing', 'Some with pool, spa, electricity, and A/C'],
    considerations: 'Worth the splurge for honeymooners and once-in-a-lifetime celebrations. Top camps: Kam Kam Dunes and Azalai Desert Lodge (Erg Chebbi), Erg Chigaga Luxury Desert Camp (M\'Hamid), Desert Luxury Camp (Merzouga). Book 2-4 weeks ahead in peak season. Prices usually include 4x4 transfer, all meals, and activities.',
  },
];

/* =====================================================================
   DATA: BERBER CULTURE
   ===================================================================== */

const berberCultureTopics = [
  {
    title: 'The Amazigh People',
    content: 'The indigenous inhabitants of the Sahara are the Amazigh (commonly called Berbers), whose presence in North Africa predates the Arab conquest by millennia. The desert Amazigh are predominantly Ait Atta and Ait Khebbach tribes, semi-nomadic people who have adapted to one of the harshest environments on Earth. Their deep knowledge of water sources, caravan routes, and desert survival is passed down through oral tradition across generations.',
  },
  {
    title: 'Nomadic Life Today',
    content: 'While most Saharan Berbers have settled in villages like Merzouga, M\'Hamid, and Rissani, some families still practice semi-nomadic pastoralism, moving with their goat herds between seasonal pastures. Visiting a nomad family is one of the most authentic desert experiences available. You will be welcomed with mint tea and bread, and can learn about their daily routines, tent construction, and the challenges of modern nomadic life. Always bring a small gift such as tea, sugar, or school supplies for children.',
  },
  {
    title: 'Gnaoua Music of Khamlia',
    content: 'The village of Khamlia, 3 km south of Merzouga, is home to a community descended from formerly enslaved people brought from sub-Saharan Africa. Their Gnaoua music, recognized by UNESCO as intangible cultural heritage, features hypnotic rhythms played on metal castanets (qraqeb), deep bass drums (guembri), and call-and-response singing that induces a trance-like state. Performances happen throughout the day. The visit is free but a donation of 50-100 MAD per person is expected and deeply appreciated.',
  },
  {
    title: 'Desert Cuisine',
    content: 'Saharan cooking is defined by simplicity and resourcefulness. The classic desert tagine uses preserved vegetables, dried meat, and aromatic spices slow-cooked in a clay pot over embers. Madfouna, the Berber pizza, is a flatbread stuffed with spiced meat, onions, and eggs, baked in hot sand, a specialty of Rissani. Dates from the surrounding oases are ever-present, and mint tea, prepared with an elaborate pouring ritual, is the social lubricant of every desert encounter.',
  },
  {
    title: 'Traditional Crafts',
    content: 'Saharan artisans are renowned for their silver jewelry featuring geometric Amazigh symbols, hand-woven wool carpets with desert motifs, and leatherwork from Rissani and Zagora. The famous blue indigo cloth (cheche) worn by desert nomads serves both as sun protection and cultural identity marker. In Tamegroute, potters produce the distinctive green-glazed ceramics using techniques unchanged for centuries. Buying directly from artisans ensures fair prices and supports the community.',
  },
];

/* =====================================================================
   DATA: PHOTOGRAPHY TIPS
   ===================================================================== */

const photographyTips = [
  {
    title: 'Golden Hour is Everything',
    icon: Sunrise,
    content: 'The desert golden hour is extraordinary and lasts longer than in other landscapes because the flat horizon extends the sun\'s low-angle phase. Arrive at your shooting position 30 minutes before sunrise or 1 hour before sunset. The color palette shifts through deep purple, rose, gold, orange, and amber in rapid succession. The best images almost always come in the first and last 20 minutes of light.',
    proTip: 'Use spot metering on the brightest part of the dunes to preserve highlight detail. Underexpose by 0.5-1 stop for richer, more saturated colors.',
  },
  {
    title: 'Dune Patterns & Textures',
    icon: Eye,
    content: 'Wind creates mesmerizing patterns in the sand: parallel ripples, scalloped edges, knife-edge ridgelines, and sweeping S-curves. These are best photographed at low angles with strong side light in early morning or late afternoon. A telephoto lens (70-200mm) compresses dune layers beautifully, while getting low to the ground with a wide-angle emphasizes the foreground ripple patterns.',
    proTip: 'Shoot along the dune surface at ankle height to emphasize ripple patterns. Use a small aperture (f/11-f/16) for maximum depth of field.',
  },
  {
    title: 'Camel Caravan Silhouettes',
    icon: Sunset,
    content: 'The silhouette of a camel caravan against the setting sun is the iconic Sahara image. Position yourself on a high dune looking down at the caravan below, or shoot from the side with the caravan between you and the sun. Long shadows in late afternoon create dramatic leading lines. The most dramatic shots use the camels and riders as dark shapes against a blazing sky.',
    proTip: 'Ask your guide to arrange a moment where the caravan crosses a ridgeline. Shoot at f/8-f/11 for maximum sharpness. Underexpose by 1-2 stops for rich silhouettes.',
  },
  {
    title: 'Astrophotography in the Sahara',
    icon: Star,
    content: 'The Sahara is a world-class location for night sky photography. The Milky Way core is visible from March to October. Use a wide-angle lens (14-24mm), maximum aperture (f/2.8 or wider), ISO 3200-6400, and exposures of 15-25 seconds. Include a tent, camel, or dune ridgeline in the foreground for scale and interest.',
    proTip: 'Bring a sturdy tripod and push the legs deep into the sand for stability. Use manual focus on a bright star with live view magnification. Shoot RAW for maximum post-processing flexibility. A remote shutter or 2-second timer eliminates camera shake.',
  },
  {
    title: 'Protecting Your Gear',
    icon: Shield,
    content: 'Desert sand is the mortal enemy of camera equipment. Fine grains infiltrate every crevice, scratch lens coatings, and jam autofocus mechanisms. Sandstorms can arise with only minutes of warning, turning a clear day into a gear-destroying whiteout. Prevention is the only strategy.',
    proTip: 'Keep cameras in sealed dry bags when not shooting. Never change lenses in the open, do it inside a tent or jacket. Use a UV or clear filter as a sacrificial lens protector. Carry a rocket blower (not canned air) and clean gear after every session.',
  },
  {
    title: 'Portraits & People',
    icon: Users,
    content: 'The Berber people of the Sahara have striking, photogenic faces shaped by sun and wind. However, always ask permission before photographing anyone. A respectful approach, eye contact, and a greeting in Arabic (Salaam Alaikum) or Tamazight (Azul) goes a long way. Many people are happy to be photographed, especially camp staff during music performances. Showing them the photo on your screen is a nice gesture.',
    proTip: 'Use a portrait lens (50mm or 85mm) for flattering compression. Shoot during golden hour for warm, soft light on faces. The contrast between blue desert clothing and orange sand creates stunning color palettes.',
  },
];

/* =====================================================================
   DATA: WILDLIFE & FLORA
   ===================================================================== */

const wildlifeData = [
  {
    name: 'Fennec Fox',
    description: 'The world\'s smallest fox, with enormous ears that dissipate heat and detect prey underground. Nocturnal and elusive, fennec foxes live in burrows in the sand and emerge at night to hunt insects, rodents, and lizards. You are most likely to see them near camp at dawn, attracted by food scraps. Their oversized ears and tiny bodies make them one of the Sahara\'s most charming residents.',
  },
  {
    name: 'Dromedary Camel',
    description: 'The single-humped dromedary is the quintessential Saharan animal. Domesticated over 3,000 years ago, they can survive weeks without water, walk 40 km per day, and carry 200 kg loads. Their wide, padded feet prevent sinking into sand. The camels used for tourist treks are well-cared-for working animals. Each has a name and distinct personality that their Berber handlers know intimately.',
  },
  {
    name: 'Desert Hedgehog',
    description: 'The Algerian hedgehog (Atelerix algirus) is common in oases and desert edges across southern Morocco. Nocturnal and insectivorous, they emerge after dark to hunt beetles, scorpions, and small snakes. You may spot them shuffling around camp at night. They are harmless and beneficial, as they eat the scorpions that concern travelers.',
  },
  {
    name: 'Dorcas Gazelle',
    description: 'The smallest and most desert-adapted gazelle in Africa. Critically endangered in Morocco due to hunting and habitat loss, small populations survive in remote areas of the Saharan fringe. They can survive without drinking water, obtaining all moisture from the plants they eat. Sightings are rare but possible in the area between M\'Hamid and Erg Chigaga.',
  },
  {
    name: 'Saharan Horned Viper',
    description: 'A venomous viper with distinctive horn-like scales above each eye. Found in sandy areas where it buries itself with only its eyes exposed, waiting to ambush lizards and small rodents. Bites are painful but rarely fatal with medical treatment. The risk to tourists is extremely low, as they are shy and nocturnal. Always wear shoes at night and shake out footwear in the morning.',
  },
  {
    name: 'Desert Flora',
    description: 'Despite appearances, the Sahara supports surprisingly diverse plant life. Tamarisk trees (tamarix) line dried riverbeds. Acacia raddiana provides shade and fodder for camels. After rare rainfall, the desert briefly erupts in wildflowers, including desert marigolds, and grasses. Date palms (Phoenix dactylifera) sustain the oasis communities, with the Saharan oases containing over 2 million trees producing the famous Medjool and Deglet Noor varieties.',
  },
];

/* =====================================================================
   DATA: OVERNIGHT TIMELINE
   ===================================================================== */

const overnightTimeline = [
  {
    time: '3:30 - 4:00 PM',
    event: 'Departure from Base',
    description: 'Meet your camel handler at the hotel or camp edge in Merzouga. Your overnight bag is loaded onto the camel. You mount up (the camel lurches forward as it stands, so hold on tightly to the front of the saddle) and the caravan departs single-file into the dunes. The first few minutes feel strange, but you quickly adapt to the swaying rhythm.',
  },
  {
    time: '4:00 - 5:15 PM',
    event: 'Camel Trek Through the Dunes',
    description: 'Ride through increasingly tall dunes as the afternoon light softens. Your handler leads you along ridgelines for the best views, sometimes pausing to let you take photos. The sand changes color as the sun drops lower, shifting from bright yellow to deep gold and amber. The silence is broken only by the soft padding of camel feet on sand.',
  },
  {
    time: '5:15 - 6:00 PM',
    event: 'Sunset from the Highest Dune',
    description: 'Arrive near the overnight camp and dismount. Climb the tallest nearby dune (a 15-20 minute scramble in soft sand) for panoramic sunset views. The sky transitions through orange, crimson, violet, and deep blue as the sun drops below the horizon. The dunes cast long purple shadows that stretch to the edge of sight. This is the most photographed moment of the entire trip.',
  },
  {
    time: '6:00 - 7:00 PM',
    event: 'Camp Arrival & Settling In',
    description: 'Descend to the camp nestled between the dunes. You are shown to your tent and given time to freshen up. Mint tea is served in the communal area. The temperature drops noticeably once the sun sets, so pull on a warm layer. Take a walk around camp as the first stars begin to appear.',
  },
  {
    time: '7:00 - 9:00 PM',
    event: 'Dinner & Music Under the Stars',
    description: 'A traditional Berber tagine or couscous is served, cooked on-site by the camp staff. At luxury camps, expect a multi-course meal with salads, soup, a main course, and dessert. After dinner, the drum circle begins. Camp staff play traditional Berber rhythms on djembe and bendir drums, singing songs in Tamazight. You are welcome to join in. The firelight flickers against the dune walls.',
  },
  {
    time: '9:00 - 11:00 PM',
    event: 'Stargazing',
    description: 'Lie on the still-warm sand and gaze upward. The Milky Way arches overhead in a dense, luminous band unlike anything visible from a city. Shooting stars streak across the sky every few minutes. The silence is absolute. Many travelers describe this as the most profound moment of their trip. Some luxury camps provide telescopes and guided astronomy sessions.',
  },
  {
    time: '11:00 PM - 5:00 AM',
    event: 'Sleep Under the Desert Sky',
    description: 'Retire to your tent. Budget camps have shared tents with foam mattresses and heavy woolen blankets. Luxury camps have private tents with real beds and heating. Many people drag their mattress outside and sleep under the open sky. The temperature continues dropping through the night, reaching its lowest around 4:00 AM.',
  },
  {
    time: '5:00 - 5:30 AM',
    event: 'Wake-Up Call',
    description: 'Your guide gently wakes you with hot mint tea or coffee. The air is cold (5-15 degrees C depending on the season). Bundle up in all your layers and prepare for the sunrise climb. The sky is already beginning to lighten in the east, shifting from black to deep indigo.',
  },
  {
    time: '5:30 - 6:30 AM',
    event: 'Sunrise Over the Dunes',
    description: 'Climb the same high dune as the evening before. Watch the dunes transform from grey-blue to warm pink to blazing gold as the sun crests the horizon. The long morning shadows create dramatic patterns across the sand. Many people find the sunrise even more beautiful than the sunset. The quality of light is extraordinary for photography.',
  },
  {
    time: '7:00 - 8:30 AM',
    event: 'Breakfast & Return Journey',
    description: 'Return to camp for a simple breakfast of Moroccan flatbread (msemen or baghrir), jam, butter, olive oil, and coffee or tea. Mount the camels for the return journey to Merzouga. The morning light makes for excellent photography as you ride back through the dune field, now glowing in completely different colors than the evening before.',
  },
];

/* =====================================================================
   DATA: DESERT SURVIVAL KNOWLEDGE
   ===================================================================== */

const desertSurvivalFacts = [
  {
    title: 'Water Requirements',
    content: 'In 35C heat with moderate activity, the human body loses approximately 1 liter of water per hour through sweat. In extreme desert heat (45C+), this can double. You need at minimum 3-4 liters per day in cool conditions and up to 8 liters in summer heat. Dehydration symptoms begin when you have lost just 2% of your body weight in water.',
  },
  {
    title: 'Navigation Without GPS',
    content: 'Berber guides navigate the desert using a combination of star positions, sun angle, wind direction (prevailing winds create consistent dune patterns), and landmark recognition. The North Star (Polaris) is visible year-round and sits almost exactly due north. During the day, the sun rises roughly in the east and sets roughly in the west, though the exact angle varies by season.',
  },
  {
    title: 'The Desert at Night',
    content: 'Desert sand retains heat for 2-3 hours after sunset, making the first hours of night surprisingly warm at ground level. However, the clear skies allow rapid radiative cooling, and by midnight temperatures can be 25-30 degrees lower than the daytime high. This extreme temperature swing is unique to desert environments and catches unprepared travelers off guard.',
  },
  {
    title: 'Sand Characteristics',
    content: 'Saharan sand is composed primarily of quartz grains eroded from ancient mountains over millions of years. The orange and red colors come from iron oxide (rust) coating each grain. The finest sand particles are only 0.1mm in diameter and can infiltrate any unsealed opening. Dune sand is surprisingly firm 10-15 cm below the surface, which is why camels do not sink as deeply as you might expect.',
  },
];

/* =====================================================================
   DATA: NIGHT SKY
   ===================================================================== */

const nightSkyHighlights = [
  {
    name: 'The Milky Way',
    description: 'Under Bortle Class 1-2 skies, the Milky Way is not a faint smudge but a blazing river of light arching from horizon to horizon. The galactic center, visible from March to October, reveals dark dust lanes, bright nebulae, and the dense star fields of Sagittarius and Scorpius. The intensity is genuinely shocking if you have only ever seen it from light-polluted areas.',
  },
  {
    name: 'Shooting Stars',
    description: 'On any clear night, you can see 5-10 sporadic meteors per hour. During major meteor showers (Perseids in August, Geminids in December, Lyrids in April), rates can exceed 60-100 per hour. Lying on the warm sand and watching bright streaks carve across the Milky Way is one of the most peaceful experiences possible.',
  },
  {
    name: 'Zodiacal Light',
    description: 'A faint, triangular glow visible after twilight or before dawn, caused by sunlight reflecting off interplanetary dust particles in the plane of the solar system. It is essentially invisible from cities but spectacular in the deep Sahara, stretching from the horizon up through the constellations of the zodiac. Best seen in spring evenings and autumn mornings.',
  },
  {
    name: 'Planets',
    description: 'The five naked-eye planets (Mercury, Venus, Mars, Jupiter, Saturn) are easily visible from the desert, appearing as bright, steady points among the twinkling stars. Through binoculars, Jupiter\'s four largest moons are visible as tiny dots flanking the planet. Saturn\'s rings are visible through even a basic telescope provided by some luxury camps.',
  },
  {
    name: 'The Gegenschein',
    description: 'An extremely faint glow visible at the antisolar point (directly opposite the sun in the sky) around midnight. Caused by backscattering of sunlight from interplanetary dust, it is one of the rarest naked-eye phenomena and visible only from the darkest sites on Earth. The Sahara is one of the few places where casual observers can spot it.',
  },
];

/* =====================================================================
   DATA: SAFETY TIPS
   ===================================================================== */

const safetyTips = [
  {
    icon: Users,
    title: 'Always Travel with a Guide',
    content: 'The desert is vast, featureless, and disorienting. Getting lost can be fatal. Even GPS can be unreliable when dunes shift. Always travel with an experienced local guide who knows the terrain, water sources, and emergency procedures. Solo desert trekking is strongly discouraged.',
  },
  {
    icon: Droplets,
    title: 'Hydration is Critical',
    content: 'Drink at least 3-4 liters of water per day, more if active or in warm weather. Dehydration is the number one health risk and symptoms include headache, dizziness, dark urine, and confusion. Carry water at all times. Electrolyte tablets help replace lost salts. Do not wait until you feel thirsty to drink.',
  },
  {
    icon: Sun,
    title: 'Sun Protection at All Times',
    content: 'Sunburn and heatstroke happen faster than you expect at Saharan latitudes. Cover exposed skin with lightweight long sleeves, wear a hat and sunglasses, and apply SPF 50+ sunscreen every two hours. The sand reflects UV radiation, increasing exposure. If you feel dizzy, nauseous, or stop sweating, seek shade immediately and cool down.',
  },
  {
    icon: Bug,
    title: 'Scorpions & Snakes',
    content: 'Several scorpion species live in the Sahara, including the potentially dangerous fat-tailed scorpion (Androctonus). Always shake out shoes and clothing in the morning. Use a headlamp when walking around camp at night. Do not reach under rocks or into crevices. Snakebites are extremely rare but if bitten, stay calm, immobilize the affected limb, and seek medical attention immediately.',
  },
  {
    icon: Wind,
    title: 'Sandstorms',
    content: 'Sandstorms (called sirocco or chergui) can arise with little warning, reducing visibility to near zero. If caught in one: turn your back to the wind, cover your nose and mouth with a scarf or cheche, close your eyes, crouch low, and wait. Most storms pass within 15-30 minutes. If in a vehicle, stop and wait. Never try to drive through a sandstorm.',
  },
  {
    icon: Navigation,
    title: 'Navigation & Communication',
    content: 'Cell phone coverage is nonexistent in most of the deep desert. Some camps have satellite phones for emergencies. Always inform someone of your itinerary and expected return time. Carry a whistle and a small mirror for signaling. If lost, stay where you are, as moving makes rescue harder. Some guides carry GPS beacons.',
  },
  {
    icon: Thermometer,
    title: 'Temperature Extremes',
    content: 'The desert has one of the largest diurnal temperature ranges on Earth. A day that reaches 35C can drop to 5C at night. In winter, nighttime temperatures can fall below freezing. Always pack warm layers even if the daytime forecast looks hot. Hypothermia at night is a genuine risk for unprepared travelers.',
  },
  {
    icon: HandCoins,
    title: 'Cash & Supplies',
    content: 'There are no ATMs, shops, or pharmacies in the desert. The last reliable ATMs are in Rissani (for Erg Chebbi) and Zagora (for M\'Hamid/Erg Chigaga). Carry sufficient cash in small denominations (20-50 MAD notes) for tips, small purchases, and emergencies. Budget 50-100 MAD per day for tips alone. Bring any medications you need.',
  },
];

/* =====================================================================
   DATA: RESPONSIBLE TOURISM
   ===================================================================== */

const responsibleTourismTips = [
  {
    title: 'Leave No Trace',
    content: 'The desert ecosystem is fragile and slow to recover. Take all trash with you, including cigarette butts, wet wipes, and food waste. Do not bury trash in the sand as animals will dig it up. If your camp does not have proper waste disposal, carry your own trash bag. The dunes should look untouched for the next visitor.',
  },
  {
    title: 'Respect Fossil Sites',
    content: 'The Saharan desert floor is littered with 350-million-year-old marine fossils from when the region was an ocean. While small fossils are everywhere, do not remove large specimens or disturb fossil-rich sites. Some areas have been stripped bare by commercial fossil hunters. Take photos instead and leave them for others to discover.',
  },
  {
    title: 'Water Conservation',
    content: 'Water is the most precious resource in the desert. Use it sparingly at camps. Avoid long showers even if the camp has them. Do not pour water on the ground. Some luxury camps pump water from deep wells, which affects the water table that nomadic communities depend on. Choose camps that practice water recycling.',
  },
  {
    title: 'Support Local Communities',
    content: 'Book with locally owned camps and Berber-run tour operators rather than international agencies that take large commissions. Buy crafts directly from artisans. Eat at local restaurants in Merzouga and Rissani. Visit Khamlia village and leave a fair donation. Your tourism dirham goes furthest when it stays in the local economy.',
  },
  {
    title: 'Camel Welfare',
    content: 'Choose operators who treat their camels well. Healthy camels have good body condition, no sores under saddles, and access to food and water. Overloaded or visibly distressed camels indicate a poor operator. A well-treated camel is comfortable to ride and cooperative. If you see animal mistreatment, report it to the Moroccan animal welfare organization SPANA.',
  },
  {
    title: 'Cultural Sensitivity',
    content: 'Ask before photographing people, especially women. Dress modestly in villages. Remove shoes when entering a home or tent. Accept tea when offered as it is a sign of hospitality. Learn a few words of Arabic or Tamazight. Do not haggle aggressively for crafts, as the margins are often thinner than tourists assume. Respect prayer times and religious practices.',
  },
];

/* =====================================================================
   DATA: COMMON SCAMS
   ===================================================================== */

const commonScams = [
  {
    scam: 'The "Free" Guide to the Dunes',
    description: 'Someone in Merzouga offers to show you the dunes for free, then demands payment at the end or leads you to a specific camp where they earn a commission. They may claim they are just being friendly or that the route is dangerous without them.',
    avoidance: 'Politely decline unsolicited guide offers. If you want a guide, arrange one through your accommodation. The dunes are visible from town and the path is straightforward for short walks. For overnight treks, always book through a reputable camp or agency.',
  },
  {
    scam: 'Bait-and-Switch Camps',
    description: 'You book a luxury camp online but arrive to find a basic bivouac with shared tents and no bathroom. The operator claims the luxury camp was "full" and this is "just as good." This is most common with very cheap package deals booked through intermediaries.',
    avoidance: 'Book directly with named, reviewed camps. Read recent reviews on Google Maps and TripAdvisor. Ask for photos of the specific camp and tent you will stay in. If the price seems too good for the promised luxury level, it probably is.',
  },
  {
    scam: 'Fossil Scams',
    description: 'Sellers in Rissani, Erfoud, and along the desert roads offer "genuine" fossils that are actually manufactured fakes. Common fakes include painted trilobites, glued-together ammonites, and rocks with carved-in fish shapes. Some real fossils are genuine but vastly overpriced.',
    avoidance: 'Real fossils have natural imperfections and are heavy. Fakes are often suspiciously perfect, lightweight, or painted. Buy from established shops in Erfoud that allow inspection. A genuine small trilobite costs 20-50 MAD; if the price is much higher, be skeptical. The Erfoud fossil museum is a good benchmark for what real specimens look like.',
  },
  {
    scam: 'Inflated 4x4 Prices',
    description: 'Drivers at M\'Hamid or Rissani quote dramatically inflated prices for 4x4 transfers to the dunes, claiming fuel costs are high or the route is especially difficult. Prices can be 3-5 times the fair rate for unprepared tourists.',
    avoidance: 'Arrange 4x4 transfers through your camp, which usually includes it in the price. If hiring independently, agree on the price, route, and duration in writing before departing. Fair rates: Merzouga to Erg Chebbi camps 100-200 MAD, M\'Hamid to Erg Chigaga 500-800 MAD per vehicle.',
  },
  {
    scam: 'The "Closed Road" Trick',
    description: 'A local tells you the road to your intended destination is closed due to sand, construction, or police checkpoint, then offers to guide you via an alternate route that leads to their preferred camp or shop.',
    avoidance: 'Roads to Merzouga and M\'Hamid are paved and almost never closed. Ask your accommodation to confirm road conditions before departure. If someone claims a road is closed, verify independently or simply proceed and see for yourself.',
  },
  {
    scam: 'Hidden Charges at Camps',
    description: 'The advertised camp price does not include the camel trek, dinner, 4x4 transfer, or activities, which are then charged separately at inflated rates. The total cost ends up being 2-3 times what was quoted.',
    avoidance: 'Before booking, get a written list of exactly what is included: transport, meals, camel trek, tent type, and activities. Reputable camps include everything in one price. If the price breakdown is vague, ask specific questions before paying.',
  },
];

/* =====================================================================
   DATA: FAQ
   ===================================================================== */

const faqs = [
  {
    q: 'Is the Sahara Desert in Morocco safe?',
    a: 'Yes, the Moroccan Sahara is very safe for tourists when visited with proper preparation and a reputable guide or camp. Morocco has invested heavily in desert tourism infrastructure, and the regions around Merzouga and M\'Hamid have well-established tourism operations. The main risks are environmental (dehydration, sunburn, extreme temperatures) rather than security-related. Follow your guide\'s instructions and the safety tips in this guide.',
  },
  {
    q: 'How many days do I need for a Sahara trip?',
    a: 'At minimum, 2 days and 1 night. This allows you to arrive in the afternoon, do a sunset camel trek to camp, stay overnight, watch sunrise, and return. However, 3 days (2 nights) is much better, giving you time to relax, explore, and do activities like sandboarding and a 4x4 excursion. For Erg Chigaga, plan at least 3 days from Marrakech due to the longer travel distance.',
  },
  {
    q: 'Should I choose Erg Chebbi or Erg Chigaga?',
    a: 'Erg Chebbi (Merzouga) is the best choice for first-time visitors. It is more accessible, has a wider range of camps and activities, and the 150-meter dunes are spectacular. Erg Chigaga (M\'Hamid) is for experienced travelers who have been to the desert before and want a wilder, more remote experience with larger dunes and near-total solitude. Both are magnificent.',
  },
  {
    q: 'What is the best time of year to visit the Sahara?',
    a: 'October and March are the absolute best months: warm days (25-32C), cool nights (10-18C), clear skies, and comfortable conditions. November and April are also excellent. December through February offers clear skies but bitterly cold nights (0-8C). Avoid June through August entirely, as temperatures can exceed 50C and most camps close.',
  },
  {
    q: 'How much does a Sahara desert trip cost?',
    a: 'A budget trip from Marrakech (3 days, shared transport, basic camp) starts at around 800-1,200 MAD per person. Mid-range packages (private transport, better camp) run 2,000-4,000 MAD. Luxury experiences (private 4x4, glamping) cost 5,000-15,000+ MAD. On top of tour costs, budget 200-500 MAD for tips, souvenirs, and incidental expenses.',
  },
  {
    q: 'Do I need to book a tour or can I go independently?',
    a: 'Both options work. Tours are easier and often cheaper due to shared transport costs. Independent travel gives more flexibility: drive or bus to Merzouga/M\'Hamid and book a camp directly on arrival. The advantage of booking ahead is guaranteed availability in peak season. Going independently is straightforward for Merzouga (paved road, many camps) but harder for Erg Chigaga (requires 4x4 and local knowledge).',
  },
  {
    q: 'Is camel riding uncomfortable?',
    a: 'The standard 1-1.5 hour camel trek is manageable for most people. You sit in a saddle with padding, and the rolling gait takes a few minutes to adjust to. Some people experience mild soreness afterward. For multi-day treks, padded cycling shorts help enormously. The mounting and dismounting is the most alarming part, as the camel lurches forward then back, but handlers guide you through it.',
  },
  {
    q: 'Can I see the Sahara as a day trip?',
    a: 'Technically no. The Sahara is 8-10 hours from both Marrakech and Fes, making a day trip impossible. The minimum is 2 days / 1 night. If you only have one day, consider the Agafay Desert near Marrakech (1 hour drive), a rocky desert landscape that offers camel rides and desert camps but without the iconic sand dunes.',
  },
  {
    q: 'Is there phone signal and wifi in the desert?',
    a: 'In Merzouga village, yes. Most hotels and some camps near the dune edge have wifi. Once you trek into the dunes (even 30 minutes by camel), all signal is lost. Deep desert camps at Erg Chigaga have no coverage at all. Some luxury camps have satellite-based wifi but it is slow and unreliable. Embrace the disconnection; it is part of the experience.',
  },
  {
    q: 'What about toilets in the desert?',
    a: 'Budget camps may have a basic pit toilet or nothing at all. Mid-range camps typically have a shared toilet block with flush or pour-flush toilets. Luxury camps have private en-suite bathrooms with flushing toilets and hot showers. On camel treks between camps, it is simply a matter of finding a dune for privacy. Bring your own toilet paper and hand sanitizer regardless of camp level.',
  },
];

/* =====================================================================
   DATA: RELATED PAGES
   ===================================================================== */

const relatedPages = [
  {
    title: 'Desert Tours & Camps',
    description: 'Browse curated desert experiences from day trips to multi-day expeditions across Morocco.',
    href: '/desert',
    icon: Tent,
  },
  {
    title: 'Stargazing Guide',
    description: 'Dark sky locations, astrophotography tips, and Berber star lore across Morocco.',
    href: '/stargazing',
    icon: Star,
  },
  {
    title: 'Photography Guide',
    description: 'Top 20 photo spots, golden hour timing, and gear tips for Morocco.',
    href: '/photography',
    icon: Camera,
  },
  {
    title: 'Atlas Mountains',
    description: 'Trekking, Berber villages, and high-altitude adventures in the High Atlas.',
    href: '/mountains',
    icon: Mountain,
  },
  {
    title: 'Best Time to Visit',
    description: 'Month-by-month breakdown of weather, crowds, and prices across Morocco.',
    href: '/best-time',
    icon: Clock,
  },
  {
    title: 'What to Pack',
    description: 'Comprehensive packing guide for every season and region of Morocco.',
    href: '/packing',
    icon: Backpack,
  },
  {
    title: 'Berber Culture',
    description: 'Deep dive into Amazigh heritage, language, crafts, and traditions.',
    href: '/berber-culture',
    icon: Users,
  },
  {
    title: 'Scams Awareness',
    description: 'Smart travel tips and how to avoid common tourist pitfalls in Morocco.',
    href: '/scams',
    icon: Shield,
  },
];

/* =====================================================================
   STRUCTURED DATA (JSON-LD)
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Sahara Desert Morocco - Complete Travel Guide',
  description:
    'Comprehensive guide to experiencing the Sahara Desert in Morocco. Covers Erg Chebbi (Merzouga), Erg Chigaga (M\'Hamid), camel trekking, desert camps, stargazing, photography, safety, and Berber culture.',
  url: 'https://citytoursmorocco.com/sahara',
  touristType: ['Adventure tourism', 'Nature tourism', 'Cultural tourism', 'Photography tourism'],
  geo: { '@type': 'GeoCoordinates', latitude: 31.0977, longitude: -4.0085 },
  image: '/images/hero-sahara-sunrise.webp',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function SaharaGuidePage() {
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-sahara-sunrise.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sahara Desert Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Sahara Desert Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The definitive guide to Morocco&apos;s most extraordinary landscape. Everything you need to know about camel treks, desert camps, stargazing, Berber culture, and the golden dunes of the world&apos;s largest hot desert.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* =================================================================
          INTRODUCTION
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Sahara: Gateway to the World&apos;s Largest Desert
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Sahara is not just a desert. It is a 9.2-million-square-kilometer ocean of sand, rock, and silence that stretches across 11 countries and covers an area larger than the entire United States. It is the hottest place on Earth, and one of the most beautiful. Morocco provides the most accessible, well-organized, and varied gateway to this extraordinary landscape, offering everything from budget bivouacs under the stars to five-star glamping with private chefs and telescope-guided stargazing.
              </p>
              <p>
                A desert trip is consistently rated as the single most memorable experience travelers have in Morocco. There is nothing quite like watching the sun set over an endless ocean of golden dunes, riding a camel along a ridge as the sky turns from amber to violet, sitting around a Berber campfire while ancient drum rhythms echo off the sand, and waking before dawn to see the dunes transform through a palette of colors that no photograph can fully capture.
              </p>
              <p>
                Morocco&apos;s Sahara experience centers on two main dune fields: <strong>Erg Chebbi</strong> near Merzouga for the classic, accessible experience with towering 150-meter dunes, and <strong>Erg Chigaga</strong> near M&apos;Hamid El Ghizlane for wild, remote wilderness with 300-meter dunes and near-total solitude. This guide covers both destinations in depth, along with every type of desert experience, practical advice on timing, packing, transport, camps, photography, safety, and the rich Berber culture that gives the Sahara its soul.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: 'Best Months', value: 'Oct - Mar', icon: Calendar },
              { label: 'Budget Camp', value: 'From 200 MAD', icon: DollarSign },
              { label: 'From Marrakech', value: '8-10 hours', icon: Car },
              { label: 'Dune Height', value: 'Up to 300m', icon: Mountain },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-4 text-center">
                <stat.icon className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-lg font-bold text-[var(--text-primary)]">{stat.value}</p>
                <p className="text-xs text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          ERG CHEBBI VS ERG CHIGAGA
          ================================================================= */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Erg Chebbi vs Erg Chigaga
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s two great sand seas offer very different experiences. Use this comparison to choose the right one for your trip.
          </p>

          {/* Detailed descriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-moroccan p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
                  <Sunrise className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Erg Chebbi (Merzouga)</h3>
                  <p className="text-sm text-[var(--color-primary)] font-semibold">The Classic Experience</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Erg Chebbi is Morocco&apos;s most famous dune field, a 22 km stretch of towering sand dunes reaching 150 meters high that glow orange, pink, and gold depending on the light. The small village of Merzouga sits at its western edge, serving as the gateway to the most iconic Sahara experience. With over 100 camps ranging from basic bivouacs to ultra-luxury glamping, Erg Chebbi offers the widest choice for every budget and comfort level. The paved road runs right to the dune edge, making it accessible even for 2WD vehicles.
              </p>
              <div className="flex flex-wrap gap-2">
                {['150m dunes', 'Paved road access', '100+ camps', 'Khamlia music village', 'Best for first-timers'].map((tag) => (
                  <span key={tag} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-3 py-1 rounded-full border border-[var(--border-light)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
                  <Compass className="w-6 h-6 text-[var(--color-accent-dark)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Erg Chigaga (M&apos;Hamid)</h3>
                  <p className="text-sm text-[var(--color-accent-dark)] font-semibold">The Wild Alternative</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Erg Chigaga is Morocco&apos;s largest dune field, stretching 40 km long and 15 km wide with dunes reaching a staggering 300 meters. Located 50 km from M&apos;Hamid El Ghizlane by off-road track, it is accessible only by 4x4 or multi-day camel caravan. This remoteness keeps it blissfully uncrowded. With only about 15 camps and vast expanses of untouched sand, Erg Chigaga is the real Sahara for those who want solitude, silence, and the sense of being truly lost in an ocean of sand.
              </p>
              <div className="flex flex-wrap gap-2">
                {['300m dunes', '4x4 only access', '~15 camps', 'Total solitude', 'Best for adventurers'].map((tag) => (
                  <span key={tag} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-3 py-1 rounded-full border border-[var(--border-light)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left py-4 px-4 text-[var(--text-primary)] font-bold">Feature</th>
                    <th className="text-left py-4 px-4 text-[var(--text-primary)] font-bold">Erg Chebbi (Merzouga)</th>
                    <th className="text-left py-4 px-4 text-[var(--text-primary)] font-bold">Erg Chigaga (M&apos;Hamid)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {ergComparison.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">{row.feature}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.chebbi}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.chigaga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verdict */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-primary)]">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">Our Recommendation</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    If this is your first time in the Sahara, choose <strong>Erg Chebbi</strong>. It is easier to reach, has more camp options, and the experience is no less magical. If you have been to the desert before and want something wilder and more remote, <strong>Erg Chigaga</strong> will take your breath away. If you have time, visit both on a loop from Marrakech via Ouarzazate, Merzouga, Rissani, Zagora, and M&apos;Hamid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          TYPES OF DESERT EXPERIENCES
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Types of Desert Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From a single sunset camel ride to a week-long expedition, there is a Sahara experience for every traveler and every budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desertExperiences.map((exp) => (
              <div key={exp.name} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <exp.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{exp.name}</h3>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="tag tag-primary">{exp.duration}</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">
                    <DollarSign className="w-3.5 h-3.5 inline mr-0.5" />
                    {exp.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3 mb-3">
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    <Lightbulb className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Tip:</strong> {exp.tips}
                  </p>
                </div>
                <p className="text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-light)]">
                  <strong className="text-[var(--text-primary)]">Best for:</strong> {exp.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          OVERNIGHT TIMELINE
          ================================================================= */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            A Night in the Desert: Hour by Hour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The classic one-night desert camp experience is the most popular way to experience the Sahara. Here is exactly what to expect, hour by hour.
          </p>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/30" />
            <div className="space-y-6">
              {overnightTimeline.map((step) => (
                <div key={step.event} className="relative pl-16">
                  <div className="absolute left-2 top-1 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[var(--color-accent-dark)]" />
                  </div>
                  <div className="card-moroccan p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono font-semibold text-[var(--color-primary)]">{step.time}</span>
                      <h3 className="font-bold text-[var(--text-primary)]">{step.event}</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          DESERT SURVIVAL KNOWLEDGE
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Understanding the Desert
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fascinating facts about the Saharan environment that will deepen your appreciation of this extraordinary landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {desertSurvivalFacts.map((fact) => (
              <div key={fact.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[var(--color-primary)]" />
                  {fact.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{fact.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          BEST TIME TO VISIT
          ================================================================= */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Best Time to Visit the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing is critical. The difference between the best and worst months is the difference between paradise and genuine danger.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {monthlyGuide.map((period) => (
              <div key={period.months} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="sm:w-40 shrink-0">
                    <h3 className="font-bold text-[var(--text-primary)]">{period.months}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Thermometer className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span className="text-xs text-[var(--text-muted)]">{period.temp}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:w-28 shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < period.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{period.verdict}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summer Warning */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-l-red-500">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">Summer Warning (June - August)</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Do not visit the Sahara in summer. Daytime temperatures regularly exceed 50C (122F), sand surface temperatures can reach 70C (158F), and heatstroke is a genuine medical emergency. Most camps close entirely from June through August. If your Morocco trip falls in summer, explore the Atlas Mountains, Atlantic coast, or northern cities instead. If you must visit the desert region, stay in air-conditioned accommodation in Ouarzazate or Errachidia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          WHAT TO PACK
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            What to Pack for the Desert
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light but pack smart. The desert demands preparation for extreme sun, extreme cold, and pervasive sand.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingList.map((category) => (
              <div key={category.category} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <category.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          GETTING TO THE SAHARA
          ================================================================= */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Getting to the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The journey to the desert is an adventure in itself, crossing mountain passes, gorges, and palm oases. Here are the main routes.
          </p>
          <div className="space-y-6">
            {gettingThereRoutes.map((route) => (
              <div key={route.from} className="card-moroccan p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <route.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {route.from}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-2">
                      <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-primary)]" />
                      To Merzouga (Erg Chebbi)
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{route.toMerzouga}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-2">
                      <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent-dark)]" />
                      To M&apos;Hamid (Erg Chigaga)
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{route.toMhamid}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {route.options.map((opt) => (
                    <span key={opt} className="tag tag-secondary">{opt}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          DESERT CAMP TYPES
          ================================================================= */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Desert Camp Types
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From a 200 MAD bivouac to a 8,000 MAD luxury suite, the stars and sunrise are the same. The difference is what happens in between.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campTypes.map((camp) => (
              <div key={camp.type} className="card-moroccan overflow-hidden">
                <div className="p-6 bg-[var(--color-primary)]/5 border-b border-[var(--border-light)]">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{camp.type}</h3>
                  <p className="text-lg font-semibold text-[var(--color-primary)]">{camp.priceRange}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{camp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {camp.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      <Info className="w-3 h-3 inline mr-1" />
                      {camp.considerations}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          BERBER CULTURE IN THE SAHARA
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Berber Culture in the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is not just sand and sky. It is home to the Amazigh people, whose culture, music, cuisine, and traditions give the desert its soul.
          </p>
          <div className="space-y-6">
            {berberCultureTopics.map((topic) => (
              <div key={topic.title} className="card-moroccan p-8">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <CircleDot className="w-4 h-4 text-[var(--color-accent-dark)]" />
                  {topic.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{topic.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          DESERT PHOTOGRAPHY TIPS
          ================================================================= */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Desert Photography Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is one of the most photogenic landscapes on Earth. Here is how to capture it at its best, from golden hour dunes to Milky Way panoramas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <section.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{section.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{section.content}</p>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    <Camera className="w-3 h-3 inline mr-1 text-[var(--color-primary)]" />
                    <strong>Pro tip:</strong> {section.proTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          WILDLIFE & FLORA
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Binoculars className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Wildlife and Flora of the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Despite its harsh reputation, the Sahara supports a surprising array of life, from tiny fennec foxes to ancient date palms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeData.map((animal) => (
              <div key={animal.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[var(--color-green)]" />
                  {animal.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{animal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          NIGHT SKY IN THE SAHARA
          ================================================================= */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white text-center mb-4">
            <Moon className="w-8 h-8 inline text-white/80 mr-2" />
            The Night Sky in the Sahara
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            With near-zero light pollution and crystal-clear air, the Saharan night sky is one of the most spectacular sights on Earth. Here is what awaits you after the sun goes down.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nightSkyHighlights.map((item) => (
              <div key={item.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[var(--color-accent)]" />
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Stargazing tip box */}
          <div className="max-w-3xl mx-auto mt-10">
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-accent-dark)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">Stargazing Best Practice</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Plan your desert visit around the new moon for the darkest possible skies. The Milky Way core is visible from March through October. Allow at least 20 minutes for your eyes to fully dark-adapt before looking up. Avoid looking at your phone screen, as even brief exposure to white light resets your night vision. Use a red-light headlamp instead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SAFETY & HEALTH TIPS
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Safety and Health in the Desert
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is beautiful but demands respect. These guidelines will keep you safe and healthy throughout your desert adventure.
          </p>
          <div className="space-y-4">
            {safetyTips.map((tip, index) => (
              <div key={index} className="card-moroccan p-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10 shrink-0">
                  <tip.icon className="w-5 h-5 text-[var(--color-accent-dark)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          RESPONSIBLE DESERT TOURISM
          ================================================================= */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Responsible Desert Tourism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is a fragile ecosystem and home to communities with limited resources. Travel responsibly to preserve it for future generations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibleTourismTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[var(--color-green)]" />
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          COMMON SCAMS & HOW TO AVOID THEM
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline text-[var(--color-accent-dark)] mr-2" />
            Common Scams and How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The vast majority of desert tourism operators are honest and professional. However, awareness of these common tactics will help you navigate confidently.
          </p>
          <div className="space-y-6">
            {commonScams.map((scam) => (
              <div key={scam.scam} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  {scam.scam}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{scam.description}</p>
                <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-green)]" />
                    <strong className="text-[var(--text-primary)]">How to avoid it:</strong> {scam.avoidance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          RECOMMENDED TOUR OPERATOR GUIDELINES
          ================================================================= */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BadgeCheck className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Choosing a Tour Operator
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            We do not endorse specific operators, but these guidelines will help you identify the best ones for your trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Green flags */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-[var(--color-green)]" />
                Green Flags
              </h3>
              <ul className="space-y-3">
                {[
                  'Locally owned and operated by Berber families from the region',
                  'Recent, verified reviews on Google Maps and TripAdvisor (50+ reviews)',
                  'Clear, written pricing with everything included (transport, meals, camp, activities)',
                  'Responsive to questions before booking and willing to customize',
                  'Properly licensed with Moroccan tourism authority certification',
                  'Well-maintained camels with good body condition and no saddle sores',
                  'Drivers with experience, proper vehicle insurance, and safety equipment',
                  'Small group sizes (8 or fewer per guide) for better experiences',
                ].map((flag) => (
                  <li key={flag} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                    {flag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Red flags */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Red Flags
              </h3>
              <ul className="space-y-3">
                {[
                  'Prices that seem too good to be true (luxury at budget prices)',
                  'Pressure to book immediately without time to research',
                  'Vague descriptions of camp type, meals, or what is included',
                  'No verifiable online reviews or only reviews on their own website',
                  'Unwilling to provide photos of the specific camp you will stay in',
                  'Cash-only payments with no receipt or written confirmation',
                  'Aggressive touts at bus stations or hotel entrances soliciting business',
                  'No clear cancellation or refund policy',
                ].map((flag) => (
                  <li key={flag} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-primary)]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Booking Tip</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  For the best experience and value, book directly with desert camps rather than through multi-layer intermediaries. Agencies in Marrakech and Fes often add 30-50% markup for the same camp. Contact camps via their websites, WhatsApp, or Google Maps listings. Your accommodation in Morocco can also make trusted recommendations for operators they have vetted personally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          AGAFAY DESERT ALTERNATIVE
          ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Short on Time? The Agafay Desert Alternative
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            If you cannot spare the 2-3 days needed for the true Sahara, the Agafay Desert offers a taste of desert life just 40 minutes from Marrakech.
          </p>

          <div className="card-moroccan p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">What is the Agafay Desert?</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  The Agafay is not a true sand desert but a rocky, barren plateau about 30 km south of Marrakech, at the foot of the Atlas Mountains. It lacks the towering sand dunes of the Sahara, but its stark, lunar landscape has its own dramatic beauty. Over the past decade, dozens of luxury and mid-range camps have opened here, offering camel rides, quad biking, sunset dinners, and overnight stays under the stars with the Atlas Mountains as a backdrop.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  The Agafay is an excellent option for travelers with only 1-2 days in Marrakech who want a desert experience without the long drive. It is also popular for day trips, sunset dinners, and events. However, it is fundamentally a different experience from the Sahara. There are no sand dunes, the camps are closer together, and you can hear traffic from the nearby road at some locations. Think of it as a complement to, not a replacement for, the Sahara.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Agafay vs Sahara at a Glance</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Distance from Marrakech', agafay: '40 minutes', sahara: '8-10 hours' },
                    { label: 'Landscape', agafay: 'Rocky plateau', sahara: 'Sand dunes up to 300m' },
                    { label: 'Overnight Price', agafay: '800-5,000 MAD', sahara: '200-8,000 MAD' },
                    { label: 'Sand Dunes', agafay: 'No', sahara: 'Yes, iconic' },
                    { label: 'Camel Trekking', agafay: 'Short rides available', sahara: 'Full treks through dunes' },
                    { label: 'Stargazing Quality', agafay: 'Moderate (Bortle 4-5)', sahara: 'World-class (Bortle 1-2)' },
                    { label: 'Best For', agafay: 'Short stays, events', sahara: 'The full desert experience' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center text-sm border-b border-[var(--border-light)] pb-2">
                      <span className="font-semibold text-[var(--text-primary)] w-1/3">{row.label}</span>
                      <span className="text-[var(--text-secondary)] w-1/3">{row.agafay}</span>
                      <span className="text-[var(--text-secondary)] w-1/3">{row.sahara}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-accent-dark)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Our Advice</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  If you have 3 or more days to spare, go to the real Sahara. The drive through the Atlas Mountains and past the kasbahs is half the adventure. If you truly only have one night and want a desert-adjacent experience, the Agafay is a worthy option. The best luxury Agafay camps, such as Scarabeo Camp and Inara Camp, offer genuinely beautiful settings and excellent food. Just do not expect Saharan sand dunes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          ESSENTIAL ARABIC & BERBER PHRASES
          ================================================================= */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Useful Phrases for the Desert
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A few words in Arabic or Tamazight (Berber) will earn you warm smiles and deeper connections. Here are the essential phrases for your desert trip.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { phrase: 'Salaam Alaikum', meaning: 'Peace be upon you (universal greeting)', language: 'Arabic' },
              { phrase: 'Azul', meaning: 'Hello', language: 'Tamazight' },
              { phrase: 'Shukran', meaning: 'Thank you', language: 'Arabic' },
              { phrase: 'Tanemmirt', meaning: 'Thank you', language: 'Tamazight' },
              { phrase: 'La bas?', meaning: 'How are you? / Everything ok?', language: 'Darija' },
              { phrase: 'Bismillah', meaning: 'In God\'s name (said before eating)', language: 'Arabic' },
              { phrase: 'Inshallah', meaning: 'God willing (used for future plans)', language: 'Arabic' },
              { phrase: 'B\'saha', meaning: 'Bon appetit / To your health', language: 'Darija' },
              { phrase: 'Marhaba', meaning: 'Welcome', language: 'Arabic' },
              { phrase: 'Ma\'a salama', meaning: 'Goodbye (go in peace)', language: 'Arabic' },
              { phrase: 'Aman n-ik', meaning: 'Please (lit. your peace)', language: 'Tamazight' },
              { phrase: 'Is trit atay?', meaning: 'Would you like tea?', language: 'Tamazight' },
            ].map((item) => (
              <div key={item.phrase} className="card-moroccan p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[var(--text-primary)]">{item.phrase}</span>
                  <span className="text-[10px] font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-0.5 rounded-full">{item.language}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          FAQ SECTION
          ================================================================= */}
      <section className="py-20 section-warm">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
                <MessageSquare className="w-4 h-4" />
                Common Questions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                Answers to the questions we hear most from travelers planning their first Sahara desert trip.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card-moroccan p-6">
                  <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-3 flex items-start gap-2">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-1" />
                    {faq.q}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          RELATED PAGES
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-[var(--text-secondary)]">
              Discover more experiences that pair perfectly with a Sahara desert adventure.
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
                <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
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
          FINAL CTA
          ================================================================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-sahara-sunrise.webp"
            alt="Golden sand dunes of the Sahara Desert at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="container-morocco relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Sunrise className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The Sahara Is Calling
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              There are few places left on Earth where you can stand in absolute silence, see the Milky Way blaze overhead, and feel the ancient rhythms of a landscape that has been here for millions of years. The Sahara Desert is one of them. Start planning your journey today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent btn-lg rounded-full"
              >
                <Compass className="w-5 h-5" />
                Plan Your Desert Trip
              </Link>
              <Link
                href="/desert"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                <Tent className="w-5 h-5" />
                Browse Desert Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Related Desert Guides */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Desert & Travel Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/marrakech-to-sahara', title: 'Marrakech to Sahara', desc: 'Tour options, route stops, and desert camp types.' },
              { href: '/morocco-road-trip-routes', title: 'Road Trip Routes', desc: 'Self-drive to the Sahara via the Kasbahs.' },
              { href: '/photography-guide', title: 'Photography Guide', desc: 'Desert photography tips and best spots.' },
              { href: '/morocco-weather-monthly', title: 'Weather Guide', desc: 'Best months for comfortable desert visits.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

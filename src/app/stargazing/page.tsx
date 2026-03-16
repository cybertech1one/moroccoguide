import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  Clock,
  Calendar,
  Sun,
  Moon,
  Mountain,
  Eye,
  Camera,
  Aperture,
  Telescope,
  Compass,
  Tent,
  ThermometerSun,
  CloudMoon,
  Sparkles,
  Info,
  CheckCircle,
  AlertTriangle,
  Users,
  Heart,
  Navigation,
  Zap,
  Shield,
  DollarSign,
  Layers,
  CircleDot,
  Focus,
  Binoculars,
  Sunrise,
  Sunset,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Stargazing & Dark Sky Guide | Sahara, Atlas & Desert Night Sky',
  description:
    'Discover Morocco\'s world-class stargazing destinations. From Sahara desert camps under the Milky Way to Atlas Mountain observatories, explore Bortle Class 1-2 dark skies, astrophotography tips, Berber star lore, guided tours, and the best times to see meteor showers, planets, and constellations.',
  keywords: [
    'Morocco stargazing',
    'Sahara desert stars',
    'Morocco dark sky',
    'Merzouga stargazing',
    'Erg Chebbi night sky',
    'Morocco Milky Way',
    'Atlas Mountains stargazing',
    'Zagora dark sky',
    'Morocco astrophotography',
    'desert stargazing Morocco',
    'Oukaimeden observatory',
    'Morocco meteor showers',
    'Berber astronomy',
    'Morocco night sky tours',
    'Morocco stargazing camps',
    'Tafraout stargazing',
    'Morocco constellations',
    'Bortle scale Morocco',
    'Morocco astronomy',
    'Sahara Milky Way photography',
  ],
  openGraph: {
    title: 'Morocco Stargazing & Dark Sky Guide - Sahara, Atlas & Beyond',
    description:
      'Experience some of the darkest skies on Earth. Morocco offers Bortle Class 1-2 stargazing in the Sahara desert, Atlas Mountains, and remote oases with guided tours, luxury camps, and astrophotography opportunities.',
    url: 'https://citytoursmorocco.com/stargazing',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1515825838458-f2a94b20105a?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Milky Way rising over the Sahara desert dunes in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Stargazing & Dark Sky Guide',
    description:
      'Bortle Class 1-2 dark skies, Sahara desert camps, Atlas observatories, astrophotography tips, and Berber star lore.',
    images: [
      'https://images.unsplash.com/photo-1515825838458-f2a94b20105a?w=1200&h=630&fit=crop',
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/stargazing' },
};

/* =====================================================================
   DATA: STARGAZING LOCATIONS
   ===================================================================== */

const stargazingLocations = [
  {
    id: 'erg-chebbi',
    name: 'Erg Chebbi, Merzouga',
    region: 'Draa-Tafilalet',
    bortle: 1,
    bortleLabel: 'Excellent Dark-Sky Site',
    description:
      'The towering 150-meter dunes of Erg Chebbi offer some of the most pristine dark skies accessible anywhere on Earth. Far from any city lights, the Sahara provides a natural dark-sky preserve where the zodiacal light, gegenschein, and the full extent of the Milky Way are visible to the naked eye. The dunes themselves become silhouetted sculptures against the star-filled sky, creating an otherworldly landscape for both observation and photography.',
    highlights: [
      'Naked-eye limiting magnitude of 7.0+ on clear moonless nights',
      'Zodiacal light visible as a bright pyramid extending from the horizon',
      'Gegenschein (counter-glow) visible opposite the Sun',
      'Airglow visible as a faint green shimmer on the clearest nights',
      'The Milky Way casts faint shadows on the white sand',
    ],
    bestMonths: 'March-May, September-November',
    access: 'Fly to Errachidia or drive 8 hours from Marrakech via the N10',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    coordinates: '31.1500 N, 4.0167 W',
  },
  {
    id: 'zagora',
    name: 'Zagora & Draa Valley',
    region: 'Draa-Tafilalet',
    bortle: 2,
    bortleLabel: 'Typical Truly Dark Site',
    description:
      'The vast, flat desert plains south of Zagora toward Mhamid el Ghizlane present an unobstructed 360-degree horizon with minimal light pollution. The famous "Timbuktu 52 Days" sign marks the beginning of ancient caravan routes that traders navigated by the stars for centuries. The Draa Valley oases provide stunning foreground interest, with palm groves silhouetted against the Milky Way. The area around Erg Lihoudi and Erg Chigaga is particularly dark.',
    highlights: [
      'Unobstructed 360-degree horizon for full sky coverage',
      'Ancient caravan route where Berber traders used stellar navigation',
      'Erg Chigaga dunes offer Bortle Class 1 conditions',
      'Excellent for southern hemisphere objects low on the horizon',
      'Less touristy than Merzouga with fewer camp lights',
    ],
    bestMonths: 'Year-round, best March-May and September-November',
    access: 'Drive 6.5 hours from Marrakech via the Tizi n\'Tichka pass',
    image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=800',
    coordinates: '30.3289 N, 5.8381 W',
  },
  {
    id: 'atlas-mountains',
    name: 'High Atlas Mountains',
    region: 'Marrakech-Safi / Beni Mellal-Khenifra',
    bortle: 2,
    bortleLabel: 'Typical Truly Dark Site',
    description:
      'The High Atlas Mountains reach over 4,000 meters at Jebel Toubkal, providing not only dark skies but also the advantage of altitude, which reduces atmospheric turbulence and water vapor. The thinner atmosphere at elevation means sharper star images and better transparency. Mountain passes such as Tizi n\'Tichka and remote valleys like the Ait Bouguemez ("Happy Valley") offer superb viewing conditions with dramatic mountain silhouettes framing the sky.',
    highlights: [
      'High altitude reduces atmospheric distortion and light scatter',
      'Mountain ridgelines create dramatic framing for the Milky Way',
      'Cooler temperatures mean more stable atmospheric seeing',
      'Ait Bouguemez valley is exceptionally dark and remote',
      'Traditional Berber villages provide cultural immersion',
    ],
    bestMonths: 'May-October (clear mountain skies, accessible passes)',
    access: 'Imlil is 90 minutes from Marrakech; deeper valleys require 4x4',
    image: 'https://images.unsplash.com/photo-1493807742375-fbc1f7d45e70?q=80&w=800',
    coordinates: '31.0600 N, 7.9150 W',
  },
  {
    id: 'oukaimeden',
    name: 'Oukaimeden Observatory',
    region: 'Marrakech-Safi',
    bortle: 3,
    bortleLabel: 'Rural Sky',
    description:
      'Perched at 2,750 meters in the High Atlas, Oukaimeden hosts Morocco\'s premier astronomical observatory, operated jointly by Cadi Ayyad University of Marrakech and international partners. The observatory is equipped with a 0.6-meter Ritchey-Chretien telescope and has contributed to the discovery of several near-Earth asteroids. While the observatory itself is primarily a research facility, the surrounding plateau offers excellent public stargazing, and the nearby ski resort infrastructure means good road access year-round.',
    highlights: [
      'Morocco\'s primary astronomical research observatory',
      'Contributed to near-Earth asteroid discovery programs',
      '2,750m altitude provides excellent atmospheric transparency',
      'Year-round road access via paved mountain road',
      'Educational programs and occasional public viewing nights',
    ],
    bestMonths: 'June-September (best transparency, lowest humidity)',
    access: '75 km south of Marrakech, paved road, 1.5-hour drive',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800',
    coordinates: '31.2064 N, 7.8664 W',
  },
  {
    id: 'tafraout',
    name: 'Tafraout & Anti-Atlas',
    region: 'Souss-Massa',
    bortle: 2,
    bortleLabel: 'Typical Truly Dark Site',
    description:
      'The rose-granite landscape of Tafraout in the Anti-Atlas mountains creates a surreal stargazing backdrop. Massive pink boulders, sculpted by wind into impossible shapes, stand against the night sky like abstract sculptures. The Ameln Valley, ringed by these granite formations, is exceptionally dark and sheltered from wind. The famous "Painted Rocks" by Belgian artist Jean Verame add a touch of the surreal to daytime exploration between stargazing sessions.',
    highlights: [
      'Unique rose-granite boulder formations as foreground elements',
      'Sheltered valleys with minimal wind for stable viewing',
      'Extremely low population density and light pollution',
      'Warmer winter temperatures than the High Atlas',
      'Almond blossom season (February) adds daytime beauty',
    ],
    bestMonths: 'October-April (mild temperatures, clear skies)',
    access: 'Drive 4 hours south of Agadir via the R106',
    image: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=800',
    coordinates: '29.7214 N, 8.9758 W',
  },
  {
    id: 'mhamid',
    name: 'M\'hamid el Ghizlane',
    region: 'Draa-Tafilalet',
    bortle: 1,
    bortleLabel: 'Excellent Dark-Sky Site',
    description:
      'The last outpost before the open Sahara, M\'hamid el Ghizlane sits at the end of the paved road where the Draa Valley dissolves into endless desert. The Erg Chigaga dunes, reached only by 4x4 or camel, offer arguably the darkest accessible skies in all of Morocco. With zero artificial light in any direction and an elevation of 700 meters, the sky here reveals structures invisible from more populated locations, including the faintest outer spiral arms of the Milky Way and the Large Magellanic Cloud on the southern horizon.',
    highlights: [
      'Among the darkest accessible skies in North Africa',
      'Erg Chigaga dunes provide pristine Bortle Class 1 conditions',
      'Zero artificial light on the horizon in any direction',
      'Faint deep-sky objects visible to the naked eye',
      'Authentic nomadic camps with traditional Berber hospitality',
    ],
    bestMonths: 'Year-round, peak season October-April',
    access: 'Drive 7.5 hours from Marrakech; Erg Chigaga requires 4x4 from M\'hamid',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800',
    coordinates: '29.8283 N, 5.7231 W',
  },
];

/* =====================================================================
   DATA: WHAT YOU CAN SEE
   ===================================================================== */

const celestialObjects = [
  {
    category: 'The Milky Way',
    icon: 'sparkles',
    description:
      'From Morocco\'s dark-sky locations, the Milky Way is not a faint smudge but a brilliant river of light stretching from horizon to horizon. The galactic core, visible from April through October, rises in the southeast and presents extraordinary detail, including dark dust lanes, star clouds, and bright nebulae visible to the naked eye.',
    bestTime: 'April-October, galactic core visible after midnight in spring, evening in summer',
    details: [
      'Galactic core rises in Sagittarius/Scorpius in the southeast',
      'Great Rift dark lane clearly bisects the Milky Way band',
      'Scutum Star Cloud visible as a bright patch within the band',
      'In Bortle 1 conditions, the Milky Way casts visible shadows',
      'Zodiacal light visible as a pyramid of light before dawn or after dusk',
    ],
  },
  {
    category: 'Planets',
    icon: 'circle-dot',
    description:
      'Morocco\'s southerly latitude (29-35 degrees N) provides excellent views of all naked-eye planets. The steady atmospheric seeing in the desert, combined with low humidity, creates ideal conditions for planetary observation through telescopes. Jupiter\'s cloud bands, Saturn\'s rings, and Mars\'s polar caps are all achievable with modest equipment.',
    bestTime: 'Varies by planet and year; check ephemeris for current positions',
    details: [
      'Venus blazes at magnitude -4.5, visible as "evening star" or "morning star"',
      'Jupiter shows cloud bands and four Galilean moons in binoculars',
      'Saturn\'s rings are visible in any telescope above 25x magnification',
      'Mars shows surface features during favorable oppositions',
      'Mercury is easier to spot from Morocco\'s lower latitude',
    ],
  },
  {
    category: 'Meteor Showers',
    icon: 'zap',
    description:
      'Morocco\'s dark skies transform meteor shower viewing from a casual pastime into a spectacular experience. Without light pollution washing out faint meteors, rates of 100+ per hour become genuinely visible during peak showers. The warm desert climate means comfortable all-night viewing without the chill of northern latitudes.',
    bestTime: 'Major showers: Perseids (August), Geminids (December), Quadrantids (January)',
    details: [
      'Perseids (Aug 11-13): 100-150/hour, warm summer nights, best after midnight',
      'Geminids (Dec 13-14): 120-150/hour, the richest annual shower, bright meteors',
      'Quadrantids (Jan 3-4): 80-120/hour, brief peak but spectacular when caught',
      'Eta Aquarids (May 5-6): 50/hour, Halley\'s Comet debris, predawn viewing',
      'Orionids (Oct 21-22): 20-25/hour, fast meteors from Halley\'s Comet',
    ],
  },
  {
    category: 'Constellations & Deep-Sky Objects',
    icon: 'star',
    description:
      'Morocco\'s latitude provides access to a wide range of constellations, from the circumpolar stars of Ursa Major to southern objects like Canopus and the Southern Cross (Crux), which grazes the southern horizon from the southernmost locations. Deep-sky objects like the Andromeda Galaxy, Orion Nebula, and the Pleiades are stunning to the naked eye under dark skies.',
    bestTime: 'Year-round; different constellations dominate each season',
    details: [
      'Orion Nebula (M42): Visible as a fuzzy patch below Orion\'s belt, binoculars reveal extent',
      'Andromeda Galaxy (M31): Naked-eye, appears as a large elongated smudge in autumn',
      'Pleiades (M45): The Seven Sisters, 6-9 stars visible naked-eye under dark skies',
      'Double Cluster in Perseus: Two open clusters, stunning in binoculars',
      'Omega Centauri: Visible from southern Morocco, the largest globular cluster',
    ],
  },
];

/* =====================================================================
   DATA: BERBER STAR LORE
   ===================================================================== */

const berberStarLore = [
  {
    tradition: 'Amanar (Orion)',
    description:
      'The Amazigh (Berber) people know Orion as Amanar, the guide. For centuries, Saharan caravans used Orion\'s belt as a directional marker, its east-to-west movement across the sky serving as a natural compass. The three belt stars were called "the line of camels," reflecting the endless caravans that crossed the desert by their light.',
    culturalNote: 'Elders would teach children to find Amanar first, as the constellation\'s position indicated both direction and approximate time throughout the night.',
  },
  {
    tradition: 'Tallit (Pleiades)',
    description:
      'The Pleiades cluster, known as Tallit or "the little ones," played a critical role in the Berber agricultural calendar. Their heliacal rising in June signaled the start of the harvest season, while their evening appearance in autumn marked planting time. Farmers across the Atlas Mountains and Souss Valley timed their entire agricultural cycle to this cluster.',
    culturalNote: 'A popular Berber proverb states: "When Tallit appears at dawn, sharpen your sickle." The number of stars visible in the cluster was also used to predict the coming season\'s rainfall.',
  },
  {
    tradition: 'Aggenni n Wass (Polaris & Navigation)',
    description:
      'Polaris, the North Star, was essential for trans-Saharan navigation and is referred to by various Amazigh names depending on the region. Desert traders memorized the positions of key stars relative to Polaris to maintain course during nights when landmarks were invisible. Star navigation was a specialized skill passed from father to son, and accomplished navigators commanded great respect.',
    culturalNote: 'Even today, elderly nomads in the Sahara can navigate by the stars with remarkable precision, a living connection to thousands of years of stellar wayfinding tradition.',
  },
  {
    tradition: 'Izi (Venus)',
    description:
      'Venus, the brightest object in the sky after the Sun and Moon, held special significance in Berber cosmology. Known as Izi or "the bright one," its appearance as both morning and evening star led to rich mythological traditions. In some Amazigh traditions, Venus was associated with beauty and guidance, and its first appearance after conjunction with the Sun was celebrated.',
    culturalNote: 'Berber women in the Rif mountains historically associated Venus with femininity and protection. The planet\'s brilliant appearance at dusk was considered a blessing for evening gatherings.',
  },
  {
    tradition: 'The Milky Way as the Celestial River',
    description:
      'The Amazigh viewed the Milky Way as a great river flowing across the sky, sometimes called "the path of straw" or "the river of night." In Tuareg tradition, the dark lanes within the Milky Way were seen as the banks of this celestial river, and the bright star clouds were its rushing waters. This cosmic river mirrored the seasonal rivers (oueds) that flow through the desert after rain.',
    culturalNote: 'Storytellers would gather under the Milky Way to share tales, believing the celestial river carried the souls of ancestors. This oral tradition continues in some desert communities today.',
  },
];

/* =====================================================================
   DATA: STARGAZING TOURS
   ===================================================================== */

const stargazingTours = [
  {
    name: 'Sahara Astronomy Expedition',
    duration: '3 nights',
    price: 'From 4,500 MAD',
    location: 'Merzouga / Erg Chebbi',
    description:
      'A dedicated astronomy experience deep in the Sahara dunes. Travel by 4x4 to a remote desert camp, far from any light source. Professional astronomer guides provide high-powered telescopes and laser-pointed constellation tours. Each night features a different theme: planets and the Moon, deep-sky objects, and astrophotography.',
    includes: [
      'Professional astronomer guide with Dobsonian telescope',
      'Luxury desert camp with private tents',
      'Camel trek to sunset viewpoint',
      'Astrophotography workshop with tripods provided',
      'Traditional Berber dinner and music',
      'Night sky mythology and storytelling session',
    ],
    difficulty: 'Easy',
    groupSize: '4-12 people',
  },
  {
    name: 'Atlas Mountain Observatory Night',
    duration: '1 night',
    price: 'From 1,800 MAD',
    location: 'Oukaimeden / High Atlas',
    description:
      'Journey to the High Atlas for an evening of serious astronomy at altitude. Drive up from Marrakech to the Oukaimeden plateau at 2,750 meters, where the thinner atmosphere and distance from city lights create excellent conditions. Observe through research-grade equipment while an astronomer explains what you are seeing.',
    includes: [
      'Transport from Marrakech and return',
      'Access to high-quality telescopes (8" and 12" Dobsonians)',
      'Expert astronomer guide and lecture',
      'Hot Moroccan mint tea and snacks',
      'Warm blankets and seating provided',
      'Star map and red-light flashlight to take home',
    ],
    difficulty: 'Easy',
    groupSize: '6-15 people',
  },
  {
    name: 'Erg Chigaga Dark Sky Trek',
    duration: '4 nights',
    price: 'From 6,200 MAD',
    location: 'M\'hamid / Erg Chigaga',
    description:
      'The ultimate dark-sky experience in Morocco. Trek by camel caravan from M\'hamid into the vast Erg Chigaga dune field, one of the darkest accessible locations in North Africa. Three nights under Bortle Class 1 skies with no artificial light on any horizon. Combines serious astronomy with authentic Saharan adventure.',
    includes: [
      'Camel caravan through the desert',
      'Three nights in nomadic bivouac camps',
      'Professional astronomer with portable telescope',
      'Astrophotography guidance and camera setup assistance',
      'Full board with traditional Saharan cuisine',
      'Berber star lore and navigation workshop',
      'All camping equipment and bedding',
    ],
    difficulty: 'Moderate',
    groupSize: '4-8 people',
  },
  {
    name: 'Zagora Stargazing & Oasis Retreat',
    duration: '2 nights',
    price: 'From 3,200 MAD',
    location: 'Zagora / Draa Valley',
    description:
      'Combine dark-sky stargazing with the beauty of the Draa Valley oases. Stay in a boutique desert lodge surrounded by date palm groves, with unobstructed views of the night sky. Two guided observation sessions focus on seasonal highlights, constellation identification, and binocular deep-sky touring.',
    includes: [
      'Boutique desert lodge accommodation',
      'Two guided stargazing sessions with telescopes',
      'Binoculars provided for personal use',
      'Draa Valley palm grove walk at sunset',
      'Traditional Moroccan meals',
      'Constellation identification workbook',
    ],
    difficulty: 'Easy',
    groupSize: '2-10 people',
  },
];

/* =====================================================================
   DATA: ASTROPHOTOGRAPHY SETTINGS
   ===================================================================== */

const astrophotoSettings = [
  {
    subject: 'Milky Way Wide-Field',
    lens: '14-24mm f/2.8 (or widest available)',
    aperture: 'f/2.8 (wide open)',
    shutter: '15-25 seconds (use 500 rule: 500 / focal length)',
    iso: 'ISO 3200-6400',
    focus: 'Manual focus on a bright star using live view at 10x zoom',
    tips: 'Shoot during astronomical twilight for foreground detail. Stack 10-15 frames to reduce noise. Use a sturdy tripod and remote shutter or 2-second timer.',
  },
  {
    subject: 'Star Trails',
    lens: '14-35mm f/2.8-4',
    aperture: 'f/4',
    shutter: '30 seconds per frame, 100-200 frames stacked',
    iso: 'ISO 800-1600',
    focus: 'Manual focus on Polaris or bright star',
    tips: 'Point north for circular trails around Polaris, or east/west for diagonal trails. Use an intervalometer for consistent gaps. Stack in StarStaX or Photoshop. Include a foreground element like a dune ridge or tent.',
  },
  {
    subject: 'Lunar Photography',
    lens: '200-600mm telephoto',
    aperture: 'f/8-f/11',
    shutter: '1/125 - 1/250 second',
    iso: 'ISO 100-400',
    focus: 'Autofocus on the Moon\'s terminator (shadow line)',
    tips: 'The Moon is surprisingly bright. The "looney 11" rule: f/11, 1/ISO shutter speed. Shoot during crescent phase for dramatic shadows on craters. The terminator (day/night line) reveals the most surface detail.',
  },
  {
    subject: 'Planet Close-ups',
    lens: 'Telescope with camera adapter (1000mm+ effective)',
    aperture: 'Determined by telescope',
    shutter: '1/30 - 1/250 second (video mode preferred)',
    iso: 'ISO 100-800',
    focus: 'Manual focus, fine-tune on planet edge',
    tips: 'Shoot video at high frame rate (60fps+) and stack best frames in RegiStax or AutoStakkert. Atmospheric seeing matters more than aperture. Wait for moments of steady air. Best 2-3 hours after sunset when the atmosphere stabilizes.',
  },
  {
    subject: 'Meteor Showers',
    lens: '14-24mm f/2.8',
    aperture: 'f/2.8 (wide open)',
    shutter: '20-30 seconds continuous shooting',
    iso: 'ISO 3200-6400',
    focus: 'Manual focus on a bright star',
    tips: 'Point toward the radiant but not directly at it; meteors are longer away from the radiant. Shoot continuously all night and review later. A wide angle captures more sky area. Battery grip and spare batteries are essential in cool desert nights.',
  },
  {
    subject: 'Desert Camp Under Stars',
    lens: '14-24mm f/2.8',
    aperture: 'f/2.8',
    shutter: '20-30 seconds',
    iso: 'ISO 1600-3200',
    focus: 'Manual focus on the stars, then recompose',
    tips: 'Light-paint the tent or camp gently with a warm-colored flashlight during the exposure (2-3 seconds of light during a 25-second exposure). This creates the iconic "glowing tent under the stars" shot. Use a headlamp with a red filter to preserve your night vision.',
  },
];

/* =====================================================================
   DATA: EQUIPMENT RECOMMENDATIONS
   ===================================================================== */

const equipmentGuide = [
  {
    level: 'Naked Eye',
    budget: 'Free',
    icon: 'eye',
    items: [
      'Your own eyes (allow 20-30 minutes for full dark adaptation)',
      'Red-light headlamp or flashlight (preserves night vision)',
      'Star chart or mobile app (SkySafari, Stellarium) with red-screen mode',
      'Reclining chair, blanket, or sleeping pad for comfort',
      'Warm layers (desert temperatures drop dramatically at night)',
    ],
    bestFor: 'Constellations, Milky Way, meteor showers, bright planets, satellites',
  },
  {
    level: 'Binoculars',
    budget: '500-3,000 MAD',
    icon: 'binoculars',
    items: [
      '10x50 binoculars (ideal for astronomy: bright, wide field)',
      'Tripod adapter for binoculars (eliminates shake at high magnification)',
      'Sturdy tripod with fluid head',
      'All naked-eye equipment listed above',
    ],
    bestFor: 'Star clusters, Andromeda Galaxy, Moon craters, Jupiter\'s moons, double stars, comets',
  },
  {
    level: 'Telescope',
    budget: '3,000-15,000 MAD',
    icon: 'telescope',
    items: [
      '8" Dobsonian reflector (best value for visual astronomy)',
      'Or 80-100mm refractor on equatorial mount (portable option)',
      'Eyepiece set: 25mm (low power), 10mm (medium), 6mm (high power)',
      'Barlow lens (2x, doubles the magnification of each eyepiece)',
      'Collimation tool for reflectors',
      'Dew shield and dew heater strips',
    ],
    bestFor: 'Planets, galaxies, nebulae, globular clusters, lunar detail, double stars',
  },
  {
    level: 'Astrophotography',
    budget: '8,000-50,000+ MAD',
    icon: 'camera',
    items: [
      'Full-frame or APS-C mirrorless camera with good high-ISO performance',
      'Fast wide-angle lens (14-24mm f/2.8)',
      'Sturdy carbon fiber tripod',
      'Intervalometer or remote shutter release',
      'Star tracker mount (Sky-Watcher Star Adventurer or iOptron SkyGuider)',
      'Spare batteries (cold drains batteries faster)',
      'Rocket blower and lens cloth (sand is everywhere in the Sahara)',
      'Laptop with Lightroom/Photoshop for field review',
    ],
    bestFor: 'Milky Way landscapes, star trails, tracked deep-sky, time-lapses',
  },
];

/* =====================================================================
   DATA: BEST TIMES
   ===================================================================== */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    skyHighlights: [
      'Milky Way core begins rising in the predawn sky by late March',
      'Leo, Virgo, and the spring galaxy clusters dominate the evening sky',
      'Eta Aquarid meteor shower peaks in early May (50/hour)',
      'Longer nights than summer, with mild desert temperatures',
    ],
    weather: 'Warm days (25-30C), cool nights (10-15C). Occasional sandstorms (chergui) in April.',
    rating: 'Excellent',
    moonTip: 'Plan around the new Moon for the darkest skies. The week centered on new Moon is ideal.',
  },
  {
    season: 'Summer (June - August)',
    skyHighlights: [
      'Milky Way core visible in the evening, arching overhead by midnight',
      'Summer Triangle (Vega, Deneb, Altair) dominates the zenith',
      'Perseid meteor shower peaks August 11-13 (100-150/hour)',
      'Noctilucent clouds occasionally visible on the northern horizon',
    ],
    weather: 'Very hot days (38-45C in the Sahara), warm nights (25-30C). Go to the Atlas Mountains for cooler stargazing.',
    rating: 'Good (hot but spectacular Milky Way)',
    moonTip: 'Summer heat makes desert camping challenging. Mountain locations above 2,000m are much more comfortable.',
  },
  {
    season: 'Autumn (September - November)',
    skyHighlights: [
      'Milky Way core still visible in early evening, setting by midnight',
      'Andromeda Galaxy reaches prime viewing position high in the east',
      'Orionid meteor shower in October (20-25/hour)',
      'Taurid fireballs in November (low rate but spectacular bright meteors)',
    ],
    weather: 'Perfect temperatures: 25-32C days, 12-18C nights. Minimal cloud cover.',
    rating: 'Best Overall Season',
    moonTip: 'Autumn offers the best combination of comfortable temperatures, dark skies, and celestial events.',
  },
  {
    season: 'Winter (December - February)',
    skyHighlights: [
      'Orion, Taurus, and the winter hexagon dominate the sky',
      'Geminid meteor shower in December (120-150/hour, the year\'s best)',
      'Quadrantid meteor shower in January (80-120/hour)',
      'Longest nights of the year: 13+ hours of darkness',
    ],
    weather: 'Cool days (15-22C), cold nights (0-8C in the desert, below freezing in the Atlas). Clear skies.',
    rating: 'Excellent (cold but longest nights)',
    moonTip: 'Bring serious warm clothing. Desert nights in winter are genuinely cold. A sleeping bag rated to -5C is recommended for overnight camps.',
  },
];

/* =====================================================================
   DATA: COMBINING EXPERIENCES
   ===================================================================== */

const combinedExperiences = [
  {
    title: 'Stargazing + Camel Trekking',
    description:
      'Ride a camel caravan into the dunes at sunset, dine under the stars at a desert camp, and stargaze from the top of a dune with a guide. The quintessential Morocco experience.',
    duration: '1-3 nights',
    location: 'Merzouga or M\'hamid',
    image: 'https://images.unsplash.com/photo-1548017544-ef74e767f131?q=80&w=600',
  },
  {
    title: 'Stargazing + Atlas Trekking',
    description:
      'Hike through the High Atlas during the day and observe the stars from mountain camps at night. The altitude provides both physical challenge and astronomical rewards.',
    duration: '3-5 days',
    location: 'Toubkal National Park',
    image: 'https://images.unsplash.com/photo-1493807742375-fbc1f7d45e70?q=80&w=600',
  },
  {
    title: 'Stargazing + Desert Luxury Camp',
    description:
      'Experience the stars from a luxury desert camp with king-size beds, private terraces, hot showers, and gourmet dining. Combines comfort with pristine dark skies.',
    duration: '1-2 nights',
    location: 'Erg Chebbi or Erg Chigaga',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=600',
  },
  {
    title: 'Stargazing + Photography Workshop',
    description:
      'Join a professional astrophotographer for hands-on instruction in capturing the Milky Way, star trails, and desert landscapes under the stars. All skill levels welcome.',
    duration: '2-4 nights',
    location: 'Merzouga or Zagora',
    image: 'https://images.unsplash.com/photo-1515825838458-f2a94b20105a?q=80&w=600',
  },
  {
    title: 'Stargazing + Cultural Immersion',
    description:
      'Stay with a Berber family, learn traditional star navigation techniques, hear ancient star myths, and experience Saharan hospitality with mint tea, tagine, and music under the cosmos.',
    duration: '2-3 nights',
    location: 'Draa Valley or Anti-Atlas',
    image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=600',
  },
  {
    title: 'Stargazing + Yoga & Wellness Retreat',
    description:
      'Combine predawn yoga sessions, meditation under the stars, sound healing in the desert silence, and guided stargazing for a holistic mind-body-cosmos experience.',
    duration: '3-5 nights',
    location: 'Zagora or Tafraout',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600',
  },
];

/* =====================================================================
   DATA: PRACTICAL TIPS
   ===================================================================== */

const practicalTips = [
  {
    category: 'Moon Phase Planning',
    icon: 'moon',
    tips: [
      'The single most important factor in stargazing quality is the Moon phase',
      'New Moon offers the darkest skies; plan your trip around it',
      'The week centered on new Moon (3 days before to 4 days after) is ideal',
      'A crescent Moon sets early and can actually add beauty to photos',
      'Full Moon ruins deep-sky viewing but is perfect for landscape photography',
      'Use apps like PhotoPills or The Photographer\'s Ephemeris for Moon phase planning',
    ],
  },
  {
    category: 'Dark Adaptation',
    icon: 'eye',
    tips: [
      'Your eyes need 20-30 minutes in complete darkness to fully adapt',
      'Even a brief flash of white light resets your adaptation to zero',
      'Use only red-filtered light (headlamp with red mode) to preserve night vision',
      'Set your phone to red-screen mode (accessibility settings) before going out',
      'Avoid looking at car headlights or camp fires when observing',
      'After full adaptation, you can see stars 50x fainter than your initial view',
    ],
  },
  {
    category: 'Desert Night Comfort',
    icon: 'thermometer',
    tips: [
      'Desert temperatures can drop 20-25 degrees C after sunset',
      'Layer clothing: thermal base, fleece mid-layer, windproof outer',
      'A warm hat and gloves are essential, even in spring/autumn',
      'Bring a thermos of hot mint tea or coffee for long sessions',
      'A sleeping pad or reclining chair keeps you off cold sand',
      'Hand warmers are useful for keeping fingers nimble on camera controls',
    ],
  },
  {
    category: 'Sand & Gear Protection',
    icon: 'shield',
    tips: [
      'Sand is the enemy of optical equipment in the Sahara',
      'Keep lens caps on until the moment you shoot, then replace immediately',
      'Carry a rocket blower (never canned air) to remove sand from lenses',
      'Store cameras in sealed dry bags or Ziploc bags when not in use',
      'Change lenses inside a tent or jacket to minimize sand exposure',
      'A UV filter on your lens acts as a sacrificial barrier against sand scratches',
    ],
  },
];

/* =====================================================================
   DATA: BORTLE SCALE REFERENCE
   ===================================================================== */

const bortleScale = [
  { class: 1, name: 'Excellent Dark-Sky Site', description: 'Zodiacal light, gegenschein, and zodiacal band visible. Milky Way casts shadows. M33 visible with direct vision.', color: '#1a1a2e' },
  { class: 2, name: 'Typical Truly Dark Site', description: 'Airglow may be visible. M33 easy naked-eye. Milky Way highly structured with dark lanes obvious.', color: '#16213e' },
  { class: 3, name: 'Rural Sky', description: 'Some light pollution on horizon. Milky Way still appears complex. Globular clusters visible in binoculars.', color: '#1a3a5c' },
  { class: 4, name: 'Rural/Suburban Transition', description: 'Light pollution domes visible in several directions. Milky Way still impressive but losing detail.', color: '#2d5a7b' },
  { class: 5, name: 'Suburban Sky', description: 'Milky Way is weak or invisible near horizon. Light pollution domes obvious. Only brighter Messier objects visible.', color: '#4a7c9b' },
  { class: 6, name: 'Bright Suburban Sky', description: 'Milky Way only visible near zenith. Sky brightness noticeably affects naked-eye limiting magnitude.', color: '#6b9db8' },
  { class: 7, name: 'Suburban/Urban Transition', description: 'Entire sky has a grayish-white hue. Milky Way may be totally invisible. Strong light sources visible in all directions.', color: '#8dbcd4' },
  { class: 8, name: 'City Sky', description: 'Sky is light gray or orange. Many constellations unrecognizable. Only bright planets and stars visible.', color: '#b5d4e8' },
  { class: 9, name: 'Inner-City Sky', description: 'Only the Moon, planets, and a few bright stars visible. Many people have never seen the Milky Way.', color: '#d4e5f0' },
];

/* =====================================================================
   HELPER: BORTLE COLOR
   ===================================================================== */

function getBortleColor(bortle: number): string {
  if (bortle <= 1) return 'text-green-700 bg-green-50 border-green-200';
  if (bortle <= 2) return 'text-emerald-700 bg-emerald-50 border-emerald-200';
  if (bortle <= 3) return 'text-teal-700 bg-teal-50 border-teal-200';
  return 'text-blue-700 bg-blue-50 border-blue-200';
}

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function StargazingPage() {
  return (
    <>
      {/* --- JSON-LD Structured Data --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttraction',
            name: 'Morocco Stargazing & Dark Sky Destinations',
            description:
              'Morocco offers world-class stargazing with Bortle Class 1-2 dark skies in the Sahara desert and Atlas Mountains. Experience the Milky Way, meteor showers, and ancient Berber star lore.',
            url: 'https://citytoursmorocco.com/stargazing',
            image: 'https://images.unsplash.com/photo-1515825838458-f2a94b20105a?w=1200&h=630&fit=crop',
            touristType: ['Astronomy enthusiast', 'Astrophotographer', 'Nature lover', 'Adventure traveler'],
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 31.15,
              longitude: -4.0167,
            },
            isAccessibleForFree: false,
            availableLanguage: ['English', 'French', 'Arabic', 'Berber'],
          }),
        }}
      />

      {/* =================================================================
          HERO SECTION
          ================================================================= */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-stargazing.webp"
            alt="The Milky Way rising over the Sahara desert dunes near Merzouga, Morocco"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          {/* Starfield overlay effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 100%),
                radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.6) 0%, transparent 100%),
                radial-gradient(1.5px 1.5px at 60% 20%, rgba(255,255,255,0.9) 0%, transparent 100%),
                radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.7) 0%, transparent 100%),
                radial-gradient(1.5px 1.5px at 10% 80%, rgba(255,255,255,0.5) 0%, transparent 100%),
                radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.6) 0%, transparent 100%)`,
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="container-morocco pb-16 pt-40">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                    <Home className="w-3.5 h-3.5" />
                    Home
                  </Link>
                </li>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                <li>
                  <Link href="/experiences" className="hover:text-white transition-colors">
                    Experiences
                  </Link>
                </li>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                <li className="text-[var(--color-accent-light)]">Stargazing & Dark Skies</li>
              </ol>
            </nav>

            {/* Headline */}
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-[var(--color-accent-light)] mb-6">
                <Star className="w-3.5 h-3.5" />
                Dark Sky Destinations
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
                Stargazing in{' '}
                <span className="text-gradient-gold">Morocco</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-8 font-body">
                From the pristine Bortle Class 1 skies of the Sahara to the high-altitude
                observatories of the Atlas Mountains, Morocco offers some of the finest stargazing
                in the Northern Hemisphere. Witness the Milky Way in all its glory, learn ancient
                Berber star navigation, and capture the cosmos from one of Earth&apos;s last great
                dark-sky refuges.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { value: 'Bortle 1-2', label: 'Dark Sky Rating', icon: Star },
                  { value: '6+', label: 'Prime Locations', icon: MapPin },
                  { value: '7.0+', label: 'Limiting Magnitude', icon: Eye },
                  { value: '300+', label: 'Clear Nights/Year', icon: CloudMoon },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <stat.icon className="w-5 h-5 text-[var(--color-accent-light)]" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">{stat.value}</div>
                      <div className="text-white/60 text-xs">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#locations"
                  className="btn-accent btn-lg rounded-full"
                >
                  <MapPin className="w-5 h-5" />
                  Explore Dark Sky Sites
                </a>
                <a
                  href="#tours"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  <Telescope className="w-5 h-5" />
                  View Stargazing Tours
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zellige divider */}
      <div className="zellige-border" />

      {/* =================================================================
          INTRODUCTION SECTION
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Sparkles className="w-4 h-4" />
              Why Morocco for Stargazing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              One of Earth&apos;s Last Great Dark-Sky Refuges
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              While light pollution erases the night sky across much of the developed world,
              Morocco&apos;s vast Saharan wilderness, remote mountain valleys, and sparse desert
              populations preserve some of the darkest accessible skies remaining on the planet.
              Situated between 29 and 35 degrees north latitude, Morocco offers access to a vast
              swath of the celestial sphere, from Polaris in the north to constellations invisible
              from Europe.
            </p>
          </div>

          {/* Key advantages grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Moon,
                title: 'Pristine Dark Skies',
                description:
                  'The Sahara desert and Anti-Atlas regions register Bortle Class 1-2 on the dark-sky scale, matching the finest observatory sites worldwide. Zero artificial light on the horizon in the most remote locations.',
              },
              {
                icon: Sun,
                title: '300+ Clear Nights',
                description:
                  'Morocco\'s semi-arid climate delivers over 300 cloud-free nights per year in the south and east. Low humidity means exceptional atmospheric transparency for sharp, bright star images.',
              },
              {
                icon: ThermometerSun,
                title: 'Year-Round Comfort',
                description:
                  'Unlike high-latitude observing, Morocco\'s mild climate allows comfortable stargazing from spring through autumn. Even winter nights, while cool, rarely reach the extreme cold of northern sites.',
              },
              {
                icon: Mountain,
                title: 'Altitude Advantage',
                description:
                  'The Atlas Mountains rise to 4,167 meters, placing observers above much of the atmosphere\'s turbulence and moisture. Higher altitude means steadier seeing and greater transparency.',
              },
              {
                icon: Compass,
                title: 'Southern Latitude Access',
                description:
                  'Morocco\'s southerly position (29-35 N) reveals objects invisible from northern Europe, including Canopus, Omega Centauri, and the Southern Cross from the most southern locations.',
              },
              {
                icon: Heart,
                title: 'Living Star Traditions',
                description:
                  'The Amazigh (Berber) people have navigated and farmed by the stars for millennia. Their living astronomical traditions add a cultural dimension found nowhere else.',
              },
            ].map((advantage) => (
              <div
                key={advantage.title}
                className="card-moroccan p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-100)] transition-colors">
                  <advantage.icon className="w-6 h-6 text-[var(--color-accent-dark)]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          BORTLE SCALE REFERENCE
          ================================================================= */}
      <section className="py-20 section-dark">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Layers className="w-4 h-4" />
              Understanding Sky Quality
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              The Bortle Dark-Sky Scale
            </h2>
            <p className="text-[#A8A49C] leading-relaxed">
              The Bortle scale measures night sky darkness on a scale of 1 (pristine) to 9 (inner city).
              Morocco&apos;s best locations score Class 1-2, putting them among the finest dark-sky
              sites on Earth, comparable to the Atacama Desert in Chile or Namibia&apos;s NamibRand Nature Reserve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {bortleScale.map((level) => (
              <div
                key={level.class}
                className="relative rounded-xl p-4 border border-white/10 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-colors"
                style={{ backgroundColor: `${level.color}40` }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-display text-lg font-bold text-white"
                    style={{ backgroundColor: level.color }}
                  >
                    {level.class}
                  </div>
                  <div>
                    <h3 className="text-white font-heading text-sm font-bold mb-1">{level.name}</h3>
                    <p className="text-[#A8A49C] text-xs leading-relaxed">{level.description}</p>
                  </div>
                </div>
                {level.class <= 2 && (
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-[10px] font-bold uppercase tracking-wider">
                      <Star className="w-2.5 h-2.5" /> Morocco
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          STARGAZING LOCATIONS
          ================================================================= */}
      <section id="locations" className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <MapPin className="w-4 h-4" />
              Top Destinations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Best Stargazing Locations in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              From the iconic dunes of Erg Chebbi to the high plateaus of the Atlas, these are
              Morocco&apos;s premier dark-sky destinations, each offering unique landscapes and
              conditions for observing the cosmos.
            </p>
          </div>

          <div className="space-y-10">
            {stargazingLocations.map((location, index) => (
              <div
                key={location.id}
                className={`card-moroccan overflow-hidden ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-72 lg:h-auto lg:min-h-[420px] ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={location.image}
                      alt={`Stargazing at ${location.name}, Morocco - Bortle Class ${location.bortle}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Bortle badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${getBortleColor(location.bortle)}`}>
                        <Star className="w-3 h-3" />
                        Bortle Class {location.bortle}
                      </span>
                    </div>
                    {/* Coordinates */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white/90 border border-white/10">
                        <Navigation className="w-3 h-3" />
                        {location.coordinates}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      {location.region}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                      {location.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {location.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-5">
                      {location.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                          <span className="text-sm text-[var(--text-secondary)]">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--border-light)]">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-[var(--color-secondary)]" />
                        <span className="text-[var(--text-secondary)]">
                          <span className="font-semibold text-[var(--text-primary)]">Best:</span> {location.bestMonths}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Compass className="w-4 h-4 text-[var(--color-secondary)]" />
                        <span className="text-[var(--text-secondary)]">{location.access}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          WHAT YOU CAN SEE
          ================================================================= */}
      <section className="py-20 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Telescope className="w-4 h-4" />
              Celestial Wonders
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              What You Can See in Morocco&apos;s Dark Skies
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Under Bortle Class 1-2 conditions, the night sky transforms from a backdrop into a
              spectacle. Here is what awaits you above Morocco&apos;s desert and mountain horizons.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {celestialObjects.map((obj) => {
              const IconMap: Record<string, typeof Star> = {
                sparkles: Sparkles,
                'circle-dot': CircleDot,
                zap: Zap,
                star: Star,
              };
              const ObjIcon = IconMap[obj.icon] || Star;

              return (
                <div key={obj.category} className="card-featured p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center">
                      <ObjIcon className="w-5 h-5 text-[var(--color-accent-dark)]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                      {obj.category}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {obj.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-secondary)] mb-4 bg-[var(--color-secondary-50)] rounded-lg px-3 py-2">
                    <Clock className="w-3.5 h-3.5" />
                    {obj.bestTime}
                  </div>
                  <ul className="space-y-2">
                    {obj.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Star className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-1" />
                        <span className="text-sm text-[var(--text-secondary)]">{detail}</span>
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
          SEASONAL GUIDE
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Calendar className="w-4 h-4" />
              Timing Your Visit
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Best Times for Stargazing in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Every season brings different celestial treasures. Plan your visit to coincide with
              the events that interest you most, and always consider the Moon phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalGuide.map((season) => {
              const seasonIcons: Record<string, typeof Sun> = {
                'Spring (March - May)': Sunrise,
                'Summer (June - August)': Sun,
                'Autumn (September - November)': Sunset,
                'Winter (December - February)': CloudMoon,
              };
              const SeasonIcon = seasonIcons[season.season] || Sun;

              return (
                <div key={season.season} className="card-moroccan overflow-hidden">
                  {/* Season header */}
                  <div className="p-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                        <h3 className="font-heading text-xl font-bold text-white">{season.season}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        season.rating === 'Best Overall Season'
                          ? 'bg-[var(--color-accent)] text-[var(--color-primary)]'
                          : 'bg-white/15 text-white'
                      }`}>
                        {season.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-heading text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">
                      Sky Highlights
                    </h4>
                    <ul className="space-y-2 mb-5">
                      {season.skyHighlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Star className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-1" />
                          <span className="text-sm text-[var(--text-secondary)]">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3 pt-4 border-t border-[var(--border-light)]">
                      <div className="flex items-start gap-2">
                        <ThermometerSun className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{season.weather}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)] italic">{season.moonTip}</span>
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
          BERBER STAR LORE
          ================================================================= */}
      <section className="py-20 section-dark moroccan-pattern-dark">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Sparkles className="w-4 h-4" />
              Cultural Heritage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Berber Astronomical Traditions & Star Lore
            </h2>
            <p className="text-lg text-[#A8A49C] leading-relaxed">
              For thousands of years, the Amazigh (Berber) people have read the stars as a
              calendar, compass, and cultural touchstone. Their astronomical traditions represent
              one of the oldest living star-knowledge systems in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {berberStarLore.map((lore, index) => (
              <div
                key={index}
                className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--color-accent)]/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/15 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {lore.tradition}
                </h3>
                <p className="text-sm text-[#A8A49C] leading-relaxed mb-4">
                  {lore.description}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-[var(--color-accent-light)] italic leading-relaxed">
                    {lore.culturalNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          STARGAZING TOURS
          ================================================================= */}
      <section id="tours" className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Telescope className="w-4 h-4" />
              Guided Experiences
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Stargazing Tours & Desert Camps
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              From single-night telescope sessions to multi-day Saharan expeditions,
              these curated experiences connect you with Morocco&apos;s dark skies through
              expert guidance and authentic desert hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stargazingTours.map((tour, index) => (
              <div key={index} className="card-premium">
                <div className="p-8">
                  {/* Tour header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-1">
                        {tour.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5" />
                        {tour.location}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display text-lg font-bold text-[var(--color-accent-dark)]">
                        {tour.price}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">per person</div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {tour.description}
                  </p>

                  {/* Meta tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="tag tag-primary">
                      <Clock className="w-3 h-3 mr-1" />
                      {tour.duration}
                    </span>
                    <span className="tag tag-secondary">
                      <Users className="w-3 h-3 mr-1" />
                      {tour.groupSize}
                    </span>
                    <span className="tag tag-accent">
                      <Mountain className="w-3 h-3 mr-1" />
                      {tour.difficulty}
                    </span>
                  </div>

                  {/* Includes */}
                  <div className="pt-5 border-t border-[var(--border-light)]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                      What&apos;s Included
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {tour.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                          <span className="text-xs text-[var(--text-secondary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          ASTROPHOTOGRAPHY GUIDE
          ================================================================= */}
      <section className="py-20 section-warm">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Camera className="w-4 h-4" />
              Photography Settings & Gear
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Astrophotography in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Morocco&apos;s dark skies and dramatic desert landscapes create world-class
              astrophotography conditions. Here are the settings and techniques to capture
              the cosmos from the Sahara and Atlas Mountains.
            </p>
          </div>

          {/* Settings table */}
          <div className="overflow-x-auto mb-12">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-7 gap-px bg-[var(--color-primary)] rounded-t-xl overflow-hidden">
                {['Subject', 'Lens', 'Aperture', 'Shutter', 'ISO', 'Focus', 'Tips'].map((header) => (
                  <div key={header} className="px-4 py-3 text-xs font-bold text-white uppercase tracking-wider bg-[var(--color-primary)]">
                    {header}
                  </div>
                ))}
              </div>
              {/* Rows */}
              {astrophotoSettings.map((setting, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-7 gap-px ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'
                  } ${index === astrophotoSettings.length - 1 ? 'rounded-b-xl overflow-hidden' : ''}`}
                >
                  <div className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">
                    {setting.subject}
                  </div>
                  <div className="px-4 py-3 text-xs text-[var(--text-secondary)]">{setting.lens}</div>
                  <div className="px-4 py-3 text-xs text-[var(--text-secondary)]">{setting.aperture}</div>
                  <div className="px-4 py-3 text-xs text-[var(--text-secondary)]">{setting.shutter}</div>
                  <div className="px-4 py-3 text-xs text-[var(--text-secondary)]">{setting.iso}</div>
                  <div className="px-4 py-3 text-xs text-[var(--text-secondary)]">{setting.focus}</div>
                  <div className="px-4 py-3 text-xs text-[var(--text-secondary)]">{setting.tips}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick tips callout */}
          <div className="max-w-3xl mx-auto card-featured p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center shrink-0">
                <Aperture className="w-6 h-6 text-[var(--color-accent-dark)]" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-3">
                  The 500 Rule for Sharp Stars
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  To avoid star trails in wide-field Milky Way photography, divide 500 by your
                  focal length to get the maximum shutter speed in seconds. For example: 500 / 14mm
                  = 35 seconds (though 25 seconds is safer for sharp results on modern high-resolution
                  sensors). For crop-sensor cameras, use 500 / (focal length x crop factor).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { lens: '14mm', time: '25 sec' },
                    { lens: '24mm', time: '20 sec' },
                    { lens: '35mm', time: '13 sec' },
                  ].map((example) => (
                    <div key={example.lens} className="flex items-center gap-2 bg-[var(--surface-muted)] rounded-lg px-3 py-2">
                      <Focus className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-xs">
                        <span className="font-bold text-[var(--text-primary)]">{example.lens}</span>{' '}
                        <span className="text-[var(--text-muted)]">{example.time}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          EQUIPMENT RECOMMENDATIONS
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Telescope className="w-4 h-4" />
              Gear Guide
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Equipment Recommendations by Level
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              You do not need expensive equipment to enjoy Morocco&apos;s dark skies. Your naked
              eyes are the best place to start. Here is what to bring at each level of investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipmentGuide.map((level) => {
              const IconMap: Record<string, typeof Eye> = {
                eye: Eye,
                binoculars: Binoculars,
                telescope: Telescope,
                camera: Camera,
              };
              const LevelIcon = IconMap[level.icon] || Eye;

              return (
                <div key={level.level} className="card-moroccan p-8">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center">
                        <LevelIcon className="w-5 h-5 text-[var(--color-accent-dark)]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                          {level.level}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)]">Budget: {level.budget}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {level.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[var(--border-light)]">
                    <div className="flex items-center gap-2 text-xs">
                      <Star className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span className="text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span>{' '}
                        {level.bestFor}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          COMBINING EXPERIENCES
          ================================================================= */}
      <section className="py-20 section-warm">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Heart className="w-4 h-4" />
              Multi-Experience Trips
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Combine Stargazing With Other Adventures
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Stargazing pairs naturally with Morocco&apos;s other great experiences. Build
              a multi-dimensional trip that fills your days with adventure and your nights
              with the cosmos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combinedExperiences.map((experience, index) => (
              <div key={index} className="card-moroccan-hover overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-[var(--text-primary)]">
                      <Clock className="w-3 h-3" />
                      {experience.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-[var(--text-primary)]">
                      <MapPin className="w-3 h-3" />
                      {experience.location}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          PRACTICAL TIPS
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Info className="w-4 h-4" />
              Essential Knowledge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Practical Stargazing Tips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Make the most of your dark-sky experience with these essential tips on
              preparation, comfort, and preserving your night vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practicalTips.map((section) => {
              const TipIconMap: Record<string, typeof Moon> = {
                moon: Moon,
                eye: Eye,
                thermometer: ThermometerSun,
                shield: Shield,
              };
              const TipIcon = TipIconMap[section.icon] || Info;

              return (
                <div key={section.category} className="card-moroccan p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-secondary-50)] flex items-center justify-center">
                      <TipIcon className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                      {section.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</span>
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
          DESERT OVERNIGHT CAMPS FEATURE
          ================================================================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1920"
            alt="Luxury desert camp under the stars in the Moroccan Sahara"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-morocco relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
                <Tent className="w-4 h-4" />
                The Ultimate Experience
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Desert Overnight Stargazing Camps
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Sleeping under the stars in the Sahara is a transformative experience.
                Morocco offers camps ranging from authentic nomadic bivouacs to luxury
                glamping with king-size beds and private terraces. All share one thing
                in common: a night sky that must be seen to be believed.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Luxury Desert Camps',
                    desc: 'Private tents with en-suite bathrooms, hot showers, and gourmet dining. Erg Chebbi and Erg Chigaga have several world-class options. Prices from 2,000-5,000 MAD per night.',
                  },
                  {
                    title: 'Mid-Range Bivouacs',
                    desc: 'Comfortable shared camps with clean facilities, traditional meals, and campfire gatherings. The social atmosphere adds to the experience. From 500-1,500 MAD per night.',
                  },
                  {
                    title: 'Authentic Nomadic Camps',
                    desc: 'Sleep on traditional rugs under camel-hair tents, just as Saharan nomads have for centuries. The most immersive and affordable option. From 200-500 MAD per night.',
                  },
                ].map((camp) => (
                  <div key={camp.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Star className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-white font-heading font-bold text-sm mb-1">{camp.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{camp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/desert"
                  className="btn-accent rounded-full"
                >
                  <Tent className="w-4 h-4" />
                  Explore Desert Camps
                </Link>
                <Link
                  href="/luxury"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all text-sm"
                >
                  <Star className="w-4 h-4" />
                  Luxury Options
                </Link>
              </div>
            </div>

            {/* Checklist for camp stargazing */}
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                Desert Camp Stargazing Checklist
              </h3>
              <div className="space-y-3">
                {[
                  'Red-light headlamp (preserve your night vision and your neighbors\')',
                  'Warm layers: thermal base, fleece, windproof jacket, hat, and gloves',
                  'Sleeping pad or mat for lying on the sand (much more comfortable than standing)',
                  'Binoculars (10x50 recommended for astronomy)',
                  'Star chart app with red-screen night mode enabled',
                  'Camera with wide-angle lens and tripod for astrophotography',
                  'Spare batteries (cold nights drain batteries rapidly)',
                  'Dry bag or Ziploc bags to protect gear from sand',
                  'Rocket blower for cleaning sand from lenses',
                  'Thermos for hot tea or coffee during long observing sessions',
                  'Sleeping bag rated to at least 5C (even in spring and autumn)',
                  'Patience: allow 30 minutes for your eyes to fully dark-adapt',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          IMPORTANT NOTES / WARNINGS
          ================================================================= */}
      <section className="py-16 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="card-featured p-8 border-l-4 border-l-[var(--color-accent)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-[var(--color-accent-dark)]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-3">
                    Important Notes for Desert Stargazing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Sandstorms',
                        text: 'The chergui (sirocco) wind can bring sandstorms, particularly in March-April. Check weather forecasts and have a backup plan. Sandstorms can last 1-3 days.',
                      },
                      {
                        title: 'Navigation',
                        text: 'Never venture into the desert alone without a local guide. Dunes look identical after dark, and it is extremely easy to become disoriented. Always go with experienced operators.',
                      },
                      {
                        title: 'Dehydration',
                        text: 'The desert air is extremely dry. Drink 3-4 liters of water per day minimum, even when it feels cool at night. Bring more water than you think you need.',
                      },
                      {
                        title: 'Scorpions & Snakes',
                        text: 'Shake out shoes and clothing left on the ground. Avoid reaching into dark spaces. Keep tent zipped. Encounters are rare but preparation prevents problems.',
                      },
                    ].map((note) => (
                      <div key={note.title}>
                        <h4 className="font-heading text-sm font-bold text-[var(--text-primary)] mb-1">
                          {note.title}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {note.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          PHOTO GALLERY TEASER
          ================================================================= */}
      <section className="py-20 section-dark">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Morocco&apos;s Night Sky Gallery
            </h2>
            <p className="text-[#A8A49C] leading-relaxed">
              A glimpse of what awaits above Morocco&apos;s desert and mountain horizons.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1515825838458-f2a94b20105a?q=80&w=600',
                alt: 'Milky Way over Sahara dunes',
              },
              {
                src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=600',
                alt: 'Star-filled sky over the Atlas Mountains',
              },
              {
                src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600',
                alt: 'Deep space stars visible from the Sahara',
              },
              {
                src: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=600',
                alt: 'Desert camp under the night sky',
              },
              {
                src: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=600',
                alt: 'Star trails over Moroccan landscape',
              },
              {
                src: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=600',
                alt: 'Luxury tent under the Milky Way',
              },
              {
                src: 'https://images.unsplash.com/photo-1548017544-ef74e767f131?q=80&w=600',
                alt: 'Camel caravan silhouetted against the twilight sky',
              },
              {
                src: 'https://images.unsplash.com/photo-1493807742375-fbc1f7d45e70?q=80&w=600',
                alt: 'Atlas Mountain peaks under starlight',
              },
            ].map((photo, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl group ${
                  index === 0 || index === 5 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover min-h-[180px] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          RECOMMENDED APPS & RESOURCES
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Zap className="w-4 h-4" />
              Tools & Resources
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
              Recommended Apps & Planning Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Stellarium',
                type: 'Planetarium App',
                description: 'Free, open-source planetarium for desktop and mobile. Shows the exact sky from any location and time. Essential for planning what to observe each night.',
                platform: 'iOS, Android, Desktop',
              },
              {
                name: 'SkySafari',
                type: 'Star Chart & Telescope Control',
                description: 'Professional-grade astronomy app with detailed object descriptions, telescope control, and an excellent augmented reality mode for identifying stars and constellations.',
                platform: 'iOS, Android',
              },
              {
                name: 'PhotoPills',
                type: 'Photography Planner',
                description: 'Plan Milky Way shots, star trails, and Moon photography with precision. Shows the Milky Way position, Moon phase, and golden hour for any location and date.',
                platform: 'iOS, Android',
              },
              {
                name: 'Light Pollution Map',
                type: 'Dark Sky Finder',
                description: 'Interactive map showing global light pollution levels. Essential for finding the darkest spots in any region and understanding Bortle scale readings.',
                platform: 'Web',
              },
              {
                name: 'Clear Outside',
                type: 'Astronomy Weather',
                description: 'Specialized weather forecast for astronomers. Shows cloud cover, transparency, seeing conditions, and humidity hour by hour for your observing location.',
                platform: 'Web, iOS, Android',
              },
              {
                name: 'ISS Detector',
                type: 'Satellite Tracker',
                description: 'Track the International Space Station and other bright satellites passing over Morocco. The ISS is one of the brightest objects in the sky and visible to the naked eye.',
                platform: 'iOS, Android',
              },
            ].map((app) => (
              <div key={app.name} className="card-moroccan p-6 group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-base font-bold text-[var(--text-primary)]">
                    {app.name}
                  </h3>
                  <span className="tag tag-accent text-[10px]">{app.platform}</span>
                </div>
                <p className="text-xs font-medium text-[var(--color-secondary)] mb-2">{app.type}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {app.description}
                </p>
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
                <Info className="w-4 h-4" />
                Common Questions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Do I need a telescope to enjoy stargazing in Morocco?',
                  a: 'Absolutely not. The naked eye is the best instrument for many of Morocco\'s celestial highlights, including the Milky Way, meteor showers, planets, and constellations. Under Bortle Class 1-2 skies, you can see roughly 4,500 stars with the naked eye compared to just 200-300 from a city. Binoculars (10x50) are an excellent and affordable next step that reveal star clusters, the Andromeda Galaxy, and Jupiter\'s moons.',
                },
                {
                  q: 'What is the single best location for stargazing in Morocco?',
                  a: 'Erg Chigaga, reached from M\'hamid el Ghizlane, offers the darkest accessible skies (Bortle Class 1) due to its extreme remoteness. However, Erg Chebbi near Merzouga is more accessible and offers nearly as dark skies (Bortle 1-2) with better tourism infrastructure. For a first trip, Merzouga is the easier choice. For the purist seeking the darkest skies, Erg Chigaga is unmatched.',
                },
                {
                  q: 'When is the best time to see the Milky Way in Morocco?',
                  a: 'The Milky Way\'s galactic core is visible from April through October. In April-May, it rises in the predawn hours. By July-August, it is visible in the evening sky, arching overhead at its most dramatic. September-October offers the core visible at dusk before it sets. Always plan around the new Moon for the darkest possible sky.',
                },
                {
                  q: 'How cold does it get in the Sahara at night?',
                  a: 'Desert temperatures drop dramatically after sunset. In summer (June-August), nights are warm (25-30C). In spring and autumn, expect 10-18C. In winter (December-February), nights can drop to 0-5C, occasionally below freezing. Always bring more warm clothing than you think you need. Layering is essential.',
                },
                {
                  q: 'Can I do astrophotography with a smartphone?',
                  a: 'Modern smartphones (iPhone 15 Pro, Samsung Galaxy S24, Pixel 8) have night modes that can capture surprisingly good Milky Way photos when propped against a rock or placed on a small tripod. Results will not match a dedicated camera, but they are a great starting point. The key requirements are: a phone with manual/night mode, a mini tripod or stable surface, and a 15-30 second exposure.',
                },
                {
                  q: 'Are stargazing tours worth the cost?',
                  a: 'For most visitors, yes. A knowledgeable astronomer guide transforms the experience from passively looking up to actively understanding what you see. Guides provide telescopes, laser pointers for constellation identification, cultural context, and help with astrophotography setup. The cost of hiring a guide is typically less than renting equivalent telescope equipment.',
                },
                {
                  q: 'Is it safe to stargaze in the desert at night?',
                  a: 'With an organized tour or reputable camp, yes. Never wander alone in the desert at night, as dunes look identical and disorientation is a genuine danger. Stick close to your camp, follow your guide\'s instructions, and always tell someone where you are going. Wildlife encounters (scorpions, snakes) are rare but possible; wear closed shoes and use a red-light headlamp.',
                },
                {
                  q: 'How do I protect my camera gear from sand in the Sahara?',
                  a: 'Sand is the biggest threat to optical equipment. Keep lens caps on when not shooting. Store cameras in sealed dry bags or padded Ziploc bags. Never change lenses in the open; do it inside a tent or jacket. Carry a rocket blower (not canned air) to remove sand particles. A UV filter on your lens acts as a sacrificial barrier. After the trip, have your camera professionally cleaned.',
                },
              ].map((faq, i) => (
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
          RELATED PAGES / CTA
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-[var(--text-secondary)]">
              Discover more experiences that pair perfectly with a stargazing adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Sahara Desert Guide',
                description: 'Complete guide to Morocco\'s Sahara, from camel treks to luxury camps.',
                href: '/sahara-guide',
                icon: Sun,
              },
              {
                title: 'Photography Guide',
                description: 'Top 20 photo spots, gear tips, and golden hour timing across Morocco.',
                href: '/photography',
                icon: Camera,
              },
              {
                title: 'Atlas Mountains',
                description: 'Trekking, villages, and high-altitude experiences in the High Atlas.',
                href: '/mountains',
                icon: Mountain,
              },
              {
                title: 'Desert Tours',
                description: 'Guided desert experiences from day trips to multi-day expeditions.',
                href: '/tours',
                icon: Compass,
              },
            ].map((link) => (
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
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1920"
            alt="Brilliant star field above the Moroccan landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="container-morocco relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Star className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Your Window to the Cosmos Awaits
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              In a world where 80% of the population has never seen the Milky Way, Morocco
              remains one of the last places where the full majesty of the night sky is accessible.
              Plan your dark-sky journey and experience the universe as our ancestors did, in
              breathtaking, humbling clarity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent btn-lg rounded-full"
              >
                <Star className="w-5 h-5" />
                Plan Your Stargazing Trip
              </Link>
              <Link
                href="/desert"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                <Tent className="w-5 h-5" />
                Explore Desert Camps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Zellige divider */}
      <div className="zellige-border" />
    </>
  );
}

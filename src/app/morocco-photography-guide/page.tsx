import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Mountain,
  Globe,
  Landmark,
  Sun,
  Camera,
  Aperture,
  Eye,
  Image,
  Calendar,
  AlertTriangle,
  Compass,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Photography Guide 2026 | Best Photo Spots, Tips & Instagram Locations',
  description:
    'Complete Morocco photography guide with the best photo locations, Instagram spots, street photography tips, golden hour locations, drone rules, gear recommendations, and photography tours. Capture stunning images in Marrakech, Chefchaouen, Fez, Essaouira, and the Sahara Desert.',
  keywords: [
    'morocco photography',
    'best photos morocco',
    'instagram spots morocco',
    'morocco photography tips',
    'morocco photo locations',
    'photography tours morocco',
    'morocco golden hour photography',
    'chefchaouen photography',
    'marrakech photo spots',
    'sahara desert photography',
    'morocco street photography',
    'morocco landscape photography',
    'morocco drone rules',
    'fez photography locations',
    'essaouira photography',
    'morocco architecture photography',
    'morocco portrait photography',
    'best time photography morocco',
    'morocco camera gear',
    'morocco photography workshops',
  ],
  openGraph: {
    title: 'Morocco Photography Guide 2026 | Best Photo Spots, Tips & Instagram Locations',
    description:
      'Discover the best photography locations across Morocco. From the blue streets of Chefchaouen to Sahara sunrises, get expert tips for capturing stunning images.',
    url: `${BASE_URL}/morocco-photography-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-chefchaouen.webp`,
        width: 1200,
        height: 630,
        alt: 'Blue-washed streets of Chefchaouen Morocco with vibrant doorways and potted plants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Photography Guide 2026 | Best Photo Spots & Tips',
    description:
      'Complete guide to photographing Morocco. Best locations, golden hour spots, street photography etiquette, gear tips, drone rules, and photography tours.',
    images: [`${BASE_URL}/images/hero-chefchaouen.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-photography-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-photography-guide`,
  name: 'Morocco Photography Guide 2026 | Best Photo Spots, Tips & Instagram Locations',
  description:
    'Complete Morocco photography guide with the best photo locations, Instagram spots, street photography tips, golden hour locations, drone rules, gear recommendations, and photography tours.',
  url: `${BASE_URL}/morocco-photography-guide`,
  image: `${BASE_URL}/images/hero-chefchaouen.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-photography-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Photography Guide', item: `${BASE_URL}/morocco-photography-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need permission to photograph people in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you should always ask permission before photographing people in Morocco, especially women, children, and elderly people. Many Moroccans are happy to be photographed, but some prefer not to be. A polite "Mumkin sura?" (Can I take a photo?) goes a long way. In tourist areas, some people may expect a small tip of 5-20 MAD for posing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fly a drone in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drone use in Morocco is heavily restricted and technically requires authorization from the Moroccan Civil Aviation Authority (Direction Generale de l\'Aviation Civile). Many travelers have had drones confiscated at customs. Flying near military installations, royal palaces, government buildings, and airports is strictly prohibited. It is safest to leave your drone at home or apply for permits well in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to photograph Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) offer the best photography conditions. Spring brings wildflowers in the Atlas Mountains and pleasant temperatures. Autumn has golden light and harvest scenes. Winter is excellent for Sahara photography with clear skies, while summer brings harsh midday light but dramatic sunset colors on the coast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to carry expensive camera gear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for photographers, but use common sense in crowded medinas and souks. Use a cross-body camera strap, keep gear in a discreet bag rather than a branded camera backpack, and be aware of your surroundings. Avoid displaying expensive equipment unnecessarily. Consider travel insurance that covers camera gear.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I photograph mosques in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can photograph mosque exteriors freely, and Morocco has some of the most photogenic mosques in the world. However, non-Muslims cannot enter most mosques in Morocco (the Hassan II Mosque in Casablanca is a notable exception). Respect worshippers and avoid photographing people during prayer. Minarets, doorways, and geometric tilework make excellent architectural subjects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best Instagram spots in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top Instagram locations include the blue streets of Chefchaouen, Jardin Majorelle in Marrakech, the tanneries of Fez, Ait Benhaddou kasbah, Sahara Desert dunes at Erg Chebbi, Essaouira\'s harbor and ramparts, the Hassan II Mosque in Casablanca, and the colorful souks of Marrakech. For less crowded shots, visit early morning before 9 AM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do photography tours in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photography tours in Morocco range from 500 MAD for a half-day city walk with a local photographer to 15,000-25,000 MAD for multi-day guided photography expeditions covering the Sahara, Atlas Mountains, and imperial cities. Group workshops are from 2,000 MAD per day, while private one-on-one sessions start from 1,500 MAD per half-day. Seasonal pricing may apply.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST PHOTO SPOTS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const cityPhotoSpots = [
  {
    city: 'Marrakech',
    icon: Landmark,
    image: '/images/hero-marrakech.webp',
    description:
      'The Red City delivers sensory overload for photographers. From the chaos of Jemaa el-Fnaa square at sunset to the serene courtyards of centuries-old riads, Marrakech offers endless compositions. The interplay of light and shadow in narrow medina alleys creates dramatic frames throughout the day.',
    spots: [
      'Jemaa el-Fnaa at golden hour for food stalls and performers',
      'Ben Youssef Madrasa for intricate Islamic geometric patterns',
      'Jardin Majorelle for cobalt-blue walls and cactus gardens',
      'Bahia Palace for zellige tilework and painted cedarwood ceilings',
      'Medina rooftop terraces for panoramic sunset views',
    ],
    bestTime: 'Early morning (7-9 AM) before crowds, and golden hour (5-7 PM)',
  },
  {
    city: 'Chefchaouen',
    icon: Image,
    image: '/images/hero-chefchaouen.webp',
    description:
      'Morocco\'s most photographed city is a dream of blue-washed walls, vibrant doorways, and cascading flower pots. Every corner reveals a new composition. The blue medina is compact and walkable, but the real magic lies in getting lost in the quieter residential streets away from the main tourist alleys.',
    spots: [
      'Plaza Uta el-Hammam for the blue medina\'s central square',
      'Ras el-Maa waterfall area for locals washing clothes in blue surroundings',
      'The Spanish Mosque hilltop for a sweeping panorama at sunset',
      'Residential side streets for authentic door and window compositions',
      'Akchour Waterfalls for nature photography outside town',
    ],
    bestTime: 'Sunrise (6-8 AM) for empty streets, or late afternoon for warm light on blue walls',
  },
  {
    city: 'Fez',
    icon: Building,
    image: '/images/hero-fes.webp',
    description:
      'The world\'s largest car-free urban zone is a labyrinthine photographer\'s paradise. Fez el-Bali is raw, authentic, and visually overwhelming. Shafts of light pierce narrow covered passages, donkeys carry goods through medieval streets, and artisans practice trades unchanged for centuries.',
    spots: [
      'Chouara Tanneries from surrounding terrace viewpoints',
      'Bou Inania Madrasa for sublime carved stucco and cedarwood',
      'Nejjarine Fountain and Museum for traditional woodworking crafts',
      'Bab Boujloud (Blue Gate) for the iconic entrance to the medina',
      'Metalwork and dye souks for vibrant color and artisan portraits',
    ],
    bestTime: 'Mid-morning (9-11 AM) when light enters the medina alleys, tanneries best at midday',
  },
  {
    city: 'Essaouira',
    icon: Compass,
    image: '/images/hero-essaouira.webp',
    description:
      'This windswept Atlantic port city offers a completely different palette: whitewashed walls with blue shutters, weathered fishing boats, swooping seagulls, and dramatic coastal light. The golden hour along the ramparts and harbor is legendary among photographers.',
    spots: [
      'Skala de la Ville ramparts for sunset over the Atlantic',
      'Harbor with blue fishing boats and seagull-covered walls',
      'Medina doorways with distinctive blue-and-white color scheme',
      'Beach at low tide for reflections and kite-surfer silhouettes',
      'Thuya wood workshops for artisan documentary photography',
    ],
    bestTime: 'Late afternoon (4-6 PM) for golden light on the ramparts and harbor',
  },
  {
    city: 'Merzouga & Sahara',
    icon: Sun,
    image: '/images/hero-sahara.webp',
    description:
      'The Erg Chebbi dunes near Merzouga are Morocco\'s ultimate landscape photography destination. Towering sand dunes reaching 150 meters shift color from gold to orange to deep red as the sun traverses the sky. Camel caravans, starlit skies, and vast emptiness create images of timeless beauty.',
    spots: [
      'Erg Chebbi dune crests for sunrise silhouettes and shadow patterns',
      'Camel caravan trails for classic Sahara compositions',
      'Desert camps at night for astrophotography and Milky Way shots',
      'Nomad encampments for portraits and cultural documentary work',
      'Dried lake beds (dayas) after rare rain for mirror reflections',
    ],
    bestTime: 'Sunrise (5:30-7 AM) and sunset (6-7:30 PM) for dramatic dune shadows',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLDEN HOUR & BLUE HOUR LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const goldenHourSpots = [
  {
    location: 'Ait Benhaddou Kasbah',
    type: 'Golden Hour',
    icon: Sun,
    description: 'The UNESCO-listed kasbah glows amber and gold as the setting sun hits the rammed-earth walls. Shoot from across the river for the classic reflection shot, or climb to the top for 360-degree views across the valley.',
    timing: 'Sunset, facing west from the opposite riverbank',
  },
  {
    location: 'Todra Gorge',
    type: 'Golden Hour',
    icon: Mountain,
    description: 'The narrow gorge with 300-meter limestone walls catches golden light for just a brief window. The warm tones bouncing between canyon walls create a natural studio of reflected light.',
    timing: 'Late afternoon when sunlight penetrates the gorge floor',
  },
  {
    location: 'Hassan II Mosque, Casablanca',
    type: 'Blue Hour',
    icon: Landmark,
    description: 'Morocco\'s most impressive mosque is stunning at blue hour when the minaret is illuminated against a deep blue sky. The oceanfront setting adds dramatic waves and reflections to the composition.',
    timing: '20-40 minutes after sunset for perfect blue-hour balance',
  },
  {
    location: 'Chefchaouen Spanish Mosque',
    type: 'Golden Hour',
    icon: Sun,
    description: 'The hilltop above Chefchaouen provides an unobstructed view of the blue medina nestled in the Rif Mountains. The blue walls take on purple and lavender tones as the golden light deepens.',
    timing: 'Sunset, arrive 45 minutes early to secure a good spot',
  },
  {
    location: 'Ouarzazate Valley',
    type: 'Golden Hour',
    icon: Sun,
    description: 'The "Door of the Desert" offers vast landscapes of kasbahs, palm oases, and the distant Atlas Mountains bathed in warm evening light. The Draa Valley road is one of Morocco\'s most scenic drives.',
    timing: 'Both sunrise and sunset for different perspectives on kasbahs',
  },
  {
    location: 'Essaouira Ramparts',
    type: 'Blue Hour',
    icon: Landmark,
    description: 'The 18th-century fortifications overlooking the Atlantic provide dramatic silhouettes of cannons and arched openings during blue hour. Crashing waves add motion and energy to long exposures.',
    timing: '30 minutes after sunset for deep blue skies and city lights',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY GENRES & TIPS
   ═══════════════════════════════════════════════════════════════ */

const photographyGenres = [
  {
    genre: 'Street Photography',
    icon: Users,
    tips: [
      'Learn basic Arabic greetings: "Salam" (hello) and "Mumkin sura?" (Can I take a photo?) open doors',
      'Shoot with a 35mm or 50mm equivalent for natural-looking perspective without intimidating subjects',
      'Medina markets are best in the morning when vendors set up stalls and light streams through gaps',
      'Respect "no photo" signals immediately and move on without argument',
      'Carry small bills (5-20 MAD) as tips for people who pose for you',
      'Zone focusing technique helps capture candid moments in fast-moving medina crowds',
    ],
  },
  {
    genre: 'Landscape Photography',
    icon: Mountain,
    tips: [
      'The Sahara Desert, Atlas Mountains, Dades Gorge, and Atlantic coast offer four distinct landscape types',
      'Bring a polarizing filter to cut haze in mountain scenes and deepen blue skies',
      'Sand dunes photograph best with side lighting that emphasizes texture and ripple patterns',
      'Atlas Mountain passes like Tizi n\'Tichka (2,260m) provide sweeping panoramic opportunities',
      'Coastal locations like Legzira Beach feature natural rock arches that frame sunset compositions',
      'Include human figures for scale in vast desert and mountain landscapes',
    ],
  },
  {
    genre: 'Architecture Photography',
    icon: Building,
    tips: [
      'Morocco\'s Islamic geometric patterns are endlessly photogenic: zellige tilework, carved stucco, cedarwood',
      'Riad courtyards provide symmetrical compositions with central fountains and tiled floors',
      'Photograph ornate doors and windows as standalone subjects: each is unique',
      'Use a wide-angle lens (16-24mm) for kasbah and mosque exteriors, avoiding converging verticals',
      'Medersas (Islamic schools) like Ben Youssef in Marrakech are open to visitors and incredibly detailed',
      'Overcast days actually work well for architecture, eliminating harsh shadows on detailed surfaces',
    ],
  },
  {
    genre: 'Portrait Photography',
    icon: Heart,
    tips: [
      'Always ask permission before photographing people, especially women, children, and the elderly',
      'Building rapport first leads to more natural, relaxed portraits: buy something, have tea, chat',
      'Use a short telephoto (85-135mm) for flattering compression without being intrusive',
      'Artisans at work, such as tanners, weavers, and metalworkers, make compelling documentary subjects',
      'Show subjects their photo on your camera screen as a gesture of respect and connection',
      'Consider carrying a portable printer to gift instant prints, which is especially appreciated in rural areas',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GEAR RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const gearRecommendations = [
  {
    category: 'Camera Bodies',
    icon: Camera,
    items: [
      'Mirrorless (Sony A7, Canon R6, Nikon Z6): lightweight, excellent autofocus, great in low-light medina alleys',
      'APS-C / Micro Four Thirds: lighter option for travel, still excellent image quality',
      'High-quality smartphone: modern phones with computational photography can produce stunning results',
      'Action camera (GoPro): useful for medina walk-throughs, water sports in Essaouira, and camel rides',
    ],
  },
  {
    category: 'Lenses',
    icon: Aperture,
    items: [
      'Wide-angle zoom (16-35mm): essential for architecture, interiors, landscapes, and narrow medina streets',
      'Standard zoom (24-70mm): versatile workhorse covering most situations',
      'Short telephoto (70-200mm or 85mm prime): portraits, details, and compressed landscape perspectives',
      'Fast prime (35mm f/1.8 or 50mm f/1.8): low-light capability for dim medina passages and evening scenes',
    ],
  },
  {
    category: 'Essential Accessories',
    icon: CheckCircle,
    items: [
      'Polarizing filter: reduces glare, deepens skies, essential for desert and mountain photography',
      'ND filter: enables long exposures of ocean waves and waterfall motion',
      'Lightweight travel tripod: critical for blue hour, night sky, and long-exposure compositions',
      'Sensor cleaning kit: Sahara sand and medina dust will find their way into your gear',
      'Extra batteries and memory cards: charging opportunities can be limited in remote desert camps',
      'Rain cover or plastic bags: unexpected showers happen, especially in the Rif Mountains',
    ],
  },
  {
    category: 'Protection & Carrying',
    icon: ShieldCheck,
    items: [
      'Discreet camera bag rather than branded photo backpack to avoid attracting attention',
      'Padded camera insert for a regular daypack works well for blending in',
      'Lens cleaning cloths: dust is constant, especially in the Sahara and on windy coastal days',
      'Silica gel packets: protect gear from humidity in coastal cities like Essaouira',
      'Cross-body camera strap: more secure than a neck strap in crowded medina streets',
      'Travel insurance covering camera equipment: essential for expensive setups',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TOURS & WORKSHOPS
   ═══════════════════════════════════════════════════════════════ */

const photographyTours = [
  {
    name: 'Marrakech Medina Photo Walk',
    duration: 'Half-day (4 hours)',
    icon: Camera,
    description: 'Guided walk through the medina with a professional photographer. Cover Jemaa el-Fnaa, souks, Ben Youssef, and hidden alleys. Small groups of 4-6 people ensure personal attention and insider access.',
    price: 'From 500 MAD per person',
    includes: 'Local guide, photography instruction, edited highlights',
  },
  {
    name: 'Sahara Desert Photography Expedition',
    duration: '3 days / 2 nights',
    icon: Sun,
    description: 'Multi-day trip from Marrakech through the Atlas Mountains and Dades Valley to Erg Chebbi. Camp under the stars, photograph sunrise over the dunes, and capture camel caravans. Designed around optimal light conditions.',
    price: 'From 4,500 MAD per person',
    includes: 'Transport, desert camp, meals, camel trek, photography guidance',
  },
  {
    name: 'Fez Artisan & Street Photography Workshop',
    duration: 'Full day (8 hours)',
    icon: Aperture,
    description: 'Immersive workshop in the Fez medina focusing on street photography techniques, artisan portraits, and architectural detail. Includes access to tannery viewpoints and private workshops.',
    price: 'From 1,200 MAD per person',
    includes: 'Guide, tannery access, workshop visits, light editing session',
  },
  {
    name: 'Chefchaouen Blue City Photo Tour',
    duration: 'Full day (7 hours)',
    icon: Image,
    description: 'Early morning start to capture empty blue streets at sunrise, followed by portrait sessions with locals and a hike to the Spanish Mosque for panoramic shots. Afternoon covers hidden residential quarters.',
    price: 'From 800 MAD per person',
    includes: 'Local guide, sunrise access, Spanish Mosque hike, composition coaching',
  },
  {
    name: 'Complete Morocco Photography Tour',
    duration: '10 days',
    icon: Globe,
    description: 'Comprehensive photography journey covering Marrakech, Atlas Mountains, Sahara Desert, Fez, Chefchaouen, and Essaouira. Led by professional photographers with daily critiques and editing sessions.',
    price: 'From 25,000 MAD per person',
    includes: 'All transport, accommodation, meals, instruction, post-trip editing workshop',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME OF YEAR
   ═══════════════════════════════════════════════════════════════ */

const bestSeasons = [
  {
    season: 'Spring (March - May)',
    icon: Sparkles,
    quality: 'Excellent',
    description: 'Wildflowers in the Atlas, pleasant temperatures everywhere, almond and cherry blossoms. Green landscapes contrast beautifully with earth-toned kasbahs. Occasional rain adds dramatic skies.',
    bestFor: 'Landscapes, mountain villages, wildflower fields, waterfalls at peak flow',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    quality: 'Good (with planning)',
    description: 'Intense midday heat limits shooting hours inland. Coastal cities like Essaouira stay pleasant. Dramatic sunset colors and long golden hours. Sahara is extremely hot but uncrowded.',
    bestFor: 'Coastal scenes, early morning/late evening shooting, Essaouira, Sahara stargazing',
  },
  {
    season: 'Autumn (September - November)',
    icon: Award,
    quality: 'Excellent',
    description: 'Golden light, harvest scenes, date palms laden with fruit. Comfortable temperatures for all-day shooting. Clear Sahara skies perfect for astrophotography. Fewer tourists than spring.',
    bestFor: 'Desert photography, harvest scenes, astrophotography, comfortable all-day shooting',
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    quality: 'Very Good',
    description: 'Snow-capped Atlas peaks, crisp clear air, dramatic cloud formations. Sahara temperatures are perfect for photography. Low tourist season means emptier landmarks. Short days limit shooting hours.',
    bestFor: 'Snow-capped mountains, Sahara at comfortable temps, moody medina scenes, empty landmarks',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPhotographyGuidePage() {
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-chefchaouen.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Photography Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Camera className="w-4 h-4" />
            Photography &amp; Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Photography Guide:
            <br className="hidden md:block" /> Best Photo Spots &amp; Tips
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the blue streets of Chefchaouen to Sahara sunrises, discover how to capture
            Morocco&apos;s most stunning images. Expert tips, top locations, and cultural etiquette.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Photographer&apos;s Dream
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most photogenic countries on Earth. Within a single trip,
                you can photograph towering Sahara sand dunes at sunrise, wander blue-washed
                medina streets, capture centuries-old Islamic architecture, and frame snow-capped
                Atlas Mountain peaks against clear African skies. The diversity of landscapes,
                cultures, colors, and light conditions make Morocco a destination that photographers
                return to again and again.
              </p>
              <p>
                What sets Morocco apart from other photographic destinations is the sheer density
                of visual opportunities. Every medina alley reveals a new doorway, every souk
                stall overflows with color, and every sunset transforms familiar landmarks into
                something extraordinary. Whether you shoot with a professional mirrorless setup
                or a smartphone, Morocco delivers images that stop people mid-scroll.
              </p>
              <p>
                This guide covers the best photo locations across Morocco, practical tips for
                every genre from street photography to astrophotography, cultural etiquette for
                photographing people, gear recommendations, drone regulations, and curated
                photography tours to help you capture the very best of this extraordinary country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Photo Spots by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Photo Spots by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s most photogenic cities, each offering a distinct visual character and unique opportunities for stunning images.
          </p>

          <div className="space-y-8">
            {cityPhotoSpots.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={city.image}
                        alt={`Photography in ${city.city} Morocco showing iconic photo locations and scenery`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <CityIcon className="w-5 h-5 text-white" />
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                          {city.city}
                        </h3>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        Top Photo Spots:
                      </h4>
                      <div className="space-y-2 mb-4">
                        {city.spots.map((spot, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <Camera className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                            {spot}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[var(--color-gold)] font-semibold">
                        <Clock className="w-3 h-3" />
                        <span>{city.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Golden Hour & Blue Hour Locations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Golden Hour &amp; Blue Hour Locations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The magic hours around sunrise and sunset transform Morocco&apos;s landscapes into pure photographic gold.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldenHourSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.location} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpotIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spot.location}
                      </h3>
                      <span className="text-xs font-semibold text-[var(--color-gold)]">{spot.type}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">{spot.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                    <span>{spot.timing}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography Genres & Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Aperture className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tips by Genre
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco rewards every type of photography. Here are expert tips for the most popular genres.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photographyGenres.map((genre) => {
              const GenreIcon = genre.icon;
              return (
                <div key={genre.genre} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GenreIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {genre.genre}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {genre.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gear Recommendations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gear Recommendations for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to pack for photographing Morocco, from camera bodies to essential accessories for dusty medinas and sandy deserts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gearRecommendations.map((gear) => {
              const GearIcon = gear.icon;
              return (
                <div key={gear.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GearIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {gear.category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {gear.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography Tours & Workshops ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tours &amp; Workshops
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Guided experiences designed to help you capture the best of Morocco with expert instruction and insider access.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices and may vary by season, group size, and operator. Always confirm current rates.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {photographyTours.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TourIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {tour.name}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded shrink-0 ml-2">
                          {tour.price}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mb-3">{tour.duration}</p>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{tour.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                        <span><strong>Includes:</strong> {tour.includes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Instagram vs Reality ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Instagram vs Reality: Managing Expectations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Those perfectly empty blue streets and untouched dune ridges take planning. Here is what to actually expect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Image,
                title: 'Chefchaouen\'s Blue Streets',
                reality: 'The famous blue alleys are beautiful but busy from 10 AM to 5 PM with tourists and selfie-seekers. For empty streets like you see on Instagram, arrive at sunrise (6-7 AM) or shoot during lunch hour when most visitors are in restaurants. The quieter residential streets away from the main plaza are less crowded all day.',
              },
              {
                icon: Sun,
                title: 'Sahara "Untouched" Dunes',
                reality: 'Erg Chebbi is shared by many desert camps and camel tours. For pristine dune photos without footprints, hike 20-30 minutes away from camp at sunrise. Wind often smooths the sand overnight, giving you a brief window. The less-visited Erg Chigaga near M\'hamid offers more solitude.',
              },
              {
                icon: Building,
                title: 'Fez Tanneries',
                reality: 'The famous Chouara Tannery viewpoints are controlled by shop owners who will guide you upstairs and expect you to browse leather goods. The view is genuine but the experience is commercial. A tip of 10-20 MAD is expected. The tannery smells strongly, and they offer mint sprigs to hold under your nose.',
              },
              {
                icon: Landmark,
                title: 'Jardin Majorelle',
                reality: 'One of Morocco\'s most Instagrammed spots gets extremely crowded by mid-morning. Arrive right at opening (8 AM) for the best chance at unobstructed shots of the iconic cobalt-blue villa. The cactus garden area is usually less crowded than the main building.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reality}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time of Year for Photography ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time of Year for Photography
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every season brings different photographic opportunities across Morocco&apos;s diverse landscapes.
          </p>

          <div className="space-y-6">
            {bestSeasons.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {season.season}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2 py-0.5 rounded">
                          {season.quality}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <Camera className="w-3 h-3 text-[var(--color-accent)]" />
                        <span><strong>Best for:</strong> {season.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Drone Rules in Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Drone Rules in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Important regulations every aerial photographer must know before flying in Morocco.
          </p>

          <div className="card-moroccan p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Heavily Restricted: Apply for Permits in Advance
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Drone use in Morocco requires prior authorization from the Direction Generale de
                  l&apos;Aviation Civile (DGAC). Flying without a permit is illegal and can result in
                  confiscation of your drone, fines, and potential legal trouble. Many travelers have
                  had drones confiscated at airport customs upon arrival.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: 'Permit Required', text: 'All drone flights require authorization from Morocco\'s civil aviation authority (DGAC). Applications should be submitted weeks in advance with details of planned flight areas and equipment specifications.' },
              { icon: AlertTriangle, title: 'No-Fly Zones', text: 'Military installations, royal palaces, government buildings, airports, mosques, and crowded areas are strictly off-limits. Many of Morocco\'s most photogenic locations fall near restricted zones.' },
              { icon: Eye, title: 'Customs Checks', text: 'Drones are frequently confiscated at Moroccan airports. If bringing a drone, carry your DGAC authorization letter. Some travelers have successfully entered with small consumer drones, but this is not guaranteed.' },
              { icon: Gem, title: 'Alternatives', text: 'Consider hiring a licensed local drone operator who already has permits. Some photography tour operators include drone footage. Elevated viewpoints and hilltop vantage points can achieve similar perspectives without the legal risk.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco Through the Lens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-marrakech.webp', alt: 'Vibrant Jemaa el-Fnaa square in Marrakech at golden hour with food stalls and bustling crowds', label: 'Marrakech at Golden Hour' },
              { src: '/images/hero-sahara.webp', alt: 'Sunrise over the golden sand dunes of Erg Chebbi in the Moroccan Sahara Desert', label: 'Sahara Desert Sunrise' },
              { src: '/images/hero-chefchaouen.webp', alt: 'Blue-washed narrow street in Chefchaouen medina with colorful potted plants and doorways', label: 'Chefchaouen Blue Medina' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need permission to photograph people in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, always ask permission before photographing people, especially women, children, and the elderly.
                A polite &quot;Mumkin sura?&quot; (Can I take a photo?) is appreciated. Many Moroccans are happy to pose,
                but respect anyone who declines. In tourist areas, some people may expect a small tip of 5-20 MAD for posing.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I fly a drone in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Drone use in Morocco is heavily restricted and requires authorization from the Direction Generale
                de l&apos;Aviation Civile (DGAC). Many travelers have had drones confiscated at customs. Flying near
                military installations, royal palaces, and government buildings is strictly prohibited. Apply for
                permits well in advance or consider hiring a licensed local operator.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year to photograph Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March-May) and autumn (September-November) offer the best conditions. Spring brings
                wildflowers and pleasant temperatures, while autumn has golden light and harvest scenes. Winter
                is excellent for the Sahara with clear skies and comfortable temperatures. Summer is best limited
                to coastal cities like Essaouira.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to carry expensive camera gear in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is generally safe for photographers. Use a cross-body camera strap, keep gear in a
                discreet bag rather than a branded camera backpack, and be aware of your surroundings in crowded
                medinas. Avoid displaying expensive equipment unnecessarily. Consider travel insurance that
                specifically covers camera equipment.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I photograph mosques in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                You can freely photograph mosque exteriors, and Morocco has some of the most photogenic mosques
                in the world. However, non-Muslims cannot enter most mosques (the Hassan II Mosque in Casablanca
                is a notable exception). Respect worshippers and avoid photographing people during prayer. Minarets,
                doorways, and geometric tilework make excellent architectural subjects.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best Instagram spots in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Top Instagram locations include the blue streets of Chefchaouen, Jardin Majorelle in Marrakech,
                the Chouara Tanneries of Fez, Ait Benhaddou kasbah, Sahara Desert dunes at Erg Chebbi,
                Essaouira&apos;s harbor and ramparts, the Hassan II Mosque in Casablanca, and the colorful souks of
                Marrakech. For less crowded shots, visit early morning before 9 AM.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much do photography tours in Morocco cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Photography tours range from 500 MAD for a half-day city walk to from 25,000 MAD for a multi-day
                guided expedition. Group workshops are from 2,000 MAD per day, while private sessions start from
                1,500 MAD per half-day. Prices vary by season, group size, and operator. Always confirm current
                rates before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Understand the customs, etiquette, and cultural context that will make your photographs more meaningful.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-desert" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Plan your desert expedition including the best camps, camel treks, and stargazing experiences.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Amazigh heritage, traditional crafts, mountain villages, and ethical tourism practices.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore hiking trails, mountain passes, and dramatic landscapes across the High Atlas ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Capture Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the blue medinas of the north to the golden Sahara dunes, Morocco offers
            a lifetime of photographic inspiration. Start planning your photography adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-sahara-desert"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Sun className="w-5 h-5" />
              Explore the Sahara Desert
            </Link>
            <Link
              href="/chefchaouen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Camera className="w-5 h-5" />
              Discover Chefchaouen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

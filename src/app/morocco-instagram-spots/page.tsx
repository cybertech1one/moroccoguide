import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Camera,
  ArrowRight,
  MapPin,
  Sun,
  Clock,
  Star,
  CheckCircle,
  Shield,
  AlertTriangle,
  Globe,
  Eye,
  Smartphone,
  Lightbulb,
  Mountain,
  Compass,
  Users,
  Info,
  Sparkles,
  Sunrise,
  Image,
  Heart,
  BookOpen,
  Layers,
  CircleAlert,
  Hash,
  Share2,
  Aperture,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Instagram Spots 2026 | 25+ Most Instagrammable Places',
  description:
    'Discover the most Instagrammable places in Morocco for 2026. Blue streets of Chefchaouen, Jardin Majorelle, Sahara dunes, Fes tanneries, Ait Ben Haddou & more. Best times, photography tips, drone rules, captions & hashtags for stunning Morocco photos.',
  keywords: [
    'Morocco Instagram spots',
    'most Instagrammable places Morocco',
    'Morocco photo locations',
    'best photos Morocco',
    'Chefchaouen Instagram',
    'Jardin Majorelle photos',
    'Sahara desert Instagram',
    'Fes tanneries photography',
    'Ait Ben Haddou photos',
    'Morocco photography locations',
    'Instagram Morocco 2026',
    'Morocco travel photography',
    'Morocco selfie spots',
    'Morocco aesthetic',
    'Morocco blue city photos',
    'Marrakech Instagram spots',
    'Morocco content creator',
    'Morocco influencer spots',
    'best Morocco photos',
    'Morocco photo guide',
  ],
  openGraph: {
    title: 'Morocco Instagram Spots 2026 | 25+ Most Instagrammable Places',
    description:
      'The ultimate guide to Instagrammable locations across Morocco. Blue streets, desert dunes, ancient kasbahs, colorful souks, and hidden gems with timing tips and hashtag recommendations.',
    url: `${BASE_URL}/morocco-instagram-spots`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-photography.webp`,
        width: 1200,
        height: 630,
        alt: 'Blue streets of Chefchaouen Morocco - one of the most Instagrammable places in the world',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Instagram Spots | 25+ Most Instagrammable Places 2026',
    description:
      'Blue streets, desert dunes, ancient kasbahs & colorful souks. The ultimate Morocco Instagram guide with timing tips, captions & hashtags.',
    images: [`${BASE_URL}/images/hero-morocco-photography.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-instagram-spots` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-instagram-spots`,
  name: 'Morocco Instagram Spots 2026 | 25+ Most Instagrammable Places',
  description:
    'Comprehensive guide to the most Instagrammable places in Morocco covering 25+ photo locations across Chefchaouen, Marrakech, Fes, Sahara, Essaouira, and beyond with best times, photography tips, drone rules, caption ideas, and hashtag recommendations.',
  url: `${BASE_URL}/morocco-instagram-spots`,
  image: `${BASE_URL}/images/hero-morocco-photography.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-instagram-spots`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Instagram Spots', item: `${BASE_URL}/morocco-instagram-spots` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most Instagrammable places in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most Instagrammable places in Morocco include the blue streets of Chefchaouen, Jardin Majorelle in Marrakech, the Chouara tanneries in Fes, Erg Chebbi sand dunes in the Sahara, Ait Ben Haddou kasbah near Ouarzazate, Hassan II Mosque in Casablanca, the Essaouira ramparts, Bahia Palace, the souks of Marrakech, and the Ouzoud Waterfalls. Each location offers unique colors, textures, and backdrops that make for stunning photos.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of day for Instagram photos in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The golden hours around sunrise (6:00-7:30 AM) and sunset (5:00-7:00 PM depending on season) provide the best light for Instagram photos in Morocco. Early morning is ideal for empty streets in medinas and soft light. In Chefchaouen, the blue walls glow most vibrantly in the morning. For the Sahara, sunrise from a dune top is unmissable. Midday works well for overhead shots of colorful souks and the blue streets of Chefchaouen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fly a drone for Instagram content in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drone use in Morocco is heavily restricted. You need prior authorization from the Direction Generale de l\'Aviation Civile (DGAC), and approval is not guaranteed. Many tourists have had drones confiscated at customs. Drones are prohibited near airports, military sites, royal palaces, mosques, and crowded areas. Apply for permits at least 4-6 weeks in advance. Consider hiring a licensed local drone operator if you need aerial footage for content.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hashtags should I use for Morocco Instagram posts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular Morocco hashtags include #Morocco, #Maroc, #VisitMorocco, #MoroccoTravel, #Chefchaouen, #Marrakech, #Sahara, #MoroccanVibes, #BlueCity, and #MoroccoDreams. Use a mix of broad hashtags (1M+ posts) and niche ones (under 100K) for best reach. Location-specific tags like #ChefchaouenBlue, #JardinMajorelle, and #MerzougaDesert help target engaged audiences. Combine 20-25 hashtags per post for optimal visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need permission to photograph people for Instagram in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always ask permission before photographing people in Morocco. A simple gesture toward your camera and a smile is usually enough. Some people will gladly pose, others may request a small tip of from 5-10 MAD, and some will decline. Never photograph women without explicit consent. Avoid photographing children without parental permission. Showing people your photos afterward creates goodwill and often leads to better, more authentic images.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need to visit all the top Instagram spots in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To cover the major Instagram spots across Morocco, plan at least 10-14 days. A suggested route: 2-3 days in Marrakech (Jardin Majorelle, Bahia Palace, souks), 2 days in the Sahara (Erg Chebbi dunes, camel treks), 1 day at Ait Ben Haddou, 2-3 days in Fes (tanneries, medina), 2 days in Chefchaouen (blue streets), and 1-2 days in Essaouira. Add extra days for Casablanca or the Atlas Mountains if time allows.',
      },
    },
    {
      '@type': 'Question',
      name: 'What camera or phone is best for Morocco Instagram photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern smartphones like iPhone 15/16 Pro or Samsung Galaxy S24/S25 Ultra produce excellent Morocco Instagram photos. Their wide-angle lenses capture narrow medina alleys perfectly, night mode handles low-light souks well, and portrait mode creates beautiful bokeh. If using a camera, a mirrorless body with a 24-70mm zoom covers most situations. Bring a lightweight tripod for golden hour and long-exposure shots. A polarizing filter helps with blue skies and reduces glare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any photography restrictions at Moroccan tourist sites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most tourist sites in Morocco allow photography, but there are exceptions. Non-Muslims cannot enter most mosques (Hassan II Mosque in Casablanca is a notable exception that offers guided tours with photography). Military sites, police stations, government buildings, and royal palaces must never be photographed. Some museums and galleries restrict flash photography or tripods. In the Fes tanneries, photography from terrace viewpoints is free but leather shop owners may expect you to browse their goods.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: INSTAGRAM SPOTS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const instagramSpotsByCity = [
  {
    city: 'Chefchaouen',
    icon: Layers,
    color: 'sky',
    tagline: 'The Blue Pearl of Morocco',
    spots: [
      { name: 'Blue-painted stairway streets', bestTime: 'Early morning (7-8 AM) for empty streets and soft light', tip: 'The stepped alleys with potted plants and cats are the most iconic shots. Look for east-facing walls that catch the morning sun.' },
      { name: 'Plaza Uta el-Hammam', bestTime: 'Golden hour for warm tones on the kasbah walls', tip: 'Photograph from cafe terraces above for the classic overview. The Grand Mosque minaret frames beautifully against the mountains.' },
      { name: 'Spanish Mosque viewpoint', bestTime: 'Sunset for panoramic golden light over the blue city', tip: 'A 20-minute uphill hike rewards you with the best aerial view of Chefchaouen against the Rif Mountains. Bring a tripod.' },
      { name: 'Ras el-Maa waterfall', bestTime: 'Late morning when locals wash colorful textiles', tip: 'The cascade at the edge of the medina with Berber women washing carpets creates authentic cultural content with mountain backdrop.' },
      { name: 'Blue doorways and alleys', bestTime: 'Midday when overhead sun illuminates the blue walls evenly', tip: 'Every corner offers a new composition. Blue doors with brass knockers, hanging flower pots, and colorful rugs draped over walls are signature shots.' },
    ],
  },
  {
    city: 'Marrakech',
    icon: Star,
    color: 'amber',
    tagline: 'The Red City of Contrasts',
    spots: [
      { name: 'Jardin Majorelle', bestTime: 'Arrive at opening (8 AM) before crowds; entry from 70 MAD', tip: 'The cobalt blue villa against lush green cacti is the most shared Marrakech image. The yellow accents and bougainvillea provide perfect color contrast.' },
      { name: 'Bahia Palace', bestTime: 'Late afternoon when light filters through carved windows', tip: 'The zellige tilework courtyards and painted cedar ceilings are a content goldmine. Shoot from low angles to capture ceiling details.' },
      { name: 'Ben Youssef Madrasa', bestTime: 'Mid-morning for even light in the central courtyard', tip: 'The geometric Islamic patterns and carved stucco create stunning symmetrical compositions. Stand in the center for a perfectly balanced shot.' },
      { name: 'Jemaa el-Fna at sunset', bestTime: 'Sunset from a rooftop restaurant overlooking the square', tip: 'Smoke rising from food stalls, snake charmers, and acrobats create dynamic content. Cafe de France and Nomad offer the best vantage points.' },
      { name: 'Souk Semmarine', bestTime: 'Mid-morning (10-11 AM) when light shafts pierce the covered market', tip: 'Colorful spice pyramids, hanging lanterns, leather bags, and woven baskets. Shoot from a distance to capture the layered depth of the souk.' },
    ],
  },
  {
    city: 'Fes',
    icon: Eye,
    color: 'blue',
    tagline: 'The Ancient Medina Labyrinth',
    spots: [
      { name: 'Chouara Tannery', bestTime: 'Morning (9-11 AM) when the colorful dye vats are freshly filled', tip: 'View from leather shop terraces above for free. The circular stone vats filled with vivid dyes create one of Morocco&apos;s most iconic images.' },
      { name: 'Bab Bou Jeloud (Blue Gate)', bestTime: 'Golden hour from the plaza side for warm light on blue tiles', tip: 'The ornate blue-tiled gateway is the entrance to the Fes medina. Photograph people walking through for scale and life.' },
      { name: 'Bou Inania Madrasa', bestTime: 'Late morning when sunlight reaches the courtyard floor', tip: 'Masterpiece of Marinid architecture with zellige, carved stucco, and cedar woodwork. Entry from 20 MAD. Look up for ceiling details.' },
      { name: 'Borj Nord viewpoint', bestTime: 'Sunrise or sunset for panoramic views over the medina', tip: 'The hilltop fortress offers the widest view of the Fes medina spread below. Use a telephoto lens to compress the layers of rooftops and minarets.' },
    ],
  },
  {
    city: 'Sahara Desert',
    icon: Sun,
    color: 'orange',
    tagline: 'Endless Dunes and Starlit Skies',
    spots: [
      { name: 'Erg Chebbi dune sunrise', bestTime: 'Pre-dawn (wake at 5 AM) and climb a tall dune facing east', tip: 'The shifting colors from deep blue to gold across the 150-meter dunes near Merzouga are unforgettable. Footprints in virgin sand add texture.' },
      { name: 'Camel caravan silhouettes', bestTime: 'Late afternoon (4-5 PM) as caravans cross the dunes', tip: 'Use a telephoto lens to compress the silhouettes against the setting sun. The shadows stretching across the sand add drama.' },
      { name: 'Desert camp starscape', bestTime: 'New moon period for darkest skies; Milky Way visible March-October', tip: 'Zero light pollution makes the Sahara a paradise for astrophotography. Use a tripod and 20-30 second exposure for star trails.' },
      { name: 'Ait Ben Haddou kasbah', bestTime: 'Early morning for soft light on the mud-brick fortification', tip: 'The UNESCO World Heritage site near Ouarzazate was used in Gladiator and Game of Thrones. Cross the river for the classic reflection shot.' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Compass,
    color: 'teal',
    tagline: 'The Windy Coastal Gem',
    spots: [
      { name: 'Ramparts at sunset', bestTime: 'Golden hour when the fortifications glow warm orange', tip: 'The 18th-century Portuguese walls with bronze cannons and crashing Atlantic waves below. One of the most dramatic coastal shots in Morocco.' },
      { name: 'Fishing port blue boats', bestTime: 'Early morning (7-8 AM) when fishermen unload the catch', tip: 'Rows of blue wooden boats, seagulls, and mending nets create authentic maritime content. The colors pop against the white city walls.' },
      { name: 'Skala de la Ville', bestTime: 'Late afternoon for warm side-light on the cannon row', tip: 'The sea wall with bronze cannons and views to Mogador Island. Dramatic during winter storms when waves crash over the ramparts.' },
    ],
  },
  {
    city: 'Casablanca & Beyond',
    icon: Globe,
    color: 'emerald',
    tagline: 'Hidden Gems Beyond the Classics',
    spots: [
      { name: 'Hassan II Mosque', bestTime: 'Sunset for the minaret silhouette against the Atlantic sky', tip: 'The largest mosque in Africa sits on the ocean. The esplanade provides the best angle. Guided interior tours allow photography inside.' },
      { name: 'Ouzoud Waterfalls', bestTime: 'Midday when rainbows appear in the spray', tip: 'The tallest waterfalls in North Africa with Barbary macaques in the surrounding olive groves. Multiple viewpoints and a path to the base.' },
      { name: 'Todra Gorge', bestTime: 'Midday when sunlight illuminates the narrow 300-meter canyon floor', tip: 'The towering rock walls with the river below create a dramatic sense of scale. Include a person for perspective.' },
      { name: 'Legzira Beach arches', bestTime: 'Sunset when the red stone arches glow orange near Sidi Ifni', tip: 'The dramatic natural stone arches over the beach are among Morocco&apos;s most unique photo spots. Low tide offers the best access.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME TO PHOTOGRAPH
   ═══════════════════════════════════════════════════════════════ */

const seasonalTiming = [
  { season: 'Spring (Mar-May)', sunrise: '6:30 - 7:00 AM', sunset: '6:30 - 7:30 PM', best: 'Clear skies, wildflowers in Atlas, ideal temperatures for all-day shooting' },
  { season: 'Summer (Jun-Aug)', sunrise: '6:00 - 6:30 AM', sunset: '7:30 - 8:00 PM', best: 'Long golden hours but harsh midday; shoot early morning and late afternoon only' },
  { season: 'Autumn (Sep-Nov)', sunrise: '6:30 - 7:00 AM', sunset: '5:30 - 7:00 PM', best: 'Warm haze for atmospheric desert shots; fewer tourists at popular spots' },
  { season: 'Winter (Dec-Feb)', sunrise: '7:00 - 7:30 AM', sunset: '5:00 - 6:00 PM', best: 'Low-angle sun all day creates dramatic shadows; snow-capped Atlas backdrop' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS FOR INSTAGRAM
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  { tip: 'Arrive at locations before 8 AM', detail: 'Popular spots like Chefchaouen and Jardin Majorelle are empty at opening time. You get clean shots without crowds and softer morning light that flatters every scene.' },
  { tip: 'Use doorways and arches as frames', detail: 'Morocco is full of ornate archways, keyhole-shaped openings, and carved wooden doors. Position your subject inside the frame for depth, context, and a distinctly Moroccan aesthetic.' },
  { tip: 'Include people for scale and story', detail: 'A figure in a djellaba walking through a blue alley or a camel rider crossing dunes transforms a landscape into a narrative. Always ask permission for close-up portraits.' },
  { tip: 'Shoot from rooftop terraces', detail: 'Many riads and cafes have rooftop access with panoramic views. These elevated angles show the medina sprawl, Atlas Mountains backdrop, and unique rooftop geometry.' },
  { tip: 'Capture colorful market details', detail: 'Spice pyramids, stacked leather babouches, hanging brass lanterns, and woven baskets make stunning flat-lay and detail shots. Ask vendors before photographing their stalls.' },
  { tip: 'Use symmetry in architecture', detail: 'Islamic geometric patterns, zellige tilework, and madrasa courtyards are perfectly symmetrical. Center your shot and use gridlines for maximum visual impact.' },
  { tip: 'Embrace the golden hour glow', detail: 'Morocco&apos;s warm-toned architecture looks magical during golden hour. The red walls of Marrakech, ochre kasbahs, and golden desert sands are enhanced by warm directional light.' },
  { tip: 'Try portrait mode for bokeh', detail: 'Modern phones create beautiful background blur for detail shots of ornate doors, mint tea, traditional crafts, and food. This helps isolate subjects from busy medina backgrounds.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRONE RULES
   ═══════════════════════════════════════════════════════════════ */

const droneRules = [
  'Drone flights require prior authorization from the Direction Generale de l\'Aviation Civile (DGAC)',
  'Apply for permits at least 4-6 weeks before your trip; approval is not guaranteed',
  'Drones are strictly prohibited near airports, military sites, royal palaces, and government buildings',
  'Many tourists have had drones confiscated at customs when entering Morocco without a permit',
  'Flying over medinas, mosques, and crowded areas is prohibited even with a permit',
  'Penalties for unauthorized flights include equipment confiscation, fines, and possible detention',
  'Consider hiring a licensed local drone operator who has existing permits for aerial content',
  'Some desert camps and remote locations may allow drone flights with proper permits; confirm locally',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CAPTION IDEAS
   ═══════════════════════════════════════════════════════════════ */

const captionIdeas = [
  { location: 'Chefchaouen', captions: ['Lost in fifty shades of blue', 'Where every corner is a postcard', 'The blue city that stole my heart', 'Painting the town blue, literally'] },
  { location: 'Marrakech', captions: ['Souk it to me', 'Getting lost in the medina, finding myself', 'A sensory overload in the best way', 'Spice-scented dreams in the Red City'] },
  { location: 'Sahara Desert', captions: ['Life is better on a camel', 'Desert silence speaks louder than words', 'Chasing sunrises over sand dunes', 'Found the edge of the world'] },
  { location: 'Fes', captions: ['Stepping into a time machine', 'Where centuries-old craftsmanship lives on', 'The oldest medina, the deepest stories', 'Tanned in Fes (at the tanneries)'] },
  { location: 'Essaouira', captions: ['Where the desert meets the Atlantic', 'Winds of change, salty air', 'Blue boats and golden sunsets', 'Fortified dreams by the sea'] },
  { location: 'General Morocco', captions: ['Morocco is always a good idea', 'Colors I did not know existed', 'Tea, tagine, and a thousand stories', 'The magic of Morocco never fades'] },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HASHTAG RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const hashtagSets = [
  {
    category: 'Broad Morocco',
    tags: ['#Morocco', '#Maroc', '#VisitMorocco', '#MoroccoTravel', '#MoroccoDreams', '#MoroccanVibes', '#ExploreMorocco', '#MoroccoGram'],
  },
  {
    category: 'City-Specific',
    tags: ['#Chefchaouen', '#ChefchaouenBlue', '#Marrakech', '#MarrakechVibes', '#Fes', '#FesElBali', '#Essaouira', '#Casablanca', '#Ouarzazate'],
  },
  {
    category: 'Aesthetic & Niche',
    tags: ['#BlueCity', '#MoroccanArchitecture', '#Zellige', '#MoroccanRiad', '#MoroccanDoors', '#DesertVibes', '#SaharaSunrise', '#MoroccanColors'],
  },
  {
    category: 'Travel & Photography',
    tags: ['#TravelMorocco', '#NorthAfrica', '#AfricaTravel', '#TravelPhotography', '#Wanderlust', '#ExploreMore', '#PassportReady', '#TravelContent'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/photo-spots',
    title: 'Best Photo Spots in Morocco',
    description: 'Curated collection of the most photogenic locations across every region of Morocco.',
    icon: Image,
  },
  {
    href: '/photography',
    title: 'Morocco Photography',
    description: 'Comprehensive photography resource covering gear, techniques, and location-specific advice.',
    icon: Aperture,
  },
  {
    href: '/morocco-photography-tips',
    title: 'Morocco Photography Tips',
    description: 'Golden hour timing, etiquette rules, camera gear, and practical tips for stunning Moroccan photos.',
    icon: Camera,
  },
  {
    href: '/photography-guide',
    title: 'Morocco Photography Guide',
    description: 'In-depth guide to photographing Morocco with seasonal tips and city-by-city breakdowns.',
    icon: BookOpen,
  },
  {
    href: '/filming-locations',
    title: 'Morocco Filming Locations',
    description: 'Discover where Hollywood and international productions filmed across Morocco&apos;s dramatic landscapes.',
    icon: Globe,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoInstagramSpotsPage() {
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
            backgroundImage: 'url(/images/hero-morocco-photography.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Instagram Spots</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Camera className="w-4 h-4" />
            Instagram Photo Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Instagram Spots
            <br className="hidden md:block" /> for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">
            The ultimate guide to the most Instagrammable places in Morocco. Discover 25+ stunning
            photo locations with best times, tips, captions, and hashtags for scroll-stopping content.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 25+ Photo Locations</span>
            <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5" /> Best Times Guide</span>
            <span className="flex items-center gap-1.5"><Hash className="w-3.5 h-3.5" /> Hashtag Tips</span>
            <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5" /> Phone & Camera</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Dominates Instagram Travel Content
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco consistently ranks among the most Instagrammable countries in the world, and for
                good reason. From the impossibly blue streets of Chefchaouen to the golden dunes of the
                Sahara, every frame overflows with color, texture, and visual drama. The country is a content
                creator&apos;s dream &mdash; offering ancient medinas, vibrant souks, ornate palaces, dramatic
                coastlines, and vast desert landscapes all within a single trip.
              </p>
              <p>
                But the best Morocco Instagram content goes beyond simply showing up. Timing matters enormously:
                the same location can look completely different at sunrise versus midday. Knowing which spots
                attract crowds (and when to avoid them), understanding local photography etiquette, and having
                the right captions and hashtags ready can transform your Morocco feed from ordinary to extraordinary.
              </p>
              <p>
                This guide covers 25+ of the most Instagrammable locations in Morocco, organized by city,
                with best times to shoot at each one. You will also find photography tips, drone regulations,
                ready-to-use caption ideas, and curated hashtag sets to maximize your reach and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Instagram Spots by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Instagram Spots by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most photogenic locations in Morocco&apos;s top destinations, with the best time
            to visit each spot and insider tips for getting the perfect shot.
          </p>

          <div className="space-y-8">
            {instagramSpotsByCity.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">{city.tagline}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {city.spots.map((spot, i) => (
                      <div key={i} className="p-4 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">{spot.name}</p>
                            <p className="text-xs text-[var(--color-accent)] mt-1 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {spot.bestTime}
                            </p>
                            <p className="text-xs text-[var(--text-muted)] mt-1">{spot.tip}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Times to Photograph ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Times for Instagram Photos
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s golden hour shifts with the seasons. Plan your shoots around these
            windows for the most flattering light and scroll-stopping content.
          </p>

          <div className="card-moroccan overflow-hidden mb-8">
            <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Season</div>
              <div className="p-3 px-4">Sunrise</div>
              <div className="p-3 px-4">Sunset</div>
              <div className="p-3 px-4">Best For</div>
            </div>
            {seasonalTiming.map((tip, i) => (
              <div
                key={tip.season}
                className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-semibold text-[var(--color-accent)]">{tip.season}</div>
                <div className="p-3 px-4 text-[var(--text-primary)]">{tip.sunrise}</div>
                <div className="p-3 px-4 text-[var(--text-primary)]">{tip.sunset}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{tip.best}</div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Pro Tip: Blue Hour in Chefchaouen
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The 20-30 minutes after sunset is magical in Chefchaouen. The blue walls take on an
                  ethereal glow in the fading twilight, and the sky turns deep indigo behind the Rif
                  Mountains. This is when you capture the dreamy, saturated blue images that consistently
                  go viral. Use a tripod and long exposure for the best results.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Sahara Sunrise Strategy
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    For the classic Sahara sunrise shot, wake at 5 AM and climb a tall dune facing east.
                    The transition from deep blue to warm gold takes about 30 minutes. Footprints in
                    virgin sand leading to a lone figure on the dune ridge is the most-shared composition.
                    Most desert camps organize pre-dawn camel rides for this exact moment.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Marrakech Rooftop Hour
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The hour before sunset from a Marrakech rooftop is prime content time. The medina
                    rooftops, the Atlas Mountains behind, and the Koutoubia Mosque minaret all glow warm
                    amber. Many riads offer rooftop access &mdash; book a sunset dinner at a rooftop
                    restaurant for effortless golden hour content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Tips for Instagram ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tips for Instagram-Worthy Shots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Techniques and strategies for capturing scroll-stopping Morocco content, whether
            you are shooting on a phone or a professional camera.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {photoTips.map((item, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[var(--color-gold)]">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{item.tip}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Content Creator Tip: Batch Your Shots
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Capture multiple compositions at each location: wide establishing shot, medium detail
                  shot, close-up texture shot, and a selfie or portrait. This gives you four different
                  posts from one location and creates a cohesive carousel. Morocco&apos;s visual richness
                  means you can easily fill 10 slides from a single Chefchaouen alley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Drone Rules ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleAlert className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Drone Photography Rules in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has strict drone regulations. Know the rules before bringing your drone to
            avoid confiscation, fines, or legal trouble.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {droneRules.map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 card-moroccan p-5 bg-red-50/50">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-red-700">Important:</span> The safest approach is to leave
                your drone at home unless you have confirmed permit approval in writing from the DGAC before
                your trip. The risk of confiscation at customs is high. For aerial content, hire a licensed
                local operator or use creative alternatives like rooftop terraces and elevated viewpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Caption Ideas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Share2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Instagram Caption Ideas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ready-to-use captions for your Morocco posts, organized by location. Mix and match
            or use them as inspiration for your own creative spin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {captionIdeas.map((item) => (
              <div key={item.location} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {item.location}
                </h3>
                <div className="space-y-2">
                  {item.captions.map((caption, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Heart className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-sm text-[var(--text-secondary)] italic">&ldquo;{caption}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hashtag Recommendations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hash className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Hashtag Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use a strategic mix of broad and niche hashtags to maximize reach. Combine 20-25
            hashtags per post from these curated categories for optimal visibility.
          </p>

          <div className="space-y-5">
            {hashtagSets.map((set) => (
              <div key={set.category} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {set.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {set.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">Hashtag strategy:</span> Mix
                high-volume hashtags (1M+ posts) with niche ones (under 100K posts) for the best reach.
                Instagram&apos;s algorithm favors posts that perform well in smaller hashtag pools first,
                then surfaces them in larger ones. Rotate your hashtag sets between posts to avoid being
                flagged as repetitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Etiquette for Creators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect local customs to create authentic content and positive interactions.
            These rules apply whether you are a casual traveler or a professional content creator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Always ask before photographing people</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">A gesture toward your camera and a smile works. Some may request from 5-10 MAD, which is fair compensation.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Never photograph women without consent</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Especially important in conservative areas and rural villages. When in doubt, do not photograph.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Avoid military and police installations</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Photographing government buildings, royal palaces, and military sites is prohibited and can lead to detention.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Be respectful in religious areas</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Non-Muslims cannot enter most mosques. Photograph exteriors respectfully. Avoid flash near worshippers.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Ask before shooting in shops</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Many artisans welcome photos that promote their work. A quick &ldquo;photo okay?&rdquo; shows respect.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Show people your photos</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Showing your image to the subject creates genuine connection and often leads to better, more authentic follow-up shots.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about capturing Instagrammable content in Morocco.
          </p>

          <div className="space-y-5">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Reference: Instagram Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The key things to remember for your Morocco Instagram content. Save this section for easy reference during your trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Sunrise className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Golden Hour
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Shoot at sunrise and the hour before sunset for the warmest, most flattering light</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Beat the Crowds
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Arrive before 8 AM at popular spots for empty streets and clean compositions</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Ask Permission
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Always get consent before photographing people; tip from 5-10 MAD for portraits</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Hash className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Mix Hashtags
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Combine 20-25 hashtags mixing broad and niche tags for maximum reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Photography Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Explore more in-depth guides to photography and specific destinations in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1">{guide.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--color-accent)] transition-colors mt-1 shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <div className="card-moroccan p-8 md:p-12">
            <Camera className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Ready to Fill Your Feed with Morocco?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
              From blue streets to golden dunes, Morocco offers endless Instagrammable moments.
              Start planning your photography trip and create content that stands out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chefchaouen"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <MapPin className="w-4 h-4" />
                Explore Chefchaouen
              </Link>
              <Link
                href="/sahara"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
              >
                <Mountain className="w-4 h-4" />
                Sahara Desert Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

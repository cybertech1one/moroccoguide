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
  Aperture,
  CloudSun,
  Landmark,
  Focus,
  Lightbulb,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Photography Locations 2026 | 30+ Best Places to Photograph',
  description:
    'Discover the 30+ best photography locations in Morocco for 2026. Architectural masterpieces, Sahara landscapes, vibrant street scenes, and cultural moments. Camera gear, lighting tips, drone rules, etiquette, and seasonal photo guides.',
  keywords: [
    'Morocco photography locations',
    'best places to photograph in Morocco',
    'Morocco photo guide',
    'Morocco travel photography',
    'photography spots Morocco',
    'Morocco landscape photography',
    'Morocco architecture photography',
    'Sahara desert photography',
    'Chefchaouen photography',
    'Morocco street photography',
    'Morocco cultural photography',
    'Morocco camera gear guide',
    'Morocco drone rules',
    'Morocco photography etiquette',
    'Morocco golden hour',
    'best time to photograph Morocco',
    'Morocco photography tours',
    'Morocco photo locations 2026',
    'Morocco sunrise photography',
    'Morocco portrait photography',
  ],
  openGraph: {
    title: 'Morocco Photography Locations 2026 | 30+ Best Places to Photograph',
    description:
      'The ultimate guide to photographing Morocco. 30+ locations across architecture, landscapes, street scenes, and cultural moments with lighting tips, gear advice, and seasonal recommendations.',
    url: `${BASE_URL}/morocco-photography-locations`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-photography.webp`,
        width: 1200,
        height: 630,
        alt: 'Photographer capturing the blue streets of Chefchaouen at golden hour in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Photography Locations | 30+ Best Spots 2026',
    description:
      'Architecture, landscapes, street scenes & cultural moments. The ultimate Morocco photography location guide with gear tips, lighting, and seasonal advice.',
    images: [`${BASE_URL}/images/hero-morocco-photography.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-photography-locations` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-photography-locations`,
  name: 'Morocco Photography Locations 2026 | 30+ Best Places to Photograph',
  description:
    'Comprehensive guide to the best photography locations in Morocco covering 30+ sites across architecture, landscapes, street scenes, and cultural moments with lighting advice, camera gear, drone regulations, etiquette, and seasonal recommendations.',
  url: `${BASE_URL}/morocco-photography-locations`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-photography-locations`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Photography Locations', item: `${BASE_URL}/morocco-photography-locations` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best photography locations in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best photography locations in Morocco include Hassan II Mosque in Casablanca for architecture, the Sahara dunes at Erg Chebbi for landscapes, the blue streets of Chefchaouen for street photography, and the Chouara tanneries in Fes for cultural shots. Other top locations are Bahia Palace, Ait Ben Haddou kasbah, Todra Gorge, the Atlas Mountains, Jemaa el-Fnaa square, and Essaouira port.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for photography in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) offer the best photography conditions in Morocco. Spring provides clear skies, wildflowers in the Atlas, and comfortable temperatures for all-day shooting. Autumn has warm atmospheric haze for desert shots and fewer crowds. Winter offers dramatic low-angle light and snow-capped Atlas backdrops. Summer has the longest golden hours but extremely hot midday conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fly a drone for photography in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drone use in Morocco requires prior authorization from the Direction Generale de l\'Aviation Civile (DGAC). Apply at least 4-6 weeks before your trip, and approval is not guaranteed. Drones are prohibited near airports, military sites, royal palaces, mosques, and crowded areas. Many tourists have had drones confiscated at customs. Consider hiring a licensed local operator if you need aerial shots.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need permission to photograph people in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always ask permission before photographing people in Morocco. A simple gesture toward your camera and a smile works. Some people will pose happily, others may request a small tip of from 5-10 MAD, and some will decline. Never photograph women without explicit consent, and avoid photographing children without parental permission. Showing your photos afterward creates goodwill.',
      },
    },
    {
      '@type': 'Question',
      name: 'What camera gear should I bring to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mirrorless camera with a 24-70mm f/2.8 zoom is the most versatile choice for Morocco. Add a wide-angle (16-35mm) for medina alleys and architecture, and a 70-200mm for desert landscapes and portraits. Essential accessories include a circular polarizer, lightweight tripod, lens cleaning kit (sand and dust are constant), and extra batteries. Modern smartphones like iPhone 16 Pro or Samsung Galaxy S25 Ultra also produce excellent results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there photography restrictions at Moroccan tourist sites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most tourist sites allow photography, but non-Muslims cannot enter most mosques (Hassan II Mosque in Casablanca is a notable exception with guided tours). Military sites, police stations, government buildings, and royal palaces must never be photographed. Some museums restrict flash and tripods. The Fes tanneries allow free photography from terrace viewpoints, but leather shop owners may expect you to browse their goods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of day for photography in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Golden hour around sunrise (6:00-7:30 AM) and sunset (5:00-7:00 PM depending on season) provide the most flattering light. Early morning is ideal for empty streets in medinas. Blue hour (20-30 minutes after sunset) creates magical results in Chefchaouen. Midday works for overhead shots in souks and the narrow Todra Gorge where sunlight reaches the canyon floor only around noon.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need for a Morocco photography trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A thorough Morocco photography trip requires 12-16 days. Suggested itinerary: 3 days Marrakech (palaces, souks, gardens), 2-3 days Sahara (dunes, kasbahs), 1 day Todra Gorge, 2-3 days Fes (medina, tanneries), 2 days Chefchaouen, 1 day Casablanca (Hassan II Mosque), and 1-2 days Essaouira. Allow extra time for weather delays and to revisit locations at different times of day.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY LOCATIONS BY CATEGORY
   ═══════════════════════════════════════════════════════════════ */

const locationsByCategory = [
  {
    category: 'Architecture',
    icon: Landmark,
    color: 'amber',
    tagline: 'Islamic artistry, ancient kasbahs, and ornate palaces',
    locations: [
      { name: 'Hassan II Mosque, Casablanca', bestLight: 'Sunset for minaret silhouette against the Atlantic sky; interior tours in morning light', tip: 'The largest mosque in Africa sits on the ocean. Guided interior tours allow photography of the stunning tilework, carved ceilings, and retractable roof. The esplanade provides the best exterior angles.' },
      { name: 'Bahia Palace, Marrakech', bestLight: 'Late afternoon when angled sunlight creates patterns through carved window screens', tip: 'Zellige courtyards and painted cedar ceilings are a masterclass in Islamic design. Shoot from low angles for ceiling details. Visit on weekdays to avoid large tour groups.' },
      { name: 'Bou Inania Madrasa, Fes', bestLight: 'Late morning when sunlight reaches the courtyard floor and illuminates the stucco carvings', tip: 'A Marinid masterpiece combining zellige, carved stucco, and cedar woodwork. The central courtyard offers perfect symmetrical compositions. Entry from 20 MAD.' },
      { name: 'Ait Ben Haddou, Ouarzazate', bestLight: 'Early morning for soft light on mud-brick walls; cross the river for the classic reflection shot', tip: 'This UNESCO World Heritage kasbah was used in Gladiator, Game of Thrones, and Lawrence of Arabia. Climb to the top for panoramic views over the Ounila Valley.' },
    ],
  },
  {
    category: 'Landscapes',
    icon: Mountain,
    color: 'emerald',
    tagline: 'Dunes, mountains, gorges, and hidden valleys',
    locations: [
      { name: 'Erg Chebbi Dunes, Sahara', bestLight: 'Pre-dawn to catch the color shift from deep blue to warm gold across 150-meter dunes', tip: 'Wake at 5 AM and climb a tall dune facing east. Footprints in virgin sand leading to a lone figure on the dune ridge is the most compelling composition. A telephoto lens compresses the wave-like dune patterns.' },
      { name: 'Atlas Mountains', bestLight: 'Early morning or late afternoon for dramatic shadows across the peaks and valleys', tip: 'The High Atlas offers snow-capped peaks, terraced Berber villages, and deep valleys. The Tizi n\'Tichka pass provides sweeping vista access by car. Spring wildflowers add color to foreground compositions.' },
      { name: 'Todra Gorge', bestLight: 'Midday when sunlight penetrates the narrow 300-meter canyon walls and reaches the river below', tip: 'The towering limestone walls create a dramatic sense of scale. Include a person for perspective. The gorge is one of few Morocco locations that photographs best at midday. Rock climbers on the walls add dynamic elements.' },
      { name: 'Paradise Valley, Agadir', bestLight: 'Late morning to early afternoon when sunlight filters through the palm canopy to emerald pools', tip: 'A series of natural rock pools, small waterfalls, and palm groves in a hidden canyon. The turquoise water against red rock creates a vivid color contrast. Visit on weekdays for fewer crowds.' },
    ],
  },
  {
    category: 'Cities & Streets',
    icon: Layers,
    color: 'sky',
    tagline: 'Blue alleys, ancient medinas, and bustling squares',
    locations: [
      { name: 'Blue Streets of Chefchaouen', bestLight: 'Early morning (7-8 AM) for empty alleys and soft light on east-facing blue walls', tip: 'Every corner is a composition: stepped alleys with potted plants, blue doors with brass knockers, and draped rugs. Blue hour (20-30 min after sunset) creates an ethereal glow. The Spanish Mosque viewpoint rewards a 20-minute hike with the best aerial panorama.' },
      { name: 'Fes Medina', bestLight: 'Mid-morning when shafts of light pierce the covered market passageways', tip: 'The world\'s largest car-free urban area is a labyrinth of 9,000 alleys. Focus on the interplay of light and shadow. Bab Bou Jeloud (Blue Gate) is the classic entry shot. Hire a local guide to find the most photogenic corners.' },
      { name: 'Jemaa el-Fnaa, Marrakech', bestLight: 'Sunset from a rooftop restaurant overlooking the square as food stall smoke rises', tip: 'The main square transforms hourly: snake charmers and acrobats by day, food stalls and storytellers by evening. Cafe de France and Nomad restaurant offer the best elevated vantage points for wide compositions.' },
      { name: 'Essaouira Port & Ramparts', bestLight: 'Golden hour when the 18th-century Portuguese fortifications glow warm orange', tip: 'Rows of blue fishing boats, seagulls, bronze cannons on the sea wall, and crashing Atlantic waves. The ramparts with cannon views to Mogador Island are dramatic during winter storms. The port is most active at early morning fish unloading.' },
    ],
  },
  {
    category: 'Cultural Moments',
    icon: Users,
    color: 'rose',
    tagline: 'Tanneries, souks, rituals, and mountain villages',
    locations: [
      { name: 'Chouara Tanneries, Fes', bestLight: 'Morning (9-11 AM) when the colorful dye vats are freshly filled and workers are active', tip: 'View from leather shop terraces above. The circular stone vats filled with vivid dyes create one of Morocco\'s most iconic images. A telephoto lens captures the workers and vibrant colors from the elevated viewpoint.' },
      { name: 'Marrakech Souks', bestLight: 'Mid-morning (10-11 AM) when light shafts pierce the covered markets', tip: 'Spice pyramids, hanging brass lanterns, leather goods, and woven baskets offer endless compositions. Shoot from a distance to capture the layered depth. Respect vendors by asking before close-up shots of their stalls.' },
      { name: 'Moroccan Tea Ceremony', bestLight: 'Indoor shots benefit from window light; outdoor terraces offer natural backlighting', tip: 'The dramatic pour of mint tea from height into small glasses is a quintessential Moroccan moment. Use burst mode to capture the arc of the pour. Riad courtyards provide beautiful natural light and patterned tile backdrops.' },
      { name: 'Berber Villages, Atlas Mountains', bestLight: 'Late afternoon when warm side-light models the terraced stone buildings and surrounding peaks', tip: 'Villages like Imlil and Aroumd offer authentic rural life against mountain backdrops. Donkeys on narrow paths, women carrying bundles, and children at play tell stories. Always ask permission and show respect in these communities.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LIGHTING & TIMING GUIDE
   ═══════════════════════════════════════════════════════════════ */

const lightingGuide = [
  { period: 'Blue Hour', time: '30 min before sunrise / after sunset', best: 'Chefchaouen blue walls, city panoramas, long exposures of medina rooftops', gear: 'Tripod essential; ISO 800-1600; shutter 2-10 seconds' },
  { period: 'Golden Hour', time: '1 hour after sunrise / before sunset', best: 'Desert dunes, kasbahs, ramparts, mosque exteriors, mountain villages', gear: 'Warm light requires minimal editing; use a reflector for portraits' },
  { period: 'Midday', time: '11 AM - 2 PM', best: 'Todra Gorge canyon floor, overhead souk shots, Chefchaouen blue walls (even illumination)', gear: 'Polarizing filter reduces glare; lens hood prevents flare' },
  { period: 'Overcast', time: 'Cloudy days', best: 'Tanneries (no harsh shadows on dye vats), street portraits, market detail shots', gear: 'Nature\'s softbox; bump ISO slightly; ideal for saturated colors without contrast' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CAMERA GEAR RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const gearRecommendations = [
  { item: 'Wide-Angle Lens (16-35mm)', use: 'Medina alleyways, mosque interiors, kasbah architecture, dramatic landscape foregrounds', essential: true },
  { item: 'Standard Zoom (24-70mm f/2.8)', use: 'Most versatile all-purpose lens for street scenes, food shots, portraits, and architecture', essential: true },
  { item: 'Telephoto (70-200mm)', use: 'Desert dune compression, mountain layers, tannery details from above, candid portraits', essential: false },
  { item: 'Circular Polarizing Filter', use: 'Deepens blue skies, reduces reflections on water, cuts glare on zellige tilework', essential: true },
  { item: 'Lightweight Travel Tripod', use: 'Blue hour, sunrise/sunset long exposures, star photography in the Sahara', essential: true },
  { item: 'Lens Cleaning Kit', use: 'Sand and dust are constant companions; microfiber cloths and a blower are essential daily', essential: true },
  { item: 'Extra Batteries & Memory Cards', use: 'Heat drains batteries faster; long shooting days in remote areas offer no charging options', essential: true },
  { item: 'Camera Rain Cover', use: 'Essaouira sea spray, occasional rain in the Rif and Atlas mountains', essential: false },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  { rule: 'Always ask before photographing people', detail: 'A smile and a gesture toward your camera is usually enough. Accept refusals gracefully. Showing people your photos afterward builds trust and often leads to more natural, authentic images.' },
  { rule: 'Expect to tip for portraits', detail: 'Many Moroccans will happily pose for from 5-10 MAD. Water sellers, henna artists, and snake charmers in Jemaa el-Fnaa expect payment. Negotiate before shooting to avoid misunderstandings.' },
  { rule: 'Never photograph women without consent', detail: 'This is a serious cultural boundary. In rural and conservative areas, many women prefer not to be photographed. If a woman covers her face or turns away, immediately stop and apologize.' },
  { rule: 'Avoid photographing children without parental permission', detail: 'While children may eagerly pose, it is important to obtain consent from a parent or guardian. In small villages, ask the family rather than the child directly.' },
  { rule: 'No photography of military, police, or government buildings', detail: 'Photographing military installations, police stations, government buildings, and royal palaces is strictly prohibited and can result in equipment confiscation or detention.' },
  { rule: 'Respect mosque restrictions', detail: 'Non-Muslims cannot enter most mosques in Morocco. Hassan II Mosque in Casablanca is a notable exception that offers guided tours with photography permitted inside. Never photograph worshippers during prayer.' },
  { rule: 'Ask vendors before photographing their stalls', detail: 'Many souk vendors welcome photos of their colorful displays. Others may insist you purchase something first. A polite request and small purchase go a long way in the souks.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL PHOTOGRAPHY GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  { season: 'Spring (Mar-May)', highlights: 'Clear skies, wildflowers in the Atlas, almond blossoms, comfortable all-day shooting temperatures', sunrise: '6:30 - 7:00 AM', sunset: '6:30 - 7:30 PM', bestFor: 'Landscapes, mountain villages, desert before extreme heat' },
  { season: 'Summer (Jun-Aug)', highlights: 'Longest golden hours, dramatic heat haze over desert, festivals including Gnaoua in Essaouira', sunrise: '6:00 - 6:30 AM', sunset: '7:30 - 8:00 PM', bestFor: 'Coastal towns, early morning/late evening shoots only in interior' },
  { season: 'Autumn (Sep-Nov)', highlights: 'Warm atmospheric haze for moody desert shots, date harvest, fewer tourist crowds at major sites', sunrise: '6:30 - 7:00 AM', sunset: '5:30 - 7:00 PM', bestFor: 'Desert, cultural events, street photography without crowds' },
  { season: 'Winter (Dec-Feb)', highlights: 'Low-angle sun all day creates dramatic shadows, snow-capped Atlas backdrop, empty tourist sites', sunrise: '7:00 - 7:30 AM', sunset: '5:00 - 6:00 PM', bestFor: 'Architecture (dramatic shadows), snow-capped mountain panoramas' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRONE REGULATIONS
   ═══════════════════════════════════════════════════════════════ */

const droneRules = [
  'Drone flights require prior authorization from the Direction Generale de l\'Aviation Civile (DGAC)',
  'Apply for permits at least 4-6 weeks before your trip; approval is not guaranteed',
  'Drones are strictly prohibited near airports, military sites, royal palaces, and government buildings',
  'Many tourists have had drones confiscated at customs when entering Morocco without a permit',
  'Flying over medinas, mosques, and crowded areas is prohibited even with a permit',
  'Penalties for unauthorized flights include equipment confiscation, fines, and possible detention',
  'Consider hiring a licensed local drone operator who has existing permits for aerial photography',
  'Some desert camps and remote locations may allow drone flights with proper permits; confirm locally',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TOURS
   ═══════════════════════════════════════════════════════════════ */

const photoTours = [
  { name: 'Marrakech Photo Walk', duration: '3-4 hours', price: 'from 400 MAD', description: 'Guided walking tour through the medina, souks, and hidden courtyards with a local photographer who knows the best angles and timing for each location.' },
  { name: 'Sahara Photography Expedition', duration: '2-3 days', price: 'from 3,500 MAD', description: 'Desert camp with sunrise and sunset shoots on the Erg Chebbi dunes, camel caravan silhouettes, night sky astrophotography, and visits to Ait Ben Haddou and Todra Gorge.' },
  { name: 'Chefchaouen Blue City Tour', duration: '1-2 days', price: 'from 800 MAD', description: 'Expert-guided exploration of hidden blue alleys, the Spanish Mosque viewpoint at golden hour, Ras el-Maa waterfall, and the surrounding Rif Mountain villages.' },
  { name: 'Fes Medina Photography Tour', duration: '4-5 hours', price: 'from 500 MAD', description: 'Navigate the world\'s largest car-free urban area with a photographer guide. Includes tannery access, hidden fondouks, artisan workshops, and the best viewpoints over the medina.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/photography',
    title: 'Morocco Photography',
    description: 'Comprehensive photography resource covering techniques, equipment, and location-specific guidance for Morocco.',
    icon: Aperture,
  },
  {
    href: '/morocco-photography-tips',
    title: 'Morocco Photography Tips',
    description: 'Golden hour timing, etiquette rules, camera gear, and practical tips for capturing stunning Moroccan images.',
    icon: Camera,
  },
  {
    href: '/morocco-instagram-spots',
    title: 'Morocco Instagram Spots',
    description: 'The 25+ most Instagrammable places in Morocco with hashtag sets, caption ideas, and content creator strategies.',
    icon: Image,
  },
  {
    href: '/photo-spots',
    title: 'Best Photo Spots in Morocco',
    description: 'Curated collection of the most photogenic locations across every region of Morocco for any camera.',
    icon: MapPin,
  },
  {
    href: '/photography-guide',
    title: 'Morocco Photography Guide',
    description: 'In-depth guide to photographing Morocco with seasonal tips and city-by-city breakdowns.',
    icon: BookOpen,
  },
  {
    href: '/morocco-film-locations',
    title: 'Morocco Film Locations',
    description: 'Visit the dramatic landscapes where Hollywood and international productions filmed across Morocco.',
    icon: Globe,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPhotographyLocationsPage() {
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
            <span className="text-white">Morocco Photography Locations</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Camera className="w-4 h-4" />
            Photography Location Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Photography
            <br className="hidden md:block" /> Locations 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">
            The definitive guide to 30+ of the best places to photograph in Morocco. From architectural
            masterpieces to sweeping desert landscapes, vibrant medina streets to intimate cultural moments.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 30+ Locations</span>
            <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5" /> Lighting Guide</span>
            <span className="flex items-center gap-1.5"><Camera className="w-3.5 h-3.5" /> Gear Advice</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Etiquette Tips</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Photographer&apos;s Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Few countries on earth rival Morocco for sheer photographic diversity. Within a single trip, you
                can photograph towering sand dunes under a Milky Way sky, wander through a labyrinth of blue-painted
                alleys, capture the intricate geometry of 700-year-old Islamic architecture, and document centuries-old
                craft traditions in leather tanneries and copper workshops &mdash; all bathed in North Africa&apos;s
                famously warm, golden light.
              </p>
              <p>
                Morocco&apos;s visual richness stems from its position at the crossroads of Africa, Europe, and the
                Arab world. Berber mountain villages cling to Atlas peaks, ancient imperial cities preserve medieval
                Islamic artistry, Atlantic fishing ports retain their whitewashed charm, and the Sahara desert stretches
                endlessly to the horizon. Every region offers a distinct visual palette, from Chefchaouen&apos;s fifty
                shades of blue to Marrakech&apos;s terracotta reds and the desert&apos;s shifting golds.
              </p>
              <p>
                This guide covers the 30+ best photography locations across four categories &mdash; architecture,
                landscapes, cities and streets, and cultural moments &mdash; along with detailed lighting advice, camera
                gear recommendations, photography etiquette, drone regulations, seasonal tips, and available photo tours
                to help you capture Morocco at its absolute best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-10 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card-moroccan p-5 text-center">
              <MapPin className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">30+</p>
              <p className="text-xs text-[var(--text-muted)]">Photo Locations</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Landmark className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">4</p>
              <p className="text-xs text-[var(--text-muted)]">Categories Covered</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Globe className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">9</p>
              <p className="text-xs text-[var(--text-muted)]">UNESCO Heritage Sites</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Sunrise className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">4</p>
              <p className="text-xs text-[var(--text-muted)]">Seasons Analyzed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Locations by Category ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Photography Locations by Category
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s top photography locations organized by subject, with the best lighting
            conditions and insider tips for each spot.
          </p>

          <div className="space-y-8">
            {locationsByCategory.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.category} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {cat.category}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">{cat.tagline}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {cat.locations.map((loc, i) => (
                      <div key={i} className="p-4 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">{loc.name}</p>
                            <p className="text-xs text-[var(--color-accent)] mt-1 flex items-center gap-1">
                              <Sun className="w-3 h-3" /> {loc.bestLight}
                            </p>
                            <p className="text-xs text-[var(--text-muted)] mt-1">{loc.tip}</p>
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

      {/* ── Lighting & Time of Day Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time of Day &amp; Lighting Conditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding Morocco&apos;s light is the difference between a good photo and an extraordinary
            one. Each time of day offers distinct creative opportunities.
          </p>

          <div className="space-y-4">
            {lightingGuide.map((item, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CloudSun className="w-5 h-5 text-[var(--color-gold)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.period}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        <Clock className="w-3 h-3 inline mr-1" />{item.time}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-1"><strong>Best for:</strong> {item.best}</p>
                    <p className="text-xs text-[var(--text-muted)]"><strong>Gear tip:</strong> {item.gear}</p>
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
                  Pro Tip: The Sahara&apos;s Magic 30 Minutes
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The 30 minutes before sunrise in the Sahara are the most photogenic of any Morocco location.
                  The sky transitions through deep indigo, purple, rose, and finally gold while the dunes shift
                  from cool blue shadows to warm amber highlights. Set up your composition in the dark, use manual
                  focus on the horizon, and shoot continuously as the light transforms. These pre-dawn moments
                  produce images impossible to replicate at any other time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hidden Gem Locations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hidden Gem Photography Locations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the famous spots, Morocco holds lesser-known locations that reward
            photographers willing to explore off the beaten path.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Legzira Beach, Sidi Ifni</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Dramatic natural red stone arches over the beach glow orange at sunset. Low tide offers the best access
                    for compositions framing the Atlantic through the arch. One of Morocco&apos;s most unique coastal landforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Ouzoud Waterfalls</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    The tallest waterfalls in North Africa with Barbary macaques in surrounding olive groves. Midday rainbows
                    appear in the spray. Multiple viewpoints and a path to the base provide varied compositions.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Moulay Idriss Zerhoun</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Morocco&apos;s holiest town cascades down a hillside near the Roman ruins of Volubilis. Far fewer tourists
                    than Chefchaouen but equally photogenic whitewashed buildings with green-tiled roofs against rolling hills.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Dades Valley Rose Fields</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    In April and May, the Dades Valley blooms with millions of pink Damask roses. The annual Rose Festival in
                    Kelaat M&apos;Gouna offers cultural photography alongside the stunning pink landscapes against red canyon walls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Camera Gear Recommendations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Focus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camera Gear Recommendations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to pack for a Morocco photography trip, from essential lenses to accessories
            that handle the country&apos;s sand, dust, and diverse conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gearRecommendations.map((gear, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${gear.essential ? 'bg-green-50' : 'bg-[var(--surface-muted)]'}`}>
                    {gear.essential ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Star className="w-4 h-4 text-[var(--color-gold)]" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {gear.item}
                      {gear.essential && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700">Essential</span>
                      )}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{gear.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Smartphone Photography in Morocco
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Modern smartphones like the iPhone 16 Pro or Samsung Galaxy S25 Ultra produce excellent Morocco photos.
                  Wide-angle lenses capture narrow medina alleys perfectly, night mode handles low-light souks well, and
                  portrait mode creates beautiful bokeh for detail shots. Smartphones are also less intimidating than large
                  cameras when asking locals for portraits. Consider a phone gimbal for smooth video in bustling market scenes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Etiquette in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respectful photography creates better images and positive interactions. Understanding
            local customs is essential for any photographer visiting Morocco.
          </p>

          <div className="space-y-4">
            {etiquetteRules.map((item, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{item.rule}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Protecting Your Gear ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Protecting Your Camera Gear in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sand, dust, heat, and crowded medinas present unique challenges.
            These precautions keep your equipment safe throughout your trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Sand and Dust Protection</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    In the Sahara and desert regions, fine sand infiltrates everything. Use a rain cover on your camera,
                    change lenses inside a large ziplock bag, and keep a rocket blower handy. Never use compressed air
                    on sensors in dusty conditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Heat Management</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Summer temperatures exceed 40 degrees Celsius inland. Never leave cameras in direct sun or locked
                    vehicles. Batteries drain faster in heat; carry at least two extras. Store memory cards in a cool
                    pouch to prevent data corruption.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Medina Safety</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    In crowded medinas, use a cross-body camera strap and keep your bag zipped and in front of you. Avoid
                    dangling expensive lenses from your neck. A small mirrorless body is less conspicuous than a large DSLR
                    in tight market alleys.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Insurance and Backup</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Ensure your gear is covered by travel insurance that includes photography equipment. Back up photos
                    daily to a portable SSD or cloud storage. Many riads offer reliable Wi-Fi for overnight cloud backups
                    of your memory cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Photography Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CloudSun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Seasons for Photography in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each season offers unique photographic opportunities. Plan your trip around the conditions
            and subjects that matter most to your creative vision.
          </p>

          <div className="card-moroccan overflow-hidden mb-8">
            <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Season</div>
              <div className="p-3 px-4">Sunrise</div>
              <div className="p-3 px-4">Sunset</div>
              <div className="p-3 px-4">Highlights</div>
              <div className="p-3 px-4">Best For</div>
            </div>
            {seasonalGuide.map((s, i) => (
              <div
                key={s.season}
                className={`grid grid-cols-5 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-semibold text-[var(--color-accent)]">{s.season}</div>
                <div className="p-3 px-4 text-[var(--text-primary)]">{s.sunrise}</div>
                <div className="p-3 px-4 text-[var(--text-primary)]">{s.sunset}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{s.highlights}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{s.bestFor}</div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Recommended: Spring or Autumn for Best Overall Conditions
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  March through May and September through November offer the ideal balance of comfortable
                  temperatures, clear skies, manageable crowds, and excellent light quality. Spring adds
                  wildflowers and almond blossoms to Atlas landscapes, while autumn brings warm atmospheric haze
                  that gives desert and mountain photos a moody, painterly quality. Both seasons allow
                  all-day shooting without the extreme heat that limits summer photography to early morning
                  and late evening windows only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tours in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Guided photography experiences led by local professionals who know the best angles,
            hidden locations, and optimal timing at each destination. Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {photoTours.map((tour, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{tour.name}</h3>
                    <div className="flex flex-wrap gap-3 mt-1 mb-2">
                      <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {tour.duration}
                      </span>
                      <span className="text-xs text-[var(--color-gold)] font-semibold">{tour.price}</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">{tour.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 card-moroccan p-5 bg-amber-50/50">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>Booking tip:</strong> Photography tours often have small group sizes (4-8 people) to ensure
                personalized guidance at each location. Book at least 2-3 weeks in advance during peak seasons
                (March-May and September-November). Many tour operators provide editing workshops in the evenings.
                Seasonal pricing can change; contact operators directly for current rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Drone Rules ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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

          <div className="mt-6 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Alternative to Drones: Elevated Viewpoints
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Given the difficulty of obtaining drone permits, consider Morocco&apos;s many natural elevated
                  viewpoints instead: the Spanish Mosque above Chefchaouen, Borj Nord overlooking Fes, rooftop
                  terraces across Marrakech, the hilltop above Ait Ben Haddou, and the Tizi n&apos;Tichka pass
                  through the Atlas Mountains. These provide stunning aerial-style perspectives legally and safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Common questions about photographing in Morocco, answered by experienced
            travel photographers who know the country well.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {faq.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Photography Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring Morocco photography with these in-depth companion guides covering
            tips, Instagram strategy, photo spots, and film locations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1">{guide.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] mt-2 font-medium">
                        Read guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
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
          <div className="card-moroccan p-8 md:p-12 bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-gold)]/5">
            <Camera className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Ready to Photograph Morocco?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
              From the Sahara&apos;s golden dunes to the blue alleys of Chefchaouen, Morocco offers
              a lifetime of photographic opportunities. Start planning your photography trip today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/morocco-photography-tips"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-medium"
              >
                Photography Tips <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/morocco-instagram-spots"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-medium"
              >
                Instagram Spots <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

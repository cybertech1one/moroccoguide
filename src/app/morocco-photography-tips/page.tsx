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
  Aperture,
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
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Photography Tips 2026 | Best Photo Spots & Camera Guide',
  description:
    'Complete Morocco photography guide for 2026. Best photo spots in Marrakech, Fes, Chefchaouen, Sahara & Essaouira. Golden hour timing, etiquette, gear tips, drone rules, Instagram spots, and phone photography advice for stunning Moroccan photos.',
  keywords: [
    'Morocco photography tips',
    'best photo spots Morocco',
    'Morocco photography guide',
    'Morocco Instagram spots',
    'Chefchaouen photography',
    'Sahara desert photography',
    'Marrakech photo spots',
    'Morocco camera gear',
    'Morocco drone rules',
    'Morocco golden hour',
    'Morocco photography etiquette',
    'Fes photography',
    'Essaouira photography',
    'Morocco phone photography',
    'Morocco travel photography',
    'Morocco landscape photography',
    'Morocco street photography',
    'best time to photograph Morocco',
    'Morocco photography 2026',
  ],
  openGraph: {
    title: 'Morocco Photography Tips 2026 | Best Photo Spots & Camera Guide',
    description:
      'Top photo spots, golden hour timing, etiquette rules, gear recommendations, drone regulations, and phone photography tips for capturing Morocco at its best.',
    url: `${BASE_URL}/morocco-photography-tips`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-photography.webp`,
        width: 1200,
        height: 630,
        alt: 'Photographer capturing the blue streets of Chefchaouen Morocco during golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Photography Tips | Best Photo Spots 2026',
    description:
      'Photo spots, golden hour, etiquette, gear, drone rules & Instagram tips for photographing Morocco.',
    images: [`${BASE_URL}/images/hero-morocco-photography.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-photography-tips` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-photography-tips`,
  name: 'Morocco Photography Tips 2026 | Best Photo Spots & Camera Guide',
  description:
    'Comprehensive photography guide for Morocco covering the best photo spots by city, golden hour timing, photography etiquette, camera gear recommendations, drone regulations, Instagram spots, and phone photography tips.',
  url: `${BASE_URL}/morocco-photography-tips`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-photography-tips`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Photography Tips', item: `${BASE_URL}/morocco-photography-tips` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I fly a drone in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drone use in Morocco is heavily restricted. You need authorization from the Moroccan Civil Aviation Authority (Direction Generale de l\'Aviation Civile) before flying. Unauthorized drone flights can result in confiscation of equipment and fines. Drones are prohibited near military sites, airports, royal palaces, and government buildings. Many tourists have had drones confiscated at customs. Apply for permits well in advance if you plan to use a drone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need permission to photograph people in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you should always ask permission before photographing people in Morocco. It is both a cultural expectation and a sign of respect. Some people will happily pose, others may request a small tip of from 5-10 MAD, and some will decline. Never photograph women without explicit consent. Avoid photographing children without parental permission. In souks, some vendors welcome photos while others do not want their stalls photographed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of day for photography in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The golden hours are the best times for photography in Morocco. Sunrise (around 6:00-7:30 AM depending on season) and the hour before sunset (around 5:00-7:00 PM) provide warm, directional light that is ideal for landscapes, architecture, and portraits. In medinas, early morning (7-9 AM) is perfect as light filters through narrow alleys. Midday sun is harsh and creates strong shadows, but works well for the blue streets of Chefchaouen.',
      },
    },
    {
      '@type': 'Question',
      name: 'What camera gear should I bring to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Morocco photography, bring a versatile zoom lens (24-70mm or equivalent) for medina streets and architecture, a wide-angle lens (16-35mm) for interior courtyards and narrow alleys, and optionally a telephoto (70-200mm) for desert landscapes and detail shots. A lightweight tripod is essential for sunrise and sunset shots. Bring dust-proof bags for desert excursions, lens cleaning cloths, and extra batteries as heat drains them faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are the most Instagram-worthy spots in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most photographed spots in Morocco include the blue streets of Chefchaouen, Jardin Majorelle in Marrakech, the Fes tanneries viewed from surrounding terraces, Erg Chebbi sand dunes in the Sahara, the kasbah of Ait Benhaddou, Essaouira ramparts at sunset, Hassan II Mosque in Casablanca, and the ornate riads of Marrakech. For unique shots, visit Legzira beach arches near Sidi Ifni and the Ouzoud waterfalls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I photograph inside mosques in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-Muslims cannot enter most mosques in Morocco, with the notable exception of Hassan II Mosque in Casablanca which offers guided tours and allows interior photography. You can photograph mosque exteriors freely. Madrasas (Islamic schools) that are open as museums, such as Bou Inania and Al-Attarine in Fes and Ben Youssef in Marrakech, allow photography inside. Be respectful and avoid using flash near worshippers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco good for phone photography?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is excellent for phone photography. Modern smartphones with night mode, portrait mode, and wide-angle lenses capture stunning images in Morocco. The vibrant colors of souks, blue streets of Chefchaouen, and dramatic desert landscapes are ideal for phone cameras. A phone is also less conspicuous for street photography. Bring a portable battery pack as the camera drains battery quickly, and consider a phone tripod mount for stable sunset and night shots.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTO SPOTS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const cityPhotoSpots = [
  {
    city: 'Marrakech',
    icon: Star,
    color: 'amber',
    spots: [
      { name: 'Jemaa el-Fna at sunset', detail: 'Climb a rooftop cafe for panoramic views of the square as smoke rises from food stalls at dusk' },
      { name: 'Jardin Majorelle', detail: 'Iconic cobalt blue buildings and lush gardens; arrive at opening (8 AM) to avoid crowds; entry from 70 MAD' },
      { name: 'Ben Youssef Madrasa', detail: 'Intricate Islamic geometric patterns, carved stucco, and a stunning courtyard; photography allowed inside' },
      { name: 'Bahia Palace', detail: 'Ornate zellige tilework, painted cedar ceilings, and peaceful gardens; best light in late afternoon' },
      { name: 'Souk Semmarine', detail: 'Colorful spice pyramids, leather goods, and hanging lanterns make this the most photogenic souk in Morocco' },
      { name: 'Saadian Tombs', detail: 'Beautiful carved marble and tilework in intimate chambers; morning light filters through windows perfectly' },
    ],
  },
  {
    city: 'Fes',
    icon: Eye,
    color: 'blue',
    spots: [
      { name: 'Chouara Tannery', detail: 'The iconic dye vats viewed from leather shop terraces above; morning offers the best light and fewer crowds' },
      { name: 'Bou Inania Madrasa', detail: 'Masterpiece of Marinid architecture with zellige, carved stucco, and cedar woodwork; from 20 MAD entry' },
      { name: 'Al-Attarine Madrasa', detail: 'Smaller but equally stunning; the central courtyard fountain framed by ornate arches is unforgettable' },
      { name: 'Bab Bou Jeloud (Blue Gate)', detail: 'The photogenic blue-tiled entrance to the Fes medina; best shot from the plaza side at golden hour' },
      { name: 'Fes medina streets', detail: 'Narrow alleys with donkeys, artisans, and shaft of light; early morning (7-8 AM) before crowds is ideal' },
      { name: 'Borj Nord viewpoint', detail: 'Panoramic hilltop view over the entire Fes medina; spectacular at sunrise and sunset' },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Layers,
    color: 'sky',
    spots: [
      { name: 'Blue-painted medina streets', detail: 'Every corner is a photo opportunity; best light on east-facing walls in morning, west-facing in afternoon' },
      { name: 'Plaza Uta el-Hammam', detail: 'The main square with the kasbah and Grand Mosque; photograph from cafe terraces for the best angle' },
      { name: 'Spanish Mosque viewpoint', detail: 'A 20-minute uphill walk rewards you with panoramic views of the blue city against the Rif Mountains at sunset' },
      { name: 'Ras el-Maa waterfall', detail: 'Where locals wash clothes and carpets; a colorful scene with mountain backdrop at the edge of the medina' },
      { name: 'Stairway streets', detail: 'The narrow stepped alleys with blue walls, potted plants, and cats are the most iconic Chefchaouen shots' },
      { name: 'Kasbah gardens', detail: 'The interior garden with its blue-washed walls and Andalusian-style plantings; entry from 10 MAD' },
    ],
  },
  {
    city: 'Sahara Desert',
    icon: Sun,
    color: 'orange',
    spots: [
      { name: 'Erg Chebbi dunes', detail: 'Towering dunes near Merzouga reaching 150 meters; sunrise from the top of a dune is a must-photograph moment' },
      { name: 'Camel caravan silhouettes', detail: 'Late afternoon caravans against the setting sun create the classic Sahara image; use a telephoto lens' },
      { name: 'Ait Benhaddou kasbah', detail: 'UNESCO World Heritage fortified village used in Gladiator and Game of Thrones; best light in early morning' },
      { name: 'Star trails at desert camps', detail: 'Zero light pollution makes the Sahara perfect for astrophotography; bring a sturdy tripod and remote shutter' },
      { name: 'Todra Gorge', detail: '300-meter canyon walls with a river running through; midday light illuminates the narrow gorge floor' },
      { name: 'Draa Valley palm groves', detail: 'Lush oasis contrasting with barren mountains; best captured from elevated viewpoints along the road' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Compass,
    color: 'teal',
    spots: [
      { name: 'Ramparts at sunset', detail: 'The 18th-century Portuguese fortifications glow golden at sunset with Atlantic waves crashing below' },
      { name: 'Fishing port', detail: 'Blue boats, seagulls, and fishermen mending nets; early morning (7-8 AM) for the most authentic activity' },
      { name: 'Skala de la Ville', detail: 'Row of bronze cannons along the sea wall with views to Mogador Island; dramatic in stormy weather' },
      { name: 'Medina doorways', detail: 'Blue and white painted doors with ornate knockers; the medina is smaller and easier to explore than Marrakech' },
      { name: 'Beach and windsurfers', detail: 'Wide sandy beach with colorful kites and windsurfers; late afternoon light with the medina silhouette behind' },
      { name: 'Thuya wood workshops', detail: 'Artisans carving intricate designs from aromatic thuya wood; ask permission before photographing inside workshops' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLDEN HOUR & LIGHT
   ═══════════════════════════════════════════════════════════════ */

const goldenHourTips = [
  { season: 'Spring (Mar-May)', sunrise: '6:30 - 7:00 AM', sunset: '6:30 - 7:30 PM', note: 'Clear skies and moderate temperatures make this the best season for photography' },
  { season: 'Summer (Jun-Aug)', sunrise: '6:00 - 6:30 AM', sunset: '7:30 - 8:00 PM', note: 'Harsh midday light; shoot early morning or late afternoon only' },
  { season: 'Autumn (Sep-Nov)', sunrise: '6:30 - 7:00 AM', sunset: '5:30 - 7:00 PM', note: 'Warm tones and soft haze create atmospheric desert and mountain shots' },
  { season: 'Winter (Dec-Feb)', sunrise: '7:00 - 7:30 AM', sunset: '5:00 - 6:00 PM', note: 'Low-angle sun all day; great for long shadows and dramatic light in medinas' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  { rule: 'Always ask permission before photographing people', detail: 'A simple "photo?" with a gesture toward your camera is universally understood. Smile and be respectful of refusals. Some subjects may request from 5-10 MAD, which is fair compensation for their time.', icon: Users },
  { rule: 'Never photograph women without explicit consent', detail: 'This is especially important in conservative areas and rural villages. Photographing women without permission can cause serious offense and confrontation. When in doubt, do not photograph.', icon: Shield },
  { rule: 'Avoid photographing military and police installations', detail: 'Photographing military bases, police stations, government buildings, and royal palaces is prohibited and can result in detention, equipment confiscation, or fines.', icon: AlertTriangle },
  { rule: 'Be discreet in religious areas', detail: 'Non-Muslims cannot enter most mosques. When photographing mosque exteriors, be respectful of worshippers. At madrasas open to tourists, avoid using flash and keep noise down.', icon: Heart },
  { rule: 'Ask before photographing in shops and workshops', detail: 'Many artisans and vendors welcome photos as it promotes their work. Others prefer privacy. A quick "photo okay?" before shooting inside workshops or stalls is good practice.', icon: CheckCircle },
  { rule: 'Do not photograph children without parental consent', detail: 'While Moroccan children are often enthusiastic about being photographed, always seek a parent or guardian nearby and get their permission first.', icon: Info },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GEAR RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const gearRecommendations = [
  { item: 'Versatile zoom lens (24-70mm)', purpose: 'The ideal all-around lens for medina streets, architecture, food, and portraits. Covers most situations in one lens.' },
  { item: 'Wide-angle lens (16-35mm)', purpose: 'Essential for narrow medina alleys, grand mosque interiors, riad courtyards, and sweeping desert landscapes.' },
  { item: 'Telephoto lens (70-200mm)', purpose: 'Perfect for desert dune details, mountain landscapes, tannery shots from above, and candid street scenes from a respectful distance.' },
  { item: 'Lightweight travel tripod', purpose: 'Required for golden hour, blue hour, star trails in the Sahara, and low-light medina shots. Carbon fiber models save weight.' },
  { item: 'Dust-proof camera bag', purpose: 'Fine Saharan sand penetrates everything. A sealed camera bag with rain cover protects gear in the desert and during sandstorms.' },
  { item: 'Lens cleaning kit', purpose: 'Bring microfiber cloths, a blower brush, and lens cleaning solution. Sand and dust are constant companions in Morocco.' },
  { item: 'Extra batteries and memory cards', purpose: 'Heat drains batteries faster. Carry at least 2-3 spares. Pack more memory cards than you think you need; Morocco is incredibly photogenic.' },
  { item: 'Polarizing filter', purpose: 'Reduces glare on water and zellige tiles, deepens blue skies, and cuts haze in mountain and desert landscapes.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRONE RULES
   ═══════════════════════════════════════════════════════════════ */

const droneRules = [
  'Drone flights require prior authorization from the Direction Generale de l\'Aviation Civile (DGAC) in Morocco',
  'Apply for permits at least 4-6 weeks before your trip; the process can be slow and approval is not guaranteed',
  'Drones are strictly prohibited near airports, military installations, royal palaces, and government buildings',
  'Many tourists have had drones confiscated at customs when entering Morocco without a permit',
  'Even with a permit, flying over medinas, mosques, and crowded areas is prohibited for safety and privacy',
  'Penalties for unauthorized drone use include equipment confiscation, fines, and in serious cases, detention',
  'Consider hiring a licensed local drone operator if you need aerial footage; they have existing permits',
  'Some desert camps and remote locations may allow drone flights with proper permits; always confirm locally',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INSTAGRAM SPOTS
   ═══════════════════════════════════════════════════════════════ */

const instagramSpots = [
  { spot: 'Le Jardin Secret, Marrakech', tip: 'Restored riad garden with Islamic geometry and water features; less crowded than Majorelle; from 50 MAD entry' },
  { spot: 'Blue stairways, Chefchaouen', tip: 'Arrive before 9 AM for empty streets; the stepped alleys with potted plants are the most shared Chefchaouen images' },
  { spot: 'Fes tannery rooftop terraces', tip: 'Free access through leather shops above; bring mint to hold under your nose for the smell; morning light is best' },
  { spot: 'Hassan II Mosque, Casablanca', tip: 'The largest mosque in Africa sits on the Atlantic; photograph from the esplanade at sunset for dramatic light' },
  { spot: 'Erg Chebbi sunrise, Merzouga', tip: 'Wake before dawn and climb a dune; the shifting colors from deep blue to gold are unforgettable' },
  { spot: 'Essaouira ramparts', tip: 'The cannon-lined sea walls at golden hour with crashing waves; one of the most dramatic coastal shots in Morocco' },
  { spot: 'Ait Benhaddou, Ouarzazate', tip: 'The UNESCO kasbah reflected in the river; cross the footbridge for the classic postcard angle; best light in morning' },
  { spot: 'Ouzoud Waterfalls', tip: 'The tallest waterfalls in North Africa surrounded by olive groves and Barbary macaques; rainbow appears in spray at midday' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHONE PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const phoneTips = [
  'Use portrait mode for people shots in souks and against colorful walls; modern phones create beautiful background blur',
  'Switch to wide-angle mode for narrow medina alleys, grand interiors, and sweeping desert panoramas',
  'Enable HDR for high-contrast scenes like bright courtyards seen through dark doorways',
  'Use night mode for atmospheric evening shots in Jemaa el-Fna, lit-up medina alleys, and Sahara starscapes',
  'Clean your lens frequently; Morocco is dusty and fingerprints reduce sharpness and add haze to images',
  'Use gridlines (rule of thirds) to compose more balanced and visually appealing shots of architecture and landscapes',
  'Bring a compact phone tripod and Bluetooth remote for stable golden hour, sunset, and long-exposure shots',
  'Edit on the go with free apps like Snapseed or Lightroom Mobile to enhance colors and adjust exposure before sharing',
  'Carry a portable battery pack (at least 10,000 mAh); camera use, GPS, and editing drain phone batteries fast',
  'Use burst mode for action shots like galloping horses in Essaouira, bustling souks, or camel caravans in the desert',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMPOSITION TIPS
   ═══════════════════════════════════════════════════════════════ */

const compositionTips = [
  { tip: 'Use doorways and arches as frames', detail: 'Morocco is full of ornate archways, carved doorways, and keyhole-shaped openings. Position your subject inside the frame for depth and context.' },
  { tip: 'Look for leading lines in medinas', detail: 'Narrow alleys, tiled floors, rows of arches, and carpet-draped walls all create natural leading lines that draw the viewer into the image.' },
  { tip: 'Include scale in desert shots', detail: 'Sahara dunes look flat without a sense of scale. Include a person, camel, or camp to show how massive the dunes truly are.' },
  { tip: 'Shoot reflections in fountains and pools', detail: 'Riad courtyards, mosque fountains, and irrigation channels offer mirror-like reflections of ornate architecture, especially in still morning air.' },
  { tip: 'Layer foreground, middle, and background', detail: 'In landscapes, include a foreground element (flowers, rocks, arches) to create depth. This works especially well at Ait Benhaddou and mountain viewpoints.' },
  { tip: 'Capture patterns and details', detail: 'Zellige tilework, carved stucco, wooden lattice screens, and woven textiles offer stunning abstract compositions when photographed close up.' },
  { tip: 'Use color contrast to your advantage', detail: 'Orange spices against blue walls, green mint tea on brass trays, red rugs in white courtyards: Morocco is a masterclass in complementary colors.' },
  { tip: 'Photograph from above and below', detail: 'Climb to rooftop terraces for bird-eye medina views, or crouch low to capture dramatic upward angles of minarets, doorways, and palm trees.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PROTECT YOUR GEAR
   ═══════════════════════════════════════════════════════════════ */

const gearProtection = [
  { situation: 'Sahara Desert', risk: 'Fine sand penetrates every opening and can damage sensors, lens mechanisms, and moving parts', solution: 'Use sealed camera bags, change lenses inside a large plastic bag, and wipe gear with microfiber cloth after each session. A UV filter protects the front element.' },
  { situation: 'Medina crowds', risk: 'Bumping, pickpocketing, and accidental damage in tight alleys with donkey traffic', solution: 'Use a cross-body camera strap, keep gear in a discreet bag (not a flashy camera backpack), and keep one hand on your bag in crowded souks.' },
  { situation: 'Summer heat', risk: 'Batteries drain 2-3x faster in extreme heat, and prolonged sun exposure can damage sensors', solution: 'Store batteries in a cool, shaded place. Never leave camera gear in direct sunlight or a parked car. Carry at least 3 spare batteries in summer.' },
  { situation: 'Coastal humidity', risk: 'Salt spray and humidity in Essaouira and coastal cities can corrode metal parts and fog lenses', solution: 'Wipe gear with a damp cloth after coastal shoots, use silica gel packets in your camera bag, and avoid changing lenses in sea spray.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/photography-guide',
    title: 'Morocco Photography Guide',
    description: 'In-depth guide to photographing Morocco with location-specific advice and seasonal tips.',
    icon: Camera,
  },
  {
    href: '/photo-spots',
    title: 'Best Photo Spots in Morocco',
    description: 'Curated collection of the most photogenic locations across every region of Morocco.',
    icon: Image,
  },
  {
    href: '/chefchaouen',
    title: 'Chefchaouen Guide',
    description: 'Complete guide to the Blue City including photography spots, accommodation, and getting there.',
    icon: Layers,
  },
  {
    href: '/sahara',
    title: 'Sahara Desert Guide',
    description: 'Everything you need for a desert trip: tours, camps, camel treks, and photography opportunities.',
    icon: Sun,
  },
  {
    href: '/marrakech',
    title: 'Marrakech City Guide',
    description: 'Full guide to Marrakech including souks, palaces, gardens, and the best rooftop viewpoints.',
    icon: Star,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPhotographyTipsPage() {
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
            <span className="text-white">Morocco Photography Tips</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Camera className="w-4 h-4" />
            Photography Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Photography Tips
            <br className="hidden md:block" /> for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">
            Capture stunning images across Morocco. From the blue streets of Chefchaouen to Sahara
            sunrises, discover the best photo spots, golden hour timing, etiquette, and gear advice.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 30+ Photo Spots</span>
            <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5" /> Golden Hour Guide</span>
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Etiquette Rules</span>
            <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5" /> Phone Tips</span>
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
                Morocco is one of the most photogenic countries on Earth. Every corner reveals a new composition
                &mdash; the electric blue walls of Chefchaouen, the swirling colors of Marrakech&apos;s souks,
                the dramatic curves of Sahara sand dunes, the intricate zellige tilework of ancient madrasas,
                and the rugged beauty of the Atlas Mountains. Whether you carry a professional DSLR or the
                latest smartphone, Morocco delivers visual richness that few destinations can match.
              </p>
              <p>
                But great Morocco photography requires more than pointing and shooting. Understanding the light,
                respecting local customs around photography, knowing when and where to shoot, and preparing the
                right gear for dusty medinas and sandy deserts will transform your images from tourist snapshots
                into portfolio-worthy photographs.
              </p>
              <p>
                This guide covers everything: the best photo spots in each major city, golden hour timing by
                season, photography etiquette that keeps you respectful and out of trouble, camera gear
                recommendations, Morocco&apos;s strict drone rules, the most Instagram-worthy locations, and
                practical tips for getting stunning results with just your phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Photo Spots by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Photo Spots by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The top photography locations in Morocco&apos;s most photogenic cities and regions, with
            practical tips for getting the best shots at each spot.
          </p>

          <div className="space-y-8">
            {cityPhotoSpots.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {city.city}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {city.spots.map((spot, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">{spot.name}</p>
                          <p className="text-xs text-[var(--text-muted)] mt-1">{spot.detail}</p>
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

      {/* ── Golden Hour & Light ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Light &amp; Golden Hour Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing is everything in photography. Morocco&apos;s golden hour shifts with the seasons &mdash;
            plan your shoots around these windows for the best light.
          </p>

          <div className="card-moroccan overflow-hidden mb-8">
            <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Season</div>
              <div className="p-3 px-4">Sunrise</div>
              <div className="p-3 px-4">Sunset</div>
              <div className="p-3 px-4">Notes</div>
            </div>
            {goldenHourTips.map((tip, i) => (
              <div
                key={tip.season}
                className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-semibold text-[var(--color-accent)]">{tip.season}</div>
                <div className="p-3 px-4 text-[var(--text-primary)]">{tip.sunrise}</div>
                <div className="p-3 px-4 text-[var(--text-primary)]">{tip.sunset}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{tip.note}</div>
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
                  The 20-30 minutes after sunset (blue hour) is magical in Chefchaouen. The blue-painted
                  walls take on an ethereal glow in the fading light, and the sky turns deep indigo behind
                  the Rif Mountains. Use a tripod and long exposure for dreamy, saturated blue images that
                  stand out from the typical daytime shots everyone else captures.
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
                    Medina Light Shafts
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    In narrow medina alleys, dramatic shafts of light appear between 9 AM and 11 AM as the
                    sun rises above the buildings. These beams of light cutting through the shadows create
                    the most atmospheric medina photographs. Position yourself where you can see a beam
                    illuminating a figure, doorway, or colorful wall.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Desert Photography Light
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    In the Sahara, the hour after sunrise and before sunset creates long shadows across
                    the dune ridgelines that reveal texture and depth. Midday sun flattens the dunes
                    completely. For star photography, the new moon period offers the darkest skies and
                    the Milky Way is visible from March through October.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Etiquette in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respectful photography opens doors. Understanding these rules ensures you capture authentic
            moments while maintaining the trust and dignity of the people you photograph.
          </p>

          <div className="space-y-5">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {rule.rule}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Tip: Show Your Photos
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  After photographing someone, show them the image on your camera screen. This simple gesture
                  creates a moment of connection and almost always results in smiles, laughter, and sometimes
                  an invitation for more photos. It transforms a transaction into a genuine human interaction
                  and is one of the most rewarding aspects of photographing in Morocco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gear Recommendations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Aperture className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camera Gear Recommendations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to pack for photographing Morocco, from lenses and tripods to essential accessories
            for dusty medinas and sandy deserts.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-5">
              {gearRecommendations.map((gear, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{gear.item}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{gear.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">Budget tip:</span> If you do not
                own specialty lenses, consider renting before your trip. A 2-week lens rental costs a fraction
                of buying, and you can test lenses you are considering purchasing. Alternatively, a high-quality
                superzoom (24-200mm) covers most Morocco photography needs in a single lens.
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
            Morocco has strict drone regulations. Understand the rules before bringing your drone to
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
                your trip. The risk of confiscation at customs or during use is high, and the bureaucratic
                process to recover confiscated equipment can take months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Instagram Spots ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Image className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Instagram-Worthy Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most-shared Morocco photography locations on social media, with insider tips
            for getting the perfect shot at each one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {instagramSpots.map((item, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Camera className="w-4 h-4 text-[var(--color-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.spot}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{item.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phone Photography Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Smartphone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Phone Photography Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            You do not need an expensive camera to capture stunning Morocco photos. Modern smartphones
            are incredibly capable &mdash; here is how to get the most from yours.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {phoneTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Composition Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Composition Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Elevate your Morocco photos with these composition techniques tailored to the
            unique architecture, landscapes, and visual richness of the country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {compositionTips.map((item, i) => (
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
        </div>
      </section>

      {/* ── Protect Your Gear ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Protecting Your Gear in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s diverse environments &mdash; from sandy deserts to humid coasts &mdash; present
            unique challenges for camera equipment. Here is how to keep your gear safe.
          </p>

          <div className="space-y-5">
            {gearProtection.map((item, i) => (
              <div key={i} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.situation}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      <span className="font-semibold">Risk:</span> {item.risk}
                    </p>
                    <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Solution:</span> {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            Common questions about photography in Morocco, answered with practical advice.
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

      {/* ── Quick Reference Summary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Reference: Morocco Photography Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most important things to remember, at a glance. Save or screenshot this section for easy reference during your trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Sunrise className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Golden Hour
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Shoot at sunrise and 1 hour before sunset for the best light across all locations</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Always Ask
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Get permission before photographing people; expect to tip from 5-10 MAD for posed portraits</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                No-Photo Zones
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Never photograph military sites, police, government buildings, or royal palaces</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Aperture className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Protect Gear
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Dust-proof bags are essential; carry lens cloths, extra batteries, and a polarizing filter</p>
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
            Explore more in-depth guides to specific destinations and photography topics in Morocco.
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
              Ready to Capture Morocco?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
              From the ancient medinas to the endless Sahara, Morocco offers a lifetime of photographic
              opportunities. Start planning your photography trip today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/marrakech"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <MapPin className="w-4 h-4" />
                Explore Marrakech
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

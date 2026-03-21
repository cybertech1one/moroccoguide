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
  CheckCircle,
  Users,
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
  Moon,
  Palette,
  Focus,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Photography Guide 2026 | Best Photo Spots, Tips & Locations',
  description:
    'Complete Morocco photography guide for 2026. Best photo locations in Chefchaouen, Marrakech, Sahara, and Essaouira. Golden hour timing, gear tips, drone rules, night photography, street photography etiquette, and editing Moroccan colors.',
  keywords: [
    'morocco photography guide',
    'morocco photography locations',
    'best photo spots morocco',
    'morocco photography tips 2026',
    'chefchaouen photography',
    'marrakech photo spots',
    'sahara desert photography',
    'morocco street photography',
    'morocco landscape photography',
    'morocco drone regulations',
    'night photography morocco',
    'morocco golden hour',
    'photographing people morocco',
    'morocco photo tours',
    'editing moroccan colors',
    'morocco camera gear',
    'atlas mountains photography',
    'essaouira photography',
    'morocco astrophotography',
    'morocco photography workshops',
  ],
  openGraph: {
    title: 'Morocco Photography Guide 2026 | Best Photo Spots, Tips & Locations',
    description:
      'From Chefchaouen blue streets to Sahara sunrises. Expert photography tips, top locations, drone rules, night sky shooting, and cultural etiquette for photographers in Morocco.',
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
      'Complete guide to photographing Morocco. Best locations, golden hour spots, night photography, drone rules, etiquette, and editing tips.',
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
  name: 'Morocco Photography Guide 2026',
  description:
    'Complete Morocco photography guide covering best photo locations, golden hour timing, gear recommendations, drone regulations, photographing people, night photography, and editing Moroccan colors.',
  url: `${BASE_URL}/morocco-photography-guide`,
  image: `${BASE_URL}/images/hero-chefchaouen.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-photography-guide`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
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
        text: 'Yes, always ask permission before photographing people in Morocco, especially women, children, and the elderly. A polite "Mumkin sura?" (Can I take a photo?) is appreciated. Many Moroccans will happily pose, but respect anyone who declines. In tourist areas, some people expect a small tip of 5-20 MAD for posing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fly a drone in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drone use in Morocco requires prior authorization from the Direction Generale de l\'Aviation Civile (DGAC). Many travelers have had drones confiscated at customs. Flying near military installations, royal palaces, government buildings, and airports is strictly prohibited. Apply for permits well in advance or leave your drone at home.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to photograph Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) offer the best conditions. Spring brings wildflowers in the Atlas Mountains and pleasant temperatures. Autumn delivers golden light and harvest scenes. Winter is excellent for the Sahara with clear skies, while summer brings long golden hours on the coast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to carry expensive camera gear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for photographers. Use a cross-body camera strap, keep gear in a discreet bag rather than a branded camera backpack, and be aware of your surroundings in crowded medinas. Avoid displaying expensive equipment unnecessarily and consider travel insurance covering camera equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I photograph mosques in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can freely photograph mosque exteriors. Non-Muslims cannot enter most mosques in Morocco, though the Hassan II Mosque in Casablanca is a notable exception. Respect worshippers and avoid photographing people during prayer. Minarets, doorways, and geometric tilework make excellent architectural subjects from the outside.',
      },
    },
    {
      '@type': 'Question',
      name: 'What camera gear should I bring to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A versatile zoom lens (24-70mm) covers most situations. Add a wide-angle (16-35mm) for architecture and narrow medina streets, and a fast prime (35mm or 50mm f/1.8) for low-light alleys. Bring a polarizing filter, sensor cleaning kit for desert dust, and extra batteries. A lightweight travel tripod is essential for night photography.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do photography tours in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photography tours range from 500 MAD for a half-day city walk with a local photographer to from 25,000 MAD for multi-day guided expeditions. Group workshops are from 2,000 MAD per day, while private sessions start from 1,500 MAD per half-day. Seasonal pricing may apply.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I photograph the Sahara night sky without special equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern smartphones can capture the Milky Way with night mode in the Sahara, though results vary. For serious astrophotography, you need a camera with manual settings, a fast wide-angle lens (f/2.8 or wider), and a sturdy tripod. The Sahara offers Bortle 1-2 skies, among the darkest on Earth, making even basic setups produce striking star images.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP PHOTO LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const topLocations = [
  {
    city: 'Chefchaouen',
    icon: Image,
    image: '/images/hero-chefchaouen.webp',
    description:
      'Morocco\'s most photographed city is a labyrinth of blue-washed walls, vibrant doorways, and cascading flower pots. Every corner presents a new composition. The real magic lies beyond the main tourist alleys, in quieter residential streets where the blue palette deepens and local life unfolds undisturbed.',
    spots: [
      'Plaza Uta el-Hammam for the central blue square framed by the kasbah',
      'Ras el-Maa waterfall area for locals washing clothes in blue surroundings',
      'Spanish Mosque hilltop for sweeping sunset panoramas over the blue medina',
      'Residential side streets for authentic door and window compositions',
      'Akchour Waterfalls for nature photography a short day trip from town',
    ],
    bestTime: 'Sunrise (6-8 AM) for empty streets, late afternoon for warm light on blue walls',
  },
  {
    city: 'Marrakech',
    icon: Landmark,
    image: '/images/hero-marrakech.webp',
    description:
      'The Red City delivers sensory overload for photographers. From the chaos of Jemaa el-Fnaa at sunset to serene riad courtyards, Marrakech offers endless compositions. Light and shadow play through narrow medina alleys at every hour, and the souks burst with color from spice pyramids to leather goods.',
    spots: [
      'Jemaa el-Fnaa at golden hour for food stalls, performers, and smoke trails',
      'Ben Youssef Madrasa for intricate Islamic geometric patterns and stucco',
      'Jardin Majorelle for cobalt-blue walls and cacti against terracotta paths',
      'Bahia Palace for zellige tilework and painted cedarwood ceilings',
      'Medina rooftop terraces for panoramic views with minarets against the Atlas',
    ],
    bestTime: 'Early morning (7-9 AM) before crowds, golden hour (5-7 PM) for warm tones',
  },
  {
    city: 'Merzouga & the Sahara',
    icon: Sun,
    image: '/images/hero-sahara.webp',
    description:
      'The Erg Chebbi dunes near Merzouga are Morocco\'s ultimate landscape photography destination. Sand dunes reaching 150 meters shift from gold to orange to deep red as the sun moves. Camel caravans, starlit skies, and vast emptiness create images of timeless scale and beauty.',
    spots: [
      'Erg Chebbi dune crests for sunrise silhouettes and rippled shadow patterns',
      'Camel caravan trails for classic Sahara compositions with long shadows',
      'Desert camps at night for astrophotography and Milky Way panoramas',
      'Dried lake beds after rare rain for mirror reflections of dune ridges',
      'Nomad encampments for portraits and cultural documentary photography',
    ],
    bestTime: 'Sunrise (5:30-7 AM) and sunset (6-7:30 PM) for dramatic dune shadows',
  },
  {
    city: 'Fez',
    icon: Building,
    image: '/images/hero-fes.webp',
    description:
      'The world\'s largest car-free urban zone is a labyrinthine photographer\'s paradise. Shafts of light pierce narrow covered passages, donkeys carry goods through medieval streets, and artisans practice trades unchanged for centuries. Fez el-Bali feels raw and unpolished compared to Marrakech.',
    spots: [
      'Chouara Tanneries from surrounding terrace viewpoints (best at midday)',
      'Bou Inania Madrasa for carved stucco and cedarwood detail shots',
      'Bab Boujloud (Blue Gate) for the iconic entrance composition',
      'Metalwork and dye souks for vibrant color and artisan portraits',
      'Nejjarine Fountain and Museum for traditional woodworking scenes',
    ],
    bestTime: 'Mid-morning (9-11 AM) when light enters the medina alleys',
  },
  {
    city: 'Essaouira',
    icon: Compass,
    image: '/images/hero-essaouira.webp',
    description:
      'This windswept Atlantic port city offers a different palette entirely: whitewashed walls with blue shutters, weathered fishing boats, swooping seagulls, and dramatic coastal light. The golden hour along the ramparts and harbor is legendary among travel photographers.',
    spots: [
      'Skala de la Ville ramparts for sunset over the Atlantic with cannons silhouetted',
      'Harbor with blue fishing boats and gulls against whitewashed walls',
      'Medina doorways with the distinctive blue-and-white color scheme',
      'Beach at low tide for reflections and kite-surfer silhouettes',
      'Thuya wood workshops for artisan documentary photography',
    ],
    bestTime: 'Late afternoon (4-6 PM) for golden light on the ramparts and harbor',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLDEN HOUR & BLUE HOUR
   ═══════════════════════════════════════════════════════════════ */

const goldenHourSpots = [
  { location: 'Ait Benhaddou Kasbah', type: 'Golden Hour', icon: Sun, description: 'The UNESCO kasbah glows amber as the setting sun hits rammed-earth walls. Shoot from across the river for the classic reflection shot, or climb to the top for 360-degree views.', timing: 'Sunset, facing west from the opposite riverbank' },
  { location: 'Todra Gorge', type: 'Golden Hour', icon: Mountain, description: 'The narrow gorge with 300-meter limestone walls catches golden light for a brief window. Warm tones bounce between canyon walls creating natural reflected fill light.', timing: 'Late afternoon when sunlight penetrates the gorge floor' },
  { location: 'Hassan II Mosque', type: 'Blue Hour', icon: Landmark, description: 'Morocco\'s most impressive mosque is stunning at blue hour when the minaret glows against a deep blue sky. The oceanfront setting adds dramatic wave motion to long exposures.', timing: '20-40 minutes after sunset for perfect blue-hour balance' },
  { location: 'Chefchaouen Spanish Mosque', type: 'Golden Hour', icon: Sun, description: 'The hilltop viewpoint shows the blue medina nestled in the Rif Mountains. Blue walls take on purple and lavender tones as the golden light deepens toward dusk.', timing: 'Sunset, arrive 45 minutes early to secure a good spot' },
  { location: 'Ouarzazate Valley', type: 'Golden Hour', icon: Sun, description: 'Vast landscapes of kasbahs, palm oases, and the distant Atlas Mountains bathed in warm evening light. The Draa Valley road is one of Morocco\'s most scenic drives.', timing: 'Both sunrise and sunset for different kasbah perspectives' },
  { location: 'Essaouira Ramparts', type: 'Blue Hour', icon: Landmark, description: 'The 18th-century fortifications provide dramatic silhouettes of cannons and arched openings. Crashing waves add motion and energy to long exposures.', timing: '30 minutes after sunset for deep blue skies and city lights' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GEAR RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const gearSections = [
  {
    category: 'Camera Bodies',
    icon: Camera,
    items: [
      'Mirrorless (Sony A7 IV, Canon R6 II, Nikon Z6 III): lightweight, excellent autofocus, strong low-light performance',
      'APS-C / Micro Four Thirds: lighter option for long travel days, still excellent image quality for web and print',
      'High-quality smartphone: modern computational photography produces stunning results, especially for social media',
      'Action camera (GoPro): useful for medina walk-throughs, water sports in Essaouira, and camel rides',
    ],
  },
  {
    category: 'Lenses',
    icon: Aperture,
    items: [
      'Wide-angle zoom (16-35mm): essential for architecture, riad interiors, landscapes, and narrow medina alleys',
      'Standard zoom (24-70mm): versatile workhorse lens covering street, portrait, and general travel shooting',
      'Short telephoto (70-200mm or 85mm prime): portraits, details, and compressed landscape perspectives',
      'Fast prime (35mm or 50mm f/1.8): low-light capability for dim medina passages, bokeh, and evening scenes',
    ],
  },
  {
    category: 'Essential Accessories',
    icon: CheckCircle,
    items: [
      'Polarizing filter: reduces glare, deepens skies, essential for desert and mountain photography',
      'ND filter: enables long exposures of ocean waves, waterfall motion, and crowd removal in busy squares',
      'Lightweight travel tripod: critical for blue hour, night sky, and long-exposure compositions',
      'Sensor cleaning kit: Sahara sand and medina dust will find their way into your gear within days',
      'Extra batteries and memory cards: charging options can be limited in remote desert camps',
    ],
  },
  {
    category: 'Protection & Carrying',
    icon: ShieldCheck,
    items: [
      'Discreet camera bag rather than a branded photo backpack to avoid attracting attention in crowded souks',
      'Cross-body camera strap: more secure than a neck strap in crowded medina streets',
      'Lens cleaning cloths: dust is constant, especially in the Sahara and on windy coastal days in Essaouira',
      'Silica gel packets: protect gear from humidity in coastal cities',
      'Travel insurance covering camera equipment: essential for expensive setups abroad',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TOURS
   ═══════════════════════════════════════════════════════════════ */

const photographyTours = [
  { name: 'Marrakech Medina Photo Walk', duration: 'Half-day (4 hours)', icon: Camera, description: 'Guided walk through the medina with a professional photographer. Cover Jemaa el-Fnaa, souks, Ben Youssef, and hidden alleys. Small groups of 4-6 people ensure personal attention.', price: 'From 500 MAD per person', includes: 'Local guide, photography instruction, edited highlights' },
  { name: 'Sahara Desert Photography Expedition', duration: '3 days / 2 nights', icon: Sun, description: 'Multi-day trip from Marrakech through the Atlas Mountains and Dades Valley to Erg Chebbi. Camp under the stars, photograph sunrise over the dunes, and capture camel caravans at golden hour.', price: 'From 4,500 MAD per person', includes: 'Transport, desert camp, meals, camel trek, photography guidance' },
  { name: 'Fez Artisan & Street Photography Workshop', duration: 'Full day (8 hours)', icon: Aperture, description: 'Immersive workshop in the Fez medina focusing on street photography techniques, artisan portraits, and architectural detail. Includes access to tannery viewpoints and private craft workshops.', price: 'From 1,200 MAD per person', includes: 'Guide, tannery access, workshop visits, light editing session' },
  { name: 'Chefchaouen Blue City Photo Tour', duration: 'Full day (7 hours)', icon: Image, description: 'Early morning start to capture empty blue streets at sunrise, followed by portrait sessions with locals and a hike to the Spanish Mosque for panoramic shots. Afternoon covers hidden quarters.', price: 'From 800 MAD per person', includes: 'Local guide, sunrise access, Spanish Mosque hike, composition coaching' },
  { name: 'Complete Morocco Photography Tour', duration: '10 days', icon: Globe, description: 'Comprehensive journey covering Marrakech, Atlas Mountains, Sahara, Fez, Chefchaouen, and Essaouira. Led by professional photographers with daily critiques and editing sessions.', price: 'From 25,000 MAD per person', includes: 'All transport, accommodation, meals, instruction, post-trip editing workshop' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const bestSeasons = [
  { season: 'Spring (March - May)', icon: Sparkles, quality: 'Excellent', description: 'Wildflowers carpet the Atlas foothills, almond and cherry blossoms appear in valleys, and temperatures are comfortable for all-day shooting. Occasional rain adds dramatic cloud formations.', bestFor: 'Landscapes, mountain villages, wildflower fields, waterfalls at peak flow' },
  { season: 'Summer (June - August)', icon: Sun, quality: 'Good (with planning)', description: 'Intense midday heat limits shooting hours inland. Coastal cities like Essaouira stay pleasant. Long golden hours and dramatic sunset colors compensate for harsh midday conditions.', bestFor: 'Coastal scenes, early morning and late evening shooting, Essaouira, Sahara stargazing' },
  { season: 'Autumn (September - November)', icon: Award, quality: 'Excellent', description: 'Golden light, harvest scenes, date palms laden with fruit. Clear Sahara skies perfect for astrophotography. Comfortable temperatures and fewer tourists than spring.', bestFor: 'Desert photography, harvest scenes, astrophotography, comfortable all-day shooting' },
  { season: 'Winter (December - February)', icon: Mountain, quality: 'Very Good', description: 'Snow-capped Atlas peaks, crisp air, dramatic cloud formations. Sahara temperatures are ideal for photography. Low tourist season means empty landmarks and undisturbed compositions.', bestFor: 'Snow-capped mountains, Sahara at comfortable temps, moody medina scenes' },
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

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-chefchaouen.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Photography Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Camera className="w-4 h-4" />
            Photography &amp; Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Photography Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Chefchaouen&apos;s blue streets to Sahara sunrises, this guide covers the best locations,
            golden hour timing, gear, drone rules, night photography, and cultural etiquette for
            photographers visiting Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Photographers Return to Morocco
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco packs an extraordinary range of photographic subjects into a country smaller
              than France. Sahara dunes at sunrise, medieval medinas threading through living cities,
              Atlantic surf crashing against Portuguese-era ramparts, and snow-covered Atlas peaks
              visible from palm oases all sit within a day&apos;s drive of each other.
            </p>
            <p>
              The light here is different. North African sun at lower latitudes creates harder shadows
              and warmer tones than European destinations, while the country&apos;s position between the
              Atlantic and the Sahara produces atmospheric haze, dramatic cloud formations, and
              sunsets that shift from gold to deep crimson. Photographers who visit once almost
              always come back to shoot a different season or region.
            </p>
            <p>
              This guide covers specific locations, timing, technique, gear, regulations, and the
              cultural awareness that turns a tourist snapshot into a photograph worth printing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top Photo Locations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Photo Locations by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five cities and regions offering distinct visual characters and unique opportunities for striking images.
          </p>
          <div className="space-y-8">
            {topLocations.map((loc) => {
              const LocIcon = loc.icon;
              return (
                <div key={loc.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative h-64 lg:h-auto">
                      <img src={loc.image} alt={`Photography in ${loc.city} Morocco`} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <LocIcon className="w-5 h-5 text-white" />
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">{loc.city}</h3>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{loc.description}</p>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Top Spots:</h4>
                      <div className="space-y-2 mb-4">
                        {loc.spots.map((spot, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <Camera className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                            {spot}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[var(--color-gold)] font-semibold">
                        <Clock className="w-3 h-3" />
                        <span>{loc.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Golden Hour & Blue Hour ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Golden Hour &amp; Blue Hour Locations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The magic hours around sunrise and sunset transform Morocco&apos;s landscapes into photographic gold.
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
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{spot.location}</h3>
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

      {/* ── Street Photography & People Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photographing People: Etiquette &amp; Consent
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respectful photography of people in Morocco requires cultural awareness. These guidelines will help you
            capture honest portraits while maintaining the dignity of your subjects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Heart, title: 'Always Ask First', text: 'A polite "Mumkin sura?" (Can I take a photo?) is the minimum. Many Moroccans are happy to be photographed, but consent is non-negotiable. Respect anyone who declines without pressing further or trying to sneak a shot.' },
              { icon: Users, title: 'Women, Children & the Elderly', text: 'Extra sensitivity is required. Never photograph women without explicit permission, particularly in rural or conservative areas. Do not photograph children without a parent present. Elderly Moroccans in traditional dress may object on religious grounds.' },
              { icon: BookOpen, title: 'Build a Connection First', text: 'Buy something from a vendor, share tea, or have a brief conversation before reaching for your camera. This approach consistently produces better, more natural portraits. Showing someone their photo on your screen afterward is a gesture that builds goodwill.' },
              { icon: Star, title: 'Tipping for Portraits', text: 'In tourist areas, some people (water sellers in Jemaa el-Fnaa, snake charmers, Gnawa musicians) pose specifically for tips. Agree on the amount beforehand. A reasonable range is 5-20 MAD per photo. This is a legitimate exchange, not a scam.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Street Photography Techniques for Moroccan Medinas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Shoot with a 35mm or 50mm equivalent for natural perspective that does not intimidate subjects',
                'Use zone focusing to pre-set your focus distance and capture candid moments in fast-moving crowds',
                'Medina markets are best in the morning when vendors set up and light streams through overhead gaps',
                'Sit at a cafe, let people get used to your presence, then shoot from a fixed position for candid street scenes',
                'Overcast days diffuse harsh medina shadows and produce more even, flattering light in narrow alleys',
                'Shoot into shafts of light entering dark medina passages for dramatic contrast and silhouette compositions',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Landscape Composition ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Focus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Landscape Composition in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s four distinct landscape types each demand different compositional approaches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Sun, title: 'Desert & Dunes', tips: 'Sand dunes photograph best with strong side lighting that emphasizes texture and ripple patterns. Include a human figure, camel, or single set of footprints for scale. Leading lines formed by dune ridges create natural compositions. A polarizing filter deepens blue skies above orange sand.' },
              { icon: Mountain, title: 'Atlas Mountains', tips: 'Include foreground elements like wildflowers, stone walls, or village rooftops to add depth to mountain panoramas. Atlas passes like Tizi n\'Tichka (2,260m) provide sweeping layered perspectives. Snow on peaks contrasts dramatically with green valleys in winter and spring.' },
              { icon: Compass, title: 'Atlantic Coast', tips: 'Long exposures (1-30 seconds with an ND filter) smooth ocean waves into mist around Essaouira\'s ramparts and rock formations. The natural arch at Legzira Beach frames sunset compositions. Shoot at low tide for mirror reflections in wet sand.' },
              { icon: Building, title: 'Kasbahs & Oases', tips: 'Frame kasbahs with palm trees in the foreground for the classic Moroccan postcard composition. The Rose Valley and Draa Valley offer earth-toned architecture against green oases. Use a telephoto lens to compress layers of kasbahs, palms, and mountains.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tips}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Night Photography ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Night Photography: Stars &amp; Medina Lights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers two distinct night photography experiences: some of the darkest skies on Earth in the
            Sahara and the warm, atmospheric glow of medina lanterns and street life after dark.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Star className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Sahara Astrophotography
              </h3>
              <div className="space-y-2">
                {[
                  'The Sahara near Merzouga offers Bortle 1-2 darkness, among the darkest skies accessible by road anywhere on Earth',
                  'The Milky Way core is visible from March through October, with the galactic center highest in June-August',
                  'Use a fast wide-angle lens (f/2.8 or wider), ISO 3200-6400, and 15-25 second exposures on a sturdy tripod',
                  'Include a desert tent, camel silhouette, or dune ridge as a foreground anchor for star compositions',
                  'New moon periods are best for Milky Way shooting, but a crescent moon can illuminate dunes for foreground detail',
                  'Bring a red headlamp to preserve your night vision while adjusting camera settings between shots',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Sparkles className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Medina After Dark
              </h3>
              <div className="space-y-2">
                {[
                  'Jemaa el-Fnaa in Marrakech transforms after sunset into a field of food stall smoke, lantern light, and motion',
                  'Handmade brass and colored glass lanterns in medina shops create warm pools of patterned light on walls',
                  'Use a fast prime lens (f/1.4-f/2) and higher ISOs (1600-3200) to shoot handheld in dim medina passages',
                  'The illuminated minarets of Fez and Marrakech glow against blue-hour skies for striking architectural shots',
                  'Rooftop restaurants and terraces provide elevated vantage points of medina rooftops and lit minarets at night',
                  'Long exposures from a tripod can capture the movement of people through lantern-lit alleys as motion blur',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Editing Moroccan Colors ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Editing Moroccan Colors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s color palette is its signature. These editing approaches help preserve and enhance
            the warm earth tones, vivid blues, and rich spice-market hues that define Moroccan photography.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Sun, title: 'Warm Earth Tones', tips: 'Marrakech, kasbahs, and the Sahara are defined by terracotta, ochre, and sand. Shift white balance slightly warm (6000-6500K). Increase orange and yellow saturation modestly in HSL. Avoid over-saturating reds, which turns natural earth tones into artificial neon.' },
              { icon: Eye, title: 'Chefchaouen Blues', tips: 'The blue medina benefits from cooler white balance (5000-5500K) to keep blues vibrant without turning them purple. Use HSL to separate blue hues from aqua tones. Boost luminance in the blue channel to make walls glow. Desaturate orange slightly to prevent warm doorways from competing.' },
              { icon: Sparkles, title: 'Souk & Spice Colors', tips: 'Morocco\'s souks are explosions of turmeric yellow, paprika red, saffron orange, and indigo blue. Shoot in RAW to preserve the full color range. In editing, use vibrance over saturation to boost muted tones without clipping already-vivid colors. Selective adjustments keep individual spice piles distinct.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.tips}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">General Editing Tips for Morocco</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Always shoot RAW for maximum latitude in recovering highlights blown by harsh North African sun',
                'Dehaze slider in Lightroom and Camera Raw cuts through atmospheric haze common in desert and mountain shots',
                'Add a subtle warm split tone to shadows (orange/amber) to reinforce the Moroccan earth-tone aesthetic',
                'Use graduated filters to balance bright skies with darker medina interiors in single-frame shots',
                'Resist the temptation to over-process: Morocco\'s natural colors are already striking and rarely need heavy edits',
                'Create a preset based on your first successful edits, then fine-tune it for each location\'s unique palette',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture & Portrait Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Architecture &amp; Portrait Photography
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s Islamic geometric patterns, riad courtyards, and artisan workshops provide
            rich subjects for both architectural detail and human-interest photography.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Architecture Tips</h3>
              </div>
              <div className="space-y-2">
                {[
                  'Zellige tilework, carved stucco, and cedarwood ceilings are endlessly photogenic at close range with a macro or standard lens',
                  'Riad courtyards provide symmetrical compositions with central fountains and patterned tiled floors',
                  'Photograph ornate doors and windows as standalone subjects: every one in the medina is unique',
                  'Use a wide-angle lens (16-24mm) for kasbah and mosque exteriors, correcting converging verticals in post',
                  'Overcast days work well for detailed architectural surfaces, eliminating harsh shadows that obscure patterns',
                  'Medersas like Ben Youssef in Marrakech and Bou Inania in Fez are open to visitors and incredibly detailed',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Portrait Tips</h3>
              </div>
              <div className="space-y-2">
                {[
                  'Building rapport first leads to more natural portraits: buy something from a vendor, share tea, have a brief conversation',
                  'Use a short telephoto (85-135mm) for flattering compression without being physically intrusive',
                  'Artisans at work (tanners, weavers, metalworkers) make compelling documentary subjects in their workshops',
                  'Show subjects their photo on your camera screen afterward as a gesture of respect and connection',
                  'Consider carrying a portable printer to gift instant prints, especially appreciated in rural Atlas villages',
                  'Window light in medina doorways and workshops creates natural, directional portrait lighting',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gear Recommendations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gear Recommendations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to pack for photographing Morocco, from camera bodies to dust-proofing essentials for desert and medina.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gearSections.map((gear) => {
              const GearIcon = gear.icon;
              return (
                <div key={gear.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GearIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{gear.category}</h3>
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

      {/* ── Drone Rules ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Drone Regulations in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Important rules every aerial photographer must understand before attempting to fly in Morocco.
          </p>

          <div className="card-moroccan p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Heavily Restricted: Apply for Permits Well in Advance
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Drone use in Morocco requires prior authorization from the Direction Generale de
                  l&apos;Aviation Civile (DGAC). Flying without a permit is illegal and can result in
                  confiscation, fines, and legal consequences. Many travelers have had drones seized
                  at airport customs upon arrival.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: 'Permit Process', text: 'Applications should be submitted to the DGAC weeks in advance with flight area details and equipment specifications. The process is bureaucratic and approval is not guaranteed for tourist use.' },
              { icon: AlertTriangle, title: 'No-Fly Zones', text: 'Military installations, royal palaces, government buildings, airports, mosques, and crowded urban areas are strictly off-limits. Many of Morocco\'s most photogenic locations sit near restricted zones.' },
              { icon: Eye, title: 'Customs Enforcement', text: 'Drones are frequently confiscated at Moroccan airports. If bringing one, carry your DGAC authorization letter. Some small consumer drones pass through, but confiscation risk is real.' },
              { icon: Award, title: 'Alternatives to Drones', text: 'Hire a licensed local drone operator with existing permits. Elevated viewpoints, hilltop vantage points, and rooftop terraces can achieve aerial-like perspectives without legal risk.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography Tours ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tours &amp; Workshops
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Guided experiences designed to help you capture Morocco with expert instruction and insider access.
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
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{tour.name}</h3>
                        <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded shrink-0 ml-2">{tour.price}</span>
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

      {/* ── Best Time of Year ── */}
      <section className="py-16 md:py-20">
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
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{season.season}</h3>
                        <span className="text-xs font-semibold text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2 py-0.5 rounded">{season.quality}</span>
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

      {/* ── Gallery: Morocco Through the Lens ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco Through the Lens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: '/images/hero-marrakech.webp',
                alt: 'Vibrant Jemaa el-Fnaa square in Marrakech at golden hour with food stalls and bustling crowds',
                label: 'Marrakech at Golden Hour',
              },
              {
                src: '/images/hero-sahara.webp',
                alt: 'Sunrise over the golden sand dunes of Erg Chebbi in the Moroccan Sahara Desert',
                label: 'Sahara Desert Sunrise',
              },
              {
                src: '/images/hero-chefchaouen.webp',
                alt: 'Blue-washed narrow street in Chefchaouen medina with colorful potted plants and doorways',
                label: 'Chefchaouen Blue Medina',
              },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram vs Reality ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Instagram vs Reality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Those perfectly empty blue streets and untouched dune ridges take planning. Here is
            what to actually expect at Morocco&apos;s most photographed locations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Image,
                title: 'Chefchaouen Blue Streets',
                reality: 'The famous blue alleys are busy from 10 AM to 5 PM with tourists and selfie-seekers. For empty streets, arrive at sunrise (6-7 AM) or shoot during the lunch hour lull. Quieter residential streets away from the main plaza are less crowded all day.',
              },
              {
                icon: Sun,
                title: 'Sahara "Untouched" Dunes',
                reality: 'Erg Chebbi is shared by many desert camps and camel tours. For pristine dune photos without footprints, hike 20-30 minutes away from camp at sunrise. Wind often smooths the sand overnight. Erg Chigaga near M\'hamid offers more solitude.',
              },
              {
                icon: Building,
                title: 'Fez Tanneries',
                reality: 'Chouara Tannery viewpoints are controlled by shop owners who guide you upstairs and expect you to browse leather goods afterward. The view is genuine but the experience is commercial. A tip of 10-20 MAD is expected.',
              },
              {
                icon: Landmark,
                title: 'Jardin Majorelle',
                reality: 'One of Morocco\'s most-shared locations gets crowded by mid-morning. Arrive right at opening (8 AM) for the best chance at unobstructed shots of the iconic cobalt-blue villa. The cactus garden area is usually less crowded.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reality}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need permission to photograph people in Morocco?', a: 'Yes, always ask permission before photographing people, especially women, children, and the elderly. A polite "Mumkin sura?" (Can I take a photo?) is appreciated. Many Moroccans will happily pose, but respect anyone who declines. In tourist areas, some people expect a small tip of 5-20 MAD for posing.' },
              { q: 'Can I fly a drone in Morocco?', a: 'Drone use in Morocco requires prior authorization from the Direction Generale de l\'Aviation Civile (DGAC). Many travelers have had drones confiscated at customs. Flying near military installations, royal palaces, and government buildings is strictly prohibited. Apply for permits well in advance or consider hiring a licensed local operator.' },
              { q: 'What is the best time of year to photograph Morocco?', a: 'Spring (March-May) and autumn (September-November) offer the best conditions. Spring brings wildflowers and pleasant temperatures, while autumn delivers golden light and harvest scenes. Winter is excellent for the Sahara with clear skies. Summer is best limited to coastal cities like Essaouira.' },
              { q: 'Is it safe to carry expensive camera gear in Morocco?', a: 'Morocco is generally safe for photographers. Use a cross-body camera strap, keep gear in a discreet bag rather than a branded camera backpack, and be aware of your surroundings in crowded medinas. Avoid displaying expensive equipment unnecessarily and consider travel insurance covering camera gear.' },
              { q: 'Can I photograph mosques in Morocco?', a: 'You can freely photograph mosque exteriors. Non-Muslims cannot enter most mosques (the Hassan II Mosque in Casablanca is a notable exception). Respect worshippers and avoid photographing people during prayer. Minarets, doorways, and geometric tilework make excellent architectural subjects from outside.' },
              { q: 'What camera gear should I bring to Morocco?', a: 'A versatile zoom lens (24-70mm) covers most situations. Add a wide-angle (16-35mm) for architecture and narrow medina streets, and a fast prime (35mm or 50mm f/1.8) for low-light alleys. Bring a polarizing filter, sensor cleaning kit for desert dust, extra batteries, and a lightweight travel tripod for night photography.' },
              { q: 'How much do photography tours in Morocco cost?', a: 'Tours range from 500 MAD for a half-day city walk to from 25,000 MAD for a multi-day guided expedition covering the Sahara, Atlas Mountains, and imperial cities. Group workshops are from 2,000 MAD per day. Private sessions start from 1,500 MAD per half-day. Seasonal pricing may apply.' },
              { q: 'Can I photograph the Sahara night sky without special equipment?', a: 'Modern smartphones can capture the Milky Way with night mode in the Sahara, though results vary. For serious astrophotography, bring a camera with manual settings, a fast wide-angle lens (f/2.8 or wider), and a sturdy tripod. The Sahara offers Bortle 1-2 skies, among the darkest on Earth, making even basic setups produce striking star images.' },
            ].map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Morocco Culture Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Understand the customs, etiquette, and cultural context that make your photographs more meaningful.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-sahara-desert" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Sahara Desert Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Plan your desert expedition with the best camps, camel treks, and stargazing experiences.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/stargazing" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Moon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Morocco Stargazing</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Dark sky locations, best viewing seasons, and astrophotography tips for Morocco.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Atlas Mountains Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Hiking trails, mountain passes, and dramatic landscapes across the High Atlas ranges.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Capture Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From blue medinas in the Rif to golden Sahara dunes, Morocco delivers images that
            stop people mid-scroll. Start planning your photography trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-sahara-desert"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Sun className="w-5 h-5" />
              Explore the Sahara
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

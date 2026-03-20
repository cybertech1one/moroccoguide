import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Camera,
  Sun,
  Clock,
  Info,
  ArrowRight,
  Mountain,
  ShieldCheck,
  Eye,
  AlertTriangle,
  Users,
  Compass,
  Building,
  Landmark,
  Palette,
  Sunrise,
  CloudSun,
  Aperture,
  Focus,
  Layers,
  BookOpen,
  Calendar,
  CircleAlert,
  Award,
  Globe,
  Plane,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Photography Spots in Morocco 2026 | 25 Instagram-Worthy Locations',
  description:
    'Discover Morocco\'s 25 most photogenic locations — from Chefchaouen\'s blue streets to Sahara sunrises. Includes golden hour timing, drone regulations, gear tips, and photography etiquette for every spot.',
  keywords: [
    'morocco photography spots',
    'instagram morocco',
    'best photos morocco',
    'morocco photo locations',
    'chefchaouen photography',
    'sahara desert photography',
    'morocco instagram spots',
    'ait benhaddou photos',
    'fes tanneries photography',
    'morocco drone rules',
    'morocco golden hour',
    'jardin majorelle photos',
    'hassan ii mosque photography',
    'morocco travel photography',
    'morocco photo guide 2026',
    'essaouira photography',
    'atlas mountains photos',
    'moroccan architecture photography',
    'merzouga sunrise photography',
    'morocco camera gear',
  ],
  openGraph: {
    title: 'Best Photography Spots in Morocco 2026 | 25 Instagram-Worthy Locations',
    description:
      'Morocco\'s 25 most photogenic locations with golden hour timing, drone rules, gear recommendations, and etiquette tips for photographers.',
    url: `${BASE_URL}/morocco-photography-spots`,
    images: [
      {
        url: `${BASE_URL}/images/hero-photography.webp`,
        width: 1200,
        height: 630,
        alt: 'Blue streets of Chefchaouen Morocco with potted plants and dramatic shadows during golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Photography Spots in Morocco 2026 | 25 Locations',
    description:
      'From Chefchaouen\'s blue alleys to Sahara sunrises — the definitive photography guide to Morocco with timing, gear, and etiquette tips.',
    images: [`${BASE_URL}/images/hero-photography.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-photography-spots` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-photography-spots`,
  name: 'Best Photography Spots in Morocco 2026 | 25 Instagram-Worthy Locations',
  description:
    'Complete guide to Morocco\'s 25 most photogenic locations with golden hour timing, drone regulations, gear recommendations, and photography etiquette.',
  url: `${BASE_URL}/morocco-photography-spots`,
  image: `${BASE_URL}/images/hero-photography.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-photography-spots`,
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
      { '@type': 'ListItem', position: 2, name: 'Photography Spots in Morocco', item: `${BASE_URL}/morocco-photography-spots` },
    ],
  },
};

const faqItems = [
  {
    question: 'Do I need a permit to photograph in Morocco?',
    answer:
      'No general photography permit is required for personal or travel photography in public spaces. Military installations, police stations, and royal palaces are off-limits. Some mosques and museums charge a camera fee (from 10-30 MAD). Commercial shoots in protected heritage sites require permits from the Moroccan Ministry of Culture.',
  },
  {
    question: 'Can I fly a drone in Morocco for photography?',
    answer:
      'Drone use in Morocco requires prior authorization from the Direction Générale de l\'Aviation Civile (DGAC). Flying without a permit can result in drone confiscation and fines. Many travelers have reported drones being confiscated at customs. Apply at least 30 days before your trip and avoid flying near airports, military zones, and royal residences.',
  },
  {
    question: 'What is the best time of year for photography in Morocco?',
    answer:
      'October through April offers the best light and comfortable temperatures for most locations. The Sahara is ideal from October to March when heat is manageable. Spring (March-April) brings wildflowers in the Atlas Mountains. Ramadan can affect access to some sites, so check dates before planning your trip.',
  },
  {
    question: 'Is it safe to carry expensive camera gear in Moroccan cities?',
    answer:
      'Morocco is generally safe for photographers, but use common sense in crowded medinas. Keep equipment in a non-descript bag rather than a branded camera bag. Use a crossbody strap, stay aware of your surroundings in busy souks, and avoid displaying gear unnecessarily at night. Store backup memory cards separately from your camera.',
  },
  {
    question: 'How much should I pay people for photos in Morocco?',
    answer:
      'Expect to pay from 10-20 MAD for photographing market vendors, water sellers (guerrab), henna artists, and snake charmers in Jemaa el-Fnaa. Berber women in rural areas may ask from 20-50 MAD. Always negotiate before shooting and respect anyone who declines. Candid street photography of locals without consent is culturally inappropriate.',
  },
  {
    question: 'What lens focal length works best for Moroccan architecture?',
    answer:
      'A wide-angle lens (16-35mm) is essential for narrow medina streets, mosque interiors, and riads. A 24-70mm covers most general travel shots. For the tanneries in Fes (shot from rooftop terraces), a 70-200mm isolates individual vats. Prime lenses at 35mm or 50mm work well for street photography in souks.',
  },
  {
    question: 'Can I photograph inside mosques in Morocco?',
    answer:
      'Non-Muslims cannot enter most mosques in Morocco, with Hassan II Mosque in Casablanca being the major exception (open for guided tours, photography allowed inside). You can photograph mosque exteriors freely. The Ben Youssef Madrasa in Marrakech allows interior photography and is one of the most photogenic religious buildings in the country.',
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 25 PHOTOGRAPHY SPOTS
   ═══════════════════════════════════════════════════════════════ */

const photographySpots = [
  {
    rank: 1,
    name: 'Chefchaouen Blue Medina',
    region: 'Rif Mountains',
    icon: Palette,
    bestTime: 'Early morning (7-9 AM) before tour groups arrive',
    season: 'March-May, September-November',
    description:
      'The blue-washed streets of Chefchaouen produce some of the most recognizable images from Morocco. Every alley, doorway, and staircase is painted in shades of blue — from cobalt to powder to cerulean. The best shots come from Rue Targhi and the small streets near Plaza Uta el-Hammam. Morning light bouncing off blue walls creates a soft, ethereal glow that flattens in harsh midday sun.',
    tip: 'Head to the Spanish Mosque at sunset for a panoramic shot of the entire blue medina against the Rif Mountains.',
  },
  {
    rank: 2,
    name: 'Ait Benhaddou',
    region: 'Ouarzazate Province',
    icon: Landmark,
    bestTime: 'Golden hour — sunrise from the east bank, sunset from the west',
    season: 'October-April (avoid summer heat above 45°C)',
    description:
      'This UNESCO World Heritage ksar has appeared in Gladiator, Game of Thrones, and Lawrence of Arabia. The fortified village rises from the banks of the Ounila River in layered tiers of red-earth construction. Crossing the river (knee-deep in spring, dry in summer) puts you at the base for dramatic upward compositions. The golden-hour light turns the earthen walls from brown to deep amber.',
    tip: 'Climb to the granary at the top for a sweeping view of the valley and the modern village across the river.',
  },
  {
    rank: 3,
    name: 'Erg Chebbi Dunes (Sahara)',
    region: 'Merzouga',
    icon: Sun,
    bestTime: 'Sunrise (5:30-7 AM) and sunset (6-7:30 PM)',
    season: 'October-March (summer temperatures exceed 50°C)',
    description:
      'The tallest dunes in Morocco reach 150 meters at Erg Chebbi. The interplay of light and shadow across rippled sand creates abstract compositions that change by the minute. Sunrise paints the dunes in orange, pink, and gold while long shadows from ridgelines add depth. A camel caravan silhouetted against the dawn is the quintessential Sahara image.',
    tip: 'Book a desert camp and wake before dawn. The 20-minute dune climb in darkness is worth every step for an unobstructed sunrise.',
  },
  {
    rank: 4,
    name: 'Jardin Majorelle',
    region: 'Marrakech',
    icon: Palette,
    bestTime: 'Opening hour (8 AM) to avoid crowds — closes at 6:30 PM',
    season: 'Year-round, but spring flowers peak in March-April',
    description:
      'The signature cobalt-blue structures designed by Jacques Majorelle (later owned by Yves Saint Laurent) stand out against towering cacti, bougainvillea, and bamboo groves. The contrast between Majorelle Blue and the yellow planters is graphic-design-level striking. Water features and terracotta paths add texture. Indoor photography is restricted in the Berber Museum.',
    tip: 'The bamboo alley and the blue studio building photograph best with a wide-angle lens. Arrive right at opening — by 10 AM, crowds make clean compositions difficult.',
  },
  {
    rank: 5,
    name: 'Ben Youssef Madrasa',
    region: 'Marrakech',
    icon: Building,
    bestTime: 'Midday (11 AM-2 PM) when sunlight fills the courtyard',
    season: 'Year-round',
    description:
      'The largest madrasa in Morocco features some of the most intricate Islamic geometric art on the planet. The central courtyard pool reflects carved stucco, cedar wood, and zellige tilework rising three stories. The 130 student chambers each frame the courtyard differently — look for the cells on the upper floor where light slices across carved plaster. Entry costs from 70 MAD.',
    tip: 'Shoot the courtyard reflection in the marble pool for a symmetrical composition. A polarizing filter cuts surface glare and deepens tile colors.',
  },
  {
    rank: 6,
    name: 'Hassan II Mosque',
    region: 'Casablanca',
    icon: Landmark,
    bestTime: 'Sunset from the oceanfront esplanade; interior tours at 9 AM, 10 AM, 11 AM',
    season: 'Year-round',
    description:
      'The world\'s third-largest mosque sits on a promontory over the Atlantic Ocean with a 210-meter minaret visible across Casablanca. Exterior shots from the esplanade at sunset capture the mosque silhouetted against orange skies. Interior tours (from 130 MAD) reveal retractable roof panels, Italian marble floors, and hand-carved cedarwood ceilings. This is the only mosque in Morocco open to non-Muslim visitors for photography.',
    tip: 'The long reflecting pools in front create mirror-image compositions at dawn when the esplanade is empty.',
  },
  {
    rank: 7,
    name: 'Fes Tanneries (Chouara)',
    region: 'Fes',
    icon: Eye,
    bestTime: 'Late morning (10 AM-12 PM) when workers are active and vats are freshly filled',
    season: 'Year-round, but summer heat intensifies the smell',
    description:
      'The medieval tanneries of Fes el-Bali have operated for over 1,000 years. Viewed from surrounding rooftop terraces (leather shops offer free access, expecting you to browse afterward), the circular stone vats filled with dyes — white, saffron, poppy red, indigo, mint green — form a striking mosaic. Workers knee-deep in vats provide human scale. A telephoto lens isolates individual workers and vat patterns.',
    tip: 'Terrace shops give you a sprig of mint to counter the smell. The northeastern terraces get the best morning light without shooting into the sun.',
  },
  {
    rank: 8,
    name: 'Ouzoud Falls',
    region: 'Middle Atlas',
    icon: Mountain,
    bestTime: 'Morning (9-11 AM) for rainbow mist; avoid noon glare',
    season: 'Spring (March-May) when water flow peaks',
    description:
      'Morocco\'s tallest waterfalls drop 110 meters across multiple cascades into a turquoise pool. Barbary macaques swing through olive trees along the trail down. The mist at the base creates natural rainbows in morning sunlight. A long exposure (1-2 seconds with an ND filter) smooths the cascades into silk. The viewpoint from the opposite bank captures the full three-tier drop.',
    tip: 'Bring a microfiber cloth — mist coats your lens within seconds at the base. The upstream olive groves with macaques are equally photogenic.',
  },
  {
    rank: 9,
    name: 'Todra Gorge',
    region: 'Tinghir',
    icon: Mountain,
    bestTime: 'Midday (11 AM-1 PM) when sun penetrates the narrow canyon',
    season: 'Spring and autumn — winter can be cold and shadowy',
    description:
      'Three-hundred-meter limestone walls close to a gap just 10 meters wide at the narrowest point. The scale is humbling — place a person in the frame for perspective. Midday is actually preferred here because the gorge floor only receives direct sunlight for a few hours when the sun is directly overhead. The red and orange rock contrasts with the turquoise river flowing through the base.',
    tip: 'Walk 2 km past the main tourist area for compositions without tour buses. Rock climbers on the walls add dynamic subjects.',
  },
  {
    rank: 10,
    name: 'Essaouira Ramparts & Port',
    region: 'Essaouira',
    icon: Compass,
    bestTime: 'Late afternoon (4-6 PM) for warm light on the ramparts',
    season: 'Year-round, but winter storms add drama',
    description:
      'The 18th-century Portuguese ramparts face the Atlantic, with cannons still pointing seaward. The fishing port below buzzes with blue boats, seagulls, and fishermen mending nets. Sqala du Port offers a fortress-top perspective along the crenellated walls. The Skala de la Ville on the north side catches golden afternoon light. Wind is constant — plan for hair and fabric movement in portraits.',
    tip: 'The blue boats in the harbor create a color palette with the white and blue medina walls behind them. Shoot from the harbor wall at low tide for reflections.',
  },
  {
    rank: 11,
    name: 'Bahia Palace',
    region: 'Marrakech',
    icon: Building,
    bestTime: 'Morning (9-10 AM) before tour groups; midday for courtyard light',
    season: 'Year-round',
    description:
      'This 19th-century palace covers 8,000 square meters of painted cedar ceilings, zellige floors, and marble courtyards. The Grand Court (50x30m) with its central marble fountain is the highlight — the scale dwarfs visitors. Painted bedroom ceilings in the harem section require an upward-facing wide-angle shot. Entry costs from 70 MAD.',
    tip: 'The doorway-within-doorway compositions through multiple rooms create powerful depth. Look for the stained glass windows that project colored light onto white walls.',
  },
  {
    rank: 12,
    name: 'Atlas Mountains — Imlil Valley',
    region: 'High Atlas',
    icon: Mountain,
    bestTime: 'Early morning for clear skies; afternoon clouds build by 2 PM',
    season: 'April-June (wildflowers), October-November (autumn color), January-March (snow)',
    description:
      'The gateway to Mount Toubkal (4,167m) offers terraced Berber villages clinging to hillsides, walnut groves, and North Africa\'s highest peaks as backdrop. The village of Imlil (1,740m) and surrounding hamlets like Aroumd sit in a valley that catches morning light dramatically. Snow-capped peaks behind red-earth villages create contrast that defines Atlas photography.',
    tip: 'Hire a local guide (from 300 MAD/day) to reach viewpoints above Aroumd for the classic Toubkal panorama with village foreground.',
  },
  {
    rank: 13,
    name: 'Draa Valley',
    region: 'Zagora to Ouarzazate',
    icon: Compass,
    bestTime: 'Golden hour from elevated viewpoints along the N9 highway',
    season: 'October-April',
    description:
      'Morocco\'s longest river carves through 200 km of date palm oases, fortified ksour, and red desert. The road between Agdz and Zagora passes through six distinct palm oases separated by barren hammada (stone desert). The contrast between lush green palms and rust-red kasbahs against bare mountains produces layered landscape images at every turn.',
    tip: 'Stop at Tamnougalt and Timiderte for two of the most photogenic kasbahs. The elevated viewpoint north of Agdz overlooks the entire valley.',
  },
  {
    rank: 14,
    name: 'Merzouga Sunrise',
    region: 'Merzouga',
    icon: Sunrise,
    bestTime: 'Pre-dawn (5-6:30 AM) — arrive at dune crest 30 minutes before sunrise',
    season: 'October-March',
    description:
      'Distinct from the general Erg Chebbi entry, the sunrise specifically from Merzouga\'s eastern dune ridge produces a color gradient from deep violet to gold as the sun clears the Algerian border. Silhouettes of fellow travelers, camels, and the rippled dune foreground compose themselves. The sky transitions through at least eight distinct color phases in 20 minutes.',
    tip: 'Set up a tripod the night before and mark your position with GPS. Shoot a time-lapse from 30 minutes pre-dawn to 15 minutes after sunrise for a reel that writes itself.',
  },
  {
    rank: 15,
    name: 'Koutoubia Mosque & Gardens',
    region: 'Marrakech',
    icon: Landmark,
    bestTime: 'Sunset from the park; evening when the minaret is illuminated',
    season: 'Year-round',
    description:
      'The 77-meter minaret dominates the Marrakech skyline and serves as a compass for navigating the medina. The surrounding gardens with palm trees and rose beds frame the tower from multiple angles. At sunset, the sandstone glows orange-red. After dark, floodlighting highlights the geometric carved stonework. Non-Muslims cannot enter, but the exterior and gardens are the real subjects.',
    tip: 'The rooftop of Café de France on Jemaa el-Fnaa offers an elevated view of the Koutoubia with the square in the foreground.',
  },
  {
    rank: 16,
    name: 'Legzira Beach Stone Arch',
    region: 'Sidi Ifni',
    icon: Sunrise,
    bestTime: 'Sunset — the arch frames the setting sun in winter months',
    season: 'October-March for dramatic sunset alignment',
    description:
      'One of the two original natural stone arches collapsed in 2016, but the remaining arch still towers over the red-sand beach. The rust-red sandstone against Atlantic waves and sunset skies produces otherworldly images. Low tide exposes tidal pools that add foreground reflections. The arch stands roughly 30 meters tall — place a person beneath it for scale.',
    tip: 'Access requires a 15-minute descent down a cliff path. Check tide tables before going — high tide submerges the base and cuts off access.',
  },
  {
    rank: 17,
    name: 'Volubilis Roman Ruins',
    region: 'Meknes Province',
    icon: Landmark,
    bestTime: 'Early morning or late afternoon for warm light on stone',
    season: 'March-May (wildflowers among ruins) and October-November',
    description:
      'Morocco\'s best-preserved Roman city dates to the 3rd century BC. The Triumphal Arch, Basilica, and mosaic floors survive amid rolling farmland. Spring wildflowers (poppies, daisies) growing between columns create images that layer ancient history with living landscape. The site receives far fewer visitors than comparable ruins in Italy or Greece. Entry costs from 70 MAD.',
    tip: 'The mosaics in the House of Orpheus and House of Venus are remarkably intact. Shoot them from directly above with a wide-angle to capture full patterns.',
  },
  {
    rank: 18,
    name: 'Tafraoute Painted Rocks',
    region: 'Anti-Atlas',
    icon: Palette,
    bestTime: 'Morning light (8-10 AM) for saturated color on the painted boulders',
    season: 'February-April (almond blossom season adds pink foreground)',
    description:
      'Belgian artist Jean Vérame painted massive granite boulders in blue, red, violet, and pink in 1984. Though faded, the colors still pop against the desert landscape. The surrounding Anti-Atlas landscape of granite pinnacles, palm-filled valleys, and Berber villages is equally striking. During February, almond trees blanket the valley in white and pink blossoms.',
    tip: 'Combine with a visit to the Ameln Valley for shots of cliff-side Berber villages. The Napoleon\'s Hat rock formation 4 km from Tafraoute is another landmark composition.',
  },
  {
    rank: 19,
    name: 'Dades Valley & Road of a Thousand Kasbahs',
    region: 'Boumalne Dades',
    icon: Compass,
    bestTime: 'Golden hour — the valley runs east-west, catching perfect sidelight',
    season: 'March-May and September-November',
    description:
      'The Dades River has carved a canyon with hairpin bends, towering rock formations called "monkey fingers," and crumbling kasbahs at every turn. The famous hairpin road section (9 switchbacks in 1 km) photographs best from the opposing hillside. Further into the gorge, red rock walls tighten to 200 meters in height. Each kasbah ruin tells a story of abandoned Berber fortress life.',
    tip: 'Drive past the tourist restaurants to the inner gorge where the canyon narrows dramatically. The "monkey finger" rock formations are 3 km up a side track.',
  },
  {
    rank: 20,
    name: 'Bab Mansour — Meknes',
    region: 'Meknes',
    icon: Building,
    bestTime: 'Late afternoon (3-5 PM) when sunlight hits the gate directly',
    season: 'Year-round',
    description:
      'Considered the finest gateway in North Africa, Bab Mansour features green-and-white zellige tilework, carved marble columns recycled from Volubilis, and a horseshoe arch 16 meters high. The gate fronts Place el-Hedim, an open square that provides distance for full-frame shots. The intricate geometric patterns reward close-up detail photography with a macro or telephoto lens.',
    tip: 'Cross the square to the opposite side for a straight-on composition. Evening brings fruit sellers and activity that adds life to the foreground.',
  },
  {
    rank: 21,
    name: 'Hassan Tower & Mausoleum',
    region: 'Rabat',
    icon: Landmark,
    bestTime: 'Sunrise for soft light on the sandstone; avoid midday harshness',
    season: 'Year-round',
    description:
      'The unfinished 12th-century minaret stands 44 meters tall among 200 stone columns — the remnants of what would have been the world\'s largest mosque. The adjacent Mausoleum of Mohammed V features white marble, gilt bronze doors, and royal guards in ceremonial dress. The columns stretching toward the tower create strong leading-line compositions from any angle.',
    tip: 'The guards in traditional red-and-white uniforms standing motionless at the mausoleum entrance make powerful portrait subjects — photography of them is permitted.',
  },
  {
    rank: 22,
    name: 'Tangier Kasbah & Medina',
    region: 'Tangier',
    icon: Compass,
    bestTime: 'Late afternoon for warm light; blue hour for city lights over the strait',
    season: 'April-June and September-October',
    description:
      'The kasbah perches above the Strait of Gibraltar with views to Spain on clear days. Whitewashed walls, blue doors, bougainvillea, and steep staircases define the visual language. The Grand Socco connects old and new Tangier. The medina retains a rougher, more authentic feel than Marrakech or Fes — expect unposed daily life rather than tourist-facing scenes.',
    tip: 'Café Hafa\'s terraced seating overlooking the strait has drawn artists from Matisse to the Rolling Stones. The view alone justifies the visit.',
  },
  {
    rank: 23,
    name: 'Paradise Valley',
    region: 'Agadir / Imouzzer',
    icon: Mountain,
    bestTime: 'Midday (11 AM-2 PM) when sun reaches the canyon floor',
    season: 'April-October (water levels drop by late summer)',
    description:
      'A hidden canyon 30 km north of Agadir with natural swimming pools, palm trees, and boulder-strewn cascades. The turquoise water against red rock walls creates color contrast that looks enhanced but is completely natural. The hike down takes 30 minutes along a well-marked path. Local Berber families operate small cafés at the pools.',
    tip: 'Bring water shoes for crossing pools to reach the upper cascades. The second pool has the best overhanging cliff for framing shots.',
  },
  {
    rank: 24,
    name: 'Asilah Murals & Medina',
    region: 'Asilah',
    icon: Palette,
    bestTime: 'Morning (8-11 AM) for even light on painted walls',
    season: 'July-August (murals refreshed for Asilah Festival) and year-round',
    description:
      'Every summer, international artists repaint the medina walls during the Asilah Arts Festival (since 1978). The result is an open-air gallery of murals, geometric patterns, and painted doorways against whitewashed walls. Outside festival season, remnants of previous years\' art fade gradually, adding a layered texture. The Atlantic ramparts at the medina edge add a coastal dimension.',
    tip: 'The narrow streets near Bab Homar have the highest concentration of murals. Time your visit with the festival (usually late July) for fresh artwork and artist encounters.',
  },
  {
    rank: 25,
    name: 'Atlas Film Studios — Ouarzazate',
    region: 'Ouarzazate',
    icon: Building,
    bestTime: 'Morning (9-11 AM) for warm light on set pieces',
    season: 'Year-round (outdoor sets best in October-April)',
    description:
      'The world\'s largest film studio by area has hosted productions from Kingdom of Heaven to The Mummy. Standing sets include Egyptian temples, a Tibetan monastery, and a Jerusalem streetscape. The surreal juxtaposition of ancient-looking sets against the desert backdrop creates images that blur fiction and reality. Entry costs from 50 MAD for self-guided tours.',
    tip: 'The Egyptian set with massive pharaoh statues photographs best in warm morning light. Ask about active productions — you might spot film crews at work.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPhotographySpots() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ══════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a0f0a] via-[#2d1810] to-[#0a0a0a]">
        <div className="hero-overlay" />
        <div className="moroccan-pattern" />
        <div className="relative z-10 container-morocco text-center py-20">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--color-gold)]">Photography Spots in Morocco</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-white mb-6 leading-tight">
            Best Photography Spots<br className="hidden md:block" /> in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto font-[family-name:var(--font-heading)] mb-8">
            25 locations that deliver extraordinary images — from Chefchaouen&apos;s blue alleys to Sahara sunrises, with golden hour timing, gear tips, and local etiquette for every spot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Camera className="w-4 h-4 text-[var(--color-gold)]" />
              25 Locations
            </span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Sunrise className="w-4 h-4 text-[var(--color-gold)]" />
              Golden Hour Timing
            </span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Globe className="w-4 h-4 text-[var(--color-gold)]" />
              Drone Regulations
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INTRO
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
                  Why Morocco Dominates Travel Photography
                </h2>
                <p className="text-gray-700 leading-relaxed font-[family-name:var(--font-heading)]">
                  Morocco delivers more visual diversity per square kilometer than almost any country on earth. Within a single day&apos;s drive, you move from Atlantic surf towns to 4,000-meter snow-capped peaks to red-earth desert. The light quality — intense, warm, directional — flatters every subject. Ancient medinas offer geometric patterns, saturated colors, and the kind of layered street scenes that reward slow, deliberate composition.
                </p>
                <p className="text-gray-700 leading-relaxed font-[family-name:var(--font-heading)] mt-4">
                  This guide ranks 25 locations by photographic potential, provides specific timing for optimal light at each spot, and covers the practical details — from drone laws to tipping etiquette for portrait subjects — that travel photography guides often skip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TOP 25 PHOTOGRAPHY SPOTS
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Top 25 Photography Spots Ranked
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Ranked by photographic potential, accessibility, and variety of compositions available. Each entry includes optimal timing and a field-tested tip.
            </p>
          </div>

          <div className="grid gap-6">
            {photographySpots.map((spot) => {
              const Icon = spot.icon;
              return (
                <div key={spot.rank} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center relative">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--color-gold)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {spot.rank}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                          {spot.name}
                        </h3>
                        <span className="text-sm text-[var(--color-accent)] font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {spot.region}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-[family-name:var(--font-heading)] mb-4">
                        {spot.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-[var(--color-gold)]" />
                          <span className="font-[family-name:var(--font-heading)]"><strong>Best time:</strong> {spot.bestTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-[var(--color-gold)]" />
                          <span className="font-[family-name:var(--font-heading)]"><strong>Season:</strong> {spot.season}</span>
                        </div>
                      </div>
                      <div className="bg-[var(--color-gold)]/5 border border-[var(--color-gold)]/20 rounded-lg p-3 flex items-start gap-2">
                        <Aperture className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                          <strong>Pro tip:</strong> {spot.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PHOTOGRAPHY ETIQUETTE
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Photography Etiquette in Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Respectful photography opens doors — literally. Understanding local expectations prevents confrontation and produces better, more authentic images.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Asking Permission</h3>
              </div>
              <ul className="space-y-3 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Always ask before photographing individuals. A simple &quot;Mumkin sura?&quot; (Can I take a photo?) goes far.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Women in rural areas generally do not want to be photographed. Respect refusals immediately and without debate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Children will eagerly pose — but photographing minors without parental consent raises ethical concerns. Ask a parent first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Show your subject the photo on your LCD screen afterward. This simple gesture builds goodwill.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Paying for Photos</h3>
              </div>
              <ul className="space-y-3 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Water sellers (guerrab) in Jemaa el-Fnaa charge from 10-20 MAD per photo. Agree on price before shooting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Snake charmers and henna artists expect payment if you photograph them — from 20-50 MAD is standard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Market vendors may expect a small purchase rather than cash if you photograph their stalls. Buying from 5-10 MAD of spices or sweets is a fair exchange.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Some people in tourist areas will step into your frame deliberately and then demand payment. Keep your camera lowered while negotiating.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Restricted Areas</h3>
              </div>
              <ul className="space-y-3 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2">
                  <CircleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Military installations:</strong> Photographing any military facility, checkpoint, or personnel is illegal and can result in detention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Royal palaces:</strong> Exterior photography of palace gates is fine, but pointing cameras at guards, security infrastructure, or palace interiors is prohibited.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Police stations:</strong> Do not photograph police buildings, officers, or vehicles without explicit permission.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Mosques:</strong> Interior photography is restricted to Hassan II Mosque (Casablanca). Other mosques are closed to non-Muslims entirely.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Cultural Sensitivity</h3>
              </div>
              <ul className="space-y-3 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>During Ramadan, avoid photographing people eating or drinking before iftar (sunset meal). Public consumption during fasting hours is illegal for Muslims.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Friday prayers (12-2 PM) are not a photo opportunity. Stay away from mosque entrances during this time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Photographing poverty, disability, or homelessness for &quot;authentic&quot; travel content is exploitative. Focus on dignity and agency in your subjects.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>Learning basic Darija (Moroccan Arabic) phrases shows respect: &quot;Shukran&quot; (thank you), &quot;Smeh liya&quot; (excuse me), &quot;La bas?&quot; (how are you?).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BEST TIME OF DAY & SEASON
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Best Time of Day &amp; Season by Location Type
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Morocco&apos;s diverse geography means each category of location has its own optimal timing. This cheat sheet covers the patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <CloudSun className="w-6 h-6 text-[var(--color-gold)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Medinas &amp; Cities</h3>
              </div>
              <div className="space-y-3 text-gray-700 text-sm font-[family-name:var(--font-heading)]">
                <p><strong>Best light:</strong> First hour after sunrise and last hour before sunset. Midday sun in narrow streets creates harsh overhead shadows.</p>
                <p><strong>Best season:</strong> October-November and March-April. Summer heat empties streets from noon to 4 PM. Winter light is warmer but days are shorter.</p>
                <p><strong>Blue hour:</strong> Marrakech and Fes medinas look striking 20-30 minutes after sunset when ambient light balances with warm shop lighting.</p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="w-6 h-6 text-[var(--color-gold)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Mountains &amp; Gorges</h3>
              </div>
              <div className="space-y-3 text-gray-700 text-sm font-[family-name:var(--font-heading)]">
                <p><strong>Best light:</strong> Early morning before clouds build (typical by 2 PM in the High Atlas). Todra and Dades gorges need midday sun to reach the canyon floor.</p>
                <p><strong>Best season:</strong> April-June for wildflowers, September-November for clear skies. January-March if you want snow on peaks — Toubkal summit gets 2+ meters.</p>
                <p><strong>Hazard:</strong> Mountain weather changes fast. Carry rain protection for your gear from November through March.</p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-[var(--color-gold)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Desert &amp; Sahara</h3>
              </div>
              <div className="space-y-3 text-gray-700 text-sm font-[family-name:var(--font-heading)]">
                <p><strong>Best light:</strong> Sunrise and sunset — the only times when dune shadows create texture. Midday flattens everything into a white-orange blur.</p>
                <p><strong>Best season:</strong> October-March exclusively. April-September temperatures exceed 45°C, sand burns bare skin, and mirages distort telephoto shots.</p>
                <p><strong>Gear note:</strong> Sand infiltrates everything. Use a UV filter as a sacrificial front element and keep lens changes to an absolute minimum.</p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-6 h-6 text-[var(--color-gold)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Coastal Towns</h3>
              </div>
              <div className="space-y-3 text-gray-700 text-sm font-[family-name:var(--font-heading)]">
                <p><strong>Best light:</strong> Late afternoon (4-6 PM) when warm light hits west-facing ramparts and harbors. Morning works for east-facing subjects.</p>
                <p><strong>Best season:</strong> Year-round. Winter storms (December-February) add dramatic waves and moody skies to Essaouira and Sidi Ifni shots.</p>
                <p><strong>Wind factor:</strong> Essaouira and Tarfaya are among Africa&apos;s windiest cities. Use faster shutter speeds and secure tripods with a hanging weight.</p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6 text-[var(--color-gold)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Palaces &amp; Monuments</h3>
              </div>
              <div className="space-y-3 text-gray-700 text-sm font-[family-name:var(--font-heading)]">
                <p><strong>Best light:</strong> Open courtyards need midday sun. Exterior facades look best in warm sidelight (morning or afternoon depending on orientation).</p>
                <p><strong>Best season:</strong> Shoulder months (March-April, October-November) have fewer tourists blocking compositions. Arrive at opening time for empty courtyards.</p>
                <p><strong>Indoor tip:</strong> Most palaces prohibit flash. Bring a fast prime lens (f/1.8-2.8) or bump ISO to 1600-3200 for handheld shots in dim interiors.</p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-[var(--color-gold)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Kasbahs &amp; Ksour</h3>
              </div>
              <div className="space-y-3 text-gray-700 text-sm font-[family-name:var(--font-heading)]">
                <p><strong>Best light:</strong> Golden hour transforms earthen walls from flat brown to deep amber and copper. Sidelight reveals texture in mud-brick construction.</p>
                <p><strong>Best season:</strong> October-April. The Draa and Dades valleys run east-west, catching perfect sidelight at sunrise and sunset.</p>
                <p><strong>Composition:</strong> Include palm trees, rivers, or people for scale. Ait Benhaddou and Tamnougalt both benefit from elevated viewpoints on opposing hillsides.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GEAR RECOMMENDATIONS
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Gear Recommendations for Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              You do not need top-tier equipment to capture Morocco well. A modern smartphone with manual controls handles 80% of situations. Here is what to pack if you want to go further.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Focus className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Essential Kit</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-700 font-[family-name:var(--font-heading)] text-sm">
                <div>
                  <p className="font-semibold mb-1">Wide-angle zoom (16-35mm)</p>
                  <p>Covers medina alleys, mosque interiors, palace courtyards, and sweeping desert panoramas. The single most useful lens in Morocco.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Standard zoom (24-70mm)</p>
                  <p>All-purpose lens for street scenes, food photography, architectural details, and portraits. Handles 60% of travel shooting.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Telephoto zoom (70-200mm)</p>
                  <p>Essential for tannery details from rooftop terraces, Atlas Mountain compression shots, and isolating architectural patterns from a distance.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Fast prime (35mm or 50mm f/1.8)</p>
                  <p>Low-light performance for dim medina passageways, riad interiors, and evening street scenes without flash. Lightweight backup lens.</p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Aperture className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Accessories Worth the Weight</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-700 font-[family-name:var(--font-heading)] text-sm">
                <div>
                  <p className="font-semibold mb-1">Circular polarizing filter</p>
                  <p>Deepens blue skies, cuts reflections on zellige tilework, and saturates colors in palace courtyards. Worth the expense.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">ND filter (6-10 stop)</p>
                  <p>Long exposures at Ouzoud Falls, smoothing Atlantic waves at Essaouira, and motion blur in busy souks during daylight hours.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Compact travel tripod</p>
                  <p>Carbon fiber models under 1.5 kg handle Morocco&apos;s wind. Essential for Sahara sunrise time-lapses, long exposures, and blue hour shooting.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Microfiber cloths &amp; sensor cleaning kit</p>
                  <p>Sahara sand and medina dust coat lenses fast. Carry at least three microfiber cloths and a rocket blower for quick field cleaning.</p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">Protection &amp; Storage</h3>
              </div>
              <ul className="space-y-2 text-gray-700 font-[family-name:var(--font-heading)] text-sm">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span><strong>Camera bag:</strong> Use a non-branded, nondescript bag. A Peak Design Everyday or Lowepro Fastpack blends in better than a bright yellow Pelican case.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span><strong>Rain cover:</strong> A plastic bag works in emergencies, but a dedicated rain cover (from 100 MAD in Morocco) protects against both rain and sand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span><strong>Memory cards:</strong> Carry at least 256 GB total across multiple cards. Store backup cards in a separate pocket from your camera in case of theft.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span><strong>Power:</strong> Morocco uses European Type C/E plugs (220V). Bring a universal adapter and a portable battery bank for full-day shoots away from outlets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DRONE RULES
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Drone Photography Rules in Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Morocco has strict drone regulations. Flying without authorization leads to confiscation and potential fines. Here is what you need to know before packing your drone.
            </p>
          </div>

          <div className="card-moroccan p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Authorization Required</h3>
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                    All drone flights in Morocco require prior authorization from the Direction Generale de l&apos;Aviation Civile (DGAC). Applications must be submitted at least 30 days before your planned flight. The process involves submitting your drone specifications, flight plan, dates, and locations. Approval is not guaranteed, and processing times vary. Apply through the DGAC website or the Moroccan embassy in your country.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <CircleAlert className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Customs Confiscation Risk</h3>
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                    Multiple travelers report drones being confiscated at Moroccan customs (airports and land borders). Without a DGAC authorization letter, customs officers may seize your drone and hold it until departure. Some travelers have successfully recovered their drones at departure; others have not. Declaring your drone on arrival and presenting your DGAC permit significantly improves your chances of keeping it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">No-Fly Zones</h3>
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed mb-3">
                    Even with DGAC authorization, the following areas are strictly prohibited:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    <li className="flex items-center gap-2"><CircleAlert className="w-3.5 h-3.5 text-red-500" /> Royal palaces and residences</li>
                    <li className="flex items-center gap-2"><CircleAlert className="w-3.5 h-3.5 text-red-500" /> Military bases and installations</li>
                    <li className="flex items-center gap-2"><CircleAlert className="w-3.5 h-3.5 text-red-500" /> Airport zones (5 km radius)</li>
                    <li className="flex items-center gap-2"><CircleAlert className="w-3.5 h-3.5 text-red-500" /> Government buildings</li>
                    <li className="flex items-center gap-2"><CircleAlert className="w-3.5 h-3.5 text-red-500" /> Dense urban areas without specific clearance</li>
                    <li className="flex items-center gap-2"><CircleAlert className="w-3.5 h-3.5 text-red-500" /> National parks (separate permit needed)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[var(--color-gold)]/5 border border-[var(--color-gold)]/20 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                  <strong>Practical advice:</strong> Unless you are a professional with a specific commercial need, leave your drone at home. The permit process is uncertain, confiscation risk is real, and Morocco&apos;s best shots are ground-level compositions — medina alleys, dune ridgelines, mountain valleys — that drones cannot improve. The hassle-to-reward ratio is poor for most recreational drone pilots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQ
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Practical answers to the most common questions about photographing in Morocco.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-start gap-3">
                  <span className="w-7 h-7 bg-[var(--color-accent)] text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed pl-10">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          RELATED GUIDES
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Related Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Plan the rest of your Morocco trip with these in-depth guides.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link href="/best-time-visit-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  Best Time to Visit
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Month-by-month breakdown of weather, festivals, and crowd levels across Morocco.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium mt-3 flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  Packing List
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Complete packing guide with season-specific clothing, gear, and essentials.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium mt-3 flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/sahara-desert" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Sun className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  Sahara Desert Guide
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Desert camps, camel treks, and practical logistics for visiting the Sahara.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium mt-3 flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/chefchaouen" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  Chefchaouen Guide
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Full guide to the Blue City — restaurants, hotels, hikes, and hidden alleys.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium mt-3 flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/morocco-safety" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  Safety Guide
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Practical safety advice for traveling Morocco, including gear protection tips.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium mt-3 flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/morocco-budget-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  Budget Guide
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Cost breakdown for accommodation, transport, food, and entry fees across Morocco.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium mt-3 flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/first-time-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Compass className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  First Time Visitor
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Everything first-time visitors need to know — visas, culture, money, and transport.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium mt-3 flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/morocco-weather" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <CloudSun className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  Weather Guide
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Regional weather patterns, temperature charts, and what to expect by season.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium mt-3 flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#1a0f0a] via-[#2d1810] to-[#0a0a0a] relative">
        <div className="moroccan-pattern" />
        <div className="relative z-10 container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-white mb-6">
            Ready to Capture Morocco?
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto font-[family-name:var(--font-heading)] mb-8">
            Plan your photography trip with our complete Morocco travel guides. From desert camps to mountain lodges, find the right base for every shoot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
            >
              Browse Photography Tours <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/destinations"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors border border-white/20"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

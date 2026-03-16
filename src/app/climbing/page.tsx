import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  Shield,
  Calendar,
  Compass,
  Heart,
  Navigation,
  ArrowRight,
  PhoneCall,
  Sun,
  Users,
  BookOpen,
  Globe,
  Tent,
  Route,
  CircleDollarSign,
  Ruler,
  Layers,
  Wrench,
  LifeBuoy,
  Award,
  Sunrise,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Rock Climbing & Canyoning in Morocco | Todra Gorge, Taghia & More',
  description:
    'Complete guide to rock climbing and canyoning in Morocco. From the 300m walls of Todra Gorge and world-class big wall climbing at Taghia Canyon to granite bouldering in Tafraoute, canyoning in Paradise Valley, and via ferrata. Routes, seasons, guides, gear rental, and grade conversions.',
  keywords: [
    'Morocco rock climbing',
    'Todra Gorge climbing',
    'Taghia Canyon climbing',
    'Tafraoute bouldering',
    'Morocco canyoning',
    'Paradise Valley canyoning',
    'Oukaimeden bouldering',
    'Bin el Ouidane climbing',
    'Morocco via ferrata',
    'Morocco climbing guide',
    'Morocco sport climbing',
    'Morocco multi-pitch',
    'Morocco big wall',
    'Cascades Akchour canyoning',
    'Morocco climbing season',
    'Morocco climbing festivals',
    'Morocco adventure sports',
  ],
  openGraph: {
    title: 'Rock Climbing & Canyoning in Morocco',
    description:
      'The definitive guide to climbing and canyoning in Morocco. Todra Gorge, Taghia Canyon, Tafraoute bouldering, and more across the Atlas and Anti-Atlas mountains.',
    url: 'https://citytoursmorocco.com/climbing',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Rock climber on the limestone walls of Todra Gorge, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/climbing' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      '@id': 'https://citytoursmorocco.com/climbing#guide',
      name: 'Rock Climbing & Canyoning in Morocco',
      description:
        'Complete guide to rock climbing, bouldering, canyoning, and via ferrata in Morocco, covering Todra Gorge, Taghia Canyon, Tafraoute, Oukaimeden, and more.',
      url: 'https://citytoursmorocco.com/climbing',
      touristType: ['Rock climbing', 'Canyoning', 'Bouldering', 'Adventure sports', 'Multi-pitch climbing'],
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1200',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'MA',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Morocco a good destination for rock climbing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco is an emerging world-class climbing destination. Todra Gorge offers 450+ routes on 300m limestone walls for all grades. Taghia Canyon is considered one of the best big wall limestone climbing venues in the world, with multi-pitch routes up to 800m. Tafraoute in the Anti-Atlas provides excellent granite bouldering and sport climbing. The combination of quality rock, affordable costs, warm climate, and rich culture makes Morocco increasingly popular with climbers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best season for climbing in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best climbing season depends on the area. Todra Gorge and Taghia are best from March to May and September to November, when temperatures are comfortable (15-25C). Summer is too hot at lower elevations. Tafraoute in the Anti-Atlas is best October to April. Oukaimeden at 2,600m is a summer destination (June-September). Winter climbing is possible in southern areas like Tafraoute.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a guide for climbing in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For sport climbing at Todra Gorge and Tafraoute, experienced climbers can operate independently with a guidebook. For multi-pitch climbing at Taghia Canyon, a guide is strongly recommended due to route-finding complexity, remote location, and limited rescue infrastructure. For canyoning, a guide is essential as conditions change with rainfall and flash floods are a serious risk.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   CLIMBING AREAS DATA
   ═══════════════════════════════════════════════════════════════ */

interface ClimbingArea {
  name: string;
  region: string;
  rockType: string;
  altitude: string;
  routeCount: string;
  gradeRange: string;
  climbingStyles: string[];
  bestSeason: string;
  description: string;
  highlights: string[];
  access: string;
  accommodation: string;
}

const climbingAreas: ClimbingArea[] = [
  {
    name: 'Todra Gorge',
    region: 'Tinghir, High Atlas (eastern side)',
    rockType: 'Limestone',
    altitude: '1,400 - 1,700m',
    routeCount: '450+',
    gradeRange: 'French 3a to 8b+ (all grades)',
    climbingStyles: ['Sport climbing', 'Multi-pitch', 'Trad (some)', 'Deep water soloing (seasonal)'],
    bestSeason: 'March - May, September - November',
    description:
      'Todra Gorge is Morocco\'s climbing epicenter and one of North Africa\'s most important climbing destinations. A dramatic slot canyon carved through the eastern High Atlas, with vertical limestone walls rising 300 meters on both sides, narrowing to just 10 meters at the tightest point. The gorge offers over 450 bolted sport routes across a wide range of grades, from beginner-friendly slabs to overhanging test pieces. The rock quality is generally excellent: sharp, featured limestone with pockets, tufas, and crimps. The concentration of routes, the spectacular setting (a river runs through the gorge base), and the variety of climbing styles make Todra the obvious first stop for any climber visiting Morocco.',
    highlights: ['300m vertical walls', '450+ sport routes', 'All grades 3a to 8b+', 'Dramatic slot canyon', 'River at the base', 'Well-bolted routes'],
    access: 'Fly to Ouarzazate or Errachidia, then 2-3 hours by car. Alternatively, a scenic 5-hour drive from Marrakech via the Tizi n\'Tichka pass and the Dades Valley. Grand taxis run from Tinghir (15 km).',
    accommodation: 'Hotels and guesthouses in the gorge from 200-600 MAD/night. Camping is popular near the gorge entrance (50-100 MAD). Tinghir town (15 min) has budget hotels from 150 MAD.',
  },
  {
    name: 'Taghia Canyon',
    region: 'Azilal Province, Central High Atlas',
    rockType: 'Limestone (high-quality)',
    altitude: '1,800 - 2,600m',
    routeCount: '200+ (with new routes being established annually)',
    gradeRange: 'French 5c to 8a+ (focus on harder grades)',
    climbingStyles: ['Multi-pitch (primary)', 'Big wall', 'Sport climbing', 'Traditional climbing'],
    bestSeason: 'April - June, September - October',
    description:
      'Taghia is Morocco\'s crown jewel and one of the world\'s premier big wall limestone climbing destinations. Hidden deep in the central High Atlas, accessible only by a 2-3 hour hike from the end of the nearest road, Taghia\'s canyon contains soaring limestone walls up to 800 meters high. The rock quality is world-class: compact, featured limestone with perfect cracks and sustained face climbing. Multi-pitch routes here range from 200m to 800m, with styles from fully bolted sport multi-pitch to bold traditional lines. The remoteness adds to the adventure: the Berber village of Taghia clings to the canyon rim, mules carry gear in, and the nearest hospital is hours away. Taghia is regularly compared to the Verdon Gorge in France but on a far grander scale, and with a fraction of the crowds.',
    highlights: ['Walls up to 800m', 'World-class limestone', 'Remote Berber village setting', 'Multi-pitch paradise', 'New routes still being established', 'Compared to Verdon/Yosemite'],
    access: 'From Marrakech: drive 5 hours to Zawyat Ahansal, then 2-3 hour hike (mules carry gear). From Beni Mellal: 3 hours drive + hike. No vehicle access to Taghia village itself.',
    accommodation: 'Guesthouses (gites) in Taghia village from 150-300 MAD/night with meals. Camping is possible. The gites are basic but comfortable, with home-cooked Berber meals included.',
  },
  {
    name: 'Tafraoute (Anti-Atlas)',
    region: 'Tiznit Province, Anti-Atlas',
    rockType: 'Granite (quartzite in some areas)',
    altitude: '1,000 - 1,800m',
    routeCount: '300+ (bouldering problems + sport routes)',
    gradeRange: 'V0 to V12 (bouldering), French 4a to 7c (sport)',
    climbingStyles: ['Bouldering (primary)', 'Sport climbing', 'Traditional climbing', 'Multi-pitch (some)'],
    bestSeason: 'October - April (too hot May-September)',
    description:
      'Tafraoute is Morocco\'s bouldering capital and a world-class granite playground. The Anti-Atlas landscape around this Berber town is surreal: massive pink and orange granite boulders are scattered across a desert landscape like giant marbles dropped by a titan. The rock is high-quality granite with excellent friction and a variety of problems from easy slab mantle to powerful overhangs. Beyond bouldering, Tafraoute also offers sport climbing and multi-pitch routes on the surrounding granite domes and quartzite cliffs. The famous "Painted Rocks" by Belgian artist Jean Verame add a psychedelic touch to the landscape. The town itself is charming, known for its almond blossom festival in February and its argan oil production.',
    highlights: ['World-class granite bouldering', 'Surreal boulder landscape', 'Pink/orange granite', 'Sport climbing also available', 'Almond blossom (February)', 'Painted Rocks landmark'],
    access: 'From Agadir: 3 hours by car via Tiznit. From Marrakech: 6 hours via Agadir. Tafraoute has a small but functional town center with supplies.',
    accommodation: 'Hotels in Tafraoute from 200-500 MAD/night. Camping is very popular among climbers, with several informal camping spots near the bouldering areas (free to low cost). Guesthouses in surrounding villages from 150 MAD.',
  },
  {
    name: 'Oukaimeden',
    region: 'High Atlas, south of Marrakech',
    rockType: 'Volcanic / Andesite / Sandstone',
    altitude: '2,600 - 3,200m',
    routeCount: '100+ bouldering problems',
    gradeRange: 'V0 to V10',
    climbingStyles: ['Bouldering (primary)', 'Some sport climbing'],
    bestSeason: 'June - September (snow-free months)',
    description:
      'Morocco\'s ski resort in winter transforms into a high-altitude bouldering destination in summer. At 2,600 meters in the High Atlas, just 75 km south of Marrakech, Oukaimeden offers a unique climbing experience: volcanic boulders scattered across alpine meadows with views of Jbel Toubkal (4,167m), North Africa\'s highest peak. The altitude keeps summer temperatures comfortable when lower climbing areas are too hot. The rock is a mix of volcanic andesite and sandstone with varied textures. The bouldering scene here is still developing, with new problems being cleaned and established each season. Petroglyphs (ancient rock carvings) are found among the boulders, adding a historical dimension.',
    highlights: ['2,600m altitude', 'Cool summer climbing', '75 km from Marrakech', 'Alpine meadow setting', 'Views of Jbel Toubkal', 'Ancient petroglyphs'],
    access: 'From Marrakech: 1.5 hours by car via the Ourika Valley road. Grand taxis available from Marrakech. Road is paved all the way.',
    accommodation: 'Hotel Chez JuJu from 400 MAD, CAF refuge from 150 MAD, camping possible in meadows. Limited facilities in summer but a great day trip from Marrakech.',
  },
  {
    name: 'Bin el Ouidane',
    region: 'Beni Mellal-Khenifra, Atlas foothills',
    rockType: 'Limestone',
    altitude: '800 - 1,200m',
    routeCount: '80+ sport routes',
    gradeRange: 'French 4a to 7c',
    climbingStyles: ['Sport climbing (primary)', 'Deep water soloing (at reservoir)'],
    bestSeason: 'October - May',
    description:
      'A lesser-known but increasingly popular climbing area centered around the reservoir and dam near Beni Mellal. The limestone cliffs surrounding the turquoise reservoir offer well-bolted sport climbing on good-quality rock. The real draw here is the deep water soloing (DWS) potential: several overhanging limestone cliffs drop directly into the deep reservoir, allowing climbers to boulder over water without ropes. The setting is spectacular, with turquoise water against honey-colored cliffs. The area is also a useful stopover between Marrakech and Todra Gorge, breaking the long drive with a day of climbing.',
    highlights: ['Deep water soloing', 'Turquoise reservoir', 'Sport climbing', 'Stopover between Marrakech and Todra', 'Growing route database', 'Scenic setting'],
    access: 'From Marrakech: 3.5 hours by car via Beni Mellal. From Fes: 4 hours. The dam and cliffs are a short drive from the village of Bin el Ouidane.',
    accommodation: 'Guesthouses near the lake from 200-400 MAD/night. Hotels in Beni Mellal (40 min drive) from 300 MAD. Lakeside camping is possible.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   CANYONING EXPERIENCES DATA
   ═══════════════════════════════════════════════════════════════ */

interface CanyonExperience {
  name: string;
  location: string;
  difficulty: string;
  duration: string;
  bestSeason: string;
  waterLevel: string;
  description: string;
  includes: string[];
  priceRange: string;
}

const canyoningExperiences: CanyonExperience[] = [
  {
    name: 'Paradise Valley Canyoning',
    location: 'Agadir / Taghazout hinterland',
    difficulty: 'Easy to Moderate',
    duration: 'Half-day (3-4 hours)',
    bestSeason: 'March - November',
    waterLevel: 'Low to moderate (seasonal)',
    description:
      'Paradise Valley is a stunning series of natural freshwater pools, small waterfalls, and palm-fringed gorges in the foothills of the Atlas Mountains, just 30 km from Taghazout. Canyoning here involves a combination of scrambling over boulders, wading through crystal-clear pools, jumping into deep natural plunge pools (up to 8 meters), and short rappels down rock faces. The water is refreshingly cool, the canyon walls are covered in lush vegetation, and the contrast with the arid coast just a short drive away is remarkable. This is the most accessible canyoning experience in Morocco and a perfect complement to a surf trip on the coast.',
    includes: ['Helmet and harness', 'Guide service', 'Transport from Taghazout/Agadir', 'Basic instruction', 'Cliff jumping opportunities'],
    priceRange: '400-700 MAD per person',
  },
  {
    name: 'Cascades d\'Akchour',
    location: 'Chefchaouen, Rif Mountains',
    difficulty: 'Easy to Moderate',
    duration: 'Full day (5-7 hours)',
    bestSeason: 'April - October',
    waterLevel: 'Moderate (spring-fed)',
    description:
      'Located in the Talassemtane National Park near Chefchaouen (the famous Blue City), the Akchour waterfalls and gorge offer one of Morocco\'s most beautiful canyoning and hiking experiences. The canyon follows a river through a lush, green gorge with two major waterfalls: the Small Cascade (accessible in 45 minutes) and the Grand Cascade (3-hour hike). Canyoning activities include wading through the river, scrambling over mossy boulders, and swimming through pools beneath towering cliffs. The surrounding forest of Barbary oaks and cedars creates a green, almost tropical atmosphere unique in Morocco.',
    includes: ['Guide service', 'Safety equipment', 'National park entry guidance', 'Swimming in natural pools', 'Waterfall access'],
    priceRange: '300-600 MAD per person',
  },
  {
    name: 'Todra Gorge Canyoning',
    location: 'Tinghir, High Atlas',
    difficulty: 'Moderate to Challenging',
    duration: 'Full day (5-8 hours)',
    bestSeason: 'April - June, September - October',
    waterLevel: 'Variable (rainfall dependent)',
    description:
      'Beyond its famous climbing, Todra Gorge offers canyoning adventures that explore the narrower upper sections of the gorge system, above where the tourist vehicles stop. These upper canyons involve rappelling down waterfalls (up to 30 meters), swimming through deep, cold pools in narrow slot canyons, and navigating through sections where the canyon walls close in to barely shoulder width. The experience is more technical and committing than Paradise Valley, requiring comfort with heights, cold water, and confined spaces. The reward is seeing a side of Todra that most visitors never reach.',
    includes: ['Full technical equipment', 'Certified guide', 'Rappel instruction', 'Wetsuit (cold water sections)', 'Lunch in canyon'],
    priceRange: '600-1,000 MAD per person',
  },
];

/* ═══════════════════════════════════════════════════════════════
   VIA FERRATA OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const viaFerrataOptions = [
  {
    name: 'Todra Gorge Via Ferrata',
    location: 'Todra Gorge, Tinghir',
    difficulty: 'K2 - K4 (moderate to difficult)',
    duration: '3-5 hours',
    height: 'Up to 200m above gorge floor',
    description:
      'A spectacular via ferrata route that ascends the walls of Todra Gorge, offering climbers who may not have the technical skills for free climbing the chance to experience the gorge\'s vertical world. The route follows a line of iron rungs, cables, and ladders bolted into the limestone, with several exposed traverses and a dramatic finish on the canyon rim. Views down into the narrow gorge from the route are extraordinary.',
    priceRange: '400-700 MAD (with guide and equipment)',
  },
  {
    name: 'Tazarourte Via Ferrata',
    location: 'Near Beni Mellal',
    difficulty: 'K2 - K3 (easy to moderate)',
    duration: '2-3 hours',
    height: 'Up to 100m',
    description:
      'A newer via ferrata installation in the Atlas foothills near Beni Mellal, suitable for beginners and families. The route follows a scenic line up a limestone cliff with good holds, a Himalayan bridge (suspension wire bridge), and a zipline descent. It is the most accessible via ferrata in Morocco and a good introduction to the activity.',
    priceRange: '300-500 MAD (with guide and equipment)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   GRADE CONVERSION TABLE
   ═══════════════════════════════════════════════════════════════ */

const gradeConversions = [
  { french: '4a', yds: '5.5', uiaa: 'IV', british: 'VD 3b', description: 'Easy' },
  { french: '5a', yds: '5.7', uiaa: 'V+', british: 'HS 4b', description: 'Moderate' },
  { french: '5c', yds: '5.9', uiaa: 'VI', british: 'HVS 5a', description: 'Moderate-Hard' },
  { french: '6a', yds: '5.10a', uiaa: 'VI+', british: 'E1 5a', description: 'Hard' },
  { french: '6b', yds: '5.10c', uiaa: 'VII-', british: 'E2 5b', description: 'Hard' },
  { french: '6c', yds: '5.11a', uiaa: 'VII', british: 'E3 5c', description: 'Very Hard' },
  { french: '7a', yds: '5.11d', uiaa: 'VII+', british: 'E4 6a', description: 'Very Hard' },
  { french: '7b', yds: '5.12b', uiaa: 'VIII-', british: 'E5 6b', description: 'Extremely Hard' },
  { french: '7c', yds: '5.12d', uiaa: 'VIII', british: 'E6 6b', description: 'Extremely Hard' },
  { french: '8a', yds: '5.13a', uiaa: 'VIII+', british: 'E7 6c', description: 'Elite' },
  { french: '8b', yds: '5.13d', uiaa: 'IX-', british: 'E8 7a', description: 'Elite' },
];

/* ═══════════════════════════════════════════════════════════════
   SEASONAL GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const seasonalByArea = [
  {
    area: 'Todra Gorge (1,400m)',
    spring: { rating: 'Excellent', temp: '15-25C', notes: 'Perfect conditions. Wildflowers. River flowing. Book ahead.' },
    summer: { rating: 'Too Hot', temp: '35-42C', notes: 'Unbearable midday heat. Dawn/dusk only. Not recommended.' },
    autumn: { rating: 'Excellent', temp: '18-28C', notes: 'Ideal conditions. Fewer crowds than spring. Dry rock.' },
    winter: { rating: 'Good', temp: '5-18C', notes: 'Cool mornings, pleasant midday. Short days. South-facing walls in sun.' },
  },
  {
    area: 'Taghia Canyon (1,800m)',
    spring: { rating: 'Excellent', temp: '10-22C', notes: 'Best season. Snow melting adds to scenery. Access road improving.' },
    summer: { rating: 'Good', temp: '20-32C', notes: 'Altitude keeps it bearable. Avoid south-facing walls midday.' },
    autumn: { rating: 'Excellent', temp: '12-24C', notes: 'Stable weather. Dry rock. Excellent multi-pitch conditions.' },
    winter: { rating: 'Cold', temp: '0-12C', notes: 'Possible but cold. Snow above 2,000m. Limited daylight.' },
  },
  {
    area: 'Tafraoute (1,200m)',
    spring: { rating: 'Good', temp: '18-28C', notes: 'Warming up. Almond blossom in Feb-Mar. Comfortable climbing.' },
    summer: { rating: 'Too Hot', temp: '35-45C', notes: 'Extreme heat. Not viable for climbing. Granite radiates heat.' },
    autumn: { rating: 'Excellent', temp: '20-30C', notes: 'Ideal conditions. Cool mornings, warm days. Peak climbing season.' },
    winter: { rating: 'Good', temp: '8-20C', notes: 'Pleasant daytime climbing. Cool mornings. Good friction on granite.' },
  },
  {
    area: 'Oukaimeden (2,600m)',
    spring: { rating: 'Variable', temp: '5-15C', notes: 'Snow lingering. Access road may be affected. Late spring OK.' },
    summer: { rating: 'Excellent', temp: '15-25C', notes: 'Best season. Cool temperatures when lowlands are scorching. Alpine flowers.' },
    autumn: { rating: 'Good', temp: '8-18C', notes: 'Cooling down. Clear skies. Good for a few more weeks until November.' },
    winter: { rating: 'Snow', temp: '-5 to 8C', notes: 'Ski season. Boulders under snow. Not viable for climbing.' },
  },
  {
    area: 'Bin el Ouidane (900m)',
    spring: { rating: 'Excellent', temp: '15-25C', notes: 'Perfect for DWS as water warms. Reservoir levels high.' },
    summer: { rating: 'Hot', temp: '30-40C', notes: 'Hot but DWS makes it viable. Early morning sport climbing OK.' },
    autumn: { rating: 'Good', temp: '18-28C', notes: 'Comfortable sport climbing. Reservoir still warm enough for DWS.' },
    winter: { rating: 'Cool', temp: '8-18C', notes: 'Sport climbing fine. DWS too cold. Peaceful, uncrowded.' },
  },
];

/* ═══════════════════════════════════════════════════════════════
   GUIDE SERVICES DATA
   ═══════════════════════════════════════════════════════════════ */

const guideServices = [
  { name: 'Climb Morocco', location: 'Todra Gorge / Taghia', specialty: 'Multi-pitch, big wall, guiding', contact: 'climbmorocco.com' },
  { name: 'Morocco Rock Climbing', location: 'Todra / Tafraoute', specialty: 'Sport climbing courses, guiding', contact: 'moroccorock.com' },
  { name: 'Aztat Guides', location: 'Taghia Canyon', specialty: 'Local Berber guides, multi-pitch, trekking', contact: 'Local booking at Taghia gites' },
  { name: 'Atlas Mountain Guides', location: 'All Atlas areas', specialty: 'Climbing, canyoning, trekking, via ferrata', contact: 'Various operators in Marrakech' },
  { name: 'Canyon Aventure', location: 'Paradise Valley / Todra', specialty: 'Canyoning, via ferrata, adventure activities', contact: 'Agadir/Taghazout based' },
  { name: 'Rif Adventures', location: 'Chefchaouen', specialty: 'Akchour canyoning, Rif trekking', contact: 'Chefchaouen based' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ClimbingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-climbing.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Rock Climbing &amp; Canyoning</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Rock Climbing &amp; Canyoning
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the 300-meter limestone walls of Todra Gorge to world-class big wall climbing at Taghia Canyon, Morocco is an emerging climbing superpower with year-round opportunities across the Atlas and Anti-Atlas mountains.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#climbing-areas" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors">
              <Mountain className="w-4 h-4" />
              Climbing Areas
            </a>
            <a href="#canyoning" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Route className="w-4 h-4" />
              Canyoning
            </a>
            <a href="#grades" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Ruler className="w-4 h-4" />
              Grade Conversions
            </a>
            <a href="#seasons" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Calendar className="w-4 h-4" />
              Best Seasons
            </a>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: An Emerging World-Class Climbing Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the intersection of three great mountain ranges &mdash; the High Atlas, the Middle Atlas, and the Anti-Atlas &mdash; creating a remarkably diverse vertical playground that is increasingly recognized as one of the world&apos;s great climbing destinations. The country offers everything from beginner-friendly single-pitch sport climbing to world-class big wall multi-pitch routes on walls that rival the Dolomites and Yosemite in scale, if not yet in fame.
              </p>
              <p>
                The star of Moroccan climbing is the limestone. Millions of years of geological uplift and erosion have created gorges, towers, and faces of extraordinary quality. Todra Gorge, with its 300-meter walls and over 450 routes, is the most accessible and well-developed climbing area. But the real jewel is Taghia Canyon, hidden deep in the central High Atlas, where walls of up to 800 meters of pristine limestone attract the world&apos;s elite alpinists. First explored by French climbers in the 1970s, Taghia is still yielding first ascents and is considered by many to be the finest limestone big wall climbing venue on the planet.
              </p>
              <p>
                Beyond limestone, the Anti-Atlas around Tafraoute offers world-class granite bouldering among surreal pink boulders scattered across a desert landscape. At 2,600 meters, Oukaimeden provides high-altitude summer bouldering when the lowlands are too hot. And the growing canyoning scene &mdash; from the lush pools of Paradise Valley to the waterfalls of Akchour &mdash; adds a wet dimension to Morocco&apos;s vertical adventures.
              </p>
              <p>
                What sets Morocco apart is the combination of quality rock, affordable costs, warm climate, fascinating culture, and a welcome that makes climbers feel like honored guests. A day on the walls of Todra Gorge costs a fraction of a day in Kalymnos or Fontainebleau, and the tagine dinner that follows may be the best meal of your trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Mountain, value: '1,000+', label: 'Established Routes' },
              { icon: Layers, value: '5', label: 'Major Climbing Areas' },
              { icon: Ruler, value: '800m', label: 'Tallest Walls (Taghia)' },
              { icon: Sun, value: '300+', label: 'Climbing Days / Year' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <stat.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Major Climbing Areas ── */}
      <section id="climbing-areas" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Major Climbing Areas
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s five principal climbing areas span from the eastern High Atlas to the Anti-Atlas, each with its own distinct character, rock type, and appeal.
            </p>
          </div>

          <div className="space-y-10">
            {climbingAreas.map((area) => (
              <div key={area.name} className="card-moroccan overflow-hidden">
                <div className="grid md:grid-cols-3">
                  {/* Main Content */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">{area.name}</h3>
                        <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {area.region}
                        </p>
                      </div>
                      <span className="tag tag-primary text-[10px]">{area.routeCount} routes</span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {area.highlights.map((h) => (
                        <span key={h} className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                          <Navigation className="w-3 h-3 text-[var(--color-primary)]" /> Access
                        </h5>
                        <p className="text-xs text-[var(--text-secondary)]">{area.access}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                          <Tent className="w-3 h-3 text-[var(--color-primary)]" /> Accommodation
                        </h5>
                        <p className="text-xs text-[var(--text-secondary)]">{area.accommodation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Side Panel */}
                  <div className="p-6 md:p-8 bg-[var(--surface-muted)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">Quick Facts</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Rock Type', value: area.rockType, icon: Layers },
                        { label: 'Altitude', value: area.altitude, icon: Mountain },
                        { label: 'Grade Range', value: area.gradeRange, icon: Ruler },
                        { label: 'Best Season', value: area.bestSeason, icon: Calendar },
                      ].map((fact) => (
                        <div key={fact.label} className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/10">
                            <fact.icon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          </div>
                          <div>
                            <div className="text-xs text-[var(--text-muted)]">{fact.label}</div>
                            <div className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[var(--border-light)]">
                      <h5 className="text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wider">Climbing Styles</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {area.climbingStyles.map((style) => (
                          <span key={style} className="text-[10px] bg-white text-[var(--text-secondary)] px-2 py-0.5 rounded-full border border-[var(--border-light)]">
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Route Databases & Guidebooks ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-accent-dark)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Route Databases &amp; Guidebooks
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essential resources for planning your climbing trip to Morocco. Guidebooks are improving but still limited compared to European destinations, making local knowledge valuable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Todra Gorge Guidebook',
                author: 'Des Clark',
                type: 'Print guidebook',
                description: 'The definitive guide to Todra Gorge climbing, covering all 450+ routes with topos, approach descriptions, and grade information. Updated editions available at climbing shops in Tinghir and online. Essential for any Todra trip.',
                coverage: 'Todra Gorge: all sectors',
              },
              {
                title: 'Taghia - The Guidebook',
                author: 'Said Messaoudi & others',
                type: 'Print guidebook',
                description: 'Comprehensive guide to multi-pitch and big wall routes in the Taghia Canyon area. Includes approach information, route descriptions with topos, and practical information about the village and logistics. Available from specialist climbing bookshops.',
                coverage: 'Taghia Canyon: multi-pitch routes',
              },
              {
                title: 'thecrag.com - Morocco',
                author: 'Community-contributed',
                type: 'Online database (free)',
                description: 'The most comprehensive free online climbing database for Morocco. Community-contributed route information with GPS locations, grades, and user ratings. Coverage is best for Todra and Tafraoute, growing for other areas.',
                coverage: 'All areas, variable detail',
              },
              {
                title: '27 Crags - Morocco',
                author: 'Community-contributed',
                type: 'App + online',
                description: 'Digital guidebook platform with downloadable topos for offline use. Morocco coverage is growing, with good detail for Todra Gorge and some Tafraoute bouldering. Useful supplement to printed guidebooks.',
                coverage: 'Todra, Tafraoute, expanding',
              },
              {
                title: 'Bouldering in Morocco',
                author: 'Various / community',
                type: 'Print + online',
                description: 'Resources for Tafraoute bouldering are primarily community-contributed through online forums, blogs, and social media. Local information at climbing shops in Tafraoute town supplements published guides.',
                coverage: 'Tafraoute bouldering areas',
              },
              {
                title: 'Mountain Project - Morocco',
                author: 'Community-contributed',
                type: 'Online database (free)',
                description: 'Limited but growing coverage of Moroccan climbing areas. Best for major multi-pitch routes in Taghia and Todra. Useful for reading trip reports and beta from previous ascents.',
                coverage: 'Major routes, limited detail',
              },
            ].map((book) => (
              <div key={book.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{book.title}</h3>
                <p className="text-xs text-[var(--color-primary)] font-medium mb-2">{book.author} &mdash; {book.type}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{book.description}</p>
                <div className="text-xs bg-[var(--surface-muted)] rounded-lg p-2">
                  <span className="text-[var(--text-muted)]">Coverage:</span>{' '}
                  <span className="text-[var(--text-primary)] font-medium">{book.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Canyoning ── */}
      <section id="canyoning" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Route className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Canyoning Experiences
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s gorges, waterfalls, and canyons offer thrilling canyoning experiences that combine scrambling, swimming, rappelling, and cliff jumping in spectacular natural settings.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            {canyoningExperiences.map((canyon) => (
              <div key={canyon.name} className="card-moroccan overflow-hidden">
                <div className="grid md:grid-cols-4">
                  <div className="md:col-span-3 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{canyon.name}</h3>
                        <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {canyon.location}
                        </p>
                      </div>
                      <span className={`tag text-[10px] ${
                        canyon.difficulty.includes('Easy') ? 'tag-primary' :
                        canyon.difficulty.includes('Moderate') ? 'tag-secondary' : 'tag-accent'
                      }`}>
                        {canyon.difficulty}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{canyon.description}</p>
                    <div className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                      <p className="font-semibold text-[var(--text-primary)]">Includes:</p>
                      <ul className="flex flex-wrap gap-2">
                        {canyon.includes.map((item) => (
                          <li key={item} className="flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                            <CheckCircle className="w-2.5 h-2.5 text-[var(--color-primary)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-[var(--surface-muted)]">
                    <div className="space-y-3">
                      {[
                        { label: 'Duration', value: canyon.duration, icon: Clock },
                        { label: 'Best Season', value: canyon.bestSeason, icon: Calendar },
                        { label: 'Water Level', value: canyon.waterLevel, icon: Layers },
                        { label: 'Price', value: canyon.priceRange, icon: CircleDollarSign },
                      ].map((fact) => (
                        <div key={fact.label} className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/10">
                            <fact.icon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          </div>
                          <div>
                            <div className="text-xs text-[var(--text-muted)]">{fact.label}</div>
                            <div className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Canyoning Safety Warning */}
          <div className="card-moroccan p-6 border-l-4 border-red-500">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Canyoning Safety Warning
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              <div className="space-y-2">
                <p><span className="font-semibold text-red-700">Flash Floods:</span> Morocco&apos;s canyons are subject to flash floods, particularly in autumn and spring. A clear sky above you does not mean it is not raining upstream. Flash floods can arrive with little warning and have killed people in Todra Gorge and Paradise Valley.</p>
                <p><span className="font-semibold text-red-700">Always use a guide:</span> Do not attempt canyoning independently unless you have specific local knowledge. Conditions change with rainfall, and what was a gentle stream last week can be a raging torrent today.</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-semibold text-red-700">Check weather forecasts:</span> Review forecasts for the entire upstream catchment area, not just the canyon entrance. Cancel if rain is forecast anywhere in the watershed.</p>
                <p><span className="font-semibold text-red-700">Equipment requirements:</span> Proper canyoning requires helmets, harnesses, wetsuits (cold water), and rope skills. Never attempt technical canyons in casual clothing or without safety equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Via Ferrata ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Route className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Via Ferrata Options
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Via ferrata (iron roads) allow non-climbers to experience Morocco&apos;s vertical world using fixed ladders, rungs, and cables bolted into the rock face.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {viaFerrataOptions.map((vf) => (
              <div key={vf.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{vf.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {vf.location}
                    </p>
                  </div>
                  <span className="tag tag-primary text-[10px]">{vf.difficulty}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{vf.description}</p>
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Duration</div>
                    <div className="font-semibold text-[var(--text-primary)]">{vf.duration}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Height</div>
                    <div className="font-semibold text-[var(--text-primary)]">{vf.height}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Price</div>
                    <div className="font-semibold text-[var(--color-primary)]">{vf.priceRange}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grade Conversions ── */}
      <section id="grades" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Ruler className="w-6 h-6 text-[var(--color-accent-dark)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Grade Systems &amp; Conversions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco uses the French grading system for sport climbing. Here is how it converts to other major systems used around the world.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="px-4 py-3 text-left font-semibold">French</th>
                    <th className="px-4 py-3 text-left font-semibold">YDS (USA)</th>
                    <th className="px-4 py-3 text-left font-semibold">UIAA</th>
                    <th className="px-4 py-3 text-left font-semibold">British (Adj/Tech)</th>
                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeConversions.map((g, i) => (
                    <tr key={g.french} className={i % 2 === 0 ? 'bg-[var(--surface-muted)]' : ''}>
                      <td className="px-4 py-3 font-bold text-[var(--color-primary)]">{g.french}</td>
                      <td className="px-4 py-3 text-[var(--text-primary)]">{g.yds}</td>
                      <td className="px-4 py-3 text-[var(--text-primary)]">{g.uiaa}</td>
                      <td className="px-4 py-3 text-[var(--text-primary)]">{g.british}</td>
                      <td className="px-4 py-3 text-[var(--text-secondary)]">{g.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-moroccan p-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />
              Grading Notes for Morocco
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              <ul className="space-y-2">
                {[
                  'Morocco primarily uses the French grading system for all sport climbing routes',
                  'Bouldering at Tafraoute and Oukaimeden uses the V-scale (Hueco scale) or Fontainebleau scale',
                  'Multi-pitch routes at Taghia may use a combination of French technical grades and an overall difficulty rating (TD, ED, etc.)',
                  'Grades at Todra Gorge are generally considered accurate and well-established',
                ].map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {[
                  'Taghia grades can be stiff (sandbag warning) due to the adventurous nature of the climbing and the bold first ascentionists',
                  'Tafraoute bouldering grades are still being established and can vary between sources',
                  'Polished lower sections on popular Todra routes may feel harder than the grade suggests',
                  'Via ferrata difficulty uses the K-scale: K1 (easy) to K6 (extremely difficult)',
                ].map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Seasons by Area ── */}
      <section id="seasons" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Seasons by Climbing Area
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s altitude range (900m to 3,200m) means you can climb year-round by choosing the right area for the season.
            </p>
          </div>

          <div className="space-y-6">
            {seasonalByArea.map((area) => (
              <div key={area.area} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-primary)] px-6 py-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Mountain className="w-4 h-4" />
                    {area.area}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border-light)]">
                  {[
                    { label: 'Spring (Mar-May)', data: area.spring },
                    { label: 'Summer (Jun-Aug)', data: area.summer },
                    { label: 'Autumn (Sep-Nov)', data: area.autumn },
                    { label: 'Winter (Dec-Feb)', data: area.winter },
                  ].map((season) => (
                    <div key={season.label} className="p-4">
                      <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">{season.label}</h4>
                      <div className={`text-sm font-bold mb-1 ${
                        season.data.rating === 'Excellent' ? 'text-green-700' :
                        season.data.rating === 'Good' ? 'text-blue-700' :
                        season.data.rating === 'Variable' ? 'text-amber-600' :
                        'text-red-600'
                      }`}>
                        {season.data.rating}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">{season.data.temp}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{season.data.notes}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guide Services & Gear Rental ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Guide Services &amp; Gear Rental
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From certified mountain guides to local Berber climbers who know every hold on their home crags, Morocco has a growing guide infrastructure to support visiting climbers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Guide Services */}
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                Guide Services
              </h3>
              <div className="space-y-3">
                {guideServices.map((guide) => (
                  <div key={guide.name} className="card-moroccan p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-[var(--text-primary)]">{guide.name}</h4>
                        <p className="text-xs text-[var(--color-primary)] flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" /> {guide.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{guide.specialty}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{guide.contact}</p>
                  </div>
                ))}
              </div>

              <div className="card-moroccan p-4 mt-4">
                <h4 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CircleDollarSign className="w-4 h-4 text-[var(--color-primary)]" />
                  Guide Costs
                </h4>
                <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  {[
                    'Sport climbing guide (day): 800-1,500 MAD',
                    'Multi-pitch guide (day): 1,500-3,000 MAD',
                    'Canyoning guide (half-day): 400-700 MAD per person',
                    'Via ferrata guide: 300-700 MAD per person',
                    'Week climbing trip (guide + logistics): 8,000-15,000 MAD',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gear Rental */}
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[var(--color-primary)]" />
                Gear Rental Availability
              </h3>
              <div className="card-moroccan p-6 mb-4">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  Gear rental in Morocco is limited compared to European climbing destinations. Most serious climbers bring their own equipment. However, basic rental is available at major areas:
                </p>
                <div className="space-y-3">
                  {[
                    { area: 'Todra Gorge', available: 'Harness, helmet, shoes (limited sizes), quickdraws', notes: 'Available from guesthouses and local guides. Quality varies.' },
                    { area: 'Taghia Canyon', available: 'Very limited. Some rope available from guides.', notes: 'Bring ALL your own gear. Remote location means no shops.' },
                    { area: 'Tafraoute', available: 'Crash pads (some available), shoes (very limited)', notes: 'Bring your own crash pads if bouldering. Limited rental options.' },
                    { area: 'Canyoning sites', available: 'Full equipment provided by guide services', notes: 'Helmets, harnesses, wetsuits included in guided trips.' },
                    { area: 'Via Ferrata', available: 'Full equipment provided', notes: 'Via ferrata kit (harness, lanyards, helmet) included with guides.' },
                  ].map((r) => (
                    <div key={r.area} className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <div className="font-semibold text-sm text-[var(--text-primary)]">{r.area}</div>
                      <div className="text-xs text-[var(--text-secondary)] mt-1">{r.available}</div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">{r.notes}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-moroccan p-6">
                <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  Essential Gear Checklist
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-[var(--text-secondary)]">
                  {[
                    'Climbing shoes (own)',
                    'Harness',
                    'Helmet',
                    'Belay device + locking biner',
                    'Quickdraws (12-15 for sport)',
                    'Rope (70m recommended)',
                    'Slings and cordelette',
                    'Chalk bag and chalk',
                    'Approach shoes',
                    'Headlamp (gorge shade)',
                    'Sun protection (hat, cream)',
                    'Water (2L+ per day)',
                    'Crash pads (bouldering)',
                    'Cam set (trad at Taghia)',
                    'First aid kit',
                    'Guidebook / topos',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)] shrink-0" />
                      <span className="text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Camping at Climbing Areas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Tent className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Camping at Climbing Areas
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Camping is an integral part of the Moroccan climbing experience, keeping costs low and putting you right at the base of the crags.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                area: 'Todra Gorge',
                type: 'Organized camping + wild',
                cost: '50-100 MAD/night (organized)',
                description: 'Several campgrounds near the gorge entrance offer basic facilities (toilet, shower, cooking area). Wild camping along the river is tolerated but bring all supplies. Guesthouses with camping options from 80 MAD including breakfast.',
                tips: ['Bring earplugs: tour buses pass through the gorge early morning', 'River-side spots are scenic but can flood in heavy rain', 'Secure food from stray cats and dogs'],
              },
              {
                area: 'Taghia Canyon',
                type: 'Guesthouse camping / wild',
                cost: '50-150 MAD/night',
                description: 'Camp in the meadow near the village or stay at one of the gites (guesthouses) which offer tent space and meals. The setting is spectacular: a mountain meadow surrounded by soaring limestone walls. No shops in the village, so bring supplies or eat at gites.',
                tips: ['Mules can carry gear in from the road (negotiate price)', 'Gite meals are excellent value at 60-100 MAD', 'Nights are cold at 1,800m, even in summer'],
              },
              {
                area: 'Tafraoute',
                type: 'Wild camping (primary)',
                cost: 'Free (wild camping)',
                description: 'Wild camping among the granite boulders is the default for climbers visiting Tafraoute. The desert landscape means minimal vegetation and no shade. Several flat, sandy spots between boulders serve as established camping areas. Town (10-15 min drive) has supplies, restaurants, and showers at hotels for a small fee.',
                tips: ['Bring shade (tarp or large umbrella) as there are no trees', 'Nights can be surprisingly cold in winter (5-10C)', 'Respect the landscape: pack out all waste'],
              },
              {
                area: 'Oukaimeden',
                type: 'CAF refuge + camping',
                cost: '100-200 MAD/night (refuge)',
                description: 'The CAF (Club Alpin Francais) refuge offers basic dormitory accommodation. Camping in the alpine meadows around the bouldering areas is possible in summer. Limited facilities but a stunning high-altitude setting with views of Jbel Toubkal.',
                tips: ['Bring warm sleeping gear even in summer (2,600m altitude)', 'Day trips from Marrakech are practical if you have transport', 'Water from streams should be treated'],
              },
              {
                area: 'Bin el Ouidane',
                type: 'Lakeside camping + guesthouses',
                cost: 'Free (wild) / 150-300 MAD (guesthouse)',
                description: 'Camp near the reservoir with turquoise water views. Several guesthouses in the area offer affordable rooms. The lakeside setting is beautiful for rest days. Basic supplies available in the village.',
                tips: ['Lakeside camping can be windy; choose a sheltered spot', 'Swimming in the reservoir is refreshing after climbing', 'Good stopping point between Marrakech and Todra'],
              },
              {
                area: 'General Morocco Camping',
                type: 'Various',
                cost: 'Varies',
                description: 'Morocco is generally camping-friendly. Wild camping is tolerated in rural and mountain areas if you are discreet, pack out waste, and respect local customs. Always ask permission if camping near a village. Established campgrounds exist in tourist areas but are often basic.',
                tips: ['A lightweight tent and warm sleeping bag are essential kit', 'Cooking gas canisters are available in larger towns', 'Respect water sources: do not pollute streams'],
              },
            ].map((camp) => (
              <div key={camp.area} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{camp.area}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-0.5 rounded-full font-medium">{camp.type}</span>
                  <span className="text-[10px] bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded-full">{camp.cost}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{camp.description}</p>
                <ul className="space-y-1.5">
                  {camp.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Combined Climbing-Cultural Trips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-accent-dark)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Combined Climbing-Cultural Trips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              One of Morocco&apos;s great advantages is that world-class climbing sits alongside one of the world&apos;s richest cultures. Here are suggested itineraries that combine the two.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'The Classic: Marrakech + Todra (10 days)',
                days: '10 days',
                highlights: ['2 days Marrakech medina and souks', 'Drive via Ait Benhaddou (UNESCO) and Dades Valley', '5 days climbing Todra Gorge', 'Day trip to Merzouga/Sahara', 'Return via Ouarzazate'],
                description: 'The most popular climbing trip in Morocco. Start with the sensory overload of Marrakech, then drive the spectacular Tizi n\'Tichka pass to the desert side of the Atlas. Five days at Todra gives time to sample dozens of routes across all grades, with a rest-day excursion to the Sahara dunes at Merzouga.',
              },
              {
                title: 'The Adventure: Marrakech + Taghia + Todra (14 days)',
                days: '14 days',
                highlights: ['2 days Marrakech', 'Drive to Zawyat Ahansal', '5 days multi-pitch at Taghia', 'Transfer to Todra Gorge', '4 days sport climbing Todra', 'Return via Dades Valley'],
                description: 'The ultimate Moroccan climbing trip for experienced climbers. After Marrakech, head deep into the Atlas to Taghia for world-class multi-pitch on walls up to 800m. Then shift to Todra for high-volume sport climbing. The contrast between remote Taghia and the more accessible Todra gorge makes for a complete experience.',
              },
              {
                title: 'The Explorer: Tafraoute + Essaouira + Marrakech (10 days)',
                days: '10 days',
                highlights: ['3 days bouldering in Tafraoute', 'Drive to Essaouira (coastal city)', '2 days Essaouira medina and surf', 'Drive to Marrakech', '2 days Marrakech exploration', 'Day trip Oukaimeden bouldering'],
                description: 'Combines Anti-Atlas granite bouldering with Atlantic coast culture. Tafraoute\'s surreal boulder landscape is followed by the wind-swept charm of Essaouira and the intensity of Marrakech. A summer day trip to Oukaimeden adds high-altitude bouldering to the mix.',
              },
            ].map((trip) => (
              <div key={trip.title} className="card-moroccan overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-24 bg-[var(--color-primary)] flex items-center justify-center py-3 md:py-0 shrink-0">
                    <div className="text-center text-white">
                      <div className="text-xs font-medium uppercase tracking-wider">Duration</div>
                      <div className="text-xl font-bold">{trip.days}</div>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-1">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{trip.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{trip.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.map((h) => (
                        <span key={h} className="text-[11px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety & Rescue ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-red-500/10 mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safety &amp; Rescue Contacts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s mountain rescue infrastructure is limited compared to European alpine countries. Self-sufficiency and prevention are critical.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Emergency Numbers',
                icon: PhoneCall,
                items: [
                  'General emergency: 150 (civil protection / SAMU)',
                  'Police: 19',
                  'Gendarmerie (rural areas): 177',
                  'Mountain rescue is handled by civil protection, not a dedicated alpine team',
                  'Helicopter rescue is available but response times in remote areas can be several hours',
                ],
              },
              {
                title: 'Self-Rescue Preparedness',
                icon: LifeBuoy,
                items: [
                  'Carry a basic first aid kit with wound care, splints, and pain relief',
                  'Know basic self-rescue rope techniques (lowering, ascending, escaping the belay)',
                  'Carry a headlamp: being caught on a wall after dark in a gorge is extremely dangerous',
                  'Multi-pitch teams should carry a light emergency bivvy sack',
                  'Mobile phone coverage is limited at Taghia and parts of Todra upper gorge',
                ],
              },
              {
                title: 'Common Hazards',
                icon: AlertTriangle,
                items: [
                  'Rockfall in gorges, especially after rain or freeze-thaw cycles',
                  'Flash flooding in canyons (check upstream weather before canyoning)',
                  'Dehydration and heat exhaustion in exposed climbing areas',
                  'Scorpions under rocks at lower elevations (shake out shoes and gear)',
                  'Loose bolts on older routes: inspect protection and carry a wrench for glue-in anchors',
                ],
              },
              {
                title: 'Insurance',
                icon: Shield,
                items: [
                  'Travel insurance covering rock climbing and canyoning is essential',
                  'Standard travel insurance often excludes technical climbing: check your policy',
                  'BMC (British Mountaineering Council) and DAV (German Alpine Club) memberships include worldwide climbing insurance',
                  'Ensure your policy covers helicopter evacuation from remote areas',
                  'Nearest hospitals with trauma capability: Tinghir (near Todra), Beni Mellal (near Bin el Ouidane), Marrakech',
                ],
              },
              {
                title: 'Bolt & Route Condition',
                icon: Wrench,
                items: [
                  'Bolt quality varies significantly across Moroccan climbing areas',
                  'Newer routes at Todra (post-2010) generally have good stainless steel bolts',
                  'Older routes may have rusty or poorly placed bolts: inspect carefully',
                  'Taghia routes may have minimal protection: check with locals before attempting',
                  'Carry a small wrench and replacement bolt hangers if climbing remote areas',
                ],
              },
              {
                title: 'Responsible Climbing',
                icon: Heart,
                items: [
                  'Respect local communities: dress modestly in villages, ask before photographing people',
                  'Pack out all waste including tape, chalk balls, and food wrappers',
                  'Do not damage trees for anchors or firewood',
                  'Stay on established trails to minimize erosion around crags',
                  'Support local economy: eat at local restaurants, hire local guides, stay at gites',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <section.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Climbing Community & Festivals ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Award className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Community &amp; Climbing Festivals
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s climbing community is small but passionate, with a growing festival scene that brings together local and international climbers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: 'Todra Climbing Festival',
                when: 'November (annual, dates vary)',
                description: 'The largest climbing gathering in Morocco, attracting hundreds of climbers from across North Africa and Europe. Events include competitive climbing, route-setting workshops, gear demos, film screenings, and social gatherings. A great way to meet the local climbing community and discover new routes with knowledgeable locals.',
                location: 'Todra Gorge, Tinghir',
              },
              {
                title: 'Tafraoute Bouldering Festival',
                when: 'January/February (dates vary)',
                description: 'Coinciding with the almond blossom season, this gathering brings boulderers to the Anti-Atlas for competitions, new problem exploration, and community building among the surreal granite landscapes. The festival atmosphere is relaxed and welcoming to all levels.',
                location: 'Tafraoute, Anti-Atlas',
              },
              {
                title: 'Moroccan Alpine Club (FRMM)',
                when: 'Year-round',
                description: 'The Federation Royale Marocaine de Montagne et d\'Escalade oversees climbing, mountaineering, and mountain rescue in Morocco. They organize events, maintain some infrastructure, and can provide information about local climbing conditions and guide certifications.',
                location: 'National, based in Rabat',
              },
              {
                title: 'Online Community',
                when: 'Year-round',
                description: 'Active climbing communities exist on social media platforms, with Facebook groups for Morocco climbing, Instagram accounts documenting new routes, and forums on thecrag.com and UKClimbing. These are excellent resources for finding climbing partners, getting current conditions, and sharing beta.',
                location: 'Online',
              },
            ].map((event) => (
              <div key={event.title} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{event.title}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {event.location}
                    </p>
                  </div>
                  <span className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5" /> {event.when}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Quick Reference
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Best climbing area for beginners?',
                a: 'Todra Gorge is the best starting point. It has well-bolted routes from French 3a upward, established guide services, and abundant accommodation within walking distance of the crags. The gorge is spectacular and the range of easy routes is excellent.',
              },
              {
                q: 'Is Taghia Canyon suitable for intermediate climbers?',
                a: 'Taghia is primarily for experienced multi-pitch climbers comfortable on sustained routes of 200m or more. The minimum grade level for most routes is French 5c, and the remote setting means self-rescue capability is important. However, some shorter routes and the guided experience can work for strong intermediates with multi-pitch experience.',
              },
              {
                q: 'Can I boulder in Morocco without a car?',
                a: 'Tafraoute bouldering is best accessed by car, as the boulder fields are spread across the landscape. However, some areas are within walking distance of town. At Oukaimeden, the boulders are accessible from the road. Grand taxis can supplement transport between towns.',
              },
              {
                q: 'What is the best time for a first climbing trip to Morocco?',
                a: 'October to November is ideal for a first trip. Temperatures are comfortable at Todra Gorge (18-28C), the rock is dry, crowds are manageable, and you can combine climbing with visiting Marrakech without extreme heat. March to April is the second best window.',
              },
              {
                q: 'Do I need a permit to climb in Morocco?',
                a: 'No permits are required for rock climbing in Morocco. Access is generally open and free. The main consideration is respect for local communities and private land. At Taghia, it is customary to stay at local guesthouses and hire local porters/mules, which supports the village economy.',
              },
              {
                q: 'Is canyoning safe in Morocco?',
                a: 'Canyoning with a reputable guide service is generally safe. The primary risk is flash flooding, which can occur with little warning. Always canyon with a guide who knows local conditions, check weather forecasts for the entire upstream catchment, and never enter canyons if rain is forecast. Paradise Valley near Agadir is the easiest and safest option for first-timers.',
              },
            ].map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Climbing Adventure
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Combine world-class climbing with Morocco&apos;s incredible culture, cuisine, and landscapes. From the walls of Todra to the tagine pot, every day is an adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trekking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-4 h-4" />
              Trekking Guide
            </Link>
            <Link
              href="/water-sports"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4" />
              Water Sports
            </Link>
            <Link
              href="/adventure"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Sunrise className="w-4 h-4" />
              All Adventures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

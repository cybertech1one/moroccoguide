import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Camera,
  Clock,
  Info,
  ArrowRight,
  Sun,
  ShieldCheck,
  Mountain,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Eye,
  Compass,
  Building,
  Award,
  BookOpen,
  Aperture,
  MessageCircleQuestion,
  Sunrise,
  Layers,
  Navigation,
  Globe,
  Lightbulb,
  Image,
  Landmark,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-photography-spots`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Best Photography Spots in Morocco 2026 | 20 Iconic Locations & Tips',
  description:
    'Discover 20 of the best photography spots in Morocco. From Chefchaouen blue streets to Sahara dunes at golden hour, Ait Benhaddou kasbahs, Fes tanneries, and Hassan II Mosque reflections. Includes drone rules, street photography etiquette, gear tips, and best light times.',
  keywords: [
    'Morocco photography spots',
    'best places to photograph Morocco',
    'Chefchaouen blue city photos',
    'Sahara desert photography',
    'Morocco Instagram spots',
    'Ait Benhaddou photography',
    'Morocco drone rules 2026',
    'Fes tanneries photography',
    'Morocco golden hour spots',
    'Hassan II Mosque photography',
    'Marrakech photo spots',
    'Morocco landscape photography',
    'Morocco street photography tips',
    'Jardin Majorelle photos',
    'Essaouira photography',
    'Atlas Mountains photography',
    'Morocco travel photography guide',
    'Morocco photography permit',
  ],
  openGraph: {
    title: 'Best Photography Spots in Morocco 2026 | 20 Iconic Locations & Tips',
    description:
      'Your complete guide to photographing Morocco. 20 iconic locations with best times for light, drone regulations, street photography etiquette, and gear recommendations for every budget.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-chefchaouen-blue.webp`,
        width: 1200,
        height: 630,
        alt: 'Blue-painted streets of Chefchaouen Morocco with dramatic light and shadows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Photography Spots in Morocco 2026 | Complete Guide',
    description:
      '20 iconic photography locations across Morocco with golden hour timing, drone regulations, street photography etiquette, and gear recommendations.',
    images: [`${BASE_URL}/images/hero-chefchaouen-blue.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Do I need a permit to fly a drone in Morocco?',
    a: "Yes. Morocco requires prior authorization from the Direction Generale de l'Aviation Civile (DGAC) before operating any drone. Flying without a permit can result in confiscation and fines starting from 5,000 MAD. Application processing takes 2-4 weeks, so apply well before your trip. Many photographers find the process difficult and choose to leave drones at home.",
  },
  {
    q: 'Is it safe to photograph people in Morocco?',
    a: 'You should always ask permission before photographing people. Many Moroccans are happy to be photographed, but others prefer not to be, especially women and elderly people in rural areas. A polite "Mumkin sura?" (May I take a photo?) goes a long way. Be prepared that some market vendors and performers will ask for a small tip of from 10-20 MAD in exchange for photos.',
  },
  {
    q: 'What is the best time of year for photography in Morocco?',
    a: 'October through April offers the clearest skies, softest light, and most dramatic cloud formations. Spring (March-April) is ideal for the Atlas Mountains when wildflowers bloom. The Sahara photographs best in winter (December-February) when temperatures are bearable and the air is crisp. Summer brings harsh midday light but stunning sunsets.',
  },
  {
    q: 'Can I photograph the interior of mosques in Morocco?',
    a: 'Non-Muslims cannot enter most mosques in Morocco except the Hassan II Mosque in Casablanca, which offers guided tours. You can photograph the exteriors freely. For the Hassan II Mosque interior, photography is allowed during tours but tripods are not permitted. Many madrasas (religious schools) are open to visitors and allow photography.',
  },
  {
    q: 'What camera gear should I bring to Morocco?',
    a: 'A versatile zoom lens (24-70mm or 24-105mm) handles most situations. Bring a wide-angle (16-35mm) for architecture and interiors, and a telephoto (70-200mm) for candid shots and mountain landscapes. A circular polarizer is essential for cutting through haze and enriching blue skies. Pack lens cloths for dust, especially in the desert.',
  },
  {
    q: 'Are tripods allowed at popular tourist sites in Morocco?',
    a: 'Most outdoor locations allow tripods without issue. Some museums, palaces, and the Hassan II Mosque interior do not allow them. The Fes tanneries viewing terraces are too crowded for tripods. For long exposure work at city gates or kasbahs, early morning before crowds arrive is your best window.',
  },
  {
    q: 'How much should I tip for photographing someone in Morocco?',
    a: 'If someone poses for you, from 10-20 MAD is standard. For elaborate performances at Jemaa el-Fnaa, from 20-50 MAD is expected. Water sellers in traditional dress and snake charmers will insist on payment, usually from 20-50 MAD. At the Fes tanneries, the leather shop guide who takes you to the viewpoint expects from 20-50 MAD as well.',
  },
  {
    q: 'Where can I get my photos printed or gear repaired in Morocco?',
    a: 'Camera shops cluster along Boulevard Mohammed V in Marrakech and Casablanca. Derb Omar in Casablanca has electronics shops that may stock memory cards and basic accessories. For serious repairs, you will need to wait until you return home or visit a major European city. Always bring backup memory cards and batteries.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelGuide',
      name: 'Best Photography Spots in Morocco 2026',
      description:
        'Comprehensive guide to the 20 best photography locations in Morocco with timing, regulations, equipment advice, and practical tips for travel photographers.',
      url: PAGE_URL,
      image: `${BASE_URL}/images/hero-chefchaouen-blue.webp`,
      inLanguage: 'en',
      publisher: {
        '@type': 'Organization',
        name: 'City Tours Morocco',
        url: BASE_URL,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

/* ================================================================
   DATA: Top 20 Photography Locations
   ================================================================ */

const photoSpots = [
  {
    name: 'Chefchaouen Blue Medina',
    region: 'Rif Mountains',
    bestTime: 'Early morning (7-9 AM) or late afternoon (4-6 PM)',
    bestSeason: 'March-May, September-November',
    tip: 'The blue streets photograph best in open shade. Avoid midday when harsh shadows create blown highlights against the blue walls. Walk uphill to the Spanish Mosque viewpoint for a panoramic overview at sunset.',
    icon: Building,
  },
  {
    name: 'Ait Benhaddou Kasbah',
    region: 'Ouarzazate Province',
    bestTime: 'Sunrise from the east bank, sunset for warm tones on the walls',
    bestSeason: 'October-April for dramatic skies',
    tip: 'Cross the river (ankle-deep in dry season) and climb to the top of the ksar for layered compositions. The morning sun hits the eastern face directly, making the adobe glow amber and gold.',
    icon: Landmark,
  },
  {
    name: 'Hassan II Mosque, Casablanca',
    region: 'Casablanca',
    bestTime: 'Blue hour (30 minutes after sunset) for the illuminated minaret against a deep blue sky',
    bestSeason: 'Year-round; winter for storm clouds behind the mosque',
    tip: 'The oceanside promenade gives a clear sightline to the mosque with crashing waves in the foreground. A wide-angle lens and a tripod are essential for blue hour exposures.',
    icon: Landmark,
  },
  {
    name: 'Fes Tanneries (Chouara)',
    region: 'Fes el-Bali',
    bestTime: 'Late morning (10 AM-12 PM) when the dye vats are freshly filled',
    bestSeason: 'Spring and autumn when workers are most active',
    tip: 'Access the rooftop terraces of surrounding leather shops for the classic overhead view. A telephoto lens (70-200mm) lets you isolate individual workers and dye vats without the crowds in your frame.',
    icon: Eye,
  },
  {
    name: 'Sahara Dunes, Erg Chebbi',
    region: 'Merzouga',
    bestTime: 'Sunrise for long shadows on rippled sand; sunset for silhouettes',
    bestSeason: 'October-March for cooler temperatures and clearer air',
    tip: 'Wake before dawn and climb the tallest dune. Wind-carved ripple patterns show best in extreme side light. Bring a lens cloth and plastic bag to protect your camera from fine sand that gets into everything.',
    icon: Sun,
  },
  {
    name: 'Jardin Majorelle, Marrakech',
    region: 'Marrakech',
    bestTime: 'Opening time (8 AM) before crowds arrive',
    bestSeason: 'Year-round; spring for flowering cacti',
    tip: 'The cobalt blue walls and yellow plant pots create a striking color contrast. The cactus garden offers leading-line compositions. Entry costs from 70 MAD and photography is included but tripods are not allowed.',
    icon: Aperture,
  },
  {
    name: 'Jemaa el-Fnaa Square, Marrakech',
    region: 'Marrakech Medina',
    bestTime: 'Sunset from Cafe de France rooftop terrace',
    bestSeason: 'Year-round',
    tip: 'The rooftop cafes around the square charge from 30-50 MAD for a drink but give you an elevated view of the entire plaza at golden hour. As smoke rises from food stalls at dusk, the atmosphere becomes magical for long exposures.',
    icon: Globe,
  },
  {
    name: 'Essaouira Port & Ramparts',
    region: 'Atlantic Coast',
    bestTime: 'Late afternoon when fishing boats return and light hits the ramparts',
    bestSeason: 'Year-round; winter for dramatic wave action',
    tip: 'The blue fishing boats against white walls give you a Mediterranean feel. Walk the rampart walls (Skala de la Ville) for wide-angle shots looking down at cannons and out to sea. Seagulls add dynamic elements.',
    icon: Compass,
  },
  {
    name: 'Atlas Mountains, Imlil Valley',
    region: 'High Atlas',
    bestTime: 'Golden hour; mist rises from the valleys at dawn',
    bestSeason: 'April-May for snow-capped peaks with green valleys; October for autumn colors',
    tip: 'The terraced Berber villages with Jebel Toubkal as a backdrop make for layered landscape compositions. A telephoto lens compresses the layers beautifully. Hire a local guide (from 300 MAD per day) to access lesser-known viewpoints.',
    icon: Mountain,
  },
  {
    name: 'Todra Gorge',
    region: 'Tinghir',
    bestTime: 'Midday when sunlight reaches the canyon floor',
    bestSeason: 'Spring and autumn for comfortable temperatures',
    tip: 'The 300-meter canyon walls dwarf human figures, giving powerful scale. Unlike most spots, midday works best here because the gorge is so narrow that early and late light never reaches the bottom. Wide-angle lenses exaggerate the towering walls.',
    icon: Mountain,
  },
  {
    name: 'Bou Inania Madrasa, Fes',
    region: 'Fes el-Bali',
    bestTime: 'Mid-morning when sunlight filters through the courtyard',
    bestSeason: 'Year-round',
    tip: 'The intricate zellige tilework, carved cedar, and stucco detail reward a macro lens. The geometric patterns of Islamic art are endlessly photogenic. Entry costs from 20 MAD. Tripods are generally allowed in the courtyard.',
    icon: Layers,
  },
  {
    name: 'Draa Valley Palm Groves',
    region: 'Zagora',
    bestTime: 'Golden hour when the palms cast long shadows',
    bestSeason: 'October-April',
    tip: 'The road from Ouarzazate to Zagora passes through endless palm groves with kasbahs in the distance. Stop at elevated points along the N9 highway for compositions that layer palms, river, and desert mountains.',
    icon: Navigation,
  },
  {
    name: 'Bahia Palace, Marrakech',
    region: 'Marrakech',
    bestTime: 'Opening hour (9 AM) for empty rooms; midday for light through windows',
    bestSeason: 'Year-round',
    tip: 'The painted cedar ceilings and zellige floors create symmetrical frame-within-frame compositions. Shoot straight up at ceilings with a wide-angle lens. Entry costs from 70 MAD. No tripods inside the palace rooms.',
    icon: Building,
  },
  {
    name: 'Ouzoud Waterfalls',
    region: 'Middle Atlas',
    bestTime: 'Late morning when rainbows form in the mist',
    bestSeason: 'March-June for peak water flow',
    tip: 'A 1-2 second shutter speed turns the cascading water into silk. Bring an ND filter (6-stop) for long exposure in bright conditions. The walk down to the base takes 30 minutes. Barbary macaques often appear in the foreground.',
    icon: Camera,
  },
  {
    name: 'Volubilis Roman Ruins',
    region: 'Meknes Region',
    bestTime: 'Early morning or late afternoon for warm light on stone columns',
    bestSeason: 'Spring when wildflowers surround the ruins',
    tip: 'The triumphal arch and Capitol columns against the rolling hills make classic compositions. In spring, fields of poppies and wildflowers create a foreground carpet. Entry costs from 70 MAD and the site is rarely crowded.',
    icon: Landmark,
  },
  {
    name: 'Dades Valley, Road of a Thousand Kasbahs',
    region: 'Dades Gorge',
    bestTime: 'Sunset when the kasbahs glow orange-red',
    bestSeason: 'October-April for clear skies',
    tip: 'Drive the N10 between Ouarzazate and Tinghir for dozens of crumbling kasbahs perched on hilltops. The serpentine hairpin road in the Dades Gorge itself creates dramatic S-curve compositions when shot from above.',
    icon: Navigation,
  },
  {
    name: 'Legzira Beach',
    region: 'Sidi Ifni Coast',
    bestTime: 'Sunset when the remaining natural arch glows deep red',
    bestSeason: 'Year-round; summer for calmer seas',
    tip: 'One of the two famous red arches collapsed in 2016, but the remaining formation is still extraordinary. Low tide exposes reflective pools in the foreground. Arrive two hours before sunset for the best compositions as the light shifts.',
    icon: Sunrise,
  },
  {
    name: 'Tangier Kasbah & Medina',
    region: 'Northern Morocco',
    bestTime: 'Morning light on the whitewashed walls; sunset from Cape Spartel',
    bestSeason: 'Spring and autumn',
    tip: 'The view from the Kasbah over the Strait of Gibraltar to Spain makes a unique geography shot. The medina doorways painted in blue and green are smaller and less crowded than Chefchaouen. Visit Cape Spartel at sunset where the Atlantic meets the Mediterranean.',
    icon: Compass,
  },
  {
    name: 'Merzouga Star Trails',
    region: 'Sahara Desert',
    bestTime: 'New moon phase; astronomical twilight starts around 9 PM',
    bestSeason: 'September-March for darkest skies',
    tip: 'The Sahara has minimal light pollution, making it exceptional for astrophotography. A wide-angle lens at f/2.8, ISO 3200, and 20-second exposures reveal the Milky Way. Bring a headlamp with a red filter to preserve night vision while adjusting settings.',
    icon: Star,
  },
  {
    name: 'Moulay Idriss Zerhoun',
    region: 'Near Meknes',
    bestTime: 'Late afternoon from the hilltop viewpoints',
    bestSeason: 'Spring for green surrounding countryside',
    tip: "Morocco's holiest town cascades down two hills like a white amphitheater. Non-Muslims cannot enter the zaouia, but the town itself is photogenic from multiple elevated viewpoints. Fewer tourists than Chefchaouen, so you can photograph in peace.",
    icon: Building,
  },
] as const;

/* ================================================================
   DATA: Gear Recommendations
   ================================================================ */

const gearItems = [
  {
    category: 'Essential Lenses',
    items: [
      'Standard zoom 24-70mm f/2.8 (or 24-105mm f/4 for range)',
      'Wide-angle 16-35mm for architecture, interiors, and landscapes',
      'Telephoto 70-200mm for candid street shots and mountain compression',
    ],
  },
  {
    category: 'Filters & Accessories',
    items: [
      'Circular polarizer for cutting haze and enriching blue skies',
      'ND filter (6-stop) for waterfall and ocean long exposures',
      'Graduated ND for balancing bright skies and dark foregrounds in the desert',
    ],
  },
  {
    category: 'Protection & Maintenance',
    items: [
      'Lens cloths and rocket blower for Sahara sand',
      'Rain cover for Atlas Mountain weather changes',
      'Sealable plastic bags to protect gear from sand and dust',
    ],
  },
  {
    category: 'Support & Power',
    items: [
      'Travel tripod (carbon fiber preferred for weight savings)',
      'Spare batteries (at least 3; cold desert nights drain them faster)',
      'Multiple memory cards (64GB minimum; shoot RAW for editing flexibility)',
    ],
  },
] as const;

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoPhotographySpotsPage() {
  return (
    <>
      {/* -- JSON-LD -- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* -- Breadcrumbs -- */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]">
        <div className="container-morocco py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--text-secondary)]">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="flex items-center gap-1.5">
              <Link href="/travel-tips" className="hover:text-[var(--color-accent)] transition-colors">
                Travel Tips
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-[var(--text-primary)] font-medium">Photography Spots</li>
          </ol>
        </div>
      </nav>

      {/* -- Hero Section -- */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end">
        <img
          src="/images/hero-chefchaouen-blue.webp"
          alt="Narrow blue-painted alleyway in Chefchaouen with morning light streaming between the walls"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="container-morocco relative z-10 pb-12 md:pb-16">
          <p className="text-[var(--color-gold)] font-[family-name:var(--font-heading)] font-semibold text-sm tracking-wider uppercase mb-3">
            Morocco Travel Photography
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white leading-tight max-w-3xl">
            Best Photography Spots in Morocco
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
            20 iconic locations, golden hour timing, drone regulations, and practical advice for capturing Morocco at its most photogenic.
          </p>
        </div>
      </section>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco is a country that rewards photographers at every turn. The blue-drenched alleys of Chefchaouen, the amber glow of Saharan dunes at dawn, the geometric precision of zellige tilework in Fes madrasas, the raw drama of the Atlas Mountains against a winter sky — this is a place where compositions seem to arrange themselves.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              But great travel photography in Morocco requires more than showing up with a good camera. Timing matters enormously. The difference between a flat, overexposed shot of Ait Benhaddou at noon and a glowing, dimensional image at sunrise is the difference between a forgettable snapshot and a portfolio piece. Knowing when the light hits, where to stand, and how to interact respectfully with the people you photograph separates the memorable images from the ordinary.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              This guide covers 20 of the most photogenic locations in Morocco with specific timing advice, practical access details, gear recommendations, drone regulations, and the etiquette you need to photograph respectfully in a country where hospitality and privacy coexist.
            </p>
          </div>
        </div>
      </section>

      {/* -- Quick Stats Bar -- */}
      <section className="bg-[var(--surface-muted)] zellige-border py-8">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Photography Locations', value: '20', icon: Camera },
              { label: 'Best Season', value: 'Oct-Apr', icon: Sun },
              { label: 'Golden Hour', value: '6-8 AM / 4-6 PM', icon: Sunrise },
              { label: 'Drone Permit Wait', value: '2-4 Weeks', icon: Navigation },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label}>
                  <StatIcon className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] font-[family-name:var(--font-heading)]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Top 20 Photography Spots -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            20 Best Photography Locations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each location includes optimal timing, seasonal advice, and a practical tip from photographers who have shot there.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoSpots.map((spot, idx) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold text-sm shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] flex items-center gap-2">
                        <SpotIcon className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                        {spot.name}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {spot.region}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span><strong className="text-[var(--text-primary)]">Best light:</strong> {spot.bestTime}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Sun className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <span><strong className="text-[var(--text-primary)]">Season:</strong> {spot.bestSeason}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>{spot.tip}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Gallery Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco Through the Lens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-chefchaouen-stairs.webp"
                alt="Blue-painted staircase in Chefchaouen medina with potted plants and natural light"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Chefchaouen Staircase</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-sahara-golden-hour.webp"
                alt="Sahara desert dunes at golden hour with dramatic shadows and ripple patterns in the sand"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara Golden Hour</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ait-benhaddou-sunset.webp"
                alt="Ait Benhaddou kasbah glowing orange-red at sunset with the river in the foreground"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ait Benhaddou Sunset</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-fes-tanneries.webp"
                alt="Aerial view of Chouara tanneries in Fes with colorful dye vats and workers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Fes Tanneries</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira-port.webp"
                alt="Blue fishing boats in Essaouira harbor with the historic ramparts in the background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Essaouira Port</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Golden Hour & Light Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Understanding Moroccan Light
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco sits between 27 and 36 degrees north latitude. The quality of light shifts dramatically with time of day, season, and geography.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'Golden Hour (Sunrise & Sunset)',
                desc: 'In winter, sunrise hits around 7:30 AM and sunset around 5:30 PM, giving you roughly 40 minutes of golden light at each end. In summer, sunrise is at 6:15 AM and sunset at 8:45 PM, with longer golden hours but harsher midday light. The warm tones of Moroccan architecture — adobe, sandstone, zellige — come alive in golden hour light, turning already-warm surfaces into glowing embers.',
                icon: Sunrise,
              },
              {
                title: 'Blue Hour',
                desc: 'The 20-30 minutes after sunset and before sunrise produce deep blue skies that contrast powerfully with artificially lit monuments. The Hassan II Mosque in Casablanca is arguably the best blue hour subject in all of North Africa, with its illuminated minaret against the twilight ocean sky. The medina gates of Fes and Meknes also light up beautifully.',
                icon: Clock,
              },
              {
                title: 'Midday Light',
                desc: 'Most photographers avoid 11 AM to 3 PM, but in Morocco midday has specific uses. The narrow alleys of Fes and Marrakech medinas create dramatic shafts of light that only appear when the sun is directly overhead. Todra Gorge only receives direct sunlight at midday. And the souks, which are roofed, photograph well at any hour.',
                icon: Sun,
              },
              {
                title: 'Overcast Days',
                desc: 'Cloud cover acts as a massive softbox, eliminating harsh shadows. This is ideal for street portraits, market scenes, and the intricate details of Islamic architecture. Overcast days also reduce the extreme dynamic range that challenges desert photography. Do not put your camera away when clouds roll in.',
                icon: Eye,
              },
            ].map((item) => {
              const LightIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <LightIcon className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Street Photography Etiquette -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Street Photography Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respectful photography builds bridges. Disrespectful photography closes doors — for you and for every photographer who comes after.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                rule: 'Always Ask Before Photographing People',
                text: 'A simple "Mumkin sura?" (May I take a photo?) in Arabic shows respect. Many people will agree and even pose. If someone declines, accept it immediately and move on. Never photograph someone who has said no.',
              },
              {
                rule: 'Expect to Pay for Posed Photos',
                text: 'Water sellers in traditional dress, snake charmers, and henna artists at Jemaa el-Fnaa are performing. They expect payment from 20-50 MAD for photos. Agree on price before shooting to avoid arguments.',
              },
              {
                rule: 'Be Careful Photographing Women',
                text: 'In conservative areas and rural villages, photographing women without explicit permission is considered deeply disrespectful. Some women will cover their faces when they see a camera. Respect this immediately.',
              },
              {
                rule: 'Avoid Photographing Military & Police',
                text: 'Photographing military installations, police checkpoints, and government buildings is illegal in Morocco. Even photographing police officers casually can lead to having your images deleted or your camera temporarily confiscated.',
              },
              {
                rule: 'Show People Their Photos',
                text: 'Turning your camera screen around to show someone their portrait is one of the best ways to connect. It often leads to smiles, laughter, and an invitation for tea. Carry a portable printer for an extra gesture of goodwill.',
              },
              {
                rule: 'Dress Modestly',
                text: 'Photographers who dress respectfully — covering shoulders and knees — are treated more warmly in medinas and rural areas. This is especially true in Fes, where residents are more conservative than in Marrakech.',
              },
            ].map((item) => (
              <div key={item.rule} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.rule}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Drone Regulations -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Drone Regulations in Morocco (2026)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has strict drone laws. Flying without authorization carries real consequences.
          </p>

          <div className="card-moroccan p-8 mb-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                <strong className="text-[var(--text-primary)]">Authorization required:</strong> All drone flights in Morocco require advance authorization from the Direction Generale de l&apos;Aviation Civile (DGAC). This applies to all drones regardless of size or weight, including compact consumer models like the DJI Mini series.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Application process:</strong> Submit your application to the DGAC at least 2-4 weeks before your trip. You will need to specify exact GPS coordinates, dates, and flight altitudes. Authorization is granted per location and date, not as a blanket permit.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Penalties:</strong> Flying without authorization can result in drone confiscation, fines starting from 5,000 MAD, and in some cases detention. Customs officials at airports actively look for undeclared drones and may confiscate them on entry if you cannot show authorization paperwork.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">No-fly zones:</strong> Even with DGAC authorization, drones are prohibited near royal palaces, military installations, airports (within 5 km), national borders, and large public gatherings. Most major cities effectively ban recreational drone flights.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Practical reality:</strong> Many travel photographers report that the permitting process is burdensome and approval is not guaranteed. Unless drone footage is essential to your work, most professionals recommend leaving the drone at home and focusing on ground-level photography, which Morocco offers in abundance.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Declare your drone at customs.</strong> If you bring a drone into Morocco, declare it on your customs form. Undeclared drones discovered by customs are confiscated with no guarantee of return. Even if you have DGAC authorization, failure to declare at the border creates a separate legal problem.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* -- Gear Recommendations -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Aperture className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gear Recommendations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to pack depends on your travel style, but these categories cover most Morocco photography scenarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gearItems.map((gear) => (
              <div key={gear.category} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {gear.category}
                </h3>
                <ul className="space-y-2">
                  {gear.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 mt-8">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              Smartphone Photography
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Modern smartphones produce excellent results in Morocco. The latest iPhones and Samsung Galaxy phones handle dynamic range well in the harsh desert light. For the blue streets of Chefchaouen and the colorful souks, a phone is often more practical than a DSLR — it is lighter, less intimidating to subjects, and always accessible. Use the built-in HDR mode for high-contrast scenes and enable the grid overlay for composition.
            </p>
          </div>
        </div>
      </section>

      {/* -- Architecture & Pattern Photography -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photographing Moroccan Architecture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Islamic geometric art and Moroccan craftsmanship produce some of the most photogenic architecture in the world.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'Zellige Tilework',
                desc: 'The mosaic tilework found in mosques, madrasas, and riads features mathematically precise geometric patterns that repeat infinitely. Fill the frame for abstract compositions. A macro lens or close-focus zoom reveals details invisible to the naked eye. The best examples are in the Bou Inania and Attarine madrasas in Fes, the Bahia Palace in Marrakech, and the Hassan II Mosque in Casablanca.',
              },
              {
                title: 'Carved Stucco & Cedar',
                desc: 'Above the zellige band, Moroccan buildings transition to carved plaster (stucco) and then painted or carved cedar wood ceilings. Shoot upward with a wide-angle lens to capture the layered transition from tile to stucco to wood. The Saadian Tombs in Marrakech and the Medersa Bou Inania in Meknes are exceptional.',
              },
              {
                title: 'Riad Courtyards',
                desc: 'The central courtyard of a traditional riad creates a natural light well. Position yourself at ground level and shoot upward to capture the rectangular frame of sky surrounded by carved balconies. Many riads welcome non-guests for a mint tea; this earns you time to photograph. Budget from 30-50 MAD for tea.',
              },
              {
                title: 'Doorways & Gates',
                desc: 'Moroccan doors and city gates (bab) are an entire photographic subject on their own. The studded wooden doors of Fes, the painted doors of Chefchaouen, the monumental gates of Meknes (Bab Mansour is the most impressive in Morocco) — each tells a story. Shoot straight-on for symmetry or at an angle for depth.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Landscape Photography Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] zellige-border">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Landscape Photography in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Atlantic coastlines to Saharan dunes, Morocco offers an extraordinary range of landscapes within a single country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Sahara Desert',
                desc: 'The Erg Chebbi dunes near Merzouga reach 150 meters high. For the strongest compositions, shoot during the first and last 30 minutes of sunlight when side-lighting reveals every ripple and ridge in the sand. Footprints are your enemy — wake earliest and walk to an untouched section.',
                icon: Sun,
              },
              {
                title: 'Atlas Mountains',
                desc: "The High Atlas peaks exceed 4,000 meters. The Tizi n'Tichka pass and Imlil valley offer the most accessible viewpoints. Layer your compositions: foreground wildflowers, midground Berber village, background snow-capped peaks. A polarizing filter deepens blue skies against white summits.",
                icon: Mountain,
              },
              {
                title: 'Atlantic Coast',
                desc: 'Morocco has 3,500 km of coastline. Essaouira, Legzira, and Taghazout offer different moods — from fishing port charm to red stone arches to surfing culture. Long exposures (2-4 seconds with an ND filter) smooth the Atlantic waves into mist against rocky foregrounds.',
                icon: Compass,
              },
              {
                title: 'Gorges & Valleys',
                desc: 'The Todra and Dades gorges carve through the Anti-Atlas creating narrow canyons with towering walls. The Draa Valley stretches endlessly with palm groves and kasbahs. These landscapes reward patience — wait for a shepherd, a donkey, or a shadow to enter the frame and add human scale.',
                icon: Navigation,
              },
            ].map((item) => {
              const LandIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <LandIcon className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Instagram-Worthy Spots Quick List -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Image className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Instagram-Worthy Spots at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            For social media photographers who want quick, high-impact locations with specific access details.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-primary)]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Location</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Best For</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Entry Cost</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Crowd Level</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                {[
                  { loc: 'Chefchaouen Blue Streets', best: 'Blue-on-blue symmetry', cost: 'Free', crowd: 'Low (early AM)' },
                  { loc: 'Jardin Majorelle', best: 'Cobalt blue & yellow contrast', cost: 'From 70 MAD', crowd: 'High' },
                  { loc: 'Bahia Palace', best: 'Zellige floors & ceilings', cost: 'From 70 MAD', crowd: 'Medium' },
                  { loc: 'Erg Chebbi Dunes', best: 'Desert silhouettes', cost: 'Free', crowd: 'Low' },
                  { loc: 'Fes Tanneries Terrace', best: 'Colorful dye vats', cost: 'From 20 MAD tip', crowd: 'Medium' },
                  { loc: 'Hassan II Mosque', best: 'Blue hour reflections', cost: 'From 130 MAD (tour)', crowd: 'Medium' },
                  { loc: 'Ait Benhaddou', best: 'Kasbah at sunrise', cost: 'Free', crowd: 'Low (sunrise)' },
                  { loc: 'Essaouira Port', best: 'Blue boats & seagulls', cost: 'Free', crowd: 'Medium' },
                ].map((row) => (
                  <tr key={row.loc} className="border-b border-[var(--border-primary)]">
                    <td className="py-3 px-4 font-medium text-[var(--text-primary)]">{row.loc}</td>
                    <td className="py-3 px-4">{row.best}</td>
                    <td className="py-3 px-4">{row.cost}</td>
                    <td className="py-3 px-4">{row.crowd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Photography Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hard-won advice from photographers who have spent weeks shooting across the country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Protect Gear from Sand',
                text: 'Saharan sand is impossibly fine and gets into lens mechanisms, sensor cavities, and memory card slots. Keep cameras in sealed bags when not shooting. Change lenses inside your hotel, never outdoors in the desert. A rocket blower removes particles more safely than compressed air.',
              },
              {
                title: 'Backup Daily',
                text: 'Carry two memory cards and swap them daily. Back up to a portable SSD each evening. Memory cards can fail, and getting replacement high-speed cards in Morocco is difficult outside Casablanca and Marrakech.',
              },
              {
                title: 'Hire Local Guides for Access',
                text: 'Local guides (from 300-500 MAD per day) know viewpoints that do not appear on Google Maps. In Fes, a guide navigates the labyrinthine medina and negotiates access to rooftop terraces. In the Sahara, Berber guides know which dunes face east for sunrise and which are most photogenic.',
              },
              {
                title: 'Wake Up Before Everyone Else',
                text: "Morocco's most famous spots — Chefchaouen, Jemaa el-Fnaa, Ait Benhaddou — are overrun by mid-morning. The photographers who get clean, crowd-free shots are the ones who set alarms for 5:30 AM. The light is better, the streets are empty, and you have the composition to yourself.",
              },
              {
                title: 'Stay in Riads for Rooftop Access',
                text: 'Traditional riads in medinas have rooftop terraces that offer elevated perspectives over the city. These are free if you are a guest. Budget riads with rooftop access start from 300 MAD per night in Fes and Marrakech. Ask about the view before booking.',
              },
              {
                title: 'Keep a Low Profile with Gear',
                text: 'Morocco is generally safe, but flashing expensive camera equipment in crowded souks can attract unwanted attention. Use a discreet camera bag rather than a branded photography backpack. Keep lens caps on when walking through crowds. Consider camera insurance that covers travel.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions from photographers planning a Morocco trip.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Photography Guide',
                description: 'Extended tips on composition, camera settings, and editing workflows specifically tailored to Moroccan subjects.',
                href: '/morocco-photography',
                icon: Camera,
              },
              {
                title: 'Art Galleries & Museums',
                description: 'Contemporary art spaces, photography exhibitions, and cultural institutions across Moroccan cities.',
                href: '/morocco-art-galleries',
                icon: Image,
              },
              {
                title: 'Best Sunset Spots',
                description: 'The most spectacular sunset viewpoints in Morocco from Atlantic cliffs to desert dunes and mountain passes.',
                href: '/morocco-sunset-spots',
                icon: Sunrise,
              },
              {
                title: 'Sahara Stargazing Guide',
                description: 'Astrophotography locations, best camps for dark skies, Milky Way season, and stargazing tour options.',
                href: '/morocco-sahara-stargazing',
                icon: Star,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- More Photography Resources -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Photography &amp; Visual Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/chefchaouen', title: 'Chefchaouen City Guide', desc: 'Complete guide to the Blue Pearl including medina walks, Spanish Mosque hike, and local food.' },
              { href: '/fes', title: 'Fes Travel Guide', desc: "Navigate the world's largest car-free medina with guides to tanneries, madrasas, and artisan workshops." },
              { href: '/sahara-desert', title: 'Sahara Desert Guide', desc: 'Camel treks, luxury desert camps, dune types, and everything you need for a Sahara expedition.' },
              { href: '/marrakech', title: 'Marrakech Travel Guide', desc: "Palaces, souks, gardens, and rooftop terraces in Morocco's most visited city." },
              { href: '/essaouira', title: 'Essaouira Guide', desc: 'Windy Atlantic port town with blue boats, rampart walks, and a thriving art scene.' },
              { href: '/morocco-packing-list', title: 'Morocco Packing List', desc: 'What to pack for Morocco including photography gear considerations and protective equipment.' },
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

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--color-accent)] to-[#7a3d1f] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Ready to Capture Morocco?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            From the blue alleys of Chefchaouen to the golden dunes of the Sahara, Morocco offers a lifetime of images in a single trip. Plan your photography journey and come home with images that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] px-8 py-3.5 rounded-xl font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              <Camera className="w-5 h-5" />
              Browse Photography Tours
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-xl font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

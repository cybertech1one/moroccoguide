import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Mountain,
  Sun,
  Moon,
  Compass,
  Camera,
  Tent,
  Calendar,
  Thermometer,
  Eye,
  Globe,
  Heart,
  CloudMoon,
  Telescope,
  CircleDot,
  Navigation,
  Layers,
  Focus,
  Sunrise,
  Binoculars,
  Award,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-sahara-stargazing`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Sahara Stargazing Guide 2026 | Dark Sky Sites, Milky Way & Desert Astronomy',
  description:
    'Plan a Sahara stargazing trip in Morocco. Dark sky sites at Merzouga, Erg Chigaga, Zagora, and Tafraout rated Bortle Class 1-2. Milky Way viewing calendar, constellation guide for 31°N latitude, moon phase planning, desert astronomy camps, telescope experiences, astrophotography tips, and light pollution maps.',
  keywords: [
    'Morocco Sahara stargazing',
    'Merzouga dark sky',
    'Erg Chigaga stargazing',
    'Zagora night sky',
    'Tafraout stargazing',
    'Morocco Milky Way',
    'desert astronomy Morocco',
    'Morocco dark sky sites',
    'Bortle scale Morocco',
    'Morocco astrophotography',
    'Sahara desert stars',
    'Morocco constellation guide',
    'desert astronomy camp',
    'Morocco telescope experience',
    'stargazing tour Morocco',
    'Morocco light pollution map',
    'moon phase Morocco stargazing',
    'Sahara night sky guide 2026',
    'best time stargazing Morocco',
    'Morocco star photography',
  ],
  openGraph: {
    title: 'Morocco Sahara Stargazing Guide 2026 | Dark Sky Sites, Milky Way & Desert Astronomy',
    description:
      'Complete guide to stargazing in Morocco\'s Sahara. Bortle Class 1-2 dark sky sites at Merzouga, Erg Chigaga, Zagora, and Tafraout. Milky Way calendar, constellation guide, astrophotography tips, desert camps, and telescope experiences.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-stargazing.webp`,
        width: 1200,
        height: 630,
        alt: 'The Milky Way arching over sand dunes in the Moroccan Sahara desert at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Sahara Stargazing 2026 | Dark Sky Sites & Desert Astronomy',
    description:
      'Bortle Class 1-2 dark skies at Merzouga, Erg Chigaga, Zagora. Milky Way viewing, constellation guide, astrophotography tips, and desert astronomy camps.',
    images: [`${BASE_URL}/images/hero-stargazing.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'When is the best time to stargaze in the Moroccan Sahara?',
    a: 'The prime window runs from September through April. The absolute peak is October through December: comfortable nighttime temperatures around 10-15°C, minimal cloud cover, and the Milky Way core visible in early evening. Avoid June through August when heat haze and Saharan dust reduce transparency. Always plan around new moon dates for the darkest skies.',
  },
  {
    q: 'What Bortle scale rating do Morocco\'s desert sites achieve?',
    a: 'Erg Chigaga and deep Erg Chebbi consistently measure Bortle Class 1 to 2, among the darkest skies on Earth. The zodiacal light is visible as a bright cone, the gegenschein is detectable, and the Milky Way casts shadows on the sand. Zagora and Tafraout rate Bortle 2 to 3, still exceptional. Most European cities score Bortle 7 to 9.',
  },
  {
    q: 'Do I need my own telescope for Sahara stargazing?',
    a: 'No. Several desert camps provide 8-inch to 12-inch telescopes as part of overnight packages. Binoculars (7x50 or 10x50) are an excellent lightweight alternative. For casual viewing, your unaided eyes are more than sufficient under Bortle 1-2 skies where thousands of stars are visible.',
  },
  {
    q: 'Can I photograph the Milky Way with a smartphone?',
    a: 'Recent flagship phones (iPhone 15 Pro+, Samsung Galaxy S24 Ultra, Pixel 8 Pro) have astrophotography modes that can capture the Milky Way in Bortle 1-2 conditions. Results improve with a phone tripod mount. For serious work, a mirrorless camera with a fast wide-angle lens (f/1.4-f/2.8) and sturdy tripod produces far superior results.',
  },
  {
    q: 'Is it safe to stargaze alone in the Sahara?',
    a: 'Stargazing from an organized desert camp is safe. Venturing into the dunes alone at night carries risks: disorientation in featureless terrain, near-freezing temperatures in winter, and active scorpions. Always stargaze with a group or guide, carry a red-light headlamp, and mark your camp coordinates on GPS if walking out for darker skies.',
  },
  {
    q: 'How cold does the Sahara get at night for stargazing?',
    a: 'November through February: expect 0-8°C overnight. March-April and October: milder at 10-18°C. Wind chill on exposed dune ridges makes it feel colder. Dress in thermal layers with fleece, insulated jacket, warm hat, and gloves. Camps provide Berber blankets, but bring a sleeping bag liner for extra warmth.',
  },
  {
    q: 'What constellations can I see from Morocco that are invisible from northern Europe?',
    a: 'At 31°N, Morocco reveals Canopus (second brightest star), parts of the Southern Cross in spring, Centaurus, Vela, Puppis, and Omega Centauri — all invisible above 50°N. Scorpius and Sagittarius climb much higher, revealing the densest Milky Way galactic center sections that barely clear the horizon in the UK or Scandinavia.',
  },
  {
    q: 'How much does a stargazing desert camp cost?',
    a: 'Budget bivouacs start from 300 MAD per person including dinner, tent, and breakfast. Mid-range camps with telescope sessions run from 800 to 1,500 MAD. Luxury glamping with professional equipment and a dedicated astronomer starts from 2,500 MAD. Seasonal pricing can change during peak periods.',
  },
  {
    q: 'Do I need to book a stargazing tour in advance?',
    a: 'Book at least two weeks ahead during peak season (October-December, near new moon dates). Astronomy camps have limited capacity. In shoulder months you can arrange a camp 1-3 days ahead. Budget bivouacs near Merzouga can sometimes be booked same-day, but you lose the ability to time your visit with optimal moon phases.',
  },
  {
    q: 'What is the gegenschein and can I see it in Morocco?',
    a: 'The gegenschein is a faint oval glow opposite the sun, visible only under the darkest conditions. In Bortle 1 sites like Erg Chigaga, it appears as a soft brightening about 10 degrees across along the ecliptic, highest around midnight. Seeing it is a benchmark for dark-sky observers, and Morocco\'s Sahara is one of the most accessible places on Earth to witness it.',
  },
];

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Sahara Stargazing Guide 2026',
  description:
    'Comprehensive guide to stargazing in Morocco\'s Sahara desert covering dark sky sites, Milky Way viewing, constellation guide, astrophotography, desert astronomy camps, and moon phase planning.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-stargazing.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Sahara Stargazing Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: DARK SKY SITES
   ================================================================ */

const darkSkySites = [
  {
    name: 'Erg Chigaga',
    region: 'M\'Hamid, Draa-Tafilalet',
    bortle: '1-2',
    rating: 5,
    coords: '29.5°N, 5.9°W',
    description:
      'The most remote major erg in Morocco, requiring a 50km off-road drive from M\'Hamid. Erg Chigaga\'s isolation from any settlement guarantees Bortle Class 1 conditions across the entire sky dome. The gegenschein, zodiacal band, and airglow are all visible to the naked eye. Sand dunes reach 300 meters and serve as natural windbreaks for comfortable overnight observation.',
    bestFor: 'Serious astrophotography, Bortle 1 purists, multi-night desert expeditions',
    access: '4WD required from M\'Hamid (2-3 hours) or organized camp transfer',
    camps: 'Erg Chigaga Luxury Desert Camp, Bivouac Chigaga, Camp Mars',
  },
  {
    name: 'Erg Chebbi (South Merzouga)',
    region: 'Merzouga, Draa-Tafilalet',
    bortle: '2',
    rating: 5,
    coords: '31.0°N, 4.0°W',
    description:
      'Morocco\'s most accessible world-class dark sky site. The southern dunes of Erg Chebbi, 5-10km from Merzouga village, achieve Bortle Class 2 with minimal light dome on the northern horizon. The 150-meter dune ridges provide elevated vantage points above ground-level haze. The Milky Way casts visible shadows on the golden sand during new moon periods from late March through October.',
    bestFor: 'First-time desert stargazers, accessible dark skies, combining with camel trekking',
    access: 'Paved road to Merzouga, then camel or 4WD to camp (30-60 min)',
    camps: 'Merzouga Desert Luxury Camp, Kam Kam Dunes, Sahara Stars Camp',
  },
  {
    name: 'Zagora & Draa Valley',
    region: 'Zagora, Draa-Tafilalet',
    bortle: '2-3',
    rating: 4,
    coords: '30.3°N, 5.8°W',
    description:
      'The Draa Valley south of Zagora offers excellent dark skies with the added drama of palm-lined landscapes and kasbah silhouettes. Bortle 2-3 conditions are typical 10km outside town. The flat desert terrain provides unobstructed horizon-to-horizon views ideal for tracking meteor showers. Zagora was historically a caravan crossroads, and the clear skies here guided navigators for centuries.',
    bestFor: 'Meteor shower watching, cultural context with kasbah stays, photography with foreground interest',
    access: 'Paved road from Ouarzazate (3.5 hours) or Marrakech (7 hours)',
    camps: 'Bivouac Le Petit Prince, Sahara Sky Camp, Desert Dream Zagora',
  },
  {
    name: 'Tafraout & Anti-Atlas',
    region: 'Tiznit, Souss-Massa',
    bortle: '2-3',
    rating: 4,
    coords: '29.7°N, 8.9°W',
    description:
      'An overlooked gem for stargazing. The Anti-Atlas around Tafraout combines Bortle 2-3 skies with dramatic granite formations that make extraordinary astrophotography foregrounds. At 1,200m elevation, you sit above the coastal inversion layer. The painted rocks and Ameln Valley provide unique compositions found nowhere else. Fewer tourists than the Sahara means you often have the sky entirely to yourself.',
    bestFor: 'Astrophotography with geological foregrounds, solitude, combining with rock climbing',
    access: 'Paved road from Agadir (3 hours) or Tiznit (1.5 hours)',
    camps: 'Guesthouses and rural bivouacs (no major glamping camps)',
  },
];

/* ================================================================
   DATA: CONSTELLATION GUIDE (31°N LATITUDE)
   ================================================================ */

const constellationSeasons = [
  {
    season: 'Autumn (Sep-Nov)',
    icon: Moon,
    highlights: [
      'Milky Way galactic center in Sagittarius visible in early evening before setting',
      'Andromeda Galaxy (M31) high overhead — visible naked eye as a fuzzy smudge',
      'Pegasus Great Square dominates the zenith for orientation',
      'Fomalhaut shines low in the southern sky, a solitary bright star',
      'Orionid meteor shower peaks mid-October (20-25 meteors/hour)',
    ],
  },
  {
    season: 'Winter (Dec-Feb)',
    icon: Sparkles,
    highlights: [
      'Orion commands the sky with Betelgeuse and Rigel — the Hunter at his best',
      'Sirius, the brightest star, blazes in Canis Major south of Orion',
      'The Winter Hexagon: Sirius, Rigel, Aldebaran, Capella, Pollux, Procyon',
      'Geminid meteor shower in mid-December (120+ meteors/hour, the year\'s best)',
      'Canopus visible low on the southern horizon — invisible from most of Europe',
    ],
  },
  {
    season: 'Spring (Mar-May)',
    icon: Sunrise,
    highlights: [
      'Leo the Lion at the zenith with bright Regulus',
      'The Milky Way core begins rising in pre-dawn hours by late March',
      'Virgo cluster region: dozens of galaxies visible through a telescope',
      'Omega Centauri (best globular cluster) visible low on southern horizon',
      'Lyrid meteor shower in late April (15-20 meteors/hour)',
    ],
  },
  {
    season: 'Summer (Jun-Aug)',
    icon: Sun,
    highlights: [
      'Milky Way galactic center arches directly overhead in Sagittarius and Scorpius',
      'Summer Triangle: Vega, Deneb, Altair — the brightest asterism of the season',
      'Scorpius fully visible with red supergiant Antares and rich star fields',
      'Perseid meteor shower peaks mid-August (up to 100 meteors/hour)',
      'Saturn and Jupiter often prominent in summer evening sky',
    ],
  },
];

/* ================================================================
   DATA: ASTROPHOTOGRAPHY SETTINGS
   ================================================================ */

const astroSettings = [
  {
    subject: 'Milky Way Core',
    lens: '14-24mm f/2.8 or faster',
    iso: '3200-6400',
    exposure: '15-25 sec (500 rule)',
    aperture: 'Wide open (f/1.4-f/2.8)',
    tips: 'Divide 500 by focal length for max exposure before star trails. Shoot RAW. Focus manually on a bright star using live view at 10x magnification.',
  },
  {
    subject: 'Star Trails',
    lens: '14-35mm wide angle',
    iso: '400-800',
    exposure: '30 sec x 100+ stacked',
    aperture: 'f/4-f/5.6',
    tips: 'Point north toward Polaris for concentric circles. Stack 30-second exposures in StarStaX or Sequator. Include dunes or a camel silhouette as foreground.',
  },
  {
    subject: 'Moon & Landscape',
    lens: '70-200mm telephoto',
    iso: '100-400',
    exposure: '1/125-1/500 sec',
    aperture: 'f/8-f/11',
    tips: 'Photograph the rising/setting moon near the horizon with dunes in frame. Use the Looney 11 rule: f/11, ISO 100, 1/100 sec.',
  },
  {
    subject: 'Meteor Showers',
    lens: '14-24mm ultra-wide',
    iso: '3200-6400',
    exposure: '20-30 sec continuous',
    aperture: 'Wide open',
    tips: 'Frame the radiant point with generous sky coverage. Shoot continuously — expect 1-3 meteors per 20 frames. Battery grip essential for all-night cold sessions.',
  },
  {
    subject: 'Zodiacal Light',
    lens: '24-35mm moderate wide',
    iso: '1600-3200',
    exposure: '15-25 seconds',
    aperture: 'f/2.8',
    tips: 'Faint pyramid along the ecliptic after evening twilight (west) or before dawn (east). Brightest in spring evenings and autumn mornings. Include a horizon landmark to anchor the shot.',
  },
];

/* ================================================================
   DATA: MOON PHASE PLANNING
   ================================================================ */

const moonPhaseGuide = [
  {
    phase: 'New Moon (0% illumination)',
    icon: CircleDot,
    quality: 'Perfect',
    stars: 5,
    description:
      'The gold standard for stargazing. The entire night is free of moonlight. The Milky Way, zodiacal light, gegenschein, and faintest deep-sky objects are all visible. Book your desert camp around new moon dates for the best experience.',
  },
  {
    phase: 'Crescent Moon (1-25%)',
    icon: Moon,
    quality: 'Excellent',
    stars: 4,
    description:
      'A thin crescent sets within 1-3 hours of sunset, leaving the rest of the night dark. Bonus: a crescent moon with earthshine over sand dunes makes a stunning photograph before the deep-sky observing begins.',
  },
  {
    phase: 'First/Last Quarter (50%)',
    icon: Moon,
    quality: 'Good',
    stars: 3,
    description:
      'Half the night offers dark skies. A first quarter moon sets around midnight; a last quarter rises around midnight. Plan your observing for the moon-free hours. Bright objects — planets, double stars, star clusters — remain excellent targets during moonlit hours.',
  },
  {
    phase: 'Gibbous Moon (75%)',
    icon: Moon,
    quality: 'Limited',
    stars: 2,
    description:
      'Moonlight washes out the Milky Way and faint objects for most of the night. Telescope targets like the moon itself, planets, and bright double stars remain rewarding. A gibbous moon over the Sahara creates an ethereal silver-lit landscape worth photographing on its own terms.',
  },
  {
    phase: 'Full Moon (100%)',
    icon: Sun,
    quality: 'Poor for stars, magical for landscapes',
    stars: 1,
    description:
      'Stargazing is severely compromised. Only the brightest stars and planets punch through the moonlight. However, a full moon illuminating the Sahara dunes is an extraordinary experience in itself — the landscape glows silver-blue and you can walk without a torch. Trade the telescope for a camera.',
  },
];

/* ================================================================
   DATA: ESSENTIAL GEAR
   ================================================================ */

const essentialGear: { item: string; reason: string; icon: typeof Eye }[] = [
  { item: 'Red-light headlamp', reason: 'Preserves night vision — takes 20-30 min to regain after white light exposure', icon: Eye },
  { item: 'Warm insulated jacket', reason: 'Desert temperatures drop to 0-8°C on winter nights; wind chill adds to the cold', icon: Thermometer },
  { item: 'Binoculars (7x50 or 10x50)', reason: 'Lightweight, no setup, superb for star clusters and the Milky Way structure', icon: Binoculars },
  { item: 'Sturdy tripod', reason: 'Essential for astrophotography — sand requires wide-footed legs or a ground plate', icon: Camera },
  { item: 'Offline star chart app', reason: 'Stellarium Mobile or SkySafari work offline after downloading star catalogs', icon: Compass },
  { item: 'Spare batteries & power bank', reason: 'Cold drains batteries 2-3x faster; cameras, phones, and headlamps all need backups', icon: Layers },
  { item: 'Sand-proof camera bag', reason: 'Fine Saharan sand infiltrates every opening; zip-lock bags protect lenses between shots', icon: ShieldCheck },
  { item: 'Sleeping bag (0°C comfort)', reason: 'Even in spring/autumn, lying on a dune ridge at 3 AM will chill you fast', icon: Tent },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoSaharaStargazingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gray-900">
        <img
          src="/images/hero-stargazing.webp"
          alt="Milky Way arching over golden sand dunes in Morocco's Sahara desert under a pristine dark sky"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-amber-300 font-[family-name:var(--font-heading)] tracking-wider uppercase text-sm mb-4">
            Desert Astronomy Guide
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-[family-name:var(--font-display)] mb-6 leading-tight">
            Morocco Sahara Stargazing
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-[family-name:var(--font-heading)] max-w-3xl mx-auto">
            Bortle Class 1-2 dark skies, the Milky Way casting shadows on sand dunes, and constellations
            invisible from northern Europe — Morocco&apos;s Sahara delivers some of the finest stargazing on Earth.
          </p>
        </div>
      </section>

      {/* ============================================================
          BREADCRUMBS
          ============================================================ */}
      <nav className="bg-[#FAF8F5] border-b border-amber-100" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500 font-[family-name:var(--font-heading)]">
            <li className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-[#A0522D] font-medium">Morocco Sahara Stargazing Guide</li>
          </ol>
        </div>
      </nav>

      {/* ============================================================
          INTRO SECTION
          ============================================================ */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco max-w-4xl">
          <div className="zellige-border p-8 bg-white rounded-xl shadow-sm">
            <div className="flex items-start gap-3 mb-6">
              <Telescope className="w-7 h-7 text-[#A0522D] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-4">
                  Why Morocco for Stargazing?
                </h2>
                <div className="space-y-4 text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                  <p>
                    Morocco sits at the intersection of geography, climate, and accessibility that makes it one
                    of the world&apos;s premier stargazing destinations. The Sahara desert — with zero artificial
                    light for hundreds of kilometers — achieves Bortle Class 1 darkness, the absolute minimum
                    on the light pollution scale. Only a handful of locations worldwide match this: the Atacama
                    in Chile, the Namib in Africa, and parts of outback Australia.
                  </p>
                  <p>
                    What separates Morocco from those remote alternatives is access. You can fly into Marrakech
                    or Ouarzazate and reach Bortle 1-2 skies within a single day of overland travel. Desert camps
                    handle logistics — tents, meals, 4WD transport — so you can focus on the sky. At 31°N
                    latitude, you gain visibility into southern constellations blocked from European latitudes
                    while still seeing every major northern sky landmark.
                  </p>
                  <p>
                    The Saharan climate cooperates too. Morocco averages 300+ clear nights per year in its desert
                    regions. Humidity stays below 20% for much of autumn and winter, eliminating the atmospheric
                    moisture that degrades astronomical seeing. The dry air produces pinpoint stars and
                    razor-sharp horizons — conditions that astrophotographers spend careers chasing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DARK SKY SITES
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
              Morocco&apos;s Dark Sky Sites
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Four premier locations rated on the Bortle Dark-Sky Scale, from the most remote dunes to
              accessible Anti-Atlas granite landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {darkSkySites.map((site) => (
              <article key={site.name} className="card-moroccan p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {site.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-[family-name:var(--font-heading)] flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {site.region}
                    </p>
                  </div>
                  <div className="bg-gray-900 text-amber-300 px-3 py-1 rounded-full text-sm font-bold font-[family-name:var(--font-heading)]">
                    Bortle {site.bortle}
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < site.rating ? 'text-[#C4960C] fill-[#C4960C]' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2 font-[family-name:var(--font-heading)]">{site.coords}</span>
                </div>

                <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed mb-4">
                  {site.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 font-[family-name:var(--font-heading)]">
                      <span className="font-semibold text-gray-800">Best for:</span> {site.bestFor}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Navigation className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 font-[family-name:var(--font-heading)]">
                      <span className="font-semibold text-gray-800">Access:</span> {site.access}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Tent className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 font-[family-name:var(--font-heading)]">
                      <span className="font-semibold text-gray-800">Camps:</span> {site.camps}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BORTLE SCALE EXPLAINER
          ============================================================ */}
      <section className="bg-gray-900 py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-3">
              Understanding the Bortle Scale
            </h2>
            <p className="text-gray-300 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              The Bortle Dark-Sky Scale rates night sky darkness from Class 1 (pristine) to Class 9 (inner city).
              Morocco&apos;s Sahara sites rank among the darkest measured on Earth.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              { cls: '1', label: 'Excellent Dark Sky', where: 'Deep Sahara (Erg Chigaga)', desc: 'Zodiacal light, gegenschein, zodiacal band all visible. Milky Way casts shadows. Horizon glow absent in all directions.', color: 'bg-emerald-500' },
              { cls: '2', label: 'Typical Dark Sky', where: 'Erg Chebbi south, Zagora outskirts', desc: 'Milky Way highly detailed with dark lanes. Airglow visible. Slight light dome may appear on one horizon near a distant town.', color: 'bg-emerald-400' },
              { cls: '3', label: 'Rural Sky', where: 'Tafraout, rural Anti-Atlas', desc: 'Milky Way still appears complex. Some light pollution visible low on horizon. Zodiacal light obvious in spring/autumn.', color: 'bg-lime-400' },
              { cls: '4-5', label: 'Suburban Transition', where: 'Ouarzazate outskirts, small towns', desc: 'Milky Way visible but washed out near horizon. Light domes from towns apparent. Limiting magnitude around 5.5-6.0.', color: 'bg-yellow-400' },
              { cls: '6-7', label: 'Suburban Sky', where: 'Marrakech outskirts, Agadir suburbs', desc: 'Milky Way only visible overhead. Sky glow extends 30-45° above horizon. Binoculars needed for most deep-sky objects.', color: 'bg-orange-400' },
              { cls: '8-9', label: 'City / Inner City', where: 'Casablanca, Rabat centers', desc: 'Only bright stars and planets visible. The sky appears grey or orange. No Milky Way. Limiting magnitude 3-4.', color: 'bg-red-500' },
            ].map((b) => (
              <div key={b.cls} className="flex items-start gap-4 bg-gray-800/50 rounded-lg p-4">
                <div className={`${b.color} text-gray-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm font-[family-name:var(--font-heading)]`}>
                  {b.cls}
                </div>
                <div>
                  <h3 className="text-white font-semibold font-[family-name:var(--font-heading)]">
                    {b.label} <span className="text-gray-400 font-normal text-sm">— {b.where}</span>
                  </h3>
                  <p className="text-gray-300 text-sm font-[family-name:var(--font-heading)] mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-800/50 rounded-lg p-5 border border-amber-600/30">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm font-[family-name:var(--font-heading)]">
                <span className="text-amber-400 font-semibold">Light pollution map:</span> Check{' '}
                <span className="text-amber-300">lightpollutionmap.info</span> before your trip. Zoom into southern
                Morocco to see the vast black zones spanning from M&apos;Hamid to Merzouga. The interactive SQM
                (Sky Quality Meter) overlay shows readings above 21.8 magnitudes per square arcsecond —
                confirming Bortle 1-2 quality across the entire region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONSTELLATION GUIDE BY SEASON
          ============================================================ */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
              Constellation Guide for Morocco&apos;s Latitude
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              At 31°N, Morocco offers a unique vantage point — deep enough south to reveal the galactic center
              high overhead, yet far enough north to keep Polaris and all circumpolar constellations in view.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {constellationSeasons.map((cs) => {
              const Icon = cs.icon;
              return (
                <div key={cs.season} className="card-moroccan p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-900 p-2.5 rounded-lg">
                      <Icon className="w-5 h-5 text-amber-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {cs.season}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {cs.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Star className="w-3.5 h-3.5 text-[#C4960C] mt-1 flex-shrink-0" />
                        <span className="text-gray-700 font-[family-name:var(--font-heading)]">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          MILKY WAY VIEWING CALENDAR
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
              Milky Way Viewing Calendar
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              The galactic center — the brightest and most photogenic section of the Milky Way — rises and sets
              at different times throughout the year. This calendar helps you plan when to be on the dunes.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { month: 'January-February', core: 'Below horizon until pre-dawn', window: '5:00-6:30 AM', quality: 'Brief', note: 'Core rises in the southeast before morning twilight. Only 60-90 minutes of visibility.' },
              { month: 'March', core: 'Rising pre-dawn, gaining altitude', window: '3:30-6:00 AM', quality: 'Good', note: 'The core clears the horizon well before twilight. Plan for late-night/early-morning sessions.' },
              { month: 'April-May', core: 'Rising before midnight', window: '11:00 PM-5:30 AM', quality: 'Excellent', note: 'Long viewing window. Core is well-positioned by midnight and transits through the south.' },
              { month: 'June-July', core: 'Visible all night', window: '9:30 PM-4:30 AM', quality: 'Peak', note: 'The core reaches maximum altitude, arching overhead. Longest viewing window of the year. However, summer heat and occasional dust reduce transparency.' },
              { month: 'August-September', core: 'High in early evening, setting by 2-3 AM', window: '8:30 PM-2:00 AM', quality: 'Excellent', note: 'Core appears at dusk and sets progressively earlier. September offers better atmospheric conditions than August.' },
              { month: 'October-November', core: 'Visible in early evening, sets by midnight', window: '7:30-11:30 PM', quality: 'Good', note: 'Core sets in the southwest. Catch it immediately after evening twilight. Best atmospheric transparency of the year.' },
              { month: 'December', core: 'Sets before full darkness', window: 'Limited', quality: 'Poor', note: 'The core is behind the sun. Focus on winter constellations, the Geminid meteor shower, and deep-sky objects instead.' },
            ].map((m) => (
              <div key={m.month} className="flex items-start gap-4 border border-gray-100 rounded-lg p-4 hover:border-[#A0522D]/30 transition-colors">
                <div className="flex-shrink-0 w-28">
                  <p className="font-semibold text-gray-900 text-sm font-[family-name:var(--font-heading)]">{m.month}</p>
                  <p className={`text-xs mt-1 font-[family-name:var(--font-heading)] ${
                    m.quality === 'Peak' ? 'text-emerald-600 font-bold' :
                    m.quality === 'Excellent' ? 'text-emerald-600' :
                    m.quality === 'Good' ? 'text-[#C4960C]' :
                    m.quality === 'Brief' ? 'text-orange-500' : 'text-red-500'
                  }`}>{m.quality}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">{m.note}</p>
                  <p className="text-xs text-gray-500 font-[family-name:var(--font-heading)] mt-1">
                    <Clock className="w-3 h-3 inline mr-1" />Window: {m.window}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MOON PHASE PLANNING
          ============================================================ */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
              Moon Phase Planning
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              The moon is the single biggest variable in your stargazing experience. A new moon night
              versus a full moon night is the difference between seeing 5,000 stars and seeing 500.
            </p>
          </div>

          <div className="space-y-4">
            {moonPhaseGuide.map((mp) => {
              const Icon = mp.icon;
              return (
                <div key={mp.phase} className="card-moroccan p-5 rounded-xl flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{mp.phase}</h3>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < mp.stars ? 'text-[#C4960C] fill-[#C4960C]' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1 font-[family-name:var(--font-heading)]">{mp.quality}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                      {mp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
              <div className="text-sm font-[family-name:var(--font-heading)]">
                <p className="font-semibold text-gray-900 mb-1">2026 New Moon Dates for Sahara Trips</p>
                <p className="text-gray-700">
                  Jan 29 &middot; Feb 28 &middot; Mar 29 &middot; Apr 28 &middot; May 27 &middot; Jun 26 &middot;
                  Jul 25 &middot; Aug 24 &middot; Sep 22 &middot; Oct 22 &middot; Nov 20 &middot; Dec 20.
                  Plan your desert camp 1-2 days before or after these dates to maximize dark-sky hours. The
                  optimal combination is a new moon falling during the September-November window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ASTROPHOTOGRAPHY SETTINGS
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
              Astrophotography Settings & Tips
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Camera settings optimized for Sahara desert conditions. These are starting points — adjust based on
              your specific lens, sensor, and atmospheric conditions on the night.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {astroSettings.map((as) => (
              <div key={as.subject} className="card-moroccan p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Camera className="w-5 h-5 text-[#A0522D]" />
                  <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{as.subject}</h3>
                </div>
                <div className="space-y-2 text-sm font-[family-name:var(--font-heading)] mb-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Lens</span>
                    <span className="text-gray-800 font-medium">{as.lens}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">ISO</span>
                    <span className="text-gray-800 font-medium">{as.iso}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Exposure</span>
                    <span className="text-gray-800 font-medium text-right">{as.exposure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Aperture</span>
                    <span className="text-gray-800 font-medium">{as.aperture}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-[family-name:var(--font-heading)] border-t border-gray-100 pt-3">
                  {as.tips}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gray-900 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> Sand Protection Protocol
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 font-[family-name:var(--font-heading)]">
              {[
                'Change lenses inside a sealed bag or your tent — never in open desert air',
                'Use a clear UV filter as sacrificial glass on every lens throughout the trip',
                'Point camera downward when not shooting to keep sand off the front element',
                'Carry a rocket blower (not compressed air) to remove sand before wiping',
                'Tape over external ports and card slots with gaffer tape in windy conditions',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          DESERT ASTRONOMY CAMPS
          ============================================================ */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
              Desert Astronomy Camp Experiences
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              From budget bivouacs to luxury glamping with professional telescopes — what to expect
              at each level of Morocco&apos;s desert stargazing camps.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tier: 'Budget Bivouac',
                price: 'From 300 MAD per person',
                icon: Tent,
                features: [
                  'Basic Berber tent on sand or carpet',
                  'Traditional tagine dinner and breakfast',
                  'Camel ride to/from camp (30-60 min)',
                  'Informal stargazing — no telescope provided',
                  'Group fire circle with Berber music',
                  'Shared bathroom facilities',
                ],
                stargazing: 'You stargaze independently. The camp location is typically 2-5km from the nearest village, offering Bortle 2-3 skies. Walk 100 meters from the camp fire for the darkest view. Bring your own binoculars and star chart app.',
              },
              {
                tier: 'Mid-Range Astronomy Camp',
                price: 'From 800-1,500 MAD per person',
                icon: Binoculars,
                features: [
                  'Private tent with real bedding and rugs',
                  'Multi-course dinner with wine or tea',
                  'Guided telescope session (8-inch reflector)',
                  'Constellation tour with laser pointer',
                  'Night sky photography assistance',
                  'Private bathroom per tent',
                ],
                stargazing: 'A guide with astronomical knowledge leads a 60-90 minute session. You observe the moon (if present), planets, double stars, star clusters like the Pleiades, and the Orion Nebula through the telescope. The guide uses a green laser pointer to trace constellations and tells Berber star navigation stories.',
              },
              {
                tier: 'Luxury Astro-Glamping',
                price: 'From 2,500 MAD per person',
                icon: Award,
                features: [
                  'Luxury tent with king bed and en-suite bathroom',
                  'Gourmet multi-course dinner and champagne',
                  'Professional 10-12 inch telescope with tracking mount',
                  'Dedicated astronomer guide (often European-trained)',
                  'Astrophotography session with camera setup assistance',
                  'Private dune observation platform',
                ],
                stargazing: 'A professional astronomer customizes the evening to your interests. Expect 2-3 hours of guided observation including galaxies (Andromeda, Whirlpool), nebulae (Orion, Lagoon, Trifid), globular clusters (M13, Omega Centauri), and planet detail (Saturn rings, Jupiter moons). Some camps offer DSLR adapter attachments for through-the-telescope photography.',
              },
            ].map((camp) => {
              const Icon = camp.icon;
              return (
                <div key={camp.tier} className="card-moroccan p-6 rounded-xl">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#A0522D] p-2.5 rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-display)]">
                          {camp.tier}
                        </h3>
                        <p className="text-sm text-[#A0522D] font-semibold font-[family-name:var(--font-heading)]">
                          {camp.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                    {camp.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-[family-name:var(--font-heading)]">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                      <span className="font-semibold text-gray-900">Stargazing experience:</span> {camp.stargazing}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-gray-500 font-[family-name:var(--font-heading)] mt-4 text-center">
            Seasonal pricing can change during peak periods. Group discounts are often available for 4+ guests.
          </p>
        </div>
      </section>

      {/* ============================================================
          ESSENTIAL GEAR CHECKLIST
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
              Essential Stargazing Gear
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Eight items that make the difference between a memorable night under the stars and
              a cold, frustrating experience squinting at a bright phone screen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {essentialGear.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.item} className="flex items-start gap-4 card-moroccan p-4 rounded-xl">
                  <div className="bg-amber-50 p-2 rounded-lg flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm font-[family-name:var(--font-heading)]">{g.item}</h3>
                    <p className="text-xs text-gray-600 font-[family-name:var(--font-heading)] mt-1">{g.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMBINING STARGAZING WITH DESERT CAMPING
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-8 text-center">
            Combining Stargazing with Desert Camping
          </h2>

          <div className="space-y-6">
            <div className="zellige-border p-6 bg-[#FAF8F5] rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#A0522D]" />
                3-Day Itinerary: Marrakech to Merzouga
              </h3>
              <div className="space-y-3 text-sm font-[family-name:var(--font-heading)] text-gray-700">
                <p><span className="font-semibold text-gray-900">Day 1:</span> Cross Tizi n&apos;Tichka pass to Ouarzazate (4.5h). Visit Ait Benhaddou. Evening sky preview from your terrace — already far darker than Marrakech.</p>
                <p><span className="font-semibold text-gray-900">Day 2:</span> Drive via Todra Gorge to Merzouga (7h). Camel trek into Erg Chebbi. Sunset from a dune crest, then constellation tour and telescope session from 9 PM to midnight.</p>
                <p><span className="font-semibold text-gray-900">Day 3:</span> Pre-dawn Milky Way session. After sunrise photography, trek deeper south to a remote bivouac with Bortle 1-2 skies. All-night observation with mint tea and Berber blankets.</p>
              </div>
            </div>

            <div className="zellige-border p-6 bg-[#FAF8F5] rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                <Mountain className="w-5 h-5 text-[#A0522D]" />
                5-Day Expedition: M&apos;Hamid to Erg Chigaga
              </h3>
              <div className="space-y-3 text-sm font-[family-name:var(--font-heading)] text-gray-700">
                <p><span className="font-semibold text-gray-900">Days 1-2:</span> Marrakech to M&apos;Hamid via the Draa Valley. Stop in Zagora. Light pollution drops dramatically south of town. M&apos;Hamid is the last settlement before open Sahara.</p>
                <p><span className="font-semibold text-gray-900">Day 3:</span> 4WD across the hamada to Erg Chigaga (2-3h off-road). Camp in the lee of 300-meter dunes. Bortle Class 1. Zodiacal light visible before full darkness arrives.</p>
                <p><span className="font-semibold text-gray-900">Day 4:</span> Full observation night: 9 PM to midnight, then 3 AM to dawn. Gegenschein, zodiacal band, and airglow all visible. Sleep under the stars between sessions.</p>
                <p><span className="font-semibold text-gray-900">Day 5:</span> Morning camel trek. Return to M&apos;Hamid or loop back via Foum Zguid, Tata, and Taroudant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRACTICAL TIPS
          ============================================================ */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-8 text-center">
            Practical Tips for Sahara Stargazing
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Eye, title: 'Protect Your Night Vision', text: 'Your eyes need 20-30 minutes to fully dark-adapt. Use only red-light headlamps. Set your phone to red-screen mode. One flash of white light resets the entire adaptation.' },
              { icon: Compass, title: 'Orientation in the Dark', text: 'Find Polaris by extending the Big Dipper\'s pointer stars. At 31°N, Polaris sits 31 degrees above the northern horizon — use it to orient your star chart.' },
              { icon: CloudMoon, title: 'Weather Monitoring', text: 'Check Windy.com or Clear Outside for cloud forecasts. Saharan weather is generally stable, but occasional Atlantic fronts can bring cloud cover.' },
              { icon: Focus, title: 'Binocular Targets', text: '10x50 binoculars reveal the Orion Nebula\'s green glow, dozens of Pleiades stars, Andromeda as an elongated smudge, and the Milky Way resolved into individual stars.' },
              { icon: Thermometer, title: 'Dew and Condensation', text: 'Desert nights produce surprising dew on optics after midnight. Carry a dew heater strip or rubber-band a hand warmer around the lens barrel.' },
              { icon: Heart, title: 'Stay Hydrated', text: 'Dry desert air dehydrates you quickly even when cold. Drink 2-3 liters of water during your overnight session. The Anti-Atlas sits at 1,200m; the Sahara proper is near sea level.' },
            ].map((tip) => {
              const Icon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#A0522D]" />
                    <h3 className="font-semibold text-gray-900 font-[family-name:var(--font-heading)] text-sm">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)]">
              Answers to the most common questions about stargazing in Morocco&apos;s Sahara.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="group card-moroccan rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-[family-name:var(--font-heading)] font-semibold text-gray-900 hover:text-[#A0522D] transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-[#A0522D] transform group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED GUIDES
          ============================================================ */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-8 text-center">
            Related Morocco Guides
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Morocco Camping Guide',
                desc: 'Wild camping, glamping, and desert camps across Morocco. Gear lists, safety tips, and best campsites.',
                href: '/morocco-camping-guide',
                icon: Tent,
              },
              {
                title: 'Morocco Sahara Guide',
                desc: 'Complete guide to the Moroccan Sahara: Erg Chebbi, Erg Chigaga, camel treks, and desert logistics.',
                href: '/morocco-sahara-guide',
                icon: Sun,
              },
              {
                title: 'Marrakech to Sahara',
                desc: 'Route planning from Marrakech to the desert via the Atlas Mountains, Ouarzazate, and Dades Valley.',
                href: '/marrakech-to-sahara',
                icon: Navigation,
              },
              {
                title: 'Morocco Photography Guide',
                desc: 'Best photography spots, camera gear advice, and tips for capturing Morocco\'s landscapes and culture.',
                href: '/morocco-photography-guide',
                icon: Camera,
              },
              {
                title: 'Morocco Desert Glamping',
                desc: 'Luxury desert camps with private tents, gourmet dining, and curated Sahara experiences.',
                href: '/morocco-desert-glamping',
                icon: Award,
              },
              {
                title: 'Morocco Weather Guide',
                desc: 'Month-by-month weather across all regions. Plan your trip around clear skies and comfortable temperatures.',
                href: '/best-time-visit-morocco',
                icon: Thermometer,
              },
            ].map((guide) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 rounded-xl group hover:border-[#A0522D]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[#A0522D]" />
                    <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] group-hover:text-[#A0522D] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">{guide.desc}</p>
                  <span className="text-[#A0522D] text-sm font-semibold font-[family-name:var(--font-heading)] flex items-center gap-1">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-4">
            Ready to See the Sahara&apos;s Night Sky?
          </h2>
          <p className="text-gray-700 font-[family-name:var(--font-heading)] mb-8 text-lg">
            From the Milky Way casting shadows on golden dunes to the gegenschein glowing at the
            anti-solar point — Morocco&apos;s Sahara offers a celestial spectacle that transforms how you
            see the universe. Plan your desert astronomy trip around a new moon and prepare for skies
            that redefine what &quot;dark&quot; means.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-sahara-guide"
              className="inline-flex items-center justify-center gap-2 bg-[#A0522D] hover:bg-[#8B4726] text-white px-8 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold transition-colors"
            >
              Explore the Sahara <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-camping-guide"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#A0522D] text-[#A0522D] hover:bg-[#A0522D] hover:text-white px-8 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold transition-colors"
            >
              Desert Camping Guide <Tent className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

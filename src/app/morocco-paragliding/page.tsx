import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wind,
  Star,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Thermometer,
  TrendingUp,
  Shield,
  Users,
  Mountain,
  Eye,
  Sunrise,
  DollarSign,
  Info,
  Award,
  BookOpen,
  Compass,
  CloudSun,
  Gauge,
  FileText,
  GraduationCap,
  Backpack,
  Globe,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Paragliding Guide 2026 | Top Launch Sites, Tandem Flights & XC Flying',
  description:
    'Complete guide to paragliding in Morocco. Top launch sites at Aguergour, Tizi n\'Test, Dades Valley, Essaouira, Agadir, and Ifrane. Tandem flights from 800 MAD, XC routes, thermal conditions, seasonal wind patterns, schools, and licensing requirements.',
  keywords: [
    'paragliding Morocco',
    'Morocco paragliding guide',
    'tandem paragliding Marrakech',
    'Aguergour paragliding',
    'Tizi n Test paragliding',
    'Dades Valley paragliding',
    'Essaouira paragliding',
    'Agadir paragliding',
    'Imessouane paragliding',
    'Ifrane paragliding',
    'Morocco XC flying',
    'cross country paragliding Morocco',
    'Morocco thermal flying',
    'paragliding school Morocco',
    'tandem flight Atlas Mountains',
    'Morocco adventure sports',
    'paragliding license Morocco',
    'Morocco wind conditions paragliding',
    'paragliding season Morocco',
    'paragliding North Africa',
  ],
  openGraph: {
    title: 'Morocco Paragliding Guide 2026 | Top Launch Sites, Tandem Flights & XC Flying',
    description:
      'From Atlas Mountain thermals to Atlantic coast soaring. Complete guide to paragliding in Morocco with launch sites, tandem flights from 800 MAD, schools, XC routes, and seasonal conditions.',
    url: `${BASE_URL}/morocco-paragliding`,
    images: [
      {
        url: `${BASE_URL}/images/hero-paragliding.webp`,
        width: 1200,
        height: 630,
        alt: 'Paraglider soaring above the Atlas Mountains in Morocco with panoramic views of valleys and peaks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Paragliding Guide 2026 | Top Sites & Tandem Flights',
    description:
      'Soar over the Atlas Mountains, Dades Valley, and Atlantic coastline. Complete paragliding guide with launch sites, tandem flights from 800 MAD, schools, and conditions.',
    images: [`${BASE_URL}/images/hero-paragliding.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-paragliding` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-paragliding`,
  name: 'Morocco Paragliding Guide 2026 | Top Launch Sites, Tandem Flights & XC Flying',
  description:
    'Complete guide to paragliding in Morocco covering launch sites, tandem flights, XC flying, thermal conditions, seasonal wind patterns, schools, and licensing requirements.',
  url: `${BASE_URL}/morocco-paragliding`,
  image: `${BASE_URL}/images/hero-paragliding.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-paragliding`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Paragliding Guide', item: `${BASE_URL}/morocco-paragliding` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does tandem paragliding cost in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tandem flights start from 800 MAD for 15-20 minutes. Extended thermal flights cost from 1,200 MAD. Premium packages with GoPro video start from 1,500 MAD.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for paragliding in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'March to May and September to November offer the best conditions. Spring has the strongest thermals; autumn provides stable, gentle flying for all levels.' },
    },
    {
      '@type': 'Question',
      name: 'Where is the most popular paragliding launch site in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Aguergour, 50 km south of Marrakech, is the most popular site with a 900 m vertical drop, reliable thermals, and easy access from the city.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a license to paraglide in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tandem passengers need no license. Solo pilots must carry a valid national license, IPPI card, third-party insurance, and passport.' },
    },
    {
      '@type': 'Question',
      name: 'Is paragliding in Morocco safe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Established operators maintain strong safety records. Choose FRMAA-registered operators with EN-certified equipment and professionally rated tandem pilots.' },
    },
    {
      '@type': 'Question',
      name: 'Can I do a paragliding course in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. A 5-day beginner course starts from 6,000 MAD at schools in Aguergour and Agadir, following the FFVL syllabus.' },
    },
    {
      '@type': 'Question',
      name: 'What are the best XC paragliding routes in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'The High Atlas corridor offers 100+ km flights. The Dades Valley provides 60-80 km thermal streets. The Middle Atlas around Ifrane suits intermediate XC pilots.' },
    },
    {
      '@type': 'Question',
      name: 'What should I bring for a tandem paragliding flight?',
      acceptedAnswer: { '@type': 'Answer', text: 'Closed-toe shoes, long pants, sunglasses with strap, sunscreen, light jacket, and camera with secure strap. The operator provides helmet and harness.' },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP LAUNCH SITES
   ═══════════════════════════════════════════════════════════════ */

const launchSites = [
  {
    rank: 1,
    name: 'Aguergour',
    region: 'Near Marrakech',
    altitude: '1,200 m launch / 300 m landing',
    icon: Mountain,
    bestMonths: 'March - November',
    flyingType: 'Thermal, Tandem, XC',
    description:
      'Morocco\'s flagship paragliding site, 50 km south of Marrakech on the N8 toward Tizi n\'Test. The launch is a wide, grassy slope facing north-northwest at 1,200 m in the High Atlas foothills. Reliable thermals develop from mid-morning, generated by the sun-baked Haouz plain to the north. On strong thermal days, pilots climb above 3,000 m and begin XC routes toward the high peaks.',
    highlights: ['900 m vertical drop', 'Wide grassy launch', 'Reliable thermals from 10 AM', 'XC gateway to High Atlas'],
  },
  {
    rank: 2,
    name: 'Tizi n\'Test Pass',
    region: 'High Atlas',
    altitude: '2,100 m launch',
    icon: TrendingUp,
    bestMonths: 'April - October',
    flyingType: 'XC, Ridge Soaring, Advanced',
    description:
      'One of North Africa\'s most spectacular high-altitude launches. The R203 road climbs through the western High Atlas connecting Marrakech to Taroudant, with multiple launch options between 1,800 m and 2,100 m. Powerful thermals and ridge lift develop along dramatic ridgelines. This is a site for experienced pilots — valley winds and turbulence near ridges require solid skills. XC flights of 80-120 km are achievable heading east along the Atlas spine.',
    highlights: ['High altitude launch', 'Strong ridge lift', '100+ km XC potential', 'Spectacular mountain scenery'],
  },
  {
    rank: 3,
    name: 'Dades Valley',
    region: 'Central Atlas / Ouarzazate Province',
    altitude: '1,600 m - 2,200 m launch options',
    icon: Eye,
    bestMonths: 'March - June, September - November',
    flyingType: 'XC, Thermal, Scenic',
    description:
      'A unique flying environment where the High Atlas meets pre-Saharan landscapes. Launch sites above the Dades Gorge offer flights over dramatic red rock canyons and vast palmeries. Thermals are strong in spring, fed by the arid terrain, and the valley alignment creates a natural XC corridor. Pilots launching above Boumalne Dades ride thermals south over the Rose Valley or east toward the Todra Gorge.',
    highlights: ['Canyon and gorge flying', 'Strong desert thermals', 'Red rock landscapes', '60+ km XC valley runs'],
  },
  {
    rank: 4,
    name: 'Essaouira Coast',
    region: 'Atlantic Coast',
    altitude: '100 - 300 m cliffs',
    icon: Wind,
    bestMonths: 'October - March',
    flyingType: 'Soaring, Coastal, Beginner-friendly',
    description:
      'Atlantic cliffs south of Essaouira toward Sidi Kaouki offer coastal soaring in consistent sea breezes. You work cliff lift generated by trade winds hitting the coastal bluffs — smooth and predictable in moderate conditions, ideal for intermediate pilots and scenic tandem flights over the ocean. Strong Alize winds in summer (June-August) make conditions too aggressive, so winter and shoulder months are preferred.',
    highlights: ['Consistent sea breeze lift', 'Ocean views', 'Smooth coastal conditions', 'Accessible from Essaouira town'],
  },
  {
    rank: 5,
    name: 'Agadir / Imessouane',
    region: 'Souss-Massa Coast',
    altitude: '200 - 500 m launch options',
    icon: Sunrise,
    bestMonths: 'Year-round (best October - May)',
    flyingType: 'Soaring, Tandem, Training',
    description:
      'Multiple flying options in the Souss-Massa region. Coastal cliffs near Imessouane (80 km north) provide reliable ridge soaring above the surf break. Inland sites in the Anti-Atlas foothills reach 500 m with mild thermals. Several schools operate here, and the mild climate with year-round flyability makes this the best training location in Morocco. Ait Baha (60 km east) is a popular inland launch with views stretching to the coast.',
    highlights: ['Year-round flying possible', 'Multiple site options', 'Best training location', 'Mild coastal climate'],
  },
  {
    rank: 6,
    name: 'Ifrane / Middle Atlas',
    region: 'Middle Atlas',
    altitude: '1,650 m - 2,000 m',
    icon: Compass,
    bestMonths: 'April - October',
    flyingType: 'Thermal, XC, Ridge',
    description:
      'A distinct flying environment with cedar forests, mountain lakes, and rolling ridgelines. Launch sites east of Ifrane reach 2,000 m with thermals from late morning. Gentler terrain than the High Atlas makes it forgiving for intermediate XC pilots. Uncrowded airspace and flights along forest ridges toward Azrou offer a memorable contrast between green forests and rocky peaks.',
    highlights: ['Cedar forest scenery', 'Uncrowded airspace', 'Gentle terrain for XC', 'Cool summer temperatures'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PARAGLIDING SCHOOLS
   ═══════════════════════════════════════════════════════════════ */

const paraglidingSchools = [
  {
    name: 'Marrakech Paragliding',
    location: 'Aguergour / Marrakech',
    speciality: 'Tandem flights & beginner courses',
    price: 'Tandem from 900 MAD / 5-day course from 7,000 MAD',
    details: 'The most established tandem operation near Marrakech. Runs daily flights from Aguergour with hotel pickup included. English and French speaking pilots. EN-certified equipment replaced every 3 years.',
  },
  {
    name: 'Atlas Parapente',
    location: 'Aguergour / High Atlas',
    speciality: 'XC guiding & advanced coaching',
    price: 'XC day from 1,200 MAD / Week package from 6,500 MAD',
    details: 'Specializes in guiding experienced pilots on XC routes through the High Atlas. Provides retrieve service, GPS track logging, and live weather briefings. Strong local knowledge of thermal triggers and convergence zones.',
  },
  {
    name: 'Agadir Fly',
    location: 'Agadir / Imessouane',
    speciality: 'Training & coastal soaring',
    price: 'Tandem from 800 MAD / Beginner course from 6,000 MAD',
    details: 'Based at Imessouane with additional inland sites near Ait Baha. Excellent for beginner courses due to consistent, gentle conditions. Courses follow the French FFVL syllabus. Accommodation packages available with local surf camps.',
  },
  {
    name: 'Dades Air',
    location: 'Boumalne Dades / Ouarzazate',
    speciality: 'Desert thermal flying & gorge tours',
    price: 'Tandem from 1,000 MAD / Day guiding from 1,500 MAD',
    details: 'The only resident paragliding operation in the Dades Valley region. Offers tandem flights over the gorge and guided XC for visiting pilots. Operates from multiple launch sites depending on wind direction. Local Amazigh pilot with 15+ years of site knowledge.',
  },
  {
    name: 'Morocco Air Sports',
    location: 'Multiple locations',
    speciality: 'Multi-site flying safaris',
    price: '7-day safari from 12,000 MAD',
    details: 'Organizes multi-day flying trips covering Aguergour, Tizi n\'Test, Dades Valley, and coastal sites. Includes ground transport, accommodation, retrieve service, and local guide. Best for visiting pilots who want to experience multiple Moroccan sites in one trip.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL CONDITIONS
   ═══════════════════════════════════════════════════════════════ */

const seasonalConditions = [
  {
    season: 'Spring (March - May)',
    icon: Sunrise,
    thermals: 'Strong',
    windRisk: 'Moderate',
    rating: 5,
    description: 'The prime season for inland thermal flying. Atlas thermals develop reliably from mid-morning, cloud base climbing to 3,500-4,000 m by April. XC conditions peak in April and May. Coastal sites are flyable but the Alize trade wind strengthens by late May. Occasional Chergui days can ground flights.',
    bestFor: 'XC flying, High Atlas routes, training courses',
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    thermals: 'Very Strong (inland)',
    windRisk: 'High (coast)',
    rating: 3,
    description: 'Inland thermals are powerful but heat makes ground handling uncomfortable and thermals punchy above 35 degrees. High Atlas launches above 2,000 m remain comfortable. The coast is dominated by strong Alize winds (25-40 km/h), making coastal soaring aggressive. Early morning flights before the wind picks up can work.',
    bestFor: 'High altitude Atlas flights, early morning coastal',
  },
  {
    season: 'Autumn (September - November)',
    icon: CloudSun,
    thermals: 'Moderate to Strong',
    windRisk: 'Low to Moderate',
    rating: 5,
    description: 'The most pleasant season across all Moroccan sites. Thermals remain solid but less punchy than spring. Coastal wind calms as the Alize fades. Visibility is excellent, temperatures comfortable at all altitudes. October is particularly consistent.',
    bestFor: 'All sites, all skill levels, tandem flights, photography',
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    thermals: 'Weak (inland)',
    windRisk: 'Variable',
    rating: 2,
    description: 'High Atlas launches above 1,800 m may be snow-covered. Lower sites like Aguergour remain flyable on clear days but thermals are weaker. Coastal sites near Agadir produce good soaring between fronts. Not a reliable season but flyable days exist.',
    bestFor: 'Coastal soaring, Agadir area, experienced pilots',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Tandem flight (15-20 min)', price: 'From 800 MAD', note: 'Standard flight, most sites' },
  { service: 'Tandem flight (30-45 min)', price: 'From 1,200 MAD', note: 'Extended thermal flight' },
  { service: 'Tandem + GoPro video package', price: 'From 1,500 MAD', note: 'Includes edited video and photos' },
  { service: 'Hotel transfer (Marrakech)', price: 'From 300 MAD', note: 'Round-trip to Aguergour' },
  { service: 'Beginner course (5 days)', price: 'From 6,000 MAD', note: 'Ground school + supervised flights' },
  { service: 'Intermediate course (5 days)', price: 'From 7,500 MAD', note: 'Thermal flying and soaring skills' },
  { service: 'XC coaching (per day)', price: 'From 1,200 MAD', note: 'Guide + retrieve + weather briefing' },
  { service: 'XC week package (7 days)', price: 'From 6,500 MAD', note: 'Multi-site with transport and guide' },
  { service: 'Flying safari (7 days)', price: 'From 12,000 MAD', note: 'Multi-site + accommodation + all transport' },
  { service: 'Equipment rental (per day)', price: 'From 400 MAD', note: 'Wing, harness, reserve, helmet' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: EQUIPMENT CHECKLIST
   ═══════════════════════════════════════════════════════════════ */

const equipmentChecklist = [
  { category: 'Essential (Solo)', items: ['EN-certified wing (check date)', 'Harness with back protection', 'Certified reserve parachute', 'Helmet (EN 966)', 'Variometer / flight instrument', 'Radio (UHF/VHF depending on school)'] },
  { category: 'XC Equipment', items: ['GPS flight recorder', 'Phone with XCTrack or similar', 'Power bank (solar recommended)', 'Hydration pack (2L minimum)', 'Cockpit with map/waypoints', 'InReach or PLB for remote areas'] },
  { category: 'Personal Gear', items: ['Hiking boots (ankle support)', 'Long pants (protection on launch)', 'Layered clothing (cold at altitude)', 'Sunglasses with strap (UV protection)', 'Sunscreen SPF 50+', 'Lightweight windbreaker'] },
  { category: 'Tandem Passengers', items: ['Closed-toe shoes (no sandals)', 'Long pants recommended', 'Sunglasses with strap', 'Sunscreen', 'Light jacket for altitude', 'Camera/phone with secure strap'] },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: LICENSING & REGULATIONS
   ═══════════════════════════════════════════════════════════════ */

const licensingInfo = [
  {
    title: 'Moroccan Authority',
    icon: Shield,
    content: 'The Federation Royale Marocaine des Sports Aeronautiques (FRMAA) governs paragliding in Morocco. All commercial operations must be registered with the FRMAA. The federation aligns with FAI standards and recognizes IPPI card ratings.',
  },
  {
    title: 'Foreign Pilot Requirements',
    icon: FileText,
    content: 'Visiting solo pilots must carry a valid national paragliding license (BHPA, USHPA, FFVL, DHV, or equivalent), an IPPI card with appropriate rating, valid third-party liability insurance covering Morocco, and a passport. Present documents if requested by local authorities or site operators.',
  },
  {
    title: 'Airspace Rules',
    icon: Compass,
    content: 'Morocco uses ICAO airspace classifications. Most paragliding sites operate in Class G (uncontrolled) airspace below FL195. Controlled airspace around airports (Marrakech, Agadir, Fes) must be avoided. Military restricted zones exist in southern Morocco and near borders. Check NOTAMs before flying in unfamiliar areas.',
  },
  {
    title: 'Insurance',
    icon: Shield,
    content: 'Third-party liability insurance is required for all pilots. Many European policies cover Morocco, but verify before traveling. Some Moroccan schools can arrange short-term coverage from 200 MAD per week. Tandem operators carry their own liability insurance that covers passengers.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoParaglidingPage() {
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
            backgroundImage: 'url(/images/hero-paragliding.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Paragliding Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wind className="w-4 h-4" />
            Adventure &amp; Air Sports
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Paragliding Guide:
            <br className="hidden md:block" /> Fly the Atlas Mountains &amp; Atlantic Coast
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 800 MAD tandem flights over the High Atlas to multi-day XC adventures
            through the Dades Valley. Six world-class launch sites, year-round flying
            conditions, and thermals that reach 4,000 meters.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Paragliding in Morocco Is Exceptional
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the intersection of the Atlantic Ocean, the Mediterranean, the Sahara, and the
                Atlas Mountains — a collision of geography that creates flying conditions found nowhere else in
                the world. The High Atlas ridge generates thermals that routinely carry pilots above 3,500 meters,
                while the Atlantic coastline offers year-round ridge soaring in reliable sea breezes. Between
                these extremes, desert valleys, cedar forests, and volcanic plateaus each produce their own
                distinct flying character.
              </p>
              <p>
                For tandem passengers, a flight from Aguergour near Marrakech delivers a 900-meter vertical drop
                over Amazigh villages, olive groves, and the red foothills of the Atlas. For licensed pilots,
                Morocco offers cross-country routes exceeding 100 km along the Atlas spine, desert thermal
                flying over the Dades and Todra gorges, and winter coastal soaring when European sites
                are grounded.
              </p>
              <p>
                The sport has grown rapidly in Morocco since the early 2000s, with Moroccan pilots now competing
                internationally and several professional schools operating across the country. Flying culture here
                blends French paragliding tradition (the FFVL syllabus is widely taught) with local knowledge of
                Atlas wind patterns that only resident pilots understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats Bar ── */}
      <section className="py-8 bg-[var(--color-accent)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-1">6+</div>
              <div className="text-sm text-white/80">Major Launch Sites</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4,000 m</div>
              <div className="text-sm text-white/80">Max Thermal Altitude</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100+ km</div>
              <div className="text-sm text-white/80">XC Flight Potential</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">300+</div>
              <div className="text-sm text-white/80">Flyable Days Per Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Launch Sites ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Paragliding Launch Sites in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six proven sites covering thermal flying, ridge soaring, coastal gliding, and world-class XC corridors.
          </p>

          <div className="space-y-8">
            {launchSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.rank} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">#{site.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {site.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {site.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <SiteIcon className="w-3.5 h-3.5" />
                          {site.altitude}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {site.bestMonths}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2.5 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-3">
                    {site.flyingType}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{site.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {site.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tandem Flights Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tandem Paragliding: Your First Flight
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            No experience needed. A tandem flight with a certified pilot is the fastest way to experience paragliding over the Atlas Mountains.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-6 md:p-8 mb-8">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                How a Tandem Flight Works
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                You are strapped into a harness attached to the same wing as your pilot, who controls
                everything. Your job: run a few steps on takeoff and lift your legs once airborne. At
                Aguergour, the standard route takes you over the valley of Moulay Brahim, past Amazigh
                villages, and down to a landing field at 300 m. If thermals are active, your pilot will
                circle in rising air to extend the flight, with views of Jbel Toubkal on clear days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-moroccan p-5 text-center">
                <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Standard Flight
                </h4>
                <p className="text-sm text-[var(--text-muted)] mb-2">15-20 minutes</p>
                <p className="text-sm font-semibold text-[var(--color-accent)]">From 800 MAD</p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <TrendingUp className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Extended Thermal Flight
                </h4>
                <p className="text-sm text-[var(--text-muted)] mb-2">30-45 minutes</p>
                <p className="text-sm font-semibold text-[var(--color-accent)]">From 1,200 MAD</p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Star className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Premium + Video
                </h4>
                <p className="text-sm text-[var(--text-muted)] mb-2">30-45 min + GoPro footage</p>
                <p className="text-sm font-semibold text-[var(--color-accent)]">From 1,500 MAD</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-sm text-amber-700">
                  <span className="font-semibold text-amber-800">Booking advice:</span> Book directly with
                  established operators, not hotel tours or street brokers. Confirm your tandem pilot holds
                  a professional rating. Flights are weather-dependent — reputable operators never fly in
                  unsafe conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Paragliding Schools ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Paragliding Schools &amp; Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Established operators with proven safety records, certified equipment, and experienced pilots.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices. Seasonal pricing applies during peak tourist months and holiday periods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {paraglidingSchools.map((school) => (
              <div key={school.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {school.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-[var(--text-muted)] mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {school.location}
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {school.speciality}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{school.details}</p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]">
                  <DollarSign className="w-3.5 h-3.5" />
                  {school.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── XC Flying Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cross-Country (XC) Flying in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Mountain ridges, desert thermals, and valley corridors make Morocco a serious XC destination still underexplored compared to European sites.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                High Atlas Corridor: Aguergour to Tizi n&apos;Test
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                The classic Moroccan XC route. Launch from Aguergour at 1,200 m, thermal to the Atlas ridgeline
                above 3,000 m, then glide east using thermals triggered by south-facing slopes. Flights of
                80-120 km are documented on XContest. Landing options are limited to valley floors, and
                retrieve roads are slow.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Gauge className="w-3 h-3 text-[var(--color-gold)]" />
                  Advanced (IPPI 5) | 80-120 km | April-May
                </div>
                <div className="flex items-center gap-1.5">
                  <Mountain className="w-3 h-3 text-[var(--color-gold)]" />
                  Max altitude: 4,000 m+
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Dades Valley Run
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                Launch from the plateau above Boumalne Dades at 2,000+ m. The Dades Valley is a natural
                thermal street — dark, arid ground produces thermals that line up along the valley axis.
                Flights of 60-80 km are achievable. The valley floor offers generous landing fields, but
                the surrounding terrain is mountainous and committing.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Gauge className="w-3 h-3 text-[var(--color-gold)]" />
                  Intermediate-Advanced (IPPI 4-5) | 60-80 km
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[var(--color-gold)]" />
                  Best: March-May, October | Max: 3,200 m
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Middle Atlas Ridge Running
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                The forested ridges around Ifrane and Azrou provide a less committing XC environment.
                Rolling terrain, frequent landing fields, and parallel roads make retrieves easy.
                Thermals top out around 2,800-3,000 m — gentler and more predictable than the High Atlas.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Gauge className="w-3 h-3 text-[var(--color-gold)]" />
                  Skill: Intermediate (IPPI 4) | 40-70 km
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[var(--color-gold)]" />
                  Best months: May - October
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thermal Conditions & Wind Patterns ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CloudSun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Conditions &amp; Wind Patterns
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding Morocco&apos;s seasonal patterns is critical for planning your flying trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalConditions.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < season.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mb-3">
                    <div className="text-xs">
                      <span className="text-[var(--text-muted)]">Thermals: </span>
                      <span className="font-semibold text-[var(--text-primary)]">{season.thermals}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-[var(--text-muted)]">Wind risk: </span>
                      <span className="font-semibold text-[var(--text-primary)]">{season.windRisk}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{season.description}</p>
                  <div className="p-2.5 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {season.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Wind Patterns Deep Dive */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-moroccan p-6 md:p-8">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Wind className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Key Wind Systems to Know
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">The Alize (Trade Wind)</p>
                  <p>
                    Dominant Atlantic trade wind from the north, strongest June through August. Makes coastal
                    flying aggressive in summer but provides reliable ridge soaring in moderate months. Picks
                    up after 11 AM and strengthens through the afternoon at Essaouira and Agadir.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">The Chergui (Sirocco)</p>
                  <p>
                    Hot, dry Saharan wind from the east. Most common in spring. During Chergui episodes,
                    temperatures spike, visibility drops, and flying becomes dangerous. Ground all flights.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Valley Breezes (Anabatic / Katabatic)</p>
                  <p>
                    Atlas valleys produce predictable daily wind cycles. Morning katabatic flow gives way
                    to anabatic flow by 10-11 AM, triggering the first thermals. The flow reverses by late
                    afternoon. Understanding this cycle is essential for launch timing and XC planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Paragliding Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for tandem flights, courses, and guided XC across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing can change during peak tourist months and holiday periods.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipment Checklist ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Equipment &amp; Gear Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to bring depending on your flying goals. Tandem passengers need minimal gear; solo and XC pilots should pack carefully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {equipmentChecklist.map((category) => (
              <div key={category.category} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Licensing & Regulations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Licensing &amp; Regulations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you need to know about flying legally in Moroccan airspace.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {licensingInfo.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key safety factors specific to flying in Morocco for pilots and tandem passengers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Choosing an Operator
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Verify FRMAA registration. Ask to see the pilot&apos;s professional rating. Check online reviews
                about safety. Avoid operators who fly when other schools have cancelled. Low price should
                not be the deciding factor.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Heat &amp; Altitude
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dehydration is a real risk, especially during ground handling and waiting at launch. Carry
                water on every flight. Above 1,500 m, UV is intense — sunscreen and lip protection are
                essential. Thermal climbs to 4,000 m can cause mild hypoxia if sustained.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Wind className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Wind Assessment
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Conditions can change rapidly at mountain sites. Always assess the windsock before committing.
                If gusty variation exceeds 15 km/h, wait. The Chergui wind is genuinely dangerous — local
                operators will know when it is active. Never pressure a pilot to fly.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Mountain className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Remote Terrain Landings
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Carry a charged phone, PLB or InReach, and water. Some landings are far from roads — retrieve
                can take hours. File a flight plan with your driver including expected route and latest return
                time. Carry cash for local assistance after remote landings.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Eye className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Airspace &amp; Emergencies
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Controlled airspace around Marrakech Menara (GMMX) extends south toward Aguergour — know the
                boundaries. Download Moroccan airspace data for your flight instrument before arriving.
                Emergency numbers: 150 (ambulance), 177 (gendarmerie). Your operator should provide a
                direct contact for their retrieve driver and safety officer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does tandem paragliding cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Standard tandem flights start from 800 MAD for a 15-20 minute flight at most sites.
                Extended thermal flights of 30-45 minutes cost from 1,200 MAD. Premium packages with
                GoPro video and professional photos start from 1,500 MAD. Transfer from Marrakech to
                Aguergour is typically from 300 MAD round-trip. Seasonal pricing applies during peak
                tourist months (October through April), when prices may increase by 15-25%.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for paragliding in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March through May) and autumn (September through November) offer the best
                overall conditions. Spring has the strongest thermals and highest XC potential. Autumn
                provides more gentle, consistent conditions ideal for all skill levels. Summer works for
                high-altitude Atlas flights but is too windy on the coast. Winter flying is limited to
                lower altitude and coastal sites between frontal weather systems.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where is the most popular paragliding site in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Aguergour, located 50 km south of Marrakech, is the most visited and best-developed
                site. Its proximity to Marrakech (about 1 hour by car), reliable thermals, wide grassy
                launch, and 900 m vertical drop make it ideal for both tandem operations and solo pilots.
                Most visitors to Morocco who want to paraglide will fly here.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a license to paraglide in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Tandem passengers need no license — your pilot handles everything. Solo pilots must
                carry a valid national paragliding qualification recognized by the FRMAA. IPPI cards
                (issued through your national federation) are widely accepted. You should also carry
                proof of third-party liability insurance valid in Morocco, plus your passport.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is paragliding in Morocco safe?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Paragliding inherently carries risk, but Morocco&apos;s established operators maintain strong
                safety records. The key is choosing the right operator: verify FRMAA registration, check
                that equipment is EN-certified and within its service life, and confirm tandem pilots
                hold professional ratings (not just solo licenses). Never fly with an operator who
                offers to take off in conditions other schools have deemed unflyable.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I learn to paraglide in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Several schools offer beginner courses following the French FFVL syllabus. A 5-day
                beginner course covering ground handling, theory, and first supervised flights starts from
                6,000 MAD. Agadir and Aguergour are the best training locations — Agadir for gentle coastal
                conditions, Aguergour for learning thermal flying from day one. Most courses run in English
                and French.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best XC routes in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The High Atlas corridor from Aguergour toward Tizi n&apos;Test is the classic Moroccan XC
                route, with documented flights exceeding 100 km. The Dades Valley provides a natural
                thermal street for 60-80 km flights. The Middle Atlas around Ifrane offers gentler XC
                terrain for intermediate pilots. Spring (April and May) provides the strongest thermals
                for distance flying. All XC routes require a retrieve driver and good local knowledge.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I bring for a tandem paragliding flight?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Wear closed-toe shoes with ankle support (hiking boots are ideal), long pants, and layers
                since it is cooler at altitude than on the ground. Bring sunglasses with a secure strap,
                sunscreen, and a light jacket. Your phone or camera should have a strap or lanyard —
                dropping it from 1,000 m is permanent. The operator provides the helmet and harness.
                Avoid loose clothing, flip-flops, and hats that can blow off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-adventure-sports" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Adventure Sports
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Rock climbing, canyoning, mountain biking, and more adrenaline-fueled activities across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-atlas-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, climbing, and exploring the High Atlas, Middle Atlas, and Anti-Atlas ranges of Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/hot-air-balloon" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sunrise className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Hot Air Balloon Rides
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Sunrise balloon flights over Marrakech and the Atlas foothills — another way to see Morocco from the air.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold mb-4">
            Ready to Fly Over Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From a first tandem flight at Aguergour to a week-long XC safari through the Atlas Mountains.
            Book with an established operator, check the conditions, and prepare for some of the most
            spectacular aerial scenery on the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-adventure-sports"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Explore Adventure Sports <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Plan Your Trip <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
